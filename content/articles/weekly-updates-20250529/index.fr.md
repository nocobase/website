---
title: "Mises à jour hebdomadaires de NocoBase : Optimisations et corrections de bugs"
description: "Les mises à jour de cette semaine incluent : prise en charge des variables d'agrégation personnalisées, décalage personnalisé dans les filtres de champ de date, et plus encore."
---

Résumez les journaux de mise à jour hebdomadaires du produit. Les dernières versions sont disponibles sur [notre blog](https://www.nocobase.com/en/blog/timeline).

**NocoBase est actuellement mis à jour avec trois branches : `main`, `next` et `develop`.**

![version.png](https://static-docs.nocobase.com/ba5f04e27e99c625cb3822da5df07860.png)

* `main` : La version la plus stable à ce jour, recommandée pour l'installation ;
* `next` : Version bêta, contient les nouvelles fonctionnalités à venir et a été testée préliminairement. Il peut y avoir des problèmes connus ou inconnus. Elle est principalement destinée aux utilisateurs de test pour recueillir des retours et optimiser davantage les fonctions. Idéale pour les utilisateurs de test qui souhaitent découvrir les nouvelles fonctionnalités en avant-première et donner leur avis ;
* `develop` : Version alpha, contient le code de fonctionnalité le plus récent, peut être incomplète ou instable, principalement destinée au développement interne et à l'itération rapide. Adaptée aux utilisateurs techniques intéressés par les fonctionnalités de pointe du produit, mais avec des problèmes potentiels et des fonctions incomplètes. Ne pas utiliser en production.

## main

![main.png](https://static-docs.nocobase.com/47a3c71734c1d0f908b51f9ebd53c0ac.png)

### [v1.6.33](https://www.nocobase.com/en/blog/v1.6.33)

*Date de sortie : 2025-05-23*

#### 🚀 Améliorations

- **[non défini]** Construire l'image docker complète ([#6898](https://github.com/nocobase/nocobase/pull/6898)) par @chenos
- **[client]** Optimiser le problème des pages devenant de plus en plus lentes avec l'utilisation ([#6888](https://github.com/nocobase/nocobase/pull/6888)) par @zhangzhonghe
- **[Calendrier]** support d'un bouton d'actualisation configurable dans le bloc calendrier ([#6920](https://github.com/nocobase/nocobase/pull/6920)) par @katherinehhh
- **[Workflow : Événement d'action personnalisée]** Correction des locales en-US basées sur les clés zh-CN par @mytharcher
- **[Workflow : Approbation]** Prise en charge de l'exécution de toutes les tâches dans le centre de tâches du workflow par @mytharcher

#### 🐛 Corrections de bugs

- **[client]**

  - erreur de rendu causée par un format de style invalide lors de l'ajout d'un champ d'association ([#6903](https://github.com/nocobase/nocobase/pull/6903)) par @katherinehhh
  - vérification incorrecte de la valeur vide pour le champ d'association toMany dans une règle de liaison ([#6905](https://github.com/nocobase/nocobase/pull/6905)) par @katherinehhh
- **[Champ de collection : Markdown(Vditor)]** champ markdown (Vditor) ne s'adaptant pas au thème ([#6919](https://github.com/nocobase/nocobase/pull/6919)) par @katherinehhh
- **[Collection : Arborescente]** Éviter les mises à jour incorrectes des préfixes de chemin similaires lors des mises à jour de chemin ([#6913](https://github.com/nocobase/nocobase/pull/6913)) par @2013xile
- **[Gestionnaire de fichiers]**

  - Correction de la règle de correspondance de l'aperçu ([#6902](https://github.com/nocobase/nocobase/pull/6902)) par @mytharcher
  - Correction de l'injection de collection client et du paramètre de téléchargement ([#6909](https://github.com/nocobase/nocobase/pull/6909)) par @mytharcher
  - Correction de l'URL d'aperçu sur les fichiers non-image ([#6889](https://github.com/nocobase/nocobase/pull/6889)) par @mytharcher
- **[Workflow : nœud de messagerie]** Gérer le champ 'to' non défini et améliorer le traitement des destinataires d'e-mails. ([#6915](https://github.com/nocobase/nocobase/pull/6915)) par @sheldon66
- **[Workflow : Événement d'action personnalisée]**

  - Correction du bouton qui s'exécute incorrectement après quelques clics par @mytharcher
  - Correction du gestionnaire d'erreurs qui ne peut pas être mis en correspondance par classe par @mytharcher
- **[Workflow : Approbation]** Correction du calcul des ajouts d'association par @mytharcher

### [v1.6.34](https://www.nocobase.com/en/blog/v1.6.34)

*Date de sortie : 2025-05-27*

#### 🎉 Nouvelles fonctionnalités

- **[Action : Importer des enregistrements Pro]**
  - Prise en charge de la définition d'enregistrements uniques par plusieurs champs lors des paramètres d'importation par @aaaaaajie
  - Prise en charge des paramètres pour écraser les cellules vides et les ignorer lors des paramètres d'importation par @aaaaaajie

#### 🚀 Améliorations

- **[non défini]** Mise à niveau de la version de Node vers 20 pour CI ([#6927](https://github.com/nocobase/nocobase/pull/6927)) par @mytharcher

#### 🐛 Corrections de bugs

- **[client]**

  - échec de la vérification de la condition noneOf dans les règles de liaison ([#6934](https://github.com/nocobase/nocobase/pull/6934)) par @katherinehhh
  - paramètre de hauteur de bloc non appliqué en temps réel ([#6904](https://github.com/nocobase/nocobase/pull/6904)) par @katherinehhh
- **[non défini]** Utiliser Node 20 en raison des exigences du package commander ([#6924](https://github.com/nocobase/nocobase/pull/6924)) par @mytharcher
- **[base de données]** Correction de la génération automatique uuid ou nanoid ne fonctionnant pas dans l'association plusieurs-à-plusieurs ([#6912](https://github.com/nocobase/nocobase/pull/6912)) par @aaaaaajie
- **[Action : Exporter des enregistrements]** Correction d'un problème où les relations imbriquées ne parvenaient pas à être exportées correctement. ([#6917](https://github.com/nocobase/nocobase/pull/6917)) par @aaaaaajie
- **[Gestionnaire de source de données]** Résoudre le problème de tri par glisser-déposer ne fonctionnant pas ([#6937](https://github.com/nocobase/nocobase/pull/6937)) par @chenos
- **[Documentation API]** Ajout des informations de sous-application manquantes à req.headers ([#6933](https://github.com/nocobase/nocobase/pull/6933)) par @chenos
- **[Notification : Message in-app]** Résolution d'un problème où l'action "marquer tout comme lu" dans les messages in-app pouvait affecter les données d'autres utilisateurs. ([#6926](https://github.com/nocobase/nocobase/pull/6926)) par @sheldon66
- **[Workflow : Événement d'action personnalisée]** Éviter l'erreur causée par l'ordre de chargement du plugin par @mytharcher
- **[Stockage de fichiers : S3(Pro)]**

  - Correction de l'URL d'aperçu et du paramètre de téléchargement par @mytharcher
  - Correction des paramètres de téléchargement en double par @mytharcher
- **[Bloc : Formulaire multi-étapes]** Correction des types par @mytharcher
- **[Workflow : Approbation]**

  - Correction de l'ID d'enregistrement incorrect pour ViewAction par @mytharcher
  - Correction des ajouts et du calcul des données avant de soumettre le processus d'approbation par @mytharcher

## next

![next.png](https://static-docs.nocobase.com/8ed17a0f08cc585018f6de6c8b13947d.png)

### [v1.7.0-beta.34](https://www.nocobase.com/en/blog/v1.7.0-beta.34)

*Date de sortie : 2025-05-28*

#### 🎉 Nouvelles fonctionnalités

- **[non défini]** Nouveau support pour Gitpod vous permet de démarrer l'environnement de développement en un clic et de commencer rapidement le développement. ([#6922](https://github.com/nocobase/nocobase/pull/6922)) par @kerwin612
- **[Action : Importer des enregistrements Pro]**

  - Prise en charge de la définition d'enregistrements uniques par plusieurs champs lors des paramètres d'importation par @aaaaaajie
  - Prise en charge des paramètres pour écraser les cellules vides et les ignorer lors des paramètres d'importation par @aaaaaajie
- **[Champ de collection : Code]** Ajout des paramètres de hauteur pour le champ de l'éditeur de code par @mytharcher
- **[Gestionnaire d'e-mails]**

  - prise en charge du marquage des e-mails comme à faire et ajout de note par @jiannx
  - prise en charge des libellés et des paramètres de combinaison par @jiannx

#### 🚀 Améliorations

- **[client]**

  - amélioration des styles pour le composant de filtre de plage de dates ([#6939](https://github.com/nocobase/nocobase/pull/6939)) par @katherinehhh
  - Correction du problème où les contrôles de formulaire masqués capturaient la touche de tabulation, améliorant considérablement l'efficacité de l'opération du formulaire ([#6942](https://github.com/nocobase/nocobase/pull/6942)) par @kerwin612
  - validation des champs obligatoires avant d'afficher la boîte de dialogue de confirmation ([#6931](https://github.com/nocobase/nocobase/pull/6931)) par @katherinehhh
  - ajustement de l'affichage du contenu de l'option de filtre de date ([#6928](https://github.com/nocobase/nocobase/pull/6928)) par @katherinehhh
- **[non défini]** Mise à niveau de la version de Node vers 20 pour CI ([#6927](https://github.com/nocobase/nocobase/pull/6927)) par @mytharcher

#### 🐛 Corrections de bugs

- **[client]**

  - paramètre de visibilité des deux-points de l'étiquette du formulaire ne fonctionnant pas ([#6947](https://github.com/nocobase/nocobase/pull/6947)) par @katherinehhh
  - Redimensionnement du bloc par glissement ne fonctionnant pas ([#6944](https://github.com/nocobase/nocobase/pull/6944)) par @chenos
  - i18n du composant d'affectation de champ ne fonctionnant pas ([#6945](https://github.com/nocobase/nocobase/pull/6945)) par @katherinehhh
  - échec de la vérification de la condition noneOf dans les règles de liaison ([#6934](https://github.com/nocobase/nocobase/pull/6934)) par @katherinehhh
  - variables de condition imbriquées dans les règles de liaison ne s'affichant pas correctement ([#6929](https://github.com/nocobase/nocobase/pull/6929)) par @katherinehhh
  - paramètre de hauteur de bloc non appliqué en temps réel ([#6904](https://github.com/nocobase/nocobase/pull/6904)) par @katherinehhh
  - Correction du problème avec le bouton de copie dans la fenêtre contextuelle d'erreur copiant comme [object Object]. ([#6908](https://github.com/nocobase/nocobase/pull/6908)) par @kerwin612
  - analyse incorrecte de la variable de date dans la limite de plage de dates ([#6930](https://github.com/nocobase/nocobase/pull/6930)) par @katherinehhh
- **[base de données]** Correction de la génération automatique uuid ou nanoid ne fonctionnant pas dans l'association plusieurs-à-plusieurs ([#6912](https://github.com/nocobase/nocobase/pull/6912)) par @aaaaaajie
- **[non défini]** Utiliser Node 20 en raison des exigences du package commander ([#6924](https://github.com/nocobase/nocobase/pull/6924)) par @mytharcher
- **[Champ de collection : Markdown(Vditor)]** problème de largeur du composant du champ markdown-vditor après un zoom avant et arrière ([#6946](https://github.com/nocobase/nocobase/pull/6946)) par @katherinehhh
- **[Documentation API]** Ajout des informations de sous-application manquantes à req.headers ([#6933](https://github.com/nocobase/nocobase/pull/6933)) par @chenos
- **[Notification : Message in-app]** Résolution d'un problème où l'action "marquer tout comme lu" dans les messages in-app pouvait affecter les données d'autres utilisateurs. ([#6926](https://github.com/nocobase/nocobase/pull/6926)) par @sheldon66
- **[Gestionnaire de source de données]** Résoudre le problème de tri par glisser-déposer ne fonctionnant pas ([#6937](https://github.com/nocobase/nocobase/pull/6937)) par @chenos
- **[Action : Exporter des enregistrements]** Correction d'un problème où les relations imbriquées ne parvenaient pas à être exportées correctement. ([#6917](https://github.com/nocobase/nocobase/pull/6917)) par @aaaaaajie
- **[Workflow : Événement d'action personnalisée]** Éviter l'erreur causée par l'ordre de chargement du plugin par @mytharcher
- **[Stockage de fichiers : S3(Pro)]**

  - Correction des paramètres de téléchargement en double par @mytharcher
  - Correction de l'URL d'aperçu et du paramètre de téléchargement par @mytharcher
- **[Bloc : Formulaire multi-étapes]** Correction des types par @mytharcher
- **[Workflow : Approbation]**

  - Correction de l'ID d'enregistrement incorrect pour ViewAction par @mytharcher
  - Correction des locales par @mytharcher
  - Correction des ajouts et du calcul des données avant de soumettre le processus d'approbation par @mytharcher
- **[Gestionnaire d'e-mails]**

  - correction : suppression de la colonne d'action par @jiannx
  - correction de l'erreur du modal d'ajout de note par @jiannx
  - correction des autorisations de l'API des collections mailMessageNotes et mailMessageLabels par @jiannx

## develop

![develop.png](https://static-docs.nocobase.com/7fcdd9456a17286d8a439eee52bcb8d2.png)

### [v1.7.0-alpha.15](https://www.nocobase.com/en/blog/v1.7.0-alpha.15)

*Date de sortie : 2025-05-28*

#### 🎉 Nouvelles fonctionnalités

- **[client]** Prise en charge des variables d'agrégation personnalisées ([#6916](https://github.com/nocobase/nocobase/pull/6916)) par @zhangzhonghe
  Référence : [Variables personnalisées](https://pr-383.docs-cn.nocobase.com/handbook/custom-variables)
- **[utils]** prise en charge du décalage personnalisé dans les filtres de champ de date ([#6854](https://github.com/nocobase/nocobase/pull/6854)) par @katherinehhh
- **[Champ de collection : Code]** Ajout des paramètres de hauteur pour le champ de l'éditeur de code par @mytharcher
- **[Action : Importer des enregistrements Pro]**

  - Prise en charge de la définition d'enregistrements uniques par plusieurs champs lors des paramètres d'importation par @aaaaaajie
  - Prise en charge des paramètres pour écraser les cellules vides et les ignorer lors des paramètres d'importation par @aaaaaajie
- **[Variables personnalisées]** Prise en charge des variables d'agrégation personnalisées par @zhangzhonghe
  Référence : [Variables personnalisées](https://pr-383.docs-cn.nocobase.com/handbook/custom-variables)
- **[Gestionnaire d'e-mails]**

  - prise en charge du marquage des e-mails comme à faire et ajout de note par @jiannx
  - prise en charge des libellés et des paramètres de combinaison par @jiannx

#### 🚀 Améliorations

- **[client]** ajustement de l'affichage du contenu de l'option de filtre de date ([#6928](https://github.com/nocobase/nocobase/pull/6928)) par @katherinehhh
- **[non défini]** Mise à niveau de la version de Node vers 20 pour CI ([#6927](https://github.com/nocobase/nocobase/pull/6927)) par @mytharcher
- **[Calendrier]** support d'un bouton d'actualisation configurable dans le bloc calendrier ([#6920](https://github.com/nocobase/nocobase/pull/6920)) par @katherinehhh
- **[Action : Importer des enregistrements]**

  - Optimisation des performances d'importation xlsx ([#6850](https://github.com/nocobase/nocobase/pull/6850)) par @aaaaaajie
  - Optimisation des performances d'importation xlsx ([#6850](https://github.com/nocobase/nocobase/pull/6850)) par @aaaaaajie
- **[Action : Exporter des enregistrements]** Optimisation des performances pour l'exportation vers XLSX ([#6729](https://github.com/nocobase/nocobase/pull/6729)) par @aaaaaajie
- **[Bloc : iframe]** amélioration de la logique d'affectation des variables de date ([#6828](https://github.com/nocobase/nocobase/pull/6828)) par @katherinehhh
- **[Workflow : Événement d'action personnalisée]** Correction des locales en-US basées sur les clés zh-CN par @mytharcher
- **[Action : Exporter des enregistrements Pro]** Optimisation des performances pour l'exportation vers XLSX par @aaaaaajie
- **[Workflow : Approbation]** Prise en charge de l'exécution de toutes les tâches dans le centre de tâches du workflow par @mytharcher
- **[Gestionnaire d'e-mails]** implémentation du schéma puis envoi d'e-mail et support de l'IA par @jiannx

#### 🐛 Corrections de bugs

- **[base de données]** Correction de la génération automatique uuid ou nanoid ne fonctionnant pas dans l'association plusieurs-à-plusieurs ([#6912](https://github.com/nocobase/nocobase/pull/6912)) par @aaaaaajie
- **[client]**

  - échec de la vérification de la condition noneOf dans les règles de liaison ([#6934](https://github.com/nocobase/nocobase/pull/6934)) par @katherinehhh
  - paramètre de hauteur de bloc non appliqué en temps réel ([#6904](https://github.com/nocobase/nocobase/pull/6904)) par @katherinehhh
  - variables de condition imbriquées dans les règles de liaison ne s'affichant pas correctement ([#6929](https://github.com/nocobase/nocobase/pull/6929)) par @katherinehhh
  - analyse incorrecte de la variable de date dans la limite de plage de dates ([#6930](https://github.com/nocobase/nocobase/pull/6930)) par @katherinehhh
  - vérification incorrecte de la valeur vide pour le champ d'association toMany dans une règle de liaison ([#6905](https://github.com/nocobase/nocobase/pull/6905)) par @katherinehhh
  - erreur de rendu causée par un format de style invalide lors de l'ajout d'un champ d'association ([#6903](https://github.com/nocobase/nocobase/pull/6903)) par @katherinehhh
  - variable d'objet actuel manquante dans la règle de liaison à l'intérieur d'un sous-tableau ([#6907](https://github.com/nocobase/nocobase/pull/6907)) par @katherinehhh
- **[non défini]** Utiliser Node 20 en raison des exigences du package commander ([#6924](https://github.com/nocobase/nocobase/pull/6924)) par @mytharcher
- **[Gestionnaire de source de données]** Résoudre le problème de tri par glisser-déposer ne fonctionnant pas ([#6937](https://github.com/nocobase/nocobase/pull/6937)) par @chenos
- **[Documentation API]** Ajout des informations de sous-application manquantes à req.headers ([#6933](https://github.com/nocobase/nocobase/pull/6933)) par @chenos
- **[Notification : Message in-app]** Résolution d'un problème où l'action "marquer tout comme lu" dans les messages in-app pouvait affecter les données d'autres utilisateurs. ([#6926](https://github.com/nocobase/nocobase/pull/6926)) par @sheldon66
- **[Action : Exporter des enregistrements]** Correction d'un problème où les relations imbriquées ne parvenaient pas à être exportées correctement. ([#6917](https://github.com/nocobase/nocobase/pull/6917)) par @aaaaaajie
- **[Champ de collection : Markdown(Vditor)]** champ markdown (Vditor) ne s'adaptant pas au thème ([#6919](https://github.com/nocobase/nocobase/pull/6919)) par @katherinehhh
- **[Collection : Arborescente]** Éviter les mises à jour incorrectes des préfixes de chemin similaires lors des mises à jour de chemin ([#6913](https://github.com/nocobase/nocobase/pull/6913)) par @2013xile
- **[Workflow : nœud de messagerie]** Gérer le champ 'to' non défini et améliorer le traitement des destinataires d'e-mails. ([#6915](https://github.com/nocobase/nocobase/pull/6915)) par @sheldon66
- **[Vérification]** Correction du nom anglais incorrect : “verificators” → “verifiers” ([#6834](https://github.com/nocobase/nocobase/pull/6834)) par @2013xile
- **[Gestionnaire de fichiers]**

  - Correction de l'injection de collection client et du paramètre de téléchargement ([#6909](https://github.com/nocobase/nocobase/pull/6909)) par @mytharcher
  - Correction de la règle de correspondance de l'aperçu ([#6902](https://github.com/nocobase/nocobase/pull/6902)) par @mytharcher
- **[Workflow : Événement d'action personnalisée]**

  - Éviter l'erreur causée par l'ordre de chargement du plugin par @mytharcher
  - Correction du gestionnaire d'erreurs qui ne peut pas être mis en correspondance par classe par @mytharcher
  - Correction du bouton qui s'exécute incorrectement après quelques clics par @mytharcher
- **[Filtre multi-mots-clés]** Supprimer les espaces blancs de chaque côté de chaque mot-clé par @zhangzhonghe
- **[Authentification à deux facteurs (2FA)]** Nécessite qu'un vérificateur soit configuré lors de l'activation de la 2FA par @2013xile
- **[Stockage de fichiers : S3(Pro)]**

  - Correction des paramètres de téléchargement en double par @mytharcher
  - Correction de l'URL d'aperçu et du paramètre de téléchargement par @mytharcher
- **[Impression de modèle]** Améliorer la logique hasChildren dans useFieldsTree pour inclure la vérification de l'énumération uiSchema. par @sheldon66
- **[Bloc : Formulaire multi-étapes]** Correction des types par @mytharcher
- **[Workflow : Approbation]**

  - Correction des locales par @mytharcher
  - Correction des ajouts et du calcul des données avant de soumettre le processus d'approbation par @mytharcher
  - Correction du calcul des ajouts d'association par @mytharcher
  - Correction de l'ID d'enregistrement incorrect pour ViewAction par @mytharcher
- **[Gestionnaire d'e-mails]**

  - correction des autorisations de l'API des collections mailMessageNotes et mailMessageLabels par @jiannx
  - correction de l'erreur du modal d'ajout de note par @jiannx
  - correction : suppression de la colonne d'action par @jiannx
