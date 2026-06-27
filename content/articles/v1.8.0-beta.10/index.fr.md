---
title: "NocoBase v1.8.0-beta.10 : Ajout de la variable d'enregistrement d'approbation au résultat du nœud"
description: "Notes de version de v1.8.0-beta.10"
---

### 🎉 Nouvelles fonctionnalités

- **[Workflow : Approbation]** Ajout d'une variable d'enregistrement d'approbation au résultat du nœud par @mytharcher

### 🐛 Corrections de bugs

- **[client]**
  - La fonction d'alignement du texte des colonnes du tableau ne fonctionne pas ([#7094](https://github.com/nocobase/nocobase/pull/7094)) par @zhangzhonghe

  - Attribuer des valeurs de champ : Impossible d'effacer les données pour les champs de relation ([#7086](https://github.com/nocobase/nocobase/pull/7086)) par @zhangzhonghe

  - Utiliser une portée de variable indépendante pour chaque champ ([#7012](https://github.com/nocobase/nocobase/pull/7012)) par @mytharcher

- **[Gestionnaire de fichiers]** Correction du champ de pièces jointes qui ne pouvait pas être mis à jour dans le processus d'approbation ([#7093](https://github.com/nocobase/nocobase/pull/7093)) par @mytharcher

- **[Workflow]** Correction d'une vérification incorrecte sur les nombres entiers de grande taille ([#7091](https://github.com/nocobase/nocobase/pull/7091)) par @mytharcher

- **[Workflow : Approbation]** Utilisation d'une comparaison au lieu d'une logique implicite pour éviter les problèmes de type par @mytharcher
