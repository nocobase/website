---
title: "Mises à jour hebdomadaires de NocoBase : Optimisations et corrections de bugs"
description: "Les mises à jour de cette semaine incluent : la prise en charge de l'affichage des tables définies par les plugins dans la source de données principale, des exécutions de test pour les nœuds, et plus encore."
---

Résumez les journaux de mise à jour hebdomadaires du produit. Les dernières versions sont disponibles sur [notre blog](https://www.nocobase.com/en/blog/timeline).

**NocoBase est actuellement mis à jour avec trois branches : `main`, `next` et `develop`.**

![version.png](https://static-docs.nocobase.com/ba5f04e27e99c625cb3822da5df07860.png)

* `main` : La version la plus stable à ce jour, recommandée pour l'installation ;
* `next` : Version bêta, contient les nouvelles fonctionnalités à venir et a été testée de manière préliminaire. Il peut y avoir des problèmes connus ou inconnus. Elle est principalement destinée aux utilisateurs testeurs pour recueillir des retours et optimiser davantage les fonctionnalités. Idéale pour les utilisateurs testeurs qui souhaitent découvrir les nouvelles fonctionnalités en avant-première et donner leur avis ;
* `develop` : Version alpha, contient le code de fonctionnalité le plus récent, peut être incomplète ou instable, principalement destinée au développement interne et à l'itération rapide. Adaptée aux utilisateurs techniques intéressés par les fonctionnalités de pointe du produit, mais avec des problèmes potentiels et des fonctions incomplètes. Ne convient pas à une utilisation en production.

## main

![main.png](https://static-docs.nocobase.com/47a3c71734c1d0f908b51f9ebd53c0ac.png)

### [v1.8.10](https://www.nocobase.com/en/blog/v1.8.10)

*Date de sortie : 2025-07-24*

#### 🎉 Nouvelles fonctionnalités

* **[Auth : SAML 2.0]** Prise en charge de la redirection automatique vers l'URL SSO lorsque l'utilisateur n'est pas authentifié par @2013xile
* **[serveur]** Prise en charge de la configuration de la limite de taille du corps de la requête via une variable d'environnement ([#7273](https://github.com/nocobase/nocobase/pull/7273)) par @aaaaaajie
* **[Workflow : nœud parallèle]** Ajout du mode « Tout réglé » pour le nœud parallèle ([#7263](https://github.com/nocobase/nocobase/pull/7263)) par @mytharcher
* **[Adaptateur de file d'attente Redis]** Ajout d'un adaptateur Redis pour la file d'attente d'événements par @mytharcher

#### 🚀 Améliorations

* **[Workflow]** Ajout d'une constante de type json pour la variable de test ([#7274](https://github.com/nocobase/nocobase/pull/7274)) par @mytharcher
* **[Intégration IA]** Suppression de `await` pour l'appel de `saveJob` ([#7275](https://github.com/nocobase/nocobase/pull/7275)) par @mytharcher
* **[Workflow : Calcul JSON]** Rendre le nœud de requête JSON testable par @mytharcher
* **[serveur]** Rendre la file d'attente mémoire concurrente disponible lorsque le traitement des éléments n'est pas complet ([#7267](https://github.com/nocobase/nocobase/pull/7267)) par @mytharcher
* **[base de données]** Active automatiquement la pagination simple lorsque l'ensemble de données dépasse un seuil ([#7227](https://github.com/nocobase/nocobase/pull/7227)) par @aaaaaajie
* **[Workflow : nœud manuel]** storePopupContext prend en charge l'enregistrement du contexte par défaut ([#7264](https://github.com/nocobase/nocobase/pull/7264)) par @zhangzhonghe
* **[Adaptateur de file d'attente Redis]** Rendre la file d'attente concurrente disponible lorsque le traitement des éléments n'est pas complet pour l'adaptateur Redis par @mytharcher

#### 🐛 Corrections de bugs

* **[client]**
  * la recherche floue ne fonctionne pas dans le champ d'association de sélection lors de l'utilisation d'une formule comme champ de titre ([#7280](https://github.com/nocobase/nocobase/pull/7280)) par @katherinehhh
  * variable d'objet actuel manquante dans les règles de liaison de sous-tableau ([#7266](https://github.com/nocobase/nocobase/pull/7266)) par @katherinehhh
  * Le paramètre du champ de titre du sélecteur de données est invalide ([#7251](https://github.com/nocobase/nocobase/pull/7251)) par @zhangzhonghe
  * Correction d'un problème où les champs Markdown n'étaient pas rendus correctement dans la vue détaillée. ([#7257](https://github.com/nocobase/nocobase/pull/7257)) par @aaaaaajie
  * Après les modifications de champ, les champs d'association qui dépendent de ce champ n'ont pas effacé leurs valeurs ([#7262](https://github.com/nocobase/nocobase/pull/7262)) par @zhangzhonghe
  * problème d'affichage lorsque des variables de date obsolètes sont utilisées dans les champs de date des données historiques ([#7253](https://github.com/nocobase/nocobase/pull/7253)) par @katherinehhh
* **[base de données]**
  * Résolution de l'échec de la pagination simple automatique causé par la convention de dénomination des tables. ([#7256](https://github.com/nocobase/nocobase/pull/7256)) par @aaaaaajie
  * Correction d'un échec lors de l'exportation de grands ensembles de données depuis PostgreSQL ([#7228](https://github.com/nocobase/nocobase/pull/7228)) par @aaaaaajie
  * Correction d'un problème où le tri par clé primaire par défaut provoquait un échec de chargement de la liste lors de l'utilisation d'une source de données externe MSSQL dans un bloc de tableau. ([#7259](https://github.com/nocobase/nocobase/pull/7259)) par @aaaaaajie
* **[auth]** Correction du problème où un `secret` vide dans la configuration de la sous-application empêche la connexion ([#7239](https://github.com/nocobase/nocobase/pull/7239)) par @2013xile
* **[Gestionnaire de sources de données]** Correction de la préservation des attributs de source de données externes dans la configuration de la collection ([#7249](https://github.com/nocobase/nocobase/pull/7249)) par @aaaaaajie
* **[Action : Modification par lot]** Impossible d'effectuer une modification par lot et une mise à jour par lot dans le sélecteur de données ([#7250](https://github.com/nocobase/nocobase/pull/7250)) par @zhangzhonghe
* **[Workflow]** Correction de la mauvaise version de la dépendance ([#7258](https://github.com/nocobase/nocobase/pull/7258)) par @mytharcher
* **[Source de données : Oracle externe]** Correction de la préservation des attributs de source de données externes dans la configuration de la collection par @aaaaaajie
* **[Workflow : Approbation]** L'URL du bouton Lien pointe vers une popup sur la page actuelle, mais cliquer dessus affiche une erreur 404 par @zhangzhonghe
* **[Gestionnaire d'e-mails]** la collection de relations entre les messages et les étiquettes est exceptionnelle sous mysql par @jiannx

### [v1.8.7](https://www.nocobase.com/en/blog/v1.8.7)

*Date de sortie : 2025-07-18*

#### 🎉 Nouvelles fonctionnalités

- **[Workflow : nœud de calcul de date]** Prise en charge de l'exécution de test du nœud par @mytharcher

#### 🚀 Améliorations

- **[client]** Sélecteur de couleurs : Ajout de quatre couleurs recommandées ([#7226](https://github.com/nocobase/nocobase/pull/7226)) par @zhangzhonghe
- **[Workflow]** Rendre la comparaison compatible pour les valeurs de date ([#7237](https://github.com/nocobase/nocobase/pull/7237)) par @mytharcher

#### 🐛 Corrections de bugs

- **[client]**
  * les règles de style ne fonctionnent pas sur la colonne d'action du tableau ([#7225](https://github.com/nocobase/nocobase/pull/7225)) par @katherinehhh
  * Lors de la suppression d'un menu, les données correspondantes dans la table uiSchemas ne sont pas supprimées ([#7232](https://github.com/nocobase/nocobase/pull/7232)) par @zhangzhonghe
  * Éviter que les champs non-association soient sélectionnés dans les appends ([#7231](https://github.com/nocobase/nocobase/pull/7231)) par @mytharcher
- **[Workflow : Sous-flux]** Correction d'une erreur levée lorsque le signal de rappel arrive mais que l'exécution en attente n'est pas sur l'instance actuelle par @mytharcher

## next

![next.png](https://static-docs.nocobase.com/8ed17a0f08cc585018f6de6c8b13947d.png)

### [v1.9.0-beta.5](https://www.nocobase.com/en/blog/v1.9.0-beta.5)

*Date de sortie : 2025-07-24*

#### 🎉 Nouvelles fonctionnalités

- **[serveur]** Prise en charge de la configuration de la limite de taille du corps de la requête via une variable d'environnement ([#7273](https://github.com/nocobase/nocobase/pull/7273)) par @aaaaaajie
- **[Workflow : nœud parallèle]** Ajout du mode « Tout réglé » pour le nœud parallèle ([#7263](https://github.com/nocobase/nocobase/pull/7263)) par @mytharcher
- **[Auth : SAML 2.0]** Prise en charge de la redirection automatique vers l'URL SSO lorsque l'utilisateur n'est pas authentifié par @2013xile
- **[Adaptateur de file d'attente Redis]** Ajout d'un adaptateur Redis pour la file d'attente d'événements par @mytharcher
- **[Workflow : nœud de calcul de date]** Prise en charge de l'exécution de test du nœud par @mytharcher

#### 🚀 Améliorations

- **[serveur]** Rendre la file d'attente mémoire concurrente disponible lorsque le traitement des éléments n'est pas complet ([#7267](https://github.com/nocobase/nocobase/pull/7267)) par @mytharcher
- **[base de données]** Active automatiquement la pagination simple lorsque l'ensemble de données dépasse un seuil ([#7227](https://github.com/nocobase/nocobase/pull/7227)) par @aaaaaajie
- **[client]** Sélecteur de couleurs : Ajout de quatre couleurs recommandées ([#7226](https://github.com/nocobase/nocobase/pull/7226)) par @zhangzhonghe
- **[Intégration IA]** Suppression de `await` pour l'appel de `saveJob` ([#7275](https://github.com/nocobase/nocobase/pull/7275)) par @mytharcher
- **[Workflow : nœud manuel]** storePopupContext prend en charge l'enregistrement du contexte par défaut ([#7264](https://github.com/nocobase/nocobase/pull/7264)) par @zhangzhonghe
- **[Workflow]**
  * Ajout d'une constante de type json pour la variable de test ([#7274](https://github.com/nocobase/nocobase/pull/7274)) par @mytharcher
  * Utilisation de la journalisation au lieu de lever une erreur lorsque l'exécution ne doit pas s'exécuter en raison du statut ([#7217](https://github.com/nocobase/nocobase/pull/7217)) par @mytharcher
  * Rendre la comparaison compatible pour les valeurs de date ([#7237](https://github.com/nocobase/nocobase/pull/7237)) par @mytharcher
- **[Champ de collection : Formule]** Ajout d'interfaces plus calculables ([#7215](https://github.com/nocobase/nocobase/pull/7215)) par @mytharcher
- **[Adaptateur de file d'attente Redis]** Rendre la file d'attente concurrente disponible lorsque le traitement des éléments n'est pas complet pour l'adaptateur Redis par @mytharcher
- **[Workflow : Calcul JSON]** Rendre le nœud de requête JSON testable par @mytharcher
- **[Workflow : Approbation]** Prise en charge de la suppression de l'approbation lorsque les données associées sont supprimées par @mytharcher

#### 🐛 Corrections de bugs

- **[client]**
  * la recherche floue ne fonctionne pas dans le champ d'association de sélection lors de l'utilisation d'une formule comme champ de titre ([#7280](https://github.com/nocobase/nocobase/pull/7280)) par @katherinehhh
  * variable d'objet actuel manquante dans les règles de liaison de sous-tableau ([#7266](https://github.com/nocobase/nocobase/pull/7266)) par @katherinehhh
  * Après les modifications de champ, les champs d'association qui dépendent de ce champ n'ont pas effacé leurs valeurs ([#7262](https://github.com/nocobase/nocobase/pull/7262)) par @zhangzhonghe
  * Correction d'un problème où les champs Markdown n'étaient pas rendus correctement dans la vue détaillée. ([#7257](https://github.com/nocobase/nocobase/pull/7257)) par @aaaaaajie
  * Le paramètre du champ de titre du sélecteur de données est invalide ([#7251](https://github.com/nocobase/nocobase/pull/7251)) par @zhangzhonghe
  * Éviter que les champs non-association soient sélectionnés dans les appends ([#7231](https://github.com/nocobase/nocobase/pull/7231)) par @mytharcher
  * Lors de la suppression d'un menu, les données correspondantes dans la table uiSchemas ne sont pas supprimées ([#7232](https://github.com/nocobase/nocobase/pull/7232)) par @zhangzhonghe
  * les règles de style ne fonctionnent pas sur la colonne d'action du tableau ([#7225](https://github.com/nocobase/nocobase/pull/7225)) par @katherinehhh
  * problème d'affichage lorsque des variables de date obsolètes sont utilisées dans les champs de date des données historiques ([#7253](https://github.com/nocobase/nocobase/pull/7253)) par @katherinehhh
  * problème d'affichage pour les champs d'association dans les règles de liaison ([#7220](https://github.com/nocobase/nocobase/pull/7220)) par @katherinehhh
  * Correction de l'erreur : Impossible de résoudre 'react-device-detect ([#7224](https://github.com/nocobase/nocobase/pull/7224)) par @zhangzhonghe
- **[base de données]**
  * Résolution de l'échec de la pagination simple automatique causé par la convention de dénomination des tables. ([#7256](https://github.com/nocobase/nocobase/pull/7256)) par @aaaaaajie
  * Correction d'un problème où le tri par clé primaire par défaut provoquait un échec de chargement de la liste lors de l'utilisation d'une source de données externe MSSQL dans un bloc de tableau. ([#7259](https://github.com/nocobase/nocobase/pull/7259)) par @aaaaaajie
  * Correction d'un échec lors de l'exportation de grands ensembles de données depuis PostgreSQL ([#7228](https://github.com/nocobase/nocobase/pull/7228)) par @aaaaaajie
  * Correction d'une erreur lors de l'activation de la pagination simple pour les tables de sources de données externes ([#7222](https://github.com/nocobase/nocobase/pull/7222)) par @aaaaaajie
- **[auth]** Correction du problème où un `secret` vide dans la configuration de la sous-application empêche la connexion ([#7239](https://github.com/nocobase/nocobase/pull/7239)) par @2013xile
- **[Workflow]** Correction de la mauvaise version de la dépendance ([#7258](https://github.com/nocobase/nocobase/pull/7258)) par @mytharcher
- **[Action : Modification par lot]** Impossible d'effectuer une modification par lot et une mise à jour par lot dans le sélecteur de données ([#7250](https://github.com/nocobase/nocobase/pull/7250)) par @zhangzhonghe
- **[Gestionnaire de sources de données]** Correction de la préservation des attributs de source de données externes dans la configuration de la collection ([#7249](https://github.com/nocobase/nocobase/pull/7249)) par @aaaaaajie
- **[Champ de collection : Tri]** sélection du champ de tri manquante lors de la duplication des enregistrements ([#7116](https://github.com/nocobase/nocobase/pull/7116)) par @katherinehhh
- **[Source de données : Oracle externe]** Correction de la préservation des attributs de source de données externes dans la configuration de la collection par @aaaaaajie
- **[Workflow : Sous-flux]** Correction d'une erreur levée lorsque le signal de rappel arrive mais que l'exécution en attente n'est pas sur l'instance actuelle par @mytharcher
- **[Workflow : Approbation]**
  * Correction des associations à plusieurs niveaux lors de la soumission de l'approbation par @mytharcher
  * L'URL du bouton Lien pointe vers une popup sur la page actuelle, mais cliquer dessus affiche une erreur 404 par @zhangzhonghe
  * Correction des associations lors de la soumission de l'approbation par @mytharcher
  * Ajout d'une tolérance aux pannes pour l'approbation supprimée dans la liste des enregistrements par @mytharcher
  * Correction d'une exception lors de la suppression d'un enregistrement par @mytharcher
- **[Gestionnaire d'e-mails]** la collection de relations entre les messages et les étiquettes est exceptionnelle sous mysql par @jiannx

## develop

![develop.png](https://static-docs.nocobase.com/7fcdd9456a17286d8a439eee52bcb8d2.png)

### [v1.9.0-alpha.3](https://www.nocobase.com/en/blog/v1.9.0-alpha.3)

*Date de sortie : 2025-07-18*

#### 🎉 Nouvelles fonctionnalités

- **[Source de données : Principale]** Prise en charge de l'affichage des tables définies par les plugins dans la source de données principale. ([#7187](https://github.com/nocobase/nocobase/pull/7187)) par @aaaaaajie
- **[Workflow : nœud de calcul de date]** Prise en charge de l'exécution de test du nœud par @mytharcher

#### 🚀 Améliorations

- **[client]** Sélecteur de couleurs : Ajout de quatre couleurs recommandées ([#7226](https://github.com/nocobase/nocobase/pull/7226)) par @zhangzhonghe
- **[Workflow]** Rendre la comparaison compatible pour les valeurs de date ([#7237](https://github.com/nocobase/nocobase/pull/7237)) par @mytharcher

#### 🐛 Corrections de bugs

- **[client]**
  * les règles de style ne fonctionnent pas sur la colonne d'action du tableau ([#7225](https://github.com/nocobase/nocobase/pull/7225)) par @katherinehhh
  * Éviter que les champs non-association soient sélectionnés dans les appends ([#7231](https://github.com/nocobase/nocobase/pull/7231)) par @mytharcher
  * Correction de l'erreur : Impossible de résoudre 'react-device-detect ([#7224](https://github.com/nocobase/nocobase/pull/7224)) par @zhangzhonghe
  * Lors de la suppression d'un menu, les données correspondantes dans la table uiSchemas ne sont pas supprimées ([#7232](https://github.com/nocobase/nocobase/pull/7232)) par @zhangzhonghe
- **[base de données]** Correction d'une erreur lors de l'activation de la pagination simple pour les tables de sources de données externes ([#7222](https://github.com/nocobase/nocobase/pull/7222)) par @aaaaaajie
- **[Champ de collection : Tri]** sélection du champ de tri manquante lors de la duplication des enregistrements ([#7116](https://github.com/nocobase/nocobase/pull/7116)) par @katherinehhh
- **[Workflow : Sous-flux]** Correction d'une erreur levée lorsque le signal de rappel arrive mais que l'exécution en attente n'est pas sur l'instance actuelle par @mytharcher
- **[Workflow : Approbation]**
  * Correction des associations à plusieurs niveaux lors de la soumission de l'approbation par @mytharcher
  * Ajout d'une tolérance aux pannes pour l'approbation supprimée dans la liste des enregistrements par @mytharcher
- **[Gestionnaire d'e-mails]** performance optimale de la liste des messages électroniques par @jiannx
