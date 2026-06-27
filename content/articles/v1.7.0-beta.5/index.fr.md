---
title: "NocoBase v1.7.0-beta.5 : Prise en charge des actions de tableau en ligne avec mode icône uniquement"
description: "Notes de version de v1.7.0-beta.5"
---

### 🎉 Nouvelles fonctionnalités

- **[client]** Prise en charge des actions de tableau en ligne avec mode icône uniquement, affichage du nom de l'action au survol ([#6451](https://github.com/nocobase/nocobase/pull/6451)) par @katherinehhh

### 🚀 Améliorations

- **[Gestionnaire de fichiers]** Simplification de la logique de génération d'URL de fichiers et de l'API ([#6472](https://github.com/nocobase/nocobase/pull/6472)) par @mytharcher

- **[Stockage de fichiers : S3(Pro)]**
  - Remplacement du texte 'Access URL Base' par 'Base URL' par @zhangzhonghe

  - Passage à une méthode simplifiée de génération d'URL de fichiers par @mytharcher

- **[Gestionnaire de sauvegarde]** Autorisation de restauration de sauvegarde entre une version préliminaire et une version finale de la même version par @gchust

### 🐛 Corrections de bugs

- **[client]**
  - La couleur des icônes dans le coin supérieur droit de la page ne change pas avec le thème ([#6482](https://github.com/nocobase/nocobase/pull/6482)) par @zhangzhonghe

  - Le champ de texte enrichi n'efface pas les données lors de la soumission ([#6486](https://github.com/nocobase/nocobase/pull/6486)) par @katherinehhh

  - Cliquer sur le bouton de réinitialisation du formulaire de filtre ne peut pas effacer les conditions de filtrage du bloc de carte en grille ([#6475](https://github.com/nocobase/nocobase/pull/6475)) par @zhangzhonghe

- **[Workflow : Nœud manuel]**
  - Correction de la migration ([#6484](https://github.com/nocobase/nocobase/pull/6484)) par @mytharcher

  - Changement du nom de la migration pour garantir une réexécution ([#6487](https://github.com/nocobase/nocobase/pull/6487)) par @mytharcher

  - Correction du champ de titre du workflow dans le filtre ([#6480](https://github.com/nocobase/nocobase/pull/6480)) par @mytharcher

  - Éviter la synchronisation des collections à partir des champs ([#6478](https://github.com/nocobase/nocobase/pull/6478)) par @mytharcher

  - Correction de l'erreur de migration lorsque la colonne id n'existe pas ([#6470](https://github.com/nocobase/nocobase/pull/6470)) par @chenos

- **[Workflow]** Ne pas compter les tâches lorsque le workflow est supprimé ([#6474](https://github.com/nocobase/nocobase/pull/6474)) par @mytharcher

- **[Workflow : Nœud d'agrégation]** Correction de l'arrondi sur un résultat nul ([#6473](https://github.com/nocobase/nocobase/pull/6473)) par @mytharcher

- **[Intégration NocoBase]** La page s'affiche vide par @zhangzhonghe

- **[Gestionnaire de sauvegarde]** Impossible de démarrer le serveur lorsque les paramètres de sauvegarde par défaut sont manquants par @gchust

- **[Workflow : Approbation]**
  - Correction de l'erreur du champ de liaison de fichier dans le formulaire de processus par @mytharcher

  - Correction du comptage des tâches basé sur les hooks par @mytharcher
