---
title: "Mises à jour hebdomadaires de NocoBase : Optimisations et corrections de bugs"
description: "Les mises à jour de cette semaine incluent : la prise en charge des modèles de blocs dans les formulaires de processus d'approbation, des améliorations des workflows et des corrections de bugs."
---

Résumez les journaux de mise à jour hebdomadaires du produit. Les dernières versions sont consultables sur [notre blog](https://www.nocobase.com/en/blog/timeline).

**NocoBase est actuellement mis à jour avec trois branches : `main`, `next` et `develop`.**

![version.png](https://static-docs.nocobase.com/ba5f04e27e99c625cb3822da5df07860.png)

* `main` : La version la plus stable à ce jour, recommandée pour l'installation ;
* `next` : Version bêta, contient les nouvelles fonctionnalités à venir et a été testée préliminairement. Il peut y avoir des problèmes connus ou inconnus. Elle est principalement destinée aux utilisateurs testeurs pour recueillir des retours et optimiser davantage les fonctions. Idéale pour les utilisateurs testeurs qui souhaitent découvrir les nouvelles fonctionnalités en avant-première et donner leur avis ;
* `develop` : Version alpha, contient le code de fonctionnalité le plus récent, peut être incomplète ou instable, principalement destinée au développement interne et à l'itération rapide. Adaptée aux utilisateurs techniques intéressés par les fonctionnalités de pointe du produit, mais avec des problèmes potentiels et des fonctions incomplètes. Ne pas utiliser en production.

## main

![main.png](https://static-docs.nocobase.com/47a3c71734c1d0f908b51f9ebd53c0ac.png)

### [v1.6.11](https://www.nocobase.com/en/blog/v1.6.11)

*Date de sortie : 2025-03-27*

#### 🚀 Améliorations

- **[client]**

  - Optimisation du message d'erreur 502 ([#6547](https://github.com/nocobase/nocobase/pull/6547)) par @chenos
  - Prise en charge de l'aperçu des fichiers texte brut uniquement ([#6563](https://github.com/nocobase/nocobase/pull/6563)) par @mytharcher
- **[Champ de collection : Séquence]** Prise en charge de la définition de la séquence comme champ de titre pour le bloc calendrier ([#6562](https://github.com/nocobase/nocobase/pull/6562)) par @katherinehhh
- **[Workflow : Approbation]** Prise en charge de l'ignorance du validateur dans les paramètres par @mytharcher

#### 🐛 Corrections de bugs

- **[client]**

  - Problème d'affichage du champ de date dans le filtrage de la portée des données ([#6564](https://github.com/nocobase/nocobase/pull/6564)) par @katherinehhh
  - L'option 'Contenu tronqué avec points de suspension' nécessite un rafraîchissement de la page pour que l'état de basculement prenne effet ([#6520](https://github.com/nocobase/nocobase/pull/6520)) par @zhangzhonghe
  - Impossible d'ouvrir une autre modale dans une modale ([#6535](https://github.com/nocobase/nocobase/pull/6535)) par @zhangzhonghe
- **[Documentation API]** La page de documentation API ne peut pas défiler ([#6566](https://github.com/nocobase/nocobase/pull/6566)) par @zhangzhonghe
- **[Workflow]** Assurez-vous que la clé du workflow est générée avant l'enregistrement ([#6567](https://github.com/nocobase/nocobase/pull/6567)) par @mytharcher
- **[Workflow : Événement post-action]** Les enregistrements multiples dans une action groupée doivent se déclencher plusieurs fois ([#6559](https://github.com/nocobase/nocobase/pull/6559)) par @mytharcher
- **[Authentification]** Problème de localisation pour les champs de la page d'inscription ([#6556](https://github.com/nocobase/nocobase/pull/6556)) par @2013xile
- **[Formulaires publics]** Problème avec le titre de la page du formulaire public affichant 'Chargement...' ([#6569](https://github.com/nocobase/nocobase/pull/6569)) par @katherinehhh

### [v1.6.12](https://www.nocobase.com/en/blog/v1.6.12)

*Date de sortie : 2025-03-27*

#### 🐛 Corrections de bugs

- **[Bloc : Formulaire multi-étapes]**

  - Le bouton de soumission a la même couleur dans son état par défaut et en surbrillance par @jiannx
  - Correction du bug où la réinitialisation du formulaire était invalide lorsque le champ est associé à un autre champ par @jiannx
- **[Workflow : Approbation]** Correction des valeurs du formulaire d'approbation à soumettre par @mytharcher

### [v1.6.13](https://www.nocobase.com/en/blog/v1.6.13)

*Date de sortie : 2025-03-28*

#### 🚀 Améliorations

- **[Gestionnaire de tâches asynchrones]** Optimisation des boutons d'import/export dans Pro ([#6531](https://github.com/nocobase/nocobase/pull/6531)) par @chenos
- **[Action : Exporter les enregistrements Pro]** Optimisation des boutons d'import/export dans Pro par @katherinehhh
- **[Gestionnaire de migration]** Permettre d'ignorer la sauvegarde et la restauration automatiques pour la migration par @gchust

#### 🐛 Corrections de bugs

- **[client]** Conflit de liaison entre des champs d'association de même nom dans différents sous-tableaux au sein du même formulaire ([#6577](https://github.com/nocobase/nocobase/pull/6577)) par @katherinehhh
- **[Action : Modification groupée]** Cliquez sur le bouton de modification groupée, configurez la fenêtre contextuelle, puis ouvrez-la à nouveau, la fenêtre contextuelle est vide ([#6578](https://github.com/nocobase/nocobase/pull/6578)) par @zhangzhonghe

### [v1.6.14](https://www.nocobase.com/en/blog/v1.6.14)

*Date de sortie : 2025-03-29*

#### 🐛 Corrections de bugs

- **[Calendrier]** Données manquantes aux dates limites dans la vue hebdomadaire du calendrier ([#6587](https://github.com/nocobase/nocobase/pull/6587)) par @katherinehhh
- **[Auth : OIDC]** Une redirection incorrecte se produit lorsque le chemin de rappel est la chaîne 'null' par @2013xile
- **[Workflow : Approbation]** Correction de la configuration incorrecte du nœud d'approbation après un changement de schéma par @mytharcher

### [v1.6.15](https://www.nocobase.com/en/blog/v1.6.15)

*Date de sortie : 2025-04-01*

#### 🚀 Améliorations

- **[base de données]**

  - Ajout de l'option trim pour le champ texte ([#6603](https://github.com/nocobase/nocobase/pull/6603)) par @mytharcher
  - Ajout de l'option trim pour le champ chaîne ([#6565](https://github.com/nocobase/nocobase/pull/6565)) par @mytharcher
- **[Gestionnaire de fichiers]** Ajout de l'option trim pour les champs texte de la collection de stockages ([#6604](https://github.com/nocobase/nocobase/pull/6604)) par @mytharcher
- **[Workflow]** Amélioration du code ([#6589](https://github.com/nocobase/nocobase/pull/6589)) par @mytharcher
- **[Workflow : Approbation]** Prise en charge de l'utilisation d'un modèle de bloc pour le formulaire de processus d'approbation par @mytharcher

#### 🐛 Corrections de bugs

- **[base de données]** Éviter les modifications du champ "datetimeNoTz" lorsque la valeur n'est pas modifiée lors de la mise à jour d'un enregistrement ([#6588](https://github.com/nocobase/nocobase/pull/6588)) par @mytharcher
- **[client]**

  - Champ d'association (sélection) affichant N/A lors de l'exposition des champs de la collection associée ([#6582](https://github.com/nocobase/nocobase/pull/6582)) par @katherinehhh
  - Correction de la propriété `disabled` qui ne fonctionne pas lorsque `SchemaInitializerItem` a des `items` ([#6597](https://github.com/nocobase/nocobase/pull/6597)) par @mytharcher
  - Problème de cascade : 'La valeur de xxx ne peut pas être au format tableau' lors de la suppression et de la re-sélection ([#6585](https://github.com/nocobase/nocobase/pull/6585)) par @katherinehhh
- **[Champ de collection : Plusieurs à plusieurs (tableau)]** Problème de filtrage par champs dans une collection d'association avec un champ plusieurs à plusieurs (tableau) ([#6596](https://github.com/nocobase/nocobase/pull/6596)) par @2013xile
- **[Formulaires publics]** Les autorisations de vue incluent la liste et l'obtention ([#6607](https://github.com/nocobase/nocobase/pull/6607)) par @chenos
- **[Authentification]** Attribution du jeton dans `AuthProvider` ([#6593](https://github.com/nocobase/nocobase/pull/6593)) par @2013xile
- **[Workflow]** Correction de l'affichage incorrect de l'option de synchronisation ([#6595](https://github.com/nocobase/nocobase/pull/6595)) par @mytharcher
- **[Bloc : Carte]** La validation de la gestion de la carte ne doit pas réussir avec une saisie d'espace ([#6575](https://github.com/nocobase/nocobase/pull/6575)) par @katherinehhh
- **[Workflow : Approbation]**

  - Correction des variables client à utiliser dans le formulaire d'approbation par @mytharcher
  - Correction du mode branche lorsque `endOnReject` est configuré sur `true` par @mytharcher

## next

![next.png](https://static-docs.nocobase.com/8ed17a0f08cc585018f6de6c8b13947d.png)

### [v1.7.0-beta.10](https://www.nocobase.com/en/blog/v1.7.0-beta.10)

*Date de sortie : 2025-03-27*

#### 🎉 Nouvelles fonctionnalités

- **[client]** Prise en charge de la configuration des variables après soumission, permettant la redirection avec l'ID de données actuel ([#6465](https://github.com/nocobase/nocobase/pull/6465)) par @katherinehhh
- **[Champ de collection : Markdown(Vditor)]** Vditor prend en charge S3 Pro ([#6441](https://github.com/nocobase/nocobase/pull/6441)) par @zhangzhonghe

#### 🚀 Améliorations

- **[client]**

  - Prise en charge de l'aperçu des fichiers texte brut uniquement ([#6563](https://github.com/nocobase/nocobase/pull/6563)) par @mytharcher
  - Optimisation du message d'erreur 502 ([#6547](https://github.com/nocobase/nocobase/pull/6547)) par @chenos
  - Restreindre les actions disponibles pour différentes propriétés de champ dans les règles de liaison ([#6548](https://github.com/nocobase/nocobase/pull/6548)) par @katherinehhh
- **[Gestionnaire de fichiers]** Ajustement de l'API `getFileData` du stockage ([#6553](https://github.com/nocobase/nocobase/pull/6553)) par @mytharcher
- **[Contrôle d'accès]** Optimisation de l'ordre et du style du changement de rôle ([#6555](https://github.com/nocobase/nocobase/pull/6555)) par @aaaaaajie
- **[Champ de collection : Séquence]** Prise en charge de la définition de la séquence comme champ de titre pour le bloc calendrier ([#6562](https://github.com/nocobase/nocobase/pull/6562)) par @katherinehhh
- **[Workflow]** Division des colonnes exécutées en tables de statistiques ([#6534](https://github.com/nocobase/nocobase/pull/6534)) par @mytharcher
- **[Workflow : Événement d'action personnalisée]** Division des colonnes exécutées en tables de statistiques par @mytharcher
- **[Workflow : Approbation]**

  - Division des colonnes exécutées en tables de statistiques par @mytharcher
  - Prise en charge de l'ignorance du validateur dans les paramètres par @mytharcher

#### 🐛 Corrections de bugs

- **[client]**

  - Les anciennes versions des navigateurs affichent une page blanche ([#6571](https://github.com/nocobase/nocobase/pull/6571)) par @zhangzhonghe
  - L'option 'Contenu tronqué avec points de suspension' nécessite un rafraîchissement de la page pour que l'état de basculement prenne effet ([#6520](https://github.com/nocobase/nocobase/pull/6520)) par @zhangzhonghe
  - Problème d'affichage du champ de date dans le filtrage de la portée des données ([#6564](https://github.com/nocobase/nocobase/pull/6564)) par @katherinehhh
  - Impossible d'ouvrir une autre modale dans une modale ([#6535](https://github.com/nocobase/nocobase/pull/6535)) par @zhangzhonghe
  - L'action 'Enregistrer comme modèle' échoue si elle contient un champ d'association ([#6543](https://github.com/nocobase/nocobase/pull/6543)) par @gchust
  - Le menu supérieur de la page s'affiche vide ([#6551](https://github.com/nocobase/nocobase/pull/6551)) par @zhangzhonghe
  - L'affectation de champ avec une valeur nulle est inefficace ([#6549](https://github.com/nocobase/nocobase/pull/6549)) par @katherinehhh
- **[Workflow]**

  - Correction de l'erreur levée lors de la configuration des options de suppression automatique ([#6560](https://github.com/nocobase/nocobase/pull/6560)) par @mytharcher
  - Assurez-vous que la clé du workflow est générée avant l'enregistrement ([#6567](https://github.com/nocobase/nocobase/pull/6567)) par @mytharcher
- **[Formulaires publics]** Problème avec le titre de la page du formulaire public affichant 'Chargement...' ([#6569](https://github.com/nocobase/nocobase/pull/6569)) par @katherinehhh
- **[Mobile]** Ajustement de la taille de police affichée sur le téléphone à 14px ([#6570](https://github.com/nocobase/nocobase/pull/6570)) par @zhangzhonghe
- **[Variables et secrets]** Bouton de filtre d'icône manquant, nombre de filtres non affiché et données non actualisées après filtrage lors du changement de page ([#6568](https://github.com/nocobase/nocobase/pull/6568)) par @katherinehhh
- **[Authentification]** Problème de localisation pour les champs de la page d'inscription ([#6556](https://github.com/nocobase/nocobase/pull/6556)) par @2013xile
- **[Documentation API]** La page de documentation API ne peut pas défiler ([#6566](https://github.com/nocobase/nocobase/pull/6566)) par @zhangzhonghe
- **[Workflow : Événement post-action]** Les enregistrements multiples dans une action groupée doivent se déclencher plusieurs fois ([#6559](https://github.com/nocobase/nocobase/pull/6559)) par @mytharcher
- **[Bloc : modèle]**

  - Les règles de liaison du bloc formulaire n'ont pas été correctement synchronisées à partir du modèle ([#6550](https://github.com/nocobase/nocobase/pull/6550)) par @gchust
  - Menu 'Enregistrer comme modèle' en double dans le bloc de détails ([#6558](https://github.com/nocobase/nocobase/pull/6558)) par @gchust
- **[Workflow : Approbation]** Correction des valeurs du formulaire d'approbation à soumettre par @mytharcher

### [v1.7.0-beta.11](https://www.nocobase.com/en/blog/v1.7.0-beta.11)

*Date de sortie : 2025-03-27*

#### 🐛 Corrections de bugs

- **[Bloc : Formulaire multi-étapes]** Le bouton de soumission a la même couleur dans son état par défaut et en surbrillance par @jiannx

### [v1.7.0-beta.12](https://www.nocobase.com/en/blog/v1.7.0-beta.12)

*Date de sortie : 2025-03-28*

#### 🎉 Nouvelles fonctionnalités

- **[Bloc : Panneau d'actions]** Ajout d'un callback onScanSuccess pour gérer les scans réussis et quitter l'interface utilisateur de la caméra. ([#6580](https://github.com/nocobase/nocobase/pull/6580)) par @sheldon66

#### 🚀 Améliorations

- **[Gestionnaire de tâches asynchrones]** Optimisation des boutons d'import/export dans Pro ([#6531](https://github.com/nocobase/nocobase/pull/6531)) par @chenos
- **[Action : Exporter les enregistrements Pro]** Optimisation des boutons d'import/export dans Pro par @katherinehhh
- **[Gestionnaire de migration]** Permettre d'ignorer la sauvegarde et la restauration automatiques pour la migration par @gchust

#### 🐛 Corrections de bugs

- **[client]** Conflit de liaison entre des champs d'association de même nom dans différents sous-tableaux au sein du même formulaire ([#6577](https://github.com/nocobase/nocobase/pull/6577)) par @katherinehhh
- **[Calendrier]** Données manquantes aux dates limites dans la vue hebdomadaire du calendrier ([#6587](https://github.com/nocobase/nocobase/pull/6587)) par @katherinehhh
- **[Contrôle d'accès]** Attribution incorrecte du rôle actuel lors de la connexion ([#6581](https://github.com/nocobase/nocobase/pull/6581)) par @aaaaaajie
- **[Action : Modification groupée]** Cliquez sur le bouton de modification groupée, configurez la fenêtre contextuelle, puis ouvrez-la à nouveau, la fenêtre contextuelle est vide ([#6578](https://github.com/nocobase/nocobase/pull/6578)) par @zhangzhonghe
- **[Bloc : Formulaire multi-étapes]** Correction du bug où la réinitialisation du formulaire était invalide lorsque le champ est associé à un autre champ par @jiannx
- **[Workflow : Approbation]** Correction de la configuration incorrecte du nœud d'approbation après un changement de schéma par @mytharcher

### [v1.7.0-beta.13](https://www.nocobase.com/en/blog/v1.7.0-beta.13)

*Date de sortie : 2025-04-01*

#### 🚀 Améliorations

- **[base de données]**

  - Ajout de l'option trim pour le champ texte ([#6603](https://github.com/nocobase/nocobase/pull/6603)) par @mytharcher
  - Ajout de l'option trim pour le champ chaîne ([#6565](https://github.com/nocobase/nocobase/pull/6565)) par @mytharcher
- **[client]** Prise en charge de la configuration de la visibilité des deux-points dans les étiquettes des champs de formulaire en fonction de la disposition ([#6561](https://github.com/nocobase/nocobase/pull/6561)) par @katherinehhh
- **[Gestionnaire de fichiers]** Ajout de l'option trim pour les champs texte de la collection de stockages ([#6604](https://github.com/nocobase/nocobase/pull/6604)) par @mytharcher
- **[Workflow]** Amélioration du code ([#6589](https://github.com/nocobase/nocobase/pull/6589)) par @mytharcher
- **[Workflow : Approbation]** Prise en charge de l'utilisation d'un modèle de bloc pour le formulaire de processus d'approbation par @mytharcher

#### 🐛 Corrections de bugs

- **[base de données]**

  - Éviter les modifications du champ "datetimeNoTz" lorsque la valeur n'est pas modifiée lors de la mise à jour d'un enregistrement ([#6588](https://github.com/nocobase/nocobase/pull/6588)) par @mytharcher
  - Lors de la suppression d'enregistrements un-à-plusieurs, `filter` et `filterByTk` sont tous deux passés et `filter` inclut un champ d'association, le `filterByTk` est ignoré ([#6606](https://github.com/nocobase/nocobase/pull/6606)) par @2013xile
- **[client]**

  - Correction de la propriété `disabled` qui ne fonctionne pas lorsque `SchemaInitializerItem` a des `items` ([#6597](https://github.com/nocobase/nocobase/pull/6597)) par @mytharcher
  - Problème de cascade : 'La valeur de xxx ne peut pas être au format tableau' lors de la suppression et de la re-sélection ([#6585](https://github.com/nocobase/nocobase/pull/6585)) par @katherinehhh
  - Champ d'association (sélection) affichant N/A lors de l'exposition des champs de la collection associée ([#6582](https://github.com/nocobase/nocobase/pull/6582)) par @katherinehhh
  - Les boutons de soumission et d'actualisation n'affichent pas correctement le mode icône uniquement ([#6592](https://github.com/nocobase/nocobase/pull/6592)) par @katherinehhh
- **[Formulaires publics]** Les autorisations de vue incluent la liste et l'obtention ([#6607](https://github.com/nocobase/nocobase/pull/6607)) par @chenos
- **[Authentification]** Attribution du jeton dans `AuthProvider` ([#6593](https://github.com/nocobase/nocobase/pull/6593)) par @2013xile
- **[Champ de collection : Plusieurs à plusieurs (tableau)]** Problème de filtrage par champs dans une collection d'association avec un champ plusieurs à plusieurs (tableau) ([#6596](https://github.com/nocobase/nocobase/pull/6596)) par @2013xile
- **[Workflow]** Correction de l'affichage incorrect de l'option de synchronisation ([#6595](https://github.com/nocobase/nocobase/pull/6595)) par @mytharcher
- **[Bloc : Carte]** La validation de la gestion de la carte ne doit pas réussir avec une saisie d'espace ([#6575](https://github.com/nocobase/nocobase/pull/6575)) par @katherinehhh
- **[Auth : OIDC]** Une redirection incorrecte se produit lorsque le chemin de rappel est la chaîne 'null' par @2013xile
- **[Workflow : Approbation]**

  - Correction des variables client à utiliser dans le formulaire d'approbation par @mytharcher
  - Correction du mode branche lorsque `endOnReject` est configuré sur `true` par @mytharcher

## develop

![develop.png](https://static-docs.nocobase.com/7fcdd9456a17286d8a439eee52bcb8d2.png)

### [v1.7.0-alpha.10](https://www.nocobase.com/en/blog/v1.7.0-alpha.10)

*Date de sortie : 2025-03-25*

#### 🎉 Nouvelles fonctionnalités

- **[client]** Prise en charge de la configuration des variables après soumission, permettant la redirection avec l'ID de données actuel ([#6465](https://github.com/nocobase/nocobase/pull/6465)) par @katherinehhh
- **[Champ de collection : Markdown(Vditor)]** Vditor prend en charge S3 Pro ([#6441](https://github.com/nocobase/nocobase/pull/6441)) par @zhangzhonghe

#### 🚀 Améliorations

- **[client]**

  - Prise en charge de l'aperçu des fichiers texte brut uniquement ([#6563](https://github.com/nocobase/nocobase/pull/6563)) par @mytharcher
  - Optimisation du message d'erreur 502 ([#6547](https://github.com/nocobase/nocobase/pull/6547)) par @chenos
  - Restreindre les actions disponibles pour différentes propriétés de champ dans les règles de liaison ([#6548](https://github.com/nocobase/nocobase/pull/6548)) par @katherinehhh
- **[Workflow]** Division des colonnes exécutées en tables de statistiques ([#6534](https://github.com/nocobase/nocobase/pull/6534)) par @mytharcher
- **[Mobile]** Adaptation du style de la fenêtre contextuelle de notification pour les appareils mobiles ([#6557](https://github.com/nocobase/nocobase/pull/6557)) par @zhangzhonghe
- **[Champ de collection : Séquence]** Prise en charge de la définition de la séquence comme champ de titre pour le bloc calendrier ([#6562](https://github.com/nocobase/nocobase/pull/6562)) par @katherinehhh
- **[Gestionnaire de fichiers]** Ajustement de l'API `getFileData` du stockage ([#6553](https://github.com/nocobase/nocobase/pull/6553)) par @mytharcher
- **[Contrôle d'accès]** Optimisation de l'ordre et du style du changement de rôle ([#6555](https://github.com/nocobase/nocobase/pull/6555)) par @aaaaaajie
- **[Formulaires publics]** Définir le titre de la page du formulaire public sur le titre configuré lors de la création ([#6538](https://github.com/nocobase/nocobase/pull/6538)) par @katherinehhh
- **[Workflow : Événement d'action personnalisée]** Division des colonnes exécutées en tables de statistiques par @mytharcher
- **[Workflow : Approbation]**

  - Prise en charge de l'ignorance du validateur dans les paramètres par @mytharcher
  - Division des colonnes exécutées en tables de statistiques par @mytharcher

#### 🐛 Corrections de bugs

- **[client]**

  - Les anciennes versions des navigateurs affichent une page blanche ([#6571](https://github.com/nocobase/nocobase/pull/6571)) par @zhangzhonghe
  - Impossible d'ouvrir une autre modale dans une modale ([#6535](https://github.com/nocobase/nocobase/pull/6535)) par @zhangzhonghe
  - L'option 'Contenu tronqué avec points de suspension' nécessite un rafraîchissement de la page pour que l'état de basculement prenne effet ([#6520](https://github.com/nocobase/nocobase/pull/6520)) par @zhangzhonghe
  - Problème d'affichage du champ de date dans le filtrage de la portée des données ([#6564](https://github.com/nocobase/nocobase/pull/6564)) par @katherinehhh
  - Le menu supérieur de la page s'affiche vide ([#6551](https://github.com/nocobase/nocobase/pull/6551)) par @zhangzhonghe
  - L'action 'Enregistrer comme modèle' échoue si elle contient un champ d'association ([#6543](https://github.com/nocobase/nocobase/pull/6543)) par @gchust
  - Impossible d'utiliser la variable 'Utilisateur actuel' lors de l'ajout d'une page de lien ([#6536](https://github.com/nocobase/nocobase/pull/6536)) par @zhangzhonghe
  - L'affectation de champ avec une valeur nulle est inefficace ([#6549](https://github.com/nocobase/nocobase/pull/6549)) par @katherinehhh
  - L'action 'Enregistrer comme modèle' échoue si elle contient un champ d'association ([#6543](https://github.com/nocobase/nocobase/pull/6543)) par @gchust
  - Suppression de l'option 'Autoriser la sélection multiple' des champs de sélection unique déroulante dans les formulaires de filtre ([#6515](https://github.com/nocobase/nocobase/pull/6515)) par @zhangzhonghe
  - La liaison de plage de données du champ relationnel n'est pas efficace ([#6530](https://github.com/nocobase/nocobase/pull/6530)) par @zhangzhonghe
  - Erreur de commande `yarn doc` ([#6540](https://github.com/nocobase/nocobase/pull/6540)) par @gchust
  - Problème de glisser-déposer du bouton de ligne de tableau ([#6544](https://github.com/nocobase/nocobase/pull/6544)) par @katherinehhh
- **[Mobile]** Ajustement de la taille de police affichée sur le téléphone à 14px ([#6570](https://github.com/nocobase/nocobase/pull/6570)) par @zhangzhonghe
- **[Workflow]**

  - Correction de l'erreur levée lors de la configuration des options de suppression automatique ([#6560](https://github.com/nocobase/nocobase/pull/6560)) par @mytharcher
  - Assurez-vous que la clé du workflow est générée avant l'enregistrement ([#6567](https://github.com/nocobase/nocobase/pull/6567)) par @mytharcher
- **[Variables et secrets]** Bouton de filtre d'icône manquant, nombre de filtres non affiché et données non actualisées après filtrage lors du changement de page ([#6568](https://github.com/nocobase/nocobase/pull/6568)) par @katherinehhh
- **[Formulaires publics]** Problème avec le titre de la page du formulaire public affichant 'Chargement...' ([#6569](https://github.com/nocobase/nocobase/pull/6569)) par @katherinehhh
- **[Documentation API]** La page de documentation API ne peut pas défiler ([#6566](https://github.com/nocobase/nocobase/pull/6566)) par @zhangzhonghe
- **[Workflow : Événement post-action]** Les enregistrements multiples dans une action groupée doivent se déclencher plusieurs fois ([#6559](https://github.com/nocobase/nocobase/pull/6559)) par @mytharcher
- **[Bloc : modèle]**

  - Menu 'Enregistrer comme modèle' en double dans le bloc de détails ([#6558](https://github.com/nocobase/nocobase/pull/6558)) par @gchust
  - Les règles de liaison du bloc formulaire n'ont pas été correctement synchronisées à partir du modèle ([#6550](https://github.com/nocobase/nocobase/pull/6550)) par @gchust
- **[Authentification]** Problème de localisation pour les champs de la page d'inscription ([#6556](https://github.com/nocobase/nocobase/pull/6556)) par @2013xile
- **[Action : Requête personnalisée]** Impossible de télécharger les fichiers encodés en UTF-8 ([#6541](https://github.com/nocobase/nocobase/pull/6541)) par @2013xile
- **[Collection : Arborescence]** Problème de migration pour plugin-collection-tree ([#6537](https://github.com/nocobase/nocobase/pull/6537)) par @2013xile
- **[Bloc : Formulaire multi-étapes]** Le bouton de soumission a la même couleur dans son état par défaut et en surbrillance par @jiannx
- **[Workflow : Approbation]** Correction des valeurs du formulaire d'approbation à soumettre par @mytharcher
