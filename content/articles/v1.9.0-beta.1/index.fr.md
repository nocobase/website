---
title: "NocoBase v1.9.0-beta.1 : Ajout d'une file d'attente d'événements pour traiter les messages en file d'attente"
description: "Notes de version de v1.9.0-beta.1"
---

### 🎉 Nouvelles fonctionnalités

- **[serveur]** Ajout d'une file d'attente d'événements pour traiter les messages en file d'attente ([#6819](https://github.com/nocobase/nocobase/pull/6819)) par @mytharcher

### 🚀 Améliorations

- **[Workflow]** Déplacement des composants communs vers le plugin de base ([#7140](https://github.com/nocobase/nocobase/pull/7140)) par @mytharcher

### 🐛 Corrections de bugs

- **[client]**
  - Après une modification de champ, les portées de données dépendant de ce champ doivent automatiquement effacer les valeurs sélectionnées ([#7161](https://github.com/nocobase/nocobase/pull/7161)) par @zhangzhonghe

  - Correction du problème où le réglage de la largeur des colonnes du tableau était inefficace ([#7158](https://github.com/nocobase/nocobase/pull/7158)) par @zhangzhonghe

  - Correction du problème d'erreur avec les formulaires de filtre dans la fenêtre contextuelle du bouton Dupliquer ([#7154](https://github.com/nocobase/nocobase/pull/7154)) par @zhangzhonghe

  - Correction d'une erreur survenant lors de l'enregistrement d'une relation un-à-un dans un champ de configuration. ([#7153](https://github.com/nocobase/nocobase/pull/7153)) par @aaaaaajie

- **[non défini]** Correction de e2e.yml ([#7160](https://github.com/nocobase/nocobase/pull/7160)) par @mytharcher

- **[Calendrier]** Définition du premier jour de la semaine par défaut sur 'lundi' dans le bloc calendrier ([#7171](https://github.com/nocobase/nocobase/pull/7171)) par @katherinehhh

- **[Workflow]** Correction du problème où plusieurs balayages vers la gauche étaient nécessaires pour revenir à la page précédente sur les appareils mobiles ([#7165](https://github.com/nocobase/nocobase/pull/7165)) par @zhangzhonghe

- **[Gestionnaire de fichiers]**
  - Correction d'une erreur de construction due à un package ESM ([#7169](https://github.com/nocobase/nocobase/pull/7169)) par @mytharcher

  - Correction de la détection du type MIME ([#7164](https://github.com/nocobase/nocobase/pull/7164)) par @mytharcher

- **[Workflow : Nœud manuel]** Correction d'une importation incorrecte de variable ([#7156](https://github.com/nocobase/nocobase/pull/7156)) par @mytharcher

- **[Formulaires publics]** Correction du problème où le champ Date uniquement ne parvenait pas à sélectionner une date dans le formulaire public. ([#7168](https://github.com/nocobase/nocobase/pull/7168)) par @katherinehhh

- **[Workflow : Approbation]**
  - Suppression de la transaction de correction de schéma en raison d'un délai d'attente par @mytharcher

  - Correction du problème où les associations n'étaient pas chargées après un retrait par @mytharcher

  - Correction d'une erreur levée lors de la suppression d'une approbation par @mytharcher

  - Correction de la mise à jour des associations lors de la soumission par @mytharcher
