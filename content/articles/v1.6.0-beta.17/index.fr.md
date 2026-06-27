---
title: "NocoBase v1.6.0-beta.17 : Ajout de la configuration d'infobulle pour les éléments de menu et les en-têtes de tableau"
description: "Notes de version de v1.6.0-beta.17"
---

### 🎉 Nouvelles fonctionnalités

- **[client]** Ajout de la configuration d'infobulle pour les éléments de menu et les en-têtes de tableau ([#6346](https://github.com/nocobase/nocobase/pull/6346)) par @Cyx649312038

- **[Visualisation de données]** Prise en charge du tri NULLS dans les requêtes de graphiques ([#6383](https://github.com/nocobase/nocobase/pull/6383)) par @2013xile

- **[Intégration IA]** Nouveau plugin : Intégration IA ([#6283](https://github.com/nocobase/nocobase/pull/6283)) par @2013xile
Référence : [Intégration IA](https://docs.nocobase.com/handbook/ai/service)
- **[Intégration IA (EE)]** Nouveau plugin : Intégration IA (EE) par @2013xile
Référence : [Intégration IA](https://docs.nocobase.com/handbook/ai/service)
### 🚀 Améliorations

- **[client]**
  - Ajout de la gestion du debounce pour les boutons ([#6351](https://github.com/nocobase/nocobase/pull/6351)) par @Cyx649312038

  - Rendre le menu réactif à la largeur de l'écran ([#6331](https://github.com/nocobase/nocobase/pull/6331)) par @zhangzhonghe

- **[Workflow]** Permettre d'ignorer le déclenchement du workflow de collecte dans un événement de base de données ([#6379](https://github.com/nocobase/nocobase/pull/6379)) par @mytharcher

- **[Workflow : Nœud d'agrégation]** Ajout d'un processus d'arrondi pour les nombres agrégés basés sur le type double ([#6358](https://github.com/nocobase/nocobase/pull/6358)) par @mytharcher

- **[Action : Importer des enregistrements Pro]** Prise en charge des options avancées dans le bouton d'importation Pro par @katherinehhh

- **[Workflow : JavaScript]** Prise en charge de l'importation de packages depuis un chemin absolu par @mytharcher

- **[Stockage de fichiers : S3(Pro)]** Tentative de rechargement des stockages si le stockage n'est pas trouvé par @jiannx

### 🐛 Corrections de bugs

- **[client]**
  - La traduction personnalisée du titre du menu est invalide ([#6377](https://github.com/nocobase/nocobase/pull/6377)) par @zhangzhonghe

  - Problème lié au fuseau horaire entraînant une heure de moins dans le sélecteur de date ([#6359](https://github.com/nocobase/nocobase/pull/6359)) par @katherinehhh

  - Paramètre de tri manquant pour les champs de collection héritée ([#6372](https://github.com/nocobase/nocobase/pull/6372)) par @katherinehhh

  - Le menu déroulant du paramètre de stockage du champ de pièce jointe n'affiche pas les options ([#6365](https://github.com/nocobase/nocobase/pull/6365)) par @katherinehhh

  - Les composants de sous-formulaire ne s'alignent pas avec le formulaire principal lorsque l'étiquette est masquée ([#6357](https://github.com/nocobase/nocobase/pull/6357)) par @katherinehhh

  - Le bloc d'association ne s'affiche pas dans la fenêtre contextuelle lors de l'héritage de collection ([#6303](https://github.com/nocobase/nocobase/pull/6303)) par @katherinehhh

  - Résolution du problème de barre de défilement lors de l'ouverture d'un onglet de page avec un bloc en pleine hauteur ([#6347](https://github.com/nocobase/nocobase/pull/6347)) par @katherinehhh

  - Correction de l'erreur lors de la création d'une collection de fichiers ([#6363](https://github.com/nocobase/nocobase/pull/6363)) par @mytharcher

- **[base de données]** Correction de l'erreur lors de la récupération des enregistrements de collection de relations si la clé source dans les champs de relation est une chaîne numérique ([#6360](https://github.com/nocobase/nocobase/pull/6360)) par @2013xile

- **[Client WEB]**
  - L'ajout d'onglets dans le tableau de gestion des routes ne prend pas effet ([#6362](https://github.com/nocobase/nocobase/pull/6362)) par @zhangzhonghe

  - Après avoir ajouté une page au tableau des routes, la page apparaît vide ([#6366](https://github.com/nocobase/nocobase/pull/6366)) par @zhangzhonghe

- **[Utilisateurs]**
  - Erreur "Aucune permission" lorsque les utilisateurs sans permission de gestion des utilisateurs consultent leur propre profil ([#6382](https://github.com/nocobase/nocobase/pull/6382)) par @2013xile

  - Erreur "Aucune permission" lors de la mise à jour des paramètres système dans la gestion des utilisateurs ([#6380](https://github.com/nocobase/nocobase/pull/6380)) par @2013xile

- **[Contrôle d'accès]** Dans le tableau de gestion des permissions, le nom de l'onglet est vide ([#6364](https://github.com/nocobase/nocobase/pull/6364)) par @zhangzhonghe

- **[Intégration IA]** Problème où le `baseURL` par défaut pour le fournisseur LLM est `undefined` ([#6367](https://github.com/nocobase/nocobase/pull/6367)) par @2013xile

- **[Workflow]** Correction de l'ACL pour obtenir un job ([#6352](https://github.com/nocobase/nocobase/pull/6352)) par @mytharcher

- **[Workflow : Événement d'action personnalisée]** Correction de la locale et de la collection modifiables après exécution par @mytharcher

- **[Action : Importer des enregistrements Pro]** Utilisation d'une option supplémentaire pour déterminer s'il faut déclencher le workflow ou non par @mytharcher

- **[Action : Exporter des enregistrements Pro]** L'action d'exportation Pro manque les paramètres de tri par @katherinehhh
