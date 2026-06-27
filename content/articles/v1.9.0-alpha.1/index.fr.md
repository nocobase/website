---
title: "NocoBase v1.9.0-alpha.1 : Ajout d'une file d'attente d'événements pour traiter les messages en file d'attente"
description: "Notes de version de v1.9.0-alpha.1"
---

### 🎉 Nouvelles fonctionnalités

- **[serveur]** Ajout d'une file d'attente d'événements pour traiter les messages en file d'attente ([#6819](https://github.com/nocobase/nocobase/pull/6819)) par @mytharcher

### 🚀 Améliorations

- **[Workflow]** Déplacement des composants communs vers le plugin de base ([#7140](https://github.com/nocobase/nocobase/pull/7140)) par @mytharcher

### 🐛 Corrections de bugs

- **[client]**
  - Après des modifications de champ, les portées de données dépendant de ce champ doivent automatiquement effacer les valeurs sélectionnées ([#7161](https://github.com/nocobase/nocobase/pull/7161)) par @zhangzhonghe

  - Correction du problème où le réglage de la largeur des colonnes du tableau était inefficace ([#7158](https://github.com/nocobase/nocobase/pull/7158)) par @zhangzhonghe

  - Correction d'une erreur survenue lors de l'enregistrement d'une relation un-à-un dans un champ de configuration. ([#7153](https://github.com/nocobase/nocobase/pull/7153)) par @aaaaaajie

  - Correction du problème d'erreur avec les formulaires de filtre dans la fenêtre contextuelle du bouton Dupliquer ([#7154](https://github.com/nocobase/nocobase/pull/7154)) par @zhangzhonghe

- **[non défini]** Correction de e2e.yml ([#7160](https://github.com/nocobase/nocobase/pull/7160)) par @mytharcher

- **[Gestionnaire de fichiers]**
  - Correction d'une erreur de build due à un package ESM ([#7169](https://github.com/nocobase/nocobase/pull/7169)) par @mytharcher

  - Correction de la détection du type MIME ([#7164](https://github.com/nocobase/nocobase/pull/7164)) par @mytharcher

- **[Formulaires publics]** Correction du problème où le champ Date uniquement ne parvenait pas à sélectionner une date dans le formulaire public. ([#7168](https://github.com/nocobase/nocobase/pull/7168)) par @katherinehhh

- **[Calendrier]** Définition du premier jour de la semaine par défaut sur 'lundi' dans le bloc calendrier ([#7171](https://github.com/nocobase/nocobase/pull/7171)) par @katherinehhh

- **[Workflow : Nœud manuel]** Correction de l'importation incorrecte d'une variable ([#7156](https://github.com/nocobase/nocobase/pull/7156)) par @mytharcher

- **[Workflow]** Correction du problème où plusieurs balayages vers la gauche étaient nécessaires pour revenir à la page précédente sur les appareils mobiles ([#7165](https://github.com/nocobase/nocobase/pull/7165)) par @zhangzhonghe

- **[Workflow : Approbation]**
  - Correction de la mise à jour de l'association lors de la soumission par @mytharcher

  - Correction de l'erreur levée lors de la suppression de l'approbation par @mytharcher

  - Correction des associations non chargées après un retrait par @mytharcher

- **[Gestionnaire d'emails]**
  - Après la sélection de lignes, définir "Lu" et "Non lu" par @jiannx

  - Le contenu du sous-mail ne peut pas être filtré par @jiannx
