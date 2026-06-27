---
title: "NocoBase v1.5.0-beta.34 : ajout de motifs de caractères aléatoires"
description: "Notes de version de la v1.5.0-beta.34"
---

### 🎉 Nouvelles fonctionnalités

- **[Workflow]** Ajout de motifs de caractères aléatoires ([#5959](https://github.com/nocobase/nocobase/pull/5959)) par @kennnnnnnnnn

### 🚀 Améliorations

- **[Workflow : Calcul JSON]** Modification du nom et du groupe du nœud JSON-query par @mytharcher

### 🐛 Corrections de bugs

- **[client]**
  - Les règles de liaison du bouton ne fonctionnent pas correctement en raison d'un problème de séquence ([#6147](https://github.com/nocobase/nocobase/pull/6147)) par @zhangzhonghe

  - Anomalie de mise en page après la suppression de blocs ou de champs ([#6139](https://github.com/nocobase/nocobase/pull/6139)) par @zhangzhonghe

  - Données non affichées pour le champ d'association dans les sous-détails ([#6117](https://github.com/nocobase/nocobase/pull/6117)) par @zhangzhonghe

  - Correction des paramètres de champ non filtrable du bouton de filtre affectant d'autres tables avec la même collection ([#6121](https://github.com/nocobase/nocobase/pull/6121)) par @katherinehhh

  - Correction du problème où les valeurs par défaut des champs d'association ne sont pas actualisées après un changement de page ([#6114](https://github.com/nocobase/nocobase/pull/6114)) par @zhangzhonghe

  - Correction du problème où le « mode de chargement des données » devient invalide après un changement de page ([#6115](https://github.com/nocobase/nocobase/pull/6115)) par @zhangzhonghe

- **[Workflow]** Ajout d'un cas de test pour l'action « déplacer » afin de déclencher un workflow ([#6145](https://github.com/nocobase/nocobase/pull/6145)) par @mytharcher
