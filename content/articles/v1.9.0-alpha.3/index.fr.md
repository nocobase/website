---
title: "NocoBase v1.9.0-alpha.3 : Prise en charge de l'affichage des tables définies par les plugins dans la source de données principale"
description: "Notes de version de v1.9.0-alpha.3"
---

### 🎉 Nouvelles fonctionnalités

- **[Source de données : Principale]** Prise en charge de l'affichage des tables définies par les plugins dans la source de données principale. ([#7187](https://github.com/nocobase/nocobase/pull/7187)) par @aaaaaajie

- **[Workflow : nœud de calcul de date]** Prise en charge de l'exécution de test d'un nœud par @mytharcher

### 🚀 Améliorations

- **[client]** Sélecteur de couleur : Ajout de quatre couleurs recommandées ([#7226](https://github.com/nocobase/nocobase/pull/7226)) par @zhangzhonghe

- **[Workflow]** Rendre la comparaison compatible avec les valeurs de date ([#7237](https://github.com/nocobase/nocobase/pull/7237)) par @mytharcher

### 🐛 Corrections de bugs

- **[client]**
  - Les règles de style ne fonctionnent pas sur la colonne d'action du tableau ([#7225](https://github.com/nocobase/nocobase/pull/7225)) par @katherinehhh

  - Éviter que les champs non liés à une association soient sélectionnés dans les ajouts (appends) ([#7231](https://github.com/nocobase/nocobase/pull/7231)) par @mytharcher

  - Correction de l'erreur : Impossible de résoudre 'react-device-detect' ([#7224](https://github.com/nocobase/nocobase/pull/7224)) par @zhangzhonghe

  - Lors de la suppression d'un menu, les données correspondantes dans la table uiSchemas ne sont pas supprimées ([#7232](https://github.com/nocobase/nocobase/pull/7232)) par @zhangzhonghe

- **[base de données]** Correction d'une erreur lors de l'activation de la pagination simple pour les tables de sources de données externes ([#7222](https://github.com/nocobase/nocobase/pull/7222)) par @aaaaaajie

- **[Champ de collection : Tri]** Champ de sélection de tri manquant lors de la duplication d'enregistrements ([#7116](https://github.com/nocobase/nocobase/pull/7116)) par @katherinehhh

- **[Workflow : Sous-flux]** Correction d'une erreur levée lorsque le signal de rappel arrive mais que l'exécution en attente n'est pas sur l'instance actuelle par @mytharcher

- **[Workflow : Approbation]**
  - Correction des associations à plusieurs niveaux lors de la soumission d'une approbation par @mytharcher

  - Ajout d'une tolérance aux pannes pour les approbations supprimées dans la liste des enregistrements par @mytharcher

- **[Gestionnaire d'emails]** Performance optimale de la liste des messages électroniques par @jiannx
