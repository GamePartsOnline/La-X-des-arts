// =====================================================================
// REGISTRE DES LEÇONS DU STAGE ATELIER - LA CROISÉE DES ARTS
// DONNÉES RÉELLES VÉRIFIÉES D'ATELIER (AUCUNE FAUSSE ATTRIBUTION)
// =====================================================================

const DEFAULT_STAGE_LESSONS = [
  {
    id: "lecon-d01",
    semaine: 1,
    filiere: "dessin",
    num: "L-01",
    titre: "Croquis d'observation & animaux sur papier",
    image: "assets/session_sargent_croquis.jpg",
    consigne: "Croquer au crayon graphite sur papier réel différentes attitudes et têtes d'animaux (lapin, chouette, oiseau). Travailler le trait direct sans gommer excessivement.",
    support: "Planche d'exercices réalisés à l'atelier",
    status: "validee",
    note: "18 / 20",
    commentAdmin: "Excellent coup de crayon sur les lapins et la chouette. Le trait est vif et expressif.",
    dateValidation: "2026-11-09"
  },
  {
    id: "lecon-d02",
    semaine: 1,
    filiere: "dessin",
    num: "L-02",
    titre: "Formes fondamentales & silhouette de personnages",
    image: "assets/planche_pedagogique_shape_language.jpg",
    consigne: "Étudier la dynamique des trois formes géométriques primaires : carré (stabilité/défense), triangle (agilité/dynamisme) et cercle (douceur/sagesse).",
    support: "Planche pédagogique La Croisée des Arts",
    status: "validee",
    note: "17 / 20",
    commentAdmin: "Bonne compréhension de la lisibilité de silhouette et des contrastes de masse.",
    dateValidation: "2026-11-10"
  },
  {
    id: "lecon-d03",
    semaine: 1,
    filiere: "dessin",
    num: "L-03",
    titre: "Hiérarchie des valeurs & contraste Notan",
    image: "assets/masterclass_sargent_methode_correction.jpg",
    consigne: "Séparer clairement la zone d'ombre et la zone de lumière en grands aplats simplifiés, sans faire de gris intermédiaires confus.",
    support: "Étude comparative d'atelier La Croisée des Arts",
    status: "en_attente",
    note: "-",
    commentAdmin: "En attente de contrôle de la feuille papier par le tuteur.",
    dateValidation: null
  },
  {
    id: "lecon-d04",
    semaine: 1,
    filiere: "dessin",
    num: "L-04",
    titre: "Modulation des 4 bords (Edge Control)",
    image: "assets/planche_pedagogique_edge_control.jpg",
    consigne: "Maîtriser les 4 transitions : bord net (point focal), bord ferme, bord doux et bord perdu dans la pénombre.",
    support: "Planche pédagogique La Croisée des Arts",
    status: "a_faire",
    note: "-",
    commentAdmin: "À réaliser sur papier après validation de la leçon 3.",
    dateValidation: null
  },
  {
    id: "lecon-d05",
    semaine: 1,
    filiere: "dessin",
    num: "L-05",
    titre: "Mécanique des drapés & plis de tissus",
    image: "assets/planche_pedagogique_drapes_plis.jpg",
    consigne: "Identifier les points de tension mécanique et observer la retombée du tissu sur le corps.",
    support: "Planche pédagogique La Croisée des Arts",
    status: "a_faire",
    note: "-",
    commentAdmin: "Non démarrée.",
    dateValidation: null
  },
  {
    id: "lecon-d06",
    semaine: 1,
    filiere: "dessin",
    num: "L-06",
    titre: "Anatomie & proportions d'une silhouette",
    image: "assets/dune_pose_01_paul_cape_vent.jpg",
    consigne: "Poser la ligne d'action globale, les repères de hanches et d'épaules, et respecter l'équilibre dynamique de la pose.",
    support: "Étude de pose d'atelier La Croisée des Arts",
    status: "a_faire",
    note: "-",
    commentAdmin: "Non démarrée.",
    dateValidation: null
  },
  {
    id: "lecon-d07",
    semaine: 1,
    filiere: "dessin",
    num: "L-07",
    titre: "Cadrage, point focal & composition",
    image: "assets/planche_pedagogique_composition_cinema.jpg",
    consigne: "Positionner le sujet selon la règle des tiers et guider l'œil du spectateur vers le centre d'intérêt principal.",
    support: "Planche pédagogique La Croisée des Arts",
    status: "a_faire",
    note: "-",
    commentAdmin: "Non démarrée.",
    dateValidation: null
  },
  {
    id: "lecon-d08",
    semaine: 1,
    filiere: "dessin",
    num: "L-08",
    titre: "Harmonie des couleurs & Gamut Masking",
    image: "assets/planche_pedagogique_gamut_masking.jpg",
    consigne: "Limiter la palette à une sélection chromatique dominante pour garantir l'ambiance lumineuse.",
    support: "Planche pédagogique La Croisée des Arts",
    status: "a_faire",
    note: "-",
    commentAdmin: "Non démarrée.",
    dateValidation: null
  },
  {
    id: "lecon-d09",
    semaine: 1,
    filiere: "dessin",
    num: "L-09",
    titre: "Textures de surface & matières d'atelier",
    image: "assets/planche_pedagogique_textures_brosses.jpg",
    consigne: "Différencier le rendu mat, le satiné et le brillant par le contraste des rehauts lumineux.",
    support: "Planche pédagogique La Croisée des Arts",
    status: "a_faire",
    note: "-",
    commentAdmin: "Non démarrée.",
    dateValidation: null
  },
  {
    id: "lecon-d10",
    semaine: 1,
    filiere: "dessin",
    num: "L-10",
    titre: "Bilan Semaine 1 : Planche de synthèse complète",
    image: "assets/session_sargent_croquis.jpg",
    consigne: "Réaliser une planche grand format synthétisant trait, silhouette et valeurs pour examen de passage en Semaine 2.",
    support: "Planche d'évaluation finale de dessin",
    status: "a_faire",
    note: "-",
    commentAdmin: "Leçon finale conditionnant le déblocage du pôle Graphisme.",
    dateValidation: null
  },
  {
    id: "lecon-g01",
    semaine: 2,
    filiere: "graphisme",
    num: "L-11",
    titre: "Analyse du brief & cahier des charges client",
    image: "assets/mockup_plateforme_web_la_croisee_des_arts.jpg",
    consigne: "Questionner le commanditaire sur le format réel, le public cible et le délai d'impression avant toute esquisse.",
    support: "Dossier de production d'atelier GPO",
    status: "a_faire",
    note: "-",
    commentAdmin: "Semaine 2 · Verrouillée.",
    dateValidation: null
  },
  {
    id: "lecon-g02",
    semaine: 2,
    filiere: "graphisme",
    num: "L-12",
    titre: "Tracés vectoriels de précision & Bézier",
    image: "assets/session_bladerunner_lineart.jpg",
    consigne: "Placer les points d'ancrage aux extremums stricts et orienter les tangentes à 0° et 90°.",
    support: "Gabarit vectoriel d'atelier",
    status: "a_faire",
    note: "-",
    commentAdmin: "Semaine 2 · Verrouillée.",
    dateValidation: null
  },
  {
    id: "lecon-g03",
    semaine: 2,
    filiere: "graphisme",
    num: "L-13",
    titre: "Opérations booléennes & pochoir d'atelier",
    image: "assets/session_burton_encre.jpg",
    consigne: "Combiner, soustraire et unifier des formes pour préparer un visuel destiné à la découpe vinyle.",
    support: "Étude d'aplat pour plotter de découpe",
    status: "a_faire",
    note: "-",
    commentAdmin: "Semaine 2 · Verrouillée.",
    dateValidation: null
  },
  {
    id: "lecon-g04",
    semaine: 2,
    filiere: "graphisme",
    num: "L-14",
    titre: "Prépresse, débord 3 mm & profil FOGRA39",
    image: "assets/planche_pedagogique_edge_control.jpg",
    consigne: "Intégrer les 3 mm de fond perdu, 5 mm de zone de sécurité et vérifier la résolution 300 DPI.",
    support: "Norme technique prépresse d'imprimerie",
    status: "a_faire",
    note: "-",
    commentAdmin: "Semaine 2 · Verrouillée.",
    dateValidation: null
  },
  {
    id: "lecon-g05",
    semaine: 2,
    filiere: "graphisme",
    num: "L-15",
    titre: "Filet CutContour spot 100% Magenta & découpe",
    image: "assets/planche_pedagogique_textures_brosses.jpg",
    consigne: "Créer la nuance ton direct nommée exactement CutContour en surimpression pour le pilote Roland VersaWorks.",
    support: "Protocole traceur de découpe d'atelier GPO",
    status: "a_faire",
    note: "-",
    commentAdmin: "Semaine 2 · Verrouillée.",
    dateValidation: null
  }
];

function getStageLessons() { return []; }
function saveStageLessons() { throw new Error('Connexion au serveur requise'); }

if (typeof window !== 'undefined') {
  window.DEFAULT_STAGE_LESSONS = DEFAULT_STAGE_LESSONS;
  window.getStageLessons = getStageLessons;
  window.saveStageLessons = saveStageLessons;
}
