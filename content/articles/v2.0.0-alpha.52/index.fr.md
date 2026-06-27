---
title: "NocoBase v2.0.0-alpha.52 : ajout de la prise en charge des paramètres d'ajout/sélection/dissociation dans le sous-formulaire plusieurs-à-plusieurs"
description: "Notes de version de v2.0.0-alpha.52"
---

### 🎉 Nouvelles fonctionnalités

- **[client]** ajout de la prise en charge des paramètres d'ajout/sélection/dissociation dans le sous-formulaire de type plusieurs-à-plusieurs ([#8099](https://github.com/nocobase/nocobase/pull/8099)) par @katherinehhh

- **[Source de données : API REST]** ajout de l'option `transformateur de message d'erreur` dans la configuration de la source de données API RESTful par @cgyrock

### 🚀 Améliorations

- **[auth]** Correction de [CVE-2025-13877](https://www.cve.org/CVERecord?id=CVE-2025-13877) ([#8128](https://github.com/nocobase/nocobase/pull/8128)) par @2013xile

- **[Action : Importer des enregistrements]**
  - autorisation de sélectionner l'ID pour les champs d'importation ([#8133](https://github.com/nocobase/nocobase/pull/8133)) par @katherinehhh

  - autorisation de sélectionner l'ID pour les champs d'importation ([#8132](https://github.com/nocobase/nocobase/pull/8132)) par @katherinehhh

- **[Workflow : Approbation]** Modification de l'API pour obtenir un seul élément d'approbation et simplification du code par @mytharcher

### 🐛 Corrections de bugs

- **[client]**
  - correction empêchant l'état désactivé des enfants de bloquer la sélection des champs de relation ([#8131](https://github.com/nocobase/nocobase/pull/8131)) par @katherinehhh

  - Correction du problème où le composant `RemoteSelect` chargeait incorrectement un enregistrement lorsque la valeur est nulle ([#8137](https://github.com/nocobase/nocobase/pull/8137)) par @mytharcher

  - Correction d'un problème où la largeur du composant d'interface utilisateur était incohérente lors de la sélection de « Passé » ou « Suivant » pour les champs de filtre de date. ([#8130](https://github.com/nocobase/nocobase/pull/8130)) par @gchust

  - Correction d'un problème où les libellés de champ par défaut dans le bloc de formulaire de filtre ne pouvaient pas être correctement traduits dans plusieurs langues. ([#8135](https://github.com/nocobase/nocobase/pull/8135)) par @gchust

  - Correction d'un problème où les styles de titre et de description du bloc JS étaient incohérents avec les autres blocs. ([#8115](https://github.com/nocobase/nocobase/pull/8115)) par @gchust

  - correction du sous-tableau imbriqué dans un sous-formulaire n'affichant pas les données ([#8117](https://github.com/nocobase/nocobase/pull/8117)) par @katherinehhh

  - correction du problème de saut de ligne dans l'infobulle du champ de texte long ([#8122](https://github.com/nocobase/nocobase/pull/8122)) par @katherinehhh

  - Correction d'un problème où les données sélectionnables pour les champs d'association dans le bloc de formulaire de filtre étaient incorrectes. ([#8109](https://github.com/nocobase/nocobase/pull/8109)) par @gchust

  - Correction d'un problème où les options sélectionnables n'étaient pas entièrement listées lors de l'utilisation des opérateurs « est l'un de » ou « n'est aucun de » pour le filtrage basé sur les champs d'options. ([#8118](https://github.com/nocobase/nocobase/pull/8118)) par @gchust

  - Correction d'un problème où les configurations de champs personnalisés dans le formulaire de filtre n'étaient pas correctement pré-remplies et certains paramètres ne prenaient pas effet. ([#8106](https://github.com/nocobase/nocobase/pull/8106)) par @gchust

  - Correction d'un problème où l'effacement des valeurs de filtre de temps entre deux dates et le déclenchement à nouveau du filtre provoquaient une erreur. ([#8110](https://github.com/nocobase/nocobase/pull/8110)) par @gchust

  - Correction d'un problème où la valeur du champ numérique n'était pas correctement pré-remplie dans l'action de filtre. ([#8104](https://github.com/nocobase/nocobase/pull/8104)) par @gchust

  - Correction d'un problème où certains opérateurs de champ dans les formulaires de filtre ne parvenaient pas à filtrer correctement les données. ([#8100](https://github.com/nocobase/nocobase/pull/8100)) par @gchust

  - Correction d'un problème où le filtrage sur les champs de case à cocher ne prenait pas effet. ([#8103](https://github.com/nocobase/nocobase/pull/8103)) par @gchust

- **[moteur de workflow]**
  - correction : conversion incorrecte lors de l'utilisation d'un type entier comme options d'énumération ([#8138](https://github.com/nocobase/nocobase/pull/8138)) par @chenos

  - Correction des éléments de menu de sous-modèle activables/désactivables échouant lorsque `useModel` est omis en le déduisant de `createModelOptions.use` ([#8105](https://github.com/nocobase/nocobase/pull/8105)) par @zhangzhonghe

- **[serveur]** Correction d'un problème où les workflows déclenchés n'étaient pas ajoutés à la file d'attente de traitement après l'importation de données, garantissant ainsi que les workflows s'exécutent comme prévu immédiatement après l'importation ([#8121](https://github.com/nocobase/nocobase/pull/8121)) par @mytharcher

- **[Notification : Email]** correction de la limitation de connexion pour les notifications par e-mail ([#8119](https://github.com/nocobase/nocobase/pull/8119)) par @jiannx

- **[Champ de collection : Formule]** Correction d'un problème où les champs de formule dans l'action de filtre et le bloc de formulaire de filtre ne permettaient pas de saisir des valeurs. ([#8102](https://github.com/nocobase/nocobase/pull/8102)) par @gchust

- **[Multi-espace]** Correction de la création d'autres champs dans la collection système par @jiannx
