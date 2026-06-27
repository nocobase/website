---
title: "NocoBase v1.7.0 officiellement publiée"
description: "Gestion des autorisations améliorée, performances système optimisées et plugins open source pour améliorer globalement les fonctionnalités et l'expérience utilisateur"
---

## Nouvelle fonctionnalité

### Union des rôles

L'union des rôles est un mode de gestion des permissions. Selon les paramètres système, les développeurs peuvent choisir d'utiliser `Rôles indépendants`, `Autoriser l'union des rôles` ou `Autoriser l'union des rôles`, afin de répondre à différents besoins en matière de permissions.

![20250312184651](https://static-docs.nocobase.com/20250312184651.png)

Référence : [Union des rôles](https://docs.nocobase.com/handbook/acl/manual)

### Vérification et authentification à deux facteurs (2FA)

La fonctionnalité originale de code de vérification a été mise à niveau vers un système complet de gestion de la vérification, prenant en charge plusieurs méthodes d'authentification (telles que TOTP). Le système prend également en charge l'authentification à deux facteurs (2FA), qui nécessite une étape de vérification supplémentaire lors de la connexion, en plus du mot de passe, améliorant considérablement la sécurité du compte.

![20250603133219_rec_-vg5hh3.gif](https://static-docs.nocobase.com/20250603133219_rec_-vg5hh3.gif)

Référence :

* [Vérification](https://docs.nocobase.com/handbook/verification)
* [Authentification à deux facteurs](https://docs.nocobase.com/handbook/two-factor-authentication)
* [Authentificateur TOTP](https://docs.nocobase.com/handbook/verification-totp-authenticator)

### Impression de modèles

L'impression de modèles prend désormais en charge le rendu d'images dynamiques et de codes-barres.

![](https://static-docs.nocobase.com/20250414211130-2025-04-14-21-11-31.png)

Référence : [Impression de modèles](https://docs-cn.nocobase.com/handbook/action-template-print#%E5%9C%A8-docx-%E6%96%87%E4%BB%B6%E4%B8%AD%E6%8F%92%E5%85%A5%E5%8A%A8%E6%80%81%E5%9B%BE%E7%89%87)

### Filtre par mots-clés multiples

Le plugin de filtre par mots-clés multiples ajoute de puissantes capacités de filtrage de texte à la plateforme NocoBase, vous permettant de filtrer les données à l'aide de plusieurs mots-clés et améliorant considérablement la flexibilité et l'efficacité des requêtes de données.

![20250603152726_rec_-ix3j8w.gif](https://static-docs.nocobase.com/20250603152726_rec_-ix3j8w.gif)

Référence : [Filtre par mots-clés multiples](https://docs.nocobase.com/handbook/multi-keyword-filter)

### Le filtre de date prend en charge la sélection d'une plage de dates relative

Prend en charge le filtrage par décalages temporels personnalisés (jours/semaines/mois/trimestres/années) et dates spécifiques, permettant des requêtes de plage de temps plus flexibles.

![20250603130948_rec_-plwa6o.gif](https://static-docs.nocobase.com/20250603130948_rec_-plwa6o.gif)

### Variables de gauche

Les variables de gauche dans une condition sont utilisées pour définir « l'objet jugé » dans la règle de liaison, c'est-à-dire que la condition évaluera la valeur de cette variable pour déterminer si le comportement de liaison doit être déclenché.

![20250417214217](https://static-docs.nocobase.com/20250417214217.png)

Référence : [Variables de gauche](https://docs.nocobase.com/handbook/ui/linkage-rule#left-side-variables)

### Modèle hérité

Les modèles hérités sont idéaux lorsque vous souhaitez que les blocs suivent les mises à jour de base d'un modèle tout en permettant des modifications spécifiques. Les blocs héritent des paramètres du modèle et peuvent les étendre ou les remplacer. Les paramètres non modifiés dans le bloc seront automatiquement mis à jour avec le modèle.

![Interface principale](https://static-docs.nocobase.com/main-screen-block-templates.png)

Référence : [Modèle hérité](https://docs.nocobase.com/handbook/block-template#inherited-template)

### Règles de liaison de blocs

Les règles de liaison de blocs permettent aux utilisateurs de contrôler dynamiquement la visibilité des blocs, permettant la gestion de l'affichage des éléments au niveau du bloc.

![image-ccerr7.png](https://static-docs.nocobase.com/image-ccerr7.png)

Référence : [Règles de liaison de blocs](https://docs.nocobase.com/handbook/ui/blocks/block-settings/block-linkage-rule)

### Après une soumission réussie

Après une soumission réussie, prend en charge l'actualisation des données dans d'autres blocs et la navigation vers les pages de détail avec des paramètres.

![image-v29vlv.png](https://static-docs.nocobase.com/image-v29vlv.png)

Référence : [Après une soumission réussie](https://docs.nocobase.com/handbook/ui/actions/action-settings/affter-successful)

### Gestion des catégories de workflows

![1-62ogb6.png](https://static-docs.nocobase.com/1-62ogb6.png)

### Plugins open source pour le département et l'URL des pièces jointes

![image-br8u55.png](https://static-docs.nocobase.com/image-br8u55.png)

## Améliorations

### Améliorations des propriétés des règles de liaison

* Les champs sélectionnables prennent désormais en charge les options configurables
* Les champs de date prennent désormais en charge la définition d'une plage de dates

![20250603143237_rec_-k8hene.gif](https://static-docs.nocobase.com/20250603143237_rec_-k8hene.gif)

Référence : [Règles de liaison de champs](https://docs.nocobase.com/handbook/ui/blocks/block-settings/field-linkage-rule)

### Import Pro

La configuration d'importation prend désormais en charge l'utilisation de plusieurs champs pour identifier de manière unique les enregistrements, ainsi que des options pour écraser ou ignorer les cellules vides lors de l'importation.

![20250603153457_rec_-9zfsfx.gif](https://static-docs.nocobase.com/20250603153457_rec_-9zfsfx.gif)

Référence : [Import Pro](https://docs.nocobase.com/handbook/action-import-pro)

### Optimisation des performances pour l'exportation XLSX

* Débordement de mémoire et blocage de l'application lors de l'exportation de grandes tables de données
* Il existe une probabilité de données en double dans les données exportées
* Optimisation des requêtes pour les données exportées basée sur les index, les contraintes uniques et les stratégies d'index
* Ajouter une file d'attente d'exportation concurrente et définir le nombre de concurrences via des variables d'environnement.

![20250505171706](https://nocobase-docs.oss-cn-beijing.aliyuncs.com/20250505171706.png)

Référence :

* [Exportations concurrentes](https://docs.nocobase.com/handbook/action-export-pro#concurrent-exports)
* [À propos des performances](https://docs.nocobase.com/handbook/action-export-pro#about-performance)

### Optimisation des performances pour l'importation de fichiers XLSX

* Changer la stratégie d'importation d'une seule ligne en insertion par lots
* Reconstruire le mécanisme d'identification des doublons. Passer d'un traitement ligne par ligne à un traitement par lots tout en conservant la logique de mise à jour et le déclenchement du workflow inchangés

Référence : [À propos des performances](https://docs.nocobase.com/handbook/action-import-pro#about-performance)

### Efficacité d'exécution du workflow améliorée de 100 %

![image-ligrnm.png](https://static-docs.nocobase.com/image-ligrnm.png)
