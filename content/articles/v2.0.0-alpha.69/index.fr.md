---
title: "NocoBase v2.0.0-alpha.69 : prise en charge de env.ESM_CDN_BASE_URL"
description: "Notes de version de v2.0.0-alpha.69"
---

### 🎉 Nouvelles fonctionnalités

- **[client]** Prise en charge de la configuration du mode de chargement des données ([#8551](https://github.com/nocobase/nocobase/pull/8551)) par @zhangzhonghe

- **[moteur de workflow]** Prise en charge de env.ESM_CDN_BASE_URL ([#8529](https://github.com/nocobase/nocobase/pull/8529)) par @chenos

- **[Auth : DingTalk]** Permet de lier un utilisateur avec `unionId` par @2013xile

### 🚀 Améliorations

- **[moteur de workflow]** Amélioration de l'autocomplétion et des suggestions de code dans l'éditeur de code du modèle JS. ([#8575](https://github.com/nocobase/nocobase/pull/8575)) par @gchust

- **[client]**
  - Ajustement du réglage de la largeur des colonnes en sélection déroulante dans le sous-tableau en édition inline ([#8561](https://github.com/nocobase/nocobase/pull/8561)) par @katherinehhh

  - Prise en charge de la désactivation des paramètres redondants par défaut de `appends` pour `ResourceActionProvider` ([#8527](https://github.com/nocobase/nocobase/pull/8527)) par @2013xile

- **[acl]** acl ajoute la méthode generalFixedParams ([#8363](https://github.com/nocobase/nocobase/pull/8363)) par @jiannx

- **[Champ de collection : Markdown(Vditor)]** Ajout d'une option de configuration pour définir le mode d'édition par défaut dans les paramètres du composant. ([#8408](https://github.com/nocobase/nocobase/pull/8408)) par @Cyx649312038

- **[Workflow]** Modification du chemin de route des sous-pages de workflow, pour placer toutes les pages de workflow sous le préfixe `/admin/settings/workflow` ([#8519](https://github.com/nocobase/nocobase/pull/8519)) par @mytharcher

- **[IA : Base de connaissances]** Optimisation de la sortie de construction pour réduire la taille du paquet plugin-ai-knowledge-base. par @cgyrock

- **[Multi-espace]** Contrôle des permissions d'accès à l'acl pour les multi-espaces par @jiannx

- **[Auth : DingTalk]** Utilisation de `userid` comme clé par défaut pour l'association utilisateur, tout en préservant la compatibilité avec les authentificateurs existants qui reposent sur le mobile par @2013xile

### 🐛 Corrections de bugs

- **[client]**
  - Correction du besoin de rafraîchir la page pour ajouter un enregistrement enfant après avoir activé le tableau arborescent ([#8574](https://github.com/nocobase/nocobase/pull/8574)) par @katherinehhh

  - Correction des problèmes d'espace vide dans la disposition en grille ([#8535](https://github.com/nocobase/nocobase/pull/8535)) par @zhangzhonghe

  - Correction du non-mise à jour de la largeur des colonnes dans le sous-tableau (édition inline) ; la saisie de texte multiligne ne se redimensionne pas avec la largeur de la colonne ([#8573](https://github.com/nocobase/nocobase/pull/8573)) par @katherinehhh

  - Correction d'un problème où l'utilisation de la "Création rapide" du sélecteur d'enregistrement d'association dans le formulaire d'édition écrasait les données existantes du formulaire. ([#8567](https://github.com/nocobase/nocobase/pull/8567)) par @gchust

  - correction : masquer "Activer le tableau arborescent" et "Développer toutes les lignes par défaut" pour les collections non arborescentes ([#8566](https://github.com/nocobase/nocobase/pull/8566)) par @katherinehhh

  - Correction d'un problème où le menu "Formulaire (Ajouter nouveau)" était incorrectement affiché dans la fenêtre contextuelle de l'action "Créer nouveau". ([#8562](https://github.com/nocobase/nocobase/pull/8562)) par @gchust

  - correction du champ nanoid ne régénérant pas la valeur par défaut après la soumission de la création ([#8538](https://github.com/nocobase/nocobase/pull/8538)) par @katherinehhh

  - Correction d'un problème où le flux d'événements ne s'appliquait pas lors du rafraîchissement des blocs cibles à travers une fenêtre contextuelle. ([#8541](https://github.com/nocobase/nocobase/pull/8541)) par @gchust

  - Correction des problèmes connus liés au filtrage ([#8514](https://github.com/nocobase/nocobase/pull/8514)) par @zhangzhonghe

  - Correction d'un problème qui provoquait le rafraîchissement répété du bloc de données après la soumission d'un formulaire. ([#8531](https://github.com/nocobase/nocobase/pull/8531)) par @gchust

  - Correction d'un problème où les données de la page étaient incorrectement rafraîchies après l'ouverture et la fermeture de la fenêtre contextuelle pour la première fois. ([#8548](https://github.com/nocobase/nocobase/pull/8548)) par @gchust

  - Correction d'un problème qui empêchait l'utilisation de variables de formulaire pour attribuer des valeurs dans les règles de liaison pour les champs de sous-formulaire à plusieurs niveaux de type "plusieurs-à-plusieurs". ([#8518](https://github.com/nocobase/nocobase/pull/8518)) par @gchust

  - correction d'un affichage incorrect lors du réglage des valeurs par défaut pour le modèle de champ de sélecteur en cascade ([#8537](https://github.com/nocobase/nocobase/pull/8537)) par @katherinehhh

  - Correction d'un problème où les données ne se rafraîchissaient pas après des modifications à travers des fenêtres contextuelles à plusieurs niveaux et à travers des blocs. ([#8471](https://github.com/nocobase/nocobase/pull/8471)) par @gchust

- **[moteur de workflow]**
  - correction de l'action de suppression de colonne ne fonctionnant pas dans l'édition de sous-tableau contextuel lorsque createModelOptions est configuré ([#8576](https://github.com/nocobase/nocobase/pull/8576)) par @katherinehhh

  - Correction d'un problème où la soumission du formulaire après avoir changé de page ne rafraîchissait pas la page. ([#8554](https://github.com/nocobase/nocobase/pull/8554)) par @gchust

  - Correction d'un problème où certaines bibliothèques tierces ne pouvaient pas être importées correctement dans les blocs JS. ([#8545](https://github.com/nocobase/nocobase/pull/8545)) par @gchust

  - Correction du chargement incorrect de certaines bibliothèques ESM dans runjs en raison d'une classification erronée en tant que modules AMD. ([#8536](https://github.com/nocobase/nocobase/pull/8536)) par @gchust

  - correction du problème FilterByTK lorsque filterTargetKey est un tableau à un seul élément dans une source de données externe ([#8522](https://github.com/nocobase/nocobase/pull/8522)) par @katherinehhh

  - correction de l'action de suppression de colonne ne fonctionnant pas dans l'édition de sous-tableau contextuel lorsque createModelOptions est configuré ([#8560](https://github.com/nocobase/nocobase/pull/8560)) par @katherinehhh

- **[Champ de collection : Pièce jointe (URL)]** Correction de la configuration d'affichage du nom de fichier du champ d'URL de pièce jointe ne fonctionnant pas dans le formulaire d'édition ([#8571](https://github.com/nocobase/nocobase/pull/8571)) par @katherinehhh

- **[Employés IA]**
  - Correction d'un problème où le nœud LLM échouait à envoyer des messages ([#8569](https://github.com/nocobase/nocobase/pull/8569)) par @2013xile

  - Correction du problème où le système ne pouvait pas démarrer après la construction ([#8523](https://github.com/nocobase/nocobase/pull/8523)) par @cgyrock

  - Correction de l'exception qui se produit lorsque les outils sont appelés automatiquement lors de la modélisation des données IA ([#8532](https://github.com/nocobase/nocobase/pull/8532)) par @cgyrock

- **[Modèles d'interface utilisateur]** Correction d'une erreur lors de la réouverture et de la soumission d'un modèle de fenêtre contextuelle enregistré pour le formulaire "Ajouter nouveau" du champ d'association. ([#8564](https://github.com/nocobase/nocobase/pull/8564)) par @gchust

- **[Action : Importer des enregistrements]** Correction de la vulnérabilité de l'action d'importation ([#8544](https://github.com/nocobase/nocobase/pull/8544)) par @mytharcher

- **[Gestionnaire de fichiers]** Sécurisation du chemin de fichier pour le stockage local, afin d'éviter un chemin d'accès en dehors de la racine du document ([#8539](https://github.com/nocobase/nocobase/pull/8539)) par @mytharcher

- **[Workflow]** Ajout de la tolérance aux pannes pour le composant de sélection d'enregistrement de collection, afin d'éviter une erreur lorsque la collection est supprimée ([#8528](https://github.com/nocobase/nocobase/pull/8528)) par @mytharcher

- **[Workflow : Événement d'action personnalisée]** Correction du problème où les paramètres et la charge utile étaient incorrects lors du déclenchement d'un workflow personnalisé par @mytharcher

- **[Multi-espace]**
  - suppression de l'attribut read-pretty pour le champ d'espace par @jiannx

  - ajout d'un script de migration pour supprimer x-ready-pretty dans le champ d'espace par @jiannx

- **[IA : Base de connaissances]** Correction du problème où le système ne pouvait pas démarrer après la construction par @cgyrock

- **[Action : Importer des enregistrements Pro]** Correction des nombres dans le résultat d'importation et de la traduction des messages par @mytharcher

- **[Workflow : Sous-workflow]** Correction du chemin de route du lien de workflow par @mytharcher

- **[Impression de modèle]** correction d'un problème d'affichage de la liste des champs dans la configuration de l'action d'impression de modèle par @katherinehhh

- **[Workflow : Approbation]**
  - Correction d'un problème de performance causé par le champ JSON dans le chargement de la liste (MySQL) par @mytharcher

  - Ajout de la tolérance aux pannes lors de la suppression du workflow, pour éviter une erreur de chargement dans la liste des tâches par @mytharcher

  - Correction d'une erreur lors de l'ajout d'un rôle à un utilisateur si le workflow des audiences est désactivé par @mytharcher

- **[Gestionnaire d'e-mails]** le corps ne se réduit pas lorsque le texte est sélectionné. correction de l'échec du téléchargement de la pièce jointe par @jiannx

- **[WeCom]** Correction d'un problème où les utilisateurs ne pouvaient pas être automatiquement enregistrés lorsque le mobile est manquant par @2013xile
