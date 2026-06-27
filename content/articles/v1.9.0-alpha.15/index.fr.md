---
title: "NocoBase v1.9.0-alpha.15 : Utilisation du journal système standard pour la file d'attente de messages"
description: "Notes de version de v1.9.0-alpha.15"
---

### 🚀 Améliorations

- **[auth]** Prise en charge de l'utilisation du point (`.`) dans les noms d'utilisateur ([#7504](https://github.com/nocobase/nocobase/pull/7504)) par @2013xile
- **[server]** Utilisation du journal système standard pour la file d'attente des messages ([#7480](https://github.com/nocobase/nocobase/pull/7480)) par @mytharcher
- **[snowflake-id]** Modification des identifiants des tables système avec clés primaires auto-incrémentées mais sans identifiants uniques en identifiants de type Snowflake 53 bits ([#7465](https://github.com/nocobase/nocobase/pull/7465)) par @2013xile
- **[Calendrier]** Prise en charge de l'affichage de la correspondance locale pour les en-têtes de calendrier ([#7508](https://github.com/nocobase/nocobase/pull/7508)) par @katherinehhh
- **[Workflow : Nœud manuel]** Prise en charge de la visualisation et de la reprise des tâches manuelles en attente dans les workflows désactivés ([#7493](https://github.com/nocobase/nocobase/pull/7493)) par @mytharcher
- **[Éditeur de thème]** Ajout de la prise en charge de la personnalisation de la couleur du menu latéral ([#7483](https://github.com/nocobase/nocobase/pull/7483)) par @duannyuuu
- **[Adaptateur de file d'attente Redis]** Utilisation du journal système standard pour l'adaptateur de file d'attente des messages Redis par @mytharcher

### 🐛 Corrections de bugs

- **[client]**

  - Correction du problème où la fenêtre contextuelle de configuration de l'icône du bouton était masquée/chevauchée ([#7506](https://github.com/nocobase/nocobase/pull/7506)) par @zhangzhonghe
  - Correction du problème où le composant Popover était chevauché/masqué ([#7491](https://github.com/nocobase/nocobase/pull/7491)) par @zhangzhonghe
  - Les champs readonly select/multiselect/date/richtext restaient modifiables sur le formulaire public ([#7484](https://github.com/nocobase/nocobase/pull/7484)) par @katherinehhh
- **[Workflow]**

  - Correction du problème où une logique d'abonnement incorrecte sur la file d'attente des tâches en arrière-plan du workflow entraînait un traitement incorrect du message d'exécution ([#7507](https://github.com/nocobase/nocobase/pull/7507)) par @mytharcher
  - Correction d'une erreur potentielle liée à la mise en cache des logs du workflow ([#7490](https://github.com/nocobase/nocobase/pull/7490)) par @mytharcher
- **[Notification : Message dans l'application]** Correction du problème d'analyse incorrecte des liens de notification ([#7509](https://github.com/nocobase/nocobase/pull/7509)) par @mytharcher
- **[Source de données : API REST]** Correction des règles de validation d'URL de l'API REST par @katherinehhh
- **[Chiffrement des requêtes HTTP]** Correction du problème où les paramètres de requête ne prenaient pas en charge le type natif URLSearchParams par @mytharcher
- **[Impression de modèle]** Prise en charge du champ chinaRegions par @jiannx
- **[Gestionnaire d'emails]** Correction du problème d'objet indésirable par @jiannx
