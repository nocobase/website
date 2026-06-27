---
title: "NocoBase 0.16 : Nouveau gestionnaire de cache"
description: "NocoBase 0.16 introduit un nouveau gestionnaire de cache prenant en charge les magasins mémoire et Redis, nécessite Node v18, et met à jour les méthodes de création de cache et les variables d'environnement."
---

## Nouvelles fonctionnalités

La version précédente du cache avait une mauvaise ergonomie (seulement un cache mémoire), la v0.16 a été refactorisée avec un cache mémoire et Redis intégrés, et prend également en charge les magasins personnalisés. Veuillez consulter la [documentation de l'API](https://docs.nocobase.com/api/cache/cache-manager) pour plus de détails sur l'utilisation.

## Changements cassants

### Version minimale de Node passée à 18

Node v16 n'est plus maintenu, la version minimale a été changée à v18.

```
{
  "engines": {
    "node": ">=18"
  }
}
```

### Mise à jour de la méthode de création du cache

Obsolète : Utilisation de `createCache` pour la création du cache.

```
import { createCache } from "@nocobase/cache";

const cache = createCache();
```

Le cache est désormais géré par `CacheManager` et créé avec `app.cacheManager`.

```
const cache = await app.cacheManager.createCache({
  name: "memory", // nom unique du cache
  store: "memory", // nom unique de la méthode de cache
  // autre configuration
  max: 2000,
  ttl: 60 * 1000,
});
```

### Mise à jour des variables d'environnement

Les anciennes variables d'environnement du cache nécessitaient une chaîne JSON pour la configuration.

```
CACHE_CONFIG={"storePackage":"cache-manager-fs-hash","ttl":86400,"max":1000}
```

Nouvelles variables d'environnement pour configurer le cache :

```
# Nom unique de la méthode de cache par défaut, memory ou redis
CACHE_DEFAULT_STORE=memory
# Nombre maximum d'éléments dans le cache mémoire
CACHE_MEMORY_MAX=2000
# Redis, optionnel
CACHE_REDIS_URL=redis://localhost:6379
```

## Journal des modifications complet

* refactor(cache): amélioration du cache [`#3004`](https://github.com/nocobase/nocobase/pull/3004)
* fix: URL de base du stockage local [`#3063`](https://github.com/nocobase/nocobase/pull/3063)
* feat: afficher la définition de la table [`#3061`](https://github.com/nocobase/nocobase/pull/3061)
* feat: prise en charge de MariaDB [`#3052`](https://github.com/nocobase/nocobase/pull/3052)
* fix(plugin-workflow): corrections mineures du client [`#3062`](https://github.com/nocobase/nocobase/pull/3062)
* chore: inférence de vue [`#3060`](https://github.com/nocobase/nocobase/pull/3060)
* fix: tri par collection d'association [`#3058`](https://github.com/nocobase/nocobase/pull/3058)
* feat: node >= 18 [`#3066`](https://github.com/nocobase/nocobase/pull/3066)
