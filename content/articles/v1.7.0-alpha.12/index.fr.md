---
title: "NocoBase v1.7.0-alpha.12 : Mise à jour des dépendances et suppression du support SQLite"
description: "Notes de version de v1.7.0-alpha.12"
---

### 🚀 Améliorations

- **[cli]** Optimisation de la logique interne de la commande `nocobase upgrade` ([#6754](https://github.com/nocobase/nocobase/pull/6754)) par @chenos

- **[create-nocobase-app]** Mise à jour des dépendances et suppression du support SQLite ([#6708](https://github.com/nocobase/nocobase/pull/6708)) par @chenos

- **[Mobile]** Optimisation de la vitesse d'ouverture de la popup du sélecteur de date mobile ([#6735](https://github.com/nocobase/nocobase/pull/6735)) par @zhangzhonghe

- **[Bloc : modèle]** prise en charge de la conversion d'un bloc modèle en bloc normal ([#6662](https://github.com/nocobase/nocobase/pull/6662)) par @gchust

- **[Gestionnaire de fichiers]** Exposition de l'API utils ([#6705](https://github.com/nocobase/nocobase/pull/6705)) par @mytharcher

- **[Éditeur de thème]** Autorisation de définir la largeur de la barre latérale dans la configuration du thème ([#6720](https://github.com/nocobase/nocobase/pull/6720)) par @chenos

- **[Workflow]** Ajout des types de date à l'ensemble des types de variables ([#6717](https://github.com/nocobase/nocobase/pull/6717)) par @mytharcher

- **[Modèle d'impression]** Remplacement du contrôle d'action de la source de données par un contrôle d'accès basé sur les rôles client. par @sheldon66

### 🐛 Corrections de bugs

- **[client]**
  - problème d'affichage avec les règles de liaison dans les données d'association multi-niveaux ([#6755](https://github.com/nocobase/nocobase/pull/6755)) par @katherinehhh

  - règle de liaison du bouton 'Ajouter un enfant' du tableau arborescent manquant 'enregistrement courant' ([#6752](https://github.com/nocobase/nocobase/pull/6752)) par @katherinehhh

  - Problème de rafraîchissement des blocs de données après une soumission réussie ([#6748](https://github.com/nocobase/nocobase/pull/6748)) par @zhangzhonghe

  - Problème du bouton de réduction dans le menu de gauche masqué par la fenêtre contextuelle du workflow ([#6733](https://github.com/nocobase/nocobase/pull/6733)) par @zhangzhonghe

  - Problème de difficulté à supprimer les icônes de la barre de navigation supérieure mobile ([#6734](https://github.com/nocobase/nocobase/pull/6734)) par @zhangzhonghe

  - affichage incorrect de la valeur pour "Activer la colonne d'index" ([#6724](https://github.com/nocobase/nocobase/pull/6724)) par @katherinehhh

  - condition de champ date/heure ne fonctionnant pas dans les règles de liaison ([#6728](https://github.com/nocobase/nocobase/pull/6728)) par @katherinehhh

  - contraintes d'option d'action manquantes lors de la réouverture des règles de liaison ([#6723](https://github.com/nocobase/nocobase/pull/6723)) par @katherinehhh

  - Les champs obligatoires masqués par les règles de liaison ne doivent pas affecter la soumission du formulaire ([#6709](https://github.com/nocobase/nocobase/pull/6709)) par @zhangzhonghe

  - filtre manquant pour les données déjà associées lors de l'ajout de données d'association ([#6750](https://github.com/nocobase/nocobase/pull/6750)) par @katherinehhh

- **[serveur]** appVersion générée incorrectement par create-migration ([#6740](https://github.com/nocobase/nocobase/pull/6740)) par @chenos

- **[cli]** Mise à jour automatique de package.json lors de la mise à niveau ([#6747](https://github.com/nocobase/nocobase/pull/6747)) par @chenos

- **[build]** Correction de l'erreur levée dans la commande tar ([#6722](https://github.com/nocobase/nocobase/pull/6722)) par @mytharcher

- **[Bloc : Gantt]** chevauchement des mois dans l'en-tête du calendrier pour la vue mensuelle du bloc diagramme de Gantt ([#6753](https://github.com/nocobase/nocobase/pull/6753)) par @katherinehhh

- **[Action : Importer des enregistrements]** Correction des exceptions d'importation et d'exportation lors de la définition des permissions de champ. ([#6677](https://github.com/nocobase/nocobase/pull/6677)) par @aaaaaajie

- **[Bloc : modèle]** les modèles de bloc ne peuvent pas être utilisés dans un environnement MySQL ([#6726](https://github.com/nocobase/nocobase/pull/6726)) par @gchust

- **[Workflow]** Correction de l'erreur levée lors de l'exécution d'un événement planifié dans un sous-flux ([#6721](https://github.com/nocobase/nocobase/pull/6721)) par @mytharcher

- **[Workflow : Événement d'action personnalisée]** Prise en charge de l'exécution en mode multi-enregistrements par @mytharcher

- **[Action : Exporter des enregistrements Pro]**
  - Correction des exceptions d'importation et d'exportation lors de la définition des permissions de champ. par @aaaaaajie

  - bouton d'exportation Pro perdant les paramètres de filtre après le tri de la colonne du tableau par @katherinehhh

- **[Stockage de fichiers : S3(Pro)]**
  - Correction des données de réponse du fichier téléchargé par @mytharcher

  - Ajout de la logique multer pour le téléchargement côté serveur par @mytharcher

- **[Workflow : Approbation]** Correction du préchargement des champs d'association pour les enregistrements par @mytharcher
