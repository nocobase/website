---
title: "NocoBase v1.6.26 : Le bloc Iframe prend en charge la configuration de l'attribut allow"
description: "Notes de version de la v1.6.26"
---

### 🎉 Nouvelles fonctionnalités

- **[Bloc : iframe]** Le bloc iframe prend désormais en charge la configuration de l'attribut allow ([#6824](https://github.com/nocobase/nocobase/pull/6824)) par @zhangzhonghe

- **[Impression de modèle]** Fonctionnalité : Prise en charge des options Select `{ label, value }` dans l'impression de modèle. par @sheldon66

### 🐛 Corrections de bugs

- **[client]**
  - Dans les sous-pages imbriquées, la liste des blocs ne s'affiche pas lorsque la souris survole le bouton "Ajouter un bloc" ([#6832](https://github.com/nocobase/nocobase/pull/6832)) par @zhangzhonghe

  - Lorsque le composant de champ de relation du formulaire de filtre est changé en sélecteur de données, il n'y a pas d'élément de configuration "Autoriser la sélection multiple" ([#6656](https://github.com/nocobase/nocobase/pull/6656)) par @zhangzhonghe

  - Plusieurs messages d'erreur affichés lorsqu'une règle de validation est violée dans les champs du formulaire ([#6805](https://github.com/nocobase/nocobase/pull/6805)) par @katherinehhh

  - Problème de configuration des règles de liaison dans un sous-formulaire (popup) à l'intérieur d'un sous-tableau ([#6803](https://github.com/nocobase/nocobase/pull/6803)) par @katherinehhh

  - Correction du problème où les sous-champs d'un champ un-à-plusieurs ne peuvent pas être sélectionnés comme options de filtrage dans les formulaires de filtre ([#6809](https://github.com/nocobase/nocobase/pull/6809)) par @zhangzhonghe

  - Problème de style de la barre de pagination du sous-tableau en mode lecture seule ([#6830](https://github.com/nocobase/nocobase/pull/6830)) par @katherinehhh

  - Sélecteur de tableau dans le formulaire de filtre, style anormal ([#6827](https://github.com/nocobase/nocobase/pull/6827)) par @zhangzhonghe

- **[base de données]**
  - Correction de l'association belongs-to non chargée dans les appends lorsque la clé étrangère est bigInt sous MariaDB ([#6823](https://github.com/nocobase/nocobase/pull/6823)) par @mytharcher

  - Correction des cas de test ([#6811](https://github.com/nocobase/nocobase/pull/6811)) par @mytharcher

- **[Champ de collection : Pièce jointe (URL)]** Les champs de pièce jointe (URL) ne doivent pas permettre la configuration de valeur dans une règle de liaison ([#6831](https://github.com/nocobase/nocobase/pull/6831)) par @katherinehhh

- **[Workflow : Événement d'action personnalisée]** Problème de liaison d'action de workflow déclenché par @katherinehhh
