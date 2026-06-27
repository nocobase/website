---
title: "NocoBase v2.1.0-alpha.24 : Ajustement de l'interaction de configuration des compétences/outils pour les instructions de l'employé IA"
description: "Notes de version de v2.1.0-alpha.24"
---

### 🚀 Améliorations

- **[non défini]** Amélioration du guide d'installation de l'Agent IA pour empêcher les agents de contourner l'assistant `--ui` et pour détecter automatiquement les gestionnaires de versions Node. ([#9243](https://github.com/nocobase/nocobase/pull/9243)) par @Molunerfinn

- **[Employés IA]**
  - Ajustement de l'interaction de configuration des compétences/outils pour les instructions des employés IA ([#9232](https://github.com/nocobase/nocobase/pull/9232)) par @cgyrock

  - Suppression du modèle recommandé dans la configuration du service LLM ([#9228](https://github.com/nocobase/nocobase/pull/9228)) par @cgyrock

- **[Workflow : JavaScript]** Mise à niveau des images Docker, des workflows CI et de la dépendance du bac à sable JavaScript du workflow pour la compatibilité avec Node.js 22. ([#9245](https://github.com/nocobase/nocobase/pull/9245)) par @Molunerfinn

### 🐛 Corrections de bugs

- **[non défini]** Correction du sélecteur de langue générant des URL incorrectes (ex : `/cn/es/` au lieu de `/es/`) sur le site de documentation. ([#9233](https://github.com/nocobase/nocobase/pull/9233)) par @Molunerfinn

- **[Employés IA]**
  - Correction de l'erreur dans l'API de récupération de la liste des employés IA ([#9241](https://github.com/nocobase/nocobase/pull/9241)) par @cgyrock

  - Affinement du comportement de délégation des tâches d'Atlas et mise à jour de Viz pour utiliser le workflow de rapports métier pour les demandes de rapports ([#9229](https://github.com/nocobase/nocobase/pull/9229)) par @2013xile
