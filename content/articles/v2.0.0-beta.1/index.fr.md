---
title: "NocoBase v2.0.0-beta.1 : Prise en charge des composants de maintenance définis par les plugins lorsque l'application entre en état de maintenance"
description: "Notes de version de v2.0.0-beta.1"
---

### 🎉 Nouvelles fonctionnalités

- **[indéfini]** Ajout d'un plugin expérimental "Bloc de référence", permettant de réutiliser des blocs existants par référence ou copie. ([#7584](https://github.com/nocobase/nocobase/pull/7584)) par @gchust

- **[client]**
  - Prise en charge des composants de maintenance définis par le plugin lorsque l'application entre en état de maintenance ([#8252](https://github.com/nocobase/nocobase/pull/8252)) par @cgyrock

  - Lors de la création d'une collection, le type du champ id prédéfini peut être modifié ([#8129](https://github.com/nocobase/nocobase/pull/8129)) par @cgyrock

  - Ajout de la prise en charge des paramètres ajouter/sélectionner/dissocier dans le sous-formulaire de type plusieurs-à-plusieurs ([#8099](https://github.com/nocobase/nocobase/pull/8099)) par @katherinehhh

  - Prise en charge de la personnalisation des styles globaux dans l'éditeur de thème ([#7960](https://github.com/nocobase/nocobase/pull/7960)) par @ljmiaoo

  - Prise en charge de la définition d'une règle de tri par défaut dans le bloc de détail ([#8070](https://github.com/nocobase/nocobase/pull/8070)) par @katherinehhh

  - Prise en charge du réglage du type de données pour le champ Nombre (options : double, float, decimal) ([#8058](https://github.com/nocobase/nocobase/pull/8058)) par @chenos

  - Prise en charge du tri des champs de colonne dans un tableau ([#7900](https://github.com/nocobase/nocobase/pull/7900)) par @katherinehhh

  - Ajout de la prise en charge de la création rapide pour la sélection de champs d'association ([#7887](https://github.com/nocobase/nocobase/pull/7887)) par @katherinehhh

  - Prise en charge du sélecteur en cascade pour le champ d'association de collection arborescente ([#7846](https://github.com/nocobase/nocobase/pull/7846)) par @katherinehhh

  - Prise en charge du glisser-déposer pour les actions de colonne de tableau ([#7842](https://github.com/nocobase/nocobase/pull/7842)) par @zhangzhonghe

  - Ajout de la prise en charge de la pagination pour le sous-tableau ([#7754](https://github.com/nocobase/nocobase/pull/7754)) par @katherinehhh

  - Flux d'événements : Introduction de nouvelles actions prédéfinies pour améliorer les options de personnalisation de la gestion des événements, permettant aux utilisateurs de rationaliser les flux de travail et d'améliorer l'efficacité ([#7672](https://github.com/nocobase/nocobase/pull/7672)) par @zhangzhonghe

  - Ajout du bloc markdown 2.0 ([#7613](https://github.com/nocobase/nocobase/pull/7613)) par @katherinehhh

  - Prise en charge de la définition de règles de liaison pour les sous-formulaires ([#7640](https://github.com/nocobase/nocobase/pull/7640)) par @zhangzhonghe

  - Ajout de la prise en charge des écouteurs d'événements de clic sur les lignes de tableau, permettant aux utilisateurs d'exécuter des actions spécifiques lorsqu'une ligne du tableau est cliquée ([#7622](https://github.com/nocobase/nocobase/pull/7622)) par @zhangzhonghe

  - Ajout de la prise en charge des variables personnalisées ([#7585](https://github.com/nocobase/nocobase/pull/7585)) par @zhangzhonghe

  - Ajout de la variable "Type d'appareil actuel" ([#7576](https://github.com/nocobase/nocobase/pull/7576)) par @zhangzhonghe

- **[Gestionnaire de fichiers]** Prise en charge de la configuration de la méthode de renommage des fichiers ([#8231](https://github.com/nocobase/nocobase/pull/8231)) par @JAVA-LW

- **[Workflow]**
  - Ajout de nouvelles variables système dans le workflow, incluant `instanceId` et `genSnowflakeId()` ([#8223](https://github.com/nocobase/nocobase/pull/8223)) par @mytharcher

  - Ajout du nœud "Multi-conditions", fournissant le contrôle de flux comme `switch` / `case` ([#7878](https://github.com/nocobase/nocobase/pull/7878)) par @mytharcher

- **[Bloc : Carte]** ajout du bloc carte 2.0 ([#7944](https://github.com/nocobase/nocobase/pull/7944)) par @katherinehhh

- **[Visualisation de données]**
  - ajout d'un employé IA pour configurer les graphiques ([#7815](https://github.com/nocobase/nocobase/pull/7815)) par @heziqiang

  - ajout d'une source de données SQL pour les graphiques ([#7830](https://github.com/nocobase/nocobase/pull/7830)) par @heziqiang

  - ajout du type de graphique "Graphique en anneau" ([#7629](https://github.com/nocobase/nocobase/pull/7629)) par @heziqiang

- **[Moteur de flux]** Prise en charge de l'utilisation de chaînes de modèle LiquidJS dans les instructions SQL ([#7667](https://github.com/nocobase/nocobase/pull/7667)) par @2013xile

- **[Gestionnaire de sources de données]**
  - La source de données principale prend désormais en charge la lecture directe des tables de la base de données principale et permet de modifier les interfaces de champ ([#7118](https://github.com/nocobase/nocobase/pull/7118)) par @aaaaaajie

  - La source de données principale prend désormais en charge la lecture directe des tables de la base de données principale et permet de modifier les interfaces de champ ([#7118](https://github.com/nocobase/nocobase/pull/7118)) par @aaaaaajie

- **[Bloc : GridCard]** Ajout du bloc carte en grille 2.0 ([#7579](https://github.com/nocobase/nocobase/pull/7579)) par @katherinehhh

- **[Bloc : Liste]** Ajout du bloc liste 2.0 ([#7574](https://github.com/nocobase/nocobase/pull/7574)) par @katherinehhh

- **[Bloc : Panneau d'actions]** Ajout du bloc panneau d'actions 2.0 ([#7594](https://github.com/nocobase/nocobase/pull/7594)) par @katherinehhh

- **[Employés IA]** Amélioration de la fonction de recherche web du plugin-ai ([#7580](https://github.com/nocobase/nocobase/pull/7580)) par @cgyrock

- **[Télémétrie]** Ajout d'un nouveau plugin : Télémétrie, un plugin de télémétrie basé sur OpenTelemetry fournissant des métriques CPU, mémoire et requêtes HTTP avec prise en charge de l'exportation HTTP par @2013xile

- **[Brouillons de formulaires]** Brouillons de formulaires par @chenos

- **[Stockage de fichiers : S3(Pro)]** Ajout d'une option de mode de renommage pour le stockage S3 Pro par @mytharcher

- **[Workflow : Approbation]**
  - Permet de choisir d'afficher ou non l'instantané ou le dernier enregistrement dans l'interface utilisateur du processus d'approbation par @mytharcher

  - Ajout d'une configuration d'audience pour contrôler qui peut initier une approbation par @mytharcher

- **[Gestionnaire d'emails]** Implémentation de la gestion des emails 2.0 par @jiannx

### 🚀 Améliorations

- **[indéfini]**
  - mise à jour de la documentation anglaise du plugin de graphiques ([#7748](https://github.com/nocobase/nocobase/pull/7748)) par @heziqiang

  - mise à jour du document de présentation des graphiques ([#7702](https://github.com/nocobase/nocobase/pull/7702)) par @heziqiang

- **[moteur de flux]**
  - Prise en charge de la méthode window.location.reload dans l'environnement runjs. ([#8316](https://github.com/nocobase/nocobase/pull/8316)) par @gchust

  - Optimisation des problèmes de performances lors du changement de modes de configuration ([#8241](https://github.com/nocobase/nocobase/pull/8241)) par @zhangzhonghe

  - Prise en charge de l'objet FormData dans l'environnement runjs. ([#8263](https://github.com/nocobase/nocobase/pull/8263)) par @gchust

  - prise en charge du masquage dynamique du menu de configuration des étapes ([#7924](https://github.com/nocobase/nocobase/pull/7924)) par @gchust

  - Ajout de l'option useCache à FlowModelRenderer ([#8072](https://github.com/nocobase/nocobase/pull/8072)) par @zhangzhonghe

  - Ajout de la méthode `removeModelWithSubModels` pour supprimer récursivement un modèle et ses sous-modèles ([#8064](https://github.com/nocobase/nocobase/pull/8064)) par @zhangzhonghe

  - Prise en charge du changement dynamique de la classe du modèle de flux ([#7952](https://github.com/nocobase/nocobase/pull/7952)) par @gchust

  - Prise en charge de l'écoute de l'événement de changement d'arborescence des modèles de flux dans le moteur de flux. ([#7905](https://github.com/nocobase/nocobase/pull/7905)) par @gchust

  - amélioration de la résolution de la variable d'enregistrement actuelle, rendant l'ouverture de la boîte de dialogue plus rapide ([#7895](https://github.com/nocobase/nocobase/pull/7895)) par @gchust

  - Optimisation de la structure API des bibliothèques tierces dans le contexte runjs et ajout de la prise en charge de la bibliothèque d'icônes Antd. ([#7896](https://github.com/nocobase/nocobase/pull/7896)) par @gchust

  - Optimisation du style de la barre d'outils pour éviter que les icônes ne soient masquées ([#7883](https://github.com/nocobase/nocobase/pull/7883)) par @zhangzhonghe

  - Optimisation des styles de la barre d'outils pour les onglets de page ([#7795](https://github.com/nocobase/nocobase/pull/7795)) par @zhangzhonghe

  - prise en charge de l'opération différée dans le modèle de flux ([#7786](https://github.com/nocobase/nocobase/pull/7786)) par @gchust

  - Amélioration du message d'erreur affiché lors de l'échec de la copie de l'UID, fournissant des instructions plus claires pour résoudre le problème. ([#7718](https://github.com/nocobase/nocobase/pull/7718)) par @gchust

  - Prise en charge de la définition du contexte variable dans la définition des étapes du flux ([#7674](https://github.com/nocobase/nocobase/pull/7674)) par @gchust

  - Prise en charge du saut de l'étape de flux runjs en ajoutant skipRunJs=true à la chaîne de requête URL. ([#7638](https://github.com/nocobase/nocobase/pull/7638)) par @gchust

  - prise en charge de la variable popup ([#7583](https://github.com/nocobase/nocobase/pull/7583)) par @gchust

  - Standardisation des workflows automatiques pour qu'ils soient systématiquement déclenchés par l'événement "beforeRender", garantissant un fonctionnement prévisible et unifié entre les processus. ([#7577](https://github.com/nocobase/nocobase/pull/7577)) par @gchust

  - Amélioration de l'expérience d'édition de code avec des extraits plus riches et des complétions de code contextuelles pour divers scénarios ([#7559](https://github.com/nocobase/nocobase/pull/7559)) par @gchust

  - Optimisation de la fonctionnalité de glisser-déposer ([#7526](https://github.com/nocobase/nocobase/pull/7526)) par @zhangzhonghe

- **[sdk]** Amélioration de l'implémentation du stockage API ([#8308](https://github.com/nocobase/nocobase/pull/8308)) par @chenos

- **[client]**
  - Prise en charge du mode plein écran pour l'éditeur de code JS. ([#8294](https://github.com/nocobase/nocobase/pull/8294)) par @gchust

  - rendre "Ajouter un enfant" équivalent à "Ajouter nouveau" de l'association enfants correspondante ([#8272](https://github.com/nocobase/nocobase/pull/8272)) par @katherinehhh

  - prise en charge de l'effacement de la valeur par défaut pour le champ couleur ([#8268](https://github.com/nocobase/nocobase/pull/8268)) par @katherinehhh

  - utilisation d'un select pour la configuration de la largeur de la colonne d'opération ([#8218](https://github.com/nocobase/nocobase/pull/8218)) par @katherinehhh

  - prise en charge de la largeur de colonne personnalisée pour les colonnes de tableau ([#8200](https://github.com/nocobase/nocobase/pull/8200)) par @katherinehhh

  - modification de la largeur des colonnes du tableau pour utiliser des options sélectionnables ([#8188](https://github.com/nocobase/nocobase/pull/8188)) par @katherinehhh

  - amélioration des styles de recordPicker avec maxTagCount ([#8175](https://github.com/nocobase/nocobase/pull/8175)) par @katherinehhh

  - optimisation des options de configuration (Blocs, Champs, Actions) ([#8141](https://github.com/nocobase/nocobase/pull/8141)) par @katherinehhh

  - prise en charge du formatage des nombres pour les champs de pourcentage ([#8123](https://github.com/nocobase/nocobase/pull/8123)) par @katherinehhh

  - correction du saut de pagination du sous-tableau après la suppression d'une ligne et ajout de la prise en charge des règles de validation de colonne ([#8094](https://github.com/nocobase/nocobase/pull/8094)) par @katherinehhh

  - ajustement de l'affichage des grands champs dans le sous-tableau éditable ([#8078](https://github.com/nocobase/nocobase/pull/8078)) par @katherinehhh

  - prise en charge des points de suspension pour le contenu des champs JSON débordants ([#8067](https://github.com/nocobase/nocobase/pull/8067)) par @katherinehhh

  - prise en charge du paramètre allowMultiple dans le composant de téléchargement de pièces jointes ([#8052](https://github.com/nocobase/nocobase/pull/8052)) par @katherinehhh

  - affichage des options réduites au survol dans le composant Select ([#8030](https://github.com/nocobase/nocobase/pull/8030)) par @katherinehhh

  - Prise en charge de l'initialisation des champs de filtre sélectionnés dans la requête de graphique ([#7933](https://github.com/nocobase/nocobase/pull/7933)) par @heziqiang

  - Adaptation des composants pour les appareils mobiles ([#7870](https://github.com/nocobase/nocobase/pull/7870)) par @zhangzhonghe

  - Ajout de la prise en charge de la bibliothèque Day.js dans le contexte de script RunJS, permettant des manipulations de date et d'heure plus faciles. ([#7841](https://github.com/nocobase/nocobase/pull/7841)) par @gchust

  - ajout de la version des informations de page au contexte du moteur de flux ([#7826](https://github.com/nocobase/nocobase/pull/7826)) par @gchust

  - amélioration de l'éditeur Markdown ([#7793](https://github.com/nocobase/nocobase/pull/7793)) par @katherinehhh

  - adaptation au champ tableoid dans la version 2.0 ([#7809](https://github.com/nocobase/nocobase/pull/7809)) par @katherinehhh

  - prise en charge de jsx dans l'éditeur de code JS ([#7699](https://github.com/nocobase/nocobase/pull/7699)) par @gchust

  - prise en charge des champs d'association dans le modèle de champ JS ([#7618](https://github.com/nocobase/nocobase/pull/7618)) par @gchust

- **[serveur]** Ajout d'une tolérance aux pannes lorsque des instances d'application manquantes provoquent des erreurs lors de la récupération des messages de maintenance de l'application ([#8196](https://github.com/nocobase/nocobase/pull/8196)) par @2013xile

- **[acl]** Prise en charge de l'API `acl.registerSnippet` pour fusionner la configuration des snippets ([#8155](https://github.com/nocobase/nocobase/pull/8155)) par @mytharcher

- **[télémétrie]**
  - Prise en charge du contrôle des métriques exportées ([#7938](https://github.com/nocobase/nocobase/pull/7938)) par @2013xile

  - Ajout de métriques de télémétrie pour le nombre de sous-applications en ligne, etc. ([#7743](https://github.com/nocobase/nocobase/pull/7743)) par @2013xile

- **[base de données]** Refonte du plugin de chiffrement de champ pour renforcer la sécurité, prenant en charge la génération et la rotation des clés d'application, et des clés de chiffrement par champ. ([#7769](https://github.com/nocobase/nocobase/pull/7769)) par @cgyrock

- **[Employés IA]**
  - amélioration de la compatibilité Gemini pour les nœuds LLM dans le workflow.<br/>optimisation de l'outil AI dataSourceQuery pour la gestion de données à grande échelle.<br/>résolution des problèmes de modélisation des données.<br/>ajout d'un outil de suggestion IA. ([#8249](https://github.com/nocobase/nocobase/pull/8249)) par @heziqiang

  - Correction du problème de non-réponse de l'employé IA lors de la première soumission d'édition<br/>Suppression de l'employé IA intégré inutile "Avery Form Assistant"<br/>Ajout des permissions de rôle initiales par défaut pour les employés IA intégrés<br/>Amélioration de la gestion des erreurs et du comportement de sortie des employés IA<br/>Ajout de la prise en charge de l'accès de l'IA aux variables de contexte modal<br/>Ajout de la prise en charge des sources de données externes pour l'IA<br/>Correction de la troncature incorrecte de la conversation lorsque l'IA traite de grands volumes de données ([#8191](https://github.com/nocobase/nocobase/pull/8191)) par @heziqiang

  - Activation de la fonctionnalité d'édition pour les invites système de l'assistant IA intégré.<br/>Optimisation de l'invite système pour l'assistant IA Nathan.<br/>Correction d'un problème de lecture des fichiers statiques par le serveur. ([#8097](https://github.com/nocobase/nocobase/pull/8097)) par @heziqiang

  - ajout du champ fournisseur manquant au formulaire d'ajout de LLM ([#8049](https://github.com/nocobase/nocobase/pull/8049)) par @heziqiang

  - Ajout d'un hook de mise à niveau pour le plugin d'employé IA ([#7951](https://github.com/nocobase/nocobase/pull/7951)) par @heziqiang

  - Amélioration de la logique d'interaction de l'employé IA et optimisation du flux de configuration des tâches ([#7707](https://github.com/nocobase/nocobase/pull/7707)) par @cgyrock

  - L'employé IA peut interroger les données de manière autonome en fonction des métadonnées du bloc de tableau ([#7703](https://github.com/nocobase/nocobase/pull/7703)) par @cgyrock

  - Optimisation de l'expérience de codage IA, y compris l'utilisation de l'employé IA pour réviser, diagnostiquer et corriger le code. ([#7679](https://github.com/nocobase/nocobase/pull/7679)) par @cgyrock

  - Refonte du fournisseur OpenAI LLM en deux fournisseurs distincts pour prendre en charge les API Completions et Responses d'OpenAI. ([#7615](https://github.com/nocobase/nocobase/pull/7615)) par @cgyrock

  - Ajout du nouveau fournisseur LLM Ollama ([#7612](https://github.com/nocobase/nocobase/pull/7612)) par @ReLaMi96

  - Optimisation du codage IA ([#7614](https://github.com/nocobase/nocobase/pull/7614)) par @cgyrock

  - ajout d'un bouton de réduction pour la boîte de chat dans la disposition mobile ([#7595](https://github.com/nocobase/nocobase/pull/7595)) par @cgyrock

- **[Modèles d'interface utilisateur]**
  - Ajout de la prise en charge des modèles de champ pour le bloc de détails. ([#8247](https://github.com/nocobase/nocobase/pull/8247)) par @gchust

  - Ajout du plugin de modèles d'interface utilisateur, offrant la possibilité de réutiliser des modèles de blocs et des modèles de popup. ([#8163](https://github.com/nocobase/nocobase/pull/8163)) par @gchust

- **[Workflow]**
  - Ajout de l'instance de workflow d'origine à l'API de duplication ([#8225](https://github.com/nocobase/nocobase/pull/8225)) par @mytharcher

  - Amélioration de la description du champ `changed` dans l'événement de collection ([#8216](https://github.com/nocobase/nocobase/pull/8216)) par @mytharcher

  - Prise en charge de l'utilisation de la configuration existante pour en créer une nouvelle dans un workflow dupliqué ([#8165](https://github.com/nocobase/nocobase/pull/8165)) par @mytharcher

  - Ajout d'une logique de tolérance aux pannes pour les données manquantes dans la préparation du processeur, afin d'éviter le blocage de l'exécution ([#8156](https://github.com/nocobase/nocobase/pull/8156)) par @mytharcher

  - Utilisation du chargement différé pour les données d'association sur le canevas du workflow afin d'améliorer les performances ([#8142](https://github.com/nocobase/nocobase/pull/8142)) par @mytharcher

  - Achèvement de la configuration du workflow lié pour le bouton d'action de mise à jour d'enregistrement ([#7668](https://github.com/nocobase/nocobase/pull/7668)) par @mytharcher

- **[Gestionnaire de tâches asynchrones]**
  - Amélioration de la gestion des erreurs lors des tâches de nettoyage en ajoutant des mécanismes de capture d'exceptions pour éviter les plantages de l'application ([#8215](https://github.com/nocobase/nocobase/pull/8215)) par @mytharcher

  - Les tâches asynchrones pour les sous-applications ne doivent démarrer que les sous-applications cibles dans les Workers ([#7927](https://github.com/nocobase/nocobase/pull/7927)) par @2013xile

- **[Bloc : Panneau d'actions]** amélioration de l'affichage des blocs, actions et champs masqués en mode configuration ([#8174](https://github.com/nocobase/nocobase/pull/8174)) par @katherinehhh

- **[Bloc : Liste]** ajout d'un bouton Lien pour les blocs Tableau, Liste et Carte en grille ([#8194](https://github.com/nocobase/nocobase/pull/8194)) par @katherinehhh

- **[Gestionnaire d'erreurs]** Ne pas exposer les messages d'erreur bruts de la base de données en cas d'erreurs de syntaxe SQL, afin d'éviter de révéler le type de base de données ([#8195](https://github.com/nocobase/nocobase/pull/8195)) par @2013xile

- **[Bloc : Carte]** prise en charge des points de suspension pour le débordement de texte dans le champ carte en mode d'affichage texte ([#8189](https://github.com/nocobase/nocobase/pull/8189)) par @katherinehhh

- **[Contrôle d'accès]** Interdiction d'attribuer le rôle racine aux utilisateurs ([#8180](https://github.com/nocobase/nocobase/pull/8180)) par @2013xile

- **[Bloc : GridCard]**
  - Optimisation des styles du bloc Carte en grille pour une disposition plus compacte ([#8152](https://github.com/nocobase/nocobase/pull/8152)) par @katherinehhh

  - ajout de la configuration du nombre de lignes pour la carte en grille et remplacement de pageSize par un calcul automatique ([#8055](https://github.com/nocobase/nocobase/pull/8055)) par @katherinehhh

- **[Champ de collection : Markdown(Vditor)]** Désactivation de l'analyse des variables dans le champ Markdown par défaut en mode readPretty ([#8145](https://github.com/nocobase/nocobase/pull/8145)) par @katherinehhh

- **[Action : Importer des enregistrements]** autorisation de sélectionner l'ID pour les champs d'importation ([#8133](https://github.com/nocobase/nocobase/pull/8133)) par @katherinehhh

- **[Visualisation de données]**
  - mise à jour des conseils d'alerte et des annotations de modèle de code d'événements ([#7814](https://github.com/nocobase/nocobase/pull/7814)) par @heziqiang

  - ajout d'options de format de temps pour les données de graphique ([#7763](https://github.com/nocobase/nocobase/pull/7763)) par @heziqiang

  - ajout d'un conseil pour exécuter la requête avant de configurer les options du graphique ([#7685](https://github.com/nocobase/nocobase/pull/7685)) par @heziqiang

  - actualisation des données du graphique lors du clic sur le bouton d'aperçu global ([#7678](https://github.com/nocobase/nocobase/pull/7678)) par @heziqiang

  - Mise à jour du plugin-data-vi 2.0, correction de certains problèmes et optimisation de l'interface utilisateur. ([#7597](https://github.com/nocobase/nocobase/pull/7597)) par @heziqiang

  - Extension des types de graphiques ; Optimisation de l'interface utilisateur et de l'expérience interactive. ([#7581](https://github.com/nocobase/nocobase/pull/7581)) par @heziqiang

- **[Gestionnaire multi-applications (obsolète)]**
  - Activation du démarrage asynchrone des sous-applications à l'aide d'une file d'attente ([#7749](https://github.com/nocobase/nocobase/pull/7749)) par @2013xile

  - amélioration du superviseur d'application ([#7661](https://github.com/nocobase/nocobase/pull/7661)) par @chenos

- **[Gestionnaire de sources de données]** Ajustement de l'ordre des colonnes de type de champ et d'interface, et ajout d'une étape de confirmation lors des modifications. ([#7680](https://github.com/nocobase/nocobase/pull/7680)) par @2013xile

- **[Multi-espace]** utilisation de api.storage pour remplacer localstorage, refonte du contrôle des permissions et correction de bugs par @jiannx

- **[Action : Exporter les enregistrements Pro]** import pro & export pro action support permission control par @katherinehhh

- **[Télémétrie : Prometheus]** Mise à niveau de `@opentelemetry/exporter-prometheus` par @2013xile

- **[Champ de collection : Chiffrement]** Optimisation du plugin de chiffrement de champ pour prendre en charge la récupération de données avec des IV indépendants par @cgyrock

- **[Workflow : Approbation]**
  - Mise à jour de `approval.data` vers la dernière version de l'enregistrement en cours d'approbation à la fin de l'exécution, pour correspondre au mode d'affichage "Dernier" enregistrement par @mytharcher

  - Modification de l'API pour obtenir un seul élément d'approbation et simplification du code par @mytharcher

- **[Gestionnaire de migration]** Amélioration des vérifications de migration, prise en charge du téléchargement SQL, formatage des journaux et visibilité du processus d'exécution par @cgyrock

### 🐛 Corrections de bugs

- **[indéfini]**
  - Correction du problème de style incorrect sur la page d'accueil de la documentation du plugin en mode sombre. ([#7839](https://github.com/nocobase/nocobase/pull/7839)) par @gchust

  - La correspondance du chemin de routage prend en charge plusieurs nouvelles applications ([#7570](https://github.com/nocobase/nocobase/pull/7570)) par @jiannx

  - Correction d'un problème où la citation d'un bloc supprimait le bloc cité de la page d'origine. ([#7969](https://github.com/nocobase/nocobase/pull/7969)) par @gchust

- **[client]**
  - correction des données incorrectes dans la boîte de dialogue de sous-détail du bloc de détail ([#8318](https://github.com/nocobase/nocobase/pull/8318)) par @katherinehhh

  - Correction d'un problème où une erreur se produisait lors de la fermeture de la popup actuelle après avoir ouvert consécutivement les popups de configuration des règles de liaison et du flux d'événements. ([#8312](https://github.com/nocobase/nocobase/pull/8312)) par @gchust

  - Correction d'un problème où une erreur se produisait lors de la fermeture de la popup actuelle après avoir ouvert consécutivement les popups de configuration des règles de liaison et du flux d'événements. ([#8312](https://github.com/nocobase/nocobase/pull/8312)) par @gchust

  - Correction d'un problème où les modifications apportées à la bascule d'édition rapide dans les blocs de tableau nécessitaient un rafraîchissement de la page pour prendre effet. ([#8311](https://github.com/nocobase/nocobase/pull/8311)) par @gchust

  - Correction d'un problème où les blocs utilisant des paramètres de requête URL comme périmètres de données ne se rafraîchissaient pas correctement lorsque les paramètres de requête changeaient lors du changement de menu. ([#8310](https://github.com/nocobase/nocobase/pull/8310)) par @gchust

  - correction des problèmes de permissions dans le composant de champ d'association ([#8243](https://github.com/nocobase/nocobase/pull/8243)) par @katherinehhh

  - correction du problème de non-mise à jour des données de sous-détail lors de la pagination du bloc de détail ([#8305](https://github.com/nocobase/nocobase/pull/8305)) par @katherinehhh

  - correction du problème de non-mise à jour du contenu du sous-tableau imbriqué lors du changement de page dans le formulaire d'édition ([#8304](https://github.com/nocobase/nocobase/pull/8304)) par @katherinehhh

  - Correction d'un problème où la popup ne pouvait pas être ouverte et amélioration de la stabilité de la navigation ([#8287](https://github.com/nocobase/nocobase/pull/8287)) par @zhangzhonghe

  - Correction d'une erreur lors du passage du composant Select au composant Array Subform ([#8301](https://github.com/nocobase/nocobase/pull/8301)) par @katherinehhh

  - Interdiction d'ajouter des champs d'association au bloc de formulaire via JS Field. ([#8296](https://github.com/nocobase/nocobase/pull/8296)) par @gchust

  - Correction d'un problème où les données se rafraîchissaient plusieurs fois après l'action de mise à jour de l'enregistrement. ([#8299](https://github.com/nocobase/nocobase/pull/8299)) par @gchust

  - Correction d'un problème où les nouvelles données ajoutées dans le sous-formulaire étaient écrasées par les données sélectionnées ([#8292](https://github.com/nocobase/nocobase/pull/8292)) par @katherinehhh

  - Correction d'un problème où l'élément JS ne se rafraîchissait pas après l'édition d'un enregistrement dans le bloc de détails. ([#8291](https://github.com/nocobase/nocobase/pull/8291)) par @gchust

  - Correction d'un problème où les enregistrements nouvellement ajoutés ne se rafraîchissaient pas dans la popup du composant de champ sélecteur de données. ([#8289](https://github.com/nocobase/nocobase/pull/8289)) par @gchust

  - Correction de l'erreur de rendu pour le bloc JS en état masqué. ([#8286](https://github.com/nocobase/nocobase/pull/8286)) par @gchust

  - Correction du problème d'erreur levée dans les paramètres du bloc de formulaire de filtre du champ m2m ([#8282](https://github.com/nocobase/nocobase/pull/8282)) par @mytharcher

  - Correction du problème d'erreur levée dans les paramètres du bloc de formulaire de filtre du champ m2m ([#8282](https://github.com/nocobase/nocobase/pull/8282)) par @mytharcher

  - correction pour empêcher les erreurs de bloc après la suppression d'un champ d'association ([#8273](https://github.com/nocobase/nocobase/pull/8273)) par @katherinehhh

  - Correction du problème où les valeurs par défaut du formulaire de filtre ne déclenchaient pas le filtre lors du rendu initial ([#8232](https://github.com/nocobase/nocobase/pull/8232)) par @zhangzhonghe

  - Correction du débordement de pile causé par une boucle infinie dans le chargement différé des champs d'association d'affichage ([#8262](https://github.com/nocobase/nocobase/pull/8262)) par @zhangzhonghe

  - Gestion des règles de liaison vides pour éviter les erreurs ([#8239](https://github.com/nocobase/nocobase/pull/8239)) par @zhangzhonghe

  - Correction du problème où la colonne d'opération du bloc de tableau ne pouvait pas être supprimée. ([#8230](https://github.com/nocobase/nocobase/pull/8230)) par @gchust

  - Correction du problème où l'exécution de la prévisualisation écrivait la sortie JSX compilée dans stepParams, ce qui entraînait la réécriture du code source enregistré. ([#8171](https://github.com/nocobase/nocobase/pull/8171)) par @gchust

  - Correction de l'erreur de téléchargement de pièce jointe S3 Pro et amélioration de l'aperçu des fichiers ([#8211](https://github.com/nocobase/nocobase/pull/8211)) par @katherinehhh

  - Empêcher le débordement de la largeur totale de la ligne lors du redimensionnement des colonnes ([#8166](https://github.com/nocobase/nocobase/pull/8166)) par @zhangzhonghe

  - Correction d'un problème où la sélection de "Non" pour un filtre de case à cocher appliquait toujours le filtre "Oui". ([#8170](https://github.com/nocobase/nocobase/pull/8170)) par @gchust

  - correction du bouton de soumission non affiché dans le formulaire de création lorsque le rôle a la permission de créer ([#8190](https://github.com/nocobase/nocobase/pull/8190)) par @katherinehhh

  - empêcher l'effacement des données existantes du sous-tableau/sous-formulaire lors de la soumission sans sélectionner d'éléments ([#8172](https://github.com/nocobase/nocobase/pull/8172)) par @katherinehhh

  - empêcher l'apparition du paramètre de périmètre de données dans la configuration du formulaire de création ([#8176](https://github.com/nocobase/nocobase/pull/8176)) par @katherinehhh

  - Correction du problème de rendu du champ tableoid dans le bloc de formulaire ([#8177](https://github.com/nocobase/nocobase/pull/8177)) par @katherinehhh

  - Échec de l'enregistrement du flux d'événements d'onglet ([#8168](https://github.com/nocobase/nocobase/pull/8168)) par @chenos

  - suppression de l'espace supplémentaire après le masquage de l'onglet ([#8167](https://github.com/nocobase/nocobase/pull/8167)) par @chenos

  - correction du filtrage incorrect des options sélectionnées dans le select d'enregistrement d'association ([#8151](https://github.com/nocobase/nocobase/pull/8151)) par @katherinehhh

  - correction du menu déroulant du champ d'association désactivé lorsqu'un champ d'options existe ([#8153](https://github.com/nocobase/nocobase/pull/8153)) par @katherinehhh

  - Correction d'un problème où le changement de champs d'étiquette entraînait la perte des configurations de popup. ([#8136](https://github.com/nocobase/nocobase/pull/8136)) par @gchust

  - Correction d'un problème où la saisie de texte chinois effaçait les options existantes lors de l'utilisation d'opérateurs multi-sélection sur un champ à sélection unique dans le bloc de formulaire de filtre. ([#8140](https://github.com/nocobase/nocobase/pull/8140)) par @gchust

  - Correction du problème où le composant `RemoteSelect` chargeait incorrectement l'enregistrement lorsque la valeur est nulle ([#8137](https://github.com/nocobase/nocobase/pull/8137)) par @mytharcher

  - correction pour empêcher l'état désactivé de l'enfant de bloquer la sélection du champ de relation ([#8131](https://github.com/nocobase/nocobase/pull/8131)) par @katherinehhh

  - Correction d'un problème où les étiquettes de champ par défaut dans le bloc de formulaire de filtre ne pouvaient pas être correctement traduites dans plusieurs langues. ([#8135](https://github.com/nocobase/nocobase/pull/8135)) par @gchust

  - Correction d'un problème où la largeur du composant d'interface utilisateur était incohérente lors de la sélection de "Passé" ou "Futur" pour les champs de filtre de date. ([#8130](https://github.com/nocobase/nocobase/pull/8130)) par @gchust

  - Correction d'un problème où les styles de titre et de description du bloc JS étaient incohérents avec les autres blocs. ([#8115](https://github.com/nocobase/nocobase/pull/8115)) par @gchust

  - correction du problème de saut de ligne dans l'infobulle du champ de texte long ([#8122](https://github.com/nocobase/nocobase/pull/8122)) par @katherinehhh

  - Correction d'un problème où les options sélectionnables n'étaient pas entièrement listées lors de l'utilisation des opérateurs "est l'un de" ou "n'est aucun de" pour le filtrage de champ basé sur des options. ([#8118](https://github.com/nocobase/nocobase/pull/8118)) par @gchust

  - correction du sous-tableau imbriqué dans le sous-formulaire n'affichant pas les données ([#8117](https://github.com/nocobase/nocobase/pull/8117)) par @katherinehhh

  - Correction d'un problème où l'effacement des valeurs de filtre de temps entre et le déclenchement à nouveau du filtre provoquait une erreur. ([#8110](https://github.com/nocobase/nocobase/pull/8110)) par @gchust

  - Correction d'un problème où les données sélectionnables pour les champs d'association dans le bloc de formulaire de filtre étaient incorrectes. ([#8109](https://github.com/nocobase/nocobase/pull/8109)) par @gchust

  - Correction d'un problème où les configurations de champs personnalisés dans le formulaire de filtre n'étaient pas correctement pré-remplies et certains paramètres ne prenaient pas effet. ([#8106](https://github.com/nocobase/nocobase/pull/8106)) par @gchust

  - Correction d'un problème où le filtrage sur les champs de case à cocher ne prenait pas effet. ([#8103](https://github.com/nocobase/nocobase/pull/8103)) par @gchust

  - Correction d'un problème où la valeur du champ numérique n'était pas correctement pré-remplie dans l'action de filtre. ([#8104](https://github.com/nocobase/nocobase/pull/8104)) par @gchust

  - Correction d'un problème où certains opérateurs de champ dans les formulaires de filtre ne parvenaient pas à filtrer les données correctement. ([#8100](https://github.com/nocobase/nocobase/pull/8100)) par @gchust

  - Correction d'un problème où les champs configurés d'un bloc supprimé n'étaient pas supprimés du bloc de filtre. ([#8098](https://github.com/nocobase/nocobase/pull/8098)) par @gchust

  - correction de l'espace supplémentaire lorsque le bouton est masqué en mode non-configuration ([#8092](https://github.com/nocobase/nocobase/pull/8092)) par @katherinehhh

  - Correction d'un problème où le texte du bouton de réinitialisation dans le bloc de formulaire de filtre ne pouvait pas être modifié. ([#8089](https://github.com/nocobase/nocobase/pull/8089)) par @gchust

  - Correction d'un problème où la saisie de champ ne prenait pas en charge plusieurs valeurs lors de l'utilisation des opérateurs $in ou $notIn pour le filtrage des champs. ([#8081](https://github.com/nocobase/nocobase/pull/8081)) par @gchust

  - Correction d'un problème où les blocs de données nouvellement ajoutés n'apparaissaient pas automatiquement dans le menu des champs du bloc de formulaire de filtre. ([#8085](https://github.com/nocobase/nocobase/pull/8085)) par @gchust

  - Le menu de configuration des champs d'association dans les formulaires de filtre ne doit pas afficher l'option de création rapide. ([#8083](https://github.com/nocobase/nocobase/pull/8083)) par @gchust

  - correction du problème de données du sous-tableau d'association dans le bloc Liste ([#8082](https://github.com/nocobase/nocobase/pull/8082)) par @katherinehhh

  - correction des règles de validation des champs numériques des paramètres de collection non appliquées ([#8025](https://github.com/nocobase/nocobase/pull/8025)) par @katherinehhh

  - Correction d'un problème où les champs dans les formulaires de filtre étaient restreints par les règles de validation backend pour les champs. ([#8074](https://github.com/nocobase/nocobase/pull/8074)) par @gchust

  - correction du problème d'affichage des grands champs dans l'édition du sous-tableau ([#8069](https://github.com/nocobase/nocobase/pull/8069)) par @katherinehhh

  - correction de la création rapide qui génère une erreur lorsque allowMultiple est désactivé dans le select d'enregistrement d'association ([#8034](https://github.com/nocobase/nocobase/pull/8034)) par @katherinehhh

  - problème d'édition rapide du champ json ([#8059](https://github.com/nocobase/nocobase/pull/8059)) par @katherinehhh

  - correction du champ json qui doit être soumis en tant qu'objet ([#8057](https://github.com/nocobase/nocobase/pull/8057)) par @katherinehhh

  - Correction d'un problème où la touche Entrée ne pouvait pas être utilisée pour déclencher l'action de filtre. ([#8056](https://github.com/nocobase/nocobase/pull/8056)) par @gchust

  - Correction du problème où N/A s'affiche après la désactivation de allowMultiple dans le select d'enregistrement d'association plusieurs-à-plusieurs ([#8050](https://github.com/nocobase/nocobase/pull/8050)) par @katherinehhh

  - Correction de l'échec de la suppression d'un enregistrement dans le bloc de sélection d'enregistrement ([#8023](https://github.com/nocobase/nocobase/pull/8023)) par @katherinehhh

  - Correction d'un problème où le menu d'enregistrement actuel apparaissait lors de l'ajout d'un bloc de commentaire. ([#8039](https://github.com/nocobase/nocobase/pull/8039)) par @gchust

  - Correction d'un problème où le passage d'un champ de date à un champ d'heure dans l'action de filtre provoquait une erreur de rendu. ([#8036](https://github.com/nocobase/nocobase/pull/8036)) par @gchust

  - Correction d'un problème où les titres par défaut des popups d'action d'édition et de création étaient incorrects. ([#8033](https://github.com/nocobase/nocobase/pull/8033)) par @gchust

  - Correction d'un problème où le style par défaut du champ JS dans le bloc de détail était incorrect. ([#8031](https://github.com/nocobase/nocobase/pull/8031)) par @gchust

  - correction de la largeur de colonne du sous-tableau non appliquée ([#8027](https://github.com/nocobase/nocobase/pull/8027)) par @katherinehhh

  - correction du glissement de colonne du sous-tableau ne fonctionnant pas ([#8026](https://github.com/nocobase/nocobase/pull/8026)) par @katherinehhh

  - Correction d'un problème où la variable d'enregistrement de la popup actuelle ne pouvait pas être correctement résolue dans une popup ouverte par un champ d'association. ([#8019](https://github.com/nocobase/nocobase/pull/8019)) par @gchust

  - correction du problème de style de l'infobulle du champ d'affichage markdown ([#8012](https://github.com/nocobase/nocobase/pull/8012)) par @katherinehhh

  - Résolution d'un problème provoquant des erreurs lors du chargement des données pour les champs d'association dans les fenêtres popup, garantissant un affichage et un fonctionnement plus fluides des données. ([#7985](https://github.com/nocobase/nocobase/pull/7985)) par @gchust

  - correction du bloc de tableau arborescent ne pouvant pas développer les nœuds enfants ([#8011](https://github.com/nocobase/nocobase/pull/8011)) par @katherinehhh

  - Correction des problèmes de sélection et de suppression de blocs de tableau pour les clés composites ([#7978](https://github.com/nocobase/nocobase/pull/7978)) par @katherinehhh

  - Correction du problème où l'état de l'onglet de page et la route ne correspondent pas ([#7991](https://github.com/nocobase/nocobase/pull/7991)) par @zhangzhonghe

  - correction du problème d'affichage lorsque le champ markdown est tronqué avec des points de suspension en mode HTML ([#7994](https://github.com/nocobase/nocobase/pull/7994)) par @katherinehhh

  - correction des résultats de recherche incomplets dans le sélecteur en cascade ([#7990](https://github.com/nocobase/nocobase/pull/7990)) par @katherinehhh

  - Correction d'un problème où l'ouverture du bloc de détail dans la popup pour les champs de relation non-ID provoquait une erreur. ([#7973](https://github.com/nocobase/nocobase/pull/7973)) par @gchust

  - Correction d'un problème où les données d'association ne se chargeaient pas correctement dans la popup pour les champs de relation non-ID. ([#7970](https://github.com/nocobase/nocobase/pull/7970)) par @gchust

  - correction du problème de paramètre de précision invalide pour le format de champ numérique ([#7967](https://github.com/nocobase/nocobase/pull/7967)) par @katherinehhh

  - correction du problème où la valeur du filtre n'est pas effacée lors du clic sur le bouton Réinitialiser ([#7966](https://github.com/nocobase/nocobase/pull/7966)) par @zhangzhonghe

  - Correction de la frappe incorrecte dans la nouvelle page 2.0 ([#7945](https://github.com/nocobase/nocobase/pull/7945)) par @zhangzhonghe

  - correction du retour à la ligne automatique des champs de texte dans le bloc de détail lorsque le contenu dépasse la largeur ([#7955](https://github.com/nocobase/nocobase/pull/7955)) par @katherinehhh

  - correction de l'erreur levée lors de l'effacement de la valeur dans une cascade à plusieurs niveaux ([#7943](https://github.com/nocobase/nocobase/pull/7943)) par @katherinehhh

  - suppression de l'action de tableau arborescent du bloc de collection non arborescente ([#7931](https://github.com/nocobase/nocobase/pull/7931)) par @katherinehhh

  - Correction d'un problème où le titre et la description n'étaient pas affichés dans le bloc JS. ([#7913](https://github.com/nocobase/nocobase/pull/7913)) par @gchust

  - Correction du problème où les blocs masqués occupaient toujours de l'espace sur la page. ([#7906](https://github.com/nocobase/nocobase/pull/7906)) par @gchust

  - Correction du problème où le bouton de réinitialisation dans le bouton de filtre efface les conditions par défaut ([#7903](https://github.com/nocobase/nocobase/pull/7903)) par @zhangzhonghe

  - correction de la vérification de permission incorrecte pour les champs de sous-formulaire dans les nouveaux formulaires ([#7902](https://github.com/nocobase/nocobase/pull/7902)) par @katherinehhh

  - correction des problèmes dans le paramétrage des éléments de formulaire ([#7867](https://github.com/nocobase/nocobase/pull/7867)) par @katherinehhh

  - Correction du problème où le champ de texte enrichi ne peut pas saisir de valeur par défaut et le champ de sélection multiple ne peut pas sélectionner plusieurs options par défaut. ([#7864](https://github.com/nocobase/nocobase/pull/7864)) par @gchust

  - Correction du problème où la configuration par défaut du champ JS n'utilisait pas le paramètre de mode d'affichage. ([#7862](https://github.com/nocobase/nocobase/pull/7862)) par @gchust

  - Correction du problème concernant l'impossibilité de définir la valeur par défaut du champ de date dans le modèle de bloc de formulaire de filtre. ([#7853](https://github.com/nocobase/nocobase/pull/7853)) par @gchust

  - Correction du problème où les opérations d'édition rapide dans le bloc de tableau ne mettent pas à jour les données correctement. ([#7845](https://github.com/nocobase/nocobase/pull/7845)) par @gchust

  - Correction des erreurs lors de l'aperçu du code dans l'éditeur de code si le code contient une syntaxe jsx ([#7836](https://github.com/nocobase/nocobase/pull/7836)) par @gchust

  - Correction d'un problème où les règles de liaison pour les boutons d'action de ligne dans un bloc de tableau n'étaient pas réexécutées après la mise à jour des données de ligne, garantissant que les règles sont désormais correctement réappliquées lorsque des changements se produisent. ([#7832](https://github.com/nocobase/nocobase/pull/7832)) par @gchust

  - Correction de l'erreur 'value.replace is not a function' dans le champ de relation du formulaire de filtre ([#7824](https://github.com/nocobase/nocobase/pull/7824)) par @zhangzhonghe

  - la variable de collection actuelle ne doit pas être sélectionnable dans le sélecteur de variable du composant de filtre ([#7818](https://github.com/nocobase/nocobase/pull/7818)) par @gchust

  - Correction des paramètres incorrects dans le callback onChange ([#7807](https://github.com/nocobase/nocobase/pull/7807)) par @zhangzhonghe

  - impossibilité de masquer la colonne d'actions du bloc de tableau ([#7804](https://github.com/nocobase/nocobase/pull/7804)) par @gchust

  - Correction du champ sélecteur de collection incapable de sélectionner correctement la collection ([#7794](https://github.com/nocobase/nocobase/pull/7794)) par @katherinehhh

  - prise en charge de la sélection de l'objet variable entier dans l'invite de l'employé IA ([#7791](https://github.com/nocobase/nocobase/pull/7791)) par @gchust

  - correction de la largeur de l'action de tableau et de jsColumn non appliquée ([#7777](https://github.com/nocobase/nocobase/pull/7777)) par @katherinehhh

  - le périmètre de données du bloc ne fonctionne pas s'il est défini par le flux d'événements de la page ([#7788](https://github.com/nocobase/nocobase/pull/7788)) par @gchust

  - correction des points de suspension du champ de titre d'association non appliqués ([#7778](https://github.com/nocobase/nocobase/pull/7778)) par @katherinehhh

  - la règle de liaison de l'action de mise à jour d'enregistrement ne fonctionne pas ([#7774](https://github.com/nocobase/nocobase/pull/7774)) par @gchust

  - Correction de l'échec de validation obligatoire pour le champ Markdown Vditor ([#7764](https://github.com/nocobase/nocobase/pull/7764)) par @katherinehhh

  - Correction d'un problème où les étiquettes des types enum dans les composants liés aux variables n'étaient pas affichées dans la langue correcte. ([#7765](https://github.com/nocobase/nocobase/pull/7765)) par @gchust

  - Correction de l'indicateur de champ obligatoire manquant après la définition de la validation frontend ([#7760](https://github.com/nocobase/nocobase/pull/7760)) par @katherinehhh

  - Ajout de la configuration du périmètre de données pour les champs de relation dans les formulaires de filtre ([#7761](https://github.com/nocobase/nocobase/pull/7761)) par @zhangzhonghe

  - correction du problème d'effacement de la date sans fuseau horaire dans le formulaire d'édition ([#7759](https://github.com/nocobase/nocobase/pull/7759)) par @katherinehhh

  - Correction de la validation de champ obligatoire pour les règles de liaison ([#7756](https://github.com/nocobase/nocobase/pull/7756)) par @zhangzhonghe

  - correction du problème de format d'heure dans les champs de sous-tableau ([#7750](https://github.com/nocobase/nocobase/pull/7750)) par @katherinehhh

  - résolution du problème de Date invalide lors de la suppression d'une date spécifiée dans le filtre... ([#7746](https://github.com/nocobase/nocobase/pull/7746)) par @katherinehhh

  - impossibilité de charger les champs de la variable de formulaire actuelle ([#7745](https://github.com/nocobase/nocobase/pull/7745)) par @gchust

  - Résolution d'un problème où l'affectation d'un tableau comme valeur ou valeur par défaut à un champ "toOne" entraînait une erreur. Cela garantit une gestion appropriée des résultats de résolution de variables, améliorant la stabilité et la précision du système. ([#7735](https://github.com/nocobase/nocobase/pull/7735)) par @gchust

  - Résolution d'un problème où la variable de champ d'association dans le formulaire actuel ne pouvait pas être correctement identifiée, garantissant un traitement précis des données dans les formulaires. ([#7726](https://github.com/nocobase/nocobase/pull/7726)) par @gchust

  - Correction d'un problème où les champs non filtrables étaient incorrectement listés dans les options de filtre, garantissant que seuls les champs applicables apparaissent pour la sélection. ([#7700](https://github.com/nocobase/nocobase/pull/7700)) par @gchust

  - résolution du problème d'interface utilisateur lors de la suppression d'un champ d'association dans une collection ([#7706](https://github.com/nocobase/nocobase/pull/7706)) par @katherinehhh

  - Correction des problèmes connus avec les règles de liaison de sous-formulaire ([#7698](https://github.com/nocobase/nocobase/pull/7698)) par @zhangzhonghe

  - le menu des champs du bloc js ne peut pas être chargé dans le bloc de formulaire de filtre ([#7690](https://github.com/nocobase/nocobase/pull/7690)) par @gchust

  - Résolution d'un problème où les utilisateurs ne pouvaient pas définir de valeurs par défaut pour les champs affichés en mode lecture seule. Cela garantit une configuration de champ plus fluide lorsque les champs ne sont pas modifiables. ([#7689](https://github.com/nocobase/nocobase/pull/7689)) par @gchust

  - Correction d'un problème où l'URL ne se mettait pas à jour correctement après avoir changé d'onglet dans une popup, rouvert une popup imbriquée, puis fermé toutes les popups. ([#7630](https://github.com/nocobase/nocobase/pull/7630)) par @gchust

  - gestion du contexte manquant dans usePlugin ([#7627](https://github.com/nocobase/nocobase/pull/7627)) par @chenos

  - Correction des problèmes d'affichage anormaux de la page lors du changement de pagination du tableau ([#7572](https://github.com/nocobase/nocobase/pull/7572)) par @zhangzhonghe

  - Impossible de configurer la valeur de champ assignée pour les actions `Mettre à jour` et `Mise à jour groupée` ([#7565](https://github.com/nocobase/nocobase/pull/7565)) par @gchust

  - Correction du problème de non-rafraîchissement des données après la soumission du formulaire ([#7560](https://github.com/nocobase/nocobase/pull/7560)) par @zhangzhonghe

  - Correction d'un problème où l'action "Exécuter" dans l'éditeur de code ne fonctionnait pas, permettant désormais aux utilisateurs d'exécuter le code correctement. ([#7547](https://github.com/nocobase/nocobase/pull/7547)) par @gchust

- **[moteur de flux]**
  - Correction du problème où la liste déroulante du sélecteur de champs de collection dans l'action de filtre avait une hauteur insuffisante. ([#8288](https://github.com/nocobase/nocobase/pull/8288)) par @gchust

  - Correction du contenu de l'onglet popup non affiché ([#8281](https://github.com/nocobase/nocobase/pull/8281)) par @zhangzhonghe

  - Correction du problème de démontage et de re-rendu de la page lors de l'ouverture d'une sous-page ([#8276](https://github.com/nocobase/nocobase/pull/8276)) par @zhangzhonghe

  - correction du problème de vérification des permissions pour l'ajout d'enregistrements enfants dans un tableau arborescent ([#8240](https://github.com/nocobase/nocobase/pull/8240)) par @katherinehhh

  - Correction d'un problème où certaines variables liées aux enregistrements de popup de bloc étaient affichées incorrectement. ([#8060](https://github.com/nocobase/nocobase/pull/8060)) par @gchust

  - Correction du problème où les actions ou onglets ajoutés après le glissement d'actions ou d'onglets ne s'affichent pas. ([#8224](https://github.com/nocobase/nocobase/pull/8224)) par @gchust

  - problème de vérification des permissions dans les sources de données externes ([#8221](https://github.com/nocobase/nocobase/pull/8221)) par @katherinehhh

  - correction des actions de source de données externes masquées malgré la permission ([#8217](https://github.com/nocobase/nocobase/pull/8217)) par @katherinehhh

  - Correction du problème où la soumission du formulaire dans une modale réutilisée via l'uid popup ne rafraîchit pas les données du bloc. ([#8202](https://github.com/nocobase/nocobase/pull/8202)) par @gchust

  - Correction du téléchargement de fichier incorrect pour les pièces jointes ([#8154](https://github.com/nocobase/nocobase/pull/8154)) par @katherinehhh

  - correction : conversion incorrecte lors de l'utilisation du type entier comme options d'énumération ([#8138](https://github.com/nocobase/nocobase/pull/8138)) par @chenos

  - Correction des éléments de menu de sous-modèle activables/désactivables échouant lorsque `useModel` est omis en l'inférant à partir de `createModelOptions.use` ([#8105](https://github.com/nocobase/nocobase/pull/8105)) par @zhangzhonghe

  - Correction d'un problème où les options de configuration du composant précédent restaient visibles dans le menu après avoir changé de composant de champ. ([#8095](https://github.com/nocobase/nocobase/pull/8095)) par @gchust

  - Déplacement de useEffect avant le retour conditionnel dans FlowModelRenderer ([#8088](https://github.com/nocobase/nocobase/pull/8088)) par @zhangzhonghe

  - Correction d'un problème où des champs d'association non pris en charge apparaissaient dans les champs d'opération de filtre. ([#8086](https://github.com/nocobase/nocobase/pull/8086)) par @gchust

  - correction de l'échec de l'enregistrement du commentaire après édition ([#8035](https://github.com/nocobase/nocobase/pull/8035)) par @katherinehhh

  - Correction d'un problème où les blocs de données ne se rafraîchissaient pas lors de la fermeture d'une popup en cliquant sur le bouton de soumission du formulaire à l'intérieur de la popup. ([#8021](https://github.com/nocobase/nocobase/pull/8021)) par @gchust

  - Correction d'un problème où la variable d'enregistrement actuelle ne pouvait pas être correctement déclenchée pour la résolution dans le bloc de détails. ([#8004](https://github.com/nocobase/nocobase/pull/8004)) par @gchust

  - Correction du problème d'affichage désaligné des icônes de la barre d'outils dans le bouton du bloc de détails ([#7929](https://github.com/nocobase/nocobase/pull/7929)) par @zhangzhonghe

  - Correction du problème où l'ouverture du formulaire d'édition rapide du bloc de tableau provoquait une erreur. ([#7923](https://github.com/nocobase/nocobase/pull/7923)) par @gchust

  - Correction du problème où les données de permission ACL ne sont pas rechargées après la déconnexion et la connexion. ([#7874](https://github.com/nocobase/nocobase/pull/7874)) par @gchust

  - Correction du problème où les modifications du flux d'événements ne prenaient effet qu'après avoir rafraîchi la page. ([#7811](https://github.com/nocobase/nocobase/pull/7811)) par @gchust

  - Correction d'un problème où les variables dans les champs d'association de sous-formulaire n'étaient pas correctement résolues lorsque le champ était modifié via l'interface utilisateur. ([#7799](https://github.com/nocobase/nocobase/pull/7799)) par @gchust

  - erreur dans le formulaire d'édition pour les enregistrements à clé primaire multiple ([#7798](https://github.com/nocobase/nocobase/pull/7798)) par @gchust

  - Correction d'un problème où certaines configurations pour l'action "Ouvrir la vue" n'étaient pas appliquées, garantissant que l'action fonctionne désormais comme prévu pour toutes les configurations spécifiées. ([#7790](https://github.com/nocobase/nocobase/pull/7790)) par @gchust

  - Correction d'un problème où les boutons d'action dans le bloc de tableau ne se mettaient pas à jour correctement après avoir changé de page, garantissant que leur fonctionnalité correspond aux données de la page actuelle. ([#7779](https://github.com/nocobase/nocobase/pull/7779)) par @gchust

  - lorsque la valeur du filtre de champ est définie sur false, la requête avec le périmètre de données est incorrecte ([#7766](https://github.com/nocobase/nocobase/pull/7766)) par @gchust

  - correction : résolution du problème de paramètre de requête de page après la suppression de données sur la dernière page ([#7755](https://github.com/nocobase/nocobase/pull/7755)) par @katherinehhh

  - impossible de résoudre la valeur du champ d'association de la variable d'objet actuelle du sous-formulaire ([#7751](https://github.com/nocobase/nocobase/pull/7751)) par @gchust

  - les étapes du flux d'événements ne doivent pas être affichées dans les menus de configuration ([#7723](https://github.com/nocobase/nocobase/pull/7723)) par @gchust

  - sélection de contexte incorrecte de l'enregistrement de la popup actuelle lors de l'édition du périmètre de données d'un champ associé dans un formulaire d'édition ([#7675](https://github.com/nocobase/nocobase/pull/7675)) par @gchust

  - Résolution d'un problème où les actions de flux définies par un modèle de flux ne pouvaient pas être configurées, permettant désormais aux utilisateurs de personnaliser les actions de flux comme prévu. ([#7666](https://github.com/nocobase/nocobase/pull/7666)) par @gchust

  - Correction d'une erreur lors de la copie ou du collage d'extraits de code dans l'éditeur de code JS. ([#7641](https://github.com/nocobase/nocobase/pull/7641)) par @gchust

  - Correction du problème de non-prise en compte de la traduction dans les composants antd ([#7621](https://github.com/nocobase/nocobase/pull/7621)) par @zhangzhonghe

  - impossible d'obtenir le contexte de vue actuel dans le bloc de référence ([#7620](https://github.com/nocobase/nocobase/pull/7620)) par @gchust

- **[base de données]**
  - Inclusion de la portée through lors de l'interrogation des relations m2m ([#8277](https://github.com/nocobase/nocobase/pull/8277)) par @2013xile

  - Inclusion de la portée through lors de l'interrogation des relations m2m ([#8277](https://github.com/nocobase/nocobase/pull/8277)) par @2013xile

  - Correction de l'incohérence des requêtes de champ de date entre les sources de données principales et externes ([#8181](https://github.com/nocobase/nocobase/pull/8181)) par @cgyrock

  - `filterByTk` prend désormais en charge les tableaux lors de l'interrogation de collections avec plusieurs clés cibles de filtre ([#7986](https://github.com/nocobase/nocobase/pull/7986)) par @chenos

  - Définition de `search_path` avant d'exécuter des instructions SQL à l'aide de la méthode `runSQL` ([#7611](https://github.com/nocobase/nocobase/pull/7611)) par @2013xile

- **[cli]** license-kit est compatible avec le cas où DB_PASSWORD est vide ([#8220](https://github.com/nocobase/nocobase/pull/8220)) par @jiannx

- **[serveur]**
  - Prise en charge des champs d'ID Snowflake (53 bits) pour les sources de données externes ([#8185](https://github.com/nocobase/nocobase/pull/8185)) par @2013xile

  - Mise à jour de license-kit vers la dernière version ([#8173](https://github.com/nocobase/nocobase/pull/8173)) par @jiannx

  - Préservation de field.targetKey lors de la copie des champs de référence ([#7599](https://github.com/nocobase/nocobase/pull/7599)) par @chenos

  - Erreur de migration de clé primaire ([#7563](https://github.com/nocobase/nocobase/pull/7563)) par @2013xile

- **[acl]**
  - Correction du problème où l'API `acl.can` retourne `null` lorsque le rôle est `root` ([#8150](https://github.com/nocobase/nocobase/pull/8150)) par @mytharcher

  - correction : acl.allow exécuté trop tôt ([#8065](https://github.com/nocobase/nocobase/pull/8065)) par @chenos

- **[utils]**
  - Correction de l'erreur "Invalid filter item type" sur le bouton de filtre ([#7838](https://github.com/nocobase/nocobase/pull/7838)) par @zhangzhonghe

  - Correction de l'erreur 'Unrecognized operation' dans le flux d'événements ([#7835](https://github.com/nocobase/nocobase/pull/7835)) par @zhangzhonghe

- **[Action : Mise à jour groupée]** Correction de l'erreur dans l'action de mise à jour groupée pour les sources de données externes. ([#8320](https://github.com/nocobase/nocobase/pull/8320)) par @gchust

- **[Visualisation de données]**
  - Correction du problème d'affichage des étiquettes des diagrammes circulaires IA, normalisation de l'option pour les diagrammes circulaires basés sur un ensemble de données.<br/> Restriction du champ d'ordre du graphique aux seuls champs sélectionnés. ([#8309](https://github.com/nocobase/nocobase/pull/8309)) par @heziqiang

  - Résolution du problème concernant le mode SQL de sélection de source de données externe ; <br/>Résolution du problème concernant l'état de chargement du bloc de graphique lors de la récupération des données ; <br/> Résolution du problème concernant l'annulation de la configuration du bloc de graphique vide ; ([#8169](https://github.com/nocobase/nocobase/pull/8169)) par @heziqiang

  - Correction du problème où le bloc de graphique ne se mettait pas à jour après l'enregistrement ([#7920](https://github.com/nocobase/nocobase/pull/7920)) par @heziqiang

  - Utilisation du mode débogage de la ressource sql uniquement lors de l'aperçu du graphique ([#7893](https://github.com/nocobase/nocobase/pull/7893)) par @heziqiang

  - utilisation de l'API sql:runById pour récupérer les données de requête lors de l'initialisation ([#7677](https://github.com/nocobase/nocobase/pull/7677)) par @heziqiang

  - correction du problème de requête SQL lors de l'analyse des variables ([#7642](https://github.com/nocobase/nocobase/pull/7642)) par @heziqiang

  - correction du paramètre orders manquant dans la requête de données de graphique ([#7636](https://github.com/nocobase/nocobase/pull/7636)) par @heziqiang

  - Correction du problème où le graphique ne peut pas être affiché en raison du délai d'attente de l'enregistrement de l'événement ([#7608](https://github.com/nocobase/nocobase/pull/7608)) par @heziqiang

- **[Action : Importer des enregistrements]**
  - Vérification de l'espace lors de l'importation de fichiers ([#8285](https://github.com/nocobase/nocobase/pull/8285)) par @jiannx

  - Correction du problème où l'index de ligne dans le message d'erreur est toujours 1 lorsqu'une erreur est levée dans l'action d'importation ([#8244](https://github.com/nocobase/nocobase/pull/8244)) par @mytharcher

  - Attente synchrone de la fin des événements `afterCreate` déclenchés par l'importation. ([#8158](https://github.com/nocobase/nocobase/pull/8158)) par @2013xile

  - résolution du problème d'affichage de la liste des champs dans les champs importables ([#7710](https://github.com/nocobase/nocobase/pull/7710)) par @katherinehhh

- **[Gestionnaire de fichiers]**
  - Correction du problème d'erreur levée lors du téléchargement d'un fichier de plus de 5 Mo vers AWS S3 ([#8275](https://github.com/nocobase/nocobase/pull/8275)) par @mytharcher

  - Correction du problème où l'aperçu d'un fichier `.txt` sur OSS obtenait un jeu de caractères incorrect ([#8161](https://github.com/nocobase/nocobase/pull/8161)) par @mytharcher

  - Correction de l'affichage incorrect des données de sous-détail dans les blocs Liste et Carte en grille ([#8087](https://github.com/nocobase/nocobase/pull/8087)) par @katherinehhh

  - Correction du champ de pièce jointe non affiché correctement dans le sous-tableau readPretty ([#8073](https://github.com/nocobase/nocobase/pull/8073)) par @katherinehhh

  - correction du téléchargement de fichiers vers un stockage spécifié au lieu du stockage par défaut ([#7947](https://github.com/nocobase/nocobase/pull/7947)) par @katherinehhh

  - correction des problèmes de configuration de champ de bloc de tableau ([#7843](https://github.com/nocobase/nocobase/pull/7843)) par @katherinehhh

- **[Gestionnaire de tâches asynchrones]**
  - Correction de la langue de l'annulation de la tâche en arrière-plan ([#8245](https://github.com/nocobase/nocobase/pull/8245)) par @mytharcher

  - Correction de la langue de l'annulation de la tâche en arrière-plan ([#8245](https://github.com/nocobase/nocobase/pull/8245)) par @mytharcher

- **[Workflow]**
  - Correction des événements de base de données devenus invalides après l'actualisation de la source de données externe ([#8207](https://github.com/nocobase/nocobase/pull/8207)) par @cgyrock

  - Correction des événements de base de données devenus invalides après l'actualisation de la source de données externe ([#8207](https://github.com/nocobase/nocobase/pull/8207)) par @cgyrock

  - Correction du problème d'erreur levée lors de la suppression d'une version de workflow qui n'est pas la version actuelle ([#8203](https://github.com/nocobase/nocobase/pull/8203)) par @mytharcher

  - Correction du problème où un seul enregistrement s'affiche dans la liste des enregistrements à exécuter manuellement ([#8187](https://github.com/nocobase/nocobase/pull/8187)) par @mytharcher

  - Correction du problème où l'ajout d'un workflow dans la configuration du bouton de workflow lié provoquait le blocage de l'application après le clic ([#7541](https://github.com/nocobase/nocobase/pull/7541)) par @mytharcher

- **[Modèles d'interface utilisateur]**
  - Correction d'un problème où certaines popups héritées ne pouvaient pas être correctement réutilisées après avoir été converties en modèles. ([#8283](https://github.com/nocobase/nocobase/pull/8283)) par @gchust

  - Correction d'un problème où les modèles de champ ne pouvaient pas appliquer les règles de liaison et la disposition du formulaire. ([#8266](https://github.com/nocobase/nocobase/pull/8266)) par @gchust

  - Correction d'une erreur où l'ouverture d'une popup de champ d'association utilisait incorrectement un modèle de popup de champ non-association. ([#8233](https://github.com/nocobase/nocobase/pull/8233)) par @gchust

- **[Collection : Arborescente]** Mise à jour des chemins après la création en masse de nœuds de collection arborescente ([#8267](https://github.com/nocobase/nocobase/pull/8267)) par @2013xile

- **[Employés IA]**
  - Résolution du problème où le contenu du message du nœud llm n'était pas affiché ([#8257](https://github.com/nocobase/nocobase/pull/8257)) par @heziqiang

  - Résolution du problème de saut de ligne du message IA ([#8096](https://github.com/nocobase/nocobase/pull/8096)) par @heziqiang

  - Résolution du problème où le nom du rôle de la source de données n'était pas compilé ([#8076](https://github.com/nocobase/nocobase/pull/8076)) par @heziqiang

  - Correction d'un problème où certains champs d'enregistrement actuels ne pouvaient pas être affichés dans le composant de sélection de variable. ([#8053](https://github.com/nocobase/nocobase/pull/8053)) par @gchust

  - Correction du problème lors de la génération de la sortie SQL par l'IA ([#7956](https://github.com/nocobase/nocobase/pull/7956)) par @heziqiang

  - Masquage du bouton de chat de l'employé IA sur les pages v1 ([#7829](https://github.com/nocobase/nocobase/pull/7829)) par @cgyrock

  - Optimisation du comportement de recherche web et des indices utilisateur pour Gemini ([#7720](https://github.com/nocobase/nocobase/pull/7720)) par @cgyrock

  - Correction d'un problème où les blocs avec des ressources API associées ne récupéraient pas les données correspondantes lorsqu'ils étaient sélectionnés. ([#7688](https://github.com/nocobase/nocobase/pull/7688)) par @cgyrock

  - correction du problème de disposition de la boîte de chat dans la disposition mobile ([#7591](https://github.com/nocobase/nocobase/pull/7591)) par @cgyrock

  - Correction des erreurs dans l'outil de modélisation de données de l'employé IA lors de l'utilisation de ChatGPT-4o. ([#7566](https://github.com/nocobase/nocobase/pull/7566)) par @cgyrock

  - Correction de l'erreur sur la page de configuration des permissions de l'employé IA ([#7548](https://github.com/nocobase/nocobase/pull/7548)) par @2013xile

- **[Workflow : Nœud manuel]**
  - Correction du problème d'erreur levée lors de l'annulation de l'exécution d'un workflow supprimé ([#8258](https://github.com/nocobase/nocobase/pull/8258)) par @mytharcher

  - Correction du problème où la liste de tâches manuelles utilise une API incorrecte ([#8144](https://github.com/nocobase/nocobase/pull/8144)) par @mytharcher

- **[Champ de collection : Séquence]**
  - Correction d'une erreur lorsque la commande de réparation du champ-séquence rencontre une collection inexistante dans l'environnement actuel. ([#8251](https://github.com/nocobase/nocobase/pull/8251)) par @cgyrock

  - Amélioration de la robustesse du plugin-field-sequence lors du traitement de la commande de réparation ([#8139](https://github.com/nocobase/nocobase/pull/8139)) par @cgyrock

- **[Départements]** Correction d'un problème où la recherche agrégée ne peut pas localiser les utilisateurs ([#8222](https://github.com/nocobase/nocobase/pull/8222)) par @2013xile

- **[Champ de collection : Plusieurs-à-plusieurs (tableau)]** Correction d'un problème où les champs plusieurs-à-plusieurs (tableau) ne peuvent pas être créés lorsque le type de clé cible est un ID Snowflake (53 bits) ([#8226](https://github.com/nocobase/nocobase/pull/8226)) par @2013xile

- **[Paramètres de licence]**
  - Correction de l'affichage anormal du plugin sous licence ([#8214](https://github.com/nocobase/nocobase/pull/8214)) par @jiannx

  - correction de l'exception de construction ts du plugin-license ([#8183](https://github.com/nocobase/nocobase/pull/8183)) par @jiannx

  - optimisation de la licence et ajout d'informations d'invite ([#7993](https://github.com/nocobase/nocobase/pull/7993)) par @jiannx

- **[Champ de collection : Formule]**
  - Correction du problème où les champs BigInt ne peuvent pas être ajoutés aux blocs Détail et Formulaire ([#8201](https://github.com/nocobase/nocobase/pull/8201)) par @katherinehhh

  - Correction d'un problème où les champs de formule dans l'action de filtre et le bloc de formulaire de filtre ne pouvaient pas saisir de valeurs. ([#8102](https://github.com/nocobase/nocobase/pull/8102)) par @gchust

  - Correction d'un problème où les champs de formule ne pouvaient pas être ajoutés au bloc de formulaire de filtre. ([#8071](https://github.com/nocobase/nocobase/pull/8071)) par @gchust

- **[Bloc : Carte]** correction du niveau de zoom de la carte incorrect après le changement de menu ([#8193](https://github.com/nocobase/nocobase/pull/8193)) par @katherinehhh

- **[Notification : Email]** correction de la limitation de connexion de la notification par email ([#8119](https://github.com/nocobase/nocobase/pull/8119)) par @jiannx

- **[Bloc : Panneau d'actions]** optimisation du style dans la disposition Liste du bloc panneau d'actions ([#8084](https://github.com/nocobase/nocobase/pull/8084)) par @katherinehhh

- **[Gestionnaire de sources de données]** Correction des erreurs lors de la mise à jour des mots de passe pour les sources de données externes ([#8024](https://github.com/nocobase/nocobase/pull/8024)) par @cgyrock

- **[Action : Exporter les enregistrements]**
  - correction des champs système manquants dans la liste des champs exportables ([#8002](https://github.com/nocobase/nocobase/pull/8002)) par @katherinehhh

  - résolution du problème d'affichage de la liste des champs exportables dans l'action d'exportation ([#7714](https://github.com/nocobase/nocobase/pull/7714)) par @katherinehhh

- **[Moteur de flux]**
  - Garantir que les variables d'enregistrement retournent toujours des enregistrements complets lorsqu'elles sont utilisées avec leurs champs individuels. ([#7917](https://github.com/nocobase/nocobase/pull/7917)) par @gchust

  - impossibilité de résoudre les variables dans l'action de définition de champs de liaison ([#7684](https://github.com/nocobase/nocobase/pull/7684)) par @gchust

  - Correction de la résolution incorrecte de la variable d'enregistrement de la popup parente. ([#7637](https://github.com/nocobase/nocobase/pull/7637)) par @gchust

- **[Gestionnaire multi-applications (obsolète)]**
  - Après l'arrêt d'une sous-application, publier un message de synchronisation pour informer les autres nœuds d'arrêter la sous-application correspondante ([#7849](https://github.com/nocobase/nocobase/pull/7849)) par @2013xile

  - Collection incorrecte pour la métrique de statut de la sous-application ([#7772](https://github.com/nocobase/nocobase/pull/7772)) par @2013xile

  - Correction de l'impossibilité de désactiver l'ancien gestionnaire multi-applications ([#7633](https://github.com/nocobase/nocobase/pull/7633)) par @jiannx

  - Correction de la validation du port avant la migration des données multi-applications ([#7540](https://github.com/nocobase/nocobase/pull/7540)) par @jiannx

- **[Bloc : GridCard]** correction du problème de duplication de données entre le bloc liste et le bloc carte en grille ([#7773](https://github.com/nocobase/nocobase/pull/7773)) par @katherinehhh

- **[Bloc : modèle (obsolète)]** Correction d'un problème où des requêtes inutiles pour les modèles de bloc étaient déclenchées lors de l'ouverture ou de la fermeture de modales ([#7561](https://github.com/nocobase/nocobase/pull/7561)) par @gchust

- **[Action : Exporter les enregistrements Pro]** correction de l'option d'exportation de pièces jointes "Générer un dossier pour chaque enregistrement" qui ne prenait pas effet par @katherinehhh

- **[Source de données : PostgreSQL externe]** Correction des événements de base de données devenus invalides après l'actualisation de la source de données externe par @cgyrock

- **[Action : Importer des enregistrements Pro]**
  - Correction de la logique de vérification d'unicité qui génère une erreur lorsque la valeur du champ unique est nulle par @mytharcher

  - correction du problème où la modification des options d'importation par le téléchargeur n'a aucun effet par @katherinehhh

  - résolution du problème d'affichage de la liste des champs dans les champs importables par @katherinehhh

- **[Collection : Connexion à des données étrangères (FDW)]**
  - Correction des erreurs de déclenchement lors de la connexion à des tables avec des noms en majuscules par @2013xile

  - Correction du problème où le chargement échoue pour les tables avec des noms en majuscules par @2013xile

- **[Source de données : SQL Server externe]** Correction des problèmes où les options `encrypt` et `trustServerCertificate` ne sont pas disponibles par @2013xile

- **[Multi-espace]**
  - Les appareils mobiles prennent en charge le changement d'espace par @jiannx

  - Correction de la création d'autres champs dans la collection système par @jiannx

  - utilisateurs associés multi-espace par @jiannx

- **[Chiffrement des requêtes HTTP]** Utilisation de crochets pour le format de tableau dans l'analyse qs par @chenos

- **[Commentaires]**
  - Correction de l'échec de la suppression d'un enregistrement dans le bloc de commentaire par @katherinehhh

  - correction du problème lorsque les commentaires cités dans le bloc de commentaire ne s'affichent pas par @katherinehhh

  - Correction de l'affichage d'un avertissement lorsque le bloc de commentaire est utilisé sur une collection non-commentaire par @katherinehhh

- **[Impression de modèle]**
  - correction de l'erreur d'action d'impression de modèle dans le bloc de détail par @katherinehhh

  - correction de l'échec de l'ajout d'un modèle dans l'opération d'impression de modèle d'enregistrement par @katherinehhh

  - Correction de la requête d'impression de modèle ne fonctionnant pas avec les sources de données externes par @katherinehhh

- **[Multi-app]**
  - proxy multi-app prenant en charge le cache par @jiannx

  - la migration multi-app n'émet pas de hooks par @jiannx

- **[plugin-demo-platform]** démo prenant en charge l'arrêt automatique des applications par @jiannx

- **[Source de données : Oracle externe]** Correction des événements de base de données devenus invalides après l'actualisation de la source de données externe par @cgyrock

- **[Workflow : Approbation]**
  - Correction du problème où le statut des enregistrements d'approbation non liés est incorrectement modifié en `UNPROCESSED` par l'action d'approbation par @mytharcher

  - Correction du problème où l'approbation crée une association vers un nouvel enregistrement par @mytharcher

  - Correction de la restauration en double de la même transaction par @mytharcher

  - Correction du problème d'erreur levée lors de l'annulation d'une exécution lorsque son workflow est supprimé par @mytharcher

  - Correction du problème où les données remplies disparaissaient dans le formulaire du destinataire par @mytharcher

  - Correction du problème où l'approbation crée une association plusieurs-à-plusieurs vers de nouveaux enregistrements par @mytharcher

  - Correction de l'erreur levée lors de la création d'un bloc d'informations d'approbation par @mytharcher

- **[Gestionnaire d'emails]**
  - Gestion des données anormales par @jiannx

  - correction des bugs de brouillon par @jiannx

  - non-synchronisation du statut programmé Gmail par @jiannx

  - Erreur de rafraîchissement ShadowHtml par @jiannx

  - autorisation de modification de l'ID parent de l'email par @jiannx

- **[Gestionnaire de migration]**
  - Correction d'un problème où les sauts de ligne dans les données étaient perdus lors de la migration. par @cgyrock

  - Correction de la description de migration manquante et définition de l'heure actuelle comme valeur par défaut par @cgyrock
