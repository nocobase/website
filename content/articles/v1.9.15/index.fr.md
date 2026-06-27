---
title: "NocoBase v1.9.15 : Corrections de bugs"
description: "Notes de version de la v1.9.15"
---

### 🐛 Corrections de bugs

- **[client]**
  - Évite une erreur lors de l'ouverture des paramètres de valeur par défaut ([#7997](https://github.com/nocobase/nocobase/pull/7997)) par @mytharcher

  - Résout une erreur lors de l'ajout d'enregistrements enfants dans un bloc de tableau arborescent d'association ([#7989](https://github.com/nocobase/nocobase/pull/7989)) par @katherinehhh

- **[Départements]** Correction du problème où les champs associés au département ne pouvaient pas être modifiés ([#7462](https://github.com/nocobase/nocobase/pull/7462)) par @heziqiang

- **[Collection : Arborescence]** Correction des échecs de mise à jour de la table de chemin causés par une recherche incorrecte du champ parent dans l'arborescence ([#8000](https://github.com/nocobase/nocobase/pull/8000)) par @2013xile

- **[Champ de collection : Plusieurs à plusieurs (tableau)]** Correction du problème où le champ de tableau m2m dans la sous-table ne pouvait pas être mis à jour ([#7998](https://github.com/nocobase/nocobase/pull/7998)) par @cgyrock

- **[Workflow : Approbation]**
  - Correction de l'absence de données du demandeur dans le contexte d'exécution après une nouvelle soumission par @mytharcher

  - Correction du problème où le commentaire dans le résultat de la tâche était nul après que l'utilisateur ait soumis une approbation avec commentaire par @mytharcher
