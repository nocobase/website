---
title: "NocoBase v2.0.27 : Ajout d'une variable pour le paramètre de taille de page"
description: "Notes de version v2.0.27"
---

### 🚀 Améliorations

- **[Workflow]** Ajout d'une variable pour le paramètre de taille de page ([#8951](https://github.com/nocobase/nocobase/pull/8951)) par @mytharcher

- **[Workflow : Sous-flux]** Ajout d'une logique défensive pour éviter les blocages du workflow en cas d'exception par @mytharcher

### 🐛 Corrections de bugs

- **[client]** Correction de l'exception lors de l'ajout de nœuds enfants à la table arborescente dans la fenêtre contextuelle ([#8872](https://github.com/nocobase/nocobase/pull/8872)) par @jiannx

- **[serveur]** Éviter de traiter les messages de synchronisation après l'arrêt de l'application ([#8940](https://github.com/nocobase/nocobase/pull/8940)) par @mytharcher

- **[Moteur de flux]** Suppression d'un événement hérité copié depuis le dépôt uiSchema pour éviter une erreur lors du déclenchement ([#8957](https://github.com/nocobase/nocobase/pull/8957)) par @mytharcher

- **[Authentification]** Correction de l'acl pour prendre en charge les paramètres de filtrage d'état personnalisés ([#8918](https://github.com/nocobase/nocobase/pull/8918)) par @jiannx

- **[Gestionnaire d'e-mails]** Correction de la signature écrasée lors de l'utilisation de modèles par @jiannx
