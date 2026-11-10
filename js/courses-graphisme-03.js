// =====================================================================
// AXE 4 : POCHOIR, GABARITS INDUSTRIELS & ORGANISATION D'ATELIER
// Issu du référentiel officiel du programme de formation GPO SARL
// =====================================================================
const COURSES_GRAPHISME_P3 = [
  {
    id: "cours-g08-pochoir",
    num: "G-08",
    discipline: "graphisme",
    title: "Découpe de Pochoir 1 Couleur & Gestion des Ponts Physiques",
    domain: "Fabrication d'Atelier & Pochoirs",
    level: "Intermédiaire",
    duration: "20 min",
    image: "assets/planche_pedagogique_bords_peinture.jpg",
    summary: "Méthode d'atelier GPO : transformer un dessin vectoriel en pochoir découpable physique (mylar, carton, vinyle), créer des ponts de maintien solides (minimum 2 mm) et supprimer les parties flottantes.",
    artist: {
      name: "Atelier GPO Givry-en-Argonne",
      quote: "Dans un pochoir, tout ce qui n'est pas physiquement rattaché au cadre principal tombe lors de la découpe et disparaît pour toujours.",
      bio: "Spécialiste de la signalétique et du marquage au pochoir sur bois et métal. La gestion des ponts est une compétence clé entre design graphique et fabrication manuelle."
    },
    theory: [
      { title: "1. La Contrainte Physique du Pochoir", desc: "Contrairement à une impression où l'encre est déposée, le pochoir est une feuille évidée. Toute zone blanche intérieure (comme le centre des lettres O, A, P, D, B) doit rester reliée au cadre." },
      { title: "2. Les Ponts de Maintien (Bridges)", desc: "Créer des bandes de matière reliant les îlots intérieurs au fond extérieur. Largeur minimale recommandée à l'atelier : 2 mm pour du vinyle adhésif, 3 à 4 mm pour du mylar ou pochoir réutilisable." },
      { title: "3. Suppression des Parties Flottantes", desc: "Vérifier le tracé en mode contour : aucun polygone intérieur ne doit être isolé sans attache. Si nécessaire, réagencer le dessin pour intégrer les ponts comme éléments graphiques naturels." },
      { title: "4. Solidité & Tenue sous l'Aérosol", desc: "Éviter les languettes fines et pointues qui se soulèvent lors du passage du rouleau ou sous le souffle de la bombe de peinture, provoquant des coulures disgracieuses." }
    ],
    exercise: {
      title: "Création d'un Pochoir Logo 1 Couleur Découpable (Chrono 20 min)",
      instructions: "Sujet officiel du cahier d'exercices GPO SARL : Transformez un visuel ou lettrage en pochoir 1 couleur. Créez des ponts réguliers d'au moins 2 mm sur chaque boucle fermée pour garantir que toutes les parties restent solidaires après découpe."
    },
    correction: {
      student_errors: [
        { label: "Centres de lettres perdus", detail: "L'intérieur des lettres P et O n'a pas de pont et tombe au moment de la découpe." },
        { label: "Ponts trop fins cassants", detail: "Ponts de 0.5 mm qui se déchirent dès la première manipulation du pochoir." },
        { label: "Bavures de peinture prévisibles", detail: "Angles aigus non maintenus qui vont flotter sous le jet de peinture." }
      ],
      remediations: [
        { label: "Audit des îlots intérieurs", detail: "Passer mentalement en revue chaque boucle pour vérifier qu'elle possède au moins 2 ponts opposés." },
        { label: "Épaisseur minimale d'atelier", detail: "Mesurer les ponts avec l'outil règle pour garantir 2 mm minimum." },
        { label: "Intégration esthétique des ponts", detail: "Dessiner les ponts en suivant les lignes de force du logo plutôt que de simples fentes arbitraires." }
      ],
      grades: { silhouette: 9.5, structure: 9.5, valeurs: 9, bords: 9.5, couleur: 9 }
    }
  },
  {
    id: "cours-g09-gabarit",
    num: "G-09",
    discipline: "graphisme",
    title: "Gabarit Industriel Échelle 1:1 : Habillage de Borne d'Arcade",
    domain: "Gabarits Industriels & Grands Formats",
    level: "Intermédiaire à Avancé",
    duration: "25 min",
    image: "assets/planche_pedagogique_shape_language.jpg",
    summary: "Méthode d'atelier GPO SARL : concevoir un habillage graphique (Side-Art, Marquee, Bezel) sur gabarit industriel échelle 1:1, sécuriser les zones d'exclusion techniques (boutons, écran, vis, serrures) et gérer l'overbleed de pose.",
    artist: {
      name: "Atelier GPO Givry-en-Argonne",
      quote: "Un habillage magnifique sur écran est un échec s'il place le visage du personnage principal en plein sous un trou de bouton de 28 mm.",
      bio: "Atelier de fabrication et de restauration de bornes d'arcade, flippers et signalétique d'art. Leur protocole de gabarit industriel garantit une fabrication sans rebut."
    },
    theory: [
      { title: "1. Travailler sur Gabarit Échelle 1:1", desc: "Toujours importer le fichier vectoriel aux cotes exactes en millimètres. Verrouiller le calque technique des découpes et perçages dès l'ouverture." },
      { title: "2. Les Zones d'Exclusion Techniques", desc: "Identifier les perçages de boutons (diamètre 28 mm), l'axe du joystick, l'ouverture de l'écran, les cornières d'angle et les serrures. Aucun texte ni visage dans ces zones." },
      { title: "3. Débord de Pose (Overbleed 10 mm)", desc: "Pour les vinyles polymères adhésifs posés sur bois ou métal, prévoir 10 mm de fond perdu supplémentaire pour permettre l'arasement au cutter lors de la pose en atelier." },
      { title: "4. Symétrie & Miroir des Flancs Latéraux", desc: "Vérifier la cohérence entre le côté gauche et le côté droit : les personnages et éléments dynamiques doivent toujours regarder vers l'avant de la machine." }
    ],
    exercise: {
      title: "Habillage d'un Flanc (Side-Art) d'Arcade sur Gabarit (Chrono 25 min)",
      instructions: "Sujet officiel GPO SARL : À partir d'un gabarit de borne d'arcade, composez le visuel du flanc latéral (Side-Art). Préservez les zones de perçage, intégrez 10 mm de débord de pose et préparez le fichier d'impression CMJN 300 DPI."
    },
    correction: {
      student_errors: [
        { label: "Visage percé par un bouton", detail: "Visuel clé positionné pile sous l'axe d'un perçage de bouton ou d'une vis de fixation." },
        { label: "Absence de débord de pose", detail: "Fichier fourni aux cotes exactes sans les 10 mm d'arasement pour le poseur." },
        { label: "Texte coupé par la moulure", detail: "Typographie collée au bord extérieur masquée par le T-molding en caoutchouc." }
      ],
      remediations: [
        { label: "Calque technique rouge en surimpression", detail: "Conserver le calque des perçages visible en rouge semi-transparent pendant toute la composition." },
        { label: "Overbleed d'atelier 10 mm", detail: "Étendre systématiquement les fonds 10 mm au-delà du trait de coupe réel." },
        { label: "Marge de sécurité T-molding", detail: "Garder une marge intérieure de sécurité de 25 mm par rapport au contour extérieur." }
      ],
      grades: { silhouette: 9.5, structure: 10, valeurs: 9, bords: 9.5, couleur: 9 }
    }
  },
  {
    id: "cours-g10-organisation",
    num: "G-10",
    discipline: "graphisme",
    title: "Organisation d'Atelier, Versions V01/BAT & Nommage",
    domain: "Gestion de Projet & Méthode Professionnelle",
    level: "Tous Niveaux",
    duration: "15 min",
    image: "assets/planche_pedagogique_composition_cinema.jpg",
    summary: "Méthode d'atelier GPO : structurer son dossier en 6 répertoires normés, gérer le cycle des versions (V01, V02, BAT, FINAL), appliquer la charte de nommage ISO et garantir la traçabilité des fichiers dans le temps.",
    artist: {
      name: "Atelier GPO Givry-en-Argonne",
      quote: "Un bon graphiste ne se reconnaît pas seulement à son trait, mais à sa capacité à retrouver un fichier source intact et prêt à imprimer deux ans après sa création.",
      bio: "Règles de gestion et charte de nommage appliquées au quotidien pour la traçabilité de toutes les commandes et projets clients chez GPO SARL."
    },
    theory: [
      { title: "1. Les 6 Dossiers Obligatoires du Projet", desc: "01_BRIEF (cahier des charges), 02_SOURCES (docs, photos, logos clients), 03_TRAVAIL (fichiers natifs AI/PSD), 04_VALIDATION (BAT, maquettes présentées), 05_IMPRESSION (PDF HD certifiés), 06_ARCHIVES (sauvegardes finies)." },
      { title: "2. Le Cycle des Versions (V01, V02, BAT, FINAL)", desc: "Ne jamais écraser un fichier existant. Incrémenter les versions à chaque étape : V01 (première proposition), V02 (corrections), BAT (bon à tirer validé par le client), FINAL (prêt pour la production)." },
      { title: "3. La Syntaxe de Nommage Standardisée ISO", desc: "Format : AAAA-MM-JJ_TYPE_sujet-court_V01.ext (exemple : 2026-11-10_PROJ_sticker-arcade_V01.ai). Jamais d'accents, jamais d'espaces, jamais de symboles parasites." },
      { title: "4. Sauvegarde & Clôture de Fin de Journée", desc: "Règle quotidienne d'atelier : en fin de journée, sauvegarder son travail, vérifier l'arborescence et consigner 5 minutes de notes de suivi dans le journal de bord." }
    ],
    exercise: {
      title: "Organisation & Nommage d'un Dossier Client Réel (Chrono 15 min)",
      instructions: "Sujet officiel d'évaluation GPO SARL : Vous disposez d'un brief client, d'images sources, de croquis, d'une version V01, d'une correction client et d'un PDF d'impression. Rangez-les dans l'arborescence des 6 dossiers et proposez les noms de fichiers successifs."
    },
    correction: {
      student_errors: [
        { label: "Fichiers jetés en vrac", detail: "Fichiers tous mélangés sur le bureau ou à la racine sans classement logique." },
        { label: "Noms de fichiers anarchiques", detail: "Fichiers nommés 'logo final', 'logo final 2', 'vrai final.ai' impossibles à dater et tracer." },
        { label: "Caractères interdits et espaces", detail: "Noms comportant des accents, des espaces ou des parenthèses risquant de corrompre les liens PAO." }
      ],
      remediations: [
        { label: "Structure en 6 sous-dossiers", detail: "Créer systématiquement l'arborescence 01_BRIEF à 06_ARCHIVES dès l'ouverture du projet." },
        { label: "Incrémentation stricte V01 / V02", detail: "Garder l'historique complet des versions pour pouvoir revenir en arrière si le client change d'avis." },
        { label: "Application de la charte de nommage", detail: "Remplacer les espaces par des tirets bas (_) et retirer tout accent ou symbole." }
      ],
      grades: { silhouette: 9.5, structure: 10, valeurs: 9, bords: 9.5, couleur: 9 }
    }
  }
];
