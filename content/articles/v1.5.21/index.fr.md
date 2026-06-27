---
title: "NocoBase v1.5.21 : Chargement paresseux des résultats de tâches pour de meilleures performances"
description: "Notes de version de la v1.5.21"
---

### 🚀 Améliorations

- **[Workflow]** Chargement différé des résultats de tâche pour de meilleures performances ([#6344](https://github.com/nocobase/nocobase/pull/6344)) par @mytharcher

- **[Workflow : Nœud d'agrégation]** Ajout d'un processus d'arrondi pour les nombres agrégés basés sur le type double ([#6358](https://github.com/nocobase/nocobase/pull/6358)) par @mytharcher

### 🐛 Corrections de bugs

- **[client]**
  - Les composants de sous-formulaire ne s'alignent pas avec le formulaire principal lorsque l'étiquette est masquée ([#6357](https://github.com/nocobase/nocobase/pull/6357)) par @katherinehhh

  - Le bloc d'association ne s'affiche pas dans la fenêtre contextuelle lors de l'héritage de collection ([#6303](https://github.com/nocobase/nocobase/pull/6303)) par @katherinehhh

  - Correction de l'erreur levée lors de la création d'une collection de fichiers ([#6363](https://github.com/nocobase/nocobase/pull/6363)) par @mytharcher

- **[Workflow]** Correction de l'ACL pour la récupération de tâche ([#6352](https://github.com/nocobase/nocobase/pull/6352)) par @mytharcher
