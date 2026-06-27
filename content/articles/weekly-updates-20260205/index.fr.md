---
title: "Mises à jour hebdomadaires｜Optimisations et corrections de bugs"
description: "Ceci est un résumé des mises à jour et améliorations des fonctionnalités de NocoBase du 29 janvier au 5 février 2026."
---

Résumez les journaux de mise à jour hebdomadaires du produit. Les dernières versions sont consultables sur [notre blog](https://www.nocobase.com/en/blog/timeline).

**NocoBase est actuellement mis à jour avec trois branches : `main`, `next` et `develop`.**

![version.png](https://static-docs.nocobase.com/ba5f04e27e99c625cb3822da5df07860.png)

* `main` : La version la plus stable à ce jour, recommandée pour l'installation ;
* `next` : Version bêta, contient les nouvelles fonctionnalités à venir et a été testée préliminairement. Il peut y avoir des problèmes connus ou inconnus. Elle est principalement destinée aux utilisateurs testeurs pour recueillir des retours et optimiser davantage les fonctionnalités. Idéale pour les utilisateurs testeurs qui souhaitent découvrir les nouvelles fonctionnalités en avant-première et donner leur avis ;
* `develop` : Version alpha, contient le code des dernières fonctionnalités, peut être incomplète ou instable, principalement destinée au développement interne et à l'itération rapide. Adaptée aux utilisateurs techniques intéressés par les fonctionnalités de pointe du produit, mais avec des problèmes potentiels et des fonctionnalités incomplètes. Ne pas utiliser en production.

## main

![main.png](https://static-docs.nocobase.com/47a3c71734c1d0f908b51f9ebd53c0ac.png)

### [v1.9.42](https://www.nocobase.com/en/blog/v1.9.42)

*Date de sortie : 2026-02-02*

### 🚀 Améliorations

- **[Auth : DingTalk]** Utiliser `userid` comme clé par défaut pour l'association d'utilisateurs, tout en préservant la compatibilité avec les authentificateurs existants qui reposent sur le mobile par @2013xile

### 🐛 Corrections de bugs

- **[Workflow : Approbation]** Correction d'un problème de performance causé par le champ JSON dans le chargement des listes (MySQL) par @mytharcher
- **[WeCom]** Correction d'un problème où les utilisateurs ne pouvaient pas être automatiquement enregistrés lorsque le mobile est manquant par @2013xile

### [v1.9.41](https://www.nocobase.com/en/blog/v1.9.41)

*Date de sortie : 2026-02-02*

### 🚀 Améliorations

- **[client]** Prise en charge de la désactivation des paramètres `appends` par défaut redondants pour `ResourceActionProvider` ([#8527](https://github.com/nocobase/nocobase/pull/8527)) par @2013xile

### 🐛 Corrections de bugs

- **[Workflow]** Ajout d'une tolérance aux pannes pour le composant de sélection d'enregistrement de collection, afin d'éviter une erreur lorsque la collection est supprimée ([#8528](https://github.com/nocobase/nocobase/pull/8528)) par @mytharcher
- **[Gestionnaire de fichiers]** Sécurisation du chemin des fichiers pour le stockage local, afin d'éviter un chemin d'accès en dehors de la racine du document ([#8539](https://github.com/nocobase/nocobase/pull/8539)) par @mytharcher
- **[Workflow : Sous-flux]** Correction du chemin de route du lien de workflow par @mytharcher

## next

![next.png](https://static-docs.nocobase.com/8ed17a0f08cc585018f6de6c8b13947d.png)

### [v2.0.0-beta.19](https://www.nocobase.com/en/blog/v2.0.0-beta.19)

*Date de sortie : 2026-02-05*

### 🎉 Nouvelles fonctionnalités

- **[Auth : DingTalk]** Permet de lier l'utilisateur avec `unionId` par @2013xile

### 🚀 Améliorations

- **[client]** Ajustement du réglage de la largeur des colonnes à une sélection déroulante dans le sous-tableau éditable en ligne ([#8561](https://github.com/nocobase/nocobase/pull/8561)) par @katherinehhh
- **[Champ de collection : Markdown(Vditor)]** Ajout d'une option de configuration pour définir le mode d'édition par défaut dans les paramètres du composant. ([#8408](https://github.com/nocobase/nocobase/pull/8408)) par @Cyx649312038
- **[Multi-espace]** Contrôle des permissions multi-espace accède à l'ACL par @jiannx
- **[IA : Base de connaissances]** Optimisation de la sortie de construction pour réduire la taille du paquet plugin-ai-knowledge-base. par @cgyrock

### 🐛 Corrections de bugs

- **[client]**

  - Correction d'un problème où l'utilisation de la "Création rapide" du sélecteur d'enregistrement d'association dans le formulaire d'édition écrasait les données existantes du formulaire. ([#8567](https://github.com/nocobase/nocobase/pull/8567)) par @gchust
  - Correction des problèmes d'espace vide dans la disposition en grille ([#8535](https://github.com/nocobase/nocobase/pull/8535)) par @zhangzhonghe
  - Correction de la nécessité d'actualiser la page pour ajouter un enregistrement enfant après avoir activé le tableau arborescent ([#8574](https://github.com/nocobase/nocobase/pull/8574)) par @katherinehhh
  - Correction de la largeur de colonne qui ne se mettait pas à jour dans le sous-tableau (édition en ligne) ; la saisie de texte multiligne ne se redimensionnait pas avec la largeur de colonne ([#8573](https://github.com/nocobase/nocobase/pull/8573)) par @katherinehhh
  - Correction d'un problème où le menu "Formulaire (Ajouter nouveau)" était incorrectement affiché dans la fenêtre contextuelle de l'action "Créer nouveau". ([#8562](https://github.com/nocobase/nocobase/pull/8562)) par @gchust
- **[moteur-de-flux]**

  - Correction d'un problème où certaines bibliothèques tierces ne pouvaient pas être importées correctement dans les blocs JS. ([#8545](https://github.com/nocobase/nocobase/pull/8545)) par @gchust
  - Correction d'un problème où la soumission du formulaire après avoir changé de page ne rafraîchissait pas la page. ([#8554](https://github.com/nocobase/nocobase/pull/8554)) par @gchust
- **[Modèles d'interface utilisateur]** Correction d'une erreur lors de la réouverture et de la soumission d'un modèle de popup enregistré pour le formulaire "Ajouter nouveau" du champ d'association. ([#8564](https://github.com/nocobase/nocobase/pull/8564)) par @gchust
- **[Champ de collection : Pièce jointe (URL)]** Correction du problème de non-fonctionnement de la configuration d'affichage du nom de fichier du champ URL de pièce jointe dans le formulaire d'édition ([#8571](https://github.com/nocobase/nocobase/pull/8571)) par @katherinehhh
- **[Employés IA]** Correction d'un problème où le nœud LLM ne parvenait pas à envoyer des messages ([#8569](https://github.com/nocobase/nocobase/pull/8569)) par @2013xile
- **[Action : Importer des enregistrements]** Correction de la vulnérabilité de l'action d'importation ([#8544](https://github.com/nocobase/nocobase/pull/8544)) par @mytharcher
- **[Workflow : Événement d'action personnalisée]** Correction du problème où les paramètres et la charge utile étaient incorrects lors du déclenchement d'un workflow personnalisé par @mytharcher
- **[Multi-espace]**

  - ajout d'un script de migration pour supprimer x-ready-pretty dans le champ espace par @jiannx
  - suppression de l'attribut read-pretty pour le champ espace par @jiannx
- **[Workflow : Approbation]** Correction d'un problème de performance causé par le champ JSON dans le chargement des listes (MySQL) par @mytharcher

### [v2.0.0-beta.18](https://www.nocobase.com/en/blog/v2.0.0-beta.18)

*Date de sortie : 2026-02-02*

### 🎉 Nouvelles fonctionnalités

- **[moteur-de-flux]** prise en charge de env.ESM_CDN_BASE_URL ([#8529](https://github.com/nocobase/nocobase/pull/8529)) par @chenos

### 🚀 Améliorations

- **[acl]** acl ajoute la méthode generalFixedParams ([#8363](https://github.com/nocobase/nocobase/pull/8363)) par @jiannx
- **[client]** Prise en charge de la désactivation des paramètres `appends` par défaut redondants pour `ResourceActionProvider` ([#8527](https://github.com/nocobase/nocobase/pull/8527)) par @2013xile
- **[Auth : DingTalk]** Utiliser `userid` comme clé par défaut pour l'association d'utilisateurs, tout en préservant la compatibilité avec les authentificateurs existants qui reposent sur le mobile par @2013xile

### 🐛 Corrections de bugs

- **[client]**

  - Correction d'un problème où le flux d'événements ne s'appliquait pas lors du rafraîchissement des blocs cibles à travers une popup. ([#8541](https://github.com/nocobase/nocobase/pull/8541)) par @gchust
  - Correction d'un problème où les données de la page étaient incorrectement rafraîchies après l'ouverture et la fermeture de la popup pour la première fois. ([#8548](https://github.com/nocobase/nocobase/pull/8548)) par @gchust
  - Correction d'un problème qui provoquait le rafraîchissement répété du bloc de données après la soumission d'un formulaire. ([#8531](https://github.com/nocobase/nocobase/pull/8531)) par @gchust
  - correction du champ nanoid qui ne régénérait pas la valeur par défaut après la soumission de la création ([#8538](https://github.com/nocobase/nocobase/pull/8538)) par @katherinehhh
  - correction d'un affichage incorrect lors du réglage des valeurs par défaut pour le modèle de champ en cascade ([#8537](https://github.com/nocobase/nocobase/pull/8537)) par @katherinehhh
- **[moteur-de-flux]** Correction du chargement incorrect de certaines bibliothèques ESM dans runjs en raison d'une classification erronée en tant que modules AMD. ([#8536](https://github.com/nocobase/nocobase/pull/8536)) par @gchust
- **[Gestionnaire de fichiers]** Sécurisation du chemin des fichiers pour le stockage local, afin d'éviter un chemin d'accès en dehors de la racine du document ([#8539](https://github.com/nocobase/nocobase/pull/8539)) par @mytharcher
- **[Workflow]** Ajout d'une tolérance aux pannes pour le composant de sélection d'enregistrement de collection, afin d'éviter une erreur lorsque la collection est supprimée ([#8528](https://github.com/nocobase/nocobase/pull/8528)) par @mytharcher
- **[Employés IA]** Correction de l'exception qui se produit lorsque les outils sont appelés automatiquement lors de la modélisation des données IA ([#8532](https://github.com/nocobase/nocobase/pull/8532)) par @cgyrock
- **[Action : Importer des enregistrements Pro]** Correction des nombres de comptage dans le résultat d'importation et de la traduction des messages par @mytharcher
- **[Workflow : Sous-flux]** Correction du chemin de route du lien de workflow par @mytharcher
- **[Impression de modèle]** correction d'un problème d'affichage de la liste des champs dans la configuration de l'action d'impression de modèle par @katherinehhh
- **[Workflow : Approbation]**

  - Correction d'une erreur lors de l'ajout d'un rôle à un utilisateur si le workflow des audiences est désactivé par @mytharcher
  - Ajout d'une tolérance aux pannes lors de la suppression du workflow, pour éviter une erreur de chargement dans la liste des tâches par @mytharcher
- **[WeCom]** Correction d'un problème où les utilisateurs ne pouvaient pas être automatiquement enregistrés lorsque le mobile est manquant par @2013xile
