---
title: "NocoBase v1.9.0-alpha.5 : Ajout d'options de configuration liées à la signature"
description: "Notes de version de v1.9.0-alpha.5"
---

### 🎉 Nouvelles fonctionnalités

- **[client]** Ajout de l'option « Focus automatique » pour les composants Input, TextArea, URL et InputNumber, qui permet de focaliser automatiquement le champ de saisie lors du rendu initial de la page lorsqu'elle est activée ([#7320](https://github.com/nocobase/nocobase/pull/7320)) par @zhangzhonghe

- **[Auth: SAML 2.0]** Ajout d'options de configuration liées à la signature par @2013xile

### 🚀 Améliorations

- **[Workflow: JavaScript]** Remplacement du cache par le cache de l'application pour éviter les bugs en mode cluster par @mytharcher

### 🐛 Corrections de bugs

- **[client]**
  - Correction du problème où les chaînes brutes des variables étaient soumises avec le formulaire ([#7337](https://github.com/nocobase/nocobase/pull/7337)) par @zhangzhonghe

  - Correction de l'infobulle affichant [object Object] au survol dans le panneau d'actions ([#7322](https://github.com/nocobase/nocobase/pull/7322)) par @katherinehhh

  - Lors de l'utilisation de variables pour définir les valeurs par défaut des champs dans les formulaires de filtre, si la valeur de la variable est vide, la zone de saisie affiche la chaîne de variable d'origine ([#7335](https://github.com/nocobase/nocobase/pull/7335)) par @zhangzhonghe

- **[undefined]** Ajout d'un nouveau plugin aux préréglages ([#7319](https://github.com/nocobase/nocobase/pull/7319)) par @mytharcher

- **[Collection: Tree]** Correction de la logique de synchronisation des chemins des collections arborescentes ([#7330](https://github.com/nocobase/nocobase/pull/7330)) par @ChimingLiu

- **[Office File Previewer]** Prise en charge de l'aperçu des fichiers `.docx`, `.xlsx` et `.pptx` avec uniquement une URL ([#7336](https://github.com/nocobase/nocobase/pull/7336)) par @mytharcher

- **[Workflow: Dynamic calculation node]** Correction d'une erreur causée par une API obsolète ([#7321](https://github.com/nocobase/nocobase/pull/7321)) par @mytharcher

- **[Workflow: Approval]** Ajout d'un titre de tâche pour les éléments ajoutés et délégués par @mytharcher

- **[Email manager]** Prise en charge du même email pour plusieurs personnes par @jiannx
