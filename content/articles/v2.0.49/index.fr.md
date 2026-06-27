---
title: "NocoBase v2.0.49 : Amélioration de la gestion des erreurs de téléchargement des fichiers d'aperçu"
description: "Notes de version de la v2.0.49"
---

### 🚀 Améliorations

- **[indéfini]** Ajout d'une notification d'échec Feishu pour les workflows de publication manuelle ([#9349](https://github.com/nocobase/nocobase/pull/9349)) par @Molunerfinn

### 🐛 Corrections de bugs

- **[Source de données : Principale]** Empêche le plantage lorsque les champs sont indéfinis lors du chargement de la collection ([#9174](https://github.com/nocobase/nocobase/pull/9174)) par @saraTabbane
- **[Modèles d'interface]** Correction d'un problème où la liste des modèles de popup ne chargeait pas correctement les modèles disponibles. ([#9332](https://github.com/nocobase/nocobase/pull/9332)) par @gchust
- **[Employés IA]** Correction du problème d'erreurs occasionnelles lorsque l'employé IA utilise le modèle DeepSeek v4 ([#9348](https://github.com/nocobase/nocobase/pull/9348)) par @cgyrock
- **[Gestionnaire de fichiers]** Amélioration de la gestion des erreurs de téléchargement des fichiers de prévisualisation ([#9103](https://github.com/nocobase/nocobase/pull/9103)) par @gaston98765
- **[Workflow : Approbation]** Correction du problème où les paramètres de filtre et autres requêtes fonctionnent désormais dans l'API de liste des workflows d'approbation disponibles par @mytharcher
