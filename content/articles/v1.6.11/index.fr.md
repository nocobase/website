---
title: "NocoBase v1.6.11 : Optimisation du message d'erreur 502"
description: "Notes de version de la v1.6.11"
---

### 🚀 Améliorations

- **[client]**
  - Optimisation du message d'erreur 502 ([#6547](https://github.com/nocobase/nocobase/pull/6547)) par @chenos

  - Prise en charge de l'aperçu uniquement pour les fichiers texte brut ([#6563](https://github.com/nocobase/nocobase/pull/6563)) par @mytharcher

- **[Champ de collection : Séquence]** Possibilité de définir la séquence comme champ de titre pour le bloc calendrier ([#6562](https://github.com/nocobase/nocobase/pull/6562)) par @katherinehhh

- **[Workflow : Approbation]** Prise en charge de l'ignorance du validateur dans les paramètres par @mytharcher

### 🐛 Corrections de bugs

- **[client]**
  - Problème d'affichage du champ date dans le filtrage de la portée des données ([#6564](https://github.com/nocobase/nocobase/pull/6564)) par @katherinehhh

  - L'option 'Contenu tronqué avec points de suspension' nécessite un rafraîchissement de la page pour que l'état de basculement prenne effet ([#6520](https://github.com/nocobase/nocobase/pull/6520)) par @zhangzhonghe

  - Impossible d'ouvrir une autre fenêtre modale à l'intérieur d'une fenêtre modale ([#6535](https://github.com/nocobase/nocobase/pull/6535)) par @zhangzhonghe

- **[Documentation API]** La page de documentation API ne peut pas défiler ([#6566](https://github.com/nocobase/nocobase/pull/6566)) par @zhangzhonghe

- **[Workflow]** Assurer que la clé du workflow est générée avant l'enregistrement ([#6567](https://github.com/nocobase/nocobase/pull/6567)) par @mytharcher

- **[Workflow : Événement post-action]** Les enregistrements multiples dans une action groupée doivent se déclencher plusieurs fois ([#6559](https://github.com/nocobase/nocobase/pull/6559)) par @mytharcher

- **[Authentification]** Problème de localisation pour les champs de la page d'inscription ([#6556](https://github.com/nocobase/nocobase/pull/6556)) par @2013xile

- **[Formulaires publics]** Problème d'affichage du titre de la page du formulaire public affichant 'Chargement...' ([#6569](https://github.com/nocobase/nocobase/pull/6569)) par @katherinehhh
