---
title: "NocoBase v2.0.0-beta.16 : Ajout d'une API pour déplacer un nœud"
description: "Notes de version de la v2.0.0-beta.16"
---

### 🎉 Nouvelles fonctionnalités

- **[client]** ajout du composant de champ sous-tableau (édition contextuelle) ([#8280](https://github.com/nocobase/nocobase/pull/8280)) par @katherinehhh

- **[Workflow]** Ajout d'une API pour déplacer un nœud ([#8507](https://github.com/nocobase/nocobase/pull/8507)) par @mytharcher

### 🚀 Améliorations

- **[client]**
  - empêcher le re-rendu complet du tableau lors de la mise à jour d'une cellule ([#8349](https://github.com/nocobase/nocobase/pull/8349)) par @katherinehhh

  - Amélioration du sous-formulaire "vers plusieurs" pour initialiser avec un élément par défaut et éviter la création d'enregistrements lorsqu'il est laissé vide ([#8458](https://github.com/nocobase/nocobase/pull/8458)) par @katherinehhh

- **[Gestionnaire de fichiers]** Ajout d'un visualiseur extensible pour le gestionnaire de fichiers ([#8501](https://github.com/nocobase/nocobase/pull/8501)) par @mytharcher

- **[Workflow]** Modification du chemin des sous-pages du workflow, afin que toutes les pages de workflow soient sous le préfixe `/admin/settings/workflow` ([#8519](https://github.com/nocobase/nocobase/pull/8519)) par @mytharcher

### 🐛 Corrections de bugs

- **[client]**
  - Correction de l'heure dupliquée dans la valeur DateTime du filtre ([#8506](https://github.com/nocobase/nocobase/pull/8506)) par @zhangzhonghe

  - Correction d'un problème empêchant l'utilisation de variables de formulaire pour attribuer des valeurs dans les règles de liaison pour les champs de sous-formulaire "vers plusieurs" multi-niveaux. ([#8518](https://github.com/nocobase/nocobase/pull/8518)) par @gchust

  - Correction d'un problème où les données ne se rafraîchissaient pas après des modifications dans des fenêtres contextuelles multi-niveaux et entre blocs. ([#8471](https://github.com/nocobase/nocobase/pull/8471)) par @gchust

  - correction d'un problème où les données de sous-détail en mode lecture seule ne pouvaient pas être affichées correctement dans le formulaire d'édition ([#8469](https://github.com/nocobase/nocobase/pull/8469)) par @katherinehhh

  - correction de la logique d'affinement pour targetKey optionnel ([#8333](https://github.com/nocobase/nocobase/pull/8333)) par @katherinehhh

  - correction de paramètres de filtre incorrects pour le champ Select de relation dans le sous-tableau éditable ([#8335](https://github.com/nocobase/nocobase/pull/8335)) par @katherinehhh

- **[moteur de flux]** correction du problème FilterByTK lorsque filterTargetKey est un tableau à un seul élément dans une source de données externe ([#8522](https://github.com/nocobase/nocobase/pull/8522)) par @katherinehhh

- **[Employés IA]** correction des problèmes de configuration incohérente des champs sélectionnables entre la modélisation IA et la gestion des sources de données ([#8488](https://github.com/nocobase/nocobase/pull/8488)) par @cgyrock

- **[Gestionnaire d'emails]** le corps ne se réduit pas lorsque le texte est sélectionné. Correction de l'échec du téléchargement des pièces jointes par @jiannx
