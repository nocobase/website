---
title: "Mises à jour hebdomadaires｜Ajout d'un outil de recherche web basé sur LLM pour les employés IA"
description: "Ceci est un résumé des mises à jour et améliorations des fonctionnalités de NocoBase du 3 au 9 avril 2026."
---

Résumez les journaux de mise à jour hebdomadaires du produit. Les dernières versions sont disponibles sur [notre blog](https://www.nocobase.com/en/blog/timeline).

**NocoBase est actuellement mis à jour avec trois branches : `main`, `next` et `develop`.**

![version.png](https://static-docs.nocobase.com/ba5f04e27e99c625cb3822da5df07860.png)

* `main` : La version la plus stable à ce jour, recommandée pour l'installation ;
* `next` : Version bêta, contient les nouvelles fonctionnalités à venir et a été testée préliminairement. Il peut y avoir des problèmes connus ou inconnus. Elle est principalement destinée aux utilisateurs testeurs pour recueillir des retours et optimiser davantage les fonctions. Idéale pour les utilisateurs testeurs qui souhaitent découvrir les nouvelles fonctionnalités en avant-première et donner leur avis ;
* `develop` : Version alpha, contient le code de fonctionnalité le plus récent, peut être incomplète ou instable, principalement destinée au développement interne et à l'itération rapide. Adaptée aux utilisateurs techniques intéressés par les fonctionnalités de pointe du produit, mais avec des problèmes potentiels et des fonctions incomplètes. Ne pas utiliser en production.

## main

![main.png](https://static-docs.nocobase.com/47a3c71734c1d0f908b51f9ebd53c0ac.png)

### [v2.0.34](https://www.nocobase.com/en/blog/v2.0.34)

*Date de sortie : 2026-04-09*

### 🎉 Nouvelles fonctionnalités

- **[Gestionnaire de migration]** prise en charge de la commande de migration par @chenos

### [v2.0.33](https://www.nocobase.com/en/blog/v2.0.33)

*Date de sortie : 2026-04-08*

### 🎉 Nouvelles fonctionnalités

- **[Employés IA]** Ajout d'un outil de recherche web basé sur LLM pour les employés IA ([#9032](https://github.com/nocobase/nocobase/pull/9032)) par @cgyrock

### 🐛 Corrections de bugs

- **[client]**

  - Correction d'un problème où un message de confirmation de modifications non enregistrées incorrect apparaissait pour l'action d'édition en masse ([#9054](https://github.com/nocobase/nocobase/pull/9054)) par @gchust
  - Correction d'un problème où une fenêtre contextuelle de confirmation secondaire incorrecte apparaissait lors de la soumission du formulaire après la création d'un enregistrement via un sous-tableau contextuel. ([#9035](https://github.com/nocobase/nocobase/pull/9035)) par @gchust
- **[gestionnaire-de-sources-de-données]** Correction d'un problème où certains types de champs n'étaient pas mis à jour correctement après la synchronisation des champs depuis la base de données ([#9046](https://github.com/nocobase/nocobase/pull/9046)) par @2013xile
- **[Employés IA]** Correction de l'échec du téléchargement de documents des employés IA en cas d'accès à un sous-chemin avec APP_PUBLIC_PATH configuré. ([#9034](https://github.com/nocobase/nocobase/pull/9034)) par @cgyrock

### [v2.0.32](https://www.nocobase.com/en/blog/v2.0.32)

*Date de sortie : 2026-04-04*

### 🚀 Améliorations

- **[non défini]** Ajout d'une table des matières au README ([#8878](https://github.com/nocobase/nocobase/pull/8878)) par @gaston98765

### 🐛 Corrections de bugs

- **[client]**

  - Échec de l'enregistrement du champ de relation du sous-formulaire ([#9004](https://github.com/nocobase/nocobase/pull/9004)) par @jiannx
  - Les sous-formulaires des champs n'affichent pas les données ([#9008](https://github.com/nocobase/nocobase/pull/9008)) par @jiannx
  - Correction du problème où ctx.request ne pouvait pas remplacer l'en-tête Authorization. ([#8850](https://github.com/nocobase/nocobase/pull/8850)) par @gchust
- **[serveur]** Ajout d'une vérification de service pour éviter que le statut de l'application ne soit mis à jour par une instance non active ([#8959](https://github.com/nocobase/nocobase/pull/8959)) par @mytharcher
- **[Employés IA]**

  - Correction du problème lors de l'utilisation des modèles deepseek ou minmax sur dashscope ([#9033](https://github.com/nocobase/nocobase/pull/9033)) par @cgyrock
  - Correction du problème où l'annulation du raisonnement des employés IA provoquait un crash du service ([#9031](https://github.com/nocobase/nocobase/pull/9031)) par @cgyrock
- **[Workflow : nœud de requête HTTP]** Nettoyage des résultats du nœud de requête du workflow pour éviter d'exposer la configuration de la requête, les nouveaux nœuds ne renvoient par défaut que les données de réponse, et ajout de journaux de débogage pour les requêtes échouées. ([#9024](https://github.com/nocobase/nocobase/pull/9024)) par @mytharcher
- **[Champ de collection : Tri]** correction(champ-tri) : empêcher le crash lorsque l'attribut scopeKey est indéfini ([#9019](https://github.com/nocobase/nocobase/pull/9019)) par @gaston98765
- **[Bloc : GridCard]** Correction du problème où le bouton n'était pas rafraîchi lors du rafraîchissement de la carte en grille ([#9021](https://github.com/nocobase/nocobase/pull/9021)) par @jiannx
- **[Workflow : Approbation]**

  - Ajout d'une tolérance aux pannes lors de la suppression du workflow, pour éviter les erreurs de chargement dans la liste des tâches par @mytharcher
  - Ajout d'une tolérance aux pannes pour l'absence de `latestRound` par @mytharcher

## next

![next.png](https://static-docs.nocobase.com/8ed17a0f08cc585018f6de6c8b13947d.png)

### [v2.1.0-beta.13](https://www.nocobase.com/en/blog/v2.1.0-beta.13)

*Date de sortie : 2026-04-09*

### 🎉 Nouvelles fonctionnalités

- **[Gestionnaire de migration]** prise en charge de la commande de migration par @chenos

### [v2.1.0-beta.12](https://www.nocobase.com/en/blog/v2.1.0-beta.12)

*Date de sortie : 2026-04-08*

### 🎉 Nouvelles fonctionnalités

- **[client]**

  - ajout de variables js au flux d'événements ([#8938](https://github.com/nocobase/nocobase/pull/8938)) par @jiannx
  - ajout d'une action d'élément JS ([#8911](https://github.com/nocobase/nocobase/pull/8911)) par @jiannx
- **[Employés IA]** Ajout d'un outil de recherche web basé sur LLM pour les employés IA ([#9032](https://github.com/nocobase/nocobase/pull/9032)) par @cgyrock

### 🚀 Améliorations

- **[non défini]**

  - Ajout d'une table des matières au README ([#8878](https://github.com/nocobase/nocobase/pull/8878)) par @gaston98765
  - Réduction du bruit des journaux lors du démarrage du serveur en masquant les commandes de décompression pour LibreOffice et Oracle Instant Client ([#8984](https://github.com/nocobase/nocobase/pull/8984)) par @Rishabh1925
- **[client]**

  - prise en charge de la définition des styles de champ via runjs ([#8933](https://github.com/nocobase/nocobase/pull/8933)) par @jiannx
  - Optimisation de la disposition horizontale des actions de formulaire ([#8869](https://github.com/nocobase/nocobase/pull/8869)) par @jiannx
- **[Workflow : JavaScript]** Ajout de `isolated-vm` comme moteur d'exécution JavaScript par défaut pour le nœud JavaScript ([#8973](https://github.com/nocobase/nocobase/pull/8973)) par @mytharcher
  Référence : [Nœud JavaScript](https://docs.nocobase.com/cn/workflow/nodes/javascript)
- **[Workflow]**

  - Passage de la taille du commutateur d'activation à petit ([#9010](https://github.com/nocobase/nocobase/pull/9010)) par @mytharcher
  - Ajout d'une variable pour le paramètre de taille de page ([#8951](https://github.com/nocobase/nocobase/pull/8951)) par @mytharcher
- **[Employés IA]** Optimisation des invites pour deepseek lors du traitement des types de fichiers non pris en charge ([#9003](https://github.com/nocobase/nocobase/pull/9003)) par @cgyrock
- **[Action : Requête personnalisée]** ajout de modèles d'action pour les requêtes personnalisées ([#8890](https://github.com/nocobase/nocobase/pull/8890)) par @jiannx
- **[Champ de collection : divisions administratives de la Chine]** field-china-region 2.0 ([#8831](https://github.com/nocobase/nocobase/pull/8831)) par @jiannx
- **[Workflow : Sous-flux]** Ajout d'une logique défensive pour éviter les blocages du workflow en cas d'exception par @mytharcher
- **[Workflow : Approbation]** Correction d'un problème de performance lié au champ JSON lors du chargement de la liste des enregistrements d'approbation par @mytharcher

### 🐛 Corrections de bugs

- **[client]**

  - Correction d'un problème où un message de confirmation de modifications non enregistrées incorrect apparaissait pour l'action d'édition en masse ([#9054](https://github.com/nocobase/nocobase/pull/9054)) par @gchust
  - Correction d'un problème où une fenêtre contextuelle de confirmation secondaire incorrecte apparaissait lors de la soumission du formulaire après la création d'un enregistrement via un sous-tableau contextuel. ([#9035](https://github.com/nocobase/nocobase/pull/9035)) par @gchust
  - Correction du problème où ctx.request ne pouvait pas remplacer l'en-tête Authorization. ([#8850](https://github.com/nocobase/nocobase/pull/8850)) par @gchust
  - Échec de l'enregistrement du champ de relation du sous-formulaire ([#9004](https://github.com/nocobase/nocobase/pull/9004)) par @jiannx
  - Les sous-formulaires des champs n'affichent pas les données ([#9008](https://github.com/nocobase/nocobase/pull/9008)) par @jiannx
  - Correction du problème où la copie des champs associés dans le tableau n'était pas affichée correctement lors du premier rendu. ([#9007](https://github.com/nocobase/nocobase/pull/9007)) par @jiannx
  - Correction d'un message de confirmation secondaire incorrect lors de la fermeture d'une fenêtre contextuelle à plusieurs niveaux après la modification des données du formulaire. ([#8944](https://github.com/nocobase/nocobase/pull/8944)) par @gchust
  - Correction du problème où un espace dans une expression de variable empêchait l'affichage du libellé ([#8988](https://github.com/nocobase/nocobase/pull/8988)) par @mytharcher
  - Correction de l'exception lors de l'ajout de nœuds enfants à la table arborescente dans la fenêtre contextuelle ([#8872](https://github.com/nocobase/nocobase/pull/8872)) par @jiannx
- **[gestionnaire-de-sources-de-données]** Correction d'un problème où certains types de champs n'étaient pas mis à jour correctement après la synchronisation des champs depuis la base de données ([#9046](https://github.com/nocobase/nocobase/pull/9046)) par @2013xile
- **[serveur]**

  - Ajout d'une vérification de service pour éviter que le statut de l'application ne soit mis à jour par une instance non active ([#8959](https://github.com/nocobase/nocobase/pull/8959)) par @mytharcher
  - Éviter de traiter les messages de synchronisation après l'arrêt de l'application ([#8940](https://github.com/nocobase/nocobase/pull/8940)) par @mytharcher
  - Modification du moment de fermeture de Pub-Sub à `beforeStop`, pour éviter l'envoi ou le traitement de messages après la fermeture de la base de données ([#8934](https://github.com/nocobase/nocobase/pull/8934)) par @mytharcher
- **[moteur-de-flux]**

  - Correction des menus de paramètres tronqués dans la fenêtre contextuelle ([#9005](https://github.com/nocobase/nocobase/pull/9005)) par @gchust
  - Correction d'un problème où les éléments de menu ne pouvaient pas être sélectionnés lorsque la largeur du composant d'interface utilisateur dans l'état de configuration était trop petite. ([#8954](https://github.com/nocobase/nocobase/pull/8954)) par @gchust
  - Ajout d'extraits JS pour la configuration des éléments de formulaire et des éléments de détail ([#8974](https://github.com/nocobase/nocobase/pull/8974)) par @jiannx
  - Synchronisation du statut vers la configuration du champ lorsqu'un champ de formulaire est supprimé ([#8857](https://github.com/nocobase/nocobase/pull/8857)) par @jiannx
- **[base-de-données]** Utilisation d'un avertissement au lieu d'une erreur lorsque l'un des paramètres d'ajout est invalide ([#8923](https://github.com/nocobase/nocobase/pull/8923)) par @mytharcher
- **[resourcer]** Correction d'un problème où les sources de données externes ne se chargeaient pas correctement. ([#8929](https://github.com/nocobase/nocobase/pull/8929)) par @2013xile
- **[Employés IA]**

  - Correction de l'échec du téléchargement de documents des employés IA en cas d'accès à un sous-chemin avec APP_PUBLIC_PATH configuré. ([#9034](https://github.com/nocobase/nocobase/pull/9034)) par @cgyrock
  - Correction du problème lors de l'utilisation des modèles deepseek ou minmax sur dashscope ([#9033](https://github.com/nocobase/nocobase/pull/9033)) par @cgyrock
  - Correction du problème où l'annulation du raisonnement des employés IA provoquait un crash du service ([#9031](https://github.com/nocobase/nocobase/pull/9031)) par @cgyrock
  - Correction du problème de comportement anormal de la recherche web lors de l'utilisation du LLM Qwen ([#9012](https://github.com/nocobase/nocobase/pull/9012)) par @cgyrock
  - Ajout d'une vérification de propriété à l'API de conversation IA ([#8993](https://github.com/nocobase/nocobase/pull/8993)) par @cgyrock
  - Ajustement de l'espace entre les composants de carte d'outil dans la conversation IA ([#8965](https://github.com/nocobase/nocobase/pull/8965)) par @cgyrock
- **[Workflow : nœud de requête HTTP]** Nettoyage des résultats du nœud de requête du workflow pour éviter d'exposer la configuration de la requête, les nouveaux nœuds ne renvoient par défaut que les données de réponse, et ajout de journaux de débogage pour les requêtes échouées. ([#9024](https://github.com/nocobase/nocobase/pull/9024)) par @mytharcher
- **[Champ de collection : Tri]** correction(champ-tri) : empêcher le crash lorsque l'attribut scopeKey est indéfini ([#9019](https://github.com/nocobase/nocobase/pull/9019)) par @gaston98765
- **[Bloc : GridCard]** Correction du problème où le bouton n'était pas rafraîchi lors du rafraîchissement de la carte en grille ([#9021](https://github.com/nocobase/nocobase/pull/9021)) par @jiannx
- **[Notification : Message dans l'application]** Correction de la liste blanche d'actions pour les mises à jour de messages dans l'application afin d'empêcher les mises à jour non autorisées par des non-propriétaires. ([#9001](https://github.com/nocobase/nocobase/pull/9001)) par @mytharcher
- **[Workflow : nœud SQL]** Correction d'un problème de sécurité dans le nœud SQL ([#8989](https://github.com/nocobase/nocobase/pull/8989)) par @mytharcher
- **[Visualisation de données]**

  - Lors de l'utilisation de filtres basés sur des variables, les graphiques ne parviennent pas à résoudre correctement les valeurs des variables lors du rendu initial ([#8964](https://github.com/nocobase/nocobase/pull/8964)) par @2013xile
  - correction des statistiques de données anormales du graphique du rôle racine après l'activation du plugin d'espace ([#8969](https://github.com/nocobase/nocobase/pull/8969)) par @jiannx
- **[Action : Importer des enregistrements]** correction du problème d'échec d'importation après l'activation de plugin-space ([#8968](https://github.com/nocobase/nocobase/pull/8968)) par @jiannx
- **[Workflow : JavaScript]** Correction de problèmes de sécurité ([#8967](https://github.com/nocobase/nocobase/pull/8967)) par @mytharcher
- **[Action : Exporter des enregistrements]** Limitation de la configuration d'importation et d'exportation des champs associés à plusieurs niveaux ([#8893](https://github.com/nocobase/nocobase/pull/8893)) par @jiannx
- **[Variables personnalisées]** ignorer la notification d'authentification ([#8942](https://github.com/nocobase/nocobase/pull/8942)) par @chenos
- **[Localisation]** empêcher la requête localizationTexts:missing en cas de refus d'autorisation ([#8903](https://github.com/nocobase/nocobase/pull/8903)) par @chenos
- **[Authentification]** correction de l'acl pour prendre en charge les paramètres de filtrage d'état personnalisés ([#8918](https://github.com/nocobase/nocobase/pull/8918)) par @jiannx
- **[Moteur de flux]** Suppression de l'événement hérité copié depuis le dépôt uiSchema pour éviter une erreur lors du déclenchement ([#8957](https://github.com/nocobase/nocobase/pull/8957)) par @mytharcher
- **[Action : Importer des enregistrements Pro]**

  - limitation de la configuration d'importation et d'exportation des champs associés à plusieurs niveaux par @jiannx
  - Correction du problème où l'option "Déclencher le workflow" ne fonctionnait pas lorsqu'elle n'était pas cochée par @mytharcher
- **[Source de données : Oracle externe]** Correction d'une erreur qui se produisait lors du chargement de la source de données Oracle externe par @2013xile
- **[Workflow : Approbation]**

  - Correction de la limite de version des migrations héritées pour éviter une erreur lors du démarrage dans un déploiement de dernière version par @mytharcher
  - Ajout d'une tolérance aux pannes lors de la suppression du workflow, pour éviter les erreurs de chargement dans la liste des tâches par @mytharcher
  - Correction de la traduction, de la sélection de nœud et des problèmes de cible de retour dans le bouton de retour du formulaire d'approbation v2 par @zhangzhonghe
  - Ajout d'une tolérance aux pannes pour l'absence de `latestRound` par @mytharcher
- **[Gestionnaire d'e-mails]**

  - Correction de la signature écrasée lors de l'utilisation de modèles par @jiannx
  - aucune confirmation de fermeture n'est affichée après l'envoi de l'e-mail par @jiannx

## develop

![develop.png](https://static-docs.nocobase.com/7fcdd9456a17286d8a439eee52bcb8d2.png)

### [v2.1.0-alpha.14](https://www.nocobase.com/en/blog/v2.1.0-alpha.14)

*Date de sortie : 2026-04-07*

### 🎉 Nouvelles fonctionnalités

- **[Employés IA]** Ajout de la capacité d'invoquer des sous-agents pour les employés IA ([#8935](https://github.com/nocobase/nocobase/pull/8935)) par @cgyrock
- **[IA : Serveur MCP]** Fournit une API de requête de collection de données générique, appelable via MCP ([#8985](https://github.com/nocobase/nocobase/pull/8985)) par @2013xile

### 🚀 Améliorations

- **[non défini]**

  - Ajout d'une table des matières au README ([#8878](https://github.com/nocobase/nocobase/pull/8878)) par @gaston98765
  - Réduction du bruit des journaux lors du démarrage du serveur en masquant les commandes de décompression pour LibreOffice et Oracle Instant Client ([#8984](https://github.com/nocobase/nocobase/pull/8984)) par @Rishabh1925
- **[Moteur de flux]** Ajout de nouvelles API pour la construction d'interface utilisateur. ([#8992](https://github.com/nocobase/nocobase/pull/8992)) par @gchust
- **[Workflow]** Passage de la taille du commutateur d'activation à petit ([#9010](https://github.com/nocobase/nocobase/pull/9010)) par @mytharcher
- **[Employés IA]** Optimisation des invites pour deepseek lors du traitement des types de fichiers non pris en charge ([#9003](https://github.com/nocobase/nocobase/pull/9003)) par @cgyrock
- **[Action : Requête personnalisée]** ajout de modèles d'action pour les requêtes personnalisées ([#8890](https://github.com/nocobase/nocobase/pull/8890)) par @jiannx
- **[Workflow : JavaScript]** Ajout de `isolated-vm` comme moteur d'exécution JavaScript par défaut pour le nœud JavaScript ([#8973](https://github.com/nocobase/nocobase/pull/8973)) par @mytharcher
  Référence : [Nœud JavaScript](https://docs.nocobase.com/cn/workflow/nodes/javascript)

### 🐛 Corrections de bugs

- **[serveur]**

  - Ajout d'une vérification de service pour éviter que le statut de l'application ne soit mis à jour par une instance non active ([#8959](https://github.com/nocobase/nocobase/pull/8959)) par @mytharcher
  - Prise en charge de l'obtention de l'application cible par nom d'hôte ([#8978](https://github.com/nocobase/nocobase/pull/8978)) par @2013xile
- **[client]**

  - Échec de l'enregistrement du champ de relation du sous-formulaire ([#9004](https://github.com/nocobase/nocobase/pull/9004)) par @jiannx
  - Les sous-formulaires des champs n'affichent pas les données ([#9008](https://github.com/nocobase/nocobase/pull/9008)) par @jiannx
  - Correction du problème où la copie des champs associés dans le tableau n'était pas affichée correctement lors du premier rendu. ([#9007](https://github.com/nocobase/nocobase/pull/9007)) par @jiannx
  - Correction d'un message de confirmation secondaire incorrect lors de la fermeture d'une fenêtre contextuelle à plusieurs niveaux après la modification des données du formulaire. ([#8944](https://github.com/nocobase/nocobase/pull/8944)) par @gchust
  - Correction du problème où un espace dans une expression de variable empêchait l'affichage du libellé ([#8988](https://github.com/nocobase/nocobase/pull/8988)) par @mytharcher
- **[moteur-de-flux]**

  - Correction des menus de paramètres tronqués dans la fenêtre contextuelle ([#9005](https://github.com/nocobase/nocobase/pull/9005)) par @gchust
  - Correction d'un problème où les éléments de menu ne pouvaient pas être sélectionnés lorsque la largeur du composant d'interface utilisateur dans l'état de configuration était trop petite. ([#8954](https://github.com/nocobase/nocobase/pull/8954)) par @gchust
  - Ajout d'extraits JS pour la configuration des éléments de formulaire et des éléments de détail ([#8974](https://github.com/nocobase/nocobase/pull/8974)) par @jiannx
- **[Workflow : nœud de messagerie]** Correction de la validation pour les champs de variables ([#9047](https://github.com/nocobase/nocobase/pull/9047)) par @mytharcher
- **[Champ de collection : Tri]** correction(champ-tri) : empêcher le crash lorsque l'attribut scopeKey est indéfini ([#9019](https://github.com/nocobase/nocobase/pull/9019)) par @gaston98765
- **[Employés IA]**

  - Correction du problème où les employés IA ne pouvaient pas utiliser les compétences ([#9023](https://github.com/nocobase/nocobase/pull/9023)) par @cgyrock
  - Correction du problème où le LLM tentait toujours de charger les compétences après la désactivation de l'outil getSkill ([#9013](https://github.com/nocobase/nocobase/pull/9013)) par @cgyrock
  - Correction du problème de comportement anormal de la recherche web lors de l'utilisation du LLM Qwen ([#9012](https://github.com/nocobase/nocobase/pull/9012)) par @cgyrock
  - Ajout d'une vérification de propriété à l'API de conversation IA ([#8993](https://github.com/nocobase/nocobase/pull/8993)) par @cgyrock
- **[Bloc : GridCard]** Correction du problème où le bouton n'était pas rafraîchi lors du rafraîchissement de la carte en grille ([#9021](https://github.com/nocobase/nocobase/pull/9021)) par @jiannx
- **[Workflow]**

  - Correction d'une règle de validation incorrecte de l'instruction conditionnelle ([#9017](https://github.com/nocobase/nocobase/pull/9017)) par @mytharcher
  - Correction du problème où le mode du déclencheur de collection ne pouvait pas être défini sur "créer ou mettre à jour" ([#8980](https://github.com/nocobase/nocobase/pull/8980)) par @mytharcher
- **[Notification : Message dans l'application]** Correction de la liste blanche d'actions pour les mises à jour de messages dans l'application afin d'empêcher les mises à jour non autorisées par des non-propriétaires. ([#9001](https://github.com/nocobase/nocobase/pull/9001)) par @mytharcher
- **[Gestionnaire de sources de données]** Optimisation du nommage des outils MCP et réduction des réponses API redondantes pour éviter une consommation excessive du contexte de conversation IA ([#9000](https://github.com/nocobase/nocobase/pull/9000)) par @2013xile
- **[Workflow : nœud SQL]** Correction d'un problème de sécurité dans le nœud SQL ([#8989](https://github.com/nocobase/nocobase/pull/8989)) par @mytharcher
- **[Visualisation de données]** Lors de l'utilisation de filtres basés sur des variables, les graphiques ne parviennent pas à résoudre correctement les valeurs des variables lors du rendu initial ([#8964](https://github.com/nocobase/nocobase/pull/8964)) par @2013xile
- **[Workflow : Approbation]**

  - Ajout d'une tolérance aux pannes lors de la suppression du workflow, pour éviter les erreurs de chargement dans la liste des tâches par @mytharcher
  - Ajout d'une tolérance aux pannes pour l'absence de `latestRound` par @mytharcher
  - Correction de la limite de version des migrations héritées pour éviter une erreur lors du démarrage dans un déploiement de dernière version par @mytharcher
- **[Gestionnaire d'e-mails]** aucune confirmation de fermeture n'est affichée après l'envoi de l'e-mail par @jiannx
