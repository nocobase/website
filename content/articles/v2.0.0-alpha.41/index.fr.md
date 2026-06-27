---
title: "NocoBase v2.0.0-alpha.41 : ajout d'un employé IA pour configurer les graphiques"
description: "Notes de version de v2.0.0-alpha.41"
---

### 🎉 Nouvelles fonctionnalités

- **[Visualisation des données]** ajout d'un employé IA pour configurer les graphiques ([#7815](https://github.com/nocobase/nocobase/pull/7815)) par @heziqiang

### 🚀 Améliorations

- **[Moteur de workflow]**
  - Prise en charge de l'écoute des événements de modification de l'arborescence des modèles de workflow dans le moteur de workflow. ([#7905](https://github.com/nocobase/nocobase/pull/7905)) par @gchust

  - Amélioration de la résolution des variables d'enregistrement courant, accélérant l'ouverture des dialogues ([#7895](https://github.com/nocobase/nocobase/pull/7895)) par @gchust

  - Optimisation de la structure API des bibliothèques tierces dans le contexte runjs et ajout du support de la bibliothèque d'icônes Antd. ([#7896](https://github.com/nocobase/nocobase/pull/7896)) par @gchust

- **[Base de données]** Refonte du plugin de chiffrement des champs pour renforcer la sécurité, avec prise en charge de la génération et de la rotation des clés d'application, et des clés de chiffrement par champ. ([#7769](https://github.com/nocobase/nocobase/pull/7769)) par @cgyrock

- **[Champ de collection : Chiffrement]** Optimisation du plugin de chiffrement des champs pour permettre la récupération des données avec des IV indépendants par @cgyrock

### 🐛 Corrections de bugs

- **[Client]**
  - Correction du problème où les blocs masqués occupaient encore de l'espace sur la page. ([#7906](https://github.com/nocobase/nocobase/pull/7906)) par @gchust

  - Correction du problème où le bouton de réinitialisation dans le bouton de filtre effaçait les conditions par défaut ([#7903](https://github.com/nocobase/nocobase/pull/7903)) par @zhangzhonghe

  - Correction d'une vérification incorrecte des permissions pour les champs de sous-formulaire dans les nouveaux formulaires ([#7902](https://github.com/nocobase/nocobase/pull/7902)) par @katherinehhh

- **[Serveur]** Correction d'un problème en mode de séparation des services où les messages de file d'attente non souscrits ne pouvaient pas être publiés ([#7875](https://github.com/nocobase/nocobase/pull/7875)) par @mytharcher

- **[Workflow]**
  - Correction de l'erreur causée par l'écoute d'événements de source de données externe inexistants ([#7855](https://github.com/nocobase/nocobase/pull/7855)) par @mytharcher

  - Utilisation d'eventQueue au lieu du backgroundJob partagé pour empêcher la consommation incorrecte de la file partagée en mode de séparation des services ([#7871](https://github.com/nocobase/nocobase/pull/7871)) par @mytharcher

- **[Workflow : Nœud manuel]** Correction de l'espace de noms de la langue à utiliser pour afficher le contenu correct de la traduction ([#7877](https://github.com/nocobase/nocobase/pull/7877)) par @mytharcher

- **[Contrôle d'accès]** Problème où les extraits d'opérations d'association ne prenaient pas effet ([#7876](https://github.com/nocobase/nocobase/pull/7876)) par @2013xile

- **[Workflow : Événement d'action personnalisée]** Correction de l'erreur causée par l'écoute d'événements de source de données externe inexistants par @mytharcher

- **[Commentaires]** Correction du problème où les commentaires cités dans un bloc de commentaires ne s'affichaient pas par @katherinehhh

- **[Modèle d'impression]** Analyse des variables dans le filtre par @jiannx

- **[Workflow : Approbation]** Correction d'un problème où des conditions de concurrence lors du traitement d'approbation simultané par plusieurs approbateurs pouvaient entraîner l'exécution multiple d'un nœud de workflow par @mytharcher
