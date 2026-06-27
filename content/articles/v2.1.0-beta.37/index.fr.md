---
title: "NocoBase v2.1.0-beta.37 : prise en charge de l'authentification de base"
description: "Notes de version de la v2.1.0-beta.37"
---

### 🎉 Nouvelles fonctionnalités

- **[client-v2]** Ajout d'un menu Sécurité et de la page des paramètres de stratégie de jeton dans l'administration v2 ; le centre utilisateur prend désormais en charge le changement de mot de passe. ([#9556](https://github.com/nocobase/nocobase/pull/9556)) par @Molunerfinn

- **[cli]** Prise en charge de l'authentification de base ([#9558](https://github.com/nocobase/nocobase/pull/9558)) par @chenos

- **[Stratégie de mot de passe]** Migration du plugin-password-policy vers l'interface d'administration client-v2 avec les pages de paramètres Stratégie de mot de passe / Utilisateurs verrouillés et l'application des règles côté client sur le formulaire de changement de mot de passe du centre utilisateur. par @Molunerfinn

### 🚀 Améliorations

- **[Visualisation des données]** Ajout de la prise en charge client v2 pour les blocs de graphiques. ([#9517](https://github.com/nocobase/nocobase/pull/9517)) par @jiannx

- **[Workflow]** Refonte des vérifications de disponibilité des nœuds asynchrones du workflow ([#9532](https://github.com/nocobase/nocobase/pull/9532)) par @mytharcher

### 🐛 Corrections de bugs

- **[build]**
  - Les ressources textuelles dans les builds serveur sont désormais copiées en tant que fichiers au lieu d'être converties en modules JavaScript. ([#9565](https://github.com/nocobase/nocobase/pull/9565)) par @Molunerfinn

  - Correction de la sortie d'obfuscation du serveur de plugin pour éviter les globaux de navigateur dans les bundles d'exécution Node.js. ([#9559](https://github.com/nocobase/nocobase/pull/9559)) par @Molunerfinn

- **[client-v2]** Correction des métadonnées de langue du navigateur afin que la page de l'application suive la langue d'application sélectionnée au lieu d'être marquée comme anglais. ([#9564](https://github.com/nocobase/nocobase/pull/9564)) par @Molunerfinn

- **[Gestionnaire de fichiers]** Rendu sécurisé des aperçus PDF avec PDF.js au lieu du rendu PDF brut basé sur iframe. ([#9566](https://github.com/nocobase/nocobase/pull/9566)) par @mytharcher

- **[Employés IA]** Correction de la description incorrecte du nom de l'outil dans l'invite du contexte de travail ([#9567](https://github.com/nocobase/nocobase/pull/9567)) par @cgyrock

- **[Workflow : Nœud manuel]** Correction des sauvegardes temporaires pour les tâches de workflow manuel qui ne persistaient pas les valeurs de formulaire soumises. ([#9554](https://github.com/nocobase/nocobase/pull/9554)) par @mytharcher

- **[Auth : OIDC]** Correction de la fuite de jeton lorsque les rappels de connexion SSO reçoivent une URL de redirection externe par @2013xile

- **[Workflow : Approbation]**
  - Correction du retrait d'approbation pour mettre à jour les données métier soumises tout en respectant les autorisations de mise à jour de la collection source. par @mytharcher

  - Correction du problème où l'API `jobs:resume` n'est pas prise en charge par le nœud d'approbation par @mytharcher

  - Correction des index de dossier d'approbation en double lorsque des délégations se produisent simultanément sur le même travail d'approbation. par @mytharcher

  - Correction des tâches d'approbation obsolètes lorsque les workflows d'approbation sont terminés par des échecs de nœuds non liés à l'approbation. par @mytharcher
