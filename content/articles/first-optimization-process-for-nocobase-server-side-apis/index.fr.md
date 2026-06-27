---
title: "Premier processus d'optimisation pour les API côté serveur de NocoBase"
description: "Découvrez le processus complet d'optimisation des API côté serveur de NocoBase. Ce guide détaillé couvre les tests de performance, l'analyse de code et les améliorations stratégiques pour accroître l'efficacité des API. Apprenez l'impact de divers middlewares et stratégies de mise en cache sur les performances, et explorez les améliorations significatives obtenues. Idéal pour les développeurs cherchant à optimiser les performances des API dans des scénarios complexes."
---

## Contexte

Un utilisateur a signalé un débit système insatisfaisant pour NocoBase via un [problème GitHub](https://github.com/nocobase/nocobase/issues/2912). Compte tenu de l'itération rapide de notre produit, l'équipe priorise actuellement les améliorations fonctionnelles du système, avec moins d'attention sur les optimisations spécifiques des performances. Cependant, alors que NocoBase passe en production et élargit sa base d'utilisateurs, des problèmes de performance émergent. Il est impératif pour nous d'intensifier notre attention et de lancer des efforts d'optimisation.

Certes, pour un produit comme NocoBase, les scénarios d'application réels ont tendance à être complexes, et il existe une variation significative dans les habitudes des utilisateurs. L'optimisation des performances nécessite des analyses spécifiques et par phases pour différents scénarios. Il n'est pas possible de traiter de manière exhaustive tous les problèmes en une seule série d'optimisations.

Cette série d'optimisations se concentre sur la fourniture d'une évaluation initiale des performances de l'API côté serveur du système, suivie d'améliorations fondamentales ciblées.

## Tests de performance

### Explication

NocoBase utilise le framework sous-jacent Koa + Sequelize. Nous avons conçu plusieurs scénarios de test à utiliser comme références pour une analyse comparative :

* **Koa + Sequelize :** Cela représente le framework fondamental, reflétant l'optimum théorique, bien que les scénarios réels puissent introduire certains compromis.
* **Koa + @nocobase/database :** @nocobase/database est une couche d'abstraction basée sur Sequelize pour les opérations de base de données.
* **Koa + @nocobase/resourcer :** @nocobase/resourcer fonctionne comme la couche de routage et de répartition.
* **Koa + @nocobase/server :** @nocobase/server sert de serveur NocoBase.
* **Koa + Nocobase :** Il s'agit du programme NocoBase complet, intégrant des plugins intégrés.

Ce test de performance n'est pas une simulation d'un environnement de production pour des tests de charge exhaustifs. Au lieu de cela, il se concentre sur des tests par couches pour comparer les données et identifier les principaux facteurs affectant les performances de l'API. Les tests ont été principalement effectués sur mon ordinateur personnel avec les spécifications suivantes :

* **Système d'exploitation :** MacOS 14.0
* **Processeur :** 10 cœurs
* **Mémoire :** 32 Go
* **Base de données :** PostgreSQL (Docker, dernière version)
* **Exécution NocoBase :** `yarn start -d`

Le point de terminaison d'API testé est `/api/users:list`, équivalent à exécuter les instructions `select ... limit 20` et `count` sur la table `users`. Le code spécifique peut être consulté [ici](https://github.com/nocobase/nocobase/tree/main/benchmark).

Chaque scénario de test a été évalué en utilisant la commande `wrk -t20 -c20 -d1m`.

### Koa + Sequelize

RPS : 6938.71

```
> $ wrk -t20 -c20 -d1m http://localhost:13020/ 
Running 1m test @ http://localhost:13020/
  20 threads and 20 connections
  Thread Stats   Avg      Stdev     Max   +/- Stdev
    Latency     2.91ms    0.88ms  38.10ms   97.01%
    Req/Sec   348.52     30.22   434.00     84.53%
  416831 requests in 1.00m, 141.52MB read
Requests/sec:   6938.71
Transfer/sec:      2.36MB
```

CPU de la base de données > 100 %

```
CONTAINER ID   NAME       CPU %     MEM USAGE / LIMIT     MEM %     NET I/O           BLOCK I/O         PIDS
80393e7580c1   postgres   125.63%   196.7MiB / 7.748GiB   2.48%     11.6GB / 15.8GB   76.4MB / 2.81GB   11
```

PostgreSQL utilise généralement un seul cœur de processeur, ce qui indique que le goulot d'étranglement des performances se situe au niveau de la base de données.

### Koa + @nocobase/database

RPS : 5487.29

```
> $ wrk -t20 -c20 -d1m http://localhost:13010/                   
Running 1m test @ http://localhost:13010/
  20 threads and 20 connections
  Thread Stats   Avg      Stdev     Max   +/- Stdev
    Latency     3.66ms  795.89us  32.80ms   91.85%
    Req/Sec   275.53     21.87   434.00     82.60%
  329784 requests in 1.00m, 121.71MB read
Requests/sec:   5487.29
Transfer/sec:      2.03MB
```

CPU de la base de données > 100 %

```
CONTAINER ID   NAME       CPU %     MEM USAGE / LIMIT     MEM %     NET I/O           BLOCK I/O         PIDS
80393e7580c1   postgres   102.99%   197.7MiB / 7.748GiB   2.49%     12.3GB / 16.6GB   76.5MB / 2.82GB   11
```

Les performances ont quelque peu diminué, mais c'est acceptable, et la base de données fonctionne généralement à pleine capacité.

### Koa + @nocobase/resourcer

RPS : 4787.94

```
> $ wrk -t20 -c20 -d1m 'http://localhost:13040/api/users:list'
Running 1m test @ http://localhost:13040/api/users
  20 threads and 20 connections
  Thread Stats   Avg      Stdev     Max   +/- Stdev
    Latency     4.20ms    0.92ms  30.97ms   88.29%
    Req/Sec   240.48     18.01   333.00     80.79%
  287757 requests in 1.00m, 120.47MB read
Requests/sec:   4787.94
Transfer/sec:      2.00MB
```

```
CONTAINER ID   NAME       CPU %     MEM USAGE / LIMIT     MEM %     NET I/O         BLOCK I/O         PIDS
80393e7580c1   postgres   87.72%    197.3MiB / 7.748GiB   2.49%     12.6GB / 17GB   76.5MB / 2.82GB   11
```

Les performances ont encore diminué et la base de données n'a pas atteint sa pleine capacité. Nous analyserons les raisons plus tard.

### Koa + @nocobase/server

RPS : 2285.86

```
> $ wrk -t20 -c20 -d1m 'http://localhost:13030/api/users:list'                                                   
Running 1m test @ http://localhost:13030/api/users:list
  20 threads and 20 connections
  Thread Stats   Avg      Stdev     Max   +/- Stdev
    Latency     8.80ms    2.05ms  93.25ms   97.23%
    Req/Sec   114.80      9.27   300.00     93.35%
  137358 requests in 1.00m, 87.90MB read
Requests/sec:   2285.86
Transfer/sec:      1.46MB
```

```
CONTAINER ID   NAME       CPU %     MEM USAGE / LIMIT     MEM %     NET I/O           BLOCK I/O         PIDS
80393e7580c1   postgres   47.82%    197.5MiB / 7.748GiB   2.49%     13.2GB / 17.7GB   76.9MB / 3.15GB   11
```

En comparant les données de test avec Koa + @nocobase/resourcer, il y a une réduction d'environ 50 % des performances, ce qui indique que le principal goulot d'étranglement des performances est passé de la base de données au programme lui-même.

### Nocobase

RPS : 580.48

```
> $ wrk -t20 -c20 -d1m 'http://localhost:13000/api/users:list?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEsImlhdCI6MTcwMTY3MjA3MCwiZXhwIjoxNzAyMjc2ODcwfQ.ISmvJ7cc2XhlNO3xB6O2gndvwKS2Xs71Fo2bXuRpmfg' 
Running 1m test @ http://localhost:13000/api/users:list?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEsImlhdCI6MTcwMTY3MjA3MCwiZXhwIjoxNzAyMjc2ODcwfQ.ISmvJ7cc2XhlNO3xB6O2gndvwKS2Xs71Fo2bXuRpmfg
  20 threads and 20 connections
  Thread Stats   Avg      Stdev     Max   +/- Stdev
    Latency    34.44ms    3.85ms  97.95ms   85.18%
    Req/Sec    29.03      3.94    50.00     85.04%
  34886 requests in 1.00m, 26.25MB read
Requests/sec:    580.48
Transfer/sec:    447.27KB
```

Les performances globales de NocoBase ont considérablement diminué, comme prévu avant les tests. Cela est dû au fait que les interfaces traversent de nombreux middlewares de plugins, impliquant l'authentification, les vérifications d'autorisations et les requêtes de base de données. Notamment, la mise en cache n'a pas été implémentée jusqu'à présent, ce qui en fait un axe clé d'optimisation pour la phase actuelle.

## Analyse du code et optimisation

### Sequelize -> database -> resourcer

La transition de Sequelize sous-jacent vers la base de données, puis vers le resourcer, bien que chaque couche entraîne une certaine surcharge de performance, reste acceptable pour un processus unique. Cela est principalement dû à un encapsulage supplémentaire de la logique du code. Comme l'objectif d'optimisation actuel n'est pas de parvenir à une solution complète en une seule fois, cette partie sera maintenue telle quelle pour le moment, et les ajustements nécessaires seront traités séparément à l'avenir.

### resourcer -> server

En passant du resourcer au serveur, la dégradation des performances dépasse la moitié, ce qui indique un problème certain dans ce domaine. Commençons donc l'analyse ici. Le serveur introduit des middlewares supplémentaires au niveau de l'application par rapport au resourcer (voir [`helper.ts`](https://github.com/nocobase/nocobase/blob/main/packages/core/server/src/helper.ts)). En examinant le code, la plupart des logiques semblent relativement simples, sans zones apparentes ayant un impact significatif sur les performances. Par conséquent, j'ai décidé de collecter des données relatives au temps de consommation des middlewares pour obtenir des informations supplémentaires.

#### perf\_hooks

NodeJS fournit des API de test de performance via [perf\_hooks](https://nodejs.org/api/perf_hooks.html#perf_hooksperformance). Ces API offrent un ensemble de métriques plus riche que les simples calculs de temps d'exécution. Dans notre contexte, l'accent reste mis sur l'examen minutieux du temps passé dans chaque middleware. En utilisant `perf_hooks.createHistogram` pour construire des histogrammes, nous pouvons exécuter des tests de charge, en enregistrant méticuleusement les temps d'exécution de chaque middleware. Cette approche nous permet d'obtenir des statistiques clés telles que les temps d'exécution minimum, maximum et médian sur la période de test de charge. Par exemple :

```
{
  "i18n": {
    "count": 12455,
    "min": 1875,
    "max": 927231,
    "mean": 4867.227137695704,
    "exceeds": 0,
    "stddev": 10258.399954791737,
    "percentiles": {
      "0": 1875,
      "50": 3250,
      "75": 5372,
      "100": 926720
    }
  }
}
```

Après avoir trié les résultats, deux composants middleware qui impactent notablement les performances se démarquent : la journalisation et `i18n`.

#### Journalisation

Par défaut, NocoBase envoie les logs à la fois vers des fichiers et le terminal simultanément. En se référant à la documentation Node.js sur les [E/S de processus](https://nodejs.org/api/process.html#a-note-on-process-io),

> **Avertissement** : Les écritures synchrones bloquent la boucle d'événements jusqu'à ce que l'écriture soit terminée.

Dans mon environnement de test, ces deux sorties sont probablement synchrones, et comme il y a une journalisation pour chaque requête et réponse, cela a inévitablement un impact sur les performances. Considérant que les logs d'interface sont essentiels, nous maintiendrons la configuration actuelle pour le moment. Cependant, dans un environnement de production, il est courant de ne conserver que les logs de fichiers. Par conséquent, dans les tests futurs, nous pouvons envisager de désactiver les logs du terminal pour réduire une partie de la surcharge de performance. En production, ajuster les niveaux de log selon les besoins est également une option viable.

#### i18n

Le middleware `i18n`, responsable de la gestion des ressources localisées, a montré un temps de consommation significatif, le principal goulot d'étranglement étant identifié dans la ligne de code suivante :

```
const i18n = ctx.app.i18n.cloneInstance({ initImmediate: false });
```

L'approche actuelle consistant à cloner une instance i18n pour isoler les ressources linguistiques dans différentes requêtes prend du temps. Pour optimiser, un modèle singleton basé sur la langue peut être implémenté, permettant la réutilisation des instances existantes pour la même langue au lieu de les recharger pour chaque requête.

### server -> NocoBase

Le passage d'un serveur simple au NocoBase complet entraîne une baisse significative des performances. Comme mentionné précédemment, le NocoBase complet inclut de nombreux plugins intégrés, introduisant de nombreux middlewares au niveau de la route, y compris l'authentification et les autorisations. En suivant les méthodes discutées précédemment, nous avons utilisé `perf_hooks` pour mesurer le temps passé dans ces middlewares. Les résultats mettent en évidence les deux middlewares les plus impactants et leur logique d'exécution principale :

* `authManager.middleware` - Middleware pour l'authentification des utilisateurs
  1. Vérifier si le jeton utilisateur est dans la liste noire.
  2. Récupérer la méthode d'authentification actuellement utilisée.
  3. Obtenir les informations utilisateur en fonction de la méthode d'authentification.
* `acl.setCurrentRole` - Middleware pour définir les informations de rôle dans le module d'autorisation
  * Récupérer les informations de rôle associées en fonction de l'ID utilisateur actuel et définir le rôle de l'utilisateur.

Ces deux middlewares effectuent des requêtes de base de données dans leur logique principale pour chaque requête. Pour résoudre ce problème, nous introduisons la mise en cache.

#### Stratégie de mise en cache

##### Stockage

NocoBase utilise actuellement à la fois la mise en cache en mémoire et Redis. Pour les données relativement statiques, comme les méthodes d'authentification système, nous les stockons en mémoire. Les données liées aux informations utilisateur suivent la configuration de stockage par défaut, permettant aux utilisateurs d'opter pour Redis comme méthode de stockage par défaut.

##### Mise en cache à la demande + Mise à jour par hooks

Les données telles que les méthodes d'authentification, les informations utilisateur et les rôles entrent généralement dans la catégorie des données à lecture intensive et à écriture minimale. Nous implémentons une stratégie de mise en cache à la demande, où la première requête déclenche une requête de base de données et les résultats sont mis en cache. Les requêtes suivantes utilisent les résultats mis en cache. Pour garantir la cohérence des données, nous introduisons des hooks pour écouter tout changement dans la base de données et les synchroniser avec le cache.

##### Filtre Bloom

Pour les requêtes de liste noire de jetons, où nous devons comparer les jetons utilisateur avec ceux de la liste noire, la mise en cache à la demande n'est pas adaptée. Au lieu de cela, lors du démarrage du programme, nous préchargeons les jetons de la liste noire dans le cache. Pour économiser de l'espace mémoire, nous utilisons un filtre Bloom pour mettre en cache la liste noire. Le filtre Bloom détermine avec précision si une valeur n'est pas présente, avec une probabilité de juger erronément l'existence d'une valeur. Initialement, le filtre Bloom vérifie si un jeton utilisateur est dans la liste noire. Si le filtre Bloom indique l'existence, nous effectuons une deuxième requête de base de données pour plus de précision.

##### LRU

Le cache mémoire de NocoBase utilise par défaut la stratégie Least Recently Used (LRU) pour l'éviction du cache. Les utilisateurs peuvent configurer des politiques de cache, comme définir une limite supérieure de l'espace de cache. Pour les utilisateurs de Redis, des stratégies de cache personnalisées comme LRU ou LFU peuvent être configurées selon les besoins.

#### Autres optimisations

En plus des optimisations de middleware mentionnées précédemment, certains middlewares, tels que db2resource et ACLMiddleware, ont également un impact sur les performances. Pour analyser plus en détail les goulots d'étranglement potentiels des performances, et comme il n'y a actuellement aucune tâche d'optimisation simple, nous prévoyons d'activer l'inspecteur pour examiner le profil CPU du système pendant l'exécution.

```
# Activer l'inspecteur
NODE_ARGS=--inspect yarn start
```

En envoyant continuellement des requêtes à l'API en utilisant wrk et en capturant le profil CPU dans Chrome DevTools sur une durée spécifique, nous pouvons obtenir des résultats similaires à ce qui suit.

![Chrome DevTools](https://static-docs.nocobase.com/fdfa998ef9c4067b2b302551f6ab950d.webp)

En inspectant le profil, nous avons identifié que certaines logiques dans db2resource pour l'analyse des routes, comme l'utilisation de pathToRegexp, ont un impact notable sur les performances, expliquant la dégradation supplémentaire des performances au niveau de la couche de routage observée dans les tests précédents. Dans ACLMiddleware, les opérations liées à la gestion des autorisations, comme miniMatch, ont également montré des temps d'exécution plus longs. Pour ces aspects, nous avons implémenté quelques optimisations préliminaires, comme la mise en cache de variables pour les calculs répétitifs. Des optimisations plus poussées seront traitées dans les itérations futures.

## Résumé

### Résultats de l'optimisation

Dans cet effort d'optimisation, nous nous sommes concentrés sur :

* L'utilisation de variables pour la mise en cache des opérations chronophages dans les middlewares, telles que la création d'instances `i18n` et les vérifications d'autorisations.
* L'introduction de mécanismes de mise en cache appropriés pour les opérations middleware impliquant des requêtes de base de données fréquentes.

De plus, nous recommandons d'ajuster le niveau et la méthode de sortie de la journalisation dans l'environnement de production en fonction des besoins pour atténuer l'impact de l'impression des logs sur les performances de l'API.

Après avoir implémenté ces optimisations, un nouveau test de l'application NocoBase complète a révélé des améliorations significatives des performances de l'API.

```
> $ wrk -c20 -t20 -d1m 'http://localhost:13000/api/users:list?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEsImlhdCI6MTcwMTY5NzU5MCwiZXhwIjoxNzAyMzAyMzkwfQ.Fs7ccoBKi2F2MPOCO5kpJHTH_mnVhqkFVQmlBzgBza0'
Running 1m test @ http://localhost:13000/api/users:list?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEsImlhdCI6MTcwMTY5NzU5MCwiZXhwIjoxNzAyMzAyMzkwfQ.Fs7ccoBKi2F2MPOCO5kpJHTH_mnVhqkFVQmlBzgBza0
  20 threads and 20 connections
  Thread Stats   Avg      Stdev     Max   +/- Stdev
    Latency     9.60ms    2.62ms 103.80ms   96.32%
    Req/Sec   105.44     11.62   393.00     83.66%
  126047 requests in 1.00m, 60.10MB read
  Non-2xx or 3xx responses: 2
Requests/sec:   2097.31
Transfer/sec:      1.00MB
```

### Optimisation continue

Le processus d'optimisation de cette série présente certaines limites :

D'une part, nous n'avons testé que des requêtes simples. Dans les scénarios métier réels, des aspects comme le filtrage, l'analyse des variables, les transactions complexes, etc., peuvent présenter des défis de performance supplémentaires qui nécessitent une optimisation plus poussée.

D'autre part, nous nous sommes concentrés sur l'optimisation des parties ayant un impact significatif sur les performances, laissant une marge d'amélioration dans d'autres domaines.

À l'avenir, nous continuerons à optimiser les performances de NocoBase. Si vous rencontrez des problèmes de performance dans votre utilisation, n'hésitez pas à fournir des cas spécifiques pour analyse et optimisation. Vos retours seront précieux pour traiter les scénarios d'utilisation réels.

## Références

* [Bonnes pratiques de mise en cache | Amazon Web Services](https://aws.amazon.com/cn/caching/best-practices/)
* [Filtre Bloom](https://redis.io/docs/data-types/probabilistic/bloom-filter/)
* [API de mesure des performances | Node.js v21.4.0 Documentation](https://nodejs.org/api/perf_hooks.html#perf_hookscreatehistogramoptions)
* [Débogage - Pour commencer | Node.js](https://nodejs.org/en/guides/debugging-getting-started)
