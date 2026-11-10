// =====================================================================
// TABLEAU DE BORD ADMINISTRATEUR - SUPERVISION DU STAGE & VALIDATION
// GESTION COMPLÈTE DES LEÇONS, ARBITRAGE DU NIVEAU & DÉBLOCAGE SEMAINE 2
// =====================================================================

let currentAdminFilter = 'all';

function setAdminLessonFilter(filter) {
  currentAdminFilter = filter;
  renderAdminLessonsList();
}

function adminValidateLesson(lessonId, customNote, customComment) {
  const lessons = getStageLessons();
  const lesson = lessons.find(l => l.id === lessonId);
  if (!lesson) return;

  lesson.status = 'validee';
  lesson.dateValidation = new Date().toISOString().split('T')[0];
  if (customNote) lesson.note = customNote;
  if (customComment) lesson.commentAdmin = customComment;

  saveStageLessons(lessons);

  if (typeof playChime === 'function') playChime(660, 0.2);
  if (typeof showCustomToast === 'function') {
    showCustomToast("Leçon Validée", `${lesson.num} : "${lesson.titre}" validée.`, "success");
  }

  renderAdminDashboard();
  if (typeof renderStagiaireDashboard === 'function') renderStagiaireDashboard();
}

function adminRejectLesson(lessonId, remark) {
  const lessons = getStageLessons();
  const lesson = lessons.find(l => l.id === lessonId);
  if (!lesson) return;

  lesson.status = 'a_faire';
  lesson.commentAdmin = remark || "Travail à retravailler selon les consignes du tuteur.";
  saveStageLessons(lessons);

  if (typeof playChime === 'function') playChime(330, 0.2);
  if (typeof showCustomToast === 'function') {
    showCustomToast("Correction Demandée", `${lesson.num} renvoyée pour correction.`, "warning");
  }

  renderAdminDashboard();
  if (typeof renderStagiaireDashboard === 'function') renderStagiaireDashboard();
}

function renderAdminDashboard() {
  const container = document.getElementById('admin-dashboard-container');
  if (!container) return;

  const lessons = getStageLessons();
  const total = lessons.length;
  const validees = lessons.filter(l => l.status === 'validee').length;
  const enAttente = lessons.filter(l => l.status === 'en_attente').length;
  const isS2Unlocked = typeof getGraphismeUnlockedState === 'function' ? getGraphismeUnlockedState() : false;

  container.innerHTML = `
    <div class="space-y-6">
      <div class="p-6 rounded-3xl bg-[#1b1e24] border border-purple-500/40 shadow-xl flex flex-wrap items-center justify-between gap-4">
        <div>
          <div class="flex items-center gap-2">
            <span class="w-2.5 h-2.5 rounded-full bg-purple-400 animate-pulse"></span>
            <span class="text-[10px] font-mono font-bold uppercase tracking-wider text-purple-300">Supervision d'Atelier</span>
            <span class="text-xs px-2.5 py-0.5 rounded-full bg-[#131417] text-slate-300 border border-[#2b3553]">Stagiaire : Sarah Martin</span>
          </div>
          <h2 class="font-serif text-2xl font-black text-white mt-1">Tableau de Bord Administrateur</h2>
          <p class="text-xs text-slate-300">Validez les leçons au fur et à mesure et arbitrez le passage en Semaine 2 (Design Graphique).</p>
        </div>

        <div class="flex items-center gap-3">
          <button onclick="toggleGraphismeUnlockByAdmin()" class="px-5 py-2.5 rounded-xl font-bold text-xs transition-all flex items-center gap-2 shadow-lg ${isS2Unlocked ? 'bg-amber-600 hover:bg-amber-500 text-white' : 'bg-[#00f2c3] hover:bg-[#00d6ac] text-[#131417] shadow-cyan-500/25'}">
            <span>${isS2Unlocked ? 'Re-verrouiller la Semaine 2 (Graphisme)' : 'Valider le Niveau Sarah & Débloquer la Semaine 2'}</span>
          </button>
        </div>
      </div>

      <div class="grid grid-cols-2 md:grid-cols-4 gap-3 text-center">
        <div class="p-4 rounded-2xl bg-[#1f2233] border border-[#2b3553]">
          <span class="text-[10px] uppercase font-mono font-bold text-slate-400">Total Leçons</span>
          <p class="text-2xl font-black text-white mt-0.5">${total}</p>
        </div>
        <div class="p-4 rounded-2xl bg-[#1f2233] border border-emerald-500/30">
          <span class="text-[10px] uppercase font-mono font-bold text-emerald-400">Validées par l'Admin</span>
          <p class="text-2xl font-black text-emerald-400 mt-0.5">${validees}</p>
        </div>
        <div class="p-4 rounded-2xl bg-[#1f2233] border border-amber-500/30">
          <span class="text-[10px] uppercase font-mono font-bold text-amber-300">À Valider</span>
          <p class="text-2xl font-black text-amber-300 mt-0.5">${enAttente}</p>
        </div>
        <div class="p-4 rounded-2xl bg-[#1f2233] border border-rose-500/30">
          <span class="text-[10px] uppercase font-mono font-bold text-rose-300">Accès Semaine 2</span>
          <p class="text-sm font-black ${isS2Unlocked ? 'text-[#00f2c3]' : 'text-rose-400'} mt-1">
            ${isS2Unlocked ? 'DÉBLOQUÉE' : 'VERROUILLÉE'}
          </p>
        </div>
      </div>

      <div class="p-4 rounded-2xl bg-[#1b1e24] border border-[#272b35] flex flex-wrap items-center justify-between gap-3">
        <div class="flex items-center gap-2">
          <span class="text-xs font-bold text-white uppercase tracking-wider">Leçons de Stage :</span>
          <div class="flex items-center gap-1 bg-[#131417] p-1 rounded-xl border border-[#272b35] text-xs">
            <button onclick="setAdminLessonFilter('all')" class="px-3 py-1 rounded-lg font-bold transition-all ${currentAdminFilter === 'all' ? 'bg-[#27293d] text-white shadow' : 'text-slate-400 hover:text-white'}">
              Toutes (${total})
            </button>
            <button onclick="setAdminLessonFilter('en_attente')" class="px-3 py-1 rounded-lg font-bold transition-all ${currentAdminFilter === 'en_attente' ? 'bg-amber-500/30 text-amber-300 shadow' : 'text-slate-400 hover:text-white'}">
              À Valider (${enAttente})
            </button>
            <button onclick="setAdminLessonFilter('validee')" class="px-3 py-1 rounded-lg font-bold transition-all ${currentAdminFilter === 'validee' ? 'bg-emerald-500/30 text-emerald-300 shadow' : 'text-slate-400 hover:text-white'}">
              Validées (${validees})
            </button>
          </div>
        </div>
        <span class="text-[11px] text-slate-400 font-mono">Semaine 1 : Dessin · Semaine 2 : PAO</span>
      </div>

      <div id="admin-lessons-list" class="space-y-4"></div>
    </div>
  `;

  renderAdminLessonsList();
}

function renderAdminLessonsList() {
  const container = document.getElementById('admin-lessons-list');
  if (!container) return;

  let lessons = getStageLessons();
  if (currentAdminFilter === 'validee') {
    lessons = lessons.filter(l => l.status === 'validee');
  } else if (currentAdminFilter === 'en_attente') {
    lessons = lessons.filter(l => l.status === 'en_attente');
  }

  if (lessons.length === 0) {
    container.innerHTML = `<div class="p-8 rounded-2xl bg-[#1b1e24] border border-[#272b35] text-center text-slate-400 text-xs">Aucune leçon dans cette catégorie.</div>`;
    return;
  }

  container.innerHTML = lessons.map(lesson => {
    const isValidee = lesson.status === 'validee';
    const isAttente = lesson.status === 'en_attente';
    const statusBadge = isValidee
      ? `<span class="px-2.5 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 font-mono text-[10px] font-bold border border-emerald-500/30">Validée ✓ (${lesson.note})</span>`
      : isAttente
      ? `<span class="px-2.5 py-0.5 rounded-full bg-amber-500/20 text-amber-300 font-mono text-[10px] font-bold border border-amber-500/30 animate-pulse">En attente d'évaluation</span>`
      : `<span class="px-2.5 py-0.5 rounded-full bg-slate-800 text-slate-400 font-mono text-[10px] font-bold">À réaliser par Sarah</span>`;

    return `
      <div class="p-5 rounded-2xl bg-[#1b1e24] border ${isAttente ? 'border-amber-500/50' : 'border-[#272b35]'} shadow-lg space-y-4">
        <div class="flex flex-col md:flex-row items-start md:items-center justify-between gap-3 border-b border-[#272b35] pb-3">
          <div class="flex items-center gap-3">
            <span class="w-8 h-8 rounded-xl ${lesson.semaine === 1 ? 'bg-[#e14eca]/20 text-[#e14eca]' : 'bg-[#00f2c3]/20 text-[#00f2c3]'} font-mono font-black text-xs flex items-center justify-center shrink-0">
              ${lesson.num}
            </span>
            <div>
              <div class="flex items-center gap-2">
                <span class="text-[10px] uppercase font-bold text-slate-400">Semaine ${lesson.semaine} · ${lesson.filiere === 'dessin' ? 'Dessin sur papier' : 'PAO & Atelier'}</span>
                ${statusBadge}
              </div>
              <h4 class="font-serif font-bold text-white text-base mt-0.5">${lesson.titre}</h4>
            </div>
          </div>

          <div class="flex items-center gap-2 self-end md:self-center">
            ${!isValidee ? `
              <button onclick="adminValidateLesson('${lesson.id}', '18 / 20', 'Travail conforme validé par le tuteur.')" class="px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs transition-all flex items-center gap-1.5 shadow-md shadow-emerald-600/25">
                <span>Valider la Leçon ✓</span>
              </button>
            ` : `
              <button onclick="adminRejectLesson('${lesson.id}', 'Reprise demandée pour ajuster les valeurs.')" class="px-3.5 py-2 rounded-xl bg-[#27293d] hover:bg-amber-900/40 text-amber-300 text-xs font-semibold transition-all border border-amber-500/30">
                Demander Correction ↺
              </button>
            `}
          </div>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-12 gap-4 items-center">
          <div class="md:col-span-4 rounded-xl overflow-hidden border border-[#272b35] bg-black max-h-44 group cursor-pointer" onclick="if (typeof openImageModal === 'function') openImageModal('${lesson.image}')">
            <img src="${lesson.image}" alt="${lesson.titre}" class="w-full h-44 object-cover group-hover:scale-105 transition-transform duration-300" />
          </div>

          <div class="md:col-span-8 space-y-2 text-xs">
            <div>
              <span class="font-bold text-slate-300 uppercase text-[10px] tracking-wider">Consigne d'Atelier :</span>
              <p class="text-slate-300 leading-relaxed mt-0.5">${lesson.consigne}</p>
            </div>

            <div class="p-3 rounded-xl bg-[#131417] border border-[#272b35] space-y-1">
              <div class="flex justify-between items-center text-[10px] text-slate-400">
                <span>Support : <strong class="text-white">${lesson.support}</strong></span>
                <span>Date validation : <strong class="text-slate-200">${lesson.dateValidation || 'En attente'}</strong></span>
              </div>
              <p class="text-slate-300 text-[11px]">
                <strong class="text-purple-300">Avis du Tuteur :</strong> ${lesson.commentAdmin}
              </p>
            </div>
          </div>
        </div>
      </div>
    `;
  }).join('');
}

if (typeof window !== 'undefined') {
  window.renderAdminDashboard = renderAdminDashboard;
  window.adminValidateLesson = adminValidateLesson;
  window.adminRejectLesson = adminRejectLesson;
  window.setAdminLessonFilter = setAdminLessonFilter;
}
