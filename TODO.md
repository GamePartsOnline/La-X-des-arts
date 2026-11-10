# Plan de refonte et feuille de route : La Croisée des Arts V2

Dossier source du fork : C:\DEV\HISTORIQUE_ET_DEMOSCENE\la-croisee-des-arts
Emplacement de travail : C:\DEV\la-croisee-des-arts

## 1. Diagnostic de la version existante

- Structure actuelle : Fiches isolées très théoriques (fiches 01 à 08), masterclass Sargent dense, manque de progressivité pour un apprenant débutant ou intermédiaire.
- Lacunes pédagogiques identifiées : Absence de parcours balisé jour par jour ou module par module, manque d'exercices d'application par étapes décomposées (geste, boîte, volume, ombrage, rendu numérique).
- Directives d'inspiration et de propriété intellectuelle : S'inspirer de la clarté pédagogique et de la progression pratique par paliers (exemples : cycles de 21 jours, ateliers ciblés, décomposition morphologique), tout en produisant un contenu 100 % original, sans aucune reproduction textuelle ou visuelle de supports propriétaires (21 Draw, etc.).

## 2. Piliers pédagogiques du nouveau cursus

### Parcours 1 : Fondations du geste et du dessin de construction
- Module 1.1 : Fluidité du trait, tenue du stylet et posture du bras.
- Module 1.2 : Geste et ligne d'action en 30 secondes.
- Module 1.3 : Construction en volumes primitifs (sphère, cylindre, boîte) dans l'espace.
- Module 1.4 : Perspective intuitive à 1 et 2 points de fuite appliquée aux objets et corps.

### Parcours 2 : Morphologie et anatomie simplifiée pour artistes
- Module 2.1 : Repères osseux clés et proportions du canon humain (repères de Loomis et Bridgman).
- Module 2.2 : La boîte thoracique et le bassin : relations spatiales, inclinaison et contrapposto.
- Module 2.3 : La tête et les plans du visage : méthode des plans simplifiés (type tête d'Asaro).
- Module 2.4 : Membres supérieurs et inférieurs : rythmes musculaires majeurs et insertions.
- Module 2.5 : Mains et pieds : simplification en mitaine, blocs des phalanges et arcs directeurs.

### Parcours 3 : Valeurs, lumière et ombres
- Module 3.1 : Notan binaire (distinction stricte lumière / ombre).
- Module 3.2 : Terminologie de la lumière : ombre propre, terminateur, ombre portée, reflet, occlusion.
- Module 3.3 : Les quatre bords fondamentaux (dur, ferme, doux, perdu) appliqués au volume.

### Parcours 4 : Peinture numérique et workflow professionnel
- Module 4.1 : Organisation des calques (croquis, occlusion, aplat de valeurs, rendu, calques de réglage).
- Module 4.2 : Maîtrise des brosses numériques : brosse dure à opacité variable vs brosse douce texturée.
- Module 4.3 : Du noir et blanc à la couleur : modes de fusion, gamut masking et harmonie des teintes.
- Module 4.4 : Finition, rehauts spéculaires et mise en valeur du point focal.

## 3. Plan d'action technique et fonctionnel

- [ ] Étape 1 : Conception de la nouvelle architecture de données dans courses.js (parcours progressifs, leçons quotidiennes, fiches de synthèse, objectifs clairs).
- [ ] Étape 2 : Révision de l'interface utilisateur (index.html) pour intégrer la navigation par cursus / jours / modules avec indicateurs de progression.
- [ ] Étape 3 : Amélioration de l'atelier de dessin intégré (canvas.js) : gestion de calques simplifiés, raccourcis clavier, outil miroir horizontal, affichage des références côte à côte.
- [ ] Étape 4 : Rédaction intégrale des leçons et des consignes d'exercices pratiques (temps imparti, critères d'auto-évaluation, erreurs fréquentes et remédiations).
- [ ] Étape 5 : Mise à jour du système d'évaluation et de critique dans app.js pour correspondre aux nouveaux critères par palier.
- [ ] Étape 6 : Validation multi-navigateurs et tests d'ergonomie mobile/bureau.
