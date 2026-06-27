---
title: "NocoBase v2.0.18 : Permet d'ajouter des employés IA dans la fenêtre contextuelle des sous-tableaux"
description: "Notes de version de la v2.0.18"
---

### 🎉 Nouvelles fonctionnalités

- **[Employés IA]**
  - Nettoyage planifié des données de points de contrôle des conversations IA. ([#8855](https://github.com/nocobase/nocobase/pull/8855)) par @cgyrock

  - Permet d'ajouter des employés IA dans les fenêtres contextuelles des sous-tableaux ([#8873](https://github.com/nocobase/nocobase/pull/8873)) par @2013xile

- **[Superviseur d'applications]** Prise en charge du filtrage dans la liste des applications<br />Ajout de boîtes de dialogue de confirmation pour les actions de démarrage et d'arrêt<br />Tri des entrées de statut des applications par nom d'environnement par @2013xile

### 🚀 Améliorations

- **[serveur]** amélioration de la logique pm add ([#8875](https://github.com/nocobase/nocobase/pull/8875)) par @chenos

- **[client]** Prise en charge de l'affichage d'un message de confirmation avant la fermeture d'une fenêtre contextuelle. ([#8839](https://github.com/nocobase/nocobase/pull/8839)) par @gchust

- **[Gestionnaire de tâches asynchrones]** les tâches asynchrones sont ajoutées pour prendre en charge les travailleurs dans les messages d'erreur après publication ([#8849](https://github.com/nocobase/nocobase/pull/8849)) par @cgyrock

### 🐛 Corrections de bugs

- **[client]** Correction du problème où la fenêtre contextuelle « Sélectionner un enregistrement » dans le sous-tableau ne se chargeait pas correctement lors de la deuxième ouverture. ([#8865](https://github.com/nocobase/nocobase/pull/8865)) par @gchust

- **[Employés IA]** Correction d'erreurs potentielles de variable non définie dans les scripts de migration de mise à niveau du plugin IA. ([#8883](https://github.com/nocobase/nocobase/pull/8883)) par @cgyrock

- **[Action : Importer des enregistrements Pro]** Correction du problème où les tâches asynchrones ne se terminent pas après une erreur lors de l'importation asynchrone par @cgyrock
