---
title: "NocoBase v1.8.0-alpha.4 : Prise en charge du filtrage de davantage de champs de workflow"
description: "Notes de version de v1.8.0-alpha.4"
---

### 🚀 Améliorations

- **[Workflow]** Prise en charge du filtrage de davantage de champs de workflow ([#6995](https://github.com/nocobase/nocobase/pull/6995)) par @mytharcher

- **[Gestionnaire d'emails]** prend en charge la valeur d'envoi par défaut dans la fenêtre contextuelle, permet la recherche floue des destinataires et corrige des problèmes par @jiannx

### 🐛 Corrections de bugs

- **[Base de données]** correction : ajout des champs créateur et éditeur manquants lors de l'importation xlsx ([#7011](https://github.com/nocobase/nocobase/pull/7011)) par @aaaaaajie

- **[Client]**
  - titre de champ manquant lors de la définition d'une variable dans le composant d'affectation ([#7001](https://github.com/nocobase/nocobase/pull/7001)) par @katherinehhh

  - Les champs de liaison affichent une sous-table et un sous-formulaire au survol en mode lecture seule ([#7002](https://github.com/nocobase/nocobase/pull/7002)) par @zhangzhonghe

  - les règles de liaison du bloc markdown ne fonctionnent pas lorsqu'elles sont déclenchées par une action contextuelle ([#7007](https://github.com/nocobase/nocobase/pull/7007)) par @katherinehhh

  - le changement de page dans la sous-table du bloc de détail dans une modale déclenche un avertissement de modifications non enregistrées ([#7004](https://github.com/nocobase/nocobase/pull/7004)) par @katherinehhh

  - les règles de liaison de style de champ ne fonctionnent pas ([#7003](https://github.com/nocobase/nocobase/pull/7003)) par @katherinehhh

- **[Gestionnaire de tâches asynchrones]** Correction d'un problème d'exécution multiple lors de l'importation asynchrone ([#7006](https://github.com/nocobase/nocobase/pull/7006)) par @aaaaaajie

- **[Localisation]** Résolution d'une erreur causée par des textes vides ([#7010](https://github.com/nocobase/nocobase/pull/7010)) par @2013xile

- **[Action : Exporter les enregistrements Pro]** Correction d'un problème d'exécution multiple lors de l'importation asynchrone par @aaaaaajie

- **[Workflow : Approbation]** Correction de l'approbation déléguée qui ne pouvait pas continuer lorsqu'elle était approuvée par d'autres par @mytharcher

- **[Gestionnaire d'emails]**
  - clés primaires multiples pour la table "mailmessagelabels_mailmessages" par @jiannx

  - la fenêtre contextuelle de paramétrage ne s'affiche pas par @jiannx

  - recherche floue de courriels pour créer des filtres uniques par @jiannx

  - la recherche floue des destinataires prend en charge les champs associés par @jiannx

  - ajout du champ "id" à mailmessagelabelsMailmessages par @jiannx
