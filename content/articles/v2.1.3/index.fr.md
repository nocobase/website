---
title: "NocoBase v2.1.3 : Normalisation des versions de build compatibles avec l'application"
description: "Notes de version de la v2.1.3"
---

### 🚀 Améliorations

- **[cli]**
  - Normalisation des versions de build de compatibilité des applications ([#9763](https://github.com/nocobase/nocobase/pull/9763)) par @chenos
  - Prise en charge de la mise à jour des compétences vers une version spécifiée ([#9760](https://github.com/nocobase/nocobase/pull/9760)) par @chenos

### 🐛 Corrections de bugs

- **[client]** Correction du problème où les champs dans les sous-formulaires horizontaux étaient trop étroits pour afficher les données ([#9755](https://github.com/nocobase/nocobase/pull/9755)) par @zhangzhonghe
- **[Gestionnaire de sources de données]**

  - Correction du tiroir d'édition de champ vide causé par des rendus répétés sur la page Configurer les champs de la source de données externe v1. ([#9759](https://github.com/nocobase/nocobase/pull/9759)) par @katherinehhh
  - Correction d'un problème où la suppression de la catégorie de collection active dans le gestionnaire de sources de données v1 pouvait laisser l'onglet Toutes les collections vide. ([#9757](https://github.com/nocobase/nocobase/pull/9757)) par @katherinehhh
- **[Gestionnaire de tâches asynchrones]** Correction des identifiants de requête incorrects dans les journaux des workers de tâches asynchrones ([#9686](https://github.com/nocobase/nocobase/pull/9686)) par @2013xile
- **[Workflow : nœud SQL]** Correction de la migration des modèles de variables hérités du workflow SQL qui était ignorée pour certains utilisateurs de version bêta. ([#9762](https://github.com/nocobase/nocobase/pull/9762)) par @mytharcher
- **[Employés IA]**

  - Correction de la perte de configuration des messages dans les nœuds LLM du workflow. ([#9743](https://github.com/nocobase/nocobase/pull/9743)) par @cgyrock
  - Correction d'un problème où les pièces jointes collées dans la boîte de dialogue de l'employé IA ne pouvaient pas être supprimées. ([#9753](https://github.com/nocobase/nocobase/pull/9753)) par @cgyrock
- **[Bloc : Kanban]** Correction de la prise en charge des URL pour le calendrier et les popups associés. ([#9751](https://github.com/nocobase/nocobase/pull/9751)) par @jiannx
- **[Workflow : Approbation]** Correction du problème où les données associées ne s'affichaient pas dans les formulaires d'approbation v2 par @zhangzhonghe
