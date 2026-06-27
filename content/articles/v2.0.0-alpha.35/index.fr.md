---
title: "NocoBase v2.0.0-alpha.35 : prise en charge des opérations différées dans le modèle de flux"
description: "Notes de version de v2.0.0-alpha.35"
---

### 🚀 Améliorations

- **[moteur de flux]** Prise en charge des opérations différées dans le modèle de flux ([#7786](https://github.com/nocobase/nocobase/pull/7786)) par @gchust

- **[Workflow : JavaScript]** Correction d'une vulnérabilité de sécurité causée par le passage de fonctions de niveau supérieur dans l'environnement d'exécution, empêchant toute exploitation qui pourrait donner accès au contexte d'exécution supérieur par @mytharcher

### 🐛 Corrections de bugs

- **[client]**
  - Correction du problème de page suivante vide dans le bloc de pagination simple des détails ([#7784](https://github.com/nocobase/nocobase/pull/7784)) par @katherinehhh

  - Correction de la non-application de la largeur des actions de tableau et des colonnes JS ([#7777](https://github.com/nocobase/nocobase/pull/7777)) par @katherinehhh

  - La portée des données du bloc ne fonctionne pas si elle est définie par le flux d'événements de la page ([#7788](https://github.com/nocobase/nocobase/pull/7788)) par @gchust

- **[Workflow]** Ajout de `workflowId` comme donnée d'identité pour les journaux du workflow ([#7789](https://github.com/nocobase/nocobase/pull/7789)) par @mytharcher

- **[Workflow : Variable personnalisée]** Correction d'une erreur levée lorsqu'aucune configuration n'est présente dans le nœud de variable par @mytharcher

- **[Gestionnaire d'emails]** Ajout d'index à la collection mailMessages par @jiannx
