---
title: "NocoBase v2.0.0-alpha.56 : prise en charge de la largeur de colonne personnalisée pour les colonnes de tableau"
description: "Notes de version de v2.0.0-alpha.56"
---

### 🚀 Améliorations

- **[client]** Prise en charge de la largeur de colonne personnalisée pour les colonnes de tableau ([#8200](https://github.com/nocobase/nocobase/pull/8200)) par @katherinehhh

### 🐛 Corrections de bugs

- **[client]** Empêcher le débordement de la largeur totale des lignes lors du redimensionnement des colonnes ([#8166](https://github.com/nocobase/nocobase/pull/8166)) par @zhangzhonghe

- **[flow-engine]** Correction du problème où la soumission du formulaire dans une fenêtre modale réutilisée via l'uid popup ne rafraîchit pas les données du bloc. ([#8202](https://github.com/nocobase/nocobase/pull/8202)) par @gchust

- **[Champ de collection : Formule]** Correction du problème où les champs BigInt ne peuvent pas être ajoutés aux blocs Détail et Formulaire ([#8201](https://github.com/nocobase/nocobase/pull/8201)) par @katherinehhh

- **[Workflow]** Correction du problème où une erreur est levée lors de la suppression d'une version de workflow qui n'est pas la version actuelle ([#8203](https://github.com/nocobase/nocobase/pull/8203)) par @mytharcher
