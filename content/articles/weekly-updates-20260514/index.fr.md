---
title: "Mises à jour hebdomadaires｜L'IA employé prend en charge le traitement parallèle de plusieurs conversations"
description: "Ceci est un résumé des mises à jour et améliorations des fonctionnalités de NocoBase du 7 au 14 mai 2026."
---

Résumez les journaux de mise à jour hebdomadaires du produit. Les dernières versions sont consultables sur [notre blog](https://www.nocobase.com/en/blog/timeline).

**NocoBase est actuellement mis à jour avec trois branches : `main`, `next` et `develop`.**

![version.png](https://static-docs.nocobase.com/ba5f04e27e99c625cb3822da5df07860.png)

* `main` : La version la plus stable à ce jour, recommandée pour l'installation ;
* `next` : Version bêta, contient les nouvelles fonctionnalités à venir et a été testée préliminairement. Il peut y avoir des problèmes connus ou inconnus. Elle est principalement destinée aux utilisateurs de test pour recueillir des retours et optimiser davantage les fonctions. Idéale pour les utilisateurs de test qui souhaitent découvrir les nouvelles fonctionnalités en avant-première et donner leur avis ;
* `develop` : Version alpha, contient le code de fonctionnalité le plus récent, peut être incomplète ou instable, principalement destinée au développement interne et à l'itération rapide. Adaptée aux utilisateurs techniques intéressés par les fonctionnalités de pointe du produit, mais avec des problèmes potentiels et des fonctions incomplètes. Ne pas utiliser en production.

## main

![main.png](https://static-docs.nocobase.com/47a3c71734c1d0f908b51f9ebd53c0ac.png)

### [v2.0.52](https://www.nocobase.com/en/blog/v2.0.52)

*Date de sortie : 2026-05-13*

### 🎉 Nouvelles fonctionnalités

- **[client]**
  - ajout de la variable de langue de l'utilisateur courant dans v2 ([#9405](https://github.com/nocobase/nocobase/pull/9405)) par @katherinehhh
  - ajout d'une option de limite de plage de dates pour les champs de date dans les formulaires v2 ([#9400](https://github.com/nocobase/nocobase/pull/9400)) par @katherinehhh

### 🚀 Améliorations

- **[client]** exclure les enregistrements déjà associés dans la boîte de dialogue de sélection d'association du bloc de tableau un-à-plusieurs ([#9448](https://github.com/nocobase/nocobase/pull/9448)) par @katherinehhh
- **[Départements]** optimiser le style de la liste des départements en ajoutant des icônes et en ajustant l'espacement ([#9435](https://github.com/nocobase/nocobase/pull/9435)) par @katherinehhh
- **[IA : Base de connaissances]** L'identifiant unique d'une base de connaissances est configurable lors de sa création par @cgyrock

### 🐛 Corrections de bugs

- **[client]**

  - Correction du problème où les paramètres de valeur par défaut hérités ne pouvaient pas être supprimés. ([#9470](https://github.com/nocobase/nocobase/pull/9470)) par @gchust
  - Correction du problème où il était impossible de sélectionner des options pour le champ de sélection d'une association. ([#9088](https://github.com/nocobase/nocobase/pull/9088)) par @gchust
  - Correction d'un problème où la portée des données du bloc cible était mal définie lors de la désélection de données de ligne dans un flux d'événements de bloc de tableau. ([#9443](https://github.com/nocobase/nocobase/pull/9443)) par @gchust
  - Correction des requêtes de tableau en double lorsque les formulaires de filtre ont des valeurs par défaut ([#9423](https://github.com/nocobase/nocobase/pull/9423)) par @zhangzhonghe
  - Correction des règles de liaison V2 pour prendre en charge la définition d'options sélectionnables pour les champs ([#9399](https://github.com/nocobase/nocobase/pull/9399)) par @jiannx
  - correction d'une erreur lors du changement du champ de titre d'un champ d'association dans un bloc de tableau v2 ([#9451](https://github.com/nocobase/nocobase/pull/9451)) par @katherinehhh
  - Correction d'un problème intermittent où les règles de liaison des boutons d'action ne s'appliquaient pas. ([#9430](https://github.com/nocobase/nocobase/pull/9430)) par @gchust
  - masquer le composant de sous-tableau pour les champs d'association "vers-plusieurs" dans le sous-tableau v2 ([#9438](https://github.com/nocobase/nocobase/pull/9438)) par @katherinehhh
- **[serveur]** correction(gestionnaire-fichiers) : forcer le téléchargement des fichiers de contenu actif dans le stockage local/public ([#9437](https://github.com/nocobase/nocobase/pull/9437)) par @mytharcher
- **[Employés IA]** Correction du test Ollama nécessitant la saisie d'une clé ([#9450](https://github.com/nocobase/nocobase/pull/9450)) par @cgyrock
- **[Gestionnaire de collection graphique]** correction de l'erreur de filtre d'action de mise à jour lors de la mise en page automatique de l'interface graphique ([#9421](https://github.com/nocobase/nocobase/pull/9421)) par @katherinehhh
- **[Workflow]** correction : restauration du texte d'aide dans les boîtes de dialogue de liaison de workflow FlowModel pour les événements d'opération et d'action personnalisée ([#9447](https://github.com/nocobase/nocobase/pull/9447)) par @mytharcher
- **[Départements]** correction du conflit de traduction entre les boutons d'ajout d'utilisateur et d'ajout de département dans les paramètres Utilisateurs et Permissions ([#9456](https://github.com/nocobase/nocobase/pull/9456)) par @katherinehhh
- **[Champ de collection : Markdown(Vditor)]** correction de l'infobulle du champ markdown masquée dans la disposition de formulaire horizontale ([#9420](https://github.com/nocobase/nocobase/pull/9420)) par @katherinehhh
- **[Client WEB]** Correction du filtrage par type de route lors de l'utilisation d'étiquettes traduites ([#9425](https://github.com/nocobase/nocobase/pull/9425)) par @zhangzhonghe
- **[Workflow : Approbation]**

  - Correction du problème où le champ JS apparaissait dans les paramètres du processus d'approbation par @zhangzhonghe
  - Correction de la disposition du formulaire d'approbation sur les appareils mobiles par @zhangzhonghe
  - Correction de l'index d'enregistrement d'approbation en double lors de la délégation de tâches d'approbation. par @mytharcher
- **[Gestionnaire de sauvegarde]** Correction d'un problème où les sauvegardes échouaient avec une erreur lorsque les fichiers étaient introuvables. par @gchust

### [v2.0.51](https://www.nocobase.com/en/blog/v2.0.51)

*Date de sortie : 2026-05-10*

### 🚀 Améliorations

- **[Workflow : Approbation]** Correction du comportement de validation des champs obligatoires pour les formulaires d'approbation par @zhangzhonghe

### 🐛 Corrections de bugs

- **[client]**

  - Correction d'un problème où le code JS ne pouvait plus être modifié après qu'un champ JS ait été défini en lecture seule. ([#9404](https://github.com/nocobase/nocobase/pull/9404)) par @gchust
  - Correction d'un problème où les affectations de champs de sous-tableau ne prenaient pas effet dans les règles de liaison de champ. ([#9412](https://github.com/nocobase/nocobase/pull/9412)) par @gchust
  - Correction du problème où les onglets de page v2 ne se synchronisent pas immédiatement après l'enregistrement des paramètres ([#9396](https://github.com/nocobase/nocobase/pull/9396)) par @zhangzhonghe
  - Correction d'un problème où la fenêtre contextuelle de valeur par défaut pour les champs d'association dans le formulaire de création s'affichait incorrectement. ([#9408](https://github.com/nocobase/nocobase/pull/9408)) par @gchust
- **[Politique de mot de passe]** Correction d'un problème où les utilisateurs verrouillés de manière permanente pouvaient se connecter après un redémarrage du service par @2013xile
- **[Action : Importer des enregistrements Pro]** Correction du problème où la vérification des doublons sur le champ de date échouait toujours par @mytharcher
- **[Workflow : Approbation]** Correction du problème où le tiroir de sélection d'enregistrement était obscurci dans la configuration du workflow d'approbation par @zhangzhonghe

### [v2.0.50](https://www.nocobase.com/en/blog/v2.0.50)

*Date de sortie : 2026-05-09*

### 🎉 Nouvelles fonctionnalités

- **[client]** ajout des actions d'association et de dissociation au bloc d'association ([#9366](https://github.com/nocobase/nocobase/pull/9366)) par @katherinehhh
- **[Copie de texte]** prise en charge de l'option "Afficher le bouton de copie" pour le champ de texte en lecture seule ([#9394](https://github.com/nocobase/nocobase/pull/9394)) par @katherinehhh

### 🚀 Améliorations

- **[indéfini]** ignorer les versions déjà publiées dans pk ([#9374](https://github.com/nocobase/nocobase/pull/9374)) par @Molunerfinn
- **[client]** Permettre d'attribuer une valeur de champ pour le champ de séquence ([#9397](https://github.com/nocobase/nocobase/pull/9397)) par @mytharcher

### 🐛 Corrections de bugs

- **[moteur-de-flux]** Correction des messages de validation de champ de table de données non traduits dans les formulaires de flux v2 ([#9393](https://github.com/nocobase/nocobase/pull/9393)) par @jiannx
- **[client]**

  - Correction des champs `Caché (valeur réservée)` dans les blocs de formulaire afin qu'ils restent visibles en mode Éditeur d'interface utilisateur, et rétablissement de la prise en charge de la saisie de valeur pour leur affectation dans l'affectation de champ ([#9373](https://github.com/nocobase/nocobase/pull/9373)) par @jiannx
  - Correction des noms de fichiers de téléchargement incorrects pour les champs AttachmentURL lorsque les métadonnées du fichier sont manquantes. ([#9382](https://github.com/nocobase/nocobase/pull/9382)) par @mytharcher
  - Correction du déclencheur de workflow en masse du tableau v2 afin que la sélection de ligne reste cohérente après la redirection entre les onglets et que les lignes puissent être à nouveau sélectionnées après le retour ([#9388](https://github.com/nocobase/nocobase/pull/9388)) par @jiannx
  - Correction des formulaires de filtre qui ne pouvaient pas être réduits ([#9386](https://github.com/nocobase/nocobase/pull/9386)) par @zhangzhonghe
  - Correction du problème où les règles de liaison du sous-tableau v1 modifiaient incorrectement les styles des champs obligatoires ([#9364](https://github.com/nocobase/nocobase/pull/9364)) par @zhangzhonghe
  - correction du rendu incorrect des données dans le bloc de carte en grille après mise à jour et actualisation ([#9351](https://github.com/nocobase/nocobase/pull/9351)) par @katherinehhh
  - correction du champ d'option obligatoire dans le sous-tableau non validé correctement lors de la première sélection sur mobile ([#9352](https://github.com/nocobase/nocobase/pull/9352)) par @katherinehhh
  - Correction du problème où les variables de paramètre de requête URL deviennent invalides après avoir changé de page en cache ([#9263](https://github.com/nocobase/nocobase/pull/9263)) par @zhangzhonghe
  - correction de l'adaptation de DividerItem au thème dans v2 ([#9372](https://github.com/nocobase/nocobase/pull/9372)) par @katherinehhh
  - correction du masquage de l'option de création rapide pour le champ de sélection d'association dans le sous-tableau v2 ([#9358](https://github.com/nocobase/nocobase/pull/9358)) par @katherinehhh
  - Correction du problème où les règles de liaison n'étaient pas réexécutées après la modification des valeurs du formulaire. ([#9357](https://github.com/nocobase/nocobase/pull/9357)) par @gchust
  - Correction de l'erreur lors du filtrage des champs scalaires avec des filtres de sélection multiple personnalisés ([#9387](https://github.com/nocobase/nocobase/pull/9387)) par @zhangzhonghe
- **[serveur]** valider les noms de paquets de plugins avant les opérations sur le système de fichiers ([#9367](https://github.com/nocobase/nocobase/pull/9367)) par @chenos
- **[Gestionnaire de source de données]** empêcher la modification et la suppression de tous les enregistrements dans les autorisations de portée personnalisée pour les sources de données externes ([#9395](https://github.com/nocobase/nocobase/pull/9395)) par @katherinehhh
- **[Source de données : Principale]** Correction des tables de base de données importées utilisant un nom de table préfixé incorrect lorsqu'un préfixe de table est activé ([#9403](https://github.com/nocobase/nocobase/pull/9403)) par @2013xile
- **[Notification : Message in-app]** Correction d'un problème où la liste des messages in-app ne se rafraîchissait pas après la réception de notifications en temps réel ([#9409](https://github.com/nocobase/nocobase/pull/9409)) par @mytharcher
- **[Bloc : Kanban]** correction pour empêcher le retour à la ligne d'un seul mot dans le champ de texte long du bloc kanban v1 ([#9356](https://github.com/nocobase/nocobase/pull/9356)) par @katherinehhh
- **[Champ de collection : Formule]** correction du champ de formule dans le sous-tableau v2 non déclenché pour le calcul automatique ([#9354](https://github.com/nocobase/nocobase/pull/9354)) par @katherinehhh

## next

![next.png](https://static-docs.nocobase.com/8ed17a0f08cc585018f6de6c8b13947d.png)

### [v2.1.0-beta.32](https://www.nocobase.com/en/blog/v2.1.0-beta.32)

*Date de sortie : 2026-05-13*

### 🎉 Nouvelles fonctionnalités

- **[indéfini]** Ajout d'un nouvel employé IA, Lina l'ingénieur de localisation, pour aider aux tâches de traduction de localisation ([#9434](https://github.com/nocobase/nocobase/pull/9434)) par @2013xile
  Référence : [Gestion de la localisation](https://docs.nocobase.com/system-management/localization)<br>[Lina : Ingénieur de localisation](https://docs.nocobase.com/ai-employees/built-in/lina)<br>[Utiliser Lina et le HY-MT1.5-1.8B local pour traduire les entrées de localisation](https://docs.nocobase.com/ai-employees/scenarios/localization-hy-mt)
- **[Stockage de fichiers : S3(Pro)]** Prise en charge du téléchargement de fichiers via le stockage S3 Pro dans le gestionnaire de fichiers v2. par @Molunerfinn

### 🚀 Améliorations

- **[construction]** Ajout d'une couverture de régression pour empêcher `deleteServerFiles` de supprimer les artefacts de construction `client` et `client-v2` sur les chemins Windows et POSIX. ([#9318](https://github.com/nocobase/nocobase/pull/9318)) par @Molunerfinn
- **[client]** exclure les enregistrements déjà associés dans la boîte de dialogue de sélection d'association du bloc de tableau un-à-plusieurs ([#9448](https://github.com/nocobase/nocobase/pull/9448)) par @katherinehhh
- **[Gestionnaire de fichiers]** Les plugins de stockage tiers peuvent désormais enregistrer leur propre formulaire de type de stockage sur la page des paramètres du gestionnaire de fichiers v2. ([#9439](https://github.com/nocobase/nocobase/pull/9439)) par @Molunerfinn
- **[IA : Base de connaissances]** L'identifiant unique d'une base de connaissances est configurable lors de sa création par @cgyrock

### 🐛 Corrections de bugs

- **[client]**

  - Correction du problème où il était impossible de sélectionner des options pour le champ de sélection d'une association. ([#9088](https://github.com/nocobase/nocobase/pull/9088)) par @gchust
  - Correction du problème où les paramètres système apparaissent vides après soumission ([#9458](https://github.com/nocobase/nocobase/pull/9458)) par @zhangzhonghe
  - Correction des requêtes de tableau en double lorsque les formulaires de filtre ont des valeurs par défaut ([#9423](https://github.com/nocobase/nocobase/pull/9423)) par @zhangzhonghe
  - Correction d'un problème où la portée des données du bloc cible était mal définie lors de la désélection de données de ligne dans un flux d'événements de bloc de tableau. ([#9443](https://github.com/nocobase/nocobase/pull/9443)) par @gchust
  - Correction des règles de liaison V2 pour prendre en charge la définition d'options sélectionnables pour les champs ([#9399](https://github.com/nocobase/nocobase/pull/9399)) par @jiannx
  - correction d'une erreur lors du changement du champ de titre d'un champ d'association dans un bloc de tableau v2 ([#9451](https://github.com/nocobase/nocobase/pull/9451)) par @katherinehhh
- **[client-v2]**

  - Correction du problème où la page devient blanche derrière la boîte de dialogue d'activation du plugin ([#9455](https://github.com/nocobase/nocobase/pull/9455)) par @zhangzhonghe
  - Correction du plantage des pages d'administration v1 lorsqu'elles référencent des modules de plugin v2 dans les builds de production. ([#9460](https://github.com/nocobase/nocobase/pull/9460)) par @Molunerfinn
- **[cli-v1]** Correction des échecs de démarrage en développement dans les applications créées avec create-nocobase-app causés par la résolution du chemin client app-dev. ([#9465](https://github.com/nocobase/nocobase/pull/9465)) par @Molunerfinn
- **[serveur]** correction(gestionnaire-fichiers) : forcer le téléchargement des fichiers de contenu actif dans le stockage local/public ([#9437](https://github.com/nocobase/nocobase/pull/9437)) par @mytharcher
- **[Départements]** correction du conflit de traduction entre les boutons d'ajout d'utilisateur et d'ajout de département dans les paramètres Utilisateurs et Permissions ([#9456](https://github.com/nocobase/nocobase/pull/9456)) par @katherinehhh
- **[Bloc : Markdown]** Correction du problème de signalement d'erreur du bloc Markdown v2 ([#9440](https://github.com/nocobase/nocobase/pull/9440)) par @zhangzhonghe
- **[Workflow]** correction : restauration du texte d'aide dans les boîtes de dialogue de liaison de workflow FlowModel pour les événements d'opération et d'action personnalisée ([#9447](https://github.com/nocobase/nocobase/pull/9447)) par @mytharcher
- **[Employés IA]** Correction du test Ollama nécessitant la saisie d'une clé ([#9450](https://github.com/nocobase/nocobase/pull/9450)) par @cgyrock
- **[Workflow : Approbation]**

  - Correction de l'index d'enregistrement d'approbation en double lors de la délégation de tâches d'approbation. par @mytharcher
  - Correction de la disposition du formulaire d'approbation sur les appareils mobiles par @zhangzhonghe
- **[Gestionnaire de sauvegarde]** Correction d'un problème où les sauvegardes échouaient avec une erreur lorsque les fichiers étaient introuvables. par @gchust

### [v2.1.0-beta.30](https://www.nocobase.com/en/blog/v2.1.0-beta.30)

*Date de sortie : 2026-05-12*

### 🎉 Nouvelles fonctionnalités

- **[client]**
  - Ajout de la prise en charge des règles de liaison pour les éléments de menu de page ([#9304](https://github.com/nocobase/nocobase/pull/9304)) par @zhangzhonghe
  - ajout de la variable de langue de l'utilisateur courant dans v2 ([#9405](https://github.com/nocobase/nocobase/pull/9405)) par @katherinehhh

### 🚀 Améliorations

- **[client-v2]** Filtrer les menus v1 dans la disposition v2 et n'afficher que les menus v2 ([#9427](https://github.com/nocobase/nocobase/pull/9427)) par @zhangzhonghe
- **[indéfini]** prise en charge de l'environnement courant limité à la session dans nb cli ([#9415](https://github.com/nocobase/nocobase/pull/9415)) par @chenos
- **[Employés IA]** L'employé IA prend en charge le traitement parallèle de plusieurs conversations ([#9344](https://github.com/nocobase/nocobase/pull/9344)) par @cgyrock
- **[Départements]** optimiser le style de la liste des départements en ajoutant des icônes et en ajustant l'espacement ([#9435](https://github.com/nocobase/nocobase/pull/9435)) par @katherinehhh

### 🐛 Corrections de bugs

- **[construction]** Correction de l'échec de construction du plugin lorsque le code client v1 importe l'entrée `/client-v2` d'un autre plugin. ([#9436](https://github.com/nocobase/nocobase/pull/9436)) par @Molunerfinn
- **[client]**

  - masquer le composant de sous-tableau pour les champs d'association "vers-plusieurs" dans le sous-tableau v2 ([#9438](https://github.com/nocobase/nocobase/pull/9438)) par @katherinehhh
  - Correction d'un problème intermittent où les règles de liaison des boutons d'action ne s'appliquaient pas. ([#9430](https://github.com/nocobase/nocobase/pull/9430)) par @gchust
- **[Gestionnaire de collection graphique]** correction de l'erreur de filtre d'action de mise à jour lors de la mise en page automatique de l'interface graphique ([#9421](https://github.com/nocobase/nocobase/pull/9421)) par @katherinehhh
- **[Bloc : Arbre]** Amélioration des paramètres du bloc de filtre d'arbre et correction du comportement de l'association non prise en charge, du repli du champ de titre et de la réinitialisation de la recherche. ([#9426](https://github.com/nocobase/nocobase/pull/9426)) par @jiannx

### [v2.1.0-beta.29](https://www.nocobase.com/en/blog/v2.1.0-beta.29)

*Date de sortie : 2026-05-10*

### 🎉 Nouvelles fonctionnalités

- **[client]** ajout d'une option de limite de plage de dates pour les champs de date dans les formulaires v2 ([#9400](https://github.com/nocobase/nocobase/pull/9400)) par @katherinehhh
- **[moteur-de-flux]** Migration de `plugin-environment-variables` vers client-v2 avec une page de paramètres basée sur React et une variable d'exécution `$env` enregistrée globalement ; ajout d'une entrée client-v2 à `plugin-file-manager` avec une page de configuration de stockage basée sur React et un champ de téléchargement, une action de téléchargement et un aperçu basés sur FlowModel. ([#9413](https://github.com/nocobase/nocobase/pull/9413)) par @Molunerfinn

### 🐛 Corrections de bugs

- **[client]**

  - Correction d'un problème où le code JS ne pouvait plus être modifié après qu'un champ JS ait été défini en lecture seule. ([#9404](https://github.com/nocobase/nocobase/pull/9404)) par @gchust
  - Correction du problème où les onglets de page v2 ne se synchronisent pas immédiatement après l'enregistrement des paramètres ([#9396](https://github.com/nocobase/nocobase/pull/9396)) par @zhangzhonghe
  - Correction d'un problème où les affectations de champs de sous-tableau ne prenaient pas effet dans les règles de liaison de champ. ([#9412](https://github.com/nocobase/nocobase/pull/9412)) par @gchust
  - Correction d'un problème où la fenêtre contextuelle de valeur par défaut pour les champs d'association dans le formulaire de création s'affichait incorrectement. ([#9408](https://github.com/nocobase/nocobase/pull/9408)) par @gchust
- **[Champ de collection : Markdown(Vditor)]** correction de l'infobulle du champ markdown masquée dans la disposition de formulaire horizontale ([#9420](https://github.com/nocobase/nocobase/pull/9420)) par @katherinehhh
- **[Mobile (obsolète)]** Correction des popups de messages mobiles qui ne pouvaient pas être fermés ou défilés ([#9424](https://github.com/nocobase/nocobase/pull/9424)) par @zhangzhonghe
- **[Client WEB]** Correction du filtrage par type de route lors de l'utilisation d'étiquettes traduites ([#9425](https://github.com/nocobase/nocobase/pull/9425)) par @zhangzhonghe
- **[Workflow : Approbation]** Correction du problème où le champ JS apparaissait dans les paramètres du processus d'approbation par @zhangzhonghe

### [v2.1.0-beta.27](https://www.nocobase.com/en/blog/v2.1.0-beta.27)

*Date de sortie : 2026-05-09*

### 🎉 Nouvelles fonctionnalités

- **[serveur]** Les employés IA peuvent rechercher la documentation groupée avec des commandes Bash ([#9269](https://github.com/nocobase/nocobase/pull/9269)) par @2013xile
- **[Employés IA]** Le nœud d'employé IA du workflow prend en charge le chargement de fichiers à partir de champs de pièce jointe. ([#9402](https://github.com/nocobase/nocobase/pull/9402)) par @cgyrock
- **[Copie de texte]** prise en charge de l'option "Afficher le bouton de copie" pour le champ de texte en lecture seule ([#9394](https://github.com/nocobase/nocobase/pull/9394)) par @katherinehhh

### 🚀 Améliorations

- **[client]** Permettre d'attribuer une valeur de champ pour le champ de séquence ([#9397](https://github.com/nocobase/nocobase/pull/9397)) par @mytharcher
- **[Bloc : Kanban]** Amélioration de la cohérence de l'espacement des champs de détail v2 et meilleure adaptation de l'espacement des cartes et colonnes Kanban aux paramètres du thème. ([#9390](https://github.com/nocobase/nocobase/pull/9390)) par @jiannx
- **[Employés IA]** Amélioration des outils d'édition RunJS de Nathan et réduction du décalage lors des longues conversations de chat IA ([#9311](https://github.com/nocobase/nocobase/pull/9311)) par @2013xile
- **[Workflow : Approbation]** Correction du comportement de validation des champs obligatoires pour les formulaires d'approbation par @zhangzhonghe

### 🐛 Corrections de bugs

- **[moteur-de-flux]** Correction des messages de validation de champ de table de données non traduits dans les formulaires de flux v2 ([#9393](https://github.com/nocobase/nocobase/pull/9393)) par @jiannx
- **[client]**

  - Correction des formulaires de filtre qui ne pouvaient pas être réduits ([#9386](https://github.com/nocobase/nocobase/pull/9386)) par @zhangzhonghe
  - Correction de l'erreur lors du filtrage des champs scalaires avec des filtres de sélection multiple personnalisés ([#9387](https://github.com/nocobase/nocobase/pull/9387)) par @zhangzhonghe
  - Correction des noms de fichiers de téléchargement incorrects pour les champs AttachmentURL lorsque les métadonnées du fichier sont manquantes. ([#9382](https://github.com/nocobase/nocobase/pull/9382)) par @mytharcher
  - correction de l'adaptation de DividerItem au thème dans v2 ([#9372](https://github.com/nocobase/nocobase/pull/9372)) par @katherinehhh
  - Correction du problème où les règles de liaison du sous-tableau v1 modifiaient incorrectement les styles des champs obligatoires ([#9364](https://github.com/nocobase/nocobase/pull/9364)) par @zhangzhonghe
  - Correction des champs `Caché (valeur réservée)` dans les blocs de formulaire afin qu'ils restent visibles en mode Éditeur d'interface utilisateur, et rétablissement de la prise en charge de la saisie de valeur pour leur affectation dans l'affectation de champ ([#9373](https://github.com/nocobase/nocobase/pull/9373)) par @jiannx
  - Correction du déclencheur de workflow en masse du tableau v2 afin que la sélection de ligne reste cohérente après la redirection entre les onglets et que les lignes puissent être à nouveau sélectionnées après le retour ([#9388](https://github.com/nocobase/nocobase/pull/9388)) par @jiannx
- **[client-v2]**

  - Correction d'une erreur lors de la sélection de champs d'association dans les paramètres de champ. ([#9379](https://github.com/nocobase/nocobase/pull/9379)) par @gchust
  - Correction du problème où une page 404 s'affiche brièvement après le démarrage de l'application ([#9365](https://github.com/nocobase/nocobase/pull/9365)) par @zhangzhonghe
- **[serveur]** Correction des requêtes de découverte OAuth de sous-application routées comme des requêtes d'application principale ([#9383](https://github.com/nocobase/nocobase/pull/9383)) par @2013xile
- **[Source de données : Principale]** Correction des tables de base de données importées utilisant un nom de table préfixé incorrect lorsqu'un préfixe de table est activé ([#9403](https://github.com/nocobase/nocobase/pull/9403)) par @2013xile
- **[Notification : Message in-app]** Correction d'un problème où la liste des messages in-app ne se rafraîchissait pas après la réception de notifications en temps réel ([#9409](https://github.com/nocobase/nocobase/pull/9409)) par @mytharcher
- **[Gestionnaire de source de données]** empêcher la modification et la suppression de tous les enregistrements dans les autorisations de portée personnalisée pour les sources de données externes ([#9395](https://github.com/nocobase/nocobase/pull/9395)) par @katherinehhh
- **[IA : Serveur MCP]** Correction du packaging du serveur MCP pour inclure les dépendances d'exécution ([#9401](https://github.com/nocobase/nocobase/pull/9401)) par @2013xile
- **[Moteur de flux]** Correction d'un problème où les blocs générés par l'IA ne pouvaient pas être convertis de modèles de référence en modèles en double. ([#9392](https://github.com/nocobase/nocobase/pull/9392)) par @gchust
- **[Action : Importer des enregistrements Pro]** Correction du problème où la vérification des doublons sur le champ de date échouait toujours par @mytharcher
- **[Politique de mot de passe]** Correction d'un problème où les utilisateurs verrouillés de manière permanente pouvaient se connecter après un redémarrage du service par @2013xile
- **[Workflow : Approbation]** Correction du problème où le tiroir de sélection d'enregistrement était obscurci dans la configuration du workflow d'approbation par @zhangzhonghe
- **[Gestionnaire de sauvegarde]** correction de l'adaptation du schéma pg par @Andrew1989Y

### [v2.1.0-beta.26](https://www.nocobase.com/en/blog/v2.1.0-beta.26)

*Date de sortie : 2026-05-08*

### 🎉 Nouvelles fonctionnalités

- **[client]** ajout des actions d'association et de dissociation au bloc d'association ([#9366](https://github.com/nocobase/nocobase/pull/9366)) par @katherinehhh
- **[Visualisation de données]** Ajout de la prise en charge client-v2 pour les plugins de bloc ([#9297](https://github.com/nocobase/nocobase/pull/9297)) par @zhangzhonghe

### 🚀 Améliorations

- **[indéfini]** ignorer les versions déjà publiées dans pk ([#9374](https://github.com/nocobase/nocobase/pull/9374)) par @Molunerfinn

### 🐛 Corrections de bugs

- **[client-v2]**

  - Correction du problème où certaines pages v2 ne parviennent pas à charger les plugins distants ([#9369](https://github.com/nocobase/nocobase/pull/9369)) par @zhangzhonghe
  - Correction des problèmes d'espace réservé de glisser-déposer et de position de dépôt du bloc de page v2 ([#9361](https://github.com/nocobase/nocobase/pull/9361)) par @zhangzhonghe
- **[client]**

  - Correction du problème où les règles de liaison n'étaient pas réexécutées après la modification des valeurs du formulaire. ([#9357](https://github.com/nocobase/nocobase/pull/9357)) par @gchust
  - correction du champ d'option obligatoire dans le sous-tableau non validé correctement lors de la première sélection sur mobile ([#9352](https://github.com/nocobase/nocobase/pull/9352)) par @katherinehhh
  - correction du masquage de l'option de création rapide pour le champ de sélection d'association dans le sous-tableau v2 ([#9358](https://github.com/nocobase/nocobase/pull/9358)) par @katherinehhh
  - Correction du problème où les variables de paramètre de requête URL deviennent invalides après avoir changé de page en cache ([#9263](https://github.com/nocobase/nocobase/pull/9263)) par @zhangzhonghe
  - correction du rendu incorrect des données dans le bloc de carte en grille après mise à jour et actualisation ([#9351](https://github.com/nocobase/nocobase/pull/9351)) par @katherinehhh
- **[serveur]** valider les noms de paquets de plugins avant les opérations sur le système de fichiers ([#9367](https://github.com/nocobase/nocobase/pull/9367)) par @chenos
- **[indéfini]** Correction des liens morts dans la documentation traduite et activation de la détection des liens morts par défaut dans la construction de la documentation. ([#9371](https://github.com/nocobase/nocobase/pull/9371)) par @Molunerfinn
- **[Employés IA]**

  - Correction de l'erreur de lecture de la pièce jointe du champ d'associations par le nœud d'employé IA dans le workflow ([#9377](https://github.com/nocobase/nocobase/pull/9377)) par @cgyrock
  - Correction du nœud d'employé IA du workflow ne se terminant pas correctement après l'affectation de l'outil. ([#9381](https://github.com/nocobase/nocobase/pull/9381)) par @cgyrock
- **[Bloc : Kanban]**

  - Amélioration du style compact de la carte Kanban et optimisation de la sélection de modèle de popup de création rapide. ([#9370](https://github.com/nocobase/nocobase/pull/9370)) par @jiannx
  - correction pour empêcher le retour à la ligne d'un seul mot dans le champ de texte long du bloc kanban v1 ([#9356](https://github.com/nocobase/nocobase/pull/9356)) par @katherinehhh
  - Correction des blocs associés Kanban utilisant des paramètres de ressource d'exécution non résolus dans les contextes de popup ou de page secondaire. ([#9350](https://github.com/nocobase/nocobase/pull/9350)) par @jiannx
- **[Action : Requête personnalisée]** mise à niveau de koa vers v3 ([#9368](https://github.com/nocobase/nocobase/pull/9368)) par @chenos
- **[Champ de collection : Formule]** correction du champ de formule dans le sous-tableau v2 non déclenché pour le calcul automatique ([#9354](https://github.com/nocobase/nocobase/pull/9354)) par @katherinehhh
- **[Gestionnaire d'email]** Correction de l'affichage du titre des identités de messagerie par @jiannx

![develop.png](https://static-docs.nocobase.com/7fcdd9456a17286d8a439eee52bcb8d2.png)

### [v2.1.0-alpha.34](https://www.nocobase.com/en/blog/v2.1.0-alpha.34)

*Date de sortie : 2026-05-12*

### 🚀 Améliorations

- **[Employés IA]** L'employé IA prend en charge le traitement parallèle de plusieurs conversations ([#9344](https://github.com/nocobase/nocobase/pull/9344)) par @cgyrock

### [v2.1.0-alpha.33](https://www.nocobase.com/en/blog/v2.1.0-alpha.33)

*Date de sortie : 2026-05-11*

### 🎉 Nouvelles fonctionnalités

- **[client]**
  - ajout de la variable de langue de l'utilisateur courant dans v2 ([#9405](https://github.com/nocobase/nocobase/pull/9405)) par @katherinehhh
  - Ajout de la prise en charge des règles de liaison pour les éléments de menu de page ([#9304](https://github.com/nocobase/nocobase/pull/9304)) par @zhangzhonghe

### 🚀 Améliorations

- **[client-v2]** Filtrer les menus v1 dans la disposition v2 et n'afficher que les menus v2 ([#9427](https://github.com/nocobase/nocobase/pull/9427)) par @zhangzhonghe
- **[Départements]** optimiser le style de la liste des départements en ajoutant des icônes et en ajustant l'espacement ([#9435](https://github.com/nocobase/nocobase/pull/9435)) par @katherinehhh

### 🐛 Corrections de bugs

- **[construction]** Correction de l'échec de construction du plugin lorsque le code client v1 importe l'entrée `/client-v2` d'un autre plugin. ([#9436](https://github.com/nocobase/nocobase/pull/9436)) par @Molunerfinn
- **[client]**

  - Correction d'un problème intermittent où les règles de liaison des boutons d'action ne s'appliquaient pas. ([#9430](https://github.com/nocobase/nocobase/pull/9430)) par @gchust
  - masquer le composant de sous-tableau pour les champs d'association "vers-plusieurs" dans le sous-tableau v2 ([#9438](https://github.com/nocobase/nocobase/pull/9438)) par @katherinehhh
- **[Gestionnaire de collection graphique]** correction de l'erreur de filtre d'action de mise à jour lors de la mise en page automatique de l'interface graphique ([#9421](https://github.com/nocobase/nocobase/pull/9421)) par @katherinehhh
- **[Bloc : Arbre]** Amélioration des paramètres du bloc de filtre d'arbre et correction du comportement de l'association non prise en charge, du repli du champ de titre et de la réinitialisation de la recherche. ([#9426](https://github.com/nocobase/nocobase/pull/9426)) par @jiannx

### [v2.1.0-alpha.32](https://www.nocobase.com/en/blog/v2.1.0-alpha.32)

*Date de sortie : 2026-05-10*

### 🎉 Nouvelles fonctionnalités

- **[client]** ajout d'une option de limite de plage de dates pour les champs de date dans les formulaires v2 ([#9400](https://github.com/nocobase/nocobase/pull/9400)) par @katherinehhh
- **[moteur-de-flux]** Migration de `plugin-environment-variables` vers client-v2 avec une page de paramètres basée sur React et une variable d'exécution `$env` enregistrée globalement ; ajout d'une entrée client-v2 à `plugin-file-manager` avec une page de configuration de stockage basée sur React et un champ de téléchargement, une action de téléchargement et un aperçu basés sur FlowModel. ([#9413](https://github.com/nocobase/nocobase/pull/9413)) par @Molunerfinn

### 🚀 Améliorations

- **[indéfini]** prise en charge de l'environnement courant limité à la session dans nb cli ([#9415](https://github.com/nocobase/nocobase/pull/9415)) par @chenos

### 🐛 Corrections de bugs

- **[client]**

  - Correction d'un problème où la fenêtre contextuelle de valeur par défaut pour les champs d'association dans le formulaire de création s'affichait incorrectement. ([#9408](https://github.com/nocobase/nocobase/pull/9408)) par @gchust
  - Correction d'un problème où le code JS ne pouvait plus être modifié après qu'un champ JS ait été défini en lecture seule. ([#9404](https://github.com/nocobase/nocobase/pull/9404)) par @gchust
  - Correction du problème où les onglets de page v2 ne se synchronisent pas immédiatement après l'enregistrement des paramètres ([#9396](https://github.com/nocobase/nocobase/pull/9396)) par @zhangzhonghe
  - Correction d'un problème où les affectations de champs de sous-tableau ne prenaient pas effet dans les règles de liaison de champ. ([#9412](https://github.com/nocobase/nocobase/pull/9412)) par @gchust
- **[Champ de collection : Markdown(Vditor)]** correction de l'infobulle du champ markdown masquée dans la disposition de formulaire horizontale ([#9420](https://github.com/nocobase/nocobase/pull/9420)) par @katherinehhh
- **[Client WEB]** Correction du filtrage par type de route lors de l'utilisation d'étiquettes traduites ([#9425](https://github.com/nocobase/nocobase/pull/9425)) par @zhangzhonghe
- **[Mobile (obsolète)]** Correction des popups de messages mobiles qui ne pouvaient pas être fermés ou défilés ([#9424](https://github.com/nocobase/nocobase/pull/9424)) par @zhangzhonghe
- **[Workflow : Approbation]** Correction du problème où le champ JS apparaissait dans les paramètres du processus d'approbation par @zhangzhonghe

### [v2.1.0-alpha.31](https://www.nocobase.com/en/blog/v2.1.0-alpha.30)

*Date de sortie : 2026-05-09*

### 🎉 Nouvelles fonctionnalités

- **[client]** ajout des actions d'association et de dissociation au bloc d'association ([#9366](https://github.com/nocobase/nocobase/pull/9366)) par @katherinehhh
- **[Copie de texte]** prise en charge de l'option "Afficher le bouton de copie" pour le champ de texte en lecture seule ([#9394](https://github.com/nocobase/nocobase/pull/9394)) par @katherinehhh
- **[Employés IA]** Le nœud d'employé IA du workflow prend en charge le chargement de fichiers à partir de champs de pièce jointe. ([#9402](https://github.com/nocobase/nocobase/pull/9402)) par @cgyrock
- **[Visualisation de données]** Ajout de la prise en charge client-v2 pour les plugins de bloc ([#9297](https://github.com/nocobase/nocobase/pull/9297)) par @zhangzhonghe

### 🚀 Améliorations

- **[client]** Permettre d'attribuer une valeur de champ pour le champ de séquence ([#9397](https://github.com/nocobase/nocobase/pull/9397)) par @mytharcher
- **[indéfini]** ignorer les versions déjà publiées dans pk ([#9374](https://github.com/nocobase/nocobase/pull/9374)) par @Molunerfinn
- **[Bloc : Kanban]** Amélioration de la cohérence de l'espacement des champs de détail v2 et meilleure adaptation de l'espacement des cartes et colonnes Kanban aux paramètres du thème. ([#9390](https://github.com/nocobase/nocobase/pull/9390)) par @jiannx
- **[Workflow : Approbation]** Correction du comportement de validation des champs obligatoires pour les formulaires d'approbation par @zhangzhonghe

### 🐛 Corrections de bugs

- **[client]**

  - Correction des formulaires de filtre qui ne pouvaient pas être réduits ([#9386](https://github.com/nocobase/nocobase/pull/9386)) par @zhangzhonghe
  - Correction du déclencheur de workflow en masse du tableau v2 afin que la sélection de ligne reste cohérente après la redirection entre les onglets et que les lignes puissent être à nouveau sélectionnées après le retour ([#9388](https://github.com/nocobase/nocobase/pull/9388)) par @jiannx
  - Correction des champs `Caché (valeur réservée)` dans les blocs de formulaire afin qu'ils restent visibles en mode Éditeur d'interface utilisateur, et rétablissement de la prise en charge de la saisie de valeur pour leur affectation dans l'affectation de champ ([#9373](https://github.com/nocobase/nocobase/pull/9373)) par @jiannx
  - correction de l'adaptation de DividerItem au thème dans v2 ([#9372](https://github.com/nocobase/nocobase/pull/9372)) par @katherinehhh
  - Correction des noms de fichiers de téléchargement incorrects pour les champs AttachmentURL lorsque les métadonnées du fichier sont manquantes. ([#9382](https://github.com/nocobase/nocobase/pull/9382)) par @mytharcher
  - Correction de l'erreur lors du filtrage des champs scalaires avec des filtres de sélection multiple personnalisés ([#9387](https://github.com/nocobase/nocobase/pull/9387)) par @zhangzhonghe
  - Correction du problème où les règles de liaison n'étaient pas réexécutées après la modification des valeurs du formulaire. ([#9357](https://github.com/nocobase/nocobase/pull/9357)) par @gchust
  - Correction du problème où les règles de liaison du sous-tableau v1 modifiaient incorrectement les styles des champs obligatoires ([#9364](https://github.com/nocobase/nocobase/pull/9364)) par @zhangzhonghe
  - correction du rendu incorrect des données dans le bloc de carte en grille après mise à jour et actualisation ([#9351](https://github.com/nocobase/nocobase/pull/9351)) par @katherinehhh
  - correction du champ d'option obligatoire dans le sous-tableau non validé correctement lors de la première sélection sur mobile ([#9352](https://github.com/nocobase/nocobase/pull/9352)) par @katherinehhh
  - correction du masquage de l'option de création rapide pour le champ de sélection d'association dans le sous-tableau v2 ([#9358](https://github.com/nocobase/nocobase/pull/9358)) par @katherinehhh
  - Correction du problème où les variables de paramètre de requête URL deviennent invalides après avoir changé de page en cache ([#9263](https://github.com/nocobase/nocobase/pull/9263)) par @zhangzhonghe
- **[moteur-de-flux]** Correction des messages de validation de champ de table de données non traduits dans les formulaires de flux v2 ([#9393](https://github.com/nocobase/nocobase/pull/9393)) par @jiannx
- **[serveur]**

  - Correction des requêtes de découverte OAuth de sous-application routées comme des requêtes d'application principale ([#9383](https://github.com/nocobase/nocobase/pull/9383)) par @2013xile
  - valider les noms de paquets de plugins avant les opérations sur le système de fichiers ([#9367](https://github.com/nocobase/nocobase/pull/9367)) par @chenos
- **[client-v2]**

  - Correction d'une erreur lors de la sélection de champs d'association dans les paramètres de champ. ([#9379](https://github.com/nocobase/nocobase/pull/9379)) par @gchust
  - Correction du problème où une page 404 s'affiche brièvement après le démarrage de l'application ([#9365](https://github.com/nocobase/nocobase/pull/9365)) par @zhangzhonghe
  - Correction des problèmes d'espace réservé de glisser-déposer et de position de dépôt du bloc de page v2 ([#9361](https://github.com/nocobase/nocobase/pull/9361)) par @zhangzhonghe
  - Correction du problème où certaines pages v2 ne parviennent pas à charger les plugins distants ([#9369](https://github.com/nocobase/nocobase/pull/9369)) par @zhangzhonghe
- **[indéfini]** Correction des liens morts dans la documentation traduite et activation de la détection des liens morts par défaut dans la construction de la documentation. ([#9371](https://github.com/nocobase/nocobase/pull/9371)) par @Molunerfinn
- **[Notification : Message in-app]** Correction d'un problème où la liste des messages in-app ne se rafraîchissait pas après la réception de notifications en temps réel ([#9409](https://github.com/nocobase/nocobase/pull/9409)) par @mytharcher
- **[Gestionnaire de source de données]** empêcher la modification et la suppression de tous les enregistrements dans les autorisations de portée personnalisée pour les sources de données externes ([#9395](https://github.com/nocobase/nocobase/pull/9395)) par @katherinehhh
- **[IA : Serveur MCP]** Correction du packaging du serveur MCP pour inclure les dépendances d'exécution ([#9401](https://github.com/nocobase/nocobase/pull/9401)) par @2013xile
- **[Source de données : Principale]** Correction des tables de base de données importées utilisant un nom de table préfixé incorrect lorsqu'un préfixe de table est activé ([#9403](https://github.com/nocobase/nocobase/pull/9403)) par @2013xile
- **[Moteur de flux]** Correction d'un problème où les blocs générés par l'IA ne pouvaient pas être convertis de modèles de référence en modèles en double. ([#9392](https://github.com/nocobase/nocobase/pull/9392)) par @gchust
- **[Employés IA]**

  - Correction de l'erreur de lecture de la pièce jointe du champ d'associations par le nœud d'employé IA dans le workflow ([#9377](https://github.com/nocobase/nocobase/pull/9377)) par @cgyrock
  - Correction du nœud d'employé IA du workflow ne se terminant pas correctement après l'affectation de l'outil. ([#9381](https://github.com/nocobase/nocobase/pull/9381)) par @cgyrock
- **[Action : Requête personnalisée]** mise à niveau de koa vers v3 ([#9368](https://github.com/nocobase/nocobase/pull/9368)) par @chenos
- **[Bloc : Kanban]**

  - Amélioration du style compact de la carte Kanban et optimisation de la sélection de modèle de popup de création rapide. ([#9370](https://github.com/nocobase/nocobase/pull/9370)) par @jiannx
  - correction pour empêcher le retour à la ligne d'un seul mot dans le champ de texte long du bloc kanban v1 ([#9356](https://github.com/nocobase/nocobase/pull/9356)) par @katherinehhh
- **[Champ de collection : Formule]** correction du champ de formule dans le sous-tableau v2 non déclenché pour le calcul automatique ([#9354](https://github.com/nocobase/nocobase/pull/9354)) par @katherinehhh
- **[Action : Importer des enregistrements Pro]** Correction du problème où la vérification des doublons sur le champ de date échouait toujours par @mytharcher
- **[Politique de mot de passe]** Correction d'un problème où les utilisateurs verrouillés de manière permanente pouvaient se connecter après un redémarrage du service par @2013xile
- **[Workflow : Approbation]** Correction du problème où le tiroir de sélection d'enregistrement était obscurci dans la configuration du workflow d'approbation par @zhangzhonghe
- **[Gestionnaire d'email]** Correction de l'affichage du titre des identités de messagerie par @jiannx
- **[Gestionnaire de sauvegarde]** correction de l'adaptation du schéma pg par @Andrew1989Y
