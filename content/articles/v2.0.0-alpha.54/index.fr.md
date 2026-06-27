---
title: "NocoBase v2.0.0-alpha.54 : Le type de champ d'ID prédéfini peut être modifié lors de la création de la collection"
description: "Notes de version de v2.0.0-alpha.54"
---

### 🎉 Nouvelles fonctionnalités

- **[client]** Lors de la création d'une collection, le type de champ d'ID prédéfini peut être modifié ([#8129](https://github.com/nocobase/nocobase/pull/8129)) par @cgyrock

### 🚀 Améliorations

- **[client]**
  - Modification de la largeur des colonnes du tableau pour utiliser des options sélectionnables ([#8188](https://github.com/nocobase/nocobase/pull/8188)) par @katherinehhh

  - Amélioration des styles de recordPicker avec maxTagCount ([#8175](https://github.com/nocobase/nocobase/pull/8175)) par @katherinehhh

  - Optimisation des options de configuration (Blocs, Champs, Actions) ([#8141](https://github.com/nocobase/nocobase/pull/8141)) par @katherinehhh

- **[Gestionnaire d'erreurs]** Ne plus exposer les messages d'erreur bruts de la base de données en cas d'erreurs de syntaxe SQL, afin d'éviter de révéler le type de base de données ([#8195](https://github.com/nocobase/nocobase/pull/8195)) par @2013xile

- **[Bloc : Carte]** Prise en charge des points de suspension pour le débordement de texte du champ carte en mode d'affichage texte ([#8189](https://github.com/nocobase/nocobase/pull/8189)) par @katherinehhh

- **[Workflow]** Prise en charge de l'utilisation de la configuration existante pour en créer une nouvelle dans un workflow dupliqué ([#8165](https://github.com/nocobase/nocobase/pull/8165)) par @mytharcher

- **[Contrôle d'accès]** Interdiction d'attribuer le rôle racine aux utilisateurs ([#8180](https://github.com/nocobase/nocobase/pull/8180)) par @2013xile

### 🐛 Corrections de bugs

- **[client]**
  - Correction du bouton de soumission non affiché dans le formulaire de création lorsque le rôle a la permission de créer ([#8190](https://github.com/nocobase/nocobase/pull/8190)) par @katherinehhh

  - Empêcher l'effacement des données existantes de sous-tableau/sous-formulaire lors de la soumission sans sélection d'éléments ([#8172](https://github.com/nocobase/nocobase/pull/8172)) par @katherinehhh

  - Empêcher l'affichage du paramètre de périmètre de données dans la configuration du formulaire de création ([#8176](https://github.com/nocobase/nocobase/pull/8176)) par @katherinehhh

  - Échec de l'enregistrement du flux d'événements d'onglet ([#8168](https://github.com/nocobase/nocobase/pull/8168)) par @chenos

  - Suppression de l'espacement supplémentaire après le masquage d'un onglet ([#8167](https://github.com/nocobase/nocobase/pull/8167)) par @chenos

  - Correction du filtrage incorrect des options sélectionnées dans la sélection d'enregistrements associés ([#8151](https://github.com/nocobase/nocobase/pull/8151)) par @katherinehhh

  - Correction du problème de rendu du champ tableoid dans le bloc formulaire ([#8177](https://github.com/nocobase/nocobase/pull/8177)) par @katherinehhh

- **[serveur]**
  - Mise à jour de license-kit vers la dernière version ([#8173](https://github.com/nocobase/nocobase/pull/8173)) par @jiannx

  - Prise en charge des champs d'ID Snowflake (53 bits) pour les sources de données externes ([#8185](https://github.com/nocobase/nocobase/pull/8185)) par @2013xile

- **[Bloc : Carte]** Correction du niveau de zoom incorrect de la carte après un changement de menu ([#8193](https://github.com/nocobase/nocobase/pull/8193)) par @katherinehhh

- **[Workflow]** Correction du problème où un seul enregistrement s'affichait dans la liste des enregistrements à exécuter manuellement ([#8187](https://github.com/nocobase/nocobase/pull/8187)) par @mytharcher

- **[Visualisation de données]** Résolution du problème concernant le mode SQL pour sélectionner une source de données externe ; <br/>Résolution du problème concernant l'état de chargement du bloc graphique lors de la récupération des données ; <br/>Résolution du problème concernant l'annulation de la configuration d'un bloc graphique vide ; ([#8169](https://github.com/nocobase/nocobase/pull/8169)) par @heziqiang

- **[Employés IA]** Résolution du problème concernant le saut de ligne des messages IA ([#8096](https://github.com/nocobase/nocobase/pull/8096)) par @heziqiang

- **[Paramètres de licence]**
  - Correction de l'exception de construction ts du plugin-license ([#8183](https://github.com/nocobase/nocobase/pull/8183)) par @jiannx

  - Optimisation de la licence et ajout d'informations d'invite ([#7993](https://github.com/nocobase/nocobase/pull/7993)) par @jiannx

- **[Gestionnaire de fichiers]** Correction du problème où l'aperçu d'un fichier `.txt` sur OSS utilisait un jeu de caractères incorrect ([#8161](https://github.com/nocobase/nocobase/pull/8161)) par @mytharcher

- **[Source de données : SQL Server externe]** Correction des problèmes où les options `encrypt` et `trustServerCertificate` n'étaient pas disponibles par @2013xile

- **[Collection : Connexion à des données étrangères (FDW)]** Correction du problème où le chargement échouait pour les tables avec des noms en majuscules par @2013xile

- **[Workflow : Approbation]** Correction du problème où le statut des enregistrements d'approbation non liés était incorrectement changé en `UNPROCESSED` par une action d'approbation par @mytharcher
