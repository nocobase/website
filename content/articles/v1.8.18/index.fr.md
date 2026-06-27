---
title: "NocoBase v1.8.18 : Copier le dernier ID d'instance à chaque fois dans les paramètres de licence"
description: "Notes de version de v1.8.18"
---

### 🚀 Améliorations

- **[Workflow]** Mise à jour du menu de sélection des nœuds pour afficher les options dans une disposition à deux colonnes, améliorant ainsi la densité d'information et permettant aux utilisateurs de voir plus d'options à la fois ([#7396](https://github.com/nocobase/nocobase/pull/7396)) par @mytharcher

- **[Paramètres de licence]** Dans les paramètres de licence, copier le dernier ID d'instance à chaque fois ([#7387](https://github.com/nocobase/nocobase/pull/7387)) par @jiannx

### 🐛 Corrections de bugs

- **[client]**
  - traiter le nombre 0 comme vide lors de la validation de vide des règles de liaison ([#7404](https://github.com/nocobase/nocobase/pull/7404)) par @katherinehhh

  - Correction du texte du bouton de lien qui coupait la ligne ([#7406](https://github.com/nocobase/nocobase/pull/7406)) par @mytharcher

- **[Mobile]** Format d'affichage incorrect du champ de date sur mobile ([#7412](https://github.com/nocobase/nocobase/pull/7412)) par @katherinehhh

- **[Visionneuse de fichiers Office]** Correction d'une erreur lors du téléchargement d'un fichier vers un champ d'URL de pièce jointe ([#7405](https://github.com/nocobase/nocobase/pull/7405)) par @mytharcher

- **[Workflow]** Correction d'une erreur et disparition des données du formulaire lors de l'édition d'une catégorie de workflow ([#7408](https://github.com/nocobase/nocobase/pull/7408)) par @mytharcher

- **[Workflow : nœud de messagerie]** Correction du problème où le nœud de courriel pouvait ne pas reprendre son exécution correctement ([#7409](https://github.com/nocobase/nocobase/pull/7409)) par @mytharcher

- **[Workflow : Événement d'action personnalisée]** Effacement des lignes sélectionnées après le déclenchement réussi d'actions sur plusieurs enregistrements par @mytharcher

- **[Impression de modèle]** Impression des champs de sélection radio dans plusieurs lignes de données par @jiannx

- **[Workflow : Approbation]** Correction du problème où le chargement des données d'une source de données externe dans les enregistrements d'approbation entraînait une erreur 404 par @mytharcher
