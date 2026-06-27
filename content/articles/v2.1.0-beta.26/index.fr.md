---
title: "NocoBase v2.1.0-beta.26 : ajout des actions d'association et de dissociation au bloc d'association"
description: "Notes de version de la v2.1.0-beta.26"
---

### 🎉 Nouvelles fonctionnalités

- **[client]** Ajout des actions d'association et de dissociation au bloc d'association ([#9366](https://github.com/nocobase/nocobase/pull/9366)) par @katherinehhh

- **[Visualisation de données]** Ajout du support client-v2 pour les plugins de blocs ([#9297](https://github.com/nocobase/nocobase/pull/9297)) par @zhangzhonghe

### 🚀 Améliorations

- **[non défini]** - ([#9374](https://github.com/nocobase/nocobase/pull/9374)) par @Molunerfinn

### 🐛 Corrections de bugs

- **[client-v2]**
  - Correction du problème où certaines pages v2 ne parvenaient pas à charger les plugins distants ([#9369](https://github.com/nocobase/nocobase/pull/9369)) par @zhangzhonghe

  - Correction des problèmes de position du placeholder et de dépôt lors du glissement des blocs de page v2 ([#9361](https://github.com/nocobase/nocobase/pull/9361)) par @zhangzhonghe

- **[client]**
  - Correction du problème où les règles de liaison n'étaient pas réexécutées après la modification des valeurs du formulaire. ([#9357](https://github.com/nocobase/nocobase/pull/9357)) par @gchust

  - Correction du problème où le champ d'option obligatoire dans un sous-tableau n'était pas validé correctement lors de la première sélection sur mobile ([#9352](https://github.com/nocobase/nocobase/pull/9352)) par @katherinehhh

  - Correction du problème de masquage de l'option de création rapide pour le champ de sélection d'association dans le sous-tableau v2 ([#9358](https://github.com/nocobase/nocobase/pull/9358)) par @katherinehhh

  - Correction du problème où les variables des paramètres de requête URL devenaient invalides après le changement de pages mises en cache ([#9263](https://github.com/nocobase/nocobase/pull/9263)) par @zhangzhonghe

  - Correction du rendu incorrect des données dans le bloc de carte en grille après mise à jour et actualisation ([#9351](https://github.com/nocobase/nocobase/pull/9351)) par @katherinehhh

- **[serveur]** Validation des noms de paquets de plugins avant les opérations sur le système de fichiers ([#9367](https://github.com/nocobase/nocobase/pull/9367)) par @chenos

- **[non défini]** Correction des liens morts dans la documentation traduite et activation par défaut de la détection des liens morts dans la construction de la documentation. ([#9371](https://github.com/nocobase/nocobase/pull/9371)) par @Molunerfinn

- **[Employés IA]**
  - Correction d'une erreur de lecture du champ de pièce jointe des associations par le nœud Employé IA dans le workflow ([#9377](https://github.com/nocobase/nocobase/pull/9377)) par @cgyrock

  - Correction du problème où le nœud Employé IA du workflow ne se terminait pas correctement après l'attribution d'un outil. ([#9381](https://github.com/nocobase/nocobase/pull/9381)) par @cgyrock

- **[Bloc : Kanban]**
  - Amélioration du style compact des cartes Kanban et optimisation de la sélection de modèles dans la fenêtre contextuelle de création rapide. ([#9370](https://github.com/nocobase/nocobase/pull/9370)) par @jiannx

  - Correction du problème empêchant le retour à la ligne d'un seul mot dans le champ de texte long du bloc kanban v1 ([#9356](https://github.com/nocobase/nocobase/pull/9356)) par @katherinehhh

  - Correction du problème où les blocs associés au kanban utilisaient des paramètres de ressource d'exécution non résolus dans les contextes de fenêtre contextuelle ou de page secondaire. ([#9350](https://github.com/nocobase/nocobase/pull/9350)) par @jiannx

- **[Action : Requête personnalisée]** Mise à niveau de koa vers v3 ([#9368](https://github.com/nocobase/nocobase/pull/9368)) par @chenos

- **[Champ de collection : Formule]** Correction du champ de formule dans le sous-tableau v2 qui ne déclenchait pas le calcul automatique ([#9354](https://github.com/nocobase/nocobase/pull/9354)) par @katherinehhh

- **[Gestionnaire d'emails]** Correction de l'affichage du titre des identités de messagerie par @jiannx
