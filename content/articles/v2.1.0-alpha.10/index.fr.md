---
title: "NocoBase v2.1.0-alpha.10 : Nettoyage programmé des données de points de contrôle des conversations IA"
description: "Notes de version de v2.1.0-alpha.10"
---

### 🎉 Nouvelles fonctionnalités

- **[IdP : OAuth]** Ajout d'un nouveau fournisseur d'identité : plugin OAuth pour permettre aux services MCP de s'authentifier via OAuth ([#8896](https://github.com/nocobase/nocobase/pull/8896)) par @2013xile

- **[Employés IA]** Nettoyage planifié des données de points de contrôle des conversations IA. ([#8855](https://github.com/nocobase/nocobase/pull/8855)) par @cgyrock

- **[Superviseur d'applications]** Prise en charge du filtrage dans la liste des applications<br />Ajout de boîtes de dialogue de confirmation pour les actions de démarrage et d'arrêt<br />Tri des entrées de statut des applications par nom d'environnement par @2013xile

### 🚀 Améliorations

- **[serveur]** amélioration de la logique d'ajout pm ([#8875](https://github.com/nocobase/nocobase/pull/8875)) par @chenos

- **[client]** Prise en charge de l'affichage d'un message de confirmation avant la fermeture d'une fenêtre contextuelle. ([#8839](https://github.com/nocobase/nocobase/pull/8839)) par @gchust

- **[non défini]** Ajout d'une entrée client-v2 dédiée et construction indépendante avec rsbuild tout en conservant v1 inchangée. ([#8743](https://github.com/nocobase/nocobase/pull/8743)) par @Molunerfinn

- **[Workflow]**
  - Correction du problème où l'arrêt gracieux ne vidait pas tous les événements ([#8894](https://github.com/nocobase/nocobase/pull/8894)) par @mytharcher

  - Ajout du filtrage de la liste des exécutions ([#8914](https://github.com/nocobase/nocobase/pull/8914)) par @mytharcher

- **[Gestionnaire de tâches asynchrones]** les tâches asynchrones sont ajoutées pour permettre aux workers d'envoyer des messages d'erreur ([#8849](https://github.com/nocobase/nocobase/pull/8849)) par @cgyrock

- **[Workflow : Approbation]** Éviter de configurer l'interface utilisateur des approbateurs lorsqu'aucune collection n'est configurée dans le déclencheur par @mytharcher

### 🐛 Corrections de bugs

- **[client]**
  - correction du problème où les non-administrateurs ne pouvaient pas effacer les valeurs des champs associés ([#8904](https://github.com/nocobase/nocobase/pull/8904)) par @jiannx

  - Correction du problème où la fenêtre contextuelle « Sélectionner un enregistrement » dans le sous-tableau ne se chargeait pas correctement lors de la deuxième ouverture. ([#8865](https://github.com/nocobase/nocobase/pull/8865)) par @gchust

- **[ressourcer]** Empêcher la conversion automatique du tableau de paramètres `filterByTk` en objet lorsqu'il dépasse 100 éléments ([#8908](https://github.com/nocobase/nocobase/pull/8908)) par @2013xile

- **[serveur]** Correction du problème où les événements du cycle de vie envoyés par le worker entraînaient l'arrêt de l'application de service ([#8906](https://github.com/nocobase/nocobase/pull/8906)) par @mytharcher

- **[Gestionnaire de sources de données]** Correction du problème où la collection créée par un employé IA manquait toujours des champs `createBy` et `updateBy` ([#8895](https://github.com/nocobase/nocobase/pull/8895)) par @cgyrock

- **[Employés IA]**
  - Correction du problème où l'URL spécifiée pour le service LLM ne prenait pas effet dans les appels de modèle d'incorporation de texte. ([#8892](https://github.com/nocobase/nocobase/pull/8892)) par @cgyrock

  - Correction des erreurs potentielles de variables non définies dans les scripts de migration de mise à niveau du plugin IA. ([#8883](https://github.com/nocobase/nocobase/pull/8883)) par @cgyrock

- **[Action : Importer des enregistrements Pro]**
  - Correction du problème où plus de ~30 colonnes provoquaient une erreur d'importation, en raison d'une lecture en double du flux par @mytharcher

  - Correction du problème où une erreur était générée lors de l'importation en mode synchrone par @mytharcher

  - Correction de l'événement `beforeStop` sur la sous-application qui n'était pas déclenché par @mytharcher

  - Correction du problème où les tâches asynchrones ne se terminaient pas après une erreur lors de l'importation asynchrone par @cgyrock

  - Correction de l'importation paresseuse provoquant une erreur SES par @mytharcher

- **[Modèle d'impression]** Correction de l'erreur d'impression de la collection SQL par @jiannx

- **[Workflow : Approbation]** Correction d'un problème de concurrence lors de l'ajout d'un assigné par @mytharcher

- **[Gestionnaire d'emails]** Correction de l'erreur de page lorsque l'email n'existe pas par @jiannx

- **[Gestionnaire de migrations]** Correction du problème où la migration était interrompue en raison d'une erreur causée par l'absence de la nouvelle table créée dans l'environnement cible pendant le processus de migration de téléchargement. par @Andrew1989Y
