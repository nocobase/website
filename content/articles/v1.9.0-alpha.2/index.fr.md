---
title: "NocoBase v1.9.0-alpha.2 : Prise en charge de la configuration d'un secret d'authentification indépendant pour les sous-applications"
description: "Notes de version de v1.9.0-alpha.2"
---

### 🎉 Nouvelles fonctionnalités

- **[Gestionnaire multi-applications]** Prise en charge de la configuration d'un secret d'authentification indépendant pour les sous-applications ([#7197](https://github.com/nocobase/nocobase/pull/7197)) par @mytharcher

- **[Workflow : CC]** Ajout d'un nœud CC au workflow ([#7201](https://github.com/nocobase/nocobase/pull/7201)) par @mytharcher

- **[Workflow : Approbation]** Ajout d'un initialiseur pour le déclencheur par @mytharcher

### 🚀 Améliorations

- **[Champ de collection : Formule]** Ajout d'interfaces calculables supplémentaires ([#7215](https://github.com/nocobase/nocobase/pull/7215)) par @mytharcher

- **[Workflow]**
  - Utilisation de la journalisation au lieu de lever une erreur lorsque l'exécution ne doit pas avoir lieu en raison du statut ([#7217](https://github.com/nocobase/nocobase/pull/7217)) par @mytharcher

  - Conversion des opérandes en chaîne avant la comparaison de chaînes dans le calcul logique ([#7190](https://github.com/nocobase/nocobase/pull/7190)) par @mytharcher

- **[Notification : Message in-app]** Optimisation de la taille de police pour la page des messages mobiles ([#7199](https://github.com/nocobase/nocobase/pull/7199)) par @zhangzhonghe

- **[Gestionnaire multi-applications]**
  - Ajout d'options de base de données et d'autorisation pour les sous-applications ([#7184](https://github.com/nocobase/nocobase/pull/7184)) par @mytharcher

  - Ajout d'options de base de données et d'autorisation pour les sous-applications ([#7184](https://github.com/nocobase/nocobase/pull/7184)) par @mytharcher

- **[Champ de collection : Code]** Ajout d'un paramètre d'indentation par @mytharcher

- **[Workflow : Approbation]** Prise en charge de la suppression de l'approbation lorsque les données associées sont supprimées par @mytharcher

- **[Authentification : DingTalk]** Prise en charge de la configuration du protocole et du numéro de port de l'URL de rappel par @2013xile

### 🐛 Corrections de bugs

- **[client]**
  - Problème où les champs de pièce jointe ne pouvaient pas être sélectionnés comme variables dans les règles de liaison ([#7213](https://github.com/nocobase/nocobase/pull/7213)) par @zhangzhonghe

  - Réduction du filtre : Le filtre n'est pas déclenché lors de l'initialisation de la page après avoir défini des valeurs par défaut pour les champs ([#7206](https://github.com/nocobase/nocobase/pull/7206)) par @zhangzhonghe

  - Problème d'affichage pour les champs d'association dans les règles de liaison ([#7220](https://github.com/nocobase/nocobase/pull/7220)) par @katherinehhh

  - L'affectation de valeur échoue dans le formulaire d'édition lorsque la valeur et les options sont toutes deux définies pour un champ de sélection ([#7209](https://github.com/nocobase/nocobase/pull/7209)) par @katherinehhh

  - Erreur lors de l'affectation de valeurs dans un bloc de liste utilisant un champ de tri Kanban ([#7208](https://github.com/nocobase/nocobase/pull/7208)) par @katherinehhh

  - Action contextuelle : L'affichage de la page ne correspond pas aux attentes après avoir changé d'onglet ([#7212](https://github.com/nocobase/nocobase/pull/7212)) par @zhangzhonghe

  - Le titre de l'onglet du navigateur n'est pas synchronisé lors du basculement entre les sous-menus ([#7207](https://github.com/nocobase/nocobase/pull/7207)) par @zhangzhonghe

  - Correction du problème où les composants de sélection déroulante sont bloqués par le clavier sur iOS ([#7149](https://github.com/nocobase/nocobase/pull/7149)) par @zhangzhonghe

  - L'affichage du champ de case à cocher est incorrect dans la collection de champs d'association du formulaire ([#7176](https://github.com/nocobase/nocobase/pull/7176)) par @zhangzhonghe

  - Correction du problème où le clic sur les boutons ne permet pas d'ouvrir les fenêtres contextuelles ([#7180](https://github.com/nocobase/nocobase/pull/7180)) par @zhangzhonghe

- **[acl]** Correction d'une erreur lors de la suppression d'un rôle en mode union de rôles qui inclut le rôle racine. ([#7198](https://github.com/nocobase/nocobase/pull/7198)) par @aaaaaajie

- **[base de données]** Correction d'un problème où les champs des vues ne s'affichaient pas dans les blocs. ([#7162](https://github.com/nocobase/nocobase/pull/7162)) par @aaaaaajie

- **[Gestionnaire multi-applications]** Correction des options d'authentification dans une position inattendue ([#7210](https://github.com/nocobase/nocobase/pull/7210)) par @mytharcher

- **[Notification : Message in-app]** Correction du problème où le timestamp BigInt au format chaîne provoque un problème avec dayjs ([#7196](https://github.com/nocobase/nocobase/pull/7196)) par @mytharcher

- **[Authentification]** Correction du problème où la page de connexion ne peut pas défiler ([#7159](https://github.com/nocobase/nocobase/pull/7159)) par @zhangzhonghe

- **[Action : Requête personnalisée]** Problème d'analyse des variables dans l'URL lors de la navigation après le succès d'une requête personnalisée ([#7186](https://github.com/nocobase/nocobase/pull/7186)) par @katherinehhh

- **[Bloc : Kanban]** Correction des problèmes d'interface utilisateur de la sous-table dans Kanban et ajout de la prise en charge du réglage de la largeur des colonnes Kanban ([#7189](https://github.com/nocobase/nocobase/pull/7189)) par @katherinehhh

- **[Workflow : Nœud manuel]** Correction d'une erreur levée lors de l'utilisation d'une variable ([#7177](https://github.com/nocobase/nocobase/pull/7177)) par @mytharcher

- **[Modèle d'impression]** Ajout d'un script de migration vers le champ rootDataType par @jiannx

- **[Workflow : Approbation]**
  - Correction des associations lors de la soumission de l'approbation par @mytharcher

  - Correction d'une exception lors de la suppression d'un enregistrement par @mytharcher

  - Correction de la branche approuvée qui ne s'exécutait pas en l'absence de responsable par @mytharcher

  - Pour éviter une erreur lorsque l'utilisateur n'existe pas par @mytharcher

  - Correction de bugs de bloc et d'association par @mytharcher

  - Ajout de `try/catch` dans la migration lors de la mise à jour du schéma d'interface utilisateur par @mytharcher

  - Rechargement de l'association sur l'enregistrement par @mytharcher
