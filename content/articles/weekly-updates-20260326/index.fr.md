---
title: "Mises à jour hebdomadaires｜Ajout de la capacité SKILLS aux employés IA"
description: "Ceci est un résumé des mises à jour et améliorations des fonctionnalités de NocoBase du 20 au 26 mars 2026."
---

Résumez les journaux de mise à jour hebdomadaires du produit. Les dernières versions sont disponibles sur [notre blog](https://www.nocobase.com/en/blog/timeline).

**NocoBase est actuellement mis à jour avec trois branches : `main`, `next` et `develop`.**

![version.png](https://static-docs.nocobase.com/ba5f04e27e99c625cb3822da5df07860.png)

* `main` : La version la plus stable à ce jour, recommandée pour l'installation ;
* `next` : Version bêta, contient les nouvelles fonctionnalités à venir et a été testée préliminairement. Il peut y avoir des problèmes connus ou inconnus. Elle est principalement destinée aux utilisateurs testeurs pour recueillir des retours et optimiser davantage les fonctions. Idéale pour les utilisateurs testeurs qui souhaitent découvrir les nouvelles fonctionnalités en avant-première et donner leur avis ;
* `develop` : Version alpha, contient le code de fonctionnalité le plus récent, peut être incomplète ou instable, principalement destinée au développement interne et à l'itération rapide. Adaptée aux utilisateurs techniques intéressés par les fonctionnalités de pointe du produit, mais avec des problèmes potentiels et des fonctions incomplètes. Ne pas utiliser en production.

## main

![main.png](https://static-docs.nocobase.com/47a3c71734c1d0f908b51f9ebd53c0ac.png)

### [v2.0.26](https://www.nocobase.com/en/blog/v2.0.26)

*Date de sortie : 2026-03-25*

### 🚀 Améliorations

- **[client]** Optimiser la disposition horizontale des actions de formulaire ([#8869](https://github.com/nocobase/nocobase/pull/8869)) par @jiannx

### 🐛 Corrections de bugs

- **[moteur de workflow]** Synchroniser le statut avec la configuration du champ lorsqu'un champ de formulaire est supprimé ([#8857](https://github.com/nocobase/nocobase/pull/8857)) par @jiannx
- **[Variables personnalisées]** ignorer la notification d'authentification ([#8942](https://github.com/nocobase/nocobase/pull/8942)) par @chenos

### [v2.0.25](https://www.nocobase.com/en/blog/v2.0.25)

*Date de sortie : 2026-03-24*

### 🚀 Améliorations

- **[Workflow : Approbation]** Correction d'un problème de performance lié au champ JSON lors du chargement de la liste des enregistrements d'approbation par @mytharcher

### 🐛 Corrections de bugs

- **[serveur]** Modifier le timing de fermeture de Pub-Sub à `beforeStop`, pour éviter que des messages soient envoyés ou traités après la fermeture de la base de données ([#8934](https://github.com/nocobase/nocobase/pull/8934)) par @mytharcher
- **[Localisation]** empêcher la requête localizationTexts:missing en cas de refus d'autorisation ([#8903](https://github.com/nocobase/nocobase/pull/8903)) par @chenos
- **[Source de données : Oracle externe]** Correction d'une erreur qui se produit lors du chargement de la source de données Oracle externe par @2013xile

### [v2.0.24](https://www.nocobase.com/en/blog/v2.0.24)

*Date de sortie : 2026-03-22*

### 🐛 Corrections de bugs

- **[resourcer]** Correction d'un problème où les sources de données externes ne se chargeaient pas correctement. ([#8929](https://github.com/nocobase/nocobase/pull/8929)) par @2013xile
- **[Action : Importer des enregistrements Pro]** Correction du problème où l'option "Déclencher un workflow" ne fonctionnait pas lorsqu'elle n'était pas cochée par @mytharcher

### [v2.0.23](https://www.nocobase.com/en/blog/v2.0.23)

*Date de sortie : 2026-03-21*

### 🐛 Corrections de bugs

- **[base de données]** Utiliser un avertissement au lieu d'une erreur lorsque l'un des paramètres d'ajout est invalide ([#8923](https://github.com/nocobase/nocobase/pull/8923)) par @mytharcher
- **[Workflow : Approbation]** Correction des problèmes de traduction, de sélection de nœud et de cible de retour dans le bouton de retour du formulaire d'approbation v2 par @zhangzhonghe

### [v2.0.22](https://www.nocobase.com/en/blog/v2.0.22)

*Date de sortie : 2026-03-20*

### 🐛 Corrections de bugs

- **[Gestionnaire de migration]** Correction du problème où la migration était interrompue en raison d'une erreur causée par l'absence de la nouvelle table créée lors du processus de migration de téléchargement dans l'environnement cible. par @Andrew1989Y

### [v2.0.21](https://www.nocobase.com/en/blog/v2.0.21)

*Date de sortie : 2026-03-20*

### 🚀 Améliorations

- **[Workflow]** Ajouter une liste de filtrage des exécutions ([#8914](https://github.com/nocobase/nocobase/pull/8914)) par @mytharcher
- **[Workflow : Approbation]** Éviter de configurer l'interface utilisateur des approbateurs lorsqu'aucune collection n'est configurée dans le déclencheur par @mytharcher

### 🐛 Corrections de bugs

- **[resourcer]** Empêcher le tableau de paramètres `filterByTk` d'être automatiquement converti en objet lorsqu'il dépasse 100 éléments ([#8908](https://github.com/nocobase/nocobase/pull/8908)) par @2013xile
- **[client]** correction du problème où les non-administrateurs ne pouvaient pas effacer les valeurs des champs associés ([#8904](https://github.com/nocobase/nocobase/pull/8904)) par @jiannx
- **[Action : Importer des enregistrements Pro]**

  - Correction du problème où une erreur était levée lors de l'importation en mode synchrone par @mytharcher
  - Correction du problème où plus de ~30 colonnes provoquaient une erreur d'importation, en raison d'un flux lu en double par @mytharcher
- **[Workflow : Approbation]** Correction d'un problème de concurrence lors de l'ajout d'un assigné par @mytharcher

### [v2.0.20](https://www.nocobase.com/en/blog/v2.0.20)

*Date de sortie : 2026-03-19*

### 🐛 Corrections de bugs

- **[serveur]** Correction du problème où les événements du cycle de vie envoyés par le worker provoquaient l'arrêt de l'application de service ([#8906](https://github.com/nocobase/nocobase/pull/8906)) par @mytharcher
- **[Gestionnaire de sources de données]** Correction du problème où la collection créée par un employé IA manquait toujours les champs `createBy` et `updateBy` ([#8895](https://github.com/nocobase/nocobase/pull/8895)) par @cgyrock
- **[Action : Importer des enregistrements Pro]** Correction de l'importation paresseuse provoquant une erreur SES par @mytharcher
- **[Impression de modèle]** Correction d'une erreur d'impression de collection SQL par @jiannx
- **[Gestionnaire d'e-mails]** Correction d'une erreur de page lorsque l'e-mail n'existe pas par @jiannx

## next

![next.png](https://static-docs.nocobase.com/8ed17a0f08cc585018f6de6c8b13947d.png)

### [v2.1.0-beta.11](https://www.nocobase.com/en/blog/v2.1.0-beta.11)

*Date de sortie : 2026-03-20*

### 🚀 Améliorations

- **[Workflow]** Ajouter une liste de filtrage des exécutions ([#8914](https://github.com/nocobase/nocobase/pull/8914)) par @mytharcher
- **[Workflow : Approbation]** Éviter de configurer l'interface utilisateur des approbateurs lorsqu'aucune collection n'est configurée dans le déclencheur par @mytharcher

### 🐛 Corrections de bugs

- **[serveur]** Correction du problème où les événements du cycle de vie envoyés par le worker provoquaient l'arrêt de l'application de service ([#8906](https://github.com/nocobase/nocobase/pull/8906)) par @mytharcher
- **[client]** correction du problème où les non-administrateurs ne pouvaient pas effacer les valeurs des champs associés ([#8904](https://github.com/nocobase/nocobase/pull/8904)) par @jiannx
- **[resourcer]** Empêcher le tableau de paramètres `filterByTk` d'être automatiquement converti en objet lorsqu'il dépasse 100 éléments ([#8908](https://github.com/nocobase/nocobase/pull/8908)) par @2013xile
- **[Action : Importer des enregistrements Pro]**

  - Correction du problème où une erreur était levée lors de l'importation en mode synchrone par @mytharcher
  - Correction du problème où plus de ~30 colonnes provoquaient une erreur d'importation, en raison d'un flux lu en double par @mytharcher
- **[Workflow : Approbation]** Correction d'un problème de concurrence lors de l'ajout d'un assigné par @mytharcher
- **[Gestionnaire de migration]** Correction du problème où la migration était interrompue en raison d'une erreur causée par l'absence de la nouvelle table créée lors du processus de migration de téléchargement dans l'environnement cible. par @Andrew1989Y

### [v2.1.0-beta.10](https://www.nocobase.com/en/blog/v2.1.0-beta.10)

*Date de sortie : 2026-03-19*

### 🎉 Nouvelles fonctionnalités

- **[Employés IA]**

  - Permet d'ajouter des employés IA dans la fenêtre contextuelle des sous-tableaux ([#8873](https://github.com/nocobase/nocobase/pull/8873)) par @2013xile
  - Nettoyage planifié des données de point de contrôle de conversation IA. ([#8855](https://github.com/nocobase/nocobase/pull/8855)) par @cgyrock
- **[Superviseur d'applications]** Prise en charge du filtrage dans la liste des applications<br />Ajout de boîtes de dialogue de confirmation pour les actions de démarrage et d'arrêt<br />Tri des entrées de statut d'application par nom d'environnement par @2013xile

### 🚀 Améliorations

- **[serveur]** améliorer la logique pm add ([#8875](https://github.com/nocobase/nocobase/pull/8875)) par @chenos
- **[non défini]** README ([#8866](https://github.com/nocobase/nocobase/pull/8866)) par @gaston98765
- **[client]** Prise en charge de l'affichage d'un message de confirmation avant de fermer la fenêtre contextuelle. ([#8839](https://github.com/nocobase/nocobase/pull/8839)) par @gchust
- **[Workflow]** Correction du problème où l'arrêt gracieux ne vidait pas tous les événements ([#8894](https://github.com/nocobase/nocobase/pull/8894)) par @mytharcher
- **[Gestionnaire de tâches asynchrones]** les tâches asynchrones sont ajoutées pour prendre en charge les workers dans les messages d'erreur de publication ([#8849](https://github.com/nocobase/nocobase/pull/8849)) par @cgyrock

### 🐛 Corrections de bugs

- **[client]**

  - Correction du problème où la fenêtre contextuelle "Sélectionner un enregistrement" dans le sous-tableau ne se chargeait pas correctement lors de la deuxième ouverture. ([#8865](https://github.com/nocobase/nocobase/pull/8865)) par @gchust
  - Correction du problème où les valeurs par défaut de certains champs ne prenaient pas effet après l'actualisation de la page. ([#8834](https://github.com/nocobase/nocobase/pull/8834)) par @gchust
- **[base de données]** Correction du problème de validation côté serveur pour les champs de date ([#8867](https://github.com/nocobase/nocobase/pull/8867)) par @2013xile
- **[Gestionnaire de sources de données]** Correction du problème où la collection créée par un employé IA manquait toujours les champs `createBy` et `updateBy` ([#8895](https://github.com/nocobase/nocobase/pull/8895)) par @cgyrock
- **[Employés IA]**

  - Correction du problème avec l'URL spécifiée pour le service LLM qui ne prenait pas effet dans les appels de modèle d'intégration de texte. ([#8892](https://github.com/nocobase/nocobase/pull/8892)) par @cgyrock
  - Correction d'erreurs potentielles de variable non définie dans les scripts de migration de mise à niveau du plugin IA. ([#8883](https://github.com/nocobase/nocobase/pull/8883)) par @cgyrock
- **[Localisation]** Exception d'autorisation d'interface localizationTexts:missing ([#8861](https://github.com/nocobase/nocobase/pull/8861)) par @jiannx
- **[Action : Importer des enregistrements Pro]**

  - Correction de l'événement `beforeStop` sur la sous-application non déclenché par @mytharcher
  - Correction de l'importation paresseuse provoquant une erreur SES par @mytharcher
  - Correction du problème où les tâches asynchrones ne se terminent pas après une erreur dans l'importation asynchrone par @cgyrock
- **[IA : Base de connaissances]** Empêcher la suppression de la base de données vectorielles et du stockage vectoriel en cours d'utilisation. par @cgyrock
- **[Impression de modèle]** Correction d'une erreur d'impression de collection SQL par @jiannx
- **[Gestionnaire d'e-mails]** Correction d'une erreur de page lorsque l'e-mail n'existe pas par @jiannx

## develop

![develop.png](https://static-docs.nocobase.com/7fcdd9456a17286d8a439eee52bcb8d2.png)

### [v2.1.0-alpha.11](https://www.nocobase.com/en/blog/v2.1.0-alpha.11)

*Date de sortie : 2026-03-25*

### 🎉 Nouvelles fonctionnalités

- **[client]** ajouter une action d'élément JS ([#8911](https://github.com/nocobase/nocobase/pull/8911)) par @jiannx
- **[Employés IA]** Ajout de la capacité SKILLS aux employés IA. ([#8797](https://github.com/nocobase/nocobase/pull/8797)) par @cgyrock
- **[Gestionnaire de sources de données]** Prise en charge du chargement à la demande des outils MCP ([#8936](https://github.com/nocobase/nocobase/pull/8936)) par @2013xile

### 🚀 Améliorations

- **[moteur de workflow]** Améliorer la validation du schéma pour l'API de construction d'interface utilisateur. ([#8881](https://github.com/nocobase/nocobase/pull/8881)) par @gchust
- **[client]** Optimiser la disposition horizontale des actions de formulaire ([#8869](https://github.com/nocobase/nocobase/pull/8869)) par @jiannx
- **[app]** Ajouter un workflow de développement basé sur Rsbuild pour client-v1 tout en maintenant la compatibilité du développement de plugins locaux et de la topologie actuelle `/v2/` ([#8902](https://github.com/nocobase/nocobase/pull/8902)) par @Molunerfinn
- **[Champ de collection : divisions administratives de la Chine]** field-china-region 2.0 ([#8831](https://github.com/nocobase/nocobase/pull/8831)) par @jiannx
- **[Workflow]** Ajouter une validation pour tous les déclencheurs et nœuds ([#8930](https://github.com/nocobase/nocobase/pull/8930)) par @mytharcher
- **[Workflow : Approbation]** Correction d'un problème de performance lié au champ JSON lors du chargement de la liste des enregistrements d'approbation par @mytharcher

### 🐛 Corrections de bugs

- **[moteur de workflow]** Synchroniser le statut avec la configuration du champ lorsqu'un champ de formulaire est supprimé ([#8857](https://github.com/nocobase/nocobase/pull/8857)) par @jiannx
- **[resourcer]** Correction d'un problème où les sources de données externes ne se chargeaient pas correctement. ([#8929](https://github.com/nocobase/nocobase/pull/8929)) par @2013xile
- **[base de données]** Utiliser un avertissement au lieu d'une erreur lorsque l'un des paramètres d'ajout est invalide ([#8923](https://github.com/nocobase/nocobase/pull/8923)) par @mytharcher
- **[serveur]** Modifier le timing de fermeture de Pub-Sub à `beforeStop`, pour éviter que des messages soient envoyés ou traités après la fermeture de la base de données ([#8934](https://github.com/nocobase/nocobase/pull/8934)) par @mytharcher
- **[Variables personnalisées]** ignorer la notification d'authentification ([#8942](https://github.com/nocobase/nocobase/pull/8942)) par @chenos
- **[Employés IA]** Correction des cas de test défaillants dans le module IA du package principal. ([#8941](https://github.com/nocobase/nocobase/pull/8941)) par @cgyrock
- **[Localisation]** empêcher la requête localizationTexts:missing en cas de refus d'autorisation ([#8903](https://github.com/nocobase/nocobase/pull/8903)) par @chenos
- **[Action : Importer des enregistrements Pro]** Correction du problème où l'option "Déclencher un workflow" ne fonctionnait pas lorsqu'elle n'était pas cochée par @mytharcher
- **[Source de données : Oracle externe]** Correction d'une erreur qui se produit lors du chargement de la source de données Oracle externe par @2013xile
- **[Workflow : Approbation]** Correction des problèmes de traduction, de sélection de nœud et de cible de retour dans le bouton de retour du formulaire d'approbation v2 par @zhangzhonghe

### [v2.1.0-alpha.10](https://www.nocobase.com/en/blog/v2.1.0-alpha.10)

*Date de sortie : 2026-03-20*

### 🎉 Nouvelles fonctionnalités

- **[IdP : OAuth]** Ajouter un nouveau plugin IdP : OAuth pour permettre aux services MCP de s'authentifier via OAuth ([#8896](https://github.com/nocobase/nocobase/pull/8896)) par @2013xile
- **[Employés IA]** Nettoyage planifié des données de point de contrôle de conversation IA. ([#8855](https://github.com/nocobase/nocobase/pull/8855)) par @cgyrock
- **[Superviseur d'applications]** Prise en charge du filtrage dans la liste des applications<br />Ajout de boîtes de dialogue de confirmation pour les actions de démarrage et d'arrêt<br />Tri des entrées de statut d'application par nom d'environnement par @2013xile

### 🚀 Améliorations

- **[serveur]** améliorer la logique pm add ([#8875](https://github.com/nocobase/nocobase/pull/8875)) par @chenos
- **[client]** Prise en charge de l'affichage d'un message de confirmation avant de fermer la fenêtre contextuelle. ([#8839](https://github.com/nocobase/nocobase/pull/8839)) par @gchust
- **[non défini]** Ajouter une entrée client-v2 dédiée et la construire indépendamment avec rsbuild tout en laissant v1 inchangé. ([#8743](https://github.com/nocobase/nocobase/pull/8743)) par @Molunerfinn
- **[Workflow]**

  - Correction du problème où l'arrêt gracieux ne vidait pas tous les événements ([#8894](https://github.com/nocobase/nocobase/pull/8894)) par @mytharcher
  - Ajouter une liste de filtrage des exécutions ([#8914](https://github.com/nocobase/nocobase/pull/8914)) par @mytharcher
- **[Gestionnaire de tâches asynchrones]** les tâches asynchrones sont ajoutées pour prendre en charge les workers dans les messages d'erreur de publication ([#8849](https://github.com/nocobase/nocobase/pull/8849)) par @cgyrock
- **[Workflow : Approbation]** Éviter de configurer l'interface utilisateur des approbateurs lorsqu'aucune collection n'est configurée dans le déclencheur par @mytharcher

### 🐛 Corrections de bugs

- **[client]**

  - correction du problème où les non-administrateurs ne pouvaient pas effacer les valeurs des champs associés ([#8904](https://github.com/nocobase/nocobase/pull/8904)) par @jiannx
  - Correction du problème où la fenêtre contextuelle "Sélectionner un enregistrement" dans le sous-tableau ne se chargeait pas correctement lors de la deuxième ouverture. ([#8865](https://github.com/nocobase/nocobase/pull/8865)) par @gchust
- **[resourcer]** Empêcher le tableau de paramètres `filterByTk` d'être automatiquement converti en objet lorsqu'il dépasse 100 éléments ([#8908](https://github.com/nocobase/nocobase/pull/8908)) par @2013xile
- **[serveur]** Correction du problème où les événements du cycle de vie envoyés par le worker provoquaient l'arrêt de l'application de service ([#8906](https://github.com/nocobase/nocobase/pull/8906)) par @mytharcher
- **[Gestionnaire de sources de données]** Correction du problème où la collection créée par un employé IA manquait toujours les champs `createBy` et `updateBy` ([#8895](https://github.com/nocobase/nocobase/pull/8895)) par @cgyrock
- **[Employés IA]**

  - Correction du problème avec l'URL spécifiée pour le service LLM qui ne prenait pas effet dans les appels de modèle d'intégration de texte. ([#8892](https://github.com/nocobase/nocobase/pull/8892)) par @cgyrock
  - Correction d'erreurs potentielles de variable non définie dans les scripts de migration de mise à niveau du plugin IA. ([#8883](https://github.com/nocobase/nocobase/pull/8883)) par @cgyrock
- **[Action : Importer des enregistrements Pro]**

  - Correction du problème où plus de ~30 colonnes provoquaient une erreur d'importation, en raison d'un flux lu en double par @mytharcher
  - Correction du problème où une erreur était levée lors de l'importation en mode synchrone par @mytharcher
  - Correction de l'événement `beforeStop` sur la sous-application non déclenché par @mytharcher
  - Correction du problème où les tâches asynchrones ne se terminent pas après une erreur dans l'importation asynchrone par @cgyrock
  - Correction de l'importation paresseuse provoquant une erreur SES par @mytharcher
- **[Impression de modèle]** Correction d'une erreur d'impression de collection SQL par @jiannx
- **[Workflow : Approbation]** Correction d'un problème de concurrence lors de l'ajout d'un assigné par @mytharcher
- **[Gestionnaire d'e-mails]** Correction d'une erreur de page lorsque l'e-mail n'existe pas par @jiannx
- **[Gestionnaire de migration]** Correction du problème où la migration était interrompue en raison d'une erreur causée par l'absence de la nouvelle table créée lors du processus de migration de téléchargement dans l'environnement cible. par @Andrew1989Y
