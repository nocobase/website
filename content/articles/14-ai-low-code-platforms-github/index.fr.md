---
title: "14 plateformes low-code boostées par l'IA sur GitHub à suivre"
description: "Nous avons sélectionné 14 plateformes low-code populaires boostées par l'IA sur GitHub — couvrant les workflows, les agents, la création de systèmes et les bases de données intelligentes — pour vous aider à construire des systèmes plus intelligents et plus évolutifs."
---

📝 Note : Cet article a été mis à jour pour la dernière fois le 21 janvier 2026. Nous mettons régulièrement à jour les informations pour vous garantir les dernières tendances ! 😊

Récemment, je suis tombé sur un commentaire très direct sur Reddit :

![Reddit2.png](https://static-docs.nocobase.com/image-4j39lb.png)

> *"Ces plateformes no-code IA ne dureront pas un an. Si l'IA est vraiment aussi puissante, elle ne devrait pas encore dépendre du glisser-déposer de blocs de workflow pour construire des fonctionnalités."*

Le point de vue est tranché, mais ce commentaire a été posté il y a huit mois. Avec le recul, ces outils n'ont pas disparu. Beaucoup sont devenus plus matures, et de nouveaux projets continuent d'apparaître.

Il y a quelques jours, nous avons également passé en revue une liste des [outils no-code IA open source les plus populaires sur GitHub](https://www.nocobase.com/en/blog/top-11-github-open-source-no-code-ai-tools). Basé sur les étoiles, l'activité de la communauté et la maturité des fonctionnalités, de nombreux projets sont non seulement actifs mais continuent d'évoluer avec des capacités IA plus fortes.

Certains utilisateurs de Reddit soutiennent encore que la plupart des outils low-code IA en sont à un stade précoce et que certains soi-disant agents IA ne sont que des outils d'automatisation connectés à un LLM.

![Reddit3.png](https://static-docs.nocobase.com/img_v3_02rc_522ac857-0534-4006-ae62-6b989e7e13bg-v1yz3w.png)

---

💬 Hé, vous lisez le blog NocoBase. NocoBase est la plateforme de développement no-code/low-code la plus extensible, boostée par l'IA, pour construire des applications d'entreprise, des outils internes et toutes sortes de systèmes. Elle est entièrement auto-hébergée, basée sur des plugins et conviviale pour les développeurs. → [Découvrez NocoBase sur GitHub](https://github.com/nocobase/nocobase)

---

D'après nos observations, l'écosystème low-code a progressé régulièrement. De nombreuses plateformes prennent déjà en charge des scénarios métier réels grâce à la modélisation des données, la logique de workflow, les extensions de plugins et la collaboration pilotée par l'IA.

Pour cet article, nous avons exploré le sujet low-code de GitHub et identifié quatorze plateformes qui ont déjà intégré l'IA de manière pratique. Nous les avons organisées en trois catégories : les constructeurs de systèmes métier, les outils de workflow d'agents et les applications basées sur des tableaux de données.

Avant d'entrer dans les détails, vous pouvez utiliser le tableau comparatif suivant pour avoir un aperçu clair de la façon dont ces quatorze outils se positionnent et appliquent l'IA.👇

**Tableau comparatif (Aperçu des fonctionnalités IA × Positionnement des outils)**

| Outil     | Catégorie          | Utilisation de l'IA                         | Extensibilité du workflow | Prise en charge Modélisation/UI | Prise en charge Tableau/Données | Capacité transversale          |
| --------- | ------------------ | ------------------------------------------- | ------------------------- | ------------------------------- | ------------------------------- | ------------------------------ |
| NocoBase  | Applications métier| L'IA génère des modèles de données, pages, logique | ✅ Plugins + Automatisation | ✅ Complet                      | ✅                              | ⭐ Fort (Données + Système + Flux) |
| ToolJet   | Applications métier| AI Copilot génère des pages/scripts API     | ⚠️ Flux légers            | ✅                              | ⚠️                             | Moyen                          |
| Appsmith  | Applications métier| L'IA génère du SQL et de la logique de formulaire | ⚠️                        | ✅                              | ⚠️                             | Moyen                          |
| Budibase  | Applications métier| L'IA remplit des champs, génère du texte de formulaire | ⚠️                        | ✅                              | ⚠️                             | Faible                         |
| refine    | Applications métier| L'IA génère de la logique et du code CRUD   | ❌                         | ✅ (axé code)                   | ❌                              | Non                            |
| n8n       | Workflow/Agent     | Tâches IA, appels API                       | ✅                         | ❌                              | ❌                              | Non                            |
| Dify      | Workflow/Agent     | Agents, base de connaissances, appel d'outils | ✅                         | ❌                              | ⚠️                             | Non                            |
| Flowise   | Workflow/Agent     | RAG, chaînes LLM visuelles                  | ⚠️                        | ❌                              | ⚠️                             | Non                            |
| Kestra    | Workflow/Agent     | L'IA génère des workflows YAML              | ✅                         | ❌                              | ❌                              | Non                            |
| Node-RED  | Workflow/IoT       | Nœuds IA + automatisation appareil/événement | ⚠️                        | ❌                              | ❌                              | Non                            |
| Sim       | Workflow/Agent     | Workflows collaboratifs multi-agents        | ⚠️                        | ❌                              | ❌                              | Non                            |
| NocoDB    | Tableaux de données| Remplissage IA, champs intelligents, insights | ⚠️                        | ❌                              | ✅                              | Faible                         |
| Teable    | Tableaux de données| Chat IA et rapports générés automatiquement | ⚠️                        | ❌                              | ✅                              | Faible                         |
| Onlook    | UI IA              | L'IA génère UI/composants/code React        | ❌                         | ⚠️ (axé UI)                    | ❌                              | Spécialisé (axé UI)            |

## **Constructeurs d'applications métier boostés par l'IA**

Ces outils n'utilisent pas seulement l'IA pour répondre à des questions ou déclencher des workflows — l'IA est directement impliquée dans la construction de l'application elle-même.

Ils aident les utilisateurs à créer rapidement des modèles de données, des formulaires, des pages, des autorisations et des systèmes métier internes, ce qui les rend idéaux pour les CRM, les approbations, les ERP, les tableaux de bord d'administration et les plateformes de saisie de données.

### **NocoBase**

⭐️ Étoiles : 20k

Site web : [https://www.nocobase.com/](https://www.nocobase.com/)

GitHub : [https://github.com/nocobase/nocobase](https://github.com/nocobase/nocobase)

![noocobase.png](https://static-docs.nocobase.com/noocobase-auxpuu.png)

**Aperçu** :

NocoBase a commencé comme une plateforme low-code open source construite sur une architecture pilotée par les modèles de données et un système de plugins.

Dans la version 2.0, il permet à l'IA de participer à la fois à la construction du système et à l'exploitation quotidienne. Il peut écrire et exécuter du JavaScript à l'intérieur de la plateforme pour une logique complexe et une automatisation, et des travailleurs IA peuvent être placés dans n'importe quelle partie du système pour améliorer l'expérience globale.

![noocobase2.png](https://static-docs.nocobase.com/noocobase2-83efsk.png)

**Phase de construction**

Les travailleurs IA peuvent générer des modèles de données, des relations de champs, des structures de pages et une logique de base à partir du langage naturel. Les tâches qui nécessitaient auparavant plusieurs étapes de configuration deviennent plus simples. Avec l'assistance de l'IA, un système métier peut prendre forme beaucoup plus rapidement, améliorant considérablement l'efficacité du développement.

![noocobase3.png](https://static-docs.nocobase.com/noocobase3-geirqa.png)

**Phase d'utilisation**

L'IA peut interroger et interpréter les données du système et fournir des informations ou suggestions pertinentes, comme remplir des formulaires, résumer des informations clients ou soutenir des tâches de recherche.

**Utilisateurs cibles** : Équipes construisant des systèmes métier — équipes IT internes, équipes produit B2B, intégrateurs de systèmes.

**Cas d'utilisation** : CRM, workflows d'approbation, gestion de projet, systèmes de commandes et d'actifs, avec prise en charge de plugins pour l'automatisation et la modélisation pilotée par l'IA.

### **ToolJet**

⭐️ Étoiles : 37k

Site web : [https://www.tooljet.ai/](https://www.tooljet.ai/)

GitHub : [https://github.com/ToolJet/ToolJet](https://github.com/ToolJet/ToolJet)

![ToolJet.png](https://static-docs.nocobase.com/ToolJet-7balkk.png)

**Aperçu** : ToolJet est depuis longtemps un outil productif pour construire des applications d'entreprise internes. Avec l'IA ajoutée, le flux de développement devient encore plus efficace. AI Copilot génère des mises en page, la logique des composants et des interactions de base à partir du langage naturel, ce qui élimine le besoin pour les développeurs de basculer entre les composants, les scripts et les API. Ce flux de travail "décrire et générer" réduit le travail manuel de configuration et de script et aide les équipes à construire des outils internes de manière plus ciblée et plus rentable.

**Utilisateurs cibles** : Équipes d'ingénierie, d'exploitation ou de données qui ont besoin de tableaux de bord internes rapidement.

**Cas d'utilisation** : Panneaux d'administration, outils internes, applications basées sur des API où l'IA peut aider à écrire du SQL, générer des mises en page ou des scripts.

### **Appsmith**

⭐️ Étoiles : 38k

Site web : [https://www.appsmith.com/](https://www.appsmith.com/)

GitHub : [https://github.com/appsmithorg/appsmith](https://github.com/appsmithorg/appsmith)

![Appsmith.png](https://static-docs.nocobase.com/Appsmith-ycvv0e.png)

**Aperçu** : Appsmith est une plateforme low-code open source conçue pour le développement d'outils internes, offrant un système de composants solide, des connexions de sources de données fiables et des capacités CRUD bien développées. Avec l'introduction de l'IA, l'expérience de développement devient plus fluide. L'IA génère des requêtes SQL, une logique de validation de formulaires et des scripts de base à partir du langage naturel et peut compléter automatiquement la configuration de pages courantes. Cela réduit le besoin de basculer entre le code et les paramètres des composants et accélère le développement d'outils internes tout en abaissant la barrière pour les applications axées sur les données.

**Utilisateurs cibles** : Développeurs front-end, constructeurs d'outils de données, équipes créant des systèmes CRUD.

**Cas d'utilisation** : Tableaux de bord de requêtes, outils d'administration internes, utilitaires de base de données — par exemple, langage naturel → L'IA génère du SQL → sortie de tableau.

### **Budibase**

⭐️ Étoiles : 27k

Site web : [https://budibase.com/](https://budibase.com/)

GitHub : [https://github.com/Budibase/budibase](https://github.com/Budibase/budibase)

![Budibase.png](https://static-docs.nocobase.com/Budibase-gjjun3.png)

**Aperçu** : Budibase est une plateforme low-code open source conçue pour les applications métier internes. Elle se concentre sur la modélisation des données, la création de formulaires et les workflows de base et répond aux besoins des petites et moyennes entreprises. Avec l'IA ajoutée, Budibase améliore le processus de construction en assistant les tâches de routine.

L'IA aide à générer le contenu des champs, à remplir les données et à créer des mises en page simples, réduisant ainsi le travail répétitif dans la configuration des formulaires et la saisie des données. Bien qu'elle ait encore un support limité pour la logique complexe, l'IA rend Budibase plus efficace pour les systèmes légers, les outils de formulaires internes et les applications de saisie de données.

**Utilisateurs cibles** : Petites et moyennes équipes, systèmes internes légers, passionnés de no-code.

**Cas d'utilisation** : Applications de formulaires, outils de bureau internes, plateformes de saisie de données. L'IA aide à remplir les champs ou à créer des exemples de données, mais le support de la logique complexe est limité.

### **Refine**

⭐️ Étoiles : 33k

Site web : [https://refine.dev/](https://refine.dev/)

GitHub : [https://github.com/refinedev/refine](https://github.com/refinedev/refine)

![refine.png](https://static-docs.nocobase.com/refine-64wrxv.png)

**Aperçu** : Refine est un framework basé sur React pour la construction de panneaux d'administration et d'outils internes. Il gère bien les flux CRUD courants, le routage, les autorisations et les connexions de données. Les développeurs peuvent décrire l'interface ou la fonctionnalité en langage naturel, et l'IA génère la mise en page, les interactions et le code de base sous forme de projet React prêt à l'emploi.

**Utilisateurs cibles** : Développeurs front-end et équipes techniques qui ont besoin de flexibilité plutôt que d'outils de glisser-déposer.

**Cas d'utilisation** : Tableaux de bord d'administration et outils de données où un contrôle au niveau du code est requis, mais la vitesse de développement est toujours importante. N'inclut pas la modélisation back-end.

## **Orchestration de workflows / d'agents IA**

Ces outils se distinguent car l'IA ne se contente pas de générer du contenu — elle participe activement à l'exécution des workflows. L'IA peut appeler des outils, déclencher des actions et piloter l'automatisation des processus.

Considérez-les comme des moteurs de workflow améliorés par l'IA ou des plateformes d'exécution d'agents, plutôt que comme des constructeurs complets de systèmes métier low-code.

Ils excellent dans l'automatisation et l'exécution, mais manquent généralement de modélisation de données complexe, de systèmes d'autorisation ou de capacités de construction d'UI/pages.

### **n8n**

⭐️ Étoiles : 157k

Site web : [https://n8n.io/](https://n8n.io/)

GitHub : [https://github.com/n8n-io/n8n](https://github.com/n8n-io/n8n)

![n8n.png](https://static-docs.nocobase.com/n8n-8riwih.png)

**Aperçu** : n8n est une plateforme d'automatisation low-code open source qui relie les systèmes, les API et les services via une interface visuelle. Avec l'ajout de nœuds IA, n8n peut permettre aux LLM d'analyser des données, de générer du contenu, de prendre des décisions et d'appeler des API externes à l'intérieur d'un workflow plutôt que de suivre uniquement des règles prédéfinies.

**Utilisateurs cibles** : Équipes d'exploitation, ingénieurs support, spécialistes de l'automatisation, PME.

**Cas d'utilisation** : Génération automatisée de contenu, synchronisation de données, réponses par e-mail, workflows de décision assistés par IA (par exemple, l'IA répond à un client → enregistre dans la base de données → envoie un e-mail).

### **Dify**

⭐️ Étoiles : 119k

Site web : [https://dify.ai/](https://dify.ai/)

GitHub : [https://github.com/langgenius/dify](https://github.com/langgenius/dify)

![Dify.png](https://static-docs.nocobase.com/Dify-gk2be6.png)

**Aperçu** : Dify est une plateforme open source pour la construction d'applications IA et d'agents. Elle offre la gestion de modèles, des bases de connaissances, l'orchestration conversationnelle et l'intégration d'outils. Grâce à ces capacités, Dify prend en charge le raisonnement en plusieurs étapes, les appels API, l'accès aux données et la construction visuelle de workflows d'agents, permettant aux équipes de passer en douceur de la conversation aux actions système.

**Utilisateurs cibles** : Équipes produit et développeurs construisant des assistants IA, des bots de connaissances ou des prototypes.

**Cas d'utilisation** : Chatbots basés sur une base de connaissances, traitement automatisé des tickets, agents IA exécutant des actions API.

### **Flowise**

⭐️ Étoiles : 47k

Site web : [https://flowiseai.com/](https://flowiseai.com/)

GitHub : [https://github.com/FlowiseAI/Flowise](https://github.com/FlowiseAI/Flowise)

![Flowise.png](https://static-docs.nocobase.com/Flowise-2vawwu.png)

**Aperçu** : Flowise est une plateforme visuelle low-code open source pour la construction d'agents IA et de workflows LLM. Elle offre un constructeur visuel, un traçage d'exécution, des intégrations API et SDK, et un déploiement local. Avec les capacités IA incluses, Flowise prend en charge les agents multi-étapes, l'utilisation d'outils et la récupération de connaissances. Les équipes peuvent concevoir une collaboration homme-IA et une logique de workflow simplement en faisant glisser et en connectant des nœuds.

**Utilisateurs cibles** : Développeurs IA, équipes de prototypage, startups en phase de démarrage.

**Cas d'utilisation** : Q&R de connaissances, chatbots légers, démonstrations de raisonnement en plusieurs étapes — ne convient pas aux systèmes métier complets.

### **Kestra**

⭐️ Étoiles : 23k

Site web : [https://kestra.io/](https://kestra.io/)

GitHub : [https://github.com/kestra-io/kestra](https://github.com/kestra-io/kestra)

![Kestra.png](https://static-docs.nocobase.com/Kestra-1n19xy.png)

**Aperçu** : Kestra est une plateforme open source pour l'orchestration et la planification de tâches, conçue pour les workflows visuels, les plans d'exécution et la surveillance. Elle prend en charge la génération de workflows YAML assistée par IA, les appels de modèles et la logique conditionnelle. Les utilisateurs peuvent créer des chaînes de tâches complexes avec un langage naturel ou des modèles et suivre l'exécution avec des journaux détaillés.

**Utilisateurs cibles** : Ingénieurs de données, développeurs back-end, équipes DevOps.

**Cas d'utilisation** : Tâches planifiées générées par IA, pipelines de données, chaînes de tâches API — axé sur l'exécution back-end.

### **Node-RED**

⭐️ Étoiles : 22k

Site web : [https://nodered.org/](https://nodered.org/)

GitHub : [https://github.com/node-red/node-red](https://github.com/node-red/node-red)

![Node-RED.png](https://static-docs.nocobase.com/Node-RED-0c9pxy.png)

**Aperçu** : Node-RED est un outil de flux visuel piloté par les événements qui connecte des appareils, des services et des API via des nœuds pour construire une logique d'automatisation et des pipelines de données. La plateforme offre une variété de nœuds IA pour l'inférence de modèles, la génération de contenu, l'analyse d'informations et la prise de décision conditionnelle. Les flux peuvent exécuter des actions plus flexibles basées sur les sorties du modèle. Les nœuds peuvent également s'intégrer à des appareils IoT, des webhooks ou des événements système pour créer des workflows de traitement de bout en bout.

**Utilisateurs cibles** : Ingénieurs en automatisation, développeurs matériels, équipes domotique/IoT.

**Cas d'utilisation** : La caméra détecte un mouvement → L'IA prend une décision → déclenche un interrupteur ; anomalie d'appareil → analyse IA → envoie une alerte.

### **Sim**

⭐️ Étoiles : 18k

Site web : [https://www.sim.ai/](https://www.sim.ai/)

GitHub : [https://github.com/simstudioai/sim](https://github.com/simstudioai/sim)

![Sim.png](https://static-docs.nocobase.com/Sim-sygfqw.png)

**Aperçu** : Sim est une plateforme open source pour la construction de workflows collaboratifs multi-agents. Elle organise les modèles, les outils et les étapes de tâches via une interface visuelle. La plateforme prend en charge la coopération multi-modèles, l'invocation d'outils, la décomposition de tâches et l'exécution de flux. Les agents peuvent communiquer, diviser le travail et effectuer un raisonnement ou des actions dans le même workflow. Les utilisateurs peuvent configurer des rôles, des capacités et des chaînes de tâches selon les besoins pour générer des systèmes multi-agents exécutables.

**Utilisateurs cibles** : Équipes IA construisant des agents multi-rôles, startups d'assistants intelligents.

**Cas d'utilisation** : Assistants IA, génération automatisée de rapports, exécution intelligente de tâches — bien que moins mature que n8n ou Dify.

## **IA + Tableurs intelligents / Outils de base de données**

Ces outils ne se concentrent pas sur l'exécution de workflows ou les systèmes métier complets — leur valeur fondamentale réside dans le fait de rendre les données et les tableurs plus intelligents.

Ici, l'IA est principalement utilisée pour générer, compléter, interroger et analyser des données — pas pour gérer une logique métier complexe.

Ils peuvent être considérés comme des "Airtable / Notion Database améliorés par l'IA", idéaux pour les équipes axées sur les données, les opérations de contenu ou la gestion des connaissances — plutôt que pour les systèmes métier lourds ou l'automatisation des workflows.

### **NocoDB**

⭐️ Étoiles : 59k

Site web : [https://nocodb.com/](https://nocodb.com/)

GitHub : [https://github.com/nocodb/nocodb](https://github.com/nocodb/nocodb)

![NocoDB.png](https://static-docs.nocobase.com/NocoDB-qk45qn.png)

**Aperçu** : Une alternative open source à Airtable qui offre la configuration de champs, la gestion des vues et une automatisation de base. Ses fonctionnalités IA prennent en charge la génération de contenu, la complétion de données, l'analyse de tableaux et les suggestions intelligentes.

**Utilisateurs cibles** : Équipes gérant des données structurées — équipes d'exploitation, groupes de collaboration internes, utilisateurs CRM légers.

**Cas d'utilisation** : Référentiels de contenu, tableaux clients, gestion des stocks, feuilles de collaboration d'équipe. Les fonctionnalités IA incluent des suggestions de champs, la génération de contenu, la complétion automatique et des informations intelligentes pour l'analyse des données.

### **Teable**

⭐️ Étoiles : 20k

Site web : [https://teable.ai/](https://teable.ai/)

GitHub : [https://github.com/teableio/teable](https://github.com/teableio/teable)

![Teable.png](https://static-docs.nocobase.com/Teable-n74cv7.png)

**Aperçu** : Une plateforme de gestion de données similaire à Airtable avec prise en charge des types de champs, des vues et de la collaboration d'équipe. Ses fonctionnalités IA peuvent générer du contenu de tableau via la conversation, traiter des données, créer des rapports et exécuter des commandes textuelles, les modèles travaillant directement à l'intérieur du tableau.

**Utilisateurs cibles** : Utilisateurs d'Airtable/Notion ou équipes ayant besoin d'une collaboration de données avec une assistance IA.

**Cas d'utilisation** : Gestion de contenu, entrepôt de données léger, tableaux de projets d'équipe. Prend en charge l'interaction de données conversationnelle — comme l'interrogation d'enregistrements via le langage naturel, la génération de données de tableau en masse ou la création automatique de rapports.

## **Outils qui ne correspondent pas entièrement aux catégories ci-dessus**

Au cours de nos recherches, nous avons également trouvé des outils qui ne rentrent pas complètement dans l'une des trois catégories principales — comme **Onlook**.

⭐️ Étoiles : 23k

Site web : [https://onlook.com/](https://onlook.com/)

GitHub : [https://github.com/onlook-dev/onlook](https://github.com/onlook-dev/onlook)

![Onlook.png](https://static-docs.nocobase.com/Onlook-bnn4iz.png)

Ce qui rend Onlook différent, c'est que sa capacité principale est "l'interface utilisateur générée par IA".

Vous pouvez décrire une page en langage naturel ou fournir un wireframe, et la plateforme produira la structure de la page et la disposition des composants. Elle génère du code React, gère les styles et les relations de mise en page, et offre une édition visuelle pour affiner l'interface et ajuster la hiérarchie des composants. L'outil est conçu pour la construction d'interfaces avec une conception assistée par IA, se situant entre un outil de conception et une plateforme front-end low-code.

## **Réflexions finales**

Nous avions l'habitude de construire des systèmes en écrivant du code. Puis sont venues les interfaces de glisser-déposer. Maintenant, de plus en plus de gens commencent à décrire comment un système devrait fonctionner — et laissent l'IA aider à le construire.

> *"L'IA ne supprime pas le travail — elle le déplace simplement."*

Le véritable défi n'est plus de savoir si nous utilisons l'IA, mais si nous pouvons intégrer profondément l'IA avec la logique métier, les données et les workflows, et en faire une partie du système lui-même.

L'IA passe d'un outil de conversation à un outil de construction. Ce n'est pas encore parfait, mais la direction est claire.
À l'avenir, les systèmes ne seront peut-être pas "développés" — ils seront peut-être décrits. Et nous partirons de problèmes métier réels, pas seulement d'un éditeur de code.

Si vous avez lu jusqu'ici et ressentez le même changement, n'hésitez pas à partager cette liste avec d'autres personnes qui se soucient de **l'IA × le low-code**.👍

**Lectures connexes :**

* [Top 11 des outils no-code IA open source avec le plus d'étoiles GitHub](https://www.nocobase.com/en/blog/top-11-github-open-source-no-code-ai-tools)
* [Top 18 des projets d'agents IA open source avec le plus d'étoiles GitHub](https://www.nocobase.com/en/blog/github-open-source-ai-agent-projects)
* [Top 20 des projets IA open source avec le plus d'étoiles GitHub](https://www.nocobase.com/en/blog/github-open-source-ai-projects)
* [Top 8 des projets MCP open source avec le plus d'étoiles GitHub](https://www.nocobase.com/en/blog/github-open-source-mcp-projects)
* [Top 7 des applications web open source avec le plus d'étoiles GitHub](https://www.nocobase.com/en/blog/github-open-source-web-applications)
* [Top 40 des outils de développement open source avec le plus d'étoiles GitHub](https://www.nocobase.com/en/blog/github-open-source-developer-tools)
* [Top 15 des projets low-code open source à la croissance la plus rapide sur GitHub en 2025](https://www.nocobase.com/en/blog/github-top15-fastest-growing-open-source-low-code-projects)
