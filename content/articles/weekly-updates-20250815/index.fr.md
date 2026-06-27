---
title: "Mises à jour hebdomadaires de NocoBase : Optimisation et corrections de bugs"
description: "Les mises à jour de cette semaine apportent une optimisation des performances de commutation des onglets contextuels, des corrections de bugs et plus encore."
---

Résumé des journaux de mise à jour hebdomadaires du produit. Les dernières versions sont disponibles sur [notre blog](https://www.nocobase.com/en/blog/timeline).

**NocoBase est actuellement mis à jour avec trois branches : `main`, `next` et `develop`.**

![version.png](https://static-docs.nocobase.com/ba5f04e27e99c625cb3822da5df07860.png)

* `main` : La version la plus stable à ce jour, recommandée pour l'installation ;
* `next` : Version bêta, contient les nouvelles fonctionnalités à venir et a été testée préliminairement. Il peut y avoir des problèmes connus ou inconnus. Elle est principalement destinée aux utilisateurs testeurs pour recueillir des retours et optimiser davantage les fonctionnalités. Idéale pour les utilisateurs testeurs qui souhaitent découvrir les nouvelles fonctionnalités en avant-première et donner leur avis ;
* `develop` : Version alpha, contient le code de fonctionnalité le plus récent, peut être incomplète ou instable, principalement destinée au développement interne et à l'itération rapide. Adaptée aux utilisateurs techniques intéressés par les fonctionnalités de pointe du produit, mais avec des problèmes potentiels et des fonctionnalités incomplètes. Ne pas utiliser en production.

## main

![main.png](https://static-docs.nocobase.com/47a3c71734c1d0f908b51f9ebd53c0ac.png)

### [v1.8.15](https://www.nocobase.com/en/blog/v1.8.15)

*Date de sortie : 2025-08-12*

#### 🚀 Améliorations

- **[client]**

  - Ajout de la prise en charge de la variable de date "avant-hier" ([#7359](https://github.com/nocobase/nocobase/pull/7359)) par @katherinehhh
  - Optimisation des performances lors du changement d'onglets de popup ([#7353](https://github.com/nocobase/nocobase/pull/7353)) par @zhangzhonghe
- **[Workflow]**

  - Correction d'un cas de test instable ([#7349](https://github.com/nocobase/nocobase/pull/7349)) par @mytharcher
  - Le titre du workflow dans la carte de tâche ne sera plus affiché avec un barré, même si la version correspondante est désactivée ([#7339](https://github.com/nocobase/nocobase/pull/7339)) par @mytharcher
- **[Visionneuse de fichiers Office]** Ajout de la prise en charge de l'aperçu des fichiers `.odt` ([#7347](https://github.com/nocobase/nocobase/pull/7347)) par @mytharcher
- **[Gestionnaire de sauvegarde]** amélioration des performances pour l'opération de sauvegarde de base de données MySQL par @gchust

#### 🐛 Corrections de bugs

- **[client]**

  - Correction du problème où la disposition du formulaire multi-colonnes ne se convertissait pas en disposition mono-colonne sur les appareils mobiles ([#7355](https://github.com/nocobase/nocobase/pull/7355)) par @zhangzhonghe
  - Correction d'une erreur de suppression en masse de collections ([#7345](https://github.com/nocobase/nocobase/pull/7345)) par @aaaaaajie
  - Correction du problème où la portée de données précédemment enregistrée n'était pas présélectionnée lors de la configuration individuelle des autorisations. ([#7288](https://github.com/nocobase/nocobase/pull/7288)) par @aaaaaajie
- **[Workflow]**

  - Refonte du menu "Ajouter un nœud" et correction des problèmes de performance de rendu du canevas de workflow qu'il causait ([#7363](https://github.com/nocobase/nocobase/pull/7363)) par @mytharcher
  - Correction du problème de conditions de filtre incorrectes lors de la récupération d'un seul élément de tâche ([#7366](https://github.com/nocobase/nocobase/pull/7366)) par @mytharcher
  - Correction du problème de correspondance de mots-clés dans la sélection de champ ([#7356](https://github.com/nocobase/nocobase/pull/7356)) par @mytharcher
  - Éviter une erreur déclenchée par la publication dans la file d'attente d'événements lors de l'arrêt ([#7348](https://github.com/nocobase/nocobase/pull/7348)) par @mytharcher
- **[Notification : Message in-app]** Correction du problème où les messages in-site étaient reçus mais pas affichés dans une popup ([#7364](https://github.com/nocobase/nocobase/pull/7364)) par @mytharcher
- **[Mobile]** Résolution d'un problème où le sélecteur de date sur les appareils mobiles s'affichait incorrectement lorsque des limites de plage de dates étaient appliquées ([#7362](https://github.com/nocobase/nocobase/pull/7362)) par @katherinehhh
- **[Gestionnaire de fichiers]** Ajout du champ `storageId` à la collection de fichiers pour prendre en charge la configuration des autorisations ([#7351](https://github.com/nocobase/nocobase/pull/7351)) par @mytharcher
- **[Workflow : Nœud parallèle]** Correction de la suspension du nœud parallèle après reprise sous MySQL ([#7346](https://github.com/nocobase/nocobase/pull/7346)) par @mytharcher
- **[Workflow : CC]** Correction de l'impossibilité de supprimer des blocs ([#7338](https://github.com/nocobase/nocobase/pull/7338)) par @mytharcher
- **[Visionneuse de fichiers Office]** Prise en charge de l'aperçu des fichiers `.docx`, `.xlsx` et `.pptx` avec seulement une URL ([#7336](https://github.com/nocobase/nocobase/pull/7336)) par @mytharcher
- **[Visualisation de données]** Problème de variable de date dans la valeur par défaut du champ de date dans le bloc de filtre de graphique ([#7291](https://github.com/nocobase/nocobase/pull/7291)) par @katherinehhh
- **[Workflow : Approbation]**

  - Correction des règles de liaison qui ne fonctionnaient pas dans le bloc de détail original de l'approbation par @mytharcher
  - Correction de la mise à jour des associations lors de la soumission d'un brouillon par @mytharcher

## develop

![develop.png](https://static-docs.nocobase.com/7fcdd9456a17286d8a439eee52bcb8d2.png)

### [v1.9.0-alpha.10](https://www.nocobase.com/en/blog/v1.9.0-alpha.10)

*Date de sortie : 2025-08-09*

#### 🐛 Corrections de bugs

- **[Gestionnaire d'emails]** l'éditeur riche prend en charge les sauts de ligne souples par @jiannx

### [v1.9.0-alpha.9](https://www.nocobase.com/en/blog/v1.9.0-alpha.9)

*Date de sortie : 2025-08-09*

#### 🚀 Améliorations

- **[Workflow]** Correction d'un cas de test instable ([#7349](https://github.com/nocobase/nocobase/pull/7349)) par @mytharcher

#### 🐛c Corrections de bugs

- **[client]** Correction du problème où la disposition du formulaire multi-colonnes ne se convertissait pas en disposition mono-colonne sur les appareils mobiles ([#7355](https://github.com/nocobase/nocobase/pull/7355)) par @zhangzhonghe
- **[Workflow]** Correction du problème de correspondance de mots-clés dans la sélection de champ ([#7356](https://github.com/nocobase/nocobase/pull/7356)) par @mytharcher

### [v1.9.0-alpha.8](https://www.nocobase.com/en/blog/v1.9.0-alpha.8)

*Date de sortie : 2025-08-08*

#### 🚀 Améliorations

- **[client]** Optimisation des performances lors du changement d'onglets de popup ([#7353](https://github.com/nocobase/nocobase/pull/7353)) par @zhangzhonghe
- **[Visionneuse de fichiers Office]** Ajout de la prise en charge de l'aperçu des fichiers `.odt` ([#7347](https://github.com/nocobase/nocobase/pull/7347)) par @mytharcher

#### 🐛 Corrections de bugs

- **[client]**

  - Correction du problème où la portée de données précédemment enregistrée n'était pas présélectionnée lors de la configuration individuelle des autorisations ([#7288](https://github.com/nocobase/nocobase/pull/7288)) par @aaaaaajie
  - Correction d'une erreur de suppression en masse de collections ([#7345](https://github.com/nocobase/nocobase/pull/7345)) par @aaaaaajie
- **[Workflow]** Éviter une erreur déclenchée par la publication dans la file d'attente d'événements lors de l'arrêt ([#7348](https://github.com/nocobase/nocobase/pull/7348)) par @mytharcher
- **[Workflow : Nœud parallèle]** Correction de la suspension du nœud parallèle après reprise sous MySQL ([#7346](https://github.com/nocobase/nocobase/pull/7346)) par @mytharcher
- **[Workflow : Approbation]**

  - Correction de la mise à jour des associations lors de la soumission d'un brouillon par @mytharcher
  - Correction des règles de liaison qui ne fonctionnaient pas dans le bloc de détail original de l'approbation par @mytharcher
