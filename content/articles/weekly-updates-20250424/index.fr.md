---
title: "Mises à jour hebdomadaires de NocoBase : Prise en charge des variables à gauche des conditions des règles de liaison"
description: "Les mises à jour de cette semaine incluent : l'ajout d'une interface de code, la prise en charge des images dynamiques et du rendu de codes-barres dans les modèles de documents, et plus encore."
---

Résumez les journaux de mise à jour hebdomadaires du produit. Les dernières versions sont disponibles sur [notre blog](https://www.nocobase.com/en/blog/timeline).

**NocoBase est actuellement mis à jour avec trois branches : `main`, `next` et `develop`.**

![version.png](https://static-docs.nocobase.com/ba5f04e27e99c625cb3822da5df07860.png)

* `main` : La version la plus stable à ce jour, recommandée pour l'installation ;
* `next` : Version bêta, contient les nouvelles fonctionnalités à venir et a été testée préliminairement. Il peut y avoir des problèmes connus ou inconnus. Elle est principalement destinée aux utilisateurs de test pour recueillir des retours et optimiser davantage les fonctionnalités. Idéale pour les utilisateurs de test qui souhaitent découvrir les nouvelles fonctionnalités en avant-première et donner leur avis ;
* `develop` : Version alpha, contient le code de fonctionnalité le plus récent, peut être incomplète ou instable, principalement destinée au développement interne et à l'itération rapide. Adaptée aux utilisateurs techniques intéressés par les fonctionnalités de pointe du produit, mais avec des problèmes potentiels et des fonctions incomplètes. Ne pas utiliser en production.

## main

![main.png](https://static-docs.nocobase.com/47a3c71734c1d0f908b51f9ebd53c0ac.png)

### [v1.6.21](https://www.nocobase.com/en/blog/v1.6.21)

*Date de sortie : 2025-04-17*

#### 🚀 Améliorations

- **[client]** Ajout d'une API de délai pour les scénarios qui s'ouvrent sans délai ([#6681](https://github.com/nocobase/nocobase/pull/6681)) par @mytharcher
- **[create-nocobase-app]** Mise à niveau de certaines dépendances vers les dernières versions ([#6673](https://github.com/nocobase/nocobase/pull/6673)) par @chenos

#### 🐛 Corrections de bugs

- **[client]**

  - Correction d'une erreur levée lors du survol de la souris sur un bloc de modèle référencé dans la configuration du nœud d'approbation ([#6691](https://github.com/nocobase/nocobase/pull/6691)) par @mytharcher
  - Champ d'association personnalisé n'affichant pas les paramètres du composant de champ ([#6692](https://github.com/nocobase/nocobase/pull/6692)) par @katherinehhh
  - Correction des paramètres régionaux pour le composant de téléchargement ([#6682](https://github.com/nocobase/nocobase/pull/6682)) par @mytharcher
  - Le chargement différé d'un composant d'interface utilisateur manquant provoque une erreur de rendu ([#6683](https://github.com/nocobase/nocobase/pull/6683)) par @gchust
  - Ajout du composant natif Password à HoC Input ([#6679](https://github.com/nocobase/nocobase/pull/6679)) par @mytharcher
  - Champs hérités affichés dans la liste d'affectation des champs de la collection actuelle ([#6666](https://github.com/nocobase/nocobase/pull/6666)) par @katherinehhh
- **[database]** Correction d'une erreur de build CI ([#6687](https://github.com/nocobase/nocobase/pull/6687)) par @aaaaaajie
- **[build]** La sortie de build est incorrecte lorsque le plugin dépend de certaines bibliothèques AMD ([#6665](https://github.com/nocobase/nocobase/pull/6665)) par @gchust
- **[Action : Importer des enregistrements]** Correction d'une erreur lors de l'importation du champ de temps xlsx ([#6672](https://github.com/nocobase/nocobase/pull/6672)) par @aaaaaajie
- **[Workflow : Nœud manuel]** Correction de la constante d'état de la tâche manuelle ([#6676](https://github.com/nocobase/nocobase/pull/6676)) par @mytharcher
- **[Bloc : iframe]** La barre de défilement verticale apparaît lorsque le bloc iframe est réglé sur une hauteur totale ([#6675](https://github.com/nocobase/nocobase/pull/6675)) par @katherinehhh
- **[Workflow : Événement d'action personnalisée]** Correction des cas de test par @mytharcher
- **[Gestionnaire de sauvegarde]** Une erreur de délai d'attente se produit lors de la tentative de restauration d'une sauvegarde non cryptée avec un mot de passe par @gchust

### [v1.6.22](https://www.nocobase.com/en/blog/v1.6.22)

*Date de sortie : 2025-04-22*

#### 🚀 Améliorations

- **[create-nocobase-app]** Mise à niveau des dépendances et suppression du support SQLite ([#6708](https://github.com/nocobase/nocobase/pull/6708)) par @chenos
- **[Gestionnaire de fichiers]** Exposition de l'API utils ([#6705](https://github.com/nocobase/nocobase/pull/6705)) par @mytharcher
- **[Workflow]** Ajout des types de date à l'ensemble des types de variables ([#6717](https://github.com/nocobase/nocobase/pull/6717)) par @mytharcher

#### 🐛 Corrections de bugs

- **[client]**

  - Problème des icônes de la barre de navigation supérieure mobile difficiles à supprimer ([#6734](https://github.com/nocobase/nocobase/pull/6734)) par @zhangzhonghe
  - Après connexion via une clé étrangère, cliquer pour déclencher le filtrage entraîne des conditions de filtre vides ([#6634](https://github.com/nocobase/nocobase/pull/6634)) par @zhangzhonghe
  - Problème de commutation du sélecteur dans le champ de date du bouton de filtre ([#6695](https://github.com/nocobase/nocobase/pull/6695)) par @katherinehhh
  - Problème du bouton de réduction dans le menu de gauche masqué par la fenêtre contextuelle du workflow ([#6733](https://github.com/nocobase/nocobase/pull/6733)) par @zhangzhonghe
  - Contraintes d'options d'action manquantes lors de la réouverture des règles de liaison ([#6723](https://github.com/nocobase/nocobase/pull/6723)) par @katherinehhh
  - Bouton d'exportation affiché sans autorisation d'exportation ([#6689](https://github.com/nocobase/nocobase/pull/6689)) par @katherinehhh
  - Les champs obligatoires masqués par les règles de liaison ne doivent pas affecter la soumission du formulaire ([#6709](https://github.com/nocobase/nocobase/pull/6709)) par @zhangzhonghe
- **[server]** appVersion générée incorrectement par create-migration ([#6740](https://github.com/nocobase/nocobase/pull/6740)) par @chenos
- **[build]** Correction d'une erreur levée dans la commande tar ([#6722](https://github.com/nocobase/nocobase/pull/6722)) par @mytharcher
- **[Workflow]** Correction d'une erreur levée lors de l'exécution d'un événement planifié dans un sous-flux ([#6721](https://github.com/nocobase/nocobase/pull/6721)) par @mytharcher
- **[Workflow : Événement d'action personnalisée]** Prise en charge de l'exécution en mode multi-enregistrements par @mytharcher
- **[Stockage de fichiers : S3(Pro)]** Ajout de la logique multer pour le téléchargement côté serveur par @mytharcher

## next

![next.png](https://static-docs.nocobase.com/8ed17a0f08cc585018f6de6c8b13947d.png)

### [v1.7.0-beta.19](https://www.nocobase.com/en/blog/v1.7.0-beta.19)

*Date de sortie : 2025-04-17*

#### 🎉 Nouvelles fonctionnalités

- **[client]** Prise en charge des variables sur le côté gauche des conditions des règles de liaison ([#6609](https://github.com/nocobase/nocobase/pull/6609)) par @katherinehhh
- **[Workflow : nœud de calcul de date]** Ajout de la fonction `changeTimezone` pour modifier la valeur du fuseau horaire pour le formatage par @mytharcher

#### 🚀 Améliorations

- **[client]**
  - Prise en charge des enregistrements de tableau sélectionnés dans une requête personnalisée ([#6647](https://github.com/nocobase/nocobase/pull/6647)) par @katherinehhh
  - Ajout d'une API de délai pour les scénarios qui s'ouvrent sans délai ([#6681](https://github.com/nocobase/nocobase/pull/6681)) par @mytharcher

#### 🐛 Corrections de bugs

- **[database]** Correction d'une erreur de build CI ([#6687](https://github.com/nocobase/nocobase/pull/6687)) par @aaaaaajie
- **[client]**

  - Correction d'une erreur levée lors du survol de la souris sur un bloc de modèle référencé dans la configuration du nœud d'approbation ([#6691](https://github.com/nocobase/nocobase/pull/6691)) par @mytharcher
  - Problème d'affichage des descriptions de champ dans le workflow ([#6680](https://github.com/nocobase/nocobase/pull/6680)) par @katherinehhh
  - Correction des paramètres régionaux pour le composant de téléchargement ([#6682](https://github.com/nocobase/nocobase/pull/6682)) par @mytharcher
  - Champ d'association personnalisé n'affichant pas les paramètres du composant de champ ([#6692](https://github.com/nocobase/nocobase/pull/6692)) par @katherinehhh
  - Compatibilité des règles de liaison avec les données héritées ([#6686](https://github.com/nocobase/nocobase/pull/6686)) par @katherinehhh
  - Le chargement différé d'un composant d'interface utilisateur manquant provoque une erreur de rendu ([#6683](https://github.com/nocobase/nocobase/pull/6683)) par @gchust
  - Ajout du composant natif Password à HoC Input ([#6679](https://github.com/nocobase/nocobase/pull/6679)) par @mytharcher
- **[Workflow : Nœud manuel]** Correction de la constante d'état de la tâche manuelle ([#6676](https://github.com/nocobase/nocobase/pull/6676)) par @mytharcher
- **[Action : Importer des enregistrements]** Correction d'une erreur lors de l'importation du champ de temps xlsx ([#6672](https://github.com/nocobase/nocobase/pull/6672)) par @aaaaaajie
- **[Workflow : Événement d'action personnalisée]** Correction des cas de test par @mytharcher
- **[Gestionnaire de sauvegarde]** Une erreur de délai d'attente se produit lors de la tentative de restauration d'une sauvegarde non cryptée avec un mot de passe par @gchust

### [v1.7.0-beta.20](https://www.nocobase.com/en/blog/v1.7.0-beta.20)

*Date de sortie : 2025-04-18*

#### 🚀 Améliorations

- **[Gestionnaire de sauvegarde]** Permet de restaurer l'application principale à partir d'une sauvegarde de sous-application par @gchust

#### 🐛 Corrections de bugs

- **[client]** Correction d'une erreur levée dans le nœud de création / mise à jour du workflow ([#6696](https://github.com/nocobase/nocobase/pull/6696)) par @mytharcher
- **[Workflow : Nœud manuel]** Correction d'une erreur ACL dans le centre de tâches ([#6693](https://github.com/nocobase/nocobase/pull/6693)) par @mytharcher
- **[Workflow : Approbation]** Correction d'une erreur ACL dans le centre de tâches par @mytharcher

### [v1.7.0-beta.21](https://www.nocobase.com/en/blog/v1.7.0-beta.21)

*Date de sortie : 2025-04-23*

#### 🚀 Améliorations

- **[create-nocobase-app]** Mise à niveau des dépendances et suppression du support SQLite ([#6708](https://github.com/nocobase/nocobase/pull/6708)) par @chenos
- **[Mobile]** Optimisation de la vitesse d'ouverture de la fenêtre contextuelle du sélecteur de date mobile ([#6735](https://github.com/nocobase/nocobase/pull/6735)) par @zhangzhonghe
- **[Bloc : modèle]** Prise en charge de la conversion d'un bloc modèle en bloc normal ([#6662](https://github.com/nocobase/nocobase/pull/6662)) par @gchust
- **[Éditeur de thème]** Permet de définir la largeur de la barre latérale dans la configuration du thème ([#6720](https://github.com/nocobase/nocobase/pull/6720)) par @chenos
- **[Gestionnaire de fichiers]** Exposition de l'API utils ([#6705](https://github.com/nocobase/nocobase/pull/6705)) par @mytharcher
- **[Workflow]** Ajout des types de date à l'ensemble des types de variables ([#6717](https://github.com/nocobase/nocobase/pull/6717)) par @mytharcher
- **[Impression de modèle]** Remplacement du contrôle d'action de source de données par un contrôle d'accès basé sur les rôles du client. par @sheldon66

#### 🐛 Corrections de bugs

- **[client]**

  - Problème d'actualisation des blocs de données après une soumission réussie ([#6748](https://github.com/nocobase/nocobase/pull/6748)) par @zhangzhonghe
  - Filtre manquant pour les données déjà associées lors de l'ajout de données d'association ([#6750](https://github.com/nocobase/nocobase/pull/6750)) par @katherinehhh
  - Problème du bouton de réduction dans le menu de gauche masqué par la fenêtre contextuelle du workflow ([#6733](https://github.com/nocobase/nocobase/pull/6733)) par @zhangzhonghe
  - Règle de liaison du bouton 'Ajouter un enfant' du tableau arborescent manquant 'enregistrement actuel' ([#6752](https://github.com/nocobase/nocobase/pull/6752)) par @katherinehhh
  - Condition de champ de date/heure ne fonctionnant pas dans les règles de liaison ([#6728](https://github.com/nocobase/nocobase/pull/6728)) par @katherinehhh
  - Problème des icônes de la barre de navigation supérieure mobile difficiles à supprimer ([#6734](https://github.com/nocobase/nocobase/pull/6734)) par @zhangzhonghe
  - Affichage incorrect de la valeur pour "Activer la colonne d'index" ([#6724](https://github.com/nocobase/nocobase/pull/6724)) par @katherinehhh
  - Les champs obligatoires masqués par les règles de liaison ne doivent pas affecter la soumission du formulaire ([#6709](https://github.com/nocobase/nocobase/pull/6709)) par @zhangzhonghe
  - Conversion de variable dans les conditions de règle de liaison de sous-tableau/sous-formulaire ([#6702](https://github.com/nocobase/nocobase/pull/6702)) par @katherinehhh
  - Bouton d'exportation affiché sans autorisation d'exportation ([#6689](https://github.com/nocobase/nocobase/pull/6689)) par @katherinehhh
  - Contraintes d'options d'action manquantes lors de la réouverture des règles de liaison ([#6723](https://github.com/nocobase/nocobase/pull/6723)) par @katherinehhh
  - Problème de commutation du sélecteur dans le champ de date du bouton de filtre ([#6695](https://github.com/nocobase/nocobase/pull/6695)) par @katherinehhh
  - Après connexion via une clé étrangère, cliquer pour déclencher le filtrage entraîne des conditions de filtre vides ([#6634](https://github.com/nocobase/nocobase/pull/6634)) par @zhangzhonghe
- **[cli]** Mise à jour automatique de package.json lors de la mise à niveau ([#6747](https://github.com/nocobase/nocobase/pull/6747)) par @chenos
- **[server]** appVersion générée incorrectement par create-migration ([#6740](https://github.com/nocobase/nocobase/pull/6740)) par @chenos
- **[build]** Correction d'une erreur levée dans la commande tar ([#6722](https://github.com/nocobase/nocobase/pull/6722)) par @mytharcher
- **[Bloc : Gantt]** Chevauchement des mois dans l'en-tête du calendrier pour la vue mensuelle du bloc de diagramme de Gantt ([#6753](https://github.com/nocobase/nocobase/pull/6753)) par @katherinehhh
- **[Action : Importer des enregistrements]** Correction des exceptions d'importation et d'exportation qui se produisent lors de la définition des autorisations de champ. ([#6677](https://github.com/nocobase/nocobase/pull/6677)) par @aaaaaajie
- **[Bloc : modèle]** Les modèles de bloc ne peuvent pas être utilisés dans un environnement MySQL ([#6726](https://github.com/nocobase/nocobase/pull/6726)) par @gchust
- **[Workflow]** Correction d'une erreur levée lors de l'exécution d'un événement planifié dans un sous-flux ([#6721](https://github.com/nocobase/nocobase/pull/6721)) par @mytharcher
- **[Visualisation de données]** Les options de champ d'énumération sont vides dans le bloc de filtre ([#6706](https://github.com/nocobase/nocobase/pull/6706)) par @2013xile
- **[Action : Requête personnalisée]** Assurez-vous que les données de requête personnalisées doivent être au format JSON ([#6701](https://github.com/nocobase/nocobase/pull/6701)) par @chenos
- **[Action : Exporter les enregistrements Pro]**

  - Correction des exceptions d'importation et d'exportation qui se produisent lors de la définition des autorisations de champ. par @aaaaaajie
  - Le bouton d'exportation Pro perd les paramètres de filtre après le tri d'une colonne de tableau par @katherinehhh
- **[Workflow : Événement d'action personnalisée]** Prise en charge de l'exécution en mode multi-enregistrements par @mytharcher
- **[Stockage de fichiers : S3(Pro)]**

  - Ajout de la logique multer pour le téléchargement côté serveur par @mytharcher
  - Correction des données de réponse du fichier téléchargé par @mytharcher
- **[Workflow : Approbation]** Correction du préchargement des champs d'association pour les enregistrements par @mytharcher

## develop

![develop.png](https://static-docs.nocobase.com/7fcdd9456a17286d8a439eee52bcb8d2.png)

### [v1.7.0-alpha.11](https://www.nocobase.com/en/blog/v1.7.0-alpha.11)

*Date de sortie : 2025-04-19*

#### 🎉 Nouvelles fonctionnalités

- **[client]** Prise en charge des variables sur le côté gauche des conditions des règles de liaison ([#6609](https://github.com/nocobase/nocobase/pull/6609)) par @katherinehhh
- **[Départements]** Rendre les plugins Département, URL de pièce jointe et message de réponse de workflow gratuits ([#6663](https://github.com/nocobase/nocobase/pull/6663)) par @chenos
- **[Action : Mise à jour par lot]**

  - Prise en charge de l'actualisation des données dans d'autres blocs de données après la mise à jour des données dans un bloc ([#6591](https://github.com/nocobase/nocobase/pull/6591)) par @zhangzhonghe
  - Prise en charge de l'actualisation des données dans d'autres blocs de données après la mise à jour des données dans un bloc ([#6591](https://github.com/nocobase/nocobase/pull/6591)) par @zhangzhonghe
- **[Stockage de schéma d'interface utilisateur]** Ajout d'un module de localisation pour UISchema, permettant des traductions personnalisées pour le titre et la description du schéma ([#6574](https://github.com/nocobase/nocobase/pull/6574)) par @chenos
- **[Bloc : Panneau d'action]** Ajout d'un callback onScanSuccess pour gérer les scans réussis et quitter l'interface utilisateur de la caméra. ([#6580](https://github.com/nocobase/nocobase/pull/6580)) par @sheldon66
- **[Champ de collection : Code]** Ajout d'une interface de code par @mytharcher
- **[Workflow : nœud de calcul de date]** Ajout de la fonction `changeTimezone` pour modifier la valeur du fuseau horaire pour le formatage par @mytharcher
- **[Impression de modèle]** Prise en charge du rendu d'images dynamiques et de codes-barres dans les modèles de document. par @sheldon66

#### 🚀 Améliorations

- **[client]**

  - Ajout d'une API de délai pour les scénarios qui s'ouvrent sans délai ([#6681](https://github.com/nocobase/nocobase/pull/6681)) par @mytharcher
  - Prise en charge des enregistrements de tableau sélectionnés dans une requête personnalisée ([#6647](https://github.com/nocobase/nocobase/pull/6647)) par @katherinehhh
  - Ajout d'une API de repli de type par défaut pour `Variable.Input` ([#6644](https://github.com/nocobase/nocobase/pull/6644)) par @mytharcher
  - Optimisation des invites pour les pages non configurées ([#6641](https://github.com/nocobase/nocobase/pull/6641)) par @zhangzhonghe
  - Prise en charge de la recherche de champ dans le composant Filtre ([#6627](https://github.com/nocobase/nocobase/pull/6627)) par @mytharcher
  - Ajout de l'API `trim` pour `Input` et `Variable.TextArea` ([#6624](https://github.com/nocobase/nocobase/pull/6624)) par @mytharcher
  - Déterminer s'il faut afficher les composants mobiles en fonction du type d'appareil plutôt que de la largeur de la page ([#6611](https://github.com/nocobase/nocobase/pull/6611)) par @zhangzhonghe
  - Déterminer s'il faut afficher la mise en page mobile en fonction du type d'appareil plutôt que de la largeur de la page ([#6600](https://github.com/nocobase/nocobase/pull/6600)) par @zhangzhonghe
  - Prise en charge de la configuration de la visibilité des deux-points dans les étiquettes de champ de formulaire en fonction de la mise en page ([#6561](https://github.com/nocobase/nocobase/pull/6561)) par @katherinehhh
- **[create-nocobase-app]** Mise à niveau de certaines dépendances vers les dernières versions ([#6673](https://github.com/nocobase/nocobase/pull/6673)) par @chenos
- **[utils]** Ajout d'une extension de durée pour dayjs ([#6630](https://github.com/nocobase/nocobase/pull/6630)) par @mytharcher
- **[database]**

  - Ajout d'une option trim pour le champ de texte ([#6603](https://github.com/nocobase/nocobase/pull/6603)) par @mytharcher
  - Ajout d'une option trim pour le champ de chaîne ([#6565](https://github.com/nocobase/nocobase/pull/6565)) par @mytharcher
- **[Workflow]**

  - Prise en charge d'une URL contextuelle fixe pour les tâches de workflow ([#6640](https://github.com/nocobase/nocobase/pull/6640)) par @mytharcher
  - Optimisation de la logique de sauvegarde des tâches ([#6613](https://github.com/nocobase/nocobase/pull/6613)) par @mytharcher
  - Amélioration du code ([#6589](https://github.com/nocobase/nocobase/pull/6589)) par @mytharcher
- **[Workflow : Nœud de délai]** Prise en charge de l'utilisation d'une variable pour la durée ([#6621](https://github.com/nocobase/nocobase/pull/6621)) par @mytharcher
- **[Gestionnaire d'erreurs]** Prise en charge d'un titre personnalisé dans le composant AppError. ([#6409](https://github.com/nocobase/nocobase/pull/6409)) par @sheldon66
- **[Gestionnaire de fichiers]** Ajout d'une option trim pour les champs de texte de la collection de stockages ([#6604](https://github.com/nocobase/nocobase/pull/6604)) par @mytharcher
- **[Gestionnaire de tâches asynchrones]** Optimisation des boutons d'importation/exportation dans Pro ([#6531](https://github.com/nocobase/nocobase/pull/6531)) par @chenos
- **[Workflow : Événement d'action personnalisée]** Ajout de paramètres d'actualisation pour le bouton de déclenchement du workflow par @mytharcher
- **[Action : Exporter les enregistrements Pro]** Optimisation des boutons d'importation/exportation dans Pro par @katherinehhh
- **[Restriction IP]** Mise à jour du contenu du message de restriction IP. par @sheldon66
- **[Stockage de fichiers : S3(Pro)]** Prise en charge des variables globales dans la configuration de stockage par @mytharcher
- **[Gestionnaire de sauvegarde]** Permet de restaurer l'application principale à partir d'une sauvegarde de sous-application par @gchust
- **[Workflow : Approbation]** Prise en charge de l'utilisation d'un modèle de bloc pour le formulaire de processus d'approbation par @mytharcher
- **[Gestionnaire de migration]** Permet d'ignorer la sauvegarde et la restauration automatiques pour la migration par @gchust

#### 🐛 Corrections de bugs

- **[client]**

  - Problème de commutation du sélecteur dans le champ de date du bouton de filtre ([#6695](https://github.com/nocobase/nocobase/pull/6695)) par @katherinehhh
  - Conversion de variable dans les conditions de règle de liaison de sous-tableau/sous-formulaire ([#6702](https://github.com/nocobase/nocobase/pull/6702)) par @katherinehhh
  - Bouton d'exportation affiché sans autorisation d'exportation ([#6689](https://github.com/nocobase/nocobase/pull/6689)) par @katherinehhh
  - Après connexion via une clé étrangère, cliquer pour déclencher le filtrage entraîne des conditions de filtre vides ([#6634](https://github.com/nocobase/nocobase/pull/6634)) par @zhangzhonghe
  - Correction d'une erreur levée dans le nœud de création / mise à jour du workflow ([#6696](https://github.com/nocobase/nocobase/pull/6696)) par @mytharcher
  - Correction d'une erreur levée lors du survol de la souris sur un bloc de modèle référencé dans la configuration du nœud d'approbation ([#6691](https://github.com/nocobase/nocobase/pull/6691)) par @mytharcher
  - Champ d'association personnalisé n'affichant pas les paramètres du composant de champ ([#6692](https://github.com/nocobase/nocobase/pull/6692)) par @katherinehhh
  - Compatibilité des règles de liaison avec les données héritées ([#6686](https://github.com/nocobase/nocobase/pull/6686)) par @katherinehhh
  - Le chargement différé d'un composant d'interface utilisateur manquant provoque une erreur de rendu ([#6683](https://github.com/nocobase/nocobase/pull/6683)) par @gchust
  - Correction des paramètres régionaux pour le composant de téléchargement ([#6682](https://github.com/nocobase/nocobase/pull/6682)) par @mytharcher
  - Ajout du composant natif Password à HoC Input ([#6679](https://github.com/nocobase/nocobase/pull/6679)) par @mytharcher
  - Problème d'affichage des descriptions de champ dans le workflow ([#6680](https://github.com/nocobase/nocobase/pull/6680)) par @katherinehhh
  - Champs hérités affichés dans la liste d'affectation des champs de la collection actuelle ([#6666](https://github.com/nocobase/nocobase/pull/6666)) par @katherinehhh
  - Problème de style dans l'entrée de variable lors de la définition de la valeur par défaut ([#6668](https://github.com/nocobase/nocobase/pull/6668)) par @katherinehhh
  - Le passage au menu de groupe ne doit pas sauter vers une page qui a déjà été masquée dans le menu ([#6654](https://github.com/nocobase/nocobase/pull/6654)) par @zhangzhonghe
  - Le formulaire de filtre ne doit pas afficher l'invite "Modifications non enregistrées" ([#6657](https://github.com/nocobase/nocobase/pull/6657)) par @zhangzhonghe
  - Dans le formulaire de filtre, lorsque le bouton de filtre est cliqué, s'il y a des champs qui n'ont pas passé la validation, le filtrage est toujours déclenché ([#6659](https://github.com/nocobase/nocobase/pull/6659)) par @zhangzhonghe
  - L'option "autoriser plusieurs" ne fonctionne pas pour le champ de relation ([#6661](https://github.com/nocobase/nocobase/pull/6661)) par @katherinehhh
  - Correction du problème d'images d'aperçu masquées ([#6651](https://github.com/nocobase/nocobase/pull/6651)) par @zhangzhonghe
  - Dans le bloc de formulaire, la valeur par défaut de la configuration du champ sera d'abord affichée sous forme de chaîne de variable d'origine, puis disparaîtra ([#6649](https://github.com/nocobase/nocobase/pull/6649)) par @zhangzhonghe
  - Style d'entrée de variable incorrect ([#6645](https://github.com/nocobase/nocobase/pull/6645)) par @gchust
  - Le titre du tiroir d'édition du nœud de workflow affiche [object Object] ([#6648](https://github.com/nocobase/nocobase/pull/6648)) par @katherinehhh
  - Chevauchement de la description du sous-tableau avec le bouton d'ajout ([#6646](https://github.com/nocobase/nocobase/pull/6646)) par @katherinehhh
  - Souligné en pointillés causé par la disposition de formulaire horizontale dans la fenêtre modale ([#6639](https://github.com/nocobase/nocobase/pull/6639)) par @katherinehhh
  - La règle avec la condition 'any' ne prend pas effet lorsque la liste de conditions est vide ([#6628](https://github.com/nocobase/nocobase/pull/6628)) par @katherinehhh
  - Échec de l'analyse de la variable lorsque les paramètres d'URL contiennent des caractères chinois ([#6618](https://github.com/nocobase/nocobase/pull/6618)) par @katherinehhh
  - Zone vide entre le titre de la page de configuration du modèle de bloc et le menu ([#6625](https://github.com/nocobase/nocobase/pull/6625)) par @gchust
  - Les champs de relation dans le formulaire de filtre signalent une erreur après l'actualisation de la page car x-data-source n'est pas transporté ([#6619](https://github.com/nocobase/nocobase/pull/6619)) par @zhangzhonghe
  - Problème de données avec le bloc Gantt dans la collection arborescente ([#6617](https://github.com/nocobase/nocobase/pull/6617)) par @katherinehhh
  - Problème d'affichage de l'étiquette de champ pour éviter la troncature par les deux-points ([#6599](https://github.com/nocobase/nocobase/pull/6599)) par @katherinehhh
  - Propriété x-disabled ne prenant pas effet sur les champs de formulaire ([#6610](https://github.com/nocobase/nocobase/pull/6610)) par @katherinehhh
  - Correction de la propriété `disabled` qui ne fonctionne pas lorsque `SchemaInitializerItem` a des `items` ([#6597](https://github.com/nocobase/nocobase/pull/6597)) par @mytharcher
  - Champ d'association (sélection) affichant N/A lors de l'exposition des champs de collection associés ([#6582](https://github.com/nocobase/nocobase/pull/6582)) par @katherinehhh
  - Les boutons de soumission et d'actualisation n'affichent pas correctement le mode icône uniquement ([#6592](https://github.com/nocobase/nocobase/pull/6592)) par @katherinehhh
  - Problème de cascade : 'La valeur de xxx ne peut pas être au format tableau' lors de la suppression et de la re-sélection ([#6585](https://github.com/nocobase/nocobase/pull/6585)) par @katherinehhh
  - Conflit de liaison entre les champs d'association de même nom dans différents sous-tableaux au sein du même formulaire ([#6577](https://github.com/nocobase/nocobase/pull/6577)) par @katherinehhh
- **[database]**

  - Correction d'une erreur de build CI ([#6687](https://github.com/nocobase/nocobase/pull/6687)) par @aaaaaajie
  - Lors de la suppression d'enregistrements un-à-plusieurs, `filter` et `filterByTk` sont tous deux transmis et `filter` inclut un champ d'association, `filterByTk` est ignoré ([#6606](https://github.com/nocobase/nocobase/pull/6606)) par @2013xile
  - Éviter les modifications du champ "datetimeNoTz" lorsque la valeur n'est pas modifiée lors de la mise à jour de l'enregistrement ([#6588](https://github.com/nocobase/nocobase/pull/6588)) par @mytharcher
- **[build]** La sortie de build est incorrecte lorsque le plugin dépend de certaines bibliothèques AMD ([#6665](https://github.com/nocobase/nocobase/pull/6665)) par @gchust
- **[Visualisation de données]** Les options de champ d'énumération sont vides dans le bloc de filtre ([#6706](https://github.com/nocobase/nocobase/pull/6706)) par @2013xile
- **[Action : Requête personnalisée]** Assurez-vous que les données de requête personnalisées doivent être au format JSON ([#6701](https://github.com/nocobase/nocobase/pull/6701)) par @chenos
- **[Workflow : Nœud manuel]**

  - Correction d'une erreur ACL dans le centre de tâches ([#6693](https://github.com/nocobase/nocobase/pull/6693)) par @mytharcher
  - Correction de la constante d'état de la tâche manuelle ([#6676](https://github.com/nocobase/nocobase/pull/6676)) par @mytharcher
- **[Action : Importer des enregistrements]** Correction d'une erreur lors de l'importation du champ de temps xlsx ([#6672](https://github.com/nocobase/nocobase/pull/6672)) par @aaaaaajie
- **[Contrôle d'accès]**

  - Correction d'une erreur levée lors de la sérialisation du modèle de rôle dans le cache ([#6674](https://github.com/nocobase/nocobase/pull/6674)) par @mytharcher
  - Correction de la logique de calcul de l'union des rôles ([#6605](https://github.com/nocobase/nocobase/pull/6605)) par @aaaaaajie
  - Attribution incorrecte du rôle actuel lors de la connexion ([#6581](https://github.com/nocobase/nocobase/pull/6581)) par @aaaaaajie
- **[Bloc : iframe]** La barre de défilement verticale apparaît lorsque le bloc iframe est réglé sur une hauteur totale ([#6675](https://github.com/nocobase/nocobase/pull/6675)) par @katherinehhh
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
- **[Champ de collection : Plusieurs-à-plusieurs (tableau)]** Problème de filtrage par champs dans une collection d'association avec un champ plusieurs-à-plusieurs (tableau) ([#6596](https://github.com/nocobase/nocobase/pull/6596)) par @2013xile
- **[Formulaires publics]** Les autorisations de vue incluent la liste et l'obtention ([#6607](https://github.com/nocobase/nocobase/pull/6607)) par @chenos
- **[Authentification]** Attribution du jeton dans `AuthProvider` ([#6593](https://github.com/nocobase/nocobase/pull/6593)) par @2013xile
- **[Calendrier]** Données manquantes sur les dates limites dans la vue hebdomadaire du calendrier ([#6587](https://github.com/nocobase/nocobase/pull/6587)) par @katherinehhh
- **[Bloc : Carte]** La validation de la gestion de la carte ne doit pas réussir avec une entrée d'espace ([#6575](https://github.com/nocobase/nocobase/pull/6575)) par @katherinehhh
- **[Action : Modification par lot]** Cliquez sur le bouton de modification par lot, configurez la fenêtre contextuelle, puis ouvrez-la à nouveau, la fenêtre contextuelle est vide ([#6578](https://github.com/nocobase/nocobase/pull/6578)) par @zhangzhonghe
- **[Workflow : Événement d'action personnalisée]** Correction des cas de test par @mytharcher
- **[Gestionnaire d'e-mails]**

  - Correction de l'impossibilité de synchroniser, de l'absence d'affichage de l'objet et d'autres petits bugs par @jiannx
  - Correction de l'autorisation de gestion des e-mails ne permettant pas de voir la liste des e-mails par @jiannx
  - Correction de l'absence d'await pour l'appel suivant. par @jiannx
- **[Stockage de fichiers : S3(Pro)]**

  - Correction de l'absence d'await pour l'appel suivant. par @jiannx
  - Paramètres individuels baseurl et public, amélioration de l'UX de configuration du stockage S3 Pro par @jiannx
  - Renvoyer une erreur à l'utilisateur lors du téléchargement du logo vers le stockage S3 Pro (défini par défaut) par @mytharcher
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

  - L'heure de création du journal de migration est affichée incorrectement dans certains environnements par @gchust
  - L'option d'ignorer la sauvegarde automatique devient invalide si la fenêtre contextuelle de variable d'environnement apparaît pendant la migration par @gchust
