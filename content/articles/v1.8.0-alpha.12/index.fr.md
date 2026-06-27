---
title: "NocoBase v1.8.0-alpha.12 : Prise en charge de l'ajout d'options de pool depuis l'environnement"
description: "Notes de version de v1.8.0-alpha.12"
---

### 🚀 Améliorations

- **[base de données]** Prise en charge de l'ajout d'options de pool via l'environnement ([#7133](https://github.com/nocobase/nocobase/pull/7133)) par @mytharcher

- **[Workflow]**
  - Amélioration des performances de chargement de la liste des exécutions en excluant le champ JSON ([#7138](https://github.com/nocobase/nocobase/pull/7138)) par @mytharcher

  - Ajout d'une API de journalisation pour les tests de nœuds ([#7129](https://github.com/nocobase/nocobase/pull/7129)) par @mytharcher

- **[Workflow : Approbation]** Passage du temps en absolu dans la chronologie par @mytharcher

### 🐛 Corrections de bugs

- **[utils]** Problème de filtrage sur DateOnly ou Datetime (sans fuseau horaire) avec la variable Jour exact ([#7113](https://github.com/nocobase/nocobase/pull/7113)) par @katherinehhh

- **[cli]**
  - Erreur indéfinie lors du téléchargement des plugins ([#7143](https://github.com/nocobase/nocobase/pull/7143)) par @jiannx

  - Ajustement de la copie de la licence lors de l'installation du plugin ([#7135](https://github.com/nocobase/nocobase/pull/7135)) par @jiannx

- **[client]**
  - Tolérance aux pannes pour les paramètres basés sur 'x-acl-action' ([#7128](https://github.com/nocobase/nocobase/pull/7128)) par @mytharcher

  - Le paramétrage du champ displayName dans la vue connectée était sans effet ([#7130](https://github.com/nocobase/nocobase/pull/7130)) par @aaaaaajie

  - Configuration de l'interface utilisateur du nœud manuel du workflow : les règles de liaison ne peuvent pas sélectionner les variables du formulaire actuel ([#7125](https://github.com/nocobase/nocobase/pull/7125)) par @zhangzhonghe

- **[Workflow]** Correction d'une erreur déclenchée par une importation cyclique ([#7134](https://github.com/nocobase/nocobase/pull/7134)) par @mytharcher

- **[plugin-commercial]**
  - Le mode développement n'affiche pas la fenêtre contextuelle de licence par @jiannx

  - Fermeture temporaire de la fenêtre contextuelle de vérification de licence par @jiannx

  - Ajustement de la logique de vérification de licence et prise en charge de la correspondance de noms de domaine étendus par @jiannx

- **[Politique de mot de passe]** Prise en charge du verrouillage permanent des comptes utilisateurs par @2013xile

- **[Workflow : Sous-flux]** Correction d'un problème en mode cluster par @mytharcher

- **[Workflow : Approbation]**
  - Ajout des paramètres de mise en page du formulaire par @mytharcher

  - Suppression des champs non filtrables du filtre par @mytharcher
