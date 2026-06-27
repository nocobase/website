---
title: "NocoBase v1.9.0-alpha.17 : Améliorations et correctifs du workflow"
description: "Notes de version de v1.9.0-alpha.17"
---

### 🚀 Améliorations

- **[Workflow]** Séparation de la logique liée à la répartition dans un dispatcher autonome ([#7535](https://github.com/nocobase/nocobase/pull/7535)) par @mytharcher

### 🐛 Corrections de bugs

- **[Workflow]**
  - Correction du problème d'exécution en double dû à une gestion inappropriée de la file d'attente ([#7533](https://github.com/nocobase/nocobase/pull/7533)) par @mytharcher

  - Correction du problème où les tâches planifiées basées sur des champs de date ne se déclenchaient pas après le démarrage ([#7524](https://github.com/nocobase/nocobase/pull/7524)) par @mytharcher
