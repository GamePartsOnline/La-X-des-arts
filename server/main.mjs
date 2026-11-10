import {createServer} from 'node:http';
import {readFile,stat} from 'node:fs/promises';
import {resolve,extname,sep} from 'node:path';
import {randomBytes,createHash} from 'node:crypto';
import {db,root,verify,publicUser,lessons,courses} from './store.mjs';
const PORT=Number(process.env.PORT || 5173);
const fail=(status,message)=>{throw Object.assign(new Error(message),{status});};
const json=(res,status,value)=>{res.writeHead(status,{'Content-Type':'application/json; charset=utf-8','Cache-Control':'no-store'});res.end(JSON.stringify(value));};
const digest=s=>createHash('sha256').update(s).digest('hex');
const attempts=new Map();
async function body(req){let size=0,chunks=[];for await(const chunk of req){size+=chunk.length;if(size>15*1024*1024)fail(413,'Fichier trop volumineux');chunks.push(chunk);}try{return JSON.parse(Buffer.concat(chunks).toString()||'{}');}catch{fail(400,'JSON invalide');}}
function user(req){const token=/(?:^|;\s*)session=([^;]+)/.exec(req.headers.cookie||'')?.[1];return token&&db.prepare('SELECT u.* FROM users u JOIN sessions s ON s.user_id=u.id WHERE s.token=? AND s.expires>?').get(digest(token),Date.now());}
function target(u,url){const id=Number(url.searchParams.get('user')||u.id);if(u.role!=='admin'&&id!==u.id)fail(403,'Acces refuse');const t=db.prepare('SELECT * FROM users WHERE id=?').get(id);if(!t)fail(404,'Compte inconnu');return t;}
function stage(u){return lessons.map(l=>({...l,...JSON.parse(db.prepare('SELECT state FROM lessons WHERE user_id=? AND lesson_id=?').get(u.id,l.id)?.state||'{}')}));}
function allowed(u,id){if((id.includes('-g'))&&!u.unlocked&&u.role!=='admin')fail(403,'Graphisme verrouille');}
export const server=createServer(async(req,res)=>{
 try{
 const url=new URL(req.url,'http://localhost');const path=url.pathname;
 res.setHeader('X-Content-Type-Options','nosniff');res.setHeader('Referrer-Policy','same-origin');res.setHeader('X-Frame-Options','DENY');
 if(path==='/api/health')return json(res,200,{status:'ok'});
 if(path.startsWith('/api/')){
 if(!['GET','HEAD'].includes(req.method)){
 const origin=req.headers.origin;
 const expected=process.env.APP_ORIGIN || `http://${req.headers.host}`;
 if(origin && origin!==expected)fail(403,'Origine refusee');
 if(!req.headers['content-type']?.startsWith('application/json'))fail(415,'JSON requis');
 }
 if(path==='/api/login'&&req.method==='POST'){
 const b=await body(req);const key=req.socket.remoteAddress;const now=Date.now();let rate=attempts.get(key);
 if(!rate||rate.until<now){rate={count:0,until:now+900000};attempts.set(key,rate);}if(++rate.count>15)fail(429,'Trop de tentatives, reessayez dans 15 minutes');
 if(typeof b.email!=='string'||typeof b.password!=='string'||b.password.length>256)fail(400,'Identifiants invalides');
 const u=db.prepare('SELECT * FROM users WHERE email=?').get(b.email.toLowerCase());
 if(!u||!verify(b.password,u.password))fail(401,'Identifiants incorrects');
 const token=randomBytes(32).toString('hex');db.prepare('DELETE FROM sessions WHERE expires<?').run(now);
 db.prepare('INSERT INTO sessions VALUES(?,?,?)').run(digest(token),u.id,now+86400000);
 res.setHeader('Set-Cookie',`session=${token}; HttpOnly; SameSite=Strict; Path=/; Max-Age=86400${process.env.APP_ORIGIN?.startsWith('https:')?'; Secure':''}`);
 return json(res,200,publicUser(u));
 }
 const u=user(req);if(!u)fail(401,'Connexion requise');
 if(path==='/api/me'&&req.method==='GET')return json(res,200,publicUser(u));
 if(path==='/api/logout'&&req.method==='POST'){db.prepare('DELETE FROM sessions WHERE token=?').run(digest(/session=([^;]+)/.exec(req.headers.cookie)?.[1]||''));res.setHeader('Set-Cookie','session=; HttpOnly; SameSite=Strict; Path=/; Max-Age=0');return json(res,200,{ok:true});}
 if(path==='/api/students'&&req.method==='GET'){if(u.role!=='admin')fail(403,'Tuteur requis');return json(res,200,db.prepare("SELECT id,name,email,unlocked FROM users WHERE role='stagiaire'").all());}
 const t=target(u,url);
 if(path==='/api/unlock'&&req.method==='PUT'){if(u.role!=='admin')fail(403,'Tuteur requis');const b=await body(req);if(typeof b.unlocked!=='boolean')fail(400,'Etat invalide');db.prepare('UPDATE users SET unlocked=? WHERE id=?').run(Number(b.unlocked),t.id);return json(res,200,{unlocked:b.unlocked});}
 if(path==='/api/lessons'&&req.method==='GET')return json(res,200,stage(t));
 if(path.startsWith('/api/lessons/')&&req.method==='PUT'){
 const id=path.split('/').pop();const l=lessons.find(l=>l.id===id);if(!l)fail(404,'Lecon inconnue');allowed(t,id);
 const b=await body(req);const existing=stage(t).find(l=>l.id===id);
 if(u.role!=='admin'&&(b.status!=='en_attente'||existing.status==='validee'))fail(403,'Transition refusee');
 if(!['a_faire','en_attente','validee'].includes(b.status))fail(400,'Statut invalide');
 const state=u.role==='admin'?{status:b.status,note:String(b.note||'-').slice(0,40),commentAdmin:String(b.commentAdmin||'').slice(0,2000),dateValidation:b.status==='validee'?new Date().toISOString().slice(0,10):null}:{...existing,status:'en_attente'};
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
 if(match){const s=db.prepare('SELECT * FROM submissions WHERE id=?').get(Number(match[1]));if(!s)fail(404,'Depot inconnu');if(u.role!=='admin'&&s.user_id!==u.id)fail(403,'Acces refuse');
 if(match[2]&&req.method==='GET'){res.writeHead(200,{'Content-Type':'application/octet-stream','Content-Disposition':`attachment; filename="${s.file_name}"`,'Cache-Control':'no-store'});return res.end(s.content);}
 if(!match[2]&&req.method==='PUT'){if(u.role!=='admin')fail(403,'Tuteur requis');const b=await body(req);if(!['validee','a_faire'].includes(b.status)||typeof b.grade!=='number'||!Number.isFinite(b.grade)||b.grade<0||b.grade>20)fail(400,'Note attendue entre 0 et 20');db.prepare('UPDATE submissions SET status=?,grade=?,feedback=? WHERE id=?').run(b.status,b.grade,String(b.feedback||'').slice(0,4000),s.id);return json(res,200,{ok:true});}
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
