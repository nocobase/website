---
title: "NocoBase v1.3.33-beta : Améliorations du workflow, corrections de bugs"
description: "Notes de version de la v1.3.33-beta"
---

### 🚀 Améliorations

- **[Workflow]** ajout d'un indice lié au champ d'association dans le mode par lot du nœud de mise à jour ([#5426](https://github.com/nocobase/nocobase/pull/5426)) par @mytharcher

### 🐛 Corrections de bugs

- **[client]**
  - correction du problème de la fenêtre de modification du profil recouverte par la sous-page ([#5409](https://github.com/nocobase/nocobase/pull/5409)) par @zhangzhonghe

  - Les variables du nœud de workflow n'affichent pas les champs de collection hérités ([#5415](https://github.com/nocobase/nocobase/pull/5415)) par @chenos

  - la pagination ne se réinitialise pas après avoir effacé les données de filtre dans le bloc de filtrage de tableau ([#5411](https://github.com/nocobase/nocobase/pull/5411)) par @katherinehhh

- **[Gestionnaire de fichiers]** suppression de la limite de 20 éléments pour le chargement des stockages dans la configuration de collection de modèles de fichiers ([#5430](https://github.com/nocobase/nocobase/pull/5430)) par @mytharcher

- **[Action : Dupliquer l'enregistrement]** Correction du problème où la fenêtre contextuelle d'édition en masse n'affiche pas le contenu ([#5412](https://github.com/nocobase/nocobase/pull/5412)) par @zhangzhonghe

- **[Visualisation des données]** Correction du problème où les valeurs par défaut ne s'affichent pas dans le bloc de filtre de graphique ([#5405](https://github.com/nocobase/nocobase/pull/5405)) par @zhangzhonghe
