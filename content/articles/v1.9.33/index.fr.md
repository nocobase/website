---
title: "NocoBase v1.9.33 : Prise en charge de la configuration de la méthode de renommage des fichiers"
description: "Notes de version de la v1.9.33"
---

### 🎉 Nouvelles fonctionnalités

- **[client]** Prise en charge des composants de maintenance définis par les plugins lorsque l'application entre en état de maintenance ([#8252](https://github.com/nocobase/nocobase/pull/8252)) par @cgyrock

- **[Gestionnaire de fichiers]** Prise en charge de la configuration de la méthode de renommage des fichiers ([#8231](https://github.com/nocobase/nocobase/pull/8231)) par @JAVA-LW

- **[Stockage de fichiers : S3(Pro)]** Ajout d'une option de mode de renommage pour le stockage S3 Pro par @mytharcher

### 🚀 Améliorations

- **[Gestionnaire de migrations]** Amélioration des vérifications de migration, prise en charge du téléchargement SQL, formatage des journaux et visibilité du processus d'exécution par @cgyrock

### 🐛 Corrections de bugs

- **[base de données]**
  - Inclure la portée de la table de liaison lors de l'interrogation des relations m2m ([#8277](https://github.com/nocobase/nocobase/pull/8277)) par @2013xile

  - Correction de l'objet `appends` dans `OptionsParser`, et augmentation de `arrayLimit` pour les paramètres ([#8328](https://github.com/nocobase/nocobase/pull/8328)) par @mytharcher

- **[client]** Correction du problème d'erreur levée dans les paramètres du bloc de formulaire de filtre d'un champ m2m ([#8282](https://github.com/nocobase/nocobase/pull/8282)) par @mytharcher

- **[Gestionnaire de tâches asynchrones]** Correction de la langue lors de l'annulation d'une tâche en arrière-plan ([#8245](https://github.com/nocobase/nocobase/pull/8245)) par @mytharcher

- **[Gestionnaire de fichiers]** Correction du problème d'erreur levée lors du téléchargement d'un fichier de plus de 5 Mo vers AWS S3 ([#8275](https://github.com/nocobase/nocobase/pull/8275)) par @mytharcher

- **[Workflow]** Correction des événements de base de données devenant invalides après l'actualisation de la source de données externe ([#8207](https://github.com/nocobase/nocobase/pull/8207)) par @cgyrock

- **[Collection : Arbre]** Mise à jour des chemins après la création en masse de nœuds de collection arborescente ([#8267](https://github.com/nocobase/nocobase/pull/8267)) par @2013xile

- **[Source de données : PostgreSQL externe]** Correction des événements de base de données devenant invalides après l'actualisation de la source de données externe par @cgyrock

- **[Source de données : Oracle externe]** Correction des événements de base de données devenant invalides après l'actualisation de la source de données externe par @cgyrock
