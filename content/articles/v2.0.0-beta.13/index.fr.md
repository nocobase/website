---
title: "NocoBase v2.0.0-beta.13 : Prise en charge de la configuration d'une liste blanche d'origines CORS"
description: "Notes de version de v2.0.0-beta.13"
---

### 🚀 Améliorations

- **[serveur]** Possibilité de configurer une liste blanche d'origines CORS ([#8454](https://github.com/nocobase/nocobase/pull/8454)) par @2013xile

- **[Action : Exporter les enregistrements]** Amélioration de la portée des données d'exportation en fonction des enregistrements sélectionnés ou des filtres de ressource ([#8442](https://github.com/nocobase/nocobase/pull/8442)) par @katherinehhh

- **[Action : Exporter les enregistrements Pro]** Amélioration de la portée des données d'exportation en fonction des enregistrements sélectionnés ou des filtres de ressource par @katherinehhh

### 🐛 Corrections de bugs

- **[client]**
  - Correction du problème où la fenêtre contextuelle « Variables personnalisées » était masquée ([#8463](https://github.com/nocobase/nocobase/pull/8463)) par @zhangzhonghe

  - Correction du problème lors de l'édition d'une collection dans l'interface graphique ([#8451](https://github.com/nocobase/nocobase/pull/8451)) par @katherinehhh

  - Correction du problème où les paramètres de regroupement des champs de collection ne prenaient pas effet ([#8453](https://github.com/nocobase/nocobase/pull/8453)) par @katherinehhh

  - Correction du problème où la hauteur de la fenêtre modale des raccourcis dépassait la hauteur de la fenêtre d'affichage ([#8437](https://github.com/nocobase/nocobase/pull/8437)) par @zhangzhonghe

  - Correction du problème où les règles de liaison des boutons de ligne de tableau affectaient l'état des boutons dans les formulaires contextuels ([#8434](https://github.com/nocobase/nocobase/pull/8434)) par @zhangzhonghe

  - Correction d'un problème où l'état de la colonne d'action du tableau était pollué lors du changement de page ([#8438](https://github.com/nocobase/nocobase/pull/8438)) par @gchust

  - Correction du problème où le bouton « Paramètres des colonnes » du tableau était inactif ([#8441](https://github.com/nocobase/nocobase/pull/8441)) par @zhangzhonghe

  - Correction d'un problème où le sélecteur de fichier du champ de liaison avait un mauvais indice z, et où la configuration contextuelle ne pouvait pas être enregistrée correctement ([#8446](https://github.com/nocobase/nocobase/pull/8446)) par @gchust

- **[moteur de flux]**
  - Correction d'un problème où les variables dans les paramètres du code runjs étaient résolues avant l'exécution ([#8445](https://github.com/nocobase/nocobase/pull/8445)) par @gchust

  - Correction d'un problème où les variables contextuelles ne pouvaient pas être sélectionnées dans la fenêtre contextuelle de création rapide du sélecteur de données ([#8450](https://github.com/nocobase/nocobase/pull/8450)) par @gchust

  - Correction d'un problème où le fait de cliquer à plusieurs reprises sur le menu de configuration pouvait ouvrir plusieurs fenêtres contextuelles de configuration ([#8448](https://github.com/nocobase/nocobase/pull/8448)) par @gchust

- **[Mobile (obsolète)]** Plugin mobile obsolète (remplacé par le plugin ui-layout à partir de la version 2.0) ([#8456](https://github.com/nocobase/nocobase/pull/8456)) par @chenos

- **[Moteur de flux]** Correction d'un problème où les variables contenant des traits d'union ne pouvaient pas être analysées correctement ([#8432](https://github.com/nocobase/nocobase/pull/8432)) par @gchust

- **[Gestionnaire d'emails]** Correction du problème où la fenêtre contextuelle de configuration des emails était masquée par @zhangzhonghe
