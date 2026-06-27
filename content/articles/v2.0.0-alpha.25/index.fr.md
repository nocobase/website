---
title: "NocoBase v2.0.0-alpha.25 : Expérience de codage IA optimisée"
description: "Notes de version de v2.0.0-alpha.25"
---

### 🚀 Améliorations

- **[serveur]** Ajout du journal de la passerelle ([#7683](https://github.com/nocobase/nocobase/pull/7683)) par @2013xile

- **[moteur de workflow]** Prise en charge de la définition du contexte des variables dans la définition des étapes du workflow ([#7674](https://github.com/nocobase/nocobase/pull/7674)) par @gchust

- **[Visualisation de données]**
  - Ajout d'une astuce pour exécuter la requête avant de configurer les options du graphique ([#7685](https://github.com/nocobase/nocobase/pull/7685)) par @heziqiang

  - Actualisation des données du graphique lors du clic sur le bouton d'aperçu global ([#7678](https://github.com/nocobase/nocobase/pull/7678)) par @heziqiang

- **[Employés IA]** Expérience de codage IA optimisée, incluant l'utilisation d'un employé IA pour réviser, diagnostiquer et corriger le code. ([#7679](https://github.com/nocobase/nocobase/pull/7679)) par @cgyrock

- **[Gestionnaire de sources de données]** Ajustement de l'ordre des colonnes pour le type de champ et l'interface, et ajout d'une étape de confirmation lors des modifications. ([#7680](https://github.com/nocobase/nocobase/pull/7680)) par @2013xile

- **[Workflow]** Finalisation de la configuration du workflow lié pour le bouton d'action de mise à jour d'enregistrement ([#7668](https://github.com/nocobase/nocobase/pull/7668)) par @mytharcher

- **[Gestionnaire multi-applications (obsolète)]** Amélioration du superviseur d'application ([#7661](https://github.com/nocobase/nocobase/pull/7661)) par @chenos

### 🐛 Corrections de bugs

- **[client]**
  - Résolution d'un problème où les utilisateurs ne pouvaient pas définir de valeurs par défaut pour les champs affichés en mode lecture seule. Cela garantit une configuration plus fluide des champs lorsqu'ils ne sont pas modifiables. ([#7689](https://github.com/nocobase/nocobase/pull/7689)) par @gchust

  - Correction des problèmes connus avec les règles de liaison des sous-formulaires ([#7698](https://github.com/nocobase/nocobase/pull/7698)) par @zhangzhonghe

  - Le menu des champs du bloc JS ne peut pas être chargé dans le bloc de formulaire de filtre ([#7690](https://github.com/nocobase/nocobase/pull/7690)) par @gchust

- **[moteur de workflow]** Sélection incorrecte du contexte de l'enregistrement contextuel actuel lors de l'édition de la portée des données d'un champ associé dans un formulaire d'édition ([#7675](https://github.com/nocobase/nocobase/pull/7675)) par @gchust

- **[Workflow : Nœud manuel]** Correction du problème où les tâches manuelles disparaissaient après la désactivation du workflow ([#7687](https://github.com/nocobase/nocobase/pull/7687)) par @mytharcher

- **[Employés IA]** Correction d'un problème où les blocs avec des ressources API associées ne récupéraient pas les données correspondantes lorsqu'ils étaient sélectionnés. ([#7688](https://github.com/nocobase/nocobase/pull/7688)) par @cgyrock

- **[Workflow]** Correction du problème où, après la suppression d'un nœud démarrant une branche, la clé du premier nœud conservé dans la branche était incorrectement modifiée en une nouvelle valeur ([#7665](https://github.com/nocobase/nocobase/pull/7665)) par @mytharcher

- **[Champ de collection : divisions administratives de la Chine]** L'importation de données échoue lorsque la ville et la zone portent le même nom ([#7673](https://github.com/nocobase/nocobase/pull/7673)) par @2013xile

- **[Gestionnaire de fichiers]** Correction du problème de téléchargement incorrect des fichiers `.msg` ([#7662](https://github.com/nocobase/nocobase/pull/7662)) par @mytharcher

- **[Moteur de workflow]** Impossible de résoudre les variables dans l'action de définition des champs de liaison ([#7684](https://github.com/nocobase/nocobase/pull/7684)) par @gchust

- **[Visualisation de données]** Utilisation de l'API sql:runById pour récupérer les données de requête lors de l'initialisation ([#7677](https://github.com/nocobase/nocobase/pull/7677)) par @heziqiang

- **[Workflow : Approbation]** Correction du problème de traduction du texte d'état dans les notifications d'achèvement d'approbation, en utilisant la langue par défaut du système pour la traduction lorsque l'utilisateur n'a pas défini de préférence linguistique par @mytharcher
