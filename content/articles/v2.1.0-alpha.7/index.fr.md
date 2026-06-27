---
title: "NocoBase v2.1.0-alpha.7 : Prise en charge de la recherche dans la documentation intégrée avec plusieurs mots-clés et de la lecture de plusieurs documents en un seul appel d'outil"
description: "Notes de version de v2.1.0-alpha.7"
---

### 🎉 Nouvelles fonctionnalités

- **[Employés IA]** Prise en charge de la recherche dans la documentation intégrée avec plusieurs mots-clés et lecture de plusieurs documents lors d'un seul appel d'outil ([#8718](https://github.com/nocobase/nocobase/pull/8718)) par @2013xile

### 🚀 Améliorations

- **[Employés IA]** Mise à jour de l'invite utilisateur de la boîte de dialogue IA ([#8717](https://github.com/nocobase/nocobase/pull/8717)) par @heziqiang

### 🐛 Corrections de bugs

- **[client]** Sur mobile, fermer d'abord le menu, puis effectuer la navigation vers la page ([#8699](https://github.com/nocobase/nocobase/pull/8699)) par @zhangzhonghe

- **[IA LLM : GigaChat]** Correction du plugin GigaChat qui ne fonctionnait pas dans la version 2.0. ([#8707](https://github.com/nocobase/nocobase/pull/8707)) par @cgyrock

- **[Employés IA]**
  - Correction d'une erreur de conversation IA lors de l'utilisation d'une base de données MySQL. ([#8708](https://github.com/nocobase/nocobase/pull/8708)) par @cgyrock

  - Uniformisation de l'entrée de fichier pour les API chatGPT utilisant ContentBlock ([#8696](https://github.com/nocobase/nocobase/pull/8696)) par @cgyrock

  - Correction d'une erreur de l'agent IA lorsque l'utilisateur envoie un nouveau message sans confirmer l'exécution de l'outil ([#8697](https://github.com/nocobase/nocobase/pull/8697)) par @cgyrock

- **[IA : Base de connaissances]** Correction d'une erreur de démarrage du plugin de base de connaissances IA. par @cgyrock

- **[Gestionnaire d'emails]** Erreur de rendu d'image par @jiannx
