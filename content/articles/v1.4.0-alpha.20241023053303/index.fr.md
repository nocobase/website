---
title: "NocoBase v1.4.0-alpha.20241023053303 : Prise en charge de la pagination dans les sous-tableaux"
description: "Notes de version de v1.4.0-alpha.20241023053303"
---

### 🚀 Améliorations

- **[client]** La sous-table prend en charge la pagination ([#5450](https://github.com/nocobase/nocobase/pull/5450)) par @katherinehhh

- **[Bloc : Kanban]** Ajout de la prise en charge pour activer ou désactiver le tri par glisser-déposer dans le bloc Kanban ([#5468](https://github.com/nocobase/nocobase/pull/5468)) par @katherinehhh

- **[Calendrier]** Afficher la fenêtre contextuelle de création lors de la sélection d'un créneau dans le calendrier ([#5483](https://github.com/nocobase/nocobase/pull/5483)) par @gu-zhichao

- **[Gestionnaire multi-applications]** Prise en charge de la variable d'environnement USE_DB_SCHEMA_IN_SUBAPP ([#5481](https://github.com/nocobase/nocobase/pull/5481)) par @chenos

- **[Workflow]** Ajout d'un composant de jeu de champs de type carte ([#5464](https://github.com/nocobase/nocobase/pull/5464)) par @mytharcher

### 🐛 Corrections de bugs

- **[client]** La valeur de la variable est perdue après l'actualisation de la fenêtre contextuelle du bloc Markdown ([#5478](https://github.com/nocobase/nocobase/pull/5478)) par @katherinehhh

- **[Visualisation de données]** Correction de problèmes lors de l'utilisation d'une source de données Oracle externe pour le plugin de visualisation de données, par exemple des problèmes de format de date ([#5436](https://github.com/nocobase/nocobase/pull/5436)) par @2013xile

- **[Gestionnaire de fichiers]** Correction de l'impossibilité de télécharger un fichier en raison d'un hook de règle ([#5460](https://github.com/nocobase/nocobase/pull/5460)) par @mytharcher
