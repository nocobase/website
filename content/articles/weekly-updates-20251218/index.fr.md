---
title: "Mises à jour hebdomadaires de NocoBase : Optimisations et corrections de bugs"
description: "La mise à jour de cette semaine inclut : lors de la création d'une collection, le type de champ d'ID prédéfini peut être modifié, et plus encore."
---

Résumez les journaux de mise à jour hebdomadaires du produit. Les dernières versions sont disponibles sur [notre blog](https://www.nocobase.com/en/blog/timeline).

**NocoBase est actuellement mis à jour avec trois branches : `main`, `next` et `develop`.**

![version.png](https://static-docs.nocobase.com/ba5f04e27e99c625cb3822da5df07860.png)

* `main` : La version la plus stable à ce jour, recommandée pour l'installation ;
* `next` : Version bêta, contient les nouvelles fonctionnalités à venir et a été testée préliminairement. Il peut y avoir des problèmes connus ou inconnus. Elle est principalement destinée aux utilisateurs testeurs pour recueillir des retours et optimiser davantage les fonctions. Idéale pour les utilisateurs testeurs qui souhaitent découvrir les nouvelles fonctionnalités en avant-première et donner leur avis ;
* `develop` : Version alpha, contient le code de fonctionnalité le plus récent, peut être incomplète ou instable, principalement destinée au développement interne et à l'itération rapide. Adaptée aux utilisateurs techniques intéressés par les fonctionnalités de pointe du produit, mais avec des problèmes potentiels et des fonctions incomplètes. Ne pas utiliser en production.

## main

![main.png](https://static-docs.nocobase.com/47a3c71734c1d0f908b51f9ebd53c0ac.png)

### [v1.9.27](https://www.nocobase.com/en/blog/v1.9.27)

*Date de sortie : 2025-12-17*

### 🚀 Améliorations

- **[serveur]** Ajout d'une tolérance aux pannes lorsque des instances d'application manquantes provoquent des erreurs lors de la récupération des messages de maintenance de l'application ([#8196](https://github.com/nocobase/nocobase/pull/8196)) par @2013xile
- **[Gestionnaire d'erreurs]** Ne pas exposer les messages d'erreur bruts de la base de données en cas d'erreurs de syntaxe SQL, afin d'éviter de révéler le type de base de données ([#8195](https://github.com/nocobase/nocobase/pull/8195)) par @2013xile
- **[Workflow]** Prise en charge de l'utilisation de la configuration existante pour en créer une nouvelle dans un workflow dupliqué ([#8165](https://github.com/nocobase/nocobase/pull/8165)) par @mytharcher

### 🐛 Corrections de bugs

- **[Workflow]** Correction du problème où un seul enregistrement s'affichait dans la liste des enregistrements à exécuter manuellement ([#8187](https://github.com/nocobase/nocobase/pull/8187)) par @mytharcher
- **[Collection : Connexion à des données externes (FDW)]** Correction des erreurs de déclenchement lors de la connexion à des tables avec des noms en majuscules par @2013xile
- **[Workflow : Approbation]** Correction du problème où le statut des enregistrements d'approbation non liés était incorrectement modifié en `UNPROCESSED` par l'action d'approbation par @mytharcher

### [v1.9.26](https://www.nocobase.com/en/blog/v1.9.26)

*Date de sortie : 2025-12-16*

### 🚀 Améliorations

- **[acl]** Prise en charge de l'API `acl.registerSnippet` pour fusionner la configuration des snippets ([#8155](https://github.com/nocobase/nocobase/pull/8155)) par @mytharcher
- **[Contrôle d'accès]** Interdire l'attribution du rôle root aux utilisateurs ([#8180](https://github.com/nocobase/nocobase/pull/8180)) par @2013xile

### 🐛 Corrections de bugs

- **[Paramètres de licence]**

  - Correction de l'exception de construction ts du plugin-license ([#8183](https://github.com/nocobase/nocobase/pull/8183)) par @jiannx
  - Optimisation de la licence et ajout d'informations d'invite ([#7993](https://github.com/nocobase/nocobase/pull/7993)) par @jiannx
- **[Gestionnaire de fichiers]** Correction du problème où l'aperçu d'un fichier `.txt` sur OSS obtenait un jeu de caractères incorrect ([#8161](https://github.com/nocobase/nocobase/pull/8161)) par @mytharcher
- **[Action : Importer des enregistrements]** Attendre de manière synchrone la fin des événements `afterCreate` déclenchés par l'importation. ([#8158](https://github.com/nocobase/nocobase/pull/8158)) par @2013xile
- **[Collection : Connexion à des données externes (FDW)]** Correction du problème où le chargement échouait pour les tables avec des noms en majuscules par @2013xile
- **[Source de données : SQL Server externe]** Correction des problèmes où les options `encrypt` et `trustServerCertificate` n'étaient pas disponibles par @2013xile

### [v1.9.25](https://www.nocobase.com/en/blog/v1.9.25)

*Date de sortie : 2025-12-12*

### 🚀 Améliorations

- **[Workflow]**
  - Ajout d'une logique de tolérance aux pannes pour les données manquantes dans la préparation du processeur, afin d'éviter le blocage de l'exécution ([#8156](https://github.com/nocobase/nocobase/pull/8156)) par @mytharcher
  - Utilisation du chargement différé pour les données d'association sur le canevas du workflow afin d'améliorer les performances ([#8142](https://github.com/nocobase/nocobase/pull/8142)) par @mytharcher

### 🐛 Corrections de bugs

- **[acl]** Correction du problème où l'API `acl.can` retournait `null` lorsque le rôle était `root` ([#8150](https://github.com/nocobase/nocobase/pull/8150)) par @mytharcher
- **[Workflow : Nœud manuel]** Correction du problème où la liste des tâches manuelles utilisait une API incorrecte ([#8144](https://github.com/nocobase/nocobase/pull/8144)) par @mytharcher
- **[Chiffrement des requêtes HTTP]** Utilisation de crochets pour le format tableau dans l'analyse qs par @chenos
- **[Workflow : Approbation]** Correction du problème où une erreur était levée lors de l'annulation d'une exécution lorsque son workflow était supprimé par @mytharcher
- **[Gestionnaire de migration]** Correction d'un problème où les sauts de ligne dans les données étaient perdus lors de la migration. par @cgyrock

## develop

![develop.png](https://static-docs.nocobase.com/7fcdd9456a17286d8a439eee52bcb8d2.png)

### [v2.0.0-alpha.55](https://www.nocobase.com/en/blog/v2.0.0-alpha.55)

*Date de sortie : 2025-12-17*

### 🚀 Améliorations

- **[serveur]** Ajout d'une tolérance aux pannes lorsque des instances d'application manquantes provoquent des erreurs lors de la récupération des messages de maintenance de l'application ([#8196](https://github.com/nocobase/nocobase/pull/8196)) par @2013xile
- **[Bloc : Liste]** Ajout d'un bouton Lien pour les blocs Tableau, Liste et Carte Grille ([#8194](https://github.com/nocobase/nocobase/pull/8194)) par @katherinehhh

### 🐛 Corrections de bugs

- **[client]** Correction d'un problème où la sélection de « Non » pour un filtre de case à cocher appliquait toujours le filtre « Oui ». ([#8170](https://github.com/nocobase/nocobase/pull/8170)) par @gchust
- **[Gestionnaire de migration]** Correction de la description de migration manquante et définition de l'heure actuelle comme valeur par défaut par @cgyrock

### [v2.0.0-alpha.54](https://www.nocobase.com/en/blog/v2.0.0-alpha.54)

*Date de sortie : 2025-12-17*

### 🎉 Nouvelles fonctionnalités

- **[client]** Lors de la création d'une collection, le type de champ id prédéfini peut être modifié ([#8129](https://github.com/nocobase/nocobase/pull/8129)) par @cgyrock

### 🚀 Améliorations

- **[client]**

  - Modification de la largeur des colonnes du tableau pour utiliser des options sélectionnables ([#8188](https://github.com/nocobase/nocobase/pull/8188)) par @katherinehhh
  - Amélioration des styles de recordPicker avec maxTagCount ([#8175](https://github.com/nocobase/nocobase/pull/8175)) par @katherinehhh
  - Optimisation des options de configuration (Blocs, Champs, Actions) ([#8141](https://github.com/nocobase/nocobase/pull/8141)) par @katherinehhh
- **[Gestionnaire d'erreurs]** Ne pas exposer les messages d'erreur bruts de la base de données en cas d'erreurs de syntaxe SQL, afin d'éviter de révéler le type de base de données ([#8195](https://github.com/nocobase/nocobase/pull/8195)) par @2013xile
- **[Bloc : Carte]** Prise en charge des points de suspension pour le débordement de texte pour le champ de carte en mode d'affichage texte ([#8189](https://github.com/nocobase/nocobase/pull/8189)) par @katherinehhh
- **[Workflow]** Prise en charge de l'utilisation de la configuration existante pour en créer une nouvelle dans un workflow dupliqué ([#8165](https://github.com/nocobase/nocobase/pull/8165)) par @mytharcher
- **[Contrôle d'accès]** Interdire l'attribution du rôle root aux utilisateurs ([#8180](https://github.com/nocobase/nocobase/pull/8180)) par @2013xile

### 🐛 Corrections de bugs

- **[client]**

  - Correction du bouton de soumission non affiché dans le formulaire de création lorsque le rôle a l'autorisation de création ([#8190](https://github.com/nocobase/nocobase/pull/8190)) par @katherinehhh
  - Empêcher les données existantes de sous-tableau/sous-formulaire d'être effacées lors de la soumission sans sélectionner d'éléments ([#8172](https://github.com/nocobase/nocobase/pull/8172)) par @katherinehhh
  - Empêcher le paramètre de portée des données d'apparaître dans la configuration du formulaire de création ([#8176](https://github.com/nocobase/nocobase/pull/8176)) par @katherinehhh
  - Échec de l'enregistrement du flux d'événements d'onglet ([#8168](https://github.com/nocobase/nocobase/pull/8168)) par @chenos
  - Suppression de l'espacement supplémentaire après le masquage d'un onglet ([#8167](https://github.com/nocobase/nocobase/pull/8167)) par @chenos
  - Correction du filtrage incorrect des options sélectionnées dans la sélection d'enregistrements d'association ([#8151](https://github.com/nocobase/nocobase/pull/8151)) par @katherinehhh
  - Correction du problème de rendu du champ tableoid dans le bloc de formulaire ([#8177](https://github.com/nocobase/nocobase/pull/8177)) par @katherinehhh
- **[serveur]**

  - Mise à jour de license-kit vers la dernière version ([#8173](https://github.com/nocobase/nocobase/pull/8173)) par @jiannx
  - Prise en charge des champs Snowflake ID (53 bits) pour les sources de données externes ([#8185](https://github.com/nocobase/nocobase/pull/8185)) par @2013xile
- **[Bloc : Carte]** Correction du niveau de zoom incorrect de la carte après le changement de menu ([#8193](https://github.com/nocobase/nocobase/pull/8193)) par @katherinehhh
- **[Workflow]** Correction du problème où un seul enregistrement s'affichait dans la liste des enregistrements à exécuter manuellement ([#8187](https://github.com/nocobase/nocobase/pull/8187)) par @mytharcher
- **[Visualisation des données]** Résolution du problème concernant le mode SQL de sélection de source de données externe ; <br/>Résolution du problème concernant l'état de chargement du bloc de graphique lors de la récupération des données ; <br/> Résolution du problème concernant l'annulation de la configuration du bloc de graphique vide ; ([#8169](https://github.com/nocobase/nocobase/pull/8169)) par @heziqiang
- **[Employés IA]** Résolution du problème concernant le saut de ligne des messages IA ([#8096](https://github.com/nocobase/nocobase/pull/8096)) par @heziqiang
- **[Paramètres de licence]**

  - Correction de l'exception de construction ts du plugin-license ([#8183](https://github.com/nocobase/nocobase/pull/8183)) par @jiannx
  - Optimisation de la licence et ajout d'informations d'invite ([#7993](https://github.com/nocobase/nocobase/pull/7993)) par @jiannx
- **[Gestionnaire de fichiers]** Correction du problème où l'aperçu d'un fichier `.txt` sur OSS obtenait un jeu de caractères incorrect ([#8161](https://github.com/nocobase/nocobase/pull/8161)) par @mytharcher
- **[Source de données : SQL Server externe]** Correction des problèmes où les options `encrypt` et `trustServerCertificate` n'étaient pas disponibles par @2013xile
- **[Collection : Connexion à des données externes (FDW)]** Correction du problème où le chargement échouait pour les tables avec des noms en majuscules par @2013xile
- **[Workflow : Approbation]** Correction du problème où le statut des enregistrements d'approbation non liés était incorrectement modifié en `UNPROCESSED` par l'action d'approbation par @mytharcher

### [v2.0.0-alpha.53](https://www.nocobase.com/en/blog/v2.0.0-alpha.53)

*Date de sortie : 2025-12-12*

### 🚀 Améliorations

- **[acl]** Prise en charge de l'API `acl.registerSnippet` pour fusionner la configuration des snippets ([#8155](https://github.com/nocobase/nocobase/pull/8155)) par @mytharcher
- **[client]** Prise en charge du formatage des nombres pour les champs de pourcentage ([#8123](https://github.com/nocobase/nocobase/pull/8123)) par @katherinehhh
- **[moteur de flux]** Prise en charge du masquage dynamique du menu de configuration des étapes ([#7924](https://github.com/nocobase/nocobase/pull/7924)) par @gchust
- **[Bloc : CarteGrille]** Optimisation des styles du bloc Carte Grille pour une mise en page plus compacte ([#8152](https://github.com/nocobase/nocobase/pull/8152)) par @katherinehhh
- **[Employés IA]** Fonctionnalité d'édition activée pour les invites système de l'assistant IA intégré.<br/>Invite système optimisée pour l'assistant IA Nathan.<br/>Correction d'un problème avec le serveur ne parvenant pas à lire les fichiers statiques. ([#8097](https://github.com/nocobase/nocobase/pull/8097)) par @heziqiang
- **[Workflow]**

  - Ajout d'une logique de tolérance aux pannes pour les données manquantes dans la préparation du processeur, afin d'éviter le blocage de l'exécution ([#8156](https://github.com/nocobase/nocobase/pull/8156)) par @mytharcher
  - Utilisation du chargement différé pour les données d'association sur le canevas du workflow afin d'améliorer les performances ([#8142](https://github.com/nocobase/nocobase/pull/8142)) par @mytharcher
- **[Champ de collection : Markdown(Vditor)]** Désactivation de l'analyse des variables dans le champ Markdown par défaut en mode readPretty ([#8145](https://github.com/nocobase/nocobase/pull/8145)) par @katherinehhh

### 🐛 Corrections de bugs

- **[moteur de flux]** Correction du téléchargement incorrect des fichiers pour les pièces jointes ([#8154](https://github.com/nocobase/nocobase/pull/8154)) par @katherinehhh
- **[client]**

  - Correction du menu déroulant du champ d'association désactivé lorsqu'un champ d'options existe ([#8153](https://github.com/nocobase/nocobase/pull/8153)) par @katherinehhh
  - Correction d'un problème où la saisie de texte chinois effaçait les options existantes lors de l'utilisation d'opérateurs multi-sélection sur un champ de sélection unique dans le bloc de formulaire de filtre. ([#8140](https://github.com/nocobase/nocobase/pull/8140)) par @gchust
  - Correction d'un problème où le changement de champs d'étiquette entraînait la perte des configurations de popup. ([#8136](https://github.com/nocobase/nocobase/pull/8136)) par @gchust
- **[acl]** Correction du problème où l'API `acl.can` retournait `null` lorsque le rôle était `root` ([#8150](https://github.com/nocobase/nocobase/pull/8150)) par @mytharcher
- **[base de données]** `filterByTk` prend désormais en charge les tableaux lors de l'interrogation de collections avec plusieurs clés cibles de filtre ([#7986](https://github.com/nocobase/nocobase/pull/7986)) par @chenos
- **[Action : Importer des enregistrements]** Attendre de manière synchrone la fin des événements `afterCreate` déclenchés par l'importation. ([#8158](https://github.com/nocobase/nocobase/pull/8158)) par @2013xile
- **[Champ de collection : Séquence]** Amélioration de la robustesse du plugin-field-sequence lors du traitement de la commande de réparation ([#8139](https://github.com/nocobase/nocobase/pull/8139)) par @cgyrock
- **[Workflow : Nœud manuel]** Correction du problème où la liste des tâches manuelles utilisait une API incorrecte ([#8144](https://github.com/nocobase/nocobase/pull/8144)) par @mytharcher
- **[Chiffrement des requêtes HTTP]** Utilisation de crochets pour le format tableau dans l'analyse qs par @chenos
- **[Workflow : Approbation]** Correction du problème où une erreur était levée lors de l'annulation d'une exécution lorsque son workflow était supprimé par @mytharcher
- **[Gestionnaire de migration]** Correction d'un problème où les sauts de ligne dans les données étaient perdus lors de la migration. par @cgyrock
