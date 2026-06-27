---
title: "NocoBase v1.7.0-beta.6 : Prise en charge de la configuration de la précision pour les résultats d'agrégation"
description: "Notes de version de v1.7.0-beta.6"
---

### 🎉 Nouvelles fonctionnalités

- **[client]** Prise en charge des champs de texte long comme champs de titre pour les champs d'association ([#6495](https://github.com/nocobase/nocobase/pull/6495)) par @katherinehhh

- **[Workflow : Nœud d'agrégation]** Possibilité de configurer la précision du résultat d'agrégation ([#6491](https://github.com/nocobase/nocobase/pull/6491)) par @mytharcher

### 🐛 Corrections de bugs

- **[évaluateurs]** Revenir à 9 décimales pour l'arrondi ([#6492](https://github.com/nocobase/nocobase/pull/6492)) par @mytharcher

- **[Workflow]** Correction du comptage des tâches héritées après la suppression d'un workflow ([#6493](https://github.com/nocobase/nocobase/pull/6493)) par @mytharcher

- **[Source de données : Principale]** Impossible de créer une vue MySQL. ([#6477](https://github.com/nocobase/nocobase/pull/6477)) par @aaaaaajie

- **[Gestionnaire de fichiers]** Encodage de l'URL ([#6497](https://github.com/nocobase/nocobase/pull/6497)) par @chenos

- **[Gestionnaire de sauvegarde]**
  - Échec de la restauration de la base de données MySQL dû à un chevauchement de l'ensemble GTID par @gchust

  - Les fichiers téléchargés n'ont pas été restaurés lors de la création d'une sous-application à partir d'un modèle de sauvegarde par @gchust

- **[Workflow : Approbation]**
  - Correction du bouton d'action manquant dans le tableau des processus par @mytharcher

  - Modification de l'approbation retournée en tâche à faire par @mytharcher
