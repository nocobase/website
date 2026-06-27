---
title: "NocoBase v1.6.4 : Ajout du paramètre de portée des données pour le composant de sélection en cascade"
description: "Notes de version v1.6.4"
---

### 🎉 Nouvelles fonctionnalités

- **[client]** Ajout d'un paramètre de portée des données pour le composant de sélection en cascade ([#6386](https://github.com/nocobase/nocobase/pull/6386)) par @Cyx649312038

### 🚀 Améliorations

- **[utils]** Déplacement de `md5` vers utils ([#6468](https://github.com/nocobase/nocobase/pull/6468)) par @mytharcher

### 🐛 Corrections de bugs

- **[client]** Dans le bloc arborescent, lors de la désélection, les données du bloc de données ne sont pas effacées ([#6460](https://github.com/nocobase/nocobase/pull/6460)) par @zhangzhonghe

- **[Gestionnaire de fichiers]** Impossible de supprimer les fichiers stockés dans S3. ([#6467](https://github.com/nocobase/nocobase/pull/6467)) par @chenos

- **[Workflow]** Suppression du bouton de paramètres de workflow lié dans le sélecteur de données ([#6455](https://github.com/nocobase/nocobase/pull/6455)) par @mytharcher

- **[Stockage de fichiers : S3(Pro)]** Résolution du problème d'inaccessibilité des URL signées S3 Pro par @chenos

- **[Workflow : Approbation]** Éviter le plantage de la page lorsqu'aucun demandeur n'est présent dans la table du processus d'approbation par @mytharcher
