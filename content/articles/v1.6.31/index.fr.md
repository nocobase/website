---
title: "NocoBase v1.6.31 : Ajout de toutes les clés de localisation en-US manquantes"
description: "Notes de version de la v1.6.31"
---

### 🚀 Améliorations

- **[Workflow]** Ajout de toutes les clés de localisation en-US manquantes ([#6885](https://github.com/nocobase/nocobase/pull/6885)) par @mytharcher

### 🐛 Corrections de bugs

- **[database]** Gestion des cellules contenant des chaînes vides lors de l'importation de champs pour éviter les erreurs ([#6880](https://github.com/nocobase/nocobase/pull/6880)) par @aaaaaajie

- **[client]**
  - La table de sélection des enregistrements d'association ne filtrait pas les enregistrements déjà associés ([#6874](https://github.com/nocobase/nocobase/pull/6874)) par @katherinehhh

  - Les données d'association n'étaient pas soumises lors de l'exposition des champs d'association dans un sous-formulaire ([#6883](https://github.com/nocobase/nocobase/pull/6883)) par @katherinehhh

  - Les champs de tri glisser-déposer n'affichaient pas correctement les options disponibles ([#6875](https://github.com/nocobase/nocobase/pull/6875)) par @katherinehhh

- **[Workflow]** Correction du fonctionnement incorrect de la limite de pile pour les événements de collection ([#6876](https://github.com/nocobase/nocobase/pull/6876)) par @mytharcher

- **[Bloc : Panneau d'actions]** Lecture du nom de base de la route à partir du scanner pour s'adapter à l'environnement de bureau. ([#6877](https://github.com/nocobase/nocobase/pull/6877)) par @sheldon66

- **[Workflow : Nœud manuel]** Correction d'une erreur de rendu lors de l'affichage d'un élément non traité ([#6879](https://github.com/nocobase/nocobase/pull/6879)) par @mytharcher

- **[Workflow : Approbation]** Correction de la portée des destinataires pour la délégation et ajout aux autres destinataires par @mytharcher


