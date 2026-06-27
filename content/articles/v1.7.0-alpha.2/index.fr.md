---
title: "NocoBase v1.7.0-alpha.2 : prise en charge de la configuration des options de champ sélectionnables dans les règles de liaison"
description: "Notes de version de v1.7.0-alpha.2"
---

### 🎉 Nouvelles fonctionnalités

- **[client]**
  - Ajout d'un paramètre de portée des données pour le composant de sélection en cascade ([#6386](https://github.com/nocobase/nocobase/pull/6386)) par @Cyx649312038

  - Le bloc tableau prend désormais en charge le masquage de la colonne d'index (visible par défaut) ([#6416](https://github.com/nocobase/nocobase/pull/6416)) par @katherinehhh

  - Prise en charge de la configuration des options de champ sélectionnable dans les règles de liaison ([#6338](https://github.com/nocobase/nocobase/pull/6338)) par @katherinehhh

  - Prise en charge de la configuration de la portée de date (min/max) pour les champs de temps dans les règles de liaison ([#6356](https://github.com/nocobase/nocobase/pull/6356)) par @katherinehhh

- **[acl]** Prise en charge de l'union des rôles utilisateur ([#6301](https://github.com/nocobase/nocobase/pull/6301)) par @aaaaaajie

- **[Bloc : Panneau d'actions]** Prise en charge du saut de ligne pour le titre des actions dans le panneau d'actions ([#6433](https://github.com/nocobase/nocobase/pull/6433)) par @katherinehhh

- **[plugin-demo-platform]** Définition de skipAuthCheck de la route "/new" sur true. par @sheldon66

- **[WeCom]** Permet de définir une infobulle personnalisée pour le bouton de connexion par @2013xile

### 🚀 Améliorations

- **[utils]**
  - Déplacement de `md5` vers utils ([#6468](https://github.com/nocobase/nocobase/pull/6468)) par @mytharcher

  - Adaptation de la page de bureau pour les appareils mobiles ([#6393](https://github.com/nocobase/nocobase/pull/6393)) par @zhangzhonghe

- **[client]** Ajout de skipAuthCheck à router.add pour éviter la redirection vers la page de connexion sur les pages publiques. ([#6453](https://github.com/nocobase/nocobase/pull/6453)) par @sheldon66

- **[Visualisation de données]** Remplacement du `x-designer` obsolète par `x-settings` ([#6442](https://github.com/nocobase/nocobase/pull/6442)) par @2013xile

### 🐛 Corrections de bugs

- **[client]**
  - Dans le bloc arborescent, lors de la déselection, les données dans le bloc de données ne sont pas effacées ([#6460](https://github.com/nocobase/nocobase/pull/6460)) par @zhangzhonghe

  - Correction d'un caractère spécial dans l'URL de l'image empêchant son affichage ([#6459](https://github.com/nocobase/nocobase/pull/6459)) par @mytharcher

  - Numéro de page incorrect lors de l'ajout de données après un changement de taille de page dans un sous-tableau ([#6437](https://github.com/nocobase/nocobase/pull/6437)) par @katherinehhh

  - Le contenu n'est pas entièrement affiché dans les navigateurs mobiles ([#6446](https://github.com/nocobase/nocobase/pull/6446)) par @zhangzhonghe

  - Le style du logo est incohérent avec le précédent ([#6444](https://github.com/nocobase/nocobase/pull/6444)) par @zhangzhonghe

  - La sélection de plage de dates pour un champ de date exclut la date maximale ([#6418](https://github.com/nocobase/nocobase/pull/6418)) par @katherinehhh

  - Lors de l'utilisation de l'opérateur '$anyOf', la règle de liaison est invalide ([#6415](https://github.com/nocobase/nocobase/pull/6415)) par @zhangzhonghe

  - Changement de valeur du champ à sélection multiple et perte d'option lors de la suppression d'enregistrements dans un sous-tableau ([#6405](https://github.com/nocobase/nocobase/pull/6405)) par @katherinehhh

  - Données non mises à jour dans les fenêtres contextuelles ouvertes via les boutons Lien ([#6411](https://github.com/nocobase/nocobase/pull/6411)) par @zhangzhonghe

- **[acl]** Correction du problème où les champs de relation ne sont pas affichés sous l'union des rôles. ([#6456](https://github.com/nocobase/nocobase/pull/6456)) par @aaaaaajie

- **[Gestionnaire de fichiers]**
  - Impossible de supprimer les fichiers stockés dans S3. ([#6467](https://github.com/nocobase/nocobase/pull/6467)) par @chenos

  - Correction de quelques problèmes du gestionnaire de fichiers ([#6436](https://github.com/nocobase/nocobase/pull/6436)) par @mytharcher

- **[Workflow]** Suppression du bouton de paramètres du workflow lié du sélecteur de données ([#6455](https://github.com/nocobase/nocobase/pull/6455)) par @mytharcher

- **[Workflow : Nœud manuel]**
  - Correction d'une erreur levée lors de la migration ([#6445](https://github.com/nocobase/nocobase/pull/6445)) par @mytharcher

  - Changement de la limite de version de la migration à `<1.7.0` ([#6430](https://github.com/nocobase/nocobase/pull/6430)) par @mytharcher

  - Correction de la migration qui manquait le préfixe de table et la logique de schéma ([#6425](https://github.com/nocobase/nocobase/pull/6425)) par @mytharcher

- **[Contrôle d'accès]**
  - Correction du changement de rôle qui ne prenait pas effet. ([#6454](https://github.com/nocobase/nocobase/pull/6454)) par @aaaaaajie

  - Erreur lorsque la portée des données est définie sur ses propres données et que la table manque un champ créateur. ([#6428](https://github.com/nocobase/nocobase/pull/6428)) par @aaaaaajie

- **[Client WEB]** Remplacement de toutes les instances de ctx.state.currentRole (rôle unique) par ctx.state.currentRoles (prend en charge plusieurs rôles). ([#6427](https://github.com/nocobase/nocobase/pull/6427)) par @aaaaaajie

- **[Action : Édition par lot]** Correction du déclenchement du workflow dans la soumission d'édition par lot ([#6440](https://github.com/nocobase/nocobase/pull/6440)) par @mytharcher

- **[Gestionnaire de sources de données]** Le changement de source de données dans la gestion des rôles ne charge pas les collections correspondantes ([#6431](https://github.com/nocobase/nocobase/pull/6431)) par @katherinehhh

- **[Visualisation de données]** Les champs supprimés apparaissent lors de l'ajout de champs de filtre personnalisés ([#6450](https://github.com/nocobase/nocobase/pull/6450)) par @2013xile

- **[Notification : Message in-app]**
  - Différenciation de la couleur d'arrière-plan de la liste des messages in-app de celle des cartes de message pour améliorer la hiérarchie visuelle et la lisibilité. ([#6417](https://github.com/nocobase/nocobase/pull/6417)) par @sheldon66

  - Éviter qu'une configuration de destinataires incorrecte n'interroge tous les utilisateurs ([#6424](https://github.com/nocobase/nocobase/pull/6424)) par @sheldon66

- **[Action : Requête personnalisée]** Erreur de validation des permissions côté serveur pour les requêtes personnalisées ([#6438](https://github.com/nocobase/nocobase/pull/6438)) par @katherinehhh

- **[Auth : Clés API]** Suppression de l'union dans la liste des rôles du plugin de clés API ([#6432](https://github.com/nocobase/nocobase/pull/6432)) par @aaaaaajie

- **[Bloc : Modèle]** Comportement incorrect de "Enregistrer comme modèle" dans le client mobile ([#6420](https://github.com/nocobase/nocobase/pull/6420)) par @gchust

- **[Workflow : Événement d'action personnalisée]** Suppression de `only` dans le cas de test E2E par @mytharcher

- **[Stockage de fichiers : S3(Pro)]** Résolution du problème d'URL signées S3 Pro inaccessibles par @chenos

- **[Workflow : Approbation]**
  - Éviter le crash de la page lorsqu'aucun demandeur n'est présent dans la table du processus d'approbation par @mytharcher

  - Correction de l'absence d'affichage des données d'association dans le formulaire d'approbation par @mytharcher

  - Correction d'une erreur levée lors de l'approbation sur une source de données externe par @mytharcher
