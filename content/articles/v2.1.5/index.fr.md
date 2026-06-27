---
title: "NocoBase v2.1.5 : Ajout de la prise en charge de l'envoi de pièces jointes dans les nœuds de messagerie du workflow"
description: "Notes de version de v2.1.5"
---

### 🎉 Nouvelles fonctionnalités

- **[Workflow : Nœud de messagerie]** Ajout de la prise en charge de l'envoi de pièces jointes dans les nœuds de messagerie des workflows. ([#9724](https://github.com/nocobase/nocobase/pull/9724)) par @mytharcher

### 🚀 Améliorations

- **[client-v2]** Les portées de données des colonnes de champs de relation dans les sous-tableaux de formulaires prennent désormais en charge les variables de l'élément courant. ([#9444](https://github.com/nocobase/nocobase/pull/9444)) par @gchust
- **[undefined]** Unification du nom de la documentation chinoise du plugin de contrôle de version en « 版本控制 ». ([#9776](https://github.com/nocobase/nocobase/pull/9776)) par @cgyrock
- **[Gestionnaire de fichiers]** Ajout de la prise en charge du texte sélectionnable dans les aperçus PDF du gestionnaire de fichiers pour les PDF contenant du texte intégré. ([#9781](https://github.com/nocobase/nocobase/pull/9781)) par @mytharcher
- **[Action : Modification en masse]** Optimisation de la méthode de chargement des plugins d'action v2 et maintien de l'ordre stable des boutons d'action migrés. ([#9778](https://github.com/nocobase/nocobase/pull/9778)) par @katherinehhh
- **[Contrôle de version]** Modification du nom d'affichage chinois du plugin de contrôle de version en « 版本控制 ». par @cgyrock

### 🐛 Corrections de bugs

- **[cli-v1]** Correction d'une erreur lors de l'exécution de `yarn dev` après la mise à niveau de projets créés avec create-nocobase-app de la version 2.0 à 2.1. ([#9775](https://github.com/nocobase/nocobase/pull/9775)) par @Molunerfinn
- **[client-v2]** Correction du problème où la progression de la migration n'affichait pas la vue de progression dédiée. ([#9761](https://github.com/nocobase/nocobase/pull/9761)) par @2013xile
- **[moteur de flux]** Correction des problèmes de saisie IME en vietnamien et en chinois dans les champs de texte monoligne et multiligne v2. ([#9764](https://github.com/nocobase/nocobase/pull/9764)) par @katherinehhh
- **[serveur]** Correction de la gestion non sécurisée des noms de plugins dans `pm:enable` pour prévenir les risques d'inclusion de fichiers locaux lors de la résolution des plugins. ([#9701](https://github.com/nocobase/nocobase/pull/9701)) par @mytharcher
- **[Gestionnaire de fichiers]** Correction des échecs d'aperçu PDF causés par un chargement anormal du module de travail pdf.js. ([#9779](https://github.com/nocobase/nocobase/pull/9779)) par @mytharcher
- **[Bloc : Kanban]** Correction du problème où l'ouverture des blocs Calendrier, Gantt et Kanban en dehors du mode édition persistait de manière inattendue les actions de fenêtre contextuelle masquées et envoyait des requêtes de suppression à plusieurs reprises. ([#9772](https://github.com/nocobase/nocobase/pull/9772)) par @jiannx
- **[Action : Exportation d'enregistrements Pro]** Amélioration des paramètres du mode de traitement et des invites explicatives pour l'import/export Pro v2. par @katherinehhh
- **[Gestionnaire de migration]** Correction des échecs possibles lors de l'importation de fichiers de données de migration volumineux. par @2013xile
- **[Impression de modèle]** Rejet des types de fichiers de modèle non pris en charge avant le démarrage de l'impression du modèle. par @2013xile
