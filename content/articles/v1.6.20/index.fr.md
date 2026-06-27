---
title: "NocoBase v1.6.20 : Rendre les plugins Département, URL de pièce jointe et Message de réponse de workflow gratuits"
description: "Notes de version de la v1.6.20"
---

### 🎉 Nouvelles fonctionnalités

- **[Départements]** Rendre les plugins Département, URL de pièce jointe et message de réponse de workflow gratuits ([#6663](https://github.com/nocobase/nocobase/pull/6663)) par @chenos

### 🐛 Corrections de bugs

- **[client]**
  - Le formulaire de filtre ne doit pas afficher l'invite « Modifications non enregistrées » ([#6657](https://github.com/nocobase/nocobase/pull/6657)) par @zhangzhonghe

  - L'option « autoriser plusieurs » ne fonctionne pas pour le champ de relation ([#6661](https://github.com/nocobase/nocobase/pull/6661)) par @katherinehhh

  - Dans le formulaire de filtre, lorsque le bouton de filtre est cliqué, si des champs n'ont pas passé la validation, le filtrage est tout de même déclenché ([#6659](https://github.com/nocobase/nocobase/pull/6659)) par @zhangzhonghe

  - Le passage au menu de groupe ne doit pas sauter vers une page déjà masquée dans le menu ([#6654](https://github.com/nocobase/nocobase/pull/6654)) par @zhangzhonghe

- **[Stockage de fichiers : S3(Pro)]**
  - Organiser la langue par @jiannx

  - Paramètres individuels baseurl et public, amélioration de l'UX de configuration du stockage S3 Pro par @jiannx

- **[Gestionnaire de migration]** l'option de saut de sauvegarde automatique devient invalide si la fenêtre contextuelle de variable d'environnement apparaît pendant la migration par @gchust
