---
title: "NocoBase v1.6.0-alpha.8 : Ajout d'une entrée globale fixe pour tous les types de tâches de workflow"
description: "Notes de version de v1.6.0-alpha.8"
---

### 🎉 Nouvelles fonctionnalités

- **[Workflow : nœud manuel]** Ajout d'une entrée globale fixe pour tous les types de tâches de workflow ([#5858](https://github.com/nocobase/nocobase/pull/5858)) par @mytharcher

- **[Politique de mot de passe]** Ajout d'un nouveau plugin : Politique de mot de passe, utilisé pour définir les règles de mot de passe et la politique de verrouillage de connexion pour tous les utilisateurs par @2013xile
Référence : [Politique de mot de passe et verrouillage utilisateur](https://docs.nocobase.com/handbook/password-policy)
### 🚀 Améliorations

- **[client]** Ajout d'un mot-clé de filtre "Sécurité" pour le gestionnaire de plugins ([#5977](https://github.com/nocobase/nocobase/pull/5977)) par @2013xile

- **[Workflow : événement d'action personnalisée]** Modification de l'API d'exécution manuelle par @mytharcher

### 🐛 Corrections de bugs

- **[Workflow]** Correction du problème où `onChange` ne fonctionnait pas dans le composant `WorkflowVariableWrapper` ([#5964](https://github.com/nocobase/nocobase/pull/5964)) par @mytharcher
