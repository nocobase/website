---
title: "NocoBase v1.6.3 : Permet de définir une info-bulle personnalisée pour le bouton de connexion"
description: "Notes de version de la v1.6.3"
---

### 🎉 Nouvelles fonctionnalités

- **[WeCom]** Permet de définir une info-bulle personnalisée pour le bouton de connexion par @2013xile

### 🐛 Corrections de bugs

- **[client]**
  - Correction d'un caractère spécial dans l'URL d'une image empêchant son affichage ([#6459](https://github.com/nocobase/nocobase/pull/6459)) par @mytharcher

  - Numéro de page incorrect lors de l'ajout de données après un changement de taille de page dans un sous-tableau ([#6437](https://github.com/nocobase/nocobase/pull/6437)) par @katherinehhh

  - Le style du logo est incohérent avec le précédent ([#6444](https://github.com/nocobase/nocobase/pull/6444)) par @zhangzhonghe

- **[Workflow : Nœud manuel]** Correction d'une erreur levée lors de la migration ([#6445](https://github.com/nocobase/nocobase/pull/6445)) par @mytharcher

- **[Visualisation des données]** Les champs supprimés réapparaissent lors de l'ajout de champs de filtre personnalisés ([#6450](https://github.com/nocobase/nocobase/pull/6450)) par @2013xile

- **[Gestionnaire de fichiers]** Correction de quelques problèmes du gestionnaire de fichiers ([#6436](https://github.com/nocobase/nocobase/pull/6436)) par @mytharcher

- **[Action : Requête personnalisée]** Erreur de validation des permissions côté serveur pour les requêtes personnalisées ([#6438](https://github.com/nocobase/nocobase/pull/6438)) par @katherinehhh

- **[Gestionnaire de sources de données]** Le changement de source de données dans la gestion des rôles ne charge pas les collections correspondantes ([#6431](https://github.com/nocobase/nocobase/pull/6431)) par @katherinehhh

- **[Action : Modification par lot]** Correction de l'impossibilité de déclencher un workflow lors de la soumission d'une modification par lot ([#6440](https://github.com/nocobase/nocobase/pull/6440)) par @mytharcher

- **[Workflow : Événement d'action personnalisée]** Suppression de `only` dans un cas de test E2E par @mytharcher

- **[Workflow : Approbation]**
  - Correction de l'absence d'affichage des données associées dans le formulaire d'approbation par @mytharcher

  - Correction d'une erreur levée lors de l'approbation sur une source de données externe par @mytharcher
