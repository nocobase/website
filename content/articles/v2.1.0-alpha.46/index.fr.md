---
title: "NocoBase v2.1.0-alpha.46 : Migration des pages de paramètres Utilisateurs et Rôles & Permissions vers v2"
description: "Notes de version de v2.1.0-alpha.46"
---

### 🎉 Nouvelles fonctionnalités

- **[client-v2]** Ajout de `TypedVariableInput` pour que les champs de port SMTP et de mode sécurisé dans le plugin email v2 puissent accepter soit des constantes typées, soit des variables `{{ $env.X }}`. ([#9637](https://github.com/nocobase/nocobase/pull/9637)) par @Molunerfinn
- **[Contrôle d'accès]** Migration des pages de paramètres Utilisateurs et Rôles & Permissions vers la v2. ([#9619](https://github.com/nocobase/nocobase/pull/9619)) par @jiannx

### 🚀 Améliorations

- **[serveur]** Le client moderne est désormais servi sous `/v/` au lieu de `/v2/`. ([#9674](https://github.com/nocobase/nocobase/pull/9674)) par @Molunerfinn
- **[ia]** Mise à niveau de `xlsx` pour éviter des problèmes de sécurité. ([#9675](https://github.com/nocobase/nocobase/pull/9675)) par @mytharcher
- **[client]** Amélioration de la prise en charge de l'autocomplétion pour certaines fonctions RunJS intégrées. ([#9481](https://github.com/nocobase/nocobase/pull/9481)) par @gchust
- **[cli]** Amélioration des instructions d'initialisation et de mise à jour automatique. ([#9633](https://github.com/nocobase/nocobase/pull/9633)) par @chenos
- **[non défini]** Mise à jour de la documentation Embed NocoBase pour le plugin open-source. ([#9642](https://github.com/nocobase/nocobase/pull/9642)) par @zhangzhonghe
  Référence : [Embed NocoBase](https://docs.nocobase.com/en/integration/embed/)
- **[Départements]** Ajout d'une page de paramètres v2 pour gérer les départements, les membres des départements et les affectations des utilisateurs aux départements. ([#9660](https://github.com/nocobase/nocobase/pull/9660)) par @jiannx
- **[Auth : SAML 2.0]** Les redirections de connexion SAML/CAS suivent désormais le préfixe du client moderne. par @Molunerfinn
- **[Action : Importer des enregistrements Pro]** Mise à niveau de `xlsx` pour éviter des problèmes de sécurité. par @mytharcher
- **[Auth : OIDC]** Les redirections de connexion OIDC suivent désormais le préfixe du client moderne. par @Molunerfinn
- **[Workflow : Approbation]** Ajustement des règles de validation pour les configurations de déclencheur et de nœud d'approbation afin de garantir l'existence des champs liés à l'interface utilisateur. par @mytharcher

### 🐛 Corrections de bugs

- **[client-v2]**

  - Correction du problème où les colonnes du tableau v2 devenaient invisibles lorsque la largeur de colonne personnalisée était définie sur 0. ([#9689](https://github.com/nocobase/nocobase/pull/9689)) par @katherinehhh
  - Ajustement de tous les sélecteurs de champs de relation pour limiter les champs d'association à un maximum de deux niveaux. ([#9454](https://github.com/nocobase/nocobase/pull/9454)) par @jiannx
  - Correction des erreurs de sauvegarde des règles de liaison de menu. ([#9666](https://github.com/nocobase/nocobase/pull/9666)) par @zhangzhonghe
  - Correction de l'espacement excessif au-dessus des blocs sur les pages v2. ([#9647](https://github.com/nocobase/nocobase/pull/9647)) par @zhangzhonghe
  - Préservation des valeurs de champ assignées. ([#9640](https://github.com/nocobase/nocobase/pull/9640)) par @katherinehhh
- **[client]**

  - Correction de l'erreur lors de la sauvegarde d'un champ de relation arborescente dans un modèle de formulaire référencé. ([#9643](https://github.com/nocobase/nocobase/pull/9643)) par @zhangzhonghe
  - Correction du problème où les données du champ de relation sélectionné ne s'affichaient pas sur mobile. ([#9665](https://github.com/nocobase/nocobase/pull/9665)) par @zhangzhonghe
  - Correction du problème où les blocs pouvaient apparaître incorrectement comme supprimés après avoir actualisé la page. ([#9662](https://github.com/nocobase/nocobase/pull/9662)) par @zhangzhonghe
  - Correction du comportement incorrect des règles de liaison d'action d'enregistrement dans les blocs de tableau. ([#9652](https://github.com/nocobase/nocobase/pull/9652)) par @gchust
  - Correction du problème où les champs devenaient en lecture seule lorsqu'ils étaient réaffichés après avoir été masqués par des règles de liaison. ([#9649](https://github.com/nocobase/nocobase/pull/9649)) par @katherinehhh
- **[moteur-de-flux]**

  - Correction du problème où la page se bloquait lors de la définition des valeurs de champ pour un sous-formulaire. ([#9598](https://github.com/nocobase/nocobase/pull/9598)) par @gchust
  - Correction d'un problème où la fenêtre contextuelle affichait des données d'interface utilisateur obsolètes après avoir basculé l'interrupteur du mode de configuration de l'interface utilisateur. ([#9525](https://github.com/nocobase/nocobase/pull/9525)) par @gchust
  - Correction du problème où la recherche de champ était effacée lors du survol des champs d'association. ([#9646](https://github.com/nocobase/nocobase/pull/9646)) par @zhangzhonghe
- **[cli]** Correction du modèle nginx pour servir les ressources `.mjs` avec le type MIME JavaScript. ([#9626](https://github.com/nocobase/nocobase/pull/9626)) par @mytharcher
- **[base de données]** Correction d'un problème où l'importation de valeurs de mot de passe numériques pouvait échouer. ([#9635](https://github.com/nocobase/nocobase/pull/9635)) par @2013xile
- **[Collection : SQL]**

  - Blocage de l'accès des collections SQL aux métadonnées PostgreSQL sensibles. ([#9683](https://github.com/nocobase/nocobase/pull/9683)) par @2013xile
- **[Gestionnaire de sources de données]** Correction de la localisation des champs multi-espaces dans le gestionnaire de sources de données v2. ([#9690](https://github.com/nocobase/nocobase/pull/9690)) par @jiannx
- **[Employés IA]**

  - Masquage des erreurs brutes du fournisseur LLM dans les messages frontaux. ([#9678](https://github.com/nocobase/nocobase/pull/9678)) par @cgyrock
  - Les nœuds d'employés IA du workflow peuvent désormais utiliser le modèle par défaut. ([#9679](https://github.com/nocobase/nocobase/pull/9679)) par @cgyrock
  - Correction de la validation de l'URL de base du fournisseur IA. ([#9667](https://github.com/nocobase/nocobase/pull/9667)) par @cgyrock
  - Correction des erreurs `ctx.get` dans les nœuds de workflow des employés IA. ([#9661](https://github.com/nocobase/nocobase/pull/9661)) par @cgyrock
- **[Action : Dupliquer l'enregistrement]** Correction du problème où l'état du bouton n'était pas réinitialisé lors de l'échec de la soumission de l'enregistrement dupliqué. ([#9676](https://github.com/nocobase/nocobase/pull/9676)) par @katherinehhh
- **[Workflow : Événement d'action personnalisée]** Correction du problème où l'action de déclenchement du workflow était absente de la liste des boutons du panneau d'actions du poste de travail. ([#9682](https://github.com/nocobase/nocobase/pull/9682)) par @katherinehhh
- **[Calendrier]** Correction du problème où les couleurs des événements du calendrier n'étaient pas rendues à partir du champ de couleur configuré dans les pages v2. ([#9677](https://github.com/nocobase/nocobase/pull/9677)) par @jiannx
- **[Notification : Message in-app]** Correction d'un risque d'injection SQL dans le filtre de timestamp du canal de notification in-app. ([#9630](https://github.com/nocobase/nocobase/pull/9630)) par @mytharcher
- **[Moteur de flux]**

  - Correction d'un problème où le glissement des onglets de la fenêtre contextuelle pour les réorganiser ne fonctionnait pas. ([#9602](https://github.com/nocobase/nocobase/pull/9602)) par @gchust
  - Correction d'un problème où la modification d'un bloc après avoir dupliqué son modèle pouvait affecter par inadvertance le contenu du bloc d'origine. ([#9664](https://github.com/nocobase/nocobase/pull/9664)) par @gchust
- **[Paramètres de licence]** Correction du problème où la page des paramètres de licence pouvait se bloquer longtemps lorsque la vérification de connexion pkg était lente ou inaccessible. ([#9650](https://github.com/nocobase/nocobase/pull/9650)) par @hongboji
- **[Contrôle d'accès]** Correction des permissions incomplètes lors de la première connexion lorsqu'un rôle d'union était le rôle par défaut. ([#9632](https://github.com/nocobase/nocobase/pull/9632)) par @2013xile
- **[Bloc : Gantt]** Amélioration du placement des infobulles du Gantt pour éviter de couvrir les barres de tâches et alignement cohérent des étiquettes de tâches à l'intérieur et à l'extérieur des barres. ([#9638](https://github.com/nocobase/nocobase/pull/9638)) par @jiannx
- **[Workflow : JavaScript]** Clarification que le mode de prise en charge des modules JavaScript du workflow n'est pas sûr et ne constitue pas une limite de permission. ([#9629](https://github.com/nocobase/nocobase/pull/9629)) par @mytharcher
  Référence : [Workflow JavaScript](docs/docs/en/workflow/nodes/javascript.md)
- **[Gestionnaire de fichiers]** Correction de la validation du chemin de stockage des fichiers locaux pour empêcher les chemins non sécurisés de s'échapper de la racine de stockage configurée. ([#9628](https://github.com/nocobase/nocobase/pull/9628)) par @mytharcher
- **[Politique de mot de passe]**

  - Correction des échecs de connexion masquant l'erreur réelle avec "argument #1 unsupported type undefined" lorsque l'erreur sous-jacente n'avait pas de code de statut. par @Molunerfinn
  - Correction d'un problème où la validation de la politique de mot de passe pouvait échouer pour les valeurs de mot de passe numériques. par @2013xile
- **[Source de données : API REST]** Correction des échecs de construction de la déclaration du plugin de source de données API REST causés par des déclarations de type client-v2 du gestionnaire de sources de données incompatibles. par @katherinehhh
