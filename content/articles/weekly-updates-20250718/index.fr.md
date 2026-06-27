---
title: "Mises à jour hebdomadaires de NocoBase : Optimisations et corrections de bugs"
description: "Les mises à jour de cette semaine incluent : la prise en charge de la configuration de secrets d'authentification indépendants pour les sous-applications et l'ajout d'un nœud CC aux workflows."
---

Résumé des journaux de mise à jour hebdomadaires du produit. Les dernières versions sont disponibles sur [notre blog](https://www.nocobase.com/en/blog/timeline).

**NocoBase est actuellement mis à jour avec trois branches : `main`, `next` et `develop`.**

![version.png](https://static-docs.nocobase.com/ba5f04e27e99c625cb3822da5df07860.png)

* `main` : La version la plus stable à ce jour, recommandée pour l'installation ;
* `next` : Version bêta, contient les nouvelles fonctionnalités à venir et a été testée préliminairement. Il peut y avoir des problèmes connus ou inconnus. Elle est principalement destinée aux utilisateurs testeurs pour recueillir des retours et optimiser davantage les fonctionnalités. Idéale pour les utilisateurs testeurs qui souhaitent découvrir les nouvelles fonctionnalités en avant-première et donner leur avis ;
* `develop` : Version alpha, contient le code des dernières fonctionnalités, peut être incomplète ou instable, principalement destinée au développement interne et à l'itération rapide. Adaptée aux utilisateurs techniques intéressés par les fonctionnalités de pointe du produit, mais avec des problèmes potentiels et des fonctionnalités incomplètes. Ne pas utiliser en production.

## main

![main.png](https://static-docs.nocobase.com/47a3c71734c1d0f908b51f9ebd53c0ac.png)

### [v1.8.6](https://www.nocobase.com/en/blog/v1.8.6)

*Date de sortie : 2025-07-16*

#### 🐛 Corrections de bugs

- **[client]**

  - Correction d'une erreur : Impossible de résoudre 'react-device-detect ([#7224](https://github.com/nocobase/nocobase/pull/7224)) par @zhangzhonghe
  - Problème d'affichage pour les champs d'association dans les règles de liaison ([#7220](https://github.com/nocobase/nocobase/pull/7220)) par @katherinehhh
- **[base de données]** Correction d'une erreur lors de l'activation de la pagination simple pour les tables de sources de données externes ([#7222](https://github.com/nocobase/nocobase/pull/7222)) par @aaaaaajie
- **[Champ de collection : Tri]** Sélection du champ de tri manquante lors de la duplication d'enregistrements ([#7116](https://github.com/nocobase/nocobase/pull/7116)) par @katherinehhh
- **[Workflow : Approbation]**

  - Ajout d'une tolérance aux pannes pour les approbations supprimées dans la liste des enregistrements par @mytharcher
  - Correction des associations à plusieurs niveaux lors de la soumission d'une approbation par @mytharcher
  - Correction d'une exception lors de la suppression d'un enregistrement par @mytharcher

### [v1.8.5](https://www.nocobase.com/en/blog/v1.8.5)

*Date de sortie : 2025-07-14*

#### 🚀 Améliorations

- **[Champ de collection : Formule]** Ajout d'interfaces plus calculables ([#7215](https://github.com/nocobase/nocobase/pull/7215)) par @mytharcher
- **[Workflow]** Utilisation de la journalisation au lieu de lever une erreur lorsque l'exécution ne doit pas avoir lieu en raison du statut ([#7217](https://github.com/nocobase/nocobase/pull/7217)) par @mytharcher
- **[Workflow : Approbation]** Prise en charge de la suppression de l'approbation lorsque les données associées sont supprimées par @mytharcher

#### 🐛 Corrections de bugs

- **[client]**

  - Problème où les champs de pièce jointe ne pouvaient pas être sélectionnés comme variables dans une règle de liaison ([#7213](https://github.com/nocobase/nocobase/pull/7213)) par @zhangzhonghe
  - Correction du problème où les composants de sélection déroulante sont bloqués par le clavier sur iOS ([#7149](https://github.com/nocobase/nocobase/pull/7149)) par @zhangzhonghe
  - Échec de l'affectation de valeur dans le formulaire d'édition lorsque la valeur et les options sont toutes deux définies pour un champ de sélection ([#7209](https://github.com/nocobase/nocobase/pull/7209)) par @katherinehhh
  - Réduction du filtre : Le filtre n'est pas déclenché lors de l'initialisation de la page après avoir défini des valeurs par défaut pour les champs ([#7206](https://github.com/nocobase/nocobase/pull/7206)) par @zhangzhonghe
  - Erreur lors de l'affectation de valeurs dans un bloc de liste utilisant un champ de tri Kanban ([#7208](https://github.com/nocobase/nocobase/pull/7208)) par @katherinehhh
  - Le titre de l'onglet du navigateur n'est pas synchronisé lors du basculement entre les sous-menus ([#7207](https://github.com/nocobase/nocobase/pull/7207)) par @zhangzhonghe
  - Action contextuelle : L'affichage de la page ne correspond pas aux attentes après le changement d'onglets ([#7212](https://github.com/nocobase/nocobase/pull/7212)) par @zhangzhonghe
- **[acl]** Correction d'une erreur lors de la suppression d'un rôle en mode union de rôles qui inclut le rôle racine. ([#7198](https://github.com/nocobase/nocobase/pull/7198)) par @aaaaaajie
- **[Gestionnaire multi-applications]** Correction des options d'authentification dans une position inattendue ([#7210](https://github.com/nocobase/nocobase/pull/7210)) par @mytharcher
- **[Authentification]** Correction du problème où la page de connexion ne pouvait pas défiler ([#7159](https://github.com/nocobase/nocobase/pull/7159)) par @zhangzhonghe
- **[Workflow : Approbation]** Correction des associations lors de la soumission d'une approbation par @mytharcher

### [v1.8.4](https://www.nocobase.com/en/blog/v1.8.4)

*Date de sortie : 2025-07-13*

#### 🎉 Nouvelles fonctionnalités

- **[Gestionnaire multi-applications]** Prise en charge de la configuration d'un secret d'authentification indépendant pour les sous-applications ([#7197](https://github.com/nocobase/nocobase/pull/7197)) par @mytharcher
- **[Workflow : CC]** Ajout d'un nœud CC au workflow ([#7201](https://github.com/nocobase/nocobase/pull/7201)) par @mytharcher

#### 🚀 Améliorations

- **[Notification : Message dans l'application]** Optimisation de la taille de la police pour la page des messages mobiles ([#7199](https://github.com/nocobase/nocobase/pull/7199)) par @zhangzhonghe
- **[Auth : DingTalk]** Prise en charge de la configuration du protocole et du numéro de port de l'URL de rappel par @2013xile

#### 🐛 Corrections de bugs

- **[Notification : Message dans l'application]** Correction du problème où l'horodatage BigInt au format chaîne provoque un problème avec dayjs ([#7196](https://github.com/nocobase/nocobase/pull/7196)) par @mytharcher
- **[Workflow : Approbation]**

  - Pour éviter une erreur lorsque l'utilisateur n'existe pas par @mytharcher
  - Rechargement de l'association sur l'enregistrement par @mytharcher
  - Ajout de `try/catch` dans la migration lors de la mise à jour du schéma UI par @mytharcher

### [v1.8.3](https://www.nocobase.com/en/blog/v1.8.3)

*Date de sortie : 2025-07-11*

#### 🚀 Améliorations

- **[Gestionnaire multi-applications]** Ajout d'options de base de données et d'autorisation pour la sous-application ([#7184](https://github.com/nocobase/nocobase/pull/7184)) par @mytharcher

#### 🐛 Corrections de bugs

- **[Action : Requête personnalisée]** Problème d'analyse des variables dans l'URL lors de la navigation après le succès d'une requête personnalisée ([#7186](https://github.com/nocobase/nocobase/pull/7186)) par @katherinehhh

### [v1.8.2](https://www.nocobase.com/en/blog/v1.8.2)

*Date de sortie : 2025-07-10*

#### 🎉 Nouvelles fonctionnalités

- **[Workflow : Approbation]** Ajout d'un initialiseur pour le déclencheur par @mytharcher

#### 🚀 Améliorations

- **[Gestionnaire multi-applications]** Ajout d'options de base de données et d'autorisation pour la sous-application ([#7184](https://github.com/nocobase/nocobase/pull/7184)) par @mytharcher
- **[Workflow]** Conversion des opérandes en chaîne avant la comparaison de chaînes dans le calcul logique ([#7190](https://github.com/nocobase/nocobase/pull/7190)) par @mytharcher
- **[Champ de collection : Code]** Ajout d'un paramètre d'indentation par @mytharcher

#### 🐛 Corrections de bugs

- **[base de données]** Correction d'un problème où les champs des vues n'étaient pas affichés dans les blocs. ([#7162](https://github.com/nocobase/nocobase/pull/7162)) par @aaaaaajie
- **[Bloc : Kanban]** Correction des problèmes d'interface utilisateur de sous-tableau dans Kanban et ajout de la prise en charge du réglage de la largeur des colonnes Kanban ([#7189](https://github.com/nocobase/nocobase/pull/7189)) par @katherinehhh
- **[Workflow : Approbation]** Correction des bugs de bloc et d'association par @mytharcher

## next

![next.png](https://static-docs.nocobase.com/8ed17a0f08cc585018f6de6c8b13947d.png)

### [v1.9.0-beta.3](https://www.nocobase.com/en/blog/v1.9.0-beta.3)

*Date de sortie : 2025-07-14*

#### 🎉 Nouvelles fonctionnalités

- **[Gestionnaire multi-applications]** Prise en charge de la configuration d'un secret d'authentification indépendant pour les sous-applications ([#7197](https://github.com/nocobase/nocobase/pull/7197)) par @mytharcher
- **[Workflow : CC]** Ajout d'un nœud CC au workflow ([#7201](https://github.com/nocobase/nocobase/pull/7201)) par @mytharcher
- **[Workflow : Approbation]** Ajout d'un initialiseur pour le déclencheur par @mytharcher

#### 🚀 Améliorations

- **[Notification : Message dans l'application]** Optimisation de la taille de la police pour la page des messages mobiles ([#7199](https://github.com/nocobase/nocobase/pull/7199)) par @zhangzhonghe
- **[Workflow]** Conversion des opérandes en chaîne avant la comparaison de chaînes dans le calcul logique ([#7190](https://github.com/nocobase/nocobase/pull/7190)) par @mytharcher
- **[Gestionnaire multi-applications]**

  - Ajout d'options de base de données et d'autorisation pour la sous-application ([#7184](https://github.com/nocobase/nocobase/pull/7184)) par @mytharcher
  - Ajout d'options de base de données et d'autorisation pour la sous-application ([#7184](https://github.com/nocobase/nocobase/pull/7184)) par @mytharcher
- **[Champ de collection : Code]** Ajout d'un paramètre d'indentation par @mytharcher
- **[Auth : DingTalk]** Prise en charge de la configuration du protocole et du numéro de port de l'URL de rappel par @2013xile

#### 🐛 Corrections de bugs

- **[client]**

  - Problème où les champs de pièce jointe ne pouvaient pas être sélectionnés comme variables dans une règle de liaison ([#7213](https://github.com/nocobase/nocobase/pull/7213)) par @zhangzhonghe
  - Erreur lors de l'affectation de valeurs dans un bloc de liste utilisant un champ de tri Kanban ([#7208](https://github.com/nocobase/nocobase/pull/7208)) par @katherinehhh
  - Réduction du filtre : Le filtre n'est pas déclenché lors de l'initialisation de la page après avoir défini des valeurs par défaut pour les champs ([#7206](https://github.com/nocobase/nocobase/pull/7206)) par @zhangzhonghe
  - Échec de l'affectation de valeur dans le formulaire d'édition lorsque la valeur et les options sont toutes deux définies pour un champ de sélection ([#7209](https://github.com/nocobase/nocobase/pull/7209)) par @katherinehhh
  - Action contextuelle : L'affichage de la page ne correspond pas aux attentes après le changement d'onglets ([#7212](https://github.com/nocobase/nocobase/pull/7212)) par @zhangzhonghe
  - Le titre de l'onglet du navigateur n'est pas synchronisé lors du basculement entre les sous-menus ([#7207](https://github.com/nocobase/nocobase/pull/7207)) par @zhangzhonghe
  - Correction du problème où les composants de sélection déroulante sont bloqués par le clavier sur iOS ([#7149](https://github.com/nocobase/nocobase/pull/7149)) par @zhangzhonghe
- **[acl]** Correction d'une erreur lors de la suppression d'un rôle en mode union de rôles qui inclut le rôle racine. ([#7198](https://github.com/nocobase/nocobase/pull/7198)) par @aaaaaajie
- **[Authentification]** Correction du problème où la page de connexion ne pouvait pas défiler ([#7159](https://github.com/nocobase/nocobase/pull/7159)) par @zhangzhonghe
- **[Gestionnaire multi-applications]** Correction des options d'authentification dans une position inattendue ([#7210](https://github.com/nocobase/nocobase/pull/7210)) par @mytharcher
- **[Notification : Message dans l'application]** Correction du problème où l'horodatage BigInt au format chaîne provoque un problème avec dayjs ([#7196](https://github.com/nocobase/nocobase/pull/7196)) par @mytharcher
- **[Action : Requête personnalisée]** Problème d'analyse des variables dans l'URL lors de la navigation après le succès d'une requête personnalisée ([#7186](https://github.com/nocobase/nocobase/pull/7186)) par @katherinehhh
- **[Bloc : Kanban]** Correction des problèmes d'interface utilisateur de sous-tableau dans Kanban et ajout de la prise en charge du réglage de la largeur des colonnes Kanban ([#7189](https://github.com/nocobase/nocobase/pull/7189)) par @katherinehhh
- **[Workflow : Approbation]**

  - Ajout de `try/catch` dans la migration lors de la mise à jour du schéma UI par @mytharcher
  - Correction des bugs de bloc et d'association par @mytharcher
  - Rechargement de l'association sur l'enregistrement par @mytharcher
  - Pour éviter une erreur lorsque l'utilisateur n'existe pas par @mytharcher

### [v1.9.0-beta.2](https://www.nocobase.com/en/blog/v1.9.0-beta.2)

*Date de sortie : 2025-07-10*

#### 🐛 Corrections de bugs

- **[client]**

  - L'affichage du champ case à cocher est incorrect dans la collection de champs d'association du formulaire ([#7176](https://github.com/nocobase/nocobase/pull/7176)) par @zhangzhonghe
  - Correction du problème où le clic sur les boutons ne permet pas d'ouvrir les fenêtres contextuelles ([#7180](https://github.com/nocobase/nocobase/pull/7180)) par @zhangzhonghe
- **[base de données]** Correction d'un problème où les champs des vues n'étaient pas affichés dans les blocs. ([#7162](https://github.com/nocobase/nocobase/pull/7162)) par @aaaaaajie
- **[Workflow : Nœud manuel]** Correction d'une erreur levée lors de l'utilisation d'une variable ([#7177](https://github.com/nocobase/nocobase/pull/7177)) par @mytharcher
- **[Impression de modèle]** ajout d'un script de migration pour le champ rootDataType par @jiannx
- **[Workflow : Approbation]** Correction de la branche approuvée qui ne s'exécute pas lorsqu'il n'y a pas de destinataire par @mytharcher

## develop

![develop.png](https://static-docs.nocobase.com/7fcdd9456a17286d8a439eee52bcb8d2.png)

### [v1.9.0-alpha.2](https://www.nocobase.com/en/blog/v1.9.0-alpha.2)

*Date de sortie : 2025-07-15*

#### 🎉 Nouvelles fonctionnalités

- **[Gestionnaire multi-applications]** Prise en charge de la configuration d'un secret d'authentification indépendant pour les sous-applications ([#7197](https://github.com/nocobase/nocobase/pull/7197)) par @mytharcher
- **[Workflow : CC]** Ajout d'un nœud CC au workflow ([#7201](https://github.com/nocobase/nocobase/pull/7201)) par @mytharcher
- **[Workflow : Approbation]** Ajout d'un initialiseur pour le déclencheur par @mytharcher

#### 🚀 Améliorations

- **[Champ de collection : Formule]** Ajout d'interfaces plus calculables ([#7215](https://github.com/nocobase/nocobase/pull/7215)) par @mytharcher
- **[Workflow]**

  - Utilisation de la journalisation au lieu de lever une erreur lorsque l'exécution ne doit pas avoir lieu en raison du statut ([#7217](https://github.com/nocobase/nocobase/pull/7217)) par @mytharcher
  - Conversion des opérandes en chaîne avant la comparaison de chaînes dans le calcul logique ([#7190](https://github.com/nocobase/nocobase/pull/7190)) par @mytharcher
- **[Notification : Message dans l'application]** Optimisation de la taille de la police pour la page des messages mobiles ([#7199](https://github.com/nocobase/nocobase/pull/7199)) par @zhangzhonghe
- **[Gestionnaire multi-applications]**

  - Ajout d'options de base de données et d'autorisation pour la sous-application ([#7184](https://github.com/nocobase/nocobase/pull/7184)) par @mytharcher
  - Ajout d'options de base de données et d'autorisation pour la sous-application ([#7184](https://github.com/nocobase/nocobase/pull/7184)) par @mytharcher
- **[Champ de collection : Code]** Ajout d'un paramètre d'indentation par @mytharcher
- **[Workflow : Approbation]** Prise en charge de la suppression de l'approbation lorsque les données associées sont supprimées par @mytharcher
- **[Auth : DingTalk]** Prise en charge de la configuration du protocole et du numéro de port de l'URL de rappel par @2013xile

#### 🐛 Corrections de bugs

- **[client]**

  - Problème où les champs de pièce jointe ne pouvaient pas être sélectionnés comme variables dans une règle de liaison ([#7213](https://github.com/nocobase/nocobase/pull/7213)) par @zhangzhonghe
  - Réduction du filtre : Le filtre n'est pas déclenché lors de l'initialisation de la page après avoir défini des valeurs par défaut pour les champs ([#7206](https://github.com/nocobase/nocobase/pull/7206)) par @zhangzhonghe
  - Problème d'affichage pour les champs d'association dans les règles de liaison ([#7220](https://github.com/nocobase/nocobase/pull/7220)) par @katherinehhh
  - Échec de l'affectation de valeur dans le formulaire d'édition lorsque la valeur et les options sont toutes deux définies pour un champ de sélection ([#7209](https://github.com/nocobase/nocobase/pull/7209)) par @katherinehhh
  - Erreur lors de l'affectation de valeurs dans un bloc de liste utilisant un champ de tri Kanban ([#7208](https://github.com/nocobase/nocobase/pull/7208)) par @katherinehhh
  - Action contextuelle : L'affichage de la page ne correspond pas aux attentes après le changement d'onglets ([#7212](https://github.com/nocobase/nocobase/pull/7212)) par @zhangzhonghe
  - Le titre de l'onglet du navigateur n'est pas synchronisé lors du basculement entre les sous-menus ([#7207](https://github.com/nocobase/nocobase/pull/7207)) par @zhangzhonghe
  - Correction du problème où les composants de sélection déroulante sont bloqués par le clavier sur iOS ([#7149](https://github.com/nocobase/nocobase/pull/7149)) par @zhangzhonghe
  - L'affichage du champ case à cocher est incorrect dans la collection de champs d'association du formulaire ([#7176](https://github.com/nocobase/nocobase/pull/7176)) par @zhangzhonghe
  - Correction du problème où le clic sur les boutons ne permet pas d'ouvrir les fenêtres contextuelles ([#7180](https://github.com/nocobase/nocobase/pull/7180)) par @zhangzhonghe
- **[acl]** Correction d'une erreur lors de la suppression d'un rôle en mode union de rôles qui inclut le rôle racine. ([#7198](https://github.com/nocobase/nocobase/pull/7198)) par @aaaaaajie
- **[base de données]** Correction d'un problème où les champs des vues n'étaient pas affichés dans les blocs. ([#7162](https://github.com/nocobase/nocobase/pull/7162)) par @aaaaaajie
- **[Gestionnaire multi-applications]** Correction des options d'authentification dans une position inattendue ([#7210](https://github.com/nocobase/nocobase/pull/7210)) par @mytharcher
- **[Notification : Message dans l'application]** Correction du problème où l'horodatage BigInt au format chaîne provoque un problème avec dayjs ([#7196](https://github.com/nocobase/nocobase/pull/7196)) par @mytharcher
- **[Authentification]** Correction du problème où la page de connexion ne pouvait pas défiler ([#7159](https://github.com/nocobase/nocobase/pull/7159)) par @zhangzhonghe
- **[Action : Requête personnalisée]** Problème d'analyse des variables dans l'URL lors de la navigation après le succès d'une requête personnalisée ([#7186](https://github.com/nocobase/nocobase/pull/7186)) par @katherinehhh
- **[Bloc : Kanban]** Correction des problèmes d'interface utilisateur de sous-tableau dans Kanban et ajout de la prise en charge du réglage de la largeur des colonnes Kanban ([#7189](https://github.com/nocobase/nocobase/pull/7189)) par @katherinehhh
- **[Workflow : Nœud manuel]** Correction d'une erreur levée lors de l'utilisation d'une variable ([#7177](https://github.com/nocobase/nocobase/pull/7177)) par @mytharcher
- **[Impression de modèle]** ajout d'un script de migration pour le champ rootDataType par @jiannx
- **[Workflow : Approbation]**

  - Correction des associations lors de la soumission d'une approbation par @mytharcher
  - Correction d'une exception lors de la suppression d'un enregistrement par @mytharcher
  - Correction de la branche approuvée qui ne s'exécute pas lorsqu'il n'y a pas de destinataire par @mytharcher
  - Pour éviter une erreur lorsque l'utilisateur n'existe pas par @mytharcher
  - Correction des bugs de bloc et d'association par @mytharcher
  - Ajout de `try/catch` dans la migration lors de la mise à jour du schéma UI par @mytharcher
  - Rechargement de l'association sur l'enregistrement par @mytharcher
