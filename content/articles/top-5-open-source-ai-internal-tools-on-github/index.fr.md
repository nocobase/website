---
title: "Top 5 des outils internes IA open-source sur GitHub"
description: "Une revue de cinq outils internes open source avec plus de 20 000 étoiles, ainsi qu'une analyse de leurs capacités IA et de leurs cas d'utilisation clés."
---

📝 Note : Cet article a été mis à jour pour la dernière fois le 21 janvier 2026. Nous mettons régulièrement les informations à jour pour vous garantir les dernières informations ! 😊

Nous avons précédemment compilé une série de ressources de projets open source d'IA, notamment une revue de [11 plateformes open source d'IA sans code sur GitHub](https://www.nocobase.com/en/blog/top-11-github-open-source-no-code-ai-tools) et [plusieurs résumés d'outils low-code d'IA](https://www.nocobase.com/en/blog/14-ai-low-code-platforms-github). Alors que la technologie de l'IA progresse rapidement, de plus en plus de projets open source commencent à adopter activement des capacités d'IA.

Un changement similaire se produit dans le domaine des outils internes. L'année dernière, nous avons présenté un certain nombre de [projets open source exceptionnels d'outils internes](https://www.nocobase.com/en/blog/open-source-internal-tools), et d'ici 2025, la plupart d'entre eux ont ajouté des fonctionnalités d'IA, donnant à l'ensemble de l'écosystème un aspect renouvelé. Cela nous a incités à créer un aperçu mis à jour et plus systématique.

😄[ Si vous débutez avec les outils internes et la valeur qu'ils apportent, vous voudrez peut-être d'abord lire le guide d'introduction.](https://www.nocobase.com/en/blog/top-5-open-source-projects-for-building-internal-tools-in-2024#what-are-the-benefits-of-internal-tools)

Dans cette mise à jour, nous avons sélectionné des outils internes open source du sujet [GitHub Internal Tools](https://github.com/topics/internal-tools) avec plus de 20k Stars et une forte traction communautaire, et résumé leurs caractéristiques techniques et leurs cas d'utilisation idéaux.

---

💬 Hé, vous lisez le blog NocoBase. NocoBase est la plateforme de développement low-code/sans code alimentée par l'IA la plus extensible pour créer des applications d'entreprise, des outils internes et toutes sortes de systèmes. Elle est entièrement auto-hébergée, basée sur des plugins et conviviale pour les développeurs. →[ Explorez NocoBase sur GitHub](https://github.com/nocobase/nocobase)

---

Notre objectif est de vous aider à comprendre rapidement quels outils internes restent dignes d'investissement à l'ère de l'IA, et de fournir une orientation claire aux équipes techniques qui construisent leurs propres systèmes internes.

Voici un aperçu rapide des 5 outils internes open source que nous allons couvrir.

* **NocoBase** : une plateforme sans code pilotée par un modèle de données conçue pour les outils internes, dotée d'un système de plugins hautement extensible. Ses agents d'IA peuvent aider à la préparation des données, à la modélisation, à la création de graphiques et à la génération de code.
* **Budibase** : un constructeur d'outils internes low-code offrant une base de données intégrée, une création d'interface utilisateur par glisser-déposer, des CRUD générés automatiquement, des colonnes IA et une conception de table assistée par IA.
* **Refine** : un méta-framework basé sur React conçu pour les systèmes d'administration intensifs en CRUD, prenant désormais en charge les mises en page, les structures et le code générés par l'IA.
* **ToolJet** : une plateforme qui mélange le low-code avec des capacités d'IA natives, permettant aux utilisateurs de générer des interfaces et de la logique via le langage naturel.
* **Appsmith** : une plateforme low-code open source mature qui se connecte à plusieurs sources de données, idéale pour créer des tableaux de bord d'administration, des flux d'approbation et des outils opérationnels, désormais enrichie d'actions pilotées par l'IA.

### NO.5 NocoBase

![nocobase.png](https://static-docs.nocobase.com/nocobase-ovk3pi.png)


| GitHub        | [https://github.com/nocobase/nocobase](https://github.com/nocobase/nocobase)           |
| ------------- | -------------------------------------------------------------------------------------- |
| Site web      | [https://www.nocobase.com/](https://www.nocobase.com/)                                 |
| Licence       | AGPL-3.0                                                                               |
| GitHub Stars  | 20,5k                                                                                  |
| Forks         | 2,3k                                                                                   |
| Issues        | 129                                                                                    |
| Pull Requests | 125                                                                                    |
| Contributeurs | 101                                                                                    |
| Dernière mise à jour | mis à jour aujourd'hui                                                          |
| Documentation | [https://v2.docs.nocobase.com/ai-employees](https://v2.docs.nocobase.com/ai-employees) |

**Aperçu**

NocoBase est une plateforme de développement sans code pilotée par un modèle de données conçue pour créer des outils internes. Son architecture basée sur des plugins est hautement extensible et prend en charge la création de panneaux d'administration, de systèmes métier, de CRM, de flux d'approbation et d'une large gamme d'applications internes. Elle offre un constructeur d'interface utilisateur visuel WYSIWYG et prend en charge les relations de données complexes, les modèles de permission et la logique personnalisée, ce qui la rend idéale pour les équipes qui ont besoin de fournir rapidement des outils métier.

Dans NocoBase, l'IA n'est pas un module isolé. Au lieu de cela, elle est intégrée directement dans les tables, les formulaires, les modèles de données et les workflows. Le framework AI Employees intègre l'IA dans les opérations métier, permettant la collaboration avec les modèles, les formulaires, les tables et les workflows. Les types d'employés IA intégrés incluent le nettoyage des données, la modélisation des schémas, la recherche de connaissances, la génération de graphiques et la génération de code, aidant les utilisateurs à réduire le coût du traitement des données, de la configuration de l'interface et de la construction logique.

**Cas d'utilisation**

**Nettoyage des données (Dex, Spécialiste du traitement des données)**

Les employés IA extraient des informations structurées à partir de contenu non structuré tel que les données clients, les tickets ou le texte des contrats et peuvent remplir automatiquement les formulaires.

![Dex.gif](https://static-docs.nocobase.com/Dex-c4uwn4.gif)

**Analyse des données (Viz, Analyste d'informations)**

Sur des pages comme Leads, Opportunities ou Accounts, les employés IA peuvent analyser l'ensemble de données actuel et créer automatiquement des graphiques de tendance, des comparaisons, des cartes KPI et des informations concises.

![Viz.gif](https://static-docs.nocobase.com/Viz-demgin.gif)

**Configuration frontend (Nathan, Ingénieur Frontend)**

Lorsque vous travaillez avec JSBlock, JSField, JSItem, JSColumn, JSAction ou Event Flow, les employés IA peuvent examiner le contexte du code et générer ou affiner du JavaScript basé sur des invites en langage naturel.

![Nathan.png](https://static-docs.nocobase.com/Nathan-n9ybjn.png)

**Modélisation des données (Orin, Modeleur de données)**

Lors de la création de systèmes internes tels que des CRM, des systèmes de billetterie, d'inventaire ou de gestion de projet, les employés IA peuvent aider à générer ou mettre à jour des tables de données.

![Orin.png](https://static-docs.nocobase.com/Orin-ahkat1.png)

### NO.4 Budibase

![budibase.png](https://static-docs.nocobase.com/budibase-wahysy.png)


| GitHub        | [https://github.com/Budibase/budibase](https://github.com/Budibase/budibase)                                   |
| ------------- | -------------------------------------------------------------------------------------------------------------- |
| Site web      | [https://budibase.com/](https://budibase.com/)                                                                 |
| Licence       | GPL-v3                                                                                                         |
| Stars         | 27,4k                                                                                                          |
| Forks         | 2k                                                                                                             |
| Issues        | 294                                                                                                            |
| Pull Requests | 12                                                                                                             |
| Contributeurs | 112                                                                                                            |
| Dernière mise à jour | mis à jour aujourd'hui                                                                                  |
| Documentation | [https://docs.budibase.com/docs/quickstart-budibase-ai](https://docs.budibase.com/docs/quickstart-budibase-ai) |

**Aperçu**

Budibase est une plateforme low-code open source pour créer des outils internes. Elle prend en charge les connexions à des bases de données, plusieurs sources de données, la création d'interface utilisateur par glisser-déposer, et la génération automatique de CRUD et de workflows, ce qui la rend adaptée à la création de backends d'entreprise, de flux d'approbation, de systèmes de formulaires et de panneaux d'administration. Grâce à sa base de données intégrée, sa prise en charge de l'API REST et son constructeur visuel, les équipes sans expérience frontend étendue peuvent toujours créer des applications internes complètes.

Budibase a également intégré l'IA en tant que capacité native de la plateforme. Avec Budibase AI activé, les utilisateurs peuvent créer des colonnes IA pour des opérations de données intelligentes, générer une logique JavaScript à partir du langage naturel, produire automatiquement des schémas de base de données et utiliser des automatisations basées sur l'IA pour nettoyer, classer, transformer et générer des données.

**Cas d'utilisation**

**Nettoyage intelligent des données et préparation du contenu**

Les colonnes IA peuvent automatiquement nettoyer, normaliser et catégoriser les données, utiles pour les commentaires clients, la modération de contenu, le traitement des tickets et des workflows similaires.

![AI Column.png](https://static-docs.nocobase.com/AI%20Column-imcj5c.png)

**Génération automatique de schémas de base de données**

Lors de la création de nouveaux modules tels que la gestion des clients, les workflows de contrats ou les systèmes de tâches, Budibase AI peut générer des structures de table appropriées et des enregistrements d'exemple à partir d'une seule invite en langage naturel.

![数据库表结构.png](https://static-docs.nocobase.com/%E6%95%B0%E6%8D%AE%E5%BA%93%E8%A1%A8%E7%BB%93%E6%9E%84-rc0ka3.png)

### NO.3 Refine

![refine-li9il9.png](https://static-docs.nocobase.com/refine-li9il9.png)


| GitHub        | [https://github.com/refinedev/refine](https://github.com/refinedev/refine) |
| ------------- | -------------------------------------------------------------------------- |
| Site web      | [https://refine.dev/](https://refine.dev/)                                 |
| Licence       | MIT                                                                        |
| Stars         | 33,5k                                                                      |
| Forks         | 2,9k                                                                       |
| Issues        | 17                                                                         |
| Pull Requests | 11                                                                         |
| Contributeurs | 311                                                                        |
| Dernière mise à jour | il y a 2 jours                                                        |
| Documentation | [https://ai.refine.dev/](https://ai.refine.dev/)                           |

**Aperçu**

Refine est un méta-framework React open source conçu pour les applications web intensives en CRUD, les systèmes d'administration d'entreprise, les tableaux de bord et autres outils B2B internes.

Refine AI apporte l'IA dans le flux de travail de développement. Avec le langage naturel, la documentation ou les spécifications d'API comme entrée, Refine AI peut générer une échafaudage d'application React prêt pour la production, comprenant des pages CRUD, le routage, l'authentification, la gestion d'état et la récupération de données. La sortie est un code React propre et standard que les développeurs peuvent étendre ou adapter librement.

**Cas d'utilisation**

**Génération de systèmes d'administration**

Basé sur des API ou des modèles de données, Refine AI peut créer des interfaces CRUD avec des pages de liste, de formulaire et de détail, ce qui le rend idéal pour amorcer rapidement des systèmes tels que l'inventaire, les commandes ou la gestion de projet.

![后台管理系统生成-3eh30p.png](https://static-docs.nocobase.com/%E5%90%8E%E5%8F%B0%E7%AE%A1%E7%90%86%E7%B3%BB%E7%BB%9F%E7%94%9F%E6%88%90-3eh30p.png)

**Refactorisation et maintenance des bases de code existantes**

Parce que Refine AI génère du code qui suit les modèles et les meilleures pratiques de niveau entreprise, il peut également être utilisé pour refactoriser des systèmes plus anciens en composants modulaires ou pour ajouter rapidement de nouveaux modules métier sur un projet existant, améliorant à la fois la vitesse de développement et la maintenabilité à long terme.

![代码重构与维护.png](https://static-docs.nocobase.com/%E4%BB%A3%E7%A0%81%E9%87%8D%E6%9E%84%E4%B8%8E%E7%BB%B4%E6%8A%A4-muoonn.png)

💡 Lecture recommandée : [NocoBase vs Refine](https://www.nocobase.com/cn/blog/nocobase-vs-refine)

### NO.2 ToolJet

![ToolJet-4nyv0g.png](https://static-docs.nocobase.com/ToolJet-4nyv0g.png)


| GitHub        | [https://github.com/ToolJet/ToolJet](https://github.com/ToolJet/ToolJet)                                     |
| ------------- | ------------------------------------------------------------------------------------------------------------ |
| Site web      | [https://tooljet.ai/](https://tooljet.ai/)                                                                   |
| Licence       | AGPL-3.0                                                                                                     |
| Stars         | 37k                                                                                                          |
| Forks         | 4,9k                                                                                                         |
| Issues        | 646                                                                                                          |
| Pull Requests | 313                                                                                                          |
| Contributeurs | 651                                                                                                          |
| Dernière mise à jour | il y a un jour                                                                                         |
| Documentation | [https://docs.tooljet.com/docs/build-with-ai/overview](https://docs.tooljet.com/docs/build-with-ai/overview) |

**Aperçu**

ToolJet est une plateforme open source, low-code et native IA pour créer des outils internes d'entreprise, des tableaux de bord, des systèmes d'administration et des applications métier. Elle offre un constructeur visuel par glisser-déposer, une base de données intégrée, de nombreuses intégrations de sources de données et SaaS, ainsi que des fonctionnalités de permission et de collaboration intégrées. Elle est conçue pour les équipes qui ont besoin de fournir rapidement des systèmes internes.

Dans ToolJet, l'IA est intégrée directement dans le flux de travail de création d'applications. Les développeurs peuvent décrire leurs besoins en langage naturel, et ToolJet générera automatiquement une interface initiale, une structure de données et une logique de requête.

**Cas d'utilisation**

**Génération d'applications métier avec le langage naturel**

ToolJet permet aux équipes de créer des outils internes en décrivant les besoins en langage naturel. Il peut créer une interface utilisateur, des structures de données et de la logique à partir de zéro ou modifier des applications existantes. Cela facilite la production de systèmes internes courants tels que la gestion des stocks en peu de temps.

![自然语言快速生成.png](https://static-docs.nocobase.com/%E8%87%AA%E7%84%B6%E8%AF%AD%E8%A8%80%E5%BF%AB%E9%80%9F%E7%94%9F%E6%88%90-nwf730.png)

**Assistant de documentation IA**

L'assistant de documentation IA intégré répond aux questions sur les composants, les fonctionnalités et les intégrations, aidant les utilisateurs à se familiariser plus rapidement avec ToolJet. Pour les équipes sans expérience frontend, l'assistant réduit la courbe d'apprentissage et accélère le développement.

![AI 文档助手.png](https://static-docs.nocobase.com/AI%20%E6%96%87%E6%A1%A3%E5%8A%A9%E6%89%8B-75vt0c.png)

### NO.1 Appsmith

![appsmith-of0467.png](https://static-docs.nocobase.com/appsmith-of0467.png)


| GitHub        | [https://github.com/appsmithorg/appsmith](https://github.com/appsmithorg/appsmith) |
| ------------- | ---------------------------------------------------------------------------------- |
| Site web      | [https://www.appsmith.com/](https://www.appsmith.com/)                             |
| Licence       | Apache-2.0                                                                         |
| Stars         | 38,6k                                                                              |
| Forks         | 4,4k                                                                               |
| Issues        | 4,4k                                                                               |
| Pull Requests | 38                                                                                 |
| Contributeurs | 335                                                                                |
| Dernière mise à jour | il y a un jour                                                                |
| Documentation | [https://www.appsmith.com/ai/low-code](https://www.appsmith.com/ai/low-code)       |

**Aperçu**

Appsmith est une plateforme low-code open source conçue pour aider les équipes à créer rapidement des applications internes avec un minimum de code. Elle prend en charge une large gamme de bases de données et d'API, fournit une bibliothèque complète de composants d'interface utilisateur visuels et permet aux développeurs d'étendre les fonctionnalités avec JavaScript. Cela la rend adaptée à la création de systèmes d'administration, de tableaux de bord de données, de workflows d'approbation, de CRM et d'outils d'analyse.

La dernière version introduit une prise en charge native de l'IA. Appsmith peut se connecter aux principaux LLM tels que OpenAI, Google AI et Anthropic, permettant des fonctionnalités comme l'analyse de texte, la synthèse, la recherche sémantique et la classification alimentées par des actions IA.

**Cas d'utilisation**

**Accélérer le développement avec l'IA**

L'assistant IA d'Appsmith fournit un support contextuel pendant le développement, offrant des conseils sur les opérations, les fonctionnalités de la plateforme, la construction de requêtes, la logique JavaScript et la personnalisation de l'interface utilisateur. Via l'assistant latéral Appy, les développeurs peuvent obtenir de l'aide pertinente directement sur la page qu'ils sont en train de modifier, réduisant ainsi le temps de recherche dans la documentation et accélérant l'itération.

![借助 AI 提升构建速度.png](https://static-docs.nocobase.com/%E5%80%9F%E5%8A%A9%20AI%20%E6%8F%90%E5%8D%87%E6%9E%84%E5%BB%BA%E9%80%9F%E5%BA%A6-76dac4.png)

**Intégration de l'IA dans les workflows internes**

Les équipes peuvent créer des outils internes augmentés par l'IA, comme un tableau de bord d'analyse des avis clients. Appsmith peut récupérer les données d'avis, les afficher dans des tableaux, exécuter une analyse des sentiments via la source de données IA d'Appsmith et utiliser des objets JS pour écrire les résultats dans l'interface utilisateur. Cela permet aux équipes de classer automatiquement les commentaires et de prioriser les problèmes plus efficacement.

![整合 AI 能力.png](https://static-docs.nocobase.com/%E6%95%B4%E5%90%88%20AI%20%E8%83%BD%E5%8A%9B-n2t9w0.png)

💡 Lecture recommandée : [NocoBase vs. Appsmith : Quelle plateforme low-code open source vous convient ?](https://www.nocobase.com/en/blog/nocobase-vs-appsmith)

De plus, au-delà des cinq grands projets à forte étoile ci-dessus, des outils open source comme [Yao](https://github.com/YaoApp/yao) et [ILLA Builder](https://github.com/illacloud/illa-builder) maintiennent également une forte activité communautaire. [Yao](https://github.com/YaoApp/yao) fournit un moteur d'application full-stack qui permet une construction rapide de modèles, de workflows et d'API pour les systèmes internes. [ILLA Builder](https://github.com/illacloud/illa-builder) se concentre sur la construction d'interface utilisateur visuelle, ce qui le rend adapté à la création rapide de panneaux d'administration et d'outils de données. Les deux projets offrent également des extensions IA de base et peuvent être des options complémentaires utiles lorsque les équipes construisent des outils internes.

### Conclusion

Lors de la sélection d'outils internes, il est utile d'évaluer les solutions selon plusieurs dimensions.

1. La maturité des fonctionnalités d'IA, telles que la prise en charge de la génération de pages, de la génération de SQL ou de logique métier, de la génération de graphiques et des assistants intelligents.
2. L'activité de la communauté et de l'écosystème, y compris les Stars, les Issues, les Commits et les mises à jour de la documentation, qui signalent toutes la fiabilité et la durabilité à long terme d'un projet.
3. Les capacités d'auto-hébergement et la sécurité, qui influencent le déploiement interne et la conformité des données.
4. L'extensibilité et la facilité de personnalisation, qui affectent directement le coût continu d'adaptation des systèmes à l'évolution des besoins métier.

Nous espérons que ce guide offre un aperçu technique utile et vous aide à prendre des décisions plus éclairées lors de la création d'outils internes.

Alors que l'IA générative continue de progresser, ces projets open source continueront également d'évoluer, apportant de nouvelles capacités au fil du temps.

Nous avons hâte de voir comment ces outils aideront votre équipe à créer des systèmes internes plus efficaces et plus intelligents à l'avenir.

**Lectures connexes :**

* [Top 5 des outils internes d'IA open source sur GitHub](https://www.nocobase.com/en/blog/top-5-open-source-ai-internal-tools-on-github)
* [Les 8 meilleures alternatives à Google Sheets (Spécifications et tarifs)](https://www.nocobase.com/en/blog/the-8-best-google-sheets-alternatives-with-full-cost-and-capability-analysis)
* [6 outils open source sans/low-code pour créer des PoC](https://www.nocobase.com/en/blog/6-open-source-no-low-code-tools-for-building-pocs)
* [Guide de décision technique pour les développeurs sur le No-Code et le Low-Code (2026)](https://www.nocobase.com/en/blog/a-developers-technical-decision-guide-to-no-code-and-low-code)
* [Comparaison approfondie de 6 RBAC dans les plateformes No-Code/Low-Code de niveau entreprise](https://www.nocobase.com/en/blog/6-in-depth-comparison-rbac-no-code-low-code-platforms)
* [14 plateformes low-code alimentées par l'IA sur GitHub à surveiller](https://www.nocobase.com/en/blog/14-ai-low-code-platforms-github)
* [Top 11 des outils d'IA sans code open source avec le plus d'étoiles GitHub](https://www.nocobase.com/en/blog/top-11-github-open-source-no-code-ai-tools)
* [Top 18 des projets d'agents d'IA open source avec le plus d'étoiles GitHub](https://www.nocobase.com/en/blog/github-open-source-ai-agent-projects)
