---
title: "Mises à jour hebdomadaires｜Prise en charge du collage de fichiers dans le chat IA"
description: "Ceci est un résumé des mises à jour et améliorations des fonctionnalités de NocoBase du 22 au 28 janvier 2026."
---

Résumez les journaux de mise à jour hebdomadaires du produit. Les dernières versions sont consultables sur [notre blog](https://www.nocobase.com/en/blog/timeline).

**NocoBase est actuellement mis à jour avec trois branches : `main`, `next` et `develop`.**

![version.png](https://static-docs.nocobase.com/ba5f04e27e99c625cb3822da5df07860.png)

* `main` : La version la plus stable à ce jour, recommandée pour l'installation ;
* `next` : Version bêta, contient les nouvelles fonctionnalités à venir et a été testée préliminairement. Il peut y avoir des problèmes connus ou inconnus. Elle est principalement destinée aux utilisateurs testeurs pour recueillir des retours et optimiser davantage les fonctionnalités. Idéale pour les utilisateurs testeurs qui souhaitent découvrir les nouvelles fonctionnalités en avant-première et donner leur avis ;
* `develop` : Version alpha, contient le code de fonctionnalité le plus récent, peut être incomplète ou instable, principalement destinée au développement interne et à l'itération rapide. Adaptée aux utilisateurs techniques intéressés par les fonctionnalités de pointe du produit, mais avec des problèmes potentiels et des fonctions incomplètes. Ne pas utiliser en production.

## main

![main.png](https://static-docs.nocobase.com/47a3c71734c1d0f908b51f9ebd53c0ac.png)

### [v1.9.40](https://www.nocobase.com/en/blog/v1.9.40)

*Date de sortie : 2026-01-25*

### 🚀 Améliorations

- **[Visionneuse de fichiers Office]** Ajout de plus de types de fichiers pour la prévisualisation sur Microsoft ([#8500](https://github.com/nocobase/nocobase/pull/8500)) par @mytharcher

### 🐛 Corrections de bugs

- **[client]**

  - Correction du champ nanoid non régénéré après la soumission du formulaire ([#8491](https://github.com/nocobase/nocobase/pull/8491)) par @katherinehhh
  - Correction du message de validation requis en double lors de l'effacement d'un champ en cascade ([#8476](https://github.com/nocobase/nocobase/pull/8476)) par @katherinehhh
- **[base de données]**

  - Correction des erreurs lors du filtrage avec l'opérateur `empty` après avoir rechargé une collection ([#8496](https://github.com/nocobase/nocobase/pull/8496)) par @2013xile
  - correction : mise à jour profonde des associations imbriquées ([#8492](https://github.com/nocobase/nocobase/pull/8492)) par @chenos
- **[Gestionnaire de fichiers]** Correction du problème où le nom de fichier obtenu à partir du corps de la requête devenait une chaîne décodée de manière inattendue ([#8481](https://github.com/nocobase/nocobase/pull/8481)) par @mytharcher
- **[Source de données : Principale]** Correction d'un problème où la suppression d'enregistrements d'un bloc de table d'association plusieurs-à-plusieurs ne respectait pas la contrainte `onDelete: 'restrict'` du champ d'association ([#8493](https://github.com/nocobase/nocobase/pull/8493)) par @2013xile
- **[Bloc : iframe]** Correction de l'erreur lors de l'ajout de variables agrégées à Iframe ([#8482](https://github.com/nocobase/nocobase/pull/8482)) par @zhangzhonghe
- **[Workflow : Webhook]** Correction du problème où les données du corps sont manquantes lorsque l'analyse du corps n'est pas configurée par @mytharcher
- **[Modèle d'impression]** Correction de la logique de permission incorrecte du bouton d'impression lorsque les rôles étaient unis. par @jiannx
- **[Workflow : Approbation]**

  - Correction du problème où la concurrence fait reprendre l'exécution de manière répétée par @mytharcher
  - Correction du problème où le retour d'une approbation au nœud précédent revenait au début par @mytharcher
- **[Gestionnaire de migration]** Correction d'un gel potentiel du processus causé par la journalisation d'instructions SQL excessivement volumineuses incluses dans les exceptions d'erreur de migration par @cgyrock

## next

![next.png](https://static-docs.nocobase.com/8ed17a0f08cc585018f6de6c8b13947d.png)

### [v2.0.0-beta.17](https://www.nocobase.com/en/blog/v2.0.0-beta.17)

*Date de sortie : 2026-01-29*

### 🐛 Corrections de bugs

- **[client]** Correction des problèmes connus liés au filtrage ([#8514](https://github.com/nocobase/nocobase/pull/8514)) par @zhangzhonghe
- **[Employés IA]** Correction du problème où le système ne pouvait pas démarrer après la construction ([#8523](https://github.com/nocobase/nocobase/pull/8523)) par @cgyrock
- **[IA : Base de connaissances]** Correction du problème où le système ne pouvait pas démarrer après la construction par @cgyrock

### [v2.0.0-beta.16](https://www.nocobase.com/en/blog/v2.0.0-beta.16)

*Date de sortie : 2026-01-27*

### 🎉 Nouvelles fonctionnalités

- **[client]** ajout du composant de champ sous-tableau (édition contextuelle) ([#8280](https://github.com/nocobase/nocobase/pull/8280)) par @katherinehhh
- **[Workflow]** Ajout d'une API pour déplacer un nœud ([#8507](https://github.com/nocobase/nocobase/pull/8507)) par @mytharcher

### 🚀 Améliorations

- **[client]**

  - empêcher le re-rendu complet du tableau lors de la mise à jour d'une cellule ([#8349](https://github.com/nocobase/nocobase/pull/8349)) par @katherinehhh
  - Amélioration du sous-formulaire plusieurs-à-plusieurs pour initialiser avec un élément par défaut et éviter la création d'enregistrements lorsqu'il est laissé vide ([#8458](https://github.com/nocobase/nocobase/pull/8458)) par @katherinehhh
- **[Gestionnaire de fichiers]** Ajout d'une visionneuse extensible pour le gestionnaire de fichiers ([#8501](https://github.com/nocobase/nocobase/pull/8501)) par @mytharcher
- **[Workflow]** Modification du chemin de route des sous-pages de workflow, pour placer toutes les pages de workflow sous le préfixe `/admin/settings/workflow` ([#8519](https://github.com/nocobase/nocobase/pull/8519)) par @mytharcher

### 🐛 Corrections de bugs

- **[client]**

  - Correction de l'heure dupliquée dans la valeur DateTime du filtre ([#8506](https://github.com/nocobase/nocobase/pull/8506)) par @zhangzhonghe
  - Correction d'un problème qui empêchait l'utilisation de variables de formulaire pour attribuer des valeurs dans les règles de liaison pour les champs de sous-formulaire plusieurs-à-plusieurs à plusieurs niveaux. ([#8518](https://github.com/nocobase/nocobase/pull/8518)) par @gchust
  - Correction d'un problème où les données ne se rafraîchissaient pas après des modifications dans des fenêtres contextuelles à plusieurs niveaux et entre blocs. ([#8471](https://github.com/nocobase/nocobase/pull/8471)) par @gchust
  - correction du problème où les données de sous-détail en mode lecture seule ne pouvaient pas être affichées correctement dans le formulaire d'édition ([#8469](https://github.com/nocobase/nocobase/pull/8469)) par @katherinehhh
  - correction de la logique d'affinement pour targetKey optionnel ([#8333](https://github.com/nocobase/nocobase/pull/8333)) par @katherinehhh
  - correction des paramètres de filtre incorrects pour le champ Select de relation dans le sous-tableau éditable ([#8335](https://github.com/nocobase/nocobase/pull/8335)) par @katherinehhh
- **[moteur de flux]** correction du problème FilterByTK lorsque filterTargetKey est un tableau à un seul élément dans une source de données externe ([#8522](https://github.com/nocobase/nocobase/pull/8522)) par @katherinehhh
- **[Employés IA]** correction des problèmes de configuration de champ sélectionnable incohérente entre la modélisation IA et la gestion des sources de données ([#8488](https://github.com/nocobase/nocobase/pull/8488)) par @cgyrock
- **[Gestionnaire d'emails]** le corps ne se réduit pas lorsque le texte est sélectionné. correction de l'échec du téléchargement de la pièce jointe par @jiannx

### [v2.0.0-beta.15](https://www.nocobase.com/en/blog/v2.0.0-beta.15)

*Date de sortie : 2026-01-25*

### 🚀 Améliorations

- **[Visionneuse de fichiers Office]** Ajout de plus de types de fichiers pour la prévisualisation sur Microsoft ([#8500](https://github.com/nocobase/nocobase/pull/8500)) par @mytharcher

### 🐛 Corrections de bugs

- **[base de données]** Correction des erreurs lors du filtrage avec l'opérateur `empty` après avoir rechargé une collection ([#8496](https://github.com/nocobase/nocobase/pull/8496)) par @2013xile
- **[Modèle d'impression]** Correction de la logique de permission incorrecte du bouton d'impression lorsque les rôles étaient unis. par @jiannx
- **[Workflow : Approbation]** Correction du problème où une erreur était levée dans la fenêtre contextuelle d'enregistrement d'approbation 1.x par @mytharcher
- **[Gestionnaire de migration]** Correction d'un gel potentiel du processus causé par la journalisation d'instructions SQL excessivement volumineuses incluses dans les exceptions d'erreur de migration par @cgyrock

### [v2.0.0-beta.14](https://www.nocobase.com/en/blog/v2.0.0-beta.14)

*Date de sortie : 2026-01-23*

### 🎉 Nouvelles fonctionnalités

- **[Employés IA]** Prise en charge du collage de fichiers dans le chat IA ([#8487](https://github.com/nocobase/nocobase/pull/8487)) par @heziqiang

### 🚀 Améliorations

- **[client]**

  - Amélioration du sous-formulaire plusieurs-à-plusieurs pour initialiser avec un élément par défaut et éviter la création d'enregistrements lorsqu'il est laissé vide ([#8473](https://github.com/nocobase/nocobase/pull/8473)) par @katherinehhh
  - Amélioration des boutons de téléchargement et d'édition pour les champs de pièce jointe dans le sous-tableau pour mieux guider les utilisateurs à cliquer sur télécharger. ([#8474](https://github.com/nocobase/nocobase/pull/8474)) par @katherinehhh
- **[moteur de flux]** Amélioration de ctx.libs dans runjs pour prendre en charge le chargement à la demande, et ajout de bibliothèques prédéfinies : lodash, math et formula. ([#8468](https://github.com/nocobase/nocobase/pull/8468)) par @gchust
- **[Gestionnaire d'erreurs]** Assainissement des erreurs de référence SQL ([#8464](https://github.com/nocobase/nocobase/pull/8464)) par @2013xile
- **[Workflow : Approbation]** Implémentation du contrôle d'accès pour les API afin d'empêcher les opérations de données non autorisées par @mytharcher

### 🐛 Corrections de bugs

- **[client]**

  - Correction du problème où les popovers de l'éditeur de texte enrichi sont obscurcis ([#8443](https://github.com/nocobase/nocobase/pull/8443)) par @zhangzhonghe
  - Correction de l'heure dupliquée dans la valeur DateTime du filtre ([#8484](https://github.com/nocobase/nocobase/pull/8484)) par @zhangzhonghe
  - correction du champ nanoid non régénéré après la soumission du formulaire ([#8491](https://github.com/nocobase/nocobase/pull/8491)) par @katherinehhh
  - Correction du message de validation requis en double lors de l'effacement d'un champ en cascade ([#8476](https://github.com/nocobase/nocobase/pull/8476)) par @katherinehhh
  - filtrer la liste pour supprimer les doublons ([#8431](https://github.com/nocobase/nocobase/pull/8431)) par @jiannx
  - Correction du problème où le menu de configuration ne s'affiche pas dans Chrome 144 ([#8470](https://github.com/nocobase/nocobase/pull/8470)) par @zhangzhonghe
- **[base de données]**

  - correction : mise à jour profonde des associations imbriquées ([#8492](https://github.com/nocobase/nocobase/pull/8492)) par @chenos
- **[serveur]** Correction de la version de `mathjs` dans les dépendances communes ([#8475](https://github.com/nocobase/nocobase/pull/8475)) par @mytharcher
- **[moteur de flux]** Correction d'un problème où la fermeture d'une fenêtre contextuelle intégrée provoquait une erreur après avoir ouvert consécutivement la fenêtre de configuration des règles de liaison et la fenêtre de configuration du flux d'événements. ([#8368](https://github.com/nocobase/nocobase/pull/8368)) par @gchust
- **[Source de données : Principale]** Correction d'un problème où la suppression d'enregistrements d'un bloc de table d'association plusieurs-à-plusieurs ne respectait pas la contrainte `onDelete: 'restrict'` du champ d'association ([#8493](https://github.com/nocobase/nocobase/pull/8493)) par @2013xile
- **[Gestionnaire de tâches asynchrones]** Correction du problème où le workflow déclenché par une importation asynchrone était retardé dans son exécution ([#8478](https://github.com/nocobase/nocobase/pull/8478)) par @mytharcher
- **[Bloc : iframe]** Correction de l'erreur lors de l'ajout de variables agrégées à Iframe ([#8482](https://github.com/nocobase/nocobase/pull/8482)) par @zhangzhonghe
- **[Modèles d'interface utilisateur]** Correction d'un problème où les blocs de modèles de référence ne pouvaient pas définir de portées de données via les paramètres de flux d'événements. ([#8472](https://github.com/nocobase/nocobase/pull/8472)) par @gchust
- **[Gestionnaire de fichiers]** Correction du problème où le nom de fichier obtenu à partir du corps de la requête devenait une chaîne décodée de manière inattendue ([#8481](https://github.com/nocobase/nocobase/pull/8481)) par @mytharcher
- **[Action : Importer des enregistrements Pro]** Correction du problème où le workflow déclenché par une importation asynchrone était retardé dans son exécution par @mytharcher
- **[Workflow : Webhook]** Correction du problème où les données du corps sont manquantes lorsque l'analyse du corps n'est pas configurée par @mytharcher
- **[Modèle d'impression]** suppression des boutons de pied de page de la configuration du modèle d'impression par @katherinehhh
- **[Workflow : Approbation]**

  - Correction du problème où le retour d'une approbation au nœud précédent revenait au début par @mytharcher
  - Correction du problème où la concurrence fait reprendre l'exécution de manière répétée par @mytharcher
  - Correction du problème où les champs ne sont pas affichés sur les cartes de tâches d'approbation par @zhangzhonghe

## develop

![develop.png](https://static-docs.nocobase.com/7fcdd9456a17286d8a439eee52bcb8d2.png)

### [v2.0.0-alpha.68](https://www.nocobase.com/en/blog/v2.0.0-alpha.68)

*Date de sortie : 2026-01-27*

### 🎉 Nouvelles fonctionnalités

- **[Workflow]** Ajout d'une API pour déplacer un nœud ([#8507](https://github.com/nocobase/nocobase/pull/8507)) par @mytharcher

### [v2.0.0-alpha.67](https://www.nocobase.com/en/blog/v2.0.0-alpha.67)

*Date de sortie : 2026-01-26*

### 🎉 Nouvelles fonctionnalités

- **[serveur]** Refonte du superviseur d'application pour prendre en charge la gestion multi-applications dans différents scénarios ([#8043](https://github.com/nocobase/nocobase/pull/8043)) par @2013xile
- **[client]** ajout du composant de champ sous-tableau (édition contextuelle) ([#8280](https://github.com/nocobase/nocobase/pull/8280)) par @katherinehhh
- **[Employés IA]** Prise en charge du collage de fichiers dans le chat IA ([#8487](https://github.com/nocobase/nocobase/pull/8487)) par @heziqiang

### 🚀 Améliorations

- **[client]**

  - Amélioration des boutons de téléchargement et d'édition pour les champs de pièce jointe dans le sous-tableau pour mieux guider les utilisateurs à cliquer sur télécharger. ([#8474](https://github.com/nocobase/nocobase/pull/8474)) par @katherinehhh
  - Amélioration du sous-formulaire plusieurs-à-plusieurs pour initialiser avec un élément par défaut et éviter la création d'enregistrements lorsqu'il est laissé vide ([#8473](https://github.com/nocobase/nocobase/pull/8473)) par @katherinehhh
- **[moteur de flux]** Amélioration de ctx.libs dans runjs pour prendre en charge le chargement à la demande, et ajout de bibliothèques prédéfinies : lodash, math et formula. ([#8468](https://github.com/nocobase/nocobase/pull/8468)) par @gchust
- **[serveur]** Prise en charge de la configuration d'une liste blanche d'origines CORS ([#8454](https://github.com/nocobase/nocobase/pull/8454)) par @2013xile
- **[Gestionnaire de fichiers]** Ajout d'une visionneuse extensible pour le gestionnaire de fichiers ([#8501](https://github.com/nocobase/nocobase/pull/8501)) par @mytharcher
- **[Visionneuse de fichiers Office]** Ajout de plus de types de fichiers pour la prévisualisation sur Microsoft ([#8500](https://github.com/nocobase/nocobase/pull/8500)) par @mytharcher
- **[Gestionnaire d'erreurs]** Assainissement des erreurs de référence SQL ([#8464](https://github.com/nocobase/nocobase/pull/8464)) par @2013xile
- **[Action : Exporter des enregistrements]** Amélioration de la portée des données de l'action d'exportation basée sur les enregistrements sélectionnés ou les filtres de ressources ([#8442](https://github.com/nocobase/nocobase/pull/8442)) par @katherinehhh
- **[Action : Exporter des enregistrements Pro]** Amélioration de la portée des données de l'action d'exportation basée sur les enregistrements sélectionnés ou les filtres de ressources par @katherinehhh
- **[Workflow : Approbation]** Implémentation du contrôle d'accès pour les API afin d'empêcher les opérations de données non autorisées par @mytharcher

### 🐛 Corrections de bugs

- **[client]**

  - Correction de l'heure dupliquée dans la valeur DateTime du filtre ([#8484](https://github.com/nocobase/nocobase/pull/8484)) par @zhangzhonghe
  - correction du champ nanoid non régénéré après la soumission du formulaire ([#8491](https://github.com/nocobase/nocobase/pull/8491)) par @katherinehhh
  - Correction du problème où les popovers de l'éditeur de texte enrichi sont obscurcis ([#8443](https://github.com/nocobase/nocobase/pull/8443)) par @zhangzhonghe
  - filtrer la liste pour supprimer les doublons ([#8431](https://github.com/nocobase/nocobase/pull/8431)) par @jiannx
  - Correction du message de validation requis en double lors de l'effacement d'un champ en cascade ([#8476](https://github.com/nocobase/nocobase/pull/8476)) par @katherinehhh
  - Correction du problème où le menu de configuration ne s'affiche pas dans Chrome 144 ([#8470](https://github.com/nocobase/nocobase/pull/8470)) par @zhangzhonghe
  - correction du problème où les données de sous-détail en mode lecture seule ne pouvaient pas être affichées correctement dans le formulaire d'édition ([#8469](https://github.com/nocobase/nocobase/pull/8469)) par @katherinehhh
  - Correction du problème où la fenêtre contextuelle "Variables personnalisées" est obscurcie ([#8463](https://github.com/nocobase/nocobase/pull/8463)) par @zhangzhonghe
  - correction du problème où les paramètres de tri des groupes de champs de collection ne prenaient pas effet. ([#8453](https://github.com/nocobase/nocobase/pull/8453)) par @katherinehhh
  - Correction du problème où le bouton "Paramètres des colonnes" du tableau ne fonctionnait pas ([#8441](https://github.com/nocobase/nocobase/pull/8441)) par @zhangzhonghe
  - Correction d'un problème où la fenêtre contextuelle du sélecteur du champ d'association de fichier avait un mauvais z-index, et la configuration de la fenêtre contextuelle ne pouvait pas être enregistrée correctement. ([#8446](https://github.com/nocobase/nocobase/pull/8446)) par @gchust
  - correction du problème lors de l'édition d'une collection dans l'interface graphique ([#8451](https://github.com/nocobase/nocobase/pull/8451)) par @katherinehhh
- **[base de données]**

  - Correction des erreurs lors du filtrage avec l'opérateur `empty` après avoir rechargé une collection ([#8496](https://github.com/nocobase/nocobase/pull/8496)) par @2013xile
  - correction : mise à jour profonde des associations imbriquées ([#8492](https://github.com/nocobase/nocobase/pull/8492)) par @chenos
- **[serveur]** Correction de la version de `mathjs` dans les dépendances communes ([#8475](https://github.com/nocobase/nocobase/pull/8475)) par @mytharcher
- **[moteur de flux]**

  - Correction d'un problème où la fermeture d'une fenêtre contextuelle intégrée provoquait une erreur après avoir ouvert consécutivement la fenêtre de configuration des règles de liaison et la fenêtre de configuration du flux d'événements. ([#8368](https://github.com/nocobase/nocobase/pull/8368)) par @gchust
  - Correction d'un problème où le fait de cliquer à plusieurs reprises sur le menu de configuration pouvait ouvrir plusieurs fenêtres contextuelles de configuration. ([#8448](https://github.com/nocobase/nocobase/pull/8448)) par @gchust
  - Correction d'un problème où les variables dans les paramètres de code runjs étaient résolues avant l'exécution. ([#8445](https://github.com/nocobase/nocobase/pull/8445)) par @gchust
  - Correction d'un problème où les variables contextuelles ne pouvaient pas être sélectionnées dans la fenêtre contextuelle de création rapide du sélecteur de données. ([#8450](https://github.com/nocobase/nocobase/pull/8450)) par @gchust
- **[Employés IA]** correction des problèmes de configuration de champ sélectionnable incohérente entre la modélisation IA et la gestion des sources de données ([#8488](https://github.com/nocobase/nocobase/pull/8488)) par @cgyrock
- **[Source de données : Principale]** Correction d'un problème où la suppression d'enregistrements d'un bloc de table d'association plusieurs-à-plusieurs ne respectait pas la contrainte `onDelete: 'restrict'` du champ d'association ([#8493](https://github.com/nocobase/nocobase/pull/8493)) par @2013xile
- **[Bloc : iframe]** Correction de l'erreur lors de l'ajout de variables agrégées à Iframe ([#8482](https://github.com/nocobase/nocobase/pull/8482)) par @zhangzhonghe
- **[Gestionnaire de tâches asynchrones]** Correction du problème où le workflow déclenché par une importation asynchrone était retardé dans son exécution ([#8478](https://github.com/nocobase/nocobase/pull/8478)) par @mytharcher
- **[Gestionnaire de fichiers]** Correction du problème où le nom de fichier obtenu à partir du corps de la requête devenait une chaîne décodée de manière inattendue ([#8481](https://github.com/nocobase/nocobase/pull/8481)) par @mytharcher
- **[Modèles d'interface utilisateur]** Correction d'un problème où les blocs de modèles de référence ne pouvaient pas définir de portées de données via les paramètres de flux d'événements. ([#8472](https://github.com/nocobase/nocobase/pull/8472)) par @gchust
- **[Mobile (obsolète)]]** Plugin mobile obsolète (remplacé par le plugin ui-layout à partir de la version 2.0). ([#8456](https://github.com/nocobase/nocobase/pull/8456)) par @chenos
- **[Action : Importer des enregistrements Pro]** Correction du problème où le workflow déclenché par une importation asynchrone était retardé dans son exécution par @mytharcher
- **[Workflow : Webhook]** Correction du problème où les données du corps sont manquantes lorsque l'analyse du corps n'est pas configurée par @mytharcher
- **[Modèle d'impression]**

  - Correction de la logique de permission incorrecte du bouton d'impression lorsque les rôles étaient unis. par @jiannx
  - suppression des boutons de pied de page de la configuration du modèle d'impression par @katherinehhh
- **[Workflow : Approbation]**

  - Correction du problème où les champs ne sont pas affichés sur les cartes de tâches d'approbation par @zhangzhonghe
  - Correction du problème où le retour d'une approbation au nœud précédent revenait au début par @mytharcher
  - Correction du problème où la concurrence fait reprendre l'exécution de manière répétée par @mytharcher
  - Correction du problème où une erreur était levée dans la fenêtre contextuelle d'enregistrement d'approbation 1.x par @mytharcher
- **[Gestionnaire d'emails]**

  - Correction du problème où la fenêtre contextuelle de configuration des emails est obscurcie par @zhangzhonghe
  - Correction du problème des emails dans la même boîte aux lettres entre plusieurs utilisateurs et optimisation des performances par @jiannx
- **[Gestionnaire de migration]** Correction d'un gel potentiel du processus causé par la journalisation d'instructions SQL excessivement volumineuses incluses dans les exceptions d'erreur de migration par @cgyrock
