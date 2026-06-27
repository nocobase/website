---
title: "NocoBase v2.1.0-beta.11 : Ajout de la liste des exécutions de filtres"
description: "Notes de version de la v2.1.0-beta.11"
---

### 🚀 Améliorations

- **[Workflow]** Ajout de la liste des filtres d'exécution ([#8914](https://github.com/nocobase/nocobase/pull/8914)) par @mytharcher

- **[Workflow : Approbation]** Éviter de configurer l'interface des approbateurs lorsqu'aucune collection n'est configurée dans le déclencheur par @mytharcher

### 🐛 Corrections de bugs

- **[serveur]** Correction du problème où les événements du cycle de vie envoyés par le worker entraînaient l'arrêt du service de l'application ([#8906](https://github.com/nocobase/nocobase/pull/8906)) par @mytharcher

- **[client]** Correction du problème où les non-administrateurs ne pouvaient pas effacer les valeurs des champs associés ([#8904](https://github.com/nocobase/nocobase/pull/8904)) par @jiannx

- **[resourcer]** Empêcher la conversion automatique du tableau de paramètres `filterByTk` en objet lorsqu'il dépasse 100 éléments ([#8908](https://github.com/nocobase/nocobase/pull/8908)) par @2013xile

- **[Action : Importer des enregistrements Pro]**
  - Correction du problème où une erreur était levée lors de l'importation en mode synchrone par @mytharcher

  - Correction du problème où plus de ~30 colonnes provoquaient une erreur d'importation, en raison d'une lecture en double du flux par @mytharcher

- **[Workflow : Approbation]** Correction d'un problème de concurrence lors de l'ajout d'un assigné par @mytharcher

- **[Gestionnaire de migration]** Correction du problème où la migration était interrompue en raison d'une erreur causée par l'absence de la nouvelle table créée dans l'environnement cible pendant le processus de migration de téléchargement. par @Andrew1989Y
