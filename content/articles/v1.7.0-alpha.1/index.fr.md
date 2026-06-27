---
title: "NocoBase v1.7.0-alpha.1 : Prise en charge de l'utilisation du nœud final pour déterminer l'état"
description: "Notes de version de v1.7.0-alpha.1"
---

### 🎉 Nouvelles fonctionnalités

- **[Workflow : Événement post-action]** Possibilité d'utiliser le nœud de fin pour déterminer le statut ([#6399](https://github.com/nocobase/nocobase/pull/6399)) par @mytharcher

### 🚀 Améliorations

- **[Workflow]** Correction de l'API 401 lorsque l'utilisateur n'est pas connecté ([#6412](https://github.com/nocobase/nocobase/pull/6412)) par @mytharcher

- **[Gestionnaire d'emails]** Utilisation de la même structure d'élément et du même style dans l'interface globale pour le bouton de la barre d'outils par @mytharcher

- **[Workflow : Approbation]** Ajustement de l'interface utilisateur du centre de tâches par @mytharcher

### 🐛 Corrections de bugs

- **[client]**
  - Impossible de déplacer une page dans un groupe ([#6413](https://github.com/nocobase/nocobase/pull/6413)) par @zhangzhonghe

  - Les menus de niveau profond n'affichent pas l'icône ([#6410](https://github.com/nocobase/nocobase/pull/6410)) par @zhangzhonghe

- **[Authentification]** Un utilisateur sans rôle doit être redirigé vers une page d'erreur. ([#6408](https://github.com/nocobase/nocobase/pull/6408)) par @sheldon66

- **[Workflow : Événement d'action personnalisée]** Configuration de règle de liaison manquante pour le bouton 'Déclencher un workflow' par @katherinehhh

- **[Gestionnaire de sauvegarde]** Données de clé de chiffrement manquantes lors de la restauration de la sauvegarde par @gchust

- **[Workflow : Approbation]** Éviter les conflits sur la clé unique par @mytharcher
