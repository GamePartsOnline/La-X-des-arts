// =====================================================================
// FILIÈRE DESSIN D'ART & PEINTURE - PROGRAMME ACADÉMIQUE CLASSIQUE (1)
// PALIERS 1 & 2 : FONDAMENTAUX, GÉOMÉTRIE, LUMIÈRE NOTAN & PORTRAIT
// =====================================================================
const COURSES_DESSIN_P1 = [
  {
    id: "cours-d01-visuelle-trait",
    num: "D-01",
    discipline: "dessin",
    title: "Tenue de l'Outil, Mémoire Musculaire & Visée Sight-Size",
    domain: "Dessin d'Observation Fondamental",
    level: "Initiation Académique",
    duration: "25 min",
    image: "assets/masterclass_sargent_portrait.jpg",
    summary: "Les bases de l'atelier classique : lâcher prise du poignet, dessin au coude et à l'épaule, tenue du crayon en plumeau et méthode de visée comparative à l'échelle optique 1:1 (Sight-Size).",
    artist: {
      name: "Charles Bargue & Jean-Léon Gérôme",
      quote: "L'œil doit apprendre à juger les distances et les angles avec la précision d'un compas avant que la main ne pose le moindre détail.",
      bio: "Auteurs du célèbre Cours de Dessin de l'Académie des Beaux-Arts de Paris (1866), référence absolue de l'enseignement classique."
    },
    theory: [
      { title: "1. Tenue de l'Outil & Articulation Motrice", desc: "Ne jamais tenir le crayon comme un stylo d'écriture coincé entre les doigts. Tenir le manche à mi-longueur, paume ouverte, pour faire partir le geste de l'épaule et du coude." },
      { title: "2. La Méthode de Visée Comparative (Sight-Size)", desc: "Tendre le bras verrouillé au coude, fermer un œil et utiliser le crayon ou une aiguille à tricoter pour mesurer les ratios de hauteur et largeur du modèle." },
      { title: "3. La Ligne d'Aplomb et les Horizontales", desc: "Projeter mentalement une verticale absolue depuis le point culminant pour vérifier où tombent le nez, le menton ou le talon. Tracer des lignes de niveau pour caler les symétries." },
      { title: "4. L'Échauffement Musculaire Quotidien", desc: "Remplir une feuille A4 de lignes droites parallèles sans règle, d'ellipses régulières et de cercles parfaits d'un seul jet fluide." }
    ],
    exercise: {
      title: "Exercice sur Papier : Planche d'Échauffement & Visée",
      instructions: "Sur une feuille de carnet A4, réalisez au crayon 2B : 10 lignes droites parfaites sans trembler, 8 ellipses inclinées à 45° et le dessin d'une bouteille d'atelier mesurée à la visée sight-size avec sa ligne d'aplomb centrale. Photographiez votre feuille."
    },
    correction: {
      student_errors: [
        { label: "Geste crispé du poignet (traits hachurés)", detail: "Dessiner par petits coups de crayon hésitants comme des poils au lieu d'un trait continu franc." },
        { label: "Proportions déformées à vue d'œil", detail: "Commencer le dessin sans mesurer le ratio hauteur/largeur avec le crayon tendu." },
        { label: "Asymétrie gauche/droite", detail: "Dessiner un côté plus large que l'autre sans vérifier les horizontales de repère." }
      ],
      remediations: [
        { label: "Posture debout ou reculée", detail: "Se tenir droit, bras tendu, pour embrasser le modèle et la feuille d'un seul regard." },
        { label: "Mesure systématique de l'unité étalon", detail: "Prendre la largeur du goulot comme unité et compter combien de fois elle entre dans la hauteur totale." },
        { label: "Tracé fantôme avant le contact", detail: "Faire le geste dans l'air au-dessus du papier deux ou trois fois avant de poser le trait définitif." }
      ],
      grades: { silhouette: 9, structure: 9.5, valeurs: 8.5, bords: 9, couleur: 8.5 }
    }
  },
  {
    id: "cours-d02-geometrie-perspective",
    num: "D-02",
    discipline: "dessin",
    title: "Volumes Primaires & Perspective Linéaire Spatiale",
    domain: "Géométrie Descriptive & Espace 3D",
    level: "Fondamental",
    duration: "30 min",
    image: "assets/planche_pedagogique_shape_language.jpg",
    summary: "Construire l'illusion de la profondeur : cube, sphère, cylindre et cône dans l'espace. Ligne d'horizon, perspective à 1, 2 et 3 points de fuite, raccourcis visuels et boîtes englobantes.",
    artist: {
      name: "Albrecht Dürer & Piero della Francesca",
      quote: "La perspective est le gouvernail et le gouvernail de la peinture : sans elle, aucune forme ne trouve sa véritable place dans l'espace.",
      bio: "Maîtres de la Renaissance ayant codifié les lois géométriques de la projection perspective et des volumes dans l'espace."
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
    title: "Notan Binaire & Décomposition des 5 Valeurs",
    domain: "Théorie de la Valeur & Clairs-Obscurs",
    level: "Académique",
    duration: "30 min",
    image: "assets/masterclass_sargent_portrait.jpg",
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
    title: "Le Contrôle des 4 Bords : Tranchant, Ferme, Doux et Perdu",
    domain: "Rendu & Modulation des Transitions",
    level: "Académique",
    duration: "25 min",
    image: "assets/planche_pedagogique_bords.jpg",
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
    title: "Anatomie Crânienne, Proportions & Portrait Alla Prima",
    domain: "Morphologie & Portrait Académique",
    level: "Avancé",
    duration: "40 min",
    image: "assets/masterclass_sargent_portrait.jpg",
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
