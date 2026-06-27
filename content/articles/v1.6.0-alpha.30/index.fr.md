---
title: "NocoBase v1.6.0-alpha.30 : le champ heure prend en charge le format horaire"
description: "Notes de version de v1.6.0-alpha.30"
---

### 🎉 Nouvelles fonctionnalités

- **[client]**
  - Ajout de la configuration d'infobulle pour les éléments de menu et les en-têtes de tableau ([#6346](https://github.com/nocobase/nocobase/pull/6346)) par @Cyx649312038

  - Le champ horaire prend désormais en charge le format de l'heure ([#6329](https://github.com/nocobase/nocobase/pull/6329)) par @katherinehhh

- **[Visualisation de données]** Prise en charge du tri NULLS dans les requêtes de graphiques ([#6383](https://github.com/nocobase/nocobase/pull/6383)) par @2013xile

- **[Intégration IA]** Nouveau plugin : Intégration IA ([#6283](https://github.com/nocobase/nocobase/pull/6283)) par @2013xile
Référence : [Intégration IA](https://docs.nocobase.com/handbook/ai/service)
- **[Vérification]** Prise en charge de la liaison par l'utilisateur de différents types de vérification, tels que les authentificateurs SMS et TOTP, et vérification d'identité dans les scénarios requis. Permet le développement et l'extension des méthodes de vérification. ([#6026](https://github.com/nocobase/nocobase/pull/6026)) par @2013xile
Référence : [Vérification](https://docs.nocobase.com/handbook/verification)
- **[Intégration IA (EE)]** Nouveau plugin : Intégration IA (EE) par @2013xile
Référence : [Intégration IA](https://docs.nocobase.com/handbook/ai/service)
- **[Authentification à deux facteurs (2FA)]** Nouveaux plugins : Authentification à deux facteurs et Vérification : Authentificateur TOTP par @2013xile
Référence : [Authentification à deux facteurs (2FA)](https://docs.nocobase.com/handbook/two-factor-authentication)<br />[Vérification : Authentificateur TOTP](https://docs.nocobase.com/handbook/verification-totp-authenticator)
### 🚀 Améliorations

- **[client]**
  - Ajout de la gestion du rebond (debounce) aux boutons ([#6351](https://github.com/nocobase/nocobase/pull/6351)) par @Cyx649312038

  - Rendre le menu réactif à la largeur de l'écran ([#6331](https://github.com/nocobase/nocobase/pull/6331)) par @zhangzhonghe

- **[serveur]** Mise à niveau de koa vers 2.15.4 ; mise à niveau de @koa/cors vers 5.0.0 ([#6334](https://github.com/nocobase/nocobase/pull/6334)) par @2013xile

- **[Workflow]**
  - Permettre d'ignorer le déclenchement du workflow de collecte dans un événement de base de données ([#6379](https://github.com/nocobase/nocobase/pull/6379)) par @mytharcher

  - Chargement paresseux du résultat du travail pour de meilleures performances ([#6344](https://github.com/nocobase/nocobase/pull/6344)) par @mytharcher

- **[Bloc : modèle]** Prise en charge de l'enregistrement d'un bloc de données en tant que modèle de bloc à partir d'une page ([#6348](https://github.com/nocobase/nocobase/pull/6348)) par @gchust

- **[Workflow : Nœud d'agrégation]** Ajout d'un processus d'arrondi pour les nombres agrégés basés sur le type double ([#6358](https://github.com/nocobase/nocobase/pull/6358)) par @mytharcher

- **[Action : Importer des enregistrements Pro]** Prise en charge des options avancées dans le bouton d'importation Pro par @katherinehhh

- **[Workflow : JavaScript]** Prise en charge de l'importation de packages depuis un chemin absolu par @mytharcher

- **[Stockage de fichiers : S3(Pro)]** Tentative de rechargement des stockages si le stockage n'est pas trouvé par @jiannx

### 🐛 Corrections de bugs

- **[client]**
  - La traduction personnalisée du titre du menu est invalide ([#6377](https://github.com/nocobase/nocobase/pull/6377)) par @zhangzhonghe

  - Paramètre de tri manquant pour les champs de collection héritée ([#6372](https://github.com/nocobase/nocobase/pull/6372)) par @katherinehhh

  - Formatage incorrect du champ horaire dans le formulaire de filtre ([#6374](https://github.com/nocobase/nocobase/pull/6374)) par @katherinehhh

  - Problème lié au fuseau horaire entraînant une heure de moins dans le sélecteur de date ([#6359](https://github.com/nocobase/nocobase/pull/6359)) par @katherinehhh

  - La liste déroulante des paramètres de stockage du champ de pièce jointe n'affiche pas les options ([#6365](https://github.com/nocobase/nocobase/pull/6365)) par @katherinehhh

  - Les composants de sous-formulaire ne s'alignent pas avec le formulaire principal lorsque l'étiquette est masquée ([#6357](https://github.com/nocobase/nocobase/pull/6357)) par @katherinehhh

  - Correction d'une erreur lors de la création d'une collection de fichiers ([#6363](https://github.com/nocobase/nocobase/pull/6363)) par @mytharcher

  - Résolution du problème de barre de défilement lors de l'ouverture d'un onglet de page avec un bloc en pleine hauteur ([#6347](https://github.com/nocobase/nocobase/pull/6347)) par @katherinehhh

  - Les pages avec un favicon personnalisé affichent brièvement le favicon NocoBase pendant le chargement ([#6337](https://github.com/nocobase/nocobase/pull/6337)) par @zhangzhonghe

  - Le bloc d'association ne s'affiche pas dans la fenêtre contextuelle lors de l'héritage de collection ([#6303](https://github.com/nocobase/nocobase/pull/6303)) par @katherinehhh

  - Le bouton "ajouter nouveau" apparaît au survol en mode lecture seule du champ d'association ([#6322](https://github.com/nocobase/nocobase/pull/6322)) par @katherinehhh

- **[auth]** Éviter le renouvellement du jeton lors de l'autorisation WebSocket. ([#6342](https://github.com/nocobase/nocobase/pull/6342)) par @sheldon66

- **[base de données]** Correction d'une erreur lors de la récupération des enregistrements de collection de relations si la clé source dans les champs de relation est une chaîne numérique ([#6360](https://github.com/nocobase/nocobase/pull/6360)) par @2013xile

- **[Client WEB]**
  - Après avoir ajouté une page à la table de routage, la page apparaît vide ([#6366](https://github.com/nocobase/nocobase/pull/6366)) par @zhangzhonghe

  - L'ajout d'onglets de page dans la table de gestion de routage ne prend pas effet ([#6362](https://github.com/nocobase/nocobase/pull/6362)) par @zhangzhonghe

- **[Contrôle d'accès]** Dans la table de gestion des permissions, le nom de l'onglet de page est vide ([#6364](https://github.com/nocobase/nocobase/pull/6364)) par @zhangzhonghe

- **[Utilisateurs]**
  - Erreur "Aucune permission" lorsque des utilisateurs sans permissions de gestion des utilisateurs consultent leur propre profil ([#6382](https://github.com/nocobase/nocobase/pull/6382)) par @2013xile

  - Erreur "Aucune permission" lors de la mise à jour des paramètres système dans la gestion des utilisateurs ([#6380](https://github.com/nocobase/nocobase/pull/6380)) par @2013xile

  - Une interface utilisateur d'erreur s'affiche brièvement lors du premier chargement de la table de gestion des permissions utilisateur ([#6324](https://github.com/nocobase/nocobase/pull/6324)) par @zhangzhonghe

- **[Intégration IA]** Problème où le `baseURL` par défaut pour le fournisseur LLM est `undefined` ([#6367](https://github.com/nocobase/nocobase/pull/6367)) par @2013xile

- **[Workflow]** Correction de l'acl pour obtenir un travail ([#6352](https://github.com/nocobase/nocobase/pull/6352)) par @mytharcher

- **[Bloc : Carte]** Les paramètres de configuration pour le champ de carte sont manquants/non visibles ([#6336](https://github.com/nocobase/nocobase/pull/6336)) par @zhangzhonghe

- **[Mobile]** Erreur de page : Impossible de lire les propriétés de null (lecture de 'match') ([#6335](https://github.com/nocobase/nocobase/pull/6335)) par @zhangzhonghe

- **[Bloc : Panneau d'actions]** Le réglage de la hauteur du panneau d'actions est invalide ([#6321](https://github.com/nocobase/nocobase/pull/6321)) par @zhangzhonghe

- **[Workflow : Événement d'action personnalisée]**
  - Correction des paramètres régionaux et de la collection modifiables après exécution par @mytharcher

  - Correction de la migration pour les boutons hérités liés à un workflow d'action personnalisée par @mytharcher

- **[Marque personnalisée]** Les pages avec un favicon personnalisé affichent brièvement le favicon NocoBase pendant le chargement par @zhangzhonghe

- **[Action : Importer des enregistrements Pro]**
  - Utilisation d'une option supplémentaire pour déterminer s'il faut déclencher le workflow ou non par @mytharcher

  - Le bouton d'importation du bloc d'association pour la détection des enregistrements en double n'affiche aucune donnée dans la liste déroulante des champs par @katherinehhh

- **[Action : Exporter des enregistrements Pro]**
  - L'action d'exportation Pro manque les paramètres de tri par @katherinehhh

  - Suppression de l'option 'ajouter un bloc' dans les paramètres du bouton d'exportation de pièce jointe par @katherinehhh

- **[Modèle d'impression]** La restauration à partir du local a échoué lorsque les plugins de modèle d'impression d'action et de gestionnaire de sauvegarde étaient tous deux activés par @gchust

- **[Workflow : Approbation]**
  - Correction de la migration pour les blocs hérités par @mytharcher

  - Correction de l'erreur causée par `.toJSON()` par @mytharcher
