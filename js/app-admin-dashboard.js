// =====================================================================
// ESPACE DÉDIÉ ADMINISTRATEUR & MAÎTRE DE STAGE (#content-admin)
// COMPTE ADMIN VERROUILLÉ, GESTION DES 3 RÔLES, ACCÈS COURS & DOSSIER 90_TUTEUR
// =====================================================================

let currentAdminFilter = 'all';

function setAdminLessonFilter(filter) {
  currentAdminFilter = filter;
  renderAdminLessonsList('admin-lessons-list');
}

function adminValidateLesson(lessonId, customNote, customComment) {
  const lessons = getStageLessons();
  const lesson = lessons.find(l => l.id === lessonId);
  if (!lesson) return;
  lesson.status = 'validee';
  lesson.note = 'Acquis';
  if (customComment) lesson.commentAdmin = customComment;
  saveStageLessons(lessons);
  renderAdminDashboard();
}

function adminRejectLesson(lessonId, remark) {
  const lessons = getStageLessons();
  const lesson = lessons.find(l => l.id === lessonId);
  if (!lesson) return;
  lesson.status = 'a_faire';
  lesson.note = 'Non acquis';
  lesson.commentAdmin = remark || 'Compétence non acquise : travail à reprendre.';
  saveStageLessons(lessons);
  renderAdminDashboard();
}

function buildCourseDepositFormHTML() {
  const themes = window.THEMES_PROGRAMME_DATA || [];
  return `
    <form onsubmit="submitCustomCourse(event)" class="p-6 rounded-2xl bg-[#181b21] border border-[#262b35] space-y-4">
      <div class="border-b border-[#262b35] pb-3">
        <h3 class="text-base font-bold text-white">Déposer un nouveau cours dans le programme (Admin)</h3>
        <p class="text-xs text-slate-400">Le cours sera immédiatement rattaché au pôle choisi (Dessin S1 ou Graphisme S2-S4).</p>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-4 gap-3">
        <select name="theme" class="px-3 py-2.5 rounded-xl bg-[#111317] border border-[#262b35] text-sm text-white">
          ${themes.map(t => `<option value="${t.id}">${t.code} · ${t.titre}</option>`).join('')}
        </select>
        <select name="pole" class="px-3 py-2.5 rounded-xl bg-[#111317] border border-[#262b35] text-sm text-white">
          <option value="dessin">Pôle Dessin (Semaine 1)</option>
          <option value="graphisme">Pôle Graphisme & PAO (Semaines 2-4)</option>
        </select>
        <input name="code" placeholder="Code (ex. D-11 ou G-17)" required class="px-3 py-2.5 rounded-xl bg-[#111317] border border-[#262b35] text-sm text-white">
        <input name="norme" placeholder="Norme (ex. ISO 12647-2 / Sight-Size)" required class="px-3 py-2.5 rounded-xl bg-[#111317] border border-[#262b35] text-sm text-white">
      </div>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-3">
        <input name="title" placeholder="Intitulé complet du cours" required class="md:col-span-1 px-3 py-2.5 rounded-xl bg-[#111317] border border-[#262b35] text-sm text-white">
        <input name="summary" placeholder="Objectif pédagogique, étapes et critères d'acquisition..." required class="md:col-span-2 px-3 py-2.5 rounded-xl bg-[#111317] border border-[#262b35] text-sm text-white">
      </div>
      <div class="flex justify-end">
        <button type="submit" class="px-5 py-2.5 rounded-xl bg-[#f8485e] hover:bg-[#e0374c] text-white text-xs font-bold">Publier le cours</button>
      </div>
    </form>
  `;
}

function renderAdminDashboard() {
  const container = document.getElementById('admin-dashboard-container');
  if (!container) return;

  const lessons = typeof getStageLessons === 'function' ? getStageLessons() : [];
  const total = lessons.length;
  const validees = lessons.filter(l => l.status === 'validee').length;
  const learnerName = (typeof STAGIAIRE_PROFILE !== 'undefined' && STAGIAIRE_PROFILE.nom) ? STAGIAIRE_PROFILE.nom : 'Sarah Martin';
  const tuteur = window.TUTEUR_CONFIDENTIAL_DATA || {};

  container.innerHTML = `
    <div class="space-y-6">
      <!-- En-tête Console d'Administration Globale & Maître de Stage -->
      <div class="p-6 rounded-2xl bg-[#181b21] border border-[#262b35] flex flex-wrap items-center justify-between gap-4">
        <div class="space-y-1">
          <div class="flex flex-wrap items-center gap-2">
            <span class="px-2.5 py-1 rounded-md bg-purple-500/15 text-purple-300 border border-purple-500/30 text-xs font-semibold">Administration & Maître de Stage</span>
            <span class="px-2.5 py-1 rounded-md bg-[#111317] text-slate-300 border border-[#262b35] text-xs">3 Rôles stricts : Stagiaire · Visiteur · Admin (Verrouillé)</span>
          </div>
          <h1 class="text-2xl font-bold text-white pt-1">Console d'Administration, Suivi des Stagiaires & Dossier Tuteur</h1>
          <p class="text-sm text-slate-300">Validez les inscriptions, attribuez les rôles (Stagiaire ou Visiteur), ouvrez les cours par profil et évaluez les travaux.</p>
        </div>
        <div class="flex flex-wrap items-center gap-2">
          <button onclick="if(typeof resetLessonsToSingleExample==='function')resetLessonsToSingleExample()" class="px-3.5 py-2 rounded-xl bg-[#111317] hover:bg-[#262b35] border border-[#262b35] text-slate-200 font-bold text-xs">
            Réinitialiser (1 seul cours validé L-01)
          </button>
        </div>
      </div>

      <!-- 1. Gestion des Comptes & Accès aux Cours (Compte Admin verrouillé) -->
      <div id="backend-accounts-slot"></div>

      <!-- 2. Dossier Confidentiel Maître de Stage : 90_TUTEUR_NE_PAS_DONNER -->
      ${tuteur.bareme100 ? `
        <section class="p-6 rounded-2xl bg-[#181b21] border border-amber-500/40 space-y-4">
          <div class="flex flex-wrap items-center justify-between gap-2 border-b border-[#262b35] pb-3">
            <div>
              <span class="px-2.5 py-0.5 rounded bg-amber-500/20 text-amber-300 font-mono text-xs font-bold">CONFIDENTIEL · 90_TUTEUR_NE_PAS_DONNER</span>
              <h2 class="text-lg font-bold text-white mt-1">Grille de Correction & Barème sur 100 Points (Évaluation Début J01 / Fin J19)</h2>
              <p class="text-xs text-slate-300">${tuteur.avertissement}</p>
            </div>
          </div>
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
            ${tuteur.bareme100.map(b => `
              <div class="p-4 rounded-xl bg-[#111317] border border-[#262b35] space-y-1.5">
                <div class="flex items-center justify-between gap-2">
                  <span class="text-xs font-bold text-white">${b.partie}</span>
                  <span class="px-2 py-0.5 rounded bg-[#f8485e] text-white font-mono text-xs font-bold">${b.points} pts</span>
                </div>
                <p class="text-xs text-slate-300 leading-relaxed">${b.detail}</p>
              </div>
            `).join('')}
          </div>
          <div class="p-3.5 rounded-xl bg-[#111317] border border-[#262b35] text-xs text-slate-300 flex flex-col lg:flex-row lg:items-center justify-between gap-2">
            <span><strong class="text-amber-300">Lecture indicative (/100) :</strong> ${tuteur.lectureScore}</span>
            <span class="font-mono text-emerald-300">Pilote École : ${tuteur.piloteEcoleStructure}</span>
          </div>
        </section>
      ` : ''}

      <!-- 3. Sélection d'un Stagiaire, Fichiers déposés & Validation Acquis / Non acquis -->
      <section class="p-6 rounded-2xl bg-[#181b21] border border-[#262b35] space-y-5">
        <div class="flex flex-wrap items-center justify-between gap-3 border-b border-[#262b35] pb-4">
          <div>
            <h2 class="text-lg font-bold text-white">Suivi Pédagogique & Validation des Exercices (${learnerName})</h2>
            <p class="text-xs text-slate-400">1 seul exercice (L-01) validé par défaut à titre d'exemple (${validees}/${total} Acquis).</p>
          </div>
          <div id="backend-student-selector-slot"></div>
        </div>

        <div id="backend-review-slot"></div>
        <div id="admin-lessons-list" class="space-y-3 pt-2"></div>
      </section>

      <!-- 4. Dépôt de Cours -->
      ${buildCourseDepositFormHTML()}
    </div>
  `;

  renderAdminLessonsList('admin-lessons-list');
  if (typeof renderBackendReview === 'function') renderBackendReview().catch(() => {});
}

function renderAdminLessonsList(targetId = 'admin-lessons-list') {
  const container = document.getElementById(targetId);
  if (!container) return;

  const role = typeof getActiveRole === 'function' ? getActiveRole() : 'admin';
  const canValidate = role === 'admin';
  let lessons = typeof getStageLessons === 'function' ? getStageLessons() : [];
  if (currentAdminFilter === 'validee') lessons = lessons.filter(l => l.status === 'validee');
  else if (currentAdminFilter === 'en_attente') lessons = lessons.filter(l => l.status === 'en_attente');

  container.innerHTML = lessons.map(lesson => {
    const isValidee = lesson.status === 'validee';
    const isAttente = lesson.status === 'en_attente';
    const statusBadge = isValidee
      ? `<span class="px-2.5 py-0.5 rounded-md bg-emerald-500/20 text-emerald-300 text-xs font-bold">Acquis</span>`
      : isAttente
      ? `<span class="px-2.5 py-0.5 rounded-md bg-amber-500/20 text-amber-300 text-xs font-bold">Soumis · À évaluer</span>`
      : `<span class="px-2.5 py-0.5 rounded-md bg-[#111317] text-slate-400 text-xs border border-[#262b35]">Non acquis · À réaliser</span>`;

    return `
      <div class="p-4 rounded-xl bg-[#111317] border ${isValidee ? 'border-emerald-500/40' : isAttente ? 'border-amber-500/50' : 'border-[#262b35]'} flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4">
        <div class="space-y-1 min-w-0">
          <div class="flex flex-wrap items-center gap-2">
            <span class="px-2 py-0.5 rounded bg-[#181b21] text-[#f8485e] font-mono text-xs font-bold">${lesson.num} · Pôle ${lesson.semaine === 1 ? 'Dessin S1' : 'Graphisme S2-S4'}</span>
            ${statusBadge}
          </div>
          <h4 class="font-bold text-white text-sm">${lesson.titre}</h4>
          <p class="text-xs text-slate-400">${lesson.consigne}</p>
        </div>
        <div class="flex items-center gap-2 shrink-0">
          ${canValidate ? `<button onclick="adminToggleLesson('${lesson.id}')" class="px-4 py-2 rounded-xl ${isValidee ? 'bg-amber-700 hover:bg-amber-600' : 'bg-emerald-600 hover:bg-emerald-500'} text-white font-bold text-xs">${isValidee ? 'Désactiver' : 'Valider'}</button>` : ''}
        </div>
      </div>
    `;
  }).join('');
}

const renderProfDashboard = renderAdminDashboard;

if (typeof window !== 'undefined') {
  Object.assign(window, { renderAdminDashboard, renderProfDashboard, adminValidateLesson, adminRejectLesson, setAdminLessonFilter });
}
