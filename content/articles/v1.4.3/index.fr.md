---
title: "NocoBase v1.4.3 : Autoriser la connexion avec le nom du rôle dans les cas de test"
description: "Notes de version de v1.4.3"
---

### 🚀 Améliorations

- **[test]** Autoriser la connexion avec le nom du rôle dans les cas de test ([#5794](https://github.com/nocobase/nocobase/pull/5794)) par @mytharcher

- **[Notification : Message in-app]** Mise à jour des titres pour les URL de détail dans les formulaires de messages in-app et les fichiers de localisation ([#5742](https://github.com/nocobase/nocobase/pull/5742)) par @sheldon66

### 🐛 Corrections de bugs

- **[client]**
  - Correction du problème où le jeton n'était pas effacé après qu'un utilisateur sans rôle rencontre une erreur de connexion et clique sur le bouton « Se connecter avec un autre compte » ([#5790](https://github.com/nocobase/nocobase/pull/5790)) par @2013xile

  - Perte des en-têtes de requête lors des requêtes silencieuses ([#5795](https://github.com/nocobase/nocobase/pull/5795)) par @chenos

  - Page blanche lorsque l'utilisateur n'a pas de rôle ([#5797](https://github.com/nocobase/nocobase/pull/5797)) par @chenos

  - Correction du problème de barre de défilement dans les sous-tableaux de petite taille sous le thème compact ([#5796](https://github.com/nocobase/nocobase/pull/5796)) par @katherinehhh
