---
title: "Mises à jour hebdomadaires de NocoBase : Optimisations et corrections de bugs"
description: "La mise à jour de cette semaine inclut : Prise en charge du tri des champs de colonne dans le tableau, Redirection automatique vers l'URL SSO lorsque non authentifié, et plus encore."
---

Résumez les journaux de mise à jour hebdomadaires du produit. Les dernières versions sont disponibles sur [notre blog](https://www.nocobase.com/en/blog/timeline).

**NocoBase est actuellement mis à jour avec trois branches : `main`, `next` et `develop`.**

![version.png](https://static-docs.nocobase.com/ba5f04e27e99c625cb3822da5df07860.png)

* `main` : La version la plus stable à ce jour, recommandée pour l'installation ;
* `next` : Version bêta, contient les nouvelles fonctionnalités à venir et a été testée préliminairement. Il peut y avoir des problèmes connus ou inconnus. Elle est principalement destinée aux utilisateurs testeurs pour recueillir des commentaires et optimiser davantage les fonctions. Idéale pour les utilisateurs testeurs qui souhaitent découvrir les nouvelles fonctionnalités en avant-première et donner leur avis ;
* `develop` : Version alpha, contient le code de fonctionnalité le plus récent, peut être incomplète ou instable, principalement destinée au développement interne et à l'itération rapide. Adaptée aux utilisateurs techniques intéressés par les fonctionnalités de pointe du produit, mais avec des problèmes potentiels et des fonctions incomplètes. Ne pas utiliser en production.

## main

![main.png](https://static-docs.nocobase.com/47a3c71734c1d0f908b51f9ebd53c0ac.png)

### [v1.9.14](https://www.nocobase.com/en/blog/v1.9.14)

*Date de sortie : 2025-11-27*

### 🎉 Nouvelles fonctionnalités

- **[Auth: OIDC]** Prise en charge de la redirection automatique vers l'URL SSO lorsque l'utilisateur n'est pas authentifié par @heziqiang

### 🚀 Améliorations

- **[client]** Utilisation de triples accolades (`{{{` et `}}}`) pour les variables dans le contenu des messages, afin d'éviter que les variables ne soient échappées par Handlebars ([#7972](https://github.com/nocobase/nocobase/pull/7972)) par @mytharcher
- **[Champ de collection : Markdown(Vditor)]** Ajustement de la largeur du contenu en plein écran de vditor ([#7974](https://github.com/nocobase/nocobase/pull/7974)) par @katherinehhh

### 🐛 Corrections de bugs

- **[base de données]** Correction : suppression du traitement UTC dans la conversion de l'heure pour les champs de type heure uniquement afin d'éviter les décalages induits par le fuseau horaire. ([#7812](https://github.com/nocobase/nocobase/pull/7812)) par @ChimingLiu
- **[client]** Correction de l'affichage incorrect du libellé pour les valeurs non-objets dans la sélection distante ([#7975](https://github.com/nocobase/nocobase/pull/7975)) par @katherinehhh
- **[Workflow]**

  - Correction du problème où les exécutions préparées n'étaient pas envoyées à la file d'attente avant l'arrêt ([#7981](https://github.com/nocobase/nocobase/pull/7981)) par @mytharcher
  - Correction du problème où le lien de la tâche menait à une page d'erreur ([#7983](https://github.com/nocobase/nocobase/pull/7983)) par @mytharcher
  - Correction du problème où certains menus de tâches de workflow ne s'affichaient pas ([#7980](https://github.com/nocobase/nocobase/pull/7980)) par @mytharcher
  - Correction du problème où le comptage des tâches ne s'affichait pas en raison d'une mauvaise utilisation du fournisseur ([#7968](https://github.com/nocobase/nocobase/pull/7968)) par @mytharcher
- **[Workflow : Nœud manuel]** Correction du problème où le nombre de tâches manuelles n'était pas correct ([#7984](https://github.com/nocobase/nocobase/pull/7984)) par @mytharcher
- **[Visualisation de données]**

  - Les paramètres des champs de filtre pour les collections de sources de données externes n'affichent pas les propriétés spécifiques ([#7982](https://github.com/nocobase/nocobase/pull/7982)) par @2013xile
  - Résolution du problème où la requête de graphique ne prenait pas en charge la portée des données ACL ([#7915](https://github.com/nocobase/nocobase/pull/7915)) par @2013xile
- **[Gestionnaire de source de données]** Correction de l'échec de la mise à jour du mot de passe de la source de données lorsque le mot de passe de la base de données est modifié ([#7977](https://github.com/nocobase/nocobase/pull/7977)) par @cgyrock
- **[Action : Importer des enregistrements]** Correction du problème lors de l'importation de données dans un tableau arborescent ([#7976](https://github.com/nocobase/nocobase/pull/7976)) par @cgyrock

### [v1.9.13](https://www.nocobase.com/en/blog/v1.9.13)

*Date de sortie : 2025-11-25*

### 🐛 Corrections de bugs

- **[client]** Correction des problèmes de routage lors de l'utilisation d'une Iframe ([#7957](https://github.com/nocobase/nocobase/pull/7957)) par @zhangzhonghe

### [v1.9.12](https://www.nocobase.com/en/blog/v1.9.12)

*Date de sortie : 2025-11-24*

### 🚀 Améliorations

- **[client]** Ajout d'un état de chargement pour les boutons d'action de mise à jour et de suppression d'enregistrement, afin d'éviter les requêtes en double ([#7964](https://github.com/nocobase/nocobase/pull/7964)) par @mytharcher
- **[Gestionnaire de tâches asynchrones]** Messages d'erreur améliorés pour les tâches asynchrones afin de fournir aux utilisateurs des raisons spécifiques pour les échecs de tâches ([#7796](https://github.com/nocobase/nocobase/pull/7796)) par @mytharcher
- **[Action : Importer des enregistrements Pro]** Messages d'erreur améliorés pour les tâches asynchrones afin de fournir aux utilisateurs des raisons spécifiques pour les échecs de tâches par @mytharcher
- **[Workflow : Approbation]**

  - Correction de la sélection de variable dans AssigneeSelect, limitation de la sélection uniquement à la PK ou FK de la collection d'utilisateurs par @mytharcher
  - Réduction des associations à charger dans la fenêtre contextuelle d'approbation, pour de meilleures performances par @mytharcher
  - Rendre la charge utile de l'exécution manuelle (ou du déclenchement par un nœud de sous-flux) compatible avec l'enregistrement ou la clé primaire. Éviter les problèmes de cohérence dans le contexte du déclencheur. par @mytharcher

### 🐛 Corrections de bugs

- **[Gestionnaire de tâches asynchrones]** Ajout d'une règle de migration pour la collection `asyncTasks`, afin d'éviter la migration des enregistrements de tâches asynchrones ([#7950](https://github.com/nocobase/nocobase/pull/7950)) par @mytharcher
- **[Workflow : Approbation]** Correction du fichier de langue par @mytharcher

### [v1.9.11](https://www.nocobase.com/en/blog/v1.9.11)

*Date de sortie : 2025-11-24*

### 🐛 Corrections de bugs

- **[client]** Correction de l'interface de champ affichant plusieurs-à-un au lieu de un-à-un pour belongsTo dans la configuration de source de données externe ([#7936](https://github.com/nocobase/nocobase/pull/7936)) par @cgyrock
- **[Workflow]** Correction du problème où la mise à jour du nombre de tâches réinitialisait involontairement l'état des formulaires en cours de remplissage ([#7937](https://github.com/nocobase/nocobase/pull/7937)) par @mytharcher
- **[Champ de collection : Plusieurs-à-plusieurs (tableau)]** Correction des problèmes de champ M2M (tableau) lors de la création/mise à jour de données associées ([#7926](https://github.com/nocobase/nocobase/pull/7926)) par @cgyrock

### [v1.9.10](https://www.nocobase.com/en/blog/v1.9.10)

*Date de sortie : 2025-11-20*

### 🚀 Améliorations

- **[Contrôle d'accès]** Réduction des autorisations par défaut pour le rôle de membre ([#7921](https://github.com/nocobase/nocobase/pull/7921)) par @2013xile
- **[Visualisation de données]** Ajout de la prise en charge de la langue russe pour les interfaces des plugins. ([#7676](https://github.com/nocobase/nocobase/pull/7676)) par @sembaev-a-a
- **[Workflow : Webhook]** Ajout d'une icône pour le type de nœud de réponse par @mytharcher

### 🐛 Corrections de bugs

- **[client]** Correction de l'erreur : Impossible de résoudre 'antd-mobile' et Impossible de résoudre 'antd-mobile-icons' ([#7914](https://github.com/nocobase/nocobase/pull/7914)) par @zhangzhonghe
- **[Contrôle d'accès]** Prise en charge des restrictions de portée de données pour les opérations d'association. ([#7919](https://github.com/nocobase/nocobase/pull/7919)) par @2013xile
- **[Source de données : Principale]** Correction du problème où un champ un-à-plusieurs nouvellement ajouté ne pouvait pas être sélectionné comme clé étrangère avant le redémarrage de l'application. ([#7907](https://github.com/nocobase/nocobase/pull/7907)) par @cgyrock

## next

![next.png](https://static-docs.nocobase.com/8ed17a0f08cc585018f6de6c8b13947d.png)

### [v1.9.0-beta.17](https://www.nocobase.com/en/blog/v1.9.0-beta.17)

*Date de sortie : 2025-11-21*

### 🚀 Améliorations

- **[base de données]** Ajout de l'option `multipleStatements` à l'instance de connexion MariaDB pour prendre en charge l'appel de plusieurs instructions dans une seule requête ([#7781](https://github.com/nocobase/nocobase/pull/7781)) par @mytharcher
- **[Contrôle d'accès]**

  - Réduction des autorisations par défaut pour le rôle de membre ([#7921](https://github.com/nocobase/nocobase/pull/7921)) par @2013xile
  - Optimisation de la logique de contrôle des autorisations pour les opérations sur les champs d'association ([#7800](https://github.com/nocobase/nocobase/pull/7800)) par @2013xile
- **[Visualisation de données]** Ajout de la prise en charge de la langue russe pour les interfaces des plugins. ([#7676](https://github.com/nocobase/nocobase/pull/7676)) par @sembaev-a-a
- **[Workflow]** Prise en charge du bloc de données dans le workflow pour utiliser le menu de paramètres de détail consolidé ([#7771](https://github.com/nocobase/nocobase/pull/7771)) par @mytharcher
- **[Workflow : Webhook]** Ajout d'une icône pour le type de nœud de réponse par @mytharcher
- **[Workflow : JavaScript]** Correction d'une vulnérabilité de sécurité causée par le passage de fonctions de niveau supérieur dans l'environnement d'exécution, empêchant l'exploitation qui pourrait donner accès au contexte d'exécution supérieur par @mytharcher
- **[Auth: OIDC]** Augmentation du délai d'attente de la requête par @2013xile
- **[Workflow : Approbation]** Ajout d'une notification pour les personnes déléguées et ajoutées par @mytharcher

### 🐛 Corrections de bugs

- **[client]**

  - Correction de l'interface de champ affichant plusieurs-à-un au lieu de un-à-un pour belongsTo dans la configuration de source de données externe ([#7936](https://github.com/nocobase/nocobase/pull/7936)) par @cgyrock
  - Correction de l'erreur : Impossible de résoudre 'antd-mobile' et Impossible de résoudre 'antd-mobile-icons' ([#7914](https://github.com/nocobase/nocobase/pull/7914)) par @zhangzhonghe
  - Correction du problème où les modèles dupliqués n'apparaissaient pas, causé par le glisser-déposer puis la suppression d'un modèle référencé ([#7847](https://github.com/nocobase/nocobase/pull/7847)) par @zhangzhonghe
  - Correction du problème où la règle de liaison pour le formulaire d'approbation ne fonctionnait pas ([#7858](https://github.com/nocobase/nocobase/pull/7858)) par @zhangzhonghe
  - Correction du problème de page suivante vide dans le bloc de détail à pagination simple ([#7784](https://github.com/nocobase/nocobase/pull/7784)) par @katherinehhh
  - Correction de "Taille maximale de la pile d'appels dépassée" ([#7780](https://github.com/nocobase/nocobase/pull/7780)) par @zhangzhonghe
- **[serveur]**

  - Correction d'un problème en mode de séparation des services où les messages de file d'attente non abonnés ne pouvaient pas être publiés ([#7875](https://github.com/nocobase/nocobase/pull/7875)) par @mytharcher
  - Isolation du canal Pub-Sub par nom d'application ([#7762](https://github.com/nocobase/nocobase/pull/7762)) par @mytharcher
  - Correction d'un problème où, après avoir activé le mode de séparation des services, l'envoi de messages par les processus workers via la file d'attente provoquait des erreurs ([#7797](https://github.com/nocobase/nocobase/pull/7797)) par @mytharcher
- **[utils]** Activation de la fusion d'objets dans la stratégie d'intersection ([#7840](https://github.com/nocobase/nocobase/pull/7840)) par @chenos
- **[base de données]** Détection incorrecte du champ d'index lorsque les noms de champs utilisent le style snake_case ([#7776](https://github.com/nocobase/nocobase/pull/7776)) par @2013xile
- **[Champ de collection : Plusieurs-à-plusieurs (tableau)]** Correction des problèmes de champ M2M (tableau) lors de la création/mise à jour de données associées ([#7926](https://github.com/nocobase/nocobase/pull/7926)) par @cgyrock
- **[Source de données : Principale]** Correction du problème où un champ un-à-plusieurs nouvellement ajouté ne pouvait pas être sélectionné comme clé étrangère avant le redémarrage de l'application. ([#7907](https://github.com/nocobase/nocobase/pull/7907)) par @cgyrock
- **[Workflow]**

  - Correction du problème où la mise à jour du nombre de tâches réinitialisait involontairement l'état des formulaires en cours de remplissage ([#7937](https://github.com/nocobase/nocobase/pull/7937)) par @mytharcher
  - Utilisation de eventQueue au lieu du backgroundJob partagé pour empêcher la consommation incorrecte de la file d'attente partagée en mode de séparation des services ([#7871](https://github.com/nocobase/nocobase/pull/7871)) par @mytharcher
  - Correction du problème où le plugin de workflow consommait toujours l'événement de la file d'attente lorsqu'il n'était pas en mode worker dans le mode de séparation des services ([#7820](https://github.com/nocobase/nocobase/pull/7820)) par @mytharcher
  - Correction de l'erreur causée par l'écoute d'événements de source de données externe inexistants ([#7855](https://github.com/nocobase/nocobase/pull/7855)) par @mytharcher
  - Correction d'un problème où, en mode de séparation des services, l'exécution manuelle d'un workflow contenant un nœud d'interruption restait bloquée dans un état en attente ([#7767](https://github.com/nocobase/nocobase/pull/7767)) par @mytharcher
  - Ajout de `workflowId` comme donnée d'identité pour les journaux de workflow ([#7789](https://github.com/nocobase/nocobase/pull/7789)) par @mytharcher
  - Résolution d'un problème où le répartiteur de workflow en mode cluster ne parvenait pas à identifier correctement les états inactifs, ce qui pouvait entraîner une consommation inutile d'événements de file d'attente avant que le plugin ne soit prêt ([#7768](https://github.com/nocobase/nocobase/pull/7768)) par @mytharcher
- **[Contrôle d'accès]**

  - Prise en charge des restrictions de portée de données pour les opérations d'association. ([#7919](https://github.com/nocobase/nocobase/pull/7919)) par @2013xile
  - Problème où les extraits d'opération d'association ne prenaient pas effet ([#7876](https://github.com/nocobase/nocobase/pull/7876)) par @2013xile
- **[Workflow : Nœud manuel]** Correction de l'espace de noms de la langue locale à utiliser, pour afficher le contenu correct de la traduction ([#7877](https://github.com/nocobase/nocobase/pull/7877)) par @mytharcher
- **[Utilisateurs]** Actualisation incorrecte de l'index lorsque les noms de champs utilisent le style snake_case ([#7785](https://github.com/nocobase/nocobase/pull/7785)) par @2013xile
- **[Mobile (obsolète)]** Correction du problème où la fenêtre contextuelle de valeur par défaut du champ de date sur mobile ne permettait pas de sélectionner une date ([#7783](https://github.com/nocobase/nocobase/pull/7783)) par @zhangzhonghe
- **[Workflow : Variable personnalisée]** Correction de l'erreur levée lorsqu'aucune configuration n'est présente dans le nœud de variable par @mytharcher
- **[Workflow : Événement d'action personnalisée]** Correction de l'erreur causée par l'écoute d'événements de source de données externe inexistants par @mytharcher
- **[Impression de modèle]** Analyse des variables dans le filtre par @jiannx
- **[Visualisation de données : ECharts]** Correction du problème où la configuration du type d'étiquette dans les options Echarts ne prenait pas effet. par @heziqiang
- **[Workflow : Approbation]**

  - Correction du format de date sur les cartes de la liste d'approbation dans le centre des tâches pour afficher la date et l'heure complètes par @mytharcher
  - Correction du problème où la taille de la page du canal de notification de chargement n'était pas assez grande, ce qui empêchait le chargement complet de la liste par @mytharcher
  - Correction d'un problème de performances survenu lors de l'interrogation de la liste des enregistrements d'approbation pendant la soumission de l'approbation par @mytharcher
  - Correction d'un problème où les champs de la collection principale n'étaient pas exclus lors du rechargement des données d'association par @mytharcher
  - Correction d'un problème où des conditions de concurrence survenant lors du traitement simultané de l'approbation par plusieurs approbateurs pouvaient entraîner l'exécution d'un nœud de workflow plus d'une fois par @mytharcher
  - La création de nœuds d'approbation dans des branches parallèles n'est plus prise en charge pour éviter les problèmes causés par l'état du processus par @mytharcher
  - Correction du problème où la règle de liaison pour le formulaire d'approbation ne fonctionnait pas par @zhangzhonghe
  - Correction de l'erreur levée lors d'un workflow d'approbation en double par @mytharcher
- **[Gestionnaire d'e-mails]**

  - ajout de journaux de synchronisation par @jiannx
  - synchronisation de l'état de lecture des e-mails Microsoft sans horodatage par @jiannx
  - ajout d'index à la collection mailMessages par @jiannx
  - ajout d'une migration pour les index par @jiannx
  - Correction du problème des images réservées et de la synchronisation dans Outlook par @jiannx

## develop

![develop.png](https://static-docs.nocobase.com/7fcdd9456a17286d8a439eee52bcb8d2.png)

### [v2.0.0-alpha.47](https://www.nocobase.com/en/blog/v2.0.0-alpha.47)

*Date de sortie : 2025-11-26*

### 🚀 Améliorations

- **[client]**

  - Prise en charge de l'initialisation des champs de filtre sélectionnés dans la requête de graphique ([#7933](https://github.com/nocobase/nocobase/pull/7933)) par @heziqiang
  - Utilisation de triples accolades (`{{{` et `}}}`) pour les variables dans le contenu des messages, afin d'éviter que les variables ne soient échappées par Handlebars ([#7972](https://github.com/nocobase/nocobase/pull/7972)) par @mytharcher
  - Ajout d'un état de chargement pour les boutons d'action de mise à jour et de suppression d'enregistrement, afin d'éviter les requêtes en double ([#7964](https://github.com/nocobase/nocobase/pull/7964)) par @mytharcher
- **[Champ de collection : Markdown(Vditor)]** Ajustement de la largeur du contenu en plein écran de vditor ([#7974](https://github.com/nocobase/nocobase/pull/7974)) par @katherinehhh

### 🐛 Corrections de bugs

- **[client]**

  - Correction d'un problème où l'ouverture du bloc de détail dans la fenêtre contextuelle pour les champs de relation non-ID provoquait une erreur. ([#7973](https://github.com/nocobase/nocobase/pull/7973)) par @gchust
  - Correction d'un problème où les données d'association ne se chargeaient pas correctement dans la fenêtre contextuelle pour les champs de relation non-ID. ([#7970](https://github.com/nocobase/nocobase/pull/7970)) par @gchust
  - Correction des problèmes de routage lors de l'utilisation d'une Iframe ([#7957](https://github.com/nocobase/nocobase/pull/7957)) par @zhangzhonghe
  - Correction du problème de paramètre de précision invalide pour le format de champ numérique ([#7967](https://github.com/nocobase/nocobase/pull/7967)) par @katherinehhh
  - Correction de la frappe incorrecte dans la nouvelle page 2.0 ([#7945](https://github.com/nocobase/nocobase/pull/7945)) par @zhangzhonghe
  - Correction du problème où la valeur du filtre n'était pas effacée lors du clic sur le bouton Réinitialiser ([#7966](https://github.com/nocobase/nocobase/pull/7966)) par @zhangzhonghe
- **[Workflow]** Correction du problème où le comptage des tâches ne s'affichait pas en raison d'une mauvaise utilisation du fournisseur ([#7968](https://github.com/nocobase/nocobase/pull/7968)) par @mytharcher
- **[Visualisation de données]** Résolution du problème où la requête de graphique ne prenait pas en charge la portée des données ACL ([#7915](https://github.com/nocobase/nocobase/pull/7915)) par @2013xile
- **[Bloc : Référence]** Correction d'un problème où la citation d'un bloc supprimait le bloc cité de la page d'origine. ([#7969](https://github.com/nocobase/nocobase/pull/7969)) par @gchust
- **[Employés IA]** Correction du problème lors de la génération de la sortie SQL par l'IA ([#7956](https://github.com/nocobase/nocobase/pull/7956)) par @heziqiang
- **[Impression de modèle]** Correction de l'échec de l'ajout d'un modèle dans l'opération d'impression du modèle d'enregistrement par @katherinehhh

### [v2.0.0-alpha.46](https://www.nocobase.com/en/blog/v2.0.0-alpha.46)

*Date de sortie : 2025-11-24*

### 🚀 Améliorations

- **[moteur de flux]** Prise en charge du changement dynamique de la classe du modèle de flux ([#7952](https://github.com/nocobase/nocobase/pull/7952)) par @gchust
- **[Employés IA]** Ajout d'un hook de mise à niveau pour le plugin d'employés IA ([#7951](https://github.com/nocobase/nocobase/pull/7951)) par @heziqiang
- **[Gestionnaire de tâches asynchrones]** Messages d'erreur améliorés pour les tâches asynchrones afin de fournir aux utilisateurs des raisons spécifiques pour les échecs de tâches ([#7796](https://github.com/nocobase/nocobase/pull/7796)) par @mytharcher
- **[Workflow : Approbation]**

  - Rendre la charge utile de l'exécution manuelle (ou du déclenchement par un nœud de sous-flux) compatible avec l'enregistrement ou la clé primaire. Éviter les problèmes de cohérence dans le contexte du déclencheur. par @mytharcher
  - Réduction des associations à charger dans la fenêtre contextuelle d'approbation, pour de meilleures performances par @mytharcher
  - Correction de la sélection de variable dans AssigneeSelect, limitation de la sélection uniquement à la PK ou FK de la collection d'utilisateurs par @mytharcher

### 🐛 Corrections de bugs

- **[client]** Correction du retour à la ligne automatique des champs de texte dans le bloc de détail lorsque le contenu dépasse la largeur ([#7955](https://github.com/nocobase/nocobase/pull/7955)) par @katherinehhh
- **[Gestionnaire de tâches asynchrones]** Ajout d'une règle de migration pour la collection `asyncTasks`, afin d'éviter la migration des enregistrements de tâches asynchrones ([#7950](https://github.com/nocobase/nocobase/pull/7950)) par @mytharcher
- **[Gestionnaire de fichiers]** Correction du téléchargement de fichiers vers un stockage spécifié au lieu du stockage par défaut ([#7947](https://github.com/nocobase/nocobase/pull/7947)) par @katherinehhh
- **[Workflow : Approbation]** Correction du fichier de langue par @mytharcher

### [v2.0.0-alpha.45](https://www.nocobase.com/en/blog/v2.0.0-alpha.45)

*Date de sortie : 2025-11-21*

### 🎉 Nouvelles fonctionnalités

- **[client]** Prise en charge du tri des champs de colonne dans le tableau ([#7900](https://github.com/nocobase/nocobase/pull/7900)) par @katherinehhh
- **[Workflow]** Ajout du nœud "Multi-conditions", fournissant le contrôle de flux comme `switch` / `case` ([#7878](https://github.com/nocobase/nocobase/pull/7878)) par @mytharcher

### 🐛 Corrections de bugs

- **[client]** Correction de l'erreur levée lors de l'effacement de la valeur dans la cascade à plusieurs niveaux ([#7943](https://github.com/nocobase/nocobase/pull/7943)) par @katherinehhh
- **[Visualisation de données]** Correction du problème où le bloc de graphique ne se mettait pas à jour après l'enregistrement ([#7920](https://github.com/nocobase/nocobase/pull/7920)) par @heziqiang
- **[Impression de modèle]** Correction de l'erreur d'action d'impression de modèle dans le bloc de détail par @katherinehhh

### [v2.0.0-alpha.44](https://www.nocobase.com/en/blog/v2.0.0-alpha.44)

*Date de sortie : 2025-11-21*

### 🎉 Nouvelles fonctionnalités

- **[client]**

  - ajout de la prise en charge de la création rapide pour la sélection de champ d'association ([#7887](https://github.com/nocobase/nocobase/pull/7887)) par @katherinehhh
  - prise en charge du sélecteur en cascade pour le champ d'association de collection arborescente ([#7846](https://github.com/nocobase/nocobase/pull/7846)) par @katherinehhh
- **[Télémétrie]** Ajout d'un nouveau plugin : Télémétrie, un plugin de télémétrie basé sur OpenTelemetry fournissant des métriques CPU, mémoire et requêtes HTTP avec prise en charge de l'exportation HTTP par @2013xile

### 🚀 Améliorations

- **[télémétrie]** Prise en charge du contrôle des métriques exportées ([#7938](https://github.com/nocobase/nocobase/pull/7938)) par @2013xile
- **[Gestionnaire de tâches asynchrones]** Les tâches asynchrones pour les sous-applications ne doivent démarrer que les sous-applications cibles dans les Workers ([#7927](https://github.com/nocobase/nocobase/pull/7927)) par @2013xile

### 🐛 Corrections de bugs

- **[client]**

  - suppression de l'action de tableau arborescent des blocs de collection non arborescente ([#7931](https://github.com/nocobase/nocobase/pull/7931)) par @katherinehhh
  - Correction de l'interface de champ affichant plusieurs-à-un au lieu de un-à-un pour belongsTo dans la configuration de source de données externe ([#7936](https://github.com/nocobase/nocobase/pull/7936)) par @cgyrock
- **[moteur de flux]** Correction du problème d'affichage désaligné de l'icône de la barre d'outils dans le bouton du bloc de détails ([#7929](https://github.com/nocobase/nocobase/pull/7929)) par @zhangzhonghe
- **[Workflow]** Correction du problème où la mise à jour du nombre de tâches réinitialisait involontairement l'état des formulaires en cours de remplissage ([#7937](https://github.com/nocobase/nocobase/pull/7937)) par @mytharcher
- **[Champ de collection : Plusieurs-à-plusieurs (tableau)]** Correction des problèmes de champ M2M (tableau) lors de la création/mise à jour de données associées ([#7926](https://github.com/nocobase/nocobase/pull/7926)) par @cgyrock
- **[Action : Importer des enregistrements Pro]** Correction du problème où la modification des options d'importation par le téléchargeur n'avait aucun effet par @katherinehhh

### [v2.0.0-alpha.43](https://www.nocobase.com/en/blog/v2.0.0-alpha.43)

*Date de sortie : 2025-11-20*

### 🚀 Améliorations

- **[Visualisation de données]** Ajout de la prise en charge de la langue russe pour les interfaces des plugins. ([#7676](https://github.com/nocobase/nocobase/pull/7676)) par @sembaev-a-a
- **[Contrôle d'accès]** Réduction des autorisations par défaut pour le rôle de membre ([#7921](https://github.com/nocobase/nocobase/pull/7921)) par @2013xile
- **[Workflow : Webhook]** Ajout d'une icône pour le type de nœud de réponse par @mytharcher

### 🐛 Corrections de bugs

- **[client]** Correction de l'erreur : Impossible de résoudre 'antd-mobile' et Impossible de résoudre 'antd-mobile-icons' ([#7914](https://github.com/nocobase/nocobase/pull/7914)) par @zhangzhonghe
- **[moteur de flux]** Correction du problème où l'ouverture du formulaire d'édition rapide du bloc de tableau provoquait une erreur. ([#7923](https://github.com/nocobase/nocobase/pull/7923)) par @gchust
- **[Moteur de flux]** Assurer que les variables d'enregistrement renvoient toujours des enregistrements complets lorsqu'elles sont utilisées avec leurs champs individuels. ([#7917](https://github.com/nocobase/nocobase/pull/7917)) par @gchust
- **[Source de données : Principale]** Correction du problème où un champ un-à-plusieurs nouvellement ajouté ne pouvait pas être sélectionné comme clé étrangère avant le redémarrage de l'application. ([#7907](https://github.com/nocobase/nocobase/pull/7907)) par @cgyrock
- **[Contrôle d'accès]** Prise en charge des restrictions de portée de données pour les opérations d'association. ([#7919](https://github.com/nocobase/nocobase/pull/7919)) par @2013xile
