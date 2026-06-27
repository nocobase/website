---
title: "NocoBase v2.0.0-alpha.63 : Redimensionnement automatique de la zone de texte dans le formulaire de tâche d'édition IA"
description: "Notes de version de v2.0.0-alpha.63"
---

### 🚀 Améliorations

- **[client]**
  - Empêcher le re-rendu complet du tableau lors de la mise à jour d'une cellule ([#8349](https://github.com/nocobase/nocobase/pull/8349)) par @katherinehhh

  - Redimensionnement automatique de la zone de texte dans le formulaire d'édition de tâche IA. ([#8350](https://github.com/nocobase/nocobase/pull/8350)) par @heziqiang

- **[Workflow : Approbation]**
  - Ajout d'une logique de réparation pour la synchronisation des audiences après la migration par @mytharcher

  - Simplification des paramètres dans la requête et amélioration des performances par @mytharcher

### 🐛 Corrections de bugs

- **[client]**
  - Correction d'un problème où les permissions de champ et d'action n'étaient pas recalculées après la pagination dans les blocs de détails, de liste et de formulaire. ([#8336](https://github.com/nocobase/nocobase/pull/8336)) par @gchust

  - Correction des champs de relation provenant de sources de données externes qui ne chargeaient pas les données de relation dans les blocs de formulaire ([#8356](https://github.com/nocobase/nocobase/pull/8356)) par @katherinehhh

- **[sdk]** Amélioration de l'implémentation du partage de jetons ([#8357](https://github.com/nocobase/nocobase/pull/8357)) par @chenos

- **[Contrôle d'accès]** Permettre aux champs de relation de s'associer en utilisant les clés cibles ([#8352](https://github.com/nocobase/nocobase/pull/8352)) par @2013xile

- **[Workflow : Nœud de boucle]** Correction du problème où le nœud ayant échoué dans une branche conditionnelle ne pouvait pas transmettre son statut au nœud de branche supérieur ([#8360](https://github.com/nocobase/nocobase/pull/8360)) par @mytharcher

- **[Workflow : Webhook]** Correction du problème où une erreur 404 était levée lors de l'envoi vers une URL webhook dans une sous-application par @mytharcher

- **[Workflow : Approbation]** Correction d'une erreur de build causée par des dépendances manquantes par @mytharcher

- **[Gestionnaire d'emails]** Correction du lien de réponse Outlook parfois déconnecté par @jiannx
