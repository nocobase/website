---
title: "NocoBase v2.0.0-beta.19 : DingTalk permet de lier l'utilisateur avec `unionId`"
description: "Notes de version de v2.0.0-beta.19"
---

### 🎉 Nouvelles fonctionnalités

- **[Auth : DingTalk]** Permet de lier un utilisateur avec `unionId` par @2013xile

### 🚀 Améliorations

- **[client]** Ajustement du paramètre de largeur de colonne en sélection déroulante dans la sous-table éditable en ligne ([#8561](https://github.com/nocobase/nocobase/pull/8561)) par @katherinehhh

- **[Champ de collection : Markdown(Vditor)]** Ajout d'une option de configuration pour définir le mode d'édition par défaut dans les paramètres du composant. ([#8408](https://github.com/nocobase/nocobase/pull/8408)) par @Cyx649312038

- **[Multi-espace]** Contrôle des permissions multi-espace pour l'accès ACL par @jiannx

- **[IA : Base de connaissances]** Optimisation de la sortie de construction pour réduire la taille du paquet plugin-ai-knowledge-base. par @cgyrock

### 🐛 Corrections de bugs

- **[client]**
  - Correction d'un problème où l'utilisation de la « Création rapide » du sélecteur d'enregistrement associé dans le formulaire d'édition écrasait les données existantes du formulaire. ([#8567](https://github.com/nocobase/nocobase/pull/8567)) par @gchust

  - Correction des problèmes d'espace vide dans la disposition en grille ([#8535](https://github.com/nocobase/nocobase/pull/8535)) par @zhangzhonghe

  - Correction du besoin d'actualiser la page pour ajouter un enregistrement enfant après avoir activé le tableau arborescent ([#8574](https://github.com/nocobase/nocobase/pull/8574)) par @katherinehhh

  - Correction de la largeur de colonne qui ne se mettait pas à jour dans la sous-table (édition en ligne) ; la saisie de texte multiligne ne se redimensionnait pas avec la largeur de colonne ([#8573](https://github.com/nocobase/nocobase/pull/8573)) par @katherinehhh

  - Correction d'un problème où le menu « Formulaire (Ajouter nouveau) » était incorrectement affiché dans la fenêtre contextuelle de l'action « Créer nouveau ». ([#8562](https://github.com/nocobase/nocobase/pull/8562)) par @gchust

- **[moteur de workflow]**
  - Correction d'un problème où certaines bibliothèques tierces ne pouvaient pas être importées correctement dans les blocs JS. ([#8545](https://github.com/nocobase/nocobase/pull/8545)) par @gchust

  - Correction d'un problème où la soumission du formulaire après changement de page ne rafraîchissait pas la page. ([#8554](https://github.com/nocobase/nocobase/pull/8554)) par @gchust

- **[Modèles d'interface]** Correction d'une erreur lors de la réouverture et de la soumission d'un modèle de fenêtre contextuelle sauvegardé pour le formulaire « Ajouter nouveau » du champ d'association. ([#8564](https://github.com/nocobase/nocobase/pull/8564)) par @gchust

- **[Champ de collection : Pièce jointe (URL)]** Correction du problème où la configuration d'affichage du nom de fichier du champ URL de pièce jointe ne fonctionnait pas dans le formulaire d'édition ([#8571](https://github.com/nocobase/nocobase/pull/8571)) par @katherinehhh

- **[Employés IA]** Correction d'un problème où le nœud LLM échouait à envoyer des messages ([#8569](https://github.com/nocobase/nocobase/pull/8569)) par @2013xile

- **[Action : Importer des enregistrements]** Correction de la vulnérabilité de l'action d'importation ([#8544](https://github.com/nocobase/nocobase/pull/8544)) par @mytharcher

- **[Workflow : Événement d'action personnalisée]** Correction du problème où les paramètres et la charge utile étaient incorrects lors du déclenchement d'un workflow personnalisé par @mytharcher

- **[Multi-espace]**
  - ajout d'un script de migration pour supprimer x-ready-pretty dans le champ espace par @jiannx

  - suppression de l'attribut read-pretty pour le champ espace par @jiannx

- **[Workflow : Approbation]** Correction d'un problème de performance causé par le champ JSON dans le chargement de liste (MySQL) par @mytharcher
