---
title: "NocoBase v2.0.0-beta.6 : Simplification des paramètres dans les requêtes et amélioration des performances"
description: "Notes de version de la v2.0.0-beta.6"
---

### 🚀 Améliorations

- **[Workflow : Approbation]** Simplification des paramètres dans la requête et amélioration des performances par @mytharcher

### 🐛 Corrections de bugs

- **[sdk]** Amélioration de l'implémentation du partage de jetons ([#8357](https://github.com/nocobase/nocobase/pull/8357)) par @chenos

- **[client]** Correction du problème où les champs d'association provenant de sources de données externes ne chargeaient pas les données d'association dans les blocs de formulaire ([#8356](https://github.com/nocobase/nocobase/pull/8356)) par @katherinehhh

- **[Workflow : Nœud de boucle]** Correction du problème où un nœud en échec dans une branche conditionnelle ne pouvait pas transmettre son statut au nœud de branchement supérieur ([#8360](https://github.com/nocobase/nocobase/pull/8360)) par @mytharcher

- **[Contrôle d'accès]** Autorisation des champs d'association à utiliser les clés cibles pour l'association ([#8352](https://github.com/nocobase/nocobase/pull/8352)) par @2013xile

- **[Workflow : Webhook]** Correction du problème où une erreur 404 était levée lors de l'envoi d'une requête POST vers l'URL du webhook dans une sous-application par @mytharcher

- **[Gestionnaire d'emails]** Correction du problème de déconnexion occasionnelle du lien de réponse Outlook par @jiannx
