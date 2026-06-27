---
title: "NocoBase v2.1.0-alpha.32 : ajout de l'option de limite de plage de dates pour les champs de date dans les formulaires v2"
description: "Notes de version de v2.1.0-alpha.32"
---

### 🎉 Nouvelles fonctionnalités

- **[client]** ajout d'une option de limite de plage de dates pour les champs de date dans les formulaires v2 ([#9400](https://github.com/nocobase/nocobase/pull/9400)) par @katherinehhh

- **[moteur de workflow]** Migration de `plugin-environment-variables` vers client-v2 avec une page de paramètres basée sur React et une variable d'exécution `$env` enregistrée globalement ; ajout d'une entrée client-v2 à `plugin-file-manager` avec une page de configuration de stockage basée sur React et un champ de téléversement, une action de téléversement et un aperçu basés sur FlowModel. ([#9413](https://github.com/nocobase/nocobase/pull/9413)) par @Molunerfinn

### 🚀 Améliorations

- **[non défini]** prise en charge de l'environnement courant limité à la session dans nb cli ([#9415](https://github.com/nocobase/nocobase/pull/9415)) par @chenos

### 🐛 Corrections de bugs

- **[client]**
  - Correction d'un problème où la fenêtre contextuelle de valeur par défaut pour les champs d'association dans le formulaire de création s'affichait incorrectement. ([#9408](https://github.com/nocobase/nocobase/pull/9408)) par @gchust

  - Correction d'un problème où le code JS ne pouvait plus être modifié après qu'un champ JS ait été défini en lecture seule. ([#9404](https://github.com/nocobase/nocobase/pull/9404)) par @gchust

  - Correction du problème où les onglets de page v2 ne se synchronisaient pas immédiatement après l'enregistrement des paramètres ([#9396](https://github.com/nocobase/nocobase/pull/9396)) par @zhangzhonghe

  - Correction d'un problème où les affectations de champs de sous-tableau ne prenaient pas effet dans les règles de liaison de champs. ([#9412](https://github.com/nocobase/nocobase/pull/9412)) par @gchust

- **[Champ de collection : Markdown(Vditor)]** correction de l'infobulle du champ markdown qui était masquée dans la disposition de formulaire horizontale ([#9420](https://github.com/nocobase/nocobase/pull/9420)) par @katherinehhh

- **[Client WEB]** Correction du filtrage par type de route lors de l'utilisation d'étiquettes traduites ([#9425](https://github.com/nocobase/nocobase/pull/9425)) par @zhangzhonghe

- **[Mobile (obsolète)]** Correction des fenêtres contextuelles de message mobile qui ne pouvaient pas être fermées ou défilées ([#9424](https://github.com/nocobase/nocobase/pull/9424)) par @zhangzhonghe

- **[Workflow : Approbation]** Correction du problème où le champ JS apparaissait dans les paramètres du processus d'approbation par @zhangzhonghe
