---
title: "NocoBase v2.2.0-beta.5 : Ajout des enregistrements de version de schéma pour la configuration d'environnement"
description: "Notes de version de v2.2.0-beta.5"
---

### 🚀 Améliorations

* **[cli]** Ajout des enregistrements de version de schéma pour la configuration d'environnement. ([#9782](https://github.com/nocobase/nocobase/pull/9782)) par @chenos
* **[Gestionnaire de fichiers]** Amélioration des aperçus PDF : les fichiers PDF d'origine croisée utilisent désormais l'aperçu natif du navigateur, tandis que les fichiers PDF de même origine continuent d'être rendus avec PDF.js. ([#9796](https://github.com/nocobase/nocobase/pull/9796)) par @mytharcher

### 🐛 Corrections de bugs

* **[client-v2]**
  * Correction du problème où les paramètres de flux d'événements ne pouvaient plus être modifiés après la conversion d'un bloc en modèle. ([#9585](https://github.com/nocobase/nocobase/pull/9585)) par @gchust
  * Correction du problème où les options de la liste déroulante des cases à cocher dans les formulaires de filtre v2 n'affichaient pas le texte traduit. ([#9792](https://github.com/nocobase/nocobase/pull/9792)) par @katherinehhh
  * Correction de l'affichage et des paramètres de format incorrects lorsque le champ titre d'un champ de relation de tableau v2 utilisait un champ de type heure, date ou date-heure. ([#9785](https://github.com/nocobase/nocobase/pull/9785)) par @katherinehhh
* **[Moteur de flux]** Correction des données incorrectes dans les formulaires d'enregistrement courants et les données de détail dans les popups lors de la construction IA. ([#9788](https://github.com/nocobase/nocobase/pull/9788)) par @gchust
* **[Workflow : Événement d'action personnalisée]** Correction du problème où les boutons de workflow déclenchés par le panneau d'action v2 affichaient toujours un succès et envoyaient des requêtes lorsqu'aucun workflow n'était lié. ([#9798](https://github.com/nocobase/nocobase/pull/9798)) par @mytharcher
* **[Employés IA]** Correction du problème où les employés IA ne pouvaient pas remplir correctement les données des sous-tableaux. ([#9801](https://github.com/nocobase/nocobase/pull/9801)) par @gchust
