---
title: "NocoBase v1.6.0-alpha.29 : prise en charge de la configuration des permissions pour les actions"
description: "Notes de version de v1.6.0-alpha.29"
---

### 🎉 Nouvelles fonctionnalités

- **[client]** Prise en charge de la configuration des permissions pour les actions ([#6254](https://github.com/nocobase/nocobase/pull/6254)) par @katherinehhh

- **[Bloc : modèle]** Ajout du plugin `Bloc : modèle`, offrant un support de modèle pour les blocs basé sur un mécanisme d'héritage. ([#5920](https://github.com/nocobase/nocobase/pull/5920)) par @gchust

- **[Workflow : événement d'action personnalisée]** L'action de déclenchement du workflow prend désormais en charge le contrôle d'accès par @katherinehhh

### 🚀 Améliorations

- **[client]**
  - Mise à niveau des définitions de types React ([#6278](https://github.com/nocobase/nocobase/pull/6278)) par @gchust

  - Extension et amélioration du centre personnel utilisateur ([#6213](https://github.com/nocobase/nocobase/pull/6213)) par @katherinehhh

- **[Gestionnaire de fichiers]**
  - Augmentation de la longueur de l'URL à 1024 ([#6275](https://github.com/nocobase/nocobase/pull/6275)) par @mytharcher

  - Ajout du code backend pour générer l'URL de prévisualisation des fichiers ([#6281](https://github.com/nocobase/nocobase/pull/6281)) par @jiannx

  - Les noms de fichiers lors du téléchargement passeront d'aléatoires au nom d'origine avec un suffixe aléatoire. ([#6217](https://github.com/nocobase/nocobase/pull/6217)) par @chenos

  - Ajout du code backend pour générer l'URL de prévisualisation des fichiers ([#6223](https://github.com/nocobase/nocobase/pull/6223)) par @jiannx

  - Modification de l'API de type de stockage et ajout de l'API plugin ([#6246](https://github.com/nocobase/nocobase/pull/6246)) par @mytharcher

  - Modification de l'API de type de stockage et ajout de l'API plugin ([#6246](https://github.com/nocobase/nocobase/pull/6246)) par @mytharcher

- **[Bloc : panneau d'actions]** Optimisation des styles mobiles ([#6270](https://github.com/nocobase/nocobase/pull/6270)) par @zhangzhonghe

- **[Workflow]** Masquage de l'ID du nœud dans la carte du nœud du canevas du workflow ([#6251](https://github.com/nocobase/nocobase/pull/6251)) par @mytharcher

- **[Stockage de fichiers : S3(Pro)]**
  - Ajustement de l'API de stockage en fonction du dépôt principal par @mytharcher

  - Prise en charge de la configuration de l'option thumbnailRule par @jiannx

- **[Gestionnaire de sauvegarde]** Autorisation de restaurer une sauvegarde vers une application même si certains plugins sont manquants par @gchust

### 🐛 Corrections de bugs

- **[outils de développement]** Assure que l'en-tête X-Forwarded-For n'est défini que si req.ip n'est pas indéfini. ([#6320](https://github.com/nocobase/nocobase/pull/6320)) par @sheldon66

- **[client]**
  - Position incorrecte après avoir fait glisser le menu ([#6315](https://github.com/nocobase/nocobase/pull/6315)) par @zhangzhonghe

  - Erreur lors de la création d'un bloc de commentaire sans collection de commentaires ([#6309](https://github.com/nocobase/nocobase/pull/6309)) par @katherinehhh

  - Erreur lors du clic sur un nœud de bloc arborescent ([#6314](https://github.com/nocobase/nocobase/pull/6314)) par @zhangzhonghe

  - Après avoir cliqué sur le menu de gauche, la sous-page se ferme anormalement ([#6305](https://github.com/nocobase/nocobase/pull/6305)) par @zhangzhonghe

  - Ne pas effacer la valeur du champ lorsque la valeur de l'expression est vide ([#6300](https://github.com/nocobase/nocobase/pull/6300)) par @zhangzhonghe

  - Le composant de champ de texte enrichi ne peut pas être complètement effacé ([#6287](https://github.com/nocobase/nocobase/pull/6287)) par @katherinehhh

  - Impossible de déplacer la page dans un groupe ([#6289](https://github.com/nocobase/nocobase/pull/6289)) par @zhangzhonghe

  - Ignorer l'erreur d'authentification pour CurrentUserProvider. ([#6252](https://github.com/nocobase/nocobase/pull/6252)) par @sheldon66

  - Correction du fichier téléchargé manquant lors d'un téléchargement un par un ([#6260](https://github.com/nocobase/nocobase/pull/6260)) par @mytharcher

  - Correction du caractère de balise html dans le champ de saisie du formulaire de configuration du canal de messagerie. ([#6221](https://github.com/nocobase/nocobase/pull/6221)) par @sheldon66

  - Correction des fichiers manquants après le téléchargement ([#6247](https://github.com/nocobase/nocobase/pull/6247)) par @mytharcher

  - Inadéquation du format du sélecteur dans le champ du formulaire de filtre ([#6234](https://github.com/nocobase/nocobase/pull/6234)) par @katherinehhh

  - Affichage correct du composant `<Variable.TextArea />` en mode désactivé ([#6197](https://github.com/nocobase/nocobase/pull/6197)) par @mytharcher

- **[create-nocobase-app]** Erreur sur le client web après avoir exécuté `create-nocobase-app` suivi de `yarn dev` ([#6299](https://github.com/nocobase/nocobase/pull/6299)) par @gchust

- **[auth]** Ignorer la vérification d'authentification utilisateur lorsque le jeton est une clé API ([#6291](https://github.com/nocobase/nocobase/pull/6291)) par @sheldon66

- **[cli]** Amélioration de la logique interne de la commande de mise à niveau nocobase ([#6280](https://github.com/nocobase/nocobase/pull/6280)) par @chenos

- **[Gestionnaire de fichiers]**
  - Correction de la migration pour les collections héritées ([#6310](https://github.com/nocobase/nocobase/pull/6310)) par @mytharcher

  - Correction de la migration et ajout de cas de test ([#6288](https://github.com/nocobase/nocobase/pull/6288)) par @mytharcher

  - Correction de la migration et ajout de cas de test ([#6288](https://github.com/nocobase/nocobase/pull/6288)) par @mytharcher

  - Correction du type de colonne `path` de la collection de fichiers ([#6294](https://github.com/nocobase/nocobase/pull/6294)) par @mytharcher

  - Mise à niveau de la version du SDK AWS pour corriger le bug de téléchargement MinIO ([#6253](https://github.com/nocobase/nocobase/pull/6253)) par @mytharcher

- **[Bloc : modèle]** Connexion requise lors de l'accès à un formulaire public ([#6258](https://github.com/nocobase/nocobase/pull/6258)) par @gchust

- **[Contrôle d'accès]** Enregistrements de données incorrects lors de l'utilisation de champs plusieurs-à-plusieurs comme périmètre de données dans les permissions de collection ([#6304](https://github.com/nocobase/nocobase/pull/6304)) par @2013xile

- **[Bloc : Kanban]** Filtrage incorrect des données dans le bloc Kanban contextuel utilisant des variables d'enregistrement contextuelles ([#6290](https://github.com/nocobase/nocobase/pull/6290)) par @katherinehhh

- **[Champ de collection : Séquence]** Correction du champ de séquence non désactivé en mode lecture seule ([#6274](https://github.com/nocobase/nocobase/pull/6274)) par @mytharcher

- **[Workflow : kit de test]** Correction des cas de test E2E basés sur les nouvelles fonctionnalités ([#6296](https://github.com/nocobase/nocobase/pull/6296)) par @mytharcher

- **[Formulaires publics]** Ignorer la vérification d'authentification dans le formulaire public ([#6284](https://github.com/nocobase/nocobase/pull/6284)) par @chenos

- **[Authentification]** Suppression du wrapper NavigateIfNotSignIn inutile de AdminProvider. ([#6268](https://github.com/nocobase/nocobase/pull/6268)) par @sheldon66

- **[Workflow]**
  - Correction des détails de style dans le canevas du workflow ([#6240](https://github.com/nocobase/nocobase/pull/6240)) par @mytharcher

  - Prise en charge du déclenchement du workflow lors du changement de mot de passe ([#6248](https://github.com/nocobase/nocobase/pull/6248)) par @mytharcher

- **[Workflow : événement d'action personnalisée]**
  - Correction de l'erreur de build par @mytharcher

  - Correction des cas de test E2E par @mytharcher

  - Correction de l'initialiseur de déclenchement de workflow par @mytharcher

  - Correction de l'erreur de build par @mytharcher

- **[Workflow : événement pré-action]** Correction du message d'erreur du nœud de message de réponse non affiché par @mytharcher

- **[Workflow : JavaScript]** Prise en charge de l'importation des modules NocoBase par @mytharcher

- **[Gestionnaire d'emails]** Collection mailmessage publique et correction de la perte de données dans la modale par @jiannx

- **[Stockage de fichiers : S3(Pro)]**
  - Mise à niveau de la version du SDK AWS pour corriger le bug de téléchargement MinIO. par @mytharcher

  - Définition de la valeur par défaut de forcePathStyleForAccess sur virtual par @jiannx

- **[Bloc : formulaire multi-étapes]** Erreur de tri des éléments après glisser-déposer par @jiannx

- **[Bloc : arborescence]** Erreur lors du clic sur un nœud de bloc arborescent par @zhangzhonghe

- **[Gestionnaire de sauvegarde]** L'icône de suppression de la boîte de dialogue de restauration à partir d'une opération locale ne fonctionne pas par @gchust

- **[Workflow : Approbation]**
  - Correction de la migration non exécutée en raison du numéro de version par @mytharcher

  - Correction des cas de test E2E basés sur les nouvelles fonctionnalités par @mytharcher
