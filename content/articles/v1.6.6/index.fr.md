---
title: "NocoBase v1.6.6 : Prise en charge des champs de texte long comme champs de titre pour les champs d'association"
description: "Notes de version de la v1.6.6"
---

### 🎉 Nouvelles fonctionnalités

- **[client]** Prise en charge des champs de texte long comme champs de titre pour les champs d'association ([#6495](https://github.com/nocobase/nocobase/pull/6495)) par @katherinehhh

- **[Workflow : Nœud d'agrégation]** Possibilité de configurer la précision du résultat d'agrégation ([#6491](https://github.com/nocobase/nocobase/pull/6491)) par @mytharcher

### 🚀 Améliorations

- **[Stockage de fichiers : S3(Pro)]** Remplacement du texte 'Access URL Base' par 'Base URL' par @zhangzhonghe

### 🐛 Corrections de bugs

- **[Évaluateurs]** Revenir à 9 décimales pour l'arrondi ([#6492](https://github.com/nocobase/nocobase/pull/6492)) par @mytharcher

- **[Gestionnaire de fichiers]** Encodage de l'URL ([#6497](https://github.com/nocobase/nocobase/pull/6497)) par @chenos

- **[Source de données : Principale]** Impossible de créer une vue MySQL. ([#6477](https://github.com/nocobase/nocobase/pull/6477)) par @aaaaaajie

- **[Workflow]** Correction du comptage des tâches héritées après la suppression d'un workflow ([#6493](https://github.com/nocobase/nocobase/pull/6493)) par @mytharcher

- **[Intégration NocoBase]** La page s'affiche vide par @zhangzhonghe

- **[Gestionnaire de sauvegarde]**
  - Les fichiers téléchargés n'ont pas été restaurés lors de la création d'une sous-application à partir d'un modèle de sauvegarde par @gchust

  - Échec de la restauration de la base de données MySQL dû à un chevauchement d'ensembles GTID par @gchust

- **[Workflow : Approbation]**
  - Modification du retour de l'approbation en tant que tâche à faire par @mytharcher

  - Correction du bouton d'action manquant dans le tableau des processus par @mytharcher
