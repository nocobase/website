---
title: "Mises à jour hebdomadaires de NocoBase : Optimisations et corrections de bugs"
description: "La mise à jour de cette semaine inclut : prise en charge du glisser-déposer pour les actions de colonnes de tableau, ajout d'une source de données SQL pour les graphiques, et plus encore."
---

Résumez les journaux de mise à jour hebdomadaires du produit. Les dernières versions sont consultables sur [notre blog](https://www.nocobase.com/en/blog/timeline).

**NocoBase est actuellement mis à jour avec trois branches : `main`, `next` et `develop`.**

![version.png](https://static-docs.nocobase.com/ba5f04e27e99c625cb3822da5df07860.png)

* `main` : La version la plus stable à ce jour, recommandée pour l'installation ;
* `next` : Version bêta, contient les nouvelles fonctionnalités à venir et a été testée préliminairement. Il peut y avoir des problèmes connus ou inconnus. Elle est principalement destinée aux utilisateurs testeurs pour recueillir des retours et optimiser davantage les fonctionnalités. Idéale pour les utilisateurs testeurs qui souhaitent découvrir les nouvelles fonctionnalités en avant-première et donner leur avis ;
* `develop` : Version alpha, contient le code de fonctionnalité le plus récent, peut être incomplète ou instable, principalement destinée au développement interne et à l'itération rapide. Adaptée aux utilisateurs techniques intéressés par les fonctionnalités de pointe du produit, mais avec des problèmes potentiels et des fonctions incomplètes. Ne convient pas à une utilisation en production.

## main

![main.png](https://static-docs.nocobase.com/47a3c71734c1d0f908b51f9ebd53c0ac.png)

### [v1.9.6](https://www.nocobase.com/en/blog/v1.9.6)

*Date de sortie : 2025-11-12*

### 🐛 Corrections de bugs

- **[client]** Correction du problème où les modèles dupliqués n'apparaissaient pas, causé par le glisser-déposer puis la suppression d'un modèle référencé ([#7847](https://github.com/nocobase/nocobase/pull/7847)) par @zhangzhonghe
- **[utils]** Activation de la fusion d'objets dans la stratégie d'intersection ([#7840](https://github.com/nocobase/nocobase/pull/7840)) par @chenos
- **[Visualisation de données : ECharts]** correction du problème avec la configuration labelType d'ECharts par @heziqiang
- **[Gestionnaire d'emails]** synchronisation du statut de lecture des courriels Microsoft sans horodatage par @jiannx

### [v1.9.5](https://www.nocobase.com/en/blog/v1.9.5)

*Date de sortie : 2025-11-10*

### 🐛 Corrections de bugs

- **[Workflow : Approbation]** Correction d'un problème où les champs de la collection principale n'étaient pas exclus lors du rechargement des données d'association par @mytharcher
- **[Gestionnaire d'emails]** Correction du problème des images réservées et de la synchronisation dans Outlook par @jiannx

### [v1.9.4](https://www.nocobase.com/en/blog/v1.9.4)

*Date de sortie : 2025-11-10*

### 🚀 Améliorations

- **[Contrôle d'accès]** Optimisation de la logique de contrôle des permissions pour les opérations sur les champs d'association ([#7800](https://github.com/nocobase/nocobase/pull/7800)) par @2013xile
- **[Workflow : JavaScript]** Correction d'une vulnérabilité de sécurité causée par le passage de fonctions de niveau supérieur dans l'environnement d'exécution, empêchant l'exploitation qui pourrait donner accès au contexte d'exécution supérieur par @mytharcher
- **[Auth : OIDC]** Augmentation du délai d'attente de la requête par @2013xile

### 🐛 Corrections de bugs

- **[serveur]** Correction d'un problème où, après avoir activé le mode de séparation des services, l'envoi de messages par les processus workers via la file d'attente de messages provoquait des erreurs ([#7797](https://github.com/nocobase/nocobase/pull/7797)) par @mytharcher
- **[client]** correction du problème de page suivante vide dans le bloc de détails à pagination simple ([#7784](https://github.com/nocobase/nocobase/pull/7784)) par @katherinehhh
- **[Workflow]**

  - Ajout de `workflowId` comme donnée d'identité pour les journaux du workflow ([#7789](https://github.com/nocobase/nocobase/pull/7789)) par @mytharcher
  - Correction du problème où le plugin de workflow consommait toujours l'événement de la file d'attente lorsqu'il n'était pas en mode worker sous le mode de séparation des services ([#7820](https://github.com/nocobase/nocobase/pull/7820)) par @mytharcher
- **[Utilisateurs]** Actualisation incorrecte de l'index lorsque les noms de champs utilisent le style snake_case ([#7785](https://github.com/nocobase/nocobase/pull/7785)) par @2013xile
- **[Workflow : Variable personnalisée]** Correction de l'erreur levée lorsqu'aucune configuration n'est présente dans le nœud de variable par @mytharcher

## develop

![develop.png](https://static-docs.nocobase.com/7fcdd9456a17286d8a439eee52bcb8d2.png)

### [v2.0.0-alpha.38](https://www.nocobase.com/en/blog/v2.0.0-alpha.38)

*Date de sortie : 2025-11-12*

### 🎉 Nouvelles fonctionnalités

- **[client]** Prise en charge du glisser-déposer pour les actions de colonnes de tableau ([#7842](https://github.com/nocobase/nocobase/pull/7842)) par @zhangzhonghe
- **[Visualisation de données]** ajout d'une source de données SQL pour les graphiques ([#7830](https://github.com/nocobase/nocobase/pull/7830)) par @heziqiang

### 🚀 Améliorations

- **[client]** Ajout de la prise en charge de la bibliothèque Day.js dans le contexte de script RunJS, permettant des manipulations de date et d'heure plus faciles. ([#7841](https://github.com/nocobase/nocobase/pull/7841)) par @gchust

### 🐛 Corrections de bugs

- **[utils]**

  - Correction de l'erreur "Invalid filter item type" sur le bouton de filtre ([#7838](https://github.com/nocobase/nocobase/pull/7838)) par @zhangzhonghe
  - Activation de la fusion d'objets dans la stratégie d'intersection ([#7840](https://github.com/nocobase/nocobase/pull/7840)) par @chenos
  - Correction de l'erreur 'Unrecognized operation' dans le flux d'événements ([#7835](https://github.com/nocobase/nocobase/pull/7835)) par @zhangzhonghe
- **[client]**

  - Correction d'un problème où les règles de liaison pour les boutons d'action de ligne dans un bloc de tableau n'étaient pas réexécutées après la mise à jour des données de ligne, garantissant que les règles sont maintenant correctement réappliquées lorsque des changements se produisent. ([#7832](https://github.com/nocobase/nocobase/pull/7832)) par @gchust
  - Correction des erreurs lors de l'aperçu du code dans l'éditeur de code si le code contient une syntaxe jsx ([#7836](https://github.com/nocobase/nocobase/pull/7836)) par @gchust
- **[undefined]** Correction du problème de style incorrect sur la page d'accueil de la documentation du plugin en mode sombre. ([#7839](https://github.com/nocobase/nocobase/pull/7839)) par @gchust
- **[Gestionnaire de fichiers]** correction des problèmes de configuration des champs de bloc de tableau ([#7843](https://github.com/nocobase/nocobase/pull/7843)) par @katherinehhh
- **[Employés IA]** Masquer le bouton de chat des employés IA sur les pages v1 ([#7829](https://github.com/nocobase/nocobase/pull/7829)) par @cgyrock
- **[Visualisation de données : ECharts]** correction du problème avec la configuration labelType d'ECharts par @heziqiang
- **[Gestionnaire d'emails]**

  - correction des bugs de brouillon par @jiannx
  - synchronisation du statut de lecture des courriels Microsoft sans horodatage par @jiannx

### [v2.0.0-alpha.37](https://www.nocobase.com/en/blog/v2.0.0-alpha.37)

*Date de sortie : 2025-11-11*

### 🚀 Améliorations

- **[client]**

  - ajout de la version des informations de page au contexte du moteur de flux ([#7826](https://github.com/nocobase/nocobase/pull/7826)) par @gchust
  - amélioration de l'éditeur Markdown ([#7793](https://github.com/nocobase/nocobase/pull/7793)) par @katherinehhh
  - adaptation au champ tableoid dans la version 2.0 ([#7809](https://github.com/nocobase/nocobase/pull/7809)) par @katherinehhh
- **[Visualisation de données]** mise à jour des conseils d'alerte et des annotations de modèle de code d'événements ([#7814](https://github.com/nocobase/nocobase/pull/7814)) par @heziqiang
- **[Contrôle d'accès]** Optimisation de la logique de contrôle des permissions pour les opérations sur les champs d'association ([#7800](https://github.com/nocobase/nocobase/pull/7800)) par @2013xile
- **[Auth : OIDC]** Augmentation du délai d'attente de la requête par @2013xile

### 🐛 Corrections de bugs

- **[serveur]** Correction d'un problème où, après avoir activé le mode de séparation des services, l'envoi de messages par les processus workers via la file d'attente de messages provoquait des erreurs ([#7797](https://github.com/nocobase/nocobase/pull/7797)) par @mytharcher
- **[client]**

  - la variable de collection courante ne doit pas être sélectionnable dans le sélecteur de variables du composant de filtre ([#7818](https://github.com/nocobase/nocobase/pull/7818)) par @gchust
  - Correction de l'erreur 'value.replace is not a function' dans le champ de relation du formulaire de filtre ([#7824](https://github.com/nocobase/nocobase/pull/7824)) par @zhangzhonghe
  - Correction des paramètres incorrects dans le callback onChange ([#7807](https://github.com/nocobase/nocobase/pull/7807)) par @zhangzhonghe
- **[moteur de flux]** Correction du problème où les modifications du flux d'événements ne prenaient effet qu'après avoir actualisé la page. ([#7811](https://github.com/nocobase/nocobase/pull/7811)) par @gchust
- **[Workflow]** Correction du problème où le plugin de workflow consommait toujours l'événement de la file d'attente lorsqu'il n'était pas en mode worker sous le mode de séparation des services ([#7820](https://github.com/nocobase/nocobase/pull/7820)) par @mytharcher
- **[Workflow : Approbation]** Correction d'un problème où les champs de la collection principale n'étaient pas exclus lors du rechargement des données d'association par @mytharcher
- **[Gestionnaire d'emails]** Correction du problème des images réservées et de la synchronisation dans Outlook par @jiannx

### [v2.0.0-alpha.36](https://www.nocobase.com/en/blog/v2.0.0-alpha.36)

*Date de sortie : 2025-11-10*

### 🚀 Améliorations

- **[moteur de flux]** Optimisation des styles de la barre d'outils pour les onglets de page ([#7795](https://github.com/nocobase/nocobase/pull/7795)) par @zhangzhonghe

### 🐛 Corrections de bugs

- **[moteur de flux]**

  - Correction d'un problème où les variables dans les champs d'association de sous-formulaire n'étaient pas correctement résolues lorsque le champ était modifié via l'interface utilisateur. ([#7799](https://github.com/nocobase/nocobase/pull/7799)) par @gchust
  - erreur dans le formulaire d'édition pour les enregistrements à clé primaire multiple ([#7798](https://github.com/nocobase/nocobase/pull/7798)) par @gchust
  - Correction d'un problème où certaines configurations pour l'action "Ouvrir la vue" n'étaient pas appliquées, garantissant que l'action fonctionne maintenant comme prévu pour toutes les configurations spécifiées. ([#7790](https://github.com/nocobase/nocobase/pull/7790)) par @gchust
- **[client]**

  - Correction du champ sélecteur de collection incapable de sélectionner correctement la collection ([#7794](https://github.com/nocobase/nocobase/pull/7794)) par @katherinehhh
  - impossibilité de masquer la colonne d'actions du bloc de tableau ([#7804](https://github.com/nocobase/nocobase/pull/7804)) par @gchust
  - prise en charge de la sélection de l'objet variable entier dans l'invite de l'employé IA ([#7791](https://github.com/nocobase/nocobase/pull/7791)) par @gchust
- **[Utilisateurs]** Actualisation incorrecte de l'index lorsque les noms de champs utilisent le style snake_case ([#7785](https://github.com/nocobase/nocobase/pull/7785)) par @2013xile

### [v2.0.0-alpha.35](https://www.nocobase.com/en/blog/v2.0.0-alpha.35)

*Date de sortie : 2025-11-06*

### 🚀 Améliorations

- **[moteur de flux]** prise en charge de l'opération différée dans le modèle de flux ([#7786](https://github.com/nocobase/nocobase/pull/7786)) par @gchust
- **[Workflow : JavaScript]** Correction d'une vulnérabilité de sécurité causée par le passage de fonctions de niveau supérieur dans l'environnement d'exécution, empêchant l'exploitation qui pourrait donner accès au contexte d'exécution supérieur par @mytharcher

### 🐛 Corrections de bugs

- **[client]**

  - correction du problème de page suivante vide dans le bloc de détails à pagination simple ([#7784](https://github.com/nocobase/nocobase/pull/7784)) par @katherinehhh
  - correction de la largeur de l'action de tableau et de jsColumn non appliquée ([#7777](https://github.com/nocobase/nocobase/pull/7777)) par @katherinehhh
  - la portée des données du bloc ne fonctionne pas si elle est définie par le flux d'événements de la page ([#7788](https://github.com/nocobase/nocobase/pull/7788)) par @gchust
- **[Workflow]** Ajout de `workflowId` comme donnée d'identité pour les journaux du workflow ([#7789](https://github.com/nocobase/nocobase/pull/7789)) par @mytharcher
- **[Workflow : Variable personnalisée]** Correction de l'erreur levée lorsqu'aucune configuration n'est présente dans le nœud de variable par @mytharcher
- **[Gestionnaire d'emails]** la collection MailMessages ajoute des index par @jiannx
