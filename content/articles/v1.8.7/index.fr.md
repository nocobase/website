---
title: "NocoBase v1.8.7 : Prise en charge de l'exécution de test du nœud"
description: "Notes de version de la v1.8.7"
---

### 🎉 Nouvelles fonctionnalités

- **[Workflow : nœud de calcul de date]** Prise en charge de l'exécution de test d'un nœud par @mytharcher

### 🚀 Améliorations

- **[client]** Sélecteur de couleur : Ajout de quatre couleurs recommandées ([#7226](https://github.com/nocobase/nocobase/pull/7226)) par @zhangzhonghe

- **[Workflow]** Rendre la comparaison compatible avec les valeurs de date ([#7237](https://github.com/nocobase/nocobase/pull/7237)) par @mytharcher

### 🐛 Corrections de bugs

- **[client]**
  - Les règles de style ne fonctionnent pas sur la colonne d'actions du tableau ([#7225](https://github.com/nocobase/nocobase/pull/7225)) par @katherinehhh

  - Lors de la suppression d'un menu, les données correspondantes dans la table uiSchemas ne sont pas supprimées ([#7232](https://github.com/nocobase/nocobase/pull/7232)) par @zhangzhonghe

  - Éviter que les champs non-associés soient sélectionnés dans les ajouts ([#7231](https://github.com/nocobase/nocobase/pull/7231)) par @mytharcher

- **[Workflow : Sous-flux]** Correction d'une erreur levée lorsque le signal de rappel arrive mais que l'exécution en attente n'est pas sur l'instance actuelle par @mytharcher
