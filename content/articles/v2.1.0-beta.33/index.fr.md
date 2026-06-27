---
title: "NocoBase v2.1.0-beta.33 : Ajout de la prise en charge du client v2 pour les blocs Markdown"
description: "Notes de version de v2.1.0-beta.33"
---

### 🎉 Nouvelles fonctionnalités

- **[Bloc : Markdown]** Ajout du support client v2 pour les blocs Markdown ([#9487](https://github.com/nocobase/nocobase/pull/9487)) par @jiannx

- **[Bloc : Liste]** Les blocs de liste prennent en charge client-v2 ([#9486](https://github.com/nocobase/nocobase/pull/9486)) par @jiannx

- **[Calendrier]** Ajout du support client v2 pour le plugin Calendrier. ([#9464](https://github.com/nocobase/nocobase/pull/9464)) par @jiannx

- **[Bloc : Arborescence]** Ajout du support client-v2 pour le bloc de filtre arborescent. ([#9466](https://github.com/nocobase/nocobase/pull/9466)) par @jiannx

### 🚀 Améliorations

- **[moteur-de-flux]** Ajout d'un message de confirmation des modifications non sauvegardées lors de la fermeture de la page de configuration du flux d'événements avec des données non sauvegardées. ([#9449](https://github.com/nocobase/nocobase/pull/9449)) par @gchust

- **[Gestionnaire de source de données]** Optimisation de l'API de modélisation des données pour prendre en charge la création de collections de commentaires avec l'IA, la configuration de champs de relation pour les sources de données externes et la définition de règles de validation de champs ([#9480](https://github.com/nocobase/nocobase/pull/9480)) par @2013xile

- **[Bloc : Grille de cartes]** Mise à jour du plugin de grille de cartes pour prendre en charge client v2 ([#9484](https://github.com/nocobase/nocobase/pull/9484)) par @jiannx

- **[Bloc : iframe]** Ajout du support v2 pour le bloc iframe. ([#9485](https://github.com/nocobase/nocobase/pull/9485)) par @jiannx

- **[Employés IA]** Optimisation des performances et de l'interaction des conversations parallèles des employés IA ([#9462](https://github.com/nocobase/nocobase/pull/9462)) par @cgyrock

### 🐛 Corrections de bugs

- **[client]**
  - Ajout du paramètre « Après soumission réussie » pour les actions de soumission de formulaire. ([#9414](https://github.com/nocobase/nocobase/pull/9414)) par @jiannx

  - Correction empêchant l'ouverture de l'édition rapide pour les champs de relation dans un tableau ([#9469](https://github.com/nocobase/nocobase/pull/9469)) par @katherinehhh

  - Correction des champs de relation en lecture seule dans les sous-tableaux qui ne s'affichaient pas ou n'étaient pas cliquables après actualisation. ([#9453](https://github.com/nocobase/nocobase/pull/9453)) par @jiannx

  - Correction du problème où les anciens paramètres de valeur par défaut ne pouvaient pas être supprimés. ([#9470](https://github.com/nocobase/nocobase/pull/9470)) par @gchust

  - Correction : les champs à sélection multiple dans les blocs de données v2 doivent afficher les libellés des options au lieu des valeurs ([#9472](https://github.com/nocobase/nocobase/pull/9472)) par @katherinehhh

- **[client-v2]**
  - Correction du problème où la liste des options du champ titre est vide pour les champs de relation dans les blocs de tableau ([#9490](https://github.com/nocobase/nocobase/pull/9490)) par @katherinehhh

  - Conservation des groupes vides après le filtrage des menus v1 dans la mise en page v2 ([#9478](https://github.com/nocobase/nocobase/pull/9478)) par @zhangzhonghe

- **[moteur-de-flux]** Correction des sous-menus de champs de relation instables dans les menus de sous-modèles ([#9417](https://github.com/nocobase/nocobase/pull/9417)) par @jiannx

- **[Gestionnaire de fichiers]** Correction des téléchargements `tx-cos` du gestionnaire de fichiers qui manquaient les métadonnées de taille de fichier. ([#9499](https://github.com/nocobase/nocobase/pull/9499)) par @mytharcher

- **[Employés IA]** Correction d'une erreur de chargement du plugin-ai ([#9483](https://github.com/nocobase/nocobase/pull/9483)) par @cgyrock

- **[Bloc : Formulaire multi-étapes]** Correction du problème de barre de défilement lors de l'activation de la hauteur totale dans le bloc de formulaire par étapes v1 ([#9468](https://github.com/nocobase/nocobase/pull/9468)) par @katherinehhh

- **[Workflow : Webhook]** Correction du problème où la création d'un nœud de réponse était interceptée par la validation de la configuration `statusCode` par @mytharcher

- **[Champ de collection : Signature]** Résolution du problème d'affichage de la zone de signature sur mobile par @chenzhizdt
