---
title: "NocoBase v2.0.47 : Le fournisseur LLM prend désormais en charge la plateforme Xiaomi MIMO"
description: "Notes de version de la v2.0.47"
---

### 🎉 Nouvelles fonctionnalités

- **[Employés IA]** Le fournisseur LLM prend désormais en charge la plateforme Xiaomi MIMO ([#9315](https://github.com/nocobase/nocobase/pull/9315)) par @cgyrock

### 🚀 Améliorations

- **[Moteur de workflow]** Amélioration du comportement de glisser-déposer des blocs sur les pages v2 ([#9264](https://github.com/nocobase/nocobase/pull/9264)) par @zhangzhonghe

- **[Employés IA]** Ajustement de la catégorie des employés IA ([#9274](https://github.com/nocobase/nocobase/pull/9274)) par @cgyrock

- **[Workflow : Approbation]** Marquer le mode d'affichage des associations chargées depuis la base de données comme hérité par @mytharcher

### 🐛 Corrections de bugs

- **[base de données]** Correction d'un problème où les filtres de date pour les sources de données externes SQL Server pouvaient échouer ([#9272](https://github.com/nocobase/nocobase/pull/9272)) par @2013xile

- **[client]**
  - Conservation des valeurs nulles pour les dépendances de variables de périmètre de données vides dans les formulaires v2. ([#9287](https://github.com/nocobase/nocobase/pull/9287)) par @jiannx

  - Relance du rendu des colonnes JS lorsque les données de ligne changent ([#9282](https://github.com/nocobase/nocobase/pull/9282)) par @jiannx

  - Correction du problème où les champs du formulaire de filtre disparaissaient après la réouverture d'un sélecteur d'enregistrement contextuel ([#9211](https://github.com/nocobase/nocobase/pull/9211)) par @zhangzhonghe

  - Correction d'un problème où les cellules de champ JS dans les blocs de tableau v2 pouvaient apparaître vides après un filtrage ou un rafraîchissement des données du tableau. ([#9285](https://github.com/nocobase/nocobase/pull/9285)) par @jiannx

- **[moteur de workflow]** Correction d'un problème où les champs masqués par le système pouvaient être sélectionnés dans les variables liées aux formulaires. ([#9302](https://github.com/nocobase/nocobase/pull/9302)) par @gchust

- **[Action : Importer des enregistrements]** Correction du problème où l'index de ligne échouée lors de l'importation d'enregistrements n'était pas correct ([#9277](https://github.com/nocobase/nocobase/pull/9277)) par @mytharcher

- **[Bloc : Gantt]** Ajout d'un paramètre de bloc Gantt pour permettre le glisser-déposer afin de reprogrammer. ([#9301](https://github.com/nocobase/nocobase/pull/9301)) par @jiannx

- **[Employés IA]** Correction d'une erreur d'intégration deepSeek V4 pour les employés IA ([#9275](https://github.com/nocobase/nocobase/pull/9275)) par @cgyrock

- **[Action : Exporter les enregistrements Pro]** Correction du problème où le mode automatique ne fonctionnait pas par @mytharcher

- **[Workflow : Approbation]**
  - Correction d'une erreur de type par @mytharcher

  - Correction du timing d'exécution de l'approbation afin que `latestExecutionId` soit synchronisé après la validation de l'approbation par @mytharcher
