---
title: "NocoBase v1.9.0-beta.6 : Prise en charge de la séparation des services de tâches asynchrones par environnement et file d'attente d'événements"
description: "Notes de version de v1.9.0-beta.6"
---

### 🎉 Nouvelles fonctionnalités

- **[client]** Ajout de l'option « Focus automatique » pour les composants Input, TextArea, URL et InputNumber, qui focalise automatiquement le champ de saisie lors du rendu initial de la page lorsqu'elle est activée ([#7320](https://github.com/nocobase/nocobase/pull/7320)) par @zhangzhonghe
- **[Gestionnaire de tâches asynchrones]** Prise en charge de la répartition des services de tâches asynchrones par environnement et file d'attente d'événements ([#7241](https://github.com/nocobase/nocobase/pull/7241)) par @mytharcher
- **[Visionneuse de fichiers Office]** Prise en charge de l'aperçu des fichiers Office via l'aperçu en direct Microsoft ([#7300](https://github.com/nocobase/nocobase/pull/7300)) par @mytharcher
- **[Auth : SAML 2.0]** Ajout d'options de configuration liées à la signature par @2013xile
- **[Workflow : Approbation]**

  - Ajout d'un type de modèle en ligne pour la configuration des notifications par @mytharcher
  - Prise en charge de l'utilisation d'un titre de tâche cohérent pour tous les nœuds d'approbation dans un même workflow par @mytharcher

### 🚀 Améliorations

- **[base de données]** Optimisation des performances des requêtes ACL Meta ([#7400](https://github.com/nocobase/nocobase/pull/7400)) par @aaaaaajie
- **[client]**

  - Prise en charge de l'affichage des icônes identifiées par des chaînes de caractères dans le composant Select en mode lecture seule ([#7420](https://github.com/nocobase/nocobase/pull/7420)) par @mytharcher
  - Ajout de la variable de date « avant-hier » ([#7359](https://github.com/nocobase/nocobase/pull/7359)) par @katherinehhh
  - Optimisation des performances lors du changement d'onglets dans les fenêtres contextuelles ([#7353](https://github.com/nocobase/nocobase/pull/7353)) par @zhangzhonghe
  - Ne plus fermer automatiquement le menu après une sélection ([#7252](https://github.com/nocobase/nocobase/pull/7252)) par @kerwin612
- **[Mobile]** Optimisation du composant de fenêtre contextuelle mobile ([#7414](https://github.com/nocobase/nocobase/pull/7414)) par @zhangzhonghe
- **[Workflow]**

  - Mise à jour du menu de sélection des nœuds pour afficher les options dans une disposition à deux colonnes, améliorant ainsi la densité d'information et permettant aux utilisateurs de voir plus d'options à la fois ([#7396](https://github.com/nocobase/nocobase/pull/7396)) par @mytharcher
  - Correction d'un cas de test instable ([#7349](https://github.com/nocobase/nocobase/pull/7349)) par @mytharcher
  - Affichage du titre normal lorsque désactivé ([#7339](https://github.com/nocobase/nocobase/pull/7339)) par @mytharcher
  - Réduction de la quantité de tâches à charger lors de la préparation de l'exécution ([#7284](https://github.com/nocobase/nocobase/pull/7284)) par @mytharcher
- **[Paramètres de licence]** Dans les paramètres de licence, copier le dernier ID d'instance à chaque fois ([#7387](https://github.com/nocobase/nocobase/pull/7387)) par @jiannx
- **[Authentification]** Suppression du paramètre token de l'URL après une connexion réussie ([#7386](https://github.com/nocobase/nocobase/pull/7386)) par @2013xile
- **[Notification : Message in-app]**

  - Suppression des sorties de logs SQL via `console.log` ([#7368](https://github.com/nocobase/nocobase/pull/7368)) par @2013xile
  - Changement du message in-app de SSE à WebSocket ([#7302](https://github.com/nocobase/nocobase/pull/7302)) par @mytharcher
- **[Visionneuse de fichiers Office]** Ajout de la prise en charge de l'aperçu des fichiers `.odt` ([#7347](https://github.com/nocobase/nocobase/pull/7347)) par @mytharcher
- **[Action : Importer des enregistrements Pro]** Prise en charge de la répartition des services d'import/export par environnement et file d'attente d'événements par @mytharcher
- **[Workflow : JavaScript]** Changement du cache en cache d'application pour éviter les bugs en mode cluster par @mytharcher
- **[Impression de modèles]** Prise en charge du champ m2m array par @jiannx
- **[Gestionnaire de sauvegarde]** Amélioration des performances pour l'opération de sauvegarde de base de données MySQL par @gchust
- **[Auth : DingTalk]** Dans le client DingTalk, définir le titre de la barre de navigation sur une chaîne vide au lieu d'afficher « Chargement… » par @2013xile
- **[Gestionnaire de migration]** Prise en charge de la répartition du service de migration par environnement et file d'attente d'événements par @mytharcher

### 🐛 Corrections de bugs

- **[client]**

  - Correction du problème où l'icône était affichée incorrectement lorsque l'URL dans le champ d'URL de pièce jointe contenait des paramètres de requête ([#7432](https://github.com/nocobase/nocobase/pull/7432)) par @mytharcher
  - Traitement du nombre 0 comme vide lors de la validation de vide des règles de liaison ([#7404](https://github.com/nocobase/nocobase/pull/7404)) par @katherinehhh
  - Correction du texte du bouton de lien qui coupait la ligne ([#7406](https://github.com/nocobase/nocobase/pull/7406)) par @mytharcher
  - Correction du problème où la disposition de formulaire multi-colonnes ne se convertissait pas en disposition mono-colonne sur les appareils mobiles ([#7355](https://github.com/nocobase/nocobase/pull/7355)) par @zhangzhonghe
  - Correction d'une erreur lors de la suppression en masse de collections ([#7345](https://github.com/nocobase/nocobase/pull/7345)) par @aaaaaajie
  - Correction du problème où la portée de données précédemment enregistrée n'était pas présélectionnée lors de la configuration individuelle des permissions. ([#7288](https://github.com/nocobase/nocobase/pull/7288)) par @aaaaaajie
  - Correction du problème où les chaînes brutes des variables étaient soumises avec le formulaire ([#7337](https://github.com/nocobase/nocobase/pull/7337)) par @zhangzhonghe
  - Lors de l'utilisation de variables pour définir les valeurs par défaut des champs dans les formulaires de filtre, si la valeur de la variable est vide, la zone de saisie affichera la chaîne de variable d'origine ([#7335](https://github.com/nocobase/nocobase/pull/7335)) par @zhangzhonghe
  - Correction de l'infobulle affichant [object Object] au survol dans le panneau d'actions ([#7322](https://github.com/nocobase/nocobase/pull/7322)) par @katherinehhh
  - Correction du problème de boucle infinie lors de l'analyse des valeurs par défaut des champs ([#7301](https://github.com/nocobase/nocobase/pull/7301)) par @zhangzhonghe
  - Correction de l'élément d'aperçu de fichier sur une URL nulle ([#7315](https://github.com/nocobase/nocobase/pull/7315)) par @mytharcher
  - Correction du problème où le tableau arborescent ne pouvait pas être développé ([#7309](https://github.com/nocobase/nocobase/pull/7309)) par @zhangzhonghe
  - Ajout de l'URL complète au fichier local lors de l'aperçu ([#7314](https://github.com/nocobase/nocobase/pull/7314)) par @mytharcher
  - Correction d'un comportement inattendu dans le tri par glisser-déposer des lignes de tableau ([#6959](https://github.com/nocobase/nocobase/pull/6959)) par @ChimingLiu
  - Problème d'affichage du champ date dans la fenêtre contextuelle du sélecteur de données de champ d'association du formulaire de filtre ([#7290](https://github.com/nocobase/nocobase/pull/7290)) par @katherinehhh
- **[base de données]** Correction du problème où la lecture de tables externes Postgres incluait des vues d'autres schémas ([#7410](https://github.com/nocobase/nocobase/pull/7410)) par @aaaaaajie
- **[serveur]** Certaines requêtes manquent de `ctx.action`, provoquant des erreurs dans le middleware du journal d'audit ([#7369](https://github.com/nocobase/nocobase/pull/7369)) par @2013xile
- **[undefined]** Ajout d'un nouveau plugin au préréglage ([#7319](https://github.com/nocobase/nocobase/pull/7319)) par @mytharcher
- **[utils]** Gestion incorrecte du fuseau horaire pour parseDate ([#7318](https://github.com/nocobase/nocobase/pull/7318)) par @katherinehhh
- **[Bloc : modèle]** Résolution d'un problème où les blocs de courrier n'étaient pas visibles lorsqu'ils étaient placés à l'intérieur d'un bloc de modèle hérité ([#7430](https://github.com/nocobase/nocobase/pull/7430)) par @gchust
- **[Mobile]**

  - Format d'affichage incorrect du champ date sur mobile ([#7412](https://github.com/nocobase/nocobase/pull/7412)) par @katherinehhh
  - Correction du problème où les données de soumission de formulaire dans la boîte de dialogue d'approbation mobile étaient incorrectes ([#7389](https://github.com/nocobase/nocobase/pull/7389)) par @zhangzhonghe
  - Résolution d'un problème où le sélecteur de date sur les appareils mobiles s'affichait incorrectement lorsque des limites de plage de dates étaient appliquées ([#7362](https://github.com/nocobase/nocobase/pull/7362)) par @katherinehhh
- **[Workflow]**

  - Correction d'une erreur levée et de la disparition des données du formulaire lors de l'édition de la catégorie de workflow ([#7408](https://github.com/nocobase/nocobase/pull/7408)) par @mytharcher
  - Correction de la traduction du titre de la page dans le centre de tâches du workflow ([#7392](https://github.com/nocobase/nocobase/pull/7392)) par @mytharcher
  - Refonte du menu « Ajouter un nœud » et correction des problèmes de performance de rendu du canevas de workflow qu'il provoquait ([#7363](https://github.com/nocobase/nocobase/pull/7363)) par @mytharcher
  - Correction du problème de conditions de filtre incorrectes lors de la récupération d'un seul élément à faire ([#7366](https://github.com/nocobase/nocobase/pull/7366)) par @mytharcher
  - Correction du problème de correspondance de mots-clés dans la sélection de champ ([#7356](https://github.com/nocobase/nocobase/pull/7356)) par @mytharcher
  - Éviter une erreur levée causée par la publication dans la file d'attente d'événements lors de l'arrêt ([#7348](https://github.com/nocobase/nocobase/pull/7348)) par @mytharcher
  - Correction du résultat `undefined` lorsque le processeur se termine ([#7317](https://github.com/nocobase/nocobase/pull/7317)) par @mytharcher
  - Correction du problème d'ID BigInt dans MySQL lors de l'enregistrement d'un job ([#7292](https://github.com/nocobase/nocobase/pull/7292)) par @mytharcher
- **[Workflow : nœud mailer]** Correction du problème où le nœud email pouvait ne pas reprendre son exécution correctement ([#7409](https://github.com/nocobase/nocobase/pull/7409)) par @mytharcher
- **[Visionneuse de fichiers Office]**

  - Correction d'une erreur levée lors du téléchargement d'un fichier vers le champ d'URL de pièce jointe ([#7405](https://github.com/nocobase/nocobase/pull/7405)) par @mytharcher
  - Prise en charge des fichiers `.docx`, `.xlsx` et `.pptx` avec seulement une URL pour être prévisualisés ([#7336](https://github.com/nocobase/nocobase/pull/7336)) par @mytharcher
- **[Gestionnaire de fichiers]**

  - Suppression de l'indication pour la limite de taille de téléchargement de fichier ([#7391](https://github.com/nocobase/nocobase/pull/7391)) par @mytharcher
  - Ajout du champ `storageId` à la collection de fichiers pour prendre en charge la configuration des permissions ([#7351](https://github.com/nocobase/nocobase/pull/7351)) par @mytharcher
  - Correction de la permission du champ de stockage ([#7316](https://github.com/nocobase/nocobase/pull/7316)) par @mytharcher
- **[Notification : Message in-app]**

  - Correction des traductions ([#7384](https://github.com/nocobase/nocobase/pull/7384)) par @mytharcher
  - Correction du problème où les messages in-site étaient reçus mais pas affichés dans une fenêtre contextuelle ([#7364](https://github.com/nocobase/nocobase/pull/7364)) par @mytharcher
- **[Calendrier]** Infobulle d'élément d'événement de calendrier affichant [object Object] ([#7372](https://github.com/nocobase/nocobase/pull/7372)) par @katherinehhh
- **[Champ de collection : Formule]** Correction du problème où la saisie de formule ne pouvait pas passer la validation en raison du type de variable ([#7373](https://github.com/nocobase/nocobase/pull/7373)) par @mytharcher
- **[Workflow : Nœud parallèle]** Correction de la suspension du nœud parallèle après la reprise sous MySQL ([#7346](https://github.com/nocobase/nocobase/pull/7346)) par @mytharcher
- **[Workflow : CC]** Correction de l'impossibilité de supprimer les blocs ([#7338](https://github.com/nocobase/nocobase/pull/7338)) par @mytharcher
- **[Visualisation de données]** Problème de variable de date dans la valeur par défaut du champ date dans le bloc de filtre de graphique ([#7291](https://github.com/nocobase/nocobase/pull/7291)) par @katherinehhh
- **[Collection : Arborescence]** Correction de la logique de synchronisation des chemins des collections arborescentes ([#7330](https://github.com/nocobase/nocobase/pull/7330)) par @ChimingLiu
- **[Workflow : Nœud de requête HTTP]** Correction d'un bug de condition de concurrence ([#7310](https://github.com/nocobase/nocobase/pull/7310)) par @mytharcher
- **[Workflow : Nœud de calcul dynamique]** Correction d'une erreur causée par une API héritée ([#7321](https://github.com/nocobase/nocobase/pull/7321)) par @mytharcher
- **[Action : Exporter des enregistrements]** Correction du formatage incorrect des champs relationnels imbriqués lors de l'exportation vers Excel. ([#7277](https://github.com/nocobase/nocobase/pull/7277)) par @aaaaaajie
- **[Action : Importer des enregistrements Pro]** Interdiction d'assigner des champs de relation lors de la détection des doublons d'importation. par @aaaaaajie
- **[Source de données : SQL Server externe]** Correction du format de stockage incohérent pour les champs datetime MSSQL (sans fuseau horaire) provenant de sources de données externes par @aaaaaajie
- **[Workflow : Événement d'action personnalisée]** Effacement des lignes sélectionnées après avoir déclenché avec succès des actions sur plusieurs enregistrements par @mytharcher
- **[Workflow : Sous-flux]** Correction du flux suspendu par @mytharcher
- **[Impression de modèles]** Impression des champs de sélection radio dans plusieurs lignes de données par @jiannx
- **[Stockage de fichiers : S3(Pro)]**

  - Correction du problème où la méthode d'authentification IAM ne pouvait pas être utilisée pour télécharger des fichiers par @mytharcher
  - Dépréciation du paramètre problématique `attachmentField` par @mytharcher
- **[Workflow : Approbation]**

  - Correction du problème où le chargement des données de source de données externe dans les enregistrements d'approbation entraînait une erreur 404 par @mytharcher
  - Ajout d'un titre de tâche pour les éléments ajoutés et délégués par @mytharcher
  - Correction d'une erreur levée depuis la sélection du responsable dans une source de données externe par @mytharcher
  - Correction du problème où la liste des utilisateurs était vide lors du contreseing par @mytharcher
  - Correction de la mise à jour des associations lors de la soumission d'un brouillon par @mytharcher
  - Correction du non-fonctionnement des règles de liaison dans le bloc de détail original de l'approbation par @mytharcher
- **[Gestionnaire de sauvegarde]** Les sauvegardes de fichiers volumineux pouvaient afficher « réussi » avant d'être réellement terminées par @gchust
- **[Gestionnaire de migration]** Ignorer les commandes `\restrict` et `\unrestrict` générées par le dernier pg_dump lors de la création de fichiers de migration pour résoudre les erreurs de restauration. par @2013xile
