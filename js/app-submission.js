let pendingCourseUploads = {};
function cancelCoursePendingUpload(id) { delete pendingCourseUploads[id]; renderCourses(); }

function renderCourseExerciseBlock(course) {
  const submission = getCourseSubmission(course.id);
  const pending = pendingCourseUploads[course.id];

  if (submission) {
    return `
      <!-- Statut de Travail Soumis et Évalué -->
      <div class="p-6 rounded-2xl bg-gradient-to-br from-emerald-950/40 via-[#131417] to-[#1b1e24] border border-emerald-500/40 space-y-4">
        <div class="flex flex-wrap items-center justify-between gap-3 pb-3 border-b border-emerald-500/20">
          <div class="flex items-center gap-2.5">
            <span class="w-3 h-3 rounded-full bg-emerald-400 animate-pulse"></span>
            <div>
              <span class="text-[10px] font-bold uppercase tracking-wider text-emerald-400">TRAVAIL TRANSMIS AU TUTEUR</span>
              <h4 class="text-sm font-bold text-white mt-0.5">${course.exercise.title}</h4>
            </div>
          </div>
          <span class="text-xs font-bold px-3 py-1.5 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/40">
            Note Pédagogique : ${submission.grade || 'En attente'}
          </span>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-12 gap-4 items-center">
          ${submission.dataUrl ? `
            <div class="md:col-span-3 rounded-xl overflow-hidden border border-[#272b35] bg-black cursor-pointer group" onclick="openImageModal('${submission.dataUrl}')">
              <img src="${submission.dataUrl}" alt="Aperçu du travail élève" class="w-full h-28 object-cover group-hover:scale-105 transition-transform" />
            </div>
          ` : `
            <div class="md:col-span-3 p-4 rounded-xl bg-[#1b1e24] border border-[#272b35] flex flex-col items-center justify-center text-center">
              <svg class="w-8 h-8 text-[#d6a55b] mb-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/></svg>
              <span class="text-[10px] text-slate-300 font-mono truncate max-w-full">${submission.fileName}</span>
              <span class="text-[9px] text-slate-500">${submission.fileSize}</span>
            </div>
          `}
          
          <div class="md:col-span-9 space-y-2">
            <div class="flex flex-wrap items-center gap-3 text-xs text-slate-300">
              <span class="font-semibold text-white">Fichier déposé :</span>
              <span class="font-mono text-emerald-400 bg-emerald-950/40 px-2 py-0.5 rounded border border-emerald-500/30">${submission.fileName}</span>
              <span class="text-slate-500">|</span>
              <span class="text-slate-400">Transmis le ${submission.submittedAt}</span>
            </div>

            ${submission.studentNotes ? `
              <p class="text-xs text-slate-300 italic bg-[#131417] p-2.5 rounded-lg border border-[#272b35]">
                <strong class="not-italic text-slate-400">Note de l'élève :</strong> "${submission.studentNotes}"
              </p>
            ` : ''}

            <p class="text-xs text-emerald-300/90 leading-relaxed">
              ${submission.feedback || (submission.status === 'en_attente' ? 'Votre travail attend la correction du tuteur.' : 'Correction enregistrée par le tuteur.')}
            </p>

            <div class="pt-1 flex items-center gap-3">
              <button onclick="resetCourseFileUpload('${course.id}')" class="px-3 py-1.5 rounded-lg bg-[#272b35] hover:bg-slate-700 text-slate-300 text-xs font-semibold transition-all">
                Remplacer ce fichier / Déposer une nouvelle version
              </button>
            </div>
          </div>
        </div>
      </div>
    `;
  }

  if (pending) {
    return `
      <!-- Fichier sélectionné en attente de validation -->
      <div class="p-6 rounded-2xl bg-[#1b1e24] border border-[#d6a55b]/40 space-y-4">
        <div class="flex items-center justify-between pb-3 border-b border-[#272b35]">
          <div>
            <span class="text-[10px] font-bold uppercase tracking-wider text-[#d6a55b]">FICHIER PRÊT À TRANSMETTRE</span>
            <h4 class="text-sm font-bold text-white mt-0.5">${course.exercise.title}</h4>
          </div>
          <span class="text-xs text-slate-400">${pending.size}</span>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-12 gap-4 items-center">
          ${pending.dataUrl ? `
            <div class="md:col-span-3 rounded-xl overflow-hidden border border-[#272b35] bg-black">
              <img src="${pending.dataUrl}" alt="Aperçu sélectionné" class="w-full h-28 object-cover" />
            </div>
          ` : `
            <div class="md:col-span-3 p-4 rounded-xl bg-[#131417] border border-[#272b35] text-center">
              <svg class="w-8 h-8 text-[#d6a55b] mx-auto mb-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"/></svg>
              <span class="text-[10px] text-slate-300 font-mono block truncate">${pending.name}</span>
            </div>
          `}

          <div class="md:col-span-9 space-y-3">
            <div>
              <label class="text-[11px] font-semibold text-slate-300 block mb-1">
                Remarques ou questions pour le professeur (facultatif) :
              </label>
              <textarea id="course-student-notes-${course.id}" rows="2" placeholder="Ex: J'ai particulièrement soigné la ligne de terminateur et le raccord des tangentes..." class="w-full px-3 py-2 rounded-xl bg-[#131417] border border-[#272b35] text-xs text-slate-200 placeholder-slate-500 focus:outline-none focus:border-[#d6a55b]"></textarea>
            </div>

            <div class="flex flex-wrap items-center gap-3">
              <button onclick="submitCourseFile('${course.id}')" class="px-5 py-2.5 rounded-xl gold-pill-active text-xs font-bold transition-all shadow-lg shadow-amber-500/20">
                Transmettre mon Travail pour Correction Pédagogique
              </button>
              <button onclick="cancelCoursePendingUpload('${course.id}')" class="px-4 py-2 rounded-xl bg-[#272b35] hover:bg-slate-700 text-slate-300 text-xs font-semibold transition-all">
                Changer de fichier
              </button>
            </div>
          </div>
        </div>
      </div>
    `;
  }

  // État initial : Présentation de l'exercice et dropzone de fichier
  return `
    <div class="p-6 rounded-2xl bg-[#27293d] border border-[#2b3553]/60 space-y-5 shadow-lg shadow-black/20">
      <div>
        <div class="flex items-center justify-between">
          <span class="text-[10px] font-bold text-[#f8485e] uppercase tracking-wider">
            EXERCICE D'APPLICATION PRATIQUE (${course.duration || '20 min'})
          </span>
          <span class="text-[10px] font-semibold text-slate-400">Modalité : Travail sur feuille ou vectoriel</span>
        </div>
        <h4 class="text-base font-bold text-white mt-1">${course.exercise.title}</h4>
        <p class="text-xs text-slate-300 leading-relaxed mt-1.5">${course.exercise.instructions}</p>
      </div>

      <!-- Consigne d'atelier et dépôt de fichier -->
      <div class="p-5 rounded-xl bg-[#1f2233] border border-dashed border-[#2b3553] hover:border-[#f8485e]/60 transition-all text-center space-y-3 cursor-pointer group" onclick="document.getElementById('course-file-input-${course.id}').click()">
        <input type="file" id="course-file-input-${course.id}" class="hidden" accept=".jpg,.jpeg,.png,.pdf,.svg,.ai,.psd,.webp" onchange="handleCourseFileUpload(event, '${course.id}')" />
        
        <div class="w-12 h-12 mx-auto rounded-full bg-[#27293d] border border-[#2b3553] group-hover:border-[#f8485e] flex items-center justify-center text-slate-400 group-hover:text-[#f8485e] transition-all">
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"/></svg>
        </div>

        <div>
          <p class="text-xs font-bold text-white group-hover:text-[#f8485e] transition-colors">
            Déposez votre fichier pour correction pédagogique
          </p>
          <p class="text-[11px] text-slate-400 mt-0.5">
            Photo de votre feuille de dessin, carnet de croquis, ou maquette vectorielle (JPG, PNG, PDF, SVG, AI, PSD)
          </p>
        </div>

        <button type="button" class="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[#27293d] group-hover:bg-[#f8485e] group-hover:text-white text-xs font-bold text-[#f8485e] transition-all">
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12"/></svg>
          Sélectionner un fichier depuis mon ordinateur
        </button>
      </div>
    </div>
  `;
}
