---
title: "NocoBase v2.0.0-alpha.4 : Optimisation de la fonctionnalité de glisser-déposer"
description: "Notes de version de v2.0.0-alpha.4"
---

### 🚀 Améliorations

- **[moteur de flux]** Optimisation de la fonctionnalité de glisser-déposer ([#7526](https://github.com/nocobase/nocobase/pull/7526)) par @zhangzhonghe

- **[Workflow : nœud de boucle]** Prise en charge de la limitation du nombre maximal de cycles pour les nœuds de boucle via des variables d'environnement ([#7543](https://github.com/nocobase/nocobase/pull/7543)) par @mytharcher

- **[Workflow]** Prise en charge de la limitation du nombre maximal de nœuds dans un workflow via des variables d'environnement ([#7542](https://github.com/nocobase/nocobase/pull/7542)) par @mytharcher

- **[Workflow : Approbation]** Ajout d'un bouton d'impression dans la fenêtre contextuelle de détail des blocs d'approbation personnalisés par @mytharcher

### 🐛 Corrections de bugs

- **[client]** Correction d'un problème où l'action "Exécuter" dans l'éditeur de code ne fonctionnait pas, garantissant désormais aux utilisateurs d'exécuter correctement le code. ([#7547](https://github.com/nocobase/nocobase/pull/7547)) par @gchust

- **[Employés IA]** Correction de l'erreur sur la page de configuration des permissions des employés IA ([#7548](https://github.com/nocobase/nocobase/pull/7548)) par @2013xile

- **[Workflow]** Correction du problème où l'ajout d'un workflow dans la configuration du bouton de workflow lié provoquait le blocage de l'application après un clic ([#7541](https://github.com/nocobase/nocobase/pull/7541)) par @mytharcher

- **[Gestionnaire d'emails]** Exception de réautorisation par @jiannx
