---
title: "Mises à jour hebdomadaires de NocoBase : Optimisations et corrections de bugs"
description: "La mise à jour de cette semaine inclut : le gestionnaire d'e-mails prenant en charge la synchronisation par lots, le flux de travail d'approbation permettant de revenir à n'importe quel nœud du processus d'approbation, et plus encore."
---

Résumez les journaux de mise à jour hebdomadaires du produit. Les dernières versions sont disponibles sur [notre blog](https://www.nocobase.com/en/blog/timeline).

**NocoBase est actuellement mis à jour avec trois branches : `main`, `next` et `develop`.**

![version.png](https://static-docs.nocobase.com/ba5f04e27e99c625cb3822da5df07860.png)

* `main` : La version la plus stable à ce jour, recommandée pour l'installation ;
* `next` : Version bêta, contient les nouvelles fonctionnalités à venir et a été testée préliminairement. Il peut y avoir des problèmes connus ou inconnus. Elle est principalement destinée aux utilisateurs testeurs pour recueillir des retours et optimiser davantage les fonctions. Idéale pour les utilisateurs testeurs qui souhaitent découvrir les nouvelles fonctionnalités en avant-première et donner leur avis ;
* `develop` : Version alpha, contient le code de fonctionnalité le plus récent, peut être incomplète ou instable, principalement destinée au développement interne et à l'itération rapide. Adaptée aux utilisateurs techniques intéressés par les fonctionnalités de pointe du produit, mais avec des problèmes potentiels et des fonctions incomplètes. Ne convient pas à une utilisation en production.

## next

![next.png](https://static-docs.nocobase.com/8ed17a0f08cc585018f6de6c8b13947d.png)

### [v1.9.0-beta.7](https://www.nocobase.com/en/blog/v1.9.0-beta.7)

*Date de sortie : 2025-09-11*

#### 🎉 Nouvelles fonctionnalités

- **[Workflow : Approbation]** Prise en charge du retour à n'importe quel nœud dans le processus d'approbation par @mytharcher

#### 🚀 Améliorations

- **[client]** Suppression de la popover avec points de suspension de la liste des fichiers ([#7479](https://github.com/nocobase/nocobase/pull/7479)) par @mytharcher
- **[serveur]** Utilisation du journal système standard pour la file d'attente de messages ([#7480](https://github.com/nocobase/nocobase/pull/7480)) par @mytharcher
- **[base de données]** Optimisation de la requête de comptage de l'API de liste pour réduire la consommation de ressources. ([#7453](https://github.com/nocobase/nocobase/pull/7453)) par @aaaaaajie
- **[Notification : Message in-app]** Prise en charge de la configuration du délai de fermeture automatique pour les notifications de messages in-app ([#7472](https://github.com/nocobase/nocobase/pull/7472)) par @mytharcher
- **[Workflow]**

  - Optimisation du processus de préparation du workflow pour prendre en charge l'utilisation des données de nœud préchargées ([#7476](https://github.com/nocobase/nocobase/pull/7476)) par @mytharcher
  - Optimisation des performances de requête pour récupérer les exécutions en file d'attente en utilisant des champs et des index séparés ([#7448](https://github.com/nocobase/nocobase/pull/7448)) par @mytharcher
  - Ajustement de l'API des variables de workflow pour prendre en charge le pré-paramétrage d'une liste de variables supplémentaires ([#7439](https://github.com/nocobase/nocobase/pull/7439)) par @mytharcher
- **[Workflow : nœud de notification]** Prise en charge du test du nœud de notification ([#7470](https://github.com/nocobase/nocobase/pull/7470)) par @mytharcher
- **[Workflow : Approbation]**

  - Prise en charge de l'utilisation de variables liées à l'approbation dans les notifications personnalisées par @mytharcher
  - Prise en charge de la mise à jour du statut d'approbation après la fin de l'exécution par le nœud de terminaison par @mytharcher

#### 🐛 Corrections de bugs

- **[client]**

  - Vérification incorrecte 'non vide' pour les champs numériques dans la règle de liaison ([#7477](https://github.com/nocobase/nocobase/pull/7477)) par @katherinehhh
  - Erreur de rendu du champ d'association lors du passage au composant d'étiquette dans le bloc de formulaire d'édition ([#7468](https://github.com/nocobase/nocobase/pull/7468)) par @katherinehhh
  - Les champs readonly select/multiselect/date/richtext restent modifiables sur le formulaire public ([#7484](https://github.com/nocobase/nocobase/pull/7484)) par @katherinehhh
  - Problème de limite de temps lorsque la date sélectionnée est égale à minDate ([#7461](https://github.com/nocobase/nocobase/pull/7461)) par @katherinehhh
  - La validation obligatoire ne fonctionne pas pour les champs de pièce jointe dans la sous-table ([#7431](https://github.com/nocobase/nocobase/pull/7431)) par @katherinehhh
  - Correction d'un problème où, dans certains scénarios, la modification d'un enregistrement dans la popup du sélecteur d'enregistrement mobile provoque une erreur ([#7444](https://github.com/nocobase/nocobase/pull/7444)) par @zhangzhonghe
- **[non défini]** Correction d'un problème de filtrage par champ de date uniquement dans la source externe MySQL ([#7422](https://github.com/nocobase/nocobase/pull/7422)) par @aaaaaajie
- **[base de données]**

  - Correction d'une erreur de syntaxe MySQL qui se produisait lors du chargement de plus de messages in-app. ([#7438](https://github.com/nocobase/nocobase/pull/7438)) par @aaaaaajie
  - Correction d'un problème de précision pour les champs Numérique exportés ([#7421](https://github.com/nocobase/nocobase/pull/7421)) par @aaaaaajie
- **[Mobile]** Le champ de date mobile sans fuseau horaire n'affiche pas correctement la date et l'heure ([#7473](https://github.com/nocobase/nocobase/pull/7473)) par @katherinehhh
- **[Formulaires publics]** La valeur par défaut du champ de formulaire public n'est pas appliquée lors de l'utilisation de variables ([#7467](https://github.com/nocobase/nocobase/pull/7467)) par @katherinehhh
- **[Collection : Arborescence]** Suppression des événements de base de données liés à la collection après la suppression d'une collection arborescente ([#7459](https://github.com/nocobase/nocobase/pull/7459)) par @2013xile
- **[Gestionnaire de fichiers]** Correction de l'erreur lors de la modification du champ `storage` dans la collection de fichiers. ([#7393](https://github.com/nocobase/nocobase/pull/7393)) par @mytharcher
- **[Action : Importer des enregistrements]**

  - Correction du numéro de ligne incorrect affiché lors de l'importation de données en double ([#7440](https://github.com/nocobase/nocobase/pull/7440)) par @aaaaaajie
  - Correction d'un problème où l'importation échouait lorsque la clé primaire de la table était un texte sur une seule ligne ([#7416](https://github.com/nocobase/nocobase/pull/7416)) par @aaaaaajie
- **[Workflow]**

  - Complétion des options pour la suppression automatique du statut d'exécution du workflow ([#7436](https://github.com/nocobase/nocobase/pull/7436)) par @mytharcher
  - Correction du problème où la popup de détail ne s'affichait pas en raison d'une configuration de route incorrecte dans le centre des tâches ([#7452](https://github.com/nocobase/nocobase/pull/7452)) par @mytharcher
  - Correction des problèmes liés au menu mobile dans les tâches de workflow ([#7419](https://github.com/nocobase/nocobase/pull/7419)) par @mytharcher
- **[Workflow : Nœud parallèle]** Correction du problème où une détermination incorrecte du statut dans les nœuds de branche parallèle sous le mode "Exécuter toutes les branches" provoquait une fin prématurée ([#7445](https://github.com/nocobase/nocobase/pull/7445)) par @mytharcher
- **[Action : Importer des enregistrements Pro]** Correction d'un résultat de mise à jour inattendu lors de l'utilisation d'une clé primaire de type chaîne dans l'importation xlsx. par @aaaaaajie
- **[Workflow : Événement d'action personnalisée]** Correction du problème où les événements d'action personnalisée ne peuvent pas être exécutés manuellement immédiatement après l'initialisation par @mytharcher
- **[Workflow : Sous-flux]** Correction du problème de reprise et d'exécution multiple des sous-processus par @mytharcher
- **[Workflow : Approbation]**

  - Correction du problème où le texte du statut dans la notification d'achèvement de l'approbation n'était pas traduit par @mytharcher
  - Pour les utilisateurs qui ne sont pas l'approbateur actuel, le bouton d'affichage correspondant dans le tableau du flux de processus ne sera pas affiché par @mytharcher
  - Ajout de la variable de statut pour les modèles personnalisés dans les notifications d'achèvement d'approbation par @mytharcher

## develop

![develop.png](https://static-docs.nocobase.com/7fcdd9456a17286d8a439eee52bcb8d2.png)

### [v1.9.0-alpha.14](https://www.nocobase.com/en/blog/v1.9.0-alpha.14)

*Date de sortie : 2025-09-10*

#### 🚀 Améliorations

- **[Gestionnaire d'emails]** prend en charge la synchronisation par lots par @jiannx

#### 🐛 Corrections de bugs

- **[Workflow : Approbation]** Correction du problème où le texte du statut dans la notification d'achèvement de l'approbation n'était pas traduit par @mytharcher

### [v1.9.0-alpha.13](https://www.nocobase.com/en/blog/v1.9.0-alpha.13)

*Date de sortie : 2025-09-09*

#### 🎉 Nouvelles fonctionnalités

- **[Workflow : Approbation]** Prise en charge du retour à n'importe quel nœud dans le processus d'approbation par @mytharcher

#### 🚀 Améliorations

- **[client]** Suppression de la popover avec points de suspension de la liste des fichiers ([#7479](https://github.com/nocobase/nocobase/pull/7479)) par @mytharcher
- **[base de données]** Optimisation de la requête de comptage de l'API de liste pour réduire la consommation de ressources. ([#7453](https://github.com/nocobase/nocobase/pull/7453)) par @aaaaaajie
- **[Workflow]**

  - Optimisation du processus de préparation du workflow pour prendre en charge l'utilisation des données de nœud préchargées ([#7476](https://github.com/nocobase/nocobase/pull/7476)) par @mytharcher
  - Optimisation des performances de requête pour récupérer les exécutions en file d'attente en utilisant des champs et des index séparés ([#7448](https://github.com/nocobase/nocobase/pull/7448)) par @mytharcher
  - Ajustement de l'API des variables de workflow pour prendre en charge le pré-paramétrage d'une liste de variables supplémentaires ([#7439](https://github.com/nocobase/nocobase/pull/7439)) par @mytharcher
- **[Notification : Message in-app]** Prise en charge de la configuration du délai de fermeture automatique pour les notifications de messages in-app ([#7472](https://github.com/nocobase/nocobase/pull/7472)) par @mytharcher
- **[Workflow : nœud de notification]** Prise en charge du test du nœud de notification ([#7470](https://github.com/nocobase/nocobase/pull/7470)) par @mytharcher
- **[Workflow : Approbation]**

  - Prise en charge de l'utilisation de variables liées à l'approbation dans les notifications personnalisées par @mytharcher
  - Prise en charge de la mise à jour du statut d'approbation après la fin de l'exécution par le nœud de terminaison par @mytharcher

#### 🐛 Corrections de bugs

- **[client]**

  - Vérification incorrecte 'non vide' pour les champs numériques dans la règle de liaison ([#7477](https://github.com/nocobase/nocobase/pull/7477)) par @katherinehhh
  - Erreur de rendu du champ d'association lors du passage au composant d'étiquette dans le bloc de formulaire d'édition ([#7468](https://github.com/nocobase/nocobase/pull/7468)) par @katherinehhh
  - Problème de limite de temps lorsque la date sélectionnée est égale à minDate ([#7461](https://github.com/nocobase/nocobase/pull/7461)) par @katherinehhh
  - Correction d'un problème où, dans certains scénarios, la modification d'un enregistrement dans la popup du sélecteur d'enregistrement mobile provoque une erreur ([#7444](https://github.com/nocobase/nocobase/pull/7444)) par @zhangzhonghe
  - La validation obligatoire ne fonctionne pas pour les champs de pièce jointe dans la sous-table ([#7431](https://github.com/nocobase/nocobase/pull/7431)) par @katherinehhh
  - Correction du problème où l'icône était affichée incorrectement lorsque l'URL dans le champ d'URL de pièce jointe contenait des paramètres de requête ([#7432](https://github.com/nocobase/nocobase/pull/7432)) par @mytharcher
- **[base de données]**

  - Correction d'un problème de précision pour les champs Numérique exportés ([#7421](https://github.com/nocobase/nocobase/pull/7421)) par @aaaaaajie
  - Correction d'une erreur de syntaxe MySQL qui se produisait lors du chargement de plus de messages in-app. ([#7438](https://github.com/nocobase/nocobase/pull/7438)) par @aaaaaajie
- **[non défini]** Correction d'un problème de filtrage par champ de date uniquement dans la source externe MySQL ([#7422](https://github.com/nocobase/nocobase/pull/7422)) par @aaaaaajie
- **[Mobile]** Le champ de date mobile sans fuseau horaire n'affiche pas correctement la date et l'heure ([#7473](https://github.com/nocobase/nocobase/pull/7473)) par @katherinehhh
- **[Collection : Arborescence]** Suppression des événements de base de données liés à la collection après la suppression d'une collection arborescente ([#7459](https://github.com/nocobase/nocobase/pull/7459)) par @2013xile
- **[Formulaires publics]** La valeur par défaut du champ de formulaire public n'est pas appliquée lors de l'utilisation de variables ([#7467](https://github.com/nocobase/nocobase/pull/7467)) par @katherinehhh
- **[Action : Importer des enregistrements]**

  - Correction du numéro de ligne incorrect affiché lors de l'importation de données en double ([#7440](https://github.com/nocobase/nocobase/pull/7440)) par @aaaaaajie
  - Correction d'un problème où l'importation échouait lorsque la clé primaire de la table était un texte sur une seule ligne ([#7416](https://github.com/nocobase/nocobase/pull/7416)) par @aaaaaajie
- **[Workflow]**

  - Correction du problème où la popup de détail ne s'affichait pas en raison d'une configuration de route incorrecte dans le centre des tâches ([#7452](https://github.com/nocobase/nocobase/pull/7452)) par @mytharcher
  - Complétion des options pour la suppression automatique du statut d'exécution du workflow ([#7436](https://github.com/nocobase/nocobase/pull/7436)) par @mytharcher
  - Correction des problèmes liés au menu mobile dans les tâches de workflow ([#7419](https://github.com/nocobase/nocobase/pull/7419)) par @mytharcher
- **[Gestionnaire de fichiers]** Correction de l'erreur lors de la modification du champ `storage` dans la collection de fichiers. ([#7393](https://github.com/nocobase/nocobase/pull/7393)) par @mytharcher
- **[Workflow : Nœud parallèle]** Correction du problème où une détermination incorrecte du statut dans les nœuds de branche parallèle sous le mode "Exécuter toutes les branches" provoquait une fin prématurée ([#7445](https://github.com/nocobase/nocobase/pull/7445)) par @mytharcher
- **[Workflow : Événement d'action personnalisée]** Correction du problème où les événements d'action personnalisée ne peuvent pas être exécutés manuellement immédiatement après l'initialisation par @mytharcher
- **[Action : Importer des enregistrements Pro]** Correction d'un résultat de mise à jour inattendu lors de l'utilisation d'une clé primaire de type chaîne dans l'importation xlsx. par @aaaaaajie
- **[Workflow : Sous-flux]** Correction du problème de reprise et d'exécution multiple des sous-processus par @mytharcher
- **[Workflow : Approbation]**

  - Ajout de la variable de statut pour les modèles personnalisés dans les notifications d'achèvement d'approbation par @mytharcher
  - Pour les utilisateurs qui ne sont pas l'approbateur actuel, le bouton d'affichage correspondant dans le tableau du flux de processus ne sera pas affiché par @mytharcher
