---
title: "NocoBase v1.9.37 : Mise à jour de la version de math.js pour prendre en charge davantage de fonctions"
description: "Notes de version de la v1.9.37"
---

### 🚀 Améliorations

- **[évaluateurs]** Mise à jour de la version de math.js pour prendre en charge davantage de fonctions ([#8411](https://github.com/nocobase/nocobase/pull/8411)) par @mytharcher

- **[Notification : Message in-app]** Correction d'un problème de performance lors de l'envoi de messages in-app à un grand nombre d'utilisateurs ([#8402](https://github.com/nocobase/nocobase/pull/8402)) par @mytharcher

### 🐛 Corrections de bugs

- **[client]**
  - Correction du problème où les données de sélection en cascade n'étaient pas effacées après une soumission réussie dans le formulaire de création ([#8403](https://github.com/nocobase/nocobase/pull/8403)) par @katherinehhh

  - Ajout d'une tolérance aux pannes pour le schéma d'action, afin d'éviter le plantage de la page lors du clic sur le bouton d'action ([#8420](https://github.com/nocobase/nocobase/pull/8420)) par @mytharcher

  - Correction du problème avec le bouton de soumission où la validation obligatoire ignorée ne fonctionnait pas lorsque la confirmation était activée ([#8400](https://github.com/nocobase/nocobase/pull/8400)) par @katherinehhh

- **[Champ de collection : Plusieurs à plusieurs (tableau)]** Correction d'une erreur lors de l'ajout de relations plusieurs-à-plusieurs (tableau) de second niveau dans les requêtes d'association ([#8406](https://github.com/nocobase/nocobase/pull/8406)) par @cgyrock

- **[Workflow]** Correction du problème où l'ID du schéma n'était pas mis à jour dans le nœud dupliqué ([#8396](https://github.com/nocobase/nocobase/pull/8396)) par @mytharcher
