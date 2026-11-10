// =====================================================================
// NAVIGATION CONDITIONNELLE BASÉE SUR LES 3 RÔLES STRICTS (STAGIAIRE, VISITEUR, ADMIN)
// ZÉRO BARRE LATÉRALE GAUCHE · THÈME SOMBRE SOBRE & LISIBLE
// =====================================================================
let studio = null;
let currentSession = SESSIONS_DATA[0];
let currentCourse = COURSES_DATA[0];
let currentDiscipline = 'all';

function playChime(freq = 440, duration = 0.25) {
  try {
    const soundToggle = document.getElementById('sound-toggle');
    if (soundToggle && !soundToggle.checked) return;
    const ctx = new (window.AudioContext || window.webkitAudioContext)();
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.type = 'sine';
    osc.frequency.setValueAtTime(freq, ctx.currentTime);
    gain.gain.setValueAtTime(0.15, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + duration);
    osc.connect(gain);
    gain.connect(ctx.destination);
    osc.start();
    osc.stop(ctx.currentTime + duration);
  } catch {}
}

function showTab(tabId) {
  const r = typeof getActiveRole === 'function' ? getActiveRole() : currentRole;
  const allowedTabs = typeof getRoleNavTabs === 'function' ? getRoleNavTabs(currentRole).map(t => t.id) : ['visiteur'];

  // Redirection de sécurité selon le rôle
  if (tabId === 'accueil' || tabId === 'dashboard' || tabId === 'tableau-de-bord' || tabId === 'prof' || !allowedTabs.includes(tabId)) {
    tabId = currentRole ? (getProfileMeta(r).defaultTab || allowedTabs[0]) : allowedTabs[0];
  }

  document.querySelectorAll('.tab-content').forEach(el => el.classList.add('hidden'));
  document.querySelectorAll('.nav-btn').forEach(btn => {
    btn.className = 'nav-btn px-3.5 py-2 rounded-lg text-sm font-medium text-slate-300 hover:text-white hover:bg-[#1e222b] transition-all whitespace-nowrap';
  });

  const activeContent = document.getElementById(`content-${tabId}`);
  const activeBtn = document.getElementById(`btn-${tabId}`);
  if (activeContent) activeContent.classList.remove('hidden');
  if (activeBtn) {
    activeBtn.className = 'nav-btn px-3.5 py-2 rounded-lg text-sm font-bold bg-[#252a36] text-white border border-[#363d4f] transition-all whitespace-nowrap';
  }

  if (tabId === 'visiteur' && typeof renderVisiteurView === 'function') renderVisiteurView();
  if (tabId === 'stagiaire' && typeof renderStagiaireDashboard === 'function') renderStagiaireDashboard();
  if (tabId === 'admin' && typeof renderAdminDashboard === 'function') renderAdminDashboard();
  if (tabId === 'cours' && typeof renderCourses === 'function') renderCourses();
  if (tabId === 'techniques' && typeof renderTechniquesView === 'function') renderTechniquesView();
  if (tabId === 'metiers' && typeof renderMetiersView === 'function') renderMetiersView();
  if (tabId === 'ecoles' && typeof renderEcolesDirectoryPage === 'function') renderEcolesDirectoryPage();
  if (tabId === 'veille' && typeof renderVeilleView === 'function') renderVeilleView();
  if (tabId === 'jobs' && typeof renderJobsView === 'function') renderJobsView();
  if (tabId === 'exposition' && typeof renderCreatorShowcaseView === 'function') renderCreatorShowcaseView();

  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function setTheme() {}
function initTheme() {}
function switchChartScope() {}

function openImageModal(src) {
  const modal = document.getElementById('image-modal');
  const img = document.getElementById('modal-img');
  if (modal && img) {
    img.src = src;
    modal.classList.remove('hidden');
  }
}

function closeImageModal() {
  const modal = document.getElementById('image-modal');
  if (modal) modal.classList.add('hidden');
}

function openSettingsModal() {
  const modal = document.getElementById('settings-modal');
  if (modal) modal.classList.remove('hidden');
}

function closeSettingsModal() {
  const modal = document.getElementById('settings-modal');
  if (modal) modal.classList.add('hidden');
}
