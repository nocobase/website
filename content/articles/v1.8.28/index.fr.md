---
title: "NocoBase v1.8.28 : Ajout d'un bouton d'impression dans la fenêtre contextuelle de détail des blocs d'approbation personnalisés"
description: "Notes de version de la v1.8.28"
---

### 🚀 Améliorations

- **[client]** Afin d'obtenir un type MIME plus précis pour les fichiers, utilisation du paquet `mime` pour détecter le type MIME des fichiers côté client ([#7551](https://github.com/nocobase/nocobase/pull/7551)) par @mytharcher

- **[Workflow]**
  - Possibilité de limiter le nombre maximum de nœuds dans un workflow via des variables d'environnement ([#7542](https://github.com/nocobase/nocobase/pull/7542)) par @mytharcher

  - Ajout de l'option `keepBranch` lors de la suppression d'un nœud ([#7571](https://github.com/nocobase/nocobase/pull/7571)) par @mytharcher

- **[Workflow : Nœud de boucle]** Possibilité de limiter le nombre maximum de cycles pour les nœuds de boucle via des variables d'environnement ([#7543](https://github.com/nocobase/nocobase/pull/7543)) par @mytharcher

- **[Workflow : Approbation]** Ajout d'un bouton d'impression dans la fenêtre contextuelle de détail des blocs d'approbation personnalisés par @mytharcher

### 🐛 Corrections de bugs

- **[client]**
  - Correction du problème où les images ne s'affichaient pas correctement lorsqu'elles étaient à la fois pivotées et redimensionnées lors de l'aperçu ([#7573](https://github.com/nocobase/nocobase/pull/7573)) par @mytharcher

  - Correction du problème où l'absence de propriétés dynamiques dans le composant `AssignedField` provoquait des erreurs de téléchargement de fichier dans les nœuds "Créer un enregistrement" ou "Mettre à jour un enregistrement" ([#7556](https://github.com/nocobase/nocobase/pull/7556)) par @mytharcher

- **[Formulaires publics]** Correction du problème où les règles de téléchargement pour les champs de fichier dans les formulaires publics étaient incorrectes ([#7553](https://github.com/nocobase/nocobase/pull/7553)) par @mytharcher

- **[Calendrier]** Correction d'un problème de requête de données causé par un identifiant unique dans le bloc calendrier ([#7562](https://github.com/nocobase/nocobase/pull/7562)) par @katherinehhh

- **[Authentification : LDAP]** Correction d'un échec de liaison LDAP avec des DN non ASCII (UTF-8) dans Active Directory par @2013xile
