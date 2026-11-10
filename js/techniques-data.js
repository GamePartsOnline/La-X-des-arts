// =====================================================================
// RÉFÉRENTIEL DES TECHNIQUES DE DESSIN & MÉDIUMS TRADITIONNELS D'ATELIER
// CHARTE VISUELLE INSPIRÉE DE SCHDESIGN.HU (MINIMALISME & PRÉCISION)
// =====================================================================

const PANORAMA_TECHNIQUES = {
  id: "cours-panorama-techniques",
  titre: "Panorama Complet des Techniques du Dessin & Médiums d'Atelier",
  sousTitre: "Cours Cadre : Classification des outils, supports adaptés et chimie des liants",
  duree: "45 min",
  niveau: "Fondamental Atelier",
  image: "assets/planche_pedagogique_textures_brosses.jpg",
  support: "Planche d'étude des matières et outils d'atelier",
  resume: "Vue d'ensemble indispensable avant toute pratique : comprendre la différence entre techniques sèches, humides et grasses, choisir le bon grammage de papier et maîtriser la règle d'or de superposition des médiums.",
  piliers: [
    {
      titre: "1. Techniques Sèches (Graphite, Fusain, Pastel Sec)",
      desc: "Dépôt direct de pigments purs par friction mécanique sur le grain du papier. Nécessite un grain adapté (fin, moyen ou vergé) et l'usage d'un fixatif en voile léger pour stopper le poudrage."
    },
    {
      titre: "2. Techniques Humides (Aquarelle, Lavis, Encres)",
      desc: "Dispersion de pigments dans l'eau avec liant hydrosoluble (gomme arabique). Exige un papier d'au moins 300 g/m² 100% coton pour éviter le gondolement et permettre la fusion des pigments."
    },
    {
      titre: "3. Techniques Opaques & Pâte (Acrylique, Gouache)",
      desc: "Pouvoir couvrant élevé permettant de peindre du foncé vers le clair. L'acrylique polymérise de façon irréversible en résine imperméable, tandis que la gouache reste réactivable à l'eau."
    },
    {
      titre: "4. Techniques Modernes (Feutres, Marqueurs à Alcool)",
      desc: "Coloration rapide et saturée par capillarité. Le marqueur à alcool permet des fondus parfaits sans détremper le papier spécial layout traité anti-buvard (barrière imperméable)."
    }
  ],
  regleOr: "Règle universelle de superposition : toujours travailler du maigre vers le gras, et du fluide transparent vers la pâte opaque."
};

const TECHNIQUES_CHAPTERS = [
  {
    id: "tech-aquarelle",
    slug: "aquarelle",
    num: "CH-01",
    nom: "L'Aquarelle",
    famille: "Technique Humide & Transparence",
    couleurBadge: "#f8485e",
    image: "assets/galerie_aquarelle_coquelicots.jpg",
    materiel: "Godets ou tubes d'aquarelle extra-fine, pinceaux martre ou petit-gris, papier 300 g/m² 100% coton grain fin, ruban de masquage.",
    pointsCles: [
      { label: "Travail dans l'humide (Wet-on-wet)", detail: "Mouiller préalablement le papier à l'eau claire pour laisser les pigments diffuser de manière organique sans arête dure." },
      { label: "Glacis et lavis sec (Wet-on-dry)", detail: "Poser un aplat transparent sur couche totalement sèche pour créer des superpositions optiques vibrantes sans déplacer la sous-couche." },
      { label: "Préservation du blanc pur", detail: "En aquarelle, le blanc n'est jamais une peinture ajoutée : c'est la blancheur immaculée du papier préservée par le pinceau ou protégée au drawing-gum." }
    ],
    exercice: "Réaliser un nuancier de 3 dégradés parfaits (lavis uniforme, lavis dégradé, fusion de deux couleurs humides) puis une étude florale rapide en 2 couches.",
    piege: "Vouloir corriger une zone encore humide avec un pinceau trop chargé, ce qui provoque des auréoles en chou-fleur irréversibles."
  },
  {
    id: "tech-feutre",
    slug: "feutre",
    num: "CH-02",
    nom: "Le Feutre & Marqueurs",
    famille: "Lineart, Alcool & Illustration",
    couleurBadge: "#f8485e",
    image: "assets/session_bladerunner_lineart.jpg",
    materiel: "Fineliners pigmentés calibrés (0.1, 0.3, 0.5 mm), marqueurs à alcool (nuances chair, gris neutres), papier Layout 75 g/m² ou bristol lisse.",
    pointsCles: [
      { label: "Précision du lineart au fineliner", detail: "Utiliser une encre pigmentée indélébile (résistante à l'eau et à l'alcool) pour encrer le croquis avant toute mise en couleur." },
      { label: "Dégradés au marqueur à alcool", detail: "Appliquer les teintes en mouvements circulaires rapides sur papier frais pour fondre les transitions avant évaporation de l'alcool." },
      { label: "Rôle du feutre mélangeur (Blender)", detail: "Le blender incolore sert à adoucir une bordure vers le blanc ou à éclaircir une valeur en repoussant les pigments." }
    ],
    exercice: "Encrer une silhouette au feutre calibré 0.3 mm avec traits de contour renforcés à 0.5 mm, puis poser une mise en volume en 3 valeurs de gris chauds au marqueur.",
    piege: "Utiliser un papier ordinaire trop poreux qui absorbe l'encre comme un buvard, assèche prématurément la pointe du feutre et fait baver les contours."
  },
  {
    id: "tech-crayon",
    slug: "crayon",
    num: "CH-03",
    nom: "Les Crayons",
    famille: "Graphite, Couleur & Sanguine",
    couleurBadge: "#f8485e",
    image: "assets/session_sargent_croquis.jpg",
    materiel: "Graphites gradués (2H, HB, 2B, 4B, 6B), crayons de couleur artistiques à liant cire ou huile, estompe en papier, taille-crayon au cutter.",
    pointsCles: [
      { label: "Graduation de la dureté", detail: "Les mines H (Hard) sont dures et pâles pour les repères de construction. Les mines B (Black) sont grasses et tendres pour les ombres denses." },
      { label: "Montée en valeur par hachures croisées", detail: "Superposer des trames de traits légers et réguliers plutôt que d'appuyer violemment sur la pointe, ce qui écraserait et lustrerait le papier." },
      { label: "Brunissage au crayon de couleur", detail: "Faire fondre les couches successives de pigments colorés en exerçant une pression finale appuyée pour créer une texture satinée continue." }
    ],
    exercice: "Sur papier à dessin 180 g/m², exécuter une sphère complète au graphite avec ses 5 zones de valeur (rehaut, demi-teinte, terminateur, ombre portée, reflet).",
    piege: "Estomper l'ensemble du dessin avec le doigt nu : le sébum de la peau graisse le papier, salit les transitions et empêche tout rehaut net."
  },
  {
    id: "tech-pastel",
    slug: "pastel",
    num: "CH-04",
    nom: "Les Pastels",
    famille: "Pastel Sec & Pastel Gras",
    couleurBadge: "#f8485e",
    image: "assets/session_vangogh_matiere.jpg",
    materiel: "Bâtonnets de pastels secs tendres, crayons-pastels pour les détails, papier teinté abrasif (Pastelmat ou Mi-Teintes Touch), fixatif en spray.",
    pointsCles: [
      { label: "Pureté incomparable des pigments secs", detail: "Le pastel sec ne contient quasiment aucun liant, offrant la plus grande vivacité lumineuse de tous les médiums d'art." },
      { label: "Estompage et fusion au doigt", detail: "Mélanger directement la poudre sur le support pour créer des fondus soyeux et des transitions d'atmosphère incomparables." },
      { label: "Pastel gras et à l'huile", detail: "Texture riche et beurrée qui se travaille en empâtements denses au couteau et peut être diluée localement à l'essence minérale sans odeur." }
    ],
    exercice: "Sur feuille teintée gris moyen, réaliser une étude de ciel au crépuscule en pastels secs, avec dégradé d'orange vers le bleu nuit et rehauts de blanc.",
    piege: "Fixer trop lourdement le pastel sec avec un spray vaporisé trop près, ce qui assombrit irrémédiablement les teintes et dissout la texture veloutée."
  },
  {
    id: "tech-acrylique",
    slug: "acrylique",
    num: "CH-05",
    nom: "L'Acrylique & Gouache",
    famille: "Peinture Opaque & Matière",
    couleurBadge: "#f8485e",
    image: "assets/planche_pedagogique_textures_brosses.jpg",
    materiel: "Tubes d'acrylique fine ou gouache d'atelier, pinceaux synthétiques plats et ronds, couteau à peindre, carton entoilé ou papier 350 g/m².",
    pointsCles: [
      { label: "Séchage ultra-rapide par polymérisation", detail: "L'eau s'évapore en quelques minutes laissant un film plastique indélébile sur lequel on peut repeindre immédiatement sans détrempe." },
      { label: "Opacité de la gouache", detail: "Finition mate et veloutée sans reflet. Idéale pour les aplats nets de graphisme et l'illustration traditionnelle." },
      { label: "Travail de la pâte et empâtement (Impasto)", detail: "Possibilité de sculpter la matière au couteau pour créer des reliefs tactiles qui accrochent la lumière réelle." }
    ],
    exercice: "Composer un paysage minimaliste en 3 plans nets à la gouache ou acrylique : ciel dégradé, silhouette de premier plan foncée, montagne intermédiaire.",
    piege: "Oublier de nettoyer immédiatement ses pinceaux : l'acrylique durcit dans la virole et détruit définitivement la touffe de poils."
  },
  {
    id: "tech-fusain",
    slug: "fusain",
    num: "CH-06",
    nom: "Le Fusain & Lavis d'Encre",
    famille: "Gestuelle & Noirs Profonds",
    couleurBadge: "#f8485e",
    image: "assets/etudiant_fusain_tim.jpg",
    materiel: "Bâtons de fusain saule (fusain naturel), fusain compressé noir intense, gomme mie de pain, pinceau chinois et encre de Chine noire.",
    pointsCles: [
      { label: "Liberté gestuelle du fusain naturel", detail: "Permet de tracer de grands mouvements amples du bras et de couvrir rapidement de larges surfaces d'ombre." },
      { label: "Dessiner par soustraction (Gomme mie de pain)", detail: "Poser un aplat gris au fusain sur toute la feuille, puis sculpter la lumière en retirant la matière avec la gomme malléable." },
      { label: "Puissance du lavis à l'encre de Chine", detail: "Diluer l'encre dans différents godets d'eau (1 goutte, 3 gouttes, encre pure) pour peindre à l'eau avec une profondeur de noir absolue." }
    ],
    exercice: "Réaliser un portrait ou une nature morte en démarrant par un fond frotté au fusain, puis faire émerger les volumes uniquement à la gomme mie de pain.",
    piege: "Poser la paume de la main sur la feuille pendant le travail, ce qui bave le fusain et étale des traces grises sur les zones claires."
  }
];

function getTechniquesData() {
  return {
    panorama: PANORAMA_TECHNIQUES,
    chapitres: TECHNIQUES_CHAPTERS
  };
}

if (typeof window !== 'undefined') {
  window.PANORAMA_TECHNIQUES = PANORAMA_TECHNIQUES;
  window.TECHNIQUES_CHAPTERS = TECHNIQUES_CHAPTERS;
  window.getTechniquesData = getTechniquesData;
}
