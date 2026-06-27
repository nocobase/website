---
title: "NocoBase v2.0.20 : Correction du problème où les événements du cycle de vie envoyés par le worker entraînent l'arrêt de l'application de service"
description: "Notes de version de la v2.0.20"
---

### 🐛 Corrections de bugs

- **[serveur]** Correction du problème où les événements du cycle de vie envoyés par le worker entraînaient l'arrêt du service applicatif ([#8906](https://github.com/nocobase/nocobase/pull/8906)) par @mytharcher

- **[Gestionnaire de sources de données]** Correction du problème où la collection créée par l'employé IA manquait toujours des champs `createBy` et `updateBy` ([#8895](https://github.com/nocobase/nocobase/pull/8895)) par @cgyrock

- **[Action : Importer des enregistrements Pro]** Correction de l'importation différée provoquant une erreur SES par @mytharcher

- **[Impression de modèles]** Correction de l'erreur d'impression de la collection SQL par @jiannx

- **[Gestionnaire d'emails]** Correction de l'erreur de page lorsque l'email n'existe pas par @jiannx
