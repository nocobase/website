---
title: "NocoBase v1.9.25 : Ajout d'une logique de tolérance aux pannes pour les données manquantes dans la préparation du processeur"
description: "Notes de version de v1.9.25"
---

### 🚀 Améliorations

- **[Workflow]**
  - Ajout d'une logique de tolérance aux pannes pour les données manquantes lors de la préparation du processeur, afin d'éviter un blocage de l'exécution ([#8156](https://github.com/nocobase/nocobase/pull/8156)) par @mytharcher

  - Utilisation du chargement différé pour les données d'association sur le canevas du workflow afin d'améliorer les performances ([#8142](https://github.com/nocobase/nocobase/pull/8142)) par @mytharcher

### 🐛 Corrections de bugs

- **[acl]** Correction du problème où l'API `acl.can` retournait `null` lorsque le rôle était `root` ([#8150](https://github.com/nocobase/nocobase/pull/8150)) par @mytharcher

- **[Workflow : nœud manuel]** Correction du problème où la liste des tâches manuelles utilisait une API incorrecte ([#8144](https://github.com/nocobase/nocobase/pull/8144)) par @mytharcher

- **[Chiffrement des requêtes HTTP]** Utilisation de crochets pour le format tableau dans l'analyse qs par @chenos

- **[Workflow : Approbation]** Correction du problème où une erreur était levée lors de l'annulation d'une exécution lorsque son workflow avait été supprimé par @mytharcher

- **[Gestionnaire de migration]** Correction d'un problème où les sauts de ligne dans les données étaient perdus lors de la migration. par @cgyrock
