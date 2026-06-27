---
title: "NocoBase v2.0.0-alpha.48 : Ajout du bloc carte 2.0"
description: "Notes de version de v2.0.0-alpha.48"
---

### 🎉 Nouvelles fonctionnalités

- **[Bloc : Carte]** ajout du bloc carte 2.0 ([#7944](https://github.com/nocobase/nocobase/pull/7944)) par @katherinehhh

- **[Auth : OIDC]** Prise en charge de la redirection automatique vers l'URL SSO lorsque l'utilisateur n'est pas authentifié par @heziqiang

### 🐛 Corrections de bugs

- **[client]**
  - Évite une erreur lors de l'ouverture des paramètres de valeur par défaut ([#7997](https://github.com/nocobase/nocobase/pull/7997)) par @mytharcher

  - Résout une erreur lors de l'ajout d'enregistrements enfants dans un bloc de tableau arborescent associé ([#7989](https://github.com/nocobase/nocobase/pull/7989)) par @katherinehhh

  - Corrige un problème d'affichage lorsque le champ markdown est tronqué en mode HTML ([#7994](https://github.com/nocobase/nocobase/pull/7994)) par @katherinehhh

  - Corrige des résultats de recherche incomplets dans le sélecteur en cascade ([#7990](https://github.com/nocobase/nocobase/pull/7990)) par @katherinehhh

  - Corrige le problème où l'état de l'onglet de la page et la route ne correspondent pas ([#7991](https://github.com/nocobase/nocobase/pull/7991)) par @zhangzhonghe

  - Corrige l'affichage incorrect du libellé pour les valeurs non-objets dans le sélecteur distant ([#7975](https://github.com/nocobase/nocobase/pull/7975)) par @katherinehhh

- **[base de données]** Correction : suppression du traitement UTC dans la conversion horaire pour les champs de type heure uniquement, afin d'éviter les décalages dus au fuseau horaire. ([#7812](https://github.com/nocobase/nocobase/pull/7812)) par @ChimingLiu

- **[Workflow]**
  - Corrige le problème où les exécutions préparées n'étaient pas envoyées dans la file d'attente avant l'arrêt ([#7981](https://github.com/nocobase/nocobase/pull/7981)) par @mytharcher

  - Corrige le problème où certains menus de tâches de workflow ne s'affichaient pas ([#7980](https://github.com/nocobase/nocobase/pull/7980)) par @mytharcher

  - Corrige le problème où le lien d'une tâche redirigeait vers une page d'erreur ([#7983](https://github.com/nocobase/nocobase/pull/7983)) par @mytharcher

- **[Visualisation de données]** Les paramètres de filtrage des champs pour les collections de sources de données externes n'affichent pas les propriétés spécifiques ([#7982](https://github.com/nocobase/nocobase/pull/7982)) par @2013xile

- **[Gestionnaire de sources de données]** Correction d'un échec de mise à jour du mot de passe de la source de données lorsque le mot de passe de la base de données est modifié ([#7977](https://github.com/nocobase/nocobase/pull/7977)) par @cgyrock

- **[Action : Importer des enregistrements]** Correction du problème lors de l'importation de données dans un tableau arborescent ([#7976](https://github.com/nocobase/nocobase/pull/7976)) par @cgyrock

- **[Workflow : Nœud manuel]** Correction du problème où le nombre de tâches manuelles n'était pas correct ([#7984](https://github.com/nocobase/nocobase/pull/7984)) par @mytharcher

- **[Workflow : Approbation]**
  - Correction de l'absence de données du demandeur dans le contexte d'exécution après une nouvelle soumission par @mytharcher

  - Correction du problème où le commentaire dans le résultat de la tâche était nul après que l'utilisateur ait soumis une approbation avec un commentaire par @mytharcher
