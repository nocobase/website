---
title: "NocoBase v1.8.15 : Optimisation des performances lors du changement d'onglets dans les popups"
description: "Notes de version de la v1.8.15"
---

### 🚀 Améliorations

- **[client]**

  - Ajout de la prise en charge de la variable de date « avant-hier » ([#7359](https://github.com/nocobase/nocobase/pull/7359)) par @katherinehhh
  - Optimisation des performances lors du changement d'onglets dans les popups ([#7353](https://github.com/nocobase/nocobase/pull/7353)) par @zhangzhonghe
- **[Workflow]**

  - Correction d'un cas de test instable ([#7349](https://github.com/nocobase/nocobase/pull/7349)) par @mytharcher
  - Le titre du workflow dans la carte de tâche ne sera plus affiché avec un barré, même si la version correspondante est désactivée ([#7339](https://github.com/nocobase/nocobase/pull/7339)) par @mytharcher
- **[Aperçu des fichiers bureautiques]** Ajout de la prise en charge de l'aperçu des fichiers `.odt` ([#7347](https://github.com/nocobase/nocobase/pull/7347)) par @mytharcher
- **[Gestionnaire de sauvegarde]** Amélioration des performances pour l'opération de sauvegarde de base de données MySQL par @gchust

### 🐛 Corrections de bugs

- **[client]**

  - Correction du problème où la disposition du formulaire multi-colonnes ne passait pas en disposition mono-colonne sur les appareils mobiles ([#7355](https://github.com/nocobase/nocobase/pull/7355)) par @zhangzhonghe
  - Correction d'une erreur lors de la suppression en masse de collections ([#7345](https://github.com/nocobase/nocobase/pull/7345)) par @aaaaaajie
  - Correction du problème où la portée de données précédemment enregistrée n'était pas présélectionnée lors de la configuration individuelle des permissions. ([#7288](https://github.com/nocobase/nocobase/pull/7288)) par @aaaaaajie
- **[Workflow]**

  - Refonte du menu « Ajouter un nœud » et correction des problèmes de performance de rendu du canevas de workflow qu'il causait ([#7363](https://github.com/nocobase/nocobase/pull/7363)) par @mytharcher
  - Correction du problème de conditions de filtre incorrectes lors de la récupération d'un seul élément de tâche ([#7366](https://github.com/nocobase/nocobase/pull/7366)) par @mytharcher
  - Correction du problème de correspondance de mots-clés dans la sélection de champ ([#7356](https://github.com/nocobase/nocobase/pull/7356)) par @mytharcher
  - Évitement d'une erreur provoquée par la publication dans la file d'attente d'événements lors de l'arrêt ([#7348](https://github.com/nocobase/nocobase/pull/7348)) par @mytharcher
- **[Notification : Message in-app]** Correction du problème où les messages in-site étaient reçus mais pas affichés dans une popup ([#7364](https://github.com/nocobase/nocobase/pull/7364)) par @mytharcher
- **[Mobile]** Résolution d'un problème où le sélecteur de date sur les appareils mobiles s'affichait incorrectement lorsque des limites de plage de dates étaient appliquées ([#7362](https://github.com/nocobase/nocobase/pull/7362)) par @katherinehhh
- **[Gestionnaire de fichiers]** Ajout du champ `storageId` à la collection de fichiers pour prendre en charge la configuration des permissions ([#7351](https://github.com/nocobase/nocobase/pull/7351)) par @mytharcher
- **[Workflow : Nœud parallèle]** Correction de la suspension du nœud parallèle après reprise sous MySQL ([#7346](https://github.com/nocobase/nocobase/pull/7346)) par @mytharcher
- **[Workflow : CC]** Correction de l'impossibilité de supprimer les blocs ([#7338](https://github.com/nocobase/nocobase/pull/7338)) par @mytharcher
- **[Aperçu des fichiers bureautiques]** Prise en charge de l'aperçu des fichiers `.docx`, `.xlsx` et `.pptx` avec seulement une URL ([#7336](https://github.com/nocobase/nocobase/pull/7336)) par @mytharcher
- **[Visualisation des données]** Problème de variable de date dans la valeur par défaut du champ date dans le bloc de filtre de graphique ([#7291](https://github.com/nocobase/nocobase/pull/7291)) par @katherinehhh
- **[Workflow : Approbation]**

  - Correction des règles de liaison qui ne fonctionnaient pas dans le bloc de détail original de l'approbation par @mytharcher
  - Correction de la mise à jour des associations lors de la soumission d'un brouillon par @mytharcher
