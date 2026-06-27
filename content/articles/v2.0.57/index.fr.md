---
title: "NocoBase v2.0.57 : Correction de l'obfuscation du serveur de plugins pour éviter les globaux navigateur dans les bundles d'exécution Node.js"
description: "Notes de version de la v2.0.57"
---

### 🐛 Corrections de bugs

- **[build]** Correction de l'obfuscation du serveur de plugins pour éviter les variables globales du navigateur dans les bundles d'exécution Node.js. ([#9559](https://github.com/nocobase/nocobase/pull/9559)) par @Molunerfinn

- **[Workflow : Nœud manuel]** Correction des sauvegardes temporaires pour les tâches de workflow manuel qui ne persistaient pas les valeurs de formulaire soumises. ([#9554](https://github.com/nocobase/nocobase/pull/9554)) par @mytharcher

- **[Employés IA]** Correction d'une description incorrecte du nom de l'outil dans le prompt de contexte de travail ([#9567](https://github.com/nocobase/nocobase/pull/9567)) par @cgyrock

- **[Gestionnaire de fichiers]** Rendu sécurisé des aperçus PDF avec PDF.js au lieu du rendu PDF brut basé sur iframe. ([#9566](https://github.com/nocobase/nocobase/pull/9566)) par @mytharcher

- **[Auth : OIDC]** Correction d'une fuite de jeton lorsque les rappels de connexion SSO reçoivent une URL de redirection externe par @2013xile

- **[Workflow : Approbation]**
  - Correction du problème où l'API `jobs:resume` n'était pas prise en charge par le nœud d'approbation par @mytharcher

  - Correction du retrait d'approbation pour mettre à jour les données métier soumises tout en respectant les permissions de mise à jour de la collection source. par @mytharcher

  - Correction des tâches d'approbation obsolètes lorsque les workflows d'approbation sont interrompus par des échecs de nœuds non liés à l'approbation. par @mytharcher
