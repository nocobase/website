---
title: "NocoBase v2.1.0-alpha.1 : Amélioration de l'interface d'affectation des champs date/heure pour prendre en charge la sélection de dates/heures relatives"
description: "Notes de version de v2.1.0-alpha.1"
---

### 🎉 Nouvelles fonctionnalités

- **[Action : Modification groupée]** Modification groupée 2.0 ([#8526](https://github.com/nocobase/nocobase/pull/8526)) par @jiannx

### 🚀 Améliorations

- **[client]**
  - Amélioration de l'interface d'affectation des champs de date/heure pour prendre en charge la sélection de dates/heures relatives. ([#8630](https://github.com/nocobase/nocobase/pull/8630)) par @gchust

  - Prise en charge de la spécification du champ de titre pour les champs d'association lors de l'affectation d'un champ. ([#8624](https://github.com/nocobase/nocobase/pull/8624)) par @gchust

  - Le tableau 2.0 prend en charge le tri par glisser-déposer ([#8540](https://github.com/nocobase/nocobase/pull/8540)) par @jiannx

  - Déplacement des paramètres d'affectation des champs et de valeur par défaut vers la configuration au niveau du formulaire. ([#8596](https://github.com/nocobase/nocobase/pull/8596)) par @chenos

- **[Localisation]** Création automatique des clés i18n manquantes ([#8588](https://github.com/nocobase/nocobase/pull/8588)) par @jiannx

### 🐛 Corrections de bugs

- **[moteur de workflow]** Correction d'un problème où le sous-menu du champ de filtre ne pouvait pas être développé en présence d'un mot-clé de recherche. ([#8604](https://github.com/nocobase/nocobase/pull/8604)) par @gchust

- **[client]**
  - Correction d'un problème où l'affectation d'un seul enregistrement à un champ de relation plusieurs-à-plusieurs produisait des résultats incorrects. ([#8652](https://github.com/nocobase/nocobase/pull/8652)) par @gchust

  - Analyse de la date à l'aide du sélecteur de date et ajout de la validation de la force du mot de passe, etc. ([#8647](https://github.com/nocobase/nocobase/pull/8647)) par @jiannx

  - Correction du problème d'espacement causé par les actions liées masquées dans la colonne d'actions du tableau ([#8646](https://github.com/nocobase/nocobase/pull/8646)) par @zhangzhonghe

  - Correction d'une erreur de syntaxe lors du rendu d'un Liquid invalide dans un élément Markdown ([#8637](https://github.com/nocobase/nocobase/pull/8637)) par @katherinehhh

  - Correction des requêtes d'analyse inutiles côté serveur pour les propriétés de champs de type « vers-plusieurs » dans le bloc formulaire. ([#8636](https://github.com/nocobase/nocobase/pull/8636)) par @gchust

  - Correction du problème où `Action.Modal` ne pouvait pas être fermé après certaines interactions ([#8642](https://github.com/nocobase/nocobase/pull/8642)) par @mytharcher

  - Correction du format numérique manquant pour les champs de formule numérique et des paramètres de format de date pour les champs de formule de date ([#8625](https://github.com/nocobase/nocobase/pull/8625)) par @katherinehhh

  - Correction du rendu incomplet de la bordure supérieure sur le premier élément du formulaire ([#8623](https://github.com/nocobase/nocobase/pull/8623)) par @katherinehhh

  - Correction du problème où le champ de pièce jointe d'association vidé n'était pas enregistré après soumission dans un formulaire d'édition ([#8616](https://github.com/nocobase/nocobase/pull/8616)) par @katherinehhh

  - Correction des données filtrées incorrectes dans la liste déroulante d'association lorsque le champ de titre est une clé étrangère ([#8619](https://github.com/nocobase/nocobase/pull/8619)) par @katherinehhh

  - Correction de l'impossibilité de restaurer les données sélectionnées dans le composant de champ de sélection d'enregistrement après modification ([#8610](https://github.com/nocobase/nocobase/pull/8610)) par @katherinehhh

  - Correction du problème où les options du composant de champ n'étaient pas actualisées en temps réel lorsque le champ d'association changeait de motif ([#8611](https://github.com/nocobase/nocobase/pull/8611)) par @katherinehhh

- **[utils]** Correction d'un problème de sécurité du moteur d'évaluation `formula.js` ([#8416](https://github.com/nocobase/nocobase/pull/8416)) par @mytharcher

- **[Employés IA]**
  - Correction d'un problème où les liens de citation provenant de recherches web IA n'étaient pas affichés dans la boîte de discussion ([#8651](https://github.com/nocobase/nocobase/pull/8651)) par @cgyrock

  - Correction d'une erreur de paramètres de l'API OpenAI ([#8633](https://github.com/nocobase/nocobase/pull/8633)) par @cgyrock

- **[Gestionnaire de fichiers]** Correction du problème où le composant de champ fichier pouvait encore ouvrir la boîte de dialogue du sélecteur lorsqu'il était désactivé ([#8617](https://github.com/nocobase/nocobase/pull/8617)) par @katherinehhh
