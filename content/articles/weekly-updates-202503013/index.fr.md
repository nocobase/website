---
title: "Mises à jour hebdomadaires de NocoBase : Authentification à deux facteurs (2FA)"
description: "Les mises à jour de cette semaine incluent : compatibilité avec les paramètres de contrôle d'accès des boutons historiques, plugin d'intégration IA, et plus encore."
---

Résumez les journaux de mise à jour hebdomadaires du produit. Les dernières versions sont disponibles sur [notre blog](https://www.nocobase.com/en/blog/timeline).

**Cette semaine, nous avons publié [NocoBase 1.6.0](https://www.nocobase.com/en/blog/nocobase-1-6-0), qui apporte le déploiement en mode cluster, l'optimisation des politiques de sécurité, des optimisations du gestionnaire de migration et de nombreuses autres nouvelles fonctionnalités.**

**NocoBase est actuellement mis à jour avec trois branches : `main`, `next` et `develop`.**

![version.png](https://static-docs.nocobase.com/ba5f04e27e99c625cb3822da5df07860.png)

* `main` : La version la plus stable à ce jour, recommandée pour l'installation ;
* `next` : Version bêta, contient les nouvelles fonctionnalités à venir et a été testée de manière préliminaire. Il peut y avoir des problèmes connus ou inconnus. Elle est principalement destinée aux utilisateurs testeurs pour recueillir des commentaires et optimiser davantage les fonctions. Idéale pour les utilisateurs testeurs qui souhaitent découvrir les nouvelles fonctionnalités tôt et donner leur avis ;
* `develop` : Version alpha, contient le code de fonctionnalité le plus récent, peut être incomplète ou instable, principalement destinée au développement interne et à l'itération rapide. Adaptée aux utilisateurs techniques intéressés par les fonctionnalités de pointe du produit, mais avec des problèmes potentiels et des fonctions incomplètes. Ne pas utiliser en production.

## main

![main.png](https://static-docs.nocobase.com/47a3c71734c1d0f908b51f9ebd53c0ac.png)

### [v1.5.21](https://www.nocobase.com/en/blog/v1.5.21)

*Date de sortie : 2025-03-05*

#### 🚀 Améliorations

- **[Workflow]** Chargement paresseux du résultat du travail pour de meilleures performances ([#6344](https://github.com/nocobase/nocobase/pull/6344)) par @mytharcher
- **[Workflow : Nœud d'agrégation]** Ajout d'un processus d'arrondi pour les nombres agrégés basés sur le type double ([#6358](https://github.com/nocobase/nocobase/pull/6358)) par @mytharcher

#### 🐛 Corrections de bugs

- **[client]**

  - Les composants de sous-formulaire ne s'alignent pas avec le formulaire principal lorsque l'étiquette est masquée ([#6357](https://github.com/nocobase/nocobase/pull/6357)) par @katherinehhh
  - Le bloc d'association ne s'affiche pas dans la fenêtre contextuelle lors de l'héritage de collection ([#6303](https://github.com/nocobase/nocobase/pull/6303)) par @katherinehhh
  - Correction d'une erreur lors de la création d'une collection de fichiers ([#6363](https://github.com/nocobase/nocobase/pull/6363)) par @mytharcher
- **[Workflow]** Correction de l'ACL pour obtenir un travail ([#6352](https://github.com/nocobase/nocobase/pull/6352)) par @mytharcher

### [v1.5.22](https://www.nocobase.com/en/blog/v1.5.22)

*Date de sortie : 2025-03-06*

#### 🚀 Améliorations

- **[client]** Ajout d'un traitement anti-rebond aux boutons ([#6351](https://github.com/nocobase/nocobase/pull/6351)) par @Cyx649312038

#### 🐛 Corrections de bugs

- **[database]** Correction d'une erreur lors de la récupération des enregistrements de collection de relation si la clé source dans les champs de relation est une chaîne numérique ([#6360](https://github.com/nocobase/nocobase/pull/6360)) par @2013xile

### [v1.5.23](https://www.nocobase.com/en/blog/v1.5.23)

*Date de sortie : 2025-03-06*

#### 🐛 Corrections de bugs

- **[client]**
  - Problème lié au fuseau horaire entraînant une heure de moins dans le sélecteur de date ([#6359](https://github.com/nocobase/nocobase/pull/6359)) par @katherinehhh
  - Paramètre de tri manquant pour les champs de collection hérités ([#6372](https://github.com/nocobase/nocobase/pull/6372)) par @katherinehhh

### [v1.5.24](https://www.nocobase.com/en/blog/v1.5.24)

*Date de sortie : 2025-03-07*

#### 🎉 Nouvelles fonctionnalités

- **[Visualisation de données]** Prise en charge du tri NULLS dans les requêtes de graphiques ([#6383](https://github.com/nocobase/nocobase/pull/6383)) par @2013xile

#### 🚀 Améliorations

- **[Workflow]** Permettre de sauter le déclenchement du workflow de collection dans un événement de base de données ([#6379](https://github.com/nocobase/nocobase/pull/6379)) par @mytharcher

#### 🐛 Corrections de bugs

- **[Action : Importer des enregistrements Pro]** Utilisation d'une option supplémentaire pour déterminer s'il faut déclencher le workflow ou non par @mytharcher
- **[Action : Exporter des enregistrements Pro]** L'action d'exportation Pro manque les paramètres de tri par @katherinehhh

### [v1.5.25](https://www.nocobase.com/en/blog/v1.5.25)

*Date de sortie : 2025-03-09*

#### 🐛 Corrections de bugs

- **[serveur]** Cache du navigateur incorrect après l'exécution de la commande `yarn start` ([#6394](https://github.com/nocobase/nocobase/pull/6394)) par @gchust
- **[Workflow : Approbation]** Éviter que la configuration des mauvais assignés n'interroge tous les utilisateurs par @mytharcher
- **[WeCom]** Correction du lien d'invite de connexion et de l'erreur de connexion DingTalk par @chenzhizdt

### [v1.6.1](https://www.nocobase.com/en/blog/v1.6.1)

*Date de sortie : 2025-03-11*

#### 🐛 Corrections de bugs

- **[client]**

  - Lors de l'utilisation de l'opérateur '$anyOf', la règle de liaison est invalide ([#6415](https://github.com/nocobase/nocobase/pull/6415)) par @zhangzhonghe
  - Les données ne sont pas mises à jour dans les fenêtres contextuelles ouvertes via les boutons de lien ([#6411](https://github.com/nocobase/nocobase/pull/6411)) par @zhangzhonghe
  - Modifications de la valeur du champ à sélection multiple et perte d'option lors de la suppression d'enregistrements de sous-tableau ([#6405](https://github.com/nocobase/nocobase/pull/6405)) par @katherinehhh
- **[Notification : Message intégré]** Différencier la couleur d'arrière-plan de la liste des messages intégrés des cartes de message pour améliorer la hiérarchie visuelle et la lisibilité. ([#6417](https://github.com/nocobase/nocobase/pull/6417)) par @sheldon66

## next

![next.png](https://static-docs.nocobase.com/8ed17a0f08cc585018f6de6c8b13947d.png)

### [v1.6.0-beta.17](https://www.nocobase.com/en/blog/v1.6.0-beta.17)

*Date de sortie : 2025-03-07*

#### 🎉 Nouvelles fonctionnalités

- **[client]** Ajout de la configuration d'infobulle aux éléments de menu et aux en-têtes de tableau ([#6346](https://github.com/nocobase/nocobase/pull/6346)) par @Cyx649312038
- **[Visualisation de données]** Prise en charge du tri NULLS dans les requêtes de graphiques ([#6383](https://github.com/nocobase/nocobase/pull/6383)) par @2013xile
- **[Intégration IA]** Nouveau plugin : Intégration IA ([#6283](https://github.com/nocobase/nocobase/pull/6283)) par @2013xile
  Référence : [Intégration IA](https://docs.nocobase.com/handbook/ai/service)
- **[Intégration IA (EE)]** Nouveau plugin : Intégration IA (EE) par @2013xile
  Référence : [Intégration IA](https://docs.nocobase.com/handbook/ai/service)

#### 🚀 Améliorations

- **[client]**

  - Ajout d'un traitement anti-rebond aux boutons ([#6351](https://github.com/nocobase/nocobase/pull/6351)) par @Cyx649312038
  - Rendre le menu réactif à la largeur de l'écran ([#6331](https://github.com/nocobase/nocobase/pull/6331)) par @zhangzhonghe
- **[Workflow]** Permettre de sauter le déclenchement du workflow de collection dans un événement de base de données ([#6379](https://github.com/nocobase/nocobase/pull/6379)) par @mytharcher
- **[Workflow : Nœud d'agrégation]** Ajout d'un processus d'arrondi pour les nombres agrégés basés sur le type double ([#6358](https://github.com/nocobase/nocobase/pull/6358)) par @mytharcher
- **[Action : Importer des enregistrements Pro]** Prise en charge des options avancées dans le bouton d'importation Pro par @katherinehhh
- **[Workflow : JavaScript]** Prise en charge de l'importation de packages à partir d'un chemin absolu par @mytharcher
- **[Stockage de fichiers : S3(Pro)]** Essayer de recharger les stockages si le stockage n'est pas trouvé par @jiannx

#### 🐛 Corrections de bugs

- **[client]**

  - La traduction personnalisée du titre du menu est invalide ([#6377](https://github.com/nocobase/nocobase/pull/6377)) par @zhangzhonghe
  - Problème lié au fuseau horaire entraînant une heure de moins dans le sélecteur de date ([#6359](https://github.com/nocobase/nocobase/pull/6359)) par @katherinehhh
  - Paramètre de tri manquant pour les champs de collection hérités ([#6372](https://github.com/nocobase/nocobase/pull/6372)) par @katherinehhh
  - La liste déroulante des paramètres de stockage du champ de pièce jointe n'affiche pas les options ([#6365](https://github.com/nocobase/nocobase/pull/6365)) par @katherinehhh
  - Les composants de sous-formulaire ne s'alignent pas avec le formulaire principal lorsque l'étiquette est masquée ([#6357](https://github.com/nocobase/nocobase/pull/6357)) par @katherinehhh
  - Le bloc d'association ne s'affiche pas dans la fenêtre contextuelle lors de l'héritage de collection ([#6303](https://github.com/nocobase/nocobase/pull/6303)) par @katherinehhh
  - Résolution du problème de barre de défilement lors de l'ouverture d'un onglet de page avec un bloc de pleine hauteur ([#6347](https://github.com/nocobase/nocobase/pull/6347)) par @katherinehhh
  - Correction d'une erreur lors de la création d'une collection de fichiers ([#6363](https://github.com/nocobase/nocobase/pull/6363)) par @mytharcher
- **[database]** Correction d'une erreur lors de la récupération des enregistrements de collection de relation si la clé source dans les champs de relation est une chaîne numérique ([#6360](https://github.com/nocobase/nocobase/pull/6360)) par @2013xile
- **[Client WEB]**

  - L'ajout d'onglets de page dans le tableau de gestion des routes ne prend pas effet ([#6362](https://github.com/nocobase/nocobase/pull/6362)) par @zhangzhonghe
  - Après avoir ajouté une page au tableau des routes, la page apparaît vide ([#6366](https://github.com/nocobase/nocobase/pull/6366)) par @zhangzhonghe
- **[Utilisateurs]**

  - Erreur "Aucune permission" lorsque les utilisateurs sans permissions de gestion des utilisateurs consultent leur propre profil ([#6382](https://github.com/nocobase/nocobase/pull/6382)) par @2013xile
  - Erreur "Aucune permission" lors de la mise à jour des paramètres système dans la gestion des utilisateurs ([#6380](https://github.com/nocobase/nocobase/pull/6380)) par @2013xile
- **[Contrôle d'accès]** Dans le tableau de gestion des permissions, le nom de l'onglet de page est vide ([#6364](https://github.com/nocobase/nocobase/pull/6364)) par @zhangzhonghe
- **[Intégration IA]** Problème où le `baseURL` par défaut pour le fournisseur LLM est `undefined` ([#6367](https://github.com/nocobase/nocobase/pull/6367)) par @2013xile
- **[Workflow]** Correction de l'ACL pour obtenir un travail ([#6352](https://github.com/nocobase/nocobase/pull/6352)) par @mytharcher
- **[Workflow : Événement d'action personnalisée]** Correction des paramètres régionaux et de la collection modifiable après exécution par @mytharcher
- **[Action : Importer des enregistrements Pro]** Utilisation d'une option supplémentaire pour déterminer s'il faut déclencher le workflow ou non par @mytharcher
- **[Action : Exporter des enregistrements Pro]** L'action d'exportation Pro manque les paramètres de tri par @katherinehhh

### [v1.6.0-beta.18](https://www.nocobase.com/en/blog/v1.6.0-beta.18)

*Date de sortie : 2025-03-10*

#### 🚀 Améliorations

- **[Auth : Clés API]** Ajout d'un test de configuration de sécurité des jetons pour l'authentification par clé API. ([#6361](https://github.com/nocobase/nocobase/pull/6361)) par @sheldon66

#### 🐛 Corrections de bugs

- **[serveur]** Cache du navigateur incorrect après l'exécution de la commande `yarn start` ([#6394](https://github.com/nocobase/nocobase/pull/6394)) par @gchust
- **[auth]** Gestion d'un utilisateur inexistant avec une erreur 401 et mise à jour des messages de paramètres régionaux ([#6381](https://github.com/nocobase/nocobase/pull/6381)) par @sheldon66
- **[Client WEB]** La page est vide après avoir changé de rôle ([#6388](https://github.com/nocobase/nocobase/pull/6388)) par @aaaaaajie
- **[Éditeur de thème]** Le changement de thème échoue après plusieurs changements consécutifs ([#6387](https://github.com/nocobase/nocobase/pull/6387)) par @katherinehhh
- **[Workflow : Approbation]**

  - Correction du paramètre d'ordre lors de l'ajout d'un assigné par @mytharcher
  - Éviter que la configuration des mauvais assignés n'interroge tous les utilisateurs par @mytharcher
- **[WeCom]** Correction du lien d'invite de connexion et de l'erreur de connexion DingTalk par @chenzhizdt

### [v1.7.0-beta.1](https://www.nocobase.com/en/blog/v1.7.0-beta.1)

*Date de sortie : 2025-03-11*

#### 🎉 Nouvelles fonctionnalités

- **[client]** Compatible avec les paramètres historiques de contrôle d'accès aux boutons ([#6376](https://github.com/nocobase/nocobase/pull/6376)) par @katherinehhh
- **[Workflow : Événement post-action]** Prise en charge de l'utilisation du nœud de fin pour déterminer l'état ([#6399](https://github.com/nocobase/nocobase/pull/6399)) par @mytharcher
- **[Workflow : Message de réponse]** Prise en charge de l'utilisation dans le déclencheur d'action par @mytharcher

#### 🚀 Améliorations

- **[Workflow]** Correction de l'API 401 lorsque non connecté ([#6412](https://github.com/nocobase/nocobase/pull/6412)) par @mytharcher
- **[Workflow : Nœud manuel]** Ajustement de l'interface utilisateur du centre de tâches du workflow ([#6272](https://github.com/nocobase/nocobase/pull/6272)) par @mytharcher
- **[Gestionnaire d'e-mails]** Utilisation de la même structure et du même style d'élément dans le global pour le bouton de la barre d'outils par @mytharcher
- **[Workflow : Approbation]** Ajustement de l'interface utilisateur du centre de tâches par @mytharcher

#### 🐛 Corrections de bugs

- **[client]**

  - Impossible de déplacer la page dans un groupe ([#6413](https://github.com/nocobase/nocobase/pull/6413)) par @zhangzhonghe
  - Les menus de niveau profond n'affichent pas l'icône ([#6410](https://github.com/nocobase/nocobase/pull/6410)) par @zhangzhonghe
  - Problème de contexte de thème FormDrawer ([#6403](https://github.com/nocobase/nocobase/pull/6403)) par @katherinehhh
- **[Workflow : Nœud manuel]** Éviter les conflits sur la clé unique ([#6407](https://github.com/nocobase/nocobase/pull/6407)) par @mytharcher
- **[Gestionnaire de source de données]** Erreur lors de l'édition des champs dans une source de données externe ([#6402](https://github.com/nocobase/nocobase/pull/6402)) par @katherinehhh
- **[Authentification]** L'utilisateur sans rôle doit être redirigé vers une page de message d'erreur. ([#6408](https://github.com/nocobase/nocobase/pull/6408)) par @sheldon66
- **[Workflow : Événement d'action personnalisée]** Configuration de règle de liaison manquante pour le bouton 'Déclencher le workflow' par @katherinehhh
- **[Gestionnaire de sauvegarde]** Données de clé de chiffrement manquantes lors de la restauration de la sauvegarde par @gchust
- **[Workflow : Approbation]** Éviter les conflits sur la clé unique par @mytharcher

## develop

![develop.png](https://static-docs.nocobase.com/7fcdd9456a17286d8a439eee52bcb8d2.png)

### [v1.6.0-alpha.30](https://www.nocobase.com/en/blog/v1.6.0-alpha.30)

*Date de sortie : 2025-03-07*

#### 🎉 Nouvelles fonctionnalités

- **[client]**

  - Ajout de la configuration d'infobulle aux éléments de menu et aux en-têtes de tableau ([#6346](https://github.com/nocobase/nocobase/pull/6346)) par @Cyx649312038
  - Le champ heure prend en charge le format de l'heure ([#6329](https://github.com/nocobase/nocobase/pull/6329)) par @katherinehhh
- **[Visualisation de données]** Prise en charge du tri NULLS dans les requêtes de graphiques ([#6383](https://github.com/nocobase/nocobase/pull/6383)) par @2013xile
- **[Intégration IA]** Nouveau plugin : Intégration IA ([#6283](https://github.com/nocobase/nocobase/pull/6283)) par @2013xile
  Référence : [Intégration IA](https://docs.nocobase.com/handbook/ai/service)
- **[Vérification]** Prise en charge de la liaison par l'utilisateur de divers types de vérification, tels que les authentificateurs SMS et TOTP, et la vérification d'identité dans les scénarios requis. Permet le développement et l'extension des méthodes de vérification. ([#6026](https://github.com/nocobase/nocobase/pull/6026)) par @2013xile
  Référence : [Vérification](https://docs.nocobase.com/handbook/verification)
- **[Intégration IA (EE)]** Nouveau plugin : Intégration IA (EE) par @2013xile
  Référence : [Intégration IA](https://docs.nocobase.com/handbook/ai/service)
- **[Authentification à deux facteurs (2FA)]** Nouveaux plugins : Authentification à deux facteurs et Vérification : Authentificateur TOTP par @2013xile
  Référence : [Authentification à deux facteurs (2FA)](https://docs.nocobase.com/handbook/two-factor-authentication)<br />[Vérification : Authentificateur TOTP](https://docs.nocobase.com/handbook/verification-totp-authenticator)

#### 🚀 Améliorations

- **[client]**

  - Ajout d'un traitement anti-rebond aux boutons ([#6351](https://github.com/nocobase/nocobase/pull/6351)) par @Cyx649312038
  - Rendre le menu réactif à la largeur de l'écran ([#6331](https://github.com/nocobase/nocobase/pull/6331)) par @zhangzhonghe
- **[serveur]** Mise à niveau de koa vers 2.15.4 ; mise à niveau de @koa/cors vers 5.0.0 ([#6334](https://github.com/nocobase/nocobase/pull/6334)) par @2013xile
- **[Workflow]**

  - Permettre de sauter le déclenchement du workflow de collection dans un événement de base de données ([#6379](https://github.com/nocobase/nocobase/pull/6379)) par @mytharcher
  - Chargement paresseux du résultat du travail pour de meilleures performances ([#6344](https://github.com/nocobase/nocobase/pull/6344)) par @mytharcher
- **[Bloc : modèle]** Prise en charge de l'enregistrement d'un bloc de données en tant que modèle de bloc à partir d'une page ([#6348](https://github.com/nocobase/nocobase/pull/6348)) par @gchust
- **[Workflow : Nœud d'agrégation]** Ajout d'un processus d'arrondi pour les nombres agrégés basés sur le type double ([#6358](https://github.com/nocobase/nocobase/pull/6358)) par @mytharcher
- **[Action : Importer des enregistrements Pro]** Prise en charge des options avancées dans le bouton d'importation Pro par @katherinehhh
- **[Workflow : JavaScript]** Prise en charge de l'importation de packages à partir d'un chemin absolu par @mytharcher
- **[Stockage de fichiers : S3(Pro)]** Essayer de recharger les stockages si le stockage n'est pas trouvé par @jiannx

#### 🐛 Corrections de bugs

- **[client]**

  - La traduction personnalisée du titre du menu est invalide ([#6377](https://github.com/nocobase/nocobase/pull/6377)) par @zhangzhonghe
  - Paramètre de tri manquant pour les champs de collection hérités ([#6372](https://github.com/nocobase/nocobase/pull/6372)) par @katherinehhh
  - Formatage incorrect du champ heure dans le formulaire de filtre ([#6374](https://github.com/nocobase/nocobase/pull/6374)) par @katherinehhh
  - Problème lié au fuseau horaire entraînant une heure de moins dans le sélecteur de date ([#6359](https://github.com/nocobase/nocobase/pull/6359)) par @katherinehhh
  - La liste déroulante des paramètres de stockage du champ de pièce jointe n'affiche pas les options ([#6365](https://github.com/nocobase/nocobase/pull/6365)) par @katherinehhh
  - Les composants de sous-formulaire ne s'alignent pas avec le formulaire principal lorsque l'étiquette est masquée ([#6357](https://github.com/nocobase/nocobase/pull/6357)) par @katherinehhh
  - Correction d'une erreur lors de la création d'une collection de fichiers ([#6363](https://github.com/nocobase/nocobase/pull/6363)) par @mytharcher
  - Résolution du problème de barre de défilement lors de l'ouverture d'un onglet de page avec un bloc de pleine hauteur ([#6347](https://github.com/nocobase/nocobase/pull/6347)) par @katherinehhh
  - Les pages avec un favicon personnalisé affichent brièvement le favicon NocoBase pendant le chargement ([#6337](https://github.com/nocobase/nocobase/pull/6337)) par @zhangzhonghe
  - Le bloc d'association ne s'affiche pas dans la fenêtre contextuelle lors de l'héritage de collection ([#6303](https://github.com/nocobase/nocobase/pull/6303)) par @katherinehhh
  - Le bouton "ajouter nouveau" apparaît au survol en mode lecture seule du champ d'association ([#6322](https://github.com/nocobase/nocobase/pull/6322)) par @katherinehhh
- **[auth]** Éviter le renouvellement du jeton lors de l'autorisation WebSocket. ([#6342](https://github.com/nocobase/nocobase/pull/6342)) par @sheldon66
- **[database]** Correction d'une erreur lors de la récupération des enregistrements de collection de relation si la clé source dans les champs de relation est une chaîne numérique ([#6360](https://github.com/nocobase/nocobase/pull/6360)) par @2013xile
- **[Client WEB]**

  - Après avoir ajouté une page au tableau des routes, la page apparaît vide ([#6366](https://github.com/nocobase/nocobase/pull/6366)) par @zhangzhonghe
  - L'ajout d'onglets de page dans le tableau de gestion des routes ne prend pas effet ([#6362](https://github.com/nocobase/nocobase/pull/6362)) par @zhangzhonghe
- **[Contrôle d'accès]** Dans le tableau de gestion des permissions, le nom de l'onglet de page est vide ([#6364](https://github.com/nocobase/nocobase/pull/6364)) par @zhangzhonghe
- **[Utilisateurs]**

  - Erreur "Aucune permission" lorsque les utilisateurs sans permissions de gestion des utilisateurs consultent leur propre profil ([#6382](https://github.com/nocobase/nocobase/pull/6382)) par @2013xile
  - Erreur "Aucune permission" lors de la mise à jour des paramètres système dans la gestion des utilisateurs ([#6380](https://github.com/nocobase/nocobase/pull/6380)) par @2013xile
  - Une interface utilisateur d'erreur clignote brièvement lors du premier chargement du tableau de gestion des permissions utilisateur ([#6324](https://github.com/nocobase/nocobase/pull/6324)) par @zhangzhonghe
- **[Intégration IA]** Problème où le `baseURL` par défaut pour le fournisseur LLM est `undefined` ([#6367](https://github.com/nocobase/nocobase/pull/6367)) par @2013xile
- **[Workflow]** Correction de l'ACL pour obtenir un travail ([#6352](https://github.com/nocobase/nocobase/pull/6352)) par @mytharcher
- **[Bloc : Carte]** Les paramètres de configuration du champ de carte sont manquants/non visibles ([#6336](https://github.com/nocobase/nocobase/pull/6336)) par @zhangzhonghe
- **[Mobile]** Erreur de page : Impossible de lire les propriétés de null (lecture de 'match') ([#6335](https://github.com/nocobase/nocobase/pull/6335)) par @zhangzhonghe
- **[Bloc : Panneau d'action]** Le réglage de la hauteur du panneau d'action est invalide ([#6321](https://github.com/nocobase/nocobase/pull/6321)) par @zhangzhonghe
- **[Workflow : Événement d'action personnalisée]**

  - Correction des paramètres régionaux et de la collection modifiable après exécution par @mytharcher
  - Correction de la migration pour les boutons hérités liés à un workflow d'action personnalisée par @mytharcher
- **[Marque personnalisée]** Les pages avec un favicon personnalisé affichent brièvement le favicon NocoBase pendant le chargement par @zhangzhonghe
- **[Action : Importer des enregistrements Pro]**

  - Utilisation d'une option supplémentaire pour déterminer s'il faut déclencher le workflow ou non par @mytharcher
  - Le bouton d'importation du bloc d'association pour la détection des enregistrements en double n'affiche aucune donnée dans la liste déroulante des champs par @katherinehhh
- **[Action : Exporter des enregistrements Pro]**

  - L'action d'exportation Pro manque les paramètres de tri par @katherinehhh
  - Suppression de l'option 'ajouter un bloc' dans les paramètres du bouton d'exportation de pièce jointe par @katherinehhh
- **[Impression de modèle]** La restauration à partir du local a échoué lorsque les plugins d'impression de modèle d'action et de gestionnaire de sauvegarde étaient tous deux activés par @gchust
- **[Workflow : Approbation]**

  - Correction de la migration pour les blocs hérités par @mytharcher
  - Correction de l'erreur causée par `.toJSON()` par @mytharcher

### [v1.6.0-alpha.31](https://www.nocobase.com/en/blog/v1.6.0-alpha.3)

*Date de sortie : 2025-03-11*

#### 🎉 Nouvelles fonctionnalités

- **[client]** Compatible avec les paramètres historiques de contrôle d'accès aux boutons ([#6376](https://github.com/nocobase/nocobase/pull/6376)) par @katherinehhh
- **[Workflow : Message de réponse]** Prise en charge de l'utilisation dans le déclencheur d'action par @mytharcher

#### 🚀 Améliorations

- **[Auth : Clés API]** Ajout d'un test de configuration de sécurité des jetons pour l'authentification par clé API. ([#6361](https://github.com/nocobase/nocobase/pull/6361)) par @sheldon66
- **[Workflow : Nœud manuel]** Ajustement de l'interface utilisateur du centre de tâches du workflow ([#6272](https://github.com/nocobase/nocobase/pull/6272)) par @mytharcher

#### 🐛 Corrections de bugs

- **[serveur]** Cache du navigateur incorrect après l'exécution de la commande `yarn start` ([#6394](https://github.com/nocobase/nocobase/pull/6394)) par @gchust
- **[client]**

  - Problème de contexte de thème FormDrawer ([#6403](https://github.com/nocobase/nocobase/pull/6403)) par @katherinehhh
  - Lors de l'utilisation de l'opérateur '$anyOf', la règle de liaison est invalide ([#6400](https://github.com/nocobase/nocobase/pull/6400)) par @zhangzhonghe
- **[auth]** Gestion d'un utilisateur inexistant avec une erreur 401 et mise à jour des messages de paramètres régionaux ([#6381](https://github.com/nocobase/nocobase/pull/6381)) par @sheldon66
- **[Bloc : modèle]** L'option "Enregistrer comme modèle" ne s'affiche pas dans le bloc de données de la page ([#6398](https://github.com/nocobase/nocobase/pull/6398)) par @gchust
- **[Workflow : Nœud manuel]** Éviter les conflits sur la clé unique ([#6407](https://github.com/nocobase/nocobase/pull/6407)) par @mytharcher
- **[Gestionnaire de source de données]** Erreur lors de l'édition des champs dans une source de données externe ([#6402](https://github.com/nocobase/nocobase/pull/6402)) par @katherinehhh
- **[Éditeur de thème]** Le changement de thème échoue après plusieurs changements consécutifs ([#6387](https://github.com/nocobase/nocobase/pull/6387)) par @katherinehhh
- **[Client WEB]** La page est vide après avoir changé de rôle ([#6388](https://github.com/nocobase/nocobase/pull/6388)) par @aaaaaajie
- **[Workflow : Approbation]**

  - Éviter que la configuration des mauvais assignés n'interroge tous les utilisateurs par @mytharcher
  - Correction du paramètre d'ordre lors de l'ajout d'un assigné par @mytharcher
- **[WeCom]** Correction du lien d'invite de connexion et de l'erreur de connexion DingTalk par @chenzhizdt

### [v1.7.0-alpha.1](https://www.nocobase.com/en/blog/v1.7.0-alpha.1)

*Date de sortie : 2025-03-11*

#### 🎉 Nouvelles fonctionnalités

- **[Workflow : Événement post-action]** Prise en charge de l'utilisation du nœud de fin pour déterminer l'état ([#6399](https://github.com/nocobase/nocobase/pull/6399)) par @mytharcher

#### 🚀 Améliorations

- **[Workflow]** Correction de l'API 401 lorsque non connecté ([#6412](https://github.com/nocobase/nocobase/pull/6412)) par @mytharcher
- **[Gestionnaire d'e-mails]** Utilisation de la même structure et du même style d'élément dans le global pour le bouton de la barre d'outils par @mytharcher
- **[Workflow : Approbation]** Ajustement de l'interface utilisateur du centre de tâches par @mytharcher

#### 🐛 Corrections de bugs

- **[client]**

  - Impossible de déplacer la page dans un groupe ([#6413](https://github.com/nocobase/nocobase/pull/6413)) par @zhangzhonghe
  - Les menus de niveau profond n'affichent pas l'icône ([#6410](https://github.com/nocobase/nocobase/pull/6410)) par @zhangzhonghe
- **[Authentification]** L'utilisateur sans rôle doit être redirigé vers une page de message d'erreur. ([#6408](https://github.com/nocobase/nocobase/pull/6408)) par @sheldon66
- **[Workflow : Événement d'action personnalisée]** Configuration de règle de liaison manquante pour le bouton 'Déclencher le workflow' par @katherinehhh
- **[Gestionnaire de sauvegarde]** Données de clé de chiffrement manquantes lors de la restauration de la sauvegarde par @gchust
- **[Workflow : Approbation]** Éviter les conflits sur la clé unique par @mytharcher

## À propos de NocoBase

NocoBase est une plateforme no-code privée et open source offrant un contrôle total et une évolutivité infinie. Elle permet aux équipes de s'adapter rapidement aux changements tout en réduisant considérablement les coûts. Évitez des années de développement et des investissements substantiels en déployant NocoBase en quelques minutes.

<iframe src="https://cdn.embedly.com/widgets/media.html?src=https%3A%2F%2Fwww.youtube.com%2Fembed%2FhOM2MyzHn9I&display_name=YouTube&url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DhOM2MyzHn9I&image=http%3A%2F%2Fi.ytimg.com%2Fvi%2FhOM2MyzHn9I%2Fhqdefault.jpg&key=a19fcc184b9711e1b4764040d3dc5c07&type=text%2Fhtml&schema=youtube" allowfullscreen="" frameborder="0" height="480" width="854" title="" class="dc n pc cp bh" scrolling="no"></iframe>

Découvrez NocoBase en 3 minutes !

## 👇 Obtenez NocoBase

[**Page d'accueil**](https://www.nocobase.com/)

[**Démo**](https://demo.nocobase.com/new)

[**Documentation**](https://docs.nocobase.com/)

[**GitHub**](https://github.com/nocobase/nocobase)
