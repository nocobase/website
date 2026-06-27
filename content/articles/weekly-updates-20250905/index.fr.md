---
title: "Mises à jour hebdomadaires de NocoBase : Optimisations et corrections de bugs"
description: "La mise à jour de cette semaine inclut : optimisation de la requête de comptage de l'API de liste, prise en charge des nœuds de notification de test par le workflow, et plus encore."
---

Résumez les journaux de mise à jour hebdomadaires du produit. Les dernières versions sont disponibles sur [notre blog](https://www.nocobase.com/en/blog/timeline).

**NocoBase est actuellement mis à jour avec trois branches : `main`, `next` et `develop`.**

![version.png](https://static-docs.nocobase.com/ba5f04e27e99c625cb3822da5df07860.png)

* `main` : La version la plus stable à ce jour, recommandée pour l'installation ;
* `next` : Version bêta, contient les nouvelles fonctionnalités à venir et a été testée préliminairement. Il peut y avoir des problèmes connus ou inconnus. Elle est principalement destinée aux utilisateurs testeurs pour recueillir des retours et optimiser davantage les fonctionnalités. Idéale pour les utilisateurs testeurs qui souhaitent découvrir les nouvelles fonctionnalités en avant-première et donner leur avis ;
* `develop` : Version alpha, contient le code des fonctionnalités les plus récentes, peut être incomplète ou instable, principalement destinée au développement interne et à l'itération rapide. Adaptée aux utilisateurs techniques intéressés par les fonctionnalités de pointe du produit, mais avec des problèmes potentiels et des fonctionnalités incomplètes. Ne convient pas à une utilisation en production.

## main

![main.png](https://static-docs.nocobase.com/47a3c71734c1d0f908b51f9ebd53c0ac.png)

### [v1.8.23](https://www.nocobase.com/en/blog/v1.8.23)

*Date de sortie : 2025-09-03*

#### 🚀 Améliorations

- **[base de données]** Optimisation de la requête de comptage de l'API de liste pour réduire la consommation de ressources. ([#7453](https://github.com/nocobase/nocobase/pull/7453)) par @aaaaaajie
- **[Notification : Message in-app]** Prise en charge de la configuration du délai de fermeture automatique pour les notifications de messages in-app ([#7472](https://github.com/nocobase/nocobase/pull/7472)) par @mytharcher
- **[Workflow : nœud de notification]** Prise en charge du test du nœud de notification ([#7470](https://github.com/nocobase/nocobase/pull/7470)) par @mytharcher

#### 🐛 Corrections de bugs

- **[client]**

  - erreur de rendu du champ d'association lors du passage au composant d'étiquette dans le bloc de formulaire d'édition ([#7468](https://github.com/nocobase/nocobase/pull/7468)) par @katherinehhh
  - problème de limite de temps lorsque la date sélectionnée est égale à minDate ([#7461](https://github.com/nocobase/nocobase/pull/7461)) par @katherinehhh
- **[Mobile]** champ de date mobile sans fuseau horaire n'affichant pas correctement la date et l'heure ([#7473](https://github.com/nocobase/nocobase/pull/7473)) par @katherinehhh
- **[Formulaires publics]** valeur par défaut du champ de formulaire public non appliquée lors de l'utilisation de variables ([#7467](https://github.com/nocobase/nocobase/pull/7467)) par @katherinehhh
- **[Action : Importer des enregistrements]** Correction du numéro de ligne incorrect affiché lors de l'importation de données en double ([#7440](https://github.com/nocobase/nocobase/pull/7440)) par @aaaaaajie
- **[Collection : Arborescence]** Suppression des événements de base de données liés à la collection après la suppression d'une collection arborescente ([#7459](https://github.com/nocobase/nocobase/pull/7459)) par @2013xile
- **[Workflow : Événement d'action personnalisée]** Correction du problème où les événements d'action personnalisée ne pouvaient pas être exécutés manuellement immédiatement après l'initialisation par @mytharcher
- **[Workflow : Sous-flux]** Correction du problème de reprise et d'exécution multiple des sous-processus par @mytharcher
- **[Workflow : Approbation]** Pour les utilisateurs qui ne sont pas l'approbateur actuel, le bouton d'affichage correspondant dans le tableau du flux de processus ne sera pas affiché par @mytharcher
