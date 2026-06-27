---
title: "NocoBase v1.0.1-alpha.1 : Les blocs prennent en charge les réglages de hauteur"
description: "NocoBase v1.0.1-alpha.1 introduit de nouvelles fonctionnalités telles que les réglages de hauteur des blocs, les actions de lien URL et la prise en charge des variables pour les iframes, ainsi que diverses améliorations et corrections de bugs pour améliorer les fonctionnalités et les performances de la plateforme."
---

## Nouvelles fonctionnalités

### Les blocs prennent en charge les paramètres de hauteur ([#4441](https://github.com/nocobase/nocobase/pull/4441))

![20240603115253](https://static-docs.nocobase.com/20240603115253.gif)

Document de référence :

* [Définir la hauteur d'un bloc](https://docs.nocobase.com/handbook/ui/blocks/block-settings/block-height)

### Action Lien : naviguer vers une URL spécifiée ([#4506](https://github.com/nocobase/nocobase/pull/4506))

Permet de configurer des variables dans l'URL ou les paramètres de recherche.

<video controls="" height="250" width="100%"></video>

Document de référence :

* [Action Lien](https://docs.nocobase.com/handbook/ui/actions/types/link)

### Ajout d'une nouvelle variable appelée « paramètres de recherche de l'URL » ([#4506](https://github.com/nocobase/nocobase/pull/4506))

La variable n'est disponible que lorsqu'il y a une chaîne de requête dans l'URL de la page, ce qui facilite son utilisation en conjonction avec [l'action Lien](https://docs.nocobase.com/handbook/ui/actions/types/link).

![20240603170651](https://nocobase-docs.oss-cn-beijing.aliyuncs.com/20240603170651.png)

Document de référence :

* [Paramètres de recherche de l'URL](https://docs.nocobase.com/handbook/ui/variables#url-search-params)
* [Action Lien](https://docs.nocobase.com/handbook/ui/actions/types/link)

### L'iframe prend en charge les variables ([#4512](https://github.com/nocobase/nocobase/pull/4512))

![20240603114711](https://static-docs.nocobase.com/20240603114711.png)

![20240603114750](https://static-docs.nocobase.com/20240603114750.png)

Document de référence :

* [Bloc iframe](https://docs.nocobase.com/handbook/block-iframe)

### Les stockages de fichiers prennent en charge la configuration de la taille et du type de fichier ([#4118](https://github.com/nocobase/nocobase/pull/4118))

![20240603115303](https://static-docs.nocobase.com/20240603115303.png)

Document de référence :

* [Stockage de fichiers](https://docs.nocobase.com/handbook/file-manager/storage)

### Workflow : les nœuds variables prennent en charge la sélection d'un chemin partiel d'objets de données comme valeur des variables

![20240531211727](https://static-docs.nocobase.com/20240531211727.png)

### Les champs URL prennent en charge l'aperçu ([#4559](https://github.com/nocobase/nocobase/pull/4559))

Actuellement, seul l'aperçu d'image est pris en charge.

![337101796-916a6c97-bc08-4560-9526-53e482e2ac6c](https://nocobase-docs.oss-cn-beijing.aliyuncs.com/337101796-916a6c97-bc08-4560-9526-53e482e2ac6c.gif)

### Visualisation des données : prise en charge des variables « paramètres de requête de l'URL » et « rôle actuel » ([#4586](https://github.com/nocobase/nocobase/pull/4586))

![data-visualization-filter-block](https://static-docs.nocobase.com/202406071148997.png)

![data-visualization-filter](https://static-docs.nocobase.com/202406071149567.png)

## Améliorations

### Optimisation des fonctions d'importation et d'exportation ([#4468](https://github.com/nocobase/nocobase/pull/4468))

Amélioration de la stabilité des fonctions d'importation et d'exportation, augmentation de la limite d'importation et d'exportation à 2000 enregistrements. Prise en charge de la logique d'importation et d'exportation étendue pour les types de champs personnalisés.

![20240611112948](https://static-docs.nocobase.com/20240611112948.png)

### Éviter les erreurs de manipulation en désactivant l'option de variable de date ([#4452](https://github.com/nocobase/nocobase/pull/4452))

À l'exception de « l'heure actuelle », les variables représentant des dates sont des intervalles (tableaux) plutôt que des instants (chaînes). Elles peuvent être utilisées pour le filtrage, mais ne peuvent pas être utilisées directement comme valeurs par défaut.

![20240527150429](https://static-docs.nocobase.com/20240527150429.png)

### Optimisation de l'interaction d'affectation des règles de liaison ([#4492](https://github.com/nocobase/nocobase/pull/4492))

Les champs à sélection multiple n'affichent pas les options d'affectation. Si un champ à sélection unique est sélectionné et affecté, le passage à un champ à sélection multiple effacera la configuration.

![20240603143309](https://static-docs.nocobase.com/20240603143309.png)

### Ajustement de l'icône en haut à droite de la colonne d'actions dans le bloc tableau ([#4538](https://github.com/nocobase/nocobase/pull/4538))

![20240603115131](https://nocobase-docs.oss-cn-beijing.aliyuncs.com/20240603115131.png)

### ErrorFallback ([#4459](https://github.com/nocobase/nocobase/pull/4459))

Affinage du fallback d'erreur pour différents composants dans le frontend afin d'empêcher la page entière de devenir inutilisable en raison d'une erreur frontend.

![error-fallback](https://static-docs.nocobase.com/20240604122043_rec_.gif)

### Collecte des informations de débogage et téléchargement rapide des logs en cas d'erreur frontend ([#4524](https://github.com/nocobase/nocobase/pull/4524))

![error-fallback-log](https://static-docs.nocobase.com/202406041224009.png)

### Autres

* Modification de la limite de longueur du nom d'utilisateur à 1-50 ([#4502](https://github.com/nocobase/nocobase/pull/4502))
* Ne pas masquer les champs de clé étrangère ([#4499](https://github.com/nocobase/nocobase/pull/4499))

## Corrections de bugs

### La portée des données dans la boîte de dialogue de configuration des permissions ne doit pas prendre en charge les variables « Formulaire actuel » et « Enregistrement contextuel actuel » ([#4484](https://github.com/nocobase/nocobase/pull/4484))

![20240527145519](https://static-docs.nocobase.com/20240527145519.png)

### Prise en charge de la sélection directe de la valeur d'une variable comme valeur par défaut pour un champ d'association ([#4439](https://github.com/nocobase/nocobase/pull/4439))

![20240603121447](https://nocobase-docs.oss-cn-beijing.aliyuncs.com/20240603121447.png)

### Correction du problème d'erreur lors de l'ajout multiple de l'action « Requête personnalisée » ([#4458](https://github.com/nocobase/nocobase/pull/4458))

![20240603115234](https://nocobase-docs.oss-cn-beijing.aliyuncs.com/20240603115234.png)

### Autres

* Correction du problème de contenu dans le sous-tableau non effacé après la soumission du formulaire. ([#4475](https://github.com/nocobase/nocobase/pull/4475))
* Correction du problème d'utilisation anormale de la variable « Objet actuel » dans le sous-tableau. ([#4521](https://github.com/nocobase/nocobase/pull/4521))
* Ajout de l'option « Définir le niveau de zoom par défaut » pour les champs cartographiques. ([#4527](https://github.com/nocobase/nocobase/pull/4527))
* Correction du problème d'affichage du bloc lors de l'ajout d'un bloc à l'aide de modèles de bloc dans une fenêtre contextuelle. ([#4531](https://github.com/nocobase/nocobase/pull/4531))
* Correction du problème de style des modèles de données de formulaire. ([#4536](https://github.com/nocobase/nocobase/pull/4536))
* Workflow : le style de la zone d'expression a disparu dans le nœud de calcul. ([#4513](https://github.com/nocobase/nocobase/pull/4513))
* Workflow : type de champ incorrect lors de la création dans un formulaire personnalisé d'un nœud manuel. ([#4519](https://github.com/nocobase/nocobase/pull/4519))
* Workflow : problème de permission lors du déclenchement d'un événement d'action personnalisée. ([#4522](https://github.com/nocobase/nocobase/pull/4522))
* Workflow : configuration de profondeur incorrecte du préchargement d'association pour plusieurs sources de données. ([#4526](https://github.com/nocobase/nocobase/pull/4526))
* Bug de la bibliothèque `json-templates`. ([#4525](https://github.com/nocobase/nocobase/pull/4525))
* Gestionnaire de fichiers : erreur lors du téléchargement ou de la suppression de fichier sur COS. ([#4529](https://github.com/nocobase/nocobase/pull/4529), [#4537](https://github.com/nocobase/nocobase/pull/4537))
* La règle de liaison de formulaire affiche [object Object] lors de l'affectation d'une valeur de 0,00 à un champ numérique. ([#4482](https://github.com/nocobase/nocobase/pull/4482))
* Il manque l'élément de paramétrage du contrôle pour le bouton d'ajout dans le sous-tableau. ([#4498](https://github.com/nocobase/nocobase/pull/4498))
* Le bouton de soumission dans le formulaire d'édition du tableau ne dispose pas de l'élément de paramétrage de la règle de liaison. ([#4515](https://github.com/nocobase/nocobase/pull/4515))
* Data-visualization : correction du problème de composants de champ invisibles lors de la définition des valeurs par défaut pour les champs de filtre du graphique ([#4509](https://github.com/nocobase/nocobase/pull/4509))
* Authentification : correction du problème où la page d'inscription est introuvable pour un authentificateur de base nouvellement créé. ([#4556](https://github.com/nocobase/nocobase/pull/4556))
* Localisation : correction du problème où les titres de page ne sont pas traduits lors de la traduction des textes de menu. ([#4557](https://github.com/nocobase/nocobase/pull/4557))
* Carte : correction du problème où AMap affiche une erreur de clé malgré une configuration correcte. ([#4574](https://github.com/nocobase/nocobase/pull/4574))
