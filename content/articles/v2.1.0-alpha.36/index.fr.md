---
title: "NocoBase v2.1.0-alpha.36 : Ajout du support client v2 pour les blocs Markdown"
description: "Notes de version de v2.1.0-alpha.36"
---

### 🎉 Nouvelles fonctionnalités

- **[Bloc : Markdown]** Ajout du support client v2 pour les blocs Markdown ([#9487](https://github.com/nocobase/nocobase/pull/9487)) par @jiannx

- **[Bloc : Liste]** Les blocs Liste prennent en charge client-v2 ([#9486](https://github.com/nocobase/nocobase/pull/9486)) par @jiannx

### 🚀 Améliorations

- **[flow-engine]** Ajout d'un message de confirmation de modifications non enregistrées lors de la fermeture de la page de configuration du flux d'événements avec des données non sauvegardées. ([#9449](https://github.com/nocobase/nocobase/pull/9449)) par @gchust

- **[cli]** Amélioration de l'expérience de l'invite de commande NocoBase CLI en migrant les workflows de configuration et de gestion vers Inquirer, et correction des problèmes d'installation, de compétences et d'exécution Docker associés. ([#9452](https://github.com/nocobase/nocobase/pull/9452)) par @chenos

- **[Gestionnaire de sources de données]** Optimisation de l'API de modélisation des données pour prendre en charge la création de collections de commentaires avec l'IA, la configuration de champs de relation pour les sources de données externes et la définition de règles de validation de champs ([#9480](https://github.com/nocobase/nocobase/pull/9480)) par @2013xile

- **[Bloc : Grille]** Mise à jour du plugin de carte en grille pour prendre en charge client v2 ([#9484](https://github.com/nocobase/nocobase/pull/9484)) par @jiannx

- **[Bloc : iframe]** Ajout du support v2 pour le bloc iframe. ([#9485](https://github.com/nocobase/nocobase/pull/9485)) par @jiannx

### 🐛 Corrections de bugs

- **[client]**
  - Correction des champs de relation en affichage seul dans les sous-tableaux qui ne s'affichaient pas ou n'étaient pas cliquables après actualisation. ([#9453](https://github.com/nocobase/nocobase/pull/9453)) par @jiannx

  - Ajout du paramètre "Après soumission réussie" pour les actions de soumission de formulaire. ([#9414](https://github.com/nocobase/nocobase/pull/9414)) par @jiannx

- **[client-v2]** Correction du problème où la liste des options de champ de titre est vide pour les champs de relation dans les blocs de tableau ([#9490](https://github.com/nocobase/nocobase/pull/9490)) par @katherinehhh

- **[flow-engine]** Correction des sous-menus de champs de relation instables dans les menus de sous-modèles ([#9417](https://github.com/nocobase/nocobase/pull/9417)) par @jiannx

- **[Gestionnaire de fichiers]** Correction des téléchargements `tx-cos` du gestionnaire de fichiers qui manquent les métadonnées de taille de fichier. ([#9499](https://github.com/nocobase/nocobase/pull/9499)) par @mytharcher

- **[Champ de collection : Signature]** Résolution du problème d'affichage de la zone de signature sur mobile par @chenzhizdt
