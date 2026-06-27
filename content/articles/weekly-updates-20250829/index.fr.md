---
title: "Mises à jour hebdomadaires de NocoBase : Optimisations et corrections de bugs"
description: "La mise à jour de cette semaine inclut : l'ajout d'un type de modèle en ligne pour la configuration des notifications et la prise en charge de titres de tâches cohérents dans tous les nœuds d'approbation d'un même workflow."
---

Résumez les journaux de mise à jour hebdomadaires du produit. Les dernières versions sont disponibles sur [notre blog](https://www.nocobase.com/en/blog/timeline).

**NocoBase est actuellement mis à jour avec trois branches : `main`, `next` et `develop`.**

![version.png](https://static-docs.nocobase.com/ba5f04e27e99c625cb3822da5df07860.png)

* `main` : La version la plus stable à ce jour, recommandée pour l'installation ;
* `next` : Version bêta, contient les nouvelles fonctionnalités à venir et a été testée préliminairement. Il peut y avoir des problèmes connus ou inconnus. Elle est principalement destinée aux utilisateurs testeurs pour recueillir des retours et optimiser davantage les fonctionnalités. Idéale pour les utilisateurs testeurs qui souhaitent découvrir les nouvelles fonctionnalités en avant-première et donner leur avis ;
* `develop` : Version alpha, contient le code de fonctionnalité le plus récent, peut être incomplète ou instable, principalement destinée au développement interne et à l'itération rapide. Adaptée aux utilisateurs techniques intéressés par les fonctionnalités de pointe du produit, mais avec des problèmes potentiels et des fonctions incomplètes. Ne pas utiliser en production.

## main

![main.png](https://static-docs.nocobase.com/47a3c71734c1d0f908b51f9ebd53c0ac.png)

### [v1.8.22](https://www.nocobase.com/en/blog/v1.8.22)

*Date de sortie : 2025-08-27*

#### 🐛 Corrections de bugs

- **[Workflow]** Correction du problème où la fenêtre contextuelle de détail ne s'affichait pas en raison d'une configuration de route incorrecte dans le centre des tâches ([#7452](https://github.com/nocobase/nocobase/pull/7452)) par @mytharcher

### [v1.8.21](https://www.nocobase.com/en/blog/v1.8.21)

*Date de sortie : 2025-08-26*

#### 🐛 Corrections de bugs

- **[Gestionnaire de fichiers]** Correction de l'erreur lors de la modification du champ `storage` dans la collection de fichiers. ([#7393](https://github.com/nocobase/nocobase/pull/7393)) par @mytharcher
- **[Workflow : Nœud parallèle]** Correction du problème où une détermination incorrecte du statut dans les nœuds de branche parallèle sous le mode "Exécuter toutes les branches" provoquait une fin prématurée ([#7445](https://github.com/nocobase/nocobase/pull/7445)) par @mytharcher
- **[Workflow : Approbation]** Ajout de la variable de statut pour les modèles personnalisés dans les notifications d'achèvement d'approbation par @mytharcher

### [v1.8.20](https://www.nocobase.com/en/blog/v1.8.20)

*Date de sortie : 2025-08-25*

#### 🚀 Améliorations

- **[Workflow]** Ajustement de l'API des variables de workflow pour prendre en charge la prédéfinition d'une liste de variables supplémentaires ([#7439](https://github.com/nocobase/nocobase/pull/7439)) par @mytharcher
- **[Workflow : Approbation]**

  - Prise en charge de l'utilisation de variables liées à l'approbation dans les notifications personnalisées par @mytharcher
  - Prise en charge de la mise à jour du statut d'approbation après que le nœud de fin a terminé l'exécution par @mytharcher

#### 🐛 Corrections de bugs

- **[client]**

  - Correction d'un problème où, dans certains scénarios, la modification d'un enregistrement dans la fenêtre contextuelle du sélecteur d'enregistrement mobile provoquait une erreur ([#7444](https://github.com/nocobase/nocobase/pull/7444)) par @zhangzhonghe
  - La validation requise ne fonctionnait pas pour les champs de pièce jointe dans le sous-tableau ([#7431](https://github.com/nocobase/nocobase/pull/7431)) par @katherinehhh
  - Correction du problème où l'icône s'affichait incorrectement lorsque l'URL dans le champ d'URL de pièce jointe contenait des paramètres de requête ([#7432](https://github.com/nocobase/nocobase/pull/7432)) par @mytharcher
- **[base de données]**

  - Correction d'une erreur de syntaxe MySQL qui se produisait lors du chargement de plus de messages in-app. ([#7438](https://github.com/nocobase/nocobase/pull/7438)) par @aaaaaajie
  - Correction d'un problème de précision pour les champs Numérique exportés ([#7421](https://github.com/nocobase/nocobase/pull/7421)) par @aaaaaajie
- **[undefined]** Correction du problème de filtrage uniquement par champ de date dans la source externe MySQL ([#7422](https://github.com/nocobase/nocobase/pull/7422)) par @aaaaaajie
- **[Action : Importer des enregistrements]** Correction d'un problème où l'importation échouait lorsque la clé primaire de la table était un texte sur une seule ligne ([#7416](https://github.com/nocobase/nocobase/pull/7416)) par @aaaaaajie
- **[Workflow]**

  - Compléter les options pour la suppression automatique du statut d'exécution du workflow ([#7436](https://github.com/nocobase/nocobase/pull/7436)) par @mytharcher
  - Correction des problèmes liés au menu mobile dans les tâches de workflow ([#7419](https://github.com/nocobase/nocobase/pull/7419)) par @mytharcher
- **[Action : Importer des enregistrements Pro]** Correction d'un résultat de mise à jour inattendu lors de l'utilisation d'une clé primaire de type chaîne dans l'importation xlsx. par @aaaaaajie

### [v1.8.19](https://www.nocobase.com/en/blog/v1.8.19)

*Date de sortie : 2025-08-22*

#### 🎉 Nouvelles fonctionnalités

- **[Workflow : Approbation]** Ajout d'un type de modèle en ligne pour la configuration des notifications par @mytharcher

#### 🚀 Améliorations

- **[client]** Prise en charge de l'affichage des icônes identifiées par des chaînes dans le composant Select en mode lecture seule ([#7420](https://github.com/nocobase/nocobase/pull/7420)) par @mytharcher
- **[base de données]** Optimisation des performances des requêtes ACL Meta ([#7400](https://github.com/nocobase/nocobase/pull/7400)) par @aaaaaajie
- **[Mobile]** Optimisation du composant de fenêtre contextuelle mobile ([#7414](https://github.com/nocobase/nocobase/pull/7414)) par @zhangzhonghe

#### 🐛 Corrections de bugs

- **[base de données]** Correction du problème où la lecture de la table externe Postgres incluait les vues d'autres schémas ([#7410](https://github.com/nocobase/nocobase/pull/7410)) par @aaaaaajie
- **[Bloc : modèle]** Résolution d'un problème où les blocs de courrier n'étaient pas visibles lorsqu'ils étaient placés à l'intérieur d'un bloc de modèle hérité ([#7430](https://github.com/nocobase/nocobase/pull/7430)) par @gchust
- **[Action : Importer des enregistrements Pro]** Interdire l'attribution de champs de relation lors de la détection des doublons d'importation. par @aaaaaajie
- **[Workflow : Approbation]** Correction du problème où la liste des utilisateurs était vide lors de la contresignature par @mytharcher
- **[Gestionnaire de migration]** Ignorer les commandes `\restrict` et `\unrestrict` générées par le dernier pg_dump lors de la création de fichiers de migration pour résoudre les erreurs de restauration. par @2013xile

## next

![next.png](https://static-docs.nocobase.com/8ed17a0f08cc585018f6de6c8b13947d.png)

### [v1.9.0-beta.6](https://www.nocobase.com/en/blog/v1.9.0-beta.6)

*Date de sortie : 2025-08-22*

#### 🎉 Nouvelles fonctionnalités

- **[client]** Ajout de l'option "Auto focus" pour les composants Input, TextArea, URL et InputNumber qui focalise automatiquement le champ de saisie lors du rendu initial de la page lorsqu'elle est activée ([#7320](https://github.com/nocobase/nocobase/pull/7320)) par @zhangzhonghe
- **[Gestionnaire de tâches asynchrones]** Prise en charge de la division des services de tâches asynchrones par environnement et file d'événements ([#7241](https://github.com/nocobase/nocobase/pull/7241)) par @mytharcher
- **[Visionneuse de fichiers Office]** Prise en charge de l'aperçu des fichiers Office via l'aperçu en direct Microsoft ([#7300](https://github.com/nocobase/nocobase/pull/7300)) par @mytharcher
- **[Auth : SAML 2.0]** Ajout d'options de configuration liées à la signature par @2013xile
- **[Workflow : Approbation]**

  - Ajout d'un type de modèle en ligne pour la configuration des notifications par @mytharcher
  - Prise en charge de l'utilisation d'un titre de tâche cohérent pour tous les nœuds d'approbation dans le même workflow par @mytharcher

#### 🚀 Améliorations

- **[base de données]** Optimisation des performances des requêtes ACL Meta ([#7400](https://github.com/nocobase/nocobase/pull/7400)) par @aaaaaajie
- **[client]**

  - Prise en charge de l'affichage des icônes identifiées par des chaînes dans le composant Select en mode lecture seule ([#7420](https://github.com/nocobase/nocobase/pull/7420)) par @mytharcher
  - ajout de la prise en charge de la variable de date "avant-hier" ([#7359](https://github.com/nocobase/nocobase/pull/7359)) par @katherinehhh
  - Optimisation des performances lors du changement d'onglets de fenêtre contextuelle ([#7353](https://github.com/nocobase/nocobase/pull/7353)) par @zhangzhonghe
  - Ne pas fermer automatiquement le menu après la sélection ([#7252](https://github.com/nocobase/nocobase/pull/7252)) par @kerwin612
- **[Mobile]** Optimisation du composant de fenêtre contextuelle mobile ([#7414](https://github.com/nocobase/nocobase/pull/7414)) par @zhangzhonghe
- **[Workflow]**

  - Mise à jour du menu de sélection des nœuds pour afficher les options dans une disposition à deux colonnes afin d'améliorer la densité d'informations et de permettre aux utilisateurs de voir plus d'options à la fois ([#7396](https://github.com/nocobase/nocobase/pull/7396)) par @mytharcher
  - Correction d'un cas de test instable ([#7349](https://github.com/nocobase/nocobase/pull/7349)) par @mytharcher
  - Afficher le titre normal lorsqu'il est désactivé ([#7339](https://github.com/nocobase/nocobase/pull/7339)) par @mytharcher
  - Réduire la quantité de jobs à charger lors de la préparation de l'exécution ([#7284](https://github.com/nocobase/nocobase/pull/7284)) par @mytharcher
- **[Paramètres de licence]** Dans les paramètres de licence, copier le dernier ID d'instance à chaque fois ([#7387](https://github.com/nocobase/nocobase/pull/7387)) par @jiannx
- **[Authentification]** Suppression du paramètre de jeton de l'URL après une connexion réussie ([#7386](https://github.com/nocobase/nocobase/pull/7386)) par @2013xile
- **[Notification : Message in-app]**

  - Suppression des journaux SQL émis via `console.log` ([#7368](https://github.com/nocobase/nocobase/pull/7368)) par @2013xile
  - Changement du message in-app de SSE à WebSocket ([#7302](https://github.com/nocobase/nocobase/pull/7302)) par @mytharcher
- **[Visionneuse de fichiers Office]** Ajout de la prise en charge de l'aperçu des fichiers `.odt` ([#7347](https://github.com/nocobase/nocobase/pull/7347)) par @mytharcher
- **[Action : Importer des enregistrements Pro]** Prise en charge de la division des services d'import/export par environnement et file d'événements par @mytharcher
- **[Workflow : JavaScript]** Changement du cache en cache d'application pour éviter les bugs en mode cluster par @mytharcher
- **[Impression de modèle]** prise en charge du tableau de champ m2m par @jiannx
- **[Gestionnaire de sauvegarde]** amélioration des performances pour l'opération de sauvegarde de base de données MySQL par @gchust
- **[Auth : DingTalk]** Dans le client DingTalk, définir le titre de la barre de navigation sur une chaîne vide au lieu d'afficher "Chargement..." par @2013xile
- **[Gestionnaire de migration]** Prise en charge de la division du service de migration par environnement et file d'événements par @mytharcher

#### 🐛 Corrections de bugs

- **[client]**

  - Correction du problème où l'icône s'affichait incorrectement lorsque l'URL dans le champ d'URL de pièce jointe contenait des paramètres de requête ([#7432](https://github.com/nocobase/nocobase/pull/7432)) par @mytharcher
  - traiter le nombre 0 comme vide lors de la validation vide de la règle de liaison ([#7404](https://github.com/nocobase/nocobase/pull/7404)) par @katherinehhh
  - Correction du texte du bouton de lien qui passait à la ligne ([#7406](https://github.com/nocobase/nocobase/pull/7406)) par @mytharcher
  - Correction du problème où la disposition du formulaire multi-colonnes ne se convertissait pas en disposition à une seule colonne sur les appareils mobiles ([#7355](https://github.com/nocobase/nocobase/pull/7355)) par @zhangzhonghe
  - Correction de l'erreur de suppression en masse des collections ([#7345](https://github.com/nocobase/nocobase/pull/7345)) par @aaaaaajie
  - Correction du problème où la portée des données précédemment enregistrée n'était pas présélectionnée lors de la configuration individuelle des autorisations. ([#7288](https://github.com/nocobase/nocobase/pull/7288)) par @aaaaaajie
  - Correction du problème où les chaînes brutes des variables sont soumises avec le formulaire ([#7337](https://github.com/nocobase/nocobase/pull/7337)) par @zhangzhonghe
  - Lors de l'utilisation de variables pour définir les valeurs par défaut des champs dans les formulaires de filtre, si la valeur de la variable est vide, la zone de saisie affichera la chaîne de variable d'origine ([#7335](https://github.com/nocobase/nocobase/pull/7335)) par @zhangzhonghe
  - Correction de l'infobulle qui affiche [object Object] au survol dans le panneau d'actions ([#7322](https://github.com/nocobase/nocobase/pull/7322)) par @katherinehhh
  - Correction du problème de boucle infinie lors de l'analyse des valeurs par défaut des champs ([#7301](https://github.com/nocobase/nocobase/pull/7301)) par @zhangzhonghe
  - Correction de l'élément d'aperçu du fichier sur une URL nulle ([#7315](https://github.com/nocobase/nocobase/pull/7315)) par @mytharcher
  - Correction du problème où le tableau arborescent ne pouvait pas être développé ([#7309](https://github.com/nocobase/nocobase/pull/7309)) par @zhangzhonghe
  - Ajout de l'URL complète au fichier local lors de l'aperçu ([#7314](https://github.com/nocobase/nocobase/pull/7314)) par @mytharcher
  - Correction d'un comportement inattendu dans le tri par glisser-déposer des lignes du tableau ([#6959](https://github.com/nocobase/nocobase/pull/6959)) par @ChimingLiu
  - problème d'affichage du champ de date dans la fenêtre contextuelle du sélecteur de données de champ d'association du formulaire de filtre ([#7290](https://github.com/nocobase/nocobase/pull/7290)) par @katherinehhh
- **[base de données]** Correction du problème où la lecture de la table externe Postgres incluait les vues d'autres schémas ([#7410](https://github.com/nocobase/nocobase/pull/7410)) par @aaaaaajie
- **[serveur]** Certaines requêtes manquent de `ctx.action`, provoquant des erreurs dans le middleware du journal d'audit ([#7369](https://github.com/nocobase/nocobase/pull/7369)) par @2013xile
- **[undefined]** Ajout d'un nouveau plugin au préréglage ([#7319](https://github.com/nocobase/nocobase/pull/7319)) par @mytharcher
- **[utils]** gestion incorrecte du fuseau horaire pour parseDate ([#7318](https://github.com/nocobase/nocobase/pull/7318)) par @katherinehhh
- **[Bloc : modèle]** Résolution d'un problème où les blocs de courrier n'étaient pas visibles lorsqu'ils étaient placés à l'intérieur d'un bloc de modèle hérité ([#7430](https://github.com/nocobase/nocobase/pull/7430)) par @gchust
- **[Mobile]**

  - format d'affichage incorrect du champ de date sur mobile ([#7412](https://github.com/nocobase/nocobase/pull/7412)) par @katherinehhh
  - Correction du problème où les données de soumission de formulaire dans la boîte de dialogue d'approbation mobile étaient incorrectes ([#7389](https://github.com/nocobase/nocobase/pull/7389)) par @zhangzhonghe
  - Résolution d'un problème où le sélecteur de date sur les appareils mobiles s'affichait incorrectement lorsque des limites de plage de dates étaient appliquées ([#7362](https://github.com/nocobase/nocobase/pull/7362)) par @katherinehhh
- **[Workflow]**

  - Correction de l'erreur levée et de la disparition des données du formulaire lors de la modification de la catégorie du workflow ([#7408](https://github.com/nocobase/nocobase/pull/7408)) par @mytharcher
  - Correction de la traduction du titre de la page dans le centre des tâches du workflow ([#7392](https://github.com/nocobase/nocobase/pull/7392)) par @mytharcher
  - Refonte du menu "Ajouter un nœud" et correction des problèmes de performances de rendu du canevas de workflow qu'il a provoqués ([#7363](https://github.com/nocobase/nocobase/pull/7363)) par @mytharcher
  - Correction du problème de conditions de filtre incorrectes lors de la récupération d'un seul élément à faire ([#7366](https://github.com/nocobase/nocobase/pull/7366)) par @mytharcher
  - Correction du problème de correspondance de mots-clés dans la sélection de champ ([#7356](https://github.com/nocobase/nocobase/pull/7356)) par @mytharcher
  - Éviter l'erreur levée causée par la publication dans la file d'événements lors de l'arrêt ([#7348](https://github.com/nocobase/nocobase/pull/7348)) par @mytharcher
  - Correction du résultat `undefined` lorsque le processeur se ferme ([#7317](https://github.com/nocobase/nocobase/pull/7317)) par @mytharcher
  - Correction du problème d'ID BigInt dans MySQL lors de l'enregistrement d'un job ([#7292](https://github.com/nocobase/nocobase/pull/7292)) par @mytharcher
- **[Workflow : nœud de messagerie]** Correction du problème où le nœud de courrier électronique pourrait ne pas reprendre l'exécution correctement ([#7409](https://github.com/nocobase/nocobase/pull/7409)) par @mytharcher
- **[Visionneuse de fichiers Office]**

  - Correction de l'erreur levée lors du téléchargement d'un fichier vers le champ d'URL de pièce jointe ([#7405](https://github.com/nocobase/nocobase/pull/7405)) par @mytharcher
  - Prise en charge des fichiers `.docx`, `.xlsx` et `.pptx` avec uniquement une URL à prévisualiser ([#7336](https://github.com/nocobase/nocobase/pull/7336)) par @mytharcher
- **[Gestionnaire de fichiers]**

  - Suppression de l'indice pour la limite de taille de téléchargement de fichier ([#7391](https://github.com/nocobase/nocobase/pull/7391)) par @mytharcher
  - Ajout du champ `storageId` à la collection de fichiers pour prendre en charge la configuration des autorisations ([#7351](https://github.com/nocobase/nocobase/pull/7351)) par @mytharcher
  - Correction de l'autorisation du champ de stockage ([#7316](https://github.com/nocobase/nocobase/pull/7316)) par @mytharcher
- **[Notification : Message in-app]**

  - Correction des traductions ([#7384](https://github.com/nocobase/nocobase/pull/7384)) par @mytharcher
  - Correction du problème où les messages in-site étaient reçus mais pas affichés dans une fenêtre contextuelle ([#7364](https://github.com/nocobase/nocobase/pull/7364)) par @mytharcher
- **[Calendrier]** l'infobulle de l'élément d'événement du calendrier affiche [object Object] ([#7372](https://github.com/nocobase/nocobase/pull/7372)) par @katherinehhh
- **[Champ de collection : Formule]** Correction du problème où la saisie de la formule ne pouvait pas passer la validation en raison du type de variable ([#7373](https://github.com/nocobase/nocobase/pull/7373)) par @mytharcher
- **[Workflow : Nœud parallèle]** Correction de la suspension du nœud parallèle après la reprise sous MySQL ([#7346](https://github.com/nocobase/nocobase/pull/7346)) par @mytharcher
- **[Workflow : CC]** Correction de l'impossibilité de supprimer les blocs ([#7338](https://github.com/nocobase/nocobase/pull/7338)) par @mytharcher
- **[Visualisation des données]** problème de variable de date dans la valeur par défaut du champ de date dans le bloc de filtre du graphique ([#7291](https://github.com/nocobase/nocobase/pull/7291)) par @katherinehhh
- **[Collection : Arbre]** Correction de la logique de synchronisation des chemins des collections arborescentes ([#7330](https://github.com/nocobase/nocobase/pull/7330)) par @ChimingLiu
- **[Workflow : nœud de requête HTTP]** Correction d'un bug de condition de concurrence ([#7310](https://github.com/nocobase/nocobase/pull/7310)) par @mytharcher
- **[Workflow : nœud de calcul dynamique]** Correction d'une erreur causée par une API héritée ([#7321](https://github.com/nocobase/nocobase/pull/7321)) par @mytharcher
- **[Action : Exporter des enregistrements]** Correction du formatage incorrect des champs de relation imbriqués lors de l'exportation vers Excel. ([#7277](https://github.com/nocobase/nocobase/pull/7277)) par @aaaaaajie
- **[Action : Importer des enregistrements Pro]** Interdire l'attribution de champs de relation lors de la détection des doublons d'importation. par @aaaaaajie
- **[Source de données : SQL Server externe]** Correction du format de stockage incohérent pour les champs datetime MSSQL (sans fuseau horaire) provenant de sources de données externes par @aaaaaajie
- **[Workflow : Événement d'action personnalisée]** Effacer les lignes sélectionnées après avoir déclenché avec succès des actions sur plusieurs enregistrements par @mytharcher
- **[Workflow : Sous-flux]** Correction du flux suspendu par @mytharcher
- **[Impression de modèle]** Impression des champs de sélection radio dans plusieurs lignes de données par @jiannx
- **[Stockage de fichiers : S3(Pro)]**

  - Correction du problème où la méthode d'authentification IAM ne pouvait pas être utilisée pour télécharger des fichiers par @mytharcher
  - Dépréciation du paramètre problématique `attachmentField` par @mytharcher
- **[Workflow : Approbation]**

  - Correction du problème où le chargement des données de source de données externe dans les enregistrements d'approbation entraînait une erreur 404 par @mytharcher
  - Ajout du titre de tâche pour les éléments ajoutés et délégués par @mytharcher
  - Correction de l'erreur levée à partir de la sélection du destinataire dans la source de données externe par @mytharcher
  - Correction du problème où la liste des utilisateurs était vide lors de la contresignature par @mytharcher
  - Correction de la mise à jour des associations lors de la soumission d'un brouillon par @mytharcher
  - Correction des règles de liaison qui ne fonctionnent pas dans le bloc de détail d'approbation d'origine par @mytharcher
- **[Gestionnaire de sauvegarde]** les sauvegardes de fichiers volumineux pouvaient afficher "réussi" avant d'être réellement terminées par @gchust
- **[Gestionnaire de migration]** Ignorer les commandes `\restrict` et `\unrestrict` générées par le dernier pg_dump lors de la création de fichiers de migration pour résoudre les erreurs de restauration. par @2013xile

## develop

![develop.png](https://static-docs.nocobase.com/7fcdd9456a17286d8a439eee52bcb8d2.png)

### [v1.9.0-alpha.12](https://www.nocobase.com/en/blog/v1.9.0-alpha.1)

*Date de sortie : 2025-08-22*

#### 🎉 Nouvelles fonctionnalités

- **[client]** Prise en charge de la règle de validation de champ ([#7297](https://github.com/nocobase/nocobase/pull/7297)) par @aaaaaajie
- **[Workflow : Approbation]**

  - Ajout d'un type de modèle en ligne pour la configuration des notifications par @mytharcher
  - Prise en charge de l'utilisation d'un titre de tâche cohérent pour tous les nœuds d'approbation dans le même workflow par @mytharcher

#### 🚀 Améliorations

- **[base de données]** Optimisation des performances des requêtes ACL Meta ([#7400](https://github.com/nocobase/nocobase/pull/7400)) par @aaaaaajie
- **[client]** Prise en charge de l'affichage des icônes identifiées par des chaînes dans le composant Select en mode lecture seule ([#7420](https://github.com/nocobase/nocobase/pull/7420)) par @mytharcher
- **[Mobile]** Optimisation du composant de fenêtre contextuelle mobile ([#7414](https://github.com/nocobase/nocobase/pull/7414)) par @zhangzhonghe
- **[Workflow]** Mise à jour du menu de sélection des nœuds pour afficher les options dans une disposition à deux colonnes afin d'améliorer la densité d'informations et de permettre aux utilisateurs de voir plus d'options à la fois ([#7396](https://github.com/nocobase/nocobase/pull/7396)) par @mytharcher
- **[Paramètres de licence]** Dans les paramètres de licence, copier le dernier ID d'instance à chaque fois ([#7387](https://github.com/nocobase/nocobase/pull/7387)) par @jiannx
- **[Notification : Message in-app]** Suppression des journaux SQL émis via `console.log` ([#7368](https://github.com/nocobase/nocobase/pull/7368)) par @2013xile
- **[Authentification]** Suppression du paramètre de jeton de l'URL après une connexion réussie ([#7386](https://github.com/nocobase/nocobase/pull/7386)) par @2013xile
- **[Impression de modèle]** prise en charge du tableau de champ m2m par @jiannx

#### 🐛 Corrections de bugs

- **[base de données]** Correction du problème où la lecture de la table externe Postgres incluait les vues d'autres schémas ([#7410](https://github.com/nocobase/nocobase/pull/7410)) par @aaaaaajie
- **[client]**

  - traiter le nombre 0 comme vide lors de la validation vide de la règle de liaison ([#7404](https://github.com/nocobase/nocobase/pull/7404)) par @katherinehhh
  - Correction d'un problème où le bouton "Paramètres de colonne" chargeait les colonnes de la table à l'intérieur de la boîte de dialogue modale ([#7385](https://github.com/nocobase/nocobase/pull/7385)) par @kerwin612
  - Correction du texte du bouton de lien qui passait à la ligne ([#7406](https://github.com/nocobase/nocobase/pull/7406)) par @mytharcher
- **[serveur]** Certaines requêtes manquent de `ctx.action`, provoquant des erreurs dans le middleware du journal d'audit ([#7369](https://github.com/nocobase/nocobase/pull/7369)) par @2013xile
- **[Bloc : modèle]** Résolution d'un problème où les blocs de courrier n'étaient pas visibles lorsqu'ils étaient placés à l'intérieur d'un bloc de modèle hérité ([#7430](https://github.com/nocobase/nocobase/pull/7430)) par @gchust
- **[Workflow : nœud de messagerie]** Correction du problème où le nœud de courrier électronique pourrait ne pas reprendre l'exécution correctement ([#7409](https://github.com/nocobase/nocobase/pull/7409)) par @mytharcher
- **[Mobile]**

  - format d'affichage incorrect du champ de date sur mobile ([#7412](https://github.com/nocobase/nocobase/pull/7412)) par @katherinehhh
  - Correction du problème où les données de soumission de formulaire dans la boîte de dialogue d'approbation mobile étaient incorrectes ([#7389](https://github.com/nocobase/nocobase/pull/7389)) par @zhangzhonghe
- **[Workflow]**

  - Correction de l'erreur levée et de la disparition des données du formulaire lors de la modification de la catégorie du workflow ([#7408](https://github.com/nocobase/nocobase/pull/7408)) par @mytharcher
  - Correction de la traduction du titre de la page dans le centre des tâches du workflow ([#7392](https://github.com/nocobase/nocobase/pull/7392)) par @mytharcher
- **[Visionneuse de fichiers Office]** Correction de l'erreur levée lors du téléchargement d'un fichier vers le champ d'URL de pièce jointe ([#7405](https://github.com/nocobase/nocobase/pull/7405)) par @mytharcher
- **[Notification : Message in-app]** Correction des traductions ([#7384](https://github.com/nocobase/nocobase/pull/7384)) par @mytharcher
- **[Champ de collection : Formule]** Correction du problème où la saisie de la formule ne pouvait pas passer la validation en raison du type de variable ([#7373](https://github.com/nocobase/nocobase/pull/7373)) par @mytharcher
- **[Gestionnaire de fichiers]** Suppression de l'indice pour la limite de taille de téléchargement de fichier ([#7391](https://github.com/nocobase/nocobase/pull/7391)) par @mytharcher
- **[Calendrier]** l'infobulle de l'élément d'événement du calendrier affiche [object Object] ([#7372](https://github.com/nocobase/nocobase/pull/7372)) par @katherinehhh
- **[Action : Importer des enregistrements Pro]** Interdire l'attribution de champs de relation lors de la détection des doublons d'importation. par @aaaaaajie
- **[Workflow : Événement d'action personnalisée]** Effacer les lignes sélectionnées après avoir déclenché avec succès des actions sur plusieurs enregistrements par @mytharcher
- **[Impression de modèle]** Impression des champs de sélection radio dans plusieurs lignes de données par @jiannx
- **[Stockage de fichiers : S3(Pro)]**

  - Dépréciation du paramètre problématique `attachmentField` par @mytharcher
  - Correction du problème où la méthode d'authentification IAM ne pouvait pas être utilisée pour télécharger des fichiers par @mytharcher
- **[Workflow : Approbation]**

  - Correction du problème où le chargement des données de source de données externe dans les enregistrements d'approbation entraînait une erreur 404 par @mytharcher
  - Correction du problème où la liste des utilisateurs était vide lors de la contresignature par @mytharcher
- **[Gestionnaire de sauvegarde]** les sauvegardes de fichiers volumineux pouvaient afficher "réussi" avant d'être réellement terminées par @gchust
- **[Gestionnaire de migration]** Ignorer les commandes `\restrict` et `\unrestrict` générées par le dernier pg_dump lors de la création de fichiers de migration pour résoudre les erreurs de restauration. par @2013xile
