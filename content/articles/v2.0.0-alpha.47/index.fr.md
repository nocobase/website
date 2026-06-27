---
title: "NocoBase v2.0.0-alpha.47 : Prise en charge de l'initialisation des champs de filtre sélectionnés dans la requête de graphique"
description: "Notes de version de v2.0.0-alpha.47"
---

### 🚀 Améliorations

- **[client]**
  - Prise en charge de l'initialisation des champs de filtre sélectionnés dans les requêtes de graphiques ([#7933](https://github.com/nocobase/nocobase/pull/7933)) par @heziqiang

  - Utilisation de triples accolades (`{{{` et `}}}`) pour les variables dans le contenu des messages, afin d'éviter que les variables soient échappées par Handlebars ([#7972](https://github.com/nocobase/nocobase/pull/7972)) par @mytharcher

  - Ajout d'un état de chargement pour les boutons d'action de mise à jour et de suppression d'enregistrement, afin d'éviter les requêtes en double ([#7964](https://github.com/nocobase/nocobase/pull/7964)) par @mytharcher

- **[Champ de collection : Markdown(Vditor)]** Ajustement de la largeur du contenu en plein écran de Vditor ([#7974](https://github.com/nocobase/nocobase/pull/7974)) par @katherinehhh

### 🐛 Corrections de bugs

- **[client]**
  - Correction d'un problème où l'ouverture du bloc de détail dans la fenêtre contextuelle pour les champs de relation sans ID provoquait une erreur. ([#7973](https://github.com/nocobase/nocobase/pull/7973)) par @gchust

  - Correction d'un problème où les données d'association ne se chargeaient pas correctement dans la fenêtre contextuelle pour les champs de relation sans ID. ([#7970](https://github.com/nocobase/nocobase/pull/7970)) par @gchust

  - Correction de problèmes de routage lors de l'utilisation d'une iframe ([#7957](https://github.com/nocobase/nocobase/pull/7957)) par @zhangzhonghe

  - Correction d'un problème de paramètre de précision invalide pour le format des champs numériques ([#7967](https://github.com/nocobase/nocobase/pull/7967)) par @katherinehhh

  - Correction du typage incorrect dans la nouvelle page 2.0 ([#7945](https://github.com/nocobase/nocobase/pull/7945)) par @zhangzhonghe

  - Correction du problème où la valeur du filtre n'était pas effacée lors du clic sur le bouton Réinitialiser ([#7966](https://github.com/nocobase/nocobase/pull/7966)) par @zhangzhonghe

- **[Workflow]** Correction de l'affichage du nombre de tâches dû à une mauvaise utilisation du fournisseur ([#7968](https://github.com/nocobase/nocobase/pull/7968)) par @mytharcher

- **[Visualisation de données]** Résolution du problème où la requête de graphique ne prenait pas en charge la portée des données ACL ([#7915](https://github.com/nocobase/nocobase/pull/7915)) par @2013xile

- **[Bloc : Référence]** Correction d'un problème où la citation d'un bloc supprimait le bloc cité de la page d'origine. ([#7969](https://github.com/nocobase/nocobase/pull/7969)) par @gchust

- **[Employés IA]** Correction d'un problème lors de la génération de sortie SQL par l'IA ([#7956](https://github.com/nocobase/nocobase/pull/7956)) par @heziqiang

- **[Impression de modèle]** Correction de l'échec d'ajout d'un modèle dans l'opération d'impression de modèle d'enregistrement par @katherinehhh
