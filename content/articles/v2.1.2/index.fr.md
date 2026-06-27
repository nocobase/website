---
title: "NocoBase v2.1.2 : Ajout d'un formulaire de configuration de stockage vectoriel externe pour les bases de connaissances IA"
description: "Notes de version de v2.1.2"
---

### 🎉 Nouvelles fonctionnalités

- **[Agents IA]** Ajout d'un formulaire de configuration de stockage vectoriel externe pour les bases de connaissances IA. ([#9723](https://github.com/nocobase/nocobase/pull/9723)) par @cgyrock
- **[IA : Base de connaissances]** Ajout d'un formulaire de configuration de stockage vectoriel externe pour les bases de connaissances IA. par @cgyrock

### 🚀 Améliorations

- **[non défini]**

  - Ajout d'un scénario de contrôle de version dans le démarrage rapide du constructeur IA ([#9748](https://github.com/nocobase/nocobase/pull/9748)) par @Molunerfinn
    Référence : [Démarrage rapide du constructeur IA](https://docs.nocobase.com/en/ai-builder)
  - Amélioration de la documentation sur le contrôle de version avec des conseils de révision automatique du constructeur IA. ([#9745](https://github.com/nocobase/nocobase/pull/9745)) par @cgyrock
- **[cli]** Clarification du libellé de configuration initiale ([#9750](https://github.com/nocobase/nocobase/pull/9750)) par @chenos
- **[Action : Importer des enregistrements]** Amélioration des boîtes de dialogue d'erreur d'importation et de tâche asynchrone afin que les longs messages d'erreur puissent être lus intégralement sans casser la mise en page. ([#9746](https://github.com/nocobase/nocobase/pull/9746)) par @katherinehhh
- **[Action : Importer des enregistrements Pro]** Amélioration des boîtes de dialogue d'importation afin que les longs messages d'erreur restent lisibles et que le mode de traitement v2 puisse être sélectionné directement depuis le menu des paramètres. par @katherinehhh

### 🐛 Corrections de bugs

- **[client-v2]** Correction du problème où les pages v2 pouvaient continuer à charger après la connexion ([#9738](https://github.com/nocobase/nocobase/pull/9738)) par @zhangzhonghe
- **[cli]** Nécessite Node.js 22 pour nb ([#9749](https://github.com/nocobase/nocobase/pull/9749)) par @chenos
- **[Gestionnaire de fichiers]** Correction des aperçus PDF manquant le texte des polices CJK/CID après le passage à pdf.js. ([#9737](https://github.com/nocobase/nocobase/pull/9737)) par @mytharcher
