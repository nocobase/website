---
title: "NocoBase v1.6.16 : Corrections de bugs"
description: "Notes de version de la v1.6.16"
---

### 🐛 Corrections de bugs

- **[client]**
  - La propriété x-disabled ne s'appliquait pas aux champs de formulaire ([#6610](https://github.com/nocobase/nocobase/pull/6610)) par @katherinehhh

  - Problème d'affichage des étiquettes de champ pour éviter la troncature par les deux-points ([#6599](https://github.com/nocobase/nocobase/pull/6599)) par @katherinehhh

- **[base de données]** Lors de la suppression d'enregistrements un-à-plusieurs, lorsque `filter` et `filterByTk` sont tous deux transmis et que `filter` inclut un champ d'association, le `filterByTk` est ignoré ([#6606](https://github.com/nocobase/nocobase/pull/6606)) par @2013xile
