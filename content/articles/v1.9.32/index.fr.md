---
title: "NocoBase v1.9.32 : Correction d'un débordement de pile causé par une boucle infinie dans le chargement paresseux des champs d'association d'affichage"
description: "Notes de version de la v1.9.32"
---

### 🎉 Nouvelles fonctionnalités

- **[Workflow]** Ajout de nouvelles variables système dans le workflow, incluant `instanceId` et `genSnowflakeId()` ([#8223](https://github.com/nocobase/nocobase/pull/8223)) par @mytharcher

### 🐛 Corrections de bugs

- **[client]** Correction d'un débordement de pile causé par une boucle infinie lors du chargement paresseux des champs d'association d'affichage ([#8262](https://github.com/nocobase/nocobase/pull/8262)) par @zhangzhonghe

- **[Action : Importer des enregistrements]** Correction du problème où l'index de ligne dans le message d'erreur était toujours 1 lorsqu'une erreur était levée dans l'action d'importation ([#8244](https://github.com/nocobase/nocobase/pull/8244)) par @mytharcher

- **[Workflow : Nœud manuel]** Correction du problème où une erreur était levée lors de l'annulation de l'exécution d'un workflow supprimé ([#8258](https://github.com/nocobase/nocobase/pull/8258)) par @mytharcher

- **[Champ de collection : Séquence]** Correction d'une erreur lorsque la commande de réparation du champ-séquence rencontre une collection inexistante dans l'environnement actuel ([#8251](https://github.com/nocobase/nocobase/pull/8251)) par @cgyrock

- **[Action : Importer des enregistrements Pro]** Correction de la logique de vérification d'unicité qui levait une erreur lorsque la valeur du champ unique était nulle par @mytharcher

- **[Workflow : Approbation]** Correction de l'annulation en double d'une même transaction par @mytharcher
