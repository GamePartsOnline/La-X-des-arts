// =====================================================================
// FILIÈRE DESIGN GRAPHIQUE - PROGRAMME ACADÉMIQUE OFFICIEL (PARTIE 1)
// BLOCS 1 & 2 : MÉTHODOLOGIE DE PROJET & OUTILS VECTORIELS
// =====================================================================
const COURSES_GRAPHISME_P1 = [
  {
    id: "cours-g01-brief",
    num: "G-01",
    discipline: "graphisme",
    shortTitle: "Analyse du Brief",
    title: "Analyse de la Demande & Cadrage Client",
    domain: "Méthodologie de Projet & Relation Client",
    level: "Fondamental",
    duration: "25 min",
    image: "assets/planche_pedagogique_shape_language.jpg",
    summary: "Méthodologie académique de cadrage : transformer une intention floue en cahier des charges mesurable. Poser les 6 questions obligatoires avant toute esquisse et formaliser les contraintes.",
    artist: {
      name: "Atelier GPO Givry-en-Argonne",
      quote: "Le travail d'un graphiste ne commence pas sur le logiciel, mais dans l'écoute active et l'identification des contraintes non exprimées.",
      bio: "Atelier de fabrication et communication visuelle. Leur méthode de cadrage garantit la conformité entre le besoin client et le produit final."
    },
    theory: [
      { title: "1. Diagnostic du Problème Client", desc: "Distinguer le symptôme de la demande réelle. Savoir pourquoi le client commande ce support et quel objectif chiffré il vise." },
      { title: "2. Les 6 Questions Clés Obligatoires", desc: "1. Public cible précis. 2. Support et dimensions physiques exactes. 3. Contexte d'exposition. 4. Éléments légaux ou obligatoires. 5. Contraintes de fabrication. 6. Délais et livrables attendus." },
      { title: "3. La Fiche de Cadrage de Projet", desc: "Consigner systématiquement par écrit les spécifications validées. Ce document fait office de référence contractuelle tout au long de la production." },
      { title: "4. Reformulation & Validation Formelle", desc: "Rédiger une synthèse claire validée par le commanditaire avant d'engager le temps de recherche plastique." }
    ],
    exercise: {
      title: "Exercice d'Atelier : Cadrage du Brief Client Vague",
      instructions: "Un gérant de commerce vous écrit : 'Je veux un support visuel moderne et percutant pour relancer ma clientèle le mois prochain'. Rédigez le questionnaire de cadrage complet en 6 points et la fiche de synthèse correspondante."
    },
    correction: {
      student_errors: [
        { label: "Démarrage immédiat sans questionner", detail: "Ouvrir un logiciel pour produire sans connaître le format ni le public cible." },
        { label: "Questions fermées ou esthétiques", detail: "Demander au client ses goûts personnels au lieu d'interroger la rentabilité et le contexte d'usage." },
        { label: "Oubli des contraintes de support", detail: "Ignorer si la production est destinée au web, à l'imprimerie offset ou à la sérigraphie." }
      ],
      remediations: [
        { label: "Méthode d'écoute active", detail: "Remplir rigoureusement la grille de cadrage initiale." },
        { label: "Orientation usage et cible", detail: "Recadrer l'échange sur le comportement du consommateur final." },
        { label: "Validation écrite préalable", detail: "Faire signer le cahier des charges simplifié avant tout travail graphique." }
      ],
      grades: { silhouette: 9, structure: 9.5, valeurs: 9, bords: 9, couleur: 9 }
    }
  },
  {
    id: "cours-g02-pistes",
    num: "G-02",
    discipline: "graphisme",
    shortTitle: "Moodboard & Pistes",
    title: "Moodboard, Tendances & 3 Pistes Graphiques",
    domain: "Méthodologie Créative & Direction Artistique",
    level: "Fondamental",
    duration: "30 min",
    image: "assets/planche_pedagogique_shape_language.jpg",
    summary: "Méthode académique de divergence créative : dépasser l'évidence de la première idée en construisant un moodboard référencé et en explorant 3 univers graphiques distincts.",
    artist: {
      name: "Paul Rand (1914 - 1996)",
      quote: "Ne cherchez pas à être original à tout prix. Cherchez d'abord à être juste, cohérent et compréhensible.",
      bio: "Pionnier du design corporatif moderne (IBM, ABC, UPS, NeXT). Ses principes d'exploration méthodique structurent l'enseignement du design."
    },
    theory: [
      { title: "1. Le Danger de la Première Idée", desc: "La première impulsion est presque systématiquement un cliché visuel issu de références inconscientes communes." },
      { title: "2. Construction d'une Planche d'Inspiration", desc: "Sélectionner 10 à 15 documents visuels réels classés par typographies, palettes de teintes, textures et mises en page." },
      { title: "3. La Règle des 3 Univers Tranchés", desc: "Explorer 3 axes radicalement opposés pour un même sujet : par exemple Patrimoine/Tradition, Minimaliste/Contemporain, et Illustratif/Dynamique." },
      { title: "4. Argumentaire Plastique et Fonctionnel", desc: "Présenter chaque direction avec des arguments objectifs répondant aux critères du brief, sans jugement affectif." }
    ],
    exercise: {
      title: "Exercice : Déclinaison en 3 Directions Graphiques",
      instructions: "Sur le thème imposé 'Atelier d'Artisanat d'Art', composez une planche de recherche présentant 3 pistes graphiques distinctes (croquis et mots-clés) accompagnées de 3 lignes d'argumentation pour chacune."
    },
    correction: {
      student_errors: [
        { label: "Variantes cosmétiques au lieu de vraies pistes", detail: "Proposer la même idée en changeant simplement la couleur de fond." },
        { label: "Absence de références réelles", detail: "Travailler de mémoire sans documenter son univers plastique." },
        { label: "Justification affective", detail: "Expliquer son choix par 'je trouve ça joli' au lieu d'argumenter sur la lisibilité." }
      ],
      remediations: [
        { label: "Divergence plastique radicale", detail: "Obligation de varier la typographie, la structure et le style d'illustration sur chaque piste." },
        { label: "Moodboard méthodique", detail: "Collecter des pièces graphiques imprimées de référence avant de dessiner." },
        { label: "Soutenance technique", detail: "Relier chaque choix formel à un objectif précis du brief initial." }
      ],
      grades: { silhouette: 9, structure: 9, valeurs: 8.5, bords: 9, couleur: 9.5 }
    }
  },
  {
    id: "cours-g03-bitmap-vectoriel",
    num: "G-03",
    discipline: "graphisme",
    shortTitle: "Image Vectorielle",
    title: "Image Matricielle vs Image Vectorielle",
    domain: "Technologie Numérique & Chaîne PAO",
    level: "Fondamental",
    duration: "25 min",
    image: "assets/session_bladerunner_lineart.jpg",
    summary: "Différence fondamentale entre grille de pixels matricielle et formules mathématiques vectorielles. Comprendre la résolution, le redimensionnement infini et les formats de fichiers d'atelier.",
    artist: {
      name: "Atelier GPO PAO",
      quote: "Une image matricielle agrandie perd irrémédiablement sa netteté. Le vecteur conserve une pureté géométrique absolue à toutes les échelles.",
      bio: "Équipe prépresse et PAO de GPO SARL, spécialisée dans la conformité des formats pour la découpe numérique et l'impression grand format."
    },
    theory: [
      { title: "1. Structure du Pixel et Résolution", desc: "L'image matricielle (raster) est une grille fixe de pixels. Agrandir une image sans rééchantillonner détériore les contours par crénelage." },
      { title: "2. Définition Mathématique du Vecteur", desc: "Le dessin vectoriel repose sur des coordonnées (x, y) et des équations de courbes. Il est indépendant de toute résolution d'écran ou d'impression." },
      { title: "3. Usages Professionnels Appropriés", desc: "Matriciel obligatoire pour la photographie et les nuances picturales continues. Vectoriel obligatoire pour logos, typographies, icônes et signalétique." },
      { title: "4. Écosystème des Formats Sources", desc: "Formats vectoriels pérennes : SVG, AI, EPS, PDF vectoriel. Formats matriciels : TIFF (prépresse non compressé), PSD, PNG, WebP." }
    ],
    exercise: {
      title: "Exercice : Diagnostic et Choix de Format",
      instructions: "À partir d'un ensemble de 4 éléments (un logo d'entreprise, une photo de portrait en studio, un plan de ville et une icône d'application), rédigez le format source recommandé, la résolution cible et justifiez votre décision technique."
    },
    correction: {
      student_errors: [
        { label: "Intégration d'un logo en JPEG basse définition", detail: "Importer une vignette web pixélisée sur un document d'imprimerie 300 DPI." },
        { label: "Confusion entre taille en Ko et résolution réelle", detail: "Croire qu'un fichier lourd garantit une image exploitable en grand format." },
        { label: "Pixelisation des typographies", detail: "Aplatir le texte en image matricielle au lieu de conserver les polices vectorielles." }
      ],
      remediations: [
        { label: "Conservation exclusive des originaux vectoriels", detail: "Toujours exiger et manipuler le logo au format SVG ou vectoriel natif." },
        { label: "Calcul systématique de la résolution effective", detail: "Vérifier les DPI réels à l'échelle finale de reproduction." },
        { label: "Chaîne vectorielle continue", detail: "Maintenir tous les éléments graphiques et textes sous forme vectorielle jusqu'à l'export." }
      ],
      grades: { silhouette: 9.5, structure: 9.5, valeurs: 9, bords: 9, couleur: 8.5 }
    }
  },
  {
    id: "cours-g04-bezier",
    num: "G-04",
    discipline: "graphisme",
    shortTitle: "Courbes de Bézier",
    title: "Courbes de Bézier & Tracés de Précision",
    domain: "Dessin Vectoriel de Précision",
    level: "Technique",
    duration: "35 min",
    image: "assets/session_bladerunner_lineart.jpg",
    summary: "Méthode académique du tracé vectoriel : placement des points d'ancrage uniquement aux extremums, verrouillage des tangentes à 0°/90° et élimination des nœuds superflus pour une fluidité parfaite.",
    artist: {
      name: "Pierre Bézier (1910 - 1999)",
      quote: "Une courbe parfaite n'est pas le fruit du hasard mais la stricte tension géométrique entre ses points de contrôle.",
      bio: "Ingénieur français pionnier des courbes paramétriques appliquées à la conception assistée par ordinateur dans l'industrie automobile."
    },
    theory: [
      { title: "1. La Règle d'Or des Extremums", desc: "Placer un point d'ancrage uniquement là où la courbe change de direction ou atteint un sommet horizontal ou vertical (minima / maxima)." },
      { title: "2. Tangentes Orthogonales (0°, 45°, 90°)", desc: "Maintenir la touche Majuscule pour bloquer les poignées de tangence sur des axes stricts. Cela prévient les cassures et bosses disgracieuses." },
      { title: "3. Économie Radicale de Nœuds", desc: "Moins une forme contient de points, plus la courbe est tendue, pure et facilement modifiable. Un tracé avec trop de points est impossible à découper proprement." },
      { title: "4. Différenciation des Types de Points", desc: "Points d'angle (tangentes indépendantes ou nulles) versus points de raccordement fluide (tangentes alignées et symétriques)." }
    ],
    exercise: {
      title: "Exercice : Reproduction Vectorielle d'une Forme Complexe",
      instructions: "Importez le modèle de lettre calligraphiée fourni. Redessinez intégralement son contour à la plume vectorielle en utilisant au maximum 8 points d'ancrage, positionnés strictement sur les extremums avec tangentes horizontales et verticales."
    },
    correction: {
      student_errors: [
        { label: "Multiplication anarchique des points", detail: "Poser un point tous les 5 millimètres, produisant un contour cabossé." },
        { label: "Points d'ancrage au milieu des courbes", detail: "Placer un point sur le ventre d'une courbe au lieu de le situer au point d'inflexion." },
        { label: "Poignées de tangence asymétriques tordues", detail: "Laisser les tangentes flotter sans contrainte angulaire, créant des angles cassés." }
      ],
      remediations: [
        { label: "Protocole d'ancrage aux extremums", detail: "Repérer les points cardinaux (nord, sud, est, ouest) de chaque boucle avant de cliquer." },
        { label: "Usage systématique de la touche Majuscule", detail: "Contraindre l'angle de chaque tangente pour garantir une courbure harmonieuse." },
        { label: "Nettoyage par suppression de nœuds", detail: "Supprimer tout point intermédiaire et ajuster la tension avec les poignées." }
      ],
      grades: { silhouette: 9.5, structure: 9, valeurs: 9, bords: 9.5, couleur: 9 }
    }
  },
  {
    id: "cours-g05-pathfinder",
    num: "G-05",
    discipline: "graphisme",
    shortTitle: "Outils Booléens",
    title: "Formes Géométriques & Outils Booléens",
    domain: "Dessin Vectoriel & Pictogrammes",
    level: "Technique",
    duration: "30 min",
    image: "assets/session_burton_encre.jpg",
    summary: "Méthode de construction par primitives géométriques : créer des symboles et pictogrammes complexes par réunion, soustraction, exclusion et intersection (Pathfinder) plutôt que par tracé libre.",
    artist: {
      name: "Otis Shepard & Gerd Arntz",
      quote: "Une icône puissante est une équation visuelle résolue par la géométrie la plus élémentaire.",
      bio: "Figures majeures de l'histoire du graphisme et de l'Isotype, ayant fondé le langage universel des pictogrammes modernes."
    },
    theory: [
      { title: "1. Décomposition en Primitives", desc: "Toute silhouette complexe peut se ramener à un assemblage de cercles, rectangles, polygones réguliers et segments orientés." },
      { title: "2. Les 4 Opérations Booléennes Fondamentales", desc: "Union (fusionner plusieurs formes en une seule), Soustraction (évider une forme par une autre), Intersection (ne conserver que la zone commune), Exclusion." },
      { title: "3. La Grille Modulaire de Construction", desc: "Positionner les primitives sur une grille magnétique au pixel ou au millimètre près pour garantir une symétrie et des espacements rigoureux." },
      { title: "4. Nettoyage des Tracés Composés", desc: "Décomposer les contours, fusionner les formes chevauchantes et vérifier qu'aucun tracé invisible ou point orphelin ne subsiste." }
    ],
    exercise: {
      title: "Exercice : Création d'un Pictogramme d'Atelier",
      instructions: "Construisez le symbole d'un cadenas de sécurité moderne uniquement à partir de 2 cercles parfaits et 2 rectangles, par opérations d'exclusion et de soustraction booléennes. Aucun tracé libre à la plume n'est autorisé."
    },
    correction: {
      student_errors: [
        { label: "Dessin approximatif à main levée", detail: "Tenter de dessiner un cercle à la plume au lieu d'utiliser l'outil ellipse parfait." },
        { label: "Non-alignement des primitives", detail: "Fusionner des formes décalées d'une fraction de millimètre sans centrage préalable." },
        { label: "Superposition de formes sans fusion", detail: "Laisser des formes empilées les unes sur les autres au lieu d'unifier le contour." }
      ],
      remediations: [
        { label: "Outils d'alignement stricts", detail: "Sélectionner les formes et appliquer l'alignement horizontal/vertical centré avant toute opération booléenne." },
        { label: "Vérification en mode fil de fer (Ctrl+Y)", detail: "Contrôler la structure interne pour s'assurer qu'aucun tracé parasite n'est masqué." },
        { label: "Simplification finale", detail: "Unifier l'objet en un seul tracé composite net prêt pour la production." }
      ],
      grades: { silhouette: 9, structure: 9.5, valeurs: 9, bords: 9, couleur: 9 }
    }
  }
];
