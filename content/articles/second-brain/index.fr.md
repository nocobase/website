---
title: "Comment Second-Brain a construit un système d'IA pour les institutions financières avec NocoBase"
description: "L'entreprise d'IA basée à Hong Kong, Second-Brain, a utilisé NocoBase pour surmonter les défis de haute sécurité et de cycles courts, en construisant un système d'IA pour les entreprises financières afin d'atteindre une livraison efficace et une accumulation de capacités."
---

## Le Choix Crucial d'une Startup d'IA

[Second-Brain](http://www.dbl-brain.com/) est une startup d'IA basée à Hong Kong, fondée par une équipe ayant des parcours dans la finance et le conseil. Ils se spécialisent dans la création de systèmes de prise de décision basés sur l'IA pour les entreprises.

![Second-Brain](https://static-docs.nocobase.com/1-esvvr0.PNG)

Dans les environnements B2B, la partie la plus difficile de la construction de systèmes d'IA n'est pas les modèles eux-mêmes, mais les données désordonnées et fragmentées qui les sous-tendent. Les politiques internes, les flux de travail et les enregistrements commerciaux existent souvent en silos, dans des formats incohérents, et parfois même se contredisent. Sans nettoyage et structuration de ces données, l'IA ne peut tout simplement pas générer d'informations pertinentes.

Pour permettre à l'IA de « comprendre » une entreprise, la première étape de Second-Brain est de construire une couche fondamentale qui consolide les connaissances propriétaires de l'entreprise, y compris les règles et règlements internes, les processus métier et les normes de conformité externes.

Lors du développement d'un système de connaissances IA pour un client bancaire, Second-Brain a rencontré des défis de livraison importants :

* Prise en charge de **centaines de pages** avec un contrôle d'accès complexe
* Déploiement entièrement hors ligne **sans accès aux services en ligne**
* **Calendrier de livraison serré** sans compromis sur l'expérience utilisateur

Avec un fort accent sur les modèles d'IA et la conception de produits verticaux, Second-Brain avait besoin d'une colonne vertébrale système **flexible, auto-hébergée et rapide à mettre en œuvre**, avec un support puissant pour la modélisation des données et la configuration.

## Pourquoi NocoBase ?

Lorsque le projet a démarré, Second-Brain a soigneusement examiné plusieurs plateformes low-code et no-code. Cela incluait divers outils SaaS et projets open-source nationaux et internationaux. Cependant, des problèmes liés aux options de déploiement, aux licences ou au contrôle du code signifiaient qu'ils ne pouvaient pas répondre aux exigences strictes du client en matière de déploiement hors ligne et de sécurité des informations.

À un moment donné, ils ont même envisagé de revenir à une « approche traditionnelle » : développer l'ensemble du front-end et du back-end en interne. Cette méthode offrait un grand contrôle et aidait à protéger la propriété intellectuelle (PI). Mais avec une date limite de livraison serrée et des attentes élevées du client, cette voie était trop coûteuse et risquée.

Alors que l'équipe était aux prises avec cette décision, ils ont découvert NocoBase.

L'équipe a été attirée par l'architecture et les principes de NocoBase : **il ne dépend pas du SaaS, offre de la flexibilité, et est personnalisable, extensible et livrable**. Sa nature open-source a permis à Second-Brain de comprendre en profondeur le fonctionnement de NocoBase, les aidant à répondre rapidement aux retours des clients.

Finalement, Second-Brain a choisi NocoBase comme plateforme fondamentale pour leur système et a commencé à construire et livrer le projet. Le vrai défi n'était pas seulement de choisir l'outil, mais de savoir comment l'utiliser pour construire un système d'application IA complexe et axé sur les données, et le livrer rapidement.

## Mise en Œuvre du Projet : Défis et Solutions

Ce projet ne consistait pas seulement à construire une plateforme de gestion des connaissances traditionnelle, mais à créer une base de connaissances fiable et à long terme que l'IA pourrait réellement comprendre et utiliser.

L'objectif était de nettoyer, classer et modéliser les règlements internes et les règles métier non structurés, puis de les exposer via des API standardisées pour l'accès aux modèles d'IA. Cela nécessitait des capacités avancées en modélisation des données, en organisation et en conception d'interfaces.

Étant donné que le client opère dans le secteur financier, la sécurité était primordiale. **L'ensemble du déploiement devait s'exécuter entièrement hors ligne, et chaque mise à jour devait passer par un processus d'approbation et de transfert physiquement isolé.**

Une fois que NocoBase s'est avéré techniquement viable, Second-Brain a avancé avec l'architecture de la solution et la sélection technique, remportant finalement l'appel d'offres et faisant avancer le projet.

NocoBase a servi de colonne vertébrale du système, permettant à l'équipe de :

* **Transformer les documents réglementaires et les politiques en données structurées et standardisées** que les modèles d'IA pouvaient consommer.

![Transformer les documents réglementaires et les politiques en données structurées et standardisées](https://static-docs.nocobase.com/2-5xor3v.PNG)

* **Alimenter l'infrastructure de données derrière le module de questions-réponses IA**, permettant :
  * Les questions-réponses quotidiennes et les demandes liées aux politiques
  * Les requêtes métier couvrant plusieurs ensembles de données
  * Les analyses destinées à la direction qui fournissent des conclusions structurées

![Alimenter l'infrastructure de données derrière le module de questions-réponses IA](https://static-docs.nocobase.com/3-p8o62u.PNG)

* **Soutenir les flux de travail IA avec des outils internes** comme : Le prétraitement de documents (par exemple, conversion de PDF, fichiers Word ou images en texte extractible)

  ![Prétraitement de documents](https://static-docs.nocobase.com/4-sdv8mt.png)

  Génération de paires questions-réponses à partir de corpus organisés pour enrichir les ensembles de données de réglage fin. ![Génération de paires questions-réponses](https://static-docs.nocobase.com/5-hb6nly.png)
* **Construire un plugin ECharts personnalisé pour visualiser les relations** entre les règles et règlements sous forme de graphe de connaissances.

![Plugin ECharts](https://static-docs.nocobase.com/6-qalqnu.png)

## L'Architecture des Plugins : Une Agréable Surprise

Face à des exigences de sécurité strictes, **la conception basée sur les plugins de NocoBase s'est avérée être un véritable atout tant pour le déploiement que pour la collaboration**.

Second-Brain a modularisé les fonctionnalités principales en plugins individuels. Ainsi, à chaque mise à jour du système, ils pouvaient soumettre uniquement les plugins mis à jour pour approbation. Cela a grandement facilité la conformité au processus de révision du client et a considérablement réduit les frais généraux liés aux analyses de sécurité et aux tests. C'était un choix idéal pour les institutions financières ayant un contrôle strict sur les mises à jour logicielles.

Les avantages ne se sont pas arrêtés là. **L'approche par plugins a également augmenté la vitesse de développement de l'équipe.**

Il a fallu environ deux semaines pour créer le premier plugin tout en déterminant la structure et le modèle idéaux. Mais après cela, les nouveaux plugins pouvaient être clonés et personnalisés en une fraction du temps.

Ils ont maintenant développé près de 20 plugins couvrant divers modules comme la visualisation de graphes, la gestion des autorisations et le nettoyage des données. Cela a constitué une bibliothèque d'actifs réutilisables pour les livraisons futures.

## Informations de Première Ligne Issues d'une Utilisation Réelle

Tout au long du processus de livraison, Second-Brain a partagé plusieurs enseignements clés tirés du travail avec NocoBase en production.

**1. Stabilité**

Même avec des itérations fréquentes, NocoBase a maintenu une forte cohérence des versions. **Le système n'est jamais tombé en panne à cause d'une mise à niveau** – un facteur critique lorsqu'on travaille avec des clients du secteur financier.

> « NocoBase a été remarquablement cohérent entre les versions. Nous n'avons rencontré aucun crash lors des mises à niveau entre versions – ce qui, honnêtement, est assez rare. » — Zhengxing Yang, Responsable Technique chez Second-Brain

**2. Collaboration**

Second-Brain a bénéficié d'une collaboration fluide et réactive avec l'équipe technique de NocoBase tout au long du cycle de livraison. Des corrections de bugs aux demandes de fonctionnalités, chaque réponse a été rapide et utile.

Ce modèle de travail « open source, mais jamais seul » a été un facilitateur clé dans un projet à haute sécurité et à forts enjeux.

Bien que le projet soit maintenant terminé, ses outils et son approche continuent d'influencer la façon dont le client opère aujourd'hui.

## Conclusion

Second-Brain a livré un système d'IA complexe et hautement sécurisé avec une équipe réduite. En s'appuyant sur NocoBase pour gérer les fondations du système, l'équipe a pu concentrer son énergie sur la construction de capacités d'IA qui comptaient vraiment.

C'est exactement ce que NocoBase vise à faire : **libérer les équipes du développement système répétitif, afin qu'elles puissent se concentrer sur un travail créatif à fort impact qui génère une réelle valeur commerciale**.

Dans les industries ayant des exigences de sécurité strictes et des besoins complexes, ce projet montre comment une plateforme no-code et low-code véritablement flexible peut redéfinir ce qui est possible dans la livraison de systèmes d'entreprise.

**Lectures connexes :**

* [Comment la Marque N°1 d'Enregistreurs Vocaux IA a Construit Ses Systèmes Internes](https://www.nocobase.com/en/blog/plaud)
* [Au-delà des Tableurs : La Gestion des Données Employés de Classmethod avec NocoBase](https://www.nocobase.com/en/blog/classmethod)
* [Comment une Usine de Meubles a Construit Son Propre ERP – Sans Aucun Codage](https://www.nocobase.com/en/blog/olmon)
* [De Designer à Constructeur : La Transformation Numérique de L&A avec NocoBase](https://www.nocobase.com/en/blog/l-a)
* [Comment KIGLAND a Mis à l'Échelle la Production de Masques d'Anime Personnalisés avec des Outils Open-Source](https://www.nocobase.com/en/blog/kigland)
* [Comment un Cabinet d'Avocats de Plus de 400 Personnes Rationalise la Gestion des Commissions avec NocoBase](https://www.nocobase.com/en/blog/how-400-lawyer-firm-streamlines-commission-management-with-nocobase)
