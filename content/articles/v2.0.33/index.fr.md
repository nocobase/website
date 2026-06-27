---
title: "NocoBase v2.0.33 : Ajout d'un outil de recherche web basé sur LLIM pour les employés IA"
description: "Notes de version de la v2.0.33"
---

### 🎉 Nouvelles fonctionnalités

- **[Employés IA]** Ajout d'un outil de recherche web basé sur LLM pour les employés IA ([#9032](https://github.com/nocobase/nocobase/pull/9032)) par @cgyrock

### 🐛 Corrections de bugs

- **[client]**
  - Correction d'un problème où un message de confirmation de modifications non enregistrées incorrect apparaissait pour l'action d'édition en masse ([#9054](https://github.com/nocobase/nocobase/pull/9054)) par @gchust

  - Correction d'un problème où une fenêtre contextuelle de confirmation secondaire incorrecte apparaissait lors de la soumission du formulaire après la création d'un enregistrement via un sous-tableau contextuel. ([#9035](https://github.com/nocobase/nocobase/pull/9035)) par @gchust

- **[gestionnaire-de-sources-de-données]** Correction d'un problème où certains types de champs n'étaient pas correctement mis à jour après la synchronisation des champs depuis la base de données ([#9046](https://github.com/nocobase/nocobase/pull/9046)) par @2013xile

- **[Employés IA]** Correction d'un échec de téléchargement de documents des employés IA en cas d'accès à un sous-chemin avec APP_PUBLIC_PATH configuré. ([#9034](https://github.com/nocobase/nocobase/pull/9034)) par @cgyrock
