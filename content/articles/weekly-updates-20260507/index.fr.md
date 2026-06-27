---
title: "Mises à jour hebdomadaires｜Ajout de quelques API pour NocoBase cli"
description: "Ceci est un résumé des mises à jour et améliorations des fonctionnalités de NocoBase du 30 avril au 7 mai 2026."
---

Résumez les journaux de mise à jour hebdomadaires du produit. Les dernières versions sont disponibles sur [notre blog](https://www.nocobase.com/en/blog/timeline).

**NocoBase est actuellement mis à jour avec trois branches : `main`, `next` et `develop`.**

![version.png](https://static-docs.nocobase.com/ba5f04e27e99c625cb3822da5df07860.png)

* `main` : La version la plus stable à ce jour, recommandée pour l'installation ;
* `next` : Version bêta, contient les nouvelles fonctionnalités à venir et a été testée préliminairement. Il peut y avoir des problèmes connus ou inconnus. Elle est principalement destinée aux utilisateurs testeurs pour recueillir des retours et optimiser davantage les fonctionnalités. Idéale pour les utilisateurs testeurs qui souhaitent découvrir les nouvelles fonctionnalités en avant-première et donner leur avis ;
* `develop` : Version alpha, contient le code de fonctionnalité le plus récent, peut être incomplète ou instable, principalement destinée au développement interne et à l'itération rapide. Adaptée aux utilisateurs techniques intéressés par les fonctionnalités de pointe du produit, mais avec des problèmes potentiels et des fonctions incomplètes. Ne pas utiliser en production.

## main

![main.png](https://static-docs.nocobase.com/47a3c71734c1d0f908b51f9ebd53c0ac.png)

### [v2.0.49](https://www.nocobase.com/en/blog/v2.0.49)

*Date de sortie : 2026-05-06*

### 🚀 Améliorations

- **[non défini]** Ajout d'une notification d'échec Feishu pour les workflows de publication manuelle ([#9349](https://github.com/nocobase/nocobase/pull/9349)) par @Molunerfinn

### 🐛 Corrections de bugs

- **[Source de données : Principale]** Empêcher le plantage lorsque les champs sont indéfinis lors du chargement de la collection ([#9174](https://github.com/nocobase/nocobase/pull/9174)) par @saraTabbane
- **[Modèles d'interface utilisateur]** Correction d'un problème où la liste des modèles de popup ne parvenait pas à charger correctement les modèles disponibles. ([#9332](https://github.com/nocobase/nocobase/pull/9332)) par @gchust
- **[Employés IA]** Correction du problème d'erreurs occasionnelles lorsque l'employé IA utilise le modèle DeepSeek v4 ([#9348](https://github.com/nocobase/nocobase/pull/9348)) par @cgyrock
- **[Gestionnaire de fichiers]** Amélioration de la gestion des erreurs de téléchargement des fichiers d'aperçu ([#9103](https://github.com/nocobase/nocobase/pull/9103)) par @gaston98765
- **[Workflow : Approbation]** Correction du problème où le filtre et les autres paramètres de requête fonctionnent désormais dans l'API de listage des workflows d'approbation disponibles par @mytharcher

### [v2.0.48](https://www.nocobase.com/en/blog/v2.0.48)

*Date de sortie : 2026-05-04*

### 🐛 Corrections de bugs

- **[Employés IA]** Correction du problème où la liste des employés IA du bouton d'action affiche les employés développeurs ([#9320](https://github.com/nocobase/nocobase/pull/9320)) par @cgyrock
- **[Workflow : Approbation]**

  - Correction du problème où le fichier dans l'application d'origine n'était pas rechargé par @mytharcher
  - Prise en charge de l'analyse de certaines variables client dans les actions d'approbation par @mytharcher

### [v2.0.47](https://www.nocobase.com/en/blog/v2.0.47)

*Date de sortie : 2026-05-01*

### 🎉 Nouvelles fonctionnalités

- **[Employés IA]** Le fournisseur LLM prend désormais en charge la plateforme Xiaomi MIMO ([#9315](https://github.com/nocobase/nocobase/pull/9315)) par @cgyrock

### 🚀 Améliorations

- **[moteur de flux]** Amélioration du comportement de la disposition par glissement des blocs sur les pages v2 ([#9264](https://github.com/nocobase/nocobase/pull/9264)) par @zhangzhonghe
- **[Employés IA]** Ajustement de la catégorie des employés IA ([#9274](https://github.com/nocobase/nocobase/pull/9274)) par @cgyrock
- **[Workflow : Approbation]** Marquer le mode d'affichage de l'association chargé depuis la base de données comme hérité par @mytharcher

### 🐛 Corrections de bugs

- **[base de données]** Correction d'un problème où les filtres datetime de source de données externe SQL Server pouvaient échouer ([#9272](https://github.com/nocobase/nocobase/pull/9272)) par @2013xile
- **[client]**

  - Conserver les valeurs nulles pour les dépendances de variables de portée de données vides dans les formulaires v2. ([#9287](https://github.com/nocobase/nocobase/pull/9287)) par @jiannx
  - Réexécuter le rendu des colonnes JS lorsque les données de ligne changent ([#9282](https://github.com/nocobase/nocobase/pull/9282)) par @jiannx
  - Correction du problème où les champs du formulaire de filtre disparaissent après la réouverture d'un sélecteur d'enregistrement contextuel ([#9211](https://github.com/nocobase/nocobase/pull/9211)) par @zhangzhonghe
  - Correction d'un problème où les cellules de champ JS dans les blocs de tableau v2 pouvaient apparaître vides après avoir filtré ou actualisé les données du tableau. ([#9285](https://github.com/nocobase/nocobase/pull/9285)) par @jiannx
- **[moteur de flux]** Correction d'un problème où les champs cachés du système pouvaient être sélectionnés dans les variables liées au formulaire. ([#9302](https://github.com/nocobase/nocobase/pull/9302)) par @gchust
- **[Action : Importer des enregistrements]** Correction du problème où l'index de ligne échouée dans l'importation d'enregistrements n'est pas correct ([#9277](https://github.com/nocobase/nocobase/pull/9277)) par @mytharcher
- **[Bloc : Gantt]** Ajout d'un paramètre de bloc Gantt pour permettre le glissement afin de reprogrammer. ([#9301](https://github.com/nocobase/nocobase/pull/9301)) par @jiannx
- **[Employés IA]** Correction de l'erreur d'intégration DeepSeek V4 de l'employé IA ([#9275](https://github.com/nocobase/nocobase/pull/9275)) par @cgyrock
- **[Action : Exporter les enregistrements Pro]** Correction du problème où le mode automatique ne fonctionnait pas par @mytharcher
- **[Workflow : Approbation]**

  - Correction d'une erreur de type par @mytharcher
  - Correction du timing d'exécution de l'approbation afin que `latestExecutionId` soit synchronisé après la validation de l'approbation par @mytharcher

## next

![next.png](https://static-docs.nocobase.com/8ed17a0f08cc585018f6de6c8b13947d.png)

### [v2.1.0-beta.25](https://www.nocobase.com/en/blog/v2.1.0-beta.25)

*Date de sortie : 2026-05-06*

### 🎉 Nouvelles fonctionnalités

- **[cli]** Ajout d'une commande de publication dans l'API ([#9308](https://github.com/nocobase/nocobase/pull/9308)) par @Andrew1989Y
- **[non défini]** Ajout de la documentation en indonésien et en vietnamien. ([#9303](https://github.com/nocobase/nocobase/pull/9303)) par @Molunerfinn
- **[Employés IA]** Le fournisseur LLM prend désormais en charge la plateforme Xiaomi MIMO ([#9315](https://github.com/nocobase/nocobase/pull/9315)) par @cgyrock
- **[Gestionnaire de migration]** Ajout de quelques API pour nocobase cli par @Andrew1989Y
- **[Gestionnaire de sauvegarde]** Ajout de quelques API pour nocobase cli par @Andrew1989Y

### 🚀 Améliorations

- **[non défini]**

  - Ajout d'une notification d'échec Feishu pour les workflows de publication manuelle([#9349](https://github.com/nocobase/nocobase/pull/9349)) par @Molunerfinn
  - Alignement de la documentation espagnole, portugaise, russe et allemande sur la source anglaise. ([#9299](https://github.com/nocobase/nocobase/pull/9299)) par @Molunerfinn
  - Synchronisation de la documentation française avec la source chinoise. ([#9291](https://github.com/nocobase/nocobase/pull/9291)) par @Molunerfinn
- **[IdP : OAuth]** Les sessions OAuth utilisent désormais les mêmes paramètres d'expiration que la politique de jeton système ([#9345](https://github.com/nocobase/nocobase/pull/9345)) par @2013xile
- **[Bloc : Kanban]**

  - Réduction de la largeur par défaut des colonnes Kanban. ([#9306](https://github.com/nocobase/nocobase/pull/9306)) par @jiannx
  - Amélioration des paramètres de création de blocs Calendrier et Kanban. ([#9294](https://github.com/nocobase/nocobase/pull/9294)) par @jiannx
- **[Employés IA]** Ajustement de la catégorie des employés IA ([#9274](https://github.com/nocobase/nocobase/pull/9274)) par @cgyrock
- **[Workflow : Approbation]** Marquer le mode d'affichage de l'association chargé depuis la base de données comme hérité par @mytharcher

### 🐛 Corrections de bugs

- **[non défini]**

  - Correction du workflow de dépendance-et-construction afin que les échecs d'extraction de plugin pro autonome cassent le CI au lieu de sauter silencieusement la couverture de construction. ([#9324](https://github.com/nocobase/nocobase/pull/9324)) par @Molunerfinn
  - Correction des fichiers de traduction gonflés et alignement de la structure de documentation multilingue. ([#9305](https://github.com/nocobase/nocobase/pull/9305)) par @Molunerfinn
- **[cli]** Correction des options booléennes CLI afin qu'elles puissent être désactivées avec des drapeaux négatifs ([#9337](https://github.com/nocobase/nocobase/pull/9337)) par @2013xile
- **[client-v2]**

  - Correction du chargement des plugins distants afin que les URL de plugin qui se terminent déjà par `.js` ne soient pas résolues en chemins `.js.js` en double. ([#9336](https://github.com/nocobase/nocobase/pull/9336)) par @Molunerfinn
  - Correction du problème où `RemoteSelect` ne s'affichait pas dans la configuration du workflow de liaison ([#9314](https://github.com/nocobase/nocobase/pull/9314)) par @mytharcher
- **[ai]** Correction du champ de catégorie manquant lors de l'enregistrement de l'employé IA ([#9300](https://github.com/nocobase/nocobase/pull/9300)) par @cgyrock
- **[moteur de flux]** Correction d'un problème où les champs cachés du système pouvaient être sélectionnés dans les variables liées au formulaire. ([#9302](https://github.com/nocobase/nocobase/pull/9302)) par @gchust
- **[client]**

  - Correction d'un problème où les cellules de champ JS dans les blocs de tableau v2 pouvaient apparaître vides après avoir filtré ou actualisé les données du tableau. ([#9285](https://github.com/nocobase/nocobase/pull/9285)) par @jiannx
  - Conserver les valeurs nulles pour les dépendances de variables de portée de données vides dans les formulaires v2. ([#9287](https://github.com/nocobase/nocobase/pull/9287)) par @jiannx
  - Correction du problème où les champs du formulaire de filtre disparaissent après la réouverture d'un sélecteur d'enregistrement contextuel ([#9211](https://github.com/nocobase/nocobase/pull/9211)) par @zhangzhonghe
  - Réexécuter le rendu des colonnes JS lorsque les données de ligne changent ([#9282](https://github.com/nocobase/nocobase/pull/9282)) par @jiannx
- **[base de données]** Correction d'un problème où les filtres datetime de source de données externe SQL Server pouvaient échouer ([#9272](https://github.com/nocobase/nocobase/pull/9272)) par @2013xile
- **[Employés IA]**

  - Correction du problème d'erreurs occasionnelles lorsque l'employé IA utilise le modèle DeepSeek v4 ([#9348](https://github.com/nocobase/nocobase/pull/9348)) par @cgyrock
  - Correction du problème où le nœud d'employé IA du workflow efface les compétences après avoir changé d'employé IA ([#9342](https://github.com/nocobase/nocobase/pull/9342)) par @cgyrock
  - Correction du problème où la liste des employés IA du bouton d'action affiche les employés développeurs ([#9320](https://github.com/nocobase/nocobase/pull/9320)) par @cgyrock
- **[Source de données : Principale]** Empêcher le plantage lorsque les champs sont indéfinis lors du chargement de la collection ([#9174](https://github.com/nocobase/nocobase/pull/9174)) par @saraTabbane
- **[Modèles d'interface utilisateur]** Correction d'un problème où la liste des modèles de popup ne parvenait pas à charger correctement les modèles disponibles. ([#9332](https://github.com/nocobase/nocobase/pull/9332)) par @gchust
- **[Gestionnaire de fichiers]** Amélioration de la gestion des erreurs de téléchargement des fichiers d'aperçu ([#9103](https://github.com/nocobase/nocobase/pull/9103)) par @gaston98765
- **[Bloc : Arbre]** Correction de l'affichage anormal des nœuds du bloc de filtre ([#9260](https://github.com/nocobase/nocobase/pull/9260)) par @jiannx
- **[Bloc : Gantt]** Ajout d'un paramètre de bloc Gantt pour permettre le glissement afin de reprogrammer. ([#9301](https://github.com/nocobase/nocobase/pull/9301)) par @jiannx
- **[Bloc : Kanban]** Correction de l'affichage répété de la couche flottante de configuration de champ ([#9271](https://github.com/nocobase/nocobase/pull/9271)) par @jiannx
- **[Action : Importer des enregistrements]** Correction du problème où l'index de ligne échouée dans l'importation d'enregistrements n'est pas correct ([#9277](https://github.com/nocobase/nocobase/pull/9277)) par @mytharcher
- **[Action : Exporter les enregistrements Pro]** Correction du problème où le mode automatique ne fonctionnait pas par @mytharcher
- **[Gestionnaire de migration]** Correction de `migration:create` retournant `taskId` à partir de l'enregistrement de tâche asynchrone. par @Andrew1989Y
- **[Workflow : Approbation]**

  - Correction du problème où le filtre et les autres paramètres de requête fonctionnent désormais dans l'API de listage des workflows d'approbation disponibles par @mytharcher
  - Correction du problème où le fichier dans l'application d'origine n'était pas rechargé par @mytharcher
  - Correction d'une erreur de type par @mytharcher
  - Prise en charge de l'analyse de certaines variables client dans les actions d'approbation par @mytharcher
  - Correction du timing d'exécution de l'approbation afin que `latestExecutionId` soit synchronisé après la validation de l'approbation par @mytharcher

![develop.png](https://static-docs.nocobase.com/7fcdd9456a17286d8a439eee52bcb8d2.png)

### [v2.1.0-alpha.30](https://www.nocobase.com/en/blog/v2.1.0-alpha.30)

*Date de sortie : 2026-05-06*

### 🚀 Améliorations

- **[non défini]** Ajout d'une notification d'échec Feishu pour les workflows de publication manuelle ([#9349](https://github.com/nocobase/nocobase/pull/9349)) par @Molunerfinn
- **[IdP : OAuth]** Les sessions OAuth utilisent désormais les mêmes paramètres d'expiration que la politique de jeton système ([#9345](https://github.com/nocobase/nocobase/pull/9345)) par @2013xile

### 🐛 Corrections de bugs

- **[client-v2]** Correction du chargement des plugins distants afin que les URL de plugin qui se terminent déjà par `.js` ne soient pas résolues en chemins `.js.js` en double. ([#9336](https://github.com/nocobase/nocobase/pull/9336)) par @Molunerfinn
- **[cli]** Correction des options booléennes CLI afin qu'elles puissent être désactivées avec des drapeaux négatifs ([#9337](https://github.com/nocobase/nocobase/pull/9337)) par @2013xile
- **[Employés IA]**

  - Correction du problème d'erreurs occasionnelles lorsque l'employé IA utilise le modèle DeepSeek v4 ([#9348](https://github.com/nocobase/nocobase/pull/9348)) par @cgyrock
  - Correction du problème où le nœud d'employé IA du workflow efface les compétences après avoir changé d'employé IA ([#9342](https://github.com/nocobase/nocobase/pull/9342)) par @cgyrock
- **[Source de données : Principale]** Empêcher le plantage lorsque les champs sont indéfinis lors du chargement de la collection ([#9174](https://github.com/nocobase/nocobase/pull/9174)) par @saraTabbane
- **[Modèles d'interface utilisateur]** Correction d'un problème où la liste des modèles de popup ne parvenait pas à charger correctement les modèles disponibles. ([#9332](https://github.com/nocobase/nocobase/pull/9332)) par @gchust
- **[Bloc : Kanban]** Correction des blocs associés Kanban utilisant des paramètres de ressource d'exécution non résolus dans les contextes de popup ou de page secondaire. ([#9350](https://github.com/nocobase/nocobase/pull/9350)) par @jiannx
- **[Workflow : Approbation]** Correction du problème où le filtre et les autres paramètres de requête fonctionnent désormais dans l'API de listage des workflows d'approbation disponibles par @mytharcher

### [v2.1.0-alpha.29](https://www.nocobase.com/en/blog/v2.1.0-alpha.29)

*Date de sortie : 2026-05-04*

### 🐛 Corrections de bugs

- **[Gestionnaire de fichiers]** Amélioration de la gestion des erreurs de téléchargement des fichiers d'aperçu ([#9103](https://github.com/nocobase/nocobase/pull/9103)) par @gaston98765
- **[Workflow : Approbation]** Prise en charge de l'analyse de certaines variables client dans les actions d'approbation par @mytharcher

### [v2.1.0-alpha.28](https://www.nocobase.com/en/blog/v2.1.0-alpha.28)

*Date de sortie : 2026-05-04*

### 🐛 Corrections de bugs

- **[Workflow : Approbation]** Correction du problème où le fichier dans l'application d'origine n'était pas rechargé par @mytharcher

### [v2.1.0-alpha.27](https://www.nocobase.com/en/blog/v2.1.0-alpha.27)

*Date de sortie : 2026-05-03*

### 🎉 Nouvelles fonctionnalités

- **[cli]** Ajout d'une commande de publication dans l'API ([#9308](https://github.com/nocobase/nocobase/pull/9308)) par @Andrew1989Y
- **[non défini]** Ajout de la documentation en indonésien et en vietnamien. ([#9303](https://github.com/nocobase/nocobase/pull/9303)) par @Molunerfinn
- **[serveur]** Les employés IA peuvent rechercher la documentation groupée avec des commandes Bash ([#9269](https://github.com/nocobase/nocobase/pull/9269)) par @2013xile
- **[Employés IA]** Le fournisseur LLM prend désormais en charge la plateforme Xiaomi MIMO ([#9315](https://github.com/nocobase/nocobase/pull/9315)) par @cgyrock
- **[Gestionnaire de migration]** Ajout de quelques API pour nocobase cli par @Andrew1989Y
- **[Gestionnaire de sauvegarde]** Ajout de quelques API pour nocobase cli par @Andrew1989Y

### 🚀 Améliorations

- **[moteur de flux]** Amélioration du comportement de la disposition par glissement des blocs sur les pages v2 ([#9264](https://github.com/nocobase/nocobase/pull/9264)) par @zhangzhonghe
- **[non défini]**

  - Alignement de la documentation espagnole, portugaise, russe et allemande sur la source anglaise. ([#9299](https://github.com/nocobase/nocobase/pull/9299)) par @Molunerfinn
  - Synchronisation de la documentation française avec la source chinoise. ([#9291](https://github.com/nocobase/nocobase/pull/9291)) par @Molunerfinn
- **[Employés IA]**

  - Amélioration des outils d'édition RunJS de Nathan et réduction du décalage lors des longues conversations de chat IA ([#9311](https://github.com/nocobase/nocobase/pull/9311)) par @2013xile
  - Ajustement de la catégorie des employés IA ([#9274](https://github.com/nocobase/nocobase/pull/9274)) par @cgyrock
- **[Bloc : Kanban]**

  - Réduction de la largeur par défaut des colonnes Kanban. ([#9306](https://github.com/nocobase/nocobase/pull/9306)) par @jiannx
  - Amélioration des paramètres de création de blocs Calendrier et Kanban. ([#9294](https://github.com/nocobase/nocobase/pull/9294)) par @jiannx
- **[Workflow : Approbation]** Marquer le mode d'affichage de l'association chargé depuis la base de données comme hérité par @mytharcher

### 🐛 Corrections de bugs

- **[non défini]**

  - Correction du workflow de dépendance-et-construction afin que les échecs d'extraction de plugin pro autonome cassent le CI au lieu de sauter silencieusement la couverture de construction. ([#9324](https://github.com/nocobase/nocobase/pull/9324)) par @Molunerfinn
  - Correction des fichiers de traduction gonflés et alignement de la structure de documentation multilingue. ([#9305](https://github.com/nocobase/nocobase/pull/9305)) par @Molunerfinn
- **[client-v2]** Correction du problème où `RemoteSelect` ne s'affichait pas dans la configuration du workflow de liaison ([#9314](https://github.com/nocobase/nocobase/pull/9314)) par @mytharcher
- **[moteur de flux]** Correction d'un problème où les champs cachés du système pouvaient être sélectionnés dans les variables liées au formulaire. ([#9302](https://github.com/nocobase/nocobase/pull/9302)) par @gchust
- **[ai]** Correction du champ de catégorie manquant lors de l'enregistrement de l'employé IA ([#9300](https://github.com/nocobase/nocobase/pull/9300)) par @cgyrock
- **[client]**

  - Correction d'un problème où les cellules de champ JS dans les blocs de tableau v2 pouvaient apparaître vides après avoir filtré ou actualisé les données du tableau. ([#9285](https://github.com/nocobase/nocobase/pull/9285)) par @jiannx
  - Correction du problème où les champs du formulaire de filtre disparaissent après la réouverture d'un sélecteur d'enregistrement contextuel ([#9211](https://github.com/nocobase/nocobase/pull/9211)) par @zhangzhonghe
  - Conserver les valeurs nulles pour les dépendances de variables de portée de données vides dans les formulaires v2. ([#9287](https://github.com/nocobase/nocobase/pull/9287)) par @jiannx
  - Réexécuter le rendu des colonnes JS lorsque les données de ligne changent ([#9282](https://github.com/nocobase/nocobase/pull/9282)) par @jiannx
- **[base de données]** Correction d'un problème où les filtres datetime de source de données externe SQL Server pouvaient échouer ([#9272](https://github.com/nocobase/nocobase/pull/9272)) par @2013xile
- **[Employés IA]**

  - Correction du problème où la liste des employés IA du bouton d'action affiche les employés développeurs ([#9320](https://github.com/nocobase/nocobase/pull/9320)) par @cgyrock
  - Correction de l'erreur d'intégration DeepSeek V4 de l'employé IA ([#9275](https://github.com/nocobase/nocobase/pull/9275)) par @cgyrock
- **[Bloc : Gantt]** Ajout d'un paramètre de bloc Gantt pour permettre le glissement afin de reprogrammer. ([#9301](https://github.com/nocobase/nocobase/pull/9301)) par @jiannx
- **[Bloc : Arbre]** Correction de l'affichage anormal des nœuds du bloc de filtre ([#9260](https://github.com/nocobase/nocobase/pull/9260)) par @jiannx
- **[Action : Importer des enregistrements]** Correction du problème où l'index de ligne échouée dans l'importation d'enregistrements n'est pas correct ([#9277](https://github.com/nocobase/nocobase/pull/9277)) par @mytharcher
- **[Bloc : Kanban]** Correction de l'affichage répété de la couche flottante de configuration de champ ([#9271](https://github.com/nocobase/nocobase/pull/9271)) par @jiannx
- **[Action : Exporter les enregistrements Pro]** Correction du problème où le mode automatique ne fonctionnait pas par @mytharcher
- **[Gestionnaire de migration]** Correction de `migration:create` retournant `taskId` à partir de l'enregistrement de tâche asynchrone. par @Andrew1989Y
- **[Workflow : Approbation]**

  - Correction du timing d'exécution de l'approbation afin que `latestExecutionId` soit synchronisé après la validation de l'approbation par @mytharcher
  - Correction d'une erreur de type par @mytharcher
