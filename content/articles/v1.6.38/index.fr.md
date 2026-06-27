---
title: "NocoBase v1.6.38 : Corrections de bugs"
description: "Notes de version de la v1.6.38"
---

### 🐛 Corrections de bugs

- **[client]**
  - Correction du problème où les blocs créés dans des popups avaient une collection incorrecte ([#6961](https://github.com/nocobase/nocobase/pull/6961)) par @zhangzhonghe

  - Correction du problème où les valeurs par défaut du formulaire de filtre étaient invalides dans les sous-pages ([#6960](https://github.com/nocobase/nocobase/pull/6960)) par @zhangzhonghe

  - Impossible de développer les champs de collection d'association provenant de sources de données externes dans le périmètre de la table de données des rôles ([#6958](https://github.com/nocobase/nocobase/pull/6958)) par @katherinehhh

  - Correction du problème où l'option 'Contenu tronqué avec points de suspension' était inefficace pour les champs de relation ([#6967](https://github.com/nocobase/nocobase/pull/6967)) par @zhangzhonghe

  - Correction du problème où les valeurs des champs de texte sur une seule ligne s'affichaient comme un tableau en mode lecture simplifiée ([#6968](https://github.com/nocobase/nocobase/pull/6968)) par @zhangzhonghe

- **[Authentification]** Problème de performance causé par le nettoyage des jetons expirés ([#6981](https://github.com/nocobase/nocobase/pull/6981)) par @2013xile

- **[Gestionnaire de fichiers]** Correction de la configuration du délai d'attente Ali-OSS ([#6970](https://github.com/nocobase/nocobase/pull/6970)) par @mytharcher

- **[Workflow : Événement d'action personnalisée]** Correction de l'initialiseur pour le poste de travail manqué par @mytharcher

- **[Auth : OIDC]** Texte du bouton de connexion non localisé par @2013xile
