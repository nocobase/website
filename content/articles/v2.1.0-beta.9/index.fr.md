---
title: "NocoBase v2.1.0-beta.9 : Correction du problème de sélection des tables système dans les règles personnalisées"
description: "Notes de version de v2.1.0-beta.9"
---

### 🐛 Corrections de bugs

- **[client]**
  - Correction de la hauteur invalide du bloc tableau ([#8842](https://github.com/nocobase/nocobase/pull/8842)) par @jiannx

  - Correction du problème où l'ajout d'un bloc de données ou l'actualisation de la page déclenchait un double rafraîchissement. ([#8851](https://github.com/nocobase/nocobase/pull/8851)) par @gchust

  - Correction de l'affichage des champs connectables lors de la liaison de blocs de données sous des sources de données externes ([#8848](https://github.com/nocobase/nocobase/pull/8848)) par @zhangzhonghe

- **[Modèles d'interface utilisateur]** Correction des erreurs survenues lors de l'utilisation du bloc de formulaire d'édition et du modèle de bloc de détail. ([#8859](https://github.com/nocobase/nocobase/pull/8859)) par @gchust

- **[Brouillons de formulaire]** Correction du problème où les données du brouillon de formulaire étaient perdues lorsque la fenêtre contextuelle était ouverte plusieurs fois. ([#8858](https://github.com/nocobase/nocobase/pull/8858)) par @gchust

- **[Localisation]** Les entrées introuvables ne seront pas soumises dans l'état non-édition de la page. ([#8841](https://github.com/nocobase/nocobase/pull/8841)) par @jiannx

- **[Action : Importer des enregistrements Pro]** Correction du problème où il était impossible d'effectuer des sélections multiples pour les champs en double dans la configuration d'importation. par @jiannx

- **[Gestionnaire d'emails]** Ajustements des destinataires pour la réponse et la réponse à tous, correction de l'échec d'ajout de champ de tableau et d'autres problèmes par @jiannx

- **[Gestionnaire de migration]** Correction du problème où les tables système ne pouvaient pas être sélectionnées dans les règles personnalisées par @cgyrock
