// =====================================================================
// GESTION DES COMPTES : STAGIAIRE ATELIER vs ADMINISTRATEUR (TUTEUR)
// PARCOURS SÉQUENCÉ : SEMAINE 1 DESSIN / SEMAINE 2 GRAPHISME VERROUILLÉ
// =====================================================================

const STAGE_STORAGE_KEY_ROLE = 'croisee_active_role';
const STAGE_STORAGE_KEY_UNLOCKED = 'croisee_graphisme_unlocked';

// État courant
let currentRole = localStorage.getItem(STAGE_STORAGE_KEY_ROLE) || 'stagiaire';
let isGraphismeUnlocked = localStorage.getItem(STAGE_STORAGE_KEY_UNLOCKED) === 'true';

// Données de la stagiaire modèle (débutante absolue en immersion atelier)
const STAGIAIRE_PROFILE = {
  nom: "Sarah Martin",
  titre: "Stagiaire Débutante en Immersion Atelier",
  cursus: "Semaine 1 : Initiation aux Fondamentaux du Dessin Réel",
  statut: "En cours d'évaluation tuteur",
  semaineCourante: 1,
  avatar: "assets/etudiant_portrait_lea.jpg"
};

const ADMIN_PROFILE = {
  nom: "Maître de Stage",
  titre: "Direction d'Atelier & Validation Pédagogique",
  cursus: "Supervision des Apprentis & Validation de Niveau",
  statut: "Administrateur habilité",
  avatar: "assets/portrait_classique_masterclass.jpg"
};

function getActiveRole() {
  return currentRole;
}

function getGraphismeUnlockedState() {
  return isGraphismeUnlocked;
}

function isGraphismeLockedForCurrent() {
  if (currentRole === 'admin') return false;
  return !isGraphismeUnlocked;
}

function switchUserRole(newRole) {
  currentRole = newRole === 'admin' ? 'admin' : 'stagiaire';
  localStorage.setItem(STAGE_STORAGE_KEY_ROLE, currentRole);
  
  if (typeof playChime === 'function') playChime(newRole === 'admin' ? 520 : 440, 0.2);
  
  if (typeof showCustomToast === 'function') {
    const msg = currentRole === 'admin'
      ? "Session Administrateur active : Contrôle tuteur et validation du niveau stagiaire."
      : "Session Stagiaire active : Parcours Semaine 1 (Fondamentaux du Dessin).";
    showCustomToast("Changement de Compte", msg, "info");
  }

  updateAppForCurrentRole();
}

function toggleGraphismeUnlockByAdmin(state) {
  if (currentRole !== 'admin') {
    if (typeof showCustomToast === 'function') {
      showCustomToast("Action Réservée", "Seul le tuteur de stage peut valider le niveau.", "warning");
    }
    return;
  }

  isGraphismeUnlocked = typeof state === 'boolean' ? state : !isGraphismeUnlocked;
  localStorage.setItem(STAGE_STORAGE_KEY_UNLOCKED, isGraphismeUnlocked ? 'true' : 'false');

  if (typeof playChime === 'function') playChime(isGraphismeUnlocked ? 660 : 330, 0.25);

  if (typeof showCustomToast === 'function') {
    if (isGraphismeUnlocked) {
      showCustomToast("Niveau Validé", "Le niveau dessin de Sarah est validé. La filière Graphisme (Semaine 2) est débloquée.", "success");
    } else {
      showCustomToast("Section Verrouillée", "La filière Graphisme (Semaine 2) est verrouillée pour la stagiaire.", "warning");
    }
  }

  updateAppForCurrentRole();
}

function handleCourseClickSecurity(courseId) {
  const isGraph = courseId.includes('-g') || courseId.startsWith('cours-g');
  if (isGraph && isGraphismeLockedForCurrent()) {
    showLockedGraphismeDialog(courseId);
    return false;
  }
  return true;
}

function showLockedGraphismeDialog(courseId) {
  if (typeof showCustomToast === 'function') {
    showCustomToast(
      "Section Graphisme & PAO Verrouillée",
      "Cursus Semaine 2 : Sarah doit d'abord assimiler les bases du dessin (Semaine 1). Votre tuteur de stage doit valider votre niveau.",
      "warning"
    );
  }
}

function updateAppForCurrentRole() {
  updateHeaderRoleUI();
  updateSidebarProfileUI();
  updateSidebarGraphismeLockUI();
  updateDashboardRoleUI();
  updateGraphismeTabLockUI();
  
  if (typeof renderCourses === 'function' && document.getElementById('content-cours') && !document.getElementById('content-cours').classList.contains('hidden')) {
    renderCourses();
  }
}

function updateHeaderRoleUI() {
  const badgeContainer = document.getElementById('role-switcher-container');
  if (!badgeContainer) return;

  const isAdmin = currentRole === 'admin';
  const roleName = isAdmin ? "Compte Administrateur" : "Compte Stagiaire";
  const userSub = isAdmin ? "Maître de Stage" : "Sarah M. (Débutante)";
  const pillColor = isAdmin
    ? "bg-purple-500/20 text-purple-300 border-purple-500/40"
    : "bg-amber-500/20 text-amber-300 border-amber-500/40";

  badgeContainer.innerHTML = `
    <div class="flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#1f2233] border border-[#2b3553] text-xs">
      <span class="w-2 h-2 rounded-full ${isAdmin ? 'bg-purple-400 animate-pulse' : 'bg-amber-400'}"></span>
      <div class="flex flex-col text-left">
        <span class="text-[10px] uppercase font-mono font-bold leading-none ${isAdmin ? 'text-purple-300' : 'text-amber-300'}">${roleName}</span>
        <span class="text-[11px] font-semibold text-white leading-tight">${userSub}</span>
      </div>
      <button onclick="switchUserRole('${isAdmin ? 'stagiaire' : 'admin'}')" class="ml-1.5 px-2.5 py-1 rounded-lg text-[10px] font-bold ${isAdmin ? 'bg-[#27293d] hover:bg-purple-900/40 text-purple-200' : 'bg-[#27293d] hover:bg-amber-900/40 text-amber-200'} transition-all border border-white/10" title="Basculer de compte">
        ${isAdmin ? 'Vue Stagiaire' : 'Mode Admin'}
      </button>
    </div>
  `;
}

function updateSidebarProfileUI() {
  const sidebarFooter = document.getElementById('sidebar-user-footer');
  if (!sidebarFooter) return;

  const isAdmin = currentRole === 'admin';
  const profile = isAdmin ? ADMIN_PROFILE : STAGIAIRE_PROFILE;

  sidebarFooter.innerHTML = `
    <div class="flex items-center gap-3">
      <img src="${profile.avatar}" alt="Avatar" class="w-9 h-9 rounded-full border ${isAdmin ? 'border-purple-400' : 'border-amber-400'} object-cover" />
      <div class="min-w-0">
        <p class="text-xs font-bold text-white leading-tight truncate">${profile.nom}</p>
        <p class="text-[10px] ${isAdmin ? 'text-purple-300' : 'text-amber-300'} truncate font-mono">${isAdmin ? 'Tuteur Atelier' : 'Stagiaire Semaine 1'}</p>
      </div>
    </div>
    <button onclick="switchUserRole('${isAdmin ? 'stagiaire' : 'admin'}')" class="p-1.5 rounded-lg bg-[#20242c] hover:bg-[#2b3553] text-slate-300 text-[10px] font-bold transition-all" title="Basculer le rôle">
      ${isAdmin ? 'Stagiaire' : 'Admin'}
    </button>
  `;
}

function updateSidebarGraphismeLockUI() {
  const isLocked = isGraphismeLockedForCurrent();
  const group = document.getElementById('sidebar-group-graphisme');
  if (!group) return;

  const badge = group.querySelector('.text-\\[9px\\]');
  if (badge) {
    if (isLocked) {
      badge.className = 'text-[9px] font-mono font-bold px-1.5 py-0.5 rounded bg-rose-500/20 text-rose-300 border border-rose-500/30 flex items-center gap-1';
      badge.innerHTML = `<span>🔒</span><span>Semaine 2</span>`;
    } else {
      badge.className = 'text-[9px] font-mono font-bold px-1.5 py-0.5 rounded bg-[#00f2c3]/20 text-[#00f2c3]';
      badge.textContent = '16 cours';
    }
  }

  // Mettre à jour l'état visuel de chaque bouton de cours G-01 à G-16
  document.querySelectorAll('#sidebar-list-graphisme .course-nav-btn').forEach(btn => {
    const courseId = btn.getAttribute('data-course-id') || '';
    if (isLocked) {
      btn.classList.add('opacity-50', 'cursor-not-allowed');
      btn.onclick = () => { handleCourseClickSecurity(courseId); };
    } else {
      btn.classList.remove('opacity-50', 'cursor-not-allowed');
      btn.onclick = () => { showTab('cours'); selectCourse(courseId); };
    }
  });
}

function updateGraphismeTabLockUI() {
  const graphTabBtn = document.getElementById('btn-graphisme');
  const graphContent = document.getElementById('content-graphisme');
  const isLocked = isGraphismeLockedForCurrent();

  if (graphTabBtn) {
    if (isLocked) {
      graphTabBtn.classList.add('opacity-60');
      graphTabBtn.title = "Section verrouillée (Semaine 2) - En attente de validation tuteur";
    } else {
      graphTabBtn.classList.remove('opacity-60');
      graphTabBtn.title = "";
    }
  }

  const lockedBanner = document.getElementById('graphisme-locked-screen');
  const normalGraphContent = document.getElementById('graphisme-normal-content');
  if (lockedBanner && normalGraphContent) {
    if (isLocked) {
      lockedBanner.classList.remove('hidden');
      normalGraphContent.classList.add('hidden');
    } else {
      lockedBanner.classList.add('hidden');
      normalGraphContent.classList.remove('hidden');
    }
  }
}

function updateDashboardRoleUI() {
  const adminPanel = document.getElementById('admin-supervision-panel');
  const stagiairePanel = document.getElementById('stagiaire-progress-panel');
  const isAdmin = currentRole === 'admin';

  if (adminPanel) {
    adminPanel.classList.toggle('hidden', !isAdmin);
  }
  if (stagiairePanel) {
    stagiairePanel.classList.toggle('hidden', isAdmin);
  }

  // Synchronisation de l'onglet Espace Étudiant (Tab 5)
  const dAvatar = document.getElementById('dashboard-user-avatar');
  const dName = document.getElementById('dashboard-user-name');
  const dSub = document.getElementById('dashboard-user-sub');
  const dBadge = document.getElementById('dashboard-user-badge');
  const kpiGraph = document.getElementById('kpi-graphisme-status');
  const kpiVal = document.getElementById('kpi-validation-status');

  const profile = isAdmin ? ADMIN_PROFILE : STAGIAIRE_PROFILE;
  if (dAvatar) dAvatar.src = profile.avatar;
  if (dName) dName.textContent = profile.nom;
  if (dSub) dSub.textContent = profile.titre;

  if (dBadge) {
    if (isAdmin) {
      dBadge.className = 'px-4 py-2 rounded-xl bg-purple-500/10 border border-purple-500/30 text-purple-300 text-xs font-bold';
      dBadge.textContent = 'Session Administrateur';
    } else {
      dBadge.className = isGraphismeUnlocked 
        ? 'px-4 py-2 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-xs font-bold'
        : 'px-4 py-2 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-bold';
      dBadge.textContent = isGraphismeUnlocked ? 'Niveau Validé (Semaines 1 & 2)' : 'Semaine 1 : Dessin en cours';
    }
  }

  if (kpiGraph) {
    kpiGraph.textContent = isGraphismeUnlocked ? 'Débloquée' : 'Verrouillée';
    kpiGraph.className = isGraphismeUnlocked ? 'text-lg font-black text-emerald-400 mt-1' : 'text-lg font-black text-rose-400 mt-1';
  }
  if (kpiVal) {
    kpiVal.textContent = isGraphismeUnlocked ? 'Validée (Félicitations)' : 'En Attente';
    kpiVal.className = isGraphismeUnlocked ? 'text-lg font-black text-emerald-400 mt-1' : 'text-lg font-black text-amber-300 mt-1';
  }
}

// Initialisation au chargement
document.addEventListener('DOMContentLoaded', () => {
  updateAppForCurrentRole();
});

if (typeof window !== 'undefined') {
  window.currentRole = currentRole;
  window.isGraphismeUnlocked = isGraphismeUnlocked;
  window.switchUserRole = switchUserRole;
  window.toggleGraphismeUnlockByAdmin = toggleGraphismeUnlockByAdmin;
  window.handleCourseClickSecurity = handleCourseClickSecurity;
  window.updateAppForCurrentRole = updateAppForCurrentRole;
  window.isGraphismeLockedForCurrent = isGraphismeLockedForCurrent;
}
