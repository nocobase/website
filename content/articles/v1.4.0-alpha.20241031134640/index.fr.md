---
title: "NocoBase v1.4.0-alpha.20241031134640 : Ajout du canal de notification WeCom"
description: "Notes de version de v1.4.0-alpha.20241031134640"
---

### 🎉 Nouvelles fonctionnalités

- **[WeCom]** Ajout du canal de notification WeCom par @chenzhizdt

### 🚀 Améliorations

- **[client]** Restauration de la valeur par défaut lorsque le titre du champ est effacé ([#5549](https://github.com/nocobase/nocobase/pull/5549)) par @katherinehhh

- **[Gestionnaire de notifications]**
  - Ajout des composants UserSelect et UserAddition pour simplifier le développement des canaux de notification ([#5553](https://github.com/nocobase/nocobase/pull/5553)) par @2013xile

  - Ajout d'une API pour obtenir le registre des types de canaux du plugin de notification ([#5531](https://github.com/nocobase/nocobase/pull/5531)) par @mytharcher

  - Ajustement du nom du registre des types de canaux du plugin de notification ([#5532](https://github.com/nocobase/nocobase/pull/5532)) par @mytharcher

  - Ajout d'une API du plugin de gestionnaire de notifications pour obtenir tous les types enregistrés ([#5529](https://github.com/nocobase/nocobase/pull/5529)) par @mytharcher

- **[Notification : Message in-app]** Amélioration de l'interface utilisateur des messages in-app et ajout de quelques logs. ([#5550](https://github.com/nocobase/nocobase/pull/5550)) par @sheldon66

### 🐛 Corrections de bugs

- **[base de données]**
  - Correction de la mise à jour des options de collection avec une clé cible de filtre ([#5558](https://github.com/nocobase/nocobase/pull/5558)) par @chareice

  - Correction de la valeur incorrecte de primaryKeyField dans sequelize lorsqu'il fonctionne avec plusieurs clés cibles de filtre ([#5556](https://github.com/nocobase/nocobase/pull/5556)) par @chareice

- **[client]**
  - Correction du problème où les composants squelette dans les blocs de tableau ne disparaissent pas ([#5548](https://github.com/nocobase/nocobase/pull/5548)) par @zhangzhonghe

  - Correction des problèmes liés à l'action de suppression, aux points de suspension du texte et à l'affichage des nouvelles données dans le sous-tableau ([#5523](https://github.com/nocobase/nocobase/pull/5523)) par @katherinehhh

- **[Gestionnaire de sources de données]** Correction de la suppression d'une source de données en état d'échec ([#5554](https://github.com/nocobase/nocobase/pull/5554)) par @chareice

- **[Notification : Email]**
  - Correction de la requête pour les utilisateurs par identifiants dans la notification par email ([#5533](https://github.com/nocobase/nocobase/pull/5533)) par @mytharcher

  - Correction du sujet manquant dans la notification par email basée sur les identifiants utilisateur ([#5534](https://github.com/nocobase/nocobase/pull/5534)) par @mytharcher

  - Correction du chemin du champ de réaction dans le formulaire dynamique de la notification par email ([#5527](https://github.com/nocobase/nocobase/pull/5527)) par @mytharcher

- **[Champ de collection : Plusieurs à plusieurs (tableau)]** Correction du problème où le composant de sélection pour un champ plusieurs à plusieurs (tableau) n'a qu'une seule option ([#5544](https://github.com/nocobase/nocobase/pull/5544)) par @2013xile

- **[Gestionnaire de notifications]** Correction du crash de la page dû à un mauvais type de canal ([#5528](https://github.com/nocobase/nocobase/pull/5528)) par @mytharcher

- **[Workflow : Nœud SQL]** Correction du problème où SSE provoquait un délai d'attente de "waitForLoadState('networkidle')" ([#5524](https://github.com/nocobase/nocobase/pull/5524)) par @hongboji

- **[Composant de champ : masque]** Correction du problème où les données originales ne pouvaient pas être affichées en cliquant si le composant était en lecture seule par @gchust

- **[Workflow : Événement d'action personnalisée]** Correction du problème où SSE provoquait un délai d'attente de "waitForLoadState('networkidle')" par @hongboji

- **[WeCom]** Correction du problème de réponse 404 introuvable lors de l'entrée dans l'application depuis le poste de travail WeCom par @chenzhizdt
