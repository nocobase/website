---
title: "NocoBase v2.0.0-alpha.33 : Ajout de la prise en charge de la pagination dans les sous-tableaux"
description: "Notes de version de v2.0.0-alpha.33"
---

### 🎉 Nouvelles fonctionnalités

- **[client]** ajout de la prise en charge de la pagination dans les sous-tableaux ([#7754](https://github.com/nocobase/nocobase/pull/7754)) par @katherinehhh

### 🚀 Améliorations

- **[undefined]** mise à jour de la documentation anglaise du plugin de graphiques ([#7748](https://github.com/nocobase/nocobase/pull/7748)) par @heziqiang

- **[télémétrie]** Ajout de métriques de télémétrie pour le nombre de sous-applications en ligne, etc. ([#7743](https://github.com/nocobase/nocobase/pull/7743)) par @2013xile

- **[Workflow]** Prise en charge des blocs de données dans le workflow pour utiliser le menu de paramètres de détail consolidé ([#7771](https://github.com/nocobase/nocobase/pull/7771)) par @mytharcher

- **[Gestionnaire multi-applications (obsolète)]** Activation du démarrage asynchrone des sous-applications à l'aide d'une file d'attente ([#7749](https://github.com/nocobase/nocobase/pull/7749)) par @2013xile

- **[Visualisation des données]** ajout d'options de format d'heure pour les données de graphique ([#7763](https://github.com/nocobase/nocobase/pull/7763)) par @heziqiang

- **[Workflow : Approbation]** Ajout d'une notification pour les personnes déléguées et les personnes assignées ajoutées par @mytharcher

### 🐛 Corrections de bugs

- **[client]**
  - Correction d'un problème où les libellés des types énumérés dans les composants liés aux variables ne s'affichaient pas dans la bonne langue. ([#7765](https://github.com/nocobase/nocobase/pull/7765)) par @gchust

  - Correction de l'indicateur de champ obligatoire manquant après la définition de la validation côté client ([#7760](https://github.com/nocobase/nocobase/pull/7760)) par @katherinehhh

  - Correction du problème d'effacement de la date sans fuseau horaire dans le formulaire d'édition ([#7759](https://github.com/nocobase/nocobase/pull/7759)) par @katherinehhh

  - Correction de la validation des champs obligatoires pour les règles de liaison ([#7756](https://github.com/nocobase/nocobase/pull/7756)) par @zhangzhonghe

  - Résolution du problème de date invalide lors de la suppression d'une date spécifiée dans le filtre… ([#7746](https://github.com/nocobase/nocobase/pull/7746)) par @katherinehhh

  - Correction de l'échec de validation obligatoire pour le champ Markdown Vditor ([#7764](https://github.com/nocobase/nocobase/pull/7764)) par @katherinehhh

  - Ajout de la configuration de la portée des données pour les champs de relation dans les formulaires de filtre ([#7761](https://github.com/nocobase/nocobase/pull/7761)) par @zhangzhonghe

  - Correction du problème de format de l'heure dans les champs de sous-tableau ([#7750](https://github.com/nocobase/nocobase/pull/7750)) par @katherinehhh

- **[moteur de flux]**
  - lorsque la valeur du filtre de champ est définie sur false, la requête avec la portée des données est incorrecte ([#7766](https://github.com/nocobase/nocobase/pull/7766)) par @gchust

  - impossible de résoudre la valeur du champ d'association de la variable d'objet actuel du sous-formulaire ([#7751](https://github.com/nocobase/nocobase/pull/7751)) par @gchust

  - correction : résolution du problème de paramètre de requête de page après la suppression des données sur la dernière page ([#7755](https://github.com/nocobase/nocobase/pull/7755)) par @katherinehhh

- **[serveur]** Isolation du canal Pub-Sub par nom d'application ([#7762](https://github.com/nocobase/nocobase/pull/7762)) par @mytharcher

- **[Bloc : GridCard]** correction du problème de duplication de données entre le bloc liste et le bloc carte en grille ([#7773](https://github.com/nocobase/nocobase/pull/7773)) par @katherinehhh

- **[Gestionnaire multi-applications (obsolète)]** Collection incorrecte pour la métrique de statut de la sous-application ([#7772](https://github.com/nocobase/nocobase/pull/7772)) par @2013xile

- **[Workflow]**
  - Résolution d'un problème où le répartiteur de workflow en mode cluster ne parvenait pas à identifier correctement les états inactifs, ce qui pouvait entraîner une consommation inutile d'événements de file d'attente avant que le plugin ne soit prêt ([#7768](https://github.com/nocobase/nocobase/pull/7768)) par @mytharcher

  - Correction d'un problème où, en mode de séparation des services, l'exécution manuelle d'un workflow contenant un nœud d'interruption restait bloquée dans un état en attente ([#7767](https://github.com/nocobase/nocobase/pull/7767)) par @mytharcher

- **[Workflow : Approbation]**
  - Correction d'une erreur levée lors de la duplication d'un workflow d'approbation par @mytharcher

  - La création de nœuds d'approbation dans des branches parallèles n'est plus prise en charge pour éviter les problèmes causés par l'état du processus par @mytharcher

- **[Gestionnaire d'emails]**
  - ajout des journaux de synchronisation par @jiannx

  - ajout d'une migration pour les index par @jiannx
