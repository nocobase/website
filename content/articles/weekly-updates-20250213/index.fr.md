---
title: "Mises à jour hebdomadaires de NocoBase : Optimisations et corrections de bugs"
description: "Les mises à jour de cette semaine incluent : des optimisations pour les appareils mobiles, des améliorations des workflows et des corrections de bugs."
---

Résumé des journaux de mise à jour hebdomadaires du produit. Les dernières versions sont disponibles sur [notre blog](https://www.nocobase.com/fr/blog/tags/release-notes).

**La semaine dernière, nous avons publié [NocoBase version 1.5.0](https://www.nocobase.com/fr/blog/nocobase-1-5-0), qui apporte des optimisations du noyau, l'import/export de données à grande échelle, la gestion des e-mails, l'impression de modèles et de nombreuses autres nouvelles fonctionnalités.**

**NocoBase est actuellement mis à jour avec trois branches : `main`, `next` et `develop`.**

![version.png](https://static-docs.nocobase.com/ba5f04e27e99c625cb3822da5df07860.png)

* `main` : La version la plus stable à ce jour, recommandée pour l'installation ;
* `next` : Version bêta, contient les nouvelles fonctionnalités à venir et a été testée de manière préliminaire. Il peut y avoir des problèmes connus ou inconnus. Elle est principalement destinée aux utilisateurs testeurs pour recueillir des commentaires et optimiser davantage les fonctions. Idéale pour les utilisateurs testeurs qui souhaitent découvrir les nouvelles fonctionnalités tôt et donner leur avis ;
* `develop` : Version alpha, contient le code de fonctionnalité le plus récent, peut être incomplète ou instable, principalement destinée au développement interne et à l'itération rapide. Adaptée aux utilisateurs techniques intéressés par les fonctionnalités de pointe du produit, mais avec des problèmes potentiels et des fonctions incomplètes. Ne pas utiliser en production.

## main

![main.png](https://static-docs.nocobase.com/47a3c71734c1d0f908b51f9ebd53c0ac.png)

### [v1.5.1](https://www.nocobase.com/fr/blog/v1.5.1)

*Date de sortie : 2025-02-06*

#### 🐛 Corrections de bugs

- **[client]**
  - Traduction incorrecte du titre de `Sous-formulaire (Popover)` ([#6159](https://github.com/nocobase/nocobase/pull/6159)) par @gchust
  - Lorsque le champ du sous-formulaire est défini sur 'Masqué (valeur conservée)', ses variables de valeur par défaut ne fonctionnent pas correctement ([#6165](https://github.com/nocobase/nocobase/pull/6165)) par @zhangzhonghe

### [v1.5.2](https://www.nocobase.com/fr/blog/v1.5.2)

*Date de sortie : 2025-02-06*

#### 🚀 Améliorations

- **[Mobile]** Masquer l'en-tête de la page de configuration mobile lorsqu'il n'y a pas de permission de configuration ([#6171](https://github.com/nocobase/nocobase/pull/6171)) par @zhangzhonghe

#### 🐛 Corrections de bugs

- **[Workflow : nœud de notification]** Assure que les notifications sont envoyées correctement lorsque l'entrée utilisateur contient une syntaxe de type Handlebars. ([#6164](https://github.com/nocobase/nocobase/pull/6164)) par @sheldon66
- **[Workflow : nœud manuel]** Correction des valeurs de formulaire non analysées lors de la soumission par bouton terminal ([#6160](https://github.com/nocobase/nocobase/pull/6160)) par @mytharcher

### [v1.5.3](https://www.nocobase.com/fr/blog/v1.5.3)

*Date de sortie : 2025-02-07*

#### 🐛 Corrections de bugs

- **[client]**
  - La fenêtre contextuelle ouverte en cliquant sur le champ belongsToArray récupère des données incorrectes ([#6173](https://github.com/nocobase/nocobase/pull/6173)) par @zhangzhonghe
  - L'opérateur du champ heure défini sur "entre" dans le formulaire de filtre, mais le composant n'est pas passé au sélecteur de plage horaire ([#6170](https://github.com/nocobase/nocobase/pull/6170)) par @katherinehhh
  - Le formulaire d'édition contextuelle des blocs Kanban et calendrier n'affichait pas "Modifications non enregistrées" ([#6172](https://github.com/nocobase/nocobase/pull/6172)) par @katherinehhh

### [v1.5.4](https://www.nocobase.com/fr/blog/v1.5.4)

*Date de sortie : 2025-02-10*

#### 🚀 Améliorations

- **[Workflow]** Ajout du chargement à l'action de duplication ([#6179](https://github.com/nocobase/nocobase/pull/6179)) par @mytharcher

#### 🐛 Corrections de bugs

- **[client]**
  - Correction d'une erreur levée dans les paramètres de champ du nœud de création ([#6187](https://github.com/nocobase/nocobase/pull/6187)) par @mytharcher
  - L'option de configuration 'Autoriser la sélection multiple' pour les champs d'association ne s'affiche pas dans les formulaires de filtre ([#6174](https://github.com/nocobase/nocobase/pull/6174)) par @zhangzhonghe
  - Le champ reste masqué après avoir été masqué par des règles de liaison ([#6182](https://github.com/nocobase/nocobase/pull/6182)) par @zhangzhonghe
- **[utils]** Optimisation de la logique de lecture du stockage/plugins ([#6186](https://github.com/nocobase/nocobase/pull/6186)) par @chenos
- **[Notification : message in-app]** Correction : Ajout d'un filtre utilisateur aux sous-requêtes de titre et d'horodatage du message dans l'API de liste des canaux pour garantir l'isolation des données. ([#6185](https://github.com/nocobase/nocobase/pull/6185)) par @deepure
- **[Gestionnaire de sauvegarde]** Les fichiers n'étaient pas copiés de la sauvegarde vers le dossier uploads lors de la restauration en mode tolérant par @gchust

### [v1.5.5](https://www.nocobase.com/fr/blog/v1.5.5)

*Date de sortie : 2025-02-11*

#### 🚀 Améliorations

- **[Notification : message in-app]** Ajout d'un test pour la récupération du titre et de l'horodatage du dernier message dans les canaux in-app. ([#6189](https://github.com/nocobase/nocobase/pull/6189)) par @sheldon66

### [v1.5.6](https://www.nocobase.com/fr/blog/v1.5.6)

*Date de sortie : 2025-02-12*

#### 🐛 Corrections de bugs

- **[client]**
  - Le bloc ne se rafraîchit pas après la navigation de page ([#6200](https://github.com/nocobase/nocobase/pull/6200)) par @zhangzhonghe
  - Le bloc de formulaire ne s'affiche pas lors de l'ajout d'un formulaire de création via une action contextuelle dans une ligne de tableau ([#6190](https://github.com/nocobase/nocobase/pull/6190)) par @katherinehhh
  - Le réglage de la hauteur du bloc tableau ne s'applique pas lorsqu'il n'y a pas de données ([#6192](https://github.com/nocobase/nocobase/pull/6192)) par @katherinehhh
- **[Action : requête personnalisée]**
  - Valeur incorrecte de la variable 'Enregistrement actuel' dans le bouton de requête personnalisée ([#6196](https://github.com/nocobase/nocobase/pull/6196)) par @zhangzhonghe
  - Compatibilité du bouton de requête personnalisée avec les variables héritées ([#6194](https://github.com/nocobase/nocobase/pull/6194)) par @zhangzhonghe
- **[Visualisation des données]** Les blocs de graphique ne s'affichent pas lorsqu'ils sont ajoutés aux fenêtres contextuelles du panneau d'action ([#6198](https://github.com/nocobase/nocobase/pull/6198)) par @2013xile

## next

![next.png](https://static-docs.nocobase.com/8ed17a0f08cc585018f6de6c8b13947d.png)

### [v1.6.0-beta.4](https://www.nocobase.com/fr/blog/v1.6.0-beta.4)

*Date de sortie : 2025-02-11*

#### 🚀 Améliorations

- **[Gestionnaire de sauvegarde]** Suppression du mode tolérant de l'interface utilisateur par @gchust

## develop

![develop.png](https://static-docs.nocobase.com/7fcdd9456a17286d8a439eee52bcb8d2.png)

### [v1.6.0-alpha.21](https://www.nocobase.com/fr/blog/v1.6.0-alpha.21)

*Date de sortie : 2025-02-07*

#### 🎉 Nouvelles fonctionnalités

- **[Restriction IP]** Correction d'une erreur d'application lorsque la configuration de restriction IP n'existe pas. par @sheldon66

#### 🐛 Corrections de bugs

- **[auth]** Mise à jour de la logique du middleware d'authentification client pour éviter un échec de mise à jour du jeton dû à la concurrence. ([#6135](https://github.com/nocobase/nocobase/pull/6135)) par @sheldon66

### [v1.6.0-alpha.23](https://www.nocobase.com/fr/blog/v1.6.0-alpha.23)

*Date de sortie : 2025-02-07*

#### 🐛 Corrections de bugs

- **[client]** Correction de l'option "Sélectionner à partir des données existantes" qui s'affichait encore lors de la désactivation de "Autoriser plusieurs" dans le sous-formulaire de relation plusieurs-à-plusieurs ([#6167](https://github.com/nocobase/nocobase/pull/6167)) par @katherinehhh
- **[Gestionnaire de source de données]** Utilisation de loginWithJti pour mettre à jour les cas de test liés à l'authentification et éviter les erreurs. ([#6175](https://github.com/nocobase/nocobase/pull/6175)) par @sheldon66
- **[Client WEB]** Permissions de routage anormales après mise à niveau ([#6177](https://github.com/nocobase/nocobase/pull/6177)) par @zhangzhonghe

### [v1.6.0-alpha.24](https://www.nocobase.com/fr/blog/v1.6.0-alpha.24)

*Date de sortie : 2025-02-11*

#### 🎉 Nouvelles fonctionnalités

- **[Localisation]** Localisation pour les routes de bureau et mobiles ([#6180](https://github.com/nocobase/nocobase/pull/6180)) par @2013xile

#### 🚀 Améliorations

- **[client]** Le titre de la page utilise par défaut le titre de la route ([#6188](https://github.com/nocobase/nocobase/pull/6188)) par @zhangzhonghe
- **[Gestionnaire de source de données]** Modification de la fonction de test login pour qu'elle soit asynchrone et mise à jour des cas de test associés. ([#6181](https://github.com/nocobase/nocobase/pull/6181)) par @sheldon66
- **[Workflow : événement d'action personnalisée]** Mise à jour des cas de test associés pour utiliser la connexion asynchrone. par @sheldon66
- **[Workflow : Approbation]** Mise à jour des cas de test associés pour utiliser la connexion asynchrone. par @sheldon66

#### 🐛 Corrections de bugs

- **[Client WEB]** Suppression du titre d'onglet de page par défaut ([#6178](https://github.com/nocobase/nocobase/pull/6178)) par @zhangzhonghe

## À propos de NocoBase

NocoBase est une plateforme no-code privée et open source offrant un contrôle total et une évolutivité infinie. Elle permet aux équipes de s'adapter rapidement aux changements tout en réduisant considérablement les coûts. Évitez des années de développement et des investissements substantiels en déployant NocoBase en quelques minutes.

<iframe src="https://cdn.embedly.com/widgets/media.html?src=https%3A%2F%2Fwww.youtube.com%2Fembed%2FhOM2MyzHn9I&display_name=YouTube&url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DhOM2MyzHn9I&image=http%3A%2F%2Fi.ytimg.com%2Fvi%2FhOM2MyzHn9I%2Fhqdefault.jpg&key=a19fcc184b9711e1b4764040d3dc5c07&type=text%2Fhtml&schema=youtube" allowfullscreen="" frameborder="0" height="480" width="854" title="" class="dc n pc cp bh" scrolling="no"></iframe>

Découvrez NocoBase en 3 minutes !

## 👇 Obtenir NocoBase

[**Page d'accueil**](https://www.nocobase.com/)

[**Démo**](https://demo.nocobase.com/new)

[**Documentation**](https://docs.nocobase.com/)

[**GitHub**](https://github.com/nocobase/nocobase)
