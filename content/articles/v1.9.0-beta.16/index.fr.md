---
title: "NocoBase v1.9.0-beta.16 : Prise en charge du mode de déclenchement « Avant l'enregistrement des données »"
description: "Notes de version de la v1.9.0-beta.16"
---

### 🎉 Nouvelles fonctionnalités

- **[Workflow : Approbation]** Prise en charge du mode de déclenchement "Avant l'enregistrement des données" par @mytharcher

### 🚀 Améliorations

- **[serveur]** Ajout des logs de passerelle ([#7683](https://github.com/nocobase/nocobase/pull/7683)) par @2013xile

- **[Workflow : nœud de notification]** Ajout de l'option `ignoreFail` pour le nœud de notification, permettant de poursuivre le workflow en cas d'échec d'envoi de la notification ([#7736](https://github.com/nocobase/nocobase/pull/7736)) par @mytharcher

### 🐛 Corrections de bugs

- **[client]**
  - Correction de la configuration des règles de liaison par scan de code QR dans le panneau d'actions ([#7693](https://github.com/nocobase/nocobase/pull/7693)) par @katherinehhh

  - Correction de l'échec des règles de liaison du bloc iframe dans une modale ([#7694](https://github.com/nocobase/nocobase/pull/7694)) par @katherinehhh

- **[base de données]** Ignorer la synchronisation des valeurs par défaut pour les colonnes JSON MySQL ([#7696](https://github.com/nocobase/nocobase/pull/7696)) par @2013xile

- **[Workflow]**
  - Correction du problème où, en mode de répartition des services, une gestion incorrecte de la file d'attente en mémoire empêchait l'exécution de certains workflows ([#7692](https://github.com/nocobase/nocobase/pull/7692)) par @mytharcher

  - Correction de la valeur du statut d'exécution lors de la création avec report ([#7721](https://github.com/nocobase/nocobase/pull/7721)) par @mytharcher

  - Correction du problème où, après la suppression d'un nœud de début de branche, la clé du premier nœud conservé dans la branche était incorrectement modifiée en une nouvelle valeur ([#7665](https://github.com/nocobase/nocobase/pull/7665)) par @mytharcher

- **[Contrôle d'accès]** Correction de l'ordre des middlewares de `resourceManager` ([#7728](https://github.com/nocobase/nocobase/pull/7728)) par @2013xile

- **[Gestionnaire de fichiers]** Correction du problème d'upload des fichiers `.msg` ([#7662](https://github.com/nocobase/nocobase/pull/7662)) par @mytharcher

- **[Workflow : nœud manuel]** Correction du problème où les tâches manuelles disparaissaient après la désactivation du workflow ([#7687](https://github.com/nocobase/nocobase/pull/7687)) par @mytharcher

- **[Champ de collection : divisions administratives de la Chine]** Échec de l'importation des données lorsque la ville et le district portent le même nom ([#7673](https://github.com/nocobase/nocobase/pull/7673)) par @2013xile

- **[Workflow : Approbation]**
  - Correction du problème de traduction du texte de statut dans les notifications d'achèvement d'approbation, en utilisant la langue par défaut du système lorsque l'utilisateur n'a pas défini de préférence linguistique par @mytharcher

  - Correction des locales par @mytharcher
