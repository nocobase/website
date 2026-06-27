---
title: "NocoBase v1.6.0-alpha.31 : compatible avec les paramètres historiques de contrôle d'accès des boutons"
description: "Notes de version de v1.6.0-alpha.31"
---

### 🎉 Nouvelles fonctionnalités

- **[client]** Compatible avec les paramètres historiques de contrôle d'accès par bouton ([#6376](https://github.com/nocobase/nocobase/pull/6376)) par @katherinehhh

- **[Workflow : Message de réponse]** Prise en charge dans le déclencheur d'action par @mytharcher

### 🚀 Améliorations

- **[Auth : Clés API]** Ajout d'un test de configuration de sécurité des jetons pour l'authentification par clé API. ([#6361](https://github.com/nocobase/nocobase/pull/6361)) par @sheldon66

- **[Workflow : Nœud manuel]** Ajustement de l'interface utilisateur du centre de tâches du workflow ([#6272](https://github.com/nocobase/nocobase/pull/6272)) par @mytharcher

### 🐛 Corrections de bugs

- **[serveur]** Cache navigateur incorrect après l'exécution de la commande `yarn start` ([#6394](https://github.com/nocobase/nocobase/pull/6394)) par @gchust

- **[client]**
  - Problème de contexte de thème FormDrawer ([#6403](https://github.com/nocobase/nocobase/pull/6403)) par @katherinehhh

  - Lors de l'utilisation de l'opérateur '$anyOf', la règle de liaison est invalide ([#6400](https://github.com/nocobase/nocobase/pull/6400)) par @zhangzhonghe

- **[auth]** Gestion d'un utilisateur inexistant avec une erreur 401 et mise à jour des messages de locale ([#6381](https://github.com/nocobase/nocobase/pull/6381)) par @sheldon66

- **[Bloc : modèle]** L'option "Enregistrer comme modèle" n'est pas affichée dans le bloc de données de la page ([#6398](https://github.com/nocobase/nocobase/pull/6398)) par @gchust

- **[Workflow : Nœud manuel]** Éviter les conflits sur la clé unique ([#6407](https://github.com/nocobase/nocobase/pull/6407)) par @mytharcher

- **[Gestionnaire de source de données]** Erreur lors de la modification des champs dans une source de données externe ([#6402](https://github.com/nocobase/nocobase/pull/6402)) par @katherinehhh

- **[Éditeur de thème]** Le changement de thème échoue après plusieurs changements consécutifs ([#6387](https://github.com/nocobase/nocobase/pull/6387)) par @katherinehhh

- **[Client WEB]** La page est blanche après avoir changé de rôle ([#6388](https://github.com/nocobase/nocobase/pull/6388)) par @aaaaaajie

- **[Workflow : Approbation]**
  - Éviter qu'une configuration incorrecte des assignés n'interroge tous les utilisateurs par @mytharcher

  - Correction du paramètre d'ordre lors de l'ajout d'un assigné par @mytharcher

- **[WeCom]** Correction du lien d'invitation à la connexion et de l'erreur de connexion DingTalk par @chenzhizdt
