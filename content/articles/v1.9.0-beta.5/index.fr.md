---
title: "NocoBase v1.9.0-beta.5 : Prise en charge de la configuration de la limite de taille du corps de la requête via une variable d'environnement"
description: "Notes de version de v1.9.0-beta.5"
---

### 🎉 Nouvelles fonctionnalités

- **[serveur]** Prise en charge de la configuration de la limite de taille du corps de la requête via une variable d'environnement ([#7273](https://github.com/nocobase/nocobase/pull/7273)) par @aaaaaajie

- **[Workflow : Nœud parallèle]** Ajout du mode « Tout terminé » pour le nœud parallèle ([#7263](https://github.com/nocobase/nocobase/pull/7263)) par @mytharcher

- **[Auth : SAML 2.0]** Prise en charge de la redirection automatique vers l'URL SSO lorsque l'utilisateur n'est pas authentifié par @2013xile

- **[Adaptateur de file d'attente Redis]** Ajout d'un adaptateur Redis pour la file d'attente d'événements par @mytharcher

- **[Workflow : nœud de calcul de date]** Prise en charge de l'exécution de test du nœud par @mytharcher

### 🚀 Améliorations

- **[serveur]** Rendre la file d'attente mémoire concurrente disponible lorsque les éléments en cours de traitement ne sont pas complets ([#7267](https://github.com/nocobase/nocobase/pull/7267)) par @mytharcher

- **[base de données]** Active automatiquement la pagination simple lorsque le jeu de données dépasse un seuil ([#7227](https://github.com/nocobase/nocobase/pull/7227)) par @aaaaaajie

- **[client]** Sélecteur de couleur : Ajout de quatre couleurs recommandées ([#7226](https://github.com/nocobase/nocobase/pull/7226)) par @zhangzhonghe

- **[Intégration IA]** Suppression de `await` pour l'appel de `saveJob` ([#7275](https://github.com/nocobase/nocobase/pull/7275)) par @mytharcher

- **[Workflow : Nœud manuel]** storePopupContext prend en charge la sauvegarde du contexte par défaut ([#7264](https://github.com/nocobase/nocobase/pull/7264)) par @zhangzhonghe

- **[Workflow]**
  - Ajout d'une constante de type json pour la variable de test ([#7274](https://github.com/nocobase/nocobase/pull/7274)) par @mytharcher

  - Utilisation de la journalisation au lieu de lever une erreur lorsque l'exécution ne devrait pas avoir lieu en raison du statut ([#7217](https://github.com/nocobase/nocobase/pull/7217)) par @mytharcher

  - Rendre la comparaison compatible pour les valeurs de date ([#7237](https://github.com/nocobase/nocobase/pull/7237)) par @mytharcher

- **[Champ de collection : Formule]** Ajout d'interfaces calculables supplémentaires ([#7215](https://github.com/nocobase/nocobase/pull/7215)) par @mytharcher

- **[Adaptateur de file d'attente Redis]** Rendre la file d'attente concurrente disponible lorsque les éléments en cours de traitement ne sont pas complets pour l'adaptateur Redis par @mytharcher

- **[Workflow : Calcul JSON]** Rendre le nœud de requête JSON testable par @mytharcher

- **[Workflow : Approbation]** Prise en charge de la suppression de l'approbation lorsque les données associées sont supprimées par @mytharcher

### 🐛 Corrections de bugs

- **[client]**
  - La recherche floue ne fonctionne pas dans le champ de sélection d'association lors de l'utilisation d'une formule comme champ de titre ([#7280](https://github.com/nocobase/nocobase/pull/7280)) par @katherinehhh

  - Variable d'objet courant manquante dans les règles de liaison de sous-tableau ([#7266](https://github.com/nocobase/nocobase/pull/7266)) par @katherinehhh

  - Après la modification d'un champ, les champs d'association qui dépendent de ce champ n'ont pas effacé leurs valeurs ([#7262](https://github.com/nocobase/nocobase/pull/7262)) par @zhangzhonghe

  - Correction d'un problème où les champs Markdown n'étaient pas rendus correctement dans la vue détaillée. ([#7257](https://github.com/nocobase/nocobase/pull/7257)) par @aaaaaajie

  - Le paramètre du champ de titre du sélecteur de données est invalide ([#7251](https://github.com/nocobase/nocobase/pull/7251)) par @zhangzhonghe

  - Éviter que les champs non-associatifs soient sélectionnés dans les ajouts ([#7231](https://github.com/nocobase/nocobase/pull/7231)) par @mytharcher

  - Lors de la suppression d'un menu, les données correspondantes dans la table uiSchemas ne sont pas supprimées ([#7232](https://github.com/nocobase/nocobase/pull/7232)) par @zhangzhonghe

  - Les règles de style ne fonctionnent pas sur la colonne d'action du tableau ([#7225](https://github.com/nocobase/nocobase/pull/7225)) par @katherinehhh

  - Problème d'affichage lorsque des variables de date obsolètes sont utilisées dans des champs de date de données historiques ([#7253](https://github.com/nocobase/nocobase/pull/7253)) par @katherinehhh

  - Problème d'affichage pour les champs d'association dans les règles de liaison ([#7220](https://github.com/nocobase/nocobase/pull/7220)) par @katherinehhh

  - Correction de l'erreur : Impossible de résoudre 'react-device-detect' ([#7224](https://github.com/nocobase/nocobase/pull/7224)) par @zhangzhonghe

- **[base de données]**
  - Résolution de l'échec de la pagination simple automatique causé par la convention de nommage des tables. ([#7256](https://github.com/nocobase/nocobase/pull/7256)) par @aaaaaajie

  - Correction d'un problème où le tri par clé primaire par défaut provoque un échec de chargement de la liste lors de l'utilisation d'une source de données externe MSSQL dans un bloc de tableau. ([#7259](https://github.com/nocobase/nocobase/pull/7259)) par @aaaaaajie

  - Correction d'un échec lors de l'exportation de grands ensembles de données depuis PostgreSQL ([#7228](https://github.com/nocobase/nocobase/pull/7228)) par @aaaaaajie

  - Correction d'une erreur lors de l'activation de la pagination simple pour les tables de sources de données externes ([#7222](https://github.com/nocobase/nocobase/pull/7222)) par @aaaaaajie

- **[auth]** Correction du problème où un `secret` vide dans la configuration de la sous-application empêche la connexion ([#7239](https://github.com/nocobase/nocobase/pull/7239)) par @2013xile

- **[Workflow]** Correction d'une mauvaise version de dépendance ([#7258](https://github.com/nocobase/nocobase/pull/7258)) par @mytharcher

- **[Action : Modification par lot]** Impossible d'effectuer une modification par lot et une mise à jour par lot dans le sélecteur de données ([#7250](https://github.com/nocobase/nocobase/pull/7250)) par @zhangzhonghe

- **[Gestionnaire de sources de données]** Correction de la préservation des attributs de la source de données externe dans la configuration de la collection ([#7249](https://github.com/nocobase/nocobase/pull/7249)) par @aaaaaajie

- **[Champ de collection : Tri]** Champ de sélection de tri manquant lors de la duplication d'enregistrements ([#7116](https://github.com/nocobase/nocobase/pull/7116)) par @katherinehhh

- **[Source de données : Oracle externe]** Correction de la préservation des attributs de la source de données externe dans la configuration de la collection par @aaaaaajie

- **[Workflow : Sous-flux]** Correction d'une erreur levée lorsqu'un signal de rappel arrive mais que l'exécution en attente n'est pas sur l'instance actuelle par @mytharcher

- **[Workflow : Approbation]**
  - Correction de plusieurs niveaux d'associations lors de la soumission d'une approbation par @mytharcher

  - L'URL du bouton Lien pointe vers une fenêtre contextuelle sur la page actuelle, mais son clic affiche une erreur 404 par @zhangzhonghe

  - Correction des associations lors de la soumission d'une approbation par @mytharcher

  - Ajout d'une tolérance aux pannes pour les approbations supprimées dans la liste des enregistrements par @mytharcher

  - Correction d'une exception lors de la suppression d'un enregistrement par @mytharcher

- **[Gestionnaire d'e-mails]** La collection de relations entre les messages et les étiquettes est anormale sous mysql par @jiannx
