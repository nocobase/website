---
title: "NocoBase v1.9.7 : Corrections de bugs"
description: "Notes de version de la v1.9.7"
---

### 🐛 Corrections de bugs

- **[client]** Correction du problème où la règle de liaison du formulaire d'approbation ne fonctionnait pas ([#7858](https://github.com/nocobase/nocobase/pull/7858)) par @zhangzhonghe

- **[serveur]** Correction d'un problème en mode de séparation des services où les messages de file d'attente non abonnés ne pouvaient pas être publiés ([#7875](https://github.com/nocobase/nocobase/pull/7875)) par @mytharcher

- **[Workflow]**
  - Correction de l'erreur provoquée par l'écoute d'événements de sources de données externes inexistantes ([#7855](https://github.com/nocobase/nocobase/pull/7855)) par @mytharcher

  - Utilisation d'eventQueue au lieu du backgroundJob partagé pour empêcher la consommation incorrecte de la file partagée en mode de séparation des services ([#7871](https://github.com/nocobase/nocobase/pull/7871)) par @mytharcher

- **[Workflow : Nœud manuel]** Correction de l'espace de noms de la langue locale à utiliser pour afficher le contenu correct de la traduction ([#7877](https://github.com/nocobase/nocobase/pull/7877)) par @mytharcher

- **[Contrôle d'accès]** Problème où les extraits d'opérations d'association ne prenaient pas effet ([#7876](https://github.com/nocobase/nocobase/pull/7876)) par @2013xile

- **[Workflow : Approbation]**
  - Correction du problème où la taille de page du canal de notification de chargement n'était pas assez grande, ce qui empêchait le chargement complet de la liste par @mytharcher

  - Correction du problème où la règle de liaison du formulaire d'approbation ne fonctionnait pas par @zhangzhonghe

  - Correction du format de date sur les cartes de la liste d'approbation dans le centre des tâches pour afficher la date et l'heure complètes par @mytharcher

  - Correction d'un problème de performance survenant lors de l'interrogation de la liste des enregistrements d'approbation pendant la soumission de l'approbation par @mytharcher
