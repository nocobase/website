---
title: "Mises à jour hebdomadaires de NocoBase : Les blocs prennent en charge les règles de liaison"
description: "Les mises à jour de cette semaine incluent : les blocs prennent en charge les règles de liaison pour l'affichage dynamique, prise en charge de la variable de réponse dans le message de succès de l'action de requête personnalisée, et plus encore."
---

Résumez les journaux de mise à jour hebdomadaires du produit. Les dernières versions sont disponibles sur [notre blog](https://www.nocobase.com/en/blog/timeline).

**NocoBase est actuellement mis à jour avec trois branches : `main`, `next` et `develop`.**

![version.png](https://static-docs.nocobase.com/ba5f04e27e99c625cb3822da5df07860.png)

* `main` : La version la plus stable à ce jour, recommandée pour l'installation ;
* `next` : Version bêta, contient les nouvelles fonctionnalités à venir et a été testée préliminairement. Il peut y avoir des problèmes connus ou inconnus. Elle est principalement destinée aux utilisateurs testeurs pour recueillir des retours et optimiser davantage les fonctions. Idéale pour les utilisateurs testeurs qui souhaitent découvrir les nouvelles fonctionnalités en avant-première et donner leur avis ;
* `develop` : Version alpha, contient le code de fonctionnalité le plus récent, peut être incomplète ou instable, principalement destinée au développement interne et à l'itération rapide. Adaptée aux utilisateurs techniques intéressés par les fonctionnalités de pointe du produit, mais avec des problèmes potentiels et des fonctions incomplètes. Ne pas utiliser en production.

## main

![main.png](https://static-docs.nocobase.com/47a3c71734c1d0f908b51f9ebd53c0ac.png)

### [v1.6.23](https://www.nocobase.com/en/blog/v1.6.23)

*Date de sortie : 2025-04-23*

#### 🚀 Améliorations

- **[cli]** Optimisation de la logique interne de la commande `nocobase upgrade` ([#6754](https://github.com/nocobase/nocobase/pull/6754)) par @chenos
- **[Impression de modèle]** Remplacement du contrôle d'action de la source de données par un contrôle d'accès basé sur les rôles du client. par @sheldon66

#### 🐛 Corrections de bugs

- **[cli]** Mise à jour automatique de package.json lors de la mise à niveau ([#6747](https://github.com/nocobase/nocobase/pull/6747)) par @chenos
- **[client]**

  - Filtre manquant pour les données déjà associées lors de l'ajout de données d'association ([#6750](https://github.com/nocobase/nocobase/pull/6750)) par @katherinehhh
  - Règle de liaison du bouton 'Ajouter un enfant' du tableau arborescent manquant 'enregistrement courant' ([#6752](https://github.com/nocobase/nocobase/pull/6752)) par @katherinehhh
- **[Action : Importer des enregistrements]** Correction des exceptions d'importation et d'exportation qui se produisent lors de la définition des autorisations de champ. ([#6677](https://github.com/nocobase/nocobase/pull/6677)) par @aaaaaajie
- **[Bloc : Gantt]** Chevauchement des mois dans l'en-tête du calendrier pour la vue mensuelle du bloc de diagramme de Gantt ([#6753](https://github.com/nocobase/nocobase/pull/6753)) par @katherinehhh
- **[Action : Exporter des enregistrements Pro]**

  - Bouton d'exportation Pro perdant les paramètres de filtre après le tri d'une colonne de tableau par @katherinehhh
  - Correction des exceptions d'importation et d'exportation qui se produisent lors de la définition des autorisations de champ. par @aaaaaajie
- **[Stockage de fichiers : S3(Pro)]** Correction des données de réponse du fichier téléchargé par @mytharcher
- **[Workflow : Approbation]** Correction du préchargement des champs d'association pour les enregistrements par @mytharcher

### [v1.6.24](https://www.nocobase.com/en/blog/v1.6.24)

*Date de sortie : 2025-04-24*

#### 🚀 Améliorations

- **[client]** Ajustement du message de téléchargement ([#6757](https://github.com/nocobase/nocobase/pull/6757)) par @mytharcher

#### 🐛 Corrections de bugs

- **[client]**
  - Seule l'action d'exportation dans la collection de vues est prise en charge lorsque writableView est faux ([#6763](https://github.com/nocobase/nocobase/pull/6763)) par @katherinehhh
  - Création inattendue de données d'association lors de l'affichage d'un champ d'association dans un sous-formulaire/sous-tableau dans un formulaire de création ([#6727](https://github.com/nocobase/nocobase/pull/6727)) par @katherinehhh
  - Données incorrectes récupérées pour les champs de tableau many-to-many à partir de tables associées dans les formulaires ([#6744](https://github.com/nocobase/nocobase/pull/6744)) par @2013xile

### [v1.6.25](https://www.nocobase.com/en/blog/v1.6.25)

*Date de sortie : 2025-04-29*

#### 🎉 Nouvelles fonctionnalités

- **[undefined]** Ajout d'un CI de publication pour le kit de licence ([#6786](https://github.com/nocobase/nocobase/pull/6786)) par @jiannx
- **[Visualisation de données : ECharts]** Ajout du paramètre "Inversion de l'axe Y" pour les diagrammes à barres par @2013xile

#### 🚀 Améliorations

- **[utils]** Augmentation de la hauteur de la liste des champs du bouton de filtre et tri/catégorisation des champs ([#6779](https://github.com/nocobase/nocobase/pull/6779)) par @zhangzhonghe
- **[client]** Optimisation du style du bouton d'ajout de sous-tableau et alignement du paginateur sur la même ligne ([#6790](https://github.com/nocobase/nocobase/pull/6790)) par @katherinehhh
- **[Gestionnaire de fichiers]** Ajout d'une option de délai d'attente OSS par défaut à 10 min ([#6795](https://github.com/nocobase/nocobase/pull/6795)) par @mytharcher
- **[Politique de mot de passe]** Modification de l'expiration par défaut du mot de passe pour qu'elle n'expire jamais par @2013xile
- **[WeCom]** Priorisation de l'email professionnel sur l'email personnel lors de la mise à jour de l'email de l'utilisateur par @2013xile

#### 🐛 Corrections de bugs

- **[client]**

  - Dans le bloc de réduction, cliquer sur le bouton d'effacement dans la zone de recherche du champ de relation ne doit pas supprimer la plage de données ([#6782](https://github.com/nocobase/nocobase/pull/6782)) par @zhangzhonghe
  - Le champ d'association ne soumet pas les données lors de l'affichage d'un champ de la collection associée ([#6798](https://github.com/nocobase/nocobase/pull/6798)) par @katherinehhh
  - Interdiction de déplacer les menus avant ou après les onglets de page ([#6777](https://github.com/nocobase/nocobase/pull/6777)) par @zhangzhonghe
  - Le bloc de tableau affiche des données en double lors du filtrage ([#6792](https://github.com/nocobase/nocobase/pull/6792)) par @zhangzhonghe
  - Dans le formulaire de filtre, le changement d'opérateur de champ puis l'actualisation de la page provoque une erreur ([#6781](https://github.com/nocobase/nocobase/pull/6781)) par @zhangzhonghe
- **[base de données]**

  - Éviter une erreur levée lorsque le type de données n'est pas une chaîne ([#6797](https://github.com/nocobase/nocobase/pull/6797)) par @mytharcher
  - Ajout de unavailableActions à la collection SQL et à la collection de vues ([#6765](https://github.com/nocobase/nocobase/pull/6765)) par @katherinehhh
- **[create-nocobase-app]** Correction temporaire du problème MariaDB en rétrogradant vers 2.5.6 ([#6762](https://github.com/nocobase/nocobase/pull/6762)) par @chenos
- **[Authentification]** Interdiction de modifier le nom de l'authentificateur ([#6808](https://github.com/nocobase/nocobase/pull/6808)) par @2013xile
- **[Impression de modèle]** Correction : Logique de validation des autorisations corrigée pour empêcher les actions non autorisées. par @sheldon66
- **[Stockage de fichiers : S3(Pro)]** Expiration de l'URL d'accès invalide par @jiannx
- **[Bloc : Arborescent]** Après connexion via une clé étrangère, cliquer pour déclencher le filtrage entraîne des conditions de filtre vides par @zhangzhonghe

## next

![next.png](https://static-docs.nocobase.com/8ed17a0f08cc585018f6de6c8b13947d.png)

### [v1.7.0-beta.22](https://www.nocobase.com/en/blog/v1.7.0-beta.22)

*Date de sortie : 2025-04-24*

#### 🚀 Améliorations

- **[cli]** Optimisation de la logique interne de la commande `nocobase upgrade` ([#6754](https://github.com/nocobase/nocobase/pull/6754)) par @chenos

#### 🐛 Corrections de bugs

- **[client]** Problème d'affichage avec les règles de liaison dans les données d'association à plusieurs niveaux ([#6755](https://github.com/nocobase/nocobase/pull/6755)) par @katherinehhh

### [v1.7.0-beta.23](https://www.nocobase.com/en/blog/v1.7.0-beta.23)

*Date de sortie : 2025-04-24*

#### 🎉 Nouvelles fonctionnalités

- **[Action : Requête personnalisée]** Prise en charge de la variable de réponse dans le message de succès de l'action de requête personnalisée ([#6694](https://github.com/nocobase/nocobase/pull/6694)) par @katherinehhh

#### 🚀 Améliorations

- **[client]** Ajustement du message de téléchargement ([#6757](https://github.com/nocobase/nocobase/pull/6757)) par @mytharcher

#### 🐛 Corrections de bugs

- **[client]**
  - Données incorrectes récupérées pour les champs de tableau many-to-many à partir de tables associées dans les formulaires ([#6744](https://github.com/nocobase/nocobase/pull/6744)) par @2013xile
  - Seule l'action d'exportation dans la collection de vues est prise en charge lorsque writableView est faux ([#6763](https://github.com/nocobase/nocobase/pull/6763)) par @katherinehhh
  - Création inattendue de données d'association lors de l'affichage d'un champ d'association dans un sous-formulaire/sous-tableau dans un formulaire de création ([#6727](https://github.com/nocobase/nocobase/pull/6727)) par @katherinehhh

### [v1.7.0-beta.24](https://www.nocobase.com/en/blog/v1.7.0-beta.24)

*Date de sortie : 2025-04-25*

#### 🎉 Nouvelles fonctionnalités

- **[client]** Prise en charge de la configuration de règles de liaison dans les blocs pour l'affichage/masquage dynamique ([#6636](https://github.com/nocobase/nocobase/pull/6636)) par @katherinehhh

#### 🚀 Améliorations

- **[client]** Maintien de la fonctionnalité de modèle de référence ([#6743](https://github.com/nocobase/nocobase/pull/6743)) par @gchust
- **[Visualisation de données]** Ajout d'une API étendue pour la configuration de l'interface de champ ([#6742](https://github.com/nocobase/nocobase/pull/6742)) par @2013xile

#### 🐛 Corrections de bugs

- **[create-nocobase-app]** Correction temporaire du problème MariaDB en rétrogradant vers 2.5.6 ([#6762](https://github.com/nocobase/nocobase/pull/6762)) par @chenos
- **[base de données]** Ajout de unavailableActions à la collection SQL et à la collection de vues ([#6765](https://github.com/nocobase/nocobase/pull/6765)) par @katherinehhh
- **[client]** Problème d'opérateur de paramètre de requête URL ([#6770](https://github.com/nocobase/nocobase/pull/6770)) par @katherinehhh
- **[Bloc : Panneau d'action]** Icône du panneau d'action manquante lorsque l'icône seule est activée ([#6773](https://github.com/nocobase/nocobase/pull/6773)) par @katherinehhh
- **[Workflow : nœud de calcul de date]** Correction d'une erreur dans les navigateurs hérités sans API `Intl` par @mytharcher

### [v1.7.0-beta.25](https://www.nocobase.com/en/blog/v1.7.0-beta.25)

*Date de sortie : 2025-04-28*

#### 🎉 Nouvelles fonctionnalités

- **[Gestionnaire de fichiers]** Fonctionnalité : Ajout de l'API `getFileStream` pour la prise en charge du streaming de fichiers. ([#6741](https://github.com/nocobase/nocobase/pull/6741)) par @sheldon66

#### 🚀 Améliorations

- **[client]** Affichage du titre du bouton avec une infobulle au survol de l'icône d'action ([#6761](https://github.com/nocobase/nocobase/pull/6761)) par @katherinehhh
- **[WeCom]** Priorisation de l'email professionnel sur l'email personnel lors de la mise à jour de l'email de l'utilisateur par @2013xile

#### 🐛 Corrections de bugs

- **[Stockage de fichiers : S3(Pro)]** Expiration de l'URL d'accès invalide par @jiannx
- **[Impression de modèle]** Correction : Logique de validation des autorisations corrigée pour empêcher les actions non autorisées. par @sheldon66
- **[Bloc : Arborescent]** Après connexion via une clé étrangère, cliquer pour déclencher le filtrage entraîne des conditions de filtre vides par @zhangzhonghe

### [v1.7.0-beta.26](https://www.nocobase.com/en/blog/v1.7.0-beta.26)

*Date de sortie : 2025-04-28*

#### 🎉 Nouvelles fonctionnalités

- **[undefined]** Ajout d'un CI de publication pour le kit de licence ([#6786](https://github.com/nocobase/nocobase/pull/6786)) par @jiannx

#### 🚀 Améliorations

- **[utils]** Augmentation de la hauteur de la liste des champs du bouton de filtre et tri/catégorisation des champs ([#6779](https://github.com/nocobase/nocobase/pull/6779)) par @zhangzhonghe

#### 🐛 Corrections de bugs

- **[client]**
  - Dans le bloc de réduction, cliquer sur le bouton d'effacement dans la zone de recherche du champ de relation ne doit pas supprimer la plage de données ([#6782](https://github.com/nocobase/nocobase/pull/6782)) par @zhangzhonghe
  - Dans le formulaire de filtre, le changement d'opérateur de champ puis l'actualisation de la page provoque une erreur ([#6781](https://github.com/nocobase/nocobase/pull/6781)) par @zhangzhonghe
  - Le bloc de tableau affiche des données en double lors du filtrage ([#6792](https://github.com/nocobase/nocobase/pull/6792)) par @zhangzhonghe
  - Problème d'alignement du bouton d'ajout d'enregistrement enfant dans le tableau arborescent ([#6791](https://github.com/nocobase/nocobase/pull/6791)) par @katherinehhh
  - Interdiction de déplacer les menus avant ou après les onglets de page ([#6777](https://github.com/nocobase/nocobase/pull/6777)) par @zhangzhonghe

## develop

![develop.png](https://static-docs.nocobase.com/7fcdd9456a17286d8a439eee52bcb8d2.png)

### [v1.7.0-alpha.12](https://www.nocobase.com/en/blog/v1.7.0-alpha.12)

*Date de sortie : 2025-04-24*

#### 🚀 Améliorations

- **[cli]** Optimisation de la logique interne de la commande `nocobase upgrade` ([#6754](https://github.com/nocobase/nocobase/pull/6754)) par @chenos
- **[create-nocobase-app]** Mise à niveau des dépendances et suppression de la prise en charge de SQLite ([#6708](https://github.com/nocobase/nocobase/pull/6708)) par @chenos
- **[Mobile]** Optimisation de la vitesse d'ouverture de la fenêtre contextuelle du sélecteur de date mobile ([#6735](https://github.com/nocobase/nocobase/pull/6735)) par @zhangzhonghe
- **[Bloc : modèle]** Prise en charge de la conversion d'un bloc modèle en bloc normal ([#6662](https://github.com/nocobase/nocobase/pull/6662)) par @gchust
- **[Gestionnaire de fichiers]** Exposition de l'API utils ([#6705](https://github.com/nocobase/nocobase/pull/6705)) par @mytharcher
- **[Éditeur de thème]** Autorisation de définir la largeur de la barre latérale dans la configuration du thème ([#6720](https://github.com/nocobase/nocobase/pull/6720)) par @chenos
- **[Workflow]** Ajout des types de date à l'ensemble des types de variables ([#6717](https://github.com/nocobase/nocobase/pull/6717)) par @mytharcher
- **[Impression de modèle]** Remplacement du contrôle d'action de la source de données par un contrôle d'accès basé sur les rôles du client. par @sheldon66

#### 🐛 Corrections de bugs

- **[client]**

  - Problème d'affichage avec les règles de liaison dans les données d'association à plusieurs niveaux ([#6755](https://github.com/nocobase/nocobase/pull/6755)) par @katherinehhh
  - Règle de liaison du bouton 'Ajouter un enfant' du tableau arborescent manquant 'enregistrement courant' ([#6752](https://github.com/nocobase/nocobase/pull/6752)) par @katherinehhh
  - Problème d'actualisation des blocs de données après une soumission réussie ([#6748](https://github.com/nocobase/nocobase/pull/6748)) par @zhangzhonghe
  - Problème du bouton de réduction dans le menu de gauche masqué par la fenêtre contextuelle du workflow ([#6733](https://github.com/nocobase/nocobase/pull/6733)) par @zhangzhonghe
  - Problème de difficulté à supprimer les icônes de la barre de navigation supérieure mobile ([#6734](https://github.com/nocobase/nocobase/pull/6734)) par @zhangzhonghe
  - Affichage incorrect de la valeur pour "Activer la colonne d'index" ([#6724](https://github.com/nocobase/nocobase/pull/6724)) par @katherinehhh
  - Condition de champ de date/heure ne fonctionnant pas dans les règles de liaison ([#6728](https://github.com/nocobase/nocobase/pull/6728)) par @katherinehhh
  - Contraintes d'option d'action manquantes lors de la réouverture des règles de liaison ([#6723](https://github.com/nocobase/nocobase/pull/6723)) par @katherinehhh
  - Les champs obligatoires masqués par les règles de liaison ne doivent pas affecter la soumission du formulaire ([#6709](https://github.com/nocobase/nocobase/pull/6709)) par @zhangzhonghe
  - Filtre manquant pour les données déjà associées lors de l'ajout de données d'association ([#6750](https://github.com/nocobase/nocobase/pull/6750)) par @katherinehhh
- **[serveur]** appVersion générée incorrectement par create-migration ([#6740](https://github.com/nocobase/nocobase/pull/6740)) par @chenos
- **[cli]** Mise à jour automatique de package.json lors de la mise à niveau ([#6747](https://github.com/nocobase/nocobase/pull/6747)) par @chenos
- **[build]** Correction d'une erreur levée dans la commande tar ([#6722](https://github.com/nocobase/nocobase/pull/6722)) par @mytharcher
- **[Bloc : Gantt]** Chevauchement des mois dans l'en-tête du calendrier pour la vue mensuelle du bloc de diagramme de Gantt ([#6753](https://github.com/nocobase/nocobase/pull/6753)) par @katherinehhh
- **[Action : Importer des enregistrements]** Correction des exceptions d'importation et d'exportation qui se produisent lors de la définition des autorisations de champ. ([#6677](https://github.com/nocobase/nocobase/pull/6677)) par @aaaaaajie
- **[Bloc : modèle]** Les modèles de bloc ne peuvent pas être utilisés dans un environnement MySQL ([#6726](https://github.com/nocobase/nocobase/pull/6726)) par @gchust
- **[Workflow]** Correction d'une erreur levée lors de l'exécution d'un événement planifié dans un sous-flux ([#6721](https://github.com/nocobase/nocobase/pull/6721)) par @mytharcher
- **[Workflow : Événement d'action personnalisée]** Prise en charge de l'exécution en mode multi-enregistrements par @mytharcher
- **[Action : Exporter des enregistrements Pro]**

  - Correction des exceptions d'importation et d'exportation qui se produisent lors de la définition des autorisations de champ. par @aaaaaajie
  - Bouton d'exportation Pro perdant les paramètres de filtre après le tri d'une colonne de tableau par @katherinehhh
- **[Stockage de fichiers : S3(Pro)]**

  - Correction des données de réponse du fichier téléchargé par @mytharcher
  - Ajout de la logique multer make pour le téléchargement côté serveur par @mytharcher
- **[Workflow : Approbation]** Correction du préchargement des champs d'association pour les enregistrements par @mytharcher
