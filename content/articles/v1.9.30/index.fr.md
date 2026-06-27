---
title: "NocoBase v1.9.30 : Amélioration de la description du champ `changed` dans l'événement de collection"
description: "Notes de version v1.9.30"
---

### 🚀 Améliorations

- **[Workflow]** Amélioration de la description du champ `changed` dans l'événement de collection ([#8216](https://github.com/nocobase/nocobase/pull/8216)) par @mytharcher

### 🐛 Corrections de bugs

- **[cli]** license-kit est compatible avec le cas où DB_PASSWORD est vide ([#8220](https://github.com/nocobase/nocobase/pull/8220)) par @jiannx

- **[base de données]** Correction de l'incohérence des requêtes de champ de date entre la source de données principale et les sources externes ([#8181](https://github.com/nocobase/nocobase/pull/8181)) par @cgyrock

- **[Paramètres de licence]** Correction de l'affichage anormal du plugin sous licence ([#8214](https://github.com/nocobase/nocobase/pull/8214)) par @jiannx

- **[Workflow : Approbation]**
  - Correction du problème où l'approbation créait une association vers un nouvel enregistrement par @mytharcher

  - Correction du problème où l'approbation créait une association de type "plusieurs" vers de nouveaux enregistrements par @mytharcher
