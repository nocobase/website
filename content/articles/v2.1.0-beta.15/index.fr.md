---
title: "NocoBase v2.1.0-beta.15 : prise en charge des champs personnalisés pour les attributs de mappage"
description: "Notes de version de v2.1.0-beta.15"
---

### 🎉 Nouvelles fonctionnalités

- **[Bloc : Kanban]** Bloc kanban v2 ([#9142](https://github.com/nocobase/nocobase/pull/9142)) par @jiannx

- **[Auth : OIDC]** Prise en charge des champs personnalisés pour l'attribut de mappage par @chenzhizdt

- **[DingTalk]** DingTalk : notifications, connexion automatique dans DingTalk et synchronisation des utilisateurs. par @chenzhizdt

### 🚀 Améliorations

- **[build]** La base de connaissances prend en charge le téléchargement par lots de fichiers via ZIP ([#9206](https://github.com/nocobase/nocobase/pull/9206)) par @cgyrock

- **[ai]** L'employé IA et la base de connaissances prennent désormais en charge des types de fichiers supplémentaires pour le téléchargement (.xlsx, .xls, .csv, .md, .json) ([#9172](https://github.com/nocobase/nocobase/pull/9172)) par @cgyrock

- **[Workflow]** Amélioration des performances de la liste d'exécution ([#9214](https://github.com/nocobase/nocobase/pull/9214)) par @mytharcher

- **[IA : Base de connaissances]** La base de connaissances prend en charge le téléchargement par lots de fichiers via ZIP par @cgyrock

- **[Workflow : Approbation]** Ajout d'index sur les colonnes des enregistrements d'approbation pour améliorer les performances des actions de liste et de soumission par @mytharcher

### 🐛 Corrections de bugs

- **[base de données]** Correction d'un problème où les champs décimaux avec validation pouvaient rejeter une saisie numérique valide ([#9204](https://github.com/nocobase/nocobase/pull/9204)) par @2013xile

- **[client]**
  - Correction du problème où le bouton Ajouter un onglet était trop proche du bord droit ([#9177](https://github.com/nocobase/nocobase/pull/9177)) par @zhangzhonghe

  - Correction des blocs de relation contextuels et des variables d'enregistrement contextuelles utilisant un identifiant d'enregistrement incorrect lorsque les collections utilisent une clé unique non primaire ([#9191](https://github.com/nocobase/nocobase/pull/9191)) par @2013xile

  - Correction du problème où la valeur par défaut ne prenait pas effet après la création d'un enregistrement. ([#9185](https://github.com/nocobase/nocobase/pull/9185)) par @gchust

- **[gestionnaire-de-source-de-données]**
  - Correction de la synchronisation des champs nullables ([#9189](https://github.com/nocobase/nocobase/pull/9189)) par @2013xile

  - Correction du problème où les champs de pourcentage étaient réinitialisés en numérique lors de la resynchronisation des sources de données externes ([#9178](https://github.com/nocobase/nocobase/pull/9178)) par @jiannx

- **[Employés IA]**
  - Correction du problème de valeurs de champ URL manquantes pour les pièces jointes dans les sélections de formulaires des employés IA. ([#9216](https://github.com/nocobase/nocobase/pull/9216)) par @cgyrock

  - Correction du problème où les employés IA ne pouvaient pas remplir les valeurs des champs de relation dans les formulaires. ([#9182](https://github.com/nocobase/nocobase/pull/9182)) par @cgyrock

- **[Utilisateurs]** Correction du problème où les champs configurés dynamiquement dans Modifier le profil ne chargeaient pas les dernières données utilisateur ([#9205](https://github.com/nocobase/nocobase/pull/9205)) par @2013xile

- **[Calendrier]** Les actions du calendrier ne sont plus enregistrées dans d'autres blocs ([#9200](https://github.com/nocobase/nocobase/pull/9200)) par @jiannx

- **[Départements]** Correction d'un problème où la synchronisation répétée des départements ne pouvait pas mettre à jour l'ordre de tri des départements ([#9173](https://github.com/nocobase/nocobase/pull/9173)) par @2013xile

- **[Workflow : JavaScript]** Correction d'un problème de sécurité lié à l'exécution de scripts en mode `node:vm` ([#9084](https://github.com/nocobase/nocobase/pull/9084)) par @mytharcher

- **[Gestionnaire de source de données]** Correction d'un problème où le tri groupé sur les champs de tri de source de données externe ne pouvait pas être effacé ([#9203](https://github.com/nocobase/nocobase/pull/9203)) par @2013xile

- **[Multi-espace]** Correction de l'erreur de collection non trouvée lors de la vérification des permissions d'espace par @jiannx

- **[IA : Base de connaissances]** Correction du problème où la base de données vectorielle n'était pas synchronisée lors de la suppression de documents de la base de connaissances. par @cgyrock

- **[Workflow : Approbation]** Correction de la recherche de réaffectation d'approbation pour interroger les utilisateurs au-delà des 200 premiers candidats par @zhangzhonghe

- **[WeCom]** Correction de l'ordre des départements manquant lors de la synchronisation des départements depuis WeCom par @2013xile
