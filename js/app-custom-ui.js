// =====================================================================
// DIALOGUES MÉTIERS, NOTIFICATIONS TOAST & MENUS DÉROULANTS PERSONNALISÉS
// Neutralisation intégrale des composants et popups système du navigateur
// =====================================================================

let activeDialogCallback = null;
let activeDialogCancelCallback = null;

// Système de Notifications Toast Atelier (remplace les alertes brutes)
function showAtelierToast(opts) {
  const container = document.getElementById('atelier-toast-container');
  if (!container) return;

  const title = opts.title || 'Information Atelier';
  const message = opts.message || '';
  const type = opts.type || 'info';
  const duration = opts.duration || 4500;

  const colorMap = {
    success: { border: 'border-emerald-500', bg: 'bg-emerald-500/15', text: 'text-emerald-400', icon: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>' },
    primary: { border: 'border-[#f8485e]', bg: 'bg-[#f8485e]/15', text: 'text-[#f8485e]', icon: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"/>' },
    warning: { border: 'border-[#ff8d72]', bg: 'bg-[#ff8d72]/15', text: 'text-[#ff8d72]', icon: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"/>' },
    danger: { border: 'border-[#fd5d93]', bg: 'bg-[#fd5d93]/15', text: 'text-[#fd5d93]', icon: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>' },
    info: { border: 'border-[#1d8cf8]', bg: 'bg-[#1d8cf8]/15', text: 'text-[#1d8cf8]', icon: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>' }
  };

  const scheme = colorMap[type] || colorMap.info;
  const toastId = 'toast-' + Date.now() + '-' + Math.floor(Math.random() * 1000);

  const toastEl = document.createElement('div');
  toastEl.id = toastId;
  toastEl.className = `p-4 rounded-2xl bg-[#27293d] border ${scheme.border} shadow-2xl shadow-black/50 flex items-start gap-3 transition-all duration-300 transform translate-x-8 opacity-0 max-w-md w-full pointer-events-auto`;
  toastEl.innerHTML = `
    <div class="w-8 h-8 rounded-xl ${scheme.bg} ${scheme.text} flex items-center justify-center shrink-0 mt-0.5">
      <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">${scheme.icon}</svg>
    </div>
    <div class="flex-1 min-w-0 pr-1">
      <h5 class="text-xs font-bold text-white tracking-wide">${title}</h5>
      <p class="text-[11px] text-slate-300 mt-0.5 leading-relaxed break-words">${message}</p>
    </div>
    <button onclick="dismissAtelierToast('${toastId}')" class="text-slate-400 hover:text-white p-1 rounded-lg transition-colors shrink-0" title="Fermer">
      <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/></svg>
    </button>
  `;

  container.appendChild(toastEl);
  setTimeout(() => {
    toastEl.classList.remove('translate-x-8', 'opacity-0');
  }, 20);

  setTimeout(() => {
    dismissAtelierToast(toastId);
  }, duration);
}

function dismissAtelierToast(id) {
  const toast = document.getElementById(id);
  if (!toast) return;
  toast.classList.add('translate-x-8', 'opacity-0');
  setTimeout(() => {
    if (toast.parentElement) toast.parentElement.removeChild(toast);
  }, 300);
}

// Boîte de Dialogue Métier Atelier (remplace confirm() et alert() modaux)
function showAtelierDialog(opts) {
  const modal = document.getElementById('atelier-dialog-modal');
  const titleEl = document.getElementById('atelier-dialog-title');
  const msgEl = document.getElementById('atelier-dialog-message');
  const confirmBtn = document.getElementById('atelier-dialog-confirm-btn');
  const cancelBtn = document.getElementById('atelier-dialog-cancel-btn');
  const iconWrap = document.getElementById('atelier-dialog-icon-wrap');

  if (!modal || !titleEl || !msgEl || !confirmBtn) return;

  titleEl.textContent = opts.title || 'Notification Atelier';
  msgEl.textContent = opts.message || '';
  confirmBtn.textContent = opts.confirmText || 'Compris';

  activeDialogCallback = typeof opts.onConfirm === 'function' ? opts.onConfirm : null;
  activeDialogCancelCallback = typeof opts.onCancel === 'function' ? opts.onCancel : null;

  if (opts.cancelText && cancelBtn) {
    cancelBtn.textContent = opts.cancelText;
    cancelBtn.classList.remove('hidden');
  } else if (cancelBtn) {
    cancelBtn.classList.add('hidden');
  }

  if (iconWrap && opts.type === 'warning') {
    iconWrap.className = 'w-12 h-12 rounded-2xl bg-[#ff8d72]/15 text-[#ff8d72] flex items-center justify-center shrink-0';
  } else if (iconWrap && opts.type === 'success') {
    iconWrap.className = 'w-12 h-12 rounded-2xl bg-emerald-500/15 text-emerald-400 flex items-center justify-center shrink-0';
  } else if (iconWrap) {
    iconWrap.className = 'w-12 h-12 rounded-2xl bg-[#f8485e]/15 text-[#f8485e] flex items-center justify-center shrink-0';
  }

  modal.classList.remove('hidden');
}

function closeAtelierDialog(confirmed = false) {
  const modal = document.getElementById('atelier-dialog-modal');
  if (modal) modal.classList.add('hidden');

  if (confirmed && activeDialogCallback) {
    activeDialogCallback();
  } else if (!confirmed && activeDialogCancelCallback) {
    activeDialogCancelCallback();
  }

  activeDialogCallback = null;
  activeDialogCancelCallback = null;
}

// Surcharge douce globale pour neutraliser tous les popups système résiduels
window.alert = function(message) {
  showAtelierToast({
    title: 'Notification Atelier',
    message: String(message),
    type: 'info'
  });
};

window.confirm = function(message) {
  showAtelierDialog({
    title: 'Confirmation Atelier',
    message: String(message),
    confirmText: 'Confirmer',
    cancelText: 'Annuler'
  });
  return false;
};

// =====================================================================
// GESTION DU MENU DÉROULANT CUSTOM POUR LES SESSIONS ATELIER
// =====================================================================
function toggleSessionDropdown() {
  const menu = document.getElementById('custom-session-menu');
  const chevron = document.getElementById('custom-session-chevron');
  if (!menu) return;

  const isHidden = menu.classList.contains('hidden');
  if (isHidden) {
    renderCustomSessionDropdown();
    menu.classList.remove('hidden');
    if (chevron) chevron.style.transform = 'rotate(180deg)';
  } else {
    menu.classList.add('hidden');
    if (chevron) chevron.style.transform = 'rotate(0deg)';
  }
}

function renderCustomSessionDropdown() {
  const menu = document.getElementById('custom-session-menu');
  if (!menu || typeof SESSIONS_DATA === 'undefined') return;

  menu.innerHTML = SESSIONS_DATA.map(sess => {
    const isSelected = currentSession && currentSession.id === sess.id;
    const dotColor = sess.discipline === 'graphisme' ? 'bg-[#3b82f6]' : 'bg-[#f8485e]';
    return `
      <div onclick="selectCustomSession('${sess.id}')" class="p-2.5 rounded-xl hover:bg-[#27293d] cursor-pointer flex items-center justify-between gap-2.5 transition-all group ${isSelected ? 'bg-[#27293d] border border-[#2b3553]' : ''}">
        <div class="flex items-center gap-2.5 min-w-0">
          <span class="w-2.5 h-2.5 rounded-full ${dotColor} shrink-0"></span>
          <div class="truncate">
            <p class="text-xs font-bold text-white group-hover:text-[#f8485e] truncate">${sess.title}</p>
            <p class="text-[10px] text-slate-400">${sess.category} · ${sess.duration} min</p>
          </div>
        </div>
        ${isSelected ? '<span class="text-xs font-bold text-emerald-400 shrink-0">✓</span>' : ''}
      </div>
    `;
  }).join('');
}

function selectCustomSession(id) {
  if (typeof selectSession === 'function') {
    selectSession(id);
  }

  const label = document.getElementById('custom-session-label');
  const sess = typeof SESSIONS_DATA !== 'undefined' ? SESSIONS_DATA.find(s => s.id === id) : null;
  if (label && sess) {
    const dotColor = sess.discipline === 'graphisme' ? 'bg-[#3b82f6]' : 'bg-[#f8485e]';
    label.innerHTML = `
      <span class="w-2 h-2 rounded-full ${dotColor} shrink-0"></span>
      <span class="truncate">${sess.title}</span>
    `;
  }

  toggleSessionDropdown();
  showAtelierToast({
    title: 'Session Atelier Activée',
    message: `${sess ? sess.title : 'Session sélectionnée'} est prête pour votre atelier.`,
    type: 'success'
  });
}

// Fermeture au clic extérieur des menus déroulants personnalisés
window.addEventListener('click', (e) => {
  const sessionDropdown = document.getElementById('custom-session-dropdown-container');
  const sessionMenu = document.getElementById('custom-session-menu');
  const chevron = document.getElementById('custom-session-chevron');

  if (sessionDropdown && !sessionDropdown.contains(e.target) && sessionMenu && !sessionMenu.classList.contains('hidden')) {
    sessionMenu.classList.add('hidden');
    if (chevron) chevron.style.transform = 'rotate(0deg)';
  }

  const themeContainer = document.getElementById('theme-selector-container');
  const themeDropdown = document.getElementById('theme-dropdown');
  if (themeContainer && !themeContainer.contains(e.target) && themeDropdown && !themeDropdown.classList.contains('hidden')) {
    themeDropdown.classList.add('hidden');
  }
});

// Compatibilité avec les actions du portail et leurs notifications.
function showCustomToast(title, message, type = 'info') {
  const escapeText = value => String(value ?? '').replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
  return showAtelierToast({title: escapeText(title), message: escapeText(message), type});
}
