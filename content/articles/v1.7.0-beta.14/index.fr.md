---
title: "NocoBase v1.7.0-bêta.14 : Ajout du module de localisation"
description: "Notes de version de la v1.7.0-bêta.14"
---

### 🎉 Nouvelles fonctionnalités

- **[Stockage du schéma d'interface utilisateur]** Ajout d'un module de localisation pour UISchema, permettant des traductions personnalisées pour le titre et la description du schéma ([#6574](https://github.com/nocobase/nocobase/pull/6574)) par @chenos

### 🚀 Améliorations

- **[utils]** Ajout d'une extension de durée pour dayjs ([#6630](https://github.com/nocobase/nocobase/pull/6630)) par @mytharcher

- **[client]**
  - Prise en charge de la recherche de champ dans le composant Filtre ([#6627](https://github.com/nocobase/nocobase/pull/6627)) par @mytharcher

  - Ajout de l'API `trim` pour `Input` et `Variable.TextArea` ([#6624](https://github.com/nocobase/nocobase/pull/6624)) par @mytharcher

- **[Workflow]** Optimisation de la logique de sauvegarde des tâches ([#6613](https://github.com/nocobase/nocobase/pull/6613)) par @mytharcher

- **[Gestionnaire d'erreurs]** Prise en charge d'un titre personnalisé dans le composant AppError. ([#6409](https://github.com/nocobase/nocobase/pull/6409)) par @sheldon66

- **[Restriction IP]** Mise à jour du contenu du message de restriction IP. par @sheldon66

- **[Stockage de fichiers : S3(Pro)]** Prise en charge des variables globales dans la configuration du stockage par @mytharcher

### 🐛 Corrections de bugs

- **[client]**
  - Les champs de relation dans le formulaire de filtre génèrent une erreur après l'actualisation de la page car x-data-source n'est pas transmis ([#6619](https://github.com/nocobase/nocobase/pull/6619)) par @zhangzhonghe

  - Problème de données avec le bloc Gantt dans une collection arborescente ([#6617](https://github.com/nocobase/nocobase/pull/6617)) par @katherinehhh

  - Zone blanche entre le titre de la page de configuration du modèle de bloc et le menu ([#6625](https://github.com/nocobase/nocobase/pull/6625)) par @gchust

  - La règle avec la condition 'any' ne s'applique pas lorsque la liste de conditions est vide ([#6628](https://github.com/nocobase/nocobase/pull/6628)) par @katherinehhh

  - La propriété x-disabled ne s'applique pas sur les champs de formulaire ([#6610](https://github.com/nocobase/nocobase/pull/6610)) par @katherinehhh

  - Échec d'analyse de variable lorsque les paramètres d'URL contiennent des caractères chinois ([#6618](https://github.com/nocobase/nocobase/pull/6618)) par @katherinehhh

  - Problème d'affichage du libellé de champ pour éviter la troncature par les deux-points ([#6599](https://github.com/nocobase/nocobase/pull/6599)) par @katherinehhh

- **[Action : Exporter les enregistrements]** Paramètres de filtre manquants lors de l'exportation de données après un changement de pagination ([#6633](https://github.com/nocobase/nocobase/pull/6633)) par @katherinehhh

- **[Utilisateurs]** Problème d'analyse du schéma du formulaire de profil utilisateur ([#6635](https://github.com/nocobase/nocobase/pull/6635)) par @2013xile

- **[Mobile]** Le champ à sélection unique avec le filtre 'contient' sur mobile ne prend pas en charge la sélection multiple ([#6629](https://github.com/nocobase/nocobase/pull/6629)) par @katherinehhh

- **[Contrôle d'accès]** Correction du calcul de l'union des rôles ([#6605](https://github.com/nocobase/nocobase/pull/6605)) par @aaaaaajie

- **[Bloc : modèle]** La modification et la suppression des mêmes champs à partir du modèle et du bloc, après la création d'un bloc à partir du modèle, peuvent entraîner des erreurs de rendu ([#6626](https://github.com/nocobase/nocobase/pull/6626)) par @gchust

- **[Gestionnaire d'e-mails]**
  - Correction de l'absence d'await pour l'appel suivant. par @jiannx

  - Correction de l'impossibilité pour la permission de gestion des e-mails d'afficher la liste des e-mails par @jiannx

- **[Stockage de fichiers : S3(Pro)]**
  - Correction de l'absence d'await pour l'appel suivant. par @jiannx

  - Envoi d'une erreur à l'utilisateur lors du téléchargement du logo vers le stockage S3 Pro (défini par défaut) par @mytharcher

- **[Workflow : Approbation]** Correction de `updatedAt` modifié après la migration par @mytharcher

- **[Gestionnaire de migration]** L'heure de création du journal de migration est affichée incorrectement dans certains environnements par @gchust
