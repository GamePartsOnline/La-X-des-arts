// =====================================================================
// CONTENU DE LEÇON COMPLET, SCHÉMAS PÉDAGOGIQUES & GRILLE CAHIER 07 GPO
// =====================================================================

function renderCourseSourceCard() {
  return '';
}

function renderPersonaNavigation() {
  return '';
}

function renderSubExerciseSvg(svgType) {
  if (svgType === 'lignes') {
    return `
      <svg viewBox="0 0 360 110" class="w-full h-28 rounded-lg bg-[#0d0f13] border border-[#262b35] p-2">
        <text x="12" y="18" fill="#38bdf8" font-size="10" font-family="monospace" font-weight="bold">1. Séries parallèles (H / V / Diag)</text>
        <line x1="14" y1="30" x2="145" y2="30" stroke="#e2e8f0" stroke-width="2" stroke-linecap="round"/>
        <line x1="14" y1="44" x2="145" y2="44" stroke="#e2e8f0" stroke-width="2" stroke-linecap="round"/>
        <line x1="14" y1="58" x2="145" y2="58" stroke="#e2e8f0" stroke-width="2" stroke-linecap="round"/>
        <line x1="20" y1="72" x2="55" y2="100" stroke="#94a3b8" stroke-width="1.8" stroke-linecap="round"/>
        <line x1="50" y1="72" x2="85" y2="100" stroke="#94a3b8" stroke-width="1.8" stroke-linecap="round"/>
        <line x1="80" y1="72" x2="115" y2="100" stroke="#94a3b8" stroke-width="1.8" stroke-linecap="round"/>
        <line x1="175" y1="12" x2="175" y2="100" stroke="#262b35" stroke-width="1"/>
        <text x="190" y="18" fill="#34d399" font-size="10" font-family="monospace" font-weight="bold">2. Relier A → B d'un seul jet</text>
        <circle cx="198" cy="42" r="3.5" fill="#f8485e"/>
        <circle cx="338" cy="34" r="3.5" fill="#f8485e"/>
        <line x1="198" y1="42" x2="338" y2="34" stroke="#34d399" stroke-width="2.2" stroke-linecap="round"/>
        <text x="190" y="72" fill="#f87171" font-size="9" font-family="monospace">✕ À éviter : petits traits hachés</text>
        <path d="M198 88 L218 85 M214 89 L238 84 M233 88 L260 85 M256 89 L284 84 M280 88 L310 85 M306 89 L336 86" stroke="#f87171" stroke-width="1.6" stroke-linecap="round"/>
      </svg>
    `;
  }
  if (svgType === 'ellipses') {
    return `
      <svg viewBox="0 0 360 110" class="w-full h-28 rounded-lg bg-[#0d0f13] border border-[#262b35] p-2">
        <text x="12" y="18" fill="#38bdf8" font-size="10" font-family="monospace" font-weight="bold">1. Cercles & ellipses sur axe</text>
        <line x1="14" y1="62" x2="195" y2="62" stroke="#475569" stroke-width="1" stroke-dasharray="3,3"/>
        <circle cx="42" cy="62" r="24" fill="none" stroke="#e2e8f0" stroke-width="1.8"/>
        <ellipse cx="102" cy="62" rx="16" ry="26" fill="none" stroke="#38bdf8" stroke-width="1.8"/>
        <ellipse cx="156" cy="62" rx="28" ry="14" fill="none" stroke="#34d399" stroke-width="1.8"/>
        <line x1="212" y1="12" x2="212" y2="100" stroke="#262b35" stroke-width="1"/>
        <text x="226" y="18" fill="#34d399" font-size="10" font-family="monospace" font-weight="bold">2. Cylindre (2 ellipses + 2 droites)</text>
        <line x1="285" y1="24" x2="285" y2="102" stroke="#f8485e" stroke-width="1" stroke-dasharray="3,3"/>
        <ellipse cx="285" cy="36" rx="34" ry="10" fill="none" stroke="#38bdf8" stroke-width="1.8"/>
        <ellipse cx="285" cy="86" rx="34" ry="10" fill="none" stroke="#64748b" stroke-width="1.2" stroke-dasharray="3,2"/>
        <path d="M251 86 A34 10 0 0 0 319 86" fill="none" stroke="#e2e8f0" stroke-width="2"/>
        <line x1="251" y1="36" x2="251" y2="86" stroke="#e2e8f0" stroke-width="2"/>
        <line x1="319" y1="36" x2="319" y2="86" stroke="#e2e8f0" stroke-width="2"/>
      </svg>
    `;
  }
  return `
    <svg viewBox="0 0 360 110" class="w-full h-28 rounded-lg bg-[#0d0f13] border border-[#262b35] p-2">
      <text x="12" y="16" fill="#38bdf8" font-size="9.5" font-family="monospace" font-weight="bold">Joystick (Sphère + Cylindre + Boîte)</text>
      <line x1="65" y1="22" x2="65" y2="102" stroke="#f8485e" stroke-width="1" stroke-dasharray="2,2"/>
      <circle cx="65" cy="38" r="14" fill="none" stroke="#38bdf8" stroke-width="1.8"/>
      <rect x="61" y="52" width="8" height="24" fill="none" stroke="#94a3b8" stroke-width="1.5"/>
      <ellipse cx="65" cy="78" rx="18" ry="5" fill="none" stroke="#64748b" stroke-width="1.2"/>
      <rect x="30" y="76" width="70" height="18" rx="2" fill="none" stroke="#e2e8f0" stroke-width="1.8"/>
      <line x1="138" y1="12" x2="138" y2="100" stroke="#262b35" stroke-width="1"/>
      <text x="150" y="16" fill="#34d399" font-size="9.5" font-family="monospace" font-weight="bold">Tasse (Cylindre + Anse)</text>
      <line x1="192" y1="24" x2="192" y2="100" stroke="#f8485e" stroke-width="1" stroke-dasharray="2,2"/>
      <ellipse cx="192" cy="38" rx="22" ry="7" fill="none" stroke="#38bdf8" stroke-width="1.6"/>
      <line x1="170" y1="38" x2="170" y2="86" stroke="#e2e8f0" stroke-width="1.8"/>
      <line x1="214" y1="38" x2="214" y2="86" stroke="#e2e8f0" stroke-width="1.8"/>
      <ellipse cx="192" cy="86" rx="22" ry="7" fill="none" stroke="#34d399" stroke-width="1.6"/>
      <path d="M214 48 C232 48 232 76 214 76" fill="none" stroke="#e2e8f0" stroke-width="2"/>
      <line x1="252" y1="12" x2="252" y2="100" stroke="#262b35" stroke-width="1"/>
      <text x="262" y="16" fill="#fbbf24" font-size="9.5" font-family="monospace" font-weight="bold">Haut-parleur / Bouteille</text>
      <rect x="266" y="28" width="42" height="66" fill="none" stroke="#e2e8f0" stroke-width="1.8"/>
      <circle cx="287" cy="45" r="8" fill="none" stroke="#38bdf8" stroke-width="1.5"/>
      <circle cx="287" cy="73" r="14" fill="none" stroke="#34d399" stroke-width="1.6"/>
      <line x1="334" y1="22" x2="334" y2="98" stroke="#f8485e" stroke-width="1" stroke-dasharray="2,2"/>
      <rect x="329" y="26" width="10" height="16" fill="none" stroke="#38bdf8" stroke-width="1.4"/>
      <polygon points="329,42 339,42 346,56 322,56" fill="none" stroke="#fbbf24" stroke-width="1.4"/>
      <rect x="322" y="56" width="24" height="38" fill="none" stroke="#e2e8f0" stroke-width="1.8"/>
    </svg>
  `;
}

function renderCourseDetailContent(course) {
  const errors = course.correction?.student_errors || [];
  const rems = course.correction?.remediations || [];
  const steps = course.theory || [];
  const subEx = course.subExercises || [];
  const evalCriteria = course.evaluationCriteria || [];
  const deferred = course.deferredTopicsNote || [];

  return `
    <div class="space-y-6">
      <!-- Principe essentiel & Cadre matériel officiel -->
      <div class="p-5 rounded-xl bg-[#181b21] border border-[#262b35] space-y-3">
        <div class="flex flex-wrap items-center justify-between gap-2">
          <span class="text-xs font-semibold uppercase tracking-wider text-emerald-400">Principe pédagogique essentiel</span>
          <span class="text-xs font-mono text-slate-400">${course.artist?.name || 'Atelier La Croisée des Arts'}</span>
        </div>
        <p class="text-base text-slate-100 leading-relaxed font-medium">
          « ${course.artist?.quote || course.summary} »
        </p>
        ${(course.materiel || course.methode) ? `
          <div class="grid grid-cols-1 md:grid-cols-2 gap-3 pt-3 border-t border-[#262b35] text-xs">
            ${course.materiel ? `
              <div class="p-3 rounded-lg bg-[#111317] border border-[#262b35]">
                <span class="font-bold text-sky-400 block mb-0.5">Matériel requis :</span>
                <span class="text-slate-200">${course.materiel}</span>
              </div>
            ` : ''}
            ${course.methode ? `
              <div class="p-3 rounded-lg bg-[#111317] border border-[#262b35]">
                <span class="font-bold text-amber-400 block mb-0.5">Méthode de progression :</span>
                <span class="text-slate-200">${course.methode}</span>
              </div>
            ` : ''}
          </div>
        ` : ''}
      </div>

      ${steps.length ? `
        <!-- Les 4 Piliers fondamentaux de la leçon -->
        <div class="p-6 rounded-xl bg-[#181b21] border border-[#262b35] space-y-4">
          <div class="flex flex-wrap items-center justify-between gap-2">
            <h3 class="text-base font-bold text-white">Ce qu'il faut apprendre dans ce cours (4 piliers)</h3>
            <span class="text-xs text-slate-400">À lire avant de prendre le crayon</span>
          </div>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            ${steps.map((s, idx) => {
              const rawTitle = String(s.subtitle || s.title || 'Étape').replace(/^\d+[\.\)]\s*/, '');
              const bodyText = s.desc || s.text || s.content || '';
              return `
                <div class="p-4 rounded-lg bg-[#111317] border border-[#262b35] space-y-2">
                  <div class="flex items-center gap-2">
                    <span class="px-2 py-0.5 rounded bg-sky-500/15 text-sky-400 font-mono text-xs font-bold">Pilier ${idx + 1}</span>
                    <h4 class="text-sm font-bold text-white">${rawTitle}</h4>
                  </div>
                  <p class="text-sm text-slate-300 leading-relaxed">${bodyText}</p>
                </div>
              `;
            }).join('')}
          </div>
        </div>
      ` : ''}

      ${subEx.length ? `
        <!-- Programme Pratique Détaillé : Les 3 Exercices Progressifs -->
        <div class="p-6 rounded-xl bg-[#181b21] border border-[#262b35] space-y-4">
          <div class="flex flex-wrap items-center justify-between gap-2">
            <div>
              <span class="text-xs font-mono uppercase text-[#f8485e] font-bold">Entraînement pratique étape par étape</span>
              <h3 class="text-base font-bold text-white mt-0.5">Les 3 Exercices Progressifs à réaliser sur papier</h3>
            </div>
            <span class="px-2.5 py-1 rounded-md bg-[#111317] border border-[#262b35] text-xs font-mono text-slate-300">3 séances courtes (20 à 25 min)</span>
          </div>

          <div class="grid grid-cols-1 lg:grid-cols-3 gap-4">
            ${subEx.map(ex => `
              <div class="p-4 rounded-xl bg-[#111317] border border-[#262b35] flex flex-col justify-between space-y-3">
                <div class="space-y-2">
                  <div class="flex items-center justify-between gap-2">
                    <span class="px-2 py-0.5 rounded bg-[#f8485e]/15 text-[#f8485e] font-mono text-xs font-bold">${ex.code}</span>
                    <span class="text-xs font-mono text-slate-400">${ex.duration}</span>
                  </div>
                  <h4 class="text-sm font-bold text-white">${ex.title}</h4>
                  <p class="text-xs text-emerald-400 font-medium">Compétence : ${ex.skill}</p>
                  ${renderSubExerciseSvg(ex.svgType)}
                  <p class="text-xs text-slate-200 leading-relaxed pt-1"><strong class="text-white">Consigne :</strong> ${ex.task}</p>
                </div>
              </div>
            `).join('')}
          </div>
        </div>
      ` : ''}

      <!-- À faire vs À éviter -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div class="p-5 rounded-xl bg-[#181b21] border border-emerald-500/30 space-y-3">
          <h4 class="text-sm font-bold text-emerald-400">Les bons réflexes à appliquer</h4>
          <ul class="space-y-2.5 text-sm text-slate-200 leading-relaxed">
            ${rems.slice(0, 3).map(r => `
              <li class="flex items-start gap-2.5">
                <span class="text-emerald-400 font-bold">✓</span>
                <span><strong class="text-white">${r.label}</strong> : ${r.detail}</span>
              </li>
            `).join('')}
          </ul>
        </div>

        <div class="p-5 rounded-xl bg-[#181b21] border border-rose-500/30 space-y-3">
          <h4 class="text-sm font-bold text-rose-400">Les erreurs fréquentes à éviter</h4>
          <ul class="space-y-2.5 text-sm text-slate-200 leading-relaxed">
            ${errors.slice(0, 3).map(e => `
              <li class="flex items-start gap-2.5">
                <span class="text-rose-400 font-bold">✕</span>
                <span><strong class="text-white">${e.label}</strong> : ${e.detail}</span>
              </li>
            `).join('')}
          </ul>
        </div>
      </div>

      ${evalCriteria.length ? `
        <!-- Grille des 6 critères d'observation -->
        <div class="p-5 rounded-xl bg-[#181b21] border border-[#262b35] space-y-3">
          <div class="flex flex-wrap items-center justify-between gap-2">
            <h4 class="text-sm font-bold text-white">Critères de réussite observés sur votre feuille</h4>
            <span class="text-xs text-emerald-400 font-mono">Validation : Acquis / Non acquis</span>
          </div>
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2.5">
            ${evalCriteria.map((crit, i) => `
              <div class="p-3 rounded-lg bg-[#111317] border border-[#262b35] flex items-start gap-2 text-xs text-slate-200">
                <span class="font-mono font-bold text-sky-400">${i + 1}.</span>
                <span>${crit}</span>
              </div>
            `).join('')}
          </div>
        </div>
      ` : ''}
    </div>
  `;
}
