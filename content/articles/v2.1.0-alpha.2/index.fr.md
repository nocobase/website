---
title: "NocoBase v2.1.0-alpha.2 : Ajout du contrôle ACL pour les API d'approbation"
description: "Notes de version de v2.1.0-alpha.2"
---

### 🎉 Nouvelles fonctionnalités

- **[Workflow : Approbation]** Ajout du contrôle ACL pour les API d'approbation par @mytharcher
- **[Authentification : DingTalk]** Permet de lier un utilisateur avec `unionId` par @2013xile

### 🚀 Améliorations

- **[IA : Base de connaissances]** Optimisation de la sortie de construction pour réduire la taille du paquet plugin-ai-knowledge-base. par @cgyrock
- **[Multi-espace]** Contrôle d'accès ACL pour les permissions multi-espace par @jiannx
- **[Action : Exportation d'enregistrements Pro]** Amélioration de la portée des données d'exportation basée sur les enregistrements sélectionnés ou les filtres de ressource par @katherinehhh
- **[Workflow : Approbation]**

  - Suppression du support des champs JS par @zhangzhonghe
  - Simplification des paramètres dans les requêtes et amélioration des performances par @mytharcher
  - Implémentation du contrôle d'accès pour les API afin d'empêcher les opérations de données non autorisées par @mytharcher
  - Ajout d'une logique de réparation pour les audiences synchronisées après la migration par @mytharcher
- **[Authentification : DingTalk]** Utilisation de `userid` comme clé par défaut pour l'association utilisateur, tout en préservant la compatibilité avec les authentificateurs existants qui reposent sur le mobile par @2013xile

### 🐛 Corrections de bugs

- **[Multi-espace]**

  - Ajout d'un script de migration pour supprimer x-ready-pretty dans le champ espace par @jiannx
  - Espace lié lors de l'ajout de données associées par @jiannx
  - La couleur du sélecteur d'espace suit le thème par @jiannx
  - Suppression de l'attribut read-pretty pour le champ espace par @jiannx
- **[Composant de champ : masque]** Correction d'un problème où la fenêtre contextuelle des paramètres du champ masque ne pouvait pas charger correctement tous les rôles utilisateur. par @gchust
- **[Action : Importation d'enregistrements Pro]**

  - Correction du problème où le workflow déclenché par une importation asynchrone était retardé dans son exécution par @mytharcher
  - Correction des nombres de comptage dans le résultat d'importation et de la traduction des messages par @mytharcher
- **[IA : Base de connaissances]** Correction du problème où le système ne pouvait pas démarrer après la construction par @cgyrock
- **[Source de données : API REST]** Ajout d'une tolérance aux pannes pour le contexte de requête, afin d'éviter une erreur lorsque la méthode n'est pas dans le contexte par @mytharcher
- **[Workflow : Événement d'action personnalisée]** Correction du problème où les paramètres et la charge utile étaient incorrects lors du déclenchement d'un workflow personnalisé par @mytharcher
- **[Action : Exportation d'enregistrements Pro]** Correction d'une erreur lorsque les sous-applications exécutent des tâches d'import/export asynchrones tandis que l'application principale n'active pas le plugin d'import/export pro par @cgyrock
- **[Workflow : Webhook]**

  - Correction du problème où une erreur 404 était levée lors de l'envoi POST vers l'URL du webhook dans une sous-application par @mytharcher
  - Correction du problème où les données du corps étaient manquantes lorsque l'analyse du corps n'était pas configurée par @mytharcher
- **[Workflow : Sous-flux]** Correction du chemin de route du lien de workflow par @mytharcher
- **[Impression de modèle]**

  - Correction du problème d'affichage de la liste des champs dans la configuration de l'action d'impression de modèle par @katherinehhh
  - Correction du problème où les champs avec la même clé entraînaient des erreurs de rendu par @jiannx
  - Correction du problème de fenêtre contextuelle de configuration de modèle obscurcie par @zhangzhonghe
  - Suppression des boutons de pied de page de la configuration du modèle d'impression par @katherinehhh
  - Correction de la logique de permission incorrecte du bouton d'impression lorsque les rôles étaient unis. par @jiannx
  - Prise en charge du champ espace par @jiannx
  - Affichage des champs d'espace dans la version 2.0 par @jiannx
- **[Stockage de fichiers : S3(Pro)]** Correction du problème où le mode de renommage de fichier ne fonctionnait pas par @mytharcher
- **[Visualisation de données : ECharts]** Correction d'une erreur d'orthographe dans ECharts par @heziqiang
- **[Workflow : Approbation]**

  - Correction du problème où une erreur était levée lors de l'approbation d'un enregistrement supprimé par @mytharcher
  - Correction d'une erreur levée lors de l'exécution en mode "Avant sauvegarde" par @mytharcher
  - Correction du problème où les données d'approbation ne s'affichaient pas dans la fenêtre contextuelle des détails de l'enregistrement si le mode workflow était défini sur "Avant sauvegarde" par @mytharcher
  - Ajout d'une tolérance aux pannes lors de la suppression d'un workflow, pour éviter une erreur de chargement dans la liste des tâches par @mytharcher
  - Correction du problème où des valeurs manquaient dans la fenêtre contextuelle des détails de "Ma demande" par @mytharcher
  - Correction du problème où une erreur était levée dans la fenêtre contextuelle des enregistrements d'approbation 1.x par @mytharcher
  - Correction d'un problème de performance causé par le champ JSON lors du chargement de la liste (MySQL) par @mytharcher
  - Correction d'un identifiant incorrect pour charger l'enregistrement de détail par @mytharcher
  - Correction du problème où la concurrence entraînait une reprise d'exécution répétée par @mytharcher
  - Correction d'une erreur de construction causée par des dépendances manquantes par @mytharcher
  - Correction du problème où un enregistrement incorrect était chargé en raison de paramètres erronés par @mytharcher
  - Correction du problème où le renvoi d'une approbation au nœud précédent revenait au début par @mytharcher
  - Correction d'une erreur levée lors de l'ajout d'un rôle à un utilisateur si le workflow des audiences est désactivé par @mytharcher
  - Correction du problème où le bloc de valeur ne s'affichait pas en raison de l'absence du composant `ValueBlock.Result` par @mytharcher
  - Correction du problème où les champs ne s'affichaient pas sur les cartes de tâches d'approbation par @zhangzhonghe
  - Correction du problème où les champs de filtre ne fonctionnaient pas correctement dans le centre de tâches par @mytharcher
- **[Gestionnaire d'e-mails]**

  - Correction de la chaîne de conversation par @jiannx
  - Correction du lien de réponse Outlook parfois déconnecté par @jiannx
  - Le corps ne se réduit pas lorsque le texte est sélectionné. Correction de l'échec du téléchargement de la pièce jointe par @jiannx
  - Correction du problème des e-mails dans la même boîte aux lettres entre plusieurs utilisateurs et optimisation des performances par @jiannx
  - Ajout de filtres à la gestion par @jiannx
  - Affichage du bouton "Répondre à tous" et la portée des données prend en charge le filtrage des messages enfants. par @jiannx
  - Correction du problème où la fenêtre contextuelle de configuration des e-mails était obscurcie par @zhangzhonghe
- **[WeCom]** Correction d'un problème où les utilisateurs ne pouvaient pas être automatiquement enregistrés lorsque le mobile était manquant par @2013xile
- **[Gestionnaire de migration]** Correction d'un gel potentiel du processus causé par la journalisation d'instructions SQL excessivement volumineuses incluses dans les exceptions d'erreur de migration par @cgyrock
