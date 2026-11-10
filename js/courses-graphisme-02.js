// =====================================================================
// FILIÈRE DESIGN GRAPHIQUE - PROGRAMME ACADÉMIQUE OFFICIEL (PARTIE 2)
// BLOCS 3 & 4 : TYPOGRAPHIE FONDAMENTALE & COLORIMÉTRIE D'ATELIER
// =====================================================================
const COURSES_GRAPHISME_P2 = [
  {
    id: "cours-g06-typo-anatomie",
    num: "G-06",
    discipline: "graphisme",
    shortTitle: "Typographie & Polices",
    title: "Typographie & Anatomie du Caractère",
    domain: "Typographie & Histoire des Écritures",
    level: "Fondamental",
    duration: "30 min",
    image: "assets/session_mucha_art.jpg",
    summary: "Étude académique de la lettre : jambages, empattements, fûts, œil et ligne de base. Maîtriser la classification Vox-Atypi (Humanes, Garaldes, Réales, Didones, Mécanes, Linéales) et choisir les graisses adaptées.",
    artist: {
      name: "Maximilien Vox & Adrian Frutiger",
      quote: "La typographie est l'art de rendre visible et audible la pensée humaine sans que l'œil ne trébuche sur la forme de la lettre.",
      bio: "Théoriciens et créateurs de caractères majeurs du XXe siècle, fondateurs des systèmes de classification et de désignation des graisses."
    },
    theory: [
      { title: "1. Les Repères d'Alignement Typographique", desc: "Ligne de base (baseline), ligne de pied, ligne médiane (hauteur d'x), ligne de tête (capitales) et ligne des hampes supérieures/inférieures." },
      { title: "2. La Classification Historique Vox-Atypi", desc: "Identifier immédiatement les grandes familles : les Serif classiques (Garamond, Baskerville, Bodoni), les Mécanes (Rockwell) et les Sans-Serif (Helvetica, Futura, Frutiger)." },
      { title: "3. La Gestion des Graisses & Variantes", desc: "De la graisse Hairline/Thin à Black/Ultra. Comprendre l'usage des italiques véritables par rapport à une simple inclinaison oblique mécanique." },
      { title: "4. Critères de Choix pour un Projet", desc: "Associer la morphologie d'une police au ton rédactionnel, à la lisibilité en petits corps et au contexte de lecture (panneau lointain vs livre de poche)." }
    ],
    exercise: {
      title: "Exercice : Analyse Morphologique de 3 Caractères",
      instructions: "Sélectionnez 3 polices représentatives (une Serif classique, une Mécane, une Linéale). Décomposez sur une planche grand format les détails de leur empattement, le contraste plein/délié et la hauteur d'x."
    },
    correction: {
      student_errors: [
        { label: "Mélange incohérent de polices fantaisie", detail: "Associer trois polices décoratives illisibles sans structure de base." },
        { label: "Déformation anamorphique du texte", detail: "Étirer ou écraser un mot pour le faire entrer dans un bloc au lieu d'ajuster le corps ou l'interlignage." },
        { label: "Confusion entre fausse italique et vraie coupe", detail: "Appliquer un bouton italique sur une police sans graisse dédiée." }
      ],
      remediations: [
        { label: "Règle des deux familles maximum", detail: "Restreindre le document à une famille Serif pour les titres et une Linéale pour le texte, ou inversement." },
        { label: "Proportions typographiques préservées", detail: "Toujours redimensionner le texte proportionnellement avec la touche Majuscule enfoncée." },
        { label: "Utilisation exclusive des coupes natives", detail: "Sélectionner la variante Regular, Medium, Bold ou Italic nativement dessinée par le fondeur." }
      ],
      grades: { silhouette: 9, structure: 9.5, valeurs: 9, bords: 9, couleur: 8.5 }
    }
  },
  {
    id: "cours-g07-hierarchie-typo",
    num: "G-07",
    discipline: "graphisme",
    shortTitle: "Hiérarchie Typo",
    title: "Hiérarchie Visuelle & Mise en Page Typo",
    domain: "Mise en Page & Macro-Typographie",
    level: "Technique",
    duration: "30 min",
    image: "assets/planche_pedagogique_shape_language.jpg",
    summary: "Méthode infaillible d'architecture de l'information : structuration stricte en 3 niveaux de lecture, calcul optique de l'interlignage à 135% et composition d'une affiche d'impact sans aucune image.",
    artist: {
      name: "Josef Müller-Brockmann & Emil Ruder",
      quote: "Une mise en page réussie guide le regard du lecteur sans effort, grâce à un ordre hiérarchique indiscutable et à la respiration des blancs.",
      bio: "Maîtres de l'École de Bâle et du Style Typographique International, pères de la composition rigoureuse sur grille."
    },
    theory: [
      { title: "1. Les 3 Niveaux de Lecture Infaillibles", desc: "Niveau 1 : Accroche / Titre (lu en 1 seconde à 5 mètres). Niveau 2 : Informations clés / Date / Lieu (lu en 3 secondes). Niveau 3 : Détails / Mentions / Contact (lecture posée de près)." },
      { title: "2. Le Ratio Optique d'Interlignage (135 %)", desc: "Pour un corps de 10 points, régler l'interlignage à 13.5 ou 14 points. Un interlignage trop serré étouffe la lecture ; trop lâche, il disperse les paragraphes." },
      { title: "3. La Gestion des Blancs Tournants (Espace Négatif)", desc: "Le blanc n'est pas un vide à combler mais un élément actif de la composition qui met en valeur les zones de texte importantes." },
      { title: "4. Alignements et Justification Rigoureuse", desc: "Privilégier le fer à gauche avec drapeau régulier pour une lecture naturelle. Éviter les lignes justifiées qui génèrent des 'lézardes' blanches disgracieuses." }
    ],
    exercise: {
      title: "Exercice : Affiche A5 100% Typographique sans Image",
      instructions: "Composez une affiche de festival au format A5 en noir et blanc pur, en utilisant uniquement du texte (aucun dessin, photo ou pictogramme). Structurez parfaitement les 3 niveaux de lecture avec interlignage maîtrisé."
    },
    correction: {
      student_errors: [
        { label: "Absence de hiérarchie (tout crie)", detail: "Mettre tous les textes en gros caractères gras, saturant la page sans point d'entrée." },
        { label: "Interlignage par défaut inadapté", detail: "Conserver l'interlignage automatique du logiciel qui colle les lignes sur les grands titres." },
        { label: "Occupation excessive des marges", detail: "Faire toucher le texte au bord du papier sans laisser de marge de respiration." }
      ],
      remediations: [
        { label: "Échelle de corps contrastée", detail: "Appliquer un ratio minimal de 1 à 3 entre le corps de texte courant et le titre principal." },
        { label: "Réglage manuel de l'interlignage", detail: "Ajuster l'interlignage au millimètre près en fonction de la hauteur d'x de la police." },
        { label: "Marges de sécurité généreuses", detail: "Conserver au minimum 15 à 20 mm de marge blanche tout autour du format A5." }
      ],
      grades: { silhouette: 9.5, structure: 9.5, valeurs: 9, bords: 9, couleur: 9 }
    }
  },
  {
    id: "cours-g08-grilles-composition",
    num: "G-08",
    discipline: "graphisme",
    shortTitle: "Grilles & Mise en Page",
    title: "Grilles Modulaires & Système 12 Colonnes",
    domain: "Mise en Page Éditoriale & Structure",
    level: "Technique",
    duration: "35 min",
    image: "assets/planche_pedagogique_composition_cinema.jpg",
    summary: "L'armature invisible de la page : construction d'une grille modulaire à 12 colonnes, calcul des gouttières et calage vertical sur la grille de ligne de base pour une rigueur d'alignement totale.",
    artist: {
      name: "Wim Crouwel & Jan Tschichold",
      quote: "La grille n'est pas une prison, c'est la structure qui rend possible la liberté de composition et l'harmonie des proportions.",
      bio: "Figures de proue de la typographie moderne et de la mise en page modulaire au XXe siècle."
    },
    theory: [
      { title: "1. La Polyvalence du Système 12 Colonnes", desc: "Le nombre 12 est divisible par 2, 3, 4 et 6. Il permet de composer des blocs de largeurs variées (pleine page, moitiés, tiers, quarts) sur un même document." },
      { title: "2. Gouttières & Marges Proportionnelles", desc: "Définir des espaces d'espacement (gouttières de 4 à 8 mm) constants entre les colonnes pour séparer distinctement les flux d'information." },
      { title: "3. La Grille de Ligne de Base (Baseline Grid)", desc: "Synchroniser toutes les lignes de texte de la page sur une trame horizontale récurrente (ex: pas de 12 pt), évitant tout décalage entre colonnes adjacentes." },
      { title: "4. L'Alignement Optique des Éléments", desc: "Caler les images, blocs et textes sur les points d'intersection de la grille pour créer un rythme visuel stable et reposant." }
    ],
    exercise: {
      title: "Exercice : Dépliant 3 Volets sur Grille Magnétique",
      instructions: "Construisez une grille modulaire pour un dépliant 3 volets au format ouvert A4. Positionnez 3 blocs d'articles avec titres, chapeaux et encadrés calés rigoureusement sur la grille de colonnes et la baseline."
    },
    correction: {
      student_errors: [
        { label: "Décalage vertical entre colonnes", detail: "Avoir des lignes de texte qui ne sont pas en face les unes des autres sur deux colonnes voisines." },
        { label: "Largeurs de colonnes anarchiques", detail: "Créer des blocs de texte aux dimensions arbitraires sans utiliser de repères." },
        { label: "Oubli de compensation du pli", detail: "Ne pas réduire de 2 à 3 mm le volet intérieur qui se replie dans un 3 volets." }
      ],
      remediations: [
        { label: "Activation de la grille de ligne de base", detail: "Cocher l'alignement sur la grille de ligne de base dans les options de paragraphe." },
        { label: "Magnétisme des repères", detail: "Verrouiller le magnétisme de la grille pour que chaque bord de bloc s'accroche automatiquement." },
        { label: "Gabarit mécanique vérifié", detail: "Paramétrer les largeurs réelles des volets : 97 mm / 100 mm / 100 mm pour un A4 fermé pli roulé." }
      ],
      grades: { silhouette: 9, structure: 9.5, valeurs: 9, bords: 9, couleur: 8.5 }
    }
  },
  {
    id: "cours-g09-colorimetrie-rvb-cmjn",
    num: "G-09",
    discipline: "graphisme",
    shortTitle: "Couleurs RVB & CMJN",
    title: "Colorimétrie : Synthèse RVB vs CMJN",
    domain: "Colorimétrie & Physique de la Couleur",
    level: "Fondamental",
    duration: "25 min",
    image: "assets/planche_pedagogique_gamut_masking.jpg",
    summary: "Différence scientifique entre synthèse additive (RVB écran) et synthèse soustractive (CMJN encre papier). Maîtriser le gamut de reproduction, les profils colorimétriques ISO Coated v2 FOGRA39 et éviter les déconvenues d'impression.",
    artist: {
      name: "Johannes Itten (Bauhaus)",
      quote: "La couleur est la vie, car un monde sans couleur nous apparaît comme mort. Mais chaque support obéit à sa propre physique de restitution.",
      bio: "Théoricien de la couleur au Bauhaus, créateur du cercle chromatique et des 7 contrastes de couleur fondamentaux."
    },
    theory: [
      { title: "1. Synthèse Additive (RVB - Rouge Vert Bleu)", desc: "Fonctionnement de la lumière émise par les écrans. L'addition des trois primaires donne le blanc pur. Gamut très large capable de restituer des teintes fluorescentes et saturées." },
      { title: "2. Synthèse Soustractive (CMJN - Cyan Magenta Jaune Noir)", desc: "Fonctionnement de l'encre absorbant la lumière sur papier. L'addition des encres donne un bistre foncé, complété par le noir pur (Key). Gamut plus restreint que le RVB." },
      { title: "3. Le Piège des Couleurs Hors-Gamut", desc: "Les bleus électriques, verts pomme éclatants et oranges fluo de l'écran n'existent pas en quadri standard. Ils s'éteignent lors de la conversion automatique." },
      { title: "4. Les Profils Colorimétriques Normalisés", desc: "Toujours calibrer son espace de travail en ISO Coated v2 (FOGRA39) pour le papier couché ou PSO Uncoated pour le papier non couché." }
    ],
    exercise: {
      title: "Exercice : Diagnostic et Conversion Colorimétrique",
      instructions: "À partir d'un visuel fourni en RVB contenant des bleus vifs et verts saturés, réalisez la conversion sous profil FOGRA39, identifiez les zones dégradées par la perte de gamut et compensez manuellement les contrastes."
    },
    correction: {
      student_errors: [
        { label: "Envoi d'un fichier RVB à l'imprimeur", detail: "Laisser le RIP de l'imprimeur convertir arbitrairement les couleurs sans contrôle préalable." },
        { label: "Déception sur les teintes éteintes", detail: "Promettre au client un vert fluo vu sur écran qui ressort boueux sur le papier." },
        { label: "Absence de profil ICC assigné", detail: "Travailler sans profil colorimétrique défini, générant des variations imprévisibles selon les machines." }
      ],
      remediations: [
        { label: "Contrôle prépresse avant export", detail: "Afficher l'aperçu de la surimpression et l'avertissement de couleurs hors-gamut dans le logiciel." },
        { label: "Ajustement chromatique post-conversion", detail: "Rééquilibrer la luminosité et la saturation dans l'espace CMJN pour redonner du punch visuel." },
        { label: "Assignation stricte du profil FOGRA39", detail: "Intégrer le profil colorimétrique certifié dans le PDF d'impression." }
      ],
      grades: { silhouette: 9, structure: 9, valeurs: 9, bords: 9, couleur: 9.5 }
    }
  },
  {
    id: "cours-g10-pantone-harmonie",
    num: "G-10",
    discipline: "graphisme",
    shortTitle: "Nuancier Pantone",
    title: "Tons Directs Pantone & Harmonie Chromatique",
    domain: "Colorimétrie & Identité de Marque",
    level: "Technique",
    duration: "25 min",
    image: "assets/mockup_plateforme_web_la_croisee_des_arts.jpg",
    summary: "Méthode de sélection des teintes : utilisation des tons directs du nuancier normalisé Pantone Solid Coated et application de la règle d'équilibre visuel (60 % couleur dominante, 30 % couleur secondaire, 10 % couleur d'accent).",
    artist: {
      name: "Atelier GPO Nuancier",
      quote: "Une charte graphique professionnelle stipule toujours ses références en 4 systèmes : Pantone, CMJN, RVB et Hexadécimal pour garantir une cohérence universelle.",
      bio: "Département sérigraphie et reproduction couleur d'art de GPO SARL, assurant le calage couleur sur presses industrielles."
    },
    theory: [
      { title: "1. Qu'est-ce qu'un Ton Direct Pantone ?", desc: "Une encre pré-mélangée en laboratoire selon une formule chimique précise, imprimée sur un groupe dédié sans tramage quadri. Garantit un rendu 100% identique sur tous les tirages." },
      { title: "2. La Règle d'Or des Ratios 60-30-10", desc: "60 % d'espace dominé par une teinte neutre ou reposante (fond). 30 % par une teinte identitaire secondaire (structure, blocs). 10 % par une teinte d'accent vive (CTA, bouton, élément focal)." },
      { title: "3. Les Harmonies Chromatiques Fondamentales", desc: "Complémentaire directe (fort contraste dynamique), Triadique (équilibre vibrant à 120°), Analogue (nuances voisines apaisantes)." },
      { title: "4. Documentation Complète d'une Charte", desc: "Pour chaque teinte retenue, fournir obligatoirement : Pantone C, valeurs C/M/J/N, valeurs R/V/B et code hexadécimal (#FFFFFF)." }
    ],
    exercise: {
      title: "Exercice : Élaboration d'une Charte Chromatique Triadique",
      instructions: "Créez une palette de marque harmonieuse en 3 couleurs répondant au ratio 60-30-10 pour une entreprise de matériel de précision. Rédigez le tableau de conversion technique complet (Pantone, CMJN, RVB, Hexa)."
    },
    correction: {
      student_errors: [
        { label: "Répartition égale 33/33/33", detail: "Utiliser 3 couleurs vives à parts égales, provoquant une fatigue visuelle et un conflit d'attention." },
        { label: "Valeurs RVB et CMJN discordantes", detail: "Choisir un code couleur web sans vérifier son équivalent imprimable en atelier." },
        { label: "Oubli du papier dans la réflexion", detail: "Ignorer la différence de rendu entre un Pantone Coated (brillant) et Uncoated (mat buvard)." }
      ],
      remediations: [
        { label: "Application du ratio 60-30-10", detail: "Vérifier visuellement que la couleur d'accent est utilisée avec parcimonie pour attirer le regard." },
        { label: "Contrôle sur nuancier papier physique", detail: "Toujours valider les teintes finales sur un nuancier imprimé et non sur l'écran." },
        { label: "Tableau de spécification rigoureux", detail: "Consigner chaque code dans la fiche de charte pour les développeurs et imprimeurs." }
      ],
      grades: { silhouette: 9, structure: 9, valeurs: 9, bords: 9, couleur: 9.5 }
    }
  }
];
