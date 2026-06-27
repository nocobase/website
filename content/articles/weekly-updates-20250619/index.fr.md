---
title: "Mises à jour hebdomadaires de NocoBase : Prise en charge du remplissage des champs de saisie via scan de code QR"
description: "Les mises à jour de cette semaine incluent : la prise en charge de la copie en un clic du contenu des champs de texte, les paramètres d'intervalle de synchronisation des e-mails, et plus encore."
---

Résumez les journaux de mise à jour hebdomadaires du produit. Les dernières versions sont disponibles sur [notre blog](https://www.nocobase.com/en/blog/timeline).

**NocoBase est actuellement mis à jour avec trois branches : `main`, `next` et `develop`.**

![version.png](https://static-docs.nocobase.com/ba5f04e27e99c625cb3822da5df07860.png)

* `main` : La version la plus stable à ce jour, recommandée pour l'installation ;
* `next` : Version bêta, contient les nouvelles fonctionnalités à venir et a été testée préliminairement. Il peut y avoir des problèmes connus ou inconnus. Elle est principalement destinée aux utilisateurs de test pour recueillir des retours et optimiser davantage les fonctions. Idéale pour les utilisateurs de test qui souhaitent découvrir les nouvelles fonctionnalités en avant-première et donner leur avis ;
* `develop` : Version alpha, contient le code de fonctionnalité le plus récent, peut être incomplète ou instable, principalement destinée au développement interne et à l'itération rapide. Adaptée aux utilisateurs techniques intéressés par les fonctionnalités de pointe du produit, mais avec des problèmes potentiels et des fonctions incomplètes. Ne convient pas à une utilisation en production.

## main

![main.png](https://static-docs.nocobase.com/47a3c71734c1d0f908b51f9ebd53c0ac.png)

### [v1.7.14](https://www.nocobase.com/en/blog/v1.7.14)

*Date de sortie : 2025-06-18*

#### 🚀 Améliorations

- **[client]** Masquer automatiquement la barre d'actions du bloc de carte en grille lorsqu'elle est vide ([#7069](https://github.com/nocobase/nocobase/pull/7069)) par @zhangzhonghe
- **[Vérification]** Supprimer les options de vérificateur de la réponse de l'API `verifiers:listByUser` ([#7090](https://github.com/nocobase/nocobase/pull/7090)) par @2013xile

#### 🐛 Corrections de bugs

- **[base de données]** Prise en charge des mises à jour d'association dans updateOrCreate et firstOrCreate ([#7088](https://github.com/nocobase/nocobase/pull/7088)) par @chenos
- **[client]**

  - Les variables de paramètre de requête URL ne fonctionnent pas dans la valeur par défaut du champ de formulaire public ([#7084](https://github.com/nocobase/nocobase/pull/7084)) par @katherinehhh
  - La condition de style sur les champs de colonne de sous-tableau n'est pas appliquée correctement ([#7083](https://github.com/nocobase/nocobase/pull/7083)) par @katherinehhh
  - Le filtrage via les champs de collection de relations dans les formulaires de filtre est invalide ([#7070](https://github.com/nocobase/nocobase/pull/7070)) par @zhangzhonghe
- **[Champ de collection : Plusieurs-à-plusieurs (tableau)]** La mise à jour d'un champ plusieurs-à-plusieurs (tableau) génère une erreur lorsque le champ `updatedBy` est présent ([#7089](https://github.com/nocobase/nocobase/pull/7089)) par @2013xile
- **[Formulaires publics]** Formulaires publics : Correction d'un problème d'accès non autorisé lors de la soumission du formulaire ([#7085](https://github.com/nocobase/nocobase/pull/7085)) par @zhangzhonghe

### [v1.7.13](https://www.nocobase.com/en/blog/v1.7.13)

*Date de sortie : 2025-06-17*

#### 🚀 Améliorations

- **[client]** La largeur du conteneur du logo s'adapte au type de contenu (168px fixe pour les images, largeur automatique pour le texte) ([#7075](https://github.com/nocobase/nocobase/pull/7075)) par @Cyx649312038
- **[Workflow : Approbation]** Ajout d'une option de champ supplémentaire pour la liste des réaffectataires par @mytharcher

#### 🐛 Corrections de bugs

- **[client]**

  - Le message de validation obligatoire dans le sous-tableau persiste lors du changement de page ([#7080](https://github.com/nocobase/nocobase/pull/7080)) par @katherinehhh
  - Perte du point décimal après le passage du composant de montant de mask à inputNumer ([#7077](https://github.com/nocobase/nocobase/pull/7077)) par @katherinehhh
  - Rendu incorrect du Markdown (Vditor) dans le sous-tableau ([#7074](https://github.com/nocobase/nocobase/pull/7074)) par @katherinehhh
- **[Champ de collection : Séquence]** Correction du calcul de séquence bigint basée sur une chaîne ([#7079](https://github.com/nocobase/nocobase/pull/7079)) par @mytharcher
- **[Gestionnaire de sauvegarde]** Erreur de commande inconnue lors de la restauration de sauvegardes MySQL sur la plateforme Windows par @gchust

### [v1.7.12](https://www.nocobase.com/en/blog/v1.7.12)

*Date de sortie : 2025-06-16*

#### 🚀 Améliorations

- **[client]** Ajout des options "vide" et "non vide" aux règles de liaison des champs de case à cocher ([#7073](https://github.com/nocobase/nocobase/pull/7073)) par @katherinehhh

#### 🐛 Corrections de bugs

- **[client]** Après la création du champ de relation inverse, l'option "Créer un champ de relation inverse dans la table de données cible" dans les paramètres du champ d'association n'était pas cochée. ([#6914](https://github.com/nocobase/nocobase/pull/6914)) par @aaaaaajie
- **[Gestionnaire de source de données]** Les modifications de portée prennent désormais effet immédiatement pour tous les rôles concernés. ([#7065](https://github.com/nocobase/nocobase/pull/7065)) par @aaaaaajie
- **[Contrôle d'accès]** Correction d'un problème où l'application bloquait l'entrée lorsqu'aucun rôle par défaut n'existait ([#7059](https://github.com/nocobase/nocobase/pull/7059)) par @aaaaaajie
- **[Workflow : Événement d'action personnalisée]** Correction de la variable d'URL de redirection non analysée par @mytharcher

### [v1.7.11](https://www.nocobase.com/en/blog/v1.7.11)

*Date de sortie : 2025-06-15*

#### 🎉 Nouvelles fonctionnalités

- **[Copie de texte]** Prise en charge de la copie en un clic du contenu du champ de texte ([#6954](https://github.com/nocobase/nocobase/pull/6954)) par @zhangzhonghe

#### 🐛 Corrections de bugs

- **[client]**

  - Le sélecteur de champ d'association n'efface pas les données sélectionnées après la soumission ([#7067](https://github.com/nocobase/nocobase/pull/7067)) par @katherinehhh
  - Correction de l'indication de taille de téléchargement ([#7057](https://github.com/nocobase/nocobase/pull/7057)) par @mytharcher
- **[serveur]** Impossible de lire les propriétés de undefined (lecture de 'setMaaintainingMessage') ([#7064](https://github.com/nocobase/nocobase/pull/7064)) par @chenos
- **[Workflow : Nœud de boucle]** Correction de l'exécution de la branche de boucle lorsque la condition n'est pas satisfaite ([#7063](https://github.com/nocobase/nocobase/pull/7063)) par @mytharcher
- **[Workflow : Approbation]**

  - Correction des statistiques de tâches non mises à jour lorsque l'exécution est annulée par @mytharcher
  - Correction de la variable de déclencheur lors du filtrage par type par @mytharcher

### [v1.7.10](https://www.nocobase.com/en/blog/v1.7.10)

*Date de sortie : 2025-06-12*

#### 🐛 Corrections de bugs

- **[client]**

  - Correction du problème où les règles de liaison provoquaient une boucle infinie ([#7050](https://github.com/nocobase/nocobase/pull/7050)) par @zhangzhonghe
  - Correction : utilisation du chaînage optionnel pour rejeter en toute sécurité les requêtes dans APIClient lorsque le gestionnaire peut être indéfini ([#7054](https://github.com/nocobase/nocobase/pull/7054)) par @sheldon66
  - Problème de fermeture automatique lors de la configuration des champs dans le formulaire contextuel secondaire ([#7052](https://github.com/nocobase/nocobase/pull/7052)) par @katherinehhh
- **[Visualisation de données]** Affichage incorrect du champ de date entre dans le filtre du graphique ([#7051](https://github.com/nocobase/nocobase/pull/7051)) par @katherinehhh
- **[Documentation API]** Les plugins non officiels de NocoBase ne parviennent pas à afficher la documentation API ([#7045](https://github.com/nocobase/nocobase/pull/7045)) par @chenzhizdt
- **[Action : Importer des enregistrements]** Correction de l'importation xlsx pour restreindre les champs de zone de texte à accepter des données non formatées en chaîne ([#7049](https://github.com/nocobase/nocobase/pull/7049)) par @aaaaaajie

## next

![next.png](https://static-docs.nocobase.com/8ed17a0f08cc585018f6de6c8b13947d.png)

### [v1.8.0-beta.9](https://www.nocobase.com/en/blog/v1.8.0-beta.9)

*Date de sortie : 2025-06-18*

#### 🚀 Améliorations

- **[client]**

  - Masquer automatiquement la barre d'actions du bloc de carte en grille lorsqu'elle est vide ([#7069](https://github.com/nocobase/nocobase/pull/7069)) par @zhangzhonghe
  - La largeur du conteneur du logo s'adapte au type de contenu (168px fixe pour les images, largeur automatique pour le texte) ([#7075](https://github.com/nocobase/nocobase/pull/7075)) par @Cyx649312038
- **[Vérification]** Supprimer les options de vérificateur de la réponse de l'API `verifiers:listByUser` ([#7090](https://github.com/nocobase/nocobase/pull/7090)) par @2013xile

#### 🐛 Corrections de bugs

- **[client]**

  - Le message de validation obligatoire dans le sous-tableau persiste lors du changement de page ([#7080](https://github.com/nocobase/nocobase/pull/7080)) par @katherinehhh
  - La condition de style sur les champs de colonne de sous-tableau n'est pas appliquée correctement ([#7083](https://github.com/nocobase/nocobase/pull/7083)) par @katherinehhh
  - Perte du point décimal après le passage du composant de montant de mask à inputNumer ([#7077](https://github.com/nocobase/nocobase/pull/7077)) par @katherinehhh
  - Les variables de paramètre de requête URL ne fonctionnent pas dans la valeur par défaut du champ de formulaire public ([#7084](https://github.com/nocobase/nocobase/pull/7084)) par @katherinehhh
  - Le filtrage via les champs de collection de relations dans les formulaires de filtre est invalide ([#7070](https://github.com/nocobase/nocobase/pull/7070)) par @zhangzhonghe
  - Rendu incorrect du Markdown (Vditor) dans le sous-tableau ([#7074](https://github.com/nocobase/nocobase/pull/7074)) par @katherinehhh
- **[base de données]** Prise en charge des mises à jour d'association dans updateOrCreate et firstOrCreate ([#7088](https://github.com/nocobase/nocobase/pull/7088)) par @chenos
- **[Champ de collection : Plusieurs-à-plusieurs (tableau)]** La mise à jour d'un champ plusieurs-à-plusieurs (tableau) génère une erreur lorsque le champ `updatedBy` est présent ([#7089](https://github.com/nocobase/nocobase/pull/7089)) par @2013xile
- **[Champ de collection : Séquence]** Correction du calcul de séquence bigint basée sur une chaîne ([#7079](https://github.com/nocobase/nocobase/pull/7079)) par @mytharcher
- **[Formulaires publics]** Formulaires publics : Correction d'un problème d'accès non autorisé lors de la soumission du formulaire ([#7085](https://github.com/nocobase/nocobase/pull/7085)) par @zhangzhonghe

### [v1.8.0-beta.8](https://www.nocobase.com/en/blog/v1.8.0-beta.8)

*Date de sortie : 2025-06-16*

#### 🚀 Améliorations

- **[client]** Ajout des options "vide" et "non vide" aux règles de liaison des champs de case à cocher ([#7073](https://github.com/nocobase/nocobase/pull/7073)) par @katherinehhh
- **[Workflow : Approbation]** Ajout d'une option de champ supplémentaire pour la liste des réaffectataires par @mytharcher

#### 🐛 Corrections de bugs

- **[Gestionnaire de sauvegarde]** Erreur de commande inconnue lors de la restauration de sauvegardes MySQL sur la plateforme Windows par @gchust

### [v1.8.0-beta.7](https://www.nocobase.com/en/blog/v1.8.0-beta.7)

*Date de sortie : 2025-06-15*

#### 🎉 Nouvelles fonctionnalités

- **[Copie de texte]** Prise en charge de la copie en un clic du contenu du champ de texte ([#6954](https://github.com/nocobase/nocobase/pull/6954)) par @zhangzhonghe

#### 🐛 Corrections de bugs

- **[serveur]** Impossible de lire les propriétés de undefined (lecture de 'setMaaintainingMessage') ([#7064](https://github.com/nocobase/nocobase/pull/7064)) par @chenos
- **[client]**

  - Le sélecteur de champ d'association n'efface pas les données sélectionnées après la soumission ([#7067](https://github.com/nocobase/nocobase/pull/7067)) par @katherinehhh
  - Après la création du champ de relation inverse, l'option "Créer un champ de relation inverse dans la table de données cible" dans les paramètres du champ d'association n'était pas cochée. ([#6914](https://github.com/nocobase/nocobase/pull/6914)) par @aaaaaajie
- **[Contrôle d'accès]** Correction d'un problème où l'application bloquait l'entrée lorsqu'aucun rôle par défaut n'existait ([#7059](https://github.com/nocobase/nocobase/pull/7059)) par @aaaaaajie
- **[Workflow : Nœud de boucle]** Correction de l'exécution de la branche de boucle lorsque la condition n'est pas satisfaite ([#7063](https://github.com/nocobase/nocobase/pull/7063)) par @mytharcher
- **[Gestionnaire de source de données]** Les modifications de portée prennent désormais effet immédiatement pour tous les rôles concernés. ([#7065](https://github.com/nocobase/nocobase/pull/7065)) par @aaaaaajie
- **[Workflow : Événement d'action personnalisée]** Correction de la variable d'URL de redirection non analysée par @mytharcher
- **[Workflow : Approbation]**

  - Correction de la variable de déclencheur lors du filtrage par type par @mytharcher
  - Correction des statistiques de tâches non mises à jour lorsque l'exécution est annulée par @mytharcher

### [v1.8.0-beta.6](https://www.nocobase.com/en/blog/v1.8.0-beta.6)

*Date de sortie : 2025-06-12*

#### 🎉 Nouvelles fonctionnalités

- **[Journaux d'audit]** Ajout de la variable d'environnement `AUDIT_LOGGER_TRANSPORT` pour contrôler la méthode de sortie des journaux d'audit par @2013xile

#### 🚀 Améliorations

- **[client]** Interdire le déplacement d'un menu de groupe dans lui-même ([#7005](https://github.com/nocobase/nocobase/pull/7005)) par @zhangzhonghe
- **[Calendrier]** Prise en charge du réglage du jour de début de semaine dans le bloc calendrier ([#7032](https://github.com/nocobase/nocobase/pull/7032)) par @katherinehhh
- **[Champ de collection : Markdown(Vditor)]** Prise en charge du clic sur l'image pour zoomer en mode aperçu Markdown (Vditor) ([#7024](https://github.com/nocobase/nocobase/pull/7024)) par @katherinehhh
- **[Champ de collection : Plusieurs-à-plusieurs (tableau)]** Erreurs liées aux autorisations lors de l'affichage des champs plusieurs-à-plusieurs (plusieurs) dans les tableaux de données. ([#7028](https://github.com/nocobase/nocobase/pull/7028)) par @aaaaaajie
- **[Commentaires]** Prise en charge de la pagination dans le bloc de commentaires par @katherinehhh

#### 🐛 Corrections de bugs

- **[client]**

  - Problème de fermeture automatique lors de la configuration des champs dans le formulaire contextuel secondaire ([#7052](https://github.com/nocobase/nocobase/pull/7052)) par @katherinehhh
  - Correction du problème où les règles de liaison provoquaient une boucle infinie ([#7050](https://github.com/nocobase/nocobase/pull/7050)) par @zhangzhonghe
  - Problème de fermeture automatique lors de la configuration des champs dans le formulaire contextuel secondaire ([#7042](https://github.com/nocobase/nocobase/pull/7042)) par @katherinehhh
  - Correction de l'indication de taille de téléchargement ([#7057](https://github.com/nocobase/nocobase/pull/7057)) par @mytharcher
  - Correction : utilisation du chaînage optionnel pour rejeter en toute sécurité les requêtes dans APIClient lorsque le gestionnaire peut être indéfini ([#7054](https://github.com/nocobase/nocobase/pull/7054)) par @sheldon66
  - Problème de fermeture automatique lors de la configuration des champs dans le formulaire contextuel secondaire ([#7042](https://github.com/nocobase/nocobase/pull/7042)) par @katherinehhh
  - Correction des champs non affichés dans les modèles de bloc causée par des requêtes API en double ([#6985](https://github.com/nocobase/nocobase/pull/6985)) par @zhangzhonghe
  - Les options de champ de sélection ne fonctionnent pas dans les règles de liaison du formulaire de filtre ([#7035](https://github.com/nocobase/nocobase/pull/7035)) par @katherinehhh
  - Les règles de validation du formulaire de filtre rendent le bouton de filtre inefficace ([#6975](https://github.com/nocobase/nocobase/pull/6975)) par @zhangzhonghe
  - Impossible d'effacer l'indicateur de champ obligatoire du sous-tableau à l'aide des règles de liaison ([#7022](https://github.com/nocobase/nocobase/pull/7022)) par @zhangzhonghe
  - Correction du problème d'erreur de paramètre du bloc de filtre ([#6966](https://github.com/nocobase/nocobase/pull/6966)) par @zhangzhonghe
  - Résolution d'un problème où le bloc ne parvenait pas à lire les données de vue à partir de sources de données externes. ([#7017](https://github.com/nocobase/nocobase/pull/7017)) par @aaaaaajie
  - Utilisation d'une portée de variable indépendante pour chaque champ ([#7012](https://github.com/nocobase/nocobase/pull/7012)) par @mytharcher
  - La variable d'objet actuel est invalide dans les règles de liaison ([#7008](https://github.com/nocobase/nocobase/pull/7008)) par @zhangzhonghe
- **[base de données]** correction : ajout des champs de créateur et de mise à jour manquants dans l'importation xlsx ([#7011](https://github.com/nocobase/nocobase/pull/7011)) par @aaaaaajie
- **[undefined]** Suppression de la dépendance à la base de données pour possibleTypes, application de la configuration pilotée par API par @aaaaaajie
- **[Action : Importer des enregistrements]**

  - Correction de l'importation xlsx pour restreindre les champs de zone de texte à accepter des données non formatées en chaîne ([#7049](https://github.com/nocobase/nocobase/pull/7049)) par @aaaaaajie
  - Correction de l'échec d'importation de la table enfant lorsque des champs relationnels sont impliqués ([#7039](https://github.com/nocobase/nocobase/pull/7039)) par @aaaaaajie
  - Correction des erreurs survenant lors de l'édition par lots lors de l'importation de données de table arborescente XLSX ([#7013](https://github.com/nocobase/nocobase/pull/7013)) par @aaaaaajie
- **[Visualisation de données]**

  - Affichage incorrect du champ de date entre dans le filtre du graphique ([#7051](https://github.com/nocobase/nocobase/pull/7051)) par @katherinehhh
  - Les champs de groupe de cases à cocher dans les graphiques doivent afficher les étiquettes au lieu des valeurs brutes ([#7033](https://github.com/nocobase/nocobase/pull/7033)) par @2013xile
- **[Documentation API]** Les plugins non officiels de NocoBase ne parviennent pas à afficher la documentation API ([#7045](https://github.com/nocobase/nocobase/pull/7045)) par @chenzhizdt
- **[Workflow]**

  - Correction de l'erreur causée par `toJSON()` dans le déclencheur planifié ([#7037](https://github.com/nocobase/nocobase/pull/7037)) par @mytharcher
  - Correction de l'erreur levée dans l'action d'exécution manuelle lorsque le déclencheur n'est pas configuré correctement ([#7036](https://github.com/nocobase/nocobase/pull/7036)) par @mytharcher
  - Correction de l'erreur d'interface utilisateur lorsque le workflow n'existe pas ([#7023](https://github.com/nocobase/nocobase/pull/7023)) par @mytharcher
  - Correction de l'événement de collection en mode création ou mise à jour qui ne se déclenche pas lors de la création sans champ modifié ([#7015](https://github.com/nocobase/nocobase/pull/7015)) par @mytharcher
- **[Gestionnaire de source de données]** Suppression de la dépendance à la base de données pour possibleTypes, application de la configuration pilotée par API ([#7019](https://github.com/nocobase/nocobase/pull/7019)) par @aaaaaajie
- **[Mobile]** Optimisation des problèmes de latence des fenêtres contextuelles mobiles ([#7029](https://github.com/nocobase/nocobase/pull/7029)) par @zhangzhonghe
- **[Action : Exporter les enregistrements Pro]** Correction de l'erreur qui se produit lors de l'exportation de pièces jointes avec conditions. par @aaaaaajie
- **[Workflow : JavaScript]** Correction de require pour le chemin relatif par @mytharcher
- **[Impression de modèle]** Correction d'un bug d'analyse des autorisations et ajout d'une vérification de données non trouvées. par @sheldon66
- **[Workflow : Approbation]**

  - Pour éviter une erreur de champ indéfini par @mytharcher
  - Correction de l'erreur levée lorsque le workflow est supprimé par @mytharcher
  - Correction des variables de déclencheur par @mytharcher
  - Rechargement de l'association de fichier à partir de l'instantané pour éviter l'expiration de l'URL par @mytharcher
  - Correction de l'erreur API lors de l'actualisation de la page de détail par @mytharcher
- **[WeCom]** Ajout d'une vérification du chemin de rappel dans le middleware de passerelle par @2013xile

## develop

![develop.png](https://static-docs.nocobase.com/7fcdd9456a17286d8a439eee52bcb8d2.png)

### [v1.8.0-alpha.8](https://www.nocobase.com/en/blog/v1.8.0-alpha.8)

*Date de sortie : 2025-06-17*

#### 🎉 Nouvelles fonctionnalités

- **[Copie de texte]** Prise en charge de la copie en un clic du contenu du champ de texte ([#6954](https://github.com/nocobase/nocobase/pull/6954)) par @zhangzhonghe
- **[Gestionnaire d'e-mails]** Prise en charge de la suppression d'e-mails par @jiannx

#### 🚀 Améliorations

- **[client]**

  - Ajout des options "vide" et "non vide" aux règles de liaison des champs de case à cocher ([#7073](https://github.com/nocobase/nocobase/pull/7073)) par @katherinehhh
  - La largeur du conteneur du logo s'adapte au type de contenu (168px fixe pour les images, largeur automatique pour le texte) ([#7075](https://github.com/nocobase/nocobase/pull/7075)) par @Cyx649312038
- **[Gestionnaire de tâches asynchrones]** Amélioration des performances de création de tâches lors de l'exportation ([#7078](https://github.com/nocobase/nocobase/pull/7078)) par @aaaaaajie
- **[Workflow : Approbation]** Ajout d'une option de champ supplémentaire pour la liste des réaffectataires par @mytharcher

#### 🐛 Corrections de bugs

- **[client]**

  - Perte du point décimal après le passage du composant de montant de mask à inputNumer ([#7077](https://github.com/nocobase/nocobase/pull/7077)) par @katherinehhh
  - Rendu incorrect du Markdown (Vditor) dans le sous-tableau ([#7074](https://github.com/nocobase/nocobase/pull/7074)) par @katherinehhh
  - Après la création du champ de relation inverse, l'option "Créer un champ de relation inverse dans la table de données cible" dans les paramètres du champ d'association n'était pas cochée. ([#6914](https://github.com/nocobase/nocobase/pull/6914)) par @aaaaaajie
  - Le sélecteur de champ d'association n'efface pas les données sélectionnées après la soumission ([#7067](https://github.com/nocobase/nocobase/pull/7067)) par @katherinehhh
- **[serveur]** Impossible de lire les propriétés de undefined (lecture de 'setMaaintainingMessage') ([#7064](https://github.com/nocobase/nocobase/pull/7064)) par @chenos
- **[Contrôle d'accès]** Correction d'un problème où l'application bloquait l'entrée lorsqu'aucun rôle par défaut n'existait ([#7059](https://github.com/nocobase/nocobase/pull/7059)) par @aaaaaajie
- **[Gestionnaire de source de données]** Les modifications de portée prennent désormais effet immédiatement pour tous les rôles concernés. ([#7065](https://github.com/nocobase/nocobase/pull/7065)) par @aaaaaajie
- **[Workflow : Nœud de boucle]** Correction de l'exécution de la branche de boucle lorsque la condition n'est pas satisfaite ([#7063](https://github.com/nocobase/nocobase/pull/7063)) par @mytharcher
- **[Workflow : Événement d'action personnalisée]** Correction de la variable d'URL de redirection non analysée par @mytharcher
- **[Workflow : Approbation]** Correction des statistiques de tâches non mises à jour lorsque l'exécution est annulée par @mytharcher
- **[Gestionnaire d'e-mails]** Échec de la suppression d'e-mail par @jiannx
- **[Gestionnaire de sauvegarde]** Erreur de commande inconnue lors de la restauration de sauvegardes MySQL sur la plateforme Windows par @gchust

### [v1.8.0-alpha.7](https://www.nocobase.com/en/blog/v1.8.0-alpha.7)

*Date de sortie : 2025-06-13*

#### 🎉 Nouvelles fonctionnalités

- **[Gestionnaire d'e-mails]** Prise en charge du réglage de l'intervalle de synchronisation des e-mails par @jiannx

#### 🐛 Corrections de bugs

- **[base de données]** Rendre l'opérateur eq pour les champs de chaîne compatible avec le type numérique ([#7062](https://github.com/nocobase/nocobase/pull/7062)) par @chenos
- **[client]** Correction de l'indication de taille de téléchargement ([#7057](https://github.com/nocobase/nocobase/pull/7057)) par @mytharcher
- **[Workflow : Approbation]** Correction de la variable de déclencheur lors du filtrage par type par @mytharcher

### [v1.8.0-alpha.5](https://www.nocobase.com/en/blog/v1.8.0-alpha.5)

*Date de sortie : 2025-06-12*

#### 🚀 Améliorations

- **[client]**

  - Prise en charge du remplissage des champs de saisie via le scan de code QR ([#6943](https://github.com/nocobase/nocobase/pull/6943)) par @katherinehhh
  - Prise en charge de la localisation pour le contenu du bloc Markdown ([#6941](https://github.com/nocobase/nocobase/pull/6941)) par @katherinehhh
  - Interdire le déplacement d'un menu de groupe dans lui-même ([#7005](https://github.com/nocobase/nocobase/pull/7005)) par @zhangzhonghe
- **[Champ de collection : Plusieurs-à-plusieurs (tableau)]** Erreurs liées aux autorisations lors de l'affichage des champs plusieurs-à-plusieurs (plusieurs) dans les tableaux de données. ([#7028](https://github.com/nocobase/nocobase/pull/7028)) par @aaaaaajie
- **[Calendrier]** Prise en charge du réglage du jour de début de semaine dans le bloc calendrier ([#7032](https://github.com/nocobase/nocobase/pull/7032)) par @katherinehhh
- **[Champ de collection : Markdown(Vditor)]** Prise en charge du clic sur l'image pour zoomer en mode aperçu Markdown (Vditor) ([#7024](https://github.com/nocobase/nocobase/pull/7024)) par @katherinehhh

#### 🐛 Corrections de bugs

- **[client]**

  - Problème de fermeture automatique lors de la configuration des champs dans le formulaire contextuel secondaire ([#7052](https://github.com/nocobase/nocobase/pull/7052)) par @katherinehhh
  - Correction des champs non affichés dans les modèles de bloc causée par des requêtes API en double ([#6985](https://github.com/nocobase/nocobase/pull/6985)) par @zhangzhonghe
  - Problème de fermeture automatique lors de la configuration des champs dans le formulaire contextuel secondaire ([#7042](https://github.com/nocobase/nocobase/pull/7042)) par @katherinehhh
  - Les règles de validation du formulaire de filtre rendent le bouton de filtre inefficace ([#6975](https://github.com/nocobase/nocobase/pull/6975)) par @zhangzhonghe
  - Problème de fermeture automatique lors de la configuration des champs dans le formulaire contextuel secondaire ([#7042](https://github.com/nocobase/nocobase/pull/7042)) par @katherinehhh
  - Les options de champ de sélection ne fonctionnent pas dans les règles de liaison du formulaire de filtre ([#7035](https://github.com/nocobase/nocobase/pull/7035)) par @katherinehhh
  - Impossible d'effacer l'indicateur de champ obligatoire du sous-tableau à l'aide des règles de liaison ([#7022](https://github.com/nocobase/nocobase/pull/7022)) par @zhangzhonghe
  - Correction du problème d'erreur de paramètre du bloc de filtre ([#6966](https://github.com/nocobase/nocobase/pull/6966)) par @zhangzhonghe
  - Correction du problème où les données de l'utilisateur actuel sont vides ([#7016](https://github.com/nocobase/nocobase/pull/7016)) par @zhangzhonghe
  - La variable d'objet actuel est invalide dans les règles de liaison ([#7008](https://github.com/nocobase/nocobase/pull/7008)) par @zhangzhonghe
  - Résolution d'un problème où le bloc ne parvenait pas à lire les données de vue à partir de sources de données externes. ([#7017](https://github.com/nocobase/nocobase/pull/7017)) par @aaaaaajie
  - Utilisation d'une portée de variable indépendante pour chaque champ ([#7012](https://github.com/nocobase/nocobase/pull/7012)) par @mytharcher
- **[Visualisation de données]**

  - Affichage incorrect du champ de date entre dans le filtre du graphique ([#7051](https://github.com/nocobase/nocobase/pull/7051)) par @katherinehhh
  - Les champs de groupe de cases à cocher dans les graphiques doivent afficher les étiquettes au lieu des valeurs brutes ([#7033](https://github.com/nocobase/nocobase/pull/7033)) par @2013xile
- **[Action : Importer des enregistrements]**

  - Correction de l'importation xlsx pour restreindre les champs de zone de texte à accepter des données non formatées en chaîne ([#7049](https://github.com/nocobase/nocobase/pull/7049)) par @aaaaaajie
  - Correction de l'échec d'importation de la table enfant lorsque des champs relationnels sont impliqués ([#7039](https://github.com/nocobase/nocobase/pull/7039)) par @aaaaaajie
  - Correction des erreurs survenant lors de l'édition par lots lors de l'importation de données de table arborescente XLSX ([#7013](https://github.com/nocobase/nocobase/pull/7013)) par @aaaaaajie
- **[Documentation API]** Les plugins non officiels de NocoBase ne parviennent pas à afficher la documentation API ([#7045](https://github.com/nocobase/nocobase/pull/7045)) par @chenzhizdt
- **[Workflow]**

  - Correction de l'erreur causée par `toJSON()` dans le déclencheur planifié ([#7037](https://github.com/nocobase/nocobase/pull/7037)) par @mytharcher
  - Correction de l'erreur levée dans l'action d'exécution manuelle lorsque le déclencheur n'est pas configuré correctement ([#7036](https://github.com/nocobase/nocobase/pull/7036)) par @mytharcher
  - Correction de l'erreur d'interface utilisateur lorsque le workflow n'existe pas ([#7023](https://github.com/nocobase/nocobase/pull/7023)) par @mytharcher
  - Correction de l'événement de collection en mode création ou mise à jour qui ne se déclenche pas lors de la création sans champ modifié ([#7015](https://github.com/nocobase/nocobase/pull/7015)) par @mytharcher
- **[Mobile]** Optimisation des problèmes de latence des fenêtres contextuelles mobiles ([#7029](https://github.com/nocobase/nocobase/pull/7029)) par @zhangzhonghe
- **[Gestionnaire de source de données]** Suppression de la dépendance à la base de données pour possibleTypes, application de la configuration pilotée par API ([#7019](https://github.com/nocobase/nocobase/pull/7019)) par @aaaaaajie
- **[Action : Exporter les enregistrements Pro]** Correction de l'erreur qui se produit lors de l'exportation de pièces jointes avec conditions. par @aaaaaajie
