---
title: "Mises à jour hebdomadaires de NocoBase : Amélioration de la convivialité des workflows"
description: "Mises à jour hebdomadaires de NocoBase 2024-11-14"
---

Résumez les journaux de mise à jour hebdomadaires du produit. Les dernières versions sont disponibles sur [notre blog](https://www.nocobase.com/en/blog/tags/release-notes).

NocoBase est actuellement mis à jour avec deux branches : `main` et `next`.

* `main` : La version la plus stable à ce jour, recommandée pour l'installation ;
* `next` : Version alpha, incluant certaines nouvelles fonctionnalités non encore publiées. Cette version peut ne pas être complètement stable et convient aux développeurs ou testeurs souhaitant découvrir les nouvelles fonctionnalités à l'avance ou effectuer des tests de compatibilité.

![main.png](https://static-docs.nocobase.com/47a3c71734c1d0f908b51f9ebd53c0ac.png)

## [v1.3.45-beta](https://www.nocobase.com/en/blog/v1.3.45-beta)

*Date de publication : 2024-11-06*

### 🐛 Corrections de bugs

- **[client]** L'autorisation pour le champ de table d'association dans le tableau est basée sur l'autorisation du champ d'association correspondant ([#5569](https://github.com/nocobase/nocobase/pull/5569)) par @katherinehhh
- **[Action : Exporter les enregistrements]** Correction de l'exportation avec i18n ([#5591](https://github.com/nocobase/nocobase/pull/5591)) par @chareice
- **[Action : Importer les enregistrements]** Correction du problème d'importation de l'association "appartient à" ([#5417](https://github.com/nocobase/nocobase/pull/5417)) par @chareice

## [v1.3.47-beta](https://www.nocobase.com/en/blog/v1.3.47-beta)

*Date de publication : 2024-11-08*

### 🚀 Améliorations

- **[Authentification]** Optimisation du message d'erreur pour la connexion et l'inscription ([#5612](https://github.com/nocobase/nocobase/pull/5612)) par @2013xile

### 🐛 Corrections de bugs

- **[client]**

  - Correction des problèmes de valeur par défaut dans les sous-tableaux ([#5607](https://github.com/nocobase/nocobase/pull/5607)) par @zhangzhonghe
  - Correction du problème de prise en charge de la recherche floue pour les champs d'association avec un champ de titre de type chaîne ([#5611](https://github.com/nocobase/nocobase/pull/5611)) par @katherinehhh
- **[Authentification]** Correction du problème où les utilisateurs ne peuvent pas changer de mot de passe lors de la connexion avec un authentificateur sans mot de passe ([#5609](https://github.com/nocobase/nocobase/pull/5609)) par @2013xile

## [v1.3.48-beta](https://www.nocobase.com/en/blog/v1.3.48-beta)

*Date de publication : 2024-11-11*

### 🚀 Améliorations

- **[client]** Prise en charge du masquage des éléments de menu ([#5624](https://github.com/nocobase/nocobase/pull/5624)) par @chenos
- **[serveur]** Ajout de la variable d'environnement DB_SQL_BENCHMARK ([#5615](https://github.com/nocobase/nocobase/pull/5615)) par @chareice

### 🐛 Corrections de bugs

- **[client]** Prise en charge de la collection de fichiers comme cible de l'association un-à-plusieurs ([#5619](https://github.com/nocobase/nocobase/pull/5619)) par @mytharcher
- **[Action : Importer les enregistrements]** Correction du problème d'impossibilité d'importer des données de relation plusieurs-à-plusieurs via le champ id ([#5623](https://github.com/nocobase/nocobase/pull/5623)) par @chareice

## [v1.3.49-beta](https://www.nocobase.com/en/blog/v1.3.49-beta)

*Date de publication : 2024-11-13*

### 🚀 Améliorations

- **[client]** Prise en charge des champs un-à-un et plusieurs-à-plusieurs (tableau) pour utiliser la collection de fichiers ([#5637](https://github.com/nocobase/nocobase/pull/5637)) par @mytharcher
- **[évaluateurs]** Utilisation de Formula.js comme évaluateur par défaut dans le nœud de calcul ([#5626](https://github.com/nocobase/nocobase/pull/5626)) par @mytharcher

### 🐛 Corrections de bugs

- **[client]** Correction du problème de réinitialisation qui rétablit le titre du bouton de filtre par défaut ([#5635](https://github.com/nocobase/nocobase/pull/5635)) par @katherinehhh
- **[Action : Importer les enregistrements]** Correction du problème d'impossibilité d'importer des données de relation plusieurs-à-plusieurs via le champ id ([#5623](https://github.com/nocobase/nocobase/pull/5623)) par @chareice

![next.png](https://static-docs.nocobase.com/8ed17a0f08cc585018f6de6c8b13947d.png)

## [v1.4.0-alpha.6](https://www.nocobase.com/en/blog/v1.4.0-alpha.6)

*Date de publication : 2024-11-07*

### 🎉 Nouvelles fonctionnalités

- **[client]** Prise en charge des options de configuration pour masquer les colonnes du tableau ([#5597](https://github.com/nocobase/nocobase/pull/5597)) par @zhangzhonghe

### 🚀 Améliorations

- **[Gestionnaire de source de données]** Ajustement des catégories de tableaux pour qu'elles soient chargées à partir de la source de données principale et suppression du niveau global ([#5602](https://github.com/nocobase/nocobase/pull/5602)) par @katherinehhh
- **[Gestionnaire de notifications]** Mise à jour de la structure des messages pour inclure les destinataires dans les données du journal de notification ([#5603](https://github.com/nocobase/nocobase/pull/5603)) par @sheldon66

### 🐛 Corrections de bugs

- **[client]** Correction du problème de barre de défilement du tableau en mode non-configuration ([#5599](https://github.com/nocobase/nocobase/pull/5599)) par @katherinehhh
- **[Action : Importer les enregistrements]** Correction de l'importation avec le champ date ([#5606](https://github.com/nocobase/nocobase/pull/5606)) par @chareice

## [v1.4.0-alpha.7](https://www.nocobase.com/en/blog/v1.4.0-alpha.7)

*Date de publication : 2024-11-11*

### 🎉 Nouvelles fonctionnalités

- **[client]** Prise en charge des propriétés de délimiteurs pour le composant d'expression variable ([#5620](https://github.com/nocobase/nocobase/pull/5620)) par @mytharcher
- **[Workflow]** Prise en charge du déplacement des nœuds aval vers de nouvelles branches lors de la création d'un nœud avec des branches ([#5570](https://github.com/nocobase/nocobase/pull/5570)) par @mytharcher

### 🚀 Améliorations

- **[client]**

  - Optimisation de la liste des champs : suppression des champs de relation et de l'étiquette "Doublon" ([#5616](https://github.com/nocobase/nocobase/pull/5616)) par @katherinehhh
  - Prise en charge de `getFilterTargetKey()` à partir de la classe `Collection` ([#5617](https://github.com/nocobase/nocobase/pull/5617)) par @mytharcher
- **[Source de données : Principale]** Refonte de l'API collections:list pour améliorer les performances ([#5610](https://github.com/nocobase/nocobase/pull/5610)) par @chareice
- **[Gestionnaire de notifications]** Amélioration de l'interface utilisateur du gestionnaire de canaux de notification ([#5621](https://github.com/nocobase/nocobase/pull/5621)) par @sheldon66

## [v1.4.0-alpha.8](https://www.nocobase.com/en/blog/v1.4.0-alpha.8)

*Date de publication : 2024-11-11*

### 🎉 Nouvelles fonctionnalités

- **[WeCom]**
  - Prise en charge de la connexion automatique lors de la visite des pages de l'application dans le navigateur WeCom par @chenzhizdt
  - Prise en charge de l'utilisation de Markdown et de cartes modèles dans les notifications par @chenzhizdt

## À propos de NocoBase

NocoBase est une plateforme no-code privée et open source offrant un contrôle total et une évolutivité infinie. Elle permet aux équipes de s'adapter rapidement aux changements tout en réduisant considérablement les coûts. Évitez des années de développement et des investissements substantiels en déployant NocoBase en quelques minutes.

<iframe src="https://cdn.embedly.com/widgets/media.html?src=https%3A%2F%2Fwww.youtube.com%2Fembed%2FhOM2MyzHn9I&display_name=YouTube&url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DhOM2MyzHn9I&image=http%3A%2F%2Fi.ytimg.com%2Fvi%2FhOM2MyzHn9I%2Fhqdefault.jpg&key=a19fcc184b9711e1b4764040d3dc5c07&type=text%2Fhtml&schema=youtube" allowfullscreen="" frameborder="0" height="480" width="854" title="" class="dc n pc cp bh" scrolling="no"></iframe>

Découvrez NocoBase en 3 minutes !

## 👇 Obtenez NocoBase

[**Page d'accueil**](https://www.nocobase.com/)

[**Démo**](https://demo.nocobase.com/new)

[**Documentation**](https://docs.nocobase.com/)

[**GitHub**](https://github.com/nocobase/nocobase)
