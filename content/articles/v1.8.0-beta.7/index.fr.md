---
title: "NocoBase v1.8.0-beta.7 : Prise en charge de la copie en un clic du contenu des champs de texte"
description: "Notes de version de v1.8.0-beta.7"
---

### 🎉 Nouvelles fonctionnalités

- **[Copie de texte]** Prise en charge de la copie en un clic du contenu des champs de texte ([#6954](https://github.com/nocobase/nocobase/pull/6954)) par @zhangzhonghe

### 🐛 Corrections de bugs

- **[serveur]** Impossible de lire les propriétés de undefined (lecture de 'setMaaintainingMessage') ([#7064](https://github.com/nocobase/nocobase/pull/7064)) par @chenos

- **[client]**
  - Le sélecteur de champ d'association n'efface pas les données sélectionnées après soumission ([#7067](https://github.com/nocobase/nocobase/pull/7067)) par @katherinehhh

  - Après la création du champ de relation inverse, l'option "Créer un champ de relation inverse dans la table de données cible" dans les paramètres du champ d'association n'était pas cochée. ([#6914](https://github.com/nocobase/nocobase/pull/6914)) par @aaaaaajie

- **[Contrôle d'accès]** Correction d'un problème où l'application bloquait l'entrée lorsqu'aucun rôle par défaut n'existait ([#7059](https://github.com/nocobase/nocobase/pull/7059)) par @aaaaaajie

- **[Workflow : Nœud de boucle]** Correction de l'exécution de la branche de boucle lorsque la condition n'est pas satisfaite ([#7063](https://github.com/nocobase/nocobase/pull/7063)) par @mytharcher

- **[Gestionnaire de sources de données]** Les modifications de portée prennent désormais effet immédiatement pour tous les rôles concernés. ([#7065](https://github.com/nocobase/nocobase/pull/7065)) par @aaaaaajie

- **[Workflow : Événement d'action personnalisée]** Correction de la variable d'URL de redirection non analysée par @mytharcher

- **[Workflow : Approbation]**
  - Correction de la variable de déclencheur lors du filtrage par type par @mytharcher

  - Correction des statistiques de tâches non mises à jour lorsque l'exécution est annulée par @mytharcher
