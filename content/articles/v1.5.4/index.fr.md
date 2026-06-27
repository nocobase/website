---
title: "NocoBase v1.5.4 : Ajout du chargement pour l'action de duplication"
description: "Notes de version de la v1.5.4"
---

### 🚀 Améliorations

- **[Workflow]** Ajout du chargement pour l'action de duplication ([#6179](https://github.com/nocobase/nocobase/pull/6179)) par @mytharcher

### 🐛 Corrections de bugs

- **[client]**
  - Correction d'une erreur levée dans les paramètres de champ du nœud de création ([#6187](https://github.com/nocobase/nocobase/pull/6187)) par @mytharcher

  - L'option de configuration « Autoriser la sélection multiple » pour les champs d'association ne s'affiche pas dans les formulaires de filtre ([#6174](https://github.com/nocobase/nocobase/pull/6174)) par @zhangzhonghe

  - Le champ reste masqué après avoir été caché par des règles de liaison ([#6182](https://github.com/nocobase/nocobase/pull/6182)) par @zhangzhonghe

- **[utils]** Optimisation de la logique de lecture du stockage/plugins ([#6186](https://github.com/nocobase/nocobase/pull/6186)) par @chenos

- **[Notification : Message in-app]** Correction : Ajout d'un filtre utilisateur aux sous-requêtes de timestamp et de titre du message dans l'API de liste des canaux pour garantir l'isolation des données. ([#6185](https://github.com/nocobase/nocobase/pull/6185)) par @deepure

- **[Gestionnaire de sauvegarde]** Les fichiers n'étaient pas copiés du dossier de sauvegarde vers le dossier de téléchargement lors de la restauration en mode tolérant par @gchust
