---
title: "NocoBase v1.7.0-alpha.4 : Prise en charge des champs de texte long comme champs de titre pour les champs d'association"
description: "Notes de version de v1.7.0-alpha.4"
---

### 🎉 Nouvelles fonctionnalités

- **[client]**
  - Prise en charge des champs de texte long comme champs de titre pour les champs d'association ([#6495](https://github.com/nocobase/nocobase/pull/6495)) par @katherinehhh

  - Prise en charge des paramètres de style de champ pour la taille de police, le poids de police et le style de police ([#6489](https://github.com/nocobase/nocobase/pull/6489)) par @katherinehhh

- **[Variables et secrets]** Prise en charge des variables d'environnement dans l'URL des boutons de lien ([#6494](https://github.com/nocobase/nocobase/pull/6494)) par @katherinehhh

- **[Workflow : Nœud d'agrégation]** Prise en charge de la configuration de la précision pour le résultat d'agrégation ([#6491](https://github.com/nocobase/nocobase/pull/6491)) par @mytharcher

### 🚀 Améliorations

- **[client]** Prise en charge de la correspondance floue pour les champs sélectionnés dans le bouton de filtre ([#6496](https://github.com/nocobase/nocobase/pull/6496)) par @katherinehhh

- **[Notification : Email]** Ajout d'une description de configuration du champ sécurisé. ([#6501](https://github.com/nocobase/nocobase/pull/6501)) par @sheldon66

- **[Workflow : Nœud de messagerie]** Ajout d'une description de configuration du champ sécurisé. ([#6510](https://github.com/nocobase/nocobase/pull/6510)) par @sheldon66

- **[Calendrier]** Plugin de calendrier avec paramètres optionnels pour activer ou désactiver la création rapide d'événements ([#6391](https://github.com/nocobase/nocobase/pull/6391)) par @Cyx649312038

- **[Client WEB]** Ajout d'une invite de confirmation secondaire pour le vidage du cache ([#6505](https://github.com/nocobase/nocobase/pull/6505)) par @katherinehhh

- **[Gestionnaire d'emails]** Prise en charge de la réautorisation et de la sélection automatique du compte lors de l'envoi d'un email par @jiannx

### 🐛 Corrections de bugs

- **[client]**
  - Transparence du bouton d'action provoquant un problème d'affichage des paramètres au survol ([#6529](https://github.com/nocobase/nocobase/pull/6529)) par @katherinehhh

  - Erreur de soumission du champ horaire dans les paramètres régionaux chinois (syntaxe d'entrée invalide pour le type time) ([#6511](https://github.com/nocobase/nocobase/pull/6511)) par @katherinehhh

  - La hauteur de la sous-table dans le formulaire est définie avec la hauteur du formulaire ([#6518](https://github.com/nocobase/nocobase/pull/6518)) par @katherinehhh

  - Le champ de règle de liaison masqué par défaut avec valeur conservée ne fonctionne pas ([#6503](https://github.com/nocobase/nocobase/pull/6503)) par @katherinehhh

  - Le bouton d'ajout d'enfant ne s'affiche pas en mode icône uniquement ([#6504](https://github.com/nocobase/nocobase/pull/6504)) par @katherinehhh

- **[serveur]** La commande de mise à niveau peut provoquer des erreurs de workflow ([#6524](https://github.com/nocobase/nocobase/pull/6524)) par @gchust

- **[utils]** Bug connu de 'responsive desktop' ([#6476](https://github.com/nocobase/nocobase/pull/6476)) par @zhangzhonghe

- **[évaluateurs]** Revenir à 9 décimales pour l'arrondi ([#6492](https://github.com/nocobase/nocobase/pull/6492)) par @mytharcher

- **[Authentification]**
  - Nettoyage des options de l'authentificateur ([#6527](https://github.com/nocobase/nocobase/pull/6527)) par @2013xile

  - X-Authenticator manquant ([#6526](https://github.com/nocobase/nocobase/pull/6526)) par @chenos

- **[Bloc : Carte]**
  - Problème de gestion des clés du bloc carte provoquant des échecs de requête dus à des caractères invisibles ([#6521](https://github.com/nocobase/nocobase/pull/6521)) par @katherinehhh

  - Les champs de clé secrète ne déclenchent pas la validation dans la gestion de la carte ([#6509](https://github.com/nocobase/nocobase/pull/6509)) par @katherinehhh

- **[Gestionnaire de fichiers]**
  - Impossible d'accéder aux fichiers stockés dans COS ([#6512](https://github.com/nocobase/nocobase/pull/6512)) par @chenos

  - Encodage de l'URL ([#6497](https://github.com/nocobase/nocobase/pull/6497)) par @chenos

- **[Client WEB]** Le chemin dans le tableau de gestion des routes est différent du chemin réel ([#6483](https://github.com/nocobase/nocobase/pull/6483)) par @zhangzhonghe

- **[Bloc : Panneau d'actions]** Problème de mise en page dans le panneau d'actions mobile après avoir masqué des boutons en raison du contrôle des autorisations ([#6502](https://github.com/nocobase/nocobase/pull/6502)) par @katherinehhh

- **[Source de données : Principale]** Impossible de créer une vue MySQL. ([#6477](https://github.com/nocobase/nocobase/pull/6477)) par @aaaaaajie

- **[Workflow]** Correction du comptage des tâches héritées après la suppression du workflow ([#6493](https://github.com/nocobase/nocobase/pull/6493)) par @mytharcher

- **[Action : Exporter les enregistrements Pro]** Impossible d'exporter les pièces jointes par @chenos

- **[Gestionnaire de sauvegarde]**
  - Les fichiers téléchargés n'ont pas été restaurés lors de la création d'une sous-application à partir d'un modèle de sauvegarde par @gchust

  - La restauration peut provoquer des erreurs d'exécution du workflow par @gchust

  - Échec de la restauration de la base de données MySQL causé par un chevauchement d'ensembles GTID par @gchust

- **[WeCom]** Résolution des variables d'environnement et des secrets lors de la récupération de la configuration de notification. par @2013xile

- **[Workflow : Approbation]**
  - Correction de l'erreur du tableau de processus lorsque la tâche est supprimée par @mytharcher

  - Modification du retour de l'approbation en tant que tâche à faire par @mytharcher

  - Correction de l'erreur levée lors de l'ajout du résultat du nœud de requête par @mytharcher

  - Correction du bouton d'action manquant dans le tableau de processus par @mytharcher

  - Problème de style avec la boîte de dialogue contextuelle 'Appliquer nouveau' par @zhangzhonghe
