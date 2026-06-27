---
title: "NocoBase v2.1.0-alpha.17 : refonte de la CLI NocoBase"
description: "Notes de version de v2.1.0-alpha.17"
---

### 🎉 Nouvelles fonctionnalités

- **[cli]** Refonte du CLI NocoBase ([#9122](https://github.com/nocobase/nocobase/pull/9122)) par @chenos

- **[Employés IA]** Amélioration de la capacité des employés IA à analyser les documents téléchargés ([#9126](https://github.com/nocobase/nocobase/pull/9126)) par @cgyrock

### 🚀 Améliorations

- **[non défini]**
  - Synchronisation des documentations traduites sur les variables d'environnement et le mode cluster avec les dernières mises à jour chinoises. ([#9115](https://github.com/nocobase/nocobase/pull/9115)) par @mytharcher

  - Documentation : ajout de la traduction arabe pour les pages d'introduction de démarrage ([#9044](https://github.com/nocobase/nocobase/pull/9044)) par @gaston98765

  - Ajout de la traduction arabe pour la page d'accueil de la documentation ([#9043](https://github.com/nocobase/nocobase/pull/9043)) par @gaston98765

- **[logger]** Ajout des informations `referer` dans les journaux de requêtes ([#9110](https://github.com/nocobase/nocobase/pull/9110)) par @2013xile

- **[client]** Ajout d'un interrupteur de validation obligatoire pour les formulaires ([#9060](https://github.com/nocobase/nocobase/pull/9060)) par @jiannx

- **[Workflow : Nœud manuel]** Utilisation de `simplePagination` sur les collections liées aux tâches du workflow pour de meilleures performances de liste ([#9117](https://github.com/nocobase/nocobase/pull/9117)) par @mytharcher

- **[Employés IA]** Après la sélection d'un bloc par l'employé IA, remplir la pièce jointe du formulaire dans la zone de téléchargement ([#9127](https://github.com/nocobase/nocobase/pull/9127)) par @cgyrock

- **[Workflow : Approbation]** Utilisation de `simplePagination` sur les collections `approvals` et `approvalRecords` pour de meilleures performances de liste par @mytharcher

### 🐛 Corrections de bugs

- **[client]**
  - Correction des options facultatives vides pour les champs à sélection unique dans la configuration des règles de champ ([#9119](https://github.com/nocobase/nocobase/pull/9119)) par @jiannx

  - Correction d'un problème où le composant du champ de liaison était incorrect dans les paramètres de valeur de champ. ([#9063](https://github.com/nocobase/nocobase/pull/9063)) par @gchust

  - Correction des paramètres de valeur par défaut incorrects pour le sous-tableau dans le formulaire. ([#9087](https://github.com/nocobase/nocobase/pull/9087)) par @gchust

- **[utils]** Ajout d'un contrôle de sécurité pour l'envoi de requêtes HTTP serveur, afin d'éviter d'éventuelles SSRF ([#9079](https://github.com/nocobase/nocobase/pull/9079)) par @mytharcher
Référence : [Variables d'environnement](https://docs.nocobase.com/get-started/installation/env)
- **[Workflow : Nœud de boucle]** Correction des validations des nœuds de workflow ([#9111](https://github.com/nocobase/nocobase/pull/9111)) par @mytharcher

- **[Notification : Message in-app]** Correction du problème de fonctionnement incorrect du composant de sélection du destinataire ([#9123](https://github.com/nocobase/nocobase/pull/9123)) par @mytharcher

- **[IdP : OAuth]** Correction de l'accès OAuth pour les requêtes API standard ([#9120](https://github.com/nocobase/nocobase/pull/9120)) par @2013xile

- **[Employés IA]**
  - Correction du tri des requêtes d'agrégation abandonné par l'ACL ([#9099](https://github.com/nocobase/nocobase/pull/9099)) par @2013xile

  - Correction du problème où les paramètres baseURL du service LLM google-gen-ai ne prenaient pas effet ([#9107](https://github.com/nocobase/nocobase/pull/9107)) par @cgyrock

- **[Gestionnaire d'emails]** Suppression de l'invite de fermeture du formulaire après l'envoi réussi de l'email par @jiannx
