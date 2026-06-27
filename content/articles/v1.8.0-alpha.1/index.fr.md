---
title: "NocoBase v1.8.0-alpha.1 : Ajout de la gestion des catégories de workflows"
description: "Notes de version de v1.8.0-alpha.1"
---

### 🎉 Nouvelles fonctionnalités

- **[indéfini]**

  - Nouveau support pour Gitpod permettant de démarrer l'environnement de développement en un clic et de commencer rapidement le développement. ([#6922](https://github.com/nocobase/nocobase/pull/6922)) par @kerwin612
  - Ajout d'un nouveau plugin "Bouton de copie d'entrée" pour les champs de texte sur une seule ligne ([#6894](https://github.com/nocobase/nocobase/pull/6894)) par @kerwin612
- **[Visualisation de données]** Prise en charge de la multiplication et de la division dans la configuration de transformation des graphiques ([#6788](https://github.com/nocobase/nocobase/pull/6788)) par @bugstark
- **[Workflow]** Ajout de la gestion des catégories de workflow ([#6965](https://github.com/nocobase/nocobase/pull/6965)) par @mytharcher
- **[Gestionnaire d'emails]** Prise en charge de l'envoi en masse par @jiannx

### 🚀 Améliorations

- **[client]**

  - Amélioration des styles pour le composant de filtre de plage de dates ([#6939](https://github.com/nocobase/nocobase/pull/6939)) par @katherinehhh
  - Prise en charge de la configuration de l'ouverture des liens de menu dans une nouvelle fenêtre ([#6918](https://github.com/nocobase/nocobase/pull/6918)) par @katherinehhh
  - Correction du problème où les contrôles de formulaire masqués capturaient la touche Tab, améliorant considérablement l'efficacité de la manipulation des formulaires ([#6942](https://github.com/nocobase/nocobase/pull/6942)) par @kerwin612
  - Validation des champs obligatoires avant d'afficher la boîte de dialogue de confirmation ([#6931](https://github.com/nocobase/nocobase/pull/6931)) par @katherinehhh
- **[Formulaires publics]** Prise en charge de l'utilisation du paramètre d'URL comme variable ([#6973](https://github.com/nocobase/nocobase/pull/6973)) par @mytharcher
- **[Action : Importer des enregistrements Pro]** Optimisation des performances d'importation xlsx par @aaaaaajie
- **[Modèle d'impression]** Ajout de plus de journaux. par @sheldon66
- **[Auth : OIDC]** Ignorer la casse lors de la correspondance d'un utilisateur par email par @2013xile
- **[Workflow : Approbation]** Importation des collections de workflow depuis le plugin workflow pour éviter les doublons par @mytharcher
- **[Gestionnaire d'emails]** Achèvement de la fonction d'envoi en masse par @jiannx

### 🐛 Corrections de bugs

- **[client]**

  - Correction de l'absence d'affichage des champs dans les modèles de bloc causée par des requêtes API en double ([#6957](https://github.com/nocobase/nocobase/pull/6957)) par @zhangzhonghe
  - Correction du problème où les blocs créés dans les popups avaient une collection incorrecte ([#6961](https://github.com/nocobase/nocobase/pull/6961)) par @zhangzhonghe
  - Correction du problème où les valeurs des champs de texte sur une seule ligne s'affichaient sous forme de tableau en mode lecture facile ([#6968](https://github.com/nocobase/nocobase/pull/6968)) par @zhangzhonghe
  - Correction de l'ordre des champs dans la liste déroulante du bouton de filtre ([#6962](https://github.com/nocobase/nocobase/pull/6962)) par @zhangzhonghe
  - Les champs et actions ne prennent effet qu'après avoir actualisé la page ([#6977](https://github.com/nocobase/nocobase/pull/6977)) par @zhangzhonghe
  - Correction du problème où l'option 'Contenu débordant avec points de suspension' était inefficace pour les champs de relation ([#6967](https://github.com/nocobase/nocobase/pull/6967)) par @zhangzhonghe
  - Problème où le popup du champ de sélection d'association se fermait lors de la première saisie lors de l'ajout de nouvelles données ([#6971](https://github.com/nocobase/nocobase/pull/6971)) par @katherinehhh
  - Champ d'association dans une sous-table déclenchant une requête lorsque la variable d'itération a une valeur vide ([#6969](https://github.com/nocobase/nocobase/pull/6969)) par @katherinehhh
  - Perte des données des règles de validation de formulaire lors de la réduction du panneau ([#6949](https://github.com/nocobase/nocobase/pull/6949)) par @katherinehhh
  - Correction du problème où les valeurs par défaut du formulaire de filtre étaient invalides dans les sous-pages ([#6960](https://github.com/nocobase/nocobase/pull/6960)) par @zhangzhonghe
  - L'i18n du composant d'affectation de champ ne fonctionnait pas ([#6945](https://github.com/nocobase/nocobase/pull/6945)) par @katherinehhh
  - Impossible de développer les champs de collection d'association à partir de sources de données externes dans la portée de la table de données de rôle ([#6958](https://github.com/nocobase/nocobase/pull/6958)) par @katherinehhh
  - Le sélecteur de date ne se rafraîchissait pas après être passé de "est entre" à "est" ([#6956](https://github.com/nocobase/nocobase/pull/6956)) par @katherinehhh
  - La variable de liaison de sous-table récupérait les données d'association lors de l'effacement au lieu d'utiliser la valeur du formulaire ([#6963](https://github.com/nocobase/nocobase/pull/6963)) par @katherinehhh
  - Les valeurs sélectionnées étaient réinitialisées lors de la mise à jour des options de liste déroulante à sélection multiple via des règles de liaison ([#6953](https://github.com/nocobase/nocobase/pull/6953)) par @katherinehhh
  - Position de surbrillance incorrecte lors du glissement des lignes de tableau ([#6952](https://github.com/nocobase/nocobase/pull/6952)) par @chenos
  - Le réglage de la visibilité des deux-points de l'étiquette de formulaire ne fonctionnait pas ([#6947](https://github.com/nocobase/nocobase/pull/6947)) par @katherinehhh
  - Pagination des données de la liste déroulante du champ d'association avec une taille de page de 200 ([#6950](https://github.com/nocobase/nocobase/pull/6950)) par @katherinehhh
  - Correction du problème avec le bouton de copie dans la popup d'erreur copiant [object Object]. ([#6908](https://github.com/nocobase/nocobase/pull/6908)) par @kerwin612
  - Impossible de sélectionner des variables lors de la définition des valeurs par défaut pour les champs d'association ([#6974](https://github.com/nocobase/nocobase/pull/6974)) par @zhangzhonghe
  - Le redimensionnement des blocs par glissement ne fonctionnait pas ([#6944](https://github.com/nocobase/nocobase/pull/6944)) par @chenos
- **[Workflow : Nœud manuel]** Correction d'une erreur de l'initialiseur lors de l'utilisation d'une source de données externe ([#6983](https://github.com/nocobase/nocobase/pull/6983)) par @mytharcher
- **[Authentification]** Problème de performance causé par le nettoyage des jetons expirés ([#6981](https://github.com/nocobase/nocobase/pull/6981)) par @2013xile
- **[Gestionnaire de fichiers]** Correction de la configuration du délai d'attente Ali-OSS ([#6970](https://github.com/nocobase/nocobase/pull/6970)) par @mytharcher
- **[Workflow]** Correction d'une erreur lors du filtrage des workflows ([#6978](https://github.com/nocobase/nocobase/pull/6978)) par @mytharcher
- **[Éditeur de thème]** Masquage de l'option de changement de thème et correction du style de la popup ([#6964](https://github.com/nocobase/nocobase/pull/6964)) par @zhangzhonghe
- **[Champ de collection : Markdown(Vditor)]** Problème de largeur du composant de champ markdown-vditor après un zoom avant et arrière ([#6946](https://github.com/nocobase/nocobase/pull/6946)) par @katherinehhh
- **[Workflow : Événement d'action personnalisée]** Correction de l'initialiseur manquant pour le poste de travail par @mytharcher
- **[Auth : OIDC]** Texte du bouton de connexion non localisé par @2013xile
- **[Workflow : Approbation]** Correction d'une erreur lorsque la portée des assignataires interroge avec une condition d'association par @mytharcher
