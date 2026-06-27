---
title: "NocoBase v2.0.0-alpha.43 : Ajout d'une icône pour le type de nœud de réponse"
description: "Notes de version de v2.0.0-alpha.43"
---

### 🚀 Améliorations

- **[Visualisation des données]** Ajout de la prise en charge de la langue russe pour les interfaces des plugins. ([#7676](https://github.com/nocobase/nocobase/pull/7676)) par @sembaev-a-a

- **[Contrôle d'accès]** Réduction des permissions par défaut pour le rôle membre ([#7921](https://github.com/nocobase/nocobase/pull/7921)) par @2013xile

- **[Workflow : Webhook]** Ajout d'une icône pour le type de nœud de réponse par @mytharcher

### 🐛 Corrections de bugs

- **[client]** Correction de l'erreur : Impossible de résoudre 'antd-mobile' et Impossible de résoudre 'antd-mobile-icons' ([#7914](https://github.com/nocobase/nocobase/pull/7914)) par @zhangzhonghe

- **[moteur de flux]** Correction du problème où l'ouverture du formulaire de modification rapide du bloc tableau provoquait une erreur. ([#7923](https://github.com/nocobase/nocobase/pull/7923)) par @gchust

- **[Moteur de flux]** Assurez-vous que les variables d'enregistrement renvoient toujours des enregistrements complets lorsqu'elles sont utilisées avec leurs champs individuels. ([#7917](https://github.com/nocobase/nocobase/pull/7917)) par @gchust

- **[Source de données : Principale]** Correction du problème où un champ un-à-plusieurs nouvellement ajouté ne pouvait pas être sélectionné comme clé étrangère avant de redémarrer l'application. ([#7907](https://github.com/nocobase/nocobase/pull/7907)) par @cgyrock

- **[Contrôle d'accès]** Prise en charge des restrictions de portée de données pour les opérations d'association. ([#7919](https://github.com/nocobase/nocobase/pull/7919)) par @2013xile
