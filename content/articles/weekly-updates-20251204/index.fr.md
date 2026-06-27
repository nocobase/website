---
title: "Mises à jour hebdomadaires de NocoBase : Optimisations et corrections de bugs"
description: "Les mises à jour de cette semaine incluent : ajout d'options de « transformateur de message d'erreur » dans la configuration de la source de données API RESTful, possibilité de choisir d'afficher l'instantané ou le dernier enregistrement dans l'interface du processus d'approbation, et plus encore."
---

Résumez les journaux de mise à jour hebdomadaires du produit. Les dernières versions sont disponibles sur [notre blog](https://www.nocobase.com/en/blog/timeline).

**NocoBase est actuellement mis à jour avec trois branches : `main`, `next` et `develop`.**

![version.png](https://static-docs.nocobase.com/ba5f04e27e99c625cb3822da5df07860-djgsxo.png)

* `main` : La version la plus stable à ce jour, recommandée pour l'installation ;
* `next` : Version bêta, contient les nouvelles fonctionnalités à venir et a été testée préliminairement. Il peut y avoir des problèmes connus ou inconnus. Elle est principalement destinée aux utilisateurs testeurs pour recueillir des retours et optimiser davantage les fonctionnalités. Idéale pour les utilisateurs testeurs qui souhaitent découvrir les nouvelles fonctionnalités en avant-première et donner leur avis ;
* `develop` : Version alpha, contient le code des dernières fonctionnalités, peut être incomplète ou instable, principalement destinée au développement interne et à l'itération rapide. Adaptée aux utilisateurs techniques intéressés par les fonctionnalités de pointe du produit, mais avec des problèmes potentiels et des fonctions incomplètes. Ne pas utiliser en production.

## main

![main.png](https://static-docs.nocobase.com/47a3c71734c1d0f908b51f9ebd53c0ac.png)

### [v1.9.19](https://www.nocobase.com/en/blog/v1.9.19)

*Date de sortie : 2025-12-04*

### 🐛 Corrections de bugs

- **[Workflow : Approbation]**
  - Correction du problème de dépassement de mémoire (OOM) lors de la liste des approbations par @mytharcher
  - Correction du problème où la fenêtre contextuelle de l'approbateur n'affichait pas de titre par @zhangzhonghe

### [v1.9.18](https://www.nocobase.com/en/blog/v1.9.18)

*Date de sortie : 2025-12-04*

### 🐛 Corrections de bugs

- **[Action : Importer des enregistrements]** Les champs importés ne correspondent pas aux champs définis dans les paramètres ACL ([#8075](https://github.com/nocobase/nocobase/pull/8075)) par @2013xile
- **[Workflow]** Correction du problème où la page d'exécution générait une erreur lorsque les tâches sur un nœud étaient indéfinies ([#8066](https://github.com/nocobase/nocobase/pull/8066)) par @mytharcher
- **[Contrôle d'accès]** Ajout d'un middleware pour les vérifications de permissions sur les opérations d'association pour les sources de données externes ([#8062](https://github.com/nocobase/nocobase/pull/8062)) par @2013xile
- **[Workflow : Approbation]**
  - Correction du problème d'erreur de permission levée lors du chargement des approbations liées à un enregistrement dans le tiroir de détail par @mytharcher
  - Correction du problème où les enregistrements d'approbation n'étaient pas inclus dans le résultat de la tâche dans la branche de retour par @mytharcher
  - Correction du problème où le processus était incorrect lors du branchement avec ordre et contreseing par @mytharcher

### [v1.9.17](https://www.nocobase.com/en/blog/v1.9.17)

*Date de sortie : 2025-12-02*

### 🐛 Corrections de bugs

- **[client]** Correction du problème de scintillement de la zone de sélection déroulante des règles de liaison ([#8018](https://github.com/nocobase/nocobase/pull/8018)) par @zhangzhonghe
- **[acl]** Correction d'un problème où les métadonnées ACL étaient incorrectes lorsque les périmètres d'autorisation des sources de données externes utilisaient des variables liées à l'utilisateur courant ([#8013](https://github.com/nocobase/nocobase/pull/8013)) par @2013xile
- **[Éditeur de thème]** Activation du sélecteur de thème sur les appareils mobiles ([#8046](https://github.com/nocobase/nocobase/pull/8046)) par @zhangzhonghe
- **[Gestionnaire multi-applications]** Les paramètres de niveau de journal ne s'appliquent pas aux sous-applications ([#8045](https://github.com/nocobase/nocobase/pull/8045)) par @2013xile

### [v1.9.16](https://www.nocobase.com/en/blog/v1.9.16)

*Date de sortie : 2025-12-02*

### 🎉 Nouvelles fonctionnalités

- **[Source de données : API REST]** ajout d'options de `transformateur de message d'erreur` dans la configuration de la source de données API RESTful par @cgyrock

### 🚀 Améliorations

- **[client]**
  - affichage des options réduites au survol dans le composant Select ([#8029](https://github.com/nocobase/nocobase/pull/8029)) par @katherinehhh
  - optimisation des messages de validation pour les sous-tableaux ([#8001](https://github.com/nocobase/nocobase/pull/8001)) par @katherinehhh
- **[Workflow]** Ajout du contexte de la source de données "principale" pour UserSelect, afin de fournir un composant plus courant pouvant être utilisé ailleurs ([#8010](https://github.com/nocobase/nocobase/pull/8010)) par @mytharcher
- **[Workflow : Approbation]** Utilisation d'un composant commun pour réduire le code dupliqué par @mytharcher

### 🐛 Corrections de bugs

- **[client]** Correction d'un bug de chargement différé dans Variable.Input, qui provoquait un rendu incorrect du menu des options de variable ([#8009](https://github.com/nocobase/nocobase/pull/8009)) par @mytharcher
- **[Action : Importer des enregistrements]** Correction du problème où une erreur était levée lorsqu'un champ dans le xlsx importé avait une valeur `null` ([#8037](https://github.com/nocobase/nocobase/pull/8037)) par @mytharcher
- **[Workflow]** Correction du problème où la file d'attente était fermée avant la publication des messages ([#8003](https://github.com/nocobase/nocobase/pull/8003)) par @mytharcher
- **[Workflow : Sous-flux]** Correction du problème où le workflow sélectionné affichait "N/A" lorsque le nombre de workflows était supérieur à 200 par @mytharcher
- **[Workflow : Approbation]**
  - Correction du problème de permission lors de l'obtention de `approvalRecords.reassignee` dû à un changement de `RemoteSelect` par @mytharcher
  - Correction du problème où l'action d'impression ne fonctionnait pas lors du rafraîchissement de la page avec une modale ouverte par @mytharcher

### [v1.9.15](https://www.nocobase.com/en/blog/v1.9.15)

*Date de sortie : 2025-11-28*

### 🐛 Corrections de bugs

- **[client]**
  - Éviter une erreur lors de l'ouverture des paramètres de valeur par défaut ([#7997](https://github.com/nocobase/nocobase/pull/7997)) par @mytharcher
  - Résoudre l'erreur lors de l'ajout d'enregistrements enfants dans un bloc de tableau arborescent d'association ([#7989](https://github.com/nocobase/nocobase/pull/7989)) par @katherinehhh
- **[Départements]** Correction du problème où les champs associés au département ne pouvaient pas être modifiés ([#7462](https://github.com/nocobase/nocobase/pull/7462)) par @heziqiang
- **[Collection : Arborescence]** Correction des échecs de mise à jour de la table de chemin causés par une recherche incorrecte du champ parent de l'arborescence ([#8000](https://github.com/nocobase/nocobase/pull/8000)) par @2013xile
- **[Champ de collection : Plusieurs à plusieurs (tableau)]** Correction du problème où le champ de tableau m2m dans le sous-tableau ne pouvait pas être mis à jour ([#7998](https://github.com/nocobase/nocobase/pull/7998)) par @cgyrock
- **[Workflow : Approbation]**
  - Correction de l'absence de données du demandeur dans le contexte d'exécution après la soumission par l'utilisateur par @mytharcher
  - Correction du problème où le commentaire dans le résultat de la tâche était nul après que l'utilisateur ait soumis une approbation avec un commentaire par @mytharcher

## develop

![develop.png](https://static-docs.nocobase.com/7fcdd9456a17286d8a439eee52bcb8d2.png)

### [v2.0.0-alpha.50](https://www.nocobase.com/en/blog/v2.0.0-alpha.50)

*Date de sortie : 2025-12-02*

### 🚀 Améliorations

- **[client]**
  - prise en charge du paramètre `allowMultiple` dans le composant de téléchargement de pièces jointes ([#8052](https://github.com/nocobase/nocobase/pull/8052)) par @katherinehhh
  - affichage des options réduites au survol dans le composant Select ([#8029](https://github.com/nocobase/nocobase/pull/8029)) par @katherinehhh
  - affichage des options réduites au survol dans le composant Select ([#8030](https://github.com/nocobase/nocobase/pull/8030)) par @katherinehhh
- **[Employés IA]** ajout du champ fournisseur manquant au formulaire d'ajout de LLM ([#8049](https://github.com/nocobase/nocobase/pull/8049)) par @heziqiang
- **[Workflow]** Ajout du contexte de la source de données "principale" pour UserSelect, afin de fournir un composant plus courant pouvant être utilisé ailleurs ([#8010](https://github.com/nocobase/nocobase/pull/8010)) par @mytharcher

### 🐛 Corrections de bugs

- **[client]**
  - Correction du problème où "N/A" était affiché après la désactivation de `allowMultiple` dans la sélection d'enregistrements d'association plusieurs-à-plusieurs ([#8050](https://github.com/nocobase/nocobase/pull/8050)) par @katherinehhh
  - Correction du problème de scintillement de la zone de sélection déroulante des règles de liaison ([#8018](https://github.com/nocobase/nocobase/pull/8018)) par @zhangzhonghe
  - Correction d'un problème où le passage d'un champ de date à un champ d'heure dans l'action de filtre provoquait une erreur de rendu. ([#8036](https://github.com/nocobase/nocobase/pull/8036)) par @gchust
  - Correction d'un problème où le menu de l'enregistrement courant apparaissait lors de l'ajout d'un bloc de commentaires. ([#8039](https://github.com/nocobase/nocobase/pull/8039)) par @gchust
  - Correction de l'échec de la suppression d'un enregistrement dans le bloc de sélection d'enregistrements ([#8023](https://github.com/nocobase/nocobase/pull/8023)) par @katherinehhh
  - Correction d'un problème où le style par défaut du champ JS dans le bloc de détail était incorrect. ([#8031](https://github.com/nocobase/nocobase/pull/8031)) par @gchust
  - Correction de l'impossibilité de développer les nœuds enfants dans le bloc de tableau arborescent ([#8011](https://github.com/nocobase/nocobase/pull/8011)) par @katherinehhh
  - Correction du glissement de colonne de sous-tableau ne fonctionnant pas ([#8026](https://github.com/nocobase/nocobase/pull/8026)) par @katherinehhh
  - Correction de la largeur de colonne de sous-tableau non appliquée ([#8027](https://github.com/nocobase/nocobase/pull/8027)) par @katherinehhh
  - Résolution d'un problème provoquant des erreurs lors du chargement des données pour les champs d'association dans les fenêtres contextuelles, garantissant un affichage et des fonctionnalités plus fluides. ([#7985](https://github.com/nocobase/nocobase/pull/7985)) par @gchust
  - Correction du problème de style de la popover du champ d'affichage markdown ([#8012](https://github.com/nocobase/nocobase/pull/8012)) par @katherinehhh
  - Correction d'un problème où les titres par défaut des fenêtres contextuelles d'action de modification et de création étaient incorrects. ([#8033](https://github.com/nocobase/nocobase/pull/8033)) par @gchust
  - Correction d'un bug de chargement différé dans Variable.Input, qui provoquait un rendu incorrect du menu des options de variable ([#8009](https://github.com/nocobase/nocobase/pull/8009)) par @mytharcher
  - Correction d'un problème où la variable d'enregistrement de la fenêtre contextuelle courante ne pouvait pas être correctement résolue dans une fenêtre contextuelle ouverte par un champ d'association. ([#8019](https://github.com/nocobase/nocobase/pull/8019)) par @gchust
- **[acl]** Correction d'un problème où les métadonnées ACL étaient incorrectes lorsque les périmètres d'autorisation des sources de données externes utilisaient des variables liées à l'utilisateur courant ([#8013](https://github.com/nocobase/nocobase/pull/8013)) par @2013xile
- **[moteur de flux]**
  - Correction de l'échec de la sauvegarde de l'enregistrement de commentaire après édition ([#8035](https://github.com/nocobase/nocobase/pull/8035)) par @katherinehhh
  - Correction d'un problème où les blocs de données ne se rafraîchissaient pas lors de la fermeture d'une fenêtre contextuelle en cliquant sur le bouton de soumission du formulaire à l'intérieur de la fenêtre contextuelle. ([#8021](https://github.com/nocobase/nocobase/pull/8021)) par @gchust
- **[Éditeur de thème]** Activation du sélecteur de thème sur les appareils mobiles ([#8046](https://github.com/nocobase/nocobase/pull/8046)) par @zhangzhonghe
- **[Gestionnaire multi-applications (obsolète)]** Les paramètres de niveau de journal ne s'appliquent pas aux sous-applications ([#8045](https://github.com/nocobase/nocobase/pull/8045)) par @2013xile
- **[Gestionnaire de sources de données]** Correction des erreurs lors de la mise à jour des mots de passe pour les sources de données externes ([#8024](https://github.com/nocobase/nocobase/pull/8024)) par @cgyrock
- **[Action : Importer des enregistrements]** Correction du problème où une erreur était levée lorsqu'un champ dans le xlsx importé avait une valeur `null` ([#8037](https://github.com/nocobase/nocobase/pull/8037)) par @mytharcher
- **[Workflow]** Correction du problème où la file d'attente était fermée avant la publication des messages ([#8003](https://github.com/nocobase/nocobase/pull/8003)) par @mytharcher
- **[Commentaires]**
  - Correction de l'échec de la suppression d'un enregistrement dans le bloc de commentaires par @katherinehhh
  - Correction de l'affichage d'un avertissement lorsque le bloc de commentaires est utilisé sur une collection non dédiée aux commentaires par @katherinehhh
- **[Multi-espace]** Les appareils mobiles prennent en charge le changement d'espace par @jiannx
- **[Workflow : Sous-flux]** Correction du problème où le workflow sélectionné affichait "N/A" lorsque le nombre de workflows était supérieur à 200 par @mytharcher
- **[Workflow : Approbation]**
  - Correction d'une erreur levée lors de la création d'un bloc d'informations d'approbation par @mytharcher
  - Ajout d'une migration pour éviter une erreur d'enregistrement dupliqué lors de l'ajout d'un index par @mytharcher
  - Correction du problème où l'action d'impression ne fonctionnait pas lors du rafraîchissement de la page avec une modale ouverte par @mytharcher

### [v2.0.0-alpha.49](https://www.nocobase.com/en/blog/v2.0.0-alpha.49)

*Date de sortie : 2025-11-29*

### 🎉 Nouvelles fonctionnalités

- **[Workflow : Approbation]** Permet de choisir d'afficher l'instantané ou le dernier enregistrement dans l'interface utilisateur du processus d'approbation par @mytharcher

### 🚀 Améliorations

- **[client]** optimisation des messages de validation pour les sous-tableaux ([#8001](https://github.com/nocobase/nocobase/pull/8001)) par @katherinehhh
- **[Télémétrie : Prometheus]** Mise à niveau de `@opentelemetry/exporter-prometheus` par @2013xile
- **[Action : Importer des enregistrements Pro]** Messages d'erreur améliorés pour les tâches asynchrones afin de fournir aux utilisateurs des raisons spécifiques pour les échecs de tâches par @mytharcher

### 🐛 Corrections de bugs

- **[moteur de flux]** Correction d'un problème où la variable d'enregistrement courant ne pouvait pas être correctement déclenchée pour la résolution dans le bloc de détails. ([#8004](https://github.com/nocobase/nocobase/pull/8004)) par @gchust
- **[client]** Correction des problèmes de sélection et de suppression de blocs de tableau pour les clés composites ([#7978](https://github.com/nocobase/nocobase/pull/7978)) par @katherinehhh
- **[Action : Exporter des enregistrements]** Correction des champs système manquants dans la liste des champs exportables ([#8002](https://github.com/nocobase/nocobase/pull/8002)) par @katherinehhh
- **[Collection : Arborescence]** Correction des échecs de mise à jour de la table de chemin causés par une recherche incorrecte du champ parent de l'arborescence ([#8000](https://github.com/nocobase/nocobase/pull/8000)) par @2013xile
- **[Champ de collection : Plusieurs à plusieurs (tableau)]** Correction du problème où le champ de tableau m2m dans le sous-tableau ne pouvait pas être mis à jour ([#7998](https://github.com/nocobase/nocobase/pull/7998)) par @cgyrock
- **[Départements]** Correction du problème où les champs associés au département ne pouvaient pas être modifiés ([#7462](https://github.com/nocobase/nocobase/pull/7462)) par @heziqiang
- **[Workflow : Approbation]** Correction du problème de permission lors de l'obtention de `approvalRecords.reassignee` dû à un changement de `RemoteSelect` par @mytharcher

### [v2.0.0-alpha.48](https://www.nocobase.com/en/blog/v2.0.0-alpha.48)

*Date de sortie : 2025-11-28*

### 🎉 Nouvelles fonctionnalités

- **[Bloc : Carte]** ajout du bloc carte 2.0 ([#7944](https://github.com/nocobase/nocobase/pull/7944)) par @katherinehhh
- **[Auth : OIDC]** Prise en charge de la redirection automatique vers l'URL SSO lorsque non authentifié par @heziqiang

### 🐛 Corrections de bugs

- **[client]**
  - Éviter une erreur lors de l'ouverture des paramètres de valeur par défaut ([#7997](https://github.com/nocobase/nocobase/pull/7997)) par @mytharcher
  - Résoudre l'erreur lors de l'ajout d'enregistrements enfants dans un bloc de tableau arborescent d'association ([#7989](https://github.com/nocobase/nocobase/pull/7989)) par @katherinehhh
  - Correction d'un problème d'affichage lorsque le champ markdown est tronqué en mode HTML ([#7994](https://github.com/nocobase/nocobase/pull/7994)) par @katherinehhh
  - Correction des résultats de recherche incomplets dans le sélecteur en cascade ([#7990](https://github.com/nocobase/nocobase/pull/7990)) par @katherinehhh
  - Correction du problème où l'état de l'onglet de la page et la route ne correspondent pas ([#7991](https://github.com/nocobase/nocobase/pull/7991)) par @zhangzhonghe
  - Correction du problème où le sélecteur distant n'affichait pas le bon libellé pour une valeur non-objet ([#7975](https://github.com/nocobase/nocobase/pull/7975)) par @katherinehhh
- **[base de données]** Correction : suppression du traitement UTC dans la conversion de l'heure pour les champs de type heure uniquement afin d'empêcher les décalages de fuseau horaire. ([#7812](https://github.com/nocobase/nocobase/pull/7812)) par @ChimingLiu
- **[Workflow]**
  - Correction du problème où les exécutions préparées n'étaient pas envoyées à la file d'attente avant l'arrêt ([#7981](https://github.com/nocobase/nocobase/pull/7981)) par @mytharcher
  - Correction du problème où certains menus de tâches de workflow ne s'affichaient pas ([#7980](https://github.com/nocobase/nocobase/pull/7980)) par @mytharcher
  - Correction du problème où le lien de la tâche menait à une page d'erreur ([#7983](https://github.com/nocobase/nocobase/pull/7983)) par @mytharcher
- **[Visualisation de données]** Les paramètres de champ de filtre pour les collections de sources de données externes n'affichent pas les propriétés spécifiques ([#7982](https://github.com/nocobase/nocobase/pull/7982)) par @2013xile
- **[Gestionnaire de sources de données]** Correction de l'échec de la mise à jour du mot de passe de la source de données lorsque le mot de passe de la base de données est modifié ([#7977](https://github.com/nocobase/nocobase/pull/7977)) par @cgyrock
- **[Action : Importer des enregistrements]** Correction du problème lors de l'importation de données dans un tableau arborescent ([#7976](https://github.com/nocobase/nocobase/pull/7976)) par @cgyrock
- **[Workflow : Nœud manuel]** Correction du problème où le nombre de tâches manuelles n'était pas correct ([#7984](https://github.com/nocobase/nocobase/pull/7984)) par @mytharcher
- **[Workflow : Approbation]**
  - Correction de l'absence de données du demandeur dans le contexte d'exécution après la soumission par l'utilisateur par @mytharcher
  - Correction du problème où le commentaire dans le résultat de la tâche était nul après que l'utilisateur ait soumis une approbation avec un commentaire par @mytharcher
