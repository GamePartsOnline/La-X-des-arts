// =====================================================================
// INTERFACE PÉDAGOGIQUE DES TECHNIQUES DU DESSIN D'ATELIER
// CHARTE VISUELLE INSPIRÉE DE SCHDESIGN.HU (ACCENT #f8485e & MINIMALISME)
// =====================================================================

let activeTechniqueId = 'panorama';

function selectTechniqueTab(techId) {
  activeTechniqueId = techId;
  renderTechniquesView();
}

function renderTechniquesView() {
  const container = document.getElementById('techniques-workspace-container');
  if (!container) return;

  const data = getTechniquesData();
  const isPanorama = activeTechniqueId === 'panorama';
  const currentChapter = isPanorama ? null : data.chapitres.find(c => c.id === activeTechniqueId || c.slug === activeTechniqueId) || data.chapitres[0];

  container.innerHTML = `
    <div class="space-y-6">
      <!-- En-tête Général Style schdesign.hu (Montserrat & Accent #f8485e) -->
      <div class="p-6 rounded-3xl bg-[#181a20] border border-[#272b35] shadow-xl flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div>
          <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#f8485e]/15 border border-[#f8485e]/30 text-[#f8485e] text-[10px] font-mono font-bold uppercase tracking-wider">
            <span class="w-2 h-2 rounded-full bg-[#f8485e] animate-ping"></span>
            Médiums & Savoir-Faire Traditionnel
          </div>
          <h2 class="font-sans text-2xl lg:text-3xl font-black text-white mt-1.5 tracking-tight">
            Techniques du Dessin & Pratique d'Atelier
          </h2>
          <p class="text-xs text-slate-300 max-w-2xl mt-1 leading-relaxed">
            Cours complet sur les liants, pigments et supports, suivi d'un chapitre pratique pour chaque technique majeure.
          </p>
        </div>

        <div class="flex items-center gap-2">
          <span class="text-xs font-mono px-3 py-1.5 rounded-xl bg-[#111216] border border-[#272b35] text-slate-300">
            6 Médiums Fondamentaux
          </span>
        </div>
      </div>

      <!-- Barre de Sélection des Chapitres (Charte schdesign pills) -->
      <div class="p-2 rounded-2xl bg-[#181a20] border border-[#272b35] flex flex-wrap items-center gap-2">
        <button onclick="selectTechniqueTab('panorama')" class="px-4 py-2 rounded-xl text-xs font-bold transition-all ${isPanorama ? 'bg-[#f8485e] text-white shadow-lg shadow-[#f8485e]/25' : 'text-slate-300 hover:text-white hover:bg-[#20242c]'}">
          Cours Cadre Panorama
        </button>

        ${data.chapitres.map(chap => {
          const isActive = !isPanorama && currentChapter && currentChapter.id === chap.id;
          return `
            <button onclick="selectTechniqueTab('${chap.id}')" class="px-3.5 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 ${isActive ? 'bg-[#f8485e] text-white shadow-lg shadow-[#f8485e]/25' : 'text-slate-300 hover:text-white hover:bg-[#20242c]'}">
              <span>${chap.nom}</span>
            </button>
          `;
        }).join('')}
      </div>

      <!-- Contenu Principal : Soit Panorama Global, Soit Chapitre Dédié -->
      ${isPanorama ? renderPanoramaContent(data.panorama) : renderChapterContent(currentChapter)}
    </div>
  `;
}

function renderPanoramaContent(panorama) {
  return `
    <div class="space-y-6">
      <!-- Grande Planche d'Atelier -->
      <div class="rounded-3xl overflow-hidden border border-[#272b35] bg-black shadow-2xl relative group">
        <img src="${panorama.image}" alt="${panorama.titre}" class="w-full max-h-[460px] object-contain mx-auto" />
        <div class="absolute bottom-4 left-4 right-4 p-4 rounded-2xl bg-black/80 backdrop-blur-md border border-white/10 flex flex-wrap items-center justify-between gap-3">
          <div>
            <span class="text-[10px] uppercase font-mono font-bold text-[#f8485e]">Document d'Atelier · La Croisée des Arts</span>
            <h3 class="font-sans font-black text-white text-base">${panorama.titre}</h3>
          </div>
          <button onclick="openImageModal('${panorama.image}')" class="px-3 py-1.5 rounded-xl bg-[#20242c] hover:bg-[#272b35] text-xs font-bold text-white transition-all">
            Agrandir Plein Écran
          </button>
        </div>
      </div>

      <!-- Règle d'or en exergue style schdesign -->
      <div class="p-4 rounded-2xl bg-[#181a20] border-l-4 border-[#f8485e] flex items-center gap-3">
        <span class="w-2.5 h-2.5 rounded-full bg-[#f8485e] shrink-0"></span>
        <p class="text-xs sm:text-sm font-semibold text-white leading-relaxed">
          <strong class="text-[#f8485e] uppercase tracking-wider text-[11px] block">Règle de Superposition Universelle :</strong>
          ${panorama.regleOr}
        </p>
      </div>

      <!-- Les 4 Piliers Techniques -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        ${panorama.piliers.map(p => `
          <div class="p-5 rounded-2xl bg-[#181a20] border border-[#272b35] space-y-2">
            <h4 class="font-sans font-bold text-sm text-white flex items-center gap-2">
              <span class="w-2 h-2 rounded-full bg-[#f8485e]"></span>
              <span>${p.titre}</span>
            </h4>
            <p class="text-xs text-slate-300 leading-relaxed">${p.desc}</p>
          </div>
        `).join('')}
      </div>

      <!-- Grille des 6 Chapitres pour Accès Direct -->
      <div class="p-6 rounded-3xl bg-[#181a20] border border-[#272b35] space-y-4">
        <h4 class="font-sans font-bold text-base text-white">Accéder à un Chapitre Technique Spécifique :</h4>
        <div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
          ${getTechniquesData().chapitres.map(c => `
            <button onclick="selectTechniqueTab('${c.id}')" class="p-3.5 rounded-2xl bg-[#111216] border border-[#272b35] hover:border-[#f8485e] text-center space-y-2 transition-all group">
              <img src="${c.image}" alt="${c.nom}" class="w-full h-20 object-cover rounded-xl" />
              <p class="text-xs font-bold text-white group-hover:text-[#f8485e] transition-colors truncate">${c.nom}</p>
              <span class="text-[10px] text-slate-400 block">${c.num}</span>
            </button>
          `).join('')}
        </div>
      </div>
    </div>
  `;
}

function renderChapterContent(chapter) {
  if (!chapter) return '';

  return `
    <div class="space-y-6">
      <!-- En-tête du Chapitre -->
      <div class="p-6 rounded-3xl bg-[#181a20] border border-[#272b35] flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div>
          <span class="px-2.5 py-0.5 rounded-full bg-[#f8485e]/20 text-[#f8485e] font-mono text-[10px] font-bold uppercase">
            ${chapter.num} · ${chapter.famille}
          </span>
          <h3 class="font-sans text-2xl font-black text-white mt-1">${chapter.nom}</h3>
          <p class="text-xs text-slate-300 mt-1"><strong>Matériel recommandé :</strong> ${chapter.materiel}</p>
        </div>

        <button onclick="openImageModal('${chapter.image}')" class="px-4 py-2 rounded-xl bg-[#20242c] hover:bg-[#272b35] text-xs font-bold text-white transition-all shrink-0">
          Voir la Planche HD
        </button>
      </div>

      <!-- Visuel du Chapitre & Points Clés -->
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        <div class="lg:col-span-5 rounded-3xl overflow-hidden border border-[#272b35] bg-black max-h-[420px] group cursor-pointer" onclick="openImageModal('${chapter.image}')">
          <img src="${chapter.image}" alt="${chapter.nom}" class="w-full h-[420px] object-cover group-hover:scale-105 transition-transform duration-500" />
        </div>

        <div class="lg:col-span-7 space-y-4">
          <!-- Les 3 Points Clés -->
          <div class="p-5 rounded-2xl bg-[#181a20] border border-[#272b35] space-y-3">
            <h4 class="font-sans font-bold text-sm text-white uppercase tracking-wider flex items-center gap-2">
              <span class="w-2 h-2 rounded-full bg-[#f8485e]"></span>
              Fondements Techniques & Gestuelle
            </h4>
            <div class="space-y-3">
              ${chapter.pointsCles.map(pt => `
                <div class="text-xs">
                  <strong class="text-white block mb-0.5">${pt.label} :</strong>
                  <span class="text-slate-300 leading-relaxed">${pt.detail}</span>
                </div>
              `).join('')}
            </div>
          </div>

          <!-- Exercice d'Atelier -->
          <div class="p-5 rounded-2xl bg-emerald-950/20 border border-emerald-500/30 space-y-2">
            <h5 class="text-xs font-bold uppercase text-emerald-400 flex items-center gap-2">
              <span>✓</span> Exercice Pratique d'Atelier
            </h5>
            <p class="text-xs text-slate-200 leading-relaxed">${chapter.exercice}</p>
          </div>

          <!-- Piège à éviter -->
          <div class="p-4 rounded-2xl bg-rose-950/20 border border-rose-500/30 space-y-1.5">
            <h5 class="text-xs font-bold uppercase text-rose-400 flex items-center gap-2">
              <span>✕</span> Le Piège Fréquent à Éviter
            </h5>
            <p class="text-xs text-slate-300 leading-relaxed">${chapter.piege}</p>
          </div>
        </div>
      </div>
    </div>
  `;
}

if (typeof window !== 'undefined') {
  window.selectTechniqueTab = selectTechniqueTab;
  window.renderTechniquesView = renderTechniquesView;
}
