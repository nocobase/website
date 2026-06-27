---
title: "NocoBase v2.0.38 : Amélioration de la capacité des employés IA à analyser les documents téléchargés"
description: "Notes de version de la v2.0.38"
---

### 🎉 Nouvelles fonctionnalités

- **[Employés IA]** Amélioration de la capacité des employés IA à analyser les documents téléchargés ([#9126](https://github.com/nocobase/nocobase/pull/9126)) par @cgyrock

### 🚀 Améliorations

- **[journalisation]** Ajout des informations `referer` aux journaux de requêtes ([#9110](https://github.com/nocobase/nocobase/pull/9110)) par @2013xile

- **[non défini]** Synchronisation de la documentation traduite sur les variables d'environnement et le mode cluster avec les dernières mises à jour chinoises. ([#9115](https://github.com/nocobase/nocobase/pull/9115)) par @mytharcher

- **[Employés IA]** Après la sélection d'un bloc par l'employé IA, remplir la pièce jointe du formulaire dans la zone de téléchargement ([#9127](https://github.com/nocobase/nocobase/pull/9127)) par @cgyrock

- **[Workflow : Nœud manuel]** Utilisation de `simplePagination` sur les collections liées aux tâches du workflow pour de meilleures performances de liste ([#9117](https://github.com/nocobase/nocobase/pull/9117)) par @mytharcher

- **[Workflow : Approbation]** Utilisation de `simplePagination` sur les collections `approvals` et `approvalRecords` pour de meilleures performances de liste par @mytharcher

### 🐛 Corrections de bugs

- **[client]**
  - Correction des options facultatives vides des champs à sélection unique dans la configuration des règles de champ ([#9119](https://github.com/nocobase/nocobase/pull/9119)) par @jiannx

  - Correction des paramètres de valeur par défaut incorrects pour le sous-tableau dans le formulaire. ([#9087](https://github.com/nocobase/nocobase/pull/9087)) par @gchust

- **[Notification : Message dans l'application]** Correction du problème de fonctionnement incorrect du composant de sélection du destinataire ([#9123](https://github.com/nocobase/nocobase/pull/9123)) par @mytharcher

- **[Employés IA]** Correction du problème où les paramètres baseURL du service LLM de google-gen-ai ne prenaient pas effet ([#9107](https://github.com/nocobase/nocobase/pull/9107)) par @cgyrock

- **[Gestionnaire d'emails]** Suppression de l'invite de fermeture du formulaire après l'envoi réussi de l'email par @jiannx
