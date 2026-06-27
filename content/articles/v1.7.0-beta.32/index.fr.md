---
title: "NocoBase v1.7.0-beta.32 : Les champs de texte sur une seule ligne prennent en charge la saisie de plusieurs mots-clés pour le filtrage"
description: "Notes de version de v1.7.0-beta.32"
---

### 🎉 Nouvelles fonctionnalités

- **[client]** Les champs de texte sur une seule ligne prennent désormais en charge la saisie de plusieurs mots-clés pour le filtrage ([#6685](https://github.com/nocobase/nocobase/pull/6685)) par @zhangzhonghe
  Référence : [Filtre multi-mots-clés](https://docs.nocobase.com/handbook/multi-keyword-filter)
- **[Filtre multi-mots-clés]** Les champs de texte sur une seule ligne prennent en charge la saisie de plusieurs mots-clés pour le filtrage par @zhangzhonghe
  Référence : [Filtre multi-mots-clés](https://docs.nocobase.com/handbook/multi-keyword-filter)
- **[Impression de modèles]** Ajout de la prise en charge de l'impression en lot dans l'impression de modèles. par @sheldon66

### 🚀 Améliorations

- **[Workflow]** Ajout de toutes les clés de locale en-US manquantes ([#6885](https://github.com/nocobase/nocobase/pull/6885)) par @mytharcher

### 🐛 Corrections de bugs

- **[client]**

  - Le composant en cascade dans la modale ne charge pas les données d'association initialement ([#6886](https://github.com/nocobase/nocobase/pull/6886)) par @katherinehhh
  - Les données d'association ne sont pas soumises lors de l'exposition des champs d'association dans subForm ([#6883](https://github.com/nocobase/nocobase/pull/6883)) par @katherinehhh
  - Les champs de tri par glisser-déposer n'affichent pas correctement les options disponibles ([#6875](https://github.com/nocobase/nocobase/pull/6875)) par @katherinehhh
  - Variables de formulaire actuel manquantes dans la portée des données du tableau du sélecteur de données ([#6882](https://github.com/nocobase/nocobase/pull/6882)) par @katherinehhh
  - Le tableau d'enregistrement de sélection d'association ne filtrait pas les enregistrements déjà associés ([#6874](https://github.com/nocobase/nocobase/pull/6874)) par @katherinehhh
- **[base de données]** Gestion des cellules de chaîne vides lors de l'importation de champs pour éviter les erreurs ([#6880](https://github.com/nocobase/nocobase/pull/6880)) par @aaaaaajie
- **[Workflow : Nœud manuel]** Correction d'une erreur de rendu lors de l'affichage d'un élément non traité ([#6879](https://github.com/nocobase/nocobase/pull/6879)) par @mytharcher
- **[Gestionnaire de fichiers]** Correction des types ([#6873](https://github.com/nocobase/nocobase/pull/6873)) par @mytharcher
- **[Bloc : Panneau d'actions]** Lecture du nom de base de l'itinéraire à partir du scanner pour s'adapter à l'environnement de bureau. ([#6877](https://github.com/nocobase/nocobase/pull/6877)) par @sheldon66
- **[Intégration IA]** Le contenu n'est pas affiché lors du basculement entre les pages de configuration du service LLM et de validation ([#6887](https://github.com/nocobase/nocobase/pull/6887)) par @2013xile
- **[Workflow]** Correction de la limite de pile qui fonctionne incorrectement pour l'événement de collection ([#6876](https://github.com/nocobase/nocobase/pull/6876)) par @mytharcher
- **[Workflow : Approbation]** Correction de la portée des assignataires pour la délégation et ajout à d'autres assignataires par @mytharcher
- **[Gestionnaire de sauvegarde]** Correction d'une erreur de type lors de la construction par @mytharcher
