---
title: "Gouvernance d'architecture simplifiée : Création d'un catalogue d'applications avec NocoBase"
description: "L'objectif est de démontrer le potentiel et la facilité de NocoBase pour développer des applications web sans codage."
---

📝 Note : Cet article a été mis à jour pour la dernière fois le 23 janvier 2026. Nous mettons régulièrement les informations à jour pour vous garantir les dernières informations ! 😊

Ce blog a été produit par Leandro Martins et a été initialement publié sur [Build Application Catalog with NocoBase](https://leandromartins.hashnode.dev/simplified-architecture-governance-building-an-application-catalog-with-nocobase#).

L'objectif est de démontrer le potentiel et la facilité d'utilisation de [NocoBase](https://www.nocobase.com/) pour développer des applications web sans codage. Comme étude de cas, je vais créer un catalogue d'applications pour faciliter la gouvernance de l'architecture. Ce cas impliquera la modélisation, l'installation, la création de tables, les menus, les formulaires, les graphiques et les workflows en utilisant les fonctionnalités de NocoBase.

Pour cet article, nous utiliserons les technologies suivantes : NocoBase, Postgres et Docker.

---

💬 Salut, vous lisez le blog NocoBase. NocoBase est la plateforme de développement low-code/no-code alimentée par l'IA la plus extensible pour créer des applications d'entreprise, des outils internes et toutes sortes de systèmes. Elle est entièrement auto-hébergée, basée sur des plugins et conviviale pour les développeurs. → [Découvrez NocoBase sur GitHub](https://github.com/nocobase/nocobase)

---

## **Qu'est-ce que NocoBase ?**

[NocoBase](https://www.nocobase.com/) est une plateforme open-source écrite en JavaScript, utilisant NodeJS, TypeScript et AntDesign, conçue pour créer des applications personnalisées sans avoir besoin de coder. C'est une solution backend low-code qui permet la création visuelle de tables, de formulaires personnalisés, d'automatisation de workflows et d'interfaces sur mesure.

![Qu'est-ce que NocoBase ?.png](https://static-docs.nocobase.com/0cfdc6c0e72f9088609239bbec1cd515.png)

### **Points clés de NocoBase** :

* **Communauté active** : Un forum très actif pour soutenir le développement de plugins et le dépannage.
* **Code constamment révisé** : Mises à jour fréquentes avec des contributions sur GitHub, comptant plus de 13 000 étoiles.
* **Compatibilité des bases de données** : Prend en charge les principales bases de données relationnelles comme Postgres et MySQL.
* **Modélisation visuelle des données** : Définissez des tables et des données visuellement à l'aide du plugin Base de données principale.
* **Bibliothèque de plugins étendue** : Offre une large gamme de plugins gratuits et payants, avec la possibilité de développer des plugins personnalisés.

* **Employés IA intégrés au système** : Intégrez de manière transparente les capacités d'IA dans les interfaces utilisateur, les workflows métier et les contextes de données, permettant à l'IA d'être appliquée de manière pratique dans des scénarios d'entreprise réels.

![Points clés de NocoBase.png](https://static-docs.nocobase.com/95c4cc96a72c8e414e5399d7d9b6ee18.png)

## **Aperçu de l'étude de cas**

Pour présenter certaines des fonctionnalités de NocoBase, nous allons créer une étude de cas appelée *Portail d'architecture*. Ce portail est conçu pour organiser les données sur les applications d'une organisation, avec les fonctionnalités suivantes :

* **Catalogue d'applications**.
* **Rappels pour les mises à jour**, telles que les mises à niveau de version et les renouvellements de certificats.
* **Catalogue d'API** pour les systèmes de l'organisation.
* **Graphiques** pour une visualisation perspicace des données.

![Aperçu de l'étude de cas.png](https://static-docs.nocobase.com/7391b4a43314b7ec8e84469f6e8d3697.png)

## **Étapes de développement**

### **Modélisation des données**

La première étape consiste à cartographier et définir les champs que nous inclurons dans le Portail d'architecture. Voici un exemple :

```
1. Catalogue d'applications

Applications :
id : Identifiant unique.
name : Nom de l'application.
description : Description détaillée de l'application.
stack : Technologies utilisées.
owner : Personne ou équipe responsable.
created_at : Date de création.
last_updated : Date de dernière mise à jour.

Rappels (Liés aux applications) :
id : Identifiant unique.
application_id : Référence à l'application.
type : Type de rappel (par exemple, mise à jour de version, renouvellement de certificat).
description : Description du rappel.
scheduled_date : Date planifiée pour le rappel.
status : Statut (par exemple, En attente, Terminé).

2. Catalogue d'API

API :
id : Identifiant unique.
Application_id : Référence au système correspondant.
name : Nom de l'API.
description : Description fonctionnelle de l'API.
documentation_url : Lien vers la documentation officielle.
last_updated : Date de dernière mise à jour.
version : Version actuelle.
```

### **Installation de NocoBase**

Pour l'[installation](https://docs.nocobase.com/welcome/getting-started/installation) et la configuration, j'ai opté pour l'utilisation de la version Docker localement. Les autres options d'installation incluent npm ou la source Git.

Voici le code YAML pour Docker Compose. Après avoir installé Docker, accédez au répertoire du fichier YAML et exécutez la commande suivante :

```
docker compose up -d
```

Cela lancera NocoBase sur votre machine sur le port `13000`. Ouvrez [`http://localhost:13000`](http://localhost:13000/) dans votre navigateur web. Les identifiants par défaut sont [`admin@nocobase.com`](mailto:admin@nocobase.com) et `admin123`.

```
version: '3'

networks:
  nocobase:
    driver: bridge

services:
  app:
    image: nocobase/nocobase:beta
    networks:
      - nocobase
    depends_on:
      - postgres
    environment:
      # La clé secrète de l'application, utilisée pour générer les jetons utilisateur, etc.
      # Si APP_KEY est modifié, les anciens jetons deviendront également invalides.
      # Il peut s'agir de n'importe quelle chaîne aléatoire, et assurez-vous qu'elle n'est pas exposée.
      - APP_KEY=your-secret-key
      # Type de base de données, prend en charge postgres, mysql, mariadb
      - DB_DIALECT=postgres
      # Hôte de la base de données, peut être remplacé par l'IP d'un serveur de base de données existant
      - DB_HOST=postgres
      # Nom de la base de données
      - DB_DATABASE=nocobase
      # Utilisateur de la base de données
      - DB_USER=nocobase
      # Mot de passe de la base de données
      - DB_PASSWORD=nocobase
      # Fuseau horaire
      - TZ=Asia/Shanghai
    volumes:
      - ./storage:/app/nocobase/storage
    ports:
      - '13000:80'
    # init: true

  # Si vous utilisez un serveur de base de données existant, le service postgres peut être omis
  postgres:
    image: postgres:16
    restart: always
    command: postgres -c wal_level=logical
    environment:
      POSTGRES_USER: nocobase
      POSTGRES_DB: nocobase
      POSTGRES_PASSWORD: nocobase
    volumes:
      - ./storage/db/postgres:/var/lib/postgresql/data
    networks:
      - nocobase
```

### **Création de tables et de données**

En utilisant le plugin **Gestionnaire de sources de données**, nous pouvons créer des collections (tables) et définir des champs. Le processus est simple et suit le modèle décrit ci-dessus. Voici quelques références et liens pour plus de détails sur le plugin [ici](https://www.nocobase.com/en/plugins)).

![Création de tables et de données.png](https://static-docs.nocobase.com/b0bece241dd24b7a80cdc69925bbe739.png)

![Création de tables et de données.png](https://static-docs.nocobase.com/c8b1b649eebf01b952cc88b4a6aadfc6.png)

### **Création de menus**

En cliquant sur l'icône en forme de crayon sur le côté droit de l'écran, vous pouvez créer des menus supérieurs et latéraux, comme illustré dans l'image. Reproduisons-le comme montré dans l'image.

![Création de menus.png](https://static-docs.nocobase.com/c501bbd624755efaff7110d7fa5431b2.png)

### **Création de formulaires**

La création de formulaires (CRUD) est également très simple. NocoBase utilise des blocs pour créer des tables, des formulaires, des détails, des listes, des graphiques, des cartes, etc. Après avoir sélectionné le type de bloc, il suffit de choisir la collection (table) que vous souhaitez lier à ce bloc, et le composant (bloc) lié à la collection apparaît comme par magie. Chaque bloc a ses propres paramètres de personnalisation. Pour plus de détails sur les blocs, consultez ici.

![Création de formulaires.png](https://static-docs.nocobase.com/fe99e76874a89bc15d5e8ae67722053d.png)

### **Création de graphiques**

La création de graphiques est également simple. Il suffit d'ajouter un bloc appelé *Graphique* et de sélectionner la collection que vous souhaitez utiliser comme source de données, comme illustré dans l'image ci-dessous.

![Création de graphiques.png](https://static-docs.nocobase.com/1fc75066b78581b91e1a4966f1718761.png)

Une fois le bloc sélectionné, vous pouvez configurer les propriétés du graphique. L'image ci-dessous montre les options de configuration du graphique, vous permettant de définir des indicateurs, un regroupement, des filtres, différents types de graphiques et des titres, parmi d'autres propriétés disponibles. Ici, vous pouvez explorer toutes les possibilités de configuration.

![Création de graphiques.png](https://static-docs.nocobase.com/acab53f9586f3c4fbf6d38ee95be0c17.png)

### **Création d'un workflow planifié pour les rappels**

NocoBase vous permet de créer des workflows automatisés pour effectuer différents types de tâches via des événements. Les trois types de déclencheurs sont : *Événement de collection, Événement planifié et Événement post-action.* En utilisant ces déclencheurs, vous pouvez créer des actions dans le système, telles que l'envoi de notifications, l'insertion de données dans d'autres tables ou l'envoi de requêtes à une API externe. Voici un exemple de workflow pour l'envoi de notifications dans l'application.

![Workflow.png](https://static-docs.nocobase.com/e58fb9a4492c7f620f1de94a9d240798.png)

Dans notre cas, nous allons créer un workflow pour envoyer une notification le jour où un rappel est planifié. Ce sera un **Événement planifié** pour s'exécuter tous les jours à une heure spécifique, comme illustré dans les images ci-dessous.

![Workflow.png](https://static-docs.nocobase.com/a095a620448ce80d7f4d385fe13d3a41.png)

![Workflow.png](https://static-docs.nocobase.com/802cd35254c5fd661543be67d964a52a.png)

En plus de configurer le planning, vous devez configurer le workflow pour interroger la collection **Rappels**, récupérer les rappels du jour, parcourir chacun d'eux et envoyer des notifications pour chaque rappel, comme illustré dans l'image ci-dessous. Le processus est simple : il suffit d'ajouter ces actions en cliquant sur le bouton "+" et en les configurant.

![Workflow.png](https://static-docs.nocobase.com/7e5534a92af59f2bb4272660bb3ed65f.png)

Après avoir terminé la configuration, activez simplement le workflow en cliquant sur le bouton "Activé" dans le coin supérieur droit. Pour voir les résultats d'exécution, cliquez sur le "…" dans le coin supérieur droit et sélectionnez **Historique d'exécution**, comme illustré dans l'image ci-dessous.

![Workflow.png](https://static-docs.nocobase.com/1a8dd52681a79e43d484b95d1326df81.png)

## **Conclusion**

Comme démontré, NocoBase offre de nombreuses fonctionnalités pour accélérer le développement d'applications. En fonction de l'échelle et des exigences, il offre une flexibilité pour la création d'applications, avec des capacités supplémentaires telles que la gestion de fichiers, l'internationalisation, la prise en charge mobile et l'édition de thèmes. Vous pouvez même développer vos propres plugins ou acheter des plugins commerciaux disponibles sur la place de marché.

Lectures connexes :

* [Comment créer des applications avec NocoBase ?](https://www.nocobase.com/en/blog/build-apps-with-nocobase)
* [Top 8 des plateformes de développement No-Code puissantes en 2025](https://www.nocobase.com/en/blog/top-8-powerful-no-code-development-platforms-in-2024)
* [Les 12 meilleurs outils No-Code Open-Source avec le plus d'étoiles GitHub](https://www.nocobase.com/en/blog/the-top-12-open-source-no-code-tools-with-the-most-github-stars)
* [Top 15 des projets Low-Code Open-Source avec le plus d'étoiles GitHub](https://www.nocobase.com/en/blog/top-15-open-source-low-code-projects-with-the-most-github-Stars)
* [Top 6 des outils No-Code pour les développeurs](https://www.nocobase.com/en/blog/top-6-no-code-tools-for-developers)
* [Top 7 des plateformes de développement rapide Open Source](https://www.nocobase.com/en/blog/rapid-development-platform)
