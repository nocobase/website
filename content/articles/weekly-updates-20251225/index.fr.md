---
title: "Mises à jour hebdomadaires de NocoBase : Optimisations et corrections de bugs"
description: "La mise à jour de cette semaine inclut : Ajout de nouvelles variables système dans le workflow, notamment `instanceId` et `genSnowflakeId`, et plus encore."
---

Résumez les journaux de mise à jour hebdomadaires du produit. Les dernières versions sont disponibles sur [notre blog](https://www.nocobase.com/en/blog/timeline).

**NocoBase est actuellement mis à jour avec trois branches : `main`, `next` et `develop`.**

![version.png](https://static-docs.nocobase.com/ba5f04e27e99c625cb3822da5df07860.png)

* `main` : La version la plus stable à ce jour, recommandée pour l'installation ;
* `next` : Version bêta, contient les nouvelles fonctionnalités à venir et a été testée préliminairement. Il peut y avoir des problèmes connus ou inconnus. Elle est principalement destinée aux utilisateurs testeurs pour recueillir des retours et optimiser davantage les fonctions. Idéale pour les utilisateurs testeurs qui souhaitent découvrir les nouvelles fonctionnalités en avant-première et donner leur avis ;
* `develop` : Version alpha, contient le code de fonctionnalité le plus récent, peut être incomplète ou instable, principalement destinée au développement interne et à l'itération rapide. Adaptée aux utilisateurs techniques intéressés par les fonctionnalités de pointe du produit, mais avec des problèmes potentiels et des fonctions incomplètes. Ne pas utiliser en production.

## main

![main.png](https://static-docs.nocobase.com/47a3c71734c1d0f908b51f9ebd53c0ac.png)

### [v1.9.32](https://www.nocobase.com/en/blog/v1.9.32)

*Date de sortie : 2025-12-24*

### 🎉 Nouvelles fonctionnalités

- **[Workflow]** Ajout de nouvelles variables système dans le workflow, incluant `instanceId` et `genSnowflakeId` ([#8223](https://github.com/nocobase/nocobase/pull/8223)) par @mytharcher

### 🐛 Corrections de bugs

- **[client]** Correction d'un débordement de pile causé par une boucle infinie dans le chargement paresseux des champs d'association d'affichage ([#8262](https://github.com/nocobase/nocobase/pull/8262)) par @zhangzhonghe
- **[Action : Importer des enregistrements]** Correction du problème où l'index de ligne dans le message d'erreur était toujours 1 lorsqu'une erreur était levée dans l'action d'importation ([#8244](https://github.com/nocobase/nocobase/pull/8244)) par @mytharcher
- **[Workflow : Nœud manuel]** Correction du problème où une erreur était levée lors de l'annulation de l'exécution d'un workflow supprimé ([#8258](https://github.com/nocobase/nocobase/pull/8258)) par @mytharcher
- **[Champ de collection : Séquence]** Correction d'une erreur lorsque la commande de réparation de champ-séquence rencontre une collection inexistante dans l'environnement actuel. ([#8251](https://github.com/nocobase/nocobase/pull/8251)) par @cgyrock
- **[Action : Importer des enregistrements Pro]** Correction de la logique de vérification d'unicité qui levait une erreur lorsque la valeur du champ unique était nulle par @mytharcher
- **[Workflow : Approbation]** Correction du rollback en double d'une même transaction par @mytharcher

### [v1.9.31](https://www.nocobase.com/en/blog/v1.9.31)

*Date de sortie : 2025-12-22*

### 🚀 Améliorations

- **[Gestionnaire de tâches asynchrones]** Gestion améliorée des erreurs lors des tâches de nettoyage en ajoutant des mécanismes de capture d'exceptions pour éviter les plantages de l'application ([#8215](https://github.com/nocobase/nocobase/pull/8215)) par @mytharcher
- **[Workflow]** Ajout de l'instance de workflow d'origine à l'API de duplication ([#8225](https://github.com/nocobase/nocobase/pull/8225)) par @mytharcher

### 🐛 Corrections de bugs

- **[client]** Gestion des règles de liaison vides pour éviter les erreurs ([#8239](https://github.com/nocobase/nocobase/pull/8239)) par @zhangzhonghe
- **[Départements]** Correction d'un problème où la recherche agrégée ne pouvait pas localiser les utilisateurs ([#8222](https://github.com/nocobase/nocobase/pull/8222)) par @2013xile

### [v1.9.30](https://www.nocobase.com/en/blog/v1.9.30)

*Date de sortie : 2025-12-19*

### 🚀 Améliorations

- **[Workflow]** Amélioration de la description du champ `changed` dans l'événement de collection ([#8216](https://github.com/nocobase/nocobase/pull/8216)) par @mytharcher

### 🐛 Corrections de bugs

- **[cli]** license-kit est compatible avec le cas où DB_PASSWORD est vide ([#8220](https://github.com/nocobase/nocobase/pull/8220)) par @jiannx
- **[base de données]** Correction de l'incohérence de requête du champ de date entre les sources de données principales et externes ([#8181](https://github.com/nocobase/nocobase/pull/8181)) par @cgyrock
- **[Paramètres de licence]** Correction de l'affichage anormal du plugin sous licence ([#8214](https://github.com/nocobase/nocobase/pull/8214)) par @jiannx
- **[Workflow : Approbation]**

  - Correction du problème où l'approbation créait une association vers un nouvel enregistrement par @mytharcher
  - Correction du problème où l'approbation créait une association plusieurs-à-plusieurs vers de nouveaux enregistrements par @mytharcher

### [v1.9.29](https://www.nocobase.com/en/blog/v1.9.29)

*Date de sortie : 2025-12-18*

### 🐛 Corrections de bugs

- **[Workflow]** Correction du problème où une erreur était levée lors de la suppression d'une version de workflow qui n'est pas la version actuelle ([#8203](https://github.com/nocobase/nocobase/pull/8203)) par @mytharcher
- **[Gestionnaire de migration]** Correction de la description de migration manquante et définition de l'heure actuelle comme valeur par défaut par @cgyrock

## develop

![develop.png](https://static-docs.nocobase.com/7fcdd9456a17286d8a439eee52bcb8d2.png)

### [v2.0.0-alpha.58](https://www.nocobase.com/en/blog/v2.0.0-alpha.58)

*Date de sortie : 2025-12-24*

### 🐛 Corrections de bugs

- **[Employés IA]** Résolution du problème où le contenu du message du nœud llm ne s'affichait pas ([#8257](https://github.com/nocobase/nocobase/pull/8257)) par @heziqiang

### [v2.0.0-alpha.57](https://www.nocobase.com/en/blog/v2.0.0-alpha.57)

*Date de sortie : 2025-12-24*

### 🎉 Nouvelles fonctionnalités

- **[Workflow]** Ajout de nouvelles variables système dans le workflow, incluant `instanceId` et `genSnowflakeId` ([#8223](https://github.com/nocobase/nocobase/pull/8223)) par @mytharcher

### 🚀 Améliorations

- **[client]** Utilisation d'un select pour la configuration de la largeur de la colonne d'opération ([#8218](https://github.com/nocobase/nocobase/pull/8218)) par @katherinehhh
- **[Employés IA]** Correction du problème où l'employé IA ne répondait pas lors de la première soumission d'édition<br/>Suppression de l'employé IA intégré inutile « Avery Form Assistant »<br/>Ajout des permissions de rôle initiales par défaut pour les employés IA intégrés<br/>Amélioration de la gestion des erreurs et du comportement de sortie des employés IA<br/>Ajout de la prise en charge de l'accès de l'IA aux variables de contexte modal<br/>Ajout de la prise en charge des sources de données externes pour l'IA<br/>Correction de la troncature incorrecte de la conversation lorsque l'IA traite de grands volumes de données ([#8191](https://github.com/nocobase/nocobase/pull/8191)) par @heziqiang
- **[Workflow]**

  - Ajout de l'instance de workflow d'origine à l'API de duplication ([#8225](https://github.com/nocobase/nocobase/pull/8225)) par @mytharcher
  - Amélioration de la description du champ `changed` dans l'événement de collection ([#8216](https://github.com/nocobase/nocobase/pull/8216)) par @mytharcher
- **[Gestionnaire de tâches asynchrones]** Gestion améliorée des erreurs lors des tâches de nettoyage en ajoutant des mécanismes de capture d'exceptions pour éviter les plantages de l'application ([#8215](https://github.com/nocobase/nocobase/pull/8215)) par @mytharcher
- **[Bloc : Panneau d'action]** Amélioration de l'affichage des blocs, actions et champs masqués en mode configuration ([#8174](https://github.com/nocobase/nocobase/pull/8174)) par @katherinehhh
- **[Modèles d'interface utilisateur]** Ajout d'un plugin de modèles d'interface utilisateur, offrant la possibilité de réutiliser des modèles de blocs et des modèles de popup. ([#8163](https://github.com/nocobase/nocobase/pull/8163)) par @gchust
- **[Action : Exporter des enregistrements Pro]** Les actions d'importation pro et d'exportation pro prennent en charge le contrôle des permissions par @katherinehhh
- **[Workflow : Approbation]** Mise à jour de `approval.data` vers la dernière version de l'enregistrement en cours d'approbation à la fin de l'exécution, pour correspondre au mode d'affichage « Dernier » enregistrement par @mytharcher

### 🐛 Corrections de bugs

- **[moteur de flux]**

  - Correction du problème de vérification des permissions pour l'ajout d'enregistrements enfants dans une table arborescente ([#8240](https://github.com/nocobase/nocobase/pull/8240)) par @katherinehhh
  - Correction d'un problème où certaines variables liées aux enregistrements de popup de bloc s'affichaient incorrectement. ([#8060](https://github.com/nocobase/nocobase/pull/8060)) par @gchust
  - Correction du problème où les actions ou onglets ajoutés après le glissement d'actions ou d'onglets ne s'affichaient pas. ([#8224](https://github.com/nocobase/nocobase/pull/8224)) par @gchust
  - Problème de vérification des permissions dans les sources de données externes ([#8221](https://github.com/nocobase/nocobase/pull/8221)) par @katherinehhh
  - Correction du problème où les actions de source de données externe étaient masquées malgré l'autorisation ([#8217](https://github.com/nocobase/nocobase/pull/8217)) par @katherinehhh
- **[client]**

  - Gestion des règles de liaison vides pour éviter les erreurs ([#8239](https://github.com/nocobase/nocobase/pull/8239)) par @zhangzhonghe
  - Correction du problème où la colonne d'opération du bloc de table ne pouvait pas être supprimée. ([#8230](https://github.com/nocobase/nocobase/pull/8230)) par @gchust
  - Correction du problème où l'exécution de prévisualisation écrivait la sortie JSX compilée dans stepParams, provoquant la réécriture du code source enregistré. ([#8171](https://github.com/nocobase/nocobase/pull/8171)) par @gchust
  - Correction de l'erreur de téléchargement de pièce jointe S3 Pro et amélioration de l'aperçu des fichiers ([#8211](https://github.com/nocobase/nocobase/pull/8211)) par @katherinehhh
- **[cli]** license-kit est compatible avec le cas où DB_PASSWORD est vide ([#8220](https://github.com/nocobase/nocobase/pull/8220)) par @jiannx
- **[base de données]** Correction de l'incohérence de requête du champ de date entre les sources de données principales et externes ([#8181](https://github.com/nocobase/nocobase/pull/8181)) par @cgyrock
- **[Champ de collection : Séquence]** Correction d'une erreur lorsque la commande de réparation de champ-séquence rencontre une collection inexistante dans l'environnement actuel. ([#8251](https://github.com/nocobase/nocobase/pull/8251)) par @cgyrock
- **[Workflow : Nœud manuel]** Correction du problème où une erreur était levée lors de l'annulation de l'exécution d'un workflow supprimé ([#8258](https://github.com/nocobase/nocobase/pull/8258)) par @mytharcher
- **[Modèles d'interface utilisateur]** Correction d'une erreur où l'ouverture d'un popup de champ d'association utilisait incorrectement un modèle de popup de champ non-association. ([#8233](https://github.com/nocobase/nocobase/pull/8233)) par @gchust
- **[Départements]** Correction d'un problème où la recherche agrégée ne pouvait pas localiser les utilisateurs ([#8222](https://github.com/nocobase/nocobase/pull/8222)) par @2013xile
- **[Champ de collection : Plusieurs-à-plusieurs (tableau)]** Correction d'un problème où les champs plusieurs-à-plusieurs (tableau) ne pouvaient pas être créés lorsque le type de clé cible était l'ID Snowflake (53 bits) ([#8226](https://github.com/nocobase/nocobase/pull/8226)) par @2013xile
- **[Paramètres de licence]** Correction de l'affichage anormal du plugin sous licence ([#8214](https://github.com/nocobase/nocobase/pull/8214)) par @jiannx
- **[Action : Importer des enregistrements]** Correction du problème où l'index de ligne dans le message d'erreur était toujours 1 lorsqu'une erreur était levée dans l'action d'importation ([#8244](https://github.com/nocobase/nocobase/pull/8244)) par @mytharcher
- **[Impression de modèle]** Correction du problème où la demande d'impression de modèle ne fonctionnait pas avec les sources de données externes par @katherinehhh
- **[Workflow : Approbation]**

  - Correction du rollback en double d'une même transaction par @mytharcher
  - Correction du problème où l'approbation créait une association vers un nouvel enregistrement par @mytharcher
  - Correction du problème où l'approbation créait une association plusieurs-à-plusieurs vers de nouveaux enregistrements par @mytharcher

### [v2.0.0-alpha.56](https://www.nocobase.com/en/blog/v2.0.0-alpha.56)

*Date de sortie : 2025-12-18*

### 🚀 Améliorations

- **[client]** Prise en charge de la largeur de colonne personnalisée pour les colonnes de table ([#8200](https://github.com/nocobase/nocobase/pull/8200)) par @katherinehhh

### 🐛 Corrections de bugs

- **[client]** Empêcher le débordement de la largeur totale des lignes lors du redimensionnement des colonnes ([#8166](https://github.com/nocobase/nocobase/pull/8166)) par @zhangzhonghe
- **[moteur de flux]** Correction du problème où la soumission du formulaire dans un modal réutilisé via l'uid popup ne rafraîchissait pas les données du bloc. ([#8202](https://github.com/nocobase/nocobase/pull/8202)) par @gchust
- **[Champ de collection : Formule]** Correction du problème où les champs BigInt ne pouvaient pas être ajoutés aux blocs Détail et Formulaire ([#8201](https://github.com/nocobase/nocobase/pull/8201)) par @katherinehhh
- **[Workflow]** Correction du problème où une erreur était levée lors de la suppression d'une version de workflow qui n'est pas la version actuelle ([#8203](https://github.com/nocobase/nocobase/pull/8203)) par @mytharcher
