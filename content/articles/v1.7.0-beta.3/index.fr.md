---
title: "NocoBase v1.7.0-beta.3 : Permet de définir une info-bulle personnalisée pour le bouton de connexion"
description: "Notes de version de la v1.7.0-beta.3"
---

### 🎉 Nouvelles fonctionnalités

- **[WeCom]** Permet de définir une info-bulle personnalisée pour le bouton de connexion par @2013xile

### 🚀 Améliorations

- **[Visualisation de données]** Remplacement du `x-designer` obsolète par `x-settings` ([#6442](https://github.com/nocobase/nocobase/pull/6442)) par @2013xile

### 🐛 Corrections de bugs

- **[client]** Correction d'un caractère spécial dans l'URL d'une image empêchant son affichage ([#6459](https://github.com/nocobase/nocobase/pull/6459)) par @mytharcher

- **[Workflow : Nœud manuel]** Correction d'une erreur levée lors de la migration ([#6445](https://github.com/nocobase/nocobase/pull/6445)) par @mytharcher

- **[Workflow : Événement d'action personnalisée]** Suppression de `only` dans un cas de test E2E par @mytharcher

- **[Workflow : Approbation]**
  - Correction d'une erreur levée lors de l'approbation sur une source de données externe par @mytharcher

  - Correction des données d'association non affichées dans le formulaire d'approbation par @mytharcher
