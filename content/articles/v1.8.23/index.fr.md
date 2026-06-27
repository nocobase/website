---
title: "NocoBase v1.8.23 : Optimisation de la requête de comptage de l'API de liste"
description: "Notes de version de la v1.8.23"
---

### 🚀 Améliorations

- **[Base de données]** Optimisation de la requête de comptage de l'API de liste pour réduire la consommation de ressources. ([#7453](https://github.com/nocobase/nocobase/pull/7453)) par @aaaaaajie

- **[Notification : Message dans l'application]** Possibilité de configurer le délai de fermeture automatique des notifications de messages dans l'application ([#7472](https://github.com/nocobase/nocobase/pull/7472)) par @mytharcher

- **[Workflow : nœud de notification]** Prise en charge du test du nœud de notification ([#7470](https://github.com/nocobase/nocobase/pull/7470)) par @mytharcher

### 🐛 Corrections de bugs

- **[client]**
  - Erreur de rendu du champ d'association lors du passage au composant tag dans le bloc de formulaire d'édition ([#7468](https://github.com/nocobase/nocobase/pull/7468)) par @katherinehhh

  - Problème de limite de temps lorsque la date sélectionnée est égale à minDate ([#7461](https://github.com/nocobase/nocobase/pull/7461)) par @katherinehhh

- **[Mobile]** Le champ de date mobile sans fuseau horaire n'affiche pas correctement la date et l'heure ([#7473](https://github.com/nocobase/nocobase/pull/7473)) par @katherinehhh

- **[Formulaires publics]** La valeur par défaut du champ de formulaire public n'est pas appliquée lors de l'utilisation de variables ([#7467](https://github.com/nocobase/nocobase/pull/7467)) par @katherinehhh

- **[Action : Importer des enregistrements]** Correction du numéro de ligne incorrect affiché lors de l'importation de données en double ([#7440](https://github.com/nocobase/nocobase/pull/7440)) par @aaaaaajie

- **[Collection : Arborescence]** Suppression des événements de base de données liés à la collection après la suppression d'une collection arborescente ([#7459](https://github.com/nocobase/nocobase/pull/7459)) par @2013xile

- **[Workflow : Événement d'action personnalisée]** Correction du problème où les événements d'action personnalisée ne pouvaient pas être exécutés manuellement immédiatement après l'initialisation par @mytharcher

- **[Workflow : Sous-processus]** Correction du problème de reprise et d'exécution multiple des sous-processus par @mytharcher

- **[Workflow : Approbation]** Pour les utilisateurs qui ne sont pas l'approbateur actuel, le bouton d'affichage correspondant dans le tableau du flux de processus ne sera pas affiché par @mytharcher
