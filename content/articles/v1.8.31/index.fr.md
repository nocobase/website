---
title: "NocoBase v1.8.31 : Corrections de bugs"
description: "Notes de version de la v1.8.31"
---

### 🐛 Corrections de bugs

- **[base de données]** Correction de l'erreur levée lorsque l'opérateur `$in` rencontre une valeur `null` ([#7610](https://github.com/nocobase/nocobase/pull/7610)) par @mytharcher

- **[Workflow : Approbation]**
  - Correction du problème de délai d'attente des transactions causé par des transactions qui ne se restaurent pas correctement lorsque des erreurs de base de données surviennent après la soumission d'une approbation par @mytharcher

  - Correction du problème où les variables ne sont pas analysées dans le formulaire de soumission d'approbation par @mytharcher
