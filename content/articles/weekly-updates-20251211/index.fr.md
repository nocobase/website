---
title: "Mises à jour hebdomadaires de NocoBase : Optimisations et corrections de bugs"
description: "Les mises à jour de cette semaine incluent : Prise en charge de la personnalisation des styles globaux dans l'éditeur de thème et prise en charge de la définition de la règle de tri par défaut dans le bloc de détails, et plus encore."
---

Résumez les journaux de mise à jour hebdomadaires du produit. Les dernières versions sont disponibles sur [notre blog](https://www.nocobase.com/en/blog/timeline).

**NocoBase est actuellement mis à jour avec trois branches : `main`, `next` et `develop`.**

![version.png](https://static-docs.nocobase.com/ba5f04e27e99c625cb3822da5df07860.png)

* `main` : La version la plus stable à ce jour, recommandée pour l'installation ;
* `next` : Version bêta, contient les nouvelles fonctionnalités à venir et a été testée préliminairement. Il peut y avoir des problèmes connus ou inconnus. Elle est principalement destinée aux utilisateurs testeurs pour recueillir des commentaires et optimiser davantage les fonctions. Idéale pour les utilisateurs testeurs qui souhaitent découvrir les nouvelles fonctionnalités en avant-première et donner leur avis ;
* `develop` : Version alpha, contient le code de fonctionnalité le plus récent, peut être incomplète ou instable, principalement destinée au développement interne et à l'itération rapide. Adaptée aux utilisateurs techniques intéressés par les fonctionnalités de pointe du produit, mais avec des problèmes potentiels et des fonctions incomplètes. Ne pas utiliser en production.

## main

![main.png](https://static-docs.nocobase.com/47a3c71734c1d0f908b51f9ebd53c0ac.png)

### [v1.9.24](https://www.nocobase.com/en/blog/v1.9.24)

*Date de sortie : 2025-12-09*

### 🐛 Corrections de bugs

- **[client]** Correction du problème où le composant `RemoteSelect` chargeait incorrectement un enregistrement lorsque la valeur est nulle ([#8137](https://github.com/nocobase/nocobase/pull/8137)) par @mytharcher
- **[Champ de collection : Séquence]** Amélioration de la robustesse du plugin-field-sequence lors du traitement de la commande de réparation ([#8139](https://github.com/nocobase/nocobase/pull/8139)) par @cgyrock
- **[Notification : Email]** Correction de la limitation de connexion des notifications par e-mail ([#8119](https://github.com/nocobase/nocobase/pull/8119)) par @jiannx

### [v1.9.23](https://www.nocobase.com/en/blog/v1.9.23)

*Date de sortie : 2025-12-09*

### 🚀 Améliorations

- **[auth]** Correction de [CVE-2025-13877](https://www.cve.org/CVERecord?id=CVE-2025-13877) ([#8128](https://github.com/nocobase/nocobase/pull/8128)) par @2013xile
- **[Action : Importer des enregistrements]** Autoriser la sélection de l'ID pour les champs d'importation ([#8132](https://github.com/nocobase/nocobase/pull/8132)) par @katherinehhh

### 🐛 Corrections de bugs

- **[serveur]** Correction d'un problème où les workflows déclenchés n'étaient pas ajoutés à la file d'attente de traitement après l'importation de données, garantissant que les workflows s'exécutent comme prévu immédiatement après l'importation ([#8121](https://github.com/nocobase/nocobase/pull/8121)) par @mytharcher

### [v1.9.21](https://www.nocobase.com/en/blog/v1.9.21)

*Date de sortie : 2025-12-07*

### 🚀 Améliorations

- **[Journaux d'audit]** Mise à jour du champ d'identifiant unique en `text` pour éviter le débordement de la longueur de l'identifiant lors des modifications en masse par @2013xile

### 🐛 Corrections de bugs

- **[Workflow : Approbation]** Correction du problème où aucune donnée n'était chargée lors du chargement des approbations associées avec des variables de portée ACL par @mytharcher

### [v1.9.20](https://www.nocobase.com/en/blog/v1.9.20)

*Date de sortie : 2025-12-05*

### 🎉 Nouvelles fonctionnalités

- **[Champ de collection : Séquence]** Mise à jour automatique des champs de séquence après la migration des données ([#8063](https://github.com/nocobase/nocobase/pull/8063)) par @cgyrock

### 🚀 Améliorations

- **[Gestionnaire de migration]** Mise à jour automatique des champs de séquence après la migration des données par @cgyrock

### 🐛 Corrections de bugs

- **[Workflow]** Correction du problème où une erreur était levée dans le canevas d'exécution lorsqu'un nœud était supprimé ([#8090](https://github.com/nocobase/nocobase/pull/8090)) par @mytharcher
- **[Workflow : Approbation]** Correction du problème où une erreur était levée lors du chargement d'une approbation associée en mode rôle d'union uniquement par @mytharcher

## next

![next.png](https://static-docs.nocobase.com/8ed17a0f08cc585018f6de6c8b13947d.png)

### [v1.9.0-beta.18](https://www.nocobase.com/en/blog/v1.9.0-beta.18)

*Date de sortie : 2025-12-09*

### 🎉 Nouvelles fonctionnalités

- **[Champ de collection : Séquence]** Mise à jour automatique des champs de séquence après la migration des données ([#8063](https://github.com/nocobase/nocobase/pull/8063)) par @cgyrock
- **[Source de données : API REST]** Ajout d'options de `transformateur de message d'erreur` dans la configuration de la source de données API RESTful par @cgyrock
- **[Auth : OIDC]** Prise en charge de la redirection automatique vers l'URL SSO lorsque l'utilisateur n'est pas authentifié par @heziqiang

### 🚀 Améliorations

- **[auth]** Correction de [CVE-2025-13877](https://www.cve.org/CVERecord?id=CVE-2025-13877) ([#8128](https://github.com/nocobase/nocobase/pull/8128)) par @2013xile
- **[client]**

  - Afficher les options réduites au survol dans le composant Select ([#8029](https://github.com/nocobase/nocobase/pull/8029)) par @katherinehhh
  - Optimiser les messages de validation pour la sous-table ([#8001](https://github.com/nocobase/nocobase/pull/8001)) par @katherinehhh
  - Ajouter un état de chargement pour les boutons d'action de mise à jour et de suppression d'enregistrement, éviter les requêtes en double ([#7964](https://github.com/nocobase/nocobase/pull/7964)) par @mytharcher
  - Utiliser des triples accolades (`{{{` et `}}}`) pour les variables dans le contenu du message, afin d'éviter que les variables soient échappées par Handlebars ([#7972](https://github.com/nocobase/nocobase/pull/7972)) par @mytharcher
- **[Action : Importer des enregistrements]** Autoriser la sélection de l'ID pour les champs d'importation ([#8132](https://github.com/nocobase/nocobase/pull/8132)) par @katherinehhh
- **[Workflow]** Ajout d'un contexte de source de données "principale" pour UserSelect, afin de fournir un composant plus courant pouvant être utilisé ailleurs ([#8010](https://github.com/nocobase/nocobase/pull/8010)) par @mytharcher
- **[Champ de collection : Markdown(Vditor)]** Ajustement de la largeur du contenu en plein écran de vditor ([#7974](https://github.com/nocobase/nocobase/pull/7974)) par @katherinehhh
- **[Gestionnaire de tâches asynchrones]** Messages d'erreur améliorés pour les tâches asynchrones afin de fournir aux utilisateurs des raisons spécifiques des échecs de tâches ([#7796](https://github.com/nocobase/nocobase/pull/7796)) par @mytharcher
- **[Action : Importer des enregistrements Pro]** Messages d'erreur améliorés pour les tâches asynchrones afin de fournir aux utilisateurs des raisons spécifiques des échecs de tâches par @mytharcher
- **[Workflow : Approbation]**

  - Correction de la sélection de variable dans AssigneeSelect, limitation à la sélection de la PK ou de la FK de la collection d'utilisateurs par @mytharcher
  - Utilisation d'un composant commun pour réduire le code dupliqué par @mytharcher
  - Rendre la charge utile de l'exécution manuelle (ou déclenchée par un nœud de sous-flux) compatible avec l'enregistrement ou la clé primaire. Éviter les problèmes de cohérence dans le contexte du déclencheur. par @mytharcher
  - Réduction des associations à charger dans la fenêtre contextuelle d'approbation, pour de meilleures performances par @mytharcher
- **[Journaux d'audit]** Mise à jour du champ d'identifiant unique en `text` pour éviter le débordement de la longueur de l'identifiant lors des modifications en masse par @2013xile
- **[Gestionnaire de migration]** Mise à jour automatique des champs de séquence après la migration des données par @cgyrock

### 🐛 Corrections de bugs

- **[serveur]** Correction d'un problème où les workflows déclenchés n'étaient pas ajoutés à la file d'attente de traitement après l'importation de données, garantissant que les workflows s'exécutent comme prévu immédiatement après l'importation ([#8121](https://github.com/nocobase/nocobase/pull/8121)) par @mytharcher
- **[acl]** Correction d'un problème où les métadonnées ACL sont incorrectes lorsque les portées d'autorisation de source de données externe utilisent des variables liées à l'utilisateur actuel ([#8013](https://github.com/nocobase/nocobase/pull/8013)) par @2013xile
- **[client]**

  - Correction d'un bug de chargement différé dans Variable.Input, qui provoquait un rendu incorrect du menu des options de variable ([#8009](https://github.com/nocobase/nocobase/pull/8009)) par @mytharcher
  - Résolution d'une erreur lors de l'ajout d'enregistrements enfants dans un bloc de tableau arborescent d'association ([#7989](https://github.com/nocobase/nocobase/pull/7989)) par @katherinehhh
  - Correction du problème de scintillement de la zone de liste déroulante de sélection de la règle de liaison ([#8018](https://github.com/nocobase/nocobase/pull/8018)) par @zhangzhonghe
  - Éviter une erreur lors de l'ouverture des paramètres de valeur par défaut ([#7997](https://github.com/nocobase/nocobase/pull/7997)) par @mytharcher
  - Correction des problèmes de routage lors de l'utilisation d'une Iframe ([#7957](https://github.com/nocobase/nocobase/pull/7957)) par @zhangzhonghe
  - Correction du problème où le remote select n'affichait pas le bon libellé pour une valeur non-objet ([#7975](https://github.com/nocobase/nocobase/pull/7975)) par @katherinehhh
- **[base de données]** Correction : suppression du traitement UTC dans la conversion de l'heure pour les champs de type heure uniquement afin d'éviter les décalages induits par le fuseau horaire. ([#7812](https://github.com/nocobase/nocobase/pull/7812)) par @ChimingLiu
- **[Action : Importer des enregistrements]**

  - Les champs importés ne correspondent pas aux champs définis dans les paramètres ACL ([#8075](https://github.com/nocobase/nocobase/pull/8075)) par @2013xile
  - Correction du problème où une erreur était levée lorsqu'un champ dans le xlsx importé avait une valeur `null` ([#8037](https://github.com/nocobase/nocobase/pull/8037)) par @mytharcher
  - Correction du problème lors de l'importation de données dans un tableau arborescent ([#7976](https://github.com/nocobase/nocobase/pull/7976)) par @cgyrock
- **[Workflow]**

  - Correction du problème où la page d'exécution levait une erreur lorsque les jobs sur un nœud sont indéfinis ([#8066](https://github.com/nocobase/nocobase/pull/8066)) par @mytharcher
  - Correction du problème où une erreur était levée dans le canevas d'exécution lorsqu'un nœud était supprimé ([#8090](https://github.com/nocobase/nocobase/pull/8090)) par @mytharcher
  - Correction du problème où la file d'attente était fermée avant la publication des messages ([#8003](https://github.com/nocobase/nocobase/pull/8003)) par @mytharcher
  - Correction du problème où les exécutions préparées n'étaient pas envoyées à la file d'attente avant l'arrêt ([#7981](https://github.com/nocobase/nocobase/pull/7981)) par @mytharcher
  - Correction du problème où certains menus de tâches de workflow ne s'affichaient pas ([#7980](https://github.com/nocobase/nocobase/pull/7980)) par @mytharcher
  - Correction du problème où le lien de la tâche menait à une page d'erreur ([#7983](https://github.com/nocobase/nocobase/pull/7983)) par @mytharcher
  - Correction du problème où le nombre de tâches ne s'affichait pas en raison d'une mauvaise utilisation du fournisseur ([#7968](https://github.com/nocobase/nocobase/pull/7968)) par @mytharcher
- **[Gestionnaire multi-applications]** Les paramètres de niveau de journal ne sont pas appliqués aux sous-applications ([#8045](https://github.com/nocobase/nocobase/pull/8045)) par @2013xile
- **[Contrôle d'accès]** Ajout d'un middleware pour les vérifications d'autorisation sur les opérations d'association pour la source de données externe ([#8062](https://github.com/nocobase/nocobase/pull/8062)) par @2013xile
- **[Champ de collection : Plusieurs à plusieurs (tableau)]** Correction du problème où le champ de tableau m2m dans la sous-table ne pouvait pas être mis à jour ([#7998](https://github.com/nocobase/nocobase/pull/7998)) par @cgyrock
- **[Éditeur de thème]** Activation du sélecteur de thème sur les appareils mobiles ([#8046](https://github.com/nocobase/nocobase/pull/8046)) par @zhangzhonghe
- **[Visualisation des données]**

  - Les paramètres des champs de filtre pour les collections de sources de données externes n'affichent pas les propriétés spécifiques ([#7982](https://github.com/nocobase/nocobase/pull/7982)) par @2013xile
  - Résolution du problème où la requête de graphique ne prenait pas en charge la portée des données ACL ([#7915](https://github.com/nocobase/nocobase/pull/7915)) par @2013xile
- **[Collection : Arbre]** Correction des échecs de mise à jour de la table de chemin causés par une recherche incorrecte du champ parent de l'arbre ([#8000](https://github.com/nocobase/nocobase/pull/8000)) par @2013xile
- **[Workflow : Nœud manuel]** Correction du problème où le nombre de tâches manuelles n'était pas correct ([#7984](https://github.com/nocobase/nocobase/pull/7984)) par @mytharcher
- **[Gestionnaire de tâches asynchrones]** Ajout d'une règle de migration pour la collection `asyncTasks`, éviter la migration des enregistrements de tâches asynchrones ([#7950](https://github.com/nocobase/nocobase/pull/7950)) par @mytharcher
- **[Gestionnaire de source de données]** Correction d'un échec de mise à jour du mot de passe de la source de données lorsque le mot de passe de la base de données est modifié ([#7977](https://github.com/nocobase/nocobase/pull/7977)) par @cgyrock
- **[Départements]** Correction du problème où les champs associés au département ne pouvaient pas être modifiés ([#7462](https://github.com/nocobase/nocobase/pull/7462)) par @heziqiang
- **[Workflow : Sous-flux]** Correction du problème où le workflow sélectionné affichait "N/A" lorsque le nombre de workflows était supérieur à 200 par @mytharcher
- **[Workflow : Approbation]**

  - Correction du fichier de langue par @mytharcher
  - Correction du problème où les enregistrements d'approbation ne sont pas inclus dans le résultat du job dans la branche de retour par @mytharcher
  - Correction du problème où aucune donnée n'était chargée lors du chargement des approbations associées avec des variables de portée ACL par @mytharcher
  - Correction du problème d'autorisation lors de l'obtention de `approvalRecords.reassignee` en raison du changement de `RemoteSelect` par @mytharcher
  - Correction du problème où l'action d'impression ne fonctionnait pas lors du rafraîchissement de la page avec une fenêtre modale ouverte par @mytharcher
  - Ajout d'une migration pour éviter une erreur d'enregistrement en double lors de l'ajout d'un index par @mytharcher
  - Correction du problème où le processus était incorrect lors du branchement avec ordre et contreseing par @mytharcher
  - Correction du problème où le commentaire dans le résultat du job était nul après que l'utilisateur ait soumis une approbation avec un commentaire par @mytharcher
  - Correction de l'absence de données de demandeur dans le contexte d'exécution après que l'utilisateur a soumis à nouveau par @mytharcher
  - Correction du problème d'erreur d'autorisation levée lors du chargement des approbations associées à un enregistrement sur le tiroir de détails par @mytharcher
  - Correction du problème où la fenêtre contextuelle de l'approbateur n'affichait pas de titre par @zhangzhonghe
  - Correction du problème où une erreur était levée lors du chargement d'une approbation associée en mode rôle d'union uniquement par @mytharcher
  - Correction du problème de OOM lors de la liste des approbations par @mytharcher

## develop

![develop.png](https://static-docs.nocobase.com/7fcdd9456a17286d8a439eee52bcb8d2.png)

### [v2.0.0-alpha.52](https://www.nocobase.com/en/blog/v2.0.0-alpha.52)

*Date de sortie : 2025-12-07*

### 🎉 Nouvelles fonctionnalités

- **[client]** Ajout de la prise en charge des paramètres d'ajout/sélection/dissociation dans le sous-formulaire plusieurs-à-plusieurs ([#8099](https://github.com/nocobase/nocobase/pull/8099)) par @katherinehhh
- **[Source de données : API REST]** Ajout d'options de `transformateur de message d'erreur` dans la configuration de la source de données API RESTful par @cgyrock

### 🚀 Améliorations

- **[auth]** Correction de [CVE-2025-13877](https://www.cve.org/CVERecord?id=CVE-2025-13877) ([#8128](https://github.com/nocobase/nocobase/pull/8128)) par @2013xile
- **[Action : Importer des enregistrements]**

  - Autoriser la sélection de l'ID pour les champs d'importation ([#8133](https://github.com/nocobase/nocobase/pull/8133)) par @katherinehhh
  - Autoriser la sélection de l'ID pour les champs d'importation ([#8132](https://github.com/nocobase/nocobase/pull/8132)) par @katherinehhh
- **[Workflow : Approbation]** Modification de l'API pour obtenir un seul élément d'approbation et simplification du code par @mytharcher

### 🐛 Corrections de bugs

- **[client]**

  - Correction de l'empêchement de l'état désactivé de l'enfant de bloquer la sélection du champ de relation ([#8131](https://github.com/nocobase/nocobase/pull/8131)) par @katherinehhh
  - Correction du problème où le composant `RemoteSelect` chargeait incorrectement un enregistrement lorsque la valeur est nulle ([#8137](https://github.com/nocobase/nocobase/pull/8137)) par @mytharcher
  - Correction d'un problème où la largeur du composant d'interface utilisateur était incohérente lors de la sélection de "Passé" ou "Suivant" pour les champs de filtre de date. ([#8130](https://github.com/nocobase/nocobase/pull/8130)) par @gchust
  - Correction d'un problème où les libellés de champ par défaut dans le bloc de formulaire de filtre ne pouvaient pas être correctement traduits dans plusieurs langues. ([#8135](https://github.com/nocobase/nocobase/pull/8135)) par @gchust
  - Correction d'un problème où les styles de titre et de description du bloc JS étaient incohérents avec les autres blocs. ([#8115](https://github.com/nocobase/nocobase/pull/8115)) par @gchust
  - Correction du problème où la sous-table imbriquée dans le sous-formulaire n'affichait pas les données ([#8117](https://github.com/nocobase/nocobase/pull/8117)) par @katherinehhh
  - Correction du problème de saut de ligne dans l'infobulle du champ de texte long ([#8122](https://github.com/nocobase/nocobase/pull/8122)) par @katherinehhh
  - Correction d'un problème où les données sélectionnables pour les champs d'association dans le bloc de formulaire de filtre étaient incorrectes. ([#8109](https://github.com/nocobase/nocobase/pull/8109)) par @gchust
  - Correction d'un problème où les options sélectionnables n'étaient pas entièrement listées lors de l'utilisation des opérateurs "est l'un de" ou "n'est aucun de" pour le filtrage basé sur les champs d'option. ([#8118](https://github.com/nocobase/nocobase/pull/8118)) par @gchust
  - Correction d'un problème où les configurations de champs personnalisés dans le formulaire de filtre n'étaient pas correctement pré-remplies et certains paramètres ne prenaient pas effet. ([#8106](https://github.com/nocobase/nocobase/pull/8106)) par @gchust
  - Correction d'un problème où l'effacement des valeurs de filtre de temps entre et le déclenchement à nouveau du filtre provoquaient une erreur. ([#8110](https://github.com/nocobase/nocobase/pull/8110)) par @gchust
  - Correction d'un problème où la valeur du champ numérique n'était pas correctement pré-remplie dans l'action de filtre. ([#8104](https://github.com/nocobase/nocobase/pull/8104)) par @gchust
  - Correction d'un problème où certains opérateurs de champ dans les formulaires de filtre ne parvenaient pas à filtrer correctement les données. ([#8100](https://github.com/nocobase/nocobase/pull/8100)) par @gchust
  - Correction d'un problème où le filtrage sur les champs de case à cocher ne prenait pas effet. ([#8103](https://github.com/nocobase/nocobase/pull/8103)) par @gchust
- **[moteur de flux]**

  - Correction : conversion incorrecte lors de l'utilisation d'un type entier comme options d'énumération ([#8138](https://github.com/nocobase/nocobase/pull/8138)) par @chenos
  - Correction des éléments de menu de sous-modèle basculants qui échouaient lorsque `useModel` est omis en le déduisant de `createModelOptions.use` ([#8105](https://github.com/nocobase/nocobase/pull/8105)) par @zhangzhonghe
- **[serveur]** Correction d'un problème où les workflows déclenchés n'étaient pas ajoutés à la file d'attente de traitement après l'importation de données, garantissant que les workflows s'exécutent comme prévu immédiatement après l'importation ([#8121](https://github.com/nocobase/nocobase/pull/8121)) par @mytharcher
- **[Notification : Email]** Correction de la limitation de connexion des notifications par e-mail ([#8119](https://github.com/nocobase/nocobase/pull/8119)) par @jiannx
- **[Champ de collection : Formule]** Correction d'un problème où les champs de formule dans l'action de filtre et le bloc de formulaire de filtre ne permettaient pas de saisir des valeurs. ([#8102](https://github.com/nocobase/nocobase/pull/8102)) par @gchust
- **[Multi-espace]** Correction de la création d'autres champs dans la collection système par @jiannx

### [v2.0.0-alpha.51](https://www.nocobase.com/en/blog/v2.0.0-alpha.51)

*Date de sortie : 2025-12-07*

### 🎉 Nouvelles fonctionnalités

- **[client]**

  - Prise en charge de la personnalisation des styles globaux dans l'éditeur de thème ([#7960](https://github.com/nocobase/nocobase/pull/7960)) par @ljmiaoo
  - Prise en charge de la définition d'une règle de tri par défaut dans le bloc de détails ([#8070](https://github.com/nocobase/nocobase/pull/8070)) par @katherinehhh
  - Prise en charge de la définition du type de données pour le champ Nombre (options : double, float, decimal) ([#8058](https://github.com/nocobase/nocobase/pull/8058)) par @chenos
- **[Champ de collection : Séquence]** Mise à jour automatique des champs de séquence après la migration des données ([#8063](https://github.com/nocobase/nocobase/pull/8063)) par @cgyrock

### 🚀 Améliorations

- **[client]**

  - Correction du saut de pagination de la sous-table après la suppression d'une ligne et ajout de la prise en charge des règles de validation de colonne ([#8094](https://github.com/nocobase/nocobase/pull/8094)) par @katherinehhh
  - Ajustement de l'affichage des grands champs dans la sous-table modifiable ([#8078](https://github.com/nocobase/nocobase/pull/8078)) par @katherinehhh
  - Prise en charge des points de suspension pour le contenu des champs JSON débordant ([#8067](https://github.com/nocobase/nocobase/pull/8067)) par @katherinehhh
- **[moteur de flux]**

  - Ajout de l'option useCache à FlowModelRenderer ([#8072](https://github.com/nocobase/nocobase/pull/8072)) par @zhangzhonghe
  - Ajout de la méthode `removeModelWithSubModels` pour supprimer récursivement un modèle et ses sous-modèles ([#8064](https://github.com/nocobase/nocobase/pull/8064)) par @zhangzhonghe
- **[Bloc : GridCard]** Ajout de la configuration du nombre de lignes pour la carte en grille et remplacement de pageSize par un calcul automatique ([#8055](https://github.com/nocobase/nocobase/pull/8055)) par @katherinehhh
- **[Journaux d'audit]** Mise à jour du champ d'identifiant unique en `text` pour éviter le débordement de la longueur de l'identifiant lors des modifications en masse par @2013xile
- **[Gestionnaire de migration]** Mise à jour automatique des champs de séquence après la migration des données par @cgyrock

### 🐛 Corrections de bugs

- **[client]**

  - Correction d'un problème où les champs configurés d'un bloc supprimé n'étaient pas supprimés du bloc de filtre. ([#8098](https://github.com/nocobase/nocobase/pull/8098)) par @gchust
  - Correction d'un espace supplémentaire lorsque le bouton est masqué en mode non-configuration ([#8092](https://github.com/nocobase/nocobase/pull/8092)) par @katherinehhh
  - Correction d'un problème où le texte du bouton de réinitialisation dans le bloc de formulaire de filtre ne pouvait pas être modifié. ([#8089](https://github.com/nocobase/nocobase/pull/8089)) par @gchust
  - Correction d'un problème où la saisie du champ ne prenait pas en charge plusieurs valeurs lors de l'utilisation des opérateurs \$in / \$notIn pour le filtrage des champs. ([#8081](https://github.com/nocobase/nocobase/pull/8081)) par @gchust
  - Correction d'un problème où les blocs de données nouvellement ajoutés n'apparaissaient pas automatiquement dans le menu des champs du bloc de formulaire de filtre. ([#8085](https://github.com/nocobase/nocobase/pull/8085)) par @gchust
  - Le menu de configuration des champs d'association dans les formulaires de filtre ne doit pas afficher l'option de création rapide. ([#8083](https://github.com/nocobase/nocobase/pull/8083)) par @gchust
  - Correction du problème de données de sous-table d'association dans le bloc Liste ([#8082](https://github.com/nocobase/nocobase/pull/8082)) par @katherinehhh
  - Correction des règles de validation des champs numériques des paramètres de collection non appliquées ([#8025](https://github.com/nocobase/nocobase/pull/8025)) par @katherinehhh
  - Correction d'un problème où les champs dans les formulaires de filtre étaient restreints par les règles de validation backend pour les champs. ([#8074](https://github.com/nocobase/nocobase/pull/8074)) par @gchust
  - Problème d'édition rapide du champ json ([#8059](https://github.com/nocobase/nocobase/pull/8059)) par @katherinehhh
  - Correction du problème d'affichage des grands champs dans l'édition de sous-table ([#8069](https://github.com/nocobase/nocobase/pull/8069)) par @katherinehhh
  - Correction de l'erreur de création rapide lorsque allowMultiple est désactivé dans la sélection d'enregistrement d'association ([#8034](https://github.com/nocobase/nocobase/pull/8034)) par @katherinehhh
  - Correction du champ json qui doit être soumis en tant qu'objet ([#8057](https://github.com/nocobase/nocobase/pull/8057)) par @katherinehhh
  - Correction d'un problème où la touche Entrée ne pouvait pas être utilisée pour déclencher l'action de filtre. ([#8056](https://github.com/nocobase/nocobase/pull/8056)) par @gchust
- **[moteur de flux]**

  - Correction d'un problème où les options de configuration du composant précédent restaient visibles dans le menu après avoir changé de composant de champ. ([#8095](https://github.com/nocobase/nocobase/pull/8095)) par @gchust
  - Déplacement de useEffect avant le retour conditionnel dans FlowModelRenderer ([#8088](https://github.com/nocobase/nocobase/pull/8088)) par @zhangzhonghe
  - Correction d'un problème où des champs d'association non pris en charge apparaissaient dans les champs d'opération de filtre. ([#8086](https://github.com/nocobase/nocobase/pull/8086)) par @gchust
- **[acl]** Correction : acl.allow exécuté trop tôt ([#8065](https://github.com/nocobase/nocobase/pull/8065)) par @chenos
- **[Gestionnaire de fichiers]**

  - Correction de l'affichage incorrect des données de sous-détail dans les blocs Liste et Carte en grille ([#8087](https://github.com/nocobase/nocobase/pull/8087)) par @katherinehhh
  - Correction du champ de pièce jointe non affiché correctement dans la sous-table readPretty ([#8073](https://github.com/nocobase/nocobase/pull/8073)) par @katherinehhh
- **[Workflow]**

  - Correction du problème où une erreur était levée dans le canevas d'exécution lorsqu'un nœud était supprimé ([#8090](https://github.com/nocobase/nocobase/pull/8090)) par @mytharcher
  - Correction du problème où la page d'exécution levait une erreur lorsque les jobs sur un nœud sont indéfinis ([#8066](https://github.com/nocobase/nocobase/pull/8066)) par @mytharcher
- **[Champ de collection : Formule]** Correction d'un problème où les champs de formule ne pouvaient pas être ajoutés au bloc de formulaire de filtre. ([#8071](https://github.com/nocobase/nocobase/pull/8071)) par @gchust
- **[Bloc : Panneau d'action]** Optimisation du style dans la disposition Liste du bloc de panneau d'action ([#8084](https://github.com/nocobase/nocobase/pull/8084)) par @katherinehhh
- **[Employés IA]**

  - Résolution du problème où le nom du rôle de la source de données n'était pas compilé ([#8076](https://github.com/nocobase/nocobase/pull/8076)) par @heziqiang
  - Correction d'un problème où certains champs d'enregistrement actuels ne pouvaient pas être affichés dans le composant de sélection de variable. ([#8053](https://github.com/nocobase/nocobase/pull/8053)) par @gchust
- **[Action : Importer des enregistrements]** Les champs importés ne correspondent pas aux champs définis dans les paramètres ACL ([#8075](https://github.com/nocobase/nocobase/pull/8075)) par @2013xile
- **[Contrôle d'accès]** Ajout d'un middleware pour les vérifications d'autorisation sur les opérations d'association pour la source de données externe ([#8062](https://github.com/nocobase/nocobase/pull/8062)) par @2013xile
- **[Workflow : Approbation]**

  - Correction du problème où aucune donnée n'était chargée lors du chargement des approbations associées avec des variables de portée ACL par @mytharcher
  - Correction du problème où les données remplies disparaissaient dans le formulaire de l'approbateur par @mytharcher
  - Correction du problème d'erreur d'autorisation levée lors du chargement des approbations associées à un enregistrement sur le tiroir de détails par @mytharcher
  - Correction du problème où le processus était incorrect lors du branchement avec ordre et contreseing par @mytharcher
  - Correction du problème de OOM lors de la liste des approbations par @mytharcher
  - Correction du problème où les enregistrements d'approbation ne sont pas inclus dans le résultat du job dans la branche de retour par @mytharcher
  - Correction du problème où la fenêtre contextuelle de l'approbateur n'affichait pas de titre par @zhangzhonghe
  - Correction du problème où une erreur était levée lors du chargement d'une approbation associée en mode rôle d'union uniquement par @mytharcher
- **[Gestionnaire d'e-mails]**

  - Gestion des données anormales par @jiannx
  - Non synchronisation du statut programmé de Gmail par @jiannx
