---
title: "Mises à jour hebdomadaires｜Ajout du support client-v2 pour le plugin Kanban"
description: "Ceci est un résumé des mises à jour et améliorations des fonctionnalités de NocoBase du 14 au 21 mai 2026."
---

Résumez les journaux de mise à jour hebdomadaires du produit. Les dernières versions sont disponibles sur [notre blog](https://www.nocobase.com/en/blog/timeline).

**NocoBase est actuellement mis à jour avec trois branches : `main`, `next` et `develop`.**

![version.png](https://static-docs.nocobase.com/ba5f04e27e99c625cb3822da5df07860.png)

* `main` : La version la plus stable à ce jour, recommandée pour l'installation ;
* `next` : Version bêta, contient les nouvelles fonctionnalités à venir et a été testée préliminairement. Il peut y avoir des problèmes connus ou inconnus. Elle est principalement destinée aux utilisateurs testeurs pour recueillir des retours et optimiser davantage les fonctionnalités. Idéale pour les utilisateurs testeurs qui souhaitent découvrir les nouvelles fonctionnalités en avant-première et donner leur avis ;
* `develop` : Version alpha, contient le code de fonctionnalité le plus récent, peut être incomplète ou instable, principalement destinée au développement interne et à l'itération rapide. Adaptée aux utilisateurs techniques intéressés par les fonctionnalités de pointe du produit, mais avec des problèmes potentiels et des fonctions incomplètes. Ne pas utiliser en production.

## main

![main.png](https://static-docs.nocobase.com/47a3c71734c1d0f908b51f9ebd53c0ac.png)

### [v2.0.55](https://www.nocobase.com/en/blog/v2.0.55)

*Date de sortie : 2026-05-18*

### 🚀 Améliorations

- **[Employés IA]** Invite sur le nom de table en double lors de l'enregistrement dans la base vectorielle ([#9497](https://github.com/nocobase/nocobase/pull/9497)) par @cgyrock
- **[IA : Base de connaissances]** Invite sur le nom de table en double lors de l'enregistrement dans la base vectorielle par @cgyrock

### 🐛 Corrections de bugs

- **[client]**

  - Correction d'un problème où les variables d'enregistrement contextuelles de la fenêtre contextuelle ne pouvaient pas être résolues dans les flux d'événements des boutons d'action. ([#9495](https://github.com/nocobase/nocobase/pull/9495)) par @gchust
  - Correction d'un problème où les valeurs des champs JS dans les sous-formulaires n'étaient pas correctement définies lors de la soumission du formulaire. ([#9496](https://github.com/nocobase/nocobase/pull/9496)) par @gchust
- **[Gestionnaire de fichiers]** Correction des téléchargements `tx-cos` du gestionnaire de fichiers manquant les métadonnées de taille de fichier. ([#9499](https://github.com/nocobase/nocobase/pull/9499)) par @mytharcher
- **[Source de données : Principale]** Correction du problème où les options de champ sont écrites dans le schéma après la synchronisation des champs ([#9505](https://github.com/nocobase/nocobase/pull/9505)) par @2013xile
- **[Client WEB]** Nettoyage des données des blocs après la suppression des menus. ([#9459](https://github.com/nocobase/nocobase/pull/9459)) par @gchust
- **[Employés IA]** Correction des erreurs de lecture des fichiers OSS des employés IA ([#9493](https://github.com/nocobase/nocobase/pull/9493)) par @cgyrock
- **[Action : Importer des enregistrements]** Correction du problème où l'enregistrement importé sur les champs de type date affichait une date erronée ([#9463](https://github.com/nocobase/nocobase/pull/9463)) par @mytharcher
- **[Action : Exporter des enregistrements Pro]** Correction du problème où une erreur était levée lors de l'exportation d'une pièce jointe à partir d'un champ d'URL de pièce jointe par @mytharcher
- **[Action : Importer des enregistrements Pro]** Correction de la gestion du fuseau horaire pour les importations xlsx Pro par @mytharcher

### [v2.0.53](https://www.nocobase.com/en/blog/v2.0.53)

*Date de sortie : 2026-05-14*

### 🚀 Améliorations

- **[moteur-de-flux]** Ajout d'un message de confirmation de modifications non enregistrées lors de la fermeture de la page de configuration du flux d'événements avec des données non enregistrées présentes. ([#9449](https://github.com/nocobase/nocobase/pull/9449)) par @gchust

### 🐛 Corrections de bugs

- **[client]**

  - Correction empêchant l'ouverture de l'édition rapide pour les champs de relation dans les tableaux ([#9469](https://github.com/nocobase/nocobase/pull/9469)) par @katherinehhh
  - Correction des champs de relation en lecture seule dans les sous-tableaux qui ne s'affichaient pas ou n'étaient pas cliquables après un rafraîchissement. ([#9453](https://github.com/nocobase/nocobase/pull/9453)) par @jiannx
  - Correction des champs de sélection multiple dans les blocs de données v2 qui doivent afficher les étiquettes des options au lieu des valeurs ([#9472](https://github.com/nocobase/nocobase/pull/9472)) par @katherinehhh
- **[Bloc : Formulaire en plusieurs étapes]** Correction du problème de barre de défilement lors de l'activation de la hauteur totale dans le bloc de formulaire en plusieurs étapes v1 ([#9468](https://github.com/nocobase/nocobase/pull/9468)) par @katherinehhh

## next

![next.png](https://static-docs.nocobase.com/8ed17a0f08cc585018f6de6c8b13947d.png)

### [v2.1.0-beta.35](https://www.nocobase.com/en/blog/v2.1.0-beta.35)

*Date de sortie : 2026-05-20*

### 🚀 Améliorations

- **[client]** Partage de l'évaluation des conditions entre les applications v1 et v2 ([#9522](https://github.com/nocobase/nocobase/pull/9522)) par @zhangzhonghe
- **[Localisation]** Amélioration des tâches de traduction de localisation Lina avec la portée de traduction, les paramètres de langue de référence et l'édition rapide ([#9521](https://github.com/nocobase/nocobase/pull/9521)) par @2013xile
- **[Workflow : Approbation]** Amélioration des approbations associées avec des cartes chronologiques par @zhangzhonghe

### 🐛 Corrections de bugs

- **[non défini]** Alignement des chemins de configuration nginx ([#9528](https://github.com/nocobase/nocobase/pull/9528)) par @chenos
- **[cli-v1]** Correction du démarrage du développement create-nocobase-app en réutilisant les shells d'application packagés tout en permettant le développement de plugins locaux. ([#9471](https://github.com/nocobase/nocobase/pull/9471)) par @Molunerfinn
- **[client]**

  - Correction du problème où un badge de menu affichait encore un point lorsque sa valeur était 0 ([#9491](https://github.com/nocobase/nocobase/pull/9491)) par @zhangzhonghe
  - Correction du problème où les formulaires de filtre ne pouvaient pas utiliser les variables de formulaire actuelles ([#9474](https://github.com/nocobase/nocobase/pull/9474)) par @zhangzhonghe
- **[Authentification]** Empêche le plantage du serveur lorsqu'un jeton d'authentification WebSocket fait référence à un authentificateur dont le plugin de type d'authentification est déchargé ou manquant. ([#9514](https://github.com/nocobase/nocobase/pull/9514)) par @Molunerfinn
- **[Calendrier]**

  - Correction du problème où les éléments supplémentaires du calendrier ne pouvaient pas être entièrement affichés ([#9492](https://github.com/nocobase/nocobase/pull/9492)) par @zhangzhonghe
  - Correction du style du curseur pour les éléments d'événement dans la superposition des événements supplémentaires du calendrier ([#9519](https://github.com/nocobase/nocobase/pull/9519)) par @jiannx
- **[Paramètres de licence]** Résolution des dépendances groupées liées symboliquement ([#9518](https://github.com/nocobase/nocobase/pull/9518)) par @chenos

### [v2.1.0-beta.34](https://www.nocobase.com/en/blog/v2.1.0-beta.34)

*Date de sortie : 2026-05-19*

### 🎉 Nouvelles fonctionnalités

- **[Bloc : Kanban]** Ajout du support client-v2 pour le plugin Kanban ([#9475](https://github.com/nocobase/nocobase/pull/9475)) par @jiannx

### 🚀 Améliorations

- **[cli]** Amélioration de l'expérience d'invite de commande NocoBase CLI en migrant les workflows de configuration et de gestion vers Inquirer, et correction des problèmes d'installation, de compétences et d'exécution Docker associés. ([#9452](https://github.com/nocobase/nocobase/pull/9452)) par @chenos
- **[Employés IA]** Invite sur le nom de table en double lors de l'enregistrement dans la base vectorielle ([#9497](https://github.com/nocobase/nocobase/pull/9497)) par @cgyrock
- **[Gestionnaire de notifications]** Changement de la stratégie de file d'attente pour optimiser les performances d'envoi ([#9407](https://github.com/nocobase/nocobase/pull/9407)) par @mytharcher
- **[Workflow : Événement d'action personnalisée]** Migration des plugins block-workbench et workflow-custom-action-trigger vers le client v2, y compris leurs modèles d'action et le flux du scanner QR. ([#9494](https://github.com/nocobase/nocobase/pull/9494)) par @jiannx
- **[Authentification]** Implémentation de la page des paramètres des authentificateurs dans client-v2 et livraison de tableaux client-v2 réutilisables, d'entrées variables et de primitives de formulaire. ([#9457](https://github.com/nocobase/nocobase/pull/9457)) par @Molunerfinn
- **[IA : Base de connaissances]** Invite sur le nom de table en double lors de l'enregistrement dans la base vectorielle par @cgyrock
- **[Auth : SAML 2.0]** Ajout d'entrées client-v2 pour les plugins d'authentification CAS et SAML afin qu'ils fonctionnent avec la page de connexion v2 et les paramètres des authentificateurs. par @Molunerfinn

### 🐛 Corrections de bugs

- **[client-v2]**

  - Correction de l'échec du chargement de la route v2 du plugin Kanban car les dépendances dnd-kit n'étaient pas fournies par le client. ([#9516](https://github.com/nocobase/nocobase/pull/9516)) par @jiannx
  - Le composant Tableau v2 partagé affiche désormais le sélecteur de taille de page par défaut, correspondant au comportement v1. ([#9512](https://github.com/nocobase/nocobase/pull/9512)) par @Molunerfinn
- **[client]**

  - Correction d'un problème où les valeurs des champs JS dans les sous-formulaires n'étaient pas correctement définies lors de la soumission du formulaire. ([#9496](https://github.com/nocobase/nocobase/pull/9496)) par @gchust
  - Correction d'un problème où les variables d'enregistrement contextuelles de la fenêtre contextuelle ne pouvaient pas être résolues dans les flux d'événements des boutons d'action. ([#9495](https://github.com/nocobase/nocobase/pull/9495)) par @gchust
- **[moteur-de-flux]** Correction d'un message d'erreur incorrect dans la console du navigateur. ([#9502](https://github.com/nocobase/nocobase/pull/9502)) par @gchust
- **[Employés IA]**

  - Correction du problème où les autorisations de rôle d'opérateur ne prenaient pas effet dans les nœuds d'employés IA ([#9513](https://github.com/nocobase/nocobase/pull/9513)) par @cgyrock
  - Correction des erreurs de lecture des fichiers OSS des employés IA ([#9493](https://github.com/nocobase/nocobase/pull/9493)) par @cgyrock
- **[Documentation API]** Correction de la documentation API des collections afin que les paramètres de requête n'interfèrent plus les uns avec les autres ([#9442](https://github.com/nocobase/nocobase/pull/9442)) par @jiannx
- **[Source de données : Principale]** Correction du problème où les options de champ sont écrites dans le schéma après la synchronisation des champs ([#9505](https://github.com/nocobase/nocobase/pull/9505)) par @2013xile
- **[Workflow : JavaScript]** Correction du chargement du package d'exécution QuickJS du workflow JavaScript dans les builds de production. ([#9503](https://github.com/nocobase/nocobase/pull/9503)) par @mytharcher
- **[Client WEB]** Nettoyage des données des blocs après la suppression des menus. ([#9459](https://github.com/nocobase/nocobase/pull/9459)) par @gchust
- **[Action : Importer des enregistrements]** Correction du problème où l'enregistrement importé sur les champs de type date affichait une date erronée ([#9463](https://github.com/nocobase/nocobase/pull/9463)) par @mytharcher
- **[Action : Importer des enregistrements Pro]** Correction de la gestion du fuseau horaire pour les importations xlsx Pro par @mytharcher
- **[Auth : SAML 2.0]** Correction de l'intercepteur de redirection automatique SAML qui faisait scintiller le shell de l'application et ouvrait deux fois les tiroirs à chaque navigation. par @Molunerfinn
- **[Action : Exporter des enregistrements Pro]** Correction du problème où une erreur était levée lors de l'exportation d'une pièce jointe à partir d'un champ d'URL de pièce jointe par @mytharcher

### [v2.1.0-beta.33](https://www.nocobase.com/en/blog/v2.1.0-beta.33)

*Date de sortie : 2026-05-15*

### 🎉 Nouvelles fonctionnalités

- **[Bloc : Markdown]** Ajout du support client v2 pour les blocs Markdown ([#9487](https://github.com/nocobase/nocobase/pull/9487)) par @jiannx
- **[Bloc : Liste]** Les blocs de liste prennent en charge client-v2 ([#9486](https://github.com/nocobase/nocobase/pull/9486)) par @jiannx
- **[Calendrier]** Ajout du support client v2 pour le plugin Calendrier. ([#9464](https://github.com/nocobase/nocobase/pull/9464)) par @jiannx
- **[Bloc : Arborescence]** Ajout du support client-v2 pour le bloc de filtre arborescent. ([#9466](https://github.com/nocobase/nocobase/pull/9466)) par @jiannx

### 🚀 Améliorations

- **[moteur-de-flux]** Ajout d'un message de confirmation de modifications non enregistrées lors de la fermeture de la page de configuration du flux d'événements avec des données non enregistrées présentes. ([#9449](https://github.com/nocobase/nocobase/pull/9449)) par @gchust
- **[Gestionnaire de sources de données]** Optimisation de l'API de modélisation des données pour prendre en charge la création de collections de commentaires avec l'IA, la configuration de champs de relation pour les sources de données externes et la définition de règles de validation de champ ([#9480](https://github.com/nocobase/nocobase/pull/9480)) par @2013xile
- **[Bloc : GridCard]** Mise à jour du plugin de carte en grille pour prendre en charge client v2 ([#9484](https://github.com/nocobase/nocobase/pull/9484)) par @jiannx
- **[Bloc : iframe]** Ajout du support v2 pour le bloc iframe. ([#9485](https://github.com/nocobase/nocobase/pull/9485)) par @jiannx
- **[Employés IA]** Optimisation de l'interaction et des performances des conversations parallèles des employés IA ([#9462](https://github.com/nocobase/nocobase/pull/9462)) par @cgyrock

### 🐛 Corrections de bugs

- **[client]**

  - Ajout du paramètre "Après une soumission réussie" pour les actions de soumission de formulaire. ([#9414](https://github.com/nocobase/nocobase/pull/9414)) par @jiannx
  - Correction empêchant l'ouverture de l'édition rapide pour les champs de relation dans les tableaux ([#9469](https://github.com/nocobase/nocobase/pull/9469)) par @katherinehhh
  - Correction des champs de relation en lecture seule dans les sous-tableaux qui ne s'affichaient pas ou n'étaient pas cliquables après un rafraîchissement. ([#9453](https://github.com/nocobase/nocobase/pull/9453)) par @jiannx
  - Correction du problème où les paramètres de valeur par défaut hérités ne pouvaient pas être supprimés. ([#9470](https://github.com/nocobase/nocobase/pull/9470)) par @gchust
  - Correction des champs de sélection multiple dans les blocs de données v2 qui doivent afficher les étiquettes des options au lieu des valeurs ([#9472](https://github.com/nocobase/nocobase/pull/9472)) par @katherinehhh
- **[client-v2]**

  - Correction du problème où la liste des options du champ de titre est vide pour les champs de relation dans les blocs de tableau ([#9490](https://github.com/nocobase/nocobase/pull/9490)) par @katherinehhh
  - Conservation des groupes vides après le filtrage des menus v1 dans la mise en page v2 ([#9478](https://github.com/nocobase/nocobase/pull/9478)) par @zhangzhonghe
- **[moteur-de-flux]** Correction des sous-menus de champs de relation instables dans les menus de sous-modèle ([#9417](https://github.com/nocobase/nocobase/pull/9417)) par @jiannx
- **[Gestionnaire de fichiers]** Correction des téléchargements `tx-cos` du gestionnaire de fichiers manquant les métadonnées de taille de fichier. ([#9499](https://github.com/nocobase/nocobase/pull/9499)) par @mytharcher
- **[Employés IA]** Correction de l'erreur de chargement du plugin-ai ([#9483](https://github.com/nocobase/nocobase/pull/9483)) par @cgyrock
- **[Bloc : Formulaire en plusieurs étapes]** Correction du problème de barre de défilement lors de l'activation de la hauteur totale dans le bloc de formulaire en plusieurs étapes v1 ([#9468](https://github.com/nocobase/nocobase/pull/9468)) par @katherinehhh
- **[Workflow : Webhook]** Correction du problème où la création d'un nœud de réponse était interceptée par la validation de la configuration `statusCode` par @mytharcher
- **[Champ de collection : Signature]** Résolution du problème d'affichage de la zone de signature sur mobile par @chenzhizdt

## develop

![develop.png](https://static-docs.nocobase.com/7fcdd9456a17286d8a439eee52bcb8d2.png)

### [v2.1.0-alpha.39](https://www.nocobase.com/en/blog/v2.1.0-alpha.39)

*Date de sortie : 2026-05-20*

### 🎉 Nouvelles fonctionnalités

- **[Bloc : Kanban]** Ajout du support client-v2 pour le plugin Kanban ([#9475](https://github.com/nocobase/nocobase/pull/9475)) par @jiannx

### 🚀 Améliorations

- **[client]** Partage de l'évaluation des conditions entre les applications v1 et v2 ([#9522](https://github.com/nocobase/nocobase/pull/9522)) par @zhangzhonghe
- **[Localisation]** Amélioration des tâches de traduction de localisation Lina avec la portée de traduction, les paramètres de langue de référence et l'édition rapide ([#9521](https://github.com/nocobase/nocobase/pull/9521)) par @2013xile
- **[Employés IA]** Invite sur le nom de table en double lors de l'enregistrement dans la base vectorielle ([#9497](https://github.com/nocobase/nocobase/pull/9497)) par @cgyrock
- **[Gestionnaire de notifications]** Changement de la stratégie de file d'attente pour optimiser les performances d'envoi ([#9407](https://github.com/nocobase/nocobase/pull/9407)) par @mytharcher
- **[Workflow : Événement d'action personnalisée]** Migration des plugins block-workbench et workflow-custom-action-trigger vers le client v2, y compris leurs modèles d'action et le flux du scanner QR. ([#9494](https://github.com/nocobase/nocobase/pull/9494)) par @jiannx
- **[Authentification]** Implémentation de la page des paramètres des authentificateurs dans client-v2 et livraison de tableaux client-v2 réutilisables, d'entrées variables et de primitives de formulaire. ([#9457](https://github.com/nocobase/nocobase/pull/9457)) par @Molunerfinn
- **[IA : Base de connaissances]** Invite sur le nom de table en double lors de l'enregistrement dans la base vectorielle par @cgyrock
- **[Auth : SAML 2.0]** Ajout d'entrées client-v2 pour les plugins d'authentification CAS et SAML afin qu'ils fonctionnent avec la page de connexion v2 et les paramètres des authentificateurs. par @Molunerfinn
- **[Workflow : Approbation]** Amélioration des approbations associées avec des cartes chronologiques par @zhangzhonghe

### 🐛 Corrections de bugs

- **[non défini]** Alignement des chemins de configuration nginx ([#9528](https://github.com/nocobase/nocobase/pull/9528)) par @chenos
- **[cli-v1]** Correction du démarrage du développement create-nocobase-app en réutilisant les shells d'application packagés tout en permettant le développement de plugins locaux. ([#9471](https://github.com/nocobase/nocobase/pull/9471)) par @Molunerfinn
- **[client]**

  - Correction du problème où les formulaires de filtre ne pouvaient pas utiliser les variables de formulaire actuelles ([#9474](https://github.com/nocobase/nocobase/pull/9474)) par @zhangzhonghe
  - Correction du problème où un badge de menu affichait encore un point lorsque sa valeur était 0 ([#9491](https://github.com/nocobase/nocobase/pull/9491)) par @zhangzhonghe
- **[client-v2]**

  - Le composant Tableau v2 partagé affiche désormais le sélecteur de taille de page par défaut, correspondant au comportement v1. ([#9512](https://github.com/nocobase/nocobase/pull/9512)) par @Molunerfinn
  - Correction de l'échec du chargement de la route v2 du plugin Kanban car les dépendances dnd-kit n'étaient pas fournies par le client. ([#9516](https://github.com/nocobase/nocobase/pull/9516)) par @jiannx
- **[Calendrier]**

  - Correction du style du curseur pour les éléments d'événement dans la superposition des événements supplémentaires du calendrier ([#9519](https://github.com/nocobase/nocobase/pull/9519)) par @jiannx
  - Correction du problème où les éléments supplémentaires du calendrier ne pouvaient pas être entièrement affichés ([#9492](https://github.com/nocobase/nocobase/pull/9492)) par @zhangzhonghe
- **[Paramètres de licence]** Résolution des dépendances groupées liées symboliquement ([#9518](https://github.com/nocobase/nocobase/pull/9518)) par @chenos
- **[Employés IA]**

  - Correction du problème où les autorisations de rôle d'opérateur ne prenaient pas effet dans les nœuds d'employés IA ([#9513](https://github.com/nocobase/nocobase/pull/9513)) par @cgyrock
  - Correction des erreurs de lecture des fichiers OSS des employés IA ([#9493](https://github.com/nocobase/nocobase/pull/9493)) par @cgyrock
- **[Authentification]** Empêche le plantage du serveur lorsqu'un jeton d'authentification WebSocket fait référence à un authentificateur dont le plugin de type d'authentification est déchargé ou manquant. ([#9514](https://github.com/nocobase/nocobase/pull/9514)) par @Molunerfinn
- **[Documentation API]** Correction de la documentation API des collections afin que les paramètres de requête n'interfèrent plus les uns avec les autres ([#9442](https://github.com/nocobase/nocobase/pull/9442)) par @jiannx
- **[Source de données : Principale]** Correction du problème où les options de champ sont écrites dans le schéma après la synchronisation des champs ([#9505](https://github.com/nocobase/nocobase/pull/9505)) par @2013xile
- **[Auth : SAML 2.0]** Correction de l'intercepteur de redirection automatique SAML qui faisait scintiller le shell de l'application et ouvrait deux fois les tiroirs à chaque navigation. par @Molunerfinn

### [v2.1.0-alpha.38](https://www.nocobase.com/en/blog/v2.1.0-alpha.38)

*Date de sortie : 2026-05-18*

### 🐛 Corrections de bugs

- **[client]**

  - Correction d'un problème où les variables d'enregistrement contextuelles de la fenêtre contextuelle ne pouvaient pas être résolues dans les flux d'événements des boutons d'action. ([#9495](https://github.com/nocobase/nocobase/pull/9495)) par @gchust
  - Correction d'un problème où les valeurs des champs JS dans les sous-formulaires n'étaient pas correctement définies lors de la soumission du formulaire. ([#9496](https://github.com/nocobase/nocobase/pull/9496)) par @gchust
- **[moteur-de-flux]** Correction d'un message d'erreur incorrect dans la console du navigateur. ([#9502](https://github.com/nocobase/nocobase/pull/9502)) par @gchust
- **[Workflow : JavaScript]** Correction du chargement du package d'exécution QuickJS du workflow JavaScript dans les builds de production. ([#9503](https://github.com/nocobase/nocobase/pull/9503)) par @mytharcher
- **[Action : Importer des enregistrements]** Correction du problème où l'enregistrement importé sur les champs de type date affichait une date erronée ([#9463](https://github.com/nocobase/nocobase/pull/9463)) par @mytharcher
- **[Action : Importer des enregistrements Pro]** Correction de la gestion du fuseau horaire pour les importations xlsx Pro par @mytharcher
- **[Action : Exporter des enregistrements Pro]** Correction du problème où une erreur était levée lors de l'exportation d'une pièce jointe à partir d'un champ d'URL de pièce jointe par @mytharcher

### [v2.1.0-alpha.37](https://www.nocobase.com/en/blog/v2.1.0-alpha.37)

*Date de sortie : 2026-05-17*

### 🐛 Corrections de bugs

- **[Client WEB]** Nettoyage des données des blocs après la suppression des menus. ([#9459](https://github.com/nocobase/nocobase/pull/9459)) par @gchust

### [v2.1.0-alpha.36](https://www.nocobase.com/en/blog/v2.1.0-alpha.36)

*Date de sortie : 2026-05-16*

### 🎉 Nouvelles fonctionnalités

- **[Bloc : Markdown]** Ajout du support client v2 pour les blocs Markdown ([#9487](https://github.com/nocobase/nocobase/pull/9487)) par @jiannx
- **[Bloc : Liste]** Les blocs de liste prennent en charge client-v2 ([#9486](https://github.com/nocobase/nocobase/pull/9486)) par @jiannx

### 🚀 Améliorations

- **[moteur-de-flux]** Ajout d'un message de confirmation de modifications non enregistrées lors de la fermeture de la page de configuration du flux d'événements avec des données non enregistrées présentes. ([#9449](https://github.com/nocobase/nocobase/pull/9449)) par @gchust
- **[cli]** Amélioration de l'expérience d'invite de commande NocoBase CLI en migrant les workflows de configuration et de gestion vers Inquirer, et correction des problèmes d'installation, de compétences et d'exécution Docker associés. ([#9452](https://github.com/nocobase/nocobase/pull/9452)) par @chenos
- **[Gestionnaire de sources de données]** Optimisation de l'API de modélisation des données pour prendre en charge la création de collections de commentaires avec l'IA, la configuration de champs de relation pour les sources de données externes et la définition de règles de validation de champ ([#9480](https://github.com/nocobase/nocobase/pull/9480)) par @2013xile
- **[Bloc : GridCard]** Mise à jour du plugin de carte en grille pour prendre en charge client v2 ([#9484](https://github.com/nocobase/nocobase/pull/9484)) par @jiannx
- **[Bloc : iframe]** Ajout du support v2 pour le bloc iframe. ([#9485](https://github.com/nocobase/nocobase/pull/9485)) par @jiannx

### 🐛 Corrections de bugs

- **[client]**

  - Correction des champs de relation en lecture seule dans les sous-tableaux qui ne s'affichaient pas ou n'étaient pas cliquables après un rafraîchissement. ([#9453](https://github.com/nocobase/nocobase/pull/9453)) par @jiannx
  - Ajout du paramètre "Après une soumission réussie" pour les actions de soumission de formulaire. ([#9414](https://github.com/nocobase/nocobase/pull/9414)) par @jiannx
- **[client-v2]** Correction du problème où la liste des options du champ de titre est vide pour les champs de relation dans les blocs de tableau ([#9490](https://github.com/nocobase/nocobase/pull/9490)) par @katherinehhh
- **[moteur-de-flux]** Correction des sous-menus de champs de relation instables dans les menus de sous-modèle ([#9417](https://github.com/nocobase/nocobase/pull/9417)) par @jiannx
- **[Gestionnaire de fichiers]** Correction des téléchargements `tx-cos` du gestionnaire de fichiers manquant les métadonnées de taille de fichier. ([#9499](https://github.com/nocobase/nocobase/pull/9499)) par @mytharcher
- **[Champ de collection : Signature]** Résolution du problème d'affichage de la zone de signature sur mobile par @chenzhizdt

### [v2.1.0-alpha.35](https://www.nocobase.com/en/blog/v2.1.0-alpha.35)

*Date de sortie : 2026-05-14*

### 🎉 Nouvelles fonctionnalités

- **[non défini]** Ajout d'un nouvel employé IA, l'ingénieur de localisation Lina, pour aider aux tâches de traduction de localisation ([#9434](https://github.com/nocobase/nocobase/pull/9434)) par @2013xile
  Référence : [Gestion de la localisation](https://docs.nocobase.com/system-management/localization)<br>[Lina : Ingénieur de localisation](https://docs.nocobase.com/ai-employees/built-in/lina)<br>[Utiliser Lina et le HY-MT1.5-1.8B local pour traduire les entrées de localisation](https://docs.nocobase.com/ai-employees/scenarios/localization-hy-mt)
- **[Calendrier]** Ajout du support client v2 pour le plugin Calendrier. ([#9464](https://github.com/nocobase/nocobase/pull/9464)) par @jiannx
- **[Bloc : Arborescence]** Ajout du support client-v2 pour le bloc de filtre arborescent. ([#9466](https://github.com/nocobase/nocobase/pull/9466)) par @jiannx
- **[Stockage de fichiers : S3(Pro)]** Prise en charge du téléchargement de fichiers via le stockage S3 Pro dans le gestionnaire de fichiers v2. par @Molunerfinn

### 🚀 Améliorations

- **[build]** Ajout d'une couverture de régression pour empêcher `deleteServerFiles` de supprimer les artefacts de build `client` et `client-v2` sur les chemins Windows et POSIX. ([#9318](https://github.com/nocobase/nocobase/pull/9318)) par @Molunerfinn
- **[client]** Exclusion des enregistrements déjà associés dans la boîte de dialogue de sélection d'association du bloc de tableau un-à-plusieurs ([#9448](https://github.com/nocobase/nocobase/pull/9448)) par @katherinehhh
- **[Employés IA]** Optimisation de l'interaction et des performances des conversations parallèles des employés IA ([#9462](https://github.com/nocobase/nocobase/pull/9462)) par @cgyrock
- **[Gestionnaire de fichiers]** Les plugins de stockage tiers peuvent désormais enregistrer leur propre formulaire de type de stockage sur la page des paramètres du gestionnaire de fichiers v2. ([#9439](https://github.com/nocobase/nocobase/pull/9439)) par @Molunerfinn
- **[IA : Base de connaissances]** L'identifiant unique d'une base de connaissances est configurable au moment de la création par @cgyrock

### 🐛 Corrections de bugs

- **[client]**

  - Correction empêchant l'ouverture de l'édition rapide pour les champs de relation dans les tableaux ([#9469](https://github.com/nocobase/nocobase/pull/9469)) par @katherinehhh
  - Correction des champs de sélection multiple dans les blocs de données v2 qui doivent afficher les étiquettes des options au lieu des valeurs ([#9472](https://github.com/nocobase/nocobase/pull/9472)) par @katherinehhh
  - Correction des requêtes de tableau en double lorsque les formulaires de filtre ont des valeurs par défaut ([#9423](https://github.com/nocobase/nocobase/pull/9423)) par @zhangzhonghe
  - Correction du problème où les paramètres de valeur par défaut hérités ne pouvaient pas être supprimés. ([#9470](https://github.com/nocobase/nocobase/pull/9470)) par @gchust
  - Correction du problème où il était impossible de sélectionner des options pour le champ de sélection d'une association. ([#9088](https://github.com/nocobase/nocobase/pull/9088)) par @gchust
  - Correction du problème où les paramètres système apparaissaient vides après la soumission ([#9458](https://github.com/nocobase/nocobase/pull/9458)) par @zhangzhonghe
  - Correction d'un problème où la portée des données du bloc cible était mal définie lors de la désélection des données de ligne dans un flux d'événements de bloc de tableau. ([#9443](https://github.com/nocobase/nocobase/pull/9443)) par @gchust
  - Correction d'une erreur lors du changement du champ de titre d'un champ de relation dans un bloc de tableau v2 ([#9451](https://github.com/nocobase/nocobase/pull/9451)) par @katherinehhh
  - Correction des règles de liaison V2 pour prendre en charge la définition d'options sélectionnables pour les champs ([#9399](https://github.com/nocobase/nocobase/pull/9399)) par @jiannx
- **[client-v2]**

  - Conservation des groupes vides après le filtrage des menus v1 dans la mise en page v2 ([#9478](https://github.com/nocobase/nocobase/pull/9478)) par @zhangzhonghe
  - Correction du problème où la page devenait blanche derrière la boîte de dialogue d'activation du plugin ([#9455](https://github.com/nocobase/nocobase/pull/9455)) par @zhangzhonghe
  - Correction du plantage des pages d'administration v1 lorsqu'elles référencent des modules de plugin v2 dans les builds de production. ([#9460](https://github.com/nocobase/nocobase/pull/9460)) par @Molunerfinn
- **[cli-v1]** Correction des échecs de démarrage du développement dans les applications créées avec create-nocobase-app causés par la résolution du chemin client app-dev. ([#9465](https://github.com/nocobase/nocobase/pull/9465)) par @Molunerfinn
- **[serveur]** correction(gestionnaire-de-fichiers) : forcer le téléchargement des fichiers de contenu actif dans le stockage local/public ([#9437](https://github.com/nocobase/nocobase/pull/9437)) par @mytharcher
- **[Employés IA]**

  - Correction de l'erreur de chargement du plugin-ai ([#9483](https://github.com/nocobase/nocobase/pull/9483)) par @cgyrock
  - Correction du test Ollama nécessitant une saisie de clé ([#9450](https://github.com/nocobase/nocobase/pull/9450)) par @cgyrock
- **[Bloc : Formulaire en plusieurs étapes]** Correction du problème de barre de défilement lors de l'activation de la hauteur totale dans le bloc de formulaire en plusieurs étapes v1 ([#9468](https://github.com/nocobase/nocobase/pull/9468)) par @katherinehhh
- **[Départements]** Correction du conflit de traduction entre les boutons d'ajout d'utilisateur et d'ajout de département dans les paramètres Utilisateurs et autorisations ([#9456](https://github.com/nocobase/nocobase/pull/9456)) par @katherinehhh
- **[Workflow]** correction : restauration du texte d'aide dans les boîtes de dialogue de liaison de workflow FlowModel pour les événements d'action d'opération et d'action personnalisée ([#9447](https://github.com/nocobase/nocobase/pull/9447)) par @mytharcher
- **[Bloc : Markdown]** Correction du problème de signalement d'erreur du bloc Markdown v2 ([#9440](https://github.com/nocobase/nocobase/pull/9440)) par @zhangzhonghe
- **[Workflow : Webhook]** Correction du problème où la création d'un nœud de réponse était interceptée par la validation de la configuration `statusCode` par @mytharcher
- **[Workflow : Approbation]**

  - Correction de la mise en page du formulaire d'approbation sur les appareils mobiles par @zhangzhonghe
  - Correction de l'index en double des enregistrements d'approbation lors de la délégation de tâches d'approbation. par @mytharcher
- **[Gestionnaire de sauvegarde]** Correction d'un problème où les sauvegardes échouaient avec une erreur lorsque les fichiers ne pouvaient pas être trouvés. par @gchust
