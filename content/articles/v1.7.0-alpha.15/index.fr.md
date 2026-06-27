---
title: "NocoBase v1.7.0-alpha.15 : Prise en charge des variables d'agrégation personnalisées"
description: "Notes de version de v1.7.0-alpha.15"
---

### 🎉 Nouvelles fonctionnalités

- **[client]** Prise en charge des variables d'agrégation personnalisées ([#6916](https://github.com/nocobase/nocobase/pull/6916)) par @zhangzhonghe
Référence : [Variables personnalisées](https://pr-383.docs-cn.nocobase.com/handbook/custom-variables)
- **[utils]** Prise en charge du décalage personnalisé dans les filtres de champ de date ([#6854](https://github.com/nocobase/nocobase/pull/6854)) par @katherinehhh

- **[Champ de collection : Code]** Ajout des paramètres de hauteur pour le champ de l'éditeur de code par @mytharcher

- **[Action : Importer des enregistrements Pro]**
  - Prise en charge de la définition d'enregistrements uniques par plusieurs champs lors de l'importation des paramètres par @aaaaaajie

  - Prise en charge des paramètres pour écraser les cellules vides et les ignorer lors de l'importation des paramètres par @aaaaaajie

- **[Variables personnalisées]** Prise en charge des variables d'agrégation personnalisées par @zhangzhonghe
Référence : [Variables personnalisées](https://pr-383.docs-cn.nocobase.com/handbook/custom-variables)
- **[Gestionnaire d'e-mails]**
  - Prise en charge du marquage des e-mails comme à faire et ajout de notes par @jiannx

  - Prise en charge des libellés et des paramètres de combinaison par @jiannx

### 🚀 Améliorations

- **[client]** Ajustement de l'affichage du contenu des options de filtre de date ([#6928](https://github.com/nocobase/nocobase/pull/6928)) par @katherinehhh

- **[undefined]** Mise à niveau de la version de Node vers 20 pour l'IC ([#6927](https://github.com/nocobase/nocobase/pull/6927)) par @mytharcher

- **[Calendrier]** Prise en charge d'un bouton d'actualisation configurable dans le bloc calendrier ([#6920](https://github.com/nocobase/nocobase/pull/6920)) par @katherinehhh

- **[Action : Importer des enregistrements]**
  - Optimisation des performances d'importation XLSX ([#6850](https://github.com/nocobase/nocobase/pull/6850)) par @aaaaaajie

  - Optimisation des performances d'importation XLSX ([#6850](https://github.com/nocobase/nocobase/pull/6850)) par @aaaaaajie

- **[Action : Exporter des enregistrements]** Optimisation des performances pour l'exportation vers XLSX ([#6729](https://github.com/nocobase/nocobase/pull/6729)) par @aaaaaajie

- **[Bloc : iframe]** Amélioration de la logique d'affectation des variables de date ([#6828](https://github.com/nocobase/nocobase/pull/6828)) par @katherinehhh

- **[Workflow : Événement d'action personnalisée]** Correction des locales en-US basées sur les clés zh-CN par @mytharcher

- **[Action : Exporter des enregistrements Pro]** Optimisation des performances pour l'exportation vers XLSX par @aaaaaajie

- **[Workflow : Approbation]** Prise en charge de l'exécution de toutes les tâches dans le centre de tâches du workflow par @mytharcher

- **[Gestionnaire d'e-mails]** Implémentation du schéma puis envoi d'e-mail et prise en charge de l'IA par @jiannx

### 🐛 Corrections de bugs

- **[base de données]** Correction de la génération automatique uuid ou nanoid qui ne fonctionnait pas dans les associations plusieurs-à-plusieurs ([#6912](https://github.com/nocobase/nocobase/pull/6912)) par @aaaaaajie

- **[client]**
  - Échec de la vérification de la condition noneOf dans les règles de liaison ([#6934](https://github.com/nocobase/nocobase/pull/6934)) par @katherinehhh

  - Le réglage de la hauteur du bloc ne s'applique pas en temps réel ([#6904](https://github.com/nocobase/nocobase/pull/6904)) par @katherinehhh

  - Les variables de condition imbriquées dans les règles de liaison ne s'affichent pas correctement ([#6929](https://github.com/nocobase/nocobase/pull/6929)) par @katherinehhh

  - Analyse incorrecte des variables de date dans la limite de plage de dates ([#6930](https://github.com/nocobase/nocobase/pull/6930)) par @katherinehhh

  - Vérification incorrecte de la valeur vide pour le champ d'association toMany dans la règle de liaison ([#6905](https://github.com/nocobase/nocobase/pull/6905)) par @katherinehhh

  - Erreur de rendu causée par un format de style invalide lors de l'ajout d'un champ d'association ([#6903](https://github.com/nocobase/nocobase/pull/6903)) par @katherinehhh

  - Variable d'objet actuel manquante dans la règle de liaison à l'intérieur d'un sous-tableau ([#6907](https://github.com/nocobase/nocobase/pull/6907)) par @katherinehhh

- **[undefined]** Utilisation de Node 20 en raison des exigences du package commander ([#6924](https://github.com/nocobase/nocobase/pull/6924)) par @mytharcher

- **[Gestionnaire de source de données]** Résolution du problème de tri par glisser-déposer qui ne fonctionnait pas ([#6937](https://github.com/nocobase/nocobase/pull/6937)) par @chenos

- **[Documentation de l'API]** Ajout des informations de sous-application manquantes à req.headers ([#6933](https://github.com/nocobase/nocobase/pull/6933)) par @chenos

- **[Notification : Message dans l'application]** Résolution d'un problème où l'action "tout marquer comme lu" dans les messages dans l'application pouvait affecter les données d'autres utilisateurs. ([#6926](https://github.com/nocobase/nocobase/pull/6926)) par @sheldon66

- **[Action : Exporter des enregistrements]** Correction d'un problème où les relations imbriquées ne parvenaient pas à être exportées correctement. ([#6917](https://github.com/nocobase/nocobase/pull/6917)) par @aaaaaajie

- **[Champ de collection : Markdown(Vditor)]** Le champ markdown (Vditor) ne s'adapte pas au thème ([#6919](https://github.com/nocobase/nocobase/pull/6919)) par @katherinehhh

- **[Collection : Arborescence]** Éviter les mises à jour incorrectes des préfixes de chemin similaires lors des mises à jour de chemin ([#6913](https://github.com/nocobase/nocobase/pull/6913)) par @2013xile

- **[Workflow : Nœud de messagerie]** Gestion du champ 'to' non défini et amélioration du traitement des destinataires d'e-mails. ([#6915](https://github.com/nocobase/nocobase/pull/6915)) par @sheldon66

- **[Vérification]** Correction d'un nom anglais incorrect : "verificators" → "verifiers" ([#6834](https://github.com/nocobase/nocobase/pull/6834)) par @2013xile

- **[Gestionnaire de fichiers]**
  - Correction de l'injection de collection client et du paramètre de téléchargement ([#6909](https://github.com/nocobase/nocobase/pull/6909)) par @mytharcher

  - Correction de la règle de correspondance de l'aperçu ([#6902](https://github.com/nocobase/nocobase/pull/6902)) par @mytharcher

- **[Workflow : Événement d'action personnalisée]**
  - Éviter une erreur causée par l'ordre de chargement du plugin par @mytharcher

  - Correction du gestionnaire d'erreurs qui ne pouvait pas être mis en correspondance par classe par @mytharcher

  - Correction du bouton qui s'exécutait incorrectement après quelques clics par @mytharcher

- **[Filtre multi-mots-clés]** Suppression des espaces de chaque côté de chaque mot-clé par @zhangzhonghe

- **[Authentification à deux facteurs (2FA)]** Nécessité de configurer un vérificateur lors de l'activation de la 2FA par @2013xile

- **[Stockage de fichiers : S3(Pro)]**
  - Correction des paramètres de téléchargement en double par @mytharcher

  - Correction de l'URL d'aperçu et du paramètre de téléchargement par @mytharcher

- **[Impression de modèle]** Amélioration de la logique hasChildren dans useFieldsTree pour inclure la vérification de l'énumération uiSchema. par @sheldon66

- **[Bloc : Formulaire multi-étapes]** Correction des types par @mytharcher

- **[Workflow : Approbation]**
  - Correction des locales par @mytharcher

  - Correction des appends et du calcul des données avant la soumission du processus d'approbation par @mytharcher

  - Correction du calcul des appends d'association par @mytharcher

  - Correction de l'ID d'enregistrement incorrect pour ViewAction par @mytharcher

- **[Gestionnaire d'e-mails]**
  - Correction des autorisations de l'API des collections mailMessageNotes et mailMessageLabels par @jiannx

  - Correction de l'erreur de la modale d'ajout de note par @jiannx

  - Correction : suppression de la colonne d'action par @jiannx
