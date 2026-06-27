---
title: "NocoBase v1.7.0-beta.27 : prise en charge des variables dans le titre et le contenu de la confirmation secondaire"
description: "Notes de version de v1.7.0-beta.27"
---

### 🎉 Nouvelles fonctionnalités

- **[client]** prise en charge des variables dans le titre et le contenu de la confirmation secondaire ([#6787](https://github.com/nocobase/nocobase/pull/6787)) par @katherinehhh

- **[Impression de modèles]**
  - Prise en charge du rendu d'images dynamiques et de codes-barres dans les modèles de documents. par @sheldon66

  - Fonctionnalité : Prise en charge des options de sélection `{ label, value }` dans l'impression de modèles. par @sheldon66

- **[Bloc : Arborescence]** le bloc de filtre arborescent prend en charge les règles de liaison par @katherinehhh

- **[Visualisation de données : ECharts]** Ajout du paramètre "Inverser l'axe Y" pour les diagrammes à barres par @2013xile

### 🚀 Améliorations

- **[client]** optimisation du style du bouton d'ajout dans les sous-tableaux et alignement du paginateur sur la même ligne ([#6790](https://github.com/nocobase/nocobase/pull/6790)) par @katherinehhh

- **[Gestionnaire de fichiers]** Ajout d'une option de délai d'attente OSS par défaut à 10 min ([#6795](https://github.com/nocobase/nocobase/pull/6795)) par @mytharcher

- **[Politique de mots de passe]** Modification de l'expiration par défaut des mots de passe pour qu'ils n'expirent jamais par @2013xile

### 🐛 Corrections de bugs

- **[base de données]**
  - Correction des cas de test ([#6811](https://github.com/nocobase/nocobase/pull/6811)) par @mytharcher

  - Éviter une erreur lorsque le type de données n'est pas une chaîne ([#6797](https://github.com/nocobase/nocobase/pull/6797)) par @mytharcher

- **[client]**
  - lorsque la sélection de variable nécessite un chargement asynchrone, le dernier menu sélectionné est perdu. ([#6802](https://github.com/nocobase/nocobase/pull/6802)) par @gchust

  - Correction du problème où les sous-champs d'un champ un-à-plusieurs ne peuvent pas être sélectionnés comme options de filtrage dans les formulaires de filtre ([#6809](https://github.com/nocobase/nocobase/pull/6809)) par @zhangzhonghe

  - problème de configuration des règles de liaison dans un sous-formulaire (popup) au sein d'un sous-tableau ([#6803](https://github.com/nocobase/nocobase/pull/6803)) par @katherinehhh

  - plusieurs messages d'erreur affichés lorsqu'une règle de validation est violée dans les champs de formulaire ([#6805](https://github.com/nocobase/nocobase/pull/6805)) par @katherinehhh

  - le champ d'association ne soumet pas les données lors de l'affichage d'un champ depuis une collection liée ([#6798](https://github.com/nocobase/nocobase/pull/6798)) par @katherinehhh

  - 子表格中子表单（弹窗）联动规则缺少字段属性设置 ([#6800](https://github.com/nocobase/nocobase/pull/6800)) par @katherinehhh

- **[Authentification]** Interdiction de modifier le nom de l'authentificateur ([#6808](https://github.com/nocobase/nocobase/pull/6808)) par @2013xile

- **[Action : Requête personnalisée]** la réponse de requête personnalisée définie sur une variable ne s'affiche pas correctement ([#6793](https://github.com/nocobase/nocobase/pull/6793)) par @katherinehhh
