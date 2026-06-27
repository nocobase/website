---
title: "NocoBase v2.2.0-beta.6 : Ajout de la prise en charge de la mise en page mobile"
description: "Notes de version de la v2.2.0-beta.6"
---

### 🎉 Nouvelles fonctionnalités

- **[cli]** Prise en charge des scripts de hook d'installation ([#9824](https://github.com/nocobase/nocobase/pull/9824)) par @chenos
- **[Mise en page UI]** Ajout de la prise en charge de la mise en page mobile ([#9641](https://github.com/nocobase/nocobase/pull/9641)) par @zhangzhonghe
- **[Gestionnaire de sauvegarde]** Prise en charge de la sauvegarde et de la restauration pour KingBase en tant que base de données principale ([#9791](https://github.com/nocobase/nocobase/pull/9791)) par @2013xile
- **[Multi-portail]** Ajout du plugin Multi-Portail par @zhangzhonghe
- **[Gestionnaire de migration]** Prise en charge des migrations pour KingBase en tant que base de données principale. par @2013xile

### 🚀 Améliorations

- **[client-v2]**

  - Affichage des règles de validation au niveau des champs en tant que règles héritées en lecture seule dans les paramètres de validation des champs de l'interface utilisateur. ([#9819](https://github.com/nocobase/nocobase/pull/9819)) par @katherinehhh
  - Ajout d'une option de valeur de remplacement pour les paramètres de valeur de champ. ([#9578](https://github.com/nocobase/nocobase/pull/9578)) par @gchust
- **[non défini]** Amélioration de la récupération et de la documentation de la base de connaissances IA. ([#9765](https://github.com/nocobase/nocobase/pull/9765)) par @cgyrock
- **[Moteur de flux]**

  - Ajout du bloc courant au contexte utilisateur par défaut lors de la création d'employés IA à l'aide de l'API Flow Surface. ([#9840](https://github.com/nocobase/nocobase/pull/9840)) par @gchust
  - Ouverture des globaux du navigateur runjs. ([#9841](https://github.com/nocobase/nocobase/pull/9841)) par @gchust
- **[Workflow]** Stabilisation du test des options de mise à jour ([#9773](https://github.com/nocobase/nocobase/pull/9773)) par @mytharcher
- **[Contrôle d'accès]** Alignement des pages de paramètres Utilisateurs et Permissions v2 avec le comportement de v1, y compris les totaux de pagination, le comportement de l'arborescence des départements, les styles sélectionnés et le défilement interne du panneau des permissions. ([#9810](https://github.com/nocobase/nocobase/pull/9810)) par @jiannx
- **[Gestionnaire de sauvegarde]** Les tables dont la `dataCategory` de la collection est marquée comme `'runtime'` sont désormais automatiquement exclues des sauvegardes. ([#9804](https://github.com/nocobase/nocobase/pull/9804)) par @cgyrock
- **[IA : Base de connaissances]** Amélioration de la segmentation des documents de la base de connaissances IA, de la gestion des segments, des tests de correspondance et de la prise en charge des nœuds de workflow de documents. par @cgyrock

### 🐛 Corrections de bugs

- **[client-v2]**

  - Correction du bloc qui ne se rafraîchissait pas après la mise à jour des paramètres des blocs. ([#9843](https://github.com/nocobase/nocobase/pull/9843)) par @gchust
  - Correction des boutons de déclenchement de workflow d'action personnalisée qui envoyaient le contexte JSON personnalisé sous une propriété `values` supplémentaire ou sous forme de chaîne sérialisée. ([#9815](https://github.com/nocobase/nocobase/pull/9815)) par @mytharcher
  - Correction d'un problème où la configuration d'une valeur de champ d'association comme valeur fixe ou valeur par défaut ne prenait pas effet. ([#9820](https://github.com/nocobase/nocobase/pull/9820)) par @gchust
  - Correction d'un problème où les flux d'événements sur les colonnes de sous-tableau s'exécutaient de manière incorrecte. ([#9821](https://github.com/nocobase/nocobase/pull/9821)) par @gchust
  - Suppression de `updateAssociationValues` inattendu des champs d'association ([#9812](https://github.com/nocobase/nocobase/pull/9812)) par @katherinehhh
  - Correction d'un problème où la soumission d'un formulaire affichait un message incorrect lorsqu'un sous-formulaire contenait un sous-tableau. ([#9807](https://github.com/nocobase/nocobase/pull/9807)) par @gchust
- **[ai]**

  - Correction des résolutions de dépendances LangChain incompatibles pour les plugins IA. ([#9831](https://github.com/nocobase/nocobase/pull/9831)) par @cgyrock
  - Verrouillage de `@langchain/openai` aux mises à jour de niveau correctif pour les packages IA. ([#9829](https://github.com/nocobase/nocobase/pull/9829)) par @cgyrock
- **[app]** Ignorer le `currentScript` non pertinent lors de la déduction du chemin public du plugin ([#9839](https://github.com/nocobase/nocobase/pull/9839)) par @chenos
- **[auth]** Les données de mot de passe crypté ne sont plus incluses dans les réponses de statut de connexion ([#9836](https://github.com/nocobase/nocobase/pull/9836)) par @2013xile
- **[Bloc : Gantt]** Correction de l'application ou de l'effacement incorrect des paramètres de modèle de popup de tâche Gantt. ([#9835](https://github.com/nocobase/nocobase/pull/9835)) par @jiannx
- **[Action : Imprimer]** Correction de l'impression du bloc de détail v2 afin que les blocs de détail vides n'impriment plus toute la page. ([#9832](https://github.com/nocobase/nocobase/pull/9832)) par @katherinehhh
- **[Modèles UI]** Correction du contexte par défaut incorrect pour `ctx.openview`. ([#9811](https://github.com/nocobase/nocobase/pull/9811)) par @gchust
- **[Gestionnaire de fichiers]** Correction des erreurs 404 lors du téléchargement de fichiers vers des champs d'URL de pièce jointe dans des sources de données externes ([#9809](https://github.com/nocobase/nocobase/pull/9809)) par @2013xile
- **[Action : Requête personnalisée]** Correction des actions de requête personnalisée V2 affichant une erreur supplémentaire lorsque les paramètres de requête ne sont pas configurés. ([#9802](https://github.com/nocobase/nocobase/pull/9802)) par @katherinehhh
- **[Workflow]** Correction de la récupération du répartiteur de workflow après des erreurs de répartition inattendues. ([#9783](https://github.com/nocobase/nocobase/pull/9783)) par @mytharcher
- **[Employés IA]** Correction des déclencheurs de tâches raccourcies des employés IA afin que les pièces jointes du contexte de travail actuel soient incluses lors de l'exécution d'une tâche à partir du profil raccourci. ([#9808](https://github.com/nocobase/nocobase/pull/9808)) par @cgyrock
- **[Source de données : NocoBase externe]** Proxy des actions de téléchargement et de stockage de fichiers de source de données externe NocoBase par source de données de téléchargement par @2013xile
- **[IA : Base de connaissances]**

  - Correction des résolutions de dépendances LangChain incompatibles pour le plugin de base de connaissances IA. par @cgyrock
  - Correction des échecs peu clairs lors de l'activation du plugin de base de connaissances IA sans le plugin IA disponible. par @cgyrock
- **[Multi-espace]** Correction des requêtes de récupération d'authentification bloquées par des en-têtes multi-espace obsolètes. par @jiannx
- **[Workflow : Sous-flux]** Correction des sous-flux asynchrones afin que les workflows parents puissent reprendre après un redémarrage du worker ou une perte de mappage d'événements en mémoire. par @mytharcher
- **[Workflow : Approbation]** Correction du problème où les approbations associées ne se chargent pas ou ne se rafraîchissent pas correctement par @zhangzhonghe
- **[Superviseur d'application]** Correction d'un plantage lorsque les réponses du proxy WebSocket distant échouent par @2013xile
