---
title: "NocoBase v2.0.0-alpha.53 : prise en charge du formatage des nombres pour les champs de pourcentage"
description: "Notes de version de v2.0.0-alpha.53"
---

### 🚀 Améliorations

- **[acl]** Prise en charge de l'API `acl.registerSnippet` pour fusionner la configuration des snippets ([#8155](https://github.com/nocobase/nocobase/pull/8155)) par @mytharcher

- **[client]** Prise en charge du formatage des nombres pour les champs de pourcentage ([#8123](https://github.com/nocobase/nocobase/pull/8123)) par @katherinehhh

- **[moteur de workflow]** Prise en charge du masquage dynamique du menu de configuration des étapes ([#7924](https://github.com/nocobase/nocobase/pull/7924)) par @gchust

- **[Bloc : Grille de cartes]** Optimisation des styles du bloc Grille de cartes pour une disposition plus compacte ([#8152](https://github.com/nocobase/nocobase/pull/8152)) par @katherinehhh

- **[Employés IA]** Activation de la fonctionnalité d'édition pour les invites système de l'assistant IA intégré.<br/>Optimisation de l'invite système pour l'assistant IA Nathan.<br/>Correction d'un problème où le serveur ne parvenait pas à lire les fichiers statiques. ([#8097](https://github.com/nocobase/nocobase/pull/8097)) par @heziqiang

- **[Workflow]**
  - Ajout d'une logique de tolérance aux pannes pour les données manquantes lors de la préparation du processeur, afin d'éviter un blocage de l'exécution ([#8156](https://github.com/nocobase/nocobase/pull/8156)) par @mytharcher

  - Utilisation du chargement différé pour les données d'association sur le canevas du workflow afin d'améliorer les performances ([#8142](https://github.com/nocobase/nocobase/pull/8142)) par @mytharcher

- **[Champ de collection : Markdown(Vditor)]** Désactivation de l'analyse des variables dans le champ Markdown par défaut en mode readPretty ([#8145](https://github.com/nocobase/nocobase/pull/8145)) par @katherinehhh

### 🐛 Corrections de bugs

- **[moteur de workflow]** Correction d'un téléchargement incorrect de fichier pour les pièces jointes ([#8154](https://github.com/nocobase/nocobase/pull/8154)) par @katherinehhh

- **[client]**
  - Correction du problème où la liste déroulante du champ d'association était désactivée lorsqu'un champ d'options existait ([#8153](https://github.com/nocobase/nocobase/pull/8153)) par @katherinehhh

  - Correction d'un problème où la saisie de texte en chinois effaçait les options existantes lors de l'utilisation d'opérateurs multi-sélection sur un champ de sélection unique dans un bloc de formulaire de filtre. ([#8140](https://github.com/nocobase/nocobase/pull/8140)) par @gchust

  - Correction d'un problème où le changement de champs d'étiquette entraînait la perte des configurations de fenêtre contextuelle. ([#8136](https://github.com/nocobase/nocobase/pull/8136)) par @gchust

- **[acl]** Correction du problème où l'API `acl.can` retournait `null` lorsque le rôle était `root` ([#8150](https://github.com/nocobase/nocobase/pull/8150)) par @mytharcher

- **[base de données]** `filterByTk` prend désormais en charge les tableaux lors de l'interrogation de collections avec plusieurs clés cibles de filtre ([#7986](https://github.com/nocobase/nocobase/pull/7986)) par @chenos

- **[Action : Importer des enregistrements]** Attente synchrone de la fin des événements `afterCreate` déclenchés par l'importation. ([#8158](https://github.com/nocobase/nocobase/pull/8158)) par @2013xile

- **[Champ de collection : Séquence]** Amélioration de la robustesse du plugin-field-sequence lors du traitement de la commande de réparation ([#8139](https://github.com/nocobase/nocobase/pull/8139)) par @cgyrock

- **[Workflow : Nœud manuel]** Correction du problème où la liste de tâches manuelles utilisait une API incorrecte ([#8144](https://github.com/nocobase/nocobase/pull/8144)) par @mytharcher

- **[Chiffrement des requêtes HTTP]** Utilisation de crochets pour le format de tableau dans l'analyse qs par @chenos

- **[Workflow : Approbation]** Correction du problème où une erreur était levée lors de l'annulation d'une exécution lorsque son workflow était supprimé par @mytharcher

- **[Gestionnaire de migration]** Correction d'un problème où les sauts de ligne dans les données étaient perdus lors de la migration. par @cgyrock
