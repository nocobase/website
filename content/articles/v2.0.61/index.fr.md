---
title: "NocoBase v2.0.61 : Prise en charge améliorée de l'autocomplétion pour certaines fonctions RunJS intégrées"
description: "Notes de version de la v2.0.61"
---

### 🚀 Améliorations

- **[client]** Amélioration de la prise en charge de l'autocomplétion pour certaines fonctions RunJS intégrées. ([#9481](https://github.com/nocobase/nocobase/pull/9481)) par @gchust
- **[undefined]** Mise à jour de la documentation Embed NocoBase pour le plugin open-source. ([#9642](https://github.com/nocobase/nocobase/pull/9642)) par @zhangzhonghe
  Référence : [Embed NocoBase](https://docs.nocobase.com/en/integration/embed/)

### 🐛 Corrections de bugs

- **[flow-engine]**

  - Correction du problème où la page se bloquait lors de la définition des valeurs de champ pour un sous-formulaire. ([#9598](https://github.com/nocobase/nocobase/pull/9598)) par @gchust
  - Correction d'un problème où la fenêtre contextuelle affichait des données d'interface utilisateur obsolètes après avoir basculé l'interrupteur du mode de configuration de l'interface. ([#9525](https://github.com/nocobase/nocobase/pull/9525)) par @gchust
- **[client]**

  - Correction du comportement incorrect des règles de liaison des actions d'enregistrement dans les blocs de tableau. ([#9652](https://github.com/nocobase/nocobase/pull/9652)) par @gchust
  - Correction du problème où les données de champ de relation sélectionnées ne s'affichaient pas sur mobile. ([#9665](https://github.com/nocobase/nocobase/pull/9665)) par @zhangzhonghe
  - Correction du problème où les champs devenaient en lecture seule lorsqu'ils étaient réaffichés après avoir été masqués par des règles de liaison. ([#9649](https://github.com/nocobase/nocobase/pull/9649)) par @katherinehhh
- **[cli]** Correction du modèle nginx pour servir les ressources `.mjs` avec le type MIME JavaScript. ([#9626](https://github.com/nocobase/nocobase/pull/9626)) par @mytharcher
- **[database]** Correction d'un problème où l'importation de valeurs de mot de passe numériques pouvait échouer. ([#9635](https://github.com/nocobase/nocobase/pull/9635)) par @2013xile
- **[AI employees]** Correction de la validation de l'URL de base du fournisseur d'IA. ([#9667](https://github.com/nocobase/nocobase/pull/9667)) par @cgyrock
- **[Flow engine]**

  - Correction d'un problème où le glissement des onglets de la fenêtre contextuelle pour les réorganiser ne fonctionnait pas. ([#9602](https://github.com/nocobase/nocobase/pull/9602)) par @gchust
  - Correction d'un problème où la modification d'un bloc après la duplication de son modèle pouvait affecter par inadvertance le contenu du bloc d'origine. ([#9664](https://github.com/nocobase/nocobase/pull/9664)) par @gchust
- **[Notification: In-app message]** Correction d'un risque d'injection SQL dans le filtre d'horodatage du canal de notification dans l'application. ([#9630](https://github.com/nocobase/nocobase/pull/9630)) par @mytharcher
- **[License settings]** Correction du problème où la page des paramètres de licence pouvait rester bloquée longtemps lorsque la vérification de connexion pkg était lente ou inaccessible. ([#9650](https://github.com/nocobase/nocobase/pull/9650)) par @hongboji
- **[Workflow: JavaScript]** Clarification que le mode de prise en charge du module JavaScript du workflow n'est pas sûr et ne constitue pas une limite de permission. ([#9629](https://github.com/nocobase/nocobase/pull/9629)) par @mytharcher
  Référence : [Workflow JavaScript](docs/docs/en/workflow/nodes/javascript.md)
- **[Access control]** Correction des permissions incomplètes lors de la première connexion lorsqu'un rôle d'union était le rôle par défaut. ([#9632](https://github.com/nocobase/nocobase/pull/9632)) par @2013xile
- **[File manager]** Correction de la validation du chemin de stockage des fichiers locaux pour empêcher les chemins non sécurisés de s'échapper de la racine de stockage configurée. ([#9628](https://github.com/nocobase/nocobase/pull/9628)) par @mytharcher
- **[Password policy]** Correction d'un problème où la validation de la politique de mot de passe pouvait échouer pour les valeurs de mot de passe numériques. par @2013xile
