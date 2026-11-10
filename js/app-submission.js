let pendingCourseUploads = {};
function cancelCoursePendingUpload(id) { delete pendingCourseUploads[id]; renderCourses(); }

function syncCourseSelfEval(courseId) {
  const easy = document.getElementById(`course-self-easy-${courseId}`)?.value?.trim() || '';
  const hard = document.getElementById(`course-self-hard-${courseId}`)?.value?.trim() || '';
  const target = document.getElementById(`course-student-notes-${courseId}`);
  if (!target) return;
  const parts = [];
  if (easy) parts.push(`Ce qui a été facile : ${easy}`);
  if (hard) parts.push(`Ce qui a été difficile : ${hard}`);
  target.value = parts.join(' | ');
}

function renderCourseExerciseBlock(course) {
  const submission = getCourseSubmission(course.id);
  const pending = pendingCourseUploads[course.id];

  if (submission) {
    return `
      <!-- Statut de Travail Soumis et Évalué -->
      <div class="p-6 rounded-xl bg-[#181b21] border border-emerald-500/40 space-y-4">
        <div class="flex flex-wrap items-center justify-between gap-3 pb-3 border-b border-[#262b35]">
          <div class="flex items-center gap-2.5">
            <span class="w-3 h-3 rounded-full bg-emerald-400"></span>
            <div>
              <span class="text-xs font-bold uppercase tracking-wider text-emerald-400">Travail transmis au maître de stage</span>
              <h4 class="text-sm font-bold text-white mt-0.5">${course.exercise.title}</h4>
            </div>
          </div>
          <span class="text-xs font-bold px-3 py-1.5 rounded-lg bg-emerald-500/15 text-emerald-300 border border-emerald-500/30">
            Évaluation : ${submission.grade || 'En attente (Acquis / Non acquis)'}
          </span>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-12 gap-4 items-center">
          ${submission.dataUrl ? `
            <div class="md:col-span-3 rounded-xl overflow-hidden border border-[#262b35] bg-[#0d0f13] cursor-pointer group" onclick="openImageModal('${submission.dataUrl}')">
              <img src="${submission.dataUrl}" alt="Aperçu du travail élève" class="w-full h-28 object-cover group-hover:scale-105 transition-transform" />
            </div>
          ` : `
            <div class="md:col-span-3 p-4 rounded-xl bg-[#111317] border border-[#262b35] flex flex-col items-center justify-center text-center">
              <span class="text-xs text-slate-300 font-mono truncate max-w-full">${submission.fileName}</span>
              <span class="text-[11px] text-slate-400 mt-1">${submission.fileSize || ''}</span>
            </div>
          `}
          
          <div class="md:col-span-9 space-y-2">
            <div class="flex flex-wrap items-center gap-3 text-xs text-slate-300">
              <span class="font-semibold text-white">Fichier déposé :</span>
              <span class="font-mono text-emerald-400 bg-[#111317] px-2.5 py-1 rounded border border-[#262b35]">${submission.fileName}</span>
              <span class="text-slate-500">|</span>
              <span class="text-slate-400">Transmis le ${submission.submittedAt}</span>
            </div>

            ${submission.studentNotes ? `
              <p class="text-xs text-slate-200 bg-[#111317] p-3 rounded-lg border border-[#262b35]">
                <strong class="text-sky-400">Auto-évaluation de la stagiaire :</strong> ${submission.studentNotes}
              </p>
            ` : ''}

            <p class="text-xs text-emerald-300 leading-relaxed">
              <strong class="text-white">Observation du tuteur :</strong> ${submission.feedback || (submission.status === 'en_attente' ? 'En attente du retour du maître de stage.' : 'Correction enregistrée par le maître de stage.')}
            </p>

            <div class="pt-1 flex items-center gap-3">
              <button onclick="resetCourseFileUpload('${course.id}')" class="px-3.5 py-2 rounded-lg bg-[#111317] hover:bg-[#252a36] border border-[#262b35] text-slate-200 text-xs font-semibold transition-all">
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
      <div class="p-6 rounded-xl bg-[#181b21] border border-[#f8485e]/50 space-y-4">
        <div class="flex items-center justify-between pb-3 border-b border-[#262b35]">
          <div>
            <span class="text-xs font-bold uppercase tracking-wider text-[#f8485e]">Fichier prêt à transmettre au maître de stage</span>
            <h4 class="text-sm font-bold text-white mt-0.5">${course.exercise.title}</h4>
          </div>
          <span class="text-xs font-mono text-slate-400">${pending.size}</span>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-12 gap-4 items-start">
          ${pending.dataUrl ? `
            <div class="md:col-span-3 rounded-xl overflow-hidden border border-[#262b35] bg-[#0d0f13]">
              <img src="${pending.dataUrl}" alt="Aperçu sélectionné" class="w-full h-32 object-cover" />
            </div>
          ` : `
            <div class="md:col-span-3 p-4 rounded-xl bg-[#111317] border border-[#262b35] text-center">
              <span class="text-xs text-slate-200 font-mono block truncate">${pending.name}</span>
            </div>
          `}

          <div class="md:col-span-9 space-y-3">
            <div class="p-3.5 rounded-lg bg-[#111317] border border-[#262b35] space-y-3">
              <span class="text-xs font-bold text-sky-400 block">Votre bilan personnel sur cet exercice :</span>
              <div class="grid grid-cols-1 md:grid-cols-2 gap-3">
                <div>
                  <label class="text-xs font-semibold text-emerald-400 block mb-1">Ce qui a été facile pour moi :</label>
                  <input type="text" id="course-self-easy-${course.id}" oninput="syncCourseSelfEval('${course.id}')" placeholder="Ex : Relier deux points en ligne droite, construire la tasse..." class="w-full px-3 py-2 rounded-lg bg-[#181b21] border border-[#262b35] text-xs text-white placeholder-slate-500 focus:outline-none focus:border-emerald-500" />
                </div>
                <div>
                  <label class="text-xs font-semibold text-amber-400 block mb-1">Ce qui m'a semblé le plus difficile :</label>
                  <input type="text" id="course-self-hard-${course.id}" oninput="syncCourseSelfEval('${course.id}')" placeholder="Ex : Garder les ellipses symétriques sans tourner le poignet..." class="w-full px-3 py-2 rounded-lg bg-[#181b21] border border-[#262b35] text-xs text-white placeholder-slate-500 focus:outline-none focus:border-amber-500" />
                </div>
              </div>
              <textarea id="course-student-notes-${course.id}" rows="2" placeholder="Remarque ou question complémentaire..." class="w-full px-3 py-2 rounded-lg bg-[#181b21] border border-[#262b35] text-xs text-slate-200 placeholder-slate-500 focus:outline-none focus:border-sky-500"></textarea>
            </div>

            <div class="flex flex-wrap items-center gap-3">
              <button onclick="submitCourseFile('${course.id}')" class="px-5 py-2.5 rounded-lg bg-[#f8485e] hover:bg-[#e0374c] text-white text-xs font-bold transition-all">
                Transmettre mon exercice pour correction
              </button>
              <button onclick="cancelCoursePendingUpload('${course.id}')" class="px-4 py-2.5 rounded-lg bg-[#111317] hover:bg-[#252a36] border border-[#262b35] text-slate-200 text-xs font-semibold transition-all">
                Changer de fichier
              </button>
            </div>
          </div>
        </div>
      </div>
    `;
  }

  // État initial : Présentation de l'exercice et dropzone
  return `
    <div class="p-6 rounded-xl bg-[#181b21] border border-[#262b35] space-y-5">
      <div class="space-y-2">
        <div class="flex flex-wrap items-center justify-between gap-2">
          <span class="text-xs font-bold text-[#f8485e] uppercase tracking-wider">
            Exercice d'application (${course.duration || '25 min'})
          </span>
          <span class="text-xs font-mono text-slate-400">Sur feuille A4 (photo ou scan)</span>
        </div>
        <h4 class="text-base font-bold text-white">${course.exercise.title}</h4>
        <p class="text-sm text-slate-200 leading-relaxed">${course.exercise.instructions}</p>
      </div>

      <div class="p-3.5 rounded-lg bg-[#111317] border border-[#262b35] flex flex-wrap items-center justify-between gap-2 text-xs text-slate-300">
        <span><strong class="text-sky-400">Auto-évaluation :</strong> Lors de l'envoi, vous pourrez noter en une phrase <em>ce qui a été facile</em> et <em>ce qui vous a semblé difficile</em>.</span>
        <span class="font-mono text-emerald-400">Conserver les traits de construction</span>
      </div>

      <!-- Consigne d'atelier et dépôt de fichier -->
      <div class="p-6 rounded-xl bg-[#111317] border border-dashed border-[#262b35] hover:border-[#f8485e] transition-all text-center space-y-3 cursor-pointer group" onclick="document.getElementById('course-file-input-${course.id}').click()">
        <input type="file" id="course-file-input-${course.id}" class="hidden" accept=".jpg,.jpeg,.png,.pdf,.svg,.ai,.psd,.webp" onchange="handleCourseFileUpload(event, '${course.id}')" />
        
        <div>
          <p class="text-sm font-bold text-white group-hover:text-[#f8485e] transition-colors">
            Déposer la photo de vos feuilles d'exercices pour validation par le tuteur
          </p>
          <p class="text-xs text-slate-400 mt-1">
            Formats acceptés : Photo de feuille A4 ou carnet (JPG, PNG, WEBP, PDF)
          </p>
        </div>

        <button type="button" class="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[#181b21] border border-[#262b35] group-hover:bg-[#f8485e] group-hover:border-[#f8485e] group-hover:text-white text-xs font-bold text-[#f8485e] transition-all">
          Sélectionner ma photo / mon fichier sur l'ordinateur
        </button>
      </div>
    </div>
  `;
}

if (typeof window !== 'undefined') {
  Object.assign(window, { syncCourseSelfEval });
}
