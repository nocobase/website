---
title: "NocoBase v2.0.0-beta.22 : Prise en charge de la configuration des titres d'onglets du navigateur pour les pages, les onglets de page, les popups et les onglets de popup"
description: "Notes de version de v2.0.0-beta.22"
---

### 🎉 Nouvelles fonctionnalités

- **[client]** Prise en charge de la configuration des titres d'onglets du navigateur pour les pages, les onglets de page, les fenêtres contextuelles et les onglets contextuels ([#8590](https://github.com/nocobase/nocobase/pull/8590)) par @zhangzhonghe

- **[Workflow : Approbation]** Ajout du contrôle ACL pour les API d'approbation par @mytharcher

### 🚀 Améliorations

- **[client]** Utilisation de modèles de champs indépendants pour les champs d'association dans les formulaires de filtre ([#8511](https://github.com/nocobase/nocobase/pull/8511)) par @zhangzhonghe

- **[Workflow : CC]** Refonte du plugin de workflow CC pour prendre en charge l'architecture FlowModel avec compatibilité v1/v2 ([#8405](https://github.com/nocobase/nocobase/pull/8405)) par @zhangzhonghe

### 🐛 Corrections de bugs

- **[moteur de workflow]**
  - Correction d'un problème où les objets Blob ne pouvaient pas être créés dans le bloc JS. ([#8603](https://github.com/nocobase/nocobase/pull/8603)) par @gchust

  - Correction du contexte d'exécution incorrect pour "ctx.sql" dans les modèles JS. ([#8602](https://github.com/nocobase/nocobase/pull/8602)) par @gchust

- **[Composant de champ : masque]** Correction d'un problème où la fenêtre contextuelle des paramètres du champ de masque ne pouvait pas charger correctement tous les rôles utilisateur. par @gchust

- **[Workflow : Approbation]** Correction d'un identifiant incorrect pour charger l'enregistrement détaillé par @mytharcher
