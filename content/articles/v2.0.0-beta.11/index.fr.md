---
title: "NocoBase v2.0.0-beta.11 : L'éditeur de texte enrichi prend en charge le réglage de la taille de police, le réglage de la taille des images et les sauts de ligne souples"
description: "Notes de version de v2.0.0-beta.11"
---

### 🚀 Améliorations

- **[évaluateurs]** Mise à jour de la version de math.js pour prendre en charge davantage de fonctions ([#8411](https://github.com/nocobase/nocobase/pull/8411)) par @mytharcher

- **[client]** L'éditeur de texte enrichi prend désormais en charge le réglage de la taille de la police, le réglage de la taille des images et les sauts de ligne souples ([#8401](https://github.com/nocobase/nocobase/pull/8401)) par @jiannx

- **[employés IA]** Modification du résultat de l'appelant de workflow en `execution.output` ; en utilisant explicitement le nœud de sortie, le résultat peut être stable ([#8423](https://github.com/nocobase/nocobase/pull/8423)) par @mytharcher

### 🐛 Corrections de bugs

- **[client]**
  - Ajout d'une tolérance aux pannes pour le schéma d'action, afin d'éviter le plantage de la page lors du clic sur un bouton d'action ([#8420](https://github.com/nocobase/nocobase/pull/8420)) par @mytharcher

  - Correction de la disparition du paramètre de champ de titre après avoir défini l'URL d'une pièce jointe, puis changé pour un autre champ dans un élément de formulaire ([#8418](https://github.com/nocobase/nocobase/pull/8418)) par @katherinehhh

  - Correction du champ de titre i qui ne se met pas à jour lorsque le champ d'association est défini en mode lecture seule dans le formulaire de création ([#8413](https://github.com/nocobase/nocobase/pull/8413)) par @katherinehhh

- **[Moteur de flux]** Correction d'un problème où la résolution de variable était incorrecte lorsque filterByTk était un tableau. ([#8412](https://github.com/nocobase/nocobase/pull/8412)) par @gchust

- **[Impression de modèle]** Prise en charge du champ espace par @jiannx
