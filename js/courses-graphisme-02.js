// =====================================================================
// AXE 3 : COULEURS, PRÉPRESSE 300 DPI & FABRICATION DE STICKERS
// Issu du référentiel officiel du programme de formation GPO SARL
// =====================================================================
const COURSES_GRAPHISME_P2 = [
  {
    id: "cours-g05-couleur",
    num: "G-05",
    discipline: "graphisme",
    title: "Couleurs, Nuancier Pantone & Règle des 60-30-10",
    domain: "Colorimétrie & Chartes Graphiques",
    level: "Tous Niveaux",
    duration: "20 min",
    image: "assets/planche_pedagogique_gamut_masking.jpg",
    summary: "Maîtriser la couleur professionnelle : la différence capitale entre RVB (écran) et CMJN (impression), l'usage des tons directs Pantone (PMS), et la formule 60-30-10 pour équilibrer une identité visuelle.",
    artist: {
      name: "Josef Albers (1888 - 1976)",
      quote: "Une couleur n'est jamais vue telle qu'elle est réellement. Elle trompe continuellement l'œil en fonction de son entourage.",
      bio: "Maître du Bauhaus et auteur de l'Interaction of Color. Ses expérimentations rigoureuses sur la perception chromatique sont au cœur de la méthodologie de l'école."
    },
    theory: [
      { title: "1. RVB vs CMJN : La Règle Incontournable", desc: "Le RVB (Rouge, Vert, Bleu) est une synthèse additive pour écrans émettant de la lumière. Le CMJN (Cyan, Magenta, Jaune, Noir) est une synthèse soustractive pour pigments physiques absorbant la lumière. Tout projet imprimé doit être conçu en CMJN." },
      { title: "2. Les Tons Directs Pantone (PMS)", desc: "Encres pré-mélangées en usine garantissant une teinte rigoureusement identique sur papier, textile, bois ou métal, indispensable pour les logos de marque." },
      { title: "3. La Règle des 60-30-10 en Branding", desc: "60 % pour la couleur de fond dominante, 30 % pour la structure secondaire, 10 % pour la couleur d'accentuation (bouton d'action, sceau, alerte)." },
      { title: "4. Le Nuancier Quadridimensionnel", desc: "Chaque couleur d'une charte doit être documentée avec ses 4 références : Pantone, formule CMJN pour impression, valeurs RVB et code hexadécimal (#HEX) pour le web." }
    ],
    exercise: {
      title: "Charte Chromatique Complète 60-30-10 (Chrono 15 min)",
      instructions: "Composez une palette de marque équilibrée de 3 couleurs (Dominante 60 %, Secondaire 30 %, Accent 10 %). Documentez pour chacune les valeurs CMJN, RVB et le code HEX avec justification du choix."
    },
    correction: {
      student_errors: [
        { label: "Palette sans hiérarchie", detail: "3 couleurs très saturées appliquées à parts égales créant une cacophonie visuelle." },
        { label: "Couleur néon RVB non imprimable", detail: "Usage de vert fluo ou bleu électrique RVB hors gamut, devenant terne et boueux à l'impression CMJN." },
        { label: "Absence de contraste texte", detail: "Texte jaune ou orange clair posé sur fond blanc avec un ratio de lisibilité désastreux." }
      ],
      remediations: [
        { label: "Application des pourcentages", detail: "Réserver la teinte la plus vive à 10 % seulement pour faire office de point focal." },
        { label: "Vérifier le gamut CMJN", detail: "Travailler dès le départ en mode colorimétrique CMJN (ISO Coated v2)." },
        { label: "Contraste normé", detail: "S'assurer d'un ratio de contraste d'au moins 4.5:1 entre texte et arrière-plan." }
      ],
      grades: { silhouette: 9, structure: 9.5, valeurs: 9, bords: 9, couleur: 10 }
    }
  },
  {
    id: "cours-g06-prepresse",
    num: "G-06",
    discipline: "graphisme",
    title: "Chaîne Graphique : Prépresse 300 DPI, Fonds Perdus & Noirs",
    domain: "Technique Prépresse & Normes Print",
    level: "Fondamental à Intermédiaire",
    duration: "20 min",
    image: "assets/planche_pedagogique_gamut_masking.jpg",
    summary: "Sécuriser vos fichiers avant envoi en impression : fond perdu obligatoire de 3 mm, zone tranquille de sécurité à 5 mm, 300 DPI natif, conversion FOGRA39, formules de noir (texte 100K vs enrichi) et vectorisation des polices.",
    artist: {
      name: "Atelier d'Impression GPO SARL",
      quote: "Une erreur de 2 millimètres sur un écran coûte zéro centime ; sur un tirage de 1 000 exemplaires au massicot, elle met le travail au pilon.",
      bio: "Atelier de production et d'impression industrielle. Le respect strict des normes de prépresse est la garantie d'un produit fini impeccable sans rebut."
    },
    theory: [
      { title: "1. Fond Perdu (Bleed) de 3 mm Obligatoire", desc: "Toute couleur ou image touchant le bord de page doit déborder de 3 mm au-delà du trait de coupe pour compenser les micro-décalages inévitables du massicotage mécanique." },
      { title: "2. Zone Tranquille de Sécurité à 5 mm", desc: "Aucun texte ou élément graphique essentiel ne doit être placé à moins de 5 mm à l'intérieur du format fini pour éviter d'être rogné lors de la coupe." },
      { title: "3. Résolution Native 300 DPI à Échelle 1:1", desc: "Une image à 72 DPI apparaît floue et pixélisée en impression. Toujours vérifier que la résolution effective en pixels par pouce est de 300 DPI à taille réelle." },
      { title: "4. Les Formules de Noir Imprimerie", desc: "Noir texte fin : C:0 M:0 J:0 N:100 (évite le flou de repérage des 4 plaques). Noir enrichi pour grands aplats : C:30 M:40 J:30 N:100 (chaud) ou C:50 M:30 J:20 N:100 (froid). TAC total vérifié < 300 %." }
    ],
    exercise: {
      title: "Contrôle & Préparation d'un Fichier Flyer Print A6 (Chrono 20 min)",
      instructions: "Sur un format A6 (105 x 148 mm), configurez le plan de travail avec fond perdu de 3 mm (111 x 154 mm total), zone de sécurité interne à 5 mm, aplat en noir enrichi, texte en noir pur 100K et vectorisation de tous les textes."
    },
    correction: {
      student_errors: [
        { label: "Filet blanc au massicot", detail: "Visuel arrêté pile sur la ligne de coupe sans les 3 mm de débord extérieur." },
        { label: "Texte rogné", detail: "Mentions légales collées à 1.5 mm du bord rognées lors du passage sous la lame." },
        { label: "Texte en noir quadri baveux", detail: "Texte composé en noir C:100 M:100 J:100 N:100 créant des bavures de décalage de plaques." }
      ],
      remediations: [
        { label: "Plan de travail étendu", detail: "Activer les repères de fond perdu rouge dès la création du document." },
        { label: "Repères de sécurité magnétiques", detail: "Poser 4 repères guides à 5 mm des bords et verrouiller la grille." },
        { label: "Vérification des séparations", detail: "Contrôler que le texte noir n'apparaît que sur la plaque du noir (K)." }
      ],
      grades: { silhouette: 9, structure: 9.5, valeurs: 9, bords: 9.5, couleur: 9 }
    }
  },
  {
    id: "cours-g07-sticker",
    num: "G-07",
    discipline: "graphisme",
    title: "Création de Stickers sous Contrainte & Tracé CutContour",
    domain: "Signalétique, Découpe & Goodies",
    level: "Tous Niveaux",
    duration: "25 min",
    image: "assets/planche_pedagogique_shape_language.jpg",
    summary: "Méthode officielle du projet de stage GPO SARL : concevoir un sticker sous contrainte (format 80 x 80 mm, 3 couleurs max, lisible à 1 mètre), créer le calque vectoriel de découpe CutContour et optimiser la planche d'impression.",
    artist: {
      name: "Atelier GPO Givry-en-Argonne",
      quote: "Un sticker doit être immédiatement reconnaissable en un coup d'œil et posséder un contour de découpe sans défaut pour passer sur le traceur.",
      bio: "Fabricant de stickers de collection et planches événementielles. La maîtrise du calque de découpe technique est la compétence reine du graphiste d'atelier."
    },
    theory: [
      { title: "1. Le Gabarit sous Contrainte (80 x 80 mm)", desc: "Créer un visuel qui s'inscrit dans un carré ou cercle de 80 x 80 mm maximum. Le design doit être percutant et tenir compte du format compact." },
      { title: "2. La Règle des 3 Couleurs Franches Maximum", desc: "Pour garantir un impact visuel fort et une fidélité parfaite en sérigraphie ou impression vinyle, limiter la composition à 3 teintes franches bien contrastées." },
      { title: "3. Lisibilité Immédiate à 1 Mètre de Recul", desc: "Épreuve reine d'atelier GPO : reculer d'un mètre ou réduire le visuel à 2 cm sur écran. Les grandes formes et le message doivent rester instantanément déchiffrables." },
      { title: "4. Le Calque Vectoriel CutContour", desc: "Pour piloter la lame du traceur de découpe (plotter), créer un contour vectoriel fermé d'épaisseur 0.25 pt sur un calque séparé, assigné à un ton direct nommé exactement 'CutContour' en magenta 100 %." }
    ],
    exercise: {
      title: "Création d'un Sticker Arcade Découpé à la Forme (Chrono 20 min)",
      instructions: "Sujet officiel du cahier d'exercices GPO SARL : Créez un sticker de 80 x 80 mm sur le thème 'Arcade / Rétrogaming'. Contraintes : 3 couleurs max, lisible à 1 mètre de recul, avec calque de contour de découpe CutContour vectoriel propre."
    },
    correction: {
      student_errors: [
        { label: "Détails microscopiques illisibles", detail: "Micro-textes et détails de 0.5 mm totalement illisibles dès qu'on recule d'un mètre." },
        { label: "Contour CutContour absent ou en pixels", detail: "Tracé de découpe manquant ou tracé en image bitmap inexploitable par le traceur." },
        { label: "Angles de coupe trop aigus", detail: "Pointes acérées de moins de 15° qui s'arrachent lors de la découpe mécanique ou du déchenillage." }
      ],
      remediations: [
        { label: "Simplifier la silhouette", detail: "Supprimer les micro-textures inutiles au profit de masses graphiques nettes." },
        { label: "Calque CutContour normé", detail: "Créer un ton direct magenta 100 % en surimpression d'épaisseur 0.25 pt." },
        { label: "Arrondir les angles de coupe", detail: "Adoucir les pointes extérieures avec un rayon minimum de 1 mm pour faciliter la pose." }
      ],
      grades: { silhouette: 9.5, structure: 9.5, valeurs: 9, bords: 9, couleur: 9.5 }
    }
  }
];
