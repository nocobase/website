---
title: "NocoBase v1.7.0-alpha.14 : prise en charge de l'autorisation commerciale"
description: "Notes de version de v1.7.0-alpha.14"
---

### 🎉 Nouvelles fonctionnalités

- **[client]**

  - Les champs de texte sur une seule ligne prennent désormais en charge la saisie de plusieurs mots-clés pour le filtrage ([#6685](https://github.com/nocobase/nocobase/pull/6685)) par @zhangzhonghe
    Référence : [Filtre multi-mots-clés](https://docs.nocobase.com/handbook/multi-keyword-filter)
  - Les règles de liaison d'action prennent en charge les variables du « formulaire actuel » ([#6810](https://github.com/nocobase/nocobase/pull/6810)) par @katherinehhh
- **[build]** Prise en charge de l'autorisation commerciale ([#6554](https://github.com/nocobase/nocobase/pull/6554)) par @jiannx
- **[undefined]** Ajout du journal du plugin d'importation par @aaaaaajie
- **[Action : Importer des enregistrements]** Ajout du journal du plugin d'importation ([#6841](https://github.com/nocobase/nocobase/pull/6841)) par @aaaaaajie
- **[plugin-commercial]** Prise en charge de la version commerciale par @jiannx
- **[Filtre multi-mots-clés]** Les champs de texte sur une seule ligne prennent en charge la saisie de plusieurs mots-clés pour le filtrage par @zhangzhonghe
  Référence : [Filtre multi-mots-clés](https://docs.nocobase.com/handbook/multi-keyword-filter)
- **[Impression de modèles]**

  - Ajout de la prise en charge de l'impression en masse dans l'impression de modèles. par @sheldon66
  - Ajout de la prise en charge de l'impression en masse dans l'impression de modèles. par @sheldon66

### 🚀 Améliorations

- **[undefined]** Construction de l'image Docker complète ([#6898](https://github.com/nocobase/nocobase/pull/6898)) par @chenos
- **[client]**

  - Optimisation du problème de ralentissement des pages avec l'utilisation ([#6888](https://github.com/nocobase/nocobase/pull/6888)) par @zhangzhonghe
  - Ajout de plus de réglages de taille intégrés pour l'image d'état de lecture ([#6868](https://github.com/nocobase/nocobase/pull/6868)) par @katherinehhh
- **[Workflow]**

  - Ajout de toutes les clés de locale en-US manquantes ([#6885](https://github.com/nocobase/nocobase/pull/6885)) par @mytharcher
  - Permet de réviser plus d'un brouillon ([#6851](https://github.com/nocobase/nocobase/pull/6851)) par @mytharcher
- **[Champ de collection : Pièce jointe (URL)]** Ajout de plus de tailles intégrées au champ URL de pièce jointe pour l'état de lecture ([#6871](https://github.com/nocobase/nocobase/pull/6871)) par @katherinehhh
- **[Gestionnaire d'emails]**

  - Correction d'erreurs de synchronisation et d'autres problèmes d'ergonomie par @jiannx
  - Ajout de la gestion des brouillons, prise en charge de la visualisation des emails par les subordonnés par @jiannx

### 🐛 Corrections de bugs

- **[client]**

  - La règle de liaison désactivée ne fonctionne pas pour le bouton d'action ([#6896](https://github.com/nocobase/nocobase/pull/6896)) par @katherinehhh
  - La page n'est pas redirigée correctement après la suppression du dernier élément ([#6892](https://github.com/nocobase/nocobase/pull/6892)) par @katherinehhh
  - Le composant en cascade dans la modale ne charge pas les données d'association initialement ([#6886](https://github.com/nocobase/nocobase/pull/6886)) par @katherinehhh
  - Le tableau d'enregistrement de sélection d'association ne filtrait pas les enregistrements déjà associés ([#6874](https://github.com/nocobase/nocobase/pull/6874)) par @katherinehhh
  - Les données d'association ne sont pas soumises lors de l'exposition des champs d'association dans subForm ([#6883](https://github.com/nocobase/nocobase/pull/6883)) par @katherinehhh
  - Variables du formulaire actuel manquantes dans la portée des données du sélecteur de données ([#6882](https://github.com/nocobase/nocobase/pull/6882)) par @katherinehhh
  - Les champs de tri par glisser-déposer n'affichent pas correctement les options disponibles ([#6875](https://github.com/nocobase/nocobase/pull/6875)) par @katherinehhh
  - Effacement de la valeur de droite lorsque l'opérateur change dans une règle de liaison ([#6862](https://github.com/nocobase/nocobase/pull/6862)) par @katherinehhh
  - Opérateur manquant lors du changement dans les règles de liaison ([#6857](https://github.com/nocobase/nocobase/pull/6857)) par @katherinehhh
  - Problème de liaison de bouton dans le bloc de détail ([#6867](https://github.com/nocobase/nocobase/pull/6867)) par @katherinehhh
  - Évaluation incorrecte des opérateurs pour les variables de date dans les conditions de liaison ([#6825](https://github.com/nocobase/nocobase/pull/6825)) par @katherinehhh
  - Les champs masqués sont toujours affichés ([#6844](https://github.com/nocobase/nocobase/pull/6844)) par @zhangzhonghe
  - Incompatibilité d'analyse des variables avec les données {{title}} dans la confirmation secondaire ([#6838](https://github.com/nocobase/nocobase/pull/6838)) par @katherinehhh
  - Incompatibilité d'analyse des variables avec les données {{title}} dans la confirmation secondaire ([#6838](https://github.com/nocobase/nocobase/pull/6838)) par @katherinehhh
  - Amélioration du style du composant de valeur de règle de liaison ([#6836](https://github.com/nocobase/nocobase/pull/6836)) par @katherinehhh
- **[database]** Gestion des cellules de chaîne vides lors de l'importation de champ pour éviter les erreurs ([#6880](https://github.com/nocobase/nocobase/pull/6880)) par @aaaaaajie
- **[build]** Correction de l'erreur d'exécution du client dans plugin-workflow-javascript, erreur de processus indéfini ([#6859](https://github.com/nocobase/nocobase/pull/6859)) par @jiannx
- **[Gestionnaire de fichiers]**

  - Correction de l'URL d'aperçu sur les fichiers non image ([#6889](https://github.com/nocobase/nocobase/pull/6889)) par @mytharcher
  - Correction des types ([#6873](https://github.com/nocobase/nocobase/pull/6873)) par @mytharcher
  - Correction de la création d'enregistrement de fichier sans permission de clé étrangère ([#6863](https://github.com/nocobase/nocobase/pull/6863)) par @mytharcher
- **[Bloc : Panneau d'actions]**

  - Lecture du nom de base de l'itinéraire à partir du scanner pour s'adapter à l'environnement de bureau. ([#6877](https://github.com/nocobase/nocobase/pull/6877)) par @sheldon66
  - La couleur du panneau d'actions est incorrecte en mode sombre ([#6842](https://github.com/nocobase/nocobase/pull/6842)) par @zhangzhonghe
- **[Intégration IA]** Le contenu n'est pas affiché lors du basculement entre les pages de configuration du service LLM et de validation ([#6887](https://github.com/nocobase/nocobase/pull/6887)) par @2013xile
- **[Workflow : Nœud manuel]**

  - Correction d'un cas de test suite à la suppression du plugin de la liste intégrée ([#6895](https://github.com/nocobase/nocobase/pull/6895)) par @mytharcher
  - Correction d'une erreur de rendu lors de l'affichage d'un élément non traité ([#6879](https://github.com/nocobase/nocobase/pull/6879)) par @mytharcher
  - Correction du décompte incorrect des statistiques sur les tâches ([#6783](https://github.com/nocobase/nocobase/pull/6783)) par @mytharcher
- **[Workflow]**

  - Correction du fonctionnement incorrect de la limite de pile pour l'événement de collection ([#6876](https://github.com/nocobase/nocobase/pull/6876)) par @mytharcher
  - Correction du problème de navigation arrière qui ne fonctionne pas lors de l'ouverture directe d'un lien contextuel dans le centre de tâches ([#6853](https://github.com/nocobase/nocobase/pull/6853)) par @mytharcher
- **[Visualisation de données]**

  - Les blocs de graphiques ne s'affichent pas lorsqu'ils sont ajoutés à des fenêtres contextuelles déclenchées par des actions au niveau du bloc ([#6864](https://github.com/nocobase/nocobase/pull/6864)) par @2013xile
  - Correction d'une erreur lors du filtrage des champs m2m imbriqués ([#6855](https://github.com/nocobase/nocobase/pull/6855)) par @2013xile
- **[Action : Exporter des enregistrements]**

  - Amélioration des performances lors de la suppression de champs dans les paramètres d'import/export de champs ([#6861](https://github.com/nocobase/nocobase/pull/6861)) par @katherinehhh
  - Correction de l'exportation de valeurs vides dans les associations imbriquées et l'URL de pièce jointe ([#6845](https://github.com/nocobase/nocobase/pull/6845)) par @aaaaaajie
- **[Bloc : modèle]** Après avoir enregistré en tant que modèle hérité, erreur lors de l'ouverture de la fenêtre contextuelle ([#6840](https://github.com/nocobase/nocobase/pull/6840)) par @gchust
- **[Action : Dupliquer l'enregistrement]** La modale se ferme au premier clic sur une entrée lors de l'édition de données dupliquées ([#6848](https://github.com/nocobase/nocobase/pull/6848)) par @katherinehhh
- **[Workflow : kit de test]** Correction de cas de test échoués en raison d'un plugin préréglé requis ([#6839](https://github.com/nocobase/nocobase/pull/6839)) par @mytharcher
- **[Workflow : Événement post-action]** Correction de la variable « user acted » inaccessible dans le modèle Handlebars ([#6837](https://github.com/nocobase/nocobase/pull/6837)) par @mytharcher
- **[plugin-commercial]**

  - Correction de l'envoi du journal commercial au CRM et de la traduction de texte par @jiannx
  - Utilisation de la chaîne de prototypes pour implémenter la fonction withCommercial par @jiannx
- **[Action : Exporter des enregistrements Pro]**

  - Amélioration des performances lors de la suppression de champs dans les paramètres d'import/export Pro par @katherinehhh
  - Correction de l'erreur d'exportation de textes longs. par @aaaaaajie
- **[Workflow : Sous-flux]** Correction du plantage de la page causé par un déclencheur indéfini par @mytharcher
- **[Impression de modèles]**

  - Correction du problème de formatteurs introuvables. par @sheldon66
  - Correction du formatteur introuvable par @sheldon66
- **[Stockage de fichiers : S3(Pro)]**

  - Expiration de l'URL d'accès invalide par @jiannx
  - Changement pour utiliser le champ de collection afin de localiser le stockage par @mytharcher
- **[Workflow : Approbation]**

  - Correction du décompte incorrect des statistiques sur les tâches par @mytharcher
  - Correction de la portée des responsables pour la délégation et ajout à d'autres responsables par @mytharcher
- **[Gestionnaire d'emails]**

  - Correction d'une erreur ts par @jiannx
  - L'API de liste prend en charge la fusion de sujets par @jiannx
- **[Gestionnaire de sauvegarde]** Correction d'une erreur de type lors de la construction par @mytharcher
