---
title: "NocoBase v1.3.53 : Exportation du hook essentiel"
description: "Notes de version de la v1.3.53"
---

### 🚀 Améliorations

- **[client]**
  - Exportation du hook essentiel ([#5702](https://github.com/nocobase/nocobase/pull/5702)) par @mytharcher

  - Suppression du plugin de région Chine des plugins intégrés ([#5693](https://github.com/nocobase/nocobase/pull/5693)) par @katherinehhh

- **[Workflow : Événement pré-action]** Suppression du journal d'avertissement dans l'intercepteur de requêtes par @mytharcher

### 🐛 Corrections de bugs

- **[cli]** Le mode démon ne supprime pas les fichiers sock ([#5750](https://github.com/nocobase/nocobase/pull/5750)) par @chenos

- **[client]**
  - Correction du problème où les champs d'association s'affectent mutuellement lorsque plusieurs champs d'association ont la même collection cible ([#5744](https://github.com/nocobase/nocobase/pull/5744)) par @katherinehhh

  - Correction du problème d'alignement des cases à cocher dans le sous-tableau ([#5735](https://github.com/nocobase/nocobase/pull/5735)) par @katherinehhh

  - Correction du problème d'affichage du champ de clé étrangère dans le sélecteur de données ([#5734](https://github.com/nocobase/nocobase/pull/5734)) par @katherinehhh

  - Correction de l'ajustement de feedbackLayout pour améliorer les messages de validation dans le sous-tableau ([#5700](https://github.com/nocobase/nocobase/pull/5700)) par @katherinehhh

- **[serveur]** Chargement des plugins dans l'ordre des dépendances ([#5706](https://github.com/nocobase/nocobase/pull/5706)) par @chenos

- **[Bloc : Carte]** Correction d'une erreur lors du changement de niveau de zoom dans Google Maps ([#5722](https://github.com/nocobase/nocobase/pull/5722)) par @katherinehhh

- **[Source de données : Principale]** Correction de l'inférence du nom de champ dans la collection de vues ([#5729](https://github.com/nocobase/nocobase/pull/5729)) par @chareice

- **[Gestionnaire de fichiers]** Lorsque le point de terminaison n'est pas vide, forcePathStyle est défini sur true ([#5712](https://github.com/nocobase/nocobase/pull/5712)) par @chenos
