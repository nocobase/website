---
title: "NocoBase v1.6.33 : Construire l'image docker complète"
description: "Notes de version de la v1.6.33"
---

### 🚀 Améliorations

- **[indéfini]** Construire l'image Docker complète ([#6898](https://github.com/nocobase/nocobase/pull/6898)) par @chenos

- **[client]** Optimiser le problème de ralentissement progressif des pages avec l'utilisation ([#6888](https://github.com/nocobase/nocobase/pull/6888)) par @zhangzhonghe

- **[Calendrier]** Prendre en charge un bouton d'actualisation configurable dans le bloc calendrier ([#6920](https://github.com/nocobase/nocobase/pull/6920)) par @katherinehhh

- **[Workflow : Événement d'action personnalisée]** Corriger les locales en-US basées sur les clés zh-CN par @mytharcher

- **[Workflow : Approbation]** Permettre de réaliser toutes les tâches dans le centre de tâches du workflow par @mytharcher

### 🐛 Corrections de bugs

- **[client]**
  - Erreur de rendu causée par un format de style invalide lors de l'ajout d'un champ d'association ([#6903](https://github.com/nocobase/nocobase/pull/6903)) par @katherinehhh

  - Vérification incorrecte de la valeur vide pour le champ d'association toMany dans une règle de liaison ([#6905](https://github.com/nocobase/nocobase/pull/6905)) par @katherinehhh

- **[Champ de collection : Markdown(Vditor)]** Le champ markdown (Vditor) ne s'adapte pas au thème ([#6919](https://github.com/nocobase/nocobase/pull/6919)) par @katherinehhh

- **[Collection : Arborescence]** Éviter les mises à jour incorrectes des préfixes de chemin similaires lors des mises à jour de chemin ([#6913](https://github.com/nocobase/nocobase/pull/6913)) par @2013xile

- **[Gestionnaire de fichiers]**
  - Corriger la règle de correspondance de l'aperçu ([#6902](https://github.com/nocobase/nocobase/pull/6902)) par @mytharcher

  - Corriger l'injection de collection client et le paramètre de téléchargement ([#6909](https://github.com/nocobase/nocobase/pull/6909)) par @mytharcher

  - Corriger l'URL d'aperçu sur les fichiers non image ([#6889](https://github.com/nocobase/nocobase/pull/6889)) par @mytharcher

- **[Workflow : Nœud de messagerie]** Gérer le champ 'to' non défini et améliorer le traitement des destinataires d'email. ([#6915](https://github.com/nocobase/nocobase/pull/6915)) par @sheldon66

- **[Workflow : Événement d'action personnalisée]**
  - Corriger le comportement incorrect du bouton après quelques clics par @mytharcher

  - Corriger l'impossibilité de faire correspondre le gestionnaire d'erreur par classe par @mytharcher

- **[Workflow : Approbation]** Corriger le calcul des ajouts d'association par @mytharcher
