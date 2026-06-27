---
title: "NocoBase v2.1.8 : Verrouillage de `@langchain/openai` aux mises à jour de niveau correctif pour les packages IA"
description: "Notes de version de la v2.1.8"
---

### 🐛 Corrections de bogues

- **[IA]**

  - Verrouillage de `@langchain/openai` aux mises à jour de niveau correctif pour les paquets IA. ([#9829](https://github.com/nocobase/nocobase/pull/9829)) par @cgyrock
  - Correction de la résolution incompatible des dépendances LangChain pour les plugins IA. ([#9831](https://github.com/nocobase/nocobase/pull/9831)) par @cgyrock
- **[IA : Base de connaissances]**

  - Correction des messages d'erreur peu clairs lors de l'activation du plugin de base de connaissances IA sans que le plugin IA soit disponible. par @cgyrock
  - Correction de la résolution incompatible des dépendances LangChain pour le plugin de base de connaissances IA. par @cgyrock
