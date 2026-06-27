---
title: "Mises à jour hebdomadaires｜Plugin de gestion de sauvegarde open source"
description: "Ceci est un résumé des mises à jour et améliorations des fonctionnalités de NocoBase du 22 au 28 mai 2026."
---

Résumez les journaux de mise à jour hebdomadaires du produit. Les dernières versions sont disponibles sur [notre blog](https://www.nocobase.com/en/blog/timeline).

**NocoBase est actuellement mis à jour avec trois branches : `main`, `next` et `develop`.**

![version.png](https://static-docs.nocobase.com/ba5f04e27e99c625cb3822da5df07860.png)

* `main` : La version la plus stable à ce jour, recommandée pour l'installation ;
* `next` : Version bêta, contient les nouvelles fonctionnalités à venir et a été testée préliminairement. Il peut y avoir des problèmes connus ou inconnus. Elle est principalement destinée aux utilisateurs testeurs pour recueillir des retours et optimiser davantage les fonctions. Idéale pour les utilisateurs testeurs qui souhaitent découvrir les nouvelles fonctionnalités en avant-première et donner leur avis ;
* `develop` : Version alpha, contient le code de fonctionnalité le plus récent, peut être incomplète ou instable, principalement destinée au développement interne et à l'itération rapide. Adaptée aux utilisateurs techniques intéressés par les fonctionnalités de pointe du produit, mais avec des problèmes potentiels et des fonctions incomplètes. Ne pas utiliser en production.

## main

![main.png](https://static-docs.nocobase.com/47a3c71734c1d0f908b51f9ebd53c0ac.png)

### [v2.0.58](https://www.nocobase.com/en/blog/v2.0.58)

*Date de sortie : 2026-05-28*

### 🎉 Nouvelles fonctionnalités

* **[Workflow]** Ajout d'une API administrateur pour relancer les exécutions de workflow démarrées depuis le nœud principal ou un nœud spécifié. ([#9569](https://github.com/nocobase/nocobase/pull/9569)) par @mytharcher

### 🚀 Améliorations

* **[client]** Suppression de l'option Masqué des paramètres des éléments de menu. ([#9595](https://github.com/nocobase/nocobase/pull/9595)) par @zhangzhonghe

### 🐛 Corrections de bugs

* **[client]**
  * Correction du problème où la fenêtre contextuelle du sélecteur de date mobile v2 utilisait l'heure actuelle au lieu de la valeur du formulaire. ([#9582](https://github.com/nocobase/nocobase/pull/9582)) par @katherinehhh
  * Correction du problème où les paramètres de format du champ heure ne prenaient pas effet dans v2. ([#9579](https://github.com/nocobase/nocobase/pull/9579)) par @katherinehhh
  * Augmentation de la limite de téléchargement de fichiers pour le composant de saisie par scan v1 à 10 Mo. ([#9580](https://github.com/nocobase/nocobase/pull/9580)) par @katherinehhh
  * Correction du problème où l'état masqué du lien de sous-formulaire n'était pas synchronisé. ([#9594](https://github.com/nocobase/nocobase/pull/9594)) par @katherinehhh
  * Correction du problème où un sous-tableau dans un sous-formulaire ne pouvait pas ajouter une deuxième ligne. ([#9586](https://github.com/nocobase/nocobase/pull/9586)) par @katherinehhh
  * Correction du problème où les onglets de page disparaissaient après avoir changé de menu. ([#9583](https://github.com/nocobase/nocobase/pull/9583)) par @zhangzhonghe
* **[moteur-de-flux]** Correction du problème où les règles de liaison des actions de tableau s'exécutaient incorrectement après la soumission réussie d'un formulaire dans une fenêtre contextuelle. ([#9445](https://github.com/nocobase/nocobase/pull/9445)) par @gchust
* **[Workflow : Événement d'action personnalisée]** Correction du problème où les boutons de tableau d'action personnalisée avec plusieurs contextes d'enregistrement permettaient incorrectement de sélectionner des workflows de contexte personnalisé. ([#9608](https://github.com/nocobase/nocobase/pull/9608)) par @mytharcher
* **[Gestionnaire de fichiers]**
  * Correction de la normalisation des noms de fichiers Unicode lors du téléchargement de fichiers pour éviter de générer des clés d'objet avec des caractères de contrôle. ([#9584](https://github.com/nocobase/nocobase/pull/9584)) par @mytharcher
  * Amélioration des messages d'échec d'aperçu PDF et documentation des exigences CORS pour le stockage externe. ([#9600](https://github.com/nocobase/nocobase/pull/9600)) par @mytharcher
    Référence : [Aperçu des fichiers](docs/docs/en/file-manager/file-preview/index.md)

### [v2.0.57](https://www.nocobase.com/en/blog/v2.0.57)

*Date de sortie : 2026-05-26*

### 🐛 Corrections de bugs

* **[build]** Correction de la sortie d'obscurcissement du serveur de plugin pour éviter les variables globales du navigateur dans les bundles d'exécution Node.js. ([#9559](https://github.com/nocobase/nocobase/pull/9559)) par @Molunerfinn
* **[Workflow : Nœud manuel]** Correction du problème où les sauvegardes temporaires pour les tâches de workflow manuelles ne conservaient pas les valeurs de formulaire soumises. ([#9554](https://github.com/nocobase/nocobase/pull/9554)) par @mytharcher
* **[Employés IA]** Correction de la description incorrecte du nom de l'outil dans l'invite de contexte de travail. ([#9567](https://github.com/nocobase/nocobase/pull/9567)) par @cgyrock
* **[Gestionnaire de fichiers]** Rendu sécurisé des aperçus PDF avec PDF.js au lieu du rendu PDF brut basé sur iframe. ([#9566](https://github.com/nocobase/nocobase/pull/9566)) par @mytharcher
* **[Auth : OIDC]** Correction de la fuite de jeton lorsque les rappels de connexion SSO recevaient une URL de redirection externe. par @2013xile
* **[Workflow : Approbation]**
  * Correction du problème où l'API `<span>jobs:resume</span>` n'était pas prise en charge par les nœuds d'approbation. par @mytharcher
  * Correction du retrait d'approbation pour mettre à jour les données métier soumises tout en respectant les autorisations de mise à jour de la collection source. par @mytharcher
  * Correction des tâches d'approbation obsolètes lorsque les workflows d'approbation étaient terminés par des échecs de nœuds non liés à l'approbation. par @mytharcher

### [v2.0.56](https://www.nocobase.com/en/blog/v2.0.56)

*Date de sortie : 2026-05-22*

### 🎉 Nouvelles fonctionnalités

* **[Gestionnaire de sauvegarde]** Passage en open source du plugin Gestionnaire de sauvegarde. ([#9550](https://github.com/nocobase/nocobase/pull/9550)) par @chenos

### 🚀 Améliorations

* **[client]** Optimisation des paramètres d'affichage des boutons d'action. ([#9510](https://github.com/nocobase/nocobase/pull/9510)) par @katherinehhh
* **[moteur-de-flux]** Ajout de la prise en charge de la recherche dans les menus de configuration des champs v2. ([#9489](https://github.com/nocobase/nocobase/pull/9489)) par @zhangzhonghe
* **[Sécurité]** Ajout d'une revue de sécurité des dépendances pour les pull requests. ([#9523](https://github.com/nocobase/nocobase/pull/9523)) par @zhangzhonghe
* **[Gestionnaire de notifications]** Modification de la stratégie de file d'attente pour optimiser les performances d'envoi. ([#9407](https://github.com/nocobase/nocobase/pull/9407)) par @mytharcher
* **[IA : Base de connaissances]** Activation de la modification du stockage vectoriel pour les bases de connaissances IA. par @cgyrock
* **[Workflow : Approbation]** Amélioration des approbations associées avec des cartes chronologiques. par @zhangzhonghe

### 🐛 Corrections de bugs

* **[client]**
  * Correction du problème où les valeurs sélectionnées étaient effacées lorsque les champs d'association dépendants changeaient dans la liaison de portée de données. ([#9551](https://github.com/nocobase/nocobase/pull/9551)) par @katherinehhh
  * Correction du problème où un badge de menu affichait toujours un point lorsque sa valeur était 0. ([#9491](https://github.com/nocobase/nocobase/pull/9491)) par @zhangzhonghe
  * Correction du problème où les formulaires de filtre ne pouvaient pas utiliser les variables de formulaire actuelles. ([#9474](https://github.com/nocobase/nocobase/pull/9474)) par @zhangzhonghe
  * Correction du problème où les blocs v2 rétrécis devenaient pleine largeur après avoir quitté le mode édition. ([#9529](https://github.com/nocobase/nocobase/pull/9529)) par @zhangzhonghe
  * Correction de l'état incorrect du menu JS Field dans les sous-formulaires. ([#9507](https://github.com/nocobase/nocobase/pull/9507)) par @gchust
* **[moteur-de-flux]** Correction du problème de sélection multiple pour les champs de source de données externes dans les formulaires v2. ([#9542](https://github.com/nocobase/nocobase/pull/9542)) par @katherinehhh
* **[Employés IA]** Correction d'une erreur survenue lorsque les employés IA accédaient à des bases de connaissances en lecture seule. ([#9539](https://github.com/nocobase/nocobase/pull/9539)) par @cgyrock
* **[Calendrier]** Correction du problème où plus d'éléments dans le calendrier ne pouvaient pas être entièrement affichés. ([#9492](https://github.com/nocobase/nocobase/pull/9492)) par @zhangzhonghe
* **[Action : Mise à jour par lots]** Correction du problème où l'action de mise à jour en masse réinitialisait l'état de chargement après un échec de mise à jour. ([#9509](https://github.com/nocobase/nocobase/pull/9509)) par @katherinehhh
* **[Documentation API]** Correction de la documentation de l'API de collection afin que les paramètres de requête n'interfèrent plus les uns avec les autres. ([#9442](https://github.com/nocobase/nocobase/pull/9442)) par @jiannx
* **[Workflow]** Ajout d'un état de chargement pour l'exécution manuelle du workflow. ([#9533](https://github.com/nocobase/nocobase/pull/9533)) par @mytharcher
* **[Gestionnaire de migration]** Correction des échecs de création de fichier de migration lors de l'utilisation d'OceanBase. par @2013xile
* **[Stockage de fichiers : S3(Pro)]** Correction de la gestion du point de terminaison S3 Pro afin que les téléchargements serveur et les aperçus URL ne dupliquent pas l'hôte du bucket. par @mytharcher
* **[Workflow : Approbation]** Correction des index d'enregistrement d'approbation en double lorsque des délégations se produisaient simultanément sur le même travail d'approbation. par @mytharcher

## next

![next.png](https://static-docs.nocobase.com/8ed17a0f08cc585018f6de6c8b13947d.png)


### [v2.1.0-beta.37](https://www.nocobase.com/en/blog/v2.1.0-beta.37)

*Date de sortie : 2026-05-26*

### 🎉 Nouvelles fonctionnalités

* **[client-v2]** Ajout d'un menu Sécurité et de la page de paramètres de stratégie de jeton dans l'administration v2. Le centre utilisateur prend désormais en charge le changement de mot de passe. ([#9556](https://github.com/nocobase/nocobase/pull/9556)) par @Molunerfinn
* **[cli]** Ajout de la prise en charge de l'authentification de base. ([#9558](https://github.com/nocobase/nocobase/pull/9558)) par @chenos
* **[Stratégie de mot de passe]** Migration du plugin Stratégie de mot de passe vers le shell d'administration client-v2, y compris les pages de paramètres Stratégie de mot de passe et Utilisateurs verrouillés, et ajout de l'application des règles côté client sur le formulaire de changement de mot de passe du centre utilisateur. par @Molunerfinn

### 🚀 Améliorations

* **[Visualisation de données]** Ajout de la prise en charge client-v2 pour les blocs de graphiques. ([#9517](https://github.com/nocobase/nocobase/pull/9517)) par @jiannx
* **[Workflow]** Refonte des vérifications de disponibilité des nœuds asynchrones du workflow. ([#9532](https://github.com/nocobase/nocobase/pull/9532)) par @mytharcher

### 🐛 Corrections de bugs

* **[build]**
  * Les actifs textuels dans les builds serveur sont désormais copiés en tant que fichiers au lieu d'être convertis en modules JavaScript. ([#9565](https://github.com/nocobase/nocobase/pull/9565)) par @Molunerfinn
  * Correction de la sortie d'obscurcissement du serveur de plugin pour éviter les variables globales du navigateur dans les bundles d'exécution Node.js. ([#9559](https://github.com/nocobase/nocobase/pull/9559)) par @Molunerfinn
* **[client-v2]** Correction des métadonnées de langue du navigateur afin que la page de l'application suive la langue de l'application sélectionnée au lieu d'être marquée comme anglais. ([#9564](https://github.com/nocobase/nocobase/pull/9564)) par @Molunerfinn
* **[Gestionnaire de fichiers]** Rendu sécurisé des aperçus PDF avec PDF.js au lieu du rendu PDF brut basé sur iframe. ([#9566](https://github.com/nocobase/nocobase/pull/9566)) par @mytharcher
* **[Employés IA]** Correction de la description incorrecte du nom de l'outil dans l'invite de contexte de travail. ([#9567](https://github.com/nocobase/nocobase/pull/9567)) par @cgyrock
* **[Workflow : Nœud manuel]** Correction du problème où les sauvegardes temporaires pour les tâches de workflow manuelles ne conservaient pas les valeurs de formulaire soumises. ([#9554](https://github.com/nocobase/nocobase/pull/9554)) par @mytharcher
* **[Auth : OIDC]** Correction de la fuite de jeton lorsque les rappels de connexion SSO recevaient une URL de redirection externe. par @2013xile
* **[Workflow : Approbation]**
  * Correction du retrait d'approbation pour mettre à jour les données métier soumises tout en respectant les autorisations de mise à jour de la collection source. par @mytharcher
  * Correction du problème où l'API `<span>jobs:resume</span>` n'était pas prise en charge par les nœuds d'approbation. par @mytharcher
  * Correction des index d'enregistrement d'approbation en double lorsque des délégations se produisaient simultanément sur le même travail d'approbation. par @mytharcher
  * Correction des tâches d'approbation obsolètes lorsque les workflows d'approbation étaient terminés par des échecs de nœuds non liés à l'approbation. par @mytharcher

### [v2.1.0-beta.36](https://www.nocobase.com/en/blog/v2.1.0-beta.36)

*Date de sortie : 2026-05-22*

### 🎉 Nouvelles fonctionnalités

* **[cli]** Ajout de commandes de création et de restauration de sauvegarde. ([#9541](https://github.com/nocobase/nocobase/pull/9541)) par @chenos
* **[Gestionnaire de sauvegarde]** Passage en open source du plugin Gestionnaire de sauvegarde. ([#9550](https://github.com/nocobase/nocobase/pull/9550)) par @chenos
* **[Éditeur de thème]** Ajout de la prise en charge de l'éditeur de thème dans l'interface v2. ([#9530](https://github.com/nocobase/nocobase/pull/9530)) par @zhangzhonghe
* **[Authentification à deux facteurs (2FA)]** Ajout de la prise en charge de la liaison, de la vérification et de la configuration de TOTP et de l'authentification à deux facteurs depuis le client v2. par @Molunerfinn

### 🚀 Améliorations

* **[client]** Optimisation des paramètres d'affichage des boutons d'action. ([#9510](https://github.com/nocobase/nocobase/pull/9510)) par @katherinehhh
* **[moteur-de-flux]** Ajout de la prise en charge de la recherche dans les menus de configuration des champs v2. ([#9489](https://github.com/nocobase/nocobase/pull/9489)) par @zhangzhonghe
* **[cli]** Amélioration du flux d'authentification de l'environnement. ([#9546](https://github.com/nocobase/nocobase/pull/9546)) par @chenos
* **[Sécurité]** Ajout d'une revue de sécurité des dépendances pour les pull requests. ([#9523](https://github.com/nocobase/nocobase/pull/9523)) par @zhangzhonghe
* **[Vérification]** Ajout de la prise en charge client v2 pour le plugin Vérification, y compris la page de paramètres d'administration, l'entrée du centre utilisateur et les formulaires OTP SMS. ([#9515](https://github.com/nocobase/nocobase/pull/9515)) par @Molunerfinn
* **[Authentification]** Correction des paramètres de marque personnalisée dans le client v2. ([#9543](https://github.com/nocobase/nocobase/pull/9543)) par @zhangzhonghe
* **[Bloc : Carte]** Ajout de la prise en charge client v2 pour le plugin de carte. ([#9511](https://github.com/nocobase/nocobase/pull/9511)) par @jiannx
* **[Marque personnalisée]** Ajout de la prise en charge des paramètres de marque personnalisée dans le client v2. par @zhangzhonghe
* **[IA : Base de connaissances]** Activation de la modification du stockage vectoriel pour les bases de connaissances IA. par @cgyrock
* **[Workflow : Approbation]** Ajout du drapeau `<span>async</span>` pour les instructions d'approbation afin de prendre en charge la nouvelle API de création de nœud dans le canevas du workflow. par @mytharcher

### 🐛 Corrections de bugs

* **[client]**
  * Correction du problème où les valeurs sélectionnées étaient effacées lorsque les champs d'association dépendants changeaient dans la liaison de portée de données. ([#9551](https://github.com/nocobase/nocobase/pull/9551)) par @katherinehhh
  * Correction du chargement en mode dev pour les plugins de stockage intégrés qui dépendent d'exportations nommées de plugins source locaux. ([#9548](https://github.com/nocobase/nocobase/pull/9548)) par @Molunerfinn
  * Correction de l'état incorrect du menu JS Field dans les sous-formulaires. ([#9507](https://github.com/nocobase/nocobase/pull/9507)) par @gchust
  * Correction du problème où les blocs v2 rétrécis devenaient pleine largeur après avoir quitté le mode édition. ([#9529](https://github.com/nocobase/nocobase/pull/9529)) par @zhangzhonghe
* **[client-v2]** Correction de l'enregistrement de dépendance dnd-kit incohérent. ([#9544](https://github.com/nocobase/nocobase/pull/9544)) par @jiannx
* **[moteur-de-flux]** Correction du problème de sélection multiple pour les champs de source de données externes dans les formulaires v2. ([#9542](https://github.com/nocobase/nocobase/pull/9542)) par @katherinehhh
* **[Bloc : iframe]** Correction du problème où le contenu iframe ne remplissait pas la hauteur de bloc configurée. ([#9540](https://github.com/nocobase/nocobase/pull/9540)) par @katherinehhh
* **[Employés IA]**
  * Correction d'une erreur survenue lorsque les employés IA accédaient à des bases de connaissances en lecture seule. ([#9539](https://github.com/nocobase/nocobase/pull/9539)) par @cgyrock
  * Correction du problème où les cartes d'appel d'outil IA n'apparaissaient pas immédiatement lorsque les événements d'outil en continu étaient divisés. ([#9534](https://github.com/nocobase/nocobase/pull/9534)) par @2013xile
  * Correction d'une erreur survenue lorsque les employés IA accédaient à des bases de connaissances en lecture seule. ([#9538](https://github.com/nocobase/nocobase/pull/9538)) par @cgyrock
* **[Action : Exporter les enregistrements]** Amélioration des performances de configuration des champs lorsqu'il y a de nombreux champs d'association. ([#9524](https://github.com/nocobase/nocobase/pull/9524)) par @katherinehhh
* **[Action : Mise à jour par lots]** Correction du problème où l'action de mise à jour en masse réinitialisait l'état de chargement après un échec de mise à jour. ([#9509](https://github.com/nocobase/nocobase/pull/9509)) par @katherinehhh
* **[Workflow]** Ajout d'un état de chargement pour l'exécution manuelle du workflow. ([#9533](https://github.com/nocobase/nocobase/pull/9533)) par @mytharcher
* **[Localisation]** Correction des traductions de référence de localisation intégrées pour les tâches de traduction IA. ([#9531](https://github.com/nocobase/nocobase/pull/9531)) par @2013xile
* **[Gestionnaire de migration]** Correction des échecs de création de fichier de migration lors de l'utilisation d'OceanBase. par @2013xile
* **[Stockage de fichiers : S3(Pro)]** Correction de la gestion du point de terminaison S3 Pro afin que les téléchargements serveur et les aperçus URL ne dupliquent pas l'hôte du bucket. par @mytharcher

## develop

![develop.png](https://static-docs.nocobase.com/7fcdd9456a17286d8a439eee52bcb8d2.png)

### [v2.1.0-alpha.40](https://www.nocobase.com/en/blog/v2.1.0-alpha.40)

*Date de sortie : 2026-05-22*

### 🎉 Nouvelles fonctionnalités

* **[cli]** Ajout de commandes de création et de restauration de sauvegarde. ([#9541](https://github.com/nocobase/nocobase/pull/9541)) par @chenos
* **[Gestionnaire de sauvegarde]** Passage en open source du plugin Gestionnaire de sauvegarde. ([#9550](https://github.com/nocobase/nocobase/pull/9550)) par @chenos
* **[Éditeur de thème]** Ajout de la prise en charge de l'éditeur de thème dans l'interface v2. ([#9530](https://github.com/nocobase/nocobase/pull/9530)) par @zhangzhonghe
* **[Authentification à deux facteurs (2FA)]** Ajout de la prise en charge de la liaison, de la vérification et de la configuration de TOTP et de l'authentification à deux facteurs depuis le client v2. par @Molunerfinn

### 🚀 Améliorations

* **[cli]** Amélioration du flux d'authentification de l'environnement. ([#9546](https://github.com/nocobase/nocobase/pull/9546)) par @chenos
* **[moteur-de-flux]** Ajout de la prise en charge de la recherche dans les menus de configuration des champs v2. ([#9489](https://github.com/nocobase/nocobase/pull/9489)) par @zhangzhonghe
* **[client]** Optimisation des paramètres d'affichage des boutons d'action. ([#9510](https://github.com/nocobase/nocobase/pull/9510)) par @katherinehhh
* **[Sécurité]** Ajout d'une revue de sécurité des dépendances pour les pull requests. ([#9523](https://github.com/nocobase/nocobase/pull/9523)) par @zhangzhonghe
* **[Vérification]** Ajout de la prise en charge client v2 pour le plugin Vérification, y compris la page de paramètres d'administration, l'entrée du centre utilisateur et les formulaires OTP SMS. ([#9515](https://github.com/nocobase/nocobase/pull/9515)) par @Molunerfinn
* **[Authentification]** Correction des paramètres de marque personnalisée dans le client v2. ([#9543](https://github.com/nocobase/nocobase/pull/9543)) par @zhangzhonghe
* **[Bloc : Carte]** Ajout de la prise en charge client v2 pour le plugin de carte. ([#9511](https://github.com/nocobase/nocobase/pull/9511)) par @jiannx
* **[Marque personnalisée]** Ajout de la prise en charge des paramètres de marque personnalisée dans le client v2. par @zhangzhonghe
* **[IA : Base de connaissances]** Activation de la modification du stockage vectoriel pour les bases de connaissances IA. par @cgyrock
* **[Workflow : Approbation]** Ajout du drapeau `<span>async</span>` pour les instructions d'approbation afin de prendre en charge la nouvelle API de création de nœud dans le canevas du workflow. par @mytharcher

### 🐛 Corrections de bugs

* **[client]**
  * Correction du chargement en mode dev pour les plugins de stockage intégrés qui dépendent d'exportations nommées de plugins source locaux. ([#9548](https://github.com/nocobase/nocobase/pull/9548)) par @Molunerfinn
  * Correction du problème où les blocs v2 rétrécis devenaient pleine largeur après avoir quitté le mode édition. ([#9529](https://github.com/nocobase/nocobase/pull/9529)) par @zhangzhonghe
  * Correction du problème où les valeurs sélectionnées étaient effacées lorsque les champs d'association dépendants changeaient dans la liaison de portée de données. ([#9551](https://github.com/nocobase/nocobase/pull/9551)) par @katherinehhh
  * Correction de l'état incorrect du menu JS Field dans les sous-formulaires. ([#9507](https://github.com/nocobase/nocobase/pull/9507)) par @gchust
* **[client-v2]** Correction de l'enregistrement de dépendance dnd-kit incohérent. ([#9544](https://github.com/nocobase/nocobase/pull/9544)) par @jiannx
* **[moteur-de-flux]** Correction du problème de sélection multiple pour les champs de source de données externes dans les formulaires v2. ([#9542](https://github.com/nocobase/nocobase/pull/9542)) par @katherinehhh
* **[Bloc : iframe]** Correction du problème où le contenu iframe ne remplissait pas la hauteur de bloc configurée. ([#9540](https://github.com/nocobase/nocobase/pull/9540)) par @katherinehhh
* **[Action : Exporter les enregistrements]** Amélioration des performances de configuration des champs lorsqu'il y a de nombreux champs d'association. ([#9524](https://github.com/nocobase/nocobase/pull/9524)) par @katherinehhh
* **[Employés IA]**
  * Correction d'une erreur survenue lorsque les employés IA accédaient à des bases de connaissances en lecture seule. ([#9539](https://github.com/nocobase/nocobase/pull/9539)) par @cgyrock
  * Correction d'une erreur survenue lorsque les employés IA accédaient à des bases de connaissances en lecture seule. ([#9538](https://github.com/nocobase/nocobase/pull/9538)) par @cgyrock
  * Correction du problème où les cartes d'appel d'outil IA n'apparaissaient pas immédiatement lorsque les événements d'outil en continu étaient divisés. ([#9534](https://github.com/nocobase/nocobase/pull/9534)) par @2013xile
* **[Localisation]** Correction des traductions de référence de localisation intégrées pour les tâches de traduction IA. ([#9531](https://github.com/nocobase/nocobase/pull/9531)) par @2013xile
* **[Action : Mise à jour par lots]** Correction du problème où l'action de mise à jour en masse réinitialisait l'état de chargement après un échec de mise à jour. ([#9509](https://github.com/nocobase/nocobase/pull/9509)) par @katherinehhh
* **[Workflow]** Ajout d'un état de chargement pour l'exécution manuelle du workflow. ([#9533](https://github.com/nocobase/nocobase/pull/9533)) par @mytharcher
* **[Gestionnaire de migration]** Correction des échecs de création de fichier de migration lors de l'utilisation d'OceanBase. par @2013xile
* **[Stockage de fichiers : S3(Pro)]** Correction de la gestion du point de terminaison S3 Pro afin que les téléchargements serveur et les aperçus URL ne dupliquent pas l'hôte du bucket. par @mytharcher
* **[Workflow : Approbation]** Correction des index d'enregistrement d'approbation en double lorsque des délégations se produisaient simultanément sur le même travail d'approbation. par @mytharcher
