---
title: "NocoBase v1.7.0-beta.17 : Prise en charge de l'actualisation des données dans d'autres blocs de données après la mise à jour des données dans un bloc"
description: "Notes de version de v1.7.0-beta.17"
---

### 🎉 Nouvelles fonctionnalités

- **[Départements]** Rendre les plugins Département, URL de pièce jointe et message de réponse de workflow gratuits ([#6663](https://github.com/nocobase/nocobase/pull/6663)) par @chenos

- **[Action : Mise à jour par lot]** Prendre en charge l'actualisation des données dans d'autres blocs de données après la mise à jour des données dans un bloc ([#6591](https://github.com/nocobase/nocobase/pull/6591)) par @zhangzhonghe

### 🚀 Améliorations

- **[Workflow]** Prendre en charge une URL de popup fixe pour les tâches de workflow ([#6640](https://github.com/nocobase/nocobase/pull/6640)) par @mytharcher

### 🐛 Corrections de bugs

- **[client]**
  - Le passage au menu de groupe ne doit pas sauter vers une page déjà masquée dans le menu ([#6654](https://github.com/nocobase/nocobase/pull/6654)) par @zhangzhonghe

  - Le formulaire de filtre ne doit pas afficher l'invite "Modifications non enregistrées" ([#6657](https://github.com/nocobase/nocobase/pull/6657)) par @zhangzhonghe

  - Correction du problème d'images d'aperçu masquées ([#6651](https://github.com/nocobase/nocobase/pull/6651)) par @zhangzhonghe

  - Dans le formulaire de filtre, lorsque le bouton de filtre est cliqué, si des champs n'ont pas passé la validation, le filtrage est tout de même déclenché ([#6659](https://github.com/nocobase/nocobase/pull/6659)) par @zhangzhonghe

  - L'option "autoriser plusieurs" ne fonctionne pas pour le champ de relation ([#6661](https://github.com/nocobase/nocobase/pull/6661)) par @katherinehhh

  - Dans le bloc de formulaire, la valeur par défaut de la configuration du champ s'affiche d'abord comme la chaîne de variable d'origine puis disparaît ([#6649](https://github.com/nocobase/nocobase/pull/6649)) par @zhangzhonghe

- **[Champ de collection : Pièce jointe (URL)]** autoriser uniquement les collections de fichiers avec un accès URL public ([#6664](https://github.com/nocobase/nocobase/pull/6664)) par @katherinehhh

- **[Stockage de fichiers : S3 (Pro)]**
  - Paramètres individuels baseurl et public, amélioration de l'UX de configuration du stockage S3 Pro par @jiannx

  - Organisation de la langue par @jiannx

- **[Workflow : Approbation]** Prendre en charge une URL fixe pour les éléments d'approbation dans le centre de tâches par @mytharcher

- **[Gestionnaire de migration]** l'option de saut de sauvegarde automatique devient invalide si la popup de variable d'environnement apparaît pendant la migration par @gchust
