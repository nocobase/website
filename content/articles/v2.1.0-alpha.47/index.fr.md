---
title: "NocoBase v2.1.0-alpha.47 : Ajout d'une option pour que les blocs Gantt se concentrent sur aujourd'hui par défaut."
description: "Notes de version de v2.1.0-alpha.47"
---

### 🎉 Nouvelles fonctionnalités

- **[undefined]** Amélioration de la gestion des applications et des plugins managés dans la CLI, incluant la gestion d'environnement basée sur appPath, l'import de plugins, la synchronisation des plugins sous licence, et les mises à jour de documentation associées. ([#9655](https://github.com/nocobase/nocobase/pull/9655)) par @chenos
  Référence : [Documentation CLI](https://github.com/nocobase/nocobase/tree/feat/cli-app-path/docs/docs/en/api/cli), [Démarrage rapide](https://github.com/nocobase/nocobase/tree/feat/cli-app-path/docs/docs/en/quickstart)
- **[Bloc : Gantt]** Ajout d'une option permettant aux blocs Gantt de se concentrer sur la date du jour par défaut. ([#9692](https://github.com/nocobase/nocobase/pull/9692)) par @jiannx
- **[Multi-espace]** Ajout du support client v2 pour le plugin multi-espace, incluant la commutation et la gestion des espaces. par @jiannx

### 🚀 Améliorations

- **[Workflow]** Suppression du couplage transactionnel de l'historique des workflows lors de l'exécution. ([#9668](https://github.com/nocobase/nocobase/pull/9668)) par @mytharcher
- **[Modèles d'interface]** Migration des modèles d'interface vers le client v2. ([#9591](https://github.com/nocobase/nocobase/pull/9591)) par @gchust
- **[Filtre multi-mots-clés]** Migration du filtre multi-mots-clés vers le client v2. ([#9691](https://github.com/nocobase/nocobase/pull/9691)) par @gchust
- **[Workflow : Sous-workflow]** Suppression du couplage transactionnel de l'historique des workflows dans les instructions de sous-workflow. par @mytharcher
- **[Workflow : Approbation]** Suppression du couplage transactionnel de l'historique des workflows dans les instructions d'approbation. par @mytharcher

### 🐛 Corrections de bugs

- **[client]** Correction du problème où les champs liés masqués conservaient encore d'anciennes valeurs. ([#9687](https://github.com/nocobase/nocobase/pull/9687)) par @zhangzhonghe
- **[Action : Importer des enregistrements]** Correction du problème où les enregistrements importés recevaient des valeurs de tri en double. ([#9684](https://github.com/nocobase/nocobase/pull/9684)) par @2013xile
- **[Moteur de flux]** Correction d'un problème où la conversion d'un bloc de modèle de référence en copie entraînait une erreur. ([#9693](https://github.com/nocobase/nocobase/pull/9693)) par @gchust
- **[Bloc : Carte]** Correction d'un problème où les valeurs des champs cartographiques étaient incorrectement converties lors du basculement entre les modes d'affichage texte et carte sur les pages de détail. ([#9653](https://github.com/nocobase/nocobase/pull/9653)) par @hongboji
- **[Workflow]** Correction du problème de double déclenchement de l'exécution du workflow sous des workers concurrents. ([#9673](https://github.com/nocobase/nocobase/pull/9673)) par @mytharcher
- **[Workflow : Approbation]** Correction du problème où les titres de champs personnalisés ne s'affichaient pas dans les détails du formulaire d'approbation. par @zhangzhonghe
