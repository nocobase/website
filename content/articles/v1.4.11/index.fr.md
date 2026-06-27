---
title: "NocoBase v1.4.11 : Optimiser les éléments de configuration des composants"
description: "Notes de version de la v1.4.11"
---

### 🚀 Améliorations

- **[client]** Rendre davantage de composants compatibles avec l'élément de configuration 'Débordement du contenu avec points de suspension' ([#5888](https://github.com/nocobase/nocobase/pull/5888)) par @zhangzhonghe

- **[database]** Ajouter `firstOrCreate` et `updateOrCreate` au dépôt de relations ([#5894](https://github.com/nocobase/nocobase/pull/5894)) par @chareice

### 🐛 Corrections de bugs

- **[client]**
  - Correction du paramètre `x-data-source` manquant dans le modèle de requête en double pour le bloc de source de données externe ([#5882](https://github.com/nocobase/nocobase/pull/5882)) par @katherinehhh

  - Correction du problème de barre de défilement horizontale dans le tableau au sein du plugin ([#5899](https://github.com/nocobase/nocobase/pull/5899)) par @katherinehhh

  - Correction du problème où des options supplémentaires 'N/A' apparaissaient parfois dans les listes déroulantes des champs d'association ([#5878](https://github.com/nocobase/nocobase/pull/5878)) par @zhangzhonghe

  - Correction du problème de création de vue PG, résolution de l'erreur lors de la sélection de vues entre schémas ([#5881](https://github.com/nocobase/nocobase/pull/5881)) par @katherinehhh

  - Correction du problème de styles de groupe dans les blocs de formulaire lorsque la disposition est définie sur horizontale ([#5884](https://github.com/nocobase/nocobase/pull/5884)) par @katherinehhh

- **[Utilisateurs]**
  - Correction du problème où le formulaire n'était pas réinitialisé après l'ajout ou la modification d'un utilisateur dans la gestion des utilisateurs. ([#5875](https://github.com/nocobase/nocobase/pull/5875)) par @2013xile

  - Correction des problèmes où les paramètres de pagination étaient réinitialisés après la modification et la soumission des profils utilisateur dans la gestion des utilisateurs suite à un changement de page ou de taille de page. ([#5893](https://github.com/nocobase/nocobase/pull/5893)) par @2013xile

- **[Gestionnaire de sources de données]** Correction des problèmes de filtrage avec la collection de source de données externe ([#5890](https://github.com/nocobase/nocobase/pull/5890)) par @chareice

- **[Formulaires publics]** Correction du problème où le changement de thème global affectait le thème de la page d'aperçu du formulaire public ([#5883](https://github.com/nocobase/nocobase/pull/5883)) par @katherinehhh
