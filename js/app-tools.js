// =====================================================================
// BOÎTE À OUTILS TECHNIQUES & TEST PÉDAGOGIQUE EN 100 POINTS GPO SARL
// =====================================================================

// Nuancier des formules de noir d'imprimerie
function copyBlackFormula(c, m, y, k, label) {
  const formula = `C:${c} M:${m} J:${y} N:${k}`;
  navigator.clipboard.writeText(formula).then(() => {
    alert(`Formule "${label}" copiée dans le presse-papier : ${formula}`);
    playChime(660, 0.2);
  }).catch(() => {
    alert(`Formule : ${formula}`);
  });
}

// Checklist Prépresse 300 DPI Interactive
function toggleChecklistItem(id) {
  const item = document.getElementById(id);
  if (!item) return;
  const isChecked = item.checked;
  localStorage.setItem(`croisee_check_${id}`, isChecked ? '1' : '0');
  updateChecklistProgress();
}

function updateChecklistProgress() {
  const checkIds = ['chk-bleed', 'chk-safe', 'chk-dpi', 'chk-cmyk', 'chk-fonts', 'chk-black'];
  let checkedCount = 0;
  checkIds.forEach(id => {
    const el = document.getElementById(id);
    const saved = localStorage.getItem(`croisee_check_${id}`);
    if (el) {
      if (saved === '1') el.checked = true;
      if (el.checked) checkedCount++;
    }
  });

  const badge = document.getElementById('checklist-progress-badge');
  if (badge) {
    badge.textContent = `${checkedCount} / ${checkIds.length} Validés`;
    if (checkedCount === checkIds.length) {
      badge.className = 'text-xs font-bold px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/40';
    } else {
      badge.className = 'text-xs font-bold px-3 py-1 rounded-full bg-amber-500/20 text-amber-300 border border-amber-500/40';
    }
  }
}

// Barème Officiel d'Évaluation GPO SARL (100 Points)
function calculateGpoScore() {
  const p1 = parseFloat(document.getElementById('gpo-p1')?.value || 18);
  const p2 = parseFloat(document.getElementById('gpo-p2')?.value || 18);
  const p3 = parseFloat(document.getElementById('gpo-p3')?.value || 14);
  const p4 = parseFloat(document.getElementById('gpo-p4')?.value || 13);
  const p5 = parseFloat(document.getElementById('gpo-p5')?.value || 14);
  const p6 = parseFloat(document.getElementById('gpo-p6')?.value || 14);

  const total = p1 + p2 + p3 + p4 + p5 + p6;
  const labelTotal = document.getElementById('gpo-score-total');
  const mentionEl = document.getElementById('gpo-score-mention');

  if (labelTotal) labelTotal.textContent = `${total.toFixed(0)} / 100`;

  if (mentionEl) {
    if (total >= 85) {
      mentionEl.textContent = 'Mention Très Bien · Maîtrise d\'Atelier Confirmée';
      mentionEl.className = 'text-xs font-bold text-emerald-400';
    } else if (total >= 70) {
      mentionEl.textContent = 'Mention Bien · Solide Autonomie Technique';
      mentionEl.className = 'text-xs font-bold text-cyan-400';
    } else if (total >= 50) {
      mentionEl.textContent = 'Mention Assez Bien · Consolidation Prépresse Requise';
      mentionEl.className = 'text-xs font-bold text-amber-400';
    } else {
      mentionEl.textContent = 'Niveau Apprenant Initial · Suivre le Cycle 4 Semaines';
      mentionEl.className = 'text-xs font-bold text-rose-400';
    }
  }
}

// Initialisation globale au chargement
window.addEventListener('DOMContentLoaded', () => {
  if (typeof initTheme === 'function') initTheme();
  if (typeof renderCourses === 'function') renderCourses();
  if (typeof updateMainTimerDisplay === 'function') updateMainTimerDisplay();
  if (typeof updateChecklistProgress === 'function') updateChecklistProgress();
  if (typeof calculateGpoScore === 'function') calculateGpoScore();
});
