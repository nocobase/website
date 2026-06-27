---
title: "NocoBase v1.9.3 : Correction de l'erreur lors de la duplication du workflow d'approbation"
description: "Notes de version de la v1.9.3"
---

### 🚀 Améliorations

- **[base de données]** Ajout de l'option `multipleStatements` à l'instance de connexion MariaDB pour permettre l'exécution de plusieurs instructions dans une seule requête ([#7781](https://github.com/nocobase/nocobase/pull/7781)) par @mytharcher

- **[Workflow]** Prise en charge des blocs de données dans le workflow pour utiliser le menu de paramètres de détail consolidé ([#7771](https://github.com/nocobase/nocobase/pull/7771)) par @mytharcher

### 🐛 Corrections de bugs

- **[serveur]** Isolation du canal Pub-Sub par nom d'application ([#7762](https://github.com/nocobase/nocobase/pull/7762)) par @mytharcher

- **[client]** Correction de l'erreur « Maximum call stack size exceeded » ([#7780](https://github.com/nocobase/nocobase/pull/7780)) par @zhangzhonghe

- **[base de données]** Détection incorrecte des champs d'index lorsque les noms de champs utilisent le style snake_case ([#7776](https://github.com/nocobase/nocobase/pull/7776)) par @2013xile

- **[Workflow]** Résolution d'un problème où le répartiteur de workflow en mode cluster ne parvenait pas à identifier correctement les états inactifs, ce qui pouvait entraîner une consommation inutile d'événements de file d'attente avant que le plugin ne soit prêt ([#7768](https://github.com/nocobase/nocobase/pull/7768)) par @mytharcher

- **[Mobile (obsolète)]** Correction du problème où la fenêtre contextuelle de valeur par défaut du champ date sur mobile ne permettait pas de sélectionner une date ([#7783](https://github.com/nocobase/nocobase/pull/7783)) par @zhangzhonghe

- **[Workflow : Approbation]** Correction d'une erreur levée lors de la duplication d'un workflow d'approbation par @mytharcher

- **[Gestionnaire d'emails]** Ajout d'index à la collection mailMessages par @jiannx
