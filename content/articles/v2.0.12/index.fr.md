---
title: "NocoBase v2.0.12 : Ajout d'un verrou pour la sauvegarde planifiée entre les nœuds du cluster"
description: "Notes de version de la v2.0.12"
---

### 🚀 Améliorations

- **[Adaptateur de verrouillage Redis]** Refactorisation suite au changement de l'API de LockManager dans le dépôt principal par @mytharcher

- **[Gestionnaire de sauvegarde]** Ajout d'un verrou pour les sauvegardes planifiées entre les nœuds du cluster par @mytharcher

### 🐛 Corrections de bugs

- **[client]**
  - Les blocs V2 n'affichent désormais que les actions prises en charge par la source de données actuelle ([#8803](https://github.com/nocobase/nocobase/pull/8803)) par @zhangzhonghe

  - Correction du problème de style du bouton de retour sur les sous-pages v2 ([#8810](https://github.com/nocobase/nocobase/pull/8810)) par @zhangzhonghe

- **[gestionnaire de verrouillage]** Correction d'un problème de condition de concurrence du gestionnaire de verrouillage ([#8734](https://github.com/nocobase/nocobase/pull/8734)) par @mytharcher

- **[serveur]** Correction du problème d'erreur dans les requêtes de données des sources de données non relationnelles ([#8776](https://github.com/nocobase/nocobase/pull/8776)) par @cgyrock

- **[Contrôle d'accès]** Correction d'une erreur de modification des données de la source de données de l'API Restful. ([#8788](https://github.com/nocobase/nocobase/pull/8788)) par @cgyrock

- **[Action : Exporter les enregistrements]** Correction du problème où le champ belongsToArray était vide dans l'exportation Excel ([#8787](https://github.com/nocobase/nocobase/pull/8787)) par @cgyrock
