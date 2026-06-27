---
title: "NocoBase v2.0.60 : Amélioration du champ URL de base LLM pour utiliser des variables de portée globale dans les formulaires de création et d'édition"
description: "Notes de version de la v2.0.60"
---

### 🚀 Améliorations

- **[Employés IA]** Amélioration du champ URL de base LLM pour permettre l'utilisation de variables de portée globale dans les formulaires de création et d'édition. ([#9615](https://github.com/nocobase/nocobase/pull/9615)) par @cgyrock

### 🐛 Corrections de bugs

- **[Client]** Correction de la largeur du badge dans la barre de navigation supérieure ([#9607](https://github.com/nocobase/nocobase/pull/9607)) par @zhangzhonghe
- **[Employés IA]** Correction des boutons de raccourci IA qui obtenaient un contexte de bloc vide après la suppression des blocs de table référencés. ([#9617](https://github.com/nocobase/nocobase/pull/9617)) par @cgyrock
- **[Gestionnaire de migration]** Correction des différences de migration PostgreSQL pour que les colonnes héritées enfants ne soient pas supprimées lorsqu'une colonne locale devient héritée. par @hongboji
