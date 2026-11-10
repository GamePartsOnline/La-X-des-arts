// =====================================================================
// COURS GRAPHISME PARTIE 2 : BÉZIER & POCHOIR, COULEURS & UI 8PX
// Issu du référentiel pilote d'école de graphisme GPO SARL
// =====================================================================
const COURSES_GRAPHISME_P2 = [
  {
    id: "fiche-g03",
    num: "G-04",
    discipline: "graphisme",
    title: "04 Outils Vectoriels : Courbes de Bézier & Pathfinder",
    domain: "Dessin Vectoriel de Précision & Découpe",
    level: "Tous Niveaux",
    duration: "20 min",
    image: "assets/planche_pedagogique_shape_language.jpg",
    summary: "Méthode de vectorisation d'atelier GPO : placement rigoureux des points d'ancrage aux extremums, tangentes orthogonales verrouillées à 0°/90°, opérations booléennes et création de pochoirs avec ponts de maintien solides.",
    artist: {
      name: "Pierre Bézier (1910 - 1999)",
      quote: "Une courbe élégante ne résulte pas d'une profusion de points, mais de la tension exacte entre deux ancres maîtresses.",
      bio: "Ingénieur français chez Renault, créateur des courbes paramétriques universellement utilisées dans les logiciels de CAO, PAO et typographie numérique."
    },
    theory: [
      { title: "1. La Règle d'Or des Extremums", desc: "Placer les points d'ancrage exclusivement aux points cardinaux les plus hauts, bas, gauches ou droits. Aucun point sur les flancs diagonaux d'une courbure." },
      { title: "2. Tangentes Verrouillées à 0° ou 90° (Shift)", desc: "Maintenir la touche Majuscule enfoncée pour garder les poignées horizontales ou verticales. Cela garantit une courbure fluide et sans brisure parasite." },
      { title: "3. Opérations Booléennes Pathfinder", desc: "Construire des formes complexes par association de primitives (Unir, Soustraire la forme avant, Intersection, Exclusion). Les formes doivent être fermées." },
      { title: "4. Contrainte Atelier : Le Pochoir Découpe", desc: "Exercice officiel GPO : transformer un tracé en pochoir découpe. Créer des ponts de maintien d'au moins 2 mm pour empêcher les parties flottantes intérieures de tomber." }
    ],
    exercise: {
      title: "Vectorisation de Monogramme & Pochoir Découpe (Chrono 20 min)",
      instructions: "Sur la base d'un croquis d'observation, vectorisez un monogramme en moins de 12 points d'ancrage avec tangentes orthogonales. Créez ensuite les ponts physiques nécessaires pour en faire un pochoir 1 couleur découpe vinyle."
    },
    correction: {
      student_errors: [
        { label: "Prolifération de points d'ancrage", detail: "Forme dessinée avec 40 points au lieu de 6, créant des ondulations et bosses sur le tracé." },
        { label: "Poignées asymétriques inclinées", detail: "Poignées orientées à 37° créant des cassures et des tensions inégales sur l'arc." },
        { label: "Parties flottantes perdues", detail: "Intérieur de la lettre O non relié au cadre, tombant irrémédiablement lors de la découpe physique." }
      ],
      remediations: [
        { label: "Loi du minimum de points", detail: "Supprimer tout point qui n'est pas un extremum horizontal ou vertical." },
        { label: "Touches modificatrices système", detail: "Utiliser Shift pour verrouiller les axes et Alt pour briser les poignées en pointe d'angle." },
        { label: "Ponts de liaison d'atelier", detail: "Ouvrir au cutter vectoriel des ponts réguliers d'au moins 2 mm sur chaque îlot fermé." }
      ],
      grades: { silhouette: 9.5, structure: 9.5, valeurs: 9, bords: 9.5, couleur: 9 }
    }
  },
  {
    id: "fiche-g04",
    num: "G-05",
    discipline: "graphisme",
    title: "05 Colorimétrie : Systèmes de Couleurs & Ratios 60-30-10",
    domain: "Harmonie Chromatique & Tons Directs",
    level: "Tous Niveaux",
    duration: "15 min",
    image: "assets/planche_pedagogique_gamut_masking.jpg",
    summary: "Structurer une palette de marque professionnelle : 60 % dominante de fond, 30 % couleur de structure, 10 % accentuation. Maîtriser les tons directs Pantone (PMS) et réaliser un sticker sous contrainte 3 couleurs maximum.",
    artist: {
      name: "Josef Albers (1888 - 1976)",
      quote: "Une couleur n'est jamais vue telle qu'elle est réellement. Elle trompe continuellement l'œil en fonction de son entourage.",
      bio: "Maître du Bauhaus et auteur de l'Interaction of Color. Ses expérimentations rigoureuses sur la perception chromatique sont au cœur de la méthodologie de l'école."
    },
    theory: [
      { title: "1. La Règle des 60-30-10 en Branding", desc: "60 % pour la couleur de fond dominante, 30 % pour la couleur de structure secondaire, 10 % pour la couleur d'accentuation (bouton d'appel à l'action, sceau)." },
      { title: "2. Tons Directs Pantone (PMS)", desc: "Encres pré-mélangées assurant une teinte rigoureusement identique sur tout support physique (papier, textile, métal), indispensable pour les logos institutionnels." },
      { title: "3. Harmonie Triadique et Complémentaire", desc: "Construire des accords équilibrés en utilisant les angles précis de la roue chromatique (180° pour complémentaire, 120° pour triadique)." },
      { title: "4. Le Sticker sous Contrainte (Épreuve GPO)", desc: "Créer un visuel au gabarit strict de 80 x 80 mm, limité à 3 couleurs franches, lisible à 1 mètre de distance, avec contour vectoriel CutContour." }
    ],
    exercise: {
      title: "Sticker Arcade sous Contrainte 80x80 mm (Chrono 15 min)",
      instructions: "Sujet officiel GPO SARL : Créez un sticker de 80 x 80 mm sur le thème 'Arcade / Rétro'. Contraintes strictes : 3 couleurs maximum, lisible à 1 mètre, format carré ou découpé à la forme avec contour CutContour."
    },
    correction: {
      student_errors: [
        { label: "Palette sans hiérarchie", detail: "4 couleurs vives saturées à 100 % se disputant le premier plan sans couleur neutre de soutien." },
        { label: "Illisible à 1 mètre", detail: "Détails microscopiques et micro-textes indéchiffrables au-delà de 30 cm." },
        { label: "Contour de découpe manquant", detail: "Aucun tracé vectoriel en ton direct CutContour fourni pour le traceur de découpe." }
      ],
      remediations: [
        { label: "Application du ratio 60-30-10", detail: "Fond sombre 60 %, structure blanche 30 %, accentuation rouge néon 10 %." },
        { label: "Épreuve du recul physique", detail: "Réduire le visuel à 2 cm sur écran ou reculer de 2 mètres pour valider la lisibilité immédiate." },
        { label: "Calque CutContour dédié", detail: "Créer un calque séparé avec un contour magenta 100 % en surimpression." }
      ],
      grades: { silhouette: 9, structure: 9.5, valeurs: 9, bords: 9, couleur: 10 }
    }
  },
  {
    id: "fiche-g05",
    num: "G-06",
    discipline: "graphisme",
    title: "06 Design Numérique : UI Design & Accessibilité WCAG",
    domain: "Design Numérique & Systèmes d'Interface",
    level: "Intermédiaire à Avancé",
    duration: "20 min",
    image: "assets/planche_pedagogique_composition_cinema.jpg",
    summary: "Concevoir des interfaces numériques modernes : système d'espacements modulaire basé sur des multiples de 8 (8, 16, 24, 32, 48px), contrastes accessibles WCAG AA (ratio minimum 4.5:1), et composants atomiques.",
    artist: {
      name: "Dieter Rams (1932 - présent)",
      quote: "Le bon design est discret, compréhensible, esthétique, minutieux jusqu'au dernier détail et aussi peu de design que possible.",
      bio: "Figure emblématique du design fonctionnel allemand (Braun). Ses 10 principes ont directement inspiré les Design Systems modernes d'Apple, Google et Figma."
    },
    theory: [
      { title: "1. La Grille de 8px (8-Point Grid)", desc: "Tous les espacements (padding, margin, gap) et hauteurs de blocs doivent être des multiples de 8 (4px pour micro-ajustements, 8, 16, 24, 32, 48, 64px)." },
      { title: "2. Accessibilité Visuelle WCAG AA (4.5:1)", desc: "Le ratio de contraste entre le texte courant et son arrière-plan doit atteindre au moins 4.5:1 (3:1 pour les grands titres au-delà de 24px) pour être lisible par tous." },
      { title: "3. Cibles Tactiles Minimales (44 x 44 px)", desc: "Norme Apple/Android : tout bouton, icône ou lien cliquable doit offrir une zone tactile interactive d'au moins 44 x 44 px (ou 48 x 48 px)." },
      { title: "4. Architecture Atomique des Composants", desc: "Construire l'interface par couches imbriquées : Atomes (couleurs, polices, icônes) -> Molécules (boutons avec icône) -> Organismes (cartes, en-têtes)." }
    ],
    exercise: {
      title: "Conception d'une Carte Produit Interactive 8px (Chrono 20 min)",
      instructions: "Sur une grille de 8px, composez une carte de produit e-commerce : image, badge de catégorie, titre, prix, et bouton d'action respectant la cible tactile de 44px et le contraste WCAG AA."
    },
    correction: {
      student_errors: [
        { label: "Espacements arbitraires", detail: "Usage de valeurs anarchiques (7px, 13px, 19px) créant un rythme visuel désordonné." },
        { label: "Contraste texte insuffisant", detail: "Texte gris clair sur fond blanc avec un ratio de 2.1:1 illisible sous forte luminosité." },
        { label: "Bouton tactile trop étroit", detail: "Bouton d'action de 28px de hauteur causant des erreurs de clic sur smartphone." }
      ],
      remediations: [
        { label: "Verrouillage strict des tokens", detail: "Remplacer tout espacement libre par les tokens autorisés : 8, 16, 24 ou 32px." },
        { label: "Audit de contraste contrast-checker", detail: "Tester systématiquement chaque couple texte/fond avant validation finale." },
        { label: "Bouton tactile 44px de hauteur", detail: "Surface d'appui confortable conforme aux directives ergonomiques internationales." }
      ],
      grades: { silhouette: 9.5, structure: 9.5, valeurs: 9, bords: 9, couleur: 9.5 }
    }
  }
];
