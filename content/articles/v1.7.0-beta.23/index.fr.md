---
title: "NocoBase v1.7.0-beta.23 : prise en charge de la variable de réponse dans le message de succès de l'action de requête personnalisée"
description: "Notes de version de v1.7.0-beta.23"
---

### 🎉 Nouvelles fonctionnalités

- **[Action : Requête personnalisée]** Prise en charge de la variable de réponse dans le message de succès de l'action de requête personnalisée ([#6694](https://github.com/nocobase/nocobase/pull/6694)) par @katherinehhh

### 🚀 Améliorations

- **[client]** Ajustement du message de téléchargement ([#6757](https://github.com/nocobase/nocobase/pull/6757)) par @mytharcher

### 🐛 Corrections de bugs

- **[client]**
  - Données incorrectes récupérées pour les champs de tableau many-to-many provenant de tables liées dans les formulaires ([#6744](https://github.com/nocobase/nocobase/pull/6744)) par @2013xile

  - L'action d'exportation dans une vue de collection n'est prise en charge que lorsque writableView est false ([#6763](https://github.com/nocobase/nocobase/pull/6763)) par @katherinehhh

  - Création inattendue de données d'association lors de l'affichage d'un champ d'association dans un sous-formulaire ou une sous-table dans un formulaire de création ([#6727](https://github.com/nocobase/nocobase/pull/6727)) par @katherinehhh
