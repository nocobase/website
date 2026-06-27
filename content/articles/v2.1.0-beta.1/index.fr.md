---
title: "NocoBase v2.1.0-beta.1 : Refonte du superviseur d'applications pour prendre en charge la gestion multi-applications dans différents scénarios"
description: "Notes de version de v2.1.0-beta.1"
---

### 🎉 Nouvelles fonctionnalités

- **[serveur]** Refonte du superviseur d'application pour prendre en charge la gestion multi-applications dans différents scénarios ([#8043](https://github.com/nocobase/nocobase/pull/8043)) par @2013xile

### 🚀 Améliorations

- **[client]**
  - Amélioration de l'interface d'affectation des champs date/heure pour prendre en charge la sélection de dates/heures relatives. ([#8630](https://github.com/nocobase/nocobase/pull/8630)) par @gchust

  - Prise en charge de la spécification du champ de titre pour les champs d'association lors de l'affectation d'un champ. ([#8624](https://github.com/nocobase/nocobase/pull/8624)) par @gchust

### 🐛 Corrections de bugs

- **[moteur de workflow]**
  - Correction d'un problème où le sous-menu du champ de filtre ne pouvait pas être développé lorsqu'un mot-clé de recherche était présent. ([#8604](https://github.com/nocobase/nocobase/pull/8604)) par @gchust

  - Correction de l'action de suppression de colonne qui ne fonctionnait pas dans l'édition de sous-tableau contextuelle lorsque createModelOptions est configuré ([#8560](https://github.com/nocobase/nocobase/pull/8560)) par @katherinehhh

- **[client]**
  - Correction d'un problème où l'affectation d'un seul enregistrement à un champ de relation plusieurs-à-plusieurs produisait des résultats incorrects. ([#8652](https://github.com/nocobase/nocobase/pull/8652)) par @gchust

  - Analyse de la date à l'aide du sélecteur de date et ajout de la validation de la force du mot de passe, etc. ([#8647](https://github.com/nocobase/nocobase/pull/8647)) par @jiannx

  - Correction du problème d'espacement causé par les actions liées masquées dans la colonne d'actions du tableau ([#8646](https://github.com/nocobase/nocobase/pull/8646)) par @zhangzhonghe

  - Correction du problème où `Action.Modal` ne pouvait pas être fermé après certaines interactions ([#8642](https://github.com/nocobase/nocobase/pull/8642)) par @mytharcher

  - Correction d'une erreur de syntaxe lors du rendu d'un élément markdown contenant du Liquid invalide ([#8637](https://github.com/nocobase/nocobase/pull/8637)) par @katherinehhh

  - Correction des requêtes d'analyse inutiles côté serveur pour les propriétés de champs "plusieurs" dans le bloc de formulaire. ([#8636](https://github.com/nocobase/nocobase/pull/8636)) par @gchust

  - Correction du format numérique manquant pour les champs de formule numérique et des paramètres de format de date pour les champs de formule de date ([#8625](https://github.com/nocobase/nocobase/pull/8625)) par @katherinehhh

  - Correction du rendu incomplet de la bordure supérieure sur le premier élément du formulaire ([#8623](https://github.com/nocobase/nocobase/pull/8623)) par @katherinehhh

  - Correction : masquer "Activer le tableau arborescent" et "Développer toutes les lignes par défaut" pour les collections non arborescentes ([#8566](https://github.com/nocobase/nocobase/pull/8566)) par @katherinehhh

- **[utils]** Correction d'un problème de sécurité du moteur d'évaluation `formula.js` ([#8416](https://github.com/nocobase/nocobase/pull/8416)) par @mytharcher

- **[Employés IA]**
  - Correction d'un problème où les liens de citation provenant de recherches web IA n'étaient pas affichés dans la boîte de discussion ([#8651](https://github.com/nocobase/nocobase/pull/8651)) par @cgyrock

  - Correction d'une erreur de paramètres de l'API OpenAI ([#8633](https://github.com/nocobase/nocobase/pull/8633)) par @cgyrock

- **[Modèle d'impression]** Correction des champs avec la même clé entraînant des erreurs de rendu par @jiannx

- **[Workflow : Approbation]**
  - Correction du problème où une erreur était générée lors de l'approbation d'un enregistrement supprimé par @mytharcher

  - Correction du problème où les données d'approbation ne s'affichaient pas dans la fenêtre contextuelle des détails de l'enregistrement si le mode du workflow était défini sur "Avant l'enregistrement" par @mytharcher
