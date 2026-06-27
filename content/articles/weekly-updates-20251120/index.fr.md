---
title: "Mises à jour hebdomadaires de NocoBase : Ajout d'un employé IA pour configurer les graphiques"
description: "Les mises à jour de cette semaine incluent : ajout d'un employé IA pour configurer les graphiques, optimisation du style de la barre d'outils pour éviter que les icônes ne soient masquées, et plus encore."
---

Résumez les journaux de mise à jour hebdomadaires du produit. Les dernières versions sont disponibles sur [notre blog](https://www.nocobase.com/en/blog/timeline).

**NocoBase est actuellement mis à jour avec trois branches : `main`, `next` et `develop`.**

![version.png](https://static-docs.nocobase.com/ba5f04e27e99c625cb3822da5df07860.png)

* `main` : La version la plus stable à ce jour, recommandée pour l'installation ;
* `next` : Version bêta, contient les nouvelles fonctionnalités à venir et a été testée préliminairement. Il peut y avoir des problèmes connus ou inconnus. Elle est principalement destinée aux utilisateurs testeurs pour recueillir des retours et optimiser davantage les fonctions. Idéale pour les utilisateurs testeurs qui souhaitent découvrir les nouvelles fonctionnalités en avant-première et donner leur avis ;
* `develop` : Version alpha, contient le code de fonctionnalité le plus récent, peut être incomplète ou instable, principalement destinée au développement interne et à l'itération rapide. Adaptée aux utilisateurs techniques intéressés par les fonctionnalités de pointe du produit, mais avec des problèmes potentiels et des fonctions incomplètes. Ne pas utiliser en production.

## main

![main.png](https://static-docs.nocobase.com/47a3c71734c1d0f908b51f9ebd53c0ac.png)

### [v1.9.8](https://www.nocobase.com/en/blog/v1.9.8)

*Date de sortie : 2025-11-19*

### 🐛 Corrections de bugs

- **[Workflow : Événement d'action personnalisée]** Correction de l'erreur causée par l'écoute d'événements de source de données externe inexistants par @mytharcher
- **[Impression de modèle]** Analyse des variables dans le filtre par @jiannx
- **[Workflow : Approbation]** Correction d'un problème où des conditions de concurrence survenant lors du traitement d'approbation simultané par plusieurs approbateurs pouvaient entraîner l'exécution d'un nœud de workflow plus d'une fois par @mytharcher

### [v1.9.7](https://www.nocobase.com/en/blog/v1.9.7)

*Date de sortie : 2025-11-18*

### 🐛 Corrections de bugs

- **[client]** Correction du problème où la règle de liaison pour le formulaire d'approbation ne fonctionnait pas ([#7858](https://github.com/nocobase/nocobase/pull/7858)) par @zhangzhonghe
- **[serveur]** Correction d'un problème en mode de séparation des services où les messages de file d'attente non abonnés ne pouvaient pas être publiés ([#7875](https://github.com/nocobase/nocobase/pull/7875)) par @mytharcher
- **[Workflow]**

  - Correction de l'erreur causée par l'écoute d'événements de source de données externe inexistants ([#7855](https://github.com/nocobase/nocobase/pull/7855)) par @mytharcher
  - Utilisation de eventQueue au lieu du backgroundJob partagé pour empêcher la file d'attente partagée d'être consommée incorrectement en mode de séparation des services ([#7871](https://github.com/nocobase/nocobase/pull/7871)) par @mytharcher
- **[Workflow : Nœud manuel]** Correction de l'espace de noms de la langue locale à utiliser pour afficher le contenu correct de la traduction ([#7877](https://github.com/nocobase/nocobase/pull/7877)) par @mytharcher
- **[Contrôle d'accès]** Problème où les extraits d'opération d'association ne prenaient pas effet ([#7876](https://github.com/nocobase/nocobase/pull/7876)) par @2013xile
- **[Workflow : Approbation]**

  - Correction du problème où la taille de page du canal de notification de chargement n'était pas assez grande, ce qui empêchait le chargement complet de la liste par @mytharcher
  - Correction du problème où la règle de liaison pour le formulaire d'approbation ne fonctionnait pas par @zhangzhonghe
  - Correction du format de date sur les cartes de liste d'approbation dans le centre des tâches pour afficher la date et l'heure complètes par @mytharcher
  - Correction d'un problème de performances survenu lors de l'interrogation de la liste des enregistrements d'approbation pendant la soumission d'approbation par @mytharcher

## develop

![develop.png](https://static-docs.nocobase.com/7fcdd9456a17286d8a439eee52bcb8d2.png)

### [v2.0.0-alpha.42](https://www.nocobase.com/en/blog/v2.0.0-alpha.42)

*Date de sortie : 2025-11-19*

### 🐛 Corrections de bugs

- **[client]** Correction d'un problème où le titre et la description n'étaient pas affichés dans le bloc JS. ([#7913](https://github.com/nocobase/nocobase/pull/7913)) par @gchust

### [v2.0.0-alpha.41](https://www.nocobase.com/en/blog/v2.0.0-alpha.41)

*Date de sortie : 2025-11-19*

### 🎉 Nouvelles fonctionnalités

- **[Visualisation de données]** Ajout d'un employé IA pour configurer le graphique ([#7815](https://github.com/nocobase/nocobase/pull/7815)) par @heziqiang

### 🚀 Améliorations

- **[moteur de flux]**

  - Prise en charge de l'écoute de l'événement de changement d'arborescence des modèles de flux dans le moteur de flux. ([#7905](https://github.com/nocobase/nocobase/pull/7905)) par @gchust
  - Amélioration de la résolution de la variable d'enregistrement actuelle, rendant l'ouverture de la boîte de dialogue plus rapide ([#7895](https://github.com/nocobase/nocobase/pull/7895)) par @gchust
  - Optimisation de la structure API des bibliothèques tierces dans le contexte runjs et ajout de la prise en charge de la bibliothèque d'icônes Antd. ([#7896](https://github.com/nocobase/nocobase/pull/7896)) par @gchust
- **[base de données]** Refonte du plugin de chiffrement de champ pour renforcer la sécurité, prenant en charge la génération et la rotation de clés d'application, et des clés de chiffrement par champ. ([#7769](https://github.com/nocobase/nocobase/pull/7769)) par @cgyrock
- **[Champ de collection : Chiffrement]** Optimisation du plugin de chiffrement de champ pour prendre en charge la récupération de données avec des IV indépendants par @cgyrock

### 🐛 Corrections de bugs

- **[client]**

  - Correction du problème où les blocs masqués occupaient toujours de l'espace sur la page. ([#7906](https://github.com/nocobase/nocobase/pull/7906)) par @gchust
  - Correction du problème où le bouton de réinitialisation dans le bouton de filtre effaçait les conditions par défaut ([#7903](https://github.com/nocobase/nocobase/pull/7903)) par @zhangzhonghe
  - Correction d'une vérification de permission incorrecte pour les champs de sous-formulaire dans les nouveaux formulaires ([#7902](https://github.com/nocobase/nocobase/pull/7902)) par @katherinehhh
- **[serveur]** Correction d'un problème en mode de séparation des services où les messages de file d'attente non abonnés ne pouvaient pas être publiés ([#7875](https://github.com/nocobase/nocobase/pull/7875)) par @mytharcher
- **[Workflow]**

  - Correction de l'erreur causée par l'écoute d'événements de source de données externe inexistants ([#7855](https://github.com/nocobase/nocobase/pull/7855)) par @mytharcher
  - Utilisation de eventQueue au lieu du backgroundJob partagé pour empêcher la file d'attente partagée d'être consommée incorrectement en mode de séparation des services ([#7871](https://github.com/nocobase/nocobase/pull/7871)) par @mytharcher
- **[Workflow : Nœud manuel]** Correction de l'espace de noms de la langue locale à utiliser pour afficher le contenu correct de la traduction ([#7877](https://github.com/nocobase/nocobase/pull/7877)) par @mytharcher
- **[Contrôle d'accès]** Problème où les extraits d'opération d'association ne prenaient pas effet ([#7876](https://github.com/nocobase/nocobase/pull/7876)) par @2013xile
- **[Workflow : Événement d'action personnalisée]** Correction de l'erreur causée par l'écoute d'événements de source de données externe inexistants par @mytharcher
- **[Commentaires]** Correction du problème où les commentaires cités dans le bloc de commentaires ne s'affichaient pas par @katherinehhh
- **[Impression de modèle]** Analyse des variables dans le filtre par @jiannx
- **[Workflow : Approbation]** Correction d'un problème où des conditions de concurrence survenant lors du traitement d'approbation simultané par plusieurs approbateurs pouvaient entraîner l'exécution d'un nœud de workflow plus d'une fois par @mytharcher

### [v2.0.0-alpha.40](https://www.nocobase.com/en/blog/v2.0.0-alpha.40)

*Date de sortie : 2025-11-18*

### 🚀 Améliorations

- **[moteur de flux]** Optimisation du style de la barre d'outils pour empêcher les icônes d'être masquées ([#7883](https://github.com/nocobase/nocobase/pull/7883)) par @zhangzhonghe

### 🐛 Corrections de bugs

- **[moteur de flux]** Correction du problème où les données de permission ACL n'étaient pas rechargées après la déconnexion et la reconnexion. ([#7874](https://github.com/nocobase/nocobase/pull/7874)) par @gchust
- **[client]** Correction de problèmes dans les paramètres des éléments de formulaire ([#7867](https://github.com/nocobase/nocobase/pull/7867)) par @katherinehhh
- **[Visualisation de données]** Utilisation du mode débogage de la ressource SQL uniquement lors de l'aperçu du graphique ([#7893](https://github.com/nocobase/nocobase/pull/7893)) par @heziqiang
- **[Multi-espace]** Utilisateurs associés multi-espace par @jiannx
- **[Workflow : Approbation]**

  - Correction du problème où la taille de page du canal de notification de chargement n'était pas assez grande, ce qui empêchait le chargement complet de la liste par @mytharcher
  - Correction d'un problème de performances survenu lors de l'interrogation de la liste des enregistrements d'approbation pendant la soumission d'approbation par @mytharcher
  - Correction du format de date sur les cartes de liste d'approbation dans le centre des tâches pour afficher la date et l'heure complètes par @mytharcher

### [v2.0.0-alpha.39](https://www.nocobase.com/en/blog/v2.0.0-alpha.39)

*Date de sortie : 2025-11-17*

### 🚀 Améliorations

- **[client]** Adaptation des composants pour les appareils mobiles ([#7870](https://github.com/nocobase/nocobase/pull/7870)) par @zhangzhonghe

### 🐛 Corrections de bugs

- **[client]**

  - Correction du problème où la configuration de champ JS par défaut n'utilisait pas le paramètre de mode d'affichage. ([#7862](https://github.com/nocobase/nocobase/pull/7862)) par @gchust
  - Correction du problème où les modèles dupliqués n'apparaissaient pas, causé par le glisser-déposer puis la suppression d'un modèle référencé ([#7847](https://github.com/nocobase/nocobase/pull/7847)) par @zhangzhonghe
  - Correction du problème concernant l'impossibilité de définir la valeur par défaut du champ de date dans le modèle de bloc de formulaire de filtre. ([#7853](https://github.com/nocobase/nocobase/pull/7853)) par @gchust
  - Correction du problème où la règle de liaison pour le formulaire d'approbation ne fonctionnait pas ([#7858](https://github.com/nocobase/nocobase/pull/7858)) par @zhangzhonghe
  - Correction du problème où les opérations d'édition rapide dans le bloc de tableau ne mettaient pas correctement à jour les données. ([#7845](https://github.com/nocobase/nocobase/pull/7845)) par @gchust
  - Correction du problème où le champ de texte enrichi ne pouvait pas saisir de valeur par défaut et où la valeur par défaut du champ à sélection multiple ne pouvait pas sélectionner plusieurs options. ([#7864](https://github.com/nocobase/nocobase/pull/7864)) par @gchust
- **[Gestionnaire multi-applications (obsolète)]** Après l'arrêt d'une sous-application, publier un message de synchronisation pour informer les autres nœuds d'arrêter la sous-application correspondante ([#7849](https://github.com/nocobase/nocobase/pull/7849)) par @2013xile
- **[Workflow : Approbation]** Correction du problème où la règle de liaison pour le formulaire d'approbation ne fonctionnait pas par @zhangzhonghe
- **[Gestionnaire d'e-mails]** Erreur de rafraîchissement de ShadowHtml par @jiannx
