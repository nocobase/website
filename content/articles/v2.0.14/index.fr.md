---
title: "NocoBase v2.0.14 : Amélioration des vérifications de migration, prise en charge du téléchargement SQL, formatage des logs et visibilité du processus d'exécution"
description: "Notes de version de la v2.0.14"
---

### 🚀 Améliorations

- **[Gestionnaire de migration]** Amélioration des vérifications de migration, prise en charge du téléchargement SQL, formatage des logs et visibilité du processus d'exécution par @cgyrock

### 🐛 Corrections de bugs

- **[client]**
  - Correction du problème où les champs personnalisés dans les valeurs de champ du formulaire Filtre ne pouvaient pas afficher le type de saisie correct ([#8823](https://github.com/nocobase/nocobase/pull/8823)) par @zhangzhonghe

  - Correction du problème où le bouton de réduction du formulaire de filtre v2 cessait de fonctionner après le tri des champs ([#8843](https://github.com/nocobase/nocobase/pull/8843)) par @zhangzhonghe

  - Correction du problème où la page de gestion du modèle de référence (v1) manquait des actions de filtre et d'actualisation. ([#8833](https://github.com/nocobase/nocobase/pull/8833)) par @gchust

  - Sous-formulaire et données de sous-tableau non affichés en raison d'une vérification des permissions ([#8846](https://github.com/nocobase/nocobase/pull/8846)) par @chenos

- **[Contrôle d'accès]** Utilisation de collection.filterTargetKey au lieu de Model.primaryKeyField ([#8853](https://github.com/nocobase/nocobase/pull/8853)) par @chenos

- **[Modèles d'interface]**
  - Correction de l'erreur de rendu pour le bloc de référence du panneau d'actions. ([#8818](https://github.com/nocobase/nocobase/pull/8818)) par @gchust

  - Correction du problème où les enregistrements d'association ne pouvaient pas être chargés correctement après avoir enregistré le bloc de détails en tant que modèle. ([#8827](https://github.com/nocobase/nocobase/pull/8827)) par @gchust

- **[Workflow : Approbation]**
  - Correction du problème où les personnes assignées ne suivaient pas l'ordre configuré dans le nœud par @mytharcher

  - Correction des libellés non traduits dans les détails du traitement d'approbation par @zhangzhonghe

- **[Gestionnaire de migration]**
  - Correction d'une erreur de build par @mytharcher

  - Correction de la description de migration manquante et définition de l'heure actuelle comme valeur par défaut par @cgyrock

  - Correction d'un gel potentiel du processus causé par la journalisation d'instructions SQL excessivement volumineuses incluses dans les exceptions d'erreur de migration par @cgyrock

  - Ajustement du répertoire temporaire dans le stockage, pour prendre en charge l'utilisation en mode cluster par @mytharcher
