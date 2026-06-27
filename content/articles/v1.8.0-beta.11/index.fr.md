---
title: "NocoBase v1.8.0-beta.11 : Prise en charge des requêtes `multipart/form-data`"
description: "Notes de version de la v1.8.0-beta.11"
---

### 🎉 Nouvelles fonctionnalités

- **[Workflow : nœud de requête HTTP]** Prise en charge des requêtes `multipart/form-data` ([#7087](https://github.com/nocobase/nocobase/pull/7087)) par @shushu992

### 🚀 Améliorations

- **[Workflow]**
  - Optimisation du style mobile ([#7040](https://github.com/nocobase/nocobase/pull/7040)) par @mytharcher

  - Ajustement de l'API de `getCollectionFieldOptions` ([#7095](https://github.com/nocobase/nocobase/pull/7095)) par @mytharcher

- **[Formulaires publics]** Optimisation des performances des composants de date dans les formulaires publics ([#7117](https://github.com/nocobase/nocobase/pull/7117)) par @zhangzhonghe

- **[Workflow : événement pré-action]** Ajustement de l'API des variables par @mytharcher

- **[Workflow : Approbation]** Ajustement de l'API des variables par @mytharcher

### 🐛 Corrections de bugs

- **[client]**
  - Limite de plage incorrecte sur les champs de date avec heure ([#7107](https://github.com/nocobase/nocobase/pull/7107)) par @katherinehhh

  - Lorsque les variables des paramètres de requête URL sont vides, les conditions de portée des données ne sont pas supprimées ([#7104](https://github.com/nocobase/nocobase/pull/7104)) par @zhangzhonghe

- **[Workflow]**
  - Correction des paramètres de chargement des enregistrements dans les tâches ([#7123](https://github.com/nocobase/nocobase/pull/7123)) par @mytharcher

  - Correction de la vérification incorrecte des grands nombres entiers ([#7099](https://github.com/nocobase/nocobase/pull/7099)) par @mytharcher

  - Correction de la suppression en cascade des statistiques par une version de workflow non courante ([#7103](https://github.com/nocobase/nocobase/pull/7103)) par @mytharcher

- **[Mobile]** Correction du problème de z-index des fenêtres contextuelles mobiles ([#7110](https://github.com/nocobase/nocobase/pull/7110)) par @zhangzhonghe

- **[Client WEB]** Correction du problème d'affichage des blocs sous les pages après la définition des permissions de menu de rôle ([#7112](https://github.com/nocobase/nocobase/pull/7112)) par @aaaaaajie

- **[Calendrier]** Problème de champ de date dans le formulaire de création rapide du bloc calendrier ([#7106](https://github.com/nocobase/nocobase/pull/7106)) par @katherinehhh

- **[Action : Importer des enregistrements]** Résolution du problème d'échec de connexion après l'importation en masse des noms d'utilisateur et mots de passe ([#7076](https://github.com/nocobase/nocobase/pull/7076)) par @aaaaaajie

- **[Workflow : Approbation]**
  - Correction de l'erreur levée lors de la suppression d'une collection liée à l'approbation par @mytharcher

  - Correction des styles mobiles par @mytharcher

  - Correction du nom de la variable du demandeur dans le déclencheur par @mytharcher

  - Seuls les participants peuvent voir (obtenir) les détails de l'approbation par @mytharcher

  - Correction de l'API de variable héritée qui levait une erreur par @mytharcher
