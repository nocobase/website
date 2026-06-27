---
title: "NocoBase v2.1.0-beta.8 : Prise en charge du bouton de déclenchement de workflow pour configurer le flux après succès"
description: "Notes de version de v2.1.0-beta.8"
---

### 🎉 Nouvelles fonctionnalités

- **[client]** Prise en charge de la configuration du bouton de déclenchement de workflow pour exécuter un flux après succès ([#8726](https://github.com/nocobase/nocobase/pull/8726)) par @mytharcher

- **[Champ de collection : Code]** Le champ-code prend en charge la version 2.0 ([#8804](https://github.com/nocobase/nocobase/pull/8804)) par @jiannx

- **[Workflow : Événement d'action personnalisée]** Prise en charge des données de contexte personnalisées pour transmettre des variables au déclencheur d'action personnalisée dans un sous-flux ([#8758](https://github.com/nocobase/nocobase/pull/8758)) par @mytharcher

### 🚀 Améliorations

- **[client]** Afficher un message d'invite lorsqu'aucune donnée n'est disponible pour le bloc de formulaire d'édition ou le bloc de détails. ([#8790](https://github.com/nocobase/nocobase/pull/8790)) par @gchust

- **[moteur-de-flux]** Correction d'un problème où le nouveau code runjs analysait les expressions de variables avant l'exécution. ([#8762](https://github.com/nocobase/nocobase/pull/8762)) par @gchust

- **[Workflow]** Afficher tous les types de nœuds dans le menu d'ajout, même s'ils ne sont pas disponibles ([#8828](https://github.com/nocobase/nocobase/pull/8828)) par @mytharcher

- **[Action : Requête personnalisée]** Le streaming d'événements prend en charge les requêtes personnalisées ([#8749](https://github.com/nocobase/nocobase/pull/8749)) par @jiannx

- **[IA : Base de connaissances]** Refonte de la logique de chargement des documents de la base de connaissances. par @cgyrock

- **[Adaptateur de verrouillage Redis]** Refactorisation suite aux modifications de l'API de LockManager dans le dépôt principal par @mytharcher

- **[Gestionnaire de sauvegarde]** Ajout d'un verrou pour les sauvegardes planifiées sur les nœuds du cluster par @mytharcher

- **[Gestionnaire de migration]** Amélioration des vérifications de migration, prise en charge du téléchargement SQL, formatage des logs et visibilité du processus d'exécution par @cgyrock

### 🐛 Corrections de bugs

- **[client]**
  - Données des sous-formulaires et sous-tableaux non affichées en raison d'une vérification des permissions ([#8846](https://github.com/nocobase/nocobase/pull/8846)) par @chenos

  - Correction du problème où le bouton de réduction du formulaire de filtre v2 cessait de fonctionner après le tri des champs ([#8843](https://github.com/nocobase/nocobase/pull/8843)) par @zhangzhonghe

  - Correction du problème où les champs personnalisés dans les valeurs de champ du formulaire de filtre ne pouvaient pas afficher le type de saisie de valeur correct ([#8823](https://github.com/nocobase/nocobase/pull/8823)) par @zhangzhonghe

  - Correction du problème où la page de gestion des modèles de référence (v1) manquait les actions de filtre et d'actualisation. ([#8833](https://github.com/nocobase/nocobase/pull/8833)) par @gchust

  - Correction du problème où le bloc de détails d'une collection SQL rencontrait une erreur lors du chargement des données. ([#8817](https://github.com/nocobase/nocobase/pull/8817)) par @gchust

  - Correction du problème où les règles de liaison de champ dans le bloc de détails ne prenaient pas effet lors du rendu initial. ([#8813](https://github.com/nocobase/nocobase/pull/8813)) par @gchust

  - Correction du problème de style du bouton de retour sur les sous-pages v2 ([#8810](https://github.com/nocobase/nocobase/pull/8810)) par @zhangzhonghe

  - Les blocs V2 n'affichent désormais que les actions prises en charge par la source de données actuelle ([#8803](https://github.com/nocobase/nocobase/pull/8803)) par @zhangzhonghe

  - Correction de la validation pour les champs obligatoires masqués par liaison en mode configuration ([#8773](https://github.com/nocobase/nocobase/pull/8773)) par @zhangzhonghe

  - Correction du rognage des onglets et garantie d'une largeur minimale des onglets en mode conception ([#8771](https://github.com/nocobase/nocobase/pull/8771)) par @zhangzhonghe

  - Correction des mises à jour UI retardées pour le basculement de masquage de colonne de sous-tableau et la suppression consécutive de colonnes ([#8755](https://github.com/nocobase/nocobase/pull/8755)) par @zhangzhonghe

  - Désactivation de l'ajout de blocs pour les enregistrements associés plusieurs-à-plusieurs (tableau) pour éviter les erreurs. ([#8779](https://github.com/nocobase/nocobase/pull/8779)) par @gchust

  - Correction du problème de navigation par lien contextuel annulée après la fermeture de la vue ([#8752](https://github.com/nocobase/nocobase/pull/8752)) par @zhangzhonghe

  - Correction d'un problème où le bloc de données d'origine ne se rafraîchissait pas après la modification des données dans la fenêtre contextuelle du champ d'association. ([#8782](https://github.com/nocobase/nocobase/pull/8782)) par @gchust

  - Correction de l'apparition de deux vérifications obligatoires dans le formulaire de mise à jour d'enregistrement ([#8761](https://github.com/nocobase/nocobase/pull/8761)) par @jiannx

- **[serveur]** Correction du problème d'erreur dans les requêtes de données des sources de données non relationnelles ([#8776](https://github.com/nocobase/nocobase/pull/8776)) par @cgyrock

- **[gestionnaire-de-verrouillage]** Correction d'un problème de condition de concurrence du gestionnaire de verrouillage ([#8734](https://github.com/nocobase/nocobase/pull/8734)) par @mytharcher

- **[base-de-données]**
  - Correction de l'absence de l'option 'Pagination simple' dans le modèle de vue de la collection. ([#8778](https://github.com/nocobase/nocobase/pull/8778)) par @cgyrock

  - La règle de validation de précision pour les champs numériques ne s'applique pas ([#8768](https://github.com/nocobase/nocobase/pull/8768)) par @2013xile

- **[non-défini]** Correction d'un problème où, après une mise à niveau, le système signalait que le bloc de référence de plugin (plugin-block-reference) était introuvable. ([#8757](https://github.com/nocobase/nocobase/pull/8757)) par @gchust

- **[Contrôle d'accès]**
  - Utilisation de collection.filterTargetKey au lieu de Model.primaryKeyField ([#8853](https://github.com/nocobase/nocobase/pull/8853)) par @chenos

  - Correction d'une erreur de modification de données dans la source de données API Restful. ([#8788](https://github.com/nocobase/nocobase/pull/8788)) par @cgyrock

- **[Modèles UI]**
  - Correction du problème où les enregistrements associés ne pouvaient pas être chargés correctement après avoir enregistré le bloc de détails en tant que modèle. ([#8827](https://github.com/nocobase/nocobase/pull/8827)) par @gchust

  - Correction de l'erreur de rendu pour le bloc de référence du panneau d'action. ([#8818](https://github.com/nocobase/nocobase/pull/8818)) par @gchust

  - Correction du problème où le flux d'événements du bloc de référence dans le bloc de tableau ne pouvait pas être configuré avec un flux d'événements de clic sur ligne. ([#8814](https://github.com/nocobase/nocobase/pull/8814)) par @gchust

  - Correction d'un problème où la réutilisation du modèle de bloc d'enregistrement actuel pour le bloc de détails et le bloc de formulaire d'édition pouvait empêcher le chargement correct des données. ([#8775](https://github.com/nocobase/nocobase/pull/8775)) par @gchust

  - Correction d'un problème où les modifications apportées aux propriétés dans le flux d'événements d'un bloc de modèle ne prenaient pas effet. ([#8765](https://github.com/nocobase/nocobase/pull/8765)) par @gchust

- **[Visionneuse de fichiers Office]** Modification de la hauteur de la modale à une valeur appropriée pour afficher plus de contenu du fichier ([#8835](https://github.com/nocobase/nocobase/pull/8835)) par @mytharcher

- **[Action : Exporter les enregistrements]**
  - Correction du problème où le champ belongsToArray était vide dans l'Excel exporté ([#8787](https://github.com/nocobase/nocobase/pull/8787)) par @cgyrock

  - Correction du problème où les champs de type numérique dans les fichiers Excel s'affichaient sous forme de chaînes de caractères ([#8774](https://github.com/nocobase/nocobase/pull/8774)) par @cgyrock

- **[Bloc : Liste]** Correction d'un problème où les champs du bloc de liste ne pouvaient pas utiliser la variable d'enregistrement actuel. ([#8784](https://github.com/nocobase/nocobase/pull/8784)) par @gchust

- **[Source de données : Principale]**
  - La mise à jour de la valeur par défaut d'un champ JSON ne prend pas effet ([#8767](https://github.com/nocobase/nocobase/pull/8767)) par @2013xile

  - Erreur de synchronisation des champs ([#8766](https://github.com/nocobase/nocobase/pull/8766)) par @2013xile

- **[Workflow]** Correction du problème où l'espace réservé de glissement de nœud s'affichait incorrectement lors du glissement de blocs dans le nœud d'approbation ([#8763](https://github.com/nocobase/nocobase/pull/8763)) par @mytharcher

- **[Employés IA]**
  - Correction d'une erreur d'appel d'outil lors de l'utilisation du modèle de raisonnement deepseek. ([#8741](https://github.com/nocobase/nocobase/pull/8741)) par @cgyrock

  - Correction des problèmes où dashscope/deepseek/kimi ne pouvaient pas lire les fichiers de documents téléchargés. ([#8732](https://github.com/nocobase/nocobase/pull/8732)) par @cgyrock

- **[Multi-espace]** Correction de l'erreur de permission d'espace lors de la création de données avec la clé primaire par @jiannx

- **[Workflow : Approbation]**
  - Correction des libellés non traduits dans les détails de traitement de l'approbation par @zhangzhonghe

  - Correction du problème où les personnes assignées ne suivaient pas l'ordre configuré dans le nœud par @mytharcher

- **[Gestionnaire de migration]**
  - Correction d'un potentiel blocage du processus causé par la journalisation d'instructions SQL excessivement volumineuses incluses dans les exceptions d'erreur de migration par @cgyrock

  - Correction d'une erreur de build par @mytharcher

  - Correction de l'absence de description de migration et définition de l'heure actuelle comme valeur par défaut par @cgyrock

  - Ajustement du répertoire temporaire dans le stockage, pour prendre en charge l'utilisation en mode cluster par @mytharcher
