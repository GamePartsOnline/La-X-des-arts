// =====================================================================
// RENDU DU COURS EN PLEINE LARGEUR & NAVIGATION DIRECTE
// =====================================================================

function setDisciplineFilter(disc) {
  currentDiscipline = disc;
  renderCourses();
}

function selectCourse(id) {
  const found = COURSES_DATA.find(c => c.id === id);
  if (found) {
    currentCourse = found;
  }
  showTab('cours');
  renderCourses();
}

function updateSidebarActiveCourse() {
  document.querySelectorAll('aside button').forEach(btn => {
    const isCurrent = btn.getAttribute('onclick')?.includes(`'${currentCourse.id}'`);
    const dot = btn.querySelector('.rounded-full');
    if (isCurrent) {
      btn.classList.add('text-white', 'font-bold');
      btn.classList.remove('text-slate-400');
      if (dot) {
        dot.className = currentCourse.discipline === 'graphisme' 
          ? 'w-2 h-2 rounded-full border-2 border-[#00e1d9] bg-[#00e1d9] shadow-sm shadow-cyan-500/50' 
          : 'w-2 h-2 rounded-full border-2 border-[#d6a55b] bg-[#d6a55b] shadow-sm shadow-amber-500/50';
      }
    } else if (btn.getAttribute('onclick')?.includes('selectCourse')) {
      btn.classList.remove('text-white');
      btn.classList.add('text-slate-400');
      if (dot) {
        dot.className = 'w-1.5 h-1.5 rounded-full bg-slate-600';
      }
    }
  });
}

function renderCourses() {
  const detailEl = document.getElementById('course-detail');
  if (!detailEl) return;

  updateSidebarActiveCourse();

  const isGraphDetail = currentCourse.discipline === 'graphisme';
  const badgeColor = isGraphDetail ? 'bg-[#00e1d9]/20 text-[#00e1d9]' : 'bg-[#d6a55b]/20 text-[#d6a55b]';
  const discName = isGraphDetail ? 'Design Graphique' : 'Dessin & Peinture';

  const currentIndex = COURSES_DATA.findIndex(c => c.id === currentCourse.id);
  const prevCourse = currentIndex > 0 ? COURSES_DATA[currentIndex - 1] : null;
  const nextCourse = currentIndex < COURSES_DATA.length - 1 ? COURSES_DATA[currentIndex + 1] : null;

  detailEl.innerHTML = `
    <div class="space-y-6">
      <!-- Barre Supérieure de Navigation Pleine Largeur du Cours -->
      <div class="p-3.5 rounded-2xl bg-[#1b1e24] border border-[#272b35] flex flex-wrap items-center justify-between gap-3">
        <div class="flex items-center gap-2 text-xs text-slate-400">
          <span class="cursor-pointer hover:text-white" onclick="showTab('accueil')">Dashboard</span>
          <span>/</span>
          <span class="font-semibold ${isGraphDetail ? 'text-[#00e1d9]' : 'text-[#d6a55b]'}">${discName}</span>
          <span>/</span>
          <span class="font-bold text-white">${currentCourse.num}</span>
        </div>

        <div class="flex items-center gap-2">
          ${prevCourse ? `
            <button onclick="selectCourse('${prevCourse.id}')" class="px-3 py-1.5 rounded-xl bg-[#131417] hover:bg-[#20242c] border border-[#272b35] text-xs font-semibold text-slate-300 hover:text-white transition-all flex items-center gap-1.5" title="${prevCourse.title}">
              <span>←</span>
              <span>${prevCourse.num}</span>
            </button>
          ` : ''}

          <span class="text-[11px] text-slate-500 font-mono px-2">
            ${currentIndex + 1} / ${COURSES_DATA.length}
          </span>

          ${nextCourse ? `
            <button onclick="selectCourse('${nextCourse.id}')" class="px-3 py-1.5 rounded-xl bg-[#131417] hover:bg-[#20242c] border border-[#272b35] text-xs font-semibold text-slate-300 hover:text-white transition-all flex items-center gap-1.5" title="${nextCourse.title}">
              <span>${nextCourse.num}</span>
              <span>→</span>
            </button>
          ` : ''}
        </div>
      </div>

      <!-- En-tête du Cours -->
      <div class="space-y-2">
        <div class="flex flex-wrap items-center gap-2">
          <span class="text-[10px] font-bold px-2.5 py-1 rounded ${badgeColor} uppercase tracking-wider">
            ${currentCourse.num} · ${currentCourse.domain}
          </span>
          <span class="text-[10px] font-semibold px-2 py-0.5 rounded bg-[#272b35] text-slate-300">
            Niveau : ${currentCourse.level}
          </span>
          <span class="text-[10px] font-semibold px-2 py-0.5 rounded bg-[#272b35] text-slate-300">
            Durée estimée : ${currentCourse.duration}
          </span>
        </div>
        <h2 class="font-serif text-2xl lg:text-3xl font-black text-white">${currentCourse.title}</h2>
        <p class="text-xs lg:text-sm text-slate-300 leading-relaxed">${currentCourse.summary}</p>
      </div>

      <!-- Citation & Référence -->
      <div class="p-4 rounded-xl bg-[#1b1e24] border-l-4 ${isGraphDetail ? 'border-[#00e1d9]' : 'border-[#d6a55b]'} space-y-2">
        <p class="text-xs italic text-slate-200">"${currentCourse.artist.quote}"</p>
        <div class="flex items-center justify-between text-[11px]">
          <span class="font-bold text-white">${currentCourse.artist.name}</span>
          <span class="text-slate-400 text-[10px]">${currentCourse.artist.bio}</span>
        </div>
      </div>

      <!-- Fondements Théoriques -->
      <div class="space-y-3">
        <h3 class="font-serif font-bold text-base text-white">Méthodologie & Fondements Clés</h3>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-3">
          ${currentCourse.theory.map(t => `
            <div class="p-4 rounded-xl bg-[#1b1e24] border border-[#272b35]">
              <h4 class="font-bold text-sm text-slate-200 mb-1">${t.title}</h4>
              <p class="text-xs text-slate-400 leading-relaxed">${t.desc}</p>
            </div>
          `).join('')}
        </div>
      </div>

      <!-- Module de Réalisation & Envoi de Travail pour Correction Pédagogique -->
      ${typeof renderCourseExerciseBlock === 'function' ? renderCourseExerciseBlock(currentCourse) : ''}

      ${currentCourse.correction ? `
        <!-- Correction d'Élève & Analyse Comparative Avant / Après -->
        <div class="p-6 rounded-2xl bg-[#131417] border border-[#272b35] space-y-6">
          <div class="flex items-center justify-between pb-3 border-b border-[#272b35]">
            <div>
              <span class="text-[10px] font-bold px-2.5 py-1 rounded bg-purple-500/20 text-purple-300 uppercase tracking-wider">ÉTUDE COMPARATIVE AVANT / APRÈS</span>
              <h3 class="font-serif font-bold text-white text-lg mt-1">Critique Constructive & Remédiation Académique</h3>
            </div>
            <span class="text-xs font-semibold px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400">
              Note Pédagogique : 9.3 / 10
            </span>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div class="p-4 rounded-xl bg-red-950/20 border border-red-500/30 space-y-3">
              <h4 class="text-xs font-bold uppercase tracking-wider text-red-400 flex items-center gap-1.5">
                <span class="w-2 h-2 rounded-full bg-red-400"></span> 3 Erreurs Typiques Détectées
              </h4>
              <div class="space-y-2">
                ${currentCourse.correction.student_errors.map(err => `
                  <div class="text-xs">
                    <span class="font-semibold text-slate-200">${err.label} : </span>
                    <span class="text-slate-400">${err.detail}</span>
                  </div>
                `).join('')}
              </div>
            </div>

            <div class="p-4 rounded-xl bg-emerald-950/20 border border-emerald-500/30 space-y-3">
              <h4 class="text-xs font-bold uppercase tracking-wider text-emerald-400 flex items-center gap-1.5">
                <span class="w-2 h-2 rounded-full bg-emerald-400"></span> Remédiations de l'École
              </h4>
              <div class="space-y-2">
                ${currentCourse.correction.remediations.map(rem => `
                  <div class="text-xs">
                    <span class="font-semibold text-slate-200">${rem.label} : </span>
                    <span class="text-slate-400">${rem.detail}</span>
                  </div>
                `).join('')}
              </div>
            </div>
          </div>

          <!-- Grille des 5 Critères Fondamentaux -->
          <div class="pt-2">
            <h4 class="text-xs font-bold text-slate-300 uppercase tracking-wider mb-3">Grille Officielle des 5 Critères d'Évaluation</h4>
            <div class="grid grid-cols-2 sm:grid-cols-5 gap-3">
              <div class="p-3 rounded-xl bg-[#1b1e24] border border-[#272b35] text-center">
                <p class="text-[10px] text-[#8f95a3] uppercase">Silhouette</p>
                <p class="text-base font-extrabold text-[#d6a55b] mt-0.5">${currentCourse.correction.grades.silhouette}/10</p>
              </div>
              <div class="p-3 rounded-xl bg-[#1b1e24] border border-[#272b35] text-center">
                <p class="text-[10px] text-[#8f95a3] uppercase">Structure</p>
                <p class="text-base font-extrabold text-[#d6a55b] mt-0.5">${currentCourse.correction.grades.structure}/10</p>
              </div>
              <div class="p-3 rounded-xl bg-[#1b1e24] border border-[#272b35] text-center">
                <p class="text-[10px] text-[#8f95a3] uppercase">Valeurs</p>
                <p class="text-base font-extrabold text-[#d6a55b] mt-0.5">${currentCourse.correction.grades.valeurs}/10</p>
              </div>
              <div class="p-3 rounded-xl bg-[#1b1e24] border border-[#272b35] text-center">
                <p class="text-[10px] text-[#8f95a3] uppercase">Bords</p>
                <p class="text-base font-extrabold text-[#d6a55b] mt-0.5">${currentCourse.correction.grades.bords}/10</p>
              </div>
              <div class="p-3 rounded-xl bg-[#1b1e24] border border-[#272b35] text-center">
                <p class="text-[10px] text-[#8f95a3] uppercase">Couleur</p>
                <p class="text-base font-extrabold text-[#d6a55b] mt-0.5">${currentCourse.correction.grades.couleur}/10</p>
              </div>
            </div>
          </div>
        </div>
      ` : ''}
    </div>
  `;
}
