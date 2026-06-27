---
title: "NocoBase v1.8.16 : Corrections de bugs"
description: "Notes de version de la v1.8.16"
---

### 🚀 Améliorations

- **[Notification : message in-app]** Suppression des logs SQL via `console.log` ([#7368](https://github.com/nocobase/nocobase/pull/7368)) par @2013xile

### 🐛 Corrections de bugs

- **[serveur]** Certaines requêtes manquent de `ctx.action`, ce qui provoque des erreurs dans le middleware du journal d'audit ([#7369](https://github.com/nocobase/nocobase/pull/7369)) par @2013xile

- **[Champ de collection : Formule]** Correction du problème où la saisie de formule ne pouvait pas passer la validation en raison du type de variable ([#7373](https://github.com/nocobase/nocobase/pull/7373)) par @mytharcher

- **[Gestionnaire de sauvegarde]** Les sauvegardes de fichiers volumineux pouvaient afficher « réussi » avant d'être réellement terminées par @gchust
