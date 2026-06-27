---
title: "NocoBase v2.0.0-beta.14 : Prise en charge du collage de fichiers dans le chat IA"
description: "Notes de version de v2.0.0-beta.14"
---

### 🎉 Nouvelles fonctionnalités

- **[IA employés]** Prise en charge du collage de fichiers dans le chat IA ([#8487](https://github.com/nocobase/nocobase/pull/8487)) par @heziqiang

### 🚀 Améliorations

- **[client]**
  - Amélioration du sous-formulaire « un-à-plusieurs » pour initialiser avec un élément par défaut et éviter la création d'enregistrements lorsqu'il est laissé vide ([#8473](https://github.com/nocobase/nocobase/pull/8473)) par @katherinehhh

  - Amélioration des boutons de téléchargement et d'édition pour les champs de pièce jointe dans les sous-tableaux afin de mieux guider l'utilisateur vers le clic de téléchargement. ([#8474](https://github.com/nocobase/nocobase/pull/8474)) par @katherinehhh

- **[moteur de workflow]** Amélioration de ctx.libs dans runjs pour prendre en charge le chargement à la demande, et ajout de bibliothèques prédéfinies : lodash, math et formula. ([#8468](https://github.com/nocobase/nocobase/pull/8468)) par @gchust

- **[Gestionnaire d'erreurs]** Nettoyage des erreurs de référence SQL ([#8464](https://github.com/nocobase/nocobase/pull/8464)) par @2013xile

- **[Workflow : Approbation]** Implémentation du contrôle d'accès pour les API afin d'empêcher les opérations de données non autorisées par @mytharcher

### 🐛 Corrections de bugs

- **[client]**
  - Correction du problème où les popovers de l'éditeur de texte enrichi étaient masqués ([#8443](https://github.com/nocobase/nocobase/pull/8443)) par @zhangzhonghe

  - Correction de l'heure dupliquée dans la valeur DateTime du filtre ([#8484](https://github.com/nocobase/nocobase/pull/8484)) par @zhangzhonghe

  - Correction du champ nanoid non régénéré après la soumission du formulaire ([#8491](https://github.com/nocobase/nocobase/pull/8491)) par @katherinehhh

  - Correction du message de validation obligatoire en double lors de l'effacement d'un champ en cascade ([#8476](https://github.com/nocobase/nocobase/pull/8476)) par @katherinehhh

  - Filtrage de la liste pour supprimer les doublons ([#8431](https://github.com/nocobase/nocobase/pull/8431)) par @jiannx

  - Correction du problème où le menu de configuration ne s'affichait pas dans Chrome 144 ([#8470](https://github.com/nocobase/nocobase/pull/8470)) par @zhangzhonghe

- **[base de données]**
  - correction : mise à jour profonde des associations imbriquées ([#8492](https://github.com/nocobase/nocobase/pull/8492)) par @chenos

  - correction : mise à jour profonde des associations imbriquées ([#8492](https://github.com/nocobase/nocobase/pull/8492)) par @chenos

- **[serveur]** Correction de la version de `mathjs` dans les dépendances communes ([#8475](https://github.com/nocobase/nocobase/pull/8475)) par @mytharcher

- **[moteur de workflow]** Correction d'un problème où la fermeture d'une popup intégrée provoquait une erreur après avoir ouvert consécutivement la configuration des règles de liaison et la configuration du flux d'événements. ([#8368](https://github.com/nocobase/nocobase/pull/8368)) par @gchust

- **[Source de données : Principale]** Correction d'un problème où la suppression d'enregistrements d'un bloc de table d'association plusieurs-à-plusieurs ne respectait pas la contrainte `onDelete: 'restrict'` du champ d'association ([#8493](https://github.com/nocobase/nocobase/pull/8493)) par @2013xile

- **[Gestionnaire de tâches asynchrones]** Correction du problème où le workflow déclenché par une importation asynchrone était exécuté en retard ([#8478](https://github.com/nocobase/nocobase/pull/8478)) par @mytharcher

- **[Bloc : iframe]** Correction de l'erreur lors de l'ajout de variables agrégées à Iframe ([#8482](https://github.com/nocobase/nocobase/pull/8482)) par @zhangzhonghe

- **[Modèles d'interface]** Correction d'un problème où les blocs de modèles de référence ne pouvaient pas définir de périmètres de données via les paramètres de flux d'événements. ([#8472](https://github.com/nocobase/nocobase/pull/8472)) par @gchust

- **[Gestionnaire de fichiers]** Correction du problème où le nom de fichier obtenu à partir du corps de la requête devenait une chaîne décodée de manière inattendue ([#8481](https://github.com/nocobase/nocobase/pull/8481)) par @mytharcher

- **[Action : Importer des enregistrements Pro]** Correction du problème où le workflow déclenché par une importation asynchrone était exécuté en retard par @mytharcher

- **[Workflow : Webhook]** Correction du problème où les données du corps étaient manquantes lorsque l'analyse du corps n'était pas configurée par @mytharcher

- **[Modèle d'impression]** Suppression des boutons de pied de page de la configuration du modèle d'impression par @katherinehhh

- **[Workflow : Approbation]**
  - Correction du problème où le renvoi d'une approbation au nœud précédent la renvoyait au début par @mytharcher

  - Correction du problème où la concurrence provoquait une reprise d'exécution répétée par @mytharcher

  - Correction du problème où les champs ne s'affichaient pas sur les cartes de tâches d'approbation par @zhangzhonghe
