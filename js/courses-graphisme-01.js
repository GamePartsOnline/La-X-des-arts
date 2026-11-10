// =====================================================================
// AXE 1 & 2 : MÉTHODOLOGIE, BRIEF, TRAIT, VECTORIEL & TYPOGRAPHIE
// Issu du référentiel officiel du programme de formation GPO SARL
// =====================================================================
const COURSES_GRAPHISME_P1 = [
  {
    id: "cours-g01-brief",
    num: "G-01",
    discipline: "graphisme",
    title: "Comprendre un Brief Graphique & Analyser la Demande Client",
    domain: "Méthodologie & Relation Client",
    level: "Débutant",
    duration: "20 min",
    image: "assets/masterclass_paul_rand_logo.jpg",
    summary: "Méthode d'atelier GPO : avant de poser le premier trait, analyser la demande client, identifier la cible, les contraintes et formaliser les 6 questions indispensables face à un brief vague.",
    artist: {
      name: "Atelier GPO Givry-en-Argonne",
      quote: "Un mauvais brief entraîne toujours un mauvais résultat. Le travail du graphiste commence par l'écoute et les bonnes questions.",
      bio: "Atelier de création graphique, d'impression et de fabrication. Leur méthode de cadrage initial garantit qu'aucune création ne démarre sans cahier des charges validé."
    },
    theory: [
      { title: "1. Pourquoi un Mauvais Brief Fait Échouer un Projet", desc: "Un client dit souvent 'Je veux quelque chose de moderne et rétro'. Sans questions de cadrage, le graphiste travaille à l'aveugle et risque le rejet complet." },
      { title: "2. Les 6 Questions Clés du Brief Graphique", desc: "1. Qui est la cible ? 2. Quelles sont les dimensions exactes ? 3. Quel est le produit fini ? 4. Quels éléments sont obligatoires (logo, texte) ? 5. Quelles contraintes techniques ? 6. Quel est le délai ?" },
      { title: "3. La Fiche de Cadrage du Projet", desc: "Consigner par écrit les réponses du client dans le dossier 01_BRIEF. Cette fiche sert de contrat moral tout au long des étapes de création." },
      { title: "4. L'Épreuve du 'Client Vague'", desc: "Savoir reformuler une demande floue pour la transformer en consignes graphiques mesurables et exploitables." }
    ],
    exercise: {
      title: "Exercice du Client Vague (Chrono 15 min)",
      instructions: "Un client vous dit seulement : 'Je veux des stickers rétro sur le thème de l'arcade pour vendre sur un événement'. Rédigez les 6 questions indispensables que vous lui posez avant d'ouvrir un logiciel de dessin."
    },
    correction: {
      student_errors: [
        { label: "Démarrage immédiat sans questionner", detail: "Commencer à dessiner sur l'ordinateur dès la première phrase sans connaître le format ni le support." },
        { label: "Questions fermées ou floues", detail: "Demander 'Vous préférez quoi ?' au lieu de demander des dimensions, une cible et un budget." },
        { label: "Oubli des contraintes de fabrication", detail: "Ne pas demander si les stickers sont en planche, à l'unité, vinyle ou papier." }
      ],
      remediations: [
        { label: "Protocole d'écoute active", detail: "Remplir systématiquement la grille de brief GPO avant toute esquisse." },
        { label: "Questions ciblées sur l'usage", detail: "Interroger l'environnement final : intérieur, extérieur, résistance à l'eau ou aux frottements." },
        { label: "Validation écrite", detail: "Faire valider le récapitulatif par le client avant de lancer les recherches." }
      ],
      grades: { silhouette: 9, structure: 9.5, valeurs: 9, bords: 9, couleur: 9 }
    }
  },
  {
    id: "cours-g02-pistes",
    num: "G-02",
    discipline: "graphisme",
    title: "Explorer & Proposer 3 Pistes Graphiques Distinctes",
    domain: "Créativité & Direction Artistique",
    level: "Débutant à Intermédiaire",
    duration: "25 min",
    image: "assets/planche_pedagogique_shape_language.jpg",
    summary: "Méthode d'atelier GPO : ne jamais s'enfermer dans sa première idée. Pour un même sujet, explorer 3 univers stylistiques tranchés (Rétro Arcade, Minimaliste Moderne, Illustré/Cartoon) avant de valider.",
    artist: {
      name: "Paul Rand (1914 - 1996)",
      quote: "Ne cherchez pas à être original, cherchez simplement à être bon et cohérent avec le sujet.",
      bio: "Graphiste légendaire et pionnier du design corporatif. Sa méthode d'exploration méthodique par réduction géométrique structure notre enseignement."
    },
    theory: [
      { title: "1. Le Piège de la Première Idée", desc: "La première idée est presque toujours un cliché ou une référence inconsciente déjà vue. L'exploration force le cerveau à dépasser l'évidence." },
      { title: "2. Les 3 Directions Stylistiques d'Atelier", desc: "Piste 1 : Rétro / Années 80 (lignes néon, pixel art, géométrie franche). Piste 2 : Moderne Minimaliste (aplats épurés, monochrome). Piste 3 : Illustré / Cartoon (courbes dynamiques, expressivité)." },
      { title: "3. La Planche d'Inspiration (Moodboard)", desc: "Rassembler 5 à 10 références réelles (typographies, palettes, textures) pour chaque direction dans le dossier 02_SOURCES." },
      { title: "4. Savoir Présenter & Argumenter ses Choix", desc: "Expliquer en 3 phrases simples pourquoi chaque direction répond au brief, sans imposer son goût personnel." }
    ],
    exercise: {
      title: "Un Sujet, Trois Directions Graphiques (Chrono 20 min)",
      instructions: "Sur le thème 'Tournoi de Jeu Rétro', esquissez 3 concepts franchement différents : 1 piste Rétro 80s, 1 piste Minimaliste moderne, 1 piste Illustrée. Rédigez 2 lignes d'argumentation pour chaque piste."
    },
    correction: {
      student_errors: [
        { label: "Pistes trop similaires", detail: "Proposer 3 variantes du même dessin en changeant juste la couleur au lieu d'explorer des univers différents." },
        { label: "Absence d'argumentation", detail: "Présenter des dessins sans pouvoir expliquer pourquoi telle typographie ou telle forme a été choisie." },
        { label: "Style inadapté au sujet", detail: "Dessiner un univers enfantin pastel pour un événement arcade compétitif nocturne." }
      ],
      remediations: [
        { label: "Changement de registre visuel", detail: "Changer radicalement de forme dominante entre les pistes (angles droits vs courbes souples)." },
        { label: "Formuler l'intention", detail: "Commencer chaque présentation par : 'Cette piste évoque [émotion] grâce à [élément technique]'." },
        { label: "Cohérence avec la cible", detail: "Vérifier que les codes visuels correspondent à la tranche d'âge et à l'événement." }
      ],
      grades: { silhouette: 9.5, structure: 9, valeurs: 9, bords: 9, couleur: 9.5 }
    }
  },
  {
    id: "cours-g03-bezier",
    num: "G-03",
    discipline: "graphisme",
    title: "Vectoriel vs Bitmap & Maîtrise des Courbes de Bézier",
    domain: "Outils Numériques & Dessin Vectoriel",
    level: "Fondamental",
    duration: "25 min",
    image: "assets/masterclass_paul_rand_logo.jpg",
    summary: "Comprendre la différence fondamentale entre pixels et vecteurs. Maîtriser le tracé à la plume : la règle d'or des extremums, les tangentes verrouillées à 0°/90° et l'économie de points d'ancrage.",
    artist: {
      name: "Pierre Bézier (1910 - 1999)",
      quote: "Une courbe élégante ne résulte pas d'une profusion de points, mais de la tension exacte entre deux ancres maîtresses.",
      bio: "Ingénieur français à l'origine des courbes paramétriques universellement utilisées dans tous les logiciels de dessin vectoriel, de PAO et de découpe numérique."
    },
    theory: [
      { title: "1. La Différence Vectoriel vs Bitmap", desc: "Une image bitmap (pixels, JPG/PNG) perd sa netteté au grossissement. Une image vectorielle (formules mathématiques, SVG/AI/EPS) s'agrandit à l'infini sans perte et pilote les traceurs de découpe." },
      { title: "2. La Règle d'Or des Extremums", desc: "Placer les points d'ancrage exclusivement au sommet le plus haut, au creux le plus bas, ou aux limites extrêmes gauche et droite de la courbe." },
      { title: "3. Tangentes Orthogonales Verrouillées (Shift)", desc: "Maintenir la touche Majuscule pour forcer les poignées de courbure à l'horizontale (0°) ou à la verticale (90°). Cela supprime les cassures et bosses." },
      { title: "4. L'Économie de Points d'Ancrage", desc: "Moins un tracé compte de points, plus la courbe est fluide, plus le fichier est léger, et plus la découpeuse vinyle travaille vite et sans accroc." }
    ],
    exercise: {
      title: "Vectorisation de Précision d'une Forme Simple (Chrono 20 min)",
      instructions: "Sur la base d'un croquis papier ou d'un logo géométrique, tracez à la plume vectorielle un pictogramme fermé en respectant les extremums et un maximum de 8 points d'ancrage."
    },
    correction: {
      student_errors: [
        { label: "Prolifération de points", detail: "25 points d'ancrage sur une courbe simple créant des bosses et ondulations disgracieuses." },
        { label: "Poignées en biais anarchiques", detail: "Tangentes orientées à 42° créant des asymétries de tension sur l'arc de cercle." },
        { label: "Tracé non fermé", detail: "Forme laissée ouverte empêchant l'application d'un aplat de couleur ou la découpe au plotter." }
      ],
      remediations: [
        { label: "Loi du minimum d'ancres", detail: "Supprimer tout point qui ne correspond pas à un point cardinal (Nord, Sud, Est, Ouest)." },
        { label: "Touche Shift obligatoire", detail: "Verrouiller les poignées orthogonales avec Shift lors de l'étirement de la tangente." },
        { label: "Vérifier la fermeture (Ctrl+J)", detail: "Fermer systématiquement le tracé sur son ancre de départ pour sceller la forme." }
      ],
      grades: { silhouette: 9.5, structure: 9.5, valeurs: 9, bords: 9.5, couleur: 9 }
    }
  },
  {
    id: "cours-g04-typo",
    num: "G-04",
    discipline: "graphisme",
    title: "Typographie & Hiérarchie Visuelle (L'Affiche 100 % Typo)",
    domain: "Typographie & Composition Éditoriale",
    level: "Fondamental",
    duration: "20 min",
    image: "assets/planche_pedagogique_bords_peinture.jpg",
    summary: "Apprendre à composer sans artifice : structurer les 3 niveaux de lecture, calculer l'interlignage optique (135 %), accorder les graisses et composer une affiche percutante sans aucune illustration.",
    artist: {
      name: "Jan Tschichold (1902 - 1974)",
      quote: "La typographie est l'art de rendre le langage visible sans interposer la vanité du dessinateur entre le texte et le lecteur.",
      bio: "Figure majeure de la Nouvelle Typographie. Il a codifié les principes de clarté, de hiérarchie visuelle et d'équilibre asymétrique modernes."
    },
    theory: [
      { title: "1. Les 3 Niveaux de Lecture Infaillibles", desc: "Niveau 1 : Le titre d'accroche visible à 3 mètres (48 à 72pt). Niveau 2 : Les informations essentielles (date, lieu 18-24pt). Niveau 3 : Les détails pratiques et mentions (9-11pt)." },
      { title: "2. Le Contraste de Graisses (Black vs Light)", desc: "Associer une graisse très lourde à une graisse fine pour créer une hiérarchie immédiate. Ne jamais juxtaposer deux graisses trop proches (Regular et Medium)." },
      { title: "3. Calcul Optique de l'Interlignage (135 %)", desc: "Pour un texte courant en corps 10pt, fixer l'interligne à 13.5pt ou 14pt. Pour les grands titres en capitales, resserrer l'interligne à 100-110 % pour éviter les vides." },
      { title: "4. L'Espace Blanc comme Élément Actif", desc: "Le vide guide le regard et donne son autorité au texte. Grouper les blocs logiques par proximité et respecter des marges généreuses." }
    ],
    exercise: {
      title: "Affiche Événementielle 100 % Typographique A5 (Chrono 20 min)",
      instructions: "Sujet officiel d'évaluation GPO SARL : Créez une affiche A5 uniquement avec du texte, sans AUCUNE illustration. Texte obligatoire : 'SOIRÉE ARCADE - Vendredi 20 h - Entrée libre - GPO SARL'. Travaillez sur les corps, graisses, alignements et espaces."
    },
    correction: {
      student_errors: [
        { label: "Monotonie des corps", detail: "Tous les textes composés en tailles voisines (20pt, 24pt, 28pt) sans niveau 1 dominant." },
        { label: "Centrage systématique", detail: "Texte centré au milieu de la page sans ligne de force, flottant sans accroche visuelle." },
        { label: "Interlignage par défaut inadapté", detail: "Lignes de titre qui se touchent ou au contraire trop écartées déconnectant les mots." }
      ],
      remediations: [
        { label: "Règle du ratio x3", detail: "Le titre principal doit mesurer au moins 3 fois la taille des informations secondaires." },
        { label: "Alignement sur fer à gauche", detail: "Ancrer les textes sur une ligne verticale forte pour une lecture fluide et contemporaine." },
        { label: "Ajustement optique des espaces", detail: "Resserrer l'interlignage du titre et aérer les blocs d'informations distincts." }
      ],
      grades: { silhouette: 9, structure: 9.5, valeurs: 9, bords: 9, couleur: 8.5 }
    }
  }
];
