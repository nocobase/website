---
title: "NocoBase v2.1.0-alpha.38 : Correction d'un problème où les variables d'enregistrement de la fenêtre contextuelle actuelle ne pouvaient pas être résolues dans les flux d'événements des boutons d'action"
description: "Notes de version de v2.1.0-alpha.38"
---

### 🐛 Corrections de bugs

- **[client]**
  - Correction d'un problème où les variables d'enregistrement de la fenêtre contextuelle actuelle ne pouvaient pas être résolues dans les flux d'événements des boutons d'action. ([#9495](https://github.com/nocobase/nocobase/pull/9495)) par @gchust

  - Correction d'un problème où les valeurs des champs JS dans les sous-formulaires n'étaient pas correctement définies lors de la soumission du formulaire. ([#9496](https://github.com/nocobase/nocobase/pull/9496)) par @gchust

- **[moteur de flux]** Correction d'un message d'erreur incorrect dans la console du navigateur. ([#9502](https://github.com/nocobase/nocobase/pull/9502)) par @gchust

- **[Workflow : JavaScript]** Correction du chargement du package runtime QuickJS du workflow JavaScript dans les builds de production. ([#9503](https://github.com/nocobase/nocobase/pull/9503)) par @mytharcher

- **[Action : Importer des enregistrements]** Correction du problème où la date affichée pour les enregistrements importés sur des champs de type date était incorrecte ([#9463](https://github.com/nocobase/nocobase/pull/9463)) par @mytharcher

- **[Action : Importer des enregistrements Pro]** Correction de la gestion du fuseau horaire pour les imports xlsx Pro par @mytharcher

- **[Action : Exporter des enregistrements Pro]** Correction du problème où une erreur était levée lors de l'exportation d'une pièce jointe depuis un champ d'URL de pièce jointe par @mytharcher
