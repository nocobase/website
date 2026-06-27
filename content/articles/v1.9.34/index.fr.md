---
title: "NocoBase v1.9.34 : Amélioration des vérifications de permissions lors de la modification de champs d'association imbriqués"
description: "Notes de version de la v1.9.34"
---

### 🚀 Améliorations

- **[Contrôle d'accès]** Amélioration des vérifications de permissions lors de la modification de champs d'association imbriqués ([#7856](https://github.com/nocobase/nocobase/pull/7856)) par @2013xile

### 🐛 Corrections de bugs

- **[client]**
  - Correction du chargement des données des champs d'association provenant de sources de données externes dans les blocs de formulaire ([#8356](https://github.com/nocobase/nocobase/pull/8356)) par @katherinehhh

  - Correction du problème où les champs d'association n'étaient pas corrects dans le composant `FilterAction` ([#8295](https://github.com/nocobase/nocobase/pull/8295)) par @mytharcher

- **[logger]** Correction du problème où des informations d'erreur supplémentaires étaient ignorées lors de l'impression des logs système ([#8367](https://github.com/nocobase/nocobase/pull/8367)) par @cgyrock

- **[Workflow : Nœud de boucle]** Correction du problème où un nœud en échec dans une branche conditionnelle ne pouvait pas transmettre son statut au nœud de branchement supérieur ([#8360](https://github.com/nocobase/nocobase/pull/8360)) par @mytharcher

- **[Source de données : Principale]** Les métadonnées de la collection de vues doivent inclure les options des champs source ([#8337](https://github.com/nocobase/nocobase/pull/8337)) par @2013xile

- **[Workflow]**
  - Correction d'un problème de règle de liaison dans le bloc de détails du nœud CC du workflow ([#8381](https://github.com/nocobase/nocobase/pull/8381)) par @zhangzhonghe

  - Ajout de l'ID d'instance à l'ID Snowflake des jobs, pour éviter les conflits d'ID en mode cluster ([#8382](https://github.com/nocobase/nocobase/pull/8382)) par @mytharcher

  - Correction du problème de plantage de la page d'exécution lorsqu'un workflow est supprimé ([#8361](https://github.com/nocobase/nocobase/pull/8361)) par @mytharcher

- **[Action : Importer des enregistrements]** Correction d'un message d'erreur incorrect lorsqu'une erreur de contrainte d'unicité est déclenchée lors d'une importation XLSX asynchrone ([#8342](https://github.com/nocobase/nocobase/pull/8342)) par @cgyrock

- **[Contrôle d'accès]**
  - Autoriser les champs d'association à s'associer en utilisant les clés cibles ([#8352](https://github.com/nocobase/nocobase/pull/8352)) par @2013xile

  - Correction d'un problème où la source de données était incorrectement résolue lors du traitement des permissions pour les champs d'association ([#8370](https://github.com/nocobase/nocobase/pull/8370)) par @2013xile

- **[Source de données : API REST]** Ajout d'une tolérance aux pannes pour le contexte de requête, afin d'éviter une erreur lorsque la méthode n'est pas dans le contexte par @mytharcher

- **[Action : Exporter des enregistrements Pro]** Correction d'une erreur lors de l'exécution de tâches d'import/export asynchrones par les sous-applications lorsque l'application principale n'active pas le plugin d'import/export pro par @cgyrock

- **[Workflow : Approbation]** Correction du problème où les champs de filtre ne fonctionnaient pas correctement dans le centre de tâches par @mytharcher
