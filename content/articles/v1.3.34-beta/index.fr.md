---
title: "NocoBase v1.3.34-beta : Améliorations de la configuration des champs de formulaire de filtre"
description: "Notes de version de v1.3.34-beta"
---

### 🎉 Nouvelles fonctionnalités

- **[test]** Les champs d'association dans les filtres de formulaire prennent désormais en charge la configuration de la sélection multiple ([#5451](https://github.com/nocobase/nocobase/pull/5451)) par @zhangzhonghe

- **[client]** Ajout d'une variable nommée « Objet parent » ([#5449](https://github.com/nocobase/nocobase/pull/5449)) par @zhangzhonghe
Référence : [Objet parent](https://docs.nocobase.com/handbook/ui/variables#parent-object)

### 🐛 Corrections de bugs

- **[client]**
  - Correction du problème d'analyse des variables des paramètres de recherche d'URL ([#5454](https://github.com/nocobase/nocobase/pull/5454)) par @zhangzhonghe

  - Correction du bug d'effacement des données lors de la sélection de données d'association avec un périmètre de données dans les sous-tableaux imbriqués ([#5441](https://github.com/nocobase/nocobase/pull/5441)) par @katherinehhh

  - Correction de la couleur d'arrière-plan de la ligne sélectionnée dans un tableau ([#5445](https://github.com/nocobase/nocobase/pull/5445)) par @mytharcher

- **[Bloc : Carte]** Suppression de la configuration du niveau de zoom pour les champs de carte dans les colonnes de tableau ([#5457](https://github.com/nocobase/nocobase/pull/5457)) par @katherinehhh

- **[Gestionnaire de fichiers]** Correction de l'appel du hook de règle de stockage sur les champs en lecture seule ([#5447](https://github.com/nocobase/nocobase/pull/5447)) par @mytharcher

- **[Source de données : Principale]** Correction d'un échec de test e2e dû à un changement de composant ([#5437](https://github.com/nocobase/nocobase/pull/5437)) par @mytharcher
