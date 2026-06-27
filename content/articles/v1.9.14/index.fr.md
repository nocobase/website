---
title: "NocoBase v1.9.14 : Prise en charge de la redirection automatique vers l'URL SSO lorsque non authentifié"
description: "Notes de version de la v1.9.14"
---

### 🎉 Nouvelles fonctionnalités

- **[Auth : OIDC]** Prise en charge de la redirection automatique vers l'URL SSO lorsque l'utilisateur n'est pas authentifié par @heziqiang

### 🚀 Améliorations

- **[client]** Utilisation de triples accolades (`{{{` et `}}}`) pour les variables dans le contenu des messages, afin d'éviter que les variables ne soient échappées par Handlebars ([#7972](https://github.com/nocobase/nocobase/pull/7972)) par @mytharcher

- **[Champ de collection : Markdown(Vditor)]** Ajustement de la largeur du contenu en plein écran de Vditor ([#7974](https://github.com/nocobase/nocobase/pull/7974)) par @katherinehhh

### 🐛 Corrections de bugs

- **[base de données]** Correction : suppression du traitement UTC dans la conversion horaire pour les champs de type heure uniquement, afin d'éviter les décalages liés au fuseau horaire. ([#7812](https://github.com/nocobase/nocobase/pull/7812)) par @ChimingLiu

- **[client]** Correction de l'affichage incorrect du libellé pour les valeurs non-objets dans la sélection distante ([#7975](https://github.com/nocobase/nocobase/pull/7975)) par @katherinehhh

- **[Workflow]**
  - Correction du problème où les exécutions préparées n'étaient pas envoyées à la file d'attente avant l'arrêt ([#7981](https://github.com/nocobase/nocobase/pull/7981)) par @mytharcher

  - Correction du problème où le lien d'une tâche redirigeait vers une page d'erreur ([#7983](https://github.com/nocobase/nocobase/pull/7983)) par @mytharcher

  - Correction du problème où certains menus de tâches de workflow ne s'affichaient pas ([#7980](https://github.com/nocobase/nocobase/pull/7980)) par @mytharcher

  - Correction du problème où le compteur de tâches ne s'affichait pas en raison d'une mauvaise utilisation du fournisseur ([#7968](https://github.com/nocobase/nocobase/pull/7968)) par @mytharcher

- **[Workflow : Nœud manuel]** Correction du problème où le compteur de tâches manuelles était incorrect ([#7984](https://github.com/nocobase/nocobase/pull/7984)) par @mytharcher

- **[Visualisation de données]**
  - Les paramètres de filtrage des champs pour les collections de sources de données externes n'affichent pas les propriétés spécifiques ([#7982](https://github.com/nocobase/nocobase/pull/7982)) par @2013xile

  - Résolution du problème où la requête de graphique ne prenait pas en charge le périmètre de données ACL ([#7915](https://github.com/nocobase/nocobase/pull/7915)) par @2013xile

- **[Gestionnaire de sources de données]** Correction de l'échec de mise à jour du mot de passe de la source de données lorsque le mot de passe de la base de données est modifié ([#7977](https://github.com/nocobase/nocobase/pull/7977)) par @cgyrock

- **[Action : Importer des enregistrements]** Correction du problème lors de l'importation de données dans un tableau arborescent ([#7976](https://github.com/nocobase/nocobase/pull/7976)) par @cgyrock
