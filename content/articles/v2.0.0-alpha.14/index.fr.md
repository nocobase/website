---
title: "NocoBase v2.0.0-alpha.14 : Optimisation du codage IA"
description: "Notes de version de v2.0.0-alpha.14"
---

### 🚀 Améliorations

- **[Employés IA]** Optimisation du codage IA ([#7614](https://github.com/nocobase/nocobase/pull/7614)) par @cgyrock

- **[Source de données : Principale]** Refonte de la logique de localisation des messages d'erreur, et gestion dans le plugin de gestion des erreurs ([#7582](https://github.com/nocobase/nocobase/pull/7582)) par @2013xile

### 🐛 Corrections de bugs

- **[base de données]**
  - Définir `search_path` avant d'exécuter des instructions SQL avec la méthode `runSQL` ([#7611](https://github.com/nocobase/nocobase/pull/7611)) par @2013xile

  - Correction de l'erreur levée lorsque l'opérateur `$in` rencontre une valeur `null` ([#7610](https://github.com/nocobase/nocobase/pull/7610)) par @mytharcher

- **[client]** Correction du problème de pop-up d'icône d'onglet masqué ([#7607](https://github.com/nocobase/nocobase/pull/7607)) par @zhangzhonghe

- **[Workflow : Approbation]** Correction du problème où les variables ne sont pas analysées dans le formulaire de soumission d'approbation par @mytharcher
