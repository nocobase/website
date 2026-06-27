---
title: "NocoBase v2.0.25 : Correction d'un problème de performance lié au champ JSON lors du chargement de la liste des enregistrements d'approbation"
description: "Notes de version de la v2.0.25"
---

### 🚀 Améliorations

- **[Workflow : Approbation]** Correction d'un problème de performance lié au champ JSON lors du chargement de la liste des enregistrements d'approbation par @mytharcher

### 🐛 Corrections de bugs

- **[Serveur]** Modification du moment de fermeture du Pub-Sub en `beforeStop`, pour éviter l'envoi ou le traitement de messages après la fermeture de la base de données ([#8934](https://github.com/nocobase/nocobase/pull/8934)) par @mytharcher

- **[Localisation]** Empêcher la requête localizationTexts:missing en cas de refus d'autorisation ([#8903](https://github.com/nocobase/nocobase/pull/8903)) par @chenos

- **[Source de données : Oracle externe]** Correction d'une erreur survenant lors du chargement de la source de données Oracle externe par @2013xile
