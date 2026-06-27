---
title: "NocoBase comme fondation technologique d'ED : des systèmes internes aux produits commerciaux"
description: "ED a bâti sa fondation technologique sur NocoBase, réduisant les cycles de livraison d'un tiers, accélérant les tests et le lancement, et assurant une plus grande stabilité tant pour les systèmes internes que pour les produits commerciaux."
---

## **Introduction**

> Une anecdote amusante de notre parcours : dans notre processus de pré-vente, nous associons souvent NocoBase à l'IA pour livrer des preuves de concept à une vitesse record. Les clients sont souvent surpris lorsque, après nous avoir rencontrés lundi, ils reviennent mercredi pour découvrir un prototype entièrement fonctionnel. La réaction habituelle est : *« C'est quoi la magie ? »* Lorsque nous dévoilons NocoBase, cela crée toujours un moment de surprise – et de curiosité.
>
> **—— Fabio Farzat, PDG d'ED**

## **À propos d'ED**

[ED](https://ed.dev.br/) est une entreprise technologique brésilienne comptant **plus de 130 professionnels répartis dans 16 États**. Depuis des années, l'équipe livre et assure la maintenance de systèmes critiques pour de grandes entreprises dans les secteurs de l'assurance, des marchés financiers, des services publics et du secteur public.

![ED.png](https://static-docs.nocobase.com/ED-nvmw2z.png)

Côté livraison, ED est certifiée **ISO 9001** (couvrant les processus de gestion des logiciels, des projets et de l'infrastructure) et a atteint le **niveau 3 CMMI-DEV**, reflétant des normes internationalement reconnues et une maturité d'ingénierie durable.

Sur le plan organisationnel, ED a été classée dans le Top 10 brésilien « Great Place to Work » pendant quatre années consécutives – atteignant la 1ère place et occupant actuellement la 6ème. Cette reconnaissance souligne la capacité d'ED à attirer et retenir les meilleurs talents, garantissant professionnalisme et stabilité dans chaque projet.

Avec son envergure, ses systèmes qualité rigoureux et sa large base de clients, ED est reconnue comme un fournisseur de services technologiques d'entreprise de premier plan au Brésil. Aujourd'hui, elle accélère ses efforts dans les **plateformes modernes et les solutions basées sur l'IA** pour aider ses clients à se préparer pour l'avenir.

## **Points faibles et décision**

Dans la livraison quotidienne de projets, l'équipe d'ingénierie d'ED était confrontée au même défi : **des cycles sans fin de développement CRUD et d'intégration**. Qu'il s'agisse de systèmes internes ou de projets clients, ils devaient rapidement construire des couches de gestion de données, générer des API, gérer l'import/export, tout en garantissant sécurité et évolutivité. Chaque fois, il fallait repartir de zéro – consommant un temps et des ressources considérables, et freinant finalement l'innovation.

Pour sortir de ce cycle, ED a compilé **une liste de critères de niveau entreprise** :

* **Sécurité** — contrôle d'accès, isolation des données, garantie de conformité
* **Performance** — temps de réponse rapides même avec des ensembles de données à grande échelle
* **Évolutivité** — adaptation flexible à divers projets et environnements clients
* **Observabilité** — opérations transparentes pour la surveillance et le dépannage

![checklist.png](https://static-docs.nocobase.com/checklist-o8ncyd.png)

Ce dont ils avaient besoin était bien plus qu'un simple outil de glisser-déposer de tableaux. Ils recherchaient une plateforme capable de prendre en charge des modèles de données complets, d'imposer des types forts et des structures relationnelles, et de générer automatiquement des API.

Après avoir évalué plusieurs solutions du marché, ED a finalement choisi **NocoBase**. Les preuves de concept internes ont montré que NocoBase non seulement répondait à chaque élément de leur liste, mais offrait également une plus grande flexibilité et efficacité en conditions réelles.

## **Scénarios de mise en œuvre**

Après avoir terminé la preuve de concept, ED a rapidement déployé NocoBase dans ses systèmes métier centraux et l'a progressivement étendu à plusieurs scénarios.

### **Scénario 1 : Produit commercial – [AssistFlow](https://assistflow.com.br/)**

Contrairement à la plupart des entreprises qui utilisent NocoBase uniquement pour des systèmes internes, ED a construit directement une plateforme commerciale externe dessus — **[AssistFlow](https://assistflow.com.br/)**. AssistFlow permet aux entreprises de créer rapidement des agents intelligents qui fonctionnent de manière transparente sur plusieurs canaux de médias sociaux, prenant en charge les interactions multimodales avec du texte, de la voix, des images et des fichiers. Au-delà du service client, il s'étend également aux ventes, aux RH, au support technique, etc.

![AssistFlow.png](https://static-docs.nocobase.com/AssistFlow-e60x5d.png)

Dans ce produit commercial, l'ensemble du module de configuration et de l'interface de gestion sont propulsés par NocoBase. Cela signifie que l'équipe n'a pas besoin de redévelopper la logique frontale ; elle peut plutôt modéliser et configurer directement dans NocoBase pour fournir aux clients des capacités de gestion flexibles et évolutives.

![AssistFlow.png](https://static-docs.nocobase.com/AssistFlow2-vd4e8i.png)

**Points forts d'AssistFlow :**

* **Intégration rapide** — Créez et lancez un agent intelligent en seulement 5 minutes, sans codage requis
* **Intégration multicanal** — Prend en charge WhatsApp, Teams, Slack, Telegram, Facebook, Instagram, LinkedIn, etc.
* **Interaction multimodale** — Gère le texte, la voix, les images et les fichiers pour répondre à divers besoins métier
* **Large applicabilité** — Couvre le service client, les ventes, le marketing, les RH et le support technique
* **Automatisation et intégration** — Les API intégrées permettent des connexions transparentes avec les systèmes existants et rationalisent les flux de travail
* **Sécurisé et contrôlable** — Prend en charge le déploiement sur cloud privé pour répondre aux exigences de sécurité et de conformité de niveau entreprise

### **Scénario 2 : Plateforme de gestion de projet**

Construite pour soutenir l'ensemble du cycle de vie des projets de livraison client d'ED. Les tâches qui nécessitaient auparavant plusieurs cycles de développement – comme les opérations CRUD et la logique de permission – peuvent désormais être réalisées en une seule étape grâce à une modélisation simple des données, une configuration frontale et des API générées automatiquement.

![Plateforme de gestion de projet](https://static-docs.nocobase.com/Project%20Management%20Platform-o3heh6.png)

### **Scénario 3 : Système de billetterie**

Un système de support et de demande de service orienté client, entièrement alimenté par la couche de données et l'interface de NocoBase. Les clients peuvent soumettre et suivre des tickets directement, tandis que les flux de travail backend sont automatiquement déclenchés pour traiter chaque demande.

![Système de billetterie](https://static-docs.nocobase.com/Ticketing%20System-a9un8k.png)

### **Scénario 4 : Système de gestion des fournisseurs**

Dans ce système, les fournisseurs peuvent télécharger des factures, ce qui déclenche automatiquement des flux de travail d'approbation de paiement. Grâce aux capacités de modélisation des données et de flux de travail de NocoBase, l'ensemble du processus est automatisé et entièrement traçable.

## **Résultats**

Avec NocoBase, ED a réalisé des améliorations significatives tant en termes de vitesse de livraison que de qualité :

* **Cycles de livraison plus courts** — Les modules qui nécessitaient auparavant 2 à 3 itérations de 15 jours chacune peuvent désormais être réalisés en une seule itération
* **Tests et lancements plus rapides** — La plupart des fonctionnalités ne nécessitent que des tests fonctionnels directs, sans les couches complexes typiques du développement traditionnel
* **Plus grande stabilité de production** — Des mises en production plus fluides et une confiance accrue de l'équipe

Les ingénieurs d'ED estiment que NocoBase a transformé leur façon de construire. La modélisation visuelle, le CRUD automatisé, les flux de travail flexibles et les API générées automatiquement ont libéré les développeurs du travail répétitif, leur permettant de se concentrer directement sur les résultats métier. Les boucles de rétroaction entre l'assurance qualité et les utilisateurs sont devenues beaucoup plus courtes, permettant aux projets d'atteindre la production plus rapidement.

Aujourd'hui, NocoBase est devenu le socle technologique d'ED : il alimente les systèmes internes, constitue la base des produits commerciaux externes et soutient la quasi-totalité des livraisons quotidiennes. Plus important encore, cette « réunion lundi, prototype mercredi » magique n'est pas seulement le point de départ de la surprise et de la confiance des clients – elle représente également un nouveau paradigme de livraison.

## **Perspectives**

Pour les équipes technologiques du monde entier, l'expérience d'ED montre que NocoBase répond non seulement aux exigences de niveau entreprise – sécurité, performance, évolutivité et observabilité – mais permet également des itérations plus rapides, déplaçant l'attention des tâches répétitives vers l'innovation et la création de valeur.

Au Brésil, ED a déjà remodelé son modèle de livraison avec NocoBase. Ensuite, ils visent à apporter cette approche à davantage d'industries et d'organisations, en collaboration avec NocoBase.

**Autres témoignages clients :**

* [Réponse sous la seconde à grande échelle : Classact exécute NocoBase sur Kubernetes](https://www.nocobase.com/en/blog/classact)
* [L'usine numérique de BIEL Crystal : alimentant 1,85 milliard d'unités par an](https://www.nocobase.com/en/blog/bielcrystal)
* [Comment Distinct HealthCare utilise NocoBase pour construire un système de soins personnalisé à long terme](https://www.nocobase.com/en/blog/distinct-healthcare)
* [Un parcours sans code chez SHIMANO](https://www.nocobase.com/en/blog/shimano)
* [Qu'est-ce qui a poussé le principal promoteur immobilier japonais à passer de Salesforce à NocoBase open source ?](https://www.nocobase.com/en/blog/century-21)
* [Comment Second-Brain a construit un système d'IA pour les institutions financières avec NocoBase](https://www.nocobase.com/en/blog/second-brain)
