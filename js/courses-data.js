// =====================================================================
// REGISTRE CENTRAL DES COURS & SESSIONS DE LA CROISÉE DES ARTS
// =====================================================================
const COURSES_DATA = [
  ...COURSES_DESSIN_P1,
  ...COURSES_DESSIN_P2,
  ...COURSES_GRAPHISME_P1,
  ...COURSES_GRAPHISME_P2,
  ...COURSES_GRAPHISME_P3
];

// Helper pour retrouver un cours par son ID
function getCourseById(id) {
  return COURSES_DATA.find(c => c.id === id) || COURSES_DATA[0];
}

// Helper pour retrouver une session chrono par son ID
function getSessionById(id) {
  return SESSIONS_DATA.find(s => s.id === id) || SESSIONS_DATA[0];
}

if (typeof window !== 'undefined') {
  window.COURSES_DATA = COURSES_DATA;
}

