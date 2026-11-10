// =====================================================================
// ESPACE STAGIAIRE - PARCOURS D'IMMERSION & PROGRESSION
// CONSULTATION DES LEÇONS & SOUMISSION POUR VALIDATION TUTEUR
// =====================================================================

function stagiaireSubmitLesson(lessonId) {
  const lessons = getStageLessons();
  const lesson = lessons.find(l => l.id === lessonId);
  if (!lesson) return;

  lesson.status = 'en_attente';
  saveStageLessons(lessons);

  if (typeof playChime === 'function') playChime(440, 0.2);
  if (typeof showCustomToast === 'function') {
    showCustomToast("Exercice Soumis", `${lesson.num} déposé. En attente de validation par votre maître de stage.`, "info");
  }

  renderStagiaireDashboard();
  if (typeof renderAdminDashboard === 'function') renderAdminDashboard();
}

function renderStagiaireDashboard() {
  const container = document.getElementById('stagiaire-dashboard-container');
  if (!container) return;

  const lessons = getStageLessons();
  const validees = lessons.filter(l => l.status === 'validee').length;
  const isS2Unlocked = typeof getGraphismeUnlockedState === 'function' ? getGraphismeUnlockedState() : false;

  container.innerHTML = `
    <div class="space-y-6">
      <div class="p-6 rounded-3xl bg-gradient-to-r from-[#201828] via-[#1a1c24] to-[#161c22] border border-amber-500/40 shadow-xl flex flex-wrap items-center justify-between gap-4">
        <div class="flex items-center gap-4">
          <img src="assets/etudiant_portrait_lea.jpg" alt="Sarah Martin" class="w-16 h-16 rounded-2xl border-2 border-amber-400 object-cover shadow-lg" />
          <div>
            <div class="flex items-center gap-2">
              <span class="px-2.5 py-0.5 rounded-full bg-amber-500/20 text-amber-300 font-mono text-[10px] font-bold uppercase">Stagiaire Débutante</span>
              <span class="px-2.5 py-0.5 rounded-full bg-[#f8485e]/15 text-[#f8485e] font-mono text-[10px] font-bold">Semaine 1 : Dessin Réel</span>
            </div>
            <h2 class="font-serif text-2xl font-black text-white mt-1">Mon Espace de Stage · Sarah Martin</h2>
            <p class="text-xs text-slate-300">Réalisez les exercices sur papier réel. Dès qu'une planche est finie, soumettez-la pour validation par votre maître de stage.</p>
          </div>
        </div>

        <div class="p-3.5 rounded-2xl bg-[#131417] border border-[#23262f] text-center min-w-[140px]">
          <span class="text-[10px] font-mono text-slate-400 uppercase">Leçons Validées</span>
          <p class="text-2xl font-black text-emerald-400 mt-0.5">${validees} / ${lessons.length}</p>
        </div>
      </div>

      <div class="space-y-4">
        <h3 class="font-serif font-bold text-lg text-white">Mes Leçons de Dessin & Progression</h3>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          ${lessons.map(lesson => {
            const isVal = lesson.status === 'validee';
            const isAtt = lesson.status === 'en_attente';
            const isLocked = lesson.semaine === 2 && !isS2Unlocked;

            return `
              <div class="p-5 rounded-2xl bg-[#1b1e24] border ${isVal ? 'border-emerald-500/40' : isAtt ? 'border-amber-500/40' : 'border-[#272b35]'} shadow-lg flex flex-col justify-between space-y-4">
                <div class="space-y-2">
                  <div class="flex items-center justify-between">
                    <span class="text-xs font-mono font-bold px-2 py-0.5 rounded ${lesson.semaine === 1 ? 'bg-[#f8485e]/15 text-[#f8485e]' : 'bg-blue-500/15 text-blue-400'}">
                      ${lesson.num} · Semaine ${lesson.semaine}
                    </span>
                    ${isVal
                      ? `<span class="px-2.5 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 font-mono text-[10px] font-bold">Validé par le Tuteur ✓</span>`
                      : isAtt
                      ? `<span class="px-2.5 py-0.5 rounded-full bg-amber-500/20 text-amber-300 font-mono text-[10px] font-bold">En cours d'évaluation...</span>`
                      : isLocked
                      ? `<span class="px-2.5 py-0.5 rounded-full bg-rose-500/20 text-rose-300 font-mono text-[10px] font-bold">Verrouillé Semaine 2</span>`
                      : `<span class="px-2.5 py-0.5 rounded-full bg-slate-800 text-slate-400 font-mono text-[10px] font-bold">À réaliser</span>`
                    }
                  </div>

                  <h4 class="font-serif font-bold text-white text-base">${lesson.titre}</h4>
                  
                  <div class="rounded-xl overflow-hidden border border-[#272b35] bg-black max-h-40 group cursor-pointer" onclick="if (typeof openImageModal === 'function') openImageModal('${lesson.image}')">
                    <img src="${lesson.image}" alt="${lesson.titre}" class="w-full h-40 object-cover group-hover:scale-105 transition-transform duration-300" />
                  </div>

                  <p class="text-xs text-slate-300 leading-relaxed pt-1">${lesson.consigne}</p>

                  ${lesson.commentAdmin && isVal ? `
                    <div class="p-2.5 rounded-xl bg-emerald-950/20 border border-emerald-500/30 text-xs text-emerald-300">
                      <strong>Avis Tuteur :</strong> ${lesson.commentAdmin} (${lesson.note})
                    </div>
                  ` : ''}
                </div>

                <div class="pt-2 border-t border-[#272b35] flex items-center justify-between">
                  <span class="text-[11px] text-slate-400 font-mono">${lesson.support}</span>
                  ${!isVal && !isLocked && !isAtt ? `
                    <button onclick="stagiaireSubmitLesson('${lesson.id}')" class="px-3.5 py-1.5 rounded-xl btn-schdesign text-xs font-bold transition-all shadow-md">
                      Soumettre au Tuteur →
                    </button>
                  ` : ''}
                </div>
              </div>
            `;
          }).join('')}
        </div>
      </div>
    </div>
  `;
}

if (typeof window !== 'undefined') {
  window.renderStagiaireDashboard = renderStagiaireDashboard;
  window.stagiaireSubmitLesson = stagiaireSubmitLesson;
}
