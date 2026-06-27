---
title: "NocoBase v2.1.0 : Amélioration de l'application gérée et de la gestion des plugins dans la CLI"
description: "Notes de version de la v2.1.0"
---

### 🎉 Nouvelles fonctionnalités

- **[indéfini]**

  - Ajout de commandes proxy de premier niveau pour nginx et caddy ([#9721](https://github.com/nocobase/nocobase/pull/9721)) par @chenos
  - Amélioration de la gestion des applications managées et des plugins dans la CLI, incluant la gestion de l'environnement basée sur le chemin de l'application, l'import de plugins, la synchronisation des plugins sous licence et les mises à jour de documentation associées. ([#9655](https://github.com/nocobase/nocobase/pull/9655)) par @chenos
    Référence : [Documentation CLI](https://github.com/nocobase/nocobase/tree/feat/cli-app-path/docs/docs/en/api/cli), [Démarrage rapide](https://github.com/nocobase/nocobase/tree/feat/cli-app-path/docs/docs/en/quickstart)
  - Ajout d'un nouvel employé IA, Lina l'ingénieure en localisation, pour aider aux tâches de traduction de localisation ([#9434](https://github.com/nocobase/nocobase/pull/9434)) par @2013xile
    Référence : [Gestion de la localisation](https://docs.nocobase.com/system-management/localization)<br>[Lina : Ingénieure en localisation](https://docs.nocobase.com/ai-employees/built-in/lina)<br>[Utiliser Lina et le HY-MT1.5-1.8B local pour traduire les entrées de localisation](https://docs.nocobase.com/ai-employees/scenarios/localization-hy-mt)
  - Ajout de la documentation en indonésien et en vietnamien. ([#9303](https://github.com/nocobase/nocobase/pull/9303)) par @Molunerfinn
  - Ajout d'un workflow CI qui vérifie les `peerDependencies` `plugin-*` manquantes et exécute la construction, avec un rapport par commentaire PR. ([#9058](https://github.com/nocobase/nocobase/pull/9058)) par @Molunerfinn
- **[client-v2]**

  - Prise en charge de la saisie par scan pour les champs de texte ([#9599](https://github.com/nocobase/nocobase/pull/9599)) par @katherinehhh
  - Ajout de `TypedVariableInput` pour que les champs de port SMTP et de mode sécurisé du plugin email v2 puissent accepter soit une constante typée, soit une variable `{{ $env.X }}`. ([#9637](https://github.com/nocobase/nocobase/pull/9637)) par @Molunerfinn
  - Prise en charge de l'affectation de valeur de champ dans les actions de soumission de formulaire ([#9570](https://github.com/nocobase/nocobase/pull/9570)) par @katherinehhh
  - Prise en charge des pages v2 intégrées et des pages de formulaire public v2 ([#9431](https://github.com/nocobase/nocobase/pull/9431)) par @zhangzhonghe
  - Réécriture de la page du gestionnaire de plugins client-v2 en une interface utilisateur responsive basée sur des cartes avec filtre par catégorie, recherche, activation/désactivation/suppression, activation en masse et une fenêtre modale de détail du plugin ; rend également la page du gestionnaire de plugins client-v1 responsive sur les écrans étroits. ([#9573](https://github.com/nocobase/nocobase/pull/9573)) par @Molunerfinn
  - Ajout d'un menu Sécurité et de la page des paramètres de politique de jeton à l'administration v2 ; le centre utilisateur prend désormais en charge le changement de mot de passe. ([#9556](https://github.com/nocobase/nocobase/pull/9556)) par @Molunerfinn
- **[cli]**

  - Ajout de gardes de compatibilité pour les commandes API dynamiques ([#9613](https://github.com/nocobase/nocobase/pull/9613)) par @chenos
  - Prise en charge de l'authentification de base ([#9558](https://github.com/nocobase/nocobase/pull/9558)) par @chenos
  - Ajout de commandes de création et de restauration de sauvegarde ([#9541](https://github.com/nocobase/nocobase/pull/9541)) par @chenos
  - Ajout d'une commande de publication dans l'API ([#9308](https://github.com/nocobase/nocobase/pull/9308)) par @Andrew1989Y
  - Refonte de la CLI NocoBase ([#9122](https://github.com/nocobase/nocobase/pull/9122)) par @chenos
- **[client]**

  - Ajout de la prise en charge des règles de liaison pour les éléments de menu de page ([#9304](https://github.com/nocobase/nocobase/pull/9304)) par @zhangzhonghe
  - Ajout de variables JS au flux d'événements ([#8938](https://github.com/nocobase/nocobase/pull/8938)) par @jiannx
  - Ajout d'une action d'élément JS ([#8911](https://github.com/nocobase/nocobase/pull/8911)) par @jiannx
- **[moteur-de-flux]**

  - Migration de `plugin-environment-variables` vers client-v2 avec une page de paramètres basée sur React et une variable d'exécution `$env` enregistrée globalement ; ajout d'une entrée client-v2 à `plugin-file-manager` avec une page de configuration de stockage basée sur React et un champ de téléchargement, une action de téléchargement et un aperçu basés sur FlowModel. ([#9413](https://github.com/nocobase/nocobase/pull/9413)) par @Molunerfinn
  - Ajout de `getSubclassesOfAsync` à FlowEngine pour découvrir les classes de modèle enregistrées de manière asynchrone via le nouveau champ `extends` dans `registerModelLoaders`. ([#9065](https://github.com/nocobase/nocobase/pull/9065)) par @Molunerfinn
- **[serveur]** Les employés IA peuvent rechercher la documentation fournie avec des commandes Bash ([#9269](https://github.com/nocobase/nocobase/pull/9269)) par @2013xile
- **[cli-v1]** Résoudre le chemin de stockage à partir de l'env ([#9147](https://github.com/nocobase/nocobase/pull/9147)) par @chenos
- **[Gestionnaire de tâches asynchrones]** Ajout du support client v2 pour l'action de la barre supérieure du gestionnaire de tâches asynchrones. ([#9707](https://github.com/nocobase/nocobase/pull/9707)) par @jiannx
- **[Gestionnaire de sauvegarde]**

  - Ajout du support d'exécution client v2 pour le plugin de gestionnaire de sauvegarde. ([#9712](https://github.com/nocobase/nocobase/pull/9712)) par @katherinehhh
  - Adaptation au nouveau plugin de contrôle de version ([#9563](https://github.com/nocobase/nocobase/pull/9563)) par @cgyrock
- **[Bloc : Gantt]**

  - Ajout d'une option pour que les blocs Gantt se concentrent sur aujourd'hui par défaut lorsqu'ils sont ouverts ([#9692](https://github.com/nocobase/nocobase/pull/9692)) par @jiannx
  - Ajout du support v2 pour le bloc Gantt. ([#9545](https://github.com/nocobase/nocobase/pull/9545)) par @jiannx
- **[Contrôle d'accès]** Migration des pages de paramètres Utilisateurs et Rôles & Permissions vers v2. ([#9619](https://github.com/nocobase/nocobase/pull/9619)) par @jiannx
- **[Prévisualisation de fichiers Office]** Migration du plugin de prévisualisation de fichiers Office vers le client v2 (FlowEngine). ([#9620](https://github.com/nocobase/nocobase/pull/9620)) par @Molunerfinn
- **[Workflow]**

  - Ajout du contrôle de délai d'attente pour les workflows, prise en charge de l'abandon automatique de l'exécution en cas de dépassement du délai si l'option de délai d'attente est définie ([#9363](https://github.com/nocobase/nocobase/pull/9363)) par @mytharcher
  - Ajout des champs créé par et mis à jour par pour les workflows ([#9217](https://github.com/nocobase/nocobase/pull/9217)) par @mytharcher
  - Ajout d'une API pour vérifier la création de nœud ([#9207](https://github.com/nocobase/nocobase/pull/9207)) par @mytharcher
  - Ajout d'un champ de journal pour les jobs, afin d'afficher le contenu du journal de certains nœuds pour le débogage ([#9165](https://github.com/nocobase/nocobase/pull/9165)) par @mytharcher
- **[IdP : OAuth]**

  - Ajout du support de base pour l'authentification unique (SSO) des applications dans les déploiements multi-applications ([#9547](https://github.com/nocobase/nocobase/pull/9547)) par @2013xile
  - Ajout d'un nouveau plugin IdP : OAuth pour permettre aux services MCP de s'authentifier via OAuth ([#8896](https://github.com/nocobase/nocobase/pull/8896)) par @2013xile
- **[Éditeur de thème]** L'éditeur de thème est désormais disponible dans l'interface v2 ([#9530](https://github.com/nocobase/nocobase/pull/9530)) par @zhangzhonghe
- **[Bloc : Kanban]**

  - Ajout du support client-v2 pour le plugin Kanban ([#9475](https://github.com/nocobase/nocobase/pull/9475)) par @jiannx
  - Bloc kanban v2 ([#9142](https://github.com/nocobase/nocobase/pull/9142)) par @jiannx
- **[Bloc : Markdown]** Ajout du support client-v2 pour les blocs Markdown ([#9487](https://github.com/nocobase/nocobase/pull/9487)) par @jiannx
- **[Bloc : Liste]** Les blocs de liste prennent en charge client-v2 ([#9486](https://github.com/nocobase/nocobase/pull/9486)) par @jiannx
- **[Calendrier]**

  - Ajout du support client-v2 pour le plugin Calendrier. ([#9464](https://github.com/nocobase/nocobase/pull/9464)) par @jiannx
  - Bloc calendrier v2 ([#9092](https://github.com/nocobase/nocobase/pull/9092)) par @jiannx
- **[Bloc : Arbre]**

  - Ajout du support client-v2 pour le bloc de filtre arborescent. ([#9466](https://github.com/nocobase/nocobase/pull/9466)) par @jiannx
  - Ajout du bloc de filtre arborescent ([#9016](https://github.com/nocobase/nocobase/pull/9016)) par @jiannx
- **[Employés IA]**

  - Le nœud d'employé IA du workflow prend en charge le chargement de fichiers à partir de champs de pièce jointe. ([#9402](https://github.com/nocobase/nocobase/pull/9402)) par @cgyrock
  - Le workflow a ajouté une instruction pour l'employé IA ([#9025](https://github.com/nocobase/nocobase/pull/9025)) par @cgyrock
  - Ajout d'un outil de requête de données et d'un outil de rapport d'analyse commerciale pour les employés IA ([#9040](https://github.com/nocobase/nocobase/pull/9040)) par @2013xile
  - Ajout de la capacité d'invoquer des sous-agents pour les employés IA ([#8935](https://github.com/nocobase/nocobase/pull/8935)) par @cgyrock
  - Ajout de la capacité SKILLS aux employés IA. ([#8797](https://github.com/nocobase/nocobase/pull/8797)) par @cgyrock
- **[Visualisation de données]** Ajout du support client-v2 pour les plugins de blocs ([#9297](https://github.com/nocobase/nocobase/pull/9297)) par @zhangzhonghe
- **[Auth : Clés API]** Ajout des commandes `pm list` et `generate-api-key` ([#9076](https://github.com/nocobase/nocobase/pull/9076)) par @chenos
- **[IA : Serveur MCP]**

  - Fournit une API de requête de collection de données générique, appelable via MCP ([#8985](https://github.com/nocobase/nocobase/pull/8985)) par @2013xile
  - Ajout d'un nouveau plugin de serveur MCP pour permettre la construction de systèmes NocoBase et le support de workflows métier. ([#8824](https://github.com/nocobase/nocobase/pull/8824)) par @2013xile
- **[Gestionnaire de sources de données]** Prise en charge du chargement à la demande des outils MCP ([#8936](https://github.com/nocobase/nocobase/pull/8936)) par @2013xile
- **[Champ de collection : Code]** field-code prend en charge 2.0 ([#8804](https://github.com/nocobase/nocobase/pull/8804)) par @jiannx
- **[Source de données : NocoBase externe]** Ajout d'un plugin de source de données : NocoBase externe par @2013xile
- **[Multi-espace]** Ajout du support client-v2 pour le plugin multi-espace, incluant le changement d'espace et la gestion des espaces. par @jiannx
- **[SSO d'application]** Ajout d'un plugin SSO d'application pour la connexion automatique entre applications par @2013xile
- **[Contrôle de version]** Ajout d'un plugin de contrôle de version par @cgyrock
- **[Authentification à deux facteurs (2FA)]** TOTP et l'authentification à deux facteurs peuvent désormais être liés, vérifiés et configurés depuis le client v2. par @Molunerfinn
- **[Politique de mot de passe]** Migration de plugin-password-policy vers le shell d'administration client-v2 avec les pages de paramètres Politique de mot de passe / Utilisateurs verrouillés et l'application côté client des règles sur le formulaire de changement de mot de passe du centre utilisateur. par @Molunerfinn
- **[Workflow : Webhook]** Ajout du statut de réponse 408 pour les workflows webhook en timeout (mode synchrone) par @mytharcher
- **[Workflow : Sous-flux]** Prise en charge du paramètre de délai d'attente dans le workflow par @mytharcher
- **[Gestionnaire de migration]** Ajout de quelques API pour nocobase cli par @Andrew1989Y
- **[Stockage de fichiers : S3(Pro)]** Prise en charge du téléchargement de fichiers via le stockage S3 Pro dans le gestionnaire de fichiers v2. par @Molunerfinn
- **[Auth : OIDC]** Migration de `plugin-auth-oidc` vers l'administration v2 ; le bouton de connexion, le formulaire de paramètres d'administration et la redirection automatique SSO fonctionnent désormais sous v2. par @Molunerfinn
- **[Workflow : Approbation]**

  - Prise en charge du paramètre de délai d'attente dans le workflow par @mytharcher
  - Prise en charge de la suppression d'une approbation en brouillon par @mytharcher
- **[Gestionnaire d'emails]** Gmail prend en charge l'envoi d'emails avec des alias par @jiannx
- **[Superviseur d'application]** Ajout des paramètres SSO d'application pour les sous-applications par @2013xile
- **[Auth : LDAP]** Ajout d'une entrée client v2 pour que l'authentificateur LDAP affiche son formulaire de connexion et ses paramètres d'administration sur les applications v2. par @Molunerfinn

### 🚀 Améliorations

- **[indéfini]**

  - Prise en charge de l'environnement courant limité à la session dans nb cli ([#9415](https://github.com/nocobase/nocobase/pull/9415)) par @chenos
  - Alignement des documentations espagnole, portugaise, russe et allemande sur la source anglaise. ([#9299](https://github.com/nocobase/nocobase/pull/9299)) par @Molunerfinn
  - Synchronisation de la documentation française avec la source chinoise. ([#9291](https://github.com/nocobase/nocobase/pull/9291)) par @Molunerfinn
  - Mise à jour des docs IA pour exiger NocoBase >= 2.1.0-beta.20 et recommander la dernière version bêta. ([#9252](https://github.com/nocobase/nocobase/pull/9252)) par @Molunerfinn
  - Amélioration du guide d'installation de l'Agent IA pour empêcher les Agents de contourner l'assistant `--ui` et pour détecter automatiquement les gestionnaires de version Node. ([#9243](https://github.com/nocobase/nocobase/pull/9243)) par @Molunerfinn
  - - ([#9098](https://github.com/nocobase/nocobase/pull/9098)) par @Molunerfinn
  - Ajout d'une entrée client-v2 dédiée et construction indépendante avec rsbuild tout en laissant v1 inchangé. ([#8743](https://github.com/nocobase/nocobase/pull/8743)) par @Molunerfinn
- **[client-v2]**

  - Ajout de la prise en charge de la désactivation de la sélection multiple dans les champs de relation de sélection contextuelle v2. ([#9730](https://github.com/nocobase/nocobase/pull/9730)) par @katherinehhh
  - Amélioration du rendu des blocs v2 lorsqu'une source de données externe configurée est désactivée, empêchant les erreurs de rendu et affichant un espace réservé plus clair dans l'éditeur UI. ([#9699](https://github.com/nocobase/nocobase/pull/9699)) par @katherinehhh
  - Ajout du paramètre de sélection de ligne de tableau v2 ([#9614](https://github.com/nocobase/nocobase/pull/9614)) par @katherinehhh
  - Prise en charge des couleurs d'action du panneau d'actions ([#9612](https://github.com/nocobase/nocobase/pull/9612)) par @katherinehhh
  - Suppression de l'option Masqué de la configuration du menu ([#9596](https://github.com/nocobase/nocobase/pull/9596)) par @zhangzhonghe
  - Filtrage des menus v1 dans la disposition v2 pour n'afficher que les menus v2 ([#9427](https://github.com/nocobase/nocobase/pull/9427)) par @zhangzhonghe
  - Séparation de client-v2 de client-v1 et suppression de sa dépendance à client-v1 ([#8937](https://github.com/nocobase/nocobase/pull/8937)) par @zhangzhonghe
- **[serveur]**

  - Le client moderne est désormais servi sous `/v/` au lieu de `/v2/`. ([#9674](https://github.com/nocobase/nocobase/pull/9674)) par @Molunerfinn
  - Amélioration des docs API swagger du gestionnaire de plugins ([#9080](https://github.com/nocobase/nocobase/pull/9080)) par @2013xile
- **[cli]**

  - Amélioration des conseils d'initialisation et de mise à jour automatique ([#9633](https://github.com/nocobase/nocobase/pull/9633)) par @chenos
  - Rationalisation du flux de mise à niveau de l'application ([#9587](https://github.com/nocobase/nocobase/pull/9587)) par @chenos
  - Amélioration du flux d'authentification env ([#9546](https://github.com/nocobase/nocobase/pull/9546)) par @chenos
  - Amélioration de l'expérience des invites CLI NocoBase en migrant les workflows de configuration et de gestion vers Inquirer, et correction des problèmes d'installation, de compétences et d'exécution Docker associés. ([#9452](https://github.com/nocobase/nocobase/pull/9452)) par @chenos
  - Ajout du suivi de la source des requêtes CLI dans les journaux de requêtes et les journaux d'audit ([#9223](https://github.com/nocobase/nocobase/pull/9223)) par @2013xile
  - Amélioration de la sortie d'aide de l'API CLI générée et du regroupement des commandes ACL ([#9166](https://github.com/nocobase/nocobase/pull/9166)) par @2013xile
  - Amélioration du repli d'aide de `nb API` et unification des messages d'avertissement pour les échecs de démarrage d'exécution ([#9153](https://github.com/nocobase/nocobase/pull/9153)) par @2013xile
- **[client]**

  - Migration de jsonLogic de l'Application v1 vers BaseApplication ([#9522](https://github.com/nocobase/nocobase/pull/9522)) par @zhangzhonghe
  - Prise en charge de la définition des styles de champ via runjs ([#8933](https://github.com/nocobase/nocobase/pull/8933)) par @jiannx
  - Refonte des paramètres de disposition d'administration et de l'application pour modéliser l'architecture hôte avec des gardes de compatibilité v1 v2 ([#8710](https://github.com/nocobase/nocobase/pull/8710)) par @zhangzhonghe
- **[construction]**

  - Ajout d'une couverture de régression pour empêcher `deleteServerFiles` de supprimer les artefacts de construction `client` et `client-v2` sur les chemins Windows et POSIX. ([#9318](https://github.com/nocobase/nocobase/pull/9318)) par @Molunerfinn
  - Les constructions de production du client d'application s'exécutent désormais sur Rsbuild, et le profilage de construction ainsi que les améliorations de planification des déclarations facilitent l'identification et la réduction des goulots d'étranglement de construction. ([#8963](https://github.com/nocobase/nocobase/pull/8963)) par @Molunerfinn
  - Migration du pipeline de construction client dans `@nocobase/build` de Vite vers Rsbuild. ([#8932](https://github.com/nocobase/nocobase/pull/8932)) par @Molunerfinn
- **[base de données]** Correction de la génération de rapports commerciaux IA et du comportement des requêtes de données pour éviter les sorties de graphiques mal formées, la gestion incorrecte des dates et le manque de couverture multi-sources de données ([#9078](https://github.com/nocobase/nocobase/pull/9078)) par @2013xile
- **[moteur-de-flux]**

  - Amélioration de la validation du schéma pour l'API de construction UI. ([#8881](https://github.com/nocobase/nocobase/pull/8881)) par @gchust
- **[app]** Ajout d'un workflow de développement basé sur Rsbuild pour client-v1 tout en maintenant la compatibilité du développement de plugins locaux et de la topologie actuelle `/v2/` ([#8902](https://github.com/nocobase/nocobase/pull/8902)) par @Molunerfinn
- **[Variables et secrets]** Les variables d'environnement (`$env`) peuvent désormais être sélectionnées par les sélecteurs de variables basés sur le moteur de flux dans l'environnement d'exécution v1. ([#9728](https://github.com/nocobase/nocobase/pull/9728)) par @Molunerfinn
- **[Gestionnaire de sources de données]**

  - Ajout de la gestion des permissions des sources de données client-v2 et alignement des tiroirs de sélection de permissions associés. ([#9706](https://github.com/nocobase/nocobase/pull/9706)) par @jiannx
  - Optimisation de l'API de modélisation des données pour prendre en charge la création de collections de commentaires avec l'IA, la configuration de champs de relation pour les sources de données externes et la définition de règles de validation de champ ([#9480](https://github.com/nocobase/nocobase/pull/9480)) par @2013xile
- **[Collection : Connexion aux données étrangères (FDW)]** Amélioration de la parité des modèles de collection V2 pour les collections SQL et les collections de données étrangères, incluant la confirmation SQL, la gestion des serveurs de bases de données étrangères et l'ordonnancement des modèles. ([#9711](https://github.com/nocobase/nocobase/pull/9711)) par @katherinehhh
- **[Filtre multi-mots-clés]** Migration du filtre multi-mots-clés vers client-v2. ([#9691](https://github.com/nocobase/nocobase/pull/9691)) par @gchust
- **[Workflow]**

  - Suppression du couplage de transaction de l'historique du workflow de l'exécution du workflow. ([#9668](https://github.com/nocobase/nocobase/pull/9668)) par @mytharcher
  - Refonte des vérifications de disponibilité des nœuds asynchrones du workflow ([#9532](https://github.com/nocobase/nocobase/pull/9532)) par @mytharcher
  - Ajout de la validation pour tous les déclencheurs et nœuds ([#8930](https://github.com/nocobase/nocobase/pull/8930)) par @mytharcher
- **[Modèles UI]** Migration des modèles UI vers client-v2. ([#9591](https://github.com/nocobase/nocobase/pull/9591)) par @gchust
- **[Départements]** Ajout d'une page de paramètres v2 pour la gestion des départements, des membres du département et des affectations des utilisateurs aux départements. ([#9660](https://github.com/nocobase/nocobase/pull/9660)) par @jiannx
- **[Gestionnaire de notifications]** Migration des plugins liés aux notifications vers v2. ([#9597](https://github.com/nocobase/nocobase/pull/9597)) par @Molunerfinn
- **[Visualisation de données]** Ajout du support client-v2 pour les blocs de graphiques. ([#9517](https://github.com/nocobase/nocobase/pull/9517)) par @jiannx
- **[Vérification]** Ajout du client v2 au plugin Vérification (page de paramètres d'administration, entrée du centre utilisateur, formulaires SMS OTP). ([#9515](https://github.com/nocobase/nocobase/pull/9515)) par @Molunerfinn
- **[Authentification]**

  - Les paramètres de marque personnalisée fonctionnent désormais correctement dans le client v2 ([#9543](https://github.com/nocobase/nocobase/pull/9543)) par @zhangzhonghe
  - Implémentation de la page de paramètres Authentificateurs dans client-v2 et livraison de primitives réutilisables de tableau client-v2, d'entrée variable et de formulaire. ([#9457](https://github.com/nocobase/nocobase/pull/9457)) par @Molunerfinn
- **[Bloc : Carte]** Ajout du support client v2 pour le plugin carte. ([#9511](https://github.com/nocobase/nocobase/pull/9511)) par @jiannx
- **[Localisation]** Amélioration des tâches de traduction de localisation de Lina avec le périmètre de traduction, les paramètres de langue de référence et l'édition rapide ([#9521](https://github.com/nocobase/nocobase/pull/9521)) par @2013xile
- **[Workflow : Événement d'action personnalisée]**

  - Migration des plugins block-workbench et workflow-custom-action-trigger vers client-v2, incluant leurs modèles d'action et le flux du scanner QR. ([#9494](https://github.com/nocobase/nocobase/pull/9494)) par @jiannx
  - Ajout du contrôle ACL du déclenchement sur le mode d'enregistrement (unique et multiple) ([#9125](https://github.com/nocobase/nocobase/pull/9125)) par @mytharcher
- **[Bloc : iframe]** Ajout du support v2 pour le bloc iframe. ([#9485](https://github.com/nocobase/nocobase/pull/9485)) par @jiannx
- **[Bloc : GridCard]** Mise à jour du plugin de carte en grille pour prendre en charge client-v2 ([#9484](https://github.com/nocobase/nocobase/pull/9484)) par @jiannx
- **[Employés IA]**

  - Interaction de conversation parallèle des employés IA et optimisation des performances ([#9462](https://github.com/nocobase/nocobase/pull/9462)) par @cgyrock
  - Les employés IA prennent en charge le traitement parallèle de plusieurs conversations ([#9344](https://github.com/nocobase/nocobase/pull/9344)) par @cgyrock
  - Amélioration des outils d'édition RunJS de Nathan et réduction du décalage pendant les longues conversations IA ([#9311](https://github.com/nocobase/nocobase/pull/9311)) par @2013xile
  - Mise à jour de la configuration des tâches raccourcies des employés IA pour utiliser le même composant de paramètres de compétences que la configuration du nœud d'employé IA du workflow ([#9246](https://github.com/nocobase/nocobase/pull/9246)) par @cgyrock
  - Ajustement de l'interaction de configuration des compétences/outils pour l'instruction de l'employé IA ([#9232](https://github.com/nocobase/nocobase/pull/9232)) par @cgyrock
  - Mise à jour de l'invite utilisateur du chatbox IA ([#8717](https://github.com/nocobase/nocobase/pull/8717)) par @heziqiang
  - Mise à jour de l'invite utilisateur du chatbox IA ([#8717](https://github.com/nocobase/nocobase/pull/8717)) par @heziqiang
- **[Gestionnaire de fichiers]** Les plugins de stockage tiers peuvent désormais enregistrer leur propre formulaire de type de stockage sur la page de paramètres du gestionnaire de fichiers v2. ([#9439](https://github.com/nocobase/nocobase/pull/9439)) par @Molunerfinn
- **[Bloc : Kanban]**

  - Amélioration de la cohérence de l'espacement des champs de détail v2 et meilleure adaptation de l'espacement des cartes et colonnes kanban aux paramètres du thème. ([#9390](https://github.com/nocobase/nocobase/pull/9390)) par @jiannx
  - Réduction de la largeur par défaut des colonnes kanban. ([#9306](https://github.com/nocobase/nocobase/pull/9306)) par @jiannx
  - Amélioration des paramètres de création de blocs Calendrier et Kanban. ([#9294](https://github.com/nocobase/nocobase/pull/9294)) par @jiannx
- **[IdP : OAuth]** Les sessions OAuth utilisent désormais les mêmes paramètres d'expiration que la politique de jeton système ([#9345](https://github.com/nocobase/nocobase/pull/9345)) par @2013xile
- **[Contrôle d'accès]** Ajout de nouvelles API pour la compétence acl ([#9198](https://github.com/nocobase/nocobase/pull/9198)) par @Andrew1989Y
- **[Moteur de flux]** Ajout de nouvelles API pour la construction UI. ([#8992](https://github.com/nocobase/nocobase/pull/8992)) par @gchust
- **[Action : Requête personnalisée]**

  - Ajout de modèles d'action pour les requêtes personnalisées ([#8890](https://github.com/nocobase/nocobase/pull/8890)) par @jiannx
  - Le streaming d'événements prend en charge les requêtes personnalisées ([#8749](https://github.com/nocobase/nocobase/pull/8749)) par @jiannx
- **[Workflow : Événement pré-action]** Ajout de règles de validation pour les déclencheurs et les nœuds ([#8971](https://github.com/nocobase/nocobase/pull/8971)) par @mytharcher
- **[Champ de collection : divisions administratives de la Chine]** field-china-region 2.0 ([#8831](https://github.com/nocobase/nocobase/pull/8831)) par @jiannx
- **[Auth : SAML 2.0]**

  - Les redirections de connexion SAML/CAS suivent désormais le préfixe du client moderne. par @Molunerfinn
  - Ajout d'entrées client-v2 pour les plugins d'authentification CAS et SAML afin qu'ils fonctionnent avec la page de connexion v2 et les paramètres Authentificateurs. par @Molunerfinn
- **[Restriction IP]** Ajout d'un client v2 pour le plugin de restriction IP. par @Molunerfinn
- **[Marque personnalisée]** Les paramètres de marque personnalisée sont désormais disponibles dans le client v2 par @zhangzhonghe
- **[Workflow : Webhook]** Ajout de la validation pour la création de l'API déclencheur/nœud par @mytharcher
- **[Workflow : Sous-flux]**

  - Suppression du couplage de transaction de l'historique du workflow des instructions de sous-flux. par @mytharcher
  - Ajout de la validation pour la création de l'API nœud par @mytharcher
- **[Impression de modèle]** Mise à jour des métadonnées de la collection de modèles d'impression pour la classification de sauvegarde du contrôle de version. par @cgyrock
- **[Auth : OIDC]** La redirection de connexion OIDC suit désormais le préfixe du client moderne. par @Molunerfinn
- **[Historique des enregistrements]** Mise à jour des métadonnées de la collection d'historique des enregistrements pour la classification de sauvegarde du contrôle de version. par @cgyrock
- **[Workflow : Approbation]**

  - Ajout du drapeau `async` pour l'instruction d'approbation, afin d'adapter la nouvelle API de création de nœud dans le canevas du workflow par @mytharcher
  - Suppression du couplage de transaction de l'historique du workflow des instructions de workflow d'approbation. par @mytharcher
  - Ajout de la validation pour la création de nœud d'approbation par @mytharcher
  - Mise à jour des métadonnées de la collection d'approbation du workflow pour la classification de sauvegarde du contrôle de version. par @cgyrock
  - Ajout de la validation pour l'API déclencheur/nœud par @mytharcher
  - Ajustement des règles de validation pour la configuration du déclencheur d'approbation et la configuration du nœud, pour s'assurer que le champ UI existe par @mytharcher
- **[Journaux d'audit]** Mise à jour des métadonnées de la collection du journal d'audit pour la classification de sauvegarde du contrôle de version. par @cgyrock
- **[Gestionnaire d'emails]** Mise à jour des métadonnées de la collection du gestionnaire d'emails pour la classification de sauvegarde du contrôle de version. par @cgyrock
- **[Superviseur d'application]** Mise à jour des métadonnées de la collection du superviseur d'application pour la classification de sauvegarde du contrôle de version. par @cgyrock

### 🐛 Corrections de bugs

- **[indéfini]**

  - Alignement des chemins de configuration nginx ([#9528](https://github.com/nocobase/nocobase/pull/9528)) par @chenos
  - Correction des liens morts dans la documentation traduite et activation de la détection des liens morts par défaut dans la construction de la documentation. ([#9371](https://github.com/nocobase/nocobase/pull/9371)) par @Molunerfinn
  - Correction du workflow de dépendance et de construction afin que les échecs d'extraction de plugins pro autonomes fassent échouer le CI au lieu de sauter silencieusement la couverture de construction. ([#9324](https://github.com/nocobase/nocobase/pull/9324)) par @Molunerfinn
  - Correction des fichiers de traduction gonflés et alignement de la structure de la documentation multilingue. ([#9305](https://github.com/nocobase/nocobase/pull/9305)) par @Molunerfinn
  - Correction du sélecteur de langue générant des URL incorrectes (par exemple, `/cn/es/` au lieu de `/es/`) sur le site de documentation. ([#9233](https://github.com/nocobase/nocobase/pull/9233)) par @Molunerfinn
- **[client-v2]**

  - Correction des champs JSON dans les vues d'affichage client-v2 rendant des cellules vides pour les valeurs d'objet. ([#9714](https://github.com/nocobase/nocobase/pull/9714)) par @katherinehhh
  - Correction des champs d'option V2 traduisant incorrectement les libellés d'option simples dans les environnements localisés. ([#9708](https://github.com/nocobase/nocobase/pull/9708)) par @katherinehhh
  - Correction des colonnes de tableau v2 devenant invisibles lorsque la largeur de colonne personnalisée est définie sur 0. ([#9689](https://github.com/nocobase/nocobase/pull/9689)) par @katherinehhh
  - Ajustement de tous les sélecteurs de champs de relation pour limiter les champs d'association à un maximum de deux niveaux ([#9454](https://github.com/nocobase/nocobase/pull/9454)) par @jiannx
  - Correction des erreurs de sauvegarde des règles de liaison de menu ([#9666](https://github.com/nocobase/nocobase/pull/9666)) par @zhangzhonghe
  - Correction de l'espacement excessif au-dessus des blocs sur les pages v2 ([#9647](https://github.com/nocobase/nocobase/pull/9647)) par @zhangzhonghe
  - Préservation des valeurs de champ assignées ([#9640](https://github.com/nocobase/nocobase/pull/9640)) par @katherinehhh
  - Correction des onglets de connexion de la sous-application affichant des modèles de traduction bruts, et empêchement du tiroir d'édition de la méthode d'authentification v2 de perdre les valeurs de champ lors de la soumission. ([#9581](https://github.com/nocobase/nocobase/pull/9581)) par @Molunerfinn
  - Amélioration des performances de la page du gestionnaire de plugins en utilisant CSS line-clamp au lieu de antd Typography ellipsis. ([#9593](https://github.com/nocobase/nocobase/pull/9593)) par @Molunerfinn
  - Correction des métadonnées de langue du navigateur afin que la page de l'application suive la langue de l'application sélectionnée au lieu d'être marquée comme anglais. ([#9564](https://github.com/nocobase/nocobase/pull/9564)) par @Molunerfinn
  - Correction de l'enregistrement incohérent des dépendances dnd-kit. ([#9544](https://github.com/nocobase/nocobase/pull/9544)) par @jiannx
  - Correction de l'échec du chargement de la route v2 du plugin Kanban car les dépendances dnd-kit n'étaient pas fournies par le client. ([#9516](https://github.com/nocobase/nocobase/pull/9516)) par @jiannx
  - Le composant Tableau v2 partagé affiche désormais le sélecteur de taille de page par défaut, correspondant au comportement v1. ([#9512](https://github.com/nocobase/nocobase/pull/9512)) par @Molunerfinn
  - Correction du problème où la liste des options du champ de titre est vide pour les champs de relation dans les blocs de tableau ([#9490](https://github.com/nocobase/nocobase/pull/9490)) par @katherinehhh
  - Maintien des groupes vides après le filtrage des menus v1 dans la disposition v2 ([#9478](https://github.com/nocobase/nocobase/pull/9478)) par @zhangzhonghe
  - Correction du problème où la page devient blanche derrière la boîte de dialogue d'activation du plugin ([#9455](https://github.com/nocobase/nocobase/pull/9455)) par @zhangzhonghe
  - Correction du plantage des pages d'administration v1 lorsqu'elles référencent des modules de plugin v2 dans les builds de production. ([#9460](https://github.com/nocobase/nocobase/pull/9460)) par @Molunerfinn
  - Correction d'une erreur lors de la sélection de champs d'association dans les paramètres de champ. ([#9379](https://github.com/nocobase/nocobase/pull/9379)) par @gchust
  - Correction du problème où une page 404 s'affiche brièvement après le démarrage de l'application ([#9365](https://github.com/nocobase/nocobase/pull/9365)) par @zhangzhonghe
  - Correction du problème où certaines pages v2 ne parviennent pas à charger les plugins distants ([#9369](https://github.com/nocobase/nocobase/pull/9369)) par @zhangzhonghe
  - Correction des problèmes de placement du placeholder de glisser-déposer et de la position de dépôt des blocs de page v2 ([#9361](https://github.com/nocobase/nocobase/pull/9361)) par @zhangzhonghe
  - Correction du chargement des plugins distants afin que les URL de plugin qui se terminent déjà par `.js` ne soient pas résolues en chemins `.js.js` en double. ([#9336](https://github.com/nocobase/nocobase/pull/9336)) par @Molunerfinn
  - Correction du problème où `RemoteSelect` ne s'affichait pas dans la configuration de liaison du workflow ([#9314](https://github.com/nocobase/nocobase/pull/9314)) par @mytharcher
- **[client]**

  - Correction du problème où les blocs peuvent être incorrectement affichés comme supprimés après avoir actualisé la page ([#9662](https://github.com/nocobase/nocobase/pull/9662)) par @zhangzhonghe
  - Correction du problème où le sous-tableau dans le sous-formulaire ne pouvait pas ajouter une deuxième ligne ([#9586](https://github.com/nocobase/nocobase/pull/9586)) par @katherinehhh
  - Correction de la préservation du format de l'heure pour les champs de temps v2 ([#9579](https://github.com/nocobase/nocobase/pull/9579)) par @katherinehhh
  - Augmentation de la limite de téléchargement d'image de saisie par scan ([#9580](https://github.com/nocobase/nocobase/pull/9580)) par @katherinehhh
  - Correction de la synchronisation de la valeur de la fenêtre contextuelle du sélecteur de date mobile ([#9582](https://github.com/nocobase/nocobase/pull/9582)) par @katherinehhh
  - Correction du chargement en mode dev pour les plugins de stockage intégrés qui dépendent d'exportations nommées de plugins source locaux. ([#9548](https://github.com/nocobase/nocobase/pull/9548)) par @Molunerfinn
  - Correction du problème où les paramètres système apparaissent vides après soumission ([#9458](https://github.com/nocobase/nocobase/pull/9458)) par @zhangzhonghe
  - Filtrage des blocs optionnels non essentiels dans la boîte contextuelle de sélection des champs associés ([#9224](https://github.com/nocobase/nocobase/pull/9224)) par @jiannx
  - Correction du problème où le titre de la page ne se met pas à jour après avoir changé de menu ([#8864](https://github.com/nocobase/nocobase/pull/8864)) par @zhangzhonghe
- **[moteur-de-flux]**

  - Correction du problème où la recherche de champ est effacée lors du survol des champs d'association ([#9646](https://github.com/nocobase/nocobase/pull/9646)) par @zhangzhonghe
  - Correction des menus en cascade instables lors de la saisie dans les zones de recherche ([#9473](https://github.com/nocobase/nocobase/pull/9473)) par @zhangzhonghe
  - Correction d'un message d'erreur incorrect dans la console du navigateur. ([#9502](https://github.com/nocobase/nocobase/pull/9502)) par @gchust
  - Correction des sous-menus de champs de relation instables dans les menus de sous-modèle ([#9417](https://github.com/nocobase/nocobase/pull/9417)) par @jiannx
  - Ajout d'extraits JS pour la définition d'élément de formulaire et d'élément de détail ([#8974](https://github.com/nocobase/nocobase/pull/8974)) par @jiannx
- **[construction]**

  - Les actifs textuels dans les builds serveur sont désormais copiés en tant que fichiers au lieu d'être convertis en modules JavaScript. ([#9565](https://github.com/nocobase/nocobase/pull/9565)) par @Molunerfinn
  - Correction de l'échec de construction du plugin lorsque le code client v1 importe une entrée `/client-v2` d'un autre plugin. ([#9436](https://github.com/nocobase/nocobase/pull/9436)) par @Molunerfinn
- **[cli-v1]**

  - Correction du démarrage du développement create-nocobase-app en réutilisant les shells d'application packagés tout en permettant le développement de plugins locaux. ([#9471](https://github.com/nocobase/nocobase/pull/9471)) par @Molunerfinn
  - Correction des échecs de démarrage du développement dans les applications créées avec create-nocobase-app causés par la résolution du chemin client app-dev. ([#9465](https://github.com/nocobase/nocobase/pull/9465)) par @Molunerfinn
- **[serveur]**

  - Correction des requêtes de découverte OAuth des sous-applications étant routées comme des requêtes de l'application principale ([#9383](https://github.com/nocobase/nocobase/pull/9383)) par @2013xile
  - Prise en charge de l'obtention de l'application cible par nom d'hôte ([#8978](https://github.com/nocobase/nocobase/pull/8978)) par @2013xile
- **[cli]**

  - Correction des options booléennes CLI afin qu'elles puissent être désactivées avec des drapeaux négatifs ([#9337](https://github.com/nocobase/nocobase/pull/9337)) par @2013xile
  - Correction des échecs de connexion OAuth CLI sur Windows causés par des URL d'autorisation longues ([#9159](https://github.com/nocobase/nocobase/pull/9159)) par @2013xile
- **[ia]** Correction de la configuration manquante du champ de catégorie lors de l'enregistrement de l'employé IA ([#9300](https://github.com/nocobase/nocobase/pull/9300)) par @cgyrock
- **[test]** Correction des builds de plugins afin que les dépendances serveur avec des noms de package pointus comme `big.js` soient packagées dans `dist/node_modules`. ([#8953](https://github.com/nocobase/nocobase/pull/8953)) par @Molunerfinn
- **[Calendrier]**

  - Correction d'un problème où les blocs Détails et Édition ne pouvaient pas être ajoutés dans les tiroirs de détail du bloc calendrier v2 ([#9729](https://github.com/nocobase/nocobase/pull/9729)) par @jiannx
  - Correction des couleurs des événements du calendrier ne s'affichant pas à partir du champ de couleur configuré dans les pages v2. ([#9677](https://github.com/nocobase/nocobase/pull/9677)) par @jiannx
  - Correction du style du curseur pour les éléments d'événement dans la superposition des événements supplémentaires du calendrier ([#9519](https://github.com/nocobase/nocobase/pull/9519)) par @jiannx
  - Ne pas enregistrer les actions du calendrier dans d'autres blocs ([#9200](https://github.com/nocobase/nocobase/pull/9200)) par @jiannx
- **[Employés IA]**

  - Amélioration des invites de requête de données des employés IA pour charger la compétence requise avant d'utiliser les outils de requête. ([#9725](https://github.com/nocobase/nocobase/pull/9725)) par @cgyrock
  - Correction du bouton manquant de l'assistant Dara dans les paramètres de graphique client-v2. ([#9696](https://github.com/nocobase/nocobase/pull/9696)) par @cgyrock
  - Les nœuds d'employé IA du workflow peuvent utiliser le modèle par défaut ([#9679](https://github.com/nocobase/nocobase/pull/9679)) par @cgyrock
  - Correction des erreurs `ctx.get` dans les nœuds de workflow d'employé IA ([#9661](https://github.com/nocobase/nocobase/pull/9661)) par @cgyrock
  - Correction d'une erreur lorsque l'employé IA accède à une base de connaissances en lecture seule ([#9538](https://github.com/nocobase/nocobase/pull/9538)) par @cgyrock
  - Correction des cartes d'appel d'outil IA n'apparaissant pas immédiatement lorsque les événements d'outil en streaming sont divisés ([#9534](https://github.com/nocobase/nocobase/pull/9534)) par @2013xile
  - Correction du problème où les permissions du rôle d'opérateur ne prennent pas effet dans les nœuds d'employé IA ([#9513](https://github.com/nocobase/nocobase/pull/9513)) par @cgyrock
  - Correction de l'erreur de chargement de plugin-ai ([#9483](https://github.com/nocobase/nocobase/pull/9483)) par @cgyrock
  - Correction du nœud d'employé IA du workflow ne se terminant pas correctement après l'affectation de l'outil. ([#9381](https://github.com/nocobase/nocobase/pull/9381)) par @cgyrock
  - Correction de l'erreur de lecture de la pièce jointe du champ d'associations par le nœud d'employé IA dans le workflow ([#9377](https://github.com/nocobase/nocobase/pull/9377)) par @cgyrock
  - Correction du problème où le nœud d'employé IA du workflow efface les compétences après avoir changé d'employé IA ([#9342](https://github.com/nocobase/nocobase/pull/9342)) par @cgyrock
  - Correction de l'erreur de rendu de la tâche raccourcie de l'employé IA ([#9267](https://github.com/nocobase/nocobase/pull/9267)) par @cgyrock
  - Correction de l'erreur dans l'API pour récupérer la liste des employés IA ([#9241](https://github.com/nocobase/nocobase/pull/9241)) par @cgyrock
  - Affinement du comportement de délégation de tâches Atlas et mise à jour de Viz pour utiliser le workflow de rapport commercial pour les demandes de rapport ([#9229](https://github.com/nocobase/nocobase/pull/9229)) par @2013xile
  - Employé IA du workflow : ajustement de l'interface utilisateur et corrections de bugs. ([#9213](https://github.com/nocobase/nocobase/pull/9213)) par @cgyrock
  - Correction des anomalies d'enregistrement de journal dans l'instruction de l'employé IA ([#9180](https://github.com/nocobase/nocobase/pull/9180)) par @cgyrock
  - Correction du tri des requêtes d'agrégat supprimé par ACL ([#9099](https://github.com/nocobase/nocobase/pull/9099)) par @2013xile
  - Correction du problème où les messages d'erreur n'étaient pas affichés dans les conversations des employés IA ([#9097](https://github.com/nocobase/nocobase/pull/9097)) par @cgyrock
  - Correction du problème où les employés IA étaient incapables d'utiliser des compétences ([#9023](https://github.com/nocobase/nocobase/pull/9023)) par @cgyrock
  - Correction du problème où le LLM tente toujours de charger des compétences après la désactivation de l'outil getSkill ([#9013](https://github.com/nocobase/nocobase/pull/9013)) par @cgyrock
  - Correction des cas de test échouant dans le module ai du package core. ([#8941](https://github.com/nocobase/nocobase/pull/8941)) par @cgyrock
- **[Gestionnaire de sources de données]**

  - Correction de l'affichage obsolète du champ de titre lors de la réouverture du tiroir de configuration de champ de source de données v2 après avoir changé le champ de titre. ([#9720](https://github.com/nocobase/nocobase/pull/9720)) par @katherinehhh
  - Amélioration des messages d'erreur du gestionnaire de sources de données V2 lorsque les opérations de collection, champ, synchronisation et chargement de tableau échouent. ([#9710](https://github.com/nocobase/nocobase/pull/9710)) par @katherinehhh
  - Correction de la localisation des champs multi-espace dans le gestionnaire de sources de données v2. ([#9690](https://github.com/nocobase/nocobase/pull/9690)) par @jiannx
  - Optimisation du nommage des outils MCP et réduction des réponses API redondantes pour éviter une consommation excessive du contexte de conversation IA ([#9000](https://github.com/nocobase/nocobase/pull/9000)) par @2013xile
- **[Bloc : Carte]** Correction des champs de géométrie de carte manquants dans le menu d'ajout de champ du gestionnaire de sources de données v2 après l'activation du plugin carte. ([#9715](https://github.com/nocobase/nocobase/pull/9715)) par @katherinehhh
- **[Collection : SQL]** Blocage de l'accès des collections SQL aux métadonnées PostgreSQL sensibles ([#9683](https://github.com/nocobase/nocobase/pull/9683)) par @2013xile
- **[Workflow : Événement d'action personnalisée]**

  - Correction de l'action de déclenchement de workflow manquante dans la liste des boutons du panneau d'actions du workbench. ([#9682](https://github.com/nocobase/nocobase/pull/9682)) par @katherinehhh
  - Correction des options de workflow de déclenchement en double dans les menus d'action de bloc v2 ([#9622](https://github.com/nocobase/nocobase/pull/9622)) par @zhangzhonghe
  - Filtrage des options de liaison de workflow d'action personnalisée par la collection du bloc actuel. ([#9610](https://github.com/nocobase/nocobase/pull/9610)) par @mytharcher
- **[Action : Dupliquer l'enregistrement]** Réinitialisation de l'état du bouton en cas d'échec de soumission ([#9676](https://github.com/nocobase/nocobase/pull/9676)) par @katherinehhh
- **[Bloc : Gantt]**

  - Amélioration du placement de l'infobulle Gantt pour éviter de couvrir les barres de tâches et alignement cohérent des étiquettes de tâches à l'intérieur et à l'extérieur des barres ([#9638](https://github.com/nocobase/nocobase/pull/9638)) par @jiannx
  - Correction du chemin du dossier partagé gantt v2 et ajout du rayage zébré. ([#9621](https://github.com/nocobase/nocobase/pull/9621)) par @jiannx
- **[Paramètres de licence]**

  - Ajout du support client-v2 pour les paramètres de licence et l'injection de licence commerciale. ([#9555](https://github.com/nocobase/nocobase/pull/9555)) par @jiannx
  - Résolution des dépendances groupées liées symboliquement ([#9518](https://github.com/nocobase/nocobase/pull/9518)) par @chenos
- **[Gestionnaire de fichiers]** Amélioration des messages d'échec de prévisualisation PDF et documentation des exigences CORS pour le stockage externe. ([#9600](https://github.com/nocobase/nocobase/pull/9600)) par @mytharcher
  Référence : [Aperçu des fichiers](docs/docs/en/file-manager/file-preview/index.md)
- **[Bloc : iframe]** Correction du contenu iframe ne remplissant pas la hauteur de bloc configurée ([#9540](https://github.com/nocobase/nocobase/pull/9540)) par @katherinehhh
- **[Action : Exporter les enregistrements]** Amélioration des performances de configuration de champ avec de nombreux champs d'association ([#9524](https://github.com/nocobase/nocobase/pull/9524)) par @katherinehhh
- **[Localisation]** Correction des traductions de référence de localisation intégrées pour les tâches de traduction IA ([#9531](https://github.com/nocobase/nocobase/pull/9531)) par @2013xile
- **[Authentification]** Empêchement du plantage du serveur lorsqu'un jeton d'authentification WebSocket référence un authentificateur dont le plugin de type d'authentification est déchargé ou manquant. ([#9514](https://github.com/nocobase/nocobase/pull/9514)) par @Molunerfinn
- **[Workflow : JavaScript]**

  - Correction du chargement du package d'exécution QuickJS du workflow JavaScript dans les builds de production. ([#9503](https://github.com/nocobase/nocobase/pull/9503)) par @mytharcher
  - Correction du problème où une erreur était levée lors de la configuration du nœud JavaScript ([#9169](https://github.com/nocobase/nocobase/pull/9169)) par @mytharcher
- **[Bloc : Markdown]** Correction du problème de signalement d'erreur du bloc Markdown v2 ([#9440](https://github.com/nocobase/nocobase/pull/9440)) par @zhangzhonghe
- **[Bloc : Arbre]**

  - Amélioration des paramètres du bloc de filtre arborescent et correction des comportements d'association non prise en charge, de repli du champ de titre et de réinitialisation de la recherche. ([#9426](https://github.com/nocobase/nocobase/pull/9426)) par @jiannx
  - Correction de l'affichage anormal des nœuds du bloc de filtre ([#9260](https://github.com/nocobase/nocobase/pull/9260)) par @jiannx
- **[Mobile (obsolète)]** Correction des fenêtres contextuelles de message mobile qui ne pouvaient pas être fermées ou défilées ([#9424](https://github.com/nocobase/nocobase/pull/9424)) par @zhangzhonghe
- **[IA : Serveur MCP]**

  - Correction du packaging du serveur MCP pour inclure les dépendances d'exécution ([#9401](https://github.com/nocobase/nocobase/pull/9401)) par @2013xile
  - Correction des incohérences d'authentification causées par des en-têtes transférés non liés dans l'outil CRUD générique MCP ([#8983](https://github.com/nocobase/nocobase/pull/8983)) par @2013xile
  - Correction des outils MCP générés à partir de Swagger lorsque les schémas d'entrée incluent des types `null` ou des marqueurs `nullable` qui sont invalides pour la validation d'outil OpenAI ([#8994](https://github.com/nocobase/nocobase/pull/8994)) par @2013xile
- **[Moteur de flux]** Correction d'un problème où les blocs générés par l'IA ne pouvaient pas être convertis de modèles de référence en modèles en double. ([#9392](https://github.com/nocobase/nocobase/pull/9392)) par @gchust
- **[Bloc : Kanban]**

  - Amélioration du style compact des cartes Kanban et optimisation de la sélection de modèle de création rapide contextuelle. ([#9370](https://github.com/nocobase/nocobase/pull/9370)) par @jiannx
  - Correction des blocs associés kanban utilisant des paramètres de ressource d'exécution non résolus dans les contextes de fenêtre contextuelle ou de page secondaire. ([#9350](https://github.com/nocobase/nocobase/pull/9350)) par @jiannx
  - Correction de l'affichage répété de la couche flottante de configuration de champ ([#9271](https://github.com/nocobase/nocobase/pull/9271)) par @jiannx
- **[Action : Requête personnalisée]** Mise à niveau de Koa vers v3 ([#9368](https://github.com/nocobase/nocobase/pull/9368)) par @chenos
- **[Visualisation de données]** Correction des sélecteurs de champ vides dans la configuration de requête de graphique sur les pages de flux ([#9276](https://github.com/nocobase/nocobase/pull/9276)) par @2013xile
- **[IdP : OAuth]**

  - Correction des échecs de connexion CLI OAuth et restriction de l'enregistrement dynamique aux URL de rappel locales ([#9248](https://github.com/nocobase/nocobase/pull/9248)) par @2013xile
  - Correction des échecs d'enregistrement du client OAuth et d'actualisation du jeton après le redémarrage du service ([#9139](https://github.com/nocobase/nocobase/pull/9139)) par @2013xile
  - Correction de l'accès OAuth pour les requêtes API régulières ([#9120](https://github.com/nocobase/nocobase/pull/9120)) par @2013xile
  - Correction d'une redirection incorrecte après la connexion MCP OAuth dans les sous-applications ([#9015](https://github.com/nocobase/nocobase/pull/9015)) par @2013xile
- **[Workflow : Nœud d'agrégat]** Correction du problème où le nœud d'agrégat ne pouvait pas être sauvegardé en raison d'une règle de validation incorrecte ([#9208](https://github.com/nocobase/nocobase/pull/9208)) par @mytharcher
- **[Workflow : Nœud de boucle]** Correction des validations des nœuds de workflow ([#9111](https://github.com/nocobase/nocobase/pull/9111)) par @mytharcher
- **[Contrôle d'accès]** Mise à jour de acl swagger pour le serveur mcp ([#9096](https://github.com/nocobase/nocobase/pull/9096)) par @Andrew1989Y
- **[Workflow : Nœud de messagerie]** Correction de la validation pour les champs de variable ([#9047](https://github.com/nocobase/nocobase/pull/9047)) par @mytharcher
- **[Workflow]**

  - Correction d'une règle de validation incorrecte de l'instruction conditionnelle ([#9017](https://github.com/nocobase/nocobase/pull/9017)) par @mytharcher
  - Correction du problème où le mode du déclencheur de collection ne pouvait pas être défini sur "créer ou mettre à jour" ([#8980](https://github.com/nocobase/nocobase/pull/8980)) par @mytharcher
- **[Politique de mot de passe]** Correction des échecs de connexion masquant l'erreur réelle avec "argument #1 unsupported type undefined" lorsque l'erreur sous-jacente n'a pas de code de statut. par @Molunerfinn
- **[Source de données : API REST]** Correction des échecs de construction de déclaration de plugin de source de données API REST causés par des déclarations de type client-v2 du gestionnaire de sources de données incompatibles. par @katherinehhh
- **[plugin-commercial]** Ajout de composants de licence commerciale client-v2 et d'une entrée de statut de licence dans la barre supérieure. par @jiannx
- **[Auth : SAML 2.0]** Correction de l'intercepteur de redirection automatique SAML faisant clignoter le shell de l'application et ouvrant des tiroirs en double à chaque navigation. par @Molunerfinn
- **[Workflow : Webhook]** Correction du problème où la création d'un nœud de réponse était interceptée par la validation de la configuration `statusCode` par @mytharcher
- **[Gestionnaire de migration]** Correction de `migration:create` retournant `taskId` à partir de l'enregistrement de tâche asynchrone. par @Andrew1989Y
- **[Impression de modèle]** Correction des erreurs de conversion PDF de l'impression de modèle n'étant pas correctement renvoyées au client par @jiannx
- **[Gestionnaire d'emails]**

  - Aucune confirmation de fermeture n'est affichée après l'envoi de l'email par @jiannx
  - Correction de l'affichage du titre des identités de messagerie par @jiannx
