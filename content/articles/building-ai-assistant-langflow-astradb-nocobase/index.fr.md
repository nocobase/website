---
title: "Création d'un assistant IA avec Langflow et AstraDB : de l'architecture à l'intégration avec NocoBase"
description: "Cet article montre comment intégrer NocoBase, LangFlow et AstraDB pour créer un assistant IA, générant des insights via la vectorisation des données et la recherche sémantique, et optimisant les résultats grâce à la technologie RAG pour améliorer la gestion des données et les capacités de récupération intelligente."
---

📝 Note : Cet article a été mis à jour pour la dernière fois le 23 janvier 2026. Nous mettons régulièrement à jour les informations pour vous garantir les dernières informations ! 😊

Ce blog a été produit par Leandro Martins et a été initialement publié sur [Building an AI Assistant with Langflow and AstraDB: From Architecture to Integration with NocoBase](https://leandromartins.hashnode.dev/building-an-ai-assistant-with-langflow-and-astradb-from-architecture-to-integration-with-nocobase).

## **Introduction**

L'objectif de cet article est de démontrer la création d'un assistant IA intégrant les outils **NocoBase, LangFlow et VectorDB**. Comme base, j'utiliserai le système que je développe dans **NocoBase**, utilisé pour gérer les données d'architecture, en ajoutant un assistant IA pour générer des insights à partir des données contenues dans ce système, telles que les **Applications, le Catalogue d'API, la Conception de Solutions et les Stories**.

Pour cet article, nous utiliserons les technologies suivantes :

* **NocoBase, PostgreSQL et Docker**, préalablement configurés (dans cet article, je montrerai comment les installer).
* **LangFlow**, utilisé localement, dont l'installation peut être trouvée ici via Docker.
* **Base de données vectorielle**, en ouvrant un compte sur **AstraDB**, qui sera la base de données vectorielle utilisée dans cet article.

---

💬 Hé, vous lisez le blog NocoBase. NocoBase est la plateforme de développement low-code/no-code la plus extensible, alimentée par l'IA, pour créer des applications d'entreprise, des outils internes et toutes sortes de systèmes. Elle est entièrement auto-hébergée, basée sur des plugins et conviviale pour les développeurs. → [Découvrez NocoBase sur GitHub](https://github.com/nocobase/nocobase)

---

## **Aperçu de l'architecture**

![Aperçu de l'architecture.png](https://static-docs.nocobase.com/c22d65bc1b29655b4384722d666d3a8a.png)

Ce diagramme montre comment les nouvelles données (ou les données mises à jour) sont transformées en **embeddings** et stockées dans la **base de données vectorielle**.

1. **Utilisateur → Plateforme NocoBase**
   L'utilisateur interagit avec la plateforme NocoBase (par exemple, en ajoutant ou en mettant à jour un enregistrement dans une collection).
2. **Déclenchement CRUD**
   Une action CRUD (Créer, Lire, Mettre à jour, Supprimer) dans NocoBase déclenche un événement ou un workflow interne.
3. **Workflow (NocoBase)**
   NocoBase dispose d'un workflow configuré pour répondre aux modifications de données. Lorsqu'il détecte la création ou la modification d'un enregistrement, il lance l'étape suivante.
4. **Flux API : Charger les données**
   Le workflow NocoBase appelle une API ou un service externe depuis LangFlow pour envoyer les données qui seront transformées en embeddings.
5. **LangFlow — Données vers Embedding**
   LangFlow reçoit les données et, à l'aide de modèles de langage, convertit le contenu en vecteurs (embeddings). Ces embeddings représentent numériquement la signification ou le contexte du texte, permettant des recherches sémantiques.
6. **Base de données vectorielle (AstraDB)**
   Les embeddings sont ensuite stockés dans la base de données vectorielle (AstraDB), associant chaque embedding au contenu original (par exemple, un document, un enregistrement, un texte).

![diagramme.png](https://static-docs.nocobase.com/1d2495aef2ffb7901260d028ab3e00fe.png)

Ce diagramme illustre également comment l'utilisateur effectue des requêtes sémantiques sur la base de données vectorielle, recevant des résultats pertinents.

1. **Utilisateur → Plateforme NocoBase**
   L'utilisateur interagit à nouveau avec la plateforme NocoBase, mais cette fois en utilisant un Widget de Chat Intégré (ou une autre interface de recherche).
2. **Widget Chat Intégré**
   L'utilisateur saisit une question ou une invite. Par exemple : *"Affiche-moi les informations sur l'application X."* Ce widget envoie une requête à LangFlow, qui traite la demande.
3. **LangFlow — Données vers Embedding**
   LangFlow convertit l'invite de l'utilisateur en un embedding, qui représente l'intention de recherche au format vectoriel.
4. **Base de données vectorielle (AstraDB) — Recherche de similarité**
   L'embedding de l'invite est utilisé pour rechercher dans AstraDB les vecteurs les plus similaires (c'est-à-dire les contenus sémantiquement les plus proches).
5. **Affiner le résultat de la recherche dans le modèle**
   Sur la base des résultats renvoyés par AstraDB, LangFlow affine le résultat de la recherche à l'aide des modèles OpenAI (ou d'un autre LLM).
6. **Réponse à l'utilisateur**
   Le résultat final (textes, documents ou réponse générée) est renvoyé au widget de chat NocoBase, affichant la réponse à l'utilisateur.

## **Application utilisant NocoBase**

Pour cet article, j'utiliserai la même application créée précédemment. Il s'agit d'une application développée pour démontrer les fonctionnalités de NocoBase, dans laquelle je vais implémenter l'assistant IA. Vous trouverez ci-dessous une image illustrant le fonctionnement de l'assistant.

L'idée est d'obtenir des informations sur les fonctionnalités via des questions. Les fonctionnalités disponibles sont : Applications, Catalogue d'API, Conception de Solutions et Stories.

![Application utilisant NocoBase.webp](https://static-docs.nocobase.com/6e9829438c1354b2869e7fdf5628735a.webp)

## **Que sont LangFlow et AstraDB ?**

LangFlow est un outil open source développé par des créateurs brésiliens, offrant une interface graphique pour construire, visualiser et déboguer des workflows impliquant des modèles de langage. Basé sur l'écosystème LangChain, LangFlow facilite la création de pipelines de traitement du langage naturel (NLP) et d'applications d'IA générative de manière interactive, permettant aux développeurs de connecter différents composants — tels que les appels API, les transformations de texte et la logique métier — sans codage intensif.

![LangFlow et AstraDB.png](https://static-docs.nocobase.com/f96b8c2117c91fa90e83e7029edc905d.png)

Dans cet article, nous utiliserons AstraDB, où nous stockerons nos données vectorisées. Pour mieux comprendre les bases de données vectorielles, voici un [article](https://medium.com/@leandro.jm/uma-abordagem-agn%C3%B3stica-a-llm-db-vector-e-embedding-para-busca-sem%C3%A2ntica-ac1ed4c4b681) que j'ai écrit. N'oubliez pas non plus que LangFlow permet de passer à d'autres bases de données vectorielles.

**AstraDB**, à l'origine connu comme un service de base de données distribuée basé sur Apache Cassandra, a étendu ses capacités pour gérer le stockage de données non structurées et les recherches vectorielles. Cette fonctionnalité de base de données vectorielle est particulièrement utile pour les applications d'apprentissage automatique, la recherche sémantique, les systèmes de recommandation et les tâches de données à haute dimensionnalité.

![AstraDB.png](https://static-docs.nocobase.com/90e95b53095b9bf6a63244bb1b604275.png)

## **Installation de LangFlow**

Pour installer **LangFlow** via Docker, exécutez simplement la commande suivante, puis accédez au système à l'adresse **[localhost:7860](http://localhost:7860/)** :

```
docker run -it --rm -p 7860:7860 langflowai/langflow:latest
```

![Installation de LangFlow.png](https://static-docs.nocobase.com/a89abb9aa32bbc7a577f974b97f4aca1.png)

## **Configuration d'AstraDB**

Après avoir créé un compte sur AstraDB, vous pouvez configurer la base de données et la collection avec les données, comme indiqué ci-dessous.

Le processus est assez simple :

1. Choisissez un **fournisseur**
2. Sélectionnez une **région**
3. Créez la **base de données**

![Configuration d'AstraDB.png](https://static-docs.nocobase.com/a1e061ed6c29b261adb68fe8d8906bce.png)

Pour la collection, comme elle stocke des données vectorisées, il est crucial de configurer la fonctionnalité d'Embedding, qui correspond au modèle LLM responsable de la vectorisation des données.

Il existe plusieurs modèles pour la génération d'embeddings, tels que ceux d'OpenAI, Nvidia et Google. Dans ce cas, nous utiliserons le modèle text-embedding-ada-002 pour la conversion des données.

![Configuration d'AstraDB.png](https://static-docs.nocobase.com/2f94c8c7ef4c4356aae987f3bdeb1e7a.png)

## **Chargement des données dans la base de données vectorielle**

Cette étape alimente notre base de données vectorielle avec les données à rechercher.

1. Le workflow LangFlow reçoit les données via une URL.
2. Traite le texte
3. Le convertit au format vectoriel en utilisant text-embedding-ada-002
4. Le stocke dans AstraDB dans la collection configurée.

![Chargement des données dans la base de données vectorielle.png](https://static-docs.nocobase.com/b4477ee884a88ee7a3322e7650df3b4c.png)

## **Points importants**

* Il est nécessaire de définir le jeton AstraDB dans le composant responsable de la connexion à la base de données. Pour générer le jeton, accédez simplement à la collection dans AstraDB et cliquez sur Générer un jeton. L'image ci-dessous montre l'écran avec le bouton correspondant.

![Points importants.png](https://static-docs.nocobase.com/763d524e462a8ac4454b43e1558cbe3b.png)

* **Aperçu de la base de données** : Le fichier source se trouve dans [mon dépôt](https://github.com/leandro-jm).
* Pour le modèle que nous utilisons, il est nécessaire d'ajouter des crédits pour accéder à l'API OpenAI. La documentation suivante explique comment effectuer ce processus. Après avoir ajouté des crédits, vous devez générer un jeton et le définir dans le composant responsable de la génération d'embeddings. Voici un lien avec des instructions sur ce processus. N'oubliez pas qu'il existe différents modèles disponibles pour générer des embeddings.

Pour tester, utilisez simplement Postman, en appelant l'URL qui peut être obtenue à partir de API > cURL dans LangFlow. Vous trouverez ci-dessous un exemple de requête utilisant Postman.

![Points importants.png](https://static-docs.nocobase.com/16ae6e4697b7a8349955831370e39e47.png)

## Effectuer des recherches à l'aide d'un modèle

Cette étape est responsable de la récupération des données de la base de données vectorielle et de leur affinement via **RAG (Retrieval-Augmented Generation).**

![Effectuer des recherches à l'aide d'un modèle.png](https://static-docs.nocobase.com/aec6663ed0a2f2d8a1a01afb89140dc5.png)

À ce stade, il est également nécessaire de définir les jetons OpenAI et AstraDB dans leurs composants respectifs. Le fichier source se trouve dans [mon dépôt](https://github.com/leandro-jm).

Pour le tester, utilisez simplement le Chat, disponible dans LangFlow dans l'onglet Playground.

## **Configuration du workflow dans NocoBase**

Dans cette étape, nous allons créer des déclencheurs dans notre application pour envoyer les données qui doivent être vectorisées. En d'autres termes, chaque fois que de nouvelles données sont insérées, elles seront envoyées à l'API LangFlow pour traitement.

Pour ce faire, nous utiliserons la fonctionnalité Workflow de NocoBase. Pour plus de détails sur les workflows, accédez au [lien](https://docs.nocobase.com/handbook/workflow).

![Configuration du workflow dans NocoBase.png](https://static-docs.nocobase.com/e035bb1b812c53d6a96e5bcbf900a02d.png)

Nous allons créer un workflow pour envoyer les données de la collection de notre application vers la collection vectorisée.

**Étapes :**

Créez un nouveau workflow comme indiqué ci-dessous, Événement de collection.

![Configuration du workflow dans NocoBase.png](https://static-docs.nocobase.com/4e97564ec88cb1f2721016dbff94023d.png)

Définissez le **Déclencheur** comme une insertion dans la collection **Application**, comme indiqué ci-dessous.

![Configuration du workflow dans NocoBase.png](https://static-docs.nocobase.com/c7f5a312533558914de9053861bde66a.png)

Créez un nouveau **nœud de requête** pour envoyer les données de l'application pour vectorisation. Dans cet article, nous utiliserons **Titre** et **Description** comme exemples, mais toute information peut être envoyée selon les règles métier.

![Configuration du workflow dans NocoBase.png](https://static-docs.nocobase.com/2da29b9ebb3afe6306f785cb0dcbc7e7.png)

L'**étape de notification** est facultative et n'a pas besoin d'être exécutée.

## **Ajout du widget de chat dans NocoBase**

Tout d'abord, accédez à LangFlow et copiez le code du widget de chat à partir de l'option API, comme indiqué dans l'image ci-dessous.

![Ajout du widget de chat dans NocoBase.png](https://static-docs.nocobase.com/37bc9b9f48a4803639b54707e5b3fd25.png)

Dans la deuxième étape, créez simplement une page et ajoutez un composant iframe. Pour plus de détails sur ce composant, vous pouvez consulter le [lien](https://docs.nocobase.com/handbook/block-iframe).

**Où :**

* **Mode :** HTML
* **HTML :** Le code ci-dessous, en remplaçant le **flow\_id** et le **host\_url** selon les valeurs de LangFlow.

![Ajout du widget de chat dans NocoBase.png](https://static-docs.nocobase.com/d03e4e25fd4241263c332f9c00dcf1c3.png)

## **Test du chat**

Maintenant, revenons au menu créé, testons notre Assistant et vérifions la réponse, comme dans l'exemple ci-dessous.

![Test du chat.png](https://static-docs.nocobase.com/8c43434a510ec2b80a61aca44d939249.png)

## **Conclusion**

Dans cet article, nous avons démontré la création d'un assistant IA intégré à NocoBase, LangFlow et AstraDB, permettant la vectorisation et la récupération intelligente des données.

Avec cette approche, nous avons pu implémenter un assistant capable de générer des informations précieuses à partir des données enregistrées, en utilisant des techniques RAG (Retrieval-Augmented Generation) pour affiner les résultats de recherche.

Ce n'est que le début de ce que cette architecture peut offrir. Avec de petites adaptations, il est possible d'étendre les fonctionnalités, d'intégrer de nouveaux modèles d'IA et d'améliorer l'expérience utilisateur. 🚀

**Lectures connexes :**

* [Développer un plugin pour envoyer des messages WhatsApp dans NocoBase](https://www.nocobase.com/en/blog/developing-a-plugin-to-send-whatsapp-messages)
* [Gouvernance d'architecture simplifiée : Créer un catalogue d'applications avec NocoBase](https://www.nocobase.com/en/blog/building-an-application-catalog-with-nocobase)
* [Comment sauvegarder et restaurer NocoBase](https://www.nocobase.com/en/blog/nocobase-backup-restore)
* [Comment créer des applications avec NocoBase ?](https://www.nocobase.com/en/blog/build-apps-with-nocobase)
* [Comment charger une image Docker sur un serveur intranet](https://www.nocobase.com/en/blog/load-docker-image)
