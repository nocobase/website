---
title: "NocoBase v2.0.55 : Alerte en cas de nom de table en double lors de l'enregistrement dans la base de données vectorielle"
description: "Notes de version de la v2.0.55"
---

### 🚀 Améliorations

- **[Employés IA]** Alerte en cas de nom de table en double lors de l'enregistrement dans la base vectorielle ([#9497](https://github.com/nocobase/nocobase/pull/9497)) par @cgyrock

- **[IA : Base de connaissances]** Alerte en cas de nom de table en double lors de l'enregistrement dans la base vectorielle par @cgyrock

### 🐛 Corrections de bugs

- **[client]**
  - Correction d'un problème où les variables d'enregistrement de la fenêtre contextuelle actuelle ne pouvaient pas être résolues dans les flux d'événements des boutons d'action. ([#9495](https://github.com/nocobase/nocobase/pull/9495)) par @gchust

  - Correction d'un problème où les valeurs des champs JS dans les sous-formulaires n'étaient pas correctement définies lors de la soumission du formulaire. ([#9496](https://github.com/nocobase/nocobase/pull/9496)) par @gchust

- **[Gestionnaire de fichiers]** Correction des téléchargements `tx-cos` du gestionnaire de fichiers qui ne comportaient pas les métadonnées de taille de fichier. ([#9499](https://github.com/nocobase/nocobase/pull/9499)) par @mytharcher

- **[Source de données : Principale]** Correction du problème où les options de champ sont écrites dans le schéma après la synchronisation des champs ([#9505](https://github.com/nocobase/nocobase/pull/9505)) par @2013xile

- **[Client WEB]** Nettoyage des données des blocs après la suppression des menus. ([#9459](https://github.com/nocobase/nocobase/pull/9459)) par @gchust

- **[Employés IA]** Correction des erreurs de lecture des fichiers OSS des employés IA ([#9493](https://github.com/nocobase/nocobase/pull/9493)) par @cgyrock

- **[Action : Importer des enregistrements]** Correction du problème où l'enregistrement importé sur des champs de type date affichait une date erronée ([#9463](https://github.com/nocobase/nocobase/pull/9463)) par @mytharcher

- **[Action : Exporter des enregistrements Pro]** Correction du problème où une erreur était générée lors de l'exportation d'une pièce jointe depuis un champ d'URL de pièce jointe par @mytharcher

- **[Action : Importer des enregistrements Pro]** Correction de la gestion du fuseau horaire pour les importations xlsx Pro par @mytharcher
