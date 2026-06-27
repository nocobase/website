---
title: "NocoBase v2.0.0-alpha.17 : Ajout de la prise en charge des écouteurs d'événements de clic sur les lignes du tableau"
description: "Notes de version de v2.0.0-alpha.17"
---

### 🎉 Nouvelles fonctionnalités

- **[client]** Ajout de la prise en charge des écouteurs d'événements de clic sur les lignes d'un tableau, permettant aux utilisateurs d'exécuter des actions spécifiques lorsqu'une ligne du tableau est cliquée ([#7622](https://github.com/nocobase/nocobase/pull/7622)) par @zhangzhonghe

- **[Workflow : Approbation]** Exposition de la variable `approvalId` pour une utilisation depuis les déclencheurs d'approbation par @mytharcher

### 🐛 Corrections de bugs

- **[moteur-de-flux]** Correction du problème de non-prise en compte de la traduction dans les composants antd ([#7621](https://github.com/nocobase/nocobase/pull/7621)) par @zhangzhonghe

- **[Source de données : Principale]** Correction du problème de non-synchronisation des métadonnées entre plusieurs nœuds après la création d'un champ de relation inverse ([#7628](https://github.com/nocobase/nocobase/pull/7628)) par @mytharcher

- **[plugin-demo-platform]** Prise en charge de l'arrêt automatique des applications dans la démo par @jiannx

- **[Multi-application]**
  - La migration multi-application n'émettait pas de hooks par @jiannx

  - Prise en charge du cache pour le proxy multi-application par @jiannx
