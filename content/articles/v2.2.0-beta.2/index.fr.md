---
title: "NocoBase v2.2.0-beta.2 : Ajout d'un formulaire de configuration de stockage vectoriel externe pour les bases de connaissances IA"
description: "Notes de version de v2.2.0-beta.2"
---

### 🎉 Nouvelles fonctionnalités

- **[Employés IA]** Ajout d'un formulaire de configuration de stockage vectoriel externe pour les bases de connaissances IA. ([#9723](https://github.com/nocobase/nocobase/pull/9723)) par @cgyrock
- **[IA : Base de connaissances]** Ajout d'un formulaire de configuration de stockage vectoriel externe pour les bases de connaissances IA. par @cgyrock
- **[Gestionnaire d'emails]** Migration du client du gestionnaire d'emails vers la v2. par @jiannx

### 🚀 Améliorations

- **[cli]**

  - Optimisation des vérifications de compatibilité pour différents formats de numéros de version. ([#9763](https://github.com/nocobase/nocobase/pull/9763)) par @chenos
  - Ajout de la prise en charge de la mise à jour des compétences vers une version spécifiée. ([#9760](https://github.com/nocobase/nocobase/pull/9760)) par @chenos
  - Amélioration du libellé des invites de configuration d'initialisation. ([#9750](https://github.com/nocobase/nocobase/pull/9750)) par @chenos
- **[non défini]**

  - Ajout d'un scénario de conversation de contrôle de version à la page d'aperçu du constructeur IA. ([#9748](https://github.com/nocobase/nocobase/pull/9748)) par @Molunerfinn
    Référence : [Démarrage rapide du constructeur IA](https://docs.nocobase.com/en/ai-builder)
  - Amélioration de la documentation sur le contrôle de version avec des notes sur l'enregistrement automatique des versions dans le constructeur IA. ([#9745](https://github.com/nocobase/nocobase/pull/9745)) par @cgyrock
    Référence : [Contrôle de version](docs/docs/fr/ops-management/version-control/index.md)
- **[Workflow]** Amélioration de l'expérience d'édition des métadonnées de workflow en prenant en charge l'édition des descriptions dans la fenêtre contextuelle de détails et en remplissant automatiquement les métadonnées du workflow source lors de la duplication des workflows. ([#9766](https://github.com/nocobase/nocobase/pull/9766)) par @mytharcher
- **[Action : Importer des enregistrements]** Amélioration des boîtes de dialogue de détails d'erreur d'importation et de tâche asynchrone afin que les longs messages d'erreur puissent être entièrement visualisés sans casser la mise en page. ([#9746](https://github.com/nocobase/nocobase/pull/9746)) par @katherinehhh
- **[Outil de test de traduction]** Ajout d'une page de paramètres client-v2 pour l'outil de test de traduction. ([#9744](https://github.com/nocobase/nocobase/pull/9744)) par @jiannx
- **[Action : Importer des enregistrements Pro]** Amélioration des boîtes de dialogue d'importation afin que les longs messages d'erreur puissent être entièrement visualisés, et que le mode de traitement puisse être sélectionné directement depuis le menu des paramètres v2. par @katherinehhh

### 🐛 Corrections de bugs

- **[client]** Correction du problème où les champs dans les sous-formulaires horizontaux étaient trop étroits pour afficher les données. ([#9755](https://github.com/nocobase/nocobase/pull/9755)) par @zhangzhonghe
- **[client-v2]** Correction du problème où les pages v2 pouvaient continuer à charger après la connexion. ([#9738](https://github.com/nocobase/nocobase/pull/9738)) par @zhangzhonghe
- **[cli]** Ajout de la détection de la version de Node.js pour l'environnement d'exécution nb. ([#9749](https://github.com/nocobase/nocobase/pull/9749)) par @chenos
- **[Action : Importer des enregistrements]** Modification du stockage des fichiers d'importation téléchargés vers le stockage sur disque pour réduire la pression mémoire lors de l'importation de grandes données. ([#9739](https://github.com/nocobase/nocobase/pull/9739)) par @mytharcher
- **[Gestionnaire de tâches asynchrones]** Correction des identifiants de requête incorrects dans les journaux des workers de tâches asynchrones. ([#9686](https://github.com/nocobase/nocobase/pull/9686)) par @2013xile
- **[Workflow]**

  - Correction de la gestion des délais d'attente des workflows afin que les exécutions abandonnées et leurs tâches en attente puissent être mises à jour de manière atomique. ([#9768](https://github.com/nocobase/nocobase/pull/9768)) par @mytharcher
  - Correction du problème où le champ "Dernière mise à jour par" du workflow n'était pas mis à jour après les modifications des nœuds du workflow. ([#9769](https://github.com/nocobase/nocobase/pull/9769)) par @mytharcher
- **[Gestionnaire de sources de données]**

  - Correction du tiroir d'édition de champ vide causé par des rendus répétés sur la page "Configurer les champs" de la source de données externe v1. ([#9759](https://github.com/nocobase/nocobase/pull/9759)) par @katherinehhh
  - Correction du problème où la suppression de la catégorie de collection actuelle dans le gestionnaire de sources de données v1 pouvait laisser l'onglet "Toutes les collections" vide. ([#9757](https://github.com/nocobase/nocobase/pull/9757)) par @katherinehhh
- **[Gestionnaire de sauvegarde]** Correction d'un problème de sécurité où des noms de schéma PostgreSQL non sécurisés pouvaient être acceptés lors de la restauration de sauvegarde. ([#9758](https://github.com/nocobase/nocobase/pull/9758)) par @2013xile
- **[Workflow : Nœud SQL]** Correction du problème où la migration des variables de modèle héritées du workflow SQL était ignorée pour certains utilisateurs de version bêta. ([#9762](https://github.com/nocobase/nocobase/pull/9762)) par @mytharcher
- **[Bloc : Kanban]** Correction de la prise en charge des URL pour le calendrier et autres fenêtres contextuelles. ([#9751](https://github.com/nocobase/nocobase/pull/9751)) par @jiannx
- **[Employés IA]**

  - Correction du problème où les pièces jointes collées dans la boîte de dialogue de l'employé IA ne pouvaient pas être supprimées. ([#9753](https://github.com/nocobase/nocobase/pull/9753)) par @cgyrock
  - Correction de la perte de configuration des messages dans les nœuds LLM du workflow. ([#9743](https://github.com/nocobase/nocobase/pull/9743)) par @cgyrock
- **[Gestionnaire de fichiers]** Correction du texte de police chinois/CID manquant dans certains aperçus PDF après le passage à pdf.js. ([#9737](https://github.com/nocobase/nocobase/pull/9737)) par @mytharcher
- **[Documentation API]** Correction de l'échec de construction du fichier de déclaration du plugin de documentation API. ([#9752](https://github.com/nocobase/nocobase/pull/9752)) par @katherinehhh
- **[Action : Importer des enregistrements Pro]** Évitement de l'analyse des fichiers volumineux dans le nœud de requête avant que l'importation Pro ne crée une tâche asynchrone. par @mytharcher
- **[Contrôle de version]** Ajustement de la position de l'entrée de raccourci supérieure du contrôle de version afin qu'elle apparaisse à côté de l'éditeur d'interface utilisateur dans les mises en page d'administration héritées et v2. par @cgyrock
- **[Workflow : Approbation]** Correction du problème où les données associées n'étaient pas affichées dans les formulaires d'approbation v2. par @zhangzhonghe
