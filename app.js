let studio = null;
let timerInterval = null;
let timeLeft = 15 * 60;
let initialTime = 15 * 60;
let isTimerRunning = false;
let currentSession = SESSIONS_DATA[0];
let currentCourse = COURSES_DATA[0];

// Main Dashboard Timer State
let mainTimeLeft = 15 * 60;
let mainTimerInterval = null;
let isMainTimerRunning = false;

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

  if (tabId === 'studio' && !studio) {
    setTimeout(() => {
      studio = new DrawingStudio('drawing-canvas');
    }, 50);
  }
}

// Render Courses View
function renderCourses() {
  const listEl = document.getElementById('courses-list');
  const detailEl = document.getElementById('course-detail');
  if (!listEl || !detailEl) return;

  listEl.innerHTML = COURSES_DATA.map(c => `
    <button onclick="selectCourse('${c.id}')" class="w-full text-left p-4 rounded-xl border transition-all ${
      c.id === currentCourse.id 
        ? 'bg-[#d6a55b]/10 border-[#d6a55b] shadow-lg shadow-amber-500/5' 
        : 'bg-[#1b1e24] border-[#272b35] hover:border-slate-600'
    }">
      <div class="flex items-center justify-between mb-2">
        <span class="text-[10px] font-bold px-2 py-0.5 rounded bg-[#d6a55b]/20 text-[#d6a55b] uppercase tracking-wider">${c.num}</span>
        <span class="text-xs text-[#8f95a3] font-mono">${c.duration}</span>
      </div>
      <h3 class="font-bold text-white text-sm mb-1">${c.title}</h3>
      <p class="text-xs text-[#8f95a3]">${c.domain} · ${c.level}</p>
    </button>
  `).join('');

  detailEl.innerHTML = `
    <div class="bg-[#1b1e24] border border-[#272b35] rounded-2xl p-6 lg:p-8 space-y-6">
      <div class="flex flex-wrap items-center justify-between gap-4 pb-5 border-b border-[#272b35]">
        <div>
          <div class="flex items-center gap-2 mb-1.5">
            <span class="text-[10px] font-bold px-2.5 py-1 rounded-full bg-[#d6a55b]/20 text-[#d6a55b] uppercase tracking-wider">${currentCourse.num}</span>
            <span class="text-xs text-[#8f95a3]">${currentCourse.domain}</span>
          </div>
          <h2 class="text-2xl lg:text-3xl font-extrabold text-white tracking-tight font-serif">${currentCourse.title}</h2>
        </div>
        <button onclick="openImageModal('${currentCourse.image}')" class="px-5 py-2.5 rounded-xl gold-pill-active text-xs font-bold transition-all flex items-center gap-2">
          Zoom Plein Écran
        </button>
      </div>

      <!-- Planche Pédagogique Illustrée DÉDIÉE -->
      <div class="rounded-xl overflow-hidden border border-[#272b35] bg-black group relative cursor-pointer" onclick="openImageModal('${currentCourse.image}')">
        <img src="${currentCourse.image}" alt="${currentCourse.title}" class="w-full h-auto max-h-[550px] object-contain transition-transform duration-300 group-hover:scale-[1.01]" />
        <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
          <p class="text-xs text-white font-medium">Cliquez pour agrandir la planche en ultra-haute résolution</p>
        </div>
      </div>

      ${currentCourse.artist ? `
        <!-- Maître de Référence Officiel -->
        <div class="p-6 rounded-2xl bg-gradient-to-r from-[#2a2013]/80 via-[#1b1e24] to-[#16181d] border border-[#684e27] shadow-lg shadow-black/30 space-y-3">
          <div class="flex flex-wrap items-center justify-between gap-3">
            <div class="flex items-center gap-2.5">
              <span class="text-[10px] font-bold px-2.5 py-1 rounded-full bg-[#d6a55b]/20 text-[#d6a55b] border border-[#d6a55b]/30 tracking-wider uppercase">MAÎTRE DE RÉFÉRENCE</span>
              <h3 class="font-serif font-black text-white text-lg lg:text-xl tracking-wide">${currentCourse.artist.name}</h3>
            </div>
            <span class="text-[11px] font-semibold text-[#d6a55b] flex items-center gap-1.5">
              <svg class="w-3.5 h-3.5 text-[#d6a55b]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"/></svg>
              Pédagogie de l'École
            </span>
          </div>
          <blockquote class="italic text-xs lg:text-sm text-[#e6bf65] border-l-2 border-[#d6a55b] pl-4 py-1 my-2 font-serif leading-relaxed">
            "${currentCourse.artist.quote}"
          </blockquote>
          <p class="text-xs text-slate-300 leading-relaxed">${currentCourse.artist.bio}</p>
        </div>
      ` : ''}

      <!-- Fondement Théorique -->
      <div class="space-y-3">
        <h3 class="text-base font-serif font-bold text-[#d6a55b] tracking-wider uppercase">
          Points Clés de la Méthode
        </h3>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          ${currentCourse.theory.map(t => `
            <div class="p-4 rounded-xl bg-[#131417] border border-[#272b35]">
              <h4 class="font-bold text-sm text-slate-200 mb-1">${t.title}</h4>
              <p class="text-xs text-slate-400 leading-relaxed">${t.desc}</p>
            </div>
          `).join('')}
        </div>
      </div>

      <!-- Exercice Chronométré -->
      <div class="p-5 rounded-xl bg-gradient-to-br from-[#d6a55b]/10 via-[#131417] to-[#00e1d9]/10 border border-[#d6a55b]/30">
        <h4 class="text-xs font-bold text-[#d6a55b] uppercase tracking-wider mb-1">Exercice d'application express (${currentCourse.duration})</h4>
        <p class="text-sm font-semibold text-white mb-2">${currentCourse.exercise.title}</p>
        <p class="text-xs text-slate-300 leading-relaxed mb-4">${currentCourse.exercise.instructions}</p>
        <button onclick="launchChronoForCourse('${currentCourse.id}')" class="px-5 py-2.5 gold-pill-active text-xs font-bold rounded-xl transition-all">
          Lancer l'Atelier Chrono pour cet Exercice
        </button>
      </div>

      ${currentCourse.correction ? `
        <!-- Correction d'Élève & Analyse Comparative Avant / Après -->
        <div class="p-6 rounded-2xl bg-[#131417] border border-[#272b35] space-y-6">
          <div class="flex items-center justify-between pb-3 border-b border-[#272b35]">
            <div>
              <span class="text-[10px] font-bold px-2.5 py-1 rounded bg-purple-500/20 text-purple-300 uppercase tracking-wider">ÉTUDE COMPARATIVE AVANT / APRÈS</span>
              <h3 class="font-serif font-bold text-white text-lg mt-1">Critique Constructive & Remédiation Académique</h3>
            </div>
            <span class="text-xs font-semibold px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400">
              Note Globale : 9.2 / 10
            </span>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <!-- Panneau Erreurs Étudiant -->
            <div class="p-4 rounded-xl bg-red-950/20 border border-red-500/30 space-y-3">
              <h4 class="text-xs font-bold uppercase tracking-wider text-red-400 flex items-center gap-1.5">
                <span class="w-2 h-2 rounded-full bg-red-400"></span> 3 Erreurs Typiques Détectées
              </h4>
              <div class="space-y-2">
                ${currentCourse.correction.student_errors.map(err => `
                  <div class="text-xs">
                    <span class="font-semibold text-slate-200">${err.label} : </span>
                    <span class="text-slate-400">${err.detail}</span>
                  </div>
                `).join('')}
              </div>
            </div>

            <!-- Panneau Remédiations Académie -->
            <div class="p-4 rounded-xl bg-emerald-950/20 border border-emerald-500/30 space-y-3">
              <h4 class="text-xs font-bold uppercase tracking-wider text-emerald-400 flex items-center gap-1.5">
                <span class="w-2 h-2 rounded-full bg-emerald-400"></span> Remédiations de l'École
              </h4>
              <div class="space-y-2">
                ${currentCourse.correction.remediations.map(rem => `
                  <div class="text-xs">
                    <span class="font-semibold text-slate-200">${rem.label} : </span>
                    <span class="text-slate-400">${rem.detail}</span>
                  </div>
                `).join('')}
              </div>
            </div>
          </div>

          <!-- Grille des 5 Critères -->
          <div class="pt-2">
            <h4 class="text-xs font-bold text-slate-300 uppercase tracking-wider mb-3">Grille Officielle des 5 Critères Fondamentaux</h4>
            <div class="grid grid-cols-2 sm:grid-cols-5 gap-3">
              <div class="p-3 rounded-xl bg-[#1b1e24] border border-[#272b35] text-center">
                <p class="text-[10px] text-[#8f95a3] uppercase">Silhouette</p>
                <p class="text-base font-extrabold text-[#d6a55b] mt-0.5">${currentCourse.correction.grades.silhouette}/10</p>
              </div>
              <div class="p-3 rounded-xl bg-[#1b1e24] border border-[#272b35] text-center">
                <p class="text-[10px] text-[#8f95a3] uppercase">Structure</p>
                <p class="text-base font-extrabold text-[#d6a55b] mt-0.5">${currentCourse.correction.grades.structure}/10</p>
              </div>
              <div class="p-3 rounded-xl bg-[#1b1e24] border border-[#272b35] text-center">
                <p class="text-[10px] text-[#8f95a3] uppercase">Valeurs</p>
                <p class="text-base font-extrabold text-[#d6a55b] mt-0.5">${currentCourse.correction.grades.valeurs}/10</p>
              </div>
              <div class="p-3 rounded-xl bg-[#1b1e24] border border-[#272b35] text-center">
                <p class="text-[10px] text-[#8f95a3] uppercase">Bords</p>
                <p class="text-base font-extrabold text-[#d6a55b] mt-0.5">${currentCourse.correction.grades.bords}/10</p>
              </div>
              <div class="p-3 rounded-xl bg-[#1b1e24] border border-[#272b35] text-center">
                <p class="text-[10px] text-[#8f95a3] uppercase">Couleur</p>
                <p class="text-base font-extrabold text-[#d6a55b] mt-0.5">${currentCourse.correction.grades.couleur}/10</p>
              </div>
            </div>
          </div>
        </div>
      ` : ''}
    </div>
  `;
}

function selectCourse(id) {
  currentCourse = COURSES_DATA.find(c => c.id === id) || COURSES_DATA[0];
  renderCourses();
}

function launchChronoForCourse(id) {
  showTab('studio');
}

// Timer Logic for Studio Tab
function updateTimerDisplay() {
  const display = document.getElementById('timer-display');
  const progressRing = document.getElementById('timer-progress');
  if (!display) return;

  const mins = Math.floor(timeLeft / 60);
  const secs = timeLeft % 60;
  display.textContent = `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;

  if (progressRing) {
    const percent = ((initialTime - timeLeft) / initialTime) * 100;
    progressRing.style.strokeDashoffset = 283 - (283 * percent / 100);
  }
}

function toggleTimer() {
  const btn = document.getElementById('timer-toggle-btn');
  if (isTimerRunning) {
    clearInterval(timerInterval);
    isTimerRunning = false;
    btn.textContent = 'Reprendre';
    btn.classList.remove('bg-amber-500');
    btn.classList.add('bg-emerald-500');
  } else {
    isTimerRunning = true;
    btn.textContent = 'Pause';
    btn.classList.remove('bg-emerald-500');
    btn.classList.add('bg-amber-500');
    playChime(600, 0.15);

    timerInterval = setInterval(() => {
      if (timeLeft > 0) {
        timeLeft--;
        updateTimerDisplay();
        if (timeLeft === 60) playChime(500, 0.4);
      } else {
        clearInterval(timerInterval);
        isTimerRunning = false;
        btn.textContent = 'Session Terminée !';
        playChime(880, 0.8);
        alert('Temps écoulé ! Votre session de dessin est terminée. Vous pouvez exporter votre croquis ou l\'évaluer dans la galerie.');
      }
    }, 1000);
  }
}

function resetTimer(seconds = 15 * 60) {
  clearInterval(timerInterval);
  isTimerRunning = false;
  initialTime = seconds;
  timeLeft = seconds;
  updateTimerDisplay();
  const btn = document.getElementById('timer-toggle-btn');
  if (btn) {
    btn.textContent = 'Démarrer';
    btn.classList.remove('bg-amber-500');
    btn.classList.add('bg-emerald-500');
  }
}

// Timer Logic for Main Dashboard Tab (Stopwatch Card)
function updateMainTimerDisplay() {
  const display = document.getElementById('timer-display-main');
  if (!display) return;
  const mins = Math.floor(mainTimeLeft / 60);
  const secs = mainTimeLeft % 60;
  display.textContent = `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
}

function toggleTimerMain() {
  const btn = document.getElementById('main-timer-toggle-btn');
  if (isMainTimerRunning) {
    clearInterval(mainTimerInterval);
    isMainTimerRunning = false;
    if (btn) btn.textContent = 'Reprendre la Pose';
  } else {
    isMainTimerRunning = true;
    if (btn) btn.textContent = 'Pause';
    playChime(600, 0.15);
    mainTimerInterval = setInterval(() => {
      if (mainTimeLeft > 0) {
        mainTimeLeft--;
        updateMainTimerDisplay();
        if (mainTimeLeft === 60) playChime(500, 0.4);
      } else {
        clearInterval(mainTimerInterval);
        isMainTimerRunning = false;
        if (btn) btn.textContent = 'Session Terminée !';
        playChime(880, 0.8);
      }
    }, 1000);
  }
}

function resetTimerMain(seconds = 15 * 60) {
  clearInterval(mainTimerInterval);
  isMainTimerRunning = false;
  mainTimeLeft = seconds;
  updateMainTimerDisplay();
  const btn = document.getElementById('main-timer-toggle-btn');
  if (btn) btn.textContent = 'Démarrer la Pose';
}

function selectSession(id) {
  currentSession = SESSIONS_DATA.find(s => s.id === id) || SESSIONS_DATA[0];
  resetTimer(currentSession.duration * 60);

  const refImg = document.getElementById('session-ref-img');
  const titleEl = document.getElementById('session-title');
  const tipsEl = document.getElementById('session-tips');
  if (refImg) refImg.src = currentSession.image;
  if (titleEl) titleEl.textContent = currentSession.title;
  if (tipsEl) tipsEl.textContent = currentSession.tips;
}

// Render Gallery in Tab 4
function renderGallery() {
  const grid = document.getElementById('student-gallery-list');
  if (!grid) return;

  grid.innerHTML = STUDENT_GALLERY.map(item => `
    <div class="bg-[#1b1e24] border border-[#272b35] rounded-2xl overflow-hidden hover:border-[#d6a55b] transition-all flex flex-col">
      <div class="h-60 bg-black overflow-hidden cursor-pointer" onclick="openImageModal('${item.image}')">
        <img src="${item.image}" alt="${item.title}" class="w-full h-full object-cover hover:scale-105 transition-transform duration-300" />
      </div>
      <div class="p-5 flex-1 flex flex-col justify-between">
        <div>
          <div class="flex items-center justify-between mb-2">
            <span class="text-[11px] font-bold px-2 py-0.5 rounded bg-[#00e1d9]/10 text-[#00e1d9]">${item.date}</span>
            <span class="text-sm font-extrabold text-[#d6a55b]">${item.critique}</span>
          </div>
          <h3 class="font-bold text-white text-base mb-1">${item.title}</h3>
        </div>
        <div class="flex items-center gap-3 pt-4 border-t border-[#272b35] mt-4">
          <img src="${item.avatar}" class="w-8 h-8 rounded-full object-cover border border-[#272b35]" />
          <span class="text-xs font-medium text-slate-300">${item.author}</span>
        </div>
      </div>
    </div>
  `).join('');
}

// Interactive Self-Assessment Calculator
function updateEvaluationScore() {
  const c1 = parseFloat(document.getElementById('crit-1')?.value || 9);
  const c2 = parseFloat(document.getElementById('crit-2')?.value || 9);
  const c3 = parseFloat(document.getElementById('crit-3')?.value || 9);
  const c4 = parseFloat(document.getElementById('crit-4')?.value || 9);
  const c5 = parseFloat(document.getElementById('crit-5')?.value || 9);

  document.getElementById('label-crit-1').textContent = `${c1} / 10`;
  document.getElementById('label-crit-2').textContent = `${c2} / 10`;
  document.getElementById('label-crit-3').textContent = `${c3} / 10`;
  document.getElementById('label-crit-4').textContent = `${c4} / 10`;
  document.getElementById('label-crit-5').textContent = `${c5} / 10`;

  const avg = ((c1 + c2 + c3 + c4 + c5) / 5).toFixed(1);
  const resultEl = document.getElementById('eval-score-result');
  if (resultEl) {
    resultEl.textContent = `${avg} / 10`;
  }
}

// Image Zoom Modal
function openImageModal(src) {
  const modal = document.getElementById('image-modal');
  const modalImg = document.getElementById('modal-img-src');
  if (modal && modalImg) {
    modalImg.src = src;
    modal.classList.remove('hidden');
  }
}

function closeImageModal() {
  const modal = document.getElementById('image-modal');
  if (modal) modal.classList.add('hidden');
}

// Settings Modal
function openSettingsModal() {
  const modal = document.getElementById('settings-modal');
  if (modal) modal.classList.remove('hidden');
}

function closeSettingsModal() {
  const modal = document.getElementById('settings-modal');
  if (modal) modal.classList.add('hidden');
}

// ============================================================
// THEME SYSTEM (Obsidian Capture, Midnight OLED, Parchment)
// ============================================================
const THEMES = {
  obsidian: {
    label: 'Obsidienne',
    icon: '<svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"/></svg>',
    color: 'text-amber-400'
  },
  midnight: {
    label: 'Minuit OLED',
    icon: '<svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"/></svg>',
    color: 'text-cyan-400'
  },
  parchment: {
    label: 'Parchemin',
    icon: '<svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"/></svg>',
    color: 'text-amber-600'
  }
};

let currentTheme = localStorage.getItem('croisee_arts_theme') || 'obsidian';

function setTheme(themeName) {
  if (!THEMES[themeName]) themeName = 'obsidian';
  currentTheme = themeName;
  document.documentElement.setAttribute('data-theme', themeName);
  localStorage.setItem('croisee_arts_theme', themeName);

  // Update header button label & icon
  const btnLabel = document.getElementById('theme-btn-label');
  const btnIcon = document.getElementById('theme-btn-icon');
  if (btnLabel) btnLabel.textContent = THEMES[themeName].label;
  if (btnIcon) {
    btnIcon.innerHTML = THEMES[themeName].icon;
    btnIcon.className = THEMES[themeName].color;
  }

  // Update checkmarks in dropdown
  document.querySelectorAll('#theme-dropdown .theme-check').forEach(el => el.classList.add('hidden'));
  const activeCheck = document.querySelector(`#theme-opt-${themeName} .theme-check`);
  if (activeCheck) activeCheck.classList.remove('hidden');

  // Update active border in settings modal
  document.querySelectorAll('.theme-choice-btn').forEach(btn => {
    const isChoice = btn.getAttribute('data-choice') === themeName;
    if (isChoice) {
      btn.classList.add('ring-2', 'ring-amber-400');
    } else {
      btn.classList.remove('ring-2', 'ring-amber-400');
    }
  });

  // Close dropdown if open
  const dropdown = document.getElementById('theme-dropdown');
  if (dropdown) dropdown.classList.add('hidden');
}

function toggleThemeMenu() {
  const dropdown = document.getElementById('theme-dropdown');
  if (dropdown) dropdown.classList.toggle('hidden');
}

// Close dropdown on click outside
window.addEventListener('click', (e) => {
  const container = document.getElementById('theme-selector-container');
  if (container && !container.contains(e.target)) {
    const dropdown = document.getElementById('theme-dropdown');
    if (dropdown) dropdown.classList.add('hidden');
  }
});

// Keyboard shortcuts: Escape to close modal / 'd' to toggle dark themes
window.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    closeImageModal();
    closeSettingsModal();
    const dropdown = document.getElementById('theme-dropdown');
    if (dropdown) dropdown.classList.add('hidden');
  }
  if ((e.key === 'd' || e.key === 'D') && !['INPUT', 'TEXTAREA', 'SELECT'].includes(e.target.tagName)) {
    // Quick toggle between obsidian and midnight
    const nextTheme = currentTheme === 'obsidian' ? 'midnight' : (currentTheme === 'midnight' ? 'parchment' : 'obsidian');
    setTheme(nextTheme);
  }
});

// Init when page loads
window.addEventListener('DOMContentLoaded', () => {
  setTheme(currentTheme);
  renderCourses();
  renderGallery();
  updateTimerDisplay();
  updateMainTimerDisplay();

  // Populate session selector
  const sessionSelect = document.getElementById('session-select');
  if (sessionSelect) {
    sessionSelect.innerHTML = SESSIONS_DATA.map(s => `
      <option value="${s.id}">${s.title} (${s.duration} min)</option>
    `).join('');
  }
});
