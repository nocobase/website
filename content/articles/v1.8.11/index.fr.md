---
title: "NocoBase v1.8.11 : Prise en charge de l'aperçu des fichiers Office via l'aperçu en direct de Microsoft"
description: "Notes de version de la v1.8.11"
---

### 🎉 Nouvelles fonctionnalités

- **[Aperçu des fichiers Office]** Prise en charge de l'aperçu des fichiers Office via l'aperçu en direct de Microsoft ([#7300](https://github.com/nocobase/nocobase/pull/7300)) par @mytharcher

### 🚀 Améliorations

- **[client]** Ne pas fermer automatiquement le menu après une sélection ([#7252](https://github.com/nocobase/nocobase/pull/7252)) par @kerwin612

- **[Notification : Message dans l'application]** Passage des messages dans l'application de SSE à WebSocket ([#7302](https://github.com/nocobase/nocobase/pull/7302)) par @mytharcher

- **[Workflow]** Réduire le nombre de tâches à charger lors de la préparation de l'exécution ([#7284](https://github.com/nocobase/nocobase/pull/7284)) par @mytharcher

- **[Auth : DingTalk]** Dans le client DingTalk, définir le titre de la barre de navigation sur une chaîne vide au lieu d'afficher « Chargement… » par @2013xile

### 🐛 Corrections de bugs

- **[client]**
  - Correction du problème d'expansion du tableau arborescent ([#7309](https://github.com/nocobase/nocobase/pull/7309)) par @zhangzhonghe

  - Correction du comportement inattendu du tri par glisser-déposer des lignes de tableau ([#6959](https://github.com/nocobase/nocobase/pull/6959)) par @ChimingLiu

  - Correction du problème de boucle infinie lors de l'analyse des valeurs par défaut des champs ([#7301](https://github.com/nocobase/nocobase/pull/7301)) par @zhangzhonghe

  - Correction du problème d'affichage anormal des champs de date dans la fenêtre contextuelle lors de la configuration du sélecteur de données pour les champs de relation dans le formulaire de filtre ([#7290](https://github.com/nocobase/nocobase/pull/7290)) par @katherinehhh

- **[Workflow : Nœud de requête HTTP]** Correction d'un problème de condition de concurrence ([#7310](https://github.com/nocobase/nocobase/pull/7310)) par @mytharcher

- **[Workflow]** Correction du problème d'ID BigInt dans MySQL lors de l'enregistrement d'une tâche ([#7292](https://github.com/nocobase/nocobase/pull/7292)) par @mytharcher

- **[Action : Exporter les enregistrements]** Correction du formatage incorrect des champs de relation imbriqués lors de l'exportation vers Excel ([#7277](https://github.com/nocobase/nocobase/pull/7277)) par @aaaaaajie

- **[Source de données : SQL Server externe]** Correction du format de stockage incohérent pour les champs datetime MSSQL (sans fuseau horaire) provenant de sources de données externes par @aaaaaajie

- **[Workflow : Approbation]** Correction de l'erreur générée par la sélection du responsable dans une source de données externe par @mytharcher
