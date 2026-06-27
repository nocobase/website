---
title: "NocoBase v2.0.52 : ajout de la variable de langue de l'utilisateur actuel dans v2"
description: "Notes de version de v2.0.52"
---

### 🎉 Nouvelles fonctionnalités

- **[client]**
  - ajout de la variable de langue de l'utilisateur actuel dans v2 ([#9405](https://github.com/nocobase/nocobase/pull/9405)) par @katherinehhh

  - ajout d'une option de limite de plage de dates pour les champs de date dans les formulaires v2 ([#9400](https://github.com/nocobase/nocobase/pull/9400)) par @katherinehhh

### 🚀 Améliorations

- **[client]** exclusion des enregistrements déjà associés dans la boîte de dialogue de sélection d'association du bloc de table un-à-plusieurs ([#9448](https://github.com/nocobase/nocobase/pull/9448)) par @katherinehhh

- **[Départements]** optimisation du style de la liste des départements en ajoutant des icônes et en ajustant l'espacement ([#9435](https://github.com/nocobase/nocobase/pull/9435)) par @katherinehhh

- **[IA : Base de connaissances]** L'identifiant unique d'une base de connaissances est configurable lors de sa création par @cgyrock

### 🐛 Corrections de bugs

- **[client]**
  - Correction du problème où les paramètres de valeur par défaut hérités ne pouvaient pas être supprimés. ([#9470](https://github.com/nocobase/nocobase/pull/9470)) par @gchust

  - Correction du problème où il était impossible de sélectionner des options pour le champ de sélection d'une association. ([#9088](https://github.com/nocobase/nocobase/pull/9088)) par @gchust

  - Correction d'un problème où la portée des données du bloc cible était mal définie lors de la désélection de données de ligne dans un flux d'événements de bloc de table. ([#9443](https://github.com/nocobase/nocobase/pull/9443)) par @gchust

  - Correction des requêtes de table en double lorsque les formulaires de filtre ont des valeurs par défaut ([#9423](https://github.com/nocobase/nocobase/pull/9423)) par @zhangzhonghe

  - Correction des règles de liaison V2 pour prendre en charge la définition d'options sélectionnables pour les champs ([#9399](https://github.com/nocobase/nocobase/pull/9399)) par @jiannx

  - correction d'une erreur lors du changement du champ de titre d'un champ d'association dans un bloc de table v2 ([#9451](https://github.com/nocobase/nocobase/pull/9451)) par @katherinehhh

  - Correction d'un problème intermittent où les règles de liaison des boutons d'action ne s'appliquaient pas. ([#9430](https://github.com/nocobase/nocobase/pull/9430)) par @gchust

  - masquage du composant de sous-table pour les champs d'association de type plusieurs-à-plusieurs dans la sous-table v2 ([#9438](https://github.com/nocobase/nocobase/pull/9438)) par @katherinehhh

- **[serveur]** correction(gestionnaire de fichiers): forcer le téléchargement des fichiers de contenu actif dans le stockage local/public ([#9437](https://github.com/nocobase/nocobase/pull/9437)) par @mytharcher

- **[Employés IA]** Correction du vol d'essai Ollama nécessitant la saisie d'une clé ([#9450](https://github.com/nocobase/nocobase/pull/9450)) par @cgyrock

- **[Gestionnaire de collections graphiques]** correction de l'erreur de filtre d'action de mise à jour lors de la mise en page automatique de l'interface graphique ([#9421](https://github.com/nocobase/nocobase/pull/9421)) par @katherinehhh

- **[Workflow]** correction : restauration du texte d'aide dans les boîtes de dialogue de liaison de workflow FlowModel pour les événements d'action d'opération et d'action personnalisée ([#9447](https://github.com/nocobase/nocobase/pull/9447)) par @mytharcher

- **[Départements]** correction du conflit de traduction entre les boutons d'ajout d'utilisateur et d'ajout de département dans les paramètres Utilisateurs et Permissions ([#9456](https://github.com/nocobase/nocobase/pull/9456)) par @katherinehhh

- **[Champ de collection : Markdown(Vditor)]** correction de l'infobulle du champ markdown masquée dans la disposition de formulaire horizontale ([#9420](https://github.com/nocobase/nocobase/pull/9420)) par @katherinehhh

- **[Client WEB]** Correction du filtrage par type de route lors de l'utilisation d'étiquettes traduites ([#9425](https://github.com/nocobase/nocobase/pull/9425)) par @zhangzhonghe

- **[Workflow : Approbation]**
  - Correction du problème où le champ JS apparaissait dans les paramètres du processus d'approbation par @zhangzhonghe

  - Correction de la disposition du formulaire d'approbation sur les appareils mobiles par @zhangzhonghe

  - Correction de l'index en double des enregistrements d'approbation lors de la délégation de tâches d'approbation. par @mytharcher

- **[Gestionnaire de sauvegarde]** Correction d'un problème où les sauvegardes échouaient avec une erreur lorsque les fichiers étaient introuvables. par @gchust
