---
title: "NocoBase v2.0.53 : Ajout d'un message de confirmation pour les modifications non sauvegardées lors de la fermeture de la page de configuration du flux d'événements avec des données non sauvegardées."
description: "Notes de version de la v2.0.53"
---

### 🚀 Améliorations

- **[moteur de flux]** Ajout d'un message de confirmation de modifications non enregistrées lors de la fermeture de la page de configuration du flux d'événements avec des données non sauvegardées. ([#9449](https://github.com/nocobase/nocobase/pull/9449)) par @gchust

### 🐛 Corrections de bugs

- **[client]**
  - Correction empêchant l'ouverture de l'édition rapide pour les champs d'association dans un tableau ([#9469](https://github.com/nocobase/nocobase/pull/9469)) par @katherinehhh

  - Correction des champs de relation en affichage seul dans les sous-tableaux qui ne s'affichaient pas ou n'étaient pas cliquables après actualisation. ([#9453](https://github.com/nocobase/nocobase/pull/9453)) par @jiannx

  - Correction des champs à sélection multiple dans les blocs de données v2 qui doivent afficher les libellés des options au lieu des valeurs ([#9472](https://github.com/nocobase/nocobase/pull/9472)) par @katherinehhh

- **[Bloc : Formulaire multi-étapes]** Correction du problème de barre de défilement lors de l'activation de la hauteur totale dans le bloc de formulaire à étapes v1 ([#9468](https://github.com/nocobase/nocobase/pull/9468)) par @katherinehhh
