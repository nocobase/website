---
title: "NocoBase v1.6.18 : Prise en charge de l'utilisation de variables pour la durée"
description: "Notes de version de la v1.6.18"
---

### 🚀 Améliorations

- **[client]**
  - Ajout d'une API de repli de type par défaut pour `Variable.Input` ([#6644](https://github.com/nocobase/nocobase/pull/6644)) par @mytharcher

  - Optimisation des invites pour les pages non configurées ([#6641](https://github.com/nocobase/nocobase/pull/6641)) par @zhangzhonghe

- **[Workflow : Nœud de délai]** Prise en charge de l'utilisation d'une variable pour la durée ([#6621](https://github.com/nocobase/nocobase/pull/6621)) par @mytharcher

- **[Workflow : Événement d'action personnalisée]** Ajout des paramètres d'actualisation pour le bouton de déclenchement du workflow par @mytharcher

### 🐛 Corrections de bugs

- **[client]**
  - Chevauchement de la description de la sous-table avec le bouton d'ajout ([#6646](https://github.com/nocobase/nocobase/pull/6646)) par @katherinehhh

  - Soulignement en pointillés causé par la disposition horizontale du formulaire dans une fenêtre modale ([#6639](https://github.com/nocobase/nocobase/pull/6639)) par @katherinehhh

- **[Stockage de fichiers : S3(Pro)]** Correction d'un `await` manquant pour l'appel suivant. par @jiannx

- **[Gestionnaire d'emails]** Correction d'un `await` manquant pour l'appel suivant. par @jiannx
