---
title: "NocoBase v2.0.0-alpha.34 : Corrections de bugs"
description: "Notes de version de v2.0.0-alpha.34"
---

### 🚀 Améliorations

- **[base de données]** Ajout de l'option `multipleStatements` à l'instance de connexion MariaDB pour permettre l'exécution de plusieurs instructions dans une seule requête ([#7781](https://github.com/nocobase/nocobase/pull/7781)) par @mytharcher

### 🐛 Corrections de bugs

- **[moteur de workflow]** Correction d'un problème où les boutons d'action dans le bloc tableau ne se mettaient pas à jour correctement après un changement de page, garantissant ainsi que leur fonctionnalité corresponde aux données de la page actuelle. ([#7779](https://github.com/nocobase/nocobase/pull/7779)) par @gchust

- **[client]**
  - Correction de l'erreur « Maximum call stack size exceeded » ([#7780](https://github.com/nocobase/nocobase/pull/7780)) par @zhangzhonghe

  - Correction de l'ellipse du champ titre des champs d'association qui ne s'appliquait pas ([#7778](https://github.com/nocobase/nocobase/pull/7778)) par @katherinehhh

  - Correction de la règle de liaison de l'action de mise à jour d'enregistrement qui ne fonctionnait pas ([#7774](https://github.com/nocobase/nocobase/pull/7774)) par @gchust

- **[base de données]** Détection incorrecte des champs d'index lorsque les noms de champs utilisent le style snake_case ([#7776](https://github.com/nocobase/nocobase/pull/7776)) par @2013xile

- **[Mobile (obsolète)]** Correction du problème où la fenêtre contextuelle de la valeur par défaut du champ date sur mobile ne permettait pas de sélectionner une date ([#7783](https://github.com/nocobase/nocobase/pull/7783)) par @zhangzhonghe
