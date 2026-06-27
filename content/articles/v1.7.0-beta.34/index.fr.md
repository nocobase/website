---
title: "NocoBase v1.7.0-beta.34 : Amélioration de la fonctionnalité d'importation"
description: "Notes de version de v1.7.0-beta.34"
---

### 🎉 Nouvelles fonctionnalités

- **[non défini]** Nouveau support pour Gitpod permettant de démarrer l'environnement de développement en un clic et de commencer rapidement le développement. ([#6922](https://github.com/nocobase/nocobase/pull/6922)) par @kerwin612
- **[Action : Importer des enregistrements Pro]**

  - Prise en charge de la définition d'enregistrements uniques par plusieurs champs lors de l'importation des paramètres par @aaaaaajie
  - Prise en charge des paramètres pour écraser les cellules vides et les ignorer lors de l'importation des paramètres par @aaaaaajie
- **[Champ de collection : Code]** Ajout d'un paramètre de hauteur pour le champ de l'éditeur de code par @mytharcher
- **[Gestionnaire d'emails]**

  - prise en charge du marquage des emails comme à faire et ajout de notes par @jiannx
  - prise en charge des libellés et des paramètres de combinaison par @jiannx

### 🚀 Améliorations

- **[client]**

  - amélioration des styles pour le composant de filtre de plage de dates ([#6939](https://github.com/nocobase/nocobase/pull/6939)) par @katherinehhh
  - Correction du problème où les contrôles de formulaire masqués capturaient la touche de tabulation, améliorant considérablement l'efficacité de l'utilisation du formulaire ([#6942](https://github.com/nocobase/nocobase/pull/6942)) par @kerwin612
  - validation des champs obligatoires avant d'afficher la boîte de dialogue de confirmation ([#6931](https://github.com/nocobase/nocobase/pull/6931)) par @katherinehhh
  - ajustement de l'affichage du contenu de l'option de filtre de date ([#6928](https://github.com/nocobase/nocobase/pull/6928)) par @katherinehhh
- **[non défini]** Mise à niveau de la version de Node vers 20 pour l'IC ([#6927](https://github.com/nocobase/nocobase/pull/6927)) par @mytharcher

### 🐛 Corrections de bugs

- **[client]**

  - le paramètre de visibilité des deux-points de l'étiquette du formulaire ne fonctionne pas ([#6947](https://github.com/nocobase/nocobase/pull/6947)) par @katherinehhh
  - Le redimensionnement des blocs par glisser-déposer ne fonctionne pas ([#6944](https://github.com/nocobase/nocobase/pull/6944)) par @chenos
  - l'internationalisation du composant d'affectation de champ ne fonctionne pas ([#6945](https://github.com/nocobase/nocobase/pull/6945)) par @katherinehhh
  - échec de la vérification de la condition noneOf dans les règles de liaison ([#6934](https://github.com/nocobase/nocobase/pull/6934)) par @katherinehhh
  - les variables de condition imbriquées dans les règles de liaison ne s'affichent pas correctement ([#6929](https://github.com/nocobase/nocobase/pull/6929)) par @katherinehhh
  - le paramètre de hauteur du bloc ne s'applique pas en temps réel ([#6904](https://github.com/nocobase/nocobase/pull/6904)) par @katherinehhh
  - Correction du problème avec le bouton de copie dans la fenêtre contextuelle d'erreur qui copiait [object Object]. ([#6908](https://github.com/nocobase/nocobase/pull/6908)) par @kerwin612
  - analyse incorrecte des variables de date dans la limite de plage de dates ([#6930](https://github.com/nocobase/nocobase/pull/6930)) par @katherinehhh
- **[base de données]** Correction de la génération automatique d'uuid ou nanoid qui ne fonctionnait pas dans les associations plusieurs-à-plusieurs ([#6912](https://github.com/nocobase/nocobase/pull/6912)) par @aaaaaajie
- **[non défini]** Utilisation de Node 20 en raison des exigences du package commander ([#6924](https://github.com/nocobase/nocobase/pull/6924)) par @mytharcher
- **[Champ de collection : Markdown(Vditor)]** problème de largeur du composant du champ markdown-vditor après un zoom avant et arrière ([#6946](https://github.com/nocobase/nocobase/pull/6946)) par @katherinehhh
- **[Documentation API]** Ajout des informations de sous-application manquantes à req.headers ([#6933](https://github.com/nocobase/nocobase/pull/6933)) par @chenos
- **[Notification : Message intégré]** Résolution d'un problème où l'action "tout marquer comme lu" dans les messages intégrés pouvait affecter les données d'autres utilisateurs. ([#6926](https://github.com/nocobase/nocobase/pull/6926)) par @sheldon66
- **[Gestionnaire de source de données]** Résolution du problème de tri par glisser-déposer qui ne fonctionnait pas ([#6937](https://github.com/nocobase/nocobase/pull/6937)) par @chenos
- **[Action : Exporter des enregistrements]** Correction d'un problème où les relations imbriquées ne s'exportaient pas correctement. ([#6917](https://github.com/nocobase/nocobase/pull/6917)) par @aaaaaajie
- **[Workflow : Événement d'action personnalisée]** Évitement d'une erreur due à l'ordre de chargement du plugin par @mytharcher
- **[Stockage de fichiers : S3(Pro)]**

  - Correction des paramètres de téléchargement en double par @mytharcher
  - Correction de l'URL de prévisualisation et du paramètre de téléchargement par @mytharcher
- **[Bloc : Formulaire multi-étapes]** Correction des types par @mytharcher
- **[Workflow : Approbation]**

  - Correction de l'ID d'enregistrement incorrect pour ViewAction par @mytharcher
  - Correction des paramètres régionaux par @mytharcher
  - Correction des ajouts et du calcul des données avant la soumission du processus d'approbation par @mytharcher
- **[Gestionnaire d'emails]**

  - correction : suppression de la colonne d'action par @jiannx
  - correction de l'erreur de la modale d'ajout de note par @jiannx
  - correction des autorisations de l'API des collections mailMessageNotes et mailMessageLabels par @jiannx
