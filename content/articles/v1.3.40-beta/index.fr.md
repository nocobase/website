---
title: "NocoBase v1.3.40-beta : Ajout de l'option Ignorer la vérification SSL"
description: "Notes de version de v1.3.40-beta"
---

### 🎉 Nouvelles fonctionnalités

- **[Auth: OIDC]** Ajout d'une option permettant d'ignorer la vérification SSL par @2013xile

### 🚀 Améliorations

- **[client]** Afficher une case à cocher désactivée non cochée pour les champs non sélectionnés ([#5503](https://github.com/nocobase/nocobase/pull/5503)) par @katherinehhh

### 🐛 Corrections de bugs

- **[database]** Correction du problème où les opérateurs de chaîne "contient" et "ne contient pas" ne géraient pas correctement les valeurs `null` ([#5509](https://github.com/nocobase/nocobase/pull/5509)) par @2013xile

- **[client]** Correction de la règle de liaison pour évaluer correctement les variables de paramètres d'URL ([#5504](https://github.com/nocobase/nocobase/pull/5504)) par @katherinehhh

- **[Bloc : Carte]** Correction du problème où certaines cartes s'affichaient incorrectement en présence de plusieurs cartes, dû à des appels multiples à la méthode `load` d'AMap ([#5490](https://github.com/nocobase/nocobase/pull/5490)) par @Cyx649312038
