---
title: "NocoBase v1.7.0-beta.12 : Ajout d'un rappel onScanSuccess"
description: "Notes de version de v1.7.0-beta.12"
---

### 🎉 Nouvelles fonctionnalités

- **[Bloc : Panneau d'actions]** ajout d'un callback onScanSuccess pour gérer les scans réussis et quitter l'interface de la caméra. ([#6580](https://github.com/nocobase/nocobase/pull/6580)) par @sheldon66

### 🚀 Améliorations

- **[Gestionnaire de tâches asynchrones]** optimisation des boutons d'import/export dans Pro ([#6531](https://github.com/nocobase/nocobase/pull/6531)) par @chenos

- **[Action : Exporter les enregistrements Pro]** optimisation des boutons d'import/export dans Pro par @katherinehhh

- **[Gestionnaire de migration]** permettre d'ignorer la sauvegarde et la restauration automatiques pour la migration par @gchust

### 🐛 Corrections de bugs

- **[client]** conflit de liaison entre des champs d'association de même nom dans différentes sous-tables d'un même formulaire ([#6577](https://github.com/nocobase/nocobase/pull/6577)) par @katherinehhh

- **[Calendrier]** données manquantes sur les dates limites dans la vue hebdomadaire du calendrier ([#6587](https://github.com/nocobase/nocobase/pull/6587)) par @katherinehhh

- **[Contrôle d'accès]** attribution incorrecte du rôle actuel lors de la connexion ([#6581](https://github.com/nocobase/nocobase/pull/6581)) par @aaaaaajie

- **[Action : Modification par lot]** Cliquez sur le bouton de modification par lot, configurez la fenêtre contextuelle, puis ouvrez-la à nouveau : la fenêtre contextuelle est vide ([#6578](https://github.com/nocobase/nocobase/pull/6578)) par @zhangzhonghe

- **[Bloc : Formulaire multi-étapes]** correction du bug où la réinitialisation du formulaire était inefficace lorsque le champ est associé à un autre champ par @jiannx

- **[Workflow : Approbation]** Correction de la configuration incorrecte du nœud d'approbation après modification du schéma par @mytharcher
