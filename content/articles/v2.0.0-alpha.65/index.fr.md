---
title: "NocoBase v2.0.0-alpha.65 : ajout du contrôle de concurrence au niveau du processus pour le gestionnaire de tâches de base"
description: "Notes de version de v2.0.0-alpha.65"
---

### 🎉 Nouvelles fonctionnalités

- **[test]** Ajout du contrôle de concurrence au niveau processus pour le gestionnaire de tâches de base ([#8343](https://github.com/nocobase/nocobase/pull/8343)) par @cgyrock

### 🚀 Améliorations

- **[client]**
  - L'éditeur de texte enrichi prend désormais en charge le réglage de la taille de police, le réglage de la taille des images et les sauts de ligne souples ([#8401](https://github.com/nocobase/nocobase/pull/8401)) par @jiannx

  - Prise en charge de la spécification du moment d'exécution d'un flux d'événements. ([#8340](https://github.com/nocobase/nocobase/pull/8340)) par @gchust

  - Amélioration des performances de rendu de la liste du gestionnaire de plugins en utilisant le CSS natif WebKit pour les points de suspension de texte ([#8391](https://github.com/nocobase/nocobase/pull/8391)) par @mytharcher

- **[evaluators]** Mise à jour de la version de math.js pour prendre en charge davantage de fonctions ([#8411](https://github.com/nocobase/nocobase/pull/8411)) par @mytharcher

- **[cli]** Prise en charge de la configuration de l'URL de base CDN via une variable d'environnement ([#8384](https://github.com/nocobase/nocobase/pull/8384)) par @chenos

- **[flow-engine]** Ajout de `rowOrder` à GridModel pour garantir un ordre de lignes cohérent ([#8371](https://github.com/nocobase/nocobase/pull/8371)) par @zhangzhonghe

- **[Moteur de flux]** Prise en charge de la résolution des valeurs des champs de l'enregistrement actif du formulaire, même s'ils ne sont pas ajoutés au formulaire d'édition. ([#8436](https://github.com/nocobase/nocobase/pull/8436)) par @gchust

- **[Employés IA]**
  - Optimisation du bouton d'entrée IA ([#8414](https://github.com/nocobase/nocobase/pull/8414)) par @heziqiang

  - Modification du résultat de l'appelant de workflow en `execution.output` ; en utilisant explicitement le nœud de sortie, le résultat peut être stable ([#8423](https://github.com/nocobase/nocobase/pull/8423)) par @mytharcher

  - Masquage de l'IA constructeur dans la liste d'entrée.<br/> Optimisation du flux d'intégration LLM.<br/> Mise à jour de la documentation concernant le modèle IA gemini-3. ([#8409](https://github.com/nocobase/nocobase/pull/8409)) par @heziqiang

  - Prise en charge d'Anthropic et Claude-4.5 ([#8389](https://github.com/nocobase/nocobase/pull/8389)) par @heziqiang

- **[Notification : Message in-app]** Correction d'un problème de performance lors de l'envoi de messages in-app à un grand nombre d'utilisateurs ([#8402](https://github.com/nocobase/nocobase/pull/8402)) par @mytharcher

### 🐛 Corrections de bugs

- **[client]**
  - Correction du problème où la hauteur de la modale de raccourci dépassait la hauteur de la fenêtre ([#8437](https://github.com/nocobase/nocobase/pull/8437)) par @zhangzhonghe

  - Correction du problème où les règles de liaison des boutons de ligne de tableau affectaient l'état des boutons dans les formulaires contextuels ([#8434](https://github.com/nocobase/nocobase/pull/8434)) par @zhangzhonghe

  - Correction d'un problème où l'état de la colonne d'action du tableau était pollué lors du changement de page. ([#8438](https://github.com/nocobase/nocobase/pull/8438)) par @gchust

  - Ajout d'une tolérance aux pannes pour le schéma d'action, afin d'éviter le crash de la page lors du clic sur un bouton d'action ([#8420](https://github.com/nocobase/nocobase/pull/8420)) par @mytharcher

  - Correction du problème où le champ de titre ne se mettait pas à jour lorsque le champ d'association était en mode lecture seule dans le formulaire de création ([#8413](https://github.com/nocobase/nocobase/pull/8413)) par @katherinehhh

  - Le composant numérique n'affiche pas la valeur ([#8410](https://github.com/nocobase/nocobase/pull/8410)) par @chenos

  - Correction du problème où le paramètre du champ de titre disparaissait après avoir défini l'URL de la pièce jointe, puis changé pour un autre champ dans l'élément de formulaire ([#8418](https://github.com/nocobase/nocobase/pull/8418)) par @katherinehhh

  - Correction du problème avec le bouton de soumission où la validation obligatoire ignorée ne fonctionnait pas lorsque la confirmation était activée ([#8400](https://github.com/nocobase/nocobase/pull/8400)) par @katherinehhh

  - Correction du problème où le paramètre de mise en page dans le bloc de carte en grille ne prenait pas effet ([#8399](https://github.com/nocobase/nocobase/pull/8399)) par @katherinehhh

  - Correction du problème où les données de sélection en cascade n'étaient pas effacées après une soumission réussie dans le formulaire de création ([#8403](https://github.com/nocobase/nocobase/pull/8403)) par @katherinehhh

  - Correction pour empêcher l'affectation lorsque des caractères chinois sont saisis dans un champ numérique ([#8397](https://github.com/nocobase/nocobase/pull/8397)) par @katherinehhh

  - Résolution du problème où le bouton de soumission apparaissait dans la fenêtre contextuelle de sélection de fichier d'un champ d'association un-à-un ([#8398](https://github.com/nocobase/nocobase/pull/8398)) par @katherinehhh

  - Correction de la logique d'affinement pour targetKey optionnel ([#8333](https://github.com/nocobase/nocobase/pull/8333)) par @katherinehhh

- **[flow-engine]** Correction du problème où les étapes du flux d'événements dynamique s'exécutaient deux fois lors de l'ouverture d'une fenêtre contextuelle via un clic de bouton. ([#8435](https://github.com/nocobase/nocobase/pull/8435)) par @gchust

- **[Moteur de flux]** Correction d'un problème où la résolution de variable était incorrecte lorsque filterByTk était un tableau. ([#8412](https://github.com/nocobase/nocobase/pull/8412)) par @gchust

- **[Gestionnaire de fichiers]** Correction du problème où l'URL du fichier était générée incorrectement pour les fichiers téléchargés vers le stockage S3 ([#8392](https://github.com/nocobase/nocobase/pull/8392)) par @mytharcher

- **[Champ de collection : Plusieurs-à-plusieurs (tableau)]** Correction d'une erreur lors de l'ajout de relations plusieurs-à-plusieurs (tableau) de second niveau dans les requêtes d'association ([#8406](https://github.com/nocobase/nocobase/pull/8406)) par @cgyrock

- **[Workflow]**
  - Correction du problème où l'ID du schéma n'était pas mis à jour dans le nœud dupliqué ([#8396](https://github.com/nocobase/nocobase/pull/8396)) par @mytharcher

  - Ajout de l'ID d'instance à l'ID Snowflake des jobs, pour éviter les conflits d'ID en mode cluster ([#8382](https://github.com/nocobase/nocobase/pull/8382)) par @mytharcher

- **[Bloc : modèle (obsolète)]** Correction d'un problème où la page d'édition des modèles hérités (v1) ne pouvait pas être consultée. ([#8376](https://github.com/nocobase/nocobase/pull/8376)) par @gchust

- **[Source de données : API REST]** Ajout d'une tolérance aux pannes pour le contexte de requête, afin d'éviter une erreur lorsque la méthode n'est pas dans le contexte par @mytharcher

- **[Multi-espace]**
  - Espace lié lors de l'ajout de données associées par @jiannx

  - La couleur du sélecteur d'espace suit le thème par @jiannx

- **[Impression de modèle]**
  - Correction du problème de fenêtre contextuelle de configuration de modèle obscurcie par @zhangzhonghe

  - Prise en charge du champ espace par @jiannx

  - Affichage des champs d'espace dans la version 2.0 par @jiannx

- **[Stockage de fichiers : S3(Pro)]** Correction du problème où le mode de renommage de fichier ne fonctionnait pas par @mytharcher

- **[Workflow : Approbation]**
  - Correction du problème où un enregistrement incorrect était chargé en raison de mauvais paramètres par @mytharcher

  - Correction du problème où le bloc de valeur ne s'affichait pas en raison de l'absence du composant `ValueBlock.Result` par @mytharcher

- **[Gestionnaire d'emails]**
  - Correction de la chaîne de conversation par @jiannx

  - Ajout de filtres sur la page de gestion par @jiannx
