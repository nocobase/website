---
title: "NocoBase v2.0.0-alpha.64 : Prise en charge du modèle Gemini-3 avec signature de pensée d'appel de fonction"
description: "Notes de version de v2.0.0-alpha.64"
---

### 🎉 Nouvelles fonctionnalités

- **[Employés IA]** Prise en charge du modèle Gemini-3 avec signature de pensée d'appel de fonction ([#8377](https://github.com/nocobase/nocobase/pull/8377)) par @heziqiang

### 🚀 Améliorations

- **[Employés IA]**
  - Amélioration de la gestion des erreurs IA pour les services et modèles LLM ([#8351](https://github.com/nocobase/nocobase/pull/8351)) par @heziqiang

  - Prise en charge de l'édition personnalisée et de la mise à jour automatique des invites système ([#8378](https://github.com/nocobase/nocobase/pull/8378)) par @heziqiang

- **[Gestionnaire de fichiers]** Ajout d'options de requête pour récupérer un fichier OSS côté serveur si des paramètres ou en-têtes supplémentaires sont nécessaires ([#8372](https://github.com/nocobase/nocobase/pull/8372)) par @mytharcher

### 🐛 Corrections de bugs

- **[Journalisation]** Correction du problème où des informations d'erreur supplémentaires étaient ignorées lors de l'impression des journaux système ([#8367](https://github.com/nocobase/nocobase/pull/8367)) par @cgyrock

- **[Client]**
  - Correction d'un problème où un champ d'association pouvait encore ouvrir une fenêtre contextuelle après être passé du composant de sélection d'enregistrement au composant de sélection. ([#8375](https://github.com/nocobase/nocobase/pull/8375)) par @gchust

  - Correction du problème où les règles de liaison n'étaient pas réexécutées après un changement de pagination pour le bloc de détails, le bloc de formulaire d'édition et le bloc de liste. ([#8366](https://github.com/nocobase/nocobase/pull/8366)) par @gchust

  - Correction d'un problème où les champs configurés de sous-tableau/sous-formulaire ne s'affichaient pas lors du basculement aller-retour des composants de champ. ([#8365](https://github.com/nocobase/nocobase/pull/8365)) par @gchust

- **[Workflow]**
  - Correction d'un problème de règle de liaison dans le bloc de détails du nœud CC du workflow ([#8381](https://github.com/nocobase/nocobase/pull/8381)) par @zhangzhonghe

  - Correction du problème où la page d'exécution plantait lorsqu'un workflow était supprimé ([#8361](https://github.com/nocobase/nocobase/pull/8361)) par @mytharcher

- **[Contrôle d'accès]** Correction d'un problème où la source de données était mal résolue lors du traitement des permissions pour les champs d'association ([#8370](https://github.com/nocobase/nocobase/pull/8370)) par @2013xile
