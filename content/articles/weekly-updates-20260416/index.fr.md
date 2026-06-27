---
title: "Mises à jour hebdomadaires｜Ajout du bloc de filtre arborescent"
description: "Ceci est un résumé des mises à jour et améliorations des fonctionnalités de NocoBase du 09 au 16 avril 2026."
---

Résumez les journaux de mise à jour hebdomadaires du produit. Les dernières versions sont disponibles sur [notre blog](https://www.nocobase.com/en/blog/timeline).

**NocoBase est actuellement mis à jour avec trois branches : `main`, `next` et `develop`.**

![version.png](https://static-docs.nocobase.com/ba5f04e27e99c625cb3822da5df07860.png)

* `main` : La version la plus stable à ce jour, recommandée pour l'installation ;
* `next` : Version bêta, contient les nouvelles fonctionnalités à venir et a été testée préliminairement. Il peut y avoir des problèmes connus ou inconnus. Elle est principalement destinée aux utilisateurs testeurs pour recueillir des retours et optimiser davantage les fonctionnalités. Idéale pour les utilisateurs testeurs qui souhaitent découvrir les nouvelles fonctionnalités en avant-première et donner leur avis ;
* `develop` : Version alpha, contient le code des fonctionnalités les plus récentes, peut être incomplète ou instable, principalement destinée au développement interne et à l'itération rapide. Adaptée aux utilisateurs techniques intéressés par les fonctionnalités de pointe du produit, mais avec des problèmes potentiels et des fonctionnalités incomplètes. Ne convient pas à une utilisation en production.

## main

![main.png](https://static-docs.nocobase.com/47a3c71734c1d0f908b51f9ebd53c0ac.png)

### [v2.0.37](https://www.nocobase.com/en/blog/v2.0.37)

*Date de sortie : 2026-04-14*

### 🚀 Améliorations

- **[non défini]**

  - Ajout d'une table des matières au README français ([#9037](https://github.com/nocobase/nocobase/pull/9037)) par @saraTabbane
  - Ajout de la cohérence de la table des matières dans les README localisés ([#9038](https://github.com/nocobase/nocobase/pull/9038)) par @gaston98765
  - Ajout d'une traduction arabe pour la page d'accueil de la documentation ([#9043](https://github.com/nocobase/nocobase/pull/9043)) par @gaston98765
  - Documentation : ajout d'une traduction arabe pour les pages d'introduction de démarrage ([#9044](https://github.com/nocobase/nocobase/pull/9044)) par @gaston98765
- **[client]** ajout d'un commutateur de vérification obligatoire du formulaire ([#9060](https://github.com/nocobase/nocobase/pull/9060)) par @jiannx

### 🐛 Corrections de bugs

- **[utils]** Ajout d'un contrôle de sécurité pour l'envoi de requêtes HTTP serveur, afin d'éviter une éventuelle SSRF ([#9079](https://github.com/nocobase/nocobase/pull/9079)) par @mytharcher
  Référence : [Variables d'environnement](https://docs.nocobase.com/get-started/installation/env)

### [v2.0.36](https://www.nocobase.com/en/blog/v2.0.36)

*Date de sortie : 2026-04-10*

### 🐛 Corrections de bugs

- **[client]** correction d'une erreur lors de l'ajout d'un champ plusieurs-à-plusieurs dans un sous-tableau ([#9070](https://github.com/nocobase/nocobase/pull/9070)) par @jiannx
- **[moteur de workflow]** Correction du problème d'ajout impossible des champs plusieurs-à-un provenant de sources de données externes dans le bloc tableau ([#9068](https://github.com/nocobase/nocobase/pull/9068)) par @jiannx
- **[Gestionnaire de notifications]** Optimisation des performances d'envoi des notifications dans l'application dans les scénarios de workflow ([#9066](https://github.com/nocobase/nocobase/pull/9066)) par @mytharcher

### [v2.0.35](https://www.nocobase.com/en/blog/v2.0.35)

*Date de sortie : 2026-04-09*

### 🐛 Corrections de bugs

- **[client]** Correction d'un problème où la fenêtre contextuelle de sélection d'enregistrement à partir du bouton de sélection d'un sous-tableau ne pouvait pas résoudre correctement les valeurs des variables de l'élément parent. ([#8996](https://github.com/nocobase/nocobase/pull/8996)) par @gchust
- **[Champ de collection : Code]** Correction de l'interface utilisateur des champs de code ([#9061](https://github.com/nocobase/nocobase/pull/9061)) par @2013xile

## develop

![develop.png](https://static-docs.nocobase.com/7fcdd9456a17286d8a439eee52bcb8d2.png)

### [v2.1.0-alpha.16](https://www.nocobase.com/en/blog/v2.1.0-alpha.16)

*Date de sortie : 2026-04-14*

### 🚀 Améliorations

- **[non défini]**

  - Ajout de la cohérence de la table des matières dans les README localisés ([#9038](https://github.com/nocobase/nocobase/pull/9038)) par @gaston98765
  - Ajout d'une table des matières au README français ([#9037](https://github.com/nocobase/nocobase/pull/9037)) par @saraTabbane
- **[serveur]** Amélioration de la documentation de l'API swagger du gestionnaire de plugins ([#9080](https://github.com/nocobase/nocobase/pull/9080)) par @2013xile

### 🐛 Corrections de bugs

- **[Employés IA]** Correction du problème où les messages d'erreur n'étaient pas affichés dans les conversations des employés IA ([#9097](https://github.com/nocobase/nocobase/pull/9097)) par @cgyrock
- **[Contrôle d'accès]** mise à jour du swagger acl pour le serveur mcp ([#9096](https://github.com/nocobase/nocobase/pull/9096)) par @Andrew1989Y

### [v2.1.0-alpha.15](https://www.nocobase.com/en/blog/v2.1.0-alpha.15)

*Date de sortie : 2026-04-10*

### 🎉 Nouvelles fonctionnalités

- **[Bloc : Arborescence]** Ajout d'un bloc de filtre arborescent ([#9016](https://github.com/nocobase/nocobase/pull/9016)) par @jiannx
- **[Authentification : Clés API]** ajout des commandes `pm list` et `generate-api-key` ([#9076](https://github.com/nocobase/nocobase/pull/9076)) par @chenos
- **[Employés IA]**

  - Ajout d'un outil de requête de données et d'un outil de rapport d'analyse commerciale pour les employés IA ([#9040](https://github.com/nocobase/nocobase/pull/9040)) par @2013xile
  - Ajout d'un outil de recherche web basé sur LLM pour les employés IA ([#9032](https://github.com/nocobase/nocobase/pull/9032)) par @cgyrock
- **[Gestionnaire de migration]** prise en charge de la commande de migration par @chenos
- **[Gestionnaire d'emails]** gmail prend en charge l'envoi d'e-mails avec des alias par @jiannx

### 🐛 Corrections de bugs

- **[moteur de workflow]** Correction du problème d'ajout impossible des champs plusieurs-à-un provenant de sources de données externes dans le bloc tableau ([#9068](https://github.com/nocobase/nocobase/pull/9068)) par @jiannx
- **[client]**

  - correction d'une erreur lors de l'ajout d'un champ plusieurs-à-plusieurs dans un sous-tableau ([#9070](https://github.com/nocobase/nocobase/pull/9070)) par @jiannx
  - Correction d'un problème où la fenêtre contextuelle de sélection d'enregistrement à partir du bouton de sélection d'un sous-tableau ne pouvait pas résoudre correctement les valeurs des variables de l'élément parent. ([#8996](https://github.com/nocobase/nocobase/pull/8996)) par @gchust
  - Correction d'un problème où un message de confirmation de modifications non enregistrées incorrect apparaissait pour l'action d'édition en masse ([#9054](https://github.com/nocobase/nocobase/pull/9054)) par @gchust
  - Correction d'un problème où une fenêtre contextuelle de confirmation secondaire incorrecte apparaissait lors de la soumission du formulaire après la création d'un enregistrement via un sous-tableau contextuel. ([#9035](https://github.com/nocobase/nocobase/pull/9035)) par @gchust
  - Correction du problème où ctx.request ne pouvait pas remplacer l'en-tête Authorization. ([#8850](https://github.com/nocobase/nocobase/pull/8850)) par @gchust
- **[gestionnaire-de-sources-de-données]** Correction d'un problème où certains types de champs n'étaient pas mis à jour correctement après la synchronisation des champs depuis la base de données ([#9046](https://github.com/nocobase/nocobase/pull/9046)) par @2013xile
- **[Gestionnaire de notifications]** Optimisation des performances d'envoi des notifications dans l'application dans les scénarios de workflow ([#9066](https://github.com/nocobase/nocobase/pull/9066)) par @mytharcher
- **[Champ de collection : Code]** Correction de l'interface utilisateur des champs de code ([#9061](https://github.com/nocobase/nocobase/pull/9061)) par @2013xile
- **[Nœud de requête HTTP du workflow]** Assainissement des résultats du nœud de requête du workflow pour éviter d'exposer la configuration de la requête, les nouveaux nœuds sont par défaut configurés pour ne renvoyer que les données de réponse, et ajout de journaux de débogage pour les requêtes échouées. ([#9024](https://github.com/nocobase/nocobase/pull/9024)) par @mytharcher
- **[Employés IA]**

  - Correction du problème où l'annulation du raisonnement des employés IA provoquait le plantage du service ([#9031](https://github.com/nocobase/nocobase/pull/9031)) par @cgyrock
  - Correction de l'échec du téléchargement de documents des employés IA en cas d'accès à un sous-chemin avec APP_PUBLIC_PATH configuré. ([#9034](https://github.com/nocobase/nocobase/pull/9034)) par @cgyrock
  - Correction du problème lors de l'utilisation des modèles Deepseek ou MiniMax sur dashscope ([#9033](https://github.com/nocobase/nocobase/pull/9033)) par @cgyrock
