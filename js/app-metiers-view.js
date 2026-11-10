// =====================================================================
// VUE INTERACTIVE : 24 FICHES MÉTIERS SANS IMAGES FICTIVES, LIENS D'ÉCOLES
// CLIQUABLES, MÉTIER À DÉCOUVRIR & RENVOI VERS L'ANNUAIRE DES 26 ÉCOLES
// =====================================================================

let currentMetierPoleFilter = 'all', currentSelectedMetierId = 'metier-01-illustrateur-editorial', currentDiscoverIndex = 0;

function setMetierPoleFilter(pole) {
  currentMetierPoleFilter = pole;
  const list = getFilteredMetiers();
  if (list.length > 0 && !list.some(m => m.id === currentSelectedMetierId)) currentSelectedMetierId = list[0].id;
  renderMetiersView();
}

function selectMetierFiche(metierId) {
  currentSelectedMetierId = metierId;
  renderMetiersView();
  document.getElementById('metier-fiche-detail')?.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
}

function getFilteredMetiers() {
  const all = window.METIERS_DATA || [];
  return currentMetierPoleFilter === 'all' ? all : all.filter(m => m.pole === currentMetierPoleFilter);
}

function getPoleBadgeHTML(pole) {
  if (pole === 'dessin') return `<span class="px-2.5 py-0.5 rounded bg-[#f8485e]/15 text-[#f8485e] border border-[#f8485e]/30 font-mono text-xs font-semibold">Dessin, Concept & Animation</span>`;
  if (pole === 'graphisme') return `<span class="px-2.5 py-0.5 rounded bg-sky-500/15 text-sky-300 border border-sky-500/30 font-mono text-xs font-semibold">Design, Typo, PAO & RPIP</span>`;
  return `<span class="px-2.5 py-0.5 rounded bg-emerald-500/15 text-emerald-300 border border-emerald-500/30 font-mono text-xs font-semibold">Patrimoine, Livre & Direction</span>`;
}

function formatEcoleLinkHTML(ecole) {
  if (!ecole) return '';
  if (typeof ecole === 'string') return `<span class="text-slate-200">${ecole}</span>`;
  return `
    <a href="${ecole.url}" target="_blank" rel="noopener noreferrer" onclick="event.stopPropagation()" class="group inline-flex flex-col p-3.5 rounded-xl bg-[#181b21] border border-[#262b35] hover:border-emerald-400 transition-all text-left w-full">
      <span class="flex items-center justify-between gap-2">
        <span class="font-bold text-xs text-emerald-300 group-hover:underline">${ecole.nom} ↗</span>
        <span class="text-[11px] font-mono text-slate-400 truncate max-w-[140px]">${ecole.url.replace(/^https?:\/\/(www\.)?/, '').replace(/\/$/, '')}</span>
      </span>
      <span class="text-xs text-slate-300 mt-1 leading-snug">${ecole.detail || ''}</span>
    </a>
  `;
}

function discoverNextRandomMetier() {
  const all = window.METIERS_DATA || [];
  if (!all.length) return;
  currentDiscoverIndex = (currentDiscoverIndex + 1) % all.length;
  renderDiscoverMetierWidget();
}

function renderDiscoverMetierWidget() {
  const slot = document.getElementById('home-discover-metier-slot');
  if (!slot) return;
  const all = window.METIERS_DATA || [];
  if (!all.length) return;
  const m = all[currentDiscoverIndex % all.length];

  slot.innerHTML = `
    <div class="p-6 rounded-2xl bg-[#181b21] border border-[#262b35] space-y-5">
      <div class="flex flex-wrap items-center justify-between gap-4 border-b border-[#262b35] pb-4">
        <div class="space-y-1">
          <div class="flex flex-wrap items-center gap-2">
            <span class="px-2.5 py-0.5 rounded bg-[#f8485e] text-white font-mono text-xs font-bold">Métier à découvrir (${m.num}/${all.length})</span>
            ${getPoleBadgeHTML(m.pole)}
            <span class="px-2.5 py-0.5 rounded bg-[#111317] border border-[#262b35] text-slate-300 font-mono text-xs">ROME ${m.codeRome}</span>
          </div>
          <h3 class="text-xl font-bold text-white pt-1">${m.titre}</h3>
          <p class="text-sm text-slate-300 leading-relaxed">${m.accroche}</p>
        </div>
        <div class="flex flex-wrap items-center gap-2">
          <button onclick="discoverNextRandomMetier()" class="px-3.5 py-2 rounded-xl bg-[#111317] hover:bg-[#262b35] border border-[#262b35] text-slate-200 text-xs font-bold">
            Autre métier (${((currentDiscoverIndex + 1) % all.length) + 1}/${all.length})
          </button>
          <button onclick="showTab('metiers'); selectMetierFiche('${m.id}');" class="px-4 py-2 rounded-xl bg-[#f8485e] hover:bg-[#e0374c] text-white text-xs font-bold">
            Ouvrir la fiche complète →
          </button>
        </div>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-12 gap-4">
        <div class="lg:col-span-5 p-4 rounded-xl bg-[#111317] border border-[#262b35] space-y-2">
          <span class="text-xs font-mono uppercase text-[#f8485e] font-bold block">Diplômes & Normes du métier</span>
          <p class="text-xs text-white font-semibold">${m.diplome}</p>
          <p class="text-xs font-mono text-amber-300">Normes : ${m.normes}</p>
          <p class="text-xs text-slate-300 pt-2 border-t border-[#262b35]"><strong class="text-white">En stage :</strong> ${m.attendusStagiaire}</p>
        </div>
        <div class="lg:col-span-7 p-4 rounded-xl bg-[#111317] border border-[#262b35] space-y-2">
          <span class="text-xs font-mono uppercase text-emerald-400 font-bold block">Écoles & Sites qui enseignent ce métier (liens directs)</span>
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-2">
            ${(m.ecoles || []).slice(0, 4).map(e => formatEcoleLinkHTML(e)).join('')}
          </div>
        </div>
      </div>
    </div>
  `;
}

function renderMetiersView() {
  const container = document.getElementById('metiers-workspace-container');
  if (!container) return;

  const allMetiers = window.METIERS_DATA || [];
  const schools = window.SCHOOLS_DIRECTORY_DATA || [];
  const filtered = getFilteredMetiers();
  const activeMetier = allMetiers.find(m => m.id === currentSelectedMetierId) || filtered[0] || allMetiers[0];
  if (!activeMetier) return;

  const countDessin = allMetiers.filter(m => m.pole === 'dessin').length;
  const countGraph = allMetiers.filter(m => m.pole === 'graphisme').length;
  const countTrans = allMetiers.filter(m => m.pole === 'transverse').length;

  container.innerHTML = `
    <div class="space-y-6">
      <div class="p-6 lg:p-8 rounded-2xl bg-[#181b21] border border-[#262b35] flex flex-col lg:flex-row lg:items-center justify-between gap-4">
        <div class="space-y-1.5 max-w-3xl">
          <span class="px-2.5 py-1 rounded-md bg-[#f8485e]/15 text-[#f8485e] font-mono text-xs font-semibold">${allMetiers.length} Fiches Métiers Documentées · Sans Images Artificielles</span>
          <h1 class="text-2xl lg:text-3xl font-bold text-white">Référentiel des 24 Métiers & Écoles Associées</h1>
          <p class="text-sm text-slate-300 leading-relaxed">
            Chaque fiche présente le code ROME, les diplômes officiels (DN MADE, DSAA, Bac Pro RPIP, RNCP), les normes techniques d'atelier et les liens directs vers les écoles qui préparent au métier.
          </p>
        </div>
        <button onclick="showTab('ecoles')" class="px-4 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold shrink-0 self-start lg:self-center">
          Ouvrir l'Annuaire des ${schools.length} Écoles & Sites →
        </button>
      </div>

      <!-- Filtres par Pôle -->
      <div class="flex flex-wrap items-center justify-between gap-3">
        <div class="flex flex-wrap items-center gap-1.5 bg-[#181b21] p-1.5 rounded-2xl border border-[#262b35]">
          <button onclick="setMetierPoleFilter('all')" class="px-3.5 py-2 rounded-xl text-xs font-bold transition-all ${currentMetierPoleFilter === 'all' ? 'bg-[#f8485e] text-white' : 'text-slate-300 hover:text-white'}">
            Tous les métiers (${allMetiers.length})
          </button>
          <button onclick="setMetierPoleFilter('dessin')" class="px-3.5 py-2 rounded-xl text-xs font-bold transition-all ${currentMetierPoleFilter === 'dessin' ? 'bg-[#f8485e] text-white' : 'text-slate-300 hover:text-white'}">
            Dessin, BD, Concept & Animation (${countDessin})
          </button>
          <button onclick="setMetierPoleFilter('graphisme')" class="px-3.5 py-2 rounded-xl text-xs font-bold transition-all ${currentMetierPoleFilter === 'graphisme' ? 'bg-sky-500 text-white' : 'text-slate-300 hover:text-white'}">
            Design, Typo, Web, PAO & RPIP (${countGraph})
          </button>
          <button onclick="setMetierPoleFilter('transverse')" class="px-3.5 py-2 rounded-xl text-xs font-bold transition-all ${currentMetierPoleFilter === 'transverse' ? 'bg-emerald-500 text-black' : 'text-slate-300 hover:text-white'}">
            Patrimoine, Reliure & Direction (${countTrans})
          </button>
        </div>
        <span class="text-xs text-slate-400">Cliquez sur une carte pour lire sa fiche complète ci-dessous</span>
      </div>

      <!-- Grille Typographique des 24 Métiers (SANS IMAGES) -->
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        ${filtered.map(m => {
          const isSelected = m.id === activeMetier.id;
          const firstSchool = m.ecoles && m.ecoles[0];
          return `
            <div onclick="selectMetierFiche('${m.id}')" class="p-5 rounded-2xl cursor-pointer transition-all flex flex-col justify-between space-y-3 ${isSelected ? 'bg-[#1f242d] border-2 border-[#f8485e]' : 'bg-[#181b21] border border-[#262b35] hover:border-slate-500'}">
              <div class="space-y-2">
                <div class="flex items-center justify-between gap-2">
                  <span class="px-2.5 py-0.5 rounded bg-[#111317] border border-[#262b35] font-mono text-xs font-bold text-white">MÉTIER N°${m.num}</span>
                  <span class="text-xs font-mono text-slate-400">ROME ${m.codeRome}</span>
                </div>
                ${getPoleBadgeHTML(m.pole)}
                <h2 class="text-base font-bold text-white leading-snug pt-0.5">${m.titre}</h2>
                <p class="text-xs text-slate-300 leading-relaxed">${m.accroche}</p>
              </div>
              <div class="pt-3 border-t border-[#262b35] space-y-1.5 text-xs">
                <div class="text-xs font-mono text-amber-300 truncate">Normes : ${m.normes}</div>
                <div class="flex items-center justify-between gap-2">
                  ${firstSchool ? `<a href="${firstSchool.url}" target="_blank" rel="noopener noreferrer" onclick="event.stopPropagation()" class="text-xs font-bold text-emerald-400 hover:underline truncate">${firstSchool.nom} ↗</a>` : ''}
                  <span class="font-bold text-xs ${isSelected ? 'text-[#f8485e]' : 'text-white'} shrink-0">${isSelected ? 'Fiche ouverte' : 'Ouvrir →'}</span>
                </div>
              </div>
            </div>
          `;
        }).join('')}
      </div>

      <!-- Fiche Métier Détaillée (SANS IMAGE, 100% Technique & Écoles Cliquables) -->
      <div id="metier-fiche-detail" class="p-6 lg:p-8 rounded-2xl bg-[#181b21] border-2 border-[#262b35] space-y-6">
        <div class="border-b border-[#262b35] pb-5 space-y-3">
          <div class="flex flex-wrap items-center gap-2">
            <span class="px-3 py-1 rounded-md bg-[#f8485e] text-white font-mono text-xs font-bold">FICHE MÉTIER N°${activeMetier.num} / ${allMetiers.length}</span>
            ${getPoleBadgeHTML(activeMetier.pole)}
            <span class="px-2.5 py-0.5 rounded bg-[#111317] border border-[#262b35] text-slate-300 font-mono text-xs">Code ROME : ${activeMetier.codeRome}</span>
          </div>
          <h2 class="text-2xl lg:text-3xl font-bold text-white">${activeMetier.titre}</h2>
          <p class="text-base text-slate-200 leading-relaxed">${activeMetier.accroche}</p>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-3 pt-1">
            <div class="p-4 rounded-xl bg-[#111317] border border-[#262b35] text-sm">
              <span class="text-xs font-mono uppercase text-slate-400 block mb-1">Diplômes & Certifications officielles</span>
              <strong class="text-white">${activeMetier.diplome}</strong>
            </div>
            <div class="p-4 rounded-xl bg-[#111317] border border-amber-500/30 text-sm">
              <span class="text-xs font-mono uppercase text-amber-300 block mb-1">Normes techniques & industrielles</span>
              <strong class="text-amber-200 font-mono text-xs">${activeMetier.normes}</strong>
            </div>
          </div>
        </div>

        <div class="p-5 rounded-xl bg-[#111317] border border-emerald-500/30 space-y-3">
          <div class="flex flex-wrap items-center justify-between gap-2">
            <h3 class="text-xs font-mono font-bold uppercase text-emerald-400">Écoles Supérieures, CFA RPIP & Sites qui enseignent ce métier (Liens directs)</h3>
            <button onclick="showTab('ecoles')" class="text-xs font-bold text-emerald-300 hover:underline">Voir l'annuaire complet (${schools.length} sites) →</button>
          </div>
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2.5">
            ${(activeMetier.ecoles || []).map(e => formatEcoleLinkHTML(e)).join('')}
          </div>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div class="p-5 rounded-xl bg-[#111317] border border-[#262b35] space-y-3">
            <h3 class="text-xs font-mono font-bold uppercase text-[#f8485e]">1. Missions principales en atelier / studio</h3>
            <ul class="space-y-2.5 text-sm text-slate-200 leading-relaxed">
              ${activeMetier.missions.map((item, i) => `<li class="flex items-start gap-2.5"><span class="w-5 h-5 rounded bg-[#f8485e]/15 text-[#f8485e] font-mono font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">${i + 1}</span><span>${item}</span></li>`).join('')}
            </ul>
          </div>
          <div class="p-5 rounded-xl bg-[#111317] border border-[#262b35] space-y-3">
            <h3 class="text-xs font-mono font-bold uppercase text-sky-400">2. Compétences, Logiciels & Matériel</h3>
            <ul class="space-y-2 text-sm text-slate-200 leading-relaxed">
              ${activeMetier.competences.map(c => `<li class="flex items-start gap-2"><span class="w-2 h-2 rounded-full bg-sky-400 shrink-0 mt-2"></span><span>${c}</span></li>`).join('')}
            </ul>
            <div class="pt-3 border-t border-[#262b35] space-y-1 text-xs text-slate-300">
              <span class="font-mono font-bold uppercase text-slate-400 block">Outils & Machines :</span>
              ${activeMetier.outils.map(o => `<p>• ${o}</p>`).join('')}
            </div>
          </div>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div class="p-4 rounded-xl bg-amber-500/10 border border-amber-500/30 space-y-1">
            <span class="text-xs font-mono font-bold uppercase text-amber-300">Attendus pendant le stage</span>
            <p class="text-sm text-slate-200 leading-relaxed">${activeMetier.attendusStagiaire}</p>
          </div>
          <div class="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/30 space-y-1">
            <span class="text-xs font-mono font-bold uppercase text-emerald-300">Débouchés professionnels & Cours liés (${activeMetier.coursLies.join(', ')})</span>
            <p class="text-sm text-slate-200 leading-relaxed">${activeMetier.debouches}</p>
          </div>
        </div>
      </div>
    </div>
  `;
}

if (typeof window !== 'undefined') {
  Object.assign(window, { renderMetiersView, setMetierPoleFilter, selectMetierFiche, renderDiscoverMetierWidget, discoverNextRandomMetier });
}
