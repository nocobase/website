---
title: "Mises à jour hebdomadaires de NocoBase : Ajout de la gestion des routes"
description: "Les mises à jour de cette semaine incluent : la prise en charge de la configuration des permissions pour les onglets de page, l'ajout d'une page de gestion des routes, et plus encore."
---

Résumez les journaux de mise à jour hebdomadaires du produit. Les dernières versions sont disponibles sur [notre blog](https://www.nocobase.com/en/blog/tags/release-notes).

**NocoBase est actuellement mis à jour avec trois branches : `main`, `next` et `develop`.**

![version.png](https://static-docs.nocobase.com/ba5f04e27e99c625cb3822da5df07860.png)

* `main` : La version la plus stable à ce jour, recommandée pour l'installation ;
* `next` : Version bêta, contient les nouvelles fonctionnalités à venir et a été testée préliminairement. Il peut y avoir des problèmes connus ou inconnus. Elle est principalement destinée aux utilisateurs testeurs pour recueillir des retours et optimiser davantage les fonctions. Idéale pour les utilisateurs testeurs qui souhaitent découvrir les nouvelles fonctionnalités tôt et donner leur avis ;
* `develop` : Version alpha, contient le code de fonctionnalité le plus récent, peut être incomplète ou instable, principalement destinée au développement interne et à l'itération rapide. Adaptée aux utilisateurs techniques intéressés par les fonctionnalités de pointe du produit, mais avec des problèmes potentiels et des fonctions incomplètes. Ne pas utiliser en production.

## main

![main.png](https://static-docs.nocobase.com/47a3c71734c1d0f908b51f9ebd53c0ac.png)

### [v1.5.11](https://www.nocobase.com/en/blog/v1.5.11)

*Date de sortie : 2025-02-20*

#### 🎉 Nouvelles fonctionnalités

- **[Workflow]** Prise en charge de l'extension du groupe d'instructions dans le workflow ([#6237](https://github.com/nocobase/nocobase/pull/6237)) par @mytharcher
  Référence : [Étendre le groupe de nœuds](https://docs.nocobase.com/handbook/workflow/development/api#registerinstructiongroup)

#### 🐛 Corrections de bugs

- **[client]**

  - Problème de popup d'action d'association de bloc d'association sur mobile ([#6235](https://github.com/nocobase/nocobase/pull/6235)) par @katherinehhh
  - Inadéquation du format du sélecteur dans le champ de formulaire de filtre ([#6234](https://github.com/nocobase/nocobase/pull/6234)) par @katherinehhh
  - Afficher correctement le composant `<Variable.TextArea />` en mode désactivé ([#6197](https://github.com/nocobase/nocobase/pull/6197)) par @mytharcher
  - Correction des fichiers manquants après téléchargement ([#6247](https://github.com/nocobase/nocobase/pull/6247)) par @mytharcher
- **[Workflow]**

  - Correction des détails de style dans le canevas du workflow ([#6240](https://github.com/nocobase/nocobase/pull/6240)) par @mytharcher
  - Prise en charge du déclenchement du workflow lors du changement de mot de passe ([#6248](https://github.com/nocobase/nocobase/pull/6248)) par @mytharcher

### [v1.5.12](https://www.nocobase.com/en/blog/v1.5.12)

*Date de sortie : 2025-02-21*

#### 🚀 Améliorations

- **[Workflow]** Masquer l'ID du nœud de la carte de nœud dans le canevas du workflow ([#6251](https://github.com/nocobase/nocobase/pull/6251)) par @mytharcher

#### 🐛 Corrections de bugs

- **[Gestionnaire de fichiers]** Mise à niveau de la version AWS SDK pour corriger le bug de téléchargement MinIO ([#6253](https://github.com/nocobase/nocobase/pull/6253)) par @mytharcher

### [v1.5.13](https://www.nocobase.com/en/blog/v1.5.13)

*Date de sortie : 2025-02-22*

#### 🐛 Corrections de bugs

- **[client]** Correction du fichier téléchargé manqué lorsqu'il est fait un par un ([#6260](https://github.com/nocobase/nocobase/pull/6260)) par @mytharcher
- **[Workflow : Événement pré-action]** Correction du message d'erreur du nœud de message de réponse non affiché par @mytharcher

### [v1.5.14](https://www.nocobase.com/en/blog/v1.5.14)

*Date de sortie : 2025-02-24*

#### 🐛 Corrections de bugs

- **[Gestionnaire de sauvegarde]** L'icône de suppression de la boîte de dialogue de restauration depuis l'opération locale ne fonctionne pas par @gchust

### [v1.5.15](https://www.nocobase.com/en/blog/v1.5.15)

*Date de sortie : 2025-02-24*

#### 🚀 Améliorations

- **[Gestionnaire de fichiers]**

  - Augmentation de la longueur de l'URL à 1024 ([#6275](https://github.com/nocobase/nocobase/pull/6275)) par @mytharcher
  - Les noms de fichiers lors du téléchargement passeront d'aléatoires au nom d'origine avec un suffixe aléatoire. ([#6217](https://github.com/nocobase/nocobase/pull/6217)) par @chenos
- **[Bloc : Panneau d'actions]** Optimisation des styles mobiles ([#6270](https://github.com/nocobase/nocobase/pull/6270)) par @zhangzhonghe

#### 🐛 Corrections de bugs

- **[cli]** Amélioration de la logique interne de la commande de mise à niveau nocobase ([#6280](https://github.com/nocobase/nocobase/pull/6280)) par @chenos

### [v1.5.16](https://www.nocobase.com/en/blog/v1.5.16)

*Date de sortie : 2025-02-26*

#### 🚀 Améliorations

- **[Gestionnaire de sauvegarde]** Permet de restaurer une sauvegarde vers une application même si certains plugins sont manquants par @gchust

#### 🐛 Corrections de bugs

- **[client]** Le composant de champ de texte enrichi ne peut pas être complètement effacé ([#6287](https://github.com/nocobase/nocobase/pull/6287)) par @katherinehhh
- **[Gestionnaire de fichiers]**

  - Correction de la migration et ajout de cas de test ([#6288](https://github.com/nocobase/nocobase/pull/6288)) par @mytharcher
  - Correction du type de colonne `path` de la collection de fichiers ([#6294](https://github.com/nocobase/nocobase/pull/6294)) par @mytharcher
  - Correction de la migration et ajout de cas de test ([#6288](https://github.com/nocobase/nocobase/pull/6288)) par @mytharcher

## next

![next.png](https://static-docs.nocobase.com/8ed17a0f08cc585018f6de6c8b13947d.png)

### v1.6.0-beta.11

*Date de sortie : 2025-02-27*

#### 🎉 Nouvelles fonctionnalités

* [Workflow] Prise en charge de l'extension du groupe d'instructions dans le workflow ([#6237](https://github.com/nocobase/nocobase/pull/6237)) par @mytharcher
  Référence : [Étendre le groupe de nœuds](https://docs.nocobase.com/handbook/workflow/development/api#registerinstructiongroup)
* [Workflow : Événement d'action personnalisée] Prise en charge du déclenchement global ou par lots de l'événement d'action personnalisée ([#272](https://github.com/nocobase/pro-plugins/pull/272)) par @mytharcher
* **[client]**

  * Prise en charge de l'extension des champs prédéfinis dans les collections ([#6183](https://github.com/nocobase/nocobase/pull/6183)) par @katherinehhh
  * Prise en charge de l'extension des opérateurs de filtre frontend ([#6085](https://github.com/nocobase/nocobase/pull/6085)) par @katherinehhh
  * Prise en charge de la définition de la propriété de description dans le bloc ([#6015](https://github.com/nocobase/nocobase/pull/6015)) par @katherinehhh
  * Ajout de schemaSetting pour afficher le nom du fichier pour les pièces jointes ([#5995](https://github.com/nocobase/nocobase/pull/5995)) par @katherinehhh
* **[Calendrier]** Prise en charge de l'extension des champs optionnels pour les plugins Kanban, Calendrier et Champ de formule ([#6076](https://github.com/nocobase/nocobase/pull/6076)) par @katherinehhh
* **[Localisation]** Localisation pour les routes de bureau et mobiles ([#6180](https://github.com/nocobase/nocobase/pull/6180)) par @2013xile
* **[Bloc : Panneau d'actions]** Prise en charge de la configuration du nombre d'icônes par ligne dans le panneau d'actions mobile ([#6046](https://github.com/nocobase/nocobase/pull/6046)) par @katherinehhh
* **[Client WEB]** Prise en charge de la configuration des permissions pour les onglets de page et ajout d'une page de gestion des routes ([#5955](https://github.com/nocobase/nocobase/pull/5955)) par @zhangzhonghe
  Référence : [Routes](https://docs.nocobase.com/handbook/routes)
* **[Authentification]** Prise en charge de la configuration de sécurité des jetons ([#5948](https://github.com/nocobase/nocobase/pull/5948)) par @sheldon66
  Référence : [Politique de sécurité des jetons](https://docs.nocobase.com/handbook/token-policy)
* **[Workflow : Nœud manuel]** Ajout d'une colonne de titre de tâche dans le bloc todo ([#6051](https://github.com/nocobase/nocobase/pull/6051)) par @mytharcher
* **[Variables et secrets]** Prise en charge de la configuration des variables d'environnement et des secrets dynamiques ([#5966](https://github.com/nocobase/nocobase/pull/5966)) par @katherinehhh

#### 🚀 Améliorations

* [Champ de collection : Markdown(Vditor)] Le CDN Vditor utilise les ressources locales ([#6229](https://github.com/nocobase/nocobase/pull/6229)) par @chenos
* [Workflow] Masquer l'ID du nœud de la carte de nœud dans le canevas du workflow ([#6251](https://github.com/nocobase/nocobase/pull/6251)) par @mytharcher
* **[client]** Extension et amélioration du centre personnel de l'utilisateur ([#6213](https://github.com/nocobase/nocobase/pull/6213)) par @katherinehhh
* **[client]**

  * Le titre de la page utilise par défaut le titre de la route ([#6188](https://github.com/nocobase/nocobase/pull/6188)) par @zhangzhonghe
  * Ajout de plus d'icônes à IconPicker ([#5996](https://github.com/nocobase/nocobase/pull/5996)) par @katherinehhh
* **[serveur]**

  * Déplacement de AesEncryptor vers le noyau ([#6132](https://github.com/nocobase/nocobase/pull/6132)) par @chenos
  * 1. Ajout d'un middleware serveur pour extraire l'adresse IP du client.
    2. Résolution des problèmes de rechargement infini lorsqu'une IP est bloquée.
    3. Ajout de l'en-tête HTTP `X-Forwarded-For` dans le proxy pour permettre le transfert pour le débogage local ([#6069](https://github.com/nocobase/nocobase/pull/6069)) par @sheldon66
* **[Workflow]** Déplacement des paramètres de liaison du workflow vers le plugin ([#6143](https://github.com/nocobase/nocobase/pull/6143)) par @mytharcher
* **[Gestionnaire de sources de données]** Modification de la fonction de test de connexion pour qu'elle soit asynchrone et mise à jour des cas de test associés ([#6181](https://github.com/nocobase/nocobase/pull/6181)) par @sheldon66

#### 🐛 Corrections de bugs

* [client]

  * Impossible d'ouvrir le popup du lien de champ dans une page intégrée ([#6222](https://github.com/nocobase/nocobase/pull/6222)) par @gchust
  * Lors de la fermeture de la sous-page, plusieurs requêtes de données de bloc sont déclenchées ([#6233](https://github.com/nocobase/nocobase/pull/6233)) par @zhangzhonghe
  * Inadéquation du format du sélecteur dans le champ de formulaire de filtre ([#6234](https://github.com/nocobase/nocobase/pull/6234)) par @katherinehhh
  * Clé unique manquante pour le sous-menu des champs d'association dans l'interface utilisateur ([#6230](https://github.com/nocobase/nocobase/pull/6230)) par @gchust
  * Afficher correctement le composant `<Variable.TextArea />` en mode désactivé ([#6197](https://github.com/nocobase/nocobase/pull/6197)) par @mytharcher
  * Problème de barre de défilement horizontale sur la page ([#6232](https://github.com/nocobase/nocobase/pull/6232)) par @katherinehhh
  * Correction du caractère de balise html dans le champ de saisie du formulaire de configuration du canal de messagerie. ([#6221](https://github.com/nocobase/nocobase/pull/6221)) par @sheldon66
  * Problème de popup d'action d'association de bloc d'association sur mobile ([#6235](https://github.com/nocobase/nocobase/pull/6235)) par @katherinehhh
  * Correction des fichiers manquants après téléchargement ([#6247](https://github.com/nocobase/nocobase/pull/6247)) par @mytharcher
  * Ignorer l'erreur d'authentification pour CurrentUserProvider. ([#6252](https://github.com/nocobase/nocobase/pull/6252)) par @sheldon66
* [Workflow : Nœud de boucle] Correction de la sortie prématurée de la boucle lorsque le nœud est en attente ([#6236](https://github.com/nocobase/nocobase/pull/6236)) par @mytharcher
* [Gestionnaire de fichiers] Mise à niveau de la version AWS SDK pour corriger le bug de téléchargement MinIO ([#6253](https://github.com/nocobase/nocobase/pull/6253)) par @mytharcher
* [Mobile] Les données du menu mobile sont incomplètes dans le tableau de configuration des permissions ([#6219](https://github.com/nocobase/nocobase/pull/6219)) par @zhangzhonghe
* [Workflow]

  * Correction des détails de style dans le canevas du workflow ([#6240](https://github.com/nocobase/nocobase/pull/6240)) par @mytharcher
  * Prise en charge du déclenchement du workflow lors du changement de mot de passe ([#6248](https://github.com/nocobase/nocobase/pull/6248)) par @mytharcher
* [Visualisation des données] Erreur de filtrage lorsque le nom de la source de données contient un trait d'union `-` ([#6231](https://github.com/nocobase/nocobase/pull/6231)) par @2013xile
* [Workflow : Événement pré-action] Correction du message d'erreur du nœud de message de réponse non affiché ([#277](https://github.com/nocobase/pro-plugins/pull/277)) par @mytharcher
* **[client]** Correction du fichier téléchargé manqué lorsqu'il est fait un par un ([#6260](https://github.com/nocobase/nocobase/pull/6260)) par @mytharcher
* **[client]** Correction de l'option "Sélectionner à partir des données existantes" toujours affichée lors de la désactivation de "Autoriser plusieurs" dans le sous-formulaire de relation plusieurs-à-plusieurs ([#6167](https://github.com/nocobase/nocobase/pull/6167)) par @katherinehhh
* **[auth]** Mise à jour de la logique du middleware d'authentification client pour éviter les échecs de mise à jour du jeton dus à la concurrence ([#6135](https://github.com/nocobase/nocobase/pull/6135)) par @sheldon66
* **[Client WEB]**

  * Permissions de routage anormales après la mise à niveau ([#6177](https://github.com/nocobase/nocobase/pull/6177)) par @zhangzhonghe
  * Suppression du titre d'onglet de page par défaut ([#6178](https://github.com/nocobase/nocobase/pull/6178)) par @zhangzhonghe
* **[Gestionnaire de sources de données]** Utilisation de loginWithJti pour mettre à jour les cas de test liés à l'authentification et éviter les erreurs ([#6175](https://github.com/nocobase/nocobase/pull/6175)) par @sheldon66
* **[Gestionnaire multi-applications]** Seules les sous-applications qui commencent par l'application principale sont mises à niveau avec elle ([#6133](https://github.com/nocobase/nocobase/pull/6133)) par @chenos
* **[Authentification]** Mise à jour des règles de migration pour les jetons émis et la configuration de la politique de jeton ([#6107](https://github.com/nocobase/nocobase/pull/6107)) par @sheldon66
* **[Workflow]** Correction du type de valeur pour le composant DatePicker ([#6039](https://github.com/nocobase/nocobase/pull/6039)) par @mytharcher

## À propos de NocoBase

NocoBase est une plateforme privée, open-source et sans code offrant un contrôle total et une évolutivité infinie. Elle permet aux équipes de s'adapter rapidement aux changements tout en réduisant considérablement les coûts. Évitez des années de développement et des investissements substantiels en déployant NocoBase en quelques minutes.

<iframe src="https://cdn.embedly.com/widgets/media.html?src=https%3A%2F%2Fwww.youtube.com%2Fembed%2FhOM2MyzHn9I&display_name=YouTube&url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DhOM2MyzHn9I&image=http%3A%2F%2Fi.ytimg.com%2Fvi%2FhOM2MyzHn9I%2Fhqdefault.jpg&key=a19fcc184b9711e1b4764040d3dc5c07&type=text%2Fhtml&schema=youtube" allowfullscreen="" frameborder="0" height="480" width="854" title="" class="dc n pc cp bh" scrolling="no"></iframe>

Découvrez NocoBase en 3 minutes !

## 👇 Obtenez NocoBase

[**Page d'accueil**](https://www.nocobase.com/)

[**Démo**](https://demo.nocobase.com/new)

[**Documentation**](https://docs.nocobase.com/)

[**GitHub**](https://github.com/nocobase/nocobase)
