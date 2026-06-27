---
title: "NocoBase v2.0.0-beta.18 : prise en charge de env.ESM_CDN_BASE_URL"
description: "Notes de version de v2.0.0-beta.18"
---

### 🎉 Nouvelles fonctionnalités

- **[moteur de workflow]** prise en charge de env.ESM_CDN_BASE_URL ([#8529](https://github.com/nocobase/nocobase/pull/8529)) par @chenos

### 🚀 Améliorations

- **[acl]** acl ajoute la méthode generalFixedParams ([#8363](https://github.com/nocobase/nocobase/pull/8363)) par @jiannx

- **[client]** Prise en charge de la désactivation des paramètres par défaut redondants pour `ResourceActionProvider` ([#8527](https://github.com/nocobase/nocobase/pull/8527)) par @2013xile

- **[Auth: DingTalk]** Utilisation de `userid` comme clé par défaut pour l'association utilisateur, tout en préservant la compatibilité avec les authentificateurs existants qui reposent sur le mobile par @2013xile

### 🐛 Corrections de bugs

- **[client]**
  - Correction d'un problème où le flux d'événements ne s'appliquait pas lors de l'actualisation des blocs cibles à travers une popup. ([#8541](https://github.com/nocobase/nocobase/pull/8541)) par @gchust

  - Correction d'un problème où les données de la page étaient incorrectement actualisées après l'ouverture et la fermeture de la popup pour la première fois. ([#8548](https://github.com/nocobase/nocobase/pull/8548)) par @gchust

  - Correction d'un problème qui entraînait l'actualisation répétée du bloc de données après la soumission d'un formulaire. ([#8531](https://github.com/nocobase/nocobase/pull/8531)) par @gchust

  - Correction du champ nanoid qui ne régénérait pas la valeur par défaut après la soumission de la création ([#8538](https://github.com/nocobase/nocobase/pull/8538)) par @katherinehhh

  - Correction de l'affichage incorrect lors de la définition des valeurs par défaut pour le modèle de champ en cascade ([#8537](https://github.com/nocobase/nocobase/pull/8537)) par @katherinehhh

- **[moteur de workflow]** Correction du chargement incorrect de certaines bibliothèques ESM dans runjs en raison d'une classification erronée en modules AMD. ([#8536](https://github.com/nocobase/nocobase/pull/8536)) par @gchust

- **[Gestionnaire de fichiers]** Sécurisation du chemin des fichiers pour le stockage local, afin d'éviter un chemin d'accès en dehors de la racine du document ([#8539](https://github.com/nocobase/nocobase/pull/8539)) par @mytharcher

- **[Workflow]** Ajout de la tolérance aux pannes pour le composant de sélection d'enregistrement de collection, afin d'éviter une erreur lorsque la collection est supprimée ([#8528](https://github.com/nocobase/nocobase/pull/8528)) par @mytharcher

- **[Employés IA]** Correction de l'exception qui se produit lorsque les outils sont appelés automatiquement lors de la modélisation des données IA ([#8532](https://github.com/nocobase/nocobase/pull/8532)) par @cgyrock

- **[Action : Importer des enregistrements Pro]** Correction des nombres dans le résultat d'importation et de la traduction des messages par @mytharcher

- **[Workflow : Sous-workflow]** Correction du chemin de route du lien de workflow par @mytharcher

- **[Impression de modèle]** Correction d'un problème d'affichage de la liste des champs dans la configuration de l'action d'impression de modèle par @katherinehhh

- **[Workflow : Approbation]**
  - Correction d'une erreur lors de l'ajout d'un rôle à un utilisateur si le workflow des audiences est désactivé par @mytharcher

  - Ajout de la tolérance aux pannes lors de la suppression d'un workflow, afin d'éviter une erreur de chargement dans la liste des tâches par @mytharcher

- **[WeCom]** Correction d'un problème où les utilisateurs ne pouvaient pas être automatiquement enregistrés lorsque le mobile est manquant par @2013xile
