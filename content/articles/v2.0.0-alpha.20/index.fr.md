---
title: "NocoBase v2.0.0-alpha.20 : introduction de nouveaux graphiques et types de blocs supplémentaires"
description: "Notes de version de v2.0.0-alpha.20"
---

### 🎉 Nouvelles fonctionnalités

- **[client]** Prise en charge de la définition de règles de liaison pour les sous-formulaires ([#7640](https://github.com/nocobase/nocobase/pull/7640)) par @zhangzhonghe

- **[Bloc : Liste]** Ajout du bloc liste 2.0 ([#7574](https://github.com/nocobase/nocobase/pull/7574)) par @katherinehhh

- **[Visualisation de données]** Ajout du type de graphique "Graphique en anneau" ([#7629](https://github.com/nocobase/nocobase/pull/7629)) par @heziqiang

- **[Bloc : Panneau d'actions]** Ajout du bloc panneau d'actions 2.0 ([#7594](https://github.com/nocobase/nocobase/pull/7594)) par @katherinehhh

- **[Bloc : GridCard]** Ajout du bloc carte en grille 2.0 ([#7579](https://github.com/nocobase/nocobase/pull/7579)) par @katherinehhh

### 🚀 Améliorations

- **[moteur de flux]** Prise en charge de l'ignorance de l'étape de flux runjs en ajoutant skipRunJs=true à la chaîne de requête de l'URL. ([#7638](https://github.com/nocobase/nocobase/pull/7638)) par @gchust

### 🐛 Corrections de bugs

- **[moteur de flux]** Correction d'une erreur lors de la copie ou du collage d'extraits de code dans l'éditeur de code JS. ([#7641](https://github.com/nocobase/nocobase/pull/7641)) par @gchust

- **[Moteur de flux]** Correction de la résolution incorrecte de la variable d'enregistrement de la fenêtre contextuelle parente. ([#7637](https://github.com/nocobase/nocobase/pull/7637)) par @gchust

- **[Visualisation de données]** Correction du paramètre orders manquant dans la requête de données du graphique ([#7636](https://github.com/nocobase/nocobase/pull/7636)) par @heziqiang

- **[Gestionnaire d'emails]** Capture de l'erreur de synchronisation par @jiannx
