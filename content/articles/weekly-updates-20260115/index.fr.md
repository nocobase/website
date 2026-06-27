---
title: "Mises à jour hebdomadaires de NocoBase : Prise en charge du modèle Gemini-3"
description: "La mise à jour de cette semaine inclut : Prise en charge du modèle Gemini-3 avec signature de pensée d'appel de fonction, et plus encore."
---

Résumez les journaux de mise à jour hebdomadaires du produit. Les dernières versions sont disponibles sur [notre blog](https://www.nocobase.com/en/blog/timeline).

**NocoBase est actuellement mis à jour avec trois branches : `main`, `next` et `develop`.**

![version.png](https://static-docs.nocobase.com/ba5f04e27e99c625cb3822da5df07860.png)

* `main` : La version la plus stable à ce jour, recommandée pour l'installation ;
* `next` : Version bêta, contient les nouvelles fonctionnalités à venir et a été testée préliminairement. Il peut y avoir des problèmes connus ou inconnus. Elle est principalement destinée aux utilisateurs testeurs pour recueillir des retours et optimiser davantage les fonctions. Idéale pour les utilisateurs testeurs qui souhaitent découvrir les nouvelles fonctionnalités en avant-première et donner leur avis ;
* `develop` : Version alpha, contient le code de fonctionnalité le plus récent, peut être incomplète ou instable, principalement destinée au développement interne et à l'itération rapide. Adaptée aux utilisateurs techniques intéressés par les fonctionnalités de pointe du produit, mais avec des problèmes potentiels et des fonctions incomplètes. Ne convient pas à une utilisation en production.

## main

![main.png](https://static-docs.nocobase.com/47a3c71734c1d0f908b51f9ebd53c0ac.png)

### [v1.9.36](https://www.nocobase.com/en/blog/v1.9.36)

*Date de sortie : 2026-01-10*

### 🚀 Améliorations

- **[client]** Améliorer les performances de rendu de la liste du gestionnaire de plugins en passant au CSS webkit natif pour les points de suspension de texte ([#8391](https://github.com/nocobase/nocobase/pull/8391)) par @mytharcher

### 🐛 Corrections de bugs

- **[Gestionnaire de fichiers]** Correction du problème où l'URL du fichier était générée incorrectement pour les fichiers téléchargés vers le stockage S3 ([#8392](https://github.com/nocobase/nocobase/pull/8392)) par @mytharcher
- **[Stockage de fichiers : S3(Pro)]** Correction du problème où le mode de renommage des fichiers ne fonctionnait pas par @mytharcher
- **[Workflow : Approbation]** Correction du problème où le bloc de valeur ne s'affichait pas en raison de l'absence du composant `ValueBlock.Result` par @mytharcher

### [v1.9.35](https://www.nocobase.com/en/blog/v1.9.35)

*Date de sortie : 2026-01-09*

### 🚀 Améliorations

- **[Workflow : Approbation]** Simplification des paramètres dans la requête et amélioration des performances par @mytharcher

### 🐛 Corrections de bugs

- **[Workflow : Webhook]** Correction du problème où une erreur 404 était levée lors de l'envoi (POST) vers une URL de webhook dans une sous-application par @mytharcher

### [v1.9.34](https://www.nocobase.com/en/blog/v1.9.34)

*Date de sortie : 2026-01-08*

### 🚀 Améliorations

- **[Contrôle d'accès]** Amélioration des vérifications des autorisations lors de la modification des champs d'association imbriqués ([#7856](https://github.com/nocobase/nocobase/pull/7856)) par @2013xile

### 🐛 Corrections de bugs

- **[client]**

  - Correction du problème où les champs d'association provenant de sources de données externes ne chargeaient pas les données d'association dans les blocs de formulaire ([#8356](https://github.com/nocobase/nocobase/pull/8356)) par @katherinehhh
  - Correction du problème où les champs d'association n'étaient pas corrects dans le composant `FilterAction` ([#8295](https://github.com/nocobase/nocobase/pull/8295)) par @mytharcher
- **[logger]** Correction du problème où des informations d'erreur supplémentaires étaient ignorées lors de l'impression des journaux système ([#8367](https://github.com/nocobase/nocobase/pull/8367)) par @cgyrock
- **[Workflow : Nœud de boucle]** Correction du problème où un nœud ayant échoué dans une branche conditionnelle ne pouvait pas transmettre son statut au nœud de branchement supérieur ([#8360](https://github.com/nocobase/nocobase/pull/8360)) par @mytharcher
- **[Source de données : Principale]** Les métadonnées de la collection de vues doivent inclure les options des champs source ([#8337](https://github.com/nocobase/nocobase/pull/8337)) par @2013xile
- **[Workflow]**

  - Correction du problème de règle de liaison dans le bloc de détail du nœud CC du workflow ([#8381](https://github.com/nocobase/nocobase/pull/8381)) par @zhangzhonghe
  - Ajout de l'ID d'instance à l'ID Snowflake des jobs, pour éviter les conflits d'ID en mode cluster ([#8382](https://github.com/nocobase/nocobase/pull/8382)) par @mytharcher
  - Correction du problème où la page d'exécution plantait lorsque le workflow était supprimé ([#8361](https://github.com/nocobase/nocobase/pull/8361)) par @mytharcher
- **[Action : Importer des enregistrements]** Correction du message d'erreur incorrect lorsqu'une erreur de contrainte unique est déclenchée lors d'une importation XLSX asynchrone ([#8342](https://github.com/nocobase/nocobase/pull/8342)) par @cgyrock
- **[Contrôle d'accès]**

  - Permettre aux champs d'association de s'associer en utilisant les clés cibles ([#8352](https://github.com/nocobase/nocobase/pull/8352)) par @2013xile
  - Correction d'un problème où la source de données était résolue incorrectement lors du traitement des autorisations pour les champs d'association ([#8370](https://github.com/nocobase/nocobase/pull/8370)) par @2013xile
- **[Source de données : API REST]** Ajout d'une tolérance aux pannes pour le contexte de requête, afin d'éviter une erreur lorsque la méthode n'est pas dans le contexte par @mytharcher
- **[Action : Exporter des enregistrements Pro]** Correction d'une erreur lors de l'exécution de tâches d'import/export asynchrones par les sous-applications lorsque l'application principale n'active pas le plugin d'import/export pro par @cgyrock
- **[Workflow : Approbation]** Correction du problème où les champs de filtre ne fonctionnaient pas correctement dans le centre de tâches par @mytharcher

## next

![next.png](https://static-docs.nocobase.com/8ed17a0f08cc585018f6de6c8b13947d.png)

### [v2.0.0-beta.10](https://www.nocobase.com/en/blog/v2.0.0-beta.10)

*Date de sortie : 2026-01-14*

### 🚀 Améliorations

- **[client]** Prise en charge de la spécification du moment où exécuter le flux d'événements. ([#8340](https://github.com/nocobase/nocobase/pull/8340)) par @gchust
- **[Employés IA]**

  - Optimisation du bouton d'entrée IA ([#8414](https://github.com/nocobase/nocobase/pull/8414)) par @heziqiang
  - Masquer le constructeur IA dans la liste des entrées.<br/> Optimisation du flux d'intégration LLM.<br/> Mise à jour de la documentation sur le modèle IA gemini-3. ([#8409](https://github.com/nocobase/nocobase/pull/8409)) par @heziqiang
- **[Notification : Message in-app]** Correction d'un problème de performance lors de l'envoi de messages in-app à un grand nombre d'utilisateurs ([#8402](https://github.com/nocobase/nocobase/pull/8402)) par @mytharcher

### 🐛 Corrections de bugs

- **[client]**

  - le composant de saisie numérique n'affiche pas la valeur ([#8410](https://github.com/nocobase/nocobase/pull/8410)) par @chenos
  - correction du problème où les données de sélection en cascade n'étaient pas effacées après une soumission réussie dans le formulaire de création ([#8403](https://github.com/nocobase/nocobase/pull/8403)) par @katherinehhh
  - correction du problème avec le bouton de soumission où la validation obligatoire ignorée ne fonctionnait pas lorsque la confirmation était activée ([#8400](https://github.com/nocobase/nocobase/pull/8400)) par @katherinehhh
  - résolution du problème où le bouton de soumission apparaissait dans la fenêtre contextuelle de sélection de fichier du champ d'association un-à-un ([#8398](https://github.com/nocobase/nocobase/pull/8398)) par @katherinehhh
  - correction du problème où le paramètre de mise en page dans le bloc de carte en grille ne prenait pas effet ([#8399](https://github.com/nocobase/nocobase/pull/8399)) par @katherinehhh
  - correction pour empêcher l'affectation lorsque des caractères chinois sont saisis dans un champ numérique ([#8397](https://github.com/nocobase/nocobase/pull/8397)) par @katherinehhh
- **[Champ de collection : Plusieurs-à-plusieurs (tableau)]** Correction d'une erreur lors de l'ajout de relations plusieurs-à-plusieurs (tableau) de second niveau dans les requêtes d'association ([#8406](https://github.com/nocobase/nocobase/pull/8406)) par @cgyrock
- **[Multi-espace]**

  - Espace lié lors de l'ajout de données associées par @jiannx
  - La couleur du sélecteur d'espace suit le thème par @jiannx

### [v2.0.0-beta.9](https://www.nocobase.com/en/blog/v2.0.0-beta.9)

*Date de sortie : 2026-01-12*

### 🚀 Améliorations

- **[client]** Améliorer les performances de rendu de la liste du gestionnaire de plugins en passant au CSS webkit natif pour les points de suspension de texte ([#8391](https://github.com/nocobase/nocobase/pull/8391)) par @mytharcher

### 🐛 Corrections de bugs

- **[Gestionnaire de fichiers]** Correction du problème où l'URL du fichier était générée incorrectement pour les fichiers téléchargés vers le stockage S3 ([#8392](https://github.com/nocobase/nocobase/pull/8392)) par @mytharcher
- **[Workflow]** Correction du problème où l'ID du schéma n'était pas mis à jour dans le nœud dupliqué ([#8396](https://github.com/nocobase/nocobase/pull/8396)) par @mytharcher
- **[Stockage de fichiers : S3(Pro)]** Correction du problème où le mode de renommage des fichiers ne fonctionnait pas par @mytharcher
- **[Impression de modèle]** Correction du problème de fenêtre contextuelle de configuration de modèle obscurcie par @zhangzhonghe
- **[Workflow : Approbation]** Correction du problème où le bloc de valeur ne s'affichait pas en raison de l'absence du composant `ValueBlock.Result` par @mytharcher

### [v2.0.0-beta.8](https://www.nocobase.com/en/blog/v2.0.0-beta.8)

*Date de sortie : 2026-01-09*

### 🚀 Améliorations

- **[cli]** prise en charge de la configuration de l'URL de base CDN via env ([#8384](https://github.com/nocobase/nocobase/pull/8384)) par @chenos
- **[Employés IA]** Prise en charge d'Anthropic et Claude-4.5 ([#8389](https://github.com/nocobase/nocobase/pull/8389)) par @heziqiang

### 🐛 Corrections de bugs

- **[client]** correction de la logique d'affinement pour targetKey optionnel ([#8333](https://github.com/nocobase/nocobase/pull/8333)) par @katherinehhh
- **[Workflow : Approbation]** Correction du problème où un enregistrement incorrect était chargé en raison de mauvais paramètres par @mytharcher

### [v2.0.0-beta.7](https://www.nocobase.com/en/blog/v2.0.0-beta.7)

*Date de sortie : 2026-01-09*

### 🎉 Nouvelles fonctionnalités

- **[test]** ajout du contrôle de concurrence au niveau du processus pour le gestionnaire de tâches de base ([#8343](https://github.com/nocobase/nocobase/pull/8343)) par @cgyrock
- **[Employés IA]** Prise en charge du modèle Gemini-3 avec signature de pensée d'appel de fonction ([#8377](https://github.com/nocobase/nocobase/pull/8377)) par @heziqiang

### 🚀 Améliorations

- **[moteur de flux]** Ajout de `rowOrder` à GridModel pour garantir un ordre de ligne cohérent ([#8371](https://github.com/nocobase/nocobase/pull/8371)) par @zhangzhonghe
- **[Employés IA]**

  - Prise en charge de l'édition personnalisée et de la mise à jour automatique des invites système ([#8378](https://github.com/nocobase/nocobase/pull/8378)) par @heziqiang
  - Amélioration de la gestion des erreurs IA pour les services et modèles LLM ([#8351](https://github.com/nocobase/nocobase/pull/8351)) par @heziqiang
- **[Gestionnaire de fichiers]** Ajout d'options de requête pour récupérer un fichier OSS côté serveur si des paramètres ou en-têtes supplémentaires sont nécessaires ([#8372](https://github.com/nocobase/nocobase/pull/8372)) par @mytharcher

### 🐛 Corrections de bugs

- **[client]**

  - Correction d'un problème où un champ d'association pouvait encore ouvrir une fenêtre contextuelle après être passé du composant de sélection d'enregistrement au composant de sélection. ([#8375](https://github.com/nocobase/nocobase/pull/8375)) par @gchust
  - Correction du problème où les règles de liaison n'étaient pas réexécutées après un changement de pagination pour le bloc de détails, le bloc de formulaire d'édition et le bloc de liste. ([#8366](https://github.com/nocobase/nocobase/pull/8366)) par @gchust
  - Correction d'un problème où les champs configurés de sous-tableau/sous-formulaire ne s'affichaient pas lors du basculement aller-retour des composants de champ. ([#8365](https://github.com/nocobase/nocobase/pull/8365)) par @gchust
- **[logger]** Correction du problème où des informations d'erreur supplémentaires étaient ignorées lors de l'impression des journaux système ([#8367](https://github.com/nocobase/nocobase/pull/8367)) par @cgyrock
- **[Bloc : modèle (obsolète)]** Correction d'un problème où la page d'édition des modèles hérités (v1) ne pouvait pas être consultée. ([#8376](https://github.com/nocobase/nocobase/pull/8376)) par @gchust
- **[Workflow]**

  - Ajout de l'ID d'instance à l'ID Snowflake des jobs, pour éviter les conflits d'ID en mode cluster ([#8382](https://github.com/nocobase/nocobase/pull/8382)) par @mytharcher
  - Correction du problème de règle de liaison dans le bloc de détail du nœud CC du workflow ([#8381](https://github.com/nocobase/nocobase/pull/8381)) par @zhangzhonghe
  - Correction du problème où la page d'exécution plantait lorsque le workflow était supprimé ([#8361](https://github.com/nocobase/nocobase/pull/8361)) par @mytharcher
- **[Contrôle d'accès]** Correction d'un problème où la source de données était résolue incorrectement lors du traitement des autorisations pour les champs d'association ([#8370](https://github.com/nocobase/nocobase/pull/8370)) par @2013xile
- **[Source de données : API REST]** Ajout d'une tolérance aux pannes pour le contexte de requête, afin d'éviter une erreur lorsque la méthode n'est pas dans le contexte par @mytharcher

## develop

![develop.png](https://static-docs.nocobase.com/7fcdd9456a17286d8a439eee52bcb8d2.png)

### [v2.0.0-alpha.64](https://www.nocobase.com/en/blog/v2.0.0-alpha.64)

*Date de sortie : 2026-01-08*

### 🎉 Nouvelles fonctionnalités

- **[Employés IA]** Prise en charge du modèle Gemini-3 avec signature de pensée d'appel de fonction ([#8377](https://github.com/nocobase/nocobase/pull/8377)) par @heziqiang

### 🚀 Améliorations

- **[Employés IA]**

  - Amélioration de la gestion des erreurs IA pour les services et modèles LLM ([#8351](https://github.com/nocobase/nocobase/pull/8351)) par @heziqiang
  - Prise en charge de l'édition personnalisée et de la mise à jour automatique des invites système ([#8378](https://github.com/nocobase/nocobase/pull/8378)) par @heziqiang
- **[Gestionnaire de fichiers]** Ajout d'options de requête pour récupérer un fichier OSS côté serveur si des paramètres ou en-têtes supplémentaires sont nécessaires ([#8372](https://github.com/nocobase/nocobase/pull/8372)) par @mytharcher

### 🐛 Corrections de bugs

- **[logger]** Correction du problème où des informations d'erreur supplémentaires étaient ignorées lors de l'impression des journaux système ([#8367](https://github.com/nocobase/nocobase/pull/8367)) par @cgyrock
- **[client]**

  - Correction d'un problème où un champ d'association pouvait encore ouvrir une fenêtre contextuelle après être passé du composant de sélection d'enregistrement au composant de sélection. ([#8375](https://github.com/nocobase/nocobase/pull/8375)) par @gchust
  - Correction du problème où les règles de liaison n'étaient pas réexécutées après un changement de pagination pour le bloc de détails, le bloc de formulaire d'édition et le bloc de liste. ([#8366](https://github.com/nocobase/nocobase/pull/8366)) par @gchust
  - Correction d'un problème où les champs configurés de sous-tableau/sous-formulaire ne s'affichaient pas lors du basculement aller-retour des composants de champ. ([#8365](https://github.com/nocobase/nocobase/pull/8365)) par @gchust
- **[Workflow]**

  - Correction du problème de règle de liaison dans le bloc de détail du nœud CC du workflow ([#8381](https://github.com/nocobase/nocobase/pull/8381)) par @zhangzhonghe
  - Correction du problème où la page d'exécution plantait lorsque le workflow était supprimé ([#8361](https://github.com/nocobase/nocobase/pull/8361)) par @mytharcher
- **[Contrôle d'accès]** Correction d'un problème où la source de données était résolue incorrectement lors du traitement des autorisations pour les champs d'association ([#8370](https://github.com/nocobase/nocobase/pull/8370)) par @2013xile
