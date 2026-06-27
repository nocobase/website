---
title: "NocoBase v1.8.0-bêta.1 : Ajout de la gestion des catégories de workflows"
description: "Notes de version de la v1.8.0-bêta.1"
---

### 🎉 Nouvelles fonctionnalités

- **[indéfini]** Ajout d'un nouveau plugin « Bouton de copie de saisie » pour les champs de texte sur une seule ligne ([#6894](https://github.com/nocobase/nocobase/pull/6894)) par @kerwin612

- **[Workflow]** Ajout de la gestion des catégories de workflows ([#6965](https://github.com/nocobase/nocobase/pull/6965)) par @mytharcher

### 🚀 Améliorations

- **[client]** Possibilité de configurer si les liens de menu s'ouvrent dans une nouvelle fenêtre ([#6918](https://github.com/nocobase/nocobase/pull/6918)) par @katherinehhh

- **[Action : Importer des enregistrements Pro]** Optimisation des performances d'importation xlsx par @aaaaaajie

- **[Auth : OIDC]** Ignorer la casse lors de la correspondance d'un utilisateur par email par @2013xile

- **[Workflow : Approbation]** Importer les collections de workflows depuis le plugin workflow pour éviter les doublons par @mytharcher

### 🐛 Corrections de bugs

- **[client]**
  - Les champs et actions ne prennent effet qu'après avoir actualisé la page ([#6977](https://github.com/nocobase/nocobase/pull/6977)) par @zhangzhonghe

  - Correction de l'absence d'affichage des champs dans les modèles de bloc causée par des requêtes API en double ([#6957](https://github.com/nocobase/nocobase/pull/6957)) par @zhangzhonghe

  - Correction du problème où les blocs créés dans les popups avaient une collection incorrecte ([#6961](https://github.com/nocobase/nocobase/pull/6961)) par @zhangzhonghe

  - Impossible de sélectionner des variables lors de la définition des valeurs par défaut pour les champs d'association ([#6974](https://github.com/nocobase/nocobase/pull/6974)) par @zhangzhonghe

  - Correction du problème où les valeurs des champs de texte sur une seule ligne s'affichaient sous forme de tableau en mode lecture simplifiée ([#6968](https://github.com/nocobase/nocobase/pull/6968)) par @zhangzhonghe

  - Impossible de développer les champs de collection d'association provenant de sources de données externes dans le périmètre de la table de données des rôles ([#6958](https://github.com/nocobase/nocobase/pull/6958)) par @katherinehhh

  - Correction du problème où l'option « Contenu débordant avec points de suspension » était inefficace pour les champs de relation ([#6967](https://github.com/nocobase/nocobase/pull/6967)) par @zhangzhonghe

  - Correction du problème où les valeurs par défaut du formulaire de filtre étaient invalides dans les sous-pages ([#6960](https://github.com/nocobase/nocobase/pull/6960)) par @zhangzhonghe

  - Problème où la popup de sélection du champ d'association se fermait lors de la première saisie lors de l'ajout de nouvelles données ([#6971](https://github.com/nocobase/nocobase/pull/6971)) par @katherinehhh

  - Champ d'association dans un sous-tableau déclenchant une requête lorsque la variable d'itération a une valeur vide ([#6969](https://github.com/nocobase/nocobase/pull/6969)) par @katherinehhh

  - Correction de l'ordre des champs dans la liste déroulante du bouton de filtre ([#6962](https://github.com/nocobase/nocobase/pull/6962)) par @zhangzhonghe

  - Perte des données des règles de validation du formulaire lors de la réduction du panneau ([#6949](https://github.com/nocobase/nocobase/pull/6949)) par @katherinehhh

  - Les valeurs sélectionnées sont réinitialisées lors de la mise à jour des options de la liste déroulante à sélection multiple via des règles de liaison ([#6953](https://github.com/nocobase/nocobase/pull/6953)) par @katherinehhh

  - La variable de liaison du sous-tableau récupère les données d'association lors de l'effacement au lieu d'utiliser la valeur du formulaire ([#6963](https://github.com/nocobase/nocobase/pull/6963)) par @katherinehhh

  - Paginer les données déroulantes du champ d'association avec une taille de page de 200 ([#6950](https://github.com/nocobase/nocobase/pull/6950)) par @katherinehhh

  - Le sélecteur de date ne se rafraîchit pas après être passé de « est entre » à « est » ([#6956](https://github.com/nocobase/nocobase/pull/6956)) par @katherinehhh

  - Position de surbrillance incorrecte lors du glissement des lignes du tableau ([#6952](https://github.com/nocobase/nocobase/pull/6952)) par @chenos

- **[Authentification]** Problème de performance causé par le nettoyage des jetons expirés ([#6981](https://github.com/nocobase/nocobase/pull/6981)) par @2013xile

- **[Workflow]** Correction d'une erreur levée lors du filtrage des workflows ([#6978](https://github.com/nocobase/nocobase/pull/6978)) par @mytharcher

- **[Gestionnaire de fichiers]** Correction de la configuration du délai d'attente Ali-OSS ([#6970](https://github.com/nocobase/nocobase/pull/6970)) par @mytharcher

- **[Éditeur de thème]** Masquer l'option de changement de thème et correction du style des popups ([#6964](https://github.com/nocobase/nocobase/pull/6964)) par @zhangzhonghe

- **[Workflow : Événement d'action personnalisée]** Correction de l'initialiseur manquant pour le poste de travail par @mytharcher

- **[Auth : OIDC]** Texte du bouton de connexion non localisé par @2013xile

- **[Workflow : Approbation]** Correction d'une erreur lors de l'interrogation du périmètre des assignés avec une condition d'association par @mytharcher
