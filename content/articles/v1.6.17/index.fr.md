---
title: "NocoBase v1.6.17 : Prise en charge de la recherche de champ dans le composant Filtre"
description: "Notes de version de la v1.6.17"
---

### 🚀 Améliorations

- **[utils]** Ajout d'une extension de durée pour dayjs ([#6630](https://github.com/nocobase/nocobase/pull/6630)) par @mytharcher

- **[client]**
  - Prise en charge de la recherche de champ dans le composant Filtre ([#6627](https://github.com/nocobase/nocobase/pull/6627)) par @mytharcher

  - Ajout de l'API `trim` pour `Input` et `Variable.TextArea` ([#6624](https://github.com/nocobase/nocobase/pull/6624)) par @mytharcher

- **[Gestionnaire d'erreurs]** Prise en charge d'un titre personnalisé dans le composant AppError. ([#6409](https://github.com/nocobase/nocobase/pull/6409)) par @sheldon66

- **[Restriction IP]** Mise à jour du contenu du message de restriction IP. par @sheldon66

- **[Stockage de fichiers : S3(Pro)]** Prise en charge des variables globales dans la configuration du stockage par @mytharcher

### 🐛 Corrections de bugs

- **[client]**
  - La règle avec la condition 'any' ne s'applique pas lorsque la liste de conditions est vide ([#6628](https://github.com/nocobase/nocobase/pull/6628)) par @katherinehhh

  - Problème de données avec le bloc Gantt dans une collection arborescente ([#6617](https://github.com/nocobase/nocobase/pull/6617)) par @katherinehhh

  - Les champs de relation dans le formulaire de filtre génèrent une erreur après l'actualisation de la page car x-data-source n'est pas transmis ([#6619](https://github.com/nocobase/nocobase/pull/6619)) par @zhangzhonghe

  - Échec de l'analyse des variables lorsque les paramètres d'URL contiennent des caractères chinois ([#6618](https://github.com/nocobase/nocobase/pull/6618)) par @katherinehhh

- **[Utilisateurs]** Problème d'analyse du schéma du formulaire de profil utilisateur ([#6635](https://github.com/nocobase/nocobase/pull/6635)) par @2013xile

- **[Mobile]** Le champ à sélection unique avec le filtre 'contient' sur mobile ne prend pas en charge la sélection multiple ([#6629](https://github.com/nocobase/nocobase/pull/6629)) par @katherinehhh

- **[Action : Exporter les enregistrements]** Paramètres de filtre manquants lors de l'exportation des données après un changement de pagination ([#6633](https://github.com/nocobase/nocobase/pull/6633)) par @katherinehhh

- **[Gestionnaire d'emails]** Correction de l'autorisation de gestion des emails qui ne permettait pas de voir la liste des emails par @jiannx

- **[Stockage de fichiers : S3(Pro)]** Envoi d'une erreur à l'utilisateur lors du téléchargement du logo vers le stockage S3 Pro (défini par défaut) par @mytharcher

- **[Workflow : Approbation]** Correction de `updatedAt` modifié après la migration par @mytharcher

- **[Gestionnaire de migration]** L'heure de création du journal de migration s'affiche incorrectement dans certains environnements par @gchust
