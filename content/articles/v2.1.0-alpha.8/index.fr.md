---
title: "NocoBase v2.1.0-alpha.8 : Mise à jour de l'invite utilisateur de la boîte de dialogue IA"
description: "Notes de version de v2.1.0-alpha.8"
---

### 🎉 Nouvelles fonctionnalités

- **[client]** Prise en charge de la configuration du bouton de déclenchement du workflow après un flux réussi ([#8726](https://github.com/nocobase/nocobase/pull/8726)) par @mytharcher

- **[Champ de collection : Code]** Le champ-code prend en charge la version 2.0 ([#8804](https://github.com/nocobase/nocobase/pull/8804)) par @jiannx

- **[Workflow : Événement d'action personnalisée]** Prise en charge des données de contexte personnalisées pour passer des variables au déclencheur d'action personnalisée dans un sous-flux ([#8758](https://github.com/nocobase/nocobase/pull/8758)) par @mytharcher

- **[Employés IA]** Mise à jour de l'invite utilisateur de la boîte de dialogue IA ([#8725](https://github.com/nocobase/nocobase/pull/8725)) par @heziqiang

### 🚀 Améliorations

- **[client]**
  - Afficher un message d'invite lorsqu'aucune donnée n'est disponible pour le bloc de formulaire d'édition ou le bloc de détails. ([#8790](https://github.com/nocobase/nocobase/pull/8790)) par @gchust

  - Refonte des paramètres de mise en page d'administration et de l'application pour modéliser l'architecture hôte avec des garde-fous de compatibilité v1 v2 ([#8710](https://github.com/nocobase/nocobase/pull/8710)) par @zhangzhonghe

  - Prise en charge de la configuration du résumé pour les tableaux ([#8721](https://github.com/nocobase/nocobase/pull/8721)) par @chenos

- **[moteur de flux]** Correction d'un problème où le nouveau code runjs analysait les expressions de variables avant l'exécution. ([#8762](https://github.com/nocobase/nocobase/pull/8762)) par @gchust

- **[Workflow]** Afficher tous les types de nœuds dans le menu d'ajout, même s'ils ne sont pas disponibles ([#8828](https://github.com/nocobase/nocobase/pull/8828)) par @mytharcher

- **[Action : Requête personnalisée]** Le streaming d'événements prend en charge les requêtes personnalisées ([#8749](https://github.com/nocobase/nocobase/pull/8749)) par @jiannx

- **[Employés IA]** Mise à jour de l'invite utilisateur de la boîte de dialogue IA ([#8717](https://github.com/nocobase/nocobase/pull/8717)) par @heziqiang

- **[Intégrer NocoBase]** Fournir une API d'assainissement pour filtrer les valeurs d'association dans l'action ([#8688](https://github.com/nocobase/nocobase/pull/8688)) par @mytharcher

- **[IA : Base de connaissances]** Refonte de la logique de chargement des documents de la base de connaissances. par @cgyrock

- **[Adaptateur de verrouillage Redis]** Refactorisation en raison du changement de l'API de LockManager dans le dépôt principal par @mytharcher

- **[Gestionnaire de sauvegarde]** Ajout d'un verrou pour les sauvegardes planifiées sur les nœuds du cluster par @mytharcher

- **[Gestionnaire de migration]** Amélioration des vérifications de migration, prise en charge du téléchargement SQL, formatage des journaux et visibilité du processus d'exécution par @cgyrock

### 🐛 Corrections de bugs

- **[non défini]** Correction d'un problème où, après la mise à niveau, le système indiquait que plugin-block-reference était introuvable. ([#8757](https://github.com/nocobase/nocobase/pull/8757)) par @gchust

- **[client]**
  - Les données du sous-formulaire et du sous-tableau ne s'affichent pas en raison de la vérification des autorisations ([#8846](https://github.com/nocobase/nocobase/pull/8846)) par @chenos

  - Correction du problème où le bouton de réduction du formulaire de filtre v2 cessait de fonctionner après le tri des champs ([#8843](https://github.com/nocobase/nocobase/pull/8843)) par @zhangzhonghe

  - Correction du problème où les champs personnalisés dans les valeurs de champ du formulaire de filtre ne pouvaient pas afficher le type de saisie de valeur correct ([#8823](https://github.com/nocobase/nocobase/pull/8823)) par @zhangzhonghe

  - Correction du problème où la page de gestion des modèles de référence (v1) manquait les actions de filtre et d'actualisation. ([#8833](https://github.com/nocobase/nocobase/pull/8833)) par @gchust

  - Correction du problème où le bloc de détails d'une collection SQL rencontrait une erreur lors du chargement des données. ([#8817](https://github.com/nocobase/nocobase/pull/8817)) par @gchust

  - Correction du problème où les règles de liaison de champ dans le bloc de détails ne prenaient pas effet lors du rendu initial. ([#8813](https://github.com/nocobase/nocobase/pull/8813)) par @gchust

  - Les blocs V2 n'affichent désormais que les actions prises en charge par la source de données actuelle ([#8803](https://github.com/nocobase/nocobase/pull/8803)) par @zhangzhonghe

  - Correction d'un problème de style du bouton de retour sur les sous-pages v2 ([#8810](https://github.com/nocobase/nocobase/pull/8810)) par @zhangzhonghe

  - Correction du problème de navigation par lien contextuel annulé après la fermeture de la vue ([#8752](https://github.com/nocobase/nocobase/pull/8752)) par @zhangzhonghe

  - Correction de la validation pour les champs obligatoires masqués par liaison en mode configuration ([#8773](https://github.com/nocobase/nocobase/pull/8773)) par @zhangzhonghe

  - Correction du rognage des onglets et garantie de la largeur minimale des onglets en mode conception ([#8771](https://github.com/nocobase/nocobase/pull/8771)) par @zhangzhonghe

  - Correction des mises à jour d'interface utilisateur retardées pour l'activation/désactivation de la colonne de sous-tableau et la suppression consécutive de colonnes ([#8755](https://github.com/nocobase/nocobase/pull/8755)) par @zhangzhonghe

  - Correction d'un problème où le bloc de données d'origine ne se rafraîchissait pas après la modification des données dans la fenêtre contextuelle du champ d'association. ([#8782](https://github.com/nocobase/nocobase/pull/8782)) par @gchust

  - Désactivation de l'ajout de blocs pour les enregistrements associés plusieurs-à-plusieurs (tableau) pour éviter les erreurs. ([#8779](https://github.com/nocobase/nocobase/pull/8779)) par @gchust

  - Correction d'un problème où le bloc de données ne se rafraîchissait pas lors du changement de menu. ([#8735](https://github.com/nocobase/nocobase/pull/8735)) par @gchust

  - Correction du problème où le composant CollectionField ne s'affichait pas dans le composant DefaultValue ([#8744](https://github.com/nocobase/nocobase/pull/8744)) par @mytharcher

  - Correction de l'apparition de deux vérifications obligatoires dans le formulaire de mise à jour d'enregistrement ([#8761](https://github.com/nocobase/nocobase/pull/8761)) par @jiannx

- **[serveur]**
  - Correction du problème d'erreur dans les requêtes de données des sources de données non base de données ([#8776](https://github.com/nocobase/nocobase/pull/8776)) par @cgyrock

  - Résolution du problème de cache en ajoutant un hachage aux ressources ([#8730](https://github.com/nocobase/nocobase/pull/8730)) par @chenos

- **[gestionnaire de verrouillage]** Correction d'un problème de condition de concurrence du gestionnaire de verrouillage ([#8734](https://github.com/nocobase/nocobase/pull/8734)) par @mytharcher

- **[base de données]**
  - Correction de l'option 'Pagination simple' manquante dans le modèle de vue de la collection. ([#8778](https://github.com/nocobase/nocobase/pull/8778)) par @cgyrock

  - La règle de validation de précision pour les champs numériques ne s'applique pas ([#8768](https://github.com/nocobase/nocobase/pull/8768)) par @2013xile

  - Correction de l'échec de la vérification personnalisée des expressions régulières de champ dans v2 ([#8729](https://github.com/nocobase/nocobase/pull/8729)) par @jiannx

- **[moteur de flux]** Correction d'un problème où ctx.exit ne pouvait pas terminer l'exécution des flux d'événements définis par l'utilisateur. ([#8737](https://github.com/nocobase/nocobase/pull/8737)) par @gchust

- **[Contrôle d'accès]**
  - Utilisation de collection.filterTargetKey au lieu de Model.primaryKeyField ([#8853](https://github.com/nocobase/nocobase/pull/8853)) par @chenos

  - Correction d'une erreur de modification de données de la source de données API Restful. ([#8788](https://github.com/nocobase/nocobase/pull/8788)) par @cgyrock

  - L'instance de base de données utilisée lors de la définition des métadonnées ACL est incorrecte ([#8747](https://github.com/nocobase/nocobase/pull/8747)) par @2013xile

- **[Modèles d'interface utilisateur]**
  - Correction du problème où les enregistrements d'association ne pouvaient pas être chargés correctement après avoir enregistré le bloc de détails en tant que modèle. ([#8827](https://github.com/nocobase/nocobase/pull/8827)) par @gchust

  - Correction de l'erreur de rendu pour le bloc de référence du panneau d'actions. ([#8818](https://github.com/nocobase/nocobase/pull/8818)) par @gchust

  - Correction du problème où le flux d'événements du bloc de référence dans le bloc de tableau ne pouvait pas être configuré avec un flux d'événements de clic de ligne. ([#8814](https://github.com/nocobase/nocobase/pull/8814)) par @gchust

  - Correction d'un problème où la réutilisation du modèle de bloc d'enregistrement actuel pour le bloc de détails et le bloc de formulaire d'édition pouvait entraîner un échec de chargement correct des données. ([#8775](https://github.com/nocobase/nocobase/pull/8775)) par @gchust

  - Correction d'un problème où les modifications apportées aux propriétés dans le flux d'événements d'un bloc de modèle ne prenaient pas effet. ([#8765](https://github.com/nocobase/nocobase/pull/8765)) par @gchust

- **[Visionneuse de fichiers Office]** Modification de la hauteur de la fenêtre modale à une valeur appropriée pour afficher plus de contenu du fichier ([#8835](https://github.com/nocobase/nocobase/pull/8835)) par @mytharcher

- **[Action : Exporter les enregistrements]**
  - Correction du problème où le champ belongsToArray était vide dans l'exportation Excel ([#8787](https://github.com/nocobase/nocobase/pull/8787)) par @cgyrock

  - Correction du problème où les champs de type numérique dans les fichiers Excel s'affichaient sous forme de chaînes de caractères ([#8774](https://github.com/nocobase/nocobase/pull/8774)) par @cgyrock

- **[Workflow]** Correction du problème où l'espace réservé de glissement de nœud s'affichait incorrectement lors du glissement de blocs dans le nœud d'approbation ([#8763](https://github.com/nocobase/nocobase/pull/8763)) par @mytharcher

- **[Bloc : Liste]** Correction d'un problème où les champs du bloc de liste ne pouvaient pas utiliser la variable d'enregistrement actuelle. ([#8784](https://github.com/nocobase/nocobase/pull/8784)) par @gchust

- **[Source de données : Principale]**
  - La mise à jour de la valeur par défaut d'un champ JSON ne prend pas effet ([#8767](https://github.com/nocobase/nocobase/pull/8767)) par @2013xile

  - Erreur de synchronisation des champs ([#8766](https://github.com/nocobase/nocobase/pull/8766)) par @2013xile

- **[Employés IA]**
  - Correction des problèmes où dashscope/deepseek/kimi ne pouvaient pas lire les fichiers de documents téléchargés. ([#8732](https://github.com/nocobase/nocobase/pull/8732)) par @cgyrock

  - Correction d'une erreur d'appel d'outil lors de l'utilisation du modèle de raisonnement deepseek. ([#8741](https://github.com/nocobase/nocobase/pull/8741)) par @cgyrock

  - Correction d'une erreur de chat de l'employé IA lorsque la base de connaissances est activée ([#8746](https://github.com/nocobase/nocobase/pull/8746)) par @cgyrock

  - Correction d'un problème de rendu de la configuration de la source de données IA. ([#8731](https://github.com/nocobase/nocobase/pull/8731)) par @cgyrock

  - Résolution du problème où le message IA s'affiche avec une longueur de 0 ([#8723](https://github.com/nocobase/nocobase/pull/8723)) par @heziqiang

- **[Moteur de flux]** Correction de l'erreur de destruction SQL ([#8745](https://github.com/nocobase/nocobase/pull/8745)) par @chenos

- **[Workflow : Événement d'action personnalisée]** Correction du problème où le workflow d'action personnalisée se bloquait lors de l'exécution en tant que sous-flux ([#8738](https://github.com/nocobase/nocobase/pull/8738)) par @mytharcher

- **[Workflow : JavaScript]** Correction de l'échec des cas de test sur Windows ([#8722](https://github.com/nocobase/nocobase/pull/8722)) par @mytharcher

- **[Visualisation des données]** Correction de l'i18n pour le texte d'entrée du plugin de graphique ([#8716](https://github.com/nocobase/nocobase/pull/8716)) par @heziqiang

- **[Multi-espace]** Correction de l'erreur d'autorisation d'espace lors de la création de données avec la clé primaire par @jiannx

- **[Modèle d'impression]** Correction du problème où l'API ACL a changé mais n'est pas adaptée au plugin par @mytharcher

- **[Workflow : Approbation]**
  - Correction du problème où les personnes assignées ne suivaient pas l'ordre configuré dans le nœud par @mytharcher

  - Correction du problème où le résultat de la requête ne s'affichait pas en raison de nœuds filtrés par type par @mytharcher

  - Correction du problème où le paramètre appends était filtré par ACL par @mytharcher

  - Correction du problème ACL où la valeur d'association ne doit pas être créée ou mise à jour lorsque l'utilisateur n'a pas d'autorisation par @mytharcher

  - Ajout d'un paramètre manquant pour éviter que les associations ne soient pas mises à jour lors de la soumission d'une nouvelle approbation par @mytharcher

  - Correction des libellés non traduits dans les détails du traitement d'approbation par @zhangzhonghe

  - Correction de l'erreur générée par la valeur manquante de `dataAfter` lors de l'ajout ou de la délégation par @mytharcher

  - Assainissement des valeurs d'association dans les actions d'approbation, pour éviter toute manipulation de données au-delà des autorisations par @mytharcher

  - Correction du problème où une erreur était générée lors de l'exécution manuelle du workflow d'approbation par @mytharcher

  - Assainissement des valeurs d'association dans les actions d'approbation, pour éviter toute manipulation de données au-delà des autorisations par @mytharcher

- **[Gestionnaire d'e-mails]** Correction de l'analyse du format de l'ID de contenu de l'image par @jiannx

- **[Gestionnaire de migration]**
  - Correction de la description de migration manquante et définition de l'heure actuelle comme valeur par défaut par @cgyrock

  - Correction d'une erreur de construction par @mytharcher

  - Ajustement du répertoire temporaire dans le stockage, pour prendre en charge l'utilisation en mode cluster par @mytharcher

  - Correction d'un gel potentiel du processus causé par la journalisation d'instructions SQL excessivement volumineuses incluses dans les exceptions d'erreur de migration par @cgyrock
