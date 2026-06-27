---
title: "NocoBase v2.0.59 : Corrections de bugs"
description: "Notes de version de la v2.0.59"
---

### 🐛 Corrections de bugs

* **[IA]** Les dépendances LangChain ont été verrouillées sur des versions stables pour éviter les échecs d'appels d'outils du modèle Ollama et ne pas affecter les versions amont concernées. ([#9604](https://github.com/nocobase/nocobase/pull/9604)) par @cgyrock
* **[Moteur de flux]** Correction du niveau de journalisation incorrect dans le frontend. ([#9577](https://github.com/nocobase/nocobase/pull/9577)) par @gchust
* **[Collection : Arborescence]** Correction des messages d'erreur peu clairs lorsque les requêtes échouaient en raison de relations parent-enfant circulaires dans les données arborescentes. ([#9603](https://github.com/nocobase/nocobase/pull/9603)) par @zhangzhonghe
* **[IA : Base de connaissances]** Les dépendances LangChain ont été verrouillées sur des versions stables pour éviter les échecs d'appels d'outils du modèle Ollama et ne pas affecter les versions amont concernées. par @cgyrock
