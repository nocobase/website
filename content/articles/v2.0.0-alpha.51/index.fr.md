---
title: "NocoBase v2.0.0-alpha.51 : Prise en charge de la personnalisation des styles globaux dans l'éditeur de thème"
description: "Notes de version de v2.0.0-alpha.51"
---

### 🎉 Nouvelles fonctionnalités

- **[client]**
  - Prise en charge de la personnalisation des styles globaux dans l'éditeur de thème ([#7960](https://github.com/nocobase/nocobase/pull/7960)) par @ljmiaoo

  - Prise en charge de la définition d'une règle de tri par défaut dans le bloc de détail ([#8070](https://github.com/nocobase/nocobase/pull/8070)) par @katherinehhh

  - Prise en charge du type de données pour le champ Nombre (options : double, float, decimal) ([#8058](https://github.com/nocobase/nocobase/pull/8058)) par @chenos

- **[Champ de collection : Séquence]** Mise à jour automatique des champs de séquence après une migration de données ([#8063](https://github.com/nocobase/nocobase/pull/8063)) par @cgyrock

### 🚀 Améliorations

- **[client]**
  - Correction du saut de pagination dans le sous-tableau après la suppression d'une ligne et ajout de la prise en charge des règles de validation de colonne ([#8094](https://github.com/nocobase/nocobase/pull/8094)) par @katherinehhh

  - Ajustement de l'affichage des grands champs dans le sous-tableau éditable ([#8078](https://github.com/nocobase/nocobase/pull/8078)) par @katherinehhh

  - Prise en charge des points de suspension pour le contenu des champs JSON débordants ([#8067](https://github.com/nocobase/nocobase/pull/8067)) par @katherinehhh

- **[moteur de flux]**
  - Ajout de l'option useCache à FlowModelRenderer ([#8072](https://github.com/nocobase/nocobase/pull/8072)) par @zhangzhonghe

  - Ajout de la méthode `removeModelWithSubModels` pour supprimer récursivement un modèle et ses sous-modèles ([#8064](https://github.com/nocobase/nocobase/pull/8064)) par @zhangzhonghe

- **[Bloc : GridCard]** ajout de la configuration du nombre de lignes pour la carte en grille et remplacement de pageSize par un calcul automatique ([#8055](https://github.com/nocobase/nocobase/pull/8055)) par @katherinehhh

- **[Journaux d'audit]** Mise à jour du champ d'identifiant unique en `text` pour éviter le débordement de longueur d'identifiant lors des modifications en masse par @2013xile

- **[Gestionnaire de migration]** Mise à jour automatique des champs de séquence après une migration de données par @cgyrock

### 🐛 Corrections de bugs

- **[client]**
  - Correction d'un problème où les champs configurés d'un bloc supprimé n'étaient pas supprimés du bloc de filtre. ([#8098](https://github.com/nocobase/nocobase/pull/8098)) par @gchust

  - Correction d'un espace supplémentaire lorsque le bouton est masqué en mode non-configuration ([#8092](https://github.com/nocobase/nocobase/pull/8092)) par @katherinehhh

  - Correction d'un problème où le texte du bouton de réinitialisation dans le bloc de formulaire de filtre ne pouvait pas être modifié. ([#8089](https://github.com/nocobase/nocobase/pull/8089)) par @gchust

  - Correction d'un problème où la saisie de champ ne prenait pas en charge les valeurs multiples lors de l'utilisation des opérateurs $in ou $notIn pour filtrer les champs. ([#8081](https://github.com/nocobase/nocobase/pull/8081)) par @gchust

  - Correction d'un problème où les blocs de données nouvellement ajoutés n'apparaissaient pas automatiquement dans le menu des champs du bloc de formulaire de filtre. ([#8085](https://github.com/nocobase/nocobase/pull/8085)) par @gchust

  - Le menu de configuration des champs d'association dans les formulaires de filtre ne doit pas afficher l'option de création rapide. ([#8083](https://github.com/nocobase/nocobase/pull/8083)) par @gchust

  - Correction d'un problème de données de sous-tableau d'association dans le bloc Liste ([#8082](https://github.com/nocobase/nocobase/pull/8082)) par @katherinehhh

  - Correction des règles de validation des champs numériques des paramètres de collection non appliquées ([#8025](https://github.com/nocobase/nocobase/pull/8025)) par @katherinehhh

  - Correction d'un problème où les champs dans les formulaires de filtre étaient restreints par les règles de validation côté serveur des champs. ([#8074](https://github.com/nocobase/nocobase/pull/8074)) par @gchust

  - Problème d'édition rapide du champ json ([#8059](https://github.com/nocobase/nocobase/pull/8059)) par @katherinehhh

  - Correction d'un problème d'affichage des grands champs dans l'édition du sous-tableau ([#8069](https://github.com/nocobase/nocobase/pull/8069)) par @katherinehhh

  - Correction d'une erreur de création rapide lorsque allowMultiple est désactivé dans la sélection d'enregistrement d'association ([#8034](https://github.com/nocobase/nocobase/pull/8034)) par @katherinehhh

  - Correction : le champ json doit être soumis en tant qu'objet ([#8057](https://github.com/nocobase/nocobase/pull/8057)) par @katherinehhh

  - Correction d'un problème où la touche Entrée ne pouvait pas être utilisée pour déclencher l'action de filtre. ([#8056](https://github.com/nocobase/nocobase/pull/8056)) par @gchust

- **[moteur de flux]**
  - Correction d'un problème où les options de configuration du composant précédent restaient visibles dans le menu après avoir changé de composant de champ. ([#8095](https://github.com/nocobase/nocobase/pull/8095)) par @gchust

  - Déplacement de useEffect avant le retour conditionnel dans FlowModelRenderer ([#8088](https://github.com/nocobase/nocobase/pull/8088)) par @zhangzhonghe

  - Correction d'un problème où des champs d'association non pris en charge apparaissaient dans les champs d'opération de filtre. ([#8086](https://github.com/nocobase/nocobase/pull/8086)) par @gchust

- **[acl]** correction : acl.allow exécuté trop tôt ([#8065](https://github.com/nocobase/nocobase/pull/8065)) par @chenos

- **[Gestionnaire de fichiers]**
  - Correction de l'affichage incorrect des données de sous-détail dans les blocs Liste et GridCard ([#8087](https://github.com/nocobase/nocobase/pull/8087)) par @katherinehhh

  - Correction du champ de pièce jointe non affiché correctement dans le sous-tableau readPretty ([#8073](https://github.com/nocobase/nocobase/pull/8073)) par @katherinehhh

- **[Workflow]**
  - Correction du problème d'erreur levée dans le canevas d'exécution lorsqu'un nœud est supprimé ([#8090](https://github.com/nocobase/nocobase/pull/8090)) par @mytharcher

  - Correction du problème d'erreur levée sur la page d'exécution lorsque les jobs sur un nœud sont indéfinis ([#8066](https://github.com/nocobase/nocobase/pull/8066)) par @mytharcher

- **[Champ de collection : Formule]** Correction d'un problème où les champs de formule ne pouvaient pas être ajoutés au bloc de formulaire de filtre. ([#8071](https://github.com/nocobase/nocobase/pull/8071)) par @gchust

- **[Bloc : Panneau d'actions]** optimisation du style dans la disposition Liste du bloc panneau d'actions ([#8084](https://github.com/nocobase/nocobase/pull/8084)) par @katherinehhh

- **[Employés IA]**
  - Résolution du problème où le nom du rôle de la source de données n'était pas compilé ([#8076](https://github.com/nocobase/nocobase/pull/8076)) par @heziqiang

  - Correction d'un problème où certains champs d'enregistrement en cours ne pouvaient pas être affichés dans le composant de sélection de variables. ([#8053](https://github.com/nocobase/nocobase/pull/8053)) par @gchust

- **[Action : Importer des enregistrements]** Les champs importés ne correspondent pas aux champs définis dans les paramètres ACL ([#8075](https://github.com/nocobase/nocobase/pull/8075)) par @2013xile

- **[Contrôle d'accès]** Ajout d'un middleware pour les vérifications de permissions sur les opérations d'association pour les sources de données externes ([#8062](https://github.com/nocobase/nocobase/pull/8062)) par @2013xile

- **[Workflow : Approbation]**
  - Correction du problème d'absence de données lors du chargement des approbations liées avec des variables de portée ACL par @mytharcher

  - Correction du problème de disparition des données remplies dans le formulaire du destinataire par @mytharcher

  - Correction du problème d'erreur de permission levée lors du chargement des approbations liées à un enregistrement dans le panneau de détail par @mytharcher

  - Correction du problème de processus incorrect lors du branchement avec ordre et contreseing par @mytharcher

  - Correction du problème de OOM lors du listage des approbations par @mytharcher

  - Correction du problème où les enregistrements d'approbation ne sont pas inclus dans le résultat du job dans la branche de retour par @mytharcher

  - Correction du problème où la fenêtre contextuelle de l'approbateur n'affiche pas de titre par @zhangzhonghe

  - Correction du problème d'erreur levée lors du chargement d'une approbation liée en mode rôle union uniquement par @mytharcher

- **[Gestionnaire d'emails]**
  - Gestion des données anormales par @jiannx

  - Non synchronisation du statut programmé de Gmail par @jiannx
