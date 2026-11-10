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

### Pôle B : Design Graphique & Typographie (Nouveau)
- Masterclass Paul Rand : Le test de logo en 7 critères, silhouette 1-bit, grille modulaire et zone d'exclusion.
- Fiche G-01 : Typographie, hiérarchie visuelle en 3 niveaux, associations Serif/Sans-Serif et interlignage.
- Fiche G-02 : Prépresse industrielle, conversion CMJN, 300 DPI natif, fonds perdus 3 mm et noir enrichi.
- Fiche G-03 : Vectoriel de précision, courbes de Bézier aux extremums et opérations booléennes.
- Fiche G-04 : Systèmes de couleurs, nuanciers Pantone, règle des 60-30-10 et harmonies triadiques.
- Fiche G-05 : UI / UX Design, grille modulaire de 8px, accessibilité WCAG AA 4.5:1 et composants atomiques.
- Ateliers chrono graphiste : 4 sessions ciblées (Logo 1-bit 15 min, Affiche typo 15 min, Pictogramme Bézier 10 min, Palette 60-30-10 10 min).

## 3. Avancement technique

- [x] Initialisation du fork Git dans C:\DEV\la-croisee-des-arts
- [x] Lancement du serveur HTTP local sur le port 5173
- [x] Ajout de l'onglet et de la vue dédiée "Design Graphique" dans index.html
- [x] Intégration de la section Graphisme dans la barre latérale gauche
- [x] Rédaction et intégration des 6 cours de graphisme dans courses.js
- [x] Filtrage dynamique par discipline (Tous, Dessin, Graphisme) dans app.js
- [x] Ajout des ateliers chrono et travaux de galerie dédiés au graphisme
- [x] Correction du lien de script vers canvas.js
- [ ] Ajout d'outils vectoriels interactifs avancés dans le studio canvas
- [ ] Système d'export PDF/SVG des travaux d'ateliers
