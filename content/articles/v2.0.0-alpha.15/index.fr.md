---
title: "NocoBase v2.0.0-alpha.15 : Ajout de nouveaux fournisseurs LLM"
description: "Notes de version de v2.0.0-alpha.15"
---

### 🚀 Améliorations

- **[client]** Prise en charge des champs d'association dans le modèle de champ JS ([#7618](https://github.com/nocobase/nocobase/pull/7618)) par @gchust

- **[IA employés]**
  - Refonte du fournisseur LLM OpenAI en deux fournisseurs distincts pour prendre en charge les API Completions et Responses d'OpenAI. ([#7615](https://github.com/nocobase/nocobase/pull/7615)) par @cgyrock

  - Ajout d'un nouveau fournisseur LLM Ollama ([#7612](https://github.com/nocobase/nocobase/pull/7612)) par @ReLaMi96

### 🐛 Corrections de bugs

- **[Workflow : Approbation]**
  - Correction du problème où le nombre de tâches n'était pas mis à jour après l'ajout d'un assigné par @mytharcher

  - Correction du problème de délai d'attente des transactions causé par des transactions qui ne se rétablissaient pas correctement en cas d'erreurs de base de données après la soumission de l'approbation par @mytharcher
