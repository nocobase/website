---
title: "NocoBase v1.8.1 : Corrections de bugs"
description: "Notes de version de la v1.8.1"
---

### 🐛 Corrections de bugs

- **[client]**
  - L'affichage du champ case à cocher est incorrect dans la collection de champs de l'association au sein du formulaire ([#7176](https://github.com/nocobase/nocobase/pull/7176)) par @zhangzhonghe

  - Correction du problème où cliquer sur les boutons ne permettait pas d'ouvrir les fenêtres contextuelles ([#7180](https://github.com/nocobase/nocobase/pull/7180)) par @zhangzhonghe

- **[Workflow : Nœud manuel]** Correction d'une erreur levée lors de l'utilisation d'une variable ([#7177](https://github.com/nocobase/nocobase/pull/7177)) par @mytharcher

- **[Impression de modèle]** Ajout d'un script de migration pour le champ rootDataType par @jiannx

- **[Workflow : Approbation]** Correction de la branche approuvée qui ne s'exécutait pas lorsqu'aucun assigné n'était défini par @mytharcher
