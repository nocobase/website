---
title: "NocoBase v2.0.0-beta.4 : Correction d'un message d'erreur incorrect lors d'une erreur de contrainte unique pendant l'importation asynchrone XLSX"
description: "Notes de version de v2.0.0-beta.4"
---

### 🐛 Corrections de bogues

- **[Action : Importer des enregistrements]** Correction d'un message d'erreur incorrect lorsqu'une contrainte d'unicité est déclenchée lors d'une importation XLSX asynchrone ([#8342](https://github.com/nocobase/nocobase/pull/8342)) par @cgyrock

- **[Action : Exporter des enregistrements Pro]** Correction d'une erreur lorsque des sous-applications exécutent des tâches d'importation/exportation asynchrones alors que l'application principale n'active pas le plugin d'importation/exportation Pro par @cgyrock

- **[Gestionnaire d'e-mails]** Affichage du bouton "Répondre à tous" et la portée des données prend désormais en charge le filtrage des messages enfants. par @jiannx
