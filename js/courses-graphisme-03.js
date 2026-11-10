// =====================================================================
// COURS GRAPHISME PARTIE 3 : GABARITS INDUSTRIELS & GUIDES 12 COLONNES
// Issu du référentiel pilote d'école de graphisme GPO SARL
// =====================================================================
const COURSES_GRAPHISME_P3 = [
  {
    id: "fiche-g06",
    num: "G-07",
    discipline: "graphisme",
    title: "07 Gabarits Industriels : Habillage de Borne d'Arcade & Découpe",
    domain: "Gabarits Industriels & Grands Formats",
    level: "Intermédiaire à Avancé",
    duration: "25 min",
    image: "assets/planche_pedagogique_shape_language.jpg",
    summary: "Méthode d'atelier GPO SARL : concevoir un habillage graphique (Side-Art, Marquee, Bezel) sur gabarit industriel échelle 1:1, sécuriser les zones d'exclusion techniques (boutons, écran, vis, charnières) et gérer l'overbleed de pose.",
    artist: {
      name: "Atelier GPO Givry-en-Argonne",
      quote: "Un habillage magnifique sur écran est un échec s'il place le visage du personnage principal en plein sous un trou de bouton de 28 mm.",
      bio: "Atelier de fabrication et de restauration de bornes d'arcade, flippers et signalétique d'art. Leur protocole de gabarit industriel garantit une fabrication sans rebut."
    },
    theory: [
      { title: "1. Conception sur Gabarit Échelle 1:1", desc: "Toujours importer le gabarit vectoriel d'atelier fourni aux cotes exactes en millimètres. Verrouiller le calque technique des découpes et perçages." },
      { title: "2. Zones d'Exclusion Techniques", desc: "Identifier les perçages de boutons (diamètre 28 mm), l'axe du joystick, l'ouverture de l'écran, les cornières d'angle et les serrures. Aucun texte ni élément visuel clé dans ces zones." },
      { title: "3. Débord de Pose (Overbleed 10 mm)", desc: "Pour les vinyles polymères adhésifs posés sur bois ou métal, prévoir 10 mm de fond perdu supplémentaire pour permettre l'arasement au cutter lors de la pose en atelier." },
      { title: "4. Symétrie & Miroir des Flancs Latéraux", desc: "Vérifier la cohérence entre le côté gauche et le côté droit : inverser la composition ou adapter la narration pour que les éléments regardent toujours vers l'avant de la machine." }
    ],
    exercise: {
      title: "Habillage d'un Flanc (Side-Art) d'Arcade sur Gabarit (Chrono 25 min)",
      instructions: "Sujet officiel GPO SARL : À partir des dimensions d'un gabarit de borne compacte, composez le flanc latéral (Side-Art). Préservez les zones de fixation, intégrez 10 mm de débord de pose et préparez le fichier d'impression CMJN 300 DPI."
    },
    correction: {
      student_errors: [
        { label: "Visage percé par un boulon", detail: "Personnage principal placé sous la zone de perçage de la charnière supérieure." },
        { label: "Absence de débord de pose", detail: "Fichier fourni aux cotes exactes sans les 10 mm de marge d'arasement pour le poseur." },
        { label: "Éléments textuels coupés par le T-molding", detail: "Typographie collée au bord tranchant rognée lors de l'application de la moulure plastique." }
      ],
      remediations: [
        { label: "Calque d'exclusion visible", detail: "Garder le calque des perçages visible en surimpression rouge semi-transparente pendant toute la composition." },
        { label: "Extension d'arasement 10 mm", detail: "Prolonger systématiquement les textures de fond 10 mm au-delà du tracé de coupe." },
        { label: "Zone de sécurité T-molding", detail: "Conserver une marge intérieure de sécurité de 25 mm par rapport au contour extérieur." }
      ],
      grades: { silhouette: 9.5, structure: 10, valeurs: 9, bords: 9.5, couleur: 9 }
    }
  },
  {
    id: "fiche-g07",
    num: "G-08",
    discipline: "graphisme",
    title: "08 Guides, Repères & Mise en Page : Grille 12 Colonnes & Baseline",
    domain: "Mise en Page, Précision & Typométrie",
    level: "Fondamental à Intermédiaire",
    duration: "20 min",
    image: "assets/planche_pedagogique_composition_cinema.jpg",
    summary: "Maîtriser l'ossature invisible de tout design réussi : mise en place de la grille magnétique à 12 colonnes, règle des tiers pour les points focaux, grille de ligne de base (baseline grid) pour un alignement typographique sans faille.",
    artist: {
      name: "Josef Müller-Brockmann (1914 - 1996)",
      quote: "La grille est un système d'ordre qui rend l'information visuelle claire, lisible et harmonieuse.",
      bio: "Pionnier du Style Typographique International suisse et auteur de Systèmes de Grille en Design Graphique. Son approche rigoureuse structure aujourd'hui toute la mise en page imprimée et web."
    },
    theory: [
      { title: "1. La Grille Modulaire à 12 Colonnes", desc: "Division géométrique ultra-polyvalente permettant des agencements en 1, 2, 3, 4 ou 6 colonnes sans rupture d'harmonie. Gouttières fixes régulières (16px, 20px ou 5mm) pour cadencer l'espace blanc." },
      { title: "2. La Baseline Grid (Grille de Ligne de Base)", desc: "Alignement vertical obligatoire de toutes les lignes de texte courant et des titres sur un pas régulier (ex: pas de 12pt ou 16px). Cela empêche les décalages de lignes disgracieux entre deux colonnes adjacentes." },
      { title: "3. Règle des Tiers et Points d'Accroche Visuelle", desc: "Découpage de l'espace en 9 rectangles réguliers par deux lignes horizontales et deux verticales. Placer les éléments clés (titre, visuel d'appel, bouton) aux 4 intersections de ces lignes pour un dynamisme naturel." },
      { title: "4. Repères d'Atelier Print : Fonds Perdus & Zones de Sécurité", desc: "Ne jamais concevoir sans repères techniques : 3 mm de fond perdu (bleed) pour les couleurs au bord, traits de coupe, et zone tranquille (marge intérieure de sécurité de 5 mm minimum) exempte de texte." }
    ],
    exercise: {
      title: "Mise en Page Structurée d'une Affiche A4 ou Double Page Éditoriale (Chrono 20 min)",
      instructions: "Instaurez une grille rigoureuse à 12 colonnes et une baseline grid de 12pt. Disposez un titre percutant, un chapô, deux colonnes de texte justifiées sur la baseline, une citation sur 4 colonnes et un bloc visuel calé sur un tiers stratégique avec marge technique de sécurité de 5 mm."
    },
    correction: {
      student_errors: [
        { label: "Texte flottant hors baseline", detail: "Les lignes de texte d'une colonne ne correspondent pas en hauteur à celles de la colonne voisine." },
        { label: "Éléments collés au bord de coupe", detail: "Absence de marge de sécurité de 5 mm, risquant un massicotage involontaire du texte." },
        { label: "Gouttières anarchiques", detail: "Espacements variables entre les colonnes cassant le rythme visuel global." }
      ],
      remediations: [
        { label: "Verrouillage sur la grille de ligne de base", detail: "Activer l'alignement sur la grille dans les paramètres de paragraphe." },
        { label: "Respect des zones de sécurité et fonds perdus", detail: "3 mm de débord extérieur pour les fonds et 5 mm de marge intérieure minimale." },
        { label: "Rigidité modulaire des 12 colonnes", detail: "Largeurs de blocs strictement calées sur 3, 4, 6 ou 8 colonnes avec gouttières fixes." }
      ],
      grades: { silhouette: 9.5, structure: 10, valeurs: 9, bords: 9.5, couleur: 9 }
    }
  }
];
