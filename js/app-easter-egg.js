// =====================================================================
// EASTER EGG SECRET : PROTOCOLE ATELIER RÉTRO ARCADE GPO SARL
// Déclencheurs : Séquence Konami Code au clavier OU 5 clics rapides sur le logo CA
// =====================================================================

let konamiSequence = [];
const konamiTarget = [
  'ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown',
  'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight',
  'b', 'a'
];

let logoClickCount = 0;
let logoClickTimer = null;

// Son rétro 8-bit généré en temps réel via Web Audio API
function playArcadeVictoryJingle() {
  try {
    const AudioContextClass = window.AudioContext || window.webkitAudioContext;
    if (!AudioContextClass) return;
    const ctx = new AudioContextClass();

    const notes = [
      { freq: 523.25, time: 0.00, dur: 0.10 }, // C5
      { freq: 659.25, time: 0.10, dur: 0.10 }, // E5
      { freq: 783.99, time: 0.20, dur: 0.10 }, // G5
      { freq: 987.77, time: 0.30, dur: 0.12 }, // B5
      { freq: 1046.50, time: 0.42, dur: 0.35 } // C6
    ];

    notes.forEach(n => {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = 'square';
      osc.frequency.setValueAtTime(n.freq, ctx.currentTime + n.time);

      gain.gain.setValueAtTime(0.12, ctx.currentTime + n.time);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + n.time + n.dur);

      osc.connect(gain);
      gain.connect(ctx.destination);

      osc.start(ctx.currentTime + n.time);
      osc.stop(ctx.currentTime + n.time + n.dur);
    });
  } catch (e) {
    console.log('Audio synthèse non disponible', e);
  }
}

// Pluie de particules néon d'atelier (confettis vectoriels)
function launchNeonSparks() {
  const canvas = document.createElement('canvas');
  canvas.id = 'easter-egg-canvas';
  canvas.className = 'fixed inset-0 pointer-events-none z-50 w-full h-full';
  document.body.appendChild(canvas);

  const ctx = canvas.getContext('2d');
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  const colors = ['#e14eca', '#ba54f5', '#00f2c3', '#0098f0', '#ff8d72', '#ffffff'];
  const particles = [];
  const count = 90;

  for (let i = 0; i < count; i++) {
    particles.push({
      x: canvas.width / 2 + (Math.random() - 0.5) * 200,
      y: canvas.height / 3 + (Math.random() - 0.5) * 100,
      vx: (Math.random() - 0.5) * 12,
      vy: (Math.random() - 0.5) * 12 - 4,
      size: Math.random() * 6 + 3,
      color: colors[Math.floor(Math.random() * colors.length)],
      alpha: 1,
      decay: Math.random() * 0.015 + 0.01
    });
  }

  let animId = null;
  function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    let alive = 0;

    particles.forEach(p => {
      if (p.alpha > 0) {
        alive++;
        p.x += p.vx;
        p.y += p.vy;
        p.vy += 0.22; // Gravité
        p.alpha -= p.decay;

        ctx.save();
        ctx.globalAlpha = Math.max(0, p.alpha);
        ctx.fillStyle = p.color;
        ctx.shadowBlur = 8;
        ctx.shadowColor = p.color;
        ctx.fillRect(p.x, p.y, p.size, p.size);
        ctx.restore();
      }
    });

    if (alive > 0) {
      animId = requestAnimationFrame(animate);
    } else {
      cancelAnimationFrame(animId);
      if (canvas.parentElement) {
        canvas.parentElement.removeChild(canvas);
      }
    }
  }

  animate();
}

// Déclenchement de l'Easter Egg d'atelier
function triggerSecretEasterEgg() {
  playArcadeVictoryJingle();
  launchNeonSparks();

  if (typeof showAtelierDialog === 'function') {
    showAtelierDialog({
      title: 'Protocole Secret Déverrouillé : Mode Atelier Rétro Arcade',
      message: 'Félicitations, vous avez découvert l\'Easter Egg secret de La Croisée des Arts et de l\'Atelier GPO SARL ! Mascotte officielle : Le Panda Roux de l\'Atelier. Badge secret débloqué : Initié du Rétro Gaming & des Gabarits 1:1. Souhaitez-vous explorer directement le cours sur le gabarit industriel de borne d\'arcade ?',
      confirmText: 'Accéder au Cours Borne Arcade (G-15)',
      cancelText: 'Fermer le Secret',
      type: 'primary',
      onConfirm: () => {
        if (typeof showTab === 'function') showTab('cours');
        if (typeof selectCourse === 'function') selectCourse('cours-g15-gabarit-arcade-1-1');
      }
    });
  } else if (typeof showAtelierToast === 'function') {
    showAtelierToast({
      title: 'Secret Déverrouillé !',
      message: 'Mode Rétro Arcade activé. Mascotte officielle : Le Panda Roux.',
      type: 'success'
    });
  }
}

// Détection Konami Code au clavier
window.addEventListener('keydown', (e) => {
  const key = e.key;
  konamiSequence.push(key);
  if (konamiSequence.length > konamiTarget.length) {
    konamiSequence.shift();
  }

  const isMatch = konamiSequence.every((val, idx) => val.toLowerCase() === konamiTarget[idx].toLowerCase());
  if (isMatch) {
    konamiSequence = [];
    triggerSecretEasterEgg();
  }
});

// Détection tactile / souris : 5 clics rapides sur le logo CA
function handleLogoEasterEggClick(e) {
  if (e) e.stopPropagation();
  logoClickCount++;

  if (logoClickTimer) clearTimeout(logoClickTimer);
  logoClickTimer = setTimeout(() => {
    logoClickCount = 0;
  }, 1800);

  if (logoClickCount >= 5) {
    logoClickCount = 0;
    clearTimeout(logoClickTimer);
    triggerSecretEasterEgg();
  }
}
