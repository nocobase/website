---
title: "Mises à jour hebdomadaires de NocoBase : Prise en charge de l'importation et de l'exportation de volumes de données à grande échelle"
description: "Les mises à jour de cette semaine incluent : la prise en charge de l'importation et de l'exportation de volumes de données à grande échelle, et plus encore."
---

Résumez les journaux de mise à jour hebdomadaires du produit. Les dernières versions sont disponibles sur [notre blog](https://www.nocobase.com/en/blog/tags/release-notes).

**NocoBase est actuellement mis à jour avec trois branches : `main`, `next` et `develop`.**

![version.png](https://static-docs.nocobase.com/ba5f04e27e99c625cb3822da5df07860.png)

* `main` : La version la plus stable à ce jour, recommandée pour l'installation ;
* `next` : Version bêta, contient les nouvelles fonctionnalités à venir et a été testée préliminairement. Il peut y avoir des problèmes connus ou inconnus. Elle est principalement destinée aux utilisateurs testeurs pour recueillir des retours et optimiser davantage les fonctionnalités. Idéale pour les utilisateurs testeurs qui souhaitent découvrir les nouvelles fonctionnalités tôt et donner leur avis ;
* `develop` : Version alpha, contient le code de fonctionnalité le plus récent, peut être incomplète ou instable, principalement destinée au développement interne et à l'itération rapide. Adaptée aux utilisateurs techniques intéressés par les fonctionnalités de pointe du produit, mais avec des problèmes potentiels et des fonctions incomplètes. Ne pas utiliser en production.

## main

![main.png](https://static-docs.nocobase.com/47a3c71734c1d0f908b51f9ebd53c0ac.png)

### [v1.4.18](https://www.nocobase.com/en/blog/v1.4.18)

*Date de sortie : 2025-01-06*

#### 🚀 Améliorations

- **[Workflow : kit de test]** Correction de la précision des champs de date dans la collection de test ([#5983](https://github.com/nocobase/nocobase/pull/5983)) par @mytharcher

#### 🐛 Corrections de bugs

- **[client]**

  - Correction du problème de barre de défilement lors du réglage de la hauteur totale pour un bloc de données dans une sous-page ([#5989](https://github.com/nocobase/nocobase/pull/5989)) par @katherinehhh
  - Correction du problème d'alignement lorsque les boutons de la colonne d'action sont masqués ([#5987](https://github.com/nocobase/nocobase/pull/5987)) par @katherinehhh
  - Correction du problème de suppression par lots des champs système et généraux dans le gestionnaire de collections ([#5988](https://github.com/nocobase/nocobase/pull/5988)) par @katherinehhh
  - Correction du problème où la variable 'paramètres de recherche d'URL' ne fonctionnait pas sur la page mobile ([#5968](https://github.com/nocobase/nocobase/pull/5968)) par @Cyx649312038
- **[serveur]** Correction d'un plantage potentiel de l'application lors de la restauration d'une sauvegarde ([#5981](https://github.com/nocobase/nocobase/pull/5981)) par @gchust
- **[Mobile]** Correction du problème des boutons du bas masqués sur les appareils mobiles ([#5991](https://github.com/nocobase/nocobase/pull/5991)) par @zhangzhonghe
- **[Visualisation de données]** Correction du problème où les "variables de la fenêtre contextuelle actuelle" utilisées sur les graphiques dans les sous-pages devenaient vides après avoir actualisé la page ([#5984](https://github.com/nocobase/nocobase/pull/5984)) par @2013xile
- **[Bloc : Kanban]** Correction du chargement des champs de la collection parente dans le kanban ([#5985](https://github.com/nocobase/nocobase/pull/5985)) par @katherinehhh

### [v1.4.19](https://www.nocobase.com/en/blog/v1.4.19)

*Date de sortie : 2025-01-06*

#### 🐛 Corrections de bugs

- **[client]** Correction du problème où le sélecteur de plage de dates dans le formulaire/action de filtre n'affichait pas le sélecteur d'heure lorsque showTime était défini ([#5994](https://github.com/nocobase/nocobase/pull/5994)) par @katherinehhh

### [v1.4.20](https://www.nocobase.com/en/blog/v1.4.20)

*Date de sortie : 2025-01-09*

#### 🎉 Nouvelles fonctionnalités

- **[client]** Ajout de la méthode app.getHref() ([#6019](https://github.com/nocobase/nocobase/pull/6019)) par @chenos

#### 🚀 Améliorations

- **[client]**

  - Autoriser le tri des workflows lors de la liaison à un bouton d'action ([#6017](https://github.com/nocobase/nocobase/pull/6017)) par @mytharcher
  - Modification des liens de référence des évaluateurs vers le site de documentation ([#6021](https://github.com/nocobase/nocobase/pull/6021)) par @mytharcher
  - Prise en charge de maxTagCount: 'responsive' dans le composant de liste déroulante à sélection multiple ([#6007](https://github.com/nocobase/nocobase/pull/6007)) par @katherinehhh
  - Définition de l'heure de fin par défaut pour le composant de plage horaire dans le bloc de filtre à 23:59:59" ([#6012](https://github.com/nocobase/nocobase/pull/6012)) par @katherinehhh
- **[Action : Modification par lots]** Refonte du bouton de soumission du formulaire de modification en masse : suppression de l'affectation de champ et de la règle de liaison ([#6008](https://github.com/nocobase/nocobase/pull/6008)) par @katherinehhh

#### 🐛 Corrections de bugs

- **[client]**

  - Correction du problème de validation obligatoire ne fonctionnant pas après la suppression de données dans l'éditeur de texte enrichi ([#6006](https://github.com/nocobase/nocobase/pull/6006)) par @katherinehhh
  - Correction du problème de désalignement lorsque les boutons de la colonne d'action sont masqués ([#6014](https://github.com/nocobase/nocobase/pull/6014)) par @katherinehhh
  - Correction du problème du bouton Créer des collections lors du clic sur l'onglet Collections dans la page API REST ([#5992](https://github.com/nocobase/nocobase/pull/5992)) par @katherinehhh
  - Correction du problème où targetKey ne pouvait pas sélectionner le champ NanoID dans un un-à-plusieurs ([#5999](https://github.com/nocobase/nocobase/pull/5999)) par @katherinehhh
  - Correction du style du bouton de paramètres dans le thème compact ([#6001](https://github.com/nocobase/nocobase/pull/6001)) par @katherinehhh
  - Correction du style du composant de liste ([#5998](https://github.com/nocobase/nocobase/pull/5998)) par @mytharcher
  - Correction du problème où les en-têtes inclus dans les requêtes client étaient écrasés ([#6009](https://github.com/nocobase/nocobase/pull/6009)) par @2013xile
  - Correction de foreignKey, targetKey et sourceKey pour prendre en charge le filtrage par caractères chinois ([#5997](https://github.com/nocobase/nocobase/pull/5997)) par @katherinehhh
- **[Action : Importer des enregistrements]** Correction de l'importation avec des associations plusieurs-à-plusieurs utilisant une clé cible différente ([#6024](https://github.com/nocobase/nocobase/pull/6024)) par @chareice
- **[Bloc : Carte]** Correction du champ de carte dans le bloc de détail qui doit être rendu comme un bloc de carte ([#6010](https://github.com/nocobase/nocobase/pull/6010)) par @katherinehhh
- **[Intégrer NocoBase]** Le jeton pour l'intégration entre en conflit avec l'authentification par @chenos

## next

![next.png](https://static-docs.nocobase.com/8ed17a0f08cc585018f6de6c8b13947d.png)

### v1.5.0-beta.20

*Date de sortie : 2024-12-31*

#### 🎉 Nouvelles fonctionnalités

- **[[Action : Importer des enregistrements (Pro)](https://docs.nocobase.com/handbook/action-import-pro)]** : Amélioration des capacités d'importation de données avec prise en charge des importations asynchrones, des importations de millions de lignes, de l'identification et du traitement des données en double, des mises à jour de données et des déclencheurs de workflow.
- **[[Action : Exporter des enregistrements (Pro)](https://docs.nocobase.com/handbook/action-export-pro)]** : Amélioration des capacités d'exportation de données avec prise en charge des exportations asynchrones, des exportations de millions de lignes et des exportations de pièces jointes.

### [v1.5.0-beta.22](https://www.nocobase.com/en/blog/v1.5.0-beta.22)

*Date de sortie : 2025-01-04*

#### 🐛 Corrections de bugs

- **[client]** Correction du problème où les sous-tableaux vides affichaient une ligne de données vides sur iOS ([#5990](https://github.com/nocobase/nocobase/pull/5990)) par @zhangzhonghe

### [v1.5.0-beta.26](https://www.nocobase.com/en/blog/v1.5.0-beta.26)

*Date de sortie : 2025-01-08*

#### 🐛 Corrections de bugs

- **[client]** Correction du problème où les lignes du tableau ne pouvaient pas être glissées et triées ([#6013](https://github.com/nocobase/nocobase/pull/6013)) par @zhangzhonghe

## develop

![develop.png](https://static-docs.nocobase.com/7fcdd9456a17286d8a439eee52bcb8d2.png)

### [v1.6.0-alpha.8](https://www.nocobase.com/en/blog/v1.6.0-alpha.8)

*Date de sortie : 2025-01-02*

#### 🎉 Nouvelles fonctionnalités

- **[Workflow : Nœud manuel]** Ajout d'une entrée globale fixe pour tous les types de tâches de workflow ([#5858](https://github.com/nocobase/nocobase/pull/5858)) par @mytharcher
- **[Politique de mot de passe]** Ajout d'un nouveau plugin : Politique de mot de passe, utilisé pour définir les règles de mot de passe et la politique de verrouillage de connexion pour tous les utilisateurs par @2013xile
  Référence : [Politique de mot de passe et verrouillage utilisateur](https://docs.nocobase.com/handbook/password-policy)

#### 🚀 Améliorations

- **[client]** Ajout d'un mot-clé de filtre "Sécurité" pour le gestionnaire de plugins ([#5977](https://github.com/nocobase/nocobase/pull/5977)) par @2013xile
- **[Workflow : Événement d'action personnalisée]** Modification de l'API d'exécution manuelle par @mytharcher

#### 🐛 Corrections de bugs

- **[Workflow]** Correction du problème où `onChange` ne fonctionnait pas dans le composant `WorkflowVariableWrapper` ([#5964](https://github.com/nocobase/nocobase/pull/5964)) par @mytharcher

### [v1.6.0-alpha.9](https://www.nocobase.com/en/blog/v1.6.0-alpha.9)

*Date de sortie : 2025-01-06*

#### 🚀 Améliorations

- **[Mobile]** Prise en charge de l'affichage du numéro de page actuel pour le tableau sur mobile ([#5946](https://github.com/nocobase/nocobase/pull/5946)) par @katherinehhh
- **[Gestionnaire de fichiers]** Prise en charge d'autres plugins de stockage ([#5930](https://github.com/nocobase/nocobase/pull/5930)) par @jiannx

### [v1.6.0-alpha.10](https://www.nocobase.com/en/blog/v1.6.0-alpha.10)

*Date de sortie : 2025-01-08*

#### 🎉 Nouvelles fonctionnalités

- **[Variables d'environnement]** Prise en charge de la configuration de variables d'environnement et de secrets dynamiques ([#5966](https://github.com/nocobase/nocobase/pull/5966)) par @katherinehhh

#### 🚀 Améliorations

- **[client]** Ajout de plus d'icônes au IconPicker ([#5996](https://github.com/nocobase/nocobase/pull/5996)) par @katherinehhh
- **[Champ de collection : Pièce jointe (URL)]** Filtrage des collections de fichiers associées à plugin-file-storage-s3-pro. par @jiannx

#### 🐛 Corrections de bugs

- **[Champ de collection : Pièce jointe (URL)]** Correction de l'API modifiée dans le hook du composant par @mytharcher

## À propos de NocoBase

NocoBase est une plateforme no-code privée et open source offrant un contrôle total et une évolutivité infinie. Elle permet aux équipes de s'adapter rapidement aux changements tout en réduisant considérablement les coûts. Évitez des années de développement et des investissements substantiels en déployant NocoBase en quelques minutes.

<iframe src="https://cdn.embedly.com/widgets/media.html?src=https%3A%2F%2Fwww.youtube.com%2Fembed%2FhOM2MyzHn9I&display_name=YouTube&url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DhOM2MyzHn9I&image=http%3A%2F%2Fi.ytimg.com%2Fvi%2FhOM2MyzHn9I%2Fhqdefault.jpg&key=a19fcc184b9711e1b4764040d3dc5c07&type=text%2Fhtml&schema=youtube" allowfullscreen="" frameborder="0" height="480" width="854" title="" class="dc n pc cp bh" scrolling="no"></iframe>

Découvrez NocoBase en 3 minutes !

## 👇 Obtenez NocoBase

[**Page d'accueil**](https://www.nocobase.com/)

[**Démo**](https://demo.nocobase.com/new)

[**Documentation**](https://docs.nocobase.com/)

[**GitHub**](https://github.com/nocobase/nocobase)
