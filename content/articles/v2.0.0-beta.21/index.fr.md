---
title: "NocoBase v2.0.0-beta.21 : prise en charge de la configuration des champs de la collection d'association dans le bloc de formulaire"
description: "Notes de version de v2.0.0-beta.21"
---

### 🎉 Nouvelles fonctionnalités

- **[client]** Prise en charge de la configuration des champs de la collection associée dans le bloc de formulaire ([#8578](https://github.com/nocobase/nocobase/pull/8578)) par @katherinehhh

- **[Action : Dupliquer l'enregistrement]** Ajout de l'action de duplication 2.0 ([#8580](https://github.com/nocobase/nocobase/pull/8580)) par @katherinehhh

- **[Workflow]** Prise en charge de la copie, du collage et du déplacement de nœuds par glisser-déposer sur le canevas du workflow ([#8559](https://github.com/nocobase/nocobase/pull/8559)) par @mytharcher

### 🚀 Améliorations

- **[moteur de flux]** Amélioration de l'autocomplétion et des suggestions de code dans l'éditeur de code du modèle JS. ([#8575](https://github.com/nocobase/nocobase/pull/8575)) par @gchust

- **[Workflow : Approbation]** Suppression de la prise en charge des champs JS par @zhangzhonghe

### 🐛 Corrections de bugs

- **[client]**
  - Correction d'une potentielle erreur de rendu "lecture cachée" en mode non-configuration. ([#8591](https://github.com/nocobase/nocobase/pull/8591)) par @gchust

  - Correction du sous-tableau (édition en ligne) qui affichait encore les colonnes en mode édition après le passage en vue en lecture seule dans le formulaire d'édition ([#8589](https://github.com/nocobase/nocobase/pull/8589)) par @katherinehhh

- **[Moteur de flux]** Correction d'un problème où l'utilisation d'un modèle de bloc en mode "Dupliquer" provoquait l'affichage d'une fenêtre contextuelle vide lors du clic sur un bouton d'action du bloc. ([#8581](https://github.com/nocobase/nocobase/pull/8581)) par @gchust

- **[Bloc : Carte]** Correction des options de configuration 'Enregistrer comme modèle' en double dans le bloc carte ([#8584](https://github.com/nocobase/nocobase/pull/8584)) par @katherinehhh
