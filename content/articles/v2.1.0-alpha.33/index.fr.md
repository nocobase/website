---
title: "NocoBase v2.1.0-alpha.33 : ajout de la variable de langue de l'utilisateur actuel dans v2"
description: "Notes de version de v2.1.0-alpha.33"
---

### 🎉 Nouvelles fonctionnalités

- **[client]**
  - Ajout de la variable de langue de l'utilisateur actuel dans v2 ([#9405](https://github.com/nocobase/nocobase/pull/9405)) par @katherinehhh

  - Ajout de la prise en charge des règles de liaison pour les éléments de menu de page ([#9304](https://github.com/nocobase/nocobase/pull/9304)) par @zhangzhonghe

### 🚀 Améliorations

- **[client-v2]** Filtrer les menus v1 dans la mise en page v2 et n'afficher que les menus v2 ([#9427](https://github.com/nocobase/nocobase/pull/9427)) par @zhangzhonghe

- **[Départements]** Optimisation du style de la liste des départements en ajoutant des icônes et en ajustant l'espacement ([#9435](https://github.com/nocobase/nocobase/pull/9435)) par @katherinehhh

### 🐛 Corrections de bugs

- **[build]** Correction de l'échec de construction du plugin lorsque le code client v1 importe une entrée `/client-v2` d'un autre plugin. ([#9436](https://github.com/nocobase/nocobase/pull/9436)) par @Molunerfinn

- **[client]**
  - Correction d'un problème intermittent où les règles de liaison des boutons d'action ne s'appliquaient pas. ([#9430](https://github.com/nocobase/nocobase/pull/9430)) par @gchust

  - Masquage du composant de sous-tableau pour les champs d'association de type "plusieurs" dans le sous-tableau v2 ([#9438](https://github.com/nocobase/nocobase/pull/9438)) par @katherinehhh

- **[Gestionnaire de collection graphique]** Correction d'une erreur de filtre d'action de mise à jour lors de la mise en page automatique de l'interface graphique ([#9421](https://github.com/nocobase/nocobase/pull/9421)) par @katherinehhh

- **[Bloc : Arbre]** Amélioration des paramètres du bloc de filtre arborescent et correction des problèmes d'association non prise en charge, de repli du champ de titre et de comportement de réinitialisation de la recherche. ([#9426](https://github.com/nocobase/nocobase/pull/9426)) par @jiannx
