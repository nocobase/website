---
title: "NocoBase v2.0.21 : Ajout de la liste des exécutions de filtres"
description: "Notes de version de la v2.0.21"
---

### 🚀 Améliorations

- **[Workflow]** Ajout de la liste des exécutions filtrées ([#8914](https://github.com/nocobase/nocobase/pull/8914)) par @mytharcher

- **[Workflow : Approbation]** Éviter de configurer l'interface des approbateurs lorsqu'aucune collection n'est configurée dans le déclencheur par @mytharcher

### 🐛 Corrections de bugs

- **[resourcer]** Empêcher la conversion automatique du tableau de paramètres `filterByTk` en objet lorsqu'il dépasse 100 éléments ([#8908](https://github.com/nocobase/nocobase/pull/8908)) par @2013xile

- **[client]** Correction du problème où les non-administrateurs ne pouvaient pas effacer les valeurs des champs associés ([#8904](https://github.com/nocobase/nocobase/pull/8904)) par @jiannx

- **[Action : Importer des enregistrements Pro]**
  - Correction du problème d'erreur lors de l'importation en mode synchrone par @mytharcher

  - Correction du problème où plus de ~30 colonnes provoquaient une erreur d'importation, en raison d'une lecture en double du flux par @mytharcher

- **[Workflow : Approbation]** Correction d'un problème de concurrence lors de l'ajout d'un assigné par @mytharcher
