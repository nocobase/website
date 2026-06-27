---
title: "Mises à jour hebdomadaires : Ajout du contrôle de concurrence au niveau des processus au gestionnaire de tâches de base"
description: "Ceci est un résumé des mises à jour et améliorations des fonctionnalités de NocoBase du 15 au 22 janvier 2026."
---

Résumez les journaux de mise à jour hebdomadaires du produit. Les dernières versions sont disponibles sur [notre blog](https://www.nocobase.com/en/blog/timeline).

**NocoBase est actuellement mis à jour avec trois branches : `main`, `next` et `develop`.**

![version.png](https://static-docs.nocobase.com/ba5f04e27e99c625cb3822da5df07860.png)

* `main` : La version la plus stable à ce jour, recommandée pour l'installation ;
* `next` : Version bêta, contient les nouvelles fonctionnalités à venir et a été testée préliminairement. Il peut y avoir des problèmes connus ou inconnus. Elle est principalement destinée aux utilisateurs testeurs pour recueillir des retours et optimiser davantage les fonctionnalités. Idéale pour les utilisateurs testeurs qui souhaitent découvrir les nouvelles fonctionnalités en avant-première et donner leur avis ;
* `develop` : Version alpha, contient le code de fonctionnalité le plus récent, peut être incomplète ou instable, principalement destinée au développement interne et à l'itération rapide. Adaptée aux utilisateurs techniques intéressés par les fonctionnalités de pointe du produit, mais avec des problèmes potentiels et des fonctionnalités incomplètes. Ne pas utiliser en production.

## main

![main.png](https://static-docs.nocobase.com/47a3c71734c1d0f908b51f9ebd53c0ac.png)

### [v1.9.39](https://www.nocobase.com/en/blog/v1.9.39)

*Date de sortie : 21-01-2026*

### 🐛 Corrections de bugs

- **[serveur]** Correction de la version de `mathjs` dans les dépendances communes ([#8475](https://github.com/nocobase/nocobase/pull/8475)) par @mytharcher
- **[client]** Correction du problème où le menu de configuration ne s'affichait pas dans Chrome 144 ([#8470](https://github.com/nocobase/nocobase/pull/8470)) par @zhangzhonghe
- **[Gestionnaire de tâches asynchrones]** Correction du problème où le workflow déclenché par une importation asynchrone était retardé ([#8478](https://github.com/nocobase/nocobase/pull/8478)) par @mytharcher
- **[Action : Importer des enregistrements Pro]** Correction du problème où le workflow déclenché par une importation asynchrone était retardé par @mytharcher

### [v1.9.38](https://www.nocobase.com/en/blog/v1.9.38)

*Date de sortie : 20-01-2026*

### 🚀 Améliorations

- **[serveur]** Prise en charge de la configuration d'une liste blanche d'origines CORS ([#8454](https://github.com/nocobase/nocobase/pull/8454)) par @2013xile
- **[Gestionnaire d'erreurs]** Nettoyage des erreurs de référence SQL ([#8464](https://github.com/nocobase/nocobase/pull/8464)) par @2013xile

### 🐛 Corrections de bugs

- **[client]**

  - Correction du problème où les paramètres de tri des groupes de champs de collection ne prenaient pas effet. ([#8453](https://github.com/nocobase/nocobase/pull/8453)) par @katherinehhh
  - Correction du problème lors de l'édition d'une collection dans l'interface graphique ([#8451](https://github.com/nocobase/nocobase/pull/8451)) par @katherinehhh
  - Correction du problème où le bouton "Paramètres des colonnes" du tableau était non fonctionnel ([#8441](https://github.com/nocobase/nocobase/pull/8441)) par @zhangzhonghe
  - Correction du problème où les règles de liaison des boutons de ligne de tableau affectaient l'état des boutons dans les formulaires contextuels ([#8434](https://github.com/nocobase/nocobase/pull/8434)) par @zhangzhonghe
- **[Mobile (obsolète)]** Plugin mobile obsolète (remplacé par le plugin ui-layout à partir de la version 2.0). ([#8456](https://github.com/nocobase/nocobase/pull/8456)) par @chenos

### [v1.9.37](https://www.nocobase.com/en/blog/v1.9.37)

*Date de sortie : 15-01-2026*

### 🚀 Améliorations

- **[évaluateurs]** Mise à jour de la version de math.js pour prendre en charge plus de fonctions ([#8411](https://github.com/nocobase/nocobase/pull/8411)) par @mytharcher
- **[Notification : Message in-app]** Correction d'un problème de performance lors de l'envoi de messages in-app à un grand nombre d'utilisateurs ([#8402](https://github.com/nocobase/nocobase/pull/8402)) par @mytharcher

### 🐛 Corrections de bugs

- **[client]**

  - Correction du problème où les données de sélection en cascade n'étaient pas effacées après une soumission réussie dans le formulaire de création ([#8403](https://github.com/nocobase/nocobase/pull/8403)) par @katherinehhh
  - Ajout d'une tolérance aux pannes pour le schéma d'action, afin d'éviter le crash de la page lors du clic sur un bouton d'action ([#8420](https://github.com/nocobase/nocobase/pull/8420)) par @mytharcher
  - Correction du problème avec le bouton de soumission où ignorer la validation obligatoire ne fonctionnait pas lorsque la confirmation était activée ([#8400](https://github.com/nocobase/nocobase/pull/8400)) par @katherinehhh
- **[Champ de collection : Plusieurs à plusieurs (tableau)]** Correction d'une erreur lors de l'ajout de relations plusieurs-à-plusieurs (tableau) de second niveau dans les requêtes d'association ([#8406](https://github.com/nocobase/nocobase/pull/8406)) par @cgyrock
- **[Workflow]** Correction du problème où l'ID de schéma n'était pas mis à jour dans le nœud dupliqué ([#8396](https://github.com/nocobase/nocobase/pull/8396)) par @mytharcher

## next

![next.png](https://static-docs.nocobase.com/8ed17a0f08cc585018f6de6c8b13947d.png)

### [v2.0.0-beta.13](https://www.nocobase.com/en/blog/v2.0.0-beta.13)

*Date de sortie : 19-01-2026*

### 🚀 Améliorations

- **[serveur]** Prise en charge de la configuration d'une liste blanche d'origines CORS ([#8454](https://github.com/nocobase/nocobase/pull/8454)) par @2013xile
- **[Action : Exporter des enregistrements]** Amélioration de la portée des données d'exportation en fonction des enregistrements sélectionnés ou des filtres de ressource ([#8442](https://github.com/nocobase/nocobase/pull/8442)) par @katherinehhh
- **[Action : Exporter des enregistrements Pro]** Amélioration de la portée des données d'exportation en fonction des enregistrements sélectionnés ou des filtres de ressource par @katherinehhh

### 🐛 Corrections de bugs

- **[client]**

  - Correction du problème où la fenêtre contextuelle "Variables personnalisées" était masquée ([#8463](https://github.com/nocobase/nocobase/pull/8463)) par @zhangzhonghe
  - Correction du problème lors de l'édition d'une collection dans l'interface graphique ([#8451](https://github.com/nocobase/nocobase/pull/8451)) par @katherinehhh
  - Correction du problème où les paramètres de tri des groupes de champs de collection ne prenaient pas effet. ([#8453](https://github.com/nocobase/nocobase/pull/8453)) par @katherinehhh
  - Correction du problème où la hauteur de la fenêtre modale de raccourci dépassait la hauteur de la fenêtre d'affichage ([#8437](https://github.com/nocobase/nocobase/pull/8437)) par @zhangzhonghe
  - Correction du problème où les règles de liaison des boutons de ligne de tableau affectaient l'état des boutons dans les formulaires contextuels ([#8434](https://github.com/nocobase/nocobase/pull/8434)) par @zhangzhonghe
  - Correction d'un problème où l'état de la colonne d'action du tableau était pollué lors du changement de page. ([#8438](https://github.com/nocobase/nocobase/pull/8438)) par @gchust
  - Correction du problème où le bouton "Paramètres des colonnes" du tableau était non fonctionnel ([#8441](https://github.com/nocobase/nocobase/pull/8441)) par @zhangzhonghe
  - Correction d'un problème où le sélecteur de fichier du champ d'association avait un z-index incorrect, et la configuration de la fenêtre contextuelle ne pouvait pas être sauvegardée correctement. ([#8446](https://github.com/nocobase/nocobase/pull/8446)) par @gchust
- **[moteur-de-flux]**

  - Correction d'un problème où les variables dans les paramètres de code runjs étaient résolues avant l'exécution. ([#8445](https://github.com/nocobase/nocobase/pull/8445)) par @gchust
  - Correction d'un problème où les variables contextuelles ne pouvaient pas être sélectionnées dans la fenêtre contextuelle de création rapide du sélecteur de données. ([#8450](https://github.com/nocobase/nocobase/pull/8450)) par @gchust
  - Correction d'un problème où le fait de cliquer à plusieurs reprises sur le menu de configuration pouvait ouvrir plusieurs fenêtres contextuelles de configuration. ([#8448](https://github.com/nocobase/nocobase/pull/8448)) par @gchust
- **[Mobile (obsolète)]** Plugin mobile obsolète (remplacé par le plugin ui-layout à partir de la version 2.0). ([#8456](https://github.com/nocobase/nocobase/pull/8456)) par @chenos
- **[Moteur de flux]** Correction d'un problème où les variables contenant des traits d'union ne pouvaient pas être analysées correctement. ([#8432](https://github.com/nocobase/nocobase/pull/8432)) par @gchust
- **[Gestionnaire d'emails]** Correction du problème où la fenêtre contextuelle de configuration des emails était masquée par @zhangzhonghe

### [v2.0.0-beta.12](https://www.nocobase.com/en/blog/v2.0.0-beta.12)

*Date de sortie : 16-01-2026*

### 🚀 Améliorations

- **[Moteur de flux]** Prise en charge de la résolution des valeurs des champs de l'enregistrement actuel du formulaire même s'ils ne sont pas ajoutés au formulaire d'édition. ([#8436](https://github.com/nocobase/nocobase/pull/8436)) par @gchust

### 🐛 Corrections de bugs

- **[moteur-de-flux]** Correction du problème où les étapes du flux d'événements dynamiques s'exécutaient deux fois lors de l'ouverture d'une fenêtre contextuelle via un clic sur un bouton. ([#8435](https://github.com/nocobase/nocobase/pull/8435)) par @gchust
- **[Impression de modèle]** Affichage des champs d'espace dans la version 2.0 par @jiannx

### [v2.0.0-beta.11](https://www.nocobase.com/en/blog/v2.0.0-beta.11)

*Date de sortie : 15-01-2026*

### 🚀 Améliorations

- **[évaluateurs]** Mise à jour de la version de math.js pour prendre en charge plus de fonctions ([#8411](https://github.com/nocobase/nocobase/pull/8411)) par @mytharcher
- **[client]** L'éditeur de texte enrichi prend en charge le réglage de la taille de la police, le réglage de la taille de l'image et les sauts de ligne souples ([#8401](https://github.com/nocobase/nocobase/pull/8401)) par @jiannx
- **[Employés IA]** Modification du résultat de l'appelant de workflow en `execution.output`, en utilisant explicitement le nœud de sortie, le résultat pourrait être stable ([#8423](https://github.com/nocobase/nocobase/pull/8423)) par @mytharcher

### 🐛 Corrections de bugs

- **[client]**

  - Ajout d'une tolérance aux pannes pour le schéma d'action, afin d'éviter le crash de la page lors du clic sur un bouton d'action ([#8420](https://github.com/nocobase/nocobase/pull/8420)) par @mytharcher
  - Correction du problème où le paramètre de champ de titre disparaissait après avoir défini l'URL de la pièce jointe, puis changé pour un autre champ dans l'élément de formulaire ([#8418](https://github.com/nocobase/nocobase/pull/8418)) par @katherinehhh
  - Correction du problème où le champ de titre ne se mettait pas à jour lorsque le champ d'association était défini en mode lecture seule dans le formulaire de création ([#8413](https://github.com/nocobase/nocobase/pull/8413)) par @katherinehhh
- **[Moteur de flux]** Correction d'un problème où la résolution des variables était incorrecte lorsque filterByTk était un tableau. ([#8412](https://github.com/nocobase/nocobase/pull/8412)) par @gchust
- **[Impression de modèle]** Prise en charge du champ d'espace par @jiannx

## develop

![develop.png](https://static-docs.nocobase.com/7fcdd9456a17286d8a439eee52bcb8d2.png)

### [v2.0.0-alpha.66](https://www.nocobase.com/en/blog/v2.0.0-alpha.66)

*Date de sortie : 16-01-2026*

### 🐛 Corrections de bugs

- **[Moteur de flux]** Correction d'un problème où les variables contenant des traits d'union ne pouvaient pas être analysées correctement. ([#8432](https://github.com/nocobase/nocobase/pull/8432)) par @gchust

### [v2.0.0-alpha.65](https://www.nocobase.com/en/blog/v2.0.0-alpha.65)

*Date de sortie : 16-01-2026*

### 🎉 Nouvelles fonctionnalités

- **[test]** ajout du contrôle de concurrence au niveau du processus pour le gestionnaire de tâches de base ([#8343](https://github.com/nocobase/nocobase/pull/8343)) par @cgyrock

### 🚀 Améliorations

- **[client]**

  - L'éditeur de texte enrichi prend en charge le réglage de la taille de la police, le réglage de la taille de l'image et les sauts de ligne souples ([#8401](https://github.com/nocobase/nocobase/pull/8401)) par @jiannx
  - Prise en charge de la spécification du moment où exécuter le flux d'événements. ([#8340](https://github.com/nocobase/nocobase/pull/8340)) par @gchust
  - Amélioration des performances de rendu de la liste du gestionnaire de plugins en passant au CSS webkit natif pour les points de suspension de texte ([#8391](https://github.com/nocobase/nocobase/pull/8391)) par @mytharcher
- **[évaluateurs]** Mise à jour de la version de math.js pour prendre en charge plus de fonctions ([#8411](https://github.com/nocobase/nocobase/pull/8411)) par @mytharcher
- **[cli]** prise en charge de la configuration de l'URL de base CDN via env ([#8384](https://github.com/nocobase/nocobase/pull/8384)) par @chenos
- **[moteur-de-flux]** Ajout de `rowOrder` à GridModel pour garantir un ordre de lignes cohérent ([#8371](https://github.com/nocobase/nocobase/pull/8371)) par @zhangzhonghe
- **[Moteur de flux]** Prise en charge de la résolution des valeurs des champs de l'enregistrement actuel du formulaire même s'ils ne sont pas ajoutés au formulaire d'édition. ([#8436](https://github.com/nocobase/nocobase/pull/8436)) par @gchust
- **[Employés IA]**

  - Optimisation du bouton d'entrée IA ([#8414](https://github.com/nocobase/nocobase/pull/8414)) par @heziqiang
  - Modification du résultat de l'appelant de workflow en `execution.output`, en utilisant explicitement le nœud de sortie, le résultat pourrait être stable ([#8423](https://github.com/nocobase/nocobase/pull/8423)) par @mytharcher
  - Masquage du constructeur IA dans la liste d'entrée.<br/> Optimisation du flux d'intégration LLM.<br/> Mise à jour de la documentation sur le modèle IA gemini-3. ([#8409](https://github.com/nocobase/nocobase/pull/8409)) par @heziqiang
  - Prise en charge d'Anthropic et Claude-4.5 ([#8389](https://github.com/nocobase/nocobase/pull/8389)) par @heziqiang
- **[Notification : Message in-app]** Correction d'un problème de performance lors de l'envoi de messages in-app à un grand nombre d'utilisateurs ([#8402](https://github.com/nocobase/nocobase/pull/8402)) par @mytharcher

### 🐛 Corrections de bugs

- **[client]**

  - Correction du problème où la hauteur de la fenêtre modale de raccourci dépassait la hauteur de la fenêtre d'affichage ([#8437](https://github.com/nocobase/nocobase/pull/8437)) par @zhangzhonghe
  - Correction du problème où les règles de liaison des boutons de ligne de tableau affectaient l'état des boutons dans les formulaires contextuels ([#8434](https://github.com/nocobase/nocobase/pull/8434)) par @zhangzhonghe
  - Correction d'un problème où l'état de la colonne d'action du tableau était pollué lors du changement de page. ([#8438](https://github.com/nocobase/nocobase/pull/8438)) par @gchust
  - Ajout d'une tolérance aux pannes pour le schéma d'action, afin d'éviter le crash de la page lors du clic sur un bouton d'action ([#8420](https://github.com/nocobase/nocobase/pull/8420)) par @mytharcher
  - Correction du problème où le champ de titre ne se mettait pas à jour lorsque le champ d'association était défini en mode lecture seule dans le formulaire de création ([#8413](https://github.com/nocobase/nocobase/pull/8413)) par @katherinehhh
  - Le composant numérique n'affiche pas la valeur ([#8410](https://github.com/nocobase/nocobase/pull/8410)) par @chenos
  - Correction du problème où le paramètre de champ de titre disparaissait après avoir défini l'URL de la pièce jointe, puis changé pour un autre champ dans l'élément de formulaire ([#8418](https://github.com/nocobase/nocobase/pull/8418)) par @katherinehhh
  - Correction du problème avec le bouton de soumission où ignorer la validation obligatoire ne fonctionnait pas lorsque la confirmation était activée ([#8400](https://github.com/nocobase/nocobase/pull/8400)) par @katherinehhh
  - Correction du problème où le paramètre de mise en page dans le bloc de carte en grille ne prenait pas effet ([#8399](https://github.com/nocobase/nocobase/pull/8399)) par @katherinehhh
  - Correction du problème où les données de sélection en cascade n'étaient pas effacées après une soumission réussie dans le formulaire de création ([#8403](https://github.com/nocobase/nocobase/pull/8403)) par @katherinehhh
  - Correction de l'empêchement de l'affectation lorsque des caractères chinois sont saisis dans un champ numérique ([#8397](https://github.com/nocobase/nocobase/pull/8397)) par @katherinehhh
  - Résolution du problème où le bouton de soumission apparaissait dans la fenêtre contextuelle de sélection de fichier du champ d'association un-à-un ([#8398](https://github.com/nocobase/nocobase/pull/8398)) par @katherinehhh
  - Correction de la logique d'affinement pour targetKey optionnel ([#8333](https://github.com/nocobase/nocobase/pull/8333)) par @katherinehhh
- **[moteur-de-flux]** Correction du problème où les étapes du flux d'événements dynamiques s'exécutaient deux fois lors de l'ouverture d'une fenêtre contextuelle via un clic sur un bouton. ([#8435](https://github.com/nocobase/nocobase/pull/8435)) par @gchust
- **[Moteur de flux]** Correction d'un problème où la résolution des variables était incorrecte lorsque filterByTk était un tableau. ([#8412](https://github.com/nocobase/nocobase/pull/8412)) par @gchust
- **[Gestionnaire de fichiers]** Correction du problème où l'URL du fichier était générée incorrectement pour les fichiers téléchargés vers le stockage S3 ([#8392](https://github.com/nocobase/nocobase/pull/8392)) par @mytharcher
- **[Champ de collection : Plusieurs à plusieurs (tableau)]** Correction d'une erreur lors de l'ajout de relations plusieurs-à-plusieurs (tableau) de second niveau dans les requêtes d'association ([#8406](https://github.com/nocobase/nocobase/pull/8406)) par @cgyrock
- **[Workflow]**

  - Correction du problème où l'ID de schéma n'était pas mis à jour dans le nœud dupliqué ([#8396](https://github.com/nocobase/nocobase/pull/8396)) par @mytharcher
  - Ajout de l'ID d'instance à l'ID Snowflake des jobs, pour éviter le problème de conflit d'ID en mode cluster ([#8382](https://github.com/nocobase/nocobase/pull/8382)) par @mytharcher
- **[Bloc : modèle (obsolète)]** Correction d'un problème où la page d'édition des modèles hérités (v1) ne pouvait pas être consultée. ([#8376](https://github.com/nocobase/nocobase/pull/8376)) par @gchust
- **[Source de données : API REST]** Ajout d'une tolérance aux pannes pour le contexte de requête, afin d'éviter une erreur lorsque la méthode n'est pas dans le contexte par @mytharcher
- **[Multi-espace]**

  - Espace lié lors de l'ajout de données associées par @jiannx
  - La couleur du sélecteur d'espace suit le thème par @jiannx
- **[Impression de modèle]**

  - Correction du problème de fenêtre contextuelle de configuration de modèle masquée par @zhangzhonghe
  - Prise en charge du champ d'espace par @jiannx
  - Affichage des champs d'espace dans la version 2.0 par @jiannx
- **[Stockage de fichiers : S3(Pro)]** Correction du problème où le mode de renommage de fichier ne fonctionnait pas par @mytharcher
- **[Workflow : Approbation]**

  - Correction du problème où un enregistrement incorrect était chargé en raison de mauvais paramètres par @mytharcher
  - Correction du problème où le bloc de valeur ne s'affichait pas en raison du composant `ValueBlock.Result` manquant par @mytharcher
- **[Gestionnaire d'emails]**

  - Correction de la chaîne de conversation par @jiannx
  - Ajout d'un filtrage à la page de gestion par @jiannx
