---
title: "NocoBase v1.5.17 : Corrections de bugs"
description: "Notes de version de la v1.5.17"
---

### 🐛 Corrections de bugs

- **[client]**
  - Erreur lors de la création d'un bloc de commentaire sans collection de commentaires ([#6309](https://github.com/nocobase/nocobase/pull/6309)) par @katherinehhh

  - Erreur lors du clic sur un nœud de bloc arborescent ([#6314](https://github.com/nocobase/nocobase/pull/6314)) par @zhangzhonghe

  - Après avoir cliqué sur le menu de gauche, la sous-page se ferme anormalement ([#6305](https://github.com/nocobase/nocobase/pull/6305)) par @zhangzhonghe

  - Ne pas effacer la valeur du champ lorsque la valeur de l'expression est vide ([#6300](https://github.com/nocobase/nocobase/pull/6300)) par @zhangzhonghe

- **[Champ de collection : Séquence]** Correction du champ de séquence qui n'était pas désactivé en mode lecture seule ([#6274](https://github.com/nocobase/nocobase/pull/6274)) par @mytharcher

- **[Gestionnaire de fichiers]** Correction de la migration pour les collections héritées ([#6310](https://github.com/nocobase/nocobase/pull/6310)) par @mytharcher

- **[Contrôle d'accès]** Enregistrements de données incorrects lors de l'utilisation de champs plusieurs-à-plusieurs comme périmètre de données dans les permissions de collection ([#6304](https://github.com/nocobase/nocobase/pull/6304)) par @2013xile

- **[Bloc : Kanban]** Filtrage incorrect des données dans un bloc Kanban contextuel utilisant des variables d'enregistrement contextuelles ([#6290](https://github.com/nocobase/nocobase/pull/6290)) par @katherinehhh

- **[Bloc : Arborescence]** Erreur lors du clic sur un nœud de bloc arborescent par @zhangzhonghe
