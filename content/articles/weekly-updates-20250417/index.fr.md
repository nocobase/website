---
title: "Mises à jour hebdomadaires de NocoBase : certains plugins commerciaux deviennent open source"
description: "Les mises à jour de cette semaine incluent : les plugins commerciaux pour le département, l'URL des pièces jointes et le message de réponse du workflow sont désormais fournis gratuitement."
---

Résumez les journaux de mise à jour hebdomadaires du produit. Les dernières versions sont consultables sur [notre blog](https://www.nocobase.com/en/blog/timeline).

**NocoBase est actuellement mis à jour avec trois branches : `main`, `next` et `develop`.**

![version.png](https://static-docs.nocobase.com/ba5f04e27e99c625cb3822da5df07860.png)

* `main` : La version la plus stable à ce jour, recommandée pour l'installation ;
* `next` : Version bêta, contient les nouvelles fonctionnalités à venir et a été testée préliminairement. Il peut y avoir des problèmes connus ou inconnus. Elle est principalement destinée aux utilisateurs testeurs pour recueillir des retours et optimiser davantage les fonctionnalités. Idéale pour les utilisateurs testeurs qui souhaitent découvrir les nouvelles fonctionnalités en avant-première et donner leur avis ;
* `develop` : Version alpha, contient le code de fonctionnalité le plus récent, peut être incomplète ou instable, principalement destinée au développement interne et à l'itération rapide. Adaptée aux utilisateurs techniques intéressés par les fonctionnalités de pointe du produit, mais avec des problèmes potentiels et des fonctions incomplètes. Ne pas utiliser en production.

## main

![main.png](https://static-docs.nocobase.com/47a3c71734c1d0f908b51f9ebd53c0ac.png)

### [v1.6.18](https://www.nocobase.com/en/blog/v1.6.18)

*Date de sortie : 2025-04-11*

#### 🚀 Améliorations

- **[client]**

  - Ajout d'une API de repli de type par défaut pour `Variable.Input` ([#6644](https://github.com/nocobase/nocobase/pull/6644)) par @mytharcher
  - Optimisation des invites pour les pages non configurées ([#6641](https://github.com/nocobase/nocobase/pull/6641)) par @zhangzhonghe
- **[Workflow : Nœud de délai]** Prise en charge de l'utilisation d'une variable pour la durée ([#6621](https://github.com/nocobase/nocobase/pull/6621)) par @mytharcher
- **[Workflow : Événement d'action personnalisée]** Ajout des paramètres de rafraîchissement pour le bouton de déclenchement du workflow par @mytharcher

#### 🐛 Corrections de bugs

- **[client]**

  - chevauchement de la description du sous-tableau avec le bouton d'ajout ([#6646](https://github.com/nocobase/nocobase/pull/6646)) par @katherinehhh
  - soulignement en pointillé causé par la disposition de formulaire horizontale dans la modale ([#6639](https://github.com/nocobase/nocobase/pull/6639)) par @katherinehhh
- **[Stockage de fichiers : S3(Pro)]** Correction de l'absence d'await pour l'appel suivant. par @jiannx
- **[Gestionnaire d'emails]** Correction de l'absence d'await pour l'appel suivant. par @jiannx

### [v1.6.19](https://www.nocobase.com/en/blog/v1.6.19)

*Date de sortie : 2025-04-14*

#### 🐛 Corrections de bugs

- **[client]**
  - Correction du problème d'images d'aperçu masquées ([#6651](https://github.com/nocobase/nocobase/pull/6651)) par @zhangzhonghe
  - Dans le bloc de formulaire, la valeur par défaut de la configuration du champ s'affiche d'abord comme la chaîne de variable d'origine, puis disparaît ([#6649](https://github.com/nocobase/nocobase/pull/6649)) par @zhangzhonghe

### [v1.6.20](https://www.nocobase.com/en/blog/v1.6.20)

*Date de sortie : 2025-04-14*

#### 🎉 Nouvelles fonctionnalités

- **[Départements]** Rendre les plugins Département, URL de pièce jointe et message de réponse de workflow gratuits ([#6663](https://github.com/nocobase/nocobase/pull/6663)) par @chenos

#### 🐛 Corrections de bugs

- **[client]**

  - Le formulaire de filtre ne doit pas afficher l'invite "Modifications non enregistrées" ([#6657](https://github.com/nocobase/nocobase/pull/6657)) par @zhangzhonghe
  - L'option "autoriser plusieurs" ne fonctionne pas pour le champ de relation ([#6661](https://github.com/nocobase/nocobase/pull/6661)) par @katherinehhh
  - Dans le formulaire de filtre, lorsque le bouton de filtre est cliqué, s'il y a des champs qui n'ont pas passé la validation, le filtrage est toujours déclenché ([#6659](https://github.com/nocobase/nocobase/pull/6659)) par @zhangzhonghe
  - Le passage au menu de groupe ne doit pas sauter vers une page qui a déjà été masquée dans le menu ([#6654](https://github.com/nocobase/nocobase/pull/6654)) par @zhangzhonghe
- **[Stockage de fichiers : S3(Pro)]**

  - Organisation de la langue par @jiannx
  - Paramètres individuels baseurl et public, amélioration de l'UX de configuration du stockage S3 Pro par @jiannx
- **[Gestionnaire de migration]** l'option de saut de sauvegarde automatique devient invalide si la fenêtre contextuelle de variable d'environnement apparaît pendant la migration par @gchust

## next

![next.png](https://static-docs.nocobase.com/8ed17a0f08cc585018f6de6c8b13947d.png)

### [v1.7.0-beta.15](https://www.nocobase.com/en/blog/v1.7.0-beta.15)

*Date de sortie : 2025-04-10*

#### 🚀 Améliorations

- **[Workflow : Nœud de délai]** Prise en charge de l'utilisation d'une variable pour la durée ([#6621](https://github.com/nocobase/nocobase/pull/6621)) par @mytharcher

#### 🐛 Corrections de bugs

- **[Workflow]** Correction d'une OOM lors de la création d'un job avec un identifiant entier non sécurisé ([#6637](https://github.com/nocobase/nocobase/pull/6637)) par @mytharcher
- **[Bloc : modèle]** lorsque le modèle référencé utilisé par le bloc de page a été supprimé, l'enregistrement en tant que modèle échoue ([#6638](https://github.com/nocobase/nocobase/pull/6638)) par @gchust

### [v1.7.0-beta.16](https://www.nocobase.com/en/blog/v1.7.0-beta.16)

*Date de sortie : 2025-04-12*

#### 🚀 Améliorations

- **[client]**

  - Ajout d'une API de repli de type par défaut pour `Variable.Input` ([#6644](https://github.com/nocobase/nocobase/pull/6644)) par @mytharcher
  - Optimisation des invites pour les pages non configurées ([#6641](https://github.com/nocobase/nocobase/pull/6641)) par @zhangzhonghe
- **[Workflow : Événement d'action personnalisée]** Ajout des paramètres de rafraîchissement pour le bouton de déclenchement du workflow par @mytharcher

#### 🐛 Corrections de bugs

- **[client]**

  - le titre du tiroir d'édition du nœud de workflow affiche [object Object] ([#6648](https://github.com/nocobase/nocobase/pull/6648)) par @katherinehhh
  - chevauchement de la description du sous-tableau avec le bouton d'ajout ([#6646](https://github.com/nocobase/nocobase/pull/6646)) par @katherinehhh
  - style incorrect de la saisie de variable ([#6645](https://github.com/nocobase/nocobase/pull/6645)) par @gchust
  - soulignement en pointillé causé par la disposition de formulaire horizontale dans la modale ([#6639](https://github.com/nocobase/nocobase/pull/6639)) par @katherinehhh
- **[Workflow]** Correction des informations statistiques des workflows non chargées au démarrage de l'application ([#6642](https://github.com/nocobase/nocobase/pull/6642)) par @mytharcher

### [v1.7.0-beta.17](https://www.nocobase.com/en/blog/v1.7.0-beta.17)

*Date de sortie : 2025-04-15*

#### 🎉 Nouvelles fonctionnalités

- **[Départements]** Rendre les plugins Département, URL de pièce jointe et message de réponse de workflow gratuits ([#6663](https://github.com/nocobase/nocobase/pull/6663)) par @chenos
- **[Action : Mise à jour par lot]** Prise en charge du rafraîchissement des données dans d'autres blocs de données après la mise à jour des données dans un bloc ([#6591](https://github.com/nocobase/nocobase/pull/6591)) par @zhangzhonghe

#### 🚀 Améliorations

- **[Workflow]** Prise en charge d'une URL de popup fixe pour les tâches de workflow ([#6640](https://github.com/nocobase/nocobase/pull/6640)) par @mytharcher

#### 🐛 Corrections de bugs

- **[client]**

  - Le passage au menu de groupe ne doit pas sauter vers une page qui a déjà été masquée dans le menu ([#6654](https://github.com/nocobase/nocobase/pull/6654)) par @zhangzhonghe
  - Le formulaire de filtre ne doit pas afficher l'invite "Modifications non enregistrées" ([#6657](https://github.com/nocobase/nocobase/pull/6657)) par @zhangzhonghe
  - Correction du problème d'images d'aperçu masquées ([#6651](https://github.com/nocobase/nocobase/pull/6651)) par @zhangzhonghe
  - Dans le formulaire de filtre, lorsque le bouton de filtre est cliqué, s'il y a des champs qui n'ont pas passé la validation, le filtrage est toujours déclenché ([#6659](https://github.com/nocobase/nocobase/pull/6659)) par @zhangzhonghe
  - L'option "autoriser plusieurs" ne fonctionne pas pour le champ de relation ([#6661](https://github.com/nocobase/nocobase/pull/6661)) par @katherinehhh
  - Dans le bloc de formulaire, la valeur par défaut de la configuration du champ s'affiche d'abord comme la chaîne de variable d'origine, puis disparaît ([#6649](https://github.com/nocobase/nocobase/pull/6649)) par @zhangzhonghe
- **[Champ de collection : Pièce jointe (URL)]** autoriser uniquement les collections de fichiers avec un accès URL public ([#6664](https://github.com/nocobase/nocobase/pull/6664)) par @katherinehhh
- **[Stockage de fichiers : S3(Pro)]**

  - Paramètres individuels baseurl et public, amélioration de l'UX de configuration du stockage S3 Pro par @jiannx
  - Organisation de la langue par @jiannx
- **[Workflow : Approbation]** Prise en charge d'une URL fixe pour les éléments d'approbation dans le centre de tâches par @mytharcher
- **[Gestionnaire de migration]** l'option de saut de sauvegarde automatique devient invalide si la fenêtre contextuelle de variable d'environnement apparaît pendant la migration par @gchust

### [v1.7.0-beta.18](https://www.nocobase.com/en/blog/v1.7.0-beta.18)

*Date de sortie : 2025-04-16*

#### 🎉 Nouvelles fonctionnalités

- **[Champ de collection : Code]** Ajout de l'interface de code par @mytharcher

#### 🚀 Améliorations

- **[create-nocobase-app]** Mise à niveau de certaines dépendances vers les dernières versions ([#6673](https://github.com/nocobase/nocobase/pull/6673)) par @chenos

#### 🐛 Corrections de bugs

- **[client]**

  - champs hérités affichés dans la liste d'affectation des champs de la collection actuelle ([#6666](https://github.com/nocobase/nocobase/pull/6666)) par @katherinehhh
  - problème de style dans la saisie de variable lors du réglage de la valeur par défaut ([#6668](https://github.com/nocobase/nocobase/pull/6668)) par @katherinehhh
- **[build]** la sortie de construction est incorrecte lorsque le plugin dépend de certaines bibliothèques AMD ([#6665](https://github.com/nocobase/nocobase/pull/6665)) par @gchust
- **[Bloc : iframe]** une barre de défilement verticale apparaît lorsque le bloc iframe est réglé sur une hauteur maximale ([#6675](https://github.com/nocobase/nocobase/pull/6675)) par @katherinehhh
- **[Contrôle d'accès]** Correction d'une erreur levée lors de la sérialisation du modèle de rôle dans le cache ([#6674](https://github.com/nocobase/nocobase/pull/6674)) par @mytharcher
- **[Workflow]** Correction d'une erreur de migration levée depuis MySQL ([#6667](https://github.com/nocobase/nocobase/pull/6667)) par @mytharcher
- **[Gestionnaire d'emails]** correction de l'impossibilité de synchroniser, de l'absence d'affichage de l'objet et d'autres petits bugs par @jiannx
