---
title: "NocoBase v1.8.0-beta.5 : Prise en charge du filtrage de davantage de champs de workflow"
description: "Notes de version de la v1.8.0-beta.5"
---

### 🚀 Améliorations

- **[Workflow]** Prise en charge du filtrage de davantage de champs de workflow ([#6995](https://github.com/nocobase/nocobase/pull/6995)) par @mytharcher

### 🐛 Corrections de bugs

- **[client]**
  - Les règles de liaison du bloc markdown ne fonctionnent pas lorsqu'elles sont déclenchées par une action contextuelle ([#7007](https://github.com/nocobase/nocobase/pull/7007)) par @katherinehhh

  - Les champs d'association affichent un sous-tableau et un sous-formulaire au survol en mode lecture seule ([#7002](https://github.com/nocobase/nocobase/pull/7002)) par @zhangzhonghe

  - Les règles de liaison de style de champ ne fonctionnent pas ([#7003](https://github.com/nocobase/nocobase/pull/7003)) par @katherinehhh

  - Titre de champ manquant lors de la définition d'une variable dans le composant d'affectation ([#7001](https://github.com/nocobase/nocobase/pull/7001)) par @katherinehhh

  - Le changement de page dans le sous-tableau d'un bloc de détail dans une fenêtre modale déclenche un avertissement de modifications non enregistrées ([#7004](https://github.com/nocobase/nocobase/pull/7004)) par @katherinehhh

- **[Gestionnaire de tâches asynchrones]** Correction d'un problème d'exécution multiple lors de l'importation asynchrone ([#7006](https://github.com/nocobase/nocobase/pull/7006)) par @aaaaaajie

- **[Localisation]** Résolution d'une erreur causée par des textes vides ([#7010](https://github.com/nocobase/nocobase/pull/7010)) par @2013xile

- **[Action : Exporter les enregistrements Pro]** Correction d'un problème d'exécution multiple lors de l'importation asynchrone par @aaaaaajie

- **[Workflow : Approbation]** Correction de l'approbation déléguée qui ne pouvait pas continuer lorsqu'elle était approuvée par d'autres par @mytharcher
