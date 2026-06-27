---
title: "Mises à jour hebdomadaires de NocoBase : Optimisation et corrections de bugs"
description: "Les mises à jour de cette semaine incluent : optimisation des workflows, corrections de bugs, et plus encore."
---

Résumez les journaux de mise à jour hebdomadaires du produit. Les dernières versions sont disponibles sur [notre blog](https://www.nocobase.com/en/blog/tags/release-notes).

**NocoBase est actuellement mis à jour avec trois branches : `main`, `next` et `develop`.**

![version.png](https://static-docs.nocobase.com/ba5f04e27e99c625cb3822da5df07860.png)

* `main` : La version la plus stable à ce jour, recommandée pour l'installation ;
* `next` : Version bêta, contient les nouvelles fonctionnalités à venir et a été testée préliminairement. Il peut y avoir des problèmes connus ou inconnus. Elle est principalement destinée aux utilisateurs testeurs pour recueillir des retours et optimiser davantage les fonctionnalités. Idéale pour les utilisateurs testeurs qui souhaitent découvrir les nouvelles fonctionnalités tôt et donner leur avis ;
* `develop` : Version alpha, contient le code de fonctionnalité le plus récent, peut être incomplète ou instable, principalement destinée au développement interne et à l'itération rapide. Adaptée aux utilisateurs techniques intéressés par les fonctionnalités de pointe du produit, mais avec des problèmes potentiels et des fonctions incomplètes. Ne pas utiliser en production.

## main

![main.png](https://static-docs.nocobase.com/47a3c71734c1d0f908b51f9ebd53c0ac.png)

### [v1.4.16](https://www.nocobase.com/en/blog/v1.4.16)

*Date de sortie : 2024-12-26*

#### 🐛 Corrections de bugs

- **[client]** Correction d'un problème de conversion de précision du champ UnixTimestamp ([#5931](https://github.com/nocobase/nocobase/pull/5931)) par @chenos
- **[Action : Dupliquer un enregistrement]** Correction du problème où le champ d'association o2o n'affichait pas le champ de collection cible configuré dans les blocs de détail et de formulaire ([#5921](https://github.com/nocobase/nocobase/pull/5921)) par @katherinehhh
- **[Gestionnaire de sauvegarde]** Correction d'une erreur de sauvegarde lorsque la version de mysqldump est inférieure à 8 par @gchust

### [v1.4.17](https://www.nocobase.com/en/blog/v1.4.17)

*Date de sortie : 2024-12-31*

#### 🎉 Nouvelles fonctionnalités

- **[client]** Prise en charge de l'utilisation de la variable « Enregistrements sélectionnés du tableau » dans les champs de tableau m2m ([#5974](https://github.com/nocobase/nocobase/pull/5974)) par @2013xile

#### 🚀 Améliorations

- **[undefined]** Activation du plugin de thème par défaut ([#5957](https://github.com/nocobase/nocobase/pull/5957)) par @zhangzhonghe
- **[Source de données : Principale]** Ajout d'une validation de conflit de noms pour empêcher les utilisateurs de créer des Collections avec le même nom que les Collections système ([#5962](https://github.com/nocobase/nocobase/pull/5962)) par @chareice
- **[Workflow]** Éviter d'utiliser à mauvais escient les variables de plage de dates dans la plupart des endroits, sauf dans le composant de filtre ([#5954](https://github.com/nocobase/nocobase/pull/5954)) par @mytharcher

#### 🐛 Corrections de bugs

- **[database]**

  - Correction d'un problème dans l'action destroy où filterByTk avec le paramètre filter ne pouvait pas supprimer les données ([#5976](https://github.com/nocobase/nocobase/pull/5976)) par @chareice
  - Les méthodes firstOrCreate et updateOrCreate du repository perdent le contexte ([#5973](https://github.com/nocobase/nocobase/pull/5973)) par @chenos
- **[client]**

  - Correction d'un problème lors de l'ajout d'un champ de relation un-à-un dans le formulaire ([#5975](https://github.com/nocobase/nocobase/pull/5975)) par @katherinehhh
  - Correction d'un problème d'affectation de champ dans le sous-tableau lors de la re-sélection de données après la suppression de données ([#5958](https://github.com/nocobase/nocobase/pull/5958)) par @katherinehhh
  - Correction de l'erreur du bloc tableau causée par des données contenant des champs nommés 'children' ([#5951](https://github.com/nocobase/nocobase/pull/5951)) par @zhangzhonghe
- **[Source de données : Principale]** Correction de problèmes de support hérités avec le champ unixTimestamp. ([#5967](https://github.com/nocobase/nocobase/pull/5967)) par @chareice
- **[Workflow]** Correction d'une erreur de bloc de sous-détails dans la configuration de l'interface utilisateur du nœud manuel ([#5953](https://github.com/nocobase/nocobase/pull/5953)) par @mytharcher

## next

![next.png](https://static-docs.nocobase.com/8ed17a0f08cc585018f6de6c8b13947d.png)

### [v1.5.0-beta.18](https://www.nocobase.com/en/blog/v1.5.0-beta.18)

*Date de sortie : 2024-12-27*

#### 🐛 Corrections de bugs

- **[client]**

  - Correction du problème d'affichage inattendu des cellules de tableau dans les plugins tiers ([#5934](https://github.com/nocobase/nocobase/pull/5934)) par @zhangzhonghe
  - Correction du problème où le bouton de suppression était désactivé dans la page de gestion des modèles de blocs ([#5922](https://github.com/nocobase/nocobase/pull/5922)) par @zhangzhonghe
- **[Vérification]** Correction des champs de formulaire vides lors de l'ouverture du tiroir d'édition dans la page des paramètres de vérification ([#5949](https://github.com/nocobase/nocobase/pull/5949)) par @chenos
- **[Workflow : Événement d'action personnalisée]**

  - Correction de l'échec du test sur SQLite par @mytharcher
  - Correction des cas de test du déclencheur d'action personnalisée par @mytharcher
- **[Workflow : Événement pré-action]** Correction des cas de test de l'intercepteur de requête par @mytharcher

### [v1.5.0-beta.19](https://www.nocobase.com/en/blog/v1.5.0-beta.19)

*Date de sortie : 2024-12-31*

#### 🐛 Corrections de bugs

- **[client]**

  - Correction du problème où le sélecteur de plage de dates dans le formulaire/action de filtre n'affichait pas le sélecteur d'heure lorsque showTime était défini ([#5956](https://github.com/nocobase/nocobase/pull/5956)) par @katherinehhh
  - Correction du problème où le clic sur les champs d'association n'ouvrait pas la boîte de dialogue contextuelle ([#5972](https://github.com/nocobase/nocobase/pull/5972)) par @zhangzhonghe
- **[Workflow : Message de réponse]** Correction de l'utilisation d'un nom de paramètre incorrect par @mytharcher

### v1.5.0-beta.20

*Date de sortie : 2024-12-31*

#### 🎉 Nouvelles fonctionnalités

- **[[Action : Importer des enregistrements (Pro)](https://docs.nocobase.com/handbook/action-import-pro)]** : Amélioration des capacités d'importation de données avec la prise en charge des importations asynchrones, des importations de millions d'enregistrements, de l'identification et du traitement des données en double, des mises à jour de données et des déclencheurs de workflow.
- **[[Action : Exporter des enregistrements (Pro)](https://docs.nocobase.com/handbook/action-export-pro)]** : Amélioration des capacités d'exportation de données avec la prise en charge des exportations asynchrones, des exportations de millions d'enregistrements et des exportations de pièces jointes.

## À propos de NocoBase

NocoBase est une plateforme no-code privée et open source offrant un contrôle total et une évolutivité infinie. Elle permet aux équipes de s'adapter rapidement aux changements tout en réduisant considérablement les coûts. Évitez des années de développement et des investissements substantiels en déployant NocoBase en quelques minutes.

<iframe src="https://cdn.embedly.com/widgets/media.html?src=https%3A%2F%2Fwww.youtube.com%2Fembed%2FhOM2MyzHn9I&display_name=YouTube&url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DhOM2MyzHn9I&image=http%3A%2F%2Fi.ytimg.com%2Fvi%2FhOM2MyzHn9I%2Fhqdefault.jpg&key=a19fcc184b9711e1b4764040d3dc5c07&type=text%2Fhtml&schema=youtube" allowfullscreen="" frameborder="0" height="480" width="854" title="" class="dc n pc cp bh" scrolling="no"></iframe>

Découvrez NocoBase en 3 minutes !

## 👇 Obtenez NocoBase

[**Page d'accueil**](https://www.nocobase.com/)

[**Démo**](https://demo.nocobase.com/new)

[**Documentation**](https://docs.nocobase.com/)

[**GitHub**](https://github.com/nocobase/nocobase)
