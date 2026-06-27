---
title: "NocoBase v2.0.30 : Ajout de `isolated-vm` comme moteur d'exécution JavaScript par défaut pour le nœud JavaScript"
description: "Notes de version de la v2.0.30"
---

### 🚀 Améliorations

- **[Workflow : JavaScript]** Ajout de `isolated-vm` comme moteur d'exécution JavaScript par défaut pour le nœud JavaScript ([#8973](https://github.com/nocobase/nocobase/pull/8973)) par @mytharcher
Référence : [Nœud JavaScript](https://docs.nocobase.com/cn/workflow/nodes/javascript)
### 🐛 Corrections de bugs

- **[client]** Correction du message de confirmation secondaire incorrect lors de la fermeture d'une fenêtre contextuelle à plusieurs niveaux après modification des données du formulaire. ([#8944](https://github.com/nocobase/nocobase/pull/8944)) par @gchust

- **[Workflow : nœud SQL]** Correction d'un problème de sécurité dans le nœud SQL ([#8989](https://github.com/nocobase/nocobase/pull/8989)) par @mytharcher

- **[Employés IA]** Ajout d'une vérification de propriété à l'API de conversation IA ([#8993](https://github.com/nocobase/nocobase/pull/8993)) par @cgyrock

- **[Workflow : Approbation]** Correction de la limite de version des migrations héritées pour éviter une erreur au démarrage dans un déploiement de version récente par @mytharcher
