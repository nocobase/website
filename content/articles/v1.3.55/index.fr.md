---
title: "NocoBase v1.3.55 : Utiliser des icônes avec des significations plus précises pour les initialiseurs de blocs"
description: "Notes de version de v1.3.55"
---

### 🚀 Améliorations

- **[client]** Utilisation d'icônes avec des significations plus précises pour les initialiseurs de blocs ([#5757](https://github.com/nocobase/nocobase/pull/5757)) par @mytharcher

### 🐛 Corrections de bugs

- **[client]**
  - Correction des cas E2E basés sur les icônes modifiées ([#5768](https://github.com/nocobase/nocobase/pull/5768)) par @mytharcher

  - Correction du champ de sélection qui affichait un espace vide lorsque les données sont absentes ([#5762](https://github.com/nocobase/nocobase/pull/5762)) par @katherinehhh

- **[base de données]** Correction de la mise à jour des valeurs d'association hasOne/belongsTo sans clé étrangère ([#5754](https://github.com/nocobase/nocobase/pull/5754)) par @chareice

- **[Gestionnaire de source de données]** Correction de l'affichage incorrect de la clé source ([#5771](https://github.com/nocobase/nocobase/pull/5771)) par @katherinehhh

- **[Workflow : Événement d'action personnalisée]**
  - Autorisation pour tous les rôles de déclencher un événement d'action personnalisée dans les sources de données externes par @mytharcher

  - Correction de la source de données par défaut comme principale par @mytharcher

  - Correction de l'erreur de source de données lorsqu'il n'y a pas de correspondance par @mytharcher

  - Correction du déclencheur d'action personnalisée qui ne se déclenchait pas sur une association par @mytharcher
