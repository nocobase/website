---
title: "Mises à jour hebdomadaires de NocoBase : Prise en charge de la configuration des formulaires de profil utilisateur"
description: "Les mises à jour de cette semaine incluent : la prise en charge de la configuration des formulaires de profil utilisateur ainsi que des formulaires de création et d'édition dans la gestion des utilisateurs, et plus encore."
---

Résumez les journaux de mise à jour hebdomadaires du produit. Les dernières versions sont disponibles sur [notre blog](https://www.nocobase.com/en/blog/tags/release-notes).

**NocoBase est actuellement mis à jour avec trois branches : `main`, `next` et `develop`.**

![version.png](https://static-docs.nocobase.com/ba5f04e27e99c625cb3822da5df07860.png)

* `main` : La version la plus stable à ce jour, recommandée pour l'installation ;
* `next` : Version bêta, contient les nouvelles fonctionnalités à venir et a été testée préliminairement. Il peut y avoir des problèmes connus ou inconnus. Elle est principalement destinée aux utilisateurs testeurs pour recueillir des retours et optimiser davantage les fonctionnalités. Idéale pour les utilisateurs testeurs qui souhaitent découvrir les nouvelles fonctionnalités tôt et donner leur avis ;
* `develop` : Version alpha, contient le code de fonctionnalité le plus récent, peut être incomplète ou instable, principalement destinée au développement interne et à l'itération rapide. Adaptée aux utilisateurs techniques intéressés par les fonctionnalités de pointe du produit, mais avec des problèmes potentiels et des fonctions incomplètes. Ne pas utiliser en production.

## main

![main.png](https://static-docs.nocobase.com/47a3c71734c1d0f908b51f9ebd53c0ac.png)

### [v1.4.11](https://www.nocobase.com/en/blog/v1.4.11)

*Date de sortie : 2024-12-18*

#### 🚀 Améliorations

- **[client]** Rendre plus de composants compatibles avec l'élément de configuration 'Débordement de contenu avec ellipse' ([#5888](https://github.com/nocobase/nocobase/pull/5888)) par @zhangzhonghe
- **[base de données]** Ajouter firstOrCreate et updateOrCreate au référentiel de relations ([#5894](https://github.com/nocobase/nocobase/pull/5894)) par @chareice

#### 🐛 Corrections de bugs

- **[client]**

  - Correction du paramètre x-data-source manquant dans le modèle de requête en double pour le bloc de source de données externe ([#5882](https://github.com/nocobase/nocobase/pull/5882)) par @katherinehhh
  - Correction du problème de barre de défilement horizontale dans le tableau au sein du plugin ([#5899](https://github.com/nocobase/nocobase/pull/5899)) par @katherinehhh
  - Correction du problème où des options 'N/A' supplémentaires apparaissaient parfois dans les listes déroulantes de champs d'association ([#5878](https://github.com/nocobase/nocobase/pull/5878)) par @zhangzhonghe
  - Correction du problème de création de vue PG, résolution de l'erreur lors de la sélection de vues entre schémas ([#5881](https://github.com/nocobase/nocobase/pull/5881)) par @katherinehhh
  - Correction du problème avec les styles de groupe dans les blocs de formulaire lorsque la disposition est définie sur horizontale ([#5884](https://github.com/nocobase/nocobase/pull/5884)) par @katherinehhh
- **[Utilisateurs]**

  - Correction du problème où le formulaire n'est pas réinitialisé après avoir ajouté ou modifié un utilisateur dans la gestion des utilisateurs. ([#5875](https://github.com/nocobase/nocobase/pull/5875)) par @2013xile
  - Correction des problèmes où les paramètres de pagination sont réinitialisés après avoir modifié et soumis les profils utilisateur dans la gestion des utilisateurs suite à un changement de page ou de taille de page. ([#5893](https://github.com/nocobase/nocobase/pull/5893)) par @2013xile
- **[Gestionnaire de source de données]** Correction des problèmes de filtrage avec la Collection de source de données externe ([#5890](https://github.com/nocobase/nocobase/pull/5890)) par @chareice
- **[Formulaires publics]** Correction du problème où le changement de thème global affecte le thème de la page d'aperçu du formulaire public ([#5883](https://github.com/nocobase/nocobase/pull/5883)) par @katherinehhh

### [v1.4.13](https://www.nocobase.com/en/blog/v1.4.13)

*Date de sortie : 2024-12-19*

#### 🚀 Améliorations

- **[Collection : SQL]** Interdire l'utilisation de mots-clés et de fonctions dangereux dans SQL. ([#5913](https://github.com/nocobase/nocobase/pull/5913)) par @2013xile
- **[Éditeur de thème]** Optimiser la validation API pour la modification du profil utilisateur et les mises à jour de mot de passe ([#5912](https://github.com/nocobase/nocobase/pull/5912)) par @2013xile

#### 🐛 Corrections de bugs

- **[Source de données : Principale]** Correction des problèmes de chargement des clés étrangères ([#5903](https://github.com/nocobase/nocobase/pull/5903)) par @chareice
- **[Collection : SQL]** Correction du problème où les champs disparaissent après la mise à jour d'une Collection SQL. ([#5909](https://github.com/nocobase/nocobase/pull/5909)) par @chareice
- **[Gestionnaire de sauvegarde]** Correction de la restauration de sauvegarde qui ne fonctionnait pas sous Windows par @gchust

### [v1.4.14](https://www.nocobase.com/en/blog/v1.4.14)

*Date de sortie : 2024-12-21*

#### 🐛 Corrections de bugs

- **[Visualisation de données]** Correction de l'erreur lors du filtrage avec des associations plusieurs-à-plusieurs imbriquées dans la requête de graphique. ([#5917](https://github.com/nocobase/nocobase/pull/5917)) par @2013xile
- **[Workflow : Nœud d'agrégation]** Correction du résultat d'agrégation incorrect causé par la transaction ([#5916](https://github.com/nocobase/nocobase/pull/5916)) par @mytharcher

### [v1.4.15](https://www.nocobase.com/en/blog/v1.4.15)

*Date de sortie : 2024-12-25*

#### 🐛 Corrections de bugs

- **[serveur]** Les collections n'étaient pas créées automatiquement lors de l'activation du plugin ([#5939](https://github.com/nocobase/nocobase/pull/5939)) par @chenos
- **[client]** Correction de la recherche de champ de propriété dans les règles de liaison qui ne correspondait pas aux données correctes ([#5925](https://github.com/nocobase/nocobase/pull/5925)) par @katherinehhh
- **[Workflow]**

  - Correction du déclencheur planifié sur le champ de date sans fuseau horaire ([#5938](https://github.com/nocobase/nocobase/pull/5938)) par @mytharcher
  - Correction de la traduction de la variable de plage de dates ([#5919](https://github.com/nocobase/nocobase/pull/5919)) par @mytharcher

## next

![next.png](https://static-docs.nocobase.com/8ed17a0f08cc585018f6de6c8b13947d.png)

### [v1.5.0-beta.13](https://www.nocobase.com/en/blog/v1.5.0-beta.13)

*Date de sortie : 2024-12-21*

#### 🚀 Améliorations

- **[Visualisation de données]** Ajouter le paramètre offset à charts-query ([#5911](https://github.com/nocobase/nocobase/pull/5911)) par @Albert-mah

### [v1.5.0-beta.14](https://www.nocobase.com/en/blog/v1.5.0-beta.14)

*Date de sortie : 2024-12-21*

#### 🐛 Corrections de bugs

- **[Visualisation de données]** Correction de l'erreur lors du filtrage avec des associations plusieurs-à-plusieurs imbriquées dans la requête de graphique. ([#5917](https://github.com/nocobase/nocobase/pull/5917)) par @2013xile
- **[Workflow : Nœud d'agrégation]** Correction du résultat d'agrégation incorrect causé par la transaction ([#5916](https://github.com/nocobase/nocobase/pull/5916)) par @mytharcher

### [v1.5.0-beta.15](https://www.nocobase.com/en/blog/v1.5.0-beta.15)

*Date de sortie : 2024-12-23*

#### 🎉 Nouvelles fonctionnalités

- **[client]** Ajouter une plage de dates limitée au composant de champ de date ([#5852](https://github.com/nocobase/nocobase/pull/5852)) par @Cyx649312038

### [v1.5.0-beta.16](https://www.nocobase.com/en/blog/v1.5.0-beta.16)

*Date de sortie : 2024-12-24*

#### 🐛 Corrections de bugs

- **[build]** Correction du problème de chargement après avoir défini la variable d'environnement `APP_PUBLIC_PATH` ([#5924](https://github.com/nocobase/nocobase/pull/5924)) par @gchust

## develop

![develop.png](https://static-docs.nocobase.com/7fcdd9456a17286d8a439eee52bcb8d2.png)

### [v1.6.0-alpha.6](https://www.nocobase.com/en/blog/v1.6.0-alpha.6)

*Date de sortie : 2024-12-19*

#### 🎉 Nouvelles fonctionnalités

- **[client]** Prise en charge de la sélection de données existantes dans le sous-formulaire pour le champ d'association plusieurs-à-plusieurs ([#5849](https://github.com/nocobase/nocobase/pull/5849)) par @katherinehhh

### [v1.6.0-alpha.7](https://www.nocobase.com/en/blog/v1.6.0-alpha.7)

*Date de sortie : 2024-12-25*

#### 🎉 Nouvelles fonctionnalités

- **[Utilisateurs]** Prise en charge de la configuration des formulaires de profil utilisateur ainsi que des formulaires de création et de modification dans la gestion des utilisateurs. ([#5698](https://github.com/nocobase/nocobase/pull/5698)) par @2013xile

## À propos de NocoBase

NocoBase est une plateforme sans code, open source et privée, offrant un contrôle total et une évolutivité infinie. Elle permet aux équipes de s'adapter rapidement aux changements tout en réduisant considérablement les coûts. Évitez des années de développement et des investissements substantiels en déployant NocoBase en quelques minutes.

<iframe src="https://cdn.embedly.com/widgets/media.html?src=https%3A%2F%2Fwww.youtube.com%2Fembed%2FhOM2MyzHn9I&display_name=YouTube&url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DhOM2MyzHn9I&image=http%3A%2F%2Fi.ytimg.com%2Fvi%2FhOM2MyzHn9I%2Fhqdefault.jpg&key=a19fcc184b9711e1b4764040d3dc5c07&type=text%2Fhtml&schema=youtube" allowfullscreen="" frameborder="0" height="480" width="854" title="" class="dc n pc cp bh" scrolling="no"></iframe>

Découvrez NocoBase en 3 minutes !

## 👇 Obtenez NocoBase

[**Page d'accueil**](https://www.nocobase.com/)

[**Démo**](https://demo.nocobase.com/new)

[**Documentation**](https://docs.nocobase.com/)

[**GitHub**](https://github.com/nocobase/nocobase)
