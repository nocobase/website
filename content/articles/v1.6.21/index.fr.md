---
title: "NocoBase v1.6.21 : Ajout d'une API de délai pour les scénarios qui s'ouvrent sans délai"
description: "Notes de version de la v1.6.21"
---

### 🚀 Améliorations

- **[client]** Ajout d'une API de délai pour les scénarios qui s'ouvrent sans délai ([#6681](https://github.com/nocobase/nocobase/pull/6681)) par @mytharcher

- **[create-nocobase-app]** Mise à niveau de certaines dépendances vers les dernières versions ([#6673](https://github.com/nocobase/nocobase/pull/6673)) par @chenos

### 🐛 Corrections de bugs

- **[client]**
  - Correction d'une erreur déclenchée lors du survol de la souris sur un bloc de modèle référencé dans la configuration du nœud d'approbation ([#6691](https://github.com/nocobase/nocobase/pull/6691)) par @mytharcher

  - Le champ d'association personnalisé n'affiche pas les paramètres du composant de champ ([#6692](https://github.com/nocobase/nocobase/pull/6692)) par @katherinehhh

  - Correction des paramètres régionaux pour le composant de téléchargement ([#6682](https://github.com/nocobase/nocobase/pull/6682)) par @mytharcher

  - Le chargement différé d'un composant d'interface utilisateur manquant provoque une erreur de rendu ([#6683](https://github.com/nocobase/nocobase/pull/6683)) par @gchust

  - Ajout du composant Password natif au HoC Input ([#6679](https://github.com/nocobase/nocobase/pull/6679)) par @mytharcher

  - Champs hérités affichés dans la liste d'affectation des champs de la collection actuelle ([#6666](https://github.com/nocobase/nocobase/pull/6666)) par @katherinehhh

- **[database]** Correction d'une erreur de build CI ([#6687](https://github.com/nocobase/nocobase/pull/6687)) par @aaaaaajie

- **[build]** La sortie de build est incorrecte lorsque le plugin dépend de certaines bibliothèques AMD ([#6665](https://github.com/nocobase/nocobase/pull/6665)) par @gchust

- **[Action : Importer des enregistrements]** Correction d'une erreur lors de l'importation du champ de temps xlsx ([#6672](https://github.com/nocobase/nocobase/pull/6672)) par @aaaaaajie

- **[Workflow : Nœud manuel]** Correction de la constante d'état de la tâche manuelle ([#6676](https://github.com/nocobase/nocobase/pull/6676)) par @mytharcher

- **[Bloc : iframe]** Barre de défilement verticale apparaît lorsque le bloc iframe est réglé sur une hauteur maximale ([#6675](https://github.com/nocobase/nocobase/pull/6675)) par @katherinehhh

- **[Workflow : Événement d'action personnalisée]** Correction des cas de test par @mytharcher

- **[Gestionnaire de sauvegarde]** Erreur de délai d'attente lors de la tentative de restauration d'une sauvegarde non chiffrée avec un mot de passe par @gchust
