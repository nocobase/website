---
title: "NocoBase v1.8.5 : Ajout de plus d'interfaces calculables"
description: "Notes de version de la v1.8.5"
---

### 🚀 Améliorations

- **[Champ de collection : Formule]** Ajout d'interfaces calculables supplémentaires ([#7215](https://github.com/nocobase/nocobase/pull/7215)) par @mytharcher

- **[Workflow]** Utilisation de la journalisation au lieu de lever une erreur lorsque l'exécution ne doit pas avoir lieu en raison du statut ([#7217](https://github.com/nocobase/nocobase/pull/7217)) par @mytharcher

- **[Workflow : Approbation]** Prise en charge de la suppression de l'approbation lors de la suppression des données associées par @mytharcher

### 🐛 Corrections de bugs

- **[client]**
  - Problème où les champs de pièce jointe ne pouvaient pas être sélectionnés comme variables dans une règle de liaison ([#7213](https://github.com/nocobase/nocobase/pull/7213)) par @zhangzhonghe

  - Correction du problème où les composants de sélection déroulante étaient bloqués par le clavier sur iOS ([#7149](https://github.com/nocobase/nocobase/pull/7149)) par @zhangzhonghe

  - Échec de l'affectation de valeur dans le formulaire d'édition lorsque la valeur et les options sont toutes deux définies pour un champ de sélection ([#7209](https://github.com/nocobase/nocobase/pull/7209)) par @katherinehhh

  - Réduction du filtre : Le filtre n'est pas déclenché lors de l'initialisation de la page après avoir défini des valeurs par défaut pour les champs ([#7206](https://github.com/nocobase/nocobase/pull/7206)) par @zhangzhonghe

  - Erreur lors de l'affectation de valeurs dans un bloc de liste utilisant un champ de tri Kanban ([#7208](https://github.com/nocobase/nocobase/pull/7208)) par @katherinehhh

  - Le titre de l'onglet du navigateur n'est pas synchronisé lors du changement entre les sous-menus ([#7207](https://github.com/nocobase/nocobase/pull/7207)) par @zhangzhonghe

  - Action de fenêtre contextuelle : L'affichage de la page ne correspond pas aux attentes après le changement d'onglets ([#7212](https://github.com/nocobase/nocobase/pull/7212)) par @zhangzhonghe

- **[acl]** Correction d'une erreur lors de la suppression d'un rôle en mode union de rôles qui inclut le rôle racine. ([#7198](https://github.com/nocobase/nocobase/pull/7198)) par @aaaaaajie

- **[Gestionnaire multi-applications]** Correction des options d'authentification dans une position inattendue ([#7210](https://github.com/nocobase/nocobase/pull/7210)) par @mytharcher

- **[Authentification]** Correction du problème où la page de connexion ne pouvait pas défiler ([#7159](https://github.com/nocobase/nocobase/pull/7159)) par @zhangzhonghe

- **[Workflow : Approbation]** Correction des associations lors de la soumission d'une approbation par @mytharcher
