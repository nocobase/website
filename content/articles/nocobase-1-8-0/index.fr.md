---
title: "Annonce de NocoBase v1.8.0"
description: "Processus d'authentification amélioré, prise en charge de variables statistiques personnalisées et mises à niveau de la gestion des e-mails, optimisation de l'expérience de workflow et de l'interaction mobile"
---

## Nouvelle fonctionnalité

### Mot de passe oublié – Récupération par e-mail prise en charge

Les utilisateurs peuvent désormais récupérer leur mot de passe par e-mail. Activez cette fonctionnalité dans **Paramètres > Authentification > Mot de passe oublié**, configurez un canal de notification par e-mail et personnalisez l'e-mail de réinitialisation du mot de passe (prend en charge les variables et le format HTML).

![Mot de passe oublié – Récupération par e-mail prise en charge.gif](https://static-docs.nocobase.com/20250707104631_rec_-ihynhs.gif)

Référence : [Mot de passe oublié](https://docs.nocobase.com/handbook/auth/user#forgot-password)

### Variables d'agrégation personnalisées

Permet de créer des variables statistiques telles que le nombre, la somme et la moyenne. Ces variables peuvent être utilisées dans les badges de menu, les étiquettes de page et d'autres zones pour rendre l'interface plus intuitive et riche en informations.

![Variables d'agrégation personnalisées.gif](https://static-docs.nocobase.com/20250707110736_rec_-fzpk98.gif)

Référence : [Variables personnalisées](https://docs.nocobase.com/handbook/custom-variables)

### Gestion des e-mails

Le module de gestion des e-mails a été entièrement mis à niveau, prenant désormais en charge la suppression des e-mails, l'envoi par lots, les paramètres d'intervalle de synchronisation et diverses améliorations de l'expérience utilisateur.

![Gestion des e-mails.png](https://static-docs.nocobase.com/image-9dyulg.png)

### Sources de données

Prend en charge le champ BIT de SQL Server dans les sources de données externes et permet le chargement à la demande des tables de données à partir de sources externes.

![Sources de données.png](https://static-docs.nocobase.com/image-rml96b.png)

### Copie de texte

Permet la copie en un clic du contenu des champs de texte.

![Copie de texte.gif](https://static-docs.nocobase.com/20250707105447_rec_-m25b6x.gif)

### [Workflow : Nœud de requête HTTP] Prise en charge du type `multipart/form-data`

Lors de la configuration d'un nœud de requête HTTP dans un workflow, vous pouvez désormais sélectionner le type de contenu `multipart/form-data`. Une fois activé, le corps de la requête accepte les soumissions form-data, y compris les champs `file`, pour prendre en charge les téléchargements de fichiers et les scénarios similaires.

![Workflow.png](https://static-docs.nocobase.com/image-gutu74.png)

### [Workflow : Approbation] Les résultats du nœud d'approbation prennent en charge la génération de variables d'enregistrement d'approbation

Les résultats d'exécution du nœud d'approbation peuvent désormais être utilisés comme variables dans les nœuds suivants, avec un enregistrement automatique du statut et des données associées.

![Workflow : Approbation](https://static-docs.nocobase.com/20250614095052.png)

Référence : [Résultats du nœud](https://docs.nocobase.com/handbook/workflow-approval/node#node-results)

## Améliorations

### Saisie par scan

Le composant de saisie de texte générique inclut désormais une option **Activer le scan**. Lorsqu'elle est activée, un bouton de scan apparaît sur le côté droit du champ de saisie, permettant de saisir des données via des dispositifs de scan. Vous pouvez également configurer si la saisie manuelle est autorisée.

![Saisie par scan.png](https://static-docs.nocobase.com/image-u7gfro.png)

Référence : [Activer le scan](https://docs-cn.nocobase.com/handbook/ui/fields/field-settings/enable-scan)

### Prise en charge de la localisation dans le bloc Markdown

Le contenu Markdown prend désormais en charge la localisation en utilisant la syntaxe `{{t 'xxx'}}` pour insérer du texte multilingue.

![Prise en charge de la localisation dans le bloc Markdown.gif](https://static-docs.nocobase.com/20250707132207_rec_-a1fu68.gif)

Référence : [Localisation](https://docs.nocobase.com/handbook/ui/blocks/other-blocks/markdown#localization)

### Les liens de menu prennent en charge l'ouverture dans une nouvelle fenêtre

Une nouvelle option **"Ouvrir dans une nouvelle fenêtre"** a été ajoutée pour les liens de menu, vous permettant de personnaliser la façon dont les liens sont ouverts.

![Les liens de menu prennent en charge l'ouverture dans une nouvelle fenêtre.png](https://static-docs.nocobase.com/image-x0qfsq.png)

### Le bloc Calendrier prend en charge la configuration du jour de début de semaine

Vous pouvez désormais personnaliser le jour de début de semaine de la vue calendrier, en choisissant dimanche ou lundi pour s'adapter aux différentes préférences et habitudes régionales.

![Le bloc Calendrier prend en charge la configuration du jour de début de semaine.png](https://static-docs.nocobase.com/image-uu5ubi.png)

Référence : [Jour de début de semaine](https://docs.nocobase.com/handbook/calendar#week-start-day)

### Le mode visualisation de Markdown (Vditor) prend en charge le clic sur l'image pour zoomer

En mode visualisation, les images du contenu Markdown peuvent être cliquées pour être agrandies, améliorant ainsi l'expérience de lecture.

![Le mode visualisation de Markdown (Vditor) prend en charge le clic sur l'image pour zoomer.gif](https://static-docs.nocobase.com/20250707134351_rec_-zd0mvw.gif)

### Amélioration complète des fonctionnalités et des performances du module Workflow

- Prise en charge du filtrage des workflows par davantage de champs pour améliorer l'efficacité de la recherche
- Optimisation des styles d'affichage mobile pour améliorer l'expérience utilisateur
- Exclusion du chargement des champs JSON pour améliorer considérablement les performances de chargement de la liste des plans d'exécution
- Ajout d'une nouvelle API de journal pour les exécutions de test de nœud
- Ajustement de l'interface API de la méthode `getCollectionFieldOptions` pour améliorer la flexibilité

![Module Workflow.png](https://static-docs.nocobase.com/image-5b3byb.png)

### Améliorations des fonctionnalités du processus d'approbation et de l'expérience

- Ajout d'une option de configuration pour les listes de sélection du personnel de transfert et d'ajout de signature, prenant en charge l'affichage de plus d'informations de champ pour faciliter une sélection plus précise
- Ajustement de l'affichage de l'heure dans la chronologie en heure absolue pour améliorer la lisibilité
- Importation des tables de données liées à l'approbation à partir du plugin Workflow pour éviter que les tables locales ne soient écrasées
- Ajustement de la structure de l'interface API des variables pour améliorer la flexibilité et la cohérence

![Processus d'approbation.gif](https://static-docs.nocobase.com/20250707141716_rec_-v2nc4q.gif)

### Prise en charge de la configuration des options du pool de connexions à la base de données via des variables d'environnement

Les paramètres du pool de connexions à la base de données peuvent être définis de manière flexible via des variables d'environnement pour améliorer la flexibilité du déploiement.

![Prise en charge de la configuration des options du pool de connexions à la base de données via des variables d'environnement.png](https://static-docs.nocobase.com/image-tz87as.png)

### Le bloc Commentaire prend en charge la pagination

Prend en charge le chargement paginé des commentaires pour améliorer les performances de chargement et l'expérience de lecture dans les scénarios avec de grands volumes de données.

![Le bloc Commentaire prend en charge la pagination.gif](https://static-docs.nocobase.com/20250707155143_rec_-ch7qvy.gif)

### Améliorations de l'expérience mobile

- Fenêtres contextuelles de notification adaptées aux styles mobiles
- Logique de détection de mise en page mobile optimisée pour améliorer la précision de la réactivité
