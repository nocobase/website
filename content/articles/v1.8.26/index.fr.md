---
title: "NocoBase v1.8.26 : prise en charge de l'affichage de la correspondance locale pour les en-têtes de calendrier"
description: "Notes de version de v1.8.26"
---

### 🚀 Améliorations

- **[client]** Ajout de la prise en charge de la localisation pour les infobulles et les titres d'éléments de groupe ([#7485](https://github.com/nocobase/nocobase/pull/7485)) par @katherinehhh

- **[Calendrier]** Prise en charge de l'affichage de la correspondance locale pour les en-têtes de calendrier ([#7508](https://github.com/nocobase/nocobase/pull/7508)) par @katherinehhh

### 🐛 Corrections de bugs

- **[client]** Correction du problème où la popup de configuration de l'icône du menu était masquée ([#7515](https://github.com/nocobase/nocobase/pull/7515)) par @zhangzhonghe

- **[Notification : Message intégré]**
  - Correction du problème d'analyse incorrecte des liens de notification ([#7509](https://github.com/nocobase/nocobase/pull/7509)) par @mytharcher

  - Correction du problème où les messages récents ne s'affichaient pas lors de l'ouverture de la popup de notification ([#7514](https://github.com/nocobase/nocobase/pull/7514)) par @mytharcher

- **[Workflow]** Correction du problème où une logique d'abonnement incorrecte sur la file d'attente des tâches en arrière-plan dans le workflow entraînait un traitement incorrect des messages d'exécution ([#7507](https://github.com/nocobase/nocobase/pull/7507)) par @mytharcher

- **[Workflow : Approbation]**
  - Correction du problème où une erreur survenait lors de la suppression de données d'une source de données externe par @mytharcher

  - Correction du problème où les champs de formule dans le formulaire d'approbation ne se mettaient pas à jour automatiquement par @mytharcher
