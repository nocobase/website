---
title: "Mises à jour hebdomadaires de NocoBase : Ajout du support de l'impression en masse dans l'impression de modèles"
description: "Les mises à jour de cette semaine incluent : les champs de texte sur une seule ligne prennent en charge le filtrage par mots-clés multiples, ajout du support de l'impression en masse dans l'impression de modèles, et plus encore."
---

Résumez les journaux de mise à jour hebdomadaires du produit. Les dernières versions sont disponibles sur [notre blog](https://www.nocobase.com/en/blog/timeline).

**NocoBase est actuellement mis à jour avec trois branches : `main`, `next` et `develop`.**

![version.png](https://static-docs.nocobase.com/ba5f04e27e99c625cb3822da5df07860.png)

* `main` : La version la plus stable à ce jour, recommandée pour l'installation ;
* `next` : Version bêta, contient les nouvelles fonctionnalités à venir et a été testée préliminairement. Il peut y avoir des problèmes connus ou inconnus. Elle est principalement destinée aux utilisateurs testeurs pour recueillir des retours et optimiser davantage les fonctionnalités. Idéale pour les utilisateurs testeurs qui souhaitent découvrir les nouvelles fonctionnalités en avant-première et donner leur avis ;
* `develop` : Version alpha, contient le code de fonctionnalité le plus récent, peut être incomplète ou instable, principalement destinée au développement interne et à l'itération rapide. Adaptée aux utilisateurs techniques intéressés par les fonctionnalités de pointe du produit, mais avec des problèmes potentiels et des fonctions incomplètes. Ne pas utiliser en production.

## main

![main.png](https://static-docs.nocobase.com/47a3c71734c1d0f908b51f9ebd53c0ac.png)

### [v1.6.31](https://www.nocobase.com/en/blog/v1.6.31)

*Date de sortie : 2025-05-18*

#### 🚀 Améliorations

- **[Workflow]** Ajout de toutes les clés de locale en-US manquantes ([#6885](https://github.com/nocobase/nocobase/pull/6885)) par @mytharcher

#### 🐛 Corrections de bugs

- **[base de données]** Gérer les cellules de chaîne vides lors de l'importation de champs pour éviter les erreurs ([#6880](https://github.com/nocobase/nocobase/pull/6880)) par @aaaaaajie
- **[client]**

  - Le tableau d'enregistrement de sélection d'association ne filtrait pas les enregistrements déjà associés ([#6874](https://github.com/nocobase/nocobase/pull/6874)) par @katherinehhh
  - Les données d'association n'étaient pas soumises lors de l'exposition des champs d'association dans subForm ([#6883](https://github.com/nocobase/nocobase/pull/6883)) par @katherinehhh
  - Les champs de tri par glisser-déposer n'affichaient pas correctement les options disponibles ([#6875](https://github.com/nocobase/nocobase/pull/6875)) par @katherinehhh
- **[Workflow]** Correction du fonctionnement incorrect de la limite de pile pour l'événement de collection ([#6876](https://github.com/nocobase/nocobase/pull/6876)) par @mytharcher
- **[Bloc : Panneau d'actions]** Lire le nom de base de la route à partir du scanner pour s'adapter à l'environnement de bureau. ([#6877](https://github.com/nocobase/nocobase/pull/6877)) par @sheldon66
- **[Workflow : Nœud manuel]** Correction d'une erreur de rendu lors de l'affichage d'un élément non traité ([#6879](https://github.com/nocobase/nocobase/pull/6879)) par @mytharcher
- **[Workflow : Approbation]** Correction du périmètre des assignés pour la délégation et ajout à d'autres assignés par @mytharcher

### [v1.6.32](https://www.nocobase.com/en/blog/v1.6.32)

*Date de sortie : 2025-05-20*

#### 🐛 Corrections de bugs

- **[client]**
  - La page n'était pas redirigée correctement après la suppression du dernier élément ([#6892](https://github.com/nocobase/nocobase/pull/6892)) par @katherinehhh
  - Le composant en cascade dans la modale ne chargeait pas les données d'association initialement ([#6886](https://github.com/nocobase/nocobase/pull/6886)) par @katherinehhh

## next

![next.png](https://static-docs.nocobase.com/8ed17a0f08cc585018f6de6c8b13947d.png)

### [v1.7.0-beta.32](https://www.nocobase.com/en/blog/v1.7.0-beta.32)

*Date de sortie : 2025-05-19*

#### 🎉 Nouvelles fonctionnalités

- **[client]** Les champs de texte sur une seule ligne prennent en charge la saisie de plusieurs mots-clés pour le filtrage ([#6685](https://github.com/nocobase/nocobase/pull/6685)) par @zhangzhonghe
  Référence : [Filtre multi-mots-clés](https://docs.nocobase.com/handbook/multi-keyword-filter)
- **[Filtre multi-mots-clés]** Les champs de texte sur une seule ligne prennent en charge la saisie de plusieurs mots-clés pour le filtrage par @zhangzhonghe
  Référence : [Filtre multi-mots-clés](https://docs.nocobase.com/handbook/multi-keyword-filter)
- **[Impression de modèle]** Ajout de la prise en charge de l'impression en masse dans l'impression de modèles. par @sheldon66

#### 🚀 Améliorations

- **[Workflow]** Ajout de toutes les clés de locale en-US manquantes ([#6885](https://github.com/nocobase/nocobase/pull/6885)) par @mytharcher

#### 🐛 Corrections de bugs

- **[client]**

  - Le composant en cascade dans la modale ne chargeait pas les données d'association initialement ([#6886](https://github.com/nocobase/nocobase/pull/6886)) par @katherinehhh
  - Les données d'association n'étaient pas soumises lors de l'exposition des champs d'association dans subForm ([#6883](https://github.com/nocobase/nocobase/pull/6883)) par @katherinehhh
  - Les champs de tri par glisser-déposer n'affichaient pas correctement les options disponibles ([#6875](https://github.com/nocobase/nocobase/pull/6875)) par @katherinehhh
  - Variables de formulaire actuel manquantes dans la portée des données de la table de sélection de données ([#6882](https://github.com/nocobase/nocobase/pull/6882)) par @katherinehhh
  - Le tableau d'enregistrement de sélection d'association ne filtrait pas les enregistrements déjà associés ([#6874](https://github.com/nocobase/nocobase/pull/6874)) par @katherinehhh
- **[base de données]** Gérer les cellules de chaîne vides lors de l'importation de champs pour éviter les erreurs ([#6880](https://github.com/nocobase/nocobase/pull/6880)) par @aaaaaajie
- **[Workflow : Nœud manuel]** Correction d'une erreur de rendu lors de l'affichage d'un élément non traité ([#6879](https://github.com/nocobase/nocobase/pull/6879)) par @mytharcher
- **[Gestionnaire de fichiers]** Correction des types ([#6873](https://github.com/nocobase/nocobase/pull/6873)) par @mytharcher
- **[Bloc : Panneau d'actions]** Lire le nom de base de la route à partir du scanner pour s'adapter à l'environnement de bureau. ([#6877](https://github.com/nocobase/nocobase/pull/6877)) par @sheldon66
- **[Intégration IA]** Le contenu ne s'affiche pas lors du basculement entre les pages de configuration du service LLM et de configuration de validation ([#6887](https://github.com/nocobase/nocobase/pull/6887)) par @2013xile
- **[Workflow]** Correction du fonctionnement incorrect de la limite de pile pour l'événement de collection ([#6876](https://github.com/nocobase/nocobase/pull/6876)) par @mytharcher
- **[Workflow : Approbation]** Correction du périmètre des assignés pour la délégation et ajout à d'autres assignés par @mytharcher
- **[Gestionnaire de sauvegarde]** Correction d'une erreur de type dans la build par @mytharcher

## develop

![develop.png](https://static-docs.nocobase.com/7fcdd9456a17286d8a439eee52bcb8d2.png)

### [v1.7.0-alpha.14](https://www.nocobase.com/en/blog/v1.7.0-alpha.14)

*Date de sortie : 2025-05-21*

#### 🎉 Nouvelles fonctionnalités

- **[client]**

  - Les champs de texte sur une seule ligne prennent en charge la saisie de plusieurs mots-clés pour le filtrage ([#6685](https://github.com/nocobase/nocobase/pull/6685)) par @zhangzhonghe
    Référence : [Filtre multi-mots-clés](https://docs.nocobase.com/handbook/multi-keyword-filter)
  - La règle de liaison d'action prend en charge les variables 'formulaire actuel' ([#6810](https://github.com/nocobase/nocobase/pull/6810)) par @katherinehhh
- **[build]** Prise en charge de l'autorisation commerciale ([#6554](https://github.com/nocobase/nocobase/pull/6554)) par @jiannx
- **[undefined]** Ajout du journal du plugin d'importation par @aaaaaajie
- **[Action : Importer des enregistrements]** Ajout du journal du plugin d'importation ([#6841](https://github.com/nocobase/nocobase/pull/6841)) par @aaaaaajie
- **[plugin-commercial]** Prise en charge commerciale par @jiannx
- **[Filtre multi-mots-clés]** Les champs de texte sur une seule ligne prennent en charge la saisie de plusieurs mots-clés pour le filtrage par @zhangzhonghe
  Référence : [Filtre multi-mots-clés](https://docs.nocobase.com/handbook/multi-keyword-filter)
- **[Impression de modèle]**

  - Ajout de la prise en charge de l'impression en masse dans l'impression de modèles. par @sheldon66
  - Ajout de la prise en charge de l'impression en masse dans l'impression de modèles. par @sheldon66

#### 🚀 Améliorations

- **[undefined]** Construire l'image Docker complète ([#6898](https://github.com/nocobase/nocobase/pull/6898)) par @chenos
- **[client]**

  - Optimisation du problème de ralentissement des pages avec l'utilisation ([#6888](https://github.com/nocobase/nocobase/pull/6888)) par @zhangzhonghe
  - Ajout de plus de réglages de taille intégrés pour l'image d'état de lecture ([#6868](https://github.com/nocobase/nocobase/pull/6868)) par @katherinehhh
- **[Workflow]**

  - Ajout de toutes les clés de locale en-US manquantes ([#6885](https://github.com/nocobase/nocobase/pull/6885)) par @mytharcher
  - Permettre la révision de plus d'un brouillon ([#6851](https://github.com/nocobase/nocobase/pull/6851)) par @mytharcher
- **[Champ de collection : Pièce jointe (URL)]** Ajout de plus de tailles intégrées au champ d'URL de pièce jointe pour l'état de lecture ([#6871](https://github.com/nocobase/nocobase/pull/6871)) par @katherinehhh
- **[Gestionnaire d'emails]**

  - Correction de l'erreur de synchronisation et d'autres problèmes de convivialité par @jiannx
  - Ajout de la gestion des brouillons, prise en charge de la visualisation des emails par les subordonnés par @jiannx

#### 🐛 Corrections de bugs

- **[client]**

  - La règle de liaison de désactivation ne fonctionnait pas pour le bouton d'action ([#6896](https://github.com/nocobase/nocobase/pull/6896)) par @katherinehhh
  - La page n'était pas redirigée correctement après la suppression du dernier élément ([#6892](https://github.com/nocobase/nocobase/pull/6892)) par @katherinehhh
  - Le composant en cascade dans la modale ne chargeait pas les données d'association initialement ([#6886](https://github.com/nocobase/nocobase/pull/6886)) par @katherinehhh
  - Le tableau d'enregistrement de sélection d'association ne filtrait pas les enregistrements déjà associés ([#6874](https://github.com/nocobase/nocobase/pull/6874)) par @katherinehhh
  - Les données d'association n'étaient pas soumises lors de l'exposition des champs d'association dans subForm ([#6883](https://github.com/nocobase/nocobase/pull/6883)) par @katherinehhh
  - Variables de formulaire actuel manquantes dans la portée des données de la table de sélection de données ([#6882](https://github.com/nocobase/nocobase/pull/6882)) par @katherinehhh
  - Les champs de tri par glisser-déposer n'affichaient pas correctement les options disponibles ([#6875](https://github.com/nocobase/nocobase/pull/6875)) par @katherinehhh
  - Effacement de la valeur de droite lorsque l'opérateur change dans la règle de liaison ([#6862](https://github.com/nocobase/nocobase/pull/6862)) par @katherinehhh
  - Opérateur manquant lors du changement dans les règles de liaison ([#6857](https://github.com/nocobase/nocobase/pull/6857)) par @katherinehhh
  - Problème de liaison de bouton dans le bloc de détail ([#6867](https://github.com/nocobase/nocobase/pull/6867)) par @katherinehhh
  - Évaluation incorrecte des opérateurs pour les variables de date dans les conditions de liaison ([#6825](https://github.com/nocobase/nocobase/pull/6825)) par @katherinehhh
  - Les champs masqués sont toujours affichés ([#6844](https://github.com/nocobase/nocobase/pull/6844)) par @zhangzhonghe
  - Incompatibilité d'analyse des variables avec les données {{title}} dans la confirmation secondaire ([#6838](https://github.com/nocobase/nocobase/pull/6838)) par @katherinehhh
  - Incompatibilité d'analyse des variables avec les données {{title}} dans la confirmation secondaire ([#6838](https://github.com/nocobase/nocobase/pull/6838)) par @katherinehhh
  - Amélioration du style du composant de valeur de règle de liaison ([#6836](https://github.com/nocobase/nocobase/pull/6836)) par @katherinehhh
- **[base de données]** Gérer les cellules de chaîne vides lors de l'importation de champs pour éviter les erreurs ([#6880](https://github.com/nocobase/nocobase/pull/6880)) par @aaaaaajie
- **[build]** Correction de l'erreur d'exécution du client dans plugin-workflow-javascript, erreur de processus indéfini ([#6859](https://github.com/nocobase/nocobase/pull/6859)) par @jiannx
- **[Gestionnaire de fichiers]**

  - Correction de l'URL d'aperçu sur les fichiers non image ([#6889](https://github.com/nocobase/nocobase/pull/6889)) par @mytharcher
  - Correction des types ([#6873](https://github.com/nocobase/nocobase/pull/6873)) par @mytharcher
  - Correction de la création d'un enregistrement de fichier sans autorisation de clé étrangère ([#6863](https://github.com/nocobase/nocobase/pull/6863)) par @mytharcher
- **[Bloc : Panneau d'actions]**

  - Lire le nom de base de la route à partir du scanner pour s'adapter à l'environnement de bureau. ([#6877](https://github.com/nocobase/nocobase/pull/6877)) par @sheldon66
  - La couleur du panneau d'actions est incorrecte en mode sombre ([#6842](https://github.com/nocobase/nocobase/pull/6842)) par @zhangzhonghe
- **[Intégration IA]** Le contenu ne s'affiche pas lors du basculement entre les pages de configuration du service LLM et de configuration de validation ([#6887](https://github.com/nocobase/nocobase/pull/6887)) par @2013xile
- **[Workflow : Nœud manuel]**

  - Correction du cas de test en raison du plugin retiré de la liste intégrée ([#6895](https://github.com/nocobase/nocobase/pull/6895)) par @mytharcher
  - Correction d'une erreur de rendu lors de l'affichage d'un élément non traité ([#6879](https://github.com/nocobase/nocobase/pull/6879)) par @mytharcher
  - Correction du nombre de statistiques incorrect sur les tâches ([#6783](https://github.com/nocobase/nocobase/pull/6783)) par @mytharcher
- **[Workflow]**

  - Correction du fonctionnement incorrect de la limite de pile pour l'événement de collection ([#6876](https://github.com/nocobase/nocobase/pull/6876)) par @mytharcher
  - Correction du problème de navigation arrière ne fonctionnant pas lors de l'ouverture directe d'un lien contextuel dans le centre de tâches ([#6853](https://github.com/nocobase/nocobase/pull/6853)) par @mytharcher
- **[Visualisation de données]**

  - Les blocs de graphique ne s'affichent pas lorsqu'ils sont ajoutés à des fenêtres contextuelles déclenchées par des actions au niveau du bloc ([#6864](https://github.com/nocobase/nocobase/pull/6864)) par @2013xile
  - Correction d'une erreur lors du filtrage des champs m2m imbriqués ([#6855](https://github.com/nocobase/nocobase/pull/6855)) par @2013xile
- **[Action : Exporter des enregistrements]**

  - Amélioration des performances lors de la suppression de champs dans les paramètres de champ d'import/export ([#6861](https://github.com/nocobase/nocobase/pull/6861)) par @katherinehhh
  - Correction de l'exportation de valeurs vides dans les associations imbriquées et l'url de pièce jointe ([#6845](https://github.com/nocobase/nocobase/pull/6845)) par @aaaaaajie
- **[Bloc : modèle]** Après avoir enregistré en tant que modèle hérité, erreur lors de l'ouverture de la fenêtre contextuelle ([#6840](https://github.com/nocobase/nocobase/pull/6840)) par @gchust
- **[Action : Dupliquer un enregistrement]** La modale se ferme au premier clic sur une entrée lors de l'édition de données dupliquées ([#6848](https://github.com/nocobase/nocobase/pull/6848)) par @katherinehhh
- **[Workflow : kit de test]** Correction des cas de test échoués en raison d'un plugin préréglé requis ([#6839](https://github.com/nocobase/nocobase/pull/6839)) par @mytharcher
- **[Workflow : Événement post-action]** Correction de la variable d'action utilisateur inaccessible dans le modèle Handlebars ([#6837](https://github.com/nocobase/nocobase/pull/6837)) par @mytharcher
- **[plugin-commercial]**

  - Correction de l'envoi du journal commercial au CRM et de la traduction du texte par @jiannx
  - Utilisation de la chaîne prototype pour implémenter la fonction withCommercial par @jiannx
- **[Action : Exporter des enregistrements Pro]**

  - Amélioration des performances lors de la suppression de champs dans les paramètres de champ d'import/export pro par @katherinehhh
  - Correction de l'erreur d'exportation de longs textes. par @aaaaaajie
- **[Workflow : Sous-flux]** Correction du plantage de la page causé par un déclencheur indéfini par @mytharcher
- **[Impression de modèle]**

  - Correction du problème de formatteurs introuvables. par @sheldon66
  - Correction du formatteur introuvable par @sheldon66
- **[Stockage de fichiers : S3(Pro)]**

  - Expiration de l'URL d'accès invalide par @jiannx
  - Changement pour utiliser le champ de collection afin de localiser le stockage par @mytharcher
- **[Workflow : Approbation]**

  - Correction du nombre de statistiques incorrect sur les tâches par @mytharcher
  - Correction du périmètre des assignés pour la délégation et ajout à d'autres assignés par @mytharcher
- **[Gestionnaire d'emails]**

  - Correction d'une erreur ts par @jiannx
  - L'API de liste prend en charge la fusion de sujets par @jiannx
- **[Gestionnaire de sauvegarde]** Correction d'une erreur de type dans la build par @mytharcher
