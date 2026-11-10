# Plan de refonte et feuille de route : La Croisée des Arts V2

Dossier source du fork : C:\DEV\HISTORIQUE_ET_DEMOSCENE\la-croisee-des-arts
Emplacement de travail : C:\DEV\la-croisee-des-arts

## 1. Diagnostic et orientation générale

- Structure étendue : Plateforme double pôle réunissant l'Art / Dessin et le Design Graphique professionnel.
- Directives d'inspiration et de propriété intellectuelle : S'inspirer de la clarté pédagogique et de la progression pratique par paliers (exemples : cycles de 21 jours, ateliers ciblés, décomposition morphologique), tout en produisant un contenu 100 % original, sans aucune reproduction textuelle ou visuelle de supports propriétaires (21 Draw, etc.).

## 2. Piliers pédagogiques par pôle

### Pôle A : Dessin & Peinture Numérique
- Masterclass John Singer Sargent : Méthode Notan binaire, 4 bords et rehauts alla prima.
- Fiches 01 à 08 : Contrôle des bords, Gamut masking, Shape language, Drapés et plis, SSS carnation, Cadrage cinéma, Anatomie vivante, Textures brosses.
- Ateliers chrono : 11 sessions minutées (Sargent, Dune, Mucha, Ghibli, Van Gogh, Arcane, etc.).

### Pôle B : Design Graphique & Prépresse d'Atelier (Référentiel Officiel GPO SARL)
Cursus professionnel articulé en 4 grands axes métier et 10 cours réels :

- Axe 1 : Méthodologie & Relation Client
  - Cours G-01 : Comprendre un Brief Graphique & Analyser la Demande Client (exercice du client vague, 6 questions clés).
  - Cours G-02 : Explorer & Proposer 3 Pistes Graphiques Distinctes (Rétro 80s, Minimaliste Moderne, Illustré/Cartoon).
- Axe 2 : Dessin Vectoriel & Typographie
  - Cours G-03 : Dessin Vectoriel vs Bitmap & Courbes de Bézier (ancrages aux extremums, tangentes orthogonales).
  - Cours G-04 : Typographie, Graisses & Composition d'une Affiche 100% Typo (3 niveaux de lecture, interlignage 135%).
- Axe 3 : Couleur, Prépresse 300 DPI & Découpe
  - Cours G-05 : Systèmes de Couleurs, Nuancier Pantone & Règle 60-30-10 (CMJN vs RVB, tons directs).
  - Cours G-06 : Prépresse Imprimerie, 300 DPI, Fonds Perdus & Noirs (fond perdu 3 mm, zone sécurité 5 mm, FOGRA39, noir 100K).
  - Cours G-07 : Création de Stickers sous Contrainte & Filet de Découpe CutContour (format 80x80 mm, magenta 100%, surimpression).
  - Cours G-08 : Pochoir Découpe Vinyle & Conception de Ponts de Maintien (îlots fermés, ponts de matière 1.5 à 2 mm).
- Axe 4 : Gabarits Industriels, Projets Réels & Gestion d'Atelier
  - Cours G-09 : Gabarit Industriel à l'Échelle 1:1 pour Borne d'Arcade (boutons 28 mm, overbleed 10 mm, flancs miroir).
  - Cours G-10 : Organisation des Fichiers d'Atelier, Versions V01/BAT & Charte de Nommage (arborescence 6 dossiers, ISO-GPO).

## 3. Avancement technique

- [x] Initialisation du fork Git dans C:\DEV\la-croisee-des-arts
- [x] Lancement du serveur HTTP local sur le port 5173
- [x] Refonte complète de la filière Design Graphique : remplacement des dénominations abstraites par 10 cours métier concrets (G-01 à G-10)
- [x] Structuration du Pôle Graphisme en 4 grands axes opérationnels (Méthodologie, Vectoriel/Typo, Prépresse/Découpe, Gabarits/Atelier)
- [x] Suppression définitive de la colonne centrale intermédiaire : affichage direct en pleine largeur avec breadcrumb, navigation précédente/suivante et surbrillance dans l'arborescence latérale
- [x] Module complet de dépôt de fichier pour correction pédagogique dans chaque fiche de cours avec persistance localStorage
- [x] Dashboard Nouvel Élève sur la page d'accueil : onboarding, orientation double filière, 3 premières actions et cours de démarrage (G-01 Brief)
- [x] Boîte à outils interactive : Checklist 300 DPI, nuancier des formules de noir cliquables, échelle UI 8px, arborescence d'atelier GPO et barème d'évaluation en 100 points
- [x] Découpage architectural modulaire strict : 100 % des fichiers de code sous la limite des 300 lignes
- [ ] Ajout d'outils vectoriels interactifs avancés dans le studio canvas
- [ ] Système d'export PDF/SVG des travaux d'ateliers
