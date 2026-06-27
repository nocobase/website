---
title: "NocoBase v2.0.0-alpha.46 : Prise en charge du changement dynamique de classe de modèle de flux"
description: "Notes de version de v2.0.0-alpha.46"
---

### 🚀 Améliorations

- **[Moteur de workflow]** Prise en charge du changement dynamique de la classe du modèle de workflow ([#7952](https://github.com/nocobase/nocobase/pull/7952)) par @gchust

- **[Employés IA]** Ajout d'un hook de mise à niveau pour le plugin des employés IA ([#7951](https://github.com/nocobase/nocobase/pull/7951)) par @heziqiang

- **[Gestionnaire de tâches asynchrones]** Messages d'erreur améliorés pour les tâches asynchrones, fournissant aux utilisateurs les raisons spécifiques des échecs de tâches ([#7796](https://github.com/nocobase/nocobase/pull/7796)) par @mytharcher

- **[Workflow : Approbation]**
  - Rendre la charge utile de l'exécution manuelle (ou du déclenchement par un nœud de sous-workflow) compatible avec l'enregistrement ou la clé primaire. Éviter les problèmes de cohérence dans le contexte du déclencheur. par @mytharcher

  - Réduire les associations à charger dans la fenêtre contextuelle d'approbation, pour de meilleures performances. par @mytharcher

  - Correction de la sélection de variable dans AssigneeSelect, limitation de la sélection à la seule clé primaire ou clé étrangère de la collection d'utilisateurs. par @mytharcher

### 🐛 Corrections de bugs

- **[client]** Correction du retour automatique à la ligne des champs de texte dans le bloc de détail lorsque le contenu dépasse la largeur ([#7955](https://github.com/nocobase/nocobase/pull/7955)) par @katherinehhh

- **[Gestionnaire de tâches asynchrones]** Ajout d'une règle de migration pour la collection `asyncTasks`, afin d'éviter la migration des enregistrements de tâches asynchrones ([#7950](https://github.com/nocobase/nocobase/pull/7950)) par @mytharcher

- **[Gestionnaire de fichiers]** Correction du téléchargement de fichiers vers un stockage spécifié au lieu du stockage par défaut ([#7947](https://github.com/nocobase/nocobase/pull/7947)) par @katherinehhh

- **[Workflow : Approbation]** Correction du fichier de langue par @mytharcher
