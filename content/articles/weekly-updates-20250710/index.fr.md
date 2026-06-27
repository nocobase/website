---
title: "Mises à jour hebdomadaires de NocoBase : Prise en charge des variables d'agrégation personnalisées"
description: "Les mises à jour de cette semaine incluent : ajout d'une file d'attente d'événements pour traiter les messages dans la file d'attente et prise en charge du chargement à la demande des collections à partir de sources de données externes."
---

Résumez les journaux de mise à jour hebdomadaires du produit. Les dernières versions sont disponibles sur [notre blog](https://www.nocobase.com/en/blog/timeline).

**Cette semaine, nous avons publié [NocoBase 1.8.0](https://www.nocobase.com/en/blog/nocobase-1-8-0), avec une authentification améliorée, la prise en charge de variables statistiques personnalisées, une gestion des e-mails modernisée, ainsi qu'une optimisation des workflows et des interactions mobiles.**

**NocoBase est actuellement mis à jour avec trois branches : `main`, `next` et `develop`.**

![version.png](https://static-docs.nocobase.com/ba5f04e27e99c625cb3822da5df07860.png)

* `main` : La version la plus stable à ce jour, recommandée pour l'installation ;
* `next` : Version bêta, contient les nouvelles fonctionnalités à venir et a été testée préliminairement. Il peut y avoir des problèmes connus ou inconnus. Elle est principalement destinée aux utilisateurs testeurs pour recueillir des retours et optimiser davantage les fonctions. Idéale pour les utilisateurs testeurs qui souhaitent découvrir les nouvelles fonctionnalités tôt et donner leur avis ;
* `develop` : Version alpha, contient le code de fonctionnalité le plus récent, peut être incomplète ou instable, principalement destinée au développement interne et à l'itération rapide. Adaptée aux utilisateurs techniques intéressés par les fonctionnalités de pointe du produit, mais avec des problèmes potentiels et des fonctions incomplètes. Ne pas utiliser en production.

## main

![main.png](https://static-docs.nocobase.com/47a3c71734c1d0f908b51f9ebd53c0ac.png)

### [v1.8.1](https://www.nocobase.com/en/blog/v1.8.1)

*Date de sortie : 2025-07-09*

#### 🐛 Corrections de bugs

- **[client]**

  - L'affichage du champ case à cocher est incorrect dans la collection de champs d'association du formulaire ([#7176](https://github.com/nocobase/nocobase/pull/7176)) par @zhangzhonghe
  - Correction du problème où cliquer sur les boutons ne permettait pas d'ouvrir les popups ([#7180](https://github.com/nocobase/nocobase/pull/7180)) par @zhangzhonghe
- **[Workflow : Nœud manuel]** Correction d'une erreur levée lors de l'utilisation d'une variable ([#7177](https://github.com/nocobase/nocobase/pull/7177)) par @mytharcher
- **[Modèle d'impression]** ajout d'un script de migration pour le champ rootDataType par @jiannx
- **[Workflow : Approbation]** Correction de la branche approuvée non exécutée lorsqu'il n'y a pas de destinataire par @mytharcher

### [v1.7.20](https://www.nocobase.com/en/blog/v1.7.20)

*Date de sortie : 2025-07-07*

#### 🐛 Corrections de bugs

- **[client]**

  - Après les modifications de champ, les portées de données qui dépendent de ce champ doivent effacer automatiquement les valeurs sélectionnées ([#7161](https://github.com/nocobase/nocobase/pull/7161)) par @zhangzhonghe
  - Correction du problème où le réglage de la largeur des colonnes du tableau était inefficace ([#7158](https://github.com/nocobase/nocobase/pull/7158)) par @zhangzhonghe
  - Correction du problème d'erreur avec les formulaires de filtre dans la popup du bouton Dupliquer ([#7154](https://github.com/nocobase/nocobase/pull/7154)) par @zhangzhonghe
  - Correction d'une erreur survenue lors de l'enregistrement d'une relation un-à-un dans un champ de configuration. ([#7153](https://github.com/nocobase/nocobase/pull/7153)) par @aaaaaajie
- **[non défini]** Correction de e2e.yml ([#7160](https://github.com/nocobase/nocobase/pull/7160)) par @mytharcher
- **[Gestionnaire de fichiers]**

  - Correction de la détection du type MIME ([#7164](https://github.com/nocobase/nocobase/pull/7164)) par @mytharcher
  - Correction d'une erreur de build due à un package ESM ([#7169](https://github.com/nocobase/nocobase/pull/7169)) par @mytharcher
- **[Formulaires publics]** correction du problème où le champ Date uniquement ne parvenait pas à sélectionner une date dans le formulaire public. ([#7168](https://github.com/nocobase/nocobase/pull/7168)) par @katherinehhh
- **[Workflow]** Correction du problème où plusieurs balayages vers la gauche étaient nécessaires pour revenir à la page précédente sur les appareils mobiles ([#7165](https://github.com/nocobase/nocobase/pull/7165)) par @zhangzhonghe
- **[Visualisation de données]** Problème de pagination du tableau ([#7151](https://github.com/nocobase/nocobase/pull/7151)) par @2013xile
- **[Workflow : Approbation]**

  - Correction des associations non chargées après un retrait par @mytharcher
  - Suppression de la transaction de correction de schéma due à un délai d'attente par @mytharcher
  - Correction d'une erreur levée lors de la suppression d'une approbation par @mytharcher
  - Correction de la mise à jour de l'association lors de la soumission par @mytharcher

### [v1.7.19](https://www.nocobase.com/en/blog/v1.7.19)

*Date de sortie : 2025-07-03*

#### 🚀 Améliorations

- **[base de données]** Prise en charge de l'ajout d'options de pool à partir de l'environnement ([#7133](https://github.com/nocobase/nocobase/pull/7133)) par @mytharcher
- **[Workflow]**

  - Amélioration des performances de chargement de la liste des exécutions en excluant le champ JSON ([#7138](https://github.com/nocobase/nocobase/pull/7138)) par @mytharcher
  - Ajout d'une API de journal pour les tests de nœuds ([#7129](https://github.com/nocobase/nocobase/pull/7129)) par @mytharcher
- **[Gestionnaire multi-applications]** ajout du support de filtre à la gestion multi-applications ([#7124](https://github.com/nocobase/nocobase/pull/7124)) par @katherinehhh
- **[Workflow : Approbation]** Changement du temps en absolu dans la chronologie par @mytharcher

#### 🐛 Corrections de bugs

- **[client]**

  - Le réglage du displayName du champ dans la vue connectée était sans effet ([#7130](https://github.com/nocobase/nocobase/pull/7130)) par @aaaaaajie
  - Problème de style de couleur d'arrière-plan dans le sous-tableau du bloc de détail ([#7144](https://github.com/nocobase/nocobase/pull/7144)) par @katherinehhh
  - Configuration UI du nœud manuel du workflow : les règles de liaison ne peuvent pas sélectionner les variables du formulaire actuel ([#7125](https://github.com/nocobase/nocobase/pull/7125)) par @zhangzhonghe
  - La valeur par défaut du champ d'association écrase les données existantes dans le sous-tableau ([#7120](https://github.com/nocobase/nocobase/pull/7120)) par @katherinehhh
  - Le markdown ne reflétait pas les changements en temps réel lors de la référence aux variables $nForm ([#7147](https://github.com/nocobase/nocobase/pull/7147)) par @katherinehhh
  - Tolérance aux pannes pour les paramètres basés sur 'x-acl-action' ([#7128](https://github.com/nocobase/nocobase/pull/7128)) par @mytharcher
- **[utils]** problème de filtrage sur DateOnly ou Datetime (sans fuseau horaire) en utilisant la variable Jour exact ([#7113](https://github.com/nocobase/nocobase/pull/7113)) par @katherinehhh
- **[Workflow]** Correction d'une erreur levée par une importation cyclique ([#7134](https://github.com/nocobase/nocobase/pull/7134)) par @mytharcher
- **[Politique de mot de passe]** Prise en charge du verrouillage permanent des comptes utilisateurs par @2013xile
- **[Workflow : Sous-workflow]** Correction d'un problème en mode cluster par @mytharcher
- **[Workflow : Approbation]**

  - Suppression des champs non filtrables du filtre par @mytharcher
  - Ajout des paramètres de mise en page du formulaire par @mytharcher

## next

![next.png](https://static-docs.nocobase.com/8ed17a0f08cc585018f6de6c8b13947d.png)

### [v1.9.0-beta.1](https://www.nocobase.com/en/blog/v1.9.0-beta.1)

*Date de sortie : 2025-07-07*

#### 🎉 Nouvelles fonctionnalités

- **[serveur]** Ajout d'une file d'attente d'événements pour traiter les messages en file d'attente ([#6819](https://github.com/nocobase/nocobase/pull/6819)) par @mytharcher

#### 🚀 Améliorations

- **[Workflow]** Déplacement des composants communs vers le plugin de base ([#7140](https://github.com/nocobase/nocobase/pull/7140)) par @mytharcher

#### 🐛 Corrections de bugs

- **[client]**

  - Après les modifications de champ, les portées de données qui dépendent de ce champ doivent effacer automatiquement les valeurs sélectionnées ([#7161](https://github.com/nocobase/nocobase/pull/7161)) par @zhangzhonghe
  - Correction du problème où le réglage de la largeur des colonnes du tableau était inefficace ([#7158](https://github.com/nocobase/nocobase/pull/7158)) par @zhangzhonghe
  - Correction du problème d'erreur avec les formulaires de filtre dans la popup du bouton Dupliquer ([#7154](https://github.com/nocobase/nocobase/pull/7154)) par @zhangzhonghe
  - Correction d'une erreur survenue lors de l'enregistrement d'une relation un-à-un dans un champ de configuration. ([#7153](https://github.com/nocobase/nocobase/pull/7153)) par @aaaaaajie
- **[non défini]** Correction de e2e.yml ([#7160](https://github.com/nocobase/nocobase/pull/7160)) par @mytharcher
- **[Calendrier]** définition du premier jour de la semaine par défaut à 'lundi' dans le bloc calendrier ([#7171](https://github.com/nocobase/nocobase/pull/7171)) par @katherinehhh
- **[Workflow]** Correction du problème où plusieurs balayages vers la gauche étaient nécessaires pour revenir à la page précédente sur les appareils mobiles ([#7165](https://github.com/nocobase/nocobase/pull/7165)) par @zhangzhonghe
- **[Gestionnaire de fichiers]**

  - Correction d'une erreur de build due à un package ESM ([#7169](https://github.com/nocobase/nocobase/pull/7169)) par @mytharcher
  - Correction de la détection du type MIME ([#7164](https://github.com/nocobase/nocobase/pull/7164)) par @mytharcher
- **[Workflow : Nœud manuel]** Correction de l'importation incorrecte d'une variable ([#7156](https://github.com/nocobase/nocobase/pull/7156)) par @mytharcher
- **[Formulaires publics]** correction du problème où le champ Date uniquement ne parvenait pas à sélectionner une date dans le formulaire public. ([#7168](https://github.com/nocobase/nocobase/pull/7168)) par @katherinehhh
- **[Workflow : Approbation]**

  - Suppression de la transaction de correction de schéma due à un délai d'attente par @mytharcher
  - Correction des associations non chargées après un retrait par @mytharcher
  - Correction d'une erreur levée lors de la suppression d'une approbation par @mytharcher
  - Correction de la mise à jour de l'association lors de la soumission par @mytharcher

### [v1.8.0-beta.13](https://www.nocobase.com/en/blog/v1.8.0-beta.13)

*Date de sortie : 2025-07-03*

#### 🎉 Nouvelles fonctionnalités

- **[client]**

  - Prise en charge du champ BIT dans SQL Server pour les sources de données externes. ([#7058](https://github.com/nocobase/nocobase/pull/7058)) par @aaaaaajie
  - Prise en charge des variables d'agrégation personnalisées ([#6916](https://github.com/nocobase/nocobase/pull/6916)) par @zhangzhonghe
    Référence : [Variables personnalisées](https://pr-383.docs-cn.nocobase.com/handbook/custom-variables)
- **[build]** prise en charge de l'autorisation commerciale ([#6554](https://github.com/nocobase/nocobase/pull/6554)) par @jiannx
- **[Gestionnaire de sources de données]** ✨ Prise en charge du chargement à la demande des collections à partir de sources de données externes ([#6979](https://github.com/nocobase/nocobase/pull/6979)) par @aaaaaajie
- **[Paramètres de licence]** ajout du paramètre de licence et validation de la licence avant de télécharger les plugins ([#7026](https://github.com/nocobase/nocobase/pull/7026)) par @jiannx
- **[Authentification]** Prise en charge de la fonction "Mot de passe oublié" ([#6616](https://github.com/nocobase/nocobase/pull/6616)) par @zhangzhonghe
  Référence : [Mot de passe oublié](https://docs.nocobase.com/handbook/auth/user#forgot-password)
- **[Action : Mise à jour par lot]** Prise en charge de l'actualisation des données dans d'autres blocs de données après la mise à jour des données dans un bloc ([#6591](https://github.com/nocobase/nocobase/pull/6591)) par @zhangzhonghe
- **[Source de données : SQL Server externe]**

  - Ajout de la prise en charge du champ BIT SQL Server dans les sources de données externes par @aaaaaajie
  - Prise en charge du chargement à la demande des collections à partir de sources de données externes par @aaaaaajie
- **[Variables personnalisées]** Prise en charge des variables d'agrégation personnalisées par @zhangzhonghe
  Référence : [Variables personnalisées](https://pr-383.docs-cn.nocobase.com/handbook/custom-variables)
- **[Gestionnaire d'e-mails]**

  - prise en charge de la suppression d'e-mails par @jiannx
  - prise en charge du réglage de l'intervalle de synchronisation des e-mails par @jiannx
  - prise en charge de l'envoi en masse par @jiannx

#### 🚀 Améliorations

- **[client]**

  - Prise en charge du remplissage des champs de saisie via le scan de code QR ([#6943](https://github.com/nocobase/nocobase/pull/6943)) par @katherinehhh
  - Déterminer si afficher les composants mobiles en fonction du type d'appareil plutôt que de la largeur de la page ([#6611](https://github.com/nocobase/nocobase/pull/6611)) par @zhangzhonghe
  - prise en charge de la localisation pour le contenu du bloc Markdown ([#6941](https://github.com/nocobase/nocobase/pull/6941)) par @katherinehhh
  - Déterminer si afficher la mise en page mobile en fonction du type d'appareil plutôt que de la largeur de la page ([#6600](https://github.com/nocobase/nocobase/pull/6600)) par @zhangzhonghe
- **[Gestionnaire de tâches asynchrones]** Amélioration des performances de création de tâches lors de l'exportation ([#7078](https://github.com/nocobase/nocobase/pull/7078)) par @aaaaaajie
- **[Mobile]** Adaptation du style de la fenêtre contextuelle de notification pour les appareils mobiles ([#6557](https://github.com/nocobase/nocobase/pull/6557)) par @zhangzhonghe
- **[Gestionnaire d'e-mails]**

  - prise en charge de la réponse et du transfert séparés des e-mails dans le même sujet par @jiannx
  - implémentation du schéma puis envoi d'e-mail et prise en charge de l'IA par @jiannx
  - prise en charge de la valeur d'envoi par défaut dans la popup, prise en charge de la recherche floue pour les destinataires, et corrections de problèmes par @jiannx
  - fonction d'envoi en masse complète par @jiannx
  - amélioration fonctionnelle et correction de problèmes par @jiannx

#### 🐛 Corrections de bugs

- **[cli]**

  - Ajustement de la copie de la licence lors de l'installation du plugin ([#7135](https://github.com/nocobase/nocobase/pull/7135)) par @jiannx
  - erreur non définie dans le téléchargement des plugins ([#7143](https://github.com/nocobase/nocobase/pull/7143)) par @jiannx
- **[client]**

  - Après avoir effacé la valeur du badge, l'interface utilisateur n'est pas mise à jour ([#7055](https://github.com/nocobase/nocobase/pull/7055)) par @zhangzhonghe
  - Erreur lors du clic sur le bouton de filtre ([#7100](https://github.com/nocobase/nocobase/pull/7100)) par @zhangzhonghe
  - Correction du problème où les données de l'utilisateur actuel sont vides ([#7016](https://github.com/nocobase/nocobase/pull/7016)) par @zhangzhonghe
  - Le contenu affiché incorrectement sur les pages ouvertes via des liens popup ([#6990](https://github.com/nocobase/nocobase/pull/6990)) par @zhangzhonghe
  - Passage d'autres props au composant Variable.Input. ([#6670](https://github.com/nocobase/nocobase/pull/6670)) par @sheldon66
  - L'action Enregistrer comme modèle échouera si elle contient un champ d'association ([#6543](https://github.com/nocobase/nocobase/pull/6543)) par @gchust
- **[base de données]** rendre l'opérateur eq pour les champs de chaîne compatible avec le type numérique ([#7062](https://github.com/nocobase/nocobase/pull/7062)) par @chenos
- **[build]** correction de l'erreur d'exécution du client dans plugin-workflow-javascript, erreur process undefine ([#6859](https://github.com/nocobase/nocobase/pull/6859)) par @jiannx
- **[Visualisation de données]** Problème de pagination du tableau ([#7151](https://github.com/nocobase/nocobase/pull/7151)) par @2013xile
- **[Gestionnaire de sources de données]** Correction d'un problème où la combinaison du chargement à la demande de la source de données et de la configuration du préfixe de table provoquait une erreur "ConnectionManager.getConnection was called after the connection manager was closed". ([#7150](https://github.com/nocobase/nocobase/pull/7150)) par @aaaaaajie
- **[plugin-service-platform]** ajustement du texte de la licence par @jiannx
- **[Variables personnalisées]** Après avoir effacé la valeur du badge, l'interface utilisateur n'est pas mise à jour par @zhangzhonghe
- **[Gestionnaire d'e-mails]**

  - la pièce jointe ne s'affiche pas par @jiannx
  - erreur de suppression d'e-mail par @jiannx
  - échec de la suppression d'e-mail par @jiannx
  - la popup de paramètres ne s'affiche pas par @jiannx
  - le tiroir de réponse n'est pas visible par @jiannx
  - la recherche floue du destinataire prend en charge les champs associés par @jiannx
  - ajout du champ "id" à mailmessagelabelsMailmessages par @jiannx
  - recherche floue de courrier pour créer des filtres uniques par @jiannx
  - plusieurs clés primaires pour la table "mailmessagelabels_mailmessages" par @jiannx

### [v1.8.0-beta.12](https://www.nocobase.com/en/blog/v1.8.0-beta.12)

*Date de sortie : 2025-07-03*

#### 🚀 Améliorations

- **[base de données]** Prise en charge de l'ajout d'options de pool à partir de l'environnement ([#7133](https://github.com/nocobase/nocobase/pull/7133)) par @mytharcher
- **[Workflow]**

  - Amélioration des performances de chargement de la liste des exécutions en excluant le champ JSON ([#7138](https://github.com/nocobase/nocobase/pull/7138)) par @mytharcher
  - Ajout d'une API de journal pour les tests de nœuds ([#7129](https://github.com/nocobase/nocobase/pull/7129)) par @mytharcher
- **[Gestionnaire multi-applications]** ajout du support de filtre à la gestion multi-applications ([#7124](https://github.com/nocobase/nocobase/pull/7124)) par @katherinehhh
- **[Workflow : Approbation]** Changement du temps en absolu dans la chronologie par @mytharcher

#### 🐛 Corrections de bugs

- **[client]**

  - Le markdown ne reflétait pas les changements en temps réel lors de la référence aux variables $nForm ([#7147](https://github.com/nocobase/nocobase/pull/7147)) par @katherinehhh
  - Problème de style de couleur d'arrière-plan dans le sous-tableau du bloc de détail ([#7144](https://github.com/nocobase/nocobase/pull/7144)) par @katherinehhh
  - Configuration UI du nœud manuel du workflow : les règles de liaison ne peuvent pas sélectionner les variables du formulaire actuel ([#7125](https://github.com/nocobase/nocobase/pull/7125)) par @zhangzhonghe
  - Le réglage du displayName du champ dans la vue connectée était sans effet ([#7130](https://github.com/nocobase/nocobase/pull/7130)) par @aaaaaajie
  - La valeur par défaut du champ d'association écrase les données existantes dans le sous-tableau ([#7120](https://github.com/nocobase/nocobase/pull/7120)) par @katherinehhh
  - Tolérance aux pannes pour les paramètres basés sur 'x-acl-action' ([#7128](https://github.com/nocobase/nocobase/pull/7128)) par @mytharcher
- **[utils]** problème de filtrage sur DateOnly ou Datetime (sans fuseau horaire) en utilisant la variable Jour exact ([#7113](https://github.com/nocobase/nocobase/pull/7113)) par @katherinehhh
- **[Workflow]** Correction d'une erreur levée par une importation cyclique ([#7134](https://github.com/nocobase/nocobase/pull/7134)) par @mytharcher
- **[Politique de mot de passe]** Prise en charge du verrouillage permanent des comptes utilisateurs par @2013xile
- **[Workflow : Sous-workflow]** Correction d'un problème en mode cluster par @mytharcher
- **[Workflow : Approbation]**

  - Suppression des champs non filtrables du filtre par @mytharcher
  - Ajout des paramètres de mise en page du formulaire par @mytharcher

## develop

![develop.png](https://static-docs.nocobase.com/7fcdd9456a17286d8a439eee52bcb8d2.png)

### [v1.9.0-alpha.1](https://www.nocobase.com/en/blog/v1.9.0-alpha.1)

*Date de sortie : 2025-07-07*

#### 🎉 Nouvelles fonctionnalités

- **[serveur]** Ajout d'une file d'attente d'événements pour traiter les messages en file d'attente ([#6819](https://github.com/nocobase/nocobase/pull/6819)) par @mytharcher

#### 🚀 Améliorations

- **[Workflow]** Déplacement des composants communs vers le plugin de base ([#7140](https://github.com/nocobase/nocobase/pull/7140)) par @mytharcher

#### 🐛 Corrections de bugs

- **[client]**

  - Après les modifications de champ, les portées de données qui dépendent de ce champ doivent effacer automatiquement les valeurs sélectionnées ([#7161](https://github.com/nocobase/nocobase/pull/7161)) par @zhangzhonghe
  - Correction du problème où le réglage de la largeur des colonnes du tableau était inefficace ([#7158](https://github.com/nocobase/nocobase/pull/7158)) par @zhangzhonghe
  - Correction d'une erreur survenue lors de l'enregistrement d'une relation un-à-un dans un champ de configuration. ([#7153](https://github.com/nocobase/nocobase/pull/7153)) par @aaaaaajie
  - Correction du problème d'erreur avec les formulaires de filtre dans la popup du bouton Dupliquer ([#7154](https://github.com/nocobase/nocobase/pull/7154)) par @zhangzhonghe
- **[non défini]** Correction de e2e.yml ([#7160](https://github.com/nocobase/nocobase/pull/7160)) par @mytharcher
- **[Gestionnaire de fichiers]**

  - Correction d'une erreur de build due à un package ESM ([#7169](https://github.com/nocobase/nocobase/pull/7169)) par @mytharcher
  - Correction de la détection du type MIME ([#7164](https://github.com/nocobase/nocobase/pull/7164)) par @mytharcher
- **[Formulaires publics]** correction du problème où le champ Date uniquement ne parvenait pas à sélectionner une date dans le formulaire public. ([#7168](https://github.com/nocobase/nocobase/pull/7168)) par @katherinehhh
- **[Calendrier]** définition du premier jour de la semaine par défaut à 'lundi' dans le bloc calendrier ([#7171](https://github.com/nocobase/nocobase/pull/7171)) par @katherinehhh
- **[Workflow : Nœud manuel]** Correction de l'importation incorrecte d'une variable ([#7156](https://github.com/nocobase/nocobase/pull/7156)) par @mytharcher
- **[Workflow]** Correction du problème où plusieurs balayages vers la gauche étaient nécessaires pour revenir à la page précédente sur les appareils mobiles ([#7165](https://github.com/nocobase/nocobase/pull/7165)) par @zhangzhonghe
- **[Workflow : Approbation]**

  - Correction de la mise à jour de l'association lors de la soumission par @mytharcher
  - Correction d'une erreur levée lors de la suppression d'une approbation par @mytharcher
  - Correction des associations non chargées après un retrait par @mytharcher
- **[Gestionnaire d'e-mails]**

  - après la sélection des lignes, définir "Lu" et "Non lu" par @jiannx
  - le contenu du sous-courrier ne peut pas être filtré par @jiannx

### [v1.8.0-alpha.14](https://www.nocobase.com/en/blog/v1.8.0-alpha.14)

*Date de sortie : 2025-07-04*

#### 🐛 Corrections de bugs

- **[Workflow : Approbation]** Suppression de la transaction de correction de schéma due à un délai d'attente par @mytharcher

### [v1.8.0-alpha.13](https://www.nocobase.com/en/blog/v1.8.0-alpha.13)

*Date de sortie : 2025-07-03*

#### 🚀 Améliorations

- **[Gestionnaire d'e-mails]** prise en charge de la réponse et du transfert séparés des e-mails dans le même sujet par @jiannx

#### 🐛 Corrections de bugs

- **[client]**

  - Problème de style de couleur d'arrière-plan dans le sous-tableau du bloc de détail ([#7144](https://github.com/nocobase/nocobase/pull/7144)) par @katherinehhh
  - Le markdown ne reflétait pas les changements en temps réel lors de la référence aux variables $nForm ([#7147](https://github.com/nocobase/nocobase/pull/7147)) par @katherinehhh
- **[Visualisation de données]** Problème de pagination du tableau ([#7151](https://github.com/nocobase/nocobase/pull/7151)) par @2013xile
- **[Gestionnaire de sources de données]** Correction d'un problème où la combinaison du chargement à la demande de la source de données et de la configuration du préfixe de table provoquait une erreur "ConnectionManager.getConnection was called after the connection manager was closed". ([#7150](https://github.com/nocobase/nocobase/pull/7150)) par @aaaaaajie
