---
title: "6 outils open source à utiliser avec WorkBuddy"
description: "Découvrez six outils open source, dont NocoBase, Activepieces et Twenty, et apprenez comment ils fonctionnent avec WorkBuddy pour connecter les systèmes d'entreprise, automatiser les flux de travail, gérer la relation client, la gestion de projet, les API de données et l'analyse BI."
---

## Qu'est-ce que WorkBuddy ?

WorkBuddy est un espace de travail IA pour les tâches professionnelles, lancé par Tencent. Il est principalement conçu pour le travail de bureau en entreprise, le traitement de fichiers, l'analyse de données et la gestion de tâches multi-étapes.![WorkBuddy-8xxz2q.png](https://static-docs.nocobase.com/WorkBuddy-8xxz2q.png)

Comparé à des outils comme OpenClaw, Claude Code et Codex, WorkBuddy a un objectif différent. OpenClaw met l'accent sur les capacités d'Agent ouvertes et un écosystème de compétences multiplateforme. Claude Code et Codex sont mieux adaptés à la génération de code, à la collaboration de développement et aux tâches d'ingénierie. WorkBuddy est davantage axé sur les scénarios professionnels. Il peut se connecter à des outils de communication et de collaboration courants tels que WeChat, QQ, WeCom, Feishu et DingTalk, permettant aux utilisateurs de démarrer des tâches à partir de points d'entrée de travail familiers.

Si une équipe souhaite se connecter plus profondément aux systèmes métier d'entreprise et aux flux de travail internes, WorkBuddy peut également servir de point d'entrée de tâches IA et de couche d'orchestration. WorkBuddy reçoit des instructions, décompose les tâches et renvoie les résultats. Les outils open source fournissent les systèmes métier sous-jacents, les flux de travail d'automatisation, le CRM, la gestion de projet, les API de données et les capacités d'analyse BI.

---

💬 Hé, vous lisez le blog NocoBase. NocoBase est la plateforme de développement low-code/no-code alimentée par l'IA la plus extensible pour créer des applications d'entreprise, des outils internes et toutes sortes de systèmes. Elle est entièrement auto-hébergée, basée sur des plugins et conviviale pour les développeurs. →[ Découvrez NocoBase sur GitHub](https://github.com/nocobase/nocobase)

---



Cet article présente plusieurs outils open source qui fonctionnent bien avec WorkBuddy. Nous examinerons les capacités qu'ils peuvent apporter aux entreprises et les scénarios typiques qu'ils peuvent couvrir lorsqu'ils sont combinés avec WorkBuddy.

## 1. NocoBase : adapté à la création de systèmes métier personnalisés que WorkBuddy peut appeler

![NocoBase1-vpe2x5.png](https://static-docs.nocobase.com/NocoBase1-vpe2x5.png)

**Site officiel** : [https://www.nocobase.com/](https://www.nocobase.com/)

**GitHub** : [https://github.com/nocobase/nocobase](https://github.com/nocobase/nocobase)

**Étoiles GitHub** : 22,3k

**Documentation** : [https://docs.nocobase.com/](https://docs.nocobase.com/)

**Ressources associées** :

CLI : [https://docs.nocobase.com/en/api/cli/](https://docs.nocobase.com/en/api/cli/)

Compétences : [https://docs.nocobase.com/en/ai-builder#nocobase-skills](https://docs.nocobase.com/en/ai-builder#nocobase-skills)

MCP : [https://docs.nocobase.com/en/ai/mcp/](https://docs.nocobase.com/en/ai/mcp/)

WorkBuddy + NocoBase : [https://docs.nocobase.com/en/ai/workbuddy](https://docs.nocobase.com/en/ai/workbuddy)

### Présentation du produit

NocoBase est une plateforme de développement low-code / no-code open source alimentée par l'IA pour créer rapidement des applications d'entreprise, des outils internes et divers systèmes métier. Elle prend en charge le déploiement privé et est construite sur une architecture basée sur des plugins, ce qui la rend adaptée aux entreprises pour construire des CRM, ERP, systèmes d'approbation, systèmes de tickets, systèmes d'inventaire, systèmes de gestion de projet, backends opérationnels et autres systèmes en fonction de leurs propres besoins métier.

![NocoBase2-t4x1fo.png](https://static-docs.nocobase.com/NocoBase2-t4x1fo.png)

Pour les équipes qui souhaitent connecter WorkBuddy à des outils internes, NocoBase est mieux adapté en tant que couche d'application métier. Il fournit des structures de données stables, des limites d'autorisation, des règles de processus et des capacités système appelables.

NocoBase conçoit également ses capacités d'IA autour de systèmes métier réels. Il prend en charge les Employés IA, les Compétences IA, le CLI, le MCP, etc. Les Employés IA peuvent agir comme des assistants intelligents au sein du système et aider aux requêtes de données, à la génération de contenu, au traitement des tâches et à d'autres travaux. Les Compétences IA aident les Agents externes à comprendre comment NocoBase est configuré et ce qu'ils peuvent ou ne peuvent pas manipuler. Le CLI permet aux Agents d'exécuter des opérations d'installation, de création, de modification, etc., via des commandes. Le MCP fournit un point d'entrée plus standard pour que les outils d'IA externes se connectent à NocoBase.

![NocoBase3-ejtyuu.png](https://static-docs.nocobase.com/NocoBase3-ejtyuu.png)

### Avantages principaux

* **Piloté par le modèle de données** : NocoBase permet de définir d'abord les tables de données, les champs et les relations, puis de construire les pages et les interactions. Cela le rend plus adapté aux systèmes métier complexes qu'à la simple collecte de formulaires.
* **Adapté au déploiement privé** : Les entreprises peuvent déployer le système sur leurs propres serveurs, ce qui le rend mieux adapté aux systèmes internes ayant des exigences en matière de sécurité des données, de contrôle d'accès et de maintenance à long terme.
* **Capacités complètes d'autorisation et de flux de travail** : Il prend en charge les autorisations de rôle, les autorisations de champ, les autorisations de données et les autorisations d'opération. Les flux de travail peuvent également gérer les approbations, les notifications, les mises à jour de données, les Webhooks, les requêtes HTTP et d'autres processus.
* **Architecture de plugin flexible** : NocoBase utilise une architecture de micro-noyau basée sur des plugins. Les fonctionnalités peuvent être étendues via des plugins, ce qui le rend adapté aux entreprises qui ont besoin de personnaliser la logique métier au-delà des capacités standard.
* **Capacités d'IA plus proches des systèmes métier** : NocoBase prend en charge les Employés IA, les Compétences IA, les bases de connaissances et d'autres capacités. Ceux-ci peuvent fonctionner autour des pages, des tables de données, des enregistrements sélectionnés et des règles métier.

### Cas d'utilisation typiques avec WorkBuddy

Dans de nombreux scénarios, WorkBuddy reçoit des instructions, décompose les tâches et renvoie les résultats, tandis que NocoBase fournit des objets métier spécifiques et des capacités système, tels que les clients, les commandes, les approbations, les tickets, les stocks et les projets.

![NocoBase4-ono1dm.png](https://static-docs.nocobase.com/NocoBase4-ono1dm.png)

Voici 3 scénarios courants :

**CRM** Les entreprises peuvent utiliser NocoBase pour construire un système de gestion de la relation client et maintenir de manière centralisée les profils clients, le statut de suivi, les niveaux de clients, les responsables, les montants des contrats et d'autres informations. Les responsables commerciaux peuvent envoyer des instructions directement depuis WeCom ou Feishu et demander à WorkBuddy de rechercher les clients récemment ajoutés, les prospects non suivis depuis longtemps et les clients clés. NocoBase fournit les données clients, les autorisations et la logique de filtrage. Les Employés IA ou les Compétences associées peuvent aider davantage à organiser les priorités de suivi, à générer des résumés clients ou à créer des listes de tâches commerciales.

**Gestion des tickets** Dans les équipes de service après-vente ou d'exploitation, NocoBase peut enregistrer le statut des tickets, le type de problème, la priorité, le responsable et la date limite. Lors des vérifications quotidiennes ou des bilans hebdomadaires, les équipes peuvent demander à WorkBuddy de résumer les tickets en retard, les problèmes hautement prioritaires et les éléments en attente, puis de les classer par responsable, urgence ou type de problème, ce qui facilite la confirmation de l'ordre de traitement.

**Gestion de projet** Pour les managers, les approbations et l'avancement du projet sont souvent dispersés sur plusieurs nœuds. NocoBase peut gérer les flux de travail d'approbation, les jalons du projet, les responsables, les risques et le statut d'avancement. WorkBuddy peut extraire les approbations en attente, les tâches en retard et les risques du projet en fonction des instructions, puis générer des résumés par département, responsable ou priorité.

## 2. Activepieces : adapté pour connecter WorkBuddy à davantage de flux de travail d'automatisation

![Activepieces1-xrlqbe.png](https://static-docs.nocobase.com/Activepieces1-xrlqbe.png)

**Site officiel** : [https://www.activepieces.com/](https://www.activepieces.com/)

**GitHub** : [https://github.com/activepieces/activepieces](https://github.com/activepieces/activepieces)

**Étoiles GitHub** : environ 23k

**Documentation** : [https://www.activepieces.com/docs](https://www.activepieces.com/docs)

### Présentation du produit

Activepieces est une plateforme d'automatisation IA open source pour créer des flux de travail d'automatisation entre outils et systèmes. Elle peut connecter des API, des Webhooks, des bases de données, des feuilles de calcul, des e-mails, des CRM, des outils de gestion de projet et d'autres services tiers, transformant les opérations dispersées dans différents outils en flux de travail réutilisables.

Activepieces fonctionne bien avec WorkBuddy dans les scénarios où les instructions partent d'un point d'entrée de bureau et où les actions se produisent sur plusieurs systèmes. WorkBuddy peut recevoir des demandes de WeCom, Feishu, DingTalk et d'autres points d'entrée de travail. Activepieces exécute ensuite le flux de travail sous-jacent, comme la lecture de données, l'appel d'API, la synchronisation d'enregistrements, l'envoi de notifications ou le déclenchement de tâches de suivi.

### Avantages principaux

* **Forte connectivité inter-outils** : Adapté pour connecter des API, des Webhooks, des bases de données et des applications tierces, réduisant le travail manuel répétitif.
* **Adapté pour transformer l'automatisation en flux de travail réutilisables** : Les processus tels que la synchronisation des prospects, l'envoi de notifications, les mises à jour de feuilles de calcul, l'attribution de tâches et l'organisation des données peuvent être transformés en flux de travail fixes.
* **Prend en charge l'auto-hébergement** : Les entreprises peuvent le déployer dans leur propre environnement, ce qui facilite la gestion des clés, des données et des journaux d'exécution.
* **Proche de la façon dont les Agents IA appellent les outils** : Les pièces d'Activepieces peuvent être utilisées comme serveurs MCP, ce qui facilite la combinaison avec les outils Agent.

![Activepieces2-6x447z.png](https://static-docs.nocobase.com/Activepieces2-6x447z.png)

### Cas d'utilisation typiques avec WorkBuddy

Activepieces est adapté à l'automatisation inter-systèmes. Par exemple, les formulaires de site Web, les commentaires du support client, les Issues GitHub et les prospects commerciaux peuvent être dispersés dans différents outils. Les équipes peuvent d'abord utiliser Activepieces pour configurer des flux de travail de lecture, de déduplication, de classification et de synchronisation des données. Ensuite, avec une simple instruction WorkBuddy telle que « organise les nouveaux prospects d'aujourd'hui et regroupe-les par source et priorité », le résultat peut être renvoyé à un chat de groupe, un document ou une feuille de calcul.

## 3. Twenty : adapté pour construire une couche de données CRM auto-hébergée

![Twenty-tqe8g2.png](https://static-docs.nocobase.com/Twenty-tqe8g2.png)

**Site officiel** : [https://twenty.com/](https://twenty.com/)

**GitHub** : [https://github.com/twentyhq/twenty](https://github.com/twentyhq/twenty)

**Étoiles GitHub** : 49k

**Documentation** : [https://twenty.com/developers](https://twenty.com/developers)

### Présentation du produit

Twenty est un CRM open source, officiellement positionné comme une alternative open source à Salesforce. Il est adapté à la gestion des entreprises, des contacts, des relations clients, des opportunités, des tâches, des notes et des processus de vente. Les équipes techniques peuvent également le personnaliser en fonction de leurs propres processus métier.

Si une entreprise souhaite garder le contrôle des données clients et éviter de dépendre entièrement d'un CRM fermé, Twenty peut servir de couche de données clients derrière WorkBuddy. Les enregistrements clients, les opportunités et les enregistrements de suivi des ventes sont stockés dans Twenty, tandis que WorkBuddy reçoit les demandes de requête, d'organisation et de rappel à partir des points d'entrée de travail.

### Avantages principaux

* **Axé sur les scénarios CRM** : Mieux adapté à la gestion de la relation client, au suivi des opportunités, aux tâches de vente et à l'organisation des données clients.
* **Open source et auto-hébergeable** : Les entreprises peuvent mieux contrôler les données clients, les environnements système et les personnalisations futures.
* **Adapté à la personnalisation par les équipes techniques** : Les objets, les champs et les structures métier peuvent être ajustés autour du processus de vente propre à l'entreprise.
* **Objets métier plus ciblés** : Par rapport aux outils internes à usage général, la structure de données de Twenty est plus proche du travail quotidien des équipes commerciales.

### Cas d'utilisation typiques avec WorkBuddy

Les équipes commerciales peuvent maintenir les profils clients, les informations sur l'entreprise, les étapes des opportunités, les enregistrements de suivi et les actions suivantes dans Twenty. Lorsque les responsables commerciaux ont besoin de consulter les clients clés, ils n'ont pas nécessairement besoin d'entrer dans le backend CRM et de filtrer les enregistrements un par un. Ils peuvent lancer des requêtes via WorkBuddy, telles que « trouver les clients à forte valeur qui n'ont pas été suivis depuis 7 jours », « organiser les nouvelles opportunités de cette semaine » ou « lister les transactions à forte valeur sans action suivante ».

Twenty stocke et gère les données de vente. WorkBuddy organise les résultats des requêtes en listes de suivi, résumés de rappel ou rapports hebdomadaires. Cela aide les équipes à identifier rapidement les clients et les opportunités qui nécessitent un traitement prioritaire, et réduit le risque que les données de vente restent enfouies dans le backend CRM sans examen en temps opportun.

## 4. Plane : adapté pour permettre à WorkBuddy de lire le statut du projet et l'avancement des tâches

![Plane1-a68yj9.png](https://static-docs.nocobase.com/Plane1-a68yj9.png)

**Site officiel** : [https://plane.so/](https://plane.so/)

**GitHub** : [https://github.com/makeplane/plane](https://github.com/makeplane/plane)

**Étoiles GitHub** : 49,8k

**Documentation** : [https://docs.plane.so/](https://docs.plane.so/)

### Présentation du produit

Plane est un outil de gestion de projet open source pour suivre les Issues, gérer les Cycles, maintenir les Roadmaps et stocker les documents de projet et les tâches d'équipe. Il est mieux adapté aux équipes produit, d'ingénierie et de gestion de projet pour gérer les plans de version, le statut des tâches, les risques du projet et le rythme de collaboration.

Plane met également officiellement l'accent sur la collaboration entre les équipes et les agents. Dans le scénario WorkBuddy, Plane peut servir de couche de collaboration de projet : les projets, les tâches, les responsables, le statut, la priorité et les plans de version sont stockés dans Plane, tandis que WorkBuddy amène ces statuts dans les points d'entrée de travail quotidiens de l'équipe.

![Plane2-ojwlpm.png](https://static-docs.nocobase.com/Plane2-ojwlpm.png)

### Avantages principaux

* **Adapté à la collaboration produit et ingénierie** : Il peut gérer les Issues, les Cycles, les Roadmaps, les documents et les tâches d'équipe.
* **Statut des tâches plus clair** : Adapté au suivi de la priorité, du responsable, des plans de version et des risques de retard.
* **Prend en charge l'auto-hébergement** : Plus adapté aux équipes qui ont besoin de contrôler les données du projet et les informations d'ingénierie.
* **Adapté à une utilisation avec les Agents** : Plane met déjà l'accent sur l'espace de collaboration pour les équipes et les agents, ce qui le rend adapté aux combinaisons autour de l'avancement des tâches, du statut du projet et de l'accumulation des connaissances.

### Cas d'utilisation typiques avec WorkBuddy

Les chefs de produit peuvent demander à WorkBuddy dans Feishu : « Quels problèmes P0 de cette version sont encore ouverts ? » Les chefs de projet peuvent demander : « Quelles tâches sont en retard cette semaine et par qui sont-elles bloquées ? » Les responsables techniques peuvent également demander à WorkBuddy d'organiser les Issues hautement prioritaires par module.

Dans ce scénario, Plane enregistre les projets, les Issues, les Roadmaps et les informations sur les responsables. WorkBuddy lance des requêtes à partir du point d'entrée de travail et organise les résultats en résumés ou en rappels. Pour les équipes ayant de nombreuses tâches, des cycles de version rapides et des besoins fréquents de synchronisation de statut, cette combinaison peut réduire le coût d'ouverture répétée du backend du projet pour vérifier le statut.

## 5. Directus : adapté pour transformer les bases de données existantes en interfaces de données appelables

![Directus1-x5gl6h.png](https://static-docs.nocobase.com/Directus1-x5gl6h.png)

**Site officiel** : [https://directus.io/](https://directus.io/)

**GitHub** : [https://github.com/directus/directus](https://github.com/directus/directus)

**Étoiles GitHub** : 34,2k

**Documentation** : [https://directus.io/docs](https://directus.io/docs)

### Présentation du produit

Directus est une plateforme de données open source qui peut générer une interface de gestion, une API REST et une API GraphQL sur des bases de données SQL. Elle est adaptée aux équipes qui ont déjà des bases de données mais qui manquent d'un backend convivial, d'interfaces standard ou d'une couche d'accès aux données unifiée.

De nombreuses entreprises ne manquent pas de données. Le problème est que les données sont dispersées dans des systèmes existants, des tables de base de données ou plusieurs applications internes. Laisser un Agent accéder directement à une base de données est relativement risqué, et demander aux utilisateurs métier d'écrire du SQL n'est pas réaliste. Directus peut ajouter une couche d'API et de gestion des autorisations entre la base de données et WorkBuddy, rendant les données existantes plus faciles à interroger, organiser et appeler.

### Avantages principaux

* **Se connecte aux bases de données SQL existantes** : Adapté pour encapsuler les bases de données existantes en services de données plus faciles à utiliser.
* **Génère automatiquement des API** : Les données peuvent être consultées via REST, GraphQL ou des SDK.
* **Fournit une interface de gestion des données** : Ce n'est pas seulement une couche API, mais peut également être utilisé comme backend de données.
* **Adapté à la modernisation progressive** : Les entreprises n'ont pas besoin de reconstruire l'ensemble du système. Elles peuvent d'abord exposer les tables de données clés via Directus.

![Directus2-9ia8ca.png](https://static-docs.nocobase.com/Directus2-9ia8ca.png)

### Cas d'utilisation typiques avec WorkBuddy

Par exemple, une entreprise peut déjà avoir des bases de données clients, des bases de données de commandes, des tables d'inventaire ou des bibliothèques d'actifs de contenu, mais les données sont dispersées dans des systèmes existants, ce qui rend difficile pour les utilisateurs métier d'effectuer des requêtes rapides. L'entreprise peut d'abord utiliser Directus pour connecter les tables de données clés, configurer les autorisations et les API, puis laisser WorkBuddy interroger les données via les interfaces.

Les employés peuvent lancer des demandes à partir de points d'entrée de travail, telles que « vérifier les nouvelles commandes d'aujourd'hui », « trouver les produits dont le stock est inférieur au niveau de sécurité » ou « résumer les 3 dernières transactions d'un client ». Directus fournit des API et des limites d'autorisation. WorkBuddy transforme les demandes en langage naturel en tâches de requête et organise les résultats en résumés plus faciles à lire.

## 6. Metabase : adapté pour permettre à WorkBuddy de lire des rapports et des indicateurs métier

![Metabase-uupms9.png](https://static-docs.nocobase.com/Metabase-uupms9.png)

**Site officiel** : [https://www.metabase.com/](https://www.metabase.com/)

**GitHub** : [https://github.com/metabase/metabase](https://github.com/metabase/metabase)

**Étoiles GitHub** : 47k

**Documentation** : [https://www.metabase.com/docs](https://www.metabase.com/docs)

### Présentation du produit

Metabase est un outil BI open source pour créer des tableaux de bord de données, des rapports métier et des analyses en libre-service. Il peut se connecter à des bases de données, permettant aux équipes de construire des systèmes d'indicateurs et des tableaux de bord autour des données de vente, d'exploitation, de produit, de finance, de support client, etc.

Si Directus est mieux adapté pour transformer des bases de données en API, Metabase est mieux adapté pour transformer des données en questions métier et en tableaux de bord d'indicateurs. Lorsqu'il est utilisé avec WorkBuddy, Metabase peut servir de couche d'analyse de données, permettant aux managers d'obtenir des indicateurs clés et des résumés métier via des points d'entrée de travail.

### Avantages principaux

* **Adapté à l'analyse de données métier** : Il peut se connecter à des bases de données et créer des tableaux de bord, des graphiques et des rapports.
* **Abaisse la barrière des requêtes de données** : Les utilisateurs métier peuvent consulter les indicateurs via des interfaces visuelles et n'ont pas nécessairement besoin d'écrire du SQL.
* **Adapté aux équipes de direction et d'exploitation** : Les scénarios courants incluent les tableaux de bord des ventes, l'analyse des canaux, la croissance des utilisateurs, les tendances des tickets et l'analyse des stocks.
* **Fournit des capacités API** : Metabase fournit des API qui peuvent être utilisées pour automatiser certaines tâches backend et scénarios de requête de données.

### Cas d'utilisation typiques avec WorkBuddy

Les managers n'ouvrent pas nécessairement les systèmes BI tous les jours pour parcourir plusieurs tableaux de bord, mais ils ont généralement besoin de comprendre rapidement les changements clés. Par exemple, « Comment le chiffre d'affaires de cette semaine a-t-il évolué par rapport à la semaine dernière ? » « De quels canaux proviennent les nouveaux utilisateurs enregistrés d'aujourd'hui ? » « Quelle gamme de produits a connu la plus forte augmentation du volume de tickets ? » « Quelles pages ont connu la baisse de taux de conversion la plus évidente ? » Cela rend la combinaison de Metabase et WorkBuddy bien adaptée aux résumés de données métier.

Metabase connecte les bases de données et stocke les indicateurs et les tableaux de bord. WorkBuddy amène ces indicateurs dans WeCom, Feishu ou DingTalk. Les utilisateurs peuvent poser des questions directement à partir des points d'entrée de travail, et WorkBuddy peut appeler les rapports ou les interfaces de données pertinents, puis renvoyer des résumés structurés.

## FAQ

### 1. WorkBuddy peut-il se connecter directement aux SaaS, ERP ou CRM traditionnels ?

Oui, mais cela dépend si le système lui-même fournit des API, des Webhooks, des plugins, du MCP ou d'autres capacités appelables.

De nombreux systèmes SaaS, ERP et CRM traditionnels ont des structures de données et des règles de processus relativement fixes. Les systèmes peuvent être utilisés, mais leurs relations de champ, leurs capacités d'interface, leurs limites d'autorisation et leurs enregistrements d'audit peuvent ne pas convenir à un accès direct par Agent.

Pour les requêtes simples, les notifications ou la synchronisation de données, les systèmes traditionnels peuvent également être connectés via des API ou des plateformes d'intégration. Mais si une entreprise souhaite configurer de manière flexible les données, les autorisations et les flux de travail autour d'objets tels que les clients, les commandes, les approbations, les tickets, les stocks et les projets, les outils open source ou les plateformes auto-hébergeables sont généralement mieux adaptés en tant que couche hébergeant ces capacités.

### 2. Pourquoi choisir des outils open source à utiliser avec WorkBuddy ?

Les outils open source sont généralement mieux adaptés aux équipes qui ont besoin d'auto-hébergement, de contrôle des données, d'interfaces ouvertes et d'extensibilité à long terme.

Les entreprises peuvent mieux comprendre où les données sont stockées, comment les autorisations système sont configurées, comment les interfaces sont appelées et comment les journaux d'opérations sont conservés. Elles peuvent également effectuer un développement secondaire ou une intégration système en fonction de leurs propres besoins. Pour les scénarios impliquant des informations clients, des données de projet, des enregistrements de commandes, des indicateurs métier et des flux de travail internes, ce niveau de contrôle est particulièrement important.

WorkBuddy gère le point d'entrée de travail et l'orchestration des tâches. Les outils open source hébergent des capacités telles que les systèmes métier, les flux de travail d'automatisation, le CRM, la gestion de projet, les API de données et l'analyse BI. Ensemble, ils connectent les points d'entrée de travail quotidiens avec des systèmes métier spécifiques.

### 3. Si nous voulons construire des outils internes au niveau système, lequel devrions-nous examiner en premier ?

**NocoBase**.

Si une entreprise souhaite construire un CRM, un ERP, des systèmes de tickets, des systèmes d'approbation, une gestion des stocks, une gestion de projet ou des backends opérationnels, NocoBase est mieux adapté en tant que plateforme d'outils internes au niveau système. Il utilise une architecture pilotée par modèle de données, ce qui le rend adapté pour définir d'abord des objets métier tels que les clients, les commandes, les tickets, les approbations, les stocks et les projets, puis pour configurer les pages, les autorisations, les flux de travail et les plugins.

Dans le même temps, NocoBase a déjà publié une documentation d'intégration WorkBuddy, ce qui le rend directement pertinent pour ce sujet. Pour les équipes qui ont besoin de gérer des données métier complexes, des limites d'autorisation et des règles de flux de travail, NocoBase offre une couverture plus large qu'un seul CRM, un seul outil d'automatisation ou un seul outil BI.

### 4. Si l'objectif principal est la surveillance des tableaux de bord et l'analyse des données métier, lequel devrions-nous choisir ?

**Metabase**.

Metabase est mieux adapté pour connecter des bases de données, créer des tableaux de bord, maintenir des indicateurs métier et générer des rapports de données. Les scénarios tels que les tableaux de bord des ventes, l'analyse des canaux, la croissance des utilisateurs, les tendances des tickets, les variations de stocks et les changements de taux de conversion sont tous adaptés à Metabase.

Lorsqu'il est associé à WorkBuddy, les managers peuvent interroger les indicateurs clés à partir des points d'entrée de travail, tels que « Comment le chiffre d'affaires de cette semaine a-t-il évolué par rapport à la semaine dernière ? » « De quels canaux proviennent principalement les nouveaux utilisateurs d'aujourd'hui ? » et « Quelle gamme de produits a connu la plus forte augmentation du volume de tickets ? » Metabase stocke les indicateurs et les tableaux de bord, tandis que WorkBuddy lance des requêtes et renvoie des résumés structurés.

### 5. Que doit faire une entreprise si elle a déjà des bases de données mais manque d'un point d'entrée de requête unifié ?

De nombreuses entreprises ont déjà des bases de données clients, des bases de données de commandes, des tables d'inventaire ou des bibliothèques d'actifs de contenu, mais les données sont dispersées dans des systèmes existants ou des bases de données internes. Lorsque les utilisateurs métier souhaitent interroger des données, ils doivent souvent entrer dans plusieurs backends ou demander à des collègues techniques d'exporter temporairement les données.

Directus peut générer une interface de gestion, une API REST et une API GraphQL sur des bases de données SQL, ce qui équivaut à ajouter un point d'entrée d'accès aux données plus clair pour les bases de données existantes. Lorsqu'il est associé à WorkBuddy, les employés peuvent interroger des informations telles que « les nouvelles commandes d'aujourd'hui », « les produits dont le stock est inférieur au niveau de sécurité » et « les 3 dernières transactions d'un client » à partir des points d'entrée de travail.

### 6. L'utilisation de WorkBuddy avec des outils open source nécessite-t-elle des équipes techniques ?

Cela dépend de la profondeur de son utilisation.

Pour les requêtes simples, les rappels, les résumés d'informations ou les résumés de rapports, les équipes métier peuvent commencer avec les capacités des outils existants. Mais si WorkBuddy a besoin d'une intégration fiable avec les systèmes internes, comme l'appel d'API, la configuration des autorisations, la conception de flux de travail, la gestion des clés et la tenue de journaux d'opérations, les équipes informatiques ou de développement doivent être impliquées.

Une approche plus sûre consiste à commencer par des scénarios à faible risque et à haute fréquence, tels que les listes de suivi clients, les résumés d'avancement de projet, les rappels de tickets en retard, les tableaux de bord de données métier et les requêtes d'exception de stock. Une fois le flux de travail stabilisé, il peut progressivement s'étendre à des opérations système plus complexes et à l'automatisation inter-outils.

### 7. Quand WorkBuddy est-il un bon choix ?

WorkBuddy est un bon choix si une équipe collabore principalement via WeChat, QQ, WeCom, Feishu, DingTalk et des points d'entrée similaires, et souhaite utiliser des Agents IA pour gérer les tâches de bureau quotidiennes telles que l'organisation de fichiers, l'analyse de feuilles de calcul, la génération de présentations, les résumés de réunions et l'attribution de tâches.

Si l'entreprise souhaite également connecter davantage les outils internes, le CRM, la gestion de projet, les tableaux de bord de données, les flux de travail d'automatisation et d'autres systèmes, elle peut utiliser WorkBuddy comme point d'entrée de tâches et l'associer à des outils open source tels que NocoBase, Activepieces et Twenty pour ajouter des systèmes métier spécifiques et des capacités de données.

Si cet article vous est utile, n'hésitez pas à le partager avec des amis qui suivent les Agents IA.


**Lectures connexes**

* [Top 6 des outils IA open source par étoiles GitHub pour des Agents IA plus puissants](https://www.nocobase.com/en/blog/6-github-top-open-source-ai-tools-for-ai-agents)
* [5 outils internes open source à utiliser avec l'Agent Hermes](https://www.nocobase.com/en/blog/open-source-internal-tools-self-hosted-ai-agent-hermes)
* [OpenClaw et 5 outils open source pour surveiller les flux de travail métier](https://www.nocobase.com/en/blog/openclaw-open-source-enterprise-tools)
* [Quels outils open source fonctionnent bien avec OpenCode ? 5 projets à essayer](https://www.nocobase.com/en/blog/opencode-open-source-tools-ai-agents)
* [Construire des outils internes avec Codex : 6 projets open source pour les développeurs](https://www.nocobase.com/en/blog/building-internal-tools-with-codex)
* [Après Claude Code : 6 outils open source que vous devriez connaître](https://www.nocobase.com/en/blog/open-source-tools-after-claude-code)
* [Top 10 des outils IA et no-code open source pour le développement de logiciels d'entreprise](https://www.nocobase.com/en/blog/open-source-ai-no-code-tools-enterprise-software-development)
* [8 plateformes d'Agents IA open source pour construire des outils internes](https://www.nocobase.com/en/blog/8-open-source-ai-agent-platforms-for-internal-tools)
* [Les meilleurs CRM auto-hébergés de qualité entreprise avec RBAC, IA et support API ouvert](https://www.nocobase.com/en/blog/the-best-self-hosted-crm-for-enterprise-teams)
* [6 meilleurs outils open source pour remplacer les middlewares d'intégration personnalisés](https://www.nocobase.com/en/blog/6-open-source-integration-tools-to-replace-custom-middleware)
* [Remplacer Excel par NocoBase ou Airtable ? Une comparaison coût par coût](https://www.nocobase.com/en/blog/airtable-vs-nocobase-migration-cost-comparison)
* [4 façons de créer rapidement des applications Web à partir de données Excel](https://www.nocobase.com/en/blog/excel-to-web-app-4-methods)
