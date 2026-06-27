---
title: "NocoBase v1.6.0-beta.18 : Ajout d'un test de configuration de sécurité des jetons pour l'authentification par clé API"
description: "Notes de version de v1.6.0-beta.18"
---

### 🚀 Améliorations

- **[Auth : clés API]** Ajout d'un test de configuration de sécurité des jetons pour l'authentification par clé API. ([#6361](https://github.com/nocobase/nocobase/pull/6361)) par @sheldon66

### 🐛 Corrections de bugs

- **[serveur]** Cache navigateur incorrect après l'exécution de la commande `yarn start` ([#6394](https://github.com/nocobase/nocobase/pull/6394)) par @gchust

- **[auth]** Gestion d'un utilisateur inexistant avec une erreur 401 et mise à jour des messages de locale ([#6381](https://github.com/nocobase/nocobase/pull/6381)) par @sheldon66

- **[client WEB]** La page reste blanche après avoir changé de rôle ([#6388](https://github.com/nocobase/nocobase/pull/6388)) par @aaaaaajie

- **[Éditeur de thème]** Le changement de thème échoue après plusieurs changements consécutifs ([#6387](https://github.com/nocobase/nocobase/pull/6387)) par @katherinehhh

- **[Workflow : Approbation]**
  - Correction du paramètre d'ordre lors de l'ajout d'un approbateur par @mytharcher

  - Éviter qu'une configuration incorrecte des approbateurs ne requête tous les utilisateurs par @mytharcher

- **[WeCom]** Correction du lien d'invitation à la connexion et de l'erreur de connexion DingTalk par @chenzhizdt
