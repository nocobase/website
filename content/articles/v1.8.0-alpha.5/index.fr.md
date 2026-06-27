---
title: "NocoBase v1.8.0-alpha.5 : Prise en charge du remplissage des champs de saisie via le scan de code QR"
description: "Notes de version de v1.8.0-alpha.5"
---

### 🚀 Améliorations

- **[client]**
  - Prise en charge du remplissage des champs de saisie via le scan de code QR ([#6943](https://github.com/nocobase/nocobase/pull/6943)) par @katherinehhh

  - Prise en charge de la localisation pour le contenu des blocs Markdown ([#6941](https://github.com/nocobase/nocobase/pull/6941)) par @katherinehhh

  - Interdiction de déplacer un menu de groupe dans lui-même ([#7005](https://github.com/nocobase/nocobase/pull/7005)) par @zhangzhonghe

- **[Champ de collection : Plusieurs à plusieurs (tableau)]** Erreurs liées aux permissions lors de l'affichage des champs plusieurs-à-plusieurs (plusieurs) dans les tableaux de données. ([#7028](https://github.com/nocobase/nocobase/pull/7028)) par @aaaaaajie

- **[Calendrier]** Prise en charge de la configuration du jour de début de semaine dans le bloc calendrier ([#7032](https://github.com/nocobase/nocobase/pull/7032)) par @katherinehhh

- **[Champ de collection : Markdown(Vditor)]** Prise en charge du clic pour zoomer sur les images en mode prévisualisation Markdown (Vditor) ([#7024](https://github.com/nocobase/nocobase/pull/7024)) par @katherinehhh

### 🐛 Corrections de bugs

- **[client]**
  - Problème de fermeture automatique lors de la configuration des champs dans le formulaire contextuel secondaire ([#7052](https://github.com/nocobase/nocobase/pull/7052)) par @katherinehhh

  - Correction de l'absence d'affichage des champs dans les modèles de bloc causée par des requêtes API en double ([#6985](https://github.com/nocobase/nocobase/pull/6985)) par @zhangzhonghe

  - Problème de fermeture automatique lors de la configuration des champs dans le formulaire contextuel secondaire ([#7042](https://github.com/nocobase/nocobase/pull/7042)) par @katherinehhh

  - Les règles de validation du formulaire de filtre rendent le bouton de filtre inopérant ([#6975](https://github.com/nocobase/nocobase/pull/6975)) par @zhangzhonghe

  - Problème de fermeture automatique lors de la configuration des champs dans le formulaire contextuel secondaire ([#7042](https://github.com/nocobase/nocobase/pull/7042)) par @katherinehhh

  - Les options du champ de sélection ne fonctionnent pas dans les règles de liaison du formulaire de filtre ([#7035](https://github.com/nocobase/nocobase/pull/7035)) par @katherinehhh

  - Impossible d'effacer l'indicateur de champ obligatoire d'un sous-tableau à l'aide des règles de liaison ([#7022](https://github.com/nocobase/nocobase/pull/7022)) par @zhangzhonghe

  - Correction du problème d'erreur de paramètre du bloc de filtre ([#6966](https://github.com/nocobase/nocobase/pull/6966)) par @zhangzhonghe

  - Correction du problème où les données de l'utilisateur actuel sont vides ([#7016](https://github.com/nocobase/nocobase/pull/7016)) par @zhangzhonghe

  - La variable d'objet actuel est invalide dans les règles de liaison ([#7008](https://github.com/nocobase/nocobase/pull/7008)) par @zhangzhonghe

  - Résolution d'un problème où le bloc ne parvenait pas à lire les données de vue provenant de sources de données externes. ([#7017](https://github.com/nocobase/nocobase/pull/7017)) par @aaaaaajie

  - Utilisation d'une portée de variable indépendante pour chaque champ ([#7012](https://github.com/nocobase/nocobase/pull/7012)) par @mytharcher

- **[Visualisation de données]**
  - Affichage incorrect du champ de date "entre" dans le filtre du graphique ([#7051](https://github.com/nocobase/nocobase/pull/7051)) par @katherinehhh

  - Les champs de groupe de cases à cocher dans les graphiques doivent afficher les libellés au lieu des valeurs brutes ([#7033](https://github.com/nocobase/nocobase/pull/7033)) par @2013xile

- **[Action : Importer des enregistrements]**
  - Correction de l'importation xlsx pour restreindre les champs textarea à n'accepter que des données au format chaîne de caractères ([#7049](https://github.com/nocobase/nocobase/pull/7049)) par @aaaaaajie

  - Correction de l'échec d'importation du tableau enfant lorsque des champs relationnels sont impliqués ([#7039](https://github.com/nocobase/nocobase/pull/7039)) par @aaaaaajie

  - Correction des erreurs survenant lors de l'édition par lots lors de l'importation de données de tableau arborescent XLSX ([#7013](https://github.com/nocobase/nocobase/pull/7013)) par @aaaaaajie

- **[Documentation API]** Les plugins non officiels de NocoBase ne parviennent pas à afficher la documentation API ([#7045](https://github.com/nocobase/nocobase/pull/7045)) par @chenzhizdt

- **[Workflow]**
  - Correction de l'erreur provoquée par `toJSON()` dans le déclencheur planifié ([#7037](https://github.com/nocobase/nocobase/pull/7037)) par @mytharcher

  - Correction de l'erreur levée dans l'action d'exécution manuelle lorsque le déclencheur n'est pas configuré correctement ([#7036](https://github.com/nocobase/nocobase/pull/7036)) par @mytharcher

  - Correction de l'erreur d'interface utilisateur lorsque le workflow n'existe pas ([#7023](https://github.com/nocobase/nocobase/pull/7023)) par @mytharcher

  - Correction du non-déclenchement de l'événement de collection en mode création ou mise à jour lors de la création sans champ modifié ([#7015](https://github.com/nocobase/nocobase/pull/7015)) par @mytharcher

- **[Mobile]** Optimisation des problèmes de latence des fenêtres contextuelles mobiles ([#7029](https://github.com/nocobase/nocobase/pull/7029)) par @zhangzhonghe

- **[Gestionnaire de sources de données]** Suppression de la dépendance à la base de données pour possibleTypes, application d'une configuration pilotée par API ([#7019](https://github.com/nocobase/nocobase/pull/7019)) par @aaaaaajie

- **[Action : Exporter les enregistrements Pro]** Correction de l'erreur survenant lors de l'exportation de pièces jointes avec conditions. par @aaaaaajie
