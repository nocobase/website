---
title: "NocoBase v1.9.16 : Ajout d'options de transformation des messages d'erreur dans la configuration de la source de données API RESTful"
description: "Notes de version de la v1.9.16"
---

### 🎉 Nouvelles fonctionnalités

- **[Source de données : API REST]** ajout de l'option `transformateur de message d'erreur` dans la configuration de la source de données API RESTful par @cgyrock

### 🚀 Améliorations

- **[client]**
  - Affichage des options réduites au survol dans le composant Select ([#8029](https://github.com/nocobase/nocobase/pull/8029)) par @katherinehhh

  - Optimisation des messages de validation pour les sous-tableaux ([#8001](https://github.com/nocobase/nocobase/pull/8001)) par @katherinehhh

- **[Workflow]** Ajout du contexte de source de données "principale" pour UserSelect, afin de fournir un composant plus générique pouvant être utilisé ailleurs ([#8010](https://github.com/nocobase/nocobase/pull/8010)) par @mytharcher

- **[Workflow : Approbation]** Utilisation d'un composant commun pour réduire le code dupliqué par @mytharcher

### 🐛 Corrections de bugs

- **[client]** Correction d'un bug de chargement différé dans Variable.Input, qui entraînait un mauvais rendu du menu d'options des variables ([#8009](https://github.com/nocobase/nocobase/pull/8009)) par @mytharcher

- **[Action : Importer des enregistrements]** Correction du problème où une erreur était levée lorsqu'un champ dans le fichier xlsx importé avait une valeur `null` ([#8037](https://github.com/nocobase/nocobase/pull/8037)) par @mytharcher

- **[Workflow]** Correction du problème où la file d'attente était fermée avant la publication des messages ([#8003](https://github.com/nocobase/nocobase/pull/8003)) par @mytharcher

- **[Workflow : Sous-flux]** Correction du problème où le workflow sélectionné affichait "N/A" lorsque le nombre de workflows était supérieur à 200 par @mytharcher

- **[Workflow : Approbation]**
  - Correction d'un problème de permission lors de la récupération de `approvalRecords.reassignee` suite à une modification de `RemoteSelect` par @mytharcher

  - Correction du problème où l'action d'impression ne fonctionnait pas lors du rafraîchissement de la page avec une fenêtre modale ouverte par @mytharcher
