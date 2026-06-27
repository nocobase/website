---
title: "NocoBase v1.4.9 : Corrections de bugs"
description: "Notes de version de la v1.4.9"
---

### 🐛 Corrections de bugs

- **[sdk]** Suppression de la locale par défaut ([#5867](https://github.com/nocobase/nocobase/pull/5867)) par @chenos

- **[client]**
  - Correction du problème où les variables de champs d'association imbriqués dans la portée des données ont des valeurs vides ([#5866](https://github.com/nocobase/nocobase/pull/5866)) par @zhangzhonghe

  - Correction de l'apparition de la barre de défilement lorsqu'il y a moins de colonnes avec une colonne fixe à droite ([#5864](https://github.com/nocobase/nocobase/pull/5864)) par @katherinehhh

  - Correction du style de position incorrect du composant `FilterItem` ([#5851](https://github.com/nocobase/nocobase/pull/5851)) par @mytharcher

- **[Gestionnaire de sauvegarde]** Correction de l'échec du téléchargement de la sauvegarde pour les sous-applications avec un domaine personnalisé par @gchust
