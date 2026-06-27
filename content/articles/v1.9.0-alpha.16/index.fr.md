---
title: "NocoBase v1.9.0-alpha.16 : Prise en charge de la rotation des images lors de l'aperçu"
description: "Notes de version de v1.9.0-alpha.16"
---

### 🚀 Améliorations

- **[client]**
  - Prise en charge de la rotation des images lors de l'aperçu ([#7523](https://github.com/nocobase/nocobase/pull/7523)) par @mytharcher

  - Ajout de la prise en charge de la localisation pour les infobulles et les titres d'éléments de groupe ([#7485](https://github.com/nocobase/nocobase/pull/7485)) par @katherinehhh

- **[Adaptateur de file d'attente RabbitMQ]** Amélioration de la gestion des connexions RabbitMQ et de la logique de traitement des messages par @sdp-ncd

### 🐛 Corrections de bugs

- **[client]**
  - Correction du problème où les sous-menus de la barre latérale ne pouvaient pas être mis en surbrillance correctement ([#7520](https://github.com/nocobase/nocobase/pull/7520)) par @duannyuuu

  - Correction du problème où la fenêtre contextuelle de configuration des icônes de menu était masquée ([#7515](https://github.com/nocobase/nocobase/pull/7515)) par @zhangzhonghe

- **[Notification : Message dans l'application]** Correction du problème où les messages récents n'étaient pas affichés lors de l'ouverture de la fenêtre contextuelle de notification ([#7514](https://github.com/nocobase/nocobase/pull/7514)) par @mytharcher

- **[Workflow]** Correction du problème où la condition de la liste des workflows était incorrecte lors du chargement du contexte de champ associé dans la configuration du workflow lié ([#7516](https://github.com/nocobase/nocobase/pull/7516)) par @mytharcher

- **[Workflow : Nœud de boucle]** Correction du problème où le processus avançait incorrectement vers l'élément suivant même lorsque les conditions du nœud de boucle n'étaient pas satisfaites ([#7521](https://github.com/nocobase/nocobase/pull/7521)) par @mytharcher

- **[Workflow : Approbation]**
  - Correction du problème où une erreur se produisait lors de la suppression de données d'une source de données externe par @mytharcher

  - Correction du problème où les champs de formule dans le formulaire d'approbation ne se mettaient pas à jour automatiquement par @mytharcher
