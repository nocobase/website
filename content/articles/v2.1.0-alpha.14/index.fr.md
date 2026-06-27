---
title: "NocoBase v2.1.0-alpha.14 : Ajout de la capacité d'invoquer des sous-agents pour les employés IA"
description: "Notes de version de v2.1.0-alpha.14"
---

### 🎉 Nouvelles fonctionnalités

- **[Employés IA]** Ajout de la possibilité d'invoquer des sous-agents pour les employés IA ([#8935](https://github.com/nocobase/nocobase/pull/8935)) par @cgyrock

- **[IA : Serveur MCP]** Fournit une API de requête de collection de données générique, appelable via MCP ([#8985](https://github.com/nocobase/nocobase/pull/8985)) par @2013xile

### 🚀 Améliorations

- **[non défini]**
  - Ajout d'une table des matières au README ([#8878](https://github.com/nocobase/nocobase/pull/8878)) par @gaston98765

  - Réduction du bruit des logs lors du démarrage du serveur en rendant silencieuses les commandes de décompression pour LibreOffice et Oracle Instant Client ([#8984](https://github.com/nocobase/nocobase/pull/8984)) par @Rishabh1925

- **[Moteur de flux]** Ajout de nouvelles API pour la construction d'interface utilisateur. ([#8992](https://github.com/nocobase/nocobase/pull/8992)) par @gchust

- **[Workflow]** Changement de la taille du bouton d'activation en petit ([#9010](https://github.com/nocobase/nocobase/pull/9010)) par @mytharcher

- **[Employés IA]** Optimisation des invites pour deepseek lors du traitement de types de fichiers non pris en charge ([#9003](https://github.com/nocobase/nocobase/pull/9003)) par @cgyrock

- **[Action : Requête personnalisée]** Ajout de modèles d'action pour les requêtes personnalisées ([#8890](https://github.com/nocobase/nocobase/pull/8890)) par @jiannx

- **[Workflow : JavaScript]** Ajout de `isolated-vm` comme moteur d'exécution JavaScript par défaut pour le nœud JavaScript ([#8973](https://github.com/nocobase/nocobase/pull/8973)) par @mytharcher
Référence : [Nœud JavaScript](https://docs.nocobase.com/cn/workflow/nodes/javascript)
### 🐛 Corrections de bugs

- **[serveur]**
  - Ajout d'une vérification de service pour éviter que le statut de l'application ne soit mis à jour par une instance non active ([#8959](https://github.com/nocobase/nocobase/pull/8959)) par @mytharcher

  - Prise en charge de l'obtention de l'application cible par nom d'hôte ([#8978](https://github.com/nocobase/nocobase/pull/8978)) par @2013xile

- **[client]**
  - Échec de l'enregistrement du champ de relation de sous-formulaire ([#9004](https://github.com/nocobase/nocobase/pull/9004)) par @jiannx

  - Les sous-formulaires des champs n'affichent pas les données ([#9008](https://github.com/nocobase/nocobase/pull/9008)) par @jiannx

  - Correction du problème où la copie des champs associés dans le tableau n'était pas correctement affichée lors du premier rendu. ([#9007](https://github.com/nocobase/nocobase/pull/9007)) par @jiannx

  - Correction d'un message de confirmation secondaire incorrect lors de la fermeture d'une fenêtre contextuelle à plusieurs niveaux après modification des données du formulaire. ([#8944](https://github.com/nocobase/nocobase/pull/8944)) par @gchust

  - Correction du problème où un espace dans une expression de variable empêchait l'affichage du libellé ([#8988](https://github.com/nocobase/nocobase/pull/8988)) par @mytharcher

- **[moteur de flux]**
  - Correction des menus de paramètres tronqués dans les fenêtres contextuelles ([#9005](https://github.com/nocobase/nocobase/pull/9005)) par @gchust

  - Correction d'un problème où les éléments de menu ne pouvaient pas être sélectionnés lorsque la largeur du composant d'interface utilisateur en état de configuration était trop petite. ([#8954](https://github.com/nocobase/nocobase/pull/8954)) par @gchust

  - Ajout d'extraits JS pour les éléments de formulaire de paramètres et les éléments de détail ([#8974](https://github.com/nocobase/nocobase/pull/8974)) par @jiannx

- **[Workflow : nœud de messagerie]** Correction de la validation pour les champs de variable ([#9047](https://github.com/nocobase/nocobase/pull/9047)) par @mytharcher

- **[Champ de collection : Tri]** correction(field-sort) : empêcher le plantage lorsque l'attribut scopeKey est indéfini ([#9019](https://github.com/nocobase/nocobase/pull/9019)) par @gaston98765

- **[Employés IA]**
  - Correction du problème où les employés IA ne pouvaient pas utiliser les compétences ([#9023](https://github.com/nocobase/nocobase/pull/9023)) par @cgyrock

  - Correction du problème où le LLM tentait encore de charger les compétences après la désactivation de l'outil getSkill ([#9013](https://github.com/nocobase/nocobase/pull/9013)) par @cgyrock

  - Correction du problème de comportement anormal de la recherche web lors de l'utilisation du LLM Qwen ([#9012](https://github.com/nocobase/nocobase/pull/9012)) par @cgyrock

  - Ajout d'une vérification de propriété à l'API de conversation IA ([#8993](https://github.com/nocobase/nocobase/pull/8993)) par @cgyrock

- **[Bloc : GridCard]** Correction du problème où le bouton n'était pas rafraîchi lors du rafraîchissement de la carte en grille ([#9021](https://github.com/nocobase/nocobase/pull/9021)) par @jiannx

- **[Workflow]**
  - Correction d'une règle de validation incorrecte de l'instruction de condition ([#9017](https://github.com/nocobase/nocobase/pull/9017)) par @mytharcher

  - Correction du problème où le mode du déclencheur de collection ne pouvait pas être défini sur "créer ou mettre à jour" ([#8980](https://github.com/nocobase/nocobase/pull/8980)) par @mytharcher

- **[Notification : Message dans l'application]** Correction de la liste blanche d'actions pour les mises à jour de messages dans l'application afin d'empêcher les mises à jour non autorisées par des non-propriétaires. ([#9001](https://github.com/nocobase/nocobase/pull/9001)) par @mytharcher

- **[Gestionnaire de sources de données]** Optimisation du nommage des outils MCP et réduction des réponses API redondantes pour éviter une consommation excessive du contexte de conversation IA ([#9000](https://github.com/nocobase/nocobase/pull/9000)) par @2013xile

- **[Workflow : nœud SQL]** Correction d'un problème de sécurité dans le nœud SQL ([#8989](https://github.com/nocobase/nocobase/pull/8989)) par @mytharcher

- **[Visualisation de données]** Lors de l'utilisation de filtres basés sur des variables, les graphiques ne parviennent pas à résoudre correctement les valeurs des variables lors du rendu initial ([#8964](https://github.com/nocobase/nocobase/pull/8964)) par @2013xile

- **[Workflow : Approbation]**
  - Ajout d'une tolérance aux pannes lors de la suppression d'un workflow, pour éviter les erreurs de chargement dans la liste des tâches par @mytharcher

  - Ajout d'une tolérance aux pannes pour l'absence de `latestRound` par @mytharcher

  - Correction de la limite de version des migrations héritées pour éviter une erreur lors du démarrage dans un déploiement de version récente par @mytharcher

- **[Gestionnaire d'emails]** Aucune confirmation de fermeture n'est affichée après l'envoi de l'email par @jiannx
