---
title: "NocoBase v1.8.21 : Corrections de bugs"
description: "Notes de version de la v1.8.21"
---

### 🐛 Corrections de bugs

- **[Gestionnaire de fichiers]** Correction de l'erreur lors de la modification du champ `storage` dans la collection de fichiers. ([#7393](https://github.com/nocobase/nocobase/pull/7393)) par @mytharcher

- **[Workflow : Nœud parallèle]** Correction du problème où une détermination incorrecte de l'état dans les nœuds de branche parallèle sous le mode "Exécuter toutes les branches" provoquait une terminaison prématurée ([#7445](https://github.com/nocobase/nocobase/pull/7445)) par @mytharcher

- **[Workflow : Approbation]** Ajout de la variable d'état pour les modèles personnalisés dans les notifications d'achèvement d'approbation par @mytharcher
