---
title: "NocoBase v1.9.42 : Correction d'un problème où les utilisateurs ne peuvent pas être automatiquement enregistrés lorsque le mobile est manquant"
description: "Notes de version de v1.9.42"
---

### 🚀 Améliorations

- **[Auth : DingTalk]** Utiliser `userid` comme clé par défaut pour l'association des utilisateurs, tout en préservant la compatibilité avec les authentificateurs existants qui reposent sur le mobile par @2013xile

### 🐛 Corrections de bugs

- **[Workflow : Approbation]** Correction d'un problème de performance causé par le champ JSON lors du chargement de listes (MySQL) par @mytharcher

- **[WeCom]** Correction d'un problème empêchant l'enregistrement automatique des utilisateurs lorsque le mobile est manquant par @2013xile
