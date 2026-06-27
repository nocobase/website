---
title: "NocoBase v1.9.27 : Ajout de la tolérance aux pannes lorsque des instances d'application manquantes provoquent des erreurs lors de la récupération des messages de maintenance de l'application"
description: "Notes de version de la v1.9.27"
---

### 🚀 Améliorations

- **[Serveur]** Ajout d'une tolérance aux pannes lorsque des instances d'application manquantes provoquent des erreurs lors de la récupération des messages de maintenance de l'application ([#8196](https://github.com/nocobase/nocobase/pull/8196)) par @2013xile

- **[Gestionnaire d'erreurs]** Ne plus exposer les messages d'erreur bruts de la base de données en cas d'erreurs de syntaxe SQL, afin d'éviter de révéler le type de base de données ([#8195](https://github.com/nocobase/nocobase/pull/8195)) par @2013xile

- **[Workflow]** Prise en charge de l'utilisation de la configuration existante pour créer un nouveau workflow dupliqué ([#8165](https://github.com/nocobase/nocobase/pull/8165)) par @mytharcher

### 🐛 Corrections de bugs

- **[Workflow]** Correction du problème où un seul enregistrement s'affichait dans la liste des enregistrements à exécuter manuellement ([#8187](https://github.com/nocobase/nocobase/pull/8187)) par @mytharcher

- **[Collection : Connexion à des données externes (FDW)]** Correction des erreurs de déclenchement lors de la connexion à des tables avec des noms en majuscules par @2013xile

- **[Workflow : Approbation]** Correction du problème où le statut d'enregistrements d'approbation non liés était incorrectement modifié en `UNPROCESSED` par une action d'approbation par @mytharcher
