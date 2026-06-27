---
title: "NocoBase v1.4.20 : Permet de trier les workflows lors de la liaison à un bouton d'action"
description: "Notes de version de v1.4.20"
---

### 🎉 Nouvelles fonctionnalités

- **[client]** Ajout de la méthode app.getHref() ([#6019](https://github.com/nocobase/nocobase/pull/6019)) par @chenos

### 🚀 Améliorations

- **[client]**
  - Possibilité de trier les workflows lors de la liaison à un bouton d'action ([#6017](https://github.com/nocobase/nocobase/pull/6017)) par @mytharcher

  - Modification des liens de référence des évaluateurs vers le site de documentation ([#6021](https://github.com/nocobase/nocobase/pull/6021)) par @mytharcher

  - Prise en charge de maxTagCount: 'responsive' dans le composant de liste déroulante multi-sélection ([#6007](https://github.com/nocobase/nocobase/pull/6007)) par @katherinehhh

  - Définition de l'heure de fin par défaut pour le composant de plage horaire dans le bloc de filtre à 23:59:59 ([#6012](https://github.com/nocobase/nocobase/pull/6012)) par @katherinehhh

- **[Action : Modification en masse]** Refonte du bouton de soumission du formulaire de modification en masse : suppression de l'affectation de champ et de la règle de liaison ([#6008](https://github.com/nocobase/nocobase/pull/6008)) par @katherinehhh

### 🐛 Corrections de bugs

- **[client]**
  - Correction de la validation obligatoire qui ne fonctionnait pas après la suppression de données dans l'éditeur de texte enrichi ([#6006](https://github.com/nocobase/nocobase/pull/6006)) par @katherinehhh

  - Correction du problème d'alignement lorsque les boutons de la colonne d'action sont masqués ([#6014](https://github.com/nocobase/nocobase/pull/6014)) par @katherinehhh

  - Correction du problème du bouton Créer des collections lors du clic sur l'onglet Collections dans la page API REST ([#5992](https://github.com/nocobase/nocobase/pull/5992)) par @katherinehhh

  - Correction du problème où targetKey ne pouvait pas sélectionner le champ NanoID dans une relation un-à-plusieurs ([#5999](https://github.com/nocobase/nocobase/pull/5999)) par @katherinehhh

  - Correction du style du bouton de paramètres dans le thème compact ([#6001](https://github.com/nocobase/nocobase/pull/6001)) par @katherinehhh

  - Correction du style du composant de liste ([#5998](https://github.com/nocobase/nocobase/pull/5998)) par @mytharcher

  - Correction du problème où les en-têtes inclus dans les requêtes client étaient écrasés ([#6009](https://github.com/nocobase/nocobase/pull/6009)) par @2013xile

  - Correction de foreignKey, targetKey et sourceKey pour prendre en charge le filtrage par caractères chinois ([#5997](https://github.com/nocobase/nocobase/pull/5997)) par @katherinehhh

- **[Action : Importer des enregistrements]** Correction de l'importation avec des associations plusieurs-à-plusieurs utilisant une clé cible différente ([#6024](https://github.com/nocobase/nocobase/pull/6024)) par @chareice

- **[Bloc : Carte]** Correction du champ de carte dans le bloc de détail qui doit s'afficher comme un bloc de carte ([#6010](https://github.com/nocobase/nocobase/pull/6010)) par @katherinehhh

- **[Intégration NocoBase]** Le jeton d'intégration entre en conflit avec l'authentification par @chenos
