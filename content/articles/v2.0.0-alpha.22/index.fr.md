---
title: "NocoBase v2.0.0-alpha.22 : Ajout du bloc markdown 2.0"
description: "Notes de version de v2.0.0-alpha.22"
---

### 🎉 Nouvelles fonctionnalités

- **[client]** Ajout du bloc markdown 2.0 ([#7613](https://github.com/nocobase/nocobase/pull/7613)) par @katherinehhh

- **[Gestionnaire de sources de données]**
  - La source de données principale prend désormais en charge la lecture directe des tables de la base de données principale et permet de modifier les interfaces des champs ([#7118](https://github.com/nocobase/nocobase/pull/7118)) par @aaaaaajie

  - La source de données principale prend désormais en charge la lecture directe des tables de la base de données principale et permet de modifier les interfaces des champs ([#7118](https://github.com/nocobase/nocobase/pull/7118)) par @aaaaaajie

- **[Historique des enregistrements]** Ajout du bloc d'historique des enregistrements par @2013xile

### 🐛 Corrections de bugs

- **[Moteur de flux]** Résolution d'un problème où les actions de flux définies par un modèle de flux ne pouvaient pas être configurées, permettant désormais aux utilisateurs de personnaliser les actions de flux comme prévu. ([#7666](https://github.com/nocobase/nocobase/pull/7666)) par @gchust

- **[Adaptateur de file d'attente Redis]** Correction du problème où l'adaptateur de file d'attente Redis n'écoutait pas correctement les canaux abonnés après le démarrage par @mytharcher
