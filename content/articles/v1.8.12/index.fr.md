---
title: "NocoBase v1.8.12 : Corrections de bugs"
description: "Notes de version de la v1.8.12"
---

### 🎉 Nouvelles fonctionnalités

- **[client]** Ajout de l'option « Focus automatique » pour les composants Input, TextArea, URL et InputNumber, qui permet de focaliser automatiquement le champ de saisie lors du rendu initial de la page lorsque cette option est activée ([#7320](https://github.com/nocobase/nocobase/pull/7320)) par @zhangzhonghe

### 🐛 Corrections de bugs

- **[client]**
  - Correction de l'aperçu d'un élément de fichier sur une URL nulle ([#7315](https://github.com/nocobase/nocobase/pull/7315)) par @mytharcher

  - Ajout de l'URL complète au fichier local lors de l'aperçu ([#7314](https://github.com/nocobase/nocobase/pull/7314)) par @mytharcher

- **[utils]** Gestion incorrecte du fuseau horaire pour parseDate ([#7318](https://github.com/nocobase/nocobase/pull/7318)) par @katherinehhh

- **[undefined]** Ajout d'un nouveau plugin aux préréglages ([#7319](https://github.com/nocobase/nocobase/pull/7319)) par @mytharcher

- **[Gestionnaire de fichiers]** Correction de la permission du champ de stockage ([#7316](https://github.com/nocobase/nocobase/pull/7316)) par @mytharcher

- **[Workflow]** Correction du résultat `undefined` lors de la sortie du processeur ([#7317](https://github.com/nocobase/nocobase/pull/7317)) par @mytharcher

- **[Workflow : Nœud de calcul dynamique]** Correction d'une erreur causée par une API obsolète ([#7321](https://github.com/nocobase/nocobase/pull/7321)) par @mytharcher

- **[Workflow : Sous-flux]** Correction du flux suspendu par @mytharcher
