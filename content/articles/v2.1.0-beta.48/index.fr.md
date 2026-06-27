---
title: "NocoBase v2.1.0-beta.48 : Ajout du support client v2 pour l'action de la barre supérieure du gestionnaire de tâches asynchrones"
description: "Notes de version de v2.1.0-beta.48"
---

### 🎉 Nouvelles fonctionnalités

- **[client-v2]** Prise en charge de la saisie par scan pour les champs de texte ([#9599](https://github.com/nocobase/nocobase/pull/9599)) par @katherinehhh
- **[Gestionnaire de tâches asynchrones]** Ajout du support client v2 pour l'action de la barre supérieure du gestionnaire de tâches asynchrones. ([#9707](https://github.com/nocobase/nocobase/pull/9707)) par @jiannx
- **[Gestionnaire de sauvegarde]** Ajout du support d'exécution client v2 pour le plugin du gestionnaire de sauvegarde. ([#9712](https://github.com/nocobase/nocobase/pull/9712)) par @katherinehhh
- **[Source de données : NocoBase externe]** Ajout d'un plugin de source de données : NocoBase externe par @2013xile

### 🚀 Améliorations

- **[client-v2]** Ajout de la prise en charge de la désactivation de la sélection multiple dans les champs d'association de sélection contextuelle v2. ([#9730](https://github.com/nocobase/nocobase/pull/9730)) par @katherinehhh
- **[Gestionnaire de fichiers]** Ajout de la prise en charge du `subPath` de téléchargement interne pour le gestionnaire de fichiers. ([#9731](https://github.com/nocobase/nocobase/pull/9731)) par @mytharcher
- **[Variables et secrets]** Les variables d'environnement (`$env`) peuvent désormais être sélectionnées par les sélecteurs de variables basés sur le moteur de flux dans l'environnement d'exécution v1. ([#9728](https://github.com/nocobase/nocobase/pull/9728)) par @Molunerfinn

### 🐛 Corrections de bugs

- **[base de données]** Correction du hachage des champs de mot de passe lors des mises à jour en masse. ([#9736](https://github.com/nocobase/nocobase/pull/9736)) par @mytharcher
- **[client]** Correction du masquage de l'ensemble du champ de sous-tableau par les actions de ligne du sous-tableau contextuel lorsque l'action est masquée par des règles de liaison ([#9717](https://github.com/nocobase/nocobase/pull/9717)) par @katherinehhh
- **[Employés IA]** Amélioration des invites de requête de données des employés IA pour charger la compétence requise avant d'utiliser les outils de requête. ([#9725](https://github.com/nocobase/nocobase/pull/9725)) par @cgyrock
- **[Gestionnaire de source de données]** Correction de l'affichage d'un champ de titre obsolète lors de la réouverture du tiroir de configuration des champs de la source de données v2 après avoir modifié le champ de titre. ([#9720](https://github.com/nocobase/nocobase/pull/9720)) par @katherinehhh
- **[Bloc : Carte]**

  - Correction de l'absence des champs de géométrie de carte dans le menu d'ajout de champ du gestionnaire de source de données v2 après l'activation du plugin de carte. ([#9715](https://github.com/nocobase/nocobase/pull/9715)) par @katherinehhh
  - Correction du problème de DrawingManager indisponible dans le bloc Google Maps v1 ([#9735](https://github.com/nocobase/nocobase/pull/9735)) par @katherinehhh
- **[Calendrier]** Correction d'un problème où les blocs Détails et Édition ne pouvaient pas être ajoutés dans les tiroirs de détail du bloc calendrier v2 ([#9729](https://github.com/nocobase/nocobase/pull/9729)) par @jiannx
