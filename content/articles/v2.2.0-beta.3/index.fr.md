---
title: "NocoBase v2.2.0-beta.3 : Ajout de la prise en charge des pièces jointes au nœud de messagerie du workflow."
description: "Notes de version de v2.2.0-beta.3"
---

### 🎉 Nouvelles fonctionnalités

* **[Workflow : Nœud de messagerie]** Ajout de la prise en charge de l'envoi de pièces jointes dans les nœuds de messagerie des workflows. ([#9724](https://github.com/nocobase/nocobase/pull/9724)) par @mytharcher
* **[Workflow]** Ajout de la prise en charge des périmètres de transactions de base de données dans les workflows. ([#9742](https://github.com/nocobase/nocobase/pull/9742)) par @mytharcher
  Référence : [Transactions de base de données](docs/docs/fr/workflow/nodes/transaction.md)
* **[Workflow : Nœud de transaction de base de données]** Ajout d'un plugin de nœud de workflow pour les transactions de base de données. par @mytharcher

### 🚀 Améliorations

* **[client-v2]** Les colonnes de champs de relation dans les sous-tableaux de formulaires prennent désormais en charge les variables de l'élément courant dans les périmètres de données. ([#9444](https://github.com/nocobase/nocobase/pull/9444)) par @gchust
* **[undefined]** Uniformisation du nom de la documentation chinoise du plugin de contrôle de version en « 版本控制 ». ([#9776](https://github.com/nocobase/nocobase/pull/9776)) par @cgyrock
* **[Gestionnaire de fichiers]** Ajout de la prise en charge du texte sélectionnable dans les aperçus PDF du gestionnaire de fichiers pour les PDF avec texte intégré. ([#9781](https://github.com/nocobase/nocobase/pull/9781)) par @mytharcher
* **[Utilisateurs]** Amélioration de la mise en page des pages Utilisateurs et Permissions v2 et optimisation du comportement de l'arborescence des départements. ([#9780](https://github.com/nocobase/nocobase/pull/9780)) par @jiannx
* **[Action : Modification en masse]** Optimisation du chargement des plugins d'action v2 et maintien de l'ordre stable des boutons d'action migrés. ([#9778](https://github.com/nocobase/nocobase/pull/9778)) par @katherinehhh
* **[Contrôle de version]** Renommage du nom d'affichage chinois du plugin de contrôle de version en « 版本控制 ». par @cgyrock

### 🐛 Corrections de bugs

* **[cli-v1]** Correction d'une erreur lors de l'exécution de `<span>yarn dev</span>` après la mise à niveau de projets créés avec create-nocobase-app de la version 2.0 à 2.1. ([#9775](https://github.com/nocobase/nocobase/pull/9775)) par @Molunerfinn
* **[moteur-de-workflow]** Correction des problèmes de saisie IME en vietnamien et en chinois dans les champs de texte sur une seule ligne et de texte multiligne v2. ([#9764](https://github.com/nocobase/nocobase/pull/9764)) par @katherinehhh
* **[client-v2]** Correction du problème où la progression de la migration n'affichait pas la vue de progression dédiée. ([#9761](https://github.com/nocobase/nocobase/pull/9761)) par @2013xile
* **[serveur]** Correction de la gestion non sécurisée des noms de plugins dans `<span>pm:enable</span>` pour éviter les risques d'inclusion de fichiers locaux lors de la résolution des plugins. ([#9701](https://github.com/nocobase/nocobase/pull/9701)) par @mytharcher
* **[Gestionnaire de tâches asynchrones]** Correction des erreurs de requête de base de données causées par l'absence de `<span>filterByTk</span>` lors du téléchargement de fichiers de tâches asynchrones. ([#9705](https://github.com/nocobase/nocobase/pull/9705)) par @mytharcher
* **[Gestionnaire de fichiers]** Correction des échecs d'aperçu PDF causés par un chargement anormal du module de travailleur pdf.js. ([#9779](https://github.com/nocobase/nocobase/pull/9779)) par @mytharcher
* **[Bloc : Kanban]** Correction du problème où l'ouverture des blocs Calendrier, Gantt et Kanban en mode non-édition persistait de manière inattendue les actions de popup cachées et envoyait des requêtes de suppression à plusieurs reprises. ([#9772](https://github.com/nocobase/nocobase/pull/9772)) par @jiannx
* **[Action : Exporter les enregistrements Pro]** Amélioration des paramètres du mode de traitement et du texte d'aide pour l'import/export Pro v2. par @katherinehhh
* **[Multi-espace]** Correction du problème où les administrateurs d'espace ne pouvaient pas ajouter d'utilisateurs d'espace lorsqu'ils n'avaient pas la permission sur le champ d'email de l'utilisateur. par @jiannx
* **[Gestionnaire de migration]** Correction des échecs possibles lors de l'importation de fichiers de données de migration volumineux. par @2013xile
* **[Impression de modèle]** Rejet des types de fichiers de modèle non pris en charge avant le début de l'impression du modèle. par @2013xile
