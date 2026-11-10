// =====================================================================
// RÉFÉRENTIEL DES MÉTIERS (PARTIE 2/2 : N°13 À N°24)
// PÔLES : DESIGN GRAPHIQUE, TYPOGRAPHIE, WEB, PACKAGING, PRÉPRESSE RPIP & DIRECTION
// SANS IMAGES FICTIVES · LIENS OFFICIELS CLIQUABLES POUR CHAQUE ÉTABLISSEMENT
// =====================================================================

const METIERS_DATA_02 = [
  {
    id: "metier-13-designer-graphique-identite", num: "13", pole: "graphisme", codeRome: "E1205",
    diplome: "DN MADE Mention Graphisme / DSAA Design Graphique / ENSAD",
    normes: "Silhouette 1-Bit noir pur, Bézier orthogonal 0°/90°, règle 60-30-10, Pantone Solid Coated & FOGRA39/51",
    titre: "Designer Graphique & Identité de Marque (Branding)",
    accroche: "Traduire la stratégie d'un commanditaire en un système visuel cohérent : logotype vectoriel, charte graphique et supports imprimés ou écrans.",
    ecoles: [
      { nom: "École Estienne (Paris)", url: "https://www.ecole-estienne.paris/", detail: "DN MADE Graphisme & DSAA Design Graphique" },
      { nom: "École Duperré (Paris)", url: "https://duperre.org/", detail: "DN MADE & DSAA Design Graphique" },
      { nom: "ENSAAMA Olivier de Serres", url: "https://www.ensaama.net/", detail: "DN MADE Graphisme & Identité Visuelle" },
      { nom: "ENSAD Paris", url: "https://www.ensad.fr/", detail: "Design Graphique & Multimédia" },
      { nom: "École de Condé", url: "https://ecoles-conde.com/lecole-de-conde/", detail: "Bachelor & Mastère Design Graphique (RNCP)" },
      { nom: "École La Fontaine", url: "https://www.ecolelafontaine.fr/", detail: "Bachelor Designer Graphique (100% en ligne)" }
    ],
    missions: ["Interroger le client à l'aide des 6 questions de cadrage pour transformer une demande vague en cahier des charges précis.", "Constituer un moodboard argumenté et présenter 3 pistes créatives distinctes.", "Dessiner des logotypes vectoriels irréprochables validés par le test de la silhouette 1-Bit (noir et blanc pur).", "Rédiger la charte graphique normée (zones de protection, interdits, correspondances Pantone, CMJN et RVB)."],
    competences: ["Maîtrise chirurgicale des courbes de Bézier (points aux extremums, tangentes 0°/90°)", "Construction géométrique par opérations booléennes (Pathfinder)", "Règle chromatique 60-30-10 et nuanciers Pantone", "Argumentation méthodique face au commanditaire"],
    outils: ["Adobe Illustrator, Affinity Designer, InDesign", "Nuanciers physiques Pantone Formula Guide"],
    attendusStagiaire: "Comprendre qu'un logotype réussi fonctionne d'abord en noir et blanc pur (1-Bit) à 15 mm de large avant toute couleur.",
    debouches: "Studios de branding, agences de communication, départements communication d'institutions, exercice en freelance.",
    coursLies: ["G-01", "G-02", "G-04", "G-05", "G-10", "G-11"]
  },
  {
    id: "metier-14-typographe-dessinateur-caracteres", num: "14", pole: "graphisme", codeRome: "E1205 / E1306",
    diplome: "DSAA Design Typographique (École Estienne) / Post-diplôme ANRT Nancy",
    normes: "Classification Vox-Atypi / DIN 16518, formats OpenType (OTF/WOFF2), grilles de Bézier UPM 1000",
    titre: "Typographe & Dessinateur de Caractères (Type Designer)",
    accroche: "Dessiner des familles de polices de caractères originales et régler l'architecture micro-typographique des éditions.",
    ecoles: [
      { nom: "École Estienne (Paris)", url: "https://www.ecole-estienne.paris/", detail: "DSAA Design Typographique (référence nationale)" },
      { nom: "ANRT Nancy", url: "https://www.anrt-nancy.fr/", detail: "Atelier National de Recherche Typographique (Post-Master)" },
      { nom: "HEAR Strasbourg", url: "https://www.hear.fr/", detail: "Atelier Communication Graphique & Typographie" },
      { nom: "École de Condé", url: "https://ecoles-conde.com/lecole-de-conde/", detail: "Cursus Design Graphique & Éditorial" }
    ],
    missions: ["Dessiner l'alphabet complet (capitales, bas de casse, chiffres, glyphes diacritiques) sur grille vectorielle UPM.", "Décliner les graisses (Light à Black) et les chasses par interpolation (Variable Fonts).", "Régler les tables d'approche (metrics) et les paires de crénage optique (kerning) pour une lecture fluide.", "Créer des lettrages sur mesure (Custom Type) pour les titres de presse, logotypes et couvertures de livres."],
    competences: ["Anatomie fine de la lettre (hauteur d'x, empattements, fûts, déliés, axe d'inclinaison)", "Placement minimaliste des nœuds de Bézier aux extremums stricts", "Maîtrise de la classification historique Vox-Atypi", "Équilibre optique entre les formes noires et les contre-formes blanches"],
    outils: ["Glyphs 3, FontLab, RoboFont, Adobe Illustrator", "Plumes calligraphiques à bec large, typomètre et compte-fils"],
    attendusStagiaire: "Observer comment l'espacement entre les lettres compte autant que le dessin des lettres elles-mêmes.",
    debouches: "Fonderies typographiques indépendantes, agences de branding international, presse quotidienne et édition d'art.",
    coursLies: ["G-04", "G-06", "G-07", "G-11"]
  },
  {
    id: "metier-15-maquettiste-editorial-edition", num: "15", pole: "graphisme", codeRome: "E1306",
    diplome: "DN MADE Objet Éditorial & Livre / BTS Édition / Licence Pro",
    normes: "Grille 12 colonnes, ligne de base (Baseline), interlignage 120%-145%, export PDF/X-4 (ISO 15930-7)",
    titre: "Maquettiste Éditorial, Metteur en Page & Concepteur de Livres",
    accroche: "Structurer la mise en page des beaux-livres, magazines, manuels et catalogues grâce aux grilles modulaires et aux feuilles de style.",
    ecoles: [
      { nom: "École Estienne (Paris)", url: "https://www.ecole-estienne.paris/", detail: "DN MADE Mention Livre & Objet Éditorial" },
      { nom: "École Duperré (Paris)", url: "https://duperre.org/", detail: "DN MADE Graphisme & Édition" },
      { nom: "École La Fontaine", url: "https://www.ecolelafontaine.fr/", detail: "Bachelor Design Graphique & Mise en Page" },
      { nom: "Tuto.com", url: "https://fr.tuto.com/", detail: "Parcours Maquettiste PAO & InDesign CC 2026" }
    ],
    missions: ["Construire le gabarit maître (marges empagées, colonnes, gouttières, folios et ligne de base).", "Hiérarchiser le contenu selon 3 niveaux de lecture (N1 Accroche, N2 Orientation, N3 Texte courant).", "Automatiser la mise en page via les styles de paragraphe, styles de caractère et expressions GREP.", "Vérifier l'absence de veuves, d'orphelines et de césures fautives avant l'export PDF/X-4."],
    competences: ["Architecture de grille modulaire et gestion des blancs tournants", "Appairage de polices (ex. Garalde + Linéale) et gris typographique régulier", "Préparation du chemin de fer et calcul d'épaisseur de tranche selon le grammage papier", "Contrôle en amont (Preflight) dans InDesign et Acrobat Pro"],
    outils: ["Adobe InDesign CC 2026 (Disposition Flex), Affinity Publisher", "Typomètre, nuanciers de papiers d'édition (couché, offset, bouffant)"],
    attendusStagiaire: "Réussir l'affiche A5 100% typographique sans image : faire parler uniquement la hiérarchie et l'espace blanc.",
    debouches: "Maisons d'édition, groupes de presse magazine, musées, agences de communication éditoriale.",
    coursLies: ["G-06", "G-07", "G-08", "G-12"]
  },
  {
    id: "metier-16-ui-ux-designer-web", num: "16", pole: "graphisme", codeRome: "E1104 / M1805",
    diplome: "Bachelor Designer UI (École La Fontaine / Gobelins) / DN MADE Numérique",
    normes: "Accessibilité WCAG 2.2 (contraste AA >= 4.5:1, AAA >= 7:1, cibles tactiles >= 44px), Design Tokens, sRGB",
    titre: "UI/UX Designer, Webdesigner & Architecte de Design System",
    accroche: "Concevoir des interfaces web et mobiles lisibles, accessibles et esthétiques en articulant grilles responsives et composants réutilisables.",
    ecoles: [
      { nom: "École La Fontaine", url: "https://www.ecolelafontaine.fr/", detail: "Bachelor Designer UI & Webdesign (100% en ligne)" },
      { nom: "GOBELINS Paris", url: "https://www.gobelins.fr/", detail: "Bachelor & Master Design Interactif Web & Mobile" },
      { nom: "École de Condé", url: "https://ecoles-conde.com/lecole-de-conde/", detail: "Bachelor Design Graphique & Digital" },
      { nom: "ENSAAMA Olivier de Serres", url: "https://www.ensaama.net/", detail: "DN MADE Numérique & Interfaces" },
      { nom: "Tuto.com", url: "https://fr.tuto.com/", detail: "Parcours Certifiant UX/UI Designer & Figma" }
    ],
    missions: ["Concevoir les parcours utilisateurs (User Flows) et les maquettes structurelles (Wireframes).", "Bâtir un Design System normé (variables de couleurs 60-30-10, échelle typographique modulaire, boutons, cartes).", "Contrôler systématiquement les ratios de contraste selon la norme internationale d'accessibilité WCAG 2.2.", "Exporter les actifs vectoriels SVG propres et collaborer avec les développeurs front-end."],
    competences: ["Grilles fluides 12 colonnes (Desktop, Tablette, Mobile) et espacements multiples de 4px/8px", "Colorimétrie additive RVB / sRGB et hiérarchie des appels à l'action (CTA)", "Dessin d'icônes vectorielles lisibles en 16x16 et 24x24 pixels", "Prototypage interactif et tests d'utilisabilité"],
    outils: ["Figma, Adobe Illustrator (icônes SVG), Penpot", "Vérificateurs de contraste WCAG 2.2 et inspecteurs navigateur"],
    attendusStagiaire: "Appliquer aux écrans la même rigueur d'alignement, de hiérarchie et de contraste que sur une affiche imprimée.",
    debouches: "Agences digitales, studios produit, éditeurs de logiciels et d'applications, collectivités et startups.",
    coursLies: ["G-01", "G-03", "G-07", "G-08", "G-09", "G-10"]
  },
  {
    id: "metier-17-motion-designer", num: "17", pole: "graphisme", codeRome: "E1205 / L1508",
    diplome: "DN MADE Numérique Option Motion Design / Gobelins / Cohl",
    normes: "diffusion Rec.709 / sRGB, 25/30/60 ips, courbes de Bézier temporelles ( Speed / Value Graph), H.264 / ProRes",
    titre: "Motion Designer 2D / 3D & Habillage Télévisuel",
    accroche: "Animer la typographie, les formes vectorielles, les logotypes et les infographies pour le web, le cinéma et l'événementiel.",
    ecoles: [
      { nom: "GOBELINS Paris", url: "https://www.gobelins.fr/", detail: "Bachelor & Formations Motion Design" },
      { nom: "ENSAAMA Olivier de Serres", url: "https://www.ensaama.net/", detail: "DN MADE Graphisme & Motion Design" },
      { nom: "École de Condé", url: "https://ecoles-conde.com/lecole-de-conde/", detail: "Spécialisation Motion Design & Identité Animée" },
      { nom: "Artline", url: "https://artline.education/", detail: "Bachelor Motion Design en ligne" },
      { nom: "Tuto.com", url: "https://fr.tuto.com/", detail: "Parcours Motion Designer (After Effects, Cinema 4D, Blender)" }
    ],
    missions: ["Concevoir la planche de style (Styleframes) et le storyboard de la séquence animée.", "Préparer et découper les éléments vectoriels dans Illustrator par calques nommés.", "Animer les typographies, transitions et pictogrammes en réglant les courbes d'accélération (Easing).", "Synchroniser l'animation graphique sur le rythme sonore (Sound Design et voix off)."],
    competences: ["Sens de la composition graphique, de la typographie en mouvement et du rythme", "Maîtrise des courbes de vitesse (Bézier temporel)", "Interopérabilité vectorielle Illustrator / After Effects / Blender", "Gestion des formats de diffusion multi-écrans (16:9, 9:16, 1:1)"],
    outils: ["Adobe After Effects, Illustrator, Cinema 4D, Blender, Calvary", "Premiere Pro et DaVinci Resolve"],
    attendusStagiaire: "Comprendre qu'un bon Motion Design repose d'abord sur d'excellentes planches fixes (composition, typo et couleurs).",
    debouches: "Chaînes de télévision, agences de communication, studios de production digitale, génériques de films.",
    coursLies: ["D-10", "G-04", "G-07", "G-09", "G-10"]
  },
  {
    id: "metier-18-designer-packaging-volume", num: "18", pole: "graphisme", codeRome: "E1205 / H1204",
    diplome: "DN MADE Objet / Graphisme Packaging / BTS ERPC",
    normes: "Normes ECMA / FEFCO (cartonnerie), tons directs de découpe ( rainage, coupe), code-barres EAN-13, ISO 12647-2",
    titre: "Designer Packaging, Éco-Conception & Volume Imprimé",
    accroche: "Concevoir l'habillage graphique et le tracé de découpe à plat (forme de découpe) des boîtes, étuis, flacons et coffrets.",
    ecoles: [
      { nom: "École Estienne (Paris)", url: "https://www.ecole-estienne.paris/", detail: "Formations Design Graphique & Chaîne Packaging" },
      { nom: "École de Condé", url: "https://ecoles-conde.com/lecole-de-conde/", detail: "Bachelor Design Graphique & Packaging" },
      { nom: "ENSAAMA Olivier de Serres", url: "https://www.ensaama.net/", detail: "DN MADE Produit & Graphisme de Surface" },
      { nom: "CFA Grafipolis (Nantes)", url: "https://grafipolis.fr/", detail: "Formations Packaging, Prépresse & Façonnage" }
    ],
    missions: ["Développer le plan à plat (patron technique) avec les filets de coupe, les filets de rainage (pliage) et les pattes de collage.", "Créer le décor graphique en tenant compte du sens de lecture une fois la boîte montée en trois dimensions.", "Intégrer les mentions légales obligatoires, les pictogrammes de tri (Triman) et la réserve blanche du code-barres EAN-13.", "Préparer les calques de finition (vernis sélectif UV, dorure à chaud, gaufrage) en tons directs séparés."],
    competences: ["Vision spatiale du passage de la feuille 2D au volume 3D plié", "Gestion stricte des calques techniques en surimpression (Coupe, Rainage, Vernis, Dorure)", "Maîtrise des fonds perdus externes au tracé de découpe", "Connaissance des cartons compacts, ondulés et papiers écologiques FSC/PEFC"],
    outils: ["Illustrator (plugins packaging), InDesign, Blender / Dimension (rendu 3D boîte)", "Table de découpe d'échantillons, plioir et scalpel"],
    attendusStagiaire: "Imprimer, découper et plier systématiquement une maquette en papier à l'échelle 1:1 pour vérifier ses alignements.",
    debouches: "Agences de design packaging, industrie cosmétique et agroalimentaire, éditeurs de jeux de société, cartonnages de luxe.",
    coursLies: ["D-02", "G-05", "G-10", "G-12", "G-13"]
  },
  {
    id: "metier-19-operateur-pao-prepresse-rpip", num: "19", pole: "graphisme", codeRome: "E1306",
    diplome: "Bac Pro RPIP (Option A Productions Graphiques) / BTS ERPC",
    normes: "ISO 12647-2, FOGRA39 (ISO Coated v2), FOGRA51 (PSO Coated v3), PDF/X-4 (ISO 15930-7), TAC <= 300%, 300 DPI",
    titre: "Opérateur PAO & Technicien Prépresse (Filière RPIP)",
    accroche: "Contrôler, corriger, normaliser et imposer les fichiers graphiques des clients avant leur flashage CTP ou leur impression numérique.",
    ecoles: [
      { nom: "École Estienne (Paris)", url: "https://www.ecole-estienne.paris/", detail: "Pôle Industries Graphiques & BTS ERPC" },
      { nom: "CFA Grafipolis (Nantes)", url: "https://grafipolis.fr/", detail: "Bac Pro RPIP & BTS Études de Réalisation d'un Produit de Communication" },
      { nom: "GOBELINS Paris", url: "https://www.gobelins.fr/", detail: "Formations Production Graphique & Prépresse" },
      { nom: "Tuto.com", url: "https://fr.tuto.com/", detail: "Cursus Complet Prépresse, PDF/X-4 & Colorimétrie ICC" }
    ],
    missions: ["Exécuter le contrôle en amont (Preflight) : résolution effective 300 DPI à l'échelle 1:1, mode CMJN et profil ICC FOGRA39 / FOGRA51.", "Ajouter ou reconstruire les fonds perdus manquants (3 à 5 mm) et sécuriser la zone tranquille (5 mm).", "Corriger les noirs : texte fin en 100% K surimprimé, grands aplats en noir soutenu (C60 M40 J40 N100) avec TAC <= 300%.", "Exporter le fichier certifié PDF/X-4, réaliser l'imposition des cahiers et soumettre le Bon à Tirer (BAT) au client."],
    competences: ["Maîtrise des normes ISO 12647-2 et ISO 15930-7 (PDF/X-4)", "Différenciation matriciel / vectoriel et gestion du recouvrement (Trapping)", "Vectorisation de secours et correction dans Acrobat Pro / Enfocus PitStop", "Application stricte de la charte de nommage ISO et de l'arborescence d'atelier"],
    outils: ["Suite Adobe (InDesign, Illustrator, Acrobat Pro), Enfocus PitStop Pro", "Flux prépresse (Kodak Prinergy, Heidelberg Prinect, Agfa Apogee), compte-fils"],
    attendusStagiaire: "Adopter la discipline RPIP dès la Semaine 2 : zéro fichier sans fond perdu, zéro image RVB à 72 DPI, zéro espace dans les noms.",
    debouches: "Imprimeries offset et numériques, studios d'exécution prépresse, ateliers de reprographie et d'édition.",
    coursLies: ["G-03", "G-09", "G-12", "G-16"]
  },
  {
    id: "metier-20-conducteur-impression-numerique-offset", num: "20", pole: "graphisme", codeRome: "E1301 / E1306",
    diplome: "Bac Pro RPIP (Option B Productions Imprimées) / BTS ERPC",
    normes: "Contrôle densitométrique et spectrophotométrique (Delta E < 3), éclairage normalisé D50 (5000K), PSO ISO 12647-2",
    titre: "Conducteur de Presse Numérique, Offset & Traceur Grand Format",
    accroche: "Piloter les presses d'impression et les traceurs, calibrer les supports et garantir la fidélité colorimétrique des tirages.",
    ecoles: [
      { nom: "CFA Grafipolis (Nantes)", url: "https://grafipolis.fr/", detail: "Bac Pro RPIP Option Productions Imprimées & BTS ERPC" },
      { nom: "GOBELINS Paris", url: "https://www.gobelins.fr/", detail: "Formations Impression Numérique & Gestion de la Couleur" },
      { nom: "École Estienne (Paris)", url: "https://www.ecole-estienne.paris/", detail: "Ateliers d'Impression & Industries Graphiques" }
    ],
    missions: ["Paramétrer le serveur RIP (Roland VersaWorks, Fiery, Caldera) en sélectionnant le profil média adapté au papier ou au vinyle.", "Calibrer la presse et contrôler les gammes de couleurs au spectrophotomètre sous cabine lumineuse normalisée D50.", "Surveiller le repérage recto/verso, l'encrage, le séchage et la régularité du tirage en cours de production.", "Effectuer la maintenance préventive des têtes d'impression, blochets et systèmes d'alimentation."],
    competences: ["Lecture des gammes de contrôle CMJN et interprétation de l'écart colorimétrique Delta E", "Connaissance du sens des fibres du papier, du grammage (80g à 400g) et de l'hygrométrie", "Pilotage des files d'attente RIP et gestion des tons directs (CutContour, Blanc, Métallique)", "Rigueur de contrôle qualité avant livraison"],
    outils: ["Presses numériques, presses offset, traceurs Roland VersaCAMM VS-640", "Spectrophotomètre X-Rite, compte-fils, cabine d'examen D50"],
    attendusStagiaire: "Comprendre concrètement pourquoi un taux d'encrage supérieur à 300% provoque du maculage sur le papier.",
    debouches: "Imprimeries de labeur, ateliers d'impression numérique et grand format, imprimeries d'étiquettes et de packaging.",
    coursLies: ["G-09", "G-10", "G-12", "G-13"]
  },
  {
    id: "metier-21-technicien-signaletique-decoupe", num: "21", pole: "graphisme", codeRome: "E1308 / H2902",
    diplome: "CAP Signalétique et Décors Graphiques / Bac Pro RPIP / BMA",
    normes: "Ton direct CutContour (100% Magenta, 0.25 pt), ponts de pochoir >= 1.5 mm, débord overbleed 2 à 10 mm, échelle 1:1",
    titre: "Technicien Signalétique, Découpe Vinyle & Habillage 1:1",
    accroche: "Préparer les tracés vectoriels de découpe et fabriquer en atelier les adhésifs, pochoirs industriels et habillages grand format.",
    ecoles: [
      { nom: "CFA Grafipolis (Nantes)", url: "https://grafipolis.fr/", detail: "CAP Signalétique et Décors Graphiques & Bac Pro RPIP" },
      { nom: "École Boulle (Paris)", url: "https://ecole-boulle.org/", detail: "Signalétique Architecturale & Métiers d'Art" },
      { nom: "ENSAAMA Olivier de Serres", url: "https://www.ensaama.net/", detail: "Design Graphique d'Environnement & Signalétique" }
    ],
    missions: ["Créer le calque vectoriel de découpe mi-chair avec la nuance exacte CutContour (ton direct 100% Magenta, contour 0.25 pt).", "Concevoir des pochoirs techniques en intégrant des ponts de maintien (1.5 à 2 mm) pour retenir les îlots fermés (A, O, P, B, R).", "Monter les gabarits d'habillage à l'échelle 1:1 (ex. flancs de borne d'arcade en symétrie miroir, perçages boutons 28 mm).", "Lancer l'impression-découpe, réaliser l'échenillage manuel au scalpel, poser le tape de transfert et maroufler sur le support."],
    competences: ["Géométrie vectorielle irréprochable (opérations booléennes Pathfinder, zéro tracé doublé)", "Paramétrage du flux Roland VersaWorks (impression + découpe)", "Dextérité d'atelier : échenillage, pose à sec ou à l'eau savonneuse, thermoformage léger", "Lecture de plans cotés en millimètres à l'échelle 1:1"],
    outils: ["Traceur Roland VersaCAMM VS-640, plotter de découpe vinyle", "Scalpel de précision, raclette feutrine, tape transfert, mètre et pied à coulisse"],
    attendusStagiaire: "Voir son propre tracé vectoriel piloter la lame de découpe et réaliser soi-même l'échenillage en atelier.",
    debouches: "Ateliers d'enseignes et signalétique, fabricants de bornes d'arcade et PLV, marquage de véhicules, musées et stands.",
    coursLies: ["G-04", "G-05", "G-13", "G-14", "G-15"]
  },
  {
    id: "metier-22-serigraphe-imprimeur-textile-art", num: "22", pole: "graphisme", codeRome: "E1301 / B1302",
    diplome: "CAP Sérigraphie Industrielle / Bac Pro RPIP / DN MADE",
    normes: "Séparation par tons directs Pantone, linéature de trame (LPI) adaptée à la maille d'écran, typons 100% opaques",
    titre: "Sérigraphe d'Atelier, Textile & Affiches d'Art",
    accroche: "Imprimer au racloir à travers des écrans de soie insolés sur textile, papier d'art, bois, métal ou verre avec des encres vibrantes.",
    ecoles: [
      { nom: "ENSAD Paris", url: "https://www.ensad.fr/", detail: "Atelier Sérigraphie & Image Imprimée" },
      { nom: "HEAR Strasbourg", url: "https://www.hear.fr/", detail: "Ateliers d'Impression Sérigraphique & Édition" },
      { nom: "École Duperré (Paris)", url: "https://duperre.org/", detail: "Ateliers Design Textile & Impression" },
      { nom: "CFA Grafipolis", url: "https://grafipolis.fr/", detail: "Formations Sérigraphie & Procédés Spéciaux" }
    ],
    missions: ["Séparer le visuel couleur par couleur en générant un typon noir 100% opaque (avec hirondelles de repérage) par couche.", "Enduire les cadres d'émulsion photosensible, insoler les écrans aux UV et dépouiller le pochoir à l'eau.", "Caler les écrans sur le carrousel textile ou la table aspirante avec un repérage micrométrique.", "Imprimer chaque couleur à la racle, catalyser au tunnel de séchage et dégraver les écrans après tirage."],
    competences: ["Pensée par couches de tons directs (séparation 1 à 6 couleurs) et gestion du débord (Trapping)", "Maîtrise du contraste 1-Bit et des trames demi-teintes (Halftones)", "Connaissance des encres plastisol, à l'eau, rongeantes et métalliques", "Précision gestuelle (angle, vitesse et pression de racle)"],
    outils: ["Carrousel de sérigraphie, table d'insolation UV, cadres maille 43 à 120 fils/cm, racles", "Illustrator et Photoshop pour la séparation des typons"],
    attendusStagiaire: "Comprendre comment le cours G-11 (Logo 1-Bit) et le cours G-10 (Tons directs Pantone) permettent d'imprimer un t-shirt ou une affiche en sérigraphie.",
    debouches: "Ateliers de personnalisation textile, collectifs d'édition d'affiches et de micro-édition, marquage industriel.",
    coursLies: ["D-03", "G-05", "G-10", "G-11", "G-14"]
  },
  {
    id: "metier-23-relieur-doreur-faconnier", num: "23", pole: "transverse", codeRome: "B1402 / E1302",
    diplome: "CAP Arts de la Reliure / DN MADE Livre (École Estienne) / BMA",
    normes: "Sens de fibre du papier (sens machine parallèle au dos), colles pH neutre ISO 9706, imposition en cahiers (in-quarto, in-octavo)",
    titre: "Relieur d'Art, Doreur sur Cuir & Technicien de Façonnage",
    accroche: "Transformer les feuilles imprimées en ouvrages reliés, cousus, dorés à la feuille d'or ou façonnés avec une finition irréprochable.",
    ecoles: [
      { nom: "École Estienne (Paris)", url: "https://www.ecole-estienne.paris/", detail: "DN MADE Métiers du Livre : Reliure & Dorure d'Art" },
      { nom: "CFA Grafipolis (Nantes)", url: "https://grafipolis.fr/", detail: "Formations Finition, Façonnage & Industries Graphiques" },
      { nom: "École Boulle (Paris)", url: "https://ecole-boulle.org/", detail: "Métiers d'Art & Finitions Précieuses" }
    ],
    missions: ["Plier les feuilles imprimées en cahiers selon le schéma d'imposition et vérifier le sens de fibre du papier.", "Assembler et coudre les cahiers au fil de lin sur rubans ou nerfs, arrondir et endosser le corps d'ouvrage.", "Couvrir l'ouvrage en pleine peau (maroquin, chagrin), en toile ou en papier marbré.", "Titrer et décorer la couverture et le dos par dorure à chaud au balancier ou aux petits fers à la feuille d'or 22 carats."],
    competences: ["Compréhension géométrique de l'imposition des pages (multiples de 4, 8, 16 pages)", "Respect des marges de reliure (petit fond) et des repères de coupe (massicot)", "Création de fers à dorer vectoriels (1-Bit) gravés sur laiton ou magnésium", "Précision millimétrique d'équerrage et de coupe"],
    outils: ["Massicot programmable, plieuse, cousoir, presse à percussion, balancier de dorure, plioir en os", "InDesign (imposition et calcul de dos)"],
    attendusStagiaire: "Découvrir l'aval de la chaîne graphique : pourquoi une erreur de marge intérieure ou de fond perdu dans InDesign empêche de relier le livre.",
    debouches: "Ateliers de reliure d'art et de création, bibliothèques patrimoniales, ateliers de façonnage et de finition de luxe.",
    coursLies: ["G-07", "G-08", "G-11", "G-12"]
  },
  {
    id: "metier-24-directeur-artistique-chef-atelier", num: "24", pole: "transverse", codeRome: "E1104 / E1205",
    diplome: "DSAA / Mastère Direction Artistique (RNCP Niv. 7) / ENSAD / Penninghen",
    normes: "Charte ISO d'organisation d'atelier, validation contractuelle du Bon à Tirer (BAT), conformité globale création + prépresse",
    titre: "Directeur Artistique & Chef de Projet d'Atelier Graphique",
    accroche: "Superviser l'ensemble de la chaîne créative et technique, du premier croquis d'observation sur papier jusqu'à la signature du BAT et la fabrication.",
    ecoles: [
      { nom: "ENSAD Paris", url: "https://www.ensad.fr/", detail: "École Nationale Supérieure des Arts Décoratifs" },
      { nom: "École de Condé", url: "https://ecoles-conde.com/lecole-de-conde/", detail: "Mastère Direction Artistique en Design Graphique (RNCP Niv. 7)" },
      { nom: "Penninghen (Paris)", url: "https://www.penninghen.fr/", detail: "Mastère Direction Artistique & Image" },
      { nom: "École Estienne (Paris)", url: "https://www.ecole-estienne.paris/", detail: "DSAA Design Graphique & Création Typographique" },
      { nom: "GOBELINS Paris", url: "https://www.gobelins.fr/", detail: "Direction Artistique & Management de Projets Visuels" },
      { nom: "École Duperré (Paris)", url: "https://duperre.org/", detail: "DSAA Mode, Environnement & Design Graphique" }
    ],
    missions: ["Conduire le rendez-vous de cadrage client, définir le positionnement créatif et chiffrer la faisabilité industrielle.", "Coordonner le pôle illustration (dessin, valeurs, couleur) et le pôle exécution PAO (vectoriel, prépresse, découpe).", "Évaluer les livrables des élèves et stagiaires en mode Acquis / Non acquis selon les critères normés de l'atelier.", "Présenter les pistes au client, faire signer le Bon à Tirer (BAT) contractuel et superviser la fabrication finale."],
    competences: ["Double compétence : œil académique du dessinateur et rigueur technique de l'opérateur prépresse RPIP", "Diagnostic pédagogique bienveillant et accompagnement des stagiaires", "Maîtrise de l'arborescence serveur à 6 dossiers et de la charte de nommage ISO", "Gestion de projet, respect des délais et relation client"],
    outils: ["Console d'administration SQLite, grilles d'évaluation Acquis / Non acquis", "Chaîne graphique complète (du carnet de croquis au serveur RIP Roland VersaWorks)"],
    attendusStagiaire: "Comprendre le lien indissociable entre la Semaine 1 (apprendre à voir et dessiner juste) et la Semaine 2 (produire un fichier technique irréprochable).",
    debouches: "Direction d'atelier graphique et d'imprimerie créative, direction artistique en agence ou studio, maîtrise de stage et enseignement.",
    coursLies: ["D-01", "D-10", "G-01", "G-12", "G-16"]
  }
];

if (typeof window !== 'undefined') window.METIERS_DATA_02 = METIERS_DATA_02;
