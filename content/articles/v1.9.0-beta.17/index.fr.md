---
title: "NocoBase v1.9.0-bêta.17 : Ajout de notification pour le délégué et le destinataire ajouté"
description: "Notes de version de la v1.9.0-bêta.17"
---

### 🚀 Améliorations

- **[base de données]** Ajout de l'option `multipleStatements` à l'instance de connexion MariaDB pour permettre l'exécution de plusieurs instructions dans une seule requête ([#7781](https://github.com/nocobase/nocobase/pull/7781)) par @mytharcher

- **[Contrôle d'accès]**
  - Réduction des autorisations par défaut pour le rôle membre ([#7921](https://github.com/nocobase/nocobase/pull/7921)) par @2013xile

  - Optimisation de la logique de contrôle des autorisations pour les opérations sur les champs d'association ([#7800](https://github.com/nocobase/nocobase/pull/7800)) par @2013xile

- **[Visualisation de données]** Ajout de la prise en charge de la langue russe pour les interfaces des plugins. ([#7676](https://github.com/nocobase/nocobase/pull/7676)) par @sembaev-a-a

- **[Workflow]** Prise en charge des blocs de données dans le workflow pour utiliser le menu de consolidation des paramètres de détail ([#7771](https://github.com/nocobase/nocobase/pull/7771)) par @mytharcher

- **[Workflow : Webhook]** Ajout d'une icône pour le type de nœud de réponse par @mytharcher

- **[Workflow : JavaScript]** Correction d'une vulnérabilité de sécurité causée par le passage de fonctions de niveau supérieur dans l'environnement d'exécution, empêchant l'exploitation qui pourrait donner accès au contexte d'exécution supérieur par @mytharcher

- **[Auth : OIDC]** Augmentation du délai d'attente des requêtes par @2013xile

- **[Workflow : Approbation]** Ajout d'une notification pour le délégataire et l'assigné ajouté par @mytharcher

### 🐛 Corrections de bugs

- **[client]**
  - Correction de l'interface de champ affichant plusieurs-à-un au lieu de un-à-un pour belongsTo dans la configuration de source de données externe ([#7936](https://github.com/nocobase/nocobase/pull/7936)) par @cgyrock

  - Correction de l'erreur : Impossible de résoudre 'antd-mobile' et Impossible de résoudre 'antd-mobile-icons' ([#7914](https://github.com/nocobase/nocobase/pull/7914)) par @zhangzhonghe

  - Correction du problème où les modèles dupliqués n'apparaissaient pas, causé par le glisser-déposer puis la suppression d'un modèle référencé ([#7847](https://github.com/nocobase/nocobase/pull/7847)) par @zhangzhonghe

  - Correction du problème où la règle de liaison pour le formulaire d'approbation ne fonctionnait pas ([#7858](https://github.com/nocobase/nocobase/pull/7858)) par @zhangzhonghe

  - Correction du problème de page suivante vide dans le bloc de détail à pagination simple ([#7784](https://github.com/nocobase/nocobase/pull/7784)) par @katherinehhh

  - Correction de l'erreur « Taille maximale de la pile d'appels dépassée » ([#7780](https://github.com/nocobase/nocobase/pull/7780)) par @zhangzhonghe

- **[serveur]**
  - Correction d'un problème en mode de séparation des services où les messages de file d'attente non abonnés ne pouvaient pas être publiés ([#7875](https://github.com/nocobase/nocobase/pull/7875)) par @mytharcher

  - Isolation du canal Pub-Sub par nom d'application ([#7762](https://github.com/nocobase/nocobase/pull/7762)) par @mytharcher

  - Correction d'un problème où, après l'activation du mode de séparation des services, l'envoi de messages par les processus workers via la file d'attente provoquait des erreurs ([#7797](https://github.com/nocobase/nocobase/pull/7797)) par @mytharcher

- **[utils]** Activation de la fusion d'objets dans la stratégie d'intersection ([#7840](https://github.com/nocobase/nocobase/pull/7840)) par @chenos

- **[base de données]** Détection incorrecte des champs d'index lorsque les noms de champs utilisent le style snake_case ([#7776](https://github.com/nocobase/nocobase/pull/7776)) par @2013xile

- **[Champ de collection : Plusieurs-à-plusieurs (tableau)]** Correction des problèmes du champ M2M (tableau) lors de la création/mise à jour de données associées ([#7926](https://github.com/nocobase/nocobase/pull/7926)) par @cgyrock

- **[Source de données : Principale]** Correction du problème où un champ un-à-plusieurs nouvellement ajouté ne pouvait pas être sélectionné comme clé étrangère avant le redémarrage de l'application. ([#7907](https://github.com/nocobase/nocobase/pull/7907)) par @cgyrock

- **[Workflow]**
  - Correction du problème où la mise à jour du nombre de tâches réinitialisait involontairement l'état des formulaires en cours de remplissage ([#7937](https://github.com/nocobase/nocobase/pull/7937)) par @mytharcher

  - Utilisation de eventQueue au lieu du backgroundJob partagé pour empêcher la consommation incorrecte de la file partagée en mode de séparation des services ([#7871](https://github.com/nocobase/nocobase/pull/7871)) par @mytharcher

  - Correction du problème où le plugin de workflow consommait toujours l'événement de file d'attente lorsqu'il n'était pas en mode worker dans le mode de séparation des services ([#7820](https://github.com/nocobase/nocobase/pull/7820)) par @mytharcher

  - Correction de l'erreur causée par l'écoute d'événements de source de données externe inexistants ([#7855](https://github.com/nocobase/nocobase/pull/7855)) par @mytharcher

  - Correction d'un problème où, en mode de séparation des services, l'exécution manuelle d'un workflow contenant un nœud d'interruption restait bloquée dans un état en attente ([#7767](https://github.com/nocobase/nocobase/pull/7767)) par @mytharcher

  - Ajout de `workflowId` comme donnée d'identité pour les journaux du workflow ([#7789](https://github.com/nocobase/nocobase/pull/7789)) par @mytharcher

  - Résolution d'un problème où le répartiteur de workflow en mode cluster ne parvenait pas à identifier correctement les états inactifs, ce qui pouvait entraîner une consommation inutile d'événements de file d'attente avant que le plugin ne soit prêt ([#7768](https://github.com/nocobase/nocobase/pull/7768)) par @mytharcher

- **[Contrôle d'accès]**
  - Prise en charge des restrictions de périmètre de données pour les opérations d'association. ([#7919](https://github.com/nocobase/nocobase/pull/7919)) par @2013xile

  - Problème où les extraits d'opération d'association ne prenaient pas effet ([#7876](https://github.com/nocobase/nocobase/pull/7876)) par @2013xile

- **[Workflow : Nœud manuel]** Correction de l'espace de noms de la langue à utiliser pour afficher le contenu correct de la traduction ([#7877](https://github.com/nocobase/nocobase/pull/7877)) par @mytharcher

- **[Utilisateurs]** Actualisation incorrecte de l'index lorsque les noms de champs utilisent le style snake_case ([#7785](https://github.com/nocobase/nocobase/pull/7785)) par @2013xile

- **[Mobile (obsolète)]** Correction du problème où la fenêtre contextuelle de valeur par défaut du champ de date sur mobile ne permettait pas de sélectionner une date ([#7783](https://github.com/nocobase/nocobase/pull/7783)) par @zhangzhonghe

- **[Workflow : Variable personnalisée]** Correction de l'erreur levée lorsqu'aucune configuration n'est présente dans le nœud de variable par @mytharcher

- **[Workflow : Événement d'action personnalisée]** Correction de l'erreur causée par l'écoute d'événements de source de données externe inexistants par @mytharcher

- **[Impression de modèle]** Analyse des variables dans le filtre par @jiannx

- **[Visualisation de données : ECharts]** Correction du problème où la configuration du type d'étiquette dans les options ECharts ne prenait pas effet. par @heziqiang

- **[Workflow : Approbation]**
  - Correction du format de date sur les cartes de liste d'approbation dans le centre des tâches pour afficher la date et l'heure complètes par @mytharcher

  - Correction du problème où la taille de page du canal de notification de chargement n'était pas assez grande, ce qui empêchait le chargement complet de la liste par @mytharcher

  - Correction d'un problème de performance survenant lors de l'interrogation de la liste des enregistrements d'approbation pendant la soumission de l'approbation par @mytharcher

  - Correction d'un problème où les champs de la collection principale n'étaient pas exclus lors du rechargement des données d'association par @mytharcher

  - Correction d'un problème où des conditions de concurrence survenant lors du traitement simultané de l'approbation par plusieurs approbateurs pouvaient entraîner l'exécution d'un nœud de workflow plus d'une fois par @mytharcher

  - La création de nœuds d'approbation dans des branches parallèles n'est plus prise en charge pour éviter les problèmes causés par l'état du processus par @mytharcher

  - Correction du problème où la règle de liaison pour le formulaire d'approbation ne fonctionnait pas par @zhangzhonghe

  - Correction de l'erreur levée lors d'un workflow d'approbation en double par @mytharcher

- **[Gestionnaire d'e-mails]**
  - ajout des journaux de synchronisation par @jiannx

  - synchronisation de l'état de lecture des e-mails Microsoft sans horodatage par @jiannx

  - ajout d'index à la collection mailMessages par @jiannx

  - ajout d'une migration pour les index par @jiannx

  - Correction du problème des images réservées et de la synchronisation dans Outlook par @jiannx
