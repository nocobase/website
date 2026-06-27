---
title: "NocoBase v1.9.11 : Corrections de bugs"
description: "Notes de version de la v1.9.11"
---

### 🐛 Corrections de bugs

- **[client]** Correction de l'interface de champ affichant "plusieurs-à-un" au lieu de "un-à-un" pour belongsTo dans la configuration de source de données externe ([#7936](https://github.com/nocobase/nocobase/pull/7936)) par @cgyrock

- **[Workflow]** Correction du problème où la mise à jour du nombre de tâches réinitialisait involontairement l'état des formulaires en cours de remplissage ([#7937](https://github.com/nocobase/nocobase/pull/7937)) par @mytharcher

- **[Champ de collection : Plusieurs-à-plusieurs (tableau)]** Correction des problèmes du champ M2M (tableau) lors de la création/mise à jour de données associées ([#7926](https://github.com/nocobase/nocobase/pull/7926)) par @cgyrock
