---
title: "NocoBase v1.8.20 : Ajustement de l'API des variables de workflow pour prendre en charge une liste de variables prédéfinies"
description: "Notes de version de v1.8.20"
---

### 🚀 Améliorations

- **[Workflow]** Ajustement de l'API des variables de workflow pour permettre la prédéfinition d'une liste de variables supplémentaires ([#7439](https://github.com/nocobase/nocobase/pull/7439)) par @mytharcher

- **[Workflow : Approbation]**
  - Prise en charge des variables liées à l'approbation dans les notifications personnalisées par @mytharcher

  - Prise en charge de la mise à jour du statut d'approbation après la fin de l'exécution par le nœud de terminaison par @mytharcher

### 🐛 Corrections de bugs

- **[client]**
  - Correction d'un problème où, dans certains scénarios, la modification d'un enregistrement dans la fenêtre contextuelle du sélecteur d'enregistrements mobiles provoquait une erreur ([#7444](https://github.com/nocobase/nocobase/pull/7444)) par @zhangzhonghe

  - La validation obligatoire ne fonctionnait pas pour les champs de pièce jointe dans les sous-tableaux ([#7431](https://github.com/nocobase/nocobase/pull/7431)) par @katherinehhh

  - Correction du problème où l'icône était affichée incorrectement lorsque l'URL dans le champ d'URL de pièce jointe contenait des paramètres de requête ([#7432](https://github.com/nocobase/nocobase/pull/7432)) par @mytharcher

- **[base de données]**
  - Correction d'une erreur de syntaxe MySQL survenant lors du chargement de davantage de messages in-app. ([#7438](https://github.com/nocobase/nocobase/pull/7438)) par @aaaaaajie

  - Correction d'un problème de précision pour les champs Numérique exportés ([#7421](https://github.com/nocobase/nocobase/pull/7421)) par @aaaaaajie

- **[non défini]** Correction d'un problème de filtrage par champ de date uniquement dans une source externe MySQL ([#7422](https://github.com/nocobase/nocobase/pull/7422)) par @aaaaaajie

- **[Action : Importer des enregistrements]** Correction d'un problème où l'importation échouait lorsque la clé primaire de la table était un texte sur une seule ligne ([#7416](https://github.com/nocobase/nocobase/pull/7416)) par @aaaaaajie

- **[Workflow]**
  - Compléter les options de suppression automatique du statut d'exécution du workflow ([#7436](https://github.com/nocobase/nocobase/pull/7436)) par @mytharcher

  - Correction de problèmes liés au menu mobile dans les tâches du workflow ([#7419](https://github.com/nocobase/nocobase/pull/7419)) par @mytharcher

- **[Action : Importer des enregistrements Pro]** Correction d'un résultat de mise à jour inattendu lors de l'utilisation d'une clé primaire de type chaîne dans l'importation xlsx. par @aaaaaajie
