---
title: "NocoBase v1.4.30 : Corrections de bugs"
description: "Notes de version de la v1.4.30"
---

### 🐛 Corrections de bugs

- **[client]** Correction d'un problème d'affichage de « N/A » pour les champs d'association dans le tableau ([#6109](https://github.com/nocobase/nocobase/pull/6109)) par @zhangzhonghe

- **[Collection : Arborescence]** Interdiction de définir un nœud d'une collection arborescente comme son propre parent ([#6122](https://github.com/nocobase/nocobase/pull/6122)) par @2013xile

- **[Workflow : nœud de requête HTTP]** Correction du nœud de requête en attente dans une boucle ([#6120](https://github.com/nocobase/nocobase/pull/6120)) par @mytharcher

- **[Workflow : kit de test]** Correction des cas de test de la source de données simulée dépendant de l'ACL ([#6116](https://github.com/nocobase/nocobase/pull/6116)) par @mytharcher

- **[Gestionnaire de sauvegarde]** Correction d'un problème où certains fichiers de sauvegarde ne pouvaient pas être correctement extraits et restaurés par @gchust
