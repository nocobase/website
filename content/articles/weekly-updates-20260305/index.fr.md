---
title: "Mises à jour hebdomadaires｜Les employés IA prennent désormais en charge la recherche de documents intégrés avec plusieurs mots-clés"
description: "Ceci est un résumé des mises à jour et améliorations des fonctionnalités de NocoBase du 27 février au 5 mars 2026."
---

Résumez les journaux de mise à jour hebdomadaires du produit. Les dernières versions sont disponibles sur [notre blog](https://www.nocobase.com/en/blog/timeline).

**NocoBase est actuellement mis à jour avec trois branches : `main`, `next` et `develop`.**

![version.png](https://static-docs.nocobase.com/ba5f04e27e99c625cb3822da5df07860.png)

* `main` : La version la plus stable à ce jour, recommandée pour l'installation ;
* `next` : Version bêta, contient les nouvelles fonctionnalités à venir et a été testée préliminairement. Il peut y avoir des problèmes connus ou inconnus. Elle est principalement destinée aux utilisateurs de test pour recueillir des retours et optimiser davantage les fonctionnalités. Idéale pour les utilisateurs de test qui souhaitent découvrir les nouvelles fonctionnalités en avant-première et donner leur avis ;
* `develop` : Version alpha, contient le code de fonctionnalité le plus récent, peut être incomplète ou instable, principalement destinée au développement interne et à l'itération rapide. Adaptée aux utilisateurs techniques intéressés par les fonctionnalités de pointe du produit, mais avec des problèmes potentiels et des fonctionnalités incomplètes. Ne pas utiliser en production.

## main

![main.png](https://static-docs.nocobase.com/47a3c71734c1d0f908b51f9ebd53c0ac.png)

### [v2.0.10](https://www.nocobase.com/en/blog/v2.0.10)

*Date de sortie : 2026-03-04*

### 🐛 Corrections de bugs

- **[Employés IA]** Correction d'une erreur de chat des employés IA lorsque la base de connaissances est activée ([#8746](https://github.com/nocobase/nocobase/pull/8746)) par @cgyrock
- **[Moteur de flux]** Correction d'une erreur de destruction SQL ([#8745](https://github.com/nocobase/nocobase/pull/8745)) par @chenos
- **[Contrôle d'accès]** L'instance de base de données utilisée lors de la définition des métadonnées ACL est incorrecte ([#8747](https://github.com/nocobase/nocobase/pull/8747)) par @2013xile
- **[Workflow : Approbation]** Correction du problème où le résultat de la requête ne s'affichait pas à cause des nœuds filtrés par type par @mytharcher

### [v2.0.9](https://www.nocobase.com/en/blog/v2.0.9)

*Date de sortie : 2026-03-03*

### 🐛 Corrections de bugs

- **[client]**

  - Correction du problème où le composant CollectionField ne s'affichait pas dans le composant DefaultValue ([#8744](https://github.com/nocobase/nocobase/pull/8744)) par @mytharcher
  - Correction d'un problème où le bloc de données ne se rafraîchissait pas lors du changement de menu. ([#8735](https://github.com/nocobase/nocobase/pull/8735)) par @gchust
- **[base de données]** Correction d'un échec de vérification d'expression régulière personnalisée de champ dans v2 ([#8729](https://github.com/nocobase/nocobase/pull/8729)) par @jiannx
- **[moteur de flux]** Correction d'un problème où ctx.exit ne pouvait pas terminer l'exécution des flux d'événements définis par l'utilisateur. ([#8737](https://github.com/nocobase/nocobase/pull/8737)) par @gchust
- **[Workflow : Approbation]** Ajout d'un paramètre manquant pour éviter que les associations ne soient pas mises à jour lors de la soumission d'une nouvelle approbation par @mytharcher

### [v2.0.8](https://www.nocobase.com/en/blog/v2.0.8)

*Date de sortie : 2026-03-01*

### 🎉 Nouvelles fonctionnalités

- **[Employés IA]** Mise à jour de l'invite utilisateur de la boîte de chat IA ([#8725](https://github.com/nocobase/nocobase/pull/8725)) par @heziqiang

### 🐛 Corrections de bugs

- **[serveur]** Résolution d'un problème de cache en ajoutant un hash aux ressources ([#8730](https://github.com/nocobase/nocobase/pull/8730)) par @chenos
- **[Employés IA]** Correction d'un problème de rendu de la configuration de la source de données IA. ([#8731](https://github.com/nocobase/nocobase/pull/8731)) par @cgyrock
- **[Workflow : Événement d'action personnalisée]** Correction du problème où le workflow d'action personnalisée se bloquait lors de l'exécution en tant que sous-flux ([#8738](https://github.com/nocobase/nocobase/pull/8738)) par @mytharcher
- **[Workflow : Approbation]**

  - Assainissement des valeurs d'association dans les actions d'approbation, pour éviter toute manipulation de données au-delà des autorisations par @mytharcher
  - Correction du problème où une erreur était levée lors de l'exécution manuelle du workflow d'approbation par @mytharcher
  - Correction d'une erreur levée causée par la valeur manquante de `dataAfter` lors de l'ajout ou de la délégation par @mytharcher
  - Correction du problème où le paramètre `appends` filtrait selon l'ACL par @mytharcher
  - Correction d'un problème ACL où la valeur d'association ne devait pas être créée ou mise à jour lorsque l'utilisateur n'a pas d'autorisation par @mytharcher

### [v2.0.7](https://www.nocobase.com/en/blog/v2.0.7)

*Date de sortie : 2026-02-27*

### 🎉 Nouvelles fonctionnalités

- **[Employés IA]** Prise en charge de la recherche dans la documentation intégrée avec plusieurs mots-clés et de la lecture de plusieurs documents en un seul appel d'outil ([#8718](https://github.com/nocobase/nocobase/pull/8718)) par @2013xile

### 🚀 Améliorations

- **[client]** Prise en charge de la configuration du résumé pour les tableaux ([#8721](https://github.com/nocobase/nocobase/pull/8721)) par @chenos
- **[Intégrer NocoBase]** Fourniture d'une API d'assainissement pour filtrer les valeurs d'association dans les actions ([#8688](https://github.com/nocobase/nocobase/pull/8688)) par @mytharcher

### 🐛 Corrections de bugs

- **[Visualisation des données]** Correction de l'i18n pour le texte d'entrée du plugin de graphique ([#8716](https://github.com/nocobase/nocobase/pull/8716)) par @heziqiang
- **[Workflow : JavaScript]** Correction des cas de test qui ne passaient pas sur Windows ([#8722](https://github.com/nocobase/nocobase/pull/8722)) par @mytharcher
- **[Employés IA]** Résolution du problème où le message IA s'affichait avec une longueur de 0 ([#8723](https://github.com/nocobase/nocobase/pull/8723)) par @heziqiang
- **[Impression de modèle]** Correction du problème où l'API ACL a changé mais n'est pas adaptée au plugin par @mytharcher
- **[Workflow : Approbation]** Assainissement des valeurs d'association dans les actions d'approbation, pour éviter toute manipulation de données au-delà des autorisations par @mytharcher
- **[Gestionnaire d'emails]** Correction de l'analyse du format de l'ID de contenu de l'image par @jiannx

### [v2.0.6](https://www.nocobase.com/en/blog/v2.0.6)

*Date de sortie : 2026-02-26*

### 🐛 Corrections de bugs

- **[Employés IA]** Correction d'une erreur de conversation IA lors de l'utilisation d'une base de données MySQL. ([#8708](https://github.com/nocobase/nocobase/pull/8708)) par @cgyrock

## next

![next.png](https://static-docs.nocobase.com/8ed17a0f08cc585018f6de6c8b13947d.png)

### [v2.1.0-beta.7](https://www.nocobase.com/en/blog/v2.1.0-beta.7)

*Date de sortie : 2026-03-04*

### 🎉 Nouvelles fonctionnalités

- **[Employés IA]** Mise à jour de l'invite utilisateur de la boîte de chat IA ([#8725](https://github.com/nocobase/nocobase/pull/8725)) par @heziqiang

### 🐛 Corrections de bugs

- **[client]**

  - Correction du problème où le composant CollectionField ne s'affichait pas dans le composant DefaultValue ([#8744](https://github.com/nocobase/nocobase/pull/8744)) par @mytharcher
  - Correction d'un problème où le bloc de données ne se rafraîchissait pas lors du changement de menu. ([#8735](https://github.com/nocobase/nocobase/pull/8735)) par @gchust
- **[moteur de flux]** Correction d'un problème où ctx.exit ne pouvait pas terminer l'exécution des flux d'événements définis par l'utilisateur. ([#8737](https://github.com/nocobase/nocobase/pull/8737)) par @gchust
- **[base de données]** Correction d'un échec de vérification d'expression régulière personnalisée de champ dans v2 ([#8729](https://github.com/nocobase/nocobase/pull/8729)) par @jiannx
- **[serveur]** Résolution d'un problème de cache en ajoutant un hash aux ressources ([#8730](https://github.com/nocobase/nocobase/pull/8730)) par @chenos
- **[Contrôle d'accès]** L'instance de base de données utilisée lors de la définition des métadonnées ACL est incorrecte ([#8747](https://github.com/nocobase/nocobase/pull/8747)) par @2013xile
- **[Employés IA]**

  - Correction d'une erreur de chat des employés IA lorsque la base de connaissances est activée ([#8746](https://github.com/nocobase/nocobase/pull/8746)) par @cgyrock
  - Correction d'un problème de rendu de la configuration de la source de données IA. ([#8731](https://github.com/nocobase/nocobase/pull/8731)) par @cgyrock
- **[Moteur de flux]** Correction d'une erreur de destruction SQL ([#8745](https://github.com/nocobase/nocobase/pull/8745)) par @chenos
- **[Workflow : Événement d'action personnalisée]** Correction du problème où le workflow d'action personnalisée se bloquait lors de l'exécution en tant que sous-flux ([#8738](https://github.com/nocobase/nocobase/pull/8738)) par @mytharcher
- **[Workflow : Approbation]**

  - Correction du problème où le résultat de la requête ne s'affichait pas à cause des nœuds filtrés par type par @mytharcher
  - Ajout d'un paramètre manquant pour éviter que les associations ne soient pas mises à jour lors de la soumission d'une nouvelle approbation par @mytharcher
  - Correction du problème où une erreur était levée lors de l'exécution manuelle du workflow d'approbation par @mytharcher
  - Correction d'une erreur levée causée par la valeur manquante de `dataAfter` lors de l'ajout ou de la délégation par @mytharcher
  - Correction d'un problème ACL où la valeur d'association ne devait pas être créée ou mise à jour lorsque l'utilisateur n'a pas d'autorisation par @mytharcher
  - Assainissement des valeurs d'association dans les actions d'approbation, pour éviter toute manipulation de données au-delà des autorisations par @mytharcher
  - Correction du problème où le paramètre `appends` filtrait selon l'ACL par @mytharcher

### [v2.1.0-beta.6](https://www.nocobase.com/en/blog/v2.1.0-beta.6)

*Date de sortie : 2026-02-27*

### 🎉 Nouvelles fonctionnalités

- **[Employés IA]** Prise en charge de la recherche dans la documentation intégrée avec plusieurs mots-clés et de la lecture de plusieurs documents en un seul appel d'outil ([#8718](https://github.com/nocobase/nocobase/pull/8718)) par @2013xile

### 🚀 Améliorations

- **[client]** Prise en charge de la configuration du résumé pour les tableaux ([#8721](https://github.com/nocobase/nocobase/pull/8721)) par @chenos
- **[Employés IA]** Mise à jour de l'invite utilisateur de la boîte de chat IA ([#8717](https://github.com/nocobase/nocobase/pull/8717)) par @heziqiang
- **[Intégrer NocoBase]** Fourniture d'une API d'assainissement pour filtrer les valeurs d'association dans les actions ([#8688](https://github.com/nocobase/nocobase/pull/8688)) par @mytharcher

### 🐛 Corrections de bugs

- **[Employés IA]** Résolution du problème où le message IA s'affichait avec une longueur de 0 ([#8723](https://github.com/nocobase/nocobase/pull/8723)) par @heziqiang
- **[Visualisation des données]** Correction de l'i18n pour le texte d'entrée du plugin de graphique ([#8716](https://github.com/nocobase/nocobase/pull/8716)) par @heziqiang
- **[Workflow : JavaScript]** Correction des cas de test qui ne passaient pas sur Windows ([#8722](https://github.com/nocobase/nocobase/pull/8722)) par @mytharcher
- **[Impression de modèle]** Correction du problème où l'API ACL a changé mais n'est pas adaptée au plugin par @mytharcher
- **[Workflow : Approbation]** Assainissement des valeurs d'association dans les actions d'approbation, pour éviter toute manipulation de données au-delà des autorisations par @mytharcher
- **[Gestionnaire d'emails]** Correction de l'analyse du format de l'ID de contenu de l'image par @jiannx

### [v2.1.0-beta.5](https://www.nocobase.com/en/blog/v2.1.0-beta.5)

*Date de sortie : 2026-02-26*

### 🚀 Améliorations

- **[Employés IA]** Mise à jour de l'invite utilisateur de la boîte de chat IA ([#8717](https://github.com/nocobase/nocobase/pull/8717)) par @heziqiang

### 🐛 Corrections de bugs

- **[Employés IA]** Correction d'une erreur de conversation IA lors de l'utilisation d'une base de données MySQL. ([#8708](https://github.com/nocobase/nocobase/pull/8708)) par @cgyrock

## develop

![develop.png](https://static-docs.nocobase.com/7fcdd9456a17286d8a439eee52bcb8d2.png)

### [v2.1.0-alpha.7](https://www.nocobase.com/en/blog/v2.1.0-alpha.7)

*Date de sortie : 2026-02-26*

### 🎉 Nouvelles fonctionnalités

- **[Employés IA]** Prise en charge de la recherche dans la documentation intégrée avec plusieurs mots-clés et de la lecture de plusieurs documents en un seul appel d'outil ([#8718](https://github.com/nocobase/nocobase/pull/8718)) par @2013xile

### 🚀 Améliorations

- **[Employés IA]** Mise à jour de l'invite utilisateur de la boîte de chat IA ([#8717](https://github.com/nocobase/nocobase/pull/8717)) par @heziqiang

### 🐛 Corrections de bugs

- **[client]** Sur mobile, fermer le menu d'abord, puis effectuer la navigation vers la page ([#8699](https://github.com/nocobase/nocobase/pull/8699)) par @zhangzhonghe
- **[IA LLM : GigaChat]** Correction du plugin GigaChat qui ne fonctionnait pas dans la version 2.0. ([#8707](https://github.com/nocobase/nocobase/pull/8707)) par @cgyrock
- **[Employés IA]**

  - Correction d'une erreur de conversation IA lors de l'utilisation d'une base de données MySQL. ([#8708](https://github.com/nocobase/nocobase/pull/8708)) par @cgyrock
  - Uniformisation de l'entrée de fichier pour les API chatGPT en utilisant ContentBlock ([#8696](https://github.com/nocobase/nocobase/pull/8696)) par @cgyrock
  - Correction d'une erreur de l'agent IA lorsque l'utilisateur envoie un nouveau message sans confirmer l'exécution de l'outil ([#8697](https://github.com/nocobase/nocobase/pull/8697)) par @cgyrock
- **[IA : Base de connaissances]** Correction d'une erreur de démarrage du plugin de base de connaissances IA. par @cgyrock
- **[Gestionnaire d'emails]** Erreur de rendu d'image par @jiannx
