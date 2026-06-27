---
title: "NocoBase v2.0.0-alpha.44 : prise en charge du sélecteur en cascade pour le champ d'association de collection arborescente"
description: "Notes de version de v2.0.0-alpha.44"
---

### 🎉 Nouvelles fonctionnalités

- **[client]**
  - Ajout de la prise en charge de la création rapide pour le sélecteur de champ d'association ([#7887](https://github.com/nocobase/nocobase/pull/7887)) par @katherinehhh

  - Prise en charge du sélecteur en cascade pour le champ d'association de collection arborescente ([#7846](https://github.com/nocobase/nocobase/pull/7846)) par @katherinehhh

- **[Télémétrie]** Ajout d'un nouveau plugin : Télémétrie, un plugin de télémétrie basé sur OpenTelemetry fournissant des métriques CPU, mémoire et requêtes HTTP avec prise en charge de l'export HTTP par @2013xile

### 🚀 Améliorations

- **[télémétrie]** Prise en charge du contrôle des métriques exportées ([#7938](https://github.com/nocobase/nocobase/pull/7938)) par @2013xile

- **[Gestionnaire de tâches asynchrones]** Les tâches asynchrones pour les sous-applications doivent démarrer uniquement les sous-applications cibles dans les Workers ([#7927](https://github.com/nocobase/nocobase/pull/7927)) par @2013xile

### 🐛 Corrections de bugs

- **[client]**
  - Suppression de l'action de tableau arborescent des blocs de collection non arborescents ([#7931](https://github.com/nocobase/nocobase/pull/7931)) par @katherinehhh

  - Correction de l'interface de champ affichant plusieurs-à-un au lieu de un-à-un pour belongsTo dans la configuration de source de données externe ([#7936](https://github.com/nocobase/nocobase/pull/7936)) par @cgyrock

- **[moteur de flux]** Correction du problème d'affichage désaligné des icônes de la barre d'outils dans le bouton du bloc de détails ([#7929](https://github.com/nocobase/nocobase/pull/7929)) par @zhangzhonghe

- **[Workflow]** Correction du problème où la mise à jour du nombre de tâches réinitialisait involontairement l'état des formulaires en cours de remplissage ([#7937](https://github.com/nocobase/nocobase/pull/7937)) par @mytharcher

- **[Champ de collection : Plusieurs-à-plusieurs (tableau)]** Correction des problèmes du champ M2M (tableau) lors de la création/mise à jour de données associées ([#7926](https://github.com/nocobase/nocobase/pull/7926)) par @cgyrock

- **[Action : Importer des enregistrements Pro]** Correction du problème où la modification des options d'importation par le téléchargeur restait sans effet par @katherinehhh
