---
title: "NocoBase v2.0.50 : prise en charge de l'option \"Afficher le bouton de copie\" pour le champ de texte en lecture seule"
description: "Notes de version de la v2.0.50"
---

### 🎉 Nouvelles fonctionnalités

- **[client]** Ajout des actions d'association et de dissociation au bloc d'association ([#9366](https://github.com/nocobase/nocobase/pull/9366)) par @katherinehhh

- **[Copie de texte]** Prise en charge de l'option « Afficher le bouton de copie » pour le champ de texte en lecture seule ([#9394](https://github.com/nocobase/nocobase/pull/9394)) par @katherinehhh

### 🚀 Améliorations

- **[non défini]** - ([#9374](https://github.com/nocobase/nocobase/pull/9374)) par @Molunerfinn

- **[client]** Permet d'attribuer une valeur de champ pour le champ de séquence ([#9397](https://github.com/nocobase/nocobase/pull/9397)) par @mytharcher

### 🐛 Corrections de bugs

- **[moteur de flux]** Correction des messages de validation de champ de table de données non traduits dans les formulaires de flux v2 ([#9393](https://github.com/nocobase/nocobase/pull/9393)) par @jiannx

- **[client]**
  - Correction des champs « Masqué (valeur réservée) » dans les blocs de formulaire afin qu'ils restent visibles en mode Éditeur d'interface utilisateur, et rétablissement de la prise en charge de la saisie de valeur pour leur attribution dans l'assignation de champ ([#9373](https://github.com/nocobase/nocobase/pull/9373)) par @jiannx

  - Correction des noms de fichiers de téléchargement incorrects pour les champs AttachmentURL lorsque les métadonnées du fichier sont manquantes. ([#9382](https://github.com/nocobase/nocobase/pull/9382)) par @mytharcher

  - Correction du déclencheur de workflow en masse du tableau v2 afin que la sélection de lignes reste cohérente après la redirection entre les onglets et que les lignes puissent être à nouveau sélectionnées après le retour ([#9388](https://github.com/nocobase/nocobase/pull/9388)) par @jiannx

  - Correction des formulaires de filtre qui ne pouvaient pas se réduire ([#9386](https://github.com/nocobase/nocobase/pull/9386)) par @zhangzhonghe

  - Correction du problème où les règles de liaison de sous-tableau v1 modifiaient incorrectement les styles des champs obligatoires ([#9364](https://github.com/nocobase/nocobase/pull/9364)) par @zhangzhonghe

  - Correction du rendu incorrect des données dans le bloc de carte en grille après mise à jour et actualisation ([#9351](https://github.com/nocobase/nocobase/pull/9351)) par @katherinehhh

  - Correction du champ d'option obligatoire dans le sous-tableau non validé correctement lors de la première sélection sur mobile ([#9352](https://github.com/nocobase/nocobase/pull/9352)) par @katherinehhh

  - Correction du problème où les variables de paramètre de requête URL devenaient invalides après le changement de pages mises en cache ([#9263](https://github.com/nocobase/nocobase/pull/9263)) par @zhangzhonghe

  - Correction de l'adaptation de DividerItem au thème dans v2 ([#9372](https://github.com/nocobase/nocobase/pull/9372)) par @katherinehhh

  - Correction du masquage de l'option de création rapide pour le champ de sélection d'association dans le sous-tableau v2 ([#9358](https://github.com/nocobase/nocobase/pull/9358)) par @katherinehhh

  - Correction des règles de liaison qui n'étaient pas réexécutées après la modification des valeurs du formulaire. ([#9357](https://github.com/nocobase/nocobase/pull/9357)) par @gchust

  - Correction de l'erreur lors du filtrage des champs scalaires avec des filtres multi-sélection personnalisés ([#9387](https://github.com/nocobase/nocobase/pull/9387)) par @zhangzhonghe

- **[serveur]** Validation des noms de paquets de plugins avant les opérations sur le système de fichiers ([#9367](https://github.com/nocobase/nocobase/pull/9367)) par @chenos

- **[Gestionnaire de source de données]** Empêcher la modification et la suppression de tous les enregistrements dans les autorisations de portée personnalisée pour les sources de données externes ([#9395](https://github.com/nocobase/nocobase/pull/9395)) par @katherinehhh

- **[Source de données : Principale]** Correction des tables de base de données importées utilisant un nom de table préfixé incorrect lorsqu'un préfixe de table est activé ([#9403](https://github.com/nocobase/nocobase/pull/9403)) par @2013xile

- **[Notification : Message in-app]** Correction d'un problème où la liste des messages in-app ne se rafraîchissait pas après la réception de notifications en temps réel ([#9409](https://github.com/nocobase/nocobase/pull/9409)) par @mytharcher

- **[Bloc : Kanban]** Correction de l'empêchement du retour à la ligne d'un seul mot dans le champ de texte long du bloc kanban v1 ([#9356](https://github.com/nocobase/nocobase/pull/9356)) par @katherinehhh

- **[Champ de collection : Formule]** Correction du champ de formule dans le sous-tableau v2 qui ne déclenchait pas le calcul automatique ([#9354](https://github.com/nocobase/nocobase/pull/9354)) par @katherinehhh
