---
title: "NocoBase v1.8.19 : Ajout d'un type de modèle en ligne pour la configuration des notifications"
description: "Notes de version de la v1.8.19"
---

### 🎉 Nouvelles fonctionnalités

- **[Workflow : Approbation]** Ajout d'un type de modèle en ligne pour la configuration des notifications par @mytharcher

### 🚀 Améliorations

- **[client]** Prise en charge de l'affichage des icônes identifiées par des chaînes de caractères dans le composant Select en mode lecture seule ([#7420](https://github.com/nocobase/nocobase/pull/7420)) par @mytharcher
- **[base de données]** Optimisation des performances des requêtes ACL Meta ([#7400](https://github.com/nocobase/nocobase/pull/7400)) par @aaaaaajie
- **[Mobile]** Optimisation du composant popup mobile ([#7414](https://github.com/nocobase/nocobase/pull/7414)) par @zhangzhonghe

### 🐛 Corrections de bugs

- **[base de données]** Correction d'un problème où la lecture des tables externes Postgres incluait les vues d'autres schémas ([#7410](https://github.com/nocobase/nocobase/pull/7410)) par @aaaaaajie
- **[Bloc : modèle]** Résolution d'un problème où les blocs de courrier n'étaient pas visibles lorsqu'ils étaient placés à l'intérieur d'un bloc de modèle hérité ([#7430](https://github.com/nocobase/nocobase/pull/7430)) par @gchust
- **[Action : Importer des enregistrements Pro]** Interdiction d'assigner des champs de relation lors de la détection des doublons d'importation. par @aaaaaajie
- **[Workflow : Approbation]** Correction du problème où la liste des utilisateurs était vide lors de la contresignature par @mytharcher
- **[Gestionnaire de migration]** Ignorer les commandes `\restrict` et `\unrestrict` générées par la dernière version de pg_dump lors de la création de fichiers de migration pour résoudre les erreurs de restauration. par @2013xile
