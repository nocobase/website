---
title: "NocoBase v2.0.46 : Corrections de bugs"
description: "Notes de version de la v2.0.46"
---

### 🐛 Corrections de bugs

- **[client]**
  - Correction d'un problème où les valeurs par défaut ne s'appliquaient pas lors de la ré-ajout d'un enregistrement après sa suppression dans une sous-table. ([#9192](https://github.com/nocobase/nocobase/pull/9192)) par @gchust

  - Définition de la hauteur maximale des popovers et ajout de gardes de défilement pour que la zone de soumission reste accessible ([#9226](https://github.com/nocobase/nocobase/pull/9226)) par @jiannx

- **[Authentification]** Correction d'un problème où les anciennes sessions restaient actives après un changement de mot de passe ([#9261](https://github.com/nocobase/nocobase/pull/9261)) par @2013xile

- **[Source de données : MariaDB externe]** Correction d'un échec de test dû à une importation incorrecte du module par @mytharcher
