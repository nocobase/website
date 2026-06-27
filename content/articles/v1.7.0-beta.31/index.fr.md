---
title: "NocoBase v1.7.0-beta.31 : Ajout du journal du plugin d'importation"
description: "Notes de version de v1.7.0-beta.31"
---

### 🎉 Nouvelles fonctionnalités

- **[client]** Les règles de liaison d'action prennent désormais en charge les variables du « formulaire actuel » ([#6810](https://github.com/nocobase/nocobase/pull/6810)) par @katherinehhh

- **[undefined]** Ajout du journal du plugin d'importation par @aaaaaajie

- **[Action : Importer des enregistrements]** Ajout du journal du plugin d'importation ([#6841](https://github.com/nocobase/nocobase/pull/6841)) par @aaaaaajie

### 🚀 Améliorations

- **[client]** Ajout de paramètres de taille intégrés supplémentaires pour l'image en statut de lecture ([#6868](https://github.com/nocobase/nocobase/pull/6868)) par @katherinehhh

- **[Champ de collection : Pièce jointe (URL)]** Ajout de tailles intégrées supplémentaires au champ d'URL de pièce jointe pour le statut de lecture ([#6871](https://github.com/nocobase/nocobase/pull/6871)) par @katherinehhh

- **[Workflow]** Permet de réviser plusieurs brouillons ([#6851](https://github.com/nocobase/nocobase/pull/6851)) par @mytharcher

### 🐛 Corrections de bugs

- **[client]**
  - Problème de liaison de bouton dans le bloc de détail ([#6867](https://github.com/nocobase/nocobase/pull/6867)) par @katherinehhh

  - Effacement de la valeur de droite lorsque l'opérateur change dans une règle de liaison ([#6862](https://github.com/nocobase/nocobase/pull/6862)) par @katherinehhh

  - Évaluation incorrecte des opérateurs pour les variables de date dans les conditions de liaison ([#6825](https://github.com/nocobase/nocobase/pull/6825)) par @katherinehhh

  - Opérateur manquant lors du changement dans les règles de liaison ([#6857](https://github.com/nocobase/nocobase/pull/6857)) par @katherinehhh

  - Incompatibilité de l'analyse des variables avec les données {{title}} dans la confirmation secondaire ([#6838](https://github.com/nocobase/nocobase/pull/6838)) par @katherinehhh

  - Amélioration du style du composant de valeur de règle de liaison ([#6836](https://github.com/nocobase/nocobase/pull/6836)) par @katherinehhh

  - Incompatibilité de l'analyse des variables avec les données {{title}} dans la confirmation secondaire ([#6838](https://github.com/nocobase/nocobase/pull/6838)) par @katherinehhh

  - Les champs masqués sont toujours affichés ([#6844](https://github.com/nocobase/nocobase/pull/6844)) par @zhangzhonghe

- **[base de données]** Échec de l'importation en raison des valeurs des champs de texte. ([#6699](https://github.com/nocobase/nocobase/pull/6699)) par @aaaaaajie

- **[Visualisation des données]**
  - Les blocs de graphiques ne s'affichent pas lorsqu'ils sont ajoutés à des fenêtres contextuelles déclenchées par des actions au niveau du bloc ([#6864](https://github.com/nocobase/nocobase/pull/6864)) par @2013xile

  - Correction d'une erreur lors du filtrage des champs m2m imbriqués ([#6855](https://github.com/nocobase/nocobase/pull/6855)) par @2013xile

- **[Action : Exporter les enregistrements]**
  - Amélioration des performances lors de la suppression de champs dans les paramètres de champ d'import/export ([#6861](https://github.com/nocobase/nocobase/pull/6861)) par @katherinehhh

  - Correction de l'exportation de valeurs vides dans les associations imbriquées et l'url de pièce jointe ([#6845](https://github.com/nocobase/nocobase/pull/6845)) par @aaaaaajie

  - Correction de l'erreur d'exportation de textes longs. ([#6713](https://github.com/nocobase/nocobase/pull/6713)) par @aaaaaajie

- **[Gestionnaire de fichiers]** Correction de la création d'un enregistrement de fichier sans autorisation de clé étrangère ([#6863](https://github.com/nocobase/nocobase/pull/6863)) par @mytharcher

- **[Workflow]** Correction du problème de navigation arrière qui ne fonctionne pas lors de l'ouverture directe d'un lien contextuel dans le centre de tâches ([#6853](https://github.com/nocobase/nocobase/pull/6853)) par @mytharcher

- **[Action : Dupliquer l'enregistrement]** La fenêtre modale se ferme au premier clic de saisie lors de l'édition de données dupliquées ([#6848](https://github.com/nocobase/nocobase/pull/6848)) par @katherinehhh

- **[Bloc : modèle]** Après avoir enregistré en tant que modèle hérité, erreur lors de l'ouverture de la fenêtre contextuelle ([#6840](https://github.com/nocobase/nocobase/pull/6840)) par @gchust

- **[Workflow : kit de test]** Correction des cas de test échoués en raison d'un plugin prédéfini requis ([#6839](https://github.com/nocobase/nocobase/pull/6839)) par @mytharcher

- **[Workflow : Événement post-action]** Correction de la variable « user acted » inaccessible dans le modèle Handlebars ([#6837](https://github.com/nocobase/nocobase/pull/6837)) par @mytharcher

- **[Workflow : Nœud manuel]** Correction du décompte incorrect des statistiques sur les tâches ([#6783](https://github.com/nocobase/nocobase/pull/6783)) par @mytharcher

- **[Bloc : Panneau d'action]** La couleur du panneau d'action est incorrecte en mode sombre ([#6842](https://github.com/nocobase/nocobase/pull/6842)) par @zhangzhonghe

- **[Action : Exporter les enregistrements Pro]**
  - Amélioration des performances lors de la suppression de champs dans les paramètres de champ d'import/export Pro par @katherinehhh

  - Correction de l'erreur d'exportation de textes longs. par @aaaaaajie

- **[Workflow : Sous-flux]** Correction d'un déclencheur indéfini provoquant le plantage de la page par @mytharcher

- **[Impression de modèle]**
  - Correction du problème de formatteurs introuvables. par @sheldon66

  - Correction du formatteur introuvable par @sheldon66

- **[Stockage de fichiers : S3(Pro)]**
  - Changement pour utiliser le champ de collection afin de localiser le stockage par @mytharcher

  - Expiration de l'URL d'accès invalide par @jiannx

- **[Workflow : Approbation]** Correction du décompte incorrect des statistiques sur les tâches par @mytharcher
