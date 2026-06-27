---
title: "NocoBase v2.0.0-alpha.5 : Corrections de bugs"
description: "Notes de version de v2.0.0-alpha.5"
---

### 🐛 Corrections de bugs

- **[serveur]** Erreur de migration de clé primaire ([#7563](https://github.com/nocobase/nocobase/pull/7563)) par @2013xile

- **[client]**
  - Correction du problème de non-actualisation des données après soumission du formulaire ([#7560](https://github.com/nocobase/nocobase/pull/7560)) par @zhangzhonghe

  - Correction du problème où l'absence de propriétés dynamiques dans le composant `AssignedField` provoquait des erreurs de téléchargement de fichier dans les nœuds "Créer un enregistrement" ou "Mettre à jour un enregistrement" ([#7556](https://github.com/nocobase/nocobase/pull/7556)) par @mytharcher

- **[Calendrier]** Correction d'un problème de requête de données causé par un identifiant unique dans le bloc calendrier ([#7562](https://github.com/nocobase/nocobase/pull/7562)) par @katherinehhh

- **[Bloc : modèle (obsolète)]** Correction d'un problème où des requêtes inutiles pour les modèles de bloc étaient déclenchées lors de l'ouverture ou de la fermeture de modales ([#7561](https://github.com/nocobase/nocobase/pull/7561)) par @gchust

- **[Formulaires publics]** Correction du problème où les règles de téléchargement pour les champs de fichier dans les formulaires publics étaient incorrectes ([#7553](https://github.com/nocobase/nocobase/pull/7553)) par @mytharcher

- **[Gestionnaire multi-applications (obsolète)]** Correction de la validation du port avant la migration des données multi-applications ([#7540](https://github.com/nocobase/nocobase/pull/7540)) par @jiannx
