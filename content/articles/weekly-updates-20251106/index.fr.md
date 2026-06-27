---
title: "Mises à jour hebdomadaires de NocoBase : Optimisations et corrections de bugs"
description: "La mise à jour de cette semaine inclut : le support du mode de déclenchement « Avant l'enregistrement des données », l'ajout de la pagination dans les sous-tableaux, et plus encore."
---

Résumez les journaux de mise à jour hebdomadaires du produit. Les dernières versions sont disponibles sur [notre blog](https://www.nocobase.com/en/blog/timeline).

**NocoBase est actuellement mis à jour avec trois branches : `main`, `next` et `develop`.**

![version.png](https://static-docs.nocobase.com/ba5f04e27e99c625cb3822da5df07860.png)

* `main` : La version la plus stable à ce jour, recommandée pour l'installation ;
* `next` : Version bêta, contient les nouvelles fonctionnalités à venir et a été testée préliminairement. Il peut y avoir des problèmes connus ou inconnus. Elle est principalement destinée aux utilisateurs de test pour recueillir des commentaires et optimiser davantage les fonctions. Idéale pour les utilisateurs de test qui souhaitent découvrir les nouvelles fonctionnalités en avant-première et donner leur avis ;
* `develop` : Version alpha, contient le code des dernières fonctionnalités, peut être incomplète ou instable, principalement destinée au développement interne et à l'itération rapide. Adaptée aux utilisateurs techniques intéressés par les fonctionnalités de pointe du produit, mais avec des problèmes potentiels et des fonctions incomplètes. Ne pas utiliser en production.

## main

![main.png](https://static-docs.nocobase.com/47a3c71734c1d0f908b51f9ebd53c0ac.png)

### [v1.9.3](https://www.nocobase.com/en/blog/v1.9.3)

*Date de sortie : 2025-11-05*

### 🚀 Améliorations

- **[base de données]** Ajout de l'option `multipleStatements` à l'instance de connexion MariaDB pour prendre en charge l'appel de plusieurs instructions dans une seule requête ([#7781](https://github.com/nocobase/nocobase/pull/7781)) par @mytharcher
- **[Workflow]** Prise en charge du bloc de données dans le workflow pour utiliser le menu de paramètres de détail consolidé ([#7771](https://github.com/nocobase/nocobase/pull/7771)) par @mytharcher

### 🐛 Corrections de bugs

- **[serveur]** Isoler le canal Pub-Sub par nom d'application ([#7762](https://github.com/nocobase/nocobase/pull/7762)) par @mytharcher
- **[client]** Correction de l'erreur « Maximum call stack size exceeded » ([#7780](https://github.com/nocobase/nocobase/pull/7780)) par @zhangzhonghe
- **[base de données]** Détection incorrecte du champ d'index lorsque les noms de champs utilisent le style snake_case ([#7776](https://github.com/nocobase/nocobase/pull/7776)) par @2013xile
- **[Workflow]** Résolution d'un problème où le répartiteur de workflow en mode cluster ne parvenait pas à identifier correctement les états inactifs, ce qui pouvait entraîner une consommation inutile d'événements de file d'attente avant que le plugin ne soit prêt ([#7768](https://github.com/nocobase/nocobase/pull/7768)) par @mytharcher
- **[Mobile (obsolète)]** Correction du problème où la fenêtre contextuelle de la valeur par défaut du champ de date sur mobile ne permettait pas de sélectionner une date ([#7783](https://github.com/nocobase/nocobase/pull/7783)) par @zhangzhonghe
- **[Workflow : Approbation]** Correction d'une erreur levée lors de la duplication d'un workflow d'approbation par @mytharcher
- **[Gestionnaire d'e-mails]** Ajout d'index à la collection mailMessages par @jiannx

### [v1.9.2](https://www.nocobase.com/en/blog/v1.9.2)

*Date de sortie : 2025-11-04*

### 🚀 Améliorations

- **[Workflow : Approbation]** Ajout d'une notification pour les personnes déléguées et les personnes assignées ajoutées par @mytharcher

### 🐛 Corrections de bugs

- **[Workflow]** Correction d'un problème où, en mode de séparation des services, l'exécution manuelle d'un workflow contenant un nœud d'interruption restait bloquée dans un statut en attente ([#7767](https://github.com/nocobase/nocobase/pull/7767)) par @mytharcher
- **[Gestionnaire d'e-mails]** ajout d'une migration pour les index par @jiannx

### [v1.9.1](https://www.nocobase.com/en/blog/v1.9.1)

*Date de sortie : 2025-11-04*

### 🐛 Corrections de bugs

- **[Workflow : Approbation]** La création de nœuds d'approbation dans des branches parallèles n'est plus prise en charge pour éviter les problèmes causés par l'état du processus par @mytharcher
- **[Gestionnaire d'e-mails]** ajout de journaux de synchronisation par @jiannx

## next

![next.png](https://static-docs.nocobase.com/8ed17a0f08cc585018f6de6c8b13947d.png)

### [v1.9.0-beta.16](https://www.nocobase.com/en/blog/v1.9.0-beta.16)

*Date de sortie : 2025-11-03*

### 🎉 Nouvelles fonctionnalités

- **[Workflow : Approbation]** Prise en charge du mode de déclenchement « Avant l'enregistrement des données » par @mytharcher

### 🚀 Améliorations

- **[serveur]** Ajout d'un journal de passerelle ([#7683](https://github.com/nocobase/nocobase/pull/7683)) par @2013xile
- **[Workflow : nœud de notification]** Ajout de l'option `ignoreFail` pour le nœud de notification, qui permet de continuer le workflow en cas d'échec de l'envoi de la notification ([#7736](https://github.com/nocobase/nocobase/pull/7736)) par @mytharcher

### 🐛 Corrections de bugs

- **[client]**

  - Correction de la configuration des règles de liaison par scan de code QR dans le panneau d'actions ([#7693](https://github.com/nocobase/nocobase/pull/7693)) par @katherinehhh
  - Correction de l'échec des règles de liaison du bloc iframe dans une modale ([#7694](https://github.com/nocobase/nocobase/pull/7694)) par @katherinehhh
- **[base de données]** Ignorer la synchronisation des valeurs par défaut pour les colonnes JSON de MySQL ([#7696](https://github.com/nocobase/nocobase/pull/7696)) par @2013xile
- **[Workflow]**

  - Correction du problème où, en mode de séparation des services, une gestion incorrecte de la file d'attente en mémoire empêchait l'exécution de certains workflows ([#7692](https://github.com/nocobase/nocobase/pull/7692)) par @mytharcher
  - Correction de la valeur du statut d'exécution lors de la création avec report ([#7721](https://github.com/nocobase/nocobase/pull/7721)) par @mytharcher
  - Correction du problème où, après la suppression d'un nœud qui démarre une branche, la clé du premier nœud conservé dans la branche était incorrectement modifiée en une nouvelle valeur ([#7665](https://github.com/nocobase/nocobase/pull/7665)) par @mytharcher
- **[Contrôle d'accès]** Correction de l'ordre des middlewares de `resourceManager` ([#7728](https://github.com/nocobase/nocobase/pull/7728)) par @2013xile
- **[Gestionnaire de fichiers]** Correction du problème de téléchargement incorrect des fichiers `.msg` ([#7662](https://github.com/nocobase/nocobase/pull/7662)) par @mytharcher
- **[Workflow : Nœud manuel]** Correction du problème où les tâches manuelles disparaissaient après la désactivation du workflow ([#7687](https://github.com/nocobase/nocobase/pull/7687)) par @mytharcher
- **[Champ de collection : divisions administratives de la Chine]** L'importation de données échoue lorsque la ville et la région ont le même nom ([#7673](https://github.com/nocobase/nocobase/pull/7673)) par @2013xile
- **[Workflow : Approbation]**

  - Correction du problème de traduction du texte du statut dans les notifications d'achèvement d'approbation, en utilisant la langue par défaut du système pour la traduction lorsque l'utilisateur n'a pas défini de préférence linguistique par @mytharcher
  - Correction des paramètres régionaux par @mytharcher

## develop

![develop.png](https://static-docs.nocobase.com/7fcdd9456a17286d8a439eee52bcb8d2.png)

### [v2.0.0-alpha.34](https://www.nocobase.com/en/blog/v2.0.0-alpha.34)

*Date de sortie : 2025-11-05*

### 🚀 Améliorations

- **[base de données]** Ajout de l'option `multipleStatements` à l'instance de connexion MariaDB pour prendre en charge l'appel de plusieurs instructions dans une seule requête ([#7781](https://github.com/nocobase/nocobase/pull/7781)) par @mytharcher

### 🐛 Corrections de bugs

- **[moteur de flux]** Correction d'un problème où les boutons d'action dans le bloc de tableau ne se mettaient pas à jour correctement après le changement de page, garantissant que leur fonctionnalité correspond aux données de la page actuelle. ([#7779](https://github.com/nocobase/nocobase/pull/7779)) par @gchust
- **[client]**

  - Correction de l'erreur « Maximum call stack size exceeded » ([#7780](https://github.com/nocobase/nocobase/pull/7780)) par @zhangzhonghe
  - correction de l'absence d'application des points de suspension sur le champ de titre des champs d'association ([#7778](https://github.com/nocobase/nocobase/pull/7778)) par @katherinehhh
  - la règle de liaison de l'action de mise à jour d'enregistrement ne fonctionne pas ([#7774](https://github.com/nocobase/nocobase/pull/7774)) par @gchust
- **[base de données]** Détection incorrecte du champ d'index lorsque les noms de champs utilisent le style snake_case ([#7776](https://github.com/nocobase/nocobase/pull/7776)) par @2013xile
- **[Mobile (obsolète)]** Correction du problème où la fenêtre contextuelle de la valeur par défaut du champ de date sur mobile ne permettait pas de sélectionner une date ([#7783](https://github.com/nocobase/nocobase/pull/7783)) par @zhangzhonghe

### [v2.0.0-alpha.33](https://www.nocobase.com/en/blog/v2.0.0-alpha.33)

*Date de sortie : 2025-11-05*

### 🎉 Nouvelles fonctionnalités

- **[client]** ajout de la prise en charge de la pagination pour le sous-tableau ([#7754](https://github.com/nocobase/nocobase/pull/7754)) par @katherinehhh

### 🚀 Améliorations

- **[non défini]** mise à jour de la documentation anglaise du plugin de graphiques ([#7748](https://github.com/nocobase/nocobase/pull/7748)) par @heziqiang
- **[télémétrie]** Ajout de métriques de télémétrie pour le nombre de sous-applications en ligne, etc. ([#7743](https://github.com/nocobase/nocobase/pull/7743)) par @2013xile
- **[Workflow]** Prise en charge du bloc de données dans le workflow pour utiliser le menu de paramètres de détail consolidé ([#7771](https://github.com/nocobase/nocobase/pull/7771)) par @mytharcher
- **[Gestionnaire multi-applications (obsolète)]]** Activation du démarrage asynchrone pour les sous-applications à l'aide d'une file d'attente ([#7749](https://github.com/nocobase/nocobase/pull/7749)) par @2013xile
- **[Visualisation des données]** ajout d'options de format de temps pour les données de graphique ([#7763](https://github.com/nocobase/nocobase/pull/7763)) par @heziqiang
- **[Workflow : Approbation]** Ajout d'une notification pour les personnes déléguées et les personnes assignées ajoutées par @mytharcher

### 🐛 Corrections de bugs

- **[client]**

  - Correction d'un problème où les libellés des types d'énumération dans les composants liés aux variables n'étaient pas affichés dans la langue correcte. ([#7765](https://github.com/nocobase/nocobase/pull/7765)) par @gchust
  - Correction de l'absence de l'indicateur de champ obligatoire après la configuration de la validation frontale ([#7760](https://github.com/nocobase/nocobase/pull/7760)) par @katherinehhh
  - correction du problème d'effacement de la date sans fuseau horaire dans le formulaire d'édition ([#7759](https://github.com/nocobase/nocobase/pull/7759)) par @katherinehhh
  - Correction de la validation des champs obligatoires pour les règles de liaison ([#7756](https://github.com/nocobase/nocobase/pull/7756)) par @zhangzhonghe
  - résolution du problème de date invalide lors de la suppression d'une date spécifiée dans le filtre... ([#7746](https://github.com/nocobase/nocobase/pull/7746)) par @katherinehhh
  - Correction de l'échec de la validation obligatoire pour le champ Markdown Vditor ([#7764](https://github.com/nocobase/nocobase/pull/7764)) par @katherinehhh
  - Ajout de la configuration de la portée des données pour les champs de relation dans les formulaires de filtre ([#7761](https://github.com/nocobase/nocobase/pull/7761)) par @zhangzhonghe
  - correction du problème de format de l'heure dans les champs de sous-tableau ([#7750](https://github.com/nocobase/nocobase/pull/7750)) par @katherinehhh
- **[moteur de flux]**

  - lorsque la valeur du filtre de champ est définie sur false, la requête avec la portée des données est incorrecte ([#7766](https://github.com/nocobase/nocobase/pull/7766)) par @gchust
  - impossible de résoudre la valeur du champ d'association de la variable d'objet actuelle du sous-formulaire ([#7751](https://github.com/nocobase/nocobase/pull/7751)) par @gchust
  - correction : résolution du problème de paramètre de requête de page après la suppression de données sur la dernière page ([#7755](https://github.com/nocobase/nocobase/pull/7755)) par @katherinehhh
- **[serveur]** Isoler le canal Pub-Sub par nom d'application ([#7762](https://github.com/nocobase/nocobase/pull/7762)) par @mytharcher
- **[Bloc : GridCard]** correction du problème de duplication de données entre le bloc de liste et le bloc de carte en grille ([#7773](https://github.com/nocobase/nocobase/pull/7773)) par @katherinehhh
- **[Gestionnaire multi-applications (obsolète)]** Collection incorrecte pour la métrique de statut de la sous-application ([#7772](https://github.com/nocobase/nocobase/pull/7772)) par @2013xile
- **[Workflow]**

  - Résolution d'un problème où le répartiteur de workflow en mode cluster ne parvenait pas à identifier correctement les états inactifs, ce qui pouvait entraîner une consommation inutile d'événements de file d'attente avant que le plugin ne soit prêt ([#7768](https://github.com/nocobase/nocobase/pull/7768)) par @mytharcher
  - Correction d'un problème où, en mode de séparation des services, l'exécution manuelle d'un workflow contenant un nœud d'interruption restait bloquée dans un statut en attente ([#7767](https://github.com/nocobase/nocobase/pull/7767)) par @mytharcher
- **[Workflow : Approbation]**

  - Correction d'une erreur levée lors de la duplication d'un workflow d'approbation par @mytharcher
  - La création de nœuds d'approbation dans des branches parallèles n'est plus prise en charge pour éviter les problèmes causés par l'état du processus par @mytharcher
- **[Gestionnaire d'e-mails]**

  - ajout de journaux de synchronisation par @jiannx
  - ajout d'une migration pour les index par @jiannx

### [v2.0.0-alpha.31](https://www.nocobase.com/en/blog/v2.0.0-alpha.31)

*Date de sortie : 2025-11-03*

### 🎉 Nouvelles fonctionnalités

- **[Workflow : Approbation]** Prise en charge du mode de déclenchement « Avant l'enregistrement des données » par @mytharcher

### 🐛 Corrections de bugs

- **[client]** impossible de charger les champs de la variable du formulaire actuel ([#7745](https://github.com/nocobase/nocobase/pull/7745)) par @gchust
- **[Workflow : Approbation]** Correction des paramètres régionaux par @mytharcher

### [v2.0.0-alpha.30](https://www.nocobase.com/en/blog/v2.0.0-alpha.30)

*Date de sortie : 2025-11-02*

### 🚀 Améliorations

- **[Workflow : nœud de notification]** Ajout de l'option `ignoreFail` pour le nœud de notification, qui permet de continuer le workflow en cas d'échec de l'envoi de la notification ([#7736](https://github.com/nocobase/nocobase/pull/7736)) par @mytharcher

### [v2.0.0-alpha.29](https://www.nocobase.com/en/blog/v2.0.0-alpha.29)

*Date de sortie : 2025-11-02*

### 🐛 Corrections de bugs

- **[client]**

  - Résolution d'un problème où la variable de champ d'association dans le formulaire actuel ne pouvait pas être correctement identifiée, garantissant un traitement précis des données dans les formulaires. ([#7726](https://github.com/nocobase/nocobase/pull/7726)) par @gchust
  - Résolution d'un problème où l'affectation d'un tableau comme valeur ou valeur par défaut à un champ « toOne » entraînait une erreur. Cela garantit une gestion correcte des résultats de résolution de variables, améliorant la stabilité et la précision du système. ([#7735](https://github.com/nocobase/nocobase/pull/7735)) par @gchust
- **[Contrôle d'accès]** Correction de l'ordre des middlewares de `resourceManager` ([#7728](https://github.com/nocobase/nocobase/pull/7728)) par @2013xile

### [v2.0.0-alpha.28](https://www.nocobase.com/en/blog/v2.0.0-alpha.28)

*Date de sortie : 2025-11-01*

### 🚀 Améliorations

- **[moteur de flux]** Amélioration du message d'erreur affiché lors de l'échec de la copie de l'UID, fournissant des instructions plus claires pour résoudre le problème. ([#7718](https://github.com/nocobase/nocobase/pull/7718)) par @gchust

### 🐛 Corrections de bugs

- **[moteur de flux]** les étapes du flux d'événements ne doivent pas être affichées dans les menus de configuration ([#7723](https://github.com/nocobase/nocobase/pull/7723)) par @gchust
- **[client]** Correction d'un problème où des champs non filtrables étaient incorrectement listés dans les options de filtre, garantissant que seuls les champs applicables apparaissent pour la sélection. ([#7700](https://github.com/nocobase/nocobase/pull/7700)) par @gchust
- **[Workflow]** Correction de la valeur du statut d'exécution lors de la création avec report ([#7721](https://github.com/nocobase/nocobase/pull/7721)) par @mytharcher
- **[Employés IA]** Optimisation du comportement de recherche Web et des indications utilisateur pour Gemini ([#7720](https://github.com/nocobase/nocobase/pull/7720)) par @cgyrock
- **[Action : Exporter les enregistrements]** résolution du problème d'affichage de la liste des champs exportables dans l'action d'exportation ([#7714](https://github.com/nocobase/nocobase/pull/7714)) par @katherinehhh
- **[Action : Importer des enregistrements]** résolution du problème d'affichage de la liste des champs dans les champs importables ([#7710](https://github.com/nocobase/nocobase/pull/7710)) par @katherinehhh
- **[Action : Importer des enregistrements Pro]** résolution du problème d'affichage de la liste des champs dans les champs importables par @katherinehhh

### [v2.0.0-alpha.27](https://www.nocobase.com/en/blog/v2.0.0-alpha.27)

*Date de sortie : 2025-10-31*

### 🎉 Nouvelles fonctionnalités

- **[client]** Flux d'événements : Introduction de nouvelles actions prédéfinies pour améliorer les options de personnalisation pour la gestion des événements, permettant aux utilisateurs de rationaliser les workflows et d'améliorer l'efficacité ([#7672](https://github.com/nocobase/nocobase/pull/7672)) par @zhangzhonghe

### 🚀 Améliorations

- **[Employés IA]** Amélioration de la logique d'interaction des employés IA et optimisation du flux de configuration des tâches ([#7707](https://github.com/nocobase/nocobase/pull/7707)) par @cgyrock

### 🐛 Corrections de bugs

- **[client]** résolution d'un problème d'interface utilisateur lors de la suppression d'un champ d'association dans une collection ([#7706](https://github.com/nocobase/nocobase/pull/7706)) par @katherinehhh

### [v2.0.0-alpha.26](https://www.nocobase.com/en/blog/v2.0.0-alpha.26)

*Date de sortie : 2025-10-30*

### 🚀 Améliorations

- **[non défini]** mise à jour du document de présentation des graphiques ([#7702](https://github.com/nocobase/nocobase/pull/7702)) par @heziqiang
- **[client]** prise en charge de jsx dans l'éditeur de code JS ([#7699](https://github.com/nocobase/nocobase/pull/7699)) par @gchust
- **[Employés IA]** L'employé IA peut interroger les données de manière autonome en fonction des métadonnées du bloc de tableau ([#7703](https://github.com/nocobase/nocobase/pull/7703)) par @cgyrock

### 🐛 Corrections de bugs

- **[client]**

  - Correction de l'échec des règles de liaison du bloc iframe dans une modale ([#7694](https://github.com/nocobase/nocobase/pull/7694)) par @katherinehhh
  - Correction de la configuration des règles de liaison par scan de code QR dans le panneau d'actions ([#7693](https://github.com/nocobase/nocobase/pull/7693)) par @katherinehhh
- **[base de données]** Ignorer la synchronisation des valeurs par défaut pour les colonnes JSON de MySQL ([#7696](https://github.com/nocobase/nocobase/pull/7696)) par @2013xile
- **[Workflow]** Correction du problème où, en mode de séparation des services, une gestion incorrecte de la file d'attente en mémoire empêchait l'exécution de certains workflows ([#7692](https://github.com/nocobase/nocobase/pull/7692)) par @mytharcher
