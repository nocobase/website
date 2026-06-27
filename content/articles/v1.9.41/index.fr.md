---
title: "NocoBase v1.9.41 : Correction du chemin de route du lien de workflow"
description: "Notes de version v1.9.41"
---

### 🚀 Améliorations

- **[client]** Possibilité de désactiver les paramètres d'ajout redondants par défaut pour `ResourceActionProvider` ([#8527](https://github.com/nocobase/nocobase/pull/8527)) par @2013xile

### 🐛 Corrections de bugs

- **[Workflow]** Ajout d'une tolérance aux pannes pour le composant de sélection d'enregistrement de collection, afin d'éviter une erreur lorsque la collection est supprimée ([#8528](https://github.com/nocobase/nocobase/pull/8528)) par @mytharcher

- **[Gestionnaire de fichiers]** Sécurisation du chemin des fichiers pour le stockage local, afin d'éviter un accès en dehors de la racine du document ([#8539](https://github.com/nocobase/nocobase/pull/8539)) par @mytharcher

- **[Workflow : Sous-flux]** Correction du chemin de route du lien de workflow par @mytharcher
