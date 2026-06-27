---
title: "NocoBase v2.0.0-beta.10 : Optimisation du bouton d'entrée IA"
description: "Notes de version de la v2.0.0-beta.10"
---

### 🚀 Améliorations

- **[client]** Possibilité de spécifier quand exécuter le flux d'événements. ([#8340](https://github.com/nocobase/nocobase/pull/8340)) par @gchust
- **[AI employees]**

  - Optimisation du bouton d'entrée IA ([#8414](https://github.com/nocobase/nocobase/pull/8414)) par @heziqiang
  - Masquer le constructeur IA dans la liste d'entrée.<br/> Optimisation du flux d'intégration LLM.<br/> Mise à jour de la documentation concernant le modèle IA gemini-3. ([#8409](https://github.com/nocobase/nocobase/pull/8409)) par @heziqiang
- **[Notification : Message in-app]** Correction d'un problème de performance lors de l'envoi de messages in-app à un grand nombre d'utilisateurs ([#8402](https://github.com/nocobase/nocobase/pull/8402)) par @mytharcher

### 🐛 Corrections de bugs

- **[client]**

  - Le composant de saisie numérique n'affiche pas la valeur ([#8410](https://github.com/nocobase/nocobase/pull/8410)) par @chenos
  - Correction : les données de sélection en cascade ne sont pas effacées après une soumission réussie dans le formulaire de création ([#8403](https://github.com/nocobase/nocobase/pull/8403)) par @katherinehhh
  - Correction d'un problème avec le bouton de soumission où la validation obligatoire ignorée ne fonctionne pas lorsque la confirmation est activée ([#8400](https://github.com/nocobase/nocobase/pull/8400)) par @katherinehhh
  - Résolution d'un problème où le bouton de soumission apparaît dans la fenêtre contextuelle de sélection de fichier d'un champ de relation un-à-un ([#8398](https://github.com/nocobase/nocobase/pull/8398)) par @katherinehhh
  - Correction : résolution d'un problème où le paramètre de mise en page dans le bloc de carte en grille ne prend pas effet ([#8399](https://github.com/nocobase/nocobase/pull/8399)) par @katherinehhh
  - Correction : empêcher l'affectation lorsque des caractères chinois sont saisis dans un champ numérique ([#8397](https://github.com/nocobase/nocobase/pull/8397)) par @katherinehhh
- **[Champ de collection : Plusieurs-à-plusieurs (tableau)]** Correction d'une erreur lors de l'ajout de relations plusieurs-à-plusieurs (tableau) de second niveau dans les requêtes d'association ([#8406](https://github.com/nocobase/nocobase/pull/8406)) par @cgyrock
- **[Multi-espace]**

  - Espace lié lors de l'ajout de données associées par @jiannx
  - La couleur du sélecteur d'espace suit le thème par @jiannx
