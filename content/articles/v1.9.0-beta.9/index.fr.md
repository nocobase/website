---
title: "NocoBase v1.9.0-beta.9 : Les blocs de tableau prennent en charge l'ajout d'un bouton 'Paramètres de colonne'"
description: "Notes de version de v1.9.0-beta.9"
---

### 🎉 Nouvelles fonctionnalités

- **[client]**

  - Les blocs de tableau prennent en charge l'ajout d'un bouton « Paramètres des colonnes » pour configurer l'ordre et la visibilité des colonnes ([#7204](https://github.com/nocobase/nocobase/pull/7204)) par @kerwin612
  - Prise en charge des règles de validation de champ ([#7297](https://github.com/nocobase/nocobase/pull/7297)) par @aaaaaajie
- **[Source de données : Principale]**

  - Prise en charge de la lecture des tables depuis la source de données principale ([#7238](https://github.com/nocobase/nocobase/pull/7238)) par @aaaaaajie
  - Prise en charge de l'affichage des tables définies par les plugins dans la source de données principale. ([#7187](https://github.com/nocobase/nocobase/pull/7187)) par @aaaaaajie

### 🚀 Améliorations

- **[client]** Prise en charge de la rotation des images lors de l'aperçu ([#7523](https://github.com/nocobase/nocobase/pull/7523)) par @mytharcher
- **[snowflake-id]** Modification des identifiants des tables système avec clés primaires auto-incrémentées mais sans identifiants uniques en identifiants de type Snowflake 53 bits ([#7465](https://github.com/nocobase/nocobase/pull/7465)) par @2013xile
- **[Workflow]** Séparation de la logique liée à l'ordonnancement dans un répartiteur autonome ([#7535](https://github.com/nocobase/nocobase/pull/7535)) par @mytharcher
- **[Adaptateur de file d'attente RabbitMQ]** Amélioration de la gestion des connexions RabbitMQ et de la logique de traitement des messages par @sdp-ncd
- **[Gestionnaire d'emails]**

  - prend en charge la synchronisation par lots par @jiannx
  - l'éditeur riche prend en charge le redimensionnement des images par @jiannx

### 🐛 Corrections de bugs

- **[client]**

  - Correction d'un problème où le bouton « Paramètres des colonnes » chargeait les colonnes depuis le tableau à l'intérieur de la boîte de dialogue modale ([#7385](https://github.com/nocobase/nocobase/pull/7385)) par @kerwin612
  - Correction du problème où les sous-menus de la barre latérale ne pouvaient pas être mis en surbrillance correctement ([#7520](https://github.com/nocobase/nocobase/pull/7520)) par @duannyuuu
- **[Workflow]**

  - Correction du problème d'exécution en double dû à une gestion inappropriée de la file d'attente ([#7533](https://github.com/nocobase/nocobase/pull/7533)) par @mytharcher
  - Correction du problème où la condition de la liste des workflows était incorrecte lors du chargement du contexte de champ associé dans la configuration du workflow lié ([#7516](https://github.com/nocobase/nocobase/pull/7516)) par @mytharcher
  - Correction du problème où les tâches planifiées basées sur des champs de date ne se déclenchaient pas après le démarrage ([#7524](https://github.com/nocobase/nocobase/pull/7524)) par @mytharcher
- **[Workflow : Nœud de boucle]** Correction du problème où le processus avançait incorrectement à l'élément suivant même lorsque les conditions du nœud de boucle n'étaient pas satisfaites ([#7521](https://github.com/nocobase/nocobase/pull/7521)) par @mytharcher
- **[Gestionnaire d'emails]**

  - Objet de courriel indésirable par @jiannx
  - objet indésirable par @jiannx
  - l'éditeur riche prend en charge les sauts de ligne souples par @jiannx
  - Prise en charge du même email pour plusieurs personnes par @jiannx
  - performances optimales de la liste des messages électroniques par @jiannx
  - après la sélection des lignes, définir « Lu » et « Non lu » par @jiannx
  - ajout du champ rawId pour l'optimisation des performances par @jiannx
  - l'attribut ref dans le html provoque une exception de rendu par @jiannx
  - le contenu du sous-mail ne peut pas être filtré par @jiannx
  - prise en charge de la resynchronisation par @jiannx
  - Distinguer manuellement entre le transfert et la réponse par @jiannx
