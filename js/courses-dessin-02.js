// =====================================================================
// FILIÈRE DESSIN D'ART & PEINTURE - PROGRAMME ACADÉMIQUE CLASSIQUE (2)
// PALIERS 3 & 4 : MODÈLE VIVANT, DRAPÉS, PEAU SSS & CADRAGE CINÉMA
// =====================================================================
const COURSES_DESSIN_P2 = [
  {
    id: "cours-d06-modele-vivant-dune",
    num: "D-06",
    discipline: "dessin",
    shortTitle: "Modèle Vivant",
    title: "Modèle Vivant, Ligne d'Action & Poses Dynamiques",
    domain: "Anatomie Vivante & Dynamique Corporelle",
    level: "Académique",
    duration: "35 min",
    image: "assets/dune_pose_01_paul_cape_vent.jpg",
    summary: "Méthode académique du croquis de nu et de modèle vivant : capturer l'énergie en 30 secondes grâce à la ligne d'action unique, la bascule des épaules et du bassin (contrapposto) et le transfert du centre de gravité.",
    artist: {
      name: "Kim Jung Gi & George Bridgman",
      quote: "Le corps humain n'est jamais immobile : il est un équilibre permanent de tensions opposées et de forces gravitationnelles en action.",
      bio: "Maîtres mondialement reconnus du dessin de mémoire, de la dynamique corporelle et de la morphologie en perspective."
    },
    theory: [
      { title: "1. La Ligne d'Action Unique (Gesture Line)", desc: "Un seul trait courbe continu qui traverse le personnage du sommet du crâne jusqu'au talon d'appui. Elle résume à elle seule l'élan vital de la pose." },
      { title: "2. Le Contrapposto Classique (Opposition des Ceintures)", desc: "Lorsque la hanche d'appui monte, la ligne des épaules bascule en sens inverse pour compenser le déséquilibre. Si les deux ceintures sont parallèles, le personnage est raide comme un piquet." },
      { title: "3. La Jambe Porteuse et la Ligne de Gravité", desc: "La jambe qui supporte le poids du corps ancre son pied directement à l'aplomb du creux de la gorge (fourchette sternale). La jambe libre est détendue." },
      { title: "4. Cylindres et Boîtes en Raccourci", desc: "Simplifier la cage thoracique et le bassin sous forme de deux blocs tridimensionnels reliés par la colonne vertébrale souple." }
    ],
    exercise: {
      title: "Exercice sur Papier : Étude des 4 Poses Dynamiques (Dune)",
      instructions: "Sur carnet A4 au fusain ou crayon 4B, réalisez 4 études rapides (5 minutes par pose) à partir des modèles de personnages de l'univers Dune : marcheur en plein vent, guerrier en fente d'attaque, guetteur accroupi et silhouette en manteau. Photographiez vos planches de croquis."
    },
    correction: {
      student_errors: [
        { label: "Personnage qui semble tomber sans appui", detail: "Placer le centre de gravité en dehors du polygone de sustentation des pieds." },
        { label: "Corps raide et symétrique (pose de robot)", detail: "Aligner les épaules et les hanches à l'horizontale sans contrapposto." },
        { label: "Membres collés au corps sans silhouette", detail: "Ne pas ouvrir les membres dans l'espace pour rendre la pose lisible d'un coup d'œil." }
      ],
      remediations: [
        { label: "Ligne de gravité projetée au sol", detail: "Vérifier avec un fil à plomb que le poids du corps repose bien sur la jambe d'appui." },
        { label: "Accentuation des angles de bascule", detail: "Exagérer légèrement l'inclinaison opposée torse/bassin dès les premières secondes." },
        { label: "Test de la silhouette pleine (Notan)", detail: "Remplir le personnage en noir pour vérifier que la posture est identifiable immédiatement." }
      ],
      grades: { silhouette: 9.5, structure: 9.5, valeurs: 9, bords: 9, couleur: 8.5 }
    }
  },
  {
    id: "cours-d07-drapes-mecanique-plis",
    num: "D-07",
    discipline: "dessin",
    shortTitle: "Drapés & Plis",
    title: "Drapés d'Atelier & Mécanique des Plis",
    domain: "Dessin Textile & Matières Souples",
    level: "Technique",
    duration: "30 min",
    image: "assets/planche_pedagogique_drapes_plis.jpg",
    summary: "Règles physiques du drapé classique : comprendre les points de suspension, la pesanteur et la tension. Décoder les 7 types de plis fondamentaux (tombant, tubulaire, zigzag, spirale, emboîté, mémoire, étiré).",
    artist: {
      name: "Burne Hogarth & Léonard de Vinci",
      quote: "Le pli d'un tissu n'est jamais aléatoire : il naît toujours de la rencontre entre la tension d'un point d'accroche et l'attraction du sol.",
      bio: "Théoriciens de l'anatomie dynamique et de la dynamique des drapés dans l'art classique et la bande dessinée."
    },
    theory: [
      { title: "1. Points de Suspension et Lignes de Tension", desc: "Le tissu s'étend en éventail à partir des points d'accroche (épaules, coudes, genoux, ceinture). Toutes les rides rayonnent depuis ces ancrages." },
      { title: "2. Les Plis Tubulaires et Tombants", desc: "Formés lorsqu'un tissu tombe librement d'un point de soutien (ex: rideau, jupe, cape). Sections coniques descendantes avec alternance d'ombres et lumières." },
      { title: "3. Les Plis en Zigzag et en Spirale", desc: "Produits par la compression d'un cylindre de tissu (manche repliée, bas de pantalon qui accordéonne sur la chaussure)." },
      { title: "4. L'Épaisseur et la Texture du Textile", desc: "La soie produit des plis nombreux, fins et acérés ; la laine ou le cuir produit des plis rares, massifs, ronds et lourds." }
    ],
    exercise: {
      title: "Exercice sur Papier : Étude d'un Bras Fléchi sous Drapé",
      instructions: "Prenez une chemise ou un drap noué sur un support. Dessinez au crayon graphite ou sanguine le coude plié à 90° : identifiez les plis de compression à l'intérieur de l'articulation et les plis d'étirement tendus à l'extérieur. Envoyez la photo du dessin."
    },
    correction: {
      student_errors: [
        { label: "Plis dessinés en spaghettis informes", detail: "Tracer des traits sinueux au hasard sur le vêtement sans logique de tension." },
        { label: "Tissu sans épaisseur (effet feuille de papier)", detail: "Dessiner le contour du pli par un simple trait noir sans rendre la tranche et le volume du textile." },
        { label: "Oubli de la forme anatomique sous-jacente", detail: "Faire disparaître le bras ou la cuisse sous une montagne de plis déconnectés du squelette." }
      ],
      remediations: [
        { label: "Identification des deux points de traction", detail: "Pointer les deux extrémités tendues et relier les plis par des lignes de force droites." },
        { label: "Rendu des arêtes de pli (bords fermes)", detail: "Traiter le sommet du pli avec un bord ferme et le creux avec une ombre douce dégradée." },
        { label: "Dessin du mannequin nu préalable", detail: "Ébaucher toujours la silhouette du membre nu en traits légers avant d'habiller avec le drapé." }
      ],
      grades: { silhouette: 9, structure: 9.5, valeurs: 9, bords: 9, couleur: 9 }
    }
  },
  {
    id: "cours-d08-gamut-masking-harmonie",
    num: "D-08",
    discipline: "dessin",
    shortTitle: "Harmonie des Couleurs",
    title: "Harmonie des Couleurs & Palette Restreinte",
    domain: "Harmonie Chromatique & Palette Restreinte",
    level: "Académique",
    duration: "30 min",
    image: "assets/planche_pedagogique_gamut_masking.jpg",
    summary: "Méthode James Gurney : briser la palette arc-en-ciel en restreignant le cercle chromatique à l'intérieur d'un masque géométrique (Gamut Masking) pour créer une atmosphère lumineuse cinématographique unifiée.",
    artist: {
      name: "James Gurney (Dinotopia)",
      quote: "La meilleure façon d'obtenir une harmonie de couleur saisissante n'est pas d'ajouter des teintes, mais d'interdire 70 % des couleurs du cercle.",
      bio: "Illustrateur et peintre américain, auteur de 'Color and Light', créateur de la méthode contemporaine du Gamut Masking adoptée par les plus grands studios d'animation."
    },
    theory: [
      { title: "1. Le Problème de la Saturation Totale", desc: "Utiliser toutes les couleurs pures en même temps annule tout sentiment de lumière naturelle et crée une cacophonie visuelle criarde." },
      { title: "2. Le Principe Géométrique du Gamut Mask", desc: "Découper une forme géométrique (triangle, losange, rectangle) sur le cercle chromatique. Seules les teintes situées à l'intérieur du masque sont autorisées pour la composition." },
      { title: "3. La Température de Couleur (Chaud vs Froid)", desc: "Si la lumière directe est chaude (soleil couchant doré), toutes les ombres sont obligatoirement baignées de teintes froides complémentaires (bleu/violet du ciel)." },
      { title: "4. La Couleur Locale Modifiée par l'Ambiance", desc: "Une chemise blanche sous une lumière verte devient verte ; dans l'ombre d'une pièce orangée, elle bascule dans un pourpre sourd." }
    ],
    exercise: {
      title: "Exercice : Illustration d'Ambiance avec Masque Triadique",
      instructions: "Sur papier teinté ou support pictural (gouache, acrylique ou peinture numérique), composez une scène de paysage désertique en restreignant votre palette à un masque triangulaire strict (Ocre jaune, Bleu ardoise désaturé, Rouge brique). Photographiez votre palette et votre étude."
    },
    correction: {
      student_errors: [
        { label: "Intrusion de couleurs hors du masque", detail: "Glisser un vert émeraude pur dans une scène chaude, rompant l'illusion d'une lumière solaire cohérente." },
        { label: "Ombres peintes au noir pur", detail: "Mélanger du noir d'ivoire pour assombrir au lieu d'utiliser la couleur complémentaire désaturée." },
        { label: "Manque d'unification thermique", detail: "Avoir des lumières froides et des ombres froides sans dialogue thermique." }
      ],
      remediations: [
        { label: "Préparation des mélanges sur la palette", detail: "Mélanger les teintes principales avant de toucher au support pour s'assurer de leur accord mutuel." },
        { label: "Ombres colorées vibrantes", detail: "Utiliser la teinte complémentaire de la lumière pour créer des ombres lumineuses et respirantes." },
        { label: "Contrôle de saturation", detail: "Réserver la saturation maximale à un seul point focal de quelques millimètres carrés." }
      ],
      grades: { silhouette: 9, structure: 9, valeurs: 9.5, bords: 9, couleur: 9.5 }
    }
  },
  {
    id: "cours-d09-rendu-peau-sss",
    num: "D-09",
    discipline: "dessin",
    shortTitle: "Rendu de la Peau",
    title: "Rendu de la Peau & Diffusion Lumineuse",
    domain: "Carnation & Peinture Figurative",
    level: "Avancé",
    duration: "35 min",
    image: "assets/planche_pedagogique_sss_peau.jpg",
    summary: "La physique de la chair humaine : comprendre la translucidité de la peau, la diffusion sous-cutanée (Subsurface Scattering), la ligne de transition orange saturée au terminateur et les 3 zones chromatiques du visage.",
    artist: {
      name: "William Bouguereau & John Singer Sargent",
      quote: "La peau n'est pas une surface opaque en plastique : elle est vivante, gorgée de sang qui diffuse la lumière dès qu'un rayon la traverse.",
      bio: "Maîtres absolus de la carnation humaine et de la translucidité des chairs dans la peinture académique du XIXe siècle."
    },
    theory: [
      { title: "1. La Diffusion Sous-Cutanée (Subsurface Scattering)", desc: "La lumière pénètre l'épiderme translucide, rebondit dans les capillaires sanguins et ressort diffusée avec une teinte rouge/orangée éclatante (oreilles, nez, doigts à contre-jour)." },
      { title: "2. Le Liseré Saturé du Terminateur", desc: "À la frontière exacte entre la lumière et l'ombre, là où le rayon rase la peau, apparaît toujours une bande étroite de couleur hyper-saturée (rouge/orange vif)." },
      { title: "3. Les 3 Zones Chromatiques de la Tête", desc: "Zone supérieure (front) : dorée/jaune (peau tendue sur l'os). Zone médiane (joues, nez, oreilles) : rougeâtre/rosée (afflux sanguin). Zone inférieure (mâchoire, menton) : bleutée/grisâtre/verdâtre (barbe, peau plus fine)." },
      { title: "4. L'Évitement du Gris Mort", desc: "Ne jamais utiliser de noir pour ombrer la peau. Les ombres de la chair sont profondes, riches en sanglier, ocres et terres de Sienne brûlées." }
    ],
    exercise: {
      title: "Exercice : Étude Peinte d'un Nez et d'une Oreille à Contre-Jour",
      instructions: "Sur support papier ou toile, peignez une oreille humaine éclairée par l'arrière (lumière traversante vive) et un nez de trois-quarts. Rendez distinctement la translucidité rouge sang, la démarcation saturée du terminateur et les 3 zones du visage. Transmettez la photo."
    },
    correction: {
      student_errors: [
        { label: "Peau crayeuse ou grisâtre (effet cire morte)", detail: "Peindre la chair avec du blanc et du noir, donnant un teint de cadavre sans irrigation sanguine." },
        { label: "Visage monochrome uniforme", detail: "Appliquer la même teinte beige sur le front, le nez et la mâchoire." },
        { label: "Absence de liseré de diffusion", detail: "Faire passer la lumière à l'ombre sans la transition orange vive caractéristique de la chair." }
      ],
      remediations: [
        { label: "Sous-couche sanguine chaude", detail: "Poser une ébauche terre de Sienne ou vermillon avant de monter les demi-teintes." },
        { label: "Nuancement des 3 zones thermiques", detail: "Réchauffer systématiquement les ailes du nez et les pommettes avec des glacis carmin." },
        { label: "Accentuation du terminateur", detail: "Rehausser d'un coup de pinceau rouge/orange saturé la ligne de crête qui sépare le clair de l'obscur." }
      ],
      grades: { silhouette: 9, structure: 9, valeurs: 9, bords: 9.5, couleur: 10 }
    }
  },
  {
    id: "cours-d10-composition-cadrage-cinema",
    num: "D-10",
    discipline: "dessin",
    shortTitle: "Cadrage & Composition",
    title: "Composition Narrative & Cadrage Cinéma",
    domain: "Concept Art & Narration Visuelle",
    level: "Maîtrise",
    duration: "35 min",
    image: "assets/planche_pedagogique_composition_cinema.jpg",
    summary: "Mettre en scène une image mémorable : la règle d'or et des tiers, le cheminement du regard par les lignes directrices, le point focal indiscutable, la superposition des plans (avant-plan, plan moyen, arrière-plan) et le ratio cinématographique 2.39:1.",
    artist: {
      name: "Syd Mead & Roger Deakins",
      quote: "Une image puissante n'est pas une accumulation de jolis dessins, mais un piège optique qui capture le regard et raconte une histoire en un dixième de seconde.",
      bio: "Visual futurist légendaire (Blade Runner, Tron) et directeur de la photographie oscarisé (1917, Blade Runner 2049)."
    },
    theory: [
      { title: "1. Le Point Focal Unique (Centre d'Intérêt)", desc: "Une image ne peut avoir qu'un seul héros visuel. C'est là que doivent converger le plus fort contraste de valeur, le détail le plus aiguisé et la saturation la plus vive." },
      { title: "2. Les Lignes Directrices (Leading Lines)", desc: "Utiliser l'architecture, les routes, les ombres, les regards ou les gestes des personnages pour guider le spectateur de l'entrée de l'image vers le point focal." },
      { title: "3. La Règle des Tiers et le Nombre d'Or", desc: "Décentrer délibérément l'élément principal sur l'un des 4 points d'intersection de la grille des tiers pour créer une tension dynamique vivante." },
      { title: "4. L'Échelonnement en 3 Plans (Profondeur d'Atmosphère)", desc: "Avant-plan sombre et contrasté (amorce/coulisse), plan moyen porteur de l'action, arrière-plan vaporeux et éclairci par la perspective atmosphérique." }
    ],
    exercise: {
      title: "Exercice sur Papier : 3 Thumbnails Narratifs Format 2.39:1",
      instructions: "Sur une feuille de carnet, tracez 3 cadres au ratio cinématographique 2.39:1 (12 x 5 cm). Dans chaque cadre, esquissez au feutre noir ou fusain une composition narrative forte (une poursuite, une découverte solitaire, un face-à-face) avec 3 plans de profondeur étagés. Prenez une photo."
    },
    correction: {
      student_errors: [
        { label: "Sujet centré comme une cible de tir", detail: "Placer le personnage en plein milieu géométrique, rendant l'image statique et ennuyeuse." },
        { label: "Plans confondus sans profondeur", detail: "Dessiner l'arrière-plan avec la même noirceur et le même niveau de détail que l'avant-plan." },
        { label: "Regard qui sort de la feuille", detail: "Faire pointer une flèche ou une ligne directrice vers l'extérieur du cadre, chassant le spectateur de l'image." }
      ],
      remediations: [
        { label: "Décentrage dynamique sur point de force", detail: "Caler la tête du protagoniste sur le tiers supérieur gauche ou droit." },
        { label: "Perspective atmosphérique graduée", detail: "Réduire le contraste et éclaircir les valeurs à mesure que les éléments s'éloignent dans le lointain." },
        { label: "Cadre dans le cadre (Framing)", detail: "Utiliser une arche, un tronc d'arbre ou une porte au premier plan pour enfermer le regard dans la scène." }
      ],
      grades: { silhouette: 9.5, structure: 9.5, valeurs: 9.5, bords: 9, couleur: 9 }
    }
  }
];
