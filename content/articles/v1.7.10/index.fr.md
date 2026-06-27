---
title: "NocoBase v1.7.10 : Corrections de bugs"
description: "Notes de version de la v1.7.10"
---

### 🐛 Corrections de bugs

- **[client]**
  - Correction du problème où les règles de liaison entraînaient une boucle infinie ([#7050](https://github.com/nocobase/nocobase/pull/7050)) par @zhangzhonghe

  - Correction : utilisation du chaînage optionnel pour rejeter les requêtes en toute sécurité dans APIClient lorsque le gestionnaire peut être indéfini ([#7054](https://github.com/nocobase/nocobase/pull/7054)) par @sheldon66

  - Fermeture automatique du problème lors de la configuration des champs dans le formulaire contextuel secondaire ([#7052](https://github.com/nocobase/nocobase/pull/7052)) par @katherinehhh

- **[Visualisation des données]** Affichage incorrect du champ de date « entre » dans le filtre du graphique ([#7051](https://github.com/nocobase/nocobase/pull/7051)) par @katherinehhh

- **[Documentation API]** Les plugins non officiels de NocoBase ne parviennent pas à afficher la documentation API ([#7045](https://github.com/nocobase/nocobase/pull/7045)) par @chenzhizdt

- **[Action : Importer des enregistrements]** Correction de l'import xlsx pour restreindre les champs de zone de texte afin qu'ils n'acceptent pas les données au format non textuel ([#7049](https://github.com/nocobase/nocobase/pull/7049)) par @aaaaaajie
