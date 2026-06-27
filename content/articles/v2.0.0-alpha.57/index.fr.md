---
title: "NocoBase v2.0.0-alpha.57 : Ajout de nouvelles variables système dans le workflow, notamment `instanceId` et `genSnowflakeId`"
description: "Notes de version de v2.0.0-alpha.57"
---

### 🎉 Nouvelles fonctionnalités

- **[Workflow]** Ajout de nouvelles variables système dans le workflow, incluant `instanceId` et `genSnowflakeId` ([#8223](https://github.com/nocobase/nocobase/pull/8223)) par @mytharcher

### 🚀 Améliorations

- **[client]** Utilisation d'un select pour la configuration de la largeur de la colonne d'opération ([#8218](https://github.com/nocobase/nocobase/pull/8218)) par @katherinehhh
- **[Employés IA]** Correction du problème où l'employé IA ne répondait pas lors de la première soumission de modification<br/>Suppression de l'employé IA intégré inutile « Avery Form Assistant »<br/>Ajout de permissions de rôle initiales par défaut pour les employés IA intégrés<br/>Amélioration de la gestion des erreurs et du comportement de sortie des employés IA<br/>Ajout de la prise en charge de l'accès aux variables de contexte modal par l'IA<br/>Ajout de la prise en charge des sources de données externes pour l'IA<br/>Correction du problème de troncature incorrecte des conversations lorsque l'IA traite de grands volumes de données ([#8191](https://github.com/nocobase/nocobase/pull/8191)) par @heziqiang
- **[Workflow]**

  - Ajout de l'instance de workflow d'origine à l'API de duplication ([#8225](https://github.com/nocobase/nocobase/pull/8225)) par @mytharcher
  - Amélioration de la description du champ `changed` dans l'événement de collection ([#8216](https://github.com/nocobase/nocobase/pull/8216)) par @mytharcher
- **[Gestionnaire de tâches asynchrones]** Amélioration de la gestion des erreurs lors des tâches de nettoyage en ajoutant des mécanismes de capture d'exceptions pour éviter les plantages de l'application ([#8215](https://github.com/nocobase/nocobase/pull/8215)) par @mytharcher
- **[Bloc : Panneau d'action]** Amélioration de l'affichage des blocs, actions et champs masqués en mode configuration ([#8174](https://github.com/nocobase/nocobase/pull/8174)) par @katherinehhh
- **[Modèles d'interface]** Ajout du plugin de modèles d'interface, offrant la possibilité de réutiliser des modèles de blocs et des modèles de popups. ([#8163](https://github.com/nocobase/nocobase/pull/8163)) par @gchust
- **[Action : Exporter les enregistrements Pro]** L'action d'importation Pro et d'exportation Pro prend désormais en charge le contrôle des permissions par @katherinehhh
- **[Workflow : Approbation]** Mise à jour de `approval.data` vers la dernière version de l'enregistrement en cours d'approbation à la fin de l'exécution, pour correspondre au mode d'affichage « Dernier » par @mytharcher

### 🐛 Corrections de bugs

- **[moteur-de-workflow]**

  - Correction d'un problème de vérification des permissions pour l'ajout d'enregistrements enfants dans un tableau arborescent ([#8240](https://github.com/nocobase/nocobase/pull/8240)) par @katherinehhh
  - Correction d'un problème où certaines variables liées aux enregistrements de popup de bloc étaient affichées incorrectement. ([#8060](https://github.com/nocobase/nocobase/pull/8060)) par @gchust
  - Correction du problème où les actions ou onglets ajoutés après avoir glissé des actions ou des onglets ne s'affichaient pas. ([#8224](https://github.com/nocobase/nocobase/pull/8224)) par @gchust
  - Problème de vérification des permissions dans les sources de données externes ([#8221](https://github.com/nocobase/nocobase/pull/8221)) par @katherinehhh
  - Correction du problème où les actions des sources de données externes étaient masquées malgré une permission accordée ([#8217](https://github.com/nocobase/nocobase/pull/8217)) par @katherinehhh
- **[client]**

  - Gestion des règles de liaison vides pour éviter les erreurs ([#8239](https://github.com/nocobase/nocobase/pull/8239)) par @zhangzhonghe
  - Correction du problème où la colonne d'opération du bloc tableau ne pouvait pas être supprimée. ([#8230](https://github.com/nocobase/nocobase/pull/8230)) par @gchust
  - Correction du problème où l'exécution en prévisualisation écrivait la sortie JSX compilée dans stepParams, entraînant la réécriture du code source sauvegardé. ([#8171](https://github.com/nocobase/nocobase/pull/8171)) par @gchust
  - Correction d'une erreur de téléchargement de pièce jointe S3 Pro et amélioration de l'aperçu des fichiers ([#8211](https://github.com/nocobase/nocobase/pull/8211)) par @katherinehhh
- **[cli]** license-kit est compatible avec le cas où DB_PASSWORD est vide ([#8220](https://github.com/nocobase/nocobase/pull/8220)) par @jiannx
- **[base de données]** Correction d'une incohérence de requête de champ de date entre les sources de données principales et externes ([#8181](https://github.com/nocobase/nocobase/pull/8181)) par @cgyrock
- **[Champ de collection : Séquence]** Correction d'une erreur lorsque la commande de réparation du champ-séquence rencontre une collection inexistante dans l'environnement actuel. ([#8251](https://github.com/nocobase/nocobase/pull/8251)) par @cgyrock
- **[Workflow : Nœud manuel]** Correction du problème où une erreur était levée lors de l'annulation de l'exécution d'un workflow supprimé ([#8258](https://github.com/nocobase/nocobase/pull/8258)) par @mytharcher
- **[Modèles d'interface]** Correction d'une erreur où l'ouverture d'un popup de champ d'association utilisait incorrectement un modèle de popup de champ non associé. ([#8233](https://github.com/nocobase/nocobase/pull/8233)) par @gchust
- **[Départements]** Correction d'un problème où la recherche agrégée ne pouvait pas localiser les utilisateurs ([#8222](https://github.com/nocobase/nocobase/pull/8222)) par @2013xile
- **[Champ de collection : Plusieurs-à-plusieurs (tableau)]** Correction d'un problème où les champs plusieurs-à-plusieurs (tableau) ne pouvaient pas être créés lorsque le type de clé cible est Snowflake ID (53 bits) ([#8226](https://github.com/nocobase/nocobase/pull/8226)) par @2013xile
- **[Paramètres de licence]** Correction de l'affichage anormal du plugin sous licence ([#8214](https://github.com/nocobase/nocobase/pull/8214)) par @jiannx
- **[Action : Importer des enregistrements]** Correction du problème où l'index de ligne dans le message d'erreur était toujours 1 lorsqu'une erreur se produisait dans l'action d'importation ([#8244](https://github.com/nocobase/nocobase/pull/8244)) par @mytharcher
- **[Impression de modèle]** Correction du problème où la demande d'impression de modèle ne fonctionnait pas avec les sources de données externes par @katherinehhh
- **[Workflow : Approbation]**

  - Correction de la restauration en double d'une même transaction par @mytharcher
  - Correction du problème où l'approbation créait une association vers un nouvel enregistrement par @mytharcher
  - Correction du problème où l'approbation créait une association plusieurs-à-plusieurs vers de nouveaux enregistrements par @mytharcher
