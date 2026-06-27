---
title: "NocoBase v1.8.0-alpha.13 : prise en charge de la réponse et du transfert séparés des e-mails dans un même sujet"
description: "Notes de version de v1.8.0-alpha.13"
---

### 🚀 Améliorations

- **[Gestionnaire d’e-mails]** Prise en charge de la réponse et du transfert séparés des e-mails au sein d’un même sujet par @jiannx

### 🐛 Corrections de bugs

- **[client]**
  - Problème de couleur d’arrière-plan dans le sous-tableau du bloc de détail ([#7144](https://github.com/nocobase/nocobase/pull/7144)) par @katherinehhh

  - Le markdown ne reflétait pas les modifications en temps réel lors de l’utilisation des variables $nForm ([#7147](https://github.com/nocobase/nocobase/pull/7147)) par @katherinehhh

- **[Visualisation des données]** Problème de pagination des tableaux ([#7151](https://github.com/nocobase/nocobase/pull/7151)) par @2013xile

- **[Gestionnaire de sources de données]** Correction d’un problème où la combinaison du chargement à la demande des sources de données et de la configuration du préfixe de table provoquait une erreur « ConnectionManager.getConnection was called after the connection manager was closed ». ([#7150](https://github.com/nocobase/nocobase/pull/7150)) par @aaaaaajie
