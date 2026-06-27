---
title: "NocoBase v1.6.34 : Prise en charge de la définition d'enregistrements uniques par plusieurs champs lors de l'importation des paramètres"
description: "Notes de version de la v1.6.34"
---

### 🎉 Nouvelles fonctionnalités

- **[Action : Importation d'enregistrements Pro]**
  - Prise en charge de la définition d'enregistrements uniques par plusieurs champs lors des paramètres d'importation par @aaaaaajie

  - Prise en charge des paramètres pour écraser les cellules vides et les ignorer lors des paramètres d'importation par @aaaaaajie

### 🚀 Améliorations

- **[non défini]** Mise à niveau de la version de Node vers 20 pour l'IC ([#6927](https://github.com/nocobase/nocobase/pull/6927)) par @mytharcher

### 🐛 Corrections de bugs

- **[client]**
  - Échec de la vérification de la condition noneOf dans les règles de liaison ([#6934](https://github.com/nocobase/nocobase/pull/6934)) par @katherinehhh

  - Le réglage de la hauteur du bloc ne s'applique pas en temps réel ([#6904](https://github.com/nocobase/nocobase/pull/6904)) par @katherinehhh

- **[non défini]** Utilisation de Node 20 en raison des exigences du package commander ([#6924](https://github.com/nocobase/nocobase/pull/6924)) par @mytharcher

- **[base de données]** Correction de la génération automatique d'uuid ou nanoid qui ne fonctionnait pas dans les associations plusieurs-à-plusieurs ([#6912](https://github.com/nocobase/nocobase/pull/6912)) par @aaaaaajie

- **[Action : Exportation d'enregistrements]** Correction d'un problème où les relations imbriquées ne s'exportaient pas correctement. ([#6917](https://github.com/nocobase/nocobase/pull/6917)) par @aaaaaajie

- **[Gestionnaire de source de données]** Résolution d'un problème de tri par glisser-déposer qui ne fonctionnait pas ([#6937](https://github.com/nocobase/nocobase/pull/6937)) par @chenos

- **[Documentation API]** Ajout des informations de sous-application manquantes à req.headers ([#6933](https://github.com/nocobase/nocobase/pull/6933)) par @chenos

- **[Notification : Message dans l'application]** Résolution d'un problème où l'action "marquer tout comme lu" dans les messages dans l'application pouvait affecter les données d'autres utilisateurs. ([#6926](https://github.com/nocobase/nocobase/pull/6926)) par @sheldon66

- **[Workflow : Événement d'action personnalisée]** Évitement d'une erreur due à l'ordre de chargement des plugins par @mytharcher

- **[Stockage de fichiers : S3(Pro)]**
  - Correction de l'URL de prévisualisation et du paramètre de téléchargement par @mytharcher

  - Correction des paramètres de téléchargement en double par @mytharcher

- **[Bloc : Formulaire multi-étapes]** Correction des types par @mytharcher

- **[Workflow : Approbation]**
  - Correction d'un identifiant d'enregistrement incorrect pour ViewAction par @mytharcher

  - Correction des appends et du calcul des données avant la soumission du processus d'approbation par @mytharcher
