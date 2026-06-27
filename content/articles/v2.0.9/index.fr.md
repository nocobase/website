---
title: "NocoBase v2.0.9 : Correction du problème où le composant CollectionField ne s'affichait pas dans le composant DefaultValue"
description: "Notes de version de la v2.0.9"
---

### 🐛 Corrections de bugs

- **[client]**
  - Correction du problème où le composant CollectionField ne s'affichait pas dans le composant DefaultValue ([#8744](https://github.com/nocobase/nocobase/pull/8744)) par @mytharcher

  - Correction d'un problème où le bloc de données ne se rafraîchissait pas lors du changement de menu. ([#8735](https://github.com/nocobase/nocobase/pull/8735)) par @gchust

- **[database]** Correction d'un échec de validation personnalisée des expressions régulières dans la v2 ([#8729](https://github.com/nocobase/nocobase/pull/8729)) par @jiannx

- **[moteur de flux]** Correction d'un problème où ctx.exit ne pouvait pas interrompre l'exécution des flux d'événements définis par l'utilisateur. ([#8737](https://github.com/nocobase/nocobase/pull/8737)) par @gchust

- **[Workflow : Approbation]** Ajout d'un paramètre manquant pour éviter que les associations ne soient pas mises à jour lors de la soumission d'une nouvelle approbation par @mytharcher
