---
title: "NocoBase v1.7.15 : Corrections de bugs"
description: "Notes de version de la v1.7.15"
---

### 🐛 Corrections de bugs

- **[client]**
  - Utilisation d'une portée de variable indépendante pour chaque champ ([#7012](https://github.com/nocobase/nocobase/pull/7012)) par @mytharcher

  - Attribution des valeurs de champ : impossible d'effacer les données pour les champs de relation ([#7086](https://github.com/nocobase/nocobase/pull/7086)) par @zhangzhonghe

  - La fonction d'alignement du texte des colonnes du tableau ne fonctionne pas ([#7094](https://github.com/nocobase/nocobase/pull/7094)) par @zhangzhonghe

- **[Workflow]** Correction de l'exécution incorrecte de la vérification sur les nombres entiers de grande taille ([#7091](https://github.com/nocobase/nocobase/pull/7091)) par @mytharcher

- **[Gestionnaire de fichiers]** Correction de l'impossibilité de mettre à jour le champ des pièces jointes dans le processus d'approbation ([#7093](https://github.com/nocobase/nocobase/pull/7093)) par @mytharcher

- **[Workflow : Approbation]** Utilisation d'une comparaison au lieu d'une logique implicite pour éviter les problèmes de type par @mytharcher
