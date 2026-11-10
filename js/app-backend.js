let backendUser=null, backendStudent=null, backendLessons=[], backendSubmissions=[];
const escapeBackend=value=>String(value??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
async function api(path,method='GET',body){
 const res=await fetch('/api'+path,{method,headers:{'Content-Type':'application/json'},...(body?{body:JSON.stringify(body)}:{})});
 const data=await res.json();if(!res.ok){if(res.status===401)loginScreen();throw new Error(data.error);}return data;
}
function backendError(e){showCustomToast('Action impossible',e.message,'warning');}
const studentQuery=()=>backendStudent?'?user='+backendStudent:'';
async function refreshBackend(){
 backendUser=await api('/me');
 if(backendUser.role==='admin'){
 const students=await api('/students');
 if(!students.some(s=>s.id===backendStudent))backendStudent=students[0]?.id||null;
 const selected=students.find(s=>s.id===backendStudent);
 isGraphismeUnlocked=!!selected?.unlocked;
 STAGIAIRE_PROFILE.nom=selected?.name||'Aucun stagiaire';
 }else{backendStudent=null;isGraphismeUnlocked=backendUser.unlocked;STAGIAIRE_PROFILE.nom=backendUser.name;}
 STAGIAIRE_PROFILE.nom=escapeBackend(STAGIAIRE_PROFILE.nom);
 ADMIN_PROFILE.nom=backendUser.role==='admin'?escapeBackend(backendUser.name):'Tuteur';
 currentRole=backendUser.role;
 backendLessons=await api('/lessons'+studentQuery());
 backendSubmissions=await api('/submissions'+studentQuery());
 updateAppForCurrentRole();renderCourses();await renderBackendReview();
}
function loginScreen(){
 if(document.getElementById('backend-login'))return;
 const panel=document.createElement('div');panel.id='backend-login';panel.style='position:fixed;inset:0;z-index:99999;background:#0e0f12;display:grid;place-items:center;color:white';
 panel.innerHTML=`<form style="width:min(380px,90vw);display:grid;gap:18px" id="backend-form"><h1 style="font-size:24px;font-weight:bold">La Croisée des Arts</h1><p>Connexion à votre espace</p><label>Adresse e-mail<input name="email" type="email" autocomplete="username" required style="display:block;width:100%;padding:12px;background:#23262f"></label><label>Mot de passe<input name="password" type="password" autocomplete="current-password" required style="display:block;width:100%;padding:12px;background:#23262f"></label><button style="padding:12px;background:#f8485e">Se connecter</button><p id="backend-login-error" role="alert"></p></form>`;
 document.body.append(panel);
 panel.querySelector('form').onsubmit=async e=>{e.preventDefault();const form=e.currentTarget;const button=form.querySelector('button');button.disabled=true;try{await api('/login','POST',{email:form.email.value,password:form.password.value});await refreshBackend();panel.remove();showTab(currentRole==='admin'?'admin':'stagiaire');}catch(err){panel.querySelector('[role=alert]').textContent=err.message;}finally{button.disabled=false;}};
}
getStageLessons=()=>backendLessons.map(l=>({...l,titre:escapeBackend(l.titre),commentAdmin:escapeBackend(l.commentAdmin),note:escapeBackend(l.note)}));
saveStageLessons=()=>{throw new Error('Utilisez les actions du serveur');};
switchUserRole=async()=>{try{await api('/logout','POST',{});backendUser=null;backendLessons=[];backendSubmissions=[];loginScreen();}catch(e){backendError(e);}};
updateHeaderRoleUI=()=>{const el=document.getElementById('role-switcher-container');if(el)el.innerHTML=`<span class="text-xs">${escapeBackend(backendUser?.name||'Connexion requise')} · ${escapeBackend(backendUser?.role||'')}</span> <button class="px-3 py-2 rounded bg-[#23262f]" onclick="switchUserRole()">Déconnexion</button>`;};
const oldSidebar=updateSidebarProfileUI;
updateSidebarProfileUI=()=>{oldSidebar();const button=document.querySelector('#sidebar-user-footer button');if(button){button.textContent='Déconnexion';button.onclick=()=>switchUserRole();}};
toggleGraphismeUnlockByAdmin=async state=>{try{if(!backendStudent)throw new Error('Aucun stagiaire sélectionné');await api('/unlock'+studentQuery(),'PUT',{unlocked:typeof state==='boolean'?state:!isGraphismeUnlocked});await refreshBackend();}catch(e){backendError(e);}};
stagiaireSubmitLesson=async id=>{try{await api('/lessons/'+id,'PUT',{status:'en_attente'});await refreshBackend();}catch(e){backendError(e);}};
adminValidateLesson=async(id,note,commentAdmin)=>{try{await api('/lessons/'+id+studentQuery(),'PUT',{status:'validee',note,commentAdmin});await refreshBackend();}catch(e){backendError(e);}};
adminRejectLesson=async(id,commentAdmin)=>{try{await api('/lessons/'+id+studentQuery(),'PUT',{status:'a_faire',commentAdmin});await refreshBackend();}catch(e){backendError(e);}};
getCourseSubmission=id=>{const s=backendSubmissions.find(s=>s.courseId===id);return s?{...s,fileName:escapeBackend(s.fileName),studentNotes:escapeBackend(s.studentNotes),grade:s.grade===null?'En attente':`${s.grade} / 20`,feedback:escapeBackend(s.feedback)}:null;};
handleCourseFileUpload=(event,id)=>{const file=event.target.files?.[0];if(!file)return;if(file.size>10*1024*1024)return backendError(new Error('Limite : 10 Mo'));pendingCourseUploads[id]={file,name:escapeBackend(file.name),size:(file.size/1024).toFixed(1)+' Ko'};renderCourses();};
submitCourseFile=async id=>{try{const upload=pendingCourseUploads[id];if(!upload?.file)throw new Error('Sélectionnez un fichier');const notes=document.getElementById('course-student-notes-'+id)?.value||'';const content=await new Promise((resolve,reject)=>{const reader=new FileReader();reader.onload=()=>resolve(reader.result.split(',')[1]);reader.onerror=reject;reader.readAsDataURL(upload.file);});await api('/submissions','POST',{courseId:id,fileName:upload.file.name,content,studentNotes:notes});delete pendingCourseUploads[id];await refreshBackend();}catch(e){backendError(e);}};
resetCourseFileUpload=id=>{delete pendingCourseUploads[id];backendSubmissions=backendSubmissions.filter(s=>s.courseId!==id);renderCourses();};
async function selectBackendStudent(id){backendStudent=Number(id);try{await refreshBackend();}catch(e){backendError(e);}}
async function reviewBackendSubmission(id){const form=document.getElementById('review-'+id);try{await api('/submissions/'+id,'PUT',{grade:Number(form.grade.value),status:form.status.value,feedback:form.feedback.value});await refreshBackend();}catch(e){backendError(e);}}
async function renderBackendReview(){
 if(backendUser?.role!=='admin')return;
 const container=document.getElementById('admin-dashboard-container');if(!container)return;
 const students=await api('/students');
 const panel=document.createElement('section');panel.className='p-6 space-y-4';panel.innerHTML=`<h2 class="text-xl font-bold">Dépôts et corrections</h2><label>Stagiaire <select style="background:#23262f;padding:8px" onchange="selectBackendStudent(this.value)">${students.map(s=>`<option value="${s.id}" ${s.id===backendStudent?'selected':''}>${escapeBackend(s.name)}</option>`).join('')}</select></label>${backendSubmissions.length?'':'<p>Aucun fichier déposé.</p>'}${backendSubmissions.map(s=>`<form id="review-${s.id}" class="p-4 border rounded space-y-3" onsubmit="event.preventDefault();reviewBackendSubmission(${s.id})"><p>${escapeBackend(s.courseId)} : <a class="underline" href="/api/submissions/${s.id}/file">${escapeBackend(s.fileName)}</a></p><p>${escapeBackend(s.studentNotes)}</p><label>Note / 20 <input name="grade" type="number" min="0" max="20" step="0.5" value="${s.grade??''}" required style="background:#23262f"></label><select name="status" style="background:#23262f"><option value="validee">Valider</option><option value="a_faire">À reprendre</option></select><textarea name="feedback" placeholder="Commentaire du tuteur" style="display:block;background:#23262f;width:100%">${escapeBackend(s.feedback)}</textarea><button class="px-4 py-2 rounded bg-[#f8485e]">Enregistrer la correction</button></form>`).join('')}`;
 document.getElementById('backend-review')?.remove();panel.id='backend-review';container.prepend(panel);
}
const originalShowTab=showTab;
showTab=id=>{originalShowTab(id);if(id==='admin')renderBackendReview().catch(backendError);};
document.addEventListener('DOMContentLoaded',async()=>{loginScreen();try{await refreshBackend();document.getElementById('backend-login')?.remove();}catch(e){if(e.message!=='Connexion requise')document.getElementById('backend-login-error').textContent=e.message;}});

Object.assign(window,{switchUserRole,toggleGraphismeUnlockByAdmin,getStageLessons,saveStageLessons,showTab});
