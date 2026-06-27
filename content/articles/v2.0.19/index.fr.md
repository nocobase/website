---
title: "NocoBase v2.0.19 : Correction du problème où l'arrêt gracieux ne vidait pas tous les événements"
description: "Notes de version de la v2.0.19"
---

### 🚀 Améliorations

- **[Workflow]** Correction du problème où l'arrêt progressif ne vidait pas tous les événements ([#8894](https://github.com/nocobase/nocobase/pull/8894)) par @mytharcher

### 🐛 Corrections de bugs

- **[Employés IA]** Correction du problème où l'URL spécifiée pour le service LLM ne prenait pas effet dans les appels du modèle d'embedding de texte. ([#8892](https://github.com/nocobase/nocobase/pull/8892)) par @cgyrock

- **[Action : Importer des enregistrements Pro]** Correction de l'événement `beforeStop` sur la sous-application qui n'était pas déclenché par @mytharcher
