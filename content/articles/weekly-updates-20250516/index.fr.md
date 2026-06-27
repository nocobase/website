---
title: "Mises à jour hebdomadaires de NocoBase : Optimisations et corrections de bugs"
description: "Les mises à jour de cette semaine incluent : la possibilité de réviser plus d'un brouillon, l'ajout de paramètres de taille intégrés supplémentaires pour les images de statut de lecture, et d'autres améliorations."
---

Résumez les journaux de mise à jour hebdomadaires du produit. Les dernières versions sont disponibles sur [notre blog](https://www.nocobase.com/en/blog/timeline).

**NocoBase est actuellement mis à jour avec trois branches : `main`, `next` et `develop`.**

![version.png](https://static-docs.nocobase.com/ba5f04e27e99c625cb3822da5df07860.png)

* `main` : La version la plus stable à ce jour, recommandée pour l'installation ;
* `next` : Version bêta, contient les nouvelles fonctionnalités à venir et a été testée préliminairement. Il peut y avoir des problèmes connus ou inconnus. Elle est principalement destinée aux utilisateurs testeurs pour recueillir des retours et optimiser davantage les fonctionnalités. Idéale pour les utilisateurs testeurs qui souhaitent découvrir les nouvelles fonctionnalités en avant-première et donner leur avis ;
* `develop` : Version alpha, contient le code des dernières fonctionnalités, peut être incomplète ou instable, principalement destinée au développement interne et à l'itération rapide. Adaptée aux utilisateurs techniques intéressés par les fonctionnalités de pointe du produit, mais avec des problèmes potentiels et des fonctionnalités incomplètes. Ne pas utiliser en production.

## main

![main.png](https://static-docs.nocobase.com/47a3c71734c1d0f908b51f9ebd53c0ac.png)

### [v1.6.28](https://www.nocobase.com/en/blog/v1.6.28)

*Date de sortie : 2025-05-09*

#### 🐛 Corrections de bugs

- **[base de données]** Échec de l'importation en raison des valeurs des champs de texte. ([#6699](https://github.com/nocobase/nocobase/pull/6699)) par @aaaaaajie
- **[client]** Les champs masqués sont toujours affichés ([#6844](https://github.com/nocobase/nocobase/pull/6844)) par @zhangzhonghe
- **[Action : Exporter les enregistrements]** Correction de l'erreur d'exportation des textes longs. ([#6713](https://github.com/nocobase/nocobase/pull/6713)) par @aaaaaajie
- **[Workflow : Événement post-action]** Correction de la variable `user acted` inaccessible dans le modèle Handlebars ([#6837](https://github.com/nocobase/nocobase/pull/6837)) par @mytharcher
- **[Bloc : Panneau d'actions]** La couleur du panneau d'actions est incorrecte en mode sombre ([#6842](https://github.com/nocobase/nocobase/pull/6842)) par @zhangzhonghe
- **[Action : Exporter les enregistrements Pro]** Correction de l'erreur d'exportation des textes longs. par @aaaaaajie

### [v1.6.29](https://www.nocobase.com/en/blog/v1.6.29)

*Date de sortie : 2025-05-13*

#### 🚀 Améliorations

- **[Workflow]** Permettre la révision de plus d'un brouillon ([#6851](https://github.com/nocobase/nocobase/pull/6851)) par @mytharcher

#### 🐛 Corrections de bugs

- **[Action : Exporter les enregistrements]** Correction de l'exportation des valeurs vides dans les associations imbriquées et l'URL des pièces jointes ([#6845](https://github.com/nocobase/nocobase/pull/6845)) par @aaaaaajie
- **[Workflow : Nœud manuel]** Correction du décompte des statistiques erroné sur les tâches ([#6783](https://github.com/nocobase/nocobase/pull/6783)) par @mytharcher
- **[Workflow : kit de test]** Correction des cas de test échoués en raison d'un plugin préréglé requis ([#6839](https://github.com/nocobase/nocobase/pull/6839)) par @mytharcher
- **[Visualisation de données]** Correction d'une erreur lors du filtrage des champs m2m imbriqués ([#6855](https://github.com/nocobase/nocobase/pull/6855)) par @2013xile
- **[Workflow : Sous-flux]** Correction d'un déclencheur indéfini provoquant un plantage de la page par @mytharcher
- **[Stockage de fichiers : S3(Pro)]** Expiration de l'URL d'accès invalide par @jiannx
- **[Workflow : Approbation]** Correction du décompte des statistiques erroné sur les tâches par @mytharcher

### [v1.6.30](https://www.nocobase.com/en/blog/v1.6.30)

*Date de sortie : 2025-05-15*

#### 🚀 Améliorations

- **[client]** ajout de plus de paramètres de taille intégrés pour l'image d'état de lecture ([#6868](https://github.com/nocobase/nocobase/pull/6868)) par @katherinehhh

#### 🐛 Corrections de bugs

- **[Gestionnaire de fichiers]**

  - Correction des types ([#6873](https://github.com/nocobase/nocobase/pull/6873)) par @mytharcher
  - Correction de la création d'un enregistrement de fichier sans permission de clé étrangère ([#6863](https://github.com/nocobase/nocobase/pull/6863)) par @mytharcher
- **[Action : Exporter les enregistrements]** amélioration des performances lors de la suppression de champs dans les paramètres de champ d'import/export ([#6861](https://github.com/nocobase/nocobase/pull/6861)) par @katherinehhh
- **[Visualisation de données]** Les blocs de graphiques ne s'affichent pas lorsqu'ils sont ajoutés à des popups déclenchés par des actions au niveau du bloc ([#6864](https://github.com/nocobase/nocobase/pull/6864)) par @2013xile
- **[Action : Exporter les enregistrements Pro]** amélioration des performances lors de la suppression de champs dans les paramètres de champ d'import/export pro par @katherinehhh
- **[Stockage de fichiers : S3(Pro)]** Changement pour utiliser le champ de collection afin de localiser le stockage par @mytharcher
- **[Gestionnaire de sauvegarde]** Correction d'une erreur de type lors de la construction par @mytharcher

## next

![next.png](https://static-docs.nocobase.com/8ed17a0f08cc585018f6de6c8b13947d.png)

### [v1.7.0-beta.31](https://www.nocobase.com/en/blog/v1.7.0-beta.31)

*Date de sortie : 2025-05-15*

#### 🎉 Nouvelles fonctionnalités

- **[client]** la règle de liaison d'action prend en charge les variables du 'formulaire actuel' ([#6810](https://github.com/nocobase/nocobase/pull/6810)) par @katherinehhh
- **[indéfini]** Ajout du journal du plugin d'importation par @aaaaaajie
- **[Action : Importer des enregistrements]** Ajout du journal du plugin d'importation ([#6841](https://github.com/nocobase/nocobase/pull/6841)) par @aaaaaajie

#### 🚀 Améliorations

- **[client]** ajout de plus de paramètres de taille intégrés pour l'image d'état de lecture ([#6868](https://github.com/nocobase/nocobase/pull/6868)) par @katherinehhh
- **[Champ de collection : Pièce jointe (URL)]** ajout de plus de tailles intégrées au champ d'URL de pièce jointe pour l'état de lecture ([#6871](https://github.com/nocobase/nocobase/pull/6871)) par @katherinehhh
- **[Workflow]** Permettre la révision de plus d'un brouillon ([#6851](https://github.com/nocobase/nocobase/pull/6851)) par @mytharcher

#### 🐛 Corrections de bugs

- **[client]**

  - problème de liaison de bouton dans le bloc de détail ([#6867](https://github.com/nocobase/nocobase/pull/6867)) par @katherinehhh
  - effacement de la valeur de droite lorsque l'opérateur change dans la règle de liaison ([#6862](https://github.com/nocobase/nocobase/pull/6862)) par @katherinehhh
  - évaluation incorrecte des opérateurs pour les variables de date dans les conditions de liaison ([#6825](https://github.com/nocobase/nocobase/pull/6825)) par @katherinehhh
  - opérateur manquant lors du changement dans les règles de liaison ([#6857](https://github.com/nocobase/nocobase/pull/6857)) par @katherinehhh
  - incompatibilité d'analyse des variables avec les données {{title}} dans la confirmation secondaire ([#6838](https://github.com/nocobase/nocobase/pull/6838)) par @katherinehhh
  - amélioration du style du composant de valeur de la règle de liaison ([#6836](https://github.com/nocobase/nocobase/pull/6836)) par @katherinehhh
  - incompatibilité d'analyse des variables avec les données {{title}} dans la confirmation secondaire ([#6838](https://github.com/nocobase/nocobase/pull/6838)) par @katherinehhh
  - Les champs masqués sont toujours affichés ([#6844](https://github.com/nocobase/nocobase/pull/6844)) par @zhangzhonghe
- **[base de données]** Échec de l'importation en raison des valeurs des champs de texte. ([#6699](https://github.com/nocobase/nocobase/pull/6699)) par @aaaaaajie
- **[Visualisation de données]**

  - Les blocs de graphiques ne s'affichent pas lorsqu'ils sont ajoutés à des popups déclenchés par des actions au niveau du bloc ([#6864](https://github.com/nocobase/nocobase/pull/6864)) par @2013xile
  - Correction d'une erreur lors du filtrage des champs m2m imbriqués ([#6855](https://github.com/nocobase/nocobase/pull/6855)) par @2013xile
- **[Action : Exporter les enregistrements]**

  - amélioration des performances lors de la suppression de champs dans les paramètres de champ d'import/export ([#6861](https://github.com/nocobase/nocobase/pull/6861)) par @katherinehhh
  - Correction de l'exportation des valeurs vides dans les associations imbriquées et l'URL des pièces jointes ([#6845](https://github.com/nocobase/nocobase/pull/6845)) par @aaaaaajie
  - Correction de l'erreur d'exportation des textes longs. ([#6713](https://github.com/nocobase/nocobase/pull/6713)) par @aaaaaajie
- **[Gestionnaire de fichiers]** Correction de la création d'un enregistrement de fichier sans permission de clé étrangère ([#6863](https://github.com/nocobase/nocobase/pull/6863)) par @mytharcher
- **[Workflow]** Correction du retour en arrière qui ne fonctionne pas lors de l'ouverture directe d'un lien contextuel dans le centre de tâches ([#6853](https://github.com/nocobase/nocobase/pull/6853)) par @mytharcher
- **[Action : Dupliquer l'enregistrement]** la fenêtre modale se ferme au premier clic de saisie lors de l'édition de données dupliquées ([#6848](https://github.com/nocobase/nocobase/pull/6848)) par @katherinehhh
- **[Bloc : modèle]** Après avoir enregistré en tant que modèle hérité, erreur lors de l'ouverture de la popup ([#6840](https://github.com/nocobase/nocobase/pull/6840)) par @gchust
- **[Workflow : kit de test]** Correction des cas de test échoués en raison d'un plugin préréglé requis ([#6839](https://github.com/nocobase/nocobase/pull/6839)) par @mytharcher
- **[Workflow : Événement post-action]** Correction de la variable `user acted` inaccessible dans le modèle Handlebars ([#6837](https://github.com/nocobase/nocobase/pull/6837)) par @mytharcher
- **[Workflow : Nœud manuel]** Correction du décompte des statistiques erroné sur les tâches ([#6783](https://github.com/nocobase/nocobase/pull/6783)) par @mytharcher
- **[Bloc : Panneau d'actions]** La couleur du panneau d'actions est incorrecte en mode sombre ([#6842](https://github.com/nocobase/nocobase/pull/6842)) par @zhangzhonghe
- **[Action : Exporter les enregistrements Pro]**

  - amélioration des performances lors de la suppression de champs dans les paramètres de champ d'import/export pro par @katherinehhh
  - Correction de l'erreur d'exportation des textes longs. par @aaaaaajie
- **[Workflow : Sous-flux]** Correction d'un déclencheur indéfini provoquant un plantage de la page par @mytharcher
- **[Impression de modèle]**

  - Correction du problème de formateurs introuvables. par @sheldon66
  - Correction du formateur introuvable par @sheldon66
- **[Stockage de fichiers : S3(Pro)]**

  - Changement pour utiliser le champ de collection afin de localiser le stockage par @mytharcher
  - Expiration de l'URL d'accès invalide par @jiannx
- **[Workflow : Approbation]** Correction du décompte des statistiques erroné sur les tâches par @mytharcher
