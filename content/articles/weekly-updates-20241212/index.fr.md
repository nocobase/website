---
title: "Mises à jour hebdomadaires de NocoBase : Amélioration des performances"
description: "Les mises à jour de cette semaine incluent : Optimisation du panneau d'actions et des composants de formulaire public pour l'adaptation mobile, et plus encore."
---

Résumez les journaux de mise à jour hebdomadaires du produit. Les dernières versions sont disponibles sur [notre blog](https://www.nocobase.com/en/blog/tags/release-notes).

**NocoBase est actuellement mis à jour avec trois branches : `main`, `next` et `develop`.**

![version.png](https://static-docs.nocobase.com/ba5f04e27e99c625cb3822da5df07860.png)

* `main` : La version la plus stable à ce jour, recommandée pour l'installation ;
* `next` : Version bêta, contient les nouvelles fonctionnalités à venir et a été testée préliminairement. Il peut y avoir des problèmes connus ou inconnus. Elle est principalement destinée aux utilisateurs testeurs pour recueillir des retours et optimiser davantage les fonctionnalités. Idéale pour les utilisateurs testeurs qui souhaitent découvrir les nouvelles fonctionnalités tôt et donner leur avis ;
* `develop` : Version alpha, contient le code de fonctionnalité le plus récent, peut être incomplète ou instable, principalement destinée au développement interne et à l'itération rapide. Adaptée aux utilisateurs techniques intéressés par les fonctionnalités de pointe du produit, mais avec des problèmes potentiels et des fonctions incomplètes. Ne pas utiliser en production.

## main

![main.png](https://static-docs.nocobase.com/47a3c71734c1d0f908b51f9ebd53c0ac.png)

### [v1.4.3](https://www.nocobase.com/en/blog/v1.4.3)

*Date de sortie : 2024-12-05*

#### 🚀 Améliorations

- **[test]** Autoriser la connexion avec le nom du rôle dans les cas de test ([#5794](https://github.com/nocobase/nocobase/pull/5794)) par @mytharcher
- **[Notification : Message in-app]** Mettre à jour les titres pour les URL de détail dans les formulaires de message in-app et les fichiers de localisation ([#5742](https://github.com/nocobase/nocobase/pull/5742)) par @sheldon66

#### 🐛 Corrections de bugs

- **[client]**
  - Correction du problème où le jeton n'est pas effacé après qu'un utilisateur sans rôle rencontre une erreur de connexion et clique sur le bouton « Se connecter avec un autre compte » ([#5790](https://github.com/nocobase/nocobase/pull/5790)) par @2013xile
  - Perte des en-têtes de requête sur les requêtes silencieuses ([#5795](https://github.com/nocobase/nocobase/pull/5795)) par @chenos
  - Page blanche lorsque l'utilisateur n'a pas de rôle ([#5797](https://github.com/nocobase/nocobase/pull/5797)) par @chenos
  - Correction du problème de barre de défilement dans la sous-table avec une taille petite sous le thème compact ([#5796](https://github.com/nocobase/nocobase/pull/5796)) par @katherinehhh

### [v1.4.4](https://www.nocobase.com/en/blog/v1.4.4)

*Date de sortie : 2024-12-08*

#### 🐛 Corrections de bugs

- **[client]**

  - Correction du problème d'affichage des champs de source de données externes dans le bloc tableau ([#5825](https://github.com/nocobase/nocobase/pull/5825)) par @katherinehhh
  - Correction du problème d'affichage pour les champs hérités dans la configuration du formulaire ([#5822](https://github.com/nocobase/nocobase/pull/5822)) par @katherinehhh
  - Correction du problème où les champs hérités n'apparaissent pas dans la liste des champs et ne peuvent pas être remplacés ([#5800](https://github.com/nocobase/nocobase/pull/5800)) par @katherinehhh
- **[Visualisation des données]** Correction du problème lors du formatage des champs de date tenant compte du fuseau horaire dans MySQL ([#5829](https://github.com/nocobase/nocobase/pull/5829)) par @2013xile
- **[Workflow]**

  - Correction de la transaction entre les sources de données qui provoquait une erreur d'événement de collection ([#5818](https://github.com/nocobase/nocobase/pull/5818)) par @mytharcher
  - Correction du type de date manqué dans la configuration de planification basée sur le champ de date ([#5816](https://github.com/nocobase/nocobase/pull/5816)) par @mytharcher
- **[Champ de collection : Plusieurs à plusieurs (tableau)]** Correction du problème où la mise à jour des champs de tableau m2m dans une collection de relations uniques ne prend pas effet ([#5820](https://github.com/nocobase/nocobase/pull/5820)) par @2013xile
- **[Calendrier]**

  - Correction de l'erreur lors du clic sur une date vide dans le calendrier ([#5803](https://github.com/nocobase/nocobase/pull/5803)) par @katherinehhh
  - Correction du problème où la fermeture d'une fenêtre contextuelle ouverte via le « Bloc Calendrier » entraîne la fermeture de toutes les fenêtres contextuelles ([#5793](https://github.com/nocobase/nocobase/pull/5793)) par @zhangzhonghe
- **[Formulaires publics]** Correction du chemin de scan de code QC incorrect dans le formulaire public de la sous-application ([#5799](https://github.com/nocobase/nocobase/pull/5799)) par @katherinehhh

### [v1.4.5](https://www.nocobase.com/en/blog/v1.4.5)

*Date de sortie : 2024-12-08*

#### 🐛 Corrections de bugs

- **[Contrôle d'accès]** Rafraîchir la page lorsque le rôle de l'utilisateur est incorrect ([#5821](https://github.com/nocobase/nocobase/pull/5821)) par @chenos

### [v1.4.6](https://www.nocobase.com/en/blog/v1.4.6)

*Date de sortie : 2024-12-08*

#### 🐛 Corrections de bugs

- **[Action : Importer des enregistrements]** Correction de l'importation de données avec un tableau dans les associations ([#5833](https://github.com/nocobase/nocobase/pull/5833)) par @chareice
- **[Contrôle d'accès]** Correction du problème d'utilisation de champs pour interroger la relation dans l'ACL ([#5832](https://github.com/nocobase/nocobase/pull/5832)) par @chareice

### [v1.4.7](https://www.nocobase.com/en/blog/v1.4.7)

*Date de sortie : 2024-12-09*

#### 🐛 Corrections de bugs

- **[Mobile]** Correction du problème d'affichage de la couleur d'arrière-plan sur mobile ([#5809](https://github.com/nocobase/nocobase/pull/5809)) par @katherinehhh

### [v1.4.8](https://www.nocobase.com/en/blog/v1.4.8)

*Date de sortie : 2024-12-10*

#### 🐛 Corrections de bugs

- **[client]**

  - Correction du problème de modèle de données dans le formulaire de filtre configuré dans le sélecteur d'enregistrement de champ d'association ([#5837](https://github.com/nocobase/nocobase/pull/5837)) par @katherinehhh
  - Correction du problème avec les modèles de chaîne Markdown ne chargeant pas les données d'association (Source de données externe) ([#5791](https://github.com/nocobase/nocobase/pull/5791)) par @katherinehhh
- **[Synchronisation des données utilisateur]** Ignorer les types de données non pris en charge lors de la synchronisation au lieu de générer une erreur. ([#5835](https://github.com/nocobase/nocobase/pull/5835)) par @chenzhizdt
- **[Gestionnaire de sauvegarde]**

  - Correction de l'ouverture lente de la fenêtre de téléchargement pour les gros fichiers de sauvegarde par @gchust
  - Correction du problème où la restauration d'une sous-application de sauvegarde entraîne le redémarrage de toutes les applications par @gchust

## next

![next.png](https://static-docs.nocobase.com/8ed17a0f08cc585018f6de6c8b13947d.png)

### [v1.5.0-beta.2](https://www.nocobase.com/en/blog/v1.5.0-beta.2)

*Date de sortie : 2024-12-06*

#### 🚀 Améliorations

- **[client]** Optimiser la logique récursive dans useMenuSearch pour de meilleures performances ([#5784](https://github.com/nocobase/nocobase/pull/5784)) par @katherinehhh
- **[Formulaires publics]** Optimiser le panneau d'actions et les composants de formulaire public pour l'adaptation mobile ([#5788](https://github.com/nocobase/nocobase/pull/5788)) par @katherinehhh

### [v1.5.0-beta.3](https://www.nocobase.com/en/blog/v1.5.0-beta.3)

*Date de sortie : 2024-12-10*

#### 🎉 Nouvelles fonctionnalités

- **[client]** Prise en charge de la configuration du texte, de l'icône et du type pour les boutons d'ajout et de sélection dans la sous-table ([#5778](https://github.com/nocobase/nocobase/pull/5778)) par @katherinehhh
- **[Calendrier]** Le plugin Calendrier ajoute le mode d'ouverture des événements ([#5808](https://github.com/nocobase/nocobase/pull/5808)) par @Cyx649312038

### [v1.5.0-beta.4](https://www.nocobase.com/en/blog/v1.5.0-beta.4)

*Date de sortie : 2024-12-11*

#### 🐛 Corrections de bugs

- **[Mobile]** Correction de l'adaptation mobile du composant de date sur la sous-page ([#5859](https://github.com/nocobase/nocobase/pull/5859)) par @katherinehhh

### [v1.5.0-beta.6](https://www.nocobase.com/en/blog/v1.5.0-beta.6)

*Date de sortie : 2024-12-11*

#### 🚀 Améliorations

- **[client]** Supprimer le composant squelette de ligne de tableau ([#5751](https://github.com/nocobase/nocobase/pull/5751)) par @zhangzhonghe

## develop

![develop.png](https://static-docs.nocobase.com/7fcdd9456a17286d8a439eee52bcb8d2.png)

### [v1.6.0-alpha.3](https://www.nocobase.com/en/blog/v1.6.0-alpha.3)

*Date de sortie : 2024-12-09*

#### 🚀 Améliorations

- **[client]** Supprimer les composants Formily du tableau pour améliorer les performances lors du changement de pagination du tableau ([#5738](https://github.com/nocobase/nocobase/pull/5738)) par @zhangzhonghe

#### 🐛 Corrections de bugs

- **[client]**

  - Correction du problème où les champs ne sont pas affichés après les avoir ajoutés dans un sous-formulaire ([#5827](https://github.com/nocobase/nocobase/pull/5827)) par @zhangzhonghe
  - Correction du problème où la modification de la valeur d'un champ d'association dans le bloc de détails ne se rafraîchit pas immédiatement ([#5826](https://github.com/nocobase/nocobase/pull/5826)) par @zhangzhonghe
  - Correction du problème où le clic sur les liens n'ouvre pas une fenêtre contextuelle lorsque « Activer le lien » est activé pour la première fois ([#5812](https://github.com/nocobase/nocobase/pull/5812)) par @zhangzhonghe
  - Empêcher plusieurs appels API lors de la fermeture de la fenêtre contextuelle ([#5804](https://github.com/nocobase/nocobase/pull/5804)) par @zhangzhonghe
  - Correction du problème où la connexion mobile redirige vers la page de bureau ([#5805](https://github.com/nocobase/nocobase/pull/5805)) par @zhangzhonghe
  - Correction du bouton d'action de configuration qui doit être aligné à gauche ([#5798](https://github.com/nocobase/nocobase/pull/5798)) par @katherinehhh
- **[build]** Correction de la mise en cache incorrecte des fichiers js front-end après la construction du plugin ([#5801](https://github.com/nocobase/nocobase/pull/5801)) par @gchust

## À propos de NocoBase

NocoBase est une plateforme sans code, open-source et privée, offrant un contrôle total et une évolutivité infinie. Elle permet aux équipes de s'adapter rapidement aux changements tout en réduisant considérablement les coûts. Évitez des années de développement et un investissement substantiel en déployant NocoBase en quelques minutes.

<iframe src="https://cdn.embedly.com/widgets/media.html?src=https%3A%2F%2Fwww.youtube.com%2Fembed%2FhOM2MyzHn9I&display_name=YouTube&url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DhOM2MyzHn9I&image=http%3A%2F%2Fi.ytimg.com%2Fvi%2FhOM2MyzHn9I%2Fhqdefault.jpg&key=a19fcc184b9711e1b4764040d3dc5c07&type=text%2Fhtml&schema=youtube" allowfullscreen="" frameborder="0" height="480" width="854" title="" class="dc n pc cp bh" scrolling="no"></iframe>

Découvrez NocoBase en 3 minutes !

## 👇 Obtenez NocoBase

[**Page d'accueil**](https://www.nocobase.com/)

[**Démo**](https://demo.nocobase.com/new)

[**Documentation**](https://docs.nocobase.com/)

[**GitHub**](https://github.com/nocobase/nocobase)
