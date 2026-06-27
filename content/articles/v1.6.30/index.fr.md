---
title: "NocoBase v1.6.30 : ajout de paramètres de taille intégrés supplémentaires pour l'image d'état de lecture"
description: "Notes de version de la v1.6.30"
---

### 🚀 Améliorations

- **[client]** Ajout de paramètres de taille intégrés supplémentaires pour l'image d'état de lecture ([#6868](https://github.com/nocobase/nocobase/pull/6868)) par @katherinehhh

### 🐛 Corrections de bugs

- **[Gestionnaire de fichiers]**
  - Correction des types ([#6873](https://github.com/nocobase/nocobase/pull/6873)) par @mytharcher

  - Correction de la création d'enregistrement de fichier sans permission de clé étrangère ([#6863](https://github.com/nocobase/nocobase/pull/6863)) par @mytharcher

- **[Action : Exporter les enregistrements]** Amélioration des performances lors de la suppression de champs dans les paramètres d'import/export ([#6861](https://github.com/nocobase/nocobase/pull/6861)) par @katherinehhh

- **[Visualisation de données]** Les blocs de graphiques ne s'affichent pas lorsqu'ils sont ajoutés à des popups déclenchées par des actions au niveau des blocs ([#6864](https://github.com/nocobase/nocobase/pull/6864)) par @2013xile

- **[Action : Exporter les enregistrements Pro]** Amélioration des performances lors de la suppression de champs dans les paramètres d'import/export Pro par @katherinehhh

- **[Stockage de fichiers : S3(Pro)]** Passage à l'utilisation du champ de collection pour localiser le stockage par @mytharcher

- **[Gestionnaire de sauvegarde]** Correction d'une erreur de type lors de la construction par @mytharcher
