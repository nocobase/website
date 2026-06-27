---
title: "NocoBase v2.2.0-alpha.1 : Prise en charge de la saisie par scan pour les champs de texte"
description: "Notes de version de v2.2.0-alpha.1"
---

### 🎉 Nouvelles fonctionnalités

- **[client-v2]** Prise en charge de la saisie par scan pour les champs de texte ([#9599](https://github.com/nocobase/nocobase/pull/9599)) par @katherinehhh
- **[undefined]** Ajout de commandes proxy de premier niveau pour nginx et caddy ([#9721](https://github.com/nocobase/nocobase/pull/9721)) par @chenos
- **[Gestionnaire de tâches asynchrones]** Ajout de la prise en charge du client v2 pour l'action de la barre supérieure du gestionnaire de tâches asynchrones. ([#9707](https://github.com/nocobase/nocobase/pull/9707)) par @jiannx
- **[Gestionnaire de sauvegarde]**

  - Ajout de la prise en charge de l'exécution du client v2 pour le plugin de gestionnaire de sauvegarde. ([#9712](https://github.com/nocobase/nocobase/pull/9712)) par @katherinehhh
  - Adaptation au nouveau plugin de contrôle de version ([#9563](https://github.com/nocobase/nocobase/pull/9563)) par @cgyrock
- **[Source de données : NocoBase externe]** Ajout d'un plugin de source de données : NocoBase externe par @2013xile
- **[Contrôle de version]** Ajout d'un plugin de contrôle de version par @cgyrock

### 🚀 Améliorations

- **[client-v2]**

  - Ajout de la prise en charge de la désactivation de la sélection multiple dans les champs de sélection contextuels de la v2. ([#9730](https://github.com/nocobase/nocobase/pull/9730)) par @katherinehhh
  - Amélioration du rendu des blocs v2 lorsqu'une source de données externe configurée est désactivée, empêchant les erreurs de rendu et affichant un espace réservé plus clair dans l'éditeur d'interface. ([#9699](https://github.com/nocobase/nocobase/pull/9699)) par @katherinehhh
- **[Variables et secrets]** Les variables d'environnement (`$env`) peuvent désormais être sélectionnées par les sélecteurs de variables basés sur le moteur de flux dans l'exécution v1. ([#9728](https://github.com/nocobase/nocobase/pull/9728)) par @Molunerfinn
- **[Gestionnaire de fichiers]** Ajout de la prise en charge du `subPath` de téléchargement interne pour le gestionnaire de fichiers. ([#9731](https://github.com/nocobase/nocobase/pull/9731)) par @mytharcher
- **[Gestionnaire de sources de données]** Ajout de la gestion des permissions des sources de données client-v2 et alignement des tiroirs de sélection de permissions associés. ([#9706](https://github.com/nocobase/nocobase/pull/9706)) par @jiannx
- **[Collection : Connexion à des données étrangères (FDW)]** Amélioration de la parité des modèles de collection V2 pour les collections SQL et les collections de données étrangères, y compris la confirmation SQL, la gestion des serveurs de bases de données étrangères et l'ordonnancement des modèles. ([#9711](https://github.com/nocobase/nocobase/pull/9711)) par @katherinehhh
- **[Impression de modèles]** Mise à jour des métadonnées de collection des modèles d'impression pour la classification des sauvegardes de contrôle de version. par @cgyrock
- **[Historique des enregistrements]** Mise à jour des métadonnées de collection de l'historique des enregistrements pour la classification des sauvegardes de contrôle de version. par @cgyrock
- **[Workflow : Approbation]** Mise à jour des métadonnées de collection d'approbation de workflow pour la classification des sauvegardes de contrôle de version. par @cgyrock
- **[Journaux d'audit]** Mise à jour des métadonnées de collection des journaux d'audit pour la classification des sauvegardes de contrôle de version. par @cgyrock
- **[Gestionnaire d'e-mails]** Mise à jour des métadonnées de collection du gestionnaire d'e-mails pour la classification des sauvegardes de contrôle de version. par @cgyrock
- **[Superviseur d'application]** Mise à jour des métadonnées de collection du superviseur d'application pour la classification des sauvegardes de contrôle de version. par @cgyrock

### 🐛 Corrections de bogues

- **[base de données]** Correction des champs de mot de passe qui n'étaient pas hachés lors des mises à jour en masse. ([#9736](https://github.com/nocobase/nocobase/pull/9736)) par @mytharcher
- **[client]** Correction du masquage de l'ensemble du champ de sous-tableau contextuel par les actions de ligne du sous-tableau contextuel lorsque l'action est masquée par des règles de liaison ([#9717](https://github.com/nocobase/nocobase/pull/9717)) par @katherinehhh
- **[client-v2]**

  - Correction des champs JSON dans les vues d'affichage du client v2 qui rendaient des cellules vides pour les valeurs d'objet. ([#9714](https://github.com/nocobase/nocobase/pull/9714)) par @katherinehhh
  - Correction de la traduction incorrecte des libellés d'options simples par les champs d'options V2 dans les environnements localisés. ([#9708](https://github.com/nocobase/nocobase/pull/9708)) par @katherinehhh
- **[Bloc : Carte]**

  - Correction du problème de DrawingManager indisponible dans le bloc Google Maps v1 ([#9735](https://github.com/nocobase/nocobase/pull/9735)) par @katherinehhh
  - Correction des champs de géométrie de carte manquants dans le menu d'ajout de champ du gestionnaire de sources de données v2 après l'activation du plugin de carte. ([#9715](https://github.com/nocobase/nocobase/pull/9715)) par @katherinehhh
- **[Calendrier]** Correction d'un problème où les blocs Détails et Édition ne pouvaient pas être ajoutés dans les tiroirs de détail du bloc calendrier v2 ([#9729](https://github.com/nocobase/nocobase/pull/9729)) par @jiannx
- **[Gestionnaire de sources de données]**

  - Correction de l'affichage obsolète du champ de titre lors de la réouverture du tiroir de configuration des champs de la source de données v2 après avoir modifié le champ de titre. ([#9720](https://github.com/nocobase/nocobase/pull/9720)) par @katherinehhh
  - Amélioration des messages d'erreur du gestionnaire de sources de données V2 lorsque les opérations de collection, de champ, de synchronisation et de chargement de table échouent. ([#9710](https://github.com/nocobase/nocobase/pull/9710)) par @katherinehhh
- **[Employés IA]**

  - Amélioration des invites de requête de données des employés IA pour charger la compétence requise avant d'utiliser les outils de requête. ([#9725](https://github.com/nocobase/nocobase/pull/9725)) par @cgyrock
  - Correction du bouton d'assistant Dara manquant dans les paramètres de graphique client-v2. ([#9696](https://github.com/nocobase/nocobase/pull/9696)) par @cgyrock
- **[Bloc : Liste]** Correction de l'état de liaison des actions de ligne obsolète dans les blocs de liste lorsque les actions dépendent de l'enregistrement actuel. ([#9716](https://github.com/nocobase/nocobase/pull/9716)) par @katherinehhh
- **[Gestionnaire d'erreurs]** Réduction des journaux d'erreur bruyants pour les requêtes non authentifiées normales sans jeton ([#9718](https://github.com/nocobase/nocobase/pull/9718)) par @2013xile
- **[Action : Importer des enregistrements Pro]** Correction du texte tronqué lors de l'importation de fichiers XLSX avec des chaînes partagées UTF-8 réparties sur des fragments de flux. par @mytharcher
- **[IA : Base de connaissances]** Correction des chemins manquants dans les URL des fichiers de la base de connaissances S3. par @cgyrock
- **[Historique des enregistrements]** Correction de l'historique des enregistrements manquant pour les modifications de sources de données externes par @2013xile
