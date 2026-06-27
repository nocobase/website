---
title: "NocoBase v1.8.17 : Prise en charge de l'utilisation d'un titre de tâche cohérent pour tous les nœuds d'approbation dans un même workflow"
description: "Notes de version de la v1.8.17"
---

### 🎉 Nouvelles fonctionnalités

- **[Workflow : Approbation]** Possibilité d'utiliser un titre de tâche cohérent pour tous les nœuds d'approbation dans un même workflow par @mytharcher

### 🚀 Améliorations

- **[Authentification]** Suppression du paramètre token de l'URL après une connexion réussie ([#7386](https://github.com/nocobase/nocobase/pull/7386)) par @2013xile

- **[Impression de modèle]** Prise en charge du champ m2m array par @jiannx

### 🐛 Corrections de bugs

- **[Mobile]** Correction du problème où les données de soumission de formulaire dans la boîte de dialogue d'approbation mobile étaient incorrectes ([#7389](https://github.com/nocobase/nocobase/pull/7389)) par @zhangzhonghe

- **[Workflow]** Correction de la traduction du titre de page dans le centre des tâches de workflow ([#7392](https://github.com/nocobase/nocobase/pull/7392)) par @mytharcher

- **[Calendrier]** L'infobulle de l'élément d'événement du calendrier affichait [object Object] ([#7372](https://github.com/nocobase/nocobase/pull/7372)) par @katherinehhh

- **[Notification : Message intégré]** Correction des traductions ([#7384](https://github.com/nocobase/nocobase/pull/7384)) par @mytharcher

- **[Gestionnaire de fichiers]** Suppression de l'indication concernant la limite de taille de téléchargement de fichiers ([#7391](https://github.com/nocobase/nocobase/pull/7391)) par @mytharcher

- **[Stockage de fichiers : S3(Pro)]**
  - Dépréciation du paramètre problématique `attachmentField` par @mytharcher

  - Correction du problème où la méthode d'authentification IAM ne pouvait pas être utilisée pour télécharger des fichiers par @mytharcher
