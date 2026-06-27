---
title: "NocoBase v1.9.26 : Prise en charge de l'API `acl.registerSnippet` pour fusionner la configuration des snippets"
description: "Notes de version de la v1.9.26"
---

### 🚀 Améliorations

- **[acl]** Prise en charge de l'API `acl.registerSnippet` pour fusionner la configuration des snippets ([#8155](https://github.com/nocobase/nocobase/pull/8155)) par @mytharcher

- **[Contrôle d'accès]** Interdiction d'attribuer le rôle racine aux utilisateurs ([#8180](https://github.com/nocobase/nocobase/pull/8180)) par @2013xile

### 🐛 Corrections de bugs

- **[Paramètres de licence]**
  - Correction de l'exception de construction ts du plugin-license ([#8183](https://github.com/nocobase/nocobase/pull/8183)) par @jiannx

  - Optimisation de la licence et ajout d'informations d'invite ([#7993](https://github.com/nocobase/nocobase/pull/7993)) par @jiannx

- **[Gestionnaire de fichiers]** Correction du problème d'aperçu des fichiers `.txt` sur OSS avec un jeu de caractères incorrect ([#8161](https://github.com/nocobase/nocobase/pull/8161)) par @mytharcher

- **[Action : Importer des enregistrements]** Attente synchrone de la fin des événements `afterCreate` déclenchés par l'importation. ([#8158](https://github.com/nocobase/nocobase/pull/8158)) par @2013xile

- **[Collection : Connexion à des données externes (FDW)]** Correction du problème d'échec de chargement pour les tables avec des noms en majuscules par @2013xile

- **[Source de données : SQL Server externe]** Correction des problèmes où les options `encrypt` et `trustServerCertificate` ne sont pas disponibles par @2013xile
