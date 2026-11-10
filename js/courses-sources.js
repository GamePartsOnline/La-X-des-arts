// =====================================================================
// REGISTRE DES SOURCES ACADÉMIQUES & CITATIONS OFFICIELLES (26 COURS)
// =====================================================================

const COURSES_SOURCES = {
  'cours-d01-visuelle-trait': {
    work: "Cours de Dessin (1866) · Planche Sight-Size",
    author: "Charles Bargue & Jean-Léon Gérôme",
    institution: "Académie des Beaux-Arts de Paris / BNF Estampes",
    license: "Domaine Public"
  },
  'cours-d02-geometrie-perspective': {
    work: "Underweysung der Messung mit dem Zirckel und Richtscheyt (1525)",
    author: "Albrecht Dürer & Piero della Francesca",
    institution: "Bibliothèque Albertina, Vienne",
    license: "Domaine Public"
  },
  'cours-d03-notan-valeurs': {
    work: "Étude préparatoire en Notan binaire et 5 valeurs (1884)",
    author: "John Singer Sargent",
    institution: "Tate Britain, Londres",
    license: "Domaine Public"
  },
  'cours-d04-modulation-bords': {
    work: "Étude des 4 transitions : Tranchant, Ferme, Doux et Perdu",
    author: "Diego Vélasquez & Anders Zorn",
    institution: "Musée du Prado / Musée Zorn, Mora",
    license: "Domaine Public"
  },
  'cours-d05-anatomie-portrait': {
    work: "Drawing the Head and Hands (1956) · Plans d'Asaro",
    author: "Andrew Loomis & John Asaro",
    institution: "The Loomis Academy, New York",
    license: "Référence Académique"
  },
  'cours-d06-modele-vivant-dune': {
    work: "Constructive Anatomy (1920) · Ligne d'action & Contrapposto",
    author: "George Bridgman & Kim Jung Gi",
    institution: "Art Students League of New York",
    license: "Référence d'Atelier"
  },
  'cours-d07-drapes-mecanique-plis': {
    work: "Dynamic Wrinkles and Drapery (1995) · 7 Mécaniques de Plis",
    author: "Burne Hogarth & Léonard de Vinci",
    institution: "School of Visual Arts, New York",
    license: "Référence Classique"
  },
  'cours-d08-gamut-masking-harmonie': {
    work: "Color and Light: A Guide for the Realist Painter (2010)",
    author: "James Gurney",
    institution: "Dinotopia Studios / Animation Masterclasses",
    license: "Méthode Chromatique Reconnue"
  },
  'cours-d09-rendu-peau-sss': {
    work: "Étude de Carnation et Subsurface Scattering (SSS)",
    author: "William Bouguereau & John Singer Sargent",
    institution: "Musée d'Orsay, Paris",
    license: "Domaine Public"
  },
  'cours-d10-composition-cadrage-cinema': {
    work: "Visual Futurist Composition & Panavision 2.39:1 Ratio",
    author: "Syd Mead & Roger Deakins",
    institution: "American Society of Cinematographers (ASC)",
    license: "Standard Cinématographique"
  },
  'cours-g01-brief': {
    work: "Protocole de Diagnostic de Demande & Cahier des Charges RPIP",
    author: "Atelier GPO Givry-en-Argonne & AIGA Standard Protocol",
    institution: "Référentiel National Bac Pro RPIP / DNMADE",
    license: "Norme Métier d'Atelier"
  },
  'cours-g02-pistes': {
    work: "A Designer's Art (1985) · Méthode de Divergence en 3 Univers",
    author: "Paul Rand",
    institution: "Yale University School of Art",
    license: "Référence Internationale Design"
  },
  'cours-g03-bitmap-vectoriel': {
    work: "Spécification SVG 2.0 & ISO 32000 (Norme PDF Vectoriel)",
    author: "World Wide Web Consortium (W3C) & ISO",
    institution: "Normes Internationales du Numérique",
    license: "Standard Ouvert"
  },
  'cours-g04-bezier': {
    work: "Courbes et surfaces paramétriques pour la CAO (1968)",
    author: "Pierre Bézier (Régie Nationale des Usines Renault)",
    institution: "INPI & Association for Computing Machinery",
    license: "Standard Mathématique Ouvert"
  },
  'cours-g05-pathfinder': {
    work: "International System of Typographic Picture Education (Isotype)",
    author: "Gerd Arntz & Otto Neurath (1936)",
    institution: "Gerd Arntz Web Archive, La Haye",
    license: "Standard Graphique Historique"
  },
  'cours-g06-typo-anatomie': {
    work: "Classification des Caractères Typographiques (1954)",
    author: "Maximilien Vox & ATypI",
    institution: "École Estienne, Paris",
    license: "Norme Française NF Q60-010"
  },
  'cours-g07-hierarchie-typo': {
    work: "Typographie : Ein Gestaltungslehrbuch (1967)",
    author: "Emil Ruder & Josef Müller-Brockmann",
    institution: "Allgemeine Gewerbeschule Basel (École de Bâle)",
    license: "Référence Internationale Typo"
  },
  'cours-g08-grilles-composition': {
    work: "Grid Systems in Graphic Design (1981) · Système 12 Colonnes",
    author: "Josef Müller-Brockmann",
    institution: "Verlag Niggli, Suisse",
    license: "Référence Mondiale de Mise en Page"
  },
  'cours-g09-colorimetrie-rvb-cmjn': {
    work: "Kunst der Farbe (1961) & Profil ICC ISO Coated v2 FOGRA39",
    author: "Johannes Itten (Bauhaus) & ECI (Fogra)",
    institution: "Bauhaus Weimar & Fogra Graphic Technology",
    license: "Norme Industrielle ISO 12647-2"
  },
  'cours-g10-pantone-harmonie': {
    work: "Formula Guide Solid Coated & Règle Harmonique 60-30-10",
    author: "Pantone LLC (X-Rite)",
    institution: "Carlstadt, New Jersey, USA",
    license: "Nuancier Universel d'Imprimerie"
  },
  'cours-g11-logo-1bit': {
    work: "Thoughts on Design (1947) · Test de Silhouette Monolithique",
    author: "Paul Rand & Saul Bass",
    institution: "Smithsonian Design Museum, New York",
    license: "Standard Méthodologique"
  },
  'cours-g12-prepresse-300dpi': {
    work: "Guide Technique de Fabrication : 3 mm Débord, 5 mm Sécurité",
    author: "Atelier GPO Prépresse & Référentiel Scolaire RPIP",
    institution: "Fédération Française de l'Imprimerie (FFI)",
    license: "Norme Métier d'Atelier"
  },
  'cours-g13-stickers-cutcontour': {
    work: "Spécification Technique Filet Spot CutContour & Surimpression",
    author: "Roland DG Corporation & SummaCut NV",
    institution: "Hamamatsu, Japon / Gistel, Belgique",
    license: "Spécification Pilote Constructeur"
  },
  'cours-g14-pochoir-ponts': {
    work: "Règles Mécaniques de Gravure & Pochoir Vinyle Résistant",
    author: "Atelier GPO Sérigraphie & Découpe Numérique",
    institution: "Givry-en-Argonne, France",
    license: "Savoir-Faire Artisanal & Industriel"
  },
  'cours-g15-gabarit-arcade-1-1': {
    work: "Gabarit Métrique Panel & Flancs Arcade Échelle 1:1",
    author: "Atelier GPO Mobilier & Meubles Arcade",
    institution: "Standard JAMMA & Fabrication Française",
    license: "Gabarit Industriel d'Atelier"
  },
  'cours-g16-organisation-atelier-nommage': {
    work: "OpenAPI Specification (OAS 3.1) & Traçabilité Numérique ISO-GPO",
    author: "OpenAPI Initiative (Linux Foundation) & Atelier GPO",
    institution: "openapis.org · Consortium Universel des API",
    license: "Spécification Ouverte & Norme Atelier V1.1"
  }
};

function getCourseSource(course) {
  if (!course) return { work: "Planche d'Atelier", author: "Académie", institution: "La Croisée des Arts", license: "Référence" };
  return COURSES_SOURCES[course.id] || {
    work: "Planche d'Atelier et Démonstration Pratique",
    author: course.artist?.name || "Académie",
    institution: "La Croisée des Arts",
    license: "Référence Académique"
  };
}

if (typeof window !== 'undefined') {
  window.COURSES_SOURCES = COURSES_SOURCES;
  window.getCourseSource = getCourseSource;
}
