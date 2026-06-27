---
title: "NocoBase v2.1.0-beta.21 : Corrections de bugs"
description: "Notes de version de v2.1.0-beta.21"
---

### 🐛 Corrections de bugs

- **[client]** Correction d'un problème où les valeurs par défaut ne s'appliquaient pas lors de la ré-ajout d'un enregistrement après sa suppression dans une sous-table. ([#9192](https://github.com/nocobase/nocobase/pull/9192)) par @gchust

- **[Paramètres de licence]** Mise à jour du message de succès d'enregistrement de la licence ([#9251](https://github.com/nocobase/nocobase/pull/9251)) par @jiannx

- **[Employés IA]** Correction du problème où les variables dans l'invite système des employés IA ne prenaient pas effet ([#9256](https://github.com/nocobase/nocobase/pull/9256)) par @cgyrock

- **[Action : Importer des enregistrements]** Correction du problème où l'importation xlsx échouait et générait une erreur "aucun en-tête correspondant" ([#9253](https://github.com/nocobase/nocobase/pull/9253)) par @mytharcher

- **[IA : Base de connaissances]** Correction du problème où la suppression de documents de la base de connaissances ne supprimait pas les données vectorielles associées par @cgyrock

- **[Action : Importer des enregistrements Pro]** Correction du problème où l'importation xlsx échouait et générait une erreur "aucun en-tête correspondant" par @mytharcher
