---
title: "NocoBase v2.0.0-beta.23 : prise en charge de la hauteur de bloc configurable"
description: "Notes de version de v2.0.0-beta.23"
---

### 🎉 Nouvelles fonctionnalités

- **[Bloc : Grille de cartes]** hauteur de bloc configurable ([#8583](https://github.com/nocobase/nocobase/pull/8583)) par @katherinehhh

- **[Action : Modification groupée]** édition groupée 2.0 ([#8526](https://github.com/nocobase/nocobase/pull/8526)) par @jiannx

### 🚀 Améliorations

- **[client]**
  - Tableau 2.0 prend en charge le tri par glisser-déposer ([#8540](https://github.com/nocobase/nocobase/pull/8540)) par @jiannx

  - Déplacement des paramètres d'affectation de champ et de valeur par défaut vers la configuration au niveau du formulaire. ([#8596](https://github.com/nocobase/nocobase/pull/8596)) par @chenos

- **[Localisation]** création automatique des clés i18n manquantes ([#8588](https://github.com/nocobase/nocobase/pull/8588)) par @jiannx

### 🐛 Corrections de bugs

- **[client]**
  - correction des données filtrées incorrectes dans la liste déroulante d'association lorsque le champ titre est une clé étrangère ([#8619](https://github.com/nocobase/nocobase/pull/8619)) par @katherinehhh

  - Correction du problème où le champ de pièce jointe d'association vidé n'est pas enregistré après soumission dans le formulaire d'édition ([#8616](https://github.com/nocobase/nocobase/pull/8616)) par @katherinehhh

  - Correction des options de composant de champ non actualisées en temps réel lorsque le champ d'association change de motif ([#8611](https://github.com/nocobase/nocobase/pull/8611)) par @katherinehhh

  - Correction d'un problème où les colonnes du tableau ne se réaffichaient pas après avoir cliqué sur Exécuter dans l'éditeur de colonne JS. ([#8608](https://github.com/nocobase/nocobase/pull/8608)) par @gchust

  - correction de l'impossibilité de restaurer les données sélectionnées dans le composant de champ sélecteur d'enregistrement après édition ([#8610](https://github.com/nocobase/nocobase/pull/8610)) par @katherinehhh

- **[Gestionnaire de fichiers]** correction du problème où le composant de champ fichier peut encore ouvrir la boîte de dialogue de sélection lorsqu'il est désactivé ([#8617](https://github.com/nocobase/nocobase/pull/8617)) par @katherinehhh

- **[Visualisation de données : ECharts]** Correction d'une erreur d'orthographe dans ECharts par @heziqiang

- **[Workflow : Approbation]**
  - Correction du problème où des valeurs manquaient dans la fenêtre contextuelle de détail de « Ma demande » par @mytharcher

  - Correction d'une erreur levée lors de l'exécution en mode avant sauvegarde par @mytharcher
