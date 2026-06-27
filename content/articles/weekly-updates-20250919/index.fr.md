---
title: "Mises à jour hebdomadaires de NocoBase : Optimisation et corrections de bugs"
description: "Les mises à jour de cette semaine incluent : prise en charge de l'affichage de la cartographie des locales pour les en-têtes de calendrier, corrections de bugs, et plus encore."
---

Résumez les journaux de mise à jour hebdomadaires du produit. Les dernières versions sont consultables sur [notre blog](https://www.nocobase.com/en/blog/timeline).

**NocoBase est actuellement mis à jour avec trois branches : `main`, `next` et `develop`.**

![version.png](https://static-docs.nocobase.com/ba5f04e27e99c625cb3822da5df07860.png)

* `main` : La version la plus stable à ce jour, recommandée pour l'installation ;
* `next` : Version bêta, contient les nouvelles fonctionnalités à venir et a été testée préliminairement. Il peut y avoir des problèmes connus ou inconnus. Elle est principalement destinée aux utilisateurs testeurs pour recueillir des retours et optimiser davantage les fonctionnalités. Idéale pour les utilisateurs testeurs qui souhaitent découvrir les nouvelles fonctionnalités en avant-première et donner leur avis ;
* `develop` : Version alpha, contient le code de fonctionnalité le plus récent, peut être incomplète ou instable, principalement destinée au développement interne et à l'itération rapide. Adaptée aux utilisateurs techniques intéressés par les fonctionnalités de pointe du produit, mais avec des problèmes potentiels et des fonctions incomplètes. Ne pas utiliser en production.

## main

![main.png](https://static-docs.nocobase.com/47a3c71734c1d0f908b51f9ebd53c0ac.png)

### [v1.8.25](https://www.nocobase.com/en/blog/v1.8.25)

*Date de sortie : 2025-09-17*

#### 🚀 Améliorations

- **[auth]** Prise en charge de l'utilisation de `.` dans les noms d'utilisateur ([#7504](https://github.com/nocobase/nocobase/pull/7504)) par @2013xile

#### 🐛 Corrections de bugs

- **[client]** Correction du problème où la fenêtre contextuelle de configuration de l'icône du bouton était couverte/chevauchée ([#7506](https://github.com/nocobase/nocobase/pull/7506)) par @zhangzhonghe
- **[Impression de modèle]** prise en charge du champ chinaRegions par @jiannx

### [v1.8.24](https://www.nocobase.com/en/blog/v1.8.24)

*Date de sortie : 2025-09-13*

#### 🎉 Nouvelles fonctionnalités

- **[Workflow : Approbation]** Prise en charge du retour à n'importe quel nœud dans le processus d'approbation par @mytharcher

#### 🚀 Améliorations

- **[serveur]** Utilisation du journal système standard pour la file d'attente de messages ([#7480](https://github.com/nocobase/nocobase/pull/7480)) par @mytharcher
- **[client]** Suppression de la popover avec points de suspension de la liste de fichiers ([#7479](https://github.com/nocobase/nocobase/pull/7479)) par @mytharcher
- **[Workflow]** Optimisation du processus de préparation du workflow pour prendre en charge l'utilisation de données de nœud préchargées ([#7476](https://github.com/nocobase/nocobase/pull/7476)) par @mytharcher
- **[Éditeur de thème]** Ajout de la prise en charge de la personnalisation de la couleur du menu latéral ([#7483](https://github.com/nocobase/nocobase/pull/7483)) par @duannyuuu
- **[Adaptateur de file d'attente Redis]** Utilisation du journal système standard pour l'adaptateur de file d'attente de messages Redis par @mytharcher

#### 🐛 Corrections de bugs

- **[client]**

  - Correction du problème où le composant Popover était chevauché/couvert ([#7491](https://github.com/nocobase/nocobase/pull/7491)) par @zhangzhonghe
  - Vérification incorrecte 'non vide' pour les champs numériques dans la règle de liaison ([#7477](https://github.com/nocobase/nocobase/pull/7477)) par @katherinehhh
  - Les champs select/multiselect/date/richtext en lecture seule restaient modifiables sur le formulaire public ([#7484](https://github.com/nocobase/nocobase/pull/7484)) par @katherinehhh
- **[Workflow]** Correction d'une erreur potentielle liée à la mise en cache des journaux de workflow ([#7490](https://github.com/nocobase/nocobase/pull/7490)) par @mytharcher
- **[Chiffrement des requêtes HTTP]** Correction du problème où les paramètres de requête ne prenaient pas en charge le type natif URLSearchParams par @mytharcher
- **[Source de données : API REST]** correction des règles de validation d'URL de l'API REST par @katherinehhh
- **[Workflow : Approbation]** Correction du problème où le texte de statut dans la notification d'achèvement d'approbation n'était pas traduit par @mytharcher

## develop

![develop.png](https://static-docs.nocobase.com/7fcdd9456a17286d8a439eee52bcb8d2.png)

### [v1.9.0-alpha.15](https://www.nocobase.com/en/blog/v1.9.0-alpha.15)

*Date de sortie : 2025-09-17*

#### 🚀 Améliorations

- **[auth]** Prise en charge de l'utilisation de `.` dans les noms d'utilisateur ([#7504](https://github.com/nocobase/nocobase/pull/7504)) par @2013xile
- **[serveur]** Utilisation du journal système standard pour la file d'attente de messages ([#7480](https://github.com/nocobase/nocobase/pull/7480)) par @mytharcher
- **[snowflake-id]** Modification des ID des tables système avec clés primaires auto-incrémentées mais sans identifiants uniques en ID de type Snowflake 53 bits ([#7465](https://github.com/nocobase/nocobase/pull/7465)) par @2013xile
- **[Calendrier]** prise en charge de l'affichage du mappage de locale pour les en-têtes de calendrier ([#7508](https://github.com/nocobase/nocobase/pull/7508)) par @katherinehhh
- **[Workflow : Nœud manuel]** Prise en charge de l'affichage et de la reprise des tâches manuelles en attente dans les workflows désactivés ([#7493](https://github.com/nocobase/nocobase/pull/7493)) par @mytharcher
- **[Éditeur de thème]** Ajout de la prise en charge de la personnalisation de la couleur du menu latéral ([#7483](https://github.com/nocobase/nocobase/pull/7483)) par @duannyuuu
- **[Adaptateur de file d'attente Redis]** Utilisation du journal système standard pour l'adaptateur de file d'attente de messages Redis par @mytharcher

#### 🐛 Corrections de bugs

- **[client]**

  - Correction du problème où la fenêtre contextuelle de configuration de l'icône du bouton était couverte/chevauchée ([#7506](https://github.com/nocobase/nocobase/pull/7506)) par @zhangzhonghe
  - Correction du problème où le composant Popover était chevauché/couvert ([#7491](https://github.com/nocobase/nocobase/pull/7491)) par @zhangzhonghe
  - Les champs select/multiselect/date/richtext en lecture seule restaient modifiables sur le formulaire public ([#7484](https://github.com/nocobase/nocobase/pull/7484)) par @katherinehhh
- **[Workflow]**

  - Correction du problème où une logique d'abonnement incorrecte sur la file d'attente de tâches en arrière-plan dans le workflow entraînait un traitement incorrect du message d'exécution ([#7507](https://github.com/nocobase/nocobase/pull/7507)) par @mytharcher
  - Correction d'une erreur potentielle liée à la mise en cache des journaux de workflow ([#7490](https://github.com/nocobase/nocobase/pull/7490)) par @mytharcher
- **[Notification : Message dans l'application]** Correction du problème d'analyse incorrecte du lien de notification ([#7509](https://github.com/nocobase/nocobase/pull/7509)) par @mytharcher
- **[Source de données : API REST]** correction des règles de validation d'URL de l'API REST par @katherinehhh
- **[Chiffrement des requêtes HTTP]** Correction du problème où les paramètres de requête ne prenaient pas en charge le type natif URLSearchParams par @mytharcher
- **[Impression de modèle]** prise en charge du champ chinaRegions par @jiannx
- **[Gestionnaire d'e-mails]** Correction du problème d'objet indésirable par @jiannx
