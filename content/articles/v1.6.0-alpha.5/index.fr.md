---
title: "NocoBase v1.6.0-alpha.5 : Corrections de bugs"
description: "Notes de version de v1.6.0-alpha.5"
---

### 🐛 Corrections de bugs

- **[client]**
  - Correction du problème où le titre de l'onglet du navigateur ne se mettait pas à jour après un changement de page ([#5857](https://github.com/nocobase/nocobase/pull/5857)) par @zhangzhonghe

  - Correction du problème où le rafraîchissement de la page dans la page de gestion des sources de données redirigeait vers la page d'accueil ([#5855](https://github.com/nocobase/nocobase/pull/5855)) par @zhangzhonghe

  - Correction du problème où les données ne changeaient pas après la pagination dans un sous-tableau ([#5856](https://github.com/nocobase/nocobase/pull/5856)) par @zhangzhonghe

  - Correction du problème où les données de rôle n'étaient pas affichées dans le tableau de gestion des utilisateurs ([#5846](https://github.com/nocobase/nocobase/pull/5846)) par @zhangzhonghe

  - Correction du problème où les champs d'association dans les modèles de référence n'affichaient parfois pas de données ([#5848](https://github.com/nocobase/nocobase/pull/5848)) par @zhangzhonghe

  - Correction du problème où le bouton 'Requête personnalisée' n'était pas immédiatement visible après avoir été ajouté ([#5845](https://github.com/nocobase/nocobase/pull/5845)) par @zhangzhonghe

  - Empêcher les pages masquées d'affecter les interactions avec d'autres pages ([#5836](https://github.com/nocobase/nocobase/pull/5836)) par @zhangzhonghe

  - Correction du problème où les blocs ajoutés dans une fenêtre contextuelle n'étaient pas affichés lors de la réouverture de la fenêtre ([#5838](https://github.com/nocobase/nocobase/pull/5838)) par @zhangzhonghe

- **[server]** Définition des actions disponibles par défaut pour l'ACL ([#5847](https://github.com/nocobase/nocobase/pull/5847)) par @chenos
