---
title: "NocoBase v2.0.0-alpha.28 : Amélioration du message d'erreur affiché lors de l'échec de la copie de l'UID"
description: "Notes de version de v2.0.0-alpha.28"
---

### 🚀 Améliorations

- **[moteur de flux]** Amélioration du message d'erreur affiché lors de l'échec de la copie de l'UID, fournissant des instructions plus claires pour résoudre le problème. ([#7718](https://github.com/nocobase/nocobase/pull/7718)) par @gchust

### 🐛 Corrections de bugs

- **[moteur de flux]** Les étapes du flux d'événements ne doivent plus être affichées dans les menus de configuration ([#7723](https://github.com/nocobase/nocobase/pull/7723)) par @gchust

- **[client]** Correction d'un problème où des champs non filtrables étaient incorrectement listés dans les options de filtre, garantissant que seuls les champs applicables apparaissent pour la sélection. ([#7700](https://github.com/nocobase/nocobase/pull/7700)) par @gchust

- **[Workflow]** Correction de la valeur du statut d'exécution lors de la création avec report ([#7721](https://github.com/nocobase/nocobase/pull/7721)) par @mytharcher

- **[Employés IA]** Optimisation du comportement de recherche web et des indications utilisateur pour Gemini ([#7720](https://github.com/nocobase/nocobase/pull/7720)) par @cgyrock

- **[Action : Exporter les enregistrements]** Résolution du problème d'affichage de la liste des champs exportables dans l'action d'exportation ([#7714](https://github.com/nocobase/nocobase/pull/7714)) par @katherinehhh

- **[Action : Importer les enregistrements]** Résolution du problème d'affichage de la liste des champs dans les champs importables ([#7710](https://github.com/nocobase/nocobase/pull/7710)) par @katherinehhh

- **[Action : Importer les enregistrements Pro]** Résolution du problème d'affichage de la liste des champs dans les champs importables par @katherinehhh
