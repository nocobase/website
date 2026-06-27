---
title: "NocoBase v1.9.0-alpha.13 : le workflow permet de revenir à n'importe quel nœud du processus d'approbation"
description: "Notes de version de v1.9.0-alpha.13"
---

### 🎉 Nouvelles fonctionnalités

- **[Workflow : Approbation]** Prise en charge du retour à n'importe quel nœud dans le processus d'approbation par @mytharcher

### 🚀 Améliorations

- **[client]** Suppression de l'infobulle avec points de suspension de la liste des fichiers ([#7479](https://github.com/nocobase/nocobase/pull/7479)) par @mytharcher

- **[base de données]** Optimisation de la requête de comptage de la liste API pour réduire la consommation de ressources. ([#7453](https://github.com/nocobase/nocobase/pull/7453)) par @aaaaaajie

- **[Workflow]**
  - Optimisation du processus de préparation du workflow pour prendre en charge l'utilisation de données de nœud préchargées ([#7476](https://github.com/nocobase/nocobase/pull/7476)) par @mytharcher

  - Optimisation des performances de requête pour récupérer les exécutions en file d'attente en utilisant des champs et des index séparés ([#7448](https://github.com/nocobase/nocobase/pull/7448)) par @mytharcher

  - Ajustement de l'API des variables de workflow pour prendre en charge la prédéfinition d'une liste de variables supplémentaires ([#7439](https://github.com/nocobase/nocobase/pull/7439)) par @mytharcher

- **[Notification : Message in-app]** Prise en charge de la configuration du délai de fermeture automatique pour les notifications de messages in-app ([#7472](https://github.com/nocobase/nocobase/pull/7472)) par @mytharcher

- **[Workflow : nœud de notification]** Prise en charge du test du nœud de notification ([#7470](https://github.com/nocobase/nocobase/pull/7470)) par @mytharcher

- **[Workflow : Approbation]**
  - Prise en charge de l'utilisation de variables liées à l'approbation dans les notifications personnalisées par @mytharcher

  - Prise en charge de la mise à jour du statut d'approbation après la fin de l'exécution par le nœud de terminaison par @mytharcher

### 🐛 Corrections de bugs

- **[client]**
  - Vérification incorrecte de « non vide » pour les champs numériques dans les règles de liaison ([#7477](https://github.com/nocobase/nocobase/pull/7477)) par @katherinehhh

  - Erreur de rendu du champ d'association lors du passage au composant d'étiquette dans le bloc de formulaire d'édition ([#7468](https://github.com/nocobase/nocobase/pull/7468)) par @katherinehhh

  - Problème de limite de temps lorsque la date sélectionnée est égale à minDate ([#7461](https://github.com/nocobase/nocobase/pull/7461)) par @katherinehhh

  - Correction d'un problème où, dans certains scénarios, la modification d'un enregistrement dans la fenêtre contextuelle du sélecteur d'enregistrement mobile provoquait une erreur ([#7444](https://github.com/nocobase/nocobase/pull/7444)) par @zhangzhonghe

  - Validation obligatoire non fonctionnelle pour les champs de pièce jointe dans le sous-tableau ([#7431](https://github.com/nocobase/nocobase/pull/7431)) par @katherinehhh

  - Correction du problème où l'icône était affichée incorrectement lorsque l'URL dans le champ d'URL de pièce jointe contenait des paramètres de requête ([#7432](https://github.com/nocobase/nocobase/pull/7432)) par @mytharcher

- **[base de données]**
  - Correction d'un problème de précision pour les champs Numéro exportés ([#7421](https://github.com/nocobase/nocobase/pull/7421)) par @aaaaaajie

  - Correction d'une erreur de syntaxe MySQL qui se produisait lors du chargement de plus de messages in-app. ([#7438](https://github.com/nocobase/nocobase/pull/7438)) par @aaaaaajie

- **[non défini]** Correction d'un problème de filtrage par champ de date uniquement dans une source externe MySQL ([#7422](https://github.com/nocobase/nocobase/pull/7422)) par @aaaaaajie

- **[Mobile]** Le champ de date mobile sans fuseau horaire n'affichait pas correctement la date et l'heure ([#7473](https://github.com/nocobase/nocobase/pull/7473)) par @katherinehhh

- **[Collection : Arborescence]** Suppression des événements de base de données liés à la collection après la suppression d'une collection arborescente ([#7459](https://github.com/nocobase/nocobase/pull/7459)) par @2013xile

- **[Formulaires publics]** La valeur par défaut du champ de formulaire public n'était pas appliquée lors de l'utilisation de variables ([#7467](https://github.com/nocobase/nocobase/pull/7467)) par @katherinehhh

- **[Action : Importer des enregistrements]**
  - Correction du numéro de ligne incorrect affiché lors de l'importation de données en double ([#7440](https://github.com/nocobase/nocobase/pull/7440)) par @aaaaaajie

  - Correction d'un problème où l'importation échouait lorsque la clé primaire de la table était un texte sur une seule ligne ([#7416](https://github.com/nocobase/nocobase/pull/7416)) par @aaaaaajie

- **[Workflow]**
  - Correction du problème où la fenêtre contextuelle de détail ne s'affichait pas en raison d'une configuration de route incorrecte dans le centre des tâches ([#7452](https://github.com/nocobase/nocobase/pull/7452)) par @mytharcher

  - Complétion des options pour supprimer automatiquement le statut d'exécution du workflow ([#7436](https://github.com/nocobase/nocobase/pull/7436)) par @mytharcher

  - Correction des problèmes liés au menu mobile dans les tâches du workflow ([#7419](https://github.com/nocobase/nocobase/pull/7419)) par @mytharcher

- **[Gestionnaire de fichiers]** Correction de l'erreur lors de la modification du champ `storage` dans la collection de fichiers. ([#7393](https://github.com/nocobase/nocobase/pull/7393)) par @mytharcher

- **[Workflow : Nœud parallèle]** Correction du problème où une détermination incorrecte du statut dans les nœuds de branche parallèle sous le mode « Exécuter toutes les branches » provoquait une fin prématurée ([#7445](https://github.com/nocobase/nocobase/pull/7445)) par @mytharcher

- **[Workflow : Événement d'action personnalisée]** Correction du problème où les événements d'action personnalisée ne pouvaient pas être exécutés manuellement immédiatement après l'initialisation par @mytharcher

- **[Action : Importer des enregistrements Pro]** Correction d'un résultat de mise à jour inattendu lors de l'utilisation d'une clé primaire de type chaîne dans l'importation xlsx. par @aaaaaajie

- **[Workflow : Sous-processus]** Correction du problème de reprise et d'exécution multiple des sous-processus par @mytharcher

- **[Workflow : Approbation]**
  - Ajout de la variable de statut pour les modèles personnalisés dans les notifications d'achèvement d'approbation par @mytharcher

  - Pour les utilisateurs qui ne sont pas l'approbateur actuel, le bouton d'affichage correspondant dans le tableau du flux de processus ne sera pas affiché par @mytharcher
