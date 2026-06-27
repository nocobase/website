---
title: "NocoBase v2.1.0-alpha.39 : Ajout du support client-v2 pour le plugin Kanban"
description: "Notes de version de v2.1.0-alpha.39"
---

### 🎉 Nouvelles fonctionnalités

- **[Bloc : Kanban]** Ajout du support client-v2 pour le plugin Kanban ([#9475](https://github.com/nocobase/nocobase/pull/9475)) par @jiannx

### 🚀 Améliorations

- **[client]** Partage de l'évaluation des conditions entre les applications v1 et v2 ([#9522](https://github.com/nocobase/nocobase/pull/9522)) par @zhangzhonghe

- **[Localisation]** Amélioration des tâches de traduction Lina avec le périmètre de traduction, les paramètres de langue de référence et l'édition rapide ([#9521](https://github.com/nocobase/nocobase/pull/9521)) par @2013xile

- **[Employés IA]** Alerte en cas de nom de table en double lors de l'enregistrement dans la base vectorielle ([#9497](https://github.com/nocobase/nocobase/pull/9497)) par @cgyrock

- **[Gestionnaire de notifications]** Modification de la stratégie de file d'attente pour optimiser les performances d'envoi ([#9407](https://github.com/nocobase/nocobase/pull/9407)) par @mytharcher

- **[Workflow : Événement d'action personnalisée]** Migration des plugins block-workbench et workflow-custom-action-trigger vers le client v2, incluant leurs modèles d'action et le flux du scanner QR. ([#9494](https://github.com/nocobase/nocobase/pull/9494)) par @jiannx

- **[Authentification]** Implémentation de la page de paramètres Authenticators dans client-v2 et livraison de primitives client-v2 réutilisables (tableau, saisie de variable, formulaire). ([#9457](https://github.com/nocobase/nocobase/pull/9457)) par @Molunerfinn

- **[IA : Base de connaissances]** Alerte en cas de nom de table en double lors de l'enregistrement dans la base vectorielle par @cgyrock

- **[Auth : SAML 2.0]** Ajout des entrées client-v2 pour les plugins d'authentification CAS et SAML afin qu'ils fonctionnent avec la page de connexion v2 et les paramètres Authenticators. par @Molunerfinn

- **[Workflow : Approbation]** Amélioration des approbations associées avec des cartes chronologiques par @zhangzhonghe

### 🐛 Corrections de bugs

- **[non défini]** Alignement des chemins de configuration nginx ([#9528](https://github.com/nocobase/nocobase/pull/9528)) par @chenos

- **[cli-v1]** Correction du démarrage en développement de create-nocobase-app en réutilisant les shells d'application packagés tout en permettant le développement local de plugins. ([#9471](https://github.com/nocobase/nocobase/pull/9471)) par @Molunerfinn

- **[client]**
  - Correction du problème où les formulaires de filtre ne peuvent pas utiliser les variables du formulaire courant ([#9474](https://github.com/nocobase/nocobase/pull/9474)) par @zhangzhonghe

  - Correction du problème où un badge de menu affiche encore un point lorsque sa valeur est 0 ([#9491](https://github.com/nocobase/nocobase/pull/9491)) par @zhangzhonghe

- **[client-v2]**
  - Le composant Tableau partagé v2 affiche désormais le sélecteur de taille de page par défaut, comme en v1. ([#9512](https://github.com/nocobase/nocobase/pull/9512)) par @Molunerfinn

  - Correction du chargement de la route v2 du plugin Kanban qui échouait car les dépendances dnd-kit n'étaient pas fournies par le client. ([#9516](https://github.com/nocobase/nocobase/pull/9516)) par @jiannx

- **[Calendrier]**
  - Correction du style du curseur pour les éléments d'événement dans la superposition more-events du calendrier ([#9519](https://github.com/nocobase/nocobase/pull/9519)) par @jiannx

  - Correction du problème où les éléments supplémentaires du calendrier ne peuvent pas être entièrement affichés ([#9492](https://github.com/nocobase/nocobase/pull/9492)) par @zhangzhonghe

- **[Paramètres de licence]** Résolution des dépendances groupées liées symboliquement ([#9518](https://github.com/nocobase/nocobase/pull/9518)) par @chenos

- **[Employés IA]**
  - Correction du problème où les permissions du rôle opérateur ne s'appliquent pas dans les nœuds d'employés IA ([#9513](https://github.com/nocobase/nocobase/pull/9513)) par @cgyrock

  - Correction des erreurs de lecture des fichiers OSS des employés IA ([#9493](https://github.com/nocobase/nocobase/pull/9493)) par @cgyrock

- **[Authentification]** Empêcher le plantage du serveur lorsqu'un jeton d'authentification WebSocket fait référence à un authentificateur dont le plugin de type d'authentification est déchargé ou manquant. ([#9514](https://github.com/nocobase/nocobase/pull/9514)) par @Molunerfinn

- **[Documentation API]** Correction de la documentation API des collections afin que les paramètres de requête n'interfèrent plus entre eux ([#9442](https://github.com/nocobase/nocobase/pull/9442)) par @jiannx

- **[Source de données : Principale]** Correction du problème où les options de champ sont écrites dans le schéma après la synchronisation des champs ([#9505](https://github.com/nocobase/nocobase/pull/9505)) par @2013xile

- **[Auth : SAML 2.0]** Correction de l'intercepteur de redirection automatique SAML qui faisait scintiller le shell de l'application et ouvrait des panneaux en double à chaque navigation. par @Molunerfinn
