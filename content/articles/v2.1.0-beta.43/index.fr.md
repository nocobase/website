---
title: "NocoBase v2.1.0-beta.43 : Mise à jour de la documentation d'intégration NocoBase pour le plugin open source"
description: "Notes de version de v2.1.0-beta.43"
---

### 🎉 Nouvelles fonctionnalités

- **[client-v2]** Ajout de `TypedVariableInput` pour que les champs de port SMTP et de mode sécurisé du plugin email v2 puissent accepter soit une constante typée, soit une variable `{{ $env.X }}`. ([#9637](https://github.com/nocobase/nocobase/pull/9637)) par @Molunerfinn

- **[Contrôle d'accès]** Migration des pages de paramètres Utilisateurs et Rôles & Permissions vers la v2. ([#9619](https://github.com/nocobase/nocobase/pull/9619)) par @jiannx

### 🚀 Améliorations

- **[undefined]** Mise à jour de la documentation Embed NocoBase pour le plugin open source ([#9642](https://github.com/nocobase/nocobase/pull/9642)) par @zhangzhonghe
Référence : [Embed NocoBase](https://docs.nocobase.com/en/integration/embed/)
- **[client]** Amélioration de la prise en charge de l'autocomplétion pour certaines fonctions RunJS intégrées. ([#9481](https://github.com/nocobase/nocobase/pull/9481)) par @gchust

- **[cli]** Amélioration des instructions d'initialisation et de mise à jour automatique ([#9633](https://github.com/nocobase/nocobase/pull/9633)) par @chenos

### 🐛 Corrections de bugs

- **[client]**
  - Correction du problème où les blocs pouvaient être incorrectement marqués comme supprimés après un rafraîchissement de la page ([#9662](https://github.com/nocobase/nocobase/pull/9662)) par @zhangzhonghe

  - Correction du comportement incorrect des règles de liaison des actions d'enregistrement dans le bloc tableau. ([#9652](https://github.com/nocobase/nocobase/pull/9652)) par @gchust

  - (règle de liaison) Correction du problème où les champs devenaient en lecture seule lorsqu'ils étaient affichés après avoir été masqués ([#9649](https://github.com/nocobase/nocobase/pull/9649)) par @katherinehhh

- **[cli]** Correction du modèle nginx pour servir les ressources `.mjs` avec le type MIME JavaScript. ([#9626](https://github.com/nocobase/nocobase/pull/9626)) par @mytharcher

- **[base de données]** Correction d'un problème où l'importation de valeurs de mot de passe numériques pouvait échouer ([#9635](https://github.com/nocobase/nocobase/pull/9635)) par @2013xile

- **[moteur de workflow]**
  - Correction d'un problème où la fenêtre contextuelle affichait des données d'interface utilisateur obsolètes après avoir basculé l'interrupteur du mode de configuration de l'interface utilisateur. ([#9525](https://github.com/nocobase/nocobase/pull/9525)) par @gchust

  - Correction du problème où la recherche de champ était effacée lors du survol des champs d'association ([#9646](https://github.com/nocobase/nocobase/pull/9646)) par @zhangzhonghe

- **[client-v2]** Préservation des valeurs des champs d'affectation ([#9640](https://github.com/nocobase/nocobase/pull/9640)) par @katherinehhh

- **[Gestionnaire de fichiers]** Correction de la validation du chemin de stockage des fichiers locaux pour empêcher les chemins non sécurisés de s'échapper de la racine de stockage configurée. ([#9628](https://github.com/nocobase/nocobase/pull/9628)) par @mytharcher

- **[Bloc : Gantt]** Amélioration du placement des infobulles du diagramme de Gantt pour éviter de couvrir les barres de tâches et alignement cohérent des étiquettes de tâches à l'intérieur et à l'extérieur des barres ([#9638](https://github.com/nocobase/nocobase/pull/9638)) par @jiannx

- **[Contrôle d'accès]** Correction des permissions incomplètes lors de la première connexion lorsque le rôle unifié est le rôle par défaut ([#9632](https://github.com/nocobase/nocobase/pull/9632)) par @2013xile

- **[Paramètres de licence]** Correction du blocage prolongé de la page des paramètres de licence lorsque la vérification de connexion pkg est lente ou inaccessible ([#9650](https://github.com/nocobase/nocobase/pull/9650)) par @hongboji

- **[Workflow : JavaScript]** Clarification que le mode de prise en charge du module JavaScript du workflow n'est pas sûr et ne constitue pas une limite de permission ([#9629](https://github.com/nocobase/nocobase/pull/9629)) par @mytharcher
Référence : [Workflow JavaScript](docs/docs/en/workflow/nodes/javascript.md)
- **[Politique de mot de passe]** Correction d'un problème où la validation de la politique de mot de passe pouvait échouer pour les valeurs de mot de passe numériques par @2013xile
