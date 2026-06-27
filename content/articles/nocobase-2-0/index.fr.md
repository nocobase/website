---
title: "NocoBase 2.0 : Rencontrez vos employés IA"
description: "Il est maintenant temps de vous présenter officiellement NocoBase 2.0-alpha !"
---

NocoBase 1.0-alpha a été publiée le 28 avril 2024, marquant le début de notre aventure commerciale.
Au cours de l'année écoulée, nous avons reçu les retours de milliers d'utilisateurs, les contributions de code de développeurs du monde entier et des commandes commerciales de centaines d'entreprises dans plus de 50 pays.

Nous remercions sincèrement chaque utilisateur, contributeur et client payant pour votre confiance et votre soutien.

Au cours des six derniers mois, tout en itérant et en améliorant continuellement la version 1.x, nous avons également consacré beaucoup de temps à réfléchir, discuter et développer la prochaine génération de NocoBase.

Il est maintenant temps de vous présenter officiellement **NocoBase 2.0-alpha !**

## Employés IA

L'année écoulée a été marquée par des progrès rapides de l'IA, les grands modèles démontrant des capacités remarquables, voire étonnantes, dans de nombreux domaines.

En tant que grands utilisateurs d'IA nous-mêmes, nous avons intégré l'IA directement dans NocoBase 2.0 sous la forme **d'Employés IA** - des collègues intelligents qui travaillent au sein de votre système.

Les Employés IA dans NocoBase ne sont **pas des chatbots**, ni des agents isolés.

Ils sont **intégrés de manière transparente** dans votre système métier, capables de comprendre le contexte et d'exécuter des tâches directement.

* Ils apparaissent partout où vous en avez besoin - à côté de vos tableaux et formulaires - prêts à vous aider.
* Ils peuvent résumer des e-mails, analyser des données, organiser du contenu non structuré et remplir des formulaires automatiquement, concevoir des modèles de données, ou même écrire du code JavaScript.
* Ils récupèrent automatiquement les données contextuelles et les structures de page pour une exécution intelligente des tâches.
* Chacun possède des compétences, des outils et des bases de connaissances uniques.
* Vous pouvez créer un nombre illimité d'Employés IA pour former votre propre équipe IA.

[En savoir plus sur les Employés IA](https://v2.docs.nocobase.com/ai-employees)

[Essayer la Démo](https://demo.nocobase.com/new)

<video controls>
  <source src="https://static-docs.nocobase.com/Meet-Your-AI-Employee-EN.mp4" type="video/mp4">
</video>

## Un Système de Pages 2.0 Entièrement Nouveau

Bien que NocoBase ait toujours été basé sur des plugins, la version 1.x présentait des limitations lorsqu'il s'agissait de gérer des interactions dynamiques, des mises en page flexibles ou une logique personnalisée sur le frontend.

Il était difficile d'atteindre de telles exigences sans un coût significatif.

NocoBase 2.0 introduit un **système de pages complètement restructuré** conçu pour répondre efficacement aux besoins frontend personnalisés et complexes.

### RUNJS

**RunJS** offre un moyen léger d'étendre et de personnaliser la logique ou le style de l'interface utilisateur - sans créer de plugins ni modifier le code source.

Dans le concepteur de pages, vous pouvez écrire du JavaScript directement pour :

* Personnaliser le contenu rendu (champs, blocs, colonnes, éléments, etc.)
* Définir des interactions personnalisées (actions de boutons, déclencheurs d'événements)
* Combiner avec des données contextuelles pour des comportements dynamiques

RunJS est pris en charge dans :

* Bloc JS
* Action JS
* Champ JS
* Élément JS
* Règles de liaison
* Flux d'événements

[En savoir plus sur RUNJS](https://v2.docs.nocobase.com/interface-builder/runjs)

![20251102213506-2025-11-02-21-35-08](https://static-docs.nocobase.com/20251102213506-2025-11-02-21-35-08.png)

### Flux d'Événements

Dans NocoBase 1.x, le système de règles de liaison permettait une orchestration logique limitée, contrainte à un seul bloc.

NocoBase 2.0 introduit le **Flux d'Événements**, une amélioration majeure de la configuration de la logique frontend.

Un Flux d'Événements se compose de :

* **Événements déclencheurs**, tels que avant le rendu, au clic, ou changement de valeur
* **Conditions de déclenchement**
* **Étapes d'action**, telles que l'affichage de notifications, l'actualisation de blocs cibles, ou l'exécution de JavaScript

[En savoir plus sur le Flux d'Événements](https://v2.docs.nocobase.com/interface-builder/event-flow)

![20251031093341-2025-11-02-21-35-08](https://static-docs.nocobase.com/20251031093341.png)

### Mise en Page en Grille

Dans la version 1.x, les blocs et les champs utilisaient une disposition par glissement flexible en pleine largeur, ce qui limitait la précision et l'esthétique.

NocoBase 2.0 introduit un **nouveau système de mise en page en grille**, permettant à chaque élément de s'aligner sur les unités de la grille pour un contrôle plus précis.

![20251031093341-2025-11-02-21-35-08](https://static-docs.nocobase.com/20251029201501.gif)

### Blocs et Fenêtres Modales Réutilisables

Dans 1.x, les fonctions de copie/référence pour les blocs étaient limitées et sujettes à des bugs, et les fenêtres modales entières ne pouvaient pas être référencées.

NocoBase 2.0 redéfinit complètement cela - permettant une **référence et une duplication flexibles** des blocs et des fenêtres modales, réduisant considérablement l'effort de configuration.

[En savoir plus sur les Références & Copies de Blocs](https://v2.docs.nocobase.com/interface-builder/blocks/other-blocks/block-reference)

[En savoir plus sur les Références de Fenêtres Modales](https://v2.docs.nocobase.com/interface-builder/actions/action-settings/edit-popup)

![20251102215026-2025-11-02-21-50-28](https://static-docs.nocobase.com/20251102211459_rec_.gif)

### Expérience de Bloc Améliorée

Basée sur les retours des utilisateurs, NocoBase 2.0 apporte de nombreuses améliorations aux composants de blocs.

Par exemple, les tableaux prennent désormais en charge l'**édition en ligne** directement dans les cellules - sans fenêtre contextuelle nécessaire.

D'autres améliorations sont à venir.

![20251102215026-2025-11-02-21-50-28](https://static-docs.nocobase.com/20251102215026-2025-11-02-21-50-28.png)

### Meilleures Performances

NocoBase 2.0 offre des performances frontend considérablement améliorées par rapport à 1.x.

## FlowEngine

Le nouveau système de pages dans 2.0 est propulsé par **FlowEngine** - un moteur frontend low-code de nouvelle génération combinant **Modèles** et **Flux**.

Il simplifie la logique frontend, améliore la réutilisabilité et la maintenabilité.

En exploitant la nature configurable de Flow, il apporte une orchestration sans code aux composants frontend et à la logique métier.

Développer des plugins frontend dans 1.x impliquait souvent des défis complexes. Avec FlowEngine, ceux-ci sont désormais grandement simplifiés.

[En savoir plus sur FlowEngine](https://v2.docs.nocobase.com/flow-engine/what-is-flow-engine)

## Multi-Application et Multi-Espace

La version 1.x prenait en charge une capacité multi-application de base, mais toutes les applications partageaient un seul processus et ne pouvaient pas être surveillées ou gérées individuellement.

NocoBase 2.0 introduit **une architecture Multi-App et Multi-Espace complètement nouvelle**.

* **Plugin Multi-App** *(en développement)*
  Permet la création et la gestion dynamiques de plusieurs applications autonomes sans déploiements séparés.
  Chaque application s'exécute en tant qu'instance indépendante avec sa propre base de données, ses plugins et sa configuration - dans des processus isolés ou partagés.
  L'application parente peut surveiller et gérer l'utilisation des ressources et l'état des sous-applications, idéal pour les scénarios multi-locataires.
* **Plugin Multi-Espace**
  Permet une isolation logique au sein d'une seule instance - parfait pour les scénarios multi-succursales ou multi-usines.
  La logique métier, les workflows et les configurations restent cohérents, tandis que les données restent complètement isolées.

[En savoir plus sur Multi-Espace](https://v2.docs.nocobase.com/multi-app/multi-space)

![20251102220714-2025-11-02-22-07-16](https://static-docs.nocobase.com/20251102220714-2025-11-02-22-07-16.png)

## Nouvelle Visualisation de Données

Le plugin de graphiques 1.x était basé sur Ant Design Charts et ECharts, adapté aux cas simples mais limité pour les visualisations complexes, interactives ou liées.

NocoBase 2.0 introduit un **nouveau Plugin de Visualisation de Données** entièrement construit sur ECharts, prenant en charge :

* Mode de configuration visuelle
* Modes SQL et JSON
* Interaction pilotée par les événements
* Liaison multi-graphiques et exploration descendante

Et si SQL ou JSON semble trop complexe - votre Employé IA **Nathan** peut vous aider.

[En savoir plus sur la Visualisation de Données](https://v2.docs.nocobase.com/data-visualization)

![20251102221207-2025-11-02-22-12-09](https://static-docs.nocobase.com/20251102221207-2025-11-02-22-12-09.png)

## Synchronisation de la Structure de la Base de Données & Changement de Types de Champs

Dans la version 1.x, les tables et les champs ne pouvaient être créés que via le Gestionnaire de Sources de Données de NocoBase et les types de champs ne pouvaient pas être modifiés par la suite.

NocoBase 2.0 permet désormais :

* La synchronisation des tables et champs existants à partir de votre base de données principale
* Le changement de types de champs après leur création

Cela signifie que vous pouvez utiliser directement un schéma de base de données existant comme source de données principale.

![20251102222325-2025-11-02-22-23-27](https://static-docs.nocobase.com/20251102222325-2025-11-02-22-23-27.png)

## Plugins Supplémentaires

### Historique des Enregistrements

Le plugin Historique des Enregistrements suit automatiquement les modifications de données - insertions, mises à jour, suppressions - en sauvegardant des instantanés et des différences à des fins d'audit et de restauration.

[En savoir plus sur l'Historique des Enregistrements](https://v2.docs.nocobase.com/record-history/)

![20251102221207-2025-11-02-22-12-09](https://static-docs.nocobase.com/202511011346400.png)

### Brouillons de Formulaires

Le plugin Brouillons de Formulaires sauvegarde automatiquement les données du brouillon pendant que les utilisateurs remplissent les formulaires, évitant ainsi les pertes accidentelles.

### Nouveau Gestionnaire d'E-mails

Reconstruit avec FlowEngine, le nouveau Gestionnaire d'E-mails intègre de manière transparente les Employés IA pour résumer, analyser et composer des e-mails.

Il introduit également la sauvegarde automatique des brouillons et d'autres améliorations.

[En savoir plus sur le Gestionnaire d'E-mails](https://v2.docs.nocobase.com/email-manager/)

![20251102221207-2025-11-02-22-12-09](https://static-docs.nocobase.com/email-manager/Loading--10-31-2025_08_31_PM.png)

## Mise à Niveau de 1.x vers 2.0

La mise à niveau de 1.x vers 2.0 est simple - suivez simplement le [guide officiel](https://v2.docs.nocobase.com/get-started/upgrading/docker).

Cependant, notez que **NocoBase 2.0 est actuellement en alpha**, attendez-vous donc à une certaine instabilité.

Grâce à l'**architecture découplée entre l'interface utilisateur et les données** de NocoBase, vos applications 1.x existantes resteront complètement intactes.

Lors de la création de nouvelles pages, vous pouvez désormais choisir entre les types **v1** et **v2** - sélectionnez v2 pour accéder aux nouvelles fonctionnalités de NocoBase 2.0.

![20251102222729-2025-11-02-22-27-31](https://static-docs.nocobase.com/20251102222729-2025-11-02-22-27-31.png)
