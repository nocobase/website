---
title: "Annonce de NocoBase v1.9.0"
description: "Validation des données et planification des tâches améliorées, prenant en charge le découplage des services et l'arrêt progressif pour améliorer la stabilité et la flexibilité globales du système."
---

## Nouvelle fonctionnalité

### Règles de validation des champs

Permet de configurer plusieurs règles de validation pour les champs — comme obligatoire, format, longueur, plage et expressions personnalisées.
Les données saisies sont automatiquement validées lors de la soumission du formulaire pour garantir l'exactitude et la cohérence.
Les règles de validation peuvent être configurées de manière flexible dans les paramètres du champ.

![Field_validations.gif](https://static-docs.nocobase.com/20251031111521_rec_-6mjzt5.gif)

Référence : [Validation des champs](https://docs.nocobase.com/handbook/data-modeling/collection-fields/validation)

### Le bloc Tableau prend en charge les paramètres de colonne

Le bloc Tableau inclut désormais une fonctionnalité de paramètres de colonne, permettant aux utilisateurs d'ajuster l'ordre, la visibilité et la position épinglée des colonnes sans entrer en mode édition — rendant l'affichage des données plus flexible et convivial.

![20251031113318_rec_-5ffltd.gif](https://static-docs.nocobase.com/20251031113318_rec_-5ffltd.gif)

### Mode de déclenchement Avant l'enregistrement des données pour les Approbations

Les Approbations prennent désormais en charge un mode de déclenchement Avant l'enregistrement des données — lorsqu'il est activé, les données ne seront pas stockées au début de l'approbation et ne seront sauvegardées qu'après l'approbation.

![image-m52wzz.png](https://static-docs.nocobase.com/image-m52wzz.png)

### Le déclencheur d'approbation expose la variable ID d'approbation

Le déclencheur d'approbation expose désormais la variable ID d'approbation, permettant de la référencer dans les workflows et processus d'automatisation pour une configuration plus flexible et un suivi des données.

![approcal_id.png](https://static-docs.nocobase.com/image-qsspfn.png)

### [Gestionnaire de tâches asynchrones] Prise en charge de la division des services via des variables d'environnement et des files d'attente

Introduit un nouveau mécanisme de division des services, permettant aux services de tâches asynchrones et de workflows de s'exécuter indépendamment via la variable d'environnement `WORKER_MODE` — permettant un déploiement multi-nœuds et une optimisation des performances.

![20250803214857](https://static-docs.nocobase.com/20250803214857.png)

Référence : [Division des services](https://docs.nocobase.com/welcome/getting-started/deployment/cluster-mode/services-splitting)

### Nouvelle file d'attente d'événements pour le traitement des messages de file d'attente

Ajoute une file d'attente d'événements dédiée pour le traitement des messages de file d'attente système, améliorant le traitement des tâches asynchrones et la fiabilité.

Référence : [Mode cluster : File d'attente de messages](https://docs.nocobase.com/welcome/getting-started/deployment/cluster-mode#message-queue)

### Prise en charge du cycle de vie d'arrêt progressif

Introduit la gestion de l'arrêt progressif.
Lorsque le processus de l'application reçoit un signal SIGTERM ou SIGINT, il lance désormais une séquence d'arrêt appropriée pour éviter les problèmes liés aux opérations en cours.

## Améliorations

### Les tables système utilisent des identifiants de type Snowflake 53 bits

Met à jour les identifiants des tables système qui utilisaient auparavant des clés primaires auto-incrémentées sans unicité globale vers des identifiants de type Snowflake 53 bits pour une identification globalement unique.

![image-jrjc7e.png](https://static-docs.nocobase.com/image-jrjc7e.png)

### Afficher et reprendre les tâches à partir de workflows désactivés

Les blocs de tâches manuelles affichent désormais les tâches en attente même provenant de workflows désactivés et permettent aux utilisateurs de continuer à les traiter.

### Améliorations du gestionnaire de courrier

* Les données de courrier prennent en charge la resynchronisation
* Permet de redimensionner les images insérées dans l'éditeur d'email.
* L'éditeur de texte enrichi prend désormais en charge les sauts de ligne souples, améliorant l'expérience de formatage des emails.
* Performances de la liste des emails améliorées pour des opérations plus fluides.

![20251031234300_rec_-jifryr.gif](https://static-docs.nocobase.com/20251031234300_rec_-jifryr.gif)

### Optimisation du module Workflow

* Performances de requête optimisées dans l'exécution de la file d'attente des workflows en introduisant des champs et index séparés pour une récupération plus rapide des données.

![Workflow Module.png](https://static-docs.nocobase.com/image-5b3byb.png)
