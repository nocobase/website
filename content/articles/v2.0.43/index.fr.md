---
title: "NocoBase v2.0.43 : Amélioration des performances de la liste d'exécution"
description: "Notes de version de la v2.0.43"
---

### 🚀 Améliorations

- **[Workflow]** Amélioration des performances de la liste d'exécution ([#9214](https://github.com/nocobase/nocobase/pull/9214)) par @mytharcher

- **[Workflow : Approbation]** Ajout d'index sur les colonnes des enregistrements d'approbation pour améliorer les performances des actions de liste et de soumission par @mytharcher

### 🐛 Corrections de bugs

- **[base de données]** Correction d'un problème où les champs décimaux avec validation pouvaient rejeter une saisie numérique valide ([#9204](https://github.com/nocobase/nocobase/pull/9204)) par @2013xile

- **[Utilisateurs]** Correction d'un problème où les champs configurés dynamiquement dans Modifier le profil ne chargeaient pas les dernières données utilisateur ([#9205](https://github.com/nocobase/nocobase/pull/9205)) par @2013xile

- **[Employés IA]** Correction du problème de valeurs manquantes du champ URL pour les pièces jointes dans les sélections de formulaires des employés IA. ([#9216](https://github.com/nocobase/nocobase/pull/9216)) par @cgyrock

- **[Gestionnaire de sources de données]** Correction d'un problème où le tri groupé sur les champs de tri des sources de données externes ne pouvait pas être effacé ([#9203](https://github.com/nocobase/nocobase/pull/9203)) par @2013xile
