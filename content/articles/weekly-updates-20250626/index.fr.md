---
title: "Mises à jour hebdomadaires de NocoBase : Prise en charge du chargement à la demande des collections pour les sources de données externes"
description: "Les mises à jour de cette semaine incluent : ajout de la variable d'enregistrement d'approbation au résultat du nœud, prise en charge du champ BIT dans SQL Server pour les sources de données externes, et plus encore."
---

Résumez les journaux de mise à jour hebdomadaires du produit. Les dernières versions sont disponibles sur [notre blog](https://www.nocobase.com/en/blog/timeline).

**NocoBase est actuellement mis à jour avec trois branches : `main`, `next` et `develop`.**

![version.png](https://static-docs.nocobase.com/ba5f04e27e99c625cb3822da5df07860.png)

* `main` : La version la plus stable à ce jour, recommandée pour l'installation ;
* `next` : Version bêta, contient les nouvelles fonctionnalités à venir et a été testée préliminairement. Il peut y avoir des problèmes connus ou inconnus. Elle est principalement destinée aux utilisateurs testeurs pour recueillir des retours et optimiser davantage les fonctionnalités. Idéale pour les utilisateurs testeurs qui souhaitent découvrir les nouvelles fonctionnalités en avant-première et donner leur avis ;
* `develop` : Version alpha, contient le code de fonctionnalité le plus récent, peut être incomplète ou instable, principalement destinée au développement interne et à l'itération rapide. Adaptée aux utilisateurs techniques intéressés par les fonctionnalités de pointe du produit, mais avec des problèmes potentiels et des fonctions incomplètes. Ne pas utiliser en production.

## main

![main.png](https://static-docs.nocobase.com/47a3c71734c1d0f908b51f9ebd53c0ac.png)

### [v1.7.17](https://www.nocobase.com/en/blog/v1.7.17)

*Date de sortie : 2025-06-24*

#### 🐛 Corrections de bugs

- **[client]**

  - Limite de plage incorrecte sur les champs de date avec heure ([#7107](https://github.com/nocobase/nocobase/pull/7107)) par @katherinehhh
  - Lorsque les variables des paramètres de requête URL sont vides, les conditions de portée des données ne sont pas supprimées ([#7104](https://github.com/nocobase/nocobase/pull/7104)) par @zhangzhonghe
- **[Mobile]** Correction du problème d'index z des popups mobiles ([#7110](https://github.com/nocobase/nocobase/pull/7110)) par @zhangzhonghe
- **[Calendrier]** Problème de champ de date dans le formulaire de création rapide du bloc calendrier ([#7106](https://github.com/nocobase/nocobase/pull/7106)) par @katherinehhh

### [v1.7.16](https://www.nocobase.com/en/blog/v1.7.16)

*Date de sortie : 2025-06-20*

#### 🐛 Corrections de bugs

- **[Workflow]**

  - Correction de la vérification incorrecte des grands nombres entiers ([#7099](https://github.com/nocobase/nocobase/pull/7099)) par @mytharcher
  - Correction des statistiques supprimées en cascade par une version de workflow non courante ([#7103](https://github.com/nocobase/nocobase/pull/7103)) par @mytharcher
- **[Action : Importer des enregistrements]** Résolution du problème d'échec de connexion après l'importation en masse de noms d'utilisateur et mots de passe ([#7076](https://github.com/nocobase/nocobase/pull/7076)) par @aaaaaajie
- **[Workflow : Approbation]** Seuls les participants peuvent voir (obtenir) les détails de l'approbation par @mytharcher

### [v1.7.15](https://www.nocobase.com/en/blog/v1.7.15)

*Date de sortie : 2025-06-18*

#### 🐛 Corrections de bugs

- **[client]**

  - Utiliser une portée de variable indépendante pour chaque champ ([#7012](https://github.com/nocobase/nocobase/pull/7012)) par @mytharcher
  - Attribuer des valeurs de champ : Impossible d'effacer les données pour les champs de relation ([#7086](https://github.com/nocobase/nocobase/pull/7086)) par @zhangzhonghe
  - La fonction d'alignement du texte des colonnes du tableau ne fonctionne pas ([#7094](https://github.com/nocobase/nocobase/pull/7094)) par @zhangzhonghe
- **[Workflow]** Correction de la vérification incorrecte des grands nombres entiers ([#7091](https://github.com/nocobase/nocobase/pull/7091)) par @mytharcher
- **[Gestionnaire de fichiers]** Correction du champ de pièces jointes qui ne peut pas être mis à jour dans le processus d'approbation ([#7093](https://github.com/nocobase/nocobase/pull/7093)) par @mytharcher
- **[Workflow : Approbation]** Utiliser la comparaison au lieu de la logique implicite pour éviter les problèmes de type par @mytharcher

## next

![next.png](https://static-docs.nocobase.com/8ed17a0f08cc585018f6de6c8b13947d.png)

### [v1.8.0-beta.10](https://www.nocobase.com/en/blog/v1.8.0-beta.10)

*Date de sortie : 2025-06-19*

#### 🎉 Nouvelles fonctionnalités

- **[Workflow : Approbation]** Ajout de la variable des enregistrements d'approbation au résultat du nœud par @mytharcher

#### 🐛 Corrections de bugs

- **[client]**

  - La fonction d'alignement du texte des colonnes du tableau ne fonctionne pas ([#7094](https://github.com/nocobase/nocobase/pull/7094)) par @zhangzhonghe
  - Attribuer des valeurs de champ : Impossible d'effacer les données pour les champs de relation ([#7086](https://github.com/nocobase/nocobase/pull/7086)) par @zhangzhonghe
  - Utiliser une portée de variable indépendante pour chaque champ ([#7012](https://github.com/nocobase/nocobase/pull/7012)) par @mytharcher
- **[Gestionnaire de fichiers]** Correction du champ de pièces jointes qui ne peut pas être mis à jour dans le processus d'approbation ([#7093](https://github.com/nocobase/nocobase/pull/7093)) par @mytharcher
- **[Workflow]** Correction de la vérification incorrecte des grands nombres entiers ([#7091](https://github.com/nocobase/nocobase/pull/7091)) par @mytharcher
- **[Workflow : Approbation]** Utiliser la comparaison au lieu de la logique implicite pour éviter les problèmes de type par @mytharcher

## develop

![develop.png](https://static-docs.nocobase.com/7fcdd9456a17286d8a439eee52bcb8d2.png)

### [v1.8.0-alpha.10](https://www.nocobase.com/en/blog/v1.8.0-alpha.10)

*Date de sortie : 2025-06-25*

#### 🎉 Nouvelles fonctionnalités

- **[Gestionnaire de sources de données]** ✨ Prise en charge du chargement à la demande des collections à partir de sources de données externes ([#6979](https://github.com/nocobase/nocobase/pull/6979)) par @aaaaaajie
- **[Workflow : Nœud de requête HTTP]** Prise en charge des requêtes `multipart/form-data` ([#7087](https://github.com/nocobase/nocobase/pull/7087)) par @shushu992
- **[Source de données : SQL Server externe]** Prise en charge du chargement à la demande des collections à partir de sources de données externes par @aaaaaajie

#### 🐛 Corrections de bugs

- **[client]**

  - Lorsque les variables des paramètres de requête URL sont vides, les conditions de portée des données ne sont pas supprimées ([#7104](https://github.com/nocobase/nocobase/pull/7104)) par @zhangzhonghe
  - Limite de plage incorrecte sur les champs de date avec heure ([#7107](https://github.com/nocobase/nocobase/pull/7107)) par @katherinehhh
- **[Mobile]** Correction du problème d'index z des popups mobiles ([#7110](https://github.com/nocobase/nocobase/pull/7110)) par @zhangzhonghe
- **[Calendrier]** Problème de champ de date dans le formulaire de création rapide du bloc calendrier ([#7106](https://github.com/nocobase/nocobase/pull/7106)) par @katherinehhh
- **[Workflow : Approbation]**

  - Correction de l'API de variable héritée qui génère une erreur par @mytharcher
  - Correction des styles mobiles par @mytharcher
  - Correction de l'erreur générée lorsque la collection liée à l'approbation est supprimée par @mytharcher
- **[Gestionnaire d'e-mails]** la pièce jointe ne s'affiche pas par @jiannx

### [v1.8.0-alpha.9](https://www.nocobase.com/en/blog/v1.8.0-alpha.9)

*Date de sortie : 2025-06-20*

#### 🎉 Nouvelles fonctionnalités

- **[client]** Prise en charge du champ BIT dans SQL Server pour les sources de données externes. ([#7058](https://github.com/nocobase/nocobase/pull/7058)) par @aaaaaajie
- **[Workflow : Approbation]** Ajout de la variable des enregistrements d'approbation au résultat du nœud par @mytharcher

#### 🚀 Améliorations

- **[client]** Masquage automatique de la barre d'actions du bloc de carte en grille lorsqu'elle est vide ([#7069](https://github.com/nocobase/nocobase/pull/7069)) par @zhangzhonghe
- **[Vérification]** Suppression des options de vérificateur de la réponse de l'API `verifiers:listByUser` ([#7090](https://github.com/nocobase/nocobase/pull/7090)) par @2013xile
- **[Workflow]** Ajustement de l'API de `getCollectionFieldOptions` ([#7095](https://github.com/nocobase/nocobase/pull/7095)) par @mytharcher
- **[Workflow : Événement pré-action]** Ajustement de l'API de variable par @mytharcher
- **[Workflow : Approbation]** Ajustement de l'API de variable par @mytharcher

#### 🐛 Corrections de bugs

- **[client]**

  - La fonction d'alignement du texte des colonnes du tableau ne fonctionne pas ([#7094](https://github.com/nocobase/nocobase/pull/7094)) par @zhangzhonghe
  - Attribuer des valeurs de champ : Impossible d'effacer les données pour les champs de relation ([#7086](https://github.com/nocobase/nocobase/pull/7086)) par @zhangzhonghe
  - Utiliser une portée de variable indépendante pour chaque champ ([#7012](https://github.com/nocobase/nocobase/pull/7012)) par @mytharcher
  - La condition de style sur les champs de colonne de sous-tableau n'est pas appliquée correctement ([#7083](https://github.com/nocobase/nocobase/pull/7083)) par @katherinehhh
  - Le filtrage via les champs de collection de relations dans les formulaires de filtre est invalide ([#7070](https://github.com/nocobase/nocobase/pull/7070)) par @zhangzhonghe
  - Les variables des paramètres de requête URL ne fonctionnent pas dans la valeur par défaut du champ de formulaire public ([#7084](https://github.com/nocobase/nocobase/pull/7084)) par @katherinehhh
  - Le message de validation obligatoire dans le sous-tableau persiste lors du changement de page ([#7080](https://github.com/nocobase/nocobase/pull/7080)) par @katherinehhh
  - Erreur lors du clic sur le bouton de filtre ([#7100](https://github.com/nocobase/nocobase/pull/7100)) par @zhangzhonghe
- **[base de données]** prise en charge des mises à jour d'association dans updateOrCreate et firstOrCreate ([#7088](https://github.com/nocobase/nocobase/pull/7088)) par @chenos
- **[Workflow]**

  - Correction des statistiques supprimées en cascade par une version de workflow non courante ([#7103](https://github.com/nocobase/nocobase/pull/7103)) par @mytharcher
  - Correction de la vérification incorrecte des grands nombres entiers ([#7099](https://github.com/nocobase/nocobase/pull/7099)) par @mytharcher
  - Correction de la vérification incorrecte des grands nombres entiers ([#7091](https://github.com/nocobase/nocobase/pull/7091)) par @mytharcher
- **[Action : Importer des enregistrements]** Résolution du problème d'échec de connexion après l'importation en masse de noms d'utilisateur et mots de passe ([#7076](https://github.com/nocobase/nocobase/pull/7076)) par @aaaaaajie
- **[Champ de collection : Plusieurs-à-plusieurs (tableau)]** La mise à jour d'un champ plusieurs-à-plusieurs (tableau) génère une erreur lorsque le champ `updatedBy` est présent ([#7089](https://github.com/nocobase/nocobase/pull/7089)) par @2013xile
- **[Gestionnaire de fichiers]** Correction du champ de pièces jointes qui ne peut pas être mis à jour dans le processus d'approbation ([#7093](https://github.com/nocobase/nocobase/pull/7093)) par @mytharcher
- **[Formulaires publics]** Formulaires publics : Correction du problème d'accès non autorisé lors de la soumission du formulaire ([#7085](https://github.com/nocobase/nocobase/pull/7085)) par @zhangzhonghe
- **[Champ de collection : Séquence]** Correction du calcul de séquence bigint basé sur une chaîne ([#7079](https://github.com/nocobase/nocobase/pull/7079)) par @mytharcher
- **[Workflow : Approbation]**

  - Utiliser la comparaison au lieu de la logique implicite pour éviter les problèmes de type par @mytharcher
  - Seuls les participants peuvent voir (obtenir) les détails de l'approbation par @mytharcher
- **[Gestionnaire d'e-mails]** erreur de suppression d'e-mail par @jiannx
