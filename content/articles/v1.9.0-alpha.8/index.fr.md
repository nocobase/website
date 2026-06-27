---
title: "NocoBase v1.9.0-alpha.8 : Optimisation des performances lors du changement d'onglets dans les fenêtres contextuelles"
description: "Notes de version de v1.9.0-alpha.8"
---

### 🚀 Améliorations

- **[client]** Optimisation des performances lors du changement d'onglets de popup ([#7353](https://github.com/nocobase/nocobase/pull/7353)) par @zhangzhonghe
- **[Aperçu des fichiers Office]** Ajout de la prise en charge de l'aperçu des fichiers `.odt` ([#7347](https://github.com/nocobase/nocobase/pull/7347)) par @mytharcher

### 🐛 Corrections de bugs

- **[client]**

  - Correction du problème où la portée de données précédemment enregistrée n'était pas présélectionnée lors de la configuration individuelle des permissions ([#7288](https://github.com/nocobase/nocobase/pull/7288)) par @aaaaaajie
  - Correction de l'erreur de suppression en masse des collections ([#7345](https://github.com/nocobase/nocobase/pull/7345)) par @aaaaaajie
- **[Workflow]** Éviter les erreurs provoquées par la publication dans la file d'événements lors de l'arrêt ([#7348](https://github.com/nocobase/nocobase/pull/7348)) par @mytharcher
- **[Workflow : Nœud parallèle]** Correction de la suspension du nœud parallèle après reprise sous MySQL ([#7346](https://github.com/nocobase/nocobase/pull/7346)) par @mytharcher
- **[Workflow : Approbation]**

  - Correction de la mise à jour des associations lors de la soumission d'un brouillon par @mytharcher
  - Correction des règles de liaison qui ne fonctionnaient pas dans le bloc de détail original d'approbation par @mytharcher
