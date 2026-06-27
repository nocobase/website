---
title: "NocoBase v2.1.0-alpha.15 : Ajout du bloc de filtre arborescent"
description: "Notes de version de v2.1.0-alpha.15"
---

### 🎉 Nouvelles fonctionnalités

- **[Bloc : Arborescence]** Ajout d'un bloc de filtre arborescent ([#9016](https://github.com/nocobase/nocobase/pull/9016)) par @jiannx

- **[Auth : Clés API]** ajout des commandes `pm list` et `generate-api-key` ([#9076](https://github.com/nocobase/nocobase/pull/9076)) par @chenos

- **[Employés IA]**
  - Ajout d'un outil de requête de données et d'un outil de rapport d'analyse métier pour les employés IA ([#9040](https://github.com/nocobase/nocobase/pull/9040)) par @2013xile

  - Ajout d'un outil de recherche web basé sur LLM pour les employés IA ([#9032](https://github.com/nocobase/nocobase/pull/9032)) par @cgyrock

- **[Gestionnaire de migration]** prise en charge de la commande de migration par @chenos

- **[Gestionnaire d'emails]** Gmail prend désormais en charge l'envoi d'emails avec des alias par @jiannx

### 🐛 Corrections de bugs

- **[Moteur de workflow]** Correction du problème empêchant l'ajout de champs plusieurs-à-un provenant de sources de données externes dans le bloc tableau ([#9068](https://github.com/nocobase/nocobase/pull/9068)) par @jiannx

- **[Client]**
  - Correction d'une erreur lors de l'ajout d'un champ plusieurs-à-plusieurs dans un sous-tableau ([#9070](https://github.com/nocobase/nocobase/pull/9070)) par @jiannx

  - Correction d'un problème où la fenêtre contextuelle de sélection d'enregistrement depuis un bouton de sélection de sous-tableau ne résolvait pas correctement les valeurs des variables de l'élément parent. ([#8996](https://github.com/nocobase/nocobase/pull/8996)) par @gchust

  - Correction d'un problème où un message de confirmation de modifications non enregistrées incorrect apparaissait pour l'action d'édition en masse ([#9054](https://github.com/nocobase/nocobase/pull/9054)) par @gchust

  - Correction d'un problème où une fenêtre contextuelle de confirmation secondaire incorrecte apparaissait lors de la soumission du formulaire après la création d'un enregistrement via un sous-tableau contextuel. ([#9035](https://github.com/nocobase/nocobase/pull/9035)) par @gchust

  - Correction du problème où ctx.request ne pouvait pas remplacer l'en-tête Authorization. ([#8850](https://github.com/nocobase/nocobase/pull/8850)) par @gchust

- **[Gestionnaire de source de données]** Correction d'un problème où certains types de champs n'étaient pas correctement mis à jour après la synchronisation des champs depuis la base de données ([#9046](https://github.com/nocobase/nocobase/pull/9046)) par @2013xile

- **[Gestionnaire de notifications]** Optimisation des performances d'envoi des notifications dans l'application dans les scénarios de workflow ([#9066](https://github.com/nocobase/nocobase/pull/9066)) par @mytharcher

- **[Champ de collection : Code]** Correction de l'interface utilisateur des champs de code ([#9061](https://github.com/nocobase/nocobase/pull/9061)) par @2013xile

- **[Workflow : Nœud de requête HTTP]** Assainissement des résultats du nœud de requête du workflow pour éviter d'exposer la configuration de la requête, les nouveaux nœuds ne renvoient désormais que les données de réponse par défaut, et ajout de journaux de débogage pour les requêtes échouées. ([#9024](https://github.com/nocobase/nocobase/pull/9024)) par @mytharcher

- **[Employés IA]**
  - Correction du problème où l'annulation du raisonnement des employés IA entraînait un plantage du service ([#9031](https://github.com/nocobase/nocobase/pull/9031)) par @cgyrock

  - Correction d'un échec de téléchargement de document par un employé IA en cas d'accès via un sous-chemin avec APP_PUBLIC_PATH configuré. ([#9034](https://github.com/nocobase/nocobase/pull/9034)) par @cgyrock

  - Correction du problème lors de l'utilisation des modèles deepseek ou minmax sur dashscope ([#9033](https://github.com/nocobase/nocobase/pull/9033)) par @cgyrock
