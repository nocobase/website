---
title: "NocoBase v1.9.8 : Corrections de bugs"
description: "Notes de version de la v1.9.8"
---

### 🐛 Corrections de bugs

- **[Workflow : Événement d'action personnalisée]** Correction de l'erreur causée par l'écoute d'événements de source de données externes inexistants par @mytharcher
- **[Impression de modèle]** Analyse des variables dans le filtre par @jiannx
- **[Workflow : Approbation]** Correction d'un problème où des conditions de concurrence survenant lors du traitement d'approbation simultané par plusieurs approbateurs pouvaient entraîner l'exécution d'un nœud de workflow plus d'une fois par @mytharcher
