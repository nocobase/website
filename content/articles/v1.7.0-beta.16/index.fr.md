---
title: "NocoBase v1.7.0-beta.16 : Ajout des paramètres d'actualisation pour le bouton de déclenchement de workflow"
description: "Notes de version de v1.7.0-beta.16"
---

### 🚀 Améliorations

- **[client]**
  - Ajout d'une API de repli de type par défaut pour `Variable.Input` ([#6644](https://github.com/nocobase/nocobase/pull/6644)) par @mytharcher

  - Optimisation des invites pour les pages non configurées ([#6641](https://github.com/nocobase/nocobase/pull/6641)) par @zhangzhonghe

- **[Workflow : Événement d'action personnalisée]** Ajout des paramètres de rafraîchissement pour le bouton de déclenchement du workflow par @mytharcher

### 🐛 Corrections de bugs

- **[client]**
  - Titre du panneau d'édition du nœud de workflow affichant [object Object] ([#6648](https://github.com/nocobase/nocobase/pull/6648)) par @katherinehhh

  - Chevauchement de la description de la sous-table avec le bouton d'ajout ([#6646](https://github.com/nocobase/nocobase/pull/6646)) par @katherinehhh

  - Style incorrect de la saisie de variable ([#6645](https://github.com/nocobase/nocobase/pull/6645)) par @gchust

  - Souligné en pointillé causé par la disposition horizontale du formulaire dans une fenêtre modale ([#6639](https://github.com/nocobase/nocobase/pull/6639)) par @katherinehhh

- **[Workflow]** Correction des informations statistiques des workflows non chargées au démarrage de l'application ([#6642](https://github.com/nocobase/nocobase/pull/6642)) par @mytharcher
