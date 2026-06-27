---
title: "NocoBase v1.8.0-alpha.8 : Prise en charge de la copie en un clic du contenu des champs de texte"
description: "Notes de version de v1.8.0-alpha.8"
---

### 🎉 Nouvelles fonctionnalités

- **[Copie de texte]** Prise en charge de la copie en un clic du contenu des champs de texte ([#6954](https://github.com/nocobase/nocobase/pull/6954)) par @zhangzhonghe

- **[Gestionnaire d'e-mails]** Prise en charge de la suppression d'e-mails par @jiannx

### 🚀 Améliorations

- **[client]**
  - Ajout des options "vide" et "non vide" aux règles de liaison des champs de case à cocher ([#7073](https://github.com/nocobase/nocobase/pull/7073)) par @katherinehhh

  - La largeur du conteneur du logo s'adapte au type de contenu (168px fixes pour les images, largeur automatique pour le texte) ([#7075](https://github.com/nocobase/nocobase/pull/7075)) par @Cyx649312038

- **[Gestionnaire de tâches asynchrones]** Amélioration des performances de création de tâches lors de l'exportation ([#7078](https://github.com/nocobase/nocobase/pull/7078)) par @aaaaaajie

- **[Workflow : Approbation]** Ajout d'une option de champ supplémentaire pour la liste des ré-attributaires par @mytharcher

### 🐛 Corrections de bugs

- **[client]**
  - Perte de la virgule décimale après le passage du composant de montant de mask à inputNumer ([#7077](https://github.com/nocobase/nocobase/pull/7077)) par @katherinehhh

  - Rendu incorrect du Markdown (Vditor) dans les sous-tableaux ([#7074](https://github.com/nocobase/nocobase/pull/7074)) par @katherinehhh

  - Après la création du champ de relation inverse, l'option "Créer un champ de relation inverse dans la table de données cible" dans les paramètres du champ d'association n'était pas cochée. ([#6914](https://github.com/nocobase/nocobase/pull/6914)) par @aaaaaajie

  - Le sélecteur de champ d'association n'efface pas les données sélectionnées après la soumission ([#7067](https://github.com/nocobase/nocobase/pull/7067)) par @katherinehhh

- **[serveur]** Impossible de lire les propriétés de undefined (lecture de 'setMaaintainingMessage') ([#7064](https://github.com/nocobase/nocobase/pull/7064)) par @chenos

- **[Contrôle d'accès]** Correction d'un problème où l'application bloquait l'entrée lorsqu'aucun rôle par défaut n'existait ([#7059](https://github.com/nocobase/nocobase/pull/7059)) par @aaaaaajie

- **[Gestionnaire de sources de données]** Les modifications de portée prennent désormais effet immédiatement pour tous les rôles concernés. ([#7065](https://github.com/nocobase/nocobase/pull/7065)) par @aaaaaajie

- **[Workflow : Nœud de boucle]** Correction de l'exécution de la branche de boucle lorsque la condition n'est pas satisfaite ([#7063](https://github.com/nocobase/nocobase/pull/7063)) par @mytharcher

- **[Workflow : Événement d'action personnalisée]** Correction de la variable d'URL de redirection non analysée par @mytharcher

- **[Workflow : Approbation]** Correction des statistiques de tâches non mises à jour lorsque l'exécution est annulée par @mytharcher

- **[Gestionnaire d'e-mails]** Échec de la suppression d'e-mail par @jiannx

- **[Gestionnaire de sauvegarde]** Erreur de commande inconnue lors de la restauration de sauvegardes MySQL sur la plateforme Windows par @gchust
