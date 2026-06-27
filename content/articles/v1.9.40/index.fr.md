---
title: "NocoBase v1.9.40 : Ajout de plus de types de fichiers pour la prévisualisation sur Microsoft"
description: "Notes de version de la v1.9.40"
---

### 🚀 Améliorations

- **[Visionneuse de fichiers Office]** Ajout de nouveaux types de fichiers pour la prévisualisation sur Microsoft ([#8500](https://github.com/nocobase/nocobase/pull/8500)) par @mytharcher

### 🐛 Corrections de bugs

- **[client]**
  - Correction du champ nanoid non régénéré après la soumission du formulaire ([#8491](https://github.com/nocobase/nocobase/pull/8491)) par @katherinehhh

  - Correction du message de validation obligatoire en double lors de l'effacement d'un champ en cascade ([#8476](https://github.com/nocobase/nocobase/pull/8476)) par @katherinehhh

- **[base de données]**
  - Correction des erreurs lors du filtrage avec l'opérateur `empty` après le rechargement d'une collection ([#8496](https://github.com/nocobase/nocobase/pull/8496)) par @2013xile

  - correction : mise à jour profonde des associations imbriquées ([#8492](https://github.com/nocobase/nocobase/pull/8492)) par @chenos

- **[Gestionnaire de fichiers]** Correction du problème où le nom de fichier extrait du corps de la requête devenait une chaîne décodée inattendue ([#8481](https://github.com/nocobase/nocobase/pull/8481)) par @mytharcher

- **[Source de données : Principale]** Correction d'un problème où la suppression d'enregistrements depuis un bloc de table d'association plusieurs-à-plusieurs ne respectait pas la contrainte `onDelete: 'restrict'` du champ d'association ([#8493](https://github.com/nocobase/nocobase/pull/8493)) par @2013xile

- **[Bloc : iframe]** Correction de l'erreur lors de l'ajout de variables agrégées à un Iframe ([#8482](https://github.com/nocobase/nocobase/pull/8482)) par @zhangzhonghe

- **[Workflow : Webhook]** Correction du problème où les données du corps étaient manquantes lorsque l'analyse du corps n'était pas configurée par @mytharcher

- **[Impression de modèle]** Correction de la logique incorrecte des autorisations du bouton d'impression lorsque les rôles étaient unifiés. par @jiannx

- **[Workflow : Approbation]**
  - Correction du problème où la concurrence entraînait une reprise d'exécution répétée par @mytharcher

  - Correction du problème où le renvoi d'une approbation au nœud précédent revenait au début par @mytharcher

- **[Gestionnaire de migration]** Correction d'un gel potentiel du processus causé par la journalisation d'instructions SQL excessivement volumineuses incluses dans les exceptions d'erreur de migration par @cgyrock
