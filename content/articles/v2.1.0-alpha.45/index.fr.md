---
title: "NocoBase v2.1.0-alpha.45 : Prise en charge de l'affectation de valeurs de champ dans les actions de soumission de formulaire"
description: "Notes de version de v2.1.0-alpha.45"
---

### 🎉 Nouvelles fonctionnalités

- **[client-v2]**

  - Prise en charge de l'affectation de valeurs de champ dans les actions de soumission de formulaire ([#9570](https://github.com/nocobase/nocobase/pull/9570)) par @katherinehhh
  - Prise en charge des pages v2 intégrées et des pages de formulaire public v2 ([#9431](https://github.com/nocobase/nocobase/pull/9431)) par @zhangzhonghe
  - Ajout d'un menu Sécurité et de la page de paramètres de politique de jeton dans l'administration v2 ; le centre utilisateur prend désormais en charge le changement de mot de passe. ([#9556](https://github.com/nocobase/nocobase/pull/9556)) par @Molunerfinn
  - Réécriture de la page de gestion des plugins client-v2 en une interface utilisateur réactive basée sur des cartes avec filtre par catégorie, recherche, activation/désactivation/suppression, activation en masse et une fenêtre modale de détails du plugin ; rend également la page de gestion des plugins client-v1 réactive sur les écrans étroits. ([#9573](https://github.com/nocobase/nocobase/pull/9573)) par @Molunerfinn
- **[cli]**

  - Ajout de gardes de compatibilité pour les commandes d'API dynamiques ([#9613](https://github.com/nocobase/nocobase/pull/9613)) par @chenos
  - Prise en charge de l'authentification de base ([#9558](https://github.com/nocobase/nocobase/pull/9558)) par @chenos
- **[Visionneuse de fichiers Office]** Migration du plugin de prévisualisation de fichiers Office vers le client v2 (FlowEngine). ([#9620](https://github.com/nocobase/nocobase/pull/9620)) par @Molunerfinn
- **[Workflow]**

  - Ajout d'un contrôle de délai d'attente pour les workflows, prise en charge de l'arrêt automatique de l'exécution en cas de dépassement du délai si l'option est définie ([#9363](https://github.com/nocobase/nocobase/pull/9363)) par @mytharcher
  - Ajout d'une API administrateur pour réexécuter les exécutions de workflow démarrées depuis le début ou un nœud spécifié. ([#9569](https://github.com/nocobase/nocobase/pull/9569)) par @mytharcher
- **[IdP : OAuth]** Ajout d'un support de base pour l'authentification unique (SSO) des applications dans les déploiements multi-applications ([#9547](https://github.com/nocobase/nocobase/pull/9547)) par @2013xile
- **[Bloc : Gantt]** Ajout du support v2 pour le bloc Gantt. ([#9545](https://github.com/nocobase/nocobase/pull/9545)) par @jiannx
- **[SSO d'application]** Ajout d'un plugin SSO d'application pour la connexion automatique entre les applications par @2013xile
- **[Politique de mot de passe]** Migration de plugin-password-policy vers l'interface d'administration client-v2 avec les pages de paramètres Politique de mot de passe / Utilisateurs verrouillés et l'application des règles côté client sur le formulaire de changement de mot de passe du centre utilisateur. par @Molunerfinn
- **[Workflow : Webhook]** Ajout du statut de réponse 408 pour les workflows webhook en timeout (mode synchrone) par @mytharcher
- **[Workflow : Sous-flux]** Prise en charge du paramètre de délai d'attente dans le workflow par @mytharcher
- **[Auth : OIDC]** Migration de `plugin-auth-oidc` vers l'administration v2 ; le bouton de connexion, le formulaire de paramètres d'administration et la redirection automatique SSO fonctionnent désormais sous v2. par @Molunerfinn
- **[Workflow : Approbation]** Prise en charge du paramètre de délai d'attente dans le workflow par @mytharcher
- **[Superviseur d'application]** Ajout des paramètres SSO d'application pour les sous-applications par @2013xile
- **[Auth : LDAP]** Ajout d'une entrée client v2 pour que l'authentificateur LDAP affiche son formulaire de connexion et ses paramètres d'administration sur les applications v2. par @Molunerfinn

### 🚀 Améliorations

- **[client-v2]**

  - ajout du paramètre de sélection de ligne de tableau v2 ([#9614](https://github.com/nocobase/nocobase/pull/9614)) par @katherinehhh
  - prise en charge des couleurs d'action du panneau d'actions ([#9612](https://github.com/nocobase/nocobase/pull/9612)) par @katherinehhh
  - Suppression de l'option Masqué de la configuration du menu ([#9596](https://github.com/nocobase/nocobase/pull/9596)) par @zhangzhonghe
- **[client]** Suppression de l'option Masqué des paramètres d'élément de menu ([#9595](https://github.com/nocobase/nocobase/pull/9595)) par @zhangzhonghe
- **[cli]** rationalisation du flux de mise à niveau de l'application ([#9587](https://github.com/nocobase/nocobase/pull/9587)) par @chenos
- **[Gestionnaire de notifications]** Migration des plugins liés aux notifications vers v2. ([#9597](https://github.com/nocobase/nocobase/pull/9597)) par @Molunerfinn
- **[Employés IA]** Amélioration du champ URL de base LLM afin qu'il puisse utiliser des variables de portée globale dans les formulaires de création et d'édition. ([#9615](https://github.com/nocobase/nocobase/pull/9615)) par @cgyrock
- **[Workflow]** Refonte des vérifications de disponibilité des nœuds asynchrones du workflow ([#9532](https://github.com/nocobase/nocobase/pull/9532)) par @mytharcher
- **[Visualisation de données]** Ajout du support client v2 pour les blocs de graphiques. ([#9517](https://github.com/nocobase/nocobase/pull/9517)) par @jiannx
- **[Restriction IP]** Ajout d'un client v2 pour le plugin de restriction IP. par @Molunerfinn

### 🐛 Corrections de bugs

- **[client]**

  - Correction de la largeur du badge dans la barre de navigation supérieure ([#9607](https://github.com/nocobase/nocobase/pull/9607)) par @zhangzhonghe
  - augmentation de la limite de téléchargement d'images pour l'entrée de scan ([#9580](https://github.com/nocobase/nocobase/pull/9580)) par @katherinehhh
  - Correction de la disparition des onglets de page après le changement de menu ([#9583](https://github.com/nocobase/nocobase/pull/9583)) par @zhangzhonghe
  - correction du problème où le sous-tableau dans le sous-formulaire ne pouvait pas ajouter une deuxième ligne ([#9586](https://github.com/nocobase/nocobase/pull/9586)) par @katherinehhh
  - correction de la conservation du format de l'heure pour les champs de temps v2 ([#9579](https://github.com/nocobase/nocobase/pull/9579)) par @katherinehhh
  - correction de la synchronisation de la valeur contextuelle du sélecteur de date mobile ([#9582](https://github.com/nocobase/nocobase/pull/9582)) par @katherinehhh
  - correction de la synchronisation de l'état masqué pour le lien de sous-formulaire ([#9594](https://github.com/nocobase/nocobase/pull/9594)) par @katherinehhh
  - correction de la conservation du format de l'heure pour les champs de temps v2 ([#9579](https://github.com/nocobase/nocobase/pull/9579)) par @katherinehhh
  - correction du problème où le sous-tableau dans le sous-formulaire ne pouvait pas ajouter une deuxième ligne ([#9586](https://github.com/nocobase/nocobase/pull/9586)) par @katherinehhh
  - correction de la synchronisation de la valeur contextuelle du sélecteur de date mobile ([#9582](https://github.com/nocobase/nocobase/pull/9582)) par @katherinehhh
  - augmentation de la limite de téléchargement d'images pour l'entrée de scan ([#9580](https://github.com/nocobase/nocobase/pull/9580)) par @katherinehhh
- **[moteur de flux]**

  - Correction du niveau de journalisation incorrect du frontend. ([#9577](https://github.com/nocobase/nocobase/pull/9577)) par @gchust
  - Correction des menus en cascade instables lors de la saisie dans les zones de recherche ([#9473](https://github.com/nocobase/nocobase/pull/9473)) par @zhangzhonghe
  - Correction d'un problème où les règles de liaison d'action de tableau s'exécutaient incorrectement après la soumission réussie d'un formulaire dans une fenêtre contextuelle. ([#9445](https://github.com/nocobase/nocobase/pull/9445)) par @gchust
- **[ia]** Épinglage des dépendances LangChain à des versions stables pour éviter les échecs d'exécution des outils Ollama et éviter d'affecter les versions en amont ([#9604](https://github.com/nocobase/nocobase/pull/9604)) par @cgyrock
- **[client-v2]**

  - Correction du rendu des modèles de traduction bruts dans les onglets de connexion de la sous-application, et empêchement du tiroir d'édition de la méthode d'authentification v2 de perdre les valeurs de champ lors de la soumission. ([#9581](https://github.com/nocobase/nocobase/pull/9581)) par @Molunerfinn
  - Amélioration des performances de la page de gestion des plugins en utilisant CSS line-clamp au lieu de l'ellipse antd Typography. ([#9593](https://github.com/nocobase/nocobase/pull/9593)) par @Molunerfinn
  - Correction des métadonnées de langue du navigateur afin que la page de l'application suive la langue de l'application sélectionnée au lieu d'être marquée comme anglais. ([#9564](https://github.com/nocobase/nocobase/pull/9564)) par @Molunerfinn
- **[build]**

  - Les ressources textuelles dans les builds serveur sont désormais copiées en tant que fichiers au lieu d'être converties en modules JavaScript. ([#9565](https://github.com/nocobase/nocobase/pull/9565)) par @Molunerfinn
  - Correction de la sortie d'obfuscation du serveur de plugin pour éviter les variables globales du navigateur dans les bundles d'exécution Node.js. ([#9559](https://github.com/nocobase/nocobase/pull/9559)) par @Molunerfinn
- **[Bloc : Gantt]** Correction du chemin du dossier partagé gantt v2 et ajout du rayage zébré. ([#9621](https://github.com/nocobase/nocobase/pull/9621)) par @jiannx
- **[Paramètres de licence]** Ajout du support client-v2 pour les paramètres de licence et l'injection de licence commerciale. ([#9555](https://github.com/nocobase/nocobase/pull/9555)) par @jiannx
- **[Workflow : Événement d'action personnalisée]**

  - Correction des options en double du menu Déclencher le workflow dans les menus d'action de bloc v2 ([#9622](https://github.com/nocobase/nocobase/pull/9622)) par @zhangzhonghe
  - Filtrage des options de liaison de workflow d'action personnalisée par la collection de blocs actuelle. ([#9610](https://github.com/nocobase/nocobase/pull/9610)) par @mytharcher
  - Correction des boutons d'action de tableau personnalisée avec un contexte de plusieurs enregistrements permettant incorrectement la sélection de workflows de contexte personnalisé. ([#9608](https://github.com/nocobase/nocobase/pull/9608)) par @mytharcher
- **[Collection : Arbre]** Correction de l'erreur causée par des données parent-enfant circulaires dans les collections arborescentes ([#9603](https://github.com/nocobase/nocobase/pull/9603)) par @zhangzhonghe
- **[Gestionnaire de fichiers]**

  - Amélioration des messages d'échec de prévisualisation PDF et documentation des exigences CORS pour le stockage externe. ([#9600](https://github.com/nocobase/nocobase/pull/9600)) par @mytharcher
    Référence : [Aperçu du fichier](docs/docs/fr/file-manager/file-preview/index.md)
  - Amélioration des messages d'échec de prévisualisation PDF et documentation des exigences CORS pour le stockage externe. ([#9600](https://github.com/nocobase/nocobase/pull/9600)) par @mytharcher
    Référence : [Aperçu du fichier](docs/docs/fr/file-manager/file-preview/index.md)
  - Rendu sécurisé des prévisualisations PDF avec PDF.js au lieu du rendu PDF brut basé sur iframe. ([#9566](https://github.com/nocobase/nocobase/pull/9566)) par @mytharcher
  - Correction de la normalisation des noms de fichiers Unicode lors du téléchargement de fichiers pour éviter de générer des clés d'objet avec des caractères de contrôle. ([#9584](https://github.com/nocobase/nocobase/pull/9584)) par @mytharcher
- **[Employés IA]**

  - Correction des boutons de raccourci IA obtenant un contexte de bloc vide après la suppression des blocs de tableau référencés. ([#9617](https://github.com/nocobase/nocobase/pull/9617)) par @cgyrock
  - correction de la description incorrecte du nom de l'outil dans l'invite de contexte de travail ([#9567](https://github.com/nocobase/nocobase/pull/9567)) par @cgyrock
- **[Workflow : Nœud manuel]** Correction des sauvegardes temporaires pour les tâches de workflow manuel ne persistant pas les valeurs de formulaire soumises. ([#9554](https://github.com/nocobase/nocobase/pull/9554)) par @mytharcher
- **[plugin-commercial]** Ajout des composants de licence commerciale client-v2 et de l'entrée d'état de licence dans la barre supérieure. par @jiannx
- **[IA : Base de connaissances]** Épinglage des dépendances LangChain à des versions stables pour éviter les échecs d'exécution des outils Ollama et éviter d'affecter les versions en amont par @cgyrock
- **[Gestionnaire de migration]** Correction des diffs de migration PostgreSQL afin que les colonnes héritées enfants ne soient pas supprimées lorsqu'une colonne locale devient héritée. par @hongboji
- **[Impression de modèle]** Correction des erreurs de conversion PDF d'impression de modèle qui n'étaient pas correctement renvoyées au client par @jiannx
- **[Auth : OIDC]** Correction de la fuite de jeton lorsque les rappels de connexion SSO reçoivent une URL de redirection externe par @2013xile
- **[Workflow : Approbation]**

  - Correction du problème où l'API `jobs:resume` n'est pas prise en charge par le nœud d'approbation par @mytharcher
  - Correction du retrait d'approbation pour mettre à jour les données métier soumises tout en respectant les autorisations de mise à jour de la collection source. par @mytharcher
  - Correction des tâches d'approbation obsolètes lorsque les workflows d'approbation sont terminés par des échecs de nœuds non liés à l'approbation. par @mytharcher
