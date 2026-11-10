// =====================================================================
// FILIÈRE DESSIN D'ART & PEINTURE - PROGRAMME ACADÉMIQUE CLASSIQUE (1)
// PALIERS 1 & 2 : FONDAMENTAUX, GÉOMÉTRIE, LUMIÈRE NOTAN & PORTRAIT
// =====================================================================
const COURSES_DESSIN_P1 = [
  {
    id: "cours-d01-visuelle-trait",
    num: "D-01",
    discipline: "dessin",
    shortTitle: "Trait, Ellipses & Formes Simples",
    title: "Contrôle du Geste, Lignes, Ellipses & Construction par Formes Simples",
    domain: "Fondamentaux du Trait & Construction Géométrique",
    level: "Initiation · Fondamentaux",
    duration: "3 × 20 min",
    materiel: "Crayon HB (construction légère), crayon 2B ou feutre fin (trait final), feuilles A4 (sans règle ni gomme).",
    methode: "Dater sa feuille et conserver tous les traits de construction sans gommer afin de mesurer sa progression.",
    image: "assets/2026-11-10_cours-d01_V02.png",
    imageCaption: "Du tracé de construction géométrique (cercles, axes et ellipses au crayon léger) au trait franc.",
    summary: "Apprendre à libérer le geste depuis l'épaule, tracer des lignes droites et des ellipses régulières à main levée, bâtir des cylindres et décomposer tout objet réel en formes géométriques simples.",
    artist: {
      name: "Atelier La Croisée des Arts",
      quote: "L'objectif de ce premier cours n'est pas de faire un beau dessin à tout prix, mais d'éduquer la main et l'œil : un trait franc et une construction simple passent toujours avant les détails.",
      bio: "Fondamentaux du dessin d'observation."
    },
    theory: [
      {
        title: "Tenue du crayon, départ de l'épaule et tracé fantôme",
        desc: "Ne tenez pas le crayon au ras de la mine comme pour écrire (ce qui bloque le poignet et produit de petits traits hachés). Tenez votre crayon à mi-longueur, verrouillez légèrement le poignet et faites partir le mouvement du coude et de l'épaule. Avant de toucher le papier, survolez deux fois la trajectoire dans le vide entre vos deux repères (tracé fantôme) puis tracez d'un seul jet."
      },
      {
        title: "Contrôle de la ligne droite à main levée",
        desc: "Une ligne franche et continue, même légèrement décalée d'un millimètre, vaut toujours mieux qu'une ligne tremblante ou repassée dix fois. Entraînez votre bras sur des séries d'horizontales, de verticales et de diagonales parallèles, puis placez deux points sur la feuille et reliez-les sans règle sur des distances courtes puis longues. Tournez votre feuille si nécessaire pour garder l'angle de bras le plus confortable."
      },
      {
        title: "Cercles, ellipses sur axe et cylindres",
        desc: "Un cercle vu en biais dans l'espace devient une ellipse. Laissez tourner le bras sur 2 passages souples sans freiner : l'ellipse doit rester symétrique autour de son axe central et ses deux extrémités doivent être bien arrondies (jamais pointues en amande). En reliant deux ellipses parallèles par deux droites, vous obtenez le cylindre, volume de base d'une bouteille, d'une tasse ou d'un bras."
      },
      {
        title: "Décomposition d'objets en 5 formes géométriques simples",
        desc: "Tout objet complexe se construit d'abord avec 5 formes primaires : carré, rectangle, cercle, triangle et cylindre. Tracez toujours cet échafaudage au crayon léger (en laissant visibles les traits de construction et l'axe de symétrie central sans gommer) avant d'affirmer le contour définitif : tasse, lampe, joystick, haut-parleur, boîte ou bouteille."
      }
    ],
    subExercises: [
      {
        code: "EXERCICE 1",
        title: "Lignes et contrôle du geste",
        duration: "20 min",
        skill: "Régularité, précision, geste continu",
        task: "Tracer à main levée des séries de lignes horizontales, verticales et diagonales, puis relier deux points sans règle. Refaire avec des lignes longues puis courtes.",
        svgType: "lignes"
      },
      {
        code: "EXERCICE 2",
        title: "Courbes, cercles, ellipses et cylindres",
        duration: "20 min",
        skill: "Souplesse du trait, volumes simples",
        task: "Remplir une page de cercles et d'ellipses de tailles différentes. Dessiner ensuite 5 cylindres simples à partir d'ellipses.",
        svgType: "ellipses"
      },
      {
        code: "EXERCICE 3",
        title: "Formes géométriques simples",
        duration: "25 min",
        skill: "Simplification, construction",
        task: "Construire 10 objets uniquement à partir de carrés, rectangles, cercles, triangles et cylindres : tasse, lampe, joystick, haut-parleur, caisse, bouteille, etc.",
        svgType: "objets"
      }
    ],
    evaluationCriteria: [
      "Assurance et continuité du trait (absence de petits traits hachés)",
      "Régularité des droites et souplesse des ellipses (extrémités arrondies)",
      "Construction par formes simples (carré, rectangle, cercle, triangle, cylindre)",
      "Observation des proportions et symétrie autour de l'axe central",
      "Compréhension des premiers volumes (cylindres bien construits)",
      "Propreté et lisibilité de la planche (traits de construction conservés)"
    ],
    exercise: {
      title: "Mise en pratique : Lignes, Ellipses & 10 Objets en Formes Simples",
      instructions: "Sur feuille A4 (au crayon HB puis 2B, sans règle) : 1) tracez vos séries de lignes droites et reliez des points à main levée, 2) remplissez une page de cercles, d'ellipses et de 5 cylindres, 3) construisez 10 objets simples à partir de carrés, rectangles, cercles, triangles et cylindres (tasse, lampe, joystick, haut-parleur, bouteille...). Photographiez votre travail pour obtenir un retour."
    },
    correction: {
      student_errors: [
        { label: "Trait « poilu » ou haché (poignet crispé)", detail: "Avancer par une multitude de petits coups de crayon hésitants au lieu d'un seul tracé continu venant de l'épaule." },
        { label: "Ellipses pointues en « amande » ou bosselées", detail: "Freiner aux extrémités de l'ovale en créant deux pointes au lieu d'une courbe régulière symétrique autour de son axe." },
        { label: "Dessin du contour extérieur sans structure interne", detail: "Tracer directement le bord final du joystick ou de la tasse sans poser d'abord les rectangles, cylindres et axes de symétrie." }
      ],
      remediations: [
        { label: "Tracé fantôme 2 fois dans le vide avant contact", detail: "Repérer le point de départ et le point d'arrivée, simuler le geste au-dessus du papier, puis tracer d'un coup franc." },
        { label: "Double rotation souple sur chaque ellipse", detail: "Laisser tourner toute l'articulation du coude 2 tours complets sur chaque cercle ou ellipse avant de relever la mine." },
        { label: "Échafaudage géométrique visible (interdiction de gommer)", detail: "Bâtir chaque objet en transparence (boîtes, cylindres, axe central) au crayon HB léger avant d'appuyer le trait final 2B." }
      ],
      grades: { silhouette: 9, structure: 9.5, valeurs: 8.5, bords: 9, couleur: 8.5 }
    }
  },
  {
    id: "cours-d02-geometrie-perspective",
    num: "D-02",
    discipline: "dessin",
    shortTitle: "Shape Language",
    title: "Character Design : Shape Language & Silhouettes",
    domain: "Conception Visuelle & Dynamique des Formes",
    level: "Fondamental",
    duration: "30 min",
    image: "assets/planche_pedagogique_shape_language.jpg",
    summary: "Planche d'instruction La Croisée des Arts : langage des formes primaires et dynamique de silhouette. Carré et rectangle (défense, masse, stabilité), triangle et angles vifs (éclaireur, vitesse, agilité), cercle et courbes (sage, bienveillance, fluidité).",
    artist: {
      name: "La Croisée des Arts",
      quote: "La silhouette et la forme primaire dictent instantanément l'énergie et la lisibilité du personnage.",
      bio: "Planche pédagogique originale de l'école."
    },
    theory: [
      { title: "1. La Ligne d'Horizon (Hauteur des Yeux)", desc: "La ligne d'horizon correspond exactement au niveau des yeux du dessinateur. Tout ce qui est au-dessus se voit par en dessous, tout ce qui est en dessous se voit en plongée." },
      { title: "2. La Perspective à 2 Points de Fuite", desc: "Pour un objet vu de trois-quarts, toutes les arêtes horizontales convergent vers deux points de fuite (gauche et droite) situés impérativement sur la ligne d'horizon." },
      { title: "3. La Méthode de la Boîte Englobante (Bounding Box)", desc: "Avant de dessiner un objet organique ou un meuble complexe, l'enfermer dans un parallélépipède régulier en perspective dont les arêtes servent de repères de guidage." },
      { title: "4. L'Éllipse dans un Carré en Perspective", desc: "Une ellipse vue en biais n'est pas un ovale quelconque mais un cercle inscrit dans un carré déformé par la fuite, dont le grand axe reste perpendiculaire à l'axe de rotation." }
    ],
    exercise: {
      title: "Exercice sur Papier : Composition de Volumes en Perspective",
      instructions: "Sur feuille A4, tracez une ligne d'horizon avec 2 points de fuite distants. Dessinez 3 cubes sous différents angles (un en contre-plongée, un à hauteur d'yeux, un en plongée) surmontés d'un cylindre et d'une sphère. Prenez en photo votre croquis."
    },
    correction: {
      student_errors: [
        { label: "Points de fuite trop rapprochés", detail: "Placer les deux points de fuite sur la même feuille, créant une distorsion grand-angle irréaliste." },
        { label: "Arêtes fuyantes divergentes", detail: "Faire s'élargir le cube vers l'arrière au lieu de le faire converger vers le point de fuite." },
        { label: "Bords d'ellipses pointus", detail: "Terminer les extrémités d'un cylindre par des pointes comme des amandes au lieu de courbes douces." }
      ],
      remediations: [
        { label: "Points de fuite hors champ", detail: "Imaginer ou fixer les points de fuite sur les côtés de la table pour des angles réalistes à 90°." },
        { label: "Prolongement des lignes de fuite", detail: "Vérifier avec une règle fine que chaque arête vise précisément son point d'ancrage." },
        { label: "Cadre carré de référence", detail: "Toujours inscrire l'ellipse dans son plan perspectif avant de tracer la courbe." }
      ],
      grades: { silhouette: 9.5, structure: 9.5, valeurs: 9, bords: 9, couleur: 8.5 }
    }
  },
  {
    id: "cours-d03-notan-valeurs",
    num: "D-03",
    discipline: "dessin",
    shortTitle: "Ombre & Lumière",
    title: "Ombre, Lumière & Échelle des 5 Valeurs",
    domain: "Théorie de la Valeur & Clairs-Obscurs",
    level: "Académique",
    duration: "30 min",
    image: "assets/masterclass_sargent_methode_correction.jpg",
    summary: "Méthode des grands maîtres : simplifier la scène en un Notan binaire (ombre pure vs lumière pure), puis graduer l'échelle en 5 valeurs distinctes (rehaut, demi-teinte claire, demi-teinte sombre, ombre propre, occlusion).",
    artist: {
      name: "John Singer Sargent (1856 - 1925)",
      quote: "Ne peignez pas les détails, peignez la masse de l'ombre contre la masse de la lumière. Si la valeur est juste, la ressemblance est instantanée.",
      bio: "Maître virtuose du portrait académique alla prima, réputé pour sa séparation radicale et infaillible des valeurs lumineuses."
    },
    theory: [
      { title: "1. Le Notan Binaire Fondamental", desc: "Réduire le sujet à deux tons stricts : noir absolu pour toutes les ombres, blanc pour toutes les lumières. Si la silhouette n'est pas lisible en binaire, la composition échouera." },
      { title: "2. La Séparation Infranchissable Ombre / Lumière", desc: "Règle d'or absolue : la valeur la plus claire dans l'ombre doit TOUJOURS être plus foncée que la valeur la plus sombre dans la lumière. Ne jamais mélanger les deux familles." },
      { title: "3. La Ligne de Terminateur (Coupure de Forme)", desc: "La frontière physique précise où les rayons lumineux tangents quittent la surface du volume pour basculer dans l'ombre propre." },
      { title: "4. L'Échelle Académique des 5 Valeurs", desc: "1. Blanc / Rehaut brillant. 2. Demi-teinte claire (couleur locale sous éclairage). 3. Demi-teinte sombre. 4. Ombre propre (core shadow). 5. Noir d'occlusion (creux profonds sans lumière réfléchie)." }
    ],
    exercise: {
      title: "Exercice sur Papier : Étude de Plâtre en Notan & 5 Valeurs",
      instructions: "Sur papier à dessin blanc ou teinté gris, choisissez un objet du quotidien éclairé par une lampe latérale franche. Réalisez d'abord un croquis binaire Notan (2 tons), puis posez les 5 valeurs au crayon graphite ou fusain. Envoyez la photo du résultat."
    },
    correction: {
      student_errors: [
        { label: "Lumière réfléchie trop éclatante", detail: "Dessiner le reflet dans l'ombre aussi blanc que la lumière directe, détruisant la cohérence du volume." },
        { label: "Manque de contraste global", detail: "Rester dans des gris moyens timides sans jamais oser poser les noirs profonds d'occlusion." },
        { label: "Ombres disséminées sans direction", detail: "Placer des ombres arbitraires qui ne correspondent à aucune source lumineuse réelle." }
      ],
      remediations: [
        { label: "Plissement des yeux (Squinting)", detail: "Plisser les paupières pour flouter les détails et ne percevoir que les deux grandes masses Notan." },
        { label: "Contrôle à la bandelette de valeurs", detail: "Placer un nuancier de 5 tons à côté du dessin pour calibrer la noirceur des rehauts et ombres." },
        { label: "Source unique directionnelle", detail: "Toujours travailler avec une seule lumière dominante bien identifiée lors des études." }
      ],
      grades: { silhouette: 9.5, structure: 9, valeurs: 9.5, bords: 9, couleur: 9 }
    }
  },
  {
    id: "cours-d04-modulation-bords",
    num: "D-04",
    discipline: "dessin",
    shortTitle: "Les 4 Bords",
    title: "Les 4 Bords : Tranchant, Ferme, Doux et Perdu",
    domain: "Rendu & Modulation des Transitions",
    level: "Académique",
    duration: "25 min",
    image: "assets/planche_pedagogique_edge_control.jpg",
    summary: "Le secret de la douceur et du focus visuel : différencier et orchestrer les 4 types de transitions (Sharp, Firm, Soft, Lost) pour guider le regard du spectateur sans rigidité ni mollesse.",
    artist: {
      name: "Diego Vélasquez & Anders Zorn",
      quote: "Une toile peinte avec des contours nets partout ressemble à un collage de carton découpé. La vie réside dans les bords perdus qui fondent la forme dans l'atmosphère.",
      bio: "Grands maîtres de la peinture figurative européenne, virtuoses de la transition atmosphérique et de la fusion des contours."
    },
    theory: [
      { title: "1. Bord Tranchant (Sharp Edge)", desc: "Transition abrupte à fort contraste. Caractéristique des contours extérieurs détachés sur fond contrasté ou des ombres portées projetées sur surface plane à proximité immédiate." },
      { title: "2. Bord Ferme (Firm Edge)", desc: "Transition nette mais adoucie sur une fraction de millimètre. Typique des cylindres à courbure rapide, des plis de tissu tendus ou de l'arête du nez." },
      { title: "3. Bord Doux (Soft Edge)", desc: "Dégradé progressif et continu. Typique des volumes sphériques lisses, de la joue, du menton ou des ombres portées qui s'éloignent de leur source." },
      { title: "4. Bord Perdu (Lost Edge)", desc: "Fusion totale où la valeur de l'objet et la valeur du fond sont identiques. L'œil reconstruit la forme de mémoire sans qu'aucun trait ne soit tracé." }
    ],
    exercise: {
      title: "Exercice sur Papier : Étude d'une Sphère aux 4 Bords",
      instructions: "Dessinez une sphère posée sur une table éclairée en lumière rasante. Identifiez et rendez sur votre feuille les 4 types de bords : bord tranchant pour le contact au sol, bord doux pour le terminateur, bord ferme pour le contour éclairé et bord perdu sur la zone d'ombre fondue."
    },
    correction: {
      student_errors: [
        { label: "Cerclage au trait noir dur (effet coloriage)", detail: "Entourer toute la sphère d'un trait sombre uniforme de même intensité." },
        { label: "Bords cotonneux partout (effet flou)", detail: "Tout estomper au doigt sans conserver aucun bord franc d'accroche pour l'œil." },
        { label: "Ombre portée sans diffusion", detail: "Faire une ombre au sol aux contours aussi nets à 20 cm qu'au point de contact." }
      ],
      remediations: [
        { label: "Disparition progressive du trait", detail: "Remplacer le contour linéaire par la simple juxtaposition de deux valeurs de tons." },
        { label: "Hiérarchie du point focal", detail: "Placer les bords les plus tranchants uniquement au centre d'intérêt principal du sujet." },
        { label: "Dégradé de l'ombre portée (Penumbra)", detail: "Adoucir l'extrémité de l'ombre portée à mesure qu'elle s'éloigne de l'objet." }
      ],
      grades: { silhouette: 9, structure: 9, valeurs: 9, bords: 9.5, couleur: 9 }
    }
  },
  {
    id: "cours-d05-anatomie-portrait",
    num: "D-05",
    discipline: "dessin",
    shortTitle: "Anatomie du Visage",
    title: "Anatomie Crânienne & Proportions du Portrait",
    domain: "Morphologie & Portrait Académique",
    level: "Avancé",
    duration: "40 min",
    image: "assets/portrait_classique_masterclass.jpg",
    summary: "Méthode académique du portrait : repères osseux fixes du crâne, méthode des plans d'Andrew Loomis et John Asaro, canons de proportions en tiers et modélisation des volumes faciaux sans dessin superficiel.",
    artist: {
      name: "Andrew Loomis & John Asaro",
      quote: "Une tête bien construite ne s'effondre jamais, même si les détails des yeux ou des lèvres sont à peine esquissés.",
      bio: "Auteur de 'Drawing the Head and Hands' et sculpteur créateur du plan-head canonique d'étude des facettes lumineuses du visage."
    },
    theory: [
      { title: "1. La Sphère Crânienne et les Méplats Temporaux", desc: "Le crâne est une sphère aplatie sur les côtés. La découpe des tempes fixe l'orientation tridimensionnelle de la tête dans l'espace." },
      { title: "2. Les 3 Tiers Proportionnels du Visage", desc: "1. De la racine des cheveux à la ligne des sourcils. 2. Des sourcils à la base du nez. 3. De la base du nez au bas du menton. L'espace entre les deux yeux équivaut exactement à la largeur d'un œil." },
      { title: "3. Les Repères Osseux Invariables", desc: "Les arcades sourcilières, le pont nasal, les pommettes (zygomatiques), l'angle de la mâchoire et le menton ne changent pas avec l'âge ou la corpulence." },
      { title: "4. Décomposition en Plans Géométriques (Planes of the Face)", desc: "Simplifier la face en facettes planes angulaires pour calculer immédiatement quelle zone capte la lumière et quelle facette plonge dans l'ombre." }
    ],
    exercise: {
      title: "Exercice sur Papier : Tête d'Homme en 3/4 aux Plans Faciaux",
      instructions: "Sur feuille A4, construisez une tête de trois-quarts selon la méthode Loomis (sphère, découpe temporale, croix de visage). Modélisez les plans majeurs du visage à la mine graphite ou au fusain en posant les ombres sans dessiner les cils ni les ridules. Transmettez la photo."
    },
    correction: {
      student_errors: [
        { label: "Yeux trop hauts sur le crâne", detail: "Placer la ligne des yeux au tiers supérieur au lieu de la situer au milieu exact de la hauteur totale du crâne." },
        { label: "Nez et bouche dessinés à plat", detail: "Dessiner les contours d'un œil de face sur un visage orienté de trois-quarts." },
        { label: "Attention dispersée sur les détails minuscules", detail: "Passer une heure sur l'iris de l'œil alors que la mâchoire est tordue." }
      ],
      remediations: [
        { label: "Axe central courbé de la face", detail: "Tracer la ligne médiane du front au menton qui suit la courbure sphérique du visage." },
        { label: "Masque des yeux en lunette", detail: "Envisager les deux orbites oculaires comme une seule grande cavité sombre commune." },
        { label: "Ordre immuable du général au particulier", detail: "Valider la boîte crânienne, puis les grands plans d'ombre, et seulement en dernier les pupilles." }
      ],
      grades: { silhouette: 9.5, structure: 9.5, valeurs: 9, bords: 9, couleur: 9 }
    }
  }
];
