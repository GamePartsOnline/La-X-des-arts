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

### Pôle B : Design Graphique & Typographie (Référentiel GPO SARL)
- Fiche G-01 (Masterclass Paul Rand) : Test de logo en 7 critères, silhouette 1-bit, exploration 3 directions et traitement du brief client vague.
- Fiche G-02 (Typographie) : Hiérarchie visuelle en 3 niveaux, calcul d'interlignage 135 %, et affiche A5 100 % typographique sans illustration.
- Fiche G-03 (Prépresse 300 DPI) : Fonds perdus 3 mm, zone tranquille 5 mm, FOGRA39, formules de noir (texte 100K vs enrichi) et vectorisation.
- Fiche G-04 (Outils Vectoriels) : Courbes de Bézier aux extremums, tangentes 0°/90°, Pathfinder et conception de pochoir découpe avec ponts.
- Fiche G-05 (Colorimétrie) : Règle des 60-30-10, tons directs Pantone et sticker sous contrainte 80x80 mm 3 couleurs max avec CutContour.
- Fiche G-06 (Gabarits Industriels) : Habillage de borne d'arcade échelle 1:1, zones d'exclusion techniques (boutons 28mm, écran, vis) et overbleed 10 mm.
- Fiche G-07 (UI Design) : Grille modulaire 8px, accessibilité WCAG AA 4.5:1 et cibles tactiles 44px.
- Fiche G-08 (Guides & Repères) : Grille magnétique 12 colonnes, règle des tiers et baseline grid.

## 3. Avancement technique

- [x] Initialisation du fork Git dans C:\DEV\la-croisee-des-arts
- [x] Lancement du serveur HTTP local sur le port 5173
- [x] Ajout de l'onglet et de la vue dédiée "Design Graphique" dans index.html
- [x] Intégration de la section Graphisme dans la barre latérale gauche
- [x] Rédaction et intégration des 8 cours de graphisme basés sur les documents du pilote d'école de graphisme GPO SARL
- [x] Filtrage dynamique par discipline (Tous, Dessin, Graphisme)
- [x] Module complet de dépôt de fichier pour correction pédagogique dans chaque fiche de cours avec persistance localStorage
- [x] Dashboard Nouvel Élève sur la page d'accueil : onboarding, orientation double filière, 3 premières actions et cours de démarrage
- [x] Boîte à outils interactive : Checklist 300 DPI, nuancier des formules de noir cliquables, échelle UI 8px, arborescence d'atelier GPO et barème d'évaluation en 100 points
- [x] Découpage architectural modulaire strict : 100 % des fichiers de code sous la limite des 300 lignes
- [x] Suppression de la colonne centrale intermédiaire dans l'onglet Cours : affichage direct en pleine largeur avec barre de navigation rapide et surbrillance dans l'arborescence latérale
- [ ] Ajout d'outils vectoriels interactifs avancés dans le studio canvas
- [ ] Système d'export PDF/SVG des travaux d'ateliers
