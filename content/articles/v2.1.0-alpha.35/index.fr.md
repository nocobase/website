---
title: "NocoBase v2.1.0-alpha.35 : Ajout d'un nouvel employé IA, Lina l'ingénieure de localisation, pour assister les tâches de traduction de localisation"
description: "Notes de version de v2.1.0-alpha.35"
---

### 🎉 Nouvelles fonctionnalités

- **[undefined]** Ajout d'un nouvel employé IA, Lina l'ingénieure en localisation, pour aider aux tâches de traduction de localisation ([#9434](https://github.com/nocobase/nocobase/pull/9434)) par @2013xile
Référence : [Gestion de la localisation](https://docs.nocobase.com/system-management/localization)<br>[Lina : Ingénieure en localisation](https://docs.nocobase.com/ai-employees/built-in/lina)<br>[Utiliser Lina et le HY-MT1.5-1.8B local pour traduire les entrées de localisation](https://docs.nocobase.com/ai-employees/scenarios/localization-hy-mt)
- **[Calendrier]** Ajout du support client v2 pour le plugin Calendrier. ([#9464](https://github.com/nocobase/nocobase/pull/9464)) par @jiannx

- **[Bloc : Arborescence]** Ajout du support client-v2 pour le bloc de filtre arborescent. ([#9466](https://github.com/nocobase/nocobase/pull/9466)) par @jiannx

- **[Stockage de fichiers : S3(Pro)]** Prise en charge du téléchargement de fichiers via le stockage S3 Pro dans le gestionnaire de fichiers v2. par @Molunerfinn

### 🚀 Améliorations

- **[build]** Ajout d'une couverture de régression pour empêcher `deleteServerFiles` de supprimer les artefacts de construction `client` et `client-v2` sur les chemins Windows et POSIX. ([#9318](https://github.com/nocobase/nocobase/pull/9318)) par @Molunerfinn

- **[client]** Exclusion des enregistrements déjà associés dans la boîte de dialogue de sélection d'association du bloc de table un-à-plusieurs ([#9448](https://github.com/nocobase/nocobase/pull/9448)) par @katherinehhh

- **[Employés IA]** Optimisation de l'interaction et des performances des conversations parallèles des employés IA ([#9462](https://github.com/nocobase/nocobase/pull/9462)) par @cgyrock

- **[Gestionnaire de fichiers]** Les plugins de stockage tiers peuvent désormais enregistrer leur propre formulaire de type de stockage sur la page des paramètres du gestionnaire de fichiers v2. ([#9439](https://github.com/nocobase/nocobase/pull/9439)) par @Molunerfinn

- **[IA : Base de connaissances]** L'identifiant unique d'une base de connaissances est configurable lors de sa création par @cgyrock

### 🐛 Corrections de bugs

- **[client]**
  - Correction empêchant l'ouverture de l'édition rapide pour les champs d'association dans un tableau ([#9469](https://github.com/nocobase/nocobase/pull/9469)) par @katherinehhh

  - Correction : les champs de sélection multiple dans les blocs de données v2 doivent afficher les libellés des options au lieu des valeurs ([#9472](https://github.com/nocobase/nocobase/pull/9472)) par @katherinehhh

  - Correction des requêtes de tableau en double lorsque les formulaires de filtre ont des valeurs par défaut ([#9423](https://github.com/nocobase/nocobase/pull/9423)) par @zhangzhonghe

  - Correction du problème où les paramètres de valeur par défaut hérités ne pouvaient pas être supprimés. ([#9470](https://github.com/nocobase/nocobase/pull/9470)) par @gchust

  - Correction du problème où il était impossible de sélectionner des options pour le champ de sélection d'une association. ([#9088](https://github.com/nocobase/nocobase/pull/9088)) par @gchust

  - Correction du problème où les paramètres système apparaissaient vides après soumission ([#9458](https://github.com/nocobase/nocobase/pull/9458)) par @zhangzhonghe

  - Correction d'un problème où la portée des données du bloc cible était mal définie lors de la désélection de données de ligne dans un flux d'événements de bloc de tableau. ([#9443](https://github.com/nocobase/nocobase/pull/9443)) par @gchust

  - Correction d'une erreur lors du changement du champ de titre d'un champ d'association dans un bloc de tableau v2 ([#9451](https://github.com/nocobase/nocobase/pull/9451)) par @katherinehhh

  - Correction des règles de liaison V2 pour prendre en charge la définition d'options sélectionnables pour les champs ([#9399](https://github.com/nocobase/nocobase/pull/9399)) par @jiannx

- **[client-v2]**
  - Conservation des groupes vides après le filtrage des menus v1 dans la mise en page v2 ([#9478](https://github.com/nocobase/nocobase/pull/9478)) par @zhangzhonghe

  - Correction du problème où la page devenait blanche derrière la boîte de dialogue d'activation du plugin ([#9455](https://github.com/nocobase/nocobase/pull/9455)) par @zhangzhonghe

  - Correction du crash des pages d'administration v1 lorsqu'elles référencent des modules de plugin v2 dans les builds de production. ([#9460](https://github.com/nocobase/nocobase/pull/9460)) par @Molunerfinn

- **[cli-v1]** Correction des échecs de démarrage en développement dans les applications créées avec create-nocobase-app causés par la résolution du chemin client app-dev. ([#9465](https://github.com/nocobase/nocobase/pull/9465)) par @Molunerfinn

- **[serveur]** correction(gestionnaire-fichiers) : forcer le téléchargement des fichiers de contenu actif dans le stockage local/public ([#9437](https://github.com/nocobase/nocobase/pull/9437)) par @mytharcher

- **[Employés IA]**
  - Correction de l'erreur de chargement du plugin-ai ([#9483](https://github.com/nocobase/nocobase/pull/9483)) par @cgyrock

  - Correction du test Ollama nécessitant la saisie d'une clé ([#9450](https://github.com/nocobase/nocobase/pull/9450)) par @cgyrock

- **[Bloc : Formulaire multi-étapes]** Correction du problème de barre de défilement lors de l'activation de la hauteur totale dans le bloc de formulaire par étapes v1 ([#9468](https://github.com/nocobase/nocobase/pull/9468)) par @katherinehhh

- **[Départements]** Correction du conflit de traduction entre les boutons « Ajouter un utilisateur » et « Ajouter un département » dans les paramètres Utilisateurs et Permissions ([#9456](https://github.com/nocobase/nocobase/pull/9456)) par @katherinehhh

- **[Workflow]** correction : restauration du texte d'aide dans les boîtes de dialogue de liaison de workflow FlowModel pour les événements d'action personnalisée et d'opération ([#9447](https://github.com/nocobase/nocobase/pull/9447)) par @mytharcher

- **[Bloc : Markdown]** Correction du problème de signalement d'erreur du bloc Markdown v2 ([#9440](https://github.com/nocobase/nocobase/pull/9440)) par @zhangzhonghe

- **[Workflow : Webhook]** Correction du problème où la création d'un nœud de réponse était interceptée par la validation de la configuration `statusCode` par @mytharcher

- **[Workflow : Approbation]**
  - Correction de la mise en page du formulaire d'approbation sur les appareils mobiles par @zhangzhonghe

  - Correction de l'index d'enregistrement d'approbation en double lors de la délégation de tâches d'approbation. par @mytharcher

- **[Gestionnaire de sauvegarde]** Correction d'un problème où les sauvegardes échouaient avec une erreur lorsque les fichiers étaient introuvables. par @gchust
