---
title: "NocoBase v2.1.0-beta.10 : Nettoyage programmé des données de points de contrôle des conversations IA"
description: "Notes de version de la v2.1.0-beta.10"
---

### 🎉 Nouvelles fonctionnalités

- **[Employés IA]**
  - Permet d'ajouter des employés IA dans la fenêtre contextuelle des sous-tableaux ([#8873](https://github.com/nocobase/nocobase/pull/8873)) par @2013xile

  - Nettoyage planifié des données de points de contrôle des conversations IA. ([#8855](https://github.com/nocobase/nocobase/pull/8855)) par @cgyrock

- **[Superviseur d'applications]** Prise en charge du filtrage dans la liste des applications<br />Ajout de boîtes de dialogue de confirmation pour les actions de démarrage et d'arrêt<br />Tri des entrées de statut des applications par nom d'environnement par @2013xile

### 🚀 Améliorations

- **[serveur]** amélioration de la logique pm add ([#8875](https://github.com/nocobase/nocobase/pull/8875)) par @chenos

- **[non défini]** README ([#8866](https://github.com/nocobase/nocobase/pull/8866)) par @gaston98765

- **[client]** Prise en charge de l'affichage d'un message de confirmation avant la fermeture de la fenêtre contextuelle. ([#8839](https://github.com/nocobase/nocobase/pull/8839)) par @gchust

- **[Workflow]** Correction du problème où l'arrêt gracieux ne vidait pas tous les événements ([#8894](https://github.com/nocobase/nocobase/pull/8894)) par @mytharcher

- **[Gestionnaire de tâches asynchrones]** les tâches asynchrones sont ajoutées pour prendre en charge les workers dans l'envoi de messages d'erreur ([#8849](https://github.com/nocobase/nocobase/pull/8849)) par @cgyrock

### 🐛 Corrections de bugs

- **[client]**
  - Correction du problème où la fenêtre contextuelle « Sélectionner un enregistrement » dans le sous-tableau ne se chargeait pas correctement lors de la deuxième ouverture. ([#8865](https://github.com/nocobase/nocobase/pull/8865)) par @gchust

  - Correction du problème où les valeurs par défaut de certains champs ne prenaient pas effet après l'actualisation de la page. ([#8834](https://github.com/nocobase/nocobase/pull/8834)) par @gchust

- **[base de données]** Correction du problème de validation côté serveur pour les champs de date ([#8867](https://github.com/nocobase/nocobase/pull/8867)) par @2013xile

- **[Gestionnaire de sources de données]** Correction du problème où la collection créée par un employé IA manquait toujours les champs `createBy` et `updateBy` ([#8895](https://github.com/nocobase/nocobase/pull/8895)) par @cgyrock

- **[Employés IA]**
  - Correction du problème où l'URL spécifiée pour le service LLM ne prenait pas effet dans les appels de modèle d'intégration de texte. ([#8892](https://github.com/nocobase/nocobase/pull/8892)) par @cgyrock

  - Correction d'erreurs potentielles de variable non définie dans les scripts de migration de mise à niveau du plugin IA. ([#8883](https://github.com/nocobase/nocobase/pull/8883)) par @cgyrock

- **[Localisation]** localizationTexts: exception de permission d'interface manquante ([#8861](https://github.com/nocobase/nocobase/pull/8861)) par @jiannx

- **[Action : Importer des enregistrements Pro]**
  - Correction de l'événement `beforeStop` sur la sous-application non déclenché par @mytharcher

  - Correction de l'erreur SES causée par l'importation paresseuse par @mytharcher

  - Correction du problème où les tâches asynchrones ne se terminent pas après une erreur lors de l'importation asynchrone par @cgyrock

- **[IA : Base de connaissances]** Empêcher la suppression de la base de données vectorielle et du stockage vectoriel en cours d'utilisation. par @cgyrock

- **[Impression de modèles]** Correction de l'erreur d'impression de la collection SQL par @jiannx

- **[Gestionnaire d'e-mails]** Correction de l'erreur de page lorsque l'e-mail n'existe pas par @jiannx
