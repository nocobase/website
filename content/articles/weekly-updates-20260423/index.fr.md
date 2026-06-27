---
title: "Mises à jour hebdomadaires｜Amélioration de la capacité des employés IA à analyser les documents téléchargés"
description: "Ceci est un résumé des mises à jour et améliorations des fonctionnalités de NocoBase du 16 au 23 avril 2026."
---

Résumez les journaux de mise à jour hebdomadaires du produit. Les dernières versions sont disponibles sur [notre blog](https://www.nocobase.com/en/blog/timeline).

**NocoBase est actuellement mis à jour avec trois branches : `main`, `next` et `develop`.**

![version.png](https://static-docs.nocobase.com/ba5f04e27e99c625cb3822da5df07860.png)

* `main` : La version la plus stable à ce jour, recommandée pour l'installation ;
* `next` : Version bêta, contient les nouvelles fonctionnalités à venir et a été testée préliminairement. Il peut y avoir des problèmes connus ou inconnus. Elle est principalement destinée aux utilisateurs testeurs pour recueillir des retours et optimiser davantage les fonctions. Idéale pour les utilisateurs testeurs qui souhaitent découvrir les nouvelles fonctionnalités en avant-première et donner leur avis ;
* `develop` : Version alpha, contient le code de fonctionnalité le plus récent, peut être incomplète ou instable, principalement destinée au développement interne et à l'itération rapide. Adaptée aux utilisateurs techniques intéressés par les fonctionnalités de pointe du produit, mais avec des problèmes potentiels et des fonctions incomplètes. Ne convient pas à une utilisation en production.

## main

![main.png](https://static-docs.nocobase.com/47a3c71734c1d0f908b51f9ebd53c0ac.png)

### [v2.0.41](https://www.nocobase.com/en/blog/v2.0.41)

*Date de sortie : 2026-04-22*

### 🎉 Nouvelles fonctionnalités

- **[Auth : OIDC]** L'attribut de mappage prend désormais en charge les champs personnalisés par @chenzhizdt
- **[DingTalk]** DingTalk : notifications, connexion automatique dans DingTalk et synchronisation des utilisateurs. par @chenzhizdt

### 🚀 Améliorations

- **[ai]** L'employé IA et la base de connaissances prennent désormais en charge des types de fichiers supplémentaires pour le téléchargement (.xlsx, .xls, .csv, .md, .json) ([#9172](https://github.com/nocobase/nocobase/pull/9172)) par @cgyrock
- **[non défini]** Ajout de la traduction arabe pour la section guide et la navigation ([#9141](https://github.com/nocobase/nocobase/pull/9141)) par @saraTabbane

### 🐛 Corrections de bugs

- **[gestionnaire-de-sources-de-données]** Correction de la réinitialisation des champs de pourcentage en numérique lors de la resynchronisation des sources de données externes ([#9178](https://github.com/nocobase/nocobase/pull/9178)) par @jiannx
- **[client]**

  - Correction du problème où la valeur par défaut ne prenait pas effet après la création d'un enregistrement. ([#9185](https://github.com/nocobase/nocobase/pull/9185)) par @gchust
  - Correction du problème où le bouton « Ajouter un onglet » était trop proche du bord droit ([#9177](https://github.com/nocobase/nocobase/pull/9177)) par @zhangzhonghe
- **[Départements]** Correction d'un problème où la synchronisation répétée des départements ne pouvait pas mettre à jour l'ordre de tri des départements ([#9173](https://github.com/nocobase/nocobase/pull/9173)) par @2013xile
- **[Source de données : Principale]** Correction de la synchronisation des champs depuis la base de données pour les vues connectées lorsque le nom de la collection diffère du nom de la vue de la base de données ([#9155](https://github.com/nocobase/nocobase/pull/9155)) par @2013xile
- **[Workflow : JavaScript]** Correction d'un problème de sécurité lié à l'exécution de scripts en mode `node:vm` ([#9084](https://github.com/nocobase/nocobase/pull/9084)) par @mytharcher
- **[IA : Base de connaissances]** Correction du problème où la base de données vectorielle n'était pas synchronisée lors de la suppression de documents de la base de connaissances. par @cgyrock
- **[WeCom]** Correction de l'ordre des départements manquant lors de la synchronisation des départements depuis WeCom par @2013xile

### [v2.0.40](https://www.nocobase.com/en/blog/v2.0.40)

*Date de sortie : 2026-04-20*

### 🐛 Corrections de bugs

- **[client]** Correction d'un problème où la mise à jour des valeurs de sous-tableau via l'affectation de champ entraînait une contamination des données. ([#9163](https://github.com/nocobase/nocobase/pull/9163)) par @gchust
- **[gestionnaire-de-sources-de-données]** Correction d'un problème où les champs de séquence pouvaient être modifiés en chaîne après la synchronisation de la base de données ([#9143](https://github.com/nocobase/nocobase/pull/9143)) par @2013xile
- **[Gestionnaire de fichiers]** Retourne null lorsque l'URL de prévisualisation est manquante ([#9104](https://github.com/nocobase/nocobase/pull/9104)) par @gaston98765
- **[Workflow : JavaScript]** Correction d'un problème de sécurité lié à l'exécution de scripts en mode `node:vm` ([#9084](https://github.com/nocobase/nocobase/pull/9084)) par @mytharcher
- **[Départements]**

  - Correction des listes de départements dans la gestion des départements qui ne suivaient pas l'ordre du champ `sort` ([#9150](https://github.com/nocobase/nocobase/pull/9150)) par @2013xile
  - Correction des valeurs de département principal manquantes ou obsolètes après l'enregistrement des départements utilisateur ([#9156](https://github.com/nocobase/nocobase/pull/9156)) par @2013xile

### [v2.0.39](https://www.nocobase.com/en/blog/v2.0.39)

*Date de sortie : 2026-04-18*

### 🚀 Améliorations

- **[Départements]** Affichage du champ de clé étrangère `parentId` de la collection de départements dans l'interface utilisateur ([#9130](https://github.com/nocobase/nocobase/pull/9130)) par @2013xile

### 🐛 Corrections de bugs

- **[gestionnaire-de-sources-de-données]** Correction de la synchronisation des champs de la collection de fichiers supprimant le champ `preview` ([#9129](https://github.com/nocobase/nocobase/pull/9129)) par @2013xile
- **[client]**

  - Correction d'un problème où le composant de champ d'association était incorrect dans les paramètres de valeur de champ. ([#9063](https://github.com/nocobase/nocobase/pull/9063)) par @gchust
  - Correction de la hauteur et de la largeur excessives des onglets en mode de configuration de page ([#9144](https://github.com/nocobase/nocobase/pull/9144)) par @zhangzhonghe
- **[base de données]** Correction des risques d'injection SQL dans le chargement eager récursif d'arbres et l'initialisation du tri limité ([#9133](https://github.com/nocobase/nocobase/pull/9133)) par @2013xile
- **[Visualisation de données]** Correction du tri des blocs de graphiques pour utiliser des mesures et dimensions aliasées dans les requêtes agrégées ([#9131](https://github.com/nocobase/nocobase/pull/9131)) par @2013xile
- **[Collection : SQL]** Correction de la validation SQL manquante lors des mises à jour de collections SQL ([#9134](https://github.com/nocobase/nocobase/pull/9134)) par @2013xile

### [v2.0.38](https://www.nocobase.com/en/blog/v2.0.38)

*Date de sortie : 2026-04-16*

### 🎉 Nouvelles fonctionnalités

- **[Employés IA]** Amélioration de la capacité des employés IA à analyser les documents téléchargés ([#9126](https://github.com/nocobase/nocobase/pull/9126)) par @cgyrock

### 🚀 Améliorations

- **[journaliseur]** Ajout des informations `referer` aux journaux de requêtes ([#9110](https://github.com/nocobase/nocobase/pull/9110)) par @2013xile
- **[non défini]** Synchronisation des documents traduits sur les variables d'environnement et le mode cluster avec les dernières mises à jour chinoises. ([#9115](https://github.com/nocobase/nocobase/pull/9115)) par @mytharcher
- **[Employés IA]** Après la sélection d'un bloc par l'employé IA, remplir la pièce jointe du formulaire dans la zone de téléchargement ([#9127](https://github.com/nocobase/nocobase/pull/9127)) par @cgyrock
- **[Workflow : Nœud manuel]** Utilisation de `simplePagination` sur les collections liées aux tâches de workflow pour de meilleures performances de liste ([#9117](https://github.com/nocobase/nocobase/pull/9117)) par @mytharcher
- **[Workflow : Approbation]** Utilisation de `simplePagination` sur les collections `approvals` et `approvalRecords` pour de meilleures performances de liste par @mytharcher

### 🐛 Corrections de bugs

- **[client]**

  - Correction des options facultatives des champs à sélection unique dans la configuration des règles de champ qui sont vides ([#9119](https://github.com/nocobase/nocobase/pull/9119)) par @jiannx
  - Correction des paramètres de valeur par défaut incorrects pour le sous-tableau dans le formulaire. ([#9087](https://github.com/nocobase/nocobase/pull/9087)) par @gchust
- **[Notification : Message dans l'application]** Correction du problème où le composant de sélection du destinataire ne fonctionnait pas correctement ([#9123](https://github.com/nocobase/nocobase/pull/9123)) par @mytharcher
- **[Employés IA]** Correction du problème où les paramètres baseURL du service LLM google-gen-ai ne prenaient pas effet ([#9107](https://github.com/nocobase/nocobase/pull/9107)) par @cgyrock
- **[Gestionnaire d'e-mails]** Suppression de l'invite de fermeture du formulaire après l'envoi réussi de l'e-mail par @jiannx

## next

![next.png](https://static-docs.nocobase.com/8ed17a0f08cc585018f6de6c8b13947d.png)

### [v2.1.0-beta.14](https://www.nocobase.com/en/blog/v2.1.0-beta.14)

*Date de sortie : 2026-04-20*

### 🎉 Nouvelles fonctionnalités

- **[Calendrier]** bloc de calendrier v2 ([#9092](https://github.com/nocobase/nocobase/pull/9092)) par @jiannx
- **[Employés IA]** Amélioration de la capacité des employés IA à analyser les documents téléchargés ([#9126](https://github.com/nocobase/nocobase/pull/9126)) par @cgyrock
- **[Bloc : Arbre]** Ajout d'un bloc de filtre d'arbre ([#9016](https://github.com/nocobase/nocobase/pull/9016)) par @jiannx
- **[Gestionnaire d'e-mails]** Gmail prend désormais en charge l'envoi d'e-mails avec des alias par @jiannx

### 🚀 Améliorations

- **[non défini]**

  - Ajout de la traduction arabe pour la section guide et la navigation ([#9141](https://github.com/nocobase/nocobase/pull/9141)) par @saraTabbane
  - Synchronisation des documents traduits sur les variables d'environnement et le mode cluster avec les dernières mises à jour chinoises. ([#9115](https://github.com/nocobase/nocobase/pull/9115)) par @mytharcher
  - Ajout de la traduction arabe pour la page d'accueil de la documentation ([#9043](https://github.com/nocobase/nocobase/pull/9043)) par @gaston98765
  - Ajout de la cohérence de la table des matières dans les README localisés ([#9038](https://github.com/nocobase/nocobase/pull/9038)) par @gaston98765
  - Ajout de la table des matières au README français ([#9037](https://github.com/nocobase/nocobase/pull/9037)) par @saraTabbane
  - Docs : ajout de la traduction arabe pour les pages d'introduction « get-started » ([#9044](https://github.com/nocobase/nocobase/pull/9044)) par @gaston98765
- **[journaliseur]** Ajout des informations `referer` aux journaux de requêtes ([#9110](https://github.com/nocobase/nocobase/pull/9110)) par @2013xile
- **[client]** ajout d'un interrupteur de vérification de champ obligatoire dans le formulaire ([#9060](https://github.com/nocobase/nocobase/pull/9060)) par @jiannx
- **[base de données]** Optimisation des requêtes de comptage du référentiel en n'activant DISTINCT que lorsque des includes sont présents. ([#9094](https://github.com/nocobase/nocobase/pull/9094)) par @mytharcher
- **[Départements]** Affichage du champ de clé étrangère `parentId` de la collection de départements dans l'interface utilisateur ([#9130](https://github.com/nocobase/nocobase/pull/9130)) par @2013xile
- **[Employés IA]** Après la sélection d'un bloc par l'employé IA, remplir la pièce jointe du formulaire dans la zone de téléchargement ([#9127](https://github.com/nocobase/nocobase/pull/9127)) par @cgyrock
- **[Workflow : Nœud manuel]** Utilisation de `simplePagination` sur les collections liées aux tâches de workflow pour de meilleures performances de liste ([#9117](https://github.com/nocobase/nocobase/pull/9117)) par @mytharcher
- **[Workflow : Approbation]** Utilisation de `simplePagination` sur les collections `approvals` et `approvalRecords` pour de meilleures performances de liste par @mytharcher

### 🐛 Corrections de bugs

- **[client]**

  - Correction d'un problème où la mise à jour des valeurs de sous-tableau via l'affectation de champ entraînait une contamination des données. ([#9163](https://github.com/nocobase/nocobase/pull/9163)) par @gchust
  - Correction de la hauteur et de la largeur excessives des onglets en mode de configuration de page ([#9144](https://github.com/nocobase/nocobase/pull/9144)) par @zhangzhonghe
  - Correction d'un problème où le composant de champ d'association était incorrect dans les paramètres de valeur de champ. ([#9063](https://github.com/nocobase/nocobase/pull/9063)) par @gchust
  - Correction des options facultatives des champs à sélection unique dans la configuration des règles de champ qui sont vides ([#9119](https://github.com/nocobase/nocobase/pull/9119)) par @jiannx
  - Correction des paramètres de valeur par défaut incorrects pour le sous-tableau dans le formulaire. ([#9087](https://github.com/nocobase/nocobase/pull/9087)) par @gchust
  - correction de l'erreur d'ajout de champ plusieurs-à-plusieurs dans le sous-tableau ([#9070](https://github.com/nocobase/nocobase/pull/9070)) par @jiannx
  - Correction d'un problème où la fenêtre contextuelle de sélection d'enregistrement à partir du bouton de sélection d'un sous-tableau ne pouvait pas résoudre correctement les valeurs des variables de l'élément parent. ([#8996](https://github.com/nocobase/nocobase/pull/8996)) par @gchust
- **[gestionnaire-de-sources-de-données]**

  - Correction d'un problème où les champs de séquence pouvaient être modifiés en chaîne après la synchronisation de la base de données ([#9143](https://github.com/nocobase/nocobase/pull/9143)) par @2013xile
  - Correction de la synchronisation des champs de la collection de fichiers supprimant le champ `preview` ([#9129](https://github.com/nocobase/nocobase/pull/9129)) par @2013xile
- **[base de données]** Correction des risques d'injection SQL dans le chargement eager récursif d'arbres et l'initialisation du tri limité ([#9133](https://github.com/nocobase/nocobase/pull/9133)) par @2013xile
- **[non défini]** Correction d'une erreur de rendu dans le bloc de ressource personnalisé lorsque la ressource n'existe pas ([#9095](https://github.com/nocobase/nocobase/pull/9095)) par @Molunerfinn
- **[utils]** Ajout d'un contrôle de sécurité pour l'envoi de requêtes HTTP serveur, afin d'éviter une éventuelle SSRF ([#9079](https://github.com/nocobase/nocobase/pull/9079)) par @mytharcher
  Référence : [Variables d'environnement](https://docs.nocobase.com/get-started/installation/env)
- **[moteur-de-flux]**

  - Correction du problème où les champs plusieurs-à-un provenant de sources de données externes ne pouvaient pas être ajoutés dans le bloc de tableau ([#9068](https://github.com/nocobase/nocobase/pull/9068)) par @jiannx
  - Correction de l'erreur d'observateur aléatoire lorsque la visibilité de la page change ([#9067](https://github.com/nocobase/nocobase/pull/9067)) par @zhangzhonghe
- **[Source de données : Principale]** Correction de la synchronisation des champs depuis la base de données pour les vues connectées lorsque le nom de la collection diffère du nom de la vue de la base de données ([#9155](https://github.com/nocobase/nocobase/pull/9155)) par @2013xile
- **[Gestionnaire de fichiers]** Retourne null lorsque l'URL de prévisualisation est manquante ([#9104](https://github.com/nocobase/nocobase/pull/9104)) par @gaston98765
- **[Départements]**

  - Correction des valeurs de département principal manquantes ou obsolètes après l'enregistrement des départements utilisateur ([#9156](https://github.com/nocobase/nocobase/pull/9156)) par @2013xile
  - Correction des listes de départements dans la gestion des départements qui ne suivaient pas l'ordre du champ `sort` ([#9150](https://github.com/nocobase/nocobase/pull/9150)) par @2013xile
- **[Workflow : JavaScript]** Correction d'un problème de sécurité lié à l'exécution de scripts en mode `node:vm` ([#9084](https://github.com/nocobase/nocobase/pull/9084)) par @mytharcher
- **[Collection : SQL]** Correction de la validation SQL manquante lors des mises à jour de collections SQL ([#9134](https://github.com/nocobase/nocobase/pull/9134)) par @2013xile
- **[Visualisation de données]** Correction du tri des blocs de graphiques pour utiliser des mesures et dimensions aliasées dans les requêtes agrégées ([#9131](https://github.com/nocobase/nocobase/pull/9131)) par @2013xile
- **[Notification : Message dans l'application]** Correction du problème où le composant de sélection du destinataire ne fonctionnait pas correctement ([#9123](https://github.com/nocobase/nocobase/pull/9123)) par @mytharcher
- **[Employés IA]** Correction du problème où les paramètres baseURL du service LLM google-gen-ai ne prenaient pas effet ([#9107](https://github.com/nocobase/nocobase/pull/9107)) par @cgyrock
- **[Gestionnaire de notifications]** Optimisation des performances d'envoi de notifications dans l'application dans les scénarios de workflow ([#9066](https://github.com/nocobase/nocobase/pull/9066)) par @mytharcher
- **[Contrôle d'accès]** Correction d'un problème où l'effacement des valeurs de relation avec un tableau vide pouvait échouer sous ACL ([#9059](https://github.com/nocobase/nocobase/pull/9059)) par @2013xile
- **[Champ de collection : Code]** Correction de l'interface utilisateur des champs de code ([#9061](https://github.com/nocobase/nocobase/pull/9061)) par @2013xile
- **[Gestionnaire d'e-mails]** Suppression de l'invite de fermeture du formulaire après l'envoi réussi de l'e-mail par @jiannx

![develop.png](https://static-docs.nocobase.com/7fcdd9456a17286d8a439eee52bcb8d2.png)

### [v2.1.0-alpha.20](https://www.nocobase.com/en/blog/v2.1.0-alpha.20)

*Date de sortie : 2026-04-20*

### 🎉 Nouvelles fonctionnalités

- **[Workflow]** Ajout d'un champ de journal pour les jobs, afin d'afficher le contenu du journal de certains nœuds pour le débogage ([#9165](https://github.com/nocobase/nocobase/pull/9165)) par @mytharcher

### 🚀 Améliorations

- **[non défini]** Ajout de la traduction arabe pour la section guide et la navigation ([#9141](https://github.com/nocobase/nocobase/pull/9141)) par @saraTabbane
- **[cli]** Amélioration de la sortie d'aide de l'API CLI générée et du regroupement des commandes ACL ([#9166](https://github.com/nocobase/nocobase/pull/9166)) par @2013xile

### 🐛 Corrections de bugs

- **[client]** Correction d'un problème où la mise à jour des valeurs de sous-tableau via l'affectation de champ entraînait une contamination des données. ([#9163](https://github.com/nocobase/nocobase/pull/9163)) par @gchust
- **[gestionnaire-de-sources-de-données]** Correction d'un problème où les champs de séquence pouvaient être modifiés en chaîne après la synchronisation de la base de données ([#9143](https://github.com/nocobase/nocobase/pull/9143)) par @2013xile
- **[cli]** Correction des échecs de connexion OAuth CLI sur Windows causés par des URL d'autorisation longues ([#9159](https://github.com/nocobase/nocobase/pull/9159)) par @2013xile
- **[Départements]** Correction des valeurs de département principal manquantes ou obsolètes après l'enregistrement des départements utilisateur ([#9156](https://github.com/nocobase/nocobase/pull/9156)) par @2013xile
- **[Source de données : Principale]** Correction de la synchronisation des champs depuis la base de données pour les vues connectées lorsque le nom de la collection diffère du nom de la vue de la base de données ([#9155](https://github.com/nocobase/nocobase/pull/9155)) par @2013xile
- **[Gestionnaire de fichiers]** Retourne null lorsque l'URL de prévisualisation est manquante ([#9104](https://github.com/nocobase/nocobase/pull/9104)) par @gaston98765

### [v2.1.0-alpha.19](https://www.nocobase.com/en/blog/v2.1.0-alpha.19)

*Date de sortie : 2026-04-19*

### 🎉 Nouvelles fonctionnalités

- **[cli-v1]** résoudre le chemin de stockage à partir de l'env ([#9147](https://github.com/nocobase/nocobase/pull/9147)) par @chenos
- **[Calendrier]** bloc de calendrier v2 ([#9092](https://github.com/nocobase/nocobase/pull/9092)) par @jiannx

### 🚀 Améliorations

- **[cli]** Amélioration du repli d'aide `nb api` et unification des messages d'avertissement pour les échecs de démarrage d'exécution ([#9153](https://github.com/nocobase/nocobase/pull/9153)) par @2013xile
- **[Départements]** Affichage du champ de clé étrangère `parentId` de la collection de départements dans l'interface utilisateur ([#9130](https://github.com/nocobase/nocobase/pull/9130)) par @2013xile

### 🐛 Corrections de bugs

- **[client]** Correction de la hauteur et de la largeur excessives des onglets en mode de configuration de page ([#9144](https://github.com/nocobase/nocobase/pull/9144)) par @zhangzhonghe
- **[base de données]** Correction des risques d'injection SQL dans le chargement eager récursif d'arbres et l'initialisation du tri limité ([#9133](https://github.com/nocobase/nocobase/pull/9133)) par @2013xile
- **[Workflow : JavaScript]** Correction d'un problème de sécurité lié à l'exécution de scripts en mode `node:vm` ([#9084](https://github.com/nocobase/nocobase/pull/9084)) par @mytharcher
- **[IdP : OAuth]** Correction des échecs d'enregistrement du client OAuth et de rafraîchissement du jeton après le redémarrage du service ([#9139](https://github.com/nocobase/nocobase/pull/9139)) par @2013xile
- **[Départements]** Correction des listes de départements dans la gestion des départements qui ne suivaient pas l'ordre du champ `sort` ([#9150](https://github.com/nocobase/nocobase/pull/9150)) par @2013xile
- **[Collection : SQL]** Correction de la validation SQL manquante lors des mises à jour de collections SQL ([#9134](https://github.com/nocobase/nocobase/pull/9134)) par @2013xile
- **[Visualisation de données]** Correction du tri des blocs de graphiques pour utiliser des mesures et dimensions aliasées dans les requêtes agrégées ([#9131](https://github.com/nocobase/nocobase/pull/9131)) par @2013xile

### [v2.1.0-alpha.18](https://www.nocobase.com/en/blog/v2.1.0-alpha.18)

*Date de sortie : 2026-04-17*

### 🐛 Corrections de bugs

- **[gestionnaire-de-sources-de-données]** Correction de la synchronisation des champs de la collection de fichiers supprimant le champ `preview` ([#9129](https://github.com/nocobase/nocobase/pull/9129)) par @2013xile

### [v2.1.0-alpha.17](https://www.nocobase.com/en/blog/v2.1.0-alpha.17)

*Date de sortie : 2026-04-17*

### 🎉 Nouvelles fonctionnalités

- **[cli]** refonte de l'interface CLI NocoBase ([#9122](https://github.com/nocobase/nocobase/pull/9122)) par @chenos
- **[Employés IA]** Amélioration de la capacité des employés IA à analyser les documents téléchargés ([#9126](https://github.com/nocobase/nocobase/pull/9126)) par @cgyrock

### 🚀 Améliorations

- **[non défini]**

  - Synchronisation des documents traduits sur les variables d'environnement et le mode cluster avec les dernières mises à jour chinoises. ([#9115](https://github.com/nocobase/nocobase/pull/9115)) par @mytharcher
  - Docs : ajout de la traduction arabe pour les pages d'introduction « get-started » ([#9044](https://github.com/nocobase/nocobase/pull/9044)) par @gaston98765
  - Ajout de la traduction arabe pour la page d'accueil de la documentation ([#9043](https://github.com/nocobase/nocobase/pull/9043)) par @gaston98765
- **[journaliseur]** Ajout des informations `referer` aux journaux de requêtes ([#9110](https://github.com/nocobase/nocobase/pull/9110)) par @2013xile
- **[client]** ajout d'un interrupteur de vérification de champ obligatoire dans le formulaire ([#9060](https://github.com/nocobase/nocobase/pull/9060)) par @jiannx
- **[Workflow : Nœud manuel]** Utilisation de `simplePagination` sur les collections liées aux tâches de workflow pour de meilleures performances de liste ([#9117](https://github.com/nocobase/nocobase/pull/9117)) par @mytharcher
- **[Employés IA]** Après la sélection d'un bloc par l'employé IA, remplir la pièce jointe du formulaire dans la zone de téléchargement ([#9127](https://github.com/nocobase/nocobase/pull/9127)) par @cgyrock
- **[Workflow : Approbation]** Utilisation de `simplePagination` sur les collections `approvals` et `approvalRecords` pour de meilleures performances de liste par @mytharcher

### 🐛 Corrections de bugs

- **[client]**

  - Correction des options facultatives des champs à sélection unique dans la configuration des règles de champ qui sont vides ([#9119](https://github.com/nocobase/nocobase/pull/9119)) par @jiannx
  - Correction d'un problème où le composant de champ d'association était incorrect dans les paramètres de valeur de champ. ([#9063](https://github.com/nocobase/nocobase/pull/9063)) par @gchust
  - Correction des paramètres de valeur par défaut incorrects pour le sous-tableau dans le formulaire. ([#9087](https://github.com/nocobase/nocobase/pull/9087)) par @gchust
- **[utils]** Ajout d'un contrôle de sécurité pour l'envoi de requêtes HTTP serveur, afin d'éviter une éventuelle SSRF ([#9079](https://github.com/nocobase/nocobase/pull/9079)) par @mytharcher
  Référence : [Variables d'environnement](https://docs.nocobase.com/get-started/installation/env)
- **[Workflow : Nœud de boucle]** Correction des validations des nœuds de workflow ([#9111](https://github.com/nocobase/nocobase/pull/9111)) par @mytharcher
- **[Notification : Message dans l'application]** Correction du problème où le composant de sélection du destinataire ne fonctionnait pas correctement ([#9123](https://github.com/nocobase/nocobase/pull/9123)) par @mytharcher
- **[IdP : OAuth]** Correction de l'accès OAuth pour les requêtes API régulières ([#9120](https://github.com/nocobase/nocobase/pull/9120)) par @2013xile
- **[Employés IA]**

  - Correction du tri des requêtes agrégées abandonné par ACL ([#9099](https://github.com/nocobase/nocobase/pull/9099)) par @2013xile
  - Correction du problème où les paramètres baseURL du service LLM google-gen-ai ne prenaient pas effet ([#9107](https://github.com/nocobase/nocobase/pull/9107)) par @cgyrock
- **[Gestionnaire d'e-mails]** Suppression de l'invite de fermeture du formulaire après l'envoi réussi de l'e-mail par @jiannx
