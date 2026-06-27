---
title: "Mises à jour hebdomadaires de NocoBase : Optimisation de l'expérience mobile"
description: "Les mises à jour de cette semaine incluent : optimisation de l'interaction mobile, corrections de bugs, et plus encore."
---

Résumez les journaux de mise à jour hebdomadaires du produit. Les dernières versions sont disponibles sur [notre blog](https://www.nocobase.com/en/blog/tags/release-notes).

**NocoBase est actuellement mis à jour avec trois branches : `main`, `next` et `develop`.**

![version.png](https://static-docs.nocobase.com/ba5f04e27e99c625cb3822da5df07860.png)

* `main` : La version la plus stable à ce jour, recommandée pour l'installation ;
* `next` : Version bêta, contient les nouvelles fonctionnalités à venir et a été testée préliminairement. Il peut y avoir des problèmes connus ou inconnus. Elle est principalement destinée aux utilisateurs testeurs pour recueillir des retours et optimiser davantage les fonctionnalités. Idéale pour les utilisateurs testeurs qui souhaitent découvrir les nouvelles fonctionnalités tôt et donner leur avis ;
* `develop` : Version alpha, contient le code de fonctionnalité le plus récent, peut être incomplète ou instable, principalement destinée au développement interne et à l'itération rapide. Adaptée aux utilisateurs techniques intéressés par les fonctionnalités de pointe du produit, mais avec des problèmes potentiels et des fonctions incomplètes. Ne pas utiliser en production.

## main

![main.png](https://static-docs.nocobase.com/47a3c71734c1d0f908b51f9ebd53c0ac.png)

### [v1.4.9](https://www.nocobase.com/en/blog/v1.4.9)

*Date de sortie : 2024-12-12*

#### 🐛 Corrections de bugs

- **[sdk]** Suppression de la locale par défaut ([#5867](https://github.com/nocobase/nocobase/pull/5867)) par @chenos
- **[client]**

  - Correction du problème où les variables de champ d'association imbriquées dans la portée des données avaient des valeurs vides ([#5866](https://github.com/nocobase/nocobase/pull/5866)) par @zhangzhonghe
  - Correction de l'apparition de la barre de défilement lorsqu'il y a moins de colonnes avec une colonne fixe à droite ([#5864](https://github.com/nocobase/nocobase/pull/5864)) par @katherinehhh
  - Correction du style de position incorrect du composant `FilterItem` ([#5851](https://github.com/nocobase/nocobase/pull/5851)) par @mytharcher
- **[Gestionnaire de sauvegarde]** Correction de l'échec du téléchargement de la sauvegarde pour les sous-applications avec un domaine personnalisé par @gchust

### [v1.4.10](https://www.nocobase.com/en/blog/v1.4.10)

*Date de sortie : 2024-12-12*

#### 🎉 Nouvelles fonctionnalités

- **[Action : Requête personnalisée]** Prise en charge de l'utilisation de la variable 'Formulaire actuel' dans les boutons de requête personnalisée ([#5871](https://github.com/nocobase/nocobase/pull/5871)) par @zhangzhonghe

#### 🚀 Améliorations

- **[Visualisation des données]** Permet d'utiliser les clés étrangères dans la configuration des requêtes des graphiques ([#5869](https://github.com/nocobase/nocobase/pull/5869)) par @2013xile

#### 🐛 Corrections de bugs

- **[client]** Correction du problème où le sélecteur de table de fichiers ne s'affichait pas en mode non-configuration lors de l'utilisation de la sélection de fichiers ([#5874](https://github.com/nocobase/nocobase/pull/5874)) par @katherinehhh
- **[Contrôle d'accès]** Correction des problèmes liés aux enregistrements de réplication après la configuration des autorisations ([#5839](https://github.com/nocobase/nocobase/pull/5839)) par @chareice
- **[Workflow]** Correction du délai d'attente de la transaction lors de la suppression automatique de l'exécution ([#5870](https://github.com/nocobase/nocobase/pull/5870)) par @mytharcher

## next

![next.png](https://static-docs.nocobase.com/8ed17a0f08cc585018f6de6c8b13947d.png)

### [v1.5.0-beta.7](https://www.nocobase.com/en/blog/v1.5.0-beta.7)

*Date de sortie : 2024-12-13*

#### 🚀 Améliorations

- **[Authentification]** Optimisation de la logique d'obtention des métadonnées des actions d'audit. ([#5814](https://github.com/nocobase/nocobase/pull/5814)) par @chenzhizdt

#### 🐛 Corrections de bugs

- **[Visualisation des données]** Correction de la hauteur initiale du bloc de graphique ([#5879](https://github.com/nocobase/nocobase/pull/5879)) par @2013xile
- **[Workflow]** Correction de l'erreur levée lors de la reprise d'un nœud asynchrone dans l'exécution manuelle d'un workflow ([#5877](https://github.com/nocobase/nocobase/pull/5877)) par @mytharcher

### [v1.5.0-beta.9](https://www.nocobase.com/en/blog/v1.5.0-beta.9)

*Date de sortie : 2024-12-15*

#### 🎉 Nouvelles fonctionnalités

- **[Mobile]** Ajout d'un interrupteur global pour contrôler tous les boutons de retour dans le mobile (activé par défaut) ([#5868](https://github.com/nocobase/nocobase/pull/5868)) par @katherinehhh

#### 🐛 Corrections de bugs

- **[Synchronisation des données utilisateur]** Correction des problèmes d'affichage des boutons de synchronisation et de tâches. ([#5896](https://github.com/nocobase/nocobase/pull/5896)) par @2013xile

### [v1.5.0-beta.10](https://www.nocobase.com/en/blog/v1.5.0-beta.10)

*Date de sortie : 2024-12-18*

#### 🚀 Améliorations

- **[Mobile]** Adaptation du composant de sélecteur de plage de dates et d'heures pour le mobile ([#5863](https://github.com/nocobase/nocobase/pull/5863)) par @katherinehhh

#### 🐛 Corrections de bugs

- **[Source de données : Principale]** Correction du problème où les champs système dans le bloc de formulaire de filtre ne pouvaient pas être modifiés ([#5885](https://github.com/nocobase/nocobase/pull/5885)) par @zhangzhonghe

## develop

![develop.png](https://static-docs.nocobase.com/7fcdd9456a17286d8a439eee52bcb8d2.png)

### [v1.6.0-alpha.5](https://www.nocobase.com/en/blog/v1.6.0-alpha.5)

*Date de sortie : 2024-12-11*

#### 🐛 Corrections de bugs

- **[client]**

  - Correction du problème où le titre de l'onglet du navigateur ne se mettait pas à jour après avoir changé de page ([#5857](https://github.com/nocobase/nocobase/pull/5857)) par @zhangzhonghe
  - Correction du problème où le rafraîchissement de la page dans la page de gestion des sources de données redirigeait vers la page d'accueil ([#5855](https://github.com/nocobase/nocobase/pull/5855)) par @zhangzhonghe
  - Correction du problème de non-changement des données après la pagination dans un sous-tableau ([#5856](https://github.com/nocobase/nocobase/pull/5856)) par @zhangzhonghe
  - Correction du problème où les données de rôle ne s'affichaient pas dans le tableau de gestion des utilisateurs ([#5846](https://github.com/nocobase/nocobase/pull/5846)) par @zhangzhonghe
  - Correction du problème où les champs d'association dans les modèles de référence n'affichaient parfois pas de données ([#5848](https://github.com/nocobase/nocobase/pull/5848)) par @zhangzhonghe
  - Correction du problème où le bouton 'Requête personnalisée' n'était pas immédiatement visible après avoir été ajouté ([#5845](https://github.com/nocobase/nocobase/pull/5845)) par @zhangzhonghe
  - Empêcher les pages cachées d'affecter les interactions avec d'autres pages ([#5836](https://github.com/nocobase/nocobase/pull/5836)) par @zhangzhonghe
  - Correction du problème où les blocs ajoutés dans une fenêtre contextuelle ne s'affichaient pas lors de la réouverture de la fenêtre ([#5838](https://github.com/nocobase/nocobase/pull/5838)) par @zhangzhonghe
- **[serveur]** Définition des actions disponibles par défaut pour l'ACL ([#5847](https://github.com/nocobase/nocobase/pull/5847)) par @chenos

## À propos de NocoBase

NocoBase est une plateforme no-code privée et open source offrant un contrôle total et une évolutivité infinie. Elle permet aux équipes de s'adapter rapidement aux changements tout en réduisant considérablement les coûts. Évitez des années de développement et des investissements substantiels en déployant NocoBase en quelques minutes.

<iframe src="https://cdn.embedly.com/widgets/media.html?src=https%3A%2F%2Fwww.youtube.com%2Fembed%2FhOM2MyzHn9I&display_name=YouTube&url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DhOM2MyzHn9I&image=http%3A%2F%2Fi.ytimg.com%2Fvi%2FhOM2MyzHn9I%2Fhqdefault.jpg&key=a19fcc184b9711e1b4764040d3dc5c07&type=text%2Fhtml&schema=youtube" allowfullscreen="" frameborder="0" height="480" width="854" title="" class="dc n pc cp bh" scrolling="no"></iframe>

Découvrez NocoBase en 3 minutes !

## 👇 Obtenez NocoBase

[**Page d'accueil**](https://www.nocobase.com/)

[**Démo**](https://demo.nocobase.com/new)

[**Documentation**](https://docs.nocobase.com/)

[**GitHub**](https://github.com/nocobase/nocobase)
