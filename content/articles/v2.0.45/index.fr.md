---
title: "NocoBase v2.0.45 : Correction du problème où les variables dans l'invite système des employés AI ne prenaient pas effet"
description: "Notes de version de la v2.0.45"
---

### 🚀 Améliorations

- **[Workflow : JavaScript]** Mise à niveau des images Docker, des workflows CI et de la dépendance du bac à sable JavaScript du workflow pour la compatibilité Node.js 22. ([#9245](https://github.com/nocobase/nocobase/pull/9245)) par @Molunerfinn

### 🐛 Corrections de bugs

- **[Employés IA]** Correction du problème où les variables dans l'invite système des employés IA ne prenaient pas effet ([#9256](https://github.com/nocobase/nocobase/pull/9256)) par @cgyrock

- **[Paramètres de licence]** Mise à jour du message de succès d'enregistrement de la licence ([#9251](https://github.com/nocobase/nocobase/pull/9251)) par @jiannx

- **[Action : Importer des enregistrements]** Correction du problème où l'importation xlsx échouait et générait une erreur "aucun en-tête correspondant" ([#9253](https://github.com/nocobase/nocobase/pull/9253)) par @mytharcher

- **[Action : Importer des enregistrements Pro]** Correction du problème où l'importation xlsx échouait et générait une erreur "aucun en-tête correspondant" par @mytharcher

- **[IA : Base de connaissances]** Correction du problème où la suppression de documents de la base de connaissances ne supprimait pas les données vectorielles associées par @cgyrock
