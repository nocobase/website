---
title: "Annonce de NocoBase 2.0-beta"
description: "Après 8 semaines d'affinage intensif, NocoBase 2.0 est entré en phase bêta stable. Cette version apporte des optimisations profondes pour AI Employee, Visualization 2.0 et Approval 2.0, tout en introduisant les tout nouveaux UI Templates et l'architecture Multi-app."
---

Après 8 semaines de travail acharné de la part de l'équipe NocoBase et de tous les contributeurs, NocoBase 2.0-beta a été publiée comme prévu. Cette version comprend des améliorations et des tests approfondis des nouvelles fonctionnalités de NocoBase 2.0, amenant la version 2.0 dans une phase plus stable. Nous invitons les premiers utilisateurs à utiliser cette version pour des tests en production et à nous faire part de tout problème ou suggestion.

La version 2.0-rc sera publiée avant le 11 février 2026, avec des tests plus complets et des fonctionnalités supplémentaires. Restez à l'écoute.

## Nouvelles fonctionnalités

### AI Employees

Nous avons apporté des améliorations significatives à AI Employees, notamment :

- Optimisation des capacités des AI Employees intégrés
- Prise en charge de l'accès aux sources de données externes
- Prise en charge de l'interrogation de grandes quantités de données
- Préservation du formatage original dans le contenu des conversations
- Messages d'erreur améliorés

Manuel d'utilisation : [AI Employees](https://v2.docs.nocobase.com/ai-employees)

![](https://static-docs.nocobase.com/20251102121036-2025-11-02-12-10-38.png)

### UI Templates

La version 2.0 bêta introduit une toute nouvelle fonctionnalité de modèles d'interface (UI Templates). Chaque type de modèle prend en charge à la fois la copie et la référence, notamment :

- Modèles de blocs (Block Templates)
- Modèles de champs (Field Templates)
- Modèles de popups (Popup Templates)

Notamment, les modèles de popups vous permettent d'enregistrer l'intégralité du contenu d'un popup (tous les onglets et blocs des sous-pages) en tant que modèle, réduisant considérablement le travail répétitif par rapport à la version 1.x.

Manuel d'utilisation : [UI Templates](https://v2.docs.nocobase.com/interface-builder/ui-templates)

![](https://static-docs.nocobase.com/edit-popup-select-20251228.png)

### Multi-App 2.0

La gestion multi-applications (Multi-App Management) est la solution unifiée de gestion d'applications de NocoBase pour créer et gérer plusieurs instances d'application NocoBase physiquement isolées dans un ou plusieurs environnements d'exécution. Grâce au superviseur d'applications (App Supervisor), les utilisateurs peuvent créer et maintenir plusieurs applications à partir d'un point d'entrée unique, répondant aux besoins de différentes activités et échelles. NocoBase prend en charge trois architectures de déploiement :

- **Application unique (Single App)** : Déployer une seule instance NocoBase où toutes les fonctions métier, les données et les utilisateurs s'exécutent dans la même application.
- **Multi-applications en mémoire partagée (Shared Memory Multi-App)** : Plusieurs applications peuvent s'exécuter simultanément dans une seule instance NocoBase. Chaque application est indépendante, peut se connecter à sa propre base de données, et peut être créée, démarrée et arrêtée individuellement, mais elles partagent le même processus et le même espace mémoire. Les utilisateurs n'ont toujours besoin de maintenir qu'une seule instance NocoBase.
- **Déploiement hybride multi-environnement (Multi-Environment Hybrid Deployment)** : Déployer une instance NocoBase comme centre de gestion unifié, tout en déployant plusieurs instances NocoBase comme environnements d'exécution d'applications pour exécuter des applications métier. Différentes applications peuvent s'exécuter sur différents nœuds ou clusters.

Manuel d'utilisation : [Multi-App](https://v2.docs.nocobase.com/multi-app/multi-app)

![](https://static-docs.nocobase.com/202512231215186.png)

### Multi-Space

Le plugin Multi-Space permet l'isolation logique pour créer plusieurs espaces de données indépendants au sein d'une seule instance d'application, adapté aux scénarios comme les opérations multi-usines ou multi-magasins avec des processus métier et des configurations système hautement cohérents.

Manuel d'utilisation : [Multi-Space](https://v2.docs.nocobase.com/multi-app/multi-space)

### Data Visualization 2.0

La version 1.x fournissait des plugins de visualisation de données de base basés sur Ant Design Charts et ECharts pour une visualisation de données fondamentale. Cependant, elle était insuffisante pour gérer les graphiques complexes, les interactions personnalisées et les scénarios de liaison de données.

NocoBase 2.0 introduit un tout nouveau plugin de visualisation de données basé sur ECharts, prenant en charge le mode de configuration visuelle ainsi que les modes SQL et JSON. Il prend en charge les événements, ce qui facilite la gestion des graphiques complexes, de la liaison multi-graphiques et des scénarios d'exploration de données.

Ne vous inquiétez pas si SQL et JSON sont trop complexes – l'AI Employee Nathan est là pour vous aider.

Manuel d'utilisation : [Data Visualization](https://v2.docs.nocobase.com/data-visualization)

![](https://static-docs.nocobase.com/20251102221207-2025-11-02-22-12-09.png)

### Workflow

#### Nouveau nœud « Branche multi-conditions »

Similaire aux instructions `switch / case` ou `if / else if` dans les langages de programmation. Le système évalue séquentiellement plusieurs conditions configurées et exécute uniquement la branche qui satisfait une condition. Ce nœud remplacera certaines fonctionnalités du nœud « Branche parallèle ». Nous vous recommandons de remplacer les workflows qui utilisent à la fois des nœuds de condition et parallèles par le nouveau nœud « Branche multi-conditions ».

![20251123224209](https://static-docs.nocobase.com/20251123224209.png)

Manuel d'utilisation : [Branche multi-conditions](https://v2.docs.nocobase.com/workflow/nodes/multi-conditions)

### Approval 2.0

La plupart des configurations de blocs dans le plugin Approval ont été refactorisées à l'aide de FlowEngine, prenant en charge une configuration et une utilisation plus flexibles. Plusieurs nouvelles fonctionnalités ont également été ajoutées.

Manuel d'utilisation : [Approval](https://v2.docs.nocobase.com/workflow/triggers/approval)

#### Option pour afficher l'instantané des données ou l'état le plus récent dans l'interface de traitement des approbations

* **Instantané (Snapshot)**
  Pendant le processus d'approbation, le demandeur et les approbateurs voient l'état de l'enregistrement tel qu'il était lorsqu'ils sont entrés, et après soumission, ils ne peuvent voir que les enregistrements qu'ils ont modifiés – ils ne verront pas les mises à jour effectuées ultérieurement par d'autres.
* **Le plus récent (Latest)**
  Pendant le processus d'approbation, le demandeur et les approbateurs voient toujours la version la plus récente de l'enregistrement tout au long du processus, quel que soit l'état de l'enregistrement avant leur action. Une fois le processus terminé, ils verront la version finale de l'enregistrement.

#### Prise en charge de la configuration du périmètre de données de l'initiateur

Vous pouvez configurer des autorisations basées sur le périmètre utilisateur pour déterminer quels utilisateurs peuvent lancer l'approbation.

![20251226114623](https://static-docs.nocobase.com/20251226114623.png)

#### Dans le centre des tâches, prise en charge de la configuration des champs de données métier dans les listes de cartes « Mes initiatives » et « Mes approbations »

La carte « Mes initiatives » permet une configuration flexible des informations d'approbation et des champs de données métier.

![20251231222654](https://static-docs.nocobase.com/20251231222654.png)

La carte « Mes approbations » permet une configuration flexible des tâches d'approbation et des champs de données métier.

![20251231222815](https://static-docs.nocobase.com/20251231222815.png)

### Email Manager 2.0

Le plugin Email Manager a été refactorisé à l'aide de FlowEngine, permettant aux AI Employees de participer de manière transparente au résumé, à l'analyse et à la composition des e-mails. De nouvelles fonctionnalités comme la sauvegarde automatique des brouillons ont également été ajoutées.

Manuel d'utilisation : [Email Manager](https://v2.docs.nocobase.com/email-manager)

![](https://static-docs.nocobase.com/email-manager/Loading--10-31-2025_08_31_PM.png)

### Record History

Le plugin Record History suit les modifications de données en enregistrant automatiquement des instantanés et des enregistrements de différences pour les opérations de création, mise à jour et suppression, aidant les utilisateurs à retracer rapidement les modifications de données et à auditer les opérations.

Manuel d'utilisation : [Record History](https://v2.docs.nocobase.com/record-history/)

![](https://static-docs.nocobase.com/202511011346400.png)

---

## Solutions

NocoBase 2.0 fournit des modèles de solutions prêts à l'emploi pour créer rapidement des systèmes métier.

### Système de billetterie intelligent

Une plateforme de gestion des tickets pilotée par l'IA, comprenant :

- **Accès unifié multi-sources** : Formulaires publics, portail client, analyse des e-mails, API/Webhook
- **Équipe d'AI Employees** : Sam (routage), Grace (réponses), Max (connaissances), Lexi (traduction)...
- **Surveillance SLA complète** : Priorité à quatre niveaux P0-P3 avec alertes d'escalade automatiques
- **Auto-circulation des connaissances** : Les tickets deviennent automatiquement des articles de connaissance après résolution

Documentation de la solution : https://v2.docs.nocobase.com/solution/ticket-system/

![ticketing-imgs-2026-01-01-00-46-12](https://static-docs.nocobase.com/ticketing-imgs-2026-01-01-00-46-12.jpg)

### CRM Gestion des clients (Aperçu)

> **Note de version** : La version actuelle est basée sur la 1.x avec une partie de l'interface utilisateur frontale adaptée pour la 2.0, **à des fins d'apprentissage et d'aperçu uniquement**.

NocoBase CRM est une plateforme de gestion de la relation client sans code, flexible et puissante, couvrant :

- **Gestion des clients** : Informations client, contacts, notation client
- **Pipeline de vente** : Gestion des prospects, suivi des opportunités, entonnoir de vente
- **Gestion des commandes** : Devis, commandes, contrats
- **Analyse des données** : Tableaux de bord, rapports, visualisation des données

Documentation de la solution : https://v2.docs.nocobase.com/solution/crm/

Démo en direct : https://demo.nocobase.com/new

![ticketing-imgs-2026-01-01-00-47-06](https://static-docs.nocobase.com/ticketing-imgs-2026-01-01-00-47-06.jpg)

## 2.0-beta vs 1.x

### Légende

- ✅ Pris en charge : Fonctionnalités 1.x adaptées dans la 2.0
- 🆕 Nouvelle fonctionnalité : Nouvelles fonctionnalités dans la 2.0
- ✨ Amélioré : Fonctionnalités améliorées par rapport à la 1.0
- 🔄 En cours : Fonctionnalités en cours de développement
- 🚀 En optimisation : Pris en charge mais nécessite des améliorations
- ❌ Non pris en charge : Fonctionnalités non prises en charge dans la 2.0
- ⚠️ Obsolète : Fonctionnalités obsolètes
- P0/P1/P2 : Priorité des fonctionnalités
  - P0 : À venir prochainement
  - P1 : Sera pris en charge avant la version officielle de la 2.0
  - P2 : Sera pris en charge après la version officielle de la 2.0

### Interface Builder

#### Routes & Menus


| Catégorie      | Fonctionnalité           | Statut         | Priorité | Notes |
| ------------- | ----------------- | -------------- | -------- | ----- |
| Ajouter un élément de menu | Groupe             | ✅ Pris en charge   | -        | -     |
| Ajouter un élément de menu | Page classique (v1) | ✅ Pris en charge   | -        | -     |
| Ajouter un élément de menu | Page moderne (v2)  | 🆕 Nouvelle fonctionnalité | -        | -     |
| Ajouter un élément de menu | Lien              | ✅ Pris en charge   | -        | -     |

#### Pages


| Catégorie      | Fonctionnalité            | Statut           | Priorité | Notes |
| ------------- | ------------------ | ---------------- | -------- | ----- |
| Paramètres de page | Afficher le titre de la page | ✅ Pris en charge     | -        | -     |
| Paramètres de page | Modifier le titre de la page    | ✅ Pris en charge     | -        | -     |
| Paramètres de page | Activer les onglets de page   | ✅ Pris en charge     | -        | -     |
| Paramètres de page | Copier le lien intégré | ❌ Non pris en charge | -        | -     |
| Paramètres de page | Activer l'en-tête de page | ⚠️ Obsolète  | -        | -     |
| Disposition par glisser-déposer   | Disposition des blocs par glisser-déposer  | ✨ Amélioré      | -        | -     |

#### Ajouter des blocs

##### Blocs de données


| Fonctionnalité         | Statut           | Priorité | Notes |
| --------------- | ---------------- | -------- | ----- |
| Tableau           | ✅ Pris en charge     | -        | -     |
| Formulaire (Modifier)     | ✅ Pris en charge     | -        | -     |
| Formulaire (Ajouter)  | ✅ Pris en charge     | -        | -     |
| Détails         | ✅ Pris en charge     | -        | -     |
| Liste            | ✅ Pris en charge     | -        | -     |
| Carte en grille       | ✅ Pris en charge     | -        | -     |
| Commentaires        | ✅ Pris en charge     | -        | -     |
| Carte             | ✅ Pris en charge     | -        | -     |
| Graphiques          | ✨ Amélioré      | -        | -     |
| Calendrier            | ❌ Non pris en charge | -        | -     |
| Gantt           | ❌ Non pris en charge | -        | -     |
| Kanban          | ❌ Non pris en charge | -        | -     |
| Formulaire multi-étapes | ❌ Non pris en charge | -        | -     |

##### Blocs de filtre


| Fonctionnalité  | Statut           | Priorité | Notes |
| -------- | ---------------- | -------- | ----- |
| Formulaire     | ✨ Amélioré      | -        | -     |
| Réductible | ❌ Non pris en charge | -        | -     |
| Arborescence     | ❌ Non pris en charge | -        | -     |

##### Autres blocs


| Fonctionnalité             | Statut           | Priorité | Notes |
| ------------------- | ---------------- | -------- | ----- |
| Modèle de bloc      | 🆕 Nouvelle fonctionnalité   | -        | -     |
| Bloc JS            | 🆕 Nouvelle fonctionnalité   | -        | -     |
| Iframe              | ✅ Pris en charge     | -        | -     |
| Panneau d'actions        | ✅ Pris en charge     | -        | -     |
| Markdown            | ✨ Amélioré      | -        | -     |
| Historique des enregistrements      | 🆕 Nouvelle fonctionnalité   | -        | -     |
| E-mail               | ✅ Pris en charge     | -        | -     |
| Workflow > À faire    | ❌ Non pris en charge | -        | -     |
| Workflow > Approbation | 🔄 En cours   | P0       | -     |

#### Onglets


| Catégorie     | Fonctionnalité  | Statut         | Priorité | Notes |
| ------------ | -------- | -------------- | -------- | ----- |
| Paramètres d'onglet | Modifier l'onglet | ✅ Pris en charge   | -        | -     |
| Paramètres d'onglet | Copier l'UID | 🆕 Nouvelle fonctionnalité | -        | -     |
| Paramètres d'onglet | Supprimer   | ✅ Pris en charge   | -        | -     |

#### Bloc Tableau


| Catégorie                       | Fonctionnalité                      | Statut           | Priorité | Notes |
| ------------------------------ | ---------------------------- | ---------------- | -------- | ----- |
| Paramètres du tableau                 | Titre et description          | ✅ Pris en charge     | -        | -     |
| Paramètres du tableau                 | Règles de liaison de blocs          | ✨ Amélioré      | -        | -     |
| Paramètres du tableau                 | Hauteur du bloc                 | ❌ Non pris en charge | P1       | -     |
| Paramètres du tableau                 | Activer le tri par glisser-déposer | ❌ Non pris en charge | P1       | -     |
| Paramètres du tableau                 | Champ de tri par glisser-déposer  | ❌ Non pris en charge | P1       | -     |
| Paramètres du tableau                 | Mode de chargement des données            | ❌ Non pris en charge | P1       | -     |
| Paramètres du tableau                 | Activer la modification rapide            | 🆕 Nouvelle fonctionnalité   | -        | -     |
| Paramètres du tableau                 | Afficher les numéros de ligne             | ✅ Pris en charge     | -        | -     |
| Paramètres du tableau                 | Taille de page                    | ✅ Pris en charge     | -        | -     |
| Paramètres du tableau                 | Périmètre des données                   | ✅ Pris en charge     | -        | -     |
| Paramètres du tableau                 | Tri par défaut              | ✅ Pris en charge     | -        | -     |
| Paramètres du tableau                 | Activer le tableau arborescent            | ✅ Pris en charge     | -        | -     |
| Paramètres du tableau                 | Développer toutes les lignes par défaut   | ✅ Pris en charge     | -        | -     |
| Paramètres du tableau                 | Densité du tableau                | ✅ Pris en charge     | -        | -     |
| Paramètres du tableau                 | Enregistrer comme modèle             | 🆕 Nouvelle fonctionnalité   | -        | -     |
| Paramètres du tableau                 | Copier l'UID                     | 🆕 Nouvelle fonctionnalité   | -        | -     |
| Paramètres du tableau                 | Supprimer                       | ✅ Pris en charge     | -        | -     |
| Actions du tableau > Actions globales | Ajouter                      | ✅ Pris en charge     | -        | -     |
| Actions du tableau > Actions globales | Supprimer                       | ✅ Pris en charge     | -        | -     |
| Actions du tableau > Actions globales | Filtrer                       | ✅ Pris en charge     | -        | -     |
| Actions du tableau > Actions globales | Lien                         | ✅ Pris en charge     | -        | -     |
| Actions du tableau > Actions globales | Popup                        | ✅ Pris en charge     | -        | -     |
| Actions du tableau > Actions globales | Actualiser                      | ✅ Pris en charge     | -        | -     |
| Actions du tableau > Actions globales | Modification en masse                    | ❌ Non pris en charge | P1       | -     |
| Actions du tableau > Actions globales | Mise à jour en masse                  | ✅ Pris en charge     | -        | -     |
| Actions du tableau > Actions globales | Exporter                       | ✅ Pris en charge     | -        | -     |
| Actions du tableau > Actions globales | Importer                       | ✅ Pris en charge     | -        | -     |
| Actions du tableau > Actions globales | Requête personnalisée               | ❌ Non pris en charge | P2       | -     |
| Actions du tableau > Actions globales | Paramètres des colonnes              | ❌ Non pris en charge | -        | -     |
| Actions du tableau > Actions globales | AI employees                 | 🆕 Nouvelle fonctionnalité   | -        | -     |
| Actions du tableau > Actions globales | Action JS                    | 🆕 Nouvelle fonctionnalité   | -        | -     |
| Actions du tableau > Actions de ligne    | Voir                         | ✅ Pris en charge     | -        | -     |
| Actions du tableau > Actions de ligne    | Modifier                         | ✅ Pris en charge     | -        | -     |
| Actions du tableau > Actions de ligne    | Mettre à jour l'enregistrement                | ✅ Pris en charge     | -        | -     |
| Actions du tableau > Actions de ligne    | Supprimer                       | ✅ Pris en charge     | -        | -     |
| Actions du tableau > Actions de ligne    | Popup                        | ✅ Pris en charge     | -        | -     |
| Actions du tableau > Actions de ligne    | Lien                         | ✅ Pris en charge     | -        | -     |
| Actions du tableau > Actions de ligne    | Dupliquer                    | ❌ Non pris en charge | P2       | -     |
| Actions du tableau > Actions de ligne    | Requête personnalisée               | ❌ Non pris en charge | P2       | -     |
| Actions du tableau > Actions de ligne    | AI employees                 | 🆕 Nouvelle fonctionnalité   | -        | -     |
| Actions du tableau > Actions de ligne    | Action JS                    | 🆕 Nouvelle fonctionnalité   | -        | -     |
| Colonnes du tableau                  | Afficher les champs de la collection    | ✅ Pris en charge     | -        | -     |
| Colonnes du tableau                  | Afficher les champs d'association   | ✅ Pris en charge     | -        | -     |
| Colonnes du tableau > Autres colonnes  | Champ JS                     | 🆕 Nouvelle fonctionnalité   | -        | -     |
| Colonnes du tableau > Autres colonnes  | Colonne JS                    | 🆕 Nouvelle fonctionnalité   | -        | -     |
| Colonnes du tableau > Autres colonnes  | Actions                      | ✨ Amélioré      | -        | -     |
| Paramètres des colonnes du tableau          | Titre de la colonne                 | ✅ Pris en charge     | -        | -     |
| Paramètres des colonnes du tableau          | Info-bulle                      | ✅ Pris en charge     | -        | -     |
| Paramètres des colonnes du tableau          | Largeur de colonne                 | ✨ Amélioré      | -        | -     |
| Paramètres des colonnes du tableau          | Activer la modification rapide            | 🆕 Nouvelle fonctionnalité   | -        | -     |
| Paramètres des colonnes du tableau          | Triable                     | ✅ Pris en charge     | -        | -     |
| Paramètres des colonnes du tableau          | Fixe                        | ✅ Pris en charge     | -        | -     |
| Paramètres des colonnes du tableau          | Style                        | ❌ Non pris en charge | P2       | -     |
| Paramètres des colonnes du tableau          | Mode d'affichage                 | 🆕 Nouvelle fonctionnalité   | -        | -     |
| Paramètres des colonnes du tableau          | Afficher le bouton de copie          | ❌ Non pris en charge | -        | -     |
| Paramètres des colonnes du tableau          | Points de suspension en cas de débordement de texte    | ✨ Amélioré      | -        | -     |
| Paramètres des colonnes du tableau          | Composant de champ              | ✨ Amélioré      | -        | -     |
| Paramètres des colonnes du tableau          | Mode de rendu                  | 🆕 Nouvelle fonctionnalité   | -        | -     |
| Paramètres des colonnes du tableau          | Activer le clic pour ouvrir         | ✨ Amélioré      | -        | -     |
| Paramètres des colonnes du tableau          | Popup de modification                   | ✨ Amélioré      | -        | -     |
| Paramètres des colonnes du tableau          | Copier l'UID                     | 🆕 Nouvelle fonctionnalité   | -        | -     |
| Paramètres des colonnes du tableau          | Supprimer                       | ✅ Pris en charge     | -        | -     |
| Paramètres des colonnes du tableau          | Masquer la colonne                  | ⚠️ Obsolète  | -        | -     |
| Paramètres des colonnes du tableau          | Connecter les blocs de données          | ⚠️ Obsolète  | -        | -     |
| Paramètres des colonnes du tableau          | Enregistrer comme modèle de référence   | ⚠️ Obsolète  | -        | -     |
| Paramètres des colonnes du tableau          | Enregistrer comme modèle hérité   | ⚠️ Obsolète  | -        | -     |

#### Bloc Formulaire d'ajout et de modification


| Catégorie                                     | Fonctionnalité                               | Statut           | Priorité | Notes |
| -------------------------------------------- | ------------------------------------- | ---------------- | -------- | ----- |
| Paramètres du formulaire                                | Titre et description                   | ✅ Pris en charge     | -        | -     |
| Paramètres du formulaire                                | Hauteur du bloc                          | ❌ Non pris en charge | P1       | -     |
| Paramètres du formulaire                                | Modèles de données de formulaire                   | ❌ Non pris en charge | -        | -     |
| Paramètres du formulaire                                | Valeurs initiales du formulaire                   | 🔄 En cours   | P1       | -     |
| Paramètres du formulaire                                | Disposition                                | ✅ Pris en charge     | -        | -     |
| Paramètres du formulaire                                | Règles de liaison de blocs                   | ✨ Amélioré      | -        | -     |
| Paramètres du formulaire                                | Règles de liaison de champs                   | 🔄 En cours   | P2       | -     |
| Paramètres du formulaire                                | Périmètre des données                            | ✅ Pris en charge     | -        | -     |
| Paramètres du formulaire                                | Activer les brouillons                         | 🆕 Nouvelle fonctionnalité   | -        | -     |
| Paramètres du formulaire                                | Enregistrer comme modèle                      | 🆕 Nouvelle fonctionnalité   | -        | -     |
| Paramètres du formulaire                                | Convertir la référence en doublon        | 🆕 Nouvelle fonctionnalité   | -        | -     |
| Paramètres du formulaire                                | Convertir les champs de référence en doublon | 🆕 Nouvelle fonctionnalité   | -        | -     |
| Paramètres du formulaire                                | Copier l'UID                              | 🆕 Nouvelle fonctionnalité   | -        | -     |
| Paramètres du formulaire                                | Supprimer                                | ✅ Pris en charge     | -        | -     |
| Paramètres du formulaire                                | Enregistrer comme modèle de référence            | ⚠️ Obsolète  | -        | -     |
| Paramètres du formulaire                                | Enregistrer comme modèle hérité            | ⚠️ Obsolète  | -        | -     |
| Éléments de champ du formulaire                             | Afficher les champs de la collection             | ✅ Pris en charge     | -        | -     |
| Éléments de champ du formulaire                             | Afficher les champs d'association            | ❌ Non pris en charge | P2       | -     |
| Éléments de champ du formulaire > Autres                    | Modèle de champ                        | 🆕 Nouvelle fonctionnalité   | -        | -     |
| Éléments de champ du formulaire > Autres                    | Élément JS                               | 🆕 Nouvelle fonctionnalité   | -        | -     |
| Éléments de champ du formulaire > Autres                    | Séparateur                               | ✨ Amélioré      | -        | -     |
| Éléments de champ du formulaire > Autres                    | Markdown                              | ✨ Amélioré      | -        | -     |
| Paramètres des éléments de champ du formulaire                     | Afficher l'étiquette                            | ✅ Pris en charge     | -        | -     |
| Paramètres des éléments de champ du formulaire                     | Étiquette                                 | ✅ Pris en charge     | -        | -     |
| Paramètres des éléments de champ du formulaire                     | Info-bulle                               | ✅ Pris en charge     | -        | -     |
| Paramètres des éléments de champ du formulaire                     | Description                           | ✅ Pris en charge     | -        | -     |
| Paramètres des éléments de champ du formulaire                     | Valeur par défaut                         | 🚀 En optimisation    | P0       | -     |
| Paramètres des éléments de champ du formulaire                     | Validation                            | ✨ Amélioré      | -        | -     |
| Paramètres des éléments de champ du formulaire                     | Requis                              | ✅ Pris en charge     | -        | -     |
| Paramètres des éléments de champ du formulaire                     | Mode d'affichage                          | ✨ Amélioré      | -        | -     |
| Paramètres des éléments de champ du formulaire > Sous-formulaire           | Multiple                              | ❌ Non pris en charge | P1       | -     |
| Paramètres des éléments de champ du formulaire > Sous-formulaire           | Règles de liaison de champs                   | 🔄 En cours   | P2       | -     |
| Paramètres des éléments de champ du formulaire > Sous-tableau          | Règles de liaison de champs                   | ❌ Non pris en charge | P2       | -     |
| Paramètres des éléments de champ du formulaire > Sous-formulaire (Popover) | -                                     | ❌ Non pris en charge | -        | -     |
| Paramètres des éléments de champ du formulaire                     | Copier l'UID                              | 🆕 Nouvelle fonctionnalité   | -        | -     |
| Paramètres des éléments de champ du formulaire                     | Supprimer                                | ✅ Pris en charge     | -        | -     |
| Actions du formulaire                                 | Soumettre                                | 🚀 En optimisation    | P1       | -     |
| Actions du formulaire                                 | Déclencher un workflow                      | ✅ Pris en charge     | -        | -     |
| Actions du formulaire                                 | Popup                                 | ❌ Non pris en charge | P1       | -     |
| Actions du formulaire                                 | Requête personnalisée                        | ❌ Non pris en charge | P2       | -     |
| Actions du formulaire                                 | AI employees                          | 🆕 Nouvelle fonctionnalité   | -        | -     |
| Actions du formulaire                                 | Action JS                             | 🆕 Nouvelle fonctionnalité   | -        | -     |

#### Bloc Détails


| Catégorie                                                | Fonctionnalité                    | Statut           | Priorité | Notes |
| ------------------------------------------------------- | -------------------------- | ---------------- | -------- | ----- |
| Paramètres des détails                                        | Titre et description        | ✅ Pris en charge     | -        | -     |
| Paramètres des détails                                        | Hauteur du bloc               | ❌ Non pris en charge | P1       | -     |
| Paramètres des détails                                        | Règles de liaison de blocs        | ✨ Amélioré      | -        | -     |
| Paramètres des détails                                        | Mode de chargement des données          | ❌ Non pris en charge | P1       | -     |
| Paramètres des détails                                        | Disposition                     | ✅ Pris en charge     | -        | -     |
| Paramètres des détails                                        | Périmètre des données                 | ✅ Pris en charge     | -        | -     |
| Paramètres des détails                                        | Tri par défaut            | ✅ Pris en charge     | -        | -     |
| Paramètres des détails                                        | Règles de liaison de champs        | 🚀 En optimisation    | -        | -     |
| Paramètres des détails                                        | Enregistrer comme modèle           | 🆕 Nouvelle fonctionnalité   | -        | -     |
| Paramètres des détails                                        | Copier l'UID                   | 🆕 Nouvelle fonctionnalité   | -        | -     |
| Paramètres des détails                                        | Supprimer                     | ✅ Pris en charge     | -        | -     |
| Paramètres des détails                                        | Enregistrer comme modèle de référence | ⚠️ Obsolète  | -        | -     |
| Paramètres des détails                                        | Enregistrer comme modèle hérité | ⚠️ Obsolète  | -        | -     |
| Actions des détails                                         | Voir                       | 🆕 Nouvelle fonctionnalité   | -        | -     |
| Actions des détails                                         | Modifier                       | ✅ Pris en charge     | -        | -     |
| Actions des détails                                         | Ouvrir le popup                 | ✅ Pris en charge     | -        | -     |
| Actions des détails                                         | Mettre à jour l'enregistrement              | ✅ Pris en charge     | -        | -     |
| Actions des détails                                         | Supprimer                     | ✅ Pris en charge     | -        | -     |
| Actions des détails                                         | Lien                       | 🆕 Nouvelle fonctionnalité   | -        | -     |
| Actions des détails                                         | Impression de modèle             | ✅ Pris en charge     | -        | -     |
| Actions des détails                                         | Imprimer                      | ❌ Non pris en charge | -        | -     |
| Actions des détails                                         | Requête personnalisée             | ❌ Non pris en charge | P2       | -     |
| Actions des détails                                         | Déclencher un workflow           | 🆕 Nouvelle fonctionnalité   | -        | -     |
| Actions des détails                                         | AI employees               | 🆕 Nouvelle fonctionnalité   | -        | -     |
| Actions des détails                                         | Action JS                  | 🆕 Nouvelle fonctionnalité   | -        | -     |
| Champs des détails                                          | Afficher les champs de la collection  | ✅ Pris en charge     | -        | -     |
| Champs des détails                                          | Afficher les champs d'association | ✅ Pris en charge     | -        | -     |
| Champs des détails > Autres                                 | Modèle de champ             | 🆕 Nouvelle fonctionnalité   | -        | -     |
| Champs des détails > Autres                                 | Champ JS                   | 🆕 Nouvelle fonctionnalité   | -        | -     |
| Champs des détails > Autres                                 | Élément JS                    | 🆕 Nouvelle fonctionnalité   | -        | -     |
| Champs des détails > Autres                                 | Séparateur                    | ✅ Pris en charge     | -        | -     |
| Champs des détails > Autres                                 | Markdown                   | ✨ Amélioré      | -        | -     |
| Paramètres des éléments de détail                                   | Afficher le nom du champ            | ✅ Pris en charge     | -        | -     |
| Paramètres des éléments de détail                                   | Nom du champ                 | ✅ Pris en charge     | -        | -     |
| Paramètres des éléments de détail                                   | Info-bulle                    | ✅ Pris en charge     | -        | -     |
| Paramètres des éléments de détail                                   | Description                | ✅ Pris en charge     | -        | -     |
| Paramètres des éléments de détail                                   | Style                      | ❌ Non pris en charge | P2       | -     |
| Paramètres des éléments de détail > Affichage du titre (champ cliquable) | Champ de titre                | ✨ Amélioré      | -        | -     |
| Paramètres des éléments de détail > Affichage du titre (champ cliquable) | Style                      | ❌ Non pris en charge | P2       | -     |
| Paramètres des éléments de détail > Affichage du titre (champ cliquable) | Mode d'affichage               | 🆕 Nouvelle fonctionnalité   | -        | -     |
| Paramètres des éléments de détail > Affichage du titre (champ cliquable) | Points de suspension en cas de débordement de texte  | ✅ Pris en charge     | -        | -     |
| Paramètres des éléments de détail > Affichage du titre (champ cliquable) | Activer le clic pour ouvrir       | ✅ Pris en charge     | -        | -     |
| Paramètres des éléments de détail > Affichage du titre (champ cliquable) | Paramètres du popup             | ✨ Amélioré      | -        | -     |
| Paramètres des éléments de détail > Sous-tableau                        | Taille de page                  | ✅ Pris en charge     | -        | -     |
| Paramètres des éléments de détail > Sous-tableau                        | Définir les règles de tri          | ❌ Non pris en charge | -        | -     |
| Paramètres des éléments de détail > Sous-tableau                        | Activer les numéros de ligne         | ❌ Non pris en charge | -        | -     |
| Paramètres des éléments de détail > Sous-tableau                        | Règles de liaison              | ❌ Non pris en charge | -        | -     |
| Paramètres des éléments de détail > Sous-détails                      | Règles de liaison              | ❌ Non pris en charge | -        | -     |
| Paramètres des éléments de détail > Sous-détails                      | Disposition                     | ❌ Non pris en charge | -        | -     |
| Paramètres des éléments de détail > Texte volumineux                      | Points de suspension en cas de débordement de texte  | ✨ Amélioré      | -        | -     |
| Paramètres des éléments de détail > Texte volumineux                      | Mode de rendu                | ✨ Amélioré      | -        | -     |
| Paramètres des éléments de détail > Aperçu                         | -                          | ✨ Amélioré      | -        | -     |
| Paramètres des éléments de détail                                   | Copier l'UID                   | 🆕 Nouvelle fonctionnalité   | -        | -     |
| Paramètres des éléments de détail                                   | Supprimer                     | ✅ Pris en charge     | -        | -     |

#### Bloc Liste


| Catégorie                      | Fonctionnalité                               | Statut           | Priorité | Notes |
| ----------------------------- | ------------------------------------- | ---------------- | -------- | ----- |
| Paramètres de la liste                 | Titre et description                   | ✅ Pris en charge     | -        | -     |
| Paramètres de la liste                 | Hauteur du bloc                          | ❌ Non pris en charge | P1       | -     |
| Paramètres de la liste                 | Règles de liaison de blocs                   | ✨ Amélioré      | -        | -     |
| Paramètres de la liste                 | Taille de page                             | ✅ Pris en charge     | -        | -     |
| Paramètres de la liste                 | Périmètre des données                            | ✅ Pris en charge     | -        | -     |
| Paramètres de la liste                 | Tri par défaut                       | ✅ Pris en charge     | -        | -     |
| Paramètres de la liste                 | Mode de chargement des données                     | ✅ Pris en charge     | -        | -     |
| Paramètres de la liste                 | Disposition                                | ✅ Pris en charge     | -        | -     |
| Paramètres de la liste                 | Enregistrer comme modèle                      | 🆕 Nouvelle fonctionnalité   | -        | -     |
| Paramètres de la liste                 | Convertir la référence en doublon        | 🆕 Nouvelle fonctionnalité   | -        | -     |
| Paramètres de la liste                 | Convertir les champs de référence en doublon | 🆕 Nouvelle fonctionnalité   | -        | -     |
| Paramètres de la liste                 | Copier l'UID                              | 🆕 Nouvelle fonctionnalité   | -        | -     |
| Paramètres de la liste                 | Supprimer                                | ✅ Pris en charge     | -        | -     |
| Paramètres de la liste                 | Enregistrer comme modèle de référence            | ⚠️ Obsolète  | -        | -     |
| Paramètres de la liste                 | Enregistrer comme modèle hérité            | ⚠️ Obsolète  | -        | -     |
| Actions de la liste > Actions globales | Ajouter                               | ✅ Pris en charge     | -        | -     |
| Actions de la liste > Actions globales | Supprimer                                | ✅ Pris en charge     | -        | -     |
| Actions de la liste > Actions globales | Filtrer                                | ✅ Pris en charge     | -        | -     |
| Actions de la liste > Actions globales | Lien                                  | 🆕 Nouvelle fonctionnalité   | -        | -     |
| Actions de la liste > Actions globales | Popup                                 | 🆕 Nouvelle fonctionnalité   | -        | -     |
| Actions de la liste > Actions globales | Actualiser                               | ✅ Pris en charge     | -        | -     |
| Actions de la liste > Actions globales | Mise à jour en masse                           | 🚀 En optimisation    | -        | -     |
| Actions de la liste > Actions globales | Exporter                                | ✅ Pris en charge     | -        | -     |
| Actions de la liste > Actions globales | Importer                                | ✅ Pris en charge     | -        | -     |
| Actions de la liste > Actions globales | Exporter les pièces jointes                    | 🆕 Nouvelle fonctionnalité   | -        | -     |
| Actions de la liste > Actions globales | Envoyer un e-mail                            | 🆕 Nouvelle fonctionnalité   | -        | -     |
| Actions de la liste > Actions globales | Impression de modèle                        | 🆕 Nouvelle fonctionnalité   | -        | -     |
| Actions de la liste > Actions globales | Déclencher un workflow                      | ✅ Pris en charge     | -        | -     |
| Actions de la liste > Actions globales | Requête personnalisée                        | ❌ Non pris en charge | P2       | -     |
| Actions de la liste > Actions globales | AI employees                          | 🆕 Nouvelle fonctionnalité   | -        | -     |
| Actions de la liste > Actions globales | Action JS                             | 🆕 Nouvelle fonctionnalité   | -        | -     |
| Actions de la liste > Actions de ligne    | Voir                                  | ✅ Pris en charge     | -        | -     |
| Actions de la liste > Actions de ligne    | Supprimer                                | ✅ Pris en charge     | -        | -     |
| Actions de la liste > Actions de ligne    | Modifier                                  | ✅ Pris en charge     | -        | -     |
| Actions de la liste > Actions de ligne    | Lien                                  | ✅ Pris en charge     | -        | -     |
| Actions de la liste > Actions de ligne    | Popup                                 | ✅ Pris en charge     | -        | -     |
| Actions de la liste > Actions de ligne    | Mettre à jour l'enregistrement                         | ✅ Pris en charge     | -        | -     |
| Actions de la liste > Actions de ligne    | Impression de modèle                        | ✅ Pris en charge     | -        | -     |
| Actions de la liste > Actions de ligne    | Déclencher un workflow                      | ✅ Pris en charge     | -        | -     |
| Actions de la liste > Actions de ligne    | Requête personnalisée                        | ❌ Non pris en charge | P2       | -     |
| Actions de la liste > Actions de ligne    | AI employees                          | 🆕 Nouvelle fonctionnalité   | -        | -     |
| Actions de la liste > Actions de ligne    | Action JS                             | 🆕 Nouvelle fonctionnalité   | -        | -     |
| Champs de la liste                   | Afficher les champs de la collection             | ✅ Pris en charge     | -        | -     |
| Champs de la liste                   | Afficher les champs d'association            | ✅ Pris en charge     | -        | -     |
| Champs de la liste > Autres          | Champ JS                              | 🆕 Nouvelle fonctionnalité   | -        | -     |
| Champs de la liste > Autres          | Élément JS                               | 🆕 Nouvelle fonctionnalité   | -        | -     |
| Champs de la liste > Autres          | Séparateur                               | ✅ Pris en charge     | -        | -     |
| Champs de la liste > Autres          | Markdown                              | 🆕 Nouvelle fonctionnalité   | -        | -     |

#### Autres blocs


| Fonctionnalité               | Statut           | Priorité | Notes |
| --------------------- | ---------------- | -------- | ----- |
| Bloc de carte en grille       | ✅ Pris en charge     | -        | -     |
| Bloc de commentaires        | ✅ Pris en charge     | -        | -     |
| Bloc de carte             | ✅ Pris en charge     | -        | -     |
| Bloc de graphiques          | ✨ Amélioré      | -        | -     |
| Bloc de calendrier        | ❌ Non pris en charge | -        | -     |
| Bloc Gantt           | ❌ Non pris en charge | -        | -     |
| Bloc Kanban          | ❌ Non pris en charge | -        | -     |
| Bloc de formulaire multi-étapes | ❌ Non pris en charge | -        | -     |
| Formulaire de filtre           | ✨ Amélioré      | -        | -     |
| Réductible de filtre       | ❌ Non pris en charge | -        | -     |
| Filtre arborescent           | ❌ Non pris en charge | -        | -     |
| Modèle de bloc        | 🆕 Nouvelle fonctionnalité   | -        | -     |
| Bloc JS              | 🆕 Nouvelle fonctionnalité   | -        | -     |
| Iframe                | ✅ Pris en charge     | -        | -     |
| Panneau d'actions          | ✅ Pris en charge     | -        | -     |
| Markdown              | ✨ Amélioré      | -        | -     |
| Historique des enregistrements        | 🆕 Nouvelle fonctionnalité   | -        | -     |
| Courrier                  | ✅ Pris en charge     | -        | -     |
| Workflow              | 🔄 En cours   | P0       | -     |

#### Panneau d'actions


| Catégorie              | Fonctionnalité                   | Statut           | Priorité | Notes |
| --------------------- | ------------------------- | ---------------- | -------- | ----- |
| Paramètres du panneau d'actions | Titre et description       | ✅ Pris en charge     | -        | -     |
| Paramètres du panneau d'actions | Hauteur du bloc              | ❌ Non pris en charge | P1       | -     |
| Paramètres du panneau d'actions | Règles de liaison de blocs       | ✨ Amélioré      | -        | -     |
| Paramètres du panneau d'actions | Disposition                    | ✅ Pris en charge     | -        | -     |
| Paramètres du panneau d'actions | Points de suspension en cas de débordement de texte | ✅ Pris en charge     | -        | -     |
| Paramètres du panneau d'actions | Enregistrer comme modèle          | 🆕 Nouvelle fonctionnalité   | -        | -     |
| Paramètres du panneau d'actions | Copier l'UID                  | 🆕 Nouvelle fonctionnalité   | -        | -     |
| Paramètres du panneau d'actions | Supprimer                    | ✅ Pris en charge     | -        | -     |
| Actions               | Popup                     | ✅ Pris en charge     | -        | -     |
| Actions               | Lien                      | ✅ Pris en charge     | -        | -     |
| Actions               | Scanner le code QR              | ✅ Pris en charge     | -        | -     |
| Actions               | Mettre à jour l'enregistrement             | ❌ Non pris en charge | P2       | -     |
| Actions               | Requête personnalisée            | ❌ Non pris en charge | P2       | -     |
| Actions               | Déclencher un workflow          | ❌ Non pris en charge | P2       | -     |
| Actions               | Action JS                 | 🆕 Nouvelle fonctionnalité   | -        | -     |

#### Champs

##### Mode lecture seule


| Catégorie           | Fonctionnalité             | Statut           | Priorité | Notes |
| ------------------ | ------------------- | ---------------- | -------- | ----- |
| Champ cliquable    | Affichage du texte        | ✅ Pris en charge     | -        | -     |
| Champ cliquable    | Affichage du nombre      | ✅ Pris en charge     | -        | -     |
| Champ cliquable    | Affichage de la date        | ✅ Pris en charge     | -        | -     |
| Champ cliquable    | Affichage de l'heure        | ✅ Pris en charge     | -        | -     |
| Champ cliquable    | Affichage de l'énumération        | ✅ Pris en charge     | -        | -     |
| Champ cliquable    | Affichage de la relation    | ✅ Pris en charge     | -        | -     |
| Affichage de texte volumineux | Affichage de texte enrichi   | ✅ Pris en charge     | -        | -     |
| Affichage de texte volumineux | Affichage Markdown    | ✅ Pris en charge     | -        | -     |
| Affichage de texte volumineux | Affichage de bloc de code  | ❌ Non pris en charge | P1       | -     |
| Affichage de texte volumineux | Champ JSON          | ✅ Pris en charge     | -        | -     |
| Affichage de champ      | Champ URL           | ✅ Pris en charge     | -        | -     |
| Affichage de champ      | Champ d'aperçu       | ✅ Pris en charge     | -        | -     |
| Affichage de champ      | Champ de case à cocher      | ✅ Pris en charge     | -        | -     |
| Affichage de champ      | Champ d'icône          | ✅ Pris en charge     | -        | -     |
| Affichage de champ      | Champ de couleur         | ✅ Pris en charge     | -        | -     |
| Affichage de champ      | Calcul de formule | ✅ Pris en charge     | -        | -     |
| Affichage de champ      | Code automatique           | ✅ Pris en charge     | -        | -     |
| Champ de relation     | Sous-détails          | 🔄 En cours   | P0       | -     |
| Champ de relation     | Sous-tableau            | 🔄 En cours   | P0       | -     |
| Affichage de champ      | Affichage de la carte         | ✅ Pris en charge     | -        | -     |
| Affichage de champ      | Champ JS            | ✅ Pris en charge     | -        | -     |
| Affichage de champ      | TableOID            | ✅ Pris en charge     | -        | -     |
| Affichage de champ      | Région de Chine        | ❌ Non pris en charge | -        | -     |
| Affichage de champ      | Code QR             | ❌ Non pris en charge | -        | -     |

##### Mode édition


| Fonctionnalité                  | Statut           | Priorité | Notes |
| ------------------------ | ---------------- | -------- | ----- |
| Saisie sur une ligne        | ✅ Pris en charge     | -        | -     |
| Saisie de nombre             | ✅ Pris en charge     | -        | -     |
| Saisie de pourcentage         | ✅ Pris en charge     | -        | -     |
| Saisie de mot de passe           | ✅ Pris en charge     | -        | -     |
| Saisie NanoID             | ✅ Pris en charge     | -        | -     |
| Saisie de texte multi-lignes    | ✅ Pris en charge     | -        | -     |
| Éditeur de texte enrichi         | ✅ Pris en charge     | -        | -     |
| Éditeur de code              | ❌ Non pris en charge | -        | -     |
| Éditeur Markdown          | ✅ Pris en charge     | -        | -     |
| Saisie JSON               | ✅ Pris en charge     | -        | -     |
| Sélecteur                 | ✅ Pris en charge     | -        | -     |
| Bouton radio                    | ✅ Pris en charge     | -        | -     |
| Case à cocher                 | ✅ Pris en charge     | -        | -     |
| Groupe de cases à cocher           | ✅ Pris en charge     | -        | -     |
| Sélecteur de date              | ✅ Pris en charge     | -        | -     |
| Sélecteur de couleur             | ✅ Pris en charge     | -        | -     |
| Sélecteur d'icône              | ✅ Pris en charge     | -        | -     |
| Sélecteur d'heure              | ✅ Pris en charge     | -        | -     |
| Sélecteur d'enregistrement (liste déroulante) | ✅ Pris en charge     | -        | -     |
| Sélecteur d'enregistrement (popup)    | ✅ Pris en charge     | -        | -     |
| Sélecteur d'enregistrement (cascade)  | ✅ Pris en charge     | -        | -     |
| Gestionnaire de fichiers             | ✅ Pris en charge     | -        | -     |
| Sélecteur de collection      | 🔄 En cours   | P2       | -     |
| Région de Chine             | ❌ Non pris en charge | -        | -     |
| Code QR                  | ❌ Non pris en charge | -        | -     |
| Scanner pour saisir            | ❌ Non pris en charge | -        | -     |
| Sous-formulaire                  | 🚀 En optimisation    | P0       | -     |
| Sous-tableau (simple)        | 🚀 En optimisation    | P0       | -     |
| Sous-tableau (avancé)      | 🔄 En cours   | P1       | -     |
| Sélecteur de carte               | ✅ Pris en charge     | -        | -     |
| Champ JS                 | ✅ Pris en charge     | -        | -     |

#### Actions


| Fonctionnalité            | Statut           | Priorité | Notes |
| ------------------ | ---------------- | -------- | ----- |
| Popup              | ✅ Pris en charge     | -        | -     |
| Voir               | ✅ Pris en charge     | -        | -     |
| Filtrer             | ✅ Pris en charge     | -        | -     |
| Ajouter                | ✅ Pris en charge     | -        | -     |
| Ajouter un sous-enregistrement     | ✅ Pris en charge     | -        | -     |
| Lien               | ✅ Pris en charge     | -        | -     |
| Modifier               | ✅ Pris en charge     | -        | -     |
| Supprimer             | ✅ Pris en charge     | -        | -     |
| Actualiser            | ✅ Pris en charge     | -        | -     |
| Mettre à jour l'enregistrement      | 🚀 En optimisation    | P1       | -     |
| Soumettre             | 🚀 En optimisation    | P1       | -     |
| Télécharger             | ✅ Pris en charge     | -        | -     |
| Déclencher un workflow   | ✅ Pris en charge     | -        | -     |
| Modification en masse          | ❌ Non pris en charge | P1       | -     |
| Mise à jour en masse        | ✅ Pris en charge     | -        | -     |
| Requête personnalisée     | ❌ Non pris en charge | -        | -     |
| Copier               | ❌ Non pris en charge | -        | -     |
| Imprimer              | ❌ Non pris en charge | -        | -     |
| Impression de modèle     | ✅ Pris en charge     | -        | -     |
| Importer             | ✅ Pris en charge     | -        | -     |
| Exporter             | ✅ Pris en charge     | -        | -     |
| Exporter les pièces jointes | ✅ Pris en charge     | -        | -     |
| Scanner le code QR       | ✅ Pris en charge     | -        | -     |
| AI employees       | 🆕 Nouvelle fonctionnalité   | -        | -     |
| Action JS          | 🆕 Nouvelle fonctionnalité   | -        | -     |

#### Fonctionnalités avancées


| Catégorie             | Fonctionnalité                    | Statut                        | Priorité | Notes |
| -------------------- | -------------------------- | ----------------------------- | -------- | ----- |
| Modèles d'interface         | Bloc                      | 🆕 Nouvelle fonctionnalité                | -        | -     |
| Modèles d'interface         | Popup                      | 🆕 Nouvelle fonctionnalité                | -        | -     |
| Modèles d'interface         | Champ                      | 🆕 Nouvelle fonctionnalité                | -        | -     |
| Modèles d'interface > Champ | Champ de formulaire                 | 🆕 Nouvelle fonctionnalité                | -        | -     |
| Modèles d'interface > Champ | Champ de détail              | 🆕 Nouvelle fonctionnalité                | -        | -     |
| Modèles d'interface > Champ | Champ d'approbation             | 🆕 Nouvelle fonctionnalité                | -        | -     |
| Interface et autorisations   | Interface et autorisations         | ✨ Amélioré                   | -        | -     |
| Flux d'événements           | Événements du flux d'événements          | 🆕 Nouvelle fonctionnalité, 🚀 En optimisation | P1       | -     |
| Flux d'événements           | Actions du flux d'événements         | 🆕 Nouvelle fonctionnalité, 🚀 En optimisation | P1       | -     |
| Règles de liaison        | Règles de liaison              | 🚀 En optimisation                 | P1       | -     |
| Variables            | Utilisateur actuel               | 🚀 En optimisation                 | P1       | -     |
| Variables            | Rôle actuel (identifiant)  | ✅ Pris en charge                  | -        | -     |
| Variables            | Espace actuel (identifiant) | ❌ Non pris en charge              | P1       | -     |
| Variables            | Clé API                    | ✅ Pris en charge                  | -        | -     |
| Variables            | Paramètres de requête URL       | ✅ Pris en charge                  | -        | -     |
| Variables            | Appareil actuel             | 🆕 Nouvelle fonctionnalité                | -        | -     |
| Variables            | Enregistrement actuel             | ✅ Pris en charge                  | -        | -     |
| Variables            | Formulaire actuel               | ✅ Pris en charge                  | -        | -     |
| Variables            | Objet actuel             | ❌ Non pris en charge              | P1       | -     |
| Variables            | Popup actuel              | 🚀 En optimisation                 | P1       | -     |
| Variables            | Enregistrements sélectionnés actuellement   | ❌ Non pris en charge              | P2       | -     |
| Variables            | Variables de date             | 🔄 En cours                | P1       | -     |
| Variables            | Variables et clés         | 🔄 En cours                | P1       | -     |
| JavaScript           | Exécuter JavaScript             | 🆕 Nouvelle fonctionnalité                | -        | -     |

### Statut des plugins


| Nom du plugin                                      | Statut du plugin                    | Priorité | Notes                                           |
| ------------------------------------------------ | -------------------------------- | -------- | ----------------------------------------------- |
| @nocobase/plugin-action-bulk-edit                | ❌ Non pris en charge                 | P1       | -                                               |
| @nocobase/plugin-action-custom-request           | ❌ Non pris en charge                 | -        | -                                               |
| @nocobase/plugin-action-duplicate                | ❌ Non pris en charge                 | -        | -                                               |
| @nocobase/plugin-action-print                    | ❌ Non pris en charge                 | -        | -                                               |
| @nocobase/plugin-block-multi-step-form           | ❌ Non pris en charge                 | -        | -                                               |
| @nocobase/plugin-block-tree                      | ❌ Non pris en charge                 | -        | -                                               |
| @nocobase/plugin-calendar                        | ❌ Non pris en charge                 | -        | -                                               |
| @nocobase/plugin-custom-variables                | ❌ Non pris en charge                 | -        | -                                               |
| @nocobase/plugin-embed                           | ❌ Non pris en charge                 | -        | -                                               |
| @nocobase/plugin-field-china-region              | ❌ Non pris en charge                 | -        | -                                               |
| @nocobase/plugin-field-code                      | ❌ Non pris en charge                 | P1       | -                                               |
| @nocobase/plugin-field-sort                      | ❌ Non pris en charge                 | -        | Tri par glisser-déposer des enregistrements non pris en charge  |
| @nocobase/plugin-file-previewer-office           | ❌ Non pris en charge                 | -        | -                                               |
| @nocobase/plugin-gantt                           | ❌ Non pris en charge                 | -        | -                                               |
| @nocobase/plugin-kanban                          | ❌ Non pris en charge                 | -        | -                                               |
| @nocobase/plugin-public-forms                    | ❌ Non pris en charge                 | -        | -                                               |
| @nocobase/plugin-text-copy                       | ❌ Non pris en charge                 | -        | -                                               |
| @nocobase/plugin-data-visualization-echarts      | ⚠️ Obsolète                  | -        | Utilisez @nocobase/plugin-data-visualization à la place |
| @nocobase/plugin-field-component-mask            | ⚠️ Obsolète                  | -        | -                                               |
| @nocobase/plugin-mobile                          | ⚠️ Obsolète                  | -        | Utilisez @nocobase/plugin-ui-layout à la place          |
| @nocobase/plugin-multi-app-manager               | ⚠️ Obsolète                  | -        | Utilisez @nocobase/plugin-app-supervisor à la place     |
| @nocobase/plugin-app-supervisor                  | 🆕 Nouvelle fonctionnalité                   | P0       | À venir prochainement                                     |
| @nocobase/plugin-ai                              | 🆕 Nouvelle fonctionnalité                   | -        | -                                               |
| @nocobase/plugin-ai-gigachat                     | 🆕 Nouvelle fonctionnalité                   | -        | -                                               |
| @nocobase/plugin-block-grid-card                 | 🆕 Nouvelle fonctionnalité                   | -        | -                                               |
| @nocobase/plugin-block-list                      | 🆕 Nouvelle fonctionnalité                   | -        | -                                               |
| @nocobase/plugin-block-markdown                  | 🆕 Nouvelle fonctionnalité                   | -        | -                                               |
| @nocobase/plugin-flow-engine                     | 🆕 Nouvelle fonctionnalité                   | -        | -                                               |
| @nocobase/plugin-form-drafts                     | 🆕 Nouvelle fonctionnalité                   | -        | -                                               |
| @nocobase/plugin-multi-space                     | 🆕 Nouvelle fonctionnalité                   | -        | -                                               |
| @nocobase/plugin-record-history                  | 🆕 Nouvelle fonctionnalité                   | -        | -                                               |
| @nocobase/plugin-telemetry                       | 🆕 Nouvelle fonctionnalité                   | -        | -                                               |
| @nocobase/plugin-ui-layout                       | 🆕 Nouvelle fonctionnalité, ❌ Non pris en charge | P2       | Planifié                                         |
| @nocobase/plugin-ui-templates                    | 🆕 Nouvelle fonctionnalité                   | -        | -                                               |
| @nocobase/plugin-acl                             | ✅ Pris en charge                     | -        | -                                               |
| @nocobase/plugin-action-bulk-update              | ✅ Pris en charge                     | -        | -                                               |
| @nocobase/plugin-action-export                   | ✅ Pris en charge                     | -        | -                                               |
| @nocobase/plugin-action-export-pro               | ✅ Pris en charge                     | -        | -                                               |
| @nocobase/plugin-action-import                   | ✅ Pris en charge                     | -        | -                                               |
| @nocobase/plugin-action-import-pro               | ✅ Pris en charge                     | -        | -                                               |
| @nocobase/plugin-action-template-print           | ✅ Pris en charge                     | -        | -                                               |
| @nocobase/plugin-api-doc                         | ✅ Pris en charge                     | -        | -                                               |
| @nocobase/plugin-api-keys                        | ✅ Pris en charge                     | -        | -                                               |
| @nocobase/plugin-async-task-manager              | ✅ Pris en charge                     | -        | -                                               |
| @nocobase/plugin-audit-logger                    | ✅ Pris en charge                     | -        | -                                               |
| @nocobase/plugin-audit-logs                      | ✅ Pris en charge                     | -        | -                                               |
| @nocobase/plugin-auth                            | ✅ Pris en charge                     | -        | -                                               |
| @nocobase/plugin-auth-cas                        | ✅ Pris en charge                     | -        | -                                               |
| @nocobase/plugin-auth-dingtalk                   | ✅ Pris en charge                     | -        | -                                               |
| @nocobase/plugin-auth-ldap                       | ✅ Pris en charge                     | -        | -                                               |
| @nocobase/plugin-auth-oidc                       | ✅ Pris en charge                     | -        | -                                               |
| @nocobase/plugin-auth-saml                       | ✅ Pris en charge                     | -        | -                                               |
| @nocobase/plugin-auth-sms                        | ✅ Pris en charge                     | -        | -                                               |
| @nocobase/plugin-auth-wecom                      | ✅ Pris en charge                     | -        | -                                               |
| @nocobase/plugin-backup-restore                  | ✅ Pris en charge                     | -        | -                                               |
| @nocobase/plugin-backups                         | ✅ Pris en charge                     | -        | -                                               |
| @nocobase/plugin-block-iframe                    | ✅ Pris en charge                     | -        | -                                               |
| @nocobase/plugin-block-template                  | ✅ Pris en charge                     | -        | -                                               |
| @nocobase/plugin-block-tree                      | ✅ Pris en charge                     | -        | -                                               |
| @nocobase/plugin-block-workbench                 | ✅ Pris en charge                     | -        | -                                               |
| @nocobase/plugin-client                          | ✅ Pris en charge                     | -        | -                                               |
| @nocobase/plugin-collection-fdw                  | ✅ Pris en charge                     | -        | -                                               |
| @nocobase/plugin-collection-sql                  | ✅ Pris en charge                     | -        | -                                               |
| @nocobase/plugin-collection-tree                 | ✅ Pris en charge                     | -        | -                                               |
| @nocobase/plugin-comments                        | ✅ Pris en charge                     | -        | -                                               |
| @nocobase/plugin-custom-brand                    | ✅ Pris en charge                     | -        | -                                               |
| @nocobase/plugin-data-source-external-mariadb    | ✅ Pris en charge                     | -        | -                                               |
| @nocobase/plugin-data-source-external-mssql      | ✅ Pris en charge                     | -        | -                                               |
| @nocobase/plugin-data-source-external-mysql      | ✅ Pris en charge                     | -        | -                                               |
| @nocobase/plugin-data-source-external-oracle     | ✅ Pris en charge                     | -        | -                                               |
| @nocobase/plugin-data-source-external-postgres   | ✅ Pris en charge                     | -        | -                                               |
| @nocobase/plugin-data-source-kingbase            | ✅ Pris en charge                     | -        | -                                               |
| @nocobase/plugin-data-source-main                | ✅ Pris en charge                     | -        | -                                               |
| @nocobase/plugin-data-source-manager             | ✅ Pris en charge                     | -        | -                                               |
| @nocobase/plugin-data-source-rest-api            | ✅ Pris en charge                     | -        | -                                               |
| @nocobase/plugin-data-visualization              | ✅ Pris en charge                     | -        | -                                               |
| @nocobase/plugin-departments                     | ✅ Pris en charge                     | -        | -                                               |
| @nocobase/plugin-email-manager                   | ✅ Pris en charge                     | -        | -                                               |
| @nocobase/plugin-environment-variables           | ✅ Pris en charge                     | -        | -                                               |
| @nocobase/plugin-error-handler                   | ✅ Pris en charge                     | -        | -                                               |
| @nocobase/plugin-field-attachment-url            | ✅ Pris en charge                     | -        | -                                               |
| @nocobase/plugin-field-encryption                | ✅ Pris en charge                     | -        | -                                               |
| @nocobase/plugin-field-formula                   | ✅ Pris en charge                     | -        | -                                               |
| @nocobase/plugin-field-m2m-array                 | ✅ Pris en charge                     | -        | -                                               |
| @nocobase/plugin-field-markdown-vditor           | ✅ Pris en charge                     | -        | -                                               |
| @nocobase/plugin-field-sequence                  | ✅ Pris en charge                     | -        | -                                               |
| @nocobase/plugin-file-manager                    | ✅ Pris en charge                     | -        | -                                               |
| @nocobase/plugin-file-storage-s3-pro             | ✅ Pris en charge                     | -        | -                                               |
| @nocobase/plugin-graph-collection-manager        | ✅ Pris en charge                     | -        | -                                               |
| @nocobase/plugin-ip-restriction                  | ✅ Pris en charge                     | -        | -                                               |
| @nocobase/plugin-license                         | ✅ Pris en charge                     | -        | -                                               |
| @nocobase/plugin-locale-tester                   | ✅ Pris en charge                     | -        | -                                               |
| @nocobase/plugin-localization                    | ✅ Pris en charge                     | -        | -                                               |
| @nocobase/plugin-lock-adapter-redis              | ✅ Pris en charge                     | -        | -                                               |
| @nocobase/plugin-logger                          | ✅ Pris en charge                     | -        | -                                               |
| @nocobase/plugin-map                             | ✅ Pris en charge                     | -        | -                                               |
| @nocobase/plugin-migration-manager               | ✅ Pris en charge                     | -        | -                                               |
| @nocobase/plugin-multi-keyword-filter            | ✅ Pris en charge                     | -        | -                                               |
| @nocobase/plugin-notification-email              | ✅ Pris en charge                     | -        | -                                               |
| @nocobase/plugin-notification-in-app-message     | ✅ Pris en charge                     | -        | -                                               |
| @nocobase/plugin-notification-manager            | ✅ Pris en charge                     | -        | -                                               |
| @nocobase/plugin-password-policy                 | ✅ Pris en charge                     | -        | -                                               |
| @nocobase/plugin-pubsub-adapter-redis            | ✅ Pris en charge                     | -        | -                                               |
| @nocobase/plugin-queue-adapter-rabbitmq          | ✅ Pris en charge                     | -        | -                                               |
| @nocobase/plugin-queue-adapter-redis             | ✅ Pris en charge                     | -        | -                                               |
| @nocobase/plugin-request-encryption              | ✅ Pris en charge                     | -        | -                                               |
| @nocobase/plugin-system-settings                 | ✅ Pris en charge                     | -        | -                                               |
| @nocobase/plugin-telemetry-prometheus            | ✅ Pris en charge                     | -        | -                                               |
| @nocobase/plugin-theme-editor                    | ✅ Pris en charge                     | -        | -                                               |
| @nocobase/plugin-two-factor-authentication       | ✅ Pris en charge                     | -        | -                                               |
| @nocobase/plugin-ui-schema-storage               | ✅ Pris en charge                     | -        | -                                               |
| @nocobase/plugin-user-data-sync                  | ✅ Pris en charge                     | -        | -                                               |
| @nocobase/plugin-users                           | ✅ Pris en charge                     | -        | -                                               |
| @nocobase/plugin-verification                    | ✅ Pris en charge                     | -        | -                                               |
| @nocobase/plugin-verification-totp-authenticator | ✅ Pris en charge                     | -        | -                                               |
| @nocobase/plugin-workerid-allocator-redis        | ✅ Pris en charge                     | -        | -                                               |
| @nocobase/plugin-workflow                        | ✅ Pris en charge                     | -        | -                                               |
| @nocobase/plugin-workflow-action-trigger         | ✅ Pris en charge                     | -        | -                                               |
| @nocobase/plugin-workflow-aggregate              | ✅ Pris en charge                     | -        | -                                               |
| @nocobase/plugin-workflow-approval               | ✅ Pris en charge                     | -        | -                                               |
| @nocobase/plugin-workflow-cc                     | ✅ Pris en charge                     | -        | -                                               |
| @nocobase/plugin-workflow-custom-action-trigger  | ✅ Pris en charge                     | -        | -                                               |
| @nocobase/plugin-workflow-date-calculation       | ✅ Pris en charge                     | -        | -                                               |
| @nocobase/plugin-workflow-delay                  | ✅ Pris en charge                     | -        | -                                               |
| @nocobase/plugin-workflow-dynamic-calculation    | ✅ Pris en charge                     | -        | -                                               |
| @nocobase/plugin-workflow-javascript             | ✅ Pris en charge                     | -        | -                                               |
| @nocobase/plugin-workflow-json-query             | ✅ Pris en charge                     | -        | -                                               |
| @nocobase/plugin-workflow-json-variable-mapping  | ✅ Pris en charge                     | -        | -                                               |
| @nocobase/plugin-workflow-loop                   | ✅ Pris en charge                     | -        | -                                               |
| @nocobase/plugin-workflow-mailer                 | ✅ Pris en charge                     | -        | -                                               |
| @nocobase/plugin-workflow-manual                 | ✅ Pris en charge                     | -        | -                                               |
| @nocobase/plugin-workflow-notification           | ✅ Pris en charge                     | -        | -                                               |
| @nocobase/plugin-workflow-parallel               | ✅ Pris en charge                     | -        | -                                               |
| @nocobase/plugin-workflow-request                | ✅ Pris en charge                     | -        | -                                               |
| @nocobase/plugin-workflow-request-interceptor    | ✅ Pris en charge                     | -        | -                                               |
| @nocobase/plugin-workflow-response-message       | ✅ Pris en charge                     | -        | -                                               |
| @nocobase/plugin-workflow-sql                    | ✅ Pris en charge                     | -        | -                                               |
| @nocobase/plugin-workflow-subflow                | ✅ Pris en charge                     | -        | -                                               |
| @nocobase/plugin-workflow-variable               | ✅ Pris en charge                     | -        | -                                               |
| @nocobase/plugin-workflow-webhook                | ✅ Pris en charge                     | -        | -                                               |
