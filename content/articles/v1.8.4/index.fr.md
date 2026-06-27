---
title: "NocoBase v1.8.4 : Prise en charge de la configuration d'un secret d'authentification indépendant pour les sous-applications"
description: "Notes de version de la v1.8.4"
---

### 🎉 Nouvelles fonctionnalités

- **[Gestionnaire multi-applications]** Prise en charge de la configuration d'un secret d'authentification indépendant pour les sous-applications ([#7197](https://github.com/nocobase/nocobase/pull/7197)) par @mytharcher

- **[Workflow : CC]** Ajout d'un nœud CC au workflow ([#7201](https://github.com/nocobase/nocobase/pull/7201)) par @mytharcher

### 🚀 Améliorations

- **[Notification : Message in-app]** Optimisation de la taille de police pour la page des messages mobiles ([#7199](https://github.com/nocobase/nocobase/pull/7199)) par @zhangzhonghe

- **[Auth : DingTalk]** Prise en charge de la configuration du protocole et du numéro de port de l'URL de rappel par @2013xile

### 🐛 Corrections de bugs

- **[Notification : Message in-app]** Correction du problème d'horodatage BigInt au format chaîne causant une erreur dayjs ([#7196](https://github.com/nocobase/nocobase/pull/7196)) par @mytharcher

- **[Workflow : Approbation]**
  - Éviter une erreur lorsque l'utilisateur n'existe pas par @mytharcher

  - Recharger l'association sur l'enregistrement par @mytharcher

  - Ajout de `try/catch` dans la migration lors de la mise à jour du schéma d'interface utilisateur par @mytharcher
