---
title: "NocoBase v1.7.8 : Ajout de la variable d'environnement pour contrôler la méthode de sortie des journaux d'audit"
description: "Notes de version de la v1.7.8"
---

### 🎉 Nouvelles fonctionnalités

- **[Journaux d'audit]** Ajout de la variable d'environnement `AUDIT_LOGGER_TRANSPORT` pour contrôler le mode de sortie des journaux d'audit par @2013xile

### 🚀 Améliorations

- **[Calendrier]** Possibilité de définir le jour de début de semaine dans le bloc calendrier ([#7032](https://github.com/nocobase/nocobase/pull/7032)) par @katherinehhh

- **[Champ de collection : Plusieurs à plusieurs (tableau)]** Erreurs liées aux permissions lors de l'affichage des champs plusieurs-à-plusieurs (plusieurs) dans les tableaux de données. ([#7028](https://github.com/nocobase/nocobase/pull/7028)) par @aaaaaajie

### 🐛 Corrections de bugs

- **[client]**
  - Problème de fermeture automatique lors de la configuration des champs dans le formulaire contextuel secondaire ([#7042](https://github.com/nocobase/nocobase/pull/7042)) par @katherinehhh

  - Options de champ de sélection ne fonctionnant pas dans les règles de liaison du formulaire de filtre ([#7035](https://github.com/nocobase/nocobase/pull/7035)) par @katherinehhh

  - Les règles de validation du formulaire de filtre rendent le bouton de filtre inefficace ([#6975](https://github.com/nocobase/nocobase/pull/6975)) par @zhangzhonghe

  - Correction de l'absence d'affichage des champs dans les modèles de bloc causée par des requêtes API en double ([#6985](https://github.com/nocobase/nocobase/pull/6985)) par @zhangzhonghe

- **[Action : Importer des enregistrements]** Correction de l'échec d'importation des tables enfants lorsque des champs relationnels sont impliqués ([#7039](https://github.com/nocobase/nocobase/pull/7039)) par @aaaaaajie

- **[Visualisation des données]** Les champs de groupe de cases à cocher dans les graphiques doivent afficher les libellés au lieu des valeurs brutes ([#7033](https://github.com/nocobase/nocobase/pull/7033)) par @2013xile

- **[Workflow]** Correction d'une erreur levée dans l'action d'exécution manuelle lorsque le déclencheur n'est pas configuré correctement ([#7036](https://github.com/nocobase/nocobase/pull/7036)) par @mytharcher

- **[Workflow : Approbation]**
  - Pour éviter une erreur de champ non défini par @mytharcher

  - Correction d'une erreur API lors de l'actualisation de la page de détails par @mytharcher

- **[WeCom]** Ajout d'une vérification du chemin de rappel dans le middleware de passerelle par @2013xile
