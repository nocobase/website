---
title: "NocoBase v1.9.0-beta.13 : Refonte de la configuration des branches pour s'adapter aux changements du noyau"
description: "Notes de version de v1.9.0-beta.13"
---

### 🚀 Améliorations

- **[client]** Afin d'obtenir un type MIME plus précis pour les fichiers, utilisation du paquet `mime` pour détecter le type MIME des fichiers côté client ([#7551](https://github.com/nocobase/nocobase/pull/7551)) par @mytharcher

- **[Source de données : Principale]** Refonte de la logique de localisation des messages d'erreur, et traitement au sein du plugin de gestion des erreurs ([#7582](https://github.com/nocobase/nocobase/pull/7582)) par @2013xile

- **[Workflow]** Ajout de l'option `keepBranch` lors de la suppression d'un nœud ([#7571](https://github.com/nocobase/nocobase/pull/7571)) par @mytharcher

- **[Workflow : Approbation]** Refonte de la configuration des branches pour s'adapter aux modifications du noyau par @mytharcher

### 🐛 Corrections de bugs

- **[client]**
  - Correction d'une erreur lors de l'effacement d'un champ de date dans un bloc de filtre ([#7632](https://github.com/nocobase/nocobase/pull/7632)) par @katherinehhh

  - Correction du problème où la valeur par défaut d'un sous-tableau ne fonctionnait pas dans le tiroir du formulaire d'édition ([#7631](https://github.com/nocobase/nocobase/pull/7631)) par @katherinehhh

  - Correction du problème où les images ne s'affichaient pas correctement lorsqu'elles étaient à la fois pivotées et redimensionnées lors de l'aperçu ([#7573](https://github.com/nocobase/nocobase/pull/7573)) par @mytharcher

  - Correction du problème des pop-ups d'icônes d'onglets qui étaient masqués ([#7607](https://github.com/nocobase/nocobase/pull/7607)) par @zhangzhonghe

- **[base de données]** Correction d'une erreur levée lorsque l'opérateur `$in` rencontre une valeur `null` ([#7610](https://github.com/nocobase/nocobase/pull/7610)) par @mytharcher

- **[Source de données : Principale]** Correction du problème où les métadonnées n'étaient pas synchronisées entre plusieurs nœuds après la création d'un champ d'association inverse ([#7628](https://github.com/nocobase/nocobase/pull/7628)) par @mytharcher

- **[Workflow : Approbation]**
  - Correction du problème d'erreurs de script de migration dû à des tables inexistantes lorsque l'application n'est pas installée par @mytharcher

  - Correction du problème de non-génération de l'ID Snowflake en raison de hooks ignorés par @mytharcher

- **[Auth : LDAP]** Correction de l'échec de liaison LDAP avec des DN non-ASCII (UTF-8) dans Active Directory par @2013xile
