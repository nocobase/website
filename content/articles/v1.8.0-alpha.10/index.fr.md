---
title: "NocoBase v1.8.0-alpha.10 : Prise en charge du chargement à la demande des collections provenant de sources de données externes"
description: "Notes de version de v1.8.0-alpha.10"
---

### 🎉 Nouvelles fonctionnalités

- **[Gestionnaire de sources de données]** ✨ Prise en charge du chargement à la demande des collections depuis des sources de données externes ([#6979](https://github.com/nocobase/nocobase/pull/6979)) par @aaaaaajie

- **[Workflow : nœud de requête HTTP]** Prise en charge des requêtes `multipart/form-data` ([#7087](https://github.com/nocobase/nocobase/pull/7087)) par @shushu992

- **[Source de données : SQL Server externe]** Prise en charge du chargement à la demande des collections depuis des sources de données externes par @aaaaaajie

### 🐛 Corrections de bugs

- **[client]**
  - Lorsque les variables des paramètres de requête URL sont vides, les conditions de portée des données ne sont pas supprimées ([#7104](https://github.com/nocobase/nocobase/pull/7104)) par @zhangzhonghe

  - Limite de plage incorrecte sur les champs de date avec heure ([#7107](https://github.com/nocobase/nocobase/pull/7107)) par @katherinehhh

- **[Mobile]** Correction du problème d'index z des fenêtres contextuelles sur mobile ([#7110](https://github.com/nocobase/nocobase/pull/7110)) par @zhangzhonghe

- **[Calendrier]** Problème de champ de date dans le formulaire de création rapide du bloc calendrier ([#7106](https://github.com/nocobase/nocobase/pull/7106)) par @katherinehhh

- **[Workflow : Approbation]**
  - Correction de l'ancienne API de variable qui générait une erreur par @mytharcher

  - Correction des styles mobiles par @mytharcher

  - Correction de l'erreur générée lors de la suppression d'une collection liée à l'approbation par @mytharcher

- **[Gestionnaire d'emails]** La pièce jointe ne s'affiche pas par @jiannx
