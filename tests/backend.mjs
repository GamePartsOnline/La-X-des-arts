import {test,after} from 'node:test';
import assert from 'node:assert/strict';
import {mkdtempSync,rmSync} from 'node:fs';
import {tmpdir} from 'node:os';
import {join} from 'node:path';
const folder=mkdtempSync(join(tmpdir(),'croisee-test-'));
process.env.DATA_DIR=folder;process.env.NODE_ENV='test';
const {db,hash,courses,lessons,ROLE_META}=await import('../server/store.mjs');
const {server}=await import('../server/main.mjs');
for(const [email,role] of [
  ['admin@test.invalid','admin'],
  ['student@test.invalid','stagiaire'],
  ['other@test.invalid','stagiaire'],
  ['visiteur@test.invalid','visiteur']
]) {
  db.prepare('INSERT INTO users(email,name,role,password,unlocked,course_access) VALUES(?,?,?,?,?,?)').run(email,role,role,hash('Test-password-12345'),ROLE_META[role]?.unlockedByDefault??0,ROLE_META[role]?.courseAccess??'dessin');
}
await new Promise(resolve=>server.listen(0,'127.0.0.1',resolve));
const base=`http://127.0.0.1:${server.address().port}`;
async function request(path,method='GET',body,cookie){return fetch(base+path,{method,headers:{'Content-Type':'application/json',...(cookie?{Cookie:cookie}:{})},...(body!==undefined?{body:JSON.stringify(body)}:{})});}
async function login(email,role){const res=await request('/api/login','POST',{email,password:'Test-password-12345',...(role?{role}:{})});assert.equal(res.status,200);assert.match(res.headers.get('set-cookie'),/HttpOnly/);return res.headers.get('set-cookie').split(';')[0];}
const admin=await login('admin@test.invalid','admin'),
      student=await login('student@test.invalid','stagiaire'),
      other=await login('other@test.invalid','stagiaire'),
      visiteur=await login('visiteur@test.invalid','visiteur');
after(async()=>{await new Promise(resolve=>server.close(resolve));db.close();rmSync(folder,{recursive:true,force:true});});
test('unauthenticated requests, wrong passwords and 3 strict roles (stagiaire, visiteur, admin) are enforced',async()=>{
  assert.equal((await request('/api/me')).status,401);
  assert.equal((await request('/api/jobs')).status,401);
  assert.equal((await request('/api/login','POST',{email:'admin@test.invalid',password:'wrong'})).status,401);
  assert.equal((await request('/api/login','POST',{email:'student@test.invalid',password:'Test-password-12345',role:'admin'})).status,403);
  const profilesRes=await request('/api/profiles');
  assert.equal(profilesRes.status,200);
  const {profiles}=await profilesRes.json();
  assert.deepEqual(profiles.map(p=>p.role),['stagiaire','visiteur','admin']);
});
test('static serving excludes database and server source',async()=>{for(const file of ['/data/school.sqlite','/server/store.mjs','/.git/config','/package.json'])assert.equal((await request(file)).status,404);assert.equal((await request('/')).status,200);});
test('stagiaire and visiteur cannot access admin endpoints, admin is locked from deletion',async()=>{
  assert.equal((await request('/api/students','GET',undefined,student)).status,403);
  assert.equal((await request('/api/students','GET',undefined,visiteur)).status,403);
  assert.equal((await request('/api/lessons?user=3','GET',undefined,student)).status,403);
  assert.equal((await request('/api/unlock','PUT',{unlocked:true},student)).status,403);
  assert.equal((await request('/api/users','GET',undefined,visiteur)).status,403);
  assert.equal((await request('/api/users','GET',undefined,admin)).status,200);
  assert.equal((await request('/api/users/1','DELETE',{},admin)).status,400);
  assert.equal((await request('/api/users/1','PUT',{role:'stagiaire'},admin)).status,403);
});
test('authenticated jobs board is readable by connected users and writable only by admin',async()=>{
  assert.equal((await request('/api/jobs','GET',undefined,visiteur)).status,200);
  assert.equal((await request('/api/jobs','POST',{title:'Stage PAO',company:'Atelier'},student)).status,403);
  const postJob=await request('/api/jobs','POST',{type:'Stage RPIP',title:'Stage Prépresse & Découpe 1:1',company:'Atelier Graphique',location:'Grand Est',region:'grand-est'},admin);
  assert.equal(postJob.status,201);
  const jobsList=await(await request('/api/jobs','GET',undefined,student)).json();
  assert.equal(jobsList.length,1);
});
test('lesson workflow is persisted and controlled by admin (only L-01 Acquis by default)',async()=>{
  const initial=await(await request('/api/lessons','GET',undefined,student)).json();
  assert.equal(initial.filter(l=>l.status==='validee').length,1);
  assert.equal(initial[0].id,'lecon-d01');
  const id=lessons.find(l=>l.semaine===1 && l.id!=='lecon-d01').id;
  assert.equal((await request('/api/lessons/'+id,'PUT',{status:'validee'},student)).status,403);
  assert.equal((await request('/api/lessons/'+id,'PUT',{status:'en_attente'},student)).status,200);
  assert.equal((await request('/api/lessons/'+id+'?user=2','PUT',{status:'validee',note:'Acquis',commentAdmin:'Validé par l\'admin'},admin)).status,200);
  const state=await(await request('/api/lessons','GET',undefined,student)).json();
  assert.equal(state.find(l=>l.id===id).note,'Acquis');
  assert.equal((await request('/api/lessons/reset-example?user=2','POST',{},admin)).status,200);
  const resetState=await(await request('/api/lessons','GET',undefined,student)).json();
  assert.equal(resetState.filter(l=>l.status==='validee').length,1);
});
test('courses are strictly reserved for stagiaires and blocked for visiteur',async()=>{
  const id=lessons.find(l=>l.semaine===2).id;
  assert.equal((await request('/api/lessons/'+id,'PUT',{status:'en_attente'},student)).status,403);
  assert.equal((await request('/api/lessons/'+id,'PUT',{status:'en_attente'},visiteur)).status,403);
  assert.equal((await request('/api/unlock?user=2','PUT',{unlocked:true},admin)).status,200);
  assert.equal((await request('/api/lessons/'+id,'PUT',{status:'en_attente'},student)).status,200);
});
test('binary uploads, ownership, Acquis/Non acquis evaluation and deletion by admin',async()=>{
  const bytes=Buffer.from('%PDF-1.4\nexample');
  const result=await request('/api/submissions','POST',{courseId:courses[0].id,fileName:'exercise.pdf',content:bytes.toString('base64'),studentNotes:'Question'},student);
  assert.equal(result.status,201);
  const {id}=await result.json();
  assert.equal((await request('/api/submissions/'+id+'/file','GET',undefined,other)).status,403);
  const file=await request('/api/submissions/'+id+'/file','GET',undefined,admin);
  assert.deepEqual(Buffer.from(await file.arrayBuffer()),bytes);
  assert.equal((await request('/api/submissions/'+id,'PUT',{status:'validee',acquisition:'acquis'},student)).status,403);
  assert.equal((await request('/api/submissions/'+id,'PUT',{status:'validee',acquisition:'acquis',feedback:'Acquis'},admin)).status,200);
  const list=await(await request('/api/submissions','GET',undefined,student)).json();
  assert.equal(list[0].grade,20);
  assert.equal(list[0].feedback,'Acquis');
  assert.equal((await request('/api/submissions/'+id,'DELETE',undefined,admin)).status,200);
});
test('cross-origin writes blocked and logout revokes the session',async()=>{assert.equal((await fetch(base+'/api/logout',{method:'POST',headers:{Origin:'https://evil.invalid','Content-Type':'application/json',Cookie:other},body:'{}'})).status,403);assert.equal((await request('/api/logout','POST',{},other)).status,200);assert.equal((await request('/api/me','GET',undefined,other)).status,401);});
