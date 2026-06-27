---
title: "NocoBase v2.1.0-beta.45 : Amélioration de l'application gérée et de la gestion des plugins dans la CLI"
description: "Notes de version de la v2.1.0-beta.45"
---

### 🎉 Nouvelles fonctionnalités

- **[indéfini]** Amélioration de la gestion des applications et des plugins managés dans la CLI, incluant la gestion d'environnement basée sur appPath, l'import de plugins, la synchronisation des plugins sous licence, et les mises à jour de documentation associées. ([#9655](https://github.com/nocobase/nocobase/pull/9655)) par @chenos
  Référence : [Documentation CLI](https://github.com/nocobase/nocobase/tree/feat/cli-app-path/docs/docs/en/api/cli), [Démarrage rapide](https://github.com/nocobase/nocobase/tree/feat/cli-app-path/docs/docs/en/quickstart)
- **[Bloc : Gantt]** Ajout d'une option pour que les blocs Gantt se concentrent sur la date du jour par défaut. ([#9692](https://github.com/nocobase/nocobase/pull/9692)) par @jiannx
- **[IdP : OAuth]** Ajout du support de base pour l'authentification unique (SSO) des applications dans les déploiements multi-applications. ([#9547](https://github.com/nocobase/nocobase/pull/9547)) par @2013xile
- **[SSO d'application]** Ajout d'un plugin App SSO pour la connexion automatique entre applications. par @2013xile
- **[Multi-espace]** Ajout du support client v2 pour le plugin multi-espace, incluant la commutation et la gestion des espaces. par @jiannx
- **[Superviseur d'application]** Ajout des paramètres App SSO pour les sous-applications. par @2013xile

### 🚀 Améliorations

- **[serveur]** Le client moderne est désormais servi sous `/v/` au lieu de `/v2/`. ([#9674](https://github.com/nocobase/nocobase/pull/9674)) par @Molunerfinn
- **[ia]** Mise à niveau de la version de `xlsx` pour éviter les problèmes de sécurité. ([#9675](https://github.com/nocobase/nocobase/pull/9675)) par @mytharcher
- **[Filtre multi-mots-clés]** Migration du filtre multi-mots-clés vers le client v2. ([#9691](https://github.com/nocobase/nocobase/pull/9691)) par @gchust
- **[Workflow]** Suppression du couplage transactionnel de l'historique des workflows lors de l'exécution. ([#9668](https://github.com/nocobase/nocobase/pull/9668)) par @mytharcher
- **[Modèles d'interface]** Migration des modèles d'interface vers le client v2. ([#9591](https://github.com/nocobase/nocobase/pull/9591)) par @gchust
- **[Départements]** Ajout d'une page de paramètres v2 pour gérer les départements, les membres des départements et les affectations des utilisateurs aux départements. ([#9660](https://github.com/nocobase/nocobase/pull/9660)) par @jiannx
- **[Auth : SAML 2.0]** Les redirections de connexion SAML/CAS suivent désormais le préfixe du client moderne. par @Molunerfinn
- **[Action : Importer des enregistrements Pro]** Mise à niveau de la version de `xlsx` pour éviter les problèmes de sécurité. par @mytharcher
- **[Workflow : Sous-flux]** Suppression du couplage transactionnel de l'historique des workflows dans les instructions de sous-flux. par @mytharcher
- **[Auth : OIDC]** La redirection de connexion OIDC suit désormais le préfixe du client moderne. par @Molunerfinn
- **[Workflow : Approbation]** Suppression du couplage transactionnel de l'historique des workflows dans les instructions de workflow d'approbation. par @mytharcher

### 🐛 Corrections de bugs

- **[client]**
  - Correction du problème où les champs liés masqués conservaient encore d'anciennes valeurs. ([#9687](https://github.com/nocobase/nocobase/pull/9687)) par @zhangzhonghe
  - Correction de l'erreur lors de l'enregistrement d'un champ de relation arborescente dans un modèle de formulaire référencé. ([#9643](https://github.com/nocobase/nocobase/pull/9643)) par @zhangzhonghe
- **[client-v2]**
  - Correction du problème où les colonnes du tableau v2 devenaient invisibles lorsque la largeur de colonne personnalisée était définie sur 0. ([#9689](https://github.com/nocobase/nocobase/pull/9689)) par @katherinehhh
  - Ajustement de tous les sélecteurs de champs de relation pour limiter les champs d'association à un maximum de deux niveaux. ([#9454](https://github.com/nocobase/nocobase/pull/9454)) par @jiannx
- **[Action : Importer des enregistrements]** Correction du problème où les enregistrements importés recevaient des valeurs de tri en double. ([#9684](https://github.com/nocobase/nocobase/pull/9684)) par @2013xile
- **[Moteur de flux]** Correction d'un problème où la conversion d'un bloc de modèle de référence en copie entraînait une erreur. ([#9693](https://github.com/nocobase/nocobase/pull/9693)) par @gchust
- **[Collection : SQL]** Blocage de l'accès des collections SQL aux métadonnées PostgreSQL sensibles. ([#9683](https://github.com/nocobase/nocobase/pull/9683)) par @2013xile
- **[Workflow]** Correction de l'envoi en double de l'exécution du workflow sous des workers concurrents. ([#9673](https://github.com/nocobase/nocobase/pull/9673)) par @mytharcher
- **[Bloc : Carte]** Correction d'un problème où les valeurs des champs cartographiques étaient incorrectement converties lors du basculement entre les modes d'affichage texte et carte sur les pages de détail. ([#9653](https://github.com/nocobase/nocobase/pull/9653)) par @hongboji
- **[Workflow : Événement d'action personnalisée]** Correction de l'absence de l'action de déclenchement de workflow dans la liste des boutons du panneau d'actions du poste de travail. ([#9682](https://github.com/nocobase/nocobase/pull/9682)) par @katherinehhh
- **[Employés IA]**
  - Les nœuds d'employés IA du workflow peuvent désormais utiliser le modèle par défaut. ([#9679](https://github.com/nocobase/nocobase/pull/9679)) par @cgyrock
  - Masquage des erreurs brutes du fournisseur LLM dans les messages frontend. ([#9678](https://github.com/nocobase/nocobase/pull/9678)) par @cgyrock
- **[Gestionnaire de source de données]** Correction de la localisation des champs multi-espaces dans le gestionnaire de source de données v2. ([#9690](https://github.com/nocobase/nocobase/pull/9690)) par @jiannx
- **[Source de données : API REST]** Correction des échecs de construction de la déclaration du plugin de source de données API REST causés par des déclarations de type client-v2 du gestionnaire de source de données incompatibles. par @katherinehhh
- **[Politique de mot de passe]** Correction des échecs de connexion masquant l'erreur réelle avec "argument #1 unsupported type undefined" lorsque l'erreur sous-jacente n'a pas de code de statut. par @Molunerfinn
- **[Workflow : Approbation]** Correction du problème où les titres de champs personnalisés ne s'affichaient pas dans les détails du formulaire d'approbation. par @zhangzhonghe
