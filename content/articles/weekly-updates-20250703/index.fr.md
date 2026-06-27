---
title: "Mises à jour hebdomadaires de NocoBase : Optimisations et corrections de bugs"
description: "Les mises à jour de cette semaine incluent : ajout du support des filtres dans la gestion multi-applications, optimisation des styles mobiles, et plus encore."
---

Résumez les journaux de mise à jour hebdomadaires du produit. Les dernières versions sont disponibles sur [notre blog](https://www.nocobase.com/en/blog/timeline).

**NocoBase est actuellement mis à jour avec trois branches : `main`, `next` et `develop`.**

![version.png](https://static-docs.nocobase.com/ba5f04e27e99c625cb3822da5df07860.png)

* `main` : La version la plus stable à ce jour, recommandée pour l'installation ;
* `next` : Version bêta, contient les nouvelles fonctionnalités à venir et a été testée préliminairement. Il peut y avoir des problèmes connus ou inconnus. Elle est principalement destinée aux utilisateurs testeurs pour recueillir des retours et optimiser davantage les fonctionnalités. Idéale pour les utilisateurs testeurs qui souhaitent découvrir les nouvelles fonctionnalités en avant-première et donner leur avis ;
* `develop` : Version alpha, contient le code de fonctionnalité le plus récent, peut être incomplète ou instable, principalement destinée au développement interne et à l'itération rapide. Adaptée aux utilisateurs techniques intéressés par les fonctionnalités de pointe du produit, mais avec des problèmes potentiels et des fonctions incomplètes. Ne pas utiliser en production.

## main

![main.png](https://static-docs.nocobase.com/47a3c71734c1d0f908b51f9ebd53c0ac.png)

### [v1.7.18](https://www.nocobase.com/en/blog/v1.7.18)

*Date de sortie : 2025-06-26*

#### 🚀 Améliorations

- **[Workflow]** Optimisation du style mobile ([#7040](https://github.com/nocobase/nocobase/pull/7040)) par @mytharcher
- **[Formulaires publics]** Optimisation des performances des composants de date dans les formulaires publics ([#7117](https://github.com/nocobase/nocobase/pull/7117)) par @zhangzhonghe

#### 🐛 Corrections de bugs

- **[Workflow]** Correction des paramètres de chargement d'enregistrement dans les tâches ([#7123](https://github.com/nocobase/nocobase/pull/7123)) par @mytharcher
- **[Client WEB]** Correction d'un problème où les blocs sous les pages n'étaient pas affichés après avoir défini les permissions de menu de rôle ([#7112](https://github.com/nocobase/nocobase/pull/7112)) par @aaaaaajie
- **[Workflow : Approbation]**

  - Correction du nom de la variable du demandeur dans le déclencheur par @mytharcher
  - Correction des styles mobiles par @mytharcher
  - Correction d'une erreur levée lors de la suppression d'une collection liée à l'approbation par @mytharcher

## next

![next.png](https://static-docs.nocobase.com/8ed17a0f08cc585018f6de6c8b13947d.png)

### [v1.8.0-beta.11](https://www.nocobase.com/en/blog/v1.8.0-beta.11)

*Date de sortie : 2025-06-27*

#### 🎉 Nouvelles fonctionnalités

- **[Workflow : Nœud de requête HTTP]** Prise en charge des requêtes `multipart/form-data` ([#7087](https://github.com/nocobase/nocobase/pull/7087)) par @shushu992

#### 🚀 Améliorations

- **[Workflow]**

  - Optimisation du style mobile ([#7040](https://github.com/nocobase/nocobase/pull/7040)) par @mytharcher
  - Ajustement de l'API de `getCollectionFieldOptions` ([#7095](https://github.com/nocobase/nocobase/pull/7095)) par @mytharcher
- **[Formulaires publics]** Optimisation des performances des composants de date dans les formulaires publics ([#7117](https://github.com/nocobase/nocobase/pull/7117)) par @zhangzhonghe
- **[Workflow : Événement pré-action]** Ajustement de l'API des variables par @mytharcher
- **[Workflow : Approbation]** Ajustement de l'API des variables par @mytharcher

#### 🐛 Corrections de bugs

- **[client]**

  - Limite de plage incorrecte sur les champs de date avec heure ([#7107](https://github.com/nocobase/nocobase/pull/7107)) par @katherinehhh
  - Lorsque les variables des paramètres de requête URL sont vides, les conditions de portée des données ne sont pas supprimées ([#7104](https://github.com/nocobase/nocobase/pull/7104)) par @zhangzhonghe
- **[Workflow]**

  - Correction des paramètres de chargement d'enregistrement dans les tâches ([#7123](https://github.com/nocobase/nocobase/pull/7123)) par @mytharcher
  - Correction d'une vérification incorrecte sur les nombres entiers de grande taille ([#7099](https://github.com/nocobase/nocobase/pull/7099)) par @mytharcher
  - Correction des statistiques supprimées en cascade par une version de workflow non actuelle ([#7103](https://github.com/nocobase/nocobase/pull/7103)) par @mytharcher
- **[Mobile]** Correction d'un problème d'index z des fenêtres contextuelles mobiles ([#7110](https://github.com/nocobase/nocobase/pull/7110)) par @zhangzhonghe
- **[Client WEB]** Correction d'un problème où les blocs sous les pages n'étaient pas affichés après avoir défini les permissions de menu de rôle ([#7112](https://github.com/nocobase/nocobase/pull/7112)) par @aaaaaajie
- **[Calendrier]** Problème de champ de date dans le formulaire de création rapide du bloc calendrier ([#7106](https://github.com/nocobase/nocobase/pull/7106)) par @katherinehhh
- **[Action : Importer des enregistrements]** Résolution d'un problème d'échec de connexion après l'importation par lots de noms d'utilisateur et de mots de passe ([#7076](https://github.com/nocobase/nocobase/pull/7076)) par @aaaaaajie
- **[Workflow : Approbation]**

  - Correction d'une erreur levée lors de la suppression d'une collection liée à l'approbation par @mytharcher
  - Correction des styles mobiles par @mytharcher
  - Correction du nom de la variable du demandeur dans le déclencheur par @mytharcher
  - Seuls les participants peuvent voir (obtenir) les détails de l'approbation par @mytharcher
  - Correction de l'API de variable héritée qui levait une erreur par @mytharcher

## develop

![develop.png](https://static-docs.nocobase.com/7fcdd9456a17286d8a439eee52bcb8d2.png)

### [v1.8.0-alpha.12](https://www.nocobase.com/en/blog/v1.8.0-alpha.12)

*Date de sortie : 2025-07-02*

#### 🚀 Améliorations

- **[base de données]** Prise en charge de l'ajout d'options de pool à partir de l'environnement ([#7133](https://github.com/nocobase/nocobase/pull/7133)) par @mytharcher
- **[Workflow]**

  - Amélioration des performances de chargement de la liste des exécutions en excluant le champ JSON ([#7138](https://github.com/nocobase/nocobase/pull/7138)) par @mytharcher
  - Ajout d'une API de journal pour les tests de nœuds ([#7129](https://github.com/nocobase/nocobase/pull/7129)) par @mytharcher
- **[Workflow : Approbation]** Changement de l'heure en absolu dans la chronologie par @mytharcher

#### 🐛 Corrections de bugs

- **[utils]** Problème de filtrage sur DateOnly ou Datetime (sans fuseau horaire) en utilisant la variable Jour exact ([#7113](https://github.com/nocobase/nocobase/pull/7113)) par @katherinehhh
- **[cli]**

  - Erreur indéfinie lors du téléchargement de plugins ([#7143](https://github.com/nocobase/nocobase/pull/7143)) par @jiannx
  - Ajustement de la copie de la licence lors de l'installation du plugin ([#7135](https://github.com/nocobase/nocobase/pull/7135)) par @jiannx
- **[client]**

  - Tolérance aux pannes pour les paramètres basés sur 'x-acl-action' ([#7128](https://github.com/nocobase/nocobase/pull/7128)) par @mytharcher
  - Le réglage du displayName du champ dans la vue connectée était sans effet ([#7130](https://github.com/nocobase/nocobase/pull/7130)) par @aaaaaajie
  - Configuration de l'interface utilisateur du nœud manuel du workflow : les règles de liaison ne peuvent pas sélectionner les variables du formulaire actuel ([#7125](https://github.com/nocobase/nocobase/pull/7125)) par @zhangzhonghe
- **[Workflow]** Correction d'une erreur levée par une importation cyclique ([#7134](https://github.com/nocobase/nocobase/pull/7134)) par @mytharcher
- **[plugin-commercial]**

  - Le mode développement n'affiche pas la fenêtre contextuelle de licence par @jiannx
  - Fermeture temporaire de la fenêtre contextuelle de vérification de licence par @jiannx
  - Ajustement de la logique de vérification de la licence et prise en charge de la correspondance de nom de domaine multi-sites par @jiannx
- **[Politique de mot de passe]** Prise en charge du verrouillage permanent des comptes utilisateur par @2013xile
- **[Workflow : Sous-workflow]** Correction d'un problème en mode cluster par @mytharcher
- **[Workflow : Approbation]**

  - Ajout des paramètres de mise en page du formulaire par @mytharcher
  - Suppression des champs non filtrables du filtre par @mytharcher

### [v1.8.0-alpha.11](https://www.nocobase.com/en/blog/v1.8.0-alpha.11)

*Date de sortie : 2025-06-27*

#### 🎉 Nouvelles fonctionnalités

- **[Paramètres de licence]** ajout des paramètres de licence et validation de la licence avant le téléchargement des plugins ([#7026](https://github.com/nocobase/nocobase/pull/7026)) par @jiannx

#### 🚀 Améliorations

- **[Gestionnaire multi-applications]** ajout de la prise en charge du filtre dans la gestion multi-applications ([#7124](https://github.com/nocobase/nocobase/pull/7124)) par @katherinehhh
- **[Workflow]** Optimisation du style mobile ([#7040](https://github.com/nocobase/nocobase/pull/7040)) par @mytharcher
- **[Formulaires publics]** Optimisation des performances des composants de date dans les formulaires publics ([#7117](https://github.com/nocobase/nocobase/pull/7117)) par @zhangzhonghe
- **[plugin-commercial]** Chiffrement de l'envoi des journaux et amélioration de l'affichage des informations de licence par @jiannx

#### 🐛 Corrections de bugs

- **[client]** La valeur par défaut du champ d'association écrase les données existantes dans la sous-table ([#7120](https://github.com/nocobase/nocobase/pull/7120)) par @katherinehhh
- **[Workflow]** Correction des paramètres de chargement d'enregistrement dans les tâches ([#7123](https://github.com/nocobase/nocobase/pull/7123)) par @mytharcher
- **[Client WEB]** Correction d'un problème où les blocs sous les pages n'étaient pas affichés après avoir défini les permissions de menu de rôle ([#7112](https://github.com/nocobase/nocobase/pull/7112)) par @aaaaaajie
- **[Workflow : Approbation]** Correction du nom de la variable du demandeur dans le déclencheur par @mytharcher
