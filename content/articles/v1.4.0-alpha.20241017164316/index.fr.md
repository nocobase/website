---
title: "NocoBase v1.4.0-alpha.20241017164316 : Améliorations des nœuds de workflow"
description: "Notes de version de v1.4.0-alpha.20241017164316"
---

### 🎉 Nouvelles fonctionnalités

- **[Workflow : nœud de boucle]** ajout d'options de contrôle supplémentaires dans la configuration du nœud de boucle ([#5342](https://github.com/nocobase/nocobase/pull/5342)) par @mytharcher
  Référence : [Nœud de boucle](https://docs.nocobase.com/handbook/workflow-loop)
- **[Workflow]** Ajout d'un bouton de test pour les nœuds de workflow et d'une API pour implémenter la fonction de test ([#5407](https://github.com/nocobase/nocobase/pull/5407)) par @mytharcher
- **[Composant de champ : masque]** Ajout du composant de champ `mask`, permettant d'afficher les données du champ sous forme de chaîne masquée par @gchust
  Référence : [Masque](https://docs.nocobase.com/handbook/field-component-mask)

### 🚀 Améliorations

- **[client]** Permet de réinitialiser le titre d'une colonne de tableau à sa valeur par défaut ([#5439](https://github.com/nocobase/nocobase/pull/5439)) par @katherinehhh

### 🐛 Corrections de bugs

- **[client]** Correction des options du composant de champ qui n'étaient pas correctement traduites ([#5442](https://github.com/nocobase/nocobase/pull/5442)) par @gchust
- **[Workflow : nœud de requête HTTP]** Correction d'un message d'erreur obsolète dans le nœud de requête ([#5443](https://github.com/nocobase/nocobase/pull/5443)) par @mytharcher
