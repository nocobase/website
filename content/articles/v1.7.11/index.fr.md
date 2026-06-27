---
title: "NocoBase v1.7.11 : Prise en charge de la copie en un clic du contenu des champs de texte"
description: "Notes de version de v1.7.11"
---

### 🎉 Nouvelles fonctionnalités

- **[Copie de texte]** Prise en charge de la copie en un clic du contenu des champs de texte ([#6954](https://github.com/nocobase/nocobase/pull/6954)) par @zhangzhonghe

### 🐛 Corrections de bugs

- **[client]**
  - Le sélecteur de champ d'association n'efface pas les données sélectionnées après la soumission ([#7067](https://github.com/nocobase/nocobase/pull/7067)) par @katherinehhh

  - Correction de l'indication de taille de téléchargement ([#7057](https://github.com/nocobase/nocobase/pull/7057)) par @mytharcher

- **[serveur]** Impossible de lire les propriétés de undefined (lecture de 'setMaaintainingMessage') ([#7064](https://github.com/nocobase/nocobase/pull/7064)) par @chenos

- **[Workflow : Nœud de boucle]** Correction de l'exécution de la branche de boucle lorsque la condition n'est pas satisfaite ([#7063](https://github.com/nocobase/nocobase/pull/7063)) par @mytharcher

- **[Workflow : Approbation]**
  - Correction des statistiques de tâches non mises à jour lorsque l'exécution est annulée par @mytharcher

  - Correction de la variable de déclencheur lors du filtrage par type par @mytharcher
