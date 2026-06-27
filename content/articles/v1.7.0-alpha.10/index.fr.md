---
title: "NocoBase v1.7.0-alpha.10 : Prise en charge de la configuration des variables après soumission"
description: "Notes de version de v1.7.0-alpha.10"
---

### 🎉 Nouvelles fonctionnalités

- **[client]** Prise en charge de la configuration des variables après soumission, permettant la redirection avec l'ID de données actuel ([#6465](https://github.com/nocobase/nocobase/pull/6465)) par @katherinehhh

- **[Champ de collection : Markdown(Vditor)]** Vditor prend en charge S3 Pro ([#6441](https://github.com/nocobase/nocobase/pull/6441)) par @zhangzhonghe

### 🚀 Améliorations

- **[client]**
  - Seuls les fichiers texte brut sont pris en charge pour l'aperçu ([#6563](https://github.com/nocobase/nocobase/pull/6563)) par @mytharcher

  - Optimisation du message d'erreur 502 ([#6547](https://github.com/nocobase/nocobase/pull/6547)) par @chenos

  - Restriction des actions disponibles pour différentes propriétés de champ dans les règles de liaison ([#6548](https://github.com/nocobase/nocobase/pull/6548)) par @katherinehhh

- **[Workflow]** Division des colonnes exécutées en tables de statistiques ([#6534](https://github.com/nocobase/nocobase/pull/6534)) par @mytharcher

- **[Mobile]** Adaptation du style de la fenêtre contextuelle de notification pour les appareils mobiles ([#6557](https://github.com/nocobase/nocobase/pull/6557)) par @zhangzhonghe

- **[Champ de collection : Séquence]** Prise en charge de la définition de la séquence comme champ de titre pour le bloc calendrier ([#6562](https://github.com/nocobase/nocobase/pull/6562)) par @katherinehhh

- **[Gestionnaire de fichiers]** Ajustement de l'API `getFileData` du stockage ([#6553](https://github.com/nocobase/nocobase/pull/6553)) par @mytharcher

- **[Contrôle d'accès]** Optimisation de l'ordre et du style du changement de rôle ([#6555](https://github.com/nocobase/nocobase/pull/6555)) par @aaaaaajie

- **[Formulaires publics]** Définition du titre de la page du formulaire public sur le titre configuré lors de la création ([#6538](https://github.com/nocobase/nocobase/pull/6538)) par @katherinehhh

- **[Workflow : Événement d'action personnalisée]** Division des colonnes exécutées en tables de statistiques par @mytharcher

- **[Workflow : Approbation]**
  - Prise en charge de l'ignorance du validateur dans les paramètres par @mytharcher

  - Division des colonnes exécutées en tables de statistiques par @mytharcher

### 🐛 Corrections de bugs

- **[client]**
  - Les anciennes versions des navigateurs affichent une page blanche ([#6571](https://github.com/nocobase/nocobase/pull/6571)) par @zhangzhonghe

  - Impossible d'ouvrir une autre modale dans une modale ([#6535](https://github.com/nocobase/nocobase/pull/6535)) par @zhangzhonghe

  - L'option 'Contenu tronqué avec points de suspension' nécessite un rafraîchissement de la page pour que l'état de basculement prenne effet ([#6520](https://github.com/nocobase/nocobase/pull/6520)) par @zhangzhonghe

  - Problème d'affichage du champ de date dans le filtrage de la portée des données ([#6564](https://github.com/nocobase/nocobase/pull/6564)) par @katherinehhh

  - Le menu supérieur de la page s'affiche vide ([#6551](https://github.com/nocobase/nocobase/pull/6551)) par @zhangzhonghe

  - L'action 'Enregistrer comme modèle' échoue si elle contient un champ d'association ([#6543](https://github.com/nocobase/nocobase/pull/6543)) par @gchust

  - Impossible d'utiliser la variable 'Utilisateur actuel' lors de l'ajout d'une page de lien ([#6536](https://github.com/nocobase/nocobase/pull/6536)) par @zhangzhonghe

  - L'affectation de champ avec une valeur nulle est inefficace ([#6549](https://github.com/nocobase/nocobase/pull/6549)) par @katherinehhh

  - L'action 'Enregistrer comme modèle' échoue si elle contient un champ d'association ([#6543](https://github.com/nocobase/nocobase/pull/6543)) par @gchust

  - Suppression de l'option 'Autoriser la sélection multiple' des champs de sélection unique déroulante dans les formulaires de filtre ([#6515](https://github.com/nocobase/nocobase/pull/6515)) par @zhangzhonghe

  - La liaison de la plage de données du champ relationnel n'est pas efficace ([#6530](https://github.com/nocobase/nocobase/pull/6530)) par @zhangzhonghe

  - Erreur de la commande `yarn doc` ([#6540](https://github.com/nocobase/nocobase/pull/6540)) par @gchust

  - Problème de glisser-déposer des boutons de ligne de tableau ([#6544](https://github.com/nocobase/nocobase/pull/6544)) par @katherinehhh

- **[Mobile]** Ajustement de la taille de police affichée sur le téléphone à 14px ([#6570](https://github.com/nocobase/nocobase/pull/6570)) par @zhangzhonghe

- **[Workflow]**
  - Correction de l'erreur générée lors de la configuration des options de suppression automatique ([#6560](https://github.com/nocobase/nocobase/pull/6560)) par @mytharcher

  - Assurer que la clé du workflow est générée avant l'enregistrement ([#6567](https://github.com/nocobase/nocobase/pull/6567)) par @mytharcher

- **[Variables et secrets]** Bouton de filtre d'icône manquant, nombre de filtres non affiché et données non actualisées après le filtrage lors du changement de page ([#6568](https://github.com/nocobase/nocobase/pull/6568)) par @katherinehhh

- **[Formulaires publics]** Problème d'affichage du titre de la page du formulaire public affichant 'Chargement...' ([#6569](https://github.com/nocobase/nocobase/pull/6569)) par @katherinehhh

- **[Documentation API]** La page de documentation API ne peut pas défiler ([#6566](https://github.com/nocobase/nocobase/pull/6566)) par @zhangzhonghe

- **[Workflow : Événement post-action]** Plusieurs enregistrements dans une action groupée doivent déclencher plusieurs fois ([#6559](https://github.com/nocobase/nocobase/pull/6559)) par @mytharcher

- **[Bloc : modèle]**
  - Menu 'Enregistrer comme modèle' en double dans le bloc de détails ([#6558](https://github.com/nocobase/nocobase/pull/6558)) par @gchust

  - Les règles de liaison du bloc de formulaire n'ont pas été correctement synchronisées à partir du modèle ([#6550](https://github.com/nocobase/nocobase/pull/6550)) par @gchust

- **[Authentification]** Problème de localisation pour les champs de la page d'inscription ([#6556](https://github.com/nocobase/nocobase/pull/6556)) par @2013xile

- **[Action : Requête personnalisée]** Impossible de télécharger les fichiers encodés en UTF-8 ([#6541](https://github.com/nocobase/nocobase/pull/6541)) par @2013xile

- **[Collection : Arborescence]** Problème de migration pour plugin-collection-tree ([#6537](https://github.com/nocobase/nocobase/pull/6537)) par @2013xile

- **[Bloc : Formulaire multi-étapes]** Le bouton de soumission a la même couleur dans son état par défaut et en surbrillance par @jiannx

- **[Workflow : Approbation]** Correction des valeurs du formulaire d'approbation à soumettre par @mytharcher
