// =====================================================================
// ASSEMBLAGE DES 24 MÉTIERS, ANNUAIRE OFFICIEL DES ÉCOLES, SITES & FORMATIONS CPF
// CLASSÉS PAR SECTEUR GÉOGRAPHIQUE, STATUT, TARIFS ANNUELS & ÉLIGIBILITÉ CPF 2026
// =====================================================================

const METIERS_DATA = [
  ...(typeof METIERS_DATA_01 !== 'undefined' ? METIERS_DATA_01 : []),
  ...(typeof METIERS_DATA_02 !== 'undefined' ? METIERS_DATA_02 : [])
];

const SECTEURS_GEOGRAPHIQUES = [
  { id: 'all', label: 'Toute la France & En ligne' },
  { id: 'ile-de-france', label: 'Île-de-France & Paris' },
  { id: 'auvergne-rhone-alpes', label: 'Auvergne-Rhône-Alpes (Lyon, Annecy, Valence)' },
  { id: 'nouvelle-aquitaine', label: 'Nouvelle-Aquitaine (Angoulême, Bordeaux, Poitiers)' },
  { id: 'grand-est', label: 'Grand Est (Strasbourg, Nancy, Mulhouse)' },
  { id: 'ouest', label: 'Ouest (Nantes, Rennes)' },
  { id: 'occitanie-sud', label: 'Occitanie & Sud (Montpellier, Toulouse, Nice)' },
  { id: 'hauts-de-france', label: 'Hauts-de-France (Valenciennes)' },
  { id: 'multi-campus', label: 'Réseaux Multi-Campus' },
  { id: 'en-ligne', label: '100% En Ligne, Plateformes & CPF' }
];

const SCHOOLS_DIRECTORY_DATA = [
  {
    nom: "École Estienne (ESAIG Paris)", url: "https://www.ecole-estienne.paris/", categorie: "École Publique Supérieure", statut: "public",
    secteur: "ile-de-france", secteurs: ["ile-de-france"], ville: "Paris (13e)", diplomes: ["DN MADE", "BTS ERPC", "DSAA"],
    tarif: "0 € / an (Gratuit hors CVEC ~103 €)",
    pourquoiTarif: "Établissement public (Éducation nationale & Ville de Paris) intégralement financé par l'État. Sélection rigoureuse sur Parcoursup.",
    cursus: "DN MADE (Graphisme, Illustration, Livre, Gravure), BTS ERPC, DSAA Typographie & Illustration Scientifique"
  },
  {
    nom: "GOBELINS Paris & Annecy (Initial, Alternance & CPF)", url: "https://www.gobelins.fr/", categorie: "École de l'Image (CCI Paris · Éligible CPF)", statut: "public", cpf: true,
    secteur: "ile-de-france", secteurs: ["ile-de-france", "auvergne-rhone-alpes"], ville: "Paris & Annecy", diplomes: ["Bachelor", "Master", "RNCP37943 CPF", "Motion RNCP35874"],
    tarif: "0 € en Alternance · Formation Continue éligible CPF (9 700 € à 11 600 € en initial)",
    pourquoiTarif: "École consulaire de la CCI Paris : gratuite et rémunérée en apprentissage (OPCO), et cycles certifiants PAO/Graphisme/Motion finançables via le CPF.",
    cursus: "Cinéma d'Animation 2D/3D, Design Graphique, Motion Design, Prépresse & Formation Continue CPF (Illustrator, InDesign, Photoshop)"
  },
  {
    nom: "École Duperré", url: "https://duperre.org/", categorie: "École Publique Supérieure", statut: "public",
    secteur: "ile-de-france", secteurs: ["ile-de-france"], ville: "Paris (3e)", diplomes: ["DN MADE", "DSAA"],
    tarif: "0 € / an (Gratuit hors CVEC ~103 €)",
    pourquoiTarif: "École supérieure publique financée par le Ministère de l'Enseignement supérieur et la Ville de Paris (recrutement sélectif Parcoursup).",
    cursus: "DN MADE & DSAA Design Graphique, Édition, Typographie, Textile et Mode"
  },
  {
    nom: "École Boulle", url: "https://ecole-boulle.org/", categorie: "École Publique des Métiers d'Art", statut: "public",
    secteur: "ile-de-france", secteurs: ["ile-de-france"], ville: "Paris (12e)", diplomes: ["DN MADE", "DSAA", "Métiers d'Art"],
    tarif: "0 € / an (Gratuit hors CVEC ~103 €)",
    pourquoiTarif: "École publique d'arts appliqués et de métiers d'art subventionnée par l'État et la Ville de Paris.",
    cursus: "DN MADE & DSAA Design d'Espace, Scénographie, Signalétique, Gravure Ornementale & Métiers d'Art"
  },
  {
    nom: "ENSAAMA (Olivier de Serres)", url: "https://www.ensaama.net/", categorie: "École Publique Supérieure", statut: "public",
    secteur: "ile-de-france", secteurs: ["ile-de-france"], ville: "Paris (15e)", diplomes: ["DN MADE", "DSAA"],
    tarif: "0 € / an (Gratuit hors CVEC ~103 €)",
    pourquoiTarif: "École publique nationale d'arts appliqués financée par l'État (0 € pour les boursiers, seule la CVEC s'applique aux non-boursiers).",
    cursus: "DN MADE & DSAA Graphisme, Numérique, Motion Design, Événementiel & Scénographie"
  },
  {
    nom: "ENSAD (Arts Décoratifs Paris)", url: "https://www.ensad.fr/", categorie: "Grande École Publique (Min. Culture)", statut: "public",
    secteur: "ile-de-france", secteurs: ["ile-de-france"], ville: "Paris (5e)", diplomes: ["Grade Master (5 ans)"],
    tarif: "0 € (Boursiers) ou ~450 € / an (Droits nationaux Culture)",
    pourquoiTarif: "Grande école publique sous tutelle du Ministère de la Culture : seuls les droits d'inscription nationaux réglementés s'appliquent (admission sur concours).",
    cursus: "Diplôme ENSAD (Grade Master) : Design Graphique, Image Imprimée, Cinéma d'Animation, Scénographie"
  },
  {
    nom: "Beaux-Arts de Paris (ENSBA)", url: "https://beauxartsparis.fr/", categorie: "Grande École Publique (Min. Culture)", statut: "public",
    secteur: "ile-de-france", secteurs: ["ile-de-france"], ville: "Paris (6e)", diplomes: ["DNA", "DNSEP"],
    tarif: "0 € (Boursiers) ou ~438 € / an (Droits nationaux Culture)",
    pourquoiTarif: "Établissement public national du Ministère de la Culture : les ateliers (gravure, morphologie, édition) sont financés par le budget public.",
    cursus: "DNA & DNSEP : Dessin académique, Morphologie, Peinture, Estampe et Édition"
  },
  {
    nom: "HEAR (Haute École des Arts du Rhin)", url: "https://www.hear.fr/", categorie: "Grande École Publique", statut: "public",
    secteur: "grand-est", secteurs: ["grand-est"], ville: "Strasbourg & Mulhouse", diplomes: ["DNA", "DNSEP"],
    tarif: "0 € (Boursiers) ou ~450 € / an (Droits nationaux)",
    pourquoiTarif: "Établissement public de coopération culturelle financé par le Ministère de la Culture, les villes de Strasbourg/Mulhouse et la Région Grand Est.",
    cursus: "DNA & DNSEP Illustration, Didactique Visuelle, Communication Graphique, Typographie"
  },
  {
    nom: "ANRT (Atelier National de Recherche Typographique)", url: "https://www.anrt-nancy.fr/", categorie: "Post-Master Public", statut: "public",
    secteur: "grand-est", secteurs: ["grand-est"], ville: "Nancy (ENSAD Nancy)", diplomes: ["Post-Master Typographie"],
    tarif: "0 € / an (Frais pris en charge + Bourses de recherche)",
    pourquoiTarif: "Programme public de recherche post-master soutenu par le Ministère de la Culture et l'ENSAD Nancy.",
    cursus: "Recherche et Création de Caractères Typographiques (Type Design)"
  },
  {
    nom: "ÉESI (École Européenne Supérieure de l'Image)", url: "https://www.eesi.eu/", categorie: "Grande École Publique", statut: "public",
    secteur: "nouvelle-aquitaine", secteurs: ["nouvelle-aquitaine"], ville: "Angoulême & Poitiers", diplomes: ["DNA", "DNSEP / Master BD"],
    tarif: "0 € (Boursiers) ou ~450 € / an (Droits nationaux)",
    pourquoiTarif: "École publique supérieure d'art subventionnée par le Ministère de la Culture et la Région Nouvelle-Aquitaine.",
    cursus: "DNA & Master Bande Dessinée, Édition et Création Numérique"
  },
  {
    nom: "EMCA Angoulême", url: "https://www.angouleme-emca.fr/", categorie: "École Cinéma d'Animation (CCI)", statut: "public",
    secteur: "nouvelle-aquitaine", secteurs: ["nouvelle-aquitaine"], ville: "Angoulême", diplomes: ["RNCP Animation 2D/3D"],
    tarif: "0 € en Alternance (ou ~6 500 € / an en initial)",
    pourquoiTarif: "École consulaire de la CCI Charente : gratuite en contrat d'apprentissage/professionnalisation, ou payante en cycle initial pour financer les studios 2D/Stop-Motion.",
    cursus: "Storyboard, Layout, Animation 2D/3D et Stop-Motion"
  },
  {
    nom: "CFA Grafipolis", url: "https://grafipolis.fr/", categorie: "CFA Industries Graphiques (RPIP)", statut: "cfa",
    secteur: "ouest", secteurs: ["ouest"], ville: "Nantes", diplomes: ["Bac Pro RPIP", "CAP Signalétique", "BTS ERPC"],
    tarif: "0 € + Salarié Rémunéré (27 % à 100 % du SMIC)",
    pourquoiTarif: "Centre de Formation d'Apprentis : la formation est 100 % financée par l'OPCO de l'entreprise d'accueil et l'apprenti perçoit un salaire mensuel.",
    cursus: "CAP Signalétique et Décors Graphiques, Bac Pro RPIP (Prépresse & Impression), BTS ERPC, Packaging en alternance"
  },
  {
    nom: "École Émile Cohl", url: "https://www.cohl.fr/", categorie: "École Supérieure de Dessin", statut: "prive",
    secteur: "auvergne-rhone-alpes", secteurs: ["auvergne-rhone-alpes", "nouvelle-aquitaine"], ville: "Lyon & Angoulême", diplomes: ["Dessinateur Praticien", "RNCP Niv. 6 & 7"],
    tarif: "6 000 € à 9 000 € / an (Établissement privé)",
    pourquoiTarif: "École supérieure privée reconnue par l'État (hors budget public) : les frais financent 30h+/semaine d'ateliers de dessin d'observation, modèles vivants et intervenants d'édition.",
    cursus: "Dessinateur Praticien, Concepteur Artistique, Édition, Bande Dessinée, Animation & Jeu Vidéo"
  },
  {
    nom: "La Poudrière", url: "https://www.poudriere.eu/", categorie: "École du Film d'Animation", statut: "prive",
    secteur: "auvergne-rhone-alpes", secteurs: ["auvergne-rhone-alpes"], ville: "Valence", diplomes: ["RNCP Niv. 7 Réalisateur"],
    tarif: "~4 500 € / an (Bourses CNC & prise en charge pro possibles)",
    pourquoiTarif: "Association spécialisée soutenue par le CNC et la filière animation : participation modérée couvrant la production des films de fin d'études.",
    cursus: "Réalisation et Mise en Scène de Films d'Animation"
  },
  {
    nom: "Rubika (Supinfocom / Supinfogame)", url: "https://rubika-edu.com/", categorie: "École Supérieure Animation & Jeu", statut: "prive",
    secteur: "hauts-de-france", secteurs: ["hauts-de-france"], ville: "Valenciennes", diplomes: ["RNCP Niv. 7", "Master"],
    tarif: "5 650 € (Prépa) à 9 900 € / an (ou 0 € en alternance)",
    pourquoiTarif: "Établissement supérieur privé autofinançant ses stations de travail 3D, licences moteurs de jeu, fermes de rendu et jurys internationaux.",
    cursus: "Réalisateur Numérique Animation 3D/2D, Game Art & Environment Design (RNCP Niv. 7)"
  },
  {
    nom: "École de Condé", url: "https://ecoles-conde.com/lecole-de-conde/", categorie: "École Supérieure de Design", statut: "prive",
    secteur: "multi-campus", secteurs: ["multi-campus", "ile-de-france", "auvergne-rhone-alpes", "nouvelle-aquitaine", "grand-est", "occitanie-sud", "ouest"], ville: "Paris, Lyon, Bordeaux, Nancy, Nice, Toulouse, Rennes", diplomes: ["Bachelor", "Mastère RNCP Niv. 7"],
    tarif: "7 400 € à 8 700 € / an (ou 0 € en Mastère alternance)",
    pourquoiTarif: "Réseau d'enseignement supérieur privé (hors subventions publiques) : gratuité possible en cycle Mastère grâce au contrat d'apprentissage.",
    cursus: "Bachelor & Mastère Design Graphique, Illustration & BD, Animation, Restauration du Patrimoine"
  },
  {
    nom: "ESMA (Métiers Artistiques)", url: "https://www.esma-artistique.com/", categorie: "École Supérieure d'Arts Appliqués", statut: "prive",
    secteur: "occitanie-sud", secteurs: ["occitanie-sud", "auvergne-rhone-alpes", "ouest", "multi-campus"], ville: "Montpellier, Toulouse, Lyon, Nantes, Rennes", diplomes: ["RNCP Niv. 6 & 7"],
    tarif: "6 000 € à 9 000 € / an selon le cycle",
    pourquoiTarif: "École technique privée : les frais de scolarité financent les infrastructures matérielles 3D/VFX, les logiciels de production et l'encadrement studio.",
    cursus: "Cycle Pro Cinéma d'Animation 3D & Effets Spéciaux, Concept Art, Design Graphique"
  },
  {
    nom: "Brassart", url: "https://www.brassart.fr/", categorie: "École de Design & Arts Graphiques", statut: "prive",
    secteur: "multi-campus", secteurs: ["multi-campus", "ile-de-france", "auvergne-rhone-alpes", "nouvelle-aquitaine", "grand-est", "ouest", "occitanie-sud"], ville: "15 campus en France (Tours, Nantes, Lyon, Bordeaux, etc.)", diplomes: ["RNCP Niv. 6 & 7"],
    tarif: "5 400 € à 9 200 € / an (ou 0 € en alternance)",
    pourquoiTarif: "École privée délivrant des titres RNCP : payante en formation initiale, prise en charge par l'entreprise lors des années en alternance.",
    cursus: "Direction Artistique, Illustration & BD, Animation 3D, Concept Art"
  },
  {
    nom: "New3dge", url: "https://www.new3dge.com/", categorie: "École Supérieure Game Art & VFX", statut: "prive",
    secteur: "ile-de-france", secteurs: ["ile-de-france"], ville: "Paris", diplomes: ["RNCP Concept Art & VFX"],
    tarif: "7 500 € à 9 500 € / an (Alternance possible)",
    pourquoiTarif: "École supérieure privée spécialisée faisant intervenir directement des artistes seniors de studios internationaux (Concept Art, Game Art & VFX).",
    cursus: "Concept Art, Character Design, Environment Art, Game Art & VFX"
  },
  {
    nom: "Penninghen", url: "https://www.penninghen.fr/", categorie: "École Supérieure de Direction Artistique", statut: "prive",
    secteur: "ile-de-france", secteurs: ["ile-de-france"], ville: "Paris (6e)", diplomes: ["Mastère RNCP Niv. 7"],
    tarif: "10 990 € (1re année) à 15 990 € / an",
    pourquoiTarif: "Établissement supérieur privé historique au cœur de Paris : financement 100 % privé des ateliers intensifs et du corps professoral issu des grandes agences.",
    cursus: "Mastère Direction Artistique, Communication & Image"
  },
  {
    nom: "CESAN", url: "https://www.cesan.fr/", categorie: "École Spécialisée BD & Illustration", statut: "prive",
    secteur: "ile-de-france", secteurs: ["ile-de-france"], ville: "Paris", diplomes: ["Bachelor BD & Illustration"],
    tarif: "6 900 € à 7 500 € / an",
    pourquoiTarif: "École privée spécialisée à effectifs réduits : les frais couvrent l'accompagnement individuel par des auteurs de bande dessinée et éditeurs en activité.",
    cursus: "Bachelor Auteur de Bande Dessinée, Roman Graphique & Illustration"
  },
  {
    nom: "Tuto.com (Partenaire Formation & Parcours CPF)", url: "https://fr.tuto.com/", searchUrl: "https://fr.tuto.com/recherche/?q=", categorie: "Plateforme Francophone & Parcours Mentorés CPF", statut: "plateforme", cpf: true,
    secteur: "en-ligne", secteurs: ["en-ligne"], ville: "100% En ligne", diplomes: ["Cours vidéo à l'unité", "Parcours Mentorés CPF", "TOSA Adobe RS"],
    tarif: "Tutoriels gratuits · Abonnement 34,90 €/mois · Parcours CPF (Reste à charge 150 €)",
    pourquoiTarif: "Modèle hybride : tutoriels d'initiation gratuits ; parcours mentorés finançables par le CPF (sanctionnés par certification TOSA ou bloc RNCP).",
    cursus: "Plateforme historique de formation : Graphisme, Prépresse PDF/X-4, Illustrator, InDesign, Photoshop, Affinity, Blender & Illustration"
  },
  {
    nom: "Digital Painting School (DPS)", url: "https://digitalpainting.school/", categorie: "Plateforme & Communauté Francophone", statut: "plateforme",
    secteur: "en-ligne", secteurs: ["en-ligne"], ville: "100% En ligne", diplomes: ["Programme Indispensable"],
    tarif: "Gratuit (Premiers chapitres & Forum) · ~700 € à 800 € / partie (Accès à vie)",
    pourquoiTarif: "Communauté, défis, magazines et premiers chapitres de chaque cours 100 % gratuits ; le Programme Indispensable complet est payant pour financer le suivi individuel des formateurs.",
    cursus: "Programme Indispensable (Peinture numérique, Dessin d'imagination, Anatomie, Blender 3D & Critiques communautaires)"
  },
  {
    nom: "21 Draw", url: "https://www.21-draw.com/", categorie: "Plateforme Internationale d'Illustration", statut: "plateforme",
    secteur: "en-ligne", secteurs: ["en-ligne"], ville: "100% En ligne", diplomes: ["Masterclasses Artistes"],
    tarif: "~59 $ / an (Abonnement promo) ou ~25 $ par cours à vie",
    pourquoiTarif: "Plateforme payante à tarif accessible car elle produit et rémunère directement des masterclasses d'artistes seniors issus de Disney, Pixar, Marvel et DreamWorks.",
    cursus: "Character Design, Anatomie, Storyboarding & Environnements par des artistes Disney, Pixar et Marvel"
  },
  {
    nom: "École La Fontaine (RNCP & CPF à distance)", url: "https://www.ecolelafontaine.fr/", categorie: "École d'Art 100% en ligne · Éligible CPF", statut: "plateforme", cpf: true,
    secteur: "en-ligne", secteurs: ["en-ligne"], ville: "Enseignement à distance", diplomes: ["Prépa Design", "Bachelor RNCP", "Blocs CPF"],
    tarif: "2 700 € à 4 944 € / an (Finançable CPF sans plafond RNCP, OPCO ou Alternance)",
    pourquoiTarif: "École privée à distance délivrant des titres officiels RNCP : le tarif inclut les corrections personnalisées en visio, les jurys d'examen et le suivi pédagogique.",
    cursus: "Prépa Design, Bachelor Designer Graphique, Bachelor Designer UI, Design d'Espace & Illustration à distance"
  },
  {
    nom: "Artline", url: "https://artline.education/", categorie: "École Supérieure Numérique en ligne", statut: "plateforme",
    secteur: "en-ligne", secteurs: ["en-ligne"], ville: "Enseignement à distance", diplomes: ["Bachelors & Mastères en ligne"],
    tarif: "5 800 € (Prépa) à 6 450 € / an (Bachelors & Mastères)",
    pourquoiTarif: "École supérieure privée 100 % en ligne : les frais couvrent les classes virtuelles hebdomadaires en direct avec des professionnels de studios et les licences pédagogiques.",
    cursus: "Bachelors Concept Art, Illustration, Design Graphique & Motion Design en ligne"
  },
  {
    nom: "Pyramyd Formation (Design, PAO & Prépresse CPF)", url: "https://pyramyd-formation.com/", categorie: "Organisme Référent Chaîne Graphique & CPF", statut: "cpf", cpf: true,
    secteur: "ile-de-france", secteurs: ["ile-de-france", "en-ligne"], ville: "Paris & Distanciel", diplomes: ["Certifications TOSA Adobe", "Parcours PAO CPF"],
    tarif: "Finançable CPF (Plafond RS 1 500 € · Reste à charge 150 € ou 0 € via OPCO/Employeur)",
    pourquoiTarif: "Organisme certifié Qualiopi spécialisé dans les arts graphiques : les parcours Illustrator, InDesign, Photoshop et Prépresse sont adossés aux certifications TOSA (Répertoire Spécifique).",
    cursus: "Maîtrise de la chaîne graphique, Prépresse ISO 12647-2, Adobe InDesign, Illustrator, Photoshop, Typographie & Direction Artistique"
  },
  {
    nom: "CIFAP (Centre de Formation Graphisme & Médias CPF)", url: "https://www.cifap.com/", categorie: "Centre de Formation Continue & CPF", statut: "cpf", cpf: true,
    secteur: "ile-de-france", secteurs: ["ile-de-france"], ville: "Montreuil (Grand Paris)", diplomes: ["Infographiste PAO", "TOSA Adobe RS"],
    tarif: "Finançable CPF, Plan de développement des compétences (OPCO / AFDAS) ou France Travail",
    pourquoiTarif: "Centre professionnel agréé Qualiopi : coûts pris en charge par les droits CPF, l'AFDAS (intermittents/auteurs) ou l'OPCO de l'entreprise.",
    cursus: "Cycles complets Infographiste Metteur en Page PAO, Production Graphique Print & Web, Retouche Chromie et Suite Adobe"
  },
  {
    nom: "Titre Pro Infographiste Metteur en Page (RNCP37943 · Mon Compte Formation)", url: "https://www.moncompteformation.gouv.fr/", categorie: "Diplôme d'État Ministère du Travail · 100% CPF", statut: "cpf", cpf: true,
    secteur: "en-ligne", secteurs: ["en-ligne", "multi-campus", "ile-de-france", "grand-est", "ouest", "auvergne-rhone-alpes"], ville: "France entière & En ligne", diplomes: ["Titre Pro RNCP37943 (Niveau 4 / Bac)", "3 Blocs CCP"],
    tarif: "Finançable CPF sans plafond (RNCP) · Participation forfaitaire 150 € (0 € si demandeur d'emploi)",
    pourquoiTarif: "Enregistré au RNCP (code RNCP37943, ex-RNCP1267) par le Ministère du Travail : échappe au plafond de 1 500 € du Répertoire Spécifique et permet de financer une reconversion complète.",
    cursus: "CCP 1 : Élaborer une proposition graphique · CCP 2 : Réaliser des supports de communication print PDF/X-4 · CCP 3 : Contribuer aux supports numériques"
  },
  {
    nom: "Certifications TOSA Adobe (Illustrator, Photoshop, InDesign · RS)", url: "https://www.isograd.com/FR/tosa.php", categorie: "Certification Officielle Répertoire Spécifique (CPF)", statut: "cpf", cpf: true,
    secteur: "en-ligne", secteurs: ["en-ligne", "multi-campus"], ville: "Passage en ligne ou Centre agréé", diplomes: ["TOSA Illustrator", "TOSA Photoshop", "TOSA InDesign"],
    tarif: "Plafond CPF Répertoire Spécifique : 1 500 € max + Ticket modérateur 150 €",
    pourquoiTarif: "Toute formation courte aux logiciels Adobe financée par le CPF doit obligatoirement inclure le passage d'une certification du Répertoire Spécifique (TOSA ou Adobe Certified Professional).",
    cursus: "Évaluation adaptative sur 1000 points attestant du niveau opérationnel (Initial, Basique, Opérationnel, Avancé, Expert) sur Illustrator, Photoshop et InDesign"
  }
];

const THEMES_PROGRAMME_DATA = [
  { id: "theme-1", code: "THÈME 01", pole: "dessin", titre: "Contrôle du Geste, Lignes, Ellipses & Formes Simples", norme: "Départ de l'épaule · Tracé fantôme · Ellipses sur axe · 5 Formes primaires", resume: "Libérer le geste depuis l'épaule, tracer des droites et des ellipses régulières à main levée, bâtir 5 cylindres et décomposer 10 objets en formes géométriques simples.", coursIds: ["cours-d01-visuelle-trait"], objectifs: ["Tracer des droites et ellipses franches à main levée sans règle", "Construire 5 cylindres et 10 objets par formes simples"] },
  { id: "theme-2", code: "THÈME 02", pole: "dessin", titre: "Perspective Spatiale & Construction des Volumes", norme: "Géométrie descriptive · Ligne d'horizon & 1 à 3 points de fuite · Ellipses", resume: "Inscrire tout objet complexe dans une boîte englobante en perspective juste.", coursIds: ["cours-d02-geometrie-perspective"], objectifs: ["Converger les fuyantes vers la ligne d'horizon", "Aligner le petit axe d'une ellipse sur l'axe de son cylindre"] },
  { id: "theme-3", code: "THÈME 03", pole: "dessin", titre: "Lumière, Hiérarchie des Valeurs (Notan) & Contrôle des 4 Bords", norme: "Échelle des 5 Valeurs de Sargent · 4 Bords (Net, Ferme, Doux, Perdu)", resume: "Séparer la famille de la lumière de la famille de l'ombre et moduler les bords.", coursIds: ["cours-d03-notan-valeurs", "cours-d04-modulation-bords"], objectifs: ["Respecter la loi de compression tonale", "Hiérarchiser les bords tranchants au point focal"] },
  { id: "theme-4", code: "THÈME 04", pole: "dessin", titre: "Anatomie Humaine, Modèle Vivant & Mécanique des Drapés", norme: "Construction Loomis · Plans d'Asaro · Contrapposto · 7 Plis d'Atelier", resume: "Bâtir la tête et le corps par leurs repères osseux et dessiner les plis selon leurs points de tension.", coursIds: ["cours-d05-anatomie-portrait", "cours-d06-modele-vivant-dune", "cours-d07-drapes-mecanique-plis"], objectifs: ["Respecter les 3 tiers du visage", "Identifier les 7 types de plis"] },
  { id: "theme-5", code: "THÈME 05", pole: "dessin", titre: "Théorie de la Couleur, Carnation SSS & Composition Cinéma", norme: "Gamut Masking (Gurney) · Diffusion sous-cutanée SSS · Cadrages 2.39:1 & 16:9", resume: "Maîtriser le dialogue thermique chaud/froid, la translucidité de la peau et le cadrage en 3 plans.", coursIds: ["cours-d08-gamut-masking-harmonie", "cours-d09-rendu-peau-sss", "cours-d10-composition-cadrage-cinema"], objectifs: ["Appliquer un masque de gamut triangulaire", "Étager premier plan, plan moyen et arrière-plan"] },
  { id: "theme-6", code: "THÈME 06", pole: "graphisme", titre: "Méthodologie Client, Vectoriel Bézier & Identité 1-Bit", norme: "Tangentes orthogonales 0°/90° · Pathfinder · Silhouette 1-Bit noir pur (15 mm)", resume: "Transformer un brief client vague en cahier des charges et tracer des logotypes vectoriels purs.", coursIds: ["cours-g01-brief", "cours-g02-pistes", "cours-g03-bitmap-vectoriel", "cours-g04-bezier", "cours-g05-pathfinder", "cours-g11-logo-1bit"], objectifs: ["Placer les points d'ancrage aux extremums", "Valider chaque logotype en noir et blanc pur (1-Bit)"] },
  { id: "theme-7", code: "THÈME 07", pole: "graphisme", titre: "Typographie Vox-Atypi, Grilles 12 Colonnes & Couleur Normée", norme: "Classification Vox-Atypi · Règle 60-30-10 · Accessibilité WCAG 2.2 (AA >= 4.5:1)", resume: "Structurer l'information sur grille modulaire et maîtriser les espaces RVB, CMJN et Pantone.", coursIds: ["cours-g06-typo-anatomie", "cours-g07-hierarchie-typo", "cours-g08-grilles-composition", "cours-g09-colorimetrie-rvb-cmjn", "cours-g10-pantone-harmonie"], objectifs: ["Concevoir une affiche A5 100% typographique", "Garantir le contraste WCAG 2.2"] },
  { id: "theme-8", code: "THÈME 08", pole: "graphisme", titre: "Normes Prépresse RPIP (ISO 12647-2 / PDF/X-4) & Découpe 1:1", norme: "ISO Coated v2 (FOGRA39) & PSO Coated v3 (FOGRA51) · PDF/X-4 · 300 DPI · CutContour", resume: "Préparer des fichiers prêts pour l'imprimerie et l'atelier : fonds perdus, CutContour, pochoirs et gabarit 1:1.", coursIds: ["cours-g12-prepresse-300dpi", "cours-g13-stickers-cutcontour", "cours-g14-pochoir-ponts", "cours-g15-gabarit-arcade-1-1", "cours-g16-organisation-atelier-nommage"], objectifs: ["Exporter un PDF/X-4 certifié à 300 DPI avec 3 mm de fond perdu", "Tracer un filet CutContour 100% Magenta 0.25 pt"] }
];

if (typeof window !== 'undefined') {
  window.METIERS_DATA = METIERS_DATA;
  window.SCHOOLS_DIRECTORY_DATA = SCHOOLS_DIRECTORY_DATA;
  window.SECTEURS_GEOGRAPHIQUES = SECTEURS_GEOGRAPHIQUES;
  window.THEMES_PROGRAMME_DATA = THEMES_PROGRAMME_DATA;
}
