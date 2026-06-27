---
title: "Mises à jour hebdomadaires de NocoBase : Optimisations et corrections de bugs"
description: "Les mises à jour de cette semaine incluent : la prise en charge du filtrage des workflows par davantage de champs, l'ajout de la variable d'environnement pour contrôler les méthodes de sortie des journaux d'audit, et plus encore."
---

Résumez les journaux de mise à jour hebdomadaires du produit. Les dernières versions sont disponibles sur [notre blog](https://www.nocobase.com/en/blog/timeline).

**NocoBase est actuellement mis à jour avec trois branches : `main`, `next` et `develop`.**

![version.png](https://static-docs.nocobase.com/ba5f04e27e99c625cb3822da5df07860.png)

* `main` : La version la plus stable à ce jour, recommandée pour l'installation ;
* `next` : Version bêta, contient les nouvelles fonctionnalités à venir et a été testée préliminairement. Il peut y avoir des problèmes connus ou inconnus. Elle est principalement destinée aux utilisateurs testeurs pour recueillir des retours et optimiser davantage les fonctionnalités. Idéale pour les utilisateurs testeurs qui souhaitent découvrir les nouvelles fonctionnalités en avant-première et donner leur avis ;
* `develop` : Version alpha, contient le code de fonctionnalité le plus récent, peut être incomplète ou instable, principalement destinée au développement interne et à l'itération rapide. Adaptée aux utilisateurs techniques intéressés par les fonctionnalités de pointe du produit, mais avec des problèmes potentiels et des fonctionnalités incomplètes. Ne pas utiliser en production.

## main

![main.png](https://static-docs.nocobase.com/47a3c71734c1d0f908b51f9ebd53c0ac.png)

### [v1.7.9](https://www.nocobase.com/en/blog/v1.7.9)

*Date de sortie : 2025-06-11*

#### 🐛 Corrections de bugs

* **[client]** Correction des problèmes d'erreur de bloc ([#7048](https://github.com/nocobase/nocobase/pull/7048)) par @gchust

### [v1.7.8](https://www.nocobase.com/en/blog/v1.7.8)

*Date de sortie : 2025-06-10*

#### 🎉 Nouvelles fonctionnalités

- **[Journaux d'audit]** Ajout de la variable d'environnement `AUDIT_LOGGER_TRANSPORT` pour contrôler la méthode de sortie des journaux d'audit par @2013xile

#### 🚀 Améliorations

- **[Calendrier]** Prise en charge du réglage du jour de début de semaine dans le bloc calendrier ([#7032](https://github.com/nocobase/nocobase/pull/7032)) par @katherinehhh
- **[Champ de collection : Plusieurs à plusieurs (tableau)]** Erreurs liées aux autorisations lors de l'affichage des champs plusieurs-à-plusieurs (plusieurs) dans les tableaux de données. ([#7028](https://github.com/nocobase/nocobase/pull/7028)) par @aaaaaajie

#### 🐛 Corrections de bugs

- **[client]**

  - Problème de fermeture automatique lors de la configuration des champs dans le formulaire contextuel secondaire ([#7042](https://github.com/nocobase/nocobase/pull/7042)) par @katherinehhh
  - Les options de champ de sélection ne fonctionnent pas dans les règles de liaison du formulaire de filtre ([#7035](https://github.com/nocobase/nocobase/pull/7035)) par @katherinehhh
  - Les règles de validation du formulaire de filtre rendent le bouton de filtre inefficace ([#6975](https://github.com/nocobase/nocobase/pull/6975)) par @zhangzhonghe
  - Correction de l'absence d'affichage des champs dans les modèles de bloc causée par des requêtes API en double ([#6985](https://github.com/nocobase/nocobase/pull/6985)) par @zhangzhonghe
- **[Action : Importer des enregistrements]** Correction de l'échec d'importation de la table enfant lorsque des champs relationnels sont impliqués ([#7039](https://github.com/nocobase/nocobase/pull/7039)) par @aaaaaajie
- **[Visualisation des données]** Les champs de groupe de cases à cocher dans les graphiques doivent afficher les libellés au lieu des valeurs brutes ([#7033](https://github.com/nocobase/nocobase/pull/7033)) par @2013xile
- **[Workflow]** Correction d'une erreur levée dans l'action d'exécution manuelle lorsque le déclencheur n'est pas configuré correctement ([#7036](https://github.com/nocobase/nocobase/pull/7036)) par @mytharcher
- **[Workflow : Approbation]**

  - Pour éviter une erreur de champ non défini par @mytharcher
  - Correction d'une erreur API lors de l'actualisation de la page de détail par @mytharcher
- **[WeCom]** Ajout d'une vérification du chemin de rappel dans le middleware de passerelle par @2013xile

### [v1.7.6](https://www.nocobase.com/en/blog/v1.7.6)

*Date de sortie : 2025-06-09*

#### 🚀 Améliorations

- **[client]** Interdiction de déplacer un menu de groupe dans lui-même ([#7005](https://github.com/nocobase/nocobase/pull/7005)) par @zhangzhonghe

#### 🐛 Corrections de bugs

- **[client]**

  - Résolution d'un problème où le bloc ne parvenait pas à lire les données de vue à partir de sources de données externes. ([#7017](https://github.com/nocobase/nocobase/pull/7017)) par @aaaaaajie
  - Correction du problème d'erreur de paramètre du bloc de filtre ([#6966](https://github.com/nocobase/nocobase/pull/6966)) par @zhangzhonghe
  - La variable d'objet actuel est invalide dans les règles de liaison ([#7008](https://github.com/nocobase/nocobase/pull/7008)) par @zhangzhonghe
  - Impossible d'effacer l'indicateur de champ obligatoire de la sous-table à l'aide des règles de liaison ([#7022](https://github.com/nocobase/nocobase/pull/7022)) par @zhangzhonghe
- **[non défini]** Suppression de la dépendance à la base de données pour possibleTypes, application de la configuration pilotée par API par @aaaaaajie
- **[Mobile]** Optimisation des problèmes de latence des fenêtres contextuelles mobiles ([#7029](https://github.com/nocobase/nocobase/pull/7029)) par @zhangzhonghe
- **[Gestionnaire de sources de données]** Suppression de la dépendance à la base de données pour possibleTypes, application de la configuration pilotée par API ([#7019](https://github.com/nocobase/nocobase/pull/7019)) par @aaaaaajie
- **[Action : Importer des enregistrements]** Correction des erreurs survenant lors de l'édition par lots lors de l'importation de données de table arborescente XLSX ([#7013](https://github.com/nocobase/nocobase/pull/7013)) par @aaaaaajie
- **[Workflow]** Correction d'une erreur d'interface utilisateur lorsque le workflow n'existe pas ([#7023](https://github.com/nocobase/nocobase/pull/7023)) par @mytharcher
- **[Workflow : JavaScript]** Correction de require pour le chemin relatif par @mytharcher
- **[Workflow : Approbation]**

  - Correction d'une erreur levée lorsque le workflow est supprimé par @mytharcher
  - Rechargement de l'association de fichiers à partir de l'instantané pour éviter l'expiration de l'URL par @mytharcher
  - Correction des variables de déclencheur par @mytharcher

### [v1.7.5](https://www.nocobase.com/en/blog/v1.7.5)

*Date de sortie : 2025-06-07*

#### 🐛 Corrections de bugs

- **[client]** Utilisation d'une portée de variable indépendante pour chaque champ ([#7012](https://github.com/nocobase/nocobase/pull/7012)) par @mytharcher
- **[base de données]** correction : ajout des champs créateur et modificateur manquants dans l'importation xlsx ([#7011](https://github.com/nocobase/nocobase/pull/7011)) par @aaaaaajie
- **[Workflow]** Correction du déclenchement de l'événement de collection en mode création ou mise à jour lors de la création sans champ modifié ([#7015](https://github.com/nocobase/nocobase/pull/7015)) par @mytharcher
- **[Action : Exporter les enregistrements Pro]** Correction de l'erreur qui se produit lors de l'exportation de pièces jointes avec conditions. par @aaaaaajie

### [v1.7.4](https://www.nocobase.com/en/blog/v1.7.4)

*Date de sortie : 2025-06-07*

#### 🐛 Corrections de bugs

- **[client]**

  - Les champs d'association affichent la sous-table et le sous-formulaire au survol en mode lecture seule ([#7002](https://github.com/nocobase/nocobase/pull/7002)) par @zhangzhonghe
  - Les règles de liaison du bloc markdown ne fonctionnent pas lorsqu'elles sont déclenchées par une action contextuelle ([#7007](https://github.com/nocobase/nocobase/pull/7007)) par @katherinehhh
- **[Localisation]** Résolution d'une erreur causée par des textes vides ([#7010](https://github.com/nocobase/nocobase/pull/7010)) par @2013xile
- **[Gestionnaire de tâches asynchrones]** Correction d'un problème d'exécution multiple lors de l'importation asynchrone ([#7006](https://github.com/nocobase/nocobase/pull/7006)) par @aaaaaajie
- **[Action : Exporter les enregistrements Pro]** Correction d'un problème d'exécution multiple lors de l'importation asynchrone par @aaaaaajie
- **[Workflow : Approbation]** Correction de l'impossibilité de continuer l'approbation déléguée lorsqu'elle est approuvée par d'autres par @mytharcher

### [v1.7.3](https://www.nocobase.com/en/blog/v1.7.3)

*Date de sortie : 2025-06-06*

#### 🚀 Améliorations

- **[Workflow]** Prise en charge du filtrage de davantage de champs de workflow ([#6995](https://github.com/nocobase/nocobase/pull/6995)) par @mytharcher

#### 🐛 Corrections de bugs

- **[client]**
  - Le changement de page dans la sous-table du bloc de détail dans la fenêtre modale déclenche un avertissement de modifications non enregistrées ([#7004](https://github.com/nocobase/nocobase/pull/7004)) par @katherinehhh
  - Titre de champ manquant lors de la définition d'une variable dans le composant d'affectation ([#7001](https://github.com/nocobase/nocobase/pull/7001)) par @katherinehhh
  - Les règles de liaison de style de champ ne fonctionnent pas ([#7003](https://github.com/nocobase/nocobase/pull/7003)) par @katherinehhh

### [v1.7.2](https://www.nocobase.com/en/blog/v1.7.2)

*Date de sortie : 2025-06-05*

#### 🚀 Améliorations

- **[Action : Modification par lots]** Utilisation de `filterByTk` au lieu de `filter` en mode sélectionné ([#6994](https://github.com/nocobase/nocobase/pull/6994)) par @mytharcher
- **[Action : Importer des enregistrements Pro]** Optimisation des problèmes de performances lors du traitement de fichiers XLSX volumineux (jeux de données à lignes/colonnes élevées), empêchant les plantages ou les blocages du système. par @aaaaaajie

#### 🐛 Corrections de bugs

- **[client]**

  - Titre de champ manquant dans le composant assignedField ([#6987](https://github.com/nocobase/nocobase/pull/6987)) par @katherinehhh
  - Le dernier élément de menu ne peut pas être sélectionné dans la liste de déplacement de menu ([#6997](https://github.com/nocobase/nocobase/pull/6997)) par @zhangzhonghe
- **[Workflow]**

  - Correction du filtre non mis à jour lors du changement d'onglets de catégories ([#6989](https://github.com/nocobase/nocobase/pull/6989)) par @mytharcher
  - Correction des statistiques de workflow non créées automatiquement ([#6993](https://github.com/nocobase/nocobase/pull/6993)) par @mytharcher

## next

![next.png](https://static-docs.nocobase.com/8ed17a0f08cc585018f6de6c8b13947d.png)

### [v1.8.0-beta.5](https://www.nocobase.com/en/blog/v1.8.0-beta.5)

*Date de sortie : 2025-06-07*

#### 🚀 Améliorations

- **[Workflow]** Prise en charge du filtrage de davantage de champs de workflow ([#6995](https://github.com/nocobase/nocobase/pull/6995)) par @mytharcher

#### 🐛 Corrections de bugs

- **[client]**

  - Les règles de liaison du bloc markdown ne fonctionnent pas lorsqu'elles sont déclenchées par une action contextuelle ([#7007](https://github.com/nocobase/nocobase/pull/7007)) par @katherinehhh
  - Les champs d'association affichent la sous-table et le sous-formulaire au survol en mode lecture seule ([#7002](https://github.com/nocobase/nocobase/pull/7002)) par @zhangzhonghe
  - Les règles de liaison de style de champ ne fonctionnent pas ([#7003](https://github.com/nocobase/nocobase/pull/7003)) par @katherinehhh
  - Titre de champ manquant lors de la définition d'une variable dans le composant d'affectation ([#7001](https://github.com/nocobase/nocobase/pull/7001)) par @katherinehhh
  - Le changement de page dans la sous-table du bloc de détail dans la fenêtre modale déclenche un avertissement de modifications non enregistrées ([#7004](https://github.com/nocobase/nocobase/pull/7004)) par @katherinehhh
- **[Gestionnaire de tâches asynchrones]** Correction d'un problème d'exécution multiple lors de l'importation asynchrone ([#7006](https://github.com/nocobase/nocobase/pull/7006)) par @aaaaaajie
- **[Localisation]** Résolution d'une erreur causée par des textes vides ([#7010](https://github.com/nocobase/nocobase/pull/7010)) par @2013xile
- **[Action : Exporter les enregistrements Pro]** Correction d'un problème d'exécution multiple lors de l'importation asynchrone par @aaaaaajie
- **[Workflow : Approbation]** Correction de l'impossibilité de continuer l'approbation déléguée lorsqu'elle est approuvée par d'autres par @mytharcher

### [v1.8.0-beta.4](https://www.nocobase.com/en/blog/v1.8.0-beta.4)

*Date de sortie : 2025-06-05*

#### 🚀 Améliorations

- **[Action : Modification par lots]** Utilisation de `filterByTk` au lieu de `filter` en mode sélectionné ([#6994](https://github.com/nocobase/nocobase/pull/6994)) par @mytharcher
- **[Action : Importer des enregistrements Pro]** Optimisation des problèmes de performances lors du traitement de fichiers XLSX volumineux (jeux de données à lignes/colonnes élevées), empêchant les plantages ou les blocages du système. par @aaaaaajie

#### 🐛 Corrections de bugs

- **[client]**

  - Titre de champ manquant dans le composant assignedField ([#6987](https://github.com/nocobase/nocobase/pull/6987)) par @katherinehhh
  - Le dernier élément de menu ne peut pas être sélectionné dans la liste de déplacement de menu ([#6997](https://github.com/nocobase/nocobase/pull/6997)) par @zhangzhonghe
- **[Workflow]**

  - Correction du filtre non mis à jour lors du changement d'onglets de catégories ([#6989](https://github.com/nocobase/nocobase/pull/6989)) par @mytharcher
  - Correction des statistiques de workflow non créées automatiquement ([#6993](https://github.com/nocobase/nocobase/pull/6993)) par @mytharcher

## develop

![develop.png](https://static-docs.nocobase.com/7fcdd9456a17286d8a439eee52bcb8d2.png)

### [v1.8.0-alpha.4](https://www.nocobase.com/en/blog/v1.8.0-alpha.4)

*Date de sortie : 2025-06-07*

#### 🚀 Améliorations

- **[Workflow]** Prise en charge du filtrage de davantage de champs de workflow ([#6995](https://github.com/nocobase/nocobase/pull/6995)) par @mytharcher
- **[Gestionnaire d'e-mails]** prend en charge la valeur d'envoi par défaut dans la fenêtre contextuelle, prend en charge la recherche floue des destinataires et corrige les problèmes par @jiannx

#### 🐛 Corrections de bugs

- **[base de données]** correction : ajout des champs créateur et modificateur manquants dans l'importation xlsx ([#7011](https://github.com/nocobase/nocobase/pull/7011)) par @aaaaaajie
- **[client]**

  - Titre de champ manquant lors de la définition d'une variable dans le composant d'affectation ([#7001](https://github.com/nocobase/nocobase/pull/7001)) par @katherinehhh
  - Les champs d'association affichent la sous-table et le sous-formulaire au survol en mode lecture seule ([#7002](https://github.com/nocobase/nocobase/pull/7002)) par @zhangzhonghe
  - Les règles de liaison du bloc markdown ne fonctionnent pas lorsqu'elles sont déclenchées par une action contextuelle ([#7007](https://github.com/nocobase/nocobase/pull/7007)) par @katherinehhh
  - Le changement de page dans la sous-table du bloc de détail dans la fenêtre modale déclenche un avertissement de modifications non enregistrées ([#7004](https://github.com/nocobase/nocobase/pull/7004)) par @katherinehhh
  - Les règles de liaison de style de champ ne fonctionnent pas ([#7003](https://github.com/nocobase/nocobase/pull/7003)) par @katherinehhh
- **[Gestionnaire de tâches asynchrones]** Correction d'un problème d'exécution multiple lors de l'importation asynchrone ([#7006](https://github.com/nocobase/nocobase/pull/7006)) par @aaaaaajie
- **[Localisation]** Résolution d'une erreur causée par des textes vides ([#7010](https://github.com/nocobase/nocobase/pull/7010)) par @2013xile
- **[Action : Exporter les enregistrements Pro]** Correction d'un problème d'exécution multiple lors de l'importation asynchrone par @aaaaaajie
- **[Workflow : Approbation]** Correction de l'impossibilité de continuer l'approbation déléguée lorsqu'elle est approuvée par d'autres par @mytharcher
- **[Gestionnaire d'e-mails]**

  - plusieurs clés primaires pour la table "mailmessagelabels_mailmessages" par @jiannx
  - la fenêtre contextuelle de paramétrage ne s'affiche pas par @jiannx
  - recherche floue de courrier pour créer des filtres uniques par @jiannx
  - la recherche floue de destinataire prend en charge les champs associés par @jiannx
  - ajout du champ "id" à la table mailmessagelabelsMailmessages par @jiannx

### [v1.8.0-alpha.3](https://www.nocobase.com/en/blog/v1.8.0-alpha.3)

*Date de sortie : 2025-06-06*

#### 🚀 Améliorations

- **[Action : Modification par lots]** Utilisation de `filterByTk` au lieu de `filter` en mode sélectionné ([#6994](https://github.com/nocobase/nocobase/pull/6994)) par @mytharcher
- **[Action : Importer des enregistrements Pro]** Optimisation des problèmes de performances lors du traitement de fichiers XLSX volumineux (jeux de données à lignes/colonnes élevées), empêchant les plantages ou les blocages du système. par @aaaaaajie

#### 🐛 Corrections de bugs

- **[client]**

  - Titre de champ manquant dans le composant assignedField ([#6987](https://github.com/nocobase/nocobase/pull/6987)) par @katherinehhh
  - Le dernier élément de menu ne peut pas être sélectionné dans la liste de déplacement de menu ([#6997](https://github.com/nocobase/nocobase/pull/6997)) par @zhangzhonghe
  - Le contenu affiché incorrectement sur les pages ouvertes via des liens contextuels ([#6990](https://github.com/nocobase/nocobase/pull/6990)) par @zhangzhonghe
- **[Workflow]**

  - Correction du filtre non mis à jour lors du changement d'onglets de catégories ([#6989](https://github.com/nocobase/nocobase/pull/6989)) par @mytharcher
  - Correction des statistiques de workflow non créées automatiquement ([#6993](https://github.com/nocobase/nocobase/pull/6993)) par @mytharcher
