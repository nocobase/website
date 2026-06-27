---
title: "NocoBase v1.8.13 : Ajout d'options de configuration liées à la signature"
description: "Notes de version de la v1.8.13"
---

### 🎉 Nouvelles fonctionnalités

- **[Auth : SAML 2.0]** Ajout d'options de configuration liées à la signature par @2013xile

### 🚀 Améliorations

- **[Workflow : JavaScript]** Remplacement du cache par le cache de l'application pour éviter les bugs en mode cluster par @mytharcher

### 🐛 Corrections de bugs

- **[client]**
  - Correction de l'infobulle affichant [object Object] au survol dans le panneau d'actions ([#7322](https://github.com/nocobase/nocobase/pull/7322)) par @katherinehhh

  - Lors de l'utilisation de variables pour définir les valeurs par défaut des champs dans les formulaires de filtre, si la valeur de la variable est vide, la zone de saisie affiche la chaîne de variable d'origine ([#7335](https://github.com/nocobase/nocobase/pull/7335)) par @zhangzhonghe

- **[Collection : Arborescence]** Correction de la logique de synchronisation des chemins des collections arborescentes ([#7330](https://github.com/nocobase/nocobase/pull/7330)) par @ChimingLiu
