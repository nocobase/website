---
title: "Mise à jour majeure ! NocoBase V1.0 officiellement publiée"
description: "Découvrez les mises à jour majeures de NocoBase V1.0, y compris les nouvelles fonctionnalités, plugins et améliorations significatives des performances. Apprenez comment cette version marquante améliore la stabilité, la sécurité et les fonctionnalités pour les développeurs. Obtenez des informations détaillées sur le nouvel éditeur de thème, les améliorations de visualisation des données et le journal des modifications complet. Comprenez le processus de mise à niveau, surtout si vous utilisez des plugins SSO, et explorez l'impact de ces changements sur vos projets."
---

## Jalon V1.0

Après 3 ans de développement, NocoBase a atteint sa première mise à jour majeure, passant de la version 0.x à la version 1.0. Cela marque une étape importante.

* Pendant la phase 0.x : L'API centrale et les fonctionnalités ont subi des changements rapides, chaque nouvelle version pouvant introduire des modifications incompatibles.
* Pendant la phase 1.x : L'API centrale s'est stabilisée, et NocoBase se concentrera sur l'ajout de nouveaux plugins, l'optimisation de la sécurité et l'amélioration des performances tout en maintenant la stabilité.

## Nouvelles fonctionnalités

* L'éditeur de thème peut configurer le remplissage des pages et des fenêtres modales, l'espacement des blocs et le rayon des coins des blocs.
* Lors de l'ajout de blocs, les collections prennent en charge le filtrage.
* Les enregistrements de relations prennent en charge le tri.
* Interactivité améliorée de la visualisation des données.
* Prise en charge de l'ajout de blocs de graphiques sur les appareils mobiles.
* Les blocs de filtres de graphiques prennent en charge la définition de la portée des données de champ.
* Ajout de plus de variables, [voir les détails](https://docs.nocobase.com/handbook/ui/variables).
* Des blocs de n'importe quelle collection peuvent être ajoutés dans les fenêtres contextuelles.
* Workflows : « Événement post-action » peut être déclenché par des boutons dans les blocs d'association.
* Actualisation automatique des données dans le conteneur parent lorsque les données changent dans une fenêtre contextuelle.
* Améliorations significatives des performances dans les blocs de tableau.
* Augmentation substantielle de la couverture des tests.

## Nouveaux plugins

* Champ : Markdown (Vditor)
  * Utilisé pour stocker le Markdown et le rendre à l'aide de l'éditeur Vditor, prend en charge la syntaxe Markdown courante et prend en charge le téléchargement d'images, d'enregistrements, etc. Il permet également un rendu instantané, où ce que vous voyez est ce que vous obtenez.
* Commentaires
  * Fournit un modèle de collection de commentaires et un bloc pour ajouter des fonctionnalités de commentaires pour n'importe quelle collection.

## Journal des modifications complet

* feat(plugin-workflow): rafraîchir la liste après la synchronisation #4177
* feat(plugin-workflow): afficher la clé du workflow comme infobulle sur le titre #4178
* test(plugin-workflow): ajouter des cas de test #4199
* chore: en-tête de contrôle du cache API #4203
* feat: charger la dépendance vditor depuis le local #4190
* test: test du séparateur de nombres en entrée #4204
* fix: le champ numérique doit prendre en charge le paramètre de séparateur #4197
* fix(plugin-workflow): affiner l'expérience #4195
* chore: optimiser les avertissements d'importation et d'exportation #4196
* refactor: gestionnaire de collection de sources de données externes #4193
* fix: bug d'environnement #4191
* fix: opérateur vide avec champ d'association #4189
* chore: ajouter e2e #4184
* fix: version vditor #4183
* refactor: amélioration des paramètres régionaux du modèle de données de formulaire #4188
* test: ajouter des tests automatisés #4098
* chore: instance de journalisation de la source de données #4181
* chore: obtenir l'instance de la base de données dans le référentiel de relations #4179
* chore: ajouter e2e pour les variables #4152
* chore: définir le message de débogage de la collection #4176
* chore: unsupportedFields dans la collection de vues #4155
* feat: ajouter plugin-field-markdown-vditor #4065
* fix: erreur d'action acl du formulaire d'édition en masse #4166
* fix: créer automatiquement une clé étrangère uuid dans le champ de relation #4160
* fix(plugin-fm): corriger l'indice de limite de taille confuse #4153
* fix(users): améliorer users:updateProfile #4162
* fix(client): obtenir l'url de l'api #4161
* feat: supprimer plugin-ui-routes-storage #4140
* fix: verrouiller la version de cytoscape #4158
* refactor: le modèle de collection prend en charge presetFieldsDisabled #4159
* fix: schéma de grille #4157
* test unitaire client #4150
* fix: mettre à jour l'association plusieurs-à-plusieurs dont la clé cible n'est pas la clé primaire #4146
* refactor: amélioration des paramètres régionaux du modèle de données de formulaire #4148
* fix(database): nom de colonne dans le champ tableau #4110
* test: test e2e d'actualisation sur action #4147
* fix(custom-request): prendre en charge la configuration du type de contenu #4144
* chore: déprécier la variable d'enregistrement actuelle du formulaire #4063
* feat(Theme): ajouter quelques jetons #4137
* fix(client): corriger quelques avertissements #4143
* style: amélioration du style de tableActionColumn #4138
* fix: amélioration du style de actionBar #4123
* chore: message d'avertissement en cas de conflit de suppression #4141
* fix(plugin-workflow-manual): permettre de passer le nœud lorsqu'il n'y a pas de destinataire #4139
* chore: api du gestionnaire de source de données #4124
* fix(plugin-workflow-manual): corriger le bug d'analyse des destinataires #4125
* fix: charger le champ d'association dans la collection #4122
* perf: supprimer toute l'animation Skeleton #4113
* test: ajouter e2e #4121
* chore(data-vi): ajuster l'api #4116
* fix: scheduleEventTrigger #4114
* feat(plugin-workflow): ajouter un vérificateur pour l'envoi par intervalles #4119
* feat: ajouter filterOtherRecordsCollection pour DataBlockInitializer #4117
* refactor: optimiser CollectionField #4111
* fix: améliorer la migration des champs de tri #4112
* fix: composant de champ #4102
* fix: la sélection d'association prend en charge le mode d'ajout #4108
* fix: option cible createdBy & updatedBy #4109
* fix(linkage-rule): la règle de liaison prend en charge la condition vide #4103
* fix: ajouter SanitizedCollectionProvider #4100
* fix: erreur de cible de collection arborescente #4105
* fix: ajouter ClearCollectionFieldContext #4101
* feat: améliorer le bloc de formulaire #4099
* chore: migrer les options triables vers le champ de tri #4011
* feat: prendre en charge l'option de tri dans les ajouts #4056
* feat(data-vi): permet au diagramme circulaire d'accepter les nombres négatifs, corrige T-4075 #4094
* fix(data-vi): le nombre devient une chaîne après la transformation de précision #4092
* fix: encoder les paramètres d'url #4055
* test(plugin-workflow): ajouter un cas de test pour le déclenchement en double du workflow planifié #3817
* perf(LinkageRules): résoudre les problèmes de latence #4090
* fix(subTable): ne doit pas afficher l'option Autoriser l'ajout de nouvelles données #4086
* fix: champs manquants #4083
* fix: erreur de pagination de la sélection de tableau #4078
* fix: réinitialiser la page lors du réglage de la portée des données du bloc #4081
* fix: liste des rôles de requête personnalisée #4074
* fix: analyser la semaine iso #4068
* fix(sourceId): éviter les erreurs #4077
* fix(sql-collection): impossible de sélectionner l'interface lors du réglage des champs #4079
* fix: charger avec le champ source #4075
* fix: la suppression des règles de liaison d'opération ne prend pas effet en temps réel #4058
* fix(core): corriger le bug d'arrondi dans l'évaluateur de formule #4070
* test: ajouter e2e pour le mode de chargement des données #4069
* fix(filterForm): éviter les noms en double #4071
* chore: optimiser le titre du bloc #4040
* fix: synchroniser la valeur par défaut dans la vue #4067
* fix(defaultValue): corriger le problème de disparition des valeurs par défaut après l'actualisation de la page #4066
* refactor: bloc de diagramme de Gantt #4059
* fix: le grand champ de sous-tableau doit prendre en charge la valeur par défaut variable #4062
* chore(Theme): définir la taille de police par défaut du thème Compact à 16 #4064
* test: ajouter e2e pour les actions #4053
* fix(variable): variables manquantes et traductions invalides #4054
* test: ajouter des tests unitaires backend #4000
* fix: améliorer l'élément de carte #4036
* chore(acl): désactiver les actions d'enregistrement des champs d'association #4014
* fix(variable): corriger les erreurs de signalement de la variable d'enregistrement parent dans la portée des données #4039
* test(e2e): ajouter des assertions sur les valeurs de champ #4034
* feat(Variable): ajouter une nouvelle variable #4025
* feat: exécuter e2e avec des plugins pro #3890
* fix: bug #4038
* fix: opérateur de tableau avec champ camelCase #4032
* fix: scopeKeyOptions doit être obtenu en temps réel #4029
* fix(addText): doit utiliser FormItemSchemaToolbar au lieu de BlockSchema… #3963
* feat: enregistrer le hook une fois dans le gestionnaire de source de données #4024
* fix: extraits #4030
* fix: bug unique de vitest #4031
* feat(data-vi): expériences utilisateur améliorées (voir pr) #4013
* test: ajouter un test unitaire frontend #3991
* feat: prendre en charge l'option Autres dans la fenêtre contextuelle #4015
* fix(collection-manager): pas d'actualisation après avoir remplacé le champ #4022
* chore: ajouter des avertissements d'exportation et d'importation #4027
* refactor: la source de données tierce prend en charge l'édition du tri groupé des champs de tri #4023
* fix(plugin-acl): extrait pm.acl.roles #4026
* test: test e2e du bloc de nom d'association #4021
* fix: obtenir l'url de l'api #4020
* fix(Sub-details): le bouton d'initialisation ne s'affiche pas lorsque la valeur du champ est vide #4019
* fix: initializer use useAassociationName #4018
* fix(auth): bug de connexion cas lors de l'utilisation d'un déploiement de sous-répertoire #4017
* fix(TreeTable): erreur d'ajout d'enfant #4008
* fix: la suppression du champ actif ne doit pas effacer la valeur #4012
* fix(plugin-acl): extrait des rôles de source de données #4016
* fix: après avoir tout sélectionné, la mise à jour en masse invite pour les données non sélectionnées #4010
* refactor: le tableau arborescent n'est pas activé par défaut #4001
* feat(plugin-workflow-action-trigger): prendre en charge le déclenchement des actions d'association #4007
* Update application.ts #4006
* fix: paramètre de champ d'étiquette #4009
* fix(users): supprimer la validation du téléphone en raison d'une vérification incorrecte des numéros de téléphone étrangers #4005
* fix: échec de la vérification des autorisations d'action du bloc d'association #3994
* refactor: les champs de tri de tableau ne peuvent pas sélectionner les champs de tri avec scopekey #3984
* fix(Form): parentRecord invalide #3998
* fix(plugin-workflow): ajuster les paramètres régionaux #3993
* fix: le sous-tableau prend en charge le paramètre allowSelectExistingRecord #4004
* fix(auth): page d'inscription introuvable lors de la saisie directe de l'url #4002
* chore(database): définir la valeur null lorsque le champ est unique et que la valeur est une chaîne vide #3997
* chore(gateway): signaler l'erreur avec le message de cause #3999
* chore(error-handler): afficher le message à l'origine de l'erreur #3996
* fix: restaurer avec le nom de table en camelCase #3995
* refactor(plugin-workflow): ajuster les commentaires #3990
* fix: réduire et développer le diagramme de Gantt #3982
* fix(BulkForm): doit être obligatoire lors du passage à « Changé en » #3965
* fix: déplacer l'action #3985
* refactor: le champ de tri ne doit pas avoir de defaultValue #3986
* chore: mettre à jour les noms de classe des plugins #3981
* feat(plugin-workflow-sync): ajouter la synchronisation lorsque multi-app-share-collection est activé #3969
* fix(localization): paramètres régionaux incorrects lors de la première entrée #3968
* chore: ajuster et ajouter des commentaires API #3951
* refactor: configuration des options de sélection #3964
* fix(GridCard): définir le nombre de colonnes affichées dans une ligne #3960
* refactor: seuls les champs de formule numérique prennent en charge le format #3962
* chore(plugin-workflow): ajouter des commentaires #3959
* chore: supprimer les plugins de formule hérités #3939
* fix(LinkageRules): doit être effectif immédiatement #3958
* fix(Picker): doit afficher l'option Autoriser l'ajout de nouvelles données #3957
* fix(connect-data-blocks): doit s'afficher immédiatement dans le menu déroulant #3953
* fix: modification du titre du menu de gauche #3956
* fix: bug du fournisseur de liste de modèles #3950
* refactor: remplissage automatique nanoid & uuid #3955
* feat: getParentJsonSchema dans le référentiel de schémas d'interface utilisateur #3690
* fix: enregistrer la valeur du champ uuid et nano id avec la validation sequelize #3952
* fix: throughCollection prend en charge la recherche floue #3949
* fix: getSourceKeyByAssocation #3947
* fix(RichText): unifier le style #3946
* fix(connectDataBlocks): doit ajouter FilterBlockProvider à Grid #3944
* chore: ajouter appVersion à Schema #3936
* fix: collectionFieldInterfaceSelect #3945
* fix: corriger sourceId des modèles #3941
* fix(collection manager): collection manager primarykey & nanoid & uuid prennent en charge le paramètre d'index #3943
* fix(plugin-formula-field): corriger le contexte du composant #3937
* fix: nanoid availableTypes #3942
* fix: générer automatiquement les valeurs par défaut #3940
* fix: erreur de calcul du champ de formule #3938
* fix: le champ de formule prend en charge le format #3928
* refactor: unifier la dénomination de l'initialisateur d'onglet #3932
* fix: ajouter zIndex au style de superposition Lightbox #3934
* fix(Table): corriger le problème d'affichage du contenu du champ d'association #3930
* fix(evaluators): corriger l'aplatissement du tableau #3931
* refactor: la collection de vues de source de données principale prend en charge filterTargetKey #3818
* fix: erreur de calcul du champ de formule #3929
* fix: charger la collection de vues appartient à l'association avec les options source #3912
* fix: le formulaire d'édition inchangé ne doit pas afficher d'avertissement non enregistré lors de la fermeture de la fenêtre modale #3920
* fix(Collapse): corriger l'erreur pour chinaRegions #3925
* fix: format d'affichage des nombres #3924
* fix(defaultValue): doit être effectif immédiatement lors du réglage de la valeur par défaut #3923
* feat: l'action prend en charge la configuration refreshDataBlockRequest #3882
* refactor: formBlockProvider & detailBlockProvider #3898
* feat(data-vi): permet d'ajouter des graphiques pour le client mobile #3922
* chore: ajouter des commentaires API #3919
* fix: corriger la pagination #3921
* test(plugin-error-handler): middleware #3909
* fix: mettre à jour le plugin #3895
* fix: pagination du bloc de diagramme de Gantt #3918
* fix: id source null #3917
* fix(Table): corriger la pagination #3916
* fix: obtenir le bon sourceId #3897
* fix(DataScope): corriger le problème d'absence d'effet immédiat après l'enregistrement #3910
* fix: initialValue des options de champ de sélection #3911
* fix: clic sur le lien externe #3908
* fix(inputNumber): perte de précision dans inputNumber #3902
* feat(plugin-workflow-action-trigger): ajouter des événements d'action globaux #3883
* docs: ajouter un commentaire API #3868
* fix: bug de configuration vitest #3907
* fix: bug de tableau fixe #3901
* fix: erreur de données de liste non définies #3905
* fix: bug de rendu paresseux #3886
* fix: paramètres de tri manquants #3906
* refactor: changer useProps en x-use-component-props #3853
* fix(withDynamicSchemaProps): changer la fusion profonde en fusion superficielle #3899
* fix: le bloc d'historique ajoute un bouton d'impression, cliquer sur le bouton d'impression provoque une erreur #3900
* fix: bug tar #3891
* chore: retourner bigInt comme type chaîne #3887
* feat(data-vi): portée des données pour les champs de filtre de graphique #3894
* feat: ajuster le menu d'ajout de nouveau #3884
* fix(plugin-custom-request): corriger la boîte de dialogue du bouton d'édition #3893
* fix: fieldNames manquants lors du réglage de la portée des données #3892
* fix: erreur de vérification des dépendances lors du développement de l'ajout d'un plugin de production #3848
* fix: les onglets de workflow n'existent pas #3889
* fix: le champ d'association prend en charge la liaison de portée de données #3888
* fix: templateBlockProvider prend en charge l'ajout de champ d'association #3866
* chore: api de la source de données principale #3880
* feat: exécuter vitest avec couverture #3802
* fix: éviter les clés de menu en double #3885
* fix(data-vi): le graphique à deux axes s'affiche anormalement #3881
* fix: rejeter la mise à jour lorsque le filtre est un objet vide #3777
* chore: mettre à jour le champ avec l'attribut de clé primaire #3852
* refactor: uuid & nanoid prennent en charge la configuration de la valeur par défaut #3830
* feat: performances du tableau #3791
* fix: setFormValueChanged non défini #3879
* fix(client): corriger diabled dans le composant dynamique de filtre #3874
* fix(plugin-workflow-parallel): corriger les paramètres régionaux #3876
* fix(formula-field): le champ de formule définit le changement de valeur de formulaire #3873
* fix: affichage du bloc formBlockProvider #3877
* refactor(plugin-workflow): changer en #3871
* fix: affichage anormal de la fenêtre modale de la carte Kanban #3863
* fix: filterTargetKey ne prend en charge que la collection de vues #3872

## Modifications des plugins

Les plugins suivants ne sont plus fournis en version open source (les utilisateurs qui les ont utilisés dans des environnements de production, veuillez nous contacter pour les mises à niveau) :

* @nocobase/plugin-auth-cas : Authentifie l'identité via le protocole CAS.
* @nocobase/plugin-auth-odic : Authentifie l'identité via le protocole OIDC (OpenID Connect).
* @nocobase/plugin-auth-saml : Authentifie l'identité via SAML 2.0.

Les plugins suivants ont été dépréciés et seront supprimés dans les versions à venir :

* @nocobase/plugin-audit-logs : Déprécié, temporairement non supprimé, ne sera pas installé dans la nouvelle version.
* @nocobase/plugin-snapshot-field : Déprécié, temporairement non supprimé, ne sera pas installé dans la nouvelle version.
* @nocobase/plugin-charts : Utilisez @nocobase/plugin-data-visualization à la place.
* @nocobase/plugin-excel-formula-field : Utilisez @nocobase/plugin-field-formula à la place.
* @nocobase/plugin-math-formula-field : Utilisez @nocobase/plugin-field-formula à la place.
* @nocobase/plugin-ui-routes-storage : Déprécié, les routes frontend peuvent être étendues directement dans le frontend.

Pour la liste complète des plugins, veuillez vous référer à : [https://www.nocobase.com/plugins.html](https://www.nocobase.com/plugins.html)

## Commentaires de code

Pour offrir une meilleure expérience de développement, nous avons ajouté des commentaires à certaines API spéciales :

* `@internal` : Généralement utilisé pour identifier les détails d'implémentation interne ou les méthodes qui ne sont pas conçues pour un usage public mais qui existent pour une utilisation interne dans le code.
* `@experimental` : Utilisé pour identifier les fonctionnalités ou API expérimentales. Ces API sont encore en phase de développement et de test, peuvent subir des modifications importantes, voire être supprimées ou remplacées dans les versions futures.
* `@deprecated` : Utilisé pour identifier les fonctionnalités, méthodes ou API dépréciées dans le code. Bien qu'elles soient toujours disponibles, elles peuvent être supprimées dans les versions futures, ou il peut exister de meilleures solutions alternatives.

## Contrat de licence

NocoBase est sous double licence AGPL-3.0 et licences commerciales. Pour plus de détails, veuillez vous référer au [Contrat de licence NocoBase](https://cn.nocobase.com/agreement-cn.html).

## Guide de mise à niveau

* Sauvegardez toujours votre base de données avant la mise à niveau ! Sauvegardez toujours votre base de données ! Sauvegardez toujours votre base de données !
* Vous pouvez également sauvegarder l'intégralité du code du projet.

Étant donné que les trois plugins SSO Auth : CAS, Auth : OIDC, Auth : SAML sont supprimés du code open source, la mise à niveau sera divisée en deux cas.

### Si vous n'utilisez pas de plugins SSO

Veuillez suivre la [méthode conventionnelle](https://docs.nocobase.com/welcome/getting-started/upgrading) pour la mise à niveau.

### Si vous utilisez des plugins SSO

Veuillez suivre ces étapes pour la mise à niveau :

#### 1. Mettre à niveau l'application

Reportez-vous à l'[Aperçu de la mise à niveau de NocoBase](https://docs.nocobase.com/welcome/getting-started/upgrading) et mettez à niveau NocoBase vers la dernière version.

Si vous avez précédemment activé les plugins CAS, OIDC, SAML, vous verrez les invites suivantes lors de la mise à niveau :

Invite du terminal de mise à niveau en ligne de commande :

![20240428212151](https://static-docs.nocobase.com/20240428212151.png)

Invite de l'interface de la version Docker :

![20240428194926](https://static-docs.nocobase.com/20240428194926.png)

#### 2. Supprimer les plugins ou obtenir la version 1.0 du plugin ?

***Si vous choisissez de supprimer les plugins et de continuer la mise à niveau :***

Supprimez les plugins selon les invites

```
# Application principale
yarn pm remove cas oidc saml --force
# S'il s'agit d'une sous-application, ajoutez le paramètre --app
yarn pm remove cas oidc saml --force --app=sub-app1
```

Continuez la mise à niveau

```
yarn nocobase upgrade
```

***Si vous choisissez de mettre à jour les plugins vers la version 1.0***

Contactez l'équipe NocoBase pour obtenir la version 1.0 des plugins et continuez la mise à niveau.

#### 3. Processus de mise à niveau des plugins CAS, OIDC, SAML

À ce stade, l'interface de l'application n'est plus accessible, nous devons donc effectuer la mise à niveau manuellement.

1. Connectez-vous avec votre compte sur [service.nocobase.com](https://service.nocobase.com/) pour télécharger la dernière version des plugins.
2. Décompressez les plugins dans le répertoire spécifié
   * Plugin CAS à décompresser dans `./storage/plugins/@nocobase/plugin-auth-cas`
   * Plugin OIDC à décompresser dans `./storage/plugins/@nocobase/plugin-auth-oidc`
   * Plugin SAML à décompresser dans `./storage/plugins/@nocobase/plugin-auth-saml`
3. Mettez à niveau l'application
   * Pour la version Docker, redémarrez simplement le conteneur
   * Pour la version code source ou create-nocobase-app
     1. Téléchargez les dépendances `yarn install`
     2. Exécutez la commande de mise à niveau `yarn nocobase upgrade`
     3. Redémarrez l'application
