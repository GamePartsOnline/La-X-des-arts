// =====================================================================
// LA CROISÉE DES ARTS - BASE DE DONNÉES DES COURS & SESSIONS
// Pôles : Dessin & Peinture Numérique | Design Graphique & Typographie
// =====================================================================

const COURSES_DATA = [
  // -------------------------------------------------------------------
  // PÔLE 1 : DESSIN & PEINTURE NUMÉRIQUE (9 COURS)
  // -------------------------------------------------------------------
  {
    id: "masterclass-sargent",
    num: "MASTERCLASS",
    discipline: "dessin",
    title: "John Singer Sargent : Méthode, Exercice & Correction",
    domain: "Portrait & Alla Prima",
    level: "Tous Niveaux",
    duration: "20 min",
    image: "assets/masterclass_sargent_methode_correction.jpg",
    summary: "Déconstruction analytique en 4 strates d'après John Singer Sargent : blocage Notan binaire, fusion des bords perdus dans l'ombre, sculpture des plans fermes et rehauts spéculaires confiants. Comprend un exercice chronométré de 20 minutes et une analyse comparative Avant/Après d'un élève avec remédiations.",
    artist: {
      name: "John Singer Sargent (1856 - 1925)",
      quote: "Ne cherchez pas à copier chaque cil ou chaque ride. Posez la bonne valeur à la bonne place, avec le bon bord, et ne la touchez plus.",
      bio: "Maître absolu du portrait et de la touche virtuose, élève de Carolus-Duran à Paris. Sargent incarne l'économie de moyen et la certitude gestuelle qui fondent la pédagogie de La Croisée des Arts."
    },
    theory: [
      {
        title: "1. Le Notan Binaire (Shadow Blocking)",
        desc: "Cartographier le sujet en seulement deux familles de valeurs étanches (lumière vs ombre) sans demi-ton, assurant une lisibilité maximale à grande distance."
      },
      {
        title: "2. La Fusion des Bords Perdus (Lost Edges)",
        desc: "Unir les ombres et séparer la lumière. Fondre la frontière entre le corps et le fond dans les zones sombres (sous le menton, chevelure) pour supprimer le bruit visuel."
      },
      {
        title: "3. La Sculpture des Plans Fermes (Firm Edges)",
        desc: "Coup de pinceau directionnel sur les arêtes osseuses (pommettes, arcade sourcilière, nez) suivant la topographie de l'anatomie crânienne."
      },
      {
        title: "4. Rehauts Spéculaires Confiants (Crisp Highlights)",
        desc: "Touches finales fraîches posées alla prima au point focal avec un bord tranchant 100 % net, sans jamais y retoucher."
      }
    ],
    exercise: {
      title: "Le Buste en Lumière Latérale (Session Chrono 20 min)",
      instructions: "Phase 1 (0 à 5 mn) : Notan binaire à la brosse large sans détail. Phase 2 (5 à 10 mn) : Fusion des bords perdus dans l'ombre. Phase 3 (10 à 16 mn) : Sculpture des plans intermédiaires et pommettes. Phase 4 (16 à 20 mn) : 3 impacts spéculaires tranchants au point focal."
    },
    correction: {
      student_errors: [
        { label: "Bord dur dans l'ombre", detail: "Ombre portée du chapeau découpée comme un carton plat le long de la joue et de l'oreille." },
        { label: "Formes boueuses", detail: "Trop de micro-variations de gris et d'estompages hésitants salissant la zone d'ombre." },
        { label: "Manque de confiance", detail: "Multiplication de coups de pinceaux laborieux au lieu d'un aplat franc posé en une fois." }
      ],
      remediations: [
        { label: "Fusion douce de l'ombre", detail: "L'arête sous le chapeau et la tempe sont étirées pour disparaître dans le fond." },
        { label: "Plans fermes sculptés", detail: "Transition courte taillée sur la pommette pour charpenter le volume osseux." },
        { label: "Rehauts frais en alla prima", detail: "Touches nettes au point focal (arête du nez et col) posées d'un seul geste." }
      ],
      grades: { silhouette: 9, structure: 9.5, valeurs: 9, bords: 9.5, couleur: 9 }
    }
  },
  {
    id: "fiche-01",
    num: "01",
    discipline: "dessin",
    title: "Contrôle des Bords et Hiérarchie Visuelle",
    domain: "Valeurs & Finition",
    level: "Débutant à Avancé",
    duration: "20 min",
    image: "assets/planche_pedagogique_edge_control.jpg",
    summary: "Maîtriser les quatre transitions fondamentales : net (Hard), ferme (Firm), doux (Soft) et perdu (Lost). Comprendre le principe majeur : unir les ombres et séparer la lumière pour focaliser l'attention du regard.",
    artist: {
      name: "Anders Zorn (1860 - 1920)",
      quote: "Une touche posée au bon endroit avec la bonne nuance de valeur donne instantanément l'illusion de la forme et du sang.",
      bio: "Maître suédois de renommée mondiale, Anders Zorn est le modèle d'étude par excellence pour le contrôle des bords. Sa capacité à fondre les silhouettes dans l'ombre et à faire claquer un bord tranchant dans la lumière reste inégalée."
    },
    theory: [
      {
        title: "1. Hard Edge (Bord net et tranchant)",
        desc: "Transition immédiate en un pixel. Attire immédiatement le regard, à réserver au point focal prioritaire (yeux, arêtes métalliques vives)."
      },
      {
        title: "2. Firm Edge (Bord ferme)",
        desc: "Transition courte mais adoucie. Indique une courbure rapide vue sous éclairage direct (pommette, arête du nez)."
      },
      {
        title: "3. Soft Edge (Bord doux)",
        desc: "Dégradé large et progressif. Traduit une surface courbe diffuse (tempe, draperie) et fait reculer les plans secondaires dans l'espace."
      },
      {
        title: "4. Lost Edge (Bord perdu)",
        desc: "La valeur du sujet fusionne exactement avec l'arrière-plan. Le contour disparaît, créant une unité picturale majeure."
      }
    ],
    exercise: {
      title: "Nature morte et drapé de velours",
      instructions: "Peindre une poire et une grappe sur drapé en alternant les quatre bords. 5 minutes de blocage dur, 7 minutes d'adoucissement des courbes, 5 minutes de fusion des ombres et 3 minutes d'accent net."
    }
  },
  {
    id: "fiche-02",
    num: "02",
    discipline: "dessin",
    title: "Température de Couleur et Gamut Masking",
    domain: "Couleur & Harmonie",
    level: "Intermédiaire à Confirmé",
    duration: "25 min",
    image: "assets/planche_pedagogique_gamut_masking.jpg",
    summary: "La méthode de James Gurney appliquée au numérique : restreindre sa palette à un masque géométrique sur la roue chromatique et appliquer la réciprocité thermique (lumière chaude et ombres froides, ou l'inverse).",
    artist: {
      name: "James Gurney (1958 - présent)",
      quote: "La couleur n'a aucune valeur absolue en soi. Elle n'existe et ne vibre que par sa relation thermique avec les nuances qui l'entourent.",
      bio: "Illustrateur et vulgarisateur majeur, auteur de Color and Light. Ses recherches sur le Gamut Masking sont devenues le standard d'apprentissage de l'harmonie des couleurs dans l'industrie cinématographique et le jeu vidéo."
    },
    theory: [
      {
        title: "Règle de réciprocité thermique",
        desc: "Lumière chaude impose des ombres froides. Lumière froide impose des ombres chaudes. Ne jamais peindre une ombre avec du noir neutre."
      },
      {
        title: "Masquage de gamut triangulaire",
        desc: "Restreindre sa palette à un triangle sur la roue chromatique pour garantir une atmosphère lumineuse unifiée sans discordance criarde."
      },
      {
        title: "Saturation relative au point focal",
        desc: "Réserver la saturation maximale à la zone d'intérêt principale. Garder les arrières-plans et ombres dans des teintes désaturées et sourdes."
      },
      {
        title: "Lumière d'ambiance et rebonds",
        desc: "Les ombres sont éclairées par la lumière secondaire de l'environnement (ciel bleu, sol ocre ou feuillages environnants)."
      }
    ],
    exercise: {
      title: "Paysage d'or chaud et ombres d'azur",
      instructions: "25 minutes : réaliser un paysage forestier au soleil couchant. 10 minutes de cadrage et blocage thermique, 10 minutes d'équilibrage chaud/froid et 5 minutes de finition sur la trouée lumineuse."
    }
  },
  {
    id: "fiche-03",
    num: "03",
    discipline: "dessin",
    title: "Shape Language et Force de Silhouette",
    domain: "Design & Composition",
    level: "Tous Niveaux",
    duration: "15 min",
    image: "assets/planche_pedagogique_shape_language.jpg",
    summary: "Psychologie géométrique des formes primaires (Cercle = douceur, Carré = stabilité, Triangle = agressivité/vitesse) et test décisif de la lisibilité à 100 % en silhouette noire.",
    artist: {
      name: "Eyvind Earle (1916 - 2000)",
      quote: "La beauté naît du contraste net entre les masses géométriques calmes et l'extrême précision du détail graphique.",
      bio: "Légendaire directeur artistique chez Disney (La Belle au bois dormant). Son sens monumental de la silhouette graphique et ses aplats architecturaux inspirent directement notre enseignement du design de forme."
    },
    theory: [
      {
        title: "Psychologie des formes primaires",
        desc: "Cercle = innocence, douceur et accueil. Carré = robustesse, force, lourdeur et immobilité. Triangle = menace, vitesse, acuité et tension."
      },
      {
        title: "Test de la silhouette 100 % noire",
        desc: "Remplir votre dessin en noir absolu sur fond blanc. Si le personnage ou l'objet n'est pas reconnaissable instantanément, sa pose est défaillante."
      },
      {
        title: "Rythme Grand / Moyen / Petit",
        desc: "Varier systématiquement les dimensions des formes juxtaposées : 70 % d'espace calme, 20 % de forme médiane, 10 % de micro-détails d'intérêt."
      },
      {
        title: "Asymétrie et dynamisme",
        desc: "Bannir les poses et profils parfaitement symétriques. Décaler les épaules, hanches et appuis pour insuffler la vie."
      }
    ],
    exercise: {
      title: "Trilogie de silhouettes expressives",
      instructions: "15 minutes : esquisser 3 silhouettes de créatures ou personnages en aplat noir pur exprimant respectivement la protection, la vitesse et la lourdeur rocheuse."
    }
  },
  {
    id: "fiche-04",
    num: "04",
    discipline: "dessin",
    title: "Drapés, Plis et Tensions Textiles",
    domain: "Morphologie & Matières",
    level: "Intermédiaire",
    duration: "20 min",
    image: "assets/planche_pedagogique_drapes_plis.jpg",
    summary: "Classification rigoureuse des 7 types de plis de Burne Hogarth : plis de tuyau, plis d'étirement, plis d'empilement, plis zigzag, plis suspendus, plis spirales et plis inertes.",
    artist: {
      name: "Burne Hogarth (1911 - 1996)",
      quote: "Le tissu n'a aucune volonté propre. Il ne fait que révéler les points de tension du squelette et la force de la gravité terrestre.",
      bio: "Grand maître du dessin dynamique et cofondateur de la School of Visual Arts de New York. Sa déconstruction analytique des plis reste la méthode de référence mondiale dans l'animation et l'illustration."
    },
    theory: [
      {
        title: "Les deux forces motrices du tissu",
        desc: "Tout pli résulte de la lutte entre la gravité qui tire le drapé vers le bas et les points d'ancrage osseux (épaules, coudes, genoux) qui le soutiennent."
      },
      {
        title: "Plis d'étirement (Stretch Folds)",
        desc: "Lignes tendues irradiant depuis un point d'appui en traction directe. Indiquent le mouvement et la direction de l'effort corporel."
      },
      {
        title: "Plis de tuyau et suspendus",
        desc: "Cylindres descendants formés par un tissu qui retombe librement d'un rebord ou d'une ceinture, alternant ombre douce et tranchant."
      },
      {
        title: "Pli d'empilement (Locking Folds)",
        desc: "Accordéon formé quand l'excès de tissu s'écrase sur un support horizontal (bas de pantalon sur la cheville, manche retroussée)."
      }
    ],
    exercise: {
      title: "Étude d'un bras fléchi sous étoffe lourde",
      instructions: "20 minutes : dessiner un avant-bras en tension tenant une corde, avec une manche en lin épais marquant les plis d'étirement et d'empilement au coude."
    }
  },
  {
    id: "fiche-05",
    num: "05",
    discipline: "dessin",
    title: "Diffusion Sous-Surfacique (SSS) & Carnation",
    domain: "Rendu & Anatomie Vivante",
    level: "Confirmé",
    duration: "25 min",
    image: "assets/planche_pedagogique_sss_peau.jpg",
    summary: "Rendre la peau humaine translucide et vivante. Placer la frange de saturation rouge/orangée exactement sur le terminateur entre la lumière et l'ombre pour éliminer l'effet cireux ou plastique.",
    artist: {
      name: "William-Adolphe Bouguereau (1825 - 1905)",
      quote: "Pour peindre la peau, il ne faut pas seulement regarder la surface, il faut sentir la tiédeur du sang qui coule sous l'épiderme.",
      bio: "Peintre académique français majeur du XIXe siècle. Sa maîtrise des carnations diaphanes, des mains et des pieds délicats reste le sommet technique du rendu de chair dans la peinture occidentale."
    },
    theory: [
      {
        title: "La ligne du terminateur",
        desc: "La diffusion sous-surfacique apparaît principalement là où la lumière tangente la surface, avant de basculer dans l'ombre propre."
      },
      {
        title: "Le halo de saturation chaude",
        desc: "Sous la peau, la lumière se disperse dans les vaisseaux sanguins. Le terminateur doit être saturé d'orange vif ou de rouge sang."
      },
      {
        title: "Cartographie thermique du visage",
        desc: "Front = teintes dorées/jaunâtres (peau mince sur os). Joues et nez = rougeoyants (vascularisation dense). Bas du visage et mâchoire = tons froids bleutés/verdâtres."
      },
      {
        title: "Spécularité et humidité",
        desc: "La peau n'est ni totalement mate ni miroir : les rehauts spéculaires sont doux avec une légère translucidité bleutée sur les contours."
      }
    ],
    exercise: {
      title: "Oreille humaine en contre-jour ardent",
      instructions: "25 minutes : peindre une oreille humaine traversée par une forte lumière solaire arrière. Faire briller le cartilage interne en rouge rubis incandescent."
    }
  },
  {
    id: "fiche-06",
    num: "06",
    discipline: "dessin",
    title: "Composition Cinématographique et Échelle",
    domain: "Narration & Environnement",
    level: "Tous Niveaux",
    duration: "20 min",
    image: "assets/planche_pedagogique_composition_cinema.jpg",
    summary: "Guider le regard du spectateur grâce aux lignes directrices, au ratio d'or, à la perspective atmosphérique et au gigantisme des décors confronté à la fragilité de la silhouette humaine.",
    artist: {
      name: "Roger Deakins (1949 - présent)",
      quote: "Une bonne composition ne cherche pas à impressionner par la complexité. Elle épure le cadre jusqu'à ce qu'il ne reste que l'émotion essentielle.",
      bio: "Directeur de la photographie multi-oscarisé (Blade Runner 2049, 1917, Sicario). Ses cadrages épurés, ses silhouettes denses et sa gestion des brumes volumétriques sont la bible visuelle des concept artists."
    },
    theory: [
      {
        title: "Perspective atmosphérique",
        desc: "Plus un plan s'éloigne, plus son contraste diminue, ses valeurs se rapprochent de celle du ciel et ses teintes se refroidissent."
      },
      {
        title: "Échelle et repère humain",
        desc: "Pour conférer un sentiment de gigantisme à une architecture ou un vaisseau, placer une silhouette humaine visible au premier ou second plan."
      },
      {
        title: "Lignes directrices (Leading Lines)",
        desc: "Utiliser routes, ravins, câbles ou ombres portées pour conduire naturellement l'œil du spectateur vers le point focal sans errance."
      },
      {
        title: "Cadre dans le cadre",
        desc: "Isoler le sujet à travers une arche, une porte ouverte, une caverne ou des branches pour accentuer la profondeur et l'intimité de la scène."
      }
    ],
    exercise: {
      title: "Canyon monumental et marcheur solitaire",
      instructions: "20 minutes : composer un paysage de science-fiction au format 2.39:1 (cinémascope) avec une arche rocheuse colossale encadrant un explorateur miniature."
    }
  },
  {
    id: "fiche-07",
    num: "07",
    discipline: "dessin",
    title: "Anatomie Vivante et Repères Morphologiques",
    domain: "Anatomie & Modèle Vivant",
    level: "Intermédiaire",
    duration: "20 min",
    image: "assets/session_modele_morpho.jpg",
    summary: "Poser le corps humain en 15 secondes grâce à la ligne d'action, verrouiller les repères osseux inaltérables (clavicules, épines iliaques, malléoles) et équilibrer le contrapposto.",
    artist: {
      name: "George Bridgman (1865 - 1943)",
      quote: "Ne dessinez pas des muscles isolés. Dessinez des blocs solides qui s'emboîtent, pivotent et verrouillent le mouvement.",
      bio: "Légendaire professeur d'anatomie à l'Art Students League de New York, maître de Norman Rockwell. Sa vision constructive du corps en blocs interconnectés révolutionne la compréhension des volumes."
    },
    theory: [
      {
        title: "Ligne d'action (Line of Action)",
        desc: "Un trait unique et continu en C ou en S capturant l'élan global de la pose en moins de 10 secondes avant tout détail anatomique."
      },
      {
        title: "Opposition du contrapposto",
        desc: "L'axe des épaules s'incline toujours en sens inverse de l'axe des hanches pour compenser le centre de gravité sur la jambe d'appui."
      },
      {
        title: "Repères osseux sous-cutanés",
        desc: "Fossette jugulaire, arêtes des clavicules, épine iliaque antéro-supérieure, rotules et malléoles : ces points osseux ne changent jamais d'emplacement."
      },
      {
        title: "Emboîtement des trois boîtes",
        desc: "Penser la tête, la cage thoracique et le bassin comme trois solides rigides reliés par la colonne vertébrale flexible."
      }
    ],
    exercise: {
      title: "Pose dynamique en appui contrapposto",
      instructions: "20 minutes : 5 minutes pour la ligne d'action et les boîtes géométriques, 10 minutes pour poser les masses musculaires et 5 minutes de valeurs d'ombre."
    }
  },
  {
    id: "fiche-08",
    num: "08",
    discipline: "dessin",
    title: "Textures Organiques et Brosses Numériques",
    domain: "Technique Numérique",
    level: "Débutant à Avancé",
    duration: "20 min",
    image: "assets/planche_pedagogique_textures_brosses.jpg",
    summary: "Créer et maîtriser des brosses numériques texturées pour imiter le grain du fusain, la porosité de la craie, le lavis d'aquarelle ou la matière de la peinture à l'huile sans artifice.",
    artist: {
      name: "Craig Mullins (1964 - présent)",
      quote: "Le numérique ne doit jamais ressembler à du numérique. Si votre brosse n'a ni grain, ni rugosité, ni accident organique, vous peignez avec du plastique.",
      bio: "Considéré comme le père fondateur du digital painting moderne à l'échelle internationale. Craig Mullins a été le premier à transposer la spontanéité, le grain du fusain et la matière de l'huile sur palette graphique pour le cinéma et le jeu vidéo."
    },
    theory: [
      {
        title: "Numérisation et textures de matière",
        desc: "Intégrer des textures réelles de toiles, de papier aquarelle ou de pierre pour rompre la perfection stérile du dégradé numérique."
      },
      {
        title: "Double brosse et masque de grain (Dual Brush)",
        desc: "Combiner une forme de pointe dynamique avec une texture en incrustation pour simuler l'accroche physique du pigment sur le support."
      },
      {
        title: "Émulation des médiums historiques",
        desc: "Régler le flux et l'opacité pour reproduire la transparence d'un glacis aquarellé ou la fermeté d'une pâte appliquée au couteau."
      },
      {
        title: "Économie de la touche (Brush Economy)",
        desc: "Chaque coup de pinceau doit avoir une intention claire de volume et de valeur. Bannir le survol spongieux répété."
      }
    ],
    exercise: {
      title: "Triptyque d'études de sphères multi-matières",
      instructions: "20 minutes : peindre trois sphères simples, la première en fusain rugueux frotté, la seconde en lavis d'aquarelle granuleux, la troisième en pâte à l'huile biseautée."
    }
  },

  // -------------------------------------------------------------------
  // PÔLE 2 : DESIGN GRAPHIQUE & TYPOGRAPHIE (6 COURS COMPLETS)
  // -------------------------------------------------------------------
  {
    id: "masterclass-rand",
    num: "MASTERCLASS G",
    discipline: "graphisme",
    title: "Paul Rand : Le Test du Logo & la Puissance de la Simplicité",
    domain: "Identité Visuelle & Branding",
    level: "Tous Niveaux",
    duration: "20 min",
    image: "assets/planche_pedagogique_shape_language.jpg",
    summary: "Comprendre pourquoi un logo n'a pas besoin de tout raconter mais d'identifier sans ambiguïté. Application du célèbre protocole en 7 critères de Paul Rand : distinctif, lisible, adaptable, intemporel, mémorisable, universel, simple.",
    artist: {
      name: "Paul Rand (1914 - 1996)",
      quote: "Le design est la méthode par laquelle la forme et le contenu sont fusionnés. Le design est simple, c'est pourquoi il est si compliqué.",
      bio: "Père du design graphique moderne américain (créateur des identités d'IBM, ABC, UPS, NeXT). Ses principes d'économie formelle, de grille modulaire et de lisibilité instantanée guident la filière Graphiste de La Croisée des Arts."
    },
    theory: [
      {
        title: "1. Le Test des 7 Critères de Paul Rand",
        desc: "Évaluer rigoureusement le symbole : est-il distinctif, visible, adaptable sur tout support, mémorisable, intemporel, universel et réductible à 16x16 pixels ?"
      },
      {
        title: "2. La Silhouette Monochromatique (Test 1-Bit)",
        desc: "Un logo efficace doit fonctionner en noir absolu sur blanc à 100 % avant la moindre adjonction de couleur, de dégradé ou d'effet d'ombre."
      },
      {
        title: "3. Zone d'Exclusion & Grille Géométrique",
        desc: "Définir un espace vital protecteur autour du symbole basé sur un module fixe (ex. la hauteur d'un élément X) pour éviter tout étouffement visuel."
      },
      {
        title: "4. L'Économie Formelle et le Retrait",
        desc: "Bannir les éléments purement décoratifs. La perfection est atteinte non pas lorsqu'il n'y a plus rien à ajouter, mais lorsqu'il n'y a plus rien à retirer."
      }
    ],
    exercise: {
      title: "Conception d'un Monogramme Géométrique Épuré (Chrono 20 min)",
      instructions: "Phase 1 (0 à 5 mn) : Croquis rapide de 6 pistes en silhouette pure à main levée. Phase 2 (5 à 12 mn) : Sélection de la piste la plus forte et géométrisation stricte sur grille orthogonale. Phase 3 (12 à 17 mn) : Test de réduction à 16px et 32px. Phase 4 (17 à 20 mn) : Choix d'une couleur d'accentuation unique et zone d'exclusion."
    },
    correction: {
      student_errors: [
        { label: "Surcharge de micro-traits", detail: "Multiplication de lignes fines devenant invisibles ou brouillées à petite échelle sur carte de visite." },
        { label: "Dépendance à la couleur", detail: "Logo qui perd toute lisibilité et tout impact dès qu'il est photocopié en noir et blanc." },
        { label: "Graisse de ligne hétérogène", detail: "Épaisseurs de contours disparates qui fragilisent l'harmonie géométrique globale." }
      ],
      remediations: [
        { label: "Épuration radicale des masses", detail: "Fusion des vecteurs et suppression des fioritures anecdotiques." },
        { label: "Normalisation sur grille X", detail: "Calibrage d'une épaisseur de trait constante sur l'ensemble du monogramme." },
        { label: "Validation binaire 1-bit", detail: "Contrôle en noir et blanc pur pour certifier la robustesse du symbole." }
      ],
      grades: { silhouette: 9.5, structure: 9.5, valeurs: 9, bords: 9.5, couleur: 9.5 }
    }
  },
  {
    id: "fiche-g01",
    num: "G-01",
    discipline: "graphisme",
    title: "Typographie : Hiérarchie, Graisses & Règles de Lisibilité",
    domain: "Mise en Page & Typo",
    level: "Débutant à Intermédiaire",
    duration: "15 min",
    image: "assets/planche_pedagogique_edge_control.jpg",
    summary: "Maîtriser les 3 niveaux de lecture fondamentaux, l'association sans faute d'une police avec empattement (Serif) et d'une linéale (Sans-Serif), ainsi que le calibrage optique de l'interlignage et du tracking.",
    artist: {
      name: "Jan Tschichold (1902 - 1974)",
      quote: "La typographie parfaite est certainement la plus délibérée des créations visuelles. Elle doit s'effacer pour laisser passer le sens avec clarté.",
      bio: "Typographe suisse d'origine allemande, auteur de Die neue Typographie. Ses traités sur la grille de mise en page, l'asymétrie fonctionnelle et les proportions des marges restent la référence mondiale de l'édition."
    },
    theory: [
      {
        title: "1. La Règle d'Or des 3 Niveaux de Lecture",
        desc: "Niveau 1 (Titre H1, accroche percutante), Niveau 2 (Sous-titres H2 et métadonnées), Niveau 3 (Corps de texte). Le lecteur doit balayer la page sans la moindre hésitation."
      },
      {
        title: "2. Contraste Typographique Franc",
        desc: "Ne jamais associer deux polices trop proches (ex. deux linéales similaires). Préférer l'association Serif / Sans-Serif ou un écart de graisse radical (Black vs Light)."
      },
      {
        title: "3. Interlignage Optimal (Leading)",
        desc: "Régler l'interlignage entre 125 % et 145 % du corps de texte. Un interlignage trop serré essouffle la lecture, trop large il déconnecte les paragraphes."
      },
      {
        title: "4. Calibrage du Tracking & Approche",
        desc: "Desserrer le tracking sur les textes en capitales et les petits corps de texte. Resserrer l'approche sur les grands titres pour éviter les trous optiques."
      }
    ],
    exercise: {
      title: "Hiérarchisation d'une Affiche Événementielle (Chrono 15 min)",
      instructions: "Prenez un texte brut de 6 lignes (nom d'événement, date, lieu, intervenants, tarif, réservation) et créez une affiche typographique équilibrée en utilisant au maximum 2 polices et 3 échelles de taille."
    },
    correction: {
      student_errors: [
        { label: "Trop de typographies disparates", detail: "Utilisation de 4 polices décoratives concurrentes détruisant la cohésion." },
        { label: "Interlignage écrasé", detail: "Jambages inférieurs et hampes supérieures qui s'entrechoquent visuellement." },
        { label: "Absence d'espace de respiration", detail: "Texte collé aux bords du format sans marge de sécurité." }
      ],
      remediations: [
        { label: "Binôme Serif / Sans-Serif", detail: "Une police expressive en titre, une police neutre et lisible en corps de texte." },
        { label: "Interlignage aéré à 135 %", detail: "Dégagement des lignes pour un guidage oculaire fluide." },
        { label: "Marges généreuses", detail: "Réservation d'un cadre blanc équivalent à 10 % du format global." }
      ],
      grades: { silhouette: 9, structure: 9.5, valeurs: 9, bords: 9, couleur: 9.5 }
    }
  },
  {
    id: "fiche-g02",
    num: "G-02",
    discipline: "graphisme",
    title: "Prépresse & Impression : CMJN, 300 DPI, Fonds Perdus & Trait de Coupe",
    domain: "Technique Print & Finition",
    level: "Intermédiaire",
    duration: "15 min",
    image: "assets/planche_pedagogique_gamut_masking.jpg",
    summary: "Les règles industrielles incontournables de la chaîne graphique : conversion RVB vers CMJN (profil FOGRA39 / ISO Coated), fond perdu obligatoire de 3 mm, zone tranquille de 5 mm et résolution native 300 DPI à échelle 1:1.",
    artist: {
      name: "Atelier Prépresse Graph2Print",
      quote: "Une création sublime sur écran ne vaut rien si elle n'est pas imprimable dans le respect des contraintes mécaniques du papier et du massicot.",
      bio: "Règles d'atelier de production réelle issues de l'imprimerie numérique et offset : gestion du taux d'encrage maximal (TAC), vectorisation des polices et noir enrichi."
    },
    theory: [
      {
        title: "1. La Synthèse Soustractive (CMJN)",
        desc: "Les écrans émettent de la lumière (RVB), l'encre absorbe la lumière (CMJN). Toujours convertir en profil normalisé (ISO Coated v2 / FOGRA39) et vérifier le taux d'encrage < 300 %."
      },
      {
        title: "2. Résolution Native 300 DPI",
        desc: "Pour une impression sans crénelage : Pixels = (Centimètres / 2.54) * 300. Les visuels web à 72 DPI sont formellement proscrits en print."
      },
      {
        title: "3. Fond Perdu (Bleed) de 3 mm",
        desc: "Toute couleur ou photo allant jusqu'au bord du document doit déborder de 3 mm au-delà du trait de coupe pour pallier les micro-variations du massicot."
      },
      {
        title: "4. Zone Tranquille de 5 mm & Noir Enrichi",
        desc: "Garder textes et logos à au moins 5 mm du bord de coupe. Pour les grands aplats de noir, utiliser un noir enrichi (C:40 M:30 J:30 N:100) pour éviter le gris terne."
      }
    ],
    exercise: {
      title: "Gabarit Technique Carte de Visite 85 x 55 mm (Chrono 15 min)",
      instructions: "Configurez le gabarit print complet : format fini 85x55 mm, format brut avec fond perdu 91x61 mm (+3 mm de chaque côté), zone de sécurité à 5 mm et application du noir enrichi."
    },
    correction: {
      student_errors: [
        { label: "Texte collé au trait de coupe", detail: "Numéro de téléphone placé à 1,5 mm du bord, risque certain de rognage au massicot." },
        { label: "Visuel exporté à 72 DPI", detail: "Flou de pixellisation et trame dégradée sur support papier couché." },
        { label: "Noir 100 % seul sur fond large", detail: "Rendu grisâtre terne sur grande surface sans soutien quadrichromique." }
      ],
      remediations: [
        { label: "Zone de sécurité calée à 5 mm", detail: "Alignement rigoureux des textes sur les guides intérieurs." },
        { label: "Contrôle en amont à 300 DPI", detail: "Échantillonnage haute résolution certifié ISO." },
        { label: "Noir enrichi pour aplats", detail: "Formule C:40 M:30 J:30 N:100 pour une profondeur d'encre veloutée." }
      ],
      grades: { silhouette: 9, structure: 10, valeurs: 9, bords: 9.5, couleur: 9.5 }
    }
  },
  {
    id: "fiche-g03",
    num: "G-03",
    discipline: "graphisme",
    title: "Vectoriel & Plume de Bézier : Géométrie et Économie de Points",
    domain: "Outils Vectoriels & Illustrator",
    level: "Tous Niveaux",
    duration: "20 min",
    image: "assets/planche_pedagogique_textures_brosses.jpg",
    summary: "Maîtriser la trajectoire des courbes de Bézier : placer les points d'ancrage uniquement aux extremums (sommets horizontaux et verticaux), aligner les poignées à 0° ou 90°, et combiner les formes avec le Pathfinder.",
    artist: {
      name: "Pierre Bézier (1910 - 1999)",
      quote: "Une courbe parfaite ne se dessine pas par tâtonnement, elle se calcule avec un minimum absolu de repères directeurs.",
      bio: "Ingénieur français chez Renault qui a mathématisé les courbes paramétriques devenues le standard absolu de toute la création vectorielle numérique moderne (PostScript, SVG, Illustrator, glyphes de polices)."
    },
    theory: [
      {
        title: "1. La Règle d'Or des Extremums",
        desc: "Ne poser un point d'ancrage que là où la courbe atteint son sommet horizontal ou vertical absolu. Moins un tracé contient de points, plus la courbe est lisse."
      },
      {
        title: "2. Poignées Orthogonales à 0° et 90°",
        desc: "Maintenir la touche Maj pour verrouiller les tangentes des poignées à l'horizontale ou la verticale : cela supprime 99 % des bosses parasites."
      },
      {
        title: "3. Opérations Booléennes (Pathfinder)",
        desc: "Privilégier la composition par cercles et rectangles parfaits fusionnés (Union, Soustraction, Intersection) plutôt que le dessin manuel approximatif."
      },
      {
        title: "4. Tracés Fermés et Nettoyage",
        desc: "Vérifier que les tracés sont parfaitement clos et fusionnés pour autoriser la découpe vinyle, l'usinage laser et un affichage SVG ultra-léger."
      }
    ],
    exercise: {
      title: "Vectorisation d'un Pictogramme en 8 Points Maximum (Chrono 20 min)",
      instructions: "Choisissez une forme stylisée (goutte d'eau, nuage ou oiseau géométrique) et vectorisez-la rigoureusement en limitant le contour à un maximum strict de 8 points d'ancrage aux extremums."
    },
    correction: {
      student_errors: [
        { label: "Prolifération de points inutiles", detail: "Tracé instable comptant 48 points d'ancrage créant des facettes anguleuses." },
        { label: "Poignées asymétriques brisées", detail: "Tangentes désalignées brisant la continuité de la courbure." },
        { label: "Tracés ouverts non jointifs", detail: "Forme impossible à remplir ou découper sur machine à commande numérique." }
      ],
      remediations: [
        { label: "Suppression de 80 % des points", detail: "Recentrage exclusif sur les 4 sommets directeurs cardinaux." },
        { label: "Tangentes parfaitement lisses", detail: "Harmonisation des longueurs de leviers de Bézier." },
        { label: "Tracé fermé certifié", detail: "Jonction propre des points d'extrémité." }
      ],
      grades: { silhouette: 9.5, structure: 9.5, valeurs: 8.5, bords: 10, couleur: 9 }
    }
  },
  {
    id: "fiche-g04",
    num: "G-04",
    discipline: "graphisme",
    title: "Systèmes de Couleurs : Nuancier Pantone, Profils CMJN et Harmonies",
    domain: "Colorimétrie & Branding",
    level: "Intermédiaire",
    duration: "15 min",
    image: "assets/planche_pedagogique_gamut_masking.jpg",
    summary: "Structurer une palette de marque professionnelle : couleur dominante (60 %), couleur secondaire de soutien (30 %) et couleur d'accentuation (10 %). Comprendre le rôle des tons directs Pantone pour les impressions exigeantes.",
    artist: {
      name: "Josef Albers (1888 - 1976)",
      quote: "Une couleur n'est jamais vue telle qu'elle est réellement. Elle trompe continuellement l'œil en fonction de son entourage.",
      bio: "Maître du Bauhaus et auteur de l'Interaction of Color. Ses expérimentations rigoureuses sur la perception chromatique et les contrastes simultanés sont au cœur de la méthodologie de La Croisée des Arts."
    },
    theory: [
      {
        title: "1. La Règle des 60-30-10 en Branding",
        desc: "60 % pour la couleur de fond dominante, 30 % pour la couleur de structure secondaire, 10 % pour la couleur d'accentuation (bouton d'appel à l'action, sceau)."
      },
      {
        title: "2. Tons Directs Pantone (PMS)",
        desc: "Encres pré-mélangées assurant une teinte rigoureusement identique sur tout support physique (papier, textile, métal), indispensable pour les logos institutionnels."
      },
      {
        title: "3. Harmonie Triadique et Complémentaire",
        desc: "Construire des accords équilibrés en utilisant les angles précis de la roue chromatique (180° pour complémentaire, 120° pour triadique)."
      },
      {
        title: "4. Nuancier Digital et Tokens Hexadécimaux",
        desc: "Documenter chaque teinte avec ses 4 équivalents indispensables : Référence Pantone, formule CMJN print, valeurs RVB écran et code hexadécimal web."
      }
    ],
    exercise: {
      title: "Charte Chromatique pour Marque d'Alimentation Écoresponsable (Chrono 15 min)",
      instructions: "Composez une palette de 4 couleurs (Dominante, Secondaire, Accentuation, Neutre) avec justification psychologique, ratios 60-30-10 et spécifications CMJN/HEX complètes."
    },
    correction: {
      student_errors: [
        { label: "Palette sans hiérarchie", detail: "4 couleurs vives saturées à 100 % se disputant le premier plan sans couleur neutre." },
        { label: "Incohérence des contrastes", detail: "Texte jaune pâle sur fond blanc avec un ratio de lisibilité désastreux." },
        { label: "Absence de spécification print", detail: "Codes RVB fournis sans conversion CMJN validée pour l'impression." }
      ],
      remediations: [
        { label: "Application du ratio 60-30-10", detail: "Une dominante sauge douce, un vert forêt profond et une touche terracotta vive." },
        { label: "Contraste normé WCAG", detail: "Validation des paires texte/fond au-delà du ratio 4.5:1." },
        { label: "Fiche technique quadridimensionnelle", detail: "Spécifications Pantone, CMJN, RVB et HEX documentées." }
      ],
      grades: { silhouette: 9, structure: 9.5, valeurs: 9, bords: 9, couleur: 10 }
    }
  },
  {
    id: "fiche-g05",
    num: "G-05",
    discipline: "graphisme",
    title: "UI / UX Design : Grille de 8px, Composants Modulaires et Accessibilité WCAG",
    domain: "Design Numérique & UI/UX",
    level: "Intermédiaire à Avancé",
    duration: "20 min",
    image: "assets/planche_pedagogique_composition_cinema.jpg",
    summary: "Concevoir des interfaces numériques modernes : système d'espacements modulaire basé sur des multiples de 8 (8, 16, 24, 32, 48px), contrastes accessibles WCAG AA (ratio minimum 4.5:1), et atomic design.",
    artist: {
      name: "Dieter Rams (1932 - présent)",
      quote: "Le bon design est discret, compréhensible, esthétique, minutieux jusqu'au dernier détail et aussi peu de design que possible.",
      bio: "Figure emblématique du design fonctionnel allemand (Braun). Ses 10 principes du bon design ont directement inspiré les Design Systems modernes d'Apple, Google et Figma."
    },
    theory: [
      {
        title: "1. La Grille Modulaire de 8 Pixels",
        desc: "Tous les espacements (margins, paddings, gaps, hauteurs d'inputs) s'échelonnent par multiples de 8px (ou 4px pour les micro-ajustements), éliminant les hésitations de cadrage."
      },
      {
        title: "2. Accessibilité Visuelle (Norme WCAG AA)",
        desc: "Le ratio de contraste entre le texte et son arrière-plan doit atteindre 4.5:1 pour le texte standard et 3:1 pour les grands titres, pour garantir la lisibilité en plein soleil."
      },
      {
        title: "3. Composants et Atomic Design",
        desc: "Construire du plus simple au plus complexe : Tokens (couleurs, rayons, typo) -> Atomes (boutons, icônes) -> Molécules (barre de recherche) -> Organismes (cartes, barres)."
      },
      {
        title: "4. Cibles Tactiles 44x44px et États Interactifs",
        desc: "Prévoir une zone de clic minimale de 44x44 pixels pour les utilisateurs sur smartphone, et concevoir systématiquement les états Default, Hover, Active et Focus."
      }
    ],
    exercise: {
      title: "Conception d'une Carte Produit E-Commerce Responsive (Chrono 20 min)",
      instructions: "Concevez une carte produit (image, badge de réduction, titre, notation étoiles, prix, bouton d'action) en appliquant rigoureusement la grille de 8px et les contrastes WCAG AA."
    },
    correction: {
      student_errors: [
        { label: "Espacements incohérents", detail: "Marges anarchiques de 7px, 13px et 21px créant une instabilité visuelle." },
        { label: "Contraste texte insuffisant", detail: "Texte gris clair sur fond blanc avec un ratio de 2.2:1 illisible sur écran mobile." },
        { label: "Bouton d'action étriqué", detail: "Hauteur de bouton de 26px rendant le toucher imprécis au doigt." }
      ],
      remediations: [
        { label: "Alignement sur la grille 8px", detail: "Paddings intérieurs calés à 16px, marges verticales de 8px et 24px." },
        { label: "Contraste rehaussé à 5.4:1", detail: "Foncissement du texte secondaire pour respecter la norme d'accessibilité." },
        { label: "Bouton tactile 44px de hauteur", detail: "Surface d'appui confortable conforme aux directives ergonomiques." }
      ],
      grades: { silhouette: 9.5, structure: 9.5, valeurs: 9, bords: 9, couleur: 9.5 }
    }
  }
];

// =====================================================================
// SESSIONS D'ATELIER CHRONO (DESSIN & GRAPHISME)
// =====================================================================
const SESSIONS_DATA = [
  // Ateliers Dessin & Peinture
  {
    id: "session-sargent",
    title: "John Singer Sargent : Portrait Alla Prima & 4 Bords",
    category: "Maîtres du Portrait",
    discipline: "dessin",
    duration: 20,
    image: "assets/session_sargent_croquis.jpg",
    director: "John Singer Sargent",
    tips: "Notan binaire en 2 valeurs, fusion des ombres dans le fond, plans fermes sur la pommette et rehauts tranchants."
  },
  {
    id: "session-dune",
    title: "Dune 1 & 2 : Monumentalité, Cadrage & Poses de Personnages",
    category: "Cinéma & Narration",
    discipline: "dessin",
    duration: 10,
    isTraditionalPaper: true,
    paperNotice: "Consigne d'atelier : Travail traditionnel sur feuille obligatoire. Ne dessinez pas sur votre écran. Munissez-vous d'une feuille de papier blanc ou carnet de croquis, d'un crayon 2B/4B ou d'un fusain. Observez la pose de personnage ci-contre, esquissez votre étude sur votre feuille pendant les 10 minutes du compte à rebours, puis prenez en photo ou déposez votre dessin pour l'envoyer à la correction.",
    image: "assets/dune_pose_01_paul_cape_vent.jpg",
    director: "Denis Villeneuve",
    tips: "Focus sur la silhouette dynamique, la tension du drapé au vent et la petitesse de la silhouette face au gigantisme des dunes.",
    poses: [
      {
        id: "pose-paul-cape",
        title: "Paul Muad'Dib : Cape au vent sur la crête de dune",
        subtitle: "Contre-plongée dramatique & drapé flottant",
        image: "assets/dune_pose_01_paul_cape_vent.jpg",
        tips: "Tracer d'abord la ligne d'action du corps en légère diagonale, puis les arabesques des plis de la cape qui s'étirent horizontalement."
      },
      {
        id: "pose-fremen-accroupi",
        title: "Éclaireur Fremen : Guet accroupi avec thumper",
        subtitle: "Tension athlétique & centre de gravité bas",
        image: "assets/dune_pose_02_fremen_accroupi.jpg",
        tips: "Compresser la boîte du torse contre les cuisses, positionner le bâton comme axe vertical directeur."
      },
      {
        id: "pose-duel-krys",
        title: "Guerrier Fremen : Posture de duel aux dagues Krys",
        subtitle: "Garde basse d'esquive & couteaux de ver",
        image: "assets/dune_pose_03_duel_couteau_krys.jpg",
        tips: "Écarter la base de sustentation des jambes, fléchir les genoux et faire claquer la silhouette des lames blanches."
      },
      {
        id: "pose-marcheur-tempete",
        title: "Marcheur de l'Erg : Traversée dans la tempête de sable",
        subtitle: "Résistance au vent & silhouette en biseau",
        image: "assets/dune_pose_04_marcheur_tempete.jpg",
        tips: "Incliner le buste à 30° contre le vent, simplifier la silhouette en une masse pyramidale dense."
      }
    ]
  },
  {
    id: "session-mucha",
    title: "Alfons Mucha : Ornementation Art Nouveau",
    category: "Maîtres Classiques",
    discipline: "dessin",
    duration: 20,
    image: "assets/session_mucha_art.jpg",
    director: "Alfons Mucha",
    tips: "Travailler la souplesse du cerne, les arabesques végétales et l'encadrement en arche décorative."
  },
  {
    id: "session-ghibli",
    title: "Studios Ghibli : Stylisation Organique et Douceur",
    category: "Animation Japonaise",
    discipline: "dessin",
    duration: 15,
    image: "assets/session_ghibli_aquarelle.jpg",
    director: "Hayao Miyazaki",
    tips: "Lignes souples, volumes ronds, pelages simplifiés en aplats et yeux noirs brillants avec touche blanche."
  },
  {
    id: "session-vangogh",
    title: "Vincent Van Gogh : Matière Vibrante et Ciel Nocturne",
    category: "Peinture Post-Impressionniste",
    discipline: "dessin",
    duration: 15,
    image: "assets/session_vangogh_matiere.jpg",
    director: "Vincent Van Gogh",
    tips: "Hachures courbes directionnelles, contrastes jaune et bleu cobalt et empâtements marqués."
  },
  {
    id: "session-arcane",
    title: "Arcane & Fortiche : Stylisation Graphique et Bords Tranchants",
    category: "Animation & Concept Art",
    discipline: "dessin",
    duration: 20,
    image: "assets/session_arcane_fortiche.jpg",
    director: "Fortiche Production",
    tips: "Sculpter les volumes au pinceau sec, poser des traits de hachures graphiques et contraster les teintes néon contre des neutres sombres."
  },
  {
    id: "session-thefall",
    title: "The Fall : Symétrie Onirique et Couleurs Baroques",
    category: "Cinéma & Composition",
    discipline: "dessin",
    duration: 10,
    image: "assets/session_thefall_paysage.jpg",
    director: "Tarsem Singh",
    tips: "Centrer rigoureusement le sujet, simplifier le décor en motifs architecturaux purs et saturer les lumières dorées."
  },
  {
    id: "session-bladerunner",
    title: "Blade Runner 2049 : Brumes Volumétriques et Silhouettes Néon",
    category: "Science-Fiction & Atmosphère",
    discipline: "dessin",
    duration: 15,
    image: "assets/session_bladerunner_lineart.jpg",
    director: "Denis Villeneuve & Roger Deakins",
    tips: "Travailler les valeurs dégradées de la perspective atmosphérique et découper des silhouettes sombres sur fond orangé incandescent."
  },
  {
    id: "session-timburton",
    title: "Tim Burton : Expressionnisme Gothique et Silhouettes Effilées",
    category: "Stylisation & Expressionnisme",
    discipline: "dessin",
    duration: 15,
    image: "assets/session_burton_encre.jpg",
    director: "Tim Burton",
    tips: "Allonger démesurément les membres, accentuer les yeux cernés et créer un contraste fort noir et blanc à rayures graphiques."
  },
  {
    id: "session-figure",
    title: "Académie de Dessin : Modèle Vivant et Pose Dynamique",
    category: "Anatomie Vivante",
    discipline: "dessin",
    duration: 20,
    image: "assets/session_modele_morpho.jpg",
    director: "Atelier Académique Classique",
    tips: "Trouver immédiatement la ligne d'action en 15 secondes, caler la boîte du torse et du bassin en opposition de contrapposto."
  },
  {
    id: "session-Chrono-Croisée",
    title: "Grand Défi Morphologie : Étude de Mains en Poses Variées",
    category: "Défi Thématique d'Atelier",
    discipline: "dessin",
    duration: 15,
    image: "assets/session_defi_mains.jpg",
    director: "Cyril & La Croisée des Arts",
    tips: "Analyser la paume comme un bloc trapézoïdal, vérifier les arcs des phalanges et poser les ombres portées."
  },

  // Ateliers Spécifiques Design Graphique
  {
    id: "session-logo-monogramme",
    title: "Défi Graphiste : Monogramme Géométrique en Silhouette Pure",
    category: "Identité & Branding",
    discipline: "graphisme",
    duration: 15,
    image: "assets/planche_pedagogique_shape_language.jpg",
    director: "Paul Rand & Studio Graph2Print",
    tips: "Esquisser 6 pistes en 1-bit noir pur sur blanc, éliminer tout détail superflu et vérifier la lisibilité à 16px."
  },
  {
    id: "session-affiche-typo",
    title: "Défi Graphiste : Affiche Typographique & Grille Suisse",
    category: "Mise en Page & Typo",
    discipline: "graphisme",
    duration: 15,
    image: "assets/planche_pedagogique_edge_control.jpg",
    director: "Jan Tschichold & Josef Müller-Brockmann",
    tips: "Structurer 3 niveaux de lecture clairs, aligner les pavés de texte sur une grille de colonnes et aérer les marges."
  },
  {
    id: "session-picto-vectoriel",
    title: "Défi Graphiste : Pictogramme Synthétique en 8 Points Bézier",
    category: "Vectoriel & Illustrator",
    discipline: "graphisme",
    duration: 10,
    image: "assets/planche_pedagogique_textures_brosses.jpg",
    director: "Pierre Bézier",
    tips: "Poser les points d'ancrage uniquement aux extremums verticaux et horizontaux, aligner les poignées à 0° ou 90°."
  },
  {
    id: "session-charte-couleur",
    title: "Défi Graphiste : Palette de Marque & Ratios 60-30-10",
    category: "Colorimétrie & Branding",
    discipline: "graphisme",
    duration: 10,
    image: "assets/planche_pedagogique_gamut_masking.jpg",
    director: "Josef Albers",
    tips: "Définir la couleur dominante (60 %), secondaire (30 %) et d'accentuation (10 %), vérifier le contraste WCAG > 4.5:1."
  }
];

// =====================================================================
// TRAVAUX ÉTUDIANTS DE LA GALERIE (DESSIN & GRAPHISME)
// =====================================================================
const STUDENT_GALLERY = [
  // Travaux Graphisme
  {
    author: "Antoine Bernard",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&auto=format&fit=crop&q=80",
    title: "Identité de Marque & Monogramme Café Botanique",
    date: "Il y a 3 heures",
    critique: "9.7/10",
    discipline: "graphisme",
    image: "assets/planche_pedagogique_shape_language.jpg",
    evaluation: { silhouette: 10, structure: 9.5, valeurs: 9.5, bords: 9.5, couleur: 10 }
  },
  {
    author: "Sarah Lin",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop&q=80",
    title: "Affiche Typographique Festival d'Architecture Urbaine",
    date: "Il y a 5 heures",
    critique: "9.5/10",
    discipline: "graphisme",
    image: "assets/planche_pedagogique_composition_cinema.jpg",
    evaluation: { silhouette: 9.5, structure: 10, valeurs: 9.5, bords: 9, couleur: 9.5 }
  },
  {
    author: "Élodie Marchand",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&auto=format&fit=crop&q=80",
    title: "Packaging Cosmétique & Gamme Pastel 300 DPI",
    date: "Hier",
    critique: "9.6/10",
    discipline: "graphisme",
    image: "assets/planche_pedagogique_gamut_masking.jpg",
    evaluation: { silhouette: 9.5, structure: 9.5, valeurs: 9, bords: 9.5, couleur: 10 }
  },

  // Travaux Dessin & Peinture
  {
    author: "Léa Moreau",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop&q=80",
    title: "Harmonie Florale & Pigments Coquelicots",
    date: "Il y a 2 jours",
    critique: "9.5/10",
    discipline: "dessin",
    image: "assets/galerie_aquarelle_coquelicots.jpg",
    evaluation: { silhouette: 9.5, structure: 9.5, valeurs: 9, bords: 9.5, couleur: 10 }
  },
  {
    author: "Paul Dubois",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&auto=format&fit=crop&q=80",
    title: "Étude Équine en Mouvement",
    date: "Hier",
    critique: "9.2/10",
    discipline: "dessin",
    image: "assets/galerie_aquarelle_cheval.jpg",
    evaluation: { silhouette: 9.5, structure: 9, valeurs: 9, bords: 9, couleur: 9.5 }
  },
  {
    author: "Bérangère F.",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&auto=format&fit=crop&q=80",
    title: "Floraison Sakura & Lavis",
    date: "Aujourd'hui",
    critique: "9.6/10",
    discipline: "dessin",
    image: "assets/galerie_aquarelle_sakura.jpg",
    evaluation: { silhouette: 9.5, structure: 9.5, valeurs: 9.5, bords: 9.5, couleur: 10 }
  },
  {
    author: "Tim Moreau",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&auto=format&fit=crop&q=80",
    title: "Regard Félin & Contraste Émeraude",
    date: "Aujourd'hui",
    critique: "9.3/10",
    discipline: "dessin",
    image: "assets/galerie_aquarelle_felin.jpg",
    evaluation: { silhouette: 9, structure: 9.5, valeurs: 9.5, bords: 9, couleur: 9.5 }
  },
  {
    author: "Camille R.",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&auto=format&fit=crop&q=80",
    title: "Oies Sauvages en Vol & Perspective Céleste",
    date: "Il y a 3 heures",
    critique: "9.4/10",
    discipline: "dessin",
    image: "assets/galerie_aquarelle_faune.jpg",
    evaluation: { silhouette: 9.5, structure: 9.5, valeurs: 9.5, bords: 9.5, couleur: 9.5 }
  },
  {
    author: "Maxime V.",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&auto=format&fit=crop&q=80",
    title: "Analyse Morphologique & Volumes Synthétiques",
    date: "Il y a 1 heure",
    critique: "9.1/10",
    discipline: "dessin",
    image: "assets/galerie_anatomie_morphologie.jpg",
    evaluation: { silhouette: 9.5, structure: 9.5, valeurs: 9, bords: 8.5, couleur: 9 }
  }
];
