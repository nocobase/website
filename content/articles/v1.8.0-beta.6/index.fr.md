---
title: "NocoBase v1.8.0-beta.6 : Ajout de la variable d'environnement pour contrôler la méthode de sortie des logs d'audit"
description: "Notes de version de v1.8.0-beta.6"
---

### 🎉 Nouvelles fonctionnalités

- **[Journaux d'audit]** Ajout de la variable d'environnement `AUDIT_LOGGER_TRANSPORT` pour contrôler la méthode de sortie des journaux d'audit par @2013xile

### 🚀 Améliorations

- **[client]** Interdiction de déplacer un groupe de menus dans lui-même ([#7005](https://github.com/nocobase/nocobase/pull/7005)) par @zhangzhonghe

- **[Calendrier]** Prise en charge du réglage du premier jour de la semaine dans le bloc calendrier ([#7032](https://github.com/nocobase/nocobase/pull/7032)) par @katherinehhh

- **[Champ de collection : Markdown(Vditor)]** Prise en charge du clic pour zoomer sur les images en mode prévisualisation Markdown (Vditor) ([#7024](https://github.com/nocobase/nocobase/pull/7024)) par @katherinehhh

- **[Champ de collection : Plusieurs à plusieurs (tableau)]** Erreurs liées aux permissions lors de l'affichage des champs plusieurs-à-plusieurs (plusieurs) dans les tableaux de données. ([#7028](https://github.com/nocobase/nocobase/pull/7028)) par @aaaaaajie

- **[Commentaires]** Prise en charge de la pagination dans le bloc de commentaires par @katherinehhh

### 🐛 Corrections de bugs

- **[client]**
  - Problème de fermeture automatique lors de la configuration des champs dans le formulaire contextuel secondaire ([#7052](https://github.com/nocobase/nocobase/pull/7052)) par @katherinehhh

  - Correction du problème où les règles de liaison provoquaient une boucle infinie ([#7050](https://github.com/nocobase/nocobase/pull/7050)) par @zhangzhonghe

  - Problème de fermeture automatique lors de la configuration des champs dans le formulaire contextuel secondaire ([#7042](https://github.com/nocobase/nocobase/pull/7042)) par @katherinehhh

  - Correction de l'indication de taille de téléchargement ([#7057](https://github.com/nocobase/nocobase/pull/7057)) par @mytharcher

  - Correction : utilisation du chaînage optionnel pour rejeter en toute sécurité les requêtes dans APIClient lorsque le gestionnaire peut être indéfini ([#7054](https://github.com/nocobase/nocobase/pull/7054)) par @sheldon66

  - Problème de fermeture automatique lors de la configuration des champs dans le formulaire contextuel secondaire ([#7042](https://github.com/nocobase/nocobase/pull/7042)) par @katherinehhh

  - Correction des champs ne s'affichant pas dans les modèles de bloc en raison de requêtes API en double ([#6985](https://github.com/nocobase/nocobase/pull/6985)) par @zhangzhonghe

  - Options de champ de sélection ne fonctionnant pas dans les règles de liaison du formulaire de filtre ([#7035](https://github.com/nocobase/nocobase/pull/7035)) par @katherinehhh

  - Les règles de validation du formulaire de filtre rendent le bouton de filtre inefficace ([#6975](https://github.com/nocobase/nocobase/pull/6975)) par @zhangzhonghe

  - Impossible d'effacer l'indicateur de champ obligatoire d'un sous-tableau à l'aide de règles de liaison ([#7022](https://github.com/nocobase/nocobase/pull/7022)) par @zhangzhonghe

  - Correction du problème d'erreur de paramètre du bloc de filtre ([#6966](https://github.com/nocobase/nocobase/pull/6966)) par @zhangzhonghe

  - Résolution d'un problème où le bloc ne parvenait pas à lire les données de vue provenant de sources de données externes. ([#7017](https://github.com/nocobase/nocobase/pull/7017)) par @aaaaaajie

  - Utilisation d'une portée de variable indépendante pour chaque champ ([#7012](https://github.com/nocobase/nocobase/pull/7012)) par @mytharcher

  - La variable d'objet actuel est invalide dans les règles de liaison ([#7008](https://github.com/nocobase/nocobase/pull/7008)) par @zhangzhonghe

- **[base de données]** correction : ajout des champs créateur et modificateur manquants lors de l'importation xlsx ([#7011](https://github.com/nocobase/nocobase/pull/7011)) par @aaaaaajie

- **[non défini]** Suppression de la dépendance à la base de données pour possibleTypes, application de la configuration pilotée par l'API par @aaaaaajie

- **[Action : Importer des enregistrements]**
  - Correction de l'importation xlsx pour restreindre les champs textarea à n'accepter que des données au format chaîne de caractères ([#7049](https://github.com/nocobase/nocobase/pull/7049)) par @aaaaaajie

  - Correction de l'échec d'importation du tableau enfant lorsque des champs relationnels sont impliqués ([#7039](https://github.com/nocobase/nocobase/pull/7039)) par @aaaaaajie

  - Correction des erreurs survenant lors de l'édition par lots lors de l'importation de données de tableau arborescent XLSX ([#7013](https://github.com/nocobase/nocobase/pull/7013)) par @aaaaaajie

- **[Visualisation des données]**
  - Affichage incorrect du champ de date "entre" dans le filtre du graphique ([#7051](https://github.com/nocobase/nocobase/pull/7051)) par @katherinehhh

  - Les champs de groupe de cases à cocher dans les graphiques doivent afficher les libellés au lieu des valeurs brutes ([#7033](https://github.com/nocobase/nocobase/pull/7033)) par @2013xile

- **[Documentation API]** Les plugins non officiels de NocoBase ne parviennent pas à afficher la documentation API ([#7045](https://github.com/nocobase/nocobase/pull/7045)) par @chenzhizdt

- **[Workflow]**
  - Correction de l'erreur provoquée par `toJSON()` dans le déclencheur planifié ([#7037](https://github.com/nocobase/nocobase/pull/7037)) par @mytharcher

  - Correction de l'erreur levée dans l'action d'exécution manuelle lorsque le déclencheur n'est pas configuré correctement ([#7036](https://github.com/nocobase/nocobase/pull/7036)) par @mytharcher

  - Correction de l'erreur d'interface utilisateur lorsque le workflow n'existe pas ([#7023](https://github.com/nocobase/nocobase/pull/7023)) par @mytharcher

  - Correction de l'événement de collection en mode création ou mise à jour qui ne se déclenchait pas lors de la création sans champ modifié ([#7015](https://github.com/nocobase/nocobase/pull/7015)) par @mytharcher

- **[Gestionnaire de sources de données]** Suppression de la dépendance à la base de données pour possibleTypes, application de la configuration pilotée par l'API ([#7019](https://github.com/nocobase/nocobase/pull/7019)) par @aaaaaajie

- **[Mobile]** Optimisation des problèmes de latence des fenêtres contextuelles mobiles ([#7029](https://github.com/nocobase/nocobase/pull/7029)) par @zhangzhonghe

- **[Action : Exporter les enregistrements Pro]** Correction de l'erreur qui se produit lors de l'exportation de pièces jointes avec conditions. par @aaaaaajie

- **[Workflow : JavaScript]** Correction de require pour les chemins relatifs par @mytharcher

- **[Impression de modèle]** Correction d'un bug d'analyse des permissions et ajout d'une vérification de données non trouvées. par @sheldon66

- **[Workflow : Approbation]**
  - Pour éviter une erreur de champ indéfini par @mytharcher

  - Correction de l'erreur levée lorsque le workflow est supprimé par @mytharcher

  - Correction des variables de déclencheur par @mytharcher

  - Rechargement de l'association de fichiers à partir de l'instantané pour éviter l'expiration de l'URL par @mytharcher

  - Correction de l'erreur API lors de l'actualisation de la page de détail par @mytharcher

- **[WeCom]** Ajout d'une vérification du chemin de rappel dans le middleware de la passerelle par @2013xile
