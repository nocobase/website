---
title: "NocoBase v1.9.0-alpha.12 : Prise en charge des règles de validation de champ"
description: "Notes de version de v1.9.0-alpha.12"
---

### 🎉 Nouvelles fonctionnalités

- **[client]** Prise en charge des règles de validation de champ ([#7297](https://github.com/nocobase/nocobase/pull/7297)) par @aaaaaajie

- **[Workflow : Approbation]**
  - Ajout d'un type de modèle en ligne pour la configuration des notifications par @mytharcher

  - Possibilité d'utiliser un titre de tâche cohérent pour tous les nœuds d'approbation dans un même workflow par @mytharcher

### 🚀 Améliorations

- **[database]** Optimisation des performances des requêtes ACL Meta ([#7400](https://github.com/nocobase/nocobase/pull/7400)) par @aaaaaajie

- **[client]** Prise en charge de l'affichage des icônes identifiées par des chaînes de caractères dans le composant Select en mode lecture seule ([#7420](https://github.com/nocobase/nocobase/pull/7420)) par @mytharcher

- **[Mobile]** Optimisation du composant popup mobile ([#7414](https://github.com/nocobase/nocobase/pull/7414)) par @zhangzhonghe

- **[Workflow]** Mise à jour du menu de sélection des nœuds pour afficher les options dans une disposition à deux colonnes, améliorant ainsi la densité d'information et permettant aux utilisateurs de voir plus d'options à la fois ([#7396](https://github.com/nocobase/nocobase/pull/7396)) par @mytharcher

- **[Paramètres de licence]** Dans les paramètres de licence, copie du dernier ID d'instance à chaque fois ([#7387](https://github.com/nocobase/nocobase/pull/7387)) par @jiannx

- **[Notification : Message in-app]** Suppression des sorties de logs SQL via `console.log` ([#7368](https://github.com/nocobase/nocobase/pull/7368)) par @2013xile

- **[Authentification]** Suppression du paramètre token de l'URL après une connexion réussie ([#7386](https://github.com/nocobase/nocobase/pull/7386)) par @2013xile

- **[Impression de modèle]** Prise en charge du champ tableau m2m par @jiannx

### 🐛 Corrections de bugs

- **[database]** Correction d'un problème où la lecture des tables externes Postgres incluait les vues d'autres schémas ([#7410](https://github.com/nocobase/nocobase/pull/7410)) par @aaaaaajie

- **[client]**
  - Traitement du nombre 0 comme vide lors de la validation de vide des règles de liaison ([#7404](https://github.com/nocobase/nocobase/pull/7404)) par @katherinehhh

  - Correction d'un problème où le bouton "Paramètres des colonnes" chargeait les colonnes du tableau à l'intérieur de la boîte de dialogue modale ([#7385](https://github.com/nocobase/nocobase/pull/7385)) par @kerwin612

  - Correction du texte du bouton lien qui passait à la ligne ([#7406](https://github.com/nocobase/nocobase/pull/7406)) par @mytharcher

- **[serveur]** Certaines requêtes manquent de `ctx.action`, provoquant des erreurs dans le middleware du journal d'audit ([#7369](https://github.com/nocobase/nocobase/pull/7369)) par @2013xile

- **[Bloc : modèle]** Résolution d'un problème où les blocs de courrier n'étaient pas visibles lorsqu'ils étaient placés à l'intérieur d'un bloc de modèle hérité ([#7430](https://github.com/nocobase/nocobase/pull/7430)) par @gchust

- **[Workflow : nœud mailer]** Correction d'un problème où le nœud email pouvait ne pas reprendre son exécution correctement ([#7409](https://github.com/nocobase/nocobase/pull/7409)) par @mytharcher

- **[Mobile]**
  - Format d'affichage incorrect du champ date sur mobile ([#7412](https://github.com/nocobase/nocobase/pull/7412)) par @katherinehhh

  - Correction d'un problème où les données de soumission de formulaire dans la boîte de dialogue d'approbation mobile étaient incorrectes ([#7389](https://github.com/nocobase/nocobase/pull/7389)) par @zhangzhonghe

- **[Workflow]**
  - Correction d'une erreur levée et de la disparition des données de formulaire lors de l'édition de la catégorie de workflow ([#7408](https://github.com/nocobase/nocobase/pull/7408)) par @mytharcher

  - Correction de la traduction du titre de page dans le centre de tâches du workflow ([#7392](https://github.com/nocobase/nocobase/pull/7392)) par @mytharcher

- **[Visualiseur de fichiers Office]** Correction d'une erreur levée lors du téléchargement d'un fichier vers un champ d'URL de pièce jointe ([#7405](https://github.com/nocobase/nocobase/pull/7405)) par @mytharcher

- **[Notification : Message in-app]** Correction des traductions ([#7384](https://github.com/nocobase/nocobase/pull/7384)) par @mytharcher

- **[Champ de collection : Formule]** Correction d'un problème où la saisie de formule ne pouvait pas passer la validation en raison du type de variable ([#7373](https://github.com/nocobase/nocobase/pull/7373)) par @mytharcher

- **[Gestionnaire de fichiers]** Suppression de l'indication concernant la limite de taille de téléchargement de fichier ([#7391](https://github.com/nocobase/nocobase/pull/7391)) par @mytharcher

- **[Calendrier]** Infobulle d'élément d'événement de calendrier affichant [object Object] ([#7372](https://github.com/nocobase/nocobase/pull/7372)) par @katherinehhh

- **[Action : Importer des enregistrements Pro]** Interdiction d'assigner des champs de relation lors de la détection des doublons d'importation. par @aaaaaajie

- **[Workflow : Événement d'action personnalisée]** Effacement des lignes sélectionnées après le déclenchement réussi d'actions sur plusieurs enregistrements par @mytharcher

- **[Impression de modèle]** Impression des champs de sélection radio dans plusieurs lignes de données par @jiannx

- **[Stockage de fichiers : S3(Pro)]**
  - Dépréciation du paramètre problématique `attachmentField` par @mytharcher

  - Correction d'un problème où la méthode d'authentification IAM ne pouvait pas être utilisée pour télécharger des fichiers par @mytharcher

- **[Workflow : Approbation]**
  - Correction d'un problème où le chargement de données de source de données externe dans les enregistrements d'approbation entraînait une erreur 404 par @mytharcher

  - Correction d'un problème où la liste des utilisateurs était vide lors de la contresignature par @mytharcher

- **[Gestionnaire de sauvegarde]** Les sauvegardes de fichiers volumineux pouvaient afficher "réussi" avant d'être réellement terminées par @gchust

- **[Gestionnaire de migration]** Ignorer les commandes `\restrict` et `\unrestrict` générées par le dernier pg_dump lors de la création de fichiers de migration pour résoudre les erreurs de restauration. par @2013xile
