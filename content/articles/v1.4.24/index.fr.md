---
title: "NocoBase v1.4.24 : saisie en lecture seule du composant datePicker"
description: "Notes de version de la v1.4.24"
---

### 🚀 Améliorations

- **[client]** Le champ de saisie du composant datePicker est en lecture seule ([#6061](https://github.com/nocobase/nocobase/pull/6061)) par @Cyx649312038

### 🐛 Corrections de bugs

- **[client]**
  - Correction du chargement incorrect des champs d'association modale dans le bloc tableau ([#6060](https://github.com/nocobase/nocobase/pull/6060)) par @katherinehhh

  - Correction d'un problème de style dans le sous-tableau du bloc de détail ([#6049](https://github.com/nocobase/nocobase/pull/6049)) par @katherinehhh

  - Correction du format du champ numérique en mode readPretty affectant le mode édition ([#6050](https://github.com/nocobase/nocobase/pull/6050)) par @katherinehhh

  - Correction d'un problème de style de cellule d'en-tête de tableau dans ant-table ([#6052](https://github.com/nocobase/nocobase/pull/6052)) par @katherinehhh

- **[database]** Correction d'un problème lors de l'initialisation du champ de tri avec une clé primaire ([#6059](https://github.com/nocobase/nocobase/pull/6059)) par @chareice

- **[Visualisation de données]** Suppression de la clause `LIMIT` lors de l'utilisation de fonctions d'agrégation sans définir de dimensions dans les requêtes de graphiques ([#6062](https://github.com/nocobase/nocobase/pull/6062)) par @2013xile

- **[Gestionnaire de sauvegarde]** Correction d'une erreur de téléchargement de sauvegarde pour les utilisateurs connectés uniquement à une sous-application par @gchust
