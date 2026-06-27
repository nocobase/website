---
title: "Mises à jour hebdomadaires de NocoBase : Amélioration de l'extensibilité du stockage de fichiers"
description: "Les mises à jour de cette semaine incluent : amélioration de l'extensibilité du stockage de fichiers, corrections de bugs, et plus encore."
---

Résumez les journaux de mise à jour hebdomadaires du produit. Les dernières versions sont disponibles sur [notre blog](https://www.nocobase.com/en/blog/tags/release-notes).

**NocoBase est actuellement mis à jour avec trois branches : `main`, `next` et `develop`.**

![version.png](https://static-docs.nocobase.com/ba5f04e27e99c625cb3822da5df07860.png)

* `main` : La version la plus stable à ce jour, recommandée pour l'installation ;
* `next` : Version bêta, contient les nouvelles fonctionnalités à venir et a été testée de manière préliminaire. Il peut y avoir des problèmes connus ou inconnus. Elle est principalement destinée aux utilisateurs testeurs pour recueillir des retours et optimiser davantage les fonctionnalités. Idéale pour les utilisateurs testeurs qui souhaitent découvrir les nouvelles fonctionnalités tôt et donner leur avis ;
* `develop` : Version alpha, contient le code de fonctionnalité le plus récent, peut être incomplète ou instable, principalement destinée au développement interne et à l'itération rapide. Adaptée aux utilisateurs techniques intéressés par les fonctionnalités de pointe du produit, mais avec des problèmes potentiels et des fonctions incomplètes. Ne pas utiliser en production.

## main

![main.png](https://static-docs.nocobase.com/47a3c71734c1d0f908b51f9ebd53c0ac.png)

### [v1.4.25](https://www.nocobase.com/en/blog/v1.4.25)

*Date de sortie : 2025-01-16*

#### 🚀 Améliorations

- **[client]** Améliorer l'extensibilité du stockage de fichiers ([#6071](https://github.com/nocobase/nocobase/pull/6071)) par @chenos
- **[Workflow]** Correction du composant de champ répété dans la configuration de planification ([#6067](https://github.com/nocobase/nocobase/pull/6067)) par @mytharcher

#### 🐛 Corrections de bugs

- **[Mobile]** Correction du problème des boutons du bas masqués sur les appareils mobiles ([#6068](https://github.com/nocobase/nocobase/pull/6068)) par @zhangzhonghe
- **[Workflow : Événement d'action personnalisée]** Correction du contexte pour la collection http par @mytharcher
- **[Gestionnaire de sauvegarde]** Correction d'une possible erreur de sauvegarde lorsque le plugin collection-fdw n'est pas activé par @gchust
- **[Départements]** Correction de l'impossibilité de déclencher un événement d'action personnalisée sur la collection des départements par @mytharcher

### [v1.4.26](https://www.nocobase.com/en/blog/v1.4.26)

*Date de sortie : 2025-01-16*

#### 🚀 Améliorations

- **[client]** Permet d'ajouter des descriptions pour les collections SQL ([#6081](https://github.com/nocobase/nocobase/pull/6081)) par @2013xile
- **[resourcer]** Autoriser un objet vide comme valeurs dans l'action ([#6070](https://github.com/nocobase/nocobase/pull/6070)) par @mytharcher

#### 🐛 Corrections de bugs

- **[Localisation]** Éviter la requête API lors de la tentative de suppression d'une traduction vide ([#6078](https://github.com/nocobase/nocobase/pull/6078)) par @2013xile

### [v1.4.27](https://www.nocobase.com/en/blog/v1.4.27)

*Date de sortie : 2025-01-18*

#### 🐛 Corrections de bugs

- **[client]** Correction du problème où les données du bloc sont vides dans la fenêtre contextuelle sur la page intégrée ([#6086](https://github.com/nocobase/nocobase/pull/6086)) par @zhangzhonghe
- **[Workflow]** Correction de l'envoi non traité pendant la phase de préparation ([#6087](https://github.com/nocobase/nocobase/pull/6087)) par @mytharcher

### [v1.4.28](https://www.nocobase.com/en/blog/v1.4.28)

*Date de sortie : 2025-01-21*

#### 🐛 Corrections de bugs

- **[client]** La valeur par défaut du champ d'association n'a pas été mise à jour ([#6103](https://github.com/nocobase/nocobase/pull/6103)) par @chenos
- **[Action : Modification par lot]** Supprimer le modèle de données du formulaire des paramètres du formulaire d'action de modification par lot ([#6098](https://github.com/nocobase/nocobase/pull/6098)) par @katherinehhh
- **[Vérification]** Correction de la possibilité de modifier l'ID du fournisseur ([#6097](https://github.com/nocobase/nocobase/pull/6097)) par @mytharcher

### [v1.4.29](https://www.nocobase.com/en/blog/v1.4.29)

*Date de sortie : 2025-01-21*

#### 🎉 Nouvelles fonctionnalités

- **[Bloc : Panneau d'actions]** Prise en charge de la configuration du nombre d'icônes par ligne dans le panneau d'actions mobile ([#6106](https://github.com/nocobase/nocobase/pull/6106)) par @katherinehhh

## next

![next.png](https://static-docs.nocobase.com/8ed17a0f08cc585018f6de6c8b13947d.png)

### [v1.5.0-beta.29](https://www.nocobase.com/en/blog/v1.5.0-beta.29)

*Date de sortie : 2025-01-16*

#### 🚀 Améliorations

- **[Gestionnaire de sauvegarde]** Messages d'erreur améliorés pour les échecs de restauration par @gchust

### [v1.5.0-beta.30](https://www.nocobase.com/en/blog/v1.5.0-beta.30)

*Date de sortie : 2025-01-16*

#### 🐛 Corrections de bugs

- **[client]** Correction du problème où les valeurs par défaut des champs d'association ne prennent pas effet en mode Lecture facile ([#6066](https://github.com/nocobase/nocobase/pull/6066)) par @zhangzhonghe

### [v1.5.0-beta.31](https://www.nocobase.com/en/blog/v1.5.0-beta.31)

*Date de sortie : 2025-01-17*

#### 🐛 Corrections de bugs

- **[Synchronisation des données utilisateur]** Correction du problème où le bouton "réessayer" ne s'affiche pas dans la liste des tâches ([#6079](https://github.com/nocobase/nocobase/pull/6079)) par @2013xile

### [v1.5.0-beta.32](https://www.nocobase.com/en/blog/v1.5.0-beta.32)

*Date de sortie : 2025-01-17*

#### 🚀 Améliorations

- **[Workflow]** Changement des noms d'API pour des noms plus raisonnables ([#6082](https://github.com/nocobase/nocobase/pull/6082)) par @mytharcher

### [v1.5.0-beta.33](https://www.nocobase.com/en/blog/v1.5.0-beta.33)

*Date de sortie : 2025-01-21*

#### 🎉 Nouvelles fonctionnalités

- **[Workflow]** Ajout de la configuration de limite de pile pour les workflows ([#6077](https://github.com/nocobase/nocobase/pull/6077)) par @citlalinda

#### 🚀 Améliorations

- **[Workflow : Nœud de boucle]** Correction des styles ([#6095](https://github.com/nocobase/nocobase/pull/6095)) par @mytharcher
- **[Gestionnaire de fichiers]** Prise en charge d'autres plugins de stockage ([#6096](https://github.com/nocobase/nocobase/pull/6096)) par @jiannx
  Référence : [Stockage de fichiers : S3 (Pro)](https://docs.nocobase.com/handbook/file-manager/storage/s3-pro)
- **[Workflow : Kit de test]** Ajustement du style du canevas du workflow pour rendre le contenu plus compact ([#6088](https://github.com/nocobase/nocobase/pull/6088)) par @mytharcher
- **[Workflow : Nœud de requête JSON]** Ajout d'une icône aux nœuds par @mytharcher

## develop

![develop.png](https://static-docs.nocobase.com/7fcdd9456a17286d8a439eee52bcb8d2.png)

### [v1.6.0-alpha.15](https://www.nocobase.com/en/blog/v1.6.0-alpha.15)

*Date de sortie : 2025-01-19*

#### 🎉 Nouvelles fonctionnalités

- **[client]** Prise en charge de la définition de la propriété de description dans le bloc ([#6015](https://github.com/nocobase/nocobase/pull/6015)) par @katherinehhh
- **[Authentification]** Prise en charge de la configuration de sécurité des jetons. ([#5948](https://github.com/nocobase/nocobase/pull/5948)) par @sheldon66
  Référence : [Politique de sécurité des jetons](https://docs.nocobase.com/handbook/token-policy)
- **[Workflow : Nœud manuel]** Ajout de la colonne de titre de tâche dans le bloc de tâches ([#6051](https://github.com/nocobase/nocobase/pull/6051)) par @mytharcher

#### 🚀 Améliorations

- **[Workflow : Événement d'action personnalisée]** Changement de l'API d'exécution manuelle par @mytharcher

### [v1.6.0-alpha.16](https://www.nocobase.com/en/blog/v1.6.0-alpha.16)

*Date de sortie : 2025-01-19*

#### 🎉 Nouvelles fonctionnalités

- **[Bloc : Panneau d'actions]** Prise en charge de la configuration du nombre d'icônes par ligne dans le panneau d'actions mobile ([#6046](https://github.com/nocobase/nocobase/pull/6046)) par @katherinehhh

## À propos de NocoBase

NocoBase est une plateforme privée, open-source et sans code offrant un contrôle total et une évolutivité infinie. Elle permet aux équipes de s'adapter rapidement aux changements tout en réduisant considérablement les coûts. Évitez des années de développement et des investissements substantiels en déployant NocoBase en quelques minutes.

<iframe src="https://cdn.embedly.com/widgets/media.html?src=https%3A%2F%2Fwww.youtube.com%2Fembed%2FhOM2MyzHn9I&display_name=YouTube&url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DhOM2MyzHn9I&image=http%3A%2F%2Fi.ytimg.com%2Fvi%2FhOM2MyzHn9I%2Fhqdefault.jpg&key=a19fcc184b9711e1b4764040d3dc5c07&type=text%2Fhtml&schema=youtube" allowfullscreen="" frameborder="0" height="480" width="854" title="" class="dc n pc cp bh" scrolling="no"></iframe>

Découvrez NocoBase en 3 minutes !

## 👇 Obtenez NocoBase

[**Page d'accueil**](https://www.nocobase.com/)

[**Démo**](https://demo.nocobase.com/new)

[**Documentation**](https://docs.nocobase.com/)

[**GitHub**](https://github.com/nocobase/nocobase)
