// =====================================================================
// COURS DESSIN PARTIE 1 : PORTRAIT, BORDS, GAMUT, SHAPE LANGUAGE
// =====================================================================
const COURSES_DESSIN_P1 = [
  {
    id: "masterclass-sargent",
    num: "MC-01",
    discipline: "dessin",
    title: "Masterclass John Singer Sargent : Portrait Alla Prima en 4 Bords",
    domain: "Portrait & Anatomie",
    level: "Avancé",
    duration: "45 min",
    image: "assets/portrait_classique_masterclass.jpg",
    summary: "Étude magistrale du volume facial par la décomposition binaire de la lumière (Notan), la modulation des 4 bords (tranchant, ferme, doux, perdu) et les rehauts directionnels.",
    artist: {
      name: "John Singer Sargent (1856 - 1925)",
      quote: "Un portrait est une peinture avec un petit quelque chose qui ne va pas au niveau de la bouche.",
      bio: "Maître américain de l'Alla Prima et du portrait classique. Son approche de la simplification des masses et de l'économie de touche est le socle de l'enseignement académique de La Croisée des Arts."
    },
    theory: [
      { title: "1. Notan Binaire & Valeurs", desc: "Séparation stricte en deux familles : lumière et ombre. La valeur la plus claire dans l'ombre reste plus sombre que la plus sombre dans la lumière." },
      { title: "2. Les 4 Types de Bords Plastiques", desc: "Tranchant (arête osseuse), ferme (muscle saillant), doux (courbure de la joue) et perdu (fusion complète dans l'arrière-plan)." },
      { title: "3. La Ligne de Terminateur", desc: "Frontière exacte où la forme tourne hors de portée de la lumière directe. Clé absolue de la tridimensionnalité et du volume organique." },
      { title: "4. Rehauts Expressifs & Touche Économe", desc: "Rehauts d'opacité 100 % réservés uniquement au point focal primaire (arête nasale, cornée, pommette)." }
    ],
    exercise: {
      title: "Étude Alla Prima d'après Buste Classique (Chrono 20 min)",
      instructions: "Sur feuille ou support numérique, commencez par une silhouette Notan binaire. Posez le terminateur puis modulez les 4 bords sans jamais surcharger vos ombres."
    },
    correction: {
      student_errors: [
        { label: "Bords uniformément mous", detail: "Usage abusif de l'aérographe provoquant un aspect pâteux sans structure osseuse." },
        { label: "Reflets trop clairs dans l'ombre", detail: "Les ombres portées intègrent du blanc cassé détruisant le contraste Notan." },
        { label: "Détails prématurés", detail: "Tracé minutieux des cils avant d'avoir posé l'axe orbitaire et la masse du crâne." }
      ],
      remediations: [
        { label: "Règle du pinceau plat dur", detail: "Travailler 80 % du temps avec un bord dur avant d'adoucir sélectivement." },
        { label: "Assombrissement des rebonds", detail: "Vérifier que toute valeur de l'ombre reste inférieure à 40 % de luminosité." },
        { label: "Du général au particulier", detail: "Interdiction de zoomer avant la 15e minute d'exécution." }
      ],
      grades: { silhouette: 9.5, structure: 9, valeurs: 8.5, bords: 9.5, couleur: 9 }
    }
  },
  {
    id: "fiche-01",
    num: "01",
    discipline: "dessin",
    title: "Le Contrôle des Bords : Tranchant, Ferme, Doux et Perdu",
    domain: "Valeurs & Perspective Atmosphérique",
    level: "Tous Niveaux",
    duration: "15 min",
    image: "assets/planche_pedagogique_bords_peinture.jpg",
    summary: "Différencier et orchestrer les 4 types de transitions (Sharp, Firm, Soft, Lost) pour guider le regard du spectateur sans saturer inutilement la toile de détails.",
    artist: {
      name: "Richard Schmid (1934 - 2021)",
      quote: "Vos bords déterminent la vitesse à laquelle l'œil du spectateur voyage à travers votre tableau.",
      bio: "Auteur de Alla Prima II. Ses recherches sur la gestion consciente des transitions de contour ont révolutionné l'enseignement de l'art figuratif moderne."
    },
    theory: [
      { title: "1. Bords Tranchants (Sharp Edges)", desc: "Réservés au point focal primaire. Ils arrêtent immédiatement l'œil et accentuent l'illusion de proximité." },
      { title: "2. Bords Fermes (Firm Edges)", desc: "Indiquent une rupture de plan nette sans arête tranchante, caractéristiques des muscles sous tension." },
      { title: "3. Bords Doux (Soft Edges)", desc: "Accompagnent les volumes sphériques et cylindriques dont la surface tourne progressivement." },
      { title: "4. Bords Perdus (Lost Edges)", desc: "Fusion complète entre sujet et fond, laissant le cerveau de l'observateur compléter intuitivement la forme." }
    ],
    exercise: {
      title: "Exercice des 4 Sphères Dégradées (Chrono 10 min)",
      instructions: "Sur votre feuille de dessin, réalisez 4 sphères identiques éclairées latéralement. Assignez à chacune un bord dominant unique et observez l'impact visuel."
    },
    correction: {
      student_errors: [
        { label: "Découpage au scalpel", detail: "Tous les contours extérieurs sont découpés avec une netteté égale créant un effet découpage papier." },
        { label: "Flou généralisé", detail: "Absence totale de point d'ancrage visuel net pour reposer l'œil." }
      ],
      remediations: [
        { label: "Hiérarchie focale", detail: "Limiter les bords tranchants à moins de 15 % de la surface totale de l'œuvre." },
        { label: "Fusion ombre-fond", detail: "Faire disparaître au moins un tiers du contour ombré dans la pénombre ambiante." }
      ],
      grades: { silhouette: 8.5, structure: 9, valeurs: 9, bords: 9.5, couleur: 8 }
    }
  },
  {
    id: "fiche-02",
    num: "02",
    discipline: "dessin",
    title: "Harmonie Chromatique & Gamut Masking",
    domain: "Théorie de la Couleur",
    level: "Intermédiaire",
    duration: "20 min",
    image: "assets/planche_pedagogique_gamut_masking.jpg",
    summary: "Méthode James Gurney : restreindre le cercle chromatique à l'intérieur d'un masque géométrique pour obtenir des harmonies cinématiques unifiées.",
    artist: {
      name: "James Gurney (1958 - présent)",
      quote: "Une palette limitée produit des couleurs qui chantent en chœur plutôt que de hurler chacune de leur côté.",
      bio: "Illustrateur culte de Dinotopia et auteur de Color and Light. Son concept de Gamut Masking est adopté dans les plus grands studios mondiaux d'animation."
    },
    theory: [
      { title: "1. Le Masque Géométrique", desc: "Découpage d'un polygone sur la roue chromatique (triangle, losange) excluant les teintes hors sujet." },
      { title: "2. Saturation Relative", desc: "Dans un gamut réduit, un gris neutre légèrement teinté est perçu comme une couleur éclatante." },
      { title: "3. Réciprocité Chaud / Froid", desc: "Une source lumineuse chaude exige des ombres proportionnellement froides pour maintenir l'équilibre chromatique." },
      { title: "4. Unité d'Ambiance", desc: "Toutes les teintes partagent une dominante commune simulant une atmosphère atmosphérique crédible." }
    ],
    exercise: {
      title: "Paysage sous Éclairage Crépusculaire Triadique (Chrono 15 min)",
      instructions: "Définissez un triangle étroit entre ambre chaud, turquoise sourd et pourpre désaturé. Peignez votre paysage sans aucune couleur extérieure."
    },
    correction: {
      student_errors: [
        { label: "Évasion chromatique", detail: "Introduction de vert pomme saturé brisant l'harmonie crépusculaire." },
        { label: "Manque d'accentuation", detail: "Grisaille monotone sans pointe de couleur d'accroche." }
      ],
      remediations: [
        { label: "Verrouillage strict", detail: "Préparer ses mélanges exclusivement à l'intérieur du masque avant d'appliquer." },
        { label: "Utilisation du blanc teinté", detail: "Ne jamais éclaircir avec du blanc pur non réchauffé." }
      ],
      grades: { silhouette: 9, structure: 8.5, valeurs: 9, bords: 8.5, couleur: 9.5 }
    }
  },
  {
    id: "fiche-03",
    num: "03",
    discipline: "dessin",
    title: "Shape Language & Silhouette Dynamique",
    domain: "Concept Art & Narration Visuelle",
    level: "Fondamental",
    duration: "15 min",
    image: "assets/planche_pedagogique_shape_language.jpg",
    summary: "Exploiter la psychologie des formes primaires (Cercle = bienveillance, Carré = force et stabilité, Triangle = danger et vitesse) pour concevoir des designs instantanément lisibles.",
    artist: {
      name: "Eyvind Earle (1916 - 2000)",
      quote: "Une silhouette forte et lisible porte 90 % de l'émotion d'une scène avant même le premier coup de pinceau.",
      bio: "Directeur artistique légendaire de La Belle au Bois Dormant (Disney). Son sens des formes tranchées et des aplats graphiques demeure une référence mondiale."
    },
    theory: [
      { title: "1. La Silhouette 1-Bit", desc: "Le personnage ou l'objet doit être identifiable instantanément en noir pur sur fond blanc." },
      { title: "2. Les Trois Archétypes", desc: "Cercle pour l'innocence et la rondeur, rectangle pour la robustesse et l'inertie, triangle pour la vivacité et la menace." },
      { title: "3. La Rythmique Grand / Moyen / Petit", desc: "Ne jamais juxtaposer des masses égales. Varier l'échelle des formes pour créer une dynamique naturelle." },
      { title: "4. L'Espace Négatif", desc: "Soigner les ouvertures d'air entre les membres pour que le geste ne se confonde pas en bloc informe." }
    ],
    exercise: {
      title: "Création de 3 Silhouettes Caractérisées (Chrono 10 min)",
      instructions: "Sur une feuille blanche, esquissez 3 silhouettes distinctes au feutre noir en vous basant respectivement sur le cercle, le carré et le triangle."
    },
    correction: {
      student_errors: [
        { label: "Silhouette bouchée", detail: "Bras collés au torse rendant l'attitude impossible à interpréter en ombre chinoise." },
        { label: "Formes molles indécises", detail: "Contours sans tension géométrique claire." }
      ],
      remediations: [
        { label: "Aération de la pose", detail: "Dégager les membres et les accessoires vers l'extérieur." },
        { label: "Affirmation des angles", detail: "Trancher des droites nettes opposées à des courbes tendues (C-curve vs Straight)." }
      ],
      grades: { silhouette: 9.5, structure: 9, valeurs: 8.5, bords: 9, couleur: 8.5 }
    }
  }
];
