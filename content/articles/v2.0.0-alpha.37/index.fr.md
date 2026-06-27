---
title: "NocoBase v2.0.0-alpha.37 : adaptation au champ tableoid dans la version 2.0"
description: "Notes de version de v2.0.0-alpha.37"
---

### 🚀 Améliorations

- **[client]**
  - Ajout des informations de version de page au contexte du moteur de flux ([#7826](https://github.com/nocobase/nocobase/pull/7826)) par @gchust

  - Amélioration de l'éditeur Markdown ([#7793](https://github.com/nocobase/nocobase/pull/7793)) par @katherinehhh

  - Adaptation au champ tableoid dans la version 2.0 ([#7809](https://github.com/nocobase/nocobase/pull/7809)) par @katherinehhh

- **[Data visualization]** Mise à jour des astuces d'alerte et des annotations des modèles de code d'événements ([#7814](https://github.com/nocobase/nocobase/pull/7814)) par @heziqiang

- **[Access control]** Optimisation de la logique de contrôle des permissions pour les opérations sur les champs d'association ([#7800](https://github.com/nocobase/nocobase/pull/7800)) par @2013xile

- **[Auth: OIDC]** Augmentation du délai d'attente de la requête par @2013xile

### 🐛 Corrections de bugs

- **[server]** Correction d'un problème où, après avoir activé le mode de séparation des services, les processus workers envoyaient des messages via la file d'attente de messages, ce qui provoquait des erreurs ([#7797](https://github.com/nocobase/nocobase/pull/7797)) par @mytharcher

- **[client]**
  - La variable de collection courante ne doit pas être sélectionnable dans le sélecteur de variables du composant de filtre ([#7818](https://github.com/nocobase/nocobase/pull/7818)) par @gchust

  - Correction de l'erreur 'value.replace is not a function' dans le champ de relation du formulaire de filtre ([#7824](https://github.com/nocobase/nocobase/pull/7824)) par @zhangzhonghe

  - Correction des paramètres incorrects dans le callback onChange ([#7807](https://github.com/nocobase/nocobase/pull/7807)) par @zhangzhonghe

- **[flow-engine]** Correction du problème où les modifications du flux d'événements ne prenaient effet qu'après un rafraîchissement de la page. ([#7811](https://github.com/nocobase/nocobase/pull/7811)) par @gchust

- **[Workflow]** Correction du problème où le plugin de workflow consommait toujours l'événement de file d'attente lorsqu'il n'était pas en mode worker dans le mode de séparation des services ([#7820](https://github.com/nocobase/nocobase/pull/7820)) par @mytharcher

- **[Workflow: Approval]** Correction d'un problème où les champs de la collection principale n'étaient pas exclus lors du rechargement des données d'association par @mytharcher

- **[Email manager]** Correction du problème des images réservées et de la synchronisation dans Outlook par @jiannx
