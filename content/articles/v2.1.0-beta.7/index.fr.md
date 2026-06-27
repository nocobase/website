---
title: "NocoBase v2.1.0-beta.7 : Mise à jour de l'invite utilisateur de la boîte de dialogue IA"
description: "Notes de version de v2.1.0-beta.7"
---

### 🎉 Nouvelles fonctionnalités

- **[Employés IA]** Mise à jour de l'invite utilisateur du chatbox IA ([#8725](https://github.com/nocobase/nocobase/pull/8725)) par @heziqiang

### 🐛 Corrections de bugs

- **[client]**
  - Correction du problème où le composant CollectionField ne s'affichait pas dans le composant DefaultValue ([#8744](https://github.com/nocobase/nocobase/pull/8744)) par @mytharcher

  - Correction d'un problème où le bloc de données ne se rafraîchissait pas lors du changement de menu. ([#8735](https://github.com/nocobase/nocobase/pull/8735)) par @gchust

- **[moteur de flux]** Correction d'un problème où ctx.exit ne pouvait pas terminer l'exécution des flux d'événements définis par l'utilisateur. ([#8737](https://github.com/nocobase/nocobase/pull/8737)) par @gchust

- **[base de données]** Correction de l'échec de la validation personnalisée des champs dans v2 ([#8729](https://github.com/nocobase/nocobase/pull/8729)) par @jiannx

- **[serveur]** Résolution d'un problème de cache en ajoutant un hash aux ressources ([#8730](https://github.com/nocobase/nocobase/pull/8730)) par @chenos

- **[Contrôle d'accès]** L'instance de base de données utilisée lors de la définition des métadonnées ACL est incorrecte ([#8747](https://github.com/nocobase/nocobase/pull/8747)) par @2013xile

- **[Employés IA]**
  - Correction d'une erreur de chat de l'employé IA lorsque la base de connaissances est activée ([#8746](https://github.com/nocobase/nocobase/pull/8746)) par @cgyrock

  - Correction d'un problème de rendu de la configuration de la source de données IA. ([#8731](https://github.com/nocobase/nocobase/pull/8731)) par @cgyrock

- **[Moteur de flux]** correction de l'erreur de destruction SQL ([#8745](https://github.com/nocobase/nocobase/pull/8745)) par @chenos

- **[Workflow : Événement d'action personnalisée]** Correction du problème où le workflow d'action personnalisée se bloquait lors de l'exécution en tant que sous-flux ([#8738](https://github.com/nocobase/nocobase/pull/8738)) par @mytharcher

- **[Workflow : Approbation]**
  - Correction du problème où le résultat de la requête ne s'affichait pas en raison de nœuds filtrés par type par @mytharcher

  - Ajout d'un paramètre manquant pour éviter que les associations ne soient pas mises à jour lors de la soumission d'une nouvelle approbation par @mytharcher

  - Correction du problème où une erreur était levée lors de l'exécution manuelle du workflow d'approbation par @mytharcher

  - Correction d'une erreur levée en raison de la valeur manquante de `dataAfter` lors de l'ajout ou de la délégation par @mytharcher

  - Correction d'un problème ACL où la valeur d'association ne devait pas être créée ou mise à jour lorsque l'utilisateur n'a pas la permission par @mytharcher

  - Nettoyage des valeurs d'association dans les actions d'approbation, pour éviter toute manipulation de données au-delà des autorisations par @mytharcher

  - Correction du problème où le paramètre appends était filtré par ACL par @mytharcher
