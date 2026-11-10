// =====================================================================
// FILIÈRE DESIGN GRAPHIQUE - PROGRAMME ACADÉMIQUE OFFICIEL (PARTIE 3)
// BLOCS 5 & 6 : PRÉPRESSE RPIP, DÉCOUPE VINYLE, GABARITS 1:1 & GESTION
// =====================================================================
const COURSES_GRAPHISME_P3 = [
  {
    id: "cours-g11-logo-1bit",
    num: "G-11",
    discipline: "graphisme",
    shortTitle: "Création de Logotype",
    title: "Création de Logo & Test de Silhouette",
    domain: "Identité Visuelle & Sémiotique de Marque",
    level: "Technique",
    duration: "30 min",
    image: "assets/planche_pedagogique_edge_control.jpg",
    summary: "Méthode académique de création de logo : soumettre la forme au test impitoyable du noir pur 1-bit sur fond blanc sans aucun dégradé, définir la zone d'exclusion et la taille minimale de lisibilité.",
    artist: {
      name: "Paul Rand & Saul Bass",
      quote: "Si un logo ne fonctionne pas en noir pur à la taille d'un timbre-poste et agrandi sur un panneau routier, son dessin est défaillant.",
      bio: "Maîtres historiques de l'identité visuelle moderne et des symboles graphiques intemporels."
    },
    theory: [
      { title: "1. Le Test de la Silhouette 1-Bit Noir et Blanc", desc: "Avant toute couleur, tester le symbole en noir absolu sans nuance de gris. S'il nécessite un effet de brillance ou une ombre portée pour être lisible, la géométrie est déficiente." },
      { title: "2. La Réduction Maximale à 16x16 Pixels", desc: "Le logo doit rester identifiable à très petite échelle (favicon, broderie de col, bouton de manchette, icône d'application mobile)." },
      { title: "3. La Zone d'Exclusion Magnétique", desc: "Définir un périmètre de sécurité inviolable autour du logotype (basé sur un module x, souvent la hauteur d'une lettre du nom) interdisant tout texte ou élément parasite." },
      { title: "4. Les Interdits de la Charte Graphique", desc: "Documenter explicitement les déformations proscrites : pas d'étirement anamorphique, pas d'ombrage kitsch, pas de rotation libre, pas de fond non contrasté." }
    ],
    exercise: {
      title: "Exercice : Création d'un Monogramme 1-Bit",
      instructions: "Concevez un logotype en monogramme (2 lettres entrelacées) pour une marque de luxe contemporaine. Présentez la version 1-bit noir sur blanc, la version inversée blanc sur noir, la zone d'exclusion cotée et la déclinaison à 16 mm de large."
    },
    correction: {
      student_errors: [
        { label: "Détails microscopiques qui bouchent", detail: "Ajouter des traits ultra-fins de 0.1 mm qui disparaissent à l'impression ou bavent au tampon." },
        { label: "Dépendance totale à la couleur", detail: "Créer un logo qui n'est compréhensible que grâce à son dégradé de couleur." },
        { label: "Absence de zone de protection", detail: "Coller le slogan publicitaire contre le logo sans aucun espace de respiration." }
      ],
      remediations: [
        { label: "Épuration géométrique", detail: "Épaissir les fûts et simplifier les interstices pour garantir une robustesse à toute épreuve." },
        { label: "Validation monochrome préalable", detail: "Interdiction formelle d'ajouter de la couleur avant que la version 1-bit ne soit validée." },
        { label: "Normalisation de la zone d'exclusion", detail: "Fixer une zone de sécurité d'au moins 1x de marge tout autour du cartouche." }
      ],
      grades: { silhouette: 9.5, structure: 9.5, valeurs: 9, bords: 9, couleur: 9 }
    }
  },
  {
    id: "cours-g12-prepresse-300dpi",
    num: "G-12",
    discipline: "graphisme",
    shortTitle: "Normes Prépresse",
    title: "Conformité Prépresse 300 DPI & Fonds Perdus",
    domain: "Chaîne Graphique & Normes Prépresse RPIP",
    level: "Atelier Pro",
    duration: "30 min",
    image: "assets/planche_pedagogique_textures_brosses.jpg",
    summary: "Règles strictes de fabrication d'imprimerie : fond perdu obligatoire de 3 mm sur chaque bord, zone tranquille de sécurité à 5 mm, profil FOGRA39 certifié, formules de noir (texte 100K vs aplat enrichi) et vérification du TAC.",
    artist: {
      name: "Atelier GPO Prépresse",
      quote: "En imprimerie, le massicot coupe avec une tolérance mécanique de 1 millimètre. Sans fond perdu et sans marge de sécurité, votre document est irrémédiablement gâché.",
      bio: "Conducteurs de presse et techniciens prépresse certifiés selon les normes industrielles ISO 12647."
    },
    theory: [
      { title: "1. Le Fond Perdu Obligatoire de 3 mm", desc: "Prolonger systématiquement tous les fonds de couleur et images de 3 mm au-delà de la ligne de coupe finale. Cela évite l'apparition d'un filet blanc en cas de décalage au massicot." },
      { title: "2. La Zone Tranquille de Sécurité (5 mm)", desc: "Ne placer aucun texte, logo ou information importante à moins de 5 mm du bord de coupe final pour parer à toute déviation de la lame." },
      { title: "3. Résolution d'Impression 300 DPI à Échelle 100%", desc: "Vérifier que toutes les images matricielles intégrées possèdent au minimum 300 DPI effectifs à leur taille finale sur le document." },
      { title: "4. Formules de Noir Texte vs Noir Enrichi", desc: "Texte courant : Noir pur C:0 M:0 J:0 N:100 (aucun flou de repérage quadri). Grands aplats de fond : Noir enrichi C:40 M:30 J:30 N:100 pour une profondeur dense avec TAC < 300 %." }
    ],
    exercise: {
      title: "Exercice : Contrôle & Mise en Conformité d'un Dépliant",
      instructions: "Un fichier défaillant fourni par un client présente des textes en noir quadri à 2 mm de la coupe et aucun fond perdu. Rectifiez le document : ajoutez 3 mm de fond perdu, replacez les textes en zone tranquille et appliquez les bonnes formules de noir."
    },
    correction: {
      student_errors: [
        { label: "Filet blanc sur tranche au massicotage", detail: "Arrêter les fonds colorés exactement sur la ligne de coupe finale." },
        { label: "Texte coupé au massicot", detail: "Placer un numéro de téléphone ou un contact à 1 mm du bord du papier." },
        { label: "Maculage par sur-encrage (TAC > 300%)", detail: "Appliquer un noir 4x100% (400% de taux d'encrage total) qui ne sèche pas et colle les feuilles." }
      ],
      remediations: [
        { label: "Débord d'encre systématique", detail: "Paramétrer 3 mm de fond perdu dans le document et activer les repères de coupe à l'export." },
        { label: "Repères de sécurité verrouillés", detail: "Créer des repères magnétiques internes à 5 mm du bord et aligner les textes dessus." },
        { label: "Séparation quadri contrôlée", detail: "Utiliser l'outil Aperçu des séparations pour vérifier que le texte est exclusivement sur la plaque noire (K)." }
      ],
      grades: { silhouette: 9, structure: 9.5, valeurs: 9, bords: 9.5, couleur: 9 }
    }
  },
  {
    id: "cours-g13-stickers-cutcontour",
    num: "G-13",
    discipline: "graphisme",
    shortTitle: "Stickers & Découpe",
    title: "Stickers, Autocollants & Filet CutContour",
    domain: "Fabrication d'Atelier & Plotter Numérique",
    level: "Atelier Pro",
    duration: "30 min",
    image: "assets/session_burton_encre.jpg",
    summary: "Conception de fichiers pour impression et découpe vinyle : création du filet vectoriel magenta 100% nommé CutContour en ton direct et surimpression, débord d'encre technique de 2 mm et gestion de l'échenillage.",
    artist: {
      name: "Atelier GPO Découpe & Vinyle",
      quote: "Le traceur de découpe ne lit pas vos yeux mais la couleur spot exacte nommée par le pilote machine. La rigueur du nommage vectoriel est une question de fabrication.",
      bio: "Opérateurs traceurs Roland VersaWorks et SummaCut en production de stickers et décors adhésifs."
    },
    theory: [
      { title: "1. Le Filet Technique de Découpe (CutContour)", desc: "Créer une nuance de couleur nommée exactement 'CutContour' (respecter la casse), type 'Ton direct' (Spot Color), valeur Magenta 100 %." },
      { title: "2. Épaisseur et Propriété de Surimpression", desc: "Appliquer une épaisseur de contour de 0.25 pt (filet technique fin) et cocher obligatoirement 'Surimpression du contour' pour que la lame n'efface pas l'encre sous-jacente." },
      { title: "3. Le Débord d'Encre Technique (2 mm)", desc: "Prolonger le visuel imprimé de 2 mm au-delà du tracé CutContour pour absorber le micro-décalage mécanique d'avance du rouleau de vinyle." },
      { title: "4. Angle et Facilité d'Échenillage", desc: "Éviter les pointes et angles aigus inférieurs à 30° qui déchirent le vinyle lors du pelage manuel de l'adhésif." }
    ],
    exercise: {
      title: "Exercice : Planche de Stickers Arcade 80x80 mm",
      instructions: "Créez une série de 3 stickers thématiques rétro d'un diamètre maximal de 80 mm. Configurez le tracé vectoriel CutContour en ton direct magenta avec son débord d'encre de 2 mm et vérifiez l'échenillage."
    },
    correction: {
      student_errors: [
        { label: "Nom de nuance incorrect ou manquant", detail: "Nommer la nuance 'decoupe' au lieu de 'CutContour', ce qui rend le fichier invisible pour le RIP." },
        { label: "Absence de débord d'encre extérieur", detail: "Faire coïncider exactement la couleur avec la découpe, créant un liseré blanc au moindre décalage." },
        { label: "Tracés ouverts ou multipoints parasites", detail: "Laisser un contour de découpe disjoint qui bloque la lame du plotter." }
      ],
      remediations: [
        { label: "Vérification dans le gestionnaire de nuances", detail: "Contrôler que la pastille de nuance comporte le triangle et le point de ton direct." },
        { label: "Création d'un calque de découpe dédié", detail: "Isoler le tracé CutContour sur un calque verrouillé nommé 'DECOUPE'." },
        { label: "Tracé fermé continu obligatoire", detail: "Joindre tous les points d'ancrage avec l'outil Jonction avant d'exporter en EPS ou PDF." }
      ],
      grades: { silhouette: 9.5, structure: 9.5, valeurs: 9, bords: 9, couleur: 9 }
    }
  },
  {
    id: "cours-g14-pochoir-ponts",
    num: "G-14",
    discipline: "graphisme",
    shortTitle: "Découpe Vinyle",
    title: "Découpe Vinyle, Pochoir & Ponts de Maintien",
    domain: "Découpe Numérique & Peinture Industrielle",
    level: "Technique",
    duration: "25 min",
    image: "assets/atelier_demo_digital_painting.jpg",
    summary: "Physique du pochoir : comprendre la chute inévitable des îlots centraux sur les lettres et formes fermées (A, B, D, O, P, R, 0, 4, 6, 8, 9). Concevoir des ponts de matière rigides de 1.5 à 2 mm pour le maintien mécanique.",
    artist: {
      name: "Atelier GPO Sérigraphie & Pochoirs",
      quote: "Une lettre sans pont perd son centre dès qu'on décolle le vinyle. En pochoir, le vide et le plein obéissent à la gravité terrestre.",
      bio: "Spécialistes du marquage au pochoir sur bois, métal et caisses de jeux arcade."
    },
    theory: [
      { title: "1. Le Problème des Îlots Libres Flottants", desc: "Dans une forme évidée, tout contour fermé intérieur (l'œil du O, le triangle du A) tombe au sol dès la découpe si aucun lien physique ne le retient au reste de la feuille." },
      { title: "2. Dimensionnement des Ponts de Maintien", desc: "Créer des bandes d'attache d'une largeur minimale de 1.5 à 2 mm pour le vinyle souple, et de 3 à 5 mm pour le pochoir réutilisable rigide (Mylar, polypropylène)." },
      { title: "3. Intégration Esthétique des Césures", desc: "Positionner les ponts de matière dans l'axe de lecture ou sur des lignes de force de la forme pour qu'ils s'intègrent comme un parti pris graphique et non comme un pansement." },
      { title: "4. Nettoyage Vectoriel après Découpe Booléenne", desc: "Utiliser la soustraction par un rectangle de césure, puis nettoyer les points superflus sur les jonctions." }
    ],
    exercise: {
      title: "Exercice : Typographie 'STENCIL' avec Ponts Parfaits",
      instructions: "Vectorisez le mot 'ARCADE 2026' avec une typographie classique sans empattement. Identifiez chaque îlot fermé et intégrez manuellement les ponts de maintien de 2 mm de large pour rendre le mot 100% découpable en pochoir."
    },
    correction: {
      student_errors: [
        { label: "Oubli d'un îlot fermé", detail: "Oublier le chiffre 6 ou la boucle du R, entraînant la perte du centre lors de la pose." },
        { label: "Ponts trop fins (< 1 mm)", detail: "Créer des attaches fragiles qui se déchirent dès le passage de la racle de peinture." },
        { label: "Césures disgracieuses déséquilibrées", detail: "Placer un pont de travers qui déforme la silhouette optique de la lettre." }
      ],
      remediations: [
        { label: "Contrôle visuel systématique de l'alphabet", detail: "Repasser manuellement chaque lettre contenant une contreforme fermée." },
        { label: "Caliper millimétré de contrôle", detail: "Mesurer précisément l'épaisseur des ponts au zoom 400% avec l'outil de mesure." },
        { label: "Alignement vertical ou horizontal des ponts", detail: "Aligner les césures sur les axes cardinaux pour préserver la lisibilité." }
      ],
      grades: { silhouette: 9, structure: 9.5, valeurs: 9, bords: 9, couleur: 8.5 }
    }
  },
  {
    id: "cours-g15-gabarit-arcade-1-1",
    num: "G-15",
    discipline: "graphisme",
    shortTitle: "Gabarit Grand Format",
    title: "Gabarit Industriel Grand Format 1:1",
    domain: "Signalétique Grand Format & Projets Industriels",
    level: "Avancé",
    duration: "40 min",
    image: "assets/planche_pedagogique_shape_language.jpg",
    summary: "Conception millimétrée à l'échelle 1:1 pour la fabrication d'objets réels : habillage complet d'une borne d'arcade, zones d'exclusion des boutons de 28 mm et joystick, overbleed de pose de 10 mm et gestion des flancs en miroir.",
    artist: {
      name: "Atelier GPO Mobilier & Bornes",
      quote: "Une erreur de 2 millimètres sur l'écran d'ordinateur devient une planche de bois gâchée à l'atelier. L'échelle 1:1 exige une précision chirurgicale.",
      bio: "Fabricants français de bornes d'arcade sur mesure et d'habillages graphiques industriels."
    },
    theory: [
      { title: "1. Travailler à l'Échelle Réelle (1:1)", desc: "Configurer le plan de travail aux cotes exactes du panneau physique en millimètres (ex: flanc de 600 x 1750 mm). Aucune approximation permise." },
      { title: "2. Les Zones d'Exclusion Mécanique", desc: "Repérer les perçages de boutons de 28 mm, le passage du joystick (diamètre 40 mm), l'écran et les vis de structure. Interdiction formelle d'y placer un visage ou un texte important." },
      { title: "3. L'Overbleed Technique de Pose (10 mm)", desc: "Pour les adhésifs posés sur des chants avec profilé T-Molding, prévoir 10 mm de débord de pose tout autour de la silhouette pour l'arasage au cutter lors de l'application." },
      { title: "4. Flancs Symétriques en Miroir", desc: "Vérifier que le côté gauche et le côté droit sont orientés face à la marche, avec inversion des textes si nécessaire pour éviter qu'un mot ne soit lu à l'envers." }
    ],
    exercise: {
      title: "Exercice : Habillage Complet d'un Control Panel Arcade",
      instructions: "Sur le gabarit coté fourni (panneau de 600 x 250 mm avec 6 boutons de 28 mm et 1 joystick), composez un visuel percutant dont les éléments clés évitent soigneusement les perçages et intégrez les 5 mm d'overbleed de pose."
    },
    correction: {
      student_errors: [
        { label: "Bouton percé au milieu d'un visage ou texte", detail: "Placer le bouton d'action principal en plein sur le logo ou le regard d'un personnage." },
        { label: "Oubli de l'overbleed de pose", detail: "Faire le fichier à la taille exacte du panneau sans surplus pour l'arasage, rendant la pose impossible." },
        { label: "Texte inversé en miroir sur le flanc", detail: "Retourner l'ensemble du fichier flanc gauche pour le flanc droit sans redresser le texte de marque." }
      ],
      remediations: [
        { label: "Calque technique de perçage superposé", detail: "Conserver un calque non imprimable matérialisant chaque trou mécanique au millimètre." },
        { label: "Overbleed généreux de 10 mm", detail: "Étendre les fonds pour permettre au poseur d'ajuster l'adhésif sur le bois sans risquer de blanc." },
        { label: "Contrôle de lecture des deux flancs", detail: "Vérifier séparément le flanc gauche et le flanc droit en position debout réelle." }
      ],
      grades: { silhouette: 9.5, structure: 9.5, valeurs: 9, bords: 9, couleur: 9 }
    }
  },
  {
    id: "cours-g16-organisation-atelier-nommage",
    num: "G-16",
    discipline: "graphisme",
    shortTitle: "Organisation & BAT",
    title: "Organisation des Fichiers d'Atelier & BAT",
    domain: "Gestion de Production & Rigueur Professionnelle",
    level: "Atelier Pro",
    duration: "25 min",
    image: "assets/studio_dessin_interactif_chrono_croisee.jpg",
    summary: "La traçabilité absolue d'un studio professionnel : structuration en 6 dossiers normés ISO-GPO, convention stricte de nommage de fichiers sans espace ni accent, cycle des versions V01/V02 et protocole d'exportation BAT.",
    artist: {
      name: "Système de Gestion ISO-GPO",
      quote: "Un bon graphiste ne se reconnaît pas seulement à son coup de crayon, mais au fait qu'un collègue peut reprendre son fichier 2 ans plus tard en 30 secondes sans poser une question.",
      bio: "Protocole opérationnel d'organisation et de nommage déployé au sein des ateliers de production graphique."
    },
    theory: [
      { title: "1. L'Arborescence Normalisée en 6 Répertoires", desc: "01_BRIEF (cahier des charges), 02_SOURCES (docs, photos, polices), 03_TRAVAIL (fichiers natifs AI/PSD), 04_VALIDATION (BAT client), 05_IMPRESSION (PDF HD certifiés), 99_ARCHIVES." },
      { title: "2. La Syntaxe Stricte de Nommage de Fichiers", desc: "Format universel : AAAA-MM-JJ_TYPE_sujet-court_V01.ext (ex: 2026-11-10_PROJ_borne-arcade_V01.ai). Jamais d'accents, jamais d'espaces, uniquement des tirets bas et tirets du milieu." },
      { title: "3. La Gestion des Versions (Ne Jamais Écraser un Master)", desc: "Dès qu'une modification substantielle intervient, incrémenter le numéro de version (V01, V02, V03). Conserver l'historique de chaque étape de retouche." },
      { title: "4. BAT & Automatisation d'Atelier (Norme OpenAPI)", desc: "Export BAT verrouillé et interfaçage des flux de fabrication via la norme universelle OpenAPI (openapis.org) : transmission des cotes, fichiers et métadonnées aux machines sans saisie manuelle." }
    ],
    exercise: {
      title: "Exercice : Structuration Complète d'un Dossier Client",
      instructions: "À partir d'un ensemble de 10 fichiers désordonnés nommés 'logo final version 2 copie (1).jpg', réorganisez-les dans l'arborescence officielle en 6 répertoires et renommez chaque fichier selon la charte ISO-GPO."
    },
    correction: {
      student_errors: [
        { label: "Nommage avec espaces et accents", detail: "Utiliser des noms comme 'affiche été 2026 !.ai' provoquant des erreurs sur serveurs et RIP." },
        { label: "Écrasement du fichier original", detail: "Modifier le fichier V01 sans créer de V02, perdant les éléments validés par le client." },
        { label: "Fichiers de travail déposés sur le bureau", detail: "Laisser traîner des polices et liens sans les ranger dans 02_SOURCES." }
      ],
      remediations: [
        { label: "Application rigoureuse de la syntaxe ISO-GPO", detail: "Remplacer les espaces par des tirets bas et supprimer tous les caractères spéciaux." },
        { label: "Incrémentation systématique des versions", detail: "Toujours enregistrer une copie incrémentée à chaque reprise de travail." },
        { label: "Archivage structuré immédiat", detail: "Ranger chaque fichier dans son répertoire dédié dès son téléchargement ou son export." }
      ],
      grades: { silhouette: 9, structure: 10, valeurs: 9, bords: 9, couleur: 9 }
    }
  }
];
