---
title: "NocoBase v1.8.0-beta.9 : Masquer automatiquement la barre d'actions du bloc de carte en grille lorsqu'elle est vide"
description: "Notes de version de v1.8.0-beta.9"
---

### 🚀 Améliorations

- **[client]**
  - Masquage automatique de la barre d'actions des blocs de cartes en grille lorsqu'elle est vide ([#7069](https://github.com/nocobase/nocobase/pull/7069)) par @zhangzhonghe

  - La largeur du conteneur du logo s'adapte au type de contenu (168px fixes pour les images, largeur automatique pour le texte) ([#7075](https://github.com/nocobase/nocobase/pull/7075)) par @Cyx649312038

- **[Vérification]** Suppression des options de vérificateur de la réponse de l'API `verifiers:listByUser` ([#7090](https://github.com/nocobase/nocobase/pull/7090)) par @2013xile

### 🐛 Corrections de bugs

- **[client]**
  - Le message de validation obligatoire dans le sous-tableau persiste lors du changement de page ([#7080](https://github.com/nocobase/nocobase/pull/7080)) par @katherinehhh

  - La condition de style sur les champs de colonne du sous-tableau n'est pas appliquée correctement ([#7083](https://github.com/nocobase/nocobase/pull/7083)) par @katherinehhh

  - Perte de la virgule décimale après le passage du composant de montant de masque à inputNumer ([#7077](https://github.com/nocobase/nocobase/pull/7077)) par @katherinehhh

  - Les variables de paramètres de requête URL ne fonctionnent pas dans la valeur par défaut du champ de formulaire public ([#7084](https://github.com/nocobase/nocobase/pull/7084)) par @katherinehhh

  - Le filtrage via les champs de collection de relations dans les formulaires de filtre est invalide ([#7070](https://github.com/nocobase/nocobase/pull/7070)) par @zhangzhonghe

  - Rendu incorrect du Markdown (Vditor) dans le sous-tableau ([#7074](https://github.com/nocobase/nocobase/pull/7074)) par @katherinehhh

- **[base de données]** Prise en charge des mises à jour d'association dans updateOrCreate et firstOrCreate ([#7088](https://github.com/nocobase/nocobase/pull/7088)) par @chenos

- **[Champ de collection : Plusieurs à plusieurs (tableau)]** La mise à jour d'un champ plusieurs à plusieurs (tableau) génère une erreur lorsque le champ `updatedBy` est présent ([#7089](https://github.com/nocobase/nocobase/pull/7089)) par @2013xile

- **[Champ de collection : Séquence]** Correction du calcul de séquence bigint basé sur une chaîne ([#7079](https://github.com/nocobase/nocobase/pull/7079)) par @mytharcher

- **[Formulaires publics]** Formulaires publics : Correction d'un problème d'accès non autorisé lors de la soumission du formulaire ([#7085](https://github.com/nocobase/nocobase/pull/7085)) par @zhangzhonghe
