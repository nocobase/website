---
title: "NocoBase v1.4.31 : optimisation du composant de filtre dans le formulaire de filtre pour correspondre aux paramètres filtrables"
description: "Notes de version v1.4.31"
---

### 🚀 Améliorations

- **[client]** Optimisation du composant de filtre dans le formulaire de filtrage pour correspondre aux paramètres filtrables ([#6110](https://github.com/nocobase/nocobase/pull/6110)) par @katherinehhh

- **[Gestionnaire de fichiers]** Permettre la suppression des fichiers lorsque l'enregistrement du fichier (pièce jointe) est supprimé ([#6127](https://github.com/nocobase/nocobase/pull/6127)) par @mytharcher

### 🐛 Corrections de bugs

- **[base de données]**
  - Correction du filtrage par champ uuid ([#6138](https://github.com/nocobase/nocobase/pull/6138)) par @chareice

  - Correction de la mise à jour d'une collection sans clés primaires ([#6124](https://github.com/nocobase/nocobase/pull/6124)) par @chareice

- **[client]**
  - La page de gestion des sources de données génère une erreur ([#6141](https://github.com/nocobase/nocobase/pull/6141)) par @zhangzhonghe

  - Lorsque les conditions d'une règle de liaison impliquent des champs d'association non affichés, la règle de liaison du bouton devient inefficace ([#6140](https://github.com/nocobase/nocobase/pull/6140)) par @zhangzhonghe

  - Correction de l'affichage incorrect des variables dans le formulaire d'ajout rapide de champ d'association ([#6119](https://github.com/nocobase/nocobase/pull/6119)) par @katherinehhh

  - Le contenu ne s'affiche pas dans la fenêtre contextuelle d'ajout rapide ([#6123](https://github.com/nocobase/nocobase/pull/6123)) par @zhangzhonghe

  - Correction du problème où les blocs de champs d'association ne demandent pas de données ([#6125](https://github.com/nocobase/nocobase/pull/6125)) par @zhangzhonghe

  - Correction des règles de liaison dans les sous-tableaux/sous-formulaires affectant les blocs dans les fenêtres contextuelles de champs d'association ([#5543](https://github.com/nocobase/nocobase/pull/5543)) par @katherinehhh

- **[Champ de collection : divisions administratives de la Chine]** Correction de l'autorisation ACL avec chinaRegion ([#6137](https://github.com/nocobase/nocobase/pull/6137)) par @chareice

- **[Workflow]** Correction du SQL généré incorrectement ([#6128](https://github.com/nocobase/nocobase/pull/6128)) par @mytharcher

- **[Champ de collection : Plusieurs à plusieurs (tableau)]** Correction du problème où la mise à jour des champs plusieurs à plusieurs (tableau) dans un sous-formulaire ne fonctionne pas ([#6136](https://github.com/nocobase/nocobase/pull/6136)) par @2013xile

- **[Mobile]** Correction du problème de sélection cliquable en mode lecture seule et de débordement de texte sur mobile ([#6130](https://github.com/nocobase/nocobase/pull/6130)) par @katherinehhh
