---
title: "NocoBase v1.7.0-beta.30 : Corrections de bugs"
description: "Notes de version de v1.7.0-beta.30"
---

### 🐛 Corrections de bugs

- **[client]**
  - Lorsque le composant de champ de relation du formulaire de filtre est changé en sélecteur de données, il n'y a pas d'élément de configuration « Autoriser la sélection multiple » ([#6656](https://github.com/nocobase/nocobase/pull/6656)) par @zhangzhonghe

  - Sélecteur de tableau dans le formulaire de filtre, style anormal ([#6827](https://github.com/nocobase/nocobase/pull/6827)) par @zhangzhonghe

  - Dans les sous-pages imbriquées, la liste des blocs ne s'affiche pas lorsque la souris survole le bouton « Ajouter un bloc » ([#6832](https://github.com/nocobase/nocobase/pull/6832)) par @zhangzhonghe

  - Échec de la soumission d'un champ d'association multiple lors de l'affichage des champs de la collection d'association ([#6833](https://github.com/nocobase/nocobase/pull/6833)) par @katherinehhh

  - Impossible de faire glisser d'autres boutons sur le bouton de duplication ([#6822](https://github.com/nocobase/nocobase/pull/6822)) par @katherinehhh

  - Problème de style de la barre de pagination du sous-tableau en mode lecture seule ([#6830](https://github.com/nocobase/nocobase/pull/6830)) par @katherinehhh

- **[base de données]** Correction du chargement de l'association « appartient à » dans les ajouts lorsque la clé étrangère est de type bigInt sous MariaDB ([#6823](https://github.com/nocobase/nocobase/pull/6823)) par @mytharcher

- **[Champ de collection : Pièce jointe (URL)]** Les champs de pièce jointe (URL) ne doivent pas autoriser la configuration de valeur dans les règles de liaison ([#6831](https://github.com/nocobase/nocobase/pull/6831)) par @katherinehhh
