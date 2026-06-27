---
title: "NocoBase v2.1.0-beta.35 : Partage de l'évaluation des conditions entre les applications v1 et v2"
description: "Notes de version de la v2.1.0-beta.35"
---

### 🚀 Améliorations

- **[client]** Partage de l'évaluation des conditions entre les applications v1 et v2 ([#9522](https://github.com/nocobase/nocobase/pull/9522)) par @zhangzhonghe

- **[Localisation]** Amélioration des tâches de traduction Lina avec le périmètre de traduction, les paramètres de langue de référence et l'édition rapide ([#9521](https://github.com/nocobase/nocobase/pull/9521)) par @2013xile

- **[Workflow : Approbation]** Amélioration des approbations associées avec des cartes chronologiques par @zhangzhonghe

### 🐛 Corrections de bugs

- **[non défini]** Alignement des chemins de configuration nginx ([#9528](https://github.com/nocobase/nocobase/pull/9528)) par @chenos

- **[cli-v1]** Correction du démarrage en développement de create-nocobase-app en réutilisant les shells d'application packagés tout en permettant le développement local de plugins. ([#9471](https://github.com/nocobase/nocobase/pull/9471)) par @Molunerfinn

- **[client]**
  - Correction du problème où un badge de menu affiche encore un point lorsque sa valeur est 0 ([#9491](https://github.com/nocobase/nocobase/pull/9491)) par @zhangzhonghe

  - Correction du problème où les formulaires de filtre ne peuvent pas utiliser les variables du formulaire courant ([#9474](https://github.com/nocobase/nocobase/pull/9474)) par @zhangzhonghe

- **[Authentification]** Empêche le plantage du serveur lorsqu'un jeton d'authentification WebSocket référence un authentificateur dont le plugin de type d'authentification est déchargé ou manquant. ([#9514](https://github.com/nocobase/nocobase/pull/9514)) par @Molunerfinn

- **[Calendrier]**
  - Correction du problème où les éléments supplémentaires du calendrier ne peuvent pas être entièrement affichés ([#9492](https://github.com/nocobase/nocobase/pull/9492)) par @zhangzhonghe

  - Correction du style du curseur pour les éléments d'événement dans la superposition des événements supplémentaires du calendrier ([#9519](https://github.com/nocobase/nocobase/pull/9519)) par @jiannx

- **[Paramètres de licence]** Résolution des dépendances groupées liées symboliquement ([#9518](https://github.com/nocobase/nocobase/pull/9518)) par @chenos
