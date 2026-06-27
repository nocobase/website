---
title: "Mises à jour hebdomadaires de NocoBase : Optimisation des colonnes et des opérations du bloc tableau"
description: "Les mises à jour de cette semaine incluent : la possibilité de masquer la colonne d'index dans les blocs tableau, la configuration des options de champ sélectionnables dans les règles de liaison, et plus encore."
---

Résumez les journaux de mise à jour hebdomadaires du produit. Les dernières versions sont disponibles sur [notre blog](https://www.nocobase.com/en/blog/timeline).

**NocoBase est actuellement mis à jour avec trois branches : `main`, `next` et `develop`.**

![version.png](https://static-docs.nocobase.com/ba5f04e27e99c625cb3822da5df07860.png)

* `main` : La version la plus stable à ce jour, recommandée pour l'installation ;
* `next` : Version bêta, contient les nouvelles fonctionnalités à venir et a été testée préliminairement. Il peut y avoir des problèmes connus ou inconnus. Elle est principalement destinée aux utilisateurs testeurs pour recueillir des retours et optimiser davantage les fonctions. Idéale pour les utilisateurs testeurs qui souhaitent découvrir les nouvelles fonctionnalités en avant-première et donner leur avis ;
* `develop` : Version alpha, contient le code de fonctionnalité le plus récent, peut être incomplète ou instable, principalement destinée au développement interne et à l'itération rapide. Adaptée aux utilisateurs techniques intéressés par les fonctionnalités de pointe du produit, mais avec des problèmes potentiels et des fonctions incomplètes. Ne convient pas à une utilisation en production.

## main

![main.png](https://static-docs.nocobase.com/47a3c71734c1d0f908b51f9ebd53c0ac.png)

### [v1.6.2](https://www.nocobase.com/en/blog/v1.6.2)

*Date de sortie : 2025-03-12*

#### 🐛 Corrections de bugs

- **[client]** La sélection de plage de dates pour le champ de date exclut la date maximale ([#6418](https://github.com/nocobase/nocobase/pull/6418)) par @katherinehhh
- **[Notification : Message dans l'application]** Éviter qu'une configuration de destinataires incorrecte interroge tous les utilisateurs ([#6424](https://github.com/nocobase/nocobase/pull/6424)) par @sheldon66
- **[Workflow : Nœud manuel]**

  - Correction de la migration qui manquait le préfixe de table et la logique de schéma ([#6425](https://github.com/nocobase/nocobase/pull/6425)) par @mytharcher
  - Modification de la limite de version de la migration à `<1.7.0` ([#6430](https://github.com/nocobase/nocobase/pull/6430)) par @mytharcher

### [v1.6.3](https://www.nocobase.com/en/blog/v1.6.3)

*Date de sortie : 2025-03-14*

#### 🎉 Nouvelles fonctionnalités

- **[WeCom]** Permet de définir une info-bulle personnalisée pour le bouton de connexion par @2013xile

#### 🐛 Corrections de bugs

- **[client]**

  - Correction d'un caractère spécial dans l'URL de l'image qui empêchait son affichage ([#6459](https://github.com/nocobase/nocobase/pull/6459)) par @mytharcher
  - Numéro de page incorrect lors de l'ajout de données après un changement de taille de page de sous-tableau ([#6437](https://github.com/nocobase/nocobase/pull/6437)) par @katherinehhh
  - Le style du logo est incohérent avec le précédent ([#6444](https://github.com/nocobase/nocobase/pull/6444)) par @zhangzhonghe
- **[Workflow : Nœud manuel]** Correction d'une erreur levée lors de la migration ([#6445](https://github.com/nocobase/nocobase/pull/6445)) par @mytharcher
- **[Visualisation de données]** Les champs supprimés apparaissent lors de l'ajout de champs de filtre personnalisés ([#6450](https://github.com/nocobase/nocobase/pull/6450)) par @2013xile
- **[Gestionnaire de fichiers]** Correction de quelques problèmes du gestionnaire de fichiers ([#6436](https://github.com/nocobase/nocobase/pull/6436)) par @mytharcher
- **[Action : Requête personnalisée]** Erreur de validation des permissions côté serveur pour la requête personnalisée ([#6438](https://github.com/nocobase/nocobase/pull/6438)) par @katherinehhh
- **[Gestionnaire de sources de données]** Le changement de source de données dans la gestion des rôles ne charge pas les collections correspondantes ([#6431](https://github.com/nocobase/nocobase/pull/6431)) par @katherinehhh
- **[Action : Modification par lot]** Correction du déclenchement du workflow lors de la soumission d'une modification par lot ([#6440](https://github.com/nocobase/nocobase/pull/6440)) par @mytharcher
- **[Workflow : Événement d'action personnalisée]** Suppression de `only` dans le cas de test E2E par @mytharcher
- **[Workflow : Approbation]**

  - Correction de l'affichage des données d'association dans le formulaire d'approbation par @mytharcher
  - Correction d'une erreur levée lors de l'approbation sur une source de données externe par @mytharcher

### [v1.6.4](https://www.nocobase.com/en/blog/v1.6.4)

*Date de sortie : 2025-03-15*

#### 🎉 Nouvelles fonctionnalités

- **[client]** Ajout d'un paramètre de portée de données pour le composant de sélection en cascade ([#6386](https://github.com/nocobase/nocobase/pull/6386)) par @Cyx649312038

#### 🚀 Améliorations

- **[utils]** Déplacement de `md5` vers utils ([#6468](https://github.com/nocobase/nocobase/pull/6468)) par @mytharcher

#### 🐛 Corrections de bugs

- **[client]** Dans le bloc arborescent, lorsque décoché, les données dans le bloc de données ne sont pas effacées ([#6460](https://github.com/nocobase/nocobase/pull/6460)) par @zhangzhonghe
- **[Gestionnaire de fichiers]** Impossible de supprimer les fichiers stockés dans S3. ([#6467](https://github.com/nocobase/nocobase/pull/6467)) par @chenos
- **[Workflow]** Suppression du bouton de paramètres de liaison de workflow du sélecteur de données ([#6455](https://github.com/nocobase/nocobase/pull/6455)) par @mytharcher
- **[Stockage de fichiers : S3(Pro)]** Résolution du problème d'URL signées S3 Pro inaccessibles par @chenos
- **[Workflow : Approbation]** Éviter le crash de la page lorsqu'aucun demandeur n'est présent dans la table du processus d'approbation par @mytharcher

### [v1.6.5](https://www.nocobase.com/en/blog/v1.6.5)

*Date de sortie : 2025-03-17*

#### 🚀 Améliorations

- **[Gestionnaire de fichiers]** Simplification de la logique de génération d'URL de fichier et de l'API ([#6472](https://github.com/nocobase/nocobase/pull/6472)) par @mytharcher
- **[Stockage de fichiers : S3(Pro)]** Passage à une méthode simple pour générer l'URL du fichier par @mytharcher
- **[Gestionnaire de sauvegardes]** Permet la restauration de sauvegarde entre une version préliminaire et une version finale de la même version par @gchust

#### 🐛 Corrections de bugs

- **[client]**

  - Le champ de texte enrichi n'efface pas les données lors de la soumission ([#6486](https://github.com/nocobase/nocobase/pull/6486)) par @katherinehhh
  - La couleur des icônes dans le coin supérieur droit de la page ne change pas avec le thème ([#6482](https://github.com/nocobase/nocobase/pull/6482)) par @zhangzhonghe
  - Cliquer sur le bouton de réinitialisation du formulaire de filtre ne peut pas effacer les conditions de filtrage du bloc de carte en grille ([#6475](https://github.com/nocobase/nocobase/pull/6475)) par @zhangzhonghe
- **[Workflow : Nœud manuel]**

  - Correction de la migration ([#6484](https://github.com/nocobase/nocobase/pull/6484)) par @mytharcher
  - Changement du nom de la migration pour garantir la réexécution ([#6487](https://github.com/nocobase/nocobase/pull/6487)) par @mytharcher
  - Correction du champ de titre du workflow dans le filtre ([#6480](https://github.com/nocobase/nocobase/pull/6480)) par @mytharcher
  - Correction d'une erreur de migration lorsque la colonne id n'existe pas ([#6470](https://github.com/nocobase/nocobase/pull/6470)) par @chenos
  - Éviter la synchronisation de la collection à partir des champs ([#6478](https://github.com/nocobase/nocobase/pull/6478)) par @mytharcher
- **[Workflow : Nœud d'agrégation]** Correction de l'arrondi sur un résultat nul ([#6473](https://github.com/nocobase/nocobase/pull/6473)) par @mytharcher
- **[Workflow]** Ne pas compter les tâches lorsque le workflow est supprimé ([#6474](https://github.com/nocobase/nocobase/pull/6474)) par @mytharcher
- **[Gestionnaire de sauvegardes]** Impossible de démarrer le serveur lorsque les paramètres de sauvegarde par défaut sont manquants par @gchust
- **[Workflow : Approbation]**

  - Correction d'une erreur de champ d'association de fichier dans le formulaire de processus par @mytharcher
  - Correction du comptage des tâches basé sur les hooks par @mytharcher

### [v1.6.6](https://www.nocobase.com/en/blog/v1.6.6)

*Date de sortie : 2025-03-18*

#### 🎉 Nouvelles fonctionnalités

- **[client]** Prise en charge des champs de texte long comme champs de titre pour les champs d'association ([#6495](https://github.com/nocobase/nocobase/pull/6495)) par @katherinehhh
- **[Workflow : Nœud d'agrégation]** Prise en charge de la configuration de la précision pour le résultat d'agrégation ([#6491](https://github.com/nocobase/nocobase/pull/6491)) par @mytharcher

#### 🚀 Améliorations

- **[Stockage de fichiers : S3(Pro)]** Changement du texte 'Access URL Base' en 'Base URL' par @zhangzhonghe

#### 🐛 Corrections de bugs

- **[évaluateurs]** Revenir à 9 décimales pour l'arrondi ([#6492](https://github.com/nocobase/nocobase/pull/6492)) par @mytharcher
- **[Gestionnaire de fichiers]** Encoder l'URL ([#6497](https://github.com/nocobase/nocobase/pull/6497)) par @chenos
- **[Source de données : Principale]** Impossible de créer une vue MySQL. ([#6477](https://github.com/nocobase/nocobase/pull/6477)) par @aaaaaajie
- **[Workflow]** Correction du comptage des tâches héritées après la suppression du workflow ([#6493](https://github.com/nocobase/nocobase/pull/6493)) par @mytharcher
- **[Intégrer NocoBase]** La page affiche un écran blanc par @zhangzhonghe
- **[Gestionnaire de sauvegardes]**

  - Les fichiers téléchargés n'ont pas été restaurés lors de la création d'une sous-application à partir d'un modèle de sauvegarde par @gchust
  - Échec de la restauration de la base de données MySQL causé par un chevauchement d'ensembles GTID par @gchust
- **[Workflow : Approbation]**

  - Modification du retour de l'approbation en tant que tâche à faire par @mytharcher
  - Correction du bouton d'action manquant dans la table de processus par @mytharcher

## next

![next.png](https://static-docs.nocobase.com/8ed17a0f08cc585018f6de6c8b13947d.png)

### [v1.7.0-beta.2](https://www.nocobase.com/en/blog/v1.7.0-beta.2)

*Date de sortie : 2025-03-13*

#### 🎉 Nouvelles fonctionnalités

- **[client]**

  - Le bloc de tableau prend en charge le masquage de la colonne d'index (visible par défaut) ([#6416](https://github.com/nocobase/nocobase/pull/6416)) par @katherinehhh
  - Prise en charge de la configuration des options de champ sélectionnables dans les règles de liaison ([#6338](https://github.com/nocobase/nocobase/pull/6338)) par @katherinehhh
  - Prise en charge de la configuration de la plage de dates (min/max) pour les champs de temps dans les règles de liaison ([#6356](https://github.com/nocobase/nocobase/pull/6356)) par @katherinehhh
- **[Bloc : Panneau d'actions]** Prise en charge du saut de ligne pour le titre de l'action dans le panneau d'actions ([#6433](https://github.com/nocobase/nocobase/pull/6433)) par @katherinehhh

#### 🐛 Corrections de bugs

- **[client]**

  - Numéro de page incorrect lors de l'ajout de données après un changement de taille de page de sous-tableau ([#6437](https://github.com/nocobase/nocobase/pull/6437)) par @katherinehhh
  - Le style du logo est incohérent avec le précédent ([#6444](https://github.com/nocobase/nocobase/pull/6444)) par @zhangzhonghe
  - Changement de valeur du champ à sélection multiple et perte d'options lors de la suppression d'enregistrements de sous-tableau ([#6405](https://github.com/nocobase/nocobase/pull/6405)) par @katherinehhh
  - La sélection de plage de dates pour le champ de date exclut la date maximale ([#6418](https://github.com/nocobase/nocobase/pull/6418)) par @katherinehhh
  - Lors de l'utilisation de l'opérateur '$anyOf', la règle de liaison est invalide ([#6415](https://github.com/nocobase/nocobase/pull/6415)) par @zhangzhonghe
  - Données non mises à jour dans les fenêtres contextuelles ouvertes via les boutons Lien ([#6411](https://github.com/nocobase/nocobase/pull/6411)) par @zhangzhonghe
- **[Action : Modification par lot]** Correction du déclenchement du workflow lors de la soumission d'une modification par lot ([#6440](https://github.com/nocobase/nocobase/pull/6440)) par @mytharcher
- **[Visualisation de données]** Les champs supprimés apparaissent lors de l'ajout de champs de filtre personnalisés ([#6450](https://github.com/nocobase/nocobase/pull/6450)) par @2013xile
- **[Gestionnaire de sources de données]** Le changement de source de données dans la gestion des rôles ne charge pas les collections correspondantes ([#6431](https://github.com/nocobase/nocobase/pull/6431)) par @katherinehhh
- **[Action : Requête personnalisée]** Erreur de validation des permissions côté serveur pour la requête personnalisée ([#6438](https://github.com/nocobase/nocobase/pull/6438)) par @katherinehhh
- **[Gestionnaire de fichiers]** Correction de quelques problèmes du gestionnaire de fichiers ([#6436](https://github.com/nocobase/nocobase/pull/6436)) par @mytharcher
- **[Notification : Message dans l'application]**

  - Éviter qu'une configuration de destinataires incorrecte interroge tous les utilisateurs ([#6424](https://github.com/nocobase/nocobase/pull/6424)) par @sheldon66
  - Différencier la couleur d'arrière-plan de la liste des messages dans l'application de celle des cartes de message pour améliorer la hiérarchie visuelle et la lisibilité. ([#6417](https://github.com/nocobase/nocobase/pull/6417)) par @sheldon66
- **[Workflow : Nœud manuel]**

  - Modification de la limite de version de la migration à `<1.7.0` ([#6430](https://github.com/nocobase/nocobase/pull/6430)) par @mytharcher
  - Correction de la migration qui manquait le préfixe de table et la logique de schéma ([#6425](https://github.com/nocobase/nocobase/pull/6425)) par @mytharcher

### [v1.7.0-beta.3](https://www.nocobase.com/en/blog/v1.7.0-beta.3)

*Date de sortie : 2025-03-14*

#### 🎉 Nouvelles fonctionnalités

- **[WeCom]** Permet de définir une info-bulle personnalisée pour le bouton de connexion par @2013xile

#### 🚀 Améliorations

- **[Visualisation de données]** Remplacement du `x-designer` obsolète par `x-settings` ([#6442](https://github.com/nocobase/nocobase/pull/6442)) par @2013xile

#### 🐛 Corrections de bugs

- **[client]** Correction d'un caractère spécial dans l'URL de l'image qui empêchait son affichage ([#6459](https://github.com/nocobase/nocobase/pull/6459)) par @mytharcher
- **[Workflow : Nœud manuel]** Correction d'une erreur levée lors de la migration ([#6445](https://github.com/nocobase/nocobase/pull/6445)) par @mytharcher
- **[Workflow : Événement d'action personnalisée]** Suppression de `only` dans le cas de test E2E par @mytharcher
- **[Workflow : Approbation]**

  - Correction d'une erreur levée lors de l'approbation sur une source de données externe par @mytharcher
  - Correction de l'affichage des données d'association dans le formulaire d'approbation par @mytharcher

### [v1.7.0-beta.4](https://www.nocobase.com/en/blog/v1.7.0-beta.4)

*Date de sortie : 2025-03-15*

#### 🎉 Nouvelles fonctionnalités

- **[client]** Ajout d'un paramètre de portée de données pour le composant de sélection en cascade ([#6386](https://github.com/nocobase/nocobase/pull/6386)) par @Cyx649312038

#### 🚀 Améliorations

- **[utils]** Déplacement de `md5` vers utils ([#6468](https://github.com/nocobase/nocobase/pull/6468)) par @mytharcher

#### 🐛 Corrections de bugs

- **[client]** Dans le bloc arborescent, lorsque décoché, les données dans le bloc de données ne sont pas effacées ([#6460](https://github.com/nocobase/nocobase/pull/6460)) par @zhangzhonghe
- **[Gestionnaire de fichiers]** Impossible de supprimer les fichiers stockés dans S3. ([#6467](https://github.com/nocobase/nocobase/pull/6467)) par @chenos
- **[Workflow]** Suppression du bouton de paramètres de liaison de workflow du sélecteur de données ([#6455](https://github.com/nocobase/nocobase/pull/6455)) par @mytharcher
- **[Stockage de fichiers : S3(Pro)]** Résolution du problème d'URL signées S3 Pro inaccessibles par @chenos
- **[Workflow : Approbation]** Éviter le crash de la page lorsqu'aucun demandeur n'est présent dans la table du processus d'approbation par @mytharcher

### [v1.7.0-beta.5](https://www.nocobase.com/en/blog/v1.7.0-beta.5)

*Date de sortie : 2025-03-18*

#### 🎉 Nouvelles fonctionnalités

- **[client]** Prise en charge des actions de tableau en ligne avec mode icône uniquement, affichage du nom de l'action au survol ([#6451](https://github.com/nocobase/nocobase/pull/6451)) par @katherinehhh

#### 🚀 Améliorations

- **[Gestionnaire de fichiers]** Simplification de la logique de génération d'URL de fichier et de l'API ([#6472](https://github.com/nocobase/nocobase/pull/6472)) par @mytharcher
- **[Stockage de fichiers : S3(Pro)]**

  - Changement du texte 'Access URL Base' en 'Base URL' par @zhangzhonghe
  - Passage à une méthode simple pour générer l'URL du fichier par @mytharcher
- **[Gestionnaire de sauvegardes]** Permet la restauration de sauvegarde entre une version préliminaire et une version finale de la même version par @gchust

#### 🐛 Corrections de bugs

- **[client]**

  - La couleur des icônes dans le coin supérieur droit de la page ne change pas avec le thème ([#6482](https://github.com/nocobase/nocobase/pull/6482)) par @zhangzhonghe
  - Le champ de texte enrichi n'efface pas les données lors de la soumission ([#6486](https://github.com/nocobase/nocobase/pull/6486)) par @katherinehhh
  - Cliquer sur le bouton de réinitialisation du formulaire de filtre ne peut pas effacer les conditions de filtrage du bloc de carte en grille ([#6475](https://github.com/nocobase/nocobase/pull/6475)) par @zhangzhonghe
- **[Workflow : Nœud manuel]**

  - Correction de la migration ([#6484](https://github.com/nocobase/nocobase/pull/6484)) par @mytharcher
  - Changement du nom de la migration pour garantir la réexécution ([#6487](https://github.com/nocobase/nocobase/pull/6487)) par @mytharcher
  - Correction du champ de titre du workflow dans le filtre ([#6480](https://github.com/nocobase/nocobase/pull/6480)) par @mytharcher
  - Éviter la synchronisation de la collection à partir des champs ([#6478](https://github.com/nocobase/nocobase/pull/6478)) par @mytharcher
  - Correction d'une erreur de migration lorsque la colonne id n'existe pas ([#6470](https://github.com/nocobase/nocobase/pull/6470)) par @chenos
- **[Workflow]** Ne pas compter les tâches lorsque le workflow est supprimé ([#6474](https://github.com/nocobase/nocobase/pull/6474)) par @mytharcher
- **[Workflow : Nœud d'agrégation]** Correction de l'arrondi sur un résultat nul ([#6473](https://github.com/nocobase/nocobase/pull/6473)) par @mytharcher
- **[Intégrer NocoBase]** La page affiche un écran blanc par @zhangzhonghe
- **[Gestionnaire de sauvegardes]** Impossible de démarrer le serveur lorsque les paramètres de sauvegarde par défaut sont manquants par @gchust
- **[Workflow : Approbation]**

  - Correction d'une erreur de champ d'association de fichier dans le formulaire de processus par @mytharcher
  - Correction du comptage des tâches basé sur les hooks par @mytharcher

### [v1.7.0-beta.6](https://www.nocobase.com/en/blog/v1.7.0-beta.6)

*Date de sortie : 2025-03-19*

#### 🎉 Nouvelles fonctionnalités

- **[client]** Prise en charge des champs de texte long comme champs de titre pour les champs d'association ([#6495](https://github.com/nocobase/nocobase/pull/6495)) par @katherinehhh
- **[Workflow : Nœud d'agrégation]** Prise en charge de la configuration de la précision pour le résultat d'agrégation ([#6491](https://github.com/nocobase/nocobase/pull/6491)) par @mytharcher

#### 🐛 Corrections de bugs

- **[évaluateurs]** Revenir à 9 décimales pour l'arrondi ([#6492](https://github.com/nocobase/nocobase/pull/6492)) par @mytharcher
- **[Workflow]** Correction du comptage des tâches héritées après la suppression du workflow ([#6493](https://github.com/nocobase/nocobase/pull/6493)) par @mytharcher
- **[Source de données : Principale]** Impossible de créer une vue MySQL. ([#6477](https://github.com/nocobase/nocobase/pull/6477)) par @aaaaaajie
- **[Gestionnaire de fichiers]** Encoder l'URL ([#6497](https://github.com/nocobase/nocobase/pull/6497)) par @chenos
- **[Gestionnaire de sauvegardes]**

  - Échec de la restauration de la base de données MySQL causé par un chevauchement d'ensembles GTID par @gchust
  - Les fichiers téléchargés n'ont pas été restaurés lors de la création d'une sous-application à partir d'un modèle de sauvegarde par @gchust
- **[Workflow : Approbation]**

  - Correction du bouton d'action manquant dans la table de processus par @mytharcher
  - Modification du retour de l'approbation en tant que tâche à faire par @mytharcher

## develop

![develop.png](https://static-docs.nocobase.com/7fcdd9456a17286d8a439eee52bcb8d2.png)

### [v1.7.0-alpha.2](https://www.nocobase.com/en/blog/v1.7.0-alpha.2)

*Date de sortie : 2025-03-15*

#### 🎉 Nouvelles fonctionnalités

- **[client]**

  - Ajout d'un paramètre de portée de données pour le composant de sélection en cascade ([#6386](https://github.com/nocobase/nocobase/pull/6386)) par @Cyx649312038
  - Le bloc de tableau prend en charge le masquage de la colonne d'index (visible par défaut) ([#6416](https://github.com/nocobase/nocobase/pull/6416)) par @katherinehhh
  - Prise en charge de la configuration des options de champ sélectionnables dans les règles de liaison ([#6338](https://github.com/nocobase/nocobase/pull/6338)) par @katherinehhh
  - Prise en charge de la configuration de la plage de dates (min/max) pour les champs de temps dans les règles de liaison ([#6356](https://github.com/nocobase/nocobase/pull/6356)) par @katherinehhh
- **[acl]** Prise en charge de l'union des rôles utilisateur ([#6301](https://github.com/nocobase/nocobase/pull/6301)) par @aaaaaajie
- **[Bloc : Panneau d'actions]** Prise en charge du saut de ligne pour le titre de l'action dans le panneau d'actions ([#6433](https://github.com/nocobase/nocobase/pull/6433)) par @katherinehhh
- **[plugin-demo-platform]** Définition de skipAuthCheck de la route "/new" sur true. par @sheldon66
- **[WeCom]** Permet de définir une info-bulle personnalisée pour le bouton de connexion par @2013xile

#### 🚀 Améliorations

- **[utils]**

  - Déplacement de `md5` vers utils ([#6468](https://github.com/nocobase/nocobase/pull/6468)) par @mytharcher
  - Adaptation de la page de bureau pour les appareils mobiles ([#6393](https://github.com/nocobase/nocobase/pull/6393)) par @zhangzhonghe
- **[client]** Ajout de skipAuthCheck à router.add pour empêcher la redirection vers la page de connexion sur les pages publiques. ([#6453](https://github.com/nocobase/nocobase/pull/6453)) par @sheldon66
- **[Visualisation de données]** Remplacement du `x-designer` obsolète par `x-settings` ([#6442](https://github.com/nocobase/nocobase/pull/6442)) par @2013xile

#### 🐛 Corrections de bugs

- **[client]**

  - Dans le bloc arborescent, lorsque décoché, les données dans le bloc de données ne sont pas effacées ([#6460](https://github.com/nocobase/nocobase/pull/6460)) par @zhangzhonghe
  - Correction d'un caractère spécial dans l'URL de l'image qui empêchait son affichage ([#6459](https://github.com/nocobase/nocobase/pull/6459)) par @mytharcher
  - Numéro de page incorrect lors de l'ajout de données après un changement de taille de page de sous-tableau ([#6437](https://github.com/nocobase/nocobase/pull/6437)) par @katherinehhh
  - Le contenu n'est pas entièrement affiché dans les navigateurs mobiles ([#6446](https://github.com/nocobase/nocobase/pull/6446)) par @zhangzhonghe
  - Le style du logo est incohérent avec le précédent ([#6444](https://github.com/nocobase/nocobase/pull/6444)) par @zhangzhonghe
  - La sélection de plage de dates pour le champ de date exclut la date maximale ([#6418](https://github.com/nocobase/nocobase/pull/6418)) par @katherinehhh
  - Lors de l'utilisation de l'opérateur '$anyOf', la règle de liaison est invalide ([#6415](https://github.com/nocobase/nocobase/pull/6415)) par @zhangzhonghe
  - Changement de valeur du champ à sélection multiple et perte d'options lors de la suppression d'enregistrements de sous-tableau ([#6405](https://github.com/nocobase/nocobase/pull/6405)) par @katherinehhh
  - Données non mises à jour dans les fenêtres contextuelles ouvertes via les boutons Lien ([#6411](https://github.com/nocobase/nocobase/pull/6411)) par @zhangzhonghe
- **[acl]** Correction du problème où les champs de relation ne sont pas affichés sous l'union des rôles. ([#6456](https://github.com/nocobase/nocobase/pull/6456)) par @aaaaaajie
- **[Gestionnaire de fichiers]**

  - Impossible de supprimer les fichiers stockés dans S3. ([#6467](https://github.com/nocobase/nocobase/pull/6467)) par @chenos
  - Correction de quelques problèmes du gestionnaire de fichiers ([#6436](https://github.com/nocobase/nocobase/pull/6436)) par @mytharcher
- **[Workflow]** Suppression du bouton de paramètres de liaison de workflow du sélecteur de données ([#6455](https://github.com/nocobase/nocobase/pull/6455)) par @mytharcher
- **[Workflow : Nœud manuel]**

  - Correction d'une erreur levée lors de la migration ([#6445](https://github.com/nocobase/nocobase/pull/6445)) par @mytharcher
  - Modification de la limite de version de la migration à `<1.7.0` ([#6430](https://github.com/nocobase/nocobase/pull/6430)) par @mytharcher
  - Correction de la migration qui manquait le préfixe de table et la logique de schéma ([#6425](https://github.com/nocobase/nocobase/pull/6425)) par @mytharcher
- **[Contrôle d'accès]**

  - Correction du changement de rôle qui ne prenait pas effet. ([#6454](https://github.com/nocobase/nocobase/pull/6454)) par @aaaaaajie
  - Erreur lorsque la portée des données est définie sur ses propres données et que la table manque d'un champ créateur. ([#6428](https://github.com/nocobase/nocobase/pull/6428)) par @aaaaaajie
- **[Client WEB]** Remplacement de toutes les instances de ctx.state.currentRole (rôle unique) par ctx.state.currentRoles (prend en charge plusieurs rôles). ([#6427](https://github.com/nocobase/nocobase/pull/6427)) par @aaaaaajie
- **[Action : Modification par lot]** Correction du déclenchement du workflow lors de la soumission d'une modification par lot ([#6440](https://github.com/nocobase/nocobase/pull/6440)) par @mytharcher
- **[Gestionnaire de sources de données]** Le changement de source de données dans la gestion des rôles ne charge pas les collections correspondantes ([#6431](https://github.com/nocobase/nocobase/pull/6431)) par @katherinehhh
- **[Visualisation de données]** Les champs supprimés apparaissent lors de l'ajout de champs de filtre personnalisés ([#6450](https://github.com/nocobase/nocobase/pull/6450)) par @2013xile
- **[Notification : Message dans l'application]**

  - Différencier la couleur d'arrière-plan de la liste des messages dans l'application de celle des cartes de message pour améliorer la hiérarchie visuelle et la lisibilité. ([#6417](https://github.com/nocobase/nocobase/pull/6417)) par @sheldon66
  - Éviter qu'une configuration de destinataires incorrecte interroge tous les utilisateurs ([#6424](https://github.com/nocobase/nocobase/pull/6424)) par @sheldon66
- **[Action : Requête personnalisée]** Erreur de validation des permissions côté serveur pour la requête personnalisée ([#6438](https://github.com/nocobase/nocobase/pull/6438)) par @katherinehhh
- **[Auth : Clés API]** Suppression de l'union de la liste des rôles du plugin de clés API ([#6432](https://github.com/nocobase/nocobase/pull/6432)) par @aaaaaajie
- **[Bloc : modèle]** Comportement incorrect de "Enregistrer comme modèle" dans le client mobile ([#6420](https://github.com/nocobase/nocobase/pull/6420)) par @gchust
- **[Workflow : Événement d'action personnalisée]** Suppression de `only` dans le cas de test E2E par @mytharcher
- **[Stockage de fichiers : S3(Pro)]** Résolution du problème d'URL signées S3 Pro inaccessibles par @chenos
- **[Workflow : Approbation]**

  - Éviter le crash de la page lorsqu'aucun demandeur n'est présent dans la table du processus d'approbation par @mytharcher
  - Correction de l'affichage des données d'association dans le formulaire d'approbation par @mytharcher
  - Correction d'une erreur levée lors de l'approbation sur une source de données externe par @mytharcher

### [v1.7.0-alpha.3](https://www.nocobase.com/en/blog/v1.7.0-alpha.3)

*Date de sortie : 2025-03-18*

#### 🎉 Nouvelles fonctionnalités

- **[client]** Prise en charge des actions de tableau en ligne avec mode icône uniquement, affichage du nom de l'action au survol ([#6451](https://github.com/nocobase/nocobase/pull/6451)) par @katherinehhh

#### 🚀 Améliorations

- **[Gestionnaire de fichiers]** Simplification de la logique de génération d'URL de fichier et de l'API ([#6472](https://github.com/nocobase/nocobase/pull/6472)) par @mytharcher
- **[Stockage de fichiers : S3(Pro)]**

  - Changement du texte 'Access URL Base' en 'Base URL' par @zhangzhonghe
  - Passage à une méthode simple pour générer l'URL du fichier par @mytharcher
- **[Gestionnaire de sauvegardes]** Permet la restauration de sauvegarde entre une version préliminaire et une version finale de la même version par @gchust

#### 🐛 Corrections de bugs

- **[client]**

  - Champs manquants dans la configuration des règles de liaison ([#6488](https://github.com/nocobase/nocobase/pull/6488)) par @katherinehhh
  - La couleur des icônes dans le coin supérieur droit de la page ne change pas avec le thème ([#6482](https://github.com/nocobase/nocobase/pull/6482)) par @zhangzhonghe
  - Le champ de texte enrichi n'efface pas les données lors de la soumission ([#6486](https://github.com/nocobase/nocobase/pull/6486)) par @katherinehhh
  - Style de saisie incorrect pour le paramètre de valeur par défaut du formulaire ([#6490](https://github.com/nocobase/nocobase/pull/6490)) par @gchust
  - Cliquer sur le bouton de réinitialisation du formulaire de filtre ne peut pas effacer les conditions de filtrage du bloc de carte en grille ([#6475](https://github.com/nocobase/nocobase/pull/6475)) par @zhangzhonghe
- **[Workflow : Nœud manuel]**

  - Changement du nom de la migration pour garantir la réexécution ([#6487](https://github.com/nocobase/nocobase/pull/6487)) par @mytharcher
  - Correction de la migration ([#6484](https://github.com/nocobase/nocobase/pull/6484)) par @mytharcher
  - Correction du champ de titre du workflow dans le filtre ([#6480](https://github.com/nocobase/nocobase/pull/6480)) par @mytharcher
  - Correction d'une erreur de migration lorsque la colonne id n'existe pas ([#6470](https://github.com/nocobase/nocobase/pull/6470)) par @chenos
  - Éviter la synchronisation de la collection à partir des champs ([#6478](https://github.com/nocobase/nocobase/pull/6478)) par @mytharcher
- **[Workflow]** Ne pas compter les tâches lorsque le workflow est supprimé ([#6474](https://github.com/nocobase/nocobase/pull/6474)) par @mytharcher
- **[Variables et secrets]** Les boutons ne s'affichent pas dans le tiroir de création de nouvelles variables ([#6485](https://github.com/nocobase/nocobase/pull/6485)) par @gchust
- **[Workflow : Nœud d'agrégation]** Correction de l'arrondi sur un résultat nul ([#6473](https://github.com/nocobase/nocobase/pull/6473)) par @mytharcher
- **[Intégrer NocoBase]** La page affiche un écran blanc par @zhangzhonghe
- **[Gestionnaire de sauvegardes]** Impossible de démarrer le serveur lorsque les paramètres de sauvegarde par défaut sont manquants par @gchust
- **[Workflow : Approbation]**

  - Correction d'une erreur de champ d'association de fichier dans le formulaire de processus par @mytharcher
  - Correction du comptage des tâches basé sur les hooks par @mytharcher

## À propos de NocoBase

NocoBase est une plateforme no-code privée et open source offrant un contrôle total et une évolutivité infinie. Elle permet aux équipes de s'adapter rapidement aux changements tout en réduisant considérablement les coûts. Évitez des années de développement et des investissements substantiels en déployant NocoBase en quelques minutes.

<iframe src="https://cdn.embedly.com/widgets/media.html?src=https%3A%2F%2Fwww.youtube.com%2Fembed%2FhOM2MyzHn9I&display_name=YouTube&url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DhOM2MyzHn9I&image=http%3A%2F%2Fi.ytimg.com%2Fvi%2FhOM2MyzHn9I%2Fhqdefault.jpg&key=a19fcc184b9711e1b4764040d3dc5c07&type=text%2Fhtml&schema=youtube" allowfullscreen="" frameborder="0" height="480" width="854" title="" class="dc n pc cp bh" scrolling="no"></iframe>

Découvrez NocoBase en 3 minutes !

## 👇 Obtenez NocoBase

[**Page d'accueil**](https://www.nocobase.com/)

[**Démo**](https://demo.nocobase.com/new)

[**Documentation**](https://docs.nocobase.com/)

[**GitHub**](https://github.com/nocobase/nocobase)
