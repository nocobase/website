---
title: "NocoBase v2.0.0-alpha.50 : Prise en charge du paramètre « Multiple » dans le composant de téléchargement de pièces jointes"
description: "Notes de version de v2.0.0-alpha.50"
---

### 🚀 Améliorations

- **[client]**

  - Prise en charge du paramètre Multiple dans le composant de téléchargement de pièces jointes ([#8052](https://github.com/nocobase/nocobase/pull/8052)) par @katherinehhh
  - Affichage des options réduites au survol dans le composant Select ([#8029](https://github.com/nocobase/nocobase/pull/8029)) par @katherinehhh
  - Affichage des options réduites au survol dans le composant Select ([#8030](https://github.com/nocobase/nocobase/pull/8030)) par @katherinehhh
- **[Employés IA]** Ajout du champ fournisseur manquant dans le formulaire d'ajout de LLM ([#8049](https://github.com/nocobase/nocobase/pull/8049)) par @heziqiang
- **[Workflow]** Ajout du contexte de source de données "principale" pour UserSelect, afin de fournir un composant plus générique pouvant être utilisé ailleurs ([#8010](https://github.com/nocobase/nocobase/pull/8010)) par @mytharcher

### 🐛 Corrections de bugs

- **[client]**

  - Correction du problème où "N/A" s'affichait après la désactivation de allowMultiple dans la sélection d'enregistrements d'association many-to-many ([#8050](https://github.com/nocobase/nocobase/pull/8050)) par @katherinehhh
  - Correction du problème de scintillement de la liste déroulante des règles de liaison ([#8018](https://github.com/nocobase/nocobase/pull/8018)) par @zhangzhonghe
  - Correction d'un problème où le passage d'un champ date à un champ heure dans l'action de filtre provoquait une erreur de rendu. ([#8036](https://github.com/nocobase/nocobase/pull/8036)) par @gchust
  - Correction d'un problème où le menu de l'enregistrement courant apparaissait lors de l'ajout d'un bloc de commentaires. ([#8039](https://github.com/nocobase/nocobase/pull/8039)) par @gchust
  - Correction de l'échec de suppression d'enregistrement dans le bloc de sélection d'enregistrements ([#8023](https://github.com/nocobase/nocobase/pull/8023)) par @katherinehhh
  - Correction d'un problème où le style par défaut du champ JS dans le bloc de détail était incorrect. ([#8031](https://github.com/nocobase/nocobase/pull/8031)) par @gchust
  - Correction du bloc de tableau arborescent qui ne pouvait pas développer les nœuds enfants ([#8011](https://github.com/nocobase/nocobase/pull/8011)) par @katherinehhh
  - Correction du glissement des colonnes de sous-tableau qui ne fonctionnait pas ([#8026](https://github.com/nocobase/nocobase/pull/8026)) par @katherinehhh
  - Correction de la largeur des colonnes de sous-tableau qui n'était pas appliquée ([#8027](https://github.com/nocobase/nocobase/pull/8027)) par @katherinehhh
  - Résolution d'un problème provoquant des erreurs lors du chargement des données pour les champs d'association dans les fenêtres contextuelles, garantissant un affichage et un fonctionnement plus fluides des données. ([#7985](https://github.com/nocobase/nocobase/pull/7985)) par @gchust
  - Correction du problème de style de l'infobulle du champ d'affichage Markdown ([#8012](https://github.com/nocobase/nocobase/pull/8012)) par @katherinehhh
  - Correction d'un problème où les titres par défaut des fenêtres contextuelles d'édition et de création étaient incorrects. ([#8033](https://github.com/nocobase/nocobase/pull/8033)) par @gchust
  - Correction d'un bug de chargement différé dans Variable.Input, qui provoquait un rendu incorrect du menu des options de variable ([#8009](https://github.com/nocobase/nocobase/pull/8009)) par @mytharcher
  - Correction d'un problème où la variable d'enregistrement contextuel de la fenêtre contextuelle ne pouvait pas être correctement résolue dans une fenêtre ouverte par un champ d'association. ([#8019](https://github.com/nocobase/nocobase/pull/8019)) par @gchust
- **[acl]** Correction d'un problème où les métadonnées ACL étaient incorrectes lorsque les périmètres d'autorisation de source de données externe utilisaient des variables liées à l'utilisateur courant ([#8013](https://github.com/nocobase/nocobase/pull/8013)) par @2013xile
- **[moteur de flux]**

  - Correction de l'échec de sauvegarde de l'enregistrement de commentaire après modification ([#8035](https://github.com/nocobase/nocobase/pull/8035)) par @katherinehhh
  - Correction d'un problème où les blocs de données ne se rafraîchissaient pas lors de la fermeture d'une fenêtre contextuelle en cliquant sur le bouton de soumission du formulaire dans la fenêtre. ([#8021](https://github.com/nocobase/nocobase/pull/8021)) par @gchust
- **[Éditeur de thème]** Activation du sélecteur de thème sur les appareils mobiles ([#8046](https://github.com/nocobase/nocobase/pull/8046)) par @zhangzhonghe
- **[Gestionnaire multi-applications (obsolète)]** Les paramètres de niveau de journal ne s'appliquaient pas aux sous-applications ([#8045](https://github.com/nocobase/nocobase/pull/8045)) par @2013xile
- **[Gestionnaire de sources de données]** Correction des erreurs lors de la mise à jour des mots de passe pour les sources de données externes ([#8024](https://github.com/nocobase/nocobase/pull/8024)) par @cgyrock
- **[Action : Importer des enregistrements]** Correction du problème où une erreur était levée lorsqu'un champ dans le fichier xlsx importé avait une valeur `null` ([#8037](https://github.com/nocobase/nocobase/pull/8037)) par @mytharcher
- **[Workflow]** Correction du problème où la file d'attente était fermée avant la publication des messages ([#8003](https://github.com/nocobase/nocobase/pull/8003)) par @mytharcher
- **[Commentaires]**

  - Correction de l'échec de suppression d'enregistrement dans le bloc de commentaires par @katherinehhh
  - Correction de l'affichage d'un avertissement lorsque le bloc de commentaires est utilisé sur une collection non dédiée aux commentaires par @katherinehhh
- **[Multi-espace]** Les appareils mobiles prennent en charge le changement d'espace par @jiannx
- **[Workflow : Sous-flux]** Correction du problème où le workflow sélectionné affichait "N/A" lorsque le nombre de workflows était supérieur à 200 par @mytharcher
- **[Workflow : Approbation]**

  - Correction d'une erreur levée lors de la création d'un bloc d'informations d'approbation par @mytharcher
  - Ajout d'une migration pour éviter les erreurs d'enregistrement en double lors de l'ajout d'un index par @mytharcher
  - Correction du problème où l'action d'impression ne fonctionnait pas lors du rafraîchissement de la page avec une fenêtre modale ouverte par @mytharcher
