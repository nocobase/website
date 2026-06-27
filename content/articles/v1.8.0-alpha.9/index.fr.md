---
title: "NocoBase v1.8.0-alpha.9 : Ajout de la variable d'enregistrement d'approbation au résultat du nœud"
description: "Notes de version de v1.8.0-alpha.9"
---

### 🎉 Nouvelles fonctionnalités

- **[client]** Prise en charge du champ BIT dans SQL Server pour les sources de données externes. ([#7058](https://github.com/nocobase/nocobase/pull/7058)) par @aaaaaajie

- **[Source de données : SQL Server externe]** Prise en charge du champ BIT SQL Server dans les sources de données externes par @aaaaaajie

- **[Workflow : Approbation]** Ajout d'une variable d'enregistrements d'approbation au résultat du nœud par @mytharcher

### 🚀 Améliorations

- **[client]** Masquer automatiquement la barre d'actions du bloc de carte en grille lorsqu'elle est vide ([#7069](https://github.com/nocobase/nocobase/pull/7069)) par @zhangzhonghe

- **[Vérification]** Suppression des options de vérificateur de la réponse de l'API `verifiers:listByUser` ([#7090](https://github.com/nocobase/nocobase/pull/7090)) par @2013xile

- **[Workflow]** Ajustement de l'API de `getCollectionFieldOptions` ([#7095](https://github.com/nocobase/nocobase/pull/7095)) par @mytharcher

- **[Workflow : Événement pré-action]** Ajustement de l'API des variables par @mytharcher

- **[Workflow : Approbation]** Ajustement de l'API des variables par @mytharcher

### 🐛 Corrections de bugs

- **[client]**
  - La fonction d'alignement du texte des colonnes du tableau ne fonctionne pas ([#7094](https://github.com/nocobase/nocobase/pull/7094)) par @zhangzhonghe

  - Affectation des valeurs de champ : Impossible d'effacer les données pour les champs de relation ([#7086](https://github.com/nocobase/nocobase/pull/7086)) par @zhangzhonghe

  - Utilisation d'une portée de variable indépendante pour chaque champ ([#7012](https://github.com/nocobase/nocobase/pull/7012)) par @mytharcher

  - La condition de style sur les champs de colonne de sous-tableau n'est pas appliquée correctement ([#7083](https://github.com/nocobase/nocobase/pull/7083)) par @katherinehhh

  - Le filtrage via les champs de collection de relations dans les formulaires de filtre est invalide ([#7070](https://github.com/nocobase/nocobase/pull/7070)) par @zhangzhonghe

  - Les variables de paramètre de requête URL ne fonctionnent pas dans la valeur par défaut du champ de formulaire public ([#7084](https://github.com/nocobase/nocobase/pull/7084)) par @katherinehhh

  - Le message de validation obligatoire dans le sous-tableau persiste lors du changement de page ([#7080](https://github.com/nocobase/nocobase/pull/7080)) par @katherinehhh

  - Erreur lors du clic sur le bouton de filtre ([#7100](https://github.com/nocobase/nocobase/pull/7100)) par @zhangzhonghe

- **[base de données]** Prise en charge des mises à jour d'association dans updateOrCreate et firstOrCreate ([#7088](https://github.com/nocobase/nocobase/pull/7088)) par @chenos

- **[Workflow]**
  - Correction de la suppression en cascade des statistiques par une version de workflow non courante ([#7103](https://github.com/nocobase/nocobase/pull/7103)) par @mytharcher

  - Correction de la vérification incorrecte des grands nombres entiers ([#7099](https://github.com/nocobase/nocobase/pull/7099)) par @mytharcher

  - Correction de la vérification incorrecte des grands nombres entiers ([#7091](https://github.com/nocobase/nocobase/pull/7091)) par @mytharcher

- **[Action : Importer des enregistrements]** Résolution du problème d'échec de connexion après l'importation groupée de noms d'utilisateur et de mots de passe ([#7076](https://github.com/nocobase/nocobase/pull/7076)) par @aaaaaajie

- **[Champ de collection : Plusieurs à plusieurs (tableau)]** La mise à jour d'un champ plusieurs à plusieurs (tableau) génère une erreur lorsque le champ `updatedBy` est présent ([#7089](https://github.com/nocobase/nocobase/pull/7089)) par @2013xile

- **[Gestionnaire de fichiers]** Correction de l'impossibilité de mettre à jour le champ de pièces jointes dans le processus d'approbation ([#7093](https://github.com/nocobase/nocobase/pull/7093)) par @mytharcher

- **[Formulaires publics]** Formulaires publics : Correction d'un problème d'accès non autorisé lors de la soumission du formulaire ([#7085](https://github.com/nocobase/nocobase/pull/7085)) par @zhangzhonghe

- **[Champ de collection : Séquence]** Correction du calcul de séquence bigint basé sur une chaîne ([#7079](https://github.com/nocobase/nocobase/pull/7079)) par @mytharcher

- **[Workflow : Approbation]**
  - Utilisation de la comparaison au lieu de la logique implicite pour éviter les problèmes de type par @mytharcher

  - Seuls les participants peuvent voir (obtenir) les détails de l'approbation par @mytharcher

- **[Gestionnaire d'emails]** Erreur de suppression d'email par @jiannx
