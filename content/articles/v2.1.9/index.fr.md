---
title: "NocoBase v2.1.9 : Ajout de l'option de remplacement de valeur pour les paramètres de valeur de champ"
description: "Notes de version de la v2.1.9"
---

### 🚀 Améliorations

- **[client-v2]** Ajout d'une option de valeur de remplacement pour les paramètres de valeur de champ. ([#9578](https://github.com/nocobase/nocobase/pull/9578)) par @gchust

### 🐛 Corrections de bugs

- **[client-v2]**
  - Correction des boutons de déclenchement de workflow d'action personnalisée qui envoyaient le contexte JSON personnalisé sous une propriété `values` supplémentaire ou sous forme de chaîne sérialisée. ([#9815](https://github.com/nocobase/nocobase/pull/9815)) par @mytharcher

  - Correction d'un problème où la configuration d'une valeur de champ d'association comme valeur fixe ou valeur par défaut ne prenait pas effet. ([#9820](https://github.com/nocobase/nocobase/pull/9820)) par @gchust

- **[auth]** Les données de mot de passe chiffré ne sont plus incluses dans les réponses de statut de connexion ([#9836](https://github.com/nocobase/nocobase/pull/9836)) par @2013xile

- **[app]** Ignorer le currentScript non lié lors de l'inférence du chemin public du plugin ([#9839](https://github.com/nocobase/nocobase/pull/9839)) par @chenos

- **[Modèles d'interface utilisateur]** Correction du contexte par défaut incorrect pour ctx.openview. ([#9811](https://github.com/nocobase/nocobase/pull/9811)) par @gchust
