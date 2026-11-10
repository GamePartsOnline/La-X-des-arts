// =====================================================================
// REGISTRE DU STAGE GRAPHISTE 4 SEMAINES (J01 À J20) - GPO SARL
// INTÉGRATION DES CAHIERS 07, 08, 09, 10, PROJET FOIRE DE CHÂLONS 2027 & TUTEUR
// =====================================================================

const DEFAULT_STAGE_LESSONS = [
  { id: "lecon-d01", semaine: 1, filiere: "dessin", num: "L-01", titre: "J01-J02 · Contrôle du geste, lignes, ellipses, cylindres & 10 objets en formes simples (Cahier 07 Ex. 1 à 3)", image: "assets/session_sargent_croquis.jpg", consigne: "Ex. 1 (20 min) : séries de lignes H/V/diagonales et relier 2 points sans règle. Ex. 2 (20 min) : page de cercles/ellipses et 5 cylindres simples. Ex. 3 (25 min) : construire 10 objets par carrés, rectangles, cercles, triangles et cylindres (tasse, lampe, joystick, haut-parleur, caisse).", support: "Cahier 07 Trait et dessin (Ex. 1 à 3) · Feuilles A4 datées HB/2B", status: "validee", note: "Acquis", commentAdmin: "Exemple validé (Acquis) : geste franc depuis l'épaule, ellipses bien arrondies et construction géométrique visible sur les objets.", dateValidation: "2026-11-09" },
  { id: "lecon-d02", semaine: 1, filiere: "dessin", num: "L-02", titre: "J02 · Contour continu & dessin d'observation sans gommer (Cahier 07 Ex. 4 & 5)", image: "assets/planche_pedagogique_shape_language.jpg", consigne: "Choisir un objet réel de l'atelier GPO. Le dessiner en contour continu (15 min) puis en observation des proportions (30 min, interdiction de gommer pendant les 10 premières minutes).", support: "Cahier 07 Trait et dessin · Objet réel GPO", status: "a_faire", note: "-", commentAdmin: "À réaliser après la leçon d'exemple L-01.", dateValidation: null },
  { id: "lecon-d03", semaine: 1, filiere: "dessin", num: "L-03", titre: "J03 · Ombres, volumes & perspective de borne d'arcade (Cahier 07 Ex. 6 & 7)", image: "assets/masterclass_sargent_methode_correction.jpg", consigne: "Dessiner cube, sphère, cylindre et cône sous source lumineuse unique (ombre propre/portée), puis construire une boîte en perspective et la transformer en borne d'arcade.", support: "Cahier 07 Trait et dessin · Étude d'atelier", status: "a_faire", note: "-", commentAdmin: "Non démarrée.", dateValidation: null },
  { id: "lecon-d04", semaine: 1, filiere: "dessin", num: "L-04", titre: "J03 · Même objet en 3 styles : réaliste, cartoon & pictogramme (Cahier 07 Ex. 8)", image: "assets/planche_pedagogique_edge_control.jpg", consigne: "Dessiner le même objet d'atelier en 3 langages graphiques distincts : version réaliste, version cartoon et pictogramme simplifié (45 min).", support: "Cahier 07 Trait et dessin · Planche comparative", status: "a_faire", note: "-", commentAdmin: "Non démarrée.", dateValidation: null },
  { id: "lecon-d05", semaine: 1, filiere: "dessin", num: "L-05", titre: "J04 · 12 Silhouettes noires lisibles pour sticker/pochoir (Cahier 07 Ex. 9)", image: "assets/planche_pedagogique_drapes_plis.jpg", consigne: "Créer 12 petites silhouettes noires liées à l'univers du jeu (arcade, flipper, baby-foot, jukebox) immédiatement reconnaissables sans détails intérieurs.", support: "Cahier 07 Trait et dessin · Test 1-Bit", status: "a_faire", note: "-", commentAdmin: "Non démarrée.", dateValidation: null },
  { id: "lecon-d06", semaine: 1, filiere: "dessin", num: "L-06", titre: "J04 · Planche de 8 textures au trait & croquis minute (Cahier 07 Ex. 10 & 11)", image: "assets/planche_pedagogique_textures_brosses.jpg", consigne: "Dessiner 8 textures au trait (métal, bois, plastique, rouille, tissu, verre, pierre, caoutchouc) puis réaliser 10 croquis d'1 minute et 5 croquis de 3 minutes.", support: "Cahier 07 Trait et dessin · Vocabulaire graphique", status: "a_faire", note: "-", commentAdmin: "Non démarrée.", dateValidation: null },
  { id: "lecon-d07", semaine: 1, filiere: "dessin", num: "L-07", titre: "J04-J05 · Exploration de 5 Fiches Métiers du Graphisme (Cahier 09 Orientation)", image: "assets/planche_pedagogique_composition_cinema.jpg", consigne: "Compléter le tableau des 12 métiers à explorer, rédiger 3 à 5 fiches métiers avec sources récentes et préparer la mini-présentation orale de 5 minutes sur ses 2 métiers préférés.", support: "Cahier 09 Découverte des métiers du graphisme", status: "a_faire", note: "-", commentAdmin: "Non démarrée.", dateValidation: null },
  { id: "lecon-d08", semaine: 1, filiere: "dessin", num: "L-08", titre: "J05 · Journée Création GPO & 1er Bilan Hebdomadaire du Rapport", image: "assets/dune_pose_01_paul_cape_vent.jpg", consigne: "Réaliser une première petite mission réelle GPO (sticker, retouche, jeu) et mettre à jour le dossier RAPPORT DE STAGE GPO (découvertes, logiciels, difficultés, solutions).", support: "Fiche 02 Suivi quotidien + Bilan hebdomadaire", status: "a_faire", note: "-", commentAdmin: "Non démarrée.", dateValidation: null },
  { id: "lecon-d09", semaine: 1, filiere: "dessin", num: "L-09", titre: "J06 · Exercice A : Le client vague & questions de cadrage (Cahier 08)", image: "assets/planche_pedagogique_gamut_masking.jpg", consigne: "Face à la demande « Je veux des stickers rétro sur le thème de l'arcade pour vendre sur un événement », rédiger toutes les questions indispensables avant de dessiner.", support: "Cahier 08 Graphisme appliqué · Exercice A", status: "a_faire", note: "-", commentAdmin: "Non démarrée.", dateValidation: null },
  { id: "lecon-d10", semaine: 1, filiere: "dessin", num: "L-10", titre: "J07 · Exercice B : Un sujet, 3 directions graphiques (Cahier 08)", image: "assets/session_sargent_croquis.jpg", consigne: "Créer 3 pistes franchement différentes pour un même sujet GPO : 1) Rétro années 80, 2) Moderne minimaliste, 3) Illustré/cartoon, et argumenter ses choix.", support: "Cahier 08 Graphisme appliqué · Exercice B", status: "a_faire", note: "-", commentAdmin: "Leçon finale de Semaine 1.", dateValidation: null },
  { id: "lecon-g01", semaine: 2, filiere: "graphisme", num: "L-11", titre: "J07-J08 · Exercice C : Affiche A5/A4 100% Typographique « SOIRÉE ARCADE » (Cahier 08)", image: "assets/mockup_plateforme_web_la_croisee_des_arts.jpg", consigne: "Composer une affiche uniquement avec du texte (SOIRÉE ARCADE / Vendredi 20 h / Entrée libre / GPO SARL) en travaillant hiérarchie, lisibilité, espaces et alignements.", support: "Cahier 08 Graphisme appliqué · Exercice C", status: "a_faire", note: "-", commentAdmin: "Semaine 2 · Verrouillée.", dateValidation: null },
  { id: "lecon-g02", semaine: 2, filiere: "graphisme", num: "L-12", titre: "J08-J10 · Exercices D & H : Vectoriser un croquis, 6 dossiers & versions V01 à FINAL", image: "assets/session_bladerunner_lineart.jpg", consigne: "Vectoriser proprement un croquis personnel (version couleur + version 1 couleur), ranger le projet dans 01_BRIEF à 06_ARCHIVES et traiter 3 corrections client (V01 -> V02 -> BAT -> FINAL).", support: "Cahier 08 Exercices D & H · Arborescence GPO", status: "a_faire", note: "-", commentAdmin: "Semaine 2 · Verrouillée.", dateValidation: null },
  { id: "lecon-g03", semaine: 2, filiere: "graphisme", num: "L-13", titre: "J11-J15 · Semaine 3 : Planche de Stickers GPO — Foire de Châlons 2027 (Prix public 10 €)", image: "assets/planche_pedagogique_textures_brosses.jpg", consigne: "Étudier le cahier des charges Foire de Châlons 2027, réaliser un moodboard + 15 à 20 croquis, finaliser la collection (petits/moyens/principal), optimiser la planche avec CutContour et présenter en 5-10 min.", support: "Dossier 03 Semaine 3 · Projet Stickers Foire 2027", status: "a_faire", note: "-", commentAdmin: "Semaine 3 · Projet phare.", dateValidation: null },
  { id: "lecon-g04", semaine: 2, filiere: "graphisme", num: "L-14", titre: "J16-J17 · Exercices F & G : Habillage Borne d'Arcade 1:1 & Pochoir 1 couleur (Cahier 08)", image: "assets/session_burton_encre.jpg", consigne: "Imaginer une façade ou un side art de borne sur gabarit réel (zones écran, boutons, vis, coupe) et créer un pochoir utilisable par GPO en vérifiant ponts et parties flottantes.", support: "Cahier 08 Exercices F & G · Fabrication GPO", status: "a_faire", note: "-", commentAdmin: "Semaine 4 · Autonomie.", dateValidation: null },
  { id: "lecon-g05", semaine: 2, filiere: "graphisme", num: "L-15", titre: "J19-J20 · Évaluation Finale (Mêmes sujets J01) & Mini-Portfolio de 3 à 5 Projets (Cahier 10)", image: "assets/planche_pedagogique_edge_control.jpg", consigne: "Refaire l'évaluation de début de stage dans les mêmes conditions pour mesurer la progression, finaliser le mini-portfolio de 3 à 5 projets (demande -> recherches -> essais -> erreurs -> corrections -> final) et le présenter en 8 à 10 min.", support: "Cahier 10 Mini-portfolio & Évaluation Fin de Stage", status: "a_faire", note: "-", commentAdmin: "Semaine 4 · Bilan final.", dateValidation: null }
];

const STAGE_4_WEEKS_PROGRAM = [
  {
    semaine: 1, code: "SEMAINE 1 (J01 à J05)", titre: "Découverte de GPO SARL, Méthode de Travail & Niveau de Départ",
    objectif: "Découvrir les activités de GPO SARL (4 rue des Jardins, 51330 Givry-en-Argonne : bornes d'arcade, flippers, baby-foot, jukebox, stickers, pochoirs, signalétique), passer l'évaluation initiale sans aide et travailler le trait d'observation.",
    jours: [
      { jour: "Jour 1", titre: "Accueil GPO SARL, Rapport de stage & Évaluation de début", detail: "Matin : Visite des locaux, matériel, chaîne de production (demande -> idée -> création -> validation -> impression/fabrication) et ouverture du dossier RAPPORT DE STAGE GPO. Après-midi : Évaluation ÉLÈVE de début de stage (2h30-3h sans aide : 10 lignes/ellipses/cube, bouteille + chaussure + borne d'arcade, sticker 80x80mm, affiche A5 SOIRÉE ARCADE, questions client vague, 5 questions techniques, rangement 6 dossiers)." },
      { jour: "Jour 2", titre: "Observation, Trait & Comprendre un Brief Graphique", detail: "2 à 3 exercices courts du Cahier 07 Trait et dessin (lignes, ellipses, 10 objets en formes simples). Identification des 10 éléments d'un brief (client, cible, produit, format, dimensions, couleurs, style, éléments obligatoires, contraintes, délai) et rédaction d'un mini-brief." },
      { jour: "Jour 3", titre: "Création Graphique Appliquée aux Jeux GPO", detail: "Croquis d'observation d'un jeu réel GPO (proportions, perspective, simplification). Particularités d'habillage : fronton, side art, panneau, caisse, plateau de flipper. Travail à l'échelle et zones de découpe." },
      { jour: "Jour 4", titre: "Stickers, Découpe, Impression & Découverte des Métiers", detail: "Vectoriel vs bitmap, résolution 300 DPI, RVB vs CMJN, fonds perdus, traits de coupe, contour de découpe (CutContour) et marges. Création d'une petite série de stickers tests. Démarrage du Cahier 09 (choisir 2 à 3 métiers du graphisme à rechercher)." },
      { jour: "Jour 5", titre: "Journée Création GPO & Bilan de Semaine 1", detail: "Mission réelle selon les besoins de l'entreprise (sticker, graphisme de jeu, pochoir, retouche ou signalétique). Fin de journée (15-30 min) : bilan hebdomadaire et mise à jour du rapport de stage." }
    ]
  },
  {
    semaine: 2, code: "SEMAINE 2 (J06 à J10)", titre: "Mise en Situation Professionnelle & Graphisme Appliqué",
    objectif: "Travailler à partir d'un brief client réel, proposer plusieurs pistes avant toute exécution définitive, vectoriser proprement et structurer ses dossiers selon la norme d'atelier GPO.",
    jours: [
      { jour: "Jour 6", titre: "Le Client Vague & Création à partir d'une Demande Réelle", detail: "Exercice A du Cahier 08 (poser toutes les questions avant de dessiner). Analyse d'une vraie ou fausse commande, recherches de références et croquis préparatoires. Aucune réalisation définitive avant validation du concept." },
      { jour: "Jour 7", titre: "Trois Pistes Graphiques & Développement du Projet", detail: "Exercice B du Cahier 08 : proposer 3 directions différentes (rétro années 80, moderne minimaliste, illustré/cartoon). Travail sur composition, typographie (Exercice C affiche A4/A5 sans illustration), couleurs et hiérarchie." },
      { jour: "Jour 8", titre: "Vectorisation & Préparation Professionnelle des Fichiers", detail: "Exercice D : transformer un croquis papier en fichier vectoriel propre (version couleur + version 1 couleur). Organisation dans les 6 dossiers (01_BRIEF, 02_SOURCES, 03_TRAVAIL, 04_VALIDATION, 05_IMPRESSION, 06_ARCHIVES) et nommage (V01, V02, V03, BAT, FINAL, IMPRESSION)." },
      { jour: "Jour 9", titre: "Journée Création GPO (Fiche Mission du Jour)", detail: "Travail libre dirigé sur un besoin réel en cours (jeu en fabrication, habillage graphique, sticker, pochoir, signalétique ou support commercial) avec consigne courte et validation par étape." },
      { jour: "Jour 10", titre: "Mini-Projet Autonome & Bilan de Mi-Stage", detail: "Gestion autonome d'une demande du matin au soir : brief -> recherches -> proposition -> corrections client (Exercice H) -> fichier final. Bilan de mi-stage (acquis, difficultés, objectifs S3-S4)." }
    ]
  },
  {
    semaine: 3, code: "SEMAINE 3 (J11 à J15)", titre: "Projet Professionnel : Planche de Stickers Foire de Châlons 2027",
    objectif: "Concevoir de A à Z un véritable produit GPO destiné à être vendu lors de la Foire de Châlons 2027 : Planche de stickers au prix public envisagé de 10 €.",
    jours: [
      { jour: "Jour 11", titre: "Lancement & Étude du Projet Foire de Châlons 2027", detail: "Analyse des 10 questions du cahier des charges (cible, univers, taille de planche, nombre et formats de stickers, identité GPO sans simple publicité). Création du moodboard et d'au moins 15 à 20 croquis d'idées rapides." },
      { jour: "Jour 12", titre: "Sélection des Concepts & Premiers Stickers Définitifs", detail: "Sélection des meilleures idées et vectorisation des premiers stickers définitifs : cohérence graphique, lisibilité à 1 mètre, diversité des formes et faisabilité de découpe." },
      { jour: "Jour 13", titre: "Finalisation de la Collection & Équilibre de la Série", detail: "Corrections des créations retenues, création des stickers complémentaires et recherche d'équilibre entre petits stickers, moyens stickers et sticker principal. Propositions de disposition sur la planche." },
      { jour: "Jour 14", titre: "Préparation de la Planche Professionnelle d'Impression", detail: "Montage du fichier de production : dimensions réelles, espacement entre stickers, contours de découpe CutContour, marges, optimisation de la surface vinyle et simulation visuelle du produit terminé (Planche 10 €)." },
      { jour: "Jour 15", titre: "Prototype, Tests & Présentation Orale (5 à 10 min)", detail: "Si planning/matériel le permettent : impression d'un prototype, contrôle des dimensions, test de découpe et de collage. Présentation orale professionnelle de 5 à 10 minutes et archivage pour le rapport et le portfolio." }
    ]
  },
  {
    semaine: 4, code: "SEMAINE 4 (J16 à J20)", titre: "Autonomie, Pochoirs, Mini-Portfolio & Évaluation Finale",
    objectif: "Travailler en autonomie sur les jeux GPO, maîtriser les contraintes physiques du pochoir, passer l'évaluation finale comparative et présenter son mini-portfolio.",
    jours: [
      { jour: "Jour 16", titre: "Projet Graphique Réel pour un Jeu GPO (Cahier 08 Ex. G)", detail: "Travail autonome avec dimensions et contraintes sur une borne d'arcade, un flipper, un panneau ou une restauration graphique (prévoir zones à éviter : écran, boutons, vis, ouvertures, coupe)." },
      { jour: "Jour 17", titre: "Pochoirs et Fabrication d'Atelier (Cahier 08 Ex. F)", detail: "Comprendre les différences entre dessin d'impression, dessin de découpe, sticker et pochoir. Créer un pochoir une couleur exploitable par GPO en vérifiant ponts de maintien, parties flottantes, épaisseur et solidité." },
      { jour: "Jour 18", titre: "Journée Création GPO (Production Prioritaire)", detail: "Journée flexible dédiée aux commandes et besoins réels de l'entreprise et à la finalisation des travaux entamés." },
      { jour: "Jour 19", titre: "Évaluation Finale (Mêmes sujets J01) & Mini-Portfolio (Cahier 10)", detail: "Matin : Évaluation ÉLÈVE de fin de stage (exactement les mêmes exercices qu'au Jour 1, dans les mêmes conditions, sans montrer l'ancienne production avant la fin). Après-midi : comparaison Début/Fin, sélection de 3 à 5 projets pour le Mini-Portfolio et clôture du rapport." },
      { jour: "Jour 20", titre: "Présentation Orale (8 à 10 min) & Entretien de Fin de Stage", detail: "Matin : Vérification du rangement des fichiers et du rapport de stage. Présentation orale du Mini-Portfolio (8 à 10 min sans lire un texte préparé). Après-midi : Entretien final (points forts, logiciels maîtrisés, métiers envisagés) et bilan sur 10 critères professionnels." }
    ]
  }
];

const STAGE_BROCHURE_LINKS = {
  entreprise: "GPO SARL · 4 rue des Jardins, 51330 Givry-en-Argonne · Durée : 4 semaines (20 jours)",
  regleOr: "Une mission à la fois · Une consigne courte · Une validation avant de passer à la suite · En fin de journée : sauvegarde + 10 à 15 min de notes pour le rapport.",
  filRouge: "Ne jamais montrer uniquement le résultat final dans son rapport ou son portfolio. Toujours documenter : la demande -> les recherches -> les essais -> les erreurs -> les corrections -> le résultat final.",
  dossiers6: ["01_BRIEF", "02_SOURCES", "03_TRAVAIL", "04_VALIDATION", "05_IMPRESSION", "06_ARCHIVES"],
  versions6: ["V01", "V02", "V03", "BAT", "FINAL", "IMPRESSION"],
  trameRapport10: [
    "1. Présentation de la stagiaire", "2. Présentation de GPO SARL", "3. Les activités de l'entreprise (jeux, arcade, impression, signalétique)",
    "4. Le métier de graphiste", "5. Les outils et logiciels utilisés", "6. Les projets réalisés pendant le stage",
    "7. Présentation détaillée d'un projet (ex. Planche Stickers Foire de Châlons 2027)", "8. Difficultés rencontrées et solutions trouvées",
    "9. Compétences acquises", "10. Bilan personnel et conclusion"
  ]
};

const TUTEUR_CONFIDENTIAL_DATA = {
  avertissement: "DOSSIER 90_TUTEUR_NE_PAS_DONNER : Ces barèmes et grilles de correction sont strictement réservés au maître de stage (Admin). Ne jamais donner tous les documents à la stagiaire le premier jour.",
  bareme100: [
    { partie: "Partie 1 · Trait et dessin d'observation (35 min)", points: 20, detail: "Ex. 1 : 10 lignes, 10 ellipses, cube -> objet (5 pts : précision, régularité, construction, perspective, propreté). Ex. 2 : Bouteille, chaussure et borne d'arcade sans décalquer (15 pts : proportions /4, observation /3, construction /3, assurance /2, volumes /2, présentation /1)." },
    { partie: "Partie 2 · Composition et création graphique (35 min)", points: 20, detail: "Sticker carré ou découpé 80 x 80 mm max thème « arcade / jeu », 3 couleurs max (Originalité /5, Composition /4, Lisibilité /3, Couleurs /3, Respect contraintes /3, Finition /2)." },
    { partie: "Partie 3 · Typographie et mise en page (25 min)", points: 15, detail: "Affiche A5 uniquement texte : SOIRÉE ARCADE / Vendredi 20 h / Entrée libre / GPO SARL (Hiérarchie /4, Lisibilité /3, Choix typo /3, Alignements & espaces /3, Présentation /2)." },
    { partie: "Partie 4 · Compréhension d'un brief client (20 min)", points: 15, detail: "Questions posées face au brief vague : Cible /2, Format /2, Quantité /1, Style /2, Couleurs /1, Support & découpe /2, Prix /1, Délai /1, Lieu de vente /1, Validation /1, Pertinence /1." },
    { partie: "Partie 5 · Technique et préparation de fichier (25 min)", points: 15, detail: "1. Vectoriel vs bitmap (/3) · 2. Résolution impression (/2) · 3. Fonds perdus (/2) · 4. RVB vs CMJN (/2) · 5. Contour de découpe (/2) · 6. Rangement dans les 6 dossiers (/2) · 7. Nommage de 3 versions successives (/2)." },
    { partie: "Partie 6 · Organisation, autonomie et présentation", points: 15, detail: "Observée pendant l'épreuve : Compréhension consignes /2, Poste de travail /2, Organisation fichiers /2, Gestion du temps /2, Autonomie /3, Explication des choix /2, Réaction aux remarques /2." }
  ],
  lectureScore: "0 à 39 : bases encore fragiles · 40 à 59 : bases présentes mais travail très accompagné · 60 à 74 : niveau satisfaisant · 75 à 89 : bonnes bases et autonomie en progression · 90 à 100 : très bonne maîtrise.",
  piloteEcoleStructure: "1. Démonstration courte -> 2. Exercice guidé -> 3. Exercice libre -> 4. Retour individuel -> 5. Projet réel -> 6. Présentation finale."
};

function getStageLessons() { return []; }
function saveStageLessons() { throw new Error('Connexion au serveur requise'); }

if (typeof window !== 'undefined') {
  Object.assign(window, { DEFAULT_STAGE_LESSONS, STAGE_4_WEEKS_PROGRAM, STAGE_BROCHURE_LINKS, TUTEUR_CONFIDENTIAL_DATA, getStageLessons, saveStageLessons });
}
