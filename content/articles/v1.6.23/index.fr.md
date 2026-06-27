---
title: "NocoBase v1.6.23 : Optimisation de la logique interne de la commande `nocobase upgrade`"
description: "Notes de version de la v1.6.23"
---

### 🚀 Améliorations

- **[cli]** Optimisation de la logique interne de la commande `nocobase upgrade` ([#6754](https://github.com/nocobase/nocobase/pull/6754)) par @chenos

- **[Impression de modèles]** Remplacement du contrôle des actions de source de données par un contrôle d'accès basé sur les rôles clients. par @sheldon66

### 🐛 Corrections de bugs

- **[cli]** Mise à jour automatique de package.json lors de la mise à niveau ([#6747](https://github.com/nocobase/nocobase/pull/6747)) par @chenos

- **[client]**
  - Filtre manquant pour les données déjà associées lors de l'ajout de données d'association ([#6750](https://github.com/nocobase/nocobase/pull/6750)) par @katherinehhh

  - Règle de liaison du bouton 'Ajouter un enfant' du tableau arborescent manquant 'enregistrement actuel' ([#6752](https://github.com/nocobase/nocobase/pull/6752)) par @katherinehhh

- **[Action : Importer des enregistrements]** Correction des exceptions d'importation et d'exportation survenant lors de la définition des permissions de champ. ([#6677](https://github.com/nocobase/nocobase/pull/6677)) par @aaaaaajie

- **[Bloc : Gantt]** Chevauchement des mois dans l'en-tête du calendrier pour la vue mensuelle du bloc diagramme de Gantt ([#6753](https://github.com/nocobase/nocobase/pull/6753)) par @katherinehhh

- **[Action : Exporter des enregistrements Pro]**
  - Bouton d'exportation Pro perdant les paramètres de filtre après le tri d'une colonne du tableau par @katherinehhh

  - Correction des exceptions d'importation et d'exportation survenant lors de la définition des permissions de champ. par @aaaaaajie

- **[Stockage de fichiers : S3(Pro)]** Correction des données de réponse du fichier téléchargé par @mytharcher

- **[Workflow : Approbation]** Correction du préchargement des champs d'association pour les enregistrements par @mytharcher
