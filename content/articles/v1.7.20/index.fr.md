---
title: "NocoBase v1.7.20 : Corrections de bugs"
description: "Notes de version de la v1.7.20"
---

### 🐛 Corrections de bugs

- **[client]**
  - Après des modifications de champ, les portées de données qui dépendent de ce champ doivent automatiquement effacer les valeurs sélectionnées ([#7161](https://github.com/nocobase/nocobase/pull/7161)) par @zhangzhonghe

  - Correction du problème où le réglage de la largeur des colonnes du tableau était inefficace ([#7158](https://github.com/nocobase/nocobase/pull/7158)) par @zhangzhonghe

  - Correction du problème d'erreur avec les formulaires de filtre dans la fenêtre contextuelle du bouton Dupliquer ([#7154](https://github.com/nocobase/nocobase/pull/7154)) par @zhangzhonghe

  - Correction d'une erreur survenue lors de l'enregistrement d'une relation un-à-un dans un champ de configuration. ([#7153](https://github.com/nocobase/nocobase/pull/7153)) par @aaaaaajie

- **[undefined]** Correction de e2e.yml ([#7160](https://github.com/nocobase/nocobase/pull/7160)) par @mytharcher

- **[Gestionnaire de fichiers]**
  - Correction de la détection du type MIME ([#7164](https://github.com/nocobase/nocobase/pull/7164)) par @mytharcher

  - Correction d'une erreur de build due à un package ESM ([#7169](https://github.com/nocobase/nocobase/pull/7169)) par @mytharcher

- **[Formulaires publics]** Correction du problème où le champ Date uniquement ne parvenait pas à sélectionner une date dans le formulaire public. ([#7168](https://github.com/nocobase/nocobase/pull/7168)) par @katherinehhh

- **[Workflow]** Correction du problème où plusieurs balayages vers la gauche étaient nécessaires pour revenir à la page précédente sur les appareils mobiles ([#7165](https://github.com/nocobase/nocobase/pull/7165)) par @zhangzhonghe

- **[Visualisation de données]** Problème de pagination des tableaux ([#7151](https://github.com/nocobase/nocobase/pull/7151)) par @2013xile

- **[Workflow : Approbation]**
  - Correction des associations non chargées après un retrait par @mytharcher

  - Suppression de la transaction de correction du schéma en raison d'un délai d'attente par @mytharcher

  - Correction de l'erreur levée lors de la suppression d'une approbation par @mytharcher

  - Correction de la mise à jour de l'association lors de la soumission par @mytharcher
