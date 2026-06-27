---
title: "NocoBase v2.0.51 : Correction du comportement de validation obligatoire pour les formulaires d'approbation"
description: "Notes de version v2.0.51"
---

### 🚀 Améliorations

- **[Workflow : Approbation]** Correction du comportement de validation obligatoire pour les formulaires d'approbation par @zhangzhonghe

### 🐛 Corrections de bugs

- **[client]**
  - Correction d'un problème où le code JS ne pouvait plus être modifié après qu'un champ JS ait été défini en lecture seule. ([#9404](https://github.com/nocobase/nocobase/pull/9404)) par @gchust

  - Correction d'un problème où les affectations de champs de sous-tableau ne prenaient pas effet dans les règles de liaison de champs. ([#9412](https://github.com/nocobase/nocobase/pull/9412)) par @gchust

  - Correction du problème où les onglets de page v2 ne se synchronisaient pas immédiatement après l'enregistrement des paramètres ([#9396](https://github.com/nocobase/nocobase/pull/9396)) par @zhangzhonghe

  - Correction d'un problème où la fenêtre contextuelle de valeur par défaut pour les champs d'association dans le formulaire de création s'affichait incorrectement. ([#9408](https://github.com/nocobase/nocobase/pull/9408)) par @gchust

- **[Politique de mot de passe]** Correction d'un problème où les utilisateurs verrouillés de manière permanente pouvaient se connecter après un redémarrage du service par @2013xile

- **[Action : Importer des enregistrements Pro]** Correction du problème où la vérification des doublons sur un champ de date échouait toujours par @mytharcher

- **[Workflow : Approbation]** Correction du problème où le tiroir de sélection d'enregistrement était masqué dans la configuration du workflow d'approbation par @zhangzhonghe
