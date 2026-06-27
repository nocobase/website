---
title: "NocoBase v2.0.41 : prise en charge des champs personnalisés pour les attributs de mappage"
description: "Notes de version de la v2.0.41"
---

### 🎉 Nouvelles fonctionnalités

- **[Auth: OIDC]** Prise en charge des champs personnalisés pour les attributs de mappage par @chenzhizdt

- **[DingTalk]** DingTalk : notifications, connexion automatique dans DingTalk et synchronisation des utilisateurs. par @chenzhizdt

### 🚀 Améliorations

- **[ai]** L'employé IA et la base de connaissances prennent désormais en charge des types de fichiers supplémentaires pour le téléchargement (.xlsx, .xls, .csv, .md, .json) ([#9172](https://github.com/nocobase/nocobase/pull/9172)) par @cgyrock

- **[undefined]** Ajout de la traduction arabe pour la section du guide et la navigation ([#9141](https://github.com/nocobase/nocobase/pull/9141)) par @saraTabbane

### 🐛 Corrections de bugs

- **[data-source-manager]** Correction du problème où les champs de pourcentage étaient réinitialisés en numérique lors de la resynchronisation des sources de données externes ([#9178](https://github.com/nocobase/nocobase/pull/9178)) par @jiannx

- **[client]**
  - Correction du problème où la valeur par défaut ne prenait pas effet après la création d'un enregistrement. ([#9185](https://github.com/nocobase/nocobase/pull/9185)) par @gchust

  - Correction du problème où le bouton Ajouter un onglet était trop proche du bord droit ([#9177](https://github.com/nocobase/nocobase/pull/9177)) par @zhangzhonghe

- **[Départements]** Correction d'un problème où la synchronisation répétée des départements ne pouvait pas mettre à jour l'ordre de tri des départements ([#9173](https://github.com/nocobase/nocobase/pull/9173)) par @2013xile

- **[Source de données : Principale]** Correction de la synchronisation des champs depuis la base de données pour les vues connectées lorsque le nom de la collection diffère du nom de la vue dans la base de données ([#9155](https://github.com/nocobase/nocobase/pull/9155)) par @2013xile

- **[Workflow : JavaScript]** Correction d'un problème de sécurité lié à l'exécution de scripts en mode `node:vm` ([#9084](https://github.com/nocobase/nocobase/pull/9084)) par @mytharcher

- **[IA : Base de connaissances]** Correction du problème où la base de données vectorielle n'était pas synchronisée lors de la suppression de documents de la base de connaissances. par @cgyrock

- **[WeCom]** Correction de l'ordre manquant des départements lors de la synchronisation des départements depuis WeCom par @2013xile
