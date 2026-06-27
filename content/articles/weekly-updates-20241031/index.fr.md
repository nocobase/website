---
title: "Mises à jour hebdomadaires de NocoBase : Amélioration des performances de rendu des blocs de tableau, et plus encore"
description: "Mises à jour hebdomadaires de NocoBase 2024-10-31"
---

Résumez les journaux de mise à jour hebdomadaires du produit. Les dernières versions sont consultables sur [notre blog](https://www.nocobase.com/en/blog/tags/release-notes).

NocoBase est actuellement mis à jour avec deux branches : `main` et `next`.

* `main` : La version la plus stable à ce jour, recommandée pour l'installation ;
* `next` : Version alpha, incluant certaines nouvelles fonctionnalités non publiées. Cette version peut ne pas être complètement stable et convient aux développeurs ou testeurs souhaitant découvrir les nouvelles fonctionnalités à l'avance ou effectuer des tests de compatibilité.

![main.png](https://static-docs.nocobase.com/47a3c71734c1d0f908b51f9ebd53c0ac.png)

## [v1.3.38-beta](https://www.nocobase.com/en/blog/v1.3.38-beta)

*Date de sortie : 2024-10-24*

### 🐛 Corrections de bugs

- **[client]**

  - Problème de pagination dans le bloc liste avec une collection à pagination simple ([#5500](https://github.com/nocobase/nocobase/pull/5500)) par @katherinehhh
  - En mode non-configuration, afficher uniquement la collection actuelle dans le formulaire d'édition. ([#5499](https://github.com/nocobase/nocobase/pull/5499)) par @katherinehhh
- **[Workflow : nœud de requête HTTP]** Correction d'un problème d'espace blanc spécial apparaissant lors du collage de contenu dans la zone de texte variable ([#5497](https://github.com/nocobase/nocobase/pull/5497)) par @mytharcher
- **[Départements]** Correction du problème de vérification incorrecte des permissions de source de données externe sous le rôle de département par @2013xile

## [v1.3.39-beta](https://www.nocobase.com/en/blog/v1.3.39-beta)

*Date de sortie : 2024-10-24*

### 🐛 Corrections de bugs

- **[client]** Correction du problème où les blocs de filtre ne pouvaient pas être ajoutés dans la fenêtre contextuelle ([#5502](https://github.com/nocobase/nocobase/pull/5502)) par @zhangzhonghe

## [v1.3.40-beta](https://www.nocobase.com/en/blog/v1.3.40-beta)

*Date de sortie : 2024-10-25*

### 🎉 Nouvelles fonctionnalités

- **[Auth : OIDC]** Ajout d'une option pour permettre de sauter la vérification SSL par @2013xile

### 🚀 Améliorations

- **[client]** Afficher une case à cocher désactivée non cochée pour les champs non sélectionnés ([#5503](https://github.com/nocobase/nocobase/pull/5503)) par @katherinehhh

### 🐛 Corrections de bugs

- **[base de données]** Correction du problème où les opérateurs de chaîne "contient" et "ne contient pas" ne géraient pas correctement les valeurs `null` ([#5509](https://github.com/nocobase/nocobase/pull/5509)) par @2013xile
- **[client]** Correction de la règle de liaison pour évaluer correctement les variables de paramètres d'URL ([#5504](https://github.com/nocobase/nocobase/pull/5504)) par @katherinehhh
- **[Bloc : Carte]** Correction du problème où certaines cartes s'affichaient incorrectement lorsque plusieurs cartes existaient en raison de multiples appels à la méthode `load` d'AMap ([#5490](https://github.com/nocobase/nocobase/pull/5490)) par @Cyx649312038

## [v1.3.41-beta](https://www.nocobase.com/en/blog/v1.3.41-beta)

*Date de sortie : 2024-10-27*

### 🚀 Améliorations

- **[Contrôle d'accès]** Optimisation des performances pour les grandes tables dans acl ([#5496](https://github.com/nocobase/nocobase/pull/5496)) par @chareice

## [v1.3.42-beta](https://www.nocobase.com/en/blog/v1.3.42-beta)

*Date de sortie : 2024-10-28*

### 🐛 Corrections de bugs

- **[Collection : Arbre]** Correction du problème où les chemins de nœuds n'étaient pas mis à jour lors de la dissociation des enfants ([#5522](https://github.com/nocobase/nocobase/pull/5522)) par @2013xile

![next.png](https://static-docs.nocobase.com/8ed17a0f08cc585018f6de6c8b13947d.png)

## [v1.4.0-alpha.20241024133132](https://www.nocobase.com/en/blog/v1.4.0-alpha.20241024133132)

*Date de sortie : 2024-10-24*

### 🎉 Nouvelles fonctionnalités

- **[client]** Prise en charge de l'ajout de groupes sur les formulaires et les blocs de détail ([#5498](https://github.com/nocobase/nocobase/pull/5498)) par @katherinehhh
- **[Calendrier]** plugin-calendar ajout des paramètres de vue par défaut et des configurations d'internationalisation ([#5487](https://github.com/nocobase/nocobase/pull/5487)) par @Cyx649312038
- **[Source de données : KingbaseES]** Prise en charge de l'utilisation de la base de données Kingbase comme source de données principale ou externe (mode pg) par @chareice
  Référence : [Source de données - KingbaseES](https://docs.nocobase.com/handbook/data-source-kingbase)

### 🚀 Améliorations

- **[base de données]** Prise en charge de la logique de chargement statique des plugins ([#5466](https://github.com/nocobase/nocobase/pull/5466)) par @chareice
- **[client]** Amélioration des performances de rendu des blocs de tableau (temps de rendu initial réduit d'environ 50 %) ([#5438](https://github.com/nocobase/nocobase/pull/5438)) par @zhangzhonghe
- **[Mobile]** Le client mobile prend en charge le bloc de formulaire de filtre ([#5482](https://github.com/nocobase/nocobase/pull/5482)) par @katherinehhh
- **[Gestionnaire de sauvegarde]**

  - Modification du paramètre par défaut `Sauvegarder les fichiers de stockage local` sur true par @gchust
  - Revenir aux données de la base de données si l'action de restauration a échoué par @gchust

### 🐛 Corrections de bugs

- **[serveur]** L'événement afterLoad de l'application n'était pas déclenché après l'installation ([#5506](https://github.com/nocobase/nocobase/pull/5506)) par @chenos
- **[Formulaires publics]** Enregistrement du snippet ACL pour le formulaire public ([#5505](https://github.com/nocobase/nocobase/pull/5505)) par @katherinehhh
- **[Gestionnaire de sauvegarde]** Correction : après la restauration d'une sous-application, l'application principale plante si la sous-application utilisait un schéma différent par @gchust

## [v1.4.0-alpha.20241024151311](https://www.nocobase.com/en/blog/v1.4.0-alpha.20241024151311)

*Date de sortie : 2024-10-24*

### 🎉 Nouvelles fonctionnalités

- **[Bloc : Panneau d'actions]** Ajout du paramètre de titre pour le bloc du panneau d'actions ([#5492](https://github.com/nocobase/nocobase/pull/5492)) par @Cyx649312038

## À propos de NocoBase

NocoBase est une plateforme open source, sans code et privée, offrant un contrôle total et une évolutivité infinie. Elle permet aux équipes de s'adapter rapidement aux changements tout en réduisant considérablement les coûts. Évitez des années de développement et des investissements substantiels en déployant NocoBase en quelques minutes.

<iframe src="https://cdn.embedly.com/widgets/media.html?src=https%3A%2F%2Fwww.youtube.com%2Fembed%2FhOM2MyzHn9I&display_name=YouTube&url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DhOM2MyzHn9I&image=http%3A%2F%2Fi.ytimg.com%2Fvi%2FhOM2MyzHn9I%2Fhqdefault.jpg&key=a19fcc184b9711e1b4764040d3dc5c07&type=text%2Fhtml&schema=youtube" allowfullscreen="" frameborder="0" height="480" width="854" title="" class="dc n pc cp bh" scrolling="no"></iframe>

Découvrez NocoBase en 3 minutes !

## 👇 Obtenez NocoBase

[**Page d'accueil**](https://www.nocobase.com/)

[**Démo**](https://demo.nocobase.com/new)

[**Documentation**](https://docs.nocobase.com/)

[**GitHub**](https://github.com/nocobase/nocobase)
