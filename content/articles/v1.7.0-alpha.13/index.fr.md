---
title: "NocoBase v1.7.0-alpha.13 : prise en charge des variables dans le titre et le contenu de la confirmation secondaire"
description: "Notes de version de v1.7.0-alpha.13"
---

### 🎉 Nouvelles fonctionnalités

- **[client]**
  - Prise en charge des variables dans le titre et le contenu de la confirmation secondaire ([#6787](https://github.com/nocobase/nocobase/pull/6787)) par @katherinehhh

  - Prise en charge de la configuration de règles de liaison dans les blocs pour l'affichage/masquage dynamique ([#6636](https://github.com/nocobase/nocobase/pull/6636)) par @katherinehhh

- **[undefined]** Ajout d'un CI de publication pour le kit de licence ([#6786](https://github.com/nocobase/nocobase/pull/6786)) par @jiannx

- **[Bloc : iframe]** Le bloc Iframe prend désormais en charge la configuration de l'attribut allow ([#6824](https://github.com/nocobase/nocobase/pull/6824)) par @zhangzhonghe

- **[Authentification]** Prise en charge de la fonction "Mot de passe oublié" ([#6616](https://github.com/nocobase/nocobase/pull/6616)) par @zhangzhonghe
Référence : [Mot de passe oublié](https://docs.nocobase.com/handbook/auth/user#forgot-password)
- **[Gestionnaire de fichiers]** Fonctionnalité : Ajout de l'API `getFileStream` pour la prise en charge du streaming de fichiers. ([#6741](https://github.com/nocobase/nocobase/pull/6741)) par @sheldon66

- **[Action : Requête personnalisée]** Prise en charge de la variable de réponse dans le message de succès de l'action de requête personnalisée ([#6694](https://github.com/nocobase/nocobase/pull/6694)) par @katherinehhh

- **[Impression de modèle]** Fonctionnalité : Prise en charge des options Select `{ label, value }` dans l'impression de modèle. par @sheldon66

- **[Bloc : Arborescence]** Le bloc de filtre arborescent prend en charge les règles de liaison par @katherinehhh

- **[Visualisation de données : ECharts]** Ajout du paramètre "Inverser l'axe Y" pour les diagrammes à barres par @2013xile

### 🚀 Améliorations

- **[client]**
  - Le composant RichText prend en charge les propriétés modules et formats ([#6807](https://github.com/nocobase/nocobase/pull/6807)) par @jiannx

  - Optimisation du style du bouton d'ajout de sous-tableau et alignement du paginateur sur la même ligne ([#6790](https://github.com/nocobase/nocobase/pull/6790)) par @katherinehhh

  - Affichage du titre du bouton avec une infobulle au survol de l'icône d'action ([#6761](https://github.com/nocobase/nocobase/pull/6761)) par @katherinehhh

  - Maintien de la fonctionnalité du modèle de référence ([#6743](https://github.com/nocobase/nocobase/pull/6743)) par @gchust

  - Ajustement du message de téléchargement ([#6757](https://github.com/nocobase/nocobase/pull/6757)) par @mytharcher

- **[utils]** Augmentation de la hauteur de la liste des champs du bouton de filtre et tri/catégorisation des champs ([#6779](https://github.com/nocobase/nocobase/pull/6779)) par @zhangzhonghe

- **[Gestionnaire de fichiers]** Ajout d'une option de délai d'attente OSS par défaut à 10 min ([#6795](https://github.com/nocobase/nocobase/pull/6795)) par @mytharcher

- **[Visualisation de données]** Ajout d'une API étendue pour la configuration de l'interface de champ ([#6742](https://github.com/nocobase/nocobase/pull/6742)) par @2013xile

- **[Politique de mot de passe]** Modification de l'expiration par défaut du mot de passe pour qu'il n'expire jamais par @2013xile

- **[WeCom]** Priorisation de l'email professionnel sur l'email personnel lors de la mise à jour de l'email de l'utilisateur par @2013xile

### 🐛 Corrections de bugs

- **[base de données]**
  - Échec de l'importation en raison des valeurs des champs de texte. ([#6699](https://github.com/nocobase/nocobase/pull/6699)) par @aaaaaajie

  - Correction de l'association belongs-to non chargée dans les appends lorsque la clé étrangère est bigInt sous MariaDB ([#6823](https://github.com/nocobase/nocobase/pull/6823)) par @mytharcher

  - Correction des cas de test ([#6811](https://github.com/nocobase/nocobase/pull/6811)) par @mytharcher

  - Évitement d'une erreur lorsque le type de données n'est pas une chaîne ([#6797](https://github.com/nocobase/nocobase/pull/6797)) par @mytharcher

  - Ajout de unavailableActions à la collection SQL et à la collection de vues ([#6765](https://github.com/nocobase/nocobase/pull/6765)) par @katherinehhh

- **[client]**
  - Échec de la soumission d'un champ d'association multiple lors de l'affichage des champs de la collection associée ([#6833](https://github.com/nocobase/nocobase/pull/6833)) par @katherinehhh

  - Impossible de faire glisser d'autres boutons sur le bouton de duplication ([#6822](https://github.com/nocobase/nocobase/pull/6822)) par @katherinehhh

  - Sélecteur de tableau dans le formulaire de filtre, style anormal ([#6827](https://github.com/nocobase/nocobase/pull/6827)) par @zhangzhonghe

  - Lorsque le composant de champ de relation du formulaire de filtre est changé en sélecteur de données, il n'y a pas d'élément de configuration "Autoriser la sélection multiple" ([#6656](https://github.com/nocobase/nocobase/pull/6656)) par @zhangzhonghe

  - Dans les sous-pages imbriquées, la liste des blocs ne s'affiche pas lors du survol de la souris sur le bouton "Ajouter un bloc" ([#6832](https://github.com/nocobase/nocobase/pull/6832)) par @zhangzhonghe

  - Problème de style de la barre de pagination du sous-tableau en mode lecture seule ([#6830](https://github.com/nocobase/nocobase/pull/6830)) par @katherinehhh

  - Problème de configuration des règles de liaison dans le sous-formulaire (popup) à l'intérieur du sous-tableau ([#6803](https://github.com/nocobase/nocobase/pull/6803)) par @katherinehhh

  - Lorsque la sélection de variable nécessite un chargement asynchrone, le dernier menu sélectionné est perdu. ([#6802](https://github.com/nocobase/nocobase/pull/6802)) par @gchust

  - Plusieurs messages d'erreur affichés lorsqu'une règle de validation est violée dans les champs du formulaire ([#6805](https://github.com/nocobase/nocobase/pull/6805)) par @katherinehhh

  - Correction du problème où les sous-champs de champ un-à-plusieurs ne peuvent pas être sélectionnés comme options de filtrage dans les formulaires de filtre ([#6809](https://github.com/nocobase/nocobase/pull/6809)) par @zhangzhonghe

  - Transmission d'autres props au composant Variable.Input. ([#6670](https://github.com/nocobase/nocobase/pull/6670)) par @sheldon66

  - 子表格中子表单（弹窗）联动规则缺少字段属性设置 ([#6800](https://github.com/nocobase/nocobase/pull/6800)) par @katherinehhh

  - Le champ d'association ne soumet pas les données lors de l'affichage du champ de la collection associée ([#6798](https://github.com/nocobase/nocobase/pull/6798)) par @katherinehhh

  - Dans le formulaire de filtre, le changement d'opérateur de champ puis le rafraîchissement de la page provoque une erreur ([#6781](https://github.com/nocobase/nocobase/pull/6781)) par @zhangzhonghe

  - Dans le bloc pliable, cliquer sur le bouton d'effacement dans la zone de recherche du champ de relation ne doit pas supprimer la plage de données ([#6782](https://github.com/nocobase/nocobase/pull/6782)) par @zhangzhonghe

  - Problème d'alignement du bouton d'ajout d'enregistrement enfant dans le tableau arborescent ([#6791](https://github.com/nocobase/nocobase/pull/6791)) par @katherinehhh

  - Interdiction de déplacer les menus avant ou après les onglets de page ([#6777](https://github.com/nocobase/nocobase/pull/6777)) par @zhangzhonghe

  - Le bloc de tableau affiche des données en double lors du filtrage ([#6792](https://github.com/nocobase/nocobase/pull/6792)) par @zhangzhonghe

  - Problème d'opérateur de paramètre de requête URL ([#6770](https://github.com/nocobase/nocobase/pull/6770)) par @katherinehhh

  - Seule l'action d'exportation dans la collection de vues est prise en charge lorsque writableView est false ([#6763](https://github.com/nocobase/nocobase/pull/6763)) par @katherinehhh

  - Données incorrectes récupérées pour les champs de tableau many-to-many à partir de tables associées dans les formulaires ([#6744](https://github.com/nocobase/nocobase/pull/6744)) par @2013xile

  - Création inattendue de données d'association lors de l'affichage d'un champ d'association dans un sous-formulaire/sous-tableau dans un formulaire de création ([#6727](https://github.com/nocobase/nocobase/pull/6727)) par @katherinehhh

- **[create-nocobase-app]** Correction temporaire du problème MariaDB en rétrogradant vers 2.5.6 ([#6762](https://github.com/nocobase/nocobase/pull/6762)) par @chenos

- **[Action : Exporter les enregistrements]** Correction de l'erreur d'exportation de longs textes. ([#6713](https://github.com/nocobase/nocobase/pull/6713)) par @aaaaaajie

- **[Champ de collection : Pièce jointe (URL)]** Les champs de pièce jointe (URL) ne doivent pas permettre la configuration de valeur dans la règle de liaison ([#6831](https://github.com/nocobase/nocobase/pull/6831)) par @katherinehhh

- **[Vérification]** Correction des problèmes du script de migration ([#6820](https://github.com/nocobase/nocobase/pull/6820)) par @2013xile

- **[Authentification]** Interdiction de modifier le nom de l'authentificateur ([#6808](https://github.com/nocobase/nocobase/pull/6808)) par @2013xile

- **[Action : Requête personnalisée]** La réponse de la requête personnalisée définie sur une variable ne s'affiche pas correctement ([#6793](https://github.com/nocobase/nocobase/pull/6793)) par @katherinehhh

- **[Bloc : Panneau d'action]** Icône du panneau d'action manquante lorsque l'option "icône uniquement" est activée ([#6773](https://github.com/nocobase/nocobase/pull/6773)) par @katherinehhh

- **[Workflow : Événement d'action personnalisée]** Problème de liaison de l'action de workflow déclenchée par @katherinehhh

- **[Workflow : nœud de calcul de date]** Correction d'une erreur dans les navigateurs anciens sans API `Intl` par @mytharcher

- **[Impression de modèle]** Correction : Logique de validation des permissions corrigée pour empêcher les actions non autorisées. par @sheldon66

- **[Stockage de fichiers : S3(Pro)]]** Expiration de l'URL d'accès invalide par @jiannx

- **[Bloc : Arborescence]** Après connexion via une clé étrangère, cliquer pour déclencher le filtrage entraîne des conditions de filtre vides par @zhangzhonghe
