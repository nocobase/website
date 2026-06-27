---
title: "Créer des outils internes avec Codex : 6 projets open source pour les développeurs"
description: "Découvrez des projets open source tels que NocoBase, Refine et Payload CMS qui aident Codex à construire des outils internes plus stables et maintenables."
---

## Contexte

Récemment, je suis tombé sur une discussion à propos des agents de codage IA sur [Hacker News](https://news.ycombinator.com/item?id=47796469) : **demander à l'IA de construire une application de zéro n'est généralement pas la manière la plus fiable de l'utiliser.**

![HN.png](https://static-docs.nocobase.com/HN-nb8ae5.png)

Le développeur a souligné que si vous dites simplement à l'IA « Aide-moi à construire une application », elle génère souvent quelque chose qui **a l'air bien au premier abord, mais dont la structure sous-jacente n'est pas fiable.**

L'IA est excellente pour améliorer la vitesse d'exécution, mais elle fonctionne mieux lorsqu'elle opère dans une structure claire.

Pour les véritables outils internes d'entreprise, vous avez d'abord besoin d'une base technique fiable, puis d'utiliser un agent de codage pour améliorer l'efficacité du développement.

Dans cet article, nous nous concentrerons sur les outils internes d'entreprise et recommanderons plusieurs projets open source qui fonctionnent bien avec Codex, aidant les développeurs à construire des systèmes et des outils internes plus efficacement.

---

💬 Hé, vous lisez le blog NocoBase. NocoBase est la plateforme de développement no-code/low-code alimentée par l'IA la plus extensible pour construire des applications d'entreprise, des outils internes et toutes sortes de systèmes. Elle est entièrement auto-hébergée, basée sur des plugins et conviviale pour les développeurs. → [Découvrez NocoBase sur GitHub](https://github.com/nocobase/nocobase)

---

| Projet      | Idéal pour                                                                                 | Mieux adapté pour                                                                              |
| ----------- | ------------------------------------------------------------------------------------------ | ---------------------------------------------------------------------------------------------- |
| NocoBase    | Construire des systèmes métier internes tels que CRM, ticketing, approbation et gestion d'actifs | Développeurs qui ont besoin de construire rapidement des systèmes métier maintenables           |
| Refine      | Construire des panneaux d'administration React, des tableaux de bord et des applications B2B | Développeurs familiers avec React qui veulent un contrôle total sur le code                     |
| Payload CMS | Construire des backends de données et des systèmes d'administration TypeScript / Next.js    | Développeurs qui préfèrent un backend et un panneau d'administration axés TypeScript            |
| Directus    | Générer des API et des panneaux d'administration pour des bases de données SQL existantes   | Équipes avec des bases de données existantes qui ont besoin rapidement d'un panneau d'administration et d'une couche API |
| Supabase    | Construire un backend Postgres pour des outils internes                                     | Développeurs qui ont besoin d'authentification, de base de données, de stockage, de fonctionnalités temps réel et de fonctions backend |
| Windmill    | Transformer des scripts en outils internes, tâches et workflows                             | Équipes techniques avec de nombreux scripts internes et tâches d'automatisation                |

## 1. NocoBase

Site officiel : [https://www.nocobase.com/](https://www.nocobase.com/)

GitHub : [https://github.com/nocobase/nocobase](https://github.com/nocobase/nocobase)

Stars GitHub : 22,4k

![NocoBase1.png](https://static-docs.nocobase.com/NocoBase1-nfhndl.png)

NocoBase est une plateforme no-code IA open source pour construire des systèmes internes d'entreprise tels que CRM, systèmes de ticketing, systèmes d'approbation, gestion de projet, gestion d'actifs et backends opérationnels.

La valeur fondamentale de NocoBase **est qu'il fournit un cadre système complet pour les outils internes**, incluant des modèles de données, la configuration de pages, le contrôle des permissions, les workflows, les extensions de plugins et les capacités IA. Pour les développeurs, c'est plus qu'un constructeur de pages par glisser-déposer. C'est une infrastructure de système métier qui peut encore être étendue avec du code.

NocoBase fournit une documentation officielle Codex : [Utiliser Codex avec NocoBase pour la construction et le développement](https://docs.nocobase.com/en/ai/codex)

Après avoir connecté Codex, Codex peut utiliser [NocoBase Skills](https://docs.nocobase.com/en/ai-builder#nocobase-skills) et la [CLI](https://docs.nocobase.com/en/api/cli/) pour comprendre comment NocoBase est configuré et développé. Il peut aider les développeurs à créer des tables de données, configurer des pages, concevoir des workflows, définir des permissions, et gérer le développement de plugins, les extensions de fonctionnalités et le dépannage via le langage naturel.

![NocoBase2.png](https://static-docs.nocobase.com/NocoBase2-40774f.png)

**Comparé au fait de demander à Codex de générer un système interne de zéro, NocoBase lui donne un cadre système plus stable dans lequel travailler**. Le résultat n'est pas un code jetable difficile à maintenir, mais un système qui fonctionne dans le cadre NocoBase et qui peut être continuellement amélioré.

![NocoBase3.png](https://static-docs.nocobase.com/NocoBase3-qu1ijq.png)

Au-delà de l'étape de construction initiale, NocoBase offre également des capacités d'employé IA. Les employés IA peuvent travailler avec les pages métier, les tables de données et le contexte des workflows pour aider à l'organisation des données, l'analyse des données, la traduction, la recherche, le traitement des e-mails, la modélisation des données, la configuration de graphiques, etc. En d'autres termes, Codex est mieux adapté pour aider les développeurs à construire et étendre des systèmes, tandis que les employés IA de NocoBase peuvent participer aux opérations métier quotidiennes après la mise en service du système.

![ai员工填表单-yhms5j.gif](https://static-docs.nocobase.com/ai%E5%91%98%E5%B7%A5%E5%A1%AB%E8%A1%A8%E5%8D%95-yhms5j.gif)

En configurant les services LLM, les Skills, les bases de connaissances et les tâches rapides, les employés IA peuvent s'intégrer plus naturellement dans les opérations métier réelles, aidant les équipes à améliorer à la fois la construction du système et l'efficacité d'utilisation quotidienne.

### Ce que vous pouvez construire avec Codex et NocoBase

Codex et NocoBase peuvent aider les développeurs à construire plus rapidement des systèmes internes d'entreprise maintenables, tels que :

* CRM
* Systèmes de ticketing
* Systèmes d'approbation
* Gestion de projet
* Gestion d'actifs
* Backends opérationnels
* Tableaux de bord de données

Codex s'occupe de la compréhension des besoins, de la décomposition de la structure métier et de la génération de l'implémentation. NocoBase fournit les modèles de données, les permissions, les pages, les workflows et les extensions de plugins. Au lieu de demander à l'IA de générer du code difficile à maintenir de zéro, les développeurs peuvent laisser Codex construire et développer dans le cadre système existant de NocoBase.

### Suggestion de prompt

#### Installer NocoBase

Copiez le prompt ci-dessous dans Codex pour installer et configurer automatiquement NocoBase :

```text
Aide-moi à installer la CLI NocoBase et à terminer l'initialisation : https://docs.nocobase.com/en/ai/ai-quick-start.md Veuillez ouvrir et lire le lien directement.
```

#### Concevoir un système

```text
Aide-moi à utiliser la compétence nocobase-dsl-reconciler pour construire un système de gestion des tickets, incluant un tableau de bord, une liste de tickets, la gestion des utilisateurs et la configuration SLA.
```

#### Résultat réel

![NocoBase4.png](https://static-docs.nocobase.com/NocoBase4-1klco2.png)

![NocoBase5.png](https://static-docs.nocobase.com/NocoBase5-fhuwo3.png)

### Ressources associées

Vous pouvez copier ces liens et les envoyer à Codex pour une utilisation directe.

Documentation : [https://docs.nocobase.com/en/ai/](https://docs.nocobase.com/en/ai/)

CLI : [https://docs.nocobase.com/en/api/cli/](https://docs.nocobase.com/en/api/cli/)

Skills : [https://docs.nocobase.com/en/ai-builder#nocobase-skills](https://docs.nocobase.com/en/ai-builder#nocobase-skills)

MCP : [https://docs.nocobase.com/en/ai/mcp/](https://docs.nocobase.com/en/ai/mcp/)

## 2. Refine

Site officiel : [https://refine.dev/](https://refine.dev/)

GitHub : [https://github.com/refinedev/refine](https://github.com/refinedev/refine)

Stars GitHub : 34,7k

![Refine1.png](https://static-docs.nocobase.com/Refine1-8qgxcz.png)

Refine est un framework React open source pour les développeurs. Il est principalement utilisé pour construire des outils internes, des panneaux d'administration, des tableaux de bord et des applications B2B. Il fournit des capacités de base telles que l'authentification, le contrôle des permissions, le routage, la récupération de données, la gestion d'état et l'internationalisation, ce qui le rend adapté à la construction rapide d'applications à forte composante CRUD.

Refine renforce également son support pour les scénarios d'agents IA. Il fournit un workflow conçu pour les applications générées par IA : se connecter à une API REST existante ou à un projet Supabase, analyser la structure backend et créer des plans pour les agents IA afin que les résultats générés correspondent mieux aux modèles de données réels.

C'est pourquoi Refine fonctionne bien avec Codex. Codex n'a pas besoin de deviner comment un outil interne doit être construit de zéro. Il peut générer des pages de liste, des pages de détail, des pages d'édition, des formulaires, des filtres, des vérifications de permissions et la logique d'appel API en fonction de la structure du projet Refine, du modèle de ressource et de la configuration de la source de données.

![Refine2.png](https://static-docs.nocobase.com/Refine2-jpcnwg.png)

Refine fournit également une CLI pour créer des ressources, gérer les mises à jour, échanger des composants et exécuter des tâches de projet telles que build, start et dev. Pour les agents de codage comme Codex, ces points d'entrée en ligne de commande clairs sont plus faciles à automatiser et mieux adaptés à l'itération continue dans des projets existants.

### Ce que vous pouvez construire avec Codex et Refine

Codex et Refine sont particulièrement adaptés au développement rapide d'interfaces d'administration internes dans la stack React, comme les backends CRM, les backends de gestion de commandes, les plateformes de révision opérationnelle, les postes de travail du service client, les panneaux de gestion de données et les portails d'administration SaaS B2B.

Par exemple, si vous voulez construire un backend de gestion de commandes, Codex peut générer des listes de commandes, des pages de détail de commandes, des formulaires d'édition, des filtres, des boutons de mise à jour de statut et la logique de permissions en fonction de structures de données telles que les commandes, les clients, les produits et le statut de paiement. Refine fournit la structure de base pour les outils internes React, tandis que Codex accélère le développement de pages métier spécifiques.

Cette configuration est meilleure pour les développeurs qui veulent un contrôle total sur le code. Le résultat final est un projet React, plutôt qu'une configuration verrouillée dans une plateforme fermée. Vous pouvez continuer à utiliser Codex plus tard pour modifier des composants, refactoriser la logique, connecter de nouvelles API ou étendre des modules métier.

### Suggestion de prompt

```text
Aide-moi à créer un backend de gestion de commandes basé sur Refine, en utilisant une API REST comme source de données. Il doit inclure une liste de commandes, les détails des commandes, un formulaire d'édition de commandes, des filtres clients, des mises à jour de statut de commande et un contrôle de permissions de base.
```

## 3. Payload CMS

Site officiel : [https://payloadcms.com/](https://payloadcms.com/)

GitHub : [https://github.com/payloadcms/payload](https://github.com/payloadcms/payload)

Stars GitHub : 42,5k

![Payload CMS1.png](https://static-docs.nocobase.com/Payload%20CMS1-9l7yh9.png)

Payload CMS est un framework full-stack Next.js open source pour la construction de CMS, de panneaux d'administration, d'applications axées sur les données et d'outils internes d'entreprise. Il fournit une configuration TypeScript, des collections de données, un contrôle des permissions, un panneau d'administration, des API REST / GraphQL, des Hooks, des plugins, la gestion de fichiers, etc.

Payload définit les modèles de données et la logique métier via le code. Vous pouvez configurer des collections, des champs, le contrôle d'accès, des hooks et l'interface utilisateur d'administration en TypeScript, en gardant le backend, l'API et l'interface d'administration d'un outil interne dans une seule base de code.

Payload a également commencé à prendre en charge les scénarios d'agents IA. Sa documentation officielle fournit un plugin MCP qui permet aux développeurs de contrôler les collections et les globals que l'IA peut utiliser pour des opérations telles que find, create, update et delete. Les développeurs peuvent également définir leurs propres prompts, outils et ressources.

![Payload CMS2.png](https://static-docs.nocobase.com/Payload%20CMS2-jczl8t.png)

### Ce que vous pouvez construire avec Codex et Payload

Codex et Payload sont adaptés au développement rapide de backends de données, de systèmes de gestion de contenu, de portails clients, de backends de commandes, de systèmes de gestion d'actifs et d'outils de gestion opérationnelle basés sur TypeScript / Next.js.

![Payload CMS3.png](https://static-docs.nocobase.com/Payload%20CMS3-lejqn0.png)

Par exemple, si vous voulez construire un backend de gestion d'actifs, Codex peut générer des collections Payload, des configurations de champs, des permissions d'accès et des hooks en fonction des besoins tels que les équipements, les employés, les départements, les enregistrements d'utilisation, les enregistrements de maintenance et le statut d'approbation. Payload fournit l'interface de gestion des données, les API et l'application des permissions. Si vous devez ajouter plus de logique métier plus tard, vous pouvez continuer à utiliser Codex pour modifier les configurations TypeScript et le code d'extension.

### Suggestion de prompt

```text
Aide-moi à créer un backend de gestion d'actifs basé sur Payload CMS, incluant des collections pour les équipements, les employés, les départements, les enregistrements d'utilisation et les enregistrements de maintenance. Configure également les champs de base, les permissions d'accès, les champs d'affichage du panneau d'administration et les hooks courants.
```

## 4. Directus

Site officiel : [https://directus.io/](https://directus.io/)

GitHub : [https://github.com/directus/directus](https://github.com/directus/directus)

Stars GitHub : 35,7k

![Directus1.png](https://static-docs.nocobase.com/Directus1-7w23p8.png)

Directus est une plateforme backend de données open source qui peut rapidement transformer des bases de données SQL telles que PostgreSQL, MySQL, SQLite, MariaDB, MS SQL et OracleDB en API REST / GraphQL et en un panneau d'administration visuel. Il est adapté à la construction de backends de gestion de données, de systèmes de gestion de contenu, de backends opérationnels, de backends de données clients, de couches API internes, etc.

Directus est particulièrement convivial pour les bases de données existantes. De nombreux outils internes ne partent pas de zéro. Une base de données métier peut déjà exister, mais l'équipe manque encore d'un panneau d'administration utilisable, d'une gestion des permissions et d'une couche API. Directus peut se connecter directement à une base de données SQL existante et fournir une gestion de modèles de données, des permissions de rôles, une gestion de fichiers, des workflows d'automatisation et des capacités d'extension par-dessus.

Directus fournit déjà un serveur MCP, permettant à des outils IA tels que Claude, ChatGPT et Cursor de se connecter à Directus. L'IA peut créer, éditer et gérer du contenu dans le système de permissions existant, sans copier les données ailleurs ni contourner les contrôles de permissions de Directus.

![Directus2.png](https://static-docs.nocobase.com/Directus2-otlau7.png)

### Ce que vous pouvez construire avec Codex et Directus

Codex et Directus sont adaptés à la construction rapide de backends de données internes et de couches API sur des bases de données existantes, comme la gestion de données clients, la gestion de données de commandes, la gestion de contenu, la gestion de catalogues de produits, les backends de configuration opérationnelle et les systèmes de révision de données.

La valeur de cette combinaison est claire : Directus connecte la base de données, génère des API, fournit le panneau d'administration et gère les permissions. Codex comprend les besoins métier, conçoit les structures de données, écrit la logique d'extension, les Hooks, les points de terminaison personnalisés, les scripts de données et le code d'intégration frontend.

L'avantage est que les développeurs n'ont pas besoin de réécrire les bases de données ou les backends existants. Directus fournit la couche de données et le panneau d'administration, tandis que Codex accélère la logique métier et le développement d'extensions. Cela rend la combinaison adaptée aux équipes qui ont déjà une base de données mais qui ont besoin d'ajouter rapidement des capacités d'outils internes.

### Suggestion de prompt

```text
Aide-moi à concevoir un panneau d'administration interne pour une base de données de commandes existante basée sur Directus. Il doit inclure quatre types de données : commandes, clients, produits et enregistrements de paiement. Configure également les permissions de base, les vues de liste, les workflows de mise à jour de statut et un Hook de notification après un changement de statut de commande.
```

## 5. Supabase

Site officiel : [https://supabase.com/](https://supabase.com/)

GitHub : [https://github.com/supabase/supabase](https://github.com/supabase/supabase)

Stars GitHub : 103k

Supabase n'a probablement pas besoin d'être présenté.

Supabase fournit un serveur MCP Supabase officiel qui permet aux outils IA de se connecter à des projets Supabase et de les interroger ou de les manipuler dans le cadre des permissions autorisées. Supabase fournit également des compétences pour les agents IA, couvrant les bases de données, Auth, Edge Functions, Realtime, Storage, Vectors, Cron, Queues, CLI, MCP, les modifications de schéma, les migrations, les politiques RLS, les audits de sécurité, etc.

![Supabase1-rq907o.png](https://static-docs.nocobase.com/Supabase1-rq907o.png)

### Que pouvez-vous construire avec Codex et Supabase ?

Codex et Supabase sont adaptés à la construction rapide de la couche backend des outils internes. Supabase fournit la base de données, l'authentification, l'API, le stockage et l'environnement d'exécution des fonctions. Codex conçoit les schémas en fonction des besoins métier, écrit du SQL, configure les permissions RLS, génère des Edge Functions et aide le frontend à appeler les API Supabase.

Par exemple, si vous voulez construire un backend de gestion de clients, Codex peut concevoir des tables Postgres, des relations de champs, des index et des politiques RLS en fonction des besoins tels que les clients, les contacts, les enregistrements de suivi, les opportunités de vente, les contrats et les pièces jointes. Supabase fournit la base de données, l'authentification, les API automatiques et l'application des permissions. Plus tard, si vous avez besoin d'une attribution automatique des clients, d'une synchronisation de données externes ou d'une génération de résumé IA, vous pouvez continuer à utiliser Codex pour écrire des Edge Functions ou des fonctions de base de données.

### Suggestion de prompt

```text
Aide-moi à concevoir le backend d'un système de gestion de clients basé sur Supabase. Il doit inclure des tables pour les clients, les contacts, les opportunités, les contrats, les suivis et les pièces jointes. Veuillez générer la migration SQL, les index de base, les politiques RLS, la conception de l'authentification et des permissions, et une Edge Function pour l'attribution automatique des responsables commerciaux.
```

## 6. Windmill

Site officiel : [https://www.windmill.dev/](https://www.windmill.dev/)

GitHub : [https://github.com/windmill-labs/windmill](https://github.com/windmill-labs/windmill)

Stars GitHub : 16,5k

Windmill est une plateforme open source pour les développeurs. Elle peut rapidement transformer des scripts écrits en Python, TypeScript, Go, Bash, SQL et d'autres langages en API, tâches d'arrière-plan, workflows et applications internes. Elle est adaptée à la construction de workflows d'automatisation, de tâches de traitement de données, d'outils opérationnels, de gestion de tâches d'arrière-plan, de plateformes de scripts internes et d'interfaces d'administration légères.

![Windmill1-kcvxsb.png](https://static-docs.nocobase.com/Windmill1-kcvxsb.png)

Avec sa CLI et ses compétences IA intégrées, Windmill permet aux développeurs d'utiliser Claude Code ou Codex localement, puis de déployer vers un espace de travail distant via `wmill sync push`. Dans cette configuration, Codex écrit les scripts et la logique des workflows, tandis que Windmill gère l'exécution, la planification, les permissions, les journaux et les interfaces d'exploitation visuelles.

### Ce que vous pouvez construire avec Codex et Windmill

Codex et Windmill sont particulièrement adaptés pour transformer des scripts écrits par des développeurs en outils internes que toute l'équipe peut utiliser. Les exemples incluent la synchronisation de données, la génération de rapports, l'import et l'export par lots, le traitement Webhook, les tâches planifiées, le nettoyage de données clients, la synchronisation de statut de commandes, les notifications Slack / Email et les workflows de traitement de données IA.

Par exemple, si vous voulez construire un workflow interne qui synchronise les données clients CRM chaque nuit et génère un rapport d'exceptions, Codex peut aider à écrire des scripts pour la lecture, le nettoyage, la comparaison et le rapport des données. Windmill peut configurer le workflow comme une tâche planifiée, enregistrer les journaux d'exécution et fournir une page interne où l'équipe peut déclencher manuellement le workflow ou visualiser les résultats.

### Suggestion de prompt

```text
Aide-moi à créer un workflow de synchronisation de données clients basé sur Windmill : lire les données clients de PostgreSQL chaque nuit, nettoyer les enregistrements en double, identifier les e-mails anormaux, générer un rapport d'exceptions et notifier l'équipe opérationnelle via Slack. Veuillez écrire le script en TypeScript et expliquer comment configurer la tâche planifiée et les paramètres d'entrée.
```

## Réflexions finales

Les agents de codage IA comme Codex changent la façon dont les développeurs construisent des outils internes.

NocoBase, Refine, Payload, Directus, Supabase et Windmill fournissent chacun une base d'ingénierie plus claire sous différents angles, notamment les systèmes métier, les frameworks frontend, les backends de données, les services backend et l'automatisation de scripts.

La valeur de Codex est qu'il améliore l'efficacité du développement sur ces bases : il vous aide à décomposer les besoins, générer du code, configurer des ressources, écrire des scripts, concevoir des workflows, gérer les intégrations et résoudre les problèmes.

Une meilleure approche de développement est la suivante :

> Choisissez d'abord la bonne infrastructure open source, puis laissez Codex réaliser l'implémentation spécifique dans une structure claire.

Les outils internes construits de cette manière sont plus faciles à maintenir, à étendre et à mettre en service.

**Lectures connexes**

* [Après Claude Code : 6 outils open source que vous devriez connaître](https://www.nocobase.com/en/blog/open-source-tools-after-claude-code)
* [Top 10 des outils IA et no-code open source pour le développement de logiciels d'entreprise](https://www.nocobase.com/en/blog/open-source-ai-no-code-tools-enterprise-software-development)
* [8 plateformes d'agents IA open source pour construire des outils internes](https://www.nocobase.com/en/blog/8-open-source-ai-agent-platforms-for-internal-tools)
* [Les meilleurs CRM auto-hébergés de qualité entreprise avec RBAC, IA et support d'API ouverte](https://www.nocobase.com/en/blog/the-best-self-hosted-crm-for-enterprise-teams)
* [6 meilleurs outils open source pour remplacer les middlewares d'intégration personnalisés](https://www.nocobase.com/en/blog/6-open-source-integration-tools-to-replace-custom-middleware)
* [Remplacer Excel par NocoBase ou Airtable ? Une comparaison coût par coût](https://www.nocobase.com/en/blog/airtable-vs-nocobase-migration-cost-comparison)
* [4 façons de construire rapidement des applications Web à partir de données Excel](https://www.nocobase.com/en/blog/excel-to-web-app-4-methods)
* [Pas seulement PostgreSQL : comparaison de 5 plateformes no-code/low-code avec support de bases de données externes](https://www.nocobase.com/en/blog/5-no-code-low-code-platforms-supporting-external-databases-mysql-mongodb-api)
* [Guide de sélection d'outils de gestion de projet open source, édition 2026](https://www.nocobase.com/en/blog/open-source-project-management-tool-selection-guide-2026-edition)
* [Comment construire un CRM personnalisé avec PostgreSQL](https://www.nocobase.com/en/blog/how-to-build-a-custom-crm-with-postgresql)
* [Top 20 des projets IA sur GitHub à suivre en 2026 : pas seulement OpenClaw](https://www.nocobase.com/en/blog/best-open-source-ai-projects-github-2026)
