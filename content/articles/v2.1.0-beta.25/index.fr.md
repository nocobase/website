---
title: "NocoBase v2.1.0-beta.25 : Ajout de quelques API pour NocoBase cli"
description: "Notes de version de v2.1.0-beta.25"
---

### 🎉 Nouvelles fonctionnalités

- **[cli]** Ajout d'une commande de publication dans l'API ([#9308](https://github.com/nocobase/nocobase/pull/9308)) par @Andrew1989Y

- **[non défini]** Ajout de la documentation en indonésien et en vietnamien. ([#9303](https://github.com/nocobase/nocobase/pull/9303)) par @Molunerfinn

- **[Employés IA]** Le fournisseur LLM prend désormais en charge la plateforme Xiaomi MIMO ([#9315](https://github.com/nocobase/nocobase/pull/9315)) par @cgyrock

- **[Gestionnaire de migration]** Ajout de quelques API pour nocobase cli par @Andrew1989Y

- **[Gestionnaire de sauvegarde]** Ajout de quelques API pour nocobase cli par @Andrew1989Y

### 🚀 Améliorations

- **[non défini]**
  - - ([#9349](https://github.com/nocobase/nocobase/pull/9349)) par @Molunerfinn

  - Alignement de la documentation en espagnol, portugais, russe et allemand avec la source anglaise. ([#9299](https://github.com/nocobase/nocobase/pull/9299)) par @Molunerfinn

  - Synchronisation de la documentation française avec la source chinoise. ([#9291](https://github.com/nocobase/nocobase/pull/9291)) par @Molunerfinn

- **[IdP : OAuth]** Les sessions OAuth utilisent désormais les mêmes paramètres d'expiration que la politique de jeton système ([#9345](https://github.com/nocobase/nocobase/pull/9345)) par @2013xile

- **[Bloc : Kanban]**
  - Réduction de la largeur par défaut des colonnes Kanban. ([#9306](https://github.com/nocobase/nocobase/pull/9306)) par @jiannx

  - Amélioration des paramètres de création de blocs Calendrier et Kanban. ([#9294](https://github.com/nocobase/nocobase/pull/9294)) par @jiannx

- **[Employés IA]** Ajustement de la catégorie des employés IA ([#9274](https://github.com/nocobase/nocobase/pull/9274)) par @cgyrock

- **[Workflow : Approbation]** Marquer le mode d'affichage des associations chargées depuis la base de données comme hérité par @mytharcher

### 🐛 Corrections de bugs

- **[non défini]**
  - Correction du workflow de dépendance et de construction afin que les échecs d'extraction des plugins pro autonomes interrompent l'IC au lieu d'ignorer silencieusement la couverture de construction. ([#9324](https://github.com/nocobase/nocobase/pull/9324)) par @Molunerfinn

  - Correction des fichiers de traduction gonflés et alignement de la structure de la documentation multilingue. ([#9305](https://github.com/nocobase/nocobase/pull/9305)) par @Molunerfinn

- **[cli]** Correction des options booléennes de l'interface en ligne de commande afin qu'elles puissent être désactivées avec des drapeaux négatifs ([#9337](https://github.com/nocobase/nocobase/pull/9337)) par @2013xile

- **[client-v2]**
  - Correction du chargement des plugins distants afin que les URL de plugin qui se terminent déjà par `.js` ne soient pas résolues en chemins `.js.js` en double. ([#9336](https://github.com/nocobase/nocobase/pull/9336)) par @Molunerfinn

  - Correction du problème où `RemoteSelect` ne s'affichait pas dans la configuration du workflow lié ([#9314](https://github.com/nocobase/nocobase/pull/9314)) par @mytharcher

- **[ia]** Correction de l'absence de configuration du champ de catégorie lors de l'enregistrement d'un employé IA ([#9300](https://github.com/nocobase/nocobase/pull/9300)) par @cgyrock

- **[moteur de flux]** Correction d'un problème où les champs cachés du système pouvaient être sélectionnés dans les variables liées aux formulaires. ([#9302](https://github.com/nocobase/nocobase/pull/9302)) par @gchust

- **[client]**
  - Correction d'un problème où les cellules de champ JS dans les blocs de tableau v2 pouvaient apparaître vides après un filtrage ou un rafraîchissement des données du tableau. ([#9285](https://github.com/nocobase/nocobase/pull/9285)) par @jiannx

  - Préservation des valeurs nulles pour les dépendances de variables de portée de données vides dans les formulaires v2. ([#9287](https://github.com/nocobase/nocobase/pull/9287)) par @jiannx

  - Correction du problème où les champs du formulaire de filtre disparaissaient après la réouverture d'un sélecteur d'enregistrement contextuel ([#9211](https://github.com/nocobase/nocobase/pull/9211)) par @zhangzhonghe

  - Réexécution du rendu des colonnes JS lorsque les données de ligne changent ([#9282](https://github.com/nocobase/nocobase/pull/9282)) par @jiannx

- **[base de données]** Correction d'un problème où les filtres de date/heure des sources de données externes SQL Server pouvaient échouer ([#9272](https://github.com/nocobase/nocobase/pull/9272)) par @2013xile

- **[Employés IA]**
  - Correction du problème d'erreurs occasionnelles lorsque l'employé IA utilise le modèle DeepSeek v4 ([#9348](https://github.com/nocobase/nocobase/pull/9348)) par @cgyrock

  - Correction du problème où le nœud d'employé IA du workflow effaçait les compétences après avoir changé d'employé IA ([#9342](https://github.com/nocobase/nocobase/pull/9342)) par @cgyrock

  - Correction du problème où la liste des employés IA du bouton d'action affichait les employés développeurs ([#9320](https://github.com/nocobase/nocobase/pull/9320)) par @cgyrock

- **[Source de données : Principale]** Empêcher le plantage lorsque les champs sont indéfinis lors du chargement de la collection ([#9174](https://github.com/nocobase/nocobase/pull/9174)) par @saraTabbane

- **[Modèles d'interface utilisateur]** Correction d'un problème où la liste des modèles contextuels ne parvenait pas à charger correctement les modèles disponibles. ([#9332](https://github.com/nocobase/nocobase/pull/9332)) par @gchust

- **[Gestionnaire de fichiers]** Amélioration de la gestion des erreurs de téléchargement des fichiers d'aperçu ([#9103](https://github.com/nocobase/nocobase/pull/9103)) par @gaston98765

- **[Bloc : Arborescence]** Correction de l'affichage anormal des nœuds du bloc de filtre ([#9260](https://github.com/nocobase/nocobase/pull/9260)) par @jiannx

- **[Bloc : Gantt]** Ajout d'un paramètre de bloc Gantt pour permettre le glisser-déposer afin de reprogrammer. ([#9301](https://github.com/nocobase/nocobase/pull/9301)) par @jiannx

- **[Bloc : Kanban]** Correction de l'affichage répété de la couche flottante de configuration des champs ([#9271](https://github.com/nocobase/nocobase/pull/9271)) par @jiannx

- **[Action : Importer des enregistrements]** Correction du problème où l'index de ligne en échec lors de l'importation d'enregistrements n'était pas correct ([#9277](https://github.com/nocobase/nocobase/pull/9277)) par @mytharcher

- **[Action : Exporter des enregistrements Pro]** Correction du problème où le mode automatique ne fonctionnait pas par @mytharcher

- **[Gestionnaire de migration]** Correction de `migration:create` renvoyant `taskId` à partir de l'enregistrement de la tâche asynchrone. par @Andrew1989Y

- **[Workflow : Approbation]**
  - Correction du problème où les paramètres de requête de filtre et autres fonctionnent désormais dans l'API de listage des workflows d'approbation disponibles par @mytharcher

  - Correction du problème où le fichier dans l'application d'origine n'était pas rechargé par @mytharcher

  - Correction d'une erreur de type par @mytharcher

  - Prise en charge de l'analyse de certaines variables client dans les actions d'approbation par @mytharcher

  - Correction du timing d'exécution de l'approbation afin que `latestExecutionId` soit synchronisé après la validation de l'approbation par @mytharcher
