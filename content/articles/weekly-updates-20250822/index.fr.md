---
title: "Mises à jour hebdomadaires de NocoBase : Optimisations et corrections de bugs"
description: "Les mises à jour de cette semaine incluent : la possibilité d'utiliser un titre de tâche cohérent pour tous les nœuds d'approbation dans un même workflow, l'impression de modèles prenant en charge les tableaux plusieurs-à-plusieurs, et plus encore."
---

Résumez les journaux de mise à jour hebdomadaires du produit. Les dernières versions sont disponibles sur [notre blog](https://www.nocobase.com/en/blog/timeline).

**NocoBase est actuellement mis à jour avec trois branches : `main`, `next` et `develop`.**

![version.png](https://static-docs.nocobase.com/ba5f04e27e99c625cb3822da5df07860.png)

* `main` : La version la plus stable à ce jour, recommandée pour l'installation ;
* `next` : Version bêta, contient les nouvelles fonctionnalités à venir et a été testée préliminairement. Il peut y avoir des problèmes connus ou inconnus. Elle est principalement destinée aux utilisateurs testeurs pour recueillir des retours et optimiser davantage les fonctionnalités. Idéale pour les utilisateurs testeurs qui souhaitent découvrir les nouvelles fonctionnalités en avant-première et donner leur avis ;
* `develop` : Version alpha, contient le code de fonctionnalité le plus récent, peut être incomplète ou instable, principalement destinée au développement interne et à l'itération rapide. Adaptée aux utilisateurs techniques intéressés par les fonctionnalités de pointe du produit, mais avec des problèmes potentiels et des fonctions incomplètes. Ne pas utiliser en production.

## main

![main.png](https://static-docs.nocobase.com/47a3c71734c1d0f908b51f9ebd53c0ac.png)

### [v1.8.18](https://www.nocobase.com/en/blog/v1.8.18)

*Date de sortie : 2025-08-19*

#### 🚀 Améliorations

- **[Workflow]** Mise à jour du menu de sélection de nœud pour afficher les options dans une disposition à deux colonnes afin d'améliorer la densité d'information et de permettre aux utilisateurs de voir plus d'options à la fois ([#7396](https://github.com/nocobase/nocobase/pull/7396)) par @mytharcher
- **[Paramètres de licence]** Dans les paramètres de licence, copier le dernier ID d'instance à chaque fois ([#7387](https://github.com/nocobase/nocobase/pull/7387)) par @jiannx

#### 🐛 Corrections de bugs

- **[client]**

  - traiter le nombre 0 comme vide lors de la validation de vide des règles de liaison ([#7404](https://github.com/nocobase/nocobase/pull/7404)) par @katherinehhh
  - Correction du texte du bouton de lien qui passait à la ligne ([#7406](https://github.com/nocobase/nocobase/pull/7406)) par @mytharcher
- **[Mobile]** format d'affichage incorrect du champ de date sur mobile ([#7412](https://github.com/nocobase/nocobase/pull/7412)) par @katherinehhh
- **[Visionneuse de fichiers Office]** Correction d'une erreur levée lors du téléchargement d'un fichier vers un champ d'URL de pièce jointe ([#7405](https://github.com/nocobase/nocobase/pull/7405)) par @mytharcher
- **[Workflow]** Correction d'une erreur levée et des données de formulaire disparues lors de l'édition d'une catégorie de workflow ([#7408](https://github.com/nocobase/nocobase/pull/7408)) par @mytharcher
- **[Workflow : nœud de messagerie]** Correction du problème où le nœud d'email pouvait ne pas reprendre son exécution correctement ([#7409](https://github.com/nocobase/nocobase/pull/7409)) par @mytharcher
- **[Workflow : Événement d'action personnalisée]** Effacement des lignes sélectionnées après avoir déclenché avec succès des actions sur plusieurs enregistrements par @mytharcher
- **[Impression de modèle]** Impression des champs de sélection radio dans plusieurs lignes de données par @jiannx
- **[Workflow : Approbation]** Correction du problème où le chargement des données de source de données externe dans les enregistrements d'approbation entraînait une erreur 404 par @mytharcher

### [v1.8.17](https://www.nocobase.com/en/blog/v1.8.17)

*Date de sortie : 2025-08-15*

#### 🎉 Nouvelles fonctionnalités

- **[Workflow : Approbation]** Prise en charge de l'utilisation d'un titre de tâche cohérent pour tous les nœuds d'approbation dans un même workflow par @mytharcher

#### 🚀 Améliorations

- **[Authentification]** Suppression du paramètre de jeton de l'URL après une connexion réussie ([#7386](https://github.com/nocobase/nocobase/pull/7386)) par @2013xile
- **[Impression de modèle]** prise en charge du champ m2m array par @jiannx

#### 🐛 Corrections de bugs

- **[Mobile]** Correction du problème où les données de soumission de formulaire dans la boîte de dialogue d'approbation mobile étaient incorrectes ([#7389](https://github.com/nocobase/nocobase/pull/7389)) par @zhangzhonghe
- **[Workflow]** Correction de la traduction du titre de la page dans le centre des tâches du workflow ([#7392](https://github.com/nocobase/nocobase/pull/7392)) par @mytharcher
- **[Calendrier]** info-bulle d'élément d'événement de calendrier affichant [object Object] ([#7372](https://github.com/nocobase/nocobase/pull/7372)) par @katherinehhh
- **[Notification : Message in-app]** Correction des traductions ([#7384](https://github.com/nocobase/nocobase/pull/7384)) par @mytharcher
- **[Gestionnaire de fichiers]** Suppression de l'indication pour la limite de taille de téléchargement de fichier ([#7391](https://github.com/nocobase/nocobase/pull/7391)) par @mytharcher
- **[Stockage de fichiers : S3(Pro)]**

  - Dépréciation du paramètre problématique `attachmentField` par @mytharcher
  - Correction du problème où la méthode d'authentification IAM ne pouvait pas être utilisée pour télécharger des fichiers par @mytharcher

### [v1.8.16](https://www.nocobase.com/en/blog/v1.8.16)

*Date de sortie : 2025-08-14*

#### 🚀 Améliorations

- **[Notification : Message in-app]** Suppression des journaux SQL générés via `console.log` ([#7368](https://github.com/nocobase/nocobase/pull/7368)) par @2013xile

#### 🐛 Corrections de bugs

- **[serveur]** Certaines requêtes manquent de `ctx.action`, ce qui provoque des erreurs dans le middleware du journal d'audit ([#7369](https://github.com/nocobase/nocobase/pull/7369)) par @2013xile
- **[Champ de collection : Formule]** Correction du problème où la saisie de formule ne pouvait pas passer la validation en raison du type de variable ([#7373](https://github.com/nocobase/nocobase/pull/7373)) par @mytharcher
- **[Gestionnaire de sauvegarde]** les sauvegardes de fichiers volumineux pouvaient afficher « réussi » avant d'être réellement terminées par @gchust
