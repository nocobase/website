---
title: "NocoBase v1.4.0-alpha.12 : Corrections de bugs"
description: "Notes de version de v1.4.0-alpha.12"
---

### 🐛 Corrections de bugs

- **[client]**
  - Correction de la correspondance des types de fichiers lorsque le fichier ou la propriété est nul ([#5659](https://github.com/nocobase/nocobase/pull/5659)) par @mytharcher

  - Correction du comptage de pagination qui ne se mettait pas à jour après la suppression de données dans un sous-tableau ([#5648](https://github.com/nocobase/nocobase/pull/5648)) par @katherinehhh

- **[Workflow]** Correction de la disparition d'un nœud après l'ajout d'une condition sans branche préalable ([#5658](https://github.com/nocobase/nocobase/pull/5658)) par @mytharcher

- **[Mobile]** Problème de style lors de l'utilisation d'un texte long comme champ de titre dans un champ d'association ([#5655](https://github.com/nocobase/nocobase/pull/5655)) par @katherinehhh

- **[Workflow : Événement d'action personnalisée]** Correction d'une erreur lors de l'utilisation d'un champ d'URL de pièce jointe avec une source de données externe par @katherinehhh
