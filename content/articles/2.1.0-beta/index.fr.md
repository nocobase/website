---
title: "Annonce de NocoBase 2.1-beta"
description: "Mise à niveau majeure de l'IA : de l'intégration CLI et de la construction assistée par IA aux compétences NocoBase, au développement de plugins IA et aux employés IA améliorés, couvrant l'ensemble du cycle de vie de la construction, de l'extension et de l'exploitation des systèmes métier. Construisez et exécutez des systèmes métier réels plus rapidement avec l'IA."
---

Ce document s'applique à NocoBase 2.1.0-beta.24 et versions ultérieures.

Il s'agit d'une mise à niveau majeure **centrée sur les capacités d'IA**. Cette version vous permet d'intégrer des Agents IA dans NocoBase — couvrant l'intégration CLI, la construction assistée par IA, des Employés IA améliorés et un plugin de développement IA — couvrant l'ensemble du flux, de l'intégration de l'environnement à la construction du système et à la collaboration métier. Nous avons également continué à finaliser la prise en charge des pages V2 et les capacités de base.

## Nouveautés

### La CLI NocoBase devient le point d'entrée officiel pour les Agents IA

Dans cette version, la CLI NocoBase (`nb`) est le point d'entrée central pour que les Agents IA se connectent à NocoBase.

La CLI est utilisée pour initialiser, connecter et gérer les applications NocoBase dans un espace de travail local. Elle couvre deux scénarios :

- Se connecter à une application NocoBase existante et l'enregistrer en tant qu'environnement CLI
- Installer une nouvelle application NocoBase via Docker, npm ou Git, puis l'enregistrer en tant qu'environnement CLI

![Assistant visuel de la CLI NocoBase](https://static-docs.nocobase.com/2026-04-29-15-55-19.png)

Que vous souhaitiez intégrer l'IA dans un système existant ou créer une nouvelle application à partir de zéro, vous pouvez gérer l'initialisation et la maintenance continue via la CLI.

Pour les équipes, la CLI fournit un point d'entrée standard que les Agents IA peuvent comprendre et utiliser — l'initialisation de l'environnement, la configuration de la connexion et la gestion de l'exécution partagent tous le même flux.

Documentation associée :

- [Guide d'intégration des Agents IA](https://docs.nocobase.com/ai/quick-start)
- [Référence des commandes CLI NocoBase](https://docs.nocobase.com/api/cli/)

### Construction assistée par IA : remplacez la configuration manuelle par la conversation

La construction assistée par IA est l'une des expériences centrales de cette version. Vous pouvez décrire vos besoins métier en langage naturel, et l'IA vous aide à réaliser la modélisation des données, la configuration des pages, la configuration des permissions et l'orchestration des workflows.

Comparée à la construction low-code traditionnelle, la construction assistée par IA présente plusieurs avantages clairs :

- Une barrière à l'entrée plus basse — vous n'avez pas besoin de connaître tous les concepts de configuration au préalable
- Un chemin plus court entre la description du besoin et le prototype fonctionnel
- Les configurations des données, de l'interface utilisateur et du workflow peuvent être réalisées en continu par l'IA

Par exemple : « conçois-moi un modèle de données CRM », « crée-moi une page de gestion des clients » ou « orchestre un workflow qui déduit automatiquement le stock après la création d'une commande » — tout cela peut être géré par l'IA dans le cadre des capacités de NocoBase.

Documentation associée :

- [Démarrage rapide de la construction assistée par IA](https://docs.nocobase.com/ai-builder/)

### Les compétences NocoBase couvrent l'ensemble du flux de construction

Pour aider l'IA à comprendre véritablement le système de configuration de NocoBase, cette version intègre un ensemble de packs de connaissances métier qui peuvent être installés dans les Agents IA — les Compétences NocoBase.

Les Compétences sont des wrappers standardisés de connaissances et d'opérations, organisés autour des principaux domaines de capacité de NocoBase, aidant l'IA à comprendre plus précisément les modèles d'objets, les structures de configuration et les limites d'exécution.

Nous fournissons actuellement 8 Compétences qui couvrent l'ensemble du flux de construction :

- [Gestion de l'environnement](https://docs.nocobase.com/ai-builder/env-bootstrap) — vérifications de l'environnement, installation/déploiement, mise à niveau et dépannage
- [Modélisation des données](https://docs.nocobase.com/ai-builder/data-modeling) — créer et gérer des tables, des champs et des relations
- [Construction de l'interface utilisateur](https://docs.nocobase.com/ai-builder/ui-builder) — créer et modifier des pages, des blocs, des fenêtres contextuelles et des réactions d'interaction
- [Gestion des workflows](https://docs.nocobase.com/ai-builder/workflow) — créer, modifier, activer et diagnostiquer des workflows
- [Configuration des permissions](https://docs.nocobase.com/ai-builder/acl) — gérer les rôles, les politiques de permission, les liaisons d'utilisateurs et l'évaluation des risques
- [Solutions](https://docs.nocobase.com/ai-builder/dsl-reconciler) — construire en masse des systèmes métier entiers à partir de YAML (encore en version bêta, avec une stabilité limitée)
- [Gestion des plugins](https://docs.nocobase.com/ai-builder/plugin-manage) — voir, activer et désactiver des plugins
- [Gestion des publications](https://docs.nocobase.com/ai-builder/publish) — publication multi-environnement, sauvegarde/restauration et migration

Grâce aux Compétences, l'IA peut comprendre plus précisément le système de configuration de NocoBase et fournir une assistance plus intelligente lors de la construction et de la gestion des systèmes.

**Remarque** : Les Compétences NocoBase sont encore en cours d'amélioration active. Les Compétences NocoBase sont également installées automatiquement lorsque vous installez et initialisez la CLI NocoBase, donc dans la plupart des cas, vous n'avez pas besoin de les installer séparément.

Documentation associée :

- [Compétences NocoBase](https://github.com/nocobase/skills)

### Plugin de développement IA

Cette version comble les lacunes des capacités fondamentales nécessaires au développement de plugins IA, de sorte que l'IA puisse participer non seulement à la construction d'applications, mais aussi au développement de plugins personnalisés.

Cela se manifeste dans trois domaines principaux :

- Un pipeline de construction unifié `rsbuild/rspack`, consolidant le développement de plugins et le système de construction frontend
- Une capacité `client-v2` et un système de routage `/v2/` destinés au développement IA, préparant le développement de plugins clients de nouvelle génération
- Des Compétences de développement de plugins IA qui aident l'IA à mieux comprendre la structure des plugins, l'organisation du code et les modèles d'implémentation

La préparation autour de `client-v2` comprend :

- `@nocobase/app` expose le point d'entrée `client-v2`
- Le noyau fournit un package `@nocobase/client-v2` avec des composants de base, des utilitaires et des définitions de types
- Chaque plugin obtient un répertoire `/src/client-v2`
- Une nouvelle route `/v2/` est ajoutée
- Le noyau migre progressivement vers V2
- Les plugins migrent progressivement vers V2

Un pipeline de construction unifié réduit le coût du développement et du débogage des plugins frontend. Le déploiement progressif de `client-v2` donne également à l'IA une structure cible plus stable pour générer et maintenir le code des plugins.

En pratique : vous pouvez décrire un besoin de plugin en langage naturel, et l'IA aide à générer le code frontend et backend, les tables de données, les API, la configuration des permissions et le contenu i18n.

**Remarque** : Le développement de plugins IA est uniquement destiné aux nouveaux plugins de style `client-v2`. Nous fournirons ultérieurement une documentation de migration et des Compétences pour passer des plugins `client-v1` à `client-v2`, afin de vous aider à intégrer les plugins existants dans le nouveau système.

Documentation associée :

- [Démarrage rapide du plugin de développement IA](https://docs.nocobase.com/ai-dev/)
- [Développement de plugins](https://docs.nocobase.com/plugin-development/)

### Améliorations des Employés IA

La construction assistée par IA répond à la question « comment utiliser l'IA pour construire un système » ; les Employés IA répondent à la question « comment laisser l'IA travailler à l'intérieur du système pour résoudre des problèmes métier concrets ».

Les Employés IA existaient dans les versions précédentes, mais dans cette version, les capacités associées ont été améliorées et le noyau IA a été finalisé :

- [Prise en charge de MCP](https://docs.nocobase.com/ai-employees/features/mcp)
- [Nouvel Atlas des Employés IA](https://docs.nocobase.com/ai-employees/features/built-in-employee#default-ai-employee-atlas), jouant un rôle de chef d'équipe et dispatchant d'autres Employés IA pour accomplir des tâches en fonction de l'intention de l'utilisateur
- [Nœud de workflow pour Employé IA](https://docs.nocobase.com/ai-employees/workflow/nodes/employee/configuration)
- [Outil de recherche web basé sur LLM](https://docs.nocobase.com/ai-employees/features/web-search)
- [Nouvel outil de requête d'agrégation et outil de génération de rapports](https://docs.nocobase.com/ai-employees/scenarios/business-report) pour produire des rapports d'analyse métier

Ces améliorations portent l'extensibilité, l'orchestration et les capacités d'exécution des Employés IA au sein des systèmes métier à un niveau supérieur. Les Employés IA peuvent comprendre le contexte métier actuel, invoquer des compétences pour exécuter des tâches spécifiques, participer à des workflows automatisés et combiner des informations externes pour fournir des analyses et des résultats.

Si votre équipe a besoin d'intégrer la collaboration intelligente, l'analyse automatisée et l'exécution de tâches dans vos systèmes métier, c'est également l'une des directions les plus notables de cette mise à jour.

Documentation associée :

- [Employés IA](https://docs.nocobase.com/ai-employees/)

### Adaptation 2.0 et nouvelles fonctionnalités

Au-delà de l'IA, cette version continue de migrer les modules de fonctionnalités clés vers 2.0, tout en déployant de nouvelles fonctionnalités pour des scénarios métier réels.

Nouvelles fonctionnalités

- [Champ de signature manuscrite](https://docs.nocobase.com/data-sources/field-signature/)
- [Action d'élément JS](https://docs.nocobase.com/interface-builder/actions/types/js-item)

Adaptation 2.0

- [Requête personnalisée](https://docs.nocobase.com/interface-builder/actions/types/custom-request)
- [Bloc de filtre arborescent](https://docs.nocobase.com/interface-builder/blocks/filter-blocks/tree)
- [Bloc calendrier](https://docs.nocobase.com/data-sources/calendar/)
- [Bloc Kanban](https://docs.nocobase.com/interface-builder/blocks/data-blocks/kanban)
