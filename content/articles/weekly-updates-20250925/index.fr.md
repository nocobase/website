---
title: "Mises à jour hebdomadaires de NocoBase : Optimisations et corrections de bugs"
description: "La mise à jour de cette semaine inclut : la prise en charge de la rotation des images lors de l'aperçu, l'ajout du support de localisation pour les infobulles et les titres des éléments de groupe, et plus encore."
---

Résumez les journaux de mise à jour hebdomadaires du produit. Les dernières versions sont consultables sur [notre blog](https://www.nocobase.com/en/blog/timeline).

**NocoBase est actuellement mis à jour avec trois branches : `main`, `next` et `develop`.**

![version.png](https://static-docs.nocobase.com/ba5f04e27e99c625cb3822da5df07860.png)

* `main` : La version la plus stable à ce jour, recommandée pour l'installation ;
* `next` : Version bêta, contient les nouvelles fonctionnalités à venir et a été testée préliminairement. Il peut y avoir des problèmes connus ou inconnus. Elle est principalement destinée aux utilisateurs testeurs pour recueillir des retours et optimiser davantage les fonctionnalités. Idéale pour les utilisateurs testeurs qui souhaitent découvrir les nouvelles fonctionnalités en avant-première et donner leur avis ;
* `develop` : Version alpha, contient le code de fonctionnalité le plus récent, peut être incomplète ou instable, principalement destinée au développement interne et à l'itération rapide. Adaptée aux utilisateurs techniques intéressés par les fonctionnalités de pointe du produit, mais avec des problèmes potentiels et des fonctions incomplètes. Ne pas utiliser en production.

## main

![main.png](https://static-docs.nocobase.com/47a3c71734c1d0f908b51f9ebd53c0ac.png)

### [v1.8.26](https://www.nocobase.com/en/blog/v1.8.26)

*Date de sortie : 2025-09-20*

#### 🚀 Améliorations

- **[client]** ajout du support de localisation pour les infobulles et les titres d'éléments de groupe ([#7485](https://github.com/nocobase/nocobase/pull/7485)) par @katherinehhh
- **[Calendrier]** support de l'affichage du mappage des paramètres régionaux pour les en-têtes de calendrier ([#7508](https://github.com/nocobase/nocobase/pull/7508)) par @katherinehhh

#### 🐛 Corrections de bugs

- **[client]** Correction du problème où la popover de configuration de l'icône du menu était masquée ([#7515](https://github.com/nocobase/nocobase/pull/7515)) par @zhangzhonghe
- **[Notification : Message dans l'application]**

  - Correction du problème d'analyse incorrecte des liens de notification ([#7509](https://github.com/nocobase/nocobase/pull/7509)) par @mytharcher
  - Correction du problème où les messages récents ne s'affichaient pas lors de l'ouverture de la popup de notification ([#7514](https://github.com/nocobase/nocobase/pull/7514)) par @mytharcher
- **[Workflow]** Correction du problème où une logique d'abonnement incorrecte sur la file d'attente des tâches en arrière-plan dans le workflow entraînait un traitement incorrect du message d'exécution ([#7507](https://github.com/nocobase/nocobase/pull/7507)) par @mytharcher
- **[Workflow : Approbation]**

  - Correction du problème où une erreur se produisait lors de la suppression de données d'une source de données externe par @mytharcher
  - Correction du problème où les champs de formule dans le formulaire d'approbation ne se mettaient pas à jour automatiquement par @mytharcher

## next

![next.png](https://static-docs.nocobase.com/8ed17a0f08cc585018f6de6c8b13947d.png)

### [v1.9.0-beta.8](https://www.nocobase.com/en/blog/v1.9.0-beta.8)

*Date de sortie : 2025-09-20*

#### 🚀 Améliorations

- **[auth]** Prise en charge de l'utilisation de `.` dans les noms d'utilisateur ([#7504](https://github.com/nocobase/nocobase/pull/7504)) par @2013xile
- **[client]** ajout du support de localisation pour les infobulles et les titres d'éléments de groupe ([#7485](https://github.com/nocobase/nocobase/pull/7485)) par @katherinehhh
- **[Workflow : Nœud manuel]** Prise en charge de l'affichage et de la reprise des tâches manuelles en attente dans les workflows désactivés ([#7493](https://github.com/nocobase/nocobase/pull/7493)) par @mytharcher
- **[Calendrier]** support de l'affichage du mappage des paramètres régionaux pour les en-têtes de calendrier ([#7508](https://github.com/nocobase/nocobase/pull/7508)) par @katherinehhh
- **[Éditeur de thème]** Ajout de la prise en charge de la personnalisation de la couleur du menu latéral ([#7483](https://github.com/nocobase/nocobase/pull/7483)) par @duannyuuu
- **[Adaptateur de file d'attente Redis]** Utilisation du journaliseur système standard pour l'adaptateur de file d'attente de messages Redis par @mytharcher

#### 🐛 Corrections de bugs

- **[client]**

  - Correction du problème où la popup de configuration de l'icône du bouton était couverte/chevauchée ([#7506](https://github.com/nocobase/nocobase/pull/7506)) par @zhangzhonghe
  - Correction du problème où la popover de configuration de l'icône du menu était masquée ([#7515](https://github.com/nocobase/nocobase/pull/7515)) par @zhangzhonghe
  - Correction du problème où le composant Popover était chevauché/couvert ([#7491](https://github.com/nocobase/nocobase/pull/7491)) par @zhangzhonghe
- **[Notification : Message dans l'application]**

  - Correction du problème d'analyse incorrecte des liens de notification ([#7509](https://github.com/nocobase/nocobase/pull/7509)) par @mytharcher
  - Correction du problème où les messages récents ne s'affichaient pas lors de l'ouverture de la popup de notification ([#7514](https://github.com/nocobase/nocobase/pull/7514)) par @mytharcher
- **[Workflow]**

  - Correction d'une erreur potentielle liée à la mise en cache des journaux de workflow ([#7490](https://github.com/nocobase/nocobase/pull/7490)) par @mytharcher
  - Correction du problème où une logique d'abonnement incorrecte sur la file d'attente des tâches en arrière-plan dans le workflow entraînait un traitement incorrect du message d'exécution ([#7507](https://github.com/nocobase/nocobase/pull/7507)) par @mytharcher
- **[Source de données : API REST]** correction des règles de validation d'URL de l'API REST par @katherinehhh
- **[Chiffrement des requêtes HTTP]** Correction du problème où les paramètres de requête ne prenaient pas en charge le type natif URLSearchParams par @mytharcher
- **[Impression de modèle]** prise en charge du champ chinaRegions par @jiannx
- **[Workflow : Approbation]**

  - Correction du problème où les champs de formule dans le formulaire d'approbation ne se mettaient pas à jour automatiquement par @mytharcher
  - Correction du problème où une erreur se produisait lors de la suppression de données d'une source de données externe par @mytharcher

## develop

![develop.png](https://static-docs.nocobase.com/7fcdd9456a17286d8a439eee52bcb8d2.png)

### [v1.9.0-alpha.16](https://www.nocobase.com/en/blog/v1.9.0-alpha.16)

*Date de sortie : 2025-09-24*

#### 🚀 Améliorations

- **[client]**

  - Prise en charge de la rotation de l'image lors de l'aperçu ([#7523](https://github.com/nocobase/nocobase/pull/7523)) par @mytharcher
  - ajout du support de localisation pour les infobulles et les titres d'éléments de groupe ([#7485](https://github.com/nocobase/nocobase/pull/7485)) par @katherinehhh
- **[Adaptateur de file d'attente RabbitMQ]** amélioration de la gestion de la connexion RabbitMQ et de la logique de traitement des messages par @sdp-ncd

#### 🐛 Corrections de bugs

- **[client]**

  - Correction du problème où les sous-menus de la barre latérale ne pouvaient pas être mis en surbrillance correctement ([#7520](https://github.com/nocobase/nocobase/pull/7520)) par @duannyuuu
  - Correction du problème où la popover de configuration de l'icône du menu était masquée ([#7515](https://github.com/nocobase/nocobase/pull/7515)) par @zhangzhonghe
- **[Notification : Message dans l'application]** Correction du problème où les messages récents ne s'affichaient pas lors de l'ouverture de la popup de notification ([#7514](https://github.com/nocobase/nocobase/pull/7514)) par @mytharcher
- **[Workflow]** Correction du problème où la condition de la liste de workflows était incorrecte lors du chargement du contexte de champ associé dans la configuration du workflow lié ([#7516](https://github.com/nocobase/nocobase/pull/7516)) par @mytharcher
- **[Workflow : Nœud de boucle]** Correction du problème où le processus avançait incorrectement vers l'élément suivant même lorsque les conditions du nœud de boucle n'étaient pas satisfaites ([#7521](https://github.com/nocobase/nocobase/pull/7521)) par @mytharcher
- **[Workflow : Approbation]**

  - Correction du problème où une erreur se produisait lors de la suppression de données d'une source de données externe par @mytharcher
  - Correction du problème où les champs de formule dans le formulaire d'approbation ne se mettaient pas à jour automatiquement par @mytharcher
