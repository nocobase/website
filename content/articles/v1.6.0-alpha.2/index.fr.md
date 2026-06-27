---
title: "NocoBase v1.6.0-alpha.2 : Prise en charge de l'ouverture de pop-ups via des liens sur le champ readPretty"
description: "Notes de version de v1.6.0-alpha.2"
---

### 🎉 Nouvelles fonctionnalités

- **[client]**
  - Prise en charge de l'ouverture de pop-ups via les liens sur le champ readPretty ([#5747](https://github.com/nocobase/nocobase/pull/5747)) par @katherinehhh

  - Prise en charge des actions d'association et de dissociation dans les blocs d'association ([#5695](https://github.com/nocobase/nocobase/pull/5695)) par @katherinehhh

- **[serveur]** Ajout d'un gestionnaire d'audit ([#5601](https://github.com/nocobase/nocobase/pull/5601)) par @chenzhizdt

- **[Workflow]** Prise en charge du déclenchement manuel des workflows ([#5664](https://github.com/nocobase/nocobase/pull/5664)) par @mytharcher

- **[Workflow : Événement pré-action]** Prise en charge du déclenchement manuel des workflows par @mytharcher

### 🚀 Améliorations

- **[client]**
  - Implémentation du chargement à la demande pour les composants front-end ([#5647](https://github.com/nocobase/nocobase/pull/5647)) par @gchust

  - Amélioration des performances de rendu des pages et prise en charge de la fonctionnalité de maintien en mémoire des pages ([#5515](https://github.com/nocobase/nocobase/pull/5515)) par @zhangzhonghe

- **[Champ de collection : Tri]** Ajout d'une description de plugin ([#5720](https://github.com/nocobase/nocobase/pull/5720)) par @mytharcher

- **[Intégration NocoBase]** Amélioration des performances de rendu des pages par @zhangzhonghe

### 🐛 Corrections de bugs

- **[client]**
  - Correction des problèmes empêchant l'utilisation correcte des variables dans les blocs de sources de données tierces ([#5782](https://github.com/nocobase/nocobase/pull/5782)) par @zhangzhonghe

  - Correction du problème où les valeurs des champs d'association sont vides dans les modèles de blocs. Correction du problème où la portée des données des blocs utilisant des variables ne fonctionne pas correctement avec les sources de données tierces ([#5777](https://github.com/nocobase/nocobase/pull/5777)) par @zhangzhonghe

  - Correction du problème où les propriétés dynamiques des composants ne fonctionnent pas avec le chargement différé ([#5776](https://github.com/nocobase/nocobase/pull/5776)) par @gchust

  - Correction du message d'avertissement dans React lors du chargement dynamique de hooks dans l'environnement de développement ([#5758](https://github.com/nocobase/nocobase/pull/5758)) par @gchust

- **[Visualisation de données]** Correction du problème où les composants de champ de filtre des blocs de graphiques ne s'affichent pas ([#5769](https://github.com/nocobase/nocobase/pull/5769)) par @2013xile
