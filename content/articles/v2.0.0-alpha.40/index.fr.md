---
title: "NocoBase v2.0.0-alpha.40 : Optimisation du style de la barre d'outils pour éviter que les icônes ne soient masquées"
description: "Notes de version de v2.0.0-alpha.40"
---

### 🚀 Améliorations

- **[flow-engine]** Optimisation du style de la barre d'outils pour éviter que les icônes ne soient masquées ([#7883](https://github.com/nocobase/nocobase/pull/7883)) par @zhangzhonghe

### 🐛 Corrections de bugs

- **[flow-engine]** Correction du problème où les données d'autorisation ACL ne sont pas rechargées après une déconnexion et une reconnexion. ([#7874](https://github.com/nocobase/nocobase/pull/7874)) par @gchust

- **[client]** Correction de problèmes dans les paramètres des éléments de formulaire ([#7867](https://github.com/nocobase/nocobase/pull/7867)) par @katherinehhh

- **[Visualisation de données]** Utilisation du mode débogage de la ressource SQL uniquement lors de l'aperçu du graphique ([#7893](https://github.com/nocobase/nocobase/pull/7893)) par @heziqiang

- **[Multi-espace]** Utilisateurs associés multi-espace par @jiannx

- **[Workflow : Approbation]**
  - Correction du problème où la taille de page du canal de notification de chargement n'est pas assez grande, ce qui empêche le chargement complet de la liste par @mytharcher

  - Correction d'un problème de performance survenant lors de l'interrogation de la liste des enregistrements d'approbation pendant la soumission d'une approbation par @mytharcher

  - Correction du format de date sur les cartes de la liste d'approbation dans le centre des tâches pour afficher la date et l'heure complètes par @mytharcher
