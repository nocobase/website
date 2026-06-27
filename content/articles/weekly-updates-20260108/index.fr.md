---
title: "Mises à jour hebdomadaires de NocoBase : Optimisations et corrections de bugs"
description: "La mise à jour de cette semaine inclut : Prise en charge des composants de maintenance définis par les plugins lorsque l'application entre en état de maintenance, et plus encore."
---

Résumez les journaux de mise à jour hebdomadaires du produit. Les dernières versions sont disponibles sur [notre blog](https://www.nocobase.com/en/blog/timeline).

**NocoBase est actuellement mis à jour avec trois branches : `main`, `next` et `develop`.**

![version.png](https://static-docs.nocobase.com/ba5f04e27e99c625cb3822da5df07860.png)

* `main` : La version la plus stable à ce jour, recommandée pour l'installation ;
* `next` : Version bêta, contient les nouvelles fonctionnalités à venir et a été testée préliminairement. Il peut y avoir des problèmes connus ou inconnus. Elle est principalement destinée aux utilisateurs de test pour recueillir des retours et optimiser davantage les fonctionnalités. Idéale pour les utilisateurs de test qui souhaitent découvrir les nouvelles fonctionnalités en avant-première et donner leur avis ;
* `develop` : Version alpha, contient le code de fonctionnalité le plus récent, peut être incomplète ou instable, principalement destinée au développement interne et à l'itération rapide. Adaptée aux utilisateurs techniques intéressés par les fonctionnalités de pointe du produit, mais avec des problèmes potentiels et des fonctions incomplètes. Ne pas utiliser en production.

## main

![main.png](https://static-docs.nocobase.com/47a3c71734c1d0f908b51f9ebd53c0ac.png)

### [v1.9.33](https://www.nocobase.com/en/blog/v1.9.33)

*Date de sortie : 2026-01-04*

### 🎉 Nouvelles fonctionnalités

- **[client]** Prise en charge des composants de maintenance définis par le plugin lorsque l'application entre en état de maintenance ([#8252](https://github.com/nocobase/nocobase/pull/8252)) par @cgyrock
- **[Gestionnaire de fichiers]** Prise en charge de la configuration de la méthode de renommage des fichiers ([#8231](https://github.com/nocobase/nocobase/pull/8231)) par @JAVA-LW
- **[Stockage de fichiers : S3(Pro)]** Ajout d'une option de mode de renommage pour le stockage S3 Pro par @mytharcher

### 🚀 Améliorations

- **[Gestionnaire de migration]** Amélioration des vérifications de migration, prise en charge du téléchargement SQL, formatage des journaux et visibilité du processus d'exécution par @cgyrock

### 🐛 Corrections de bugs

- **[base de données]**

  - Inclure la portée de la table de liaison lors de l'interrogation des relations m2m ([#8277](https://github.com/nocobase/nocobase/pull/8277)) par @2013xile
  - Correction de l'objet `appends` dans `OptionsParser`, et augmentation de `arrayLimit` pour les paramètres ([#8328](https://github.com/nocobase/nocobase/pull/8328)) par @mytharcher
- **[client]** Correction du problème d'erreur levée dans les paramètres du bloc de formulaire de filtre d'un champ m2m ([#8282](https://github.com/nocobase/nocobase/pull/8282)) par @mytharcher
- **[Gestionnaire de tâches asynchrones]** Correction de la langue pour l'annulation d'une tâche en arrière-plan ([#8245](https://github.com/nocobase/nocobase/pull/8245)) par @mytharcher
- **[Gestionnaire de fichiers]** Correction du problème d'erreur levée lors du téléchargement d'un fichier de plus de 5 Mo vers AWS S3 ([#8275](https://github.com/nocobase/nocobase/pull/8275)) par @mytharcher
- **[Workflow]** Correction des événements de base de données devenus invalides après l'actualisation de la source de données externe ([#8207](https://github.com/nocobase/nocobase/pull/8207)) par @cgyrock
- **[Collection : Arborescence]** Mise à jour des chemins après la création en masse de nœuds de collection arborescente ([#8267](https://github.com/nocobase/nocobase/pull/8267)) par @2013xile
- **[Source de données : PostgreSQL externe]** Correction des événements de base de données devenus invalides après l'actualisation de la source de données externe par @cgyrock
- **[Source de données : Oracle externe]** Correction des événements de base de données devenus invalides après l'actualisation de la source de données externe par @cgyrock

## next

![next.png](https://static-docs.nocobase.com/8ed17a0f08cc585018f6de6c8b13947d.png)

### [v2.0.0-beta.6](https://www.nocobase.com/en/blog/v2.0.0-beta.6)

*Date de sortie : 2026-01-07*

### 🚀 Améliorations

- **[Workflow : Approbation]** Simplification des paramètres dans la requête et amélioration des performances par @mytharcher

### 🐛 Corrections de bugs

- **[sdk]** Amélioration de l'implémentation du partage de jetons ([#8357](https://github.com/nocobase/nocobase/pull/8357)) par @chenos
- **[client]** Correction du problème où les champs d'association provenant de sources de données externes ne chargeaient pas les données d'association dans les blocs de formulaire ([#8356](https://github.com/nocobase/nocobase/pull/8356)) par @katherinehhh
- **[Workflow : Nœud de boucle]** Correction du problème où un nœud ayant échoué dans une branche conditionnelle ne pouvait pas transmettre son statut au nœud de branchement supérieur ([#8360](https://github.com/nocobase/nocobase/pull/8360)) par @mytharcher
- **[Contrôle d'accès]** Autoriser les champs d'association à s'associer en utilisant les clés cibles ([#8352](https://github.com/nocobase/nocobase/pull/8352)) par @2013xile
- **[Workflow : Webhook]** Correction du problème d'erreur 404 levée lors de l'envoi (POST) vers une URL webhook dans une sous-application par @mytharcher
- **[Gestionnaire d'emails]** Correction de la déconnexion occasionnelle du lien de réponse Outlook par @jiannx

### [v2.0.0-beta.5](https://www.nocobase.com/en/blog/v2.0.0-beta.5)

*Date de sortie : 2026-01-06*

### 🚀 Améliorations

- **[client]** Redimensionnement automatique de la zone de texte dans le formulaire de tâche d'édition IA. ([#8350](https://github.com/nocobase/nocobase/pull/8350)) par @heziqiang
- **[Workflow : Approbation]** Ajout d'une logique de réparation pour la synchronisation des audiences après la migration par @mytharcher

### 🐛 Corrections de bugs

- **[client]** Correction d'un problème où les autorisations de champ et d'action n'étaient pas recalculées après la pagination dans les blocs de détails, de liste et de formulaire. ([#8336](https://github.com/nocobase/nocobase/pull/8336)) par @gchust
- **[Workflow : Approbation]** Correction d'une erreur de construction causée par des dépendances manquantes par @mytharcher

### [v2.0.0-beta.4](https://www.nocobase.com/en/blog/v2.0.0-beta.4)

*Date de sortie : 2026-01-05*

### 🐛 Corrections de bugs

- **[Action : Importer des enregistrements]** Correction d'un message d'erreur incorrect lorsqu'une erreur de contrainte unique est déclenchée lors de l'importation XLSX asynchrone ([#8342](https://github.com/nocobase/nocobase/pull/8342)) par @cgyrock
- **[Action : Exporter des enregistrements Pro]** Correction d'une erreur lorsque les sous-applications exécutent des tâches d'import/export asynchrones alors que l'application principale n'active pas le plugin d'import/export pro par @cgyrock
- **[Gestionnaire d'emails]** Afficher le bouton "Répondre à tous" et la portée des données prend en charge le filtrage des messages enfants. par @jiannx

### [v2.0.0-beta.3](https://www.nocobase.com/en/blog/v2.0.0-beta.3)

*Date de sortie : 2026-01-05*

### 🚀 Améliorations

- **[Contrôle d'accès]** Amélioration des vérifications d'autorisation lors de la modification de champs d'association imbriqués ([#7856](https://github.com/nocobase/nocobase/pull/7856)) par @2013xile

### 🐛 Corrections de bugs

- **[client]** Correction du problème où les champs d'association n'étaient pas corrects dans le composant `FilterAction` ([#8295](https://github.com/nocobase/nocobase/pull/8295)) par @mytharcher
- **[Source de données : Principale]** Les métadonnées de la collection de vues doivent inclure les options des champs source ([#8337](https://github.com/nocobase/nocobase/pull/8337)) par @2013xile
- **[Workflow : Approbation]** Correction du problème où les champs de filtre ne fonctionnaient pas correctement dans le centre de tâches par @mytharcher

### [v2.0.0-beta.2](https://www.nocobase.com/en/blog/v2.0.0-beta.2)

*Date de sortie : 2026-01-04*

### 🐛 Corrections de bugs

- **[moteur de flux]** Correction d'un problème où une pollution d'état pouvait se produire lors de l'ouverture multiple de popups. ([#8327](https://github.com/nocobase/nocobase/pull/8327)) par @gchust
- **[base de données]** Correction de l'objet `appends` dans `OptionsParser`, et augmentation de `arrayLimit` pour les paramètres ([#8328](https://github.com/nocobase/nocobase/pull/8328)) par @mytharcher

## develop

![develop.png](https://static-docs.nocobase.com/7fcdd9456a17286d8a439eee52bcb8d2.png)

### [v2.0.0-alpha.63](https://www.nocobase.com/en/blog/v2.0.0-alpha.63)

*Date de sortie : 2026-01-07*

### 🚀 Améliorations

- **[client]**

  - Empêcher le re-rendu complet du tableau lors de la mise à jour d'une cellule ([#8349](https://github.com/nocobase/nocobase/pull/8349)) par @katherinehhh
  - Redimensionnement automatique de la zone de texte dans le formulaire de tâche d'édition IA. ([#8350](https://github.com/nocobase/nocobase/pull/8350)) par @heziqiang
- **[Workflow : Approbation]**

  - Ajout d'une logique de réparation pour la synchronisation des audiences après la migration par @mytharcher
  - Simplification des paramètres dans la requête et amélioration des performances par @mytharcher

### 🐛 Corrections de bugs

- **[client]**

  - Correction d'un problème où les autorisations de champ et d'action n'étaient pas recalculées après la pagination dans les blocs de détails, de liste et de formulaire. ([#8336](https://github.com/nocobase/nocobase/pull/8336)) par @gchust
  - Correction du problème où les champs d'association provenant de sources de données externes ne chargeaient pas les données d'association dans les blocs de formulaire ([#8356](https://github.com/nocobase/nocobase/pull/8356)) par @katherinehhh
- **[sdk]** Amélioration de l'implémentation du partage de jetons ([#8357](https://github.com/nocobase/nocobase/pull/8357)) par @chenos
- **[Contrôle d'accès]** Autoriser les champs d'association à s'associer en utilisant les clés cibles ([#8352](https://github.com/nocobase/nocobase/pull/8352)) par @2013xile
- **[Workflow : Nœud de boucle]** Correction du problème où un nœud ayant échoué dans une branche conditionnelle ne pouvait pas transmettre son statut au nœud de branchement supérieur ([#8360](https://github.com/nocobase/nocobase/pull/8360)) par @mytharcher
- **[Workflow : Webhook]** Correction du problème d'erreur 404 levée lors de l'envoi (POST) vers une URL webhook dans une sous-application par @mytharcher
- **[Workflow : Approbation]** Correction d'une erreur de construction causée par des dépendances manquantes par @mytharcher
- **[Gestionnaire d'emails]** Correction de la déconnexion occasionnelle du lien de réponse Outlook par @jiannx

### [v2.0.0-alpha.62](https://www.nocobase.com/en/blog/v2.0.0-alpha.62)

*Date de sortie : 2026-01-05*

### 🚀 Améliorations

- **[Contrôle d'accès]** Amélioration des vérifications d'autorisation lors de la modification de champs d'association imbriqués ([#7856](https://github.com/nocobase/nocobase/pull/7856)) par @2013xile

### 🐛 Corrections de bugs

- **[client]**

  - Correction de la logique d'affinement pour `targetKey` optionnel ([#8333](https://github.com/nocobase/nocobase/pull/8333)) par @katherinehhh
  - Correction du problème où les champs d'association n'étaient pas corrects dans le composant `FilterAction` ([#8295](https://github.com/nocobase/nocobase/pull/8295)) par @mytharcher
  - Correction des paramètres de filtre incorrects pour le champ de relation `Select` dans un sous-tableau éditable ([#8335](https://github.com/nocobase/nocobase/pull/8335)) par @katherinehhh
- **[moteur de flux]** Correction d'un problème où une pollution d'état pouvait se produire lors de l'ouverture multiple de popups. ([#8327](https://github.com/nocobase/nocobase/pull/8327)) par @gchust
- **[base de données]** Correction de l'objet `appends` dans `OptionsParser`, et augmentation de `arrayLimit` pour les paramètres ([#8328](https://github.com/nocobase/nocobase/pull/8328)) par @mytharcher
- **[Action : Importer des enregistrements]** Correction d'un message d'erreur incorrect lorsqu'une erreur de contrainte unique est déclenchée lors de l'importation XLSX asynchrone ([#8342](https://github.com/nocobase/nocobase/pull/8342)) par @cgyrock
- **[Source de données : Principale]** Les métadonnées de la collection de vues doivent inclure les options des champs source ([#8337](https://github.com/nocobase/nocobase/pull/8337)) par @2013xile
- **[Action : Exporter des enregistrements Pro]** Correction d'une erreur lorsque les sous-applications exécutent des tâches d'import/export asynchrones alors que l'application principale n'active pas le plugin d'import/export pro par @cgyrock
- **[Workflow : Approbation]** Correction du problème où les champs de filtre ne fonctionnaient pas correctement dans le centre de tâches par @mytharcher
- **[Gestionnaire d'emails]** Afficher le bouton "Répondre à tous" et la portée des données prend en charge le filtrage des messages enfants. par @jiannx

### [v2.0.0-alpha.59](https://www.nocobase.com/en/blog/v2.0.0-alpha.59)

*Date de sortie : 2025-12-25*

### 🚀 Améliorations

- **[moteur de flux]**
  - Optimisation des problèmes de performances lors du changement de modes de configuration ([#8241](https://github.com/nocobase/nocobase/pull/8241)) par @zhangzhonghe
  - Prise en charge de l'objet FormData dans l'environnement runjs. ([#8263](https://github.com/nocobase/nocobase/pull/8263)) par @gchust

### 🐛 Corrections de bugs

- **[client]** Correction d'un débordement de pile causé par une boucle infinie dans le chargement paresseux des champs d'association d'affichage ([#8262](https://github.com/nocobase/nocobase/pull/8262)) par @zhangzhonghe
