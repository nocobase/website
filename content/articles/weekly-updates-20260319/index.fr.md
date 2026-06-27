---
title: "Mises à jour hebdomadaires｜Possibilité d'ajouter des employés IA dans la fenêtre contextuelle des sous-tableaux"
description: "Ceci est un résumé des mises à jour et améliorations des fonctionnalités de NocoBase du 13 au 19 mars 2026."
---

Résumez les journaux de mise à jour hebdomadaires du produit. Les dernières versions sont consultables sur [notre blog](https://www.nocobase.com/en/blog/timeline).

**NocoBase est actuellement mis à jour avec trois branches : `main`, `next` et `develop`.**

![version.png](https://static-docs.nocobase.com/ba5f04e27e99c625cb3822da5df07860.png)

* `main` : La version la plus stable à ce jour, recommandée pour l'installation ;
* `next` : Version bêta, contient les nouvelles fonctionnalités à venir et a été testée préliminairement. Il peut y avoir des problèmes connus ou inconnus. Elle est principalement destinée aux utilisateurs de test pour recueillir des retours et optimiser davantage les fonctionnalités. Idéale pour les utilisateurs de test qui souhaitent découvrir les nouvelles fonctionnalités en avant-première et donner leur avis ;
* `develop` : Version alpha, contient le code de fonctionnalité le plus récent, peut être incomplète ou instable, principalement destinée au développement interne et à l'itération rapide. Adaptée aux utilisateurs techniques intéressés par les fonctionnalités de pointe du produit, mais avec des problèmes potentiels et des fonctionnalités incomplètes. Ne pas utiliser en production.

## main

![main.png](https://static-docs.nocobase.com/47a3c71734c1d0f908b51f9ebd53c0ac.png)

### [v2.0.19](https://www.nocobase.com/en/blog/v2.0.19)

*Date de sortie : 2026-03-18*

### 🚀 Améliorations

- **[Workflow]** Correction du problème où l'arrêt gracieux ne vidait pas tous les événements ([#8894](https://github.com/nocobase/nocobase/pull/8894)) par @mytharcher

### 🐛 Corrections de bugs

- **[Employés IA]** Correction du problème où l'URL spécifiée pour le service LLM n'était pas prise en compte dans les appels du modèle d'embedding de texte. ([#8892](https://github.com/nocobase/nocobase/pull/8892)) par @cgyrock
- **[Action : Importer des enregistrements Pro]** Correction du problème où l'événement `beforeStop` sur la sous-application n'était pas déclenché par @mytharcher

### [v2.0.18](https://www.nocobase.com/en/blog/v2.0.18)

*Date de sortie : 2026-03-17*

### 🎉 Nouvelles fonctionnalités

- **[Employés IA]**

  - Nettoyage planifié des données de point de contrôle de conversation IA. ([#8855](https://github.com/nocobase/nocobase/pull/8855)) par @cgyrock
  - Permet d'ajouter des employés IA dans la fenêtre contextuelle des sous-tableaux ([#8873](https://github.com/nocobase/nocobase/pull/8873)) par @2013xile
- **[Superviseur d'application]** Prise en charge du filtrage dans la liste des applications<br />Ajout de boîtes de dialogue de confirmation pour les actions de démarrage et d'arrêt<br />Tri des entrées de statut d'application par nom d'environnement par @2013xile

### 🚀 Améliorations

- **[serveur]** amélioration de la logique d'ajout de pm ([#8875](https://github.com/nocobase/nocobase/pull/8875)) par @chenos
- **[client]** Prise en charge de l'affichage d'un message de confirmation avant de fermer la fenêtre contextuelle. ([#8839](https://github.com/nocobase/nocobase/pull/8839)) par @gchust
- **[Gestionnaire de tâches asynchrones]** les tâches asynchrones sont ajoutées pour prendre en charge les travailleurs dans les messages d'erreur de publication ([#8849](https://github.com/nocobase/nocobase/pull/8849)) par @cgyrock

### 🐛 Corrections de bugs

- **[client]** Correction du problème où la fenêtre contextuelle « Sélectionner un enregistrement » dans le sous-tableau ne se chargeait pas correctement lors de la deuxième ouverture. ([#8865](https://github.com/nocobase/nocobase/pull/8865)) par @gchust
- **[Employés IA]** Correction des erreurs potentielles de variable non définie dans les scripts de migration de mise à niveau du plugin IA. ([#8883](https://github.com/nocobase/nocobase/pull/8883)) par @cgyrock
- **[Action : Importer des enregistrements Pro]** Correction du problème où les tâches asynchrones ne se terminent pas après une erreur lors de l'importation asynchrone par @cgyrock

### [v2.0.17](https://www.nocobase.com/en/blog/v2.0.17)

*Date de sortie : 2026-03-14*

### 🚀 Améliorations

- **[non défini]** README ([#8866](https://github.com/nocobase/nocobase/pull/8866)) par @gaston98765

### 🐛 Corrections de bugs

- **[client]** Correction du problème où les valeurs par défaut de certains champs ne prenaient pas effet après l'actualisation de la page. ([#8834](https://github.com/nocobase/nocobase/pull/8834)) par @gchust
- **[base de données]** Correction du problème de validation côté serveur pour les champs de date ([#8867](https://github.com/nocobase/nocobase/pull/8867)) par @2013xile
- **[Localisation]** localizationTexts: exception de permission d'interface manquante ([#8861](https://github.com/nocobase/nocobase/pull/8861)) par @jiannx
- **[IA : Base de connaissances]** Empêcher la suppression de la base de données vectorielles et du stockage vectoriel en cours d'utilisation. par @cgyrock

### [v2.0.16](https://www.nocobase.com/en/blog/v2.0.16)

*Date de sortie : 2026-03-12*

### 🐛 Corrections de bugs

- **[client]**

  - Correction de l'affichage des champs connectables lors de la liaison de blocs de données sous des sources de données externes ([#8848](https://github.com/nocobase/nocobase/pull/8848)) par @zhangzhonghe
  - correction de la hauteur du bloc de tableau qui était invalide ([#8842](https://github.com/nocobase/nocobase/pull/8842)) par @jiannx
  - Correction du problème où l'ajout d'un bloc de données ou l'actualisation de la page déclenchait un double rafraîchissement. ([#8851](https://github.com/nocobase/nocobase/pull/8851)) par @gchust
- **[Modèles d'interface utilisateur]** Correction des erreurs survenues lors de l'utilisation du modèle de bloc de formulaire d'édition et du modèle de bloc de détail. ([#8859](https://github.com/nocobase/nocobase/pull/8859)) par @gchust
- **[Brouillons de formulaire]** Correction du problème où les données du brouillon de formulaire étaient perdues lorsque la fenêtre contextuelle était ouverte plusieurs fois. ([#8858](https://github.com/nocobase/nocobase/pull/8858)) par @gchust
- **[Localisation]** les entrées non trouvées ne seront pas soumises dans l'état non-édition de la page. ([#8841](https://github.com/nocobase/nocobase/pull/8841)) par @jiannx
- **[Action : Importer des enregistrements Pro]** Correction du problème où plusieurs sélections ne pouvaient pas être effectuées pour les champs en double dans la configuration importée. par @jiannx

## next

![next.png](https://static-docs.nocobase.com/8ed17a0f08cc585018f6de6c8b13947d.png)

### [v2.1.0-beta.9](https://www.nocobase.com/en/blog/v2.1.0-beta.9)

*Date de sortie : 2026-03-12*

### 🐛 Corrections de bugs

- **[client]**

  - correction de la hauteur du bloc de tableau qui était invalide ([#8842](https://github.com/nocobase/nocobase/pull/8842)) par @jiannx
  - Correction du problème où l'ajout d'un bloc de données ou l'actualisation de la page déclenchait un double rafraîchissement. ([#8851](https://github.com/nocobase/nocobase/pull/8851)) par @gchust
  - Correction de l'affichage des champs connectables lors de la liaison de blocs de données sous des sources de données externes ([#8848](https://github.com/nocobase/nocobase/pull/8848)) par @zhangzhonghe
- **[Modèles d'interface utilisateur]** Correction des erreurs survenues lors de l'utilisation du modèle de bloc de formulaire d'édition et du modèle de bloc de détail. ([#8859](https://github.com/nocobase/nocobase/pull/8859)) par @gchust
- **[Brouillons de formulaire]** Correction du problème où les données du brouillon de formulaire étaient perdues lorsque la fenêtre contextuelle était ouverte plusieurs fois. ([#8858](https://github.com/nocobase/nocobase/pull/8858)) par @gchust
- **[Localisation]** les entrées non trouvées ne seront pas soumises dans l'état non-édition de la page. ([#8841](https://github.com/nocobase/nocobase/pull/8841)) par @jiannx
- **[Action : Importer des enregistrements Pro]** Correction du problème où plusieurs sélections ne pouvaient pas être effectuées pour les champs en double dans la configuration importée. par @jiannx
- **[Gestionnaire d'emails]** ajustements des destinataires de réponse et de réponse à tous, correction de l'échec d'ajout de champ de tableau et d'autres problèmes par @jiannx
- **[Gestionnaire de migration]** Correction du problème où les tables système ne pouvaient pas être sélectionnées dans les règles personnalisées par @cgyrock

## develop

![develop.png](https://static-docs.nocobase.com/7fcdd9456a17286d8a439eee52bcb8d2.png)

### [v2.1.0-alpha.9](https://www.nocobase.com/en/blog/v2.1.0-alpha.9)

*Date de sortie : 2026-03-14*

### 🎉 Nouvelles fonctionnalités

- **[Employés IA]** Permet d'ajouter des employés IA dans la fenêtre contextuelle des sous-tableaux ([#8873](https://github.com/nocobase/nocobase/pull/8873)) par @2013xile
- **[IA : Serveur MCP]** Ajout d'un nouveau plugin de serveur MCP pour permettre la construction de systèmes NocoBase et la prise en charge des workflows métier. ([#8824](https://github.com/nocobase/nocobase/pull/8824)) par @2013xile

### 🚀 Améliorations

- **[non défini]** README ([#8866](https://github.com/nocobase/nocobase/pull/8866)) par @gaston98765

### 🐛 Corrections de bugs

- **[base de données]** Correction du problème de validation côté serveur pour les champs de date ([#8867](https://github.com/nocobase/nocobase/pull/8867)) par @2013xile
- **[client]**

  - Correction de l'affichage des champs connectables lors de la liaison de blocs de données sous des sources de données externes ([#8848](https://github.com/nocobase/nocobase/pull/8848)) par @zhangzhonghe
  - Correction du problème où l'ajout d'un bloc de données ou l'actualisation de la page déclenchait un double rafraîchissement. ([#8851](https://github.com/nocobase/nocobase/pull/8851)) par @gchust
  - Correction du problème où les valeurs par défaut de certains champs ne prenaient pas effet après l'actualisation de la page. ([#8834](https://github.com/nocobase/nocobase/pull/8834)) par @gchust
  - correction de la hauteur du bloc de tableau qui était invalide ([#8842](https://github.com/nocobase/nocobase/pull/8842)) par @jiannx
- **[Localisation]**

  - localizationTexts: exception de permission d'interface manquante ([#8861](https://github.com/nocobase/nocobase/pull/8861)) par @jiannx
  - les entrées non trouvées ne seront pas soumises dans l'état non-édition de la page. ([#8841](https://github.com/nocobase/nocobase/pull/8841)) par @jiannx
- **[Brouillons de formulaire]** Correction du problème où les données du brouillon de formulaire étaient perdues lorsque la fenêtre contextuelle était ouverte plusieurs fois. ([#8858](https://github.com/nocobase/nocobase/pull/8858)) par @gchust
- **[Modèles d'interface utilisateur]** Correction des erreurs survenues lors de l'utilisation du modèle de bloc de formulaire d'édition et du modèle de bloc de détail. ([#8859](https://github.com/nocobase/nocobase/pull/8859)) par @gchust
- **[IA : Base de connaissances]** Empêcher la suppression de la base de données vectorielles et du stockage vectoriel en cours d'utilisation. par @cgyrock
- **[Action : Importer des enregistrements Pro]** Correction du problème où plusieurs sélections ne pouvaient pas être effectuées pour les champs en double dans la configuration importée. par @jiannx
- **[Gestionnaire d'emails]** ajustements des destinataires de réponse et de réponse à tous, correction de l'échec d'ajout de champ de tableau et d'autres problèmes par @jiannx
- **[Gestionnaire de migration]** Correction du problème où les tables système ne pouvaient pas être sélectionnées dans les règles personnalisées par @cgyrock
