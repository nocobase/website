---
title: "NocoBase v2.1.0-beta.40 : Prise en charge de l'affectation de valeurs de champ dans les actions de soumission de formulaire"
description: "Notes de version de v2.1.0-beta.40"
---

### 🎉 Nouvelles fonctionnalités

- **[client-v2]** Prise en charge de l'affectation de valeurs de champ dans les actions de soumission de formulaire ([#9570](https://github.com/nocobase/nocobase/pull/9570)) par @katherinehhh
- **[Aperçu des fichiers Office]** Migration du plugin d'aperçu des fichiers Office vers le client v2 (FlowEngine). ([#9620](https://github.com/nocobase/nocobase/pull/9620)) par @Molunerfinn

### 🚀 Améliorations

- **[Gestionnaire de notifications]** Migration des plugins liés aux notifications vers v2. ([#9597](https://github.com/nocobase/nocobase/pull/9597)) par @Molunerfinn

### 🐛 Corrections de bugs

- **[client]** Correction de la largeur du badge dans la barre de navigation supérieure ([#9607](https://github.com/nocobase/nocobase/pull/9607)) par @zhangzhonghe
- **[Bloc : Gantt]** Correction du chemin du dossier partagé du Gantt v2 et ajout du rayage zébré. ([#9621](https://github.com/nocobase/nocobase/pull/9621)) par @jiannx
- **[Paramètres de licence]** Ajout du support client-v2 pour les paramètres de licence et l'injection de licence commerciale. ([#9555](https://github.com/nocobase/nocobase/pull/9555)) par @jiannx
- **[Workflow : Événement d'action personnalisée]** Correction des options de déclencheur de workflow en double dans les menus d'action des blocs v2 ([#9622](https://github.com/nocobase/nocobase/pull/9622)) par @zhangzhonghe
- **[Employés IA]** Correction des boutons de raccourci IA qui obtenaient un contexte de bloc vide après la suppression des blocs de table référencés. ([#9617](https://github.com/nocobase/nocobase/pull/9617)) par @cgyrock
- **[plugin-commercial]** Ajout des composants de licence commerciale client-v2 et de l'entrée d'état de licence dans la barre supérieure. par @jiannx
- **[Gestionnaire de migration]** Correction des différences de migration PostgreSQL afin que les colonnes héritées enfants ne soient pas supprimées lorsqu'une colonne locale devient héritée. par @hongboji
