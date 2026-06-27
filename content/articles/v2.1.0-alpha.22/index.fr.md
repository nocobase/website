---
title: "NocoBase v2.1.0-alpha.22 : Ajout d'une API pour vérifier la création de nœuds"
description: "Notes de version de v2.1.0-alpha.22"
---

### 🎉 Nouvelles fonctionnalités

- **[Workflow]** Ajout d'une API pour vérifier la création de nœuds ([#9207](https://github.com/nocobase/nocobase/pull/9207)) par @mytharcher

### 🚀 Améliorations

- **[cli]** Ajout du suivi de la source des requêtes CLI dans les journaux de requêtes et les journaux d'audit ([#9223](https://github.com/nocobase/nocobase/pull/9223)) par @2013xile

- **[Contrôle d'accès]** ajout de quelques nouvelles API pour la compétence ACL ([#9198](https://github.com/nocobase/nocobase/pull/9198)) par @Andrew1989Y

- **[Workflow : Approbation]**
  - Ajout d'une validation pour la création de nœuds d'approbation par @mytharcher

  - Ajout d'index sur les colonnes des enregistrements d'approbation pour améliorer les performances des actions de liste et de soumission par @mytharcher

### 🐛 Corrections de bugs

- **[client]** Interrupteur de tri masqué pour les champs de relation ([#9220](https://github.com/nocobase/nocobase/pull/9220)) par @jiannx

- **[base de données]** Correction d'un problème où les champs décimaux avec validation pouvaient rejeter une saisie numérique valide ([#9204](https://github.com/nocobase/nocobase/pull/9204)) par @2013xile

- **[Employés IA]** Correction du problème de valeurs manquantes du champ URL pour les pièces jointes dans les sélections de formulaires des employés IA. ([#9216](https://github.com/nocobase/nocobase/pull/9216)) par @cgyrock

- **[Utilisateurs]** Correction des champs configurés dynamiquement dans Modifier le profil qui ne chargeaient pas les dernières données utilisateur ([#9205](https://github.com/nocobase/nocobase/pull/9205)) par @2013xile

- **[Gestionnaire de source de données]** Correction d'un problème où le tri groupé sur les champs de tri de source de données externe ne pouvait pas être effacé ([#9203](https://github.com/nocobase/nocobase/pull/9203)) par @2013xile
