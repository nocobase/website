---
title: "Mises à jour hebdomadaires de NocoBase : Optimisations et corrections de bugs"
description: "La mise à jour de cette semaine inclut : la prise en charge des variables personnalisées, des écouteurs d'événements de clic sur les lignes de tableau, et plus encore."
---

Résumez les journaux de mise à jour hebdomadaires du produit. Les dernières versions sont disponibles sur [notre blog](https://www.nocobase.com/en/blog/timeline).

**NocoBase est actuellement mis à jour avec trois branches : `main`, `next` et `develop`.**

![version.png](https://static-docs.nocobase.com/ba5f04e27e99c625cb3822da5df07860.png)

* `main` : La version la plus stable à ce jour, recommandée pour l'installation ;
* `next` : Version bêta, contient les nouvelles fonctionnalités à venir et a été testée préliminairement. Il peut y avoir des problèmes connus ou inconnus. Elle est principalement destinée aux utilisateurs testeurs pour recueillir des retours et optimiser davantage les fonctionnalités. Idéale pour les utilisateurs testeurs qui souhaitent découvrir les nouvelles fonctionnalités en avant-première et donner leur avis ;
* `develop` : Version alpha, contient le code de fonctionnalité le plus récent, peut être incomplète ou instable, principalement destinée au développement interne et à l'itération rapide. Adaptée aux utilisateurs techniques intéressés par les fonctionnalités de pointe du produit, mais avec des problèmes potentiels et des fonctionnalités incomplètes. Ne pas utiliser en production.

## main

![main.png](https://static-docs.nocobase.com/47a3c71734c1d0f908b51f9ebd53c0ac.png)

### [v1.8.31](https://www.nocobase.com/en/blog/v1.8.31)

*Date de sortie : 2025-10-17*

### 🐛 Corrections de bugs

- **[base de données]** Correction de l'erreur levée lorsque l'opérateur `$in` rencontre une valeur `null` ([#7610](https://github.com/nocobase/nocobase/pull/7610)) par @mytharcher
- **[Workflow : Approbation]**

  - Correction du problème de délai d'attente de transaction causé par des transactions qui ne se restaurent pas correctement lorsque des erreurs de base de données surviennent après la soumission de l'approbation par @mytharcher
  - Correction du problème où les variables ne sont pas analysées dans le formulaire de soumission d'approbation par @mytharcher

### [v1.8.30](https://www.nocobase.com/en/blog/v1.8.30)

*Date de sortie : 2025-10-16*

### 🐛 Corrections de bugs

- **[client]** Correction du problème des pop-ups d'icônes d'onglets qui sont masqués ([#7607](https://github.com/nocobase/nocobase/pull/7607)) par @zhangzhonghe

## next

![next.png](https://static-docs.nocobase.com/8ed17a0f08cc585018f6de6c8b13947d.png)

### [v1.9.0-beta.13](https://www.nocobase.com/en/blog/v1.9.0-beta.13)

*Date de sortie : 2025-10-22*

### 🚀 Améliorations

- **[client]** Afin d'obtenir un type MIME de fichier plus précis, utilisez le package `mime` pour détecter le type MIME du fichier dans le client ([#7551](https://github.com/nocobase/nocobase/pull/7551)) par @mytharcher
- **[Source de données : Principale]** Refonte de la logique de localisation des messages d'erreur, et gestion dans le plugin de gestion des erreurs ([#7582](https://github.com/nocobase/nocobase/pull/7582)) par @2013xile
- **[Workflow]** Ajout de l'option `keepBranch` lors de la suppression d'un nœud ([#7571](https://github.com/nocobase/nocobase/pull/7571)) par @mytharcher
- **[Workflow : Approbation]** Refonte de la configuration des branches pour s'adapter aux changements du noyau par @mytharcher

### 🐛 Corrections de bugs

- **[client]**

  - correction de l'erreur lors de l'effacement du champ de date dans le bloc de filtre ([#7632](https://github.com/nocobase/nocobase/pull/7632)) par @katherinehhh
  - correction de la valeur par défaut de la sous-table qui ne fonctionne pas dans le tiroir du formulaire d'édition ([#7631](https://github.com/nocobase/nocobase/pull/7631)) par @katherinehhh
  - Correction du problème où les images ne s'affichaient pas correctement lorsqu'elles étaient à la fois pivotées et mises à l'échelle lors de l'aperçu ([#7573](https://github.com/nocobase/nocobase/pull/7573)) par @mytharcher
  - Correction du problème des pop-ups d'icônes d'onglets qui sont masqués ([#7607](https://github.com/nocobase/nocobase/pull/7607)) par @zhangzhonghe
- **[base de données]** Correction de l'erreur levée lorsque l'opérateur `$in` rencontre une valeur `null` ([#7610](https://github.com/nocobase/nocobase/pull/7610)) par @mytharcher
- **[Source de données : Principale]** Correction du problème où les métadonnées n'étaient pas synchronisées sur plusieurs nœuds après la création d'un champ d'association inverse ([#7628](https://github.com/nocobase/nocobase/pull/7628)) par @mytharcher
- **[Workflow : Approbation]**

  - Correction du problème d'erreur de script de migration dû à des tables inexistantes lorsque l'application n'est pas installée par @mytharcher
  - Correction du problème de non-génération de l'ID Snowflake dû à des hooks ignorés par @mytharcher
- **[Auth : LDAP]** Correction de l'échec de liaison LDAP avec des DN non-ASCII (UTF-8) dans Active Directory par @2013xile

## develop

![develop.png](https://static-docs.nocobase.com/7fcdd9456a17286d8a439eee52bcb8d2.png)

### [v2.0.0-alpha.19](https://www.nocobase.com/en/blog/v2.0.0-alpha.19)

*Date de sortie : 2025-10-21*

### 🐛 Corrections de bugs

- **[client]**

  - Correction d'un problème où l'URL ne se mettait pas à jour correctement après avoir changé d'onglet dans une fenêtre contextuelle, rouvert une fenêtre contextuelle imbriquée, puis fermé toutes les fenêtres contextuelles. ([#7630](https://github.com/nocobase/nocobase/pull/7630)) par @gchust
  - correction de la valeur par défaut de la sous-table qui ne fonctionne pas dans le tiroir du formulaire d'édition ([#7631](https://github.com/nocobase/nocobase/pull/7631)) par @katherinehhh
  - correction de l'erreur lors de l'effacement du champ de date dans le bloc de filtre ([#7632](https://github.com/nocobase/nocobase/pull/7632)) par @katherinehhh
- **[Gestionnaire multi-applications (obsolète)]** Correction de l'impossibilité de désactiver l'ancien gestionnaire multi-applications ([#7633](https://github.com/nocobase/nocobase/pull/7633)) par @jiannx

### [v2.0.0-alpha.17](https://www.nocobase.com/en/blog/v2.0.0-alpha.17)

*Date de sortie : 2025-10-21*

### 🎉 Nouvelles fonctionnalités

- **[client]** Ajout de la prise en charge des écouteurs d'événements de clic sur les lignes du tableau, permettant aux utilisateurs d'exécuter des actions spécifiques lorsqu'une ligne du tableau est cliquée ([#7622](https://github.com/nocobase/nocobase/pull/7622)) par @zhangzhonghe
- **[Workflow : Approbation]** Exposition de la variable `approvalId` pour une utilisation à partir des déclencheurs d'approbation par @mytharcher

### 🐛 Corrections de bugs

- **[moteur de flux]** Correction du problème de non-prise en compte de la traduction dans les composants antd ([#7621](https://github.com/nocobase/nocobase/pull/7621)) par @zhangzhonghe
- **[Source de données : Principale]** Correction du problème où les métadonnées n'étaient pas synchronisées sur plusieurs nœuds après la création d'un champ d'association inverse ([#7628](https://github.com/nocobase/nocobase/pull/7628)) par @mytharcher
- **[plugin-demo-platform]** La démo prend en charge l'arrêt automatique des applications par @jiannx
- **[Multi-applications]**

  - La migration multi-applications n'émet pas de hooks par @jiannx
  - Le proxy multi-applications prend en charge le cache par @jiannx

### [v2.0.0-alpha.16](https://www.nocobase.com/en/blog/v2.0.0-alpha.16)

*Date de sortie : 2025-10-20*

### 🎉 Nouvelles fonctionnalités

- **[Brouillons de formulaires]** Brouillons de formulaires par @chenos

### 🐛 Corrections de bugs

- **[moteur de flux]** impossible d'obtenir le contexte de la vue actuelle dans le bloc de référence ([#7620](https://github.com/nocobase/nocobase/pull/7620)) par @gchust
- **[client]** gestion du contexte manquant dans usePlugin ([#7627](https://github.com/nocobase/nocobase/pull/7627)) par @chenos

### [v2.0.0-alpha.15](https://www.nocobase.com/en/blog/v2.0.0-alpha.15)

*Date de sortie : 2025-10-20*

### 🚀 Améliorations

- **[client]** prise en charge des champs d'association dans le modèle de champ JS ([#7618](https://github.com/nocobase/nocobase/pull/7618)) par @gchust
- **[Employés IA]**

  - Refonte du fournisseur LLM OpenAI en deux fournisseurs distincts pour prendre en charge les API Completions et Responses d'OpenAI. ([#7615](https://github.com/nocobase/nocobase/pull/7615)) par @cgyrock
  - Ajout d'un nouveau fournisseur LLM Ollama ([#7612](https://github.com/nocobase/nocobase/pull/7612)) par @ReLaMi96

### 🐛 Corrections de bugs

- **[Workflow : Approbation]**
  - Correction du problème où le nombre de tâches n'était pas mis à jour après l'ajout d'un assigné par @mytharcher
  - Correction du problème de délai d'attente de transaction causé par des transactions qui ne se restaurent pas correctement lorsque des erreurs de base de données surviennent après la soumission de l'approbation par @mytharcher

### [v2.0.0-alpha.14](https://www.nocobase.com/en/blog/v2.0.0-alpha.14)

*Date de sortie : 2025-10-17*

### 🚀 Améliorations

- **[Employés IA]** Optimisation du codage IA ([#7614](https://github.com/nocobase/nocobase/pull/7614)) par @cgyrock
- **[Source de données : Principale]** Refonte de la logique de localisation des messages d'erreur, et gestion dans le plugin de gestion des erreurs ([#7582](https://github.com/nocobase/nocobase/pull/7582)) par @2013xile

### 🐛 Corrections de bugs

- **[base de données]**

  - Définition du `search_path` avant d'exécuter des instructions SQL à l'aide de la méthode `runSQL` ([#7611](https://github.com/nocobase/nocobase/pull/7611)) par @2013xile
  - Correction de l'erreur levée lorsque l'opérateur `$in` rencontre une valeur `null` ([#7610](https://github.com/nocobase/nocobase/pull/7610)) par @mytharcher
- **[client]** Correction du problème des pop-ups d'icônes d'onglets qui sont masqués ([#7607](https://github.com/nocobase/nocobase/pull/7607)) par @zhangzhonghe
- **[Workflow : Approbation]** Correction du problème où les variables ne sont pas analysées dans le formulaire de soumission d'approbation par @mytharcher

### [v2.0.0-alpha.13](https://www.nocobase.com/en/blog/v2.0.0-alpha.13)

*Date de sortie : 2025-10-16*

### 🎉 Nouvelles fonctionnalités

- **[Bloc : Référence]** Ajout d'un plugin expérimental "Bloc de référence", qui permet de réutiliser des blocs existants en les référençant ou en les copiant. ([#7584](https://github.com/nocobase/nocobase/pull/7584)) par @gchust

### 🐛 Corrections de bugs

- **[Visualisation de données]** Correction du problème où le graphique ne pouvait pas être affiché en raison du délai d'attente de l'enregistrement de l'événement ([#7608](https://github.com/nocobase/nocobase/pull/7608)) par @heziqiang

### [v2.0.0-alpha.10](https://www.nocobase.com/en/blog/v2.0.0-alpha.10)

*Date de sortie : 2025-10-15*

### 🚀 Améliorations

- **[Visualisation de données]** Mise à jour du plugin-data-vi 2.0, correction de certains problèmes et optimisation de l'interface utilisateur. ([#7597](https://github.com/nocobase/nocobase/pull/7597)) par @heziqiang

### 🐛 Corrections de bugs

- **[Workflow : Approbation]** Correction du problème de non-génération de l'ID Snowflake dû à des hooks ignorés par @mytharcher

### [v2.0.0-alpha.9](https://www.nocobase.com/en/blog/v2.0.0-alpha.9)

*Date de sortie : 2025-10-15*

### 🎉 Nouvelles fonctionnalités

- **[client]** Ajout de la prise en charge des variables personnalisées ([#7585](https://github.com/nocobase/nocobase/pull/7585)) par @zhangzhonghe

### 🚀 Améliorations

- **[Employés IA]** ajout d'un bouton de réduction pour la boîte de discussion dans la disposition mobile ([#7595](https://github.com/nocobase/nocobase/pull/7595)) par @cgyrock

### 🐛 Corrections de bugs

- **[serveur]** Préservation de field.targetKey lors de la copie des champs de référence ([#7599](https://github.com/nocobase/nocobase/pull/7599)) par @chenos
- **[Employés IA]** correction du problème de disposition de la boîte de discussion dans la disposition mobile ([#7591](https://github.com/nocobase/nocobase/pull/7591)) par @cgyrock
