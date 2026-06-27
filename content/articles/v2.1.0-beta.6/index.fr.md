---
title: "NocoBase v2.1.0-beta.6 : Prise en charge de la recherche dans la documentation intégrée avec plusieurs mots-clés et de la lecture de plusieurs documents en un seul appel d'outil"
description: "Notes de version de la v2.1.0-beta.6"
---

### 🎉 Nouvelles fonctionnalités

- **[Employés IA]** Prise en charge de la recherche dans la documentation intégrée avec plusieurs mots-clés et de la lecture de plusieurs documents lors d'un seul appel d'outil ([#8718](https://github.com/nocobase/nocobase/pull/8718)) par @2013xile

### 🚀 Améliorations

- **[client]** Prise en charge de la configuration des résumés pour les tableaux ([#8721](https://github.com/nocobase/nocobase/pull/8721)) par @chenos

- **[Employés IA]** Mise à jour de l'invite utilisateur du chatbox IA ([#8717](https://github.com/nocobase/nocobase/pull/8717)) par @heziqiang

- **[Intégrer NocoBase]** Fournir une API de nettoyage pour filtrer les valeurs d'association dans les actions ([#8688](https://github.com/nocobase/nocobase/pull/8688)) par @mytharcher

### 🐛 Corrections de bugs

- **[Employés IA]** Résolution du problème où le message IA s'affichait avec une longueur de 0 ([#8723](https://github.com/nocobase/nocobase/pull/8723)) par @heziqiang

- **[Visualisation de données]** Correction de l'i18n pour le texte d'entrée du graphique du plugin ([#8716](https://github.com/nocobase/nocobase/pull/8716)) par @heziqiang

- **[Workflow : JavaScript]** Correction des cas de test qui ne passaient pas sous Windows ([#8722](https://github.com/nocobase/nocobase/pull/8722)) par @mytharcher

- **[Impression de modèles]** Correction du problème où l'API ACL avait changé mais n'était pas adaptée au plugin par @mytharcher

- **[Workflow : Approbation]** Nettoyage des valeurs d'association dans les actions d'approbation, pour éviter toute manipulation de données au-delà des autorisations par @mytharcher

- **[Gestionnaire d'emails]** Correction de l'analyse du format de l'ID de contenu des images par @jiannx
