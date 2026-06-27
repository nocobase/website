---
title: "NocoBase v2.0.0-alpha.71 : prise en charge de la hauteur de bloc configurable"
description: "Notes de version de v2.0.0-alpha.71"
---

### 🎉 Nouvelles fonctionnalités

- **[client]**
  - Prise en charge de la configuration des titres d'onglets du navigateur pour les pages, les onglets de page, les popups et les onglets de popup ([#8590](https://github.com/nocobase/nocobase/pull/8590)) par @zhangzhonghe

  - Prise en charge de la configuration des champs du champ de collection d'association dans le bloc de formulaire ([#8578](https://github.com/nocobase/nocobase/pull/8578)) par @katherinehhh

- **[Bloc : Grille]** Prise en charge de la hauteur de bloc configurable ([#8583](https://github.com/nocobase/nocobase/pull/8583)) par @katherinehhh

- **[Action : Dupliquer l'enregistrement]** Ajout de l'action de duplication 2.0 ([#8580](https://github.com/nocobase/nocobase/pull/8580)) par @katherinehhh

- **[Workflow : Approbation]** Ajout du contrôle ACL pour les API d'approbation par @mytharcher

### 🚀 Améliorations

- **[client]** Utilisation de modèles de champs indépendants pour les champs d'association dans les formulaires de filtre ([#8511](https://github.com/nocobase/nocobase/pull/8511)) par @zhangzhonghe

- **[Workflow : CC]** Refonte du plugin de workflow CC pour prendre en charge l'architecture FlowModel avec compatibilité v1/v2 ([#8405](https://github.com/nocobase/nocobase/pull/8405)) par @zhangzhonghe

### 🐛 Corrections de bugs

- **[moteur de workflow]**
  - Correction d'un contexte d'exécution incorrect pour "ctx.sql" dans les modèles JS. ([#8602](https://github.com/nocobase/nocobase/pull/8602)) par @gchust

  - Correction d'un problème où les objets Blob ne pouvaient pas être créés dans le bloc JS. ([#8603](https://github.com/nocobase/nocobase/pull/8603)) par @gchust

- **[client]**
  - Correction d'un problème où les colonnes du tableau ne se réaffichaient pas après avoir cliqué sur Exécuter dans l'éditeur de colonnes JS. ([#8608](https://github.com/nocobase/nocobase/pull/8608)) par @gchust

  - Correction d'une erreur potentielle "read hidden" en mode non-configuration. ([#8591](https://github.com/nocobase/nocobase/pull/8591)) par @gchust

  - Correction d'un problème où le sous-tableau (édition en ligne) affichait encore les colonnes en mode édition après être passé en mode lecture seule dans le formulaire d'édition ([#8589](https://github.com/nocobase/nocobase/pull/8589)) par @katherinehhh

- **[Moteur de workflow]** Correction d'un problème où l'utilisation d'un modèle de bloc en mode "Dupliquer" provoquait l'affichage d'un popup vide lors du clic sur un bouton d'action du bloc. ([#8581](https://github.com/nocobase/nocobase/pull/8581)) par @gchust

- **[Composant de champ : masque]** Correction d'un problème où le popup des paramètres du champ de masque ne pouvait pas charger correctement tous les rôles utilisateur. par @gchust

- **[Workflow : Approbation]** Correction d'un identifiant incorrect pour charger l'enregistrement détaillé par @mytharcher
