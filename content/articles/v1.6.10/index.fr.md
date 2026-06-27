---
title: "NocoBase v1.6.10 : Corrections de bugs"
description: "Notes de version de la v1.6.10"
---

### 🐛 Corrections de bogues

- **[client]**
  - Impossible d'utiliser la variable 'Utilisateur actuel' lors de l'ajout d'une page de lien ([#6536](https://github.com/nocobase/nocobase/pull/6536)) par @zhangzhonghe

  - L'affectation de champ avec une valeur "nulle" est inefficace ([#6549](https://github.com/nocobase/nocobase/pull/6549)) par @katherinehhh

  - Erreur de la commande `yarn doc` ([#6540](https://github.com/nocobase/nocobase/pull/6540)) par @gchust

  - Suppression de l'option 'Autoriser la sélection multiple' des champs de sélection unique dans les formulaires de filtre ([#6515](https://github.com/nocobase/nocobase/pull/6515)) par @zhangzhonghe

  - La liaison de plage de données des champs relationnels n'est pas effective ([#6530](https://github.com/nocobase/nocobase/pull/6530)) par @zhangzhonghe

- **[Collection : Arborescence]** Problème de migration pour plugin-collection-tree ([#6537](https://github.com/nocobase/nocobase/pull/6537)) par @2013xile

- **[Action : Requête personnalisée]** Impossible de télécharger les fichiers encodés en UTF-8 ([#6541](https://github.com/nocobase/nocobase/pull/6541)) par @2013xile
