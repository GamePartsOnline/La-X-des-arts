// =====================================================================
// COURS GRAPHISME PARTIE 1 : BRANDING, TYPOGRAPHIE & PRÉPRESSE
// Issu du référentiel pilote d'école de graphisme GPO SARL
// =====================================================================
const COURSES_GRAPHISME_P1 = [
  {
    id: "masterclass-rand",
    num: "G-01",
    discipline: "graphisme",
    title: "01 Branding : Identité Visuelle & Test de Logo de Paul Rand",
    domain: "Identité de Marque & Sémiotique",
    level: "Tous Niveaux",
    duration: "25 min",
    image: "assets/masterclass_paul_rand_logo.jpg",
    summary: "Méthode Paul Rand et protocole d'atelier GPO : tester la pérennité d'un logo sur 7 critères, maîtriser la silhouette 1-bit noir pur sur blanc, construire la grille d'exclusion et formaliser un brief face à un client vague.",
    artist: {
      name: "Paul Rand (1914 - 1996)",
      quote: "Le design est la méthode consistant à assembler la forme et le contenu. Un logo ne vend pas, il identifie.",
      bio: "Père du design corporatif moderne (IBM, ABC, UPS, NeXT). Ses principes de lisibilité absolue et de réduction géométrique sont appliqués dans les ateliers de production de La Croisée des Arts."
    },
    theory: [
      { title: "1. Le Test de Logo en 7 Critères", desc: "Distinctivité, Visibilité, Adaptabilité (de la puce 16px au panneau 4x3m), Mémorabilité, Universalité, Intemporalité et Simplicité radicale." },
      { title: "2. La Silhouette 1-Bit Noir Pur sur Blanc", desc: "Si un logo ne fonctionne pas en noir absolu sans dégradé ni ombre portée, son dessin est défaillant et sera inexploitable en gravure, pochoir ou découpe vinyle." },
      { title: "3. Traitement du Brief 'Client Vague'", desc: "Protocole officiel d'atelier GPO : avant de dessiner, poser les 6 questions indispensables (cible, dimensions, style, contraintes techniques, délais, livrables)." },
      { title: "4. Les 3 Directions Graphiques d'Exploration", desc: "Pour un même sujet, explorer 3 univers tranchés avant de choisir : Rétro 80s / Arcade, Moderne Minimaliste, et Illustré / Cartoon." }
    ],
    exercise: {
      title: "Identité Visuelle & Déclinaison en 3 Directions (Chrono 20 min)",
      instructions: "Sur le thème 'Atelier Arcade & Création', formulez les 5 questions clés du brief. Esquissez 3 pistes graphiques distinctes (Rétro, Minimaliste, Illustré), puis finalisez la meilleure piste en silhouette 1-bit avec zone d'exclusion."
    },
    correction: {
      student_errors: [
        { label: "Logo dépendant de la couleur", detail: "Formes imbriquées devenant une masse confuse une fois passées en noir pur 1-bit." },
        { label: "Démarrage sans questionnement", detail: "Exécution immédiate du croquis sur un brief flou sans avoir validé les dimensions ou la cible." },
        { label: "Finesse de trait non imprimable", detail: "Lignes de moins de 0.25 pt invisibles lors d'une réduction à 20 mm." }
      ],
      remediations: [
        { label: "Épreuve du noir absolu", detail: "Toujours valider le monogramme en aplat noir 100K avant de choisir une couleur." },
        { label: "Checklist brief client", detail: "Rédiger et faire contresigner la fiche brief avant d'ouvrir le logiciel vectoriel." },
        { label: "Épaisseur minimale normée", detail: "Imposer un filet minimum de 0.75 pt pour garantir la tenue en sérigraphie et flocage." }
      ],
      grades: { silhouette: 9.5, structure: 9.5, valeurs: 9, bords: 9, couleur: 9.5 }
    }
  },
  {
    id: "fiche-g01",
    num: "G-02",
    discipline: "graphisme",
    title: "02 Édition & Mise en page : Typographie & Hiérarchie Visuelle",
    domain: "Typographie & Micro-Mise en Page",
    level: "Fondamental",
    duration: "20 min",
    image: "assets/planche_pedagogique_bords_peinture.jpg",
    summary: "Maîtriser les 3 niveaux de lecture infaillibles, l'accord harmonieux Serif / Sans-Serif, le calcul optique de l'interlignage (135 %) et la composition d'une affiche percutante sans aucune illustration.",
    artist: {
      name: "Jan Tschichold (1902 - 1974)",
      quote: "La typographie parfaite est l'art de rendre le langage visible sans interposer la vanité du dessinateur entre le texte et le lecteur.",
      bio: "Auteur de Die neue Typographie. Il a codifié les règles modernes de composition asymétrique, de contraste typographique et d'utilisation de l'espace blanc."
    },
    theory: [
      { title: "1. Les 3 Niveaux de Lecture Infaillibles", desc: "Niveau 1 : Titre accroche visible à 3 mètres (48-72pt). Niveau 2 : Informations clés (date, lieu, sous-titre 18-24pt). Niveau 3 : Détails et mentions légales (9-11pt)." },
      { title: "2. Règle d'Or du Contraste de Graisses", desc: "Associer une graisse extrême (Black / Heavy) à une graisse fine (Light / Regular). Bannir l'association molle de deux graisses proches (Medium + Semi-Bold)." },
      { title: "3. Calcul Optique de l'Interlignage (135 %)", desc: "Pour un corps de 10pt, fixer l'interligne à 13.5pt ou 14pt. Pour les grands titres au-delà de 36pt, resserrer l'interligne à 100-110 % pour éviter les trous blancs." },
      { title: "4. Le Pouvoir Structurant de l'Espace Blanc", desc: "L'espace vide n'est pas un manque : c'est le cadre respiratoire qui donne son autorité au texte. Grouper les blocs logiques et aérer les marges." }
    ],
    exercise: {
      title: "Affiche Événementielle 100 % Typographique A5 (Chrono 20 min)",
      instructions: "Sujet officiel GPO SARL : Composez une affiche A5 sans AUCUNE illustration. Texte obligatoire : 'SOIRÉE ARCADE - Vendredi 20 h - Entrée libre - GPO SARL'. Travaillez uniquement sur les tailles, graisses, espacements et alignements."
    },
    correction: {
      student_errors: [
        { label: "Monotonie d'échelle", detail: "Toutes les lignes composées dans des corps voisins (18pt, 22pt, 24pt) sans accroche forte." },
        { label: "Centrage systématique flottant", detail: "Texte centré au milieu de la feuille sans ligne de force ni marge cohérente." },
        { label: "Interlignage par défaut écrasé", detail: "Lignes de titres majuscules dont les hampes se touchent disgracieusement." }
      ],
      remediations: [
        { label: "Amplifier le ratio d'échelle", detail: "Multiplier au minimum par 3 le corps du titre principal par rapport aux informations secondaires." },
        { label: "Alignement sur fer à gauche", detail: "Ancrer la composition sur une verticale forte pour guider la lecture occidentale." },
        { label: "Respiration typographique", detail: "Aérer les blocs et vérifier le tracking des majuscules (+50 à +100 unités)." }
      ],
      grades: { silhouette: 9, structure: 9.5, valeurs: 9, bords: 9, couleur: 8.5 }
    }
  },
  {
    id: "fiche-g02",
    num: "G-03",
    discipline: "graphisme",
    title: "03 Chaîne Graphique : Prépresse, CMJN & Fonds Perdus",
    domain: "Technique Prépresse & Normes Print",
    level: "Fondamental à Intermédiaire",
    duration: "20 min",
    image: "assets/planche_pedagogique_gamut_masking.jpg",
    summary: "Sécuriser vos fichiers avant envoi à l'imprimerie : fond perdu obligatoire de 3 mm, zone tranquille de sécurité à 5 mm, 300 DPI natif, conversion FOGRA39, formules de noir (texte vs aplats) et vectorisation des polices.",
    artist: {
      name: "Johannes Gutenberg (1400 - 1468)",
      quote: "L'impression mécanique exige que chaque millimètre de métal ou de papier soit calculé sous peine de défaillance globale.",
      bio: "Inventeur de l'imprimerie à caractères mobiles. Les impératifs de tolérance mécanique et de calage qu'il a initiés régissent toujours les presses industrielles contemporaines."
    },
    theory: [
      { title: "1. Fond Perdu (Bleed) de 3 mm Obligatoire", desc: "Toute couleur ou image touchant le bord de page doit déborder de 3 mm au-delà du trait de coupe pour compenser les micro-décalages du massicotage." },
      { title: "2. Zone Tranquille de Sécurité à 5 mm", desc: "Aucun texte ou élément graphique essentiel ne doit être placé à moins de 5 mm à l'intérieur du format fini pour éviter d'être rogné." },
      { title: "3. Résolution Native 300 DPI à Échelle 1:1", desc: "Une image à 72 DPI apparaît floue et pixélisée en impression. Toujours vérifier la résolution effective en pixels par pouce dans les métadonnées." },
      { title: "4. Les Formules de Noir Imprimerie", desc: "Noir texte fin : C:0 M:0 J:0 N:100 (évite le flou de calage). Noir enrichi pour grands aplats : C:30 M:40 J:30 N:100 (chaud) ou C:50 M:30 J:20 N:100 (froid). TAC < 300 %." }
    ],
    exercise: {
      title: "Préparation d'un Fichier Flyer Print Conforme (Chrono 20 min)",
      instructions: "Sur un format A6 (105 x 148 mm), configurez le gabarit d'impression avec fond perdu de 3 mm (111 x 154 mm total), zone de sécurité interne à 5 mm, aplat noir enrichi, texte en noir 100K et vectorisation de tous les textes."
    },
    correction: {
      student_errors: [
        { label: "Filet blanc au massicotage", detail: "Visuel arrêté exactement sur la ligne de coupe sans les 3 mm de débord extérieur." },
        { label: "Texte coupé", detail: "Mentions légales collées à 1.5 mm du bord rognées lors de la découpe." },
        { label: "Texte en noir quadri baveux", detail: "Texte composé en noir C:100 M:100 J:100 N:100 créant des bavures de repérage." }
      ],
      remediations: [
        { label: "Vérifier le plan de travail étendu", detail: "Activer les repères de fond perdu rouge dans Illustrator ou InDesign dès la création." },
        { label: "Repères de sécurité magnétiques", detail: "Poser 4 repères guides à 5 mm des bords et verrouiller la grille." },
        { label: "Séparation des encres", detail: "Vérifier avec la palette Aperçu des séparations que le texte ne figure que sur la plaque noire." }
      ],
      grades: { silhouette: 9, structure: 9.5, valeurs: 9, bords: 9.5, couleur: 9 }
    }
  }
];
