---
title: "NocoBase v1.6.2 : Corrections de bugs"
description: "Notes de version de la v1.6.2"
---

### 🐛 Corrections de bugs

- **[client]** La sélection de plage de dates pour un champ de date exclut la date maximale ([#6418](https://github.com/nocobase/nocobase/pull/6418)) par @katherinehhh

- **[Notification : Message in-app]** Éviter que la configuration de destinataires incorrecte n'interroge tous les utilisateurs ([#6424](https://github.com/nocobase/nocobase/pull/6424)) par @sheldon66

- **[Workflow : Nœud manuel]**
  - Correction de la migration qui omettait le préfixe de table et la logique de schéma ([#6425](https://github.com/nocobase/nocobase/pull/6425)) par @mytharcher

  - Modification de la limite de version de la migration à `<1.7.0` ([#6430](https://github.com/nocobase/nocobase/pull/6430)) par @mytharcher
