---
title: "NocoBase v2.0.13 : Prise en charge du bouton de déclenchement de workflow pour configurer le flux après succès"
description: "Notes de version de v2.0.13"
---

### 🎉 Nouvelles fonctionnalités

- **[client]** Prise en charge de la configuration du bouton de déclenchement de workflow pour définir le flux après succès ([#8726](https://github.com/nocobase/nocobase/pull/8726)) par @mytharcher

### 🚀 Améliorations

- **[Workflow]** Afficher tous les types de nœuds dans le menu d'ajout, même s'ils ne sont pas disponibles ([#8828](https://github.com/nocobase/nocobase/pull/8828)) par @mytharcher

- **[IA : Base de connaissances]** Refonte de la logique de chargement des documents de la base de connaissances. par @cgyrock

### 🐛 Corrections de bugs

- **[client]**
  - Correction du problème où le bloc de détails d'une collection SQL rencontrait une erreur lors du chargement des données. ([#8817](https://github.com/nocobase/nocobase/pull/8817)) par @gchust

  - Correction du problème où les règles de liaison de champ dans le bloc de détails ne prenaient pas effet lors du rendu initial. ([#8813](https://github.com/nocobase/nocobase/pull/8813)) par @gchust

- **[Visionneuse de fichiers Office]** Modification de la hauteur de la modale pour une valeur appropriée afin d'afficher davantage de contenu du fichier ([#8835](https://github.com/nocobase/nocobase/pull/8835)) par @mytharcher

- **[Modèles d'interface]** Correction du problème où le flux d'événements du bloc de référence dans le bloc tableau ne pouvait pas être configuré avec un flux d'événements de clic sur une ligne. ([#8814](https://github.com/nocobase/nocobase/pull/8814)) par @gchust
