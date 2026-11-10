import {createServer} from 'node:http';
import {readFile,stat} from 'node:fs/promises';
import {resolve,extname,sep} from 'node:path';
import {randomBytes,createHash} from 'node:crypto';
import {db,root,hash,verify,publicUser,isLockedAdmin,lessons,courses,ROLES,STAFF_ROLES,COURSE_ACCESS_MODES,ROLE_META,DEMO_PROFILES} from './store.mjs';
const PORT=Number(process.env.PORT || 5173);
const fail=(status,message)=>{throw Object.assign(new Error(message),{status});};
const json=(res,status,value)=>{res.writeHead(status,{'Content-Type':'application/json; charset=utf-8','Cache-Control':'no-store'});res.end(JSON.stringify(value));};
const digest=s=>createHash('sha256').update(s).digest('hex');
const attempts=new Map();
const isStaff=u=>STAFF_ROLES.includes(u?.role);
async function body(req){let size=0,chunks=[];for await(const chunk of req){size+=chunk.length;if(size>15*1024*1024)fail(413,'Fichier trop volumineux');chunks.push(chunk);}try{return JSON.parse(Buffer.concat(chunks).toString()||'{}');}catch{fail(400,'JSON invalide');}}
function user(req){const token=/(?:^|;\s*)session=([^;]+)/.exec(req.headers.cookie||'')?.[1];return token&&db.prepare('SELECT u.* FROM users u JOIN sessions s ON s.user_id=u.id WHERE s.token=? AND s.expires>?').get(digest(token),Date.now());}
function target(u,url){const id=Number(url.searchParams.get('user')||u.id);if(!isStaff(u)&&id!==u.id)fail(403,'Acces refuse');const t=db.prepare('SELECT * FROM users WHERE id=?').get(id);if(!t)fail(404,'Compte inconnu');return t;}
function stage(u){return lessons.map(l=>({...l,...JSON.parse(db.prepare('SELECT state FROM lessons WHERE user_id=? AND lesson_id=?').get(u.id,l.id)?.state||'{}')}));}
function allowed(u,id){
  if(u.role==='visiteur'||u.course_access==='aucun')fail(403,'Cours reserves aux stagiaires de l\'atelier');
  const isGraph=id.includes('-g');
  if(isGraph&&u.role==='stagiaire'&&!u.unlocked&&!['complet','graphisme'].includes(u.course_access))fail(403,'Graphisme verrouille');
  if(!isGraph&&u.role==='stagiaire'&&u.course_access==='graphisme')fail(403,'Dessin non active pour ce profil');
}
function createSession(res,u,now=Date.now()){
 const token=randomBytes(32).toString('hex');db.prepare('DELETE FROM sessions WHERE expires<?').run(now);
 db.prepare('INSERT INTO sessions VALUES(?,?,?)').run(digest(token),u.id,now+86400000);
 res.setHeader('Set-Cookie',`session=${token}; HttpOnly; SameSite=Strict; Path=/; Max-Age=86400${process.env.APP_ORIGIN?.startsWith('https:')?'; Secure':''}`);
 return json(res,200,publicUser(u));
}
export const server=createServer(async(req,res)=>{
 try{
 const url=new URL(req.url,'http://localhost');const path=url.pathname;
 res.setHeader('X-Content-Type-Options','nosniff');res.setHeader('Referrer-Policy','same-origin');res.setHeader('X-Frame-Options','DENY');
 if(path==='/api/health')return json(res,200,{status:'ok'});
 if(path==='/api/profiles'&&req.method==='GET'){
  const list=ROLES.map(r=>{const demo=DEMO_PROFILES.find(d=>d.role===r);return {role:r,...ROLE_META[r],demoEmail:process.env.DISABLE_DEMO_PROFILES==='1'?null:(demo?.email||null),demoName:demo?.name||ROLE_META[r].label};});
  return json(res,200,{profiles:list,quickLoginEnabled:process.env.DISABLE_DEMO_PROFILES!=='1'});
 }
 if(path==='/api/custom-courses'&&req.method==='GET'){
  return json(res,200,db.prepare('SELECT * FROM custom_courses ORDER BY created DESC').all());
 }
 if(path.startsWith('/api/')){
 if(!['GET','HEAD'].includes(req.method)){
 const origin=req.headers.origin;
 const expected=process.env.APP_ORIGIN || `http://${req.headers.host}`;
 if(origin && origin!==expected)fail(403,'Origine refusee');
 if(!req.headers['content-type']?.startsWith('application/json'))fail(415,'JSON requis');
 }
 if(path==='/api/login'&&req.method==='POST'){
 const b=await body(req);const key=req.socket.remoteAddress;const now=Date.now();let rate=attempts.get(key);
 if(!rate||rate.until<now){rate={count:0,until:now+900000};attempts.set(key,rate);}if(++rate.count>25)fail(429,'Trop de tentatives, reessayez dans 15 minutes');
 if(b.quickRole && process.env.DISABLE_DEMO_PROFILES!=='1' && process.env.NODE_ENV!=='test'){
  if(!ROLES.includes(b.quickRole))fail(400,'Profil invalide');
  const demo=DEMO_PROFILES.find(d=>d.role===b.quickRole);
  const u=demo && db.prepare('SELECT * FROM users WHERE email=?').get(demo.email);
  if(!u)fail(404,'Profil local introuvable');
  return createSession(res,u,now);
 }
 if(typeof b.email!=='string'||typeof b.password!=='string'||b.password.length>256)fail(400,'Identifiants invalides');
 const u=db.prepare('SELECT * FROM users WHERE email=?').get(b.email.toLowerCase());
 if(!u||!verify(b.password,u.password))fail(401,'Identifiants incorrects');
 if(u.role==='en_attente')fail(403,'Compte en attente de validation par l\'administrateur');
 if(b.role && ROLES.includes(b.role) && u.role!==b.role)fail(403,`Ce compte appartient au profil ${u.role}`);
 return createSession(res,u,now);
 }
 if(path==='/api/register'&&req.method==='POST'){
  const b=await body(req);
  if(typeof b.email!=='string'||!b.email.includes('@')||typeof b.name!=='string'||!b.name.trim()||typeof b.password!=='string'||b.password.length<12)fail(400,'Champs invalides (mot de passe 12 car. min)');
  const mail=b.email.trim().toLowerCase();
  if(db.prepare('SELECT id FROM users WHERE email=?').get(mail))fail(409,'Cet email existe deja');
  const row=db.prepare('INSERT INTO users(email,name,role,password,unlocked,course_access) VALUES(?,?,?,?,0,?)').run(mail,b.name.trim().slice(0,80),'en_attente',hash(b.password),'aucun');
  return json(res,201,{id:Number(row.lastInsertRowid),role:'en_attente',message:'Inscription enregistree. L\'administrateur attribuera votre profil et vos cours lors de la validation.'});
 }
 const u=user(req);if(!u)fail(401,'Connexion requise');
 if(path==='/api/me'&&req.method==='GET')return json(res,200,publicUser(u));
 if(path==='/api/logout'&&req.method==='POST'){db.prepare('DELETE FROM sessions WHERE token=?').run(digest(/session=([^;]+)/.exec(req.headers.cookie)?.[1]||''));res.setHeader('Set-Cookie','session=; HttpOnly; SameSite=Strict; Path=/; Max-Age=0');return json(res,200,{ok:true});}
 if(path==='/api/jobs'&&req.method==='GET'){
  return json(res,200,db.prepare('SELECT * FROM jobs ORDER BY id DESC').all());
 }
 if(path==='/api/jobs'&&req.method==='POST'){
  if(!isStaff(u))fail(403,'Administrateur requis pour publier une offre');
  const b=await body(req);
  if(typeof b.title!=='string'||!b.title.trim()||typeof b.company!=='string'||!b.company.trim())fail(400,'Titre et structure requis');
  const row=db.prepare('INSERT INTO jobs(type,title,company,location,region,remuneration,norme,description,contact_url) VALUES(?,?,?,?,?,?,?,?,?)').run(
    String(b.type||'Stage').slice(0,40),b.title.trim().slice(0,140),b.company.trim().slice(0,100),String(b.location||'France').slice(0,80),String(b.region||'ile-de-france').slice(0,40),String(b.remuneration||'Selon convention').slice(0,80),String(b.norme||'Atelier / PAO').slice(0,120),String(b.description||'').slice(0,2000),String(b.contactUrl||'mailto:contact@croisee-arts.local').slice(0,240)
  );
  return json(res,201,{id:Number(row.lastInsertRowid)});
 }
 const jobMatch=/^\/api\/jobs\/(\d+)$/.exec(path);
 if(jobMatch&&req.method==='DELETE'){
  if(!isStaff(u))fail(403,'Administrateur requis');
  db.prepare('DELETE FROM jobs WHERE id=?').run(Number(jobMatch[1]));
  return json(res,200,{ok:true});
 }
 if(path==='/api/custom-courses'&&req.method==='POST'){
  if(!isStaff(u))fail(403,'Administrateur requis pour deposer un cours');
  const b=await body(req);
  if(typeof b.title!=='string'||!b.title.trim())fail(400,'Titre requis');
  const cid='cours-admin-'+Date.now();
  db.prepare('INSERT INTO custom_courses(id,theme,pole,code,title,norme,summary,author) VALUES(?,?,?,?,?,?,?,?)').run(cid,String(b.theme||'theme-1').slice(0,40),b.pole==='graphisme'?'graphisme':'dessin',String(b.code||'A-01').slice(0,16),b.title.trim().slice(0,140),String(b.norme||'Atelier').trim().slice(0,200),String(b.summary||'').slice(0,2000),u.name);
  return json(res,201,{id:cid});
 }
 if(path==='/api/students'&&req.method==='GET'){
  if(!isStaff(u))fail(403,'Administrateur requis');
  return json(res,200,db.prepare("SELECT * FROM users WHERE role='stagiaire' ORDER BY id ASC").all().map(publicUser));
 }
 if(path==='/api/users'&&req.method==='GET'){
  if(u.role!=='admin')fail(403,'Administrateur requis');
  return json(res,200,db.prepare('SELECT * FROM users ORDER BY id ASC').all().map(publicUser));
 }
 if(path==='/api/users'&&req.method==='POST'){
  if(u.role!=='admin')fail(403,'Administrateur requis');
  const b=await body(req);
  if(typeof b.email!=='string'||!b.email.includes('@')||typeof b.name!=='string'||!b.name.trim()||!ROLES.includes(b.role)||typeof b.password!=='string'||b.password.length<12)fail(400,'Champs invalides (mot de passe 12 car. min)');
  const mail=b.email.trim().toLowerCase();
  if(db.prepare('SELECT id FROM users WHERE email=?').get(mail))fail(409,'Cet email existe deja');
  const access=b.role==='visiteur'?'aucun':(COURSE_ACCESS_MODES.includes(b.courseAccess)?b.courseAccess:(ROLE_META[b.role]?.courseAccess||'dessin'));
  const unlocked=access==='complet'||access==='graphisme'?1:0;
  const row=db.prepare('INSERT INTO users(email,name,role,password,unlocked,course_access) VALUES(?,?,?,?,?,?)').run(mail,b.name.trim().slice(0,80),b.role,hash(b.password),unlocked,access);
  return json(res,201,{id:Number(row.lastInsertRowid)});
 }
 const userMatch=/^\/api\/users\/(\d+)$/.exec(path);
 if(userMatch&&req.method==='PUT'){
  if(u.role!=='admin')fail(403,'Administrateur requis');
  const uid=Number(userMatch[1]);const targetU=db.prepare('SELECT * FROM users WHERE id=?').get(uid);
  if(!targetU)fail(404,'Compte introuvable');
  const b=await body(req);
  if(isLockedAdmin(targetU)&&b.role&&b.role!=='admin')fail(403,'Compte Administrateur principal verrouille');
  if(b.role&&[...ROLES,'en_attente'].includes(b.role)){
    const nextAcc=b.role==='visiteur'||b.role==='en_attente'?'aucun':(targetU.course_access==='aucun'?'dessin':targetU.course_access);
    db.prepare('UPDATE users SET role=?,course_access=? WHERE id=?').run(b.role,nextAcc,uid);
  }
  if(b.courseAccess&&COURSE_ACCESS_MODES.includes(b.courseAccess)){
    const unl=b.courseAccess==='complet'||b.courseAccess==='graphisme'?1:0;
    db.prepare('UPDATE users SET course_access=?,unlocked=? WHERE id=?').run(b.courseAccess,unl,uid);
  }
  if(typeof b.unlocked==='boolean'){
    const acc=b.unlocked?'complet':'dessin';
    db.prepare('UPDATE users SET unlocked=?,course_access=? WHERE id=?').run(Number(b.unlocked),acc,uid);
  }
  return json(res,200,{ok:true});
 }
 if(userMatch&&req.method==='DELETE'){
  if(u.role!=='admin')fail(403,'Administrateur requis');
  const uid=Number(userMatch[1]);const targetU=db.prepare('SELECT * FROM users WHERE id=?').get(uid);
  if(uid===u.id||isLockedAdmin(targetU))fail(400,'Compte Administrateur verrouille : suppression interdite');
  db.prepare('DELETE FROM sessions WHERE user_id=?').run(uid);db.prepare('DELETE FROM lessons WHERE user_id=?').run(uid);db.prepare('DELETE FROM submissions WHERE user_id=?').run(uid);db.prepare('DELETE FROM users WHERE id=?').run(uid);
  return json(res,200,{ok:true});
 }
 const t=target(u,url);
 if(path==='/api/unlock'&&req.method==='PUT'){if(!isStaff(u))fail(403,'Admin requis');const b=await body(req);if(typeof b.unlocked!=='boolean')fail(400,'Etat invalide');const acc=b.unlocked?'complet':'dessin';db.prepare('UPDATE users SET unlocked=?,course_access=? WHERE id=?').run(Number(b.unlocked),acc,t.id);return json(res,200,{unlocked:b.unlocked,courseAccess:acc});}
 if(path==='/api/lessons/reset-example'&&req.method==='POST'){if(!isStaff(u))fail(403,'Admin requis');db.prepare('DELETE FROM lessons WHERE user_id=?').run(t.id);return json(res,200,stage(t));}
 if(path==='/api/lessons'&&req.method==='GET')return json(res,200,stage(t));
 if(path.startsWith('/api/lessons/')&&req.method==='PUT'){
 const id=path.split('/').pop();const l=lessons.find(l=>l.id===id);if(!l)fail(404,'Lecon inconnue');allowed(t,id);
 const b=await body(req);const existing=stage(t).find(l=>l.id===id);
 if(!isStaff(u)&&(b.status!=='en_attente'||existing.status==='validee'))fail(403,'Transition refusee');
 if(!['a_faire','en_attente','validee'].includes(b.status))fail(400,'Statut invalide');
 const state=isStaff(u)?{status:b.status,note:String(b.note||(b.status==='validee'?'Acquis':'Non acquis')).slice(0,40),commentAdmin:String(b.commentAdmin||'').slice(0,2000),dateValidation:b.status==='validee'?new Date().toISOString().slice(0,10):null}:{...existing,status:'en_attente'};
 db.prepare('INSERT INTO lessons VALUES(?,?,?) ON CONFLICT(user_id,lesson_id) DO UPDATE SET state=excluded.state').run(t.id,id,JSON.stringify(state));return json(res,200,stage(t));
 }
 if(path==='/api/submissions'&&req.method==='GET')return json(res,200,db.prepare('SELECT id,course_id AS courseId,file_name AS fileName,notes AS studentNotes,status,grade,feedback,created AS submittedAt FROM submissions WHERE user_id=? ORDER BY id DESC').all(t.id));
 if(path==='/api/submissions'&&req.method==='POST'){
 const b=await body(req);if(!courses.some(c=>c.id===b.courseId))fail(400,'Cours inconnu');allowed(u,b.courseId);
 if(typeof b.fileName!=='string'||!(/\.(png|jpe?g|pdf|webp|svg|ai|psd)$/i.test(b.fileName))||typeof b.content!=='string'||!b.content.length)fail(400,'Fichier invalide');
 const content=Buffer.from(b.content,'base64');if(!content.length||content.length>10*1024*1024)fail(413,'Limite : 10 Mo');
 const name=b.fileName.split(/[\\/]/).pop().normalize('NFD').replace(/[\u0300-\u036f]/g,'').replace(/[^a-zA-Z0-9_.-]/g,'-').slice(-100);
 const row=db.prepare('INSERT INTO submissions(user_id,course_id,file_name,content,notes) VALUES(?,?,?,?,?)').run(u.id,b.courseId,name,content,String(b.studentNotes||'').slice(0,4000));return json(res,201,{id:Number(row.lastInsertRowid)});
 }
 const match=/^\/api\/submissions\/(\d+)(\/file)?$/.exec(path);
 if(match){const s=db.prepare('SELECT * FROM submissions WHERE id=?').get(Number(match[1]));if(!s)fail(404,'Depot inconnu');if(!isStaff(u)&&s.user_id!==u.id)fail(403,'Acces refuse');
 if(match[2]&&req.method==='GET'){res.writeHead(200,{'Content-Type':'application/octet-stream','Content-Disposition':`attachment; filename="${s.file_name}"`,'Cache-Control':'no-store'});return res.end(s.content);}
 if(!match[2]&&req.method==='PUT'){if(!isStaff(u))fail(403,'Admin requis');const b=await body(req);const g=b.acquisition==='acquis'?20:b.acquisition==='non_acquis'?0:b.grade;if(!['validee','a_faire'].includes(b.status)||typeof g!=='number'||!Number.isFinite(g)||g<0||g>20)fail(400,'Evaluation invalide');db.prepare('UPDATE submissions SET status=?,grade=?,feedback=? WHERE id=?').run(b.status,g,String(b.feedback||'').slice(0,4000),s.id);return json(res,200,{ok:true});}
 if(!match[2]&&req.method==='DELETE'){if(!isStaff(u))fail(403,'Admin requis');db.prepare('DELETE FROM submissions WHERE id=?').run(s.id);return json(res,200,{ok:true});}
 }
 fail(404,'Route inconnue');
 }
 if(!['GET','HEAD'].includes(req.method))fail(405,'Methode refusee');
 const decoded=decodeURIComponent(path);const file=resolve(root,'.'+(decoded==='/'?'/index.html':decoded));
 if(!file.startsWith(root+sep)||!(/^(index\.html|app\.js|canvas\.js|courses\.js|js[\\/].+\.js|assets[\\/].+)$/i.test(file.slice(root.length+1))))fail(404,'Introuvable');
 const types={'.html':'text/html; charset=utf-8','.js':'text/javascript; charset=utf-8','.css':'text/css','.png':'image/png','.jpg':'image/jpeg','.webp':'image/webp','.svg':'image/svg+xml'};
 if(!(await stat(file)).isFile())fail(404,'Introuvable');res.setHeader('Content-Type',types[extname(file)]||'application/octet-stream');res.end(await readFile(file));
 }catch(e){if(!res.headersSent)json(res,e.status|| (e.code==='ENOENT'?404:500),{error:e.status?e.message:'Erreur serveur'});else res.end();}
});
if(process.env.NODE_ENV!=='test')server.listen(PORT,process.env.HOST||'127.0.0.1',()=>console.log(`La Croisee des Arts : http://localhost:${PORT}`));
