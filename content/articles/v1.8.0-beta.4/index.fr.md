---
title: "NocoBase v1.8.0-beta.4 : Optimisation des performances lors du traitement de fichiers XLSX volumineux"
description: "Notes de version de v1.8.0-beta.4"
---

### 🚀 Améliorations

- **[Action : Modification par lot]** Utilisation de `filterByTk` au lieu de `filter` en mode sélectionné ([#6994](https://github.com/nocobase/nocobase/pull/6994)) par @mytharcher

- **[Action : Importer des enregistrements Pro]** Optimisation des performances lors du traitement de fichiers XLSX volumineux (jeux de données à nombreuses lignes/colonnes), évitant les plantages ou blocages du système. par @aaaaaajie

### 🐛 Corrections de bugs

- **[client]**
  - Titre de champ manquant dans le composant assignedField ([#6987](https://github.com/nocobase/nocobase/pull/6987)) par @katherinehhh

  - Le dernier élément du menu ne peut pas être sélectionné dans la liste de déplacement du menu ([#6997](https://github.com/nocobase/nocobase/pull/6997)) par @zhangzhonghe

- **[Workflow]**
  - Correction du filtre non mis à jour lors du changement d'onglets de catégories ([#6989](https://github.com/nocobase/nocobase/pull/6989)) par @mytharcher

  - Correction des statistiques de workflow non créées automatiquement ([#6993](https://github.com/nocobase/nocobase/pull/6993)) par @mytharcher
