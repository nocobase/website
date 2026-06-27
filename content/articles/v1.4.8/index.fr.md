---
title: "NocoBase v1.4.8 : Corrections de bugs"
description: "Notes de version de la v1.4.8"
---

### 🐛 Corrections de bugs

- **[client]**
  - Correction d'un problème de modèle de données dans le formulaire de filtre configuré dans le sélecteur d'enregistrement de champ d'association ([#5837](https://github.com/nocobase/nocobase/pull/5837)) par @katherinehhh

  - Correction d'un problème où les modèles de chaîne Markdown ne chargeaient pas les données d'association (source de données externe) ([#5791](https://github.com/nocobase/nocobase/pull/5791)) par @katherinehhh

- **[Synchronisation des données utilisateur]** Ignorer les types de données non pris en charge lors de la synchronisation au lieu de générer une erreur. ([#5835](https://github.com/nocobase/nocobase/pull/5835)) par @chenzhizdt

- **[Gestionnaire de sauvegarde]**
  - Correction de l'ouverture lente de la fenêtre de téléchargement pour les fichiers de sauvegarde volumineux par @gchust

  - Correction du problème où la restauration d'une sous-application de sauvegarde entraînait le redémarrage de toutes les applications par @gchust
