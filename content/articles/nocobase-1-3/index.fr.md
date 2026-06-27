---
title: "NocoBase 1.3 : source de données API REST, mobile v2 et plus de fonctionnalités"
description: "NocoBase 1.3 introduit les sources de données API REST et MSSQL, la prise en charge de l'ouverture de pop-ups via URL, la configuration dynamique des composants de champ, une version mobile améliorée, l'authentification WeCom, les tableaux many-to-many, et un nouveau nœud de calcul de date dans les workflows."
---

À partir de la version 1.3, NocoBase propose deux branches principales : **main** et **next**.

- La branche **main** (version bêta) se concentre sur les corrections de bugs, garantissant une version stable pour les utilisateurs.
- La branche **next** (version alpha) contient certaines nouvelles fonctionnalités non encore publiées. Cette version est instable et est destinée aux développeurs ou testeurs souhaitant découvrir les nouvelles fonctionnalités en avant-première ou effectuer des tests de compatibilité.

Les nouvelles fonctionnalités de la version bêta 1.3 incluent :

## Cœur

### Prise en charge de l'ouverture de fenêtres contextuelles via une URL

<video width="100%" controls="">
  <source src="https://static-docs.nocobase.com/1d1c69d92d778fdbce569e76551b2f1c.mp4" type="video/mp4">
</video>

Documentation de référence :

- [Fenêtre contextuelle](https://docs.nocobase.com/handbook/ui/pop-up)

### Prise en charge de l'ouverture de fenêtres contextuelles en tant que page

Une nouvelle option « page » a été ajoutée pour les opérations de fenêtre contextuelle.

![4a75fb85c9ee716316b8286e5b9473c0.png](https://static-docs.nocobase.com/4a75fb85c9ee716316b8286e5b9473c0.png)

Documentation de référence :

- [Fenêtre contextuelle](https://docs.nocobase.com/handbook/ui/pop-up)

### Les champs prennent en charge la configuration des attributs de style

![04e31b81fb3a9deb16b917431abfe695.png](https://static-docs.nocobase.com/04e31b81fb3a9deb16b917431abfe695.png)

Documentation de référence :

- [Paramètres des champs / Style](https://docs.nocobase.com/handbook/ui/fields/field-settings/style)

### Markdown et iframe HTML prennent en charge le moteur de templates Handlebars

![20240811205239](https://static-docs.nocobase.com/20240811205239.png)

Documentation de référence :

- [Moteur de templates Handlebars pour Markdown](https://docs.nocobase.com/handbook/ui/blocks/other-blocks/markdown#handlebars)
- [Moteur de templates Handlebars pour iframe HTML](https://docs.nocobase.com/handbook/block-iframe#handlebars)

### Prise en charge de la configuration dynamique des composants de champ

![20240807092556.png](https://static-docs.nocobase.com/20240807092556.png)

Documentation de référence :

- [Paramètres des champs / Composant de champ](https://docs.nocobase.com/handbook/ui/fields/field-settings/field-component)
- [Exemples de plugins / Composant de champ avec valeur](https://docs.nocobase.com/plugin-samples/field/value)

## Plugins

### Source de données API REST

![20240721171420.png](https://static-docs.nocobase.com/20240721171420.png)

Documentation de référence :

- [Source de données / Source de données API REST](https://docs.nocobase.com/handbook/data-source-rest-api)

### Source de données externe MSSQL

![aac26e115213a2adbfbb5dfcf0e7ddc5.png](https://static-docs.nocobase.com/aac26e115213a2adbfbb5dfcf0e7ddc5.png)

Documentation de référence :

- [Source de données / Base de données externe / MSSQL externe](https://docs.nocobase.com/handbook/data-source-external-mssql)

### Mobile V2

![e88f4f84b47f9076d3ae518ff4d1cc15.png](https://static-docs.nocobase.com/e88f4f84b47f9076d3ae518ff4d1cc15.png)

Documentation de référence :

- [Mobile](https://docs.nocobase.com/handbook/mobile)

### Plusieurs-à-plusieurs (tableau)

![202407051108180.png](https://static-docs.nocobase.com/202407051108180.png)

Documentation de référence :

- [Plusieurs-à-plusieurs (tableau)](https://docs.nocobase.com/handbook/field-m2m-array)

### Authentification : WeCom

![202406272115805.png](https://static-docs.nocobase.com/202406272115805.png)

Documentation de référence :

- [Authentification : WeCom](https://docs.nocobase.com/handbook/wecom/auth)

### Workflow : Nœud de calcul de date

![0975e0b188846624ec6d66f46b3f25b0.png](https://static-docs.nocobase.com/0975e0b188846624ec6d66f46b3f25b0.png)

Documentation de référence :

- [Workflow : Nœud de calcul de date](https://docs.nocobase.com/handbook/workflow-date-calculation)

## Changements importants

### La variable d'environnement `DB_TIMEZONE` remplacée par `TZ`

La nouvelle variable d'environnement `TZ` a été ajoutée pour définir le fuseau horaire de l'application, la valeur par défaut étant le fuseau horaire du système d'exploitation. L'ancienne variable `DB_TIMEZONE` reste compatible mais est dépréciée.

Référence :

- [Variable d'environnement / TZ](https://docs.nocobase.com/welcome/getting-started/env#tz)
