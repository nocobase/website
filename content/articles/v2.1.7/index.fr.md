---
title: "NocoBase v2.1.7 : Prise en charge de la sauvegarde et de la restauration pour KingBase en tant que base de données principale"
description: "Notes de version de la v2.1.7"
---

### 🎉 Nouvelles fonctionnalités

- **[Gestionnaire de sauvegarde]** Prise en charge de la sauvegarde et de la restauration pour KingBase en tant que base de données principale ([#9791](https://github.com/nocobase/nocobase/pull/9791)) par @2013xile
- **[Gestionnaire de migration]** Prise en charge des migrations pour KingBase en tant que base de données principale. par @2013xile

### 🚀 Améliorations

- **[IA : Base de connaissances]** Amélioration de la récupération et de la documentation de la base de connaissances IA. ([#9765](https://github.com/nocobase/nocobase/pull/9765)) par @cgyrock
- **[cli]** Ajout de la version du schéma de configuration d'environnement ([#9782](https://github.com/nocobase/nocobase/pull/9782)) par @chenos
- **[Workflow]** Stabilisation du test des options de mise à jour ([#9773](https://github.com/nocobase/nocobase/pull/9773)) par @mytharcher
- **[Gestionnaire de fichiers]** Amélioration des aperçus PDF : les fichiers PDF d'origine croisée utilisent désormais le visualiseur natif du navigateur, tandis que les fichiers PDF de même origine continuent d'utiliser PDF.js. ([#9796](https://github.com/nocobase/nocobase/pull/9796)) par @mytharcher
- **[Gestionnaire de sauvegarde]** Les tables dont le `dataCategory` de la collection est marqué comme `'runtime'` sont désormais automatiquement exclues des sauvegardes. ([#9804](https://github.com/nocobase/nocobase/pull/9804)) par @cgyrock
- **[IA : Base de connaissances]** Amélioration de la segmentation des documents de la base de connaissances IA, de la gestion des segments, des tests de correspondance et du support des nœuds de workflow de documents. par @cgyrock

### 🐛 Corrections de bugs

- **[client-v2]**

  - Correction d'un problème où la soumission d'un formulaire affichait un message incorrect lorsqu'un sous-formulaire contenait un sous-tableau. ([#9807](https://github.com/nocobase/nocobase/pull/9807)) par @gchust
  - Correction d'un problème où les flux d'événements sur les colonnes de sous-tableau s'exécutaient de manière incorrecte. ([#9821](https://github.com/nocobase/nocobase/pull/9821)) par @gchust
  - Suppression de `updateAssociationValues` inattendu des champs d'association ([#9812](https://github.com/nocobase/nocobase/pull/9812)) par @katherinehhh
  - Correction des options Oui/Non non traduites dans les listes déroulantes de cases à cocher du formulaire de filtre v2. ([#9792](https://github.com/nocobase/nocobase/pull/9792)) par @katherinehhh
  - Correction du problème où les paramètres de flux d'événements ne pouvaient pas être mis à jour après avoir enregistré un bloc en tant que modèle. ([#9585](https://github.com/nocobase/nocobase/pull/9585)) par @gchust
  - Correction de l'affichage et des paramètres de format incorrects lorsque les champs de titre d'association de tableau v2 utilisent des champs d'heure, de date uniquement ou de date et heure. ([#9785](https://github.com/nocobase/nocobase/pull/9785)) par @katherinehhh
- **[Workflow]** Correction de la récupération du répartiteur de workflow après des erreurs de répartition inattendues. ([#9783](https://github.com/nocobase/nocobase/pull/9783)) par @mytharcher
- **[Gestionnaire de fichiers]** Correction des erreurs 404 lors du téléchargement de fichiers vers des champs d'URL de pièces jointes dans des sources de données externes ([#9809](https://github.com/nocobase/nocobase/pull/9809)) par @2013xile
- **[Action : Requête personnalisée]** Correction des actions de requête personnalisée V2 affichant une erreur inutile lorsque les paramètres de requête ne sont pas configurés. ([#9802](https://github.com/nocobase/nocobase/pull/9802)) par @katherinehhh
- **[Employés IA]**

  - Correction d'un problème où les employés IA ne pouvaient pas remplir correctement les données de sous-tableau. ([#9801](https://github.com/nocobase/nocobase/pull/9801)) par @gchust
  - Correction des déclencheurs de tâches raccourcies des employés IA afin que les pièces jointes du contexte de travail actuel soient incluses lors de l'exécution d'une tâche à partir du profil raccourci. ([#9808](https://github.com/nocobase/nocobase/pull/9808)) par @cgyrock
- **[Workflow : Événement d'action personnalisée]** Correction des boutons de workflow déclenchés par le panneau d'action v2 affichant un succès et envoyant une requête lorsqu'aucun workflow n'est lié. ([#9798](https://github.com/nocobase/nocobase/pull/9798)) par @mytharcher
- **[Moteur de flux]** Correction d'un problème où les formulaires et les détails d'enregistrement actuels dans une fenêtre contextuelle pouvaient contenir des données incorrectes lorsqu'ils étaient construits par l'IA. ([#9788](https://github.com/nocobase/nocobase/pull/9788)) par @gchust
- **[Gestionnaire de tâches asynchrones]** Correction des erreurs de téléchargement de fichiers de tâches asynchrones lorsque l'ID de tâche est manquant dans `filterByTk`. ([#9705](https://github.com/nocobase/nocobase/pull/9705)) par @mytharcher
- **[Source de données : NocoBase externe]** Proxy de téléchargement et de stockage de fichiers de source de données NocoBase externe par source de données de téléchargement par @2013xile
- **[Multi-espace]** Correction des erreurs de permission lorsque les gestionnaires d'espace ajoutent des utilisateurs sans accès au champ d'email utilisateur. par @jiannx
- **[Workflow : Sous-flux]** Correction des sous-flux asynchrones afin que les workflows parents puissent reprendre après un redémarrage du worker ou une perte de mappage d'événements en mémoire. par @mytharcher
- **[Superviseur d'application]** Correction d'un plantage lorsque les réponses du proxy WebSocket distant échouent par @2013xile
