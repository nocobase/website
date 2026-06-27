---
title: "NocoBase v1.6.0-alpha.18 : Prise en charge de la restriction IP"
description: "Notes de version de v1.6.0-alpha.18"
---

### 🎉 Nouvelles fonctionnalités

- **[Client WEB]** Prise en charge de la configuration des permissions pour les onglets de page et ajout d'une page de gestion des routes ([#5955](https://github.com/nocobase/nocobase/pull/5955)) par @zhangzhonghe
Référence : [Routes](https://docs.nocobase.com/handbook/routes)
- **[Restriction IP]** Prise en charge de la restriction IP. par @sheldon66
Référence : [Restriction IP](https://docs.nocobase.com/handbook/IP-restriction)
### 🚀 Améliorations

- **[serveur]**
  - déplacer AesEncryptor vers le noyau ([#6132](https://github.com/nocobase/nocobase/pull/6132)) par @chenos

  - 1. Ajout d'un middleware serveur pour extraire l'adresse IP du client.<br />2. Résolution des problèmes de rechargement infini lorsqu'une IP est bloquée.<br />3. Ajout de l'en-tête HTTP `X-Forwarded-For` dans le proxy pour permettre le transfert lors du débogage local. ([#6069](https://github.com/nocobase/nocobase/pull/6069)) par @sheldon66

### 🐛 Corrections de bugs

- **[Authentification]** Mise à jour des règles de migration pour les jetons émis et la configuration de la politique des jetons. ([#6107](https://github.com/nocobase/nocobase/pull/6107)) par @sheldon66
