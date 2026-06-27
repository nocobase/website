---
title: "NocoBase v2.1.0-alpha.21 : Le workflow a ajouté une instruction d'employé IA"
description: "Notes de version de v2.1.0-alpha.21"
---

### 🎉 Nouvelles fonctionnalités

- **[Bloc : Kanban]** Bloc kanban v2 ([#9142](https://github.com/nocobase/nocobase/pull/9142)) par @jiannx

- **[Employés IA]** Le workflow a ajouté une instruction pour employé IA ([#9025](https://github.com/nocobase/nocobase/pull/9025)) par @cgyrock

- **[Auth : OIDC]** L'attribut de mappage prend désormais en charge les champs personnalisés par @chenzhizdt

- **[DingTalk]** DingTalk : notifications, connexion automatique dans DingTalk et synchronisation des utilisateurs. par @chenzhizdt

### 🚀 Améliorations

- **[build]** La base de connaissances prend en charge le téléchargement par lots de fichiers via ZIP ([#9206](https://github.com/nocobase/nocobase/pull/9206)) par @cgyrock

- **[ia]** L'employé IA et la base de connaissances prennent désormais en charge des types de fichiers supplémentaires pour le téléchargement (.xlsx, .xls, .csv, .md, .json) ([#9172](https://github.com/nocobase/nocobase/pull/9172)) par @cgyrock

- **[Workflow]** Amélioration des performances de la liste d'exécution ([#9214](https://github.com/nocobase/nocobase/pull/9214)) par @mytharcher

- **[Workflow : Événement d'action personnalisée]** Ajout du contrôle ACL pour le déclenchement en mode enregistrement (unique et multiple) ([#9125](https://github.com/nocobase/nocobase/pull/9125)) par @mytharcher

- **[IA : Base de connaissances]** La base de connaissances prend en charge le téléchargement par lots de fichiers via ZIP par @cgyrock

### 🐛 Corrections de bugs

- **[gestionnaire-source-de-données]**
  - Correction de la synchronisation des champs nullables ([#9189](https://github.com/nocobase/nocobase/pull/9189)) par @2013xile

  - Correction du problème où les champs de pourcentage étaient réinitialisés en numérique lors de la resynchronisation de sources de données externes ([#9178](https://github.com/nocobase/nocobase/pull/9178)) par @jiannx

- **[client]**
  - Correction du problème où les blocs de relation contextuels et les variables d'enregistrement contextuelles utilisaient un identifiant d'enregistrement incorrect lorsque les collections utilisaient une clé unique non primaire ([#9191](https://github.com/nocobase/nocobase/pull/9191)) par @2013xile

  - Correction du problème où la valeur par défaut ne prenait pas effet après la création d'un enregistrement. ([#9185](https://github.com/nocobase/nocobase/pull/9185)) par @gchust

  - Correction du problème où le bouton Ajouter un onglet était trop proche du bord droit ([#9177](https://github.com/nocobase/nocobase/pull/9177)) par @zhangzhonghe

- **[Workflow : Nœud d'agrégation]** Correction du problème où le nœud d'agrégation ne pouvait pas être sauvegardé en raison d'une règle de validation incorrecte ([#9208](https://github.com/nocobase/nocobase/pull/9208)) par @mytharcher

- **[Calendrier]** Les actions du calendrier ne sont plus enregistrées dans d'autres blocs ([#9200](https://github.com/nocobase/nocobase/pull/9200)) par @jiannx

- **[Employés IA]**
  - Correction du problème où les employés IA ne pouvaient pas remplir les valeurs des champs de relation dans les formulaires. ([#9182](https://github.com/nocobase/nocobase/pull/9182)) par @cgyrock

  - Correction des anomalies d'enregistrement des logs dans l'instruction pour employé IA ([#9180](https://github.com/nocobase/nocobase/pull/9180)) par @cgyrock

- **[Départements]** Correction d'un problème où la synchronisation répétée des départements ne pouvait pas mettre à jour l'ordre de tri des départements ([#9173](https://github.com/nocobase/nocobase/pull/9173)) par @2013xile

- **[Workflow : JavaScript]**
  - Correction d'un problème de sécurité lié à l'exécution de scripts en mode `node:vm` ([#9084](https://github.com/nocobase/nocobase/pull/9084)) par @mytharcher

  - Correction du problème où une erreur était levée lors de la configuration du nœud JavaScript ([#9169](https://github.com/nocobase/nocobase/pull/9169)) par @mytharcher

- **[Multi-espace]** Correction de l'erreur de non-trouvaille de collection lors de la vérification des permissions d'espace par @jiannx

- **[IA : Base de connaissances]** Correction du problème où la base de données vectorielle n'était pas synchronisée lors de la suppression de documents de la base de connaissances. par @cgyrock

- **[Workflow : Approbation]** Correction de la recherche du réassignataire d'approbation pour interroger les utilisateurs au-delà des 200 premiers candidats par @zhangzhonghe

- **[WeCom]** Correction de l'ordre manquant des départements lors de la synchronisation des départements depuis WeCom par @2013xile
