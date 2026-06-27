---
title: "NocoBase v1.7.0-beta.1 : compatible avec les paramètres historiques de contrôle d'accès des boutons"
description: "Notes de version de v1.7.0-beta.1"
---

### 🎉 Nouvelles fonctionnalités

- **[client]** Compatible avec les paramètres historiques de contrôle d'accès des boutons ([#6376](https://github.com/nocobase/nocobase/pull/6376)) par @katherinehhh

- **[Workflow : Événement post-action]** Prise en charge de l'utilisation du nœud de fin pour déterminer le statut ([#6399](https://github.com/nocobase/nocobase/pull/6399)) par @mytharcher

- **[Workflow : Message de réponse]** Prise en charge de l'utilisation dans le déclencheur d'action par @mytharcher

### 🚀 Améliorations

- **[Workflow]** Correction de l'erreur API 401 lorsque l'utilisateur n'est pas connecté ([#6412](https://github.com/nocobase/nocobase/pull/6412)) par @mytharcher

- **[Workflow : Nœud manuel]** Ajustement de l'interface utilisateur du centre de tâches du workflow ([#6272](https://github.com/nocobase/nocobase/pull/6272)) par @mytharcher

- **[Gestionnaire d'emails]** Utilisation de la même structure et du même style d'élément dans le global pour le bouton de la barre d'outils par @mytharcher

- **[Workflow : Approbation]** Ajustement de l'interface utilisateur du centre de tâches par @mytharcher

### 🐛 Corrections de bugs

- **[client]**
  - Impossible de déplacer la page dans un groupe ([#6413](https://github.com/nocobase/nocobase/pull/6413)) par @zhangzhonghe

  - Les menus de niveau profond n'affichent pas l'icône ([#6410](https://github.com/nocobase/nocobase/pull/6410)) par @zhangzhonghe

  - Problème de contexte de thème FormDrawer ([#6403](https://github.com/nocobase/nocobase/pull/6403)) par @katherinehhh

- **[Workflow : Nœud manuel]** Éviter les conflits sur la clé unique ([#6407](https://github.com/nocobase/nocobase/pull/6407)) par @mytharcher

- **[Gestionnaire de source de données]** Erreur lors de l'édition des champs dans une source de données externe ([#6402](https://github.com/nocobase/nocobase/pull/6402)) par @katherinehhh

- **[Authentification]** Un utilisateur sans rôle doit être redirigé vers la page de message d'erreur. ([#6408](https://github.com/nocobase/nocobase/pull/6408)) par @sheldon66

- **[Workflow : Événement d'action personnalisée]** Configuration de règle de liaison manquante pour le bouton 'Déclencher le workflow' par @katherinehhh

- **[Gestionnaire de sauvegarde]** Données de clé de chiffrement manquantes lors de la restauration de la sauvegarde par @gchust

- **[Workflow : Approbation]** Éviter les conflits sur la clé unique par @mytharcher
