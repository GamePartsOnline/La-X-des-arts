// =====================================================================
// PONT BACKEND SQLITE & PORTAIL DE CONNEXION UNIQUE (SANS PAGE D'ACCUEIL)
// 3 RÔLES STRICTS : STAGIAIRE, VISITEUR, ADMIN (VERROUILLÉ) + ACCÈS COURS
// =====================================================================

let backendUser = null, backendStudent = null, backendLessons = [], backendSubmissions = [], backendCustomCourses = [];
let adminPreviewRole = null;
const escapeBackend = value => String(value ?? '').replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));

async function api(path, method = 'GET', body) {
  const res = await fetch('/api' + path, { method, headers: { 'Content-Type': 'application/json' }, ...(body ? { body: JSON.stringify(body) } : {}) });
  const data = await res.json();
  if (!res.ok) throw new Error(data.error || 'Erreur serveur');
  return data;
}

function backendError(e) { if (typeof showCustomToast === 'function') showCustomToast('Action refusée', e.message, 'warning'); }
const studentQuery = () => backendStudent ? '?user=' + backendStudent : '';
const isBackendStaff = role => role === 'admin';

function renderLoginGateView() {
  const gate = document.getElementById('login-gate-view');
  if (!gate) return;
  gate.innerHTML = `
    <div class="w-full max-w-2xl rounded-2xl bg-[#181b21] border border-[#262b35] p-6 lg:p-8 shadow-2xl space-y-6">
      <div class="flex items-center gap-3.5 border-b border-[#262b35] pb-5">
        <img src="assets/logo_croisee_nb.svg" alt="Logo La Croisée des Arts" class="w-12 h-12 rounded-xl border border-white bg-black object-contain shrink-0" />
        <div>
          <h1 class="text-xl lg:text-2xl font-bold text-white">La Croisée des Arts</h1>
        </div>
      </div>

      <button type="button" onclick="closeLoginModal()" class="text-sm text-slate-300 hover:text-white">Retour aux rubriques publiques</button>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-5">
        <form onsubmit="submitLoginForm(event)" class="p-5 rounded-xl bg-[#111317] border border-[#262b35] space-y-3.5 flex flex-col justify-between">
          <div class="space-y-3">
            <h2 class="text-sm font-bold text-white">Se connecter avec ses identifiants</h2>
            <label class="block text-xs text-slate-300 space-y-1"><span>Adresse e-mail</span><input name="email" type="email" required class="w-full px-3 py-2 rounded-lg bg-[#181b21] border border-[#262b35] text-white text-xs"></label>
            <label class="block text-xs text-slate-300 space-y-1"><span>Mot de passe</span><input name="password" type="password" required class="w-full px-3 py-2 rounded-lg bg-[#181b21] border border-[#262b35] text-white text-xs"></label>
          </div>
          <div class="space-y-2 pt-1">
            <p id="backend-login-error" role="alert" class="text-xs text-[#f8485e] font-semibold"></p>
            <button type="submit" class="w-full py-2.5 rounded-xl bg-[#f8485e] hover:bg-[#e0374c] text-white text-xs font-bold">Connexion →</button>
          </div>
        </form>

        <form onsubmit="submitRegistrationForm(event)" class="p-5 rounded-xl bg-[#111317] border border-[#262b35] space-y-2.5 flex flex-col justify-between">
          <div class="space-y-2">
            <h2 class="text-sm font-bold text-white">Demander une inscription</h2>
            <p class="text-[11px] text-slate-400 leading-snug">L'Administrateur valide votre compte, définit votre profil (Stagiaire ou Visiteur) et vos accès aux cours.</p>
            <input name="name" placeholder="Nom et prénom" required class="w-full px-3 py-2 rounded-lg bg-[#181b21] border border-[#262b35] text-white text-xs">
            <input name="email" type="email" placeholder="Adresse e-mail" required class="w-full px-3 py-2 rounded-lg bg-[#181b21] border border-[#262b35] text-white text-xs">
            <input name="password" type="password" minlength="12" placeholder="Mot de passe (12 car. min)" required class="w-full px-3 py-2 rounded-lg bg-[#181b21] border border-[#262b35] text-white text-xs">
          </div>
          <div class="space-y-1.5 pt-1">
            <p id="backend-register-msg" class="text-[11px] text-emerald-300 font-semibold"></p>
            <button type="submit" class="w-full py-2.5 rounded-xl bg-[#262b35] hover:bg-emerald-600 text-white text-xs font-bold transition-all">Envoyer la demande</button>
          </div>
        </form>
      </div>
    </div>
  `;
}

async function refreshBackend(redirectToRoleHome = false) {
  try { backendCustomCourses = await api('/custom-courses'); } catch { backendCustomCourses = []; }
  backendUser = await api('/me');
  currentRole = normalizeRoleName(backendUser.role);
  currentCourseAccess = backendUser.courseAccess || (currentRole === 'stagiaire' ? 'dessin' : currentRole === 'admin' ? 'complet' : 'aucun');

  const meta = getProfileMeta(currentRole);
  meta.nom = escapeBackend(backendUser.name);

  if (isBackendStaff(currentRole)) {
    const students = await api('/students');
    if (!students.some(s => s.id === backendStudent)) backendStudent = students[0]?.id || null;
    const selected = students.find(s => s.id === backendStudent);
    isGraphismeUnlocked = !!selected?.unlocked || selected?.courseAccess === 'complet';
    STAGIAIRE_PROFILE.nom = escapeBackend(selected?.name || 'Sarah Martin');
  } else {
    backendStudent = null;
    isGraphismeUnlocked = !!backendUser.unlocked || currentCourseAccess === 'complet';
    STAGIAIRE_PROFILE.nom = escapeBackend(backendUser.name);
  }

  backendLessons = await api('/lessons' + studentQuery());
  backendSubmissions = await api('/submissions' + studentQuery());
  updateAppForCurrentRole();
  renderCourses();
  await renderBackendReview();
  if (redirectToRoleHome) showTab(getProfileMeta(currentRole).defaultTab || 'stagiaire');
}

async function submitLoginForm(e) {
  e.preventDefault(); const f = e.currentTarget; const errEl = document.getElementById('backend-login-error'); if (errEl) errEl.textContent = '';
  try { await api('/login', 'POST', { email: f.email.value, password: f.password.value }); await refreshBackend(true); showCustomToast('Connexion réussie', `Bienvenue ${backendUser.name} (${getProfileMeta(currentRole).label})`, 'success'); }
  catch (err) { if (errEl) errEl.textContent = err.message; }
}

async function quickConnectProfile(role) {
  const errEl = document.getElementById('backend-login-error'); if (errEl) errEl.textContent = '';
  try { await api('/login', 'POST', { quickRole: role }); await refreshBackend(true); showCustomToast('Session active', `${backendUser.name} · Espace ${getProfileMeta(currentRole).label}`, 'success'); }
  catch (err) { if (errEl) errEl.textContent = err.message; }
}

async function submitRegistrationForm(e) {
  e.preventDefault(); const f = e.currentTarget; const msgEl = document.getElementById('backend-register-msg');
  try { const res = await api('/register', 'POST', { name: f.name.value, email: f.email.value, password: f.password.value }); f.reset(); if (msgEl) msgEl.textContent = res.message; showCustomToast('Demande enregistrée', 'L\'Administrateur définira votre profil.', 'success'); }
  catch (err) { if (msgEl) msgEl.textContent = err.message; }
}

async function logoutBackendUser() {
  try { await api('/logout', 'POST', {}); } catch {}
  backendUser = null; backendStudent = null; currentRole = null; isGraphismeUnlocked = false;
  currentCourseAccess = 'aucun'; backendLessons = []; backendSubmissions = [];
  updateAppForCurrentRole(); renderLoginGateView(); showTab('veille');
}
function previewAsRole(role) {
  if (backendUser?.role !== 'admin' || !['stagiaire', 'visiteur', null].includes(role)) return;
  adminPreviewRole = role;
  currentRole = role || 'admin';
  if (role === 'visiteur') { backendStudent = null; backendLessons = []; backendSubmissions = []; }
  updateAppForCurrentRole();
  showTab(role ? getProfileMeta(role).defaultTab : 'admin');
}
function openLoginModal() {
  renderLoginGateView();
  document.getElementById('login-gate-view')?.classList.remove('hidden');
  document.getElementById('app-top-header')?.classList.add('hidden');
  document.getElementById('app-main-workspace')?.classList.add('hidden');
}
function closeLoginModal() { updateAppForCurrentRole(); showTab('veille'); }

getStageLessons = () => (backendLessons.length ? backendLessons : (window.DEFAULT_STAGE_LESSONS || [])).map(l => ({ ...l, titre: escapeBackend(l.titre), commentAdmin: escapeBackend(l.commentAdmin), note: l.status === 'validee' ? 'Acquis' : 'Non acquis' }));
saveStageLessons = () => {};
switchUserRole = role => quickConnectProfile(role);

updateHeaderRoleUI = () => {
  const el = document.getElementById('role-switcher-container');
  if (!el) return;
  if (!backendUser) {
    el.innerHTML = '<button type="button" onclick="openLoginModal()" class="px-3 py-2 rounded-lg bg-[#f8485e] text-white text-sm font-bold">Se connecter</button>';
    return;
  }
  const meta = getProfileMeta(currentRole);
  const preview = backendUser.role === 'admin' ? '<select aria-label="Aperçu du site" onchange="previewAsRole(this.value || null)" class="px-2 py-1.5 rounded-lg bg-[#181b21] border border-[#262b35] text-xs text-white"><option value="" ' + (!adminPreviewRole ? 'selected' : '') + '>Administration</option><option value="stagiaire" ' + (adminPreviewRole === 'stagiaire' ? 'selected' : '') + '>Voir comme stagiaire</option><option value="visiteur" ' + (adminPreviewRole === 'visiteur' ? 'selected' : '') + '>Voir comme visiteur</option></select>' : '';
  el.innerHTML = `<div class="flex items-center gap-2"><span class="px-3 py-1.5 rounded-lg bg-[#181b21] border border-[#262b35] text-xs text-white font-semibold truncate max-w-[220px]">${escapeBackend(backendUser.name)} · <span class="text-[#f8485e] font-mono">${escapeBackend(meta.label)}</span></span><button onclick="logoutBackendUser()" class="px-3 py-1.5 rounded-lg bg-[#181b21] hover:bg-rose-950/80 border border-[#262b35] text-xs font-bold text-slate-200 transition-all">Déconnexion</button></div>`;
  el.insertAdjacentHTML('afterbegin', preview);
};

async function resetLessonsToSingleExample() {
  try { await api('/lessons/reset-example' + studentQuery(), 'POST', {}); await refreshBackend(false); showCustomToast('Exemple restauré', 'Seule la leçon L-01 est validée (Acquis).', 'success'); } catch (e) { backendError(e); }
}
stagiaireSubmitLesson = async id => { try { await api('/lessons/' + id, 'PUT', { status: 'en_attente' }); await refreshBackend(false); } catch (e) { backendError(e); } };
adminValidateLesson = async (id, note, commentAdmin) => { try { await api('/lessons/' + id + studentQuery(), 'PUT', { status: 'validee', note: 'Acquis', commentAdmin }); await refreshBackend(false); } catch (e) { backendError(e); } };
adminRejectLesson = async (id, commentAdmin) => { try { await api('/lessons/' + id + studentQuery(), 'PUT', { status: 'a_faire', note: 'Non acquis', commentAdmin }); await refreshBackend(false); } catch (e) { backendError(e); } };

getCourseSubmission = id => {
  const s = backendSubmissions.find(s => s.courseId === id);
  if (!s) return null;
  const evalLabel = s.status === 'validee' ? 'Acquis' : s.status === 'a_faire' && s.grade !== null ? 'Non acquis (À reprendre)' : 'En attente de validation';
  return { ...s, fileName: escapeBackend(s.fileName), studentNotes: escapeBackend(s.studentNotes), grade: evalLabel, feedback: escapeBackend(s.feedback) };
};
handleCourseFileUpload = (event, id) => { const file = event.target.files?.[0]; if (!file) return; if (file.size > 10 * 1024 * 1024) return backendError(new Error('Limite : 10 Mo')); pendingCourseUploads[id] = { file, name: escapeBackend(file.name), size: (file.size / 1024).toFixed(1) + ' Ko' }; renderCourses(); };
submitCourseFile = async id => { try { const upload = pendingCourseUploads[id]; if (!upload?.file) throw new Error('Sélectionnez un fichier'); const notes = document.getElementById('course-student-notes-' + id)?.value || ''; const content = await new Promise((resolve, reject) => { const reader = new FileReader(); reader.onload = () => resolve(reader.result.split(',')[1]); reader.onerror = reject; reader.readAsDataURL(upload.file); }); await api('/submissions', 'POST', { courseId: id, fileName: upload.file.name, content, studentNotes: notes }); delete pendingCourseUploads[id]; await refreshBackend(false); } catch (e) { backendError(e); } };
resetCourseFileUpload = id => { delete pendingCourseUploads[id]; backendSubmissions = backendSubmissions.filter(s => s.courseId !== id); renderCourses(); };

async function selectBackendStudent(id) { backendStudent = Number(id); try { await refreshBackend(false); } catch (e) { backendError(e); } }
async function reviewBackendSubmission(id) {
  const form = document.getElementById('review-' + id); const acq = form.acquisition.value;
  try { await api('/submissions/' + id, 'PUT', { acquisition: acq, status: acq === 'acquis' ? 'validee' : 'a_faire', feedback: form.feedback.value }); await refreshBackend(false); showCustomToast('Évaluation enregistrée', `Compétence marquée : ${acq === 'acquis' ? 'Acquis' : 'Non acquis'}.`, 'success'); } catch (e) { backendError(e); }
}
async function deleteBackendSubmission(id) { try { await api('/submissions/' + id, 'DELETE', {}); await refreshBackend(false); } catch (e) { backendError(e); } }
async function createBackendAccount(e) {
  e.preventDefault(); const f = e.currentTarget;
  try { await api('/users', 'POST', { name: f.name.value, email: f.email.value, role: f.role.value, courseAccess: f.courseAccess?.value || 'dessin', password: f.password.value }); f.reset(); await refreshBackend(false); showCustomToast('Compte créé', 'Profil et accès aux cours enregistrés.', 'success'); } catch (err) { backendError(err); }
}
async function updateBackendUserAccess(uid, payload) {
  try { await api('/users/' + uid, 'PUT', payload); await refreshBackend(false); showCustomToast('Mise à jour enregistrée', 'Paramètres du profil mis à jour par l\'Administrateur.', 'success'); } catch (e) { backendError(e); }
}
async function deleteBackendAccount(uid) { try { await api('/users/' + uid, 'DELETE', {}); await refreshBackend(false); showCustomToast('Compte supprimé', 'Utilisateur retiré.', 'info'); } catch (e) { backendError(e); } }
async function submitCustomCourse(e) {
  e.preventDefault(); const f = e.currentTarget;
  try { await api('/custom-courses', 'POST', { theme: f.theme.value, pole: f.pole.value, code: f.code.value, title: f.title.value, norme: f.norme.value, summary: f.summary.value }); f.reset(); await refreshBackend(false); showCustomToast('Cours ajouté', 'Nouveau cours publié dans le programme.', 'success'); } catch (err) { backendError(err); }
}

async function renderBackendReview() {
  if (!isBackendStaff(currentRole)) return;
  const students = await api('/students');
  const selectorHTML = `<label class="text-xs text-slate-300 flex items-center gap-2">Stagiaire suivi :<select class="rounded-xl bg-[#111317] border border-[#262b35] px-3 py-2 text-white font-bold text-xs" onchange="selectBackendStudent(this.value)">${students.map(s => `<option value="${s.id}" ${s.id === backendStudent ? 'selected' : ''}>${escapeBackend(s.name)} (${escapeBackend(s.courseAccess || 'dessin')})</option>`).join('')}</select></label>`;

  const adminSel = document.getElementById('backend-student-selector-slot'); if (adminSel) adminSel.innerHTML = selectorHTML;

  const submissionsHTML = backendSubmissions.length ? `<div class="space-y-3">${backendSubmissions.map(s => `<form id="review-${s.id}" class="p-4 border border-[#262b35] rounded-xl bg-[#111317] space-y-3" onsubmit="event.preventDefault();reviewBackendSubmission(${s.id})"><div class="flex flex-wrap items-center justify-between gap-2"><p class="text-xs font-bold text-white">${escapeBackend(s.courseId)} · Fichier : <a class="underline text-[#f8485e]" href="/api/submissions/${s.id}/file">${escapeBackend(s.fileName)}</a></p><button type="button" onclick="deleteBackendSubmission(${s.id})" class="px-2.5 py-1 rounded bg-rose-950/60 text-rose-300 text-xs font-bold">Supprimer</button></div><p class="text-xs text-slate-300">${escapeBackend(s.studentNotes)}</p><div class="flex flex-wrap items-center gap-3 text-xs"><label class="font-bold text-white">Décision : <select name="acquisition" class="ml-1 px-3 py-1.5 rounded-lg bg-[#181b21] border border-[#262b35] text-white font-bold"><option value="acquis" ${s.status === 'validee' ? 'selected' : ''}>Acquis</option><option value="non_acquis" ${s.status !== 'validee' ? 'selected' : ''}>Non acquis</option></select></label><input name="feedback" value="${escapeBackend(s.feedback)}" placeholder="Commentaire pédagogique..." class="flex-1 px-3 py-1.5 rounded-lg bg-[#181b21] border border-[#262b35] text-xs text-white"><button class="px-4 py-1.5 rounded-lg bg-[#f8485e] text-white text-xs font-bold">Enregistrer</button></div></form>`).join('')}</div>` : `<p class="text-xs text-slate-400">Aucun fichier déposé par ce stagiaire pour le moment.</p>`;

  const reviewSlot = document.getElementById('backend-review-slot'); if (reviewSlot) reviewSlot.innerHTML = submissionsHTML;

  const accountsSlot = document.getElementById('backend-accounts-slot');
  if (accountsSlot && currentRole === 'admin') {
    const allUsers = await api('/users');
    const editableUsers = allUsers.filter(u => !u.lockedAdmin);
    const lockedAdmins = allUsers.filter(u => u.lockedAdmin);

    accountsSlot.innerHTML = `<div class="grid grid-cols-1 lg:grid-cols-12 gap-6"><form onsubmit="createBackendAccount(event)" class="lg:col-span-4 p-6 rounded-2xl bg-[#181b21] border border-[#262b35] space-y-3"><h2 class="text-base font-bold text-white">Créer un compte utilisateur</h2><p class="text-xs text-slate-400">Définissez son rôle (Stagiaire ou Visiteur) et ses cours autorisés.</p><input name="name" placeholder="Nom et prénom" required class="w-full px-3 py-2 rounded-xl bg-[#111317] border border-[#262b35] text-xs text-white"><input name="email" type="email" placeholder="Adresse e-mail" required class="w-full px-3 py-2 rounded-xl bg-[#111317] border border-[#262b35] text-xs text-white"><select name="role" class="w-full px-3 py-2 rounded-xl bg-[#111317] border border-[#262b35] text-xs text-white"><option value="stagiaire">Rôle : Stagiaire</option><option value="visiteur">Rôle : Visiteur</option></select><select name="courseAccess" class="w-full px-3 py-2 rounded-xl bg-[#111317] border border-[#262b35] text-xs text-white"><option value="dessin">Cours : Pôle Dessin S1 uniquement</option><option value="graphisme">Cours : Pôle Graphisme S2 uniquement</option><option value="complet">Cours : Programme Complet (S1 + S2)</option><option value="aucun">Cours : Aucun accès cours (Visiteur)</option></select><input name="password" type="password" placeholder="Mot de passe (12 car. min)" minlength="12" required class="w-full px-3 py-2 rounded-xl bg-[#111317] border border-[#262b35] text-xs text-white"><button class="w-full py-2.5 rounded-xl bg-[#f8485e] hover:bg-[#e0374c] text-white text-xs font-bold">Créer le compte</button></form><div class="lg:col-span-8 p-6 rounded-2xl bg-[#181b21] border border-[#262b35] space-y-4"><div class="border-b border-[#262b35] pb-3"><h2 class="text-base font-bold text-white">Comptes inscrits & Accès aux Cours (${editableUsers.length})</h2><p class="text-xs text-slate-400">Le compte Administrateur principal (${lockedAdmins.map(a => escapeBackend(a.email)).join(', ')}) est verrouillé contre toute modification ou suppression.</p></div><div class="space-y-3">${editableUsers.map(u => `<div class="p-4 rounded-xl bg-[#111317] border ${u.role === 'en_attente' ? 'border-rose-500/60' : 'border-[#262b35]'} space-y-3"><div class="flex flex-wrap items-center justify-between gap-2"><div><span class="font-bold text-sm text-white">${escapeBackend(u.name)}</span>${u.role === 'en_attente' ? `<span class="ml-2 px-2 py-0.5 rounded bg-rose-500/20 text-rose-300 text-xs font-bold">Inscription à valider</span>` : ''}<p class="text-xs font-mono text-slate-400">${escapeBackend(u.email)}</p></div><button type="button" onclick="deleteBackendAccount(${u.id})" class="px-3 py-1 rounded-lg bg-rose-950/70 hover:bg-rose-800 text-rose-300 text-xs font-bold">Supprimer</button></div><div class="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-2 border-t border-[#262b35] text-xs"><label class="space-y-1 text-slate-300"><span class="block text-[11px] text-slate-400">1. Profil (Rôle strict)</span><select onchange="updateBackendUserAccess(${u.id}, { role: this.value })" class="w-full px-2.5 py-1.5 rounded-lg bg-[#181b21] border border-[#262b35] text-white font-semibold">${['en_attente', 'stagiaire', 'visiteur'].map(r => `<option value="${r}" ${u.role === r ? 'selected' : ''}>${r === 'en_attente' ? 'À valider (en_attente)' : r.toUpperCase()}</option>`).join('')}</select></label><label class="space-y-1 text-slate-300"><span class="block text-[11px] text-slate-400">2. Accès aux cours autorisés</span><select onchange="updateBackendUserAccess(${u.id}, { courseAccess: this.value })" class="w-full px-2.5 py-1.5 rounded-lg bg-[#181b21] border border-[#262b35] text-emerald-300 font-semibold" ${u.role === 'visiteur' ? 'disabled' : ''}><option value="dessin" ${u.courseAccess === 'dessin' ? 'selected' : ''}>Dessin S1 (10 cours)</option><option value="graphisme" ${u.courseAccess === 'graphisme' ? 'selected' : ''}>Graphisme S2 (16 cours)</option><option value="complet" ${u.courseAccess === 'complet' ? 'selected' : ''}>Programme Complet (26 cours)</option><option value="aucun" ${u.courseAccess === 'aucun' ? 'selected' : ''}>Aucun accès aux cours</option></select></label></div></div>`).join('')}</div></div></div>`;
  }
}

document.addEventListener('DOMContentLoaded', async () => {
  backendLessons = (window.DEFAULT_STAGE_LESSONS || []).map(l => ({ ...l }));
  renderLoginGateView();
  updateAppForCurrentRole();
  try { await refreshBackend(true); } catch { backendUser = null; currentRole = null; currentCourseAccess = 'aucun'; updateAppForCurrentRole(); showTab('veille'); }
});

Object.assign(window, {
  openLoginModal, closeLoginModal, quickConnectProfile, submitLoginForm, submitRegistrationForm, logoutBackendUser, previewAsRole,
  selectBackendStudent, reviewBackendSubmission, deleteBackendSubmission,
  createBackendAccount, updateBackendUserAccess, deleteBackendAccount, resetLessonsToSingleExample,
  submitCustomCourse, switchUserRole, getStageLessons, saveStageLessons
});
