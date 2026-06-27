---
title: "NocoBase v1.9.12 : Messages d'erreur améliorés pour les tâches asynchrones afin de fournir aux utilisateurs les raisons spécifiques des échecs de tâches"
description: "Notes de version de v1.9.12"
---

### 🚀 Améliorations

- **[client]** Ajout d'un état de chargement pour les boutons d'action de mise à jour et de suppression d'enregistrement, afin d'éviter les requêtes en double ([#7964](https://github.com/nocobase/nocobase/pull/7964)) par @mytharcher

- **[Gestionnaire de tâches asynchrones]** Messages d'erreur améliorés pour les tâches asynchrones, fournissant aux utilisateurs les raisons spécifiques des échecs de tâches ([#7796](https://github.com/nocobase/nocobase/pull/7796)) par @mytharcher

- **[Action : Importer des enregistrements Pro]** Messages d'erreur améliorés pour les tâches asynchrones, fournissant aux utilisateurs les raisons spécifiques des échecs de tâches par @mytharcher

- **[Workflow : Approbation]**
  - Correction de la sélection de variable dans AssigneeSelect, limitation de la sélection aux seules clés primaires ou étrangères de la collection d'utilisateurs par @mytharcher

  - Réduction des associations à charger dans la fenêtre contextuelle d'approbation, pour de meilleures performances par @mytharcher

  - Rendre la charge utile de l'exécution manuelle (ou du déclenchement par un nœud de sous-flux) compatible avec l'enregistrement ou la clé primaire. Éviter les problèmes de cohérence dans le contexte du déclencheur. par @mytharcher

### 🐛 Corrections de bugs

- **[Gestionnaire de tâches asynchrones]** Ajout d'une règle de migration pour la collection `asyncTasks`, afin d'éviter la migration des enregistrements de tâches asynchrones ([#7950](https://github.com/nocobase/nocobase/pull/7950)) par @mytharcher

- **[Workflow : Approbation]** Correction du fichier de langue par @mytharcher
