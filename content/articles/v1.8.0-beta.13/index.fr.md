---
title: "NocoBase v1.8.0-beta.13 : Prise en charge du champ BIT dans SQL Server pour les sources de données externes"
description: "Notes de version de v1.8.0-beta.13"
---

### 🎉 Nouvelles fonctionnalités

- **[client]**

  - Prise en charge du champ BIT dans SQL Server pour les sources de données externes. ([#7058](https://github.com/nocobase/nocobase/pull/7058)) par @aaaaaajie
  - Prise en charge des variables d'agrégation personnalisées ([#6916](https://github.com/nocobase/nocobase/pull/6916)) par @zhangzhonghe
    Référence : [Variables personnalisées](https://docs-cn.nocobase.com/handbook/custom-variables)
- **[build]** prise en charge de l'autorisation commerciale ([#6554](https://github.com/nocobase/nocobase/pull/6554)) par @jiannx
- **[Gestionnaire de sources de données]** ✨ Prise en charge du chargement à la demande des collections depuis des sources de données externes ([#6979](https://github.com/nocobase/nocobase/pull/6979)) par @aaaaaajie
- **[Paramètres de licence]** ajout du paramètre de licence et validation de la licence avant le téléchargement des plugins ([#7026](https://github.com/nocobase/nocobase/pull/7026)) par @jiannx
- **[Authentification]** Prise en charge de la fonction "Mot de passe oublié" ([#6616](https://github.com/nocobase/nocobase/pull/6616)) par @zhangzhonghe
  Référence : [Mot de passe oublié](https://docs.nocobase.com/handbook/auth/user#forgot-password)
- **[Action : Mise à jour par lot]** Prise en charge de l'actualisation des données dans d'autres blocs de données après la mise à jour des données dans un bloc ([#6591](https://github.com/nocobase/nocobase/pull/6591)) par @zhangzhonghe
- **[Source de données : SQL Server externe]**

  - Ajout de la prise en charge du champ BIT SQL Server dans les sources de données externes par @aaaaaajie
  - Prise en charge du chargement à la demande des collections depuis des sources de données externes par @aaaaaajie
- **[Variables personnalisées]** Prise en charge des variables d'agrégation personnalisées par @zhangzhonghe
  Référence : [Variables personnalisées](https://docs-cn.nocobase.com/handbook/custom-variables)
- **[Gestionnaire d'emails]**

  - prise en charge de la suppression d'email par @jiannx
  - prise en charge du réglage de l'intervalle de synchronisation des emails par @jiannx
  - prise en charge de l'envoi en masse par @jiannx

### 🚀 Améliorations

- **[client]**

  - Prise en charge du remplissage des champs de saisie via le scan de code QR ([#6943](https://github.com/nocobase/nocobase/pull/6943)) par @katherinehhh
  - Déterminer l'affichage des composants mobiles en fonction du type d'appareil plutôt que de la largeur de la page ([#6611](https://github.com/nocobase/nocobase/pull/6611)) par @zhangzhonghe
  - prise en charge de la localisation pour le contenu des blocs Markdown ([#6941](https://github.com/nocobase/nocobase/pull/6941)) par @katherinehhh
  - Déterminer l'affichage de la mise en page mobile en fonction du type d'appareil plutôt que de la largeur de la page ([#6600](https://github.com/nocobase/nocobase/pull/6600)) par @zhangzhonghe
- **[Gestionnaire de tâches asynchrones]** Amélioration des performances de création de tâches lors de l'exportation ([#7078](https://github.com/nocobase/nocobase/pull/7078)) par @aaaaaajie
- **[Mobile]** Adaptation du style de la fenêtre contextuelle de notification pour les appareils mobiles ([#6557](https://github.com/nocobase/nocobase/pull/6557)) par @zhangzhonghe
- **[Gestionnaire d'emails]**

  - prise en charge de la réponse et du transfert séparés des emails dans le même sujet par @jiannx
  - implémentation du schéma puis envoi d'email et prise en charge de l'IA par @jiannx
  - prise en charge de la valeur d'envoi par défaut dans la fenêtre contextuelle, prise en charge de la recherche floue pour les destinataires, et correction de problèmes par @jiannx
  - achèvement de la fonction d'envoi en masse par @jiannx
  - amélioration fonctionnelle et correction de problèmes par @jiannx

### 🐛 Corrections de bugs

- **[cli]**

  - Ajustement de la copie de la licence lors de l'installation du plugin ([#7135](https://github.com/nocobase/nocobase/pull/7135)) par @jiannx
  - Erreur indéfinie lors du téléchargement des plugins ([#7143](https://github.com/nocobase/nocobase/pull/7143)) par @jiannx
- **[client]**

  - Après avoir effacé la valeur du badge, l'interface utilisateur n'est pas mise à jour ([#7055](https://github.com/nocobase/nocobase/pull/7055)) par @zhangzhonghe
  - Erreur lors du clic sur le bouton de filtre ([#7100](https://github.com/nocobase/nocobase/pull/7100)) par @zhangzhonghe
  - Correction du problème où les données de l'utilisateur actuel sont vides ([#7016](https://github.com/nocobase/nocobase/pull/7016)) par @zhangzhonghe
  - Contenu affiché incorrectement sur les pages ouvertes via des liens contextuels ([#6990](https://github.com/nocobase/nocobase/pull/6990)) par @zhangzhonghe
  - Transmission d'autres props au composant Variable.Input. ([#6670](https://github.com/nocobase/nocobase/pull/6670)) par @sheldon66
  - L'action "Enregistrer comme modèle" échoue si elle contient un champ d'association ([#6543](https://github.com/nocobase/nocobase/pull/6543)) par @gchust
- **[base de données]** rendre l'opérateur eq pour les champs de chaîne compatible avec le type numérique ([#7062](https://github.com/nocobase/nocobase/pull/7062)) par @chenos
- **[build]** correction de l'erreur d'exécution du client dans plugin-workflow-javascript, erreur de processus indéfini ([#6859](https://github.com/nocobase/nocobase/pull/6859)) par @jiannx
- **[Visualisation de données]** Problème de pagination du tableau ([#7151](https://github.com/nocobase/nocobase/pull/7151)) par @2013xile
- **[Gestionnaire de sources de données]** Correction d'un problème où la combinaison du chargement à la demande de la source de données et de la configuration du préfixe de table provoquait une erreur "ConnectionManager.getConnection was called after the connection manager was closed". ([#7150](https://github.com/nocobase/nocobase/pull/7150)) par @aaaaaajie
- **[plugin-service-platform]** ajustement du texte de la licence par @jiannx
- **[Variables personnalisées]** Après avoir effacé la valeur du badge, l'interface utilisateur n'est pas mise à jour par @zhangzhonghe
- **[Gestionnaire d'emails]**

  - la pièce jointe ne s'affiche pas par @jiannx
  - erreur de suppression d'email par @jiannx
  - échec de la suppression d'email par @jiannx
  - la fenêtre contextuelle de paramètres ne s'affiche pas par @jiannx
  - le tiroir de réponse n'est pas visible par @jiannx
  - la recherche floue des destinataires prend en charge les champs associés par @jiannx
  - ajout du champ "id" à mailmessagelabelsMailmessages par @jiannx
  - recherche floue des emails pour créer des filtres uniques par @jiannx
  - plusieurs clés primaires pour la table "mailmessagelabels_mailmessages" par @jiannx
