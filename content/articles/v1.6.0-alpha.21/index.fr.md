---
title: "NocoBase v1.6.0-alpha.21 : correction d'une erreur d'application lorsque la configuration de restriction IP n'existe pas"
description: "Notes de version de v1.6.0-alpha.21"
---

### 🎉 Nouvelles fonctionnalités

- **[Restriction IP]** Correction d'une erreur de l'application lorsque la configuration de restriction IP n'existe pas. par @sheldon66

### 🐛 Corrections de bugs

- **[auth]** Mise à jour de la logique du middleware d'authentification client pour éviter les échecs de mise à jour du jeton dus à la concurrence. ([#6135](https://github.com/nocobase/nocobase/pull/6135)) par @sheldon66
