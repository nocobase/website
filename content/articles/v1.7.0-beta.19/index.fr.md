---
title: "NocoBase v1.7.0-beta.19 : Prise en charge des variables dans la partie gauche des conditions des règles de liaison"
description: "Notes de version de v1.7.0-beta.19"
---

### 🎉 Nouvelles fonctionnalités

- **[client]** prise en charge des variables à gauche des conditions des règles de liaison ([#6609](https://github.com/nocobase/nocobase/pull/6609)) par @katherinehhh

- **[Workflow : nœud de calcul de date]** Ajout de la fonction `changeTimezone` pour modifier la valeur du fuseau horaire lors du formatage par @mytharcher

### 🚀 Améliorations

- **[client]**
  - prise en charge des enregistrements de table sélectionnés dans les requêtes personnalisées ([#6647](https://github.com/nocobase/nocobase/pull/6647)) par @katherinehhh

  - Ajout d'une API de délai pour les scénarios qui s'ouvrent sans délai ([#6681](https://github.com/nocobase/nocobase/pull/6681)) par @mytharcher

### 🐛 Corrections de bugs

- **[base de données]** Correction d'une erreur de build CI ([#6687](https://github.com/nocobase/nocobase/pull/6687)) par @aaaaaajie

- **[client]**
  - Correction d'une erreur déclenchée lors du survol de la souris sur un bloc de modèle référencé dans la configuration du nœud d'approbation ([#6691](https://github.com/nocobase/nocobase/pull/6691)) par @mytharcher

  - Problème d'affichage des descriptions de champ dans le workflow ([#6680](https://github.com/nocobase/nocobase/pull/6680)) par @katherinehhh

  - Correction des paramètres régionaux pour le composant de téléchargement ([#6682](https://github.com/nocobase/nocobase/pull/6682)) par @mytharcher

  - Le champ d'association personnalisé n'affiche pas les paramètres du composant de champ ([#6692](https://github.com/nocobase/nocobase/pull/6692)) par @katherinehhh

  - Compatibilité des règles de liaison avec les données héritées ([#6686](https://github.com/nocobase/nocobase/pull/6686)) par @katherinehhh

  - Le chargement différé d'un composant d'interface utilisateur manquant peut provoquer une erreur de rendu ([#6683](https://github.com/nocobase/nocobase/pull/6683)) par @gchust

  - Ajout du composant natif Password au HoC Input ([#6679](https://github.com/nocobase/nocobase/pull/6679)) par @mytharcher

- **[Workflow : nœud manuel]** Correction de la constante d'état de la tâche manuelle ([#6676](https://github.com/nocobase/nocobase/pull/6676)) par @mytharcher

- **[Action : Importer des enregistrements]** Correction d'une erreur lors de l'importation d'un champ de temps xlsx ([#6672](https://github.com/nocobase/nocobase/pull/6672)) par @aaaaaajie

- **[Workflow : événement d'action personnalisée]** Correction des cas de test par @mytharcher

- **[Gestionnaire de sauvegarde]** Erreur de délai d'attente lors de la tentative de restauration d'une sauvegarde non chiffrée avec un mot de passe par @gchust
