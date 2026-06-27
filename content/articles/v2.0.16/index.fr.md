---
title: "NocoBase v2.0.16 : Correction de l'affichage des champs connectables lors de la liaison de blocs de données sous des sources de données externes"
description: "Notes de version de la v2.0.16"
---

### 🐛 Corrections de bugs

- **[client]**
  - Correction de l'affichage des champs connectables lors de la liaison de blocs de données sous des sources de données externes ([#8848](https://github.com/nocobase/nocobase/pull/8848)) par @zhangzhonghe

  - Correction de la hauteur du bloc tableau qui était invalide ([#8842](https://github.com/nocobase/nocobase/pull/8842)) par @jiannx

  - Correction du problème où l'ajout d'un bloc de données ou l'actualisation de la page déclenchait un double rafraîchissement. ([#8851](https://github.com/nocobase/nocobase/pull/8851)) par @gchust

- **[Modèles d'interface utilisateur]** Correction des erreurs survenues lors de l'utilisation du modèle de bloc de formulaire d'édition et du modèle de bloc de détail. ([#8859](https://github.com/nocobase/nocobase/pull/8859)) par @gchust

- **[Brouillons de formulaire]** Correction du problème où les données du brouillon de formulaire étaient perdues lorsque la fenêtre contextuelle était ouverte plusieurs fois. ([#8858](https://github.com/nocobase/nocobase/pull/8858)) par @gchust

- **[Localisation]** Les entrées non trouvées ne seront pas soumises dans l'état non éditable de la page. ([#8841](https://github.com/nocobase/nocobase/pull/8841)) par @jiannx

- **[Action : Importer des enregistrements Pro]** Correction du problème où il était impossible d'effectuer des sélections multiples pour les champs en double dans la configuration d'importation. par @jiannx
