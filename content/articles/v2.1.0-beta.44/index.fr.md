---
title: "NocoBase v2.1.0-beta.44 : Correction du problème où les données des champs de relation sélectionnés ne s'affichaient pas sur mobile"
description: "Notes de version de v2.1.0-beta.44"
---

### 🚀 Améliorations

- **[Workflow : Approbation]** Ajustement des règles de validation pour les configurations de déclencheur et de nœud d'approbation afin de garantir l'existence des champs liés à l'interface utilisateur. par @mytharcher

### 🐛 Corrections de bugs

- **[client]** Correction du problème où les données des champs de relation sélectionnés ne s'affichaient pas sur mobile. ([#9665](https://github.com/nocobase/nocobase/pull/9665)) par @zhangzhonghe
- **[client-v2]**

  - Correction des erreurs de sauvegarde des règles de liaison de menu. ([#9666](https://github.com/nocobase/nocobase/pull/9666)) par @zhangzhonghe
  - Correction de l'espacement excessif au-dessus des blocs sur les pages v2. ([#9647](https://github.com/nocobase/nocobase/pull/9647)) par @zhangzhonghe
- **[moteur de flux]** Correction du problème où la page se bloquait lors de la définition des valeurs de champ pour un sous-formulaire. ([#9598](https://github.com/nocobase/nocobase/pull/9598)) par @gchust
- **[Employés IA]**

  - Correction de la validation de l'URL de base du fournisseur IA. ([#9667](https://github.com/nocobase/nocobase/pull/9667)) par @cgyrock
  - Correction des erreurs `ctx.get` dans les nœuds de workflow des employés IA. ([#9661](https://github.com/nocobase/nocobase/pull/9661)) par @cgyrock
- **[Notification : Message in-app]** Correction d'un risque d'injection SQL dans le filtre temporel du canal de notification in-app. ([#9630](https://github.com/nocobase/nocobase/pull/9630)) par @mytharcher
- **[Action : Dupliquer l'enregistrement]** Correction du problème où l'état du bouton n'était pas réinitialisé en cas d'échec de la soumission de l'enregistrement dupliqué. ([#9676](https://github.com/nocobase/nocobase/pull/9676)) par @katherinehhh
- **[Calendrier]** Correction du problème où les couleurs des événements du calendrier n'étaient pas rendues à partir du champ de couleur configuré dans les pages v2. ([#9677](https://github.com/nocobase/nocobase/pull/9677)) par @jiannx
- **[Moteur de flux]**

  - Correction d'un problème où la modification d'un bloc après avoir dupliqué son modèle pouvait affecter par inadvertance le contenu du bloc d'origine. ([#9664](https://github.com/nocobase/nocobase/pull/9664)) par @gchust
  - Correction d'un problème où le glissement des onglets de fenêtre contextuelle pour les réorganiser ne fonctionnait pas. ([#9602](https://github.com/nocobase/nocobase/pull/9602)) par @gchust
