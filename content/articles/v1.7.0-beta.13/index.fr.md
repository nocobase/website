---
title: "NocoBase v1.7.0-beta.13 : Prise en charge de l'utilisation de modèles de bloc pour le formulaire de processus d'approbation"
description: "Notes de version de v1.7.0-beta.13"
---

### 🚀 Améliorations

- **[base de données]**
  - Ajout de l'option de suppression des espaces pour le champ texte ([#6603](https://github.com/nocobase/nocobase/pull/6603)) par @mytharcher

  - Ajout de l'option de suppression des espaces pour le champ chaîne de caractères ([#6565](https://github.com/nocobase/nocobase/pull/6565)) par @mytharcher

- **[client]** Prise en charge de la configuration de la visibilité des deux-points dans les étiquettes des champs de formulaire en fonction de la disposition ([#6561](https://github.com/nocobase/nocobase/pull/6561)) par @katherinehhh

- **[Gestionnaire de fichiers]** Ajout de l'option de suppression des espaces pour les champs texte de la collection de stockages ([#6604](https://github.com/nocobase/nocobase/pull/6604)) par @mytharcher

- **[Workflow]** Amélioration du code ([#6589](https://github.com/nocobase/nocobase/pull/6589)) par @mytharcher

- **[Workflow : Approbation]** Prise en charge de l'utilisation d'un modèle de bloc pour le formulaire de processus d'approbation par @mytharcher

### 🐛 Corrections de bugs

- **[base de données]**
  - Éviter les modifications du champ "datetimeNoTz" lorsque la valeur n'est pas modifiée lors de la mise à jour d'un enregistrement ([#6588](https://github.com/nocobase/nocobase/pull/6588)) par @mytharcher

  - Lors de la suppression d'enregistrements un-à-plusieurs, si `filter` et `filterByTk` sont tous deux transmis et que `filter` inclut un champ d'association, `filterByTk` est ignoré ([#6606](https://github.com/nocobase/nocobase/pull/6606)) par @2013xile

- **[client]**
  - Correction de la propriété `disabled` qui ne fonctionne pas lorsque `SchemaInitializerItem` a des `items` ([#6597](https://github.com/nocobase/nocobase/pull/6597)) par @mytharcher

  - Problème de cascade : 'La valeur de xxx ne peut pas être au format tableau' lors de la suppression et de la re-sélection ([#6585](https://github.com/nocobase/nocobase/pull/6585)) par @katherinehhh

  - Champ d'association (sélection) affichant N/A lors de l'exposition des champs de la collection liée ([#6582](https://github.com/nocobase/nocobase/pull/6582)) par @katherinehhh

  - Les boutons de soumission et d'actualisation n'affichent pas correctement le mode icône uniquement ([#6592](https://github.com/nocobase/nocobase/pull/6592)) par @katherinehhh

- **[Formulaires publics]** Les autorisations de visualisation incluent la liste et l'obtention ([#6607](https://github.com/nocobase/nocobase/pull/6607)) par @chenos

- **[Authentification]** Attribution du jeton dans `AuthProvider` ([#6593](https://github.com/nocobase/nocobase/pull/6593)) par @2013xile

- **[Champ de collection : Plusieurs-à-plusieurs (tableau)]** Problème de filtrage par champs dans une collection d'association avec un champ plusieurs-à-plusieurs (tableau) ([#6596](https://github.com/nocobase/nocobase/pull/6596)) par @2013xile

- **[Workflow]** Correction de l'affichage incorrect de l'option de synchronisation ([#6595](https://github.com/nocobase/nocobase/pull/6595)) par @mytharcher

- **[Bloc : Carte]** La validation de la gestion de la carte ne doit pas réussir avec une saisie d'espace ([#6575](https://github.com/nocobase/nocobase/pull/6575)) par @katherinehhh

- **[Auth : OIDC]** Redirection incorrecte lorsque le chemin de rappel est la chaîne 'null' par @2013xile

- **[Workflow : Approbation]**
  - Correction des variables client à utiliser dans le formulaire d'approbation par @mytharcher

  - Correction du mode branche lorsque `endOnReject` est configuré sur `true` par @mytharcher
