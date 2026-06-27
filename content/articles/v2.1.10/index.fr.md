---
title: "NocoBase v2.1.10 : Ajout de la prise en charge des variables utilisateur actuel dans les URL et en-têtes des clients MCP distants"
description: "Notes de version de v2.1.10"
---

### 🎉 Nouvelles fonctionnalités

- **[ai]** Ajout de la prise en charge de l'utilisation des variables utilisateur actuelles dans les URL et en-têtes des clients MCP distants. ([#9828](https://github.com/nocobase/nocobase/pull/9828)) par @cgyrock
- **[cli]** Prise en charge des scripts hook d'installation ([#9824](https://github.com/nocobase/nocobase/pull/9824)) par @chenos

### 🚀 Améliorations

- **[client-v2]** Affichage des règles de validation au niveau des champs en tant que règles héritées en lecture seule dans les paramètres de validation des champs de l'interface utilisateur. ([#9819](https://github.com/nocobase/nocobase/pull/9819)) par @katherinehhh
- **[Moteur de workflow]** Ajout du bloc courant au contexte utilisateur par défaut lors de la création d'agents IA à l'aide de l'API Flow Surface. ([#9840](https://github.com/nocobase/nocobase/pull/9840)) par @gchust

### 🐛 Corrections de bugs

- **[client-v2]** Correction du bloc qui ne se rafraîchissait pas après la mise à jour des paramètres des blocs. ([#9843](https://github.com/nocobase/nocobase/pull/9843)) par @gchust
- **[Workflow : Événement d'action personnalisée]**

  - Correction des actions de workflow déclenchées par un contexte personnalisé afin que les variables frontend dans les charges utiles des requêtes soient résolues avant la soumission dans les boutons d'action v2 ([#9853](https://github.com/nocobase/nocobase/pull/9853)) par @mytharcher
  - Correction du sélecteur de liaison du workflow d'action personnalisée v2 afin que les workflows activés soient filtrés avec des valeurs booléennes et puissent être listés correctement. ([#9865](https://github.com/nocobase/nocobase/pull/9865)) par @mytharcher
- **[Bloc : Gantt]** Correction des paramètres du modèle de popup des tâches Gantt qui ne s'appliquaient pas ou ne s'effaçaient pas correctement. ([#9835](https://github.com/nocobase/nocobase/pull/9835)) par @jiannx
- **[Workflow : Approbation]**

  - Correction de la validation du nœud d'action d'approbation pour autoriser `null` pour `applyDetail` ou `approvalUid` et ignorer le traitement sauf si une référence de chaîne est fournie par @mytharcher
  - Correction du problème où les approbations associées ne se chargent ou ne se rafraîchissent pas correctement par @zhangzhonghe
