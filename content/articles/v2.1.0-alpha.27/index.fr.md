---
title: "NocoBase v2.1.0-alpha.27 : les employés IA peuvent rechercher la documentation groupée avec des commandes Bash"
description: "Notes de version de v2.1.0-alpha.27"
---

### 🎉 Nouvelles fonctionnalités

- **[cli]** Ajout d'une commande de publication dans l'API ([#9308](https://github.com/nocobase/nocobase/pull/9308)) par @Andrew1989Y

- **[non défini]** Ajout de la documentation en indonésien et en vietnamien. ([#9303](https://github.com/nocobase/nocobase/pull/9303)) par @Molunerfinn

- **[serveur]** Les employés IA peuvent rechercher la documentation groupée avec des commandes Bash ([#9269](https://github.com/nocobase/nocobase/pull/9269)) par @2013xile

- **[Employés IA]** Le fournisseur LLM prend désormais en charge la plateforme Xiaomi MIMO ([#9315](https://github.com/nocobase/nocobase/pull/9315)) par @cgyrock

- **[Gestionnaire de migration]** Ajout de quelques API pour nocobase cli par @Andrew1989Y

- **[Gestionnaire de sauvegarde]** Ajout de quelques API pour nocobase cli par @Andrew1989Y

### 🚀 Améliorations

- **[moteur de flux]** Amélioration du comportement de glisser-déposer des blocs sur les pages v2 ([#9264](https://github.com/nocobase/nocobase/pull/9264)) par @zhangzhonghe

- **[non défini]**
  - Alignement de la documentation en espagnol, portugais, russe et allemand sur la source anglaise. ([#9299](https://github.com/nocobase/nocobase/pull/9299)) par @Molunerfinn

  - Synchronisation de la documentation française avec la source chinoise. ([#9291](https://github.com/nocobase/nocobase/pull/9291)) par @Molunerfinn

- **[Employés IA]**
  - Amélioration des outils d'édition RunJS de Nathan et réduction du décalage lors des longues conversations IA ([#9311](https://github.com/nocobase/nocobase/pull/9311)) par @2013xile

  - Ajustement de la catégorie des employés IA ([#9274](https://github.com/nocobase/nocobase/pull/9274)) par @cgyrock

- **[Bloc : Kanban]**
  - Réduction de la largeur par défaut des colonnes Kanban. ([#9306](https://github.com/nocobase/nocobase/pull/9306)) par @jiannx

  - Amélioration des paramètres de création de blocs Calendrier et Kanban. ([#9294](https://github.com/nocobase/nocobase/pull/9294)) par @jiannx

- **[Workflow : Approbation]** Marquer le mode d'affichage des associations chargées depuis la base de données comme hérité par @mytharcher

### 🐛 Corrections de bugs

- **[non défini]**
  - Correction du workflow de dépendance et de construction afin que les échecs de checkout des plugins pro autonomes cassent le CI au lieu d'ignorer silencieusement la couverture de construction. ([#9324](https://github.com/nocobase/nocobase/pull/9324)) par @Molunerfinn

  - Correction des fichiers de traduction gonflés et alignement de la structure de documentation multilingue. ([#9305](https://github.com/nocobase/nocobase/pull/9305)) par @Molunerfinn

- **[client-v2]** Correction du problème où `RemoteSelect` ne s'affichait pas dans la configuration de liaison de workflow ([#9314](https://github.com/nocobase/nocobase/pull/9314)) par @mytharcher

- **[moteur de flux]** Correction d'un problème où les champs cachés du système pouvaient être sélectionnés dans les variables liées aux formulaires. ([#9302](https://github.com/nocobase/nocobase/pull/9302)) par @gchust

- **[ia]** Correction du champ de catégorie manquant lors de l'enregistrement d'un employé IA ([#9300](https://github.com/nocobase/nocobase/pull/9300)) par @cgyrock

- **[client]**
  - Correction d'un problème où les cellules de champ JS dans les blocs de tableau v2 pouvaient apparaître vides après un filtrage ou un rafraîchissement des données du tableau. ([#9285](https://github.com/nocobase/nocobase/pull/9285)) par @jiannx

  - Correction du problème où les champs du formulaire de filtre disparaissaient après la réouverture d'un sélecteur d'enregistrement contextuel ([#9211](https://github.com/nocobase/nocobase/pull/9211)) par @zhangzhonghe

  - Conservation des valeurs nulles pour les dépendances de variables de portée de données vides dans les formulaires v2. ([#9287](https://github.com/nocobase/nocobase/pull/9287)) par @jiannx

  - Réexécution du rendu des colonnes JS lorsque les données de ligne changent ([#9282](https://github.com/nocobase/nocobase/pull/9282)) par @jiannx

- **[base de données]** Correction d'un problème où les filtres de date/heure des sources de données externes SQL Server pouvaient échouer ([#9272](https://github.com/nocobase/nocobase/pull/9272)) par @2013xile

- **[Employés IA]**
  - Correction du problème où la liste des employés IA du bouton d'action affichait les employés développeurs ([#9320](https://github.com/nocobase/nocobase/pull/9320)) par @cgyrock

  - Correction de l'erreur d'intégration deepSeek V4 des employés IA ([#9275](https://github.com/nocobase/nocobase/pull/9275)) par @cgyrock

- **[Bloc : Gantt]** Ajout d'un paramètre de bloc Gantt pour permettre le glisser-déposer afin de reprogrammer. ([#9301](https://github.com/nocobase/nocobase/pull/9301)) par @jiannx

- **[Bloc : Arbre]** Correction de l'affichage anormal des nœuds de bloc de filtre ([#9260](https://github.com/nocobase/nocobase/pull/9260)) par @jiannx

- **[Action : Importer des enregistrements]** Correction du problème où l'index de ligne échouée lors de l'importation d'enregistrements n'était pas correct ([#9277](https://github.com/nocobase/nocobase/pull/9277)) par @mytharcher

- **[Bloc : Kanban]** Correction de l'affichage répété de la couche flottante de configuration de champ ([#9271](https://github.com/nocobase/nocobase/pull/9271)) par @jiannx

- **[Action : Exporter des enregistrements Pro]** Correction du problème où le mode automatique ne fonctionnait pas par @mytharcher

- **[Gestionnaire de migration]** Correction de `migration:create` renvoyant `taskId` à partir de l'enregistrement de tâche asynchrone. par @Andrew1989Y

- **[Workflow : Approbation]**
  - Correction du timing d'exécution de l'approbation afin que `latestExecutionId` soit synchronisé après la validation de l'approbation par @mytharcher

  - Correction d'une erreur de type par @mytharcher
