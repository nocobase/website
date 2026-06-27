---
title: "NocoBase v2.0.56 : plugin open source de gestionnaire de sauvegarde"
description: "Notes de version de la v2.0.56"
---

### 🎉 Nouvelles fonctionnalités

- **[Gestionnaire de sauvegarde]** Plugin open source de gestionnaire de sauvegarde ([#9550](https://github.com/nocobase/nocobase/pull/9550)) par @chenos

### 🚀 Améliorations

- **[client]** Optimisation des paramètres d'affichage des boutons d'action ([#9510](https://github.com/nocobase/nocobase/pull/9510)) par @katherinehhh
- **[moteur de workflow]** Les menus de configuration des champs V2 prennent désormais en charge la recherche de champs ([#9489](https://github.com/nocobase/nocobase/pull/9489)) par @zhangzhonghe
- **[non défini]**

  - Ajout d'une revue de sécurité des dépendances pour les pull requests ([#9523](https://github.com/nocobase/nocobase/pull/9523)) par @zhangzhonghe
  - **[Gestionnaire de notifications]** Modification de la stratégie de file d'attente pour optimiser les performances d'envoi ([#9407](https://github.com/nocobase/nocobase/pull/9407)) par @mytharcher
- **[IA : Base de connaissances]** Activation de la modification du stockage vectoriel pour les bases de connaissances IA par @cgyrock
- **[Workflow : Approbation]** Amélioration des approbations associées avec des cartes chronologiques par @zhangzhonghe

### 🐛 Corrections de bugs

- **[client]**

  - Correction de l'effacement des valeurs sélectionnées lorsque les champs d'association dépendants changent dans le lien de portée des données ([#9551](https://github.com/nocobase/nocobase/pull/9551)) par @katherinehhh
  - Correction du problème où un badge de menu affiche encore un point lorsque sa valeur est 0 ([#9491](https://github.com/nocobase/nocobase/pull/9491)) par @zhangzhonghe
  - Correction du problème où les formulaires de filtre ne peuvent pas utiliser les variables du formulaire courant ([#9474](https://github.com/nocobase/nocobase/pull/9474)) par @zhangzhonghe
  - Correction du problème où les blocs V2 réduits deviennent pleine largeur après avoir quitté le mode édition ([#9529](https://github.com/nocobase/nocobase/pull/9529)) par @zhangzhonghe
  - Correction de l'état incorrect du menu du champ JS dans les sous-formulaires. ([#9507](https://github.com/nocobase/nocobase/pull/9507)) par @gchust
- **[moteur de workflow]** Correction du problème de sélection multiple pour les champs de source de données externes dans le formulaire V2 ([#9542](https://github.com/nocobase/nocobase/pull/9542)) par @katherinehhh
- **[Employés IA]** Correction d'une erreur lorsqu'un employé IA accède à une base de connaissances en lecture seule ([#9539](https://github.com/nocobase/nocobase/pull/9539)) par @cgyrock
- **[Calendrier]** Correction du problème où les éléments supplémentaires du calendrier ne peuvent pas être entièrement affichés ([#9492](https://github.com/nocobase/nocobase/pull/9492)) par @zhangzhonghe
- **[Action : Mise à jour groupée]** Correction de l'état de chargement de l'action de mise à jour groupée après un échec de mise à jour ([#9509](https://github.com/nocobase/nocobase/pull/9509)) par @katherinehhh
- **[Documentation API]** Correction de la documentation API des collections afin que les paramètres de requête n'interfèrent plus entre eux ([#9442](https://github.com/nocobase/nocobase/pull/9442)) par @jiannx
- **[Workflow]** Ajout d'un état de chargement pour l'exécution manuelle du workflow. ([#9533](https://github.com/nocobase/nocobase/pull/9533)) par @mytharcher
- **[Gestionnaire de migration]** Correction des échecs de création de fichiers de migration lors de l'utilisation d'OceanBase par @2013xile
- **[Stockage de fichiers : S3(Pro)]** Correction de la gestion du point de terminaison S3 Pro afin que les téléchargements serveur et les aperçus URL ne dupliquent pas l'hôte du bucket. par @mytharcher
- **[Workflow : Approbation]** Correction des index d'enregistrement d'approbation en double lorsque des délégations se produisent simultanément sur le même travail d'approbation. par @mytharcher
