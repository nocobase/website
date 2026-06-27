---
title: "NocoBase v1.4.17 : Prise en charge de la variable « Enregistrements sélectionnés dans le tableau » dans les champs de tableau m2m"
description: "Notes de version de la v1.4.17"
---

### 🎉 Nouvelles fonctionnalités

- **[client]** Prise en charge de l'utilisation de la variable « Enregistrements sélectionnés du tableau » dans les champs de tableau m2m ([#5974](https://github.com/nocobase/nocobase/pull/5974)) par @2013xile

### 🚀 Améliorations

- **[undefined]** Activation du plugin de thème par défaut ([#5957](https://github.com/nocobase/nocobase/pull/5957)) par @zhangzhonghe

- **[Source de données : Principale]** Ajout d'une validation de conflit de noms pour empêcher les utilisateurs de créer des Collections portant le même nom que les Collections système ([#5962](https://github.com/nocobase/nocobase/pull/5962)) par @chareice

- **[Workflow]** Éviter l'utilisation abusive des variables de plage de dates dans la plupart des endroits, sauf dans le composant de filtre ([#5954](https://github.com/nocobase/nocobase/pull/5954)) par @mytharcher

### 🐛 Corrections de bugs

- **[base de données]**
  - Correction d'un problème dans l'action de suppression où filterByTk avec le paramètre filter ne pouvait pas supprimer les données ([#5976](https://github.com/nocobase/nocobase/pull/5976)) par @chareice

  - Les méthodes firstOrCreate et updateOrCreate du référentiel perdent le contexte ([#5973](https://github.com/nocobase/nocobase/pull/5973)) par @chenos

- **[client]**
  - Correction d'un problème lors de l'ajout d'un champ de relation un-à-un dans le formulaire ([#5975](https://github.com/nocobase/nocobase/pull/5975)) par @katherinehhh

  - Correction d'un problème d'affectation de champ dans le sous-tableau lors de la re-sélection de données après suppression ([#5958](https://github.com/nocobase/nocobase/pull/5958)) par @katherinehhh

  - Correction de l'erreur du bloc tableau causée par des données contenant des champs nommés 'children' ([#5951](https://github.com/nocobase/nocobase/pull/5951)) par @zhangzhonghe

- **[Source de données : Principale]** Correction des problèmes de compatibilité héritée avec le champ unixTimestamp. ([#5967](https://github.com/nocobase/nocobase/pull/5967)) par @chareice

- **[Workflow]** Correction de l'erreur du bloc de sous-détails dans la configuration de l'interface utilisateur du nœud manuel ([#5953](https://github.com/nocobase/nocobase/pull/5953)) par @mytharcher
