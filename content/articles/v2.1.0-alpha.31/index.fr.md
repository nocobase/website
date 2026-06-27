---
title: "NocoBase v2.1.0-alpha.31 : ajout des actions d'association et de dissociation au bloc d'association"
description: "Notes de version de v2.1.0-alpha.31"
---

### 🎉 Nouvelles fonctionnalités

- **[client]** Ajout des actions d'association et de dissociation au bloc d'association ([#9366](https://github.com/nocobase/nocobase/pull/9366)) par @katherinehhh

- **[Copie de texte]** Prise en charge de l'option « Afficher le bouton de copie » pour le champ de texte en lecture seule ([#9394](https://github.com/nocobase/nocobase/pull/9394)) par @katherinehhh

- **[Employés IA]** Le nœud Employé IA du workflow prend désormais en charge le chargement de fichiers depuis les champs de pièce jointe. ([#9402](https://github.com/nocobase/nocobase/pull/9402)) par @cgyrock

- **[Visualisation de données]** Ajout du support client-v2 pour les plugins de blocs ([#9297](https://github.com/nocobase/nocobase/pull/9297)) par @zhangzhonghe

### 🚀 Améliorations

- **[client]** Permet d'attribuer une valeur de champ pour le champ de séquence ([#9397](https://github.com/nocobase/nocobase/pull/9397)) par @mytharcher

- **[non défini]** - ([#9374](https://github.com/nocobase/nocobase/pull/9374)) par @Molunerfinn

- **[Bloc : Kanban]** Amélioration de la cohérence de l'espacement des champs de détail v2 et meilleure adaptation de l'espacement des cartes et colonnes Kanban aux paramètres du thème. ([#9390](https://github.com/nocobase/nocobase/pull/9390)) par @jiannx

- **[Workflow : Approbation]** Correction du comportement de validation des champs obligatoires pour les formulaires d'approbation par @zhangzhonghe

### 🐛 Corrections de bugs

- **[client]**
  - Correction des formulaires de filtre qui ne pouvaient pas se réduire ([#9386](https://github.com/nocobase/nocobase/pull/9386)) par @zhangzhonghe

  - Correction du déclencheur de workflow groupé du tableau v2 pour que la sélection de lignes reste cohérente après la redirection entre les onglets et que les lignes puissent être à nouveau sélectionnées après le retour ([#9388](https://github.com/nocobase/nocobase/pull/9388)) par @jiannx

  - Correction des champs « Masqué (valeur réservée) » dans les blocs de formulaire afin qu'ils restent visibles en mode Éditeur d'interface utilisateur, et rétablissement de la prise en charge de la saisie de valeur pour leur affectation dans l'affectation de champ ([#9373](https://github.com/nocobase/nocobase/pull/9373)) par @jiannx

  - Correction de l'adaptation de DividerItem au thème dans v2 ([#9372](https://github.com/nocobase/nocobase/pull/9372)) par @katherinehhh

  - Correction des noms de fichiers de téléchargement incorrects pour les champs AttachmentURL lorsque les métadonnées du fichier sont manquantes. ([#9382](https://github.com/nocobase/nocobase/pull/9382)) par @mytharcher

  - Correction de l'erreur lors du filtrage des champs scalaires avec des filtres personnalisés à sélection multiple ([#9387](https://github.com/nocobase/nocobase/pull/9387)) par @zhangzhonghe

  - Correction du problème où les règles de liaison n'étaient pas réexécutées après la modification des valeurs du formulaire. ([#9357](https://github.com/nocobase/nocobase/pull/9357)) par @gchust

  - Correction du problème où les règles de liaison de sous-tableau v1 modifiaient incorrectement les styles des champs obligatoires ([#9364](https://github.com/nocobase/nocobase/pull/9364)) par @zhangzhonghe

  - Correction du rendu incorrect des données dans le bloc de carte en grille après mise à jour et actualisation ([#9351](https://github.com/nocobase/nocobase/pull/9351)) par @katherinehhh

  - Correction du champ d'option obligatoire dans le sous-tableau non validé correctement lors de la première sélection sur mobile ([#9352](https://github.com/nocobase/nocobase/pull/9352)) par @katherinehhh

  - Correction de l'option de création rapide masquée pour le champ de sélection d'association dans le sous-tableau v2 ([#9358](https://github.com/nocobase/nocobase/pull/9358)) par @katherinehhh

  - Correction du problème où les variables de paramètre de requête URL devenaient invalides après le changement de pages mises en cache ([#9263](https://github.com/nocobase/nocobase/pull/9263)) par @zhangzhonghe

- **[moteur de flux]** Correction des messages de validation de champ de table de données non traduits dans les formulaires de flux v2 ([#9393](https://github.com/nocobase/nocobase/pull/9393)) par @jiannx

- **[serveur]**
  - Correction des requêtes de découverte OAuth de sous-application routées comme des requêtes d'application principale ([#9383](https://github.com/nocobase/nocobase/pull/9383)) par @2013xile

  - Validation des noms de paquets de plugins avant les opérations sur le système de fichiers ([#9367](https://github.com/nocobase/nocobase/pull/9367)) par @chenos

- **[client-v2]**
  - Correction d'une erreur lors de la sélection de champs d'association dans les paramètres de champ. ([#9379](https://github.com/nocobase/nocobase/pull/9379)) par @gchust

  - Correction du problème où une page 404 s'affichait brièvement après le démarrage de l'application ([#9365](https://github.com/nocobase/nocobase/pull/9365)) par @zhangzhonghe

  - Correction des problèmes de placeholder de glisser-déposer et de position de dépôt des blocs de page v2 ([#9361](https://github.com/nocobase/nocobase/pull/9361)) par @zhangzhonghe

  - Correction du problème où certaines pages v2 ne parvenaient pas à charger les plugins distants ([#9369](https://github.com/nocobase/nocobase/pull/9369)) par @zhangzhonghe

- **[non défini]** Correction des liens morts dans la documentation traduite et activation de la détection des liens morts par défaut dans la construction de la documentation. ([#9371](https://github.com/nocobase/nocobase/pull/9371)) par @Molunerfinn

- **[Notification : Message in-app]** Correction d'un problème où la liste des messages in-app ne se rafraîchissait pas après la réception de notifications en temps réel ([#9409](https://github.com/nocobase/nocobase/pull/9409)) par @mytharcher

- **[Gestionnaire de source de données]** Empêcher la modification et la suppression de tous les enregistrements dans les autorisations de portée personnalisée pour les sources de données externes ([#9395](https://github.com/nocobase/nocobase/pull/9395)) par @katherinehhh

- **[IA : Serveur MCP]** Correction du packaging du serveur MCP pour inclure les dépendances d'exécution ([#9401](https://github.com/nocobase/nocobase/pull/9401)) par @2013xile

- **[Source de données : Principale]** Correction des tables de base de données importées utilisant un nom de table préfixé incorrect lorsqu'un préfixe de table est activé ([#9403](https://github.com/nocobase/nocobase/pull/9403)) par @2013xile

- **[Moteur de flux]** Correction d'un problème où les blocs générés par l'IA ne pouvaient pas être convertis de modèles de référence en modèles en double. ([#9392](https://github.com/nocobase/nocobase/pull/9392)) par @gchust

- **[Employés IA]**
  - Correction d'une erreur de lecture de pièce jointe de champ d'association par le nœud Employé IA dans le workflow ([#9377](https://github.com/nocobase/nocobase/pull/9377)) par @cgyrock

  - Correction du problème où le nœud Employé IA du workflow ne se terminait pas correctement après l'affectation d'un outil. ([#9381](https://github.com/nocobase/nocobase/pull/9381)) par @cgyrock

- **[Action : Requête personnalisée]** Mise à niveau de koa vers v3 ([#9368](https://github.com/nocobase/nocobase/pull/9368)) par @chenos

- **[Bloc : Kanban]**
  - Amélioration du style compact des cartes Kanban et optimisation de la sélection de modèle de popup de création rapide. ([#9370](https://github.com/nocobase/nocobase/pull/9370)) par @jiannx

  - Correction du problème de retour à la ligne d'un seul mot dans le champ de texte long du bloc Kanban v1 ([#9356](https://github.com/nocobase/nocobase/pull/9356)) par @katherinehhh

- **[Champ de collection : Formule]** Correction du champ de formule dans le sous-tableau v2 qui ne déclenchait pas le calcul automatique ([#9354](https://github.com/nocobase/nocobase/pull/9354)) par @katherinehhh

- **[Action : Importer des enregistrements Pro]** Correction du problème où la vérification des doublons sur le champ de date échouait toujours par @mytharcher

- **[Politique de mot de passe]** Correction d'un problème où les utilisateurs verrouillés de manière permanente pouvaient se connecter après un redémarrage du service par @2013xile

- **[Workflow : Approbation]** Correction du problème où le tiroir de sélection d'enregistrement était masqué dans la configuration du workflow d'approbation par @zhangzhonghe

- **[Gestionnaire d'email]** Correction de l'affichage du titre des identités de messagerie par @jiannx

- **[Gestionnaire de sauvegarde]** Correction de l'adaptation du schéma pg par @Andrew1989Y
