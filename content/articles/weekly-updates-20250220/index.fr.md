---
title: "Mises à jour hebdomadaires de NocoBase : Prise en charge du déclenchement global ou par lots d'événements d'action personnalisée"
description: "Les mises à jour de cette semaine incluent : la prise en charge du déclenchement d'actions personnalisées de manière globale ou par lots, l'extension des champs prédéfinis dans les collections, et plus encore."
---

Résumez les journaux de mise à jour hebdomadaires du produit. Les dernières versions sont disponibles sur [notre blog](https://www.nocobase.com/en/blog/tags/release-notes).

**NocoBase est actuellement mis à jour avec trois branches : `main`, `next` et `develop`.**

![version.png](https://static-docs.nocobase.com/ba5f04e27e99c625cb3822da5df07860.png)

* `main` : La version la plus stable à ce jour, recommandée pour l'installation ;
* `next` : Version bêta, contient les nouvelles fonctionnalités à venir et a été testée préliminairement. Il peut y avoir des problèmes connus ou inconnus. Elle est principalement destinée aux utilisateurs testeurs pour recueillir des retours et optimiser davantage les fonctionnalités. Idéale pour les utilisateurs testeurs qui souhaitent découvrir les nouvelles fonctionnalités tôt et donner leur avis ;
* `develop` : Version alpha, contient le code de fonctionnalité le plus récent, peut être incomplète ou instable, principalement destinée au développement interne et à l'itération rapide. Adaptée aux utilisateurs techniques intéressés par les fonctionnalités de pointe du produit, mais avec des problèmes potentiels et des fonctions incomplètes. Ne pas utiliser en production.

## main

![main.png](https://static-docs.nocobase.com/47a3c71734c1d0f908b51f9ebd53c0ac.png)

### [v1.5.7](https://www.nocobase.com/en/blog/v1.5.7)

*Date de sortie : 2025-02-14*

#### 🚀 Améliorations

- **[Notification : Message dans l'application]** Suppression de la journalisation des erreurs console pour les tentatives de reconnexion SSE. ([#6205](https://github.com/nocobase/nocobase/pull/6205)) par @sheldon66

#### 🐛 Corrections de bugs

- **[client]**

  - Paramètre de glisser-déposer manquant dans la fenêtre modale de création rapide de données liées ([#6201](https://github.com/nocobase/nocobase/pull/6201)) par @katherinehhh
  - Problème de non-application du formatage des nombres de haute précision ([#6202](https://github.com/nocobase/nocobase/pull/6202)) par @katherinehhh
  - Correction d'un problème où l'effacement d'un champ d'association dans un formulaire n'efface pas réellement la valeur du champ lors de la soumission du formulaire ([#5540](https://github.com/nocobase/nocobase/pull/5540)) par @zhangzhonghe
  - Le bloc ne se rafraîchit pas après la soumission du formulaire ([#6206](https://github.com/nocobase/nocobase/pull/6206)) par @zhangzhonghe
  - Valeur de champ liée persistante lors de la soumission après la réinitialisation du champ de relation ([#6207](https://github.com/nocobase/nocobase/pull/6207)) par @katherinehhh
  - Action de mise à jour affichée pour les lignes sans autorisations de mise à jour dans le tableau ([#6204](https://github.com/nocobase/nocobase/pull/6204)) par @katherinehhh
- **[Champ de collection : Tri]** Correction du type de champ de tri non enregistré dans la source de données externe ([#6212](https://github.com/nocobase/nocobase/pull/6212)) par @mytharcher
- **[Authentification]** Problème d'authentification WebSocket ([#6209](https://github.com/nocobase/nocobase/pull/6209)) par @2013xile
- **[Champ de collection : Pièce jointe (URL)]** Correction de l'URL de requête obsolète dans le hook par @mytharcher

### [v1.5.8](https://www.nocobase.com/en/blog/v1.5.8)

*Date de sortie : 2025-02-17*

#### 🐛 Corrections de bugs

- **[client]**

  - Impossible d'ouvrir la fenêtre contextuelle du lien de champ dans une page intégrée ([#6222](https://github.com/nocobase/nocobase/pull/6222)) par @gchust
  - Dans le formulaire d'édition, la valeur du champ d'association affichée ne change pas lorsque le champ associé est mis à jour ([#6210](https://github.com/nocobase/nocobase/pull/6210)) par @Cyx649312038
- **[Mobile]** Les données du menu mobile sont incomplètes dans le tableau de configuration des autorisations ([#6219](https://github.com/nocobase/nocobase/pull/6219)) par @zhangzhonghe

### [v1.5.9](https://www.nocobase.com/en/blog/v1.5.9)

*Date de sortie : 2025-02-17*

#### 🐛 Corrections de bugs

- **[client]**

  - Problème de barre de défilement horizontale sur la page ([#6232](https://github.com/nocobase/nocobase/pull/6232)) par @katherinehhh
  - Lors de la fermeture de la sous-page, plusieurs requêtes de données de bloc sont déclenchées ([#6233](https://github.com/nocobase/nocobase/pull/6233)) par @zhangzhonghe
  - Clé unique manquante pour le sous-menu des champs d'association dans l'interface utilisateur ([#6230](https://github.com/nocobase/nocobase/pull/6230)) par @gchust
- **[Visualisation de données]** Une erreur de filtrage se produit lorsque le nom de la source de données contient un trait d'union `-` ([#6231](https://github.com/nocobase/nocobase/pull/6231)) par @2013xile

### [v1.5.10](https://www.nocobase.com/en/blog/v1.5.10)

*Date de sortie : 2025-02-18*

#### 🚀 Améliorations

- **[Champ de collection : Markdown (Vditor)]** Le CDN Vditor utilise les ressources locales ([#6229](https://github.com/nocobase/nocobase/pull/6229)) par @chenos

#### 🐛 Corrections de bugs

- **[Workflow : Nœud de boucle]** Correction de la sortie anticipée de la boucle lorsque le nœud est en attente ([#6236](https://github.com/nocobase/nocobase/pull/6236)) par @mytharcher

## next

![next.png](https://static-docs.nocobase.com/8ed17a0f08cc585018f6de6c8b13947d.png)

### [v1.6.0-beta.7](https://www.nocobase.com/en/blog/v1.6.0-beta.7)

*Date de sortie : 2025-02-14*

#### 🐛 Corrections de bugs

- **[Authentification]** Amélioration de la logique de mise à jour concurrente des jetons et de gestion des erreurs d'authentification. ([#6208](https://github.com/nocobase/nocobase/pull/6208)) par @sheldon66

### [v1.6.0-beta.8](https://www.nocobase.com/en/blog/v1.6.0-beta.8)

*Date de sortie : 2025-02-15*

#### 🐛 Corrections de bugs

- **[WeCom]** Problème de connexion automatique dans le client WeCom par @2013xile

## develop

![develop.png](https://static-docs.nocobase.com/7fcdd9456a17286d8a439eee52bcb8d2.png)

### [v1.6.0-alpha.26](https://www.nocobase.com/en/blog/v1.6.0-alpha.26)

*Date de sortie : 2025-02-16*

#### 🎉 Nouvelles fonctionnalités

- **[client]** Prise en charge de l'extension des opérateurs de filtre frontend ([#6085](https://github.com/nocobase/nocobase/pull/6085)) par @katherinehhh
- **[Workflow : Événement d'action personnalisée]** Prise en charge du déclenchement d'événements d'action personnalisée pour des enregistrements globaux ou par lots par @mytharcher

#### 🚀 Améliorations

- **[Workflow]** Déplacement des paramètres de liaison de workflow vers le plugin ([#6143](https://github.com/nocobase/nocobase/pull/6143)) par @mytharcher

### [v1.6.0-alpha.27](https://www.nocobase.com/en/blog/v1.6.0-alpha.27)

*Date de sortie : 2025-02-16*

#### 🎉 Nouvelles fonctionnalités

- **[client]** Prise en charge de l'extension des champs prédéfinis dans les collections ([#6183](https://github.com/nocobase/nocobase/pull/6183)) par @katherinehhh
- **[Calendrier]** Prise en charge de l'extension des champs optionnels pour les plugins Kanban, Calendrier et Champ de formule ([#6076](https://github.com/nocobase/nocobase/pull/6076)) par @katherinehhh

## À propos de NocoBase

NocoBase est une plateforme no-code privée et open source offrant un contrôle total et une évolutivité infinie. Elle permet aux équipes de s'adapter rapidement aux changements tout en réduisant considérablement les coûts. Évitez des années de développement et des investissements substantiels en déployant NocoBase en quelques minutes.

<iframe src="https://cdn.embedly.com/widgets/media.html?src=https%3A%2F%2Fwww.youtube.com%2Fembed%2FhOM2MyzHn9I&display_name=YouTube&url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DhOM2MyzHn9I&image=http%3A%2F%2Fi.ytimg.com%2Fvi%2FhOM2MyzHn9I%2Fhqdefault.jpg&key=a19fcc184b9711e1b4764040d3dc5c07&type=text%2Fhtml&schema=youtube" allowfullscreen="" frameborder="0" height="480" width="854" title="" class="dc n pc cp bh" scrolling="no"></iframe>

Découvrez NocoBase en 3 minutes !

## 👇 Obtenez NocoBase

[**Page d'accueil**](https://www.nocobase.com/)

[**Démo**](https://demo.nocobase.com/new)

[**Documentation**](https://docs.nocobase.com/)

[**GitHub**](https://github.com/nocobase/nocobase)
