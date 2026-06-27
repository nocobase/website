---
title: "NocoBase v1.6.0-alpha.3 : Suppression des composants Formily du tableau"
description: "Notes de version de v1.6.0-alpha.3"
---

### 🚀 Améliorations

- **[client]** Suppression des composants Formily du tableau pour améliorer les performances lors du changement de pagination ([#5738](https://github.com/nocobase/nocobase/pull/5738)) par @zhangzhonghe

### 🐛 Corrections de bugs

- **[client]**
  - Correction du problème où les champs ne s'affichaient pas après leur ajout dans un sous-formulaire ([#5827](https://github.com/nocobase/nocobase/pull/5827)) par @zhangzhonghe

  - Correction du problème où la modification de la valeur d'un champ d'association dans le bloc de détails ne se rafraîchissait pas immédiatement ([#5826](https://github.com/nocobase/nocobase/pull/5826)) par @zhangzhonghe

  - Correction du problème où cliquer sur des liens n'ouvrait pas une fenêtre contextuelle lorsque 'Activer le lien' était activé pour la première fois ([#5812](https://github.com/nocobase/nocobase/pull/5812)) par @zhangzhonghe

  - Empêcher les appels API multiples lors de la fermeture de la fenêtre contextuelle ([#5804](https://github.com/nocobase/nocobase/pull/5804)) par @zhangzhonghe

  - Correction du problème où la connexion mobile redirigeait vers la page de bureau ([#5805](https://github.com/nocobase/nocobase/pull/5805)) par @zhangzhonghe

  - Correction de l'alignement du bouton de configuration d'action qui doit être aligné à gauche ([#5798](https://github.com/nocobase/nocobase/pull/5798)) par @katherinehhh

- **[build]** Correction d'un mauvais cache des fichiers js front-end après la construction du plugin ([#5801](https://github.com/nocobase/nocobase/pull/5801)) par @gchust
