---
title: "NocoBase v1.7.19 : Prise en charge de l'ajout d'options de pool depuis l'environnement"
description: "Notes de version de v1.7.19"
---

### 🚀 Améliorations

- **[Base de données]** Prise en charge de l'ajout d'options de pool via les variables d'environnement ([#7133](https://github.com/nocobase/nocobase/pull/7133)) par @mytharcher

- **[Workflow]**
  - Amélioration des performances de chargement de la liste des exécutions en excluant le champ JSON ([#7138](https://github.com/nocobase/nocobase/pull/7138)) par @mytharcher

  - Ajout d'une API de journalisation pour les tests de nœuds ([#7129](https://github.com/nocobase/nocobase/pull/7129)) par @mytharcher

- **[Gestionnaire multi-applications]** Ajout du support des filtres dans la gestion multi-applications ([#7124](https://github.com/nocobase/nocobase/pull/7124)) par @katherinehhh

- **[Workflow : Approbation]** Passage du temps en absolu dans la chronologie par @mytharcher

### 🐛 Corrections de bugs

- **[client]**
  - La définition du displayName d'un champ dans une vue connectée était sans effet ([#7130](https://github.com/nocobase/nocobase/pull/7130)) par @aaaaaajie

  - Problème de style de couleur d'arrière-plan dans le sous-tableau d'un bloc de détail ([#7144](https://github.com/nocobase/nocobase/pull/7144)) par @katherinehhh

  - Configuration UI du nœud manuel du workflow : les règles de liaison ne peuvent pas sélectionner les variables du formulaire courant ([#7125](https://github.com/nocobase/nocobase/pull/7125)) par @zhangzhonghe

  - La valeur par défaut d'un champ d'association écrase les données existantes dans le sous-tableau ([#7120](https://github.com/nocobase/nocobase/pull/7120)) par @katherinehhh

  - Le markdown ne reflétait pas les modifications en temps réel lors de la référence aux variables $nForm ([#7147](https://github.com/nocobase/nocobase/pull/7147)) par @katherinehhh

  - Tolérance aux pannes pour les paramètres basés sur 'x-acl-action' ([#7128](https://github.com/nocobase/nocobase/pull/7128)) par @mytharcher

- **[utils]** Problème de filtrage sur DateOnly ou Datetime (sans fuseau horaire) avec la variable Jour exact ([#7113](https://github.com/nocobase/nocobase/pull/7113)) par @katherinehhh

- **[Workflow]** Correction d'une erreur provoquée par une importation cyclique ([#7134](https://github.com/nocobase/nocobase/pull/7134)) par @mytharcher

- **[Politique de mot de passe]** Prise en charge du verrouillage permanent des comptes utilisateurs par @2013xile

- **[Workflow : Sous-flux]** Correction d'un problème en mode cluster par @mytharcher

- **[Workflow : Approbation]**
  - Suppression des champs non filtrables du filtre par @mytharcher

  - Ajout des paramètres de mise en page du formulaire par @mytharcher
