// =====================================================================
// CONTENU DE LEÇON ÉPURÉ, LISIBLE (16PX) ET SANS JARGON SUPERFLU
// =====================================================================

function renderCourseSourceCard() {
  return '';
}

function renderPersonaNavigation() {
  return '';
}

function renderCourseDetailContent(course) {
  const errors = course.correction?.student_errors || [];
  const rems = course.correction?.remediations || [];
  const steps = course.theory || [];

  return `
    <div class="space-y-6">
      <!-- Principe essentiel -->
      <div class="p-5 rounded-xl bg-[#181b21] border border-[#262b35] space-y-2">
        <span class="text-xs font-semibold uppercase tracking-wider text-emerald-400">Principe essentiel</span>
        <p class="text-base text-slate-100 leading-relaxed font-medium">
          ${course.artist?.quote || course.summary}
        </p>
      </div>

      ${steps.length ? `
        <!-- Étapes clés du cours -->
        <div class="p-6 rounded-xl bg-[#181b21] border border-[#262b35] space-y-4">
          <h3 class="text-base font-bold text-white">Points clés de la leçon</h3>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            ${steps.slice(0, 4).map((s, idx) => `
              <div class="p-4 rounded-lg bg-[#111317] border border-[#262b35] space-y-1.5">
                <span class="text-xs font-bold text-sky-400">${idx + 1}. ${s.subtitle || s.title || 'Étape'}</span>
                <p class="text-sm text-slate-300 leading-relaxed">${s.text || s.content || ''}</p>
              </div>
            `).join('')}
          </div>
        </div>
      ` : ''}

      <!-- À faire vs À éviter -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div class="p-5 rounded-xl bg-[#181b21] border border-emerald-500/30 space-y-3">
          <h4 class="text-sm font-bold text-emerald-400">Les bons réflexes</h4>
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
          <h4 class="text-sm font-bold text-rose-400">Les erreurs à éviter</h4>
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
    </div>
  `;
}
