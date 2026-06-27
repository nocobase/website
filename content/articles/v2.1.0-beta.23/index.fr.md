---
title: "NocoBase v2.1.0-beta.23 : Ajout des champs créé et mis à jour par pour les workflows"
description: "Notes de version de la v2.1.0-beta.23"
---

### 🎉 Nouvelles fonctionnalités

- **[Workflow]** Ajout des champs « créé par » et « mis à jour par » pour les workflows ([#9217](https://github.com/nocobase/nocobase/pull/9217)) par @mytharcher

### 🚀 Améliorations

- **[non défini]**
  - Amélioration du guide d'installation de l'Agent IA pour empêcher les Agents de contourner l'assistant `--ui` et pour détecter automatiquement les gestionnaires de versions Node. ([#9243](https://github.com/nocobase/nocobase/pull/9243)) par @Molunerfinn

  - Mise à jour de la documentation IA pour exiger NocoBase >= 2.1.0-beta.20 et recommander la dernière version bêta. ([#9252](https://github.com/nocobase/nocobase/pull/9252)) par @Molunerfinn

  - - ([#9098](https://github.com/nocobase/nocobase/pull/9098)) par @Molunerfinn

- **[client-v2]** Séparation du client v2 du client v1, et suppression de sa dépendance au client v1 ([#8937](https://github.com/nocobase/nocobase/pull/8937)) par @zhangzhonghe

### 🐛 Corrections de bugs

- **[non défini]** Correction du sélecteur de langue qui générait des URL incorrectes (ex : `/cn/es/` au lieu de `/es/`) sur le site de documentation. ([#9233](https://github.com/nocobase/nocobase/pull/9233)) par @Molunerfinn

- **[client]** Définition d'une hauteur maximale pour les popovers et ajout de gardes de défilement afin que la zone de soumission reste accessible ([#9226](https://github.com/nocobase/nocobase/pull/9226)) par @jiannx

- **[Visualisation de données]** Correction des sélecteurs de champs vides dans la configuration des requêtes de graphiques sur les pages de flux ([#9276](https://github.com/nocobase/nocobase/pull/9276)) par @2013xile

- **[Authentification]** Correction des anciennes sessions restant actives après un changement de mot de passe ([#9261](https://github.com/nocobase/nocobase/pull/9261)) par @2013xile
