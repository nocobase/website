---
title: "NocoBase v2.0.11 : Prise en charge des données de contexte personnalisées pour passer des variables au déclencheur d'action personnalisée dans un sous-flux"
description: "Notes de version de v2.0.11"
---

### 🎉 Nouvelles fonctionnalités

- **[Workflow : événement d'action personnalisée]** Prise en charge des données de contexte personnalisées pour passer des variables au déclencheur d'action personnalisée dans un sous-flux ([#8758](https://github.com/nocobase/nocobase/pull/8758)) par @mytharcher

### 🚀 Améliorations

- **[client]** Afficher un message d'invite lorsqu'aucune donnée n'est disponible pour le bloc de formulaire d'édition ou le bloc de détails. ([#8790](https://github.com/nocobase/nocobase/pull/8790)) par @gchust

- **[moteur de flux]** Correction d'un problème où le nouveau code runjs analysait les expressions de variables avant l'exécution. ([#8762](https://github.com/nocobase/nocobase/pull/8762)) par @gchust

### 🐛 Corrections de bugs

- **[client]**
  - Correction de la navigation par lien contextuel annulée après la fermeture de la vue ([#8752](https://github.com/nocobase/nocobase/pull/8752)) par @zhangzhonghe

  - Désactivation de l'ajout de blocs pour les enregistrements associés plusieurs-à-plusieurs (tableau) afin d'éviter des erreurs. ([#8779](https://github.com/nocobase/nocobase/pull/8779)) par @gchust

  - Correction d'un problème où le bloc de données d'origine ne se rafraîchissait pas après la modification des données dans la fenêtre contextuelle du champ d'association. ([#8782](https://github.com/nocobase/nocobase/pull/8782)) par @gchust

  - Correction du rognage des onglets et garantie d'une largeur minimale des onglets en mode conception ([#8771](https://github.com/nocobase/nocobase/pull/8771)) par @zhangzhonghe

  - Correction de la validation pour les champs obligatoires masqués par liaison en mode configuration ([#8773](https://github.com/nocobase/nocobase/pull/8773)) par @zhangzhonghe

  - Correction des mises à jour retardées de l'interface utilisateur pour le basculement de la colonne masquée du sous-tableau et la suppression consécutive de colonnes ([#8755](https://github.com/nocobase/nocobase/pull/8755)) par @zhangzhonghe

  - Correction de l'apparition de deux vérifications obligatoires dans le formulaire de mise à jour d'enregistrement ([#8761](https://github.com/nocobase/nocobase/pull/8761)) par @jiannx

- **[base de données]**
  - Correction de l'absence de l'option 'Pagination simple' dans le modèle de vue de la collection. ([#8778](https://github.com/nocobase/nocobase/pull/8778)) par @cgyrock

  - La règle de validation de précision pour les champs numériques n'est pas effective ([#8768](https://github.com/nocobase/nocobase/pull/8768)) par @2013xile

- **[non défini]** Correction d'un problème où, après une mise à niveau, le système indiquait que plugin-block-reference était introuvable. ([#8757](https://github.com/nocobase/nocobase/pull/8757)) par @gchust

- **[Action : Exporter les enregistrements]** Correction du problème où les champs de type numérique dans les fichiers Excel s'affichaient sous forme de chaînes ([#8774](https://github.com/nocobase/nocobase/pull/8774)) par @cgyrock

- **[Bloc : Liste]** Correction d'un problème où les champs du bloc de liste ne pouvaient pas utiliser la variable d'enregistrement actuelle. ([#8784](https://github.com/nocobase/nocobase/pull/8784)) par @gchust

- **[Workflow]** Correction du problème où l'espace réservé de glissement de nœud s'affichait incorrectement lors du glissement de blocs dans le nœud d'approbation ([#8763](https://github.com/nocobase/nocobase/pull/8763)) par @mytharcher

- **[Modèles d'interface utilisateur]**
  - Correction d'un problème où la réutilisation du modèle de bloc d'enregistrement actuel pour le bloc de détails et le bloc de formulaire d'édition pouvait entraîner un chargement incorrect des données. ([#8775](https://github.com/nocobase/nocobase/pull/8775)) par @gchust

  - Correction d'un problème où les modifications apportées aux propriétés dans le flux d'événements d'un bloc de modèle ne prenaient pas effet. ([#8765](https://github.com/nocobase/nocobase/pull/8765)) par @gchust

- **[Source de données : Principale]**
  - La mise à jour de la valeur par défaut d'un champ JSON ne prend pas effet ([#8767](https://github.com/nocobase/nocobase/pull/8767)) par @2013xile

  - Erreur de synchronisation des champs ([#8766](https://github.com/nocobase/nocobase/pull/8766)) par @2013xile

- **[Employés IA]**
  - Correction des problèmes où dashscope/deepseek/kimi ne pouvaient pas lire les fichiers de documents téléchargés. ([#8732](https://github.com/nocobase/nocobase/pull/8732)) par @cgyrock

  - Correction d'une erreur d'appel d'outil lors de l'utilisation du modèle de raisonnement deepseek. ([#8741](https://github.com/nocobase/nocobase/pull/8741)) par @cgyrock

- **[Multi-espace]** Correction de l'erreur de permission d'espace lors de la création de données avec la clé primaire par @jiannx
