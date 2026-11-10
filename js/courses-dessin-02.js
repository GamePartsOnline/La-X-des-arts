// =====================================================================
// COURS DESSIN PARTIE 2 : DRAPÉS, SSS PEAU, CADRAGE CINÉMA
// =====================================================================
const COURSES_DESSIN_P2 = [
  {
    id: "fiche-04",
    num: "04",
    discipline: "dessin",
    title: "Drapés & Mécanique des Plis",
    domain: "Anatomie & Drapé",
    level: "Intermédiaire",
    duration: "20 min",
    image: "assets/planche_pedagogique_drapes_tissus.jpg",
    summary: "Comprendre les 7 types de plis fondamentaux (tombant, tubulaire, spiralé, zigzag, emboîté, mémoire, étiré) selon les points de tension du corps en mouvement.",
    artist: {
      name: "Burne Hogarth (1911 - 1996)",
      quote: "Le tissu ne fait qu'épouser les forces de gravité et de tension imprimées par l'anatomie sous-jacente.",
      bio: "Illustrateur majeur et cofondateur de la School of Visual Arts de New York. Son ouvrage Dynamic Wrinkles and Drapery est la référence académique absolue sur le drapé."
    },
    theory: [
      { title: "1. Points de Suspension & Points de Tension", desc: "Identifier l'origine de la contrainte (épaule, coude plié, genou) avant de tracer le premier pli." },
      { title: "2. Les Plis en Tuyau d'Orgue (Tubulaires)", desc: "Se forment lorsque le tissu tombe librement depuis deux points suspendus sous l'effet du poids." },
      { title: "3. Les Plis de Compression (Diaprures & Accordéons)", desc: "S'accumulent à l'intérieur des articulations fermées (pli du coude, creux poplité)." },
      { title: "4. Épaisseur & Poids du Matériau", desc: "La soie produit des plis multiples et fins ; la laine épaisse produit des plis ronds et amples." }
    ],
    exercise: {
      title: "Étude d'une Manche ou Cape en Tension (Chrono 15 min)",
      instructions: "Dessinez un bras fléchi revêtu d'une manche. Tracez les lignes de force rayonnant depuis le coude sans surcharger de plis secondaires."
    },
    correction: {
      student_errors: [
        { label: "Plis décoratifs anarchiques", detail: "Lignes tracées au hasard sans corrélation avec l'anatomie ou la gravité." },
        { label: "Absence d'épaisseur", detail: "Tissu sans tranche visible aux poignets et ourlets." }
      ],
      remediations: [
        { label: "Analyse des forces d'abord", detail: "Flécher les tensions avant de dessiner les contours du tissu." },
        { label: "Donner du volume aux bords", detail: "Dessiner le revers et la couture pour ancrer l'objet dans l'espace 3D." }
      ],
      grades: { silhouette: 9, structure: 9.5, valeurs: 8.5, bords: 9, couleur: 8.5 }
    }
  },
  {
    id: "fiche-05",
    num: "05",
    discipline: "dessin",
    title: "Rendu de Peau & Diffusion Sous-Surfacique (SSS)",
    domain: "Matières Organiques & Lumière",
    level: "Avancé",
    duration: "20 min",
    image: "assets/planche_pedagogique_sss_carnation.jpg",
    summary: "Simuler la translucidité de la chair humaine par la saturation orangée le long du terminateur, la diffusion du sang sous les cartilages (oreilles, nez, doigts) et la gestion des micro-surfaces.",
    artist: {
      name: "William-Adolphe Bouguereau (1825 - 1905)",
      quote: "Dans la peau humaine, la lumière ne rebondit pas simplement : elle entre, voyage et ressort chargée de vie.",
      bio: "Figure de proue de l'art académique français au XIXe siècle. Sa maîtrise virtuose de la carnation vivante et de la douceur des transitions cutanées reste inégalée."
    },
    theory: [
      { title: "1. La Bande de Saturation au Terminateur", desc: "La lumière pénètre l'épiderme et ressort rougie par les vaisseaux capillaires juste à la frontière de l'ombre." },
      { title: "2. Les Trois Zones Chromatiques du Visage", desc: "Front jaunâtre (proximité de l'os), nez/joues/oreilles rougeâtres (vascularisation dense), menton/mâchoire gris-bleuté." },
      { title: "3. Translucidité des Cartilages à Contre-Jour", desc: "Les oreilles et les narines rétro-éclairées s'illuminent d'un rouge écarlate incandescent." },
      { title: "4. Spécularité Humide vs Sèche", desc: "Rehauts fins et nets sur la cornée et l'arête nasale, reflets larges et satinés sur le front." }
    ],
    exercise: {
      title: "Étude d'une Oreille ou d'un Nez à Contre-Jour (Chrono 15 min)",
      instructions: "Rendez la translucidité d'un pavillon d'oreille rétro-éclairé par une lumière vive. Marquez nettement la saturation rouge le long du cartilage."
    },
    correction: {
      student_errors: [
        { label: "Effet plastique ou cire morte", detail: "Absence de saturation sanguine au terminateur rendant le sujet froid et minéral." },
        { label: "Rehauts spéculaires étalés", detail: "Taches de blanc pur sur tout le visage donnant un aspect huileux excessif." }
      ],
      remediations: [
        { label: "Injecter de l'écarlate au seuil d'ombre", detail: "Passer une touche d'orange sanguine saturée entre lumière et ombre." },
        { label: "Hiérarchiser la spécularité", detail: "Garder un seul rehaut net par zone organique." }
      ],
      grades: { silhouette: 9, structure: 9, valeurs: 9, bords: 9.5, couleur: 9.5 }
    }
  },
  {
    id: "fiche-06",
    num: "06",
    discipline: "dessin",
    title: "Cadrage, Perspective & Composition Cinématographique",
    domain: "Mise en Scène & Narration",
    level: "Intermédiaire",
    duration: "20 min",
    image: "assets/planche_pedagogique_composition_cinema.jpg",
    summary: "Structurer un plan narratif puissant : choix de la focale (grand-angle vs téléobjectif), règle des tiers dynamique, lignes de guidage et cadrage naturel pour guider l'émotion.",
    artist: {
      name: "Stanley Kubrick (1928 - 1999)",
      quote: "Une composition réussie enferme le spectateur dans un espace où chaque centimètre carré a été délibérément pesé.",
      bio: "Réalisateur légendaire réputé pour sa perspective à point de fuite central rigide, son utilisation des lignes architecturales et son sens magistral du cadre."
    },
    theory: [
      { title: "1. Perspective à Point de Fuite Unique", desc: "Créer un sentiment de fatalité, d'immensité ou de tension psychologique par la convergence géométrique absolue." },
      { title: "2. Les Lignes Directrices (Leading Lines)", desc: "Utiliser routes, câbles, ombres ou corridors pour conduire sans effort l'œil vers le point d'intérêt." },
      { title: "3. Le Cadre dans le Cadre", desc: "Enchâsser le sujet dans une arche, une porte ou des silhouettes sombres au premier plan pour créer de la profondeur." },
      { title: "4. Hauteur de Caméra & Émotion", desc: "Contre-plongée pour la domination et la majesté, plongée pour la vulnérabilité et l'écrasement." }
    ],
    exercise: {
      title: "Composition d'un Plan Cinéma Grand-Angle (Chrono 15 min)",
      instructions: "Esquissez un plan en perspective à 1 point de fuite intégrant des lignes de guidage fortes, une silhouette au tiers inférieur et un cadre naturel."
    },
    correction: {
      student_errors: [
        { label: "Horizon au milieu exact", detail: "Scission de l'image en deux moitiés égales sans choix narratif affirmé." },
        { label: "Lignes fuyantes erratiques", detail: "Fuyantes architecturales convergeant vers 3 points différents sur un même plan." }
      ],
      remediations: [
        { label: "Placer l'horizon au tiers supérieur ou inférieur", detail: "Donner priorité soit au sol (aventure) soit au ciel (solitude)." },
        { label: "Verrouiller le point de fuite", detail: "Pointer une règle vers le centre avant de tracer les fuyantes." }
      ],
      grades: { silhouette: 9.5, structure: 9.5, valeurs: 9, bords: 9, couleur: 8.5 }
    }
  }
];
