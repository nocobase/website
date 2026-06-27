---
title: "NocoBase v2.0.0-alpha.29 : Correction de l'ordre des middlewares de `resourceManager`"
description: "Notes de version de v2.0.0-alpha.29"
---

### 🐛 Corrections de bugs

- **[client]**
  - Résolution d'un problème où la variable de champ d'association dans le formulaire actuel ne pouvait pas être correctement identifiée, garantissant un traitement précis des données dans les formulaires. ([#7726](https://github.com/nocobase/nocobase/pull/7726)) par @gchust

  - Résolution d'un problème où l'affectation d'un tableau comme valeur ou valeur par défaut à un champ "toOne" entraînait une erreur. Cela garantit une gestion correcte des résultats de résolution de variables, améliorant la stabilité et la précision du système. ([#7735](https://github.com/nocobase/nocobase/pull/7735)) par @gchust

- **[Contrôle d'accès]** Correction de l'ordre des middlewares de `resourceManager` ([#7728](https://github.com/nocobase/nocobase/pull/7728)) par @2013xile
