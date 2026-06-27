---
title: "NocoBase v1.6.5 : Simplification de la logique de génération d'URL de fichiers et de l'API"
description: "Notes de version de v1.6.5"
---

### 🚀 Améliorations

- **[Gestionnaire de fichiers]** Simplification de la logique de génération d'URL de fichiers et de l'API ([#6472](https://github.com/nocobase/nocobase/pull/6472)) par @mytharcher

- **[Stockage de fichiers : S3(Pro)]** Passage à une méthode simplifiée pour générer l'URL des fichiers par @mytharcher

- **[Gestionnaire de sauvegarde]** Autorisation de restaurer une sauvegarde entre une version préliminaire et une version finale de la même version par @gchust

### 🐛 Corrections de bugs

- **[client]**
  - Le champ de texte enrichi n'efface pas les données lors de la soumission ([#6486](https://github.com/nocobase/nocobase/pull/6486)) par @katherinehhh

  - La couleur des icônes dans le coin supérieur droit de la page ne change pas avec le thème ([#6482](https://github.com/nocobase/nocobase/pull/6482)) par @zhangzhonghe

  - Cliquer sur le bouton de réinitialisation du formulaire de filtre ne permet pas d'effacer les conditions de filtrage du bloc de cartes en grille ([#6475](https://github.com/nocobase/nocobase/pull/6475)) par @zhangzhonghe

- **[Workflow : Nœud manuel]**
  - Correction de la migration ([#6484](https://github.com/nocobase/nocobase/pull/6484)) par @mytharcher

  - Modification du nom de la migration pour garantir une réexécution ([#6487](https://github.com/nocobase/nocobase/pull/6487)) par @mytharcher

  - Correction du champ du titre du workflow dans le filtre ([#6480](https://github.com/nocobase/nocobase/pull/6480)) par @mytharcher

  - Correction de l'erreur de migration lorsque la colonne d'ID n'existe pas ([#6470](https://github.com/nocobase/nocobase/pull/6470)) par @chenos

  - Éviter la synchronisation des collections à partir des champs ([#6478](https://github.com/nocobase/nocobase/pull/6478)) par @mytharcher

- **[Workflow : Nœud d'agrégation]** Correction de l'arrondi sur un résultat nul ([#6473](https://github.com/nocobase/nocobase/pull/6473)) par @mytharcher

- **[Workflow]** Ne pas compter les tâches lorsque le workflow est supprimé ([#6474](https://github.com/nocobase/nocobase/pull/6474)) par @mytharcher

- **[Gestionnaire de sauvegarde]** Impossible de démarrer le serveur lorsque les paramètres de sauvegarde par défaut sont manquants par @gchust

- **[Workflow : Approbation]**
  - Correction de l'erreur du champ de fichier associé dans le formulaire de processus par @mytharcher

  - Correction du comptage des tâches basé sur les hooks par @mytharcher
