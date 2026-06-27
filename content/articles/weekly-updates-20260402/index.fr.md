---
title: "Mises à jour hebdomadaires｜Ajout de variables JS au flux d'événements"
description: "Ceci est un résumé des mises à jour et améliorations des fonctionnalités de NocoBase du 27 mars au 2 avril 2026."
---

Résumé des journaux de mise à jour hebdomadaires du produit. Les dernières versions sont disponibles sur [notre blog](https://www.nocobase.com/en/blog/timeline).

**NocoBase est actuellement mis à jour avec trois branches : `main`, `next` et `develop`.**

![version.png](https://static-docs.nocobase.com/ba5f04e27e99c625cb3822da5df07860.png)

* `main` : La version la plus stable à ce jour, recommandée pour l'installation ;
* `next` : Version bêta, contient les nouvelles fonctionnalités à venir et a été testée préliminairement. Il peut y avoir des problèmes connus ou inconnus. Elle est principalement destinée aux utilisateurs testeurs pour recueillir des retours et optimiser davantage les fonctionnalités. Idéale pour les utilisateurs testeurs qui souhaitent découvrir les nouvelles fonctionnalités en avant-première et donner leur avis ;
* `develop` : Version alpha, contient le code de fonctionnalité le plus récent, peut être incomplète ou instable, principalement destinée au développement interne et à l'itération rapide. Adaptée aux utilisateurs techniques intéressés par les fonctionnalités de pointe du produit, mais avec des problèmes potentiels et des fonctions incomplètes. Ne convient pas à une utilisation en production.

## main

![main.png](https://static-docs.nocobase.com/47a3c71734c1d0f908b51f9ebd53c0ac.png)

### [v2.0.31](https://www.nocobase.com/en/blog/v2.0.31)

*Date de sortie : 2026-04-01*

### 🚀 Améliorations

- **[Employés IA]** Optimisation des invites pour deepseek lors du traitement de types de fichiers non pris en charge ([#9003](https://github.com/nocobase/nocobase/pull/9003)) par @cgyrock
- **[Workflow]** Changement de la taille du commutateur activé en petit ([#9010](https://github.com/nocobase/nocobase/pull/9010)) par @mytharcher

### 🐛 Corrections de bugs

- **[client]** Correction du problème où la copie des champs associés dans le tableau ne s'affichait pas correctement lors du premier rendu. ([#9007](https://github.com/nocobase/nocobase/pull/9007)) par @jiannx
- **[moteur de flux]** Correction des menus de paramètres rognés dans la fenêtre contextuelle ([#9005](https://github.com/nocobase/nocobase/pull/9005)) par @gchust
- **[Notification : Message dans l'application]** Correction de la liste blanche d'actions pour les mises à jour de messages dans l'application afin d'empêcher les mises à jour non autorisées par des non-propriétaires. ([#9001](https://github.com/nocobase/nocobase/pull/9001)) par @mytharcher
- **[Employés IA]** Correction du problème de comportement anormal de la recherche web lors de l'utilisation du LLM Qwen ([#9012](https://github.com/nocobase/nocobase/pull/9012)) par @cgyrock

### [v2.0.30](https://www.nocobase.com/en/blog/v2.0.30)

*Date de sortie : 2026-03-30*

### 🚀 Améliorations

- **[Workflow : JavaScript]** Ajout de `isolated-vm` comme moteur d'exécution JavaScript par défaut pour le nœud JavaScript ([#8973](https://github.com/nocobase/nocobase/pull/8973)) par @mytharcher
  Référence : [Nœud JavaScript](https://docs.nocobase.com/cn/workflow/nodes/javascript)

### 🐛 Corrections de bugs

- **[client]** Correction d'un message de confirmation secondaire incorrect lors de la fermeture d'une fenêtre contextuelle à plusieurs niveaux après modification des données du formulaire. ([#8944](https://github.com/nocobase/nocobase/pull/8944)) par @gchust
- **[Workflow : Nœud SQL]** Correction d'un problème de sécurité dans le nœud SQL ([#8989](https://github.com/nocobase/nocobase/pull/8989)) par @mytharcher
- **[Employés IA]** Ajout d'une vérification de propriété à l'API de conversation IA ([#8993](https://github.com/nocobase/nocobase/pull/8993)) par @cgyrock
- **[Workflow : Approbation]** Correction de la limite de version des migrations héritées pour éviter une erreur lors du démarrage dans le déploiement de la dernière version par @mytharcher

### [v2.0.29](https://www.nocobase.com/en/blog/v2.0.29)

*Date de sortie : 2026-03-30*

### 🚀 Améliorations

- **[non défini]** Réduction du bruit des logs lors du démarrage du serveur en rendant silencieuses les commandes de décompression pour LibreOffice et Oracle Instant Client ([#8984](https://github.com/nocobase/nocobase/pull/8984)) par @Rishabh1925

### 🐛 Corrections de bugs

- **[client]** Correction du problème où un espace dans une expression de variable empêchait l'affichage du libellé ([#8988](https://github.com/nocobase/nocobase/pull/8988)) par @mytharcher
- **[moteur de flux]** Correction d'un problème où les éléments de menu ne pouvaient pas être sélectionnés lorsque la largeur du composant d'interface utilisateur en état de configuration était trop petite. ([#8954](https://github.com/nocobase/nocobase/pull/8954)) par @gchust
- **[Visualisation de données]** Lors de l'utilisation de filtres basés sur des variables, les graphiques ne parviennent pas à résoudre correctement les valeurs des variables lors du rendu initial ([#8964](https://github.com/nocobase/nocobase/pull/8964)) par @2013xile

### [v2.0.28](https://www.nocobase.com/en/blog/v2.0.28)

*Date de sortie : 2026-03-27*

### 🐛 Corrections de bugs

- **[Action : Importer des enregistrements]** Correction du problème d'échec d'importation après l'ouverture du plugin-espace ([#8968](https://github.com/nocobase/nocobase/pull/8968)) par @jiannx
- **[Visualisation de données]** Correction des statistiques de données anormales du graphique du rôle racine après l'activation du plugin espace ([#8969](https://github.com/nocobase/nocobase/pull/8969)) par @jiannx
- **[Workflow : JavaScript]** Correction de problèmes de sécurité ([#8967](https://github.com/nocobase/nocobase/pull/8967)) par @mytharcher
- **[Employés IA]** Ajustement de l'espace entre les composants de carte d'outil dans la conversation IA ([#8965](https://github.com/nocobase/nocobase/pull/8965)) par @cgyrock
- **[Action : Exporter des enregistrements]** Limitation de la configuration d'importation et d'exportation des champs associés multicouches ([#8893](https://github.com/nocobase/nocobase/pull/8893)) par @jiannx
- **[Action : Importer des enregistrements Pro]** limitation de la configuration d'importation et d'exportation des champs associés multicouches par @jiannx

### [v2.0.27](https://www.nocobase.com/en/blog/v2.0.27)

*Date de sortie : 2026-03-26*

### 🚀 Améliorations

- **[Workflow]** Ajout d'une variable pour le paramètre de taille de page ([#8951](https://github.com/nocobase/nocobase/pull/8951)) par @mytharcher
- **[Workflow : Sous-flux]** Ajout d'une logique défensive pour éviter les blocages du workflow en cas d'exception par @mytharcher

### 🐛 Corrections de bugs

- **[client]** Correction de l'exception lors de l'ajout de nœuds enfants à un tableau arborescent dans une fenêtre contextuelle ([#8872](https://github.com/nocobase/nocobase/pull/8872)) par @jiannx
- **[serveur]** Éviter de traiter les messages de synchronisation après l'arrêt de l'application ([#8940](https://github.com/nocobase/nocobase/pull/8940)) par @mytharcher
- **[Moteur de flux]** Suppression d'un événement hérité copié du dépôt uiSchema pour éviter une erreur lors du déclenchement ([#8957](https://github.com/nocobase/nocobase/pull/8957)) par @mytharcher
- **[Authentification]** Correction de l'acl pour prendre en charge les paramètres de filtrage d'état personnalisés ([#8918](https://github.com/nocobase/nocobase/pull/8918)) par @jiannx
- **[Gestionnaire d'e-mails]** Correction de la signature écrasée lors de l'utilisation de modèles par @jiannx

## develop

![develop.png](https://static-docs.nocobase.com/7fcdd9456a17286d8a439eee52bcb8d2.png)

### [v2.1.0-alpha.13](https://www.nocobase.com/en/blog/v2.1.0-alpha.13)

*Date de sortie : 2026-03-27*

### 🎉 Nouvelles fonctionnalités

- **[client]** Ajout de variables JS au flux d'événements ([#8938](https://github.com/nocobase/nocobase/pull/8938)) par @jiannx

### 🚀 Améliorations

- **[client]** Prise en charge de la définition des styles de champ via runjs ([#8933](https://github.com/nocobase/nocobase/pull/8933)) par @jiannx
- **[moteur de flux]** Amélioration de la validation du schéma pour l'API de construction d'interface utilisateur. ([#8881](https://github.com/nocobase/nocobase/pull/8881)) par @gchust
- **[Workflow : Événement pré-action]** Ajout de règles de validation pour les déclencheurs et les nœuds ([#8971](https://github.com/nocobase/nocobase/pull/8971)) par @mytharcher
- **[Workflow]** Ajout d'une variable pour le paramètre de taille de page ([#8951](https://github.com/nocobase/nocobase/pull/8951)) par @mytharcher
- **[Workflow : Webhook]** Ajout d'une validation pour la création d'API de déclencheur / nœud par @mytharcher
- **[Workflow : Sous-flux]**

  - Ajout d'une validation pour la création d'API de nœud par @mytharcher
  - Ajout d'une logique défensive pour éviter les blocages du workflow en cas d'exception par @mytharcher
- **[Workflow : Approbation]** Ajout d'une validation pour l'API de déclencheur / nœud par @mytharcher

### 🐛 Corrections de bugs

- **[client]** Correction de l'exception lors de l'ajout de nœuds enfants à un tableau arborescent dans une fenêtre contextuelle ([#8872](https://github.com/nocobase/nocobase/pull/8872)) par @jiannx
- **[serveur]** Éviter de traiter les messages de synchronisation après l'arrêt de l'application ([#8940](https://github.com/nocobase/nocobase/pull/8940)) par @mytharcher
- **[Action : Exporter des enregistrements]** Limitation de la configuration d'importation et d'exportation des champs associés multicouches ([#8893](https://github.com/nocobase/nocobase/pull/8893)) par @jiannx
- **[Visualisation de données]** Correction des statistiques de données anormales du graphique du rôle racine après l'activation du plugin espace ([#8969](https://github.com/nocobase/nocobase/pull/8969)) par @jiannx
- **[Action : Importer des enregistrements]** Correction du problème d'échec d'importation après l'ouverture du plugin-espace ([#8968](https://github.com/nocobase/nocobase/pull/8968)) par @jiannx
- **[Workflow : JavaScript]** Correction de problèmes de sécurité ([#8967](https://github.com/nocobase/nocobase/pull/8967)) par @mytharcher
- **[Employés IA]** Ajustement de l'espace entre les composants de carte d'outil dans la conversation IA ([#8965](https://github.com/nocobase/nocobase/pull/8965)) par @cgyrock
- **[Moteur de flux]** Suppression d'un événement hérité copié du dépôt uiSchema pour éviter une erreur lors du déclenchement ([#8957](https://github.com/nocobase/nocobase/pull/8957)) par @mytharcher
- **[Authentification]** Correction de l'acl pour prendre en charge les paramètres de filtrage d'état personnalisés ([#8918](https://github.com/nocobase/nocobase/pull/8918)) par @jiannx
- **[Action : Importer des enregistrements Pro]** limitation de la configuration d'importation et d'exportation des champs associés multicouches par @jiannx
- **[Gestionnaire d'e-mails]** Correction de la signature écrasée lors de l'utilisation de modèles par @jiannx
