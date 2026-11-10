// =====================================================================
// VUE COURS ÉPURÉE, LISIBLE & FILTRÉE SELON LE PROFIL DE L'UTILISATEUR
// =====================================================================

function setDisciplineFilter(disc) {
  currentDiscipline = disc;
  renderCourses();
}

function getAuthorizedCoursesForUser() {
  const all = window.COURSES_DATA || [];
  if (typeof isCourseAllowedForCurrentUser !== 'function') return all;
  return all.filter(c => isCourseAllowedForCurrentUser(c.id));
}

function selectCourse(id) {
  if (typeof handleCourseClickSecurity === 'function' && !handleCourseClickSecurity(id)) {
    return;
  }
  const found = (window.COURSES_DATA || []).find(c => c.id === id);
  if (found) {
    currentCourse = found;
  }
  showTab('cours');
  renderCourses();
}

function setSidebarFiliere() {}
function toggleSidebarAccordion() {}
function updateSidebarActiveCourse() {}
function renderThemesProgrammeSection() {}

function renderCourses() {
  const detailEl = document.getElementById('course-detail');
  if (!detailEl) return;

  const authorized = getAuthorizedCoursesForUser();
  if (authorized.length === 0) {
    detailEl.innerHTML = `
      <div class="max-w-3xl mx-auto p-8 rounded-2xl bg-[#181b21] border border-[#262b35] text-center space-y-3">
        <h2 class="text-xl font-bold text-white">Aucun cours ouvert pour votre profil</h2>
        <p class="text-sm text-slate-300">L'administrateur valide les thèmes et cours auxquels chaque profil a accès.</p>
      </div>
    `;
    return;
  }

  if (!authorized.some(c => c.id === currentCourse?.id)) {
    currentCourse = authorized[0];
  }

  const themes = window.THEMES_PROGRAMME_DATA || [];
  const currentTheme = themes.find(t => (t.coursIds || []).includes(currentCourse.id)) || themes[0] || { code: 'Thème 1', titre: 'Observation', norme: 'Atelier' };
  const currentIndex = authorized.findIndex(c => c.id === currentCourse.id);
  const prevCourse = currentIndex > 0 ? authorized[currentIndex - 1] : null;
  const nextCourse = currentIndex < authorized.length - 1 ? authorized[currentIndex + 1] : null;
  const customCourses = typeof backendCustomCourses !== 'undefined' ? backendCustomCourses : [];
  const esc = typeof escapeBackend === 'function' ? escapeBackend : (v => String(v ?? ''));

  detailEl.innerHTML = `
    <div class="max-w-4xl mx-auto space-y-6">
      <!-- Barre de sélection directe et épurée (1 seule ligne, sans pavé de texte) -->
      <div class="p-4 rounded-xl bg-[#181b21] border border-[#262b35] flex flex-wrap items-center justify-between gap-3">
        <div class="flex items-center gap-3 flex-1 min-w-[240px]">
          <label for="course-quick-select" class="text-xs font-semibold text-slate-400 whitespace-nowrap">Choisir un cours :</label>
          <select id="course-quick-select" onchange="selectCourse(this.value)" class="flex-1 px-3.5 py-2 rounded-lg bg-[#111317] border border-[#262b35] text-sm font-medium text-white focus:outline-none focus:border-sky-500">
            ${themes.map(th => {
              const thCourses = (th.coursIds || []).map(cid => authorized.find(c => c.id === cid)).filter(Boolean);
              if (!thCourses.length) return '';
              return `<optgroup label="${th.code} - ${th.titre}">
                ${thCourses.map(c => `<option value="${c.id}" ${c.id === currentCourse.id ? 'selected' : ''}>${c.num} · ${c.title}</option>`).join('')}
              </optgroup>`;
            }).join('')}
          </select>
        </div>

        <div class="flex items-center gap-2">
          ${prevCourse ? `<button onclick="selectCourse('${prevCourse.id}')" class="px-3.5 py-2 rounded-lg bg-[#111317] hover:bg-[#252a36] border border-[#262b35] text-sm font-medium text-slate-200 transition-all">← ${prevCourse.num}</button>` : ''}
          <span class="text-xs text-slate-400 font-mono px-2">${currentIndex + 1} / ${authorized.length}</span>
          ${nextCourse ? `<button onclick="selectCourse('${nextCourse.id}')" class="px-3.5 py-2 rounded-lg bg-[#111317] hover:bg-[#252a36] border border-[#262b35] text-sm font-medium text-slate-200 transition-all">${nextCourse.num} →</button>` : ''}
        </div>
      </div>

      <!-- En-tête lisible du Cours -->
      <div class="p-6 rounded-xl bg-[#181b21] border border-[#262b35] space-y-3">
        ${getActiveRole() === 'admin' ? (() => { const lesson = (typeof backendLessons !== 'undefined' ? backendLessons : []).find(item => item.num === currentCourse.num || item.id === currentCourse.id); const checked = lesson?.status === 'validee'; return `<label class="inline-flex items-center gap-2 cursor-pointer"><input type="checkbox" onchange="adminToggleCurrentCourse()" ${checked ? 'checked' : ''} class="peer sr-only"><span class="relative w-11 h-6 rounded-full bg-slate-600 peer-checked:bg-emerald-600 after:absolute after:top-0.5 after:left-0.5 after:w-5 after:h-5 after:rounded-full after:bg-white after:transition-transform peer-checked:after:translate-x-5"></span><span class="text-xs font-semibold text-slate-200">${checked ? 'Cours validé' : 'Cours à valider'}</span></label>`; })() : ''}
        <div class="flex flex-wrap items-center justify-between gap-2 text-xs text-slate-400">
          <div class="flex flex-wrap items-center gap-2">
            <span class="font-semibold text-sky-400">${currentTheme.code} · ${currentTheme.titre}</span>
            ${currentCourse.level ? `<span class="px-2 py-0.5 rounded bg-[#111317] border border-[#262b35] text-slate-300 font-mono">${currentCourse.level}</span>` : ''}
          </div>
          <span>Durée conseillée : <strong class="text-slate-200">${currentCourse.duration || '25 min'}</strong></span>
        </div>
        <h1 class="text-2xl lg:text-3xl font-bold text-white leading-snug">${currentCourse.num} : ${currentCourse.title}</h1>
        ${getActiveRole() === 'admin' ? (() => { const lesson = (typeof backendLessons !== 'undefined' ? backendLessons : []).find(item => item.num === currentCourse.num || item.id === currentCourse.id); const checked = lesson?.status === 'validee'; return `<label class="inline-flex items-center gap-2 cursor-pointer"><input type="checkbox" onchange="adminToggleCurrentCourse()" ${checked ? 'checked' : ''} class="peer sr-only"><span class="relative w-11 h-6 rounded-full bg-slate-600 peer-checked:bg-emerald-600 after:absolute after:top-0.5 after:left-0.5 after:w-5 after:h-5 after:rounded-full after:bg-white after:transition-transform peer-checked:after:translate-x-5"></span><span class="text-xs font-semibold text-slate-200">${checked ? 'Cours validé' : 'Cours à valider'}</span></label>`; })() : ''}
        <p class="text-base text-slate-200 leading-relaxed">${currentCourse.summary}</p>
        <p class="text-xs text-slate-400 pt-1 border-t border-[#262b35]">Repère méthodologique : <strong class="text-slate-200">${currentTheme.norme}</strong></p>
      </div>

      <!-- Planche Visuelle HD -->
      <div class="rounded-xl overflow-hidden border border-[#262b35] bg-[#0d0f13]">
        <img src="${currentCourse.image}" alt="${currentCourse.title}" onclick="if(typeof openImageModal==='function')openImageModal('${currentCourse.image}')" class="w-full max-h-[460px] object-contain mx-auto cursor-pointer" />
        ${currentCourse.imageCaption ? `<div class="px-4 py-2.5 bg-[#111317] border-t border-[#262b35] text-xs text-slate-300 text-center">${currentCourse.imageCaption}</div>` : ''}
      </div>

      <!-- Points clés de la leçon -->
      ${typeof renderCourseDetailContent === 'function' ? renderCourseDetailContent(currentCourse) : ''}

      <!-- Exercice pratique & Dépôt (Acquis / Non acquis) -->
      ${typeof renderCourseExerciseBlock === 'function' ? renderCourseExerciseBlock(currentCourse) : ''}

      ${customCourses.length ? `
        <div class="p-5 rounded-xl bg-[#181b21] border border-[#262b35] space-y-3">
          <h3 class="text-sm font-bold text-white">Cours complémentaires déposés par l'administration (${customCourses.length})</h3>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-3">
            ${customCourses.map(c => `
              <div class="p-4 rounded-lg bg-[#111317] border border-[#262b35] space-y-1">
                <div class="flex items-center justify-between text-xs text-emerald-400 font-semibold">
                  <span>${esc(c.code)} · ${esc(c.pole === 'graphisme' ? 'Graphisme' : 'Dessin')}</span>
                  <span>Par ${esc(c.author)}</span>
                </div>
                <h4 class="text-sm font-bold text-white">${esc(c.title)}</h4>
                <p class="text-xs text-slate-300 leading-relaxed">${esc(c.summary)}</p>
              </div>
            `).join('')}
          </div>
        </div>
      ` : ''}
    </div>
  `;
}

if (typeof window !== 'undefined') {
  Object.assign(window, { renderCourses, selectCourse, setDisciplineFilter, getAuthorizedCoursesForUser });
}
