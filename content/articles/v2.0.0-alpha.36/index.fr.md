---
title: "NocoBase v2.0.0-alpha.36 : Optimisation des styles de la barre d'outils pour les onglets de page"
description: "Notes de version de v2.0.0-alpha.36"
---

### 🚀 Améliorations

- **[flow-engine]** Optimisation des styles de la barre d'outils pour les onglets de page ([#7795](https://github.com/nocobase/nocobase/pull/7795)) par @zhangzhonghe

### 🐛 Corrections de bugs

- **[flow-engine]**
  - Correction d'un problème où les variables dans les champs de sous-formulaire associés n'étaient pas correctement résolues lorsque le champ était modifié via l'interface utilisateur. ([#7799](https://github.com/nocobase/nocobase/pull/7799)) par @gchust

  - Erreur dans le formulaire d'édition pour les enregistrements à clé primaire multiple ([#7798](https://github.com/nocobase/nocobase/pull/7798)) par @gchust

  - Correction d'un problème où certaines configurations de l'action "Ouvrir la vue" n'étaient pas appliquées, garantissant désormais que l'action fonctionne comme prévu pour toutes les configurations spécifiées. ([#7790](https://github.com/nocobase/nocobase/pull/7790)) par @gchust

- **[client]**
  - Correction du sélecteur de champ de collection qui ne permettait pas de sélectionner correctement la collection ([#7794](https://github.com/nocobase/nocobase/pull/7794)) par @katherinehhh

  - Impossible de masquer la colonne des actions du bloc tableau ([#7804](https://github.com/nocobase/nocobase/pull/7804)) par @gchust

  - Prise en charge de la sélection de l'objet variable entier dans l'invite de l'employé IA ([#7791](https://github.com/nocobase/nocobase/pull/7791)) par @gchust

- **[Utilisateurs]** Actualisation incorrecte de l'index lorsque les noms de champs utilisent le style snake_case ([#7785](https://github.com/nocobase/nocobase/pull/7785)) par @2013xile
