---
title: "Réponse en moins d'une seconde à grande échelle : Classact exécute NocoBase sur Kubernetes"
description: "Classact a déployé NocoBase sur Kubernetes, obtenant des réponses en moins d'une seconde pour des centaines de milliers d'enregistrements, couvrant la gestion des RH et de la conformité, et améliorant considérablement l'efficacité et l'expérience utilisateur."
---

## **À propos de Classact**

[Classact Co., Ltd](https://www.classact.co.jp/). est un fournisseur de services d'infrastructure IT proposant un support technique et du staffing d'ingénieurs. C'est également l'une des premières entreprises au Japon à avoir obtenu la certification Proxmox Gold Partner, avec une vaste expérience dans la virtualisation et les centres de données. Tout en fournissant des solutions IT hautement disponibles à ses clients, Classact s'est également efforcé de rationaliser ses propres systèmes et processus internes pour garantir efficacité opérationnelle et conformité.

Comme de nombreuses entreprises, les besoins numériques de Classact vont au-delà de ses équipes techniques. Des départements tels que l'administration, les RH et les ventes ont également besoin de systèmes fiables pour gérer le recrutement, les opérations liées aux employés, la formation et la conformité en matière de sécurité de l'information.

![company.png](https://static-docs.nocobase.com/1-ifaq7k.png)

## **Défis et exigences**

Avant d'adopter NocoBase, Classact s'appuyait principalement sur l'outil open source Exment pour la gestion de sa base de données interne.

![exment.PNG](https://static-docs.nocobase.com/2-x35h8j.PNG)

Cependant, à mesure que les opérations commerciales prenaient de l'ampleur et que le volume de données augmentait, les problèmes de performance d'Exment ont commencé à affecter l'utilisation quotidienne :

* **Chargement lent des pages** : Avec de grands ensembles de données, une seule page pouvait mettre 5 à 10 secondes à se charger, ralentissant considérablement les flux de travail.
* **Mauvaise expérience utilisateur** : Les longs temps d'attente ont entraîné de fréquentes plaintes des employés et une réduction de leur volonté d'utiliser le système.
* **Évolutivité limitée** : Le système manquait de flexibilité pour s'adapter aux besoins croissants de l'entreprise ou pour prendre en charge de nouveaux scénarios d'application.

Parallèlement, différentes équipes expérimentaient d'autres outils. Certaines ont adopté ClickUp pour la gestion des tâches, tandis que Classact a également évalué Airtable et NocoDB.

Grâce à cette exploration, Classact a clarifié ses exigences pour une nouvelle solution :

* **Haute performance** : Gérer des centaines de milliers d'enregistrements tout en maintenant des temps de réponse rapides.
* **Flexibilité** : Permettre aux départements d'adapter rapidement les applications à leurs besoins spécifiques.
* **Contrôle d'entreprise** : Prendre en charge les déploiements auto-hébergés et privés, garantissant un contrôle total des données.

Ces exigences ont finalement conduit Classact à choisir NocoBase comme la solution la plus adaptée.

## **Déploiement et validation**

Avant la mise en production, Classact a d'abord testé NocoBase dans un environnement de préproduction. L'équipe a importé des centaines de milliers d'enregistrements pour simuler des scénarios métier réels, en se concentrant sur les performances des requêtes et du chargement des pages. Les résultats ont montré que NocoBase maintenait des performances stables même avec de grands ensembles de données, répondant pleinement aux attentes.

Sur la base de cette validation, l'entreprise a déployé NocoBase sur son cluster Kubernetes autogéré pour garantir une stabilité de niveau entreprise. L'équipe technique a également acheté plusieurs plugins, ce qui a accéléré le développement d'applications et permis le déploiement rapide de systèmes de gestion des opérations des employés et de la formation qui étaient auparavant bloqués.

Cette approche de déploiement et de validation a non seulement confirmé la fiabilité de NocoBase en termes de performances et d'évolutivité, mais a également permis à Classact de migrer avec un risque minimal et de faire progresser rapidement sa transformation numérique interne.

## **Couverture applicative**

Après le déploiement, Classact a rapidement construit et lancé une série d'applications pour soutenir différents aspects des opérations internes. Ces applications couvraient des processus métier courants tels que les RH, les services aux employés et la gestion des actifs, ainsi que des domaines plus spécialisés comme la conformité ISMS et les programmes de mentorat.

![nocobase](https://static-docs.nocobase.com/3-z5vksi.PNG)

![nocobase.PNG](https://static-docs.nocobase.com/4-g1sz0z.PNG)

* **Gestion des ressources humaines**

Gestion des données des employés, rapports et notifications de formation, activités de recrutement (enregistrements et notifications d'entretiens), attribution des rôles et postes, élections des représentants des employés et suivi des certifications professionnelles.

* **Services aux employés**

Mises à jour d'informations (ex. : adresse ou itinéraire domicile-travail), demandes d'avantages sociaux, notes de frais, achats d'équipement et de livres, demandes de cartes de visite, consultations médicales et signalement d'événements (réjouissances ou deuils).

* **Gestion des actifs et des tâches**

Gestion des actifs des systèmes internes et des équipements, ainsi que suivi des tâches quotidiennes.

* **Apprentissage et développement**

Gestion des licences d'e-learning, gestion des programmes de mentorat et rapports pour soutenir la croissance continue des employés.

* **Sécurité de l'information et conformité**

Gestion des opérations ISMS pour répondre aux normes de sécurité de l'information.

* **Collecte de données et engagement**

Formulaires publics pour la collecte d'informations sur les candidats, enquêtes auprès des employés et retours d'information internes.

La plupart des systèmes d'entreprise ne couvrent qu'un seul scénario, obligeant les organisations à s'appuyer sur plusieurs outils pour gérer différents processus en parallèle. **NocoBase brise cette limitation, permettant à Classact de construire et de combiner librement des applications au sein d'une seule plateforme.**

Avec cette approche, Classact a créé une plateforme de gestion interne intégrée adaptée à ses besoins, offrant une flexibilité bien supérieure à celle des solutions traditionnelles.

## **Résultats**

En adoptant NocoBase, Classact a réalisé des améliorations significatives tant en termes de performances que d'expérience utilisateur :

* **Optimisation des performances** : Les temps de chargement des pages sont passés de 5 à 10 secondes à seulement 1 à 2 secondes, améliorant considérablement l'efficacité quotidienne.
* **Satisfaction utilisateur accrue** : La réduction des temps d'attente a atténué la frustration et la résistance, conduisant à des retours constamment positifs de la part des employés.
* **Visualisation** : Les graphiques, les filtres flexibles et les options d'affichage ont rendu l'analyse des données beaucoup plus intuitive.
* **Optimisation des processus** : Les fonctionnalités de flux de travail ont encore simplifié les processus métier complexes.

Classact a également partagé des retours positifs sur son expérience avec NocoBase :

> *« Ce que nous apprécions le plus chez NocoBase, c'est sa stabilité et son évolutivité. Même avec de grands ensembles de données, il offre constamment des performances stables. Les fonctionnalités de graphiques nous offrent une visualisation intuitive des données, le plugin LDAP permet une intégration transparente avec Active Directory, les formulaires publics facilitent la collecte de données sur les candidats et les employés, et les fonctions de flux de travail ont considérablement rationalisé nos processus internes. »*  — **Hidetoshi Honma, PDG de Classact**

## **Conclusion**

L'expérience de Classact montre que NocoBase offre non seulement des temps de réponse inférieurs à la seconde avec des ensembles de données de plusieurs centaines de milliers d'enregistrements, mais aussi, grâce au déploiement Kubernetes et à son architecture de plugins, prend en charge les besoins complexes multi-départements et multi-processus sur une seule plateforme.

Contrairement aux systèmes cloisonnés traditionnels, NocoBase fournit une architecture pilotée par modèle, extensible et composable. Cela permet aux entreprises de faire évoluer continuellement leurs systèmes internes à moindre coût tout en laissant une place à l'expansion future.


**Autres témoignages clients :**

* [L'usine numérique de BIEL Crystal : Alimenter 1,85 milliard d'unités par an](https://www.nocobase.com/en/blog/bielcrystal)
* [Comment Distinct HealthCare utilise NocoBase pour construire un système de soins personnalisé à long terme](https://www.nocobase.com/en/blog/distinct-healthcare)
* [Un parcours sans code chez SHIMANO](https://www.nocobase.com/en/blog/shimano)
* [Qu'est-ce qui a poussé le principal promoteur immobilier japonais à passer de Salesforce à NocoBase open source ?](https://www.nocobase.com/en/blog/century-21)
* [Comment Second-Brain a construit un système d'IA pour les institutions financières avec NocoBase](https://www.nocobase.com/en/blog/second-brain)
* [Comment la marque n°1 d'enregistreurs vocaux IA a construit ses systèmes internes](https://www.nocobase.com/en/blog/plaud)
