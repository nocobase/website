---
title: "NocoBase v1.8.27 : Prise en charge de la rotation des images lors de la prévisualisation"
description: "Notes de version de la v1.8.27"
---

### 🚀 Améliorations

- **[client]** Prise en charge de la rotation des images lors de l'aperçu ([#7523](https://github.com/nocobase/nocobase/pull/7523)) par @mytharcher

- **[Workflow]** Séparation de la logique liée à l'ordonnancement dans un répartiteur autonome ([#7535](https://github.com/nocobase/nocobase/pull/7535)) par @mytharcher

### 🐛 Corrections de bugs

- **[client]** Correction du problème où les sous-menus de la barre latérale ne pouvaient pas être mis en surbrillance correctement ([#7520](https://github.com/nocobase/nocobase/pull/7520)) par @duannyuuu

- **[Workflow : Nœud de boucle]** Correction du problème où le processus avançait incorrectement à l'élément suivant même lorsque les conditions du nœud de boucle n'étaient pas satisfaites ([#7521](https://github.com/nocobase/nocobase/pull/7521)) par @mytharcher

- **[Workflow]**
  - Correction du problème d'exécution en double dû à une gestion inappropriée de la file d'attente ([#7533](https://github.com/nocobase/nocobase/pull/7533)) par @mytharcher

  - Correction du problème où la condition de la liste des workflows était incorrecte lors du chargement du contexte de champ associé dans la configuration du workflow lié ([#7516](https://github.com/nocobase/nocobase/pull/7516)) par @mytharcher

  - Correction du problème où les tâches planifiées basées sur des champs de date ne se déclenchaient pas après le démarrage ([#7524](https://github.com/nocobase/nocobase/pull/7524)) par @mytharcher
