---
title: "NocoBase v1.9.4 : Optimisation de la logique de contrôle des permissions pour les opérations sur les champs d'association"
description: "Notes de version de la v1.9.4"
---

### 🚀 Améliorations

- **[Contrôle d'accès]** Optimisation de la logique de contrôle des permissions pour les opérations sur les champs d'association ([#7800](https://github.com/nocobase/nocobase/pull/7800)) par @2013xile

- **[Workflow : JavaScript]** Correction d'une vulnérabilité de sécurité causée par le passage de fonctions de niveau supérieur dans l'environnement d'exécution, empêchant toute exploitation qui pourrait donner accès au contexte d'exécution supérieur par @mytharcher

- **[Auth : OIDC]** Augmentation du délai d'attente des requêtes par @2013xile

### 🐛 Corrections de bugs

- **[serveur]** Correction d'un problème où, après avoir activé le mode de séparation des services, les processus workers envoyant des messages via la file d'attente provoquaient des erreurs ([#7797](https://github.com/nocobase/nocobase/pull/7797)) par @mytharcher

- **[client]** Correction du problème de page suivante vide dans le bloc de détails à pagination simple ([#7784](https://github.com/nocobase/nocobase/pull/7784)) par @katherinehhh

- **[Workflow]**
  - Ajout de `workflowId` comme donnée d'identité pour les logs du workflow ([#7789](https://github.com/nocobase/nocobase/pull/7789)) par @mytharcher

  - Correction du problème où le plugin workflow consommait toujours l'événement de la file d'attente lorsqu'il n'était pas en mode worker dans le cadre du mode de séparation des services ([#7820](https://github.com/nocobase/nocobase/pull/7820)) par @mytharcher

- **[Utilisateurs]** Rafraîchissement incorrect de l'index lorsque les noms de champs utilisent le style snake_case ([#7785](https://github.com/nocobase/nocobase/pull/7785)) par @2013xile

- **[Workflow : Variable personnalisée]** Correction d'une erreur levée lorsqu'aucune configuration n'est présente dans le nœud de variable par @mytharcher
