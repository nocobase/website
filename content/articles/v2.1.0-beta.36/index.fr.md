---
title: "NocoBase v2.1.0-beta.36 : L'éditeur de thème est désormais disponible dans l'interface v2"
description: "Notes de version de v2.1.0-beta.36"
---

### 🎉 Nouvelles fonctionnalités

- **[cli]** ajout des commandes de création et de restauration de sauvegarde ([#9541](https://github.com/nocobase/nocobase/pull/9541)) par @chenos
- **[Gestionnaire de sauvegarde]** plugin de gestionnaire de sauvegarde open source ([#9550](https://github.com/nocobase/nocobase/pull/9550)) par @chenos
- **[Éditeur de thème]** L'éditeur de thème est désormais disponible dans l'interface v2 ([#9530](https://github.com/nocobase/nocobase/pull/9530)) par @zhangzhonghe
- **[Authentification à deux facteurs (2FA)]** TOTP et l'authentification à deux facteurs peuvent désormais être liés, vérifiés et configurés depuis le client v2. par @Molunerfinn

### 🚀 Améliorations

- **[client]** optimisation des paramètres d'affichage des boutons d'action ([#9510](https://github.com/nocobase/nocobase/pull/9510)) par @katherinehhh
- **[moteur de workflow]** Les menus de configuration des champs V2 prennent désormais en charge la recherche de champs ([#9489](https://github.com/nocobase/nocobase/pull/9489)) par @zhangzhonghe
- **[cli]** amélioration du flux d'authentification env ([#9546](https://github.com/nocobase/nocobase/pull/9546)) par @chenos
- **[non défini]**

  - Ajout d'une revue de sécurité des dépendances pour les pull requests ([#9523](https://github.com/nocobase/nocobase/pull/9523)) par @zhangzhonghe
- **[Vérification]** Ajout du client v2 au plugin Vérification (page des paramètres d'administration, entrée du centre utilisateur, formulaires OTP SMS). ([#9515](https://github.com/nocobase/nocobase/pull/9515)) par @Molunerfinn
- **[Authentification]** Les paramètres de marque personnalisée fonctionnent désormais correctement dans le client v2 ([#9543](https://github.com/nocobase/nocobase/pull/9543)) par @zhangzhonghe
- **[Bloc : Carte]** Ajout du support client v2 pour le plugin carte. ([#9511](https://github.com/nocobase/nocobase/pull/9511)) par @jiannx
- **[Marque personnalisée]** Les paramètres de marque personnalisée sont désormais disponibles dans le client v2 par @zhangzhonghe
- **[IA : Base de connaissances]** Activation de la modification du stockage vectoriel pour les bases de connaissances IA par @cgyrock
- **[Workflow : Approbation]** Ajout du drapeau `async` pour l'instruction d'approbation, afin d'adapter la nouvelle API de création de nœud dans le canevas du workflow par @mytharcher

### 🐛 Corrections de bugs

- **[client]**

  - correction de l'effacement des valeurs sélectionnées lorsque les champs d'association dépendants changent dans la liaison de portée de données ([#9551](https://github.com/nocobase/nocobase/pull/9551)) par @katherinehhh
  - Correction du chargement en mode dev pour les plugins de stockage intégrés qui dépendent d'exportations nommées depuis des plugins source locaux. ([#9548](https://github.com/nocobase/nocobase/pull/9548)) par @Molunerfinn
  - Correction de l'état incorrect du menu de champ JS dans les sous-formulaires. ([#9507](https://github.com/nocobase/nocobase/pull/9507)) par @gchust
  - Correction du problème où les blocs v2 réduits devenaient pleine largeur après avoir quitté le mode édition ([#9529](https://github.com/nocobase/nocobase/pull/9529)) par @zhangzhonghe
- **[client-v2]** Correction de l'enregistrement incohérent des dépendances dnd-kit. ([#9544](https://github.com/nocobase/nocobase/pull/9544)) par @jiannx
- **[moteur de workflow]** correction du problème de sélection multiple pour les champs de source de données externe dans le formulaire v2 ([#9542](https://github.com/nocobase/nocobase/pull/9542)) par @katherinehhh
- **[Bloc : iframe]** correction du contenu iframe ne remplissant pas la hauteur de bloc configurée ([#9540](https://github.com/nocobase/nocobase/pull/9540)) par @katherinehhh
- **[Employés IA]**

  - Correction d'une erreur lorsque l'employé IA accède à une base de connaissances en lecture seule ([#9539](https://github.com/nocobase/nocobase/pull/9539)) par @cgyrock
  - Correction des cartes d'appel d'outil IA n'apparaissant pas immédiatement lorsque les événements d'outil en streaming sont divisés ([#9534](https://github.com/nocobase/nocobase/pull/9534)) par @2013xile
  - Correction d'une erreur lorsque l'employé IA accède à une base de connaissances en lecture seule ([#9538](https://github.com/nocobase/nocobase/pull/9538)) par @cgyrock
- **[Action : Exporter les enregistrements]** amélioration des performances de configuration de champ avec de nombreux champs d'association ([#9524](https://github.com/nocobase/nocobase/pull/9524)) par @katherinehhh
- **[Action : Mise à jour par lot]** correction de l'état de chargement de l'action de mise à jour par lot après un échec de mise à jour ([#9509](https://github.com/nocobase/nocobase/pull/9509)) par @katherinehhh
- **[Workflow]** Ajout d'un état de chargement pour l'exécution manuelle du workflow. ([#9533](https://github.com/nocobase/nocobase/pull/9533)) par @mytharcher
- **[Localisation]** Correction des traductions de référence intégrées pour les tâches de traduction IA ([#9531](https://github.com/nocobase/nocobase/pull/9531)) par @2013xile
- **[Gestionnaire de migration]** Correction des échecs de création de fichier de migration lors de l'utilisation d'OceanBase par @2013xile
- **[Stockage de fichiers : S3(Pro)]** Correction de la gestion du point de terminaison S3 Pro afin que les téléchargements serveur et les aperçus URL ne dupliquent pas l'hôte du bucket. par @mytharcher
