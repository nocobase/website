---
title: "NocoBase v2.0.0-alpha.38 : Prise en charge du glisser-déposer pour les actions des colonnes de tableau"
description: "Notes de version de v2.0.0-alpha.38"
---

### 🎉 Nouvelles fonctionnalités

- **[client]** Prise en charge du glisser-déposer pour les actions des colonnes de tableau ([#7842](https://github.com/nocobase/nocobase/pull/7842)) par @zhangzhonghe

- **[Visualisation de données]** ajout d'une source de données SQL pour les graphiques ([#7830](https://github.com/nocobase/nocobase/pull/7830)) par @heziqiang

### 🚀 Améliorations

- **[client]** Ajout de la prise en charge de la bibliothèque Day.js dans le contexte de script RunJS, permettant des manipulations de date et d'heure plus faciles. ([#7841](https://github.com/nocobase/nocobase/pull/7841)) par @gchust

### 🐛 Corrections de bugs

- **[utils]**
  - Correction de l'erreur "Invalid filter item type" sur le bouton de filtre ([#7838](https://github.com/nocobase/nocobase/pull/7838)) par @zhangzhonghe

  - Activation de la fusion d'objets dans la stratégie d'intersection ([#7840](https://github.com/nocobase/nocobase/pull/7840)) par @chenos

  - Correction de l'erreur 'Unrecognized operation' dans le flux d'événements ([#7835](https://github.com/nocobase/nocobase/pull/7835)) par @zhangzhonghe

- **[client]**
  - Correction d'un problème où les règles de liaison pour les boutons d'action de ligne dans un bloc de tableau n'étaient pas réexécutées après la mise à jour des données de ligne, garantissant désormais que les règles sont correctement réappliquées en cas de modifications. ([#7832](https://github.com/nocobase/nocobase/pull/7832)) par @gchust

  - Correction des erreurs lors de l'aperçu du code dans l'éditeur de code si le code contient une syntaxe jsx ([#7836](https://github.com/nocobase/nocobase/pull/7836)) par @gchust

- **[undefined]** Correction du problème de style incorrect sur la page d'accueil de la documentation du plugin en mode sombre. ([#7839](https://github.com/nocobase/nocobase/pull/7839)) par @gchust

- **[Gestionnaire de fichiers]** correction des problèmes de configuration des champs de bloc de tableau ([#7843](https://github.com/nocobase/nocobase/pull/7843)) par @katherinehhh

- **[Employés IA]** Masquer le bouton de chat des employés IA sur les pages v1 ([#7829](https://github.com/nocobase/nocobase/pull/7829)) par @cgyrock

- **[Visualisation de données : ECharts]** correction d'un problème avec la configuration labelType d'ECharts par @heziqiang

- **[Gestionnaire d'emails]**
  - correction de bugs de brouillon par @jiannx

  - synchronisation du statut de lecture des emails Microsoft sans horodatage par @jiannx
