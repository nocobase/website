---
title: "Mises à jour hebdomadaires de NocoBase : Optimisation du style mobile"
description: "Les mises à jour de cette semaine incluent : optimisation du style mobile, prise en charge de la configuration du formulaire d'inscription, ajustement de la largeur de colonne par défaut dans le bloc tableau, et plus encore."
---

Résumez les journaux de mise à jour hebdomadaires du produit. Les dernières versions sont disponibles sur [notre blog](https://www.nocobase.com/en/blog/tags/release-notes).

**Cette semaine, nous avons apporté des ajustements à la publication des versions. Les futures mises à jour incluront trois branches : `main`, `next` et `develop`.**

![version.png](https://static-docs.nocobase.com/ba5f04e27e99c625cb3822da5df07860.png)

* `main` : La version la plus stable à ce jour, recommandée pour l'installation ;
* `next` : Version bêta, contient les nouvelles fonctionnalités à venir et a été testée préliminairement. Il peut y avoir des problèmes connus ou inconnus. Elle est principalement destinée aux utilisateurs testeurs pour recueillir des retours et optimiser davantage les fonctionnalités. Idéale pour les utilisateurs testeurs qui souhaitent découvrir les nouvelles fonctionnalités tôt et donner leur avis ;
* `develop` : Version alpha, contient le code de fonctionnalité le plus récent, peut être incomplète ou instable, principalement destinée au développement interne et à l'itération rapide. Adaptée aux utilisateurs techniques intéressés par les fonctionnalités de pointe du produit, mais avec des problèmes potentiels et des fonctions incomplètes. Ne pas utiliser en production.

![main.png](https://static-docs.nocobase.com/47a3c71734c1d0f908b51f9ebd53c0ac.png)

## [v1.3.50-beta](https://www.nocobase.com/en/blog/v1.3.50-beta)

*Date de publication : 2024-11-14*

### 🐛 Corrections de bugs

- **[client]** Correction du problème empêchant l'effacement du titre de la règle de liaison lors de l'édition ([#5644](https://github.com/nocobase/nocobase/pull/5644)) par @katherinehhh
- **[Commentaires]** Correction du paramétrage de la portée des données qui ne fonctionnait pas dans le bloc de commentaires par @katherinehhh

## [v1.3.51](https://www.nocobase.com/en/blog/v1.3.51)

*Date de publication : 2024-11-19*

### 🐛 Corrections de bugs

- **[client]**

  - Correction de la vérification des permissions de champ non affectée par le contexte du champ d'association ([#5672](https://github.com/nocobase/nocobase/pull/5672)) par @katherinehhh
  - Correction de l'enregistrement des modifications de valeur vide par la règle de liaison en valeur vide statique ([#5667](https://github.com/nocobase/nocobase/pull/5667)) par @katherinehhh
- **[Champ de collection : Plusieurs à plusieurs (tableau)]** Correction du problème où la récupération d'enregistrements dans une collection d'association avec des champs plusieurs à plusieurs (tableau) provoquait une erreur ([#5661](https://github.com/nocobase/nocobase/pull/5661)) par @2013xile
- **[Bloc : Gantt]** Correction de l'appel incorrect du bloc calendrier par le modèle de bloc Gantt lors de l'ajout ([#5673](https://github.com/nocobase/nocobase/pull/5673)) par @katherinehhh
- **[Visualisation de données]** Correction du problème où les transformations de données ne fonctionnaient pas sur l'infobulle dans les graphiques à deux axes ([#5649](https://github.com/nocobase/nocobase/pull/5649)) par @2013xile

![next.png](https://static-docs.nocobase.com/8ed17a0f08cc585018f6de6c8b13947d.png)

## [v1.4.0-alpha.9](https://www.nocobase.com/en/blog/v1.4.0-alpha.9)

*Date de publication : 2024-11-14*

### 🎉 Nouvelles fonctionnalités

- **[Authentification]** Permet de configurer les champs nom d'utilisateur et email du formulaire d'inscription ([#5639](https://github.com/nocobase/nocobase/pull/5639)) par @2013xile
- **[Workflow]** Prise en charge de la clé d'union dans l'événement de collection ([#5627](https://github.com/nocobase/nocobase/pull/5627)) par @mytharcher

### 🚀 Améliorations

- **[client]** Ajustement de la largeur de colonne par défaut à 100 dans le bloc tableau ([#5625](https://github.com/nocobase/nocobase/pull/5625)) par @katherinehhh
- **[Gestionnaire de notifications]** Mise à jour de l'icône de notification in-app vers l'icône de cloche ([#5638](https://github.com/nocobase/nocobase/pull/5638)) par @sheldon66
- **[Bloc : Panneau d'actions]** Ajout de la prise en charge du réglage de la hauteur du bloc dans le panneau d'actions ([#5628](https://github.com/nocobase/nocobase/pull/5628)) par @katherinehhh
- **[Mobile]** Style : optimisation du style mobile : réduction de l'espacement des champs et amélioration de la compacité de l'affichage des champs ([#5605](https://github.com/nocobase/nocobase/pull/5605)) par @katherinehhh

### 🐛 Corrections de bugs

- **[build]** Correction du problème d'échec de la construction du plugin s'il contient un fichier .less ([#5646](https://github.com/nocobase/nocobase/pull/5646)) par @gchust
- **[client]** Correction de l'alignement de la colonne fixée à droite dans le tableau ([#5636](https://github.com/nocobase/nocobase/pull/5636)) par @katherinehhh
- **[Workflow : Nœud de boucle]** Correction de la vérification erronée des conditions dans le nœud de boucle ([#5634](https://github.com/nocobase/nocobase/pull/5634)) par @mytharcher
- **[Gestionnaire de notifications]** Correction du modèle non compilé dans l'API de notification ([#5630](https://github.com/nocobase/nocobase/pull/5630)) par @mytharcher

## [v1.4.0-alpha.10](https://www.nocobase.com/en/blog/v1.4.0-alpha.10)

*Date de publication : 2024-11-14*

### 🚀 Améliorations

- **[client]** Ajustement de certaines API du client core et correction d'avertissements ([#5651](https://github.com/nocobase/nocobase/pull/5651)) par @mytharcher
- **[Mobile]** Remplacement de certains composants par des composants mobiles ([#5590](https://github.com/nocobase/nocobase/pull/5590)) par @katherinehhh

## [v1.4.0-alpha.11](https://www.nocobase.com/en/blog/v1.4.0-alpha.11)

*Date de publication : 2024-11-15*

### 🐛 Corrections de bugs

- **[client]** Revert de la modification des props `openSize` dans le bouton d'action ([#5656](https://github.com/nocobase/nocobase/pull/5656)) par @mytharcher

## [v1.4.0-alpha.12](https://www.nocobase.com/en/blog/v1.4.0-alpha.12)

*Date de publication : 2024-11-16*

### 🐛 Corrections de bugs

- **[client]**

  - Correction de la correspondance du type de fichier lorsque le fichier ou la propriété est nul ([#5659](https://github.com/nocobase/nocobase/pull/5659)) par @mytharcher
  - Correction du non-mise à jour du compteur de pagination après la suppression de données dans un sous-tableau ([#5648](https://github.com/nocobase/nocobase/pull/5648)) par @katherinehhh
- **[Workflow]** Correction de la disparition du nœud après l'ajout d'une condition sans branche avant lui ([#5658](https://github.com/nocobase/nocobase/pull/5658)) par @mytharcher
- **[Mobile]** Problème de style lors de l'utilisation d'un texte long comme champ de titre dans un champ d'association ([#5655](https://github.com/nocobase/nocobase/pull/5655)) par @katherinehhh
- **[Workflow : Événement d'action personnalisée]** Correction d'une erreur lors de l'utilisation du champ d'URL de pièce jointe avec une source de données externe par @katherinehhh

## [v1.4.0-alpha.13](https://www.nocobase.com/en/blog/v1.4.0-alpha.13)

*Date de publication : 2024-11-16*

### 🐛 Corrections de bugs

- **[Mobile]** Correction : utilisation des composants de bureau pour la sélection en mode de configuration mobile et correction d'une erreur lors de l'utilisation de variables comme valeurs par défaut dans datePicker ([#5662](https://github.com/nocobase/nocobase/pull/5662)) par @katherinehhh

## [v1.4.0-alpha.14](https://www.nocobase.com/en/blog/v1.4.0-alpha.14)

*Date de publication : 2024-11-17*

### 🐛 Corrections de bugs

- **[Mobile]** Correction de l'affectation de champ pour prendre en charge la valeur variable 0 ([#5663](https://github.com/nocobase/nocobase/pull/5663)) par @katherinehhh

## [v1.4.0-alpha.16](https://www.nocobase.com/en/blog/v1.4.0-alpha.16)

*Date de publication : 2024-11-18*

### 🐛 Corrections de bugs

- **[build]** Correction du problème où yarn dev signalait une erreur lorsqu'il y avait déjà des plugins construits dans le système ([#5671](https://github.com/nocobase/nocobase/pull/5671)) par @gchust
- **[Mobile]** Correction : problème de style sur mobile lorsque le sous-tableau est configuré pour permettre la sélection de données uniquement ([#5670](https://github.com/nocobase/nocobase/pull/5670)) par @katherinehhh

## [v1.4.0-alpha.17](https://www.nocobase.com/en/blog/v1.4.0-alpha.17)

*Date de publication : 2024-11-19*

### 🚀 Améliorations

- **[Workflow]** Prise en charge de l'enregistrement des variables système dans le client ([#5676](https://github.com/nocobase/nocobase/pull/5676)) par @mytharcher

### 🐛 Corrections de bugs

- **[client]** Correction de la vérification des permissions de champ non affectée par le contexte du champ d'association ([#5672](https://github.com/nocobase/nocobase/pull/5672)) par @katherinehhh
- **[Bloc : Gantt]** Correction de l'appel incorrect du bloc calendrier par le modèle de bloc Gantt lors de l'ajout ([#5673](https://github.com/nocobase/nocobase/pull/5673)) par @katherinehhh
- **[Calendrier]** Correction des options de champ de date manquantes avec et sans fuseau horaire dans le bloc calendrier ([#5674](https://github.com/nocobase/nocobase/pull/5674)) par @katherinehhh

## [v1.4.0-beta.1](https://www.nocobase.com/en/blog/v1.4.0-beta.1)

*Date de publication : 2024-11-19*

### 🚀 Améliorations

- **[Mobile]** Prise en charge de la propriété dynamique `hidden` pour le composant `Tabs.TabPan` afin de contrôler le rendu ([#5687](https://github.com/nocobase/nocobase/pull/5687)) par @zhangzhonghe

### 🐛 Corrections de bugs

- **[client]**
  - Correction de l'effacement de la valeur de saisie de date lors du changement d'opérateur dans le bouton de filtre et de la soumission du champ de date ([#5684](https://github.com/nocobase/nocobase/pull/5684)) par @katherinehhh
  - Correction du non-fonctionnement de la condition de règle de liaison avec une variable de date ([#5675](https://github.com/nocobase/nocobase/pull/5675)) par @katherinehhh

![develop.png](https://static-docs.nocobase.com/7fcdd9456a17286d8a439eee52bcb8d2.png)

## [v1.5.0-alpha.1](https://www.nocobase.com/en/blog/v1.5.0-alpha.1)

*Date de publication : 2024-11-19*

### 🎉 Nouvelles fonctionnalités

- **[Adaptateur pub/sub Redis]** Ajout du plugin d'adaptateur de synchronisation Redis par @mytharcher

## À propos de NocoBase

NocoBase est une plateforme no-code privée et open source offrant un contrôle total et une évolutivité infinie. Elle permet aux équipes de s'adapter rapidement aux changements tout en réduisant considérablement les coûts. Évitez des années de développement et des investissements substantiels en déployant NocoBase en quelques minutes.

<iframe src="https://cdn.embedly.com/widgets/media.html?src=https%3A%2F%2Fwww.youtube.com%2Fembed%2FhOM2MyzHn9I&display_name=YouTube&url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DhOM2MyzHn9I&image=http%3A%2F%2Fi.ytimg.com%2Fvi%2FhOM2MyzHn9I%2Fhqdefault.jpg&key=a19fcc184b9711e1b4764040d3dc5c07&type=text%2Fhtml&schema=youtube" allowfullscreen="" frameborder="0" height="480" width="854" title="" class="dc n pc cp bh" scrolling="no"></iframe>

Découvrez NocoBase en 3 minutes !

## 👇 Obtenez NocoBase

[**Page d'accueil**](https://www.nocobase.com/)

[**Démo**](https://demo.nocobase.com/new)

[**Documentation**](https://docs.nocobase.com/)

[**GitHub**](https://github.com/nocobase/nocobase)
