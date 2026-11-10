// =====================================================================
// ÉTAT GLOBAL, NAVIGATION PAR ONGLETS, THÈMES & UTILITAIRES AUDIO
// =====================================================================
let studio = null;
let currentSession = SESSIONS_DATA[0];
let currentCourse = COURSES_DATA[0];
let currentDiscipline = 'all';

// Audio chime using Web Audio API
function playChime(freq = 440, duration = 0.3) {
  try {
    const soundToggle = document.getElementById('sound-toggle');
    if (soundToggle && !soundToggle.checked) return;

    const ctx = new (window.AudioContext || window.webkitAudioContext)();
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.type = 'sine';
    osc.frequency.setValueAtTime(freq, ctx.currentTime);
    gain.gain.setValueAtTime(0.2, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + duration);
    osc.connect(gain);
    gain.connect(ctx.destination);
    osc.start();
    osc.stop(ctx.currentTime + duration);
  } catch (e) {
    console.log('Audio non disponible', e);
  }
}

// Navigation between tabs
function showTab(tabId) {
  document.querySelectorAll('.tab-content').forEach(el => el.classList.add('hidden'));
  document.querySelectorAll('.nav-btn').forEach(btn => {
    btn.className = 'nav-btn px-5 py-2 rounded-full text-xs font-bold text-[#8f95a3] hover:text-white transition-all';
  });

  const activeContent = document.getElementById(`content-${tabId}`);
  const activeBtn = document.getElementById(`btn-${tabId}`);
  if (activeContent) activeContent.classList.remove('hidden');
  if (activeBtn) {
    activeBtn.className = 'nav-btn px-5 py-2 rounded-full text-xs font-bold gold-pill-active transition-all';
  }

  if (tabId === 'cours' && typeof renderCourses === 'function') {
    renderCourses();
  }

  if (tabId === 'studio' && !studio) {
    setTimeout(() => {
      studio = new DrawingStudio('drawing-canvas');
    }, 50);
  }

  // Remonter en haut de page lors du changement d'onglet
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Gestion des Thèmes Visuels (Obsidian, Midnight, Parchment)
function setTheme(theme) {
  const root = document.documentElement;
  root.setAttribute('data-theme', theme);
  localStorage.setItem('croisee_theme', theme);

  document.querySelectorAll('.theme-check').forEach(el => el.classList.add('hidden'));
  const activeCheck = document.querySelector(`#theme-opt-${theme} .theme-check`);
  if (activeCheck) activeCheck.classList.remove('hidden');

  const themeIndicator = document.getElementById('theme-indicator-dot');
  if (themeIndicator) {
    if (theme === 'obsidian') themeIndicator.className = 'w-3 h-3 rounded-full bg-amber-500 shadow-sm shadow-amber-500/50';
    if (theme === 'midnight') themeIndicator.className = 'w-3 h-3 rounded-full bg-cyan-400 shadow-sm shadow-cyan-400/50';
    if (theme === 'parchment') themeIndicator.className = 'w-3 h-3 rounded-full bg-orange-700 shadow-sm shadow-orange-700/50';
  }
}

function initTheme() {
  const saved = localStorage.getItem('croisee_theme') || 'obsidian';
  setTheme(saved);
}

// Modale d'Agrandissement d'Image
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

// Modale de Paramètres
function openSettingsModal() {
  const modal = document.getElementById('settings-modal');
  if (modal) modal.classList.remove('hidden');
}

function closeSettingsModal() {
  const modal = document.getElementById('settings-modal');
  if (modal) modal.classList.add('hidden');
}
