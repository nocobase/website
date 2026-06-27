---
title: "NocoBase v2.0.8 : Mise à jour de l'invite utilisateur de la boîte de dialogue IA"
description: "Notes de version de la v2.0.8"
---

### 🎉 Nouvelles fonctionnalités

- **[Employés IA]** Mise à jour de l'invite utilisateur du chatbox IA ([#8725](https://github.com/nocobase/nocobase/pull/8725)) par @heziqiang

### 🐛 Corrections de bugs

- **[serveur]** Résolution d'un problème de cache en ajoutant un hash aux ressources ([#8730](https://github.com/nocobase/nocobase/pull/8730)) par @chenos

- **[Employés IA]** Correction d'un problème de rendu de la configuration de la source de données IA. ([#8731](https://github.com/nocobase/nocobase/pull/8731)) par @cgyrock

- **[Workflow : Événement d'action personnalisée]** Correction du problème où le workflow d'action personnalisée se bloquait lors de l'exécution en tant que sous-workflow ([#8738](https://github.com/nocobase/nocobase/pull/8738)) par @mytharcher

- **[Workflow : Approbation]**
  - Nettoyage des valeurs d'association dans les actions d'approbation, pour éviter toute manipulation de données au-delà des autorisations par @mytharcher

  - Correction du problème où une erreur était levée lors de l'exécution manuelle d'un workflow d'approbation par @mytharcher

  - Correction de l'erreur levée causée par l'absence de la valeur `dataAfter` lors de l'ajout ou de la délégation par @mytharcher

  - Correction du problème où le paramètre `appends` était filtré par l'ACL par @mytharcher

  - Correction d'un problème ACL où la valeur d'association ne devait pas être créée ou mise à jour lorsque l'utilisateur n'a pas la permission par @mytharcher
