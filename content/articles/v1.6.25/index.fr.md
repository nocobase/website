---
title: "NocoBase v1.6.25 : Ajout d'un CI de publication pour le kit de licence"
description: "Notes de version de la v1.6.25"
---

### 🎉 Nouvelles fonctionnalités

- **[undefined]** Ajout d'un CI de publication pour le kit de licence ([#6786](https://github.com/nocobase/nocobase/pull/6786)) par @jiannx

- **[Visualisation de données : ECharts]** Ajout du paramètre « Inverser l'axe Y » pour les diagrammes à barres par @2013xile

### 🚀 Améliorations

- **[utils]** Augmentation de la hauteur de la liste des champs du bouton de filtre et tri/catégorisation des champs ([#6779](https://github.com/nocobase/nocobase/pull/6779)) par @zhangzhonghe

- **[client]** Optimisation du style du bouton d'ajout dans les sous-tableaux et alignement du paginateur sur la même ligne ([#6790](https://github.com/nocobase/nocobase/pull/6790)) par @katherinehhh

- **[Gestionnaire de fichiers]** Ajout d'une option de délai d'expiration OSS, par défaut à 10 min ([#6795](https://github.com/nocobase/nocobase/pull/6795)) par @mytharcher

- **[Politique de mots de passe]** Modification de l'expiration par défaut du mot de passe pour qu'il n'expire jamais par @2013xile

- **[WeCom]** Priorisation de l'email professionnel sur l'email personnel lors de la mise à jour de l'email de l'utilisateur par @2013xile

### 🐛 Corrections de bugs

- **[client]**
  - Dans le bloc pliable, cliquer sur le bouton d'effacement dans la zone de recherche de champ de relation ne doit pas supprimer la plage de données ([#6782](https://github.com/nocobase/nocobase/pull/6782)) par @zhangzhonghe

  - Le champ d'association ne soumet pas les données lors de l'affichage d'un champ depuis la collection liée ([#6798](https://github.com/nocobase/nocobase/pull/6798)) par @katherinehhh

  - Interdiction de déplacer les menus avant ou après les onglets de page ([#6777](https://github.com/nocobase/nocobase/pull/6777)) par @zhangzhonghe

  - Le bloc tableau affiche des données en double lors du filtrage ([#6792](https://github.com/nocobase/nocobase/pull/6792)) par @zhangzhonghe

  - Dans le formulaire de filtre, changer l'opérateur de champ puis rafraîchir la page provoque une erreur ([#6781](https://github.com/nocobase/nocobase/pull/6781)) par @zhangzhonghe

- **[base de données]**
  - Éviter une erreur lorsque le type de données n'est pas une chaîne ([#6797](https://github.com/nocobase/nocobase/pull/6797)) par @mytharcher

  - Ajout de `unavailableActions` à la collection SQL et à la collection de vues ([#6765](https://github.com/nocobase/nocobase/pull/6765)) par @katherinehhh

- **[create-nocobase-app]** Correction temporaire du problème MariaDB en rétrogradant vers la version 2.5.6 ([#6762](https://github.com/nocobase/nocobase/pull/6762)) par @chenos

- **[Authentification]** Interdiction de modifier le nom de l'authentificateur ([#6808](https://github.com/nocobase/nocobase/pull/6808)) par @2013xile

- **[Impression de modèles]** Correction : Logique de validation des permissions corrigée pour empêcher les actions non autorisées. par @sheldon66

- **[Stockage de fichiers : S3(Pro)]** Expiration de l'URL d'accès invalide par @jiannx

- **[Bloc : Arborescence]** Après connexion via une clé étrangère, cliquer pour déclencher le filtrage entraîne des conditions de filtre vides par @zhangzhonghe
