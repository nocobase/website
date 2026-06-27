---
title: "NocoBase v2.1.0-beta.27 : les employés IA peuvent rechercher la documentation groupée avec des commandes Bash"
description: "Notes de version de v2.1.0-beta.27"
---

### 🎉 Nouvelles fonctionnalités

- **[serveur]** Les employés IA peuvent rechercher dans la documentation groupée avec des commandes Bash ([#9269](https://github.com/nocobase/nocobase/pull/9269)) par @2013xile

- **[Employés IA]** Le nœud d'employé IA du workflow prend en charge le chargement de fichiers depuis les champs de pièces jointes. ([#9402](https://github.com/nocobase/nocobase/pull/9402)) par @cgyrock

- **[Copie de texte]** Prise en charge de l'option « Afficher le bouton de copie » pour le champ de texte en lecture seule ([#9394](https://github.com/nocobase/nocobase/pull/9394)) par @katherinehhh

### 🚀 Améliorations

- **[client]** Permet d'attribuer une valeur de champ pour le champ de séquence ([#9397](https://github.com/nocobase/nocobase/pull/9397)) par @mytharcher

- **[Bloc : Kanban]** Cohérence améliorée de l'espacement des champs de détail v2 et meilleure adaptation de l'espacement des cartes et colonnes Kanban aux paramètres du thème. ([#9390](https://github.com/nocobase/nocobase/pull/9390)) par @jiannx

- **[Employés IA]** Outils d'édition RunJS de Nathan améliorés et latence réduite lors des longues conversations IA ([#9311](https://github.com/nocobase/nocobase/pull/9311)) par @2013xile

- **[Workflow : Approbation]** Correction du comportement de validation requis pour les formulaires d'approbation par @zhangzhonghe

### 🐛 Corrections de bugs

- **[moteur de flux]** Correction des messages de validation de champ de table de données non traduits dans les formulaires de flux v2 ([#9393](https://github.com/nocobase/nocobase/pull/9393)) par @jiannx

- **[client]**
  - Correction des formulaires de filtre qui ne pouvaient pas se réduire ([#9386](https://github.com/nocobase/nocobase/pull/9386)) par @zhangzhonghe

  - Correction de l'erreur lors du filtrage des champs scalaires avec des filtres multi-sélection personnalisés ([#9387](https://github.com/nocobase/nocobase/pull/9387)) par @zhangzhonghe

  - Correction des noms de fichiers de téléchargement incorrects pour les champs AttachmentURL lorsque les métadonnées du fichier sont manquantes. ([#9382](https://github.com/nocobase/nocobase/pull/9382)) par @mytharcher

  - Correction de l'adaptation de DividerItem au thème dans v2 ([#9372](https://github.com/nocobase/nocobase/pull/9372)) par @katherinehhh

  - Correction du problème où les règles de liaison de sous-tableau v1 modifient incorrectement les styles des champs obligatoires ([#9364](https://github.com/nocobase/nocobase/pull/9364)) par @zhangzhonghe

  - Correction des champs `Masqué (valeur réservée)` dans les blocs de formulaire afin qu'ils restent visibles en mode Éditeur d'interface utilisateur, et rétablissement de la prise en charge de la saisie de valeur pour leur attribution dans l'assignation de champ ([#9373](https://github.com/nocobase/nocobase/pull/9373)) par @jiannx

  - Correction du déclencheur de workflow en masse du tableau v2 afin que la sélection de ligne reste cohérente après la redirection entre les onglets et que les lignes puissent être à nouveau sélectionnées après le retour ([#9388](https://github.com/nocobase/nocobase/pull/9388)) par @jiannx

- **[client-v2]**
  - Correction de l'erreur lors de la sélection des champs d'association dans les paramètres de champ. ([#9379](https://github.com/nocobase/nocobase/pull/9379)) par @gchust

  - Correction du problème où une page 404 s'affiche brièvement après le démarrage de l'application ([#9365](https://github.com/nocobase/nocobase/pull/9365)) par @zhangzhonghe

- **[serveur]** Correction des requêtes de découverte OAuth des sous-applications routées comme des requêtes de l'application principale ([#9383](https://github.com/nocobase/nocobase/pull/9383)) par @2013xile

- **[Source de données : Principale]** Correction des tables de base de données importées utilisant un nom de table préfixé incorrect lorsqu'un préfixe de table est activé ([#9403](https://github.com/nocobase/nocobase/pull/9403)) par @2013xile

- **[Notification : Message dans l'application]** Correction d'un problème où la liste des messages dans l'application ne se rafraîchissait pas après la réception de notifications en temps réel ([#9409](https://github.com/nocobase/nocobase/pull/9409)) par @mytharcher

- **[Gestionnaire de source de données]** Empêcher la modification et la suppression de tous les enregistrements dans les autorisations de portée personnalisée pour les sources de données externes ([#9395](https://github.com/nocobase/nocobase/pull/9395)) par @katherinehhh

- **[IA : Serveur MCP]** Correction du packaging du serveur MCP pour inclure les dépendances d'exécution ([#9401](https://github.com/nocobase/nocobase/pull/9401)) par @2013xile

- **[Moteur de flux]** Correction d'un problème où les blocs générés par l'IA ne pouvaient pas être convertis de modèles de référence en modèles en double. ([#9392](https://github.com/nocobase/nocobase/pull/9392)) par @gchust

- **[Action : Importer des enregistrements Pro]** Correction du problème où la vérification des doublons sur le champ de date échouait toujours par @mytharcher

- **[Politique de mot de passe]** Correction d'un problème où les utilisateurs verrouillés de manière permanente pouvaient se connecter après un redémarrage du service par @2013xile

- **[Workflow : Approbation]** Correction du problème où le tiroir de sélection d'enregistrement est masqué dans la configuration du workflow d'approbation par @zhangzhonghe

- **[Gestionnaire de sauvegarde]** Correction de l'adaptation du schéma pg par @Andrew1989Y
