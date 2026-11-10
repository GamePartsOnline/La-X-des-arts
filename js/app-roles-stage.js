// =====================================================================
// ARCHITECTURE À 3 RÔLES STRICTEMENT : STAGIAIRE, VISITEUR, ADMIN
// ENTRÉE DIRECTE SUR LA CONNEXION & REDIRECTION DYNAMIQUE SELON LE RÔLE
// =====================================================================

let currentRole = null; // null = non connecté (écran Login affiché)
let currentCourseAccess = 'aucun'; // 'dessin' | 'graphisme' | 'complet' | 'aucun'
let isGraphismeUnlocked = false;

const PROFILES_CATALOG = {
  stagiaire: {
    role: "stagiaire",
    label: "Stagiaire",
    badge: "Stagiaire",
    nom: "Sarah Martin",
    titre: "Espace Stagiaire · Suivi 4 Semaines (J01-J20) & Cours autorisés",
    defaultTab: "stagiaire"
  },
  visiteur: {
    role: "visiteur",
    label: "Visiteur",
    badge: "Visiteur",
    nom: "Camille Visiteur",
    titre: "Espace Visiteur · Métiers, Annuaire des Écoles & Tarifs, Actu & Jobs",
    defaultTab: "visiteur"
  },
  admin: {
    role: "admin",
    label: "Admin",
    badge: "Administrateur",
    nom: "Direction Atelier",
    titre: "Panneau d'Administration Global & Espace Maître de Stage",
    defaultTab: "admin"
  }
};

const STAGIAIRE_PROFILE = PROFILES_CATALOG.stagiaire;
const ADMIN_PROFILE = PROFILES_CATALOG.admin;

function normalizeRoleName(role) {
  if (role === 'eleve') return 'stagiaire';
  if (role === 'prof' || role === 'professeur' || role === 'modo') return 'visiteur';
  return role;
}

function getProfileMeta(role) {
  const r = normalizeRoleName(role);
  return PROFILES_CATALOG[r] || PROFILES_CATALOG.visiteur;
}

function isStaffRole(role = currentRole) {
  const r = normalizeRoleName(role);
  return r === 'admin';
}

function isProfOrAdminRole(role = currentRole) {
  return isStaffRole(role);
}

function getActiveRole() {
  return normalizeRoleName(currentRole) || 'visiteur';
}

function getActiveCourseAccess() {
  const r = getActiveRole();
  if (r === 'admin') return 'complet';
  if (r === 'visiteur') return 'aucun';
  return currentCourseAccess || 'dessin';
}

function getGraphismeUnlockedState() {
  return isGraphismeUnlocked || currentCourseAccess === 'complet' || currentCourseAccess === 'graphisme';
}

function isCourseAllowedForCurrentUser(courseId) {
  const r = getActiveRole();
  if (r === 'admin') return true;
  if (r === 'visiteur' || currentCourseAccess === 'aucun') return false;
  const isGraph = courseId.includes('-g') || courseId.startsWith('cours-g');
  if (currentCourseAccess === 'complet') return true;
  if (currentCourseAccess === 'graphisme') return isGraph;
  if (currentCourseAccess === 'dessin') return !isGraph || isGraphismeUnlocked;
  return !isGraph;
}

function isGraphismeLockedForCurrent() {
  const r = getActiveRole();
  if (r === 'admin') return false;
  return !(currentCourseAccess === 'complet' || currentCourseAccess === 'graphisme' || isGraphismeUnlocked);
}

function handleCourseClickSecurity(courseId) {
  if (!isCourseAllowedForCurrentUser(courseId)) {
    if (typeof showCustomToast === 'function') {
      showCustomToast(
        "Accès réservé",
        "Les cours d'atelier sont réservés aux stagiaires selon l'ouverture validée par l'Administrateur.",
        "warning"
      );
    }
    return false;
  }
  return true;
}

// Onglets autorisés dans la barre supérieure selon le rôle connecté (3 rôles stricts)
function getRoleNavTabs(role) {
  const r = normalizeRoleName(role);
  if (r === 'admin') {
    return [
      { id: 'admin', label: 'Administration & Tuteur' },
      { id: 'cours', label: 'Programme des Cours' },
      { id: 'metiers', label: '24 Métiers' },
      { id: 'ecoles', label: 'Écoles & Tarifs (26)' },
      { id: 'veille', label: 'ACTU & NEWS' },
      { id: 'jobs', label: 'JOBS & STAGES' },
      { id: 'exposition', label: 'Exposition' }
    ];
  }
  if (r === 'stagiaire') {
    return [
      { id: 'stagiaire', label: 'Suivi Stage (J01-J20)' },
      { id: 'cours', label: 'Mes Cours' },
      { id: 'techniques', label: 'Techniques' },
      { id: 'metiers', label: '24 Métiers' },
      { id: 'ecoles', label: 'Écoles & Tarifs (26)' },
      { id: 'veille', label: 'ACTU & NEWS' },
      { id: 'jobs', label: 'JOBS & STAGES' }
    ];
  }
  // Rôle visiteur : page limitée (pas d'accès aux cours privés ni à l'administration)
  return [
    { id: 'visiteur', label: 'Accueil Visiteur' },
    { id: 'metiers', label: '24 Métiers' },
    { id: 'ecoles', label: 'Écoles & Tarifs (26)' },
    { id: 'veille', label: 'ACTU & NEWS' },
    { id: 'jobs', label: 'JOBS & STAGES' },
    { id: 'exposition', label: 'Exposition' }
  ];
}

function renderRoleHeaderNav() {
  const navEl = document.getElementById('role-main-nav');
  if (!navEl || !currentRole) return;
  const tabs = getRoleNavTabs(currentRole);
  navEl.innerHTML = tabs.map(t => `
    <button id="btn-${t.id}" onclick="showTab('${t.id}')" class="nav-btn px-3.5 py-2 rounded-lg text-sm font-medium text-slate-300 hover:text-white hover:bg-[#1e222b] transition-all whitespace-nowrap">
      ${t.label}
    </button>
  `).join('');
}

function updateAppForCurrentRole() {
  const loginGate = document.getElementById('login-gate-view');
  const appHeader = document.getElementById('app-top-header');
  const appMain = document.getElementById('app-main-workspace');

  if (!currentRole) {
    if (loginGate) loginGate.classList.remove('hidden');
    if (appHeader) appHeader.classList.add('hidden');
    if (appMain) appMain.classList.add('hidden');
    return;
  }

  if (loginGate) loginGate.classList.add('hidden');
  if (appHeader) appHeader.classList.remove('hidden');
  if (appMain) appMain.classList.remove('hidden');

  renderRoleHeaderNav();
  if (typeof updateHeaderRoleUI === 'function') updateHeaderRoleUI();
}

function switchUserRole() {}
function toggleGraphismeUnlockByAdmin() {}
function updateSidebarProfileUI() {}
function updateSidebarGraphismeLockUI() {}
function updateGraphismeTabLockUI() {}
function updateDashboardRoleUI() {}

if (typeof window !== 'undefined') {
  Object.assign(window, {
    PROFILES_CATALOG, getProfileMeta, isStaffRole, isProfOrAdminRole, getActiveRole,
    getActiveCourseAccess, getGraphismeUnlockedState, isCourseAllowedForCurrentUser,
    isGraphismeLockedForCurrent, handleCourseClickSecurity, getRoleNavTabs,
    renderRoleHeaderNav, updateAppForCurrentRole, switchUserRole, toggleGraphismeUnlockByAdmin
  });
}
