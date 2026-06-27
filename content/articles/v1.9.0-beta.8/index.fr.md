---
title: "NocoBase v1.9.0-beta.8 : Ajout de la prise en charge de la personnalisation des couleurs du menu latéral"
description: "Notes de version de v1.9.0-beta.8"
---

### 🚀 Améliorations

- **[auth]** Prise en charge de l'utilisation du point (`.`) dans les noms d'utilisateur ([#7504](https://github.com/nocobase/nocobase/pull/7504)) par @2013xile

- **[client]** Ajout de la prise en charge de la localisation pour les infobulles et les titres d'éléments de groupe ([#7485](https://github.com/nocobase/nocobase/pull/7485)) par @katherinehhh

- **[Workflow : Nœud manuel]** Prise en charge de la visualisation et de la reprise des tâches manuelles en attente dans les workflows désactivés ([#7493](https://github.com/nocobase/nocobase/pull/7493)) par @mytharcher

- **[Calendrier]** Prise en charge de l'affichage de la correspondance locale pour les en-têtes de calendrier ([#7508](https://github.com/nocobase/nocobase/pull/7508)) par @katherinehhh

- **[Éditeur de thème]** Ajout de la prise en charge de la personnalisation de la couleur du menu latéral ([#7483](https://github.com/nocobase/nocobase/pull/7483)) par @duannyuuu

- **[Adaptateur de file d'attente Redis]** Utilisation du journal système standard pour l'adaptateur de file d'attente de messages Redis par @mytharcher

### 🐛 Corrections de bugs

- **[client]**
  - Correction du problème où la fenêtre contextuelle de configuration de l'icône du bouton était masquée/chevauchée ([#7506](https://github.com/nocobase/nocobase/pull/7506)) par @zhangzhonghe

  - Correction du problème où la fenêtre contextuelle de configuration de l'icône du menu était masquée ([#7515](https://github.com/nocobase/nocobase/pull/7515)) par @zhangzhonghe

  - Correction du problème où le composant Popover était masqué/chevauché ([#7491](https://github.com/nocobase/nocobase/pull/7491)) par @zhangzhonghe

- **[Notification : Message dans l'application]**
  - Correction du problème d'analyse incorrecte des liens de notification ([#7509](https://github.com/nocobase/nocobase/pull/7509)) par @mytharcher

  - Correction du problème où les messages récents ne s'affichaient pas lors de l'ouverture de la fenêtre contextuelle de notification ([#7514](https://github.com/nocobase/nocobase/pull/7514)) par @mytharcher

- **[Workflow]**
  - Correction d'une erreur potentielle liée à la mise en cache des journaux de workflow ([#7490](https://github.com/nocobase/nocobase/pull/7490)) par @mytharcher

  - Correction du problème où une logique d'abonnement incorrecte sur la file d'attente des tâches en arrière-plan dans le workflow entraînait un traitement incorrect du message d'exécution ([#7507](https://github.com/nocobase/nocobase/pull/7507)) par @mytharcher

- **[Source de données : API REST]** Correction des règles de validation des URL de l'API REST par @katherinehhh

- **[Chiffrement des requêtes HTTP]** Correction du problème où les paramètres de requête ne prenaient pas en charge le type natif URLSearchParams par @mytharcher

- **[Impression de modèles]** Prise en charge du champ chinaRegions par @jiannx

- **[Workflow : Approbation]**
  - Correction du problème où les champs de formule dans le formulaire d'approbation ne se mettaient pas à jour automatiquement par @mytharcher

  - Correction du problème où une erreur se produisait lors de la suppression de données d'une source de données externe par @mytharcher
