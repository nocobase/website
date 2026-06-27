---
title: "Comment créer des applications avec NocoBase ?"
description: "Explorons comment construire une application de suivi d'animaux avec NocoBase !"
---

📝 Note : Cet article a été mis à jour pour la dernière fois le 23 janvier 2026. Nous mettons régulièrement les informations à jour pour vous garantir les dernières informations ! 😊

Ce blog a été produit par Don Freeman de [Freeman Tech Consulting](https://freemantechconsulting.com/) et a été initialement publié sur [nocodefounders.com](https://www.aidutu.cn/info/link?url=http://nocodefounders.com). Freeman Tech Consulting est un cabinet d'ingénierie logicielle complet qui peut vous aider avec les déploiements No Code, le développement d'applications web, la conception/construction d'infrastructures cloud, la gestion GRC, l'analyse de données, et bien plus encore.

## 🌟 Qu'est-ce que NocoBase ?

**NocoBase** est une plateforme IA sans code (zéro code) / low-code conçue pour faciliter la création d'applications pilotées par les données. Ils proposent des versions payantes où le logo NocoBase est supprimé. C'est un logiciel open source, donc si vous souhaitez y contribuer, vous pouvez le faire facilement sur GitHub. Ils fournissent un système de plugins pour étendre les fonctionnalités de la plateforme si nécessaire.

## 🚀 Déployer NocoBase Localement

### **Ce qui est nécessaire pour exécuter NocoBase localement ?**

* **Docker**
* **Docker compose**
* **Une base de données PostgreSQL** Dans ce blog, nous en exécuterons une avec docker compose, mais dans un environnement de production réel, vous voudriez avoir une base de données PostgreSQL dédiée.

### **Exécuter NocoBase Localement**

* Les étapes pour exécuter NocoBase localement se trouvent sur leur site web [ici](https://docs.nocobase.com/welcome/getting-started/installation/docker-compose)

Tout d'abord, créez un répertoire dans lequel vous allez travailler. Dans votre terminal, placez-vous dans ce répertoire. Ensuite, vous devez créer un fichier docker compose. J'ai utilisé celui des références ci-dessus pour démarrer sur le site web de NocoBase et je l'ai légèrement modifié.

---

💬 Hé, vous lisez le blog NocoBase. NocoBase est la plateforme de développement low-code/sans code alimentée par l'IA la plus extensible pour créer des applications d'entreprise, des outils internes et toutes sortes de systèmes. Elle est entièrement auto-hébergée, basée sur des plugins et conviviale pour les développeurs. → [Découvrir NocoBase sur GitHub](https://github.com/nocobase/nocobase)

---

***Le docker compose ci-dessous montre l'exécution d'une base de données PostgreSQL localement, mais il est suggéré d'avoir une base de données dédiée dans un environnement de production réel.***

![docker compose.png](https://static-docs.nocobase.com/8c25f1c572a1330beb04376b5053dcd4.png)

Après avoir créé ceci dans le répertoire local, exécutez la commande suivante pour télécharger les images nécessaires.

![télécharger les images nécessaires.png](https://static-docs.nocobase.com/222cba9fddfe376ee2d031bfb1aa1708.png)

Exécutez maintenant la commande suivante pour démarrer les conteneurs en arrière-plan.

![démarrer les conteneurs.png](https://static-docs.nocobase.com/7fc3c0958673e3264b2881c18a5e949d.png)

Vous pouvez maintenant accéder à NocoBase à l'adresse http://localhost:13000

## 🐶 Construction de l'application NocoBase : Application de Suivi d'Animaux de Compagnie

![Application de Suivi d'Animaux de Compagnie.png](https://static-docs.nocobase.com/0960fcf248fce60c67d186aaa5b1e8fe.png)

Dans cet exemple, nous allons construire une application de suivi d'animaux de compagnie 🐕 🐈 ! Cette application suivra les propriétaires d'animaux et les informations de leurs animaux. Tout d'abord, nous devons définir le modèle de données pour notre application. C'est très facile dans NocoBase.

### **Modèle de Données NocoBase**

**🔍 Trouver l'Éditeur de Modèle de Données**

Dans l'interface utilisateur de NocoBase, vous pouvez cliquer sur le petit engrenage ⚙️ dans le coin supérieur droit, puis cliquer sur `Sources de données`. Cela ouvrira l'éditeur de modèle de données. Une fois là, vous verrez la source de données par défaut qui devrait s'appeler main. Cliquez sur `Configurer` pour la source de données main.

**Créer des Collections**

Nous pouvons maintenant créer des collections dans la source de données main. Ces collections contiendront les données de notre application. Pour cet exemple, nous allons créer deux collections. Une pour les propriétaires d'animaux et une pour les animaux.

**Collection Propriétaire d'Animal**

Sur l'écran des collections, cliquez sur le bouton `Nouvelle Collection`. Donnez ensuite à la collection un `Nom d'affichage de la collection` de Propriétaire d'Animal et un `Nom de la collection` de petowner.

Ajoutons maintenant les champs dont nous avons besoin à la collection des propriétaires d'animaux. Depuis l'écran des collections, cliquez sur `Configurer les champs` à côté de la collection Propriétaire d'Animal. Avec le bouton `Ajouter un champ`, vous pouvez ajouter les champs dont nous avons besoin à la collection. La collection des propriétaires d'animaux aura les champs suivants.

* **Prénom** *Interface de champ Texte sur une seule ligne*
* **Nom** *Interface de champ Texte sur une seule ligne*
* **Email** *Interface de champ Email*

**Collection Animal**

Nous pouvons maintenant répéter ces mêmes étapes pour la collection des animaux. La collection des animaux aura les champs suivants.

* **Nom** *Interface de champ Texte sur une seule ligne*
* **Type d'Animal** *Interface de champ Sélection multiple*
* **Date de naissance** *Interface de champ Date et heure*

**🔗 Lier la Collection Propriétaire d'Animal à la Collection Animal**

Pour lier la collection Propriétaire d'Animal à la collection Animal, retournez à la collection **Animal** et cliquez sur le bouton `Ajouter un champ` sous l'écran de configuration de la collection. Trouvez le type d'interface Un à Plusieurs. Donnez un nom d'affichage à la relation, sélectionnez animal comme `Collection cible`, puis ID comme `Clé cible`.

**🥳 Le modèle de données est terminé !!!**

C'est tout pour la configuration du modèle de données. Voici mon exemple pour le modèle de données des animaux.

![modèle de données des animaux.png](https://static-docs.nocobase.com/5b683b9ddaeab7c644512fa7dbdbbeb6.png)

### **Construction de l'Interface Utilisateur NocoBase**

**🏠 Créer la Page d'Accueil**

Maintenant que notre modèle de données est complet, nous pouvons rapidement construire une interface utilisateur pour interagir avec ce modèle de données. Revenez à la page principale de l'application et vous devriez voir l'élément `Ajouter un nouvel élément de menu` en haut de la page. Cliquez dessus, puis cliquez sur `page`. Donnez un nom à la page, par exemple Accueil, puis vous devriez voir quelque chose de similaire à ceci.

![Créer la Page d'Accueil.png](https://static-docs.nocobase.com/06081448ef1a5b90c1703905e42bb727.png)

**📜 Créer une Liste des Propriétaires d'Animaux**

Nous allons maintenant ajouter une liste de cartes pour nous permettre d'interagir avec notre collection de propriétaires d'animaux. Cliquez sur `Ajouter un bloc` → `Grille de cartes` → `PetOwner`. Cela nous permet d'afficher nos propriétaires d'animaux dans une grille de cartes. Cliquez sur `Configurer les champs` pour ajouter les champs Prénom, Nom et Email.

**➕ Ajouter des Propriétaires d'Animaux**

Nous devons maintenant être capables de créer des propriétaires d'animaux. Cliquez sur `Configurer l'action` dans le coin supérieur droit du bloc (**pas** le `Configurer l'action` dans la carte). Cliquez ensuite sur `Ajouter nouveau`. Cela crée un bouton qui dit Ajouter nouveau. Cliquez sur ce bouton pour configurer ce qui peut être fait lors de l'ajout d'un propriétaire d'animal.

**🍿 Fenêtre contextuelle Ajouter un nouveau propriétaire d'animal**

À l'intérieur de la fenêtre contextuelle, cliquez sur `Ajouter un bloc` → `Formulaire` → `Collection actuelle`. Cliquez sur `Configurer les champs` et ajoutez Prénom, Nom et Email. Cela vous permet de renseigner ces valeurs lors de la création d'un nouveau propriétaire d'animal. Enfin, cliquez sur `Configurer l'action` → `Soumettre`. Cliquez en dehors de la fenêtre contextuelle pour la fermer.

**➕ Ajouter un Nouvel Animal**

Maintenant que nous avons la possibilité de voir et de créer de nouveaux propriétaires d'animaux, nous devons pouvoir ajouter leurs animaux. Revenez maintenant sur la **Page d'Accueil**, cliquez sur `Configurer l'action` *à l'intérieur de la carte* et cliquez sur popup. Cela créera un lien dans la carte appelé popup, cliquez dessus. À l'intérieur de la fenêtre contextuelle, cliquez sur `Ajouter un bloc` → `Formulaire (ajouter nouveau)` → `Enregistrements associés` → `Animaux`. Dans ce nouveau bloc, cliquez sur `Configurer les champs` et ajoutez Nom, Type d'Animal, Date de naissance. Cela vous permet de renseigner ces valeurs lors de la création d'un nouvel animal. Enfin, cliquez sur `Configurer l'action` → `Soumettre`.

**📜 Lister les Animaux Existants**

Maintenant, juste en dessous de ce nouveau bloc, cliquez sur `Ajouter un bloc` → `Liste` → `Enregistrements associés` → `Animaux`. Dans ce nouveau bloc, cliquez sur `Configurer les champs` et ajoutez Nom, Type d'Animal et Date de naissance. La fenêtre contextuelle devrait ressembler à ceci. J'avais déjà un animal dans ma base de données, donc cela peut sembler légèrement différent.

![Lister les Animaux Existants.png](https://static-docs.nocobase.com/3cfc6fadf38b4f88dcee4478aa1b65cb.png)

Cliquez en dehors de la fenêtre contextuelle pour la fermer. Nous avons maintenant la possibilité de créer et de voir des animaux. Votre interface utilisateur devrait maintenant ressembler à ceci.

![Interface Utilisateur.png](https://static-docs.nocobase.com/97149b76b62c72ccc9d484ceffd50208.png)

**🧪 Testez-le**

Cliquez maintenant sur le bouton orange Éditeur d'interface utilisateur pour quitter l'éditeur. Vous pouvez jouer avec l'interface utilisateur et créer des animaux et des propriétaires d'animaux.

Ce blog manquait de nombreuses parties, notamment l'authentification des utilisateurs, des interfaces utilisateur plus complexes, le déploiement d'un environnement de production, etc. Je pourrais les aborder dans de futurs blogs.

💡 En savoir plus :

* [Construire un Assistant IA avec Langflow et AstraDB : De l'Architecture à l'Intégration avec NocoBase](https://www.nocobase.com/en/blog/building-ai-assistant-langflow-astradb-nocobase)
* [Développer un Plugin pour Envoyer des Messages WhatsApp dans NocoBase](https://www.nocobase.com/en/blog/developing-a-plugin-to-send-whatsapp-messages)
* [Gouvernance d'Architecture Simplifiée : Construire un Catalogue d'Applications avec NocoBase](https://www.nocobase.com/en/blog/building-an-application-catalog-with-nocobase)
