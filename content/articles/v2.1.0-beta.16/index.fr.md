---
title: "NocoBase v2.1.0-beta.16 : refonte de la CLI NocoBase"
description: "Notes de version de la v2.1.0-beta.16"
---

### 🎉 Nouvelles fonctionnalités

- **[indéfini]** Ajout d'un workflow CI qui vérifie les dépendances `plugin-*` manquantes et exécute la construction, avec rapport dans les commentaires des PR. ([#9058](https://github.com/nocobase/nocobase/pull/9058)) par @Molunerfinn

- **[cli-v1]** Résolution du chemin de stockage depuis les variables d'environnement ([#9147](https://github.com/nocobase/nocobase/pull/9147)) par @chenos

- **[cli]** Refonte de l'interface CLI de NocoBase ([#9122](https://github.com/nocobase/nocobase/pull/9122)) par @chenos

- **[moteur-de-workflow]** Ajout de `getSubclassesOfAsync` à FlowEngine pour découvrir les classes de modèle enregistrées de manière asynchrone via le nouveau champ `extends` dans `registerModelLoaders`. ([#9065](https://github.com/nocobase/nocobase/pull/9065)) par @Molunerfinn

- **[Workflow]**
  - Ajout d'une API pour vérifier la création de nœuds ([#9207](https://github.com/nocobase/nocobase/pull/9207)) par @mytharcher

  - Ajout d'un champ de log pour les jobs, afin d'afficher le contenu des logs de certains nœuds pour le débogage ([#9165](https://github.com/nocobase/nocobase/pull/9165)) par @mytharcher

- **[Employés IA]**
  - Le workflow a ajouté une instruction pour les employés IA ([#9025](https://github.com/nocobase/nocobase/pull/9025)) par @cgyrock

  - Ajout d'un outil de requête de données et d'un outil de rapport d'analyse métier pour les employés IA ([#9040](https://github.com/nocobase/nocobase/pull/9040)) par @2013xile

  - Ajout de la capacité d'invoquer des sous-agents pour les employés IA ([#8935](https://github.com/nocobase/nocobase/pull/8935)) par @cgyrock

  - Ajout de la capacité SKILLS aux employés IA. ([#8797](https://github.com/nocobase/nocobase/pull/8797)) par @cgyrock

- **[Auth : Clés API]** ajout des commandes `pm list` et `generate-api-key` ([#9076](https://github.com/nocobase/nocobase/pull/9076)) par @chenos

- **[IA : Serveur MCP]**
  - Fournit une API de requête générique pour les collections de données, appelable via MCP ([#8985](https://github.com/nocobase/nocobase/pull/8985)) par @2013xile

  - Ajout d'un nouveau plugin serveur MCP pour permettre la construction de systèmes NocoBase et le support de workflows métier. ([#8824](https://github.com/nocobase/nocobase/pull/8824)) par @2013xile

- **[Gestionnaire de sources de données]** Prise en charge du chargement à la demande des outils MCP ([#8936](https://github.com/nocobase/nocobase/pull/8936)) par @2013xile

- **[IdP : OAuth]** Ajout d'un nouveau plugin IdP : OAuth pour permettre aux services MCP de s'authentifier via OAuth ([#8896](https://github.com/nocobase/nocobase/pull/8896)) par @2013xile

### 🚀 Améliorations

- **[cli]**
  - Ajout du suivi de la source des requêtes CLI dans les logs de requêtes et les logs d'audit ([#9223](https://github.com/nocobase/nocobase/pull/9223)) par @2013xile

  - Amélioration de la sortie d'aide de l'API CLI générée et du regroupement des commandes ACL ([#9166](https://github.com/nocobase/nocobase/pull/9166)) par @2013xile

  - Amélioration du repli de l'aide de `nb api` et unification des messages d'avertissement pour les échecs de démarrage à l'exécution ([#9153](https://github.com/nocobase/nocobase/pull/9153)) par @2013xile

- **[serveur]** Amélioration de la documentation Swagger de l'API du gestionnaire de plugins ([#9080](https://github.com/nocobase/nocobase/pull/9080)) par @2013xile

- **[base de données]** Correction du comportement de génération de rapports d'analyse métier IA et de requêtes de données pour éviter les graphiques mal formés, la gestion incorrecte des dates et le manque de couverture multi-sources de données ([#9078](https://github.com/nocobase/nocobase/pull/9078)) par @2013xile

- **[construction]**
  - Les builds de production du client applicatif s'exécutent désormais sur Rsbuild, et le profilage de construction ainsi que les améliorations de planification des déclarations facilitent l'identification et la réduction des goulots d'étranglement. ([#8963](https://github.com/nocobase/nocobase/pull/8963)) par @Molunerfinn

  - Migration du pipeline de construction client dans `@nocobase/build` de Vite vers Rsbuild. ([#8932](https://github.com/nocobase/nocobase/pull/8932)) par @Molunerfinn

- **[client]** Refonte des paramètres de mise en page de l'administration et de l'application pour modéliser l'architecture hôte avec des garde-fous de compatibilité v1 v2 ([#8710](https://github.com/nocobase/nocobase/pull/8710)) par @zhangzhonghe

- **[moteur-de-workflow]**
  - Amélioration de la validation de schéma pour l'API de construction d'interface utilisateur. ([#8881](https://github.com/nocobase/nocobase/pull/8881)) par @gchust

  - Amélioration de la validation de schéma pour l'API de construction d'interface utilisateur. ([#8881](https://github.com/nocobase/nocobase/pull/8881)) par @gchust

- **[app]** Ajout d'un workflow de développement basé sur Rsbuild pour client-v1 tout en maintenant la compatibilité du développement de plugins locaux et de la topologie actuelle `/v2/` ([#8902](https://github.com/nocobase/nocobase/pull/8902)) par @Molunerfinn

- **[indéfini]** Ajout d'une entrée dédiée client-v2 et construction indépendante avec rsbuild tout en laissant v1 inchangé. ([#8743](https://github.com/nocobase/nocobase/pull/8743)) par @Molunerfinn

- **[Contrôle d'accès]** ajout de quelques nouvelles API pour la compétence ACL ([#9198](https://github.com/nocobase/nocobase/pull/9198)) par @Andrew1989Y

- **[Workflow : Événement d'action personnalisée]** Ajout du contrôle ACL pour le déclenchement en mode enregistrement (simple et multiple) ([#9125](https://github.com/nocobase/nocobase/pull/9125)) par @mytharcher

- **[Moteur de workflow]** Ajout de nouvelles API pour la construction d'interface utilisateur. ([#8992](https://github.com/nocobase/nocobase/pull/8992)) par @gchust

- **[Workflow : Événement pré-action]** Ajout de règles de validation pour les déclencheurs et les nœuds ([#8971](https://github.com/nocobase/nocobase/pull/8971)) par @mytharcher

- **[Workflow]** Ajout de validation pour tous les déclencheurs et nœuds ([#8930](https://github.com/nocobase/nocobase/pull/8930)) par @mytharcher

- **[Workflow : Webhook]** Ajout de validation pour la création d'API de déclencheur / nœud par @mytharcher

- **[Workflow : Sous-workflow]** Ajout de validation pour la création d'API de nœud par @mytharcher

- **[Workflow : Approbation]**
  - Ajout de validation pour la création de nœud d'approbation par @mytharcher

  - Ajout de validation pour l'API de déclencheur / nœud par @mytharcher

### 🐛 Corrections de bugs

- **[client]**
  - Interrupteur de tri masqué pour les champs de relation ([#9220](https://github.com/nocobase/nocobase/pull/9220)) par @jiannx

  - Correction du problème où le titre de la page ne se mettait pas à jour après avoir changé de menu ([#8864](https://github.com/nocobase/nocobase/pull/8864)) par @zhangzhonghe

- **[cli]** Correction des échecs de connexion OAuth CLI sur Windows causés par des URL d'autorisation trop longues ([#9159](https://github.com/nocobase/nocobase/pull/9159)) par @2013xile

- **[test]** Correction des builds de plugins afin que les dépendances serveur avec des noms de package pointillés comme `big.js` soient empaquetées dans `dist/node_modules`. ([#8953](https://github.com/nocobase/nocobase/pull/8953)) par @Molunerfinn

- **[serveur]** Prise en charge de l'obtention de l'application cible par nom d'hôte ([#8978](https://github.com/nocobase/nocobase/pull/8978)) par @2013xile

- **[Workflow : Nœud d'agrégation]** Correction du problème où le nœud d'agrégation ne pouvait pas être sauvegardé en raison d'une règle de validation incorrecte ([#9208](https://github.com/nocobase/nocobase/pull/9208)) par @mytharcher

- **[Employés IA]**
  - Correction des anomalies d'enregistrement des logs dans l'instruction des employés IA ([#9180](https://github.com/nocobase/nocobase/pull/9180)) par @cgyrock

  - Correction du tri des requêtes d'agrégation supprimé par l'ACL ([#9099](https://github.com/nocobase/nocobase/pull/9099)) par @2013xile

  - Correction du problème où les messages d'erreur n'étaient pas affichés dans les conversations des employés IA ([#9097](https://github.com/nocobase/nocobase/pull/9097)) par @cgyrock

  - Correction du problème où les employés IA ne pouvaient pas utiliser les compétences ([#9023](https://github.com/nocobase/nocobase/pull/9023)) par @cgyrock

  - Correction du problème où le LLM tente toujours de charger les compétences après la désactivation de l'outil getSkill ([#9013](https://github.com/nocobase/nocobase/pull/9013)) par @cgyrock

  - Correction des cas de test échouant dans le module IA du package core. ([#8941](https://github.com/nocobase/nocobase/pull/8941)) par @cgyrock

- **[Workflow : JavaScript]** Correction du problème où une erreur était levée lors de la configuration du nœud JavaScript ([#9169](https://github.com/nocobase/nocobase/pull/9169)) par @mytharcher

- **[IdP : OAuth]**
  - Correction des échecs d'enregistrement du client OAuth et de rafraîchissement du jeton après le redémarrage du service ([#9139](https://github.com/nocobase/nocobase/pull/9139)) par @2013xile

  - Correction de l'accès OAuth pour les requêtes API régulières ([#9120](https://github.com/nocobase/nocobase/pull/9120)) par @2013xile

  - Correction de la redirection incorrecte après la connexion MCP OAuth dans les sous-applications ([#9015](https://github.com/nocobase/nocobase/pull/9015)) par @2013xile

- **[Workflow : Nœud de boucle]** Correction des validations des nœuds de workflow ([#9111](https://github.com/nocobase/nocobase/pull/9111)) par @mytharcher

- **[Contrôle d'accès]** mise à jour du swagger ACL pour le serveur MCP ([#9096](https://github.com/nocobase/nocobase/pull/9096)) par @Andrew1989Y

- **[Workflow : Nœud de messagerie]** Correction de la validation pour les champs de variables ([#9047](https://github.com/nocobase/nocobase/pull/9047)) par @mytharcher

- **[Workflow]**
  - Correction de la règle de validation incorrecte de l'instruction conditionnelle ([#9017](https://github.com/nocobase/nocobase/pull/9017)) par @mytharcher

  - Correction du problème où le mode du déclencheur de collection ne pouvait pas être défini sur "créer ou mettre à jour" ([#8980](https://github.com/nocobase/nocobase/pull/8980)) par @mytharcher

- **[Gestionnaire de sources de données]** Optimisation du nommage des outils MCP et réduction des réponses API redondantes pour éviter une consommation excessive du contexte de conversation IA ([#9000](https://github.com/nocobase/nocobase/pull/9000)) par @2013xile

- **[IA : Serveur MCP]**
  - Correction des outils MCP générés à partir de Swagger lorsque les schémas d'entrée incluent des types `null` ou des marqueurs `nullable` qui sont invalides pour la validation des outils OpenAI ([#8994](https://github.com/nocobase/nocobase/pull/8994)) par @2013xile

  - Correction des incohérences d'authentification causées par des en-têtes transférés non liés dans l'outil CRUD générique MCP ([#8983](https://github.com/nocobase/nocobase/pull/8983)) par @2013xile
