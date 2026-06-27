---
title: "NocoBase v2.1.0-alpha.11 : ajout de l'action d'élément JS"
description: "Notes de version de v2.1.0-alpha.11"
---

### 🎉 Nouvelles fonctionnalités

- **[client]** Ajout d'une action d'élément JS ([#8911](https://github.com/nocobase/nocobase/pull/8911)) par @jiannx

- **[Employés IA]** Ajout de la capacité SKILLS aux employés IA. ([#8797](https://github.com/nocobase/nocobase/pull/8797)) par @cgyrock

- **[Gestionnaire de sources de données]** Prise en charge du chargement à la demande des outils MCP ([#8936](https://github.com/nocobase/nocobase/pull/8936)) par @2013xile

### 🚀 Améliorations

- **[moteur de flux]** Amélioration de la validation des schémas pour l'API de construction d'interface utilisateur. ([#8881](https://github.com/nocobase/nocobase/pull/8881)) par @gchust

- **[client]** Optimisation de la disposition horizontale des actions de formulaire ([#8869](https://github.com/nocobase/nocobase/pull/8869)) par @jiannx

- **[app]** Ajout d'un flux de développement basé sur Rsbuild pour client-v1 tout en maintenant la compatibilité du développement local de plugins et de la topologie actuelle `/v2/` ([#8902](https://github.com/nocobase/nocobase/pull/8902)) par @Molunerfinn

- **[Champ de collection : divisions administratives de la Chine]** field-china-region 2.0 ([#8831](https://github.com/nocobase/nocobase/pull/8831)) par @jiannx

- **[Workflow]** Ajout de la validation pour tous les déclencheurs et nœuds ([#8930](https://github.com/nocobase/nocobase/pull/8930)) par @mytharcher

- **[Workflow : Approbation]** Correction d'un problème de performance causé par un champ JSON lors du chargement de la liste des enregistrements d'approbation par @mytharcher

### 🐛 Corrections de bugs

- **[moteur de flux]** Synchronisation du statut avec la configuration du champ lorsqu'un champ de formulaire est supprimé ([#8857](https://github.com/nocobase/nocobase/pull/8857)) par @jiannx

- **[resourcer]** Correction d'un problème où les sources de données externes ne se chargeaient pas correctement. ([#8929](https://github.com/nocobase/nocobase/pull/8929)) par @2013xile

- **[base de données]** Utilisation d'un avertissement au lieu d'une erreur lorsque l'un des paramètres d'ajout est invalide ([#8923](https://github.com/nocobase/nocobase/pull/8923)) par @mytharcher

- **[serveur]** Modification du moment de fermeture de Pub-Sub en `beforeStop`, pour éviter l'envoi ou le traitement de messages après la fermeture de la base de données ([#8934](https://github.com/nocobase/nocobase/pull/8934)) par @mytharcher

- **[Variables personnalisées]** Ignorer la notification d'authentification ([#8942](https://github.com/nocobase/nocobase/pull/8942)) par @chenos

- **[Employés IA]** Correction des cas de test échouant dans le module IA du package principal. ([#8941](https://github.com/nocobase/nocobase/pull/8941)) par @cgyrock

- **[Localisation]** Empêcher la requête localizationTexts:missing en cas de refus d'autorisation ([#8903](https://github.com/nocobase/nocobase/pull/8903)) par @chenos

- **[Action : Importer des enregistrements Pro]** Correction du problème où l'option "Déclencher un workflow" ne fonctionnait pas lorsqu'elle n'était pas cochée par @mytharcher

- **[Source de données : Oracle externe]** Correction d'une erreur survenant lors du chargement de la source de données Oracle externe par @2013xile

- **[Workflow : Approbation]** Correction des problèmes de traduction, de sélection de nœud et de cible de retour dans le bouton de retour du formulaire d'approbation v2 par @zhangzhonghe
