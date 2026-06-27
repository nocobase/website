---
title: "NocoBase v1.7.0-beta.2 : prise en charge de la configuration des options de champ sélectionnables dans les règles de liaison"
description: "Notes de version de v1.7.0-beta.2"
---

### 🎉 Nouvelles fonctionnalités

- **[client]**
  - Le bloc tableau prend en charge le masquage de la colonne d'index (visible par défaut) ([#6416](https://github.com/nocobase/nocobase/pull/6416)) par @katherinehhh

  - Prise en charge de la configuration des options de champ sélectionnables dans les règles de liaison ([#6338](https://github.com/nocobase/nocobase/pull/6338)) par @katherinehhh

  - Prise en charge de la configuration de la plage de dates (min/max) pour les champs de temps dans les règles de liaison ([#6356](https://github.com/nocobase/nocobase/pull/6356)) par @katherinehhh

- **[Bloc : Panneau d'actions]** Prise en charge du saut de ligne pour le titre des actions dans le panneau d'actions ([#6433](https://github.com/nocobase/nocobase/pull/6433)) par @katherinehhh

### 🐛 Corrections de bugs

- **[client]**
  - Numéro de page incorrect lors de l'ajout de données après un changement de taille de page dans un sous-tableau ([#6437](https://github.com/nocobase/nocobase/pull/6437)) par @katherinehhh

  - Le style du logo est incohérent avec le précédent ([#6444](https://github.com/nocobase/nocobase/pull/6444)) par @zhangzhonghe

  - Changement de valeur du champ à sélection multiple et perte d'options lors de la suppression d'enregistrements dans un sous-tableau ([#6405](https://github.com/nocobase/nocobase/pull/6405)) par @katherinehhh

  - La sélection de plage du champ de date exclut la date maximale ([#6418](https://github.com/nocobase/nocobase/pull/6418)) par @katherinehhh

  - Lors de l'utilisation de l'opérateur '$anyOf', la règle de liaison est invalide ([#6415](https://github.com/nocobase/nocobase/pull/6415)) par @zhangzhonghe

  - Données non mises à jour dans les fenêtres contextuelles ouvertes via les boutons Lien ([#6411](https://github.com/nocobase/nocobase/pull/6411)) par @zhangzhonghe

- **[Action : Modification par lot]** Correction du déclenchement du workflow lors de la soumission de modifications par lot ([#6440](https://github.com/nocobase/nocobase/pull/6440)) par @mytharcher

- **[Visualisation des données]** Les champs supprimés réapparaissent lors de l'ajout de champs de filtre personnalisés ([#6450](https://github.com/nocobase/nocobase/pull/6450)) par @2013xile

- **[Gestionnaire de sources de données]** Le changement de source de données dans la gestion des rôles ne charge pas les collections correspondantes ([#6431](https://github.com/nocobase/nocobase/pull/6431)) par @katherinehhh

- **[Action : Requête personnalisée]** Erreur de validation des permissions côté serveur pour les requêtes personnalisées ([#6438](https://github.com/nocobase/nocobase/pull/6438)) par @katherinehhh

- **[Gestionnaire de fichiers]** Correction de quelques problèmes du gestionnaire de fichiers ([#6436](https://github.com/nocobase/nocobase/pull/6436)) par @mytharcher

- **[Notification : Message in-app]**
  - Éviter que la configuration des destinataires erronés n'interroge tous les utilisateurs ([#6424](https://github.com/nocobase/nocobase/pull/6424)) par @sheldon66

  - Différencier la couleur d'arrière-plan de la liste des messages in-app de celle des cartes de message pour améliorer la hiérarchie visuelle et la lisibilité. ([#6417](https://github.com/nocobase/nocobase/pull/6417)) par @sheldon66

- **[Workflow : Nœud manuel]**
  - Modification de la limite de version de la migration à `<1.7.0` ([#6430](https://github.com/nocobase/nocobase/pull/6430)) par @mytharcher

  - Correction de la migration qui omettait le préfixe de table et la logique de schéma ([#6425](https://github.com/nocobase/nocobase/pull/6425)) par @mytharcher
