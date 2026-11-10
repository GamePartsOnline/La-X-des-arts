// =====================================================================
// MODULE DE VUES PÉDAGOGIQUES : DÉBUTANT, AVANCÉ & PROFESSEUR
// AFFICHAGE DES SOURCES CITÉES & ÉPURAGE VISUEL SANS BLABLA
// =====================================================================

let currentCoursePersona = localStorage.getItem('croisee_course_persona') || 'debutant';

function setCoursePersona(persona) {
  currentCoursePersona = persona;
  localStorage.setItem('croisee_course_persona', persona);
  if (typeof renderCourses === 'function') {
    renderCourses();
  }
}

function renderCourseSourceCard(course) {
  const isUserPhoto = course.image && course.image.includes('session_sargent_croquis');
  const label = isUserPhoto 
    ? "Photographie & Planche d'Étude Réalisée à l'Atelier"
    : "Planche Pédagogique Officielle de l'École";

  return `
    <div class="p-3 rounded-2xl bg-[#1a1c24] border border-[#2b3553] flex flex-wrap items-center justify-between gap-3 text-xs">
      <div class="flex items-center gap-2.5">
        <span class="px-2 py-0.5 rounded bg-blue-500/15 text-blue-400 font-mono text-[10px] font-bold uppercase tracking-wider">Référence Vérifiée</span>
        <span class="font-bold text-white">${label}</span>
      </div>
      <div class="text-[11px] text-slate-400 font-medium">
        <span>La Croisée des Arts · Atelier d'Apprentissage</span>
      </div>
    </div>
  `;
}

function renderPersonaNavigation() {
  return `
    <div class="p-2 rounded-2xl bg-[#1f2233] border border-[#2b3553] flex flex-wrap items-center justify-between gap-3">
      <div class="flex items-center gap-1.5">
        <span class="text-[10px] font-bold uppercase tracking-wider text-slate-400 px-2.5">Cadrage du cours :</span>
        <button onclick="setCoursePersona('debutant')" class="px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all ${currentCoursePersona === 'debutant' ? 'bg-[#f8485e] text-white shadow-lg shadow-[#f8485e]/25' : 'text-slate-300 hover:text-white hover:bg-[#1c1e26]'}">
          Débutant (L'Essentiel Visuel)
        </button>
        <button onclick="setCoursePersona('avance')" class="px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all ${currentCoursePersona === 'avance' ? 'bg-[#3b82f6] text-white shadow-lg shadow-blue-500/25' : 'text-slate-300 hover:text-white hover:bg-[#1c1e26]'}">
          Niveau Avancé (Atelier & Métriques)
        </button>
        <button onclick="setCoursePersona('professeur')" class="px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all ${currentCoursePersona === 'professeur' ? 'bg-[#10b981] text-white shadow-lg shadow-emerald-500/25' : 'text-slate-300 hover:text-white hover:bg-[#1c1e26]'}">
          Professeur (Référentiel & Barème)
        </button>
      </div>
      <span class="text-[11px] font-mono text-slate-400 px-3 hidden sm:inline">
        ${currentCoursePersona === 'debutant' ? 'Visuel direct sans jargon' : currentCoursePersona === 'avance' ? 'Métriques et tolérances atelier' : 'Cadrage RPIP / DNMADE'}
      </span>
    </div>
  `;
}

function renderDebutantView(course) {
  const errors = course.correction?.student_errors || [];
  const rems = course.correction?.remediations || [];
  return `
    <div class="space-y-5">
      <!-- Règle d'or synthétique (1 phrase percutante) -->
      <div class="p-4 rounded-2xl bg-[#15171c] border border-[#f8485e]/40 flex items-center gap-3">
        <span class="w-2.5 h-2.5 rounded-full bg-[#f8485e] shrink-0 animate-pulse"></span>
        <p class="text-xs sm:text-sm font-semibold text-white leading-relaxed">
          <strong class="text-[#f8485e] uppercase tracking-wider text-[11px] block">Règle d'Or Immédiate :</strong>
          ${course.artist?.quote || course.summary}
        </p>
      </div>

      <!-- Synthèse visuelle comparative : À Faire vs À Éviter -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div class="p-4 rounded-2xl bg-emerald-950/20 border border-emerald-500/30 space-y-2.5">
          <div class="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-emerald-400">
            <svg class="w-4 h-4 text-emerald-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M5 13l4 4L19 7"/></svg>
            <span>Ce qu'il faut faire (Le bon geste)</span>
          </div>
          <ul class="space-y-2 text-xs text-slate-300">
            ${rems.slice(0, 3).map(r => `
              <li class="flex items-start gap-2">
                <span class="text-emerald-400 font-bold">✓</span>
                <span><strong class="text-white">${r.label}</strong> : ${r.detail}</span>
              </li>
            `).join('')}
          </ul>
        </div>

        <div class="p-4 rounded-2xl bg-red-950/20 border border-red-500/30 space-y-2.5">
          <div class="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-red-400">
            <svg class="w-4 h-4 text-red-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M6 18L18 6M6 6l12 12"/></svg>
            <span>Ce qu'il faut éviter (Le piège fréquent)</span>
          </div>
          <ul class="space-y-2 text-xs text-slate-300">
            ${errors.slice(0, 3).map(e => `
              <li class="flex items-start gap-2">
                <span class="text-red-400 font-bold">✕</span>
                <span><strong class="text-white">${e.label}</strong> : ${e.detail}</span>
              </li>
            `).join('')}
          </ul>
        </div>
      </div>

      <!-- Exercice guidé pas-à-pas -->
      <div class="p-4 rounded-2xl bg-[#1f2233] border border-[#2b3553] space-y-2">
        <span class="text-[10px] font-bold px-2 py-0.5 rounded bg-blue-500/20 text-blue-300 uppercase">Exercice Pas-à-Pas Débutant</span>
        <h4 class="font-serif font-bold text-white text-sm">${course.exercise?.title || 'Exercice Pratique'}</h4>
        <p class="text-xs text-slate-300 leading-relaxed">${course.exercise?.instructions || ''}</p>
      </div>
    </div>
  `;
}

function renderAvanceView(course) {
  const isGraph = course.discipline === 'graphisme';
  return `
    <div class="space-y-5">
      <!-- Exigences Métier & Tolérances Chiffrées -->
      <div class="p-5 rounded-2xl bg-[#1f2233] border border-[#2b3553] space-y-3">
        <div class="flex items-center justify-between border-b border-[#2b3553] pb-2">
          <h4 class="font-serif font-bold text-white text-sm">Normes Techniques & Tolérances d'Atelier</h4>
          <span class="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-500/15 text-emerald-400 font-bold">Tolérance Zéro Défaut</span>
        </div>
        <div class="grid grid-cols-2 sm:grid-cols-4 gap-3 text-center">
          <div class="p-3 rounded-xl bg-[#27293d] border border-[#2b3553]/60">
            <p class="text-[10px] text-slate-400 uppercase font-mono">Format / Débord</p>
            <p class="text-sm font-extrabold text-white mt-1">${isGraph ? '3 mm Débord' : 'Échelle 1:1'}</p>
          </div>
          <div class="p-3 rounded-xl bg-[#27293d] border border-[#2b3553]/60">
            <p class="text-[10px] text-slate-400 uppercase font-mono">Résolution / Gamut</p>
            <p class="text-sm font-extrabold text-emerald-400 mt-1">${isGraph ? '300 DPI / FOGRA39' : '5 Valeurs Notan'}</p>
          </div>
          <div class="p-3 rounded-xl bg-[#27293d] border border-[#2b3553]/60">
            <p class="text-[10px] text-slate-400 uppercase font-mono">Sécurité / Marge</p>
            <p class="text-sm font-extrabold text-white mt-1">${isGraph ? '5 mm Zone Sûre' : 'Bords Perdu/Net'}</p>
          </div>
          <div class="p-3 rounded-xl bg-[#27293d] border border-[#2b3553]/60">
            <p class="text-[10px] text-slate-400 uppercase font-mono">Traçabilité / BAT</p>
            <p class="text-sm font-extrabold text-[#f8485e] mt-1">${isGraph ? 'Version V01 / BAT' : 'Planche Scannée'}</p>
          </div>
        </div>
      </div>

      <!-- Risques Industriels & Pertes de Fabrication -->
      <div class="p-4 rounded-2xl bg-amber-950/20 border border-amber-500/30 space-y-2">
        <h5 class="text-xs font-bold uppercase tracking-wider text-amber-300 flex items-center gap-1.5">
          <span class="w-2 h-2 rounded-full bg-amber-400"></span> Risque Atelier & Impact Financier
        </h5>
        <p class="text-xs text-slate-300 leading-relaxed">
          ${isGraph 
            ? 'En imprimerie et fabrication grand format, une erreur de calage CutContour ou un fond perdu absent provoque le massicotage blanc ou le bourrage RIP, entraînant le rejet du tirage complet et la réimpression aux frais de l\'atelier.' 
            : 'Un mélange incontrôlé des valeurs dans l\'ombre détruit la lumière globale et impose de recommencer l\'ébauche complète après séchage de la sous-couche.'}
        </p>
      </div>

      <!-- Exercice Avancé Cadré -->
      <div class="p-4 rounded-2xl bg-[#1f2233] border border-[#2b3553] space-y-2">
        <span class="text-[10px] font-bold px-2 py-0.5 rounded bg-blue-500/15 text-blue-400 uppercase">Consigne Atelier Pro</span>
        <h4 class="font-serif font-bold text-white text-sm">${course.exercise?.title || 'Exercice Pratique'}</h4>
        <p class="text-xs text-slate-300 leading-relaxed">${course.exercise?.instructions || ''}</p>
      </div>
    </div>
  `;
}

function renderProfesseurView(course) {
  const isGraph = course.discipline === 'graphisme';
  const refTitle = isGraph ? 'Bac Pro RPIP (Réalisation de Produits Imprimés et Plurimédia) & DNMADE' : 'Enseignement Classique des Beaux-Arts (Méthodes Bargue & Sargent)';
  return `
    <div class="space-y-5">
      <!-- Cadrage Institutionnel & Compétences -->
      <div class="p-4 rounded-2xl bg-[#1f2233] border border-[#2b3553] space-y-2">
        <div class="flex items-center justify-between">
          <span class="text-[10px] font-bold px-2 py-0.5 rounded bg-purple-500/20 text-purple-300 uppercase">Référentiel Éducation & Métier</span>
          <span class="text-[10px] font-mono text-slate-400">Fiche Pédagogique Formateur</span>
        </div>
        <h4 class="font-serif font-bold text-white text-sm">${refTitle}</h4>
        <p class="text-xs text-slate-300 leading-relaxed">
          Objectif de formation : vérifier l'assimilation des principes de ${course.domain}. Évaluation continue sur devoirs physiques scannés ou fichiers sources normalisés.
        </p>
      </div>

      <!-- Barème Critérié Officiel sur 20 Points -->
      <div class="p-4 rounded-2xl bg-[#27293d] border border-[#2b3553]/60 space-y-3">
        <h5 class="text-xs font-bold text-white uppercase tracking-wider">Barème d'Évaluation sur 20 Points</h5>
        <div class="grid grid-cols-1 sm:grid-cols-4 gap-2 text-xs">
          <div class="p-2.5 rounded-xl bg-[#1f2233] border border-[#2b3553]">
            <span class="text-[#f8485e] font-bold block">1. Respect du Cadrage (5 pts)</span>
            <span class="text-slate-400 text-[11px]">Prise en compte des consignes, proportions et contraintes du sujet.</span>
          </div>
          <div class="p-2.5 rounded-xl bg-[#1f2233] border border-[#2b3553]">
            <span class="text-emerald-400 font-bold block">2. Maîtrise Technique (5 pts)</span>
            <span class="text-slate-400 text-[11px]">Précision du trait, gestion des ancrages ou décomposition des valeurs.</span>
          </div>
          <div class="p-2.5 rounded-xl bg-[#1f2233] border border-[#2b3553]">
            <span class="text-purple-400 font-bold block">3. Finition & Propreté (5 pts)</span>
            <span class="text-slate-400 text-[11px]">Clarté des contrastes, absence d'éléments parasites ou bavures.</span>
          </div>
          <div class="p-2.5 rounded-xl bg-[#1f2233] border border-[#2b3553]">
            <span class="text-amber-400 font-bold block">4. Autonomie & Rigueur (5 pts)</span>
            <span class="text-slate-400 text-[11px]">Dépôt conforme du devoir, nommage normé et respect du délai.</span>
          </div>
        </div>
      </div>
    </div>
  `;
}

function renderCourseDetailContent(course) {
  if (currentCoursePersona === 'avance') {
    return renderAvanceView(course);
  } else if (currentCoursePersona === 'professeur') {
    return renderProfesseurView(course);
  }
  return renderDebutantView(course);
}
