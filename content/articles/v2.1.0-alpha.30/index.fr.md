---
title: "NocoBase v2.1.0-alpha.30 : Correction du problème d'erreurs occasionnelles lors de l'utilisation du modèle DeepSeek v4 par l'employé IA"
description: "Notes de version de la v2.1.0-alpha.30"
---

### 🚀 Améliorations

- **[indéfini]** Ajout d'une notification d'échec Feishu pour les workflows de publication manuelle ([#9349](https://github.com/nocobase/nocobase/pull/9349)) par @Molunerfinn
- **[IdP : OAuth]** Les sessions OAuth utilisent désormais les mêmes paramètres d'expiration que la politique de jeton système ([#9345](https://github.com/nocobase/nocobase/pull/9345)) par @2013xile

### 🐛 Corrections de bugs

- **[client-v2]** Correction du chargement des plugins distants afin que les URL de plugin se terminant déjà par `.js` ne soient pas résolues en chemins `.js.js` en double. ([#9336](https://github.com/nocobase/nocobase/pull/9336)) par @Molunerfinn
- **[cli]** Correction des options booléennes de la CLI afin qu'elles puissent être désactivées avec des drapeaux négatifs ([#9337](https://github.com/nocobase/nocobase/pull/9337)) par @2013xile
- **[Employés IA]**

  - Correction du problème d'erreurs occasionnelles lorsque l'employé IA utilise le modèle DeepSeek v4 ([#9348](https://github.com/nocobase/nocobase/pull/9348)) par @cgyrock
  - Correction du problème où le nœud d'employé IA du workflow efface les compétences après avoir changé d'employé IA ([#9342](https://github.com/nocobase/nocobase/pull/9342)) par @cgyrock
- **[Source de données : Principale]** Empêche le plantage lorsque les champs sont indéfinis lors du chargement de la collection ([#9174](https://github.com/nocobase/nocobase/pull/9174)) par @saraTabbane
- **[Modèles d'interface]** Correction d'un problème où la liste des modèles de popup ne parvenait pas à charger correctement les modèles disponibles. ([#9332](https://github.com/nocobase/nocobase/pull/9332)) par @gchust
- **[Bloc : Kanban]** Correction des blocs associés Kanban utilisant des paramètres de ressource d'exécution non résolus dans les contextes de popup ou de page secondaire. ([#9350](https://github.com/nocobase/nocobase/pull/9350)) par @jiannx
- **[Workflow : Approbation]** Correction du problème où les paramètres de filtre et autres paramètres de requête fonctionnent désormais dans l'API de listage des workflows d'approbation disponibles par @mytharcher
