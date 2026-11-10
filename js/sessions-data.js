// =====================================================================
// SESSIONS D'ATELIER CHRONO (DESSIN & GRAPHISME APPLIQUÉ)
// =====================================================================
const SESSIONS_DATA = [
  {
    id: "session-sargent",
    title: "John Singer Sargent : Portrait Alla Prima & 4 Bords",
    category: "Maîtres du Portrait",
    discipline: "dessin",
    duration: 20,
    image: "assets/session_sargent_croquis.jpg",
    director: "John Singer Sargent",
    tips: "Notan binaire en 2 valeurs, fusion des ombres dans le fond, plans fermes sur la pommette et rehauts tranchants."
  },
  {
    id: "session-dune",
    title: "Dune 1 & 2 : Monumentalité, Cadrage & Poses de Personnages",
    category: "Cinéma & Narration",
    discipline: "dessin",
    duration: 10,
    isTraditionalPaper: true,
    paperNotice: "Consigne d'atelier : Travail traditionnel sur feuille obligatoire. Ne dessinez pas sur votre écran. Munissez-vous d'une feuille de papier blanc ou carnet de croquis, d'un crayon 2B/4B ou d'un fusain. Observez la pose ci-contre, esquissez votre étude sur feuille pendant les 10 minutes du compte à rebours, puis photographiez ou déposez votre dessin pour correction.",
    image: "assets/dune_pose_01_paul_cape_vent.jpg",
    director: "Denis Villeneuve",
    tips: "Focus sur la silhouette dynamique, la tension du drapé au vent et la petitesse de la silhouette face au gigantisme des dunes.",
    poses: [
      { id: "pose-paul-cape", title: "Paul Muad'Dib : Cape au vent", subtitle: "Contre-plongée dramatique & drapé flottant", image: "assets/dune_pose_01_paul_cape_vent.jpg", tips: "Ligne d'action du corps en diagonale, puis arabesques des plis qui s'étirent horizontalement." },
      { id: "pose-fremen-accroupi", title: "Éclaireur Fremen : Posture accroupie", subtitle: "Centre de gravité bas & compacité", image: "assets/dune_pose_02_fremen_accroupi.jpg", tips: "Trianguler la masse corporelle. Vérifier l'alignement des talons, des genoux fléchis et de la tête." },
      { id: "pose-duel-krys", title: "Guerrier Fedaykin : Duel au couteau Krys", subtitle: "Tension musculaire & garde offensive", image: "assets/dune_pose_03_duel_couteau_krys.jpg", tips: "Tracer d'abord l'axe d'attaque allant de la pointe du couteau jusqu'au talon d'appui arrière." },
      { id: "pose-marcheur-tempete", title: "Marcheur du Désert : Face au vent de sable", subtitle: "Inclinaison contre la tempête & silhouette d'ensemble", image: "assets/dune_pose_04_marcheur_tempete.jpg", tips: "Accentuer l'angle d'inclinaison du torse vers l'avant pour traduire la résistance physique à la rafale." }
    ]
  },
  {
    id: "session-logo-monogramme",
    title: "Défi Monogramme 1-Bit Noir & Blanc (Test Paul Rand)",
    category: "Identité Visuelle",
    discipline: "graphisme",
    duration: 15,
    image: "assets/masterclass_paul_rand_logo.jpg",
    director: "Atelier GPO",
    tips: "Réduire les initiales à leur géométrie la plus pure en noir 100K. Vérifier la lisibilité en réduction 16px."
  },
  {
    id: "session-affiche-typo",
    title: "Affiche Événementielle 100 % Typo (Sans Visuel)",
    category: "Édition & Typographie",
    discipline: "graphisme",
    duration: 15,
    image: "assets/planche_pedagogique_bords_peinture.jpg",
    director: "Jan Tschichold",
    tips: "Texte officiel GPO : 'SOIRÉE ARCADE'. Jouer sur 3 corps contrastés et un interlignage calculé à 135 %."
  },
  {
    id: "session-sticker-contrainte",
    title: "Sticker sous Contrainte 80x80 mm (3 Couleurs Max)",
    category: "Prépresse & Découpe",
    discipline: "graphisme",
    duration: 15,
    image: "assets/planche_pedagogique_shape_language.jpg",
    director: "Atelier GPO",
    tips: "Format 80x80mm, 3 couleurs franches, lisible à 1 mètre de recul, avec calque de découpe vectoriel CutContour."
  },
  {
    id: "session-palette-branding",
    title: "Nuancier de Marque & Ratios 60-30-10",
    category: "Branding & Couleurs",
    discipline: "graphisme",
    duration: 10,
    image: "assets/planche_pedagogique_gamut_masking.jpg",
    director: "Josef Albers",
    tips: "60 % fond dominant, 30 % structure, 10 % accentuation. Fournir les équivalences Pantone, CMJN, RVB et HEX."
  }
];

if (typeof window !== 'undefined') {
  window.SESSIONS_DATA = SESSIONS_DATA;
}

