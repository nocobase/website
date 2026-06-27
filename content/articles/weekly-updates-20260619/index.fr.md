---
title: "Mises à jour hebdomadaires｜Ajout du formulaire de configuration de stockage vectoriel externe pour les bases de connaissances IA"
description: "Ceci est un résumé des mises à jour et améliorations des fonctionnalités de NocoBase du 12 au 21 juin 2026."
---

Résumez les journaux de mise à jour hebdomadaires du produit. Les dernières versions sont consultables sur [notre blog](https://www.nocobase.com/en/blog/timeline).

**NocoBase est actuellement mis à jour avec trois branches : `main`, `next` et `develop`.**

![version.png](https://static-docs.nocobase.com/ba5f04e27e99c625cb3822da5df07860.png)

* `main` : La version la plus stable à ce jour, recommandée pour l'installation ;
* `next` : Version bêta, contient les nouvelles fonctionnalités à venir et a été testée de manière préliminaire. Il peut y avoir des problèmes connus ou inconnus. Elle est principalement destinée aux utilisateurs de test pour recueillir des retours et optimiser davantage les fonctionnalités. Idéale pour les utilisateurs de test qui souhaitent découvrir les nouvelles fonctionnalités en avant-première et donner leur avis ;
* `develop` : Version alpha, contient le code de fonctionnalité le plus récent, peut être incomplète ou instable, principalement destinée au développement interne et à l'itération rapide. Adaptée aux utilisateurs techniques intéressés par les fonctionnalités de pointe du produit, mais avec des problèmes potentiels et des fonctions incomplètes. Ne pas utiliser en production.

## main

![main.png](https://static-docs.nocobase.com/47a3c71734c1d0f908b51f9ebd53c0ac.png)

### [v2.1.9](https://www.nocobase.com/en/blog/v2.1.9)

*Date de sortie : 2026-06-20*

### 🚀 Améliorations

- **[client-v2]** Ajout d'une option de valeur de remplacement pour les paramètres de valeur de champ. ([#9578](https://github.com/nocobase/nocobase/pull/9578)) par @gchust

### 🐛 Corrections de bugs

- **[client-v2]**

  - Correction des boutons de déclencheur de workflow d'action personnalisée qui envoyaient le JSON de contexte personnalisé sous une propriété `values` supplémentaire ou sous forme de chaîne sérialisée. ([#9815](https://github.com/nocobase/nocobase/pull/9815)) par @mytharcher
  - Correction d'un problème où la configuration d'une valeur de champ d'association comme valeur fixe ou valeur par défaut ne prenait pas effet. ([#9820](https://github.com/nocobase/nocobase/pull/9820)) par @gchust
- **[auth]** Les données de mot de passe crypté ne sont plus incluses dans les réponses de statut de connexion ([#9836](https://github.com/nocobase/nocobase/pull/9836)) par @2013xile
- **[app]** Ignorer les currentScript non liés lors de la déduction du chemin public du plugin ([#9839](https://github.com/nocobase/nocobase/pull/9839)) par @chenos
- **[Modèles d'interface utilisateur]** Correction du contexte par défaut incorrect pour ctx.openview. ([#9811](https://github.com/nocobase/nocobase/pull/9811)) par @gchust

### [v2.1.8](https://www.nocobase.com/en/blog/v2.1.8)

*Date de sortie : 2026-06-18*

### 🐛 Corrections de bugs

- **[ai]**

  - Verrouillage de `@langchain/openai` aux mises à jour de niveau correctif pour les packages AI. ([#9829](https://github.com/nocobase/nocobase/pull/9829)) par @cgyrock
  - Correction de la résolution de dépendance LangChain incompatible pour les plugins AI. ([#9831](https://github.com/nocobase/nocobase/pull/9831)) par @cgyrock
- **[IA : Base de connaissances]**

  - Correction des messages d'erreur peu clairs lors de l'activation du plugin de base de connaissances IA sans que le plugin IA soit disponible. par @cgyrock
  - Correction de la résolution de dépendance LangChain incompatible pour le plugin de base de connaissances IA. par @cgyrock

### [v2.1.7](https://www.nocobase.com/en/blog/v2.1.7)

*Date de sortie : 2026-06-18*

### 🎉 Nouvelles fonctionnalités

- **[Gestionnaire de sauvegarde]** Prise en charge de la sauvegarde et de la restauration pour KingBase en tant que base de données principale ([#9791](https://github.com/nocobase/nocobase/pull/9791)) par @2013xile
- **[Gestionnaire de migration]** Prise en charge des migrations pour KingBase en tant que base de données principale. par @2013xile

### 🚀 Améliorations

- **[IA : Base de connaissances]** Amélioration de la récupération et de la documentation de la base de connaissances IA. ([#9765](https://github.com/nocobase/nocobase/pull/9765)) par @cgyrock
- **[cli]** Ajout d'une version de schéma de configuration env ([#9782](https://github.com/nocobase/nocobase/pull/9782)) par @chenos
- **[Workflow]** Stabilisation du test des options de mise à jour ([#9773](https://github.com/nocobase/nocobase/pull/9773)) par @mytharcher
- **[Gestionnaire de fichiers]** Amélioration des aperçus PDF : les fichiers PDF d'origine croisée utilisent désormais la visionneuse native du navigateur, tandis que les fichiers PDF de même origine continuent d'utiliser PDF.js. ([#9796](https://github.com/nocobase/nocobase/pull/9796)) par @mytharcher
- **[Gestionnaire de sauvegarde]** Les tables dont le `dataCategory` de la collection est marqué comme `'runtime'` sont désormais automatiquement exclues des sauvegardes. ([#9804](https://github.com/nocobase/nocobase/pull/9804)) par @cgyrock
- **[IA : Base de connaissances]** Amélioration de la segmentation des documents de la base de connaissances IA, de la gestion des segments, des tests de correspondance et de la prise en charge des nœuds de workflow de documents. par @cgyrock

### 🐛 Corrections de bugs

- **[client-v2]**

  - Correction d'un problème où la soumission d'un formulaire affichait un message incorrect lorsqu'un sous-formulaire contenait un sous-tableau. ([#9807](https://github.com/nocobase/nocobase/pull/9807)) par @gchust
  - Correction d'un problème où les flux d'événements sur les colonnes de sous-tableau s'exécutaient de manière incorrecte. ([#9821](https://github.com/nocobase/nocobase/pull/9821)) par @gchust
  - Suppression de `updateAssociationValues` inattendu des champs d'association ([#9812](https://github.com/nocobase/nocobase/pull/9812)) par @katherinehhh
  - Correction des options Oui/Non non traduites dans les listes déroulantes de cases à cocher du formulaire de filtre v2. ([#9792](https://github.com/nocobase/nocobase/pull/9792)) par @katherinehhh
  - Correction du problème où les paramètres de flux d'événements ne pouvaient pas être mis à jour après avoir enregistré un bloc en tant que modèle. ([#9585](https://github.com/nocobase/nocobase/pull/9585)) par @gchust
  - Correction de l'affichage incorrect et des paramètres de format lorsque les champs de titre d'association de tableau v2 utilisent des champs d'heure, de date uniquement ou de date et heure. ([#9785](https://github.com/nocobase/nocobase/pull/9785)) par @katherinehhh
- **[Workflow]** Correction de la reprise du répartiteur de workflow après des erreurs de répartition inattendues. ([#9783](https://github.com/nocobase/nocobase/pull/9783)) par @mytharcher
- **[Gestionnaire de fichiers]** Correction des erreurs 404 lors du téléchargement de fichiers vers des champs d'URL de pièce jointe dans des sources de données externes ([#9809](https://github.com/nocobase/nocobase/pull/9809)) par @2013xile
- **[Action : Requête personnalisée]** Correction des actions de requête personnalisée V2 affichant une erreur inutile lorsque les paramètres de requête ne sont pas configurés. ([#9802](https://github.com/nocobase/nocobase/pull/9802)) par @katherinehhh
- **[Employés IA]**

  - Correction d'un problème où les employés IA ne pouvaient pas remplir correctement les données de sous-tableau. ([#9801](https://github.com/nocobase/nocobase/pull/9801)) par @gchust
  - Correction des déclencheurs de tâches raccourcies des employés IA afin que les pièces jointes du contexte de travail actuel soient incluses lors de l'exécution d'une tâche à partir du profil raccourci. ([#9808](https://github.com/nocobase/nocobase/pull/9808)) par @cgyrock
- **[Workflow : Événement d'action personnalisée]** Correction des boutons de workflow de déclencheur v2 du panneau d'actions affichant un succès et envoyant une requête lorsqu'aucun workflow n'est lié. ([#9798](https://github.com/nocobase/nocobase/pull/9798)) par @mytharcher
- **[Moteur de flux]** Correction d'un problème où les formulaires et les détails d'enregistrement actuels dans une fenêtre contextuelle pouvaient contenir des données incorrectes lorsqu'ils étaient construits par l'IA. ([#9788](https://github.com/nocobase/nocobase/pull/9788)) par @gchust
- **[Gestionnaire de tâches asynchrones]** Correction des erreurs de téléchargement de fichier de tâche asynchrone lorsque l'ID de tâche est manquant dans `filterByTk`. ([#9705](https://github.com/nocobase/nocobase/pull/9705)) par @mytharcher
- **[Source de données : NocoBase externe]** Proxy des actions de téléchargement et de stockage de fichiers de source de données externe NocoBase par source de données de téléchargement par @2013xile
- **[Multi-espace]** Correction des erreurs d'autorisation lorsque les gestionnaires d'espace ajoutent des utilisateurs sans accès au champ d'e-mail utilisateur. par @jiannx
- **[Workflow : Sous-flux]** Correction des sous-flux asynchrones afin que les workflows parents puissent reprendre après le redémarrage du worker ou la perte de mappage d'événements en mémoire. par @mytharcher
- **[Superviseur d'application]** Correction d'un crash lorsque les réponses du proxy WebSocket distant échouent par @2013xile

### [v2.1.5](https://www.nocobase.com/en/blog/v2.1.5)

*Date de sortie : 2026-06-15*

### 🎉 Nouvelles fonctionnalités

- **[Workflow : Nœud de messagerie]** Ajout de la prise en charge de l'envoi de pièces jointes dans les nœuds de messagerie de workflow. ([#9724](https://github.com/nocobase/nocobase/pull/9724)) par @mytharcher

### 🚀 Améliorations

- **[client-v2]** Les portées de données de colonne de champ de relation dans les sous-tableaux de formulaire prennent désormais en charge les variables d'élément courant. ([#9444](https://github.com/nocobase/nocobase/pull/9444)) par @gchust
- **[undefined]** Unification du nom de la documentation chinoise du plugin de contrôle de version en « 版本控制 ». ([#9776](https://github.com/nocobase/nocobase/pull/9776)) par @cgyrock
- **[Gestionnaire de fichiers]** Ajout de la prise en charge du texte sélectionnable dans les aperçus PDF du gestionnaire de fichiers pour les PDF avec texte intégré. ([#9781](https://github.com/nocobase/nocobase/pull/9781)) par @mytharcher
- **[Action : Modification en masse]** Optimisation de la méthode de chargement des plugins d'action v2 et maintien de l'ordre des boutons d'action migrés stable. ([#9778](https://github.com/nocobase/nocobase/pull/9778)) par @katherinehhh
- **[Contrôle de version]** Changement du nom d'affichage chinois du plugin de contrôle de version en « 版本控制 ». par @cgyrock

### 🐛 Corrections de bugs

- **[cli-v1]** Correction d'une erreur lors de l'exécution de `yarn dev` après la mise à niveau de projets créés avec create-nocobase-app de 2.0 à 2.1. ([#9775](https://github.com/nocobase/nocobase/pull/9775)) par @Molunerfinn
- **[client-v2]** Correction du problème où la progression de la migration n'affichait pas la vue de progression dédiée. ([#9761](https://github.com/nocobase/nocobase/pull/9761)) par @2013xile
- **[moteur de flux]** Correction des problèmes de saisie IME vietnamien et chinois dans les champs de texte sur une seule ligne et de texte multiligne v2. ([#9764](https://github.com/nocobase/nocobase/pull/9764)) par @katherinehhh
- **[serveur]** Correction de la gestion non sécurisée des noms de plugins dans `pm:enable` pour éviter les risques d'inclusion de fichiers locaux lors de la résolution de plugins. ([#9701](https://github.com/nocobase/nocobase/pull/9701)) par @mytharcher
- **[Gestionnaire de fichiers]** Correction des échecs d'aperçu PDF causés par un chargement anormal du module worker pdf.js. ([#9779](https://github.com/nocobase/nocobase/pull/9779)) par @mytharcher
- **[Bloc : Kanban]** Correction du problème où l'ouverture des blocs Calendrier, Gantt et Kanban en dehors du mode édition persistait de manière inattendue les actions contextuelles masquées et envoyait à plusieurs reprises des requêtes de suppression. ([#9772](https://github.com/nocobase/nocobase/pull/9772)) par @jiannx
- **[Action : Exporter les enregistrements Pro]** Amélioration des paramètres de mode de traitement et des invites explicatives pour v2 Import/Export Pro. par @katherinehhh
- **[Gestionnaire de migration]** Correction des échecs possibles lors de l'importation de fichiers de données de migration volumineux. par @2013xile
- **[Impression de modèle]** Rejet des types de fichiers de modèle non pris en charge avant le début de l'impression du modèle. par @2013xile

### [v2.1.4](https://www.nocobase.com/en/blog/v2.1.4)

*Date de sortie : 2026-06-13*

### 🚀 Améliorations

- **[Workflow]** Amélioration de l'expérience d'édition des métadonnées de workflow en prenant en charge l'édition de la description dans la fenêtre contextuelle des détails et en remplissant automatiquement les métadonnées du workflow source lors de la duplication de workflows. ([#9766](https://github.com/nocobase/nocobase/pull/9766)) par @mytharcher

### 🐛 Corrections de bugs

- **[Action : Importer des enregistrements]** Modification des fichiers d'importation téléchargés vers le stockage sur disque pour réduire la pression mémoire lors de l'importation de grandes quantités de données. ([#9739](https://github.com/nocobase/nocobase/pull/9739)) par @mytharcher
- **[Gestionnaire de sauvegarde]** Correction d'un problème de sécurité où des noms de schéma PostgreSQL non sécurisés pouvaient être acceptés lors de la restauration de sauvegarde. ([#9758](https://github.com/nocobase/nocobase/pull/9758)) par @2013xile
- **[Workflow]**

  - Correction de la gestion du délai d'attente du workflow afin que les exécutions abandonnées et leurs tâches en attente puissent être mises à jour de manière atomique. ([#9768](https://github.com/nocobase/nocobase/pull/9768)) par @mytharcher
  - Correction du problème où le champ « dernière mise à jour par » du workflow n'était pas mis à jour après les modifications du nœud de workflow. ([#9769](https://github.com/nocobase/nocobase/pull/9769)) par @mytharcher
- **[Action : Importer des enregistrements Pro]** Évitement de l'analyse des fichiers volumineux dans le nœud de requête avant que l'importation Pro ne crée une tâche asynchrone. par @mytharcher
- **[Contrôle de version]** Ajustement de la position de l'entrée de raccourci supérieure du contrôle de version afin qu'elle apparaisse à côté de l'éditeur d'interface utilisateur dans les deux mises en page d'administration (héritée et v2). par @cgyrock

### [v2.1.3](https://www.nocobase.com/en/blog/v2.1.3)

*Date de sortie : 2026-06-12*

### 🚀 Améliorations

- **[cli]**
  - normalisation des versions de build compatibles avec l'application ([#9763](https://github.com/nocobase/nocobase/pull/9763)) par @chenos
  - prise en charge de la mise à jour des compétences vers une version spécifiée ([#9760](https://github.com/nocobase/nocobase/pull/9760)) par @chenos

### 🐛 Corrections de bugs

- **[client]** Correction du problème où les champs dans les sous-formulaires horizontaux étaient trop étroits pour afficher les données ([#9755](https://github.com/nocobase/nocobase/pull/9755)) par @zhangzhonghe
- **[Gestionnaire de source de données]**

  - Correction du tiroir d'édition de champ vide causé par des rendus répétés sur la page de configuration des champs de la source de données externe v1. ([#9759](https://github.com/nocobase/nocobase/pull/9759)) par @katherinehhh
  - Correction d'un problème où la suppression de la catégorie de collection active dans le gestionnaire de source de données v1 pouvait laisser l'onglet Toutes les collections vide. ([#9757](https://github.com/nocobase/nocobase/pull/9757)) par @katherinehhh
- **[Gestionnaire de tâches asynchrones]** Correction des ID de requête incorrects dans les journaux du worker de tâche asynchrone ([#9686](https://github.com/nocobase/nocobase/pull/9686)) par @2013xile
- **[Workflow : Nœud SQL]** Correction de la migration des variables de modèle héritées du workflow SQL qui était ignorée pour certains utilisateurs de version bêta. ([#9762](https://github.com/nocobase/nocobase/pull/9762)) par @mytharcher
- **[Employés IA]**

  - Correction de la perte de configuration des messages dans les nœuds LLM du workflow. ([#9743](https://github.com/nocobase/nocobase/pull/9743)) par @cgyrock
  - Correction d'un problème où les pièces jointes collées dans la boîte de dialogue de l'employé IA ne pouvaient pas être supprimées. ([#9753](https://github.com/nocobase/nocobase/pull/9753)) par @cgyrock
- **[Bloc : Kanban]** Correction de la prise en charge des URL pour le calendrier et les fenêtres contextuelles associées. ([#9751](https://github.com/nocobase/nocobase/pull/9751)) par @jiannx
- **[Workflow : Approbation]** Correction du problème où les données associées ne s'affichaient pas dans les formulaires d'approbation v2 par @zhangzhonghe

### [v2.1.2](https://www.nocobase.com/en/blog/v2.1.2)

*Date de sortie : 2026-06-12*

### 🎉 Nouvelles fonctionnalités

- **[Employés IA]** Ajout d'un formulaire de configuration de stockage vectoriel externe pour les bases de connaissances IA. ([#9723](https://github.com/nocobase/nocobase/pull/9723)) par @cgyrock
- **[IA : Base de connaissances]** Ajout d'un formulaire de configuration de stockage vectoriel externe pour les bases de connaissances IA. par @cgyrock

### 🚀 Améliorations

- **[undefined]**

  - Ajout d'un scénario de contrôle de version au démarrage rapide du constructeur IA ([#9748](https://github.com/nocobase/nocobase/pull/9748)) par @Molunerfinn
    Référence : [Démarrage rapide du constructeur IA](https://docs.nocobase.com/en/ai-builder)
  - Amélioration de la documentation du contrôle de version avec des conseils de révision automatique du constructeur IA. ([#9745](https://github.com/nocobase/nocobase/pull/9745)) par @cgyrock
- **[cli]** clarification du libellé de configuration initiale ([#9750](https://github.com/nocobase/nocobase/pull/9750)) par @chenos
- **[Action : Importer des enregistrements]** Amélioration des boîtes de dialogue d'erreur d'importation et de tâche asynchrone afin que les longs messages d'erreur puissent être entièrement lus sans casser la mise en page. ([#9746](https://github.com/nocobase/nocobase/pull/9746)) par @katherinehhh
- **[Action : Importer des enregistrements Pro]** Amélioration des boîtes de dialogue d'importation afin que les longs messages d'erreur restent lisibles et que le mode de traitement v2 puisse être sélectionné directement à partir du menu des paramètres. par @katherinehhh

### 🐛 Corrections de bugs

- **[client-v2]** Correction du problème où les pages v2 pouvaient continuer à se charger après la connexion ([#9738](https://github.com/nocobase/nocobase/pull/9738)) par @zhangzhonghe
- **[cli]** nécessite Node.js 22 pour nb ([#9749](https://github.com/nocobase/nocobase/pull/9749)) par @chenos
- **[Gestionnaire de fichiers]** Correction des aperçus PDF manquant le texte de police CJK/CID après le passage à pdf.js. ([#9737](https://github.com/nocobase/nocobase/pull/9737)) par @mytharcher

## next

![next.png](https://static-docs.nocobase.com/8ed17a0f08cc585018f6de6c8b13947d.png)

### [v2.2.0-beta.5](https://www.nocobase.com/en/blog/v2.2.0-beta.5)

*Date de sortie : 2026-06-16*

### 🚀 Améliorations

* **[cli]** Ajout d'enregistrements de version de schéma pour la configuration env. ([#9782](https://github.com/nocobase/nocobase/pull/9782)) par @chenos
* **[Gestionnaire de fichiers]** Amélioration des aperçus PDF : les fichiers PDF d'origine croisée utilisent désormais l'aperçu natif du navigateur, tandis que les fichiers PDF de même origine continuent d'être rendus avec PDF.js. ([#9796](https://github.com/nocobase/nocobase/pull/9796)) par @mytharcher

### 🐛 Corrections de bugs

* **[client-v2]**
  * Correction du problème où les paramètres de flux d'événements ne pouvaient plus être modifiés après la conversion d'un bloc en modèle. ([#9585](https://github.com/nocobase/nocobase/pull/9585)) par @gchust
  * Correction du problème où les options de liste déroulante de cases à cocher dans les formulaires de filtre v2 n'affichaient pas le texte traduit. ([#9792](https://github.com/nocobase/nocobase/pull/9792)) par @katherinehhh
  * Correction de l'affichage incorrect et des paramètres de format lorsque le champ de titre d'un champ de relation de tableau v2 utilisait un champ d'heure, de date ou de date et heure. ([#9785](https://github.com/nocobase/nocobase/pull/9785)) par @katherinehhh
* **[Moteur de flux]** Correction de données incorrectes dans les formulaires d'enregistrement courants et les données de détail à l'intérieur des fenêtres contextuelles lors de la construction IA. ([#9788](https://github.com/nocobase/nocobase/pull/9788)) par @gchust
* **[Workflow : Événement d'action personnalisée]** Correction du problème où les boutons de workflow de déclencheur v2 du panneau d'actions affichaient toujours un succès et envoyaient des requêtes lorsqu'aucun workflow n'était lié. ([#9798](https://github.com/nocobase/nocobase/pull/9798)) par @mytharcher
* **[Employés IA]** Correction du problème où les employés IA ne pouvaient pas remplir correctement les données de sous-tableau. ([#9801](https://github.com/nocobase/nocobase/pull/9801)) par @gchust

### [v2.2.0-beta.3](https://www.nocobase.com/en/blog/v2.2.0-beta.3)

*Date de sortie : 2026-06-15*

### 🎉 Nouvelles fonctionnalités

* **[Workflow : Nœud de messagerie]** Ajout de la prise en charge de l'envoi de pièces jointes dans les nœuds de messagerie de workflow. ([#9724](https://github.com/nocobase/nocobase/pull/9724)) par @mytharcher
* **[Workflow]** Ajout de la prise en charge des portées de transaction de base de données dans les workflows. ([#9742](https://github.com/nocobase/nocobase/pull/9742)) par @mytharcher
  Référence : [Transactions de base de données](docs/docs/en/workflow/nodes/transaction.md)
* **[Workflow : Nœud de transaction de base de données]** Ajout d'un plugin de nœud de workflow de transaction de base de données. par @mytharcher

### 🚀 Améliorations

* **[client-v2]** Les colonnes de champ de relation dans les sous-tableaux de formulaire prennent désormais en charge les variables d'élément courant dans les portées de données. ([#9444](https://github.com/nocobase/nocobase/pull/9444)) par @gchust
* **[undefined]** Unification du nom de la documentation chinoise du plugin de contrôle de version en « 版本控制 ». ([#9776](https://github.com/nocobase/nocobase/pull/9776)) par @cgyrock
* **[Gestionnaire de fichiers]** Ajout de la prise en charge du texte sélectionnable dans les aperçus PDF du gestionnaire de fichiers pour les PDF avec texte intégré. ([#9781](https://github.com/nocobase/nocobase/pull/9781)) par @mytharcher
* **[Utilisateurs]** Amélioration de la mise en page des pages Utilisateurs et Permissions v2 et optimisation du comportement de l'arborescence des départements. ([#9780](https://github.com/nocobase/nocobase/pull/9780)) par @jiannx
* **[Action : Modification en masse]** Optimisation de la façon dont les plugins d'action v2 sont chargés et maintien de l'ordre des boutons d'action migrés stable. ([#9778](https://github.com/nocobase/nocobase/pull/9778)) par @katherinehhh
* **[Contrôle de version]** Renommage du nom d'affichage chinois du plugin de contrôle de version en « 版本控制 ». par @cgyrock

### 🐛 Corrections de bugs

* **[cli-v1]** Correction d'une erreur lors de l'exécution de `<span>yarn dev</span>` après la mise à niveau de projets créés avec create-nocobase-app de 2.0 à 2.1. ([#9775](https://github.com/nocobase/nocobase/pull/9775)) par @Molunerfinn
* **[moteur de flux]** Correction des problèmes de saisie IME vietnamien et chinois dans les champs de texte sur une seule ligne et de texte multiligne v2. ([#9764](https://github.com/nocobase/nocobase/pull/9764)) par @katherinehhh
* **[client-v2]** Correction du problème où la progression de la migration n'affichait pas la vue de progression dédiée. ([#9761](https://github.com/nocobase/nocobase/pull/9761)) par @2013xile
* **[serveur]** Correction de la gestion non sécurisée des noms de plugins dans `<span>pm:enable</span>` pour éviter les risques d'inclusion de fichiers locaux lors de la résolution de plugins. ([#9701](https://github.com/nocobase/nocobase/pull/9701)) par @mytharcher
* **[Gestionnaire de tâches asynchrones]** Correction des erreurs de requête de base de données causées par l'absence de `<span>filterByTk</span>` lors du téléchargement de fichiers de tâche asynchrone. ([#9705](https://github.com/nocobase/nocobase/pull/9705)) par @mytharcher
* **[Gestionnaire de fichiers]** Correction des échecs d'aperçu PDF causés par un chargement anormal du module worker pdf.js. ([#9779](https://github.com/nocobase/nocobase/pull/9779)) par @mytharcher
* **[Bloc : Kanban]** Correction du problème où l'ouverture des blocs Calendrier, Gantt et Kanban en mode non-édition persistait de manière inattendue les actions contextuelles masquées et envoyait à plusieurs reprises des requêtes de suppression. ([#9772](https://github.com/nocobase/nocobase/pull/9772)) par @jiannx
* **[Action : Exporter les enregistrements Pro]** Amélioration des paramètres de mode de traitement et du texte d'aide pour v2 Import/Export Pro. par @katherinehhh
* **[Multi-espace]** Correction du problème où les administrateurs d'espace ne pouvaient pas ajouter d'utilisateurs d'espace lorsqu'ils n'avaient pas la permission pour le champ d'e-mail utilisateur. par @jiannx
* **[Gestionnaire de migration]** Correction des échecs possibles lors de l'importation de fichiers de données de migration volumineux. par @2013xile
* **[Impression de modèle]** Rejet des types de fichiers de modèle non pris en charge avant le début de l'impression du modèle. par @2013xile

### [v2.2.0-beta.2](https://www.nocobase.com/en/blog/v2.2.0-beta.2)

*Date de sortie : 2026-06-13**

### 🎉 Nouvelles fonctionnalités

- **[Employés IA]** Ajout d'un formulaire de configuration de stockage vectoriel externe pour les bases de connaissances IA. ([#9723](https://github.com/nocobase/nocobase/pull/9723)) par @cgyrock
- **[IA : Base de connaissances]** Ajout d'un formulaire de configuration de stockage vectoriel externe pour les bases de connaissances IA. par @cgyrock
- **[Gestionnaire d'e-mails]** Migration du client du gestionnaire d'e-mails vers v2. par @jiannx

### 🚀 Améliorations

- **[cli]**

  - Optimisation des vérifications de compatibilité pour différents formats de numéro de version. ([#9763](https://github.com/nocobase/nocobase/pull/9763)) par @chenos
  - Ajout de la prise en charge de la mise à jour des compétences vers une version spécifiée. ([#9760](https://github.com/nocobase/nocobase/pull/9760)) par @chenos
  - Amélioration du libellé des invites de configuration initiale. ([#9750](https://github.com/nocobase/nocobase/pull/9750)) par @chenos
- **[undefined]**

  - Ajout d'un scénario de conversation de contrôle de version à la page d'aperçu du constructeur IA. ([#9748](https://github.com/nocobase/nocobase/pull/9748)) par @Molunerfinn
    Référence : [Démarrage rapide du constructeur IA](https://docs.nocobase.com/en/ai-builder)
  - Amélioration de la documentation du contrôle de version avec des notes sur l'enregistrement automatique des versions dans le constructeur IA. ([#9745](https://github.com/nocobase/nocobase/pull/9745)) par @cgyrock
    Référence : [Contrôle de version](docs/docs/en/ops-management/version-control/index.md)
- **[Workflow]** Amélioration de l'expérience d'édition des métadonnées de workflow en prenant en charge l'édition de la description dans la fenêtre contextuelle des détails et en remplissant automatiquement les métadonnées du workflow source lors de la duplication de workflows. ([#9766](https://github.com/nocobase/nocobase/pull/9766)) par @mytharcher
- **[Action : Importer des enregistrements]** Amélioration des boîtes de dialogue de détail d'erreur d'importation et de tâche asynchrone afin que les longs messages d'erreur puissent être entièrement visualisés sans casser la mise en page. ([#9746](https://github.com/nocobase/nocobase/pull/9746)) par @katherinehhh
- **[Outil de test de traduction]** Ajout d'une page de paramètres client-v2 pour l'outil de test de traduction. ([#9744](https://github.com/nocobase/nocobase/pull/9744)) par @jiannx
- **[Action : Importer des enregistrements Pro]** Amélioration des boîtes de dialogue d'importation afin que les longs messages d'erreur puissent être entièrement visualisés et que le mode de traitement puisse être sélectionné directement à partir du menu des paramètres v2. par @katherinehhh

### 🐛 Corrections de bugs

- **[client]** Correction du problème où les champs dans les sous-formulaires horizontaux étaient trop étroits pour afficher les données. ([#9755](https://github.com/nocobase/nocobase/pull/9755)) par @zhangzhonghe
- **[client-v2]** Correction du problème où les pages v2 pouvaient continuer à se charger après la connexion. ([#9738](https://github.com/nocobase/nocobase/pull/9738)) par @zhangzhonghe
- **[cli]** Ajout de la détection de version de Node.js pour l'environnement d'exécution nb. ([#9749](https://github.com/nocobase/nocobase/pull/9749)) par @chenos
- **[Action : Importer des enregistrements]** Modification des fichiers d'importation téléchargés vers le stockage sur disque pour réduire la pression mémoire lors de l'importation de grandes quantités de données. ([#9739](https://github.com/nocobase/nocobase/pull/9739)) par @mytharcher
- **[Gestionnaire de tâches asynchrones]** Correction des ID de requête incorrects dans les journaux du worker de tâche asynchrone. ([#9686](https://github.com/nocobase/nocobase/pull/9686)) par @2013xile
- **[Workflow]**

  - Correction de la gestion du délai d'attente du workflow afin que les exécutions abandonnées et leurs tâches en attente puissent être mises à jour de manière atomique. ([#9768](https://github.com/nocobase/nocobase/pull/9768)) par @mytharcher
  - Correction du problème où le champ « dernière mise à jour par » du workflow n'était pas mis à jour après les modifications du nœud de workflow. ([#9769](https://github.com/nocobase/nocobase/pull/9769)) par @mytharcher
- **[Gestionnaire de source de données]**

  - Correction du tiroir d'édition de champ vide causé par des rendus répétés sur la page de configuration des champs de la source de données externe v1. ([#9759](https://github.com/nocobase/nocobase/pull/9759)) par @katherinehhh
  - Correction du problème où la suppression de la catégorie de collection courante dans le gestionnaire de source de données v1 pouvait laisser l'onglet Toutes les collections vide. ([#9757](https://github.com/nocobase/nocobase/pull/9757)) par @katherinehhh
- **[Gestionnaire de sauvegarde]** Correction d'un problème de sécurité où des noms de schéma PostgreSQL non sécurisés pouvaient être acceptés lors de la restauration de sauvegarde. ([#9758](https://github.com/nocobase/nocobase/pull/9758)) par @2013xile
- **[Workflow : Nœud SQL]** Correction du problème où la migration des variables de modèle héritées du workflow SQL était ignorée pour certains utilisateurs de version bêta. ([#9762](https://github.com/nocobase/nocobase/pull/9762)) par @mytharcher
- **[Bloc : Kanban]** Correction de la prise en charge des URL pour le calendrier et autres fenêtres contextuelles. ([#9751](https://github.com/nocobase/nocobase/pull/9751)) par @jiannx
- **[Employés IA]**

  - Correction du problème où les pièces jointes collées dans la boîte de dialogue de l'employé IA ne pouvaient pas être supprimées. ([#9753](https://github.com/nocobase/nocobase/pull/9753)) par @cgyrock
  - Correction de la perte de configuration des messages dans les nœuds LLM du workflow. ([#9743](https://github.com/nocobase/nocobase/pull/9743)) par @cgyrock
- **[Gestionnaire de fichiers]** Correction du texte de police chinois/CID manquant dans certains aperçus PDF après le passage à pdf.js. ([#9737](https://github.com/nocobase/nocobase/pull/9737)) par @mytharcher
- **[Documentation API]** Correction de l'échec de construction du fichier de déclaration du plugin de documentation API. ([#9752](https://github.com/nocobase/nocobase/pull/9752)) par @katherinehhh
- **[Action : Importer des enregistrements Pro]** Évitement de l'analyse des fichiers volumineux dans le nœud de requête avant que l'importation Pro ne crée une tâche asynchrone. par @mytharcher
- **[Contrôle de version]** Ajustement de la position de l'entrée de raccourci supérieure du contrôle de version afin qu'elle apparaisse à côté de l'éditeur d'interface utilisateur dans les deux mises en page d'administration (héritée et v2). par @cgyrock
- **[Workflow : Approbation]** Correction du problème où les données associées ne s'affichaient pas dans les formulaires d'approbation v2. par @zhangzhonghe
