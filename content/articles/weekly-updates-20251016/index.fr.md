---
title: "Mises à jour hebdomadaires de NocoBase : Optimisations et corrections de bugs"
description: "La mise à jour de cette semaine inclut : Ajout de la variable \"Type d'appareil actuel\", Amélioration de la fonction de recherche web du plugin-ai"
---

Résumez les journaux de mise à jour hebdomadaires du produit. Les dernières versions sont consultables sur [notre blog](https://www.nocobase.com/en/blog/timeline).

**NocoBase est actuellement mis à jour avec trois branches : `main`, `next` et `develop`.**

![version.png](https://static-docs.nocobase.com/ba5f04e27e99c625cb3822da5df07860.png)

* `main` : La version la plus stable à ce jour, recommandée pour l'installation ;
* `next` : Version bêta, contient les nouvelles fonctionnalités à venir et a été testée préliminairement. Il peut y avoir des problèmes connus ou inconnus. Elle est principalement destinée aux utilisateurs testeurs pour recueillir des retours et optimiser davantage les fonctionnalités. Idéale pour les utilisateurs testeurs qui souhaitent découvrir les nouvelles fonctionnalités en avant-première et donner leur avis ;
* `develop` : Version alpha, contient le code de fonctionnalité le plus récent, peut être incomplète ou instable, principalement destinée au développement interne et à l'itération rapide. Adaptée aux utilisateurs techniques intéressés par les fonctionnalités de pointe du produit, mais avec des problèmes potentiels et des fonctionnalités incomplètes. Ne pas utiliser en production.

## main

![main.png](https://static-docs.nocobase.com/47a3c71734c1d0f908b51f9ebd53c0ac.png)

### [v1.8.29](https://www.nocobase.com/en/blog/v1.8.29)

*Date de sortie : 2025-10-15*

### 🚀 Améliorations

* **[Workflow : Approbation]** Refonte de la configuration des branches pour s'adapter aux changements du noyau par @mytharcher

### 🐛 Corrections de bugs

* **[Workflow : Approbation]** Correction du problème d'erreurs de script de migration dû à des tables inexistantes lorsque l'application n'est pas installée par @mytharcher

### [v1.8.28](https://www.nocobase.com/en/blog/v1.8.28)

*Date de sortie : 2025-10-14*

### 🚀 Améliorations

* **[client]** Afin d'obtenir un type MIME de fichier plus précis, utilisation du package `mime` pour détecter le type MIME du fichier dans le client ([#7551](https://github.com/nocobase/nocobase/pull/7551)) par @mytharcher
* **[Workflow]**
  * Prise en charge de la limitation du nombre maximum de nœuds dans un workflow via des variables d'environnement ([#7542](https://github.com/nocobase/nocobase/pull/7542)) par @mytharcher
  * Ajout de l'option `keepBranch` lors de la suppression d'un nœud ([#7571](https://github.com/nocobase/nocobase/pull/7571)) par @mytharcher
* **[Workflow : Nœud de boucle]** Prise en charge de la limitation du nombre maximum de cycles pour les nœuds de boucle via des variables d'environnement ([#7543](https://github.com/nocobase/nocobase/pull/7543)) par @mytharcher
* **[Workflow : Approbation]** Ajout d'un bouton d'impression dans la fenêtre contextuelle de détail des blocs d'approbation personnalisés par @mytharcher

### 🐛 Corrections de bugs

* **[client]**
  * Correction du problème où les images ne s'affichaient pas correctement lorsqu'elles étaient à la fois pivotées et redimensionnées lors de l'aperçu ([#7573](https://github.com/nocobase/nocobase/pull/7573)) par @mytharcher
  * Correction du problème où les propriétés dynamiques manquantes dans le composant `AssignedField` provoquaient des erreurs de téléchargement de fichier dans les nœuds « Créer un enregistrement » ou « Mettre à jour un enregistrement » ([#7556](https://github.com/nocobase/nocobase/pull/7556)) par @mytharcher
* **[Formulaires publics]** Correction du problème où les règles de téléchargement pour les champs de fichier dans les formulaires publics étaient incorrectes ([#7553](https://github.com/nocobase/nocobase/pull/7553)) par @mytharcher
* **[Calendrier]** Correction du problème de requête de données causé par un identifiant unique dans le bloc calendrier ([#7562](https://github.com/nocobase/nocobase/pull/7562)) par @katherinehhh
* **[Auth : LDAP]** Correction de l'échec de liaison LDAP avec des DN non-ASCII (UTF-8) dans Active Directory par @2013xile

## next

![next.png](https://static-docs.nocobase.com/8ed17a0f08cc585018f6de6c8b13947d.png)

### [v1.9.0-beta.12](https://www.nocobase.com/en/blog/v1.9.0-beta.12)

*Date de sortie : 2025-10-11*

### 🐛 Corrections de bugs

* **[serveur]** Erreur de migration de clé primaire ([#7568](https://github.com/nocobase/nocobase/pull/7568)) par @2013xile
* **[Calendrier]** Correction du problème de requête de données causé par un identifiant unique dans le bloc calendrier ([#7562](https://github.com/nocobase/nocobase/pull/7562)) par @katherinehhh

## develop

![develop.png](https://static-docs.nocobase.com/7fcdd9456a17286d8a439eee52bcb8d2.png)

### [v2.0.0-alpha.8](https://www.nocobase.com/en/blog/v2.0.0-alpha.8)

*Date de sortie : 2025-10-14*

### 🎉 Nouvelles fonctionnalités

* **[Employés IA]** Amélioration de la fonction de recherche web du plugin-ai ([#7580](https://github.com/nocobase/nocobase/pull/7580)) par @cgyrock

### 🚀 Améliorations

* **[client]** Afin d'obtenir un type MIME de fichier plus précis, utilisation du package `mime` pour détecter le type MIME du fichier dans le client ([#7551](https://github.com/nocobase/nocobase/pull/7551)) par @mytharcher
* **[moteur-de-flux]**
  * Prise en charge de la variable de fenêtre contextuelle ([#7583](https://github.com/nocobase/nocobase/pull/7583)) par @gchust
  * Amélioration de l'expérience d'édition de code avec des extraits plus riches et des complétions de code contextuelles pour divers scénarios ([#7559](https://github.com/nocobase/nocobase/pull/7559)) par @gchust
  * Standardisation des workflows automatiques pour qu'ils soient systématiquement déclenchés par l'événement « beforeRender », garantissant un fonctionnement prévisible et unifié entre les processus. ([#7577](https://github.com/nocobase/nocobase/pull/7577)) par @gchust
* **[Workflow]** Ajout de l'option `keepBranch` lors de la suppression d'un nœud ([#7571](https://github.com/nocobase/nocobase/pull/7571)) par @mytharcher
* **[Visualisation de données]** Extension des types de graphiques ; Optimisation de l'interface utilisateur et de l'expérience interactive. ([#7581](https://github.com/nocobase/nocobase/pull/7581)) par @heziqiang
* **[Workflow : Approbation]** Refonte de la configuration des branches pour s'adapter aux changements du noyau par @mytharcher

### 🐛 Corrections de bugs

* **[client]**
  * Correction des problèmes d'affichage anormal de la page lors du changement de pagination du tableau ([#7572](https://github.com/nocobase/nocobase/pull/7572)) par @zhangzhonghe
  * Impossible de configurer la valeur du champ d'affectation pour les actions `Mettre à jour` et `Mise à jour groupée` ([#7565](https://github.com/nocobase/nocobase/pull/7565)) par @gchust
  * Correction du problème où les images ne s'affichaient pas correctement lorsqu'elles étaient à la fois pivotées et redimensionnées lors de l'aperçu ([#7573](https://github.com/nocobase/nocobase/pull/7573)) par @mytharcher
* **[Workflow : Approbation]** Correction du problème d'erreurs de script de migration dû à des tables inexistantes lorsque l'application n'est pas installée par @mytharcher
* **[Auth : LDAP]** Correction de l'échec de liaison LDAP avec des DN non-ASCII (UTF-8) dans Active Directory par @2013xile

### [v2.0.0-alpha.7](https://www.nocobase.com/en/blog/v2.0.0-alpha.7)

*Date de sortie : 2025-10-13*

### 🎉 Nouvelles fonctionnalités

* **[client]** Ajout de la variable « Type d'appareil actuel » ([#7576](https://github.com/nocobase/nocobase/pull/7576)) par @zhangzhonghe

### [v2.0.0-alpha.6](https://www.nocobase.com/en/blog/v2.0.0-alpha.6)

*Date de sortie : 2025-10-11*

### 🐛 Corrections de bugs

* **[serveur]** Erreur de migration de clé primaire ([#7568](https://github.com/nocobase/nocobase/pull/7568)) par @2013xile
* **[indéfini]** La correspondance du chemin de routage prend en charge de nouvelles applications multiples ([#7570](https://github.com/nocobase/nocobase/pull/7570)) par @jiannx
* **[Employés IA]** Correction des erreurs dans l'outil de modélisation de données des employés IA lors de l'utilisation de ChatGPT-4o. ([#7566](https://github.com/nocobase/nocobase/pull/7566)) par @cgyrock
