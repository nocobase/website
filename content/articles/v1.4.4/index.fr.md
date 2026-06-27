---
title: "NocoBase v1.4.4 : Corrections de bugs"
description: "Notes de version de la v1.4.4"
---

### 🐛 Corrections de bugs

- **[client]**
  - Correction du problème d'affichage des champs de sources de données externes dans le bloc tableau ([#5825](https://github.com/nocobase/nocobase/pull/5825)) par @katherinehhh

  - Correction du problème d'affichage des champs hérités dans la configuration du formulaire ([#5822](https://github.com/nocobase/nocobase/pull/5822)) par @katherinehhh

  - Correction du problème où les champs hérités n'apparaissaient pas dans la liste des champs et ne pouvaient pas être remplacés ([#5800](https://github.com/nocobase/nocobase/pull/5800)) par @katherinehhh

- **[Visualisation de données]** Correction du problème lors du formatage des champs de date avec fuseau horaire dans MySQL ([#5829](https://github.com/nocobase/nocobase/pull/5829)) par @2013xile

- **[Workflow]**
  - Correction de la transaction entre sources de données provoquant une erreur d'événement de collection ([#5818](https://github.com/nocobase/nocobase/pull/5818)) par @mytharcher

  - Correction du type de date manquant dans la configuration de planification basée sur un champ de date ([#5816](https://github.com/nocobase/nocobase/pull/5816)) par @mytharcher

- **[Champ de collection : Plusieurs à plusieurs (tableau)]** Correction du problème où la mise à jour des champs m2m de type tableau dans une collection de relations uniques ne prenait pas effet ([#5820](https://github.com/nocobase/nocobase/pull/5820)) par @2013xile

- **[Calendrier]**
  - Correction de l'erreur lors du clic sur une date vide dans le calendrier ([#5803](https://github.com/nocobase/nocobase/pull/5803)) par @katherinehhh

  - Correction du problème où la fermeture d'une fenêtre contextuelle ouverte via le 'Bloc Calendrier' fermait toutes les fenêtres contextuelles ([#5793](https://github.com/nocobase/nocobase/pull/5793)) par @zhangzhonghe

- **[Formulaires publics]** Correction du chemin de scan du code QR incorrect dans le formulaire public de la sous-application ([#5799](https://github.com/nocobase/nocobase/pull/5799)) par @katherinehhh
