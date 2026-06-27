---
title: "NocoBase v2.1.4 : Passage des fichiers d'importation téléchargés au stockage sur disque pour réduire la pression mémoire lors des importations de grandes données"
description: "Notes de version de la v2.1.4"
---

### 🚀 Améliorations

- **[Workflow]** Amélioration de l'expérience d'édition des métadonnées du workflow en permettant la modification de la description dans la fenêtre contextuelle des détails et en remplissant automatiquement les métadonnées du workflow source lors de la duplication des workflows. ([#9766](https://github.com/nocobase/nocobase/pull/9766)) par @mytharcher

### 🐛 Corrections de bugs

- **[Action : Importer des enregistrements]** Modification du stockage des fichiers d'importation téléchargés vers un stockage disque pour réduire la pression mémoire lors des importations de grandes données. ([#9739](https://github.com/nocobase/nocobase/pull/9739)) par @mytharcher
- **[Gestionnaire de sauvegarde]** Correction d'un problème de sécurité où des noms de schéma PostgreSQL non sécurisés pouvaient être acceptés lors de la restauration de sauvegarde. ([#9758](https://github.com/nocobase/nocobase/pull/9758)) par @2013xile
- **[Workflow]**

  - Correction de la gestion du délai d'attente du workflow afin que les exécutions abandonnées et leurs tâches en attente puissent être mises à jour de manière atomique. ([#9768](https://github.com/nocobase/nocobase/pull/9768)) par @mytharcher
  - Correction du problème où le champ "Dernière mise à jour par" du workflow n'était pas mis à jour après les modifications des nœuds du workflow. ([#9769](https://github.com/nocobase/nocobase/pull/9769)) par @mytharcher
- **[Action : Importer des enregistrements Pro]** Évitement de l'analyse des fichiers volumineux dans le nœud de requête avant que l'importation Pro ne crée une tâche asynchrone. par @mytharcher
- **[Contrôle de version]** Ajustement de la position de l'entrée de raccourci supérieure du contrôle de version afin qu'elle apparaisse à côté de l'éditeur d'interface utilisateur dans les deux dispositions d'administration (héritée et v2). par @cgyrock
