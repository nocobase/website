---
title: "NocoBase v2.1.0-alpha.13 : ajout de variables JS au flux d'événements"
description: "Notes de version de v2.1.0-alpha.13"
---

### 🎉 Nouvelles fonctionnalités

- **[client]** ajout de variables JavaScript au flux d'événements ([#8938](https://github.com/nocobase/nocobase/pull/8938)) par @jiannx

### 🚀 Améliorations

- **[client]** prise en charge du style des champs via runjs ([#8933](https://github.com/nocobase/nocobase/pull/8933)) par @jiannx

- **[moteur de flux]** Amélioration de la validation du schéma pour l'API de construction d'interface utilisateur. ([#8881](https://github.com/nocobase/nocobase/pull/8881)) par @gchust

- **[Workflow : Événement pré-action]** Ajout de règles de validation pour les déclencheurs et les nœuds ([#8971](https://github.com/nocobase/nocobase/pull/8971)) par @mytharcher

- **[Workflow]** Ajout d'une variable pour le paramètre de taille de page ([#8951](https://github.com/nocobase/nocobase/pull/8951)) par @mytharcher

- **[Workflow : Webhook]** Ajout de la validation pour la création d'API de déclencheur / nœud par @mytharcher

- **[Workflow : Sous-flux]**
  - Ajout de la validation pour la création d'API de nœud par @mytharcher

  - Ajout d'une logique défensive pour éviter les blocages de workflow en cas d'exception par @mytharcher

- **[Workflow : Approbation]** Ajout de la validation pour l'API de déclencheur / nœud par @mytharcher

### 🐛 Corrections de bugs

- **[client]** Correction de l'exception lors de l'ajout de nœuds enfants au tableau arborescent dans la fenêtre contextuelle ([#8872](https://github.com/nocobase/nocobase/pull/8872)) par @jiannx

- **[serveur]** Éviter de traiter les messages de synchronisation après l'arrêt de l'application ([#8940](https://github.com/nocobase/nocobase/pull/8940)) par @mytharcher

- **[Action : Exporter les enregistrements]** Limitation de la configuration d'importation et d'exportation des champs liés à plusieurs niveaux ([#8893](https://github.com/nocobase/nocobase/pull/8893)) par @jiannx

- **[Visualisation des données]** Correction des statistiques de données anormales du graphique du rôle racine après l'activation du plugin d'espace ([#8969](https://github.com/nocobase/nocobase/pull/8969)) par @jiannx

- **[Action : Importer les enregistrements]** Correction du problème d'échec d'importation après l'ouverture du plugin d'espace ([#8968](https://github.com/nocobase/nocobase/pull/8968)) par @jiannx

- **[Workflow : JavaScript]** Correction de problèmes de sécurité ([#8967](https://github.com/nocobase/nocobase/pull/8967)) par @mytharcher

- **[Employés IA]** Ajustement de l'espace entre les composants de carte d'outils dans la conversation IA ([#8965](https://github.com/nocobase/nocobase/pull/8965)) par @cgyrock

- **[Moteur de flux]** Suppression des événements hérités copiés du dépôt uiSchema pour éviter les erreurs lors du déclenchement ([#8957](https://github.com/nocobase/nocobase/pull/8957)) par @mytharcher

- **[Authentification]** Correction de l'ACL pour prendre en charge les paramètres de filtrage d'état personnalisés ([#8918](https://github.com/nocobase/nocobase/pull/8918)) par @jiannx

- **[Action : Importer les enregistrements Pro]** Limitation de la configuration d'importation et d'exportation des champs liés à plusieurs niveaux par @jiannx

- **[Gestionnaire d'e-mails]** Correction de la signature écrasée lors de l'utilisation de modèles par @jiannx
