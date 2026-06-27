---
title: "NocoBase v1.4.0 Officiellement Publiée"
description: "Formulaires publics, nouvelles sources de données et plus de fonctionnalités."
---

## Principales nouvelles fonctionnalités

### Simplification du processus d'ajout et de mise à jour des plugins

![20241201170853](https://static-docs.nocobase.com/20241201170853.png)

* La liste des plugins est désormais lue directement depuis le répertoire local.
* Les processus d'ajout et de mise à jour des plugins ont été fusionnés.
* L'interface prend en charge l'activation par lots des plugins.
* Le processus de téléchargement et de mise à niveau des plugins commerciaux a été simplifié.

Documentation de référence :

* [Installation et mise à niveau des plugins](https://docs.nocobase.com/welcome/getting-started/plugin)
* [Notes de version / Simplification du processus d'ajout et de mise à jour des plugins](https://www.nocobase.com/en/blog/simplify-the-process-of-adding-and-updating-plugins)

### Notification

![20241201171806](https://static-docs.nocobase.com/20241201171806.png)

* **Notification : Message dans l'application**
  Permet aux utilisateurs de recevoir des notifications de messages en temps réel au sein de l'application NocoBase ;
* **Notification : E-mail**
  Utilisé pour envoyer des notifications par e-mail avec un transport SMTP intégré. Détails ;
* **Notification : WeCom**
  Envoie des notifications via le canal WeCom.

Documentation de référence :

* [Gestionnaire de notifications](https://docs.nocobase.com/handbook/notification-manager)

### Synchronisation des données utilisateur

![20241201172843](https://static-docs.nocobase.com/20241201172843.png)

Documentation de référence :

* [Synchronisation des données utilisateur](https://docs.nocobase.com/handbook/user-data-sync)

### Gestionnaire de sauvegarde

![20241201170237](https://static-docs.nocobase.com/20241201170237.png)

Documentation de référence :

* [Gestionnaire de sauvegardes](https://docs.nocobase.com/handbook/backups)

### Formulaires publics

Partagez des formulaires publics en externe pour collecter des informations auprès d'utilisateurs anonymes.

![20241201165614](https://static-docs.nocobase.com/20241201165614.png)

Documentation de référence :

* [Formulaires publics](https://docs.nocobase.com/handbook/public-forms)

### Source de données : KingbaseES

Utilisez la base de données KingbaseES comme source de données, que ce soit comme base de données principale ou externe.

![20241024121815](https://static-docs.nocobase.com/20241024121815.png)

Documentation de référence :

* [Source de données : Base de données KingbaseES](https://docs.nocobase.com/handbook/data-source-kingbase)

### Source de données : Oracle externe

Utilisez des bases de données Oracle externes comme source de données.

![628abc5eb797e6b903d4b548f773a13b.png](https://static-docs.nocobase.com/628abc5eb797e6b903d4b548f773a13b.png)

Documentation de référence :

* [Source de données externe : Oracle](https://docs.nocobase.com/handbook/data-source-external-oracle)

### Champ de collection : Pièces jointes (URL)

Prend en charge les pièces jointes basées sur des URL.

![e8772bec3d4b1771c1b21d087c9a4185.png](https://static-docs.nocobase.com/e8772bec3d4b1771c1b21d087c9a4185.png)

Documentation de référence :

* [Champ de table de données : Pièces jointes (URL)](https://docs.nocobase.com/handbook/field-attachment-url)

### Composant de champ : Masque

![20241201165938](https://static-docs.nocobase.com/20241201165938.png)

Documentation de référence :

* [Composant de champ : Masque](https://docs.nocobase.com/handbook/field-component-mask)

### Workflow : JavaScript

Les nœuds JavaScript permettent aux utilisateurs d'exécuter du JavaScript dans un workflow. Le script peut utiliser des variables des nœuds en amont du processus comme paramètres, et la valeur de retour du script peut être utilisée dans les nœuds en aval.

![20241202203655](https://static-docs.nocobase.com/20241202203655.png)

Documentation de référence :

* [Nœud de workflow - JavaScript](https://docs.nocobase.com/handbook/workflow-javascript)

### Visualisation de données : ECharts

Ajout d'ECharts, prenant en charge les graphiques en entonnoir, radar et plus encore, et offrant des configurations plus conviviales.

![data-visualization-echarts](https://static-docs.nocobase.com/202410091022965.png)

Documentation de référence :

* [Visualisation de données : Echarts](https://docs.nocobase.com/handbook/data-visualization-echarts)

### Bloc : Formulaire en plusieurs étapes

Divisez le formulaire comportant de nombreux champs en plusieurs étapes pour alléger la charge des utilisateurs.

![a503e153e8d714b9ca56f512142aeef1.png](https://static-docs.nocobase.com/a503e153e8d714b9ca56f512142aeef1.png)

Documentation de référence :

* [Bloc : Formulaire en plusieurs étapes](https://docs.nocobase.com/handbook/block-multi-step-from)

### Bloc : Panneau d'actions

Conçu pour héberger diverses actions rapides, prend actuellement en charge :

* Lien
* Scanner un code QR
* Fenêtre contextuelle
* Requête personnalisée

Prend en charge les dispositions en grille et en liste.

![9942e6741e99195713f9e2981b02f228.png](https://static-docs.nocobase.com/9942e6741e99195713f9e2981b02f228.png)

Documentation de référence :

* [Bloc : Panneau d'actions](https://docs.nocobase.com/handbook/block-action-panel)

## Fonctionnalités supprimées

### Plugin de sauvegarde et restauration obsolète

Depuis NocoBase v0.19, nous avons introduit le plugin `@nocobase/plugin-backup-restore` pour la sauvegarde et la restauration d'applications. Cependant, les retours des utilisateurs ont révélé plusieurs limitations dans ses fonctionnalités :

1. Impossible de sauvegarder et restaurer les métadonnées au niveau de la base de données, telles que les valeurs par défaut des champs de la base de données et les index uniques.
2. Impossible de gérer les objets de base de données comme les vues, les procédures stockées, les fonctions et les déclencheurs lors de la sauvegarde ou de la restauration.
3. Nécessité de configurer individuellement les `dumpRules` pour chaque formulaire de plugin, nécessitant souvent une logique personnalisée de la part des développeurs de plugins pour éviter les échecs du processus de sauvegarde ou de restauration.
4. La conception complexe du regroupement des sauvegardes augmentait la charge cognitive et pouvait entraîner des échecs de sauvegarde ou une perte de données si la sélection n'était pas correcte.
5. Le processus de sauvegarde et de restauration se déroulait au niveau de la couche applicative, ce qui signifie qu'il échouait si l'application ne pouvait pas démarrer.

Après mûre réflexion, à partir de la version v1.4, nous avons décidé de rendre ce plugin obsolète. Pour la nouvelle solution de sauvegarde, veuillez vous référer à la documentation ci-dessous.

Documentation de référence :

* [Comment sauvegarder et restaurer NocoBase](https://www.nocobase.com/en/blog/nocobase-backup-restore)
