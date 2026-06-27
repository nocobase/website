---
title: "Mises à jour hebdomadaires｜Ajout de gardes de compatibilité pour les commandes API dynamiques"
description: "Ceci est un résumé des mises à jour et améliorations des fonctionnalités de NocoBase du 28 mai au 04 juin 2026."
---

Résumez les journaux de mise à jour hebdomadaires du produit. Les dernières versions sont disponibles sur [notre blog](https://www.nocobase.com/en/blog/timeline).

**NocoBase est actuellement mis à jour avec trois branches : `main`, `next` et `develop`.**

![version.png](https://static-docs.nocobase.com/ba5f04e27e99c625cb3822da5df07860.png)

* `main` : La version la plus stable à ce jour, recommandée pour l'installation ;
* `next` : Version bêta, contient les nouvelles fonctionnalités à venir et a été testée préliminairement. Il peut y avoir des problèmes connus ou inconnus. Elle est principalement destinée aux utilisateurs testeurs pour recueillir des retours et optimiser davantage les fonctions. Idéale pour les utilisateurs testeurs qui souhaitent découvrir les nouvelles fonctionnalités en avant-première et donner leur avis ;
* `develop` : Version alpha, contient le code de fonctionnalité le plus récent, peut être incomplète ou instable, principalement destinée au développement interne et à l'itération rapide. Adaptée aux utilisateurs techniques intéressés par les fonctionnalités de pointe du produit, mais avec des problèmes potentiels et des fonctions incomplètes. Ne pas utiliser en production.

## main

![main.png](https://static-docs.nocobase.com/47a3c71734c1d0f908b51f9ebd53c0ac.png)

### [v2.0.61](https://www.nocobase.com/en/blog/v2.0.61)

*Date de sortie : 2026-06-03*

### 🚀 Améliorations

- **[client]** Amélioration de la prise en charge de l'autocomplétion pour certaines fonctions RunJS intégrées. ([#9481](https://github.com/nocobase/nocobase/pull/9481)) par @gchust
- **[undefined]** Mise à jour de la documentation Embed NocoBase pour le plugin open-source. ([#9642](https://github.com/nocobase/nocobase/pull/9642)) par @zhangzhonghe
  Référence : [Embed NocoBase](https://docs.nocobase.com/en/integration/embed/)

### 🐛 Corrections de bugs

- **[flow-engine]**

  - Correction du problème où la page se bloquait lors de la définition des valeurs de champ pour un sous-formulaire. ([#9598](https://github.com/nocobase/nocobase/pull/9598)) par @gchust
  - Correction d'un problème où la fenêtre contextuelle affichait des données d'interface utilisateur obsolètes après avoir basculé l'interrupteur du mode de configuration de l'interface utilisateur. ([#9525](https://github.com/nocobase/nocobase/pull/9525)) par @gchust
- **[client]**

  - Correction du comportement incorrect des règles de liaison des actions d'enregistrement dans les blocs de tableau. ([#9652](https://github.com/nocobase/nocobase/pull/9652)) par @gchust
  - Correction du problème où les données de champ de relation sélectionnées ne s'affichaient pas sur mobile. ([#9665](https://github.com/nocobase/nocobase/pull/9665)) par @zhangzhonghe
  - Correction du problème où les champs devenaient en lecture seule lorsqu'ils étaient réaffichés après avoir été masqués par des règles de liaison. ([#9649](https://github.com/nocobase/nocobase/pull/9649)) par @katherinehhh
- **[cli]** Correction du modèle nginx pour servir les ressources `.mjs` avec le type MIME JavaScript. ([#9626](https://github.com/nocobase/nocobase/pull/9626)) par @mytharcher
- **[database]** Correction d'un problème où l'importation de valeurs de mot de passe numériques pouvait échouer. ([#9635](https://github.com/nocobase/nocobase/pull/9635)) par @2013xile
- **[AI employees]** Correction de la validation de l'URL de base du fournisseur d'IA. ([#9667](https://github.com/nocobase/nocobase/pull/9667)) par @cgyrock
- **[Flow engine]**

  - Correction d'un problème où le glissement des onglets de la fenêtre contextuelle pour les réorganiser ne fonctionnait pas. ([#9602](https://github.com/nocobase/nocobase/pull/9602)) par @gchust
  - Correction d'un problème où la modification d'un bloc après la duplication de son modèle pouvait affecter par inadvertance le contenu du bloc d'origine. ([#9664](https://github.com/nocobase/nocobase/pull/9664)) par @gchust
- **[Notification: In-app message]** Correction d'un risque d'injection SQL dans le filtre de timestamp du canal de notification dans l'application. ([#9630](https://github.com/nocobase/nocobase/pull/9630)) par @mytharcher
- **[License settings]** Correction du problème où la page des paramètres de licence pouvait se bloquer longtemps lorsque la vérification de connexion pkg était lente ou inaccessible. ([#9650](https://github.com/nocobase/nocobase/pull/9650)) par @hongboji
- **[Workflow: JavaScript]** Clarification que le mode de support du module JavaScript du Workflow n'est pas sûr et ne constitue pas une limite de permission. ([#9629](https://github.com/nocobase/nocobase/pull/9629)) par @mytharcher
  Référence : [Workflow JavaScript](docs/docs/en/workflow/nodes/javascript.md)
- **[Access control]** Correction des permissions incomplètes lors de la première connexion lorsqu'un rôle d'union était le rôle par défaut. ([#9632](https://github.com/nocobase/nocobase/pull/9632)) par @2013xile
- **[File manager]** Correction de la validation du chemin de stockage des fichiers locaux pour empêcher les chemins non sécurisés de s'échapper de la racine de stockage configurée. ([#9628](https://github.com/nocobase/nocobase/pull/9628)) par @mytharcher
- **[Password policy]** Correction d'un problème où la validation de la politique de mot de passe pouvait échouer pour les valeurs de mot de passe numériques. par @2013xile

### [v2.0.60](https://www.nocobase.com/en/blog/v2.0.60)

*Date de sortie : 2026-05-29*

### 🚀 Améliorations

- **[AI employees]** Amélioration du champ URL de base LLM afin qu'il puisse utiliser des variables de portée globale dans les formulaires de création et d'édition. ([#9615](https://github.com/nocobase/nocobase/pull/9615)) par @cgyrock

### 🐛 Corrections de bugs

- **[client]** Correction de la largeur du badge dans la barre de navigation supérieure ([#9607](https://github.com/nocobase/nocobase/pull/9607)) par @zhangzhonghe
- **[AI employees]** Correction des boutons de raccourci IA qui obtenaient un contexte de bloc vide après la suppression des blocs de tableau référencés. ([#9617](https://github.com/nocobase/nocobase/pull/9617)) par @cgyrock
- **[Migration manager]** Correction des diffs de migration PostgreSQL afin que les colonnes héritées enfants ne soient pas supprimées lorsqu'une colonne locale devient héritée. par @hongboji

### [v2.0.59](https://www.nocobase.com/en/blog/v2.0.59)

*Date de sortie : 2026-05-28*

### 🐛 Corrections de bugs

* **[ai]** Épinglage des dépendances LangChain à des versions stables pour éviter les échecs d'appel d'outil du modèle Ollama et éviter d'affecter les versions amont. ([#9604](https://github.com/nocobase/nocobase/pull/9604)) par @cgyrock
* **[flow-engine]** Correction du niveau de journalisation incorrect du frontend. ([#9577](https://github.com/nocobase/nocobase/pull/9577)) par @gchust
* **[Collection: Tree]** Correction des messages d'erreur peu clairs lorsque les requêtes échouaient en raison de relations parent-enfant circulaires dans les données arborescentes. ([#9603](https://github.com/nocobase/nocobase/pull/9603)) par @zhangzhonghe
* **[AI: Knowledge base]** Épinglage des dépendances LangChain à des versions stables pour éviter les échecs d'appel d'outil du modèle Ollama et éviter d'affecter les versions amont. par @cgyrock

## next

![next.png](https://static-docs.nocobase.com/8ed17a0f08cc585018f6de6c8b13947d.png)

### [v2.1.0-beta.44](https://www.nocobase.com/en/blog/v2.1.0-beta.44)

*Date de sortie : 2026-06-03*

### 🚀 Améliorations

- **[Workflow: Approval]** Ajustement des règles de validation pour les configurations de déclencheur et de nœud d'approbation afin de garantir l'existence des champs liés à l'interface utilisateur. par @mytharcher

### 🐛 Corrections de bugs

- **[client]** Correction du problème où les données de champ de relation sélectionnées ne s'affichaient pas sur mobile. ([#9665](https://github.com/nocobase/nocobase/pull/9665)) par @zhangzhonghe
- **[client-v2]**

  - Correction des erreurs de sauvegarde des règles de liaison de menu. ([#9666](https://github.com/nocobase/nocobase/pull/9666)) par @zhangzhonghe
  - Correction de l'espacement excessif au-dessus des blocs sur les pages v2. ([#9647](https://github.com/nocobase/nocobase/pull/9647)) par @zhangzhonghe
- **[flow-engine]** Correction du problème où la page se bloquait lors de la définition des valeurs de champ pour un sous-formulaire. ([#9598](https://github.com/nocobase/nocobase/pull/9598)) par @gchust
- **[AI employees]**

  - Correction de la validation de l'URL de base du fournisseur d'IA. ([#9667](https://github.com/nocobase/nocobase/pull/9667)) par @cgyrock
  - Correction des erreurs `ctx.get` dans les nœuds de workflow des employés IA. ([#9661](https://github.com/nocobase/nocobase/pull/9661)) par @cgyrock
- **[Notification: In-app message]** Correction d'un risque d'injection SQL dans le filtre de timestamp du canal de notification dans l'application. ([#9630](https://github.com/nocobase/nocobase/pull/9630)) par @mytharcher
- **[Action: Duplicate record]** Correction du problème où l'état du bouton n'était pas réinitialisé lorsque la soumission d'un enregistrement en double échouait. ([#9676](https://github.com/nocobase/nocobase/pull/9676)) par @katherinehhh
- **[Calendar]** Correction du problème où les couleurs des événements du calendrier n'étaient pas rendues à partir du champ de couleur configuré dans les pages v2. ([#9677](https://github.com/nocobase/nocobase/pull/9677)) par @jiannx
- **[Flow engine]**

  - Correction d'un problème où la modification d'un bloc après la duplication de son modèle pouvait affecter par inadvertance le contenu du bloc d'origine. ([#9664](https://github.com/nocobase/nocobase/pull/9664)) par @gchust
  - Correction d'un problème où le glissement des onglets de la fenêtre contextuelle pour les réorganiser ne fonctionnait pas. ([#9602](https://github.com/nocobase/nocobase/pull/9602)) par @gchust

### [v2.1.0-beta.43](https://www.nocobase.com/en/blog/v2.1.0-beta.43)

*Date de sortie : 2026-06-02*

### 🎉 Nouvelles fonctionnalités

- **[client-v2]** Ajout de `TypedVariableInput` pour que les champs de port SMTP et de mode sécurisé du plugin email v2 puissent accepter soit une constante typée, soit une variable `{{ $env.X }}`. ([#9637](https://github.com/nocobase/nocobase/pull/9637)) par @Molunerfinn
- **[Access control]** Migration des pages de paramètres Utilisateurs et Rôles & Permissions vers v2. ([#9619](https://github.com/nocobase/nocobase/pull/9619)) par @jiannx

### 🚀 Améliorations

- **[undefined]** Mise à jour de la documentation Embed NocoBase pour le plugin open-source ([#9642](https://github.com/nocobase/nocobase/pull/9642)) par @zhangzhonghe
  Référence : [Embed NocoBase](https://docs.nocobase.com/en/integration/embed/)
- **[client]** Amélioration de la prise en charge de l'autocomplétion pour certaines fonctions RunJS intégrées. ([#9481](https://github.com/nocobase/nocobase/pull/9481)) par @gchust
- **[cli]** Amélioration des instructions d'initialisation et de mise à jour automatique ([#9633](https://github.com/nocobase/nocobase/pull/9633)) par @chenos

### 🐛 Corrections de bugs

- **[client]**

  - Correction du problème où les blocs pouvaient être incorrectement marqués comme supprimés après avoir actualisé la page ([#9662](https://github.com/nocobase/nocobase/pull/9662)) par @zhangzhonghe
  - Correction du comportement incorrect des règles de liaison des actions d'enregistrement dans le bloc de tableau. ([#9652](https://github.com/nocobase/nocobase/pull/9652)) par @gchust
  - (règle de liaison) correction des champs devenant en lecture seule lorsqu'ils sont réaffichés après avoir été masqués ([#9649](https://github.com/nocobase/nocobase/pull/9649)) par @katherinehhh
- **[cli]** Correction du modèle nginx pour servir les ressources `.mjs` avec le type MIME JavaScript. ([#9626](https://github.com/nocobase/nocobase/pull/9626)) par @mytharcher
- **[database]** Correction d'un problème où l'importation de valeurs de mot de passe numériques pouvait échouer ([#9635](https://github.com/nocobase/nocobase/pull/9635)) par @2013xile
- **[flow-engine]**

  - Correction d'un problème où la fenêtre contextuelle affichait des données d'interface utilisateur obsolètes après avoir basculé l'interrupteur du mode de configuration de l'interface utilisateur. ([#9525](https://github.com/nocobase/nocobase/pull/9525)) par @gchust
  - Correction du problème où la recherche de champ est effacée lors du survol des champs d'association ([#9646](https://github.com/nocobase/nocobase/pull/9646)) par @zhangzhonghe
- **[client-v2]** préservation des valeurs de champ assignées ([#9640](https://github.com/nocobase/nocobase/pull/9640)) par @katherinehhh
- **[File manager]** Correction de la validation du chemin de stockage des fichiers locaux pour empêcher les chemins non sécurisés de s'échapper de la racine de stockage configurée. ([#9628](https://github.com/nocobase/nocobase/pull/9628)) par @mytharcher
- **[Block: Gantt]** Amélioration du placement des infobulles du diagramme de Gantt pour éviter de couvrir les barres de tâches et alignement cohérent des étiquettes de tâches à l'intérieur et à l'extérieur des barres ([#9638](https://github.com/nocobase/nocobase/pull/9638)) par @jiannx
- **[Access control]** Correction des permissions incomplètes lors de la première connexion lorsque le rôle d'union est le rôle par défaut ([#9632](https://github.com/nocobase/nocobase/pull/9632)) par @2013xile
- **[License settings]** Correction du blocage prolongé de la page des paramètres de licence lorsque la vérification de connexion pkg est lente ou inaccessible ([#9650](https://github.com/nocobase/nocobase/pull/9650)) par @hongboji
- **[Workflow: JavaScript]** Clarification que le mode de support du module JavaScript du Workflow n'est pas sûr et ne constitue pas une limite de permission ([#9629](https://github.com/nocobase/nocobase/pull/9629)) par @mytharcher
  Référence : [Workflow JavaScript](docs/docs/en/workflow/nodes/javascript.md)
- **[Password policy]** Correction d'un problème où la validation de la politique de mot de passe pouvait échouer pour les valeurs de mot de passe numériques par @2013xile

### [v2.1.0-beta.40](https://www.nocobase.com/en/blog/v2.1.0-beta.40)

*Date de sortie : 2026-05-30*

### 🎉 Nouvelles fonctionnalités

- **[client-v2]** Prise en charge de l'assignation de valeurs de champ dans les actions de soumission de formulaire ([#9570](https://github.com/nocobase/nocobase/pull/9570)) par @katherinehhh
- **[Office File Previewer]** Migration du plugin de prévisualisation de fichiers Office vers le client v2 (FlowEngine). ([#9620](https://github.com/nocobase/nocobase/pull/9620)) par @Molunerfinn

### 🚀 Améliorations

- **[Notification manager]** Migration des plugins liés aux notifications vers v2. ([#9597](https://github.com/nocobase/nocobase/pull/9597)) par @Molunerfinn

### 🐛 Corrections de bugs

- **[client]** Correction de la largeur du badge dans la barre de navigation supérieure ([#9607](https://github.com/nocobase/nocobase/pull/9607)) par @zhangzhonghe
- **[Block: Gantt]** Correction du chemin du dossier partagé du diagramme de Gantt v2 et ajout du rayage zébré. ([#9621](https://github.com/nocobase/nocobase/pull/9621)) par @jiannx
- **[License settings]** Ajout de la prise en charge client-v2 pour les paramètres de licence et l'injection de licence commerciale. ([#9555](https://github.com/nocobase/nocobase/pull/9555)) par @jiannx
- **[Workflow: Custom action event]** Correction des options en double de Déclencher un workflow dans les menus d'action des blocs v2 ([#9622](https://github.com/nocobase/nocobase/pull/9622)) par @zhangzhonghe
- **[AI employees]** Correction des boutons de raccourci IA qui obtenaient un contexte de bloc vide après la suppression des blocs de tableau référencés. ([#9617](https://github.com/nocobase/nocobase/pull/9617)) par @cgyrock
- **[plugin-commercial]** Ajout des composants de licence commerciale client-v2 et de l'entrée d'état de licence dans la barre supérieure. par @jiannx
- **[Migration manager]** Correction des diffs de migration PostgreSQL afin que les colonnes héritées enfants ne soient pas supprimées lorsqu'une colonne locale devient héritée. par @hongboji

### [v2.1.0-beta.38](https://www.nocobase.com/en/blog/v2.1.0-beta.38)

*Date de sortie : 2026-05-29*

### 🎉 Nouvelles fonctionnalités

- **[cli]** Ajout de gardes de compatibilité pour les commandes API dynamiques ([#9613](https://github.com/nocobase/nocobase/pull/9613)) par @chenos
- **[client-v2]**

  - Prise en charge des pages v2 intégrées et des pages de formulaire public v2 ([#9431](https://github.com/nocobase/nocobase/pull/9431)) par @zhangzhonghe
  - Réécriture de la page du gestionnaire de plugins client-v2 en une interface utilisateur en cartes responsive avec filtre par catégorie, recherche, activation/désactivation/suppression, activation en masse et une modale de détail de plugin ; également rendre la page du gestionnaire de plugins client-v1 responsive sur les écrans étroits. ([#9573](https://github.com/nocobase/nocobase/pull/9573)) par @Molunerfinn
- **[Workflow]**

  - Ajout du contrôle de délai d'attente pour les workflows, prise en charge de l'arrêt automatique de l'exécution en cas de dépassement du délai si l'option de délai est définie ([#9363](https://github.com/nocobase/nocobase/pull/9363)) par @mytharcher
  - Ajout d'une API administrateur pour réexécuter les exécutions de workflow démarrées depuis le début ou un nœud spécifié. ([#9569](https://github.com/nocobase/nocobase/pull/9569)) par @mytharcher
- **[Block: Gantt]** Ajout de la prise en charge v2 pour le bloc Gantt. ([#9545](https://github.com/nocobase/nocobase/pull/9545)) par @jiannx
- **[Workflow: Webhook]** Ajout du statut de réponse 408 pour les workflows webhook en timeout (mode synchrone) par @mytharcher
- **[Workflow: Subflow]** Prise en charge du paramètre de délai d'attente dans le workflow par @mytharcher
- **[Auth: OIDC]** Migration de `plugin-auth-oidc` vers l'administration v2 ; le bouton de connexion, le formulaire de paramètres d'administration et la redirection automatique SSO fonctionnent désormais sous v2. par @Molunerfinn
- **[Workflow: Approval]** Prise en charge du paramètre de délai d'attente dans le workflow par @mytharcher
- **[Auth: LDAP]** Ajout d'une entrée client v2 pour que l'authentificateur LDAP affiche son formulaire de connexion et ses paramètres d'administration sur les applications v2. par @Molunerfinn

### 🚀 Améliorations

- **[client-v2]**

  - Ajout du paramètre de sélection de ligne de tableau v2 ([#9614](https://github.com/nocobase/nocobase/pull/9614)) par @katherinehhh
  - Prise en charge des couleurs d'action du panneau d'actions ([#9612](https://github.com/nocobase/nocobase/pull/9612)) par @katherinehhh
  - Suppression de l'option Masqué de la configuration du menu ([#9596](https://github.com/nocobase/nocobase/pull/9596)) par @zhangzhonghe
- **[client]** Suppression de l'option Masqué des paramètres des éléments de menu ([#9595](https://github.com/nocobase/nocobase/pull/9595)) par @zhangzhonghe
- **[cli]** Rationalisation du flux de mise à niveau de l'application ([#9587](https://github.com/nocobase/nocobase/pull/9587)) par @chenos
- **[AI employees]** Amélioration du champ URL de base LLM afin qu'il puisse utiliser des variables de portée globale dans les formulaires de création et d'édition. ([#9615](https://github.com/nocobase/nocobase/pull/9615)) par @cgyrock
- **[IP restriction]** Ajout d'un client v2 pour le plugin de restriction IP. par @Molunerfinn

### 🐛 Corrections de bugs

- **[flow-engine]**

  - Correction du niveau de journalisation incorrect du frontend. ([#9577](https://github.com/nocobase/nocobase/pull/9577)) par @gchust
  - Correction des menus en cascade instables lors de la saisie dans les zones de recherche ([#9473](https://github.com/nocobase/nocobase/pull/9473)) par @zhangzhonghe
  - Correction d'un problème où les règles de liaison des actions de tableau s'exécutaient incorrectement après la soumission réussie d'un formulaire dans une fenêtre contextuelle. ([#9445](https://github.com/nocobase/nocobase/pull/9445)) par @gchust
- **[ai]** Épinglage des dépendances LangChain à des versions stables pour éviter les échecs d'exécution d'outil Ollama et éviter d'affecter les versions amont ([#9604](https://github.com/nocobase/nocobase/pull/9604)) par @cgyrock
- **[client-v2]**

  - Correction du rendu des modèles de traduction bruts dans les onglets de connexion de la sous-application, et empêchement du tiroir d'édition de la méthode d'authentification v2 de perdre les valeurs de champ lors de la soumission. ([#9581](https://github.com/nocobase/nocobase/pull/9581)) par @Molunerfinn
  - Amélioration des performances de la page du gestionnaire de plugins en utilisant CSS line-clamp au lieu de l'ellipse antd Typography. ([#9593](https://github.com/nocobase/nocobase/pull/9593)) par @Molunerfinn
- **[client]**

  - Correction de la préservation du format de l'heure pour les champs de temps v2 ([#9579](https://github.com/nocobase/nocobase/pull/9579)) par @katherinehhh
  - Correction de l'état masqué synchronisé pour la liaison de sous-formulaire ([#9594](https://github.com/nocobase/nocobase/pull/9594)) par @katherinehhh
  - Augmentation de la limite de téléchargement d'images d'entrée de scan ([#9580](https://github.com/nocobase/nocobase/pull/9580)) par @katherinehhh
  - Correction de la valeur de la fenêtre contextuelle du sélecteur de date mobile synchronisée ([#9582](https://github.com/nocobase/nocobase/pull/9582)) par @katherinehhh
  - Correction de la disparition des onglets de page après avoir changé de menu ([#9583](https://github.com/nocobase/nocobase/pull/9583)) par @zhangzhonghe
  - Correction du problème où le sous-tableau dans le sous-formulaire ne pouvait pas ajouter une deuxième ligne ([#9586](https://github.com/nocobase/nocobase/pull/9586)) par @katherinehhh
  - Augmentation de la limite de téléchargement d'images d'entrée de scan ([#9580](https://github.com/nocobase/nocobase/pull/9580)) par @katherinehhh
- **[Collection: Tree]** Correction de l'erreur causée par des données parent-enfant circulaires dans les collections arborescentes ([#9603](https://github.com/nocobase/nocobase/pull/9603)) par @zhangzhonghe
- **[Workflow: Custom action event]**

  - Correction des boutons d'action de tableau personnalisés avec un contexte de plusieurs enregistrements permettant incorrectement la sélection de workflows de contexte personnalisé. ([#9608](https://github.com/nocobase/nocobase/pull/9608)) par @mytharcher
  - Filtrage des options de liaison de workflow d'action personnalisée par la collection de blocs actuelle. ([#9610](https://github.com/nocobase/nocobase/pull/9610)) par @mytharcher
- **[File manager]**

  - Amélioration des messages d'échec de prévisualisation PDF et documentation des exigences CORS pour le stockage externe. ([#9600](https://github.com/nocobase/nocobase/pull/9600)) par @mytharcher
    Référence : [File Preview](docs/docs/en/file-manager/file-preview/index.md)
  - Correction de la normalisation des noms de fichiers Unicode lors du téléchargement de fichiers pour éviter de générer des clés d'objet avec des caractères de contrôle. ([#9584](https://github.com/nocobase/nocobase/pull/9584)) par @mytharcher
- **[AI: Knowledge base]** Épinglage des dépendances LangChain à des versions stables pour éviter les échecs d'exécution d'outil Ollama et éviter d'affecter les versions amont par @cgyrock
- **[Template print]** Correction des erreurs de conversion PDF d'impression de modèle qui n'étaient pas correctement renvoyées au client par @jiannx

## develop

![develop.png](https://static-docs.nocobase.com/7fcdd9456a17286d8a439eee52bcb8d2.png)

### [v2.1.0-alpha.45](https://www.nocobase.com/en/blog/v2.1.0-alpha.45)

*Date de sortie : 2026-05-29*

### 🎉 Nouvelles fonctionnalités

- **[client-v2]**

  - Prise en charge de l'assignation de valeurs de champ dans les actions de soumission de formulaire ([#9570](https://github.com/nocobase/nocobase/pull/9570)) par @katherinehhh
  - Prise en charge des pages v2 intégrées et des pages de formulaire public v2 ([#9431](https://github.com/nocobase/nocobase/pull/9431)) par @zhangzhonghe
  - Ajout d'un menu Sécurité et de la page des paramètres de politique de jeton à l'administration v2 ; le centre utilisateur prend désormais en charge le changement de mot de passe. ([#9556](https://github.com/nocobase/nocobase/pull/9556)) par @Molunerfinn
  - Réécriture de la page du gestionnaire de plugins client-v2 en une interface utilisateur en cartes responsive avec filtre par catégorie, recherche, activation/désactivation/suppression, activation en masse et une modale de détail de plugin ; également rendre la page du gestionnaire de plugins client-v1 responsive sur les écrans étroits. ([#9573](https://github.com/nocobase/nocobase/pull/9573)) par @Molunerfinn
- **[cli]**

  - Ajout de gardes de compatibilité pour les commandes API dynamiques ([#9613](https://github.com/nocobase/nocobase/pull/9613)) par @chenos
  - Prise en charge de l'authentification de base ([#9558](https://github.com/nocobase/nocobase/pull/9558)) par @chenos
- **[Office File Previewer]** Migration du plugin de prévisualisation de fichiers Office vers le client v2 (FlowEngine). ([#9620](https://github.com/nocobase/nocobase/pull/9620)) par @Molunerfinn
- **[Workflow]**

  - Ajout du contrôle de délai d'attente pour les workflows, prise en charge de l'arrêt automatique de l'exécution en cas de dépassement du délai si l'option de délai est définie ([#9363](https://github.com/nocobase/nocobase/pull/9363)) par @mytharcher
  - Ajout d'une API administrateur pour réexécuter les exécutions de workflow démarrées depuis le début ou un nœud spécifié. ([#9569](https://github.com/nocobase/nocobase/pull/9569)) par @mytharcher
- **[IdP: OAuth]** Ajout de la prise en charge de base pour l'authentification unique (SSO) des applications dans les déploiements multi-applications ([#9547](https://github.com/nocobase/nocobase/pull/9547)) par @2013xile
- **[Block: Gantt]** Ajout de la prise en charge v2 pour le bloc Gantt. ([#9545](https://github.com/nocobase/nocobase/pull/9545)) par @jiannx
- **[App SSO]** Ajout d'un plugin App SSO pour la connexion automatique entre les applications par @2013xile
- **[Password policy]** Migration de plugin-password-policy vers le shell d'administration client-v2 avec les pages de paramètres Politique de mot de passe / Utilisateurs verrouillés et l'application des règles côté client sur le formulaire de changement de mot de passe du centre utilisateur. par @Molunerfinn
- **[Workflow: Webhook]** Ajout du statut de réponse 408 pour les workflows webhook en timeout (mode synchrone) par @mytharcher
- **[Workflow: Subflow]** Prise en charge du paramètre de délai d'attente dans le workflow par @mytharcher
- **[Auth: OIDC]** Migration de `plugin-auth-oidc` vers l'administration v2 ; le bouton de connexion, le formulaire de paramètres d'administration et la redirection automatique SSO fonctionnent désormais sous v2. par @Molunerfinn
- **[Workflow: Approval]** Prise en charge du paramètre de délai d'attente dans le workflow par @mytharcher
- **[App supervisor]** Ajout des paramètres App SSO pour les sous-applications par @2013xile
- **[Auth: LDAP]** Ajout d'une entrée client v2 pour que l'authentificateur LDAP affiche son formulaire de connexion et ses paramètres d'administration sur les applications v2. par @Molunerfinn

### 🚀 Améliorations

- **[client-v2]**

  - ajout du paramètre de sélection de ligne de tableau v2 ([#9614](https://github.com/nocobase/nocobase/pull/9614)) par @katherinehhh
  - prise en charge des couleurs d'action du panneau d'actions ([#9612](https://github.com/nocobase/nocobase/pull/9612)) par @katherinehhh
  - Suppression de l'option Masqué de la configuration du menu ([#9596](https://github.com/nocobase/nocobase/pull/9596)) par @zhangzhonghe
- **[client]** Suppression de l'option Masqué des paramètres des éléments de menu ([#9595](https://github.com/nocobase/nocobase/pull/9595)) par @zhangzhonghe
- **[cli]** Rationalisation du flux de mise à niveau de l'application ([#9587](https://github.com/nocobase/nocobase/pull/9587)) par @chenos
- **[Notification manager]** Migration des plugins liés aux notifications vers v2. ([#9597](https://github.com/nocobase/nocobase/pull/9597)) par @Molunerfinn
- **[AI employees]** Amélioration du champ URL de base LLM afin qu'il puisse utiliser des variables de portée globale dans les formulaires de création et d'édition. ([#9615](https://github.com/nocobase/nocobase/pull/9615)) par @cgyrock
- **[Workflow]** Refactorisation des vérifications de disponibilité des nœuds asynchrones du workflow ([#9532](https://github.com/nocobase/nocobase/pull/9532)) par @mytharcher
- **[Data visualization]** Ajout de la prise en charge client v2 pour les blocs de graphiques. ([#9517](https://github.com/nocobase/nocobase/pull/9517)) par @jiannx
- **[IP restriction]** Ajout d'un client v2 pour le plugin de restriction IP. par @Molunerfinn

### 🐛 Corrections de bugs

- **[client]**

  - Correction de la largeur du badge dans la barre de navigation supérieure ([#9607](https://github.com/nocobase/nocobase/pull/9607)) par @zhangzhonghe
  - Augmentation de la limite de téléchargement d'images d'entrée de scan ([#9580](https://github.com/nocobase/nocobase/pull/9580)) par @katherinehhh
  - Correction de la disparition des onglets de page après avoir changé de menu ([#9583](https://github.com/nocobase/nocobase/pull/9583)) par @zhangzhonghe
  - Correction du problème où le sous-tableau dans le sous-formulaire ne pouvait pas ajouter une deuxième ligne ([#9586](https://github.com/nocobase/nocobase/pull/9586)) par @katherinehhh
  - Correction de la préservation du format de l'heure pour les champs de temps v2 ([#9579](https://github.com/nocobase/nocobase/pull/9579)) par @katherinehhh
  - Correction de la valeur de la fenêtre contextuelle du sélecteur de date mobile synchronisée ([#9582](https://github.com/nocobase/nocobase/pull/9582)) par @katherinehhh
  - Correction de l'état masqué synchronisé pour la liaison de sous-formulaire ([#9594](https://github.com/nocobase/nocobase/pull/9594)) par @katherinehhh
- **[flow-engine]**

  - Correction du niveau de journalisation incorrect du frontend. ([#9577](https://github.com/nocobase/nocobase/pull/9577)) par @gchust
  - Correction des menus en cascade instables lors de la saisie dans les zones de recherche ([#9473](https://github.com/nocobase/nocobase/pull/9473)) par @zhangzhonghe
  - Correction d'un problème où les règles de liaison des actions de tableau s'exécutaient incorrectement après la soumission réussie d'un formulaire dans une fenêtre contextuelle. ([#9445](https://github.com/nocobase/nocobase/pull/9445)) par @gchust
- **[ai]** Épinglage des dépendances LangChain à des versions stables pour éviter les échecs d'exécution d'outil Ollama et éviter d'affecter les versions amont ([#9604](https://github.com/nocobase/nocobase/pull/9604)) par @cgyrock
- **[client-v2]**

  - Correction du rendu des modèles de traduction bruts dans les onglets de connexion de la sous-application, et empêchement du tiroir d'édition de la méthode d'authentification v2 de perdre les valeurs de champ lors de la soumission. ([#9581](https://github.com/nocobase/nocobase/pull/9581)) par @Molunerfinn
  - Amélioration des performances de la page du gestionnaire de plugins en utilisant CSS line-clamp au lieu de l'ellipse antd Typography. ([#9593](https://github.com/nocobase/nocobase/pull/9593)) par @Molunerfinn
  - Correction des métadonnées de langue du navigateur afin que la page de l'application suive la langue de l'application sélectionnée au lieu d'être marquée comme anglais. ([#9564](https://github.com/nocobase/nocobase/pull/9564)) par @Molunerfinn
- **[build]**

  - Les ressources textuelles dans les builds serveur sont désormais copiées en tant que fichiers au lieu d'être converties en modules JavaScript. ([#9565](https://github.com/nocobase/nocobase/pull/9565)) par @Molunerfinn
  - Correction de la sortie d'obfuscation du serveur de plugin pour éviter les globaux du navigateur dans les bundles d'exécution Node.js. ([#9559](https://github.com/nocobase/nocobase/pull/9559)) par @Molunerfinn
- **[Block: Gantt]** Correction du chemin du dossier partagé du diagramme de Gantt v2 et ajout du rayage zébré. ([#9621](https://github.com/nocobase/nocobase/pull/9621)) par @jiannx
- **[License settings]** Ajout de la prise en charge client-v2 pour les paramètres de licence et l'injection de licence commerciale. ([#9555](https://github.com/nocobase/nocobase/pull/9555)) par @jiannx
- **[Workflow: Custom action event]**

  - Correction des options en double de Déclencher un workflow dans les menus d'action des blocs v2 ([#9622](https://github.com/nocobase/nocobase/pull/9622)) par @zhangzhonghe
  - Filtrage des options de liaison de workflow d'action personnalisée par la collection de blocs actuelle. ([#9610](https://github.com/nocobase/nocobase/pull/9610)) par @mytharcher
  - Correction des boutons d'action de tableau personnalisés avec un contexte de plusieurs enregistrements permettant incorrectement la sélection de workflows de contexte personnalisé. ([#9608](https://github.com/nocobase/nocobase/pull/9608)) par @mytharcher
- **[Collection: Tree]** Correction de l'erreur causée par des données parent-enfant circulaires dans les collections arborescentes ([#9603](https://github.com/nocobase/nocobase/pull/9603)) par @zhangzhonghe
- **[File manager]**

  - Amélioration des messages d'échec de prévisualisation PDF et documentation des exigences CORS pour le stockage externe. ([#9600](https://github.com/nocobase/nocobase/pull/9600)) par @mytharcher
    Référence : [File Preview](docs/docs/en/file-manager/file-preview/index.md)
  - Rendu sécurisé des prévisualisations PDF avec PDF.js au lieu du rendu PDF brut basé sur iframe. ([#9566](https://github.com/nocobase/nocobase/pull/9566)) par @mytharcher
  - Correction de la normalisation des noms de fichiers Unicode lors du téléchargement de fichiers pour éviter de générer des clés d'objet avec des caractères de contrôle. ([#9584](https://github.com/nocobase/nocobase/pull/9584)) par @mytharcher
- **[AI employees]**

  - Correction des boutons de raccourci IA qui obtenaient un contexte de bloc vide après la suppression des blocs de tableau référencés. ([#9617](https://github.com/nocobase/nocobase/pull/9617)) par @cgyrock
  - correction de la description incorrecte du nom de l'outil dans l'invite de contexte de travail ([#9567](https://github.com/nocobase/nocobase/pull/9567)) par @cgyrock
- **[Workflow: Manual node]** Correction des sauvegardes temporaires pour les tâches de workflow manuelles qui ne persistaient pas les valeurs de formulaire soumises. ([#9554](https://github.com/nocobase/nocobase/pull/9554)) par @mytharcher
- **[plugin-commercial]** Ajout des composants de licence commerciale client-v2 et de l'entrée d'état de licence dans la barre supérieure. par @jiannx
- **[AI: Knowledge base]** Épinglage des dépendances LangChain à des versions stables pour éviter les échecs d'exécution d'outil Ollama et éviter d'affecter les versions amont par @cgyrock
- **[Migration manager]** Correction des diffs de migration PostgreSQL afin que les colonnes héritées enfants ne soient pas supprimées lorsqu'une colonne locale devient héritée. par @hongboji
- **[Template print]** Correction des erreurs de conversion PDF d'impression de modèle qui n'étaient pas correctement renvoyées au client par @jiannx
- **[Auth: OIDC]** Correction de la fuite de jeton lorsque les rappels de connexion SSO reçoivent une URL de redirection externe par @2013xile
- **[Workflow: Approval]**

  - Correction du problème où l'API `jobs:resume` n'est pas prise en charge par le nœud d'approbation par @mytharcher
  - Correction du retrait d'approbation pour mettre à jour les données métier soumises tout en respectant les permissions de mise à jour de la collection source. par @mytharcher
  - Correction des tâches d'approbation obsolètes lorsque les workflows d'approbation sont terminés par des échecs de nœuds non liés à l'approbation. par @mytharcher
