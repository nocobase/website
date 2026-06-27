---
title: "NocoBase v1.6.0-beta.16 : le champ heure prend en charge le format horaire"
description: "Notes de version de v1.6.0-beta.16"
---

### 🎉 Nouvelles fonctionnalités

- **[client]** Le champ horaire prend désormais en charge le format de l'heure ([#6329](https://github.com/nocobase/nocobase/pull/6329)) par @katherinehhh

### 🚀 Améliorations

- **[server]** Mise à niveau de koa vers 2.15.4 ; mise à niveau de @koa/cors vers 5.0.0 ([#6334](https://github.com/nocobase/nocobase/pull/6334)) par @2013xile

- **[Workflow]** Chargement paresseux du résultat des jobs pour de meilleures performances ([#6344](https://github.com/nocobase/nocobase/pull/6344)) par @mytharcher

### 🐛 Corrections de bugs

- **[auth]** Éviter le renouvellement du jeton lors de l'autorisation WebSocket. ([#6342](https://github.com/nocobase/nocobase/pull/6342)) par @sheldon66

- **[client]**
  - Les pages avec un favicon personnalisé affichent brièvement le favicon NocoBase pendant le chargement ([#6337](https://github.com/nocobase/nocobase/pull/6337)) par @zhangzhonghe

  - Le bouton « ajouter nouveau » apparaît au survol en mode lecture seule du champ d'association ([#6322](https://github.com/nocobase/nocobase/pull/6322)) par @katherinehhh

- **[devtools]** S'assurer que l'en-tête X-Forwarded-For n'est défini que si req.ip n'est pas indéfini. ([#6320](https://github.com/nocobase/nocobase/pull/6320)) par @sheldon66

- **[Bloc : Carte]** Les paramètres de configuration du champ cartographique sont manquants/non visibles ([#6336](https://github.com/nocobase/nocobase/pull/6336)) par @zhangzhonghe

- **[Mobile]** Erreur de page : Impossible de lire les propriétés de null (lecture de 'match') ([#6335](https://github.com/nocobase/nocobase/pull/6335)) par @zhangzhonghe

- **[Utilisateurs]** Une interface utilisateur d'erreur s'affiche brièvement lors du premier chargement du tableau de gestion des permissions utilisateur ([#6324](https://github.com/nocobase/nocobase/pull/6324)) par @zhangzhonghe

- **[Bloc : Panneau d'actions]** Le réglage de la hauteur du panneau d'actions est invalide ([#6321](https://github.com/nocobase/nocobase/pull/6321)) par @zhangzhonghe

- **[Action : Importer des enregistrements Pro]** La détection des enregistrements en double du bouton d'importation du bloc d'association n'affiche aucune donnée dans la liste déroulante des champs par @katherinehhh

- **[Action : Exporter des enregistrements Pro]** Supprimer l'option « ajouter un bloc » dans les paramètres du bouton d'exportation des pièces jointes par @katherinehhh

- **[Workflow : Événement d'action personnalisée]** Correction de la migration pour les boutons hérités liés à un workflow d'action personnalisée par @mytharcher

- **[Marque personnalisée]** Les pages avec un favicon personnalisé affichent brièvement le favicon NocoBase pendant le chargement par @zhangzhonghe

- **[Impression de modèle]** La restauration depuis le local échouait lorsque les plugins d'impression de modèle d'action et de gestionnaire de sauvegarde étaient tous deux activés par @gchust

- **[Workflow : Approbation]**
  - Correction de l'erreur provoquée par `.toJSON()` par @mytharcher

  - Correction de la migration non exécutée en raison du numéro de version par @mytharcher

  - Correction de la migration pour les blocs hérités par @mytharcher
