---
title: "NocoBase v1.3.51 : Corrections de bugs"
description: "Notes de version de la v1.3.51"
---

### 🐛 Corrections de bugs

- **[client]**
  - Correction de la vérification des permissions de champ non affectée par le contexte du champ d'association ([#5672](https://github.com/nocobase/nocobase/pull/5672)) par @katherinehhh

  - Correction de l'enregistrement des modifications de valeur vide par la règle de liaison vers une valeur vide statique ([#5667](https://github.com/nocobase/nocobase/pull/5667)) par @katherinehhh

- **[Champ de collection : Plusieurs à plusieurs (tableau)]** Correction du problème où la récupération d'enregistrements dans une collection d'association avec des champs plusieurs à plusieurs (tableau) provoque une erreur ([#5661](https://github.com/nocobase/nocobase/pull/5661)) par @2013xile

- **[Bloc : Gantt]** Correction du bloc de modèle Gantt qui appelle incorrectement le bloc calendrier lors de l'ajout ([#5673](https://github.com/nocobase/nocobase/pull/5673)) par @katherinehhh

- **[Visualisation de données]** Correction du problème où les transformations de données ne fonctionnent pas sur l'infobulle dans les graphiques à double axe ([#5649](https://github.com/nocobase/nocobase/pull/5649)) par @2013xile
