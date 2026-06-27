---
title: "Comment la marque n°1 d'enregistreurs vocaux IA a construit ses systèmes internes"
description: "Face à la croissance de son activité, PLAUD, la marque n°1 mondiale d'enregistreurs vocaux IA, a choisi la plateforme open source sans code NocoBase pour construire ses systèmes de service client et d'exploitation, répondant aux exigences de flexibilité et de contrôle tout en améliorant l'efficacité du travail."
---

## Introduction

En 2023, [PLAUD NOTE](https://www.plaud.ai/) a fait sa première apparition sur une plateforme de financement participatif – et s'est immédiatement démarqué en tant que premier enregistreur IA au monde propulsé par ChatGPT. Avec un design matériel innovant et des capacités d'IA puissantes, il a rapidement capté l'attention mondiale.

Rien que pendant la phase de précommande, il a généré près de 6 millions de dollars et conquis 35 000 membres payants, devenant rapidement un succès retentissant dans le monde du matériel IA.

![PLAUD NOTE](https://static-docs.nocobase.com/1-hv0ztl.gif)

L'engouement ne s'est pas arrêté là –

En moins de deux ans, PLAUD avait rassemblé 700 000 utilisateurs dans 168 pays, a été présenté dans les plus grands médias technologiques mondiaux et a remporté des prix de design internationaux majeurs comme le Red Dot, l'iF et le Good Design.

![PLAUD](https://static-docs.nocobase.com/2.0-n0gu0c.PNG)

En 2024, le chiffre d'affaires avait dépassé les 70 millions de dollars, la taille de l'équipe avait doublé et l'entreprise avait enregistré une croissance de 10x deux années consécutives.

Mais alors que les ventes explosaient et que les utilisateurs affluaient, une question difficile a émergé :

Le système interne était-il assez solide pour suivre cette croissance fulgurante ?

## Bien plus qu'un enregistreur vocal

La plupart des gens connaissent PLAUD pour son enregistreur ultra-fin, au format carte de crédit – le PLAUD NOTE.

Mais le PLAUD NOTE n'est pas un enregistreur vocal ordinaire. Une fois l'enregistrement terminé, il transcrit automatiquement l'audio, le résume et rédige même du contenu prêt à être publié grâce à l'IA.

![Bien plus qu'un enregistreur vocal](https://static-docs.nocobase.com/3.0-ty43po.PNG)

Pour les créateurs de contenu, c'est plus qu'un appareil – c'est un assistant d'écriture alimenté par l'IA que vous pouvez emporter partout.

Ce qui alimente ce matériel, c'est une plateforme logicielle en constante évolution. Au sein de l'application PLAUD, il existe une communauté grandissante où les utilisateurs peuvent télécharger, modifier et partager des modèles de transcription adaptés à différents domaines – comme le droit, la santé et l'éducation – facilitant ainsi le travail de tous avec le contenu vocal.

Le matériel n'est que le point de départ. Ce qui distingue vraiment PLAUD, c'est la plateforme qui se cache derrière – conçue pour aider le contenu à circuler et à se développer grâce à la collaboration des utilisateurs.

## **Comment construire rapidement des systèmes à partir de zéro ?**

Alors que la demande montait en flèche, les besoins internes de PLAUD sont devenus plus complexes.

L'équipe de support avait besoin d'un accès rapide aux données utilisateur et d'outils pour résoudre les problèmes de compte.

L'équipe des opérations souhaitait de meilleures façons de gérer le contenu de l'application et de superviser les modèles de la communauté.

Mais à l'époque, aucune de ces infrastructures n'existait.

> « Nous n'avions rien de tout cela – ce n'est que lorsque les besoins se sont accumulés que nous avons commencé à chercher comment les soutenir », a déclaré Lucas, chef de produit chez PLAUD.

Bien que les équipes produit et ingénierie de PLAUD soient de classe mondiale, leur objectif était résolument l'innovation. Reconstruire les systèmes internes n'était pas la priorité – pourtant, le support et les opérations ont un impact direct sur l'expérience utilisateur et ne pouvaient pas être laissés de côté.

Alors, au lieu de s'appuyer sur des outils SaaS rigides, PLAUD a choisi une voie différente : ils ont utilisé la plateforme no-code open source **NocoBase** pour construire un système adapté à leurs besoins.

Ils ne cherchaient pas spécifiquement un « outil no-code ». C'est simplement que NocoBase répondait parfaitement à leurs trois exigences fondamentales.

* **Du zéro au lancement rapide :** Aucun héritage à gérer, construire uniquement ce qui est nécessaire
* **Flexible par conception :** Modèles de données et logique entièrement personnalisables, pas de dépendance envers un fournisseur
* **Produit d'abord :** Propriété de l'équipe produit, avec un support de développement minimal

En quelques jours, l'équipe disposait d'un système fonctionnel – et elle n'a cessé de l'améliorer depuis.

## **Une plateforme, deux systèmes centraux**

Jusqu'à présent, PLAUD a utilisé NocoBase pour construire deux systèmes clés. L'un sert leur équipe de service client, et l'autre soutient leur équipe des opérations.

**Système de service client : Informations utilisateur centralisées**

Le back-office du service client de PLAUD est principalement utilisé pour :

* Rechercher les informations de base des utilisateurs et leur mode d'inscription.
* Vérifier le statut du compte et les avantages achetés.
* Effectuer des actions en back-office, comme changer les statuts ou marquer des enregistrements.

Le système se connecte à la base de données principale de l'entreprise à l'aide d'un plugin de source de données externe. Il relie les données entre différentes tables. Cela permet au personnel du service client de trouver et de gérer les informations en un seul endroit dans NocoBase, augmentant considérablement leur efficacité.

> « Nous pouvons désormais trouver toutes les informations de nos utilisateurs directement dans le système. Les données se connectent directement en utilisant SQL. »
>
> – Lucas, chef de produit chez PLAUD

**Système des opérations : Gestion du contenu de la communauté de modèles**

Pour les opérations, l'équipe a construit un système de révision pour leur communauté de modèles en utilisant NocoBase. Ce système gère les modèles de contenu soumis par les utilisateurs, comme les modèles de transcription vocale pour des domaines tels que la santé, la vente, le droit et l'éducation.

Le système prend en charge :

* L'import automatique du contenu des modèles.
* La mise en place de flux de travail de révision et la gestion de leurs statuts.
* La publication automatique des modèles approuvés dans la communauté de l'application.

![Système des opérations](https://static-docs.nocobase.com/4.0-cpa6sz.jfif)

L'ensemble de la configuration a nécessité très peu d'intervention des développeurs. Elle a été principalement configurée par l'équipe produit. Quelques plugins et une aide technique ont été sollicités uniquement pour des tâches de données complexes, comme la conversion JSON.

## **Juste deux personnes, et tout le système a fonctionné sans accroc**

Lorsque l'équipe PLAUD parle de NocoBase, trois mots reviennent encore et encore : flexible, efficace et sous contrôle.

L'ensemble du système de support client et des opérations a été principalement construit par le chef de produit, avec seulement une aide occasionnelle des développeurs pour les connexions API ou les ajustements de plugins.

Cette configuration a soulagé la pression sur l'équipe de développement et a permis à la vision produit de prendre forme plus rapidement, avec des cycles d'itération plus courts.

> « NocoBase est utilisé dans toute l'entreprise, mais la configuration réelle ? Juste moi et un collègue. Les développeurs n'intervenaient que lorsque nous avions besoin de brancher des interfaces. »
>
> — Lucas, chef de produit chez PLAUD

Ce qui a le plus marqué, c'est la puissante modélisation des données de NocoBase.

La logique métier de PLAUD implique des relations complexes entre plusieurs tables, ainsi qu'un contrôle d'accès strict.

Grâce à la structure orientée modèle de NocoBase, ils ont pu définir des champs de manière flexible, configurer une logique relationnelle et lier facilement les données entre les modules – rendant l'ensemble du système beaucoup plus utilisable.

> « Nous avions besoin de nombreuses relations entre les tables, et NocoBase a vraiment excellé sur ce point. »
>
> — Lucas, chef de produit chez PLAUD

Et avec son architecture basée sur les plugins, NocoBase a également donné à l'équipe une base solide pour une expansion future – selon leurs propres termes.

## **Du succès viral au succès durable**

En moins de deux ans, PLAUD est passé de l'effet de vague de son produit inaugural à l'exploitation d'une plateforme à part entière. L'année dernière encore, ils ont lancé NotePin – un enregistreur IA portable de nouvelle génération.

![NotePin](https://static-docs.nocobase.com/5.0-rdpv09.png)

Mais derrière cette évolution rapide, il n'y avait pas seulement du matériel de pointe ou des modèles puissants. Ce qui a vraiment fait la différence, c'est le jugement avisé de PLAUD et sa rapidité à construire les bons systèmes.

Ils n'ont pas investi massivement dans des solutions SaaS lourdes ni constitué une immense équipe de développement. Au lieu de cela, ils ont adopté une approche plus légère et plus autonome – construisant une plateforme d'opérations et de support sur mesure avec des outils open source qui s'adaptaient parfaitement à leur activité.

Au cœur de tout cela se trouve une capacité clé : être capable de créer un système flexible et contrôlable avec un minimum de ressources – afin que l'équipe puisse rester agile même lorsque les choses évoluent rapidement.

Pour l'avenir, NocoBase continuera de soutenir PLAUD dans son parcours – ouvrant encore plus de possibilités là où le logiciel rencontre le matériel.

**Lectures connexes :**

* [Au-delà des tableurs : La gestion des données employés chez Classmethod avec NocoBase](https://www.nocobase.com/en/blog/classmethod)
* [Comment une usine de meubles a construit son propre ERP – sans codage nécessaire](https://www.nocobase.com/en/blog/olmon)
* [De designer à constructeur : La transformation numérique de L&A avec NocoBase](https://www.nocobase.com/en/blog/l-a)
* [Comment KIGLAND a développé la production de masques d'anime personnalisés avec des outils open source](https://www.nocobase.com/en/blog/kigland)
* [Comment un cabinet de plus de 400 avocats rationalise la gestion des commissions avec NocoBase](https://www.nocobase.com/en/blog/how-400-lawyer-firm-streamlines-commission-management-with-nocobase)
* [Développement rapide avec NocoBase : Piloter la transformation numérique dans la construction](https://www.nocobase.com/en/blog/rapid-development-with-nocobase)
