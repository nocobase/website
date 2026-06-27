---
title: "Mises à jour hebdomadaires de NocoBase : Prise en charge de l'union des rôles utilisateur"
description: "Les mises à jour de cette semaine incluent : prise en charge des variables d'environnement dans les URL des boutons de lien, activation des champs de texte long comme champs de titre pour les champs d'association, et plus encore."
---

Résume les journaux de mise à jour hebdomadaires du produit. Les dernières versions sont disponibles sur [notre blog](https://www.nocobase.com/en/blog/timeline).

**NocoBase est actuellement mis à jour avec trois branches : `main`, `next` et `develop`.**

![version.png](https://static-docs.nocobase.com/ba5f04e27e99c625cb3822da5df07860.png)

* `main` : La version la plus stable à ce jour, recommandée pour l'installation ;
* `next` : Version bêta, contient les nouvelles fonctionnalités à venir et a été testée préliminairement. Il peut y avoir des problèmes connus ou inconnus. Elle est principalement destinée aux utilisateurs testeurs pour recueillir des retours et optimiser davantage les fonctionnalités. Idéale pour les utilisateurs testeurs qui souhaitent découvrir les nouvelles fonctionnalités en avant-première et donner leur avis ;
* `develop` : Version alpha, contient le code de fonctionnalité le plus récent, peut être incomplète ou instable, principalement destinée au développement interne et à l'itération rapide. Adaptée aux utilisateurs techniques intéressés par les fonctionnalités de pointe du produit, mais avec des problèmes potentiels et des fonctions incomplètes. Ne pas utiliser en production.

## main

![main.png](https://static-docs.nocobase.com/47a3c71734c1d0f908b51f9ebd53c0ac.png)

### [v1.6.7](https://www.nocobase.com/en/blog/v1.6.7)

*Date de sortie : 2025-03-20*

#### 🚀 Améliorations

- **[Workflow : nœud de messagerie]** Ajout de la description de la configuration du champ sécurisé. ([#6510](https://github.com/nocobase/nocobase/pull/6510)) par @sheldon66
- **[Notification : Email]** Ajout de la description de la configuration du champ sécurisé. ([#6501](https://github.com/nocobase/nocobase/pull/6501)) par @sheldon66
- **[Calendrier]** Plugin Calendrier avec paramètres optionnels pour activer ou désactiver la création rapide d'événements ([#6391](https://github.com/nocobase/nocobase/pull/6391)) par @Cyx649312038

#### 🐛 Corrections de bugs

- **[client]** Erreur de soumission du champ heure dans les paramètres régionaux chinois (syntaxe d'entrée invalide pour le type time) ([#6511](https://github.com/nocobase/nocobase/pull/6511)) par @katherinehhh
- **[Gestionnaire de fichiers]** Impossible d'accéder aux fichiers stockés dans COS ([#6512](https://github.com/nocobase/nocobase/pull/6512)) par @chenos
- **[Bloc : Carte]** Les champs de clé secrète ne déclenchent pas la validation dans la gestion des cartes ([#6509](https://github.com/nocobase/nocobase/pull/6509)) par @katherinehhh
- **[Client WEB]** Le chemin dans le tableau de gestion des routes est différent du chemin réel ([#6483](https://github.com/nocobase/nocobase/pull/6483)) par @zhangzhonghe
- **[Action : Exporter les enregistrements Pro]** Impossible d'exporter les pièces jointes par @chenos
- **[Workflow : Approbation]**

  - Correction d'un crash causé par un utilisateur nul par @mytharcher
  - Correction d'une erreur levée lors de l'ajout du résultat d'un nœud de requête par @mytharcher

### [v1.6.8](https://www.nocobase.com/en/blog/v1.6.8)

*Date de sortie : 2025-03-22*

#### 🐛 Corrections de bugs

- **[serveur]** La commande de mise à niveau peut provoquer des erreurs de workflow ([#6524](https://github.com/nocobase/nocobase/pull/6524)) par @gchust
- **[client]** La hauteur du sous-tableau dans le formulaire est définie avec la hauteur du formulaire ([#6518](https://github.com/nocobase/nocobase/pull/6518)) par @katherinehhh
- **[Authentification]**

  - X-Authenticator manquant ([#6526](https://github.com/nocobase/nocobase/pull/6526)) par @chenos
  - Nettoyage des options de l'authentificateur ([#6527](https://github.com/nocobase/nocobase/pull/6527)) par @2013xile
- **[Bloc : Carte]** Problème de gestion des clés du bloc carte entraînant des échecs de requête dus à des caractères invisibles ([#6521](https://github.com/nocobase/nocobase/pull/6521)) par @katherinehhh
- **[Gestionnaire de sauvegarde]** La restauration peut provoquer des erreurs d'exécution du workflow par @gchust
- **[WeCom]** Résolution des variables d'environnement et des secrets lors de la récupération de la configuration de notification. par @2013xile

### [v1.6.9](https://www.nocobase.com/en/blog/v1.6.9)

*Date de sortie : 2025-03-23*

#### 🐛 Corrections de bugs

- **[client]** Transparence du bouton d'action provoquant un problème d'affichage des paramètres au survol ([#6529](https://github.com/nocobase/nocobase/pull/6529)) par @katherinehhh

### [v1.6.10](https://www.nocobase.com/en/blog/v1.6.10)

*Date de sortie : 2025-03-25*

#### 🐛 Corrections de bugs

- **[client]**

  - Impossible d'utiliser la variable 'Utilisateur actuel' lors de l'ajout d'une page de lien ([#6536](https://github.com/nocobase/nocobase/pull/6536)) par @zhangzhonghe
  - L'affectation de champ avec une valeur "nulle" est inefficace ([#6549](https://github.com/nocobase/nocobase/pull/6549)) par @katherinehhh
  - Erreur de commande `yarn doc` ([#6540](https://github.com/nocobase/nocobase/pull/6540)) par @gchust
  - Suppression de l'option 'Autoriser la sélection multiple' des champs de sélection unique déroulants dans les formulaires de filtre ([#6515](https://github.com/nocobase/nocobase/pull/6515)) par @zhangzhonghe
  - La liaison de plage de données du champ relationnel n'est pas effective ([#6530](https://github.com/nocobase/nocobase/pull/6530)) par @zhangzhonghe
- **[Collection : Arborescence]** Problème de migration pour plugin-collection-tree ([#6537](https://github.com/nocobase/nocobase/pull/6537)) par @2013xile
- **[Action : Requête personnalisée]** Impossible de télécharger les fichiers encodés en UTF-8 ([#6541](https://github.com/nocobase/nocobase/pull/6541)) par @2013xile

## next

![next.png](https://static-docs.nocobase.com/8ed17a0f08cc585018f6de6c8b13947d.png)

### [v1.7.0-beta.7](https://www.nocobase.com/en/blog/v1.7.0-beta.7)

*Date de sortie : 2025-03-19*

#### 🚀 Améliorations

- **[Calendrier]** Plugin Calendrier avec paramètres optionnels pour activer ou désactiver la création rapide d'événements ([#6391](https://github.com/nocobase/nocobase/pull/6391)) par @Cyx649312038

#### 🐛 Corrections de bugs

- **[client]**

  - Le bouton ajouter un enfant ne s'affiche pas en mode icône uniquement ([#6504](https://github.com/nocobase/nocobase/pull/6504)) par @katherinehhh
  - Le champ de règle de liaison masqué par défaut avec valeur conservée ne fonctionne pas ([#6503](https://github.com/nocobase/nocobase/pull/6503)) par @katherinehhh
- **[Bloc : Panneau d'actions]** Problème de mise en page dans le panneau d'actions mobile après avoir masqué les boutons en raison du contrôle des autorisations ([#6502](https://github.com/nocobase/nocobase/pull/6502)) par @katherinehhh
- **[Client WEB]** Le chemin dans le tableau de gestion des routes est différent du chemin réel ([#6483](https://github.com/nocobase/nocobase/pull/6483)) par @zhangzhonghe

### [v1.7.0-beta.8](https://www.nocobase.com/en/blog/v1.7.0-beta.8)

*Date de sortie : 2025-03-23*

#### 🎉 Nouvelles fonctionnalités

- **[client]** Prise en charge des paramètres de style de champ pour la taille de police, le poids de police et le style de police ([#6489](https://github.com/nocobase/nocobase/pull/6489)) par @katherinehhh
- **[Variables et secrets]** Prise en charge des variables d'environnement dans l'URL du bouton de lien ([#6494](https://github.com/nocobase/nocobase/pull/6494)) par @katherinehhh

#### 🚀 Améliorations

- **[client]** Prise en charge de la correspondance floue pour les champs sélectionnés dans le bouton de filtre ([#6496](https://github.com/nocobase/nocobase/pull/6496)) par @katherinehhh
- **[Workflow : nœud de messagerie]** Ajout de la description de la configuration du champ sécurisé. ([#6510](https://github.com/nocobase/nocobase/pull/6510)) par @sheldon66
- **[Client WEB]** Ajout d'une invite de confirmation secondaire pour le vidage du cache ([#6505](https://github.com/nocobase/nocobase/pull/6505)) par @katherinehhh
- **[Notification : Email]** Ajout de la description de la configuration du champ sécurisé. ([#6501](https://github.com/nocobase/nocobase/pull/6501)) par @sheldon66
- **[Gestionnaire d'emails]** Prise en charge de la réautorisation et de la sélection automatique du compte lors de l'envoi d'un email par @jiannx

#### 🐛 Corrections de bugs

- **[serveur]** La commande de mise à niveau peut provoquer des erreurs de workflow ([#6524](https://github.com/nocobase/nocobase/pull/6524)) par @gchust
- **[client]**

  - La hauteur du sous-tableau dans le formulaire est définie avec la hauteur du formulaire ([#6518](https://github.com/nocobase/nocobase/pull/6518)) par @katherinehhh
  - Erreur de soumission du champ heure dans les paramètres régionaux chinois (syntaxe d'entrée invalide pour le type time) ([#6511](https://github.com/nocobase/nocobase/pull/6511)) par @katherinehhh
  - Transparence du bouton d'action provoquant un problème d'affichage des paramètres au survol ([#6529](https://github.com/nocobase/nocobase/pull/6529)) par @katherinehhh
- **[Authentification]**

  - Nettoyage des options de l'authentificateur ([#6527](https://github.com/nocobase/nocobase/pull/6527)) par @2013xile
  - X-Authenticator manquant ([#6526](https://github.com/nocobase/nocobase/pull/6526)) par @chenos
- **[Bloc : Carte]**

  - Problème de gestion des clés du bloc carte entraînant des échecs de requête dus à des caractères invisibles ([#6521](https://github.com/nocobase/nocobase/pull/6521)) par @katherinehhh
  - Les champs de clé secrète ne déclenchent pas la validation dans la gestion des cartes ([#6509](https://github.com/nocobase/nocobase/pull/6509)) par @katherinehhh
- **[Gestionnaire de fichiers]** Impossible d'accéder aux fichiers stockés dans COS ([#6512](https://github.com/nocobase/nocobase/pull/6512)) par @chenos
- **[Action : Exporter les enregistrements Pro]** Impossible d'exporter les pièces jointes par @chenos
- **[Gestionnaire de sauvegarde]** La restauration peut provoquer des erreurs d'exécution du workflow par @gchust
- **[WeCom]** Résolution des variables d'environnement et des secrets lors de la récupération de la configuration de notification. par @2013xile
- **[Workflow : Approbation]**

  - Correction d'une erreur de tableau de processus lorsque le travail est supprimé par @mytharcher
  - Correction d'une erreur levée lors de l'ajout du résultat d'un nœud de requête par @mytharcher
  - Correction d'un crash causé par un utilisateur nul par @mytharcher

### [v1.7.0-beta.9](https://www.nocobase.com/en/blog/v1.7.0-beta.9)

*Date de sortie : 2025-03-25*

#### 🎉 Nouvelles fonctionnalités

- **[acl]** Prise en charge de l'union des rôles utilisateur ([#6301](https://github.com/nocobase/nocobase/pull/6301)) par @aaaaaajie
- **[client]**

  - Prise en charge de l'extension des champs prédéfinis dans les collections ([#6183](https://github.com/nocobase/nocobase/pull/6183)) par @katherinehhh
  - Prise en charge de l'extension des opérateurs de filtre frontend ([#6085](https://github.com/nocobase/nocobase/pull/6085)) par @katherinehhh
- **[Vérification]** Prise en charge de la liaison par l'utilisateur de divers types de vérification, tels que les authentificateurs SMS et TOTP, et la vérification d'identité dans les scénarios requis. Permet le développement et l'extension des méthodes de vérification. ([#6026](https://github.com/nocobase/nocobase/pull/6026)) par @2013xile
  Référence : [Vérification](https://docs.nocobase.com/handbook/verification)
- **[Calendrier]** Prise en charge de l'extension des champs optionnels pour les plugins Kanban, Calendrier et Champ de formule ([#6076](https://github.com/nocobase/nocobase/pull/6076)) par @katherinehhh
- **[Bloc : modèle]** Ajout du plugin `Bloc : modèle`, fournissant un support de modèle pour les blocs basé sur un mécanisme d'héritage. ([#5920](https://github.com/nocobase/nocobase/pull/5920)) par @gchust
- **[plugin-demo-platform]** Définition de skipAuthCheck de la route "/new" sur true. par @sheldon66
- **[Authentification à deux facteurs (2FA)]** Nouveaux plugins : Authentification à deux facteurs et Vérification : Authentificateur TOTP par @2013xile
  Référence : [Authentification à deux facteurs (2FA)](https://docs.nocobase.com/handbook/two-factor-authentication)<br />[Vérification : Authentificateur TOTP](https://docs.nocobase.com/handbook/verification-totp-authenticator)

#### 🚀 Améliorations

- **[client]**

  - Ajout de skipAuthCheck à router.add pour empêcher la redirection vers la page de connexion sur les pages publiques. ([#6453](https://github.com/nocobase/nocobase/pull/6453)) par @sheldon66
  - Mise à niveau des dépendances liées à ant design vers la version 5.24.2 ([#6343](https://github.com/nocobase/nocobase/pull/6343)) par @gchust
- **[utils]** Adaptation de la page de bureau pour les appareils mobiles ([#6393](https://github.com/nocobase/nocobase/pull/6393)) par @zhangzhonghe
- **[Formulaires publics]** Définition du titre de la page du formulaire public sur le titre configuré lors de la création ([#6538](https://github.com/nocobase/nocobase/pull/6538)) par @katherinehhh
- **[Gestionnaire de fichiers]**

  - Ajout de code backend pour générer l'URL de prévisualisation du fichier ([#6223](https://github.com/nocobase/nocobase/pull/6223)) par @jiannx
  - Modification de l'API de type de stockage et ajout de l'API plugin ([#6246](https://github.com/nocobase/nocobase/pull/6246)) par @mytharcher
- **[Bloc : modèle]** Prise en charge de l'enregistrement d'un bloc de données en tant que modèle de bloc à partir de la page ([#6348](https://github.com/nocobase/nocobase/pull/6348)) par @gchust
- **[Workflow]** Déplacement des paramètres de liaison du workflow vers le plugin ([#6143](https://github.com/nocobase/nocobase/pull/6143)) par @mytharcher

#### 🐛 Corrections de bugs

- **[client]**

  - Problème de glisser-déposer du bouton de ligne de tableau ([#6544](https://github.com/nocobase/nocobase/pull/6544)) par @katherinehhh
  - Impossible d'utiliser la variable 'Utilisateur actuel' lors de l'ajout d'une page de lien ([#6536](https://github.com/nocobase/nocobase/pull/6536)) par @zhangzhonghe
  - La liaison de plage de données du champ relationnel n'est pas effective ([#6530](https://github.com/nocobase/nocobase/pull/6530)) par @zhangzhonghe
  - Suppression de l'option 'Autoriser la sélection multiple' des champs de sélection unique déroulants dans les formulaires de filtre ([#6515](https://github.com/nocobase/nocobase/pull/6515)) par @zhangzhonghe
  - Erreur de commande `yarn doc` ([#6540](https://github.com/nocobase/nocobase/pull/6540)) par @gchust
  - Champs manquants dans la configuration des règles de liaison ([#6488](https://github.com/nocobase/nocobase/pull/6488)) par @katherinehhh
  - Le contenu n'est pas entièrement affiché dans les navigateurs mobiles ([#6446](https://github.com/nocobase/nocobase/pull/6446)) par @zhangzhonghe
  - Lors de l'utilisation de l'opérateur '$anyOf', la règle de liaison est invalide ([#6400](https://github.com/nocobase/nocobase/pull/6400)) par @zhangzhonghe
  - Formatage incorrect du champ heure dans le formulaire de filtre ([#6374](https://github.com/nocobase/nocobase/pull/6374)) par @katherinehhh
  - Style de saisie incorrect pour le réglage de la valeur par défaut du formulaire ([#6490](https://github.com/nocobase/nocobase/pull/6490)) par @gchust
- **[utils]** Bug connu 'responsive de bureau' ([#6476](https://github.com/nocobase/nocobase/pull/6476)) par @zhangzhonghe
- **[acl]** Correction du problème où les champs de relation ne sont pas affichés sous l'union des rôles. ([#6456](https://github.com/nocobase/nocobase/pull/6456)) par @aaaaaajie
- **[Collection : Arborescence]** Problème de migration pour plugin-collection-tree ([#6537](https://github.com/nocobase/nocobase/pull/6537)) par @2013xile
- **[Action : Requête personnalisée]** Impossible de télécharger les fichiers encodés en UTF-8 ([#6541](https://github.com/nocobase/nocobase/pull/6541)) par @2013xile
- **[Variables et secrets]** Les boutons ne s'affichent pas dans le tiroir de création de nouvelles variables ([#6485](https://github.com/nocobase/nocobase/pull/6485)) par @gchust
- **[Client WEB]** Remplacement de toutes les instances de ctx.state.currentRole (rôle unique) par ctx.state.currentRoles (prend en charge plusieurs rôles). ([#6427](https://github.com/nocobase/nocobase/pull/6427)) par @aaaaaajie
- **[Contrôle d'accès]**

  - Erreur lorsque la portée des données est définie sur ses propres données et que la table manque d'un champ créateur. ([#6428](https://github.com/nocobase/nocobase/pull/6428)) par @aaaaaajie
  - Correction du changement de rôles qui ne prenait pas effet. ([#6454](https://github.com/nocobase/nocobase/pull/6454)) par @aaaaaajie
- **[Bloc : modèle]**

  - L'option Enregistrer comme modèle ne s'affiche pas dans le bloc de données de la page ([#6398](https://github.com/nocobase/nocobase/pull/6398)) par @gchust
  - Comportement incorrect de Enregistrer comme modèle dans le client mobile ([#6420](https://github.com/nocobase/nocobase/pull/6420)) par @gchust
  - Nécessité de se connecter lors de l'accès à un formulaire public ([#6258](https://github.com/nocobase/nocobase/pull/6258)) par @gchust
- **[Auth : Clés API]** Suppression de l'union dans la liste des rôles du plugin de clés API ([#6432](https://github.com/nocobase/nocobase/pull/6432)) par @aaaaaajie
- **[Bloc : Formulaire multi-étapes]** Le bouton de soumission a la même couleur dans son état par défaut et en surbrillance par @jiannx
- **[Workflow : Approbation]** Problème de style avec la boîte de dialogue contextuelle 'Appliquer nouveau' par @zhangzhonghe

## develop

![develop.png](https://static-docs.nocobase.com/7fcdd9456a17286d8a439eee52bcb8d2.png)

### [v1.7.0-alpha.4](https://www.nocobase.com/en/blog/v1.7.0-alpha.4)

*Date de sortie : 2025-03-23*

#### 🎉 Nouvelles fonctionnalités

- **[client]**

  - Prise en charge des champs de texte long comme champs de titre pour les champs d'association ([#6495](https://github.com/nocobase/nocobase/pull/6495)) par @katherinehhh
  - Prise en charge des paramètres de style de champ pour la taille de police, le poids de police et le style de police ([#6489](https://github.com/nocobase/nocobase/pull/6489)) par @katherinehhh
- **[Variables et secrets]** Prise en charge des variables d'environnement dans l'URL du bouton de lien ([#6494](https://github.com/nocobase/nocobase/pull/6494)) par @katherinehhh
- **[Workflow : Nœud d'agrégation]** Prise en charge de la configuration de la précision pour le résultat d'agrégation ([#6491](https://github.com/nocobase/nocobase/pull/6491)) par @mytharcher

#### 🚀 Améliorations

- **[client]** Prise en charge de la correspondance floue pour les champs sélectionnés dans le bouton de filtre ([#6496](https://github.com/nocobase/nocobase/pull/6496)) par @katherinehhh
- **[Notification : Email]** Ajout de la description de la configuration du champ sécurisé. ([#6501](https://github.com/nocobase/nocobase/pull/6501)) par @sheldon66
- **[Workflow : nœud de messagerie]** Ajout de la description de la configuration du champ sécurisé. ([#6510](https://github.com/nocobase/nocobase/pull/6510)) par @sheldon66
- **[Calendrier]** Plugin Calendrier avec paramètres optionnels pour activer ou désactiver la création rapide d'événements ([#6391](https://github.com/nocobase/nocobase/pull/6391)) par @Cyx649312038
- **[Client WEB]** Ajout d'une invite de confirmation secondaire pour le vidage du cache ([#6505](https://github.com/nocobase/nocobase/pull/6505)) par @katherinehhh
- **[Gestionnaire d'emails]** Prise en charge de la réautorisation et de la sélection automatique du compte lors de l'envoi d'un email par @jiannx

#### 🐛 Corrections de bugs

- **[client]**

  - Transparence du bouton d'action provoquant un problème d'affichage des paramètres au survol ([#6529](https://github.com/nocobase/nocobase/pull/6529)) par @katherinehhh
  - Erreur de soumission du champ heure dans les paramètres régionaux chinois (syntaxe d'entrée invalide pour le type time) ([#6511](https://github.com/nocobase/nocobase/pull/6511)) par @katherinehhh
  - La hauteur du sous-tableau dans le formulaire est définie avec la hauteur du formulaire ([#6518](https://github.com/nocobase/nocobase/pull/6518)) par @katherinehhh
  - Le champ de règle de liaison masqué par défaut avec valeur conservée ne fonctionne pas ([#6503](https://github.com/nocobase/nocobase/pull/6503)) par @katherinehhh
  - Le bouton ajouter un enfant ne s'affiche pas en mode icône uniquement ([#6504](https://github.com/nocobase/nocobase/pull/6504)) par @katherinehhh
- **[serveur]** La commande de mise à niveau peut provoquer des erreurs de workflow ([#6524](https://github.com/nocobase/nocobase/pull/6524)) par @gchust
- **[utils]** Bug connu 'responsive de bureau' ([#6476](https://github.com/nocobase/nocobase/pull/6476)) par @zhangzhonghe
- **[évaluateurs]** Revenir à 9 décimales arrondies ([#6492](https://github.com/nocobase/nocobase/pull/6492)) par @mytharcher
- **[Authentification]**

  - Nettoyage des options de l'authentificateur ([#6527](https://github.com/nocobase/nocobase/pull/6527)) par @2013xile
  - X-Authenticator manquant ([#6526](https://github.com/nocobase/nocobase/pull/6526)) par @chenos
- **[Bloc : Carte]**

  - Problème de gestion des clés du bloc carte entraînant des échecs de requête dus à des caractères invisibles ([#6521](https://github.com/nocobase/nocobase/pull/6521)) par @katherinehhh
  - Les champs de clé secrète ne déclenchent pas la validation dans la gestion des cartes ([#6509](https://github.com/nocobase/nocobase/pull/6509)) par @katherinehhh
- **[Gestionnaire de fichiers]**

  - Impossible d'accéder aux fichiers stockés dans COS ([#6512](https://github.com/nocobase/nocobase/pull/6512)) par @chenos
  - Encodage de l'URL ([#6497](https://github.com/nocobase/nocobase/pull/6497)) par @chenos
- **[Client WEB]** Le chemin dans le tableau de gestion des routes est différent du chemin réel ([#6483](https://github.com/nocobase/nocobase/pull/6483)) par @zhangzhonghe
- **[Bloc : Panneau d'actions]** Problème de mise en page dans le panneau d'actions mobile après avoir masqué les boutons en raison du contrôle des autorisations ([#6502](https://github.com/nocobase/nocobase/pull/6502)) par @katherinehhh
- **[Source de données : Principale]** Impossible de créer une vue MySQL. ([#6477](https://github.com/nocobase/nocobase/pull/6477)) par @aaaaaajie
- **[Workflow]** Correction du comptage des tâches héritées après la suppression du workflow ([#6493](https://github.com/nocobase/nocobase/pull/6493)) par @mytharcher
- **[Action : Exporter les enregistrements Pro]** Impossible d'exporter les pièces jointes par @chenos
- **[Gestionnaire de sauvegarde]**

  - Les fichiers téléchargés n'ont pas été restaurés lors de la création d'une sous-application à partir d'un modèle de sauvegarde par @gchust
  - La restauration peut provoquer des erreurs d'exécution du workflow par @gchust
  - Échec de la restauration de la base de données MySQL causé par un chevauchement d'ensembles GTID par @gchust
- **[WeCom]** Résolution des variables d'environnement et des secrets lors de la récupération de la configuration de notification. par @2013xile
- **[Workflow : Approbation]**

  - Correction d'une erreur de tableau de processus lorsque le travail est supprimé par @mytharcher
  - Modification du retour de l'approbation en tant que tâche par @mytharcher
  - Correction d'une erreur levée lors de l'ajout du résultat d'un nœud de requête par @mytharcher
  - Correction d'un bouton d'action manquant dans le tableau de processus par @mytharcher
  - Problème de style avec la boîte de dialogue contextuelle 'Appliquer nouveau' par @zhangzhonghe

## À propos de NocoBase

NocoBase est une plateforme no-code privée et open source offrant un contrôle total et une évolutivité infinie. Elle permet aux équipes de s'adapter rapidement aux changements tout en réduisant considérablement les coûts. Évitez des années de développement et des investissements substantiels en déployant NocoBase en quelques minutes.

<iframe src="https://cdn.embedly.com/widgets/media.html?src=https%3A%2F%2Fwww.youtube.com%2Fembed%2FhOM2MyzHn9I&display_name=YouTube&url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DhOM2MyzHn9I&image=http%3A%2F%2Fi.ytimg.com%2Fvi%2FhOM2MyzHn9I%2Fhqdefault.jpg&key=a19fcc184b9711e1b4764040d3dc5c07&type=text%2Fhtml&schema=youtube" allowfullscreen="" frameborder="0" height="480" width="854" title="" class="dc n pc cp bh" scrolling="no"></iframe>

Découvrez NocoBase en 3 minutes !

## 👇 Obtenir NocoBase

[**Page d'accueil**](https://www.nocobase.com/)

[**Démo**](https://demo.nocobase.com/new)

[**Documentation**](https://docs.nocobase.com/)

[**GitHub**](https://github.com/nocobase/nocobase)
