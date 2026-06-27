---
title: "NocoBase v2.0.0-alpha.62 : Amélioration des vérifications de permissions lors de la modification des champs d'association imbriqués"
description: "Notes de version de v2.0.0-alpha.62"
---

### 🚀 Améliorations

- **[Contrôle d'accès]** Amélioration des vérifications de permissions lors de la modification de champs d'association imbriqués ([#7856](https://github.com/nocobase/nocobase/pull/7856)) par @2013xile

### 🐛 Corrections de bugs

- **[client]**
  - Correction de la logique d'affinement pour `targetKey` optionnel ([#8333](https://github.com/nocobase/nocobase/pull/8333)) par @katherinehhh

  - Correction du problème où les champs d'association n'étaient pas corrects dans le composant `FilterAction` ([#8295](https://github.com/nocobase/nocobase/pull/8295)) par @mytharcher

  - Correction des paramètres de filtre incorrects pour le champ de relation Select dans un sous-tableau éditable ([#8335](https://github.com/nocobase/nocobase/pull/8335)) par @katherinehhh

- **[moteur de workflow]** Correction d'un problème où une pollution d'état pouvait survenir lors de l'ouverture multiple de fenêtres contextuelles. ([#8327](https://github.com/nocobase/nocobase/pull/8327)) par @gchust

- **[base de données]** Correction de l'objet `appends` dans `OptionsParser`, et augmentation de `arrayLimit` pour les paramètres ([#8328](https://github.com/nocobase/nocobase/pull/8328)) par @mytharcher

- **[Action : Importer des enregistrements]** Correction d'un message d'erreur incorrect lorsqu'une erreur de contrainte d'unicité est déclenchée lors d'une importation XLSX asynchrone ([#8342](https://github.com/nocobase/nocobase/pull/8342)) par @cgyrock

- **[Source de données : Principale]** Les métadonnées de la collection de vues doivent inclure les options des champs source ([#8337](https://github.com/nocobase/nocobase/pull/8337)) par @2013xile

- **[Action : Exporter des enregistrements Pro]** Correction d'une erreur lorsque les sous-applications exécutent des tâches d'import/export asynchrones alors que l'application principale n'active pas le plugin d'import/export pro par @cgyrock

- **[Workflow : Approbation]** Correction du problème où les champs de filtre ne fonctionnaient pas correctement dans le centre de tâches par @mytharcher

- **[Gestionnaire d'emails]** Affichage du bouton "Répondre à tous" et la portée des données prend en charge le filtrage des messages enfants. par @jiannx
