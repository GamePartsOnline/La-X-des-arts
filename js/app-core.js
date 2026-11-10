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

// Gestion des Thèmes Visuels (Black Dashboard Creative Tim, Obsidian, Midnight, Parchment)
function setTheme(theme) {
  const root = document.documentElement;
  root.setAttribute('data-theme', theme);
  localStorage.setItem('croisee_theme', theme);

  document.querySelectorAll('.theme-check').forEach(el => el.classList.add('hidden'));
  const activeCheck = document.querySelector(`#theme-opt-${theme} .theme-check`);
  if (activeCheck) activeCheck.classList.remove('hidden');

  const themeIndicator = document.getElementById('theme-indicator-dot');
  const themeLabel = document.getElementById('theme-btn-label');
  if (themeLabel) {
    if (theme === 'black-dashboard') themeLabel.textContent = 'Black Dashboard';
    if (theme === 'obsidian') themeLabel.textContent = 'Obsidienne';
    if (theme === 'midnight') themeLabel.textContent = 'Minuit OLED';
    if (theme === 'parchment') themeLabel.textContent = 'Parchemin';
  }
  if (themeIndicator) {
    if (theme === 'black-dashboard') themeIndicator.className = 'w-3 h-3 rounded-full bg-pink-500 shadow-sm shadow-pink-500/50';
    if (theme === 'obsidian') themeIndicator.className = 'w-3 h-3 rounded-full bg-amber-500 shadow-sm shadow-amber-500/50';
    if (theme === 'midnight') themeIndicator.className = 'w-3 h-3 rounded-full bg-cyan-400 shadow-sm shadow-cyan-400/50';
    if (theme === 'parchment') themeIndicator.className = 'w-3 h-3 rounded-full bg-orange-700 shadow-sm shadow-orange-700/50';
  }
}

function initTheme() {
  const saved = localStorage.getItem('croisee_theme') || 'black-dashboard';
  setTheme(saved);
}

// Sélecteur de portée pour le Graphique Black Dashboard (All / Dessin / Graphisme)
function switchChartScope(scope) {
  const tabs = {
    all: document.getElementById('chart-tab-all'),
    dessin: document.getElementById('chart-tab-dessin'),
    graphisme: document.getElementById('chart-tab-graph')
  };

  Object.entries(tabs).forEach(([key, btn]) => {
    if (!btn) return;
    if (key === scope) {
      btn.className = 'px-3.5 py-1.5 rounded-lg text-xs font-bold bg-gradient-to-r from-[#e14eca] to-[#ba54f5] text-white shadow-md shadow-pink-500/20 transition-all';
    } else {
      btn.className = 'px-3.5 py-1.5 rounded-lg text-xs font-bold text-slate-400 hover:text-white transition-all';
    }
  });

  const pinkArea = document.querySelector('svg path[fill="url(#chartGlowPink)"]');
  const pinkLine = document.querySelector('svg path[stroke="#e14eca"]');
  const cyanArea = document.querySelector('svg path[fill="url(#chartGlowCyan)"]');
  const cyanLine = document.querySelector('svg path[stroke="#00f2c3"]');

  if (scope === 'dessin') {
    if (pinkArea) pinkArea.style.opacity = '1';
    if (pinkLine) pinkLine.style.opacity = '1';
    if (cyanArea) cyanArea.style.opacity = '0.15';
    if (cyanLine) cyanLine.style.opacity = '0.15';
  } else if (scope === 'graphisme') {
    if (pinkArea) pinkArea.style.opacity = '0.15';
    if (pinkLine) pinkLine.style.opacity = '0.15';
    if (cyanArea) cyanArea.style.opacity = '1';
    if (cyanLine) cyanLine.style.opacity = '1';
  } else {
    if (pinkArea) pinkArea.style.opacity = '1';
    if (pinkLine) pinkLine.style.opacity = '1';
    if (cyanArea) cyanArea.style.opacity = '1';
    if (cyanLine) cyanLine.style.opacity = '1';
  }
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
