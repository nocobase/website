---
title: "NocoBase v2.0.0-beta.9 : Amélioration des performances de rendu de la liste du gestionnaire de plugins en passant au CSS natif WebKit pour les points de suspension"
description: "Notes de version de la v2.0.0-beta.9"
---

### 🚀 Améliorations

- **[client]** Amélioration des performances de rendu de la liste du gestionnaire de plugins en passant au CSS webkit natif pour l'ellipse de texte ([#8391](https://github.com/nocobase/nocobase/pull/8391)) par @mytharcher

### 🐛 Corrections de bugs

- **[Gestionnaire de fichiers]** Correction du problème où l'URL du fichier était générée incorrectement pour les fichiers téléchargés vers le stockage S3 ([#8392](https://github.com/nocobase/nocobase/pull/8392)) par @mytharcher

- **[Workflow]** Correction du problème où l'ID du schéma n'était pas mis à jour dans le nœud dupliqué ([#8396](https://github.com/nocobase/nocobase/pull/8396)) par @mytharcher

- **[Stockage de fichiers : S3(Pro)]** Correction du problème où le mode de renommage des fichiers ne fonctionnait pas par @mytharcher

- **[Impression de modèle]** Correction du problème de pop-up de configuration de modèle obscurci par @zhangzhonghe

- **[Workflow : Approbation]** Correction du problème où le bloc de valeur ne s'affichait pas en raison de l'absence du composant `ValueBlock.Result` par @mytharcher
