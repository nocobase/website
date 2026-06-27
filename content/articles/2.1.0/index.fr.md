---
title: "Annonce de NocoBase 2.1.0"
description: "NocoBase 2.1 introduit une nouvelle CLI permettant aux humains et aux agents IA de se connecter et de gérer les applications. Il améliore également la création assistée par IA, les compétences, le développement de plugins IA, les employés IA, la collaboration multi-applications, la gestion des versions, les workflows et la compatibilité 2.0."
---

NocoBase 2.1 est une mise à jour majeure des **capacités IA, multi-applications et de l'adaptation à la version 2.0**. Nous avons introduit la CLI NocoBase, facilitant la connexion et la gestion des applications NocoBase pour les humains comme pour les agents IA. De la création d'applications et de la construction assistée par IA aux employés IA améliorés et au plugin de développement IA, elle couvre l'ensemble du flux, de l'intégration de l'environnement à la construction du système et à la collaboration métier. Nous avons également amélioré les capacités multi-applications pour faciliter les interactions et la collaboration entre applications. Parallèlement, nous avons ajouté le contrôle de version et continué à enrichir considérablement la prise en charge des pages 2.0 et les fonctionnalités de base — davantage de blocs, champs, actions et plugins prennent désormais en charge la version 2.0.

## Nouveautés

### Présentation de la CLI NocoBase

Dans cette version, la CLI NocoBase (`nb`) est le point d'entrée central pour les utilisateurs réguliers et les agents IA souhaitant se connecter à NocoBase.

La CLI est utilisée pour initialiser, connecter et gérer les applications NocoBase dans un espace de travail local. Elle couvre plusieurs scénarios :

- Installer une nouvelle application NocoBase via Docker, npm ou Git, puis l'enregistrer en tant qu'environnement CLI
- Se connecter à une application NocoBase existante et l'enregistrer en tant qu'environnement CLI
- Installer, créer et activer des plugins
- Opérer, sauvegarder et gérer les applications NocoBase

![Assistant visuel de la CLI NocoBase](https://static-docs.nocobase.com/2026-04-29-15-55-19.png)

Que vous souhaitiez intégrer l'IA dans un système existant ou créer une nouvelle application à partir de zéro, vous pouvez gérer l'initialisation et la maintenance continue via la CLI.

Pour les équipes, la CLI fournit un point d'entrée standard que les agents IA peuvent comprendre et utiliser — l'initialisation de l'environnement, la configuration de la connexion et la gestion de l'exécution partagent le même flux.

La version officielle ajoute également un ensemble de commandes liées aux opérations :

- `nb api` : Appeler l'API NocoBase via la CLI.
- `nb app` : Gérer l'état d'exécution de l'application : démarrer, arrêter, redémarrer, journaux et mise à niveau.
- `nb backup` : Créer une sauvegarde et la télécharger localement, ou restaurer un fichier de sauvegarde local vers un environnement cible.
- `nb config` : Gérer la configuration par défaut de la CLI.
- `nb db` : Gérer la base de données intégrée de l'environnement sélectionné.
- `nb env` : Gérer les environnements de projet NocoBase, l'environnement actuel, le statut, les détails et les commandes d'exécution.
- `nb license` : Gérer les licences commerciales et les plugins sous licence.
- `nb plugin` : Gérer les plugins de l'environnement NocoBase sélectionné.
- `nb scaffold` : Générer un squelette de développement de plugin NocoBase.
- `nb self` : Vérifier ou mettre à jour la CLI NocoBase elle-même.
- `nb source` : Gérer les projets source locaux : téléchargement, développement, construction et test.

Documentation associée :

- [Installer NocoBase avec la CLI](https://docs.nocobase.com/quickstart/installation/cli)
- [Guide d'intégration des agents IA](https://docs.nocobase.com/ai/quick-start)
- [Référence des commandes de la CLI NocoBase](https://docs.nocobase.com/api/cli/)

### Construction assistée par IA : remplacer la configuration manuelle par la conversation

La construction assistée par IA est l'une des expériences centrales de cette version. Vous pouvez décrire vos besoins métier en langage naturel, et l'IA vous aide à réaliser la modélisation des données, la configuration des pages, la mise en place des permissions et l'orchestration des workflows.

Comparée à la construction low-code traditionnelle, la construction assistée par IA présente plusieurs avantages évidents :

- Une barrière à l'entrée plus basse — vous n'avez pas besoin de connaître tous les concepts de configuration au préalable
- Un chemin plus court entre la description du besoin et le prototype fonctionnel
- Les données, l'interface utilisateur et la configuration des workflows peuvent être réalisées en continu par l'IA

Par exemple : « concevez-moi un modèle de données CRM », « créez-moi une page de gestion des clients » ou « orchestrez un workflow qui déduit automatiquement le stock après la création d'une commande » — tout cela peut être géré par l'IA dans le cadre des capacités de NocoBase.

Documentation associée :

- [Démarrage rapide de la construction assistée par IA](https://docs.nocobase.com/ai-builder/)

### Les compétences NocoBase couvrent l'ensemble du flux de construction

Pour aider l'IA à comprendre véritablement le système de configuration de NocoBase, cette version intègre un ensemble de packs de connaissances métier pouvant être installés dans les agents IA — les compétences NocoBase.

Les compétences sont des wrappers standardisés de connaissances et d'opérations, organisés autour des principaux domaines de capacité de NocoBase, aidant l'IA à comprendre plus précisément les modèles d'objets, les structures de configuration et les limites d'exécution.

Nous fournissons actuellement 8 compétences couvrant l'ensemble du flux de construction :

- [Gestion de l'environnement](https://docs.nocobase.com/ai-builder/env-bootstrap) — vérifications de l'environnement, installation/déploiement, mise à niveau et dépannage
- [Modélisation des données](https://docs.nocobase.com/ai-builder/data-modeling) — créer et gérer des tables, des champs et des relations
- [Construction de l'interface utilisateur](https://docs.nocobase.com/ai-builder/ui-builder) — créer et modifier des pages, des blocs, des fenêtres contextuelles et des réactions d'interaction
- [Gestion des workflows](https://docs.nocobase.com/ai-builder/workflow) — créer, modifier, activer et diagnostiquer des workflows
- [Configuration des permissions](https://docs.nocobase.com/ai-builder/acl) — gérer les rôles, les politiques de permission, les liaisons d'utilisateurs et l'évaluation des risques
- [Solutions](https://docs.nocobase.com/ai-builder/dsl-reconciler) — construire en masse des systèmes métier complets à partir de YAML (encore en version bêta, avec une stabilité limitée)
- [Gestion des plugins](https://docs.nocobase.com/ai-builder/plugin-manage) — visualiser, activer et désactiver des plugins
- [Gestion des publications](https://docs.nocobase.com/ai-builder/publish) — publication multi-environnements, sauvegarde/restauration et migration

Grâce aux compétences, l'IA peut comprendre plus précisément le système de configuration de NocoBase et fournir une assistance plus intelligente lors de la construction et de la gestion des systèmes.

**Remarque** : Les compétences NocoBase sont encore en cours d'amélioration active. Les compétences NocoBase sont également installées automatiquement lors de l'installation et de l'initialisation de la CLI NocoBase, donc dans la plupart des cas, vous n'avez pas besoin de les installer séparément.

Documentation associée :

- [Compétences NocoBase](https://github.com/nocobase/skills)

### Plugin de développement IA

Cette version comble les lacunes des capacités fondamentales nécessaires au développement de plugins IA, permettant à l'IA de participer non seulement à la construction d'applications, mais aussi au développement de plugins personnalisés.

Cela se manifeste dans trois domaines principaux :

- Un pipeline de construction unifié `rsbuild/rspack`, consolidant le développement de plugins et le système de construction frontend
- Une capacité `client-v2` et un système de routage `/v/` destinés au développement IA, préparant le développement de plugins clients de nouvelle génération
- Des compétences de développement de plugins IA qui aident l'IA à mieux comprendre la structure des plugins, l'organisation du code et les modèles d'implémentation

La préparation autour de `client-v2` comprend :

- `@nocobase/app` expose le point d'entrée `client-v2`
- Le noyau intègre un package `@nocobase/client-v2` avec des composants de base, des utilitaires et des définitions de types
- Chaque plugin obtient un répertoire `/src/client-v2`
- Une nouvelle route `/v/` est ajoutée — encore en cours d'amélioration active, disponible pour les premiers utilisateurs
- Le noyau migre progressivement vers V2
- Les plugins migrent progressivement vers V2

Un pipeline de construction unifié réduit le coût du développement et du débogage des plugins frontend. Le déploiement progressif de `client-v2` donne également à l'IA une structure cible plus stable pour générer et maintenir le code des plugins.

En pratique : vous pouvez décrire un besoin de plugin en langage naturel, et l'IA vous aide à générer le code frontend et backend, les tables de données, les API, la configuration des permissions et le contenu i18n.

**Remarque** : Le développement de plugins IA est uniquement destiné aux nouveaux plugins de style `client-v2`. Nous suivrons avec une documentation de migration et des compétences pour passer des plugins `client-v1` à `client-v2`, afin de vous aider à intégrer les plugins existants dans le nouveau système.

Documentation associée :

- [Démarrage rapide du plugin de développement IA](https://docs.nocobase.com/ai-dev/)
- [Développement de plugins](https://docs.nocobase.com/plugin-development/)

### Améliorations des employés IA

La construction assistée par IA répond à la question « comment utiliser l'IA pour construire un système » ; les employés IA répondent à la question « comment laisser l'IA travailler à l'intérieur du système pour résoudre des problèmes métier concrets ».

Les employés IA existaient dans les versions précédentes, mais dans cette version, les capacités associées ont été améliorées et le noyau IA a été enrichi :

- [Prise en charge de MCP](https://docs.nocobase.com/ai-employees/features/mcp)
- [Nouvel atlas des employés IA](https://docs.nocobase.com/ai-employees/features/built-in-employee#default-ai-employee-atlas), jouant un rôle de chef d'équipe et dispatchant d'autres employés IA pour accomplir des tâches en fonction de l'intention de l'utilisateur
- [Nœud de workflow pour employé IA](https://docs.nocobase.com/ai-employees/workflow/nodes/employee/configuration)
- [Outil de recherche web basé sur LLM](https://docs.nocobase.com/ai-employees/features/web-search)
- [Nouvel outil de requête agrégée et outil de génération de rapports](https://docs.nocobase.com/ai-employees/scenarios/business-report) pour produire des rapports d'analyse métier
- [Nouvelle ingénieure en localisation Lina](https://docs.nocobase.com/ai-employees/built-in/lina), un employé IA intégré du plugin de localisation utilisé pour la traduction de localisation du système, prenant en charge les périmètres de traduction incrémentielle, sélectionnée et complète

Ces améliorations portent les capacités d'extensibilité, d'orchestration et d'exécution des employés IA dans les systèmes métier à un niveau supérieur. Les employés IA peuvent comprendre le contexte métier actuel, invoquer des compétences pour exécuter des tâches spécifiques, participer à des workflows automatisés et combiner des informations externes pour fournir des analyses et des résultats.

La version officielle ajoute également la prise en charge du chargement de fichiers à partir des champs de pièces jointes des workflows par les employés IA, ainsi que la gestion de plusieurs conversations en parallèle, améliorant encore l'utilisabilité des employés IA dans les processus métier réels.

Documentation associée :

- [Employés IA](https://docs.nocobase.com/ai-employees/)
- [Lina : Ingénieure en localisation](https://docs.nocobase.com/ai-employees/built-in/lina)
- [Traduire les termes de localisation avec Lina et un modèle local HY-MT1.5-1.8B](https://docs.nocobase.com/ai-employees/scenarios/localization-hy-mt)

### Contrôle de version

Le contrôle de version vous aide à mieux gérer les itérations de version et l'historique des modifications de votre application. Vous pouvez créer, visualiser et restaurer différentes versions d'une application, ce qui facilite le changement de version et la récupération en cas de problème lors du développement et des opérations. **Remarque : Cette fonctionnalité nécessite l'édition Professionnelle ou supérieure.**

![](https://static-docs.nocobase.com/20260526220510.png)

Documentation associée :

- [Contrôle de version](https://docs.nocobase.com/ops-management/version-control/)
- [Gestionnaire de sauvegarde](https://docs.nocobase.com/ops-management/backup-manager/)

### Améliorations multi-applications

Dans cette version, nous avons apporté quelques améliorations importantes aux déploiements multi-applications, principalement dans trois domaines :

- [Nouveau bloc d'application et sélecteur d'application](https://docs.nocobase.com/multi-app/multi-app/app-block-and-switcher), qui vous permettent d'afficher les points d'entrée vers d'autres sous-applications sur une page, facilitant ainsi le passage des utilisateurs entre l'application principale et les sous-applications.

![](https://static-docs.nocobase.com/202605271403304.png)

- [Nouvelle authentification unique (SSO) pour les applications](https://docs.nocobase.com/multi-app/multi-app/app-sso). Lorsqu'un utilisateur accède à une sous-application depuis l'application principale, ou bascule entre des sous-applications, le système tente de le connecter automatiquement à la sous-application cible en utilisant l'utilisateur actuellement connecté. Les utilisateurs n'ont plus besoin de saisir à nouveau leurs identifiants dans chaque sous-application.

![](https://static-docs.nocobase.com/202605271406542.png)

- [Appel des API des sous-applications](https://docs.nocobase.com/multi-app/multi-app/sub-app-api). Dans les scénarios multi-applications, chaque sous-application possède sa propre API indépendante, distinguée par un préfixe de chemin, des paramètres, etc., ce qui facilite l'appel de l'API d'une sous-application.

Ces améliorations sont très pratiques pour les utilisateurs qui déploient plusieurs applications, facilitant l'échange de données et les opérations entre plusieurs applications et améliorant l'efficacité globale de la collaboration des systèmes multi-applications.

Documentation associée :

- [Bloc d'application et sélecteur d'application](https://docs.nocobase.com/multi-app/multi-app/app-block-and-switcher)
- [Authentification unique (SSO) pour les applications](https://docs.nocobase.com/multi-app/multi-app/app-sso)
- [Appel des API des sous-applications](https://docs.nocobase.com/multi-app/multi-app/sub-app-api)

### Améliorations des workflows

Cette version améliore la **contrôlabilité et l'observabilité** des workflows :

- Ajout d'un contrôle de délai d'attente — les workflows qui s'exécutent trop longtemps sont automatiquement interrompus (les sous-workflows prennent également en charge la configuration du délai d'attente)
- Ajout des champs « créé par » et « mis à jour par »
- Ajout d'un champ de journal aux nœuds de tâche, facilitant la visualisation des journaux des nœuds lors du débogage
- Le déclencheur Webhook (mode synchrone) renvoie un statut de réponse 408 en cas de dépassement du délai d'attente

Documentation associée :

- [Workflow](https://docs.nocobase.com/workflow/)

### Champ de signature manuscrite

Ajout d'un champ de signature manuscrite qui vous permet de dessiner et d'enregistrer une signature dans un formulaire, adapté aux scénarios d'approbation, de feuilles de confirmation, de reçus, etc.

Documentation associée :

- [Champ de signature manuscrite](https://docs.nocobase.com/data-sources/field-signature/)

### Action JS Item

Ajout de l'action JS Item, qui vous permet d'exécuter une logique personnalisée dans une action en écrivant du JS, en travaillant avec les flux d'événements pour répondre à des besoins d'interaction plus flexibles.

Documentation associée :

- [Action JS Item](https://docs.nocobase.com/interface-builder/actions/types/js-item)

### Adaptation à la version 2.0 et nouvelles fonctionnalités

Au-delà de l'IA, cette version continue de migrer les modules de fonctionnalités clés vers la version 2.0, tout en déployant de nouvelles fonctionnalités pour des scénarios métier réels.

Nouvelles fonctionnalités

- [Champ de signature manuscrite](https://docs.nocobase.com/data-sources/field-signature/)
- [Action JS Item](https://docs.nocobase.com/interface-builder/actions/types/js-item)

Adaptation à la version 2.0

- [Requête personnalisée](https://docs.nocobase.com/interface-builder/actions/types/custom-request)
- [Bloc de filtre arborescent](https://docs.nocobase.com/interface-builder/blocks/filter-blocks/tree)
- [Bloc calendrier](https://docs.nocobase.com/data-sources/calendar/)
- [Bloc Kanban](https://docs.nocobase.com/interface-builder/blocks/data-blocks/kanban)
- [Bloc Gantt](https://docs.nocobase.com/plugins/@nocobase/plugin-gantt)
- [Bloc liste](https://docs.nocobase.com/interface-builder/blocks/data-blocks/list)
- [Bloc carte en grille](https://docs.nocobase.com/interface-builder/blocks/data-blocks/grid-card)
- [Bloc carte](https://docs.nocobase.com/plugins/@nocobase/plugin-map)
- [Bloc Markdown](https://docs.nocobase.com/interface-builder/blocks/other-blocks/markdown)
- [Bloc iframe](https://docs.nocobase.com/integration/embed)
- [Bloc graphique / Visualisation des données](https://docs.nocobase.com/data-visualization)

## Documentation multilingue

- Ajout de la documentation en indonésien et en vietnamien
