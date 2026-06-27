---
title: "NocoBase v1.8.24 : le workflow permet de revenir à n'importe quel nœud du processus d'approbation"
description: "Notes de version de la v1.8.24"
---

### 🎉 Nouvelles fonctionnalités

- **[Workflow : Approbation]** Prise en charge du retour à n'importe quel nœud dans le processus d'approbation par @mytharcher

### 🚀 Améliorations

- **[serveur]** Utilisation du journal système standard pour la file d'attente de messages ([#7480](https://github.com/nocobase/nocobase/pull/7480)) par @mytharcher

- **[client]** Suppression de l'infobulle avec points de suspension dans la liste des fichiers ([#7479](https://github.com/nocobase/nocobase/pull/7479)) par @mytharcher

- **[Workflow]** Optimisation du processus de préparation du workflow pour prendre en charge l'utilisation des données de nœud préchargées ([#7476](https://github.com/nocobase/nocobase/pull/7476)) par @mytharcher

- **[Éditeur de thème]** Ajout de la prise en charge de la personnalisation de la couleur du menu latéral ([#7483](https://github.com/nocobase/nocobase/pull/7483)) par @duannyuuu

- **[Adaptateur de file d'attente Redis]** Utilisation du journal système standard pour l'adaptateur de file d'attente de messages Redis par @mytharcher

### 🐛 Corrections de bugs

- **[client]**
  - Correction du problème où le composant Popover était superposé/couvert ([#7491](https://github.com/nocobase/nocobase/pull/7491)) par @zhangzhonghe

  - Vérification incorrecte de « non vide » pour les champs numériques dans les règles de liaison ([#7477](https://github.com/nocobase/nocobase/pull/7477)) par @katherinehhh

  - Les champs readonly select/multiselect/date/richtext restaient modifiables sur le formulaire public ([#7484](https://github.com/nocobase/nocobase/pull/7484)) par @katherinehhh

- **[Workflow]** Correction d'une erreur potentielle liée à la mise en cache des journaux de workflow ([#7490](https://github.com/nocobase/nocobase/pull/7490)) par @mytharcher

- **[Chiffrement des requêtes HTTP]** Correction du problème où les paramètres de requête ne prenaient pas en charge le type natif URLSearchParams par @mytharcher

- **[Source de données : API REST]** Correction des règles de validation d'URL de l'API REST par @katherinehhh

- **[Workflow : Approbation]** Correction du problème où le texte de statut dans la notification d'achèvement d'approbation n'était pas traduit par @mytharcher
