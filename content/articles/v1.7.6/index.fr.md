---
title: "NocoBase v1.7.6 : Corrections de bugs"
description: "Notes de version de la v1.7.6"
---

### 🚀 Améliorations

- **[client]** Interdire le déplacement d'un menu de groupe dans lui-même ([#7005](https://github.com/nocobase/nocobase/pull/7005)) par @zhangzhonghe

### 🐛 Corrections de bugs

- **[client]**
  - Résolution d'un problème où le bloc ne parvenait pas à lire les données de vue provenant de sources de données externes. ([#7017](https://github.com/nocobase/nocobase/pull/7017)) par @aaaaaajie

  - Correction d'un problème d'erreur de paramètre du bloc de filtre ([#6966](https://github.com/nocobase/nocobase/pull/6966)) par @zhangzhonghe

  - La variable d'objet courant est invalide dans les règles de liaison ([#7008](https://github.com/nocobase/nocobase/pull/7008)) par @zhangzhonghe

  - Impossible de supprimer l'indicateur de champ obligatoire d'un sous-tableau à l'aide des règles de liaison ([#7022](https://github.com/nocobase/nocobase/pull/7022)) par @zhangzhonghe

- **[undefined]** Suppression de la dépendance à la base de données pour possibleTypes, application d'une configuration pilotée par l'API par @aaaaaajie

- **[Mobile]** Optimisation des problèmes de latence sur mobile ([#7029](https://github.com/nocobase/nocobase/pull/7029)) par @zhangzhonghe

- **[Gestionnaire de sources de données]** Suppression de la dépendance à la base de données pour possibleTypes, application d'une configuration pilotée par l'API ([#7019](https://github.com/nocobase/nocobase/pull/7019)) par @aaaaaajie

- **[Action : Importer des enregistrements]** Correction des erreurs survenant lors de l'édition par lots lors de l'importation de données de tableau arborescent XLSX ([#7013](https://github.com/nocobase/nocobase/pull/7013)) par @aaaaaajie

- **[Workflow]** Correction d'une erreur d'interface utilisateur lorsque le workflow n'existe pas ([#7023](https://github.com/nocobase/nocobase/pull/7023)) par @mytharcher

- **[Workflow : JavaScript]** Correction du require pour les chemins relatifs par @mytharcher

- **[Workflow : Approbation]**
  - Correction d'une erreur levée lors de la suppression d'un workflow par @mytharcher

  - Rechargement de l'association de fichiers à partir de l'instantané pour éviter l'expiration des URL par @mytharcher

  - Correction des variables de déclencheur par @mytharcher
