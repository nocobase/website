---
title: "Mises à jour hebdomadaires de NocoBase : Optimisations et corrections de bugs"
description: "Les mises à jour de cette semaine incluent : ajout d'options de configuration liées à la signature, prise en charge de la resynchronisation par le gestionnaire d'e-mails, et plus encore."
---

Résumez les journaux de mise à jour hebdomadaires du produit. Les dernières versions sont disponibles sur [notre blog](https://www.nocobase.com/en/blog/timeline).

**NocoBase est actuellement mis à jour avec trois branches : `main`, `next` et `develop`.**

![version.png](https://static-docs.nocobase.com/ba5f04e27e99c625cb3822da5df07860.png)

* `main` : La version la plus stable à ce jour, recommandée pour l'installation ;
* `next` : Version bêta, contient les nouvelles fonctionnalités à venir et a été testée préliminairement. Il peut y avoir des problèmes connus ou inconnus. Elle est principalement destinée aux utilisateurs testeurs pour recueillir des retours et optimiser davantage les fonctionnalités. Idéale pour les utilisateurs testeurs qui souhaitent découvrir les nouvelles fonctionnalités en avant-première et donner leur avis ;
* `develop` : Version alpha, contient le code de fonctionnalité le plus récent, peut être incomplète ou instable, principalement destinée au développement interne et à l'itération rapide. Adaptée aux utilisateurs techniques intéressés par les fonctionnalités de pointe du produit, mais avec des problèmes potentiels et des fonctions incomplètes. Ne pas utiliser en production.

## main

![main.png](https://static-docs.nocobase.com/47a3c71734c1d0f908b51f9ebd53c0ac.png)

### [v1.8.14](https://www.nocobase.com/en/blog/v1.8.14)

*Date de sortie : 2025-08-05*

#### 🐛 Corrections de bugs

- **[client]** Correction du problème où les chaînes brutes des variables étaient soumises avec le formulaire ([#7337](https://github.com/nocobase/nocobase/pull/7337)) par @zhangzhonghe
- **[Workflow : Approbation]** Ajout du titre de la tâche pour les éléments ajoutés et délégués par @mytharcher

### [v1.8.13](https://www.nocobase.com/en/blog/v1.8.13)

*Date de sortie : 2025-08-04*

#### 🎉 Nouvelles fonctionnalités

- **[Auth : SAML 2.0]** Ajout d'options de configuration liées à la signature par @2013xile

#### 🚀 Améliorations

- **[Workflow : JavaScript]** Changement du cache en cache d'application pour éviter les bugs en mode cluster par @mytharcher

#### 🐛 Corrections de bugs

- **[client]**

  - Correction de l'infobulle affichant [object Object] au survol dans le panneau d'actions ([#7322](https://github.com/nocobase/nocobase/pull/7322)) par @katherinehhh
  - Lors de l'utilisation de variables pour définir les valeurs par défaut des champs dans les formulaires de filtre, si la valeur de la variable est vide, la zone de saisie affichera la chaîne de variable d'origine ([#7335](https://github.com/nocobase/nocobase/pull/7335)) par @zhangzhonghe
- **[Collection : Arborescente]** Correction de la logique de synchronisation des chemins des collections arborescentes ([#7330](https://github.com/nocobase/nocobase/pull/7330)) par @ChimingLiu

### [v1.8.12](https://www.nocobase.com/en/blog/v1.8.12)

*Date de sortie : 2025-08-01*

#### 🎉 Nouvelles fonctionnalités

- **[client]** Ajout de l'option « Auto focus » pour les composants Input, TextArea, URL et InputNumber qui focalise automatiquement le champ de saisie lors du rendu initial de la page lorsqu'elle est activée ([#7320](https://github.com/nocobase/nocobase/pull/7320)) par @zhangzhonghe

#### 🐛 Corrections de bugs

- **[client]**

  - Correction de l'élément d'aperçu du fichier sur une URL nulle ([#7315](https://github.com/nocobase/nocobase/pull/7315)) par @mytharcher
  - Ajout de l'URL complète au fichier local lors de l'aperçu ([#7314](https://github.com/nocobase/nocobase/pull/7314)) par @mytharcher
- **[utils]** Gestion incorrecte du fuseau horaire pour parseDate ([#7318](https://github.com/nocobase/nocobase/pull/7318)) par @katherinehhh
- **[undefined]** Ajout d'un nouveau plugin au préréglage ([#7319](https://github.com/nocobase/nocobase/pull/7319)) par @mytharcher
- **[Gestionnaire de fichiers]** Correction de la permission du champ de stockage ([#7316](https://github.com/nocobase/nocobase/pull/7316)) par @mytharcher
- **[Workflow]** Correction du résultat `undefined` lors de la sortie du processeur ([#7317](https://github.com/nocobase/nocobase/pull/7317)) par @mytharcher
- **[Workflow : Nœud de calcul dynamique]** Correction d'une erreur causée par une API obsolète ([#7321](https://github.com/nocobase/nocobase/pull/7321)) par @mytharcher
- **[Workflow : Sous-flux]** Correction du flux suspendu par @mytharcher

## develop

![develop.png](https://static-docs.nocobase.com/7fcdd9456a17286d8a439eee52bcb8d2.png)

### [v1.9.0-alpha.7](https://www.nocobase.com/en/blog/v1.9.0-alpha.7)

*Date de sortie : 2025-08-06*

#### 🐛 Corrections de bugs

- **[Gestionnaire d'emails]** Prise en charge de la resynchronisation par @jiannx

### [v1.9.0-alpha.6](https://www.nocobase.com/en/blog/v1.9.0-alpha.6)

*Date de sortie : 2025-08-06*

#### 🚀 Améliorations

- **[Workflow]** Le titre du workflow dans la carte de tâche ne sera plus affiché avec un barré, même si la version correspondante est désactivée ([#7339](https://github.com/nocobase/nocobase/pull/7339)) par @mytharcher

#### 🐛 Corrections de bugs

- **[Visualisation des données]** Problème de variable de date dans la valeur par défaut du champ de date du bloc de filtre de graphique ([#7291](https://github.com/nocobase/nocobase/pull/7291)) par @katherinehhh
- **[Workflow : CC]** Correction de l'impossibilité de supprimer les blocs ([#7338](https://github.com/nocobase/nocobase/pull/7338)) par @mytharcher
- **[Gestionnaire d'emails]** Distinction manuelle entre le transfert et la réponse par @jiannx

### [v1.9.0-alpha.5](https://www.nocobase.com/en/blog/v1.9.0-alpha.5)

*Date de sortie : 2025-08-05*

#### 🎉 Nouvelles fonctionnalités

- **[client]** Ajout de l'option « Auto focus » pour les composants Input, TextArea, URL et InputNumber qui focalise automatiquement le champ de saisie lors du rendu initial de la page lorsqu'elle est activée ([#7320](https://github.com/nocobase/nocobase/pull/7320)) par @zhangzhonghe
- **[Auth : SAML 2.0]** Ajout d'options de configuration liées à la signature par @2013xile

#### 🚀 Améliorations

- **[Workflow : JavaScript]** Changement du cache en cache d'application pour éviter les bugs en mode cluster par @mytharcher

#### 🐛 Corrections de bugs

- **[client]**

  - Correction du problème où les chaînes brutes des variables étaient soumises avec le formulaire ([#7337](https://github.com/nocobase/nocobase/pull/7337)) par @zhangzhonghe
  - Correction de l'infobulle affichant [object Object] au survol dans le panneau d'actions ([#7322](https://github.com/nocobase/nocobase/pull/7322)) par @katherinehhh
  - Lors de l'utilisation de variables pour définir les valeurs par défaut des champs dans les formulaires de filtre, si la valeur de la variable est vide, la zone de saisie affichera la chaîne de variable d'origine ([#7335](https://github.com/nocobase/nocobase/pull/7335)) par @zhangzhonghe
- **[undefined]** Ajout d'un nouveau plugin au préréglage ([#7319](https://github.com/nocobase/nocobase/pull/7319)) par @mytharcher
- **[Collection : Arborescente]** Correction de la logique de synchronisation des chemins des collections arborescentes ([#7330](https://github.com/nocobase/nocobase/pull/7330)) par @ChimingLiu
- **[Prévisualisation de fichiers Office]** Prise en charge des fichiers `.docx`, `.xlsx` et `.pptx` avec uniquement une URL pour être prévisualisés ([#7336](https://github.com/nocobase/nocobase/pull/7336)) par @mytharcher
- **[Workflow : Nœud de calcul dynamique]** Correction d'une erreur causée par une API obsolète ([#7321](https://github.com/nocobase/nocobase/pull/7321)) par @mytharcher
- **[Workflow : Approbation]** Ajout du titre de la tâche pour les éléments ajoutés et délégués par @mytharcher
- **[Gestionnaire d'emails]** Prise en charge du même email pour plusieurs personnes par @jiannx
