---
title: "NocoBase v1.9.0-beta.3 : Prise en charge de la configuration d'un secret d'authentification indépendant pour les sous-applications"
description: "Notes de version de v1.9.0-beta.3"
---

### 🎉 Nouvelles fonctionnalités

- **[Gestionnaire multi-applications]** Prise en charge de la configuration d'un secret d'authentification indépendant pour les sous-applications ([#7197](https://github.com/nocobase/nocobase/pull/7197)) par @mytharcher

- **[Workflow : CC]** Ajout d'un nœud CC au workflow ([#7201](https://github.com/nocobase/nocobase/pull/7201)) par @mytharcher

- **[Workflow : Approbation]** Ajout d'un initialiseur pour le déclencheur par @mytharcher

### 🚀 Améliorations

- **[Notification : Message in-app]** Optimisation de la taille de police pour la page de messages mobiles ([#7199](https://github.com/nocobase/nocobase/pull/7199)) par @zhangzhonghe

- **[Workflow]** Conversion des opérandes en chaîne avant la comparaison de chaînes dans le calcul logique ([#7190](https://github.com/nocobase/nocobase/pull/7190)) par @mytharcher

- **[Gestionnaire multi-applications]**
  - Ajout des options de base de données et d'autorisation pour les sous-applications ([#7184](https://github.com/nocobase/nocobase/pull/7184)) par @mytharcher

  - Ajout des options de base de données et d'autorisation pour les sous-applications ([#7184](https://github.com/nocobase/nocobase/pull/7184)) par @mytharcher

- **[Champ de collection : Code]** Ajout du paramètre d'indentation par @mytharcher

- **[Auth : DingTalk]** Prise en charge de la configuration du protocole et du numéro de port de l'URL de rappel par @2013xile

### 🐛 Corrections de bugs

- **[client]**
  - Problème où les champs de pièce jointe ne pouvaient pas être sélectionnés comme variables dans une règle de liaison ([#7213](https://github.com/nocobase/nocobase/pull/7213)) par @zhangzhonghe

  - Erreur lors de l'affectation de valeurs dans un bloc liste utilisant un champ de tri Kanban ([#7208](https://github.com/nocobase/nocobase/pull/7208)) par @katherinehhh

  - Réduction du filtre : Le filtre n'est pas déclenché lors de l'initialisation de la page après avoir défini des valeurs par défaut pour les champs ([#7206](https://github.com/nocobase/nocobase/pull/7206)) par @zhangzhonghe

  - L'affectation de valeur échoue dans le formulaire d'édition lorsque la valeur et les options sont toutes deux définies pour un champ de sélection ([#7209](https://github.com/nocobase/nocobase/pull/7209)) par @katherinehhh

  - Action popup : L'affichage de la page ne correspond pas aux attentes après avoir changé d'onglet ([#7212](https://github.com/nocobase/nocobase/pull/7212)) par @zhangzhonghe

  - Le titre de l'onglet du navigateur n'est pas synchronisé lors du changement entre les sous-menus ([#7207](https://github.com/nocobase/nocobase/pull/7207)) par @zhangzhonghe

  - Correction du problème où les composants de sélection déroulante sont bloqués par le clavier sur iOS ([#7149](https://github.com/nocobase/nocobase/pull/7149)) par @zhangzhonghe

- **[acl]** Correction d'une erreur lors de la suppression d'un rôle en mode union de rôles qui inclut le rôle racine. ([#7198](https://github.com/nocobase/nocobase/pull/7198)) par @aaaaaajie

- **[Authentification]** Correction du problème où la page de connexion ne pouvait pas défiler ([#7159](https://github.com/nocobase/nocobase/pull/7159)) par @zhangzhonghe

- **[Gestionnaire multi-applications]** Correction des options d'authentification dans une position inattendue ([#7210](https://github.com/nocobase/nocobase/pull/7210)) par @mytharcher

- **[Notification : Message in-app]** Correction du problème BigInt avec timestamp au format chaîne causant un problème dayjs ([#7196](https://github.com/nocobase/nocobase/pull/7196)) par @mytharcher

- **[Action : Requête personnalisée]** Problème d'analyse de variable dans l'URL lors de la navigation après le succès d'une requête personnalisée ([#7186](https://github.com/nocobase/nocobase/pull/7186)) par @katherinehhh

- **[Bloc : Kanban]** Correction des problèmes d'interface utilisateur de sous-tableau dans Kanban et ajout de la prise en charge du réglage de la largeur des colonnes Kanban ([#7189](https://github.com/nocobase/nocobase/pull/7189)) par @katherinehhh

- **[Workflow : Approbation]**
  - Ajout de `try/catch` dans la migration lors de la mise à jour du schéma d'interface utilisateur par @mytharcher

  - Correction des bugs de bloc et d'association par @mytharcher

  - Rechargement de l'association sur l'enregistrement par @mytharcher

  - Pour éviter une erreur lorsque l'utilisateur n'existe pas par @mytharcher
