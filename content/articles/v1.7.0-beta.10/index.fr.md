---
title: "NocoBase v1.7.0-beta.10 : Prise en charge de la configuration variable après soumission"
description: "Notes de version de v1.7.0-beta.10"
---

### 🎉 Nouvelles fonctionnalités

- **[client]** Prise en charge de la configuration des variables après soumission, permettant la redirection avec l'ID de données actuel ([#6465](https://github.com/nocobase/nocobase/pull/6465)) par @katherinehhh

- **[Champ de collection : Markdown(Vditor)]** Vditor prend en charge S3 Pro ([#6441](https://github.com/nocobase/nocobase/pull/6441)) par @zhangzhonghe

### 🚀 Améliorations

- **[client]**
  - Seuls les fichiers texte brut sont pris en charge pour l'aperçu ([#6563](https://github.com/nocobase/nocobase/pull/6563)) par @mytharcher

  - Optimisation du message d'erreur 502 ([#6547](https://github.com/nocobase/nocobase/pull/6547)) par @chenos

  - Restriction des actions disponibles pour différentes propriétés de champ dans les règles de liaison ([#6548](https://github.com/nocobase/nocobase/pull/6548)) par @katherinehhh

- **[Gestionnaire de fichiers]** Ajustement de l'API `getFileData` du stockage ([#6553](https://github.com/nocobase/nocobase/pull/6553)) par @mytharcher

- **[Contrôle d'accès]** Optimisation de l'ordre et du style du changement de rôle ([#6555](https://github.com/nocobase/nocobase/pull/6555)) par @aaaaaajie

- **[Champ de collection : Séquence]** Prise en charge de la définition de la séquence comme champ de titre pour le bloc calendrier ([#6562](https://github.com/nocobase/nocobase/pull/6562)) par @katherinehhh

- **[Workflow]** Division des colonnes exécutées dans les tableaux de statistiques ([#6534](https://github.com/nocobase/nocobase/pull/6534)) par @mytharcher

- **[Workflow : Événement d'action personnalisée]** Division des colonnes exécutées dans les tableaux de statistiques par @mytharcher

- **[Workflow : Approbation]**
  - Division des colonnes exécutées dans les tableaux de statistiques par @mytharcher

  - Prise en charge de l'ignorance du validateur dans les paramètres par @mytharcher

### 🐛 Corrections de bugs

- **[client]**
  - Les anciennes versions des navigateurs affichent une page blanche ([#6571](https://github.com/nocobase/nocobase/pull/6571)) par @zhangzhonghe

  - L'option 'Contenu tronqué avec points de suspension' nécessite un rafraîchissement de la page pour que l'état de basculement prenne effet ([#6520](https://github.com/nocobase/nocobase/pull/6520)) par @zhangzhonghe

  - Problème d'affichage du champ de date dans le filtrage de la portée des données ([#6564](https://github.com/nocobase/nocobase/pull/6564)) par @katherinehhh

  - Impossible d'ouvrir une autre fenêtre modale dans une fenêtre modale ([#6535](https://github.com/nocobase/nocobase/pull/6535)) par @zhangzhonghe

  - L'action 'Enregistrer comme modèle' échoue si elle contient un champ d'association ([#6543](https://github.com/nocobase/nocobase/pull/6543)) par @gchust

  - Le menu supérieur de la page s'affiche vide ([#6551](https://github.com/nocobase/nocobase/pull/6551)) par @zhangzhonghe

  - L'affectation de champ avec une valeur nulle est inefficace ([#6549](https://github.com/nocobase/nocobase/pull/6549)) par @katherinehhh

- **[Workflow]**
  - Assurer la génération de la clé de workflow avant l'enregistrement ([#6567](https://github.com/nocobase/nocobase/pull/6567)) par @mytharcher

  - Correction d'une erreur lors de la configuration des options de suppression automatique ([#6560](https://github.com/nocobase/nocobase/pull/6560)) par @mytharcher

- **[Formulaires publics]** Problème d'affichage du titre de la page du formulaire public avec 'Chargement...' ([#6569](https://github.com/nocobase/nocobase/pull/6569)) par @katherinehhh

- **[Mobile]** Ajustement de la taille de police affichée sur le téléphone à 14px ([#6570](https://github.com/nocobase/nocobase/pull/6570)) par @zhangzhonghe

- **[Variables et secrets]** Bouton de filtre d'icône manquant, nombre de filtres non affiché et données non actualisées après filtrage lors du changement de page ([#6568](https://github.com/nocobase/nocobase/pull/6568)) par @katherinehhh

- **[Authentification]** Problème de localisation pour les champs de la page d'inscription ([#6556](https://github.com/nocobase/nocobase/pull/6556)) par @2013xile

- **[Documentation API]** La page de documentation API ne peut pas défiler ([#6566](https://github.com/nocobase/nocobase/pull/6566)) par @zhangzhonghe

- **[Workflow : Événement post-action]** Les enregistrements multiples dans une action groupée doivent se déclencher plusieurs fois ([#6559](https://github.com/nocobase/nocobase/pull/6559)) par @mytharcher

- **[Bloc : modèle]**
  - Les règles de liaison du bloc formulaire n'ont pas été correctement synchronisées à partir du modèle ([#6550](https://github.com/nocobase/nocobase/pull/6550)) par @gchust

  - Menu 'Enregistrer comme modèle' en double dans le bloc de détails ([#6558](https://github.com/nocobase/nocobase/pull/6558)) par @gchust

- **[Workflow : Approbation]** Correction des valeurs du formulaire d'approbation à soumettre par @mytharcher
