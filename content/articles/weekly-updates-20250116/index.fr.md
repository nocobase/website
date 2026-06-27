---
title: "Mises à jour hebdomadaires de NocoBase : Prise en charge des règles de liaison dans le bloc de détails"
description: "Les mises à jour de cette semaine incluent : prise en charge des règles de liaison dans le bloc de détails pour masquer (valeur réservée), et plus encore."
---

Résumez les journaux de mise à jour hebdomadaires du produit. Les dernières versions sont disponibles sur [notre blog](https://www.nocobase.com/en/blog/tags/release-notes).

**NocoBase est actuellement mis à jour avec trois branches : `main`, `next` et `develop`.**

![version.png](https://static-docs.nocobase.com/ba5f04e27e99c625cb3822da5df07860.png)

* `main` : La version la plus stable à ce jour, recommandée pour l'installation ;
* `next` : Version bêta, contient les nouvelles fonctionnalités à venir et a été testée préliminairement. Il peut y avoir des problèmes connus ou inconnus. Elle est principalement destinée aux utilisateurs testeurs pour recueillir des retours et optimiser davantage les fonctionnalités. Idéale pour les utilisateurs testeurs qui souhaitent découvrir les nouvelles fonctionnalités tôt et donner leur avis ;
* `develop` : Version alpha, contient le code de fonctionnalité le plus récent, peut être incomplète ou instable, principalement destinée au développement interne et à l'itération rapide. Adaptée aux utilisateurs techniques intéressés par les fonctionnalités de pointe du produit, mais avec des problèmes potentiels et des fonctions incomplètes. Ne pas utiliser en production.

## main

![main.png](https://static-docs.nocobase.com/47a3c71734c1d0f908b51f9ebd53c0ac.png)

### [v1.4.21](https://www.nocobase.com/en/blog/v1.4.21)

*Date de sortie : 2025-01-10*

#### 🚀 Améliorations

- **[client]** Prise en charge des règles de liaison dans le bloc de détails pour masquer (valeur conservée) ([#6031](https://github.com/nocobase/nocobase/pull/6031)) par @katherinehhh

#### 🐛 Corrections de bugs

- **[client]**

  - Résolution du chemin public manquant dans les chemins de fichiers d'icônes ([#6034](https://github.com/nocobase/nocobase/pull/6034)) par @chenos
  - Correction du problème où les règles de liaison de formulaire échouent lorsqu'elles dépendent des valeurs de champs de sous-tableaux ([#5876](https://github.com/nocobase/nocobase/pull/5876)) par @zhangzhonghe
  - Correction du champ incorrect de la variable 'Enregistrement actuel' dans les sous-détails ([#6030](https://github.com/nocobase/nocobase/pull/6030)) par @zhangzhonghe
- **[Gestionnaire de sauvegarde]** Correction de l'échec du téléchargement de la sauvegarde lorsque le chemin API_BASE_PATH de l'environnement n'est pas /api par @gchust

### [v1.4.22](https://www.nocobase.com/en/blog/v1.4.22)

*Date de sortie : 2025-01-11*

#### 🚀 Améliorations

- **[évaluateurs]** Mise à niveau de la version de la bibliothèque formula.js vers 4.4.9 ([#6037](https://github.com/nocobase/nocobase/pull/6037)) par @mytharcher
- **[Workflow]** Correction de l'API du logger du plugin workflow ([#6036](https://github.com/nocobase/nocobase/pull/6036)) par @mytharcher

#### 🐛 Corrections de bugs

- **[Workflow]** Ajout d'une logique défensive pour éviter les déclenchements en double ([#6022](https://github.com/nocobase/nocobase/pull/6022)) par @mytharcher

### [v1.4.23](https://www.nocobase.com/en/blog/v1.4.23)

*Date de sortie : 2025-01-13*

#### 🐛 Corrections de bugs

- **[client]** Correction du problème où la colonne d'actions fixes ne fonctionnait pas correctement dans les tableaux ([#6048](https://github.com/nocobase/nocobase/pull/6048)) par @zhangzhonghe
- **[Utilisateurs]** Désactivation du remplissage automatique du navigateur lors de la définition des mots de passe pour les utilisateurs dans la gestion des utilisateurs ([#6041](https://github.com/nocobase/nocobase/pull/6041)) par @2013xile
- **[Workflow]** Correction du problème où l'événement planifié basé sur un champ de date ne se déclenchait pas après le démarrage de l'application ([#6042](https://github.com/nocobase/nocobase/pull/6042)) par @mytharcher

### [v1.4.24](https://www.nocobase.com/en/blog/v1.4.24)

*Date de sortie : 2025-01-14*

#### 🚀 Améliorations

- **[client]** Saisie en lecture seule du composant datePicker ([#6061](https://github.com/nocobase/nocobase/pull/6061)) par @Cyx649312038

#### 🐛 Corrections de bugs

- **[client]**

  - Correction du chargement incorrect des champs d'association modale dans le bloc tableau ([#6060](https://github.com/nocobase/nocobase/pull/6060)) par @katherinehhh
  - Correction d'un problème de style dans le sous-tableau du bloc de détails ([#6049](https://github.com/nocobase/nocobase/pull/6049)) par @katherinehhh
  - Correction du format du champ numérique en mode readPretty affectant le mode édition ([#6050](https://github.com/nocobase/nocobase/pull/6050)) par @katherinehhh
  - Correction d'un problème de style de cellule d'en-tête de tableau dans ant-table ([#6052](https://github.com/nocobase/nocobase/pull/6052)) par @katherinehhh
- **[base de données]** Correction d'un problème lors de l'initialisation du champ de tri avec une clé primaire ([#6059](https://github.com/nocobase/nocobase/pull/6059)) par @chareice
- **[Visualisation de données]** Suppression de la clause `LIMIT` lors de l'utilisation de fonctions d'agrégation sans définir de dimensions dans les requêtes de graphiques ([#6062](https://github.com/nocobase/nocobase/pull/6062)) par @2013xile
- **[Gestionnaire de sauvegarde]** Correction d'une erreur de téléchargement de sauvegarde pour les utilisateurs connectés uniquement à une sous-application par @gchust

## next

![next.png](https://static-docs.nocobase.com/8ed17a0f08cc585018f6de6c8b13947d.png)

### [v1.5.0-beta.27](https://www.nocobase.com/en/blog/v1.5.0-beta.27)

*Date de sortie : 2025-01-10*

#### 🚀 Améliorations

- **[client]** Suppression des règles de liaison du bouton Associer ([#6016](https://github.com/nocobase/nocobase/pull/6016)) par @katherinehhh

#### 🐛 Corrections de bugs

- **[client]**
  - Correction du problème où les règles de liaison de formulaire échouent lorsqu'elles dépendent des valeurs de champs de sous-tableaux ([#5876](https://github.com/nocobase/nocobase/pull/5876)) par @zhangzhonghe
  - Poursuite du rendu de la page après la fin de la requête de vérification d'authentification ([#6020](https://github.com/nocobase/nocobase/pull/6020)) par @2013xile

### [v1.5.0-beta.28](https://www.nocobase.com/en/blog/v1.5.0-beta.28)

*Date de sortie : 2025-01-14*

#### 🐛 Corrections de bugs

- **[client]**
  - Correction du problème où les affectations de champs pour les boutons de formulaire dans les nœuds manuels du workflow sont invalides ([#6054](https://github.com/nocobase/nocobase/pull/6054)) par @zhangzhonghe
  - Correction de la variable de fenêtre contextuelle actuelle manquante dans la modale de lien d'activation de champ ([#6045](https://github.com/nocobase/nocobase/pull/6045)) par @katherinehhh

## develop

![develop.png](https://static-docs.nocobase.com/7fcdd9456a17286d8a439eee52bcb8d2.png)

### [v1.6.0-alpha.11](https://www.nocobase.com/en/blog/v1.6.0-alpha.11)

*Date de sortie : 2025-01-09*

#### 🎉 Nouvelles fonctionnalités

- **[client]** Ajout de schemaSetting pour afficher le nom du fichier pour les pièces jointes ([#5995](https://github.com/nocobase/nocobase/pull/5995)) par @katherinehhh

### [v1.6.0-alpha.13](https://www.nocobase.com/en/blog/v1.6.0-alpha.13)

*Date de sortie : 2025-01-14*

#### 🚀 Améliorations

- **[Workflow : Calcul JSON]** Changement du nom du nœud de requête JSON en Calcul JSON par @mytharcher

#### 🐛 Corrections de bugs

- **[Workflow]** Correction du type de valeur pour le composant DatePicker ([#6039](https://github.com/nocobase/nocobase/pull/6039)) par @mytharcher

## À propos de NocoBase

NocoBase est une plateforme privée, open-source et sans code offrant un contrôle total et une évolutivité infinie. Elle permet aux équipes de s'adapter rapidement aux changements tout en réduisant considérablement les coûts. Évitez des années de développement et des investissements substantiels en déployant NocoBase en quelques minutes.

<iframe src="https://cdn.embedly.com/widgets/media.html?src=https%3A%2F%2Fwww.youtube.com%2Fembed%2FhOM2MyzHn9I&display_name=YouTube&url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DhOM2MyzHn9I&image=http%3A%2F%2Fi.ytimg.com%2Fvi%2FhOM2MyzHn9I%2Fhqdefault.jpg&key=a19fcc184b9711e1b4764040d3dc5c07&type=text%2Fhtml&schema=youtube" allowfullscreen="" frameborder="0" height="480" width="854" title="" class="dc n pc cp bh" scrolling="no"></iframe>

Découvrez NocoBase en 3 minutes !

## 👇 Obtenez NocoBase

[**Page d'accueil**](https://www.nocobase.com/)

[**Démo**](https://demo.nocobase.com/new)

[**Documentation**](https://docs.nocobase.com/)

[**GitHub**](https://github.com/nocobase/nocobase)
