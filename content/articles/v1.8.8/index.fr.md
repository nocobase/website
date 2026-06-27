---
title: "NocoBase v1.8.8 : Ajout du mode « Tout réglé » pour le nœud parallèle"
description: "Notes de version de la v1.8.8"
---

### 🎉 Nouvelles fonctionnalités

- **[Workflow : Nœud parallèle]** Ajout du mode « Tout réglé » pour le nœud parallèle ([#7263](https://github.com/nocobase/nocobase/pull/7263)) par @mytharcher

- **[Adaptateur de file d'attente Redis]** Ajout d'un adaptateur Redis pour la file d'attente d'événements par @mytharcher

### 🚀 Améliorations

- **[serveur]** Rendre la file d'attente mémoire concurrente disponible lorsque le traitement des éléments n'est pas complet ([#7267](https://github.com/nocobase/nocobase/pull/7267)) par @mytharcher

- **[base de données]** Active automatiquement la pagination simple lorsque le jeu de données dépasse un seuil ([#7227](https://github.com/nocobase/nocobase/pull/7227)) par @aaaaaajie

- **[Workflow : Nœud manuel]** storePopupContext prend en charge l'enregistrement du contexte par défaut ([#7264](https://github.com/nocobase/nocobase/pull/7264)) par @zhangzhonghe

- **[Adaptateur de file d'attente Redis]** Rendre la file d'attente concurrente disponible lorsque le traitement des éléments n'est pas complet pour l'adaptateur Redis par @mytharcher

### 🐛 Corrections de bugs

- **[client]**
  - Variable d'objet courante manquante dans les règles de liaison des sous-tableaux ([#7266](https://github.com/nocobase/nocobase/pull/7266)) par @katherinehhh

  - Le paramètre du champ titre du sélecteur de données est invalide ([#7251](https://github.com/nocobase/nocobase/pull/7251)) par @zhangzhonghe

  - Correction d'un problème où les champs Markdown n'étaient pas rendus correctement dans la vue détaillée. ([#7257](https://github.com/nocobase/nocobase/pull/7257)) par @aaaaaajie

  - Après les modifications de champ, les champs d'association qui dépendent de ce champ n'ont pas effacé leurs valeurs ([#7262](https://github.com/nocobase/nocobase/pull/7262)) par @zhangzhonghe

  - Problème d'affichage lorsque des variables de date obsolètes sont utilisées dans les champs de date des données historiques ([#7253](https://github.com/nocobase/nocobase/pull/7253)) par @katherinehhh

- **[base de données]**
  - Résolution d'un échec de pagination simple automatique causé par la convention de nommage des tables. ([#7256](https://github.com/nocobase/nocobase/pull/7256)) par @aaaaaajie

  - Correction d'un échec lors de l'exportation de grands jeux de données depuis PostgreSQL ([#7228](https://github.com/nocobase/nocobase/pull/7228)) par @aaaaaajie

  - Correction d'un problème où le tri par clé primaire par défaut provoque un échec de chargement de la liste lors de l'utilisation d'une source de données externe MSSQL dans un bloc de tableau. ([#7259](https://github.com/nocobase/nocobase/pull/7259)) par @aaaaaajie

- **[authentification]** Correction du problème où un `secret` vide dans la configuration de la sous-application empêche la connexion ([#7239](https://github.com/nocobase/nocobase/pull/7239)) par @2013xile

- **[Gestionnaire de sources de données]** Correction de la préservation des attributs de la source de données externe dans la configuration de la collection ([#7249](https://github.com/nocobase/nocobase/pull/7249)) par @aaaaaajie

- **[Action : Modification par lot]** Impossible d'effectuer une modification par lot et une mise à jour par lot dans le sélecteur de données ([#7250](https://github.com/nocobase/nocobase/pull/7250)) par @zhangzhonghe

- **[Workflow]** Correction d'une mauvaise version de dépendance ([#7258](https://github.com/nocobase/nocobase/pull/7258)) par @mytharcher

- **[Source de données : Oracle externe]** Correction de la préservation des attributs de la source de données externe dans la configuration de la collection par @aaaaaajie

- **[Workflow : Approbation]** L'URL du bouton Lien pointe vers une fenêtre contextuelle sur la page actuelle, mais un clic dessus affiche une erreur 404 par @zhangzhonghe

- **[Gestionnaire d'emails]** La relation entre les collections messages et labes est exceptionnelle sous MySQL par @jiannx
