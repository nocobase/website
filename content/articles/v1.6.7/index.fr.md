---
title: "NocoBase v1.6.7 : Ajout de la description de configuration du champ sécurisé"
description: "Notes de version de la v1.6.7"
---

### 🚀 Améliorations

- **[Workflow : nœud de messagerie]** Ajout de la description du champ de configuration sécurisée. ([#6510](https://github.com/nocobase/nocobase/pull/6510)) par @sheldon66

- **[Notification : Email]** Ajout de la description du champ de configuration sécurisée. ([#6501](https://github.com/nocobase/nocobase/pull/6501)) par @sheldon66

- **[Calendrier]** Plugin calendrier avec paramètres optionnels pour activer ou désactiver la création rapide d'événements ([#6391](https://github.com/nocobase/nocobase/pull/6391)) par @Cyx649312038

### 🐛 Corrections de bugs

- **[client]** Erreur de soumission du champ horaire dans la locale chinoise (syntaxe d'entrée invalide pour le type time) ([#6511](https://github.com/nocobase/nocobase/pull/6511)) par @katherinehhh

- **[Gestionnaire de fichiers]** Impossible d'accéder aux fichiers stockés dans COS ([#6512](https://github.com/nocobase/nocobase/pull/6512)) par @chenos

- **[Bloc : Carte]** Les champs de clé secrète ne déclenchent pas la validation dans la gestion des cartes ([#6509](https://github.com/nocobase/nocobase/pull/6509)) par @katherinehhh

- **[Client WEB]** Le chemin dans le tableau de gestion des routes est différent du chemin réel ([#6483](https://github.com/nocobase/nocobase/pull/6483)) par @zhangzhonghe

- **[Action : Exporter les enregistrements Pro]** Impossible d'exporter les pièces jointes par @chenos

- **[Workflow : Approbation]**
  - Correction du plantage causé par un utilisateur nul par @mytharcher

  - Correction de l'erreur levée lors de l'ajout du résultat du nœud de requête par @mytharcher
