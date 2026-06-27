---
title: "Mises à jour hebdomadaires de NocoBase : Optimisation de la logique de sauvegarde des tâches"
description: "Les mises à jour de cette semaine incluent : prise en charge de la recherche de champs dans le composant Filtre, prise en charge des variables globales dans la configuration de stockage, et plus encore."
---

Résumez les journaux de mise à jour hebdomadaires du produit. Les dernières versions sont disponibles sur [notre blog](https://www.nocobase.com/en/blog/timeline).

**NocoBase est actuellement mis à jour avec trois branches : `main`, `next` et `develop`.**

![version.png](https://static-docs.nocobase.com/ba5f04e27e99c625cb3822da5df07860.png)

* `main` : La version la plus stable à ce jour, recommandée pour l'installation ;
* `next` : Version bêta, contient les nouvelles fonctionnalités à venir et a été testée préliminairement. Il peut y avoir des problèmes connus ou inconnus. Elle est principalement destinée aux utilisateurs testeurs pour recueillir des retours et optimiser davantage les fonctionnalités. Idéale pour les utilisateurs testeurs qui souhaitent découvrir les nouvelles fonctionnalités en avant-première et donner leur avis ;
* `develop` : Version alpha, contient le code des dernières fonctionnalités, peut être incomplète ou instable, principalement destinée au développement interne et à l'itération rapide. Adaptée aux utilisateurs techniques intéressés par les fonctionnalités de pointe du produit, mais avec des problèmes potentiels et des fonctions incomplètes. Ne convient pas à une utilisation en production.

## main

![main.png](https://static-docs.nocobase.com/47a3c71734c1d0f908b51f9ebd53c0ac.png)

### [v1.6.16](https://www.nocobase.com/en/blog/v1.6.16)

*Date de sortie : 2025-04-03*

#### 🐛 Corrections de bugs

- **[client]**

  - La propriété x-disabled n'a pas d'effet sur les champs de formulaire ([#6610](https://github.com/nocobase/nocobase/pull/6610)) par @katherinehhh
  - Problème d'affichage des étiquettes de champ pour éviter la troncature par les deux-points ([#6599](https://github.com/nocobase/nocobase/pull/6599)) par @katherinehhh
- **[base de données]** Lors de la suppression d'enregistrements un-à-plusieurs, `filter` et `filterByTk` sont tous deux transmis et `filter` inclut un champ d'association, le `filterByTk` est ignoré ([#6606](https://github.com/nocobase/nocobase/pull/6606)) par @2013xile

### [v1.6.17](https://www.nocobase.com/en/blog/v1.6.17)

*Date de sortie : 2025-04-09*

#### 🚀 Améliorations

- **[utils]** Ajout d'une extension de durée pour dayjs ([#6630](https://github.com/nocobase/nocobase/pull/6630)) par @mytharcher
- **[client]**

  - Prise en charge de la recherche de champ dans le composant Filtre ([#6627](https://github.com/nocobase/nocobase/pull/6627)) par @mytharcher
  - Ajout de l'API `trim` pour `Input` et `Variable.TextArea` ([#6624](https://github.com/nocobase/nocobase/pull/6624)) par @mytharcher
- **[Gestionnaire d'erreurs]** Prise en charge d'un titre personnalisé dans le composant AppError. ([#6409](https://github.com/nocobase/nocobase/pull/6409)) par @sheldon66
- **[Restriction IP]** Mise à jour du contenu du message de restriction IP. par @sheldon66
- **[Stockage de fichiers : S3(Pro)]** Prise en charge des variables globales dans la configuration de stockage par @mytharcher

#### 🐛 Corrections de bugs

- **[client]**

  - La règle avec la condition 'any' ne prend pas effet lorsque la liste de conditions est vide ([#6628](https://github.com/nocobase/nocobase/pull/6628)) par @katherinehhh
  - Problème de données avec le bloc Gantt dans la collection arborescente ([#6617](https://github.com/nocobase/nocobase/pull/6617)) par @katherinehhh
  - Les champs de relation dans le formulaire de filtre signalent une erreur après l'actualisation de la page car x-data-source n'est pas transporté ([#6619](https://github.com/nocobase/nocobase/pull/6619)) par @zhangzhonghe
  - Échec de l'analyse de la variable lorsque les paramètres d'URL contiennent des caractères chinois ([#6618](https://github.com/nocobase/nocobase/pull/6618)) par @katherinehhh
- **[Utilisateurs]** Problème d'analyse du schéma du formulaire de profil utilisateur ([#6635](https://github.com/nocobase/nocobase/pull/6635)) par @2013xile
- **[Mobile]** Le champ à sélection unique avec le filtre 'contains' sur mobile ne prend pas en charge la sélection multiple ([#6629](https://github.com/nocobase/nocobase/pull/6629)) par @katherinehhh
- **[Action : Exporter les enregistrements]** Paramètres de filtre manquants lors de l'exportation des données après avoir changé la pagination ([#6633](https://github.com/nocobase/nocobase/pull/6633)) par @katherinehhh
- **[Gestionnaire d'e-mails]** Correction de l'autorisation de gestion des e-mails qui ne permettait pas d'afficher la liste des e-mails par @jiannx
- **[Stockage de fichiers : S3(Pro)]** Envoi d'une erreur à l'utilisateur lors du téléchargement du logo vers le stockage S3 Pro (défini par défaut) par @mytharcher
- **[Workflow : Approbation]** Correction de `updatedAt` modifié après la migration par @mytharcher
- **[Gestionnaire de migration]** L'heure de création du journal de migration s'affiche incorrectement dans certains environnements par @gchust

## next

![next.png](https://static-docs.nocobase.com/8ed17a0f08cc585018f6de6c8b13947d.png)

### [v1.7.0-beta.14](https://www.nocobase.com/en/blog/v1.7.0-beta.14)

*Date de sortie : 2025-04-09*

#### 🎉 Nouvelles fonctionnalités

- **[Stockage de schéma UI]** Ajout d'un module de localisation pour UISchema, permettant des traductions personnalisées pour le titre et la description du schéma ([#6574](https://github.com/nocobase/nocobase/pull/6574)) par @chenos

#### 🚀 Améliorations

- **[utils]** Ajout d'une extension de durée pour dayjs ([#6630](https://github.com/nocobase/nocobase/pull/6630)) par @mytharcher
- **[client]**

  - Prise en charge de la recherche de champ dans le composant Filtre ([#6627](https://github.com/nocobase/nocobase/pull/6627)) par @mytharcher
  - Ajout de l'API `trim` pour `Input` et `Variable.TextArea` ([#6624](https://github.com/nocobase/nocobase/pull/6624)) par @mytharcher
- **[Workflow]** Optimisation de la logique de sauvegarde des tâches ([#6613](https://github.com/nocobase/nocobase/pull/6613)) par @mytharcher
- **[Gestionnaire d'erreurs]** Prise en charge d'un titre personnalisé dans le composant AppError. ([#6409](https://github.com/nocobase/nocobase/pull/6409)) par @sheldon66
- **[Restriction IP]** Mise à jour du contenu du message de restriction IP. par @sheldon66
- **[Stockage de fichiers : S3(Pro)]** Prise en charge des variables globales dans la configuration de stockage par @mytharcher

#### 🐛 Corrections de bugs

- **[client]**

  - Les champs de relation dans le formulaire de filtre signalent une erreur après l'actualisation de la page car x-data-source n'est pas transporté ([#6619](https://github.com/nocobase/nocobase/pull/6619)) par @zhangzhonghe
  - Problème de données avec le bloc Gantt dans la collection arborescente ([#6617](https://github.com/nocobase/nocobase/pull/6617)) par @katherinehhh
  - Zone blanche entre le titre de la page de configuration du modèle de bloc et le menu ([#6625](https://github.com/nocobase/nocobase/pull/6625)) par @gchust
  - La règle avec la condition 'any' ne prend pas effet lorsque la liste de conditions est vide ([#6628](https://github.com/nocobase/nocobase/pull/6628)) par @katherinehhh
  - La propriété x-disabled n'a pas d'effet sur les champs de formulaire ([#6610](https://github.com/nocobase/nocobase/pull/6610)) par @katherinehhh
  - Échec de l'analyse de la variable lorsque les paramètres d'URL contiennent des caractères chinois ([#6618](https://github.com/nocobase/nocobase/pull/6618)) par @katherinehhh
  - Problème d'affichage des étiquettes de champ pour éviter la troncature par les deux-points ([#6599](https://github.com/nocobase/nocobase/pull/6599)) par @katherinehhh
- **[Action : Exporter les enregistrements]** Paramètres de filtre manquants lors de l'exportation des données après avoir changé la pagination ([#6633](https://github.com/nocobase/nocobase/pull/6633)) par @katherinehhh
- **[Utilisateurs]** Problème d'analyse du schéma du formulaire de profil utilisateur ([#6635](https://github.com/nocobase/nocobase/pull/6635)) par @2013xile
- **[Mobile]** Le champ à sélection unique avec le filtre 'contains' sur mobile ne prend pas en charge la sélection multiple ([#6629](https://github.com/nocobase/nocobase/pull/6629)) par @katherinehhh
- **[Contrôle d'accès]** Correction de la logique de calcul de l'union des rôles ([#6605](https://github.com/nocobase/nocobase/pull/6605)) par @aaaaaajie
- **[Bloc : modèle]** La modification et la suppression des mêmes champs à partir du modèle et du bloc, après la création d'un bloc à partir du modèle, peuvent provoquer des erreurs de rendu ([#6626](https://github.com/nocobase/nocobase/pull/6626)) par @gchust
- **[Gestionnaire d'e-mails]**

  - Correction de l'absence de await pour l'appel suivant. par @jiannx
  - Correction de l'autorisation de gestion des e-mails qui ne permettait pas d'afficher la liste des e-mails par @jiannx
- **[Stockage de fichiers : S3(Pro)]**

  - Correction de l'absence de await pour l'appel suivant. par @jiannx
  - Envoi d'une erreur à l'utilisateur lors du téléchargement du logo vers le stockage S3 Pro (défini par défaut) par @mytharcher
- **[Workflow : Approbation]** Correction de `updatedAt` modifié après la migration par @mytharcher
- **[Gestionnaire de migration]** L'heure de création du journal de migration s'affiche incorrectement dans certains environnements par @gchust
