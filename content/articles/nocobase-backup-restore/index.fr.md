---
title: "Comment sauvegarder et restaurer NocoBase"
description: "Comment gérer la sauvegarde et la restauration dans la nouvelle version ? Cet article présentera en détail la nouvelle solution de sauvegarde."
---

## Contexte

À partir de NocoBase v0.19, nous avons introduit le plugin `@nocobase/plugin-backup-restore` pour la sauvegarde et la restauration des applications. Cependant, l'expérience utilisateur réelle n'a pas été idéale, avec les problèmes clés suivants :

1. Le plugin ne prend pas en charge la sauvegarde et la restauration des métadonnées au niveau de la base de données, telles que les valeurs par défaut, les index uniques, etc.
2. Les vues de base de données, procédures stockées, fonctions, déclencheurs et autres composants ne peuvent pas être sauvegardés ou restaurés.
3. Chaque formulaire de plugin nécessite une configuration séparée de `dumpRules`, et les développeurs de plugins peuvent avoir besoin d'implémenter une logique personnalisée. Sans cela, la sauvegarde et la restauration peuvent facilement échouer.
4. La conception du regroupement des sauvegardes est complexe et a une courbe d'apprentissage élevée. Une sélection inappropriée pourrait entraîner un échec de la sauvegarde ou une perte de données.
5. Le processus de sauvegarde et de restauration se produit au niveau de la couche applicative. Si l'application ne parvient pas à démarrer, la sauvegarde ou la restauration échouera également.

Après mûre réflexion, à partir de la version v1.4, nous avons décidé de déprécier ce plugin. Alors, comment la sauvegarde et la restauration doivent-elles être gérées dans la nouvelle version ? Cet article présentera en détail la nouvelle solution de sauvegarde.

## Quelles Données Doivent Être Sauvegardées ?

Dans le processus de sauvegarde et de restauration de NocoBase, les types de données suivants sont principalement impliqués :

* **Données de la Base de Données Principale** : Les types de base de données principales pris en charge incluent PostgreSQL, MySQL, MariaDB et KingbaseES.
* **Données de la Base de Données Externe** : Les types de base de données externes pris en charge incluent PostgreSQL, MySQL, MariaDB, MSSQL, Oracle et KingbaseES.
* **Données de la Base de Données de la Sous-application** : Chaque sous-application est une base de données indépendante. Si vous utilisez PostgreSQL, différentes sous-applications peuvent également être différenciées par des schémas.
* **Données du Répertoire de Stockage** : Vous pouvez sauvegarder l'intégralité du dossier ou seulement des données importantes spécifiques, telles que :
  * **Données de Pièces Jointes** : Fichiers dans le répertoire `./storage/uploads`, qui est le stockage local du gestionnaire de fichiers.
  * **Code du Plugin** : Plugins dans le répertoire `./storage/plugins`, y compris les plugins commerciaux et les plugins tiers.

## Processus de Sauvegarde et de Restauration

### 1. Sauvegarde des Données de la Base de Données

Les commandes de sauvegarde pour différentes bases de données sont les suivantes :

#### PostgreSQL

```bash
pg_dump -U [nom_utilisateur] -h [hôte] -p [port] -F c -b --quote-all-identifiers -f [chemin_fichier_sauvegarde] [nom_base_de_données]
```

#### MySQL/MariaDB

```bash
mysqldump -u [nom_utilisateur] -p -h [hôte] -P [port] --databases [nom_base_de_données] --replace --single-transaction --column-statistics=0 --skip-lock-tables --routines --triggers > [chemin_fichier_sauvegarde].sql
```

### 2. Restauration de la Sauvegarde dans la Base de Données de l'Application Cible

Les commandes de restauration pour différentes bases de données sont les suivantes :

#### PostgreSQL

```bash
pg_restore -U [nom_utilisateur] -h [hôte] -p [port] -d [nom_base_de_données] --clean --if-exists --no-owner [chemin_fichier_sauvegarde]
```

#### MySQL/MariaDB

```bash
mysql -u [nom_utilisateur] -p -h [hôte] -P [port] [nom_base_de_données] < [chemin_fichier_sauvegarde].sql
```

### 3. Remplacement du Stockage de l'Application Cible par le Stockage de Sauvegarde

```bash
# 1. Sauvegarder le répertoire /app2/storage/ vers /app2/storage-bak/
mv /app2/storage /app2/storage-bak

# 2. Copier tout le contenu de /app1/storage/ vers /app2/storage/
cp -r /app1/storage/. /app2/storage/
```

### 4. Exécuter la Commande de Mise à Niveau et Démarrer l'Application

```bash
# Mettre à niveau l'application
yarn nocobase upgrade

# Démarrer l'application en environnement de production
yarn start

# Démarrer l'application en environnement de développement local
yarn dev
```

Remarque :

* Si vous utilisez Docker, redémarrez simplement le conteneur.

## Plugin Gestionnaire de Sauvegardes

À partir de NocoBase v1.4, les utilisateurs des éditions Professionnelle ou Entreprise peuvent utiliser directement le tout nouveau plugin [Gestionnaire de Sauvegardes](https://docs.nocobase.com/handbook/backups) pour gérer facilement la sauvegarde et la restauration des données de l'application.
