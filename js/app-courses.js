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

function setSidebarFiliere(mode) {
  const groupDessin = document.getElementById('sidebar-group-dessin');
  const groupGraph = document.getElementById('sidebar-group-graphisme');
  const btnAll = document.getElementById('filter-pill-all');
  const btnDessin = document.getElementById('filter-pill-dessin');
  const btnGraph = document.getElementById('filter-pill-graphisme');

  if (btnAll) btnAll.className = 'py-1 rounded-lg text-slate-400 hover:text-white transition-all';
  if (btnDessin) btnDessin.className = 'py-1 rounded-lg text-slate-400 hover:text-white transition-all';
  if (btnGraph) btnGraph.className = 'py-1 rounded-lg text-slate-400 hover:text-white transition-all';

  if (mode === 'dessin') {
    if (groupDessin) groupDessin.classList.remove('hidden');
    if (groupGraph) groupGraph.classList.add('hidden');
    if (btnDessin) btnDessin.className = 'py-1 rounded-lg bg-[#e14eca] text-white shadow transition-all';
  } else if (mode === 'graphisme') {
    if (groupDessin) groupDessin.classList.add('hidden');
    if (groupGraph) groupGraph.classList.remove('hidden');
    if (btnGraph) btnGraph.className = 'py-1 rounded-lg bg-[#00f2c3] text-[#131417] shadow transition-all';
  } else {
    if (groupDessin) groupDessin.classList.remove('hidden');
    if (groupGraph) groupGraph.classList.remove('hidden');
    if (btnAll) btnAll.className = 'py-1 rounded-lg bg-[#27293d] text-white shadow transition-all';
  }
}

function toggleSidebarAccordion(section) {
  const list = document.getElementById(`sidebar-list-${section}`);
  const chevron = document.getElementById(`chevron-${section}`);
  if (!list) return;
  const isHidden = list.classList.toggle('hidden');
  if (chevron) {
    chevron.style.transform = isHidden ? 'rotate(-90deg)' : 'rotate(0deg)';
  }
}

function updateSidebarActiveCourse() {
  const activeId = currentCourse ? currentCourse.id : null;
  const isGraph = currentCourse && currentCourse.discipline === 'graphisme';

  const targetListId = isGraph ? 'sidebar-list-graphisme' : 'sidebar-list-dessin';
  const targetList = document.getElementById(targetListId);
  if (targetList && targetList.classList.contains('hidden')) {
    targetList.classList.remove('hidden');
    const chevron = document.getElementById(isGraph ? 'chevron-graphisme' : 'chevron-dessin');
    if (chevron) chevron.style.transform = 'rotate(0deg)';
  }

  document.querySelectorAll('.course-nav-btn').forEach(btn => {
    const isCurrent = btn.getAttribute('data-course-id') === activeId || btn.getAttribute('onclick')?.includes(`'${activeId}'`);
    const badge = btn.querySelector('.course-badge');
    const arrow = btn.querySelector('svg');
    const isBtnGraph = btn.getAttribute('data-course-id')?.includes('-g') || badge?.textContent?.includes('G-');

    if (isCurrent) {
      btn.className = 'course-nav-btn w-full flex items-center justify-between py-1.5 px-2 rounded-lg text-xs font-bold text-white bg-[#252836] border border-[#2b3553] shadow-sm transition-all group';
      if (badge) {
        badge.className = isBtnGraph
          ? 'course-badge text-[10px] font-mono font-black px-1.5 py-0.5 rounded bg-[#00f2c3] text-[#131417] shadow shadow-cyan-500/40 shrink-0'
          : 'course-badge text-[10px] font-mono font-black px-1.5 py-0.5 rounded bg-[#e14eca] text-white shadow shadow-pink-500/40 shrink-0';
      }
      if (arrow) arrow.classList.replace('opacity-0', 'opacity-100');
    } else {
      btn.className = 'course-nav-btn w-full flex items-center justify-between py-1.5 px-2 rounded-lg text-xs font-medium text-slate-300 hover:text-white hover:bg-[#20242c] transition-all group';
      if (badge) {
        badge.className = isBtnGraph
          ? 'course-badge text-[10px] font-mono font-bold px-1.5 py-0.5 rounded bg-cyan-500/15 text-[#00f2c3] shrink-0'
          : 'course-badge text-[10px] font-mono font-bold px-1.5 py-0.5 rounded bg-pink-500/15 text-pink-400 shrink-0';
      }
      if (arrow) arrow.classList.replace('opacity-100', 'opacity-0');
    }
  });
}

function renderCourses() {
  const detailEl = document.getElementById('course-detail');
  if (!detailEl) return;

  updateSidebarActiveCourse();

  const isGraphDetail = currentCourse.discipline === 'graphisme';
  const badgeColor = isGraphDetail 
    ? 'bg-[#00f2c3]/15 text-[#00f2c3] border border-[#00f2c3]/30' 
    : 'bg-[#e14eca]/15 text-[#e14eca] border border-[#e14eca]/30';
  const discName = isGraphDetail ? 'Design Graphique & PAO' : 'Dessin Classique & Peinture';

  const currentIndex = COURSES_DATA.findIndex(c => c.id === currentCourse.id);
  const prevCourse = currentIndex > 0 ? COURSES_DATA[currentIndex - 1] : null;
  const nextCourse = currentIndex < COURSES_DATA.length - 1 ? COURSES_DATA[currentIndex + 1] : null;

  detailEl.innerHTML = `
    <div class="space-y-6">
      <!-- Barre Supérieure de Navigation Pleine Largeur du Cours -->
      <div class="p-4 rounded-2xl bg-[#27293d] border border-[#2b3553]/60 shadow-lg shadow-black/20 flex flex-wrap items-center justify-between gap-3">
        <div class="flex items-center gap-2 text-xs text-slate-400">
          <span class="cursor-pointer hover:text-white transition-colors" onclick="showTab('accueil')">Dashboard</span>
          <span>/</span>
          <span class="font-semibold ${isGraphDetail ? 'text-[#00f2c3]' : 'text-[#e14eca]'}">${discName}</span>
          <span>/</span>
          <span class="font-bold text-white">${currentCourse.num}</span>
        </div>

        <div class="flex items-center gap-2">
          ${prevCourse ? `
            <button onclick="selectCourse('${prevCourse.id}')" class="px-3.5 py-1.5 rounded-xl bg-[#1f2233] hover:bg-[#2d324d] border border-[#2b3553] text-xs font-semibold text-slate-300 hover:text-white transition-all flex items-center gap-1.5" title="${prevCourse.title}">
              <span>←</span>
              <span>${prevCourse.num}</span>
            </button>
          ` : ''}

          <span class="text-[11px] text-slate-400 font-mono px-2">
            ${currentIndex + 1} / ${COURSES_DATA.length}
          </span>

          ${nextCourse ? `
            <button onclick="selectCourse('${nextCourse.id}')" class="px-3.5 py-1.5 rounded-xl bg-[#1f2233] hover:bg-[#2d324d] border border-[#2b3553] text-xs font-semibold text-slate-300 hover:text-white transition-all flex items-center gap-1.5" title="${nextCourse.title}">
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
      <div class="p-4 rounded-xl bg-[#1f2233] border-l-4 ${isGraphDetail ? 'border-[#00f2c3]' : 'border-[#e14eca]'} space-y-2">
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
            <div class="p-4 rounded-xl bg-[#27293d] border border-[#2b3553]/60">
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
        <div class="p-6 rounded-2xl bg-[#27293d] border border-[#2b3553]/60 space-y-6">
          <div class="flex items-center justify-between pb-3 border-b border-[#2b3553]">
            <div>
              <span class="text-[10px] font-bold px-2.5 py-1 rounded bg-[#ba54f5]/20 text-[#ba54f5] uppercase tracking-wider">ÉTUDE COMPARATIVE AVANT / APRÈS</span>
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
              <div class="p-3 rounded-xl bg-[#1f2233] border border-[#2b3553] text-center">
                <p class="text-[10px] text-slate-400 uppercase">Silhouette</p>
                <p class="text-base font-extrabold text-[#e14eca] mt-0.5">${currentCourse.correction.grades.silhouette}/10</p>
              </div>
              <div class="p-3 rounded-xl bg-[#1f2233] border border-[#2b3553] text-center">
                <p class="text-[10px] text-slate-400 uppercase">Structure</p>
                <p class="text-base font-extrabold text-[#e14eca] mt-0.5">${currentCourse.correction.grades.structure}/10</p>
              </div>
              <div class="p-3 rounded-xl bg-[#1f2233] border border-[#2b3553] text-center">
                <p class="text-[10px] text-slate-400 uppercase">Valeurs</p>
                <p class="text-base font-extrabold text-[#e14eca] mt-0.5">${currentCourse.correction.grades.valeurs}/10</p>
              </div>
              <div class="p-3 rounded-xl bg-[#1f2233] border border-[#2b3553] text-center">
                <p class="text-[10px] text-slate-400 uppercase">Bords</p>
                <p class="text-base font-extrabold text-[#00f2c3] mt-0.5">${currentCourse.correction.grades.bords}/10</p>
              </div>
              <div class="p-3 rounded-xl bg-[#1f2233] border border-[#2b3553] text-center">
                <p class="text-[10px] text-slate-400 uppercase">Technique</p>
                <p class="text-base font-extrabold text-[#00f2c3] mt-0.5">${currentCourse.correction.grades.couleur}/10</p>
              </div>
            </div>
          </div>
        </div>
      ` : ''}
    </div>
  `;
}
