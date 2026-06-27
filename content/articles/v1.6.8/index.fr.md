---
title: "NocoBase v1.6.8 : Corrections de bugs"
description: "Notes de version de la v1.6.8"
---

### 🐛 Corrections de bugs

- **[serveur]** La commande de mise à niveau peut provoquer des erreurs de workflow ([#6524](https://github.com/nocobase/nocobase/pull/6524)) par @gchust

- **[client]** La hauteur du sous-tableau dans le formulaire est définie en même temps que la hauteur du formulaire ([#6518](https://github.com/nocobase/nocobase/pull/6518)) par @katherinehhh

- **[Authentification]**
  - X-Authenticator manquant ([#6526](https://github.com/nocobase/nocobase/pull/6526)) par @chenos

  - Options d'authentificateur tronquées ([#6527](https://github.com/nocobase/nocobase/pull/6527)) par @2013xile

- **[Bloc : Carte]** Problème de gestion des clés du bloc carte entraînant des échecs de requête en raison de caractères invisibles ([#6521](https://github.com/nocobase/nocobase/pull/6521)) par @katherinehhh

- **[Gestionnaire de sauvegarde]** La restauration peut provoquer des erreurs d'exécution de workflow par @gchust

- **[WeCom]** Résolution des variables d'environnement et des secrets lors de la récupération de la configuration de notification. par @2013xile
