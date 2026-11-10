const COURSES_DATA = [
  {
    id: "masterclass-sargent",
    num: "MASTERCLASS",
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
    title: "Température de Couleur et Gamut Masking",
    domain: "Couleur & Harmonie",
    level: "Intermédiaire à Confirmé",
    duration: "25 min",
    image: "assets/planche_pedagogique_gamut_masking.jpg",
    summary: "La méthode de James Gurney appliquée au numérique : restreindre sa palette à un masque géométrique sur la roue chromatique et appliquer la réciprocité thermique (lumière chaude et ombres froides, ou l'inverse).",
    artist: {
      name: "James Gurney (1958 - présent)",
      quote: "La couleur n'a aucune valeur absolue en soi. Elle n'existe et ne vibre que par sa relation thermique avec les nuances qui l'entourent.",
      bio: "Illustrateur naturaliste et auteur de référence mondiale (Dinotopia, Color and Light). James Gurney a théorisé le Gamut Masking pour permettre aux artistes numériques de maîtriser les contrastes chaud-froid sans dissonances."
    },
    theory: [
      {
        title: "Le Gamut Mask (Masque de gamme)",
        desc: "Restreindre le sélecteur à un polygone fermé sur la roue chromatique. Interdiction stricte de sortir du masque, garantissant une harmonie sans fausse note."
      },
      {
        title: "La règle de réciprocité thermique",
        desc: "Une source lumineuse chaude engendre obligatoirement des ombres froides. Une lumière diffuse froide produit des ombres chaudes et terreuses."
      },
      {
        title: "Le pouvoir des neutres (70 à 80 %)",
        desc: "Les gris colorés et tons rabattus proches du centre permettent aux touches saturées des sommets de vibrer pleinement."
      },
      {
        title: "Bannir le noir pur pour ombrer",
        desc: "Teinter systématiquement l'ombre avec la couleur de la lumière ambiante ou du ciel environnant pour conserver la luminosité."
      }
    ],
    exercise: {
      title: "Mini-paysage au crépuscule",
      instructions: "Palette triangulaire limitée : dominante orange brûlé, ombres violettes désaturées, rehaut jaune paille clair au point focal uniquement."
    }
  },
  {
    id: "fiche-03",
    num: "03",
    title: "Shape Language et Dynamisme de Silhouette",
    domain: "Character Design & Morphologie",
    level: "Débutant à Confirmé",
    duration: "20 min",
    image: "assets/planche_pedagogique_shape_language.jpg",
    summary: "La charge psychologique des trois formes primitives (Carré, Triangle, Cercle) et le test impitoyable de la silhouette en aplat noir uni sur fond blanc.",
    artist: {
      name: "Eyvind Earle (1916 - 2000)",
      quote: "La nature est un foisonnement désordonné. Le rôle suprême de l'artiste est de la simplifier en formes géométriques fortes qui frappent directement l'inconscient.",
      bio: "Peintre légendaire et directeur artistique chez Walt Disney (La Belle au Bois Dormant). Eyvind Earle a révolutionné le design visuel en bâtissant des mondes entiers sur la confrontation dynamique du carré, du triangle et de l'arche."
    },
    theory: [
      {
        title: "Le Carré (Défenseur Gromma)",
        desc: "Solidité, force brute, stabilité, rigidité et fidélité. Arêtes droites, appui lourd et verticalité dominante."
      },
      {
        title: "Le Triangle (Éclaireuse Kira)",
        desc: "Danger, vitesse, ruse, tension et agilité. Lignes brisées obliques, dynamisme et pointes acérées."
      },
      {
        title: "Le Cercle (Mage Éblis)",
        desc: "Bienveillance, sagesse, rondeur, douceur et protection. Courbes continues et accueil rassurant."
      },
      {
        title: "Règle de hiérarchie 70 / 20 / 10",
        desc: "Une masse majeure dominante à 70 %, un volume secondaire à 20 %, des accents fins à 10 %. Bannir les formes de tailles égales."
      }
    ],
    exercise: {
      title: "Les Trois Gardes de la Citadelle",
      instructions: "20 minutes : 3 lignes d'action contrastées, 3 silhouettes en aplat noir pur d'après les 3 formes primaires, puis ouverture des espaces négatifs."
    }
  },
  {
    id: "fiche-04",
    num: "04",
    title: "Drapés et Plis : Lois Mécaniques et Simplification",
    domain: "Anatomie Habillée & Dessin Académique",
    level: "Intermédiaire à Confirmé",
    duration: "20 min",
    image: "assets/planche_pedagogique_drapes_plis.jpg",
    summary: "Comprendre le tissu comme une surface souple soumise à la gravité et aux points de tension anatomiques. Maîtriser les sept lois mécaniques des plis et la hiérarchie par grandes masses.",
    artist: {
      name: "J.C. Leyendecker (1874 - 1951)",
      quote: "Ne dessinez jamais un pli par hasard. Chaque cassure d'étoffe est une flèche géométrique qui sculpte le volume sous-jacent.",
      bio: "Virtuose de l'âge d'or de l'illustration américaine, Leyendecker a codifié la mécanique des plis avec une stylisation architecturale unique. Ses drapés combinent précision anatomique et élégance graphique moderne."
    },
    theory: [
      {
        title: "Plis tubulaires et de suspension",
        desc: "Chute libre le long d'un point d'ancrage (épaules, hanches), formant des cônes et cylindres verticaux rythmés."
      },
      {
        title: "Plis en zigzag et de compression",
        desc: "Tassement axial d'un tube d'étoffe sous l'effet du repliement, créant des accordéons asymétriques aux articulations fléchies."
      },
      {
        title: "Plis en spirale et de torsion",
        desc: "Enroulement de l'étoffe autour d'un membre cylindrique animé d'une rotation (bras, jambe ou torse en torsion)."
      },
      {
        title: "Points d'ancrage anatomiques",
        desc: "Les plis rayonnent depuis les saillies osseuses (épaules, coudes, genoux). Bannir les plis flottants sans cause physique."
      }
    ],
    exercise: {
      title: "Étude d'un bras fléchi en manche drapée",
      instructions: "20 minutes : 5 minutes pour poser les cylindres sous-jacents, 8 minutes pour tracer les vecteurs de tension et plis zigzag, 4 minutes d'ombrage Notan, 3 minutes pour les arêtes vives."
    }
  },
  {
    id: "fiche-05",
    num: "05",
    title: "Subsurface Scattering et Rendu de la Peau",
    domain: "Rendu Numérique & Carnation",
    level: "Intermédiaire à Confirmé",
    duration: "25 min",
    image: "assets/planche_pedagogique_sss_peau.jpg",
    summary: "Bannir l'effet plastique ou cireux dans les portraits. Comprendre la pénétration de la lumière dans l'épiderme, la frange saturée du terminateur et la tripartition thermique du visage.",
    artist: {
      name: "Peter Paul Rubens (1577 - 1640)",
      quote: "La chair humaine n'est pas de la pierre peinte. Elle palpite, respire et diffuse la chaleur du sang rouge sous laiteuse clarté de l'albâtre.",
      bio: "Géant de la peinture baroque flamande, Rubens est le pionnier historique du rendu de la chair vivante. Ses portraits intègrent intuitivement la translucidité cutanée et les sous-couches vermillon plusieurs siècles avant la formalisation du Subsurface Scattering."
    },
    theory: [
      {
        title: "Physique de la diffusion sous-surfacique (SSS)",
        desc: "La lumière pénètre les couches superficielles translucides de la peau et ressort rougie par la vascularisation sous-cutanée."
      },
      {
        title: "La frange de terminateur ultra-saturée",
        desc: "À la frontière exacte entre ombre propre et zone éclairée, la peau présente une bande de saturation intense rouge orangé caractéristique."
      },
      {
        title: "Les trois zones thermiques du visage",
        desc: "Front doré (os frontal proche), tiers médian carmin et rosé (vascularisation dense), tiers inférieur gris-bleuâtre (follicules pileux et ombres)."
      },
      {
        title: "Alternance de bords doux et spéculaires",
        desc: "Traiter la transition d'ombre cutanée avec un bord doux tout en réservant des bords nets et tranchants pour les éclats spéculaires humides."
      }
    ],
    exercise: {
      title: "Étude rapprochée d'une oreille en contre-jour",
      instructions: "25 minutes : 6 minutes pour la silhouette et le cartilage, 10 minutes de dégradé d'ombre, 6 minutes pour la frange incandescente rouge rubis du contre-jour, 3 minutes de rehauts spéculaires."
    }
  },
  {
    id: "fiche-06",
    num: "06",
    title: "Composition Cinématographique et Cadrages Focaux",
    domain: "Concept Art & Narration Visuelle",
    level: "Intermédiaire à Avancé",
    duration: "20 min",
    image: "assets/planche_pedagogique_composition_cinema.jpg",
    summary: "Transposer les optiques de caméra au concept art et à la bande dessinée. Exploiter le dynamisme immersif du grand angle (18 à 24 mm) versus l'écrasement monumental du téléobjectif (85 à 200 mm).",
    artist: {
      name: "Roger Deakins (1949 - présent)",
      quote: "Le cadre et la focale ne sont pas de la technique pure. Ils dictent la pulsation émotionnelle et l'échelle d'isolement du personnage face au monde.",
      bio: "Directeur de la photographie deux fois oscarisé (Blade Runner 2049, 1917, Skyfall). Roger Deakins est la référence universelle de l'art du cadrage cinématographique grand angle et de la compression dramatique des plans."
    },
    theory: [
      {
        title: "Grand angle (18 à 24 mm) et perspective dynamique",
        desc: "Écarte les plans, accentue les fuyantes obliques et confère une immersion viscérale avec des avant-plans saisissants."
      },
      {
        title: "Longue focale (85 à 200 mm) et écrasement monumental",
        desc: "Rapproche les plans distants, compresse la profondeur spatiale et renforce la majesté des foules ou des architectures titanesques."
      },
      {
        title: "Ratios d'aspect narratifs (16:9 et Cinémascope 2.39:1)",
        desc: "Le ratio panoramique impose de structurer le regard par masses latérales et valorise les respirations d'espaces négatifs."
      },
      {
        title: "Lignes de force et convergence focale",
        desc: "Disposer les diagonales et structures du décor pour orienter imperceptiblement l'oeil vers l'élément narratif clé."
      }
    ],
    exercise: {
      title: "Vignette panoramique en cinémascope 2.39:1",
      instructions: "20 minutes : ratio panoramique, placer une silhouette humaine minuscule au tiers inférieur droit face à un édifice colossal, en perspective 3 points grand angle."
    }
  },
  {
    id: "fiche-07",
    num: "07",
    title: "Hybridation 2D/3D : Bloquage sous Blender et Paint-over",
    domain: "Production Numérique & Workflow Moderne",
    level: "Confirmé à Expert",
    duration: "30 min",
    image: "assets/mockup_plateforme_web_la_croisee_des_arts.jpg",
    summary: "Accélérer la mise en place de scènes complexes sans perdre la sensibilité picturale. Bloquer les volumes primitifs en 3D pour verrouiller perspective et lumière, puis réaliser un paint-over texturé à la main.",
    artist: {
      name: "Alberto Mielgo (1979 - présent)",
      quote: "La 3D est un squelette mathématique stérile. Ce n'est qu'en brisant sa perfection par le geste pictural texturé que naît la véritable poésie visuelle.",
      bio: "Réalisateur et concept artist oscarisé (The Witness, Jibaro dans Love, Death & Robots, Spider-Man: New Generation). Alberto Mielgo incarne l'avant-garde du workflow contemporain combinant blocking 3D rigoureux et peinture gestuelle expressive."
    },
    theory: [
      {
        title: "Blocage en volumes primitifs",
        desc: "Utiliser de simples cubes, cylindres et biseaux pour caler instantanément l'angle de vue et les trois points de fuite sans détail superflu."
      },
      {
        title: "Éclairage virtuel et ombres portées",
        desc: "Positionner une lumière directionnelle dans Blender pour obtenir des ombres portées cohérentes et tester les ambiances."
      },
      {
        title: "Export de passes d'occlusion et de valeurs",
        desc: "Récupérer la passe de base pour guider la structure du dessin sans avoir à tout reconstruire mentalement."
      },
      {
        title: "Le paint-over organique",
        desc: "Casser les arêtes parfaites de la 3D, appliquer des brosses à grain texturé et réintroduire des bords perdus pour préserver l'âme picturale."
      }
    ],
    exercise: {
      title: "Intérieur architectural de science-fiction",
      instructions: "30 minutes : à partir d'un blocage de couloir cubique simple, réaliser un paint-over en trois valeurs avec brosses texturées en brisant la rigidité des arêtes."
    }
  },
  {
    id: "fiche-08",
    num: "08",
    title: "Textures Traditionnelles et Brosses Numériques sur Mesure",
    domain: "Médiums Mixtes & Émulation Matière",
    level: "Débutant à Confirmé",
    duration: "20 min",
    image: "assets/planche_pedagogique_textures_brosses.jpg",
    summary: "Donner du corps et de la vibration au digital painting. Émuler le grain du papier torchon, les frottis de fusain, les granulations d'aquarelle et les empâtements de peinture à l'huile grâce aux paramètres de brosses avancés.",
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
  }
];

const SESSIONS_DATA = [
  {
    id: "session-sargent",
    title: "John Singer Sargent : Portrait Alla Prima & 4 Bords",
    category: "Maîtres du Portrait",
    duration: 20,
    image: "assets/session_sargent_croquis.jpg",
    director: "John Singer Sargent",
    tips: "Notan binaire en 2 valeurs, fusion des ombres dans le fond, plans fermes sur la pommette et rehauts tranchants."
  },
  {
    id: "session-dune",
    title: "Dune 1 & 2 : Monumentalité et Cadrage Cinéma",
    category: "Cinéma & Narration",
    duration: 10,
    image: "assets/session_dune_cinema.jpg",
    director: "Denis Villeneuve",
    tips: "Focus sur la petitesse des silhouettes face au gigantisme des vaisseaux et les contrastes de valeurs chaudes."
  },
  {
    id: "session-mucha",
    title: "Alfons Mucha : Ornementation Art Nouveau",
    category: "Maîtres Classiques",
    duration: 20,
    image: "assets/session_mucha_art.jpg",
    director: "Alfons Mucha",
    tips: "Travailler la souplesse du cerne, les arabesques végétales et l'encadrement en arche décorative."
  },
  {
    id: "session-ghibli",
    title: "Studios Ghibli : Stylisation Organique et Douceur",
    category: "Animation Japonaise",
    duration: 15,
    image: "assets/session_ghibli_aquarelle.jpg",
    director: "Hayao Miyazaki",
    tips: "Lignes souples, volumes ronds, pelages simplifiés en aplats et yeux noirs brillants avec touche blanche."
  },
  {
    id: "session-vangogh",
    title: "Vincent Van Gogh : Matière Vibrante et Ciel Nocturne",
    category: "Peinture Post-Impressionniste",
    duration: 15,
    image: "assets/session_vangogh_matiere.jpg",
    director: "Vincent Van Gogh",
    tips: "Hachures courbes directionnelles, contrastes jaune et bleu cobalt et empâtements marqués."
  },
  {
    id: "session-arcane",
    title: "Arcane & Fortiche : Stylisation Graphique et Bords Tranchants",
    category: "Animation & Concept Art",
    duration: 20,
    image: "assets/session_arcane_fortiche.jpg",
    director: "Fortiche Production",
    tips: "Sculpter les volumes au pinceau sec, poser des traits de hachures graphiques et contraster les teintes néon contre des neutres sombres."
  },
  {
    id: "session-thefall",
    title: "The Fall : Symétrie Onirique et Couleurs Baroques",
    category: "Cinéma & Composition",
    duration: 10,
    image: "assets/session_thefall_paysage.jpg",
    director: "Tarsem Singh",
    tips: "Centrer rigoureusement le sujet, simplifier le décor en motifs architecturaux purs et saturer les lumières dorées."
  },
  {
    id: "session-bladerunner",
    title: "Blade Runner 2049 : Brumes Volumétriques et Silhouettes Néon",
    category: "Science-Fiction & Atmosphère",
    duration: 15,
    image: "assets/session_bladerunner_lineart.jpg",
    director: "Denis Villeneuve & Roger Deakins",
    tips: "Travailler les valeurs dégradées de la perspective atmosphérique et découper des silhouettes sombres sur fond orangé incandescent."
  },
  {
    id: "session-timburton",
    title: "Tim Burton : Expressionnisme Gothique et Silhouettes Effilées",
    category: "Stylisation & Expressionnisme",
    duration: 15,
    image: "assets/session_burton_encre.jpg",
    director: "Tim Burton",
    tips: "Allonger démesurément les membres, accentuer les yeux cernés et créer un contraste fort noir et blanc à rayures graphiques."
  },
  {
    id: "session-figure",
    title: "Académie de Dessin : Modèle Vivant et Pose Dynamique",
    category: "Anatomie Vivante",
    duration: 20,
    image: "assets/session_modele_morpho.jpg",
    director: "Atelier Académique Classique",
    tips: "Trouver immédiatement la ligne d'action en 15 secondes, caler la boîte du torse et du bassin en opposition de contrapposto."
  },
  {
    id: "session-Chrono-Croisée",
    title: "Grand Défi Morphologie : Étude de Mains en Poses Variées",
    category: "Défi Thématique d'Atelier",
    duration: 15,
    image: "assets/session_defi_mains.jpg",
    director: "Cyril & La Croisée des Arts",
    tips: "Analyser la paume comme un bloc trapézoïdal, vérifier les arcs des phalanges et poser les ombres portées."
  }
];

const STUDENT_GALLERY = [
  {
    author: "Léa Moreau",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop&q=80",
    title: "Harmonie Florale & Pigments Coquelicots",
    date: "Il y a 2 jours",
    critique: "9.5/10",
    image: "assets/galerie_aquarelle_coquelicots.jpg",
    evaluation: { silhouette: 9.5, structure: 9.5, valeurs: 9, bords: 9.5, couleur: 10 }
  },
  {
    author: "Paul Dubois",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&auto=format&fit=crop&q=80",
    title: "Étude Équine en Mouvement",
    date: "Hier",
    critique: "9.2/10",
    image: "assets/galerie_aquarelle_cheval.jpg",
    evaluation: { silhouette: 9.5, structure: 9, valeurs: 9, bords: 9, couleur: 9.5 }
  },
  {
    author: "Bérangère F.",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&auto=format&fit=crop&q=80",
    title: "Floraison Sakura & Lavis",
    date: "Aujourd'hui",
    critique: "9.6/10",
    image: "assets/galerie_aquarelle_sakura.jpg",
    evaluation: { silhouette: 9.5, structure: 9.5, valeurs: 9.5, bords: 9.5, couleur: 10 }
  },
  {
    author: "Tim Moreau",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&auto=format&fit=crop&q=80",
    title: "Regard Félin & Contraste Émeraude",
    date: "Aujourd'hui",
    critique: "9.3/10",
    image: "assets/galerie_aquarelle_felin.jpg",
    evaluation: { silhouette: 9, structure: 9.5, valeurs: 9.5, bords: 9, couleur: 9.5 }
  },
  {
    author: "Camille R.",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&auto=format&fit=crop&q=80",
    title: "Oies Sauvages en Vol & Perspective Céleste",
    date: "Il y a 3 heures",
    critique: "9.4/10",
    image: "assets/galerie_aquarelle_faune.jpg",
    evaluation: { silhouette: 9.5, structure: 9.5, valeurs: 9, bords: 9.5, couleur: 9.5 }
  },
  {
    author: "Maxime V.",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&auto=format&fit=crop&q=80",
    title: "Analyse Morphologique & Volumes Synthétiques",
    date: "Il y a 1 heure",
    critique: "9.1/10",
    image: "assets/galerie_anatomie_morphologie.jpg",
    evaluation: { silhouette: 9.5, structure: 9.5, valeurs: 9, bords: 8.5, couleur: 9 }
  }
];
