---
title: "Mises à jour hebdomadaires｜Plugins commerciaux open source et mise à jour de la licence AGPL-3.0 vers Apache-2.0"
description: "Ceci est un résumé des mises à jour et améliorations des fonctionnalités de NocoBase du 13 au 26 février 2026."
---

Résumez les journaux de mise à jour hebdomadaires du produit. Les dernières versions sont disponibles sur [notre blog](https://www.nocobase.com/en/blog/timeline).

**NocoBase est actuellement mis à jour avec trois branches : `main`, `next` et `develop`.**

![version.png](https://static-docs.nocobase.com/ba5f04e27e99c625cb3822da5df07860.png)

* `main` : La version la plus stable à ce jour, recommandée pour l'installation ;
* `next` : Version bêta, contient les nouvelles fonctionnalités à venir et a été testée préliminairement. Il peut y avoir des problèmes connus ou inconnus. Elle est principalement destinée aux utilisateurs testeurs pour recueillir des retours et optimiser davantage les fonctionnalités. Idéale pour les utilisateurs testeurs qui souhaitent découvrir les nouvelles fonctionnalités en avant-première et donner leur avis ;
* `develop` : Version alpha, contient le code de fonctionnalité le plus récent, peut être incomplète ou instable, principalement destinée au développement interne et à l'itération rapide. Adaptée aux utilisateurs techniques intéressés par les fonctionnalités de pointe du produit, mais avec des problèmes potentiels et des fonctions incomplètes. Ne pas utiliser en production.

## main

![main.png](https://static-docs.nocobase.com/47a3c71734c1d0f908b51f9ebd53c0ac.png)

### [v2.0.5](https://www.nocobase.com/en/blog/v2.0.5)

*Date de sortie : 2026-02-26*

### 🐛 Corrections de bugs

- **[client]** Sur mobile, fermer d'abord le menu, puis effectuer la navigation de page ([#8699](https://github.com/nocobase/nocobase/pull/8699)) par @zhangzhonghe
- **[IA LLM : GigaChat]** Correction du plugin GigaChat qui ne fonctionnait pas dans la version 2.0. ([#8707](https://github.com/nocobase/nocobase/pull/8707)) par @cgyrock
- **[Employés IA]**

  - Unification de l'entrée de fichier pour les API chatGPT en utilisant ContentBlock ([#8696](https://github.com/nocobase/nocobase/pull/8696)) par @cgyrock
  - Correction d'une erreur de l'agent IA lorsque l'utilisateur envoie un nouveau message sans confirmer l'exécution de l'outil ([#8697](https://github.com/nocobase/nocobase/pull/8697)) par @cgyrock
- **[IA : Base de connaissances]** Correction d'une erreur de démarrage du plugin de base de connaissances IA. par @cgyrock
- **[Gestionnaire d'emails]** Erreur de rendu d'image par @jiannx

### [v2.0.3](https://www.nocobase.com/en/blog/v2.0.3)

*Date de sortie : 2026-02-25*

### 🎉 Nouvelles fonctionnalités

- **[non défini]**

  - Ajout d'un plugin expérimental "Bloc de référence", qui permet de réutiliser des blocs existants par référence ou copie. ([#7584](https://github.com/nocobase/nocobase/pull/7584)) par @gchust
  - Brouillons de formulaire par @chenos
- **[acl]** Passage en open source des plugins commerciaux et mise à jour de la licence de AGPL-3.0 à Apache-2.0 ([#8682](https://github.com/nocobase/nocobase/pull/8682)) par @chenos
- **[client]**

  - Prise en charge de la configuration des titres d'onglet du navigateur pour les pages, les onglets de page, les popups et les onglets de popup ([#8590](https://github.com/nocobase/nocobase/pull/8590)) par @zhangzhonghe
  - Prise en charge de la configuration des champs du champ de collection d'association dans le bloc de formulaire ([#8578](https://github.com/nocobase/nocobase/pull/8578)) par @katherinehhh
  - Prise en charge de la configuration du mode de chargement des données ([#8551](https://github.com/nocobase/nocobase/pull/8551)) par @zhangzhonghe
  - Ajout du composant de champ sous-tableau (édition contextuelle) ([#8280](https://github.com/nocobase/nocobase/pull/8280)) par @katherinehhh
  - Lors de la création d'une collection, le type de champ id prédéfini peut être modifié ([#8129](https://github.com/nocobase/nocobase/pull/8129)) par @cgyrock
  - Ajout de la prise en charge des paramètres ajouter/sélectionner/dissocier dans le sous-formulaire plusieurs-à-plusieurs ([#8099](https://github.com/nocobase/nocobase/pull/8099)) par @katherinehhh
  - Prise en charge de la personnalisation des styles globaux dans l'éditeur de thème ([#7960](https://github.com/nocobase/nocobase/pull/7960)) par @ljmiaoo
  - Prise en charge de la définition d'une règle de tri par défaut dans le bloc de détail ([#8070](https://github.com/nocobase/nocobase/pull/8070)) par @katherinehhh
  - Prise en charge de la définition du type de données pour le champ Nombre (options : double, float, decimal) ([#8058](https://github.com/nocobase/nocobase/pull/8058)) par @chenos
  - Prise en charge du tri des champs de colonne dans le tableau ([#7900](https://github.com/nocobase/nocobase/pull/7900)) par @katherinehhh
  - Ajout de la prise en charge de la création rapide pour la sélection de champ d'association ([#7887](https://github.com/nocobase/nocobase/pull/7887)) par @katherinehhh
  - Prise en charge du sélecteur en cascade pour le champ d'association de collection arborescente ([#7846](https://github.com/nocobase/nocobase/pull/7846)) par @katherinehhh
  - Prise en charge du glisser-déposer pour les actions de colonne de tableau ([#7842](https://github.com/nocobase/nocobase/pull/7842)) par @zhangzhonghe
  - Ajout de la prise en charge de la pagination pour le sous-tableau ([#7754](https://github.com/nocobase/nocobase/pull/7754)) par @katherinehhh
  - Flux d'événements : Introduction de nouvelles actions prédéfinies pour améliorer les options de personnalisation pour la gestion des événements, permettant aux utilisateurs de rationaliser les flux de travail et d'améliorer l'efficacité ([#7672](https://github.com/nocobase/nocobase/pull/7672)) par @zhangzhonghe
  - Ajout du bloc markdown 2.0 ([#7613](https://github.com/nocobase/nocobase/pull/7613)) par @katherinehhh
  - Prise en charge de la définition de règles de liaison pour les sous-formulaires ([#7640](https://github.com/nocobase/nocobase/pull/7640)) par @zhangzhonghe
  - Ajout de la prise en charge des écouteurs d'événements de clic sur les lignes de tableau, permettant aux utilisateurs d'exécuter des actions spécifiques lorsqu'une ligne du tableau est cliquée ([#7622](https://github.com/nocobase/nocobase/pull/7622)) par @zhangzhonghe
  - Ajout de la prise en charge des variables personnalisées ([#7585](https://github.com/nocobase/nocobase/pull/7585)) par @zhangzhonghe
  - Ajout de la variable "Type d'appareil actuel" ([#7576](https://github.com/nocobase/nocobase/pull/7576)) par @zhangzhonghe
- **[moteur de flux]** Prise en charge de env.ESM_CDN_BASE_URL ([#8529](https://github.com/nocobase/nocobase/pull/8529)) par @chenos
- **[serveur]** Refonte du superviseur d'application pour prendre en charge la gestion multi-applications dans différents scénarios ([#8043](https://github.com/nocobase/nocobase/pull/8043)) par @2013xile
- **[test]** Ajout d'un contrôle de concurrence au niveau du processus pour le gestionnaire de tâches de base ([#8343](https://github.com/nocobase/nocobase/pull/8343)) par @cgyrock
- **[Action : Modification groupée]** Modification groupée 2.0 ([#8526](https://github.com/nocobase/nocobase/pull/8526)) par @jiannx
- **[Bloc : Carte en grille]**

  - Prise en charge de la hauteur de bloc configurable ([#8583](https://github.com/nocobase/nocobase/pull/8583)) par @katherinehhh
  - Ajout du bloc carte en grille 2.0 ([#7579](https://github.com/nocobase/nocobase/pull/7579)) par @katherinehhh
- **[Action : Dupliquer l'enregistrement]** Ajout de l'action de duplication 2.0 ([#8580](https://github.com/nocobase/nocobase/pull/8580)) par @katherinehhh
-


En raison des limites d'espace, veuillez vous référer au lien ci-dessous pour les notes de version complètes.

[https://www.nocobase.com/en/blog/v2.0.3](https://www.nocobase.com/en/blog/v2.0.3)

### [v1.9.48](https://www.nocobase.com/en/blog/v1.9.48)

*Date de sortie : 2026-02-24*

### 🚀 Améliorations

- **[Contrôle d'accès]** Fournir une API de nettoyage pour filtrer les valeurs d'association dans l'action ([#8601](https://github.com/nocobase/nocobase/pull/8601)) par @2013xile

### 🐛 Corrections de bugs

- **[Workflow : Approbation]** Nettoyage des valeurs d'association dans les actions d'approbation, pour éviter toute manipulation de données au-delà des autorisations par @mytharcher

### [v2.0.2](https://www.nocobase.com/en/blog/v2.0.2])

*Date de sortie : 2026-02-22*

### 🐛 Corrections de bugs

- **[Calendrier]** Correction des problèmes de localisation du calendrier et de formatage des dates ([#8498](https://github.com/nocobase/nocobase/pull/8498)) par @sembaev-a-a

### [v2.0.1](https://www.nocobase.com/en/blog/v2.0.1)

*Date de sortie : 2026-02-16*

### 🐛 Corrections de bugs

- **[Employés IA]** Correction d'un OOM du navigateur lors de l'utilisation d'un employé IA ([#8653](https://github.com/nocobase/nocobase/pull/8653)) par @mytharcher

### [v1.9.47](https://www.nocobase.com/en/blog/v1.9.47)

*Date de sortie : 2026-02-13*

### 🐛 Corrections de bugs

- **[client]** Correction d'un problème où le champ de pièce jointe d'association effacé n'était pas enregistré après la soumission dans le formulaire d'édition ([#8616](https://github.com/nocobase/nocobase/pull/8616)) par @katherinehhh
- **[utils]** Correction d'un problème de sécurité du moteur d'évaluation `formula.js` ([#8416](https://github.com/nocobase/nocobase/pull/8416)) par @mytharcher
- **[Workflow : Approbation]** Correction du problème où les données d'approbation ne s'affichaient pas dans la popup de détail de l'enregistrement si le mode du workflow était défini sur "Avant l'enregistrement" par @mytharcher


## next

![next.png](https://static-docs.nocobase.com/8ed17a0f08cc585018f6de6c8b13947d.png)

### [v2.1.0-beta.2](https://www.nocobase.com/en/blog/v2.1.0-beta.2)

*Date de sortie : 2026-02-22*

### 🐛 Corrections de bugs

- **[Calendrier]** Correction des problèmes de localisation du calendrier et de formatage des dates ([#8498](https://github.com/nocobase/nocobase/pull/8498)) par @sembaev-a-a
- **[Employés IA]** Correction d'un OOM du navigateur lors de l'utilisation d'un employé IA ([#8653](https://github.com/nocobase/nocobase/pull/8653)) par @mytharcher

### [v2.1.0-beta.1](https://www.nocobase.com/en/blog/v2.1.0-beta.1)

*Date de sortie : 2026-02-14*

### 🎉 Nouvelles fonctionnalités

- **[serveur]** Refonte du superviseur d'application pour prendre en charge la gestion multi-applications dans différents scénarios ([#8043](https://github.com/nocobase/nocobase/pull/8043)) par @2013xile

### 🚀 Améliorations

- **[client]**
  - Amélioration de l'interface utilisateur d'affectation des champs date/heure pour prendre en charge la sélection de dates/heures relatives. ([#8630](https://github.com/nocobase/nocobase/pull/8630)) par @gchust
  - Prise en charge de la spécification du champ de titre pour les champs d'association lors de l'affectation d'un champ. ([#8624](https://github.com/nocobase/nocobase/pull/8624)) par @gchust

### 🐛 Corrections de bugs

- **[moteur de flux]**

  - Correction d'un problème où le sous-menu du champ de filtre ne pouvait pas être développé lorsqu'un mot-clé de recherche était présent. ([#8604](https://github.com/nocobase/nocobase/pull/8604)) par @gchust
  - Correction de l'action de suppression de colonne qui ne fonctionnait pas dans l'édition du sous-tableau contextuel lorsque createModelOptions est configuré ([#8560](https://github.com/nocobase/nocobase/pull/8560)) par @katherinehhh
- **[client]**

  - Correction d'un problème où l'affectation d'un seul enregistrement à un champ de relation plusieurs-à-plusieurs produisait des résultats incorrects. ([#8652](https://github.com/nocobase/nocobase/pull/8652)) par @gchust
  - Analyse de la date à l'aide du sélecteur de date et ajout de la validation de la force du mot de passe, etc. ([#8647](https://github.com/nocobase/nocobase/pull/8647)) par @jiannx
  - Correction du problème d'espacement causé par les actions liées masquées dans la colonne d'action du tableau ([#8646](https://github.com/nocobase/nocobase/pull/8646)) par @zhangzhonghe
  - Correction du problème où `Action.Modal` ne pouvait pas être fermé après une certaine interaction ([#8642](https://github.com/nocobase/nocobase/pull/8642)) par @mytharcher
  - Correction d'une erreur de syntaxe lors du rendu d'un Liquid invalide par un élément markdown ([#8637](https://github.com/nocobase/nocobase/pull/8637)) par @katherinehhh
  - Correction des requêtes d'analyse inutiles du backend pour les propriétés de champ plusieurs-à-plusieurs dans le bloc de formulaire. ([#8636](https://github.com/nocobase/nocobase/pull/8636)) par @gchust
  - Correction du format de nombre manquant pour les champs de formule numérique et des paramètres de format de date pour les champs de formule de date ([#8625](https://github.com/nocobase/nocobase/pull/8625)) par @katherinehhh
  - Correction du rendu incomplet de la bordure supérieure sur le premier élément du formulaire ([#8623](https://github.com/nocobase/nocobase/pull/8623)) par @katherinehhh
  - Correction : masquer "Activer le tableau arborescent" et "Développer toutes les lignes par défaut" pour les collections non arborescentes ([#8566](https://github.com/nocobase/nocobase/pull/8566)) par @katherinehhh
- **[utils]** Correction d'un problème de sécurité du moteur d'évaluation `formula.js` ([#8416](https://github.com/nocobase/nocobase/pull/8416)) par @mytharcher
- **[Employés IA]**

  - Correction d'un problème où les liens de citation des recherches web IA n'étaient pas affichés dans la boîte de discussion ([#8651](https://github.com/nocobase/nocobase/pull/8651)) par @cgyrock
  - Correction d'une erreur de paramètres de l'API openai ([#8633](https://github.com/nocobase/nocobase/pull/8633)) par @cgyrock
- **[Modèle d'impression]** Correction des champs avec la même clé entraînant des erreurs de rendu par @jiannx
- **[Workflow : Approbation]**

  - Correction du problème où une erreur était levée lors de l'approbation d'un enregistrement supprimé par @mytharcher
  - Correction du problème où les données d'approbation ne s'affichaient pas dans la popup de détail de l'enregistrement si le mode du workflow était défini sur "Avant l'enregistrement" par @mytharcher

## develop

![develop.png](https://static-docs.nocobase.com/7fcdd9456a17286d8a439eee52bcb8d2.png)

### [v2.1.0-alpha.6](https://www.nocobase.com/en/blog/v2.1.0-alpha.6)

*Date de sortie : 2026-02-25*

### 🎉 Nouvelles fonctionnalités

- **[acl]** Passage en open source des plugins commerciaux et mise à jour de la licence de AGPL-3.0 à Apache-2.0 ([#8682](https://github.com/nocobase/nocobase/pull/8682)) par @chenos

### 🚀 Améliorations

- **[non défini]** Mise à jour de la documentation des employés IA ([#8690](https://github.com/nocobase/nocobase/pull/8690)) par @heziqiang

### 🐛 Corrections de bugs

- **[client]**

  - Unification du comportement de pagination mobile pour le tableau et la carte en grille ([#8691](https://github.com/nocobase/nocobase/pull/8691)) par @zhangzhonghe
  - Le filtre du bloc graphique ne fonctionne pas ([#8671](https://github.com/nocobase/nocobase/pull/8671)) par @chenos
- **[Employés IA]** L'API aiTools:list renvoie 403 ([#8672](https://github.com/nocobase/nocobase/pull/8672)) par @chenos
- **[Localisation]** Amélioration de la gestion des clés i18n manquantes ([#8673](https://github.com/nocobase/nocobase/pull/8673)) par @chenos

### [v2.1.0-alpha.3](https://www.nocobase.com/en/blog/v2.1.0-alpha.3)

*Date de sortie : 2026-02-16*

### 🐛 Corrections de bugs

- **[Employés IA]** Correction d'un OOM du navigateur lors de l'utilisation d'un employé IA ([#8653](https://github.com/nocobase/nocobase/pull/8653)) par @mytharcher

### [v2.1.0-alpha.2](https://www.nocobase.com/en/blog/v2.1.0-alpha.2)

*Date de sortie : 2026-02-15*

### 🎉 Nouvelles fonctionnalités

- **[Workflow : Approbation]** Ajout du contrôle d'accès ACL pour les API d'approbation par @mytharcher
- **[Auth : DingTalk]** Permet de lier un utilisateur avec `unionId` par @2013xile

### 🚀 Améliorations

- **[IA : Base de connaissances]** Optimisation de la sortie de construction pour réduire la taille du package de plugin-ai-knowledge-base. par @cgyrock
- **[Multi-espace]** Contrôle des autorisations multi-espace accédant à l'ACL par @jiannx
- **[Action : Exporter les enregistrements Pro]** Amélioration de la portée des données d'exportation en fonction des enregistrements sélectionnés ou des filtres de ressource par @katherinehhh
- **[Workflow : Approbation]**

  - Suppression de la prise en charge des champs JS par @zhangzhonghe
  - Simplification des paramètres dans la requête et amélioration des performances par @mytharcher
  - Implémentation du contrôle d'accès pour les API afin d'empêcher les opérations de données non autorisées par @mytharcher
  - Ajout d'une logique de réparation pour les audiences synchronisées après la migration par @mytharcher
- **[Auth : DingTalk]** Utilisation de `userid` comme clé par défaut pour l'association utilisateur, tout en préservant la compatibilité avec les authentificateurs existants qui reposent sur le mobile par @2013xile

### 🐛 Corrections de bugs

- **[Multi-espace]**

  - Ajout d'un script de migration pour supprimer x-ready-pretty dans le champ d'espace par @jiannx
  - Espace lié lors de l'ajout de données associées par @jiannx
  - La couleur du sélecteur d'espace suit le thème par @jiannx
  - Suppression de l'attribut read-pretty pour le champ d'espace par @jiannx
- **[Composant de champ : masque]** Correction d'un problème où la popup des paramètres du champ de masque ne pouvait pas charger correctement tous les rôles utilisateur. par @gchust
- **[Action : Importer les enregistrements Pro]**

  - Correction du problème où le workflow déclenché par l'importation asynchrone était retardé dans son exécution par @mytharcher
  - Correction des nombres de comptage dans le résultat d'importation et de la traduction des messages par @mytharcher
- **[IA : Base de connaissances]** Correction du problème où le système ne pouvait pas démarrer après la construction par @cgyrock
- **[Source de données : API REST]** Ajout d'une tolérance aux pannes pour le contexte de requête, afin d'éviter une erreur lorsque la méthode n'est pas dans le contexte par @mytharcher
- **[Workflow : Événement d'action personnalisée]** Correction du problème où les paramètres et la charge utile étaient incorrects lors du déclenchement d'un workflow personnalisé par @mytharcher
- **[Action : Exporter les enregistrements Pro]** Correction d'une erreur lorsque les sous-applications exécutent des tâches d'import/export asynchrones tandis que l'application principale n'active pas le plugin d'import/export pro par @cgyrock
- **[Workflow : Webhook]**

  - Correction du problème où une erreur 404 était levée lors de l'envoi (POST) vers une URL de webhook dans une sous-application par @mytharcher
  - Correction du problème où les données du corps étaient manquantes lorsque l'analyse du corps n'était pas configurée par @mytharcher
- **[Workflow : Sous-flux]** Correction du chemin de route du lien de workflow par @mytharcher
- **[Modèle d'impression]**

  - Correction d'un problème d'affichage de la liste des champs dans la configuration de l'action du modèle d'impression par @katherinehhh
  - Correction des champs avec la même clé entraînant des erreurs de rendu par @jiannx
  - Correction du problème de popup de modèle de configuration obscurcie par @zhangzhonghe
  - Suppression des boutons de pied de page de la configuration du modèle d'impression par @katherinehhh
  - Correction de la logique d'autorisation incorrecte du bouton d'impression lorsque les rôles étaient unis. par @jiannx
  - Prise en charge du champ d'espace par @jiannx
  - Affichage des champs d'espace dans la version 2.0 par @jiannx
- **[Stockage de fichiers : S3(Pro)]** Correction du problème où le mode de renommage de fichier ne fonctionnait pas par @mytharcher
- **[Visualisation des données : ECharts]** Correction d'une erreur d'orthographe dans ECharts par @heziqiang
- **[Workflow : Approbation]**

  - Correction du problème où une erreur était levée lors de l'approbation d'un enregistrement supprimé par @mytharcher
  - Correction d'une erreur levée lors de l'exécution en mode avant enregistrement par @mytharcher
  - Correction du problème où les données d'approbation ne s'affichaient pas dans la popup de détail de l'enregistrement si le mode du workflow était défini sur "Avant l'enregistrement" par @mytharcher
  - Ajout d'une tolérance aux pannes lors de la suppression du workflow, pour éviter une erreur de chargement dans la liste des tâches par @mytharcher
  - Correction du problème où des valeurs manquaient dans la popup de détail de "Ma demande" par @mytharcher
  - Correction du problème où une erreur était levée dans la popup d'enregistrement d'approbation 1.x par @mytharcher
  - Correction d'un problème de performances causé par le champ JSON dans le chargement de la liste (MySQL) par @mytharcher
  - Correction d'un identifiant incorrect pour charger l'enregistrement de détail par @mytharcher
  - Correction du problème où la concurrence entraînait une reprise répétée de l'exécution par @mytharcher
  - Correction d'une erreur de construction causée par des dépendances manquées par @mytharcher
  - Correction du problème où un enregistrement incorrect était chargé en raison de paramètres erronés par @mytharcher
  - Correction du problème où le retour d'une approbation au nœud précédent revenait au début par @mytharcher
  - Correction d'une erreur levée lors de l'ajout d'un rôle à un utilisateur si le workflow des audiences est désactivé par @mytharcher
  - Correction du problème où le bloc de valeur ne s'affichait pas en raison de l'absence du composant `ValueBlock.Result` par @mytharcher
  - Correction du problème où les champs ne s'affichaient pas sur les cartes de tâches d'approbation par @zhangzhonghe
  - Correction du problème où les champs de filtre ne fonctionnaient pas correctement dans le centre de tâches par @mytharcher
- **[Gestionnaire d'emails]**

  - Correction de la chaîne de conversation par @jiannx
  - Correction du lien de réponse Outlook occasionnellement déconnecté par @jiannx
  - Le corps ne se réduit pas lorsque le texte est sélectionné. Correction de l'échec du téléchargement de la pièce jointe par @jiannx
  - Correction du problème des emails dans la même boîte aux lettres entre plusieurs utilisateurs et optimisation des performances par @jiannx
  - Ajout de filtres à la gestion par @jiannx
  - Affichage du bouton répondre à tous et la portée des données prend en charge le filtrage des messages enfants. par @jiannx
  - Correction du problème où la popup de configuration des emails était obscurcie par @zhangzhonghe
- **[WeCom]** Correction d'un problème où les utilisateurs ne pouvaient pas être automatiquement enregistrés lorsque le mobile était manquant par @2013xile
- **[Gestionnaire de migration]** Correction d'un gel potentiel du processus causé par la journalisation d'instructions SQL excessivement volumineuses incluses dans les exceptions d'erreur de migration par @cgyrock

### [v2.1.0-alpha.1](https://www.nocobase.com/en/blog/v2.1.0-alpha.1)

*Date de sortie : 2026-02-14*

### 🎉 Nouvelles fonctionnalités

- **[Action : Modification groupée]** Modification groupée 2.0 ([#8526](https://github.com/nocobase/nocobase/pull/8526)) par @jiannx

### 🚀 Améliorations

- **[client]**

  - Amélioration de l'interface utilisateur d'affectation des champs date/heure pour prendre en charge la sélection de dates/heures relatives. ([#8630](https://github.com/nocobase/nocobase/pull/8630)) par @gchust
  - Prise en charge de la spécification du champ de titre pour les champs d'association lors de l'affectation d'un champ. ([#8624](https://github.com/nocobase/nocobase/pull/8624)) par @gchust
  - Le tableau 2.0 prend en charge le tri par glisser-déposer ([#8540](https://github.com/nocobase/nocobase/pull/8540)) par @jiannx
  - Déplacement des paramètres d'affectation de champ et de valeur par défaut vers la configuration au niveau du formulaire. ([#8596](https://github.com/nocobase/nocobase/pull/8596)) par @chenos
- **[Localisation]** Création automatique des clés i18n manquantes ([#8588](https://github.com/nocobase/nocobase/pull/8588)) par @jiannx

### 🐛 Corrections de bugs

- **[moteur de flux]** Correction d'un problème où le sous-menu du champ de filtre ne pouvait pas être développé lorsqu'un mot-clé de recherche était présent. ([#8604](https://github.com/nocobase/nocobase/pull/8604)) par @gchust
- **[client]**

  - Correction d'un problème où l'affectation d'un seul enregistrement à un champ de relation plusieurs-à-plusieurs produisait des résultats incorrects. ([#8652](https://github.com/nocobase/nocobase/pull/8652)) par @gchust
  - Analyse de la date à l'aide du sélecteur de date et ajout de la validation de la force du mot de passe, etc. ([#8647](https://github.com/nocobase/nocobase/pull/8647)) par @jiannx
  - Correction du problème d'espacement causé par les actions liées masquées dans la colonne d'action du tableau ([#8646](https://github.com/nocobase/nocobase/pull/8646)) par @zhangzhonghe
  - Correction d'une erreur de syntaxe lors du rendu d'un Liquid invalide par un élément markdown ([#8637](https://github.com/nocobase/nocobase/pull/8637)) par @katherinehhh
  - Correction des requêtes d'analyse inutiles du backend pour les propriétés de champ plusieurs-à-plusieurs dans le bloc de formulaire. ([#8636](https://github.com/nocobase/nocobase/pull/8636)) par @gchust
  - Correction du problème où `Action.Modal` ne pouvait pas être fermé après une certaine interaction ([#8642](https://github.com/nocobase/nocobase/pull/8642)) par @mytharcher
  - Correction du format de nombre manquant pour les champs de formule numérique et des paramètres de format de date pour les champs de formule de date ([#8625](https://github.com/nocobase/nocobase/pull/8625)) par @katherinehhh
  - Correction du rendu incomplet de la bordure supérieure sur le premier élément du formulaire ([#8623](https://github.com/nocobase/nocobase/pull/8623)) par @katherinehhh
  - Correction d'un problème où le champ de pièce jointe d'association effacé n'était pas enregistré après la soumission dans le formulaire d'édition ([#8616](https://github.com/nocobase/nocobase/pull/8616)) par @katherinehhh
  - Correction des données filtrées incorrectes dans la liste déroulante d'association lorsque le champ de titre est une clé étrangère ([#8619](https://github.com/nocobase/nocobase/pull/8619)) par @katherinehhh
  - Correction de l'impossibilité de restaurer les données sélectionnées dans le composant de champ de sélection d'enregistrement après édition ([#8610](https://github.com/nocobase/nocobase/pull/8610)) par @katherinehhh
  - Correction des options du composant de champ non actualisées en temps réel lorsque le champ d'association change de modèle ([#8611](https://github.com/nocobase/nocobase/pull/8611)) par @katherinehhh
- **[utils]** Correction d'un problème de sécurité du moteur d'évaluation `formula.js` ([#8416](https://github.com/nocobase/nocobase/pull/8416)) par @mytharcher
- **[Employés IA]**

  - Correction d'un problème où les liens de citation des recherches web IA n'étaient pas affichés dans la boîte de discussion ([#8651](https://github.com/nocobase/nocobase/pull/8651)) par @cgyrock
  - Correction d'une erreur de paramètres de l'API openai ([#8633](https://github.com/nocobase/nocobase/pull/8633)) par @cgyrock
- **[Gestionnaire de fichiers]** Correction d'un problème où le composant de champ de fichier pouvait encore ouvrir la boîte de dialogue du sélecteur lorsqu'il était désactivé ([#8617](https://github.com/nocobase/nocobase/pull/8617)) par @katherinehhh
