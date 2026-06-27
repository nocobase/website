---
title: "NocoBase v1.5.0 : Ajout d'une plage de dates limitée au composant de champ de date"
description: "Notes de version de la v1.5.0"
---

### 🎉 Nouvelles fonctionnalités

- **[client]**
  - Ajout d'une plage de dates limitée au composant de champ date ([#5852](https://github.com/nocobase/nocobase/pull/5852)) par @Cyx649312038

  - Prise en charge de la configuration du texte, de l'icône et du type pour les boutons d'ajout et de sélection dans les sous-tableaux ([#5778](https://github.com/nocobase/nocobase/pull/5778)) par @katherinehhh

  - Prise en charge de l'ouverture de pop-ups via les liens sur le champ readPretty ([#5747](https://github.com/nocobase/nocobase/pull/5747)) par @katherinehhh

  - Prise en charge des actions d'association et de dissociation dans les blocs d'association ([#5695](https://github.com/nocobase/nocobase/pull/5695)) par @katherinehhh

- **[server]** Ajout d'un gestionnaire d'audit ([#5601](https://github.com/nocobase/nocobase/pull/5601)) par @chenzhizdt

- **[Workflow]**
  - Ajout de motifs de caractères aléatoires ([#5959](https://github.com/nocobase/nocobase/pull/5959)) par @kennnnnnnnnn

  - Ajout d'une configuration de limite de pile pour les workflows ([#6077](https://github.com/nocobase/nocobase/pull/6077)) par @citlalinda

  - Prise en charge du déclenchement manuel des workflows ([#5664](https://github.com/nocobase/nocobase/pull/5664)) par @mytharcher

- **[Mobile]** Ajout d'un interrupteur global pour contrôler tous les boutons de retour sur mobile (activé par défaut) ([#5868](https://github.com/nocobase/nocobase/pull/5868)) par @katherinehhh

- **[Calendrier]** Le plugin Calendrier ajoute un mode d'ouverture d'événement ([#5808](https://github.com/nocobase/nocobase/pull/5808)) par @Cyx649312038

- **[Collection : Arbre]** Permet de filtrer les nœuds enfants dans les blocs de tableau arborescent ([#4770](https://github.com/nocobase/nocobase/pull/4770)) par @jimmy201602

- **[Workflow : Événement pré-action]** Prise en charge du déclenchement manuel des workflows par @mytharcher

- **[Adaptateur Redis pub sub]** Ajout d'un plugin d'adaptateur de synchronisation Redis par @mytharcher

### 🚀 Améliorations

- **[client]**
  - Suppression des règles de liaison du bouton Associer ([#6016](https://github.com/nocobase/nocobase/pull/6016)) par @katherinehhh

  - Suppression du composant squelette de ligne de tableau ([#5751](https://github.com/nocobase/nocobase/pull/5751)) par @zhangzhonghe

  - Optimisation de la logique récursive dans useMenuSearch pour de meilleures performances ([#5784](https://github.com/nocobase/nocobase/pull/5784)) par @katherinehhh

  - Suppression des composants Formily du tableau pour améliorer les performances lors du changement de pagination du tableau ([#5738](https://github.com/nocobase/nocobase/pull/5738)) par @zhangzhonghe

  - Amélioration des performances de rendu des pages et prise en charge de la fonctionnalité de maintien en vie des pages ([#5515](https://github.com/nocobase/nocobase/pull/5515)) par @zhangzhonghe

  - Implémentation du chargement à la demande pour les composants front-end ([#5647](https://github.com/nocobase/nocobase/pull/5647)) par @gchust

- **[Notification : Email]** Ajout de liens vers la page d'accueil dans les plugins de notification dans package.json. ([#6150](https://github.com/nocobase/nocobase/pull/6150)) par @sheldon66

- **[Workflow : Nœud de boucle]** Correction des styles ([#6095](https://github.com/nocobase/nocobase/pull/6095)) par @mytharcher

- **[Gestionnaire de fichiers]** Prise en charge d'autres plugins de stockage ([#6096](https://github.com/nocobase/nocobase/pull/6096)) par @jiannx
Référence : [Stockage de fichiers : S3 (Pro)](https://docs.nocobase.com/handbook/file-manager/storage/s3-pro)
- **[Workflow : kit de test]** Ajustement du style du canevas de workflow pour rendre le contenu plus compact ([#6088](https://github.com/nocobase/nocobase/pull/6088)) par @mytharcher

- **[Workflow]** Changement des noms d'API pour des noms plus raisonnables ([#6082](https://github.com/nocobase/nocobase/pull/6082)) par @mytharcher

- **[Visualisation de données]** Ajout du paramètre offset à charts-query ([#5911](https://github.com/nocobase/nocobase/pull/5911)) par @Albert-mah

- **[Mobile]** Adaptation du composant de sélecteur de plage de dates et heures pour mobile ([#5863](https://github.com/nocobase/nocobase/pull/5863)) par @katherinehhh

- **[Authentification]** Optimisation de la logique d'obtention des métadonnées des actions d'audit. ([#5814](https://github.com/nocobase/nocobase/pull/5814)) par @chenzhizdt

- **[Formulaires publics]** Optimisation du panneau d'actions et des composants de formulaire public pour l'adaptation mobile ([#5788](https://github.com/nocobase/nocobase/pull/5788)) par @katherinehhh

- **[Champ de collection : Tri]** Ajout d'une description de plugin ([#5720](https://github.com/nocobase/nocobase/pull/5720)) par @mytharcher

- **[Workflow : Événement d'action personnalisée]** Changement de l'API d'exécution manuelle par @mytharcher

- **[Workflow : Calcul JSON]**
  - Changement du nom et du groupe du nœud JSON-query par @mytharcher

  - Ajout d'icônes aux nœuds par @mytharcher

- **[Intégrer NocoBase]** Amélioration des performances de rendu des pages par @zhangzhonghe

- **[Gestionnaire de sauvegarde]** Amélioration des messages d'erreur pour les échecs de restauration par @gchust

### 🐛 Corrections de bugs

- **[client]**
  - Les règles de liaison du bouton ne fonctionnent pas correctement en raison d'un problème de séquence ([#6147](https://github.com/nocobase/nocobase/pull/6147)) par @zhangzhonghe

  - Anomalie de mise en page après la suppression de blocs ou de champs ([#6139](https://github.com/nocobase/nocobase/pull/6139)) par @zhangzhonghe

  - Correction du problème où les paramètres de champ non filtrable du bouton de filtre affectent d'autres tableaux avec la même collection ([#6121](https://github.com/nocobase/nocobase/pull/6121)) par @katherinehhh

  - Données non affichées pour le champ d'association dans les sous-détails ([#6117](https://github.com/nocobase/nocobase/pull/6117)) par @zhangzhonghe

  - Correction du problème où le 'mode de chargement des données' devient invalide après avoir changé de page ([#6115](https://github.com/nocobase/nocobase/pull/6115)) par @zhangzhonghe

  - Correction du problème où les valeurs par défaut des champs d'association ne sont pas actualisées après avoir changé de page ([#6114](https://github.com/nocobase/nocobase/pull/6114)) par @zhangzhonghe

  - Correction du problème où les valeurs par défaut des champs d'association ne prennent pas effet en mode Lecture facile ([#6066](https://github.com/nocobase/nocobase/pull/6066)) par @zhangzhonghe

  - Correction du problème où les affectations de champs pour les boutons de formulaire dans les nœuds manuels du workflow sont invalides ([#6054](https://github.com/nocobase/nocobase/pull/6054)) par @zhangzhonghe

  - Correction de l'absence de la variable de popup actuelle dans la fenêtre modale d'activation du lien de champ ([#6045](https://github.com/nocobase/nocobase/pull/6045)) par @katherinehhh

  - Poursuite du rendu de la page après la fin de la requête de vérification d'authentification ([#6020](https://github.com/nocobase/nocobase/pull/6020)) par @2013xile

  - Correction du problème où les lignes du tableau ne peuvent pas être glissées et triées ([#6013](https://github.com/nocobase/nocobase/pull/6013)) par @zhangzhonghe

  - Correction du problème où les sous-tableaux vides affichent une ligne de données vides sur iOS ([#5990](https://github.com/nocobase/nocobase/pull/5990)) par @zhangzhonghe

  - Correction du problème où le clic sur les champs d'association n'ouvre pas la boîte de dialogue contextuelle ([#5972](https://github.com/nocobase/nocobase/pull/5972)) par @zhangzhonghe

  - Correction du sélecteur de plage de dates dans le formulaire/action de filtre n'affichant pas le sélecteur d'heure lorsque showTime est défini ([#5956](https://github.com/nocobase/nocobase/pull/5956)) par @katherinehhh

  - Correction du problème d'affichage inattendu des cellules de tableau dans les plugins tiers ([#5934](https://github.com/nocobase/nocobase/pull/5934)) par @zhangzhonghe

  - Correction du problème où le bouton de suppression est désactivé dans la page de gestion des modèles de blocs ([#5922](https://github.com/nocobase/nocobase/pull/5922)) par @zhangzhonghe

  - Correction du problème où les règles de liaison de formulaire échouent lorsqu'elles dépendent des valeurs de champ des sous-tableaux ([#5876](https://github.com/nocobase/nocobase/pull/5876)) par @zhangzhonghe

  - Correction du problème de données qui ne changent pas après la pagination dans un sous-tableau ([#5856](https://github.com/nocobase/nocobase/pull/5856)) par @zhangzhonghe

  - Correction du problème où le titre de l'onglet du navigateur ne se met pas à jour après avoir changé de page ([#5857](https://github.com/nocobase/nocobase/pull/5857)) par @zhangzhonghe

  - Correction du problème où le rafraîchissement de la page dans la page de gestion des sources de données redirige vers la page d'accueil ([#5855](https://github.com/nocobase/nocobase/pull/5855)) par @zhangzhonghe

  - Correction du problème où les champs d'association dans les modèles de référence n'affichent parfois pas de données ([#5848](https://github.com/nocobase/nocobase/pull/5848)) par @zhangzhonghe

  - Correction du problème où les données de rôle ne sont pas affichées dans le tableau de gestion des utilisateurs ([#5846](https://github.com/nocobase/nocobase/pull/5846)) par @zhangzhonghe

  - Correction du problème où le bouton 'Requête personnalisée' n'est pas immédiatement visible après avoir été ajouté ([#5845](https://github.com/nocobase/nocobase/pull/5845)) par @zhangzhonghe

  - Correction du problème où les blocs ajoutés dans une fenêtre contextuelle ne sont pas affichés lors de la réouverture de la fenêtre ([#5838](https://github.com/nocobase/nocobase/pull/5838)) par @zhangzhonghe

  - Empêcher les pages cachées d'affecter les interactions avec d'autres pages ([#5836](https://github.com/nocobase/nocobase/pull/5836)) par @zhangzhonghe

  - Correction du problème où la modification de la valeur d'un champ d'association dans le bloc de détails ne se rafraîchit pas immédiatement ([#5826](https://github.com/nocobase/nocobase/pull/5826)) par @zhangzhonghe

  - Correction du problème où les champs ne sont pas affichés après leur ajout dans un sous-formulaire ([#5827](https://github.com/nocobase/nocobase/pull/5827)) par @zhangzhonghe

  - Correction du problème où le clic sur les liens n'ouvre pas une popup lorsque 'Activer le lien' est activé pour la première fois ([#5812](https://github.com/nocobase/nocobase/pull/5812)) par @zhangzhonghe

  - Correction du problème où la connexion mobile redirige vers la page de bureau ([#5805](https://github.com/nocobase/nocobase/pull/5805)) par @zhangzhonghe

  - Correction du bouton d'action de configuration qui doit être aligné à gauche ([#5798](https://github.com/nocobase/nocobase/pull/5798)) par @katherinehhh

  - Empêcher plusieurs appels API lors de la fermeture de la popup ([#5804](https://github.com/nocobase/nocobase/pull/5804)) par @zhangzhonghe

  - Correction des problèmes où les variables ne peuvent pas être utilisées correctement dans les blocs de sources de données tierces ([#5782](https://github.com/nocobase/nocobase/pull/5782)) par @zhangzhonghe

  - Correction du problème où les valeurs des champs d'association sont vides dans les modèles de blocs. Correction du problème où la portée des données de bloc utilisant des variables ne fonctionne pas correctement dans les sources de données tierces ([#5777](https://github.com/nocobase/nocobase/pull/5777)) par @zhangzhonghe

  - Correction du problème où les propriétés dynamiques du composant ne fonctionnent pas avec le chargement paresseux ([#5776](https://github.com/nocobase/nocobase/pull/5776)) par @gchust

  - Correction du message d'avertissement dans React lors du chargement dynamique de hooks dans l'environnement de développement ([#5758](https://github.com/nocobase/nocobase/pull/5758)) par @gchust

- **[build]**
  - Correction du problème de chargement après avoir défini la variable d'environnement `APP_PUBLIC_PATH` ([#5924](https://github.com/nocobase/nocobase/pull/5924)) par @gchust

  - Correction de la mise en cache incorrecte des fichiers js front-end après la construction du plugin ([#5801](https://github.com/nocobase/nocobase/pull/5801)) par @gchust

  - Correction du problème d'exécution de `yarn dev` après create-nocobase-app entraînant une erreur ([#5708](https://github.com/nocobase/nocobase/pull/5708)) par @gchust

- **[server]** Définition des actions disponibles par défaut pour l'ACL ([#5847](https://github.com/nocobase/nocobase/pull/5847)) par @chenos

- **[Formulaires publics]** Impossible d'ajouter des champs dans le `Sous-formulaire (Popover)` des formulaires publics ([#6157](https://github.com/nocobase/nocobase/pull/6157)) par @gchust

- **[Collection : SQL]** Correction du problème où le filtrage d'une collection SQL génère une erreur lorsque `DB_TABLE_PREFIX` est défini ([#6156](https://github.com/nocobase/nocobase/pull/6156)) par @2013xile

- **[Workflow]**
  - Ajout d'un cas de test pour l'action "déplacer" afin de déclencher le workflow ([#6145](https://github.com/nocobase/nocobase/pull/6145)) par @mytharcher

  - Correction de l'erreur levée lors de la reprise d'un nœud asynchrone dans l'exécution manuelle du workflow ([#5877](https://github.com/nocobase/nocobase/pull/5877)) par @mytharcher

- **[Synchronisation des données utilisateur]**
  - Correction du problème où le bouton "réessayer" n'est pas affiché dans la liste des tâches ([#6079](https://github.com/nocobase/nocobase/pull/6079)) par @2013xile

  - Correction des problèmes d'affichage des boutons de synchronisation et de tâches. ([#5896](https://github.com/nocobase/nocobase/pull/5896)) par @2013xile

- **[Vérification]** Correction des champs de formulaire vides lors de l'ouverture du tiroir d'édition dans la page des paramètres de vérification ([#5949](https://github.com/nocobase/nocobase/pull/5949)) par @chenos

- **[Source de données : Principale]** Correction du problème où les champs système dans le bloc de formulaire de filtre ne peuvent pas être modifiés ([#5885](https://github.com/nocobase/nocobase/pull/5885)) par @zhangzhonghe

- **[Visualisation de données]**
  - Correction de la hauteur initiale du bloc de graphique ([#5879](https://github.com/nocobase/nocobase/pull/5879)) par @2013xile

  - Correction du problème où les composants de champ de filtre des blocs de graphique ne s'affichent pas ([#5769](https://github.com/nocobase/nocobase/pull/5769)) par @2013xile

- **[Mobile]**
  - Correction de l'adaptation mobile du composant date sur les sous-pages ([#5859](https://github.com/nocobase/nocobase/pull/5859)) par @katherinehhh

  - Correction du champ de saisie de date manquant dans l'opération de filtre sur mobile ([#5779](https://github.com/nocobase/nocobase/pull/5779)) par @katherinehhh

- **[Workflow : Événement d'action personnalisée]**
  - Correction des cas de test du déclencheur d'action personnalisée par @mytharcher

  - Correction d'un cas de test échouant sur SQLite par @mytharcher

- **[Workflow : Événement pré-action]** Correction des cas de test de l'intercepteur de requête par @mytharcher

- **[Workflow : Message de réponse]** Correction du nom de paramètre incorrect utilisé par @mytharcher
