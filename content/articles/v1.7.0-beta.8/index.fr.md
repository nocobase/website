---
title: "NocoBase v1.7.0-beta.8 : Prise en charge des variables d'environnement dans l'URL des boutons de lien"
description: "Notes de version de v1.7.0-beta.8"
---

### 🎉 Nouvelles fonctionnalités

- **[client]** Prise en charge des paramètres de style de champ pour la taille, le poids et le style de police ([#6489](https://github.com/nocobase/nocobase/pull/6489)) par @katherinehhh

- **[Variables et secrets]** Prise en charge des variables d'environnement dans l'URL des boutons de lien ([#6494](https://github.com/nocobase/nocobase/pull/6494)) par @katherinehhh

### 🚀 Améliorations

- **[client]** Prise en charge de la correspondance floue pour les champs sélectionnés dans le bouton de filtre ([#6496](https://github.com/nocobase/nocobase/pull/6496)) par @katherinehhh

- **[Workflow : nœud de messagerie]** Ajout de la description de la configuration du champ sécurisé. ([#6510](https://github.com/nocobase/nocobase/pull/6510)) par @sheldon66

- **[Client WEB]** Ajout d'une invite de confirmation secondaire pour le vidage du cache ([#6505](https://github.com/nocobase/nocobase/pull/6505)) par @katherinehhh

- **[Notification : Email]** Ajout de la description de la configuration du champ sécurisé. ([#6501](https://github.com/nocobase/nocobase/pull/6501)) par @sheldon66

- **[Gestionnaire d'emails]** Prise en charge de la réautorisation et de la sélection automatique du compte lors de l'envoi d'un email par @jiannx

### 🐛 Corrections de bugs

- **[serveur]** La commande de mise à niveau peut provoquer des erreurs de workflow ([#6524](https://github.com/nocobase/nocobase/pull/6524)) par @gchust

- **[client]**
  - La hauteur du sous-tableau dans le formulaire est définie en même temps que la hauteur du formulaire ([#6518](https://github.com/nocobase/nocobase/pull/6518)) par @katherinehhh

  - Erreur de soumission du champ horaire dans la locale chinoise (syntaxe d'entrée invalide pour le type time) ([#6511](https://github.com/nocobase/nocobase/pull/6511)) par @katherinehhh

  - Transparence du bouton d'action provoquant un problème d'affichage des paramètres au survol ([#6529](https://github.com/nocobase/nocobase/pull/6529)) par @katherinehhh

- **[Authentification]**
  - Suppression des espaces dans les options de l'authentificateur ([#6527](https://github.com/nocobase/nocobase/pull/6527)) par @2013xile

  - X-Authenticator manquant ([#6526](https://github.com/nocobase/nocobase/pull/6526)) par @chenos

- **[Bloc : Carte]**
  - Problème de gestion des clés du bloc carte provoquant des échecs de requête en raison de caractères invisibles ([#6521](https://github.com/nocobase/nocobase/pull/6521)) par @katherinehhh

  - Les champs de clé secrète ne déclenchent pas la validation dans la gestion de la carte ([#6509](https://github.com/nocobase/nocobase/pull/6509)) par @katherinehhh

- **[Gestionnaire de fichiers]** Impossible d'accéder aux fichiers stockés dans COS ([#6512](https://github.com/nocobase/nocobase/pull/6512)) par @chenos

- **[Action : Exporter les enregistrements Pro]** Impossible d'exporter les pièces jointes par @chenos

- **[Gestionnaire de sauvegarde]** La restauration peut provoquer des erreurs d'exécution du workflow par @gchust

- **[WeCom]** Résolution des variables d'environnement et des secrets lors de la récupération de la configuration de notification. par @2013xile

- **[Workflow : Approbation]**
  - Correction d'une erreur de table de processus lorsque le job est supprimé par @mytharcher

  - Correction d'une erreur levée lors de l'ajout du résultat d'un nœud de requête par @mytharcher

  - Correction d'un crash causé par un utilisateur nul par @mytharcher
