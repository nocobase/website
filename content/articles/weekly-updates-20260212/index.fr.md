---
title: "Mises à jour hebdomadaires｜Prise en charge de la hauteur de bloc configurable"
description: "Ceci est un résumé des mises à jour et améliorations des fonctionnalités de NocoBase du 6 au 12 février 2026."
---

Résumez les journaux de mise à jour hebdomadaires du produit. Les dernières versions sont disponibles sur [notre blog](https://www.nocobase.com/en/blog/timeline).

**NocoBase est actuellement mis à jour avec trois branches : `main`, `next` et `develop`.**

![version.png](https://static-docs.nocobase.com/ba5f04e27e99c625cb3822da5df07860.png)

* `main` : La version la plus stable à ce jour, recommandée pour l'installation ;
* `next` : Version bêta, contient les nouvelles fonctionnalités à venir et a été testée préliminairement. Il peut y avoir des problèmes connus ou inconnus. Elle est principalement destinée aux utilisateurs testeurs pour recueillir des retours et optimiser davantage les fonctionnalités. Idéale pour les utilisateurs testeurs qui souhaitent découvrir les nouvelles fonctionnalités en avant-première et donner leur avis ;
* `develop` : Version alpha, contient le code de fonctionnalité le plus récent, peut être incomplète ou instable, principalement destinée au développement interne et à l'itération rapide. Adaptée aux utilisateurs techniques intéressés par les fonctionnalités de pointe du produit, mais avec des problèmes potentiels et des fonctions incomplètes. Ne pas utiliser en production.

## main

![main.png](https://static-docs.nocobase.com/47a3c71734c1d0f908b51f9ebd53c0ac.png)

### [v1.9.46](https://www.nocobase.com/en/blog/v1.9.46)

*Date de sortie : 2026-02-11*

### 🐛 Corrections de bugs

- **[client]** Correction du problème où les options du composant de champ n'étaient pas actualisées en temps réel lorsque le champ d'association change de mode ([#8611](https://github.com/nocobase/nocobase/pull/8611)) par @katherinehhh
- **[Visualisation de données : ECharts]** Correction d'une erreur d'orthographe dans ECharts par @heziqiang
- **[Workflow : Approbation]**

  - Correction du problème où des valeurs manquaient dans la fenêtre contextuelle de détail de "Ma demande" par @mytharcher
  - Correction d'une erreur levée lors de l'exécution en mode avant sauvegarde par @mytharcher

### [v1.9.45](https://www.nocobase.com/en/blog/v1.9.45)

*Date de sortie : 2026-02-09*

### 🐛 Corrections de bugs

- **[Composant de champ : masque]** Correction d'un problème où la fenêtre contextuelle des paramètres du champ masque ne pouvait pas charger correctement tous les rôles utilisateur. par @gchust
- **[Workflow : Approbation]** Correction d'un identifiant incorrect pour charger l'enregistrement de détail par @mytharcher

### [v1.9.44](https://www.nocobase.com/en/blog/v1.9.44)

*Date de sortie : 2026-02-08*

### 🎉 Nouvelles fonctionnalités

- **[Workflow : Approbation]** Ajout du contrôle ACL pour les API d'approbation par @mytharcher

### [v1.9.43](https://www.nocobase.com/en/blog/v1.9.43)

*Date de sortie : 2026-02-06*

### 🎉 Nouvelles fonctionnalités

- **[Auth : DingTalk]** Permet de lier un utilisateur avec `unionId` par @2013xile

### 🚀 Améliorations

- **[Champ de collection : Markdown(Vditor)]** Ajout d'une option de configuration pour définir le mode d'édition par défaut dans les paramètres du composant. ([#8408](https://github.com/nocobase/nocobase/pull/8408)) par @Cyx649312038

### 🐛 Corrections de bugs

- **[Action : Importer des enregistrements]** Correction de la vulnérabilité de l'action d'importation ([#8544](https://github.com/nocobase/nocobase/pull/8544)) par @mytharcher

![next.png](https://static-docs.nocobase.com/8ed17a0f08cc585018f6de6c8b13947d.png)

### [v2.0.0-beta.23](https://www.nocobase.com/en/blog/v2.0.0-beta.23)

*Date de sortie : 2026-02-12*

### 🎉 Nouvelles fonctionnalités

- **[Bloc : GridCard]** Prise en charge de la hauteur de bloc configurable ([#8583](https://github.com/nocobase/nocobase/pull/8583)) par @katherinehhh
- **[Action : Modification par lot]** Modification en masse 2.0 ([#8526](https://github.com/nocobase/nocobase/pull/8526)) par @jiannx

### 🚀 Améliorations

- **[client]**

  - Tableau 2.0 prend en charge le tri par glisser-déposer ([#8540](https://github.com/nocobase/nocobase/pull/8540)) par @jiannx
  - Déplacement des paramètres d'affectation de champ et de valeur par défaut vers la configuration au niveau du formulaire. ([#8596](https://github.com/nocobase/nocobase/pull/8596)) par @chenos
- **[Localisation]** Création automatique des clés i18n manquantes ([#8588](https://github.com/nocobase/nocobase/pull/8588)) par @jiannx

### 🐛 Corrections de bugs

- **[client]**

  - Correction des données filtrées incorrectes dans la liste déroulante d'association lorsque le champ titre est une clé étrangère ([#8619](https://github.com/nocobase/nocobase/pull/8619)) par @katherinehhh
  - Correction du problème où le champ de pièce jointe d'association effacé n'était pas sauvegardé après soumission dans un formulaire d'édition ([#8616](https://github.com/nocobase/nocobase/pull/8616)) par @katherinehhh
  - Correction du problème où les options du composant de champ n'étaient pas actualisées en temps réel lorsque le champ d'association change de mode ([#8611](https://github.com/nocobase/nocobase/pull/8611)) par @katherinehhh
  - Correction d'un problème où les colonnes du tableau ne se réaffichaient pas après avoir cliqué sur Exécuter dans l'éditeur de colonne JS. ([#8608](https://github.com/nocobase/nocobase/pull/8608)) par @gchust
  - Correction de l'impossibilité de restaurer les données sélectionnées dans le composant de champ sélecteur d'enregistrement après édition ([#8610](https://github.com/nocobase/nocobase/pull/8610)) par @katherinehhh
- **[Gestionnaire de fichiers]** Correction du problème où le composant de champ fichier pouvait encore ouvrir la boîte de dialogue de sélection lorsqu'il était désactivé ([#8617](https://github.com/nocobase/nocobase/pull/8617)) par @katherinehhh
- **[Visualisation de données : ECharts]** Correction d'une erreur d'orthographe dans ECharts par @heziqiang
- **[Workflow : Approbation]**

  - Correction du problème où des valeurs manquaient dans la fenêtre contextuelle de détail de "Ma demande" par @mytharcher
  - Correction d'une erreur levée lors de l'exécution en mode avant sauvegarde par @mytharcher

### [v2.0.0-beta.22](https://www.nocobase.com/en/blog/v2.0.0-beta.22)

*Date de sortie : 2026-02-10*

### 🎉 Nouvelles fonctionnalités

- **[client]** Prise en charge de la configuration des titres d'onglet du navigateur pour les pages, les onglets de page, les fenêtres contextuelles et les onglets de fenêtre contextuelle ([#8590](https://github.com/nocobase/nocobase/pull/8590)) par @zhangzhonghe
- **[Workflow : Approbation]** Ajout du contrôle ACL pour les API d'approbation par @mytharcher

### 🚀 Améliorations

- **[client]** Utilisation de modèles de champ indépendants pour les champs d'association dans les formulaires de filtre ([#8511](https://github.com/nocobase/nocobase/pull/8511)) par @zhangzhonghe
- **[Workflow : CC]** Refonte du plugin de workflow CC pour prendre en charge l'architecture FlowModel avec compatibilité v1/v2 ([#8405](https://github.com/nocobase/nocobase/pull/8405)) par @zhangzhonghe

### 🐛 Corrections de bugs

- **[moteur de workflow]**

  - Correction d'un problème où les objets Blob ne pouvaient pas être créés dans le bloc JS. ([#8603](https://github.com/nocobase/nocobase/pull/8603)) par @gchust
  - Correction du contexte d'exécution incorrect pour "ctx.sql" dans les modèles JS. ([#8602](https://github.com/nocobase/nocobase/pull/8602)) par @gchust
- **[Composant de champ : masque]** Correction d'un problème où la fenêtre contextuelle des paramètres du champ masque ne pouvait pas charger correctement tous les rôles utilisateur. par @gchust
- **[Workflow : Approbation]** Correction d'un identifiant incorrect pour charger l'enregistrement de détail par @mytharcher

### [v2.0.0-beta.21](https://www.nocobase.com/en/blog/v2.0.0-beta.21)

*Date de sortie : 2026-02-07*

### 🎉 Nouvelles fonctionnalités

- **[client]** Prise en charge de la configuration des champs du champ de collection d'association dans le bloc de formulaire ([#8578](https://github.com/nocobase/nocobase/pull/8578)) par @katherinehhh
- **[Action : Dupliquer l'enregistrement]** Ajout de l'action de duplication 2.0 ([#8580](https://github.com/nocobase/nocobase/pull/8580)) par @katherinehhh
- **[Workflow]** Prise en charge de la copie, du collage et du déplacement de nœud par glisser-déposer sur le canevas du workflow ([#8559](https://github.com/nocobase/nocobase/pull/8559)) par @mytharcher

### 🚀 Améliorations

- **[moteur de workflow]** Amélioration de l'autocomplétion et des indications de code dans l'éditeur de code du modèle JS. ([#8575](https://github.com/nocobase/nocobase/pull/8575)) par @gchust
- **[Workflow : Approbation]** Suppression de la prise en charge des champs JS par @zhangzhonghe

### 🐛 Corrections de bugs

- **[client]**

  - Correction d'une erreur de rendu potentielle "lecture cachée" en mode non-configuration. ([#8591](https://github.com/nocobase/nocobase/pull/8591)) par @gchust
  - Correction du sous-tableau (édition en ligne) qui affiche encore les colonnes en mode édition après être passé en vue en lecture seule dans le formulaire d'édition ([#8589](https://github.com/nocobase/nocobase/pull/8589)) par @katherinehhh
- **[Moteur de workflow]** Correction d'un problème où l'utilisation d'un modèle de bloc en mode "Dupliquer" provoquait l'affichage d'une fenêtre contextuelle vide si l'on cliquait sur un bouton d'action du bloc. ([#8581](https://github.com/nocobase/nocobase/pull/8581)) par @gchust
- **[Bloc : Carte]** Correction des options de configuration 'Enregistrer comme modèle' en double dans le bloc carte ([#8584](https://github.com/nocobase/nocobase/pull/8584)) par @katherinehhh

### [v2.0.0-beta.20](https://www.nocobase.com/en/blog/v2.0.0-beta.20)

*Date de sortie : 2026-02-05*

### 🎉 Nouvelles fonctionnalités

- **[client]** Prise en charge de la configuration du mode de chargement des données ([#8551](https://github.com/nocobase/nocobase/pull/8551)) par @zhangzhonghe

### 🐛 Corrections de bugs

- **[moteur de workflow]** Correction du problème où l'action de suppression de colonne ne fonctionnait pas dans l'édition de sous-tableau contextuel lorsque createModelOptions est configuré ([#8576](https://github.com/nocobase/nocobase/pull/8576)) par @katherinehhh
- **[Gestionnaire d'emails]**

  - Ajout de filtres à la gestion par @jiannx
  - Correction du problème des emails dans la même boîte aux lettres entre plusieurs utilisateurs et optimisation des performances par @jiannx
  - Correction de la chaîne de conversation par @jiannx

## develop

![develop.png](https://static-docs.nocobase.com/7fcdd9456a17286d8a439eee52bcb8d2.png)

### [v2.0.0-alpha.71](https://www.nocobase.com/en/blog/v2.0.0-alpha.71)

*Date de sortie : 2026-02-10*

### 🎉 Nouvelles fonctionnalités

- **[client]**

  - Prise en charge de la configuration des titres d'onglet du navigateur pour les pages, les onglets de page, les fenêtres contextuelles et les onglets de fenêtre contextuelle ([#8590](https://github.com/nocobase/nocobase/pull/8590)) par @zhangzhonghe
  - Prise en charge de la configuration des champs du champ de collection d'association dans le bloc de formulaire ([#8578](https://github.com/nocobase/nocobase/pull/8578)) par @katherinehhh
- **[Bloc : GridCard]** Prise en charge de la hauteur de bloc configurable ([#8583](https://github.com/nocobase/nocobase/pull/8583)) par @katherinehhh
- **[Action : Dupliquer l'enregistrement]** Ajout de l'action de duplication 2.0 ([#8580](https://github.com/nocobase/nocobase/pull/8580)) par @katherinehhh
- **[Workflow : Approbation]** Ajout du contrôle ACL pour les API d'approbation par @mytharcher

### 🚀 Améliorations

- **[client]** Utilisation de modèles de champ indépendants pour les champs d'association dans les formulaires de filtre ([#8511](https://github.com/nocobase/nocobase/pull/8511)) par @zhangzhonghe
- **[Workflow : CC]** Refonte du plugin de workflow CC pour prendre en charge l'architecture FlowModel avec compatibilité v1/v2 ([#8405](https://github.com/nocobase/nocobase/pull/8405)) par @zhangzhonghe

### 🐛 Corrections de bugs

- **[moteur de workflow]**

  - Correction du contexte d'exécution incorrect pour "ctx.sql" dans les modèles JS. ([#8602](https://github.com/nocobase/nocobase/pull/8602)) par @gchust
  - Correction d'un problème où les objets Blob ne pouvaient pas être créés dans le bloc JS. ([#8603](https://github.com/nocobase/nocobase/pull/8603)) par @gchust
- **[client]**

  - Correction d'un problème où les colonnes du tableau ne se réaffichaient pas après avoir cliqué sur Exécuter dans l'éditeur de colonne JS. ([#8608](https://github.com/nocobase/nocobase/pull/8608)) par @gchust
  - Correction d'une erreur de rendu potentielle "lecture cachée" en mode non-configuration. ([#8591](https://github.com/nocobase/nocobase/pull/8591)) par @gchust
  - Correction du sous-tableau (édition en ligne) qui affiche encore les colonnes en mode édition après être passé en vue en lecture seule dans le formulaire d'édition ([#8589](https://github.com/nocobase/nocobase/pull/8589)) par @katherinehhh
- **[Moteur de workflow]** Correction d'un problème où l'utilisation d'un modèle de bloc en mode "Dupliquer" provoquait l'affichage d'une fenêtre contextuelle vide si l'on cliquait sur un bouton d'action du bloc. ([#8581](https://github.com/nocobase/nocobase/pull/8581)) par @gchust
- **[Composant de champ : masque]** Correction d'un problème où la fenêtre contextuelle des paramètres du champ masque ne pouvait pas charger correctement tous les rôles utilisateur. par @gchust
- **[Workflow : Approbation]** Correction d'un identifiant incorrect pour charger l'enregistrement de détail par @mytharcher

### [v2.0.0-alpha.70](https://www.nocobase.com/en/blog/v2.0.0-alpha.70)

*Date de sortie : 2026-02-06*

### 🎉 Nouvelles fonctionnalités

- **[Workflow]** Prise en charge de la copie, du collage et du déplacement de nœud par glisser-déposer sur le canevas du workflow ([#8559](https://github.com/nocobase/nocobase/pull/8559)) par @mytharcher

### 🚀 Améliorations

- **[Workflow : Approbation]** Suppression de la prise en charge des champs JS par @zhangzhonghe

### 🐛 Corrections de bugs

- **[Bloc : Carte]** Correction des options de configuration 'Enregistrer comme modèle' en double dans le bloc carte ([#8584](https://github.com/nocobase/nocobase/pull/8584)) par @katherinehhh

### [v2.0.0-alpha.69](https://www.nocobase.com/en/blog/v2.0.0-alpha.69)

*Date de sortie : 2026-02-05*

### 🎉 Nouvelles fonctionnalités

- **[client]** Prise en charge de la configuration du mode de chargement des données ([#8551](https://github.com/nocobase/nocobase/pull/8551)) par @zhangzhonghe
- **[moteur de workflow]** Prise en charge de env.ESM_CDN_BASE_URL ([#8529](https://github.com/nocobase/nocobase/pull/8529)) par @chenos
- **[Auth : DingTalk]** Permet de lier un utilisateur avec `unionId` par @2013xile

### 🚀 Améliorations

- **[moteur de workflow]** Amélioration de l'autocomplétion et des indications de code dans l'éditeur de code du modèle JS. ([#8575](https://github.com/nocobase/nocobase/pull/8575)) par @gchust
- **[client]**

  - Ajustement du réglage de la largeur de colonne à la sélection dans la liste déroulante dans le sous-tableau éditable en ligne ([#8561](https://github.com/nocobase/nocobase/pull/8561)) par @katherinehhh
  - Prise en charge de la désactivation des paramètres par défaut redondants pour `ResourceActionProvider` ([#8527](https://github.com/nocobase/nocobase/pull/8527)) par @2013xile
- **[acl]** acl ajoute la méthode generalFixedParams ([#8363](https://github.com/nocobase/nocobase/pull/8363)) par @jiannx
- **[Champ de collection : Markdown(Vditor)]** Ajout d'une option de configuration pour définir le mode d'édition par défaut dans les paramètres du composant. ([#8408](https://github.com/nocobase/nocobase/pull/8408)) par @Cyx649312038
- **[Workflow]** Modification du chemin de route des sous-pages de workflow, pour placer toutes les pages de workflow sous le préfixe `/admin/settings/workflow` ([#8519](https://github.com/nocobase/nocobase/pull/8519)) par @mytharcher
- **[IA : Base de connaissances]** Optimisation de la sortie de construction pour réduire la taille du paquet plugin-ai-knowledge-base. par @cgyrock
- **[Multi-espace]** Contrôle d'accès aux permissions multi-espace via acl par @jiannx
- **[Auth : DingTalk]** Utilisation de `userid` comme clé par défaut pour l'association utilisateur, tout en préservant la compatibilité avec les authentificateurs existants qui reposent sur le mobile par @2013xile

### 🐛 Corrections de bugs

- **[client]**

  - Correction du problème nécessitant un rafraîchissement de la page pour ajouter un enregistrement enfant après avoir activé le tableau arborescent ([#8574](https://github.com/nocobase/nocobase/pull/8574)) par @katherinehhh
  - Correction des problèmes d'espace vide dans la disposition en grille ([#8535](https://github.com/nocobase/nocobase/pull/8535)) par @zhangzhonghe
  - Correction du problème où la largeur de colonne ne se mettait pas à jour dans le sous-tableau (édition en ligne) ; la saisie de texte multiligne ne se redimensionnait pas avec la largeur de colonne ([#8573](https://github.com/nocobase/nocobase/pull/8573)) par @katherinehhh
  - Correction d'un problème où l'utilisation de la "Création rapide" du sélecteur d'enregistrement d'association dans le formulaire d'édition écrasait les données de formulaire existantes. ([#8567](https://github.com/nocobase/nocobase/pull/8567)) par @gchust
  - Correction : masquer "Activer le tableau arborescent" et "Développer toutes les lignes par défaut" pour les collections non arborescentes ([#8566](https://github.com/nocobase/nocobase/pull/8566)) par @katherinehhh
  - Correction d'un problème où le menu "Formulaire (Ajouter nouveau)" était incorrectement affiché dans la fenêtre contextuelle de l'action "Créer nouveau". ([#8562](https://github.com/nocobase/nocobase/pull/8562)) par @gchust
  - Correction du problème où le champ nanoid ne régénérait pas la valeur par défaut après la soumission de la création ([#8538](https://github.com/nocobase/nocobase/pull/8538)) par @katherinehhh
  - Correction d'un problème où le flux d'événements échouait lors de l'actualisation des blocs cibles à travers une fenêtre contextuelle. ([#8541](https://github.com/nocobase/nocobase/pull/8541)) par @gchust
  - Correction des problèmes connus liés au filtrage ([#8514](https://github.com/nocobase/nocobase/pull/8514)) par @zhangzhonghe
  - Correction d'un problème qui provoquait l'actualisation répétée du bloc de données après la soumission d'un formulaire. ([#8531](https://github.com/nocobase/nocobase/pull/8531)) par @gchust
  - Correction du problème où les données de la page étaient incorrectement actualisées après l'ouverture et la fermeture de la fenêtre contextuelle pour la première fois. ([#8548](https://github.com/nocobase/nocobase/pull/8548)) par @gchust
  - Correction d'un problème qui empêchait l'utilisation de variables de formulaire pour attribuer des valeurs dans les règles de liaison pour les champs de sous-formulaire plusieurs-à-plusieurs à plusieurs niveaux. ([#8518](https://github.com/nocobase/nocobase/pull/8518)) par @gchust
  - Correction de l'affichage incorrect lors de la définition de valeurs par défaut pour le modèle de champ en cascade ([#8537](https://github.com/nocobase/nocobase/pull/8537)) par @katherinehhh
  - Correction d'un problème où les données ne se rafraîchissaient pas après des modifications à travers des fenêtres contextuelles à plusieurs niveaux et à travers des blocs. ([#8471](https://github.com/nocobase/nocobase/pull/8471)) par @gchust
- **[moteur de workflow]**

  - Correction du problème où l'action de suppression de colonne ne fonctionnait pas dans l'édition de sous-tableau contextuel lorsque createModelOptions est configuré ([#8576](https://github.com/nocobase/nocobase/pull/8576)) par @katherinehhh
  - Correction d'un problème où la soumission du formulaire après avoir changé de page ne rafraîchissait pas la page. ([#8554](https://github.com/nocobase/nocobase/pull/8554)) par @gchust
  - Correction d'un problème où certaines bibliothèques tierces ne pouvaient pas être importées correctement dans les blocs JS. ([#8545](https://github.com/nocobase/nocobase/pull/8545)) par @gchust
  - Correction du chargement incorrect de certaines bibliothèques ESM dans runjs en raison d'une classification erronée en tant que modules AMD. ([#8536](https://github.com/nocobase/nocobase/pull/8536)) par @gchust
  - Correction du problème FilterByTK lorsque filterTargetKey est un tableau à un seul élément dans une source de données externe ([#8522](https://github.com/nocobase/nocobase/pull/8522)) par @katherinehhh
  - Correction du problème où l'action de suppression de colonne ne fonctionnait pas dans l'édition de sous-tableau contextuel lorsque createModelOptions est configuré ([#8560](https://github.com/nocobase/nocobase/pull/8560)) par @katherinehhh
- **[Champ de collection : Pièce jointe (URL)]** Correction du problème où la configuration d'affichage du nom de fichier du champ URL de pièce jointe ne fonctionnait pas dans le formulaire d'édition ([#8571](https://github.com/nocobase/nocobase/pull/8571)) par @katherinehhh
- **[Employés IA]**

  - Correction d'un problème où le nœud LLM échouait à envoyer des messages ([#8569](https://github.com/nocobase/nocobase/pull/8569)) par @2013xile
  - Correction du problème où le système ne pouvait pas démarrer après la construction ([#8523](https://github.com/nocobase/nocobase/pull/8523)) par @cgyrock
  - Correction de l'exception qui se produit lorsque les outils sont automatiquement appelés lors de la modélisation des données IA ([#8532](https://github.com/nocobase/nocobase/pull/8532)) par @cgyrock
- **[Modèles d'interface utilisateur]** Correction d'une erreur lors de la réouverture et de la soumission d'un modèle de fenêtre contextuelle sauvegardé pour le formulaire "Ajouter nouveau" du champ d'association. ([#8564](https://github.com/nocobase/nocobase/pull/8564)) par @gchust
- **[Action : Importer des enregistrements]** Correction de la vulnérabilité de l'action d'importation ([#8544](https://github.com/nocobase/nocobase/pull/8544)) par @mytharcher
- **[Gestionnaire de fichiers]** Sécurisation du chemin de fichier pour le stockage local, afin d'éviter les chemins d'accès en dehors de la racine du document ([#8539](https://github.com/nocobase/nocobase/pull/8539)) par @mytharcher
- **[Workflow]** Ajout de la tolérance aux pannes pour le composant de sélection d'enregistrement de collection, afin d'éviter une erreur levée lorsque la collection est supprimée ([#8528](https://github.com/nocobase/nocobase/pull/8528)) par @mytharcher
- **[Workflow : Événement d'action personnalisée]** Correction du problème où les paramètres et la charge utile étaient incorrects lors du déclenchement d'un workflow personnalisé par @mytharcher
- **[Multi-espace]**

  - Suppression de l'attribut read-pretty pour le champ espace par @jiannx
  - Ajout d'un script de migration pour supprimer x-ready-pretty dans le champ espace par @jiannx
- **[IA : Base de connaissances]** Correction du problème où le système ne pouvait pas démarrer après la construction par @cgyrock
- **[Action : Importer des enregistrements Pro]** Correction des nombres de comptage dans le résultat d'importation et de la traduction des messages par @mytharcher
- **[Workflow : Sous-workflow]** Correction du chemin de route du lien de workflow par @mytharcher
- **[Impression de modèle]** Correction du problème d'affichage de la liste des champs dans la configuration de l'action d'impression de modèle par @katherinehhh
- **[Workflow : Approbation]**

  - Correction du problème de performances causé par le champ JSON dans le chargement de liste (MySQL) par @mytharcher
  - Ajout de la tolérance aux pannes lors de la suppression du workflow, pour éviter une erreur de chargement dans la liste des tâches par @mytharcher
  - Correction d'une erreur levée lors de l'ajout d'un rôle à un utilisateur si le workflow des audiences est désactivé par @mytharcher
- **[Gestionnaire d'emails]** Le corps ne se réduit pas lorsque le texte est sélectionné. Correction de l'échec du téléchargement de la pièce jointe par @jiannx
- **[WeCom]** Correction d'un problème où les utilisateurs ne pouvaient pas être automatiquement enregistrés lorsque le mobile est manquant par @2013xile
