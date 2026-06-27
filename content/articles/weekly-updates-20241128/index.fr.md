---
title: "Mises à jour hebdomadaires de NocoBase : Optimisation du plugin REST API"
description: "Les mises à jour de cette semaine incluent : optimisation du plugin REST API, prise en charge de l'activation en masse des plugins dans l'interface, et plus encore."
---

Résumez les journaux de mise à jour hebdomadaires du produit. Les dernières versions sont consultables sur [notre blog](https://www.nocobase.com/en/blog/tags/release-notes).

**NocoBase est actuellement mis à jour avec trois branches : `main`, `next` et `develop`.**

![version.png](https://static-docs.nocobase.com/ba5f04e27e99c625cb3822da5df07860.png)

* `main` : La version la plus stable à ce jour, recommandée pour l'installation ;
* `next` : Version bêta, contient les nouvelles fonctionnalités à venir et a été testée préliminairement. Il peut y avoir des problèmes connus ou inconnus. Elle est principalement destinée aux utilisateurs testeurs pour recueillir des retours et optimiser davantage les fonctions. Idéale pour les utilisateurs testeurs qui souhaitent découvrir les nouvelles fonctionnalités tôt et donner leur avis ;
* `develop` : Version alpha, contient le code de fonctionnalité le plus récent, peut être incomplète ou instable, principalement destinée au développement interne et à l'itération rapide. Adaptée aux utilisateurs techniques intéressés par les fonctionnalités de pointe du produit, mais avec des problèmes potentiels et des fonctions incomplètes. Ne pas utiliser en production.

![main.png](https://static-docs.nocobase.com/47a3c71734c1d0f908b51f9ebd53c0ac.png)

## [v1.3.52](https://www.nocobase.com/en/blog/v1.3.52)

*Date de sortie : 2024-11-21*

### 🚀 Améliorations

- **[Workflow]**

  - Suppression de la limite de pages dans le nœud de requête ([#5694](https://github.com/nocobase/nocobase/pull/5694)) par @mytharcher
  - Modification pour que les exécutions ne soient pas supprimées lors de la suppression d'un workflow ([#5666](https://github.com/nocobase/nocobase/pull/5666)) par @mytharcher
- **[Source de données : API REST]** Optimisation des descriptions textuelles du plugin API REST par @katherinehhh

![next.png](https://static-docs.nocobase.com/8ed17a0f08cc585018f6de6c8b13947d.png)

## [v1.4.0-beta.2](https://www.nocobase.com/en/blog/v1.4.0-beta.2)

*Date de sortie : 2024-11-21*

### 🐛 Corrections de bugs

- **[build]** Revenir de l'outil de construction client `rspack` à `vite` pour corriger le problème où la commande `yarn dev` signalait une erreur après avoir exécuté la commande create-nocobase-app ([#5697](https://github.com/nocobase/nocobase/pull/5697)) par @gchust
- **[client]** Correction du problème où la colonne fixée à droite ne s'alignait pas à droite lorsqu'il y avait moins de colonnes ([#5690](https://github.com/nocobase/nocobase/pull/5690)) par @katherinehhh
- **[Mobile]** Correction du problème où la fenêtre modale 'Attribuer des valeurs de champ' était masquée sur la page de configuration mobile ([#5701](https://github.com/nocobase/nocobase/pull/5701)) par @zhangzhonghe

## [v1.4.0-beta.3](https://www.nocobase.com/en/blog/v1.4.0-beta.3)

*Date de sortie : 2024-11-21*

### 🐛 Corrections de bugs

- **[client]**

  - Suppression du bouton "Synchroniser depuis la base de données" dans la vue de collection de source de données externe ([#5696](https://github.com/nocobase/nocobase/pull/5696)) par @katherinehhh
  - Ajout d'un repli pour les valeurs non-chaîne de caractères utilisées dans `Variable.TextArea` ([#5704](https://github.com/nocobase/nocobase/pull/5704)) par @mytharcher
- **[Calendrier]** Correction du problème où les événements ne s'affichaient pas dans le bloc calendrier lorsque les dates de début et de fin s'étendaient sur plusieurs mois ([#5699](https://github.com/nocobase/nocobase/pull/5699)) par @katherinehhh

## [v1.4.0-beta.5](https://www.nocobase.com/en/blog/v1.4.0-beta.5)

*Date de sortie : 2024-11-24*

### 🐛 Corrections de bugs

- **[client]**
  - Correction du problème de largeur d'étiquette pour les champs d'association dans les dispositions horizontales ([#5709](https://github.com/nocobase/nocobase/pull/5709)) par @katherinehhh
  - Correction du lien des données d'association dans les sous-tableaux imbriqués au sein de sous-formulaires multicouches ([#5710](https://github.com/nocobase/nocobase/pull/5710)) par @katherinehhh
  - Correction du problème de largeur d'étiquette pour les champs d'association dans les dispositions horizontales ([#5709](https://github.com/nocobase/nocobase/pull/5709)) par @katherinehhh

## [v1.4.0-beta.6](https://www.nocobase.com/en/blog/v1.4.0-beta.6)

*Date de sortie : 2024-11-26*

### 🚀 Améliorations

- **[client]** Prise en charge de l'activation en masse des plugins dans l'interface ([#5730](https://github.com/nocobase/nocobase/pull/5730)) par @chenos

### 🐛 Corrections de bugs

- **[client]** Correction du problème de largeur minimale de l'étiquette du sous-tableau en mode horizontal ([#5719](https://github.com/nocobase/nocobase/pull/5719)) par @katherinehhh

## [v1.4.0-beta.7](https://www.nocobase.com/en/blog/v1.4.0-beta.7)

*Date de sortie : 2024-11-27*

### 🎉 Nouvelles fonctionnalités

- **[Authentification]** Permet d'ajouter plus de champs de la collection utilisateur dans le formulaire d'inscription ([#5741](https://github.com/nocobase/nocobase/pull/5741)) par @2013xile

### 🐛 Corrections de bugs

- **[client]** Correction du problème où l'étiquette de l'option sélectionnée n'était pas chargée lors du premier rendu. ([#5736](https://github.com/nocobase/nocobase/pull/5736)) par @sheldon66

## [v1.4.0-beta.8](https://www.nocobase.com/en/blog/v1.4.0-beta.8)

*Date de sortie : 2024-11-27*

### 🐛 Corrections de bugs

- **[Notification : Message dans l'application]** Suppression de la logique de découpage de chaîne du titre du message dans l'application. ([#5728](https://github.com/nocobase/nocobase/pull/5728)) par @sheldon66

![develop.png](https://static-docs.nocobase.com/7fcdd9456a17286d8a439eee52bcb8d2.png)

## [v1.5.0-alpha.5](https://www.nocobase.com/en/blog/v1.5.0-alpha.5)

*Date de sortie : 2024-11-23*

### 🐛 Corrections de bugs

- **[build]** Correction du problème où l'exécution de `yarn dev` après create-nocobase-app entraînait une erreur ([#5708](https://github.com/nocobase/nocobase/pull/5708)) par @gchust

## À propos de NocoBase

NocoBase est une plateforme no-code open-source privée offrant un contrôle total et une évolutivité infinie. Elle permet aux équipes de s'adapter rapidement aux changements tout en réduisant considérablement les coûts. Évitez des années de développement et des investissements substantiels en déployant NocoBase en quelques minutes.

<iframe src="https://cdn.embedly.com/widgets/media.html?src=https%3A%2F%2Fwww.youtube.com%2Fembed%2FhOM2MyzHn9I&display_name=YouTube&url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DhOM2MyzHn9I&image=http%3A%2F%2Fi.ytimg.com%2Fvi%2FhOM2MyzHn9I%2Fhqdefault.jpg&key=a19fcc184b9711e1b4764040d3dc5c07&type=text%2Fhtml&schema=youtube" allowfullscreen="" frameborder="0" height="480" width="854" title="" class="dc n pc cp bh" scrolling="no"></iframe>

Découvrez NocoBase en 3 minutes !

## 👇 Obtenir NocoBase

[**Page d'accueil**](https://www.nocobase.com/)

[**Démo**](https://demo.nocobase.com/new)

[**Documentation**](https://docs.nocobase.com/)

[**GitHub**](https://github.com/nocobase/nocobase)
