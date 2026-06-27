---
title: "NocoBase v1.9.0-beta.14 : Exposition de la variable `approvalId` pour utilisation à partir des déclencheurs d'approbation"
description: "Notes de version de v1.9.0-beta.14"
---

### 🎉 Nouvelles fonctionnalités

- **[Workflow : Approbation]** Exposition de la variable `approvalId` pour une utilisation depuis les déclencheurs d'approbation par @mytharcher

### 🚀 Améliorations

- **[serveur]** Optimisation de la méthode de chargement des ressources l10n pour éviter de bloquer la boucle d'événements ([#7653](https://github.com/nocobase/nocobase/pull/7653)) par @2013xile

- **[cache]** Éviter la surcharge de performance causée par le clonage des filtres Bloom ([#7652](https://github.com/nocobase/nocobase/pull/7652)) par @2013xile

- **[Action : Importer des enregistrements]** Amélioration des messages d'erreur lorsque les en-têtes de tableau sont manquants ([#7656](https://github.com/nocobase/nocobase/pull/7656)) par @mytharcher

### 🐛 Corrections de bugs

- **[client]** Empêcher la coupure des mots dans les libellés des éléments de formulaire ([#7647](https://github.com/nocobase/nocobase/pull/7647)) par @katherinehhh

- **[Workflow]** Correction d'une erreur de journalisation déclenchée lors de l'arrêt de l'application ([#7639](https://github.com/nocobase/nocobase/pull/7639)) par @mytharcher

- **[Workflow : Approbation]**
  - Correction du problème de délai d'attente des transactions causé par un non-rollback correct des transactions en cas d'erreur de base de données après la soumission de l'approbation par @mytharcher

  - Correction du problème où le nombre de tâches n'était pas mis à jour après l'ajout d'un assigné par @mytharcher

  - Correction du problème où les variables n'étaient pas analysées dans le formulaire de soumission d'approbation par @mytharcher

- **[Gestionnaire d'emails]** Capture des erreurs synchrones par @jiannx
