---
title: "NocoBase v2.0.0-beta.7 : ajout du contrôle de concurrence au niveau du processus pour le gestionnaire de tâches de base"
description: "Notes de version de v2.0.0-beta.7"
---

### 🎉 Nouvelles fonctionnalités

- **[test]** Ajout du contrôle de concurrence au niveau processus pour le gestionnaire de tâches de base ([#8343](https://github.com/nocobase/nocobase/pull/8343)) par @cgyrock

- **[IA employés]** Prise en charge du modèle Gemini-3 avec signature de pensée d'appel de fonction ([#8377](https://github.com/nocobase/nocobase/pull/8377)) par @heziqiang

### 🚀 Améliorations

- **[moteur de flux]** Ajout de `rowOrder` à GridModel pour garantir un ordre cohérent des lignes ([#8371](https://github.com/nocobase/nocobase/pull/8371)) par @zhangzhonghe

- **[IA employés]**
  - Prise en charge de l'édition personnalisée et de la mise à jour automatique des invites système ([#8378](https://github.com/nocobase/nocobase/pull/8378)) par @heziqiang

  - Amélioration de la gestion des erreurs IA pour les services et modèles LLM ([#8351](https://github.com/nocobase/nocobase/pull/8351)) par @heziqiang

- **[Gestionnaire de fichiers]** Ajout d'options de requête pour récupérer un fichier OSS côté serveur si des paramètres ou en-têtes supplémentaires sont nécessaires ([#8372](https://github.com/nocobase/nocobase/pull/8372)) par @mytharcher

### 🐛 Corrections de bugs

- **[client]**
  - Correction d'un problème où un champ d'association pouvait encore ouvrir une fenêtre contextuelle après être passé du composant de sélection d'enregistrement au composant de sélection. ([#8375](https://github.com/nocobase/nocobase/pull/8375)) par @gchust

  - Correction du problème où les règles de liaison n'étaient pas réexécutées après un changement de pagination pour les blocs de détails, de formulaire d'édition et de liste. ([#8366](https://github.com/nocobase/nocobase/pull/8366)) par @gchust

  - Correction d'un problème où les champs configurés de sous-tableau/sous-formulaire ne s'affichaient pas lors des changements aller-retour des composants de champ. ([#8365](https://github.com/nocobase/nocobase/pull/8365)) par @gchust

- **[logger]** Correction des informations d'erreur supplémentaires perdues lors de l'impression des journaux système ([#8367](https://github.com/nocobase/nocobase/pull/8367)) par @cgyrock

- **[Bloc : modèle (obsolète)]** Correction d'un problème où la page d'édition des modèles hérités (v1) ne pouvait pas être consultée. ([#8376](https://github.com/nocobase/nocobase/pull/8376)) par @gchust

- **[Workflow]**
  - Ajout de l'ID d'instance à l'ID Snowflake des tâches, pour éviter les conflits d'ID en mode cluster ([#8382](https://github.com/nocobase/nocobase/pull/8382)) par @mytharcher

  - Correction d'un problème de règle de liaison dans le bloc de détails du nœud CC du workflow ([#8381](https://github.com/nocobase/nocobase/pull/8381)) par @zhangzhonghe

  - Correction du problème de plantage de la page d'exécution lorsqu'un workflow est supprimé ([#8361](https://github.com/nocobase/nocobase/pull/8361)) par @mytharcher

- **[Contrôle d'accès]** Correction d'un problème où la source de données était mal résolue lors du traitement des permissions pour les champs d'association ([#8370](https://github.com/nocobase/nocobase/pull/8370)) par @2013xile

- **[Source de données : API REST]** Ajout d'une tolérance aux pannes pour le contexte de requête, afin d'éviter une erreur lorsque la méthode n'est pas dans le contexte par @mytharcher
