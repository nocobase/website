---
title: "NocoBase v1.5.7 : Suppression des logs d'erreur dans la console pour les tentatives de reconnexion SSE"
description: "Notes de version de la v1.5.7"
---

### 🚀 Améliorations

- **[Notification : Message in-app]** Suppression des logs d'erreur dans la console pour les tentatives de reconnexion SSE. ([#6205](https://github.com/nocobase/nocobase/pull/6205)) par @sheldon66

### 🐛 Corrections de bugs

- **[client]**
  - Paramètre de glisser-déposer manquant dans la modale de création rapide d'opération pour les données de relation ([#6201](https://github.com/nocobase/nocobase/pull/6201)) par @katherinehhh

  - Problème de non-application du formatage des nombres de haute précision ([#6202](https://github.com/nocobase/nocobase/pull/6202)) par @katherinehhh

  - Correction d'un problème où le nettoyage d'un champ d'association dans un formulaire n'efface pas réellement la valeur du champ lors de la soumission du formulaire ([#5540](https://github.com/nocobase/nocobase/pull/5540)) par @zhangzhonghe

  - Le bloc ne se rafraîchit pas après la soumission du formulaire ([#6206](https://github.com/nocobase/nocobase/pull/6206)) par @zhangzhonghe

  - Valeur de champ lié persistante lors de la soumission après réinitialisation du champ de relation ([#6207](https://github.com/nocobase/nocobase/pull/6207)) par @katherinehhh

  - Action de mise à jour affichée pour les lignes sans permission de mise à jour dans le tableau ([#6204](https://github.com/nocobase/nocobase/pull/6204)) par @katherinehhh

- **[Champ de collection : Tri]** Correction du type de champ de tri non enregistré dans la source de données externe ([#6212](https://github.com/nocobase/nocobase/pull/6212)) par @mytharcher

- **[Authentification]** Problème d'authentification WebSocket ([#6209](https://github.com/nocobase/nocobase/pull/6209)) par @2013xile

- **[Champ de collection : Pièce jointe (URL)]** Correction de l'URL de requête obsolète dans le hook par @mytharcher
