---
title: "Mises à jour hebdomadaires de NocoBase : Prise en charge de la configuration des permissions pour les actions"
description: "Les mises à jour de cette semaine incluent : la prise en charge de la configuration des permissions pour les actions, le champ heure prend en charge le format horaire, et plus encore."
---

Résumez les journaux de mise à jour hebdomadaires du produit. Les dernières versions sont disponibles sur [notre blog](https://www.nocobase.com/en/blog/timeline).

**NocoBase est actuellement mis à jour avec trois branches : `main`, `next` et `develop`.**

![version.png](https://static-docs.nocobase.com/ba5f04e27e99c625cb3822da5df07860.png)

* `main` : La version la plus stable à ce jour, recommandée pour l'installation ;
* `next` : Version bêta, contient les nouvelles fonctionnalités à venir et a été testée préliminairement. Il peut y avoir des problèmes connus ou inconnus. Elle est principalement destinée aux utilisateurs testeurs pour recueillir des retours et optimiser davantage les fonctionnalités. Idéale pour les utilisateurs testeurs qui souhaitent découvrir les nouvelles fonctionnalités en avant-première et donner leur avis ;
* `develop` : Version alpha, contient le code de fonctionnalité le plus récent, peut être incomplète ou instable, principalement destinée au développement interne et à l'itération rapide. Adaptée aux utilisateurs techniques intéressés par les fonctionnalités de pointe du produit, mais avec des problèmes potentiels et des fonctions incomplètes. Ne pas utiliser en production.

## main

![main.png](https://static-docs.nocobase.com/47a3c71734c1d0f908b51f9ebd53c0ac.png)

### [v1.5.17](https://www.nocobase.com/en/blog/v1.5.17)

*Date de sortie : 2025-02-27*

#### 🐛 Corrections de bugs

- **[client]**

  - Erreur lors de la création d'un bloc de commentaires sans collection de commentaires ([#6309](https://github.com/nocobase/nocobase/pull/6309)) par @katherinehhh
  - Une erreur se produit lors du clic sur un nœud de bloc arborescent ([#6314](https://github.com/nocobase/nocobase/pull/6314)) par @zhangzhonghe
  - Après avoir cliqué sur le menu de gauche, la sous-page se ferme anormalement ([#6305](https://github.com/nocobase/nocobase/pull/6305)) par @zhangzhonghe
  - Ne pas effacer la valeur du champ lorsque la valeur de l'expression est vide ([#6300](https://github.com/nocobase/nocobase/pull/6300)) par @zhangzhonghe
- **[Champ de collection : Séquence]** Correction du champ de séquence non désactivé en mode lecture seule ([#6274](https://github.com/nocobase/nocobase/pull/6274)) par @mytharcher
- **[Gestionnaire de fichiers]** Correction de la migration pour les collections héritées ([#6310](https://github.com/nocobase/nocobase/pull/6310)) par @mytharcher
- **[Contrôle d'accès]** Enregistrements de données incorrects lors de l'utilisation de champs plusieurs-à-plusieurs comme périmètre de données dans les autorisations de collection ([#6304](https://github.com/nocobase/nocobase/pull/6304)) par @2013xile
- **[Bloc : Kanban]** Filtrage incorrect des données dans le bloc Kanban contextuel utilisant des variables d'enregistrement contextuelles ([#6290](https://github.com/nocobase/nocobase/pull/6290)) par @katherinehhh
- **[Bloc : Arborescence]** Une erreur se produit lors du clic sur un nœud de bloc arborescent par @zhangzhonghe

### [v1.5.18](https://www.nocobase.com/en/blog/v1.5.18)

*Date de sortie : 2025-02-27*

#### 🐛 Corrections de bugs

- **[Bloc : Panneau d'actions]** Le réglage de la hauteur du panneau d'actions est invalide ([#6321](https://github.com/nocobase/nocobase/pull/6321)) par @zhangzhonghe

### [v1.5.19](https://www.nocobase.com/en/blog/v1.5.19)

*Date de sortie : 2025-03-01*

#### 🐛 Corrections de bugs

- **[client]** le bouton "ajouter nouveau" apparaît au survol en mode lecture seule du champ d'association ([#6322](https://github.com/nocobase/nocobase/pull/6322)) par @katherinehhh
- **[Action : Exporter les enregistrements Pro]** supprimer l'option 'ajouter un bloc' dans les paramètres du bouton d'exportation des pièces jointes par @katherinehhh
- **[Action : Importer des enregistrements Pro]** la détection des enregistrements en double du bouton d'importation du bloc d'association n'affiche aucune donnée dans la liste déroulante des champs par @katherinehhh

### [v1.5.20](https://www.nocobase.com/en/blog/v1.5.20)

*Date de sortie : 2025-03-03*

#### 🐛 Corrections de bugs

- **[client]** Les pages avec un favicon personnalisé affichent brièvement le favicon NocoBase pendant le chargement ([#6337](https://github.com/nocobase/nocobase/pull/6337)) par @zhangzhonghe
- **[Bloc : Carte]** Les paramètres de configuration du champ de carte sont manquants/non visibles ([#6336](https://github.com/nocobase/nocobase/pull/6336)) par @zhangzhonghe
- **[Marque personnalisée]** Les pages avec un favicon personnalisé affichent brièvement le favicon NocoBase pendant le chargement par @zhangzhonghe
- **[Impression de modèle]** La restauration à partir du local a échoué lorsque les plugins d'impression de modèle d'action et de gestionnaire de sauvegarde étaient tous deux activés par @gchust

## next

![next.png](https://static-docs.nocobase.com/8ed17a0f08cc585018f6de6c8b13947d.png)

### [v1.6.0-beta.15](https://www.nocobase.com/en/blog/v1.6.0-beta.15)

*Date de sortie : 2025-02-27*

#### 🐛 Corrections de bugs

- **[client]**

  - Erreur lors de la création d'un bloc de commentaires sans collection de commentaires ([#6309](https://github.com/nocobase/nocobase/pull/6309)) par @katherinehhh
  - Position incorrecte après avoir fait glisser le menu ([#6315](https://github.com/nocobase/nocobase/pull/6315)) par @zhangzhonghe
- **[Workflow : Événement d'action personnalisée]** Correction d'une erreur de build par @mytharcher

### [v1.6.0-beta.16](https://www.nocobase.com/en/blog/v1.6.0-beta.16)

*Date de sortie : 2025-03-04*

#### 🎉 Nouvelles fonctionnalités

- **[client]** le champ heure prend en charge le format de l'heure ([#6329](https://github.com/nocobase/nocobase/pull/6329)) par @katherinehhh

#### 🚀 Améliorations

- **[serveur]** Mise à niveau de koa vers 2.15.4 ; mise à niveau de @koa/cors vers 5.0.0 ([#6334](https://github.com/nocobase/nocobase/pull/6334)) par @2013xile
- **[Workflow]** Chargement paresseux du résultat du travail pour de meilleures performances ([#6344](https://github.com/nocobase/nocobase/pull/6344)) par @mytharcher

#### 🐛 Corrections de bugs

- **[auth]** Éviter le renouvellement du jeton lors de l'autorisation WebSocket. ([#6342](https://github.com/nocobase/nocobase/pull/6342)) par @sheldon66
- **[client]**

  - Les pages avec un favicon personnalisé affichent brièvement le favicon NocoBase pendant le chargement ([#6337](https://github.com/nocobase/nocobase/pull/6337)) par @zhangzhonghe
  - le bouton "ajouter nouveau" apparaît au survol en mode lecture seule du champ d'association ([#6322](https://github.com/nocobase/nocobase/pull/6322)) par @katherinehhh
- **[outils de développement]** Assurez-vous que l'en-tête X-Forwarded-For est défini uniquement si req.ip n'est pas indéfini. ([#6320](https://github.com/nocobase/nocobase/pull/6320)) par @sheldon66
- **[Bloc : Carte]** Les paramètres de configuration du champ de carte sont manquants/non visibles ([#6336](https://github.com/nocobase/nocobase/pull/6336)) par @zhangzhonghe
- **[Mobile]** Erreur de page : Impossible de lire les propriétés de null (lecture de 'match') ([#6335](https://github.com/nocobase/nocobase/pull/6335)) par @zhangzhonghe
- **[Utilisateurs]** Une UI d'erreur clignote brièvement lorsque le tableau de gestion des autorisations utilisateur se charge pour la première fois ([#6324](https://github.com/nocobase/nocobase/pull/6324)) par @zhangzhonghe
- **[Bloc : Panneau d'actions]** Le réglage de la hauteur du panneau d'actions est invalide ([#6321](https://github.com/nocobase/nocobase/pull/6321)) par @zhangzhonghe
- **[Action : Importer des enregistrements Pro]** la détection des enregistrements en double du bouton d'importation du bloc d'association n'affiche aucune donnée dans la liste déroulante des champs par @katherinehhh
- **[Action : Exporter les enregistrements Pro]** supprimer l'option 'ajouter un bloc' dans les paramètres du bouton d'exportation des pièces jointes par @katherinehhh
- **[Workflow : Événement d'action personnalisée]** Correction de la migration pour les boutons hérités liés à un workflow d'action personnalisée par @mytharcher
- **[Marque personnalisée]** Les pages avec un favicon personnalisé affichent brièvement le favicon NocoBase pendant le chargement par @zhangzhonghe
- **[Impression de modèle]** La restauration à partir du local a échoué lorsque les plugins d'impression de modèle d'action et de gestionnaire de sauvegarde étaient tous deux activés par @gchust
- **[Workflow : Approbation]**

  - Correction de `.toJSON()` ayant provoqué une erreur par @mytharcher
  - Correction de la migration non exécutée en raison du numéro de version par @mytharcher
  - Correction de la migration pour les blocs hérités par @mytharcher

## develop

![develop.png](https://static-docs.nocobase.com/7fcdd9456a17286d8a439eee52bcb8d2.png)

### [v1.6.0-alpha.29](https://www.nocobase.com/en/blog/v1.6.0-alpha.29)

*Date de sortie : 2025-02-27*

#### 🎉 Nouvelles fonctionnalités

- **[client]** prise en charge de la configuration des autorisations pour les actions ([#6254](https://github.com/nocobase/nocobase/pull/6254)) par @katherinehhh
- **[Bloc : modèle]** Ajout du plugin `Bloc : modèle`, fournissant un support de modèle pour les blocs basé sur un mécanisme d'héritage. ([#5920](https://github.com/nocobase/nocobase/pull/5920)) par @gchust
- **[Workflow : Événement d'action personnalisée]** l'action de déclenchement du workflow prend en charge le contrôle d'accès par @katherinehhh

#### 🚀 Améliorations

- **[client]**

  - Mise à niveau des définitions de types React ([#6278](https://github.com/nocobase/nocobase/pull/6278)) par @gchust
  - Extension et amélioration du centre personnel de l'utilisateur ([#6213](https://github.com/nocobase/nocobase/pull/6213)) par @katherinehhh
- **[Gestionnaire de fichiers]**

  - Augmentation de la longueur de l'URL à 1024 ([#6275](https://github.com/nocobase/nocobase/pull/6275)) par @mytharcher
  - ajout du code backend pour générer l'URL de prévisualisation du fichier ([#6281](https://github.com/nocobase/nocobase/pull/6281)) par @jiannx
  - Les noms de fichiers lors du téléchargement passeront de aléatoire au nom d'origine avec un suffixe aléatoire. ([#6217](https://github.com/nocobase/nocobase/pull/6217)) par @chenos
  - ajout du code backend pour générer l'URL de prévisualisation du fichier ([#6223](https://github.com/nocobase/nocobase/pull/6223)) par @jiannx
  - Modification de l'API du type de stockage et ajout de l'API du plugin ([#6246](https://github.com/nocobase/nocobase/pull/6246)) par @mytharcher
  - Modification de l'API du type de stockage et ajout de l'API du plugin ([#6246](https://github.com/nocobase/nocobase/pull/6246)) par @mytharcher
- **[Bloc : Panneau d'actions]** Optimisation des styles mobiles ([#6270](https://github.com/nocobase/nocobase/pull/6270)) par @zhangzhonghe
- **[Workflow]** Masquer l'ID du nœud de la carte de nœud dans le canevas du workflow ([#6251](https://github.com/nocobase/nocobase/pull/6251)) par @mytharcher
- **[Stockage de fichiers : S3(Pro)]**

  - Ajustement de l'API de stockage basé sur le dépôt principal par @mytharcher
  - Prise en charge de la configuration de l'option thumbnailRule par @jiannx
- **[Gestionnaire de sauvegarde]** Autoriser la restauration d'une sauvegarde vers une application même s'il manque certains plugins par @gchust

#### 🐛 Corrections de bugs

- **[outils de développement]** Assurez-vous que l'en-tête X-Forwarded-For est défini uniquement si req.ip n'est pas indéfini. ([#6320](https://github.com/nocobase/nocobase/pull/6320)) par @sheldon66
- **[client]**

  - Position incorrecte après avoir fait glisser le menu ([#6315](https://github.com/nocobase/nocobase/pull/6315)) par @zhangzhonghe
  - Erreur lors de la création d'un bloc de commentaires sans collection de commentaires ([#6309](https://github.com/nocobase/nocobase/pull/6309)) par @katherinehhh
  - Une erreur se produit lors du clic sur un nœud de bloc arborescent ([#6314](https://github.com/nocobase/nocobase/pull/6314)) par @zhangzhonghe
  - Après avoir cliqué sur le menu de gauche, la sous-page se ferme anormalement ([#6305](https://github.com/nocobase/nocobase/pull/6305)) par @zhangzhonghe
  - Ne pas effacer la valeur du champ lorsque la valeur de l'expression est vide ([#6300](https://github.com/nocobase/nocobase/pull/6300)) par @zhangzhonghe
  - le composant de champ de texte enrichi ne peut pas être complètement effacé ([#6287](https://github.com/nocobase/nocobase/pull/6287)) par @katherinehhh
  - Impossible de déplacer la page dans un groupe ([#6289](https://github.com/nocobase/nocobase/pull/6289)) par @zhangzhonghe
  - Ignorer l'erreur d'authentification pour CurrentUserProvider. ([#6252](https://github.com/nocobase/nocobase/pull/6252)) par @sheldon66
  - Correction du fichier téléchargé manqué lors d'un téléchargement un par un ([#6260](https://github.com/nocobase/nocobase/pull/6260)) par @mytharcher
  - Correction du caractère de balise html dans le champ de saisie du formulaire de configuration du canal de messagerie. ([#6221](https://github.com/nocobase/nocobase/pull/6221)) par @sheldon66
  - Correction des fichiers manquants après le téléchargement ([#6247](https://github.com/nocobase/nocobase/pull/6247)) par @mytharcher
  - non-concordance du format du sélecteur dans le champ du formulaire de filtre ([#6234](https://github.com/nocobase/nocobase/pull/6234)) par @katherinehhh
  - Afficher correctement le composant `<Variable.TextArea />` en mode désactivé ([#6197](https://github.com/nocobase/nocobase/pull/6197)) par @mytharcher
- **[create-nocobase-app]** Une erreur se produit sur le client web après avoir exécuté `create-nocobase-app` suivi de `yarn dev` ([#6299](https://github.com/nocobase/nocobase/pull/6299)) par @gchust
- **[auth]** Ignorer la vérification d'authentification de l'utilisateur lorsque le jeton est une clé API ([#6291](https://github.com/nocobase/nocobase/pull/6291)) par @sheldon66
- **[cli]** Amélioration de la logique interne de la commande de mise à niveau nocobase ([#6280](https://github.com/nocobase/nocobase/pull/6280)) par @chenos
- **[Gestionnaire de fichiers]**

  - Correction de la migration pour les collections héritées ([#6310](https://github.com/nocobase/nocobase/pull/6310)) par @mytharcher
  - Correction de la migration et ajout de cas de test ([#6288](https://github.com/nocobase/nocobase/pull/6288)) par @mytharcher
  - Correction de la migration et ajout de cas de test ([#6288](https://github.com/nocobase/nocobase/pull/6288)) par @mytharcher
  - Correction du type de colonne `path` de la collection de fichiers ([#6294](https://github.com/nocobase/nocobase/pull/6294)) par @mytharcher
  - Mise à niveau de la version AWS SDK pour corriger le bug de téléchargement MinIO ([#6253](https://github.com/nocobase/nocobase/pull/6253)) par @mytharcher
- **[Bloc : modèle]** Nécessité de se connecter lors de l'accès à un formulaire public ([#6258](https://github.com/nocobase/nocobase/pull/6258)) par @gchust
- **[Contrôle d'accès]** Enregistrements de données incorrects lors de l'utilisation de champs plusieurs-à-plusieurs comme périmètre de données dans les autorisations de collection ([#6304](https://github.com/nocobase/nocobase/pull/6304)) par @2013xile
- **[Bloc : Kanban]** Filtrage incorrect des données dans le bloc Kanban contextuel utilisant des variables d'enregistrement contextuelles ([#6290](https://github.com/nocobase/nocobase/pull/6290)) par @katherinehhh
- **[Champ de collection : Séquence]** Correction du champ de séquence non désactivé en mode lecture seule ([#6274](https://github.com/nocobase/nocobase/pull/6274)) par @mytharcher
- **[Workflow : kit de test]** Correction des cas de test E2E basés sur les nouvelles fonctionnalités ([#6296](https://github.com/nocobase/nocobase/pull/6296)) par @mytharcher
- **[Formulaires publics]** Ignorer la vérification d'authentification dans le formulaire public ([#6284](https://github.com/nocobase/nocobase/pull/6284)) par @chenos
- **[Authentification]** Suppression du wrapper NavigateIfNotSignIn inutile de AdminProvider. ([#6268](https://github.com/nocobase/nocobase/pull/6268)) par @sheldon66
- **[Workflow]**

  - Correction des détails de style dans le canevas du workflow ([#6240](https://github.com/nocobase/nocobase/pull/6240)) par @mytharcher
  - Prise en charge du déclenchement du workflow lors du changement de mot de passe ([#6248](https://github.com/nocobase/nocobase/pull/6248)) par @mytharcher
- **[Workflow : Événement d'action personnalisée]**

  - Correction d'une erreur de build par @mytharcher
  - Correction des cas de test E2E par @mytharcher
  - Correction de l'initialiseur de workflow de déclenchement par @mytharcher
  - Correction d'une erreur de build par @mytharcher
- **[Workflow : Événement de pré-action]** Correction du message d'erreur du nœud de message de réponse non affiché par @mytharcher
- **[Workflow : JavaScript]** Prise en charge de l'exigence de modules NocoBase par @mytharcher
- **[Gestionnaire d'e-mails]** collection mailmessage publique et correction de la perte de données modale par @jiannx
- **[Stockage de fichiers : S3(Pro)]**

  - Mise à niveau de la version AWS SDK pour corriger le bug de téléchargement MinIO. par @mytharcher
  - définition de la valeur par défaut de forcePathStyleForAccess sur virtual par @jiannx
- **[Bloc : Formulaire en plusieurs étapes]** erreur de tri des éléments après le glissement par @jiannx
- **[Bloc : Arborescence]** Une erreur se produit lors du clic sur un nœud de bloc arborescent par @zhangzhonghe
- **[Gestionnaire de sauvegarde]** L'icône de suppression de la boîte de dialogue de l'opération de restauration à partir du local ne fonctionne pas par @gchust
- **[Workflow : Approbation]**

  - Correction de la migration non exécutée en raison du numéro de version par @mytharcher
  - Correction des cas de test E2E basés sur les nouvelles fonctionnalités par @mytharcher

## À propos de NocoBase

NocoBase est une plateforme no-code open source et privée, offrant un contrôle total et une évolutivité infinie. Elle permet aux équipes de s'adapter rapidement aux changements tout en réduisant considérablement les coûts. Évitez des années de développement et des investissements substantiels en déployant NocoBase en quelques minutes.

<iframe src="https://cdn.embedly.com/widgets/media.html?src=https%3A%2F%2Fwww.youtube.com%2Fembed%2FhOM2MyzHn9I&display_name=YouTube&url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DhOM2MyzHn9I&image=http%3A%2F%2Fi.ytimg.com%2Fvi%2FhOM2MyzHn9I%2Fhqdefault.jpg&key=a19fcc184b9711e1b4764040d3dc5c07&type=text%2Fhtml&schema=youtube" allowfullscreen="" frameborder="0" height="480" width="854" title="" class="dc n pc cp bh" scrolling="no"></iframe>

Découvrez NocoBase en 3 minutes !

## 👇 Obtenir NocoBase

[**Page d'accueil**](https://www.nocobase.com/)

[**Démo**](https://demo.nocobase.com/new)

[**Documentation**](https://docs.nocobase.com/)

[**GitHub**](https://github.com/nocobase/nocobase)
