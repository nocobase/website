---
title: "NocoBase v1.9.38 : Prise en charge de la configuration d'une liste blanche d'origines CORS"
description: "Notes de version de la v1.9.38"
---

### 🚀 Améliorations

- **[serveur]** Possibilité de configurer une liste blanche d'origines CORS ([#8454](https://github.com/nocobase/nocobase/pull/8454)) par @2013xile

- **[Gestionnaire d'erreurs]** Nettoyage des erreurs de référence SQL ([#8464](https://github.com/nocobase/nocobase/pull/8464)) par @2013xile

### 🐛 Corrections de bugs

- **[client]**
  - Correction d'un problème où les paramètres de tri des groupes de champs de collection ne prenaient pas effet. ([#8453](https://github.com/nocobase/nocobase/pull/8453)) par @katherinehhh

  - Correction d'un problème lors de l'édition d'une collection dans l'interface graphique ([#8451](https://github.com/nocobase/nocobase/pull/8451)) par @katherinehhh

  - Correction du problème où le bouton "Paramètres des colonnes" du tableau était inopérant ([#8441](https://github.com/nocobase/nocobase/pull/8441)) par @zhangzhonghe

  - Correction du problème où les règles de liaison des boutons de ligne du tableau affectaient l'état des boutons dans les formulaires contextuels ([#8434](https://github.com/nocobase/nocobase/pull/8434)) par @zhangzhonghe

- **[Mobile (obsolète)]** Plugin mobile obsolète (remplacé par le plugin ui-layout à partir de la version 2.0). ([#8456](https://github.com/nocobase/nocobase/pull/8456)) par @chenos
