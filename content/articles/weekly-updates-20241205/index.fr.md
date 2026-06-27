---
title: "Mises à jour hebdomadaires de NocoBase : Prise en charge de l'ouverture de pop-ups de liens sur le champ readPretty"
description: "Les mises à jour de cette semaine incluent : prise en charge de l'ouverture de pop-ups de liens sur le champ readPretty, prise en charge du déclenchement manuel de workflows, et plus encore."
---

Résumé des journaux de mise à jour hebdomadaires du produit. Les dernières versions sont disponibles sur [notre blog](https://www.nocobase.com/fr/blog/tags/release-notes).

**Cette semaine, nous avons publié [NocoBase version 1.4.0](https://www.nocobase.com/fr/blog/nocobase-1-4-0), qui apporte plusieurs nouvelles fonctionnalités et améliorations, notamment une gestion simplifiée des plugins, des fonctions de notification améliorées, la synchronisation des données utilisateur et un gestionnaire de sauvegarde.**

**NocoBase est actuellement mis à jour avec trois branches : `main`, `next` et `develop`.**

![version.png](https://static-docs.nocobase.com/ba5f04e27e99c625cb3822da5df07860.png)

* `main` : La version la plus stable à ce jour, recommandée pour l'installation ;
* `next` : Version bêta, contient les nouvelles fonctionnalités à venir et a été testée préliminairement. Il peut y avoir des problèmes connus ou inconnus. Elle est principalement destinée aux utilisateurs testeurs pour recueillir des commentaires et optimiser davantage les fonctions. Idéale pour les utilisateurs testeurs qui souhaitent découvrir les nouvelles fonctionnalités tôt et donner leur avis ;
* `develop` : Version alpha, contient le code de fonctionnalité le plus récent, peut être incomplète ou instable, principalement destinée au développement interne et à l'itération rapide. Adaptée aux utilisateurs techniques intéressés par les fonctionnalités de pointe du produit, mais avec des problèmes potentiels et des fonctions incomplètes. Ne pas utiliser en production.

![main.png](https://static-docs.nocobase.com/47a3c71734c1d0f908b51f9ebd53c0ac.png)

## [v1.3.53](https://www.nocobase.com/fr/blog/v1.3.53)

*Date de sortie : 2024-11-28*

### 🚀 Améliorations

- **[client]**

  - exportation du hook essentiel ([#5702](https://github.com/nocobase/nocobase/pull/5702)) par @mytharcher
  - plugin de champ de région chinoise retiré des plugins intégrés ([#5693](https://github.com/nocobase/nocobase/pull/5693)) par @katherinehhh
- **[Workflow : Événement pré-action]** suppression du journal d'avertissement dans l'intercepteur de requêtes par @mytharcher

### 🐛 Corrections de bugs

- **[cli]** Le mode démon ne supprime pas les fichiers sock ([#5750](https://github.com/nocobase/nocobase/pull/5750)) par @chenos
- **[client]**

  - Correction du problème d'influence mutuelle des champs d'association lorsque plusieurs champs d'association ont la même collection cible ([#5744](https://github.com/nocobase/nocobase/pull/5744)) par @katherinehhh
  - Correction du problème d'alignement des cases à cocher dans le sous-tableau ([#5735](https://github.com/nocobase/nocobase/pull/5735)) par @katherinehhh
  - Correction du problème d'affichage du champ de clé étrangère dans le sélecteur de données ([#5734](https://github.com/nocobase/nocobase/pull/5734)) par @katherinehhh
  - Correction de l'ajustement de feedbackLayout pour améliorer les messages de validation dans le sous-tableau ([#5700](https://github.com/nocobase/nocobase/pull/5700)) par @katherinehhh
- **[serveur]** Chargement des plugins dans l'ordre des dépendances ([#5706](https://github.com/nocobase/nocobase/pull/5706)) par @chenos
- **[Bloc : Carte]** Correction d'une erreur lors du changement de niveau de zoom dans Google Maps ([#5722](https://github.com/nocobase/nocobase/pull/5722)) par @katherinehhh
- **[Source de données : Principale]** Correction de l'inférence du nom de champ dans la collection de vues ([#5729](https://github.com/nocobase/nocobase/pull/5729)) par @chareice
- **[Gestionnaire de fichiers]** lorsque le point de terminaison n'est pas vide, forcePathStyle est défini sur true ([#5712](https://github.com/nocobase/nocobase/pull/5712)) par @chenos

## [v1.3.55](https://www.nocobase.com/fr/blog/v1.3.55)

*Date de sortie : 2024-12-03*

### 🚀 Améliorations

- **[client]** Utilisation d'icônes avec des significations plus précises pour les initialiseurs de blocs ([#5757](https://github.com/nocobase/nocobase/pull/5757)) par @mytharcher

### 🐛 Corrections de bugs

- **[client]**

  - Correction des cas E2E basés sur les icônes modifiées ([#5768](https://github.com/nocobase/nocobase/pull/5768)) par @mytharcher
  - Correction du champ de sélection qui s'affiche vide lorsque les données sont vides ([#5762](https://github.com/nocobase/nocobase/pull/5762)) par @katherinehhh
- **[base de données]** Correction de la mise à jour des valeurs d'association hasOne/belongsTo sans clé étrangère ([#5754](https://github.com/nocobase/nocobase/pull/5754)) par @chareice
- **[Gestionnaire de sources de données]** Correction de l'affichage incorrect de la clé source ([#5771](https://github.com/nocobase/nocobase/pull/5771)) par @katherinehhh
- **[Workflow : Événement d'action personnalisée]**

  - Autorisation de tous les rôles à déclencher un événement d'action personnalisée dans les sources de données externes par @mytharcher
  - Correction de la source de données par défaut comme principale par @mytharcher
  - Correction de l'erreur de source de données lorsqu'elle n'est pas trouvée par @mytharcher
  - Correction du déclencheur d'action personnalisée qui ne se déclenche pas sur l'association par @mytharcher

## [v1.4.1](https://www.nocobase.com/fr/blog/v1.4.1)

*Date de sortie : 2024-12-04*

### 🚀 Améliorations

- **[cli]** optimisation de la commande pkg ([#5785](https://github.com/nocobase/nocobase/pull/5785)) par @chenos

### 🐛 Corrections de bugs

- **[Mobile]** Correction du champ de saisie de date manquant dans l'opération de filtre sur mobile ([#5786](https://github.com/nocobase/nocobase/pull/5786)) par @katherinehhh

## [v1.4.2](https://www.nocobase.com/fr/blog/v1.4.2)

*Date de sortie : 2024-12-04*

### 🐛 Corrections de bugs

- **[Workflow]** Correction de la disparition du tag de workflow asynchrone dans le tableau des workflows ([#5787](https://github.com/nocobase/nocobase/pull/5787)) par @mytharcher

![next.png](https://static-docs.nocobase.com/8ed17a0f08cc585018f6de6c8b13947d.png)

## [v1.4.0-beta.9](https://www.nocobase.com/fr/blog/v1.4.0-beta.9)

*Date de sortie : 2024-11-28*

### 🚀 Améliorations

- **[Mobile]** optimisation du thème compact pour mobile ([#5723](https://github.com/nocobase/nocobase/pull/5723)) par @katherinehhh

### 🐛 Corrections de bugs

- **[Visualisation de données]** Correction du problème d'obtention incorrecte du fuseau horaire à partir de `context` ([#5743](https://github.com/nocobase/nocobase/pull/5743)) par @2013xile

## [v1.4.0-beta.10](https://www.nocobase.com/fr/blog/v1.4.0-beta.10)

*Date de sortie : 2024-11-28*

### 🚀 Améliorations

- **[client]** prise en charge du composant de saisie de variable pour utiliser un composant personnalisé lorsque `nullable` est défini sur `false` ([#5746](https://github.com/nocobase/nocobase/pull/5746)) par @mytharcher

### 🐛 Corrections de bugs

- **[client]** Correction du problème de barre de défilement lorsque le tableau a peu de colonnes de taille moyenne ([#5745](https://github.com/nocobase/nocobase/pull/5745)) par @katherinehhh

## [v1.4.0-beta.11](https://www.nocobase.com/fr/blog/v1.4.0-beta.11)

*Date de sortie : 2024-12-02*

### 🚀 Améliorations

- **[client]** Prise en charge des champs de fichiers joints dans les formulaires publics ([#5749](https://github.com/nocobase/nocobase/pull/5749)) par @katherinehhh
- **[cli]** Redémarrage du processus lors de l'ajout ou de la suppression de plugins ([#5761](https://github.com/nocobase/nocobase/pull/5761)) par @chenos
- **[Calendrier]** Prise en charge de la création rapide de rendez-vous en cliquant sur une date dans le bloc calendrier ([#5733](https://github.com/nocobase/nocobase/pull/5733)) par @katherinehhh

### 🐛 Corrections de bugs

- **[client]** Correction du problème de largeur de champ dans le sous-tableau en disposition horizontale ([#5763](https://github.com/nocobase/nocobase/pull/5763)) par @katherinehhh

## [v1.5.0-beta.1](https://www.nocobase.com/fr/blog/v1.5.0-beta.1)

*Date de sortie : 2024-12-03*

### 🐛 Corrections de bugs

- **[client]** Correction du sélecteur d'enregistrement qui n'affiche pas les éléments sélectionnés lors de la sélection entre les pages ([#5770](https://github.com/nocobase/nocobase/pull/5770)) par @katherinehhh
- **[Mobile]** Correction du champ de saisie de date manquant dans l'opération de filtre sur mobile ([#5779](https://github.com/nocobase/nocobase/pull/5779)) par @katherinehhh
- **[Workflow]** Correction de l'absence de variable dans le modal de test des nœuds ([#5766](https://github.com/nocobase/nocobase/pull/5766)) par @mytharcher

![develop.png](https://static-docs.nocobase.com/7fcdd9456a17286d8a439eee52bcb8d2.png)

## [v1.6.0-alpha.2](https://www.nocobase.com/fr/blog/v1.6.0-alpha.2)

*Date de sortie : 2024-12-03*

### 🎉 Nouvelles fonctionnalités

- **[client]**

  - Prise en charge de l'activation de l'ouverture de pop-ups via un lien sur le champ readPretty ([#5747](https://github.com/nocobase/nocobase/pull/5747)) par @katherinehhh
  - Prise en charge des actions d'association et de dissociation dans le bloc d'association ([#5695](https://github.com/nocobase/nocobase/pull/5695)) par @katherinehhh
- **[serveur]** Ajout d'un gestionnaire d'audit ([#5601](https://github.com/nocobase/nocobase/pull/5601)) par @chenzhizdt
- **[Workflow]** prise en charge du déclenchement manuel du workflow ([#5664](https://github.com/nocobase/nocobase/pull/5664)) par @mytharcher
- **[Workflow : Événement pré-action]** prise en charge du déclenchement manuel du workflow par @mytharcher

### 🚀 Améliorations

- **[client]**

  - implémentation du chargement à la demande pour les composants front-end ([#5647](https://github.com/nocobase/nocobase/pull/5647)) par @gchust
  - Amélioration des performances de rendu des pages et prise en charge de la fonctionnalité de maintien en vie des pages ([#5515](https://github.com/nocobase/nocobase/pull/5515)) par @zhangzhonghe
- **[Champ de collection : Tri]** ajout d'une description de plugin ([#5720](https://github.com/nocobase/nocobase/pull/5720)) par @mytharcher
- **[Intégrer NocoBase]** Amélioration des performances de rendu des pages par @zhangzhonghe

### 🐛 Corrections de bugs

- **[client]**

  - Correction des problèmes où les variables ne peuvent pas être correctement utilisées dans les blocs de sources de données tierces ([#5782](https://github.com/nocobase/nocobase/pull/5782)) par @zhangzhonghe
  - Correction du problème où les valeurs des champs d'association sont vides dans les modèles de blocs. Correction du problème où la portée des données de bloc utilisant des variables ne fonctionne pas correctement dans les sources de données tierces ([#5777](https://github.com/nocobase/nocobase/pull/5777)) par @zhangzhonghe
  - Correction du problème où les propriétés dynamiques du composant ne fonctionnent pas avec le chargement différé ([#5776](https://github.com/nocobase/nocobase/pull/5776)) par @gchust
  - Correction du message d'avertissement dans React lors du chargement dynamique de hooks dans l'environnement de développement ([#5758](https://github.com/nocobase/nocobase/pull/5758)) par @gchust
- **[Visualisation de données]** Correction du problème où les composants de champ de filtre des blocs de graphiques ne s'affichent pas ([#5769](https://github.com/nocobase/nocobase/pull/5769)) par @2013xile

## À propos de NocoBase

NocoBase est une plateforme no-code open source privée offrant un contrôle total et une évolutivité infinie. Elle permet aux équipes de s'adapter rapidement aux changements tout en réduisant considérablement les coûts. Évitez des années de développement et des investissements substantiels en déployant NocoBase en quelques minutes.

<iframe src="https://cdn.embedly.com/widgets/media.html?src=https%3A%2F%2Fwww.youtube.com%2Fembed%2FhOM2MyzHn9I&display_name=YouTube&url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DhOM2MyzHn9I&image=http%3A%2F%2Fi.ytimg.com%2Fvi%2FhOM2MyzHn9I%2Fhqdefault.jpg&key=a19fcc184b9711e1b4764040d3dc5c07&type=text%2Fhtml&schema=youtube" allowfullscreen="" frameborder="0" height="480" width="854" title="" class="dc n pc cp bh" scrolling="no"></iframe>

Découvrez NocoBase en 3 minutes !

## 👇 Obtenir NocoBase

[**Page d'accueil**](https://www.nocobase.com/)

[**Démo**](https://demo.nocobase.com/new)

[**Documentation**](https://docs.nocobase.com/)

[**GitHub**](https://github.com/nocobase/nocobase)
