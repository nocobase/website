---
title: "NocoBase v1.7.0-beta.18 : Ajout de l'interface de code"
description: "Notes de version de v1.7.0-beta.18"
---

### 🎉 Nouvelles fonctionnalités

- **[Champ de collection : Code]** Ajout de l'interface de code par @mytharcher

### 🚀 Améliorations

- **[create-nocobase-app]** Mise à niveau de certaines dépendances vers les dernières versions ([#6673](https://github.com/nocobase/nocobase/pull/6673)) par @chenos

### 🐛 Corrections de bugs

- **[client]**
  - Champs hérités affichés dans la liste d'affectation des champs de la collection actuelle ([#6666](https://github.com/nocobase/nocobase/pull/6666)) par @katherinehhh

  - Problème de style dans la saisie de variable lors du réglage de la valeur par défaut ([#6668](https://github.com/nocobase/nocobase/pull/6668)) par @katherinehhh

- **[build]** La sortie de construction est incorrecte lorsque le plugin dépend de certaines bibliothèques AMD ([#6665](https://github.com/nocobase/nocobase/pull/6665)) par @gchust

- **[Bloc : iframe]** Barre de défilement verticale apparaît lorsque le bloc iframe est réglé sur une hauteur maximale ([#6675](https://github.com/nocobase/nocobase/pull/6675)) par @katherinehhh

- **[Contrôle d'accès]** Correction d'une erreur levée lors de la sérialisation du modèle de rôle dans le cache ([#6674](https://github.com/nocobase/nocobase/pull/6674)) par @mytharcher

- **[Workflow]** Correction d'une erreur de migration levée par MySQL ([#6667](https://github.com/nocobase/nocobase/pull/6667)) par @mytharcher

- **[Gestionnaire d'emails]** Correction de l'impossibilité de synchroniser, de l'absence d'affichage du sujet et d'autres petits bugs par @jiannx
