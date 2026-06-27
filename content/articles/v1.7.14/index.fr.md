---
title: "NocoBase v1.7.14 : Masquer automatiquement la barre d'actions du bloc de cartes en grille lorsqu'elle est vide"
description: "Notes de version de la v1.7.14"
---

### 🚀 Améliorations

- **[client]** Masquer automatiquement la barre d'actions des blocs de grille lorsqu'elle est vide ([#7069](https://github.com/nocobase/nocobase/pull/7069)) par @zhangzhonghe

- **[Vérification]** Supprimer les options de vérificateur de la réponse de l'API `verifiers:listByUser` ([#7090](https://github.com/nocobase/nocobase/pull/7090)) par @2013xile

### 🐛 Corrections de bugs

- **[base de données]** Prise en charge des mises à jour d'associations dans updateOrCreate et firstOrCreate ([#7088](https://github.com/nocobase/nocobase/pull/7088)) par @chenos

- **[client]**
  - Les variables des paramètres de requête URL ne fonctionnent pas dans la valeur par défaut des champs de formulaire public ([#7084](https://github.com/nocobase/nocobase/pull/7084)) par @katherinehhh

  - La condition de style sur les champs de colonnes de sous-tableau n'est pas appliquée correctement ([#7083](https://github.com/nocobase/nocobase/pull/7083)) par @katherinehhh

  - Le filtrage via les champs de collection de relations dans les formulaires de filtre est invalide ([#7070](https://github.com/nocobase/nocobase/pull/7070)) par @zhangzhonghe

- **[Champ de collection : Plusieurs à plusieurs (tableau)]** La mise à jour d'un champ plusieurs à plusieurs (tableau) génère une erreur lorsque le champ `updatedBy` est présent ([#7089](https://github.com/nocobase/nocobase/pull/7089)) par @2013xile

- **[Formulaires publics]** Formulaires publics : Correction d'un problème d'accès non autorisé lors de la soumission du formulaire ([#7085](https://github.com/nocobase/nocobase/pull/7085)) par @zhangzhonghe
