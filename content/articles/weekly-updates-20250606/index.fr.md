---
title: "Mises à jour hebdomadaires de NocoBase : Ajout de la gestion des catégories de workflows"
description: "Les mises à jour de cette semaine incluent : prise en charge de la multiplication et de la division dans les configurations de transformation de graphiques, amélioration de la fonctionnalité d'importation, et plus encore."
---

Résumez les journaux de mise à jour hebdomadaires du produit. Les dernières versions sont disponibles sur [notre blog](https://www.nocobase.com/en/blog/timeline).

**Cette semaine, nous avons publié [NocoBase 1.7.0](https://www.nocobase.com/en/blog/nocobase-1-7-0), qui introduit une gestion des permissions améliorée, des performances système optimisées et des plugins open source pour améliorer globalement les fonctionnalités et l'expérience utilisateur.**

**NocoBase est actuellement mis à jour avec trois branches : `main`, `next` et `develop`.**

![version.png](https://static-docs.nocobase.com/ba5f04e27e99c625cb3822da5df07860.png)

* `main` : La version la plus stable à ce jour, recommandée pour l'installation ;
* `next` : Version bêta, contient les nouvelles fonctionnalités à venir et a été testée préliminairement. Il peut y avoir des problèmes connus ou inconnus. Elle est principalement destinée aux utilisateurs testeurs pour recueillir des retours et optimiser davantage les fonctions. Idéale pour les utilisateurs testeurs qui souhaitent découvrir les nouvelles fonctionnalités en avant-première et donner leur avis ;
* `develop` : Version alpha, contient le code de fonctionnalité le plus récent, peut être incomplète ou instable, principalement destinée au développement interne et à l'itération rapide. Adaptée aux utilisateurs techniques intéressés par les fonctionnalités de pointe du produit, mais avec des problèmes potentiels et des fonctions incomplètes. Ne pas utiliser en production.

## main

![main.png](https://static-docs.nocobase.com/47a3c71734c1d0f908b51f9ebd53c0ac.png)

### [v1.6.35](https://www.nocobase.com/en/blog/v1.6.35)

*Date de sortie : 2025-05-29*

#### 🎉 Nouvelles fonctionnalités

- **[non défini]**
  - Ajout du support Gitpod pour un démarrage en un clic de l'environnement de développement ([#6922](https://github.com/nocobase/nocobase/pull/6922)) par @kerwin612

#### 🚀 Améliorations

- **[client]**
  - Optimisation de l'interaction avec la touche Tab dans les formulaires ([#6942](https://github.com/nocobase/nocobase/pull/6942)) par @kerwin612
  - Possibilité de configurer si les liens de menu s'ouvrent dans une nouvelle fenêtre ([#6918](https://github.com/nocobase/nocobase/pull/6918)) par @katherinehhh
  - Validation des champs obligatoires avant d'afficher la boîte de dialogue de confirmation ([#6931](https://github.com/nocobase/nocobase/pull/6931)) par @katherinehhh

#### 🐛 Corrections de bugs

- **[client]**
  - Pagination des données de la liste déroulante des champs d'association avec une taille de page de 200 ([#6950](https://github.com/nocobase/nocobase/pull/6950)) par @katherinehhh
  - Position de surbrillance incorrecte lors du glissement des lignes du tableau ([#6952](https://github.com/nocobase/nocobase/pull/6952)) par @chenos
  - Le redimensionnement des blocs par glissement ne fonctionne pas ([#6944](https://github.com/nocobase/nocobase/pull/6944)) par @chenos
  - L'internationalisation du composant d'affectation de champ ne fonctionne pas ([#6945](https://github.com/nocobase/nocobase/pull/6945)) par @katherinehhh
  - Les messages d'erreur ne peuvent pas être copiés correctement ([#6908](https://github.com/nocobase/nocobase/pull/6908)) par @kerwin612
- **[Champ de collection : Markdown(Vditor)]** Problème de largeur du composant de champ markdown-vditor après un zoom avant/arrière ([#6946](https://github.com/nocobase/nocobase/pull/6946)) par @katherinehhh
- **[Workflow : Approbation]** Correction du contenu de traduction par @mytharcher

### [v1.6.36](https://www.nocobase.com/en/blog/v1.6.36)

*Date de sortie : 2025-05-29*

#### 🚀 Améliorations

- **[Auth : OIDC]** Ignorer la casse lors de la correspondance d'un utilisateur par email par @2013xile

### [v1.6.37](https://www.nocobase.com/en/blog/v1.6.37)

*Date de sortie : 2025-05-30*

#### 🐛 Corrections de bugs

- **[client]**
  - Correction de l'ordre des champs dans la liste déroulante du bouton de filtre ([#6962](https://github.com/nocobase/nocobase/pull/6962)) par @zhangzhonghe
  - La variable de liaison de sous-tableau récupère les données d'association lors de l'effacement au lieu d'utiliser la valeur du formulaire ([#6963](https://github.com/nocobase/nocobase/pull/6963)) par @katherinehhh
  - Le champ d'association dans un sous-tableau déclenche une requête lorsque la variable d'itération a une valeur vide ([#6969](https://github.com/nocobase/nocobase/pull/6969)) par @katherinehhh
- **[Éditeur de thème]** Masquer l'option de changement de thème et corriger le style de la fenêtre contextuelle ([#6964](https://github.com/nocobase/nocobase/pull/6964)) par @zhangzhonghe
- **[Workflow : Approbation]** Correction d'une erreur lorsque la portée des assignés interroge avec une condition d'association par @mytharcher

### [v1.6.38](https://www.nocobase.com/en/blog/v1.6.38)

*Date de sortie : 2025-06-03*

#### 🐛 Corrections de bugs

- **[client]**
  - Correction du problème où les blocs créés dans les fenêtres contextuelles avaient une collection incorrecte ([#6961](https://github.com/nocobase/nocobase/pull/6961)) par @zhangzhonghe
  - Correction du problème où les valeurs par défaut du formulaire de filtre étaient invalides dans les sous-pages ([#6960](https://github.com/nocobase/nocobase/pull/6960)) par @zhangzhonghe
  - Impossible de développer les champs de collection d'association provenant de sources de données externes dans la portée de la table de données des rôles ([#6958](https://github.com/nocobase/nocobase/pull/6958)) par @katherinehhh
  - Correction du problème où l'option 'Contenu en débordement avec points de suspension' était inefficace pour les champs de relation ([#6967](https://github.com/nocobase/nocobase/pull/6967)) par @zhangzhonghe
  - Correction du problème où les valeurs des champs de texte sur une seule ligne étaient affichées sous forme de tableau en mode de lecture simplifié ([#6968](https://github.com/nocobase/nocobase/pull/6968)) par @zhangzhonghe
- **[Authentification]** Problème de performances causé par le nettoyage des jetons expirés ([#6981](https://github.com/nocobase/nocobase/pull/6981)) par @2013xile
- **[Gestionnaire de fichiers]** Correction de la configuration du délai d'attente Ali-OSS ([#6970](https://github.com/nocobase/nocobase/pull/6970)) par @mytharcher
- **[Workflow : Événement d'action personnalisée]** Correction de l'initialiseur manquant pour le poste de travail par @mytharcher
- **[Auth : OIDC]** Texte du bouton de connexion non localisé par @2013xile

### [v1.7.1](https://www.nocobase.com/en/blog/v1.7.1)

*Date de sortie : 2025-06-04*

#### 🎉 Nouvelles fonctionnalités

- **[Visualisation de données]** Prise en charge de la multiplication et de la division dans la configuration de transformation des graphiques ([#6788](https://github.com/nocobase/nocobase/pull/6788)) par @bugstark

#### 🚀 Améliorations

- **[Formulaires publics]** Possibilité d'utiliser le paramètre d'URL comme variable ([#6973](https://github.com/nocobase/nocobase/pull/6973)) par @mytharcher

#### 🐛 Corrections de bugs

- **[client]** Correction du problème d'affichage des champs dans les modèles de bloc causé par des requêtes API en double ([#6957](https://github.com/nocobase/nocobase/pull/6957)) par @zhangzhonghe
- **[Workflow : Nœud manuel]** Correction de l'erreur de l'initialiseur lors de l'utilisation d'une source de données externe ([#6983](https://github.com/nocobase/nocobase/pull/6983)) par @mytharcher

## next

![next.png](https://static-docs.nocobase.com/8ed17a0f08cc585018f6de6c8b13947d.png)

### [v1.8.0-beta.1](https://www.nocobase.com/en/blog/v1.8.0-beta.1)

*Date de sortie : 2025-06-04*

#### 🎉 Nouvelles fonctionnalités

- **[non défini]** Ajout d'un nouveau plugin "Bouton de copie de saisie" pour les champs de texte sur une seule ligne ([#6894](https://github.com/nocobase/nocobase/pull/6894)) par @kerwin612
- **[Workflow]** Ajout de la gestion des catégories de workflow ([#6965](https://github.com/nocobase/nocobase/pull/6965)) par @mytharcher

#### 🚀 Améliorations

- **[client]** Possibilité de configurer si les liens de menu s'ouvrent dans une nouvelle fenêtre ([#6918](https://github.com/nocobase/nocobase/pull/6918)) par @katherinehhh
- **[Action : Importer des enregistrements Pro]** Optimisation des performances d'importation xlsx par @aaaaaajie
- **[Auth : OIDC]** Ignorer la casse lors de la correspondance d'un utilisateur par email par @2013xile
- **[Workflow : Approbation]** Importation des collections de workflow depuis le plugin workflow pour éviter les doublons par @mytharcher

#### 🐛 Corrections de bugs

- **[client]**
  - Les champs et actions ne prennent effet qu'après avoir actualisé la page ([#6977](https://github.com/nocobase/nocobase/pull/6977)) par @zhangzhonghe
  - Correction du problème d'affichage des champs dans les modèles de bloc causé par des requêtes API en double ([#6957](https://github.com/nocobase/nocobase/pull/6957)) par @zhangzhonghe
  - Correction du problème où les blocs créés dans les fenêtres contextuelles avaient une collection incorrecte ([#6961](https://github.com/nocobase/nocobase/pull/6961)) par @zhangzhonghe
  - Impossible de sélectionner des variables lors de la définition des valeurs par défaut pour les champs d'association ([#6974](https://github.com/nocobase/nocobase/pull/6974)) par @zhangzhonghe
  - Correction du problème où les valeurs des champs de texte sur une seule ligne étaient affichées sous forme de tableau en mode de lecture simplifié ([#6968](https://github.com/nocobase/nocobase/pull/6968)) par @zhangzhonghe
  - Impossible de développer les champs de collection d'association provenant de sources de données externes dans la portée de la table de données des rôles ([#6958](https://github.com/nocobase/nocobase/pull/6958)) par @katherinehhh
  - Correction du problème où l'option 'Contenu en débordement avec points de suspension' était inefficace pour les champs de relation ([#6967](https://github.com/nocobase/nocobase/pull/6967)) par @zhangzhonghe
  - Correction du problème où les valeurs par défaut du formulaire de filtre étaient invalides dans les sous-pages ([#6960](https://github.com/nocobase/nocobase/pull/6960)) par @zhangzhonghe
  - Problème où la fenêtre contextuelle du champ d'association de sélection se ferme lors de la première saisie lors de l'ajout de nouvelles données ([#6971](https://github.com/nocobase/nocobase/pull/6971)) par @katherinehhh
  - Le champ d'association dans un sous-tableau déclenche une requête lorsque la variable d'itération a une valeur vide ([#6969](https://github.com/nocobase/nocobase/pull/6969)) par @katherinehhh
  - Correction de l'ordre des champs dans la liste déroulante du bouton de filtre ([#6962](https://github.com/nocobase/nocobase/pull/6962)) par @zhangzhonghe
  - Perte des données des règles de validation du formulaire lors de la réduction du panneau ([#6949](https://github.com/nocobase/nocobase/pull/6949)) par @katherinehhh
  - Les valeurs sélectionnées sont réinitialisées lors de la mise à jour des options de la liste déroulante à sélection multiple via des règles de liaison ([#6953](https://github.com/nocobase/nocobase/pull/6953)) par @katherinehhh
  - La variable de liaison de sous-tableau récupère les données d'association lors de l'effacement au lieu d'utiliser la valeur du formulaire ([#6963](https://github.com/nocobase/nocobase/pull/6963)) par @katherinehhh
  - Pagination des données de la liste déroulante des champs d'association avec une taille de page de 200 ([#6950](https://github.com/nocobase/nocobase/pull/6950)) par @katherinehhh
  - Le sélecteur de date ne se rafraîchit pas après être passé de "est entre" à "est" ([#6956](https://github.com/nocobase/nocobase/pull/6956)) par @katherinehhh
  - Position de surbrillance incorrecte lors du glissement des lignes du tableau ([#6952](https://github.com/nocobase/nocobase/pull/6952)) par @chenos
- **[Authentification]** Problème de performances causé par le nettoyage des jetons expirés ([#6981](https://github.com/nocobase/nocobase/pull/6981)) par @2013xile
- **[Workflow]** Correction d'une erreur lors du filtrage des workflows ([#6978](https://github.com/nocobase/nocobase/pull/6978)) par @mytharcher
- **[Gestionnaire de fichiers]** Correction de la configuration du délai d'attente Ali-OSS ([#6970](https://github.com/nocobase/nocobase/pull/6970)) par @mytharcher
- **[Éditeur de thème]** Masquer l'option de changement de thème et corriger le style de la fenêtre contextuelle ([#6964](https://github.com/nocobase/nocobase/pull/6964)) par @zhangzhonghe
- **[Workflow : Événement d'action personnalisée]** Correction de l'initialiseur manquant pour le poste de travail par @mytharcher
- **[Auth : OIDC]** Texte du bouton de connexion non localisé par @2013xile
- **[Workflow : Approbation]** Correction d'une erreur lorsque la portée des assignés interroge avec une condition d'association par @mytharcher

### [v1.8.0-beta.2](https://www.nocobase.com/en/blog/v1.8.0-beta.2)

*Date de sortie : 2025-06-04*

#### 🚀 Améliorations

- **[Impression de modèle]** Ajout de plus de journaux. par @sheldon66

### [v1.8.0-beta.3](https://www.nocobase.com/en/blog/v1.8.0-beta.3)

*Date de sortie : 2025-06-04*

#### 🎉 Nouvelles fonctionnalités

- **[Visualisation de données]** Prise en charge de la multiplication et de la division dans la configuration de transformation des graphiques ([#6788](https://github.com/nocobase/nocobase/pull/6788)) par @bugstark

#### 🚀 Améliorations

- **[Formulaires publics]** Possibilité d'utiliser le paramètre d'URL comme variable ([#6973](https://github.com/nocobase/nocobase/pull/6973)) par @mytharcher

#### 🐛 Corrections de bugs

- **[client]** Correction du problème d'affichage des champs dans les modèles de bloc causé par des requêtes API en double ([#6957](https://github.com/nocobase/nocobase/pull/6957)) par @zhangzhonghe
- **[Workflow : Nœud manuel]** Correction de l'erreur de l'initialiseur lors de l'utilisation d'une source de données externe ([#6983](https://github.com/nocobase/nocobase/pull/6983)) par @mytharcher

## develop

![develop.png](https://static-docs.nocobase.com/7fcdd9456a17286d8a439eee52bcb8d2.png)

### [v1.8.0-alpha.1](https://www.nocobase.com/en/blog/v1.8.0-alpha.1)

*Date de sortie : 2025-06-04*

#### 🎉 Nouvelles fonctionnalités

- **[non défini]**
  - Nouveau support pour Gitpod vous permettant de démarrer l'environnement de développement en un clic et de commencer le développement rapidement. ([#6922](https://github.com/nocobase/nocobase/pull/6922)) par @kerwin612
  - Ajout d'un nouveau plugin "Bouton de copie de saisie" pour les champs de texte sur une seule ligne ([#6894](https://github.com/nocobase/nocobase/pull/6894)) par @kerwin612
- **[Visualisation de données]** Prise en charge de la multiplication et de la division dans la configuration de transformation des graphiques ([#6788](https://github.com/nocobase/nocobase/pull/6788)) par @bugstark
- **[Workflow]** Ajout de la gestion des catégories de workflow ([#6965](https://github.com/nocobase/nocobase/pull/6965)) par @mytharcher
- **[Gestionnaire d'emails]** Prise en charge de l'envoi en masse par @jiannx

#### 🚀 Améliorations

- **[client]**
  - Amélioration des styles pour le composant de filtre de plage de dates ([#6939](https://github.com/nocobase/nocobase/pull/6939)) par @katherinehhh
  - Possibilité de configurer si les liens de menu s'ouvrent dans une nouvelle fenêtre ([#6918](https://github.com/nocobase/nocobase/pull/6918)) par @katherinehhh
  - Correction du problème où les contrôles de formulaire cachés capturaient la touche Tab, améliorant considérablement l'efficacité de la manipulation des formulaires ([#6942](https://github.com/nocobase/nocobase/pull/6942)) par @kerwin612
  - Validation des champs obligatoires avant d'afficher la boîte de dialogue de confirmation ([#6931](https://github.com/nocobase/nocobase/pull/6931)) par @katherinehhh
- **[Formulaires publics]** Possibilité d'utiliser le paramètre d'URL comme variable ([#6973](https://github.com/nocobase/nocobase/pull/6973)) par @mytharcher
- **[Action : Importer des enregistrements Pro]** Optimisation des performances d'importation xlsx par @aaaaaajie
- **[Impression de modèle]** Ajout de plus de journaux. par @sheldon66
- **[Auth : OIDC]** Ignorer la casse lors de la correspondance d'un utilisateur par email par @2013xile
- **[Workflow : Approbation]** Importation des collections de workflow depuis le plugin workflow pour éviter les doublons par @mytharcher
- **[Gestionnaire d'emails]** Fonction d'envoi en masse complétée par @jiannx

#### 🐛 Corrections de bugs

- **[client]**
  - Correction du problème d'affichage des champs dans les modèles de bloc causé par des requêtes API en double ([#6957](https://github.com/nocobase/nocobase/pull/6957)) par @zhangzhonghe
  - Correction du problème où les blocs créés dans les fenêtres contextuelles avaient une collection incorrecte ([#6961](https://github.com/nocobase/nocobase/pull/6961)) par @zhangzhonghe
  - Correction du problème où les valeurs des champs de texte sur une seule ligne étaient affichées sous forme de tableau en mode de lecture simplifié ([#6968](https://github.com/nocobase/nocobase/pull/6968)) par @zhangzhonghe
  - Correction de l'ordre des champs dans la liste déroulante du bouton de filtre ([#6962](https://github.com/nocobase/nocobase/pull/6962)) par @zhangzhonghe
  - Les champs et actions ne prennent effet qu'après avoir actualisé la page ([#6977](https://github.com/nocobase/nocobase/pull/6977)) par @zhangzhonghe
  - Correction du problème où l'option 'Contenu en débordement avec points de suspension' était inefficace pour les champs de relation ([#6967](https://github.com/nocobase/nocobase/pull/6967)) par @zhangzhonghe
  - Problème où la fenêtre contextuelle du champ d'association de sélection se ferme lors de la première saisie lors de l'ajout de nouvelles données ([#6971](https://github.com/nocobase/nocobase/pull/6971)) par @katherinehhh
  - Le champ d'association dans un sous-tableau déclenche une requête lorsque la variable d'itération a une valeur vide ([#6969](https://github.com/nocobase/nocobase/pull/6969)) par @katherinehhh
  - Perte des données des règles de validation du formulaire lors de la réduction du panneau ([#6949](https://github.com/nocobase/nocobase/pull/6949)) par @katherinehhh
  - Correction du problème où les valeurs par défaut du formulaire de filtre étaient invalides dans les sous-pages ([#6960](https://github.com/nocobase/nocobase/pull/6960)) par @zhangzhonghe
  - L'internationalisation du composant d'affectation de champ ne fonctionne pas ([#6945](https://github.com/nocobase/nocobase/pull/6945)) par @katherinehhh
  - Impossible de développer les champs de collection d'association provenant de sources de données externes dans la portée de la table de données des rôles ([#6958](https://github.com/nocobase/nocobase/pull/6958)) par @katherinehhh
  - Le sélecteur de date ne se rafraîchit pas après être passé de "est entre" à "est" ([#6956](https://github.com/nocobase/nocobase/pull/6956)) par @katherinehhh
  - La variable de liaison de sous-tableau récupère les données d'association lors de l'effacement au lieu d'utiliser la valeur du formulaire ([#6963](https://github.com/nocobase/nocobase/pull/6963)) par @katherinehhh
  - Les valeurs sélectionnées sont réinitialisées lors de la mise à jour des options de la liste déroulante à sélection multiple via des règles de liaison ([#6953](https://github.com/nocobase/nocobase/pull/6953)) par @katherinehhh
  - Position de surbrillance incorrecte lors du glissement des lignes du tableau ([#6952](https://github.com/nocobase/nocobase/pull/6952)) par @chenos
  - Le paramètre de visibilité des deux-points de l'étiquette du formulaire ne fonctionne pas ([#6947](https://github.com/nocobase/nocobase/pull/6947)) par @katherinehhh
  - Pagination des données de la liste déroulante des champs d'association avec une taille de page de 200 ([#6950](https://github.com/nocobase/nocobase/pull/6950)) par @katherinehhh
  - Correction du problème avec le bouton de copie dans la fenêtre contextuelle d'erreur copiant [object Object]. ([#6908](https://github.com/nocobase/nocobase/pull/6908)) par @kerwin612
  - Impossible de sélectionner des variables lors de la définition des valeurs par défaut pour les champs d'association ([#6974](https://github.com/nocobase/nocobase/pull/6974)) par @zhangzhonghe
  - Le redimensionnement des blocs par glissement ne fonctionne pas ([#6944](https://github.com/nocobase/nocobase/pull/6944)) par @chenos
- **[Workflow : Nœud manuel]** Correction de l'erreur de l'initialiseur lors de l'utilisation d'une source de données externe ([#6983](https://github.com/nocobase/nocobase/pull/6983)) par @mytharcher
- **[Authentification]** Problème de performances causé par le nettoyage des jetons expirés ([#6981](https://github.com/nocobase/nocobase/pull/6981)) par @2013xile
- **[Gestionnaire de fichiers]** Correction de la configuration du délai d'attente Ali-OSS ([#6970](https://github.com/nocobase/nocobase/pull/6970)) par @mytharcher
- **[Workflow]** Correction d'une erreur lors du filtrage des workflows ([#6978](https://github.com/nocobase/nocobase/pull/6978)) par @mytharcher
- **[Éditeur de thème]** Masquer l'option de changement de thème et corriger le style de la fenêtre contextuelle ([#6964](https://github.com/nocobase/nocobase/pull/6964)) par @zhangzhonghe
- **[Champ de collection : Markdown(Vditor)]** Problème de largeur du composant de champ markdown-vditor après un zoom avant/arrière ([#6946](https://github.com/nocobase/nocobase/pull/6946)) par @katherinehhh
- **[Workflow : Événement d'action personnalisée]** Correction de l'initialiseur manquant pour le poste de travail par @mytharcher
- **[Auth : OIDC]** Texte du bouton de connexion non localisé par @2013xile
- **[Workflow : Approbation]** Correction d'une erreur lorsque la portée des assignés interroge avec une condition d'association par @mytharcher

### [v1.8.0-alpha.2](https://www.nocobase.com/en/blog/v1.8.0-alpha.2)

*Date de sortie : 2025-06-04*

#### 🐛 Corrections de bugs

- **[client]** Correction du problème d'affichage des champs dans les modèles de bloc causé par des requêtes API en double ([#6957](https://github.com/nocobase/nocobase/pull/6957)) par @zhangzhonghe
