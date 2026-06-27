---
title: "NocoBase v2.0.32 : Ajout d'une table des matières au README"
description: "Notes de version de la v2.0.32"
---

### 🚀 Améliorations

- **[indéfini]** Ajout d'une table des matières au README ([#8878](https://github.com/nocobase/nocobase/pull/8878)) par @gaston98765

### 🐛 Corrections de bugs

- **[client]**
  - Le champ de relation du sous-formulaire ne parvenait pas à enregistrer ([#9004](https://github.com/nocobase/nocobase/pull/9004)) par @jiannx

  - Les sous-formulaires des champs n'affichent pas les données ([#9008](https://github.com/nocobase/nocobase/pull/9008)) par @jiannx

  - Correction du problème où ctx.request ne pouvait pas remplacer l'en-tête Authorization. ([#8850](https://github.com/nocobase/nocobase/pull/8850)) par @gchust

- **[serveur]** Ajout d'une vérification de service pour éviter que le statut de l'application ne soit mis à jour par une instance non active ([#8959](https://github.com/nocobase/nocobase/pull/8959)) par @mytharcher

- **[Employés IA]**
  - Correction du problème lors de l'utilisation des modèles deepseek ou minmax sur dashscope ([#9033](https://github.com/nocobase/nocobase/pull/9033)) par @cgyrock

  - Correction du problème où l'annulation du raisonnement des employés IA provoquait un plantage du service ([#9031](https://github.com/nocobase/nocobase/pull/9031)) par @cgyrock

- **[Workflow : Nœud de requête HTTP]** Nettoyage des résultats du nœud de requête du workflow pour éviter d'exposer la configuration de la requête, paramétrage par défaut des nouveaux nœuds pour ne renvoyer que les données de réponse, et ajout de journaux de débogage pour les requêtes échouées. ([#9024](https://github.com/nocobase/nocobase/pull/9024)) par @mytharcher

- **[Champ de collection : Tri]** correction(champ-tri) : empêcher le plantage lorsque l'attribut scopeKey est indéfini ([#9019](https://github.com/nocobase/nocobase/pull/9019)) par @gaston98765

- **[Bloc : GridCard]** Correction du problème où le bouton n'était pas actualisé lors du rafraîchissement de la carte en grille ([#9021](https://github.com/nocobase/nocobase/pull/9021)) par @jiannx

- **[Workflow : Approbation]**
  - Ajout d'une tolérance aux pannes lors de la suppression du workflow, pour éviter les erreurs de chargement dans la liste des tâches par @mytharcher

  - Ajout d'une tolérance aux pannes pour l'absence de `latestRound` par @mytharcher
