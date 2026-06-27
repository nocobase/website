---
title: "NocoBase v2.0.0-beta.15 : Ajout de plus de types de fichiers pour la prévisualisation sur Microsoft"
description: "Notes de version de v2.0.0-beta.15"
---

### 🚀 Améliorations

- **[Visionneuse de fichiers Office]** Ajout de nouveaux types de fichiers pour la prévisualisation sur Microsoft ([#8500](https://github.com/nocobase/nocobase/pull/8500)) par @mytharcher

### 🐛 Corrections de bugs

- **[Base de données]** Correction des erreurs lors du filtrage avec l'opérateur `empty` après le rechargement d'une collection ([#8496](https://github.com/nocobase/nocobase/pull/8496)) par @2013xile

- **[Impression de modèles]** Correction de la logique incorrecte des autorisations du bouton d'impression lorsque les rôles étaient unifiés. par @jiannx

- **[Workflow : Approbation]** Correction du problème où une erreur était levée dans la fenêtre contextuelle des enregistrements d'approbation en version 1.x par @mytharcher

- **[Gestionnaire de migration]** Correction d'un potentiel blocage de processus causé par la journalisation de requêtes SQL excessivement volumineuses incluses dans les exceptions d'erreur de migration par @cgyrock
