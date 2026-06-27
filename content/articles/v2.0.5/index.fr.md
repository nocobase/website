---
title: "NocoBase v2.0.5 : Correction du plugin GigaChat qui ne fonctionnait pas dans la version 2.0"
description: "Notes de version de la v2.0.5"
---

### 🐛 Corrections de bugs

- **[client]** Sur mobile, fermer d'abord le menu, puis effectuer la navigation vers la page ([#8699](https://github.com/nocobase/nocobase/pull/8699)) par @zhangzhonghe

- **[IA LLM : GigaChat]** Correction du plugin GigaChat qui ne fonctionnait pas dans la version 2.0. ([#8707](https://github.com/nocobase/nocobase/pull/8707)) par @cgyrock

- **[Employés IA]**
  - Uniformisation de l'entrée de fichiers pour les API ChatGPT à l'aide de ContentBlock ([#8696](https://github.com/nocobase/nocobase/pull/8696)) par @cgyrock

  - Correction d'une erreur de l'agent IA lorsque l'utilisateur envoie un nouveau message sans confirmer l'exécution de l'outil ([#8697](https://github.com/nocobase/nocobase/pull/8697)) par @cgyrock

- **[IA : Base de connaissances]** Correction d'une erreur de démarrage du plugin de base de connaissances IA. par @cgyrock

- **[Gestionnaire d'emails]** Erreur de rendu d'image par @jiannx
