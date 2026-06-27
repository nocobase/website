---
title: "NocoBase v2.0.0-alpha.49 : Permet de choisir d'afficher l'instantané ou le dernier enregistrement dans l'interface du processus d'approbation"
description: "Notes de version de v2.0.0-alpha.49"
---

### 🎉 Nouvelles fonctionnalités

- **[Workflow : Approbation]** Permet de choisir d'afficher l'instantané ou le dernier enregistrement dans l'interface utilisateur du processus d'approbation par @mytharcher

### 🚀 Améliorations

- **[client]** Optimisation des messages de validation pour les sous-tableaux ([#8001](https://github.com/nocobase/nocobase/pull/8001)) par @katherinehhh

- **[Télémétrie : Prometheus]** Mise à niveau de `@opentelemetry/exporter-prometheus` par @2013xile

- **[Action : Importer des enregistrements Pro]** Messages d'erreur améliorés pour les tâches asynchrones afin de fournir aux utilisateurs les raisons spécifiques des échecs de tâches par @mytharcher

### 🐛 Corrections de bugs

- **[moteur de flux]** Correction d'un problème où la variable d'enregistrement actuel ne pouvait pas être correctement déclenchée pour la résolution dans le bloc de détails. ([#8004](https://github.com/nocobase/nocobase/pull/8004)) par @gchust

- **[client]** Correction des problèmes de sélection et de suppression de blocs de tableau pour les clés composites ([#7978](https://github.com/nocobase/nocobase/pull/7978)) par @katherinehhh

- **[Action : Exporter des enregistrements]** Correction des champs système manquants dans la liste des champs exportables ([#8002](https://github.com/nocobase/nocobase/pull/8002)) par @katherinehhh

- **[Collection : Arborescence]** Correction des échecs de mise à jour de la table de chemin causés par une recherche incorrecte du champ parent de l'arborescence ([#8000](https://github.com/nocobase/nocobase/pull/8000)) par @2013xile

- **[Champ de collection : Plusieurs à plusieurs (tableau)]** Correction du problème où le champ m2m de type tableau dans le sous-tableau ne pouvait pas être mis à jour ([#7998](https://github.com/nocobase/nocobase/pull/7998)) par @cgyrock

- **[Départements]** Correction du problème où les champs associés au département ne pouvaient pas être modifiés ([#7462](https://github.com/nocobase/nocobase/pull/7462)) par @heziqiang

- **[Workflow : Approbation]** Correction d'un problème de permission lors de la récupération de `approvalRecords.reassignee` suite à une modification de `RemoteSelect` par @mytharcher
