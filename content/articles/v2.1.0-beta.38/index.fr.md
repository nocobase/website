---
title: "NocoBase v2.1.0-beta.38 : Ajout de gardes de compatibilité pour les commandes API dynamiques"
description: "Notes de version de v2.1.0-beta.38"
---

### 🎉 Nouvelles fonctionnalités

- **[cli]** Ajout de gardes de compatibilité pour l'API de commande dynamique ([#9613](https://github.com/nocobase/nocobase/pull/9613)) par @chenos
- **[client-v2]**

  - Prise en charge des pages v2 intégrées et des pages de formulaire public v2 ([#9431](https://github.com/nocobase/nocobase/pull/9431)) par @zhangzhonghe
  - Réécriture de la page du gestionnaire de plugins client-v2 en une interface utilisateur responsive basée sur des cartes avec filtre par catégorie, recherche, activation/désactivation/suppression, activation en masse et une fenêtre modale de détail du plugin ; la page du gestionnaire de plugins client-v1 est également rendue responsive sur les écrans étroits. ([#9573](https://github.com/nocobase/nocobase/pull/9573)) par @Molunerfinn
- **[Workflow]**

  - Ajout du contrôle de délai d'attente pour les workflows, prise en charge de l'arrêt automatique des exécutions ayant dépassé le délai si l'option de délai est définie ([#9363](https://github.com/nocobase/nocobase/pull/9363)) par @mytharcher
  - Ajout d'une API administrateur pour relancer les exécutions de workflow démarrées depuis le début ou un nœud spécifié. ([#9569](https://github.com/nocobase/nocobase/pull/9569)) par @mytharcher
- **[Bloc : Gantt]** Ajout de la prise en charge v2 pour le bloc Gantt. ([#9545](https://github.com/nocobase/nocobase/pull/9545)) par @jiannx
- **[Workflow : Webhook]** Ajout du statut de réponse 408 pour les workflows webhook ayant expiré (mode synchrone) par @mytharcher
- **[Workflow : Sous-flux]** Prise en charge du paramètre de délai d'attente dans le workflow par @mytharcher
- **[Auth : OIDC]** Migration de `plugin-auth-oidc` vers l'administration v2 ; le bouton de connexion, le formulaire des paramètres d'administration et la redirection automatique SSO fonctionnent désormais sous v2. par @Molunerfinn
- **[Workflow : Approbation]** Prise en charge du paramètre de délai d'attente dans le workflow par @mytharcher
- **[Auth : LDAP]** Ajout d'une entrée client v2 pour que l'authentificateur LDAP affiche son formulaire de connexion et ses paramètres d'administration sur les applications v2. par @Molunerfinn

### 🚀 Améliorations

- **[client-v2]**

  - ajout du paramètre de sélection de ligne de tableau v2 ([#9614](https://github.com/nocobase/nocobase/pull/9614)) par @katherinehhh
  - prise en charge des couleurs des actions du panneau d'actions ([#9612](https://github.com/nocobase/nocobase/pull/9612)) par @katherinehhh
  - Suppression de l'option Masqué de la configuration du menu ([#9596](https://github.com/nocobase/nocobase/pull/9596)) par @zhangzhonghe
- **[client]** Suppression de l'option Masqué des paramètres des éléments de menu ([#9595](https://github.com/nocobase/nocobase/pull/9595)) par @zhangzhonghe
- **[cli]** Rationalisation du flux de mise à niveau de l'application ([#9587](https://github.com/nocobase/nocobase/pull/9587)) par @chenos
- **[Employés IA]** Amélioration du champ URL de base LLM afin qu'il puisse utiliser des variables de portée globale dans les formulaires de création et d'édition. ([#9615](https://github.com/nocobase/nocobase/pull/9615)) par @cgyrock
- **[Restriction IP]** Ajout d'un client v2 pour le plugin de restriction IP. par @Molunerfinn

### 🐛 Corrections de bugs

- **[moteur de flux]**

  - Correction du niveau de journalisation incorrect du frontend. ([#9577](https://github.com/nocobase/nocobase/pull/9577)) par @gchust
  - Correction des menus en cascade instables lors de la saisie dans les champs de recherche ([#9473](https://github.com/nocobase/nocobase/pull/9473)) par @zhangzhonghe
  - Correction d'un problème où les règles de liaison des actions de tableau s'exécutaient incorrectement après la soumission réussie d'un formulaire dans une fenêtre contextuelle. ([#9445](https://github.com/nocobase/nocobase/pull/9445)) par @gchust
- **[ai]** Épinglage des dépendances LangChain à des versions stables pour éviter les échecs d'exécution des outils Ollama et les versions amont affectées ([#9604](https://github.com/nocobase/nocobase/pull/9604)) par @cgyrock
- **[client-v2]**

  - Correction du rendu des modèles de traduction bruts dans les onglets de connexion de la sous-application, et empêchement du tiroir d'édition de la méthode d'authentification v2 de perdre les valeurs des champs lors de la soumission. ([#9581](https://github.com/nocobase/nocobase/pull/9581)) par @Molunerfinn
  - Amélioration des performances de la page du gestionnaire de plugins en utilisant CSS line-clamp au lieu de l'ellipse antd Typography. ([#9593](https://github.com/nocobase/nocobase/pull/9593)) par @Molunerfinn
- **[client]**

  - correction du format de l'heure préservé pour les champs de temps v2 ([#9579](https://github.com/nocobase/nocobase/pull/9579)) par @katherinehhh
  - correction de l'état masqué synchronisé pour la liaison de sous-formulaire ([#9594](https://github.com/nocobase/nocobase/pull/9594)) par @katherinehhh
  - augmentation de la limite de téléchargement d'images pour l'entrée de scan ([#9580](https://github.com/nocobase/nocobase/pull/9580)) par @katherinehhh
  - correction de la valeur de la fenêtre contextuelle du sélecteur de date mobile synchronisée ([#9582](https://github.com/nocobase/nocobase/pull/9582)) par @katherinehhh
  - Correction de la disparition des onglets de page après le changement de menu ([#9583](https://github.com/nocobase/nocobase/pull/9583)) par @zhangzhonghe
  - correction du problème où le sous-tableau dans le sous-formulaire ne pouvait pas ajouter une deuxième ligne ([#9586](https://github.com/nocobase/nocobase/pull/9586)) par @katherinehhh
  - augmentation de la limite de téléchargement d'images pour l'entrée de scan ([#9580](https://github.com/nocobase/nocobase/pull/9580)) par @katherinehhh
  - correction de la valeur de la fenêtre contextuelle du sélecteur de date mobile synchronisée ([#9582](https://github.com/nocobase/nocobase/pull/9582)) par @katherinehhh
  - correction du problème où le sous-tableau dans le sous-formulaire ne pouvait pas ajouter une deuxième ligne ([#9586](https://github.com/nocobase/nocobase/pull/9586)) par @katherinehhh
  - correction du format de l'heure préservé pour les champs de temps v2 ([#9579](https://github.com/nocobase/nocobase/pull/9579)) par @katherinehhh
- **[Collection : Arbre]** Correction de l'erreur causée par des données parent-enfant circulaires dans les collections arborescentes ([#9603](https://github.com/nocobase/nocobase/pull/9603)) par @zhangzhonghe
- **[Workflow : Événement d'action personnalisée]**

  - Correction des boutons d'action personnalisée de tableau avec un contexte d'enregistrements multiples permettant incorrectement la sélection de workflows de contexte personnalisé. ([#9608](https://github.com/nocobase/nocobase/pull/9608)) par @mytharcher
  - Filtrage des options de liaison de workflow d'action personnalisée par la collection de blocs actuelle. ([#9610](https://github.com/nocobase/nocobase/pull/9610)) par @mytharcher
- **[Gestionnaire de fichiers]**

  - Amélioration des messages d'échec de prévisualisation PDF et documentation des exigences CORS pour le stockage externe. ([#9600](https://github.com/nocobase/nocobase/pull/9600)) par @mytharcher
    Référence : [Aperçu du fichier](docs/docs/fr/file-manager/file-preview/index.md)
  - Amélioration des messages d'échec de prévisualisation PDF et documentation des exigences CORS pour le stockage externe. ([#9600](https://github.com/nocobase/nocobase/pull/9600)) par @mytharcher
    Référence : [Aperçu du fichier](docs/docs/fr/file-manager/file-preview/index.md)
  - Correction de la normalisation des noms de fichiers Unicode lors du téléchargement de fichiers pour éviter la génération de clés d'objet avec des caractères de contrôle. ([#9584](https://github.com/nocobase/nocobase/pull/9584)) par @mytharcher
- **[IA : Base de connaissances]** Épinglage des dépendances LangChain à des versions stables pour éviter les échecs d'exécution des outils Ollama et les versions amont affectées par @cgyrock
- **[Impression de modèle]** Correction des erreurs de conversion PDF d'impression de modèle qui n'étaient pas correctement renvoyées au client par @jiannx
