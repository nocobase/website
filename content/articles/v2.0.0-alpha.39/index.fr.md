---
title: "NocoBase v2.0.0-alpha.39 : Adaptation des composants pour les appareils mobiles"
description: "Notes de version de la v2.0.0-alpha.39"
---

### 🚀 Améliorations

- **[client]** Adaptation des composants pour les appareils mobiles ([#7870](https://github.com/nocobase/nocobase/pull/7870)) par @zhangzhonghe

### 🐛 Corrections de bugs

- **[client]**
  - Correction du problème où la configuration par défaut du champ JS n'utilisait pas le paramètre du mode d'affichage. ([#7862](https://github.com/nocobase/nocobase/pull/7862)) par @gchust

  - Correction du problème où les modèles dupliqués n'apparaissent pas, causé par le glisser-déposer puis la suppression d'un modèle référencé ([#7847](https://github.com/nocobase/nocobase/pull/7847)) par @zhangzhonghe

  - Correction du problème empêchant de définir la valeur par défaut d'un champ de date dans le modèle de bloc de formulaire de filtre. ([#7853](https://github.com/nocobase/nocobase/pull/7853)) par @gchust

  - Correction du problème où la règle de liaison pour le formulaire d'approbation ne fonctionnait pas ([#7858](https://github.com/nocobase/nocobase/pull/7858)) par @zhangzhonghe

  - Correction du problème où les opérations de modification rapide dans le bloc tableau ne mettaient pas correctement les données à jour. ([#7845](https://github.com/nocobase/nocobase/pull/7845)) par @gchust

  - Correction du problème où le champ de texte enrichi ne pouvait pas accepter de valeur par défaut et où le champ de sélection multiple ne pouvait pas sélectionner plusieurs options par défaut. ([#7864](https://github.com/nocobase/nocobase/pull/7864)) par @gchust

- **[Gestionnaire multi-applications (obsolète)]** Après l'arrêt d'une sous-application, publier un message de synchronisation pour notifier les autres nœuds d'arrêter la sous-application correspondante ([#7849](https://github.com/nocobase/nocobase/pull/7849)) par @2013xile

- **[Workflow : Approbation]** Correction du problème où la règle de liaison pour le formulaire d'approbation ne fonctionnait pas par @zhangzhonghe

- **[Gestionnaire d'emails]** Erreur de rafraîchissement de ShadowHtml par @jiannx
