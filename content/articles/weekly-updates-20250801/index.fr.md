---
title: "Mises à jour hebdomadaires de NocoBase : Optimisations et corrections de bugs"
description: "Les mises à jour de cette semaine incluent : la prise en charge de la configuration de la limite de taille du corps de la requête via une variable d'environnement, la prise en charge de l'aperçu des fichiers Office via l'aperçu en direct de Microsoft, et d'autres améliorations."
---

Résumez les journaux de mise à jour hebdomadaires du produit. Les dernières versions sont disponibles sur [notre blog](https://www.nocobase.com/en/blog/timeline).

**NocoBase est actuellement mis à jour avec trois branches : `main`, `next` et `develop`.**

![version.png](https://static-docs.nocobase.com/ba5f04e27e99c625cb3822da5df07860.png)

* `main` : La version la plus stable à ce jour, recommandée pour l'installation ;
* `next` : Version bêta, contient les nouvelles fonctionnalités à venir et a été testée préliminairement. Il peut y avoir des problèmes connus ou inconnus. Elle est principalement destinée aux utilisateurs testeurs pour recueillir des commentaires et optimiser davantage les fonctions. Idéale pour les utilisateurs testeurs qui souhaitent découvrir les nouvelles fonctionnalités en avant-première et donner leur avis ;
* `develop` : Version alpha, contient le code de fonctionnalité le plus récent, peut être incomplète ou instable, principalement destinée au développement interne et à l'itération rapide. Adaptée aux utilisateurs techniques intéressés par les fonctionnalités de pointe du produit, mais avec des problèmes potentiels et des fonctions incomplètes. Ne pas utiliser en production.

## main

![main.png](https://static-docs.nocobase.com/47a3c71734c1d0f908b51f9ebd53c0ac.png)

### [v1.8.11](https://www.nocobase.com/en/blog/v1.8.11)

*Date de sortie : 2025-07-31*

#### 🎉 Nouvelles fonctionnalités

- **[Aperçu des fichiers Office]** Prise en charge de l'aperçu des fichiers Office via l'aperçu en direct de Microsoft ([#7300](https://github.com/nocobase/nocobase/pull/7300)) par @mytharcher

#### 🚀 Améliorations

- **[client]** Ne pas fermer automatiquement le menu après la sélection ([#7252](https://github.com/nocobase/nocobase/pull/7252)) par @kerwin612
- **[Notification : Message dans l'application]** Passage du message dans l'application de SSE à WebSocket ([#7302](https://github.com/nocobase/nocobase/pull/7302)) par @mytharcher
- **[Workflow]** Réduire la quantité de tâches à charger lors de la préparation de l'exécution ([#7284](https://github.com/nocobase/nocobase/pull/7284)) par @mytharcher
- **[Auth : DingTalk]** Dans le client DingTalk, définir le titre de la barre de navigation sur une chaîne vide au lieu d'afficher « Chargement… » par @2013xile

#### 🐛 Corrections de bugs

- **[client]**

  - Correction du problème d'expansion du tableau arborescent ([#7309](https://github.com/nocobase/nocobase/pull/7309)) par @zhangzhonghe
  - Correction du comportement inattendu dans le tri par glisser-déposer des lignes de tableau ([#6959](https://github.com/nocobase/nocobase/pull/6959)) par @ChimingLiu
  - Correction du problème de boucle infinie lors de l'analyse des valeurs par défaut des champs ([#7301](https://github.com/nocobase/nocobase/pull/7301)) par @zhangzhonghe
  - Correction du problème d'affichage anormal du champ de date dans la fenêtre contextuelle lors de la configuration du sélecteur de données pour les champs de relation dans le formulaire de filtre ([#7290](https://github.com/nocobase/nocobase/pull/7290)) par @katherinehhh
- **[Workflow : Nœud de requête HTTP]** Correction d'un bug de condition de concurrence ([#7310](https://github.com/nocobase/nocobase/pull/7310)) par @mytharcher
- **[Workflow]** Correction du problème d'ID BigInt dans MySQL lors de la sauvegarde d'une tâche ([#7292](https://github.com/nocobase/nocobase/pull/7292)) par @mytharcher
- **[Action : Exporter les enregistrements]** Correction du formatage incorrect des champs de relation imbriqués lors de l'exportation vers Excel. ([#7277](https://github.com/nocobase/nocobase/pull/7277)) par @aaaaaajie
- **[Source de données : SQL Server externe]** Correction du format de stockage incohérent pour les champs datetime MSSQL (sans fuseau horaire) provenant de sources de données externes par @aaaaaajie
- **[Workflow : Approbation]** Correction de l'erreur générée par la sélection du responsable dans une source de données externe par @mytharcher

## develop

![develop.png](https://static-docs.nocobase.com/7fcdd9456a17286d8a439eee52bcb8d2.png)

### [v1.9.0-alpha.4](https://www.nocobase.com/en/blog/v1.9.0-alpha.4)

*Date de sortie : 2025-08-01*

#### 🎉 Nouvelles fonctionnalités

- **[serveur]** Prise en charge de la configuration de la limite de taille du corps de la requête via une variable d'environnement ([#7273](https://github.com/nocobase/nocobase/pull/7273)) par @aaaaaajie
- **[client]** Les blocs de tableau prennent en charge l'ajout d'un bouton « Paramètres des colonnes » pour configurer l'ordre et la visibilité des colonnes ([#7204](https://github.com/nocobase/nocobase/pull/7204)) par @kerwin612
- **[Aperçu des fichiers Office]** Prise en charge de l'aperçu des fichiers Office via l'aperçu en direct de Microsoft ([#7300](https://github.com/nocobase/nocobase/pull/7300)) par @mytharcher
- **[Source de données : Principale]**

  - Prise en charge de la lecture des tables à partir de la source de données principale ([#7238](https://github.com/nocobase/nocobase/pull/7238)) par @aaaaaajie
- **[Workflow : Nœud parallèle]** Ajout du mode « Tout réglé » pour le nœud parallèle ([#7263](https://github.com/nocobase/nocobase/pull/7263)) par @mytharcher
- **[Auth : SAML 2.0]** Prise en charge de la redirection automatique vers l'URL SSO lorsque l'utilisateur n'est pas authentifié par @2013xile
- **[Adaptateur de file d'attente Redis]** Ajout d'un adaptateur Redis pour la file d'attente d'événements par @mytharcher

#### 🚀 Améliorations

- **[client]** Ne pas fermer automatiquement le menu après la sélection ([#7252](https://github.com/nocobase/nocobase/pull/7252)) par @kerwin612
- **[serveur]** Rendre la file d'attente mémoire simultanée disponible lorsque le traitement des éléments n'est pas complet ([#7267](https://github.com/nocobase/nocobase/pull/7267)) par @mytharcher
- **[base de données]** Active automatiquement la pagination simple lorsque l'ensemble de données dépasse un seuil ([#7227](https://github.com/nocobase/nocobase/pull/7227)) par @aaaaaajie
- **[Notification : Message dans l'application]** Passage du message dans l'application de SSE à WebSocket ([#7302](https://github.com/nocobase/nocobase/pull/7302)) par @mytharcher
- **[Workflow]**

  - Réduire la quantité de tâches à charger lors de la préparation de l'exécution ([#7284](https://github.com/nocobase/nocobase/pull/7284)) par @mytharcher
  - Ajout d'une constante de type json pour la variable de test ([#7274](https://github.com/nocobase/nocobase/pull/7274)) par @mytharcher
- **[Intégration IA]** Suppression de `await` pour l'appel de `saveJob` ([#7275](https://github.com/nocobase/nocobase/pull/7275)) par @mytharcher
- **[Workflow : Nœud manuel]** storePopupContext prend en charge la sauvegarde du contexte par défaut ([#7264](https://github.com/nocobase/nocobase/pull/7264)) par @zhangzhonghe
- **[Workflow : Calcul JSON]** Rendre le nœud de requête JSON testable par @mytharcher
- **[Adaptateur de file d'attente Redis]** Rendre la file d'attente simultanée disponible lorsque le traitement des éléments n'est pas complet pour l'adaptateur Redis par @mytharcher
- **[Auth : DingTalk]** Dans le client DingTalk, définir le titre de la barre de navigation sur une chaîne vide au lieu d'afficher « Chargement… » par @2013xile

#### 🐛 Corrections de bugs

- **[utils]** Gestion incorrecte du fuseau horaire pour parseDate ([#7318](https://github.com/nocobase/nocobase/pull/7318)) par @katherinehhh
- **[client]**

  - Correction de l'aperçu d'un élément de fichier sur une URL nulle ([#7315](https://github.com/nocobase/nocobase/pull/7315)) par @mytharcher
  - Ajout de l'URL complète au fichier local lors de l'aperçu ([#7314](https://github.com/nocobase/nocobase/pull/7314)) par @mytharcher
  - Correction du problème d'expansion du tableau arborescent ([#7309](https://github.com/nocobase/nocobase/pull/7309)) par @zhangzhonghe
  - Correction du comportement inattendu dans le tri par glisser-déposer des lignes de tableau ([#6959](https://github.com/nocobase/nocobase/pull/6959)) par @ChimingLiu
  - Correction du problème de boucle infinie lors de l'analyse des valeurs par défaut des champs ([#7301](https://github.com/nocobase/nocobase/pull/7301)) par @zhangzhonghe
  - Problème d'affichage du champ de date dans la fenêtre contextuelle du sélecteur de données du champ de relation du formulaire de filtre ([#7290](https://github.com/nocobase/nocobase/pull/7290)) par @katherinehhh
  - La recherche floue ne fonctionne pas dans le champ de relation de sélection lors de l'utilisation d'une formule comme champ de titre ([#7280](https://github.com/nocobase/nocobase/pull/7280)) par @katherinehhh
  - Variable d'objet actuel manquante dans les règles de liaison de sous-tableau ([#7266](https://github.com/nocobase/nocobase/pull/7266)) par @katherinehhh
  - Correction du problème de rendu incorrect des champs Markdown dans la vue détaillée. ([#7257](https://github.com/nocobase/nocobase/pull/7257)) par @aaaaaajie
  - Après les modifications de champ, les champs d'association qui dépendent de ce champ n'ont pas effacé leurs valeurs ([#7262](https://github.com/nocobase/nocobase/pull/7262)) par @zhangzhonghe
  - Problème d'affichage lorsque des variables de date obsolètes sont utilisées dans les champs de date des données historiques ([#7253](https://github.com/nocobase/nocobase/pull/7253)) par @katherinehhh
  - Le paramètre du champ de titre du sélecteur de données est invalide ([#7251](https://github.com/nocobase/nocobase/pull/7251)) par @zhangzhonghe
- **[base de données]**

  - Résolution de l'échec de la pagination simple automatique causé par la convention de dénomination des tables. ([#7256](https://github.com/nocobase/nocobase/pull/7256)) par @aaaaaajie
  - Correction de l'échec lors de l'exportation de grands ensembles de données depuis PostgreSQL ([#7228](https://github.com/nocobase/nocobase/pull/7228)) par @aaaaaajie
  - Correction du problème où le tri par clé primaire par défaut provoque un échec de chargement de la liste lors de l'utilisation d'une source de données MSSQL externe dans un bloc de tableau. ([#7259](https://github.com/nocobase/nocobase/pull/7259)) par @aaaaaajie
- **[auth]** Correction du problème où un `secret` vide dans la configuration de la sous-application empêche la connexion ([#7239](https://github.com/nocobase/nocobase/pull/7239)) par @2013xile
- **[Gestionnaire de fichiers]** Correction de l'autorisation du champ de stockage ([#7316](https://github.com/nocobase/nocobase/pull/7316)) par @mytharcher
- **[Workflow]**

  - Correction du résultat `undefined` lors de la sortie du processeur ([#7317](https://github.com/nocobase/nocobase/pull/7317)) par @mytharcher
  - Correction du problème d'ID BigInt dans MySQL lors de la sauvegarde d'une tâche ([#7292](https://github.com/nocobase/nocobase/pull/7292)) par @mytharcher
  - Correction de la mauvaise version de la dépendance ([#7258](https://github.com/nocobase/nocobase/pull/7258)) par @mytharcher
- **[Workflow : Nœud de requête HTTP]** Correction d'un bug de condition de concurrence ([#7310](https://github.com/nocobase/nocobase/pull/7310)) par @mytharcher
- **[Action : Exporter les enregistrements]** Correction du formatage incorrect des champs de relation imbriqués lors de l'exportation vers Excel. ([#7277](https://github.com/nocobase/nocobase/pull/7277)) par @aaaaaajie
- **[Gestionnaire de sources de données]** Correction de la préservation des attributs de la source de données externe dans la configuration de la collection ([#7249](https://github.com/nocobase/nocobase/pull/7249)) par @aaaaaajie
- **[Action : Modification par lot]** Impossible d'effectuer une modification par lot et une mise à jour par lot dans le sélecteur de données ([#7250](https://github.com/nocobase/nocobase/pull/7250)) par @zhangzhonghe
- **[Source de données : Oracle externe]** Correction de la préservation des attributs de la source de données externe dans la configuration de la collection par @aaaaaajie
- **[Source de données : SQL Server externe]** Correction du format de stockage incohérent pour les champs datetime MSSQL (sans fuseau horaire) provenant de sources de données externes par @aaaaaajie
- **[Workflow : Sous-flux]** Correction du flux suspendu par @mytharcher
- **[Workflow : Approbation]**

  - Correction de l'erreur générée par la sélection du responsable dans une source de données externe par @mytharcher
  - L'URL du bouton Lien pointe vers une fenêtre contextuelle sur la page actuelle, mais son clic affiche une erreur 404 par @zhangzhonghe
- **[Gestionnaire d'e-mails]**

  - ajout du champ rawId pour l'optimisation des performances par @jiannx
  - l'attribut ref dans le html provoque une exception de rendu par @jiannx
  - la relation de collection des messages et des étiquettes est exceptionnelle sous mysql par @jiannx
