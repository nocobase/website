---
title: "NocoBase v1.9.36 : Amélioration des performances de rendu de la liste du gestionnaire de plugins en passant au CSS natif WebKit pour les points de suspension de texte"
description: "Notes de version de la v1.9.36"
---

### 🚀 Améliorations

- **[client]** Amélioration des performances de rendu de la liste du gestionnaire de plugins en passant au CSS webkit natif pour les points de suspension de texte ([#8391](https://github.com/nocobase/nocobase/pull/8391)) par @mytharcher

### 🐛 Corrections de bugs

- **[Gestionnaire de fichiers]** Correction du problème où l'URL du fichier était générée incorrectement pour les fichiers téléchargés vers le stockage S3 ([#8392](https://github.com/nocobase/nocobase/pull/8392)) par @mytharcher

- **[Stockage de fichiers : S3(Pro)]** Correction du problème où le mode de renommage des fichiers ne fonctionnait pas par @mytharcher

- **[Workflow : Approbation]** Correction du problème où le bloc de valeur ne s'affichait pas en raison de l'absence du composant `ValueBlock.Result` par @mytharcher
