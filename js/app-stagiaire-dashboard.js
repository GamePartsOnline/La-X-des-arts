// =====================================================================
// ESPACE STAGIAIRE DÉDIÉ : SUIVI OFFICIEL 4 SEMAINES (J01 À J20) GPO SARL,
// BROCHURE STAGIAIRE & LIENS UTILES, COURS AUTORISÉS & CAHIERS D'EXERCICES
// =====================================================================

let currentSelectedStageWeek = 1;

function selectStageProgramWeek(weekNum) {
  currentSelectedStageWeek = Number(weekNum) || 1;
  renderStagiaireDashboard();
}

function stagiaireSubmitLesson(lessonId) {
  const lessons = getStageLessons();
  const lesson = lessons.find(l => l.id === lessonId);
  if (!lesson) return;
  lesson.status = 'en_attente';
  saveStageLessons(lessons);
  if (typeof showCustomToast === 'function') {
    showCustomToast('Exercice soumis', `${lesson.num} transmis au maître de stage pour validation Acquis / Non acquis.`, 'info');
  }
  renderStagiaireDashboard();
}

function getCourseAccessLabel(access) {
  if (access === 'complet') return 'Programme Complet (Dessin S1 + Graphisme S2-S4)';
  if (access === 'graphisme') return 'Pôle Graphisme, PAO & Prépresse (Semaines 2 à 4)';
  if (access === 'aucun') return 'En attente d\'ouverture des cours par l\'Administrateur';
  return 'Pôle Dessin & Observation (Semaine 1)';
}

function renderStagiaireDashboard() {
  const container = document.getElementById('stagiaire-dashboard-container');
  if (!container) return;

  const meta = typeof getProfileMeta === 'function' ? getProfileMeta('stagiaire') : STAGIAIRE_PROFILE;
  const lessons = typeof getStageLessons === 'function' ? getStageLessons() : [];
  const validees = lessons.filter(l => l.status === 'validee').length;
  const access = typeof getActiveCourseAccess === 'function' ? getActiveCourseAccess() : 'dessin';
  const allowedCourses = typeof getAuthorizedCoursesForUser === 'function' ? getAuthorizedCoursesForUser() : [];
  const weeks = window.STAGE_4_WEEKS_PROGRAM || [];
  const activeWeek = weeks.find(w => w.semaine === currentSelectedStageWeek) || weeks[0];
  const brochure = window.STAGE_BROCHURE_LINKS || {};

  container.innerHTML = `
    <div class="space-y-6">
      <!-- 1. En-tête de l'Espace Stagiaire -->
      <div class="p-6 rounded-2xl bg-[#181b21] border border-[#262b35] flex flex-wrap items-center justify-between gap-4">
        <div class="space-y-1.5">
          <div class="flex flex-wrap items-center gap-2 text-xs">
            <span class="px-2.5 py-1 rounded-md bg-amber-500/15 text-amber-300 border border-amber-500/30 font-semibold">Rôle : Stagiaire Graphiste (4 semaines · 20 jours)</span>
            <span class="px-2.5 py-1 rounded-md bg-[#111317] text-slate-200 border border-[#262b35]">Entreprise : <strong>GPO SARL (Givry-en-Argonne)</strong></span>
            <span class="px-2.5 py-1 rounded-md bg-[#111317] text-emerald-300 border border-[#262b35]">Accès cours : <strong>${getCourseAccessLabel(access)}</strong></span>
          </div>
          <h1 class="text-2xl font-bold text-white pt-1">Mon Suivi de Stage · ${STAGIAIRE_PROFILE.nom || meta.nom}</h1>
          <p class="text-sm text-slate-300">Programme officiel des 4 semaines (J01 à J20), brochure du rapport de stage GPO, cours ouverts et validation des exercices (Acquis / Non acquis).</p>
        </div>

        <div class="flex items-center gap-3">
          <div class="px-4 py-3 rounded-xl bg-[#111317] border border-[#262b35] text-center">
            <span class="text-xs text-slate-400 block">Jalons Acquis</span>
            <strong class="text-xl font-bold text-emerald-400">${validees} / ${lessons.length}</strong>
          </div>
          <button onclick="showTab('cours')" class="px-4 py-3 rounded-xl bg-[#f8485e] hover:bg-[#e0374c] text-white text-sm font-bold transition-all">
            Ouvrir mes cours (${allowedCourses.length}) →
          </button>
        </div>
      </div>

      <!-- 2. Programme Officiel du Stage Graphiste 4 Semaines (J01 à J20) -->
      ${activeWeek ? `
        <section class="p-6 rounded-2xl bg-[#181b21] border border-[#262b35] space-y-5">
          <div class="flex flex-col lg:flex-row lg:items-center justify-between gap-4 border-b border-[#262b35] pb-4">
            <div>
              <span class="text-xs font-mono uppercase text-[#f8485e] font-bold">Programme Général Officiel · GPO SARL (20 Jours)</span>
              <h2 class="text-xl font-bold text-white mt-0.5">Feuille de Route des 4 Semaines de Stage (J01 à J20)</h2>
            </div>
            <div class="flex flex-wrap items-center gap-1.5 bg-[#111317] p-1.5 rounded-xl border border-[#262b35]">
              ${weeks.map(w => `
                <button type="button" onclick="selectStageProgramWeek(${w.semaine})" class="px-3 py-2 rounded-lg text-xs font-bold transition-all ${w.semaine === activeWeek.semaine ? 'bg-[#f8485e] text-white' : 'text-slate-300 hover:text-white'}">
                  Semaine ${w.semaine}
                </button>
              `).join('')}
            </div>
          </div>

          <div class="p-4 rounded-xl bg-[#111317] border border-[#262b35] space-y-1">
            <div class="flex flex-wrap items-center justify-between gap-2">
              <span class="text-xs font-mono font-bold text-emerald-400">${activeWeek.code}</span>
              ${activeWeek.semaine === 3 ? `<span class="px-2.5 py-0.5 rounded bg-amber-500/20 text-amber-300 text-xs font-bold">Projet Phare : Planche de Stickers Foire de Châlons 2027 (Prix public : 10 €)</span>` : ''}
            </div>
            <h3 class="text-base font-bold text-white">${activeWeek.titre}</h3>
            <p class="text-xs text-slate-300 leading-relaxed">${activeWeek.objectif}</p>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-5 gap-3">
            ${activeWeek.jours.map(j => `
              <div class="p-4 rounded-xl bg-[#111317] border border-[#262b35] flex flex-col justify-between space-y-2">
                <div class="space-y-1.5">
                  <span class="px-2 py-0.5 rounded bg-[#f8485e]/15 text-[#f8485e] font-mono text-xs font-bold inline-block">${j.jour}</span>
                  <h4 class="text-xs font-bold text-white leading-snug">${j.titre}</h4>
                  <p class="text-[11px] text-slate-300 leading-relaxed">${j.detail}</p>
                </div>
              </div>
            `).join('')}
          </div>
        </section>
      ` : ''}

      <!-- 3. Brochure du Stagiaire : Rapport de Stage GPO, Rangement 6 Dossiers & Liens Utiles -->
      <section class="grid grid-cols-1 lg:grid-cols-12 gap-4">
        <div class="lg:col-span-5 p-5 rounded-2xl bg-[#181b21] border border-[#262b35] space-y-3">
          <span class="text-xs font-mono font-bold uppercase text-amber-300 block">Trame dès le Jour 1 · Dossier RAPPORT DE STAGE GPO</span>
          <h3 class="text-base font-bold text-white">Structure Officielle du Rapport (10 Parties)</h3>
          <p class="text-xs text-slate-300 leading-relaxed">${brochure.filRouge || ''}</p>
          <ul class="grid grid-cols-1 sm:grid-cols-2 gap-1.5 text-xs text-slate-200 pt-1">
            ${(brochure.trameRapport10 || []).map(item => `<li class="p-2 rounded-lg bg-[#111317] border border-[#262b35]">${item}</li>`).join('')}
          </ul>
        </div>

        <div class="lg:col-span-4 p-5 rounded-2xl bg-[#181b21] border border-[#262b35] space-y-3">
          <span class="text-xs font-mono font-bold uppercase text-sky-400 block">Organisation Quotidienne & Fichiers</span>
          <h3 class="text-base font-bold text-white">Les 6 Dossiers Client & Versions</h3>
          <p class="text-xs text-slate-300 leading-relaxed">${brochure.regleOr || ''}</p>
          <div class="space-y-2 pt-1">
            <div>
              <span class="text-[11px] font-mono text-slate-400 block mb-1">Arborescence obligatoire d'un projet :</span>
              <div class="flex flex-wrap gap-1.5">
                ${(brochure.dossiers6 || []).map(d => `<span class="px-2 py-1 rounded bg-[#111317] border border-[#262b35] font-mono text-xs text-emerald-300">${d}</span>`).join('')}
              </div>
            </div>
            <div>
              <span class="text-[11px] font-mono text-slate-400 block mb-1">Progression des versions de fichiers :</span>
              <div class="flex flex-wrap gap-1.5">
                ${(brochure.versions6 || []).map(v => `<span class="px-2 py-1 rounded bg-[#111317] border border-[#262b35] font-mono text-xs text-amber-300">${v}</span>`).join('')}
              </div>
            </div>
          </div>
        </div>

        <div class="lg:col-span-3 p-5 rounded-2xl bg-[#181b21] border border-[#262b35] flex flex-col justify-between space-y-3">
          <div class="space-y-2">
            <span class="text-xs font-mono font-bold uppercase text-emerald-400 block">Brochure & Liens Utiles</span>
            <h3 class="text-base font-bold text-white">Ressources d'Orientation & Veille</h3>
            <p class="text-xs text-slate-300 leading-relaxed">Utilisez ces ressources vérifiées pour compléter le Cahier 09 (Découverte des métiers) et votre veille quotidienne :</p>
          </div>
          <div class="space-y-2">
            <button onclick="showTab('metiers')" class="w-full p-2.5 rounded-xl bg-[#111317] hover:bg-[#262b35] border border-[#262b35] text-left text-xs font-bold text-white flex items-center justify-between"><span>24 Fiches Métiers (Cahier 09)</span><span>→</span></button>
            <button onclick="showTab('ecoles')" class="w-full p-2.5 rounded-xl bg-[#111317] hover:bg-[#262b35] border border-[#262b35] text-left text-xs font-bold text-emerald-300 flex items-center justify-between"><span>26 Écoles, Prix & Tarifs</span><span>→</span></button>
            <button onclick="showTab('veille')" class="w-full p-2.5 rounded-xl bg-[#111317] hover:bg-[#262b35] border border-[#262b35] text-left text-xs font-bold text-amber-300 flex items-center justify-between"><span>Flux ACTU & NEWS</span><span>→</span></button>
            <button onclick="showTab('jobs')" class="w-full p-2.5 rounded-xl bg-[#111317] hover:bg-[#262b35] border border-[#262b35] text-left text-xs font-bold text-sky-300 flex items-center justify-between"><span>Offres JOBS & STAGES</span><span>→</span></button>
          </div>
        </div>
      </section>

      <!-- 4. Accès rapide aux cours autorisés pour ce profil -->
      <section class="p-6 rounded-2xl bg-[#181b21] border border-[#262b35] space-y-4">
        <div class="flex flex-wrap items-center justify-between gap-2 border-b border-[#262b35] pb-3">
          <div>
            <h2 class="text-lg font-bold text-white">Mes Cours Techniques Ouverts (${allowedCourses.length} cours disponibles)</h2>
            <p class="text-xs text-slate-400">Cliquez sur un cours pour étudier la planche et remettre votre fichier d'exercice.</p>
          </div>
        </div>
        ${allowedCourses.length === 0 ? `
          <p class="text-sm text-amber-300 py-4">Aucun cours n'est encore activé sur votre profil. L'Administrateur doit valider votre accès aux cours.</p>
        ` : `
          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            ${allowedCourses.map(c => `
              <button type="button" onclick="showTab('cours'); selectCourse('${c.id}');" class="p-4 rounded-xl bg-[#111317] hover:bg-[#1f242d] border border-[#262b35] hover:border-[#f8485e] text-left transition-all flex flex-col justify-between gap-2">
                <div>
                  <span class="text-xs font-mono font-bold ${c.discipline === 'dessin' ? 'text-[#f8485e]' : 'text-sky-400'}">${c.blocLabel.split('·')[0].trim()}</span>
                  <h3 class="text-sm font-bold text-white mt-0.5">${c.title}</h3>
                </div>
                <span class="text-xs text-slate-400 flex items-center justify-between pt-2 border-t border-[#262b35] w-full">
                  <span>Durée : ${c.duration}</span>
                  <span class="text-white font-semibold">Étudier →</span>
                </span>
              </button>
            `).join('')}
          </div>
        `}
      </section>

      <!-- 5. Cahiers d'Exercices 07, 08, 09, 10 (1 seul validé L-01 d'exemple) -->
      <section class="space-y-4">
        <div class="flex flex-wrap items-center justify-between gap-2">
          <h2 class="text-lg font-bold text-white">Cahiers d'Exercices du Stage (Évaluation Acquis / Non acquis)</h2>
          <span class="text-xs text-slate-400">Aucun exercice validé à l’arrivée. Chaque validation est attribuée par le tuteur.</span>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          ${lessons.map(lesson => {
            const isVal = lesson.status === 'validee';
            const isAtt = lesson.status === 'en_attente';
            const canAccessS2 = access === 'complet' || access === 'graphisme' || (typeof getGraphismeUnlockedState === 'function' && getGraphismeUnlockedState());
            const isLocked = lesson.semaine === 2 && !canAccessS2;

            return `
              <div class="p-5 rounded-2xl bg-[#181b21] border ${isVal ? 'border-emerald-500/40' : isAtt ? 'border-amber-500/40' : 'border-[#262b35]'} flex flex-col justify-between gap-4">
                <div class="space-y-2.5">
                  <div class="flex items-center justify-between gap-2">
                    <span class="text-xs font-mono font-bold px-2.5 py-0.5 rounded bg-[#111317] border border-[#262b35] text-white">${lesson.num} · Pôle ${lesson.semaine === 1 ? 'Dessin S1' : 'Graphisme S2-S4'}</span>
                    ${isVal
                      ? `<span class="px-2.5 py-0.5 rounded-md bg-emerald-500/20 text-emerald-300 text-xs font-bold">Acquis</span>`
                      : isAtt
                      ? `<span class="px-2.5 py-0.5 rounded-md bg-amber-500/20 text-amber-300 text-xs font-bold">Transmis au Tuteur</span>`
                      : isLocked
                      ? `<span class="px-2.5 py-0.5 rounded-md bg-slate-800 text-slate-400 text-xs font-semibold">Semaine 2 verrouillée</span>`
                      : `<span class="px-2.5 py-0.5 rounded-md bg-[#111317] text-slate-300 text-xs">À réaliser</span>`
                    }
                  </div>
                  <h3 class="text-base font-bold text-white">${lesson.titre}</h3>
                  <p class="text-sm text-slate-300 leading-relaxed">${lesson.consigne}</p>
                  ${lesson.commentAdmin ? `<p class="p-3 rounded-xl bg-[#111317] border border-[#262b35] text-xs text-slate-200"><strong>Observation du Tuteur :</strong> ${lesson.commentAdmin}</p>` : ''}
                </div>
                <div class="pt-3 border-t border-[#262b35] flex items-center justify-between gap-2">
                  <span class="text-xs text-slate-400">${lesson.support}</span>
                  ${!isVal && !isLocked && !isAtt ? `
                    <button onclick="stagiaireSubmitLesson('${lesson.id}')" class="px-3.5 py-2 rounded-xl bg-[#f8485e] hover:bg-[#e0374c] text-white text-xs font-bold">
                      Transmettre au Tuteur →
                    </button>
                  ` : ''}
                </div>
              </div>
            `;
          }).join('')}
        </div>
      </section>
    </div>
  `;
}

if (typeof window !== 'undefined') {
  Object.assign(window, { renderStagiaireDashboard, selectStageProgramWeek, stagiaireSubmitLesson, getCourseAccessLabel });
}
