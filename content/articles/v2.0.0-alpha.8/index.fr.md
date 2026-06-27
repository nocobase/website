---
title: "NocoBase v2.0.0-alpha.8 : Amélioration de la fonction de recherche web du plugin-ai"
description: "Notes de version de v2.0.0-alpha.8"
---

### 🎉 Nouvelles fonctionnalités

- **[IA employés]** Amélioration de la fonction de recherche web du plugin-ai ([#7580](https://github.com/nocobase/nocobase/pull/7580)) par @cgyrock

### 🚀 Améliorations

- **[client]** Pour obtenir un type MIME de fichier plus précis, utilisation du package `mime` pour détecter le type MIME des fichiers côté client ([#7551](https://github.com/nocobase/nocobase/pull/7551)) par @mytharcher

- **[moteur de workflow]**
  - Prise en charge des variables contextuelles (popup) ([#7583](https://github.com/nocobase/nocobase/pull/7583)) par @gchust

  - Amélioration de l'expérience d'édition de code avec des extraits plus riches et des complétions de code contextuelles pour divers scénarios ([#7559](https://github.com/nocobase/nocobase/pull/7559)) par @gchust

  - Standardisation des workflows automatiques pour qu'ils soient systématiquement déclenchés par l'événement "beforeRender", garantissant un fonctionnement prévisible et unifié entre les processus. ([#7577](https://github.com/nocobase/nocobase/pull/7577)) par @gchust

- **[Workflow]** Ajout de l'option `keepBranch` lors de la suppression d'un nœud ([#7571](https://github.com/nocobase/nocobase/pull/7571)) par @mytharcher

- **[Visualisation de données]** Extension des types de graphiques ; Optimisation de l'interface utilisateur et de l'expérience interactive. ([#7581](https://github.com/nocobase/nocobase/pull/7581)) par @heziqiang

- **[Workflow : Approbation]** Refonte de la configuration des branches pour s'adapter aux changements du noyau par @mytharcher

### 🐛 Corrections de bugs

- **[client]**
  - Correction des problèmes d'affichage anormal des pages lors du changement de pagination d'un tableau ([#7572](https://github.com/nocobase/nocobase/pull/7572)) par @zhangzhonghe

  - Impossible de configurer la valeur d'affectation de champ pour les actions `Mettre à jour` et `Mise à jour groupée` ([#7565](https://github.com/nocobase/nocobase/pull/7565)) par @gchust

  - Correction du problème où les images ne s'affichaient pas correctement lorsqu'elles étaient à la fois pivotées et redimensionnées lors de l'aperçu ([#7573](https://github.com/nocobase/nocobase/pull/7573)) par @mytharcher

- **[Workflow : Approbation]** Correction du problème d'erreur de script de migration dû à des tables inexistantes lorsque l'application n'est pas installée par @mytharcher

- **[Auth : LDAP]** Correction de l'échec de liaison LDAP avec des DN non-ASCII (UTF-8) dans Active Directory par @2013xile
