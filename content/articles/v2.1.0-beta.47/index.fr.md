---
title: "NocoBase v2.1.0-beta.47 : Adaptation au nouveau plugin de contrôle de version"
description: "Notes de version de v2.1.0-beta.47"
---

### 🎉 Nouvelles fonctionnalités

- **[undefined]** Ajout de commandes proxy de premier niveau pour nginx et caddy. ([#9721](https://github.com/nocobase/nocobase/pull/9721)) par @chenos
- **[Gestionnaire de sauvegarde]** Adaptation au nouveau plugin de contrôle de version. ([#9563](https://github.com/nocobase/nocobase/pull/9563)) par @cgyrock
- **[Contrôle de version]** Ajout du plugin de contrôle de version. par @cgyrock

### 🚀 Améliorations

- **[Gestionnaire de sources de données]** Ajout de la gestion des permissions pour les sources de données client-v2 et alignement des tiroirs de sélection de permissions associés. ([#9706](https://github.com/nocobase/nocobase/pull/9706)) par @jiannx
- **[Collection : Connexion à des données externes (FDW)]** Amélioration de la parité des modèles de collection V2 pour les collections SQL et les collections de données externes, incluant la confirmation SQL, la gestion des serveurs de bases de données externes et l'ordonnancement des modèles. ([#9711](https://github.com/nocobase/nocobase/pull/9711)) par @katherinehhh
- **[Modèle d'impression]** Mise à jour des métadonnées de collection des modèles d'impression pour la classification de sauvegarde du contrôle de version. par @cgyrock
- **[Historique des enregistrements]** Mise à jour des métadonnées de collection de l'historique des enregistrements pour la classification de sauvegarde du contrôle de version. par @cgyrock
- **[Workflow : Approbation]** Mise à jour des métadonnées de collection du workflow d'approbation pour la classification de sauvegarde du contrôle de version. par @cgyrock
- **[Journaux d'audit]** Mise à jour des métadonnées de collection du journal d'audit pour la classification de sauvegarde du contrôle de version. par @cgyrock
- **[Gestionnaire d'e-mails]** Mise à jour des métadonnées de collection du gestionnaire d'e-mails pour la classification de sauvegarde du contrôle de version. par @cgyrock
- **[Superviseur d'application]** Mise à jour des métadonnées de collection du superviseur d'application pour la classification de sauvegarde du contrôle de version. par @cgyrock

### 🐛 Corrections de bugs

- **[client-v2]**

  - Correction de l'affichage de cellules vides pour les valeurs d'objet dans les champs JSON des vues détaillées client-v2. ([#9714](https://github.com/nocobase/nocobase/pull/9714)) par @katherinehhh
  - Correction de la traduction incorrecte des libellés d'options simples dans les environnements localisés pour les champs d'options. ([#9708](https://github.com/nocobase/nocobase/pull/9708)) par @katherinehhh
- **[Gestionnaire d'erreurs]** Réduction des journaux d'erreurs superflus pour les requêtes non authentifiées sans jeton. ([#9718](https://github.com/nocobase/nocobase/pull/9718)) par @2013xile
- **[Bloc : Liste]** Correction de l'état de liaison des actions de ligne obsolète dans les blocs de liste lorsque les actions dépendent de l'enregistrement courant. ([#9716](https://github.com/nocobase/nocobase/pull/9716)) par @katherinehhh
- **[Gestionnaire de sources de données]** Amélioration des messages d'erreur dans le gestionnaire de sources de données V2 en cas d'échec des opérations de collection, champ, synchronisation et chargement de table. ([#9710](https://github.com/nocobase/nocobase/pull/9710)) par @katherinehhh
- **[Employés IA]** Correction d'un bouton manquant de l'assistant Dara dans les paramètres de graphique client-v2. ([#9696](https://github.com/nocobase/nocobase/pull/9696)) par @cgyrock
- **[IA : Base de connaissances]** Correction des chemins manquants dans les URL des fichiers de la base de connaissances S3. par @cgyrock
- **[Action : Importer des enregistrements Pro]** Correction du texte tronqué lors de l'importation de fichiers XLSX avec des chaînes partagées UTF-8 réparties sur plusieurs fragments de flux. par @mytharcher
- **[Historique des enregistrements]** Correction de l'absence d'historique pour les modifications de sources de données externes. par @2013xile
