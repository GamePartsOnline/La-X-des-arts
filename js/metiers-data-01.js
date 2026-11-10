// =====================================================================
// RÉFÉRENTIEL DES MÉTIERS (PARTIE 1/2 : N°01 À N°12)
// PÔLES : DESSIN D'ART, ILLUSTRATION, BD, CONCEPT ART, ANIMATION & MÉTIERS D'ART
// SANS IMAGES FICTIVES · LIENS OFFICIELS CLIQUABLES POUR CHAQUE ÉTABLISSEMENT
// =====================================================================

const METIERS_DATA_01 = [
  {
    id: "metier-01-illustrateur-editorial", num: "01", pole: "dessin", codeRome: "E1102 / B1101",
    diplome: "DN MADE Mention Illustration / Diplôme Dessinateur Praticien / DSAA",
    normes: "ISO 12647-2 (FOGRA39/51), CMJN 300 DPI, fonds perdus 3 mm, contrat d'édition CPI",
    titre: "Illustrateur Éditorial, Jeunesse & Presse",
    accroche: "Traduire un manuscrit, un article de presse ou un ouvrage documentaire en planches dessinées par l'observation, l'encrage et la couleur.",
    ecoles: [
      { nom: "École Estienne (ESAIG Paris)", url: "https://www.ecole-estienne.paris/", detail: "DN MADE Mention Illustration & Gravure" },
      { nom: "École Émile Cohl (Lyon & Angoulême)", url: "https://www.cohl.fr/", detail: "Cursus Dessinateur Praticien & Spécialisation Édition" },
      { nom: "École de Condé", url: "https://ecoles-conde.com/lecole-de-conde/", detail: "Bachelor Illustration & Bande Dessinée" },
      { nom: "HEAR Strasbourg", url: "https://www.hear.fr/", detail: "Atelier Didactique Visuelle & Illustration" },
      { nom: "École La Fontaine", url: "https://www.ecolelafontaine.fr/", detail: "Cursus Illustration & Arts Appliqués à distance" }
    ],
    missions: ["Analyser le texte ou l'article et produire plusieurs crayonnés d'intention (roughs, silhouettes, Notan).", "Construire l'image avec justesse de perspective, d'anatomie et de hiérarchie des valeurs.", "Exécuter les planches finales sur papier (aquarelle, gouache, encre, fusain) ou en peinture numérique.", "Calibrer les fichiers finaux en 300 DPI CMJN (profil FOGRA39 ou PSO Coated v3) pour l'imprimeur."],
    competences: ["Visée comparative Sight-Size et justesse des proportions", "Séparation ombre/lumière (Notan 5 valeurs) et contrôle des 4 bords", "Maîtrise des médiums secs et humides sur papier 300g", "Gamut Masking et cohérence thermique des couleurs"],
    outils: ["Papier Arches / Canson 300g, crayons 2H à 6B, encres, aquarelle extra-fine", "Scanner A3 calibré, tablette graphique, profils ICC d'impression"],
    attendusStagiaire: "Observer le réel sans décalquer, dessiner par le mouvement de l'épaule et structurer les valeurs avant tout détail.",
    debouches: "Maisons d'édition jeunesse et adulte, presse quotidienne et magazine, affiches culturelles, muséographie.",
    coursLies: ["D-01", "D-03", "D-04", "D-07", "D-08"]
  },
  {
    id: "metier-02-character-designer", num: "02", pole: "dessin", codeRome: "E1205",
    diplome: "Diplôme Concept Art / DN MADE Animation / Titre RNCP Niveau 6-7",
    normes: "Planches Turnaround orthographiques, nomenclature calques PSD/ORA, ratio sRGB / Display P3",
    titre: "Character Designer (Créateur de Personnages)",
    accroche: "Concevoir l'anatomie, la silhouette, les costumes et les expressions des personnages pour l'animation, le jeu vidéo et l'édition.",
    ecoles: [
      { nom: "GOBELINS Paris", url: "https://www.gobelins.fr/", detail: "Bachelor & Master Character Design et Cinéma d'Animation" },
      { nom: "Digital Painting School", url: "https://digitalpainting.school/", detail: "Programme Indispensable (Anatomie, Design & Rendu)" },
      { nom: "21 Draw", url: "https://www.21-draw.com/", detail: "Cursus Character Design par des artistes Disney, Pixar & Marvel" },
      { nom: "New3dge Concept Art", url: "https://www.new3dge.com/", detail: "Cursus Concept Art & Character Design" },
      { nom: "École Émile Cohl", url: "https://www.cohl.fr/", detail: "Formation Dessin Morphologique & Personnages" }
    ],
    missions: ["Rechercher des silhouettes immédiatement reconnaissables en aplat noir (Shape Language : carré, cercle, triangle).", "Dessiner les planches de rotation (Turnarounds : face, trois-quarts, profil, dos) pour les modéliseurs 3D.", "Créer les planches d'expressions faciales (Model Sheets) et d'attitudes dynamiques (Posing).", "Définir les matières des costumes (drapés, cuirs, métaux) et la diffusion sous-cutanée de la peau (SSS)."],
    competences: ["Anatomie artistique, construction crânienne Loomis et plans d'Asaro", "Ligne d'action dynamique, contrapposto et équilibre gravitaire", "Mécanique des 7 types de plis vestimentaires", "Rendu réaliste ou stylisé de la peau et des matériaux"],
    outils: ["Carnet de croquis morphologiques, Photoshop, Procreate, Krita, Clip Studio Paint", "Mannequins anatomiques et bases 3D Blender"],
    attendusStagiaire: "Comprendre que la stylisation s'appuie sur l'anatomie réelle : étudier le crâne, les mains et les plis d'après nature.",
    debouches: "Studios d'animation 2D/3D, studios de jeux vidéo, production cinématographique, édition de jeux de société.",
    coursLies: ["D-04", "D-05", "D-06", "D-07", "D-09"]
  },
  {
    id: "metier-03-environment-matte-painter", num: "03", pole: "dessin", codeRome: "E1205 / L1503",
    diplome: "Formation Concept Art & VFX / DN MADE Numérique",
    normes: "Espace colorimétrique ACEScg / sRGB linéaire, ratios cinéma 2.39:1 et 16:9, EXR 16/32 bits",
    titre: "Environment Artist & Matte Painter (Décors Cinéma / Jeu)",
    accroche: "Imaginer et peindre les architectures, les paysages et les ambiances lumineuses (Color Keys) des mondes virtuels et cinématographiques.",
    ecoles: [
      { nom: "Digital Painting School", url: "https://digitalpainting.school/", detail: "Cursus Peinture Numérique, Environnements & Blender 3D" },
      { nom: "Artline (École en ligne)", url: "https://artline.education/", detail: "Bachelor Concept Art & Matte Painting" },
      { nom: "New3dge", url: "https://www.new3dge.com/", detail: "Spécialisation Environment Concept Art & VFX" },
      { nom: "Rubika", url: "https://rubika-edu.com/", detail: "Cursus Supinfogame & Supinfocom Environnements" },
      { nom: "ESMA", url: "https://www.esma-artistique.com/", detail: "Cycle Pro Cinéma d'Animation 3D & Effets Spéciaux" }
    ],
    missions: ["Construire des perspectives rigoureuses à 1, 2 ou 3 points de fuite avec repères d'échelle humaine.", "Peindre des vignettes de recherche en valeurs (Notan) puis des Color Scripts définissant la dramaturgie lumineuse.", "Combiner peinture numérique, bases 3D et textures photographiques haute définition (Matte Painting).", "Guider le regard vers le point focal par le contraste des valeurs et la perspective atmosphérique."],
    competences: ["Perspective linéaire spatiale et étagement en 3 plans (avant-plan, plan moyen, arrière-plan)", "Composition cinématographique (règle des tiers, lignes de force, ratio 2.39:1)", "Gamut Masking et température de la lumière naturelle", "Modulation des 4 bords pour créer la profondeur atmosphérique"],
    outils: ["Photoshop, Krita, Blender 3D, Nuke, grilles perspectives", "Tablette graphique calibrée sRGB / Adobe RGB"],
    attendusStagiaire: "Toujours valider sa composition en miniature noir et blanc (5 cm) avant de peindre le moindre détail.",
    debouches: "Studios d'effets spéciaux (VFX), studios de jeux vidéo, animation, illustration de couverture.",
    coursLies: ["D-02", "D-03", "D-08", "D-10"]
  },
  {
    id: "metier-04-storyboarder-layout", num: "04", pole: "dessin", codeRome: "L1304 / E1205",
    diplome: "Diplôme Gobelins / EMCA / La Poudrière / DN MADE Animation",
    normes: "Cadres normalisés 16:9 / 2.39:1, règle des 180°, codification internationale des mouvements de caméra",
    titre: "Storyboarder & Layout Artist 2D / 3D",
    accroche: "Traduire le scénario écrit en séquences visuelles découpées plan par plan : cadrage, échelle des plans, jeu d'acteur et raccords.",
    ecoles: [
      { nom: "GOBELINS Paris", url: "https://www.gobelins.fr/", detail: "Pré-production, Storyboard & Réalisation Animation" },
      { nom: "EMCA Angoulême", url: "https://www.angouleme-emca.fr/", detail: "École des Métiers du Cinéma d'Animation" },
      { nom: "La Poudrière (Valence)", url: "https://www.poudriere.eu/", detail: "École du Film d'Animation & Mise en Scène" },
      { nom: "École Émile Cohl", url: "https://www.cohl.fr/", detail: "Spécialisation Storyboard & Layout" },
      { nom: "21 Draw", url: "https://www.21-draw.com/", detail: "Masterclasses Storyboarding & Visual Storytelling" }
    ],
    missions: ["Découper le script en plans séquentiels en choisissant la focale et l'angle de prise de vue (plongée, contre-plongée, niveau d'œil).", "Esquisser rapidement les poses expressives des personnages et la mise en place du décor (Layout).", "Indiquer les mouvements de caméra (panoramique, travelling, zoom) et préparer l'animatique chronométrée.", "Assurer la continuité visuelle (raccords de regard, de mouvement et de direction) d'un plan à l'autre."],
    competences: ["Croquis gestuel rapide (30 secondes à 2 minutes par vignette)", "Grammaire cinématographique et lisibilité immédiate de l'action", "Perspective à main levée dans l'espace", "Sens du rythme, du montage et de la mise en scène"],
    outils: ["Toon Boom Storyboard Pro, Blender Grease Pencil 3.0, Photoshop", "Gabarits de vignettes 16:9 et chronomètre d'atelier"],
    attendusStagiaire: "Travailler la spontanéité du trait lors des exercices chronométrés pour exprimer une action sans raideur.",
    debouches: "Cinéma d'animation, longs-métrages en prise de vue réelle, publicité, cinématiques de jeux vidéo.",
    coursLies: ["D-01", "D-02", "D-06", "D-10"]
  },
  {
    id: "metier-05-auteur-bd-manga", num: "05", pole: "dessin", codeRome: "E1102",
    diplome: "DN MADE Bande Dessinée / Master ÉESI Angoulême / CESAN",
    normes: "Planches 300 à 600 DPI (trait noir 1200 DPI Bitmap + couleur CMJN FOGRA39), fonds perdus 5 mm",
    titre: "Auteur de Bande Dessinée, Manga & Roman Graphique",
    accroche: "Concevoir et dessiner un récit séquentiel complet : synopsis, découpage (storyboard), crayonné, encrage, lettrage et mise en couleur.",
    ecoles: [
      { nom: "ÉESI Angoulême", url: "https://www.eesi.eu/", detail: "École Européenne Supérieure de l'Image (Pôle BD)" },
      { nom: "École Émile Cohl", url: "https://www.cohl.fr/", detail: "Filière Bande Dessinée & Illustration" },
      { nom: "CESAN Paris", url: "https://www.cesan.fr/", detail: "École Spécialisée Bande Dessinée & Illustration" },
      { nom: "École de Condé", url: "https://ecoles-conde.com/lecole-de-conde/", detail: "Bachelor Illustration & Bande Dessinée" },
      { nom: "Brassart", url: "https://www.brassart.fr/", detail: "Filière Illustration, BD & Concept Art" }
    ],
    missions: ["Établir le chemin de fer de l'ouvrage et composer le gaufrier de chaque planche en ménageant la place des bulles.", "Dessiner les crayonnés en maintenant la ressemblance des personnages et la cohérence des décors sous tous les angles.", "Réaliser l'encrage traditionnel (plume, pinceau, encre de Chine) ou numérique avec gestion des pleins et déliés.", "Effectuer la mise en couleur et livrer les fichiers séparés (trait noir 100% K + quadrichromie) à l'imprimeur."],
    competences: ["Narration séquentielle, gestion des ellipses et du sens de lecture", "Encrage franc sans traits hésitants et contraste Notan noir/blanc", "Perspective architecturale et anatomie en mouvement", "Préparation technique des planches pour l'édition imprimée ou le Webtoon"],
    outils: ["Papier Bristol 250g, plumes G-Pen, pinceaux martre, encre de Chine", "Clip Studio Paint EX, Photoshop, InDesign"],
    attendusStagiaire: "Comprendre qu'une case de BD doit guider l'œil d'une bulle à l'autre tout en racontant l'action par la posture des personnages.",
    debouches: "Édition BD franco-belge, roman graphique, manga, comics, presse illustrée, plateformes Webtoon.",
    coursLies: ["D-01", "D-02", "D-03", "D-05", "G-12"]
  },
  {
    id: "metier-06-animateur-2d-tradigital", num: "06", pole: "dessin", codeRome: "E1205 / L1508",
    diplome: "Diplôme Gobelins / DN MADE Cinéma d'Animation / EMCA",
    normes: "Cadence 24 ips (1s, 2s, 3s), charte d'intervalles (Timing Charts), exposition X-Sheet",
    titre: "Animateur 2D Traditionnel & Numérique (Tradigital)",
    accroche: "Donner vie au dessin image par image en maîtrisant le poids, le rythme, les poses clés et les 12 principes de l'animation.",
    ecoles: [
      { nom: "GOBELINS Paris", url: "https://www.gobelins.fr/", detail: "Bachelor & Master Animateur de Films d'Animation" },
      { nom: "École Émile Cohl", url: "https://www.cohl.fr/", detail: "Spécialisation Cinéma d'Animation 2D" },
      { nom: "EMCA Angoulême", url: "https://www.angouleme-emca.fr/", detail: "Cursus Animateur 2D / Stop-Motion" },
      { nom: "École de Condé", url: "https://ecoles-conde.com/lecole-de-conde/", detail: "Bachelor Cinéma d'Animation" },
      { nom: "Tuto.com", url: "https://fr.tuto.com/", detail: "Formations TVPaint, Toon Boom, Procreate Dreams & Blender" }
    ],
    missions: ["Dessiner les poses clés (Keyframes) et les extrêmes qui racontent l'action et l'état émotionnel du personnage.", "Tracer les intervalles (In-betweens) en respectant les courbes d'accélération et de décélération (Spacing).", "Animer les mouvements secondaires (cheveux, capes, drapés, fumée, fluides) avec inertie et chevauchement.", "Nettoyer le trait (Clean-up) et fermer les contours pour l'étape de colorisation."],
    competences: ["Ligne d'action, Squash & Stretch (étirement/compression) et anticipation", "Constance des volumes anatomiques en rotation dans l'espace", "Mécanique des tissus et des plis en mouvement", "Maîtrise du timing à 24 images par seconde"],
    outils: ["TVPaint Animation, Toon Boom Harmony, Procreate Dreams, Blender Grease Pencil 3.0", "Table lumineuse et règles à tenons (Pegbar)"],
    attendusStagiaire: "S'exercer au croquis de modèle vivant en poses courtes pour sentir l'appui au sol et le transfert de poids.",
    debouches: "Studios de séries et longs-métrages d'animation, jeux vidéo 2D, clips musicaux, publicité.",
    coursLies: ["D-01", "D-05", "D-06", "D-07"]
  },
  {
    id: "metier-07-animateur-modeleur-3d", num: "07", pole: "dessin", codeRome: "E1205",
    diplome: "Diplôme Rubika / ESMA / Gobelins / New3dge (RNCP Niv. 7)",
    normes: "Topologie quads propre, UV Mapping UDIM, textures PBR (Albedo, Roughness, Normal), pipeline USD",
    titre: "Modeleur, Sculpteur Numérique & Animateur 3D",
    accroche: "Traduire les planches de Concept Art en volumes tridimensionnels sculptés, texturés, éclairés et animés.",
    ecoles: [
      { nom: "Rubika Supinfocom", url: "https://rubika-edu.com/", detail: "Cursus Réalisateur Numérique Animation 3D" },
      { nom: "ESMA", url: "https://www.esma-artistique.com/", detail: "Cycle Professionnel Cinéma d'Animation 3D & FX" },
      { nom: "GOBELINS Paris", url: "https://www.gobelins.fr/", detail: "Spécialisation Animation 3D & Temps Réel" },
      { nom: "New3dge", url: "https://www.new3dge.com/", detail: "Cursus Game Art, VFX & Sculpture 3D" },
      { nom: "Brassart", url: "https://www.brassart.fr/", detail: "Filière Animation 3D, VFX & Immersion" }
    ],
    missions: ["Sculpter les personnages et décors en haute définition à partir des planches anatomiques et orthographiques.", "Réaliser la retopologie, le dépliage UV et le texturing PBR (peau SSS, tissus, métaux).", "Mettre en place le squelette d'animation (Rigging) et animer le jeu d'acteur des personnages.", "Régler l'éclairage tridimensionnel (Key Light, Fill Light, Rim Light) et le rendu final."],
    competences: ["Anatomie osseuse et musculaire en trois dimensions", "Compréhension physique de la lumière, de la spécularité et du Subsurface Scattering (SSS)", "Sens des volumes primaires et des plans faciaux d'Asaro", "Animation corporelle et faciale crédible"],
    outils: ["Blender 4.x, ZBrush, Autodesk Maya, Substance 3D Painter, Unreal Engine 5", "Tablette graphique à stylet haute pression"],
    attendusStagiaire: "Comprendre qu'un bon sculpteur 3D est avant tout un bon dessinateur qui maîtrise les plans du crâne, l'écorché et les valeurs.",
    debouches: "Studios d'animation 3D, industrie du jeu vidéo, effets visuels (VFX), impression 3D de figurines et prototypes.",
    coursLies: ["D-02", "D-03", "D-05", "D-09"]
  },
  {
    id: "metier-08-illustrateur-scientifique-naturaliste", num: "08", pole: "dessin", codeRome: "B1101 / E1102",
    diplome: "DSAA Design d'Illustration Scientifique (École Estienne) / DN MADE",
    normes: "Échelle métrique rigoureuse, fidélité taxonomique et anatomique, quadrichromie haute définition 300-600 DPI",
    titre: "Illustrateur Scientifique, Médical & Naturaliste",
    accroche: "Documenter le vivant, la botanique, la faune, l'archéologie et la médecine par un dessin d'observation d'une exactitude chirurgicale.",
    ecoles: [
      { nom: "École Estienne (Paris)", url: "https://www.ecole-estienne.paris/", detail: "DSAA Design d'Illustration Scientifique (formation unique de référence)" },
      { nom: "HEAR Strasbourg", url: "https://www.hear.fr/", detail: "Didactique Visuelle & Médiation Scientifique" },
      { nom: "École Émile Cohl", url: "https://www.cohl.fr/", detail: "Dessin Documentaire, Anatomique & Naturaliste" },
      { nom: "Muséum National d'Histoire Naturelle", url: "https://www.mnhn.fr/", detail: "Ateliers de Dessin Scientifique & Botanique" }
    ],
    missions: ["Observer les spécimens (ossements, plantes, insectes, préparations anatomiques) à la loupe binoculaire ou sur le terrain.", "Prendre des mesures exactes au pied à coulisse et construire le dessin en projection orthogonale ou en perspective.", "Exécuter des planches à l'aquarelle botanique, au pointillé à l'encre de Chine, au crayon graphite ou en vectoriel.", "Collaborer avec les chercheurs, médecins, archéologues et conservateurs de musées pour valider chaque détail."],
    competences: ["Visée Sight-Size de haute précision et respect strict des échelles", "Maîtrise du glacis d'aquarelle, du rendu de texture et du pointillé", "Anatomie comparée (humaine et animale) et ostéologie", "Infographie didactique claire (écorchés, coupes techniques, légendes typographiques)"],
    outils: ["Aquarelle extra-fine sur papier satiné, plumes tubulaires 0.05 mm, crayons 2H à 4B", "Pied à coulisse, loupe binoculaire, Illustrator et Photoshop"],
    attendusStagiaire: "Cultiver la patience et l'exactitude : vérifier trois fois une proportion avant d'encrer ou de poser son lavis.",
    debouches: "Édition médicale et universitaire, muséums d'histoire naturelle, parcs nationaux, archéologie préventive (INRAP), presse scientifique.",
    coursLies: ["D-01", "D-03", "D-04", "D-05", "G-03"]
  },
  {
    id: "metier-09-artiste-peintre-portraitiste", num: "09", pole: "dessin", codeRome: "B1101",
    diplome: "DNA / DNSEP Beaux-Arts (ENSBA, Écoles Nationales et Régionales d'Art)",
    normes: "Papiers 100% coton sans acide (ISO 9706), pigments résistants à la lumière (ASTM I), certificats d'authenticité",
    titre: "Artiste Peintre, Portraitiste & Dessinateur d'Art",
    accroche: "Pratiquer le dessin et la peinture d'atelier (portrait, figure humaine, nature morte, paysage) pour les galeries, commandes et collections.",
    ecoles: [
      { nom: "Beaux-Arts de Paris (ENSBA)", url: "https://beauxartsparis.fr/", detail: "Diplôme National Supérieur d'Expression Plastique (DNSEP)" },
      { nom: "École Émile Cohl", url: "https://www.cohl.fr/", detail: "Enseignement Académique du Dessin & de la Peinture d'Observation" },
      { nom: "HEAR (Strasbourg / Mulhouse)", url: "https://www.hear.fr/", detail: "DNA & DNSEP Art" },
      { nom: "21 Draw", url: "https://www.21-draw.com/", detail: "Études Académiques du Portrait & de l'Anatomie" }
    ],
    missions: ["Travailler d'après modèle vivant ou sur le motif en appliquant la méthode académique (Bargue, Sargent).", "Préparer ses supports (châssis entoilés, papiers tendus, fonds teintés) et organiser sa palette restreinte.", "Réaliser des portraits et compositions en maîtrisant le Notan, les 4 bords et la température de la lumière.", "Présenter son travail en galerie, répondre aux commandes de portraits et transmettre son savoir en atelier."],
    competences: ["Visée Sight-Size, fil à plomb et triangulation des repères osseux", "Hiérarchie des 5 valeurs et contrôle des bords (perdus, doux, fermes, tranchants)", "Mélange optique des couleurs, Gamut Masking et rendu de la carnation", "Conservation des œuvres et maîtrise de la chimie des médiums"],
    outils: ["Fusain de saule, sanguine, pierre noire, crayons graphite, aquarelle, gouache, acrylique, huile", "Chevalet d'atelier, papier Arches 100% coton, mire de valeurs"],
    attendusStagiaire: "Comprendre la règle d'or de l'atelier : poser la bonne valeur, au bon endroit, avec le bon bord.",
    debouches: "Galeries d'art contemporain et figuratif, commandes privées et institutionnelles, salons d'art, enseignement artistique.",
    coursLies: ["D-01", "D-03", "D-04", "D-05", "D-08", "D-09"]
  },
  {
    id: "metier-10-graveur-estampiste", num: "10", pole: "dessin", codeRome: "B1302 / E1306",
    diplome: "DN MADE Mention Estampe & Gravure (École Estienne) / DMA",
    normes: "Numérotation légale des tirages d'art (ex. 1/30, Épreuve d'Artiste E.A.), papier pur chiffon ISO 9706",
    titre: "Graveur, Estampiste & Imprimeur en Taille-Douce / Linogravure",
    accroche: "Inciser le métal, le bois ou le linoléum pour imprimer sur presse à bras des estampes originales à tirage limité.",
    ecoles: [
      { nom: "École Estienne (Paris)", url: "https://www.ecole-estienne.paris/", detail: "DN MADE Gravure, Estampe & Métiers du Livre" },
      { nom: "École Boulle (Paris)", url: "https://ecole-boulle.org/", detail: "DN MADE Gravure Ornementale & Ciselerie" },
      { nom: "ENSAD Paris", url: "https://www.ensad.fr/", detail: "Atelier Gravure, Sérigraphie & Image Imprimée" },
      { nom: "HEAR Strasbourg", url: "https://www.hear.fr/", detail: "Atelier Estampe & Édition d'Art" }
    ],
    missions: ["Concevoir un dessin inversé (effet miroir de la matrice) adapté à la technique d'incision choisie.", "Graver la matrice sur cuivre/zinc (eau-forte, burin, pointe sèche, aquatinte) ou en taille d'épargne (bois, linogravure).", "Préparer les encres grasses, encrer la plaque à la poupée ou au rouleau et essuyer la tarlatane.", "Régler la pression de la presse taille-douce, imprimer sur papier humide, numéroter et signer l'édition."],
    competences: ["Traduction des valeurs par la densité des tailles, des hachures et des grains d'aquatinte", "Pensée en négatif/positif et maîtrise de la silhouette 1-Bit", "Repérage multicouleurs de haute précision sur presse manuelle", "Connaissance des papiers d'édition d'art (BFK Rives, Arches, Japon)"],
    outils: ["Burins, pointes sèches, gouges de linogravure, rouleaux encreurs, presse taille-douce", "Cuivre, linoléum, encres taille-douce et papiers pur coton"],
    attendusStagiaire: "Découvrir comment le dessin au trait et la synthèse noir et blanc (1-Bit) permettent de créer une matrice imprimable.",
    debouches: "Ateliers d'estampe et d'édition d'art, livres d'artistes, imprimerie de luxe, timbres-poste et gravure fiduciaire.",
    coursLies: ["D-01", "D-03", "G-05", "G-11"]
  },
  {
    id: "metier-11-restaurateur-patrimoine-graphique", num: "11", pole: "transverse", codeRome: "B1601",
    diplome: "Mastère Conservation-Restauration du Patrimoine (École de Condé / INP)",
    normes: "Code déontologique ECCO (réversibilité, compatibilité, lisibilité), norme ISO 11799 (archivage patrimonial)",
    titre: "Conservateur-Restaurateur d'Œuvres Graphiques & Tableaux",
    accroche: "Diagnostiquer, consolider et restaurer les dessins anciens, estampes, manuscrits et peintures dans le respect absolu de l'œuvre originale.",
    ecoles: [
      { nom: "École de Condé", url: "https://ecoles-conde.com/lecole-de-conde/", detail: "Mastère Conservation-Restauration du Patrimoine (certifié RNCP Niv. 7)" },
      { nom: "Institut National du Patrimoine (INP)", url: "https://www.inp.fr/", detail: "Département des Restaurateurs du Patrimoine (Arts Graphiques & Peinture)" },
      { nom: "Université Paris 1 Panthéon-Sorbonne", url: "https://www.pantheonsorbonne.fr/", detail: "Master Conservation-Restauration des Biens Culturels" }
    ],
    missions: ["Établir le constat d'état sanitaire de l'œuvre sous lumière rasante, ultraviolette et infrarouge.", "Identifier les matériaux constitutifs (fibres du papier, encres métallo-galliques, pigments, liants, vernis).", "Effectuer les traitements de stabilisation (dépoussiérage, désacidification, doublage au papier japonais).", "Réaliser la réintégration picturale illusionniste ou tratteggio avec des matériaux strictement réversibles."],
    competences: ["Connaissance approfondie des techniques historiques de dessin, de peinture et d'impression", "Justesse colorimétrique extrême pour la retouche réversible à l'aquarelle", "Dextérité manuelle micrométrique sous loupe binoculaire", "Rédaction de rapports scientifiques et photographiques normés"],
    outils: ["Papiers japonais, colle d'amidon de blé, scalpels chirurgicaux, aquarelles de conservation", "Table aspirante, lampe de Wood (UV), pH-mètre de surface"],
    attendusStagiaire: "Comprendre pourquoi le choix d'un papier sans acide et de pigments stables conditionne la survie d'une œuvre sur plusieurs siècles.",
    debouches: "Musées nationaux et territoriaux, Archives nationales, bibliothèques patrimoniales, ateliers agréés Monuments Historiques.",
    coursLies: ["D-01", "D-04", "D-08", "G-16"]
  },
  {
    id: "metier-12-scenographe-decorateur", num: "12", pole: "transverse", codeRome: "L1503 / F1102",
    diplome: "DN MADE Espace & Événementiel / Diplôme ENSAD / École Boulle / ENSAAMA",
    normes: "Plans cotés à l'échelle (1:50, 1:20, 1:1), normes ERP sécurité incendie (classement M1/B-s1,d0), accessibilité PMR",
    titre: "Scénographe d'Exposition, Décorateur & Designer d'Espace",
    accroche: "Concevoir la mise en espace narrative, visuelle et graphique d'une exposition de musée, d'un stand de salon ou d'un décor.",
    ecoles: [
      { nom: "École Boulle (Paris)", url: "https://ecole-boulle.org/", detail: "DN MADE & DSAA Design d'Espace & Scénographie" },
      { nom: "ENSAAMA Olivier de Serres", url: "https://www.ensaama.net/", detail: "DN MADE Événementiel & Scénographie" },
      { nom: "ENSAD Paris", url: "https://www.ensad.fr/", detail: "Spécialisation Scénographie" },
      { nom: "École de Condé", url: "https://ecoles-conde.com/lecole-de-conde/", detail: "Bachelor & Mastère Design d'Espace" },
      { nom: "École La Fontaine", url: "https://www.ecolelafontaine.fr/", detail: "Bachelor Design d'Espace (100% en ligne)" }
    ],
    missions: ["Dessiner les croquis d'intention en perspective et les maquettes volumiques du parcours visiteur.", "Concevoir le graphisme d'exposition : cimaises, cartels typographiques, kakémonos et signalétique directionnelle.", "Préparer les fichiers d'impression grand format à l'échelle 1:1 avec débords et tracés de découpe.", "Coordonner les menuisiers, éclairagistes et imprimeurs-poseurs jusqu'à l'ouverture au public."],
    competences: ["Perspective architecturale à 1, 2 et 3 points de fuite", "Lisibilité typographique à distance (cartels à 1m, panneaux à 5m)", "Maîtrise des gabarits d'impression grand format (échelle 1:1, overbleed 10 mm)", "Harmonie chromatique et température d'éclairage (2700K à 4000K)"],
    outils: ["Carnet de croquis, Illustrator, InDesign, SketchUp / Blender", "Mètre laser, nuanciers RAL et Pantone, supports PVC/Dibond/vinyle"],
    attendusStagiaire: "Relier le dessin en perspective (Semaine 1) à la fabrication de supports graphiques grand format à l'échelle 1:1 (Semaine 2).",
    debouches: "Musées et centres d'art, agences de scénographie événementielle, salons professionnels, théâtre et cinéma.",
    coursLies: ["D-02", "D-10", "G-07", "G-13", "G-15"]
  }
];

if (typeof window !== 'undefined') window.METIERS_DATA_01 = METIERS_DATA_01;
