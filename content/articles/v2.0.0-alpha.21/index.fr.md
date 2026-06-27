---
title: "NocoBase v2.0.0-alpha.21 : Corrections de bugs"
description: "Notes de version de v2.0.0-alpha.21"
---

### 🚀 Améliorations

- **[cache]** Éviter la surcharge de performance causée par le clonage des filtres Bloom ([#7652](https://github.com/nocobase/nocobase/pull/7652)) par @2013xile

- **[serveur]** Optimiser la méthode de chargement des ressources l10n pour éviter de bloquer la boucle d'événements ([#7653](https://github.com/nocobase/nocobase/pull/7653)) par @2013xile

- **[Action : Importer des enregistrements]** Amélioration des messages d'erreur lorsque les en-têtes de tableau sont manquants ([#7656](https://github.com/nocobase/nocobase/pull/7656)) par @mytharcher

### 🐛 Corrections de bugs

- **[client]** Empêcher la coupure des mots dans l'étiquette formItem ([#7647](https://github.com/nocobase/nocobase/pull/7647)) par @katherinehhh

- **[Visualisation des données]** Correction d'un problème de requête SQL lors de l'analyse des variables ([#7642](https://github.com/nocobase/nocobase/pull/7642)) par @heziqiang

- **[Workflow]** Correction de l'erreur du journal déclenchée lors de l'arrêt de l'application ([#7639](https://github.com/nocobase/nocobase/pull/7639)) par @mytharcher
