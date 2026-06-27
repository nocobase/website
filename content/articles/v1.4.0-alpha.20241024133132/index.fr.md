---
title: "NocoBase v1.4.0-alpha.20241024133132 : Prise en charge de l'ajout de groupes dans les formulaires et les blocs de détails"
description: "Notes de version de v1.4.0-alpha.20241024133132"
---

### 🎉 Nouvelles fonctionnalités

- **[client]** Prise en charge de l'ajout de groupes dans les formulaires et les blocs de détail ([#5498](https://github.com/nocobase/nocobase/pull/5498)) par @katherinehhh

- **[Calendrier]** plugin-calendar ajoute les paramètres d'affichage par défaut et les configurations d'internationalisation ([#5487](https://github.com/nocobase/nocobase/pull/5487)) par @Cyx649312038

- **[Source de données : KingbaseES]** Prise en charge de l'utilisation de la base de données Kingbase comme source de données principale ou externe (mode pg) par @chareice
Référence : [Source de données - KingbaseES](https://docs.nocobase.com/handbook/data-source-kingbase)
### 🚀 Améliorations

- **[base de données]** Prise en charge de la logique de chargement statique des plugins ([#5466](https://github.com/nocobase/nocobase/pull/5466)) par @chareice

- **[client]** Amélioration des performances de rendu des blocs de tableau (temps de rendu initial réduit d'environ 50 %) ([#5438](https://github.com/nocobase/nocobase/pull/5438)) par @zhangzhonghe

- **[Mobile]** le client mobile prend en charge le bloc de formulaire de filtre ([#5482](https://github.com/nocobase/nocobase/pull/5482)) par @katherinehhh

- **[Gestionnaire de sauvegarde]**
  - Modification du paramètre par défaut `Sauvegarder les fichiers de stockage local` sur vrai par @gchust

  - Annulation des données de la base de données en cas d'échec de l'action de restauration par @gchust

### 🐛 Corrections de bugs

- **[serveur]** L'événement afterLoad de l'application n'était pas déclenché après l'installation ([#5506](https://github.com/nocobase/nocobase/pull/5506)) par @chenos

- **[Formulaires publics]** enregistrement du snippet ACL pour le formulaire public ([#5505](https://github.com/nocobase/nocobase/pull/5505)) par @katherinehhh

- **[Gestionnaire de sauvegarde]** correction : après la restauration d'une sous-application, l'application principale plante si la sous-application utilisait un schéma différent par @gchust
