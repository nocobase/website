---
title: "NocoBase v2.0.58 : Ajout d'une API administrateur pour relancer les exécutions de workflows démarrés depuis le début ou un nœud spécifié"
description: "Notes de version de la v2.0.58"
---

### 🎉 Nouvelles fonctionnalités

- **[Workflow]** Ajout d'une API administrateur pour relancer des exécutions de workflow démarrées depuis le début ou un nœud spécifié. ([#9569](https://github.com/nocobase/nocobase/pull/9569)) par @mytharcher

### 🚀 Améliorations

- **[client]** Suppression de l'option Masqué dans les paramètres des éléments de menu ([#9595](https://github.com/nocobase/nocobase/pull/9595)) par @zhangzhonghe

### 🐛 Corrections de bugs

- **[client]**
  - Correction de la synchronisation de la valeur du sélecteur de date mobile dans les popups ([#9582](https://github.com/nocobase/nocobase/pull/9582)) par @katherinehhh

  - Correction de la conservation du format horaire pour les champs de temps v2 ([#9579](https://github.com/nocobase/nocobase/pull/9579)) par @katherinehhh

  - Augmentation de la limite de téléchargement d'images par scan ([#9580](https://github.com/nocobase/nocobase/pull/9580)) par @katherinehhh

  - Correction de la synchronisation de l'état masqué pour les liaisons de sous-formulaires ([#9594](https://github.com/nocobase/nocobase/pull/9594)) par @katherinehhh

  - Correction d'un problème où le sous-tableau dans un sous-formulaire ne pouvait pas ajouter une deuxième ligne ([#9586](https://github.com/nocobase/nocobase/pull/9586)) par @katherinehhh

  - Correction de la disparition des onglets de page après avoir changé de menu ([#9583](https://github.com/nocobase/nocobase/pull/9583)) par @zhangzhonghe

- **[moteur de workflow]** Correction d'un problème où les règles de liaison des actions de tableau s'exécutaient incorrectement après la soumission réussie d'un formulaire dans une popup. ([#9445](https://github.com/nocobase/nocobase/pull/9445)) par @gchust

- **[Workflow : Événement d'action personnalisée]** Correction des boutons d'action personnalisée de tableau avec contexte d'enregistrements multiples permettant incorrectement la sélection de workflows de contexte personnalisé. ([#9608](https://github.com/nocobase/nocobase/pull/9608)) par @mytharcher

- **[Gestionnaire de fichiers]**
  - Correction de la normalisation des noms de fichiers Unicode lors des téléchargements pour éviter la génération de clés d'objet avec des caractères de contrôle. ([#9584](https://github.com/nocobase/nocobase/pull/9584)) par @mytharcher

  - Amélioration des messages d'échec de prévisualisation PDF et documentation des exigences CORS pour le stockage externe. ([#9600](https://github.com/nocobase/nocobase/pull/9600)) par @mytharcher
Référence : [Aperçu des fichiers](docs/docs/fr/file-manager/file-preview/index.md)
