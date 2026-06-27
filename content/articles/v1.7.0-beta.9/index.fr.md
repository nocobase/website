---
title: "NocoBase v1.7.0-beta.9 : Prise en charge de l'union des rôles utilisateur"
description: "Notes de version de v1.7.0-beta.9"
---

### 🎉 Nouvelles fonctionnalités

- **[acl]** Prise en charge de l'union des rôles utilisateur ([#6301](https://github.com/nocobase/nocobase/pull/6301)) par @aaaaaajie

- **[client]**
  - Prise en charge de l'extension des champs prédéfinis dans les collections ([#6183](https://github.com/nocobase/nocobase/pull/6183)) par @katherinehhh

  - Prise en charge de l'extension des opérateurs de filtre côté frontend ([#6085](https://github.com/nocobase/nocobase/pull/6085)) par @katherinehhh

- **[Vérification]** Prise en charge de la liaison par l'utilisateur de différents types de vérification, tels que les authentificateurs SMS et TOTP, et de la vérification d'identité dans les scénarios requis. Permet le développement et l'extension des méthodes de vérification. ([#6026](https://github.com/nocobase/nocobase/pull/6026)) par @2013xile
Référence : [Vérification](https://docs.nocobase.com/handbook/verification)
- **[Calendrier]** Prise en charge de l'extension des champs optionnels pour les plugins Kanban, Calendrier et Champ de formule ([#6076](https://github.com/nocobase/nocobase/pull/6076)) par @katherinehhh

- **[Bloc : modèle]** Ajout du plugin `Bloc : modèle`, fournissant un support de modèle pour les blocs basé sur un mécanisme d'héritage. ([#5920](https://github.com/nocobase/nocobase/pull/5920)) par @gchust

- **[plugin-demo-platform]** Définition de skipAuthCheck de la route "/new" sur true. par @sheldon66

- **[Authentification à deux facteurs (2FA)]** Nouveaux plugins : Authentification à deux facteurs et Vérification : Authentificateur TOTP par @2013xile
Référence : [Authentification à deux facteurs (2FA)](https://docs.nocobase.com/handbook/two-factor-authentication)<br />[Vérification : Authentificateur TOTP](https://docs.nocobase.com/handbook/verification-totp-authenticator)
### 🚀 Améliorations

- **[client]**
  - Ajout de skipAuthCheck à router.add pour empêcher la redirection vers la page de connexion sur les pages publiques. ([#6453](https://github.com/nocobase/nocobase/pull/6453)) par @sheldon66

  - Mise à niveau des dépendances liées à ant design vers la version 5.24.2 ([#6343](https://github.com/nocobase/nocobase/pull/6343)) par @gchust

- **[utils]** Adaptation des pages de bureau pour les appareils mobiles ([#6393](https://github.com/nocobase/nocobase/pull/6393)) par @zhangzhonghe

- **[Formulaires publics]** Définition du titre de la page du formulaire public sur le titre configuré lors de la création ([#6538](https://github.com/nocobase/nocobase/pull/6538)) par @katherinehhh

- **[Gestionnaire de fichiers]**
  - Ajout de code backend pour générer l'URL de prévisualisation du fichier ([#6223](https://github.com/nocobase/nocobase/pull/6223)) par @jiannx

  - Modification de l'API du type de stockage et ajout de l'API du plugin ([#6246](https://github.com/nocobase/nocobase/pull/6246)) par @mytharcher

- **[Bloc : modèle]** Prise en charge de l'enregistrement d'un bloc de données en tant que modèle de bloc depuis une page ([#6348](https://github.com/nocobase/nocobase/pull/6348)) par @gchust

- **[Workflow]** Déplacement des paramètres de liaison du workflow vers le plugin ([#6143](https://github.com/nocobase/nocobase/pull/6143)) par @mytharcher

### 🐛 Corrections de bugs

- **[client]**
  - Problème de glisser-déposer des boutons de ligne de tableau ([#6544](https://github.com/nocobase/nocobase/pull/6544)) par @katherinehhh

  - Impossible d'utiliser la variable 'Utilisateur actuel' lors de l'ajout d'une page de lien ([#6536](https://github.com/nocobase/nocobase/pull/6536)) par @zhangzhonghe

  - La liaison de plage de données du champ relationnel n'est pas effective ([#6530](https://github.com/nocobase/nocobase/pull/6530)) par @zhangzhonghe

  - Suppression de l'option 'Autoriser la sélection multiple' des champs de sélection unique déroulants dans les formulaires de filtre ([#6515](https://github.com/nocobase/nocobase/pull/6515)) par @zhangzhonghe

  - Erreur de la commande `yarn doc` ([#6540](https://github.com/nocobase/nocobase/pull/6540)) par @gchust

  - Champs manquants dans la configuration des règles de liaison ([#6488](https://github.com/nocobase/nocobase/pull/6488)) par @katherinehhh

  - Le contenu n'est pas entièrement affiché dans les navigateurs mobiles ([#6446](https://github.com/nocobase/nocobase/pull/6446)) par @zhangzhonghe

  - Lors de l'utilisation de l'opérateur '$anyOf', la règle de liaison est invalide ([#6400](https://github.com/nocobase/nocobase/pull/6400)) par @zhangzhonghe

  - Formatage incorrect du champ heure dans le formulaire de filtre ([#6374](https://github.com/nocobase/nocobase/pull/6374)) par @katherinehhh

  - Style de saisie incorrect pour le réglage de la valeur par défaut du formulaire ([#6490](https://github.com/nocobase/nocobase/pull/6490)) par @gchust

- **[utils]** Bug connu de 'responsive bureau' ([#6476](https://github.com/nocobase/nocobase/pull/6476)) par @zhangzhonghe

- **[acl]** Correction du problème où les champs de relation ne sont pas affichés sous l'union des rôles. ([#6456](https://github.com/nocobase/nocobase/pull/6456)) par @aaaaaajie

- **[Collection : Arbre]** Problème de migration pour le plugin-collection-tree ([#6537](https://github.com/nocobase/nocobase/pull/6537)) par @2013xile

- **[Action : Requête personnalisée]** Impossible de télécharger les fichiers encodés en UTF-8 ([#6541](https://github.com/nocobase/nocobase/pull/6541)) par @2013xile

- **[Variables et secrets]** Les boutons ne s'affichent pas dans le tiroir de création de nouvelles variables ([#6485](https://github.com/nocobase/nocobase/pull/6485)) par @gchust

- **[Client WEB]** Remplacement de toutes les instances de ctx.state.currentRole (rôle unique) par ctx.state.currentRoles (prend en charge plusieurs rôles). ([#6427](https://github.com/nocobase/nocobase/pull/6427)) par @aaaaaajie

- **[Contrôle d'accès]**
  - Erreur lorsque la portée des données est définie sur ses propres données et que la table n'a pas de champ créateur. ([#6428](https://github.com/nocobase/nocobase/pull/6428)) par @aaaaaajie

  - Correction du changement de rôle qui ne prenait pas effet. ([#6454](https://github.com/nocobase/nocobase/pull/6454)) par @aaaaaajie

- **[Bloc : modèle]**
  - L'option Enregistrer comme modèle ne s'affiche pas dans le bloc de données de la page ([#6398](https://github.com/nocobase/nocobase/pull/6398)) par @gchust

  - Comportement incorrect de Enregistrer comme modèle dans le client mobile ([#6420](https://github.com/nocobase/nocobase/pull/6420)) par @gchust

  - Connexion requise lors de l'accès à un formulaire public ([#6258](https://github.com/nocobase/nocobase/pull/6258)) par @gchust

- **[Auth : Clés API]** Suppression de l'union dans la liste des rôles du plugin de clés API ([#6432](https://github.com/nocobase/nocobase/pull/6432)) par @aaaaaajie

- **[Bloc : Formulaire multi-étapes]** Le bouton de soumission a la même couleur dans son état par défaut et en surbrillance par @jiannx

- **[Workflow : Approbation]** Problème de style avec la boîte de dialogue contextuelle 'Appliquer nouveau' par @zhangzhonghe
