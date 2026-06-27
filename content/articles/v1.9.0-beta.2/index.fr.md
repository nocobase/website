---
title: "NocoBase v1.9.0-beta.2 : Corrections de bugs"
description: "Notes de version de v1.9.0-beta.2"
---

### 🐛 Corrections de bugs

- **[client]**
  - L'affichage du champ case à cocher est incorrect dans la collection de champs de l'association au sein du formulaire ([#7176](https://github.com/nocobase/nocobase/pull/7176)) par @zhangzhonghe

  - Correction du problème où cliquer sur les boutons ne permettait pas d'ouvrir les fenêtres contextuelles ([#7180](https://github.com/nocobase/nocobase/pull/7180)) par @zhangzhonghe

- **[base de données]** Correction d'un problème où les champs des vues n'étaient pas affichés dans les blocs. ([#7162](https://github.com/nocobase/nocobase/pull/7162)) par @aaaaaajie

- **[Workflow : nœud manuel]** Correction d'une erreur levée lors de l'utilisation d'une variable ([#7177](https://github.com/nocobase/nocobase/pull/7177)) par @mytharcher

- **[Modèle d'impression]** Ajout d'un script de migration pour le champ rootDataType par @jiannx

- **[Workflow : Approbation]** Correction du problème où la branche approuvée ne s'exécutait pas en l'absence d'assigné par @mytharcher
