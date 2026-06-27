---
title: "NocoBase v1.9.0-alpha.4 : Prise en charge de la configuration de la limite de taille du corps de la requête via une variable d'environnement"
description: "Notes de version de v1.9.0-alpha.4"
---

### 🎉 Nouvelles fonctionnalités

- **[serveur]** Possibilité de configurer la limite de taille du corps de la requête via une variable d'environnement ([#7273](https://github.com/nocobase/nocobase/pull/7273)) par @aaaaaajie
- **[client]** Les blocs de tableau prennent en charge l'ajout d'un bouton « Paramètres des colonnes » pour configurer l'ordre et la visibilité des colonnes ([#7204](https://github.com/nocobase/nocobase/pull/7204)) par @kerwin612
- **[Visionneuse de fichiers Office]** Prise en charge de l'aperçu des fichiers Office via l'aperçu en direct de Microsoft ([#7300](https://github.com/nocobase/nocobase/pull/7300)) par @mytharcher
- **[Source de données : Principale]**

  - prise en charge de la lecture des tables à partir de la source de données principale ([#7238](https://github.com/nocobase/nocobase/pull/7238)) par @aaaaaajie
- **[Workflow : Nœud parallèle]** Ajout du mode « Tout réglé » pour le nœud parallèle ([#7263](https://github.com/nocobase/nocobase/pull/7263)) par @mytharcher
- **[Authentification : SAML 2.0]** Prise en charge de la redirection automatique vers l'URL SSO lorsque l'utilisateur n'est pas authentifié par @2013xile
- **[Adaptateur de file d'attente Redis]** Ajout d'un adaptateur Redis pour la file d'attente d'événements par @mytharcher

### 🚀 Améliorations

- **[client]** Ne pas fermer automatiquement le menu après la sélection ([#7252](https://github.com/nocobase/nocobase/pull/7252)) par @kerwin612
- **[serveur]** Rendre la file d'attente mémoire simultanée disponible lorsque le traitement des éléments n'est pas complet ([#7267](https://github.com/nocobase/nocobase/pull/7267)) par @mytharcher
- **[base de données]** Active automatiquement la pagination simple lorsque l'ensemble de données dépasse un seuil ([#7227](https://github.com/nocobase/nocobase/pull/7227)) par @aaaaaajie
- **[Notification : Message dans l'application]** Passage du message dans l'application de SSE à WebSocket ([#7302](https://github.com/nocobase/nocobase/pull/7302)) par @mytharcher
- **[Workflow]**

  - Réduction du nombre de tâches à charger lors de la préparation de l'exécution ([#7284](https://github.com/nocobase/nocobase/pull/7284)) par @mytharcher
  - Ajout d'une constante de type json pour la variable de test ([#7274](https://github.com/nocobase/nocobase/pull/7274)) par @mytharcher
- **[Intégration IA]** Suppression de `await` pour l'appel de `saveJob` ([#7275](https://github.com/nocobase/nocobase/pull/7275)) par @mytharcher
- **[Workflow : Nœud manuel]** storePopupContext prend en charge l'enregistrement du contexte par défaut ([#7264](https://github.com/nocobase/nocobase/pull/7264)) par @zhangzhonghe
- **[Workflow : Calcul JSON]** Rendre le nœud de requête JSON testable par @mytharcher
- **[Adaptateur de file d'attente Redis]** Rendre la file d'attente simultanée disponible lorsque le traitement des éléments n'est pas complet pour l'adaptateur Redis par @mytharcher
- **[Authentification : DingTalk]** Dans le client DingTalk, définir le titre de la barre de navigation sur une chaîne vide au lieu d'afficher « Chargement… » par @2013xile

### 🐛 Corrections de bugs

- **[utils]** Gestion incorrecte du fuseau horaire pour parseDate ([#7318](https://github.com/nocobase/nocobase/pull/7318)) par @katherinehhh
- **[client]**

  - Correction de l'aperçu d'un élément de fichier sur une URL nulle ([#7315](https://github.com/nocobase/nocobase/pull/7315)) par @mytharcher
  - Ajout de l'URL complète au fichier local lors de l'aperçu ([#7314](https://github.com/nocobase/nocobase/pull/7314)) par @mytharcher
  - Correction d'un problème empêchant le développement d'un tableau arborescent ([#7309](https://github.com/nocobase/nocobase/pull/7309)) par @zhangzhonghe
  - Correction d'un comportement inattendu dans le tri par glisser-déposer des lignes de tableau ([#6959](https://github.com/nocobase/nocobase/pull/6959)) par @ChimingLiu
  - Correction d'un problème de boucle infinie lors de l'analyse des valeurs par défaut des champs ([#7301](https://github.com/nocobase/nocobase/pull/7301)) par @zhangzhonghe
  - Problème d'affichage du champ date dans la fenêtre contextuelle du sélecteur de données de champ d'association du formulaire de filtre ([#7290](https://github.com/nocobase/nocobase/pull/7290)) par @katherinehhh
  - La recherche floue ne fonctionne pas dans le champ d'association de sélection lors de l'utilisation d'une formule comme champ de titre ([#7280](https://github.com/nocobase/nocobase/pull/7280)) par @katherinehhh
  - Variable d'objet actuel manquante dans les règles de liaison de sous-tableau ([#7266](https://github.com/nocobase/nocobase/pull/7266)) par @katherinehhh
  - Correction d'un problème où les champs Markdown n'étaient pas rendus correctement dans la vue détaillée. ([#7257](https://github.com/nocobase/nocobase/pull/7257)) par @aaaaaajie
  - Après la modification d'un champ, les champs d'association qui dépendent de ce champ n'ont pas effacé leurs valeurs ([#7262](https://github.com/nocobase/nocobase/pull/7262)) par @zhangzhonghe
  - Problème d'affichage lorsque des variables de date obsolètes sont utilisées dans les champs de date des données historiques ([#7253](https://github.com/nocobase/nocobase/pull/7253)) par @katherinehhh
  - Le paramètre du champ de titre du sélecteur de données est invalide ([#7251](https://github.com/nocobase/nocobase/pull/7251)) par @zhangzhonghe
- **[base de données]**

  - Résolution de l'échec de la pagination simple automatique causé par la convention de nommage des tables. ([#7256](https://github.com/nocobase/nocobase/pull/7256)) par @aaaaaajie
  - Correction d'un échec lors de l'exportation de grands ensembles de données depuis PostgreSQL ([#7228](https://github.com/nocobase/nocobase/pull/7228)) par @aaaaaajie
  - Correction d'un problème où le tri par clé primaire par défaut provoquait un échec de chargement de la liste lors de l'utilisation d'une source de données externe MSSQL dans un bloc de tableau. ([#7259](https://github.com/nocobase/nocobase/pull/7259)) par @aaaaaajie
- **[authentification]** Correction du problème où un `secret` vide dans la configuration de la sous-application empêchait la connexion ([#7239](https://github.com/nocobase/nocobase/pull/7239)) par @2013xile
- **[Gestionnaire de fichiers]** Correction de l'autorisation du champ de stockage ([#7316](https://github.com/nocobase/nocobase/pull/7316)) par @mytharcher
- **[Workflow]**

  - Correction du résultat `undefined` lors de la sortie du processeur ([#7317](https://github.com/nocobase/nocobase/pull/7317)) par @mytharcher
  - Correction du problème d'ID BigInt dans MySQL lors de l'enregistrement d'une tâche ([#7292](https://github.com/nocobase/nocobase/pull/7292)) par @mytharcher
  - Correction de la mauvaise version de la dépendance ([#7258](https://github.com/nocobase/nocobase/pull/7258)) par @mytharcher
- **[Workflow : Nœud de requête HTTP]** Correction d'un bug de condition de concurrence ([#7310](https://github.com/nocobase/nocobase/pull/7310)) par @mytharcher
- **[Action : Exporter les enregistrements]** Correction du formatage incorrect des champs de relation imbriqués lors de l'exportation vers Excel. ([#7277](https://github.com/nocobase/nocobase/pull/7277)) par @aaaaaajie
- **[Gestionnaire de sources de données]** Correction de la préservation des attributs des sources de données externes dans la configuration des collections ([#7249](https://github.com/nocobase/nocobase/pull/7249)) par @aaaaaajie
- **[Action : Modification par lots]** Impossible d'effectuer une modification par lots et une mise à jour par lots dans le sélecteur de données ([#7250](https://github.com/nocobase/nocobase/pull/7250)) par @zhangzhonghe
- **[Source de données : Oracle externe]** Correction de la préservation des attributs des sources de données externes dans la configuration des collections par @aaaaaajie
- **[Source de données : SQL Server externe]** Correction du format de stockage incohérent pour les champs datetime MSSQL (sans fuseau horaire) provenant de sources de données externes par @aaaaaajie
- **[Workflow : Sous-flux]** Correction du flux suspendu par @mytharcher
- **[Workflow : Approbation]**

  - Correction de l'erreur générée par le sélecteur de destinataire dans une source de données externe par @mytharcher
  - L'URL du bouton Lien pointe vers une fenêtre contextuelle sur la page actuelle, mais son clic affiche une erreur 404 par @zhangzhonghe
- **[Gestionnaire d'e-mails]**

  - ajout du champ rawId pour l'optimisation des performances par @jiannx
  - l'attribut ref dans le html provoque une exception de rendu par @jiannx
  - la relation entre les collections messages et labes est exceptionnelle sous mysql par @jiannx
