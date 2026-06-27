---
title: "NocoBase v2.1.0-alpha.9 : Permet d'ajouter des employés IA dans la fenêtre contextuelle des sous-tableaux"
description: "Notes de version de v2.1.0-alpha.9"
---

### 🎉 Nouvelles fonctionnalités

- **[Employés IA]** Permet d'ajouter des employés IA dans la fenêtre contextuelle des sous-tableaux ([#8873](https://github.com/nocobase/nocobase/pull/8873)) par @2013xile

- **[IA : Serveur MCP]** Ajout d'un nouveau plugin de serveur MCP pour permettre la construction de systèmes NocoBase et la prise en charge des workflows métier. ([#8824](https://github.com/nocobase/nocobase/pull/8824)) par @2013xile

### 🚀 Améliorations

- **[non défini]** README ([#8866](https://github.com/nocobase/nocobase/pull/8866)) par @gaston98765

### 🐛 Corrections de bugs

- **[base de données]** Correction du problème de validation côté serveur pour les champs de date ([#8867](https://github.com/nocobase/nocobase/pull/8867)) par @2013xile

- **[client]**
  - Correction de l'affichage des champs connectables lors de la liaison de blocs de données sous des sources de données externes ([#8848](https://github.com/nocobase/nocobase/pull/8848)) par @zhangzhonghe

  - Correction du problème où l'ajout d'un bloc de données ou l'actualisation de la page déclenchait un double rafraîchissement. ([#8851](https://github.com/nocobase/nocobase/pull/8851)) par @gchust

  - Correction du problème où les valeurs par défaut de certains champs ne prenaient pas effet après l'actualisation de la page. ([#8834](https://github.com/nocobase/nocobase/pull/8834)) par @gchust

  - Correction de la hauteur invalide du bloc tableau ([#8842](https://github.com/nocobase/nocobase/pull/8842)) par @jiannx

- **[Localisation]**
  - Exception de permission d'interface manquante pour localizationTexts ([#8861](https://github.com/nocobase/nocobase/pull/8861)) par @jiannx

  - Les entrées non trouvées ne seront pas soumises dans l'état non-édition de la page. ([#8841](https://github.com/nocobase/nocobase/pull/8841)) par @jiannx

- **[Brouillons de formulaires]** Correction du problème où les données de brouillon de formulaire étaient perdues lorsque la fenêtre contextuelle était ouverte plusieurs fois. ([#8858](https://github.com/nocobase/nocobase/pull/8858)) par @gchust

- **[Modèles d'interface utilisateur]** Correction des erreurs survenues lors de l'utilisation du modèle de bloc de formulaire d'édition et du modèle de bloc de détail. ([#8859](https://github.com/nocobase/nocobase/pull/8859)) par @gchust

- **[IA : Base de connaissances]** Empêcher la suppression de la base de données vectorielles et du stockage vectoriel en cours d'utilisation. par @cgyrock

- **[Action : Importer des enregistrements Pro]** Correction du problème où il était impossible d'effectuer des sélections multiples pour les champs en double dans la configuration d'importation. par @jiannx

- **[Gestionnaire d'emails]** Ajustements des destinataires pour répondre et répondre à tous, correction de l'échec d'ajout de champ de tableau et autres problèmes par @jiannx

- **[Gestionnaire de migration]** Correction du problème où les tables système ne pouvaient pas être sélectionnées dans les règles personnalisées par @cgyrock
