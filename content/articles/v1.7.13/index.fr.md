---
title: "NocoBase v1.7.13 : La largeur du conteneur du logo s'adapte au type de contenu"
description: "Notes de version de la v1.7.13"
---

### 🚀 Améliorations

- **[client]** La largeur du conteneur du logo s'adapte au type de contenu (168px fixes pour les images, largeur automatique pour le texte) ([#7075](https://github.com/nocobase/nocobase/pull/7075)) par @Cyx649312038

- **[Workflow : Approbation]** Ajout d'une option de champ supplémentaire pour la liste des réaffectataires par @mytharcher

### 🐛 Corrections de bugs

- **[client]**
  - Le message de validation obligatoire dans la sous-table persiste lors du changement de page ([#7080](https://github.com/nocobase/nocobase/pull/7080)) par @katherinehhh

  - Perte de la virgule décimale après le passage du composant de montant de mask à inputNumer ([#7077](https://github.com/nocobase/nocobase/pull/7077)) par @katherinehhh

  - Rendu incorrect du Markdown (Vditor) dans la sous-table ([#7074](https://github.com/nocobase/nocobase/pull/7074)) par @katherinehhh

- **[Champ de collection : Séquence]** Correction du calcul de séquence basé sur une chaîne bigint ([#7079](https://github.com/nocobase/nocobase/pull/7079)) par @mytharcher

- **[Gestionnaire de sauvegarde]** Erreur de commande inconnue lors de la restauration de sauvegardes MySQL sur la plateforme Windows par @gchust
