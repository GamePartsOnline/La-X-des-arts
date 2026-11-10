// =====================================================================
// CHRONOMÈTRE, STUDIO D'ATELIER & ATELIER TRADITIONNEL DUNE (FEUILLE)
// =====================================================================
let timerInterval = null;
let timeLeft = 15 * 60;
let initialTime = 15 * 60;
let isTimerRunning = false;

let mainTimeLeft = 15 * 60;
let mainTimerInterval = null;
let isMainTimerRunning = false;
let webcamStream = null;

// Timer Studio Tab
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
    if (btn) btn.textContent = 'Démarrer';
  } else {
    isTimerRunning = true;
    if (btn) btn.textContent = 'Pause';
    timerInterval = setInterval(() => {
      if (timeLeft > 0) {
        timeLeft--;
        updateTimerDisplay();
      } else {
        clearInterval(timerInterval);
        isTimerRunning = false;
        if (btn) btn.textContent = 'Terminé';
        playChime(520, 0.6);
        if (typeof showAtelierDialog === 'function') {
          showAtelierDialog({
            title: 'Chronomètre d\'Atelier Écoulé',
            message: 'Le temps imparti pour cet exercice est arrivé à expiration. Munissez-vous de votre feuille de dessin physique pour déposer votre travail pour correction.',
            confirmText: 'Accéder au Dépôt de Devoir',
            cancelText: 'Poursuivre le Dessin',
            type: 'primary',
            onConfirm: () => showTab('cours')
          });
        }
      }
    }, 1000);
  }
}

function resetTimer(seconds) {
  clearInterval(timerInterval);
  isTimerRunning = false;
  initialTime = seconds;
  timeLeft = seconds;
  updateTimerDisplay();
  const btn = document.getElementById('timer-toggle-btn');
  if (btn) btn.textContent = 'Démarrer';
}

// Timer Dashboard Nouvel Élève
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
    if (btn) btn.textContent = 'Démarrer la Pose';
  } else {
    isMainTimerRunning = true;
    if (btn) btn.textContent = 'Pause';
    mainTimerInterval = setInterval(() => {
      if (mainTimeLeft > 0) {
        mainTimeLeft--;
        updateMainTimerDisplay();
      } else {
        clearInterval(mainTimerInterval);
        isMainTimerRunning = false;
        if (btn) btn.textContent = 'Pose Terminée';
        playChime(587, 0.5);
      }
    }, 1000);
  }
}

function resetTimerMain(seconds) {
  clearInterval(mainTimerInterval);
  isMainTimerRunning = false;
  mainTimeLeft = seconds;
  updateMainTimerDisplay();
  const btn = document.getElementById('main-timer-toggle-btn');
  if (btn) btn.textContent = 'Démarrer la Pose';
}

// Gestion des Séances & Atelier Dune
function selectSession(sessionId) {
  const found = SESSIONS_DATA.find(s => s.id === sessionId);
  if (found) {
    currentSession = found;
    resetTimer(found.duration * 60);

    const refImg = document.getElementById('session-ref-img');
    const noticeEl = document.getElementById('paper-only-notice');
    const posesContainer = document.getElementById('session-poses-container');
    const canvasWrap = document.getElementById('canvas-workspace-wrapper');
    const paperModule = document.getElementById('paper-submission-module');

    if (refImg) refImg.src = found.image;
    if (found.isTraditionalPaper) {
      if (noticeEl) noticeEl.classList.remove('hidden');
      if (posesContainer) posesContainer.classList.remove('hidden');
      if (canvasWrap) canvasWrap.classList.add('hidden');
      if (paperModule) paperModule.classList.remove('hidden');
      renderPosesSelector(found);
    } else {
      if (noticeEl) noticeEl.classList.add('hidden');
      if (posesContainer) posesContainer.classList.add('hidden');
      if (canvasWrap) canvasWrap.classList.remove('hidden');
      if (paperModule) paperModule.classList.add('hidden');
    }
  }
}

function renderPosesSelector(session) {
  const container = document.getElementById('session-poses-list');
  if (!container || !session.poses) return;

  container.innerHTML = session.poses.map((p, idx) => `
    <div onclick="selectDunePose(${idx})" class="p-2 rounded-xl bg-[#131417] border border-[#272b35] hover:border-[#d6a55b] cursor-pointer flex items-center gap-2.5 transition-all group">
      <img src="${p.image}" alt="${p.title}" class="w-12 h-12 rounded-lg object-cover shrink-0 border border-[#272b35] group-hover:scale-105 transition-transform" />
      <div class="overflow-hidden">
        <p class="text-[11px] font-bold text-white group-hover:text-[#d6a55b] truncate">${p.title}</p>
        <p class="text-[10px] text-slate-400 truncate">${p.subtitle}</p>
      </div>
    </div>
  `).join('');
}

function selectDunePose(index) {
  if (!currentSession.poses || !currentSession.poses[index]) return;
  const pose = currentSession.poses[index];
  const refImg = document.getElementById('session-ref-img');
  const badge = document.getElementById('current-pose-badge');
  if (refImg) refImg.src = pose.image;
  if (badge) badge.textContent = `Pose ${index + 1} / ${currentSession.poses.length} : ${pose.title}`;
}

function randomDunePose() {
  if (!currentSession.poses) return;
  const randIdx = Math.floor(Math.random() * currentSession.poses.length);
  selectDunePose(randIdx);
}

function handlePaperUpload(event) {
  const file = event.target.files && event.target.files[0];
  if (!file) return;

  const reader = new FileReader();
  reader.onload = function(e) {
    const previewImg = document.getElementById('paper-preview-img');
    const emptyState = document.getElementById('paper-upload-empty');
    const filledState = document.getElementById('paper-upload-filled');

    if (previewImg) previewImg.src = e.target.result;
    if (emptyState) emptyState.classList.add('hidden');
    if (filledState) filledState.classList.remove('hidden');
  };
  reader.readAsDataURL(file);
}

function applyPaperFilter(mode) {
  const img = document.getElementById('paper-preview-img');
  if (!img) return;

  if (mode === 'normal') img.style.filter = 'none';
  if (mode === 'grayscale') img.style.filter = 'grayscale(100%) contrast(140%) brightness(105%)';
  if (mode === 'contrast') img.style.filter = 'contrast(170%) brightness(95%)';
}

function submitPaperDrawing() {
  const feedbackEl = document.getElementById('paper-submission-feedback');
  const submitBtn = document.getElementById('paper-submit-btn');

  if (submitBtn) {
    submitBtn.textContent = 'Croquis transmis avec succès !';
    submitBtn.classList.remove('gold-pill-active');
    submitBtn.classList.add('bg-emerald-500', 'text-slate-950');
  }

  if (feedbackEl) {
    feedbackEl.classList.remove('hidden');
    playChime(660, 0.4);
  }
}

async function startWebcamCapture() {
  const video = document.getElementById('paper-webcam-video');
  const webcamContainer = document.getElementById('paper-webcam-container');
  const emptyState = document.getElementById('paper-upload-empty');

  try {
    webcamStream = await navigator.mediaDevices.getUserMedia({ video: { facingMode: 'environment' } });
    if (video) {
      video.srcObject = webcamStream;
      video.play();
    }
    if (webcamContainer) webcamContainer.classList.remove('hidden');
    if (emptyState) emptyState.classList.add('hidden');
  } catch (err) {
    if (typeof showAtelierToast === 'function') {
      showAtelierToast({
        title: 'Accès Caméra Restreint',
        message: 'Impossible d\'activer la webcam en direct. Vous pouvez sélectionner directement la photo de votre feuille depuis vos fichiers.',
        type: 'warning'
      });
    }
  }
}

function captureWebcamPhoto() {
  const video = document.getElementById('paper-webcam-video');
  const previewImg = document.getElementById('paper-preview-img');
  const webcamContainer = document.getElementById('paper-webcam-container');
  const filledState = document.getElementById('paper-upload-filled');

  if (!video) return;
  const canvas = document.createElement('canvas');
  canvas.width = video.videoWidth || 1280;
  canvas.height = video.videoHeight || 720;
  const ctx = canvas.getContext('2d');
  ctx.drawImage(video, 0, 0, canvas.width, canvas.height);

  if (previewImg) previewImg.src = canvas.toDataURL('image/jpeg', 0.9);
  if (webcamContainer) webcamContainer.classList.add('hidden');
  if (filledState) filledState.classList.remove('hidden');

  if (webcamStream) {
    webcamStream.getTracks().forEach(track => track.stop());
    webcamStream = null;
  }
}

// Auto-Évaluation de la Galerie
function updateEvaluationScore() {
  const c1 = parseFloat(document.getElementById('crit-1')?.value || 9);
  const c2 = parseFloat(document.getElementById('crit-2')?.value || 9);
  const c3 = parseFloat(document.getElementById('crit-3')?.value || 9);
  const c4 = parseFloat(document.getElementById('crit-4')?.value || 9);
  const c5 = parseFloat(document.getElementById('crit-5')?.value || 9);

  document.getElementById('label-crit-1').textContent = c1 + ' / 10';
  document.getElementById('label-crit-2').textContent = c2 + ' / 10';
  document.getElementById('label-crit-3').textContent = c3 + ' / 10';
  document.getElementById('label-crit-4').textContent = c4 + ' / 10';
  document.getElementById('label-crit-5').textContent = c5 + ' / 10';

  const avg = ((c1 + c2 + c3 + c4 + c5) / 5).toFixed(1);
  const resultEl = document.getElementById('eval-score-result');
  if (resultEl) resultEl.textContent = avg + ' / 10';
}
