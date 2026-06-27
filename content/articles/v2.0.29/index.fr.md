---
title: "NocoBase v2.0.29 : Réduction du bruit des logs lors du démarrage du serveur en silençant les commandes unzip pour LibreOffice et Oracle Instant Client"
description: "Notes de version de la v2.0.29"
---

### 🚀 Améliorations

- **[indéfini]** Réduction du bruit des logs au démarrage du serveur en rendant silencieuses les commandes unzip pour LibreOffice et Oracle Instant Client ([#8984](https://github.com/nocobase/nocobase/pull/8984)) par @Rishabh1925

### 🐛 Corrections de bugs

- **[client]** Correction du problème où un espace dans une expression de variable empêchait l'affichage du libellé ([#8988](https://github.com/nocobase/nocobase/pull/8988)) par @mytharcher

- **[moteur de flux]** Correction d'un problème où les éléments de menu ne pouvaient pas être sélectionnés lorsque la largeur du composant d'interface utilisateur en état de configuration était trop petite. ([#8954](https://github.com/nocobase/nocobase/pull/8954)) par @gchust

- **[Visualisation des données]** Lors de l'utilisation de filtres basés sur des variables, les graphiques ne parviennent pas à résoudre correctement les valeurs des variables lors du rendu initial ([#8964](https://github.com/nocobase/nocobase/pull/8964)) par @2013xile
