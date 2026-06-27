---
title: "NocoBase v1.9.0-beta.18 : Mise à jour automatique des champs de séquence après la migration des données"
description: "Notes de version de v1.9.0-beta.18"
---

### 🎉 Nouvelles fonctionnalités

- **[Champ de collection : Séquence]** Mise à jour automatique des champs de séquence après une migration de données ([#8063](https://github.com/nocobase/nocobase/pull/8063)) par @cgyrock

- **[Source de données : API REST]** Ajout de l'option `transformateur de message d'erreur` dans la configuration de la source de données API RESTful par @cgyrock

- **[Authentification : OIDC]** Prise en charge de la redirection automatique vers l'URL SSO lorsque l'utilisateur n'est pas authentifié par @heziqiang

### 🚀 Améliorations

- **[auth]** Correction de [CVE-2025-13877](https://www.cve.org/CVERecord?id=CVE-2025-13877) ([#8128](https://github.com/nocobase/nocobase/pull/8128)) par @2013xile

- **[client]**
  - Affichage des options réduites au survol dans le composant Select ([#8029](https://github.com/nocobase/nocobase/pull/8029)) par @katherinehhh

  - Optimisation des messages de validation pour les sous-tableaux ([#8001](https://github.com/nocobase/nocobase/pull/8001)) par @katherinehhh

  - Ajout d'un état de chargement pour les boutons d'action de mise à jour et de suppression d'enregistrement, afin d'éviter les requêtes en double ([#7964](https://github.com/nocobase/nocobase/pull/7964)) par @mytharcher

  - Utilisation de triples accolades (`{{{` et `}}}`) pour les variables dans le contenu des messages, afin d'éviter que les variables ne soient échappées par Handlebars ([#7972](https://github.com/nocobase/nocobase/pull/7972)) par @mytharcher

- **[Action : Importer des enregistrements]** Autorisation de sélectionner l'ID pour les champs d'importation ([#8132](https://github.com/nocobase/nocobase/pull/8132)) par @katherinehhh

- **[Workflow]** Ajout du contexte de source de données "principale" pour UserSelect, afin de fournir un composant plus générique pouvant être utilisé ailleurs ([#8010](https://github.com/nocobase/nocobase/pull/8010)) par @mytharcher

- **[Champ de collection : Markdown(Vditor)]** Ajustement de la largeur du contenu en plein écran de Vditor ([#7974](https://github.com/nocobase/nocobase/pull/7974)) par @katherinehhh

- **[Gestionnaire de tâches asynchrones]** Messages d'erreur améliorés pour les tâches asynchrones, fournissant aux utilisateurs les raisons spécifiques des échecs de tâches ([#7796](https://github.com/nocobase/nocobase/pull/7796)) par @mytharcher

- **[Action : Importer des enregistrements Pro]** Messages d'erreur améliorés pour les tâches asynchrones, fournissant aux utilisateurs les raisons spécifiques des échecs de tâches par @mytharcher

- **[Workflow : Approbation]**
  - Correction de la sélection de variables dans AssigneeSelect, limitation à la sélection uniquement de la PK ou de la FK de la collection d'utilisateurs par @mytharcher

  - Utilisation d'un composant commun pour réduire le code dupliqué par @mytharcher

  - Rendre la charge utile de l'exécution manuelle (ou déclenchée par un nœud de sous-flux) compatible avec l'enregistrement ou la clé primaire. Éviter les problèmes de cohérence dans le contexte du déclencheur. par @mytharcher

  - Réduction des associations à charger dans la fenêtre contextuelle d'approbation, pour de meilleures performances par @mytharcher

- **[Journaux d'audit]** Mise à jour du champ d'identifiant unique en `texte` pour éviter un débordement de longueur d'identifiant lors des modifications en masse par @2013xile

- **[Gestionnaire de migration]** Mise à jour automatique des champs de séquence après une migration de données par @cgyrock

### 🐛 Corrections de bugs

- **[serveur]** Correction d'un problème où les workflows déclenchés n'étaient pas ajoutés à la file d'attente de traitement après l'importation de données, garantissant que les workflows s'exécutent comme prévu immédiatement après l'importation ([#8121](https://github.com/nocobase/nocobase/pull/8121)) par @mytharcher

- **[acl]** Correction d'un problème où les métadonnées ACL sont incorrectes lorsque les périmètres d'autorisation de source de données externe utilisent des variables liées à l'utilisateur actuel ([#8013](https://github.com/nocobase/nocobase/pull/8013)) par @2013xile

- **[client]**
  - Correction d'un bug de chargement différé dans Variable.Input, qui provoquait un rendu incorrect du menu des options de variable ([#8009](https://github.com/nocobase/nocobase/pull/8009)) par @mytharcher

  - Résolution d'une erreur lors de l'ajout d'enregistrements enfants dans un bloc de tableau arborescent d'association ([#7989](https://github.com/nocobase/nocobase/pull/7989)) par @katherinehhh

  - Correction du problème de scintillement de la liste déroulante des règles de liaison ([#8018](https://github.com/nocobase/nocobase/pull/8018)) par @zhangzhonghe

  - Évitement d'une erreur lors de l'ouverture des paramètres de valeur par défaut ([#7997](https://github.com/nocobase/nocobase/pull/7997)) par @mytharcher

  - Correction des problèmes de routage lors de l'utilisation d'une Iframe ([#7957](https://github.com/nocobase/nocobase/pull/7957)) par @zhangzhonghe

  - Correction du problème où le select distant n'affichait pas le bon libellé pour une valeur non-objet ([#7975](https://github.com/nocobase/nocobase/pull/7975)) par @katherinehhh

- **[base de données]** Correction : suppression du traitement UTC dans la conversion de l'heure pour les champs de type heure uniquement, afin d'éviter les décalages induits par le fuseau horaire. ([#7812](https://github.com/nocobase/nocobase/pull/7812)) par @ChimingLiu

- **[Action : Importer des enregistrements]**
  - Les champs importés ne correspondent pas aux champs définis dans les paramètres ACL ([#8075](https://github.com/nocobase/nocobase/pull/8075)) par @2013xile

  - Correction du problème où une erreur était levée lorsqu'un champ dans le xlsx importé avait une valeur `null` ([#8037](https://github.com/nocobase/nocobase/pull/8037)) par @mytharcher

  - Correction du problème lors de l'importation de données dans un tableau arborescent ([#7976](https://github.com/nocobase/nocobase/pull/7976)) par @cgyrock

- **[Workflow]**
  - Correction du problème où la page d'exécution levait une erreur lorsque les tâches sur un nœud sont indéfinies ([#8066](https://github.com/nocobase/nocobase/pull/8066)) par @mytharcher

  - Correction du problème où une erreur était levée dans le canevas d'exécution lorsqu'un nœud est supprimé ([#8090](https://github.com/nocobase/nocobase/pull/8090)) par @mytharcher

  - Correction du problème où la file d'attente était fermée avant la publication des messages ([#8003](https://github.com/nocobase/nocobase/pull/8003)) par @mytharcher

  - Correction du problème où les exécutions préparées n'étaient pas envoyées à la file d'attente avant l'arrêt ([#7981](https://github.com/nocobase/nocobase/pull/7981)) par @mytharcher

  - Correction du problème où certains menus de tâches de workflow ne s'affichaient pas ([#7980](https://github.com/nocobase/nocobase/pull/7980)) par @mytharcher

  - Correction du problème où le lien de la tâche menait à une page d'erreur ([#7983](https://github.com/nocobase/nocobase/pull/7983)) par @mytharcher

  - Correction du problème où le nombre de tâches ne s'affichait pas en raison d'une mauvaise utilisation du fournisseur ([#7968](https://github.com/nocobase/nocobase/pull/7968)) par @mytharcher

- **[Gestionnaire multi-applications]** Les paramètres de niveau de journal ne s'appliquent pas aux sous-applications ([#8045](https://github.com/nocobase/nocobase/pull/8045)) par @2013xile

- **[Contrôle d'accès]** Ajout d'un middleware pour les vérifications de permissions sur les opérations d'association pour les sources de données externes ([#8062](https://github.com/nocobase/nocobase/pull/8062)) par @2013xile

- **[Champ de collection : Plusieurs à plusieurs (tableau)]** Correction du problème où le champ m2m de type tableau dans le sous-tableau ne pouvait pas être mis à jour ([#7998](https://github.com/nocobase/nocobase/pull/7998)) par @cgyrock

- **[Éditeur de thème]** Activation du sélecteur de thème sur les appareils mobiles ([#8046](https://github.com/nocobase/nocobase/pull/8046)) par @zhangzhonghe

- **[Visualisation de données]**
  - Les paramètres des champs de filtre pour les collections de sources de données externes n'affichent pas les propriétés spécifiques ([#7982](https://github.com/nocobase/nocobase/pull/7982)) par @2013xile

  - Résolution du problème où la requête de graphique ne prenait pas en charge la portée des données ACL ([#7915](https://github.com/nocobase/nocobase/pull/7915)) par @2013xile

- **[Collection : Arborescence]** Correction des échecs de mise à jour de la table de chemin causés par une recherche incorrecte du champ parent de l'arborescence ([#8000](https://github.com/nocobase/nocobase/pull/8000)) par @2013xile

- **[Workflow : Nœud manuel]** Correction du problème où le nombre de tâches manuelles n'était pas correct ([#7984](https://github.com/nocobase/nocobase/pull/7984)) par @mytharcher

- **[Gestionnaire de tâches asynchrones]** Ajout d'une règle de migration pour la collection `asyncTasks`, afin d'éviter la migration des enregistrements de tâches asynchrones ([#7950](https://github.com/nocobase/nocobase/pull/7950)) par @mytharcher

- **[Gestionnaire de source de données]** Correction du problème de mise à jour du mot de passe de la source de données lorsque le mot de passe de la base de données est modifié ([#7977](https://github.com/nocobase/nocobase/pull/7977)) par @cgyrock

- **[Départements]** Correction du problème où les champs associés au département ne pouvaient pas être modifiés ([#7462](https://github.com/nocobase/nocobase/pull/7462)) par @heziqiang

- **[Workflow : Sous-flux]** Correction du problème où le workflow sélectionné affichait "N/A" lorsque le nombre de workflows était supérieur à 200 par @mytharcher

- **[Workflow : Approbation]**
  - Correction du fichier de langue par @mytharcher

  - Correction du problème où les enregistrements d'approbation ne sont pas inclus dans le résultat du travail dans la branche de retour par @mytharcher

  - Correction du problème où aucune donnée n'était chargée lors du chargement des approbations associées avec des variables de portée ACL par @mytharcher

  - Correction du problème de permission lors de l'obtention de `approvalRecords.reassignee` en raison d'un changement de `RemoteSelect` par @mytharcher

  - Correction du problème où l'action d'impression ne fonctionnait pas lors du rafraîchissement de la page avec une fenêtre modale ouverte par @mytharcher

  - Ajout d'une migration pour éviter une erreur d'enregistrement en double lors de l'ajout d'un index par @mytharcher

  - Correction du problème où le processus était incorrect lors du branchement avec ordre et contreseing par @mytharcher

  - Correction du problème où le commentaire dans le résultat du travail était nul après que l'utilisateur ait soumis une approbation avec un commentaire par @mytharcher

  - Correction de l'absence de données du demandeur dans le contexte d'exécution après que l'utilisateur a soumis à nouveau par @mytharcher

  - Correction du problème d'erreur de permission levée lors du chargement des approbations associées à un enregistrement dans le tiroir de détails par @mytharcher

  - Correction du problème où la fenêtre contextuelle de l'approbateur n'affichait pas de titre par @zhangzhonghe

  - Correction du problème où une erreur était levée lors du chargement d'une approbation associée en mode de rôle d'union uniquement par @mytharcher

  - Correction du problème de dépassement de mémoire (OOM) lors de la liste des approbations par @mytharcher
