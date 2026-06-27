---
title: "Mises à jour hebdomadaires de NocoBase : Optimisations et corrections de bugs"
description: "La mise à jour de cette semaine comprend : améliorations et corrections des workflows, optimisation de la fonctionnalité de glisser-déposer, et plus encore."
---

Résumez les journaux de mise à jour hebdomadaires du produit. Les dernières versions sont disponibles sur [notre blog](https://www.nocobase.com/en/blog/timeline).

**NocoBase est actuellement mis à jour avec trois branches : `main`, `next` et `develop`.**

![version.png](https://static-docs.nocobase.com/ba5f04e27e99c625cb3822da5df07860.png)

* `main` : La version la plus stable à ce jour, recommandée pour l'installation ;
* `next` : Version bêta, contient les nouvelles fonctionnalités à venir et a été testée préliminairement. Il peut y avoir des problèmes connus ou inconnus. Elle est principalement destinée aux utilisateurs de test pour recueillir des commentaires et optimiser davantage les fonctions. Idéale pour les utilisateurs de test qui souhaitent découvrir les nouvelles fonctionnalités en avant-première et donner leur avis ;
* `develop` : Version alpha, contient le code de fonctionnalité le plus récent, peut être incomplète ou instable, principalement destinée au développement interne et à l'itération rapide. Adaptée aux utilisateurs techniques intéressés par les fonctionnalités de pointe du produit, mais avec des problèmes potentiels et des fonctions incomplètes. Ne pas utiliser en production.

## main

![main.png](https://static-docs.nocobase.com/47a3c71734c1d0f908b51f9ebd53c0ac.png)

### [v1.8.27](https://www.nocobase.com/en/blog/v1.8.27)

*Date de sortie : 2025-10-02*

### 🚀 Améliorations

- **[client]** Prise en charge de la rotation des images lors de l'aperçu ([#7523](https://github.com/nocobase/nocobase/pull/7523)) par @mytharcher
- **[Workflow]** Séparation de la logique liée à l'ordonnancement dans un répartiteur autonome ([#7535](https://github.com/nocobase/nocobase/pull/7535)) par @mytharcher

### 🐛 Corrections de bugs

- **[client]** Correction du problème où les sous-menus de la barre latérale ne pouvaient pas être mis en surbrillance correctement ([#7520](https://github.com/nocobase/nocobase/pull/7520)) par @duannyuuu
- **[Workflow : Nœud de boucle]** Correction du problème où le processus avançait incorrectement à l'élément suivant même lorsque les conditions du nœud de boucle n'étaient pas satisfaites ([#7521](https://github.com/nocobase/nocobase/pull/7521)) par @mytharcher
- **[Workflow]**
  - Correction du problème d'exécution en double dû à une gestion inappropriée de la file d'attente ([#7533](https://github.com/nocobase/nocobase/pull/7533)) par @mytharcher
  - Correction du problème où la condition de la liste des workflows était incorrecte lors du chargement du contexte de champ associé dans la configuration du workflow lié ([#7516](https://github.com/nocobase/nocobase/pull/7516)) par @mytharcher
  - Correction du problème où les tâches planifiées basées sur des champs de date ne se déclenchaient pas après le démarrage ([#7524](https://github.com/nocobase/nocobase/pull/7524)) par @mytharcher

## next

![next.png](https://static-docs.nocobase.com/8ed17a0f08cc585018f6de6c8b13947d.png)

### [v1.9.0-beta.11](https://www.nocobase.com/en/blog/v1.9.0-beta.11)

*Date de sortie : 2025-10-09*

### 🚀 Améliorations

* **[serveur]** Ajout de la gestion du cycle de vie d'arrêt gracieux pour l'application ([#7536](https://github.com/nocobase/nocobase/pull/7536)) par @mytharcher
* **[Workflow : Nœud de boucle]** Prise en charge de la limitation du nombre maximum de cycles pour les nœuds de boucle via des variables d'environnement ([#7543](https://github.com/nocobase/nocobase/pull/7543)) par @mytharcher
* **[Workflow]** Prise en charge de la limitation du nombre maximum de nœuds dans un workflow via des variables d'environnement ([#7542](https://github.com/nocobase/nocobase/pull/7542)) par @mytharcher
* **[Workflow : Approbation]** Ajout d'un bouton d'impression dans la fenêtre contextuelle de détail des blocs d'approbation personnalisés par @mytharcher

### 🐛 Corrections de bugs

* **[Gestionnaire d'e-mails]** Exception de réautorisation par @jiannx

### [v1.9.0-beta.10](https://www.nocobase.com/en/blog/v1.9.0-beta.10)

*Date de sortie : 2025-10-09*

### 🐛 Corrections de bugs

* **[client]** Correction du problème où l'absence de propriétés dynamiques dans le composant `AssignedField` provoquait des erreurs de téléchargement de fichier dans les nœuds « Créer un enregistrement » ou « Mettre à jour un enregistrement » ([#7556](https://github.com/nocobase/nocobase/pull/7556)) par @mytharcher
* **[Formulaires publics]** Correction du problème où les règles de téléchargement pour les champs de fichier dans les formulaires publics étaient incorrectes ([#7553](https://github.com/nocobase/nocobase/pull/7553)) par @mytharcher

### [v1.9.0-beta.9](https://www.nocobase.com/en/blog/v1.9.0-beta.9)

*Date de sortie : 2025-09-30*

### 🎉 Nouvelles fonctionnalités

* **[client]**
  * Les blocs de tableau prennent en charge l'ajout d'un bouton « Paramètres des colonnes » pour configurer l'ordre et la visibilité des colonnes ([#7204](https://github.com/nocobase/nocobase/pull/7204)) par @kerwin612
  * Prise en charge des règles de validation de champ ([#7297](https://github.com/nocobase/nocobase/pull/7297)) par @aaaaaajie
* **[Source de données : Principale]**
  * Prise en charge de la lecture des tables à partir de la source de données principale ([#7238](https://github.com/nocobase/nocobase/pull/7238)) par @aaaaaajie
  * Prise en charge de l'affichage des tables définies par les plugins dans la source de données principale. ([#7187](https://github.com/nocobase/nocobase/pull/7187)) par @aaaaaajie

### 🚀 Améliorations

* **[client]** Prise en charge de la rotation des images lors de l'aperçu ([#7523](https://github.com/nocobase/nocobase/pull/7523)) par @mytharcher
* **[snowflake-id]** Modification des ID des tables système avec des clés primaires auto-incrémentées mais sans identifiants uniques en ID de type Snowflake 53 bits ([#7465](https://github.com/nocobase/nocobase/pull/7465)) par @2013xile
* **[Workflow]** Séparation de la logique liée à l'ordonnancement dans un répartiteur autonome ([#7535](https://github.com/nocobase/nocobase/pull/7535)) par @mytharcher
* **[Adaptateur de file d'attente RabbitMQ]** Amélioration de la gestion de la connexion RabbitMQ et de la logique de traitement des messages par @sdp-ncd
* **[Gestionnaire d'e-mails]**
  * prend en charge la synchronisation par lots par @jiannx
  * l'éditeur riche prend en charge le redimensionnement des images par @jiannx

### 🐛 Corrections de bugs

* **[client]**
  * Correction d'un problème où le bouton « Paramètres des colonnes » chargeait les colonnes de la table à l'intérieur de la boîte de dialogue modale ([#7385](https://github.com/nocobase/nocobase/pull/7385)) par @kerwin612
  * Correction du problème où les sous-menus de la barre latérale ne pouvaient pas être mis en surbrillance correctement ([#7520](https://github.com/nocobase/nocobase/pull/7520)) par @duannyuuu
* **[Workflow]**
  * Correction du problème d'exécution en double dû à une gestion inappropriée de la file d'attente ([#7533](https://github.com/nocobase/nocobase/pull/7533)) par @mytharcher
  * Correction du problème où la condition de la liste des workflows était incorrecte lors du chargement du contexte de champ associé dans la configuration du workflow lié ([#7516](https://github.com/nocobase/nocobase/pull/7516)) par @mytharcher
  * Correction du problème où les tâches planifiées basées sur des champs de date ne se déclenchaient pas après le démarrage ([#7524](https://github.com/nocobase/nocobase/pull/7524)) par @mytharcher
* **[Workflow : Nœud de boucle]** Correction du problème où le processus avançait incorrectement à l'élément suivant même lorsque les conditions du nœud de boucle n'étaient pas satisfaites ([#7521](https://github.com/nocobase/nocobase/pull/7521)) par @mytharcher
* **[Gestionnaire d'e-mails]**
  * Objet de courrier indésirable par @jiannx
  * objet indésirable par @jiannx
  * l'éditeur riche prend en charge les sauts de ligne souples par @jiannx
  * Prend en charge le même e-mail pour plusieurs personnes par @jiannx
  * performances optimales de la liste des messages électroniques par @jiannx
  * après la sélection des lignes, définir « Lu » et « Non lu » par @jiannx
  * ajout du champ rawId pour l'optimisation des performances par @jiannx
  * l'attribut ref dans le html provoque une exception de rendu par @jiannx
  * le contenu du sous-mail ne peut pas être filtré par @jiannx
  * prise en charge de la resynchronisation par @jiannx
  * Distinguer manuellement entre le transfert et la réponse par @jiannx

## develop

![develop.png](https://static-docs.nocobase.com/7fcdd9456a17286d8a439eee52bcb8d2.png)

### [v2.0.0-alpha.5](https://www.nocobase.com/en/blog/v2.0.0-alpha.5)

*Date de sortie : 2025-10-10*

### 🐛 Corrections de bugs

- **[serveur]** Erreur de migration de clé primaire ([#7563](https://github.com/nocobase/nocobase/pull/7563)) par @2013xile
- **[client]**
  - Correction du problème de non actualisation des données après la soumission du formulaire ([#7560](https://github.com/nocobase/nocobase/pull/7560)) par @zhangzhonghe
  - Correction du problème où l'absence de propriétés dynamiques dans le composant `AssignedField` provoquait des erreurs de téléchargement de fichier dans les nœuds « Créer un enregistrement » ou « Mettre à jour un enregistrement » ([#7556](https://github.com/nocobase/nocobase/pull/7556)) par @mytharcher
- **[Calendrier]** correction d'un problème de requête de données causé par un identifiant unique dans le bloc calendrier ([#7562](https://github.com/nocobase/nocobase/pull/7562)) par @katherinehhh
- **[Bloc : modèle (obsolète)]** Correction d'un problème où des requêtes inutiles pour les modèles de bloc étaient déclenchées lors de l'ouverture ou de la fermeture de modales ([#7561](https://github.com/nocobase/nocobase/pull/7561)) par @gchust
- **[Formulaires publics]** Correction du problème où les règles de téléchargement pour les champs de fichier dans les formulaires publics étaient incorrectes ([#7553](https://github.com/nocobase/nocobase/pull/7553)) par @mytharcher
- **[Gestionnaire multi-applications (obsolète)]** Correction de la validation du port avant la migration des données multi-applications ([#7540](https://github.com/nocobase/nocobase/pull/7540)) par @jiannx

### [v2.0.0-alpha.4](https://www.nocobase.com/en/blog/v2.0.0-alpha.4)

*Date de sortie : 2025-10-05*

### 🚀 Améliorations

* **[moteur-de-flux]** Optimisation de la fonctionnalité de glisser-déposer ([#7526](https://github.com/nocobase/nocobase/pull/7526)) par @zhangzhonghe
* **[Workflow : Nœud de boucle]** Prise en charge de la limitation du nombre maximum de cycles pour les nœuds de boucle via des variables d'environnement ([#7543](https://github.com/nocobase/nocobase/pull/7543)) par @mytharcher
* **[Workflow]** Prise en charge de la limitation du nombre maximum de nœuds dans un workflow via des variables d'environnement ([#7542](https://github.com/nocobase/nocobase/pull/7542)) par @mytharcher
* **[Workflow : Approbation]** Ajout d'un bouton d'impression dans la fenêtre contextuelle de détail des blocs d'approbation personnalisés par @mytharcher

### 🐛 Corrections de bugs

* **[client]** Correction d'un problème où l'action « Exécuter » dans l'éditeur de code ne fonctionnait pas, garantissant que les utilisateurs peuvent désormais exécuter le code correctement. ([#7547](https://github.com/nocobase/nocobase/pull/7547)) par @gchust
* **[Employés IA]** Correction de l'erreur sur la page de configuration des permissions des employés IA ([#7548](https://github.com/nocobase/nocobase/pull/7548)) par @2013xile
* **[Workflow]** Correction du problème où l'ajout d'un workflow dans la configuration du bouton de workflow lié provoquait le blocage de l'application après un clic ([#7541](https://github.com/nocobase/nocobase/pull/7541)) par @mytharcher
* **[Gestionnaire d'e-mails]** Exception de réautorisation par @jiannx

### [v1.9.0-alpha.17](https://www.nocobase.com/en/blog/v1.9.0-alpha.17)

*Date de sortie : 2025-09-30*

### 🚀 Améliorations

* **[Workflow]** Séparation de la logique liée à l'ordonnancement dans un répartiteur autonome ([#7535](https://github.com/nocobase/nocobase/pull/7535)) par @mytharcher

### 🐛 Corrections de bugs

* **[Workflow]**
  * Correction du problème d'exécution en double dû à une gestion inappropriée de la file d'attente ([#7533](https://github.com/nocobase/nocobase/pull/7533)) par @mytharcher
  * Correction du problème où les tâches planifiées basées sur des champs de date ne se déclenchaient pas après le démarrage ([#7524](https://github.com/nocobase/nocobase/pull/7524)) par @mytharcher

### [v2.0.0-alpha.1](https://www.nocobase.com/en/blog/v2.0.0-alpha.1)

*Date de sortie : 2025-09-30

### 🚀 Améliorations

- **[serveur]** Ajout de la gestion du cycle de vie d'arrêt gracieux pour l'application ([#7536](https://github.com/nocobase/nocobase/pull/7536)) par @mytharcher
