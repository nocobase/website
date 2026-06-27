---
title: "Top 18 des projets open source d'agents IA avec le plus d'étoiles GitHub"
description: "Cet article passe en revue les 18 principaux projets open source d'agents IA sur GitHub en fonction du nombre d'étoiles, en analysant leurs fonctionnalités et cas d'utilisation pour vous aider à choisir et à mettre en œuvre efficacement."
---

📝 Note : Cet article a été mis à jour pour la dernière fois le 21 janvier 2026. Nous mettons régulièrement les informations à jour pour vous garantir les dernières tendances ! 😊

✨ Découvrez notre sélection 2026 des meilleurs projets open source d'IA sur GitHub : [https://www.nocobase.com/en/blog/best-open-source-ai-projects-github-2026](https://www.nocobase.com/en/blog/best-open-source-ai-projects-github-2026)

Il y a environ un mois, je suis tombé sur un article très discuté sur [Hacker News](https://news.ycombinator.com/item?id=44450160) — « [Stop Building AI Agents](https://decodingml.substack.com/p/stop-building-ai-agents) »

![Stop Building AI Agents](https://static-docs.nocobase.com/1-472k2u.png)

Dans cet article, l'auteur partageait une expérience personnelle : il a construit une « équipe de recherche » avec CrewAI : trois agents, cinq outils, une coordination parfaite sur le papier. Mais en pratique, le chercheur a ignoré le scraper web, le résumeur a oublié d'utiliser l'outil de citation et le coordinateur a tout simplement abandonné lors du traitement de documents plus longs. Un plan magnifique qui s'effondrait de manière spectaculaire.

Le diagramme ci-dessous a été créé par l'auteur après d'innombrables cycles de débogage et tentatives infructueuses, résumant son guide de décision pour **Devrais-je utiliser un Agent**.

![Devrais-je utiliser un Agent](https://static-docs.nocobase.com/2-45bvv4.png)

Source de l'image : https://decodingml.substack.com/p/stop-building-ai-agents

L'article distillait un principe important : **les agents fonctionnent mieux dans les processus instables où l'humain reste dans la boucle pour superviser** — dans ces scénarios, les capacités exploratoires et créatives d'un agent surpassent souvent un workflow rigide.

* **Scénarios recommandés :** assistant en science des données (génération automatique de SQL, création de visualisations, exploration de tendances de données) ; partenaire d'écriture créative (brainstorming d'idées, affinage de textes) ; assistant de refactoring de code (suggestion d'optimisations, détection de problèmes potentiels). Dans ces cas, les humains peuvent évaluer en continu les résultats et corriger les déviations.
* **Déconseillé pour :** l'automatisation d'entreprise critique (processus métier clés qui ne peuvent pas risquer l'instabilité des décisions pilotées par LLM) ; la prise de décision à enjeux élevés (finance, diagnostic médical, conformité légale — des domaines qui nécessitent une logique déterministe).

![scénarios](https://static-docs.nocobase.com/3-ba22w7.png)

Source de l'image : https://decodingml.substack.com/p/stop-building-ai-agents

Si vous avez lu ce qui précède et que vous pensez toujours que votre scénario métier est adapté à la création d'un agent, cet article vous guidera à travers les **18 meilleurs projets open source d'[agents](https://github.com/topics/agent) sur GitHub classés par nombre d'étoiles**. Pour chacun, nous analyserons leurs forces et leurs limites sous trois angles — présentation du projet, fonctionnalités principales et cas d'utilisation — vous aidant à maximiser la valeur des agents dans les contextes appropriés.

---

💬 Hey, vous lisez le blog NocoBase. NocoBase est la plateforme de développement low-code/no-code alimentée par l'IA la plus extensible pour créer des applications d'entreprise, des outils internes et toutes sortes de systèmes. Elle est entièrement auto-hébergée, basée sur des plugins et conviviale pour les développeurs. → [Explorez NocoBase sur GitHub](https://github.com/nocobase/nocobase)

---

💡 Vous pourriez également apprécier nos précédentes sélections de projets GitHub populaires (certains projets apparaissent dans plusieurs thèmes) :

* [Top 20 des projets IA open source avec le plus d'étoiles GitHub](https://www.nocobase.com/en/blog/github-open-source-ai-projects)
* [Top 8 des projets MCP open source avec le plus d'étoiles GitHub](https://www.nocobase.com/en/blog/github-open-source-mcp-projects)
* [Top 40 des outils développeur open source avec le plus d'étoiles GitHub](https://www.nocobase.com/en/blog/github-open-source-developer-tools)

## N°1 : Dify

![Dify](https://static-docs.nocobase.com/4-in2l5n.png)

* GitHub Star : 110k
* GitHub : [https://github.com/langgenius/dify](https://github.com/langgenius/dify)
* Site web : [https://dify.ai/](https://dify.ai/)

![Dify](https://static-docs.nocobase.com/5-psa2vb.png)

**Présentation :**

**Dify** est une plateforme de développement d'applications LLM open source qui combine une interface visuelle intuitive, des workflows RAG, des capacités d'agent, la gestion de modèles et une observabilité complète. Elle permet aux développeurs de créer, déboguer et déployer rapidement des applications d'IA.

**Fonctionnalités principales :**

* **Orchestration visuelle de workflows :** Constructeur par glisser-déposer qui permet aux développeurs de concevoir et tester des workflows d'IA complexes directement sur un canevas, incluant les prompts, les appels de modèles et l'enchaînement de tâches.
* **Support du pipeline RAG :** Ingère des documents multi-formats (ex : PDF, PPT), extrait automatiquement le contenu et construit des pipelines de récupération pour la génération augmentée par la connaissance.
* **Écosystème de modèles complet et éditeur de prompts :** Compatible avec GPT, Mistral, Llama3 et tous les modèles compatibles avec l'API OpenAI. Offre une gestion unifiée des modèles et un réglage des prompts, simplifiant le changement de modèle et la comparaison des performances.

**Cas d'utilisation :**

* Construction de systèmes de service client et de QA intelligents
* Intégration avec des bases de connaissances d'entreprise
* Déploiement rapide d'outils de génération de contenu

## N°2 : Lobe Chat

![Lobe Chat](https://static-docs.nocobase.com/6-8eachs.png)

* GitHub Star : 64.3k
* GitHub : [https://github.com/lobehub/lobe-chat](https://github.com/lobehub/lobe-chat)
* Site web : [https://lobechat.com/](https://lobechat.com/)

![Lobe Chat](https://static-docs.nocobase.com/7-t7pkjl.png)

**Présentation :**

**Lobe Chat** est une plateforme de chat et d'applications multi-modèles open source avec un fort accent sur l'expérience utilisateur. Elle prend en charge la voix, la reconnaissance visuelle, l'entrée multimodale, une place de marché de plugins, l'optimisation mobile et la gestion multi-utilisateurs.

**Fonctionnalités principales :**

* **Support multimodal et plugins :** Gère les conversations vocales, la reconnaissance et la génération d'images, et peut étendre ses fonctionnalités via une place de marché de plugins pour répondre à divers besoins d'interaction.
* **Plateforme d'index d'agents :** Index piloté par la communauté où les utilisateurs peuvent parcourir, ajouter ou soumettre des assistants personnalisés pour faciliter l'extension et la réutilisation.
* **Intégration unifiée de modèles :** Fournit une interface API unifiée et une architecture modulaire pour se connecter facilement à des fournisseurs de modèles tels qu'OpenAI, Anthropic, Gemini et Ollama, rendant la migration et la mise à niveau de la plateforme transparentes.

**Cas d'utilisation :**

* Construction rapide d'applications de chat IA multimodales à forte interaction
* Déploiement d'assistants spécialisés par domaine

## N°3 : RAGFlow

![RAGFlow](https://static-docs.nocobase.com/8-p4g4dr.png)

* GitHub Star : 62.1k
* GitHub : [https://github.com/infiniflow/ragflow](https://github.com/infiniflow/ragflow)
* Site web : [https://ragflow.io/](https://ragflow.io/)

![RAGFlow](https://static-docs.nocobase.com/9-9lvp8h.png)

**Présentation :**

**RAGFlow** est un moteur RAG open source axé sur la compréhension approfondie des documents, conçu pour fournir des services de QA et d'agent de haute qualité et explicables pour les entreprises et les particuliers. Il peut traiter des formats de documents complexes et fournir des réponses basées sur des citations avec une gestion visuelle des blocs.

**Fonctionnalités principales :**

* **Compréhension approfondie des documents :** Excelle dans l'analyse de contenu non structuré tel que PDF, Word, PPT, Excel et images, en extrayant des blocs d'informations consultables pour garantir que le contenu généré est factuel et vérifiable.
* **QA RAG avec suivi des citations :** Combine la récupération vectorielle avec les LLM pour générer des réponses citées, tout en permettant des ajustements manuels des blocs de récupération pour améliorer la précision.
* **Déploiement et intégration flexibles :** Offre un déploiement Docker Compose et une intégration avec divers LLM.

**Cas d'utilisation :**

* Construction de systèmes de QA et d'assistants de connaissances basés sur des documents
* Mise en œuvre d'audit de contenu et de suivi des citations
* Déploiement d'applications RAG gérant des structures de fichiers complexes

## N°4 : OpenHands

![OpenHands](https://static-docs.nocobase.com/10-b9ssqh.png)

* GitHub Star : 62k
* GitHub : https://github.com/All-Hands-AI/OpenHands
* Site web : https://all-hands.dev/

![OpenHands](https://static-docs.nocobase.com/11-a2rzhi.png)

**Présentation :**

**OpenHands** est construit autour de l'idée que l'IA devrait « écrire moins de code, en faire plus » — offrant des capacités telles que l'édition de code, l'exécution de commandes, la navigation web et les appels API.

En tant que projet open source sous licence MIT, OpenHands peut être déployé localement via Docker ou accessible via le SaaS OpenHands Cloud, qui comprend des crédits d'utilisation initiaux pour des essais rapides. Avec des mises à jour continues, OpenHands a évolué vers une plateforme d'IA complète destinée aux développeurs, dotée désormais d'un contrôleur d'agent universel, d'une collaboration multi-agents, d'une gestion multi-sessions et d'une exécution sécurisée en sandbox.

**Fonctionnalités principales :**

* **Capacités d'agent développeur général :** Les agents peuvent effectuer des tâches comme modifier du code, exécuter des commandes, naviguer sur le web et appeler des API, imitant les workflows des développeurs humains.
* **Collaboration multi-agents et gestion de sessions :** Prend en charge le travail de plusieurs agents ensemble, avec des composants de gestion de session intégrés (Session, EventStream, AgentController) pour la division des tâches ou la résolution collaborative de problèmes.
* **Exécution sécurisée en sandbox :** Le code et les commandes s'exécutent dans des environnements isolés (ex : conteneurs Docker) pour garantir la sécurité et minimiser les risques pour le système hôte.

**Cas d'utilisation :**

* Aider les développeurs avec les tâches de codage courantes
* Automatisation des pipelines de test et de déploiement
* Prototypage rapide et développement d'outils

## N°5 : MetaGPT

![MetaGPT](https://static-docs.nocobase.com/12-btl5l3.png)

* GitHub Star : 57.8k
* GitHub : https://github.com/FoundationAgents/MetaGPT
* Site web : https://mgx.dev/

![13-2pwtad.png](https://static-docs.nocobase.com/13-2pwtad.png)

**Présentation :**

MetaGPT est un framework de collaboration multi-agents inspiré du concept de simulation d'une « entreprise de logiciels ». Il transforme les exigences en langage naturel en un workflow complet — des user stories et analyses concurrentielles à la conception d'API et à la documentation. Sa philosophie centrale est « Code = SOP(Team) », transformant les procédures opérationnelles standard (SOP) en étapes actionnables à travers des rôles comme les chefs de produit, les architectes et les ingénieurs.

![MetaGPT](https://static-docs.nocobase.com/14-8jh7z3.png)

**Fonctionnalités principales :**

* **Collaboration d'agents multi-rôles :** Inclut des agents intégrés pour des rôles tels que chef de produit, architecte, chef de projet et ingénieur, simulant une équipe du monde réel exécutant des projets pilotés par SOP.
* **Processus pilotés par SOP :** Guide chaque agent avec des procédures opérationnelles standard pour la décomposition des tâches, l'exécution structurée et la réduction des déviations ou hallucinations.
* **Programmation en langage naturel :** Les utilisateurs peuvent décrire leurs exigences en langage simple, et MetaGPT générera les user stories, structures de données, interfaces API et conceptions architecturales correspondantes.

**Cas d'utilisation :**

* Génération automatique de propositions de projets logiciels
* Prototypage rapide de workflows d'équipe collaborative
* Exploration de l'optimisation et de l'automatisation du développement logiciel piloté par l'IA

## N°6 : LLMs-from-scratch

![LLMs-from-scratch](https://static-docs.nocobase.com/15-w7easd.png)

* GitHub Star : 56k
* GitHub : [https://github.com/rasbt/LLMs-from-scratch](https://github.com/rasbt/LLMs-from-scratch)

![LLMs-from-scratch](https://static-docs.nocobase.com/16-68zqun.png)

**Présentation :**

**LLMs-from-scratch** est un projet éducatif qui construit un grand modèle de langage à partir de zéro, aidant les développeurs à comprendre les principes fondamentaux et le processus d'entraînement des LLM.

👉 [Voir l'introduction complète et les cas d'utilisation pour plus de détails.](https://www.nocobase.com/en/blog/github-open-source-ai-projects#no15-llms-from-scratch)

## N°7 : Huginn

![Huginn](https://static-docs.nocobase.com/17-wzc3ll.png)

* GitHub Star : 47k
* GitHub : https://github.com/huginn/huginn

![Huginn](https://static-docs.nocobase.com/18-orl7h1.png)

**Présentation :**

**Huginn** est un outil d'automatisation open source qui permet aux utilisateurs d'exécuter des agents sur leurs propres serveurs pour collecter des informations sur le web et déclencher des actions en fonction de conditions — comme l'envoi de notifications par e-mail ou la surveillance de mots-clés. Conçu avec le contrôle des données à l'esprit, Huginn a maintenu une activité communautaire à long terme grâce à son système d'agents auto-hébergé, respectueux de la vie privée et extensible.

**Fonctionnalités principales :**

* **Plateforme d'agents web auto-hébergée :** Les utilisateurs déploient des agents sur leurs propres serveurs, traitent les données de manière autonome et assurent une confidentialité et un contrôle complets.
* **Moteur de règles Événement-Action :** Prend en charge les déclencheurs conditionnels qui exécutent automatiquement des actions comme l'envoi de notifications, l'exécution de scripts ou les appels HTTP lorsque des événements web spécifiques se produisent.
* **Mécanisme d'agent extensible :** Livré avec de nombreux agents intégrés et prend en charge l'ajout d'agents personnalisés via les gems Huginn Agent.

**Cas d'utilisation :**

* Surveillance d'informations et alertes
* Scraping de données et workflows automatisés
* Construction d'outils d'automatisation personnalisés

## N°8 : Unsloth

![Unsloth](https://static-docs.nocobase.com/19-ihomc8.png)

* GitHub Star : 43.8k
* GitHub : https://github.com/unslothai/unsloth
* Site web : https://docs.unsloth.ai/

![Unsloth](https://static-docs.nocobase.com/20-eci5h1.png)

**Présentation :**

**Unsloth** est une boîte à outils open source conçue pour le fine-tuning des LLM (tels que OpenAI gpt-oss, Qwen3, Llama 4) avec un accent sur une efficacité accrue et une optimisation de la mémoire. Construit sur l'architecture Triton d'OpenAI, il accélère considérablement la vitesse d'entraînement tout en réduisant l'utilisation de la mémoire GPU.

**Fonctionnalités principales :**

* **Fine-tuning optimisé pour la mémoire :** Offre un gain de vitesse de 1,5 à 2,2 fois pour le fine-tuning des LLM grand public tout en réduisant l'utilisation de la mémoire GPU jusqu'à 70-80 %.
* **Workflow de notebook facile :** Les utilisateurs ajoutent simplement un jeu de données et cliquent sur « Run All » pour terminer rapidement le fine-tuning du modèle.
* **Large compatibilité de modèles :** Prend en charge le fine-tuning des LLM incluant Llama, Gemma, Qwen, et plus encore.

**Cas d'utilisation :**

* Fine-tuning rapide des LLM pour la recherche ou le prototypage de produits
* Éducation et formation
* Scénarios nécessitant une efficacité mémoire élevée, comme le déploiement sur des appareils aux ressources limitées

## N°9 : Mem0

![Mem0](https://static-docs.nocobase.com/21-uxkki5.png)

* GitHub Star : 38.1k
* GitHub : https://github.com/mem0ai/mem0
* Site web : https://mem0.ai/

![Mem0](https://static-docs.nocobase.com/22-bmb2sv.png)

**Présentation :**

**Mem0** est un système de gestion de la mémoire à long terme spécialement conçu pour les agents d'IA, répondant au problème courant « d'oubli » de l'IA. En introduisant une couche de mémoire unifiée, il permet aux agents de conserver les préférences des utilisateurs et le contexte historique à travers les sessions et les applications, permettant des interactions personnalisées et continues.

Dans les tests de référence LOCOMO, Mem0 a surpassé OpenAI Memory avec environ 26 % de précision en plus, 91 % de latence de réponse en moins et 90 % d'utilisation de tokens en moins. Il est idéal pour des scénarios comme les bots de service client, les assistants IA et les systèmes autonomes où la continuité du contexte est essentielle.

**Fonctionnalités principales :**

* **Architecture mémoire multi-niveaux :** Prend en charge les couches mémoire au niveau utilisateur, session et agent pour un stockage structuré des informations.
* **Haute performance et rentabilité :** Améliore la précision tout en réduisant considérablement la latence et la consommation de tokens, offrant un support mémoire à long terme avec moins de ressources.
* **Traitement local prioritaire à la vie privée :** Toutes les données peuvent être traitées et stockées localement, donnant aux utilisateurs un contrôle total sur leurs informations.

**Cas d'utilisation :**

* **Bots de service client :** Conserver les préférences et l'historique des utilisateurs pour améliorer la pertinence des réponses
* **Assistants IA :** Maintenir la mémoire des tâches et de la personnalité à travers les sessions pour des interactions plus naturelles et cohérentes
* **Systèmes médicaux et de conseil :** Préserver le contexte pour améliorer la qualité du service et les retours précis

## N°10 : ChatTTS

![ChatTTS](https://static-docs.nocobase.com/23-azdged.png)

* GitHub Star : 37.5k
* GitHub : https://github.com/2noise/ChatTTS
* Site web : https://2noise.com/

![ChatTTS](https://static-docs.nocobase.com/24-e17utt.png)

**Présentation :**

**ChatTTS** est un système de synthèse vocale open source optimisé spécifiquement pour les tâches conversationnelles, prenant en charge les scénarios multi-locuteurs avec un accent sur une expression naturelle et riche en émotions. Pour prévenir les abus, le projet intègre une petite quantité de bruit haute fréquence dans le modèle entraîné et réduit la qualité du fichier, avec des projets de mise en œuvre de mécanismes de détection pour guider davantage une utilisation éthique.

**Fonctionnalités principales :**

* **TTS optimisé pour la conversation :** Spécialement réglé pour les scénarios de dialogue, prenant en charge les conversations multi-rôles et un rythme naturel.
* **Contrôle fin de la prosodie :** Gère avec précision les éléments prosodiques comme les rires, les pauses et les mots de remplissage, rendant la parole synthétisée plus vivante et réaliste.

**Cas d'utilisation :**

* Construction de bots vocaux ou de systèmes de dialogue interactifs réalistes.
* Doublage de personnages et outils d'apprentissage des langues dans les produits éducatifs.
* Assistance audio pour la création de contenu vocal et la génération automatisée de podcasts.

## N°11 : Arthas

![Arthas](https://static-docs.nocobase.com/25-1e8yxo.png)

* GitHub Star : 36.6k
* GitHub : https://github.com/alibaba/arthas
* Site web : https://arthas.aliyun.com/

![Arthas](https://static-docs.nocobase.com/26-rnqi0c.png)

**Présentation :**

**Arthas** est un outil de diagnostic Java open source d'Alibaba, et depuis sa sortie, il est devenu une solution de référence pour les développeurs Java qui résolvent les problèmes en environnement de production. Conçu pour s'attacher dynamiquement aux applications de production sans modifier le code ni redémarrer les serveurs, il permet aux développeurs d'exécuter des commandes de débogage, d'inspecter les traces de pile ou de définir des points d'arrêt, améliorant considérablement l'efficacité et la sécurité de la résolution des incidents de production.

**Fonctionnalités principales :**

* **Attachement dynamique :** Injecter Arthas dans une application JVM de production en cours d'exécution sans redémarrage ni modification de code pour commencer le débogage et la surveillance instantanément.
* **Diagnostic interactif en ligne de commande :** Fournit des commandes comme `stack`, `trace`, `watch` et `monitor` pour visualiser instantanément les piles d'exécution, les compteurs d'appels de méthodes, les métriques de performance, etc.

**Cas d'utilisation :**

* Résolution rapide d'incidents de production.
* Analyse des goulots d'étranglement de performance.
* Investigation de problèmes de tests de régression.

## N°12 : AgentGPT

![AgentGPT](https://static-docs.nocobase.com/27-yvq9f7.png)

* GitHub Star : 34.7k
* GitHub : https://github.com/reworkd/AgentGPT
* Site web : https://arthas.aliyun.com/

![AgentGPT](https://static-docs.nocobase.com/28-fwguw8.png)

**Présentation :**

**AgentGPT** est un projet open source qui permet aux utilisateurs de configurer et déployer des agents d'IA directement dans le navigateur sans configuration complexe. Avec une interface conviviale, il suffit de saisir un objectif, et l'agent « pense–agit–apprend » pour l'atteindre.

**Fonctionnalités principales :**

* **Configuration d'agent dans le navigateur :** Définir des objectifs et des noms directement dans l'interface web pour lancer des agents, abaissant les barrières au déploiement.
* **Exécution pilotée par objectif :** Les agents planifient de manière autonome des sous-tâches, les exécutent, fournissent des retours et optimisent leur approche.
* **Configuration automatisée de l'environnement :** CLI intégré configurant les variables d'environnement, la base de données (MySQL), le backend (FastAPI) et le frontend (Next.js) pour un déploiement en un clic.

**Cas d'utilisation :**

* Assistants intelligents axés sur les tâches.
* Outils de validation de prototypes.
* Plateformes d'apprentissage et de démonstration.

## N°13 : Cherry Studio

![Cherry Studio](https://static-docs.nocobase.com/29-z4pzy1.png)

* GitHub Star : 31.3k
* GitHub : https://github.com/CherryHQ/cherry-studio
* Site web : https://cherry-ai.com/

![Cherry Studio](https://static-docs.nocobase.com/30-qageqb.png)

**Présentation :**

**Cherry Studio**, lancé en décembre 2024, est une plateforme conjointe d'assistant de codage IA par CSDN, GitCode et Huawei Cloud CodeArts IDE. Il vise à fournir une matrice d'assistants IA tout-en-un pour les développeurs, prenant en charge l'interaction en langage naturel, le refactoring de code au niveau projet et le support de développement full-stack.

**Fonctionnalités principales :**

* **Matrice d'assistants IA :** Inclut plus de 300 modèles d'assistants IA spécifiques à l'industrie, avec la possibilité d'en créer des personnalisés, couvrant des domaines de l'écriture à la programmation.
* **Agrégation multi-modèles :** Basculer librement entre les modèles cloud comme OpenAI et Gemini ou les modèles locaux, et comparer les sorties de plusieurs modèles en parallèle.
* **Édition visuelle d'agents :** Choisir parmi des assistants prédéfinis dans le « Marketplace d'agents » ou créer des agents personnalisés, avec une optimisation de prompt assistée par l'IA.

**Cas d'utilisation :**

* Assistance au codage au niveau projet.
* Solutions spécifiques à l'industrie.
* Génération de code pilotée par la connaissance.

## N°14 : Khoj

![Khoj](https://static-docs.nocobase.com/31-l08bdf.png)

* GitHub Star : 31.3k
* GitHub : https://github.com/khoj-ai/khoj
* Site web : https://khoj.dev/

![Khoj](https://static-docs.nocobase.com/32-x8rb4x.png)

**Présentation :**

**Khoj** est un assistant personnel open source de « second cerveau » qui intègre des documents provenant de multiples sources dans une base de connaissances, permettant une recherche sémantique pour le QA et des rappels intelligents. Il prend en charge la création d'agents personnalisés pour des tâches planifiées, la diffusion de contenu ou des réponses conversationnelles en temps réel.

**Fonctionnalités principales :**

* **Intégration de connaissances multi-sources :** Importe du contenu depuis PDF, Markdown, Notion, GitHub, etc., dans une base de connaissances unifiée.
* **Recherche sémantique et notifications :** Récupère le contenu des documents à l'aide de requêtes en langage naturel, avec des notifications push planifiées et des rappels par e-mail.
* **Support d'agents multiplateforme :** Fonctionne sur le bureau, en tant que plugin Obsidian, web, Emacs, WhatsApp, etc.

**Cas d'utilisation :**

* Assistant de gestion des connaissances personnelles.
* Systèmes de rappel automatisés.
* Expériences d'intégration multi-outils.

## N°15 : AIHawk

![AIHawk](https://static-docs.nocobase.com/33-dxlkjy.png)

* GitHub Star : 28.6k
* GitHub : https://github.com/feder-cr/Jobs\_Applier\_AI\_Agent\_AIHawk
* Site web : https://laboro.co/

![AIHawk](https://static-docs.nocobase.com/34-g4zibv.png)

**Présentation :**

**AIHawk** est un agent d'IA open source sous licence AGPL axé sur l'automatisation des candidatures. Il scrape les offres d'emploi et utilise des modèles de langage pour générer des documents de candidature personnalisés, aidant les utilisateurs à postuler efficacement.

**Fonctionnalités principales :**

* **Candidatures automatisées :** Explore les sites d'emploi et génère des documents de candidature optimisés.
* **Architecture open source extensible :** Les développeurs peuvent personnaliser le comportement ou ajouter des plugins.
* **Extension de plateforme commerciale :** A évolué vers la plateforme laboro.co, offrant des services hébergés et des fonctionnalités étendues d'automatisation du recrutement.

**Cas d'utilisation :**

* Assistant de candidature automatique.
* Recherche sur l'automatisation du processus de recrutement.
* Outils d'intégration de plateformes de recrutement.

## N°16 : FastGPT

![FastGPT](https://static-docs.nocobase.com/35-xvxjpm.png)

* GitHub Star : 25.5k
* GitHub : https://github.com/labring/FastGPT
* Site web : https://fastgpt.io/

![FastGPT](https://static-docs.nocobase.com/36-bu5ifv.png)

**Présentation :**

**FastGPT** est conçu comme une « plateforme de construction d'agents IA », permettant aux développeurs de créer des applications d'IA complexes à l'aide de workflows visuels et de bases de connaissances, sans configuration fastidieuse.

**Fonctionnalités principales :**

* **Orchestration visuelle de workflows :** Interface par glisser-déposer prenant en charge les nœuds de dialogue, les appels HTTP, le RPA, les branches conditionnelles, etc.
* **Support de base de connaissances et RAG :** Importe plusieurs formats de fichiers (txt, md, pdf, etc.), avec une récupération vectorielle et hybride pour le QA et l'automatisation pilotés par la connaissance.
* **Compatibilité multi-modèles et API :** S'intègre avec OpenAI, Claude, etc. ; fournit des interfaces compatibles OpenAPI pour une intégration facile dans les systèmes existants.

**Cas d'utilisation :**

* Construction rapide de bots de QA intelligents (ex : assistants de service client).
* Workflows d'analyse de documents et de résumé automatisé.
* Gestion automatisée de tâches avec intégration d'API externes.

## N°17 : GPT Researcher

![GPT Researcher](https://static-docs.nocobase.com/37-dzrr44.png)

* GitHub Star : 22.9k
* GitHub : https://github.com/assafelovic/gpt-researcher
* Site web : https://gptr.dev/

![GPT Researcher](https://static-docs.nocobase.com/38-34tscx.png)

**Présentation :**

**GPT Researcher** est un framework d'agent d'IA spécialisé dans les tâches de recherche approfondie. Il peut planifier automatiquement des workflows de recherche, scraper des informations, générer des rapports de recherche et produire du contenu avec des citations, offrant une haute qualité de rapport et une grande personnalisation.

**Fonctionnalités principales :**

* **Recherche parallèle par agents :** Un agent planificateur crée des questions de recherche, tandis que plusieurs agents exécuteurs collectent et résument les informations en parallèle pour une plus grande efficacité et fiabilité.
* **Génération de rapports factuels :** Organise et cite le contenu automatiquement, produisant des rapports de recherche structurés et objectifs avec des sources.

**Cas d'utilisation :**

* Rédaction rapide d'analyses concurrentielles ou de rapports de recherche technique.
* Création automatisée de plans de recherche académique ou de résumés contextuels.
* Construction d'agents de connaissances spécifiques à un domaine pour l'agrégation de connaissances en entreprise.

## N°18 : CopilotKit

![CopilotKit](https://static-docs.nocobase.com/39-z4vv5d.png)

* GitHub Star : 22.4k
* GitHub : https://github.com/CopilotKit/CopilotKit
* Site web : https://docs.copilotkit.ai/

![CopilotKit](https://static-docs.nocobase.com/40-u5mh13.png)

**Présentation :**

**CopilotKit** est un framework open source pour intégrer de manière transparente des copilotes IA dans les applications — que ce soit sous forme de chat intégré, de zones de texte intelligentes ou d'interfaces d'agents complètes. Il fournit des composants d'interface utilisateur React et une architecture headless pour une intégration flexible.

**Fonctionnalités principales :**

* **Support React et UI headless :** Composants d'interface utilisateur prêts à l'emploi ou déploiements headless uniquement via API.
* **Intégration du contexte applicatif :** Connecte la logique, l'état et le contexte utilisateur de l'application aux agents d'IA pour des fonctionnalités plus adaptées.
* **Découplage modèle-architecture :** Fonctionne indépendamment des modèles ou frameworks d'agents spécifiques, permettant des mises à niveau de la pile IA sans affecter l'expérience utilisateur.

**Cas d'utilisation :**

* Assistants IA intégrés.
* Outils d'IA personnalisés.
* Expériences interactives multimodales.

## Note finale

Les agents excellent dans l'exploration mais ont du mal à suivre des règles strictes.

Les 18 projets d'agents open source ci-dessus sont à la fois une boîte à outils et un rappel : sélectionner les bons scénarios et concevoir des limites raisonnables est la clé pour maximiser la valeur des agents.

Si cet article vous a inspiré, n'hésitez pas à le partager avec d'autres personnes explorant les agents d'IA. 👍

**Lectures connexes :**

* [Top 20 des projets IA open source avec le plus d'étoiles GitHub](https://www.nocobase.com/en/blog/github-open-source-ai-projects)
* [Top 8 des projets MCP open source avec le plus d'étoiles GitHub](https://www.nocobase.com/en/blog/github-open-source-mcp-projects)
* [Top 7 des applications web open source avec le plus d'étoiles GitHub](https://www.nocobase.com/en/blog/github-open-source-web-applications)
* [Top 40 des outils développeur open source avec le plus d'étoiles GitHub](https://www.nocobase.com/en/blog/github-open-source-developer-tools)
* [Top 15 des projets low-code open source à la croissance la plus rapide sur GitHub en 2025](https://www.nocobase.com/en/blog/github-top15-fastest-growing-open-source-low-code-projects)
* [Top 11 des projets CRM open source avec le plus d'étoiles GitHub](https://www.nocobase.com/en/blog/github-open-source-crm-projects)
