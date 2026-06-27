---
title: "NocoBase v1.4.21 : Prise en charge des règles de liaison dans le bloc de détails pour masquer (valeur réservée)"
description: "Notes de version de v1.4.21"
---

### 🚀 Améliorations

- **[client]** Prise en charge des règles de liaison dans le bloc de détails pour masquer (valeur réservée) ([#6031](https://github.com/nocobase/nocobase/pull/6031)) par @katherinehhh

### 🐛 Corrections de bugs

- **[client]**
  - Résolution du chemin public manquant dans les chemins de fichiers d'icônes ([#6034](https://github.com/nocobase/nocobase/pull/6034)) par @chenos

  - Correction du problème où les règles de liaison de formulaire échouent lorsqu'elles dépendent des valeurs de champs de sous-tableaux ([#5876](https://github.com/nocobase/nocobase/pull/5876)) par @zhangzhonghe

  - Correction du champ incorrect de la variable 'Enregistrement actuel' dans les sous-détails ([#6030](https://github.com/nocobase/nocobase/pull/6030)) par @zhangzhonghe

- **[Gestionnaire de sauvegarde]** Correction de l'échec du téléchargement de la sauvegarde lorsque l'API_BASE_PATH de l'environnement n'est pas /api par @gchust
