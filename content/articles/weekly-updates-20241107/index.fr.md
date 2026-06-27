---
title: "Mises à jour hebdomadaires de NocoBase : Ajout d'un nouveau canal de notification"
description: "Mises à jour hebdomadaires de NocoBase 2024-11-07"
---

Résumez les journaux de mise à jour hebdomadaires du produit, et les dernières versions peuvent être consultées sur [notre blog](https://www.nocobase.com/en/blog/tags/release-notes).

NocoBase est actuellement mis à jour avec deux branches : `main` et `next`.

* `main` : La version la plus stable à ce jour, recommandée pour l'installation ;
* `next` : Version alpha, incluant certaines nouvelles fonctionnalités non publiées. Cette version peut ne pas être complètement stable et convient aux développeurs ou testeurs souhaitant découvrir les nouvelles fonctionnalités à l'avance ou effectuer des tests de compatibilité.

![main.png](https://static-docs.nocobase.com/47a3c71734c1d0f908b51f9ebd53c0ac.png)

## [v1.3.43-beta](https://www.nocobase.com/en/blog/v1.3.43-beta)

*Date de sortie : 2024-11-05*

### 🚀 Améliorations

- **[client]** La précision numérique peut être configurée jusqu'à 8 chiffres ([#5552](https://github.com/nocobase/nocobase/pull/5552)) par @chenos

### 🐛 Corrections de bugs

- **[client]** Correction du style de liaison qui ne se mettait pas à jour dans le formulaire. ([#5539](https://github.com/nocobase/nocobase/pull/5539)) par @sheldon66
- **[Auth : Clés API]** Correction du chemin URL pour la page des paramètres des clés API ([#5562](https://github.com/nocobase/nocobase/pull/5562)) par @2013xile
- **[Mobile]** Correction du problème d'aperçu des images couvert par la page ([#5535](https://github.com/nocobase/nocobase/pull/5535)) par @zhangzhonghe
- **[Bloc : Carte]** Correction du rendu de la carte dans les sous-détails et de l'affichage incorrect des valeurs pour les champs vides ([#5526](https://github.com/nocobase/nocobase/pull/5526)) par @katherinehhh
- **[Collection : Arbre]** Correction des erreurs lors de la mise à jour de la collection de chemins ([#5551](https://github.com/nocobase/nocobase/pull/5551)) par @2013xile

## [v1.3.44-beta](https://www.nocobase.com/en/blog/v1.3.44-beta)

*Date de sortie : 2024-11-05*

### 🎉 Nouvelles fonctionnalités

- **[Auth : OIDC]** Ajout d'une option « activer la déconnexion initiée par le RP » par @2013xile

### 🐛 Corrections de bugs

- **[client]** Correction du problème de filtre lors de la définition d'un champ à sélection unique comme champ de titre dans la sélection d'association ([#5581](https://github.com/nocobase/nocobase/pull/5581)) par @katherinehhh

![next.png](https://static-docs.nocobase.com/8ed17a0f08cc585018f6de6c8b13947d.png)

## [v1.4.0-alpha.20241031134640](https://www.nocobase.com/en/blog/v1.4.0-alpha.20241031134640)

*Date de sortie : 2024-10-31*

### 🎉 Nouvelles fonctionnalités

- **[WeCom]** Ajout du canal de notification WeCom par @chenzhizdt

### 🚀 Améliorations

- **[client]** Restauration de la valeur par défaut lorsque le titre du champ est effacé ([#5549](https://github.com/nocobase/nocobase/pull/5549)) par @katherinehhh
- **[Gestionnaire de notifications]**

  - Ajout des composants UserSelect et UserAddition pour simplifier le développement des canaux de notification ([#5553](https://github.com/nocobase/nocobase/pull/5553)) par @2013xile
  - Ajout d'une API pour obtenir le registre des types de canaux du plugin de notification ([#5531](https://github.com/nocobase/nocobase/pull/5531)) par @mytharcher
  - Ajustement du nom du registre des types de canaux du plugin de notification ([#5532](https://github.com/nocobase/nocobase/pull/5532)) par @mytharcher
  - Ajout d'une API du plugin gestionnaire de notifications pour obtenir tous les types enregistrés ([#5529](https://github.com/nocobase/nocobase/pull/5529)) par @mytharcher
- **[Notification : Message in-app]** Amélioration de l'interface utilisateur des messages in-app et ajout de quelques journaux. ([#5550](https://github.com/nocobase/nocobase/pull/5550)) par @sheldon66

### 🐛 Corrections de bugs

- **[base de données]**

  - Correction de la mise à jour des options de collection avec la clé cible du filtre ([#5558](https://github.com/nocobase/nocobase/pull/5558)) par @chareice
  - Correction de la valeur incorrecte de primaryKeyField dans sequelize lorsqu'il fonctionne avec plusieurs clés cibles de filtre ([#5556](https://github.com/nocobase/nocobase/pull/5556)) par @chareice
- **[client]**

  - Correction du problème où les composants squelette dans les blocs de tableau ne disparaissaient pas ([#5548](https://github.com/nocobase/nocobase/pull/5548)) par @zhangzhonghe
  - Correction des problèmes avec l'action de suppression, les points de suspension du texte et l'affichage des nouvelles données dans le sous-tableau ([#5523](https://github.com/nocobase/nocobase/pull/5523)) par @katherinehhh
- **[Gestionnaire de sources de données]** Correction de la suppression d'une source de données en état d'échec ([#5554](https://github.com/nocobase/nocobase/pull/5554)) par @chareice
- **[Notification : Email]**

  - Correction de la requête pour les utilisateurs par identifiants dans la notification par e-mail ([#5533](https://github.com/nocobase/nocobase/pull/5533)) par @mytharcher
  - Correction de l'objet manquant dans la notification par e-mail basée sur les identifiants utilisateur ([#5534](https://github.com/nocobase/nocobase/pull/5534)) par @mytharcher
  - Correction du chemin du champ de réaction dans le formulaire dynamique de la notification par e-mail ([#5527](https://github.com/nocobase/nocobase/pull/5527)) par @mytharcher
- **[Champ de collection : Plusieurs à plusieurs (tableau)]** Correction du problème où le composant de sélection pour un champ plusieurs à plusieurs (tableau) n'avait qu'une seule option ([#5544](https://github.com/nocobase/nocobase/pull/5544)) par @2013xile
- **[Gestionnaire de notifications]** Correction du crash de la page dû à un mauvais type de canal ([#5528](https://github.com/nocobase/nocobase/pull/5528)) par @mytharcher
- **[Workflow : Nœud SQL]** Correction du problème de temporisation de « waitForLoadState('networkidle') » causé par SSE ([#5524](https://github.com/nocobase/nocobase/pull/5524)) par @hongboji
- **[Composant de champ : masque]** Correction du problème où les données originales ne pouvaient pas être affichées en cliquant si le composant était en lecture seule par @gchust
- **[Workflow : Événement d'action personnalisée]** Correction du problème de temporisation de « waitForLoadState('networkidle') » causé par SSE par @hongboji
- **[WeCom]** Correction du problème de réponse 404 introuvable lors de l'entrée dans l'application depuis le poste de travail WeCom par @chenzhizdt

## [v1.4.0-alpha.20241104151643](https://www.nocobase.com/en/blog/v1.4.0-alpha.20241104151643)

*Date de sortie : 2024-11-04*

### 🎉 Nouvelles fonctionnalités

- **[client]**
  - [tableau] Ajout d'une action « popup » pour configurer les actions ([#5580](https://github.com/nocobase/nocobase/pull/5580)) par @bignof
  - « Champs de configuration » prennent en charge le filtrage des champs ([#5471](https://github.com/nocobase/nocobase/pull/5471)) par @katherinehhh

### 🚀 Améliorations

- **[client]** Ajout de la prise en charge des paramètres de mise en page (labelAlign, labelWidth, labelWrap) ([#5521](https://github.com/nocobase/nocobase/pull/5521)) par @katherinehhh
- **[Gestionnaire multi-applications]** Démarrage rapide asynchrone des sous-applications ([#5571](https://github.com/nocobase/nocobase/pull/5571)) par @chenos
- **[Collection : Arbre]** Amélioration de la logique de chargement de la collection avec l'attribut de schéma ([#5541](https://github.com/nocobase/nocobase/pull/5541)) par @chareice

### 🐛 Corrections de bugs

- **[client]**
  - Le champ de recherche doit être recherché en fonction du texte traduit ([#5572](https://github.com/nocobase/nocobase/pull/5572)) par @katherinehhh
  - Correction du problème d'ajout de données au sous-tableau après suppression ([#5566](https://github.com/nocobase/nocobase/pull/5566)) par @katherinehhh

## [v1.4.0-alpha.20241105053324](https://www.nocobase.com/en/blog/v1.4.0-alpha.20241105053324)

*Date de sortie : 2024-11-05*

### 🐛 Corrections de bugs

- **[client]** Suppression de la zone de recherche lors de l'ajout d'un bloc à la page ([#5577](https://github.com/nocobase/nocobase/pull/5577)) par @katherinehhh

## [v1.4.0-alpha.20241105230315](https://www.nocobase.com/en/blog/v1.4.0-alpha.20241105230315)

*Date de sortie : 2024-11-06*

### 🐛 Corrections de bugs

- **[client]** Correction de l'erreur de résolution lors de la configuration des champs après l'ajout d'une nouvelle source de données ([#5576](https://github.com/nocobase/nocobase/pull/5576)) par @katherinehhh

## [v1.4.0-alpha.1](https://www.nocobase.com/en/blog/v1.4.0-alpha.1)

*Date de sortie : 2024-11-06*

### 🎉 Nouvelles fonctionnalités

- **[utils]** Prise en charge de l'utilisation de handlebars dans le contenu des messages ([#5559](https://github.com/nocobase/nocobase/pull/5559)) par @mytharcher
- **[client]** Le bloc tableau prend en charge les paramètres de taille ([#5563](https://github.com/nocobase/nocobase/pull/5563)) par @katherinehhh
- **[Notification : Message in-app]** Prise en charge des messages in-app pour le client mobile ([#5560](https://github.com/nocobase/nocobase/pull/5560)) par @sheldon66

### 🚀 Améliorations

- **[Gestionnaire de notifications]** Ajout des destinataires aux journaux de notification ([#5561](https://github.com/nocobase/nocobase/pull/5561)) par @sheldon66

### 🐛 Corrections de bugs

- **[client]** Correction de l'erreur lors de l'ouverture d'une popup dans le kanban ([#5592](https://github.com/nocobase/nocobase/pull/5592)) par @zhangzhonghe
- **[Contrôle d'accès]** Correction des métadonnées acl avec plusieurs clés cibles de filtre ([#5598](https://github.com/nocobase/nocobase/pull/5598)) par @chareice

## À propos de NocoBase

NocoBase est une plateforme no-code privée et open source offrant un contrôle total et une évolutivité infinie. Elle permet aux équipes de s'adapter rapidement aux changements tout en réduisant considérablement les coûts. Évitez des années de développement et des investissements substantiels en déployant NocoBase en quelques minutes.

<iframe src="https://cdn.embedly.com/widgets/media.html?src=https%3A%2F%2Fwww.youtube.com%2Fembed%2FhOM2MyzHn9I&display_name=YouTube&url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DhOM2MyzHn9I&image=http%3A%2F%2Fi.ytimg.com%2Fvi%2FhOM2MyzHn9I%2Fhqdefault.jpg&key=a19fcc184b9711e1b4764040d3dc5c07&type=text%2Fhtml&schema=youtube" allowfullscreen="" frameborder="0" height="480" width="854" title="" class="dc n pc cp bh" scrolling="no"></iframe>

Découvrez NocoBase en 3 minutes !

## 👇 Obtenez NocoBase

[**Page d'accueil**](https://www.nocobase.com/)

[**Démo**](https://demo.nocobase.com/new)

[**Documentation**](https://docs.nocobase.com/)

[**GitHub**](https://github.com/nocobase/nocobase)
