---
title: "NocoBase v1.8.6 : Corrections de bugs"
description: "Notes de version de la v1.8.6"
---

### 🐛 Corrections de bugs

- **[client]**
  - Correction de l'erreur : Impossible de résoudre 'react-device-detect' ([#7224](https://github.com/nocobase/nocobase/pull/7224)) par @zhangzhonghe

  - Problème d'affichage pour les champs d'association dans les règles de liaison ([#7220](https://github.com/nocobase/nocobase/pull/7220)) par @katherinehhh

- **[base de données]** Correction d'une erreur lors de l'activation de la pagination simple pour les tables de sources de données externes ([#7222](https://github.com/nocobase/nocobase/pull/7222)) par @aaaaaajie

- **[Champ de collection : Tri]** Sélection du champ de tri manquante lors de la duplication d'enregistrements ([#7116](https://github.com/nocobase/nocobase/pull/7116)) par @katherinehhh

- **[Workflow : Approbation]**
  - Ajout d'une tolérance aux pannes pour les approbations supprimées dans la liste des enregistrements par @mytharcher

  - Correction des associations à plusieurs niveaux lors de la soumission d'une approbation par @mytharcher

  - Correction d'une exception lors de la suppression d'un enregistrement par @mytharcher
