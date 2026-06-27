---
title: "NocoBase v2.1.0-alpha.25 : Prise en charge de la suppression des approbations en brouillon"
description: "Notes de version de v2.1.0-alpha.25"
---

### 🎉 Nouvelles fonctionnalités

- **[Workflow : Approbation]** Prise en charge de la suppression des approbations en brouillon par @mytharcher

### 🚀 Améliorations

- **[non défini]** Mise à jour de la documentation IA pour exiger NocoBase >= 2.1.0-beta.20 et recommandation de la dernière version bêta. ([#9252](https://github.com/nocobase/nocobase/pull/9252)) par @Molunerfinn

- **[Employés IA]** Mise à jour de la configuration des tâches raccourcies des employés IA pour utiliser le même composant de paramètres de compétences que la configuration du nœud d'employé IA dans le workflow ([#9246](https://github.com/nocobase/nocobase/pull/9246)) par @cgyrock

### 🐛 Corrections de bugs

- **[client]**
  - Correction d'un problème où les valeurs par défaut ne s'appliquaient pas lors de la ré-ajout d'un enregistrement après sa suppression d'un sous-tableau. ([#9192](https://github.com/nocobase/nocobase/pull/9192)) par @gchust

  - Filtrage des blocs optionnels non essentiels dans la boîte de sélection contextuelle des champs liés ([#9224](https://github.com/nocobase/nocobase/pull/9224)) par @jiannx

- **[Action : Importer des enregistrements]** Correction du problème où l'importation d'un fichier xlsx échouait et générait une erreur "aucun en-tête correspondant" ([#9253](https://github.com/nocobase/nocobase/pull/9253)) par @mytharcher

- **[Paramètres de licence]** Mise à jour du message de succès de sauvegarde de la licence ([#9251](https://github.com/nocobase/nocobase/pull/9251)) par @jiannx

- **[Employés IA]** Correction du problème où les variables dans l'invite système des employés IA ne prenaient pas effet ([#9256](https://github.com/nocobase/nocobase/pull/9256)) par @cgyrock

- **[IdP : OAuth]** Correction des échecs de connexion OAuth en ligne de commande et restriction de l'enregistrement dynamique aux URL de rappel locales ([#9248](https://github.com/nocobase/nocobase/pull/9248)) par @2013xile

- **[IA : Base de connaissances]** Correction du problème où la suppression de documents de la base de connaissances ne supprimait pas les données vectorielles associées par @cgyrock

- **[Action : Importer des enregistrements Pro]** Correction du problème où l'importation d'un fichier xlsx échouait et générait une erreur "aucun en-tête correspondant" par @mytharcher
