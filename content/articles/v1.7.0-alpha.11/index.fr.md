---
title: "NocoBase v1.7.0-alpha.11 : prise en charge des variables du côté gauche des conditions de règle de liaison"
description: "Notes de version de v1.7.0-alpha.11"
---

### 🎉 Nouvelles fonctionnalités

- **[client]** Prise en charge des variables à gauche des conditions des règles de liaison ([#6609](https://github.com/nocobase/nocobase/pull/6609)) par @katherinehhh

- **[Départements]** Rendre les plugins Département, URL de pièce jointe et message de réponse de workflow gratuits ([#6663](https://github.com/nocobase/nocobase/pull/6663)) par @chenos

- **[Action : Mise à jour par lot]**
  - Prise en charge de l'actualisation des données dans d'autres blocs de données après la mise à jour des données dans un bloc ([#6591](https://github.com/nocobase/nocobase/pull/6591)) par @zhangzhonghe

  - Prise en charge de l'actualisation des données dans d'autres blocs de données après la mise à jour des données dans un bloc ([#6591](https://github.com/nocobase/nocobase/pull/6591)) par @zhangzhonghe

- **[Stockage du schéma d'interface utilisateur]** Module de localisation ajouté pour UISchema, permettant des traductions personnalisées pour le titre et la description du schéma ([#6574](https://github.com/nocobase/nocobase/pull/6574)) par @chenos

- **[Bloc : Panneau d'action]** Ajout d'un rappel onScanSuccess pour gérer les scans réussis et quitter l'interface utilisateur de la caméra. ([#6580](https://github.com/nocobase/nocobase/pull/6580)) par @sheldon66

- **[Champ de collection : Code]** Ajout de l'interface de code par @mytharcher

- **[Workflow : nœud de calcul de date]** Ajout de la fonction `changeTimezone` pour modifier la valeur du fuseau horaire pour le formatage par @mytharcher

- **[Modèle d'impression]** Prise en charge du rendu d'images dynamiques et de codes-barres dans les modèles de documents. par @sheldon66

### 🚀 Améliorations

- **[client]**
  - Ajout d'une API de délai pour les scénarios qui s'ouvrent sans délai ([#6681](https://github.com/nocobase/nocobase/pull/6681)) par @mytharcher

  - Prise en charge des enregistrements de table sélectionnés dans les requêtes personnalisées ([#6647](https://github.com/nocobase/nocobase/pull/6647)) par @katherinehhh

  - Ajout d'une API de repli de type par défaut pour `Variable.Input` ([#6644](https://github.com/nocobase/nocobase/pull/6644)) par @mytharcher

  - Optimisation des invites pour les pages non configurées ([#6641](https://github.com/nocobase/nocobase/pull/6641)) par @zhangzhonghe

  - Prise en charge de la recherche de champ dans le composant Filtre ([#6627](https://github.com/nocobase/nocobase/pull/6627)) par @mytharcher

  - Ajout de l'API `trim` pour `Input` et `Variable.TextArea` ([#6624](https://github.com/nocobase/nocobase/pull/6624)) par @mytharcher

  - Déterminer si les composants mobiles doivent être affichés en fonction du type d'appareil plutôt que de la largeur de la page ([#6611](https://github.com/nocobase/nocobase/pull/6611)) par @zhangzhonghe

  - Déterminer si la mise en page mobile doit être affichée en fonction du type d'appareil plutôt que de la largeur de la page ([#6600](https://github.com/nocobase/nocobase/pull/6600)) par @zhangzhonghe

  - Prise en charge de la configuration de la visibilité des deux-points dans les étiquettes des champs de formulaire en fonction de la mise en page ([#6561](https://github.com/nocobase/nocobase/pull/6561)) par @katherinehhh

- **[create-nocobase-app]** Mise à niveau de certaines dépendances vers les dernières versions ([#6673](https://github.com/nocobase/nocobase/pull/6673)) par @chenos

- **[utils]** Ajout d'une extension de durée pour dayjs ([#6630](https://github.com/nocobase/nocobase/pull/6630)) par @mytharcher

- **[database]**
  - Ajout de l'option trim pour le champ de texte ([#6603](https://github.com/nocobase/nocobase/pull/6603)) par @mytharcher

  - Ajout de l'option trim pour le champ de chaîne ([#6565](https://github.com/nocobase/nocobase/pull/6565)) par @mytharcher

- **[Workflow]**
  - Prise en charge d'une URL de popup fixe pour les tâches de workflow ([#6640](https://github.com/nocobase/nocobase/pull/6640)) par @mytharcher

  - Optimisation de la logique de sauvegarde des tâches ([#6613](https://github.com/nocobase/nocobase/pull/6613)) par @mytharcher

  - Amélioration du code ([#6589](https://github.com/nocobase/nocobase/pull/6589)) par @mytharcher

- **[Workflow : nœud de délai]** Prise en charge de l'utilisation d'une variable pour la durée ([#6621](https://github.com/nocobase/nocobase/pull/6621)) par @mytharcher

- **[Gestionnaire d'erreurs]** Prise en charge du titre personnalisé dans le composant AppError. ([#6409](https://github.com/nocobase/nocobase/pull/6409)) par @sheldon66

- **[Gestionnaire de fichiers]** Ajout de l'option trim pour les champs de texte de la collection de stockages ([#6604](https://github.com/nocobase/nocobase/pull/6604)) par @mytharcher

- **[Gestionnaire de tâches asynchrones]** Optimisation des boutons d'import/export dans Pro ([#6531](https://github.com/nocobase/nocobase/pull/6531)) par @chenos

- **[Workflow : événement d'action personnalisée]** Ajout des paramètres d'actualisation pour le bouton de déclenchement de workflow par @mytharcher

- **[Action : Exporter les enregistrements Pro]** Optimisation des boutons d'import/export dans Pro par @katherinehhh

- **[Restriction IP]** Mise à jour du contenu du message de restriction IP. par @sheldon66

- **[Stockage de fichiers : S3(Pro)]** Prise en charge des variables globales dans la configuration de stockage par @mytharcher

- **[Gestionnaire de sauvegarde]** Permet de restaurer l'application principale à partir d'une sauvegarde de sous-application par @gchust

- **[Workflow : Approbation]** Prise en charge de l'utilisation d'un modèle de bloc pour le formulaire de processus d'approbation par @mytharcher

- **[Gestionnaire de migration]** Permet d'ignorer la sauvegarde et la restauration automatiques pour la migration par @gchust

### 🐛 Corrections de bugs

- **[client]**
  - Problème de commutation du sélecteur dans le champ de date du bouton de filtre ([#6695](https://github.com/nocobase/nocobase/pull/6695)) par @katherinehhh

  - Conversion de variable dans les conditions de règle de liaison de sous-table/sous-formulaire ([#6702](https://github.com/nocobase/nocobase/pull/6702)) par @katherinehhh

  - Bouton d'exportation affiché sans autorisation d'exportation ([#6689](https://github.com/nocobase/nocobase/pull/6689)) par @katherinehhh

  - Après la connexion via une clé étrangère, cliquer pour déclencher le filtrage entraîne des conditions de filtre vides ([#6634](https://github.com/nocobase/nocobase/pull/6634)) par @zhangzhonghe

  - Correction d'une erreur levée dans le nœud de création / mise à jour du workflow ([#6696](https://github.com/nocobase/nocobase/pull/6696)) par @mytharcher

  - Correction d'une erreur levée lors du survol de la souris sur un bloc de modèle référencé dans la configuration du nœud d'approbation ([#6691](https://github.com/nocobase/nocobase/pull/6691)) par @mytharcher

  - Champ d'association personnalisé n'affichant pas les paramètres du composant de champ ([#6692](https://github.com/nocobase/nocobase/pull/6692)) par @katherinehhh

  - Compatibilité des règles de liaison avec les données héritées ([#6686](https://github.com/nocobase/nocobase/pull/6686)) par @katherinehhh

  - Le chargement différé d'un composant d'interface utilisateur manquant peut provoquer une erreur de rendu ([#6683](https://github.com/nocobase/nocobase/pull/6683)) par @gchust

  - Correction des paramètres régionaux pour le composant de téléchargement ([#6682](https://github.com/nocobase/nocobase/pull/6682)) par @mytharcher

  - Ajout du composant Password natif à HoC Input ([#6679](https://github.com/nocobase/nocobase/pull/6679)) par @mytharcher

  - Problème d'affichage des descriptions de champ dans le workflow ([#6680](https://github.com/nocobase/nocobase/pull/6680)) par @katherinehhh

  - Champs hérités affichés dans la liste d'affectation des champs de la collection actuelle ([#6666](https://github.com/nocobase/nocobase/pull/6666)) par @katherinehhh

  - Problème de style dans l'entrée de variable lors de la définition d'une valeur par défaut ([#6668](https://github.com/nocobase/nocobase/pull/6668)) par @katherinehhh

  - Le passage au menu de groupe ne doit pas sauter vers une page déjà masquée dans le menu ([#6654](https://github.com/nocobase/nocobase/pull/6654)) par @zhangzhonghe

  - Le formulaire de filtre ne doit pas afficher l'invite "Modifications non enregistrées" ([#6657](https://github.com/nocobase/nocobase/pull/6657)) par @zhangzhonghe

  - Dans le formulaire de filtre, lorsque le bouton de filtre est cliqué, s'il y a des champs qui n'ont pas passé la validation, le filtrage est toujours déclenché ([#6659](https://github.com/nocobase/nocobase/pull/6659)) par @zhangzhonghe

  - L'option "autoriser plusieurs" ne fonctionne pas pour le champ de relation ([#6661](https://github.com/nocobase/nocobase/pull/6661)) par @katherinehhh

  - Correction du problème d'images d'aperçu obscurcies ([#6651](https://github.com/nocobase/nocobase/pull/6651)) par @zhangzhonghe

  - Dans le bloc de formulaire, la valeur par défaut de la configuration du champ s'affiche d'abord comme la chaîne de variable d'origine puis disparaît ([#6649](https://github.com/nocobase/nocobase/pull/6649)) par @zhangzhonghe

  - Style d'entrée de variable incorrect ([#6645](https://github.com/nocobase/nocobase/pull/6645)) par @gchust

  - Le titre du tiroir d'édition du nœud de workflow affiche [object Object] ([#6648](https://github.com/nocobase/nocobase/pull/6648)) par @katherinehhh

  - Chevauchement de la description de la sous-table avec le bouton Ajouter nouveau ([#6646](https://github.com/nocobase/nocobase/pull/6646)) par @katherinehhh

  - Soulignement en pointillé causé par la disposition de formulaire horizontale dans la modale ([#6639](https://github.com/nocobase/nocobase/pull/6639)) par @katherinehhh

  - La règle avec la condition 'any' ne prend pas effet lorsque la liste de conditions est vide ([#6628](https://github.com/nocobase/nocobase/pull/6628)) par @katherinehhh

  - Échec de l'analyse de la variable lorsque les paramètres d'URL contiennent des caractères chinois ([#6618](https://github.com/nocobase/nocobase/pull/6618)) par @katherinehhh

  - Zone vide entre le titre de la page de configuration du modèle de bloc et le menu ([#6625](https://github.com/nocobase/nocobase/pull/6625)) par @gchust

  - Les champs de relation dans le formulaire de filtre signalent une erreur après l'actualisation de la page car x-data-source n'est pas transporté ([#6619](https://github.com/nocobase/nocobase/pull/6619)) par @zhangzhonghe

  - Problème de données avec le bloc Gantt dans la collection arborescente ([#6617](https://github.com/nocobase/nocobase/pull/6617)) par @katherinehhh

  - Problème d'affichage de l'étiquette de champ pour éviter la troncature par les deux-points ([#6599](https://github.com/nocobase/nocobase/pull/6599)) par @katherinehhh

  - La propriété x-disabled ne prend pas effet sur les champs de formulaire ([#6610](https://github.com/nocobase/nocobase/pull/6610)) par @katherinehhh

  - Correction de la propriété `disabled` qui ne fonctionne pas lorsque `SchemaInitializerItem` a des `items` ([#6597](https://github.com/nocobase/nocobase/pull/6597)) par @mytharcher

  - Champ d'association (sélection) affichant N/A lors de l'exposition des champs de collection associés ([#6582](https://github.com/nocobase/nocobase/pull/6582)) par @katherinehhh

  - Les boutons de soumission et d'actualisation n'affichent pas correctement le mode icône uniquement ([#6592](https://github.com/nocobase/nocobase/pull/6592)) par @katherinehhh

  - Problème de cascade : 'La valeur de xxx ne peut pas être au format tableau' lors de la suppression et de la re-sélection ([#6585](https://github.com/nocobase/nocobase/pull/6585)) par @katherinehhh

  - Conflit de liaison entre les champs d'association de même nom dans différentes sous-tables du même formulaire ([#6577](https://github.com/nocobase/nocobase/pull/6577)) par @katherinehhh

- **[database]**
  - Correction d'une erreur de build CI ([#6687](https://github.com/nocobase/nocobase/pull/6687)) par @aaaaaajie

  - Lors de la suppression d'enregistrements un-à-plusieurs, `filter` et `filterByTk` sont tous deux transmis et `filter` inclut un champ d'association, `filterByTk` est ignoré ([#6606](https://github.com/nocobase/nocobase/pull/6606)) par @2013xile

  - Éviter les modifications du champ "datetimeNoTz" lorsque la valeur n'est pas modifiée dans l'enregistrement de mise à jour ([#6588](https://github.com/nocobase/nocobase/pull/6588)) par @mytharcher

- **[build]** La sortie de build est incorrecte lorsque le plugin dépend de certaines bibliothèques AMD ([#6665](https://github.com/nocobase/nocobase/pull/6665)) par @gchust

- **[Visualisation de données]** Les options de champ d'énumération sont vides dans le bloc de filtre ([#6706](https://github.com/nocobase/nocobase/pull/6706)) par @2013xile

- **[Action : Requête personnalisée]** Assurer que les données de requête personnalisée doivent être JSON ([#6701](https://github.com/nocobase/nocobase/pull/6701)) par @chenos

- **[Workflow : nœud manuel]**
  - Correction d'une erreur ACL dans le centre de tâches ([#6693](https://github.com/nocobase/nocobase/pull/6693)) par @mytharcher

  - Correction de la constante d'état de la tâche manuelle ([#6676](https://github.com/nocobase/nocobase/pull/6676)) par @mytharcher

- **[Action : Importer des enregistrements]** Correction d'une erreur lors de l'importation du champ de temps xlsx ([#6672](https://github.com/nocobase/nocobase/pull/6672)) par @aaaaaajie

- **[Contrôle d'accès]**
  - Correction d'une erreur levée lors de la sérialisation du modèle de rôle dans le cache ([#6674](https://github.com/nocobase/nocobase/pull/6674)) par @mytharcher

  - Correction de la logique de calcul de l'union des rôles ([#6605](https://github.com/nocobase/nocobase/pull/6605)) par @aaaaaajie

  - Attribution incorrecte du rôle actuel lors de la connexion ([#6581](https://github.com/nocobase/nocobase/pull/6581)) par @aaaaaajie

- **[Bloc : iframe]** Barre de défilement verticale apparaît lorsque le bloc iframe est réglé sur une hauteur totale ([#6675](https://github.com/nocobase/nocobase/pull/6675)) par @katherinehhh

- **[Workflow]**
  - Correction d'une erreur de migration levée depuis MySQL ([#6667](https://github.com/nocobase/nocobase/pull/6667)) par @mytharcher

  - Correction des informations statistiques des workflows non chargées au démarrage de l'application ([#6642](https://github.com/nocobase/nocobase/pull/6642)) par @mytharcher

  - Correction d'une OOM lors de la création d'une tâche avec un identifiant entier non sécurisé ([#6637](https://github.com/nocobase/nocobase/pull/6637)) par @mytharcher

  - Correction de l'affichage incorrect de l'option de synchronisation ([#6595](https://github.com/nocobase/nocobase/pull/6595)) par @mytharcher

- **[Champ de collection : Pièce jointe (URL)]** Autoriser uniquement les collections de fichiers avec un accès URL public ([#6664](https://github.com/nocobase/nocobase/pull/6664)) par @katherinehhh

- **[Bloc : modèle]**
  - Lorsque le modèle référencé utilisé par le bloc de page a été supprimé, l'enregistrement en tant que modèle échoue ([#6638](https://github.com/nocobase/nocobase/pull/6638)) par @gchust

  - La modification et la suppression des mêmes champs à partir du modèle et du bloc, après la création d'un bloc à partir du modèle, peuvent provoquer des erreurs de rendu ([#6626](https://github.com/nocobase/nocobase/pull/6626)) par @gchust

- **[Utilisateurs]** Problème d'analyse du schéma du formulaire de profil utilisateur ([#6635](https://github.com/nocobase/nocobase/pull/6635)) par @2013xile

- **[Action : Exporter les enregistrements]** Paramètres de filtre manquants lors de l'exportation de données après avoir changé la pagination ([#6633](https://github.com/nocobase/nocobase/pull/6633)) par @katherinehhh

- **[Mobile]** Le champ à sélection unique avec le filtre 'contient' sur mobile ne prend pas en charge la sélection multiple ([#6629](https://github.com/nocobase/nocobase/pull/6629)) par @katherinehhh

- **[Champ de collection : Plusieurs à plusieurs (tableau)]** Problème de filtrage par champs dans une collection d'association avec un champ plusieurs à plusieurs (tableau) ([#6596](https://github.com/nocobase/nocobase/pull/6596)) par @2013xile

- **[Formulaires publics]** Les autorisations de visualisation incluent la liste et l'obtention ([#6607](https://github.com/nocobase/nocobase/pull/6607)) par @chenos

- **[Authentification]** Attribution du jeton dans `AuthProvider` ([#6593](https://github.com/nocobase/nocobase/pull/6593)) par @2013xile

- **[Calendrier]** Données manquantes aux dates limites dans la vue hebdomadaire du calendrier ([#6587](https://github.com/nocobase/nocobase/pull/6587)) par @katherinehhh

- **[Bloc : Carte]** La validation de la gestion de la carte ne doit pas réussir avec une entrée d'espace ([#6575](https://github.com/nocobase/nocobase/pull/6575)) par @katherinehhh

- **[Action : Modification par lot]** Cliquez sur le bouton de modification par lot, configurez la fenêtre contextuelle, puis ouvrez-la à nouveau, la fenêtre contextuelle est vide ([#6578](https://github.com/nocobase/nocobase/pull/6578)) par @zhangzhonghe

- **[Workflow : événement d'action personnalisée]** Correction des cas de test par @mytharcher

- **[Gestionnaire d'e-mails]**
  - Correction de l'impossibilité de synchroniser, de l'absence d'affichage du sujet et d'autres petits bugs par @jiannx

  - Correction de l'autorisation de gestion des e-mails qui ne permet pas de voir la liste des e-mails par @jiannx

  - Correction de l'absence d'attente pour l'appel suivant. par @jiannx

- **[Stockage de fichiers : S3(Pro)]**
  - Correction de l'absence d'attente pour l'appel suivant. par @jiannx

  - Paramètres individuels baseurl et public, amélioration de l'UX de configuration du stockage S3 Pro par @jiannx

  - Envoi d'une erreur à l'utilisateur lors du téléchargement du logo vers le stockage S3 Pro (réglé par défaut) par @mytharcher

  - Organisation de la langue par @jiannx

- **[Auth : OIDC]** Une redirection incorrecte se produit lorsque le chemin de rappel est la chaîne 'null' par @2013xile

- **[Bloc : Formulaire en plusieurs étapes]**
  - Le bouton de soumission a la même couleur dans son état par défaut et en surbrillance par @jiannx

  - Correction du bug où la réinitialisation du formulaire est invalide lorsque le champ est associé à un autre champ par @jiannx

- **[Gestionnaire de sauvegarde]** Une erreur de délai d'attente se produit lors de la tentative de restauration d'une sauvegarde non cryptée avec un mot de passe par @gchust

- **[Workflow : Approbation]**
  - Correction d'une erreur ACL dans le centre de tâches par @mytharcher

  - Prise en charge d'une URL fixe pour les éléments d'approbation dans le centre de tâches par @mytharcher

  - Correction du mode de branche lorsque `endOnReject` est configuré sur `true` par @mytharcher

  - Correction de `updatedAt` modifié après la migration par @mytharcher

  - Correction de la configuration du nœud d'approbation incorrecte après la modification du schéma par @mytharcher

  - Correction des variables client à utiliser dans le formulaire d'approbation par @mytharcher

- **[Gestionnaire de migration]**
  - L'heure de création du journal de migration s'affiche incorrectement dans certains environnements par @gchust

  - L'option d'ignorer la sauvegarde automatique devient invalide si la fenêtre contextuelle de variable d'environnement apparaît pendant la migration par @gchust
