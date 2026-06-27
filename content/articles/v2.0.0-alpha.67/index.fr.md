---
title: "NocoBase v2.0.0-alpha.67 : ajout du composant de champ sous-tableau (édition contextuelle)"
description: "Notes de version de v2.0.0-alpha.67"
---

### 🎉 Nouvelles fonctionnalités

- **[serveur]** Refonte du superviseur d'application pour prendre en charge la gestion multi-applications dans différents scénarios ([#8043](https://github.com/nocobase/nocobase/pull/8043)) par @2013xile

- **[client]** Ajout d'un composant de champ de sous-tableau (édition contextuelle) ([#8280](https://github.com/nocobase/nocobase/pull/8280)) par @katherinehhh

- **[Employés IA]** Prise en charge du collage de fichiers dans le chat IA ([#8487](https://github.com/nocobase/nocobase/pull/8487)) par @heziqiang

### 🚀 Améliorations

- **[client]**
  - Amélioration des boutons de téléchargement et d'édition pour les champs de pièce jointe dans les sous-tableaux afin de mieux guider l'utilisateur à cliquer pour télécharger. ([#8474](https://github.com/nocobase/nocobase/pull/8474)) par @katherinehhh

  - Amélioration du sous-formulaire "plusieurs" pour initialiser avec un élément par défaut et éviter la création d'enregistrements lorsqu'il est laissé vide ([#8473](https://github.com/nocobase/nocobase/pull/8473)) par @katherinehhh

  - Amélioration du sous-formulaire "plusieurs" pour initialiser avec un élément par défaut et éviter la création d'enregistrements lorsqu'il est laissé vide ([#8458](https://github.com/nocobase/nocobase/pull/8458)) par @katherinehhh

- **[moteur de flux]** Amélioration de ctx.libs dans runjs pour prendre en charge le chargement à la demande, et ajout de bibliothèques prédéfinies : lodash, math et formula. ([#8468](https://github.com/nocobase/nocobase/pull/8468)) par @gchust

- **[serveur]** Prise en charge de la configuration d'une liste blanche d'origines CORS ([#8454](https://github.com/nocobase/nocobase/pull/8454)) par @2013xile

- **[Gestionnaire de fichiers]** Ajout d'un visualiseur extensible pour le gestionnaire de fichiers ([#8501](https://github.com/nocobase/nocobase/pull/8501)) par @mytharcher

- **[Visualiseur de fichiers Office]** Ajout de plus de types de fichiers pour la prévisualisation sur Microsoft ([#8500](https://github.com/nocobase/nocobase/pull/8500)) par @mytharcher

- **[Gestionnaire d'erreurs]** Nettoyage des erreurs de référence SQL ([#8464](https://github.com/nocobase/nocobase/pull/8464)) par @2013xile

- **[Action : Exporter les enregistrements]** Amélioration de la portée des données de l'action d'exportation basée sur les enregistrements sélectionnés ou les filtres de ressource ([#8442](https://github.com/nocobase/nocobase/pull/8442)) par @katherinehhh

- **[Action : Exporter les enregistrements Pro]** Amélioration de la portée des données de l'action d'exportation basée sur les enregistrements sélectionnés ou les filtres de ressource par @katherinehhh

- **[Workflow : Approbation]** Implémentation du contrôle d'accès pour les API afin d'empêcher les opérations de données non autorisées par @mytharcher

### 🐛 Corrections de bugs

- **[client]**
  - Correction de l'heure dupliquée dans la valeur DateTime du filtre ([#8506](https://github.com/nocobase/nocobase/pull/8506)) par @zhangzhonghe

  - Correction de l'heure dupliquée dans la valeur DateTime du filtre ([#8484](https://github.com/nocobase/nocobase/pull/8484)) par @zhangzhonghe

  - Correction du champ nanoid non régénéré après la soumission du formulaire ([#8491](https://github.com/nocobase/nocobase/pull/8491)) par @katherinehhh

  - Correction du problème où les popovers de l'éditeur de texte enrichi sont masqués ([#8443](https://github.com/nocobase/nocobase/pull/8443)) par @zhangzhonghe

  - Filtrage de la liste pour supprimer les doublons ([#8431](https://github.com/nocobase/nocobase/pull/8431)) par @jiannx

  - Correction du message de validation requis en double lors de l'effacement d'un champ en cascade ([#8476](https://github.com/nocobase/nocobase/pull/8476)) par @katherinehhh

  - Correction du problème où le menu de configuration ne s'affiche pas dans Chrome 144 ([#8470](https://github.com/nocobase/nocobase/pull/8470)) par @zhangzhonghe

  - Correction du problème où les données de sous-détail en mode lecture seule ne pouvaient pas être affichées correctement dans le formulaire d'édition ([#8469](https://github.com/nocobase/nocobase/pull/8469)) par @katherinehhh

  - Correction du problème où la fenêtre contextuelle "Variables personnalisées" est masquée ([#8463](https://github.com/nocobase/nocobase/pull/8463)) par @zhangzhonghe

  - Correction du problème où les paramètres de tri des groupes de champs de collection ne prenaient pas effet. ([#8453](https://github.com/nocobase/nocobase/pull/8453)) par @katherinehhh

  - Correction du problème où le bouton "Paramètres des colonnes" du tableau ne fonctionnait pas ([#8441](https://github.com/nocobase/nocobase/pull/8441)) par @zhangzhonghe

  - Correction d'un problème où le sélecteur de fichier du champ de relation de fichier avait un z-index incorrect, et la configuration contextuelle ne pouvait pas être sauvegardée correctement. ([#8446](https://github.com/nocobase/nocobase/pull/8446)) par @gchust

  - Correction du problème lors de l'édition d'une collection dans l'interface graphique ([#8451](https://github.com/nocobase/nocobase/pull/8451)) par @katherinehhh

- **[base de données]**
  - Correction des erreurs lors du filtrage avec l'opérateur `empty` après le rechargement d'une collection ([#8496](https://github.com/nocobase/nocobase/pull/8496)) par @2013xile

  - Correction : mise à jour profonde des associations imbriquées ([#8492](https://github.com/nocobase/nocobase/pull/8492)) par @chenos

  - Correction : mise à jour profonde des associations imbriquées ([#8492](https://github.com/nocobase/nocobase/pull/8492)) par @chenos

- **[serveur]** Correction de la version de `mathjs` dans les dépendances communes ([#8475](https://github.com/nocobase/nocobase/pull/8475)) par @mytharcher

- **[moteur de flux]**
  - Correction d'un problème où la fermeture d'une fenêtre contextuelle intégrée provoquait une erreur après avoir ouvert consécutivement la configuration des règles de liaison et la configuration du flux d'événements. ([#8368](https://github.com/nocobase/nocobase/pull/8368)) par @gchust

  - Correction d'un problème où un clic répété sur le menu de configuration pouvait ouvrir plusieurs fenêtres contextuelles de configuration. ([#8448](https://github.com/nocobase/nocobase/pull/8448)) par @gchust

  - Correction d'un problème où les variables dans les paramètres de code runjs étaient résolues avant l'exécution. ([#8445](https://github.com/nocobase/nocobase/pull/8445)) par @gchust

  - Correction d'un problème où les variables contextuelles ne pouvaient pas être sélectionnées dans la fenêtre contextuelle de création rapide du sélecteur de données. ([#8450](https://github.com/nocobase/nocobase/pull/8450)) par @gchust

- **[Employés IA]** Correction des problèmes de configuration de champ sélectionnable incohérente entre la modélisation IA et la gestion des sources de données ([#8488](https://github.com/nocobase/nocobase/pull/8488)) par @cgyrock

- **[Source de données : Principale]** Correction d'un problème où la suppression d'enregistrements d'un bloc de table d'association plusieurs-à-plusieurs ne respectait pas la contrainte `onDelete: 'restrict'` du champ d'association ([#8493](https://github.com/nocobase/nocobase/pull/8493)) par @2013xile

- **[Bloc : iframe]** Correction de l'erreur lors de l'ajout de variables agrégées à Iframe ([#8482](https://github.com/nocobase/nocobase/pull/8482)) par @zhangzhonghe

- **[Gestionnaire de tâches asynchrones]** Correction du problème où le workflow déclenché par une importation asynchrone était retardé dans son exécution ([#8478](https://github.com/nocobase/nocobase/pull/8478)) par @mytharcher

- **[Gestionnaire de fichiers]** Correction du problème où le nom de fichier obtenu à partir du corps de la requête devenait une chaîne décodée de manière inattendue ([#8481](https://github.com/nocobase/nocobase/pull/8481)) par @mytharcher

- **[Modèles d'interface]** Correction d'un problème où les blocs de modèles de référence ne pouvaient pas définir de portées de données via les paramètres de flux d'événements. ([#8472](https://github.com/nocobase/nocobase/pull/8472)) par @gchust

- **[Mobile (obsolète)]** Plugin mobile obsolète (remplacé par le plugin ui-layout à partir de la version 2.0). ([#8456](https://github.com/nocobase/nocobase/pull/8456)) par @chenos

- **[Action : Importer des enregistrements Pro]** Correction du problème où le workflow déclenché par une importation asynchrone était retardé dans son exécution par @mytharcher

- **[Workflow : Webhook]** Correction du problème où les données du corps sont manquantes lorsque l'analyse du corps n'est pas configurée par @mytharcher

- **[Impression de modèle]**
  - Correction de la logique de permission du bouton d'impression incorrecte lorsque les rôles étaient unis. par @jiannx

  - Suppression des boutons de pied de page de la configuration du modèle d'impression par @katherinehhh

- **[Workflow : Approbation]**
  - Correction du problème où les champs ne sont pas affichés sur les cartes de tâches d'approbation par @zhangzhonghe

  - Correction du problème où le retour d'une approbation au nœud précédent revenait au début par @mytharcher

  - Correction du problème où la concurrence provoquait une reprise d'exécution répétée par @mytharcher

  - Correction du problème où une erreur était levée dans la fenêtre contextuelle d'enregistrement d'approbation 1.x par @mytharcher

- **[Gestionnaire d'emails]**
  - Correction du problème où la fenêtre contextuelle de configuration des emails est masquée par @zhangzhonghe

  - Correction du problème des emails dans la même boîte aux lettres entre plusieurs utilisateurs et optimisation des performances par @jiannx

- **[Gestionnaire de migration]** Correction d'un gel potentiel du processus causé par la journalisation d'instructions SQL excessivement volumineuses incluses dans les exceptions d'erreur de migration par @cgyrock
