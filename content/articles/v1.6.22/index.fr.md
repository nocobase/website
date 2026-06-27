---
title: "NocoBase v1.6.22 : Mise à jour des dépendances et suppression du support SQLite"
description: "Notes de version de la v1.6.22"
---

### 🚀 Améliorations

- **[create-nocobase-app]** Mise à jour des dépendances et suppression du support SQLite ([#6708](https://github.com/nocobase/nocobase/pull/6708)) par @chenos

- **[Gestionnaire de fichiers]** Exposition de l'API utils ([#6705](https://github.com/nocobase/nocobase/pull/6705)) par @mytharcher

- **[Workflow]** Ajout des types de date à l'ensemble des types de variables ([#6717](https://github.com/nocobase/nocobase/pull/6717)) par @mytharcher

### 🐛 Corrections de bugs

- **[client]**
  - Problème de difficulté à supprimer les icônes de la barre de navigation supérieure mobile ([#6734](https://github.com/nocobase/nocobase/pull/6734)) par @zhangzhonghe

  - Après une connexion via une clé étrangère, le clic pour déclencher le filtrage entraîne des conditions de filtre vides ([#6634](https://github.com/nocobase/nocobase/pull/6634)) par @zhangzhonghe

  - Problème de commutation du sélecteur dans le champ date du bouton de filtre ([#6695](https://github.com/nocobase/nocobase/pull/6695)) par @katherinehhh

  - Problème du bouton de réduction dans le menu de gauche masqué par la fenêtre contextuelle du workflow ([#6733](https://github.com/nocobase/nocobase/pull/6733)) par @zhangzhonghe

  - Contraintes d'option d'action manquantes lors de la réouverture des règles de liaison ([#6723](https://github.com/nocobase/nocobase/pull/6723)) par @katherinehhh

  - Bouton d'exportation affiché sans autorisation d'exportation ([#6689](https://github.com/nocobase/nocobase/pull/6689)) par @katherinehhh

  - Les champs obligatoires masqués par les règles de liaison ne doivent pas affecter la soumission du formulaire ([#6709](https://github.com/nocobase/nocobase/pull/6709)) par @zhangzhonghe

- **[server]** appVersion générée incorrectement par create-migration ([#6740](https://github.com/nocobase/nocobase/pull/6740)) par @chenos

- **[build]** Correction d'une erreur levée dans la commande tar ([#6722](https://github.com/nocobase/nocobase/pull/6722)) par @mytharcher

- **[Workflow]** Correction d'une erreur levée lors de l'exécution d'un événement planifié dans un sous-flux ([#6721](https://github.com/nocobase/nocobase/pull/6721)) par @mytharcher

- **[Workflow : Événement d'action personnalisée]** Prise en charge de l'exécution en mode enregistrements multiples par @mytharcher

- **[Stockage de fichiers : S3(Pro)]** Ajout de la logique multer pour le téléchargement côté serveur par @mytharcher
