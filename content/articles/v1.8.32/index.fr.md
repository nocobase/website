---
title: "NocoBase v1.8.32 : Méthodes pour optimiser le chargement des ressources localisées"
description: "Notes de version de la v1.8.32"
---

### 🚀 Améliorations

- **[serveur]** Optimisation de la méthode de chargement des ressources l10n pour éviter de bloquer la boucle d'événements ([#7653](https://github.com/nocobase/nocobase/pull/7653)) par @2013xile

- **[cache]** Éviter la surcharge de performance causée par le clonage des filtres Bloom ([#7652](https://github.com/nocobase/nocobase/pull/7652)) par @2013xile

- **[Action : Importer des enregistrements]** Amélioration des messages d'erreur lorsque les en-têtes de tableau sont manquants ([#7656](https://github.com/nocobase/nocobase/pull/7656)) par @mytharcher

### 🐛 Corrections de bugs

- **[client]**
  - Correction d'une erreur lors de l'effacement d'un champ de date dans un bloc de filtre ([#7632](https://github.com/nocobase/nocobase/pull/7632)) par @katherinehhh

  - Empêcher la coupure des mots dans l'étiquette du champ de formulaire ([#7647](https://github.com/nocobase/nocobase/pull/7647)) par @katherinehhh

  - Correction de la valeur par défaut de la sous-table qui ne fonctionnait pas dans le tiroir d'édition de formulaire ([#7631](https://github.com/nocobase/nocobase/pull/7631)) par @katherinehhh

- **[Champ de collection : divisions administratives de la Chine]** L'importation de données échoue lorsque la ville et la zone portent le même nom ([#7673](https://github.com/nocobase/nocobase/pull/7673)) par @2013xile

- **[Workflow]**
  - Correction du problème où, après la suppression d'un nœud qui démarre une branche, la clé du premier nœud conservé dans la branche était incorrectement modifiée en une nouvelle valeur ([#7665](https://github.com/nocobase/nocobase/pull/7665)) par @mytharcher

  - Correction de l'erreur du journal déclenchée lors de l'arrêt de l'application ([#7639](https://github.com/nocobase/nocobase/pull/7639)) par @mytharcher

- **[Gestionnaire de fichiers]** Correction du problème d'upload du fichier `.msg` ([#7662](https://github.com/nocobase/nocobase/pull/7662)) par @mytharcher

- **[Source de données : Principale]** Correction du problème où les métadonnées n'étaient pas synchronisées entre plusieurs nœuds après la création d'un champ d'association inverse ([#7628](https://github.com/nocobase/nocobase/pull/7628)) par @mytharcher

- **[Workflow : Approbation]**
  - Correction du problème de traduction du texte de statut dans les notifications d'achèvement d'approbation, en utilisant la langue par défaut du système pour la traduction lorsque l'utilisateur n'a pas défini de préférence linguistique par @mytharcher

  - Correction du problème où le nombre de tâches n'était pas mis à jour après l'ajout d'un assigné par @mytharcher
