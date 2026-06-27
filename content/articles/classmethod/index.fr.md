---
title: "Au-delà des tableurs : la gestion des données employés chez Classmethod avec NocoBase"
description: "Classmethod a construit un système centralisé de gestion des informations des employés avec NocoBase, dépassant les tableurs pour atteindre des opérations structurées et évolutives, tout en transformant l'expérience interne en valeur pour les clients."
---

## Introduction

En s'éloignant des tableurs, [Classmethod](https://classmethod.jp/) a utilisé NocoBase pour créer une plateforme de gestion des informations des employés offrant une structure claire et des contrôles d'accès flexibles.

Ce système a non seulement rationalisé leurs opérations internes, mais leur permettra également de fournir des solutions techniques plus efficaces à leurs clients.

![Classmethod.PNG](https://static-docs.nocobase.com/Classmethod-o0zgj9.PNG)

## À propos de Classmethod

[Classmethod](https://classmethod.jp/) Inc. est l'un des principaux fournisseurs de services informatiques au Japon, surtout connu pour son support complet d'AWS, incluant l'optimisation des coûts, la sécurité, la mise en œuvre et les opérations continues.

Au-delà d'AWS, Classmethod propose également des services couvrant l'adoption du cloud, l'infrastructure de données, les solutions d'IA générative, le développement d'applications et l'intégration SaaS, en travaillant avec des plateformes majeures telles que Google Cloud, Cloudflare, Informatica et Snowflake.

De nombreux développeurs connaissent peut-être Classmethod grâce à leur célèbre site média technique, [DevelopersIO](https://dev.classmethod.jp/). Fidèles à leur réputation, l'équipe est hautement technique, réactive et axée sur l'exécution.

## Le défi de la gestion de l'information : quand Excel ne suffit tout simplement plus

Avec la croissance de l'activité de Classmethod, sa structure d'équipe est devenue de plus en plus complexe, comptant désormais environ 500 employés au Japon et plus de 850 dans l'ensemble du groupe. La main-d'œuvre comprend non seulement des employés à temps plein, mais aussi des travailleurs à temps partiel, des collaborateurs en activité secondaire, des contractuels et des partenaires, répartis au Japon et à l'étranger.

Face à cette croissance, Classmethod a commencé à chercher de meilleures façons de gérer son organisation :

1. Comment gérer les employés de différents pays et types d'emploi avec un seul standard unifié ?
2. Comment automatiser des processus comme l'intégration, le départ ou les mutations internes, couvrant la saisie des données, les droits d'accès et les notifications ?
3. Comment l'entreprise peut-elle suivre de manière centralisée les certifications, les parcours professionnels et les dossiers de formation de chacun pour soutenir une meilleure affectation des tâches, le développement des talents et le recrutement ?
4. Comment une gestion systématique peut-elle non seulement améliorer l'efficacité opérationnelle, mais aussi offrir aux ingénieurs juniors une expérience concrète des opérations et du développement, tout en maîtrisant les coûts du système ?

Imaginez maintenant essayer de gérer tout cela avec seulement Excel ou Google Sheets. Il est facile de voir comment les problèmes s'accumuleraient rapidement. En fait, ce sont exactement les points douloureux auxquels l'équipe de Classmethod a été confrontée directement :


| **Gestion avec Excel et Google Sheets**                              | Défis clés                                                                                                           |
| -------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- |
| ⚠️ Les enregistrements des licences logicielles étaient dans Excel | ❌ Les attributions de licences étaient souvent inexactes – des comptes inutilisés avaient encore des licences actives |
| ⚠️ Chaque département gérait son propre Google Sheet                | ❌ Les audits devenaient lents et lourds pour les utilisateurs comme pour l'informatique                               |
| ⚠️ Les droits d'accès aux données étaient suivis dans des tableurs séparés | ❌ Des définitions de données incohérentes rendaient le partage et la gestion des informations difficiles, et les autorisations étaient faciles à mal configurer |
| ⚠️ Les informations complexes devaient être recoupées manuellement avec RECHERCHEV | ❌ Trouver des informations entre les départements était difficile, ralentissant les flux de travail                                          |
| ⚠️ Chaque intégration, mutation ou départ nécessitait des mises à jour manuelles | ❌ L'intégration pouvait prendre jusqu'à 10 jours ouvrés, créant une mauvaise expérience pour les nouvelles recrues                                |

Plus important encore, à mesure que l'équipe grandissait et que les processus devenaient plus complexes, ces problèmes ne faisaient qu'empirer. Sans un système centralisé et automatisé, la charge sur l'équipe administrative augmentait – et l'ensemble de l'organisation souffrait de réponses plus lentes et de données moins fiables.

C'est pourquoi Classmethod a entrepris de trouver une solution plus systématique et flexible : une solution capable de centraliser la gestion des données, de prendre en charge des configurations spécifiques à l'activité et de permettre l'automatisation au fil du temps.

## Processus de sélection du système

Lorsque Classmethod a décidé d'abandonner les tableurs, l'équipe a évalué une gamme d'outils, notamment Airtable et NocoDB. Ces solutions se distinguaient par leur facilité d'utilisation, leurs interfaces intuitives et un certain niveau d'extensibilité. Finalement, l'équipe a choisi NocoBase pour quelques raisons évidentes : il offrait la flexibilité, le contrôle et l'alignement avec les besoins de Classmethod que les autres outils ne pouvaient égaler.

Voici ce qui a le plus compté dans leur décision :

**1. Déploiement open-source flexible**

En tant qu'entreprise axée sur la technologie, Classmethod préfère exécuter les systèmes critiques dans son propre environnement AWS pour répondre aux exigences de sécurité et de conformité. NocoBase est entièrement open-source et déployable n'importe où, sans les restrictions d'un SaaS.

**2. Pas de frais par utilisateur – idéal pour « beaucoup de lecteurs, peu d'éditeurs »**

Alors que seul un petit groupe saisit les données, de nombreux départements ont besoin d'y accéder. Avec une tarification par utilisateur, les coûts augmenteraient rapidement. Le modèle open-source de NocoBase évite complètement ce problème.

**3. Contrôle d'accès granulaire**

NocoBase prend en charge les paramètres de visibilité au niveau des enregistrements et des champs pour différents utilisateurs – essentiel pour un accès sécurisé et hiérarchique aux données dans un système de gestion des employés.

**4. Séparation de l'interface utilisateur et de la structure des données pour des interfaces personnalisées**

Différentes équipes ont besoin de voir différentes informations. Avec NocoBase, l'interface utilisateur et le modèle de données sont configurés indépendamment, ce qui facilite la création d'interfaces flexibles et adaptées.

**5. Moteur de workflow intégré – pas besoin d'automatisation externe**

La logique métier, comme la création automatique de comptes pour les nouvelles recrues ou la révocation des autorisations temporaires, peut être entièrement gérée avec les workflows intégrés, sans avoir besoin d'outils d'automatisation tiers ou de scripts personnalisés.

**6. Génération automatique d'API pour une intégration facile**

Chaque nouvelle collection de données dans NocoBase est accompagnée d'API générées automatiquement, ce qui facilite grandement l'automatisation des scripts et la synchronisation des données par les équipes d'ingénierie.

En bref, NocoBase n'a peut-être pas la plus longue liste de fonctionnalités, mais il offre exactement ce dont Classmethod a le plus besoin : sécurité, autonomie, flexibilité et un contrôle total sur le développement et les opérations.

## NocoBase en action : premiers impacts

Une fois le plan établi, Classmethod a rapidement déployé et modélisé ses données avec NocoBase. L'équipe d'ingénierie a déployé NocoBase dans son propre environnement AWS et a configuré des collections de données de base reflétant l'organisation – couvrant les employés, les départements, les licences logicielles, les actifs de l'entreprise, les comptes système (comme Slack et GitHub) et les certifications. Les utilisateurs métier pouvaient également mettre à jour les champs et ajuster la disposition de l'interface utilisateur selon leurs besoins.

Les données initiales ont été importées via CSV, et les mises à jour futures ont été automatisées à l'aide de scripts Python et des API générées automatiquement par NocoBase. En reliant toutes les données via des champs relationnels, l'équipe a obtenu une gestion de l'information véritablement structurée.

Après la mise en service, le nouveau système a généré des gains d'efficacité majeurs :

* Les données n'étaient plus dispersées dans les tableurs de différents départements, ce qui a considérablement réduit les problèmes de synchronisation et les conflits de versions
* La gestion des licences SaaS a été automatisée, rendant les audits informatiques beaucoup plus efficaces
* Des tâches comme la révocation des autorisations temporaires, la confirmation des affectations d'appareils et l'envoi d'alertes d'expiration ont été de plus en plus automatisées
* Les équipes métier pouvaient modifier les champs et les interfaces elles-mêmes – plus besoin d'attendre les ingénieurs, et la maintenance est devenue beaucoup plus légère
* Les données sur les talents (certifications, formations, expérience) étaient désormais structurées, facilitant la gestion des mutations internes et du recrutement

![Employee Management.png](https://static-docs.nocobase.com/image_1-93c06z.png)

![Employee Management2.png](https://static-docs.nocobase.com/image_2-i5s50v.png)

Plus important encore, ce nouveau système prépare le terrain pour la croissance future. Qu'il s'agisse d'intégrer de nouveaux systèmes, d'étendre les workflows ou d'ajouter des capacités d'IA, NocoBase offre la flexibilité et la puissance technique dont Classmethod a besoin pour continuer à évoluer.

## Amélioration continue : transformer le succès interne en valeur client

Classmethod a désormais entièrement migré sa gestion quotidienne des informations sur les employés vers NocoBase et poursuit l'automatisation et l'intégration, notamment :

* Déclencher des workflows d'approbation lors de l'ajout ou de la mise à jour de nouvelles données
* Envoyer des notifications à d'autres équipes via Slack
* Exporter des données vers des systèmes externes (comme Google Sheets ou des plateformes intégrées)
* Demander automatiquement le renouvellement des licences avant leur expiration
* Confirmer la propriété des actifs (pour les ordinateurs portables, les badges de sécurité, etc.)
* Révoquer automatiquement les autorisations temporaires
* Envoyer des rappels d'expiration de licence via des workflows automatisés
* Intégrer avec des modèles de langage étendus via leur serveur MCP

L'équipe travaille également à mieux visualiser les données des employés – telles que les certifications, les historiques de postes et les dossiers de formation – afin d'améliorer le recrutement, le développement des talents et le partage des connaissances internes.

Avec NocoBase, Classmethod a centralisé et automatisé sa gestion des ressources humaines, tout en acquérant une précieuse expérience pratique dans le développement et l'exploitation de systèmes.

En tant qu'entreprise de services informatiques axée sur la technologie, Classmethod s'engage à transformer l'expérience pratique en valeur réelle pour les clients. Désormais, ils appliquent ces pratiques éprouvées aux projets clients – aidant ainsi davantage d'entreprises à construire des systèmes flexibles et contrôlables pour les environnements complexes d'aujourd'hui.

Comme le dit leur site web : Faire de la technologie le cœur de votre activité, et générer une qualité et une vitesse supérieures grâce à l'excellence technique et aux résultats concrets.

**Lectures connexes :**

* [Comment une usine de meubles a construit son propre ERP – sans codage](https://www.nocobase.com/en/blog/olmon)
* [De designer à constructeur : la transformation numérique de L&A avec NocoBase](https://www.nocobase.com/en/blog/l-a)
* [Comment KIGLAND a développé la production de masques d'anime personnalisés avec des outils open-source](https://www.nocobase.com/en/blog/kigland)
* [Comment un cabinet de plus de 400 avocats rationalise la gestion des commissions avec NocoBase](https://www.nocobase.com/en/blog/how-400-lawyer-firm-streamlines-commission-management-with-nocobase)
* [Développement rapide avec NocoBase : piloter la transformation numérique dans la construction](https://www.nocobase.com/en/blog/rapid-development-with-nocobase)
* [La mise à niveau vers la fabrication intelligente d'Orchisky : pourquoi ils ont choisi NocoBase](https://www.nocobase.com/en/blog/Orchisky)
