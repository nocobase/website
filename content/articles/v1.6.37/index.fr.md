---
title: "NocoBase v1.6.37 : Corrections de bugs"
description: "Notes de version de la v1.6.37"
---

### 🐛 Corrections de bugs

- **[client]**
  - Correction de l'ordre des champs dans la liste déroulante du bouton de filtre ([#6962](https://github.com/nocobase/nocobase/pull/6962)) par @zhangzhonghe

  - La variable de liaison de sous-tableau récupère les données d'association lors de l'effacement au lieu d'utiliser la valeur du formulaire ([#6963](https://github.com/nocobase/nocobase/pull/6963)) par @katherinehhh

  - Champ d'association dans le sous-tableau déclenchant une requête lorsque la variable d'itération a une valeur vide ([#6969](https://github.com/nocobase/nocobase/pull/6969)) par @katherinehhh

- **[Éditeur de thème]** Masquage de l'option de changement de thème et correction du style de la fenêtre contextuelle ([#6964](https://github.com/nocobase/nocobase/pull/6964)) par @zhangzhonghe

- **[Workflow : Approbation]** Correction d'une erreur lors de l'interrogation de la portée des assignés avec une condition d'association par @mytharcher
