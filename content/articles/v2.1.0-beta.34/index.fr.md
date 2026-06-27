---
title: "NocoBase v2.1.0-beta.34 : Ajout du support client-v2 pour le plugin Kanban"
description: "Notes de version de v2.1.0-beta.34"
---

### 🎉 Nouvelles fonctionnalités

- **[Bloc : Kanban]** Ajout du support client-v2 pour le plugin Kanban ([#9475](https://github.com/nocobase/nocobase/pull/9475)) par @jiannx

### 🚀 Améliorations

- **[cli]** Amélioration de l'expérience d'invite de commande NocoBase CLI en migrant les workflows de configuration et de gestion vers Inquirer, et correction des problèmes liés à l'installation, aux compétences et à l'exécution Docker. ([#9452](https://github.com/nocobase/nocobase/pull/9452)) par @chenos

- **[Employés IA]** Invite en cas de nom de table en double lors de l'enregistrement dans la base vectorielle ([#9497](https://github.com/nocobase/nocobase/pull/9497)) par @cgyrock

- **[Gestionnaire de notifications]** Modification de la stratégie de file d'attente pour optimiser les performances d'envoi ([#9407](https://github.com/nocobase/nocobase/pull/9407)) par @mytharcher

- **[Workflow : Événement d'action personnalisée]** Migration des plugins block-workbench et workflow-custom-action-trigger vers le client v2, y compris leurs modèles d'action et le flux du scanner QR. ([#9494](https://github.com/nocobase/nocobase/pull/9494)) par @jiannx

- **[Authentification]** Implémentation de la page de paramètres Authenticators dans client-v2 et livraison de primitives client-v2 réutilisables (tableau, saisie de variable, formulaire). ([#9457](https://github.com/nocobase/nocobase/pull/9457)) par @Molunerfinn

- **[IA : Base de connaissances]** Invite en cas de nom de table en double lors de l'enregistrement dans la base vectorielle par @cgyrock

- **[Auth : SAML 2.0]** Ajout des entrées client-v2 pour les plugins d'authentification CAS et SAML afin qu'ils fonctionnent avec la page de connexion v2 et les paramètres Authenticators. par @Molunerfinn

### 🐛 Corrections de bugs

- **[client-v2]**
  - Correction du chargement de la route v2 du plugin Kanban qui échouait car les dépendances dnd-kit n'étaient pas fournies par le client. ([#9516](https://github.com/nocobase/nocobase/pull/9516)) par @jiannx

  - Le composant Table v2 partagé affiche désormais le sélecteur de taille de page par défaut, comme en v1. ([#9512](https://github.com/nocobase/nocobase/pull/9512)) par @Molunerfinn

- **[client]**
  - Correction d'un problème où les valeurs des champs JS dans les sous-formulaires n'étaient pas correctement définies lors de la soumission du formulaire. ([#9496](https://github.com/nocobase/nocobase/pull/9496)) par @gchust

  - Correction d'un problème où les variables d'enregistrement de la fenêtre contextuelle actuelle ne pouvaient pas être résolues dans les flux d'événements des boutons d'action. ([#9495](https://github.com/nocobase/nocobase/pull/9495)) par @gchust

- **[moteur de flux]** Correction d'un message d'erreur incorrect dans la console du navigateur. ([#9502](https://github.com/nocobase/nocobase/pull/9502)) par @gchust

- **[Employés IA]**
  - Correction d'un problème où les permissions du rôle d'opérateur n'étaient pas prises en compte dans les nœuds d'employés IA ([#9513](https://github.com/nocobase/nocobase/pull/9513)) par @cgyrock

  - Correction des erreurs de lecture des fichiers OSS des employés IA ([#9493](https://github.com/nocobase/nocobase/pull/9493)) par @cgyrock

- **[Documentation API]** Correction de la documentation de l'API des collections afin que les paramètres de requête n'interfèrent plus entre eux ([#9442](https://github.com/nocobase/nocobase/pull/9442)) par @jiannx

- **[Source de données : Principale]** Correction du problème où les options de champ étaient écrites dans le schéma après la synchronisation des champs ([#9505](https://github.com/nocobase/nocobase/pull/9505)) par @2013xile

- **[Workflow : JavaScript]** Correction du chargement du package d'exécution QuickJS du workflow JavaScript dans les builds de production. ([#9503](https://github.com/nocobase/nocobase/pull/9503)) par @mytharcher

- **[Client WEB]** Nettoyage des données des blocs après la suppression des menus. ([#9459](https://github.com/nocobase/nocobase/pull/9459)) par @gchust

- **[Action : Importer des enregistrements]** Correction du problème où l'enregistrement importé sur les champs de type date affichait une date incorrecte ([#9463](https://github.com/nocobase/nocobase/pull/9463)) par @mytharcher

- **[Action : Importer des enregistrements Pro]** Correction de la gestion du fuseau horaire pour les importations xlsx Pro par @mytharcher

- **[Auth : SAML 2.0]** Correction du scintillement de l'interface de l'application provoqué par l'intercepteur de redirection automatique SAML et de l'ouverture en double des tiroirs à chaque navigation. par @Molunerfinn

- **[Action : Exporter des enregistrements Pro]** Correction du problème où une erreur était levée lors de l'exportation d'une pièce jointe depuis un champ d'URL de pièce jointe par @mytharcher
