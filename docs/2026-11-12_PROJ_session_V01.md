# Session du 12 novembre 2026

## Projet

- Chemin : C:/DEV/la-croisee-des-arts
- Dépôt : https://github.com/GamePartsOnline/La-X-des-arts
- Branche de déploiement documentée : main. Le précédent push des images était parti sur master ; envoyer le présent checkpoint vers main.
- Serveur local démarré en arrière-plan : http://localhost:5173
- Domaine choisi par l’utilisateur : https://lacroiseedesarts.gposarl.com ; entrée A déclarée créée vers 37.59.104.240. Configuration Coolify et déploiement non vérifiés.
- URL provisoire : https://x7k8orymdtzotwdncyfwiuuj.37.59.104.240.sslip.io/

## Changements réalisés

- Images D-02 et D-03 intégrées, commit précédent fd558f1.
- Changement de mot de passe stagiaire : mot de passe actuel obligatoire, 12 à 256 caractères, confirmation côté interface, révocation des anciennes sessions.
- Aucun cours validé par défaut ; réinitialisation sans validation automatique.
- Page Signaler un bug pour les profils connectés, stockage SQLite, liste personnelle, accès global et résolution pour admin.
- Correction showCustomToast : adaptateur vers showAtelierToast. Signalement de test envoyé et confirmation vérifiée au navigateur ; seul signalement de test supprimé ensuite.
- RSS Le Journal des Arts ajouté au bot des actualités, réponse HTTP 200 vérifiée.
- Dédoublonnage des actualités locales et serveur.
- Sélection de 10 annonces sourcées dans js/jobs-verified.js, dont certaines devront être exclues selon les dernières consignes métier.
- Veille automatique toutes les 6 heures : AFJV RSS, 10 pages ProfilCulture et CIPAC, stockage SQLite external_jobs et jobs_watch_runs ; actualisation manuelle admin.
- Première collecte : 78 annonces, 77 après dédoublonnage ; 83 affichables avec la sélection manuelle avant le resserrement métier demandé ensuite.
- Pagination harmonisée à 10 éléments : Jobs, actualités, signalements. Signalements paginés côté serveur.
- Recherche et filtres Jobs ; échéances connues masquées après clôture ; dates et sources affichées.
- Documentation du domaine corrigée.

## Vérifications

- npm test : 16 tests réussis, dernière exécution avant arrêt.
- Vérifications de syntaxe et git diff --check réussies.
- Test navigateur : connexion stagiaire, page signalements, ouverture du formulaire mot de passe, envoi avec confirmation, page Jobs.
- Nouvelle pagination à 10 testée côté serveur ; contrôle visuel final restant.

## Reprise prioritaire

1. Corriger encodage des titres importés : ne pas convertir tout un document UTF-8 en Windows-1252 à cause de quelques caractères invalides. Les données SQLite locales contiennent déjà des titres corrompus.
2. Exclure animation touristique, enfants et événementiel. Ces dernières exclusions ne sont PAS encore implémentées.
3. Vérifier le compteur : utilisateur signale 6 annonces visibles contre 83 annoncées. Ne pas reprendre ce nombre comme total métier validé.
4. Corriger c.blocLabel.split dans le tableau de bord stagiaire quand blocLabel manque, puis retester la restauration de session.
5. Galerie : tâche demandée à noter, chaque stagiaire doit voir uniquement sa propre galerie liée à son compte. Pas encore modifiée.
6. Vérifier activation/désactivation des cours dans le déploiement : boutons présents dans le suivi admin ; l’interrupteur de détail a été supprimé dans un commit précédent. Clarifier accès aux cours versus validation des acquis si nécessaire.
7. Vérifier publication Coolify sur main et nouveau domaine.

## Fichiers laissés hors commit

- Deux images originales UUID dans assets, leurs copies nommées sont déjà versionnées.
- .playwright-cli : traces locales de vérification, sans rapport avec le code à déployer.
- Base SQLite locale non versionnée ; les offres de veille seront collectées sur le serveur de déploiement après démarrage.

## Arrêt

L’utilisateur a demandé d’enregistrer la session, d’arrêter, puis de faire un dernier push. Ne pas reprendre les corrections restantes sans nouvelle instruction.
