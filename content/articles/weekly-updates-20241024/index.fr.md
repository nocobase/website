---
title: "Mises à jour hebdomadaires de NocoBase : prise en charge de la pagination des sous-tableaux, optimisation des workflows et plus encore"
description: "Mises à jour hebdomadaires de NocoBase 2024-10-24"
---

Résumez les journaux de mise à jour hebdomadaires du produit. Les dernières versions sont disponibles sur [notre blog](https://www.nocobase.com/en/blog/tags/release-notes).

NocoBase est actuellement mis à jour avec deux branches : `main` et `next`.

* `main` : La version la plus stable à ce jour, recommandée pour l'installation ;
* `next` : Version alpha, incluant certaines nouvelles fonctionnalités non encore publiées. Cette version peut ne pas être complètement stable et est adaptée aux développeurs ou testeurs souhaitant découvrir les nouvelles fonctionnalités à l'avance ou effectuer des tests de compatibilité.

![main.png](https://static-docs.nocobase.com/47a3c71734c1d0f908b51f9ebd53c0ac.png)

## [v1.3.32-beta](https://www.nocobase.com/en/blog/v1.3.32-beta)

*Date de publication : 2024-10-13*

### 🐛 Corrections de bugs

- **[client]** Un champ relationnel obligatoire déclenche toujours une erreur de validation après avoir sélectionné une valeur avec une variable dans le périmètre des données ([#5399](https://github.com/nocobase/nocobase/pull/5399)) par @katherinehhh

## [v1.3.33-beta](https://www.nocobase.com/en/blog/v1.3.33-beta)

*Date de publication : 2024-10-17*

### 🚀 Améliorations

- **[Workflow]** Ajout d'une info-bulle relative au champ d'association dans le mode batch du nœud de mise à jour ([#5426](https://github.com/nocobase/nocobase/pull/5426)) par @mytharcher

### 🐛 Corrections de bugs

- **[client]**

  - Correction du problème de la fenêtre « Modifier le profil » recouverte par la sous-page ([#5409](https://github.com/nocobase/nocobase/pull/5409)) par @zhangzhonghe
  - Les variables du nœud de workflow n'affichent pas les champs de collection hérités ([#5415](https://github.com/nocobase/nocobase/pull/5415)) par @chenos
  - La pagination ne se réinitialise pas après avoir effacé les données de filtre dans le bloc de filtrage de tableau ([#5411](https://github.com/nocobase/nocobase/pull/5411)) par @katherinehhh
- **[Gestionnaire de fichiers]** Suppression de la limite de 20 éléments pour le chargement des stockages dans la configuration de collection de modèles de fichiers ([#5430](https://github.com/nocobase/nocobase/pull/5430)) par @mytharcher
- **[Action : Dupliquer l'enregistrement]** Correction du problème où la fenêtre contextuelle d'édition en masse n'affichait pas le contenu ([#5412](https://github.com/nocobase/nocobase/pull/5412)) par @zhangzhonghe
- **[Visualisation de données]** Correction du problème d'affichage des valeurs par défaut dans le bloc de filtre de graphique ([#5405](https://github.com/nocobase/nocobase/pull/5405)) par @zhangzhonghe

## [v1.3.34-beta](https://www.nocobase.com/en/blog/v1.3.34-beta)

*Date de publication : 2024-10-21*

### 🎉 Nouvelles fonctionnalités

- **[test]** Les champs d'association dans les blocs de filtre de formulaire prennent en charge la configuration de la sélection multiple ([#5451](https://github.com/nocobase/nocobase/pull/5451)) par @zhangzhonghe
- **[client]** Ajout d'une variable nommée « Objet parent » ([#5449](https://github.com/nocobase/nocobase/pull/5449)) par @zhangzhonghe
  Référence : [Objet parent](https://docs.nocobase.com/handbook/ui/variables#parent-object)

### 🐛 Corrections de bugs

- **[client]**

  - Correction du problème d'analyse des variables des paramètres de recherche d'URL ([#5454](https://github.com/nocobase/nocobase/pull/5454)) par @zhangzhonghe
  - Correction du bug d'effacement des données lors de la sélection de données d'association avec un périmètre de données dans les sous-tableaux imbriqués ([#5441](https://github.com/nocobase/nocobase/pull/5441)) par @katherinehhh
  - Correction de la couleur d'arrière-plan de la ligne de tableau sélectionnée ([#5445](https://github.com/nocobase/nocobase/pull/5445)) par @mytharcher
- **[Bloc : Carte]** Suppression de la configuration du niveau de zoom pour les champs de carte dans la colonne de tableau ([#5457](https://github.com/nocobase/nocobase/pull/5457)) par @katherinehhh
- **[Gestionnaire de fichiers]** Correction de l'appel du hook de règle de stockage sur les champs en lecture seule ([#5447](https://github.com/nocobase/nocobase/pull/5447)) par @mytharcher
- **[Source de données : Principale]** Correction d'un test e2e échoué en raison d'un changement de composant ([#5437](https://github.com/nocobase/nocobase/pull/5437)) par @mytharcher

## [v1.3.35-beta](https://www.nocobase.com/en/blog/v1.3.35-beta)

*Date de publication : 2024-10-21*

### 🚀 Améliorations

- **[Workflow : nœud de messagerie]** Ajout d'un texte indicatif dans le nœud de messagerie ([#5470](https://github.com/nocobase/nocobase/pull/5470)) par @mytharcher

## [v1.3.36-beta](https://www.nocobase.com/en/blog/v1.3.36-beta)

*Date de publication : 2024-10-22*

### 🐛 Corrections de bugs

- **[Collection : Arborescence]** Correction du problème où la collection de chemin pour la collection arborescente d'héritage n'était pas créée automatiquement ([#5486](https://github.com/nocobase/nocobase/pull/5486)) par @2013xile
- **[Calendrier]** Affichage de la barre de pagination avec les données dans le tableau ([#5480](https://github.com/nocobase/nocobase/pull/5480)) par @katherinehhh
- **[Gestionnaire de fichiers]** Correction de l'impossibilité de télécharger un fichier en raison d'un hook de règle ([#5460](https://github.com/nocobase/nocobase/pull/5460)) par @mytharcher
- **[Champ de collection : Formule]** Correction d'un calcul de formule incorrect dans un sous-tableau imbriqué à plusieurs niveaux ([#5469](https://github.com/nocobase/nocobase/pull/5469)) par @gu-zhichao

## [v1.3.37-beta](https://www.nocobase.com/en/blog/v1.3.37-beta)

*Date de publication : 2024-10-23*

### 🚀 Améliorations

- **[client]** Remplacement de l'info-bulle dans le panneau de configuration de liaison de workflow par un bouton ([#5494](https://github.com/nocobase/nocobase/pull/5494)) par @mytharcher

### 🐛 Corrections de bugs

- **[Gestionnaire de fichiers]** Correction du téléchargement et de la suppression d'un enregistrement de fichier dans un bloc d'association ([#5493](https://github.com/nocobase/nocobase/pull/5493)) par @mytharcher

![next.png](https://static-docs.nocobase.com/8ed17a0f08cc585018f6de6c8b13947d.png)

## [v1.4.0-alpha.20241016035453](https://www.nocobase.com/en/blog/v1.4.0-alpha.20241016035453)

*Date de publication : 2024-10-16*

### 🎉 Nouvelles fonctionnalités

- **[sdk]** Permet de stocker les informations du client dans sessionStorage en définissant la variable d'environnement `API_CLIENT_STORAGE_TYPE` ([#5424](https://github.com/nocobase/nocobase/pull/5424)) par @2013xile
- **[Champ de collection : Pièce jointe (URL)]** Ajout d'un champ Pièce jointe (URL) par @katherinehhh

### 🚀 Améliorations

- **[client]**

  - Optimisation du débogage à distance ([#5394](https://github.com/nocobase/nocobase/pull/5394)) par @chenos
  - Optimisation du style pour centrer l'icône lorsque les boutons d'action utilisent uniquement l'icône ([#5413](https://github.com/nocobase/nocobase/pull/5413)) par @katherinehhh
  - Fermeture automatique de la fenêtre contextuelle de message lors de la mise à jour d'un enregistrement ([#5408](https://github.com/nocobase/nocobase/pull/5408)) par @katherinehhh
- **[Workflow : nœud de requête HTTP]** Prise en charge de SSE (Server-Sent Events) ([#5418](https://github.com/nocobase/nocobase/pull/5418)) par @chenos

### 🐛 Corrections de bugs

- **[Formulaires publics]** Correction du problème de clic sur les paramètres d'un formulaire public ([#5392](https://github.com/nocobase/nocobase/pull/5392)) par @katherinehhh
- **[client]**

  - Correction du problème d'affichage de la valeur dans la zone de saisie de la valeur par défaut ([#5400](https://github.com/nocobase/nocobase/pull/5400)) par @zhangzhonghe
  - Correction de l'erreur de non-recherche du champ d'association lorsque des règles de liaison sont définies pour le sous-tableau ([#5402](https://github.com/nocobase/nocobase/pull/5402)) par @zhangzhonghe
  - Correction d'un aperçu incorrect de la vignette lorsque le type de fichier n'est pas pris en charge par défaut ([#5401](https://github.com/nocobase/nocobase/pull/5401)) par @mytharcher
- **[Localisation]** Correction du problème où les traductions dans le plugin de localisation ne prenaient pas effet après la publication ([#5416](https://github.com/nocobase/nocobase/pull/5416)) par @2013xile

## [v1.4.0-alpha.20241017164316](https://www.nocobase.com/en/blog/v1.4.0-alpha.20241017164316)

*Date de publication : 2024-10-18*

### 🎉 Nouvelles fonctionnalités

- **[Workflow : nœud de boucle]** Ajout d'options de contrôle supplémentaires à la configuration du nœud de boucle ([#5342](https://github.com/nocobase/nocobase/pull/5342)) par @mytharcher
  Référence : [Nœud de boucle](https://docs.nocobase.com/handbook/workflow-loop)
- **[Workflow]** Ajout d'un bouton d'exécution de test pour les nœuds de workflow, et d'une API pour implémenter la fonction de test ([#5407](https://github.com/nocobase/nocobase/pull/5407)) par @mytharcher
- **[Composant de champ : masque]** Ajout du composant de champ `mask`, prenant en charge l'affichage des données de champ sous forme de chaîne masquée par @gchust
  Référence : [Masque](https://docs.nocobase.com/handbook/field-component-mask)

### 🚀 Améliorations

- **[client]** Permet de réinitialiser le titre d'une colonne de tableau à sa valeur par défaut ([#5439](https://github.com/nocobase/nocobase/pull/5439)) par @katherinehhh

### 🐛 Corrections de bugs

- **[client]** Correction des options du composant de champ qui n'étaient pas traduites correctement ([#5442](https://github.com/nocobase/nocobase/pull/5442)) par @gchust
- **[Workflow : nœud de requête HTTP]** Correction d'un message d'erreur obsolète dans le nœud de requête ([#5443](https://github.com/nocobase/nocobase/pull/5443)) par @mytharcher

## [v1.4.0-alpha.20241023053303](https://www.nocobase.com/en/blog/v1.4.0-alpha.20241023053303)

*Date de publication : 2024-10-23*

### 🚀 Améliorations

- **[client]** Le sous-tableau prend en charge la pagination ([#5450](https://github.com/nocobase/nocobase/pull/5450)) par @katherinehhh
- **[Bloc : Kanban]** Ajout de la prise en charge pour activer ou désactiver le tri par glisser-déposer dans le bloc Kanban ([#5468](https://github.com/nocobase/nocobase/pull/5468)) par @katherinehhh
- **[Calendrier]** Affichage de la fenêtre contextuelle de création lors de la sélection d'un créneau dans le calendrier ([#5483](https://github.com/nocobase/nocobase/pull/5483)) par @gu-zhichao
- **[Gestionnaire multi-applications]** Prise en charge de la variable d'environnement `USE_DB_SCHEMA_IN_SUBAPP` ([#5481](https://github.com/nocobase/nocobase/pull/5481)) par @chenos
- **[Workflow]** Ajout d'un composant d'ensemble de champs de type carte ([#5464](https://github.com/nocobase/nocobase/pull/5464)) par @mytharcher

### 🐛 Corrections de bugs

- **[client]** La valeur de la variable est perdue après avoir actualisé la fenêtre contextuelle du bloc Markdown ([#5478](https://github.com/nocobase/nocobase/pull/5478)) par @katherinehhh
- **[Visualisation de données]** Correction de problèmes lors de l'utilisation d'une source de données Oracle externe pour le plugin de visualisation de données, par exemple des problèmes de formatage de date ([#5436](https://github.com/nocobase/nocobase/pull/5436)) par @2013xile
- **[Gestionnaire de fichiers]** Correction de l'impossibilité de télécharger un fichier en raison d'un hook de règle ([#5460](https://github.com/nocobase/nocobase/pull/5460)) par @mytharcher

## À propos de NocoBase

NocoBase est une plateforme no-code privée et open source offrant un contrôle total et une évolutivité infinie. Elle permet aux équipes de s'adapter rapidement aux changements tout en réduisant considérablement les coûts. Évitez des années de développement et des investissements substantiels en déployant NocoBase en quelques minutes.

<iframe src="https://cdn.embedly.com/widgets/media.html?src=https%3A%2F%2Fwww.youtube.com%2Fembed%2FhOM2MyzHn9I&display_name=YouTube&url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DhOM2MyzHn9I&image=http%3A%2F%2Fi.ytimg.com%2Fvi%2FhOM2MyzHn9I%2Fhqdefault.jpg&key=a19fcc184b9711e1b4764040d3dc5c07&type=text%2Fhtml&schema=youtube" allowfullscreen="" frameborder="0" height="480" width="854" title="" class="dc n pc cp bh" scrolling="no"></iframe>

Découvrez NocoBase en 3 minutes !

## 👇 Obtenez NocoBase

[**Page d'accueil**](https://www.nocobase.com/)

[**Démo**](https://demo.nocobase.com/new)

[**Documentation**](https://docs.nocobase.com/)

[**GitHub**](https://github.com/nocobase/nocobase)
