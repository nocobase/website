---
title: "NocoBase v1.4.0-alpha.20241016035453 : Ajout du champ Pièce jointe (URL)"
description: "Notes de version de v1.4.0-alpha.20241016035453"
---

### 🎉 Nouvelles fonctionnalités

- **[sdk]** Permet de stocker les informations client dans sessionStorage en définissant la variable d'environnement `API_CLIENT_STORAGE_TYPE` ([#5424](https://github.com/nocobase/nocobase/pull/5424)) par @2013xile
- **[Champ de collection : Pièce jointe (URL)]** Ajout du champ Pièce jointe (URL) par @katherinehhh

### 🚀 Améliorations

- **[client]**

  - Optimisation du débogage à distance ([#5394](https://github.com/nocobase/nocobase/pull/5394)) par @chenos
  - Optimisation du style pour centrer l'icône lorsque les boutons d'action utilisent uniquement une icône ([#5413](https://github.com/nocobase/nocobase/pull/5413)) par @katherinehhh
  - Fermeture automatique de la fenêtre contextuelle de message lors de la mise à jour d'un enregistrement ([#5408](https://github.com/nocobase/nocobase/pull/5408)) par @katherinehhh
- **[Workflow : Nœud de requête HTTP]** Prise en charge de SSE (Server-Sent Events) ([#5418](https://github.com/nocobase/nocobase/pull/5418)) par @chenos

### 🐛 Corrections de bugs

- **[Formulaires publics]** Correction du problème de clic sur les paramètres d'un formulaire public ([#5392](https://github.com/nocobase/nocobase/pull/5392)) par @katherinehhh
- **[client]**

  - Correction du problème d'affichage de la valeur dans la zone de saisie de la valeur par défaut ([#5400](https://github.com/nocobase/nocobase/pull/5400)) par @zhangzhonghe
  - Correction de l'erreur de non-détection du champ de relation lorsque des règles de liaison sont définies pour le sous-tableau ([#5402](https://github.com/nocobase/nocobase/pull/5402)) par @zhangzhonghe
  - Correction de l'aperçu erroné des miniatures lorsque le type de fichier n'est pas pris en charge par défaut ([#5401](https://github.com/nocobase/nocobase/pull/5401)) par @mytharcher
- **[Localisation]** Correction du problème où les traductions dans le plugin de localisation ne prenaient pas effet après publication ([#5416](https://github.com/nocobase/nocobase/pull/5416)) par @2013xile
